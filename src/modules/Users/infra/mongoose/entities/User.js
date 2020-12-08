const { Schema, model } = require("mongoose");
const paginate = require("../../../../../config/mongoose-paginate");

const User = new Schema(
  {
    name:     { type: String, required: true },
    email:    { type: String, unique: true, lowercase: true },
    password: { type: String,  required: true },
    active:   { type: Boolean, default: true },
    role:   { type: String, select: false, enum: ['admin', 'user'], default: 'user' },
  },
  { timestamps: true, selectPopulatedPaths: true }
);

User.plugin(paginate);

module.exports = model("User", User);
