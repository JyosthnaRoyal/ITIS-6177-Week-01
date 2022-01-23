const express = require("express");
const app = express();
const port = 8080
app.get("/",function(request,response){
response.send("<h1>Welcome to NodeJS server using Express!!!</h1>");
});
app.listen(port,function(){
  console.log("Server started on port "+port);
});
