import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ProfileConf } from '../../index.js';
import { motion } from "framer-motion";
import closeModalButton from '../../images/cancel.png';
import axios from "axios";

function ChanginPass({changingPass, setChangingPass}) {
    const linkAnimateFrom = {opacity: 0, y: -40};
    const linkAnimateTo = {opacity: 1, y: 0};
    const [changeStatus, setChangeStatus] = useState("");
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
                            // when we have the user auth-token, here will be the logic for getting the specific profile
                            const getPass = axios.get("https://stark-bayou-90480.herokuapp.com/users/profile/1");
                            if(values.currentPassword == getPass.password) {
                                axios.put("https://stark-bayou-90480.herokuapp.com/users/profile/1/update", {
                                    password: values.newPassword,
                                    })
                                    .then((response) => {
                                    console.log(response);
                                    })
                                    .catch((error) => {
                                    console.log(error);
                                    });
                                resetForm();
                                setChangingPass(!changingPass);
                                setChangeStatus("success");
                            } else {
                                setChangeStatus("failure");
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
                    { (changeStatus == "sucess") &&
                        <>
                            <motion.div
                                initial={linkAnimateFrom}
                                animate={linkAnimateTo}
                                transition={{delay: 0.10}}
                                className="changingModal"
                            >
                                <img
                                    className="closeModalButton" 
                                    src={closeModalButton}
                                    onClick={()=> setChangeStatus("")}
                                ></img>
                                <h2 className="chConf__title">Password Changed successfully</h2>
                                <div className="chConf__Options">
                                    <button
                                    type="button"
                                    className="confirmButton"
                                    onClick={()=> setChangeStatus("")}
                                    >
                                    Accept
                                    </button>
                                </div>
                            </motion.div>
                        </>
                    }
                    { (changeStatus == "failure") &&
                        <>
                            <motion.div
                                initial={linkAnimateFrom}
                                animate={linkAnimateTo}
                                transition={{delay: 0.10}}
                                className="changingModal"
                            >
                                <img
                                    className="closeModalButton" 
                                    src={closeModalButton}
                                    onClick={()=> setChangeStatus("")}
                                ></img>
                                <h2 className="chConf__title">Could't change password</h2>
                                <p className="chConf__Msg">Please, verify your current password</p>
                                <div className="chConf__Options">
                                    <button
                                    type="button"
                                    className="confirmButton"
                                    onClick={()=> setChangeStatus("")}
                                    >
                                    Accept
                                    </button>
                                </div>
                            </motion.div>
                        </>
                    }
                </ProfileConf>)
            }
        </>
    )

}

export { ChanginPass };
