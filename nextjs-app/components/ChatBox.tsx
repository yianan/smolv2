import React, { useState } from 'react';

const ChatBox: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div className="chatbox">
      <textarea
        id="chat-input"
        value={message}
        onChange={handleInputChange}
        placeholder="Type your message here..."
      />
    </div>
  );
};

export default ChatBox;