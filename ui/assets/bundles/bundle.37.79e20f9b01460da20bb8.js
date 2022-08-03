(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ws_vue_vue_type_style_index_0_id_636795b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ws_vue_vue_type_style_index_0_id_636795b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ws_vue_vue_type_style_index_0_id_636795b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ws_vue_vue_type_style_index_0_id_636795b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/developers/api/ws.vue?vue&type=template&id=636795b0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('docs',[_c('h1',[_vm._v("WebSockets")]),_vm._v(" "),_c('p',[_vm._v("\n      If you want to use real-time features, WebSockets are the way to go. We\n      generally recommend using this instead of HTTP connections if you plan to\n      make frequent requests or want to use our pub/sub endpoints.\n      "),_c('br'),_vm._v(" "),_c('br'),_vm._v("\n      Please keep in mind that every payload from the server and client is\n      expected to be JSON encoded.\n    ")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('h4',[_vm._v("Authenticated connection (Node.js)")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("const WebSocket = require('ws')\nconst ws = new WebSocket('wss://api.nexushub.co/ws', {\n  headers: {\n    authorization: `bearer ${access_token}`\n  }\n})\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('p',[_vm._v("\n      For more information on how to get an access token, check out the\n      "),_c('router-link',{attrs:{"to":"/developers/api/authentication"}},[_vm._v("\n        authentication guide\n      ")]),_vm._v(".\n    ")],1),_vm._v(" "),_c('h2',[_vm._v("Ping/Pong")]),_vm._v(" "),_c('p',[_vm._v("\n      In order to keep your client alive, it has to respond to pings from the\n      server. If no pong has been sent as a response within 45 seconds, the\n      connection is terminated.\n    ")]),_vm._v(" "),_c('h4',[_vm._v("Ping handler")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("ws.on('message', payload => {\n  payload = JSON.parse(payload)\n\n  if (typeof payload === 'string' && payload.startsWith('primus::ping::')) {\n    ws.send(JSON.stringify(payload.replace('ping', 'pong')))\n  }\n})\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('h2',[_vm._v("RESTful requests")]),_vm._v(" "),_c('p',[_vm._v("\n      Making RESTful requests is fairly straightforward. Set a request id counter\n      and send it alongside the request object. The response will then have the\n      same id.\n      "),_c('br'),_vm._v(" "),_c('br'),_vm._v("\n      Depending on your WebSocket implementation, we recommend tracking\n      all requests in an array that is checked in a "),_c('b',[_vm._v("single message event listener")]),_vm._v(".\n      The examples below create a listener for every request, which is not how\n      you'd want to do things. We merely demonstrate things this way for the sake\n      of clarity.\n    ")]),_vm._v(" "),_c('h4',[_vm._v("GET")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("let requestIds = 1\n\n// Request\nconst id = requestIds++\nws.send(JSON.stringify({\n  action: 'GET',\n  url: '/foo',\n  id\n}))\n\n// Response\nws.on('message', payload => {\n  payload = JSON.parse(payload)\n  if (payload.id === id) {\n    console.log(payload.body) // 'foo'\n  }\n})\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('h4',[_vm._v("POST")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("let requestIds = 1\n\n// Request\nconst id = requestIds++\nws.send(JSON.stringify({\n  action: 'POST',\n  url: '/post',\n  body: { foo: 'bar' },\n  id\n}))\n\n// Response\nws.on('message', payload => {\n  payload = JSON.parse(payload)\n  if (payload.id === id) {\n    console.log(payload.body) // { foo: 'bar' }\n  }\n})\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('h2',[_vm._v("Pub/Sub")]),_vm._v(" "),_c('p',[_vm._v("\n      For real-time data, you'll want to subscribe to Pub/Sub endpoints. Their\n      response format is usually the same as on a normal GET request.\n    ")]),_vm._v(" "),_c('h4',[_vm._v("Subscribe")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("ws.send(JSON.stringify({\n  action: 'SUBSCRIBE',\n  room: '/warframe/v1/orders/opm'\n}))\n\nws.on('message', payload => {\n  payload = JSON.parse(payload)\n  if (payload.room === '/warframe/v1/orders/opm') {\n    console.log(payload.data) // Logs orders per minute every time a new order comes in.\n  }\n})\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('h4',[_vm._v("Unsubscribe")]),_vm._v(" "),_c('pre',{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[_vm._v("      "),_c('code',{staticClass:"javascript"},[_vm._v("ws.send(JSON.stringify({\n  action: 'UNSUBSCRIBE',\n  room: '/warframe/v1/orders/opm'\n}))\n")]),_vm._v("\n    ")]),_vm._v(" "),_c('h2',[_vm._v("Full setup")]),_vm._v(" "),_c('p',[_vm._v("\n      If you need an overview for a full setup with automated authentication and\n      error handling, check out our implementation for\n      "),_c('a',{attrs:{"href":"https://github.com/cubic-js/cubic/tree/development/packages/client"}},[_vm._v("cubic-client")]),_vm._v(".\n    ")])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/developers/api/ws.vue?vue&type=template&id=636795b0&scoped=true&

// EXTERNAL MODULE: ./ui/sites/developers/api/index.vue + 9 modules
var api = __webpack_require__(119);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/developers/api/ws.vue?vue&type=script&lang=js&

/* harmony default export */ var wsvue_type_script_lang_js_ = ({
  components: {
    docs: api["default"]
  }
});
// CONCATENATED MODULE: ./ui/sites/developers/api/ws.vue?vue&type=script&lang=js&
 /* harmony default export */ var api_wsvue_type_script_lang_js_ = (wsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./ui/sites/developers/api/ws.vue?vue&type=style&index=0&id=636795b0&lang=scss&scoped=true&
var wsvue_type_style_index_0_id_636795b0_lang_scss_scoped_true_ = __webpack_require__(530);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./ui/sites/developers/api/ws.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  api_wsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "636795b0",
  null
  
)

/* harmony default export */ var ws = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);