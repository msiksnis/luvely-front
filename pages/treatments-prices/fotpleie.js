import Head from "next/head";
import Image from "next/image";
import FotpleieDame from "../../components/TreatmentsAndPrices/Fotpleie/FotpleieDame";
import FotpleieHerre from "../../components/TreatmentsAndPrices/Fotpleie/FotpleieHerre";
import { Fade } from "react-reveal";

export default function FotpleiePage() {
  return (
    <div>
      <Head>
        <title>Enga Beauty | Fotpleie</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="my-32 flex flex-col items-center font-quicksand">
        <div className="mt-10 w-1/2">
          <h2 className="ml-6 mb-4 flex text-2xl font-semibold tracking-wide text-gray-600 md:mx-10 lg:ml-0 lg:justify-center">
            Fotpleie
          </h2>
          <div className="mb-2">
            <Image
              className="object-cover"
              src="/images/pics/foot1.jpg"
              width={1000}
              height={600}
            />
          </div>
          <Fade bottom duration={700} distance="40px" ease>
            <div className="bg-[#FCFAFA] pt-1 pb-4 lg:px-2 lg:pt-4">
              <h3 className="ml-6 mb-6 flex text-xl font-medium md:mx-10 lg:ml-2">
                Fotpleie Dame
              </h3>
              <FotpleieDame />
            </div>
          </Fade>
          <div className="bg-[#FCFAFA] pt-1 pb-4 lg:px-2 lg:pt-4">
            <Fade bottom duration={700} distance="100px">
              <h3 className="ml-6 mt-12 mb-6 flex text-xl font-medium md:mx-10 lg:ml-2">
                Fotpleie Herre
              </h3>
              <FotpleieHerre />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
