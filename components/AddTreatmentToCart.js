import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./User";

const ADD_TREATMENT_TO_CART_MUTATION = gql`
  mutation ADD_TREATMENT_TO_CART_MUTATION($id: ID!) {
    addTreatmentToCart(treatmentId: $id) {
      id
    }
  }
`;

export default function AddTreatmentToCart({ id }) {
  const [addTreatmentToCart, { loading }] = useMutation(
    ADD_TREATMENT_TO_CART_MUTATION,
    {
      variables: { id },
      refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  return (
    <button disabled={loading} type="button" onClick={addTreatmentToCart}>
      Add{loading && "ing"} To Cart 🛒
    </button>
  );
}
