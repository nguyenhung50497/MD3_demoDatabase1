const ProductRouting = require('./handler/productRouting');
const NotFoundRouting = require('./handler/notFoundRouting');
const handler = {
    "home": ProductRouting.showHome,
    "notFound": NotFoundRouting.showNotFound
}

module.exports = handler;