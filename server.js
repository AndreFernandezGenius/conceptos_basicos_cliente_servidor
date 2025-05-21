const express = require("express");
const path = require("path");
const cors = require ('cors')
const app = express();


//app.use (cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))


// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "static")));
app.post("/acceso",(req,res) => {
      const {nome,email} = req.body; //desestructutra o obxeto de entrada
      console.log(nome,email);
      let condicionUsuarioCorrecto= req.body.nome == 'Andre' && req.body.email == 'andre@gmail.com'
      let datoEnviadoCondicionUsuarioCorrecto ={
       //if(req.body.nome == 'Andre' && req.body.email == 'andre@gmail.com'){
        //res.send ({
           resposta:"acceso autorizado",
           usuario:{
            nome: 'Andre'
           }
          };
        //res.sendFile(path.join(__dirname, "static/views/app.html"));
        let datoEnviadoEnErro = {resposta:"faltan campos ou usuario non rexistrado"}


        if (condicionUsuarioCorrecto){
          res.send(datoEnviadoCondicionUsuarioCorrecto);
        }else{
        res.send({resposta:"faltan campos ou usuario no rexistrado"});
       }

       if (condicionUsuarioCorrecto) {
           res.send(datoEnviadoCorrecto)
      }else{
            res.send({usuario:{
              nome:'Andre'
            }})

};
app.get("/enviousuario", (req,res) => {
    res.send({usuario:{
          nome:'Andre'
    }})
  })

//START SERVER
app.listen(3000, function () {
 console.log("Server running");
});

