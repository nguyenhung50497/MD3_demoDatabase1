const fs = require('fs');

class ProductRouting {
    showhome() {
        fs.readFileSync('./views/index.html', 'utf8');
    }
}