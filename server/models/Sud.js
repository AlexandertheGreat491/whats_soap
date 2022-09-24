const { Schema, model } = require('mongoose');
const sudreactionSchema = require('./SudReaction');
const dateFormat = require('../utils/dateFormat');

const sudSchema = new Schema(
  {
    sudText: {
      type: String,
      required: 'You need to wash your hands!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    sudreactions: [sudreactionSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

sudSchema.virtual('sudreactionCount').get(function() {
  return this.sudreactions.length;
});

const Sud = model('Sud', sudSchema);

module.exports = Sud;