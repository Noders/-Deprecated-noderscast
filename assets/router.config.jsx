var React =  require('react');
var {Router, Route, Link} =  require('react-router');
var History =  require('history/lib/createHashHistory');

require('./css/app.css');
//routes;
var Home = require('./routes/home/home.jsx');
var Episodio = require('./routes/episodio/episodio.jsx');
var Episodios = require('./routes/episodios/episodios.jsx');
var NotFound = require('./routes/notfound/notfound.jsx');

var a = (
	<Router history={History({
			queryKey: false
		})}>
		<Route path="/"  component={Home}/>
		<Route path="episodios" component={Episodios}/>
		<Route path="episodios/:episodioId" component={Episodio}/>
		<Route path="*" component={NotFound}/>
	</Router>
);
module.exports = a;
