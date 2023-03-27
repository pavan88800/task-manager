import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { onClickFunctions } from "../Header/helper";
import { useNavigate } from "react-router-dom";

const MenuList = ({ handleClose, anchorEl, menuItems, open, id }) => {
  const navigate = useNavigate();
  return (
    <>
      <Menu id={id} anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItems.map((item) => (
          <MenuItem
            style={{ fontSize: "14px" }}
            onClick={onClickFunctions(item.key, navigate)}
            key={item.id}
          >
            {item.value}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuList;
