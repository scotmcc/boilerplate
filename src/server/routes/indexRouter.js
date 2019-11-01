/* globals __dirname */

// Native Packages
import path from 'path';
import express from 'express';

// Middleware
const router = express.Router();

// Configuration
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');

function indexRouter(compiler) {

    router.get('/', (req, res, next) => {
        compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
            if (err) {
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });

    return router;

}

export default indexRouter;
