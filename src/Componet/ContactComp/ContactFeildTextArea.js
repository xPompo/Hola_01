import React from "react";
import { ErrorMessage, useField } from "formik";

function ContactFeildTextArea({ label, ...props }) {
  const [field] = useField(props);
  return (
    <div className="text-area">
      <textarea
        className="message"
        name={field.name}
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

export default ContactFeildTextArea;
