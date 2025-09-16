'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getProducts } from '../lib/get-all-products';
import { Product } from '../lib/models/product';
import ProductCard from '../ui/product-views/product';

export default function CateogoryPage() {
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get('kategori') || 'Ingen kategori valgt';

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            const products = await getProducts();
            if (currentCategory === "Ingen kategori valgt") {
                setProducts(products);
            } else {
                setProducts(products.filter(p => p.category.toLowerCase() === currentCategory.toLowerCase()));
            }
        }
        fetchProducts();
    }, [currentCategory]);


    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    );
}