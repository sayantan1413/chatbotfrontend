import React, { useEffect, useRef } from 'react';
import './messagebox.css';
function MessageBox({ messageContent }) {
  console.log(messageContent);
  const messagesRef = useRef(null);

  const getConversations = (messages) => {
    if (messages === undefined) {
      return;
    }

    const listItems = messages.map((message, index) => {
      let bubbleDirection = '';
      if (message.type === 0) {
        bubbleDirection = 'me';
      } else bubbleDirection = 'him';
      return (
        <div key={index}>
          <li className={bubbleDirection}>{message.text}</li>
        </div>
      );
    });
    return listItems;
  };

  const scrollToBottom = () => {
    messagesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (messagesRef.current) {
      scrollToBottom();
    }
  }, [messagesRef]);

  const chatList = getConversations(messageContent);
  return (
    <div>
      <ul>{chatList}</ul>
      <div style={{ float: 'left', clear: 'both' }} ref={messagesRef}></div>
    </div>
  );
}

export default MessageBox;
