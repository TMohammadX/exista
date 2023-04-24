import { AnimatePresence, motion } from "framer-motion";

const Layout = ({ children }) => (
  <motion.div
    initial={{ y: "100%" }}
    animate={{ y: "-100%" }}
    transition={{
      duration: 1,
    }}
    className="absolute w-screen h-screen bg-black "
  ></motion.div>
);
export default Layout;
