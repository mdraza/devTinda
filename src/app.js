const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
  try {
    const user = new User({
      firstName: "Umamah",
      lastName: "Raza",
      emailId: "umamah@gmail.com",
      password: "Umamah@123",
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully!",
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        emailId: user.emailId,
        password: user.password,
      },
    });
  } catch (error) {
    console.log("SignUp error", error);

    res.status(500).json({
      message: "Something went wrong while creating the user!",
    });
  }
});

connectDB()
  .then(() => {
    console.log("Database is connected successfully!");
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch((error) => {
    console.log("Database is not connected!");
  });
