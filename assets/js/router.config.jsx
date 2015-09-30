var React =  require('react');
var {Router, Route, Link} =  require('react-router');
var History =  require('history/lib/createHashHistory');

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
	<Router history={History({
  queryKey: false
})}>
		<Route path="/"  component={Home}>
		</Route>
		<Route path="episodios" component={Episodios}>
		</Route>
			<Route path="episodios/:episodioId" component={Episodio}/>
		<Route path="*" component={NotFound}/>
	</Router>
);
module.exports = a;
