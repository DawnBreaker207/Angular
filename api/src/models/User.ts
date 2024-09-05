import mongoose from 'mongoose';
import { UserType } from '../interfaces/User';

const userSchema = new mongoose.Schema<UserType>(
  {
    username: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default mongoose.model<UserType>('User', userSchema);
