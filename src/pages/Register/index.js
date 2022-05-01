import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";
import axios from "axios";
import "../Login/Login.scss";
import image from "../Login/images/tracker-totoro.png";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader";
import { UserContext } from "../../context/UserContext";
import { Modal } from "../../components/Modal";
import { BsFillCheckCircleFill } from "react-icons/bs";

function Register() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { login, userSession } = useContext(UserContext);

  let navigate = useNavigate();

  const handleLoadingMotion = () => {
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
            let regex = new RegExp(
              "^(?=.{4,22}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
            );
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
            } else if (!regex.test(values.username)) {
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

            if (!values.password, !values.email, !values.username) {
              setLoading(false)
            }
              return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            // Register

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
                console.log(response);
                setLoading(false);
                setSuccess(true);
                // Login after register
                axios
                  .post(
                    "https://studio-ghibli-c10-platzimaster.herokuapp.com/auth/login/nickname",
                    {
                      nickname: values.username,
                      password: values.password,
                    }
                  )
                  .then(response => {
                    // Saving credentials into variable.
                    let credentials = response.data;
                    // Setting React.Context with the credentials.
                    login({
                      access_token: credentials.access_token,
                      nickname: credentials.user.nickname,
                      role: credentials.user.role,
                    });
                    // Persisting user session in localStorage.
                    window.localStorage.setItem(
                      "userSession",
                      JSON.stringify({
                        access_token: credentials.access_token,
                        nickname: credentials.user.nickname,
                        role: credentials.user.role,
                      })
                    );
                    // Persisting only the token in localStorage.
                    window.localStorage.setItem(
                      "token_credentials",
                      JSON.stringify({
                        access_token: credentials.access_token,
                      })
                    );
                    // Setting true the Modal state to open it.
                    setOpenModal(true);
                  })
                  .catch(error => {
                    console.error("Something went wrong:", error);
                  });
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
              {error &&
                setTimeout(() => <p className="error">{error}</p>, 2500)}
              <button type="submit" onClick={handleLoadingMotion}>
                {loading && <Loader />}
                {!loading && <p>Register</p>}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <h2>Register successfully!</h2>
        <BsFillCheckCircleFill className="icon-check" />
        <button
          onClick={() => {
            setOpenModal(false);
            navigate("/home");
          }}
        >
          Go to Home
        </button>
      </Modal>
    </>
  );
}

export { Register };
