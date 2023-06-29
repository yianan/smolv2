import React from 'react';
import Menu from '../components/Menu';
import ChatBox from '../components/ChatBox';
import ChatButton from '../components/ChatButton';
import AbortButton from '../components/AbortButton';
import SendButton from '../components/SendButton';

const Chatbot: React.FC = () => {
  return (
    <div>
      <Menu />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
        <ChatBox />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <ChatButton />
          <SendButton />
          <AbortButton />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;