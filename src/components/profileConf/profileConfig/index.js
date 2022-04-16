import React, { useState } from "react";
import { ProfileConf } from '../index.js';
import { motion } from "framer-motion";
import closeModalButton from '../images/cancel.png';
import { ChanginPass } from "./changingPass/index.js";
import { ChanginUsr } from "./changingUsr/index.js";
import axios from "axios";

function ProfileConfigOptions({chUserName, setChUserName, chPassword, setChPassword}) {
  const [changingUsr, setChangingUsr] = useState(false);
  const [changingPass, setChangingPass] = useState(false);
  const linkAnimateFrom = {opacity: 0, y: -40};
  const linkAnimateTo = {opacity: 1, y: 0};

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
    <ChanginUsr changingUsr={changingUsr} setChangingUsr={setChangingUsr}/>
    <ChanginPass changingPass={changingPass} setChangingPass={setChangingPass}/>
  </>
  )
}


export { ProfileConfigOptions };
