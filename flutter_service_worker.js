'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4fc29f1d06c5ee63365c03a63b2bb049",
"assets/assets/data_1.json": "f52a796ae3d4dd63f1fbcecd730e3ddc",
"assets/assets/data_10.json": "c8899e662afade5db21e61a72fdf7b65",
"assets/assets/data_11.json": "f1f48601599e61fc10ac9cd7c2727c34",
"assets/assets/data_12.json": "89bfcf97c7fd3a9a0d8b518a2fc44f29",
"assets/assets/data_13.json": "27bb443ff1ab2cf01d520dc7e57e4fb6",
"assets/assets/data_14.json": "aacb5f03337bef1fcb7d406a4420204e",
"assets/assets/data_15.json": "a7dec6f3413e2a3d3e64646e22979973",
"assets/assets/data_16.json": "5a4de4ccb0ac034c6f0a5d7064ed15c3",
"assets/assets/data_17.json": "2fb37b410937cd3fc9a31b8903506441",
"assets/assets/data_18.json": "22ffba0df4df952c424dd6d5afe10b19",
"assets/assets/data_19.json": "fb13140be2d965a560400c2f2fb3dbd1",
"assets/assets/data_2.json": "ba083d009c02eca6f04455027325f51d",
"assets/assets/data_20.json": "e5fb276c3251ba23ca840555db3bd625",
"assets/assets/data_21.json": "7066be7233da9fdb29ade7459e5ce85c",
"assets/assets/data_22.json": "38d30a5feb2681954dcf77ab994e9894",
"assets/assets/data_23.json": "2c7c796383381a845c67f9ccab8be43e",
"assets/assets/data_24.json": "09d25240c45a63e51df38d22754e7d5a",
"assets/assets/data_25.json": "eaf7e3156a42d7dc58782118e8086f5d",
"assets/assets/data_26.json": "90839ab26df47d6420ff7dade7759e8a",
"assets/assets/data_27.json": "b755e9767d4ff26899c61dd3a43eba69",
"assets/assets/data_28.json": "93b6827037854c55eab5081a3b517ced",
"assets/assets/data_29.json": "7d15988c52713c293ef139a8e9d8a04c",
"assets/assets/data_3.json": "de313b4f565a2877d8b49fbea57b8d06",
"assets/assets/data_30.json": "9603a8306be2dd59a81911c5d7e868ef",
"assets/assets/data_31.json": "bdea7477d4b91e4308b1e59bdb5f3af7",
"assets/assets/data_4.json": "c1faec5b6dc631f47ab3c0591626809d",
"assets/assets/data_5.json": "325661889d37ae6234faaa04561cfead",
"assets/assets/data_6.json": "e62f39540788766c32b9138b6f8681a3",
"assets/assets/data_7.json": "4fb7bf8ed5c92c1867a6bef08a1748c3",
"assets/assets/data_8.json": "b4fd914382d032882f6c8d5213c25613",
"assets/assets/data_9.json": "b23cd29d64e3d7cf0600d6d24b718ff3",
"assets/assets/demo_data.json": "91f2f5e14aced5932f085f23d842ff65",
"assets/assets/presidents.json": "8d6eab681a9f9b86344243dddca52b58",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "705b27a18d6c9fbfd3fc51ce2835e20c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "f388b283b44c6ebb4213e67ccf07a5e4",
"icons/Icon-192.png": "bb9a20972abc55f58b83e0df757408ca",
"icons/Icon-512.png": "13306f54462386354d3438524ec01b29",
"index.html": "cd2b5021f3d506d179656dc6026e4b6b",
"/": "cd2b5021f3d506d179656dc6026e4b6b",
"main.dart.js": "63c1622c674ca929a9c5545aac41762a",
"manifest.json": "e9f98547f652e89bac8fd7d25494978f",
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
