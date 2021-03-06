var React = require('react');
var $ = require('jQuery');

var SubmissionForm = React.createClass({

  getInitialState: function() {
    return {
      name: "testName", 
      email: "testEmail"
    };
  },

  onSubmit: function(e){
    e.preventDefault();
    var submittedName = this.refs.name.value;
    var submittedEmail = this.refs.name.email;
    this.setState({
      name: this.refs.name.value,
      email: this.refs.email.value
      }, function () {
        this.sendEmail(this.state);
    });
    this.refs.name.value = "";
    this.refs.email.value = "";
  },

  // validateEmail: function(email) {
  //   var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return regexEmail.test(email);
  // },
  // validateName: function(name){
  //   return name !== "";
  // },

  sendEmail: function(info) {
    console.log("sending email");
      $.ajax({
      url: '/',
      type: 'POST',
      data: info,
      success: function(data) {
        console.dir('success ' + data.message);
      },
      error: function(xhr, status, err) {
        console.dir("error: " + err.message);
      }
    });
  },

  render: function() {
    return (
      <div className="submission-form-box">
        <form method="post" ref="form" onSubmit={this.onSubmit} className="submission-form">
          <input type="text" ref="name" name="name" placeholder="Name"/>
          <input type="text" ref="email" name="email" placeholder="Email"/>
          <button className="button expanded">Submit</button>
        </form>
      </div>
    )
  }
});

module.exports = SubmissionForm;