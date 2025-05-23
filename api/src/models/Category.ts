import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    title: String,
    slug: String,
    description: String,
    thumbnail: String,
  },
  {
    versionKey: false,
  },
);

export default mongoose.model('Category', categorySchema);
