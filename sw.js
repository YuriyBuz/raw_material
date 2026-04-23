// Цей файл обов'язковий для того, щоб браузер дозволив встановити додаток на екран (PWA)

self.addEventListener('install', (e) => {
    self.skipWaiting(); // Негайна активація
});

self.addEventListener('activate', (e) => {
    e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
    // Базова офлайн-підтримка (пропускає всі запити до мережі, 
    // якщо інтернету немає - просто ігнорує, щоб не викликати критичних помилок сторінки)
    e.respondWith(
        fetch(e.request).catch(() => {
            return new Response('Офлайн режим');
        })
    );
});
