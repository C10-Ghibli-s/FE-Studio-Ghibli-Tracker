import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";
import axios from "axios";
import "../Login/Login.scss";
import image from "../Login/images/tracker-totoro.png";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader";

function Register() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  let navigate = useNavigate();
  console.log(success);

  const handleLoginButton = () => {
    if (!error) {
      setLoading(true);
    } else if (!success) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };
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
          validate={values => {
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
              !/^(?=.{4,22}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(
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
            // Disable button validation
            if (
              !errors.username &&
              !errors.password &&
              !errors.email &&
              !errors.confirmPassword
            ) {
              setIsDisabled(false);
            } else {
              setIsDisabled(true);
            }

            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            axios
              .post(
                "https://studio-ghibli-c10-platzimaster.herokuapp.com/users/signup",
                {
                  nickname: values.username,
                  password: values.password,
                  email: values.email,
                  movieWatched: 0,
                  role: "user",
                }
              )
              .then(response => {
                setLoading(false);
                setSuccess(true);
              })
              .catch(error => {
                setLoading(false);
                setError(error.response.data.message);
              });
            resetForm();
            // navigate("/login");
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
                  placeholder="mail@example.com"
                />
                <span className="email-icon"></span>
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
                <span className="user-icon"></span>
                <ErrorMessage
                  name="username"
                  component={() => <p className="error">{errors.username}</p>}
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
                  component={() => <p className="error">{errors.password}</p>}
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
                <span className="password-icon"></span>
                <ErrorMessage
                  name="confirmPassword"
                  component={() => (
                    <p className="error">{errors.confirmPassword}</p>
                  )}
                />
              </div>
              {success && (
                <p className="success">
                  You have been registered successfully!
                  <br />
                  <Link to="/login"> Go to login!</Link>
                </p>
              )}
              {error &&
                setTimeout(() => <p className="error">{error}</p>, 2500)}
              <button
                type="submit"
                onClick={handleLoginButton}
                disabled={isDisabled}
              >
                {loading && <Loader />}
                {!loading && <p>Register</p>}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export { Register };
