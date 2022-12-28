const productRouting = require('./handler/productRouting');

const handler = {
    "home": productRouting.showHome,
    "create": ProductRouting.createProduct,
    "delete": ProductRouting.deleteProduct
}

module.exports = handler;