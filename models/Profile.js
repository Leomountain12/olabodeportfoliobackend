import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  image: { type: String, default: '' },
  email: { type: String, default: 'olabodeolamide323@gmail.com' },
  phone: { type: String, default: '+2348126332866' },
  social: {
    github: { type: String, default: 'https://github.com/leodcatalyst' },
    linkedin: { type: String, default: 'https://linkedin.com/in/leodcatalyst' },
    twitter: { type: String, default: 'https://twitter.com/leodcatalyst' },
    instagram: { type: String, default: 'https://instagram.com/leodcatalyst' },
    youtube: { type: String, default: 'https://youtube.com/@leodcatalyst' },
    tiktok: { type: String, default: 'https://tiktok.com/@leodcatalyst' },
    facebook: { type: String, default: 'https://facebook.com/leodcatalyst' },
  },
  socialOrder: { 
    type: [String], 
    default: ['github', 'linkedin', 'twitter', 'instagram', 'youtube', 'tiktok', 'facebook'] 
  },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Profile', profileSchema);