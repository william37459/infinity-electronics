import { Product } from "@/app/lib/models/product";
import Link from "next/link";

export default function ProductCard({ product, className = "" }: { product: Product, className? : string} ) {
    return <>
        <Link 
        href={`/produkt/${product.id}`}
        className={`py-4 px-6 my-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-zinc-900 flex flex-col ${className}`}>
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 justify-end">{product.category}</p>
            <p className="text-gray-600">${product.price}</p>
        </Link>
    </>;
}