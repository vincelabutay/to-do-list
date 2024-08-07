const express =  require("express");
const http = require ("https");
const bodypParser = require("body-parser");

const app = express();

app.get("/", function(req, res){

    var today = new Date();

    if (today.getDay() === 3){
        res.send("Yay, its the weekend!");
    } else {
        res.send("boo! I have to work!");
    }
});



app.listen(3000, function() {
    console.log("Server is running on port 3000");
});