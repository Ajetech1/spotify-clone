import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Component/Login";
import { getTokenFromUrl } from "./Component/Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Component/Player";
import { useDataLayerValue } from "./Component/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  // This will run a code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
    console.log("I HAVE A TOKEN>>> ", token);
  }, [token]);

  console.log("👨", user);
  console.log("👽", token);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
