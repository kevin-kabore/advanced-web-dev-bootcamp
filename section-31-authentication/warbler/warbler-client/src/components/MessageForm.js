import React, { Component } from 'react';
import '../styles/MessageForm.css';
class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div className="msg-form">
        <textarea
          cols="150"
          rows="4"
          name="text"
          form="msgform"
          onChange={this.handleChange}
        />
        <form id="msgform">
          <button type="submit">Post my message!</button>
        </form>
      </div>
    );
  }
}

export default MessageForm;
