import React, { Component } from 'react';
import { connect } from 'react-redux';
class Feed extends Component {
  render() {
    const { currentUser } = this.props;
    console.log('Current User');
    console.log(currentUser);
    return (
      <div>
        <aside>img tag</aside>
        <h1>Feed</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});
export default connect(mapStateToProps, null)(Feed);
