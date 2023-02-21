export const getLocalStorage = (key) => {
  if (localStorage.getItem(key) !== null) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return [];
  }
};

export const setLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};
