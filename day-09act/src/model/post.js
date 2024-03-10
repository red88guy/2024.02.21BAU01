const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    username: { type: String, required: true },
    book: { type: String, required: true },
    pageNumber: { type: Number, required: true },
    practiceNumber: { type: Number, required: true },
    date: { type: Date},
    comments: [{ body: String }],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;