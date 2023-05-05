import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav.js";
import BackgroundMusic from "./components/BackgroundMusic.js";
import { useState } from "react";
import GlobalStateContext from "./contexts/globalState.js";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [isFirstMount, setIsFirstMount] = useState(true);
  return (
    <GlobalStateContext.Provider value={{ isFirstMount, setIsFirstMount }}>
      <Head>
        <title>Mohammad T</title>
      </Head>
      <Nav />
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
      <BackgroundMusic />
    </GlobalStateContext.Provider>
  );
}
