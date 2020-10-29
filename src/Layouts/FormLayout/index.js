import React from "react";
import ButtonGrove from "../../Components/Button";
import InputFiled from "../../Components/Input";

const FormLayout = ({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  values,
  touched,
}) => {
  return (
    <div className="signup-container">
      <h3 style={{ marginBottom: "16px;" }}>
        Calculate Your Customer Lifetime Value In 30 Seconds!
      </h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "24px" }}>
          <InputFiled
            label="Name"
            placeholder="Your name"
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
            name="name"
          />
          <InputFiled
            label="Email"
            placeholder="example@company.com"
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
            name="email"
            touched={touched}
          />
        </div>
        <ButtonGrove label="Calculate" type="submit" />
      </form>
    </div>
  );
};

export default FormLayout;
