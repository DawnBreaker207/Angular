import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    public_year: Number,
    description: String,
    thumbnail: String,
  },
  { versionKey: false }
);
export default mongoose.model('Book', bookSchema);

