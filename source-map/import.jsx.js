// generatedy by JSX compiler 0.9.17 (2013-03-19 12:04:46 +0900; 7b65dcbd073de4267fd12dc27470c71e46c48c95)
var JSX = {};
(function (JSX) {
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
 * global functions, renamed to avoid conflict with local variable names
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

JSX.postProfileResults = function (url, cb) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url, cb);
};

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
JSX.DEBUG = true;
/**
 * class _Main extends Object
 * @constructor
 */
function _Main() {
}

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
	console.log("fib(10)=" + Fib$fib1$I(10).toString());
};

var _Main$main$AS = _Main.main$AS;

/**
 * class Fib extends Object
 * @constructor
 */
function Fib() {
}

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
 * class _Main$0 extends Object
 * @constructor
 */
function _Main$0() {
}

/**
 * @constructor
 */
function _Main$0$() {
};

_Main$0$.prototype = new _Main$0;

/**
 * @param {Array.<undefined|!string>} args
 */
_Main$0.main$AS = function (args) {
	/** @type {!number} */
	var n;
	n = (args.length > 0 ? +(function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/example/fib.jsx:42:38] null access\n        var n = args.length > 0 ? args[0] as number : 10;\n                                      ^\n");
		}
		return v;
	}(args[0])) : 10);
	console.log("fib1(" + (n + "") + ") = " + (Fib$fib1$I(n) + ""));
	console.log("fib2(" + (n + "") + ") = " + (Fib$fib2$N(n) + ""));
	console.log("fib3(" + (n + "") + ") = " + (Fib$fib3$I(n) + ""));
	console.log("fib4(" + (n + "") + ") = " + (Fib$fib4$I(n) + ""));
};

var _Main$0$main$AS = _Main$0.main$AS;

/**
 * class TestCase extends Object
 * @constructor
 */
function TestCase() {
}

/**
 * @constructor
 */
function TestCase$() {
	this.verbose = true;
	this.showStackTrace = true;
	this._totalCount = 0;
	this._totalPass = 0;
	this._count = 0;
	this._pass = 0;
	this._tests = null;
	this._currentName = null;
	this._tasks = [  ];
};

TestCase$.prototype = new TestCase;

/**
 */
TestCase.prototype.setUp$ = function () {
};

/**
 */
TestCase.prototype.tearDown$ = function () {
};

/**
 * @param {Array.<undefined|!string>} tests
 */
TestCase.prototype.beforeClass$AS = function (tests) {
	this._tests = tests;
	this._say$S("1.." + (this._tests.length + ""));
};

/**
 */
TestCase.prototype.afterClass$ = function () {
	/** @type {*} */
	var next;
	if (this._tasks.length === 0) {
		this.finish$();
	} else {
		next = this._tasks.shift();
		next();
	}
};

/**
 * @param {!string} name
 * @param {*} testFunction
 */
TestCase.prototype.run$SF$V$ = function (name, testFunction) {
	/** @type {!number} */
	var numAsyncTasks;
	/** @type {!string} */
	var msg;
	name = name.replace(/[$].*$/, "");
	numAsyncTasks = this._tasks.length;
	this._currentName = name;
	this.setUp$();
	try {
		testFunction();
	} catch ($__jsx_catch_0) {
		if ($__jsx_catch_0 instanceof Error) {
			if ($__jsx_catch_0 instanceof TestCase$CFailure) {
				msg = ($__jsx_catch_0.message ? " - " + $__jsx_catch_0.message : "");
			} else {
				msg = " - failed with exception";
				if ($__jsx_catch_0.message) {
					msg += ": " + $__jsx_catch_0.message;
				}
			}
			this._say$S("\t" + "not ok " + (++ this._count + "") + msg);
			if ($__jsx_catch_0.stack && this.showStackTrace) {
				this.diag$S($__jsx_catch_0.stack);
			}
		} else {
			throw $__jsx_catch_0;
		}
	}
	if (numAsyncTasks === this._tasks.length) {
		this.after$S(name);
	}
};

/**
 * @param {!string} name
 */
TestCase.prototype.after$S = function (name) {
	this.tearDown$();
	++ this._totalCount;
	this._say$S("\t" + "1.." + (this._count + ""));
	if (this._count === this._pass) {
		++ this._totalPass;
		this._say$S("ok " + (this._totalCount + "") + " - " + name);
	} else {
		this._say$S("not ok " + (this._totalCount + "") + " - " + name);
	}
	this._count = 0;
	this._pass = 0;
};

