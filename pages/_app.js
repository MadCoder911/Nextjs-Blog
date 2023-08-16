import Layout from "../components/layout/Layout";
import "../styles/globals.css";
// toast
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width initial-scale=1" />
      </Head>
      <ToastContainer position="top-center" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
