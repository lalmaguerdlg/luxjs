(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lux"] = factory();
	else
		root["lux"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lux.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/gl-matrix/src/gl-matrix.js":
/*!*************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix.js ***!
  \*************************************************/
/*! exports provided: glMatrix, mat2, mat2d, mat3, mat4, quat, quat2, vec2, vec3, vec4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gl_matrix_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gl-matrix/common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "glMatrix", function() { return _gl_matrix_common_js__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _gl_matrix_mat2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gl-matrix/mat2.js */ "./node_modules/gl-matrix/src/gl-matrix/mat2.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2", function() { return _gl_matrix_mat2_js__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _gl_matrix_mat2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gl-matrix/mat2d.js */ "./node_modules/gl-matrix/src/gl-matrix/mat2d.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat2d", function() { return _gl_matrix_mat2d_js__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _gl_matrix_mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gl-matrix/mat3.js */ "./node_modules/gl-matrix/src/gl-matrix/mat3.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat3", function() { return _gl_matrix_mat3_js__WEBPACK_IMPORTED_MODULE_3__; });
/* harmony import */ var _gl_matrix_mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gl-matrix/mat4.js */ "./node_modules/gl-matrix/src/gl-matrix/mat4.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mat4", function() { return _gl_matrix_mat4_js__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _gl_matrix_quat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gl-matrix/quat.js */ "./node_modules/gl-matrix/src/gl-matrix/quat.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat", function() { return _gl_matrix_quat_js__WEBPACK_IMPORTED_MODULE_5__; });
/* harmony import */ var _gl_matrix_quat2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gl-matrix/quat2.js */ "./node_modules/gl-matrix/src/gl-matrix/quat2.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "quat2", function() { return _gl_matrix_quat2_js__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var _gl_matrix_vec2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gl-matrix/vec2.js */ "./node_modules/gl-matrix/src/gl-matrix/vec2.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec2", function() { return _gl_matrix_vec2_js__WEBPACK_IMPORTED_MODULE_7__; });
/* harmony import */ var _gl_matrix_vec3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gl-matrix/vec3.js */ "./node_modules/gl-matrix/src/gl-matrix/vec3.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec3", function() { return _gl_matrix_vec3_js__WEBPACK_IMPORTED_MODULE_8__; });
/* harmony import */ var _gl_matrix_vec4_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gl-matrix/vec4.js */ "./node_modules/gl-matrix/src/gl-matrix/vec4.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "vec4", function() { return _gl_matrix_vec4_js__WEBPACK_IMPORTED_MODULE_9__; });













/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/common.js":
/*!********************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/common.js ***!
  \********************************************************/
/*! exports provided: EPSILON, ARRAY_TYPE, RANDOM, setMatrixArrayType, toRadian, equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPSILON", function() { return EPSILON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY_TYPE", function() { return ARRAY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANDOM", function() { return RANDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatrixArrayType", function() { return setMatrixArrayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRadian", function() { return toRadian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
function setMatrixArrayType(type) {
    ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
function toRadian(a) {
    return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
function equals(a, b) {
    return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}


/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/mat2.js":
/*!******************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/mat2.js ***!
  \******************************************************/
/*! exports provided: create, clone, copy, identity, fromValues, set, transpose, invert, adjoint, determinant, multiply, rotate, scale, fromRotation, fromScaling, str, frob, LDU, add, subtract, exactEquals, equals, multiplyScalar, multiplyScalarAndAdd, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LDU", function() { return LDU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");

/**
 * 2x2 Matrix
 * @module mat2
 */
/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
function create() {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}
/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
function clone(a) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}
/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}
/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}
/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */
function fromValues(m00, m01, m10, m11) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
    out[0] = m00;
    out[1] = m01;
    out[2] = m10;
    out[3] = m11;
    return out;
}
/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */
function set(out, m00, m01, m10, m11) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m10;
    out[3] = m11;
    return out;
}
/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache
    // some values
    if (out === a) {
        var a1 = a[1];
        out[1] = a[2];
        out[2] = a1;
    }
    else {
        out[0] = a[0];
        out[1] = a[2];
        out[2] = a[1];
        out[3] = a[3];
    }
    return out;
}
/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function invert(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    // Calculate the determinant
    var det = a0 * a3 - a2 * a1;
    if (!det) {
        return null;
    }
    det = 1.0 / det;
    out[0] = a3 * det;
    out[1] = -a1 * det;
    out[2] = -a2 * det;
    out[3] = a0 * det;
    return out;
}
/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function adjoint(out, a) {
    // Caching this value is nessecary if out == a
    var a0 = a[0];
    out[0] = a[3];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a0;
    return out;
}
/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
    return a[0] * a[3] - a[2] * a[1];
}
/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function multiply(out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    return out;
}
/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function rotate(out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = a0 * c + a2 * s;
    out[1] = a1 * c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    return out;
}
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
function scale(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function fromRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = -s;
    out[3] = c;
    return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */
function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = v[1];
    return out;
}
/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
    return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
    return (Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2)));
}
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */
function LDU(L, D, U, a) {
    L[2] = a[2] / a[0];
    U[0] = a[0];
    U[1] = a[1];
    U[3] = a[3] - L[2] * U[1];
    return [L, D, U];
}
/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    return (Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
        Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
        Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
        Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)));
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
}
/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    return out;
}
/**
 * Alias for {@link mat2.multiply}
 * @function
 */
var mul = multiply;
/**
 * Alias for {@link mat2.subtract}
 * @function
 */
var sub = subtract;


/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/mat2d.js":
/*!*******************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/mat2d.js ***!
  \*******************************************************/
/*! exports provided: create, clone, copy, identity, fromValues, set, invert, determinant, multiply, rotate, scale, translate, fromRotation, fromScaling, fromTranslation, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");

/**
 * 2x3 Matrix
 * @module mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */
/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
function create() {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
}
/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
function clone(a) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
}
/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
}
/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
}
/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */
function fromValues(a, b, c, d, tx, ty) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](6);
    out[0] = a;
    out[1] = b;
    out[2] = c;
    out[3] = d;
    out[4] = tx;
    out[5] = ty;
    return out;
}
/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */
function set(out, a, b, c, d, tx, ty) {
    out[0] = a;
    out[1] = b;
    out[2] = c;
    out[3] = d;
    out[4] = tx;
    out[5] = ty;
    return out;
}
/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function invert(out, a) {
    var aa = a[0], ab = a[1], ac = a[2], ad = a[3];
    var atx = a[4], aty = a[5];
    var det = aa * ad - ab * ac;
    if (!det) {
        return null;
    }
    det = 1.0 / det;
    out[0] = ad * det;
    out[1] = -ab * det;
    out[2] = -ac * det;
    out[3] = aa * det;
    out[4] = (ac * aty - ad * atx) * det;
    out[5] = (ab * atx - aa * aty) * det;
    return out;
}
/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
    return a[0] * a[3] - a[1] * a[2];
}
/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function multiply(out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    out[4] = a0 * b4 + a2 * b5 + a4;
    out[5] = a1 * b4 + a3 * b5 + a5;
    return out;
}
/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function rotate(out, a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = a0 * c + a2 * s;
    out[1] = a1 * c + a3 * s;
    out[2] = a0 * -s + a2 * c;
    out[3] = a1 * -s + a3 * c;
    out[4] = a4;
    out[5] = a5;
    return out;
}
/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
function scale(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
    var v0 = v[0], v1 = v[1];
    out[0] = a0 * v0;
    out[1] = a1 * v0;
    out[2] = a2 * v1;
    out[3] = a3 * v1;
    out[4] = a4;
    out[5] = a5;
    return out;
}
/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
function translate(out, a, v) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
    var v0 = v[0], v1 = v[1];
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = a0 * v0 + a2 * v1 + a4;
    out[5] = a1 * v0 + a3 * v1 + a5;
    return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function fromRotation(out, rad) {
    var s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = -s;
    out[3] = c;
    out[4] = 0;
    out[5] = 0;
    return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */
function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = v[1];
    out[4] = 0;
    out[5] = 0;
    return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */
function fromTranslation(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = v[0];
    out[5] = v[1];
    return out;
}
/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
    return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
        a[3] + ', ' + a[4] + ', ' + a[5] + ')';
}
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
    return (Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1));
}
/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    return out;
}
/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    out[4] = a[4] + (b[4] * scale);
    out[5] = a[5] + (b[5] * scale);
    return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
    return (Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
        Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
        Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
        Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
        Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
        Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)));
}
/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
var mul = multiply;
/**
 * Alias for {@link mat2d.subtract}
 * @function
 */
var sub = subtract;


/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/mat3.js":
/*!******************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/mat3.js ***!
  \******************************************************/
/*! exports provided: create, fromMat4, clone, copy, fromValues, set, identity, transpose, invert, adjoint, determinant, multiply, translate, rotate, scale, fromTranslation, fromRotation, fromScaling, fromMat2d, fromQuat, normalFromMat4, projection, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function() { return fromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat2d", function() { return fromMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalFromMat4", function() { return normalFromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projection", function() { return projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");

/**
 * 3x3 Matrix
 * @module mat3
 */
/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create() {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
function fromMat4(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
function clone(a) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](9);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    }
    else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }
    return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    var b01 = a22 * a11 - a12 * a21;
    var b11 = -a22 * a10 + a12 * a20;
    var b21 = a21 * a10 - a11 * a20;
    // Calculate the determinant
    var det = a00 * b01 + a01 * b11 + a02 * b21;
    if (!det) {
        return null;
    }
    det = 1.0 / det;
    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function adjoint(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    out[0] = (a11 * a22 - a12 * a21);
    out[1] = (a02 * a21 - a01 * a22);
    out[2] = (a01 * a12 - a02 * a11);
    out[3] = (a12 * a20 - a10 * a22);
    out[4] = (a00 * a22 - a02 * a20);
    out[5] = (a02 * a10 - a00 * a12);
    out[6] = (a10 * a21 - a11 * a20);
    out[7] = (a01 * a20 - a00 * a21);
    out[8] = (a00 * a11 - a01 * a10);
    return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    var b00 = b[0], b01 = b[1], b02 = b[2];
    var b10 = b[3], b11 = b[4], b12 = b[5];
    var b20 = b[6], b21 = b[7], b22 = b[8];
    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;
    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;
    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
function translate(out, a, v) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], x = v[0], y = v[1];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a10;
    out[4] = a11;
    out[5] = a12;
    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate(out, a, rad) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c * a00 + s * a10;
    out[1] = c * a01 + s * a11;
    out[2] = c * a02 + s * a12;
    out[3] = c * a10 - s * a00;
    out[4] = c * a11 - s * a01;
    out[5] = c * a12 - s * a02;
    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
}
;
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale(out, a, v) {
    var x = v[0], y = v[1];
    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];
    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */
function fromTranslation(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = v[0];
    out[7] = v[1];
    out[8] = 1;
    return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function fromRotation(out, rad) {
    var s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = -s;
    out[4] = c;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */
function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = v[1];
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
function fromMat2d(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = 0;
    out[3] = a[2];
    out[4] = a[3];
    out[5] = 0;
    out[6] = a[4];
    out[7] = a[5];
    out[8] = 1;
    return out;
}
/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var yx = y * x2;
    var yy = y * y2;
    var zx = z * x2;
    var zy = z * y2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;
    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;
    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;
    return out;
}
/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
function normalFromMat4(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    // Calculate the determinant
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) {
        return null;
    }
    det = 1.0 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */
function projection(out, width, height) {
    out[0] = 2 / width;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = -2 / height;
    out[5] = 0;
    out[6] = -1;
    out[7] = 1;
    out[8] = 1;
    return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
    return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' +
        a[3] + ', ' + a[4] + ', ' + a[5] + ', ' +
        a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
    return (Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2)));
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    out[4] = a[4] + (b[4] * scale);
    out[5] = a[5] + (b[5] * scale);
    out[6] = a[6] + (b[6] * scale);
    out[7] = a[7] + (b[7] * scale);
    out[8] = a[8] + (b[8] * scale);
    return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] &&
        a[3] === b[3] && a[4] === b[4] && a[5] === b[5] &&
        a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
    return (Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
        Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
        Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
        Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
        Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
        Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
        Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
        Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
        Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8)));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */
var mul = multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */
var sub = subtract;


/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/mat4.js":
/*!******************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/mat4.js ***!
  \******************************************************/
/*! exports provided: create, clone, copy, fromValues, set, identity, transpose, invert, adjoint, determinant, multiply, translate, scale, rotate, rotateX, rotateY, rotateZ, fromTranslation, fromScaling, fromRotation, fromXRotation, fromYRotation, fromZRotation, fromRotationTranslation, fromQuat2, getTranslation, getScaling, getRotation, fromRotationTranslationScale, fromRotationTranslationScaleOrigin, fromQuat, frustum, perspective, perspectiveFromFieldOfView, ortho, lookAt, targetTo, str, frob, add, subtract, multiplyScalar, multiplyScalarAndAdd, exactEquals, equals, mul, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjoint", function() { return adjoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromScaling", function() { return fromScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromXRotation", function() { return fromXRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromYRotation", function() { return fromYRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromZRotation", function() { return fromZRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslation", function() { return fromRotationTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat2", function() { return fromQuat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function() { return getTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaling", function() { return getScaling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRotation", function() { return getRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScale", function() { return fromRotationTranslationScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationScaleOrigin", function() { return fromRotationTranslationScaleOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromQuat", function() { return fromQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frustum", function() { return frustum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspective", function() { return perspective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspectiveFromFieldOfView", function() { return perspectiveFromFieldOfView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ortho", function() { return ortho; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookAt", function() { return lookAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetTo", function() { return targetTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frob", function() { return frob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalar", function() { return multiplyScalar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */
/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
function clone(a) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](16);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3];
        var a12 = a[6], a13 = a[7];
        var a23 = a[11];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    }
    else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    // Calculate the determinant
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) {
        return null;
    }
    det = 1.0 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    out[0] = (a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22));
    out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2] = (a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12));
    out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5] = (a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22));
    out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7] = (a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12));
    out[8] = (a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21));
    out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] = (a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11));
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] = (a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21));
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] = (a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11));
    return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    // Cache only the current line of the second matrix
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
    var x = v[0], y = v[1], z = v[2];
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    }
    else {
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];
        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a03;
        out[4] = a10;
        out[5] = a11;
        out[6] = a12;
        out[7] = a13;
        out[8] = a20;
        out[9] = a21;
        out[10] = a22;
        out[11] = a23;
        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }
    return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
    var x = v[0], y = v[1], z = v[2];
    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len = Math.sqrt(x * x + y * y + z * z);
    var s, c, t;
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    var b00, b01, b02;
    var b10, b11, b12;
    var b20, b21, b22;
    if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
        return null;
    }
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    // Construct the elements of the rotation matrix
    b00 = x * x * t + c;
    b01 = y * x * t + z * s;
    b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;
    b11 = y * y * t + c;
    b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;
    b21 = y * z * t - x * s;
    b22 = z * z * t + c;
    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    if (a !== out) { // If the source and destination differ, copy the unchanged rows
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    if (a !== out) { // If the source and destination differ, copy the unchanged last row
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromTranslation(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */
function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = v[1];
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = v[2];
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function fromRotation(out, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len = Math.sqrt(x * x + y * y + z * z);
    var s, c, t;
    if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
        return null;
    }
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    // Perform rotation-specific matrix multiplication
    out[0] = x * x * t + c;
    out[1] = y * x * t + z * s;
    out[2] = z * x * t - y * s;
    out[3] = 0;
    out[4] = x * y * t - z * s;
    out[5] = y * y * t + c;
    out[6] = z * y * t + x * s;
    out[7] = 0;
    out[8] = x * z * t + y * s;
    out[9] = y * z * t - x * s;
    out[10] = z * z * t + c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromXRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    // Perform axis-specific matrix multiplication
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = c;
    out[6] = s;
    out[7] = 0;
    out[8] = 0;
    out[9] = -s;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromYRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    // Perform axis-specific matrix multiplication
    out[0] = c;
    out[1] = 0;
    out[2] = -s;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = s;
    out[9] = 0;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromZRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    // Perform axis-specific matrix multiplication
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = 0;
    out[4] = -s;
    out[5] = c;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {quat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */
function fromQuat2(out, a) {
    var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
    var magnitude = bx * bx + by * by + bz * bz + bw * bw;
    //Only scale if it makes sense
    if (magnitude > 0) {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
    }
    else {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
    }
    fromRotationTranslation(out, a, translation);
    return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
    out[0] = mat[12];
    out[1] = mat[13];
    out[2] = mat[14];
    return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
    var m11 = mat[0];
    var m12 = mat[1];
    var m13 = mat[2];
    var m21 = mat[4];
    var m22 = mat[5];
    var m23 = mat[6];
    var m31 = mat[8];
    var m32 = mat[9];
    var m33 = mat[10];
    out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
    out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
    out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
    return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
function getRotation(out, mat) {
    // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
    var trace = mat[0] + mat[5] + mat[10];
    var S = 0;
    if (trace > 0) {
        S = Math.sqrt(trace + 1.0) * 2;
        out[3] = 0.25 * S;
        out[0] = (mat[6] - mat[9]) / S;
        out[1] = (mat[8] - mat[2]) / S;
        out[2] = (mat[1] - mat[4]) / S;
    }
    else if ((mat[0] > mat[5]) && (mat[0] > mat[10])) {
        S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
        out[3] = (mat[6] - mat[9]) / S;
        out[0] = 0.25 * S;
        out[1] = (mat[1] + mat[4]) / S;
        out[2] = (mat[8] + mat[2]) / S;
    }
    else if (mat[5] > mat[10]) {
        S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
        out[3] = (mat[8] - mat[2]) / S;
        out[0] = (mat[1] + mat[4]) / S;
        out[1] = 0.25 * S;
        out[2] = (mat[6] + mat[9]) / S;
    }
    else {
        S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
        out[3] = (mat[1] - mat[4]) / S;
        out[0] = (mat[8] + mat[2]) / S;
        out[1] = (mat[6] + mat[9]) / S;
        out[2] = 0.25 * S;
    }
    return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    var ox = o[0];
    var oy = o[1];
    var oz = o[2];
    var out0 = (1 - (yy + zz)) * sx;
    var out1 = (xy + wz) * sx;
    var out2 = (xz - wy) * sx;
    var out4 = (xy - wz) * sy;
    var out5 = (1 - (xx + zz)) * sy;
    var out6 = (yz + wx) * sy;
    var out8 = (xz + wy) * sz;
    var out9 = (yz - wx) * sz;
    var out10 = (1 - (xx + yy)) * sz;
    out[0] = out0;
    out[1] = out1;
    out[2] = out2;
    out[3] = 0;
    out[4] = out4;
    out[5] = out5;
    out[6] = out6;
    out[7] = 0;
    out[8] = out8;
    out[9] = out9;
    out[10] = out10;
    out[11] = 0;
    out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
    out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
    out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
    out[15] = 1;
    return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var yx = y * x2;
    var yy = y * y2;
    var zx = z * x2;
    var zy = z * y2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;
    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;
    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left);
    var tb = 1 / (top - bottom);
    var nf = 1 / (near - far);
    out[0] = (near * 2) * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = (near * 2) * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (far * near * 2) * nf;
    out[15] = 0;
    return out;
}
/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2);
    var nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (2 * far * near) * nf;
    out[15] = 0;
    return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspectiveFromFieldOfView(out, fov, near, far) {
    var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
    var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
    var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
    var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
    var xScale = 2.0 / (leftTan + rightTan);
    var yScale = 2.0 / (upTan + downTan);
    out[0] = xScale;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    out[4] = 0.0;
    out[5] = yScale;
    out[6] = 0.0;
    out[7] = 0.0;
    out[8] = -((leftTan - rightTan) * xScale * 0.5);
    out[9] = ((upTan - downTan) * yScale * 0.5);
    out[10] = far / (near - far);
    out[11] = -1.0;
    out[12] = 0.0;
    out[13] = 0.0;
    out[14] = (far * near) / (near - far);
    out[15] = 0.0;
    return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
    var eyex = eye[0];
    var eyey = eye[1];
    var eyez = eye[2];
    var upx = up[0];
    var upy = up[1];
    var upz = up[2];
    var centerx = center[0];
    var centery = center[1];
    var centerz = center[2];
    if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] &&
        Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] &&
        Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
        return identity(out);
    }
    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;
    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;
    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    }
    else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }
    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;
    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    }
    else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }
    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;
    return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function targetTo(out, eye, target, up) {
    var eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
    var z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
    var len = z0 * z0 + z1 * z1 + z2 * z2;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        z0 *= len;
        z1 *= len;
        z2 *= len;
    }
    var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
    len = x0 * x0 + x1 * x1 + x2 * x2;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }
    out[0] = x0;
    out[1] = x1;
    out[2] = x2;
    out[3] = 0;
    out[4] = z1 * x2 - z2 * x1;
    out[5] = z2 * x0 - z0 * x2;
    out[6] = z0 * x1 - z1 * x0;
    out[7] = 0;
    out[8] = z0;
    out[9] = z1;
    out[10] = z2;
    out[11] = 0;
    out[12] = eyex;
    out[13] = eyey;
    out[14] = eyez;
    out[15] = 1;
    return out;
}
;
/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
    return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
        a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' +
        a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' +
        a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
    return (Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2)));
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    out[9] = a[9] + b[9];
    out[10] = a[10] + b[10];
    out[11] = a[11] + b[11];
    out[12] = a[12] + b[12];
    out[13] = a[13] + b[13];
    out[14] = a[14] + b[14];
    out[15] = a[15] + b[15];
    return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    out[9] = a[9] - b[9];
    out[10] = a[10] - b[10];
    out[11] = a[11] - b[11];
    out[12] = a[12] - b[12];
    out[13] = a[13] - b[13];
    out[14] = a[14] - b[14];
    out[15] = a[15] - b[15];
    return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    out[9] = a[9] * b;
    out[10] = a[10] * b;
    out[11] = a[11] * b;
    out[12] = a[12] * b;
    out[13] = a[13] * b;
    out[14] = a[14] * b;
    out[15] = a[15] * b;
    return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    out[4] = a[4] + (b[4] * scale);
    out[5] = a[5] + (b[5] * scale);
    out[6] = a[6] + (b[6] * scale);
    out[7] = a[7] + (b[7] * scale);
    out[8] = a[8] + (b[8] * scale);
    out[9] = a[9] + (b[9] * scale);
    out[10] = a[10] + (b[10] * scale);
    out[11] = a[11] + (b[11] * scale);
    out[12] = a[12] + (b[12] * scale);
    out[13] = a[13] + (b[13] * scale);
    out[14] = a[14] + (b[14] * scale);
    out[15] = a[15] + (b[15] * scale);
    return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] &&
        a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] &&
        a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] &&
        a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
    var a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
    var a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
    var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
    var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    return (Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
        Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
        Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
        Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
        Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
        Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
        Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
        Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
        Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8)) &&
        Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a9), Math.abs(b9)) &&
        Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a10), Math.abs(b10)) &&
        Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a11), Math.abs(b11)) &&
        Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a12), Math.abs(b12)) &&
        Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a13), Math.abs(b13)) &&
        Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a14), Math.abs(b14)) &&
        Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a15), Math.abs(b15)));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */
