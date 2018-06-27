// Import MySQL connection.
var connection = require("./connection.js");

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});



// Object for all our SQL statement functions.
var orm = {
  selectAll: function(table, cb) {
    connection.query("SELECT * FROM " + table + ";",
   function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    connection.query("INSERT INTO " + table+ "SET ?",
    {
      burger_name:req.parms.burger_name,
      devored:false
    },

    function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(table,  cb) {
  connection.query("UPDATE " + table +"SET? WHERE?",[{id:table.id},{devored:true}],

function(err,result)
{
  if(err) throw err;
  cb(result)

})
  }}


  


  ;

   
      

// Export the orm object for the model (cat.js).
module.exports = orm;
