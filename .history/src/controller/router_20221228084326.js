const ProductRouting = require('./handler/productRouting');

const handler = {
    "home": ProductRouting.showHome
    "create": ProductRouting.create
}

module.exports = handler;