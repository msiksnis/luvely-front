import Link from "next/link";
import Image from "next/image";
import tw from "twin.macro";
import "styled-components/macro";
import DropdownTreatments from "../Header/Dropdowns/DropdownTreatments";
import DropdownPrice from "./Dropdowns/DropdownPrice";
import DropdownGifts from "./Dropdowns/DropdownGifts";
import DropdownAccount from "./Dropdowns/DropdownAccount";
import Cart from "../Cart";
import { useUser } from "../User";
import ShoppingBag from "./ShoppingBag";
import { BiSearchAlt } from "react-icons/bi";
import { useSearchModal } from "../../lib/appState";

export default function SmallHeader() {
  const user = useUser();

  const { toggleSearchModal } = useSearchModal();

  return (
    <div tw="flex h-14 justify-between px-4 items-center pb-2 w-full shadow-md">
      <div tw="flex justify-between items-center w-full">
        <div tw="-mb-3 cursor-pointer w-40 lg:w-52">
          <Link href="/">
            <a>
              <Image
                tw="object-contain"
                src="/Logo/Logo.png"
                width={180}
                height={44}
              />
              {/* <Image
                tw="object-contain"
                src="/LOGO-ONE.png"
                width={180}
                height={44}
              /> */}
            </a>
          </Link>
        </div>
        <div tw="flex space-x-3 lg:space-x-5 font-poppins text-sm mt-3.5">
          <DropdownTreatments />
          {/* <DropdownPrice /> */}
          <span tw="cursor-pointer pr-0.5 opacity-70 hover:opacity-100 uppercase">
            <Link href="/shop">Shop</Link>
          </span>
          <DropdownGifts />
          <span tw="hidden md:(block cursor-pointer opacity-70 hover:opacity-100 uppercase)">
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
        <div tw="flex items-center space-x-2 lg:space-x-4 text-sm mt-3">
          {!user && (
            <div tw="uppercase opacity-70 hover:opacity-100">
              <Link href="/signin">Sign In</Link>
            </div>
          )}
          {user && <DropdownAccount />}
          <button type="button" onClick={toggleSearchModal}>
            <div tw="text-xl lg:text-2xl opacity-70 hover:opacity-100 cursor-pointer">
              <BiSearchAlt />
            </div>
          </button>
          <ShoppingBag />
        </div>
        <Cart />
      </div>
      <div tw="flex justify-end w-48 lg:w-52 -mb-2">
        <button
          tw="text-xs lg:text-sm uppercase font-poppins border border-black px-9 py-2 rounded text-white
          bg-black hover:(text-black bg-white) transition duration-300 ease-in-out"
        >
          <a
            href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Time
          </a>
        </button>
      </div>
    </div>
  );
}
