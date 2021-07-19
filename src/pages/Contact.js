import React from "react";
import ContactForm from "../Componet/ContactComp/ContactForm";
import HeaderMain from "../Componet/HeaderMain";
import { useLocation } from "react-router-dom";
import FooterMain from "../Componet/FooterMain";

function Contact() {
  const { pathname } = useLocation();
  return (
    <>
      <HeaderMain pathname={pathname} />
      <ContactForm />
      <FooterMain pathname={pathname} />
    </>
  );
}

export default Contact;
