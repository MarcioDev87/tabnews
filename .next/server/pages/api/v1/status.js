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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function query(queryObject) {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client({\n        host: process.env.POSTGRES_HOST,\n        port: process.env.POSTGRES_PORT,\n        user: process.env.POSTGRES_USER,\n        database: process.env.POSTGRES_DB,\n        password: process.env.POSTGRES_PASSWORD\n    });\n    await client.connect();\n    try {\n        const result = await client.query(queryObject);\n        return result;\n    } catch (error) {\n        console.error(error);\n    } finally{\n        await client.end();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query: query\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZyYS9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QjtBQUNMO0FBRXZCLGVBQWVDLE1BQU1DLFdBQVcsRUFBRTtJQUNoQyxNQUFNQyxTQUFTLElBQUlILHNDQUFNQSxDQUFDO1FBQ3hCSSxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLGFBQWE7UUFDL0JDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtRQUMvQkMsTUFBTUwsUUFBUUMsR0FBRyxDQUFDSyxhQUFhO1FBQy9CQyxVQUFVUCxRQUFRQyxHQUFHLENBQUNPLFdBQVc7UUFDakNDLFVBQVVULFFBQVFDLEdBQUcsQ0FBQ1MsaUJBQWlCO0lBQ3pDO0lBQ0UsTUFBTVosT0FBT2EsT0FBTztJQUN0QixJQUFJO1FBQ0YsTUFBTUMsU0FBUyxNQUFNZCxPQUFPRixLQUFLLENBQUNDO1FBQ2xDLE9BQU9lO0lBQ1QsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7SUFDaEIsU0FBVTtRQUNSLE1BQU1mLE9BQU9pQixHQUFHO0lBQ2xCO0FBQ0Y7QUFFQSxpRUFBZTtJQUNibkIsT0FBT0E7QUFDVCxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWJuZXdzLy4vaW5mcmEvZGF0YWJhc2UuanM/ZTM5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdwZyc7XG5pbXBvcnQgJ2RvdGVudi9jb25maWcnO1xuXG5hc3luYyBmdW5jdGlvbiBxdWVyeShxdWVyeU9iamVjdCkge1xuICBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KHtcbiAgICBob3N0OiBwcm9jZXNzLmVudi5QT1NUR1JFU19IT1NULFxuICAgIHBvcnQ6IHByb2Nlc3MuZW52LlBPU1RHUkVTX1BPUlQsXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfVVNFUixcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfREIsXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlBPU1RHUkVTX1BBU1NXT1JELFxuICB9KTtcbiAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeShxdWVyeU9iamVjdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBhd2FpdCBjbGllbnQuZW5kKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgeyAgXG4gIHF1ZXJ5OiBxdWVyeSxcbn07XG4iXSwibmFtZXMiOlsiQ2xpZW50IiwicXVlcnkiLCJxdWVyeU9iamVjdCIsImNsaWVudCIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiUE9TVEdSRVNfSE9TVCIsInBvcnQiLCJQT1NUR1JFU19QT1JUIiwidXNlciIsIlBPU1RHUkVTX1VTRVIiLCJkYXRhYmFzZSIsIlBPU1RHUkVTX0RCIiwicGFzc3dvcmQiLCJQT1NUR1JFU19QQVNTV09SRCIsImNvbm5lY3QiLCJyZXN1bHQiLCJlcnJvciIsImNvbnNvbGUiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./infra/database.js\n");

/***/ }),

/***/ "(api)/./pages/api/v1/status/index.js":
/*!**************************************!*\
  !*** ./pages/api/v1/status/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _infra_database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../infra/database.js */ \"(api)/./infra/database.js\");\n\nasync function status(req, res) {\n    const updatedAt = new Date().toISOString();\n    const databaseVersionResult = await _infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SHOW server_version;\");\n    const databaseMaxConnectionsResult = await _infra_database_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query(\"SHOW max_connections;\");\n    res.status(200).json({\n        updated_at: updatedAt,\n        db_version: databaseVersionResult.rows[0].server_version,\n        max_connections: databaseMaxConnectionsResult.rows[0].max_connections\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (status);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdjEvc3RhdHVzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBDO0FBRTFDLGVBQWVDLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlCLE1BQU1DLFlBQVksSUFBSUMsT0FBT0MsV0FBVztJQUV4QyxNQUFNQyx3QkFBd0IsTUFBTVAsZ0VBQWMsQ0FBQztJQUNuRCxNQUFNUywrQkFBK0IsTUFBTVQsZ0VBQWMsQ0FDdkQ7SUFHRkcsSUFBSUYsTUFBTSxDQUFDLEtBQUtTLElBQUksQ0FBQztRQUNuQkMsWUFBWVA7UUFDWlEsWUFBWUwsc0JBQXNCTSxJQUFJLENBQUMsRUFBRSxDQUFDQyxjQUFjO1FBQ3hEQyxpQkFBaUJOLDZCQUE2QkksSUFBSSxDQUFDLEVBQUUsQ0FBQ0UsZUFBZTtJQUN2RTtBQUNGO0FBRUEsaUVBQWVkLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWJuZXdzLy4vcGFnZXMvYXBpL3YxL3N0YXR1cy9pbmRleC5qcz84NGRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRhYmFzZSBmcm9tICcvaW5mcmEvZGF0YWJhc2UuanMnO1xuXG5hc3luYyBmdW5jdGlvbiBzdGF0dXMocmVxLCByZXMpIHtcbiAgY29uc3QgdXBkYXRlZEF0ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuXG4gIGNvbnN0IGRhdGFiYXNlVmVyc2lvblJlc3VsdCA9IGF3YWl0IGRhdGFiYXNlLnF1ZXJ5KCdTSE9XIHNlcnZlcl92ZXJzaW9uOycpO1xuICBjb25zdCBkYXRhYmFzZU1heENvbm5lY3Rpb25zUmVzdWx0ID0gYXdhaXQgZGF0YWJhc2UucXVlcnkoXG4gICAgJ1NIT1cgbWF4X2Nvbm5lY3Rpb25zOycsXG4gICk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgIHVwZGF0ZWRfYXQ6IHVwZGF0ZWRBdCxcbiAgICBkYl92ZXJzaW9uOiBkYXRhYmFzZVZlcnNpb25SZXN1bHQucm93c1swXS5zZXJ2ZXJfdmVyc2lvbixcbiAgICBtYXhfY29ubmVjdGlvbnM6IGRhdGFiYXNlTWF4Q29ubmVjdGlvbnNSZXN1bHQucm93c1swXS5tYXhfY29ubmVjdGlvbnMsXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdGF0dXM7XG4iXSwibmFtZXMiOlsiZGF0YWJhc2UiLCJzdGF0dXMiLCJyZXEiLCJyZXMiLCJ1cGRhdGVkQXQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJkYXRhYmFzZVZlcnNpb25SZXN1bHQiLCJxdWVyeSIsImRhdGFiYXNlTWF4Q29ubmVjdGlvbnNSZXN1bHQiLCJqc29uIiwidXBkYXRlZF9hdCIsImRiX3ZlcnNpb24iLCJyb3dzIiwic2VydmVyX3ZlcnNpb24iLCJtYXhfY29ubmVjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/v1/status/index.js\n");

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