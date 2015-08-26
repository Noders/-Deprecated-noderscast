var React = require('react');
var ImageLoader = require('react-imageloader')
function preloader() {
  return <img src="/assets/img/spinner.gif" />;
}
module.exports =  React.createClass({	
  	render: function() {
        return (
        	<ImageLoader 
        		src='/assets/img/hosts1.JPG'
        		className="background"
        		wrapper={React.DOM.div}
        		preloader={preloader} 
        		>
        		Carga de imagen fallida 
        	</ImageLoader>
        );
  	}
});
