var React = require('react');

var Episode = React.createClass({
	render:function(){
		return(
			<div>
			 EPS
			</div>
		)
	}
})
var Episodes = React.createClass({
  render:function(){
  	var eps = function(){
  		return Episode
  	}
    return(
      <div className="col-xs-12 text-center">
        
      </div>
    )
  }
});
module.exports = Episodes;