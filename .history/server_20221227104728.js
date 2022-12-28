const http = require('http');
const url = require('url');
const router = require('./controller/router');
function getUrl(req) {
    const urlParse = url.parse(req.url);
    const pathName = urlParse.pathname;
    return pathName.split('/');
}
const server = http.createServer((req, res) => {
    const arrPath = getUrl(req);
    const trimPath = arrPath[ar]
})

server.listen(8080, ()=> {
    console.log(`Server is running!`);
})