/* global console process __dirname */

import path from 'path';
import webpack from 'webpack';
import express from 'express';
import http from 'http';
import socket from 'socket.io';
import config from '../../webpack.dev.config.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

function start() {

    const app = express();
    const server = http.Server(app)
    const io = socket(server);
    const compiler = webpack(config);

    const PORT = process.env.PORT || 3000;
    const DIST_DIR = __dirname;
    const HTML_FILE = path.join(DIST_DIR, 'index.html');

    server.listen(PORT);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    }));

    app.use(webpackHotMiddleware(compiler));

    app.get('/', function(req, res, next) {
        console.error('express connection');
        compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
            if (err) {
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });

    io.on('connection', function(socket) {
        socket.emit('news', {
            hello: 'world'
        });
        socket.on('foo', function(data) {
            console.log(data);
        });
    });

}

export default start;