/**
 */
TestCase.prototype.finish$ = function () {
	/** @type {!number} */
	var failed;
	if (this._totalCount !== this._totalPass) {
		failed = this._totalCount - this._totalPass;
		this.diag$S("tests failed " + (failed + "") + " of " + (this._totalCount + ""));
	}
};

/**
 * @param {*} testBody
 * @param {*} timeoutHandler
 * @param {!number} timeoutMS
 */
TestCase.prototype.async$F$LAsyncContext$V$F$LAsyncContext$V$I = function (testBody, timeoutHandler, timeoutMS) {
	var $this = this;
	/** @type {AsyncContext} */
	var async;
	async = new AsyncContext$LTestCase$SF$LAsyncContext$V$I(this, (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:185:47] null access\n        var async = new AsyncContext(this, this._currentName, timeoutHandler, timeoutMS);\n                                               ^\n");
		}
		return v;
	}(this._currentName)), timeoutHandler, timeoutMS);
	this._tasks.push((function () {
		testBody(async);
	}));
};

/**
 * @param {*} testBody
 * @param {!number} timeoutMS
 */
TestCase.prototype.async$F$LAsyncContext$V$I = function (testBody, timeoutMS) {
	var $this = this;
	this.async$F$LAsyncContext$V$F$LAsyncContext$V$I(testBody, (function (async) {
		$this.fail$S("TIMEOUT: " + async.name$());
		async.done$();
	}), timeoutMS);
};

/**
 * @param {*} value
 * @return {TestCase$CMatcher}
 */
TestCase.prototype.expect$X = function (value) {
	++ this._count;
	return new TestCase$CMatcher$LTestCase$X(this, value);
};

/**
 * @param {*} value
 * @param {!string} message
 * @return {TestCase$CMatcher}
 */
TestCase.prototype.expect$XS = function (value, message) {
	++ this._count;
	return new TestCase$CMatcher$LTestCase$XS(this, value, message);
};

/**
 * @param {undefined|!string} name
 */
TestCase.prototype._ok$US = function (name) {
	/** @type {!string} */
	var s;
	++ this._pass;
	s = (name != null ? " - " + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:222:39] null access\n        var s = name != null ? \" - \" + name :  \"\";\n                                       ^^^^\n");
		}
		return v;
	}(name)) : "");
	this._say$S("\t" + "ok " + (this._count + "") + s);
};

/**
 * @param {undefined|!string} name
 */
TestCase.prototype._nok$US = function (name) {
	this._nok$USUSXX(name, null, null, null);
};

/**
 * @param {undefined|!string} name
 * @param {undefined|!string} op
 * @param {*} got
 * @param {*} expected
 */
TestCase.prototype._nok$USUSXX = function (name, op, got, expected) {
	/** @type {!string} */
	var s;
	s = (name != null ? " - " + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:237:39] null access\n        var s = name != null ? \" - \" + name :  \"\";\n                                       ^^^^\n");
		}
		return v;
	}(name)) : "");
	this._say$S("\t" + "not ok " + (this._count + "") + s);
	if (op != null) {
		this.diag$S("comparing with " + (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:241:42] null access\n            this.diag(\"comparing with \" + op + s.replace(\" - \", \" for \"));\n                                          ^^\n");
			}
			return v;
		}(op)) + s.replace(" - ", " for "));
		this._dump$SX("got:      ", got);
		this._dump$SX("expected: ", expected);
	}
	throw new TestCase$CFailure$S((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:245:48] null access\n        throw new TestCase.Failure(name != null ? name : \"\");\n                                                ^\n");
		}
		return v;
	}(name != null ? name : "")));
};

/**
 * @param {!string} reason
 */
TestCase.prototype.pass$S = function (reason) {
	++ this._count;
	++ this._pass;
	this._say$S("\t" + "ok " + (this._count + "") + " - " + reason);
};

/**
 * @param {!string} reason
 */
TestCase.prototype.fail$S = function (reason) {
	++ this._count;
	throw new TestCase$CFailure$S(reason);
};

/**
 * @param {!string} tag
 * @param {*} value
 */
TestCase.prototype._dump$SX = function (tag, value) {
	if (typeof value === "object") {
		this.diag$S(tag);
		console.dir(value);
	} else {
		this.diag$S(tag + (value + ""));
	}
};

/**
 * @param {!string} message
 */
TestCase.prototype._say$S = function (message) {
	console.info(message);
};

