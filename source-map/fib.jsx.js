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
 * class Fib extends Object
 * @constructor
 */
function Fib() {
}

Fib.prototype = new Object;
/**
 * @constructor
 */
function Fib$() {
};

Fib$.prototype = new Fib;

/**
 * @param {!number} n
 * @return {!number}
 */
Fib.fib1$I = function (n) {
	if (n <= 2) {
		return 1;
	} else {
		return Fib$fib1$I(n - 1) + Fib$fib1$I(n - 2);
	}
};

var Fib$fib1$I = Fib.fib1$I;

/**
 * @param {!number} n
 * @return {!number}
 */
Fib.fib2$N = function (n) {
	return (n <= 2 ? 1 : Fib$fib2$N(n - 1) + Fib$fib2$N(n - 2));
};

var Fib$fib2$N = Fib.fib2$N;

/**
 * @param {!number} n
 * @return {!number}
 */
Fib.fib3$I = function (n) {
	/** @type {!number} */
	var value;
	/** @type {!number} */
	var prevValue;
	/** @type {!number} */
	var i;
	/** @type {!number} */
	var t;
	if (n <= 2) {
		return 1;
	}
	value = 1;
	prevValue = 1;
	for (i = 3; i <= n; i++) {
		t = value + prevValue;
		prevValue = value;
		value = t;
	}
	return (value | 0);
};

var Fib$fib3$I = Fib.fib3$I;

/**
 * @param {!number} n
 * @return {!number}
 */
Fib.fib4$I = function (n) {
	switch (n) {
	case 1:
		return 1;
	case 2:
		return 1;
	default:
		return Fib$fib4$I(n - 1) + Fib$fib4$I(n - 2);
	}
};

var Fib$fib4$I = Fib.fib4$I;

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
	/** @type {!number} */
	var n;
	n = (args.length > 0 ? +args[0] : 10);
	console.log("fib1(" + (n + "") + ") =", Fib$fib1$I(n));
	console.log("fib2(" + (n + "") + ") =", Fib$fib2$N(n));
	console.log("fib3(" + (n + "") + ") =", Fib$fib3$I(n));
	console.log("fib4(" + (n + "") + ") =", Fib$fib4$I(n));
};

var _Main$main$AS = _Main.main$AS;

var $__jsx_classMap = {
	"fib.jsx": {
		Fib: Fib,
		Fib$: Fib$,
		_Main: _Main,
		_Main$: _Main$
	}
};


}());

//@ sourceMappingURL=fib.jsx.js.mapping
