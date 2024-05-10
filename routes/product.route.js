import express from "express";
import { products } from "../controllers/product.controller.js";

const router = express.Router();

    
//forma larga...
router.get("/", products)
export default router;