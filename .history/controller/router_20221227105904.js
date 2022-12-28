const ProductRouting = require('./handler/productRouting');

const handler = {
    "home": ProductRouting.showHome
    
}

module.exports = handler;