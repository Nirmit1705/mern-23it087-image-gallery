const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const imageController = require('../controllers/imageController');

router.post('/', upload.single('image'), imageController.uploadImage);

router.get('/', imageController.getImages);

router.delete('/:id', imageController.deleteImage);

module.exports = router;