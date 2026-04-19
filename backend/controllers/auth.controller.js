import generateVerificationCode from '../utils/generateVerificationCode.js';
import generateTokenAndSetCookies from '../utils/generateTokenAndSetCookies.js';

import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {

        if (!name || !email || !password) {
            res.status(400).json({
                message: "please fill all fields"
            });
        }

        const userAlreadyExist = await User.findOne({ email });
        if (userAlreadyExist) {
            res.status(400).json({
                message: "email already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationCode = generateVerificationCode();
        const user = new User({
            name,
            email,
            password: hashedPassword,
            verificationToken: verificationCode,
            verificationTokenExpireAt: Date.now() + 60 * 24 * 1000 // 24 hours
        })
        await user.save();
        //jwt token generation and setting cookies
        const token = generateTokenAndSetCookies(res, user._id);
        res.status(201).json({
            success: true,
            message: "user created successfully",
            token,
            user: {
                ...user._doc,
                password: undefined,
                id: user._id,
                email,
            }

        });
    }


    catch (err) {
        res.status(500).json({
            message: err.message
        });
    }   
}
export const login = async (req, res) => {
    res.send("Login route");
}
export const logout = async (req, res) => {
    res.send("Logout route");
}