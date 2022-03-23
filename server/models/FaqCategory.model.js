const { Schema, model } = require('mongoose');

const dataSchema = new Schema(
  {
    name: { type: String, required: true },
    order: { type: Number, default: 0 },
    enable: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = model('FaqCategory', dataSchema);
