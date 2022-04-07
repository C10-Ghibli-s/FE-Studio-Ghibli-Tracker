import React, { useState, useEffect } from "react";
import { GoBackButton } from '../../components/BackLink';
import './profile.scss';
import userImageProfile from './images/user-image-profile.png';
import linkArrow from './images/linkArrow.png'

function Profile() {
  return (
    <>
      <header className="profile-header"> <GoBackButton/> </header>
      <main className="profile-main">
        <div className="user">
          <picture>
            <img src={userImageProfile}></img>
          </picture>
          <h1>Username</h1>
        </div>
        <section className="options">
          <span><a href="/scores"> Scores </a> <img src={linkArrow}></img></span>
          <span><a href="/settings"> Settings </a> <img src={linkArrow}></img></span>
        </section>

        <progress className="movies-watched--bar" id="movies-watched--bar" value="70" max="100"> </progress>
        <label for="movies-watched--bar">Ghibli Movies you've watched</label>
      </main>
    </>
  );
}

export { Profile };
