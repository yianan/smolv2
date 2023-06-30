import React, { useState } from 'react';

const ChatBox = () => {
  const [message, setMessage] = useState('');

  const sendChat = () => {
    // Send chat message logic here
    console.log('SEND_CHAT', message);
    setMessage('');
  };

  const abortChat = () => {
    // Abort chat logic here
    console.log('ABORT_CHAT');
    setMessage('');
  };

  return (
    <div className="chatbox">
      <textarea
        id="chat-input"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
      />
      <button id="chat-send-button" onClick={sendChat}>
        Send
      </button>
      <button id="chat-abort-button" onClick={abortChat}>
        Abort
      </button>
    </div>
  );
};

export default ChatBox;