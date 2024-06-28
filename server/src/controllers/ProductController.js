import { product } from "../models/Product";

class ProductController {
    static async ListProducts(req, res) {
        try {
            const products = await product.find({});
            return res.json(products);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} falha ao listar os produtos`,
            });
        }
    }
    static async showProduct(req, res) {
        try {
            const id = req.params.id;
            const productFinded = await productFinded.findById(id);
            return res.json(productFinded);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} falha ao listar os produtos pelo ID`,
            });
        }
    }
    static async addProduct(req, res) {
        try {
            const newProduct = await product.create(req.body);
            return res.status(201).json({
                message: `Novo protuo cadastrado!`,
                product: newProduct,
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} falha ao cadastrar o produto`,
            });
        }
    }

    static async updateProduct(req, res) {
        try {
            const productUpdated = await product.findByIdAndUpdate(
                req.params.id,
                req.body
            );
            return res.json(productUpdated);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} falha ao atualizar o produto`,
            });
        }
    }

    static async deleteProduct(req, res) {
        try {
            await product.findByIdAndDelete(req.params.id);
            return res.json({
                message: `produto deletado`,
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} falha ao deletar o produto`,
            });
        }
    }
}

export default ProductController;
