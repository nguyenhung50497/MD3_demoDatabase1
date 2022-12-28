const fs = require('fs');

class ProductRouting {
    static showHome(req, res) {
        fs.readFile('./views/index.html', 'utf8', (err, indexHtml) => {
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

module.exports = ProductRouting;