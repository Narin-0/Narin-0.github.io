'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a53491ba33870e68dce7c820b0867cda",
"assets/AssetManifest.bin.json": "bb5daa477ab092a8c1a34a960dc05d3a",
"assets/AssetManifest.json": "96d47c011a5a5aa71f9631b60049eb4e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2a06746da9102aaada9db4b537576553",
"assets/NOTICES": "5d22a63f29ceac24c364b1a949f50632",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "48edcedcf4dd519d2c70ee6cd3e2f5d2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ddeacfc9328446adf611f44dc2a15102",
"/": "ddeacfc9328446adf611f44dc2a15102",
"main.dart.js": "6b25387ce46054868a75e1ba962d4a36",
"manifest.json": "8cd25486b0708ee83043ed5a78cb032f",
"Narin-0.github.io/.git/COMMIT_EDITMSG": "223b46f098606c8f07a3d4b23b95c901",
"Narin-0.github.io/.git/config": "754c7240344fab4ab334d107eb8b5aaf",
"Narin-0.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"Narin-0.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"Narin-0.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"Narin-0.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"Narin-0.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"Narin-0.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"Narin-0.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"Narin-0.github.io/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"Narin-0.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"Narin-0.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"Narin-0.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"Narin-0.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"Narin-0.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"Narin-0.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"Narin-0.github.io/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"Narin-0.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"Narin-0.github.io/.git/index": "de2d8f03e4e2f994a873d8b78c21a979",
"Narin-0.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"Narin-0.github.io/.git/logs/HEAD": "39b02a87fa96e197b0f10de44f4b9e2c",
"Narin-0.github.io/.git/logs/refs/heads/main": "39b02a87fa96e197b0f10de44f4b9e2c",
"Narin-0.github.io/.git/logs/refs/remotes/origin/HEAD": "db0cff758c0759266f8421e290add289",
"Narin-0.github.io/.git/logs/refs/remotes/origin/main": "e705776e09ef27acffb90bd828b45461",
"Narin-0.github.io/.git/objects/pack/pack-6040fbfcaf79e3731655213d75c31152c4432e01.idx": "bb126c5ef48ba0a6d264b139e441a4e2",
"Narin-0.github.io/.git/objects/pack/pack-6040fbfcaf79e3731655213d75c31152c4432e01.pack": "76aa680e0383ba4410197b7b3a675034",
"Narin-0.github.io/.git/objects/pack/pack-6040fbfcaf79e3731655213d75c31152c4432e01.rev": "5f6bc5f4d3bb7f8ab384dd345d9e6047",
"Narin-0.github.io/.git/ORIG_HEAD": "a94b3a1c4cb182a8d7a66d768d8fa6d0",
"Narin-0.github.io/.git/packed-refs": "c915658ca204f485f740dab71acac083",
"Narin-0.github.io/.git/refs/heads/main": "19db287564c8396e50be3da6affdb37c",
"Narin-0.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"Narin-0.github.io/.git/refs/remotes/origin/main": "19db287564c8396e50be3da6affdb37c",
"Narin-0.github.io/assets/AssetManifest.bin": "a53491ba33870e68dce7c820b0867cda",
"Narin-0.github.io/assets/AssetManifest.bin.json": "bb5daa477ab092a8c1a34a960dc05d3a",
"Narin-0.github.io/assets/AssetManifest.json": "96d47c011a5a5aa71f9631b60049eb4e",
"Narin-0.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"Narin-0.github.io/assets/fonts/MaterialIcons-Regular.otf": "2a06746da9102aaada9db4b537576553",
"Narin-0.github.io/assets/NOTICES": "2bfa29e47d13cf474b461254c6cd0b7b",
"Narin-0.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"Narin-0.github.io/assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"Narin-0.github.io/assets/shaders/ink_sparkle.frag": "9bb2aaa0f9a9213b623947fa682efa76",
"Narin-0.github.io/canvaskit/canvaskit.js": "1e8033ea0c8c804771c1836fd07acb49",
"Narin-0.github.io/canvaskit/canvaskit.js.symbols": "310951580eb657840fae86f76f653452",
"Narin-0.github.io/canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"Narin-0.github.io/canvaskit/chromium/canvaskit.js": "10c40b740080c4eb9c1e074307482d39",
"Narin-0.github.io/canvaskit/chromium/canvaskit.js.symbols": "2bf18b9213f9fc9fb554c3890691f57c",
"Narin-0.github.io/canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"Narin-0.github.io/canvaskit/skwasm.js": "8cc11b1079ca8735f29263baafbf330a",
"Narin-0.github.io/canvaskit/skwasm.js.symbols": "2a35929fae90775f43ce38f8bab1697a",
"Narin-0.github.io/canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"Narin-0.github.io/canvaskit/skwasm_st.js": "9eeb36850f248a8e946442a13aaaa009",
"Narin-0.github.io/canvaskit/skwasm_st.js.symbols": "ca49a44a388ecfe66ba43dd851d2b76d",
"Narin-0.github.io/canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"Narin-0.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Narin-0.github.io/flutter.js": "18587c590e5c7a76f5c8fc8822445e17",
"Narin-0.github.io/flutter_bootstrap.js": "f323bd2a3a54972253bcb2f26dcecf18",
"Narin-0.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"Narin-0.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"Narin-0.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"Narin-0.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"Narin-0.github.io/index.html": "ddeacfc9328446adf611f44dc2a15102",
"Narin-0.github.io/main.dart.js": "1b0ab50958be2f2898ec85ecf14510df",
"Narin-0.github.io/manifest.json": "8cd25486b0708ee83043ed5a78cb032f",
"Narin-0.github.io/version.json": "fb356e19b6a95050b41aacf9a4c5794a",
"version.json": "fb356e19b6a95050b41aacf9a4c5794a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
