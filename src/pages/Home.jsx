import "../styles/Home.css"

import { useStateValue } from "../context/StateProvider";
import { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { Auth } from "@three0dev/js-sdk";
import SignIn from "./SignIn";
import { useEffect } from "react";

function Home() {
  const [{ user }, dispatch] = useStateValue();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  useEffect(() => {
    if (Auth.isLoggedIn()) {
      dispatch({
        type: "SET_USER",
        user: {
          _id: Auth.getAccountId()
        }
      })
    }
  }, []);

  function signIn() {
    setIsSigningIn(!isSigningIn);
  }

  async function signOut() {
    setIsSigningOut(true);
    await Auth.logout().then(() => {
      dispatch({
        type: "SET_USER",
        user: null,
      });
      setIsSigningOut(false);
    });
  }

  return (
    <div className="home">
      {user ?
        <div>
          <p>Hello {user?._id.split(".")[0]}</p>
          {isSigningOut ?
            <CircularProgress /> :
            <button className="authentication-button" onClick={signOut}>
              Sign Out
            </button>}
        </div> :
        <button className="authentication-buttons" onClick={signIn}>
          Sign In
        </button>}
      <div className={isSigningIn ? "sign-in-container" : "sign-in-container-hidden"}>
        <SignIn />
      </div>
    </div>
  )
}

export default Home;