import React from 'react';
import Link from 'next/link';

const Menu: React.FC = () => {
  return (
    <div id="menu">
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/chatbot">
            <a>Chatbot</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;