/* globals */

import start from './WebServer';
import config from '../../webpack.dev.config.js';

start();

// const port = process.env.PORT || 80;
// const Server = new WebServer();

// Server.on('started', (err, msg) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(msg)
//     }
// });

// Server.on('stopped', (err, msg) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(msg)
//     }
// });

// Server.start({ port, config }, () => {
//     console.log(`App listening on ${ port }`);
//     console.log('Press Ctrl+C to quit.');
// });