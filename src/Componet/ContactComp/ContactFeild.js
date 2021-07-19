import React from "react";
import { ErrorMessage, useField } from "formik";

function ContactFeild({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="contact-form-part">
      <input
        className={` form-control input-style ${
          meta.touched && meta.error && "is-invalid"
        }`}
        placeholder={field.name}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        component="div"
        className="error-message"
      />
    </div>
  );
}

export default ContactFeild;
