import Layout from "../components/layout/Layout";
import "../styles/globals.css";
// toast
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ToastContainer position="top-center" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
