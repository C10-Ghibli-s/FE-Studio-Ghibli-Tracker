import React, { useState } from "react";
import { ProfileConf } from '../index.js';
import { motion } from "framer-motion";
import closeModalButton from '../images/cancel.png';
function ProfileConfigOptions({chUserName, setChUserName, chPassword, setChPassword}) {
  const [changingUsr, setChangingUsr] = useState(false);
  const [changingPass, setChangingPass] = useState(false);
  const linkAnimateFrom = {opacity: 0, y: -40};
  const linkAnimateTo = {opacity: 1, y: 0};

  const getPassword = () => {
      useEffect(async () => {
        try {
          const response = await axios.get(`https://serene-coast-44000.herokuapp.com/users/profile/2`);
          setUser(response.data);
        } catch (error) {
          console.log(error);
        }
      });
  }

  return (
  <>
    {chUserName && (
      <ProfileConf>
        <motion.div 
          initial={linkAnimateFrom}
          animate={linkAnimateTo}
          transition={{delay: 0.10}}
          className="configModal">
          <img
            className="closeModalButton" 
            src={closeModalButton}
            onClick={()=>setChUserName(!chUserName)}
          ></img>
          <h2 className="chConf__title">Change User Name</h2>
          <p className="chConf__Msg">Are you sure you want to change your User Name?</p>
          <div className="chConf__Options">
            <button 
              type="button"
              className="confirmButton"
              onClick={()=>{ setChUserName(!chUserName);setChangingUsr(!changingUsr)}}
            >
              Yes, Change User Name
            </button>
            <button 
              type="button" 
              className="cancelButton"
              onClick={()=>setChUserName(!chUserName)}
              >
                Cancel
            </button>
          </div>
        </motion.div>
      </ProfileConf>)
    }
    {chPassword && (
      <ProfileConf>
        <motion.div 
          initial={linkAnimateFrom}
          animate={linkAnimateTo}
          transition={{delay: 0.10}}
          className="configModal">
          <img
            className="closeModalButton" 
            src={closeModalButton}
            onClick={()=>setChPassword(!chPassword)}
          ></img>
          <h2 className="chConf__title">Change Password</h2>
          <p className="chConf__Msg">Are you sure you want to change your Password?</p>
          <div className="chConf__Options">
            <button 
              type="button"
              className="confirmButton"
              onClick={()=> {setChangingPass(!changingPass);setChPassword(!chPassword)}}
            >
              Yes, Change password
            </button>
            <button 
              type="button" 
              className="cancelButton"
              onClick={()=>setChPassword(!chPassword)}
            >
              Cancel
            </button>
          </div>
        </motion.div>
      </ProfileConf>)
    }
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
          <form className="changingForm">
            <div>
              <label htmlFor="newUserName"> new User Name </label>
              <input autoComplete="new-password" required type="text" id="newUserName" placeholder="Introduce your new user name"></input>
            </div>
            <div>
              <label htmlFor="passwordConfirmation"> password </label>
              <input autoComplete="new-password" required type="password" id="passwordConfirmation" placeholder="Introduce your password"></input>
            </div>
          </form>
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
        </motion.div>
      </ProfileConf>)
    }
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
          <form className="changingForm">
            <div>
              <label htmlFor="currentPassword"> current password </label>
              <input autoComplete="new-password" required type="text" id="currentPassword" placeholder="Introduce your current password"></input>
            </div>
            <div>
              <label htmlFor="newPassword"> new password </label>
              <input autoComplete="new-password" required type="password" id="newPassword" placeholder="Introduce new your password"></input>
            </div>
            <div>
              <label htmlFor="newPasswordConfirmation"> confirm your new password </label>
              <input autoComplete="new-password" required type="password" id="newPasswordConfirmation" placeholder="repeat your new password"></input>
            </div>
          </form>
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
        </motion.div>
      </ProfileConf>)
    }
  </>
  )
}


export { ProfileConfigOptions };
