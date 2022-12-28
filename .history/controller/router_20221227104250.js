const ProductRouting = require('./handler/productRouting');
const NotFoundRouting = require('./handler/notFoundRouting');
const handler = {
    "home": ProductRouting.showHome,
    "notFound"
}

module.exports = handler;