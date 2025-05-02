const product = require("../database/models/product")

// CREATE
exports.createProduct = async (req, res) => {
    try {
      const { pr_name, pr_price, pr_desc} = req.body;
  
      const newProduct = new product({ pr_name, pr_price, pr_desc});
      const savedProduct = await newProduct.save();
  
      res.status(201).json(savedProduct);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  
//   READ
exports.getProducts = async (req, res) => {
    try {
      const products = await product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };    
