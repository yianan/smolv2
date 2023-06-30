import React from 'react';

const AbortButton: React.FC = () => {
  const abortChat = () => {
    // Function to abort the chat
  };

  return (
    <button onClick={abortChat}>
      Abort
    </button>
  );
};

export default AbortButton;