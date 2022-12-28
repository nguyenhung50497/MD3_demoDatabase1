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
                    <td><button class="btn btn-primary">Sua</button></td>
                    <td><button class="btn btn-danger">Xoa</button></td>
                    </tr>
                    `
        })
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
            req.on('end', err => {
                if (err) {
                    console.log(err);
                }
                else {
                    const product = qs.parse(data);
                    
                    res.end();
                }
            })
        }
    }
}

module.exports = ProductRouting;