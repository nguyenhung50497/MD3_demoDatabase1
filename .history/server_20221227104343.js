const http = require('http');
const router = require('./controller/');

const server = http.createServer((req, res) => {

})

server.listen(8080, ()=> {
    console.log(`Server is running!`);
})