const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(cors());
app.use(bodyParser.json()); 

const port = 1337;



app.get ("/", (req,res) => {

res.send("Hello, world!");

});

app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});

app.post("/addbook", (req, res) => {
    const studentData = req.body;
    let existingData = [];
    
    try {
      existingData = JSON.parse(fs.readFileSync("books.json"));
    } catch (error) {
      
    }
    
    existingData.push(studentData);
    
    fs.writeFileSync("books.json",JSON.stringify(existingData, null, 2));
    
    res.json({success: true, message: "Book added successfuly!"});
    
    });

    app.get("/viewbook", (req, res) => {
        try {
          const studentData = JSON.parse(fs.readFileSync("books.json"));
          res.json(studentData);
        } catch (error) {
          console.error("Error reading book data:", error);
          res.status(500).json({ error: "Internal Server Error" });
        }
      });
