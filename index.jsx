var React = require('react');
var Router = require('react-router');

require('font-awesome-webpack');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/css/bootstrap-theme.min.css');
window.$ = window.jQuery = require('jquery/dist/jquery.min.js');
require('bootstrap/dist/js/bootstrap.min.js'); 

var routes = require('./assets/js/router.config.jsx');

Router.run(routes, Router.HashLocation, function(Root){
	React.render( <Root /> , document.body);
});


