import "../../styles/Header/NavBar.css"

import { useStateValue } from "../../context/StateProvider";
import { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { Auth } from "@three0dev/js-sdk";
import SignIn from "../SignIn";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar() {
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
    <div className="navbar-container">
      <div className="navigation-side">
        <img className="nav-logo" src="images/three0logo.svg" alt="three0 logo" />
        <Link className="page-redirect" to={"/"}>discover</Link>
        <Link className="page-redirect" to={"/resources"}>resources</Link>
      </div>
      <div className="authentication-side">
        {user ?
          <div>
            <p>Hello {user?._id.split(".")[0]}</p>
            {isSigningOut ?
              <CircularProgress /> :
              <button className="authentication-buttons" onClick={signOut}>
                Sign Out
              </button>}
          </div> :
          <button className="authentication-buttons" onClick={signIn}>
            Sign In With NEAR
          </button>}
        <div className={isSigningIn ? "sign-in-container" : "sign-in-container-hidden"}>
          <SignIn />
        </div>
      </div>
    </div>
  )
}

export default NavBar;