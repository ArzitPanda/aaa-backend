
const mysql = require('mysql2');

const getConnection = () => {
    const db=mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Panda@2001',
        database: 'aaa'
    })
    
    db.connect((err) => {
        if(err){
            throw err;
        }
        // console.log('MySql Connected...');
    });

    return db;
}

module.exports = {getConnection};