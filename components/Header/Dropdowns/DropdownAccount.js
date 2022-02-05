import { FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import tw from "twin.macro";
import "styled-components/macro";
import { useUser } from "../../User";
import SignOut from "../../SignOut";
import { RiAccountPinCircleLine } from "react-icons/ri";

const Li = tw.li`
px-3
py-1
hover:bg-gray-100
opacity-70 hover:opacity-100
`;

export default function DropdownAccount() {
  const user = useUser();

  return (
    <div className="group inline-block font-poppins opacity-70 hover:opacity-100">
      <span tw="hidden md:(flex pr-1 -mb-1 pb-1 uppercase cursor-pointer)">
        Account
      </span>
      <div tw="md:hidden text-xl -mt-0.5 p-1">
        <RiAccountPinCircleLine />
      </div>
      <ul
        tw="bg-white mt-1 border rounded-b-md transform scale-0 group-hover:scale-100 absolute 
        transition duration-150 ease-in-out origin-top cursor-pointer"
      >
        <p className="border-b py-3 pl-3 tracking-wide">{user?.name}</p>
        <Li tw="pt-3">
          <Link href="/orders">My Previous Orders</Link>
        </Li>
        <Li>
          <SignOut />
        </Li>
      </ul>
    </div>
  );
}