var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */
var sub = subtract;


/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/quat.js":
/*!******************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/quat.js ***!
  \******************************************************/
/*! exports provided: create, identity, setAxisAngle, getAxisAngle, multiply, rotateX, rotateY, rotateZ, calculateW, slerp, invert, conjugate, fromMat3, fromEuler, str, clone, fromValues, copy, set, add, mul, scale, dot, lerp, length, len, squaredLength, sqrLen, normalize, exactEquals, equals, rotationTo, sqlerp, setAxes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxisAngle", function() { return setAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAxisAngle", function() { return getAxisAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateW", function() { return calculateW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slerp", function() { return slerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function() { return conjugate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat3", function() { return fromMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEuler", function() { return fromEuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotationTo", function() { return rotationTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqlerp", function() { return sqlerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAxes", function() { return setAxes; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/gl-matrix/src/gl-matrix/mat3.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/gl-matrix/src/gl-matrix/vec3.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/gl-matrix/src/gl-matrix/vec4.js");




/**
 * Quaternion
 * @module quat
 */
/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
function create() {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
    rad = rad * 0.5;
    var s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
}
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
function getAxisAngle(out_axis, q) {
    var rad = Math.acos(q[3]) * 2.0;
    var s = Math.sin(rad / 2.0);
    if (s != 0.0) {
        out_axis[0] = q[0] / s;
        out_axis[1] = q[1] / s;
        out_axis[2] = q[2] / s;
    }
    else {
        // If s is zero, return any axis (no rotation - axis does not matter)
        out_axis[0] = 1;
        out_axis[1] = 0;
        out_axis[2] = 0;
    }
    return rad;
}
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = b[0], by = b[1], bz = b[2], bw = b[3];
    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var by = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bz = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
function calculateW(out, a) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
    return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
    // benchmarks:
    //    http://jsperf.com/quaternion-slerp-implementations
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = b[0], by = b[1], bz = b[2], bw = b[3];
    var omega, cosom, sinom, scale0, scale1;
    // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    // adjust signs (if necessary)
    if (cosom < 0.0) {
        cosom = -cosom;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
    }
    // calculate coefficients
    if ((1.0 - cosom) > 0.000001) {
        // standard case (slerp)
        omega = Math.acos(cosom);
        sinom = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    }
    else {
        // "from" and "to" quaternions are very close
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    }
    // calculate final values
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
    var invDot = dot ? 1.0 / dot : 0;
    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
    out[0] = -a0 * invDot;
    out[1] = -a1 * invDot;
    out[2] = -a2 * invDot;
    out[3] = a3 * invDot;
    return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    var fTrace = m[0] + m[4] + m[8];
    var fRoot;
    if (fTrace > 0.0) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0); // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot; // 1/(4w)
        out[0] = (m[5] - m[7]) * fRoot;
        out[1] = (m[6] - m[2]) * fRoot;
        out[2] = (m[1] - m[3]) * fRoot;
    }
    else {
        // |w| <= 1/2
        var i = 0;
        if (m[4] > m[0])
            i = 1;
        if (m[8] > m[i * 3 + i])
            i = 2;
        var j = (i + 1) % 3;
        var k = (i + 2) % 3;
        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
    }
    return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */
function fromEuler(out, x, y, z) {
    var halfToRad = 0.5 * Math.PI / 180.0;
    x *= halfToRad;
    y *= halfToRad;
    z *= halfToRad;
    var sx = Math.sin(x);
    var cx = Math.cos(x);
    var sy = Math.sin(y);
    var cy = Math.cos(y);
    var sz = Math.sin(z);
    var cz = Math.cos(z);
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
    return out;
}
/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
    return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
var clone = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["clone"];
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
var fromValues = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["fromValues"];
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
var copy = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["copy"];
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
var set = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["set"];
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
var add = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["add"];
/**
 * Alias for {@link quat.multiply}
 * @function
 */
var mul = multiply;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
var scale = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["scale"];
/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
var dot = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["dot"];
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */
var lerp = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["lerp"];
/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */
var length = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["length"];
/**
 * Alias for {@link quat.length}
 * @function
 */
var len = length;
/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
var squaredLength = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["squaredLength"];
/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
var sqrLen = squaredLength;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
var normalize = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["normalize"];
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
var exactEquals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["exactEquals"];
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
var equals = _vec4_js__WEBPACK_IMPORTED_MODULE_3__["equals"];
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
var rotationTo = (function () {
    var tmpvec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["create"]();
    var xUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](1, 0, 0);
    var yUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"](0, 1, 0);
    return function (out, a, b) {
        var dot = _vec3_js__WEBPACK_IMPORTED_MODULE_2__["dot"](a, b);
        if (dot < -0.999999) {
            _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, xUnitVec3, a);
            if (_vec3_js__WEBPACK_IMPORTED_MODULE_2__["len"](tmpvec3) < 0.000001)
                _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, yUnitVec3, a);
            _vec3_js__WEBPACK_IMPORTED_MODULE_2__["normalize"](tmpvec3, tmpvec3);
            setAxisAngle(out, tmpvec3, Math.PI);
            return out;
        }
        else if (dot > 0.999999) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out;
        }
        else {
            _vec3_js__WEBPACK_IMPORTED_MODULE_2__["cross"](tmpvec3, a, b);
            out[0] = tmpvec3[0];
            out[1] = tmpvec3[1];
            out[2] = tmpvec3[2];
            out[3] = 1 + dot;
            return normalize(out, out);
        }
    };
})();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */
var sqlerp = (function () {
    var temp1 = create();
    var temp2 = create();
    return function (out, a, b, c, d, t) {
        slerp(temp1, a, d, t);
        slerp(temp2, b, c, t);
        slerp(out, temp1, temp2, 2 * t * (1 - t));
        return out;
    };
}());
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
var setAxes = (function () {
    var matr = _mat3_js__WEBPACK_IMPORTED_MODULE_1__["create"]();
    return function (out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];
        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];
        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];
        return normalize(out, fromMat3(out, matr));
    };
})();


/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/quat2.js":
/*!*******************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/quat2.js ***!
  \*******************************************************/
/*! exports provided: create, clone, fromValues, fromRotationTranslationValues, fromRotationTranslation, fromTranslation, fromRotation, fromMat4, copy, identity, set, getReal, getDual, setReal, setDual, getTranslation, translate, rotateX, rotateY, rotateZ, rotateByQuatAppend, rotateByQuatPrepend, rotateAroundAxis, add, multiply, mul, scale, dot, lerp, invert, conjugate, length, len, squaredLength, sqrLen, normalize, str, exactEquals, equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslationValues", function() { return fromRotationTranslationValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotationTranslation", function() { return fromRotationTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTranslation", function() { return fromTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRotation", function() { return fromRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMat4", function() { return fromMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReal", function() { return getReal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDual", function() { return getDual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setReal", function() { return setReal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDual", function() { return setDual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslation", function() { return getTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateByQuatAppend", function() { return rotateByQuatAppend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateByQuatPrepend", function() { return rotateByQuatPrepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateAroundAxis", function() { return rotateAroundAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conjugate", function() { return conjugate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quat.js */ "./node_modules/gl-matrix/src/gl-matrix/quat.js");
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat4.js */ "./node_modules/gl-matrix/src/gl-matrix/mat4.js");



/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */
/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */
function create() {
    var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
    dq[0] = 0;
    dq[1] = 0;
    dq[2] = 0;
    dq[3] = 1;
    dq[4] = 0;
    dq[5] = 0;
    dq[6] = 0;
    dq[7] = 0;
    return dq;
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */
function clone(a) {
    var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
    dq[0] = a[0];
    dq[1] = a[1];
    dq[2] = a[2];
    dq[3] = a[3];
    dq[4] = a[4];
    dq[5] = a[5];
    dq[6] = a[6];
    dq[7] = a[7];
    return dq;
}
/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */
function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
    var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
    dq[0] = x1;
    dq[1] = y1;
    dq[2] = z1;
    dq[3] = w1;
    dq[4] = x2;
    dq[5] = y2;
    dq[6] = z2;
    dq[7] = w2;
    return dq;
}
/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */
function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
    var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](8);
    dq[0] = x1;
    dq[1] = y1;
    dq[2] = z1;
    dq[3] = w1;
    var ax = x2 * 0.5, ay = y2 * 0.5, az = z2 * 0.5;
    dq[4] = ax * w1 + ay * z1 - az * y1;
    dq[5] = ay * w1 + az * x1 - ax * z1;
    dq[6] = az * w1 + ax * y1 - ay * x1;
    dq[7] = -ax * x1 - ay * y1 - az * z1;
    return dq;
}
/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q quaternion
 * @param {vec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromRotationTranslation(out, q, t) {
    var ax = t[0] * 0.5, ay = t[1] * 0.5, az = t[2] * 0.5, bx = q[0], by = q[1], bz = q[2], bw = q[3];
    out[0] = bx;
    out[1] = by;
    out[2] = bz;
    out[3] = bw;
    out[4] = ax * bw + ay * bz - az * by;
    out[5] = ay * bw + az * bx - ax * bz;
    out[6] = az * bw + ax * by - ay * bx;
    out[7] = -ax * bx - ay * by - az * bz;
    return out;
}
/**
 * Creates a dual quat from a translation
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {vec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromTranslation(out, t) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = t[0] * 0.5;
    out[5] = t[1] * 0.5;
    out[6] = t[2] * 0.5;
    out[7] = 0;
    return out;
}
/**
 * Creates a dual quat from a quaternion
 *
 * @param {quat2} dual quaternion receiving operation result
 * @param {quat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */
function fromRotation(out, q) {
    out[0] = q[0];
    out[1] = q[1];
    out[2] = q[2];
    out[3] = q[3];
    out[4] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    return out;
}
/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {mat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */
function fromMat4(out, a) {
    //TODO Optimize this
    var outer = _quat_js__WEBPACK_IMPORTED_MODULE_1__["create"]();
    _mat4_js__WEBPACK_IMPORTED_MODULE_2__["getRotation"](outer, a);
    var t = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
    _mat4_js__WEBPACK_IMPORTED_MODULE_2__["getTranslation"](t, a);
    fromRotationTranslation(out, outer, t);
    return out;
}
/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    return out;
}
/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */
function identity(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    return out;
}
/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */
function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
    out[0] = x1;
    out[1] = y1;
    out[2] = z1;
    out[3] = w1;
    out[4] = x2;
    out[5] = y2;
    out[6] = z2;
    out[7] = w2;
    return out;
}
/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} real part
 */
var getReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__["copy"];
/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {quat2} a Dual Quaternion
 * @return {quat} dual part
 */
function getDual(out, a) {
    out[0] = a[4];
    out[1] = a[5];
    out[2] = a[6];
    out[3] = a[7];
    return out;
}
/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */
var setReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__["copy"];
/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */
function setDual(out, q) {
    out[4] = q[0];
    out[5] = q[1];
    out[6] = q[2];
    out[7] = q[3];
    return out;
}
/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {quat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */
function getTranslation(out, a) {
    var ax = a[4], ay = a[5], az = a[6], aw = a[7], bx = -a[0], by = -a[1], bz = -a[2], bw = a[3];
    out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
    return out;
}
/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to translate
 * @param {vec3} v vector to translate by
 * @returns {quat2} out
 */
function translate(out, a, v) {
    var ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3], bx1 = v[0] * 0.5, by1 = v[1] * 0.5, bz1 = v[2] * 0.5, ax2 = a[4], ay2 = a[5], az2 = a[6], aw2 = a[7];
    out[0] = ax1;
    out[1] = ay1;
    out[2] = az1;
    out[3] = aw1;
    out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
    out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
    out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
    out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
    return out;
}
/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateX(out, a, rad) {
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
    _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateX"](out, a, rad);
    bx = out[0];
    by = out[1];
    bz = out[2];
    bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
}
/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateY(out, a, rad) {
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
    _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateY"](out, a, rad);
    bx = out[0];
    by = out[1];
    bz = out[2];
    bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
}
/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */
function rotateZ(out, a, rad) {
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
    _quat_js__WEBPACK_IMPORTED_MODULE_1__["rotateZ"](out, a, rad);
    bx = out[0];
    by = out[1];
    bz = out[2];
    bw = out[3];
    out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    return out;
}
/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {quat} q quaternion to rotate by
 * @returns {quat2} out
 */
function rotateByQuatAppend(out, a, q) {
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3], ax = a[0], ay = a[1], az = a[2], aw = a[3];
    out[0] = ax * qw + aw * qx + ay * qz - az * qy;
    out[1] = ay * qw + aw * qy + az * qx - ax * qz;
    out[2] = az * qw + aw * qz + ax * qy - ay * qx;
    out[3] = aw * qw - ax * qx - ay * qy - az * qz;
    ax = a[4];
    ay = a[5];
    az = a[6];
    aw = a[7];
    out[4] = ax * qw + aw * qx + ay * qz - az * qy;
    out[5] = ay * qw + aw * qy + az * qx - ax * qz;
    out[6] = az * qw + aw * qz + ax * qy - ay * qx;
    out[7] = aw * qw - ax * qx - ay * qy - az * qz;
    return out;
}
/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat} q quaternion to rotate by
 * @param {quat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */
function rotateByQuatPrepend(out, q, a) {
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3], bx = a[0], by = a[1], bz = a[2], bw = a[3];
    out[0] = qx * bw + qw * bx + qy * bz - qz * by;
    out[1] = qy * bw + qw * by + qz * bx - qx * bz;
    out[2] = qz * bw + qw * bz + qx * by - qy * bx;
    out[3] = qw * bw - qx * bx - qy * by - qz * bz;
    bx = a[4];
    by = a[5];
    bz = a[6];
    bw = a[7];
    out[4] = qx * bw + qw * bx + qy * bz - qz * by;
    out[5] = qy * bw + qw * by + qz * bx - qx * bz;
    out[6] = qz * bw + qw * bz + qx * by - qy * bx;
    out[7] = qw * bw - qx * bx - qy * by - qz * bz;
    return out;
}
/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the dual quaternion to rotate
 * @param {vec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */
function rotateAroundAxis(out, a, axis, rad) {
    //Special case for rad = 0
    if (Math.abs(rad) < _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"]) {
        return copy(out, a);
    }
    var axisLength = Math.sqrt(axis[0] * axis[0] + axis[1] * axis[1] + axis[2] * axis[2]);
    rad = rad * 0.5;
    var s = Math.sin(rad);
    var bx = s * axis[0] / axisLength;
    var by = s * axis[1] / axisLength;
    var bz = s * axis[2] / axisLength;
    var bw = Math.cos(rad);
    var ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3];
    out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
    out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
    out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
    out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
    var ax = a[4], ay = a[5], az = a[6], aw = a[7];
    out[4] = ax * bw + aw * bx + ay * bz - az * by;
    out[5] = ay * bw + aw * by + az * bx - ax * bz;
    out[6] = az * bw + aw * bz + ax * by - ay * bx;
    out[7] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
}
/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 * @function
 */
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    return out;
}
/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {quat2} out
 */
function multiply(out, a, b) {
    var ax0 = a[0], ay0 = a[1], az0 = a[2], aw0 = a[3], bx1 = b[4], by1 = b[5], bz1 = b[6], bw1 = b[7], ax1 = a[4], ay1 = a[5], az1 = a[6], aw1 = a[7], bx0 = b[0], by0 = b[1], bz0 = b[2], bw0 = b[3];
    out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
    out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
    out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
    out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
    out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
    out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
    out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
    out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
    return out;
}
/**
 * Alias for {@link quat2.multiply}
 * @function
 */
var mul = multiply;
/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    return out;
}
/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
var dot = _quat_js__WEBPACK_IMPORTED_MODULE_1__["dot"];
/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {quat2} a the first operand
 * @param {quat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */
function lerp(out, a, b, t) {
    var mt = 1 - t;
    if (dot(a, b) < 0)
        t = -t;
    out[0] = a[0] * mt + b[0] * t;
    out[1] = a[1] * mt + b[1] * t;
    out[2] = a[2] * mt + b[2] * t;
    out[3] = a[3] * mt + b[3] * t;
    out[4] = a[4] * mt + b[4] * t;
    out[5] = a[5] * mt + b[5] * t;
    out[6] = a[6] * mt + b[6] * t;
    out[7] = a[7] * mt + b[7] * t;
    return out;
}
/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */
function invert(out, a) {
    var sqlen = squaredLength(a);
    out[0] = -a[0] / sqlen;
    out[1] = -a[1] / sqlen;
    out[2] = -a[2] / sqlen;
    out[3] = a[3] / sqlen;
    out[4] = -a[4] / sqlen;
    out[5] = -a[5] / sqlen;
    out[6] = -a[6] / sqlen;
    out[7] = a[7] / sqlen;
    return out;
}
/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {quat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */
function conjugate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    out[4] = -a[4];
    out[5] = -a[5];
    out[6] = -a[6];
    out[7] = a[7];
    return out;
}
/**
 * Calculates the length of a dual quat
 *
 * @param {quat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */
var length = _quat_js__WEBPACK_IMPORTED_MODULE_1__["length"];
/**
 * Alias for {@link quat2.length}
 * @function
 */
var len = length;
/**
 * Calculates the squared length of a dual quat
 *
 * @param {quat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
var squaredLength = _quat_js__WEBPACK_IMPORTED_MODULE_1__["squaredLength"];
/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */
var sqrLen = squaredLength;
/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {quat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */
function normalize(out, a) {
    var magnitude = squaredLength(a);
    if (magnitude > 0) {
        magnitude = Math.sqrt(magnitude);
        out[0] = a[0] / magnitude;
        out[1] = a[1] / magnitude;
        out[2] = a[2] / magnitude;
        out[3] = a[3] / magnitude;
        out[4] = a[4] / magnitude;
        out[5] = a[5] / magnitude;
        out[6] = a[6] / magnitude;
        out[7] = a[7] / magnitude;
    }
    return out;
}
/**
 * Returns a string representation of a dual quatenion
 *
 * @param {quat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */
function str(a) {
    return 'quat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' +
        a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ')';
}
/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat2} a the first dual quaternion.
 * @param {quat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] &&
        a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}
/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {quat2} a the first dual quat.
 * @param {quat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
    return (Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
        Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
        Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
        Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
        Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
        Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
        Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
        Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)));
}


/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/vec2.js":
/*!******************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/vec2.js ***!
  \******************************************************/
/*! exports provided: create, clone, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, length, squaredLength, negate, inverse, normalize, dot, cross, lerp, random, transformMat2, transformMat2d, transformMat3, transformMat4, rotate, angle, str, exactEquals, equals, len, sub, mul, div, dist, sqrDist, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2", function() { return transformMat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat2d", function() { return transformMat2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");

/**
 * 2 Dimensional Vector
 * @module vec2
 */
/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
    out[0] = 0;
    out[1] = 0;
    return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
function clone(a) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
    out[0] = a[0];
    out[1] = a[1];
    return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](2);
    out[0] = x;
    out[1] = y;
    return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */
