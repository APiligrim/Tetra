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

app.put("/items/:itemcode", (req, res) => {
  console.log(req.que);
  const { itemcode } = req.params;
  if (itemcode === "1") {
    res.status(200).json({
      success: true,
      item_code: "1",
      item_name: "Shirt",
    });
  } else if (itemcode === "2") {
    res.status(200).json({
      success: true,
      item_code: "2",
      item_name: "Bag",
    });
  } else {
    res.status(200).json({
      success: false,
    });
  }
});

// GET, POST

app.listen(5000, () => console.log("Server @ port 5000"));
module.exports = app;

// Models
// Views
// Controllers + Router

// User
// Item
// ItemCode/SSN
// ItemName
