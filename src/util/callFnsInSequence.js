export default (...fns) => (...args) => {
  fns.forEach((fn) => fn && fn(...args));
};
