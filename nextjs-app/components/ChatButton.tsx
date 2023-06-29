import React from 'react';

interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="chat-button">
      New Chat
    </button>
  );
};

export default ChatButton;