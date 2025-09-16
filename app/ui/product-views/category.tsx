import { Product } from "@/app/lib/models/product";
import ProductCard from "./product";
import Link from "next/link";

const headerConversion : Record<string, string> = {
    "smykker": "jewelery",
    "lagring": "electronics",
    "fremhævet": "men's clothing"
}

export default function Category({ products, header }: { products: Product[], header: string }) {
    

    return <>
        <Link href={`/kategori?kategori=${headerConversion[header.toLowerCase()] ?? 'jewelery'}`} className="text-2xl font-bold mb-4 mt-8 tracking-tight pl-4  hover:underline cursor-pointer ">{header}</Link>
        <div className="flex flex-row gap-6 overflow-x-auto w-full pl-4">
            {products.map(product => (
                <ProductCard key={product.id} product={product} className="w-sm flex-shrink-0" ></ProductCard>
            ))}
        </div>
    </>;
}