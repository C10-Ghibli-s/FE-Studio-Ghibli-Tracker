import React, { useState } from "react";
import { GoBackButton } from '../../components/BackLink';
import './profile.scss';
import userImageProfile from './images/user-image-profile.png';
import linkArrow from './images/linkArrow.png'
import { motion } from 'framer-motion';

function Profile() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const linkAnimateFrom = {opacity: 0, y: -40};
  const linkAnimateTo = {opacity: 1, y: 0};
  return (
    <div className="profilePageContainer">
      <header className="profile-header"> <GoBackButton/> </header>
      <main className="profile-main">
        <div className="user">
          <picture>
            <img src={userImageProfile}></img>
          </picture>
          <h1>Username</h1>
        </div>
        <section className="options">
          <motion.span
            initial={linkAnimateFrom}
            animate={linkAnimateTo}
            transition={{delay: 0.10}}
          >
            <a href="/scores"> Scores <img src={linkArrow}></img></a>
          </motion.span>
          <motion.span
            initial={linkAnimateFrom}
            animate={linkAnimateTo}
            transition={{delay: 0.10}}
          >
            <button type="button" onClick={()=> setSettingsOpen(!settingsOpen)}> Settings <img src={linkArrow}></img></button>
          </motion.span>
            { settingsOpen &&
              <div className="settings">
                <motion.button 
                  initial={linkAnimateFrom}
                  animate={linkAnimateTo}
                  transition={{delay: 0.10}}
                  type="button"
                >
                  Change Username
                </motion.button>
                <motion.button 
                  initial={linkAnimateFrom}
                  animate={linkAnimateTo}
                  transition={{delay: 0.10}}
                  type="button"
                >
                  Change Password
                </motion.button>
                <motion.button 
                  initial={linkAnimateFrom}
                  animate={linkAnimateTo}
                  transition={{delay: 0.10}}
                  type="button"
                >
                  Connect with Facebook
                </motion.button>
              </div>
            }
        </section>
        <div className="progressBar-container">
          <label for="movies-watched--bar">Ghibli Movies you've watched</label>
          <progress className="movies-watched--bar" id="movies-watched--bar" value="70" max="100" onClick={()=>{document.getElementById("scoresLink").click();}}>14/20</progress>
          <a id="scoresLink" href="/scores"></a>
          <span> 14/20 </span>
        </div>
      </main>
    </div>
  );
}

export { Profile };
