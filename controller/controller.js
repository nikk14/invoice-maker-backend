const { createConnection } = require("mysql");

// const knex = "@/config/knex"
const knex = require("../config/db");

// add products
const addProducts = async (req, res) => {
  try {
    const { product_id, product_name, product_price, total_product } = req.body;
    const result = await knex("products").insert({
      productId: product_id,
      product_name: product_name,
      product_price: product_price,
      available_product: total_product,
    });

    return res.status(201).json({ result: result });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "database error" });
  }
};

//add customers
const addCustomer = async (req, res) => {
  try {
    const {customerId, customerName } = req.body;
    const result = await knex("customer").insert({
      customer_id: customerId, 
      customer_name: customerName,
    });
    return res.status(201).json({ result: result });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "database error" });
  }
};

//add invoice details
const invoice = async (req, res) => {
  try {
    const { invoice_id, purchaseDate } = req.body;
    const result = await knex("invoice").insert({
      invoice_number: invoice_id,
      date_of_Purchase: purchaseDate,
    });
    return res.status(201).json({ result: result });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "database error" });
  }
};

//get all customers
const getAllCustomers = async (req, res) => {
  try {
    const result = await knex("customer");
    return res.status(201).json({ result: result });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "database error" });
  }
};

//get all products
const getAllProducts = async (req, res) => {
  try {
    const result = await knex.select('product_name').from('products');
    return res.status(201).json({ result: result });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "database error" });
  }
};

//get all products
const getAllProductsPrice = async (req, res) => {
  try {
    const result = await knex.select('productId','product_name','product_price','available_product').from('products');
    return res.status(201).json({ result: result });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "database error" });
  }
};
module.exports = {
  addProducts,
  addCustomer,
  invoice,
  getAllCustomers,
  getAllProducts,
  getAllProductsPrice
};
