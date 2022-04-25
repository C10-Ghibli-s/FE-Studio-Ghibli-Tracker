import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GoBackButton } from "../../components/BackLink";
import "./profile.scss";
import userImageProfile from "./images/user-image-profile.png";
import linkArrow from "./images/linkArrow.png";
import { motion } from "framer-motion";
import { ProfileConfigOptions } from "../../components/profileConf/profileConfig/index.js";
import { UserSessionValidation } from "../../components/UserSessionValidation";
import { UserContext } from "../../context/UserContext";

function Profile() {
  const { login, userSession } = useContext(UserContext);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [chUserName, setChUserName] = useState(false);
  const [chPassword, setChPassword] = useState(false);
  const linkAnimateFrom = { opacity: 0, y: -40 };
  const linkAnimateTo = { opacity: 1, y: 0 };
  if (!userSession) {
    return <UserSessionValidation />;
  } else {

    return (
    <>
      <div className="profilePageContainer">
        <header className="profile-header">
          {" "}
          <GoBackButton />{" "}
        </header>
        <main className="profile-main">
          <div className="user">
            <picture>
              <img
                alt="user photo"
                data-testid="user--photo"
                src={userImageProfile}
              ></img>
            </picture>
            <h1>{userSession.nickname}</h1>
          </div>
          <section className="options" data-testid="options">
            <motion.div
              initial={linkAnimateFrom}
              animate={linkAnimateTo}
              transition={{ delay: 0.1 }}
            >
              <button
                type="button"
                onClick={() => setSettingsOpen(!settingsOpen)}
              >
                {" "}
                Settings <img src={linkArrow}></img>
              </button>
            </motion.div>
            {settingsOpen && (
              <div className="config" data-testid="configOptions">
                <motion.button
                  initial={linkAnimateFrom}
                  animate={linkAnimateTo}
                  transition={{ delay: 0.1 }}
                  type="button"
                  onClick={() => {
                    setChUserName(!chUserName);
                  }}
                >
                  Change Username
                </motion.button>
                <motion.button
                  initial={linkAnimateFrom}
                  animate={linkAnimateTo}
                  transition={{ delay: 0.1 }}
                  type="button"
                  onClick={() => setChPassword(!chPassword)}
                >
                  Change Password
                </motion.button>
                <ProfileConfigOptions
                  chUserName={chUserName}
                  setChUserName={setChUserName}
                  chPassword={chPassword}
                  setChPassword={setChPassword}
                />
              </div>
            )}
          </section>
          <div className="progressBar-container">
            <label htmlFor="movies-watched--bar">
              Ghibli Movies you've watched
            </label>
            {/* <progress className="movies-watched--bar" id="movies-watched--bar" value={user.movieWatched} max="24" onClick={()=>{document.getElementById("scoresLink").click();}}></progress> */}
            <progress
              className="movies-watched--bar"
              id="movies-watched--bar"
              value="23"
              max="24"
            ></progress>
            {/* <a id="scoresLink" href="/scores"></a> */}
            {/* <span data-testid='moviesWatched'> {user.movieWatched}/24 </span> */}
            <span data-testid="moviesWatched"> 23/24 </span>
          </div>
        </main>
      </div>
    </>
  );
  }
}

export { Profile };
