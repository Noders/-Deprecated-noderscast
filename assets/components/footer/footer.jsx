var React = require('react');
require('./footer.styl');
module.exports = React.createClass({
  render : function(){
    return  (
      <div className="footer col-xs-12">
        <div className="col-xs-12">
          <div className="caption">
          	<h3 className="text-center">
	 			      Algunos derechos reservados. Powered by <a href="http://noders.com">Noders</a>
            </h3>
          </div>
        </div>
      </div>
    )
  }
})
