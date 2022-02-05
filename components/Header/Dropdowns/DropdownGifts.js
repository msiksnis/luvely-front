import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";

export default function DropdownGifts() {
  return (
    <div className="group inline-block opacity-70 hover:opacity-100">
      <button className="flex items-center">
        <span className="flex-1 pr-1 pb-0.5 font-poppins uppercase">Gifts</span>
        <span className="mb-0.5 transform transition duration-150 ease-in-out group-hover:-rotate-180">
          <FiChevronDown />
        </span>
      </button>
      <ul
        className="min-w-32 absolute origin-top scale-0 transform cursor-pointer rounded-b-md 
  border bg-white font-poppins tracking-wide transition duration-150 ease-in-out group-hover:scale-100"
      >
        <li className="px-3 py-1 opacity-70 hover:bg-gray-100 hover:opacity-100">
          <Link href="/giftcard">Gavekort</Link>
        </li>
        <li className="px-3 py-1 opacity-70 hover:bg-gray-100 hover:opacity-100">
          <Link href="/klippekort">Klippekort</Link>
        </li>
      </ul>
    </div>
  );
}
