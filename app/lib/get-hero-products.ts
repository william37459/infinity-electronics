import { Product } from './models/product';

export async function getHeroProducts() : Promise<Product[]> {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) alert('Failed to fetch hero products');
    const data : Product[] = await res.json();
    return data.slice(0, 5);
}