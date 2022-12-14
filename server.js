const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var   path = require('path');
const dotenv = require('dotenv');

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false })); 



app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get("*", function ( req, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});


const PORT = process.env.PORT;  
app.listen(PORT,()=>{
    console.log("Api is Running")
})
