"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJSON = void 0;
/**
 * Parse json with validation
 * @param value Ex: "{'a': 'b'}"
 * @returns Ex: {'a': 'b'}
 */
const parseJSON = (str) => {
    try {
        return JSON.parse(str);
    }
    catch (err) {
        return str;
    }
};
exports.parseJSON = parseJSON;
