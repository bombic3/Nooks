// useBeforeLeave 탭을 닫을 때 실행되는 function
export const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    // 마우스가 위쪽으로 벗어날때만 onBefore실행
    if (clientY <= 0) {
      onBefore();
    }
    // console.log("leaving");
    // 그냥 마우스가 벗어나면 실행
    // onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};