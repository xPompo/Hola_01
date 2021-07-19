import React from "react";
import * as RiIcons from "react-icons/ri"; //==>React Icon Lib<==//
import { Link } from "react-router-dom";

function ServiceCard(props) {
  return (
    <div className="cardService ">
      <div className="container-fluid">
        <div className="row">
          <h1 className="col-12">
            <span>{props.titleSpan}</span>
            {props.titleH1}
          </h1>
          <p className="col-12">{props.para}</p>
        </div>
      </div>

      <div className="card-service-footer">
        <img className="icon-size" src={props.Icon} alt="icon" width={35} />
        <button className="card-btn">
          <Link to="/ProjectDetails">
            {props.button}
            <RiIcons.RiArrowRightSLine />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
