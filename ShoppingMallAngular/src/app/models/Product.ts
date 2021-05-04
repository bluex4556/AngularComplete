export interface Product{
    productId?: number;
    productName:string;
    price:number;
    productImageUrl?: string;
    stock:number;
    shopName?:string;
    shopId?:number;
    description?: string;
}