import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ProfileConf } from '../../index.js';
import { motion } from "framer-motion";
import closeModalButton from '../../images/cancel.png';
import axios from "axios";

function ChanginPass({changingPass, setChangingPass}) {
    const linkAnimateFrom = {opacity: 0, y: -40};
    const linkAnimateTo = {opacity: 1, y: 0};
    const [chStatus, setChStatus] = useState("");

    let currPass = window.localStorage.getItem("usrCurrPass");
    let user = JSON.parse(window.localStorage.getItem("userSession"));
    let userId = user.userId;
    let token = user.access_token;
    let userMail = user.email;
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    return (
        <>
            { changingPass && (
                <ProfileConf>
                    <motion.div 
                    initial={linkAnimateFrom}
                    animate={linkAnimateTo}
                    transition={{delay: 0.10}}
                    className="changingModal--password">
                    <img
                        className="closeModalButton" 
                        src={closeModalButton}
                        onClick={()=>setChangingPass(!changingPass)}
                    ></img>
                    <h2 className="chConf__title">Change Password</h2>
                    <Formik
                        initialValues={{currentPassword: "", newPassword: "", newPasswordConfirmation: ""}}
                        validate={(values) => {
                        let errors = {};
                            // current password validation
                            if(!values.currentPassword){
                            errors.currentPassword = "must enter your current password";
                            }
                            // newPassword validation
                            if (!values.newPassword) {
                            errors.newPassword = "must enter your new password";
                            } else if (
                            !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
                                values.newPassword
                            )
                            ) {
                            errors.newPassword = "Password must have: 8 characters at least, a lowercase, an uppercase, a number, a symbol";
                            }
                            // Confirm newPassword validation
                            if (!values.newPasswordConfirmation) {
                            errors.newPasswordConfirmation = "new password confirmation required";
                            } else if (values.newPassword !== values.newPasswordConfirmation) {
                            errors.newPasswordConfirmation = "must match your new password";
                            }
                            return errors;
                        }}
                        onSubmit={(values, { resetForm }) => {
                            if (values.currentPassword === currPass) {
                                axios.patch(
                                    "https://studio-ghibli-c10-platzimaster.herokuapp.com/auth/request-reset-password",
                                    { 
                                        email: `${userMail}`
                                    },
                                    config
                                )
                                .then((response) => {
                                    if(response.status === 200){
                                        axios.get(
                                            `https://studio-ghibli-c10-platzimaster.herokuapp.com/users/profile/${userId}`,
                                            config
                                        )
                                        .then((response) => {
                                            if(response.data.resetPasswordToken !== null) {
                                                axios.patch(
                                                    "https://studio-ghibli-c10-platzimaster.herokuapp.com/auth/reset-password",
                                                    {
                                                        resetPasswordToken: `${response.data.resetPasswordToken}`,
                                                        password: `${values.newPassword}`
                                                    },
                                                    config
                                                )
                                                .then((response) => {
                                                    console.log(response);
                                                    if(response.status === 200) {
                                                        setChStatus("success");
                                                        setChangingPass(!changingPass);
                                                        window.localStorage.setItem("usrCurrPass",values.newPassword)
                                                    }
                                                })
                                                .catch((error) => {
                                                    console.log(error);
                                                    if(error) {
                                                        setChStatus("failure");
                                                    }
                                                })
                                            }
                                        })
                                        .catch((error) => {
                                            console.log(error);
                                        })
                                    }
                                })
                                .catch((error) => {
                                    console.log(error);
                                })
                                resetForm();
                            } else {
                                setChStatus("failure");
                                setChangingPass(!changingPass);
                            }
                        }}
                    >
                        {({errors})=> (
                        <Form className="changingForm">
                            <div>
                            <label htmlFor="currentPassword"> current password </label>
                            <Field 
                                type="password" 
                                name="currentPassword"
                                id="currentPassword"
                                placeholder="Introduce your current password"
                            />
                            <ErrorMessage
                                name="currentPassword"
                                component={() => (<div className="error">{errors.currentPassword}</div>)}/>
                            </div>
                            <div>
                            <label htmlFor="newPassword"> new password </label>
                            <Field 
                                type="password" 
                                name="newPassword"
                                id="newPassword" 
                                placeholder="Introduce new your password"
                            />
                            <ErrorMessage
                                name="newPassword"
                                component={() => (<div className="error">{errors.newPassword}</div>)}/>
                            </div>
                            <div>
                            <label htmlFor="newPasswordConfirmation"> confirm your new password </label>
                            <Field 
                                type="password"
                                name="newPasswordConfirmation"
                                id="newPasswordConfirmation"
                                placeholder="repeat your new password"
                            />
                            <ErrorMessage
                                name="newPasswordConfirmation"
                                component={() => (<div className="error">{errors.newPasswordConfirmation}</div>)}/>
                            </div>
                            <div className="chConf__Options">
                            <button 
                                type="submit"
                                className="confirmButton">
                                Change Password
                            </button>
                            <button 
                                type="button" 
                                className="cancelButton"
                                onClick={()=>setChangingPass(!changingPass)}
                            >
                                Cancel
                            </button>
                            </div>
                        </Form>
                        )}
                    </Formik>
                    </motion.div>
                </ProfileConf>)
            }
            { (chStatus == "success") &&
                <ProfileConf>
                    <motion.div
                        initial={linkAnimateFrom}
                        animate={linkAnimateTo}
                        transition={{delay: 0.10}}
                        className="configModal"
                    >
                        <img
                            className="closeModalButton" 
                            src={closeModalButton}
                            onClick={()=> setChStatus("")}
                        ></img>
                        <h2 className="chConf__title">Password Changed successfully</h2>
                        <div className="chConf__Options">
                            <button
                            type="button"
                            className="confirmButton--end"
                            onClick={()=> setChStatus("")}
                            >
                            Accept
                            </button>
                        </div>
                    </motion.div>
                </ProfileConf>
            }
            { (chStatus == "failure") &&
                <ProfileConf>
                    <motion.div
                        initial={linkAnimateFrom}
                        animate={linkAnimateTo}
                        transition={{delay: 0.10}}
                        className="configModal"
                    >
                        <img
                            className="closeModalButton" 
                            src={closeModalButton}
                            onClick={()=> setChStatus("")}
                        ></img>
                        <h2 className="chConf__title">Could't change password</h2>
                        <p className="chConf__Msg">Please, verify your current password</p>
                        <div className="chConf__Options">
                            <button
                            type="button"
                            className="confirmButton--end"
                            onClick={()=> setChStatus("")}
                            >
                            Accept
                            </button>
                        </div>
                    </motion.div>
                </ProfileConf>
            }
        </>
    )

}

export { ChanginPass };
