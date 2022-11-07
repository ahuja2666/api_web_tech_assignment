const express = require("express");
const inventoryModal = require("../modals/inventory");
const router = express.Router();


router.get("/inventory", async (req, res) => {
  const inventory = await inventoryModal.find()
  res.status(200).json({
    inventory
  })
})

router.get("/inventory/electronics", async (req, res) => {
  const inventory = await inventoryModal.find({ inventory_type: "Electronics" })
  res.status(200).json({
    inventory
  })
})

router.get("/inventory/furniture", async (req, res) => {
  const inventory = await inventoryModal.find({ inventory_type: "Furniture" })
  res.status(200).json({
    inventory
  })
})

router.post("/inventory", async (req, res) => {
  try {
    const stock = await inventoryModal.create(req.body);
    res.status(200).json({
      status: "Sucess",
      stock
    })
  } catch {
    res.status(400).json({
      status: "failed",
      message: "Enter all the details correct"

    })
  }
})




module.exports = router;