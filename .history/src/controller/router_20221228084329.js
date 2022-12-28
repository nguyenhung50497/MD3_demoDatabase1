const ProductRouting = require('./handler/productRouting');

const handler = {
    "home": ProductRouting.showHome
    "create": ProductRouting.createProduc
}

module.exports = handler;