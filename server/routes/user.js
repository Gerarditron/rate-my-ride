const express = require('express');
const {check,param} = require('express-validator')
const router = express.Router();
const {createUser} = require('../controller/userController');

const {checkFields} = require('../middlewares');


module.exports=function(){
 
    router.post('/',[
        check('name').notEmpty().withMessage('Name is Required'),
        check('email').isEmail().withMessage('Email has no email format'),
        check('email').notEmpty().withMessage('Email is required'),
        check('password').notEmpty().withMessage('Password is required'),
        check('password').isLength({min:6}).withMessage('Passowrd must be at least 6 characters'),
        checkFields
    ],createUser);
    
    

    return router;
}