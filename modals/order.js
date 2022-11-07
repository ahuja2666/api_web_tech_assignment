const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer_id: { type: String, required: true },
  inventory_id: { type: String, required: true },
  item_name: { type: String, required: true },
  quantity: { type: Number, required: true }
})

module.exports = mongoose.model("order", orderSchema);