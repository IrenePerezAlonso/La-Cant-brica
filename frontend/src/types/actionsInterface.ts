import { Dispatch } from 'redux';
import Products from './Products';
import actionTypes from '../redux/actions/actionTypes';

export interface LoadProducts {
    dispatch: Dispatch;
    type: typeof actionTypes.LOAD_PRODUCTS;
    products: Products;
}

export interface DeleteProduct {
    dispatch: Dispatch;
    type: typeof actionTypes.DELETE_PRODUCT;
    productId: string;
}

export interface AddProduct {
    dispatch: Dispatch;
    type: typeof actionTypes.ADD_PRODUCT;
    product: Products;
}

export interface UpdateProduct {
    dispatch: Dispatch;
    type: typeof actionTypes.UPDATE_PRODUCT;
    _id: string;
}

export interface LoadProduct {
    dispatch: Dispatch;
    type: typeof actionTypes.LOAD_PRODUCT;
    product: string;
}

export type ProductActionsInterfaces =
    | LoadProducts
    | DeleteProduct
    | AddProduct
    | UpdateProduct
    | LoadProduct;

export type ServerActions = ProductActionsInterfaces;
