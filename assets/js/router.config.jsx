var React =  require('react');
var Router =  require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var RouteHandler = Router.RouteHandler;

//layout
var Home = require('./home/home.jsx');
var TopBar = require('./topbar/topbar.jsx');
var Footer = require('./footer/footer.jsx');

//routes;
var Capitulos = require('./capitulos/capitulos.jsx');
var NotFound = require('./notfound.jsx');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<TopBar/>
				<div >
					<div className="row site-container">
						<RouteHandler/>
					</div>
					<Footer/>
				</div>
			</div>
		);
	}
});


module.exports = (
	<Route handler={App} name="app" className="" path="/">
		<DefaultRoute handler={Home} />
		<Route name="capitulos" path="capitulos" handler={Capitulos}/>
		<NotFoundRoute handler={NotFound}/> 
	</Route>
);
