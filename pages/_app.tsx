import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingFooter from "../components/FloatingFooter";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <FloatingFooter />
      <Footer />
    </div>
  );
}

export default MyApp;
