import tw from "twin.macro";
import "styled-components/macro";
import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "../Icons/InstagramIcon";
import FacebookIcon from "../Icons/FacebookIcon";

export default function TopOfHeader() {
  return (
    <div tw="flex justify-between items-center w-full px-8 md:px-10 pt-1.5">
      <div tw="flex space-x-2 text-xl w-44">
        <InstagramIcon />
        <FacebookIcon />
      </div>
      <div tw="transform scale-90 md:scale-100 cursor-pointer">
        <Link href="/">
          <a>
            <Image
              tw="object-contain"
              src="/Logo/Logo.png"
              width={280}
              height={80}
            />
          </a>
        </Link>
      </div>
      <div tw="flex justify-end w-44">
        <button
          tw="md:py-2 md:px-10 md:text-base px-8 py-1.5 text-sm uppercase font-poppins border border-black rounded text-black
          bg-white hover:(text-white bg-black) transition duration-300 ease-in-out"
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
