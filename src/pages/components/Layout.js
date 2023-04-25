import { AnimatePresence, motion } from "framer-motion";

const Layout = ({ children, title }) => (
  <motion.div
    initial={{ y: "0" }}
    animate={{ y: "-100%" }}
    transition={{
      duration: 1.5,
    }}
    className="absolute z-50 grid items-end justify-center w-screen text-white bg-black h-2screen"
  >
    <h1 className="text-4xl mb-80">{title}</h1>
  </motion.div>
);
export default Layout;
