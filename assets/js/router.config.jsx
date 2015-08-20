var React =  require('react');
var Router =  require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;


//var Main = require('./default/main.jsx');
//var Random = require('./random/random.jsx');
//var About = require('./about/about.jsx');

module.exports = (
		<Route name="app" path="/" handler={Main}>
			<DefaultRoute handler={Random} />
			<Route name="about" path="about" handler={About}/>
		</Route>
);
