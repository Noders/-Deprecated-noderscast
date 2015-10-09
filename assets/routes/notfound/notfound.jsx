var React = require('react');
var TopBar = require('../../components/topbar/topbar.jsx');
var Footer = require('../../components/footer/footer.jsx');

require('./notfound.styl');
module.exports =  React.createClass({
  render: function() {
        return (
        	<div className="notfound fullheight">
				<div className="col-xs-12 text-center featured parallax fullheight">
					<TopBar/>
					<div className="col-xs-12 fullheight table">
						<h3 className="title">
							<span className="text">Houston! No hay nada aquí</span> <i className="icon fa fa-fw fa-frown-o"></i> 
							<span className="subtext">Pero puedes escuchar nuestro capítulo más reciente 
								<a href="/" className="link">En este link</a>
								<i className="link fa fa-fw fa-microphone"/>
							</span> 
						</h3>
					</div>
				</div>
				<Footer/>
			</div>
        );
  }
});
