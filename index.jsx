require('font-awesome-webpack');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');
window.$ = window.jQuery = require('jquery/dist/jquery.min.js');
require('bootstrap/dist/js/bootstrap.min.js'); 
require('font-awesome-webpack');
require('./assets/css/googlefonts.js');
var css = require('./assets/css/app.css');


var React = require('react');
var Router = require('react-router');
var routes = require('./assets/js/router.config.jsx');
Router.run(routes, Router.HashLocation, function(Handler){
	React.render( <Handler/> , document.body);
});


