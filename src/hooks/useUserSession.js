import { useState, useEffect } from 'react';

const useUserSession = () => {
  const [ userSession, setUserSession ] = useState({
    username: null,
    access_token: null,
    role: null,
  });
  
  const login = (payload) => {
    setUserSession( { 
      username: payload.username,
      access_token: payload.access_token,
      role: payload.role
    });
  }

  useEffect( async () => {
    let activeSession = window.localStorage.getItem("userSession");
    let username = await JSON.parse(activeSession);
    login(username);
  }, []);

  return {
    userSession,
    login
  };
};

export { useUserSession };