import React, { useState } from 'react';

const ChatBox: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Implement sending message to the server
  };

  return (
    <div id="chatBox">
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={handleChange}
          style={{ width: '100%', height: '80%' }}
        />
        <button type="submit" style={{ width: '100%', height: '20%' }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBox;