var React =  require('react');
var Router =  require('react-router');
require('./app.css');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var RouteHandler = Router.RouteHandler;


var Home = require('./home.jsx');
var About = require('./about.jsx');
var NotFound = require('./notfound.jsx');

var App = React.createClass({
	render: function() {
		return (
			<div className="fullheight">
				<div className="main-container">
					<RouteHandler/>
				</div>
			</div>
		);
	}
});


module.exports = (
	<Route handler={App} name="app" path="/">
		<DefaultRoute handler={Home} />
		<Route name="about" path="about" handler={About}/>
		<NotFoundRoute handler={NotFound}/> 
	</Route>
);
