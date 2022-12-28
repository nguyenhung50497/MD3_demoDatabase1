const fs = require('fs');

class NotFoundRouting {
    static showNotFound(req, res) {
        fs.readFileSync('./views/error/notfound.html', 'utf8', (err, notfoundHtml) => {
            if (err) {
                console.log(err);
            }
            else {
                res.writeHead(200, 'text/html');
                res.write(notfoundHtml);
                res.end();
            }
        });
    }
}

module.exports = NotFoundRouting;