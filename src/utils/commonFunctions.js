export const detectDeviceType = () => {
  return !!window.matchMedia("(max-width: 769px)").matches;
};
