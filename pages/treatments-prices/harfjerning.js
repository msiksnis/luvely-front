import Image from "next/image";
import HarfjerningKombo from "../../components/TreatmentsAndPrices/Harfjerning/HarfjerningKombo";
import HarfjerningSensitive from "../../components/TreatmentsAndPrices/Harfjerning/HarfjerningSensitive";
import HarfjerningAnsikt from "../../components/TreatmentsAndPrices/Harfjerning/HarfjerningAnsikt";
import Head from "next/head";

export default function HarfjerningPage() {
  return (
    <div>
      <Head>
        <title>Enga Beauty | Hårfjerning</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-32 flex flex-col items-center font-quicksand">
        <div className="mt-10 w-1/2">
          <h2 className="ml-6 mb-4 flex text-2xl font-semibold tracking-wide text-gray-600 md:mx-10 lg:ml-0 lg:justify-center">
            Hårfjerning
          </h2>
          <div className="mb-2">
            <Image
              className="object-cover"
              src="/images/pics/vaks1.jpg"
              width={1000}
              height={600}
            />
          </div>
          <div className="bg-[#FCFAFA] pt-1 pb-4 lg:px-2 lg:pt-4">
            <h3 className="ml-6 mb-6 flex text-xl font-medium md:mx-10 lg:ml-2">
              Kroppsvoksing
            </h3>
            <h3 className="ml-6 mb-6 mt-10 flex text-xl font-medium md:mx-10 lg:ml-2">
              Kombo voksing (hotpot + strip)
            </h3>
            <HarfjerningKombo />
            <h3 className="ml-6 mb-6 mt-12 flex text-xl font-medium md:mx-10 lg:ml-2">
              Brasiliansk gravid / sensitiv
            </h3>
            <HarfjerningSensitive />
            <h3 className="ml-6 mb-6 mt-12 flex text-xl font-medium md:mx-10 lg:ml-2">
              Ansiktvoksing
            </h3>
            <HarfjerningAnsikt />
          </div>
        </div>
      </div>
    </div>
  );
}
