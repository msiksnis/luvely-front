import UpdateTreatment from "../components/UpdateTreatment";

export default function UpdateTreatmentPage({ query }) {
  return (
    <div className="mt-44">
      <UpdateTreatment id={query.id} />
    </div>
  );
}
