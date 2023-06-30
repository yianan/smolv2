import React from 'react';

interface ChatButtonProps {
    onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick }) => {
    return (
        <button id="chatButton" onClick={onClick}>
            New Chat
        </button>
    );
};

export default ChatButton;