import generateVerificationCode from '../utils/generateVerificationCode.js';
import generateTokenAndSetCookies from '../utils/generateTokenAndSetCookies.js';
import crypto from 'crypto';
import { sendVerificationEmail, sendWelcomeEmail,sendPasswordResetEmail ,sendSuccessEmail} from '../mailtrap/emails.js';
import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "please fill all fields"
            });
        }

        const userAlreadyExist = await User.findOne({ email });
        if (userAlreadyExist) {
            return res.status(400).json({
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
            verificationTokenExpire: Date.now() + 60 * 24 * 1000 // 24 hours
        })
        await user.save();
        console.log(user);
        
        //jwt token generation and setting cookies
        const token = generateTokenAndSetCookies(res, user._id);

        await sendVerificationEmail(user.email, verificationCode, user.name);
        
        return res.status(201).json({
            success: true,
            message: "user created successfully",
            token,
            user: {
                ...user._doc,
                password: undefined,
                id: user._id,
                email: user.email,
            }

        });
    }


    catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }   
}
export const verifyEmail = async (req, res) => {
    const { code } = req.body;
    try {
        const user = await User.findOne({ verificationToken: code,
            verificationTokenExpire: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "invalid verification code"
            });
        }
        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpire = undefined;

        await user.save();
        await sendWelcomeEmail(user.email, user.name);

        return res.status(200).json({
            success: true,
            message: "email verified successfully",
            user: {
                ...user._doc,
                password: undefined,
                id: user._id,
                email: user.email,
                name: user.name
            }
        });
    }
    catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
}
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "user not found"
            });
        }
        const ispasswordValid = await bcrypt.compare(password, user.password);
        if (!ispasswordValid) {
            return res.status(400).json({
                success: false,
                message: "invalid password"
            });
        }
        const token = generateTokenAndSetCookies(res, user._id);
        user.lastLogin = new Date();
        await user.save();
        return res.status(200).json({
            success: true,
            message: "User logged successfully",
            token,
            user: {
                ...user._doc,
                password: undefined,
                id: user._id,
                email: user.email,
                name: user.name,
                isVerified: user.isVerified,
                lastLogin: user.lastLogin.toLocaleString()
            }
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "user login failed"
        });
        console.log("error in login,err:", err);
    }
}
export const logout = async (req, res) => {
    res.clearCookie("token");
    return res.status(200).json({
        success: true,
        message: "user logged out successfully"
    });
}
export const forgetPassword = async (req,res)=>{
    const {email} =req.body;
    try{
 const user = await User.findOne({email});
 if(!user){
    return res.status(400).json({
        success: false,
        message: "user not found"
    })
 }
 // Generate password reset code
 const resetToken = crypto.randomBytes(20).toString('hex');
 user.resetPasswordExpire = Date.now() + 1 *60* 60 * 1000;//1 hour expire
  user.resetPasswordToken = resetToken;  
  await user.save();
 //Send password resert email
 await sendPasswordResetEmail(user.email, user.name, `${process.env.CLIENT_URL}/reset-password/${resetToken}`);
 return res.status(200).json({
    success: true,
    message: "password reset email sent successfully"
 });

    }
catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        });
        console.log("error in forgetPassword,err:", err);
    }
}
export const resetPassword = async (req,res)=>{
   
    try {
        const {token} = req.params;
        const password = req.body;
        const user = await User.findOne({resetPasswordToken:token,resetPasswordExpire:{$gt:Date.now()} });
        if(!user){
            return res.status(400).json({
                success: false,
                message: "invalid reset token"
            })
        }
        //Update password
        const hashPassword = await bcrypt.hash(password,10);
        user.password=hashPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save();
        //Send password reset email
        await sendPasswordResetEmail(user.email, user.name, `${process.env.CLIENT_URL}/login`);
        return res.status(200).json({
            success: true,
            message: "password reset successfully"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
        console.log("error in resetPassword,err:", error);
    }
}

