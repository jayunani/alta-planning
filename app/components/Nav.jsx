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
           <li><a href="/"> Blog </a></li>
           <li><a href="/"> Contact </a></li>
          </li>
        </ul>
        </div>
      </div>
    )
};

module.exports = Nav;
