require('font-awesome-webpack');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');
window.$ = window.jQuery = require('jquery/dist/jquery.min.js');
require('bootstrap/dist/js/bootstrap.min.js'); 
require('font-awesome-webpack');


var React = require('react');
React.render((require('./assets/js/router.config.jsx')),document.body);


