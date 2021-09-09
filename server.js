const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require("fs");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api", apiRoutes);

app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`Server is now listening on port ${PORT}`);
});
