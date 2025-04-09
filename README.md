# Core Utility Functions for Javascript and Typescript.(Node.js and React.js)
This package offers a comprehensive collection of widely-used utility functions for both JavaScript and TypeScript projects, designed to streamline development
  
## Usage
First install the package via npm:

```sh
$ npm install utils-core --save
```

To use the package in your module:

```js
import { randomString } from "utils-core";

const randomSring = randomString(8);
```

```js
const { randomString } = require("utils-core");

const randomSring = randomString(8);
```
  
## Features
| Name  | Description  | Ex.Input  | Ex.Output  |
| ------------- | ------------- | ------------- | ------------- |
| uniqueArray(array)  | Removes duplicates from an array.  | [1, 2, 2, 3, 4, 4, 5]  | [1, 2, 3, 4, 5]  |
| uniqueArrayByKey<T>(arr: T[], key: keyof T) | Returns a new array with unique objects based on a specified key property | <T>(arr: T[], key: keyof T) => T[] | uniqueArrayByKey([{id:1},{id:1},{id:2}], 'id') → [{id:1},{id:2}] |
| deepUniqueArray(arr, compareFn?) | Removes duplicate items from an array using deep comparison or custom compare function | <T>(arr: T[], compareFn?: (a: T, b: T) => boolean) => T[] | deepUniqueArray([{a:1}, {a:1}, {a:2}]) → [{a:1}, {a:2}] |
| shuffleArray(array)  | Shuffles the elements of an array randomly.  | [1, 2, 3, 4, 5]  | [3, 1, 5, 2, 4] |
| flattenArray(array)  | Flattens a nested array to a single-level array. | [[1, 2], [3, [4, 5]], 6]  | [1, 2, 3, 4, 5, 6]  |
| sleep(ms: number)  | Delays execution for a specified number of milliseconds. Returns a Promise.  | 2000  | Resolves after 2 seconds.  |
| formatBytes(bytes: number, decimals: number)  | Converts bytes into a human-readable format (e.g., KB, MB).  | formatBytes(5000, 2)  | "4.88 KB"  |
| hexToRgb(hex: string)  | Converts a hex color code to RGB.  | #ffffff  | { r: 255, g: 255, b: 255 }  |
| formatDate(date: Date)  | Formats a Date object to YYYY-MM-DD string.  | new Date('2023-10-05')  | '2023-10-05'  |
| copyToClipboard(text: string)  | Copies the provided text to the clipboard. (for frontend)  | "Hello, World!"  | Copied  |
| scrollToTop()  | Smoothly scrolls the page to the top (for frontend)  | void  | Scrolls to the top of the page  |
| getFileExtension(filename: string)  | Extracts the file extension from a given filename.  | example.js  | "js"  |
| getDecimalFormating(num: number | undefined | string, isDecimal: boolean - default true)  | Formats a number into a decimal string with optional decimal places.  | getDecimalFormating(1234.567, true)  | "1,234.57"  |
| parseJSON(str: string)  | Parses a JSON string. Returns the parsed object or the original string if parsing fails.  | '{"name": "John", "age": 30}'  | { name: 'John', age: 30 }  |
| randomString(length: Integer)  | Generates a random alphanumeric string of a specified length.  | 5  | "a1b2c"  |
| truncateString(str: string, length: number)  | Truncates a string to a specified length and appends "..." if necessary.  | truncateString("Hello, world!", 5)  | "Hello..."  |
| capitalize(str: string)  | Capitalizes the first character of a string. Returns empty if input is falsy.  | "hello"  | "Hello"  |
| capitalizeName(name: string)  | Returns the initials of a name in uppercase.  | "john doe"  | "JD"  |
| capitalizeWords(str: string, splitLetter: string)  | Capitalizes the first letter of each word in a string based on a delimiter.  | capitalizeName("date_available", _)  | "Date Available"  |
| isObject(value)  | Checks if the value is an object (not an array).  | { key: 'value' }  | true  |
| isArray(value)  | Checks if a value is an array.  | [1, 2, 3]  | true  |
| isFunction(value)  | Checks if the provided value is a function.  | function  | true  |
| isString(value)  | Checks if the provided value is of type string.  | "hello"  | true  |
| isNumber(value)  | Checks if the provided value is a valid number.  | 42  | true  |
| isEmpty(value)  | Checks if a value is an empty object or array. Returns true if the value is an empty object or array, otherwise false.  | {}  | true  |
| isEmptyObject(value: object)  | Checks if an object is empty (has no keys).  | {}  | true  |
| objectToQueryString(obj: Record<string, any>)  | Converts an object into a URL-encoded query string.  | obj: Record<string, any>  | string  |
| deepObjectToQueryString(obj: any, prefix: string)  | Converts a nested object into a URL-encoded query string.  | deepObjectToQueryString(obj, "")  | string  |
| shortenAddress(address: string) | Shortens a wallet address by showing first 5 and last 5 characters with ellipsis in between | (address: string | undefined) => string | shortenAddress("0x71C7656EC7ab88b098defB751B7401B5f6d8976F") → "0x71C...8976F" |
| convertDecToHex(num: number) | Converts a decimal number to its hexadecimal string representation | (num: number) => string | convertDecToHex(255) → "ff" |
| convertHexToDec(str: string or number) | Converts a hexadecimal string or number to its decimal equivalent | (str: string | number) => number | convertHexToDec("0x1a") → 26 |
| convertNumberToCurrency(num: number, locales?, currency?) | Converts a number to currency format using Intl.NumberFormat | (num: number, locales = "en-US", currency = "USD") => string | convertNumberToCurrency(1234.56) → "$1,234.56" |
