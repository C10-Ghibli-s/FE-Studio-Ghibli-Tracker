import { useState, useEffect } from "react";
import { axios } from "axios";

const useUserSession = () => {
  const [userSession, setUserSession] = useState(() =>
    window.localStorage.getItem("userSession")
  );

  const login = payload => {
    if (payload) {
      setUserSession({
        userId: payload.userId,
        nickname: payload.nickname,
        profilePicture: payload.profilePicture,
        role: payload.role,
        access_token: payload.access_token,
        email: payload.email,
      });
    }
    return null;
  };

  useEffect(async () => {
    let activeSession = window.localStorage.getItem("userSession");
    let localData = await JSON.parse(activeSession);
    if (activeSession) {
      login(localData);
    } else {
      return null;
    }
  }, []);

  return {
    userSession,
    login,
  };
};

export { useUserSession };
