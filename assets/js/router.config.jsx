var React =  require('react');
var {Router, Route, Link} =  require('react-router');
require('../css/app.css');

//routes;
var Home = require('./home/home.jsx');
var Episodio = require('./episodio/episodio.jsx');
var Episodios = require('./episodios/episodios.jsx');
var NotFound = require('./notfound.jsx');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<TopBar/>
				<div>
					<div className="row site-container">
						<RouteHandler/>
					</div>
					<Footer/>
				</div>
			</div>
		);
	}
});

var a = (
	<Router>
		<Route path="/"  component={Home}>
			<Route path="episodios" component={Episodios}>
				<Route path="/episodio/:episodioId" component={Episodio}/>
			</Route>
			<Route path="*" component={NotFound}/>
		</Route>
	</Router>
);
module.exports = a;
