const express =require('express');
const{loginuser,createuser} = require('../controller/userController.js');

// const {db} = require('../index.js');

const authRoutes = express.Router();


const { getConnection } = require('../middleware/dbconfig.js');

const db =getConnection();



authRoutes.get('/login',loginuser
);


authRoutes.post('/signup',createuser
);




   




authRoutes.put('/update', (req, res) => {
    const {address,pincode,mobile,name,email, password,id} = req.body;
    db.query(`update user set email='${email}',password='${password}',address='${address}',name='${name}',mobile='${mobile}',pincode='${pincode}',email='${email}' where iduser='${id}'`, (err, result) => {   
        if(err){
            throw err;
        }
        res.status(200).json(result);
    });

}
);





module.exports = authRoutes;




