const express = require("express");
const mongoose = require("mongoose");
const inventoryRoutes = require("./routes/inventoryRoutes");
const customerRoutes = require("./routes/customerRoutes");
const orderRoutes = require("./routes/orderRoutes");
mongoose.connect("mongodb://localhost/api_web_tech_assignment");
const app = express();
app.use(express.json())




//check

app.use("/", inventoryRoutes);
app.use("/", customerRoutes);
app.use("/", orderRoutes);






app.listen(8080, () => {
  console.log("Server is up at 8080");
})