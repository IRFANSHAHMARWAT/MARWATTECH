var cacheName = 'cache-v1';
var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js'
  'https://code.jquery.com/jquery-3.6.0.min.js'
  'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'

];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
