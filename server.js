const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use("/", serveStatic(path.join(__dirname, "/dist")));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
