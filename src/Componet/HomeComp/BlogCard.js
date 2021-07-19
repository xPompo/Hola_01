import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { variantItemY } from "../AnimationVariants";

function BlogCard({ title, subtitle, description, img, button, btnPath }) {
  return (
    <motion.div
      variants={variantItemY}
      className="col-sm-12 col-md-12 col-lg-4 "
    >
      <div className="blog-card-section ">
        <div className="card">
          <img src={img} className="card-img-top" alt="blog" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span> {subtitle}</span>
            <p className="card-text">{description}</p>
            <button className="readMore-btn">
              <Link to={btnPath}>{button}</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default BlogCard;
