export type BasketResponse = {
  id: number;
  userId: string;
  date: string;
  products: { productId: number, quantity: number }[];
};
