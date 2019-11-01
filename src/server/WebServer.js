/* global process */

// Native Packages
import http from 'http';

// Framework
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// NPM Packages
import uuid from 'uuid/v1';
import express from 'express';
import session from 'express-session';
import socket from 'socket.io';

// Middleware
import MongoConnect from 'connect-mongo';

// Libraries
import db from './libraries/database';
import { logger as log, http as httplogger } from './libraries/logger';

// Routes
import indexRouter from './routes/indexRouter';
import sessionRouter from './routes/sessionRouter';

// Local Files
import config from '../../webpack.dev.config.js';

function start() {

    log.info('Starting Server');

    // Baseline
    const app = express();
    const server = http.Server(app)
    const io = socket(server);
    const compiler = webpack(config);

    // Configuration
    const PORT = process.env.PORT || 3000;

    // Middleware
    const MongoStore = MongoConnect(session);

    app.use(session({
        secret: uuid(),
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({
            mongooseConnection: db.connection
        })
    }));

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));

    app.use(webpackHotMiddleware(compiler));

    app.use((req, res, next) => {
        httplogger.info(`HTTP ${req.method} ${req.url}`);
        next();
    });

    app.use('/', indexRouter(compiler));
    app.use('/session', sessionRouter(compiler));

    io.on('connection', (socket) => {
        // Do something with the session?
        // socket.handshake.session.data = { blah }
        socket.on('*', (message) => {
            message = JSON.stringify(message);
            log.info(`SOCK ${message}`);
        })
        socket.on('message', (data) => {
            socket.emit('message', data);
        });
        socket.on('database', (data) => {
            const user = new db.models.User(data);
            user.save().then(() => db.models.User.find((err, cats) => {
                socket.emit('database', JSON.stringify(cats))
            }));
        });
        socket.on('session', (data) => {
            if (data) {
                for (var item in data) {
                    socket.handshake.session.data.item = data[item];
                }
                socket.handshake.session.save();
            }
            socket.emit('session', socket.handshake.session);
        });
        io.emit('message', 'Hi there!');
    });

    server.listen(PORT, () => {
        log.info('Web Server Started');
    });
}

export default start;
