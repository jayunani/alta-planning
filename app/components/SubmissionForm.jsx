var React = require('react');
var $ = require('jQuery');

var SubmissionForm = React.createClass({
  getInitialState: function(){
    return {
      name: "testName", 
      email: "testEmail"
    };
  },
  onSubmit: function(e){
    e.preventDefault();
    this.setState({
      name: this.refs.name.value,
      email: this.refs.email.value
    }, function () {
      this.sendEmail(this.state);
    });
    this.refs.name.value = "";
    this.refs.email.value = "";
  },
  sendEmail: function(info) {
      $.ajax({
      url: '/',
      type: 'POST',
      data: info,
      success: function(data) {
        console.dir('success ' + Object.keys(info));
      },
      error: function(xhr, status, err) {
        console.dir("error: " + err.message);
        console.warn("xhr: " + xhr.responseText);
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