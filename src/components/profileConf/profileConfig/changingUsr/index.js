import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ProfileConf } from '../../index.js';
import { motion } from "framer-motion";
import closeModalButton from '../../images/cancel.png';
import axios from "axios";

function ChanginUsr({changingUsr, setChangingUsr}) {
    const linkAnimateFrom = {opacity: 0, y: -40};
    const linkAnimateTo = {opacity: 1, y: 0};
    const [chStatus, setChStatus] = useState("");
    // const { login, userSession } = useContext(UserContext);
    let currPass = window.localStorage.getItem("usrCurrPass");
    let user = JSON.parse(window.localStorage.getItem("userSession"));
    let userId = user.userId;
    let token = user.access_token;
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    return (
        <>
            { changingUsr && (
                <ProfileConf>
                    <motion.div 
                    initial={linkAnimateFrom}
                    animate={linkAnimateTo}
                    transition={{delay: 0.10}}
                    className="changingModal">
                    <img
                        className="closeModalButton" 
                        src={closeModalButton}
                        onClick={()=>setChangingUsr(!changingUsr)}
                    ></img>
                    <h2 className="chConf__title">Change User Name</h2>
                    <Formik
                        initialValues={{newUserName: "", password: ""}}
                        validate={(values) => {
                        let errors = {};
                        let regex = new RegExp(
                          "^(?=.{4,22}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
                        );
                        //new user name validation
                        if (!values.newUserName) {
                            errors.newUserName = "Enter your new username";
                        } else if (!regex.test(values.newUserName)) {
                          errors.newUserName =
                            "Username must contains: 6 - 12 characters (letters, numbers). Spaces and special characters are not allowed";
                        }
                        if (!values.password) {
                            //Password validation 
                            errors.password = "Enter your password";
                        }
                        return errors;
                        }}
                        onSubmit={(values, { resetForm }) => {
                            if(values.password === currPass) {
                                axios.put(
                                    `http://studio-ghibli-c10-platzimaster.herokuapp.com/users/profile/${userId}/update`,
                                    {
                                        nickname: values.newUserName,
                                    },
                                    config
                                )
                                .then((response) => {
                                    console.log(response);
                                    setChStatus("success");
                                    setChangingUsr(!changingUsr);
                                    window.localStorage.setItem("userSession", JSON.stringify({...user, nickname: values.newUserName}))
                                    resetForm();
                                })
                                .catch((error) => {
                                    console.log(error.response.data);
                                    if(error) {
                                        setChStatus("failure");
                                    }
                                });
                            } else {
                                setChStatus("failure");
                                setChangingUsr(!changingUsr);
                            }
                        }}
                    >
                        {({errors})=> (
                        <Form className="changingForm">
                            <div>
                            <label htmlFor="newUserName"> new User Name </label>
                            <Field 
                                autoComplete="new-password" 
                                type="text" 
                                name="newUserName" 
                                id="newUserName"
                                placeholder="Introduce your new user name"
                            />
                            <ErrorMessage
                            name="newUserName"
                            component={() => (<div className="error">{errors.newUserName}</div>)}/>
                            </div>
                            <div>
                            <label htmlFor="password"> password </label>
                            <Field 
                                autoComplete="new-password" 
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Introduce your password"
                            />
                            <ErrorMessage
                                name="password"
                                component={() => (<div className="error">{errors.password}</div>)}/>
                            </div>
                        <div className="chConf__Options">
                            <button 
                            type="submit"
                            className="confirmButton">
                            Change User Name
                            </button>
                            <button 
                            type="button" 
                            className="cancelButton"
                            onClick={()=>setChangingUsr(!changingUsr)}
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
                        <h2 className="chConf__title">UserName Changed successfully</h2>
                        <div className="chConf__Options">
                            <button
                            type="button"
                            className="confirmButton--end"
                            onClick={()=> {setChStatus("");window.location.reload(true);}}
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
                        <h2 className="chConf__title">Could't change your UserName</h2>
                        <p className="chConf__Msg">Please, verify your current password</p>
                        <div className="chConf__Options">
                            <button
                            type="button"
                            className="confirmButton--end"
                            onClick={()=> {setChStatus("");}}
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

export { ChanginUsr };
