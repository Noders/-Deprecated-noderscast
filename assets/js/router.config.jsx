var React =  require('react');
var Router =  require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
	render: function() {
		return (
				<div className="main-container">
					<RouteHandler/>
				</div>
		);
	}
});

var Home = require('./home.jsx');
var About = require('./about.jsx');
var NotFound = require('./notfound.jsx');

module.exports = (
	<Route handler={App} name="app" path="/">
		<DefaultRoute handler={Home} />
		<Route name="about" path="about" handler={About}/>
		<NotFoundRoute handler={NotFound}/> 
	</Route>
);
