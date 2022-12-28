const ProductRouting = require('./handler/productRouting');

const handler = {
    "home": ProductRouting.showHome,
    "create": ProductRouting.createProduct,
    "delete": ProductRouting.removeProduct
}

module.exports = handler;