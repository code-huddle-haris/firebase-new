// firebase-messaging-sw.js

importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCw0alVGzMuCMS2s_AZYypSbidu22G9C_Y",
  authDomain: "test-firebase-3fce9.firebaseapp.com",
  projectId: "test-firebase-3fce9",
  storageBucket: "test-firebase-3fce9.appspot.com",
  messagingSenderId: "699948394603",
  appId: "1:699948394603:web:068c4f2cfba6d3b971a92e",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
