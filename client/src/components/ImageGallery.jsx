function ImageGallery({ images, onDelete }) {
  if (images.length === 0) {
    return <p className="no-images">No images to display</p>;
  }

  return (
    <div className="gallery-container">
      <div className="image-grid">
        {images.map((image) => (
          <div key={image._id} className="image-card">
            <img 
              src={image.imageUrl} 
              alt={image.title} 
            /> 
            <div className="image-info">
              <h3>{image.title}</h3>
              <div className="tags">
                {image.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => onDelete(image._id)} 
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;