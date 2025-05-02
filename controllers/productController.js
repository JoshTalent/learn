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

//   UPDATE
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { pr_name, pr_price, pr_desc } = req.body;

        const updatedProduct = await product.findByIdAndUpdate(id, { pr_name, pr_price, pr_desc }, { new: true });
        if (updatedProduct) res.send({message: "Product updated successfully", updatedProduct });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
    } catch (error){
        return res.status(500).json({ message: "Error updating product", error });
    }
}

//  DELETE
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await product.findByIdAndDelete(id);
        if (deletedProduct) res.send({message: "Product deleted successfully", deletedProduct });
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
    } catch (error){
        return res.status(500).json({ message: "Error deleting product", error });
    }
}