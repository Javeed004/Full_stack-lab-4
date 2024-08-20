const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

const data={
    "name": "Magendran P",
    "roll_number" : "22BAD056",
    "date_of_birth": "July 2005",
    "Favourite_sport": "Cricket"
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.render("data.ejs",{
    data:data 
  });
});

app.listen(port, () => {
  console.log("server is started...");
});