import React from "react"
import "./Login.css"
import { Button } from "@material-ui/core"
import { auth, provider } from "../../api/firebase"
import { useStateValue } from "../../contextAPI/StateProvider"
import { actionTypes } from "../../reducers"

const Login = () => {
  const [state, dispatch] = useStateValue()

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>
        dispatch({ type: actionTypes.SET_USER, user: result.user })
      )
      .catch((error) => alert(error.message))
  }

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"
          alt="slack_icon"
        />
        <h1>Sign in to Slack Clone Web app</h1>
        <p>Slackclone.slack.com</p>
        <Button onClick={signIn}>Signin with Google</Button>
      </div>
    </div>
  )
}

export default Login
