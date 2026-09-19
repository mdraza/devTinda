import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hi...Node JS");
});

app.use("/test", (req, res) => {
  res.send("Hi...Test");
});

app.use("/demo", (req, res) => {
  res.send("Demo...");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
