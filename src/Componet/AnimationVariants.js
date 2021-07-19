//---- used In [HomePage==>Slider-Hero-Section ] ----//
//---------------Parent--------------//
export const mainItemAnim = {
  hide: { opacity: 0 },
  show: { opacity: 1 },
  out: { opacity: 0 },
};
//-------children-----------//
export const letter = {
  hide: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, delay: 0.3 },
  },
  out: { opacity: 0, x: -40, transition: { duration: 0.9 } },
};
// <== animation ( text Split ) ==> //
//---------------Parent--------------//
export const MainText = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delay: 0.5 },
  },
  out: { opacity: 0 },
};
//-------children-----------//
export const splitText = {
  hide: { opacity: 0, top: 40, left: -80 },
  show: { opacity: 1, top: 0, left: 0, transition: { duration: 0.5 } },
  out: { opacity: 0 },
};
//////////////////////////////////////////////////////////
//-------Split text in Header Service Page-----------//
export const MainText_1 = {
  hide: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delay: 0.9,
      delayChildren: 0.1,
      staggerChildren: 0.05,
    },
  },
};
//-------children-----------//
export const splitText_1 = {
  hide: { opacity: 0, top: 80, left: -80 },
  show: {
    opacity: 1,
    top: 0,
    left: 0,
    transition: { when: "afterChildren", duration: 0.4 },
  },
};
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//---- used In [HomePage==> Experience-Section ] ----//
export const variantParent = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};
//---- used In [HomePage==> Experience-Section ] ----//
export const variantParentStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};
//---- used In [HomePage==> Pricing-Section ] ----//
export const variantParentStaggerReverse = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.4, staggerDirection: -1 },
  },
};
//---- used In [HomePage==> Service-Section, OurBlog-Section] ----//
export const variantParentScroll__Y = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
};
//---- used In [HomePage==> Footer-Section, Partner-section , PricingCard-Section
//, Experience Section , Service-Section ,BlogCard-Section ] ----//
export const variantItemY = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  exit: { opacity: 0, x: 80 },
};
export const animY_rev = {
  hidden: { opacity: 0, y: -80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};
//---- used In [HomePage==> Portfolio-Section ] ----//
export const variantItemX = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};
export const variantItemXReverse = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

export const variantStaggerAbout__1 = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.1 } },
};
