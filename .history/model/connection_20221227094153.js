const mysql = require('mysql');

class Connection {
    static configToMySQL = {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'my_database1',
        charset: 'utf8_general_ci'
    }
    static getConnection() {
        return mysql.createConnection(Connection.configToMySQL);
    }

    static connection() {
        
    }
}