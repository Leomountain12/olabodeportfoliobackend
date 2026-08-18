import express from 'express';
import Profile from '../models/Profile.js';
import { v2 as cloudinary } from 'cloudinary';

const router = express.Router();

// Get profile
router.get('/', async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = new Profile();
      await profile.save();
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update profile
router.put('/', async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = new Profile();
    }
    Object.assign(profile, req.body);
    profile.updatedAt = Date.now();
    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Upload profile image
router.post('/upload-image', async (req, res) => {
  try {
    const { image } = req.body;
    const result = await cloudinary.uploader.upload(image, {
      folder: 'portfolio/profile',
    });
    
    let profile = await Profile.findOne();
    if (!profile) {
      profile = new Profile();
    }
    profile.image = result.secure_url;
    await profile.save();
    
    res.json({ url: result.secure_url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;