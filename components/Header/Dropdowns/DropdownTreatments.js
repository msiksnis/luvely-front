import tw from "twin.macro";
import "styled-components/macro";
import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

export default function DropdownTreatments() {
  return (
    <div className="group inline-block opacity-70 hover:opacity-100">
      <button tw="flex items-center">
        <span tw="pr-1 pb-0.5 uppercase">
          <Link href="/treatments">Treatments & Prices</Link>
        </span>
        <span tw="mb-0.5 transform group-hover:-rotate-180 transition duration-150 ease-in-out">
          <FiChevronDown />
        </span>
      </button>
      <ul
        tw="bg-white border pb-2 rounded-b-md transform scale-0 group-hover:scale-100 absolute 
        transition duration-150 ease-in-out origin-top cursor-pointer font-poppins tracking-wide"
      >
        <Link href="/treatments-prices/fotpleie">
          <li tw="px-5 py-1 hover:bg-gray-100 opacity-70 hover:opacity-100">
            Fotpleie
          </li>
        </Link>
        <Link href="/treatments-prices/handpleie">
          <li tw="px-5 py-1 hover:bg-gray-100 opacity-70 hover:opacity-100">
            Håndpleie
          </li>
        </Link>
        <Link href="/treatments-prices/harfjerning">
          <li tw="px-5 py-1 hover:bg-gray-100 opacity-70 hover:opacity-100">
            Hårfjerning
          </li>
        </Link>
        <Link href="/treatments-prices/microblading">
          <li tw="px-5 py-1 hover:bg-gray-100 opacity-70 hover:opacity-100">
            Microblading
          </li>
        </Link>
        <Link href="/treatments-prices/vipper-og-bryn">
          <li tw="px-5 py-1 hover:bg-gray-100 opacity-70 hover:opacity-100">
            Vipper & Bryn
          </li>
        </Link>
      </ul>
    </div>
  );
}
