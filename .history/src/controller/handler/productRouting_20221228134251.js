const fs = require('fs');
const qs = require('qs');
const productService = require('../../service/ProductService')

class ProductRouting {
    static getHomeHtml(homeHtml , products) {
        let tbody = '';
        products.map((product, index) => {
            tbody +=`
                    <tr>
                    <td>${index + 1}</td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td><img src="./public/${product.image}" alt="k co" style="width: 100px;height: 100px;"></td>
                    <td><a href="/edit/${product.id}"><button class="btn btn-primary">Sua</button></a></td>
                    <td><a href="/delete/${product.id}"><button class="btn btn-danger">Xoa</button></a></td>
                    </tr>
                    `
        });
        homeHtml = homeHtml.replace('{products}' , tbody);
        return homeHtml;
    }

    static showHome(req, res) {
        fs.readFile('./views/home.html', 'utf-8', async (err, homeHtml) => {
            if (err) {
                console.log(err);
            }
            else {
                let products = await productService.findAll();
                homeHtml = ProductRouting.getHomeHtml(homeHtml, products);
                res.writeHead(200, 'text/html');
                res.write(homeHtml);
                res.end();
            }
        });
    }

    static createProduct(req, res) {
        if (req.method === 'GET') {
            fs.readFile('./views/create.html', 'utf-8', async (err, createHtml) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.writeHead(200, 'text/html');
                    res.write(createHtml);
                    res.end();
                }
            });
        }
        else {
            let data = '';
            req.on('data', chunk => {
                data += chunk;
            })
            req.on('end', async err => {
                if (err) {
                    console.log(err);
                }
                else {
                    const product = qs.parse(data);
                    const mess = await productService.save(product);
                    console.log(mess);
                    res.writeHead(301, {'location': '/home'});
                    res.end();
                }
            })
        }
    }

    static async deleteProduct(req, res, id) {
        if (req.method === 'GET') {
        
            fs.readFile('./views/delete.html', 'utf-8', async (err, removeHtml) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.writeHead(200, 'text/html');
                    removeHtml = removeHtml.replace('{id}', id);
                    res.write(removeHtml);
                    res.end();
                }
            });
        }
        else {
            let mess = await productService.remove(id);
            console.log(mess);
            res.writeHead(301, {'location': '/home'});
            res.end();
        }
    }

    static editProduct(req, res, id) {
        if (req.method === 'GET') {
            fs.readFile('./views/edit.html', 'utf-8', async (err, editHtml) => {
                if (err) {
                    console.log(err);
                }
                else {
                    let product = await productService.findById(id);
                    console.log(product);
                    editHtml = editHtml.replace('{name}', product[0].name);
                    editHtml = editHtml.replace('{price}', product[0].price);
                    editHtml = editHtml.replace('{description}', product[0].description);
                    res.writeHead(200, 'text/html');
                    res.write(editHtml);
                    res.end();
                }
            });
        }
        else {
            let data = '';
            req.on('data', chunk => {
                data += chunk;
            })
            req.on('end', async err => {
                if (err) {
                    console.log(err);
                }
                else {
                    const product = qs.parse(data);
                    const mess = await productService.update(product, id);
                    console.log(mess);
                    res.writeHead(301, {'location': '/home'});
                    res.end();
                }
            })
        }
    }

    static searchProduct(req, res, id) {
        if (req.method === 'GET') {
            fs.readFile('./views/search.html', 'utf-8', async (err, searchHtml) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.writeHead(200, 'text/html');
                    res.write(searchHtml);
                    res.end();
                }
            });
        }
        else {
            let data = '';
            req.on('data', chunk => {
                data += chunk;
            })
            req.on('end', async err => {
                if (err) {
                    console.log(err);
                }
                else {
                    const products = qs.parse(data);
                    const mess = await productService.findByNameContaining(products.name);
                    fs.readFile('./views/search.html', 'utf-8', (err, searchHtml) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            
                            searchHtml = 
                            res.writeHead(200, 'text/html');
                            res.write(searchHtml);
                            res.end();
                        }
                    });
                }
            })
        }
    }
}

module.exports = ProductRouting;