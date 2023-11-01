const boveda = 'Boveda1';
self.addEventListener('install', e => {
    const recursos = caches.open(boveda).then(cache => {
        cache.add('/'),
        cache.add('index.html'),
        cache.add('personajes.html'),
        cache.add('Fiona.html'),
        cache.add('Frank.html'),
        cache.add('Carl.html'),
        cache.add('Chuckie.html'),
        cache.add('Ian.html'),
        cache.add('Jody.html'),
        cache.add('Kev.html'),
        cache.add('Mickey.html'),
        cache.add('Sheila.html'),
        cache.add('Svetlana.html'),
        cache.add('js/app.js'),
        cache.add('js/base.js'),
        cache.add('js/db.js'),
        cache.add('js/pouch-nightly.js'),
        cache.add('css/style.css'),
        cache.add('css/style2.css'),
        cache.add('css/style3.css'),
        cache.add('sw.js'),
        cache.add('manifest.json'),
        cache.add('img/Carcel.ico'),
        cache.add('img/default.jpeg'),
        cache.add('img/Fondo.png'),
        cache.add('img/Shameless.png'),
        cache.add('img/T1/Fiona.jpg'),
        cache.add('img/T1/Ian.webp'),
        cache.add('img/T2/carl.jpg'),
        cache.add('img/T2/Frank.jpg'),
        cache.add('img/T3/Mickey.jpg'),
        cache.add('img/T3/Sheila.webp'),
        cache.add('img/T4/Chuckie.webp'),
        cache.add('img/T4/Kev.webp'),
        cache.add('img/T5/Jody.webp'),
        cache.add('img/T5/Svetlana.jpg'),
        cache.add('icons/32x32.png'),
        cache.add('icons/48x48.png'),
        cache.add('icons/64x64.png'),
        cache.add('icons/72x72.png')
        cache.add('icons/96x96.png'),
        cache.add('icons/128x128.png'),
        cache.add('icons/256x256.png'),
        cache.add('icons/512x512.png')
    e.waitUntil(recursos);
})

// self.addEventListener('fetch', e => {
//   //estrategia 1, acceso solo al cache
//   const respuesta = caches.match(e.request)
//       .then(res => {
//           if (res) return res;
//           console.log('No existe el recurso de caché ->', e.request.url);
//           return fetch(e.request).then(newResp => {
//               caches.open(boveda)
//                   .then(cache => {
//                       cache.put(e.request, newResp)
//                   });
//           });
//       });
//   e.respondWith(respuesta);
// })

//estrategia 3 first network then cache
self.addEventListener('fetch', e => {
    const respuesta = fetch(e.request).then((newResp) => {
        caches.open(boveda)
            .then((cache) => {
                cache.put(e.request, newResp)
            });
        return newResp.clone();
    }).catch(err => {
        return caches.match(e.request);
    })
    e.respondWith(respuesta);
});

//descargar iconos de 24x24, 48x48, 128x128, 256x256 para el manifest
})