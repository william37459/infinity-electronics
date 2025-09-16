import React from "react";
import getBasket from "../lib/get-basket";

export default async function BasketPage() {
	const basket = await getBasket();

	return (
		<main className="max-w-xl mx-auto p-6">
			<h1 className="text-2xl font-bold mb-4">Basket</h1>
			<ul className="divide-y divide-gray-200 mb-4">
				{basket.products.map((product) => (
					<li key={product.id} className="py-2 flex justify-between">
						<span>{product.title}</span>
						<span className="font-medium">{product.price} kr</span>
					</li>
				))}
			</ul>
			<button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Checkout</button>
		</main>
	);
}
