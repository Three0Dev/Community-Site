import "../styles/SignIn.css"

import { useStateValue } from "../context/StateProvider";
import { Auth } from "@three0dev/js-sdk";

function SignIn() {
  const [dispatch] = useStateValue();

  const login = async () => {
    Auth.login().then(() => {
      dispatch({
        type: "SET_USER",
        user: {
          _id: Auth.getAccountId()
        }
      })
    })
  }

  return (
    <div className="sign-in-card">
      <p className="sign-in-card-header">
        Connect Wallet
      </p>
      <p className="sign-in-card-body">
        choose a wallet to log in with. don't have a wallet? <br />
        select a wallet to create an account now.
      </p>
      <button className="sign-in-card-button" onClick={login}>
        <div className="sign-in-card-content-container">
          <img className="sign-in-card-NEAR-logo" src="images/near_icon_wht.svg" alt="NEAR logo" />
          <p className="sign-in-card-content">Near</p>
        </div>
      </button>
      <div className="sign-in-card-info-container">
        <p className="sign-in-card-info">
          what's a wallet?
        </p>
        <a className="sign-in-card-info-link" href="https://near.org/blog/getting-started-with-the-near-wallet/">learn more.</a>
      </div>
      <img className="sign-in-card-three0-logo" src="images/three0logo.svg" alt="three0 logo" />
    </div>
  );
}

export default SignIn;
