import Link from "next/link";
import formatMoney from "../../lib/formatMoney";
import AddTreatmentToCart from "../AddTreatmentToCart";
import tw from "twin.macro";
import "styled-components/macro";
import DeleteTreatment from "../DeleteTreatment";

export default function Treatment({ treatment }) {
  return (
    <div tw=" flex justify-center font-quicksand">
      <div tw="border-b border-gray-300 p-2 lg:w-[800px] cursor-pointer bg-[#FDFAFB]">
        <Link href={`/treatment/${treatment.id}`}>
          <div tw="flex justify-between">
            <h3 tw="text-xl text-gray-700">{treatment.treatmentName}</h3>
            <span tw="text-xl font-semibold text-gray-700">
              {formatMoney(treatment.price)}
            </span>
          </div>
        </Link>
      </div>
      {/* <div tw="space-x-3 ml-5">
        <Link
          href={{
            pathname: "/updateTreatment",
            query: {
              id: treatment.id,
            },
          }}
        >
          Edit ✏️
        </Link>
        <DeleteTreatment id={treatment.id}>Delete</DeleteTreatment>
        <AddTreatmentToCart id={treatment.id} />
      </div> */}
    </div>
  );
}
