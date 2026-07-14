// Deliberately empty: exists only so the page can register a service worker,
// which some Chrome versions require before offering "Install app".
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
