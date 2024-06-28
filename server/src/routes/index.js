import express from "express";
import products from './productsRoutes';

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.send("teste");
    });

    app.use(express.json(), products);
};

export default routes;
