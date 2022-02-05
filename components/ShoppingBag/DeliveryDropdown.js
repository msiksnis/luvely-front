import tw from "twin.macro";
import "styled-components/macro";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheck, HiSelector } from "react-icons/hi";
import formatMoney from "../../lib/formatMoney";
import calcTotalPrice from "../../lib/calcTotalPrice";
import { useUser } from "../User";

const deliveryOptions = [
  {
    id: 1,
    name: "Pick up at the salon",
    price: 0,
  },
  {
    id: 2,
    name: "Via Post",
    price: 150,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Delivery() {
  const [selected, setSelected] = useState(deliveryOptions[0]);

  const me = useUser();
  if (!me) return null;

  const totalPrice = formatMoney(calcTotalPrice(me.cart) + selected.price);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label tw="block text-sm font-poppins font-medium text-gray-700"></Listbox.Label>
          <div tw="mt-1 relative">
            <div tw="flex text-2xl font-medium">YOUR ORDER SUMMARY</div>
            <div tw="flex justify-between pt-6">
              <p tw="">Sub Total</p>
              <p tw="font-medium">{formatMoney(calcTotalPrice(me.cart))}</p>
            </div>
            <div tw="flex justify-between items-center py-2">
              <p tw="">Delivery</p>
              <p tw="font-medium">{formatMoney(selected.price)}</p>
            </div>
            <Listbox.Button tw="flex justify-between w-80 relative bg-white border border-gray-300 rounded shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gray-500 sm:text-sm">
              <span tw="block truncate">{selected.name}</span>
              <span tw="block truncate font-medium">
                {formatMoney(selected.price)}
              </span>
              <span tw="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <HiSelector tw="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="focus:outline-none absolute z-10 mt-1 max-h-56 w-80 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm">
                {deliveryOptions.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-[#e0e2f1] text-black" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <div tw="flex justify-between items-center">
                          <div
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            <div tw="flex justify-between w-64">
                              <p tw="">{option.name}</p>
                              <p tw="font-medium">
                                {formatMoney(option.price)}
                              </p>
                            </div>
                          </div>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-black" : "font-bold text-black",
                              "absolute inset-y-0 right-0 flex items-center pr-2"
                            )}
                          >
                            <HiCheck tw="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
            <div tw="flex justify-between pt-8">
              <p tw="font-semibold">Total</p>
              <p tw="font-semibold text-sickRed">{totalPrice}</p>
            </div>
          </div>
        </>
      )}
    </Listbox>
  );
}
