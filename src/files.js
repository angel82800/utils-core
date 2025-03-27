"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileExtension = void 0;
/**
 * Get the extension of a file from its name
 * @param filename The name of the file
 * @returns The file extension
 */
var getFileExtension = function (filename) { var _a; return ((_a = filename === null || filename === void 0 ? void 0 : filename.split(".")) === null || _a === void 0 ? void 0 : _a.pop()) || ""; };
exports.getFileExtension = getFileExtension;
