import tw from "twin.macro";
import "styled-components/macro";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

export default function DiscountCode() {
  const [open, setOpen] = useState(true);

  const discountSectionClose = (
    <div
      tw="flex justify-between items-center cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div tw="flex text-2xl font-medium uppercase">Discount Code</div>
      <div tw="text-3xl">
        <AiOutlineMinus />
      </div>
    </div>
  );
  const discountSectionOpen = (
    <div
      tw="flex justify-between items-center cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div tw="flex text-2xl font-medium uppercase">Discount Code</div>
      <div tw="text-3xl">
        <AiOutlinePlus />
      </div>
    </div>
  );

  return (
    <div tw="font-poppins border-b border-gray-400 pb-8">
      {open ? discountSectionClose : discountSectionOpen}
      {open ? (
        <div tw="pt-5">
          <div tw="flex justify-between">
            <input
              placeholder="Discount Code"
              tw="w-64 p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
            <button
              type="submit"
              tw="p-2 border border-black shadow-sm text-white bg-black hover:(text-black bg-white) transition duration-300 ease-in-out rounded w-40 text-sm"
            >
              Apply
            </button>
          </div>
          <p tw="italic text-xs pt-2">One discount code per order</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
