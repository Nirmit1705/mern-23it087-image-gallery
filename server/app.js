const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const imageRoutes = require('./routes/imageRoutes');

dotenv.config();
const app = express();

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/images', imageRoutes);

app.get('/', (req, res) => {
  res.send('Image Gallery API is running');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
  });
