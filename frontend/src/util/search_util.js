export const debounce = (func, interval) => {
  let timeout;

  return (args) => {
    const debouncedFunc = () => func.call(this, args);

    clearTimeout(timeout);
    timeout = setTimeout(debouncedFunc, interval);
  };
};
