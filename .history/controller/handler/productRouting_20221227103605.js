const fs = require('fs');

class ProductRouting {
    static showhome(req, res) {
        fs.readFileSync('./views/index.html', 'utf8', (err, indexHtml) => {
            if (err) {
                console.log(err);
            }
            else {
                res.writeHead(200, 'text/html');
                res.write(indexHtml);
                res.end();
            }
        });
    }
}

ProductRouting