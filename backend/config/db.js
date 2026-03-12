import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vinitaparamar_db_user:vinita123@cluster0.s0ddrrc.mongodb.net/QuizApp')
    .then(() => {console.log('DB CONNECTED')})
}