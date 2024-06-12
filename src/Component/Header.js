import React from "react";
import "../assets/css/Header.css";
import { useDataLayerValue } from "../Component/DataLayer";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";

function Header({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();

  const avatarUrl = user?.images?.length > 0 ? user.images[0].url : "";

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar alt={user?.display_name} src={avatarUrl} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
