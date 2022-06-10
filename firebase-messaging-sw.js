importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js')
const firebaseConfig = {
  apiKey: 'AIzaSyBfm6e348_kNHSYIK6x5-qNGHgQA2bp5ns',
  authDomain: 'ruetkit.firebaseapp.com',
  projectId: 'ruetkit',
  storageBucket: 'ruetkit.appspot.com',
  messagingSenderId: '976687328954',
  appId: '1:976687328954:web:32316c2d82fbbcbdf2dc83',
  measurementId: 'G-XZ49LFZBLW'
}
firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload)

  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body
  }

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  )
})
// messaging.onBackgroundMessage(function(payload) {
//   console.log('Received background message ', payload);
//
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };
//
//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });