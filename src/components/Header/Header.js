import React from "react";
import "./style.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Avatar, Menu, MenuItem } from "@mui/material";
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className="bg-blue">
      <nav className="nav-bar">
        <ul>
          <li>My Projects</li>
          <li>
            library <ArrowDropDownIcon className="icon" />
          </li>

          <li onClick={handleClick}>
            <Avatar
              className="avatar"
              alt="Remy Sharp"
              src="https://lh3.googleusercontent.com/a/AEdFTp5CpvDdVZ_LU8kT7ivd3BK1C_S05qK6R9Lmsb5t8g=s96-c"
              sx={{ width: 30, height: 30 }}
            />
            Pavan
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>My account</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
            <ArrowDropDownIcon className="icon" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
