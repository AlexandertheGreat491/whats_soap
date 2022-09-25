const { Schema, model } = require("mongoose");
const sudreactionSchema = require("./SudReactions");
const dateFormat = require("../utils/dateFormat");

const sudSchema = new Schema(
  {
    title: {
      type: String,
      required: "You need to enter a title!",
      minlength: 1,
      // maxlength: 280,
    },
    description: {
      type: String,
      required: "You need to enter a description!",
      minlength: 1,
      // maxlength: 280,
    },
    image: {
      type: String,
    },
    ingredients: {
      type: [String],
    },
    steps: {
      type: [String],
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
    sudreactions: [sudreactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

sudSchema.virtual("sudreactionCount").get(function () {
  return this.sudreactions.length;
});

const Sud = model("Sud", sudSchema);

module.exports = Sud;
