var React =  require('react');
var Router =  require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var RouteHandler = Router.RouteHandler;
require('../css/app.css');

//layout
var Home = require('./home/home.jsx');
var TopBar = require('./topbar/topbar.jsx');
var Footer = require('./footer/footer.jsx');

//routes;
var Episodio = require('./episodio/episodio.jsx');
var Episodios = require('./episodios/episodios.jsx');
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
		<Route name="episodio" path="episodios/:episodioId" handler={Episodio}></Route>
		<Route name="episodios" path="episodios" handler={Episodios}/>
		<NotFoundRoute handler={NotFound}/> 
	</Route>
);
