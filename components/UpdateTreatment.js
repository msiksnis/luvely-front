import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useState } from "react";
import useForm from "../lib/useForm";
import DisplayError from "./ErrorMessage";
import Form from "./styles/Form";

const SINGLE_TREATMENT_QUERY = gql`
  query SINGLE_TREATMENT_QUERY($id: ID!) {
    Treatment(where: { id: $id }) {
      id
      treatmentName
      shortDescription
      fullDescription
      price
      sex
      category
      subcategory
    }
  }
`;

const UPDATE_TREATMENT_MUTATION = gql`
  mutation UPDATE_TREATMENT_MUTATION(
    $id: ID!
    $treatmentName: String
    $shortDescription: String
    $fullDescription: String
    $price: Int
    $sex: String
    $category: String
    $subcategory: String
  ) {
    updateTreatment(
      id: $id
      data: {
        treatmentName: $treatmentName
        shortDescription: $shortDescription
        fullDescription: $fullDescription
        price: $price
        sex: $sex
        category: $category
        subcategory: $subcategory
      }
    ) {
      id
      treatmentName
      shortDescription
      fullDescription
      price
      sex
      category
      subcategory
    }
  }
`;

export default function UpdateTreatment({ id }) {
  // State for selecting sex
  const [availableFor, setAvailableFor] = useState("mario");

  // 1. We need to get the existing treatment
  const { data, error, loading } = useQuery(SINGLE_TREATMENT_QUERY, {
    variables: { id },
  });
  // 2. We need to get the mutation to update the treatment
  const [
    updateTreatment,
    { data: updateData, error: updateError, loading: updateLoading },
  ] = useMutation(UPDATE_TREATMENT_MUTATION);
  // 2.5 Create some state for the form inputs:
  const { inputs, handleChange, clearForm, resetForm } = useForm(
    data?.Treatment
  );
  console.log(inputs);
  if (loading) return <p>loading...</p>;
  // 3. We need the form to handle the updates

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await updateTreatment({
          variables: {
            id,
            treatmentName: inputs.treatmentName,
            price: inputs.price,
            sex: inputs.sex,
            shortDescription: inputs.shortDescription,
            fullDescription: inputs.fullDescription,
            category: inputs.category,
            subcategory: inputs.subcategory,
          },
        }).catch(console.error);
      }}
    >
      <DisplayError error={error || updateError} />
      <fieldset disabled={updateLoading} aria-busy={updateLoading}>
        <label htmlFor="treatmentName">
          Treatment name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Treatment Name"
            value={inputs.treatmentName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="sex">
          Available For
          <select
            id="sex"
            name="sex"
            value={inputs.sex}
            onChange={handleChange}
          >
            <option value="MALE ONLY">Male Only</option>
            <option value="FEMALE ONLY">Female Only</option>
            <option value="UNISEX">Unisex</option>
          </select>
        </label>
        <label htmlFor="shortDescription">
          Short Description
          <input
            id="shortDescription"
            name="shortDescription"
            placeholder="Short Description"
            value={inputs.shortDescription}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="fullDescription">
          Full Description
          <textarea
            id="fullDescription"
            name="fullDescription"
            placeholder="Full Description"
            value={inputs.fullDescription}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="category">
          Category
          <select
            id="category"
            name="category"
            value={inputs.category}
            onChange={handleChange}
          >
            <option value="HÅNDPLEIE">Håndpleie</option>
            <option value="FOTPLEIE">Fotpleie</option>
            <option value="HÅRFJERNING">Hårfjerning</option>
            <option value="TATOVERING">Tatovering</option>
            <option value="VIPPER OG BRYN">Vipper og Bryn</option>
          </select>
        </label>
        <label htmlFor="subcategory">
          Subcategory
          <select
            id="subcategory"
            name="subcategory"
            value={inputs.subcategory}
            onChange={handleChange}
          >
            <option value="HÅNDPLEIE DAME">Håndpleie Dame</option>
            <option value="HÅNDPLEIE HERRE">Håndpleie Herre</option>
            <option value="FOTPLEIE DAME">Fotpleie Dame</option>
            <option value="FOTPLEIE HERRE">Fotpleie Herre</option>
            <option value="HÅRFJERNING - KOMBO VOKSING">
              Hårfjerning - Kombo Voksing
            </option>
            <option value="HÅRFJERNING - GRAVID / SENSITIV">
              Hårfjerning - Gravid / Sensitiv
            </option>
            <option value="HÅRFJERNING - ANSIKTVOKSING">
              Hårfjerning - Ansiktvoksing
            </option>
            <option value="TATOVERING">Tatovering</option>
            <option value="VIPPE">Vippe</option>
            <option value="BRYNSLØFT">Brynsløft</option>
          </select>
        </label>

        <button type="submit">Update Treatment</button>
      </fieldset>
    </Form>
  );
}
