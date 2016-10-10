var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left"> 
        </div>
        <div className="top-bar-right">
        <ul className="menu"> 
          <li className="menu-text">
           <li><a href="/"> Our Vision </a></li>
           <li><a href="/"> Alta </a></li>
           <li><a href="/"> Projects </a></li>
           <li><a href="/"> Services </a></li>
           <li><a href="/"> Resources </a></li>
           <li><a href="/"> Global Operations </a></li>
           <li><a href="/"> Blog </a></li>
           <li><a href="/"> Contact </a></li>
          </li>
        </ul>
        </div>
      </div>
    )
};

module.exports = Nav;
