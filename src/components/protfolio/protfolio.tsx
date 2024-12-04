"use client";
import { motion } from "framer-motion";
export default function protfolio() {
  return (
    <motion.section
      className="mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      protfolio
    </motion.section>
  );
}
