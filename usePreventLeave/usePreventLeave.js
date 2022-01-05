// usePreventLeave는 윈도우 창을 닫기 전에 확인 하는 것
export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  // 세트임 event.returnValue = ""; 넣어줘야 작동 함
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};