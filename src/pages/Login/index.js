import React, { useState, useContext } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import { Loader } from "../../components/Loader";

// Context
import { UserContext } from "../../context/UserContext";

//social Media
import { Facebook } from "../../components/FacebookLogin";
import { Twitter } from "../../components/TwitterLogin";

import "./Login.scss";
import image from "./images/tracker-totoro.png";
function Login() {
  // State
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  // Context
  const { login, userSession } = useContext(UserContext);

  const handleLoginButton = () => {
    if (!loginError) {
      setLoading(true);
    } else if (!login) {
      setLoading(true);
    }
  };

  return (
    <>
      {userSession && <Navigate to="/home" replace={true} />}
      <div className="contenedor">
        <figure className="image--container">
          <img src={image} alt="" />
          <span className="hero-tracker">TRACKER</span>
        </figure>
        <Formik
          initialValues={{ user: "", password: "" }}
          validate={values => {
            let errors = {};
            //User validation
            if (!values.user) {
              errors.user = "Enter your username";
            } else if (
              !/^(?=.{4,22}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(
                values.user
              )
            ) {
              errors.user = "Enter a valid username";
            }
            if (!values.password) {
              //Password validation
              errors.password = "Enter your password";
            }
            if (!errors.user && !errors.password) {
              setIsDisabled(false);
            } else {
              setIsDisabled(true);
            }
            return errors;
          }}
          onSubmit={values => {
            axios
              .post(
                "https://studio-ghibli-c10-platzimaster.herokuapp.com/auth/login/nickname",
                {
                  nickname: values.user,
                  password: values.password,
                }
              )
              .then(response => {
                let user = response.data;
                console.log(response.data);
                setLoading(false);
                login({
                  userId: user.user.id,
                  nickname: user.user.nickname,
                  profilePicture: user.user.profilePicture,
                  role: user.user.role,
                  access_token: user.access_token,
                  email: user.user.email,
                });
                // LocalStorage persisting userSession
                window.localStorage.setItem(
                  "userSession",
                  JSON.stringify({
                    userId: user.user.id,
                    nickname: user.user.nickname,
                    profilePicture: user.user.profilePicture,
                    role: user.user.role,
                    access_token: user.access_token,
                    email: user.user.email,
                  })
                );
                window.localStorage.setItem(
                  "token_credentials",
                  JSON.stringify(user.access_token)
                );
              })
              .catch(error => {
                setLoginError(error.response.data.message);
                setLoading(false);
                setTimeout(() => {
                  setLoginError(false);
                }, 2000);
              });
            window.localStorage.setItem("usrCurrPass", values.password);
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
              <p className="registered-message">
                Are not registered yet? <Link to="/register">Register</Link>
              </p>
              {loginError && <p className="error">{loginError}</p>}
              <button
                type="submit"
                onClick={handleLoginButton}
                disabled={isDisabled}
              >
                {loading && <Loader />}
                {!loading && <p>Login</p>}
              </button>
            </Form>
          )}
        </Formik>
        <Facebook />
        <Twitter />
      </div>
    </>
  );
}

export { Login };
