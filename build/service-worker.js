// Import the Firebase Messaging SDK
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Register the service worker
navigator.serviceWorker.register('/service-worker.js');

// Subscribe to Firebase Cloud Messaging notifications
firebase.messaging().onMessage(function(event) {
  console.log(event); 
  // Notification 

  // Title of the notification  
  var title = event.notification.title;
  // Body of the notification
  var body = event.notification.body;

  // Show notification when a notification is received

  // Customize notification here

  const notificationOptions = {
    body: body,
    icon: '/images/logo.png'
  };

  self.registration.showNotification(title, notificationOptions);
});

// Cache the app's assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('app').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/app.js',
        '/styles.css',
        ...
      ]);
    })
  );
});

// Serve the app from cache when offline
self.addEventListener('fetch', function(event) {
  event.respondWith(
    cache.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
