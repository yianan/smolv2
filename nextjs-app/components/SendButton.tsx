import React from 'react';

const SendButton: React.FC = () => {
  const handleClick = () => {
    // Handle send button click event
  };

  return (
    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Send
    </button>
  );
};

export default SendButton;