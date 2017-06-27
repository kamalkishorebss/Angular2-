/**
 * Check out https://googlechrome.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.cacheFirst);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;


/*ionic2fbapp
kamalkishore273@gmail.com
APP ID: 1351244734953212

App Secret:267caf5807467d8743eac3fae68a6d78

http://www.amazon.in/Xiaomi-Redmi-4A-Gold-16GB/dp/B01FM7JZME/ref=sr_1_1?s=electronics&ie=UTF8&qid=1495443198&sr=1-1&keywords=mobile#HLCXComparisonWidget_feature_div*/