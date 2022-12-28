const http = require('http');
const url = require('url');
const router = require('./controller/router');
const handler = require('./')
function getUrl(req) {
    const urlParse = url.parse(req.url);
    const pathName = urlParse.pathname;
    return pathName.split('/');
}
const server = http.createServer((req, res) => {
    const arrPath = getUrl(req);
    const trimPath = arrPath[arrPath.length - 1];
    let chosenHandler;
    if (trimPath)
})

server.listen(8080, ()=> {
    console.log(`Server is running!`);
})