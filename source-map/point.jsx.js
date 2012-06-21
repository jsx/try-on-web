var JSX = {};
(function () {

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		delete obj[prop];
		obj[prop] = value;
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

/**
 * sideeffect().a /= b
 */
function $__jsx_div_assign(obj, prop, divisor) {
	return obj[prop] = (obj[prop] / divisor) | 0;
}

/*
 * global functions called by JSX as Number.* (renamed so that they do not conflict with local variable names)
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
var $__jsx_isNaN = isNaN;
var $__jsx_isFinite = isFinite;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
}
/**
 * class Point extends Object
 * @constructor
 */
function Point() {
}

Point.prototype = new Object;
/**
 * @constructor
 */
function Point$() {
	this._x = 0;
	this._y = 0;
};

Point$.prototype = new Point;

/**
 * @constructor
 * @param {!number} x
 * @param {!number} y
 */
function Point$NN(x, y) {
	this._x = x;
	this._y = y;
};

Point$NN.prototype = new Point;

/**
 * @return {!number}
 */
Point.prototype.getX$ = function () {
	return this._x;
};

/**
 * @return {!number}
 */
Point.prototype.getY$ = function () {
	return this._y;
};

/**
 * @param {!number} value
 */
Point.prototype.setX$N = function (value) {
	this._x = value;
};

/**
 * @param {!number} value
 */
Point.prototype.setY$N = function (value) {
	this._y = value;
};

/**
 * class _Main extends Object
 * @constructor
 */
function _Main() {
}

_Main.prototype = new Object;
/**
 * @constructor
 */
function _Main$() {
};

_Main$.prototype = new _Main;

/**
 * @param {Array.<undefined|!string>} args
 */
_Main.main$AS = function (args) {
	/** @type {Point} */
	var p;
	console.log("by default constructor:");
	p = new Point$();
	console.log("x=" + (p.getX$() + ""));
	console.log("y=" + (p.getY$() + ""));
	console.log("by new Point(10, 20):");
	p = new Point$NN(10, 20);
	console.log("x=" + (p.getX$() + ""));
	console.log("y=" + (p.getY$() + ""));
};

var _Main$main$AS = _Main.main$AS;

var $__jsx_classMap = {
	"point.jsx": {
		Point: Point,
		Point$: Point$,
		Point$NN: Point$NN,
		_Main: _Main,
		_Main$: _Main$
	}
};


}());

//@ sourceMappingURL=point.jsx.js.mapping
