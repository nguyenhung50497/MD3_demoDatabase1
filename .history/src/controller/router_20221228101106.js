const ProductRouting = require('./handler/productRouting');

const handler = {
    "home": ProductRouting.showHome,
    "create": ProductRouting.createProduct,
    "delet": ProductRouting.removeProduct
}

module.exports = handler;