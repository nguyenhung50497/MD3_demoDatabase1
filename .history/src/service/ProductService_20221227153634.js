const connection = require('../model/connection');
connection.connecting();

class ProductService {
    findAll() {
        let connect = connection.getConnection();
        connection.query('SELECT * FROM my_database1', (err, products) => {
            if (err) {}
            
        })
    }
}