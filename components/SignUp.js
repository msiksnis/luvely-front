import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import "styled-components/macro";
import useForm from "../lib/useForm";
import Error from "./ErrorMessage";
import Link from "next/link";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`;

export default function SignUp() {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    name: "",
    password: "",
  });
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
    // refectch the currently logged in user
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
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
      <div tw="pt-0 flex justify-center items-center">
        <div tw="p-8 flex-1">
          <div tw="w-[22rem] bg-white rounded-2xl mx-auto overflow-hidden shadow-xl">
            <div tw="relative h-48 bg-gold">
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
            <div tw="px-10 pt-10 pb-8 bg-white">
              <h1 tw="text-2xl font-semibold text-gray-900 text-center">
                Sign Up For an Account
              </h1>
              <form method="POST" onSubmit={handleSubmit}>
                <Error error={error} />
                <fieldset>
                  {data?.createUser && (
                    <div tw="flex flex-col items-center justify-center mb-6">
                      <p tw="text-center mt-5">
                        Signed up with {data.createUser.email}
                      </p>
                      <div tw="flex ml-2">
                        <p tw="text-center">Please go ahead and</p>
                        <Link href="/signin">
                          <a tw="ml-2 block text-black hover:underline focus:outline-none cursor-pointer">
                            Sign In!
                          </a>
                        </Link>
                      </div>
                    </div>
                  )}
                  <div tw="mt-10 relative">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="peer text-md focus:outline-none h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-yellow-600"
                      placeholder="Your Name"
                      autoComplete="name"
                      value={inputs.name}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="name"
                      tw="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Your Name
                    </label>
                  </div>
                  <div tw="mt-10 relative">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="peer text-md focus:outline-none h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-yellow-600"
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
                  <div tw="mt-10 relative">
                    <input
                      id="password"
                      type="password"
                      name="password"
                      className="peer text-md focus:outline-none h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-yellow-600"
                      placeholder="Password"
                      autoComplete="password"
                      value={inputs.password}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="password"
                      tw="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <button
                    type="submit"
                    tw="mt-20 px-4 py-2 rounded bg-gold hover:bg-yellow-500 text-white font-medium text-lg text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-400 focus:ring-opacity-80 uppercase tracking-wider cursor-pointer"
                  >
                    Sign Up!
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
