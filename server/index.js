var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const e = require("express");

var app = express();
app.use(bodyParser({ limit: "50mb" }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/user.js")(app);
// require("./routes/item.js")(app);

app.listen(5000, () => console.log("Server @ port 5000"));
module.exports = app;

// Models
// Views
// Controllers + Router

// User
// Item
// ItemCode/SSN
// ItemName
