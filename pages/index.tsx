import React from 'react';
import Link from 'next/link';
import { Menu } from '../components/Menu';

const IndexPage: React.FC = () => {
  return (
    <div>
      <Menu />
      <div>
        <Link href="/home">
          <a>Home</a>
        </Link>
        <Link href="/chatbot">
          <a>Chatbot</a>
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;