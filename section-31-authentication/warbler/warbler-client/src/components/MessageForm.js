import React, { Component } from 'react';
import '../styles/MessageForm.css';
class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { text } = this.state;
    const { onSubmit } = this.props;
    return (
      <div className="msg-form">
        <textarea
          cols="150"
          rows="4"
          name="text"
          form="msgform"
          onChange={this.handleChange}
        />
        <form
          id="msgform"
          onSubmit={e => {
            e.preventDefault();
            onSubmit(text);
            this.setState({ text: '' });
          }}
        >
          <button type="submit">Post my Message!</button>
        </form>
      </div>
    );
  }
}

export default MessageForm;
