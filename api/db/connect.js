import mongoose from 'mongoose';

async function ConnectDB(URI) {
  try {
    mongoose.connect(URI);
    console.log(`ConnectDB success`);
  } catch (error) {
    console.log(error);
  }
}
const connectDB = ConnectDB(`mongodb://localhost:27017/Books`);
export default connectDB;
