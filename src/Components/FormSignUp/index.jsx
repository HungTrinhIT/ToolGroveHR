import React, { useState } from "react";
import "../../Layouts/FormLayout";

import FormLayout from "../../Layouts/FormLayout";

const Signup = ({ validate, handleDone }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({ name: false, email: false });
  // OnChange Handler
  const handleChange = (e) => {
    let { name, value } = e.target;

    //Save field values
    setValues({
      ...values,
      [name]: value,
    });

    // Was the field modified
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  // Handle onBlur
  const handleBlur = (evt) => {
    const { name, value } = evt.target;

    // remove whatever error was there previously
    const { [name]: removedError, ...rest } = errors;

    // check for a new error
    const error = validate[`${name}`](value);

    // // validate the field if the value has been touched
    setErrors({
      ...rest,
      ...(error && { [name]: touched[name] && error }),
    });
  };

  //OnSubmit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    //validate the form
    const formValidation = Object.keys(values).reduce(
      (acc, key) => {
        const newError = validate[key](values[key]);
        const newTouched = { [key]: true };
        return {
          errors: {
            ...acc.errors,
            ...(newError && { [key]: newError }),
          },
          touched: {
            ...acc.touched,
            ...newTouched,
          },
        };
      },
      {
        errors: { ...errors },
        touched: { ...touched },
      }
    );
    setErrors(formValidation.errors);
    setTouched(formValidation.touched);

    if (
      !Object.values(formValidation.errors).length && // errors object is empty
      Object.values(formValidation.touched).length ===
        Object.values(values).length && // all fields were touched
      Object.values(formValidation.touched).every((t) => t === true) // every touched field is true
    ) {
      handleDone(true);
    }
  };
  return (
    <>
      <FormLayout
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        values={values}
        errors={errors}
        touched={touched}
      />
    </>
  );
};

export default Signup;
