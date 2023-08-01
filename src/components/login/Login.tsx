import React from 'react'
import './Login.scss'
import { Button } from '@mui/material'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth, provider } from '../../firebase'

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((error) => {
      console.log(error)
    })
  }
  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./discordIcon.png" />
      </div>

      <Button onClick={signIn}>ログイン</Button>
    </div>
  )
}

export default Login
