var React = require('react');
var $ = require('jQuery');

var SubmissionForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var enteredName = this.refs.name.value;
    var enteredEmail = this.refs.email.value;
    // console.log(enteredName);
    // console.log(enteredEmail);
    this.refs.name.value = "";
    this.refs.email.value = ""; 
    $.ajax({
      url: '/',
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.dir('success ' + data);
      },
      error: function(xhr, status, err) {
        console.dir("error: " + status);
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