/**
 * @param {*} a
 * @param {*} b
 * @return {!boolean}
 */
TestCase.prototype.equals$XX = function (a, b) {
	return this._equals$XXI(a, b, 0);
};

/**
 * @param {*} a
 * @param {*} b
 * @param {!number} recursion
 * @return {!boolean}
 */
TestCase.prototype._equals$XXI = function (a, b, recursion) {
	/** @type {Array.<undefined|*>} */
	var aryA;
	/** @type {Array.<undefined|*>} */
	var aryB;
	/** @type {!number} */
	var i;
	/** @type {Object.<string, undefined|*>} */
	var mapA;
	/** @type {Object.<string, undefined|*>} */
	var mapB;
	/** @type {Array.<undefined|!string>} */
	var mapAkeys;
	/** @type {Array.<undefined|!string>} */
	var mapBkeys;
	/** @type {undefined|!string} */
	var key;
	/** @type {Date} */
	var dateA;
	/** @type {Date} */
	var dateB;
	if (++ recursion > 1000) {
		throw new RangeError("Deep recursion in equals()");
	}
	if (a == b || a == null && b == null) {
		return true;
	}
	if (a instanceof Array) {
		if (! (b instanceof Array)) {
			return false;
		}
		aryA = (function (v) {
			if (! (v == null || v instanceof Array)) {
				debugger;
				throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:297:25] detected invalid cast, value is not an Array or null\n            var aryA = a as Array.<variant>;\n                         ^^\n");
			}
			return v;
		}(a));
		aryB = (function (v) {
			if (! (v == null || v instanceof Array)) {
				debugger;
				throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:298:25] detected invalid cast, value is not an Array or null\n            var aryB = b as Array.<variant>;\n                         ^^\n");
			}
			return v;
		}(b));
		if (aryA.length !== aryB.length) {
			return false;
		}
		for (i = 0; i < aryA.length; ++ i) {
			if (! this._equals$XXI(aryA[i], aryB[i], recursion)) {
				return false;
			}
		}
		return true;
	}
	if ((typeof(a) === "object")) {
		if (! ((typeof(b) === "object"))) {
			return false;
		}
		mapA = (function (v) {
			if (! (v == null || typeof v === "object" || typeof v === "function")) {
				debugger;
				throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:315:25] detected invalid cast, value is not a Map or null\n            var mapA = a as Map.<variant>;\n                         ^^\n");
			}
			return v;
		}(a));
		mapB = (function (v) {
			if (! (v == null || typeof v === "object" || typeof v === "function")) {
				debugger;
				throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:316:25] detected invalid cast, value is not a Map or null\n            var mapB = b as Map.<variant>;\n                         ^^\n");
			}
			return v;
		}(b));
		mapAkeys = Object.keys(mapA).sort();
		mapBkeys = Object.keys(mapB).sort();
		if (mapAkeys.length !== mapBkeys.length) {
			return false;
		}
		for (i = 0; i < mapAkeys.length; ++ i) {
			key = mapAkeys[i];
			if (key != mapBkeys[i]) {
				return false;
			}
			if (! this._equals$XXI(mapA[key], mapB[key], recursion)) {
				return false;
			}
		}
		return true;
	}
	if (a instanceof Date) {
		if (! (b instanceof Date)) {
			return false;
		}
		dateA = (function (v) {
			if (! (v == null || v instanceof Date)) {
				debugger;
				throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:342:26] detected invalid cast, value is not an instance of the designated type or null\n            var dateA = a as Date;\n                          ^^\n");
			}
			return v;
		}(a));
		dateB = (function (v) {
			if (! (v == null || v instanceof Date)) {
				debugger;
				throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:343:26] detected invalid cast, value is not an instance of the designated type or null\n            var dateB = b as Date;\n                          ^^\n");
			}
			return v;
		}(b));
		if (dateA && dateB) {
			return dateA.getTime() === dateB.getTime();
		}
	}
	return false;
};

/**
 * @param {Array.<undefined|*>} a
 * @param {Array.<undefined|*>} b
 * @return {!string}
 */
