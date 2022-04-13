const conn = require('../db');

const getTransports = async (req,res)=>{
    const sql = 'SELECT * FROM transport';
    const result = await conn.query(sql);
    res.json(result);
}

module.exports=function(){    
    getTransports();
}