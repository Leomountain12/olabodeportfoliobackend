// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { v2 as cloudinary } from 'cloudinary';
// import projectRoutes from './routes/projects.js';
// import profileRoutes from './routes/profile.js';
// import messageRoutes from './routes/messages.js';

// dotenv.config();

// const app = express();

// // Cloudinary config
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Middleware
// app.use(cors());
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// // Routes
// app.use('/api/projects', projectRoutes);
// app.use('/api/profile', profileRoutes);
// app.use('/api/messages', messageRoutes);

// // Health check
// app.get('/api/health', (req, res) => {
//   res.json({ status: 'ok', message: 'Server is running' });
// });

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log('✅ Connected to MongoDB');
//     app.listen(process.env.PORT || 5000, () => {
//       console.log(`✅ Server running on port ${process.env.PORT || 5000}`);
//     });
//   })
//   .catch((error) => {
//     console.error('❌ MongoDB connection error:', error);
//   });
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Simple test endpoint
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI is not set in environment variables');
} else {
  mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB connection error:', err.message));
}

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});