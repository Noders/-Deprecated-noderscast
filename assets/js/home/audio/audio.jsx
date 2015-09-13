var React = require('react');
var Audio = React.createClass({
	render: function(){
		return(
			<div className="audio">
				<audio controls>
					<source src={this.props.url} type="audio/ogg"/>
					<source src={this.props.url} type="audio/mpeg"/>
					<p>Tu navegador no soporta audio html5</p>
				</audio>
			</div>
		);
	}
});
module.exports = Audio;
