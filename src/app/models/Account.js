const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Account = new Schema({
  username: { type: String},
  cid: {type: String, default: 'S001'},
  name: { type: String},
  password: { type: String},
  role: {
    type: String,
    enum: ['student', 'teacher', 'admin'],
    default: 'student'
  }
});

module.exports = mongoose.model("accounts", Account);
