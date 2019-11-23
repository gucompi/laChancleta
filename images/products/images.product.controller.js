const fs = require ('fs')
const getImageProd = (req,res)=>{
    fs.readFile(req.params.idProd,(err,data)=>{
        if(err) return res.send().status(404)
        res.write(data)
        return res.end();

    })
   //res.send("Aca va air la imagen!del "+ req.params.idProd).status(200);
}
module.exports = {
    getImageProd
}