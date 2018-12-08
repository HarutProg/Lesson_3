// console.log("Hello Node")
// var os = require("os")
// var messege = "the platform is "

// function main(){
//     console.log(messege + os.platform())
// }
// main()

// var express = require("express")
// var app = express()

// app.use(express)

// app.get("/", function (req, res) {
//     res.send("<h1>Hello world</h1>")
// })

// app.get("/google/:search", function(req,res){
//     var search =req.params.search;
//     res.redirect("http://google.com/search?q=" + search)
// })
// app.get("/*", function(req,res){
//     res.status(404).send("sorry you write invalid search")
// })
// app.listen(3000, function () {
//     console.log("Example is running on port 3000")
// })


// var Square = require("./module");
// var mySquareObject = new Square(5);

// function main() {
//    console.log(mySquareObject.getArea());
// }
// main();




// var fs = require('fs');

// function main(){
//    var file  = "hello.txt";
//    fs.appendFileSync(file, "Hello world\n");
// }
// main();






// var fs = require('fs');

// function main() {
//    fs.writeFileSync("hello.txt", "Hello world\n");
//    console.log("fs.writeFile");
// }
// main();





// var fs = require('fs');

// function main(){
//    fs.writeFile("hello.txt", "Hello world\n", function(err){
//        console.log("fs.writeFile ended");
//    });
//    console.log("fs.writeFile");
// }
// main();
    




// var fs = require('fs')
// var dummyText = "Apple yep"


// function main() {
//    fs.writeFileSync("dummytext.txt", dummyText)
//    var text = fs.readFileSync("dummytext.txt").toString()
//    console.log(dummyText == text)
//    console.log(text)
//    fs.writeFileSync("undummytext.txt",
//        text.replace("Apple", "Microsoft")
//    );
// }
// main();



var obj =
{
    "first_name":"Vardan",
    "last_name":"Hovsepyan",
    "age":13,
    "tumo_student": true
}

var myJSON = JSON.stringify(obj);
fs.writeFileSync("myJSON")