function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */
function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */
function round(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
    var x = b[0] - a[0], y = b[1] - a[1];
    return Math.sqrt(x * x + y * y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    var x = b[0] - a[0], y = b[1] - a[1];
    return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0], y = a[1];
    return Math.sqrt(x * x + y * y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
    var x = a[0], y = a[1];
    return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
    var x = a[0], y = a[1];
    var len = x * x + y * y;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
    }
    return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z;
    return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
    var ax = a[0], ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
function random(out, scale) {
    scale = scale || 1.0;
    var r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
    out[0] = Math.cos(r) * scale;
    out[1] = Math.sin(r) * scale;
    return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
    var x = a[0], y = a[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
    var x = a[0], y = a[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
    var x = a[0], y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
    var x = a[0];
    var y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {vec2} a The vec2 point to rotate
 * @param {vec2} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec2} out
 */
function rotate(out, a, b, c) {
    //Translate point to the origin
    var p0 = a[0] - b[0], p1 = a[1] - b[1], sinC = Math.sin(c), cosC = Math.cos(c);
    //perform rotation and translate to correct position
    out[0] = p0 * cosC - p1 * sinC + b[0];
    out[1] = p0 * sinC + p1 * cosC + b[1];
    return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {vec2} a The first operand
 * @param {vec2} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
    var x1 = a[0], y1 = a[1], x2 = b[0], y2 = b[1];
    var len1 = x1 * x1 + y1 * y1;
    if (len1 > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len1 = 1 / Math.sqrt(len1);
    }
    var len2 = x2 * x2 + y2 * y2;
    if (len2 > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len2 = 1 / Math.sqrt(len2);
    }
    var cosine = (x1 * x2 + y1 * y2) * len1 * len2;
    if (cosine > 1.0) {
        return 0;
    }
    else if (cosine < -1.0) {
        return Math.PI;
    }
    else {
        return Math.acos(cosine);
    }
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
    return 'vec2(' + a[0] + ', ' + a[1] + ')';
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
    var a0 = a[0], a1 = a[1];
    var b0 = b[0], b1 = b[1];
    return (Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
        Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */
var len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */
var sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */
var mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */
var div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */
var dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
var sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
var forEach = (function () {
    var vec = create();
    return function (a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) {
            stride = 2;
        }
        if (!offset) {
            offset = 0;
        }
        if (count) {
            l = Math.min((count * stride) + offset, a.length);
        }
        else {
            l = a.length;
        }
        for (i = offset; i < l; i += stride) {
            vec[0] = a[i];
            vec[1] = a[i + 1];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
        }
        return a;
    };
})();


/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/vec3.js":
/*!******************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/vec3.js ***!
  \******************************************************/
/*! exports provided: create, clone, length, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, squaredLength, negate, inverse, normalize, dot, cross, lerp, hermite, bezier, random, transformMat4, transformMat3, transformQuat, rotateX, rotateY, rotateZ, angle, str, exactEquals, equals, sub, mul, div, dist, sqrDist, len, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hermite", function() { return hermite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bezier", function() { return bezier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat3", function() { return transformMat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");

/**
 * 3 Dimensional Vector
 * @module vec3
 */
/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
function clone(a) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return Math.sqrt(x * x + y * y + z * z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */
function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */
function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */
function round(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return Math.sqrt(x * x + y * y + z * z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var len = x * x + y * y + z * z;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
    }
    return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2];
    var bx = b[0], by = b[1], bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function hermite(out, a, b, c, d, t) {
    var factorTimes2 = t * t;
    var factor1 = factorTimes2 * (2 * t - 3) + 1;
    var factor2 = factorTimes2 * (t - 2) + t;
    var factor3 = factorTimes2 * (t - 1);
    var factor4 = factorTimes2 * (3 - 2 * t);
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */
function bezier(out, a, b, c, d, t) {
    var inverseFactor = 1 - t;
    var inverseFactorTimesTwo = inverseFactor * inverseFactor;
    var factorTimes2 = t * t;
    var factor1 = inverseFactorTimesTwo * inverseFactor;
    var factor2 = 3 * t * inverseFactorTimesTwo;
    var factor3 = 3 * factorTimes2 * inverseFactor;
    var factor4 = factorTimes2 * t;
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
    scale = scale || 1.0;
    var r = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0 * Math.PI;
    var z = (_common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2.0) - 1.0;
    var zScale = Math.sqrt(1.0 - z * z) * scale;
    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale;
    return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    var w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
    // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    var x = a[0], y = a[1], z = a[2];
    // var qvec = [qx, qy, qz];
    // var uv = vec3.cross([], qvec, a);
    var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x;
    // var uuv = vec3.cross([], qvec, uv);
    var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx;
    // vec3.scale(uv, uv, 2 * w);
    var w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2;
    // vec3.scale(uuv, uuv, 2);
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2;
    // return vec3.add(out, a, vec3.add(out, uv, uuv));
    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c) {
    var p = [], r = [];
    //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];
    //perform rotation
    r[0] = p[0];
    r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
    r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c);
    //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c) {
    var p = [], r = [];
    //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];
    //perform rotation
    r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
    r[1] = p[1];
    r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c);
    //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c) {
    var p = [], r = [];
    //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];
    //perform rotation
    r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
    r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
    r[2] = p[2];
    //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
    var tempA = fromValues(a[0], a[1], a[2]);
    var tempB = fromValues(b[0], b[1], b[2]);
    normalize(tempA, tempA);
    normalize(tempB, tempB);
    var cosine = dot(tempA, tempB);
    if (cosine > 1.0) {
        return 0;
    }
    else if (cosine < -1.0) {
        return Math.PI;
    }
    else {
        return Math.acos(cosine);
    }
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
    return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2];
    var b0 = b[0], b1 = b[1], b2 = b[2];
    return (Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
        Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
        Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */
var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */
var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */
var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */
var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */
var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
var forEach = (function () {
    var vec = create();
    return function (a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) {
            stride = 3;
        }
        if (!offset) {
            offset = 0;
        }
        if (count) {
            l = Math.min((count * stride) + offset, a.length);
        }
        else {
            l = a.length;
        }
        for (i = offset; i < l; i += stride) {
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
        }
        return a;
    };
})();


/***/ }),

/***/ "./node_modules/gl-matrix/src/gl-matrix/vec4.js":
/*!******************************************************!*\
  !*** ./node_modules/gl-matrix/src/gl-matrix/vec4.js ***!
  \******************************************************/
/*! exports provided: create, clone, fromValues, copy, set, add, subtract, multiply, divide, ceil, floor, min, max, round, scale, scaleAndAdd, distance, squaredDistance, length, squaredLength, negate, inverse, normalize, dot, lerp, random, transformMat4, transformQuat, str, exactEquals, equals, sub, mul, div, dist, sqrDist, len, sqrLen, forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return fromValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAndAdd", function() { return scaleAndAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredDistance", function() { return squaredDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredLength", function() { return squaredLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMat4", function() { return transformMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformQuat", function() { return transformQuat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactEquals", function() { return exactEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sub", function() { return sub; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mul", function() { return mul; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dist", function() { return dist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrDist", function() { return sqrDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "len", function() { return len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrLen", function() { return sqrLen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/src/gl-matrix/common.js");

/**
 * 4 Dimensional Vector
 * @module vec4
 */
/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create() {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    return out;
}
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
function clone(a) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
function fromValues(x, y, z, w) {
    var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__["ARRAY_TYPE"](4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
}
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
}
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
    return out;
}
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    out[3] = a[3] / b[3];
    return out;
}
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */
function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    out[3] = Math.ceil(a[3]);
    return out;
}
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */
function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    out[3] = Math.floor(a[3]);
    return out;
}
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    out[3] = Math.min(a[3], b[3]);
    return out;
}
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
    return out;
}
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */
function round(out, a) {
    out[0] = Math.round(a[0]);
    out[1] = Math.round(a[1]);
    out[2] = Math.round(a[2]);
    out[3] = Math.round(a[3]);
    return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
}
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + (b[0] * scale);
    out[1] = a[1] + (b[1] * scale);
    out[2] = a[2] + (b[2] * scale);
    out[3] = a[3] + (b[3] * scale);
    return out;
}
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    var w = b[3] - a[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
}
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    var w = b[3] - a[3];
    return x * x + y * y + z * z + w * w;
}
/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    return x * x + y * y + z * z + w * w;
}
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = -a[3];
    return out;
}
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    out[3] = 1.0 / a[3];
    return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize(out, a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    var len = x * x + y * y + z * z + w * w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = x * len;
        out[1] = y * len;
        out[2] = z * len;
        out[3] = w * len;
    }
    return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */
function lerp(out, a, b, t) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    var aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
function random(out, vectorScale) {
    vectorScale = vectorScale || 1.0;
    // Marsaglia, George. Choosing a Point from the Surface of a
    // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
    // http://projecteuclid.org/euclid.aoms/1177692644;
    var v1, v2, v3, v4;
    var s1, s2;
    do {
        v1 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
        v2 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
        s1 = v1 * v1 + v2 * v2;
    } while (s1 >= 1);
    do {
        v3 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
        v4 = _common_js__WEBPACK_IMPORTED_MODULE_0__["RANDOM"]() * 2 - 1;
        s2 = v3 * v3 + v4 * v4;
    } while (s2 >= 1);
    var d = Math.sqrt((1 - s1) / s2);
    out[0] = scale * v1;
    out[1] = scale * v2;
    out[2] = scale * v3 * d;
    out[3] = scale * v4 * d;
    return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
}
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
function transformQuat(out, a, q) {
    var x = a[0], y = a[1], z = a[2];
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    // calculate quat * vec
    var ix = qw * x + qy * z - qz * y;
    var iy = qw * y + qz * x - qx * z;
    var iz = qw * z + qx * y - qy * x;
    var iw = -qx * x - qy * y - qz * z;
    // calculate result * inverse quat
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    out[3] = a[3];
    return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
    return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    return (Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
        Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
        Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
        Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)));
}
/**
 * Alias for {@link vec4.subtract}
 * @function
 */
var sub = subtract;
/**
 * Alias for {@link vec4.multiply}
 * @function
 */
var mul = multiply;
/**
 * Alias for {@link vec4.divide}
 * @function
 */
var div = divide;
/**
 * Alias for {@link vec4.distance}
 * @function
 */
var dist = distance;
/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
var sqrDist = squaredDistance;
/**
 * Alias for {@link vec4.length}
 * @function
 */
var len = length;
/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
var forEach = (function () {
    var vec = create();
    return function (a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) {
            stride = 4;
        }
        if (!offset) {
            offset = 0;
        }
        if (count) {
            l = Math.min((count * stride) + offset, a.length);
        }
        else {
            l = a.length;
        }
        for (i = offset; i < l; i += stride) {
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            vec[3] = a[i + 3];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
            a[i + 3] = vec[3];
        }
        return a;
    };
})();


/***/ }),

/***/ "./src/Core/component.ts":
/*!*******************************!*\
  !*** ./src/Core/component.ts ***!
  \*******************************/
/*! exports provided: Component, PhysicsComponent, BehaviourComponent, RenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicsComponent", function() { return PhysicsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviourComponent", function() { return BehaviourComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderComponent", function() { return RenderComponent; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Component = /** @class */ (function () {
    function Component() {
        this.active = true;
    }
    Component.prototype.enable = function () {
        this.active = true;
    };
    Component.prototype.disable = function () {
        this.active = false;
    };
    Component.prototype.setOwner = function (gameObject) {
        this.gameObject = gameObject;
        this.transform = this.gameObject.transform;
    };
    Component.prototype.getComponent = function (type) {
        if (!this.gameObject)
            return null;
        return this.gameObject.getComponent(type);
    };
    Component.prototype.onAttach = function () { };
    Component.prototype.awake = function () { };
    Component.prototype.start = function () { };
    Component.prototype.clone = function () {
        var cloned = new this.constructor();
        cloned = Object.assign(cloned, this);
        cloned.gameObject = undefined;
        cloned.transform = undefined;
        return cloned;
    };
    return Component;
}());

var PhysicsComponent = /** @class */ (function (_super) {
    __extends(PhysicsComponent, _super);
    function PhysicsComponent() {
        var _this = _super.call(this) || this;
        _this.kinematic = false;
        return _this;
    }
    PhysicsComponent.prototype.simulate = function (time, integrator) { };
    return PhysicsComponent;
}(Component));

var BehaviourComponent = /** @class */ (function (_super) {
    __extends(BehaviourComponent, _super);
    function BehaviourComponent() {
        return _super.call(this) || this;
    }
    BehaviourComponent.prototype.fixedUpdate = function (time) { };
    BehaviourComponent.prototype.update = function (time) { };
    BehaviourComponent.prototype.lateUpdate = function (time) { };
    return BehaviourComponent;
}(Component));

var RenderComponent = /** @class */ (function (_super) {
    __extends(RenderComponent, _super);
    function RenderComponent() {
        return _super.call(this) || this;
    }
    RenderComponent.prototype.render = function () { };
    return RenderComponent;
}(Component));



/***/ }),

/***/ "./src/Core/core.ts":
/*!**************************!*\
  !*** ./src/Core/core.ts ***!
  \**************************/
/*! exports provided: core, simulation, renderer, useScene, swapScene, run, fixedLoop, loop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "core", function() { return core; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simulation", function() { return simulation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderer", function() { return renderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScene", function() { return useScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swapScene", function() { return swapScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixedLoop", function() { return fixedLoop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loop", function() { return loop; });
/* harmony import */ var _Graphics_Renderers_forwardRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Graphics/Renderers/forwardRenderer */ "./src/Graphics/Renderers/forwardRenderer.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/Core/component.ts");
/* harmony import */ var _Physics_physicsSimulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Physics/physicsSimulation */ "./src/Physics/physicsSimulation.ts");
/* harmony import */ var _profiler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profiler */ "./src/profiler.ts");




var Core = /** @class */ (function () {
    function Core() {
        this.acumulator = 0;
        this.loopCallbacks = [];
        this.fixedLoopCallbacks = [];
        this.simulation = new _Physics_physicsSimulation__WEBPACK_IMPORTED_MODULE_2__["PhysicsSimulation"](_Physics_physicsSimulation__WEBPACK_IMPORTED_MODULE_2__["Integrators"].ModifiedEuler);
        this.renderer = new _Graphics_Renderers_forwardRenderer__WEBPACK_IMPORTED_MODULE_0__["ForwardRenderer"]();
        this.time = {
            deltaTime: 0,
            elapsedTime: 0,
            fixedTime: 1 / 60
        };
        this.running = false;
    }
    Core.prototype.useScene = function (scene) {
        this.currentScene = scene;
        this.currentScene.isPlaying = true;
    };
    Core.prototype.swapScene = function (scene) {
        this.currentScene.isPlaying = false;
        this.useScene(scene);
        this.coreStart();
    };
    Core.prototype.fixedUpdate = function (behaviours) {
        for (var _i = 0, behaviours_1 = behaviours; _i < behaviours_1.length; _i++) {
            var b = behaviours_1[_i];
            b.fixedUpdate(this.time);
        }
    };
    Core.prototype.update = function (behaviours) {
        for (var _i = 0, behaviours_2 = behaviours; _i < behaviours_2.length; _i++) {
            var b = behaviours_2[_i];
            b.update(this.time);
        }
    };
    Core.prototype.lateUpdate = function (behaviours) {
        for (var _i = 0, behaviours_3 = behaviours; _i < behaviours_3.length; _i++) {
            var b = behaviours_3[_i];
            b.lateUpdate(this.time);
        }
    };
    Core.prototype.coreStart = function () {
        for (var _i = 0, _a = this.currentScene.gameObjects; _i < _a.length; _i++) {
            var go = _a[_i];
            go.awake();
            go.start();
        }
    };
    Core.prototype.coreLoop = function (dt) {
        _profiler__WEBPACK_IMPORTED_MODULE_3__["global_profiler"].start('coreLoop');
        this.time.deltaTime = dt;
        if (this.currentScene) {
            var physicBodies = [];
            var behaviours = [];
            _profiler__WEBPACK_IMPORTED_MODULE_3__["global_profiler"].start('fetchComponents');
            for (var _i = 0, _a = this.currentScene.gameObjects; _i < _a.length; _i++) {
                var go = _a[_i];
                var components = go.getComponentsList([_component__WEBPACK_IMPORTED_MODULE_1__["PhysicsComponent"], _component__WEBPACK_IMPORTED_MODULE_1__["BehaviourComponent"]]);
                for (var _b = 0, components_1 = components; _b < components_1.length; _b++) {
                    var c = components_1[_b];
                    if (c.active) {
                        if (c instanceof _component__WEBPACK_IMPORTED_MODULE_1__["PhysicsComponent"])
                            physicBodies.push(c);
                        else if (c instanceof _component__WEBPACK_IMPORTED_MODULE_1__["BehaviourComponent"])
                            behaviours.push(c);
                    }
                }
            }
            _profiler__WEBPACK_IMPORTED_MODULE_3__["global_profiler"].end('fetchComponents');
            this.acumulator += dt;
            _profiler__WEBPACK_IMPORTED_MODULE_3__["global_profiler"].start('PhysicsLoop');
            // Physics
            while (this.acumulator >= this.time.fixedTime) {
                for (var _c = 0, _d = this.fixedLoopCallbacks; _c < _d.length; _c++) {
                    var cb = _d[_c];
                    cb(this.time);
                }
                this.fixedUpdate(behaviours);
                this.simulation.simulate(this.time, physicBodies);
                this.acumulator -= this.time.fixedTime;
                this.time.elapsedTime += this.time.fixedTime;
            }
            _profiler__WEBPACK_IMPORTED_MODULE_3__["global_profiler"].end('PhysicsLoop');
            // Behaviours
            this.update(behaviours);
            this.lateUpdate(behaviours);
            for (var _e = 0, _f = this.loopCallbacks; _e < _f.length; _e++) {
                var cb = _f[_e];
                cb(this.time);
            }
            // Rendering
            _profiler__WEBPACK_IMPORTED_MODULE_3__["global_profiler"].start('Renderer');
            this.renderer.render(this.currentScene);
            _profiler__WEBPACK_IMPORTED_MODULE_3__["global_profiler"].end('Renderer');
            _profiler__WEBPACK_IMPORTED_MODULE_3__["global_profiler"].end('coreLoop');
            //global_profiler.log();
        }
    };
    Core.prototype.run = function () {
        var lastTime = 0;
        var self = this;
        this.coreStart();
        function _loop(nowTime) {
            nowTime *= 0.001; // Convert time to seconds
            var deltaTime = nowTime - lastTime;
            self.coreLoop(deltaTime);
            lastTime = nowTime;
            requestAnimationFrame(_loop);
        }
        requestAnimationFrame(_loop);
    };
    Core.prototype.addLoopCallback = function (cb) {
        var index = this.loopCallbacks.indexOf(cb);
        if (index < 0) {
            this.loopCallbacks.push(cb);
        }
    };
    Core.prototype.addfixedLoopCallback = function (cb) {
        var index = this.fixedLoopCallbacks.indexOf(cb);
        if (index < 0) {
            this.fixedLoopCallbacks.push(cb);
        }
    };
    return Core;
}());
var core = new Core();
var simulation = core.simulation;
var renderer = core.renderer;
function useScene(scene) {
    core.useScene(scene);
}
function swapScene(scene) {
    core.swapScene(scene);
}
function run() {
    core.run();
}
function fixedLoop(callback) {
    core.addfixedLoopCallback(callback);
}
function loop(callback) {
    core.addLoopCallback(callback);
}
/*
export function loop(callback: (dt: number) => void) {
    let lastTime = 0;
    function _loop(nowTime) {
        nowTime *= 0.001; // Convert time to seconds
        let deltaTime = nowTime - lastTime;
        callback(deltaTime);
        lastTime = nowTime;
        requestAnimationFrame(_loop);
    }
    requestAnimationFrame(_loop);
}
*/


/***/ }),

/***/ "./src/Core/gameObject.ts":
/*!********************************!*\
  !*** ./src/Core/gameObject.ts ***!
  \********************************/
/*! exports provided: GameObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameObject", function() { return GameObject; });
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform */ "./src/Core/transform.ts");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/Core/component.ts");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/src/gl-matrix.js");



