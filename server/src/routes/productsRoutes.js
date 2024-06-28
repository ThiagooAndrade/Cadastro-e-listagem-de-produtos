import express from "express";
import ProductController from "../controllers/ProductController.js";

const routes = express.Router();

routes.get("/products", ProductController.ListProducts);
routes.get("/product/:id", ProductController.showProduct);
routes.post("/product", ProductController.addProduct);
routes.put("/product/:id", ProductController.updateProduct);
routes.delete("/product/:id", ProductController.deleteProduct);

export default routes;
