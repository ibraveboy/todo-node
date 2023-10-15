const express = require("express");
const { APP_PORT } = require("./src/utils/constant/app.constant");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(APP_PORT, () => {
  console.log(`Example app listening on port ${APP_PORT}`);
});
