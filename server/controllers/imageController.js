const fs = require('fs');
const cloudinary = require('../config/cloudinary');
const Image = require('../models/imageModel');

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image uploaded' });
    }

    let tags = [];
    if (req.body.tags) {
      try {
        tags = JSON.parse(req.body.tags);
      } catch (err) {
        tags = req.body.tags.split(',').map(tag => tag.trim());
      }
    }

    const result = await cloudinary.uploader.upload(req.file.path);
    
    exports.uploadImage = async (req, res) => {
      try {
        if (!req.file) {
          return res.status(400).json({ message: 'No image uploaded' });
        }
    
        let tags = [];
        if (req.body.tags) {
          try {
            tags = JSON.parse(req.body.tags);
          } catch (err) {
            tags = req.body.tags.split(',').map(tag => tag.trim());
          }
        }
    
        const result = await cloudinary.uploader.upload(req.file.path);
    
        // Save the image metadata to MongoDB
        const newImage = await Image.create({
          title: req.body.title,
          imageUrl: result.secure_url,
          cloudinaryId: result.public_id,
          tags: tags,
        });
        console.log('Image saved to MongoDB:', newImage);
    
        fs.unlinkSync(req.file.path);
    
        res.status(201).json(newImage);
      } catch (error) {
        console.error(error);
    
        if (req.file && req.file.path) {
          try {
            fs.unlinkSync(req.file.path);
          } catch (unlinkError) {
            console.error('Error deleting temporary file:', unlinkError);
          }
        }
    
        res.status(500).json({ message: 'Server error during upload' });
      }
    };
    
  } catch (error) {
    console.error(error);
    
    if (req.file && req.file.path) {
      try {
        fs.unlinkSync(req.file.path);
      } catch (unlinkError) {
        console.error('Error deleting temporary file:', unlinkError);
      }
    }
    
    res.status(500).json({ message: 'Server error during upload' });
  }
};

exports.getImages = async (req, res) => {
  try {
    let query = {};
    
    if (req.query.tag) {
      query.tags = req.query.tag;
    }
    
    const images = await Image.find(query).sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    await cloudinary.uploader.destroy(image.cloudinaryId);
    
    await Image.findByIdAndDelete(req.params.id);
    
    res.json({ message: 'Image deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};