const express = require("express");
const orderModal = require("../modals/order");
const inventoryModal = require("../modals/inventory");
const router = express.Router();


router.post("/order", async (req, res) => {
  try {
    const quantity = await inventoryModal.findOne({ inventory_id: req.body.inventory_id })
    if (quantity.available_quantity < req.body.quantity) {
      return (
        res.status(400).json({
          status: "Failed",
          message: "Out Of stock"
        })
      )
    } else {
      const order = await orderModal.create(req.body)
      const updatedQuantity = await inventoryModal.findOne({ inventory_id: req.body.inventory_id });
      const qty = await updatedQuantity.available_quantity - req.body.quantity
      const update = await inventoryModal.updateOne({ inventory_id: req.body.inventory_id }, { available_quantity: qty })
      res.status(200).json({
        status: "Order Placed Sucess",
        order
      })
    }


  } catch {
    res.status(400).json({
      status: "failed",
      message: "Enter all the details correct"

    })
  }
})





module.exports = router;