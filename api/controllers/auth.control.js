import User from '../models/User.model.js'
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken'

export const signup = async (req, res,next) =>{
    const {username, email, password} = req.body;
    const newUser = new User({username , email, password});
    try {
        await newUser.save();
        res.status(201).json("user created");
    } catch (error) {
        next(error);
    }   
}

export const signin = async (req, res, next) => {
    const {email , password} = req.body;
    try {
        const validUser = await User.findOne({email});
        if(!validUser) return next(errorHandler('404',"Invalid User"));
        if(password !== validUser.password) return next(errorHandler('404',"Invalid User"));
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);
        const {password: pass ,...userInfo} = validUser._doc;
        res.cookie('access_token', token, {httpOnly: true}).status(200).json(userInfo);
    } catch (error) {
        next(error);
    }
}