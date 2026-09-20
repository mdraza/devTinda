const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middleware/auth");

app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res) => {
  res.send("User data");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("Get all data!");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted user!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
