import React from 'react';
import Link from 'next/link';
import '../styles/global.css';

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <Link href="/home">
        <a>Home</a>
      </Link>
      <Link href="/chatbot">
        <a>Chatbot</a>
      </Link>
    </div>
  );
};

export default Menu;