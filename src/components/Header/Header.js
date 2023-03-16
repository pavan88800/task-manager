import React from "react";
import "./style.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Avatar } from "@mui/material";
import MenuList from "../MenuList";
import { HeaderList } from "./helper.js";
import { getLocalStorage } from "../../utils";

const Header = () => {
  const token = getLocalStorage("token");

  const [anchorEl, setAnchorEl] = React.useState({
    proflie: null,
    library: null,
  });

  const handleClick = (event, type) => {
    setAnchorEl((prev) => ({
      ...prev,
      [type]: event.currentTarget,
    }));
  };

  const handleClose = (type) => {
    setAnchorEl((prev) => ({
      ...prev,
      [type]: null,
    }));
  };

  return (
    <header className="bg-blue">
      <nav className="nav-bar">
        <ul>
          {token.length ? (
            HeaderList?.map((item) =>
              item.isDropdrown ? (
                <li key={item.id} onClick={(e) => handleClick(e, item.type)}>
                  {item.isAvatar ? (
                    <Avatar
                      className="avatar"
                      alt="Remy Sharp"
                      src="https://lh3.googleusercontent.com/a/AEdFTp5CpvDdVZ_LU8kT7ivd3BK1C_S05qK6R9Lmsb5t8g=s96-c"
                      sx={{ width: 30, height: 30 }}
                    />
                  ) : null}
                  {item.label}
                  <MenuList
                    id={item.label}
                    open={Boolean(anchorEl[item.type])}
                    anchorEl={anchorEl[item.type]}
                    handleClose={(e) => handleClose(e, item.type)}
                    menuItems={item.options || []}
                  />
                  {item.type ? <ArrowDropDownIcon className="icon" /> : null}
                </li>
              ) : (
                <li key={item.id} onClick={() => console.log("as")}>
                  {item.label}
                </li>
              )
            )
          ) : (
            <li>My Project</li>
          )}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
