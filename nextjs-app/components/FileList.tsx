import React, { useEffect, useState } from 'react';

type File = {
  id: string;
  name: string;
  type: string;
  size: number;
};

const FileList: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    getFiles();
  }, []);

  const getFiles = async () => {
    const response = await fetch('/api/files');
    const data = await response.json();
    setFiles(data);
  };

  const deleteFile = async (id: string) => {
    await fetch(`/api/files/${id}`, { method: 'DELETE' });
    getFiles();
  };

  return (
    <div id="file-list">
      {files.map((file) => (
        <div key={file.id}>
          <span>{file.name}</span>
          <span>{file.type}</span>
          <span>{file.size} bytes</span>
          <button id="delete-button" onClick={() => deleteFile(file.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default FileList;