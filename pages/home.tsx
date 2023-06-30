import React from 'react';
import Menu from '../components/Menu';

const Home: React.FC = () => {
  return (
    <div id="home">
      <Menu />
      <div id="content">
        <h1>Welcome to our Next.js App</h1>
        <p>This is a modern web application built using the Next.js framework. It features server-side rendering for improved performance, a chatbot page with a text entry area, and a Python back-end with Flask and API routes.</p>
      </div>
    </div>
  );
};

export default Home;