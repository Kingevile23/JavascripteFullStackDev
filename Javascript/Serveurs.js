const http = require("http");
http.createServer((req,res) =>{
    res.write("Bienvenue! ");
    res.end();
}).listen(3000);
