import { useLazyQuery } from "@apollo/client";
import { resetIdCounter, useCombobox } from "downshift";
import gql from "graphql-tag";
import debounce from "lodash.debounce";
import { useRouter } from "next/dist/client/router";
import tw, { styled } from "twin.macro";
import "styled-components/macro";
import { useSearchModal } from "../../lib/appState";
import { IoMdClose } from "react-icons/io";

const SEARCH_PRODUCTS_QUERY = gql`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    searchTerms: allProducts(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const Input = tw.input`
border-t-2
border-b-2
text-xl
p-4
w-[50rem]
outline-none
caret-gray-700
`;

export default function SearchProducts() {
  const { toggleSearchModal } = useSearchModal();

  const router = useRouter();
  const [findItems, { loading, data, error }] = useLazyQuery(
    SEARCH_PRODUCTS_QUERY,
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
        pathname: `/product/${selectedItem.id}`,
      });
    },
    itemToString: (item) => item?.name || "",
  });
  return (
    <div className="font-poppins">
      <div {...getComboboxProps()} className="flex items-center">
        <Input
          {...getInputProps({
            type: "search",
            placeholder: "Search",
            id: "search",
            className: loading ? "loading" : null,
          })}
        />
        <div
          className="-m-10 inline-flex cursor-pointer justify-center bg-white text-3xl text-gray-600"
          onClick={toggleSearchModal}
        >
          <IoMdClose />
        </div>
      </div>
      <div {...getMenuProps()} className="w-[50rem]">
        {isOpen &&
          items.map((item, index) => (
            <div
              className="flex h-24 items-center border-b transition-all duration-200 hover:ml-2 hover:bg-gray-50"
              {...getItemProps({ item, index })}
              key={item.id}
              highlighted={index === highlightedIndex}
            >
              <img
                src={item.photo.image.publicUrlTransformed}
                alt={item.name}
                width="50"
              />
              <div className="flex pl-4">{item.name}</div>
            </div>
          ))}
        {isOpen && !items.length && !loading && (
          <p tw="flex justify-center mt-8 text-lg">
            Sorry, no items found for "<p tw="text-gray-500">{inputValue}</p>"
          </p>
        )}
      </div>
    </div>
  );
}
