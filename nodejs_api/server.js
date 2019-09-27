var express = require("express");
var app = express();

const bodyParser = require("body-parser");
const mysql = require("mysql");

const cors = require("cors");
app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_test"
});

app.post("/recToDelete/:recToDelete", function(req, res) {
  const rectoDelete = req.params.recToDelete;
  connection.query("Delete from data where Invoices_Id = ?", [rectoDelete]);
});

app.post("/addrecord", function(req, res) {
  const recordToAdd = req.body;
  var records = [
    [
      recordToAdd.Invoices_Id,
      recordToAdd.Invoices_Company,
      recordToAdd.Invoices_Date,
      recordToAdd.Invoices_Cost,
      recordToAdd.Invoices_Discount
    ]
  ];
  connection.query(
    "INSERT INTO data(Invoices_Id, Invoices_Company,Invoices_Date,Invoices_Cost,Invoices_Discount) VALUES  ?",
    [records]
  );
  res.send({
    message: "record updated successfully",
    recordToAdd: recordToAdd // need to review
  });
});

app.get("/posts", function(req, res) {
  connection.query("select * from data", function(error, results, next) {
    if (error) throw error;
    res.send(results);
  });
});

app.post("/updateposts", function(req, res) {
  const recordToUpdate = req.body;
  connection.query(
    "UPDATE data SET Invoices_Company = ? , Invoices_Date = ? , Invoices_Cost = ? , Invoices_Discount = ?  WHERE Invoices_Id = ?",
    [
      recordToUpdate.Invoices_Company,
      recordToUpdate.Invoices_Date,
      recordToUpdate.Invoices_Cost,
      recordToUpdate.Invoices_Discount,
      recordToUpdate.Invoices_Id
    ]
  );
  res.send({
    message: "record updated successfully",
    recordUpdated: recordToUpdate // need to review
  });
});

app.post("/signup", function(req, res) {
  const addtouser = req.body;
  var records = [[addtouser.email, addtouser.password, addtouser.name]];
  connection.query(
    "INSERT INTO users(email, password,name) VALUES  ?",
    [records],
    function(error, results, next) {
      if (error) {
        res.send({
          status: 400,
          message: "Email already exists"
        });
      } else {
        res.send({
          status: 200,
          message: "Login Fsuccesfull"
        });
      }
    }
  );
});



app.post("/loginVerify", function(req, res) {
  const check = req.body;
  connection.query(
    "SELECT name from users WHERE email = ? and password = ?",
    [check.email, check.password],
    function(error, results, next) {
      //if (error) throw error;
      if (results.length !== 0) {
        if (results[0].name !== undefined) {
          res.send({
            status: 200,
            message: "Login successfully"
          });
        }
      } else {
        res.send({
          status: 400,
          message: "Incorrect Details"
        });
      }
    }
  );
});




app.get("/cardvalues", function(req, res) {
  connection.query("select * from itemslider1", function(error, results, next) {
    if (error) throw error;
    res.send(results);
  });
});


app.listen(3000, () => {
  console.log("Go to http://localhost:3000/posts to see posts");
});
