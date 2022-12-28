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

    static save(product) {
        let connect = connection.getConnection();
        return new Promise((resolve, reject) => {
            connect.query(`INSERT INTO my_database1.product(name, price, description, image) VALUES ('${product.name}', ${product.price}, '${product.description}', 'a.jpg')`, (err) => {
                 if (err) {
                     reject(err);
                 }
                 else {
                     resolve('Tạo thành công');
                 }
             }) 
         })
    }

    static remove(id) {
        let connect = connection.getConnection();
        return new Promise((resolve, reject) => {
            connect.query(`DELETE FROM my_database1.product WHERE id = ${id}`, (err) => {
                 if (err) {
                     reject(err);
                 }
                 else {
                     resolve('Xoá thành công');
                 }
             }) 
         })
    }

    static findById(id) {
        let connect = connection.getConnection();
        return new Promise((resolve, reject) => {
            connect.query(`SELECT * FROM product WHERE id = `, (err) => {
                 if (err) {
                     reject(err);
                 }
                 else {
                     resolve('Tạo thành công');
                 }
             }) 
        })
    }
}

module.exports = ProductService;