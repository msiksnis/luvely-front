import tw, { styled } from "twin.macro";
import "styled-components/macro";
import { useUser } from "../User";
import RemoveFromCart from "../RemoveFromCart";
import formatMoney from "../../lib/formatMoney";
import Link from "next/link";
import Image from "next/image";
import Delivery from "./DeliveryDropdown";
import DiscountCode from "./DiscountCode";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import AdditionalInfo from "./AdditionalInfo";

const ItemsList = styled.li`
  border-bottom: 1px solid rgba(209, 213, 219, 100);
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
`;

function ShoppingBagItem({ cartItem }) {
  const [counter, setCounter] = useState(cartItem.quantity);
  const incrementQuantity = () => setCounter(counter + 1);
  let decrementQuantity = () => setCounter(counter - 1);

  if (counter <= 1) {
    decrementQuantity = () => setCounter(1);
  }

  const { product } = cartItem;
  if (!product) return null;
  return (
    <ItemsList>
      <div tw="flex">
        <div tw="flex items-center md:p-2 lg:p-6 w-1/3">
          <img
            width="200"
            src={product.photo.image.publicUrlTransformed}
            alt={product.name}
          />
        </div>
        <div tw="p-6 w-2/3 space-y-4">
          <h3>{product.name}</h3>
          <RemoveFromCart id={cartItem.id} />
        </div>
      </div>
      <div tw="p-6 text-center">{formatMoney(product.price)}</div>
      <div tw="flex flex-col items-center">
        <div tw="p-6 text-center">{cartItem.quantity}</div>
        <div tw="flex">
          <div
            tw="border border-gray-400 border-r rounded-l px-4 py-2 cursor-pointer"
            onClick={decrementQuantity}
          >
            <AiOutlineMinus />
          </div>
          <div
            tw="border border-gray-400 border-l-0 rounded-r px-4 py-2 cursor-pointer"
            onClick={incrementQuantity}
          >
            <AiOutlinePlus />
          </div>
        </div>
      </div>
      <div tw="p-6 text-center font-semibold">
        {formatMoney(product.price * cartItem.quantity)}
      </div>
    </ItemsList>
  );
}

export default function ShoppingBag() {
  const user = useUser();
  const me = useUser();
  if (!me) return null;

  const itemsCount = user?.cart.reduce(
    (tally, cartItem) => tally + (cartItem.product ? cartItem.quantity : 0),
    0
  );

  return (
    <div tw="lg:mx-20">
      <header tw="text-4xl text-center font-medium mt-5 mb-14 uppercase">
        Shopping Bag ( {itemsCount || 0} items )
      </header>
      <div tw="flex lg:space-x-2">
        <div tw="flex flex-col font-poppins">
          <div tw="">
            <ItemsList tw="pb-4 text-xl font-medium">
              <div tw="pl-6">Products</div>
              <div tw="pl-6">Price</div>
              <div tw="pl-6">Quantity</div>
              <div tw="pl-6">Total</div>
            </ItemsList>
            <ul>
              {me.cart.map((cartItem) => (
                <ShoppingBagItem key={cartItem.id} cartItem={cartItem} />
              ))}
            </ul>
          </div>
          <span tw="flex pt-6 mb-20 text-xs tracking-wider text-gray-600">
            <span className="group border-b border-gray-600 hover:border-gray-500">
              <div className="py-0.5 group-hover:text-gray-500">
                <Link href="/">CONTINUE SHOPPING</Link>
              </div>
            </span>
          </span>
        </div>
        <div tw="py-8 px-5 h-full mb-40 bg-gray-100 font-poppins">
          <div tw="flex flex-col mx-5 space-y-3 pb-6">
            <button
              tw="uppercase font-quicksand font-semibold tracking-wider shadow-md border border-black w-96 py-2 rounded text-white
            bg-black hover:(text-black bg-white) transition duration-300 ease-in-out"
            >
              Checkout
            </button>
            <button
              tw="font-poppins font-medium shadow-md w-96 rounded bg-[#F4B6C6] transition
              duration-300 ease-in-out"
            >
              <div tw="flex items-center justify-center">
                <Image
                  tw="object-contain"
                  src="/images/logos/pay-with-klarna.png"
                  width={300}
                  height={42}
                />
              </div>
            </button>
          </div>
          <div tw="font-poppins py-10 border-t border-gray-400">
            <div tw="pt-2">
              <Delivery />
            </div>
          </div>
          {/* <div tw="pt-8 border-t border-gray-400">
            <DiscountCode />
          </div> */}
          <div tw="pt-8 border-t border-gray-400">
            <AdditionalInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
