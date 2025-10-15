if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/serviceWorker.js').then(reg => {
            console.log('Service Worker registered', reg);
        }).catch(err => {
            console.error('Service Worker registration failed', err);
        });
        caches.open('edaverse-cache').then(cache => {
            cache.addAll([
                '/',
                '/index.html',
                '/App.js',
                'https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js',
                'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css'
            ]).catch(err => {
                console.error('Cache add failed', err);
            });
        });
    });
}

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
