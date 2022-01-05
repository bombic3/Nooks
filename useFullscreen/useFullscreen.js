export const useFullscreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullScreen();
    }
  };
  return { element, triggerFull };
};