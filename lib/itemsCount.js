import { useUser } from "../components/User";

export const itemsCount = useUser()?.cart.reduce(
  (tally, cartItem) => tally + (cartItem.product ? cartItem.quantity : 0),
  0
);
