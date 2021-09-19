// Definicion de Variables y constantes y llamada de librerias

const express = require('express');
const app = express ();
const port = 4001
const path = require('path');
const render = require('ejs');
const bodyParser = require ('body-parser');
const bcrypt = require('bcrypt');




// Definicion de Rutas para levantar los HTML

// set the view engine to ejs
app.set('view engine', 'ejs');

// Base middlewares
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));




app.get('/', function(req,res){

    res.render('home') ;
   
});



app.get('/registracion', function(req,res){

    res.render('registracion') ;


});



//  USUARIOS //
const users = [];

app.get('/users', function(req,res){

    res.send(users)});

    app.post ('/registracion', async function(req,res){

        const id = users.length + 1;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const email = req.body.email;
        const celular = req.body.celular;
        const contraseña = req.body.contraseña;
        

        const nuevoUsuario = {
            "id" : id,
            "nombre": nombre,
            "apellido": apellido,
            "email": email,
            "celular": celular,
            "contraseña": await bcrypt.hash(req.body.contraseña,12),
            
        };



        
               users.push (nuevoUsuario);
               console.log(users)
               res.redirect('login');
    })

// LOG IN//
   
app.get('/login', function(req,res){

    res.render('inciarsesion') ;


});
    app.post('/login',  async function(req,res){
      
     
     const email = req.body.email;
     const contraseña = req.body.contraseña;     
     let usuarioObj = null;
     let resultado = false;
     
     console.log(contraseña);
     
            
        users.forEach(function(usr){
            if(usr.email === email){ 
                usuarioObj = usr; 
            }

      });

         
    if(usuarioObj !== null) {
        
        resultado = await bcrypt.compare(contraseña,usuarioObj.contraseña);
    }

   
    if(resultado){
        res.redirect('/');
        return;
    } else { 
        res.render('inciarsesion');
    }
    
    console.log(resultado)
   
});

  /* AUN NO DESARROLADO  
// NEWSLETTER

const newsletter1 = [];

app.get('/newsletter1', function(req,res){

    res.send(newsletter1)});

    app.post ('/', function(req,res){

        const idmail = newsletter1.length + 1;
        const newsletter1 = req.body.newsletter1;
        
        

        const nuevonews = {
            "idmail" : idmail,
            "newsletter1": newsletter1,
            
            
        };



        
               newsletter1.push (nuevonews);
               console.log(newsletter1)
               res.redirect('/');
    });

*/

// LISTEN TO PORT
app.listen(port);






