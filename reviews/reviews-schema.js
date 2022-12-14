import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema({
    review: String,
    songID: { type: String, ref: "songsModel"},
    username: String,
    createAt: Date,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }
}, {collection: 'reviews'})
export default reviewsSchema