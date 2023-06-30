import React from 'react';

interface SendButtonProps {
  onClick: () => void;
}

const SendButton: React.FC<SendButtonProps> = ({ onClick }) => {
  return (
    <button id="sendButton" onClick={onClick}>
      Send
    </button>
  );
};

export default SendButton;