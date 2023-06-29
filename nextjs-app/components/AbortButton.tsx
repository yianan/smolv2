import React from 'react';

const AbortButton: React.FC = () => {
  const handleAbort = () => {
    // handle abort action here
  };

  return (
    <button onClick={handleAbort} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Abort
    </button>
  );
};

export default AbortButton;