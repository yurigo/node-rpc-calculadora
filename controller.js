const http = require('http');
const url = require('url');

const servidor = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        const { name, version, description, author, license } = require("./package.json")
        res.end(JSON.stringify(
            { name, version, description, author, license }
        ))
    }

    else if (reqUrl.pathname === '/suma') {
        const resultado = parseFloat(reqUrl.query.a.replace(",",".")) + parseFloat(reqUrl.query.b.replace(",","."))
        res.end(resultado.toString())
        
    }
    else if (reqUrl.pathname === '/resta') {
        const resultado = parseFloat(reqUrl.query.a.replace(",",".")) - parseFloat(reqUrl.query.b.replace(",","."))
        res.end(resultado.toString())
    }
    else if (reqUrl.pathname === '/division') {
        const resultado = parseFloat(reqUrl.query.a.replace(",",".")) / parseFloat(reqUrl.query.b.replace(",","."))
        res.end(resultado.toString())
    }
    else if (reqUrl.pathname === '/multiplicacion') {
        const resultado = parseFloat(reqUrl.query.a.replace(",",".")) * parseFloat(reqUrl.query.b.replace(",","."))
        res.end(resultado.toString())
    }
    
    else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: "not found" }));
    }
})

module.exports = { servidor }