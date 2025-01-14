import jwt from 'jsonwebtoken'

const authMiddleware = async(req,res,next) => {
    const {utoken} = req.headers
    if(!utoken){
        return res.json({success:false,message:"Not authorised,login again"})
    }
    try {
        const token_decode = jwt.verify(utoken,process.env.JWT_SECRET)
        req.body.userId = token_decode.id
        next() 
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export default authMiddleware