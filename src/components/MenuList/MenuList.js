import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { onClickFunctions } from "../Header/helper";
const MenuList = ({ handleClose, anchorEl, menuItems, open, id }) => {
  return (
    <>
      <Menu id={id} anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItems.map((item) => (
          <MenuItem onClick={() => onClickFunctions(item.key)} key={item.id}>
            {item.value}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuList;
