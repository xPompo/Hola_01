import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as TiIcons from "react-icons/ti"; //==> React Icon Lib <==//
import LOGO_W from "../Data/LOGO_W.svg";
function FooterMain({ pathname }) {
  //---- Data Footer START Here ----//
  const FOOTER_DATA = [
    {
      smallTitle: "Get In Touch",
      title: "look & feel",
      subtitle: "Beautyful",
      email: "hola@Holasite.com",
      button: "get in touch",
      adress1: "A32,Byra 13th street ,Door 211,",
      adress2: "san franciso,USA32490",
      logo: "byra",
      LOGO_W: LOGO_W,
      emailHead: "email: ",
      emailBody: "Byra_Support@website.com",
      phoneHead: "phone: ",
      phoneBody: "(+1) 2345 678 44 88",
      copyright: "Copyright © 2021 Pompo Studio author.",
    },
  ];

  const colorTitleRef = useRef();
  const colorSpanRef = useRef();
  const FirstSectionRef = useRef();
  const serviceRef = useRef();
  useEffect(() => {
    if (pathname === "/Services") {
      colorTitleRef.current.style.color = "black";
      colorSpanRef.current.style.color = "black";
      serviceRef.current.style.display = "none";
    }
    if (pathname === "/Contact") {
      FirstSectionRef.current.style.display = "none";
    }
    if (pathname === "/ProjectDetails") {
      FirstSectionRef.current.style.display = "none";
    }
  }, [pathname]);
  return (
    <div className="footer-main">
      <div ref={FirstSectionRef} className="part-1">
        <div className={pathname === "/Services" ? "bg-img" : "bg-color"}></div>
        <div className="container">
          <div className="row row1">
            <div className="col-sm-12 col-md-6">
              <p className="subtitle">{FOOTER_DATA[0].smallTitle}</p>
              <h1 ref={colorTitleRef} className="title">
                <span ref={colorSpanRef}>{FOOTER_DATA[0].title}</span>{" "}
                {FOOTER_DATA[0].subtitle}
              </h1>
              <Link to="/Contact">{FOOTER_DATA[0].email}</Link>
            </div>
            <div className=" btn col-sm-12 col-md-6  mt-4">
              <Link
                to="/Contact"
                className={
                  pathname === "/Services" ? "btn-intouch hover" : "btn-intouch"
                }
              >
                {FOOTER_DATA[0].button}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* row2 */}
      <div ref={serviceRef} className="part-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-4  st-adress">
              <p>{FOOTER_DATA[0].adress1}</p>
              <p>{FOOTER_DATA[0].adress2}</p>
            </div>
            <div className="col-sm-12 col-md-4 my-sm-4 social-links-section">
              <img src={FOOTER_DATA[0].LOGO_W} width={100} alt="brand" />
              <div className="social-links">
                <Link to={pathname}>
                  <TiIcons.TiSocialFacebookCircular />
                </Link>
                <Link to={pathname}>
                  <TiIcons.TiSocialInstagram />
                </Link>
                <Link to={pathname}>
                  <TiIcons.TiSocialDribbble />
                </Link>
                <Link to={pathname}>
                  <TiIcons.TiSocialTwitter />
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-4  email-contact">
              <h1>
                <span>{FOOTER_DATA[0].emailHead}</span>
                {FOOTER_DATA[0].emailBody}
              </h1>
              <h1>
                <span>{FOOTER_DATA[0].phoneHead}</span>
                {FOOTER_DATA[0].phoneBody}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* row3 in the footer  */}
      <div className="part-3">
        <div className="container">
          <p>{FOOTER_DATA[0].copyright}</p>
        </div>
      </div>
    </div>
  );
}

export default FooterMain;
