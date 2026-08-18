/**
 * Service worker mínimo — cache-first para o shell da aplicação.
 *
 * O app é estático e todo o progresso vive no localStorage, então basta
 * manter os arquivos do build em cache para funcionar sem rede.
 */
const CACHE = 'preparatorio-cpa-v1'

self.addEventListener('install', (evento) => {
  evento.waitUntil(
    caches.open(CACHE).then((cache) =>
      cache.addAll(['./', './index.html', './manifest.webmanifest', './icon.svg']),
    ),
  )
  self.skipWaiting()
})

self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches
      .keys()
      .then((chaves) =>
        Promise.all(chaves.filter((c) => c !== CACHE).map((c) => caches.delete(c))),
      )
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (evento) => {
  const { request } = evento
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return

  evento.respondWith(
    caches.match(request).then((emCache) => {
      if (emCache) return emCache
      return fetch(request)
        .then((resposta) => {
          if (resposta.ok && resposta.type === 'basic') {
            const copia = resposta.clone()
            caches.open(CACHE).then((cache) => cache.put(request, copia))
          }
          return resposta
        })
        .catch(() => caches.match('./index.html'))
    }),
  )
})
