import React, { useState, useContext } from "react"
import { Formik, Field, ErrorMessage, Form } from "formik"
import axios from "axios"
import { Navigate } from "react-router-dom"

// Context
import { UserContext } from "../../context/UserContext";

//social Media
import { Facebook } from "../../components/FacebookLogin"

import "./Login.scss"
import image from "./images/tracker-totoro.png"
function Login() {
  // State
  const [loginError, setLoginError] = useState(false)
  // Context
  const { login, userSession } = useContext(UserContext);
  // LocalStorage persisting userSession
  window.localStorage.setItem("userSession", JSON.stringify(userSession));

  console.log(userSession);
  return (
    <>
      {userSession.access_token && <Navigate to="/home" replace={true} />}
      <div className="contenedor">
        <figure className="image--container">
          <img src={image} alt="" />
          <span className="hero-tracker">TRACKER</span>
        </figure>
        <Formik
          initialValues={{ user: "", password: "" }}
          validate={values => {
            let errors = {}
            //User validation
            if (!values.user) {
              errors.user = "Enter your username"
            } else if (
              !/^(?=.{4,12}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(
                values.user
              )
            ) {
              errors.user = "Enter a valid username"
            }
            if (!values.password) {
              //Password validation
              errors.password = "Enter your password"
            }
            return errors
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
                let user = response.data
                console.log(response.data)
                login({
                  username: user.user.nickname,
                  role: user.user.role,
                  access_token: user.access_token,
                })
              })
              .catch(error => {
                setLoginError(error.response.data.message)
                setTimeout(() => {
                  setLoginError(false)
                }, 2000)
              })
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
              {loginError && <div className="error">{loginError}</div>}
              <button type="submit">Login</button>
              {/* <Facebook /> */}
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export { Login }
