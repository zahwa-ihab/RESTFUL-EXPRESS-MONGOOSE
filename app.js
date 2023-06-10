const express = require("express");
///load env file
require("dotenv").config();
/// server
const port = process.env.PORT;
///load db connection
require("./config/db");
/////body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body
const bodyParser = require("body-parser");
//creating express app
const app = express();

////creating middle ware to let all routes use bodyparser
app.use(bodyParser.json());
//// USER MIDDLEWARE
const userRoutes = require("./routes/userroutes");
app.use("/", userRoutes);

/////we can add other middlewares

//listening to server
app.listen(port, () => {
  console.log("SERVERis Running at http://localhost:" + port);
});
