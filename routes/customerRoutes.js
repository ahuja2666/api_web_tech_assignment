const express = require("express");
const CustomerModal = require("../modals/customer");
const router = express.Router();






router.post("/customer", async (req, res) => {
  try {
    const customer = await CustomerModal.create(req.body);
    res.status(200).json({
      status: "Sucess",
      customer
    })
  } catch {
    res.status(400).json({
      status: "failed",
      message: "Enter all the details correct"

    })
  }
})













module.exports = router;