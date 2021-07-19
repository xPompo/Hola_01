import React from "react";
import { Link } from "react-router-dom";
import { NAV_DATA, DROPDOWN_DATA } from "../Componet/HeaderMain";
import { motion } from "framer-motion";

function Hm() {
  return (
    <nav className="nav-small">
      <div className="container-fluid">
        <motion.ul
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          className=" list-style"
        >
          {NAV_DATA.map((item, index) => {
            return (
              <li key={index} className="item">
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}

          {DROPDOWN_DATA.map((item, index) => {
            return (
              <li key={index} className="item">
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </nav>
  );
}

export default Hm;
