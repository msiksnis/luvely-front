import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
import tw from "twin.macro";
import "styled-components/macro";

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: var(--red);
    cursor: pointer;
  }
`;

const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

export default function RemoveFromCart({ id }) {
  const [removeFromCart, { loading }] = useMutation(REMOVE_FROM_CART_MUTATION, {
    variables: { id },
    update,
  });
  return (
    <button
      onClick={removeFromCart}
      disabled={loading}
      type="button"
      title="Remove This Item from Cart"
      tw="text-[11px] uppercase border-b border-gray-800 hover:(text-sickRed border-sickRed)"
    >
      Remove
    </button>
  );
}
