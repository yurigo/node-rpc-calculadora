
const hostname = '127.0.0.1';
const port = 3000;

let { servidor } = require("./controller.js")

servidor.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log(`Server running at http://${hostname}:${port}/suma?a=4&b=5.3`);
    console.log(`Server running at http://${hostname}:${port}/resta?a=4&b=5`);
    console.log(`Server running at http://${hostname}:${port}/multiplicacion?a=4&b=5`);
    console.log(`Server running at http://${hostname}:${port}/multiplicacion?a=4,8&b=5`);
    console.log(`Server running at http://${hostname}:${port}/division?a=4&b=2`);
    console.log(`Server running at http://${hostname}:${port}/division?a=4&b=0`);
});