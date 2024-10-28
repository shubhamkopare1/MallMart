import express from "express";
import Product from "../models/product.js"
import mongoose from "mongoose";
const productRouter = express.Router();



productRouter.get("/",async (req,res)=>{
    try {
        const product =await Product.find({});
        res.json(product)
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send("An error occurred while fetching products.");
    }
    })


    export { productRouter };
