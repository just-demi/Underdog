const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    companyName: { 
        type: String,
        required: true, 
    },
    CIPC: { 
        type: String, 
        required: true,
        unique: true, 
        index: true,
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
    beeCertificate: {
        type: String,
    },
    createdAt: { 
        type: Date, 
        default: Date.now, 
    },
    address: {
        type: String,
    }
});

module.exports = Users = mongoose.model("User", UserSchema);