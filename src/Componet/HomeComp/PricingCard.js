import React from "react";
import { motion } from "framer-motion";
import { variantItemY } from "../AnimationVariants";

function PricingCard(props) {
  return (
    <motion.div
      variants={variantItemY}
      className="pricing-card-section my-md-4 col-md-12 col-sm-12 col-lg-4 "
    >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.plan}</h5>
          <h6 className="card-subtitle mb-2 ">
            <span>$</span>
            <span>{props.price}</span>
            {props.date}
          </h6>
          <p className="card-text">{props.infoText}</p>
          <button className="btn-card">{props.button}</button>
        </div>
      </div>
    </motion.div>
  );
}

export default PricingCard;
