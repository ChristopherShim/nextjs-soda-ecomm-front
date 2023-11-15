import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CartContextProvider } from "@/components/CartContext";

export default function App({ Component, pageProps }) {
  return (
    <>
    <CartContextProvider>
      <Nav />
      <Component {...pageProps} />
      <Footer/>
      </CartContextProvider>
    </>
  );
}
