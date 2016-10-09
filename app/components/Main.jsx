var React = require('react');
var Nav = require('Nav');
var Banner = require('Banner');
var Logo = require('Logo');
var SubmissionForm = require('SubmissionForm');

var Main = (props) => {
	return (
		<div>	
      <Nav/>
      <Logo/>
      <Banner/>
      <div className="row">
        <div className="column small-center medium-6 large-4">
            <SubmissionForm/>
        </div>
      </div>
		</div> 
	);
}

module.exports = Main;