const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
// const validator = require("validator");
// const crypto = require("crypto");
// const bcrypt = require("bcryptjs");

const contentSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Title is required"],
    },

    img: {
      type: String,
      trim: true,
      required: [true, "Image URL is required"],
    },

    desc: {
      type: String,
      trim: true,
      required: [true, "Image URL is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Content = mongoose.model("Content", contentSchema);

module.exports = Content;

// {
//   "title":"Hello",
//   "img":"https://pixlr.com/images/index/remove-bg.webp",
//   "desc":"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
// }
