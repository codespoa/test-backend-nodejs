const { Schema, model } = require("mongoose")
const paginate = require("../../../../../config/mongoose-paginate")

const Product = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    status: { type: String, enum: ['active', 'inactive', 'lacking'], default: 'active' },
    code: { type: String, required: true, lowercase: true, unique: true },
  },
  { timestamps: true, selectPopulatedPaths: true }
)

Product.plugin(paginate)

module.exports = model("Product", Product)
