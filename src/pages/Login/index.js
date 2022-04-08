import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
//social Media
import { Facebook } from "../../components/FacebookLogin";

import "./Login.scss";
import image from "./images/tracker-totoro.png";
function Login() {
  return (
    <>
      <div className="contenedor">
        <figure className="image--container">
          <img src={image} alt="" />
          <span className="hero-tracker">TRACKER</span>
        </figure>
        <Formik
          initialValues={{ user: "", password: "" }}
          validate={(values) => {
            let errors = {};
            //User validation
            if (!values.user) {
              errors.user = "Enter your username";
            } else if (
              !/^(?=.{4,12}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(
                values.user
              )
            ) {
              errors.user = "Enter a valid username";
            }
            if (!values.password) {
              //Password validation
              errors.password = "Enter your password";
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
                <label htmlFor="user">User</label>
                <Field
                  id="user"
                  name="user"
                  type="text"
                  placeholder="username"
                />
                <span className="user-icon"></span>
                <ErrorMessage
                  name="user"
                  component={() => <div className="error">{errors.user}</div>}
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
                <span className="password-icon"></span>
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="error">{errors.password}</div>
                  )}
                />
              </div>
              <button type="submit">Login</button>
              <Facebook />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export { Login };
