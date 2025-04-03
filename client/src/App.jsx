import { useState, useEffect } from 'react';
import ImageUpload from './components/ImageUpload';
import ImageGallery from './components/ImageGallery';
import TagFilter from './components/TagFilter';
import axios from 'axios';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [filteredImgs, setFilteredImgs] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchImg();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const uniqueTags = [...new Set(images.flatMap(image => image.tags))];
      setTags(uniqueTags);
    }

    if (selectedTag) {
      setFilteredImgs(images.filter(image => 
        image.tags.includes(selectedTag)
      ));
    } else {
      setFilteredImgs(images);
    }
  }, [images, selectedTag]);

  const fetchImg = async (tag = '') => {
    try {
      const url = tag ? `http://localhost:5000/api/images?tag=${tag}` : 'http://localhost:5000/api/images';
      const response = await axios.get(url);
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleImgUpld = () => {
    fetchImg(); 
  };

  const handleFilter = (tag) => {
    setSelectedTag(tag);
  };

  const handleDlt = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/images/${id}`);
      fetchImg();
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>Image Gallery</h1>
      
      <ImageUpload onImageUpload={handleImgUpld} />
      
      <TagFilter 
        tags={tags} 
        selectedTag={selectedTag} 
        onSelectTag={handleFilter} 
      />
      
      <ImageGallery 
        images={filteredImgs} 
        onDelete={handleDlt} 
      />
    </div>
  );
}

export default App;
