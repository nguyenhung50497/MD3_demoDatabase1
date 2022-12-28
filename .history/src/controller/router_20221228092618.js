const ProductRouting = require('./handler/productRouting');

const handler = {
    "home": ProductRouting.showHome,
    "create": ProductRouting.createProduct,
    "remove"
}

module.exports = handler;