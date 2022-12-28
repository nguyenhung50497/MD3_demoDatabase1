const http = require('http');
const router = require('./controller/router');
function getUrl(req) {
    const urlParse = req.url
}
const server = http.createServer((req, res) => {

})

server.listen(8080, ()=> {
    console.log(`Server is running!`);
})