var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var router=require("./controllers/burgers_controller");
app.use("/",router);


var PORT = process.env.PORT || 8080;


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
app.listen(PORT, function() 
{
  console.log("App listening on PORT " + PORT);
});