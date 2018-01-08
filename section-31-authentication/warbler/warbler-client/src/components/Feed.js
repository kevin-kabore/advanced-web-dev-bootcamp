import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageList from './MessageList';
import '../styles/Feed.css';

class Feed extends Component {
  render() {
    const { currentUser, messages } = this.props;
    return (
      <div id="feed-container">
        <aside>
          <img src={currentUser.profileImageUrl} alt="Profile" />
        </aside>
        <div>
          <MessageList messages={messages} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});
export default connect(mapStateToProps, null)(Feed);
