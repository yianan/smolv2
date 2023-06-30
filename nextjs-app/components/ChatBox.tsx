import React, { useState } from 'react';

interface Message {
  sender: string;
  content: string;
  timestamp: Date;
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (message: Message) => {
    setMessages([...messages, message]);
  };

  return (
    <div id="chat-output">
      {messages.map((message, index) => (
        <div key={index} className={message.sender}>
          <p>{message.content}</p>
          <span>{message.timestamp.toLocaleTimeString()}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatBox;