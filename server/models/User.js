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

module.exports = Users = mongoose.model("User", UserSchema);