import Link from "next/link";
import "styled-components/macro";
import DropdownTreatments from "../Header/Dropdowns/DropdownTreatments";
import DropdownGifts from "./Dropdowns/DropdownGifts";
import Cart from "../Cart";
import { useUser } from "../User";
import ShoppingBag from "./ShoppingBag";
import { BiSearchAlt } from "react-icons/bi";
import { useSearchModal } from "../../lib/appState";
import DropdownAccount from "./Dropdowns/DropdownAccount";

export default function BottomOfHeader() {
  const user = useUser();
  const { toggleSearchModal } = useSearchModal();

  return (
    <div tw="text-sm lg:text-base flex h-12 pt-2 justify-between items-center w-full px-8 md:px-10 font-poppins">
      <div tw="space-x-6 mt-0.5">
        <DropdownTreatments />
        <span tw="cursor-pointer opacity-70 hover:opacity-100 uppercase">
          <Link href="/shop">Shop</Link>
        </span>
        <DropdownGifts />
        <span tw="cursor-pointer opacity-70 hover:opacity-100 uppercase">
          <a
            href="mailto:info@engabeauty.no"
            target="_blank"
            rel="noopener noreferrer"
            tw="pb-3 lg:pb-1"
          >
            Contact Us
          </a>
        </span>
      </div>
      <div tw="flex items-center space-x-5">
        {!user && (
          <div tw="uppercase opacity-70 hover:opacity-100">
            <Link href="/signin">Sign In</Link>
          </div>
        )}
        {user && <DropdownAccount />}
        <div tw="flex items-center space-x-4">
          <button type="button" onClick={toggleSearchModal}>
            <div tw="text-xl lg:text-2xl opacity-70 hover:opacity-100 cursor-pointer">
              <BiSearchAlt />
            </div>
          </button>
          <ShoppingBag />
        </div>
      </div>
      <Cart />
    </div>
  );
}
