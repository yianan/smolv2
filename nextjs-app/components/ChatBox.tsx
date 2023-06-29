import React, { useState } from 'react';

const ChatBox: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div className="w-full h-full bg-light-blue-500">
      <textarea
        className="w-full h-3/4 p-4"
        value={message}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default ChatBox;