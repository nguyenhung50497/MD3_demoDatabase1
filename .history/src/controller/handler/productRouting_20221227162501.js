const fs = require('fs');
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
                    <td><button>Xoa</button></td>
                    </tr>
                    `
        })
        homeHtml = homeHtml.replace('{products}' , tbody);
        return homeHtml;
    }

    static showHome(req, res) {
        fs.readFile('./views/index.html', 'utf-8', async (err, indexHtml) => {
            if (err) {
                console.log(err);
            }
            else {
                let products = await productService.findAll();
                indexHtml = ProductRouting.getHomeHtml(indexHtml, products);
                res.writeHead(200, 'text/html');
                res.write(indexHtml);
                res.end();
            }
        });
    }
}

module.exports = ProductRouting;