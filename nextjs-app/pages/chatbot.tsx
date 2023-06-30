import { useState } from 'react';
import { Menu } from '../components/Menu';
import { ChatBox } from '../components/ChatBox';
import styles from '../styles/Chatbot.module.css';

const Chatbot = () => {
  const [chat, setChat] = useState('');

  const handleSendChat = (message: string) => {
    // TODO: Implement send chat functionality
    console.log('SEND_CHAT', message);
    setChat('');
  };

  const handleAbortChat = () => {
    // TODO: Implement abort chat functionality
    console.log('ABORT_CHAT');
    setChat('');
  };

  return (
    <div className={styles.container}>
      <Menu />
      <div className={styles.chatbot}>
        <ChatBox
          chat={chat}
          onSendChat={handleSendChat}
          onAbortChat={handleAbortChat}
        />
      </div>
    </div>
  );
};

export default Chatbot;