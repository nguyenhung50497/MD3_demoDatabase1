const http = require('http');
const router = require('./controller/router');
function getUrl(req) {
    const url = req.url
}
const server = http.createServer((req, res) => {

})

server.listen(8080, ()=> {
    console.log(`Server is running!`);
})