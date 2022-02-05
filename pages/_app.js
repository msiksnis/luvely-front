import { ApolloProvider } from "@apollo/client";
import NProgress from "nprogress";
import Router from "next/router";
import Page from "../components/Page";
import "../components/styles/nprogress.css";
import withData from "../lib/withData";
import { ApplicationStateProvider } from "../lib/appState";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <ApplicationStateProvider>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, , initial-scale=1.0, maximum-scale=1.0"
          />
        </Head>
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApplicationStateProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
