import { getProduct } from "@/app/lib/get-product";
import { Product } from "@/app/lib/models/product";
import Image from "next/image";

export default async function ProductPage({params} : { params: Promise<{ productId: string }>}) {
    const { productId } = await params;

    const fetchedProduct : Product = await getProduct(Number(productId ?? -1));

    return (<div className="max-w-4xl mx-auto p-6 flex flex-row gap-6 items-center">
        <Image 
            src={fetchedProduct.image} 
            alt={fetchedProduct.title} 
            width={400}
            height={400}
        />
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl mb-4">{fetchedProduct.title}</h1>
            <p className="text-gray-800 dark:text-gray-200">{fetchedProduct.description}</p>
            <button className="px-8 py-2 bg-green-500 w-min whitespace-nowrap text-gray-200 dark:text-gray-800">Add to cart</button>
        </div>
    </ div>);

}