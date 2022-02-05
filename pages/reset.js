import RequestReset from "../components/RequestReset";
import Reset from "../components/Reset";

export default function ResetPage({ query }) {
  if (!query?.token) {
    return (
      <div className="mt-40">
        <p className="-mb-10 text-center font-poppins text-xl">
          Sorry you must supply a token
        </p>
        <RequestReset />
      </div>
    );
  }
  return (
    <div className="mt-40">
      <Reset token={query.token} />
    </div>
  );
}
