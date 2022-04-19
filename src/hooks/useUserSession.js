import { useState, useEffect } from "react"

const useUserSession = () => {
  const [userSession, setUserSession] = useState({
    nickname: null,
    access_token: null,
    role: null,
  })

  const login = payload => {
    if (payload) {
      setUserSession({
        access_token: payload.access_token,
        nickname: payload.nickname,
        role: payload.role,
      })
    }
    return null
  }

  useEffect(async () => {
    let activeSession = window.localStorage.getItem("userSession")
    let localData = await JSON.parse(activeSession)
    if ( localData ) { 
      login(localData)
    }
    return null;
  }, [])

  return {
    userSession,
    login,
  }
}

export { useUserSession }
