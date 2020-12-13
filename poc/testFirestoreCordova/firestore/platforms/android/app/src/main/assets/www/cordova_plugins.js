cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-firestore.Firestore",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/firestore.js",
      "pluginId": "cordova-plugin-firestore",
      "clobbers": [
        "Firestore"
      ]
    },
    {
      "id": "cordova-plugin-firestore.collection_reference",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/collection_reference.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.query",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/query.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.document_reference",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/document_reference.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.document_snapshot",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/document_snapshot.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.query_snapshot",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/query_snapshot.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.query_document_snapshot",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/query_document_snapshot.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.firestore_timestamp",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/firestore_timestamp.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.transaction",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/transaction.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.utilities",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/utilities.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.geo_point",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/geo_point.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.path",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/path.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-firestore.utils",
      "file": "plugins/cordova-plugin-firestore/www/android_ios/utils.js",
      "pluginId": "cordova-plugin-firestore"
    },
    {
      "id": "cordova-plugin-buildinfo.BuildInfo",
      "file": "plugins/cordova-plugin-buildinfo/www/buildinfo.js",
      "pluginId": "cordova-plugin-buildinfo",
      "clobbers": [
        "BuildInfo"
      ]
    },
    {
      "id": "cordova-universal-links-plugin.universalLinks",
      "file": "plugins/cordova-universal-links-plugin/www/universal_links.js",
      "pluginId": "cordova-universal-links-plugin",
      "clobbers": [
        "universalLinks"
      ]
    },
    {
      "id": "cordova-plugin-browsertab.BrowserTab",
      "file": "plugins/cordova-plugin-browsertab/www/browsertab.js",
      "pluginId": "cordova-plugin-browsertab",
      "clobbers": [
        "cordova.plugins.browsertab"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-firestore": "4.1.1",
    "cordova-plugin-buildinfo": "4.0.0",
    "cordova-universal-links-plugin": "1.2.1",
    "cordova-plugin-browsertab": "0.2.0",
    "cordova-plugin-inappbrowser": "4.1.0"
  };
});