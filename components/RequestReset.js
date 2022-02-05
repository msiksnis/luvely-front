import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import "styled-components/macro";
import useForm from "../lib/useForm";
import Error from "./ErrorMessage";

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

export default function RequestReset() {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
  });
  const [signup, { data, loading, error }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      variables: inputs,
      // refectch the currently logged in user
      // refetchQueries: [{ query: CURRENT_USER_QUERY }],
    }
  );
  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting
    console.log(inputs);
    const res = await signup().catch(console.error);
    console.log(res);
    console.log({ data, loading, error });
    resetForm();
    // Send the email and password to the graphqlAPI
  }
  return (
    <div className="font-poppins selection:bg-gold selection:text-white">
      <div tw="pt-10 flex justify-center items-center">
        <div tw="p-8 flex-1">
          <div tw="w-[22rem] bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
            <div tw="relative h-48 bg-gold rounded-bl-3xl">
              <svg
                tw="absolute bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#ffffff"
                  fillOpacity="1"
                  d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </div>
            <div tw="px-10 pt-10 pb-8 bg-white rounded-tr-3xl">
              <h2 tw="text-xl font-semibold text-gray-900 text-center">
                Request a Password Reset
              </h2>
              <form tw="mt-20" method="POST" onSubmit={handleSubmit}>
                <Error error={error} />
                {data?.sendUserPasswordResetLink === null && (
                  <p tw="mb-4">Check your email for a link!</p>
                )}
                <div tw="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer focus:outline-none h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-yellow-600"
                    placeholder="Your Email Address"
                    autoComplete="email"
                    value={inputs.email}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="email"
                    tw="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email address
                  </label>
                </div>
                <button
                  type="submit"
                  tw="mt-20 mb-10 px-4 py-2 rounded bg-gold hover:bg-yellow-500 text-white font-medium text-lg text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-400 focus:ring-opacity-80 uppercase tracking-wider cursor-pointer"
                >
                  Request Reset!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
