import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.js"
import {productRouter} from "./routes/product.js"
import dotenv from 'dotenv';
dotenv.config(); 
const app = express();
const port = 8080;

const dbUrl = process.env.MONGO_URL;


mongoose
  .connect(dbUrl)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

  app.use(express.json());


  app.use("/product",productRouter);

    
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "page is not found"));
  });
  // Error handling middleware
  app.use((err, req, res, next) => {
    let { statusCode = 500, message = "somthing went wrong" } = err;
    console.error(err.stack);
    res.status(statusCode).render("error.ejs", { message });
    // res.status(stausCode).send(message);
  });
  
  // Start server
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
  