import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCw0alVGzMuCMS2s_AZYypSbidu22G9C_Y",
  authDomain: "test-firebase-3fce9.firebaseapp.com",
  projectId: "test-firebase-3fce9",
  storageBucket: "test-firebase-3fce9.appspot.com",
  messagingSenderId: "699948394603",
  appId: "1:699948394603:web:068c4f2cfba6d3b971a92e",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestPermission = () => {
  console.log("Requesting User Permission......");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification User Permission Granted.");

      return getToken(messaging, {
        vapidKey: `BMIJO4JHaPKDIXme-PbvzDZJhFzKyG68ziHpZ-ASLXGPCV3vg6sx3AIrgV_a5PBS1Y64Ssb8nKcUaAkuVTWVhzU`,
      })
        .then((currentToken) => {
          if (currentToken) {
            console.log("Client Token: ", currentToken);
          } else {
            console.log("Failed to generate the app registration token.");
          }
        })
        .catch((err) => {
          console.log(
            "An error occurred when requesting to receive the token.",
            err
          );
        });
    } else {
      console.log("User Permission Denied.");
    }
  });
};

requestPermission();

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
