import React from 'react';

const AbortButton: React.FC = () => {
  const handleAbort = () => {
    // handle abort chat logic here
  }

  return (
    <button onClick={handleAbort}>
      Abort
    </button>
  );
}

export default AbortButton;