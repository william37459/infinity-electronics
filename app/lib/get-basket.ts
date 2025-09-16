import { getProduct } from "./get-product";
import { Basket } from "./models/basket";
import { BasketResponse } from "./models/basket-response";
import { Product } from "./models/product";

export default async function getBasket(): Promise<Basket> {
    const res = await fetch('https://fakestoreapi.com/carts/1');
    if (!res.ok) alert('Failed to cart products');
    const data : BasketResponse = await res.json();
    const allProducts : Product[] = await Promise.all(data.products.map(async (item) => ( getProduct(item.productId))));

    const basket : Basket = Object.assign({}, data, { products: allProducts });

    return basket;

}