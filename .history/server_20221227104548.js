const http = require('http');
const url = require('url');
const router = require('./controller/router');
function getUrl(req) {
    const urlParse = url.parse(req.url);
    const pathName = urlParse.pathname;
    re
}
const server = http.createServer((req, res) => {

})

server.listen(8080, ()=> {
    console.log(`Server is running!`);
})