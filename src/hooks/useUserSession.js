import { useState, useEffect } from "react";

const useUserSession = () => {
  const [userSession, setUserSession] = useState({
    nickname: null,
    access_token: null,
    role: null,
  });

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
    if (localData) {
      login(localData);
    }
    return null;
  }, []);

  return {
    userSession,
    login,
  };
};

export { useUserSession };
