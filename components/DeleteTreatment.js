import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import "styled-components/macro";

const DELETE_TREATMENT_MUTATION = gql`
  mutation DELETE_TREATMENT_MUTATION($id: ID!) {
    deleteTreatment(id: $id) {
      id
      treatmentName
    }
  }
`;

function update(cache, payload) {
  console.log(payload);
  console.log("running the update function after delete");
  cache.evict(cache.identify(payload.data.deleteTreatment));
}

export default function DeleteTreatment({ id, children }) {
  const [deleteTreatment, { loading, error }] = useMutation(
    DELETE_TREATMENT_MUTATION,
    {
      variables: { id },
      update,
    }
  );
  return (
    <button
      tw="text-sickRed"
      type="button"
      disabled={loading}
      onClick={() => {
        if (confirm("Are you sure you want to delete this item?")) {
          // go ahead and delete it
          deleteTreatment().catch((err) => alert(err.message));
        }
      }}
    >
      {children}
    </button>
  );
}
