import React, { useState } from 'react';
import Menu from '../components/Menu';
import ChatBox from '../components/ChatBox';
import ChatButton from '../components/ChatButton';
import SendButton from '../components/SendButton';
import AbortButton from '../components/AbortButton';

const Chatbot: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleNewChat = () => {
    // logic for new chat
  };

  const handleSend = () => {
    // logic for sending message
  };

  const handleAbort = () => {
    // logic for aborting chat
  };

  return (
    <div>
      <Menu />
      <div id="chatBox">
        <ChatBox message={message} setMessage={setMessage} />
      </div>
      <div id="chatButton">
        <ChatButton onClick={handleNewChat} />
      </div>
      <div id="sendButton">
        <SendButton onClick={handleSend} />
      </div>
      <div id="abortButton">
        <AbortButton onClick={handleAbort} />
      </div>
    </div>
  );
};

export default Chatbot;