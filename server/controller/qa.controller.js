const FaqModel = require("../models/Faq.model");
const FaqCategoryModel = require("../models/FaqCategory.model")

module.exports.getQa = async (req, res) => {
  const categories = await FaqCategoryModel.find({ enable: true }).sort({ sort: 0 });
  const data = await Promise.all(categories.map(async (category) => {
    const data = category.toObject();
    data.faq = await FaqModel.find({ category: category._id, enable: true }).select('-category').sort({ sort: 0 })

    return data
  }))
  res.json({ success: true, data })
}
