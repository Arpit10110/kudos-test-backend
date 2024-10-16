import { shopify } from "../app.js";
export const getcollections = async (req, res) => {
    console.log("getcollections");
    try {
        const collections = await shopify.customCollection.list();
        res.json({
            status: true,
            message: "Custom collections fetched successfully",
            data: collections,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error fetching custom collections",
            error: error.message,
        });
    }
};

// Function to get all products from "All" collection
export const getAll = async (req, res) => {
    try {
        const products = await shopify.product.list({
            collection_id: 294882508937,  // All collection ID
        });
        res.json({
            status: true,
            message: "All collection products fetched successfully",
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error fetching All collection products",
            error: error.message,
        });
    }
};

// Function to get all products from "Baby Boy" collection
export const getBoys = async (req, res) => {
    try {
        const products = await shopify.product.list({
            collection_id: 294856130697,  // Baby Boy collection ID
        });
        res.json({
            status: true,
            message: "Baby Boy collection products fetched successfully",
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error fetching Baby Boy collection products",
            error: error.message,
        });
    }
};

// Function to get all products from "Girl" collection
export const getGirls = async (req, res) => {
    try {
        const products = await shopify.product.list({
            collection_id: 294882640009,  // Girl collection ID
        });
        res.json({
            status: true,
            message: "Girl collection products fetched successfully",
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error fetching Girl collection products",
            error: error.message,
        });
    }
};

// Function to get all products from "Accessories" collection
export const getAccessories = async (req, res) => {
    try {
        const products = await shopify.product.list({
            collection_id: 294886965385,  // Accessories collection ID
        });
        res.json({
            status: true,
            message: "Accessories collection products fetched successfully",
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error fetching Accessories collection products",
            error: error.message,
        });
    }
};

// Function to get all products from "Toys" collection
export const getToys = async (req, res) => {
    try {
        const products = await shopify.product.list({
            collection_id: 294887030921,  // Toys collection ID
        });
        res.json({
            status: true,
            message: "Toys collection products fetched successfully",
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error fetching Toys collection products",
            error: error.message,
        });
    }
};
