import Layout from "./components/Layout";
import { AnimatePresence } from "framer-motion";

export default function () {
  return (
    <div className="grid w-screen h-screen place-items-center">
      <Layout title="About" />
      <h1>about</h1>
    </div>
  );
}
