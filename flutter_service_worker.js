'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "64038aabe52686cf38cfa9af36137ff1",
".git/config": "85c4b407f75aea929fd56bcd53639a23",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "f8b14ef6d8edd8c62c0c624ec91b36df",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "927aa78b07106d6d007adc288a93246b",
".git/logs/refs/heads/main": "7e036476d73f92c1a1530d189bbaac95",
".git/logs/refs/remotes/origin/main": "97f0f3a36e0ec95e8ed102c0007b0c0b",
".git/objects/03/22e82376cbe67fffee67b77a470bf4a5ba2547": "e34294f9e6634796ce05a2521b9d1df8",
".git/objects/16/3d3cebbb87daa595dbe4d965bd8c3afc1bf498": "69c220c91d7f4f2ec9c2528a098ab041",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2d/59ec8701e3e94104a4ac9eda15b221f5318855": "faa9434207600477e00987862da3021f",
".git/objects/31/ef91482a79f384c74b77a916f18a01ab39b7d4": "19e45034762a572f5fefd5aa6f5a3d49",
".git/objects/33/67dce895595710a46d1a5398a7e1474226535a": "75bfb9e17e519134c26bfa658d8ed77d",
".git/objects/33/a125246ce745baf065e4fa187ba878bf1c6afa": "ea082c6ed701f146f7eefdc17a008949",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/64f38badd7a151200d9b3f1b981de85bdb6077": "f1d0472419765be8c06014cebe6c8090",
".git/objects/57/aec1c9cd230827412f77276eab012f0409bf89": "0494da6f70d268c4066e3d03d75162f3",
".git/objects/67/c3beb9c0842418bcd86b47adced99bd234a1c0": "ef50d119137d65bc054beacdb0c75e89",
".git/objects/74/f17a21e000a3cfe522ae69a43b77c9a9e7dad1": "36ca1fd4e0792e5ecb1372eb2826076c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/86/79bbe2a2c39f2f791b23a1e8d2a2d2b33358af": "08815e744de8d29c7bc7e3dfaf9994b2",
".git/objects/88/1dd46780d291987ddb391cf03bd536ed5ea90b": "6c92349cdc4081169e328acb4cc3a79d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9f/3cbd712f79787af43f878d2f398b448cf4db29": "b028c3f2139b7acb6ccd735913b2e6bb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/b06835c64383c6d349edc06c45ddba40d6707e": "411f41bc2c07f6d50a39f3e30626f06c",
".git/objects/a3/b7e11fa5d51d3810aa0646439d93b4271d4d7b": "9112fe0f7b89bc1b77d0c1aed9d69b07",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/179037922fba5ed2ef3c792a91957a00df2f29": "ce0a4f26411849f8f4f29c260585070b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2ebd4c89cfe4aefab598935075f35e6d7af1a5": "78fb3eab1d3ac52e9370b042340394ba",
".git/objects/be/df9a47c49645ae2a9ed0b134fa39ba1ce68d74": "78b714de2864d616ff3a010135acadbe",
".git/objects/ce/b050d1d0fd28cd74eca0c9eaa1090da9771946": "2ebe0ec4668fa49ea73af8a006442f7a",
".git/objects/d0/de26e7f83649addc94086da0e76cf8bcd3027a": "a3fa7a75ab52b96c31dd49bb91112f97",
".git/objects/d4/32d6edaea462eb89dd51c7df369bc76ed9c5f3": "bb52ee5680219cf3befc160d0a9e5779",
".git/objects/e4/6c03dacfec8d723f369e9833ff58f871b5fd2e": "b12cfcfb77d0cfae4fb23fa68862e2d9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f6/755c36a2a0eb4c536abf3222155f71ce921aa0": "27a551b655da686e35681c03b5a5a347",
".git/objects/f7/74fc71d172d0c56bc65fdfc28dcd8a12d37d84": "ce6296a96f8acfed5f1a7412d46d565b",
".git/refs/heads/main": "3c570dfd3a63603079356b1081d0be9c",
".git/refs/remotes/origin/main": "3c570dfd3a63603079356b1081d0be9c",
"assets/AssetManifest.json": "614081ccbb570868fa33311c851e3e15",
"assets/assets/data.json": "b3b6d2056d83f7e80149db13acb8aecb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "04d174b988a894ef497c62ff75e6c707",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "158e3a06cbf19ce1f18e0871b83c5dab",
"/": "158e3a06cbf19ce1f18e0871b83c5dab",
"main.dart.js": "1aeb5dbb4b8127dca037b005cae945cc",
"manifest.json": "8825630ef0cac2a1145882f57ca94dfb",
"version.json": "9d544103688c7cb71f91cd1309b6693a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
