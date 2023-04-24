import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav.js";
import BackgroundMusic from "./components/BackgroundMusic.js";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
      <BackgroundMusic />
    </div>
  );
}
