import React from 'react';

interface AbortButtonProps {
    abortChat: () => void;
}

const AbortButton: React.FC<AbortButtonProps> = ({ abortChat }) => {
    return (
        <button id="abortButton" onClick={abortChat}>
            Abort Chat
        </button>
    );
}

export default AbortButton;