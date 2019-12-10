
const User = require('./user.model')
const key = require('../env');
const jwt = require("jsonwebtoken");


let register = (req,res)=>{
    User.create({
        email:req.body.email,
        password:req.body.password
    }).then((userCreated)=>{
        res.send({userCreated}).status(200);
    }).catch((err)=>{
        res.send(err.message).status(500);
    })
}

let loginGOOGLE = (req,res)=>{
 res.send({message:"LOGIN GOOGLE CAPOPOOOOOOOO"})
}

let redirectGOOGLE = (req,res)=>{
  console.log("BBBBBBBBBB")
 res.send({message:"redirectGOOGLE GOOGLE CAPOPOOOOOOOO"})
}

let login = (req,res)=>{
    User.findOne({
        email:req.body.email
    }).then((userFinded)=>{
      if(!userFinded) return res.send({message:"Usuario no encontrado Genio"}).status(404)
        if(req.body.password!=userFinded.password) return res.send({message:"PSW INCORRECTA CAPO"}).status(404)
        
        const options = {expiresIn: 30};

        jwt.sign(
            req.body,
            key.secretOrKey,
            options,
            (err, token) => {
              if(err){
                res.json({
                  success: false,
                  token: "There was an error"
                });
              }else {
                res.json({
                  success: true,
                  token: token
                });
              }
            }
          );
        
        
        
        
        
        
       // res.send({userFinded}).status(200);
    }).catch((err)=>{
        res.send(err.message).status(500);
    })
}

module.exports = {
    register,
    login,
    loginGOOGLE,
    redirectGOOGLE
}