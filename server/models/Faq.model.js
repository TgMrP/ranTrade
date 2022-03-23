const { Schema, model } = require('mongoose');
const FaqCategoryModel = require('./FaqCategory.model');

const dataSchema = new Schema(
  {
    category: { type: Schema.Types.ObjectId, ref: FaqCategoryModel },
    question: { type: String, default: '' },
    answer: { type: String, default: '' },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = model('Faq', dataSchema);
