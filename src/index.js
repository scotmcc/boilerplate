/* globals module */

import './javascripts/modernizer'; // eslint-disable-line no-undef
import './javascripts/jquery'; // eslint-disable-line no-undef
import './javascripts/plugins';
import './javascripts/main';

import logMessage from './javascripts/logger';

import './stylesheets/normalize.css';
import './stylesheets/main.css';
import './stylesheets/style.css';

import './assets/favicon.ico';

import './assets/site.webmanifest';

logMessage('Welcome to Scot\'s Expack!');

if (typeof(module.hot) !== 'undefined') {
    module.hot.accept();
}
