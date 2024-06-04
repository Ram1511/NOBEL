// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCgE7HpogeeIZvt8FL9hUyaIPZ2gh_N3mA",
  authDomain: "noblepage-c03ea.firebaseapp.com",
  projectId: "noblepage-c03ea",
  storageBucket: "noblepage-c03ea.appspot.com",
  messagingSenderId: "664026663066",
  appId: "1:664026663066:web:1ffb23525988ba93d2f723",
  measurementId: "G-QC5Q2SQD2X"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

messaging.onMessage(function(payload) {
    console.log('Foreground Message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };
    self.registration.showNotification(notificationTitle,
      notificationOptions);
 });
