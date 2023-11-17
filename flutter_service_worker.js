'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/asset/cosmeticerr/757575.jpg": "c24d291b89d05130181ec24c219571b8",
"assets/asset/cosmeticerr/757575.svg": "db2304ad281e80c30519d25a0ab12c5c",
"assets/asset/cosmeticerr/e5e5ec.png": "bf0eedf59f8f6153b186a71bf8630403",
"assets/asset/cosmeticerr/e5e5ec.svg": "f898ddfbacae442947b571d61fafb076",
"assets/asset/cosmeticerr/e5e5ec30.jpg": "0e5178b86b277141d18a63817c7d9b59",
"assets/asset/cosmeticerr/e5e5ec40.jpg": "ea526194861ad99e4b53f7e0b3a50de9",
"assets/asset/font/NaverNanumSquare/NanumSquareEB.otf": "702510f5ef52748fed5abad03e0946d3",
"assets/asset/font/NaverNanumSquare/NanumSquareR.otf": "94caf6ad65d567bf536b3dfc12d1ae81",
"assets/asset/font/Noto_Sans_KR/NotoSansKR-Black.otf": "05c077164c27fa722dcafe63ed38355e",
"assets/asset/font/Noto_Sans_KR/NotoSansKR-Bold.otf": "e2406ff1791c401bc93e73d9e44e6d2b",
"assets/asset/font/Noto_Sans_KR/NotoSansKR-Medium.otf": "32666ae307200b0bcab5553590672bb1",
"assets/asset/font/Noto_Sans_KR/NotoSansKR-Regular.otf": "210989664066c01d8ffdbdf56bb773cd",
"assets/asset/font/roboto/Roboto-Bold.ttf": "36b5bab58a18b9c924861a4ccbf1a790",
"assets/asset/font/roboto/Roboto-Medium.ttf": "9745415b8a2a8b9a2480a12f7e2d3ad3",
"assets/asset/font/roboto/Roboto-Regular.ttf": "5673da52c98bb6cb33ada5aaf649703e",
"assets/asset/icon/0.svg": "dc58c7d6c71f687692b2983f250eb664",
"assets/asset/icon/1.svg": "c49059bbb68eb0bd3b84d6d9d11b7b70",
"assets/asset/icon/2.svg": "224e2feebb4ddb0f71706797ad2c3b79",
"assets/asset/icon/3.svg": "c57560f4dea6128d4f8222420ae2ef9d",
"assets/asset/icon/4.svg": "ab7e42ae6a3b6db1b90b7cc3e3eac22c",
"assets/asset/icon/5.svg": "a386f8c9d4de0215ad0b019ffb3ac4eb",
"assets/asset/icon/6.svg": "a02760ac4f47f9e8bd8378644cd01ba1",
"assets/asset/icon/7.svg": "595eff6037463c48bdc6e195a9d51e32",
"assets/asset/image/apple.svg": "4b0acf7798e990b473bcbe4ceb072147",
"assets/asset/image/arrow.svg": "8118a162665bb1652aaf2b73afc52c85",
"assets/asset/image/camera_icon.svg": "5ecba851129f17a32562cb4af38528c1",
"assets/asset/image/content.svg": "9a1c9e190ebd3ae1841e0934aa1c4a1a",
"assets/asset/image/data1.jpg": "05a1b21f6220ee841f85602c9f61f370",
"assets/asset/image/data2.jpg": "9152eaf890e0c4545b8a890400491339",
"assets/asset/image/delivery1.png": "00cb2bb1fa4cf898c7f32c83cb5ac46c",
"assets/asset/image/delivery1.svg": "690da75e449198ce6a8af567374bee18",
"assets/asset/image/delivery2.png": "d4ee139014d66408595e4e4641fa0edc",
"assets/asset/image/delivery2.svg": "eb8471d88d9cbc6dcb5f626864027740",
"assets/asset/image/delivery2_gray.svg": "37706fc822189e417ba271a40196d9ab",
"assets/asset/image/delivery3.png": "3d26022946c3fa9a738739f047924e54",
"assets/asset/image/delivery3.svg": "96a189d8d12ea36ae261256ddb894433",
"assets/asset/image/dog_default.svg": "6ec581076c85c7540fa514e992429fa7",
"assets/asset/image/dog_photo.svg": "23d013454746f29db85568ae0d243390",
"assets/asset/image/facebook.svg": "96f86839710a883ec9dd79941741c402",
"assets/asset/image/gallery_arrow.svg": "bc718aa070c122ec1d7d273cfaf17df6",
"assets/asset/image/goods_compare_symbol.svg": "98a36ea05889ddc3745f96d40d585013",
"assets/asset/image/goods_sample_image.png": "d7d35803eceb35267d858e19f1b855c7",
"assets/asset/image/google.svg": "13f4dd83c4ff3610c7e6f1998a7f801c",
"assets/asset/image/google_logo.svg": "4eb347962ced831224d0b80b81b002f9",
"assets/asset/image/heart_symbol.svg": "477aae84d580c039f132fc269b45b460",
"assets/asset/image/image_add_icon.svg": "758ec96516493ea28e8c1613b9b8311e",
"assets/asset/image/kakaotalk.svg": "5b3937fc6627a3bf2d5bbf9a826dab9f",
"assets/asset/image/like.svg": "f463899bf0aa584f3cf6d402159ed22d",
"assets/asset/image/logo.svg": "737240c8146004bc4810362ea8ee56e3",
"assets/asset/image/minas.svg": "6f4cfc416b477cb27654f083b81837cb",
"assets/asset/image/mypage_add.svg": "82c1ebc88a831a61695d166b4e065d5d",
"assets/asset/image/naver.svg": "ad6364a880e918ce3120e80c43c82089",
"assets/asset/image/naver_logo.svg": "27c619b8d3a6d0972a8490d8ff89c5a0",
"assets/asset/image/notification_emoji.png": "1e043d5cb1fb31302bac6e01104397ba",
"assets/asset/image/picture.svg": "724e3a4702ef58efba5e623e24a8793d",
"assets/asset/image/plus.svg": "b377add021a52034c37f1a91da189e68",
"assets/asset/image/safe1.svg": "19ed6ebc9c92f6ec7194df2315852d68",
"assets/asset/image/safe2.svg": "815b946401a21710c5a8a7b0c390c2d2",
"assets/asset/image/safe3.svg": "8e5515e8eafdf30f0030c9e1d7b7cdc5",
"assets/asset/image/safe4.svg": "b8037216542fe72cd446e07375acdf69",
"assets/asset/image/safe_emoji.png": "b49831ca2735bf5445253cf043ad160c",
"assets/asset/image/safe_symbol.svg": "501a20fb4f36a7648925e6091c64564d",
"assets/asset/image/search.svg": "a284b7f6615ef1709a48bb777b5f9fba",
"assets/asset/image/star.svg": "8486194ced81bde6d960538ffed63cf6",
"assets/asset/launch/lauch.gif": "27ad172df9b88a4c4f3851a09f017384",
"assets/asset/launch/launch.png": "16bf29e9840d10df5d8ce8fd964bc068",
"assets/AssetManifest.json": "8c3866ef6537fde4119932cb53524453",
"assets/FontManifest.json": "b31f0a1f6a741b8ce2eda5db48f70dd2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "e7474c4ca307ca734b431811debc1aed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/kpostal/assets/kakao_postcode_localhost.html": "27eb159f48fb5b0af42e06afe3998688",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator.gif": "ce0141cf86895cf948736c923fa92ade",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator_small.gif": "502a31bacaa2182d511eb4866354fbab",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator.gif": "3990e106caf3029a36788b9b58a86b41",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator_small.gif": "05ffb16f4f31cf9941a8295740476ee1",
"assets/packages/loading_gifs/assets/images/placeholder_empty.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "686e235f5f87f69a5e93d4499d3bc989",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "caa4a78fca5e3543e002ab1d26e16b4b",
"icons/Icon-512.png": "2faacf4f295f88d4e77339475580458d",
"icons/Icon-maskable-192.png": "caa4a78fca5e3543e002ab1d26e16b4b",
"icons/Icon-maskable-512.png": "2faacf4f295f88d4e77339475580458d",
"index.html": "ea02ac34f0338994a25144ec44aab5c0",
"/": "ea02ac34f0338994a25144ec44aab5c0",
"main.dart.js": "146bbe376607dcf5749ba0331ce783fc",
"manifest.json": "9b9230101d0f9f96497f890c114be8ce",
"splash/img/dark-1x.png": "33fadbe87212b1f439dcad223825e525",
"splash/img/dark-2x.png": "995d95aed8438ee1230942abdcfdbff9",
"splash/img/dark-3x.png": "bdb6fc648dedbb27e7b0832a0ec89eb0",
"splash/img/dark-4x.png": "f8815f067c2683fd67639746599f8c0b",
"splash/img/light-1x.png": "33fadbe87212b1f439dcad223825e525",
"splash/img/light-2x.png": "995d95aed8438ee1230942abdcfdbff9",
"splash/img/light-3x.png": "bdb6fc648dedbb27e7b0832a0ec89eb0",
"splash/img/light-4x.png": "f8815f067c2683fd67639746599f8c0b",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "0547575a914b641f91314bc1c5a0eeee",
"version.json": "2f2ed0546b51af403e10101287d237bb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
