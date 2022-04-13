const { query } = require('../db');
const conn =  require('../db');

const createUser = async ({name,email,password}) =>{
    const sql = `INSERT INTO users(name,email,password) VALUES(?,?,?)`;
    const result = await conn.query(sql,[name,email,password]);
    return result;
}