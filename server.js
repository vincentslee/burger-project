//Dependencies
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();

var PORT = process.env.PORT || 8080;

//app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));

var routes = require("./controllers/burgercontroller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("server listening on: http://localhost:"+PORT);
});