const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);

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
      error: error.message,
    });
  }
});

app.get("/feed", async (req, res) => {
  try {
    const user = await User.findOne({ emailId: req.body.emailId });

    if (user.length === 0) {
      res.status(404).json({
        message: "user not found",
      });
    } else {
      res.status(201).json({ user });
    }
  } catch (error) {
    console.log("Something went wrong", error);
    res.status(500).json({
      message:
        "Something went wrong while fetching the user data from the database",
    });
  }
});

app.delete("/user", async (req, res) => {
  try {
    const userId = req.body._id;
    const user = await User.findOneAndDelete({ _id: userId });

    // User not found
    if (!user) {
      return res.status(404).json({
        message: "User not found!",
      });
    }

    // User deleted successfully
    res.status(200).json({
      message: "User deleted successfully!",
    });
  } catch (error) {
    console.log("Error deleting user", error);
    res.status(500).json({
      message: "Something went wrong while deleting user",
    });
  }
});

app.patch("/user", async (req, res) => {
  try {
    const userId = req.body._id;
    const data = req.body;
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
    });

    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User updated successfully!",
      user: user,
    });
  } catch (error) {
    console.log("Error updating user", error);
    res.status(500).json({
      message: "Something went wrong while updating the user!",
    });
  }
});

app.get("/feed/all", async (req, res) => {
  try {
    const user = await User.find({});

    if (user.length === 0) {
      res.status(404).json({
        message: "user not found",
      });
    } else {
      res.status(201).json({ user });
    }
  } catch (error) {
    console.log("Something went wrong", error);
    res.status(500).json({
      message:
        "Something went wrong while fetching the user data from the database",
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
