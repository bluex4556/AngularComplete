import { Product } from "./Product";

export interface Cart{
    cartId?:number;
    userName:string;
    productId:number;
    qty:number;
    orderId?:number;
    product?:Product;
}