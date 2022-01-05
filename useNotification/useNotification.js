// notification API를 이용해서 알람 만들기
// https://developer.mozilla.org/ko/docs/Web/API/notification
// mdn 읽어보면서 여러 옵션들 적용해보기

export const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};