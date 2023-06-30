import React, { useState } from 'react';
import Menu from '../components/Menu';
import ChatBox from '../components/ChatBox';
import ChatButton from '../components/ChatButton';
import AbortButton from '../components/AbortButton';
import SendButton from '../components/SendButton';
import '../styles/global.css';

const Chatbot = () => {
  const [chat, setChat] = useState([]);

  const handleNewChat = () => {
    setChat([]);
  };

  const handleSendMessage = (message) => {
    setChat([...chat, { sender: 'user', content: message, timestamp: new Date() }]);
    // TODO: Call API to get bot response and add to chat
  };

  const handleAbortChat = () => {
    setChat([]);
  };

  return (
    <div>
      <Menu />
      <ChatBox chat={chat} />
      <ChatButton onClick={handleNewChat} />
      <SendButton onClick={handleSendMessage} />
      <AbortButton onClick={handleAbortChat} />
    </div>
  );
};

export default Chatbot;