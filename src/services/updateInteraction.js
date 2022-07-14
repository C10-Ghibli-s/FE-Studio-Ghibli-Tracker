import axios from "axios";

const updateUserInteraction = (movieId, interactionId) => {
  let user = JSON.parse(window.localStorage.getItem("userSession"));
  let token = user.access_token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const body = {};
  axios
    .put(
      `${process.env.API_URL}users/${user.userId}/update/${movieId}/interaction/${interactionId}`,
      body,
      config
    )
    .then(res => {
      console.log("update interaction response:", res);
    })
    .catch(err => {
      console.log(err);
    });
};
export default updateUserInteraction;
