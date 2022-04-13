const mysql = require('mysql');
require('dotenv').config();

//Creating a MySql object to connect
const conn = mysql.createConnection({
    host:process.env.host || 'localhost',
    user: process.env.user || 'root',
    passwsord: process.env.password || '',
    databse : process.env.databse || 'rate_my_ride'
});


//Connect to MySQL server
conn.connect(error =>{
    if(error){
        console.error('error connectiong: '+error.stack);
    }
});

module.exports = conn;