const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// importing router
const router = require("./routes/Routes");
require("dotenv").config();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// api routes
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
