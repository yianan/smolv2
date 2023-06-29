import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Chatbot.module.css';
import Menu from '../components/Menu';
import ChatBox from '../components/ChatBox';
import ChatButton from '../components/ChatButton';
import AbortButton from '../components/AbortButton';
import SendButton from '../components/SendButton';

export default function Chatbot() {
  const [chat, setChat] = useState([]);

  const handleNewChat = () => {
    setChat([]);
  };

  const handleSend = (message) => {
    setChat([...chat, { message, sender: 'user' }]);
  };

  const handleAbort = () => {
    setChat([...chat, { message: 'Chat aborted by user', sender: 'system' }]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Chatbot</title>
      </Head>

      <Menu />

      <main className={styles.main}>
        <ChatBox chat={chat} />

        <div className={styles.buttons}>
          <ChatButton onClick={handleNewChat} />
          <SendButton onClick={handleSend} />
          <AbortButton onClick={handleAbort} />
        </div>
      </main>
    </div>
  );
}