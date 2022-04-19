import axios from "axios"
import React from "react"
import { FaFacebook } from "react-icons/fa"
import "./Facebook.scss"



function Facebook() {
  const handleFacebookLogin = () => {
    axios
      .post(
        "https://studio-ghibli-c10-platzimaster.herokuapp.com/auth/login/facebook"
      )
      .then(response => {
        console.log('response', response.data)
        // login({
        //   username: user.user.nickname,
        //   role: user.user.role,
        //   access_token: user.access_token,
        // })
      })
      .catch(error => {
        console.log(error.data)
        // setLoginError(error.response.data.message)
        // setTimeout(() => {
        //   setLoginError(false)
        // }, 2000)
      })
  }
  return (
    <div>
      <button className="facebook-button" onClick={handleFacebookLogin}>
        <FaFacebook className="facebook-icon" />
        <p>Connect with Facebook</p>
      </button>
    </div>
  )
}
export { Facebook }
