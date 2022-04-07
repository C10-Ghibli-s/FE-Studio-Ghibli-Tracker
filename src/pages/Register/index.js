import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
//social Media
import { Facebook } from "../../components/FacebookLogin";

import "../Login/Login.scss";
import image from "../Login/images/tracker-totoro.png";
function Register() {
  return (
    <>
      <div className="contenedor">
        <figure className="image--container">
          <img src={image} alt="" />
          <span className="hero-tracker">TRACKER</span>
        </figure>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validate={(values) => {
            let errors = {};
            if (!values.email) {
              //Email validation
              errors.email = "Please enter your email";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                values.email
              )
            ) {
              errors.email = "This is not a valid email";
            }
            //User validation
            if (!values.username) {
              errors.username = "Please enter your username";
            } else if (
              !/^(?=.{4,12}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(
                values.username
              )
            ) {
              errors.username =
                "Username must contains: numbers, letters, 6 - 22 characters. Spaces are not allowed";
            }
            // Password validation
            if (!values.password) {
              errors.password = "Please enter your password";
            } else if (
              !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
                values.password
              )
            ) {
              errors.password =
                "Password must have: 8 characters at least, a lowercase, an uppercase, a number, a symbol";
            }
            // Confirm password validation
            if (!values.confirmPassword) {
              errors.confirmPassword = "Confirm password required";
            } else if (values.password !== values.confirmPassword) {
              errors.confirmPassword = "Password not matched";
            }
            return errors;
          }}
          onSubmit={(values) => {
            try {
              console.log("data", values);
            } catch (err) {
              console.log("error", err);
            }
          }}
        >
          {({ errors }) => (
            <Form className="formulario">
              <div>
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  name="email"
                  type="text"
                  placeholder="yourmail@mail.com"
                />
                <ErrorMessage
                  name="email"
                  component={() => <div className="error">{errors.email}</div>}
                />
              </div>
              <div>
                <label htmlFor="username">Username</label>
                <Field
                  id="username"
                  name="username"
                  type="text"
                  placeholder="username"
                />
                <ErrorMessage
                  name="username"
                  component={() => (
                    <div className="error">{errors.username}</div>
                  )}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                />
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="error">{errors.password}</div>
                  )}
                />
              </div>
              <div>
                <label htmlFor="confirmPassword">Confirm password</label>
                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="confirm password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component={() => (
                    <div className="error">{errors.confirmPassword}</div>
                  )}
                />
              </div>
              <button type="submit">Register</button>
              {/* <Facebook /> */}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export { Register };
