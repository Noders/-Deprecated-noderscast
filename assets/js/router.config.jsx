var React =  require('react');
var Router =  require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var RouteHandler = Router.RouteHandler;


var Home = require('./home/home.jsx');
var About = require('./about.jsx');
var NotFound = require('./notfound.jsx');
var TopBar = require('./topbar/topbar.jsx');
var Footer = require('./footer/footer.jsx');

var App = React.createClass({
	render: function() {
		return (
			<div className="fullheight site-wrapper">
				<TopBar/>
				<div className="container site-container">
					<RouteHandler/>
				</div>
				<Footer/>
			</div>
		);
	}
});


module.exports = (
	<Route handler={App} name="app" className="" path="/">
		<DefaultRoute handler={Home} />
		<Route name="about" path="about" handler={About}/>
		<NotFoundRoute handler={NotFound}/> 
	</Route>
);
