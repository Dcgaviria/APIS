import Product from "../models/product.model.js";

export const products = async (req, res) => {
  const productList = await Product.findAll();
  res.status(200).json({
    succes: true,
    data: productList   
     
  });
};