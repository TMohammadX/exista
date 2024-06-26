import { AnimatePresence, motion } from "framer-motion";

const Layout = ({ children, title }) => (
  <motion.div
    initial={{ y: "50%" }}
    animate={{ y: "-100vh" }}
    transition={{
      duration: 1,
    }}
    className="absolute top-0 left-0 z-50 grid items-end justify-center w-screen h-screen text-white bg-black"
  >
    <h1 className="text-4xl mb-80"></h1>
  </motion.div>
);
export default Layout;