TestCase.prototype.difflet$AXAX = function (a, b) {
	/** @type {!string} */
	var s;
	/** @type {!number} */
	var i;
	/** @type {!number} */
	var l;
	/** @type {*} */
	var ai;
	/** @type {*} */
	var bi;
	/** @type {!boolean} */
	var aIsOver;
	/** @type {!boolean} */
	var aIsLast;
	if (! (a != null)) {
		debugger;
		throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:354:17] assertion failure\n        assert a != null;\n                 ^^\n");
	}
	if (! (b != null)) {
		debugger;
		throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:355:17] assertion failure\n        assert b != null;\n                 ^^\n");
	}
	s = "[\n";
	for ((i = 0, l = Math.max(a.length, b.length)); i < l; ++ i) {
		ai = a[i];
		bi = b[i];
		aIsOver = i >= a.length;
		aIsLast = i + 1 >= a.length;
		if (! aIsOver) {
			s += "  " + JSON.stringify(ai);
			if (! aIsLast) {
				s += ",";
			}
			if (ai != bi) {
				s += " // != " + JSON.stringify(bi);
			}
		} else {
			s += "  // != " + JSON.stringify(bi);
		}
		s += "\n";
	}
	return s + "]";
};

/**
 * @param {!string} message
 */
TestCase.prototype.diag$S = function (message) {
	this._say$S(message.replace(/^/mg, "# "));
};

/**
 * @param {!string} message
 */
TestCase.prototype.note$S = function (message) {
	if (this.verbose) {
		this._say$S(message.replace(/^/mg, "# "));
	}
};

/**
 * @return {!string}
 */
TestCase.prototype.toString = function () {
	if (this._tests != null) {
		return "TestCase[" + this._tests.join(", ") + "]";
	} else {
		return "TestCase";
	}
};

/**
 * class _Test extends TestCase
 * @constructor
 */
function _Test() {
}

_Test.prototype = new TestCase;
/**
 * @constructor
 */
function _Test$() {
	TestCase$.call(this);
};

_Test$.prototype = new _Test;

/**
 */
_Test.prototype.testFib1$ = function () {
	this.expect$X(Fib$fib1$I(10)).toBe$X(55);
};

/**
 */
_Test.prototype.testFib2$ = function () {
	this.expect$X(Fib$fib2$N(10)).toBe$X(55);
};

/**
 */
_Test.prototype.testFib3$ = function () {
	this.expect$X(Fib$fib3$I(10)).toBe$X(55);
};

/**
 */
_Test.prototype.testFib4$ = function () {
	this.expect$X(Fib$fib4$I(10)).toBe$X(55);
};

/**
 * class AsyncContext extends Object
 * @constructor
 */
function AsyncContext() {
}

/**
 * @constructor
 * @param {TestCase} test
 * @param {!string} name
 * @param {*} timeoutHandler
 * @param {!number} timeoutMS
 */
function AsyncContext$LTestCase$SF$LAsyncContext$V$I(test, name, timeoutHandler, timeoutMS) {
	var $this = this;
	/** @type {TimerHandle} */
	var id;
	this._timerId = null;
	this._test = test;
	this._name = name;
	id = Timer$setTimeout$F$V$N((function () {
		timeoutHandler($this);
	}), timeoutMS);
	this._timerId = id;
};

AsyncContext$LTestCase$SF$LAsyncContext$V$I.prototype = new AsyncContext;

/**
 * @return {!string}
 */
AsyncContext.prototype.name$ = function () {
	return this._name;
};

/**
 */
AsyncContext.prototype.done$ = function () {
	/** @type {*} */
	var next;
	Timer$clearTimeout$LTimerHandle$(this._timerId);
	this._test.after$S(this._name);
	if (this._test._tasks.length !== 0) {
		next = this._test._tasks.shift();
		next();
	} else {
		this._test.finish$();
	}
};

/**
 * class Timer extends Object
 * @constructor
 */
function Timer() {
}

/**
 * @constructor
 */
function Timer$() {
};

Timer$.prototype = new Timer;

/**
 * @param {*} callback
 * @param {!number} intervalMS
 * @return {TimerHandle}
 */
Timer.setTimeout$F$V$N = function (callback, intervalMS) {
	return (function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:34:40] detected invalid cast, value is not a function or null\n        return (js.global[\"setTimeout\"] as __noconvert__ function(:function():void,:int) : TimerHandle)(callback, intervalMS);\n                                        ^^\n");
		}
		return v;
	}(js.global.setTimeout))(callback, intervalMS);
};

var Timer$setTimeout$F$V$N = Timer.setTimeout$F$V$N;

/**
 * @param {TimerHandle} timer
 */
