import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Component/Login";
import { getTokenFromUrl } from "./Component/Spotify";

function App() {
  const [token, setToken] = useState(null);

  // This will run a code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
    console.log("I HAVE A TOKEN>>> ", token);
  }, []);

  return (
    <div className="app">{token ? <h1>I am logged in</h1> : <Login />}</div>
  );
}

export default App;