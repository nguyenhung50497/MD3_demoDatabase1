const connection = require('../model/connection');
connection.connecting();

class ProductService {
    static findAll() {
        let connect = connection.getConnection();
        return new Promise((resolve, reject) => {
           connect.query('SELECT * FROM product', (err, products) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(products);
                }
            }) 
        })
    }

    static save
}

module.exports = ProductService;