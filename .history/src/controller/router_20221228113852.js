const productRouting = require('./handler/productRouting');

const handler = {
    "home": productRouting.showHome,
    "create": productRouting.createProduct,
    "delete": productRouting.deleteProduct,
    "edit": productRouting.editProduct,
    "edit": productRouting.editProduct
}

module.exports = handler;