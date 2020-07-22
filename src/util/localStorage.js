export default (function () {
  function getLocalStorage(key) {
    const lsItem = JSON.parse(localStorage.getItem(key)) || [];

    return lsItem;
  }

  function setLocalStorage(key, action) {
    let ls = getLocalStorage(key);

    let itemExists;

    switch (action.type) {
      case "add":
        itemExists = ls.includes((lsItem) => lsItem.id === action.payload.id);
        if (!itemExists) {
          ls.push(action.payload);
        }
        break;

      case "remove":
        ls = ls.filter((lsItem) => lsItem.id !== action.payload);
        break;

      default:
        break;
    }

    localStorage.setItem(key, JSON.stringify(ls));

    return ls;
  }

  return {
    setLocalStorage,
  };
})();
