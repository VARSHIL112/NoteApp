import mongoose from 'mongoose';


export const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("db connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
// vjaskiya
// X1aF3CQ8nnXR0xZv