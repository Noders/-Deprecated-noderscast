var React = require('react');
var feedParser = require('feedparser');
var NodersFeed = 'http://noderscast.noders.com/feed/podcast';

var capitulo = React.createClass({
	render: function(){
		return (
			<div className="capitulo">
			
			</div>
		)
	}
});
module.exports =  React.createClass({
	componentDidMount: function() {
        $.ajax({
	        type: "GET",
	        url: NodersFeed,
            crossDomain: true,
	        dataType: 'application/x-www-form-urlencoded',
	        error: function(err){
	        	createArrs($(err.responseText).find("item"))
	        },
	        success: function(xml){
	        	console.log(xml.responseText)
	        }
	    });
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