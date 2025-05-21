self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('tetris-pwa').then(cache => cache.addAll([
      '/',
      '/index.html',
      '/manifest.json',
      '/main.js',
      '/service-worker.js'
    ]))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
