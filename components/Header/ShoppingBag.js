import "styled-components/macro";
import { useUser } from "../User";
import { useCart } from "../../lib/appState";
import { BiShoppingBag } from "react-icons/bi";

export default function ShoppingBag() {
  const user = useUser();
  const { openCart } = useCart();

  const itemsCount = user?.cart.reduce(
    (tally, cartItem) => tally + (cartItem.product ? cartItem.quantity : 0),
    0
  );

  return (
    <>
      {user && (
        <button type="button" onClick={openCart}>
          <div className="group relative">
            <div tw="text-xl lg:text-2xl opacity-70 hover:opacity-100">
              <BiShoppingBag />
            </div>
            {itemsCount > 0 && (
              <span
                className="absolute bottom-[8px] left-[8px] flex h-6
                w-6 transform items-center justify-center rounded-full bg-gold text-sm text-black transition duration-300 ease-in-out
                group-hover:scale-100 group-hover:text-opacity-100 md:bottom-[2px] md:left-[3px] md:h-7 md:w-7 md:scale-[0.5] md:text-opacity-0  lg:bottom-[4px] lg:left-[6px] lg:group-hover:scale-105"
              >
                {itemsCount}
              </span>
            )}
          </div>
        </button>
      )}
    </>
  );
}
