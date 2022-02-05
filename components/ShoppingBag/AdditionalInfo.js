import tw from "twin.macro";
import "styled-components/macro";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

export default function AdditionalInfo() {
  const [open, setOpen] = useState(true);

  const additionalInfoClose = (
    <div
      tw="flex justify-between items-center cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div tw="flex text-2xl font-medium uppercase">Additional Info</div>
      <div tw="text-3xl">
        <AiOutlineMinus />
      </div>
    </div>
  );
  const additionalInfoOpen = (
    <div
      tw="flex justify-between items-center cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div tw="flex text-2xl font-medium uppercase">Additional Info</div>
      <div tw="text-3xl">
        <AiOutlinePlus />
      </div>
    </div>
  );

  return (
    <div tw="font-poppins pb-14">
      {open ? additionalInfoClose : additionalInfoOpen}
      {open ? (
        <div tw="pt-5">
          <div tw="flex flex-col uppercase space-y-4 text-base font-normal">
            <Link href="">
              <a>
                <span tw="border-b border-gray-800 hover:(text-gray-500 border-gray-500) tracking-wide">
                  Shipping & Pick Up
                </span>
              </a>
            </Link>
            <Link href="">
              <a>
                <span tw="border-b border-gray-800 hover:(text-gray-500 border-gray-500) tracking-wide">
                  Return Policy
                </span>
              </a>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
