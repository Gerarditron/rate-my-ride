const express = require('express');
const transport = require('./routes/transport');

//Creating a new Express Aplication
const app = express();

//Defining a port
const port = process.env.PORT || 4000;

//Defining routes
app.use('/transport',transport());

//Starting the server
app.listen(port, () =>{
    console.log(`Server started on port: ${port}`);
});