const connection = require('../model/connection');
connection.connecting();

class ProductService {
    safindAll() {
        let connect = connection.getConnection();
        return new Promise((resolve, reject) => {
           connection.query('SELECT * FROM my_database1', (err, products) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(products);
                }
            }) 
        })
    }
}

module.exports = ProductService;