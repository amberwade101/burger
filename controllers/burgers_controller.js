var express = require("express");
var burgers= require("../models/burgers.js");

var router = express.Router();






router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/add", function(req, res) {
  burgers.insertOne([
    "name", "burger"
  ], [
    {burgers:req.body.id}, req.body.burger_name
  ], function(result) {
   
  return res.json({id:result.id}) && res.redirect("/") || console.log("burger burger")

  });
});


router.post("/api/update/:id", function(req, res) {
    burgers.updateOne( req.params.id,
        function(){
      
      res.redirect("/");
      console.log("burger...")
    });
  });

// Export routes for server.js to use.
module.exports = router;