var GameObject = /** @class */ (function () {
    function GameObject(parent) {
        this.parent = parent;
        this.transform = new _transform__WEBPACK_IMPORTED_MODULE_0__["Transform"]();
        if (this.parent) {
            this.scene = this.parent.scene;
            this.transform.setParent(this.parent.transform);
        }
        this.children = [];
        this.components = [];
        this.active = true;
        this.tag = 'gameobject';
        this.name = 'gameobject';
    }
    GameObject.prototype.awake = function () {
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var c = _a[_i];
            c.awake();
        }
        for (var _b = 0, _c = this.children; _b < _c.length; _b++) {
            var child = _c[_b];
            child.awake();
        }
    };
    GameObject.prototype.start = function () {
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var c = _a[_i];
            c.start();
        }
        for (var _b = 0, _c = this.children; _b < _c.length; _b++) {
            var child = _c[_b];
            child.start();
        }
    };
    GameObject.prototype.add = function (object) {
        if (object instanceof GameObject)
            this._addChild(object);
        else if (object instanceof _component__WEBPACK_IMPORTED_MODULE_1__["Component"])
            this._addComponent(object);
    };
    GameObject.prototype.attach = function (object) {
        if (object instanceof GameObject)
            this._addChild(object);
        else if (object instanceof _component__WEBPACK_IMPORTED_MODULE_1__["Component"])
            this._addComponent(object);
    };
    GameObject.prototype.setActive = function (value) {
        if (this.active != value) {
            if (!this.active && value) {
                for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
                    var c = _a[_i];
                    if (c instanceof _component__WEBPACK_IMPORTED_MODULE_1__["BehaviourComponent"])
                        c.awake();
                }
            }
            this.active = value;
            for (var _b = 0, _c = this.children; _b < _c.length; _b++) {
                var child = _c[_b];
                child.setActive(value);
            }
        }
    };
    GameObject.prototype.setParent = function (parent) {
        this.parent = parent;
        this.transform.parent = parent.transform;
    };
    GameObject.prototype.findObjectWithName = function (name) {
        var result = null;
        if (this.name == name)
            result = this;
        else {
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child.name == name) {
                    result = child;
                    break;
                }
                else {
                    result = child.findObjectWithName(name);
                    if (result)
                        break;
                }
            }
        }
        return result;
    };
    GameObject.prototype.findObjectsWithTag = function (tag) {
        var result = [];
        if (this.tag == tag)
            result.push(this);
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.tag == tag)
                result.push(child);
            var objects = child.findObjectsWithTag(tag);
            result = result.concat(objects);
        }
        return result;
    };
    GameObject.prototype.getComponent = function (type) {
        var result = null;
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c instanceof type) {
                result = c;
                break;
            }
        }
        return result;
    };
    GameObject.prototype.getComponents = function (type) {
        var result = [];
        var component = this.getComponent(type);
        if (component !== null)
            result.push(component);
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            result = result.concat(child.getComponents(type));
        }
        return result;
    };
    GameObject.prototype.getComponentList = function (typeList) {
        var result = [];
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var c = _a[_i];
            for (var _b = 0, typeList_1 = typeList; _b < typeList_1.length; _b++) {
                var t = typeList_1[_b];
                if (c instanceof t)
                    result.push(c);
            }
        }
        return result;
    };
    GameObject.prototype.getComponentsList = function (typeList) {
        var result = this.getComponentList(typeList);
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            result = result.concat(child.getComponentsList(typeList));
        }
        return result;
    };
    GameObject.prototype.hasComponent = function (type) {
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c instanceof type)
                return true;
        }
        return false;
    };
    GameObject.prototype.clone = function () {
        var cloned = new GameObject();
        if (this.parent) {
            cloned.parent = this.parent;
            cloned.scene = this.scene;
        }
        cloned.transform.position = gl_matrix__WEBPACK_IMPORTED_MODULE_2__["vec3"].clone(this.transform.position);
        cloned.transform.rotation = gl_matrix__WEBPACK_IMPORTED_MODULE_2__["quat"].clone(this.transform.rotation);
        cloned.transform.scale = gl_matrix__WEBPACK_IMPORTED_MODULE_2__["vec3"].clone(this.transform.scale);
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var c = _a[_i];
            var clonedComponent = c.clone();
            cloned.attach(clonedComponent);
        }
        for (var _b = 0, _c = this.children; _b < _c.length; _b++) {
            var child = _c[_b];
            var clonedChild = child.clone();
            cloned.add(clonedChild);
        }
        return cloned;
    };
    GameObject.prototype._addChild = function (gameObject) {
        var duplicated = false;
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c == gameObject) {
                duplicated = true;
                break;
            }
        }
        if (!duplicated) {
            gameObject.setParent(this);
            this.children.push(gameObject);
        }
    };
    GameObject.prototype._addComponent = function (component) {
        if (component.gameObject)
            return;
        var componentType = component.constructor;
        var duplicated = false;
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var c = _a[_i];
            if (c.constructor === componentType) {
                duplicated = true;
                break;
            }
        }
        if (!duplicated) {
            component.setOwner(this);
            this.components.push(component);
            component.onAttach();
            if (component instanceof _component__WEBPACK_IMPORTED_MODULE_1__["BehaviourComponent"]) {
                if (this.scene && this.scene.isPlaying) {
                    component.awake();
                    component.start();
                }
            }
        }
    };
    return GameObject;
}());



/***/ }),

/***/ "./src/Core/resourceManager.ts":
/*!*************************************!*\
  !*** ./src/Core/resourceManager.ts ***!
  \*************************************/
/*! exports provided: RM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RM", function() { return RM; });
/* harmony import */ var _Graphics_shader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Graphics/shader */ "./src/Graphics/shader.ts");

var ResourceManager = /** @class */ (function () {
    function ResourceManager() {
        this.shaders = {};
        this.meshes = {};
    }
    ResourceManager.prototype.bindShader = function (shader) {
        if (this.currentShader != shader) {
            if (this.currentShader)
                this.currentShader.unbind();
            this.currentShader = shader;
            this.currentShader.bind();
        }
    };
    ResourceManager.prototype.createShader = function (name, vs, fs) {
        if (!this.shaders[name]) {
            var shader = new _Graphics_shader__WEBPACK_IMPORTED_MODULE_0__["Shader"](vs, fs, name);
            shader.compile();
            this.addShader(name, shader);
        }
        else {
            console.warn('Resource manager: ' + name + ' could not be created because there is another shader with the same name.');
        }
        return this.shaders[name];
    };
    ResourceManager.prototype.addShader = function (name, shader) {
        /*
        if(! (shader as any) instanceof Shader ){
            console.warn('Resource manager: object is not instance of Shader');
            return;
        }
        */
        if (!this.shaders[name]) {
            this.shaders[name] = shader;
        }
    };
    ResourceManager.prototype.getShader = function (name) {
        return this.shaders[name];
    };
    return ResourceManager;
}());
var RM = new ResourceManager();


/***/ }),

/***/ "./src/Core/scene.ts":
/*!***************************!*\
  !*** ./src/Core/scene.ts ***!
  \***************************/
/*! exports provided: Scene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
/* harmony import */ var _gameObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameObject */ "./src/Core/gameObject.ts");
/* harmony import */ var _Graphics_Lights_pointLight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Graphics/Lights/pointLight */ "./src/Graphics/Lights/pointLight.ts");
/* harmony import */ var _Graphics_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Graphics/camera */ "./src/Graphics/camera.ts");



var Scene = /** @class */ (function () {
    function Scene() {
        this.gameObjects = [];
        this.lights = [];
        this.cameras = [];
        this.isPlaying = false;
    }
    Scene.prototype.add = function (object) {
        if (object instanceof _gameObject__WEBPACK_IMPORTED_MODULE_0__["GameObject"]) {
            if (!object.scene) {
                object.scene = this;
                this.gameObjects.push(object);
                if (this.isPlaying) {
                    object.awake();
                    object.start();
                }
            }
            else {
                console.warn("Scene: Can't add gameobject to scene, it is already in this scene");
            }
        }
        else if (object instanceof _Graphics_Lights_pointLight__WEBPACK_IMPORTED_MODULE_1__["PointLight"])
            this.lights.push(object);
        else if (object instanceof _Graphics_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"])
            this.cameras.push(object);
    };
    Scene.prototype.findComponents = function (type) {
        var result = [];
        for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
            var go = _a[_i];
            result = result.concat(go.getComponents(type));
        }
        return result;
    };
    Scene.prototype.findComponentsList = function (typeList) {
        var result = [];
        for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
            var go = _a[_i];
            result = result.concat(go.getComponentsList(typeList));
        }
        return result;
    };
    Scene.prototype.findObjectWithName = function (name) {
        var result = null;
        for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
            var go = _a[_i];
            result = go.findObjectWithName(name);
            if (result !== null)
                break;
        }
        return result;
    };
    Scene.prototype.findObjectsWithTag = function (tag) {
        var result = [];
        for (var _i = 0, _a = this.gameObjects; _i < _a.length; _i++) {
            var go = _a[_i];
            var objects = go.findObjectsWithTag(tag);
            result = result.concat(objects);
        }
        return result;
    };
    return Scene;
}());



/***/ }),

/***/ "./src/Core/transform.ts":
/*!*******************************!*\
  !*** ./src/Core/transform.ts ***!
  \*******************************/
/*! exports provided: Transform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return Transform; });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/src/gl-matrix.js");

var forward = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
var right = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
var up = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].set(forward, 0, 0, -1);
gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].set(right, 1, 0, 0);
gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].set(up, 0, 1, 0);
var Transform = /** @class */ (function () {
    function Transform(parent) {
        this.position = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
        this.rotation = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].create();
        this.scale = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
        this.parent = parent;
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].set(this.scale, 1, 1, 1);
    }
    Transform.prototype.toLocalMatrix = function () {
        var local = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].fromRotationTranslationScale(local, this.rotation, this.position, this.scale);
        return local;
    };
    Transform.prototype.toWorldMatrix = function () {
        var world = this.toLocalMatrix();
        if (this.parent) {
            var parentWorld = this.parent.toWorldMatrix();
            gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].mul(world, parentWorld, world);
        }
        return world;
    };
    Transform.prototype.setParent = function (parent) {
        this.parent = parent;
    };
    Transform.prototype.detach = function () {
        if (this.parent) {
            var world = this.toWorldMatrix();
            var savedScale = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].clone(this.scale);
            this.fromWorldMatrix(world);
            savedScale[0] *= this.parent.scale[0];
            savedScale[1] *= this.parent.scale[1];
            savedScale[2] *= this.parent.scale[2];
            gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].copy(this.scale, savedScale);
            this.parent = undefined;
        }
    };
    Transform.prototype.fromWorldMatrix = function (world) {
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].getTranslation(this.position, world);
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].getRotation(this.rotation, world);
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].getScaling(this.scale, world);
    };
    Object.defineProperty(Transform.prototype, "forward", {
        get: function () {
            var result = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
            gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].transformQuat(result, forward, this.rotation);
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "right", {
        get: function () {
            var result = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
            gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].transformQuat(result, right, this.rotation);
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Transform.prototype, "up", {
        get: function () {
            var result = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
            gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].transformQuat(result, up, this.rotation);
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Transform.prototype.applyRotation = function (rotation) {
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].mul(this.rotation, this.rotation, rotation);
    };
    Transform.prototype.setEuler = function (roll, pitch, yaw) {
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].fromEuler(this.rotation, roll, pitch, yaw);
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].normalize(this.rotation, this.rotation);
    };
    Transform.prototype.addEuler = function (roll, pitch, yaw) {
        var dest = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].fromEuler(dest, roll, pitch, yaw);
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].mul(this.rotation, this.rotation, dest);
    };
    Transform.prototype.setAxes = function (forward, right, up) {
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].setAxes(this.rotation, forward, right, up);
    };
    Transform.prototype.setAxisAngle = function (axis, rads) {
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].setAxisAngle(this.rotation, axis, rads);
    };
    Transform.prototype.getAxisAngle = function () {
        var result = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].getAxisAngle(result, this.rotation);
        return result;
    };
    Transform.prototype.applyAxisAngle = function (axis, rads) {
        var dest = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].setAxisAngle(dest, axis, rads);
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["quat"].mul(this.rotation, this.rotation, dest);
    };
    Transform.prototype.translate = function (translation) {
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].copy(this.position, translation);
    };
    Transform.prototype.applyTranslation = function (translation) {
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].add(this.position, this.position, translation);
    };
    Transform.prototype.applyScale = function (scaling) {
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].mul(this.scale, this.scale, scaling);
    };
    Transform.prototype.setScale = function (scaling) {
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].copy(this.scale, scaling);
    };
    return Transform;
}());



/***/ }),

/***/ "./src/Graphics/Components/meshRenderer.ts":
/*!*************************************************!*\
  !*** ./src/Graphics/Components/meshRenderer.ts ***!
  \*************************************************/
/*! exports provided: MeshRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeshRenderer", function() { return MeshRenderer; });
/* harmony import */ var _Core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Core/component */ "./src/Core/component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MeshRenderer = /** @class */ (function (_super) {
    __extends(MeshRenderer, _super);
    function MeshRenderer(mesh, material) {
        var _this = _super.call(this) || this;
        _this.mesh = mesh;
        _this.material = material;
        return _this;
    }
    MeshRenderer.prototype.clone = function () {
        var cloned = new this.constructor();
        cloned = Object.assign(cloned, this);
        cloned.gameObject = undefined;
        cloned.transform = undefined;
        cloned.material = new this.material.constructor({});
        cloned.material = Object.assign(cloned.material, this.material);
        return cloned;
    };
    MeshRenderer.prototype.render = function () {
        this.mesh.render(this.material.drawMode);
    };
    return MeshRenderer;
}(_Core_component__WEBPACK_IMPORTED_MODULE_0__["RenderComponent"]));



/***/ }),

/***/ "./src/Graphics/Geometry/attributePointer.ts":
/*!***************************************************!*\
  !*** ./src/Graphics/Geometry/attributePointer.ts ***!
  \***************************************************/
/*! exports provided: AttributePointer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributePointer", function() { return AttributePointer; });
var AttributePointer = /** @class */ (function () {
    function AttributePointer(location, size, type, normalized, stride, offset) {
        this.location = location;
        this.size = size;
        this.type = type;
        this.normalized = normalized;
        this.stride = stride;
        this.offset = offset;
    }
    return AttributePointer;
}());



/***/ }),

/***/ "./src/Graphics/Geometry/geometry.ts":
/*!*******************************************!*\
  !*** ./src/Graphics/Geometry/geometry.ts ***!
  \*******************************************/
/*! exports provided: Geometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return Geometry; });
/* harmony import */ var _vertex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vertex */ "./src/Graphics/Geometry/vertex.ts");
/* harmony import */ var _vertexArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertexArray */ "./src/Graphics/Geometry/vertexArray.ts");
/* harmony import */ var _mesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mesh */ "./src/Graphics/Geometry/mesh.ts");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/src/gl-matrix.js");




var Geometry = {
    Triangle: function (size) {
        var halfS = size * 0.5 || 0.5;
        var vertices = [
            //position                          normal              color
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([0.0, halfS, 0.0], [0.0, 0.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfS, -halfS, 0.0], [0.0, 0.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfS, -halfS, 0.0], [0.0, 0.0, 1.0]),
        ];
        var vertexArray = new _vertexArray__WEBPACK_IMPORTED_MODULE_1__["VertexArray"](vertices, _vertex__WEBPACK_IMPORTED_MODULE_0__["VERTEX_LAYOUT"]);
        return new _mesh__WEBPACK_IMPORTED_MODULE_2__["Mesh"](vertexArray);
    },
    Quad: function (size) {
        var halfS = size * 0.5 || 0.5;
        var vertices = [
            //position                           normal             uv
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfS, halfS, 0.0], [0.0, 0.0, 1.0], [1.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfS, -halfS, 0.0], [0.0, 0.0, 1.0], [1.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfS, -halfS, 0.0], [0.0, 0.0, 1.0], [0.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfS, halfS, 0.0], [0.0, 0.0, 1.0], [0.0, 1.0]) // top left
        ];
        var indices = [
            0, 3, 1,
            1, 3, 2
        ];
        var vertexArray = new _vertexArray__WEBPACK_IMPORTED_MODULE_1__["VertexArray"](vertices, _vertex__WEBPACK_IMPORTED_MODULE_0__["VERTEX_LAYOUT"]);
        return new _mesh__WEBPACK_IMPORTED_MODULE_2__["Mesh"](vertexArray, indices);
    },
    Box: function (sizeX, sizeY, sizeZ) {
        var halfX = sizeX * 0.5 || 0.5;
        var halfY = sizeY * 0.5 || 0.5;
        var halfZ = sizeZ * 0.5 || 0.5;
        var vertices = [
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfX, -halfY, -halfZ], [0.0, 0.0, -1.0], [0.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfX, -halfY, -halfZ], [0.0, 0.0, -1.0], [1.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfX, halfY, -halfZ], [0.0, 0.0, -1.0], [1.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfX, halfY, -halfZ], [0.0, 0.0, -1.0], [1.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfX, halfY, -halfZ], [0.0, 0.0, -1.0], [0.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfX, -halfY, -halfZ], [0.0, 0.0, -1.0], [0.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfX, -halfY, halfZ], [0.0, 0.0, 1.0], [0.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfX, -halfY, halfZ], [0.0, 0.0, 1.0], [1.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfX, halfY, halfZ], [0.0, 0.0, 1.0], [1.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfX, halfY, halfZ], [0.0, 0.0, 1.0], [1.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfX, halfY, halfZ], [0.0, 0.0, 1.0], [0.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfX, -halfY, halfZ], [0.0, 0.0, 1.0], [0.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfX, halfY, halfZ], [-1.0, 0.0, 0.0], [1.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfX, halfY, -halfZ], [-1.0, 0.0, 0.0], [1.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfX, -halfY, -halfZ], [-1.0, 0.0, 0.0], [0.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfX, -halfY, -halfZ], [-1.0, 0.0, 0.0], [0.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfX, -halfY, halfZ], [-1.0, 0.0, 0.0], [0.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfX, halfY, halfZ], [-1.0, 0.0, 0.0], [1.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfX, halfY, halfZ], [1.0, 0.0, 0.0], [1.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfX, halfY, -halfZ], [1.0, 0.0, 0.0], [1.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfX, -halfY, -halfZ], [1.0, 0.0, 0.0], [0.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfX, -halfY, -halfZ], [1.0, 0.0, 0.0], [0.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfX, -halfY, halfZ], [1.0, 0.0, 0.0], [0.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfX, halfY, halfZ], [1.0, 0.0, 0.0], [1.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfX, -halfY, -halfZ], [0.0, -1.0, 0.0], [0.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfX, -halfY, -halfZ], [0.0, -1.0, 0.0], [1.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfX, -halfY, halfZ], [0.0, -1.0, 0.0], [1.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfX, -halfY, halfZ], [0.0, -1.0, 0.0], [1.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfX, -halfY, halfZ], [0.0, -1.0, 0.0], [0.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfX, -halfY, -halfZ], [0.0, -1.0, 0.0], [0.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfX, halfY, -halfZ], [0.0, 1.0, 0.0], [0.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfX, halfY, -halfZ], [0.0, 1.0, 0.0], [1.0, 1.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfX, halfY, halfZ], [0.0, 1.0, 0.0], [1.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([halfX, halfY, halfZ], [0.0, 1.0, 0.0], [1.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfX, halfY, halfZ], [0.0, 1.0, 0.0], [0.0, 0.0]),
            new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]([-halfX, halfY, -halfZ], [0.0, 1.0, 0.0], [0.0, 1.0])
        ];
        var vertexArray = new _vertexArray__WEBPACK_IMPORTED_MODULE_1__["VertexArray"](vertices, _vertex__WEBPACK_IMPORTED_MODULE_0__["VERTEX_LAYOUT"]);
        return new _mesh__WEBPACK_IMPORTED_MODULE_2__["Mesh"](vertexArray);
    },
    Plane: function (size, cells) {
        var vertices = [];
        var cols = cells + 1;
        var rows = cells + 1;
        var cellSize = size / cells;
        var halfSize = size * 0.5;
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                var vertex = new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]();
                vertex.position[0] = -halfSize + (i * cellSize);
                vertex.position[1] = 0;
                vertex.position[2] = -halfSize + (j * cellSize);
                vertex.uv[0] = i / rows;
                vertex.uv[1] = j / cols;
                vertex.normal[0] = 0.0;
                vertex.normal[1] = 1.0;
                vertex.normal[2] = 0.0;
                vertices.push(vertex);
            }
        }
        var indices = [];
        for (var i = 0; i < cells; i++) {
            for (var j = 0; j < cells; j++) {
                var index = (i * cols) + j;
                indices.push(index);
                indices.push(index + cols);
                indices.push(index + 1);
                indices.push(index + 1);
                indices.push(index + cols);
                indices.push(index + cols + 1);
            }
        }
        var vertexArray = new _vertexArray__WEBPACK_IMPORTED_MODULE_1__["VertexArray"](vertices, _vertex__WEBPACK_IMPORTED_MODULE_0__["VERTEX_LAYOUT"]);
        return new _mesh__WEBPACK_IMPORTED_MODULE_2__["Mesh"](vertexArray, indices);
    },
    Sphere: function (rad, slices, stacks) {
        var vertices = [];
        var cols = slices + 1;
        var rows = stacks + 1;
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                var vertex = new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]();
                var rho = i * (Math.PI / (rows - 1));
                var theta = j * (2 * Math.PI / (cols - 1));
                vertex.position[0] = rad * Math.sin(rho) * Math.sin(theta);
                vertex.position[1] = rad * Math.cos(rho);
                vertex.position[2] = rad * Math.sin(rho) * Math.cos(theta);
                vertex.uv[0] = i / rows;
                vertex.uv[1] = j / cols;
                vertex.normal[0] = vertex.position[0];
                vertex.normal[1] = vertex.position[1];
                vertex.normal[2] = vertex.position[2];
                vertices.push(vertex);
            }
        }
        var sortedFaces = [];
        for (var i = 0; i < stacks; i++) {
            for (var j = 0; j < slices; j++) {
                var index = (i * cols) + j;
                var normal = gl_matrix__WEBPACK_IMPORTED_MODULE_3__["vec3"].create();
                var v1 = gl_matrix__WEBPACK_IMPORTED_MODULE_3__["vec3"].create();
                gl_matrix__WEBPACK_IMPORTED_MODULE_3__["vec3"].sub(v1, vertices[index + cols].position, vertices[index].position);
                var v2 = gl_matrix__WEBPACK_IMPORTED_MODULE_3__["vec3"].create();
                gl_matrix__WEBPACK_IMPORTED_MODULE_3__["vec3"].sub(v2, vertices[index + 1].position, vertices[index].position);
                gl_matrix__WEBPACK_IMPORTED_MODULE_3__["vec3"].cross(normal, v1, v2);
                sortedFaces.push(vertices[index].clone());
                sortedFaces[sortedFaces.length - 1].normal = [normal[0], normal[1], normal[2]];
                sortedFaces.push(vertices[index + cols].clone());
                sortedFaces[sortedFaces.length - 1].normal = [normal[0], normal[1], normal[2]];
                sortedFaces.push(vertices[index + 1].clone());
                sortedFaces[sortedFaces.length - 1].normal = [normal[0], normal[1], normal[2]];
                gl_matrix__WEBPACK_IMPORTED_MODULE_3__["vec3"].sub(v1, vertices[index + 1].position, vertices[index + cols + 1].position);
                gl_matrix__WEBPACK_IMPORTED_MODULE_3__["vec3"].sub(v2, vertices[index + cols].position, vertices[index + cols + 1].position);
                gl_matrix__WEBPACK_IMPORTED_MODULE_3__["vec3"].cross(normal, v1, v2);
                sortedFaces.push(vertices[index + 1].clone());
                sortedFaces[sortedFaces.length - 1].normal = [normal[0], normal[1], normal[2]];
                sortedFaces.push(vertices[index + cols].clone());
                sortedFaces[sortedFaces.length - 1].normal = [normal[0], normal[1], normal[2]];
                sortedFaces.push(vertices[index + cols + 1].clone());
                sortedFaces[sortedFaces.length - 1].normal = [normal[0], normal[1], normal[2]];
            }
        }
        var vertexArray = new _vertexArray__WEBPACK_IMPORTED_MODULE_1__["VertexArray"](sortedFaces, _vertex__WEBPACK_IMPORTED_MODULE_0__["VERTEX_LAYOUT"]);
        return new _mesh__WEBPACK_IMPORTED_MODULE_2__["Mesh"](vertexArray);
    },
    SphereSmooth: function (rad, slices, stacks) {
        var vertices = [];
        var cols = slices + 1;
        var rows = stacks + 1;
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                var vertex = new _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]();
                var rho = i * (Math.PI / (rows - 1));
                var theta = j * (2 * Math.PI / (cols - 1));
                vertex.position[0] = rad * Math.sin(rho) * Math.sin(theta);
                vertex.position[1] = rad * Math.cos(rho);
                vertex.position[2] = rad * Math.sin(rho) * Math.cos(theta);
                vertex.uv[0] = i / rows;
                vertex.uv[1] = j / cols;
                vertex.normal[0] = vertex.position[0];
                vertex.normal[1] = vertex.position[1];
                vertex.normal[2] = vertex.position[2];
                vertices.push(vertex);
            }
        }
        var indices = [];
        for (var i = 0; i < stacks; i++) {
            for (var j = 0; j < slices; j++) {
                var index = (i * cols) + j;
                indices.push(index);
                indices.push(index + cols);
                indices.push(index + 1);
                indices.push(index + 1);
                indices.push(index + cols);
                indices.push(index + cols + 1);
            }
        }
        var vertexArray = new _vertexArray__WEBPACK_IMPORTED_MODULE_1__["VertexArray"](vertices, _vertex__WEBPACK_IMPORTED_MODULE_0__["VERTEX_LAYOUT"]);
        return new _mesh__WEBPACK_IMPORTED_MODULE_2__["Mesh"](vertexArray, indices);
    },
};


