import { useState, useEffect } from 'react';
import { UploadZone } from '../components/UploadZone';
import { FileList } from '../components/FileList';
import styles from '../styles/Document.module.css';

const Document = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    const response = await fetch('/api/files');
    const data = await response.json();
    setFiles(data);
  };

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      fetchFiles();
    }
  };

  const handleDelete = async (fileId) => {
    const response = await fetch(`/api/delete/${fileId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      fetchFiles();
    }
  };

  return (
    <div className={styles.container}>
      <UploadZone onUpload={handleUpload} />
      <FileList files={files} onDelete={handleDelete} />
    </div>
  );
};

export default Document;