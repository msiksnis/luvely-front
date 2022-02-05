import { useLazyQuery } from "@apollo/client";
import { resetIdCounter, useCombobox } from "downshift";
import gql from "graphql-tag";
import debounce from "lodash.debounce";
import { useRouter } from "next/dist/client/router";
import tw, { styled } from "twin.macro";
import "styled-components/macro";
import { useSearchModal } from "../../lib/appState";
import { IoMdClose } from "react-icons/io";

const SEARCH_TREATMENTS_QUERY = gql`
  query SEARCH_TREATMENTS_QUERY($searchTerm: String!) {
    searchTerms: allTreatments(
      where: {
        OR: [
          { treatmentName_contains_i: $searchTerm }
          { fullDescription_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      treatmentName
      price
      shortDescription
      sex
    }
  }
`;

const Label = tw.label`
text-xs
peer-placeholder-shown:text-sm
peer-placeholder-shown:top-2.5
absolute
-top-2
text-gray-400
text-center
transition-all
peer-focus:-top-2
peer-focus:text-gray-400
peer-focus:text-xs
`;

const Input = tw.input`
pb-1
pt-2
w-full
focus:outline-none
caret-gray-600
font-quicksand
text-center
placeholder-transparent
`;

export default function SearchTreatments() {
  const { toggleSearchTreatmentModal } = useSearchModal();

  const router = useRouter();
  const [findItems, { loading, data, error }] = useLazyQuery(
    SEARCH_TREATMENTS_QUERY,
    {
      fetchPolicy: "no-cache",
    }
  );
  const items = data?.searchTerms || [];
  const findItemsButChill = debounce(findItems, 350);
  resetIdCounter();
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox({
    items,
    onInputValueChange() {
      findItemsButChill({
        variables: {
          searchTerm: inputValue,
        },
      });
    },
    onSelectedItemChange({ selectedItem }) {
      router.push({
        pathname: `/treatment/${selectedItem.id}`,
      });
    },
    itemToString: (item) => item?.treatmentName || "",
  });
  return (
    <div className="font-poppins">
      <div
        {...getComboboxProps()}
        className="relative mt-6 flex flex-col items-center"
      >
        <Input
          {...getInputProps({
            id: "search",
            type: "search",
            name: "search",
            placeholder: "Search for Traetment",
            className: loading ? "loading peer" : "peer",
          })}
        />
        <Label htmlFor="search">Search for Traetment</Label>
        <span tw="border-t border-gray-800 w-full" />
        <div
          className="-m-10 hidden cursor-pointer justify-center bg-white text-3xl text-gray-600 md:inline-flex"
          onClick={toggleSearchTreatmentModal}
        >
          <IoMdClose />
        </div>
      </div>
      <div {...getMenuProps()} tw="w-screen md:w-[50rem] -mx-4 pl-6 bg-white">
        {isOpen &&
          items.map((item, index) => (
            <div
              className="flex h-24 items-center border-b transition-all duration-200 hover:ml-2 hover:bg-gray-50"
              {...getItemProps({ item, index })}
              key={item.id}
              highlighted={index === highlightedIndex}
            >
              {item.treatmentName}
            </div>
          ))}
        {isOpen && !items.length && !loading && (
          <div tw="text-center py-4">
            <p tw="flex justify-center text-lg">
              Sorry, no treatments found for:
            </p>
            <p tw="text-gray-500">"{inputValue}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
