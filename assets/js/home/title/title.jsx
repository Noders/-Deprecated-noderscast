var React = require('react');
require('./title.styl');
var Title = React.createClass({
	render: function() {
		return (
			<div className="col-xs-12">
				<h1 className="site-name">NodersCast</h1>
				<p className="site-slogan">El podcast oficial de <a href="http://www.noders.com" target="_blank"><img src="/assets/img/noders3-rectangle-white-150.png"/></a></p>
			</div>
		);
	}
});

module.exports = Title;