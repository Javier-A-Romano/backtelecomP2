import jwt from 'jsonwebtoken'


export const verifyToken = async(req,res,next) =>{
    try{const token = req.headers["xtoken1"];
    if (!token) return res.status(403).json({message:"no tienes token"})

    const decode = jwt.verify(token,'educacionittelecomadmin')
    console.log(ADMIN)
   
    
    next();}
    catch(error){
        return res.status(401).json({message:"sin permisos"})
    }    
}

export const verifyTokenUser = async(req,res,next) =>{
    try{const token = req.headers["xtoken1"];
    if (!token) return res.status(403).json({message:"no tienes token"})

    const decode = jwt.verify(token,'educacionittelecomuser')
    console.log("USER comun")
   
    
    next();}
    catch(error){
        return res.status(401).json({message:"sin permisos"})
    }    
}