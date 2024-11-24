const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is require"],
  },
  email: {
    type: String,
    required: [true, "email is require"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isDoctor: {
    type: Boolean,
    default: false,
  },
  isBlocked: { type: Boolean,
     default: false,

   },
  notifcation: [
    {
      message: { type: String, required: true },
      onClickPath: { type: String, required: true },
      createdAt: { type: Date, default: Date.now }, // Automatically set the current date
    },
  ],
  seennotification: [
    {
      message: { type: String, required: true },
      onClickPath: { type: String, required: true },
      createdAt: { type: Date, default: Date.now }, // Automatically set the current date
    },
  ],
},
{ timestamps: true });

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;