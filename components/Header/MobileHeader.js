import tw from "twin.macro";
import "styled-components/macro";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import SearchTreatments from "../Search/SearchTreatments";

export default function MobileHeader() {
  return (
    <div tw="flex flex-col h-24 justify-between px-4 items-center py-2 w-full z-40">
      <div tw="flex justify-between w-full">
        <div tw="-mb-3 -ml-2 cursor-pointer w-40">
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
        <div tw="ml-6">
          <HamburgerMenu />
        </div>
      </div>
      <div tw="z-10">
        <SearchTreatments />
      </div>
    </div>
  );
}
