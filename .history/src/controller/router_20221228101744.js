const productRouting = require('./handler/productRouting');

const handler = {
    "home": productRouting.showHome,
    "create": productRouting.createProduct,
    "delete": productRouting.deleteProduct
}

module.exports = handler;