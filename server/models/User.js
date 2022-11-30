const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: { 
        type: String, 
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String, 
        required: true,
    },
    userType: {
        type: String,
        enum : ['customer','supplier','admin'],
        default: 'customer'
    },
    createdAt: { 
        type: Date, 
        default: Date.now, 
    }
});

const BookSchema = new Schema({
    name: { 
        type: String, 
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        //unique: true,
        //lowercase: true,
        trim: true,
    },
    price: {
        type: Number,
        required : true,
    },
    quantity: {
        type: Number,
        required : true,
    },
    ISBN: {
        type: Number,
        required: true,
        unique: true,
    },
    supplier: {
        type: String,
        trim: true,
    },
    createdAt: { 
        type: Date, 
        default: Date.now, 
    }
});

const AuthorSchema = new Schema({
    name: { 
        type: String, 
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    },
    bio: {
        type: String,
        trim: true,
    },
    createdAt: { 
        type: Date, 
        default: Date.now, 
    }
});

const User = mongoose.model("User", UserSchema);
const Book = mongoose.model("Book", BookSchema);
const Author = mongoose.model("Author", BookSchema);

module.exports = {
    User, Book, Author
}