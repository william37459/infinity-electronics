"use client";
import { useEffect, useState } from "react";
import { getHeroProducts } from "@/app/lib/get-hero-products";
import { Product } from "@/app/lib/models/product";
import HeroSkeleton from "../skeletons/hero-skeleton";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";

export default function Hero() {
    const [heroProducts, setHeroProducts] = useState<Product[] | null>(null);
    const [current, setCurrent] = useState(0);
    
    useEffect(() => {
        async function fetchProducts() {
            const products = await getHeroProducts();
            setHeroProducts(products); 
        }
        fetchProducts();
    }, []);

    if (heroProducts === null) return <HeroSkeleton />;
    
    const next = () => setCurrent((prev) => (prev + 1) % heroProducts.length);
    const prev = () => setCurrent((prev) => (prev - 1 + heroProducts.length) % heroProducts.length);
    
    const product = heroProducts[current];
    
    return (
        <div className="h-[50vh] overflow-hidden relative flex items-center justify-center p-4">
            <div
                className="w-full h-full absolute"
                style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}>
                <div className="absolute bottom-0 left-0 text-white p-4 w-full">
                    <h2 className="text-lg font-bold max-w-1/3">{product.title}</h2>
                    <p className="text-sm">${product.price}</p>
                </div>
            </div>
            <button
                className="absolute hover:cursor-pointer left-4 top-1/2 -translate-y-1/2 px-2 py-1 rounded"
                onClick={prev}
            >
                <ChevronLeft />
            </button>
            <button
                className="absolute hover:cursor-pointer right-4 top-1/2 -translate-y-1/2 px-2 py-1 rounded"
                onClick={next}
            >
                <ChevronRight />
            </button>
            <div
                className="absolute flex self-end gap-2"
            >
                {heroProducts.map((_, i) => (
                    <button key={i} onClick={() => setCurrent(i)}>
                        <Circle  key={i} size={12} color={`${i === current ? "darkgrey" : "grey"}`} fill={`${i === current ? "darkgrey" : "grey"}`} />
                    </button>
                ))}
            </div>
        </div>
    );
}