/***/ }),

/***/ "./src/Graphics/Geometry/mesh.ts":
/*!***************************************!*\
  !*** ./src/Graphics/Geometry/mesh.ts ***!
  \***************************************/
/*! exports provided: Mesh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return Mesh; });
/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl */ "./src/Graphics/webgl.ts");

var Mesh = /** @class */ (function () {
    function Mesh(vertexArray, indices, usage) {
        this.buffers = {
            vao: null,
            vbo: null,
            ebo: null
        };
        this.vertices = vertexArray;
        //    [ new AttribPointer(0, 3, gl.FLOAT, false, this.vertices.count * Float32Array.BYTES_PER_ELEMENT, 0) ];
        this.indices = indices || [];
        this.isIndexed = indices ? true : false;
        this.usage = usage || _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].STATIC_DRAW;
        this.binded = false;
        this.loaded = false;
    }
    Mesh.prototype.render = function (mode) {
        this.bind();
        if (this.isIndexed) {
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].drawElements(mode, this.indices.length, _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].UNSIGNED_SHORT, 0);
        }
        else {
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].drawArrays(mode, 0, this.vertices.count);
        }
        this.unbind();
    };
    Mesh.prototype.bind = function () {
        if (!this.binded) {
            if (!this.loaded)
                this._initBuffers();
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bindVertexArray(this.buffers.vao);
            this.binded = true;
        }
    };
    Mesh.prototype.unbind = function () {
        if (this.binded) {
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bindVertexArray(null);
            this.binded = false;
        }
    };
    Mesh.prototype._initBuffers = function () {
        // VAO = Vertex array buffer
        // VBO = Vertex buffer object
        // EBO = Element buffer object (indices)
        this.buffers.vao = _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].createVertexArray();
        this.buffers.vbo = _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].createBuffer();
        this.buffers.ebo = this.isIndexed ? _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].createBuffer() : null;
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bindVertexArray(this.buffers.vao);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bindBuffer(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].ARRAY_BUFFER, this.buffers.vbo);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bufferData(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].ARRAY_BUFFER, this.vertices.array, this.usage);
        if (this.isIndexed) {
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bindBuffer(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].ELEMENT_ARRAY_BUFFER, this.buffers.ebo);
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bufferData(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indices), this.usage);
        }
        for (var _i = 0, _a = this.vertices.layout; _i < _a.length; _i++) {
            var item = _a[_i];
            var attr = item.attribute;
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].vertexAttribPointer(attr.location, // Attribute location
            attr.size, // Number of elements per attribute
            attr.type, // Type of element
            attr.normalized, // Normalized
            attr.stride, // Size of an individual vertex
            attr.offset // Offset from the begining of a  single vertex to this attribute
            );
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].enableVertexAttribArray(attr.location);
        }
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bindVertexArray(null);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bindBuffer(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].ARRAY_BUFFER, null);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bindBuffer(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].ELEMENT_ARRAY_BUFFER, null);
        this.loaded = true;
    };
    return Mesh;
}());



/***/ }),

/***/ "./src/Graphics/Geometry/vertex.ts":
/*!*****************************************!*\
  !*** ./src/Graphics/Geometry/vertex.ts ***!
  \*****************************************/
/*! exports provided: Vertex, VERTEX_LAYOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vertex", function() { return Vertex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERTEX_LAYOUT", function() { return VERTEX_LAYOUT; });
/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl */ "./src/Graphics/webgl.ts");
/* harmony import */ var _attributePointer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributePointer */ "./src/Graphics/Geometry/attributePointer.ts");


var Vertex = /** @class */ (function () {
    function Vertex(position, normal, uv) {
        this.position = position || [0.0, 0.0, 0.0];
        this.normal = normal || [0.0, 1.0, 0.0];
        this.uv = uv || [0.0, 0.0];
    }
    Vertex.prototype.clone = function () {
        var clone = new Vertex();
        clone.position = this.position.slice();
        clone.normal = this.normal.slice();
        clone.uv = this.uv.slice();
        return clone;
    };
    Vertex.prototype.toArray = function () {
        var result = this.position;
        result = result.concat(this.normal);
        result = result.concat(this.uv);
        return result;
    };
    return Vertex;
}());

var attributes = [
    { name: "a_position", elements: 3 },
    { name: "a_normal", elements: 3 },
    { name: "a_texCoords", elements: 2 },
];
var bytesPerElement = Float32Array.BYTES_PER_ELEMENT;
function calculateElements(attribs) {
    var result = 0;
    for (var _i = 0, attribs_1 = attribs; _i < attribs_1.length; _i++) {
        var attrib = attribs_1[_i];
        result += attrib.elements;
    }
    return result;
}
function toBytes(value) {
    return value * bytesPerElement;
}
var elementsPerVertex = calculateElements(attributes);
function createLayout(attribs) {
    var result = [];
    var stride = toBytes(elementsPerVertex);
    var offset = 0;
    for (var i = 0; i < attribs.length; i++) {
        var attrib = attribs[i];
        var location_1 = i;
        result.push({
            name: attrib.name,
            attribute: new _attributePointer__WEBPACK_IMPORTED_MODULE_1__["AttributePointer"](location_1, attrib.elements, _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].FLOAT, false, stride, offset)
        });
        offset += toBytes(attrib.elements);
    }
    return result;
}
var VERTEX_LAYOUT = createLayout(attributes);


/***/ }),

/***/ "./src/Graphics/Geometry/vertexArray.ts":
/*!**********************************************!*\
  !*** ./src/Graphics/Geometry/vertexArray.ts ***!
  \**********************************************/
/*! exports provided: VertexArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexArray", function() { return VertexArray; });
/* harmony import */ var _vertex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vertex */ "./src/Graphics/Geometry/vertex.ts");

var VertexArray = /** @class */ (function () {
    function VertexArray(vertices, layout) {
        this.vertices = vertices;
        this.array = this._toSingleArray();
        this.count = vertices.length;
        this.layout = layout;
    }
    VertexArray.prototype.push = function (vertex) {
        if (vertex instanceof _vertex__WEBPACK_IMPORTED_MODULE_0__["Vertex"]) {
            this.vertices.push(vertex);
        }
    };
    VertexArray.prototype._toSingleArray = function () {
        var result = [];
        for (var _i = 0, _a = this.vertices; _i < _a.length; _i++) {
            var vertex = _a[_i];
            var v = vertex.toArray();
            result = result.concat(v);
        }
        return new Float32Array(result);
    };
    return VertexArray;
}());



/***/ }),

/***/ "./src/Graphics/Lights/pointLight.ts":
/*!*******************************************!*\
  !*** ./src/Graphics/Lights/pointLight.ts ***!
  \*******************************************/
/*! exports provided: PointLight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointLight", function() { return PointLight; });
var PointLight = /** @class */ (function () {
    function PointLight(args) {
        args = args || {};
        this.position = args.position || [0.0, 0.0, 0.0];
        this.color = args.color || [1.0, 1.0, 1.0];
        this.intensity = args.intensity || 1.0;
    }
    return PointLight;
}());



/***/ }),

/***/ "./src/Graphics/Materials/Post Process/hdrMaterial.ts":
/*!************************************************************!*\
  !*** ./src/Graphics/Materials/Post Process/hdrMaterial.ts ***!
  \************************************************************/
/*! exports provided: HDRMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HDRMaterial", function() { return HDRMaterial; });
/* harmony import */ var _baseMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../baseMaterial */ "./src/Graphics/Materials/baseMaterial.ts");
/* harmony import */ var _Core_resourceManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Core/resourceManager */ "./src/Core/resourceManager.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var shaderSource = {
    vs: "#version 300 es\n        in vec3 a_position;\n        in vec2 a_texCoords;\n    \n        uniform mat4 u_model;\n\n        out vec2 texCoords;\n        void main(void) {\n            gl_Position = u_model * vec4(a_position.xy, 0.0, 1.0);\n            texCoords = a_texCoords;\n        }",
    ps: "#version 300 es\n        precision mediump float;\n\n        in vec2 texCoords;\n\n        uniform sampler2D u_texture;\n        uniform float u_exposure;\n\n        out vec4 outColor;\n        void main(void) {\n            const float gamma = 2.2;\n\n            vec3 hdrColor = texture(u_texture, texCoords).rgb;\n\n            //Reinhard tone mapping\n            //vec3 mapped = hdrColor / (hdrColor + vec3(1.0));\n            \n            // Exposure tone mapping\n            vec3 mapped = vec3(1.0) - exp(-hdrColor * u_exposure);\n            \n            // Gamma correction \n            mapped = pow(mapped, vec3(1.0 / gamma));\n\n            outColor = vec4(mapped, 1.0);\n        }",
};
var HDRMaterial = /** @class */ (function (_super) {
    __extends(HDRMaterial, _super);
    function HDRMaterial(args) {
        var _this = this;
        args = args || {};
        args.tag = _baseMaterial__WEBPACK_IMPORTED_MODULE_0__["MaterialTag"].postprocess;
        var shader = _Core_resourceManager__WEBPACK_IMPORTED_MODULE_1__["RM"].createShader('hdr-shader', shaderSource.vs, shaderSource.ps);
        _this = _super.call(this, shader, args) || this;
        _this.exposure = args.exposure || 1.0;
        return _this;
    }
    HDRMaterial.prototype.setup = function () {
        _super.prototype.setup.call(this);
    };
    HDRMaterial.prototype.update = function () {
        _super.prototype.update.call(this);
        this.shader.setInt('u_texture', 0);
        this.shader.setFloat('u_exposure', this.exposure);
    };
    return HDRMaterial;
}(_baseMaterial__WEBPACK_IMPORTED_MODULE_0__["BaseMaterial"]));



/***/ }),

/***/ "./src/Graphics/Materials/baseMaterial.ts":
/*!************************************************!*\
  !*** ./src/Graphics/Materials/baseMaterial.ts ***!
  \************************************************/
/*! exports provided: MaterialTag, CullingMode, BaseMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialTag", function() { return MaterialTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CullingMode", function() { return CullingMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseMaterial", function() { return BaseMaterial; });
/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl */ "./src/Graphics/webgl.ts");
/* harmony import */ var _Core_resourceManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/resourceManager */ "./src/Core/resourceManager.ts");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/src/gl-matrix.js");
//import { Shader } from './shader'



var MaterialTag;
(function (MaterialTag) {
    MaterialTag[MaterialTag["none"] = 0] = "none";
    MaterialTag[MaterialTag["unlit"] = 1] = "unlit";
    MaterialTag[MaterialTag["lit"] = 2] = "lit";
    MaterialTag[MaterialTag["translucent"] = 3] = "translucent";
    MaterialTag[MaterialTag["postprocess"] = 4] = "postprocess";
})(MaterialTag || (MaterialTag = {}));
var CullingMode;
(function (CullingMode) {
    CullingMode[CullingMode["none"] = 0] = "none";
    CullingMode[CullingMode["back"] = _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].BACK] = "back";
    CullingMode[CullingMode["front"] = _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].FRONT] = "front";
})(CullingMode || (CullingMode = {}));
var BaseMaterial = /** @class */ (function () {
    function BaseMaterial(shader, args) {
        this.drawMode = _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].TRIANGLES;
        this.culling = CullingMode.none;
        this.depthTest = true;
        this.tag = MaterialTag.none;
        this.uniformType = _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].FLOAT;
        this.mModel = gl_matrix__WEBPACK_IMPORTED_MODULE_2__["mat4"].create();
        this.mView = gl_matrix__WEBPACK_IMPORTED_MODULE_2__["mat4"].create();
        this.mPerspective = gl_matrix__WEBPACK_IMPORTED_MODULE_2__["mat4"].create();
        args = args || {};
        this.shader = shader;
        this.drawMode = args.drawMode || this.drawMode;
        this.culling = args.culling || this.culling;
        this.depthTest = args.depthTest || this.depthTest;
        this.tag = args.tag || this.tag;
    }
    BaseMaterial.prototype.setup = function () {
        if (this.depthTest)
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].enable(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].DEPTH_TEST);
        else
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].disable(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].DEPTH_TEST);
        if (this.culling != CullingMode.none) {
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].enable(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].CULL_FACE);
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].cullFace(this.culling);
        }
        else {
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].disable(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].CULL_FACE);
        }
    };
    BaseMaterial.prototype.setMatrices = function (mModel, mView, mPerspective) {
        this.mModel = mModel;
        this.mView = mView;
        this.mPerspective = mPerspective;
        if (this.tag == MaterialTag.lit ||
            this.tag == MaterialTag.translucent) {
            if (!this.mNormal)
                this.mNormal = gl_matrix__WEBPACK_IMPORTED_MODULE_2__["mat4"].create();
            gl_matrix__WEBPACK_IMPORTED_MODULE_2__["mat4"].invert(this.mNormal, mModel);
            gl_matrix__WEBPACK_IMPORTED_MODULE_2__["mat4"].transpose(this.mNormal, this.mNormal);
        }
    };
    BaseMaterial.prototype.update = function () {
        this.shader.setMatrixUniforms(this.mModel, this.mView, this.mPerspective);
        if (this.tag == MaterialTag.lit ||
            this.tag == MaterialTag.translucent) {
            if (!this.mNormal)
                this.mNormal = gl_matrix__WEBPACK_IMPORTED_MODULE_2__["mat4"].create();
            this.shader.setMatrix('u_mNormal', this.mNormal);
        }
    };
    BaseMaterial.prototype.use = function () {
        if (!this.shader.binded) {
            _Core_resourceManager__WEBPACK_IMPORTED_MODULE_1__["RM"].bindShader(this.shader);
            this.setup();
        }
        this.update();
    };
    return BaseMaterial;
}());



/***/ }),

/***/ "./src/Graphics/Materials/basicMaterial.ts":
/*!*************************************************!*\
  !*** ./src/Graphics/Materials/basicMaterial.ts ***!
  \*************************************************/
/*! exports provided: BasicMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicMaterial", function() { return BasicMaterial; });
/* harmony import */ var _baseMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseMaterial */ "./src/Graphics/Materials/baseMaterial.ts");
/* harmony import */ var _Core_resourceManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/resourceManager */ "./src/Core/resourceManager.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var basicShaderSource = {
    vs: "#version 300 es\n        in vec3 a_position;\n        in vec3 a_normal;\n    \n        uniform mat4 u_model;\n        uniform mat4 u_view;\n        uniform mat4 u_perspective;\n    \n        void main(void) {\n            gl_Position = u_perspective * u_view * u_model * vec4(a_position, 1.0);\n        }",
    ps: "#version 300 es\n        precision mediump float;\n        \n        struct Unlit_Material {\n            vec3 emission;\n        };\n\n        uniform Unlit_Material u_material;\n\n        out vec4 outputColor;\n        void main(void) {\n            outputColor = vec4(u_material.emission, 1.0);\n\n            // Gamma correction\n            float gamma = 2.2;\n            outputColor.rgb = pow(outputColor.rgb, vec3(1.0/gamma));\n        }",
};
var BasicMaterial = /** @class */ (function (_super) {
    __extends(BasicMaterial, _super);
    function BasicMaterial(args) {
        var _this = this;
        args = args || {};
        args.tag = _baseMaterial__WEBPACK_IMPORTED_MODULE_0__["MaterialTag"].unlit;
        var shader = _Core_resourceManager__WEBPACK_IMPORTED_MODULE_1__["RM"].createShader('basic-shader', basicShaderSource.vs, basicShaderSource.ps);
        _this = _super.call(this, shader, args) || this;
        _this.color = args.color || [1.0, 1.0, 1.0];
        return _this;
    }
    BasicMaterial.prototype.setup = function () {
        _super.prototype.setup.call(this);
    };
    BasicMaterial.prototype.update = function () {
        _super.prototype.update.call(this);
        this.shader.setStruct('u_material', {
            emission: this.color
        });
    };
    return BasicMaterial;
}(_baseMaterial__WEBPACK_IMPORTED_MODULE_0__["BaseMaterial"]));



/***/ }),

/***/ "./src/Graphics/Materials/lambertMaterial.ts":
/*!***************************************************!*\
  !*** ./src/Graphics/Materials/lambertMaterial.ts ***!
  \***************************************************/
/*! exports provided: LambertMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LambertMaterial", function() { return LambertMaterial; });
/* harmony import */ var _baseMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseMaterial */ "./src/Graphics/Materials/baseMaterial.ts");
/* harmony import */ var _Core_resourceManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/resourceManager */ "./src/Core/resourceManager.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var shaderSource = {
    vs: "#version 300 es\n        in vec3 a_position;\n        in vec3 a_normal;\n      \n        uniform mat4 u_model;\n        uniform mat4 u_view;\n        uniform mat4 u_perspective;\n        uniform mat4 u_mNormal;\n\n        out vec3 normal;\n        out vec3 fragPos;\n        void main(void) {\n            normal = normalize(vec3(u_mNormal * vec4(a_normal, 0.0)));\n            fragPos = vec3(u_model * vec4(a_position, 1.0));\n            gl_Position = u_perspective * u_view * u_model * vec4(a_position, 1.0);\n        }",
    ps: "#version 300 es\n        precision mediump float;\n        \n        in vec3 normal;\n        in vec3 fragPos;\n\n        struct Light{\n            vec3 position;\n            vec3 color;\n            float intensity;\n        };\n        \n        struct Material{\n            vec3 ambient;\n            vec3 diffuse;\n        };\n\n        uniform Light u_light;\n        uniform Material u_material;\n\n        out vec4 outputColor;\n        void main(void) {\n\n            // Ambient color\n            vec3 ambient = u_light.intensity * u_light.color * u_material.ambient;\n\n            // Light direction\n            vec3 norm = normalize(normal);\n            \n            vec3 lightDir = (u_light.position - fragPos);\n            float lightDistance = length(lightDir);\n            lightDir = normalize(lightDir); \n\n            // diffuse color\n            float diff = max(dot(norm, lightDir), 0.0);\n            vec3 diffuse = u_light.intensity * u_light.color * (diff * u_material.diffuse);\n\n            // Attenuation\n            //float attenuation = 1.0 / (u_light.constant + u_light.linear * lightDistance + u_light.quadratic * (lightDistance * lightDistance));\n            float attenuation = 1.0 / (lightDistance * lightDistance);\n            ambient *= attenuation;\n            diffuse *= attenuation;\n\n            vec3 result = ambient + diffuse;\n            outputColor = vec4(result, 1.0);\n        }",
};
var LambertMaterial = /** @class */ (function (_super) {
    __extends(LambertMaterial, _super);
    function LambertMaterial(args) {
        var _this = this;
        args = args || {};
        args.tag = _baseMaterial__WEBPACK_IMPORTED_MODULE_0__["MaterialTag"].lit;
        var shader = _Core_resourceManager__WEBPACK_IMPORTED_MODULE_1__["RM"].createShader('lambert-shader', shaderSource.vs, shaderSource.ps);
        _this = _super.call(this, shader, args) || this;
        _this.light = args.light;
        _this.ambient = args.ambient || [1.0, 1.0, 1.0];
        _this.diffuse = args.diffuse || [1.0, 1.0, 1.0];
        return _this;
    }
    LambertMaterial.prototype.setup = function () {
        _super.prototype.setup.call(this);
    };
    LambertMaterial.prototype.update = function () {
        _super.prototype.update.call(this);
        this.shader.setStruct('u_light', this.light);
        this.shader.setStruct('u_material', {
            ambient: this.ambient,
            diffuse: this.diffuse,
        });
    };
    return LambertMaterial;
}(_baseMaterial__WEBPACK_IMPORTED_MODULE_0__["BaseMaterial"]));



