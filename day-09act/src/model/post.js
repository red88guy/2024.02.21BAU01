const mongoose = require("mongoose")

// Red text presents the database name
// example: const db = mongoose.connection.useDb('<database name>');
const db = mongoose.connection.useDb('user-db');

const postSchema = new mongoose.Schema({
    username: { type: String, required: true },
    book: { type: String, required: true },
    pageNumber: { type: Number, required: true },
    practiceNumber: { type: Number, required: true },
    date: { type: Date},
    comments: [{ body: String }],
},{
    timestamps: { createdAt:'created_at', updatedAt: 'updated_at'}
});

// red text presents the collection name on Atlas.
// example, const User = db.model("<collection name>", postSchema);
const Post = db.model("practices", postSchema);


module.exports = Post;