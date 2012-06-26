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
 * global functions called by JSX
 * (enamed so that they do not conflict with local variable names)
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
var $__jsx_isNaN = isNaN;
var $__jsx_isFinite = isFinite;

var $__jsx_encodeURIComponent = encodeURIComponent;
var $__jsx_decodeURIComponent = decodeURIComponent;
var $__jsx_encodeURI = encodeURI;
var $__jsx_decodeURI = decodeURI;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * profiler object, initialized afterwards
 */
function $__jsx_profiler() {
}

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
};

JSX.profilerIsRunning = function () {
	return $__jsx_profiler.getResults != null;
};

JSX.getProfileResults = function () {
	return ($__jsx_profiler.getResults || function () { return {}; })();
};

JSX.postProfileResults = function (url) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url);
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
	/** @type {!number} */
	var i;
	/** @type {TimerHandle} */
	var id;
	i = 0;
	id = undefined;
	id = Timer$setInterval$F$V$I((function () {
		console.log(++ i);
		if (i === 4) {
			Timer$clearInterval$LTimerHandle$(id);
		}
	}), 500);
};

var _Main$main$AS = _Main.main$AS;

/**
 * class TimerHandle extends Object
 * @constructor
 */
function TimerHandle() {
}

TimerHandle.prototype = new Object;
/**
 * @constructor
 */
function TimerHandle$() {
};

TimerHandle$.prototype = new TimerHandle;

/**
 * class Timer extends Object
 * @constructor
 */
function Timer() {
}

Timer.prototype = new Object;
/**
 * @constructor
 */
function Timer$() {
};

Timer$.prototype = new Timer;

/**
 * @param {!number} milliseconds
 * @return {TimerHandle}
 */
Timer.setTimeout$F$V$I = function (listener, milliseconds) {
	var f;
	f = (function (o) { return typeof(o) === "function" ? o : null; })(js.global.setTimeout);
	return f(listener, milliseconds);
};

var Timer$setTimeout$F$V$I = Timer.setTimeout$F$V$I;

/**
 * @param {TimerHandle} timerID
 */
Timer.clearTimeout$LTimerHandle$ = function (timerID) {
	var f;
	f = (function (o) { return typeof(o) === "function" ? o : null; })(js.global.clearTimeout);
	f(timerID);
};

var Timer$clearTimeout$LTimerHandle$ = Timer.clearTimeout$LTimerHandle$;

/**
 * @param {!number} milliseconds
 * @return {TimerHandle}
 */
Timer.setInterval$F$V$I = function (listener, milliseconds) {
	var f;
	f = (function (o) { return typeof(o) === "function" ? o : null; })(js.global.setInterval);
	return f(listener, milliseconds);
};

var Timer$setInterval$F$V$I = Timer.setInterval$F$V$I;

/**
 * @param {TimerHandle} timerID
 */
Timer.clearInterval$LTimerHandle$ = function (timerID) {
	var f;
	f = (function (o) { return typeof(o) === "function" ? o : null; })(js.global.clearInterval);
	f(timerID);
};

var Timer$clearInterval$LTimerHandle$ = Timer.clearInterval$LTimerHandle$;

/**
 * class js extends Object
 * @constructor
 */
function js() {
}

js.prototype = new Object;
/**
 * @constructor
 */
function js$() {
};

js$.prototype = new js;

js.global = (function () { return this; })();

var $__jsx_classMap = {
	"timers.jsx": {
		_Main: _Main,
		_Main$: _Main$
	},
	"system:lib/js/timer.jsx": {
		TimerHandle: TimerHandle,
		TimerHandle$: TimerHandle$,
		Timer: Timer,
		Timer$: Timer$
	},
	"system:lib/js/js.jsx": {
		js: js,
		js$: js$
	}
};


})();

//@ sourceMappingURL=timers.jsx.js.mapping
