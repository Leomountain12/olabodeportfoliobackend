import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  fullDescription: { type: String },
  impact: { type: String },
  tech: { type: [String] },
  challenge: { type: String },
  solution: { type: String },
  liveLink: { type: String },
  githubLink: { type: String },
  features: { type: [String] },
  image: { type: String },
  gallery: { type: [String] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Project', projectSchema);