import { Product } from './models/product';

export async function getProduct(id : number) : Promise<Product> {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) alert('Failed to fetch hero products');
    const data : Product = await res.json();
    return data;
}