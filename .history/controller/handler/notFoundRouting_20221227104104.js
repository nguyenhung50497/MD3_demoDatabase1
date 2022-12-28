const fs = require('fs');

class Not {
    static showHome(req, res) {
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

module.exports = ProductRouting;