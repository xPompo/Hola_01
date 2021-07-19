import React, { useEffect } from "react";
import PricingCard from "./PricingCard";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { mainItemAnim } from "../AnimationVariants";
//---- Data Price START Here ----//
//----Include as many Price Plans as you wish ----//
const PRICE_DATA = [
  {
    index: 0,
    plan: "Basic Plan",
    price: 10,
    date: "/month",
    infoText:
      "Some quick example text to build on the card title and make up the bulk of the card's conten",
    button: "Book now",
  },
  {
    index: 1,
    plan: "Super Plan",
    price: 65,
    date: "/month",
    infoText:
      "Some quick example text to build on the card title and make up the bulk of the card's conten",
    button: "Book now",
  },
  {
    index: 2,
    plan: "Annually Plan",
    price: 199,
    date: "/year",
    infoText:
      "Some quick example text to build on the card title and make up the bulk of the card's conten",
    button: "Book now",
  },
];

//----  Pricing Component  ----//

function Pricing() {
  //----Target Scroll Animation START----//
  const controls = useAnimation();
  const { inView, ref } = useInView();
  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);
  //----Target Scroll Animation END----//
  return (
    <motion.div
      ref={ref}
      variants={mainItemAnim}
      animate={controls}
      initial="hidden"
      className="pricing-section"
    >
      <div className="container">
        <div className="row">
          {PRICE_DATA.map((item) => {
            return (
              <PricingCard
                key={item.index}
                plan={PRICE_DATA[item.index].plan}
                price={PRICE_DATA[item.index].price}
                date={PRICE_DATA[item.index].date}
                infoText={PRICE_DATA[item.index].infoText}
                button={PRICE_DATA[item.index].button}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Pricing;
