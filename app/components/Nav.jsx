var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left"> 
          <ul className="menu">
            <li>
              <IndexLink to="/" activeClassName="active-link">  </IndexLink>
            </li>
            <li>
              <Link to="/" activeClassName="active-link">  </Link> 
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
        <ul className="menu"> 
          <li className="menu-text">
           <li> hello world </li>
          </li>
        </ul>
        </div>
      </div>
    )
};

module.exports = Nav;
