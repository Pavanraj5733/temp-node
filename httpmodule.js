
const http = require('http')


const server = http.createServer((req, res) => {
   if (req.url === '/') {
    res.end('This is home page')
   }
   if (req.url === '/about') {
    res.end('This is About page')
   }
    res.end(`
        <h1>Oops!</h1>
        <p>Page not found!</p>
        <a href="/">Go back home</a>
        `)
})
server.listen(3000)
