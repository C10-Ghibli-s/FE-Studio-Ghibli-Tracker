import React from "react";
import { motion } from "framer-motion";
import "./Loader.scss";

const Loader = () => {
  return (
    <motion.p
      initial="hidden"
      animate={{
        x: [-20, 20],
      }}
      transition={{
        duration: 1,
        x: {
          yoyo: Infinity,
        },
      }}
      className="loader-spinner"
    >
      Fetching data...
    </motion.p>
  );
};

export { Loader };
