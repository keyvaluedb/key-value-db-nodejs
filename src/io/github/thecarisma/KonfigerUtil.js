
/*
 * The MIT License
 *
 * Copyright 2020 Adewale Azeez <azeezadewale98@gmail.com>.
 *
 */
 
function typeOf(arg) {
	if (isChar(arg)) {
		return 'char'
	}
	else if (isObject(arg)) {
		return 'object'
	}
	return typeof arg 
}
 
/**

*/
function isDefined(arg) {
	return typeof arg !== "undefined"
}
 
/**

*/
function isString(arg) {
	return typeof arg === "string"
}
 
/**

*/
function isNumber(arg) {
	return typeof arg === "number"
}
 
/**

*/
function isObject(arg) {
	return typeof arg === "object"
}
 
/**

*/
function isChar(arg) {
	return typeof arg === "string" && arg.length === 1
}
 
/**

*/
function isBoolean(arg) {
	return typeof arg === "boolean"
}

function throwError(title, error) {
    throw new Error(title + ": " + error)
}

/**

*/
module.exports = { 
	typeOf,
	isDefined,
	isString,
	isNumber,
	isObject,
	isChar,
	isBoolean,
    throwError
}