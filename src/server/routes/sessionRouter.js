/* globals */

// Native Packages
import express from 'express';

// Middleware
const router = express.Router();

function indexRouter() {

    router.post('/session', (req, res, next) => {
        req.session.data = req.body;
        req.session.save();
        res.set('content-type', 'text/html');
        res.end('ok');
        next();
    });

    router.get('/session', (req, res, next) => {
        res.set('content-type', 'text/html');
        res.send(req.session.data);
        res.end();
        next();
    });

    return router;

}

export default indexRouter;
