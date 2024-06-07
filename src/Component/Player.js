import React from "react";
import "../assets/css/Player.css";
import Sidebar from "./Sidebar";
import Body from "../Component/Body";
import Footer from "../Component/Footer";

function Player({ spotify }) {
  return (
    <div className="Player">
      <div className="player_body">
        <Sidebar />

        <Body />
      </div>

      <Footer />
    </div>
  );
}

export default Player;
