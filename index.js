// console.log("Hello Node")
// var os = require("os")
// var messege = "the platform is "

// function main(){
//     console.log(messege + os.platform())
// }
// main()

var express = require("express")
var app = express()

app.get("/", function (req, res) {
    res.send("<h1>Hello world</h1>")
})

app.get("/google/google.com", function(req,res){
    var v =req.params.search;
    res.send("<h2>Searched " + v +("<h2>"))
})
app.listen(3000, function () {
    console.log("Example is running on port 3000")
})