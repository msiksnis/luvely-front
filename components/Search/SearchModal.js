import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import tw from "twin.macro";
import "styled-components/macro";
import SearchProducts from "./SearchProducts";
import { useSearchModal, useSearchTreatmentModal } from "../../lib/appState";

export default function SearchModal() {
  const { searchModalOpen, closeSearchModal } = useSearchModal();

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={searchModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-30 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={closeSearchModal}
      >
        <div className="flex w-full text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay tw="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            {/* &#8203; */}
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div tw="flex justify-center pt-40 w-full overflow-scroll bg-white transform transition-all">
              <div tw="flex items-start">
                <div tw="">
                  <Dialog as="h3" tw="">
                    <SearchProducts />
                  </Dialog>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
