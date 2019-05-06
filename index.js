const express = require("express");
const app = express();
const routes = require("./routes/api");
var fs = require('fs');


fs.readfile("Database.txt", "utf8", function(err, data) {
    if (err) throw err;
    console.log(data);
} )




console.log("lets party");

const port = process.env.PORT || 5502;
app.listen(port, () => console.log(`Server listening on port ${port}`));

