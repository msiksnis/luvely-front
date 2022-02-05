import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import "styled-components/macro";
import useForm from "../lib/useForm";
import { CURRENT_USER_QUERY } from "./User";
import Error from "./ErrorMessage";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

export default function SignIn() {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });
  const [signin, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    // refetch the currently logged in user
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting
    console.log(inputs);
    const res = await signin();
    console.log(res);
    resetForm();
    // Send the email and password to the graphqlAPI
    router.push({
      pathname: `/`,
    });
  }
  const error =
    data?.authenticateUserWithPassword.__typename ===
    "UserAuthenticationWithPasswordFailure"
      ? data?.authenticateUserWithPassword
      : undefined;
  return (
    <div className="font-poppins">
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
                Welcome back!
              </h1>
              <form tw="mt-12" method="POST" onSubmit={handleSubmit}>
                <Error error={error} />
                <div tw="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer text-md focus:outline-none h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-yellow-600"
                    placeholder="Your Email"
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
                    className="peer focus:outline-none h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-yellow-600"
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
                  <Link href="/requestreset">
                    <a tw="mt-3 block text-sm text-right font-medium text-yellow-600 hover:underline focus:outline-none cursor-pointer opacity-90 hover:opacity-100">
                      Forgot password?
                    </a>
                  </Link>
                </div>

                <button
                  type="sumbit"
                  tw="mt-20 px-4 py-2 rounded bg-gold hover:bg-yellow-500 text-white font-medium text-lg text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-400 focus:ring-opacity-80 uppercase tracking-wider cursor-pointer"
                >
                  Sign in
                </button>
                <Link href="/signup">
                  <a tw="mt-6 block text-sm text-center font-medium text-yellow-600 hover:underline focus:outline-none cursor-pointer opacity-90 hover:opacity-100">
                    Or create a new account here
                  </a>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
