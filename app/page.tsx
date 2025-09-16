import Hero from '@/app/ui/product-views/hero';
import { getProducts } from './lib/get-all-products';
import ProductCard from './ui/product-views/product';
import Category from './ui/product-views/category';

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <Hero />
      <Category header='Fremhævet' products={products.slice(0,5)} ></Category>
      <Category header='Smykker' products={products.filter((e) => e.category === "jewelery")} ></Category>
      <Category header='Lagring' products={products.filter((e) => e.title.includes("TB"))} ></Category>
    </div>
  );
}
