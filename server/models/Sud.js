const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const sudSchema = new Schema(
  {
    title: {
      type: String,
      required: "You need to enter a title!",
      minlength: 1,
    },
    description: {
      type: String,
      required: "You need to enter a description!",
      minlength: 1,
    },
    ingredients: {
      type: String,
    },
    steps: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    url: {
      type: String
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Sud = model("Sud", sudSchema);

module.exports = Sud;
