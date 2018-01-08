import React from 'react';
import '../styles/MessageItem.css';
const MessageItem = ({ text, createdAt, username, profileImageUrl }) => {
  let date = new Date(`${createdAt}`);

  return (
    <div className="message-item">
      <img src={profileImageUrl} />
      <div>
        <p>
          <span>@{username}</span> {date.toDateString()}
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default MessageItem;
