import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageList from './MessageList';
import '../styles/Feed.css';

class Feed extends Component {
  render() {
    const { currentUser } = this.props;
    console.log('Current User');
    console.log(currentUser);
    return (
      <div id="feed-container">
        <aside>
          <img
            src={currentUser.profileImageUrl}
            alt="Profile"
            height="300"
            width="300"
            style={{ border: '1px solid black' }}
          />
        </aside>
        <div>
          <MessageList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});
export default connect(mapStateToProps, null)(Feed);
