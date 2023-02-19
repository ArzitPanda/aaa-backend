
const mysql = require('mysql2');
const fs = require('fs');
const getConnection = () => {


    const db=mysql.createConnection({
        host: 'momedical.mysql.database.azure.com',
        user: 'arijit2001',
        password: 'momedical@2023',
        database: 'aaa',
        ssl:{ca:fs.readFileSync(__dirname+"/DigicertGlobalRootCA.crt.pem")}
        
    })




    // const db=mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: 'Panda@2001',
    //     database: 'aaa',
    // })
    
    db.connect((err) => {
        if(err){
            throw err;
        }
        // console.log('MySql Connected...');
    });

    return db;
}

module.exports = {getConnection};