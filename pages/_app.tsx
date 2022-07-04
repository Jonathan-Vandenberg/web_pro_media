import "../styles/App.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useClient } from "../lib/client";
import { Provider } from "react-redux";
import store from "../store/store";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useClient();
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Navbar />
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
