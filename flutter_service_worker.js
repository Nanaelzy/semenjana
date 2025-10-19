'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3bdd94c15dba306cf2c83062a38773fe",
"assets/AssetManifest.bin.json": "004c9c15169951b4499ca8ce9916794c",
"assets/AssetManifest.json": "d7559d4c9864986f3be583da032e9928",
"assets/assets/images/applepicnicshirt.jpg": "0a54d75e171432209d93db2dc8933142",
"assets/assets/images/celestialowlpurse.jpg": "9d97b6f5acc4e87901d5356b441f986a",
"assets/assets/images/doodlefishshirt.jpg": "65437b9cb43a0bec334052927414dc21",
"assets/assets/images/flattn240.png": "0ae6ec0c7f1bc228f24e4a7099d0b91f",
"assets/assets/images/greatwhitesharkshirt.jpg": "5c508928cb407ec3b2c0566ee8466d19",
"assets/assets/images/guardianheartpurse.jpg": "a3bac3c5201ad28c38c4d51de8fcf6bd",
"assets/assets/images/luckyfish.jpg": "cd1a5a581c10cdeec267abcd159ba2a5",
"assets/assets/images/mossseabunnytie.jpg": "ec559aa62cbbe4f339929f46d2524836",
"assets/assets/images/sakurafrisky.jpg": "4b72c0b9c4955a27efa2499965a1c9cf",
"assets/assets/images/springbreakfasttie.jpg": "3c765c3e107c359963d6bf62931fe182",
"assets/assets/images/starrykittentie.jpg": "c9e4b12eb5e0e54afc5a564f054dc4c1",
"assets/assets/images/sweetiebearpurse.jpg": "ce016981561c0885c3ed2a3b87800597",
"assets/assets/images/whalesharkshirt.jpg": "987c3515d53cbef5342d646f3ca30a36",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1d3879bed2fe4188b43dc445ad142aaa",
"assets/NOTICES": "85dee17509694e913221f6463e3686e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_angry.png": "39ff95cb505e7de942b8cff8288f057f",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_angry_disable.png": "0f16839adee48a6b8fb7ef70d806c849",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_angry_disable_dark.png": "ed4698614d15cb49e80afd0b7d6ca245",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_excellent.png": "9f1a00fdfcc735f1416bbd0138f1e3fc",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_excellent_disable.png": "40927a382e536b81a1f4b86507827411",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_excellent_disable_dark.png": "048f31eed594a5ba7892f2ff63734bc2",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_happy.png": "27d6af2a045ce9128efcf3ca95e9692d",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_happy_disable.png": "230e70e9f3cda43387a67091407f36f3",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_happy_disable_dark.png": "e8bbaff201c0ecd0e12cd5a934968f6a",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_neutral.png": "5cfe2c815c85599e28f1139c9937c0e2",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_neutral_disable.png": "d555f0295d3f1142705a91a0b2b15609",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_neutral_disable_dark.png": "39da30c68c0f7e3ee9b29f7dbccc8348",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_sad.png": "d867d0bd1b1a9eb7b361e2f0012bb60b",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_sad_disable.png": "c6d7327eec54dd6729401dc0fb97e2c5",
"assets/packages/rating_and_feedback_collector/assets/Images/ic_sad_disable_dark.png": "508201b1d00af7c19c110e53194e51e8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "5b50aedc6b13fa0d1418cfc989fffc17",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7fa73ab316a3a8a66b27d2e881d06725",
"/": "7fa73ab316a3a8a66b27d2e881d06725",
"main.dart.js": "4add1217c1187349fcdfe52e1b0ad166",
"manifest.json": "0eae913f251ba1c3f592ca6b2c1677aa",
"version.json": "e902241d0977d17340af457465362fde"};
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
