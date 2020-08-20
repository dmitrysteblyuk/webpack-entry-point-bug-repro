Just run `yarn && npx webpack-dev-server`, go to `http://localhost:8080` and observe error in console.
The library will be an empty object.

Then run `npx webpack` and open manually `./dist/index.html` in a browser. Observe the alert reading all OK, no errors in console, library exists.

When you run `npx webpack-dev-server` you can check the `./dist/main.js`.
It will be like this:

```
/******/  // module exports must be returned from runtime so entry inlining is disabled
/******/  // startup
/******/  // Load entry module and return exports
/******/  __webpack_require__("./main-entry.js");
/******/  return __webpack_require__("./node_modules/webpack-dev-server/client/index.js?http://localhost:8080");
/******/ })()
;
```
