import React, { Component } from 'react';
import '../styles/MessageForm.css';
class MessageForm extends Component {
  render() {
    return (
      <div className="msg-form">
        <textarea cols="150" rows="4" name="message" form="msgform" />
        <form id="msgform">
          <button type="submit">Post my message!</button>
        </form>
      </div>
    );
  }
}

export default MessageForm;
