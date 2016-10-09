var React = require('react');
var router = express.Router();
var $ = require('jQuery');


var SubmissionForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var enteredName = this.refs.name.value;
    var enteredEmail = this.refs.email.value;
    $.ajax({
      url: '/contactus',
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log('success');
      },
      error: function(xhr, status, err) {
        console.log(status);
      }
    });
  },
  render: function() {
    return (
      <div className="submission-form-box">
        <form action="mailto:j.ayunani@gmail.com" method="post" enctype="text/plain" ref="form" onSubmit={this.onSubmit} className="submission-form">
          <input type="text" ref="name" name="name" placeholder="Name"/>
          <input type="text" ref="email" name="email" placeholder="Email"/>
          <button className="button expanded" onClick={this.onSubmit()}>Submit</button>
        </form>
      </div>
    )
  }
});

module.exports = SubmissionForm;