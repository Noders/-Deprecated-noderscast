var React = require('react');
var Socials = React.createClass({
  render:function(){
    return(
      <div className="col-xs-12 text-center">
        <p className="site-slogan">Escúchanos en</p>
        <ul className="list-inline social-links">
          <li className="icon itunes">
            <a href="https://itunes.apple.com/cl/podcast/id1009061967" target="_blank">
              <i className="fa fa-fw fa-apple"></i>
              <p>Itunes</p>
            </a>
          </li>
          <li className="icon stitcher">
            <a href="http://www.stitcher.com/podcast/noderscast/" target="_blank">
              <i className="fa fa-fw fa-microphone"></i>
              <p>Stitcher</p>
            </a>
          </li>
          <li className="icon rss">
            <a href="http://noderscast.noders.com/feed/podcast" target="_blank">
              <i className="fa fa-fw fa-rss"></i>
              <p>RSS</p>
            </a>
          </li>
          <li className="icon youtube">
            <a href="https://www.youtube.com/playlist?list=PLBEwfn9JYDc-8LKrnlcogwrILF08EqLHF" target="_blank">
              <i className="fa fa-fw fa-youtube"></i>
              <p>Youtube</p>
            </a>
          </li>
        </ul>
      </div>
    )
  }
})
module.exports = Socials;