/***/ }),

/***/ "./src/Graphics/Materials/normalMaterial.ts":
/*!**************************************************!*\
  !*** ./src/Graphics/Materials/normalMaterial.ts ***!
  \**************************************************/
/*! exports provided: NormalMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalMaterial", function() { return NormalMaterial; });
/* harmony import */ var _baseMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseMaterial */ "./src/Graphics/Materials/baseMaterial.ts");
/* harmony import */ var _Core_resourceManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/resourceManager */ "./src/Core/resourceManager.ts");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/src/gl-matrix.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var shaderSource = {
    vs: "#version 300 es\n        in vec3 a_position;\n        in vec3 a_normal;\n      \n        uniform mat4 u_model;\n        uniform mat4 u_view;\n        uniform mat4 u_perspective;\n        uniform mat4 u_mNormal;\n      \n        out vec3 normal;\n        void main(void) {\n            normal = (u_mNormal * vec4(a_normal, 0.0)).xyz;\n            normal = normalize(normal);\n            gl_Position = u_perspective * u_view * u_model * vec4(a_position, 1.0);\n        }",
    ps: "#version 300 es\n        precision mediump float;\n\n        in vec3 normal;\n\n        out vec4 outputColor;\n        void main(void) {\n            outputColor =  vec4(abs(normal), 1.0);\n\n            // Gamma correction\n            float gamma = 2.2;\n            outputColor.rgb = pow(outputColor.rgb, vec3(1.0/gamma));\n        }",
};
var NormalMaterial = /** @class */ (function (_super) {
    __extends(NormalMaterial, _super);
    function NormalMaterial(args) {
        var _this = this;
        args = args || {};
        args.tag = _baseMaterial__WEBPACK_IMPORTED_MODULE_0__["MaterialTag"].unlit;
        var shader = _Core_resourceManager__WEBPACK_IMPORTED_MODULE_1__["RM"].createShader('normal-shader', shaderSource.vs, shaderSource.ps);
        _this = _super.call(this, shader, args) || this;
        return _this;
    }
    NormalMaterial.prototype.setup = function () {
        _super.prototype.setup.call(this);
    };
    NormalMaterial.prototype.update = function () {
        _super.prototype.update.call(this);
        if (!this.mNormal)
            this.mNormal = gl_matrix__WEBPACK_IMPORTED_MODULE_2__["mat4"].create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_2__["mat4"].invert(this.mNormal, this.mModel);
        gl_matrix__WEBPACK_IMPORTED_MODULE_2__["mat4"].transpose(this.mNormal, this.mNormal);
        this.shader.setMatrix('u_mNormal', this.mNormal);
    };
    return NormalMaterial;
}(_baseMaterial__WEBPACK_IMPORTED_MODULE_0__["BaseMaterial"]));



/***/ }),

/***/ "./src/Graphics/Materials/phongMaterial.ts":
/*!*************************************************!*\
  !*** ./src/Graphics/Materials/phongMaterial.ts ***!
  \*************************************************/
/*! exports provided: PhongMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhongMaterial", function() { return PhongMaterial; });
/* harmony import */ var _baseMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseMaterial */ "./src/Graphics/Materials/baseMaterial.ts");
/* harmony import */ var _Core_resourceManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Core/resourceManager */ "./src/Core/resourceManager.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var shaderSource = {
    vs: "#version 300 es\n        precision mediump float;\n\n        in vec3 a_position;\n        in vec3 a_normal;\n      \n        uniform mat4 u_model;\n        uniform mat4 u_view;\n        uniform mat4 u_perspective;\n        uniform mat4 u_mNormal;\n\n        out vec3 normal;\n        out vec3 fragPos;\n\n        void main(void) {\n            normal = normalize(vec3(u_mNormal * vec4(a_normal, 0.0)));\n            fragPos = vec3(u_model * vec4(a_position, 1.0));\n\n            gl_Position = u_perspective * u_view * u_model * vec4(a_position, 1.0);\n        }",
    ps: "#version 300 es\n        precision mediump float;\n        \n        in vec3 normal;\n        in vec3 fragPos;\n\n        struct Light{\n            vec3 position;\n            vec3 color;\n            float intensity;\n        };\n        \n        struct Material{\n            vec3 ambient;\n            vec3 diffuse;\n            vec3 specular;\n            float shininess;\n        };\n\n        uniform Light u_light;\n        uniform Material u_material;\n\n        uniform vec3 u_viewPos;\n\n        out vec4 outputColor;\n        void main(void) {\n\n            // Ambient color\n            vec3 ambient = u_light.intensity * u_light.color * u_material.ambient;\n\n            // Light direction\n            vec3 norm = normalize(normal);\n            \n            vec3 lightDir = (u_light.position - fragPos);\n            float lightDistance = length(lightDir);\n            lightDir = normalize(lightDir); \n\n            // diffuse color\n            float diff = max(dot(norm, lightDir), 0.0);\n            vec3 diffuse = u_light.intensity * u_light.color * (diff * u_material.diffuse);\n\n            // Specular color\n\n            // Energy conservation for specular shininess\n            const float kPi = 3.14159265;\n            float kShininess = u_material.shininess;\n            float kEnergyConservation = ( 8.0 + kShininess ) / ( 8.0 * kPi );\n\n\n            vec3 viewDir = normalize(u_viewPos - fragPos);\n            vec3 reflectDir = reflect(-lightDir, norm);\n            vec3 halfwayDir = normalize(lightDir + viewDir);\n\n            float spec = kEnergyConservation * pow(max(dot(normal, halfwayDir), 0.0), kShininess);\n\n            //float spec = pow( max( dot(normal, halfwayDir), 0.0 ), 32.0 );\n            vec3 specular = u_light.intensity * u_light.color * (spec * u_material.specular);\n\n\n            // Attenuation\n            //float attenuation = 1.0 / (u_light.constant + u_light.linear * lightDistance + u_light.quadratic * (lightDistance * lightDistance));\n            float attenuation = 1.0 / (lightDistance * lightDistance);\n            ambient *= attenuation;\n            diffuse *= attenuation;\n            specular *= attenuation;\n\n            vec3 result = ambient + diffuse + specular;\n            outputColor = vec4(result, 1.0);\n\n            // Gamma correction\n            //float gamma = 2.2;\n            //outputColor.rgb = pow(outputColor.rgb, vec3(1.0/gamma));    \n        }",
};
var PhongMaterial = /** @class */ (function (_super) {
    __extends(PhongMaterial, _super);
    function PhongMaterial(args) {
        var _this = this;
        args = args || {};
        args.tag = _baseMaterial__WEBPACK_IMPORTED_MODULE_0__["MaterialTag"].lit;
        var shader = _Core_resourceManager__WEBPACK_IMPORTED_MODULE_1__["RM"].createShader('phong-shader', shaderSource.vs, shaderSource.ps);
        _this = _super.call(this, shader, args) || this;
        _this.light = args.light;
        _this.ambient = args.ambient || [1.0, 1.0, 1.0];
        _this.diffuse = args.diffuse || [1.0, 1.0, 1.0];
        _this.specular = args.specular || [1.0, 1.0, 1.0];
        _this.shininess = args.shininess || 8;
        _this.viewPos = args.viewPos || [0.0, 0.0, 0.0];
        return _this;
    }
    PhongMaterial.prototype.setup = function () {
        _super.prototype.setup.call(this);
    };
    PhongMaterial.prototype.update = function () {
        _super.prototype.update.call(this);
        this.shader.setMatrix('u_mNormal', this.mNormal);
        this.shader.setVecf('u_viewPos', this.viewPos);
        this.shader.setStruct('u_light', this.light);
        this.shader.setStruct('u_material', {
            ambient: this.ambient,
            diffuse: this.diffuse,
            specular: this.specular,
            shininess: this.shininess
        });
    };
    return PhongMaterial;
}(_baseMaterial__WEBPACK_IMPORTED_MODULE_0__["BaseMaterial"]));



/***/ }),

/***/ "./src/Graphics/Renderers/forwardRenderer.ts":
/*!***************************************************!*\
  !*** ./src/Graphics/Renderers/forwardRenderer.ts ***!
  \***************************************************/
/*! exports provided: ForwardRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForwardRenderer", function() { return ForwardRenderer; });
/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl */ "./src/Graphics/webgl.ts");
/* harmony import */ var _Components_meshRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/meshRenderer */ "./src/Graphics/Components/meshRenderer.ts");
/* harmony import */ var _renderGroups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGroups */ "./src/Graphics/Renderers/renderGroups.ts");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../camera */ "./src/Graphics/camera.ts");
/* harmony import */ var _Textures_texture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Textures/texture */ "./src/Graphics/Textures/texture.ts");
/* harmony import */ var _Textures_framebuffer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Textures/framebuffer */ "./src/Graphics/Textures/framebuffer.ts");
/* harmony import */ var _Geometry_geometry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Geometry/geometry */ "./src/Graphics/Geometry/geometry.ts");
/* harmony import */ var _Materials_Post_Process_hdrMaterial__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Materials/Post Process/hdrMaterial */ "./src/Graphics/Materials/Post Process/hdrMaterial.ts");
/* harmony import */ var _Textures_renderbuffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Textures/renderbuffer */ "./src/Graphics/Textures/renderbuffer.ts");









var ForwardRenderer = /** @class */ (function () {
    function ForwardRenderer() {
        this.defaultCamera = new _camera__WEBPACK_IMPORTED_MODULE_3__["Camera"];
        this.renderGroups = new _renderGroups__WEBPACK_IMPORTED_MODULE_2__["RenderGroups"]();
        this.hdr = {
            material: new _Materials_Post_Process_hdrMaterial__WEBPACK_IMPORTED_MODULE_7__["HDRMaterial"]()
        };
        this._configureHDR();
        var quad = _Geometry_geometry__WEBPACK_IMPORTED_MODULE_6__["Geometry"].Quad(2.0);
        this.screenQuad = new _Components_meshRenderer__WEBPACK_IMPORTED_MODULE_1__["MeshRenderer"](quad, this.hdr.material);
        this.msaa = {
            enabled: false,
            samples: 4,
            fbo: undefined,
        };
        this._configureMSAA();
        var self = this;
        this._onWindowResize = function (viewport) {
            self._configureHDR();
            self._configureMSAA();
        };
        _webgl__WEBPACK_IMPORTED_MODULE_0__["webgl"].onResizeCallback = this._onWindowResize;
    }
    ForwardRenderer.prototype.setMSAA = function (samples) {
        if (samples <= 1) {
            this.msaa.enabled = false;
        }
        else {
            this.msaa.samples = samples;
            if (this.msaa.samples > 8)
                this.msaa.samples = 8;
            this.msaa.enabled = true;
        }
        this._configureMSAA();
    };
    ForwardRenderer.prototype.render = function (scene) {
        var camera = this.defaultCamera;
        if (scene.cameras.length > 0)
            camera = scene.cameras[0];
        this._setupGroups(scene);
        if (this.msaa.enabled) {
            this.msaa.fbo.bind();
        }
        else {
            this.hdr.fbo.bind();
        }
        _webgl__WEBPACK_IMPORTED_MODULE_0__["webgl"].setClearColor(0.0, 0.0, 0.0, 0.0);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].clear(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].COLOR_BUFFER_BIT | _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].DEPTH_BUFFER_BIT);
        var firstPass = true;
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].enable(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].DEPTH_TEST);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].depthFunc(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].LESS);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].disable(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].BLEND);
        for (var _i = 0, _a = this.renderGroups.unlit; _i < _a.length; _i++) {
            var mr = _a[_i];
            if (mr.gameObject.active && mr.active) {
                this._renderUnlit(mr, camera);
            }
        }
        for (var _b = 0, _c = scene.lights; _b < _c.length; _b++) {
            var light = _c[_b];
            if (!firstPass) {
                _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].enable(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].BLEND);
                //gl.disable(gl.DEPTH_TEST);
                _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].blendFunc(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].ONE, _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].ONE);
                _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].depthFunc(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].EQUAL);
            }
            for (var _d = 0, _e = this.renderGroups.lit; _d < _e.length; _d++) {
                var mr = _e[_d];
                if (mr.gameObject.active && mr.active) {
                    this._renderLit(mr, camera, light);
                }
            }
            for (var _f = 0, _g = this.renderGroups.translucent; _f < _g.length; _f++) {
                var mr = _g[_f];
                if (mr.gameObject.active && mr.active) {
                    this._renderTranslucent(mr, camera);
                }
            }
            if (firstPass)
                firstPass = false;
        }
        if (this.msaa.enabled) {
            this.msaa.fbo.unbind();
            this.msaa.fbo.blit(this.hdr.fbo, _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].COLOR_BUFFER_BIT | _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].DEPTH_BUFFER_BIT, _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].NEAREST);
        }
        else {
            this.hdr.fbo.unbind();
        }
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].enable(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].DEPTH_TEST);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].depthFunc(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].LESS);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].disable(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].BLEND);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["webgl"].setClearColor(1.0, 1.0, 1.0, 1.0);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].clear(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].COLOR_BUFFER_BIT | _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].DEPTH_BUFFER_BIT);
        this.hdr.material.exposure = camera.exposure;
        this._useMaterial(this.hdr.material);
        this.hdr.fbo.attachments.color[0].use(0);
        this.screenQuad.render();
    };
    ForwardRenderer.prototype._configureMSAA = function () {
        if (this.msaa.enabled) {
            if (this.msaa.fbo)
                this.msaa.fbo.dispose();
            this.msaa.fbo = new _Textures_framebuffer__WEBPACK_IMPORTED_MODULE_5__["Framebuffer"](_webgl__WEBPACK_IMPORTED_MODULE_0__["webgl"].viewport.width, _webgl__WEBPACK_IMPORTED_MODULE_0__["webgl"].viewport.height);
            this.msaa.fbo.addColor(_Textures_framebuffer__WEBPACK_IMPORTED_MODULE_5__["AttachmentType"].RENDERBUFFER, new _Textures_renderbuffer__WEBPACK_IMPORTED_MODULE_8__["RenderBufferFormat"](_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].RGBA16F, true, this.msaa.samples));
            this.msaa.fbo.addDepth(_Textures_framebuffer__WEBPACK_IMPORTED_MODULE_5__["AttachmentType"].RENDERBUFFER, new _Textures_renderbuffer__WEBPACK_IMPORTED_MODULE_8__["RenderBufferFormat"](_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].DEPTH_COMPONENT24, true, this.msaa.samples));
        }
    };
    ForwardRenderer.prototype._configureHDR = function () {
        var fbFormat = _Textures_texture__WEBPACK_IMPORTED_MODULE_4__["TexturePresets"].FB_HDR_COLOR();
        if (this.hdr) {
            if (this.hdr.fbo)
                this.hdr.fbo.dispose();
        }
        this.hdr.fbo = new _Textures_framebuffer__WEBPACK_IMPORTED_MODULE_5__["Framebuffer"](_webgl__WEBPACK_IMPORTED_MODULE_0__["webgl"].viewport.width, _webgl__WEBPACK_IMPORTED_MODULE_0__["webgl"].viewport.height);
        this.hdr.fbo.addColor(_Textures_framebuffer__WEBPACK_IMPORTED_MODULE_5__["AttachmentType"].TEXTURE, fbFormat);
        this.hdr.fbo.addDepth(_Textures_framebuffer__WEBPACK_IMPORTED_MODULE_5__["AttachmentType"].TEXTURE);
    };
    ForwardRenderer.prototype._setupGroups = function (scene) {
        this.renderGroups = new _renderGroups__WEBPACK_IMPORTED_MODULE_2__["RenderGroups"]();
        for (var _i = 0, _a = scene.gameObjects; _i < _a.length; _i++) {
            var go = _a[_i];
            var meshRenderers = go.getComponents(_Components_meshRenderer__WEBPACK_IMPORTED_MODULE_1__["MeshRenderer"]);
            for (var _b = 0, meshRenderers_1 = meshRenderers; _b < meshRenderers_1.length; _b++) {
                var mr = meshRenderers_1[_b];
                this.renderGroups.add(mr);
            }
        }
    };
    ForwardRenderer.prototype._useShader = function (shader) {
        if (this.currentShader != shader) {
            if (this.currentShader)
                this.currentShader.unbind();
            this.currentShader = shader;
            this.currentShader.bind();
        }
    };
    ForwardRenderer.prototype._useMaterial = function (material) {
        if (this.currentMaterial != material) {
            this.currentMaterial = material;
            this._useShader(this.currentMaterial.shader);
            this.currentMaterial.setup();
        }
        this.currentMaterial.update();
    };
    ForwardRenderer.prototype._renderUnlit = function (mr, camera) {
        mr.material.setMatrices(mr.transform.toWorldMatrix(), camera.mView, camera.mPerspective);
        this._useMaterial(mr.material);
        mr.render();
    };
    ForwardRenderer.prototype._renderLit = function (mr, camera, light) {
        mr.material.setMatrices(mr.transform.toWorldMatrix(), camera.mView, camera.mPerspective);
        mr.material.viewPos = camera.transform.position;
        mr.material.light = light;
        this._useMaterial(mr.material);
        mr.render();
    };
    ForwardRenderer.prototype._renderTranslucent = function (mr, camera) {
        mr.material.setMatrices(mr.transform.toWorldMatrix(), camera.mView, camera.mPerspective);
        this._useMaterial(mr.material);
        mr.render();
    };
    return ForwardRenderer;
}());



/***/ }),

/***/ "./src/Graphics/Renderers/renderGroups.ts":
/*!************************************************!*\
  !*** ./src/Graphics/Renderers/renderGroups.ts ***!
  \************************************************/
/*! exports provided: RenderGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderGroups", function() { return RenderGroups; });
/* harmony import */ var _Materials_baseMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Materials/baseMaterial */ "./src/Graphics/Materials/baseMaterial.ts");

var RenderGroups = /** @class */ (function () {
    function RenderGroups() {
        this.unlit = [];
        this.lit = [];
        this.translucent = [];
    }
    RenderGroups.prototype.add = function (meshRenderer) {
        switch (meshRenderer.material.tag) {
            case _Materials_baseMaterial__WEBPACK_IMPORTED_MODULE_0__["MaterialTag"].none:
                this.unlit.push(meshRenderer);
                break;
            case _Materials_baseMaterial__WEBPACK_IMPORTED_MODULE_0__["MaterialTag"].unlit:
                this.unlit.push(meshRenderer);
                break;
            case _Materials_baseMaterial__WEBPACK_IMPORTED_MODULE_0__["MaterialTag"].lit:
                this.lit.push(meshRenderer);
                break;
            case _Materials_baseMaterial__WEBPACK_IMPORTED_MODULE_0__["MaterialTag"].translucent:
                this.translucent.push(meshRenderer);
                break;
            default:
                this.unlit.push(meshRenderer);
                break;
        }
    };
    return RenderGroups;
}());



/***/ }),

/***/ "./src/Graphics/Textures/framebuffer.ts":
/*!**********************************************!*\
  !*** ./src/Graphics/Textures/framebuffer.ts ***!
  \**********************************************/
/*! exports provided: AttachmentType, Framebuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentType", function() { return AttachmentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Framebuffer", function() { return Framebuffer; });
/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl */ "./src/Graphics/webgl.ts");
/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./texture */ "./src/Graphics/Textures/texture.ts");
/* harmony import */ var _renderbuffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderbuffer */ "./src/Graphics/Textures/renderbuffer.ts");



