import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function LoadAnim() {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key="page_trans_anim_2"
        initial={{ y: 0 }}
        animate={{
          y: "-100%",
          transition: {
            duration: 1,
            delay: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96],
          },
        }}
        exit={{ y: 0 }}
        className="page-trans-2"
      >
        <motion.div
          key="page_trans_anim_1"
          initial={{ y: 0 }}
          animate={{
            y: "-100%",
            transition: { delay: 0.8, duration: 1 },
            ease: [0.3, 0.2, 0.15, 0.8],
          }}
          exit={{ y: 0 }}
          className="page-trans-1"
        />
        <motion.div
          key="page_trans_anim_0"
          initial={{ y: 0 }}
          animate={{
            y: "-100%",
            transition: {
              delay: 0.7,
              duration: 1,
              ease: [0.6, 0.2, 0.3, 0.8],
            },
          }}
          exit={{ y: 0 }}
          className="page-trans"
        />
      </motion.div>
    </AnimatePresence>
  );
}

export default LoadAnim;
