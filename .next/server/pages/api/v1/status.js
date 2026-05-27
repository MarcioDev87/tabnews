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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function query(queryObject) {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client({\n        host: process.env.POSTGRES_HOST,\n        port: process.env.POSTGRES_PORT,\n        user: process.env.POSTGRES_USER,\n        database: process.env.POSTGRES_DB,\n        password: process.env.POSTGRES_PASSWORD\n    });\n    console.log(\"Credenciais do Postgres:\", {\n        host: process.env.POSTGRES_HOST,\n        port: process.env.POSTGRES_PORT,\n        user: process.env.POSTGRES_USER,\n        database: process.env.POSTGRES_DB,\n        password: process.env.POSTGRES_PASSWORD\n    });\n    try {\n        await client.connect();\n        const result = await client.query(queryObject);\n        return result;\n    } catch (error) {\n        console.error(error);\n        throw error;\n    } finally{\n        await client.end();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    query\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9pbmZyYS9kYXRhYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QjtBQUNMO0FBRXZCLGVBQWVDLE1BQU1DLFdBQVcsRUFBRTtJQUNoQyxNQUFNQyxTQUFTLElBQUlILHNDQUFNQSxDQUFDO1FBQ3hCSSxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLGFBQWE7UUFDL0JDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtRQUMvQkMsTUFBTUwsUUFBUUMsR0FBRyxDQUFDSyxhQUFhO1FBQy9CQyxVQUFVUCxRQUFRQyxHQUFHLENBQUNPLFdBQVc7UUFDakNDLFVBQVVULFFBQVFDLEdBQUcsQ0FBQ1MsaUJBQWlCO0lBQ3pDO0lBQ0FDLFFBQVFDLEdBQUcsQ0FBQyw0QkFBNEI7UUFDdENiLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYTtRQUMvQkMsTUFBTUgsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO1FBQy9CQyxNQUFNTCxRQUFRQyxHQUFHLENBQUNLLGFBQWE7UUFDL0JDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sV0FBVztRQUNqQ0MsVUFBVVQsUUFBUUMsR0FBRyxDQUFDUyxpQkFBaUI7SUFDekM7SUFFQSxJQUFJO1FBQ0YsTUFBTVosT0FBT2UsT0FBTztRQUNwQixNQUFNQyxTQUFTLE1BQU1oQixPQUFPRixLQUFLLENBQUNDO1FBQ2xDLE9BQU9pQjtJQUNULEVBQUUsT0FBT0MsT0FBTztRQUNkSixRQUFRSSxLQUFLLENBQUNBO1FBQ2QsTUFBTUEsTUFBTTtJQUNkLFNBQVU7UUFDUixNQUFNakIsT0FBT2tCLEdBQUc7SUFDbEI7QUFDRjtBQUVBLGlFQUFlO0lBQ2JwQjtBQUNGLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RhYm5ld3MvLi9pbmZyYS9kYXRhYmFzZS5qcz9lMzliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gJ3BnJztcbmltcG9ydCAnZG90ZW52L2NvbmZpZyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHF1ZXJ5KHF1ZXJ5T2JqZWN0KSB7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoe1xuICAgIGhvc3Q6IHByb2Nlc3MuZW52LlBPU1RHUkVTX0hPU1QsXG4gICAgcG9ydDogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfUE9SVCxcbiAgICB1c2VyOiBwcm9jZXNzLmVudi5QT1NUR1JFU19VU0VSLFxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5QT1NUR1JFU19EQixcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfUEFTU1dPUkQsXG4gIH0pO1xuICBjb25zb2xlLmxvZyhcIkNyZWRlbmNpYWlzIGRvIFBvc3RncmVzOlwiLCB7XG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuUE9TVEdSRVNfSE9TVCxcbiAgICBwb3J0OiBwcm9jZXNzLmVudi5QT1NUR1JFU19QT1JULFxuICAgIHVzZXI6IHByb2Nlc3MuZW52LlBPU1RHUkVTX1VTRVIsXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LlBPU1RHUkVTX0RCLFxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5QT1NUR1JFU19QQVNTV09SRCxcbiAgfSk7XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5xdWVyeShxdWVyeU9iamVjdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfSBmaW5hbGx5IHtcbiAgICBhd2FpdCBjbGllbnQuZW5kKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBxdWVyeSxcbn07XG4iXSwibmFtZXMiOlsiQ2xpZW50IiwicXVlcnkiLCJxdWVyeU9iamVjdCIsImNsaWVudCIsImhvc3QiLCJwcm9jZXNzIiwiZW52IiwiUE9TVEdSRVNfSE9TVCIsInBvcnQiLCJQT1NUR1JFU19QT1JUIiwidXNlciIsIlBPU1RHUkVTX1VTRVIiLCJkYXRhYmFzZSIsIlBPU1RHUkVTX0RCIiwicGFzc3dvcmQiLCJQT1NUR1JFU19QQVNTV09SRCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwicmVzdWx0IiwiZXJyb3IiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./infra/database.js\n");

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