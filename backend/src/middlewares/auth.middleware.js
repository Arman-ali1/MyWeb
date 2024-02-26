
import { asyncHandler } from "../utils/ayncHandler.js";

import  Dashboard  from "../Models/userDash.js";

export const verifyJWT = asyncHandler(async(req, res, next) => {
    // console.log(req);
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        
        // console.log(token);
        if (!token) {
            res.status(400).json({msg: 'tocken not found'})
        }
    
    
        const user = await Dashboard.findOne({email:token})
    
        if (!user) {
            
            res.status(401).json({msg: 'user  not found in verifyJWT'})
        }
        // console.log(user);
        // console.log("user end");
        req.user = user;
        next()
    } catch (error) {
        res.status(401).json({msg: 'Invalid access token'})
        
    }
    
})