Timer.clearTimeout$LTimerHandle$ = function (timer) {
	(function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:38:35] detected invalid cast, value is not a function or null\n        (js.global[\"clearTimeout\"] as __noconvert__ function(:TimerHandle) : void)(timer);\n                                   ^^\n");
		}
		return v;
	}(js.global.clearTimeout))(timer);
};

var Timer$clearTimeout$LTimerHandle$ = Timer.clearTimeout$LTimerHandle$;

/**
 * @param {*} callback
 * @param {!number} intervalMS
 * @return {TimerHandle}
 */
Timer.setInterval$F$V$N = function (callback, intervalMS) {
	return (function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:42:41] detected invalid cast, value is not a function or null\n        return (js.global[\"setInterval\"] as __noconvert__ function(:function():void,:int) : TimerHandle)(callback, intervalMS);\n                                         ^^\n");
		}
		return v;
	}(js.global.setInterval))(callback, intervalMS);
};

var Timer$setInterval$F$V$N = Timer.setInterval$F$V$N;

/**
 * @param {TimerHandle} timer
 */
Timer.clearInterval$LTimerHandle$ = function (timer) {
	(function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:46:36] detected invalid cast, value is not a function or null\n        (js.global[\"clearInterval\"] as __noconvert__ function(:TimerHandle) : void)(timer);\n                                    ^^\n");
		}
		return v;
	}(js.global.clearInterval))(timer);
};

var Timer$clearInterval$LTimerHandle$ = Timer.clearInterval$LTimerHandle$;

/**
 * @param {*} callback
 * @return {TimerHandle}
 */
Timer.requestAnimationFrame$F$NV$ = function (callback) {
	return Timer._requestAnimationFrame(callback);
};

var Timer$requestAnimationFrame$F$NV$ = Timer.requestAnimationFrame$F$NV$;

/**
 * @param {TimerHandle} timer
 */
Timer.cancelAnimationFrame$LTimerHandle$ = function (timer) {
	Timer._cancelAnimationFrame(timer);
};

var Timer$cancelAnimationFrame$LTimerHandle$ = Timer.cancelAnimationFrame$LTimerHandle$;

/**
 * @param {!boolean} enable
 */
Timer.useNativeRAF$B = function (enable) {
	Timer._requestAnimationFrame = Timer$_getRequestAnimationFrameImpl$B(enable);
	Timer._cancelAnimationFrame = Timer$_getCancelAnimationFrameImpl$B(enable);
};

var Timer$useNativeRAF$B = Timer.useNativeRAF$B;

/**
 * @param {!boolean} useNativeImpl
 * @return {*}
 */
Timer._getRequestAnimationFrameImpl$B = function (useNativeImpl) {
	/** @type {!number} */
	var lastTime;
	if (useNativeImpl) {
		if (js.global.requestAnimationFrame) {
			return (function (callback) {
				return (function (v) {
					if (! (v == null || typeof v === "function")) {
						debugger;
						throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:72:63] detected invalid cast, value is not a function or null\n                    return (js.global[\"requestAnimationFrame\"] as __noconvert__\n                                                               ^^\n");
					}
					return v;
				}(js.global.requestAnimationFrame))(callback);
			});
		} else {
			if (js.global.webkitRequestAnimationFrame) {
				return (function (callback) {
					return (function (v) {
						if (! (v == null || typeof v === "function")) {
							debugger;
							throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:78:69] detected invalid cast, value is not a function or null\n                    return (js.global[\"webkitRequestAnimationFrame\"] as __noconvert__\n                                                                     ^^\n");
						}
						return v;
					}(js.global.webkitRequestAnimationFrame))(callback);
				});
			} else {
				if (js.global.mozRequestAnimationFrame) {
					return (function (callback) {
						return (function (v) {
							if (! (v == null || typeof v === "function")) {
								debugger;
								throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:84:66] detected invalid cast, value is not a function or null\n                    return (js.global[\"mozRequestAnimationFrame\"] as __noconvert__\n                                                                  ^^\n");
							}
							return v;
						}(js.global.mozRequestAnimationFrame))(callback);
					});
				} else {
					if (js.global.oRequestAnimationFrame) {
						return (function (callback) {
							return (function (v) {
								if (! (v == null || typeof v === "function")) {
									debugger;
									throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:90:64] detected invalid cast, value is not a function or null\n                    return (js.global[\"oRequestAnimationFrame\"] as __noconvert__\n                                                                ^^\n");
								}
								return v;
							}(js.global.oRequestAnimationFrame))(callback);
						});
					} else {
						if (js.global.msRequestAnimationFrame) {
							return (function (callback) {
								return (function (v) {
									if (! (v == null || typeof v === "function")) {
										debugger;
										throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:96:65] detected invalid cast, value is not a function or null\n                    return (js.global[\"msRequestAnimationFrame\"] as __noconvert__\n                                                                 ^^\n");
									}
									return v;
								}(js.global.msRequestAnimationFrame))(callback);
							});
						}
					}
				}
			}
		}
	}
	lastTime = 0;
	return (function (callback) {
		/** @type {!number} */
		var now;
		/** @type {!number} */
		var timeToCall;
		now = Date.now();
		timeToCall = Math.max(0, 16 - (now - lastTime));
		lastTime = now + timeToCall;
		return Timer$setTimeout$F$V$N((function () {
			callback(now + timeToCall);
		}), timeToCall);
	});
};

