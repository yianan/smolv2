import React, { useRef } from 'react';

const UploadZone: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const files = event.target.files;
    if (files) {
      const formData = new FormData();
      Array.from(files).forEach((file) => {
        formData.append('files', file);
      });
      fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => fileInputRef.current?.click()}
        >
          Upload File
        </button>
        <input
          ref={fileInputRef}
          className="hidden"
          type="file"
          accept=".pdf,.txt,.doc,.docx,.ppt,.pptx"
          multiple
          onChange={uploadFile}
        />
      </div>
    </div>
  );
};

export default UploadZone;