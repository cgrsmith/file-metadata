const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer(); 
const path = require("path");
//const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
//app.use(bodyParser.json());

app.get("/", function(req, res) {
    res.sendFile("index.html", {root : __dirname + "/public"});
});

app.post("/file-data", upload.single("file"), function(req, res) {
    res.send({
        "fileName" : req.file.originalname,
        "size" : req.file.size
    });
});

app.listen(port, function() {
    console.log("File Metadata Microservice running on port: " + port);
});