var Timer$_getRequestAnimationFrameImpl$B = Timer._getRequestAnimationFrameImpl$B;

/**
 * @param {!boolean} useNativeImpl
 * @return {*}
 */
Timer._getCancelAnimationFrameImpl$B = function (useNativeImpl) {
	if (useNativeImpl) {
		if (js.global.cancelAnimationFrame) {
			return (function (timer) {
				(function (v) {
					if (! (v == null || typeof v === "function")) {
						debugger;
						throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:119:55] detected invalid cast, value is not a function or null\n                    (js.global[\"cancelAnimationFrame\"] as __noconvert__\n                                                       ^^\n");
					}
					return v;
				}(js.global.cancelAnimationFrame))(timer);
			});
		} else {
			if (js.global.webkitCancelAnimationFrame) {
				return (function (timer) {
					(function (v) {
						if (! (v == null || typeof v === "function")) {
							debugger;
							throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:125:61] detected invalid cast, value is not a function or null\n                    (js.global[\"webkitCancelAnimationFrame\"] as __noconvert__\n                                                             ^^\n");
						}
						return v;
					}(js.global.webkitCancelAnimationFrame))(timer);
				});
			} else {
				if (js.global.mozCancelAnimationFrame) {
					return (function (timer) {
						(function (v) {
							if (! (v == null || typeof v === "function")) {
								debugger;
								throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:131:58] detected invalid cast, value is not a function or null\n                    (js.global[\"mozCancelAnimationFrame\"] as __noconvert__\n                                                          ^^\n");
							}
							return v;
						}(js.global.mozCancelAnimationFrame))(timer);
					});
				} else {
					if (js.global.oCancelAnimationFrame) {
						return (function (timer) {
							(function (v) {
								if (! (v == null || typeof v === "function")) {
									debugger;
									throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:137:56] detected invalid cast, value is not a function or null\n                    (js.global[\"oCancelAnimationFrame\"] as __noconvert__\n                                                        ^^\n");
								}
								return v;
							}(js.global.oCancelAnimationFrame))(timer);
						});
					} else {
						if (js.global.msCancelAnimationFrame) {
							return (function (timer) {
								(function (v) {
									if (! (v == null || typeof v === "function")) {
										debugger;
										throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:143:57] detected invalid cast, value is not a function or null\n                    (js.global[\"msCancelAnimationFrame\"] as __noconvert__\n                                                         ^^\n");
									}
									return v;
								}(js.global.msCancelAnimationFrame))(timer);
							});
						}
					}
				}
			}
		}
	}
	return Timer$clearTimeout$LTimerHandle$;
};

var Timer$_getCancelAnimationFrameImpl$B = Timer._getCancelAnimationFrameImpl$B;

/**
 * class TimerHandle extends Object
 * @constructor
 */
function TimerHandle() {
}

/**
 * @constructor
 */
function TimerHandle$() {
};

TimerHandle$.prototype = new TimerHandle;

/**
 * class js extends Object
 * @constructor
 */
function js() {
}

/**
 * @constructor
 */
function js$() {
};

js$.prototype = new js;

/**
 * class TestCase$CMatcher extends Object
 * @constructor
 */
function TestCase$CMatcher() {
}

/**
 * @constructor
 * @param {TestCase} test
 * @param {*} got
 */
function TestCase$CMatcher$LTestCase$X(test, got) {
	this._name = null;
	this._test = test;
	this._got = got;
};

TestCase$CMatcher$LTestCase$X.prototype = new TestCase$CMatcher;

/**
 * @constructor
 * @param {TestCase} test
 * @param {*} got
 * @param {!string} name
 */
