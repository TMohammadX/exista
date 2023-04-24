import Layout from "./components/Layout";
import { AnimatePresence } from "framer-motion";

export default function () {
  return (
    <div>
      <AnimatePresence>
        <Layout />
        <h1>about</h1>
      </AnimatePresence>
    </div>
  );
}
