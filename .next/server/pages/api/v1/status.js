"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/v1/status";
exports.ids = ["pages/api/v1/status"];
exports.modules = {

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./infra/database.js":
/*!***************************!*\
  !*** ./infra/database.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function query(queryObject) {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client({\n        host: process.env.POSTGRES_HOST,\n        port: process.env.POSTGRES_PORT,\n        user: process.env.POSTGRES_USER,\n        database: process.env.POSTGRES_DB,\n        password: process.env.POSTGRES_PASSWORD\n    });\n    await client.connect();\n    const result = await client.query(queryObject);\n    await client.end();\n    return result;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: query\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZyYS9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QjtBQUNMO0FBRXZCLGVBQWVDLE1BQU1DLFdBQVcsRUFBRTtJQUNsQyxNQUFNQyxTQUFTLElBQUlILHNDQUFNQSxDQUFFO1FBQ3ZCSSxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLGFBQWE7UUFDL0JDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtRQUMvQkMsTUFBTUwsUUFBUUMsR0FBRyxDQUFDSyxhQUFhO1FBQy9CQyxVQUFVUCxRQUFRQyxHQUFHLENBQUNPLFdBQVc7UUFDakNDLFVBQVVULFFBQVFDLEdBQUcsQ0FBQ1MsaUJBQWlCO0lBQzNDO0lBQ0MsTUFBTVosT0FBT2EsT0FBTztJQUNwQixNQUFNQyxTQUFTLE1BQU1kLE9BQU9GLEtBQUssQ0FBQ0M7SUFDbEMsTUFBTUMsT0FBT2UsR0FBRztJQUNoQixPQUFPRDtBQUNSO0FBRUEsaUVBQWU7SUFDWGhCLE9BQU9BO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RhYm5ld3MvLi9pbmZyYS9kYXRhYmFzZS5qcz9lMzliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gXCJwZ1wiO1xuaW1wb3J0IFwiZG90ZW52L2NvbmZpZ1wiO1xuXG5hc3luYyBmdW5jdGlvbiBxdWVyeShxdWVyeU9iamVjdCkge1xuY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCAoe1xuICAgIGhvc3Q6IHByb2Nlc3MuZW52LlBPU1RHUkVTX0hPU1QsXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfUE9SVCxcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5QT1NUR1JFU19VU0VSLFxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5QT1NUR1JFU19EQixcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfUEFTU1dPUkQsXG59KTtcbiBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xuIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeShxdWVyeU9iamVjdClcbiBhd2FpdCBjbGllbnQuZW5kKCk7XG4gcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHF1ZXJ5OiBxdWVyeSxcbn0iXSwibmFtZXMiOlsiQ2xpZW50IiwicXVlcnkiLCJxdWVyeU9iamVjdCIsImNsaWVudCIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiUE9TVEdSRVNfSE9TVCIsInBvcnQiLCJQT1NUR1JFU19QT1JUIiwidXNlciIsIlBPU1RHUkVTX1VTRVIiLCJkYXRhYmFzZSIsIlBPU1RHUkVTX0RCIiwicGFzc3dvcmQiLCJQT1NUR1JFU19QQVNTV09SRCIsImNvbm5lY3QiLCJyZXN1bHQiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./infra/database.js\n");

/***/ }),

/***/ "(api)/./pages/api/v1/status/index.js":
/*!**************************************!*\
  !*** ./pages/api/v1/status/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _infra_database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../infra/database.js */ \"(api)/./infra/database.js\");\n\nasync function status(req, res) {\n    const result = await _infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SELECT 1 + 1 as soma;\");\n    console.log(result.rows);\n    res.status(200).json({\n        status: \"alunos do curso.dev s\\xe3o pessoas acima da m\\xe9dia\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (status);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBDO0FBRTFDLGVBQWVDLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlCLE1BQU1DLFNBQVMsTUFBTUosZ0VBQWMsQ0FBQztJQUNwQ00sUUFBUUMsR0FBRyxDQUFDSCxPQUFPSSxJQUFJO0lBQ3ZCTCxJQUNHRixNQUFNLENBQUMsS0FDUFEsSUFBSSxDQUFDO1FBQUVSLFFBQVE7SUFBaUQ7QUFDckU7QUFFQSxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RhYm5ld3MvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzPzg0ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGFiYXNlIGZyb20gXCIvaW5mcmEvZGF0YWJhc2UuanNcIjtcblxuYXN5bmMgZnVuY3Rpb24gc3RhdHVzKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRhdGFiYXNlLnF1ZXJ5KFwiU0VMRUNUIDEgKyAxIGFzIHNvbWE7XCIpO1xuICBjb25zb2xlLmxvZyhyZXN1bHQucm93cyk7XG4gIHJlc1xuICAgIC5zdGF0dXMoMjAwKVxuICAgIC5qc29uKHsgc3RhdHVzOiBcImFsdW5vcyBkbyBjdXJzby5kZXYgc8OjbyBwZXNzb2FzIGFjaW1hIGRhIG3DqWRpYVwiIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGF0dXM7XG4iXSwibmFtZXMiOlsiZGF0YWJhc2UiLCJzdGF0dXMiLCJyZXEiLCJyZXMiLCJyZXN1bHQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJyb3dzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/status/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/v1/status/index.js"));
module.exports = __webpack_exports__;

})();