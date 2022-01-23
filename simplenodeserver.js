const http = require('http')
const port = 8080

const server = http.createServer(function(req,res){
    res.write("<h1>Welcome to  Simple NodeJS server</h1>")
    res.end()
});

server.listen(8080,function(err){
if(err){
    console.log("There is an issue"+err);
}else{
    console.log("Server is running at port "+port);
}
});