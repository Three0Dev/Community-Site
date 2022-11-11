import './App.css';
import { Auth } from "@three0dev/js-sdk";
import { useEffect, useState } from 'react';
import { CircularProgress } from "@material-ui/core";

function App() {
  const [userID, setUserID] = useState(null);
  const [logoutLoading, setLogoutLoading] = useState(false);

  // Update userID because Auth.login
  useEffect(() => {
    if(Auth.isLoggedIn()) {
      setUserID(Auth.getAccountId());
    }
  }, [userID]);

  const login = async () => {
    if(Auth.isLoggedIn()) {
      setLogoutLoading(true);
      await Auth.logout().then(() => {
        setUserID(null);
        setLogoutLoading(false);
      });
    } else {
      Auth.login();
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={login}>
          {
          userID ? 
          (logoutLoading ? <CircularProgress/> : 
          "Logout of " + userID.split(".")[0]): 
          "Login with Near"}
        </button>
      </header>
    </div>
  );
}

export default App;
