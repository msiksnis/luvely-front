import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

export default function DropdownPrice() {
  return (
    <div className="group inline-block opacity-70 hover:opacity-100">
      <button className="flex items-center">
        <span className="poppins flex-1 pr-1 pb-0.5 uppercase">Price List</span>
        <span className="mb-0.5 transform transition duration-150 ease-in-out group-hover:-rotate-180">
          <FiChevronDown />
        </span>
      </button>
      <ul
        className="min-w-32 poppins absolute origin-top scale-0 transform cursor-pointer 
      rounded-b-md border bg-white transition duration-150 ease-in-out group-hover:scale-100"
      >
        <p className="border-b py-1 pl-2">Priser på:</p>
        <li className="px-5 py-1 opacity-70 hover:bg-gray-100 hover:opacity-100">
          <Link href="/priser/fotpleie">Fotpleie</Link>
        </li>
        <li className="px-5 py-1 opacity-70 hover:bg-gray-100 hover:opacity-100">
          <Link href="/priser/handpleie">Håndpleie</Link>
        </li>
        <li className="px-5 py-1 opacity-70 hover:bg-gray-100 hover:opacity-100">
          <Link href="/priser/harfjerning">Hårfjerning</Link>
        </li>
        {/* 
          <li className="px-5 py-1 hover:bg-gray-100 opacity-70 hover:opacity-100">
            Spa med parafin
          </li>
         */}
        <li className="px-5 py-1 opacity-70 hover:bg-gray-100 hover:opacity-100">
          <Link href="/priser/microblading">Microblading</Link>
        </li>
        <li className="px-5 py-1 opacity-70 hover:bg-gray-100 hover:opacity-100">
          <Link href="/priser/vipper-og-bryn">Vipper & Bryn</Link>
        </li>
      </ul>
    </div>
  );
}
