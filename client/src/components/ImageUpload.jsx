import { useState, useRef } from 'react';
import axios from 'axios';

function ImageUpload({ onImageUpload }) {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select an image');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', title);
    
    const tagArray = tags.split(',').map(tag => tag.trim());
    formData.append('tags', JSON.stringify(tagArray));
    
    setLoading(true);
    setError('');
    
    try {
      await axios.post('http://localhost:5000/api/images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      setTitle('');
      setTags('');
      setFile(null);
      
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
      onImageUpload();
    } catch (error) {
      setError('Error uploading image: ' + (error.response?.data?.message || error.message));
      console.error('Error:', error);
      
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      setFile(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload New Image</h2>
      
      {error && <p className="error">{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="tags">Tags (comma-separated):</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="nature, landscape, etc."
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="image">Select Image:</label>
          <input
            type="file"
            id="image"
            ref={fileInputRef} 
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload Image'}
        </button>
      </form>
    </div>
  );
}

export default ImageUpload;