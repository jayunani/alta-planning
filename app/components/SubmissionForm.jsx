var React = require('react');

var SubmissionForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var enteredName = this.refs.name.value;
    var email = this.refs.email.value;
    console.log("name " + enteredName);
    console.log("email " + email);
    this.refs.name.value = "";
    this.refs.email.value = "";
  },
  render: function() {
    return (
      <div className="submission-form-box">
        <form ref="form" onSubmit={this.onSubmit} className="submission-form">
          <input type="text" ref="name" placeholder="Name"/>
          <input type="text" ref="email" placeholder="Email"/>
          <button className="button expanded">Submit</button>
        </form>
      </div>
    )
  }
});

module.exports = SubmissionForm;