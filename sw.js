const CACHE = 'physique-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './favicon.ico',
  './favicon-32.png',
  './favicon-16.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // Network-first for external GIFs (exercise animations), cache-first for app shell
  const url = new URL(e.request.url);
  const isExternal = url.origin !== self.location.origin;

  if (isExternal) {
    // Try network, fall back to cache for GIFs/fonts
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    // Cache-first for local app shell
    e.respondWith(
      caches.match(e.request)
        .then(cached => {
          if (cached) return cached;
          return fetch(e.request).then(res => {
            if (res && res.status === 200) {
              const clone = res.clone();
              caches.open(CACHE).then(c => c.put(e.request, clone));
            }
            return res;
          }).catch(() => caches.match('./index.html'));
        })
    );
  }
});
