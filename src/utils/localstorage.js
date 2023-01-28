export const getLocalStorage = (key) => {
  if (localStorage.getItem(key) !== null) {
    JSON.parse(localStorage.getItem(key));
  } else {
    return [];
  }
};

export const setLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};
