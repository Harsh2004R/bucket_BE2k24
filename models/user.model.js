const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
    },
    bucket: [{
        text: { type: String, required: true },
        dateAdded: { type: String, required: true },
        timeAdded: { type: String, required: true },
        targetDate: { type: String, required: true }
    }],


    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

const UserModel = mongoose.model("user", userSchema);


module.exports = {
    UserModel
}