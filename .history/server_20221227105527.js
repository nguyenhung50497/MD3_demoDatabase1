const http = require('http');
const url = require('url');
const handler = require('./controller/router.js');
const NotFoundRouting = require('./controller/handler/notFoundRouting');

function getUrl(req) {
    const urlParse = url.parse(req.url, true);
    const pathName = urlParse.pathname;
    return pathName.split('/');
}
const server = http.createServer((req, res) => {
    const arrPath = getUrl(req);
    const trimPath = arrPath[arrPath.length - 1];
    let chosenHandler;
    if (typeof handler[trimPath] === 'undefined') {
        chosenHandler = NotFoundRouting.showNotFound;
    }
    else {
        chosenHandler = handler[trimPath];
    }
    chosenHandler(req, res);
})

server.listen(8080, ()=> {
    console.log(`Server is running!`);
})