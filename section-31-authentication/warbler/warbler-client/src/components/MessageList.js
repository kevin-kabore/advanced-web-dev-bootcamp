import React from 'react';
import MessageItem from './MessageItem';

const MessageList = ({ messages }) => {
  let messageList = messages
    .map(m => {
      return (
        <MessageItem
          key={m.id}
          createdAt={m.createdAt}
          text={m.text}
          username={m.username}
          profileImageUrl={m.profileImageUrl}
        />
      );
    })
    .reverse();
  return <ul>{messageList}</ul>;
};

export default MessageList;
