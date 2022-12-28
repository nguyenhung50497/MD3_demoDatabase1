const productRouting = require('./handler/productRouting');

const handler = {
    "home": productRouting.showHome,
    "create": productRouting.createProduct,
    "product/delete": productRouting.deleteProduct,
    "product/edit": productRouting.editProduct
}

module.exports = handler;