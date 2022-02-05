import tw from "twin.macro";
import "styled-components/macro";
import Image from "next/image";

export default function MobilePromoted({ treatment }) {
  return (
    <div>
      <div tw="flex justify-center">
        <Image
          tw="object-cover"
          src={treatment.treatmentPhoto.image.publicUrlTransformed}
          alt={treatment.treatmentPhoto.altText}
          width={1100}
          height={544}
        />
      </div>
      <div tw="flex flex-col items-center mx-4 mt-12">
        <h1 tw="text-2xl sm:text-3xl sm:font-medium text-gray-700 font-poppins tracking-wide uppercase">
          {treatment.treatmentName}
        </h1>
        <h3
          tw="text-center font-poppins font-light sm:text-lg mt-4 text-gray-600
          tracking-wider leading-6 max-w-[620px]"
        >
          {treatment.fullDescription}
        </h3>
      </div>
      <div tw="flex justify-center mt-14">
        <button
          tw="border border-black/90 w-full mx-20 max-w-[350px] bg-black/90 text-white text-lg uppercase
          rounded shadow-lg py-2 hover:bg-white hover:text-gray-700 transition duration-300 ease-in-out"
        >
          <a
            href="https://no.fresha.com/providers/enga-beauty-y0pknew1?pId=494654"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book The Time
          </a>
        </button>
      </div>
    </div>
  );
}
