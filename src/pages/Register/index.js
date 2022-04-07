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
          initialValues={{ user: "", password: "" }}
          validate={(values) => {
            let errors = {};
            //User validation
            if (!values.user) {
              errors.user = "Please enter your username";
            }
            if (!values.password) {
              //Password validation
              errors.password = "Please enter your password";
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
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="error">{errors.password}</div>
                  )}
                />
              </div>
              <button type="submit">Login</button>
              {/* <Facebook /> */}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export { Register };