function TestCase$CMatcher$LTestCase$XS(test, got, name) {
	this._test = test;
	this._got = got;
	this._name = name;
};

TestCase$CMatcher$LTestCase$XS.prototype = new TestCase$CMatcher;

/**
 * @param {*} x
 */
TestCase$CMatcher.prototype.toBe$X = function (x) {
	this._match$BXXS(this._got == x, this._got, x, "==");
};

/**
 * @param {*} x
 */
TestCase$CMatcher.prototype.notToBe$X = function (x) {
	this._match$BXXS(this._got != x, this._got, x, "!=");
};

/**
 * @param {!number} x
 */
TestCase$CMatcher.prototype.toBeLT$N = function (x) {
	this._match$BXXS(+this._got < x, this._got, x, "<");
};

/**
 * @param {!number} x
 */
TestCase$CMatcher.prototype.toBeLE$N = function (x) {
	this._match$BXXS(+this._got <= x, this._got, x, "<=");
};

/**
 * @param {!number} x
 */
TestCase$CMatcher.prototype.toBeGT$N = function (x) {
	this._match$BXXS(+this._got > x, this._got, x, ">");
};

/**
 * @param {!number} x
 */
TestCase$CMatcher.prototype.toBeGE$N = function (x) {
	this._match$BXXS(+this._got >= x, this._got, x, ">=");
};

/**
 * @param {RegExp} x
 */
TestCase$CMatcher.prototype.toMatch$LRegExp$ = function (x) {
	this._match$BXXS(x.test(this._got + ""), this._got, x, "match");
};

/**
 * @param {RegExp} x
 */
TestCase$CMatcher.prototype.notToMatch$LRegExp$ = function (x) {
	this._match$BXXS(! x.test(this._got + ""), this._got, x, "not match");
};

/**
 * @param {Array.<undefined|*>} x
 */
TestCase$CMatcher.prototype.toEqual$AX = function (x) {
	/** @type {Array.<undefined|*>} */
	var got;
	if (! (x != null)) {
		debugger;
		throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:470:21] assertion failure\n            assert x != null;\n                     ^^\n");
	}
	if (! (this._got instanceof Array)) {
		this._test._nok$USUSXX(this._name, "equals", this._got, x);
		return;
	}
	got = (function (v) {
		if (! (v == null || v instanceof Array)) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:477:32] detected invalid cast, value is not an Array or null\n            var got = this._got as Array.<variant>;\n                                ^^\n");
		}
		return v;
	}(this._got));
	if (this._test.equals$XX(got, x)) {
		this._test._ok$US(this._name);
	} else {
		this._test._nok$USUSXX(this._name, "equals", got, x);
		this._test.note$S(this._test.difflet$AXAX(got, x));
	}
};

/**
 * @param {Array.<undefined|!string>} x
 */
TestCase$CMatcher.prototype.toEqual$AS = function (x) {
	this.toEqual$AX((function (v) {
		if (! (v == null || v instanceof Array)) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:488:27] detected invalid cast, value is not an Array or null\n            this.toEqual(x as __noconvert__ Array.<variant>);\n                           ^^\n");
		}
		return v;
	}(x)));
};

/**
 * @param {Array.<undefined|!number>} x
 */
TestCase$CMatcher.prototype.toEqual$AN = function (x) {
	this.toEqual$AX((function (v) {
		if (! (v == null || v instanceof Array)) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:491:27] detected invalid cast, value is not an Array or null\n            this.toEqual(x as __noconvert__ Array.<variant>);\n                           ^^\n");
		}
		return v;
	}(x)));
};

/**
 * @param {Array.<undefined|!number>} x
 */
TestCase$CMatcher.prototype.toEqual$AI = function (x) {
	this.toEqual$AX((function (v) {
		if (! (v == null || v instanceof Array)) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:494:27] detected invalid cast, value is not an Array or null\n            this.toEqual(x as __noconvert__ Array.<variant>);\n                           ^^\n");
		}
		return v;
	}(x)));
};

/**
 * @param {Array.<undefined|!boolean>} x
 */
TestCase$CMatcher.prototype.toEqual$AB = function (x) {
	this.toEqual$AX((function (v) {
		if (! (v == null || v instanceof Array)) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:497:27] detected invalid cast, value is not an Array or null\n            this.toEqual(x as __noconvert__ Array.<variant>);\n                           ^^\n");
		}
		return v;
	}(x)));
};

