"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@smithy";
exports.ids = ["vendor-chunks/@smithy"];
exports.modules = {

/***/ "(ssr)/./node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FetchHttpHandler: () => (/* binding */ FetchHttpHandler),\n/* harmony export */   keepAliveSupport: () => (/* binding */ keepAliveSupport)\n/* harmony export */ });\n/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/protocol-http */ \"(ssr)/./node_modules/@smithy/protocol-http/dist-es/index.js\");\n/* harmony import */ var _smithy_querystring_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/querystring-builder */ \"(ssr)/./node_modules/@smithy/querystring-builder/dist-es/index.js\");\n/* harmony import */ var _request_timeout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./request-timeout */ \"(ssr)/./node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js\");\n\n\n\nconst keepAliveSupport = {\n    supported: Boolean(typeof Request !== \"undefined\" && \"keepalive\" in new Request(\"https://[::1]\")),\n};\nclass FetchHttpHandler {\n    static create(instanceOrOptions) {\n        if (typeof instanceOrOptions?.handle === \"function\") {\n            return instanceOrOptions;\n        }\n        return new FetchHttpHandler(instanceOrOptions);\n    }\n    constructor(options) {\n        if (typeof options === \"function\") {\n            this.configProvider = options().then((opts) => opts || {});\n        }\n        else {\n            this.config = options ?? {};\n            this.configProvider = Promise.resolve(this.config);\n        }\n    }\n    destroy() {\n    }\n    async handle(request, { abortSignal } = {}) {\n        if (!this.config) {\n            this.config = await this.configProvider;\n        }\n        const requestTimeoutInMs = this.config.requestTimeout;\n        const keepAlive = this.config.keepAlive === true;\n        if (abortSignal?.aborted) {\n            const abortError = new Error(\"Request aborted\");\n            abortError.name = \"AbortError\";\n            return Promise.reject(abortError);\n        }\n        let path = request.path;\n        const queryString = (0,_smithy_querystring_builder__WEBPACK_IMPORTED_MODULE_1__.buildQueryString)(request.query || {});\n        if (queryString) {\n            path += `?${queryString}`;\n        }\n        if (request.fragment) {\n            path += `#${request.fragment}`;\n        }\n        let auth = \"\";\n        if (request.username != null || request.password != null) {\n            const username = request.username ?? \"\";\n            const password = request.password ?? \"\";\n            auth = `${username}:${password}@`;\n        }\n        const { port, method } = request;\n        const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : \"\"}${path}`;\n        const body = method === \"GET\" || method === \"HEAD\" ? undefined : request.body;\n        const requestOptions = { body, headers: new Headers(request.headers), method: method };\n        if (typeof AbortController !== \"undefined\") {\n            requestOptions[\"signal\"] = abortSignal;\n        }\n        if (keepAliveSupport.supported) {\n            requestOptions[\"keepalive\"] = keepAlive;\n        }\n        const fetchRequest = new Request(url, requestOptions);\n        const raceOfPromises = [\n            fetch(fetchRequest).then((response) => {\n                const fetchHeaders = response.headers;\n                const transformedHeaders = {};\n                for (const pair of fetchHeaders.entries()) {\n                    transformedHeaders[pair[0]] = pair[1];\n                }\n                const hasReadableStream = response.body != undefined;\n                if (!hasReadableStream) {\n                    return response.blob().then((body) => ({\n                        response: new _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse({\n                            headers: transformedHeaders,\n                            reason: response.statusText,\n                            statusCode: response.status,\n                            body,\n                        }),\n                    }));\n                }\n                return {\n                    response: new _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse({\n                        headers: transformedHeaders,\n                        reason: response.statusText,\n                        statusCode: response.status,\n                        body: response.body,\n                    }),\n                };\n            }),\n            (0,_request_timeout__WEBPACK_IMPORTED_MODULE_2__.requestTimeout)(requestTimeoutInMs),\n        ];\n        if (abortSignal) {\n            raceOfPromises.push(new Promise((resolve, reject) => {\n                abortSignal.onabort = () => {\n                    const abortError = new Error(\"Request aborted\");\n                    abortError.name = \"AbortError\";\n                    reject(abortError);\n                };\n            }));\n        }\n        return Promise.race(raceOfPromises);\n    }\n    updateHttpClientConfig(key, value) {\n        this.config = undefined;\n        this.configProvider = this.configProvider.then((config) => {\n            config[key] = value;\n            return config;\n        });\n    }\n    httpHandlerConfigs() {\n        return this.config ?? {};\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9mZXRjaC1odHRwLWhhbmRsZXIvZGlzdC1lcy9mZXRjaC1odHRwLWhhbmRsZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUQ7QUFDVTtBQUNaO0FBQzVDO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGNBQWMsSUFBSTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZFQUFnQixvQkFBb0I7QUFDaEU7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQVMsR0FBRyxTQUFTO0FBQzNDO0FBQ0EsZ0JBQWdCLGVBQWU7QUFDL0IsdUJBQXVCLGlCQUFpQixJQUFJLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEtBQUssT0FBTyxFQUFFLEtBQUs7QUFDcEc7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywrREFBWTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGtDQUFrQywrREFBWTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYixZQUFZLGdFQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvZmV0Y2gtaHR0cC1oYW5kbGVyL2Rpc3QtZXMvZmV0Y2gtaHR0cC1oYW5kbGVyLmpzP2UxMTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBzbWl0aHkvcHJvdG9jb2wtaHR0cFwiO1xuaW1wb3J0IHsgYnVpbGRRdWVyeVN0cmluZyB9IGZyb20gXCJAc21pdGh5L3F1ZXJ5c3RyaW5nLWJ1aWxkZXJcIjtcbmltcG9ydCB7IHJlcXVlc3RUaW1lb3V0IH0gZnJvbSBcIi4vcmVxdWVzdC10aW1lb3V0XCI7XG5leHBvcnQgY29uc3Qga2VlcEFsaXZlU3VwcG9ydCA9IHtcbiAgICBzdXBwb3J0ZWQ6IEJvb2xlYW4odHlwZW9mIFJlcXVlc3QgIT09IFwidW5kZWZpbmVkXCIgJiYgXCJrZWVwYWxpdmVcIiBpbiBuZXcgUmVxdWVzdChcImh0dHBzOi8vWzo6MV1cIikpLFxufTtcbmV4cG9ydCBjbGFzcyBGZXRjaEh0dHBIYW5kbGVyIHtcbiAgICBzdGF0aWMgY3JlYXRlKGluc3RhbmNlT3JPcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2VPck9wdGlvbnM/LmhhbmRsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VPck9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBGZXRjaEh0dHBIYW5kbGVyKGluc3RhbmNlT3JPcHRpb25zKTtcbiAgICB9XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5jb25maWdQcm92aWRlciA9IG9wdGlvbnMoKS50aGVuKChvcHRzKSA9PiBvcHRzIHx8IHt9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnID0gb3B0aW9ucyA/PyB7fTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnUHJvdmlkZXIgPSBQcm9taXNlLnJlc29sdmUodGhpcy5jb25maWcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZShyZXF1ZXN0LCB7IGFib3J0U2lnbmFsIH0gPSB7fSkge1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IGF3YWl0IHRoaXMuY29uZmlnUHJvdmlkZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVxdWVzdFRpbWVvdXRJbk1zID0gdGhpcy5jb25maWcucmVxdWVzdFRpbWVvdXQ7XG4gICAgICAgIGNvbnN0IGtlZXBBbGl2ZSA9IHRoaXMuY29uZmlnLmtlZXBBbGl2ZSA9PT0gdHJ1ZTtcbiAgICAgICAgaWYgKGFib3J0U2lnbmFsPy5hYm9ydGVkKSB7XG4gICAgICAgICAgICBjb25zdCBhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiUmVxdWVzdCBhYm9ydGVkXCIpO1xuICAgICAgICAgICAgYWJvcnRFcnJvci5uYW1lID0gXCJBYm9ydEVycm9yXCI7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhdGggPSByZXF1ZXN0LnBhdGg7XG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gYnVpbGRRdWVyeVN0cmluZyhyZXF1ZXN0LnF1ZXJ5IHx8IHt9KTtcbiAgICAgICAgaWYgKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICAgICAgICBwYXRoICs9IGA/JHtxdWVyeVN0cmluZ31gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXF1ZXN0LmZyYWdtZW50KSB7XG4gICAgICAgICAgICBwYXRoICs9IGAjJHtyZXF1ZXN0LmZyYWdtZW50fWA7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGF1dGggPSBcIlwiO1xuICAgICAgICBpZiAocmVxdWVzdC51c2VybmFtZSAhPSBudWxsIHx8IHJlcXVlc3QucGFzc3dvcmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgdXNlcm5hbWUgPSByZXF1ZXN0LnVzZXJuYW1lID8/IFwiXCI7XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9IHJlcXVlc3QucGFzc3dvcmQgPz8gXCJcIjtcbiAgICAgICAgICAgIGF1dGggPSBgJHt1c2VybmFtZX06JHtwYXNzd29yZH1AYDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHBvcnQsIG1ldGhvZCB9ID0gcmVxdWVzdDtcbiAgICAgICAgY29uc3QgdXJsID0gYCR7cmVxdWVzdC5wcm90b2NvbH0vLyR7YXV0aH0ke3JlcXVlc3QuaG9zdG5hbWV9JHtwb3J0ID8gYDoke3BvcnR9YCA6IFwiXCJ9JHtwYXRofWA7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBtZXRob2QgPT09IFwiR0VUXCIgfHwgbWV0aG9kID09PSBcIkhFQURcIiA/IHVuZGVmaW5lZCA6IHJlcXVlc3QuYm9keTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7IGJvZHksIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHJlcXVlc3QuaGVhZGVycyksIG1ldGhvZDogbWV0aG9kIH07XG4gICAgICAgIGlmICh0eXBlb2YgQWJvcnRDb250cm9sbGVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICByZXF1ZXN0T3B0aW9uc1tcInNpZ25hbFwiXSA9IGFib3J0U2lnbmFsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZWVwQWxpdmVTdXBwb3J0LnN1cHBvcnRlZCkge1xuICAgICAgICAgICAgcmVxdWVzdE9wdGlvbnNbXCJrZWVwYWxpdmVcIl0gPSBrZWVwQWxpdmU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmV0Y2hSZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHJhY2VPZlByb21pc2VzID0gW1xuICAgICAgICAgICAgZmV0Y2goZmV0Y2hSZXF1ZXN0KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZldGNoSGVhZGVycyA9IHJlc3BvbnNlLmhlYWRlcnM7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtZWRIZWFkZXJzID0ge307XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYWlyIG9mIGZldGNoSGVhZGVycy5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtZWRIZWFkZXJzW3BhaXJbMF1dID0gcGFpclsxXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzUmVhZGFibGVTdHJlYW0gPSByZXNwb25zZS5ib2R5ICE9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc1JlYWRhYmxlU3RyZWFtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5ibG9iKCkudGhlbigoYm9keSkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBuZXcgSHR0cFJlc3BvbnNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB0cmFuc2Zvcm1lZEhlYWRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uOiByZXNwb25zZS5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IG5ldyBIdHRwUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogdHJhbnNmb3JtZWRIZWFkZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhc29uOiByZXNwb25zZS5zdGF0dXNUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogcmVzcG9uc2UuYm9keSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcmVxdWVzdFRpbWVvdXQocmVxdWVzdFRpbWVvdXRJbk1zKSxcbiAgICAgICAgXTtcbiAgICAgICAgaWYgKGFib3J0U2lnbmFsKSB7XG4gICAgICAgICAgICByYWNlT2ZQcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICBhYm9ydFNpZ25hbC5vbmFib3J0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhYm9ydEVycm9yID0gbmV3IEVycm9yKFwiUmVxdWVzdCBhYm9ydGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICBhYm9ydEVycm9yLm5hbWUgPSBcIkFib3J0RXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGFib3J0RXJyb3IpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmFjZShyYWNlT2ZQcm9taXNlcyk7XG4gICAgfVxuICAgIHVwZGF0ZUh0dHBDbGllbnRDb25maWcoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5jb25maWdQcm92aWRlciA9IHRoaXMuY29uZmlnUHJvdmlkZXIudGhlbigoY29uZmlnKSA9PiB7XG4gICAgICAgICAgICBjb25maWdba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGh0dHBIYW5kbGVyQ29uZmlncygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnID8/IHt9O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/fetch-http-handler/dist-es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@smithy/fetch-http-handler/dist-es/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FetchHttpHandler: () => (/* reexport safe */ _fetch_http_handler__WEBPACK_IMPORTED_MODULE_0__.FetchHttpHandler),\n/* harmony export */   keepAliveSupport: () => (/* reexport safe */ _fetch_http_handler__WEBPACK_IMPORTED_MODULE_0__.keepAliveSupport),\n/* harmony export */   streamCollector: () => (/* reexport safe */ _stream_collector__WEBPACK_IMPORTED_MODULE_1__.streamCollector)\n/* harmony export */ });\n/* harmony import */ var _fetch_http_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-http-handler */ \"(ssr)/./node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js\");\n/* harmony import */ var _stream_collector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stream-collector */ \"(ssr)/./node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9mZXRjaC1odHRwLWhhbmRsZXIvZGlzdC1lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFxQztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvZmV0Y2gtaHR0cC1oYW5kbGVyL2Rpc3QtZXMvaW5kZXguanM/MTUzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9mZXRjaC1odHRwLWhhbmRsZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3N0cmVhbS1jb2xsZWN0b3JcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/fetch-http-handler/dist-es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   requestTimeout: () => (/* binding */ requestTimeout)\n/* harmony export */ });\nfunction requestTimeout(timeoutInMs = 0) {\n    return new Promise((resolve, reject) => {\n        if (timeoutInMs) {\n            setTimeout(() => {\n                const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);\n                timeoutError.name = \"TimeoutError\";\n                reject(timeoutError);\n            }, timeoutInMs);\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9mZXRjaC1odHRwLWhhbmRsZXIvZGlzdC1lcy9yZXF1ZXN0LXRpbWVvdXQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLGFBQWE7QUFDL0Y7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L2ZldGNoLWh0dHAtaGFuZGxlci9kaXN0LWVzL3JlcXVlc3QtdGltZW91dC5qcz9jNjllIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0VGltZW91dCh0aW1lb3V0SW5NcyA9IDApIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZiAodGltZW91dEluTXMpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRFcnJvciA9IG5ldyBFcnJvcihgUmVxdWVzdCBkaWQgbm90IGNvbXBsZXRlIHdpdGhpbiAke3RpbWVvdXRJbk1zfSBtc2ApO1xuICAgICAgICAgICAgICAgIHRpbWVvdXRFcnJvci5uYW1lID0gXCJUaW1lb3V0RXJyb3JcIjtcbiAgICAgICAgICAgICAgICByZWplY3QodGltZW91dEVycm9yKTtcbiAgICAgICAgICAgIH0sIHRpbWVvdXRJbk1zKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   streamCollector: () => (/* binding */ streamCollector)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-base64 */ \"(ssr)/./node_modules/@smithy/util-base64/dist-es/index.js\");\n\nconst streamCollector = (stream) => {\n    if (typeof Blob === \"function\" && stream instanceof Blob) {\n        return collectBlob(stream);\n    }\n    return collectStream(stream);\n};\nasync function collectBlob(blob) {\n    const base64 = await readToBase64(blob);\n    const arrayBuffer = (0,_smithy_util_base64__WEBPACK_IMPORTED_MODULE_0__.fromBase64)(base64);\n    return new Uint8Array(arrayBuffer);\n}\nasync function collectStream(stream) {\n    let res = new Uint8Array(0);\n    const reader = stream.getReader();\n    let isDone = false;\n    while (!isDone) {\n        const { done, value } = await reader.read();\n        if (value) {\n            const prior = res;\n            res = new Uint8Array(prior.length + value.length);\n            res.set(prior);\n            res.set(value, prior.length);\n        }\n        isDone = done;\n    }\n    return res;\n}\nfunction readToBase64(blob) {\n    return new Promise((resolve, reject) => {\n        const reader = new FileReader();\n        reader.onloadend = () => {\n            if (reader.readyState !== 2) {\n                return reject(new Error(\"Reader aborted too early\"));\n            }\n            const result = (reader.result ?? \"\");\n            const commaIndex = result.indexOf(\",\");\n            const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;\n            resolve(result.substring(dataOffset));\n        };\n        reader.onabort = () => reject(new Error(\"Read aborted\"));\n        reader.onerror = () => reject(reader.error);\n        reader.readAsDataURL(blob);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9mZXRjaC1odHRwLWhhbmRsZXIvZGlzdC1lcy9zdHJlYW0tY29sbGVjdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlEO0FBQzFDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0RBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsY0FBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L2ZldGNoLWh0dHAtaGFuZGxlci9kaXN0LWVzL3N0cmVhbS1jb2xsZWN0b3IuanM/MTczYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcm9tQmFzZTY0IH0gZnJvbSBcIkBzbWl0aHkvdXRpbC1iYXNlNjRcIjtcbmV4cG9ydCBjb25zdCBzdHJlYW1Db2xsZWN0b3IgPSAoc3RyZWFtKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiYgc3RyZWFtIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICByZXR1cm4gY29sbGVjdEJsb2Ioc3RyZWFtKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbGxlY3RTdHJlYW0oc3RyZWFtKTtcbn07XG5hc3luYyBmdW5jdGlvbiBjb2xsZWN0QmxvYihibG9iKSB7XG4gICAgY29uc3QgYmFzZTY0ID0gYXdhaXQgcmVhZFRvQmFzZTY0KGJsb2IpO1xuICAgIGNvbnN0IGFycmF5QnVmZmVyID0gZnJvbUJhc2U2NChiYXNlNjQpO1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcik7XG59XG5hc3luYyBmdW5jdGlvbiBjb2xsZWN0U3RyZWFtKHN0cmVhbSkge1xuICAgIGxldCByZXMgPSBuZXcgVWludDhBcnJheSgwKTtcbiAgICBjb25zdCByZWFkZXIgPSBzdHJlYW0uZ2V0UmVhZGVyKCk7XG4gICAgbGV0IGlzRG9uZSA9IGZhbHNlO1xuICAgIHdoaWxlICghaXNEb25lKSB7XG4gICAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgcHJpb3IgPSByZXM7XG4gICAgICAgICAgICByZXMgPSBuZXcgVWludDhBcnJheShwcmlvci5sZW5ndGggKyB2YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgcmVzLnNldChwcmlvcik7XG4gICAgICAgICAgICByZXMuc2V0KHZhbHVlLCBwcmlvci5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGlzRG9uZSA9IGRvbmU7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiByZWFkVG9CYXNlNjQoYmxvYikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVhZGVyLnJlYWR5U3RhdGUgIT09IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIlJlYWRlciBhYm9ydGVkIHRvbyBlYXJseVwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSAocmVhZGVyLnJlc3VsdCA/PyBcIlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1hSW5kZXggPSByZXN1bHQuaW5kZXhPZihcIixcIik7XG4gICAgICAgICAgICBjb25zdCBkYXRhT2Zmc2V0ID0gY29tbWFJbmRleCA+IC0xID8gY29tbWFJbmRleCArIDEgOiByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQuc3Vic3RyaW5nKGRhdGFPZmZzZXQpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLm9uYWJvcnQgPSAoKSA9PiByZWplY3QobmV3IEVycm9yKFwiUmVhZCBhYm9ydGVkXCIpKTtcbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiByZWplY3QocmVhZGVyLmVycm9yKTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/is-array-buffer/dist-es/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@smithy/is-array-buffer/dist-es/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isArrayBuffer: () => (/* binding */ isArrayBuffer)\n/* harmony export */ });\nconst isArrayBuffer = (arg) => (typeof ArrayBuffer === \"function\" && arg instanceof ArrayBuffer) ||\n    Object.prototype.toString.call(arg) === \"[object ArrayBuffer]\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9pcy1hcnJheS1idWZmZXIvZGlzdC1lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L2lzLWFycmF5LWJ1ZmZlci9kaXN0LWVzL2luZGV4LmpzP2M1NGQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGlzQXJyYXlCdWZmZXIgPSAoYXJnKSA9PiAodHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCIgJiYgYXJnIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8XG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09IFwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/is-array-buffer/dist-es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/protocol-http/dist-es/Field.js":
/*!*************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/Field.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Field: () => (/* binding */ Field)\n/* harmony export */ });\n/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/types */ \"(ssr)/./node_modules/@smithy/types/dist-es/index.js\");\n\nclass Field {\n    constructor({ name, kind = _smithy_types__WEBPACK_IMPORTED_MODULE_0__.FieldPosition.HEADER, values = [] }) {\n        this.name = name;\n        this.kind = kind;\n        this.values = values;\n    }\n    add(value) {\n        this.values.push(value);\n    }\n    set(values) {\n        this.values = values;\n    }\n    remove(value) {\n        this.values = this.values.filter((v) => v !== value);\n    }\n    toString() {\n        return this.values.map((v) => (v.includes(\",\") || v.includes(\" \") ? `\"${v}\"` : v)).join(\", \");\n    }\n    get() {\n        return this.values;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9wcm90b2NvbC1odHRwL2Rpc3QtZXMvRmllbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7QUFDdkM7QUFDUCxrQkFBa0IsYUFBYSx3REFBYSxzQkFBc0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUFnRixFQUFFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9wcm90b2NvbC1odHRwL2Rpc3QtZXMvRmllbGQuanM/ZWMyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZFBvc2l0aW9uIH0gZnJvbSBcIkBzbWl0aHkvdHlwZXNcIjtcbmV4cG9ydCBjbGFzcyBGaWVsZCB7XG4gICAgY29uc3RydWN0b3IoeyBuYW1lLCBraW5kID0gRmllbGRQb3NpdGlvbi5IRUFERVIsIHZhbHVlcyA9IFtdIH0pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5raW5kID0ga2luZDtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgfVxuICAgIGFkZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgc2V0KHZhbHVlcykge1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICB9XG4gICAgcmVtb3ZlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMuZmlsdGVyKCh2KSA9PiB2ICE9PSB2YWx1ZSk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubWFwKCh2KSA9PiAodi5pbmNsdWRlcyhcIixcIikgfHwgdi5pbmNsdWRlcyhcIiBcIikgPyBgXCIke3Z9XCJgIDogdikpLmpvaW4oXCIsIFwiKTtcbiAgICB9XG4gICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXM7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/protocol-http/dist-es/Field.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/protocol-http/dist-es/Fields.js":
/*!**************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/Fields.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Fields: () => (/* binding */ Fields)\n/* harmony export */ });\nclass Fields {\n    constructor({ fields = [], encoding = \"utf-8\" }) {\n        this.entries = {};\n        fields.forEach(this.setField.bind(this));\n        this.encoding = encoding;\n    }\n    setField(field) {\n        this.entries[field.name.toLowerCase()] = field;\n    }\n    getField(name) {\n        return this.entries[name.toLowerCase()];\n    }\n    removeField(name) {\n        delete this.entries[name.toLowerCase()];\n    }\n    getByType(kind) {\n        return Object.values(this.entries).filter((field) => field.kind === kind);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9wcm90b2NvbC1odHRwL2Rpc3QtZXMvRmllbGRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQLGtCQUFrQixpQ0FBaUM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3Byb3RvY29sLWh0dHAvZGlzdC1lcy9GaWVsZHMuanM/Y2NjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRmllbGRzIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGZpZWxkcyA9IFtdLCBlbmNvZGluZyA9IFwidXRmLThcIiB9KSB7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IHt9O1xuICAgICAgICBmaWVsZHMuZm9yRWFjaCh0aGlzLnNldEZpZWxkLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmVuY29kaW5nID0gZW5jb2Rpbmc7XG4gICAgfVxuICAgIHNldEZpZWxkKGZpZWxkKSB7XG4gICAgICAgIHRoaXMuZW50cmllc1tmaWVsZC5uYW1lLnRvTG93ZXJDYXNlKCldID0gZmllbGQ7XG4gICAgfVxuICAgIGdldEZpZWxkKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllc1tuYW1lLnRvTG93ZXJDYXNlKCldO1xuICAgIH1cbiAgICByZW1vdmVGaWVsZChuYW1lKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmVudHJpZXNbbmFtZS50b0xvd2VyQ2FzZSgpXTtcbiAgICB9XG4gICAgZ2V0QnlUeXBlKGtpbmQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5lbnRyaWVzKS5maWx0ZXIoKGZpZWxkKSA9PiBmaWVsZC5raW5kID09PSBraW5kKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/protocol-http/dist-es/Fields.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHttpHandlerExtensionConfiguration: () => (/* binding */ getHttpHandlerExtensionConfiguration),\n/* harmony export */   resolveHttpHandlerRuntimeConfig: () => (/* binding */ resolveHttpHandlerRuntimeConfig)\n/* harmony export */ });\nconst getHttpHandlerExtensionConfiguration = (runtimeConfig) => {\n    let httpHandler = runtimeConfig.httpHandler;\n    return {\n        setHttpHandler(handler) {\n            httpHandler = handler;\n        },\n        httpHandler() {\n            return httpHandler;\n        },\n        updateHttpClientConfig(key, value) {\n            httpHandler.updateHttpClientConfig(key, value);\n        },\n        httpHandlerConfigs() {\n            return httpHandler.httpHandlerConfigs();\n        },\n    };\n};\nconst resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {\n    return {\n        httpHandler: httpHandlerExtensionConfiguration.httpHandler(),\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9wcm90b2NvbC1odHRwL2Rpc3QtZXMvZXh0ZW5zaW9ucy9odHRwRXh0ZW5zaW9uQ29uZmlndXJhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9wcm90b2NvbC1odHRwL2Rpc3QtZXMvZXh0ZW5zaW9ucy9odHRwRXh0ZW5zaW9uQ29uZmlndXJhdGlvbi5qcz8yOTVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRIdHRwSGFuZGxlckV4dGVuc2lvbkNvbmZpZ3VyYXRpb24gPSAocnVudGltZUNvbmZpZykgPT4ge1xuICAgIGxldCBodHRwSGFuZGxlciA9IHJ1bnRpbWVDb25maWcuaHR0cEhhbmRsZXI7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0SHR0cEhhbmRsZXIoaGFuZGxlcikge1xuICAgICAgICAgICAgaHR0cEhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICB9LFxuICAgICAgICBodHRwSGFuZGxlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBodHRwSGFuZGxlcjtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlSHR0cENsaWVudENvbmZpZyhrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBodHRwSGFuZGxlci51cGRhdGVIdHRwQ2xpZW50Q29uZmlnKGtleSwgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBodHRwSGFuZGxlckNvbmZpZ3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gaHR0cEhhbmRsZXIuaHR0cEhhbmRsZXJDb25maWdzKCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnQgY29uc3QgcmVzb2x2ZUh0dHBIYW5kbGVyUnVudGltZUNvbmZpZyA9IChodHRwSGFuZGxlckV4dGVuc2lvbkNvbmZpZ3VyYXRpb24pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBodHRwSGFuZGxlcjogaHR0cEhhbmRsZXJFeHRlbnNpb25Db25maWd1cmF0aW9uLmh0dHBIYW5kbGVyKCksXG4gICAgfTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/protocol-http/dist-es/extensions/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/extensions/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHttpHandlerExtensionConfiguration: () => (/* reexport safe */ _httpExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.getHttpHandlerExtensionConfiguration),\n/* harmony export */   resolveHttpHandlerRuntimeConfig: () => (/* reexport safe */ _httpExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__.resolveHttpHandlerRuntimeConfig)\n/* harmony export */ });\n/* harmony import */ var _httpExtensionConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpExtensionConfiguration */ \"(ssr)/./node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9wcm90b2NvbC1odHRwL2Rpc3QtZXMvZXh0ZW5zaW9ucy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9wcm90b2NvbC1odHRwL2Rpc3QtZXMvZXh0ZW5zaW9ucy9pbmRleC5qcz8yMjMxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2h0dHBFeHRlbnNpb25Db25maWd1cmF0aW9uXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/protocol-http/dist-es/extensions/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/protocol-http/dist-es/httpHandler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/httpHandler.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9wcm90b2NvbC1odHRwL2Rpc3QtZXMvaHR0cEhhbmRsZXIuanMiLCJtYXBwaW5ncyI6IjtBQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvcHJvdG9jb2wtaHR0cC9kaXN0LWVzL2h0dHBIYW5kbGVyLmpzP2ZlMjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/protocol-http/dist-es/httpHandler.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/protocol-http/dist-es/httpRequest.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/httpRequest.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpRequest: () => (/* binding */ HttpRequest)\n/* harmony export */ });\nclass HttpRequest {\n    constructor(options) {\n        this.method = options.method || \"GET\";\n        this.hostname = options.hostname || \"localhost\";\n        this.port = options.port;\n        this.query = options.query || {};\n        this.headers = options.headers || {};\n        this.body = options.body;\n        this.protocol = options.protocol\n            ? options.protocol.slice(-1) !== \":\"\n                ? `${options.protocol}:`\n                : options.protocol\n            : \"https:\";\n        this.path = options.path ? (options.path.charAt(0) !== \"/\" ? `/${options.path}` : options.path) : \"/\";\n        this.username = options.username;\n        this.password = options.password;\n        this.fragment = options.fragment;\n    }\n    static isInstance(request) {\n        if (!request)\n            return false;\n        const req = request;\n        return (\"method\" in req &&\n            \"protocol\" in req &&\n            \"hostname\" in req &&\n            \"path\" in req &&\n            typeof req[\"query\"] === \"object\" &&\n            typeof req[\"headers\"] === \"object\");\n    }\n    clone() {\n        const cloned = new HttpRequest({\n            ...this,\n            headers: { ...this.headers },\n        });\n        if (cloned.query)\n            cloned.query = cloneQuery(cloned.query);\n        return cloned;\n    }\n}\nfunction cloneQuery(query) {\n    return Object.keys(query).reduce((carry, paramName) => {\n        const param = query[paramName];\n        return {\n            ...carry,\n            [paramName]: Array.isArray(param) ? [...param] : param,\n        };\n    }, {});\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9wcm90b2NvbC1odHRwL2Rpc3QtZXMvaHR0cFJlcXVlc3QuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0EseUVBQXlFLGFBQWE7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQjtBQUN4QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxJQUFJO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9wcm90b2NvbC1odHRwL2Rpc3QtZXMvaHR0cFJlcXVlc3QuanM/ZjAxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSHR0cFJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCBcIkdFVFwiO1xuICAgICAgICB0aGlzLmhvc3RuYW1lID0gb3B0aW9ucy5ob3N0bmFtZSB8fCBcImxvY2FsaG9zdFwiO1xuICAgICAgICB0aGlzLnBvcnQgPSBvcHRpb25zLnBvcnQ7XG4gICAgICAgIHRoaXMucXVlcnkgPSBvcHRpb25zLnF1ZXJ5IHx8IHt9O1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG4gICAgICAgIHRoaXMuYm9keSA9IG9wdGlvbnMuYm9keTtcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IG9wdGlvbnMucHJvdG9jb2xcbiAgICAgICAgICAgID8gb3B0aW9ucy5wcm90b2NvbC5zbGljZSgtMSkgIT09IFwiOlwiXG4gICAgICAgICAgICAgICAgPyBgJHtvcHRpb25zLnByb3RvY29sfTpgXG4gICAgICAgICAgICAgICAgOiBvcHRpb25zLnByb3RvY29sXG4gICAgICAgICAgICA6IFwiaHR0cHM6XCI7XG4gICAgICAgIHRoaXMucGF0aCA9IG9wdGlvbnMucGF0aCA/IChvcHRpb25zLnBhdGguY2hhckF0KDApICE9PSBcIi9cIiA/IGAvJHtvcHRpb25zLnBhdGh9YCA6IG9wdGlvbnMucGF0aCkgOiBcIi9cIjtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IG9wdGlvbnMudXNlcm5hbWU7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBvcHRpb25zLnBhc3N3b3JkO1xuICAgICAgICB0aGlzLmZyYWdtZW50ID0gb3B0aW9ucy5mcmFnbWVudDtcbiAgICB9XG4gICAgc3RhdGljIGlzSW5zdGFuY2UocmVxdWVzdCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IHJlcSA9IHJlcXVlc3Q7XG4gICAgICAgIHJldHVybiAoXCJtZXRob2RcIiBpbiByZXEgJiZcbiAgICAgICAgICAgIFwicHJvdG9jb2xcIiBpbiByZXEgJiZcbiAgICAgICAgICAgIFwiaG9zdG5hbWVcIiBpbiByZXEgJiZcbiAgICAgICAgICAgIFwicGF0aFwiIGluIHJlcSAmJlxuICAgICAgICAgICAgdHlwZW9mIHJlcVtcInF1ZXJ5XCJdID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICB0eXBlb2YgcmVxW1wiaGVhZGVyc1wiXSA9PT0gXCJvYmplY3RcIik7XG4gICAgfVxuICAgIGNsb25lKCkge1xuICAgICAgICBjb25zdCBjbG9uZWQgPSBuZXcgSHR0cFJlcXVlc3Qoe1xuICAgICAgICAgICAgLi4udGhpcyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgLi4udGhpcy5oZWFkZXJzIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2xvbmVkLnF1ZXJ5KVxuICAgICAgICAgICAgY2xvbmVkLnF1ZXJ5ID0gY2xvbmVRdWVyeShjbG9uZWQucXVlcnkpO1xuICAgICAgICByZXR1cm4gY2xvbmVkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsb25lUXVlcnkocXVlcnkpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocXVlcnkpLnJlZHVjZSgoY2FycnksIHBhcmFtTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbSA9IHF1ZXJ5W3BhcmFtTmFtZV07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jYXJyeSxcbiAgICAgICAgICAgIFtwYXJhbU5hbWVdOiBBcnJheS5pc0FycmF5KHBhcmFtKSA/IFsuLi5wYXJhbV0gOiBwYXJhbSxcbiAgICAgICAgfTtcbiAgICB9LCB7fSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/protocol-http/dist-es/httpRequest.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/protocol-http/dist-es/httpResponse.js":
/*!********************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/httpResponse.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpResponse: () => (/* binding */ HttpResponse)\n/* harmony export */ });\nclass HttpResponse {\n    constructor(options) {\n        this.statusCode = options.statusCode;\n        this.reason = options.reason;\n        this.headers = options.headers || {};\n        this.body = options.body;\n    }\n    static isInstance(response) {\n        if (!response)\n            return false;\n        const resp = response;\n        return typeof resp.statusCode === \"number\" && typeof resp.headers === \"object\";\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9wcm90b2NvbC1odHRwL2Rpc3QtZXMvaHR0cFJlc3BvbnNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvcHJvdG9jb2wtaHR0cC9kaXN0LWVzL2h0dHBSZXNwb25zZS5qcz84MWJkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIdHRwUmVzcG9uc2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNDb2RlID0gb3B0aW9ucy5zdGF0dXNDb2RlO1xuICAgICAgICB0aGlzLnJlYXNvbiA9IG9wdGlvbnMucmVhc29uO1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG4gICAgICAgIHRoaXMuYm9keSA9IG9wdGlvbnMuYm9keTtcbiAgICB9XG4gICAgc3RhdGljIGlzSW5zdGFuY2UocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgcmVzcCA9IHJlc3BvbnNlO1xuICAgICAgICByZXR1cm4gdHlwZW9mIHJlc3Auc3RhdHVzQ29kZSA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgcmVzcC5oZWFkZXJzID09PSBcIm9iamVjdFwiO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/protocol-http/dist-es/httpResponse.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/protocol-http/dist-es/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Field: () => (/* reexport safe */ _Field__WEBPACK_IMPORTED_MODULE_1__.Field),\n/* harmony export */   Fields: () => (/* reexport safe */ _Fields__WEBPACK_IMPORTED_MODULE_2__.Fields),\n/* harmony export */   HttpRequest: () => (/* reexport safe */ _httpRequest__WEBPACK_IMPORTED_MODULE_4__.HttpRequest),\n/* harmony export */   HttpResponse: () => (/* reexport safe */ _httpResponse__WEBPACK_IMPORTED_MODULE_5__.HttpResponse),\n/* harmony export */   getHttpHandlerExtensionConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_0__.getHttpHandlerExtensionConfiguration),\n/* harmony export */   isValidHostname: () => (/* reexport safe */ _isValidHostname__WEBPACK_IMPORTED_MODULE_6__.isValidHostname),\n/* harmony export */   resolveHttpHandlerRuntimeConfig: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_0__.resolveHttpHandlerRuntimeConfig)\n/* harmony export */ });\n/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extensions */ \"(ssr)/./node_modules/@smithy/protocol-http/dist-es/extensions/index.js\");\n/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ \"(ssr)/./node_modules/@smithy/protocol-http/dist-es/Field.js\");\n/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fields */ \"(ssr)/./node_modules/@smithy/protocol-http/dist-es/Fields.js\");\n/* harmony import */ var _httpHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./httpHandler */ \"(ssr)/./node_modules/@smithy/protocol-http/dist-es/httpHandler.js\");\n/* harmony import */ var _httpRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./httpRequest */ \"(ssr)/./node_modules/@smithy/protocol-http/dist-es/httpRequest.js\");\n/* harmony import */ var _httpResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./httpResponse */ \"(ssr)/./node_modules/@smithy/protocol-http/dist-es/httpResponse.js\");\n/* harmony import */ var _isValidHostname__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isValidHostname */ \"(ssr)/./node_modules/@smithy/protocol-http/dist-es/isValidHostname.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ \"(ssr)/./node_modules/@smithy/protocol-http/dist-es/types.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9wcm90b2NvbC1odHRwL2Rpc3QtZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0w7QUFDQztBQUNLO0FBQ0E7QUFDQztBQUNHO0FBQ1YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9wcm90b2NvbC1odHRwL2Rpc3QtZXMvaW5kZXguanM/ZTllZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9leHRlbnNpb25zXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9GaWVsZFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vRmllbGRzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9odHRwSGFuZGxlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vaHR0cFJlcXVlc3RcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2h0dHBSZXNwb25zZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vaXNWYWxpZEhvc3RuYW1lXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90eXBlc1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/protocol-http/dist-es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/protocol-http/dist-es/isValidHostname.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/isValidHostname.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isValidHostname: () => (/* binding */ isValidHostname)\n/* harmony export */ });\nfunction isValidHostname(hostname) {\n    const hostPattern = /^[a-z0-9][a-z0-9\\.\\-]*[a-z0-9]$/;\n    return hostPattern.test(hostname);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9wcm90b2NvbC1odHRwL2Rpc3QtZXMvaXNWYWxpZEhvc3RuYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3Byb3RvY29sLWh0dHAvZGlzdC1lcy9pc1ZhbGlkSG9zdG5hbWUuanM/NWEzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaXNWYWxpZEhvc3RuYW1lKGhvc3RuYW1lKSB7XG4gICAgY29uc3QgaG9zdFBhdHRlcm4gPSAvXlthLXowLTldW2EtejAtOVxcLlxcLV0qW2EtejAtOV0kLztcbiAgICByZXR1cm4gaG9zdFBhdHRlcm4udGVzdChob3N0bmFtZSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/protocol-http/dist-es/isValidHostname.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/protocol-http/dist-es/types.js":
/*!*************************************************************!*\
  !*** ./node_modules/@smithy/protocol-http/dist-es/types.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9wcm90b2NvbC1odHRwL2Rpc3QtZXMvdHlwZXMuanMiLCJtYXBwaW5ncyI6IjtBQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvcHJvdG9jb2wtaHR0cC9kaXN0LWVzL3R5cGVzLmpzPzdkYTQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/protocol-http/dist-es/types.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/querystring-builder/dist-es/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@smithy/querystring-builder/dist-es/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildQueryString: () => (/* binding */ buildQueryString)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-uri-escape */ \"(ssr)/./node_modules/@smithy/util-uri-escape/dist-es/index.js\");\n\nfunction buildQueryString(query) {\n    const parts = [];\n    for (let key of Object.keys(query).sort()) {\n        const value = query[key];\n        key = (0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(key);\n        if (Array.isArray(value)) {\n            for (let i = 0, iLen = value.length; i < iLen; i++) {\n                parts.push(`${key}=${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value[i])}`);\n            }\n        }\n        else {\n            let qsEntry = key;\n            if (value || typeof value === \"string\") {\n                qsEntry += `=${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value)}`;\n            }\n            parts.push(qsEntry);\n        }\n    }\n    return parts.join(\"&\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9xdWVyeXN0cmluZy1idWlsZGVyL2Rpc3QtZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0Q7QUFDN0M7QUFDUDtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0EsaURBQWlELFVBQVU7QUFDM0QsOEJBQThCLElBQUksR0FBRyxrRUFBUyxXQUFXO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0VBQVMsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS9xdWVyeXN0cmluZy1idWlsZGVyL2Rpc3QtZXMvaW5kZXguanM/MTIxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlc2NhcGVVcmkgfSBmcm9tIFwiQHNtaXRoeS91dGlsLXVyaS1lc2NhcGVcIjtcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFF1ZXJ5U3RyaW5nKHF1ZXJ5KSB7XG4gICAgY29uc3QgcGFydHMgPSBbXTtcbiAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocXVlcnkpLnNvcnQoKSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5W2tleV07XG4gICAgICAgIGtleSA9IGVzY2FwZVVyaShrZXkpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBpTGVuID0gdmFsdWUubGVuZ3RoOyBpIDwgaUxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGFydHMucHVzaChgJHtrZXl9PSR7ZXNjYXBlVXJpKHZhbHVlW2ldKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBxc0VudHJ5ID0ga2V5O1xuICAgICAgICAgICAgaWYgKHZhbHVlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHFzRW50cnkgKz0gYD0ke2VzY2FwZVVyaSh2YWx1ZSl9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnRzLnB1c2gocXNFbnRyeSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhcnRzLmpvaW4oXCImXCIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/querystring-builder/dist-es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/abort.js":
/*!*****************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/abort.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2Fib3J0LmpzIiwibWFwcGluZ3MiOiI7QUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3R5cGVzL2Rpc3QtZXMvYWJvcnQuanM/ZWY2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/abort.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpApiKeyAuthLocation: () => (/* binding */ HttpApiKeyAuthLocation)\n/* harmony export */ });\nvar HttpApiKeyAuthLocation;\n(function (HttpApiKeyAuthLocation) {\n    HttpApiKeyAuthLocation[\"HEADER\"] = \"header\";\n    HttpApiKeyAuthLocation[\"QUERY\"] = \"query\";\n})(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2F1dGgvSHR0cEFwaUtleUF1dGguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3REFBd0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2F1dGgvSHR0cEFwaUtleUF1dGguanM/N2RjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIEh0dHBBcGlLZXlBdXRoTG9jYXRpb247XG4oZnVuY3Rpb24gKEh0dHBBcGlLZXlBdXRoTG9jYXRpb24pIHtcbiAgICBIdHRwQXBpS2V5QXV0aExvY2F0aW9uW1wiSEVBREVSXCJdID0gXCJoZWFkZXJcIjtcbiAgICBIdHRwQXBpS2V5QXV0aExvY2F0aW9uW1wiUVVFUllcIl0gPSBcInF1ZXJ5XCI7XG59KShIdHRwQXBpS2V5QXV0aExvY2F0aW9uIHx8IChIdHRwQXBpS2V5QXV0aExvY2F0aW9uID0ge30pKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2F1dGgvSHR0cEF1dGhTY2hlbWUuanMiLCJtYXBwaW5ncyI6IjtBQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdHlwZXMvZGlzdC1lcy9hdXRoL0h0dHBBdXRoU2NoZW1lLmpzPzY1ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2F1dGgvSHR0cEF1dGhTY2hlbWVQcm92aWRlci5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2F1dGgvSHR0cEF1dGhTY2hlbWVQcm92aWRlci5qcz8xZjAxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/auth/HttpSigner.js":
/*!***************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/auth/HttpSigner.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2F1dGgvSHR0cFNpZ25lci5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2F1dGgvSHR0cFNpZ25lci5qcz9kZGRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/auth/HttpSigner.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2F1dGgvSWRlbnRpdHlQcm92aWRlckNvbmZpZy5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2F1dGgvSWRlbnRpdHlQcm92aWRlckNvbmZpZy5qcz8xZTY2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/auth/auth.js":
/*!*********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/auth/auth.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpAuthLocation: () => (/* binding */ HttpAuthLocation)\n/* harmony export */ });\nvar HttpAuthLocation;\n(function (HttpAuthLocation) {\n    HttpAuthLocation[\"HEADER\"] = \"header\";\n    HttpAuthLocation[\"QUERY\"] = \"query\";\n})(HttpAuthLocation || (HttpAuthLocation = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2F1dGgvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRDQUE0QyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3R5cGVzL2Rpc3QtZXMvYXV0aC9hdXRoLmpzPzQwYWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBIdHRwQXV0aExvY2F0aW9uO1xuKGZ1bmN0aW9uIChIdHRwQXV0aExvY2F0aW9uKSB7XG4gICAgSHR0cEF1dGhMb2NhdGlvbltcIkhFQURFUlwiXSA9IFwiaGVhZGVyXCI7XG4gICAgSHR0cEF1dGhMb2NhdGlvbltcIlFVRVJZXCJdID0gXCJxdWVyeVwiO1xufSkoSHR0cEF1dGhMb2NhdGlvbiB8fCAoSHR0cEF1dGhMb2NhdGlvbiA9IHt9KSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/auth/auth.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/auth/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/auth/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpApiKeyAuthLocation: () => (/* reexport safe */ _HttpApiKeyAuth__WEBPACK_IMPORTED_MODULE_1__.HttpApiKeyAuthLocation),\n/* harmony export */   HttpAuthLocation: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_0__.HttpAuthLocation)\n/* harmony export */ });\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ \"(ssr)/./node_modules/@smithy/types/dist-es/auth/auth.js\");\n/* harmony import */ var _HttpApiKeyAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpApiKeyAuth */ \"(ssr)/./node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js\");\n/* harmony import */ var _HttpAuthScheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HttpAuthScheme */ \"(ssr)/./node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js\");\n/* harmony import */ var _HttpAuthSchemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HttpAuthSchemeProvider */ \"(ssr)/./node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js\");\n/* harmony import */ var _HttpSigner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HttpSigner */ \"(ssr)/./node_modules/@smithy/types/dist-es/auth/HttpSigner.js\");\n/* harmony import */ var _IdentityProviderConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IdentityProviderConfig */ \"(ssr)/./node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js\");\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2F1dGgvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUI7QUFDVTtBQUNBO0FBQ1E7QUFDWjtBQUNZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdHlwZXMvZGlzdC1lcy9hdXRoL2luZGV4LmpzP2Y1NWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vYXV0aFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vSHR0cEFwaUtleUF1dGhcIjtcbmV4cG9ydCAqIGZyb20gXCIuL0h0dHBBdXRoU2NoZW1lXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9IdHRwQXV0aFNjaGVtZVByb3ZpZGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9IdHRwU2lnbmVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9JZGVudGl0eVByb3ZpZGVyQ29uZmlnXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/auth/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2Jsb2IvYmxvYi1wYXlsb2FkLWlucHV0LXR5cGVzLmpzIiwibWFwcGluZ3MiOiI7QUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3R5cGVzL2Rpc3QtZXMvYmxvYi9ibG9iLXBheWxvYWQtaW5wdXQtdHlwZXMuanM/ZGE1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/checksum.js":
/*!********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/checksum.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2NoZWNrc3VtLmpzIiwibWFwcGluZ3MiOiI7QUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3R5cGVzL2Rpc3QtZXMvY2hlY2tzdW0uanM/MDJjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/checksum.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/client.js":
/*!******************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/client.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2NsaWVudC5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2NsaWVudC5qcz9iMTIxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/client.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/command.js":
/*!*******************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/command.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2NvbW1hbmQuanMiLCJtYXBwaW5ncyI6IjtBQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdHlwZXMvZGlzdC1lcy9jb21tYW5kLmpzP2NiODciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/command.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/connection/config.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/connection/config.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2Nvbm5lY3Rpb24vY29uZmlnLmpzIiwibWFwcGluZ3MiOiI7QUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3R5cGVzL2Rpc3QtZXMvY29ubmVjdGlvbi9jb25maWcuanM/ZTU1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/connection/config.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/connection/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/connection/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"(ssr)/./node_modules/@smithy/types/dist-es/connection/config.js\");\n/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager */ \"(ssr)/./node_modules/@smithy/types/dist-es/connection/manager.js\");\n/* harmony import */ var _pool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pool */ \"(ssr)/./node_modules/@smithy/types/dist-es/connection/pool.js\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2Nvbm5lY3Rpb24vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF5QjtBQUNDO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2Nvbm5lY3Rpb24vaW5kZXguanM/MjliMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9jb25maWdcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21hbmFnZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Bvb2xcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/connection/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/connection/manager.js":
/*!******************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/connection/manager.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2Nvbm5lY3Rpb24vbWFuYWdlci5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2Nvbm5lY3Rpb24vbWFuYWdlci5qcz9hZGVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/connection/manager.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/connection/pool.js":
/*!***************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/connection/pool.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2Nvbm5lY3Rpb24vcG9vbC5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2Nvbm5lY3Rpb24vcG9vbC5qcz9jNDRjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/connection/pool.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/crypto.js":
/*!******************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/crypto.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2NyeXB0by5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2NyeXB0by5qcz81YWZiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/crypto.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/encode.js":
/*!******************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/encode.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2VuY29kZS5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2VuY29kZS5qcz82MWY1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/encode.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/endpoint.js":
/*!********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/endpoint.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EndpointURLScheme: () => (/* binding */ EndpointURLScheme)\n/* harmony export */ });\nvar EndpointURLScheme;\n(function (EndpointURLScheme) {\n    EndpointURLScheme[\"HTTP\"] = \"http\";\n    EndpointURLScheme[\"HTTPS\"] = \"https\";\n})(EndpointURLScheme || (EndpointURLScheme = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2VuZHBvaW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLENBQUMsOENBQThDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdHlwZXMvZGlzdC1lcy9lbmRwb2ludC5qcz9mOGJlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgRW5kcG9pbnRVUkxTY2hlbWU7XG4oZnVuY3Rpb24gKEVuZHBvaW50VVJMU2NoZW1lKSB7XG4gICAgRW5kcG9pbnRVUkxTY2hlbWVbXCJIVFRQXCJdID0gXCJodHRwXCI7XG4gICAgRW5kcG9pbnRVUkxTY2hlbWVbXCJIVFRQU1wiXSA9IFwiaHR0cHNcIjtcbn0pKEVuZHBvaW50VVJMU2NoZW1lIHx8IChFbmRwb2ludFVSTFNjaGVtZSA9IHt9KSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/endpoint.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2VuZHBvaW50cy9FbmRwb2ludFJ1bGVPYmplY3QuanMiLCJtYXBwaW5ncyI6IjtBQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdHlwZXMvZGlzdC1lcy9lbmRwb2ludHMvRW5kcG9pbnRSdWxlT2JqZWN0LmpzPzFjYTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2VuZHBvaW50cy9FcnJvclJ1bGVPYmplY3QuanMiLCJtYXBwaW5ncyI6IjtBQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdHlwZXMvZGlzdC1lcy9lbmRwb2ludHMvRXJyb3JSdWxlT2JqZWN0LmpzPzA3OWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2VuZHBvaW50cy9SdWxlU2V0T2JqZWN0LmpzIiwibWFwcGluZ3MiOiI7QUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3R5cGVzL2Rpc3QtZXMvZW5kcG9pbnRzL1J1bGVTZXRPYmplY3QuanM/MmJkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js":
/*!************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2VuZHBvaW50cy9UcmVlUnVsZU9iamVjdC5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2VuZHBvaW50cy9UcmVlUnVsZU9iamVjdC5qcz80NjhjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/endpoints/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/endpoints/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EndpointRuleObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EndpointRuleObject */ \"(ssr)/./node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js\");\n/* harmony import */ var _ErrorRuleObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorRuleObject */ \"(ssr)/./node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js\");\n/* harmony import */ var _RuleSetObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RuleSetObject */ \"(ssr)/./node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js\");\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ \"(ssr)/./node_modules/@smithy/types/dist-es/endpoints/shared.js\");\n/* harmony import */ var _TreeRuleObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TreeRuleObject */ \"(ssr)/./node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js\");\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2VuZHBvaW50cy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFDSDtBQUNGO0FBQ1A7QUFDUSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3R5cGVzL2Rpc3QtZXMvZW5kcG9pbnRzL2luZGV4LmpzPzVjNWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vRW5kcG9pbnRSdWxlT2JqZWN0XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9FcnJvclJ1bGVPYmplY3RcIjtcbmV4cG9ydCAqIGZyb20gXCIuL1J1bGVTZXRPYmplY3RcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NoYXJlZFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vVHJlZVJ1bGVPYmplY3RcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/endpoints/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/endpoints/shared.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/endpoints/shared.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2VuZHBvaW50cy9zaGFyZWQuanMiLCJtYXBwaW5ncyI6IjtBQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdHlwZXMvZGlzdC1lcy9lbmRwb2ludHMvc2hhcmVkLmpzPzE1NDEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/endpoints/shared.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/eventStream.js":
/*!***********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/eventStream.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2V2ZW50U3RyZWFtLmpzIiwibWFwcGluZ3MiOiI7QUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3R5cGVzL2Rpc3QtZXMvZXZlbnRTdHJlYW0uanM/MGFkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/eventStream.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/extensions/checksum.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/extensions/checksum.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AlgorithmId: () => (/* binding */ AlgorithmId),\n/* harmony export */   getChecksumConfiguration: () => (/* binding */ getChecksumConfiguration),\n/* harmony export */   resolveChecksumRuntimeConfig: () => (/* binding */ resolveChecksumRuntimeConfig)\n/* harmony export */ });\nvar AlgorithmId;\n(function (AlgorithmId) {\n    AlgorithmId[\"MD5\"] = \"md5\";\n    AlgorithmId[\"CRC32\"] = \"crc32\";\n    AlgorithmId[\"CRC32C\"] = \"crc32c\";\n    AlgorithmId[\"SHA1\"] = \"sha1\";\n    AlgorithmId[\"SHA256\"] = \"sha256\";\n})(AlgorithmId || (AlgorithmId = {}));\nconst getChecksumConfiguration = (runtimeConfig) => {\n    const checksumAlgorithms = [];\n    if (runtimeConfig.sha256 !== undefined) {\n        checksumAlgorithms.push({\n            algorithmId: () => AlgorithmId.SHA256,\n            checksumConstructor: () => runtimeConfig.sha256,\n        });\n    }\n    if (runtimeConfig.md5 != undefined) {\n        checksumAlgorithms.push({\n            algorithmId: () => AlgorithmId.MD5,\n            checksumConstructor: () => runtimeConfig.md5,\n        });\n    }\n    return {\n        _checksumAlgorithms: checksumAlgorithms,\n        addChecksumAlgorithm(algo) {\n            this._checksumAlgorithms.push(algo);\n        },\n        checksumAlgorithms() {\n            return this._checksumAlgorithms;\n        },\n    };\n};\nconst resolveChecksumRuntimeConfig = (clientConfig) => {\n    const runtimeConfig = {};\n    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {\n        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();\n    });\n    return runtimeConfig;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2V4dGVuc2lvbnMvY2hlY2tzdW0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGtDQUFrQztBQUM1QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2V4dGVuc2lvbnMvY2hlY2tzdW0uanM/ODNjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIEFsZ29yaXRobUlkO1xuKGZ1bmN0aW9uIChBbGdvcml0aG1JZCkge1xuICAgIEFsZ29yaXRobUlkW1wiTUQ1XCJdID0gXCJtZDVcIjtcbiAgICBBbGdvcml0aG1JZFtcIkNSQzMyXCJdID0gXCJjcmMzMlwiO1xuICAgIEFsZ29yaXRobUlkW1wiQ1JDMzJDXCJdID0gXCJjcmMzMmNcIjtcbiAgICBBbGdvcml0aG1JZFtcIlNIQTFcIl0gPSBcInNoYTFcIjtcbiAgICBBbGdvcml0aG1JZFtcIlNIQTI1NlwiXSA9IFwic2hhMjU2XCI7XG59KShBbGdvcml0aG1JZCB8fCAoQWxnb3JpdGhtSWQgPSB7fSkpO1xuZXhwb3J0IGNvbnN0IGdldENoZWNrc3VtQ29uZmlndXJhdGlvbiA9IChydW50aW1lQ29uZmlnKSA9PiB7XG4gICAgY29uc3QgY2hlY2tzdW1BbGdvcml0aG1zID0gW107XG4gICAgaWYgKHJ1bnRpbWVDb25maWcuc2hhMjU2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2hlY2tzdW1BbGdvcml0aG1zLnB1c2goe1xuICAgICAgICAgICAgYWxnb3JpdGhtSWQ6ICgpID0+IEFsZ29yaXRobUlkLlNIQTI1NixcbiAgICAgICAgICAgIGNoZWNrc3VtQ29uc3RydWN0b3I6ICgpID0+IHJ1bnRpbWVDb25maWcuc2hhMjU2LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHJ1bnRpbWVDb25maWcubWQ1ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBjaGVja3N1bUFsZ29yaXRobXMucHVzaCh7XG4gICAgICAgICAgICBhbGdvcml0aG1JZDogKCkgPT4gQWxnb3JpdGhtSWQuTUQ1LFxuICAgICAgICAgICAgY2hlY2tzdW1Db25zdHJ1Y3RvcjogKCkgPT4gcnVudGltZUNvbmZpZy5tZDUsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBfY2hlY2tzdW1BbGdvcml0aG1zOiBjaGVja3N1bUFsZ29yaXRobXMsXG4gICAgICAgIGFkZENoZWNrc3VtQWxnb3JpdGhtKGFsZ28pIHtcbiAgICAgICAgICAgIHRoaXMuX2NoZWNrc3VtQWxnb3JpdGhtcy5wdXNoKGFsZ28pO1xuICAgICAgICB9LFxuICAgICAgICBjaGVja3N1bUFsZ29yaXRobXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tzdW1BbGdvcml0aG1zO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuZXhwb3J0IGNvbnN0IHJlc29sdmVDaGVja3N1bVJ1bnRpbWVDb25maWcgPSAoY2xpZW50Q29uZmlnKSA9PiB7XG4gICAgY29uc3QgcnVudGltZUNvbmZpZyA9IHt9O1xuICAgIGNsaWVudENvbmZpZy5jaGVja3N1bUFsZ29yaXRobXMoKS5mb3JFYWNoKChjaGVja3N1bUFsZ29yaXRobSkgPT4ge1xuICAgICAgICBydW50aW1lQ29uZmlnW2NoZWNrc3VtQWxnb3JpdGhtLmFsZ29yaXRobUlkKCldID0gY2hlY2tzdW1BbGdvcml0aG0uY2hlY2tzdW1Db25zdHJ1Y3RvcigpO1xuICAgIH0pO1xuICAgIHJldHVybiBydW50aW1lQ29uZmlnO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/extensions/checksum.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefaultClientConfiguration: () => (/* binding */ getDefaultClientConfiguration),\n/* harmony export */   resolveDefaultRuntimeConfig: () => (/* binding */ resolveDefaultRuntimeConfig)\n/* harmony export */ });\n/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checksum */ \"(ssr)/./node_modules/@smithy/types/dist-es/extensions/checksum.js\");\n\nconst getDefaultClientConfiguration = (runtimeConfig) => {\n    return {\n        ...(0,_checksum__WEBPACK_IMPORTED_MODULE_0__.getChecksumConfiguration)(runtimeConfig),\n    };\n};\nconst resolveDefaultRuntimeConfig = (config) => {\n    return {\n        ...(0,_checksum__WEBPACK_IMPORTED_MODULE_0__.resolveChecksumRuntimeConfig)(config),\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2V4dGVuc2lvbnMvZGVmYXVsdENsaWVudENvbmZpZ3VyYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9GO0FBQzdFO0FBQ1A7QUFDQSxXQUFXLG1FQUF3QjtBQUNuQztBQUNBO0FBQ087QUFDUDtBQUNBLFdBQVcsdUVBQTRCO0FBQ3ZDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2V4dGVuc2lvbnMvZGVmYXVsdENsaWVudENvbmZpZ3VyYXRpb24uanM/YWVjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDaGVja3N1bUNvbmZpZ3VyYXRpb24sIHJlc29sdmVDaGVja3N1bVJ1bnRpbWVDb25maWcgfSBmcm9tIFwiLi9jaGVja3N1bVwiO1xuZXhwb3J0IGNvbnN0IGdldERlZmF1bHRDbGllbnRDb25maWd1cmF0aW9uID0gKHJ1bnRpbWVDb25maWcpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5nZXRDaGVja3N1bUNvbmZpZ3VyYXRpb24ocnVudGltZUNvbmZpZyksXG4gICAgfTtcbn07XG5leHBvcnQgY29uc3QgcmVzb2x2ZURlZmF1bHRSdW50aW1lQ29uZmlnID0gKGNvbmZpZykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnJlc29sdmVDaGVja3N1bVJ1bnRpbWVDb25maWcoY29uZmlnKSxcbiAgICB9O1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2V4dGVuc2lvbnMvZGVmYXVsdEV4dGVuc2lvbkNvbmZpZ3VyYXRpb24uanMiLCJtYXBwaW5ncyI6IjtBQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdHlwZXMvZGlzdC1lcy9leHRlbnNpb25zL2RlZmF1bHRFeHRlbnNpb25Db25maWd1cmF0aW9uLmpzP2JhOWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/extensions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/extensions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AlgorithmId: () => (/* reexport safe */ _checksum__WEBPACK_IMPORTED_MODULE_2__.AlgorithmId),\n/* harmony export */   getDefaultClientConfiguration: () => (/* reexport safe */ _defaultClientConfiguration__WEBPACK_IMPORTED_MODULE_0__.getDefaultClientConfiguration),\n/* harmony export */   resolveDefaultRuntimeConfig: () => (/* reexport safe */ _defaultClientConfiguration__WEBPACK_IMPORTED_MODULE_0__.resolveDefaultRuntimeConfig)\n/* harmony export */ });\n/* harmony import */ var _defaultClientConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultClientConfiguration */ \"(ssr)/./node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js\");\n/* harmony import */ var _defaultExtensionConfiguration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultExtensionConfiguration */ \"(ssr)/./node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js\");\n/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checksum */ \"(ssr)/./node_modules/@smithy/types/dist-es/extensions/checksum.js\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2V4dGVuc2lvbnMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZDO0FBQ0c7QUFDUCIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3R5cGVzL2Rpc3QtZXMvZXh0ZW5zaW9ucy9pbmRleC5qcz9lYTIyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2RlZmF1bHRDbGllbnRDb25maWd1cmF0aW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9kZWZhdWx0RXh0ZW5zaW9uQ29uZmlndXJhdGlvblwiO1xuZXhwb3J0IHsgQWxnb3JpdGhtSWQgfSBmcm9tIFwiLi9jaGVja3N1bVwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/extensions/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/http.js":
/*!****************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/http.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FieldPosition: () => (/* binding */ FieldPosition)\n/* harmony export */ });\nvar FieldPosition;\n(function (FieldPosition) {\n    FieldPosition[FieldPosition[\"HEADER\"] = 0] = \"HEADER\";\n    FieldPosition[FieldPosition[\"TRAILER\"] = 1] = \"TRAILER\";\n})(FieldPosition || (FieldPosition = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2h0dHAuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQ0FBc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2h0dHAuanM/NGEyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIEZpZWxkUG9zaXRpb247XG4oZnVuY3Rpb24gKEZpZWxkUG9zaXRpb24pIHtcbiAgICBGaWVsZFBvc2l0aW9uW0ZpZWxkUG9zaXRpb25bXCJIRUFERVJcIl0gPSAwXSA9IFwiSEVBREVSXCI7XG4gICAgRmllbGRQb3NpdGlvbltGaWVsZFBvc2l0aW9uW1wiVFJBSUxFUlwiXSA9IDFdID0gXCJUUkFJTEVSXCI7XG59KShGaWVsZFBvc2l0aW9uIHx8IChGaWVsZFBvc2l0aW9uID0ge30pKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/http.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2h0dHAvaHR0cEhhbmRsZXJJbml0aWFsaXphdGlvbi5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2h0dHAvaHR0cEhhbmRsZXJJbml0aWFsaXphdGlvbi5qcz9jYTE4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2lkZW50aXR5L2FwaUtleUlkZW50aXR5LmpzIiwibWFwcGluZ3MiOiI7QUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3R5cGVzL2Rpc3QtZXMvaWRlbnRpdHkvYXBpS2V5SWRlbnRpdHkuanM/NjNkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2lkZW50aXR5L2F3c0NyZWRlbnRpYWxJZGVudGl0eS5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2lkZW50aXR5L2F3c0NyZWRlbnRpYWxJZGVudGl0eS5qcz85MmI4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/identity/identity.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/identity/identity.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2lkZW50aXR5L2lkZW50aXR5LmpzIiwibWFwcGluZ3MiOiI7QUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3R5cGVzL2Rpc3QtZXMvaWRlbnRpdHkvaWRlbnRpdHkuanM/ODhlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/identity/identity.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/identity/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/identity/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiKeyIdentity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiKeyIdentity */ \"(ssr)/./node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js\");\n/* harmony import */ var _awsCredentialIdentity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awsCredentialIdentity */ \"(ssr)/./node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js\");\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity */ \"(ssr)/./node_modules/@smithy/types/dist-es/identity/identity.js\");\n/* harmony import */ var _tokenIdentity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokenIdentity */ \"(ssr)/./node_modules/@smithy/types/dist-es/identity/tokenIdentity.js\");\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2lkZW50aXR5L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlDO0FBQ087QUFDYjtBQUNLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdHlwZXMvZGlzdC1lcy9pZGVudGl0eS9pbmRleC5qcz9hMjUyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2FwaUtleUlkZW50aXR5XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9hd3NDcmVkZW50aWFsSWRlbnRpdHlcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2lkZW50aXR5XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90b2tlbklkZW50aXR5XCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/identity/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/identity/tokenIdentity.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/identity/tokenIdentity.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2lkZW50aXR5L3Rva2VuSWRlbnRpdHkuanMiLCJtYXBwaW5ncyI6IjtBQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdHlwZXMvZGlzdC1lcy9pZGVudGl0eS90b2tlbklkZW50aXR5LmpzP2QxOGEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/identity/tokenIdentity.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AlgorithmId: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_12__.AlgorithmId),\n/* harmony export */   EndpointURLScheme: () => (/* reexport safe */ _endpoint__WEBPACK_IMPORTED_MODULE_9__.EndpointURLScheme),\n/* harmony export */   FieldPosition: () => (/* reexport safe */ _http__WEBPACK_IMPORTED_MODULE_13__.FieldPosition),\n/* harmony export */   HttpApiKeyAuthLocation: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_1__.HttpApiKeyAuthLocation),\n/* harmony export */   HttpAuthLocation: () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_1__.HttpAuthLocation),\n/* harmony export */   IniSectionType: () => (/* reexport safe */ _profile__WEBPACK_IMPORTED_MODULE_19__.IniSectionType),\n/* harmony export */   RequestHandlerProtocol: () => (/* reexport safe */ _transfer__WEBPACK_IMPORTED_MODULE_29__.RequestHandlerProtocol),\n/* harmony export */   SMITHY_CONTEXT_KEY: () => (/* reexport safe */ _middleware__WEBPACK_IMPORTED_MODULE_17__.SMITHY_CONTEXT_KEY),\n/* harmony export */   getDefaultClientConfiguration: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_12__.getDefaultClientConfiguration),\n/* harmony export */   resolveDefaultRuntimeConfig: () => (/* reexport safe */ _extensions__WEBPACK_IMPORTED_MODULE_12__.resolveDefaultRuntimeConfig)\n/* harmony export */ });\n/* harmony import */ var _abort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abort */ \"(ssr)/./node_modules/@smithy/types/dist-es/abort.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"(ssr)/./node_modules/@smithy/types/dist-es/auth/index.js\");\n/* harmony import */ var _blob_blob_payload_input_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blob/blob-payload-input-types */ \"(ssr)/./node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js\");\n/* harmony import */ var _checksum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checksum */ \"(ssr)/./node_modules/@smithy/types/dist-es/checksum.js\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client */ \"(ssr)/./node_modules/@smithy/types/dist-es/client.js\");\n/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./command */ \"(ssr)/./node_modules/@smithy/types/dist-es/command.js\");\n/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connection */ \"(ssr)/./node_modules/@smithy/types/dist-es/connection/index.js\");\n/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crypto */ \"(ssr)/./node_modules/@smithy/types/dist-es/crypto.js\");\n/* harmony import */ var _encode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./encode */ \"(ssr)/./node_modules/@smithy/types/dist-es/encode.js\");\n/* harmony import */ var _endpoint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./endpoint */ \"(ssr)/./node_modules/@smithy/types/dist-es/endpoint.js\");\n/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./endpoints */ \"(ssr)/./node_modules/@smithy/types/dist-es/endpoints/index.js\");\n/* harmony import */ var _eventStream__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./eventStream */ \"(ssr)/./node_modules/@smithy/types/dist-es/eventStream.js\");\n/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./extensions */ \"(ssr)/./node_modules/@smithy/types/dist-es/extensions/index.js\");\n/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./http */ \"(ssr)/./node_modules/@smithy/types/dist-es/http.js\");\n/* harmony import */ var _http_httpHandlerInitialization__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./http/httpHandlerInitialization */ \"(ssr)/./node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js\");\n/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./identity */ \"(ssr)/./node_modules/@smithy/types/dist-es/identity/index.js\");\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./logger */ \"(ssr)/./node_modules/@smithy/types/dist-es/logger.js\");\n/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./middleware */ \"(ssr)/./node_modules/@smithy/types/dist-es/middleware.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pagination */ \"(ssr)/./node_modules/@smithy/types/dist-es/pagination.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile */ \"(ssr)/./node_modules/@smithy/types/dist-es/profile.js\");\n/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./response */ \"(ssr)/./node_modules/@smithy/types/dist-es/response.js\");\n/* harmony import */ var _retry__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./retry */ \"(ssr)/./node_modules/@smithy/types/dist-es/retry.js\");\n/* harmony import */ var _serde__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./serde */ \"(ssr)/./node_modules/@smithy/types/dist-es/serde.js\");\n/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shapes */ \"(ssr)/./node_modules/@smithy/types/dist-es/shapes.js\");\n/* harmony import */ var _signature__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./signature */ \"(ssr)/./node_modules/@smithy/types/dist-es/signature.js\");\n/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./stream */ \"(ssr)/./node_modules/@smithy/types/dist-es/stream.js\");\n/* harmony import */ var _streaming_payload_streaming_blob_common_types__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./streaming-payload/streaming-blob-common-types */ \"(ssr)/./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js\");\n/* harmony import */ var _streaming_payload_streaming_blob_payload_input_types__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./streaming-payload/streaming-blob-payload-input-types */ \"(ssr)/./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js\");\n/* harmony import */ var _streaming_payload_streaming_blob_payload_output_types__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./streaming-payload/streaming-blob-payload-output-types */ \"(ssr)/./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js\");\n/* harmony import */ var _transfer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./transfer */ \"(ssr)/./node_modules/@smithy/types/dist-es/transfer.js\");\n/* harmony import */ var _transform_client_payload_blob_type_narrow__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./transform/client-payload-blob-type-narrow */ \"(ssr)/./node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js\");\n/* harmony import */ var _transform_no_undefined__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./transform/no-undefined */ \"(ssr)/./node_modules/@smithy/types/dist-es/transform/no-undefined.js\");\n/* harmony import */ var _transform_type_transform__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./transform/type-transform */ \"(ssr)/./node_modules/@smithy/types/dist-es/transform/type-transform.js\");\n/* harmony import */ var _uri__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./uri */ \"(ssr)/./node_modules/@smithy/types/dist-es/uri.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./util */ \"(ssr)/./node_modules/@smithy/types/dist-es/util.js\");\n/* harmony import */ var _waiter__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./waiter */ \"(ssr)/./node_modules/@smithy/types/dist-es/waiter.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDRDtBQUN5QjtBQUNyQjtBQUNGO0FBQ0M7QUFDRztBQUNKO0FBQ0E7QUFDRTtBQUNDO0FBQ0U7QUFDRDtBQUNOO0FBQzBCO0FBQ3RCO0FBQ0Y7QUFDSTtBQUNBO0FBQ0g7QUFDQztBQUNIO0FBQ0E7QUFDQztBQUNHO0FBQ0g7QUFDdUM7QUFDTztBQUNDO0FBQzdDO0FBQ2lDO0FBQ25CO0FBQ0U7QUFDckI7QUFDQztBQUNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdHlwZXMvZGlzdC1lcy9pbmRleC5qcz9kNTNmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2Fib3J0XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9hdXRoXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9ibG9iL2Jsb2ItcGF5bG9hZC1pbnB1dC10eXBlc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vY2hlY2tzdW1cIjtcbmV4cG9ydCAqIGZyb20gXCIuL2NsaWVudFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vY29tbWFuZFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vY29ubmVjdGlvblwiO1xuZXhwb3J0ICogZnJvbSBcIi4vY3J5cHRvXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9lbmNvZGVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2VuZHBvaW50XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9lbmRwb2ludHNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2V2ZW50U3RyZWFtXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9leHRlbnNpb25zXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9odHRwXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9odHRwL2h0dHBIYW5kbGVySW5pdGlhbGl6YXRpb25cIjtcbmV4cG9ydCAqIGZyb20gXCIuL2lkZW50aXR5XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9sb2dnZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL21pZGRsZXdhcmVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3BhZ2luYXRpb25cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Byb2ZpbGVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3Jlc3BvbnNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9yZXRyeVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2VyZGVcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NoYXBlc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2lnbmF0dXJlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zdHJlYW1cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3N0cmVhbWluZy1wYXlsb2FkL3N0cmVhbWluZy1ibG9iLWNvbW1vbi10eXBlc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vc3RyZWFtaW5nLXBheWxvYWQvc3RyZWFtaW5nLWJsb2ItcGF5bG9hZC1pbnB1dC10eXBlc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vc3RyZWFtaW5nLXBheWxvYWQvc3RyZWFtaW5nLWJsb2ItcGF5bG9hZC1vdXRwdXQtdHlwZXNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RyYW5zZmVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi90cmFuc2Zvcm0vY2xpZW50LXBheWxvYWQtYmxvYi10eXBlLW5hcnJvd1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vdHJhbnNmb3JtL25vLXVuZGVmaW5lZFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdHJhbnNmb3JtL3R5cGUtdHJhbnNmb3JtXCI7XG5leHBvcnQgKiBmcm9tIFwiLi91cmlcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3V0aWxcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3dhaXRlclwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/logger.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2xvZ2dlci5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL2xvZ2dlci5qcz84OGUxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/logger.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/middleware.js":
/*!**********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/middleware.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SMITHY_CONTEXT_KEY: () => (/* binding */ SMITHY_CONTEXT_KEY)\n/* harmony export */ });\nconst SMITHY_CONTEXT_KEY = \"__smithy_context\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL21pZGRsZXdhcmUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdHlwZXMvZGlzdC1lcy9taWRkbGV3YXJlLmpzP2YyZjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNNSVRIWV9DT05URVhUX0tFWSA9IFwiX19zbWl0aHlfY29udGV4dFwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/middleware.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/pagination.js":
/*!**********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/pagination.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3BhZ2luYXRpb24uanMiLCJtYXBwaW5ncyI6IjtBQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdHlwZXMvZGlzdC1lcy9wYWdpbmF0aW9uLmpzPzM2Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/pagination.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/profile.js":
/*!*******************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/profile.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IniSectionType: () => (/* binding */ IniSectionType)\n/* harmony export */ });\nvar IniSectionType;\n(function (IniSectionType) {\n    IniSectionType[\"PROFILE\"] = \"profile\";\n    IniSectionType[\"SSO_SESSION\"] = \"sso-session\";\n    IniSectionType[\"SERVICES\"] = \"services\";\n})(IniSectionType || (IniSectionType = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3Byb2ZpbGUuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHdDQUF3QyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3R5cGVzL2Rpc3QtZXMvcHJvZmlsZS5qcz84OGMzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgSW5pU2VjdGlvblR5cGU7XG4oZnVuY3Rpb24gKEluaVNlY3Rpb25UeXBlKSB7XG4gICAgSW5pU2VjdGlvblR5cGVbXCJQUk9GSUxFXCJdID0gXCJwcm9maWxlXCI7XG4gICAgSW5pU2VjdGlvblR5cGVbXCJTU09fU0VTU0lPTlwiXSA9IFwic3NvLXNlc3Npb25cIjtcbiAgICBJbmlTZWN0aW9uVHlwZVtcIlNFUlZJQ0VTXCJdID0gXCJzZXJ2aWNlc1wiO1xufSkoSW5pU2VjdGlvblR5cGUgfHwgKEluaVNlY3Rpb25UeXBlID0ge30pKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/profile.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/response.js":
/*!********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/response.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3Jlc3BvbnNlLmpzIiwibWFwcGluZ3MiOiI7QUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3R5cGVzL2Rpc3QtZXMvcmVzcG9uc2UuanM/YWI0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/response.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/retry.js":
/*!*****************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/retry.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3JldHJ5LmpzIiwibWFwcGluZ3MiOiI7QUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3R5cGVzL2Rpc3QtZXMvcmV0cnkuanM/MmNlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/retry.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/serde.js":
/*!*****************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/serde.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3NlcmRlLmpzIiwibWFwcGluZ3MiOiI7QUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3R5cGVzL2Rpc3QtZXMvc2VyZGUuanM/YmI4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/serde.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/shapes.js":
/*!******************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/shapes.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3NoYXBlcy5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3NoYXBlcy5qcz80OTk4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/shapes.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/signature.js":
/*!*********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/signature.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3NpZ25hdHVyZS5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3NpZ25hdHVyZS5qcz80ZTgwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/signature.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/stream.js":
/*!******************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/stream.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3N0cmVhbS5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3N0cmVhbS5qcz81ZTQ1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/stream.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3N0cmVhbWluZy1wYXlsb2FkL3N0cmVhbWluZy1ibG9iLWNvbW1vbi10eXBlcy5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3N0cmVhbWluZy1wYXlsb2FkL3N0cmVhbWluZy1ibG9iLWNvbW1vbi10eXBlcy5qcz8yNTkyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3N0cmVhbWluZy1wYXlsb2FkL3N0cmVhbWluZy1ibG9iLXBheWxvYWQtaW5wdXQtdHlwZXMuanMiLCJtYXBwaW5ncyI6IjtBQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdHlwZXMvZGlzdC1lcy9zdHJlYW1pbmctcGF5bG9hZC9zdHJlYW1pbmctYmxvYi1wYXlsb2FkLWlucHV0LXR5cGVzLmpzPzllZWIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3N0cmVhbWluZy1wYXlsb2FkL3N0cmVhbWluZy1ibG9iLXBheWxvYWQtb3V0cHV0LXR5cGVzLmpzIiwibWFwcGluZ3MiOiI7QUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3R5cGVzL2Rpc3QtZXMvc3RyZWFtaW5nLXBheWxvYWQvc3RyZWFtaW5nLWJsb2ItcGF5bG9hZC1vdXRwdXQtdHlwZXMuanM/ZDExMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/transfer.js":
/*!********************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/transfer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RequestHandlerProtocol: () => (/* binding */ RequestHandlerProtocol)\n/* harmony export */ });\nvar RequestHandlerProtocol;\n(function (RequestHandlerProtocol) {\n    RequestHandlerProtocol[\"HTTP_0_9\"] = \"http/0.9\";\n    RequestHandlerProtocol[\"HTTP_1_0\"] = \"http/1.0\";\n    RequestHandlerProtocol[\"TDS_8_0\"] = \"tds/8.0\";\n})(RequestHandlerProtocol || (RequestHandlerProtocol = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3RyYW5zZmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3REFBd0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3RyYW5zZmVyLmpzPzcyZjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBSZXF1ZXN0SGFuZGxlclByb3RvY29sO1xuKGZ1bmN0aW9uIChSZXF1ZXN0SGFuZGxlclByb3RvY29sKSB7XG4gICAgUmVxdWVzdEhhbmRsZXJQcm90b2NvbFtcIkhUVFBfMF85XCJdID0gXCJodHRwLzAuOVwiO1xuICAgIFJlcXVlc3RIYW5kbGVyUHJvdG9jb2xbXCJIVFRQXzFfMFwiXSA9IFwiaHR0cC8xLjBcIjtcbiAgICBSZXF1ZXN0SGFuZGxlclByb3RvY29sW1wiVERTXzhfMFwiXSA9IFwidGRzLzguMFwiO1xufSkoUmVxdWVzdEhhbmRsZXJQcm90b2NvbCB8fCAoUmVxdWVzdEhhbmRsZXJQcm90b2NvbCA9IHt9KSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/transfer.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3RyYW5zZm9ybS9jbGllbnQtcGF5bG9hZC1ibG9iLXR5cGUtbmFycm93LmpzIiwibWFwcGluZ3MiOiI7QUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3R5cGVzL2Rpc3QtZXMvdHJhbnNmb3JtL2NsaWVudC1wYXlsb2FkLWJsb2ItdHlwZS1uYXJyb3cuanM/NWIyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/transform/no-undefined.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/transform/no-undefined.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3RyYW5zZm9ybS9uby11bmRlZmluZWQuanMiLCJtYXBwaW5ncyI6IjtBQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdHlwZXMvZGlzdC1lcy90cmFuc2Zvcm0vbm8tdW5kZWZpbmVkLmpzPzFkYmUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/transform/no-undefined.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/transform/type-transform.js":
/*!************************************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/transform/type-transform.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3RyYW5zZm9ybS90eXBlLXRyYW5zZm9ybS5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3RyYW5zZm9ybS90eXBlLXRyYW5zZm9ybS5qcz9kZWI1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/transform/type-transform.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/uri.js":
/*!***************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/uri.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3VyaS5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3VyaS5qcz8zNDE2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/uri.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/util.js":
/*!****************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/util.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3V0aWwuanMiLCJtYXBwaW5ncyI6IjtBQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdHlwZXMvZGlzdC1lcy91dGlsLmpzP2I3MjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/util.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/types/dist-es/waiter.js":
/*!******************************************************!*\
  !*** ./node_modules/@smithy/types/dist-es/waiter.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3dhaXRlci5qcyIsIm1hcHBpbmdzIjoiO0FBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS90eXBlcy9kaXN0LWVzL3dhaXRlci5qcz80ZmNkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7fTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/types/dist-es/waiter.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-base64/dist-es/fromBase64.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/util-base64/dist-es/fromBase64.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromBase64: () => (/* binding */ fromBase64)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-buffer-from */ \"(ssr)/./node_modules/@smithy/util-buffer-from/dist-es/index.js\");\n\nconst BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;\nconst fromBase64 = (input) => {\n    if ((input.length * 3) % 4 !== 0) {\n        throw new TypeError(`Incorrect padding on base64 string.`);\n    }\n    if (!BASE64_REGEX.exec(input)) {\n        throw new TypeError(`Invalid base64 string.`);\n    }\n    const buffer = (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromString)(input, \"base64\");\n    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLWJhc2U2NC9kaXN0LWVzL2Zyb21CYXNlNjQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0Q7QUFDdEQsdUNBQXVDLElBQUk7QUFDcEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0VBQVU7QUFDN0I7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtYmFzZTY0L2Rpc3QtZXMvZnJvbUJhc2U2NC5qcz83Y2VhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZyb21TdHJpbmcgfSBmcm9tIFwiQHNtaXRoeS91dGlsLWJ1ZmZlci1mcm9tXCI7XG5jb25zdCBCQVNFNjRfUkVHRVggPSAvXltBLVphLXowLTkrL10qPXswLDJ9JC87XG5leHBvcnQgY29uc3QgZnJvbUJhc2U2NCA9IChpbnB1dCkgPT4ge1xuICAgIGlmICgoaW5wdXQubGVuZ3RoICogMykgJSA0ICE9PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEluY29ycmVjdCBwYWRkaW5nIG9uIGJhc2U2NCBzdHJpbmcuYCk7XG4gICAgfVxuICAgIGlmICghQkFTRTY0X1JFR0VYLmV4ZWMoaW5wdXQpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEludmFsaWQgYmFzZTY0IHN0cmluZy5gKTtcbiAgICB9XG4gICAgY29uc3QgYnVmZmVyID0gZnJvbVN0cmluZyhpbnB1dCwgXCJiYXNlNjRcIik7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1ZmZlci5idWZmZXIsIGJ1ZmZlci5ieXRlT2Zmc2V0LCBidWZmZXIuYnl0ZUxlbmd0aCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-base64/dist-es/fromBase64.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-base64/dist-es/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@smithy/util-base64/dist-es/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromBase64: () => (/* reexport safe */ _fromBase64__WEBPACK_IMPORTED_MODULE_0__.fromBase64),\n/* harmony export */   toBase64: () => (/* reexport safe */ _toBase64__WEBPACK_IMPORTED_MODULE_1__.toBase64)\n/* harmony export */ });\n/* harmony import */ var _fromBase64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromBase64 */ \"(ssr)/./node_modules/@smithy/util-base64/dist-es/fromBase64.js\");\n/* harmony import */ var _toBase64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toBase64 */ \"(ssr)/./node_modules/@smithy/util-base64/dist-es/toBase64.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLWJhc2U2NC9kaXN0LWVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtYmFzZTY0L2Rpc3QtZXMvaW5kZXguanM/NWQ0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9mcm9tQmFzZTY0XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90b0Jhc2U2NFwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-base64/dist-es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-base64/dist-es/toBase64.js":
/*!**************************************************************!*\
  !*** ./node_modules/@smithy/util-base64/dist-es/toBase64.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toBase64: () => (/* binding */ toBase64)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-buffer-from */ \"(ssr)/./node_modules/@smithy/util-buffer-from/dist-es/index.js\");\n/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @smithy/util-utf8 */ \"(ssr)/./node_modules/@smithy/util-utf8/dist-es/index.js\");\n\n\nconst toBase64 = (_input) => {\n    let input;\n    if (typeof _input === \"string\") {\n        input = (0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__.fromUtf8)(_input);\n    }\n    else {\n        input = _input;\n    }\n    if (typeof input !== \"object\" || typeof input.byteOffset !== \"number\" || typeof input.byteLength !== \"number\") {\n        throw new Error(\"@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.\");\n    }\n    return (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString(\"base64\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLWJhc2U2NC9kaXN0LWVzL3RvQmFzZTY0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyRDtBQUNkO0FBQ3RDO0FBQ1A7QUFDQTtBQUNBLGdCQUFnQiwyREFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcseUVBQWU7QUFDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLWJhc2U2NC9kaXN0LWVzL3RvQmFzZTY0LmpzPzVmYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbUFycmF5QnVmZmVyIH0gZnJvbSBcIkBzbWl0aHkvdXRpbC1idWZmZXItZnJvbVwiO1xuaW1wb3J0IHsgZnJvbVV0ZjggfSBmcm9tIFwiQHNtaXRoeS91dGlsLXV0ZjhcIjtcbmV4cG9ydCBjb25zdCB0b0Jhc2U2NCA9IChfaW5wdXQpID0+IHtcbiAgICBsZXQgaW5wdXQ7XG4gICAgaWYgKHR5cGVvZiBfaW5wdXQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaW5wdXQgPSBmcm9tVXRmOChfaW5wdXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaW5wdXQgPSBfaW5wdXQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGlucHV0LmJ5dGVPZmZzZXQgIT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGlucHV0LmJ5dGVMZW5ndGggIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQHNtaXRoeS91dGlsLWJhc2U2NDogdG9CYXNlNjQgZW5jb2RlciBmdW5jdGlvbiBvbmx5IGFjY2VwdHMgc3RyaW5nIHwgVWludDhBcnJheS5cIik7XG4gICAgfVxuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIoaW5wdXQuYnVmZmVyLCBpbnB1dC5ieXRlT2Zmc2V0LCBpbnB1dC5ieXRlTGVuZ3RoKS50b1N0cmluZyhcImJhc2U2NFwiKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-base64/dist-es/toBase64.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-buffer-from/dist-es/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/util-buffer-from/dist-es/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromArrayBuffer: () => (/* binding */ fromArrayBuffer),\n/* harmony export */   fromString: () => (/* binding */ fromString)\n/* harmony export */ });\n/* harmony import */ var _smithy_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/is-array-buffer */ \"(ssr)/./node_modules/@smithy/is-array-buffer/dist-es/index.js\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buffer */ \"buffer\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {\n    if (!(0,_smithy_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__.isArrayBuffer)(input)) {\n        throw new TypeError(`The \"input\" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);\n    }\n    return buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(input, offset, length);\n};\nconst fromString = (input, encoding) => {\n    if (typeof input !== \"string\") {\n        throw new TypeError(`The \"input\" argument must be of type string. Received type ${typeof input} (${input})`);\n    }\n    return encoding ? buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(input, encoding) : buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(input);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLWJ1ZmZlci1mcm9tL2Rpc3QtZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0Q7QUFDeEI7QUFDekI7QUFDUCxTQUFTLHNFQUFhO0FBQ3RCLHVGQUF1RixjQUFjLEdBQUcsTUFBTTtBQUM5RztBQUNBLFdBQVcsMENBQU07QUFDakI7QUFDTztBQUNQO0FBQ0EsMEZBQTBGLGNBQWMsR0FBRyxNQUFNO0FBQ2pIO0FBQ0Esc0JBQXNCLDBDQUFNLHlCQUF5QiwwQ0FBTTtBQUMzRCIsInNvdXJjZXMiOlsid2VicGFjazovL2FkdmlzYWJvdC8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtYnVmZmVyLWZyb20vZGlzdC1lcy9pbmRleC5qcz8yMjUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzQXJyYXlCdWZmZXIgfSBmcm9tIFwiQHNtaXRoeS9pcy1hcnJheS1idWZmZXJcIjtcbmltcG9ydCB7IEJ1ZmZlciB9IGZyb20gXCJidWZmZXJcIjtcbmV4cG9ydCBjb25zdCBmcm9tQXJyYXlCdWZmZXIgPSAoaW5wdXQsIG9mZnNldCA9IDAsIGxlbmd0aCA9IGlucHV0LmJ5dGVMZW5ndGggLSBvZmZzZXQpID0+IHtcbiAgICBpZiAoIWlzQXJyYXlCdWZmZXIoaW5wdXQpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcImlucHV0XCIgYXJndW1lbnQgbXVzdCBiZSBBcnJheUJ1ZmZlci4gUmVjZWl2ZWQgdHlwZSAke3R5cGVvZiBpbnB1dH0gKCR7aW5wdXR9KWApO1xuICAgIH1cbiAgICByZXR1cm4gQnVmZmVyLmZyb20oaW5wdXQsIG9mZnNldCwgbGVuZ3RoKTtcbn07XG5leHBvcnQgY29uc3QgZnJvbVN0cmluZyA9IChpbnB1dCwgZW5jb2RpbmcpID0+IHtcbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFRoZSBcImlucHV0XCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIHN0cmluZy4gUmVjZWl2ZWQgdHlwZSAke3R5cGVvZiBpbnB1dH0gKCR7aW5wdXR9KWApO1xuICAgIH1cbiAgICByZXR1cm4gZW5jb2RpbmcgPyBCdWZmZXIuZnJvbShpbnB1dCwgZW5jb2RpbmcpIDogQnVmZmVyLmZyb20oaW5wdXQpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-buffer-from/dist-es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   escapeUriPath: () => (/* binding */ escapeUriPath)\n/* harmony export */ });\n/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-uri */ \"(ssr)/./node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js\");\n\nconst escapeUriPath = (uri) => uri.split(\"/\").map(_escape_uri__WEBPACK_IMPORTED_MODULE_0__.escapeUri).join(\"/\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXVyaS1lc2NhcGUvZGlzdC1lcy9lc2NhcGUtdXJpLXBhdGguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUM7QUFDbEMsa0RBQWtELGtEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC11cmktZXNjYXBlL2Rpc3QtZXMvZXNjYXBlLXVyaS1wYXRoLmpzPzlkOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXNjYXBlVXJpIH0gZnJvbSBcIi4vZXNjYXBlLXVyaVwiO1xuZXhwb3J0IGNvbnN0IGVzY2FwZVVyaVBhdGggPSAodXJpKSA9PiB1cmkuc3BsaXQoXCIvXCIpLm1hcChlc2NhcGVVcmkpLmpvaW4oXCIvXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js":
/*!********************************************************************!*\
  !*** ./node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   escapeUri: () => (/* binding */ escapeUri)\n/* harmony export */ });\nconst escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);\nconst hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXVyaS1lc2NhcGUvZGlzdC1lcy9lc2NhcGUtdXJpLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQLDZCQUE2QiwyQ0FBMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXVyaS1lc2NhcGUvZGlzdC1lcy9lc2NhcGUtdXJpLmpzP2UzYWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGVzY2FwZVVyaSA9ICh1cmkpID0+IGVuY29kZVVSSUNvbXBvbmVudCh1cmkpLnJlcGxhY2UoL1shJygpKl0vZywgaGV4RW5jb2RlKTtcbmNvbnN0IGhleEVuY29kZSA9IChjKSA9PiBgJSR7Yy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpfWA7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-uri-escape/dist-es/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@smithy/util-uri-escape/dist-es/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   escapeUri: () => (/* reexport safe */ _escape_uri__WEBPACK_IMPORTED_MODULE_0__.escapeUri),\n/* harmony export */   escapeUriPath: () => (/* reexport safe */ _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__.escapeUriPath)\n/* harmony export */ });\n/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-uri */ \"(ssr)/./node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js\");\n/* harmony import */ var _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escape-uri-path */ \"(ssr)/./node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXVyaS1lc2NhcGUvZGlzdC1lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTZCO0FBQ0siLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZHZpc2Fib3QvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXVyaS1lc2NhcGUvZGlzdC1lcy9pbmRleC5qcz8zMjg5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2VzY2FwZS11cmlcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2VzY2FwZS11cmktcGF0aFwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-uri-escape/dist-es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-utf8/dist-es/fromUtf8.js":
