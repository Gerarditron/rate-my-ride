const bcrypt = require('bcryptjs');
const { createJwt } = require('../helper');


exports.createUser = async (res,req,next) => {
    const {name,email,password} = req.body;

    try {
        //encrypt password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        //Create user
        const user = await createUser({name, email, password: hashPassword});

        //Create token
        const token = await createJwt(user);

        //Send Response
        res.status(201).json({
            message: 'User Created',
            token
        });

    } catch (error) {
        console.log({error});
    }
}
