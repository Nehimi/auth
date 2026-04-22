import jwt from "jsonwebtoken";
const verifyToken = (req, res, next)=>{
const token = req.cookies.token;
   if(!token)
        return res.status(401).json({
    success:false,
    message: "Unauthorized-  no token providede"
        }
    )
    try {
 
const decoded = jwt.verify(token,process.env.JWT_SECRET)
if(!decoded) return res.status(401).json({
    success: false,
    message: "Unauthorized invalid token"
})
res.userId = decoded.userId
next();
        
    } catch (error) {
        
       console.log("Error in verification token",token);
       return res.status(500).json({
        success: false,
        message: "server error"
       })
    }
}
