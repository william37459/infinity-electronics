import { Product } from "./product";

export type Basket = {
  id: number;
  userId: string;
  date: string;
  products: Product[];
};
