import React from "react";
import ReactDOM from "react-dom";
import { Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

import "./styles.css";

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(3, "Must be at least 3 characters")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email").required()
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <label htmlFor="bio">Bio</label>
          <Field name="bio" as="textarea" />

          <label htmlFor="favouriteColor">Favourite color</label>
          <Field name="favouriteColor" as="select">
            <option value="red">Red</option>
            <option value="blue">Blue</option>
          </Field>

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
