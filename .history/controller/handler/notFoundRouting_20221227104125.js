const fs = require('fs');

class NotFoundRouting {
    static showHome(req, res) {
        fs.readFileSync('./views/error/index.html', 'utf8', (err, indexHtml) => {
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