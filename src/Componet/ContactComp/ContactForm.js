import React from "react";
import { Formik, Form } from "formik";
import ContactFeild from "./ContactFeild";
import ContactFeildTextArea from "./ContactFeildTextArea";
import * as yup from "yup";
import { motion } from "framer-motion";

function ContactForm() {
  const validate = yup.object({
    firstName: yup.string().max(15, "must be 15 or less").required("required!"),
    email: yup.string().email("enter a vaild email").required("required!"),
    subject: yup.string().max(20, "must be 20 or less").required("required!"),
    phone: yup
      .number()
      .positive("must be positive number")
      .max(999999999999999, "must be 15 or Less")
      .required("required!"),
    message: yup.string().max(20, "must be 200 or less").required("required!"),
  });

  const variant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 1 },
    },
  };
  const variantX = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 1.3 },
    },
  };
  const variantX_rev = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 1.3 },
    },
  };

  const variantMessage = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 1.3 },
    },
  };
  const variantBtn = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 1.5 },
    },
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <div className="contact-form-main">
        <div className="bg-form"></div>
        <div className="container">
          <div className="title-head">
            <motion.h1 variants={variant} initial="hidden" animate="visible">
              Contact US
            </motion.h1>
          </div>
          <Form>
            <div className="row ">
              <motion.div
                variants={variantX_rev}
                initial="hidden"
                animate="visible"
                className="col-md-12 col-lg-6"
              >
                <ContactFeild name="firstName" label="FirstName" type="text" />
                <ContactFeild name="email" label="email" type="text" />
              </motion.div>
              <motion.div
                variants={variantX}
                initial="hidden"
                animate="visible"
                className="col-md-12 col-lg-6"
              >
                <ContactFeild name="subject" label="subject" type="text" />
                <ContactFeild name="phone" label="phone" type="number" />
              </motion.div>
            </div>
            <div className="row">
              <motion.div
                variants={variantMessage}
                initial="hidden"
                animate="visible"
                className="col"
              >
                <ContactFeildTextArea name="message" label="message" />
              </motion.div>
            </div>

            <div className="row">
              <motion.button
                variants={variantBtn}
                initial="hidden"
                animate="visible"
                type="submit"
                className="btn-style"
              >
                Submit
              </motion.button>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
}

export default ContactForm;
