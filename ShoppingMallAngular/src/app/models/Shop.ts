import { Product } from "./Product";

export interface Shop{
    shopId?:number;
    shopName:string;
    shopImageUrl?:string;
    managerName:string;
    description?:string;
}