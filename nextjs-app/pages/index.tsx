import React from 'react';
import Menu from '../components/Menu';
import '../styles/global.css';

const Home = () => {
  return (
    <div className="container">
      <Menu />
      <main>
        <h1>Welcome to our Next.js App</h1>
        <p>This is a modern web application built using the Next.js framework, TypeScript for type checking and improved developer experience, and a Python back-end with Flask and API routes.</p>
        <p>It features server-side rendering for improved performance and a chatbot page with a text entry area, a new chat button, a send button and an abort button. The text area at the bottom occupies all available horizontal space except the button size.</p>
      </main>
    </div>
  );
};

export default Home;