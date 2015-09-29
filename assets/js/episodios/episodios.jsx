var React = require('react');
require('./episodios.styl');
var episodio = React.createClass({
	render: function(){
		return (
			<div className="episodio">
			
			</div>
		)
	}
});
module.exports =  React.createClass({
	componentDidMount: function() {
	    function createArrs(arrs){
	    	var arr = [];
	    	arrs.each(function(el,i,as){
				arr.push({
					title:$(i).find("title").text(),
					url:'',
					pubdate:$(i).find('pubdate').text(),
					content:$(i).find("content\\:encoded").text(),
					sumary:$(i).find("ITUNES\\:summary").text(),
					duration:$(i).find("ITUNES\\:duration").text()
				});
			})
	    }
	},
  render: function() {
        return (
        	<div className="col-xs-12">
        		<h1>Capítulos</h1>
	        	<div className="col-xs-12 col-md-8 col-md-offset-2 capitulos">
	    		</div>
    		</div>
        );
  }
});