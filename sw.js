const REPO = '/marketwatch';
const CACHE = 'leos-marketwatch-v1';
const ASSETS = [
  REPO + '/',
  REPO + '/index.html',
  REPO + '/manifest.json',
  REPO + '/icons/icon-192.png',
  REPO + '/icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Sora:wght@300;400;500;600&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.url.includes('/api/')) {
    e.respondWith(
      fetch(e.request).catch(() => new Response('{"error":"offline"}', {
        headers: { 'Content-Type': 'application/json' }
      }))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (!res || res.status !== 200 || res.type === 'opaque') return res;
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => caches.match(REPO + '/index.html'));
    })
  );
});
