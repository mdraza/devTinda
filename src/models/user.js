const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 20,
    },
    lastName: {
      type: String,
      minLength: 4,
      maxLength: 20,
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      minLength: 10,
      maxLength: 20,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    photoUrl: {
      type: String,
      default: "https://picsum.photos/seed/picsum/200/300",
    },
    about: {
      type: String,
      default: "Hi, This is test user intro",
      minLength: 20,
      maxLength: 50,
    },
    skills: {
      type: [String],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