/*!************************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/fromUtf8.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-buffer-from */ \"(ssr)/./node_modules/@smithy/util-buffer-from/dist-es/index.js\");\n\nconst fromUtf8 = (input) => {\n    const buf = (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromString)(input, \"utf8\");\n    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXV0ZjgvZGlzdC1lcy9mcm9tVXRmOC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFzRDtBQUMvQztBQUNQLGdCQUFnQixvRUFBVTtBQUMxQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC11dGY4L2Rpc3QtZXMvZnJvbVV0ZjguanM/MTA5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcm9tU3RyaW5nIH0gZnJvbSBcIkBzbWl0aHkvdXRpbC1idWZmZXItZnJvbVwiO1xuZXhwb3J0IGNvbnN0IGZyb21VdGY4ID0gKGlucHV0KSA9PiB7XG4gICAgY29uc3QgYnVmID0gZnJvbVN0cmluZyhpbnB1dCwgXCJ1dGY4XCIpO1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWYuYnVmZmVyLCBidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVMZW5ndGggLyBVaW50OEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-utf8/dist-es/fromUtf8.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-utf8/dist-es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromUtf8: () => (/* reexport safe */ _fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8),\n/* harmony export */   toUint8Array: () => (/* reexport safe */ _toUint8Array__WEBPACK_IMPORTED_MODULE_1__.toUint8Array),\n/* harmony export */   toUtf8: () => (/* reexport safe */ _toUtf8__WEBPACK_IMPORTED_MODULE_2__.toUtf8)\n/* harmony export */ });\n/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromUtf8 */ \"(ssr)/./node_modules/@smithy/util-utf8/dist-es/fromUtf8.js\");\n/* harmony import */ var _toUint8Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toUint8Array */ \"(ssr)/./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js\");\n/* harmony import */ var _toUtf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toUtf8 */ \"(ssr)/./node_modules/@smithy/util-utf8/dist-es/toUtf8.js\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXV0ZjgvZGlzdC1lcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkI7QUFDSTtBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC11dGY4L2Rpc3QtZXMvaW5kZXguanM/NTY5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9mcm9tVXRmOFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdG9VaW50OEFycmF5XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90b1V0ZjhcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-utf8/dist-es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toUint8Array: () => (/* binding */ toUint8Array)\n/* harmony export */ });\n/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromUtf8 */ \"(ssr)/./node_modules/@smithy/util-utf8/dist-es/fromUtf8.js\");\n\nconst toUint8Array = (data) => {\n    if (typeof data === \"string\") {\n        return (0,_fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8)(data);\n    }\n    if (ArrayBuffer.isView(data)) {\n        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);\n    }\n    return new Uint8Array(data);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXV0ZjgvZGlzdC1lcy90b1VpbnQ4QXJyYXkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBc0M7QUFDL0I7QUFDUDtBQUNBLGVBQWUsbURBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC11dGY4L2Rpc3QtZXMvdG9VaW50OEFycmF5LmpzPzM4ODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbVV0ZjggfSBmcm9tIFwiLi9mcm9tVXRmOFwiO1xuZXhwb3J0IGNvbnN0IHRvVWludDhBcnJheSA9IChkYXRhKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBmcm9tVXRmOChkYXRhKTtcbiAgICB9XG4gICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoIC8gVWludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@smithy/util-utf8/dist-es/toUtf8.js":
/*!**********************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/toUtf8.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toUtf8: () => (/* binding */ toUtf8)\n/* harmony export */ });\n/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-buffer-from */ \"(ssr)/./node_modules/@smithy/util-buffer-from/dist-es/index.js\");\n\nconst toUtf8 = (input) => {\n    if (typeof input === \"string\") {\n        return input;\n    }\n    if (typeof input !== \"object\" || typeof input.byteOffset !== \"number\" || typeof input.byteLength !== \"number\") {\n        throw new Error(\"@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.\");\n    }\n    return (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString(\"utf8\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXV0ZjgvZGlzdC1lcy90b1V0ZjguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkQ7QUFDcEQ7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlFQUFlO0FBQzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWR2aXNhYm90Ly4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC11dGY4L2Rpc3QtZXMvdG9VdGY4LmpzPzM5ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbUFycmF5QnVmZmVyIH0gZnJvbSBcIkBzbWl0aHkvdXRpbC1idWZmZXItZnJvbVwiO1xuZXhwb3J0IGNvbnN0IHRvVXRmOCA9IChpbnB1dCkgPT4ge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBpbnB1dC5ieXRlT2Zmc2V0ICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBpbnB1dC5ieXRlTGVuZ3RoICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkBzbWl0aHkvdXRpbC11dGY4OiB0b1V0ZjggZW5jb2RlciBmdW5jdGlvbiBvbmx5IGFjY2VwdHMgc3RyaW5nIHwgVWludDhBcnJheS5cIik7XG4gICAgfVxuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIoaW5wdXQuYnVmZmVyLCBpbnB1dC5ieXRlT2Zmc2V0LCBpbnB1dC5ieXRlTGVuZ3RoKS50b1N0cmluZyhcInV0ZjhcIik7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@smithy/util-utf8/dist-es/toUtf8.js\n");

/***/ })

};
;