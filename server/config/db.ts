import mongoose from 'mongoose';

const uriDB = `mongodb+srv://${process.env.MONGO_URI}/mgmt?retryWrites=true&w=majority`;

export const connectDB = async () => {
    await mongoose.connect(uriDB);

    console.log('Connected DB');
}