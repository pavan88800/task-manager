import { redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const HeaderList = [
  {
    id: 14,
    label: "My Project",
    isAvatar: false,
    isDropdrown: false,
  },

  {
    id: 10,
    type: "library",
    label: "library",
    isAvatar: false,
    isDropdrown: true,
    options: [
      {
        id: 15,
        value: "Place order",
        key: "placeOrder",
      },
      {
        id: 16,
        value: "People Officer...",
        key: "PeopleOfficer",
      },
    ],
  },
  {
    id: 11,
    type: "proflie",
    isDropdrown: true,
    label: `pavan`,
    isAvatar: true,
    options: [
      {
        id: 13,
        value: "My account",
        key: "Proflie",
        // onClick: () => openC(),
      },
      {
        id: 14,
        value: "LogOut",
        key: "Logout",
      },
    ],
  },
];

export const onClickFunctions = (type) => {
  switch (type) {
    case "LogOut":
      return <Navigate to="/" />;

    default:
      return "";
  }
};
