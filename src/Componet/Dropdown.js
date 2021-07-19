import React from "react";
import { DROPDOWN_DATA } from "../Componet/HeaderMain";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Dropdown() {
  return (
    <motion.div
      key="drop-anim"
      initial={{ opacity: 0, y: -40 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="menu"
    >
      <ul className="dropdown-menu">
        {DROPDOWN_DATA.map((item, index) => (
          <li key={index} className="dropdownitem">
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Dropdown;
