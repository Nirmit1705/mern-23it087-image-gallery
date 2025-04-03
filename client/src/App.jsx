import { useState, useEffect } from 'react';
import ImageUpload from './components/ImageUpload';
import ImageGallery from './components/ImageGallery';
import TagFilter from './components/TagFilter';
import axios from 'axios';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [tags, setTags] = useState([]);

  // Fetch all images on component mount
  useEffect(() => {
    fetchImages();
  }, []);

  // Extract unique tags from images
  useEffect(() => {
    if (images.length > 0) {
      const uniqueTags = [...new Set(images.flatMap(image => image.tags))];
      setTags(uniqueTags);
    }
    
    // Apply filter when images or selectedTag changes
    if (selectedTag) {
      setFilteredImages(images.filter(image => 
        image.tags.includes(selectedTag)
      ));
    } else {
      setFilteredImages(images);
    }
  }, [images, selectedTag]);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/images');
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleImageUpload = () => {
    fetchImages(); // Refresh images after upload
  };

  const handleTagFilter = (tag) => {
    setSelectedTag(tag);
  };

  const handleDeleteImage = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/images/${id}`);
      fetchImages(); // Refresh after delete
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>Image Gallery</h1>
      
      <ImageUpload onImageUpload={handleImageUpload} />
      
      <TagFilter 
        tags={tags} 
        selectedTag={selectedTag} 
        onSelectTag={handleTagFilter} 
      />
      
      <ImageGallery 
        images={filteredImages} 
        onDelete={handleDeleteImage} 
      />
    </div>
  );
}

export default App;
