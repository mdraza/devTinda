import express from "express";

const app = express();

app.get(
  "/user",
  (req, res, next) => {
    // res.send("Request handler-1");
    next();
  },
  (req, res, next) => {
    // res.send("Request handler-2");
    next();
  },
  (req, res, next) => {
    // res.send("Request handler-3");
    next();
  },
  (req, res, next) => {
    res.send("Request handler-4");
  },
);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
