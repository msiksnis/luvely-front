import tw, { styled } from "twin.macro";
import "styled-components/macro";
import { MdClose } from "react-icons/md";
import formatMoney from "../lib/formatMoney";
import { useUser } from "./User";
import calcTotalPrice from "../lib/calcTotalPrice";
import { useCart } from "../lib/appState";
import Link from "next/link";

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }
`;

function CartItem({ cartItem }) {
  const { product } = cartItem;
  if (!product) return null;
  return (
    <CartItemStyles>
      <img
        width="100"
        src={product.photo.image.publicUrlTransformed}
        alt={product.name}
      />
      <div tw="flex flex-col justify-between py-2 font-quicksand">
        <h3 tw="font-semibold">{product.name}</h3>
        <div tw="flex justify-between">
          <p tw="text-sm">QTY: {cartItem.quantity}</p>
          <p tw="text-sm font-semibold">
            {formatMoney(product.price * cartItem.quantity)}
          </p>
        </div>
      </div>
    </CartItemStyles>
  );
}

const CartStyles = styled.div`
  z-index: 50;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 20px;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  width: 30%;
  min-width: 500px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  transform: translateX(100%);
  transition: all 0.3s;
  ${(props) => props.open && `transform: translateX(0);`}
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }
`;

export default function Cart() {
  const me = useUser();
  const { cartOpen, closeCart } = useCart();
  if (!me) return null;
  return (
    <CartStyles open={cartOpen}>
      <header tw="flex items-center pb-4 border-b">
        <div tw="w-6">
          <MdClose tw="text-2xl cursor-pointer" onClick={closeCart}>
            &times;
          </MdClose>
        </div>
        <div tw="flex justify-center w-full">
          <h3 tw="text-xl font-quicksand font-semibold text-center">
            My Shopping Bag
          </h3>
        </div>
        <Link href="/shopping-bag">
          <a
            tw="text-[11px] text-gray-600 hover:text-gray-900 uppercase tracking-wider cursor-pointer"
            onClick={closeCart}
          >
            Edit
          </a>
        </Link>
      </header>
      <ul>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer tw="border-t pt-4">
        <div tw="flex justify-between font-quicksand font-semibold text-lg uppercase">
          <p tw="">Subtotal</p>
          <p tw="">{formatMoney(calcTotalPrice(me.cart))}</p>
        </div>
        <Link href="/shopping-bag">
          <button
            onClick={closeCart}
            tw="uppercase font-quicksand font-semibold tracking-wider shadow-md border border-black w-full py-2 rounded text-white
            bg-black hover:(text-black bg-white) transition duration-300 ease-in-out mt-4 mb-2"
          >
            Checkout
          </button>
        </Link>
      </footer>
    </CartStyles>
  );
}
