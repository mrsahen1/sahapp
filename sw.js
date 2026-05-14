// SahApp Service Worker v1.0
const CACHE = 'sahapp-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/apple-touch-icon.png'
];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k!==CACHE; }).map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e){
  // Harita tile'ları için network-first, diğerleri cache-first
  var url = e.request.url;
  var isMapTile = url.includes('tile.openstreetmap') || url.includes('google.com/vt') || url.includes('arcgisonline') || url.includes('unpkg.com') || url.includes('cdnjs') || url.includes('jsdelivr');

  if(isMapTile){
    // Network first, cache fallback
    e.respondWith(
      fetch(e.request).then(function(resp){
        var clone = resp.clone();
        caches.open(CACHE).then(function(c){ c.put(e.request, clone); });
        return resp;
      }).catch(function(){
        return caches.match(e.request);
      })
    );
  } else {
    // Cache first, network fallback
    e.respondWith(
      caches.match(e.request).then(function(cached){
        return cached || fetch(e.request).then(function(resp){
          var clone = resp.clone();
          caches.open(CACHE).then(function(c){ c.put(e.request, clone); });
          return resp;
        });
      })
    );
  }
});
