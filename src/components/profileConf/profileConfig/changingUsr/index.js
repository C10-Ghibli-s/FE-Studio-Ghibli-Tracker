import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ProfileConf } from '../../index.js';
import { motion } from "framer-motion";
import closeModalButton from '../../images/cancel.png';

function ChanginUsr({changingUsr, setChangingUsr}) {
    const linkAnimateFrom = {opacity: 0, y: -40};
    const linkAnimateTo = {opacity: 1, y: 0};
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
                        //new user name validation
                        if (!values.newUserName) {
                            errors.newUserName = "Enter your new username";
                        } else if (
                            !/^(?=.{4,12}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(
                            values.newUserName
                            )
                        ) {
                            errors.newUserName = "Username must contains: 6 - 12 characters (letters, numbers). Spaces and special characters are not allowed";
                        }
                        if (!values.password) {
                            //Password validation
                            errors.password = "Enter your password";
                        }
                        return errors;
                        }}
                        onSubmit={(values, { resetForm }) => {
                        axios.put("https://serene-coast-44000.herokuapp.com/users/signup", {
                            nickname: values.newUserName,
                            })
                            .then((response) => {
                            console.log(response);
                            })
                            .catch((error) => {
                            console.log(error.response.data);
                            });
                        resetForm();
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
        </>
    )

}

export { ChanginUsr };
