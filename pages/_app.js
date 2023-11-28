import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CartContextProvider } from "@/components/CartContext";
import localFont from "@next/font/local"

const monument = localFont({src:"../assets/monument.otf"})

export default function App({ Component, pageProps }) {
  return (
    <>
    <CartContextProvider>
      <Nav />
      <div className={monument.className}>
      <Component {...pageProps} />
      </div>
      
      <Footer/>
      </CartContextProvider>
    </>
  );
}
