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
        <div  className="twelve columns text-center">
            <SubmissionForm/>
        </div>
      </div>
		</div> 
	);
}

module.exports = Main;