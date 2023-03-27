export const HeaderList = [
  {
    id: 14,
    label: "My Project",
    isIcon: false,
    isDropdrown: false,
  },

  {
    id: 10,
    type: "library",
    label: "library",
    isIcon: false,
    isDropdrown: true,
    options: [
      {
        id: 15,
        value: "Insert Global Module",
        key: "Insert Global Module",
      },
      {
        id: 16,
        value: "View Global Library",
        key: "View Global Library",
      },
      {
        id: 17,
        value: "Track Global Modules",
        key: "Track Global Modules",
      },
    ],
  },
  {
    id: 11,
    type: "proflie",
    isDropdrown: true,
    label: ``,
    isIcon: true,
    options: [
      {
        id: 13,
        value: "My account",
        key: "Proflie",
      },
      {
        id: 14,
        value: "LogOut",
        key: "Logout",
      },
    ],
  },
];

export const onClickFunctions = (type, history) => {
  const Logout = () => {
    history("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  switch (type) {
    case "Logout":
      return () => Logout();

    default:
      return () => console.log("something went worng...");
  }
};
