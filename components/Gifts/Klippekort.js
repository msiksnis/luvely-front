import formatMoney from "../../lib/formatMoney";

function Table({ treatment, price }) {
  return (
    <table className="mt-2 w-full">
      <tbody>
        <tr className="mx-6 flex justify-between md:mx-10 lg:mx-0">
          <td className="font-quicksand font-medium">{treatment}</td>
          <td className="ml-2 flex items-end font-quicksand font-semibold">
            {formatMoney(price)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default function Klippekort() {
  return (
    <div className="mt-24 flex flex-col justify-center font-quicksand font-light lg:mx-20 lg:mt-60">
      <h1 className="mx-10 text-center text-xl font-medium lg:mx-40 lg:text-3xl">
        Vi har klippekort på alle våre behandlinger og varigheten på alle
        klippekortene er 1 år.
      </h1>
      <div className="mt-10 grid-cols-2 gap-10 lg:mt-20 lg:grid">
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="ml-6 mt-6 mb-6 flex justify-center border-b border-gray-200 text-xl font-medium md:mx-10 lg:mx-0 lg:ml-0 lg:justify-start">
            HÅNDPLEIE DAME
          </h4>
          <div className="text-lg">
            <Table treatment="Spa manikyr 8 klipp" price="3600" />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 800 NOK)
            </p>
            <Table
              treatment="Shellack / Gellack ensfarget med mini manikyr 8 klipp"
              price="3500"
            />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 500 NOK)
            </p>
            <Table
              treatment="Shellack / Gellack med mini manikyr og design 8 klipp"
              price="4600"
            />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 1000 NOK)
            </p>
            <Table treatment="Gelenegler påfyll 8 klipp" price="4500" />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 1500 NOK)
            </p>
            <Table treatment="A NOKylnegler påfyll 8 klipp" price="4000" />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 1200 NOK)
            </p>
            <Table treatment="PolyGele negler påfyll 8 klipp" price="4600" />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 1000 NOK)
            </p>
            <Table treatment="Parafinbehandling 8 klipp" price="1500" />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 500 NOK)
            </p>
            <p className="mx-6 mt-4 mb-14 border-b border-gray-200 text-sm font-normal text-gray-500 md:mx-10 lg:mx-0 lg:mb-0">
              *ved kjøp av dette tilbudet tilsvarer det kun 200 NOK pr
              parafinbad behandlinger
            </p>
          </div>
        </div>
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="ml-6 mt-6 mb-6 flex justify-center border-b border-gray-200 text-xl font-medium md:mx-10 lg:mx-0 lg:ml-0 lg:justify-start">
            HÅNDPLEIE HERRE
          </h4>
          <div className="text-lg">
            <Table treatment="Mini manikyr 8 klipp" price="2000" />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 400 NOK)
            </p>
            <Table treatment="Spa manikyr 8 klipp" price="3000" />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 600 NOK)
            </p>
            <Table treatment="Parafinbehandling 8 klipp" price="1500" />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 500 NOK)
            </p>
            <p className="mx-6 mt-4 mb-14 border-b border-gray-200 text-sm font-normal text-gray-500 md:mx-10 lg:mx-0 lg:mb-0">
              *ved kjøp av dette tilbudet tilsvarer det kun 200 NOK pr
              parafinbad behandlinger
            </p>
          </div>
        </div>
      </div>
      <div className="grid-cols-2 gap-10 lg:mt-10 lg:grid">
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="ml-6 mt-6 mb-6 flex justify-center border-b border-gray-200 text-xl font-medium md:mx-10 lg:mx-0 lg:ml-0 lg:justify-start">
            FOTPLEIE DAME
          </h4>
          <div className="text-lg">
            <Table treatment="Mini pedikyr 6 klipp" price="2400" />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 1200 NOK)
            </p>
            <Table treatment="SPA pedikyr 6 klipp" price="3200" />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 1600 NOK)
            </p>
            <Table treatment="Helt pedikyr 6 klipp" price="4000" />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 2000 NOK)
            </p>
            <Table
              treatment="Dyp fuktighetsgivende pedikyr 6 klipp"
              price="4800"
            />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 2400 NOK)
            </p>
            <Table treatment="Luksus signatur pedikyr 6 klipp" price="5600" />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 2800 NOK)
            </p>
            <Table treatment="Parafinbehandling 10 klipp" price="2500" />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0"></p>

            <p className="mx-6 mt-4 mb-14 border-b border-gray-200 text-sm font-normal text-gray-500 md:mx-10 lg:mx-0 lg:mb-0">
              *ved kjøp av dette tilbudet tilsvarer det kun 250 NOK pr
              parafinbad behandlinger
            </p>
          </div>
        </div>
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="ml-6 mt-6 mb-6 flex justify-center border-b border-gray-200 text-xl font-medium md:mx-10 lg:mx-0 lg:ml-0 lg:justify-start">
            FOTPLEIE HERRE
          </h4>
          <div className="text-lg">
            <Table treatment="Mini pedikyr 6 klipp" price="2800" />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 1400 NOK)
            </p>
            <Table treatment="SPA pedikyr 6 klipp" price="3600" />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 1800 NOK)
            </p>
            <Table treatment="Helt deluxe pedikyr 6 klipp" price="4400" />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 2200 NOK)
            </p>
            <Table
              treatment="Dyp fuktighetsgivende pedikyr 6 klipp"
              price="5200"
            />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 2600 NOK)
            </p>
            <Table treatment="Luksus signatur pedikyr 6 klipp" price="6000" />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0">
              (du sparer 3000 NOK)
            </p>
            <Table treatment="Parafinbehandling 10 klipp" price="2500" />
            <p className="text-md mx-6 border-b border-gray-200 pb-2 font-normal text-gray-500 md:mx-10 lg:mx-0"></p>

            <p className="mx-6 mt-4 mb-14 border-b border-gray-200 text-sm font-normal text-gray-500 md:mx-10 lg:mx-0 lg:mb-0">
              *ved kjøp av dette tilbudet tilsvarer det kun 250 NOK pr
              parafinbad behandlinger
            </p>
          </div>
        </div>
        <div className="bg-[#FCFAFA] pt-2 lg:px-6 lg:py-0 lg:pb-6">
          <h4 className="ml-6 mt-6 flex justify-center text-xl font-medium md:mx-10 lg:mx-0 lg:ml-0 lg:justify-start">
            Voksing
          </h4>
          <p className="text-md mx-6 mb-6 flex justify-center border-b border-gray-200 font-normal text-gray-500 md:mx-10 lg:mx-0 lg:justify-start">
            Gyldig for alle typer voksing:
          </p>
          <div className="poppins mx-6 mt-2 border-b border-gray-200 py-2 font-normal md:mx-10 lg:mx-0">
            8 klipp / behandlinger - neste behandlinger 40%
          </div>
          <div className="poppins mx-6 mt-2 border-b border-gray-200 py-2 font-normal md:mx-10 lg:mx-0">
            5 klipp / behandlinger- neste behandlinger 30%
          </div>
          <div className="poppins mx-6 mt-2 border-b border-gray-200 py-2 font-normal md:mx-10 lg:mx-0">
            3 klipp / behandlinger- neste behandlinger 20%
          </div>
          <p className="text-md mx-6 border-b border-gray-200 font-normal text-gray-500 md:mx-10 lg:mx-0"></p>
        </div>
      </div>
    </div>
  );
}
