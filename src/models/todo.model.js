import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Automatically set the creation date
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    }
});

// Export the Todo model
export const Todo = mongoose.model('Todo', todoSchema);
 //when it will be stored in mongo db, it will be stored as todos