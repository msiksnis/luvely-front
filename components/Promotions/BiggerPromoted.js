import tw from "twin.macro";
import "styled-components/macro";
import Image from "next/image";

export default function BiggerPromoted({ treatment }) {
  return (
    <div tw="flex justify-center items-center font-poppins">
      <div tw="relative w-[1100px] h-[546px]">
        <div tw="flex justify-center">
          <Image
            tw="object-cover"
            src={treatment.treatmentPhoto.image.publicUrlTransformed}
            alt={treatment.treatmentPhoto.altText}
            width={1100}
            height={544}
          />
        </div>
        <div tw="absolute bottom-0.5 left-0 z-30">
          <div tw="relative w-[600px] h-[544px] bg-gradient-to-r from-[#000000ca] pl-24">
            <div tw="absolute bottom-16">
              <div tw="flex flex-col">
                <h1 tw="text-5xl text-gray-50 tracking-wider uppercase">
                  {treatment.treatmentName}
                </h1>
                <h3
                  className="mt-10 mb-4 max-w-[450px] text-lg font-light
                  leading-[26px] tracking-wider text-gray-200"
                >
                  {treatment.fullDescription}
                </h3>
              </div>
              <div tw="mt-14">
                <button tw="w-96 border border-white bg-transparent text-gray-200 text-lg uppercase                   rounded shadow-lg py-2 hover:bg-black hover:text-gray-200 hover:border-black transition duration-300 ease-in-out">
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
          </div>
        </div>
      </div>
    </div>
  );
}
