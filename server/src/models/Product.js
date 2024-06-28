import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.UUID },
        name: { type: String, required: true },
        description: { type: String },
        price: { type: Number, required: true },
        avaliable: { type: Boolean, required: true }
    },
    { versionKey: false }
);

const product = mongoose.model("products", productSchema);

export { product };
