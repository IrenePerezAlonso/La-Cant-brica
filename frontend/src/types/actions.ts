import { Products } from './products';

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const LOAD_PRODUCT = 'LOAD_PRODUCT';

export interface LoadProducts {
    type: typeof LOAD_PRODUCTS;
    products: Products[];
}

export interface DeleteProduct {
    type: typeof DELETE_PRODUCT;
    _id: string;
}

export interface AddProduct {
    type: typeof ADD_PRODUCT;
    product: Products;
}

export interface UpdateProduct {
    type: typeof UPDATE_PRODUCT;
    product: Products;
}

export interface LoadProduct {
    type: typeof LOAD_PRODUCT;
    product: Products;
}

export type ProductActionTypes = LoadProducts | DeleteProduct
| AddProduct | UpdateProduct | LoadProduct;

export type AppActions = ProductActionTypes;
