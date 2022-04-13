const express = require('express');
const transport = require('./routes/transport');
const user = require('./routes/user');

//Creating a new Express Aplication
const app = express();

//Enable body parsing
app.use(express.json());
//app.use(express.urlencoded({extended:true}));


//Defining a port
const port = process.env.PORT || 4000;

//Defining routes
app.use('/user',user());
app.use('/transport',transport());


//Starting the server
app.listen(port, () =>{
    console.log(`Server started on port: ${port}`);
});