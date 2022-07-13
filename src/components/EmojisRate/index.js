import React, { useState } from "react";
import "./emojisRate.scss";
import add from "./images/add.png";
import adding from "./images/adding.png";
import happy from "./images/happy.png";
import happyActive from "./images/happyActive.png";
import neutral from "./images/neutral.png";
import neutralActive from "./images/neutralActive.png";
import sad from "./images/sad.png";
import sadActive from "./images/sadActive.png";
import { motion } from "framer-motion";
import updateUserInteraction from "../../services/updateInteraction";
import axios from "axios";

function EmojisRate({
  watched,
  film,
  interaction,
  scoreRatingUser,
  setInteraction,
  setWatched,
}) {
  const [emojiRate, setEmojiRate] = useState("add");
  const [emojiRating, setEmojiRating] = useState(false);
  const [selectingEmoji, setSelectingEmoji] = useState("");
  const [trigger, setTrigger] = useState(false);
  const emojiFrom = { opacity: 0.6, y: -10 };
  const emojiTo = { opacity: 1, y: 0 };


  console.log(selectingEmoji, "selectingEmoji");




  const handleChangeEmoji = () => {
    let user = JSON.parse(window.localStorage.getItem("userSession"));
    let token = user.access_token;
    let ratingUser = scoreRatingUser.toString();
    
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    
    const body = {
      scoreByEmoji: selectingEmoji,
      scoreByStar: ratingUser,
      seenMark: watched,
      movieId: film?.id,
    };
    axios
      .post(`${process.env.API_URL}interactions`, body, config)
      .then(res => {
        setInteraction(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    setTrigger(true);
  };
  setTimeout(() => {
    trigger ? updateUserInteraction(film?.id, interaction?.id) : null;
  }, 1000);
  return (
    <React.Fragment>
      {emojiRate == "add" && !emojiRating && (
        <motion.button
          initial={emojiFrom}
          animate={emojiTo}
          className="EmojiRating--add"
          onClick={() => setEmojiRating(!emojiRating)}
        >
          <img src={add}></img>
        </motion.button>
      )}
      {emojiRate == "happy" && (
        <button
          className="EmojiRating--add happy"
          onClick={() => setEmojiRating(!emojiRating)}
        >
          <img src={happyActive}></img>
        </button>
      )}
      {emojiRate == "neutral" && (
        <button
          className="EmojiRating--add neutral"
          onClick={() => setEmojiRating(!emojiRating)}
        >
          <img src={neutralActive}></img>
        </button>
      )}
      {emojiRate == "sad" && (
        <button
          className="EmojiRating--add sad"
          onClick={() => setEmojiRating(!emojiRating)}
        >
          <img src={sadActive}></img>
        </button>
      )}

      {emojiRating && (
        <div className="EmojiRatingContainer">
          {emojiRate == "add" && (
            <button
              className="EmojiRating--adding"
              onClick={() => setEmojiRating(!emojiRating)}
            >
              <img src={adding}></img>
            </button>
          )}
          <motion.div
            initial={emojiFrom}
            animate={emojiTo}
            className="emojiRating__options"
          >
            <button
              onClick={() => {
                setEmojiRate("happy");
                setEmojiRating(!emojiRating);
                setTimeout(() => {
                  handleChangeEmoji();
                }, 800);
              }}
              onMouseEnter={() => setSelectingEmoji("happy")}
              onMouseLeave={() => setSelectingEmoji("")}
            >
              {selectingEmoji !== "happy" && <img src={happy}></img>}
              {selectingEmoji == "happy" && (
                <img className="selectingActive" src={happyActive}></img>
              )}
            </button>
            <button
              onClick={() => {
                setEmojiRate("neutral");
                setEmojiRating(!emojiRating);
                setTimeout(() => {
                  handleChangeEmoji();
                }, 800);
              }}
              onMouseEnter={() => setSelectingEmoji("neutral")}
              onMouseLeave={() => setSelectingEmoji("")}
            >
              {selectingEmoji !== "neutral" && <img src={neutral}></img>}
              {selectingEmoji == "neutral" && (
                <img className="selectingActive" src={neutralActive}></img>
              )}
            </button>
            <button
              onClick={() => {
                setEmojiRate("sad");
                setEmojiRating(!emojiRating);
                setTimeout(() => {
                  handleChangeEmoji();
                }, 800);
              }}
              onMouseEnter={() => setSelectingEmoji("sad")}
              onMouseLeave={() => setSelectingEmoji("")}
            >
              {selectingEmoji !== "sad" && <img src={sad}></img>}
              {selectingEmoji == "sad" && (
                <img className="selectingActive" src={sadActive}></img>
              )}
            </button>
          </motion.div>
        </div>
      )}
    </React.Fragment>
  );
}

export { EmojisRate };
