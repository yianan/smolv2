import React from 'react';

interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick }) => {
  return (
    <button id="new-chat-button" onClick={onClick}>
      New Chat
    </button>
  );
};

export default ChatButton;