// name
// role
// password
// contact Number
// emergency Number
// position
// github link
// addedBy
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Email address is required"],
    },

    password: {
      type: String,
    },

    role: {
      type: String,
      required: [true, "Please provide a valid position name"],
      enum: {
        values: ["admin", "user"],
        message: "status value can't be {VALUE}, must be admin",
      },
      default: "admin",
    },

    name: {
      type: String,
      required: [true, "Please provide your name"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },

    // status: {
    //   type: String,
    //   required: [true, "Please provide user status"],
    //   default: "inactive",
    //   enum: {
    //     values: ["active", "inactive", "blocked", "deleted"],
    //     message: "status value can't be {VALUE}.",
    //   },
    // },

    confirmationToken: {
      type: String,
      unique: true,
    },
    confirmationTokenExpires: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateConfirmationToken = function () {
  const token = crypto.randomBytes(32).toString("hex");

  this.confirmationToken = token;

  const date = new Date();

  date.setDate(date.getDate() + 1);
  this.confirmationTokenExpires = date;

  return token;
};

userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};

const User = mongoose.model("User", userSchema);

module.exports = User;

// {
// "email":"mdihalif@gmail.com",
// "password":"123456"
// }
// {
//   "name":"Sunjida Akter",
//   "email":"devsoftbd1@gmail.com",
//   "password":"123456",
//   "position":"CTO",
//   "contactNumber":"01777777777",
//   "imgURL":"gdfhgdfhdh",
//   "addedBy":{"name":"MD Inzamul Haque","id":"63dbbde60ec2d6a08c153720"}
// }
