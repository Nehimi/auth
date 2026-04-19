import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: {
        type: String,
        default: null
    },
    resetPasswordExpire: {
        type: Date,
        default: null
    },
    verificationToken: {
        type: String,
        default: null
    },
    verificationTokenExpire: {
        type: Date,
        default: null
    }
},
{timestamps: true,
    versionKey: false
});

const User = mongoose.model("User",userSchema);

export default User;   
