const express = require("express");

const {
  addProducts,
  addCustomer,
  invoice,
  getAllCustomers,
  getAllProducts,
  getAllProductsPrice
} = require("../controller/controller");

const knexRouter = express.Router();

knexRouter.post("/add-products", addProducts);
knexRouter.post("/add-customer", addCustomer);
knexRouter.post("/invoice", invoice);
knexRouter.get("/get-all-customers", getAllCustomers);
knexRouter.get("/get-all-products", getAllProducts);
knexRouter.get("/get-all-products-price", getAllProductsPrice);

module.exports = knexRouter;