var COLORATTACHMENTMAX = 15;
var AttachmentType;
(function (AttachmentType) {
    AttachmentType[AttachmentType["TEXTURE"] = 1] = "TEXTURE";
    AttachmentType[AttachmentType["RENDERBUFFER"] = 2] = "RENDERBUFFER";
})(AttachmentType || (AttachmentType = {}));
var Framebuffer = /** @class */ (function () {
    function Framebuffer(width, height) {
        this.binded = false;
        this.textureColorFormat = _texture__WEBPACK_IMPORTED_MODULE_1__["TexturePresets"].FB_COLOR();
        this.renderBufferColorFormat = new _renderbuffer__WEBPACK_IMPORTED_MODULE_2__["RenderBufferFormat"](_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].RGBA8, false);
        this.depthFormat = null;
        this.width = width;
        this.height = height;
        this.aspect = width / height;
        this.attachments = {
            color: [],
            depth: undefined,
            stencil: undefined,
            depthStencil: undefined,
        };
        this.fbo = _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].createFramebuffer();
    }
    Framebuffer.prototype.addColor = function (attachmentType, colorFormat) {
        var attachmentOffset = this.attachments.color.length;
        var overflow = false;
        if (attachmentOffset > COLORATTACHMENTMAX) {
            attachmentOffset = COLORATTACHMENTMAX;
            overflow = true;
        }
        var attachment = null;
        this.bind();
        if (attachmentType == AttachmentType.TEXTURE) {
            if (!(colorFormat instanceof _texture__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"])) {
                console.error('Framebuffer: Invalid format type for attachment type');
                return;
            }
            var usedColorFormat = colorFormat || this.textureColorFormat;
            attachment = new _texture__WEBPACK_IMPORTED_MODULE_1__["Texture"](this.width, this.height, usedColorFormat, null);
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].framebufferTexture2D(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAMEBUFFER, _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].COLOR_ATTACHMENT0 + attachmentOffset, _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, attachment.texture, 0);
        }
        else if (attachmentType == AttachmentType.RENDERBUFFER) {
            if (!(colorFormat instanceof _renderbuffer__WEBPACK_IMPORTED_MODULE_2__["RenderBufferFormat"])) {
                console.error('Framebuffer: Invalid format type for attachment type');
                return;
            }
            var format = colorFormat || this.renderBufferColorFormat;
            attachment = new _renderbuffer__WEBPACK_IMPORTED_MODULE_2__["RenderBuffer"](format, this.width, this.height);
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].framebufferRenderbuffer(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAMEBUFFER, _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].COLOR_ATTACHMENT0 + attachmentOffset, _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].RENDERBUFFER, attachment.buffer);
        }
        if (!overflow)
            this.attachments.color.push(attachment);
        else {
            this.attachments.color[attachmentOffset].dispose();
            this.attachments.color[attachmentOffset] = attachment;
        }
        this.unbind();
    };
    Framebuffer.prototype.addDepth = function (attachmentType, format) {
        var attachment = null;
        this.bind();
        if (attachmentType == AttachmentType.TEXTURE) {
            if (format != undefined && !(format instanceof _texture__WEBPACK_IMPORTED_MODULE_1__["TextureFormat"])) {
                console.error('Framebuffer: Invalid format type for attachment type');
                return;
            }
            this.depthFormat = format || _texture__WEBPACK_IMPORTED_MODULE_1__["TexturePresets"].FB_DEPTH();
            attachment = new _texture__WEBPACK_IMPORTED_MODULE_1__["Texture"](this.width, this.height, this.depthFormat, null);
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].framebufferTexture2D(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAMEBUFFER, _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].DEPTH_ATTACHMENT, _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, attachment.texture, 0);
        }
        else if (attachmentType == AttachmentType.RENDERBUFFER) {
            if (!(format instanceof _renderbuffer__WEBPACK_IMPORTED_MODULE_2__["RenderBufferFormat"])) {
                console.error('Framebuffer: Invalid format type for attachment type');
                return;
            }
            this.depthFormat = format || new _renderbuffer__WEBPACK_IMPORTED_MODULE_2__["RenderBufferFormat"](_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].DEPTH_COMPONENT24, false);
            attachment = new _renderbuffer__WEBPACK_IMPORTED_MODULE_2__["RenderBuffer"](this.depthFormat, this.width, this.height);
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].framebufferRenderbuffer(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAMEBUFFER, _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].DEPTH_ATTACHMENT, _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].RENDERBUFFER, attachment.buffer);
        }
        this.attachments.depth = attachment;
        this.unbind();
    };
    Framebuffer.prototype.addStencil = function () {
        // TODO: stencil texture
    };
    Framebuffer.prototype.addDepthStencil = function () {
        // TODO: Create depth and stencil combined texture
    };
    Framebuffer.prototype.blit = function (target, mask, filter) {
        // define mask
        var bitMask = mask || _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].COLOR_BUFFER_BIT;
        var filtering = filter || _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].NEAREST;
        // bind buffers
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bindFramebuffer(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].READ_FRAMEBUFFER, this.fbo);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bindFramebuffer(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].DRAW_FRAMEBUFFER, target.fbo);
        if (this.attachments.color.length == 1) {
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].blitFramebuffer(0, 0, this.width, this.height, 0, 0, target.width, target.height, bitMask, filtering);
        }
        else {
            var lastAttachment = 0;
            for (var i = 0; i < this.attachments.color.length; i++) {
                if (i >= target.attachments.color.length)
                    return;
                _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].readBuffer(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].COLOR_ATTACHMENT0 + i);
                _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].drawBuffers([target.attachments.color[i]]);
                _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].blitFramebuffer(0, 0, this.width, this.height, 0, 0, target.width, target.height, bitMask, filtering);
            }
            if (this.attachments.color.length < target.attachments.color.length) {
                _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].readBuffer(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].COLOR_ATTACHMENT0 + lastAttachment);
                var buffers = [];
                for (var i = lastAttachment; i < target.attachments.color.length; i++) {
                    buffers.push(target.attachments.color[i]);
                }
                _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].drawBuffers(buffers);
                _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].blitFramebuffer(0, 0, this.width, this.height, 0, 0, target.width, target.height, bitMask, filtering);
            }
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].drawBuffers([_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].BACK]);
        }
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bindFramebuffer(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].READ_FRAMEBUFFER, null);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bindFramebuffer(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].DRAW_FRAMEBUFFER, null);
    };
    Framebuffer.prototype.bind = function () {
        if (!this.binded) {
            this.binded = true;
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bindFramebuffer(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAMEBUFFER, this.fbo);
            var drawBuffers = [];
            for (var i = 0; i < this.attachments.color.length; i++) {
                drawBuffers.push(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].COLOR_ATTACHMENT0 + i);
            }
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].drawBuffers(drawBuffers);
        }
    };
    Framebuffer.prototype.unbind = function () {
        if (this.binded) {
            this.binded = false;
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bindFramebuffer(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAMEBUFFER, null);
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].drawBuffers([_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].BACK]);
        }
    };
    Framebuffer.prototype.dispose = function () {
        for (var attachment in this.attachments) {
            var a = this.attachments[attachment];
            if (a) {
                if (Array.isArray(a)) {
                    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
                        var att = a_1[_i];
                        att.dispose();
                    }
                }
                else {
                    a.dispose();
                }
            }
        }
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].deleteFramebuffer(this.fbo);
    };
    return Framebuffer;
}());



/***/ }),

/***/ "./src/Graphics/Textures/renderbuffer.ts":
/*!***********************************************!*\
  !*** ./src/Graphics/Textures/renderbuffer.ts ***!
  \***********************************************/
/*! exports provided: RenderBufferFormat, RenderBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderBufferFormat", function() { return RenderBufferFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderBuffer", function() { return RenderBuffer; });
/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl */ "./src/Graphics/webgl.ts");

var RenderBufferFormat = /** @class */ (function () {
    function RenderBufferFormat(internatFormat, multisample, samples) {
        if (samples === void 0) { samples = 1.0; }
        this.internatFormat = _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].RGBA8;
        this.multisample = false;
        this.samples = 1;
        this.internatFormat = internatFormat || this.internatFormat;
        this.multisample = multisample || this.multisample;
        this.samples = samples || this.samples;
    }
    return RenderBufferFormat;
}());

var RenderBuffer = /** @class */ (function () {
    function RenderBuffer(format, width, height) {
        this.format = new RenderBufferFormat(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].RGBA8, false);
        this.format = format || this.format;
        this.width = width;
        this.height = height;
        this.buffer = _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].createRenderbuffer();
        this.bind();
        if (!this.format.multisample) {
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].renderbufferStorage(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].RENDERBUFFER, this.format.internatFormat, this.width, this.height);
        }
        else {
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].renderbufferStorageMultisample(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].RENDERBUFFER, this.format.samples, this.format.internatFormat, this.width, this.height);
        }
        this.unbind();
    }
    RenderBuffer.prototype.bind = function () {
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bindRenderbuffer(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].RENDERBUFFER, this.buffer);
    };
    RenderBuffer.prototype.unbind = function () {
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bindRenderbuffer(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].RENDERBUFFER, null);
    };
    RenderBuffer.prototype.dispose = function () {
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].deleteRenderbuffer(this.buffer);
    };
    return RenderBuffer;
}());



/***/ }),

/***/ "./src/Graphics/Textures/texture.ts":
/*!******************************************!*\
  !*** ./src/Graphics/Textures/texture.ts ***!
  \******************************************/
/*! exports provided: TextureFormat, TexturePresets, Texture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureFormat", function() { return TextureFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TexturePresets", function() { return TexturePresets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Texture", function() { return Texture; });
/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl */ "./src/Graphics/webgl.ts");

var TextureFormat = /** @class */ (function () {
    function TextureFormat(format, filtering, wrap) {
        this.level = 0;
        this.internalFormat = _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].RGB;
        this.border = 0;
        this.format = _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].RGB;
        this.type = _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].UNSIGNED_BYTE;
        this.wrap = { S: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].REPEAT, T: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].REPEAT };
        this.filtering = { min: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].NEAREST, mag: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].LINEAR };
        this.level = format['level'] || this.level;
        this.internalFormat = format['internalFormat'] || this.internalFormat;
        this.border = format['border'] || this.border;
        this.format = format['format'] || this.format;
        this.type = format['type'] || this.type;
        this.wrap.S = wrap['S'] || this.wrap.S;
        this.wrap.T = wrap['T'] || this.wrap.T;
        this.filtering.min = filtering['min'] || this.filtering.min;
        this.filtering.mag = filtering['mag'] || this.filtering.mag;
    }
    return TextureFormat;
}());

var TexturePresets = {
    RGB: function () {
        return new TextureFormat({
            internalFormat: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].RGB,
            format: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].RGB,
            type: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].UNSIGNED_BYTE,
        }, { min: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].NEAREST, mag: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].LINEAR }, { S: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].REPEAT, T: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].REPEAT });
    },
    sRGB: function () { return new TextureFormat(); },
    FB_COLOR: function () {
        return new TextureFormat({
            internalFormat: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].RGBA,
            format: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].RGBA,
            type: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].UNSIGNED_BYTE,
        }, { min: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].LINEAR, mag: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].LINEAR }, { S: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].CLAMP_TO_EDGE, T: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].CLAMP_TO_EDGE });
    },
    FB_HDR_COLOR: function () {
        return new TextureFormat({
            internalFormat: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].RGBA16F,
            format: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].RGBA,
            type: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].FLOAT,
        }, { min: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].NEAREST, mag: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].NEAREST }, { S: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].CLAMP_TO_EDGE, T: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].CLAMP_TO_EDGE });
    },
    FB_DEPTH: function () {
        return new TextureFormat({
            internalFormat: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].DEPTH_COMPONENT24,
            format: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].DEPTH_COMPONENT,
            type: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].UNSIGNED_INT,
        }, { min: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].NEAREST, mag: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].NEAREST }, { S: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].CLAMP_TO_EDGE, T: _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].CLAMP_TO_EDGE });
    },
    FB_STENCIL: function () { return new TextureFormat(); },
    FB_DEPTH_STENCIL: function () { return new TextureFormat(); },
};
Object.freeze(TexturePresets);
var TEXTUREUNITMAX = 15;
var Texture = /** @class */ (function () {
    function Texture(width, height, textureFormat, data) {
        this.width = 256;
        this.height = 256;
        this.textureFormat = TexturePresets.RGB();
        this.width = width || this.width;
        this.height = height || this.height;
        this.data = data;
        this.textureFormat = textureFormat || this.textureFormat;
        this.texture = _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].createTexture();
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bindTexture(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, this.texture);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].texImage2D(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, this.textureFormat.level, this.textureFormat.internalFormat, this.width, this.height, this.textureFormat.border, this.textureFormat.format, this.textureFormat.type, this.data);
        //TODO: MIPMAPing 
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].texParameteri(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_MIN_FILTER, this.textureFormat.filtering.min);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].texParameteri(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_MAG_FILTER, this.textureFormat.filtering.mag);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].texParameteri(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_WRAP_S, this.textureFormat.wrap.S);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].texParameteri(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_WRAP_T, this.textureFormat.wrap.T);
    }
    Texture.prototype.use = function (textureUnit) {
        var unit = textureUnit || 0;
        if (unit < 0)
            unit = 0;
        if (unit > TEXTUREUNITMAX)
            unit = TEXTUREUNITMAX;
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].activeTexture(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE0 + unit);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bindTexture(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].TEXTURE_2D, this.texture);
    };
    Texture.prototype.dispose = function () {
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].deleteTexture(this.texture);
    };
    return Texture;
}());



/***/ }),

/***/ "./src/Graphics/camera.ts":
/*!********************************!*\
  !*** ./src/Graphics/camera.ts ***!
  \********************************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/src/gl-matrix.js");
/* harmony import */ var _Core_transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core/transform */ "./src/Core/transform.ts");


var Camera = /** @class */ (function () {
    function Camera() {
        this.transform = new _Core_transform__WEBPACK_IMPORTED_MODULE_1__["Transform"]();
        this.mPerspective = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
        this.mView = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["mat4"].create();
        this.exposure = 1.0;
    }
    return Camera;
}());



/***/ }),

/***/ "./src/Graphics/shader.ts":
/*!********************************!*\
  !*** ./src/Graphics/shader.ts ***!
  \********************************/
/*! exports provided: Shader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shader", function() { return Shader; });
/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl */ "./src/Graphics/webgl.ts");
/* harmony import */ var _Geometry_vertex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Geometry/vertex */ "./src/Graphics/Geometry/vertex.ts");


var Shader = /** @class */ (function () {
    function Shader(vertexShaderSource, fragmentShaderSource, shaderName) {
        this.attributeNames = [];
        this.binded = false;
        this.compiled = false;
        this.name = shaderName || "";
        this.vertexSource = vertexShaderSource;
        this.fragmentSource = fragmentShaderSource;
        for (var _i = 0, VERTEX_LAYOUT_1 = _Geometry_vertex__WEBPACK_IMPORTED_MODULE_1__["VERTEX_LAYOUT"]; _i < VERTEX_LAYOUT_1.length; _i++) {
            var attr = VERTEX_LAYOUT_1[_i];
            this.attributeNames.push(attr.name);
        }
        this.attributes = [];
        this.uniforms = [];
    }
    Shader.prototype.setVertexShader = function (source) {
        this.vertexSource = source;
    };
    Shader.prototype.setFragmentShader = function (source) {
        this.fragmentSource = source;
    };
    Shader.prototype.compile = function () {
        if (this.compiled) {
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].deleteShader(this.vs);
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].deleteShader(this.fs);
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].deleteProgram(this.program);
            this.attributes = [];
            this.uniforms = [];
            this.compiled = false;
        }
        this.vs = this._createShader(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].VERTEX_SHADER, this.vertexSource);
        this.fs = this._createShader(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].FRAGMENT_SHADER, this.fragmentSource);
        this.program = this._createProgram(this.vs, this.fs);
        if (this.program !== null) {
            this.attributes = this.attributes.concat(this._getAttributeLocations(this.attributeNames));
            this.uniforms = this.uniforms.concat(this._getUniformLocations(['u_model', 'u_view', 'u_perspective']));
            this.compiled = true;
        }
    };
    Shader.prototype.setMatrixUniforms = function (mModel, mView, mPerspective) {
        if (!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        this.setMatrix("u_model", mModel);
        this.setMatrix("u_view", mView);
        this.setMatrix("u_perspective", mPerspective);
    };
    Shader.prototype.setFloat = function (name, value) {
        if (!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        var uniform = this._getOrAddUniform(name);
        if (uniform.location !== null) {
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].uniform1f(uniform.location, value);
        }
    };
    Shader.prototype.setInt = function (name, value) {
        if (!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        var uniform = this._getOrAddUniform(name);
        if (uniform.location !== null) {
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].uniform1i(uniform.location, value);
        }
    };
    Shader.prototype.setVecf = function (name, value) {
        if (!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        var uniform = this._getOrAddUniform(name);
        if (uniform.location !== null) {
            switch (value.length) {
                case 1:
                    _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].uniform1fv(uniform.location, value);
                    break;
                case 2:
                    _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].uniform2fv(uniform.location, value);
                    break;
                case 3:
                    _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].uniform3fv(uniform.location, value);
                    break;
                case 4:
                    _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].uniform4fv(uniform.location, value);
                    break;
                default:
                    console.warn(this.name + ": Vector length " + value.length + " is not supported ");
                    break;
            }
        }
    };
    Shader.prototype.setVeci = function (name, value) {
        if (!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        var uniform = this._getOrAddUniform(name);
        if (uniform.location !== null) {
            switch (value.length) {
                case 1:
                    _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].uniform1iv(uniform.location, value);
                    break;
                case 2:
                    _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].uniform2iv(uniform.location, value);
                    break;
                case 3:
                    _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].uniform3iv(uniform.location, value);
                    break;
                case 4:
                    _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].uniform4iv(uniform.location, value);
                    break;
                default:
                    console.warn(this.name + ": Vector length " + value.length + " is not supported ");
                    break;
            }
        }
    };
    Shader.prototype.setMatrix = function (name, value) {
        if (!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        var uniform = this._getOrAddUniform(name);
        if (uniform.location !== null) {
            switch (value.length) {
                case 4:
                    _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].uniformMatrix2fv(uniform.location, false, value);
                    break;
                case 9:
                    _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].uniformMatrix3fv(uniform.location, false, value);
                    break;
                case 16:
                    _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].uniformMatrix4fv(uniform.location, false, value);
                    break;
                default:
                    console.warn(this.name + ": Matrix length " + value.length + " is not supported ");
                    break;
            }
        }
    };
    Shader.prototype.setStruct = function (name, obj, varType) {
        if (!this.binded) {
            console.warn(this.name + ': Could not set unifoms. This shader is not currently binded');
            return;
        }
        var vType = varType || _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].FLOAT;
        var self = this;
        var _setStruct = function (name, obj, varType) {
            for (var prop in obj) {
                var fullname = name + "." + prop;
                var val = obj[prop];
                if (Array.isArray(val)) {
                    if (val.length <= 4) {
                        if (varType == _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].FLOAT)
                            self.setVecf(fullname, val);
                        else if (varType == _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].INT)
                            self.setVeci(fullname, val);
                    }
                    else {
                        self.setMatrix(fullname, val);
                    }
                }
                else {
                    if (varType == _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].FLOAT)
                        self.setFloat(fullname, val);
                    else if (varType == _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].INT)
                        self.setInt(fullname, val);
                }
            }
        };
        if (Array.isArray(obj)) {
            for (var i = 0; i < obj.length; i++) {
                var element = obj[i];
                var indexedName = name + "[" + i + "]";
                _setStruct(indexedName, element, vType);
            }
        }
        else {
            _setStruct(name, obj, vType);
        }
    };
    Shader.prototype.bind = function () {
        if (!this.binded) {
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].useProgram(this.program);
            this.binded = true;
        }
    };
    Shader.prototype.unbind = function () {
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].useProgram(null);
        this.binded = false;
    };
    Shader.prototype._createShader = function (type, source) {
        var shader = _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].createShader(type);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].shaderSource(shader, source);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].compileShader(shader);
        var success = _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].getShaderParameter(shader, _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].COMPILE_STATUS);
        if (!success) {
            console.error(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].getShaderInfoLog(shader));
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].deleteShader(shader);
            return null;
        }
        return shader;
    };
    Shader.prototype._createProgram = function (vertexShader, fragmentShader) {
        var program = _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].createProgram();
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].attachShader(program, vertexShader);
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].attachShader(program, fragmentShader);
        for (var i = 0; i < _Geometry_vertex__WEBPACK_IMPORTED_MODULE_1__["VERTEX_LAYOUT"].length; i++) {
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].bindAttribLocation(program, i, _Geometry_vertex__WEBPACK_IMPORTED_MODULE_1__["VERTEX_LAYOUT"][i].name);
        }
        _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].linkProgram(program);
        var success = _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].getProgramParameter(program, _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].LINK_STATUS);
        if (!success) {
            console.error(_webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].getProgramInfoLog(program));
            _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].deleteProgram(program);
            return null;
        }
        return program;
    };
    Shader.prototype._getOrAddUniform = function (name) {
        var search = null;
        for (var _i = 0, _a = this.uniforms; _i < _a.length; _i++) {
            var u = _a[_i];
            if (u.name == name) {
                search = u;
                break;
            }
        }
        var result;
        if (search === null) {
            var uniform = this._getUniformLocation(name);
            this.uniforms.push(uniform);
            if (uniform.location === null) {
                console.warn(this.name + ": No uniform with name " + name + " was found.");
            }
            result = uniform;
        }
        else {
            result = search;
        }
        return result;
    };
    Shader.prototype._getLocation = function (type, name) {
        var result = { name: name, location: null };
        if (type == 'attribute')
            result.location = _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].getAttribLocation(this.program, name);
        else if (type == 'uniform')
            result.location = _webgl__WEBPACK_IMPORTED_MODULE_0__["gl"].getUniformLocation(this.program, name);
        return result;
    };
    Shader.prototype._getAttributeLocation = function (attribute) {
        return this._getLocation('attribute', attribute);
    };
    Shader.prototype._getAttributeLocations = function (attributes) {
        var result = [];
        for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
            var attribute = attributes_1[_i];
            var location_1 = this._getAttributeLocation(attribute);
            result.push(location_1);
        }
        return result;
    };
    Shader.prototype._getUniformLocation = function (uniform) {
        return this._getLocation('uniform', uniform);
    };
    Shader.prototype._getUniformLocations = function (uniforms) {
        var result = [];
        for (var _i = 0, uniforms_1 = uniforms; _i < uniforms_1.length; _i++) {
            var uniform = uniforms_1[_i];
            var location_2 = this._getUniformLocation(uniform);
            result.push(location_2);
        }
        return result;
    };
    return Shader;
}());



