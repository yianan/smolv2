import React from 'react';
import Link from 'next/link';
import styles from '../styles/global.css';

const Menu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/chatbot">
        <a>Chatbot</a>
      </Link>
    </div>
  );
};

export default Menu;