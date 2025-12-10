'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d01fec818becc9052b0ba7cff9a9bd5e",
"version.json": "866ea5c685e442a1ccc29de07b7dcdec",
"index.html": "70244a563435c88ab87fe823c6b38806",
"/": "70244a563435c88ab87fe823c6b38806",
"main.dart.js": "d9ff4b65cc2daf4fc36ee3617f7f2f97",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "8ff22b63489f128bcadfa82783a4bc5e",
"icons/Icon-192.png": "b876475bdc33a579691fdf083f2b470f",
"icons/Icon-maskable-192.png": "42d8f5df74d2d566f2e451ca163e81c1",
"icons/Icon-maskable-512.png": "5d26cbbf897b819c7333c556db9afde1",
"icons/Icon-512.png": "c88561cebcb63a69f4ab4cf77a9ac6a2",
"manifest.json": "6fed411f6578f03b0f730ca301614371",
".git/config": "77129d38be7ed084ecaee5d92b6c71e1",
".git/objects/59/c25cf6ff2015c2ed3dfc359958d1ceb3818f84": "9dcc8b4d80692f534ae50bdad9611c59",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/9e/2e0a036e3ebba44a0223c37904df90c6335f2e": "01cc02ff998da2dbd348ec305f3d0a0e",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/51/515e323f9582e8bee03b59f631dcd572a3e7f5": "bf6a6a9088ab02e9f4f137bbce4d81e5",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/60/0a98f87ea826a5e24c434cf2dd88cf6f38f49b": "b077637f849d120e5d63006ad06d7ebe",
".git/objects/b2/1f5fd1ac78fff661f035fb111224a1076dbd14": "305631773554c2c3ddc2250ca8dfbef5",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/bd/085769e206a9b0aaee6f21c5edf10b90ca92c9": "1026d56b85e7c0ac57fa19fbd92581a6",
".git/objects/ae/541acb1ec2cc31c48b861f237b6882f1ea5fa1": "db74d9833003dd4c605a8ee06a43a860",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/eb/6e6c64edddd7a48ce35ccdc52f329832eff648": "8866f412a82941c0ca2f5ea57a981afd",
".git/objects/fd/aef00802d5cddba6e3a6b70d3a85ef25716cfc": "8fdbca9c5ac092cc1459d01df475b5de",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ed/ed35dc3e7f3cf4dbb07f70710a3adc2f48c324": "68d26588ee0cac34a525515acdce42a2",
".git/objects/27/f5b1bdc2f20332fb92cf99cd7fd703399d8d8f": "7ada2e2bcd749b2dc9aaa4129e3a3d7e",
".git/objects/4b/b5e645e597cef3ac774aecad7ea77abea81c32": "3fefdc3f03fc434f4841b6203a5267fc",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/8a/fa1d201be5cc2402268bf6a780902a22961cae": "4045aac926590c7d937e57363becbf31",
".git/objects/8a/e7136f7db9584643887bcbcf9bda0f027f7753": "5492d448155881fe7a55a348a1111f76",
".git/objects/10/4e80aef6d787c4ae840521e5596efe9bc87fcb": "ff6da2e9d4c087543a7d1f50e5797c39",
".git/objects/72/7df98965773d92b83ffab4551e0826612f354f": "38392b83ac4578c3aec7e686eb4fe94a",
".git/objects/2f/3449646da9c5fefabbc7d4c989329bf3966977": "361f46fb2ed8e116bae1a24cd6af1dac",
".git/objects/9f/615509de033ce0da0216fc1be3bf060c6a9194": "a1db21c5a4a708882977483deb86724c",
".git/objects/91/93da8ef97e3f3ba6eac88033ef84e33d154147": "91f9e3952193cc4b58722abda37d7089",
".git/objects/62/1338c47ccbcf5f7e01efbc95f7e3ef4a7d341f": "00845b3c879026d185f688feacb2fd2c",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/6c/e83c8751632e62bf77881fa4817b3fef3fc41a": "08edfa34350b8a5790bdd13f2020d469",
".git/objects/0a/e1b0719a6edf204fa25dabaa22e2cde8223e41": "a73c5fc0ff6f90d2fa4bb98ca5278f86",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/cca653116a68feb0c1e148e8d957d835882a21": "a51739aebf9b34a41ff40c00032e2c10",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c4/35321be10d912224d4cd6f5f6a2dd811ccb654": "6eb992664c5e7fac345458d2a28b8e64",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/2c/4fd85b271ce84094ce5fb9fe772ab561236719": "2451a7ee86f08cfa59953db381aae190",
".git/objects/79/f3edeef79646617c7c292ac4cefaf2b782fc05": "6ea323eb6695b8f85e7642ecd9eb077e",
".git/objects/2d/fc14aec8498ec880538378454e1d45034ab48e": "004774cf5b489b4bfc1742ba85ef532c",
".git/objects/48/6a31aed756b6de368d443cfaac498ddc0f70ed": "6ff81643788b5676ffbfa144f4755c21",
".git/objects/70/e0c56dadc08b7f308dc36817a53adba11a6bfd": "ba0dbffcc59a2d98f2bb1da032ea8cc7",
".git/objects/84/ba9f22fb1daeec9a82cbadd4e1372023525022": "d8e102906e147a650cd6241c4d985ed9",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/71/0649df881c3f527645e8749efca149a77da59d": "5210f1479ed729ede135af89bf8b1a89",
".git/objects/14/3d44228d0cbbf935c5039f1d18187fad0cf3b4": "87a4a9261b6dd81e5e3417a4a8ca16a2",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2b22aa4f55108d21f6f5f2ba577f6d1e",
".git/logs/refs/heads/gh-pages": "8dc4f5be70d6ab1a2bac6cd9470b24c6",
".git/logs/refs/remotes/origin/gh-pages": "35c5b3550e9a84dbdbf2df3f3a0e188a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "b7562555f53b8a5bca1547c0bf39e888",
".git/refs/remotes/origin/gh-pages": "b7562555f53b8a5bca1547c0bf39e888",
".git/index": "0bf1158b9ce34ea51bf6f46d2a18b513",
".git/COMMIT_EDITMSG": "4cf59c18ab600687a9d201bab7638a7d",
"assets/NOTICES": "ca57916850c79896a7729f5cc6e930ee",
"assets/FontManifest.json": "5cab42409df0354c216ad07395b41d38",
"assets/AssetManifest.bin.json": "fb10a76c9e79af780b3703fdd1c215e8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "b3bde4c23e380173dfba092151e1d991",
"assets/fonts/MaterialIcons-Regular.otf": "387d25913edf6df50a9e4a36e0a1ac90",
"assets/assets/images/logo.png": "a39aafab6212e3034199cd38aae3f434",
"assets/assets/fonts/NotoSansBengali-Regular.ttf": "864896e635a1c536461796fb1a2b4933",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
