var express = require("express"); //loading express to server
var app = express();
app.use(express.static(__dirname));
//loading the html file on server
app.get("/",function(req,res)
{
	res.sendFile(__dirname+"/index.html"); 
});
app.listen(9090);
console.log("Server running on 9090");