/***/ }),

/***/ "./src/Graphics/webgl.ts":
/*!*******************************!*\
  !*** ./src/Graphics/webgl.ts ***!
  \*******************************/
/*! exports provided: Viewport, webgl, gl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Viewport", function() { return Viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webgl", function() { return webgl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gl", function() { return gl; });
var Viewport = /** @class */ (function () {
    function Viewport(width, height) {
        this.width = width;
        this.height = height;
    }
    Viewport.prototype.aspect = function () {
        return this.width / this.height;
    };
    return Viewport;
}());

var WebGLConfig = /** @class */ (function () {
    function WebGLConfig(canvas) {
        var self = this;
        this.domElement = canvas || document.createElement('CANVAS');
        this.context = this.domElement.getContext("webgl2");
        this.viewport = new Viewport(window.innerWidth, window.innerHeight);
        if (!this.context) {
            this.context = this.domElement.getContext("experimental-webgl2");
        }
        if (!this.context) {
            console.error('Your browser does not support webgl 2.');
        }
        this.isFullscreen = true;
        this.context.viewport(0, 0, this.viewport.width, this.viewport.height);
        this.onResizeCallback = function (viewport) { };
        this._onResize = function () {
            var displayWidth = 0;
            var displayHeight = 0;
            if (self.isFullscreen) {
                displayWidth = window.innerWidth;
                displayHeight = window.innerHeight;
            }
            else {
                displayWidth = self.domElement.clientWidth;
                displayHeight = self.domElement.clientHeight;
            }
            if (self.domElement.width != displayWidth || self.domElement.height != displayHeight) {
                self.domElement.width = displayWidth;
                self.domElement.height = displayHeight;
                self.viewport.width = displayWidth;
                self.viewport.height = displayHeight;
                self.context.viewport(0, 0, self.viewport.width, self.viewport.height);
            }
            self.onResizeCallback(self.viewport);
        };
        window.addEventListener("resize", this._onResize);
        this.setup();
    }
    WebGLConfig.prototype.setup = function () {
        // webgl extensions:
        this.ext = {
            color_buffer_float: this.context.getExtension('EXT_color_buffer_float'),
        };
    };
    WebGLConfig.prototype.fullscreen = function (isFullscreen) {
        this.isFullscreen = isFullscreen;
        this._onResize();
    };
    WebGLConfig.prototype.setClearColor = function (r, g, b, a) {
        this.context.clearColor(r, g, b, a);
    };
    return WebGLConfig;
}());
var webgl = new WebGLConfig();
var gl = webgl.context;


/***/ }),

/***/ "./src/Physics/Components/rigidbody.ts":
/*!*********************************************!*\
  !*** ./src/Physics/Components/rigidbody.ts ***!
  \*********************************************/
/*! exports provided: Rigidbody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rigidbody", function() { return Rigidbody; });
/* harmony import */ var _Core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Core/component */ "./src/Core/component.ts");
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/src/gl-matrix.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Rigidbody = /** @class */ (function (_super) {
    __extends(Rigidbody, _super);
    function Rigidbody() {
        var _this = _super.call(this) || this;
        _this.gravityMultiplier = 1.0;
        _this.velocity = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create();
        _this.aceleration = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create();
        _this.mass = 1.0;
        return _this;
    }
    Rigidbody.prototype.clone = function () {
        var cloned = new this.constructor();
        cloned = Object.assign(cloned, this);
        cloned.gameObject = undefined;
        cloned.transform = undefined;
        cloned.velocity = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create();
        cloned.aceleration = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].create();
        return cloned;
    };
    Rigidbody.prototype.awake = function () {
        if (!this.kinematic)
            this.gameObject.transform.detach();
    };
    Rigidbody.prototype.applyGravity = function (gravity) {
        var force = gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].clone(gravity);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].scale(force, force, this.gravityMultiplier);
        this.applyForce(force);
    };
    Rigidbody.prototype.applyForce = function (force) {
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].add(this.aceleration, this.aceleration, force);
    };
    Rigidbody.prototype.simulate = function (time, integrator) {
        integrator(this.transform.position, this.velocity, this.aceleration, time.fixedTime);
        gl_matrix__WEBPACK_IMPORTED_MODULE_1__["vec3"].set(this.aceleration, 0, 0, 0);
    };
    return Rigidbody;
}(_Core_component__WEBPACK_IMPORTED_MODULE_0__["PhysicsComponent"]));



/***/ }),

/***/ "./src/Physics/physicsSimulation.ts":
/*!******************************************!*\
  !*** ./src/Physics/physicsSimulation.ts ***!
  \******************************************/
/*! exports provided: Integrators, PhysicsSimulation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Integrators", function() { return Integrators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicsSimulation", function() { return PhysicsSimulation; });
/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/src/gl-matrix.js");

var Integrators = {
    Euler: function (position, velocity, aceleration, deltaTime) {
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].scaleAndAdd(position, position, velocity, deltaTime);
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].scaleAndAdd(velocity, velocity, aceleration, deltaTime);
    },
    ModifiedEuler: function (position, velocity, aceleration, deltaTime) {
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].scaleAndAdd(velocity, velocity, aceleration, deltaTime);
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].scaleAndAdd(position, position, velocity, deltaTime);
    },
    Verlet: function (position, velocity, aceleration, deltaTime) {
        var halfDelta = deltaTime * 0.5;
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].scaleAndAdd(position, position, velocity, halfDelta);
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].scaleAndAdd(velocity, velocity, aceleration, deltaTime);
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].scaleAndAdd(position, position, velocity, halfDelta);
    },
    VelocityVerlet: function (position, velocity, aceleration, deltaTime) {
        var halfDelta = deltaTime * 0.5;
        var oldVelocity = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].clone(velocity);
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].scaleAndAdd(velocity, velocity, aceleration, deltaTime);
        var sum = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].add(sum, oldVelocity, velocity);
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].scaleAndAdd(position, position, sum, halfDelta);
    },
    ForestRuth: function (position, velocity, aceleration, deltaTime) {
        var frCoefficient = 1.0 / (2.0 - Math.pow(2.0, 1.0 / 3.0));
        var frComplement = 1.0 - 2.0 * frCoefficient;
        Integrators.Verlet(position, velocity, aceleration, deltaTime * frCoefficient);
        Integrators.Verlet(position, velocity, aceleration, deltaTime * frComplement);
        Integrators.Verlet(position, velocity, aceleration, deltaTime * frCoefficient);
    }
};
var PhysicsSimulation = /** @class */ (function () {
    function PhysicsSimulation(integrator) {
        this.useGravity = true;
        this.gravity = gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].create();
        this.integrator = integrator;
        gl_matrix__WEBPACK_IMPORTED_MODULE_0__["vec3"].set(this.gravity, 0.0, -9.8, 0.0);
    }
    PhysicsSimulation.prototype.simulate = function (time, bodies) {
        for (var _i = 0, bodies_1 = bodies; _i < bodies_1.length; _i++) {
            var b = bodies_1[_i];
            if (this.useGravity) {
                b.applyGravity(this.gravity);
            }
            b.simulate(time, this.integrator);
        }
        // Do Collision Checks
    };
    return PhysicsSimulation;
}());



/***/ }),

/***/ "./src/lux.ts":
/*!********************!*\
  !*** ./src/lux.ts ***!
  \********************/
/*! exports provided: core, simulation, renderer, useScene, swapScene, run, loop, fixedLoop, Profiler, global_profiler, RM, Transform, GameObject, Component, PhysicsComponent, BehaviourComponent, RenderComponent, Scene, glMatrix, vec2, vec3, vec4, quat, mat2, mat2d, mat3, mat4, PhysicsSimulation, Integrators, Rigidbody, webgl, gl, AttributePointer, Vertex, VERTEX_LAYOUT, VertexArray, Mesh, Geometry, Texture, TextureFormat, TexturePresets, RenderBuffer, RenderBufferFormat, Framebuffer, AttachmentType, Shader, BaseMaterial, MaterialTag, BasicMaterial, NormalMaterial, LambertMaterial, PhongMaterial, HDRMaterial, PointLight, Camera, MeshRenderer, RenderGroups, ForwardRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Core_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Core/core */ "./src/Core/core.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "core", function() { return _Core_core__WEBPACK_IMPORTED_MODULE_0__["core"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "simulation", function() { return _Core_core__WEBPACK_IMPORTED_MODULE_0__["simulation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderer", function() { return _Core_core__WEBPACK_IMPORTED_MODULE_0__["renderer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScene", function() { return _Core_core__WEBPACK_IMPORTED_MODULE_0__["useScene"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "swapScene", function() { return _Core_core__WEBPACK_IMPORTED_MODULE_0__["swapScene"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "run", function() { return _Core_core__WEBPACK_IMPORTED_MODULE_0__["run"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loop", function() { return _Core_core__WEBPACK_IMPORTED_MODULE_0__["loop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fixedLoop", function() { return _Core_core__WEBPACK_IMPORTED_MODULE_0__["fixedLoop"]; });

/* harmony import */ var _profiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profiler */ "./src/profiler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Profiler", function() { return _profiler__WEBPACK_IMPORTED_MODULE_1__["Profiler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "global_profiler", function() { return _profiler__WEBPACK_IMPORTED_MODULE_1__["global_profiler"]; });

/* harmony import */ var _Core_resourceManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Core/resourceManager */ "./src/Core/resourceManager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RM", function() { return _Core_resourceManager__WEBPACK_IMPORTED_MODULE_2__["RM"]; });

/* harmony import */ var _Core_transform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Core/transform */ "./src/Core/transform.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return _Core_transform__WEBPACK_IMPORTED_MODULE_3__["Transform"]; });

/* harmony import */ var _Core_gameObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Core/gameObject */ "./src/Core/gameObject.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameObject", function() { return _Core_gameObject__WEBPACK_IMPORTED_MODULE_4__["GameObject"]; });

/* harmony import */ var _Core_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Core/component */ "./src/Core/component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _Core_component__WEBPACK_IMPORTED_MODULE_5__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhysicsComponent", function() { return _Core_component__WEBPACK_IMPORTED_MODULE_5__["PhysicsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BehaviourComponent", function() { return _Core_component__WEBPACK_IMPORTED_MODULE_5__["BehaviourComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderComponent", function() { return _Core_component__WEBPACK_IMPORTED_MODULE_5__["RenderComponent"]; });

/* harmony import */ var _Core_scene__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Core/scene */ "./src/Core/scene.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return _Core_scene__WEBPACK_IMPORTED_MODULE_6__["Scene"]; });

/* harmony import */ var gl_matrix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/src/gl-matrix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "glMatrix", function() { return gl_matrix__WEBPACK_IMPORTED_MODULE_7__["glMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vec2", function() { return gl_matrix__WEBPACK_IMPORTED_MODULE_7__["vec2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vec3", function() { return gl_matrix__WEBPACK_IMPORTED_MODULE_7__["vec3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vec4", function() { return gl_matrix__WEBPACK_IMPORTED_MODULE_7__["vec4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quat", function() { return gl_matrix__WEBPACK_IMPORTED_MODULE_7__["quat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mat2", function() { return gl_matrix__WEBPACK_IMPORTED_MODULE_7__["mat2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mat2d", function() { return gl_matrix__WEBPACK_IMPORTED_MODULE_7__["mat2d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mat3", function() { return gl_matrix__WEBPACK_IMPORTED_MODULE_7__["mat3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mat4", function() { return gl_matrix__WEBPACK_IMPORTED_MODULE_7__["mat4"]; });

/* harmony import */ var _Physics_physicsSimulation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Physics/physicsSimulation */ "./src/Physics/physicsSimulation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhysicsSimulation", function() { return _Physics_physicsSimulation__WEBPACK_IMPORTED_MODULE_8__["PhysicsSimulation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Integrators", function() { return _Physics_physicsSimulation__WEBPACK_IMPORTED_MODULE_8__["Integrators"]; });

/* harmony import */ var _Physics_Components_rigidbody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Physics/Components/rigidbody */ "./src/Physics/Components/rigidbody.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rigidbody", function() { return _Physics_Components_rigidbody__WEBPACK_IMPORTED_MODULE_9__["Rigidbody"]; });

/* harmony import */ var _Graphics_webgl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Graphics/webgl */ "./src/Graphics/webgl.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "webgl", function() { return _Graphics_webgl__WEBPACK_IMPORTED_MODULE_10__["webgl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gl", function() { return _Graphics_webgl__WEBPACK_IMPORTED_MODULE_10__["gl"]; });

/* harmony import */ var _Graphics_Geometry_attributePointer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Graphics/Geometry/attributePointer */ "./src/Graphics/Geometry/attributePointer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributePointer", function() { return _Graphics_Geometry_attributePointer__WEBPACK_IMPORTED_MODULE_11__["AttributePointer"]; });

/* harmony import */ var _Graphics_Geometry_vertex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Graphics/Geometry/vertex */ "./src/Graphics/Geometry/vertex.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vertex", function() { return _Graphics_Geometry_vertex__WEBPACK_IMPORTED_MODULE_12__["Vertex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERTEX_LAYOUT", function() { return _Graphics_Geometry_vertex__WEBPACK_IMPORTED_MODULE_12__["VERTEX_LAYOUT"]; });

/* harmony import */ var _Graphics_Geometry_vertexArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Graphics/Geometry/vertexArray */ "./src/Graphics/Geometry/vertexArray.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VertexArray", function() { return _Graphics_Geometry_vertexArray__WEBPACK_IMPORTED_MODULE_13__["VertexArray"]; });

/* harmony import */ var _Graphics_Geometry_mesh__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Graphics/Geometry/mesh */ "./src/Graphics/Geometry/mesh.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return _Graphics_Geometry_mesh__WEBPACK_IMPORTED_MODULE_14__["Mesh"]; });

/* harmony import */ var _Graphics_Geometry_geometry__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Graphics/Geometry/geometry */ "./src/Graphics/Geometry/geometry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geometry", function() { return _Graphics_Geometry_geometry__WEBPACK_IMPORTED_MODULE_15__["Geometry"]; });

/* harmony import */ var _Graphics_Textures_texture__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Graphics/Textures/texture */ "./src/Graphics/Textures/texture.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Texture", function() { return _Graphics_Textures_texture__WEBPACK_IMPORTED_MODULE_16__["Texture"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextureFormat", function() { return _Graphics_Textures_texture__WEBPACK_IMPORTED_MODULE_16__["TextureFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TexturePresets", function() { return _Graphics_Textures_texture__WEBPACK_IMPORTED_MODULE_16__["TexturePresets"]; });

/* harmony import */ var _Graphics_Textures_renderbuffer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Graphics/Textures/renderbuffer */ "./src/Graphics/Textures/renderbuffer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderBuffer", function() { return _Graphics_Textures_renderbuffer__WEBPACK_IMPORTED_MODULE_17__["RenderBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderBufferFormat", function() { return _Graphics_Textures_renderbuffer__WEBPACK_IMPORTED_MODULE_17__["RenderBufferFormat"]; });

/* harmony import */ var _Graphics_Textures_framebuffer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Graphics/Textures/framebuffer */ "./src/Graphics/Textures/framebuffer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Framebuffer", function() { return _Graphics_Textures_framebuffer__WEBPACK_IMPORTED_MODULE_18__["Framebuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttachmentType", function() { return _Graphics_Textures_framebuffer__WEBPACK_IMPORTED_MODULE_18__["AttachmentType"]; });

/* harmony import */ var _Graphics_shader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Graphics/shader */ "./src/Graphics/shader.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shader", function() { return _Graphics_shader__WEBPACK_IMPORTED_MODULE_19__["Shader"]; });

/* harmony import */ var _Graphics_Materials_baseMaterial__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Graphics/Materials/baseMaterial */ "./src/Graphics/Materials/baseMaterial.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseMaterial", function() { return _Graphics_Materials_baseMaterial__WEBPACK_IMPORTED_MODULE_20__["BaseMaterial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialTag", function() { return _Graphics_Materials_baseMaterial__WEBPACK_IMPORTED_MODULE_20__["MaterialTag"]; });

/* harmony import */ var _Graphics_Materials_basicMaterial__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Graphics/Materials/basicMaterial */ "./src/Graphics/Materials/basicMaterial.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicMaterial", function() { return _Graphics_Materials_basicMaterial__WEBPACK_IMPORTED_MODULE_21__["BasicMaterial"]; });

/* harmony import */ var _Graphics_Materials_normalMaterial__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Graphics/Materials/normalMaterial */ "./src/Graphics/Materials/normalMaterial.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NormalMaterial", function() { return _Graphics_Materials_normalMaterial__WEBPACK_IMPORTED_MODULE_22__["NormalMaterial"]; });

/* harmony import */ var _Graphics_Materials_lambertMaterial__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Graphics/Materials/lambertMaterial */ "./src/Graphics/Materials/lambertMaterial.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LambertMaterial", function() { return _Graphics_Materials_lambertMaterial__WEBPACK_IMPORTED_MODULE_23__["LambertMaterial"]; });

/* harmony import */ var _Graphics_Materials_phongMaterial__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Graphics/Materials/phongMaterial */ "./src/Graphics/Materials/phongMaterial.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhongMaterial", function() { return _Graphics_Materials_phongMaterial__WEBPACK_IMPORTED_MODULE_24__["PhongMaterial"]; });

/* harmony import */ var _Graphics_Materials_Post_Process_hdrMaterial__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Graphics/Materials/Post Process/hdrMaterial */ "./src/Graphics/Materials/Post Process/hdrMaterial.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HDRMaterial", function() { return _Graphics_Materials_Post_Process_hdrMaterial__WEBPACK_IMPORTED_MODULE_25__["HDRMaterial"]; });

/* harmony import */ var _Graphics_Lights_pointLight__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Graphics/Lights/pointLight */ "./src/Graphics/Lights/pointLight.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointLight", function() { return _Graphics_Lights_pointLight__WEBPACK_IMPORTED_MODULE_26__["PointLight"]; });

/* harmony import */ var _Graphics_camera__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Graphics/camera */ "./src/Graphics/camera.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _Graphics_camera__WEBPACK_IMPORTED_MODULE_27__["Camera"]; });

/* harmony import */ var _Graphics_Components_meshRenderer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Graphics/Components/meshRenderer */ "./src/Graphics/Components/meshRenderer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeshRenderer", function() { return _Graphics_Components_meshRenderer__WEBPACK_IMPORTED_MODULE_28__["MeshRenderer"]; });

/* harmony import */ var _Graphics_Renderers_renderGroups__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Graphics/Renderers/renderGroups */ "./src/Graphics/Renderers/renderGroups.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderGroups", function() { return _Graphics_Renderers_renderGroups__WEBPACK_IMPORTED_MODULE_29__["RenderGroups"]; });

/* harmony import */ var _Graphics_Renderers_forwardRenderer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Graphics/Renderers/forwardRenderer */ "./src/Graphics/Renderers/forwardRenderer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForwardRenderer", function() { return _Graphics_Renderers_forwardRenderer__WEBPACK_IMPORTED_MODULE_30__["ForwardRenderer"]; });

// --------------------------------- Core

 // TEST
 // this is sort of a hack for some things.





// -------------------------------- Physics


// ----------------------------------------------- Rendering























/***/ }),

/***/ "./src/profiler.ts":
/*!*************************!*\
  !*** ./src/profiler.ts ***!
  \*************************/
/*! exports provided: Profiler, global_profiler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profiler", function() { return Profiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "global_profiler", function() { return global_profiler; });
//TODO: Improve this profiler
var Profiler = /** @class */ (function () {
    function Profiler() {
        this.elements = {};
    }
    Profiler.prototype.start = function (fnName) {
        this.elements[fnName] = {};
        this.elements[fnName].startT = performance.now();
    };
    Profiler.prototype.end = function (fnName) {
        this.elements[fnName].endT = performance.now();
        this.elements[fnName].total = this.elements[fnName].endT - this.elements[fnName].startT;
    };
    Profiler.prototype.log = function () {
        for (var elemName in this.elements) {
            console.log(elemName + ': ' + this.elements[elemName].total + 'ms');
        }
    };
    return Profiler;
}());

var global_profiler = new Profiler();


/***/ })

/******/ });
});
//# sourceMappingURL=lux.js.map