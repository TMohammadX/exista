import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav.js";

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Nav />
      <Component {...pageProps} />
    </AnimatePresence>
  );
}