/**
 * @param {!boolean} value
 * @param {*} got
 * @param {*} expected
 * @param {!string} op
 */
TestCase$CMatcher.prototype._match$BXXS = function (value, got, expected, op) {
	if (value) {
		this._test._ok$US(this._name);
	} else {
		this._test._nok$USUSXX(this._name, op, got, expected);
	}
};

/**
 * class TestCase$CFailure extends Error
 * @constructor
 */
function TestCase$CFailure() {
}

TestCase$CFailure.prototype = new Error;
/**
 * @constructor
 * @param {!string} reason
 */
function TestCase$CFailure$S(reason) {
	Error.call(this);
	this.message = reason;
};

TestCase$CFailure$S.prototype = new TestCase$CFailure;

$__jsx_lazy_init(Timer, "_requestAnimationFrame", function () {
	return Timer$_getRequestAnimationFrameImpl$B(true);
});
$__jsx_lazy_init(Timer, "_cancelAnimationFrame", function () {
	return Timer$_getCancelAnimationFrameImpl$B(true);
});
js.global = (function () { return this; })();
var $__jsx_classMap = {
	"system:example/import.jsx": {
		_Main: _Main,
		_Main$: _Main$,
		_Test: _Test,
		_Test$: _Test$
	},
	"system:example/fib.jsx": {
		Fib: Fib,
		Fib$: Fib$,
		_Main: _Main$0,
		_Main$: _Main$0$
	},
	"system:lib/common/test-case.jsx": {
		TestCase: TestCase,
		TestCase$: TestCase$,
		AsyncContext: AsyncContext,
		AsyncContext$LTestCase$SF$LAsyncContext$V$I: AsyncContext$LTestCase$SF$LAsyncContext$V$I,
		Matcher: TestCase$CMatcher,
		Matcher$LTestCase$X: TestCase$CMatcher$LTestCase$X,
		Matcher$LTestCase$XS: TestCase$CMatcher$LTestCase$XS,
		Failure: TestCase$CFailure,
		Failure$S: TestCase$CFailure$S
	},
	"system:lib/js/timer.jsx": {
		Timer: Timer,
		Timer$: Timer$,
		TimerHandle: TimerHandle,
		TimerHandle$: TimerHandle$
	},
	"system:lib/js/js.jsx": {
		js: js,
		js$: js$
	}
};


/**
 * launches _Main.main(:string[]):void invoked by jsx --run|--executable
 */
JSX.runMain = function (sourceFile, args) {
	var module = JSX.require(sourceFile);
	if (! module) {
		throw new ReferenceError("entry point module not found in " + sourceFile);
	}
	if (! module._Main) {
		throw new ReferenceError("entry point _Main not found in " + sourceFile);
	}
	if (! module._Main.main$AS) {
		throw new ReferenceError("entry point _Main.main(:string[]):void not found in " + sourceFile);
	}
	module._Main.main$AS(args);
};

/**
 * launches _Test#test*():void invoked by jsx --test
 */
JSX.runTests = function (sourceFile, tests) {
	var module = JSX.require(sourceFile);
	var testClass = module._Test$;

	if (!testClass) return; // skip if there's no test class

	if(tests.length === 0) {
		var p = testClass.prototype;
		for (var m in p) {
			if (p[m] instanceof Function
				&& /^test.*[$]$/.test(m)) {
				tests.push(m);
			}
		}
	}
	else { // set as process arguments
		tests = tests.map(function (name) {
			return name + "$"; // mangle for function test*():void
		});
	}

	var testCase = new testClass();

	if (testCase.beforeClass$AS != null)
		testCase.beforeClass$AS(tests);

	for (var i = 0; i < tests.length; ++i) {
		(function (method) {
			if (method in testCase) {
				testCase.run$SF$V$(method, function() { testCase[method](); });
			}
			else {
				throw new ReferenceError("No such test method: " + method);
			}
		}(tests[i]));
	}

	if (testCase.afterClass$ != null)
		testCase.afterClass$();
};
/**
 * call a function on load/DOMContentLoaded
 */
function $__jsx_onload (event) {
	window.removeEventListener("load", $__jsx_onload);
	document.removeEventListener("DOMContentLoaded", $__jsx_onload);
	JSX.runMain("system:example/import.jsx", [])
}

window.addEventListener("load", $__jsx_onload);
document.addEventListener("DOMContentLoaded", $__jsx_onload);

})(JSX);

//@ sourceMappingURL=import.jsx.js.mapping
