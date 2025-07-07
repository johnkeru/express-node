const express = require("express");

const app = express();
const PORT = process.env.PORT || 3050;

// get, post, put, delete
// read, create, update, delete

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
