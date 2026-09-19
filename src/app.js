import express from "express";

const app = express();

app.get("/user", (req, res) => {
  res.send({ fname: "Umamah", lname: "Raza" });
});

app.post("/user", (req, res) => {
  res.send("Data saved into the database successfully!");
});

app.delete("/user", (req, res) => {
  res.send("User data deleted successfully!");
});

app.use("/user", (req, res) => {
  res.send("Waaah kya baat hai....janab");
});

app.use("/test", (req, res) => {
  res.send("Hi...Test");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
