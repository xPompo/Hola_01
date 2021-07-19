// // import React, { useState } from "react";
// import { motion, useViewportScroll } from "framer-motion";
// // import { DUMMY_DATA } from "./HomeComp/Slider";
// // import { useInView } from "react-intersection-observer";
// // import { useScrollPosition } from "@n8tb1t/use-scroll-position";

// function Testttttt() {
//   // const mainItemAnim = {
//   //   hide: { opacity: 0 },
//   //   show: {
//   //     opacity: 1,
//   //     transition: {
//   //       staggerChildren: 0.3,
//   //     },
//   //   },
//   //   out: { opacity: 0 },
//   // };

//   // const letter = {
//   //   hide: { opacity: 0, top: 30 },
//   //   show: {
//   //     opacity: 1,
//   //     top: 0,
//   //     transition: {
//   //       duration: 1,
//   //     },
//   //   },
//   //   out: { opacity: 0 },
//   // };

//   const { scrollY } = useViewportScroll();
//   console.log(scrollY);
//   // useScrollPosition(({ prevPos, currPos }) => {
//   //   console.log(currPos.y);
//   //   console.log(prevPos.y);
//   //   if (currPos.y > prevPos.y) {
//   //     console.log("passive");
//   //     setIsPassive(true);
//   //   } else if (currPos.y < prevPos.y) {
//   //     console.log("negative");
//   //     setIsPassive(false);
//   //   }
//   // });

//   // const [ispassive, setIsPassive] = useState(false);
//   /////////////////////////////////////////////////////////
//   //----Target Scroll Animation START----//
//   // const dispatch = useDispatch();
//   // const [positionY, setPositionY] = useState(0);
//   // const [previousY, setPreviousY] = useState(0);
//   // const [isScrollDown, setIsScrollDown] = useState(false);
//   // useScrollPosition(({ prevPos, currPos }) => {
//   //   setPositionY(currPos.y);
//   //   setPreviousY(prevPos.y);
//   //   if (positionY > previousY) {
//   //     setIsScrollDown(false);
//   //   } else if (positionY < previousY) {
//   //     setIsScrollDown(true);
//   //   }
//   //   dispatch(AnimationActions.isDown(isScrollDown));
//   // });
//   //----Target Scroll Animation END----//
//   ///////////////////////////////////////////////////////////
//   // //----Target Scroll Animation START----//
//   // const { y } = useWindowScroll();
//   // const dispatch = useDispatch();
//   // const [positionY, setPositionY] = useState(0);
//   // const [previousY, setPreviousY] = useState(0);
//   // const [isScrollDown, setIsScrollDown] = useState(false);
//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setPreviousY(y);
//   //   }, 1000);
//   //   setPositionY(y);
//   //   if (positionY > previousY) {
//   //     setIsScrollDown(true);
//   //   } else if (positionY < previousY) {
//   //     setIsScrollDown(false);
//   //   }
//   //   dispatch(AnimationActions.isDown(isScrollDown));
//   // }, [y]);
//   // // ----Target Scroll Animation END----//
//   ///////////////////////////////////////////////////////////
//   //   window.bind('mousewheel', function(event) {
//   //     if (event.originalEvent.wheelDelta >= 0) {
//   //         console.log('Scroll up');
//   //     }
//   //     else {
//   //         console.log('Scroll down');
//   //     }
//   // });
//   return (
//     <div>
//       {/* <motion.h1
//         style={{ padding: "10em 0", margin: "10rem" }}
//         variants={mainItemAnim}
//         initial={{ transition: { delay: 0.2, staggerChildren: 0.2 } }}
//         animate="show"
//         exit="out"
//       >
//         {DUMMY_DATA.title2.split("").map((item, index) => {
//           return (
//             <motion.span
//               style={{ position: "relative" }}
//               variants={letter}
//               key={item + "-" + index}
//             >
//               {item}
//             </motion.span>
//           );
//         })}
//       </motion.h1> */}
//     </div>
//   );
// }

// export default Testttttt;
