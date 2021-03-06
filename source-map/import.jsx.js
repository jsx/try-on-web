// generatedy by JSX compiler 0.9.89 (2014-06-08 12:56:00 +0900; 422392d7c9d17e919d31f446e1626c0aba14858e)
var JSX = {};
(function (JSX) {
/**
 * extends the class
 */
function $__jsx_extend(derivations, base) {
	var ctor = function () {};
	ctor.prototype = base.prototype;
	var proto = new ctor();
	for (var i in derivations) {
		derivations[i].prototype = proto;
	}
}

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

var $__jsx_imul = Math.imul;
if (typeof $__jsx_imul === "undefined") {
	$__jsx_imul = function (a, b) {
		var ah  = (a >>> 16) & 0xffff;
		var al = a & 0xffff;
		var bh  = (b >>> 16) & 0xffff;
		var bl = b & 0xffff;
		return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
	};
}

/**
 * fused int-ops with side-effects
 */
function $__jsx_ipadd(o, p, r) {
	return o[p] = (o[p] + r) | 0;
}
function $__jsx_ipsub(o, p, r) {
	return o[p] = (o[p] - r) | 0;
}
function $__jsx_ipmul(o, p, r) {
	return o[p] = $__jsx_imul(o[p], r);
}
function $__jsx_ipdiv(o, p, r) {
	return o[p] = (o[p] / r) | 0;
}
function $__jsx_ipmod(o, p, r) {
	return o[p] = (o[p] % r) | 0;
}
function $__jsx_ippostinc(o, p) {
	var v = o[p];
	o[p] = (v + 1) | 0;
	return v;
}
function $__jsx_ippostdec(o, p) {
	var v = o[p];
	o[p] = (v - 1) | 0;
	return v;
}

/**
 * non-inlined version of Array#each
 */
function $__jsx_forEach(o, f) {
	var l = o.length;
	for (var i = 0; i < l; ++i)
		f(o[i]);
}

/*
 * global functions, renamed to avoid conflict with local variable names
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
function $__jsx_isNaN(n) { return n !== n; }
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
var GeneratorFunction$0 = 
(function () {
  try {
    return Function('import {GeneratorFunction} from "std:iteration"; return GeneratorFunction')();
  } catch (e) {
    return function GeneratorFunction () {};
  }
})();
var __jsx_generator_object$0 = 
(function () {
  function __jsx_generator_object() {
  	this.__next = 0;
  	this.__loop = null;
	this.__seed = null;
  	this.__value = undefined;
  	this.__status = 0;	// SUSPENDED: 0, ACTIVE: 1, DEAD: 2
  }

  __jsx_generator_object.prototype.next = function (seed) {
  	switch (this.__status) {
  	case 0:
  		this.__status = 1;
  		this.__seed = seed;

  		// go next!
  		this.__loop(this.__next);

  		var done = false;
  		if (this.__next != -1) {
  			this.__status = 0;
  		} else {
  			this.__status = 2;
  			done = true;
  		}
  		return { value: this.__value, done: done };
  	case 1:
  		throw new Error("Generator is already running");
  	case 2:
  		throw new Error("Generator is already finished");
  	default:
  		throw new Error("Unexpected generator internal state");
  	}
  };

  return __jsx_generator_object;
}());
function _Main() {
};

$__jsx_extend([_Main], Object);
function _Main$main$AS(args) {
	console.log("fib(10)=" + Fib$fib1$I(10).toString());
};

_Main.main = _Main$main$AS;
_Main.main$AS = _Main$main$AS;

function Fib() {
};

$__jsx_extend([Fib], Object);
function Fib$fib1$I(n) {
	if (n <= 2) {
		return 1;
	} else {
		return ((Fib$fib1$I((n - 1 | 0)) + Fib$fib1$I((n - 2 | 0))) | 0);
	}
};

Fib.fib1$I = Fib$fib1$I;

function Fib$fib2$N(n) {
	return (n <= 2 ? 1 : Fib$fib2$N(n - 1) + Fib$fib2$N(n - 2));
};

Fib.fib2$N = Fib$fib2$N;

function Fib$fib3$I(n) {
	var value;
	var prevValue;
	var i;
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

Fib.fib3$I = Fib$fib3$I;

function Fib$fib4$I(n) {
	switch (n) {
	case 1:
	case 2:
		return 1;
	default:
		return ((Fib$fib4$I((n - 1 | 0)) + Fib$fib4$I((n - 2 | 0))) | 0);
	}
};

Fib.fib4$I = Fib$fib4$I;

function Fib$fib5$III(n, a, b) {
	switch (n) {
	case 1:
	case 2:
		return a;
	default:
		return Fib$fib5$III((n - 1 | 0), ((a + b) | 0), a);
	}
};

Fib.fib5$III = Fib$fib5$III;

function Fib$fib5$II(n, a) {
	return Fib$fib5$III(n, a, 1);
};

Fib.fib5$II = Fib$fib5$II;

function Fib$fib5$I(n) {
	return Fib$fib5$III(n, 1, 1);
};

Fib.fib5$I = Fib$fib5$I;

function _Main$0() {
};

$__jsx_extend([_Main$0], Object);
function _Main$0$main$AS(args) {
	var n;
	n = (args.length > 0 ? +(function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/example/fib.jsx:51:38] null access\n        var n = args.length > 0 ? args[0] as number : 10;\n                                      ^\n");
		}
		return v;
	}(args[0])) : 10);
	console.log("fib1(" + (n + "") + ") = " + (Fib$fib1$I((n | 0)) + ""));
	console.log("fib2(" + (n + "") + ") = " + (Fib$fib2$N(n) + ""));
	console.log("fib3(" + (n + "") + ") = " + (Fib$fib3$I((n | 0)) + ""));
	console.log("fib4(" + (n + "") + ") = " + (Fib$fib4$I((n | 0)) + ""));
	console.log("fib5(" + (n + "") + ") = " + (Fib$fib5$I((n | 0)) + ""));
};

_Main$0.main = _Main$0$main$AS;
_Main$0.main$AS = _Main$0$main$AS;

function TestCase() {
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

$__jsx_extend([TestCase], Object);
TestCase.prototype.setUp$ = function () {
};


TestCase.prototype.tearDown$ = function () {
};


TestCase.prototype.setUp$LAsyncContext$ = function (async) {
};


TestCase.prototype.tearDown$LAsyncContext$ = function (async) {
};


TestCase.prototype.beforeClass$AS = function (tests) {
	this._tests = tests;
	this._say$S("1.." + (this._tests.length + ""));
};

TestCase.prototype.beforeClass = TestCase.prototype.beforeClass$AS;

TestCase.prototype.afterClass$ = function () {
	var next;
	if (this._tasks.length === 0) {
		this.finish$();
	} else {
		next = this._tasks.shift();
		next();
	}
};

TestCase.prototype.afterClass = TestCase.prototype.afterClass$;

TestCase.prototype.run$SF$V$ = function (name, testFunction) {
	var numAsyncTasks;
	var msg;
	name = name.replace(/[$].*$/, "");
	numAsyncTasks = this._tasks.length;
	this._currentName = name;
	this.setUp$();
	try {
		testFunction();
	} catch ($__jsx_catch_0) {
		if ($__jsx_catch_0 instanceof Error) {
			if ($__jsx_catch_0 instanceof TestCase$x2EFailure) {
				msg = ($__jsx_catch_0.message ? " - " + $__jsx_catch_0.message : "");
			} else {
				msg = " - failed with exception";
				if ($__jsx_catch_0.message) {
					msg += ": " + $__jsx_catch_0.message;
				}
			}
			this._say$S("\t" + "not ok " + (++this._count + "") + msg);
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

TestCase.prototype.run = TestCase.prototype.run$SF$V$;

TestCase.prototype.after$S = function (name) {
	this.tearDown$();
	++this._totalCount;
	this._say$S("\t" + "1.." + (this._count + ""));
	if (this._count === this._pass) {
		++this._totalPass;
		this._say$S("ok " + (this._totalCount + "") + " - " + name);
	} else {
		this._say$S("not ok " + (this._totalCount + "") + " - " + name);
	}
	this._count = 0;
	this._pass = 0;
};


TestCase.prototype.finish$ = function () {
	var failed;
	if (this._totalCount !== this._totalPass) {
		failed = this._totalCount - this._totalPass;
		this.diag$S("tests failed " + (failed + "") + " of " + (this._totalCount + ""));
	}
};


TestCase.prototype.async$F$LAsyncContext$V$F$LAsyncContext$V$I = function (testBody, timeoutHandler, timeoutMS) {
	var $this = this;
	var async;
	async = new AsyncContext(this, (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:194:47] null access\n        var async = new AsyncContext(this, this._currentName, timeoutHandler, timeoutMS);\n                                               ^\n");
		}
		return v;
	}(this._currentName)), timeoutHandler, timeoutMS);
	this._tasks.push((function () {
		$this.setUp$LAsyncContext$(async);
		testBody(async);
	}));
};


TestCase.prototype.async$F$LAsyncContext$V$I = function (testBody, timeoutMS) {
	var $this = this;
	this.async$F$LAsyncContext$V$F$LAsyncContext$V$I(testBody, (function (async) {
		$this.fail$S("TIMEOUT: " + async.name$());
		async.done$();
	}), timeoutMS);
};


TestCase.prototype._ok$US = function (name) {
	var s;
	++this._pass;
	s = (name != null ? " - " + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:231:39] null access\n        var s = name != null ? \" - \" + name :  \"\";\n                                       ^^^^\n");
		}
		return v;
	}(name)) : "");
	this._say$S("\t" + "ok " + (this._count + "") + s);
};


TestCase.prototype._nok$US = function (name) {
	this._nok$USUSXX(name, null, null, null);
};


TestCase.prototype._nok$USUSXX = function (name, op, got, expected) {
	var s;
	s = (name != null ? " - " + (function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:246:39] null access\n        var s = name != null ? \" - \" + name :  \"\";\n                                       ^^^^\n");
		}
		return v;
	}(name)) : "");
	this._say$S("\t" + "not ok " + (this._count + "") + s);
	if (op != null) {
		this.diag$S("comparing with " + (function (v) {
			if (! (v != null)) {
				debugger;
				throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:250:42] null access\n            this.diag(\"comparing with \" + op + s.replace(\" - \", \" for \"));\n                                          ^^\n");
			}
			return v;
		}(op)) + s.replace(" - ", " for "));
		this._dump$SX("got     :", got);
		this._dump$SX("expected:", expected);
	}
	throw new TestCase$x2EFailure((function (v) {
		if (! (v != null)) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:254:48] null access\n        throw new TestCase.Failure(name != null ? name : \"\");\n                                                ^\n");
		}
		return v;
	}(name != null ? name : "")));
};


TestCase.prototype.pass$S = function (reason) {
	++this._count;
	++this._pass;
	this._say$S("\t" + "ok " + (this._count + "") + " - " + reason);
};


TestCase.prototype.fail$S = function (reason) {
	++this._count;
	throw new TestCase$x2EFailure(reason);
};


TestCase.prototype._dump$SX = function (tag, value) {
	if (typeof value === "object") {
		this.diag$S(tag);
		console.dir(value);
	} else {
		this.diag$S(tag + " " + (value + ""));
	}
};


TestCase.prototype._say$S = function (message) {
	console.info(message);
};


TestCase.prototype.equals$XX = function (a, b) {
	return this._equals$XXI(a, b, 0);
};


TestCase.prototype._equals$XXI = function (a, b, recursion) {
	var aryA;
	var aryB;
	var i;
	var mapA;
	var mapB;
	var mapAkeys;
	var mapBkeys;
	var key;
	var dateA;
	var dateB;
	if ((recursion = (recursion + 1) | 0) > 1000) {
		throw new RangeError("Deep recursion in equals()");
	}
	if (a == b || a == null && b == null) {
		return true;
	}
	if (a instanceof Array) {
		if (! (b instanceof Array)) {
			return false;
		}
		aryA = (function ($v) {
			if (! ($v == null || $v instanceof Array)) {
				debugger;
				throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:306:25] detected invalid cast, value is not an Array or null\n            var aryA = a as Array.<variant>;\n                         ^^\n");
			}
			return $v;
		}(a));
		aryB = (function ($v) {
			if (! ($v == null || $v instanceof Array)) {
				debugger;
				throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:307:25] detected invalid cast, value is not an Array or null\n            var aryB = b as Array.<variant>;\n                         ^^\n");
			}
			return $v;
		}(b));
		if (aryA.length !== aryB.length) {
			return false;
		}
		for (i = 0; i < aryA.length; ++i) {
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
		mapA = (function ($v) {
			if (! ($v == null || typeof $v === "object" || typeof $v === "function")) {
				debugger;
				throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:324:25] detected invalid cast, value is not a Map or null\n            var mapA = a as Map.<variant>;\n                         ^^\n");
			}
			return $v;
		}(a));
		mapB = (function ($v) {
			if (! ($v == null || typeof $v === "object" || typeof $v === "function")) {
				debugger;
				throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:325:25] detected invalid cast, value is not a Map or null\n            var mapB = b as Map.<variant>;\n                         ^^\n");
			}
			return $v;
		}(b));
		mapAkeys = Object.keys(mapA).sort();
		mapBkeys = Object.keys(mapB).sort();
		if (mapAkeys.length !== mapBkeys.length) {
			return false;
		}
		for (i = 0; i < mapAkeys.length; ++i) {
			key = mapAkeys[i];
			if (key !== mapBkeys[i]) {
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
		dateA = (function ($v) {
			if (! ($v == null || $v instanceof Date)) {
				debugger;
				throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:351:26] detected invalid cast, value is not an instance of the designated type or null\n            var dateA = a as Date;\n                          ^^\n");
			}
			return $v;
		}(a));
		dateB = (function ($v) {
			if (! ($v == null || $v instanceof Date)) {
				debugger;
				throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:352:26] detected invalid cast, value is not an instance of the designated type or null\n            var dateB = b as Date;\n                          ^^\n");
			}
			return $v;
		}(b));
		if (dateA && dateB) {
			return dateA.getTime() === dateB.getTime();
		}
	}
	return false;
};


TestCase.prototype.difflet$AXAX = function (a, b) {
	var s;
	var i;
	var l;
	var ai;
	var bi;
	var aIsOver;
	var aIsLast;
	if (! (a != null)) {
		debugger;
		throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:363:17] assertion failure\n        assert a != null;\n                 ^^\n");
	}
	if (! (b != null)) {
		debugger;
		throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/common/test-case.jsx:364:17] assertion failure\n        assert b != null;\n                 ^^\n");
	}
	s = "[\n";
	for ((i = 0, l = Math.max(a.length, b.length)); i < l; ++i) {
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


TestCase.prototype.diag$S = function (message) {
	this._say$S(message.replace(/^/mg, "# "));
};


TestCase.prototype.note$S = function (message) {
	if (this.verbose) {
		this._say$S(message.replace(/^/mg, "# "));
	}
};


TestCase.prototype.toString = function () {
	if (this._tests != null) {
		return "TestCase[" + this._tests.join(", ") + "]";
	} else {
		return "TestCase";
	}
};


TestCase.prototype.expect$I = function (value) {
	++this._count;
	return new TestCase$x2EMatcher$0(this, value);
};


TestCase.prototype.expect$N = function (value) {
	++this._count;
	return new TestCase$x2EMatcher$0(this, value);
};


function _Test() {
	TestCase.call(this);
};

$__jsx_extend([_Test], TestCase);
_Test.prototype.testFib1$ = function () {
	this.expect$I(Fib$fib1$I(10)).toBe$X(55);
};

_Test.prototype.testFib1 = _Test.prototype.testFib1$;

_Test.prototype.testFib2$ = function () {
	this.expect$N(Fib$fib2$N(10)).toBe$X(55);
};

_Test.prototype.testFib2 = _Test.prototype.testFib2$;

_Test.prototype.testFib3$ = function () {
	this.expect$I(Fib$fib3$I(10)).toBe$X(55);
};

_Test.prototype.testFib3 = _Test.prototype.testFib3$;

_Test.prototype.testFib4$ = function () {
	this.expect$I(Fib$fib4$I(10)).toBe$X(55);
};

_Test.prototype.testFib4 = _Test.prototype.testFib4$;

function AsyncContext(test, name, timeoutHandler, timeoutMS) {
	var $this = this;
	var id;
	this._timerId = null;
	this._test = test;
	this._name = name;
	id = Timer$setTimeout$F$V$N((function () {
		timeoutHandler($this);
	}), timeoutMS);
	this._timerId = id;
};

$__jsx_extend([AsyncContext], Object);
AsyncContext.prototype.name$ = function () {
	return this._name;
};


AsyncContext.prototype.done$ = function () {
	var next;
	Timer$clearTimeout$LTimerHandle$(this._timerId);
	this._test.tearDown$LAsyncContext$(this);
	this._test.after$S(this._name);
	if (this._test._tasks.length !== 0) {
		next = this._test._tasks.shift();
		next();
	} else {
		this._test.finish$();
	}
};


function Timer() {
};

$__jsx_extend([Timer], Object);
function Timer$setTimeout$F$V$N(callback, intervalMS) {
	return (function ($v) {
		if (! ($v == null || typeof $v === "function")) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:34:40] detected invalid cast, value is not a function or null\n        return (js.global[\"setTimeout\"] as __noconvert__ function(:function():void,:number) : TimerHandle)(callback, intervalMS);\n                                        ^^\n");
		}
		return $v;
	}(js$0.global.setTimeout))(callback, intervalMS);
};

Timer.setTimeout$F$V$N = Timer$setTimeout$F$V$N;

function Timer$clearTimeout$LTimerHandle$(timer) {
	(function ($v) {
		if (! ($v == null || typeof $v === "function")) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:38:35] detected invalid cast, value is not a function or null\n        (js.global[\"clearTimeout\"] as __noconvert__ function(:TimerHandle) : void)(timer);\n                                   ^^\n");
		}
		return $v;
	}(js$0.global.clearTimeout))(timer);
};

Timer.clearTimeout$LTimerHandle$ = Timer$clearTimeout$LTimerHandle$;

function Timer$setInterval$F$V$N(callback, intervalMS) {
	return (function ($v) {
		if (! ($v == null || typeof $v === "function")) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:42:41] detected invalid cast, value is not a function or null\n        return (js.global[\"setInterval\"] as __noconvert__ function(:function():void,:number) : TimerHandle)(callback, intervalMS);\n                                         ^^\n");
		}
		return $v;
	}(js$0.global.setInterval))(callback, intervalMS);
};

Timer.setInterval$F$V$N = Timer$setInterval$F$V$N;

function Timer$clearInterval$LTimerHandle$(timer) {
	(function ($v) {
		if (! ($v == null || typeof $v === "function")) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:46:36] detected invalid cast, value is not a function or null\n        (js.global[\"clearInterval\"] as __noconvert__ function(:TimerHandle) : void)(timer);\n                                    ^^\n");
		}
		return $v;
	}(js$0.global.clearInterval))(timer);
};

Timer.clearInterval$LTimerHandle$ = Timer$clearInterval$LTimerHandle$;

function Timer$requestAnimationFrame$F$NV$(callback) {
	return Timer._requestAnimationFrame(callback);
};

Timer.requestAnimationFrame$F$NV$ = Timer$requestAnimationFrame$F$NV$;

function Timer$cancelAnimationFrame$LTimerHandle$(timer) {
	Timer._cancelAnimationFrame(timer);
};

Timer.cancelAnimationFrame$LTimerHandle$ = Timer$cancelAnimationFrame$LTimerHandle$;

function Timer$useNativeRAF$B(enable) {
	Timer._requestAnimationFrame = Timer$_getRequestAnimationFrameImpl$B(enable);
	Timer._cancelAnimationFrame = Timer$_getCancelAnimationFrameImpl$B(enable);
};

Timer.useNativeRAF$B = Timer$useNativeRAF$B;

function Timer$_getRequestAnimationFrameImpl$B(useNativeImpl) {
	var prefixes;
	var i;
	var name;
	var lastTime;
	if (useNativeImpl) {
		prefixes = [ "r", "webkitR", "mozR", "oR", "msR" ];
		for (i = 0; i < prefixes.length; ++i) {
			name = (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:72:35] null access\n                var name = prefixes[i] + \"equestAnimationFrame\";\n                                   ^\n");
				}
				return v;
			}(prefixes[i])) + "equestAnimationFrame";
			if (js$0.global[name] instanceof Function) {
				return (function (callback) {
					return (function ($v) {
						if (! ($v == null || typeof $v === "function")) {
							debugger;
							throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:75:48] detected invalid cast, value is not a function or null\n                        return (js.global[name] as __noconvert__\n                                                ^^\n");
						}
						return $v;
					}(js$0.global[name]))(callback);
				});
			}
		}
	}
	lastTime = 0;
	return (function (callback) {
		var now;
		var timeToCall;
		now = Date.now();
		timeToCall = Math.max(0, 16 - (now - lastTime));
		lastTime = now + timeToCall;
		return Timer$setTimeout$F$V$N((function () {
			callback(now + timeToCall);
		}), timeToCall);
	});
};

Timer._getRequestAnimationFrameImpl$B = Timer$_getRequestAnimationFrameImpl$B;

function Timer$_getCancelAnimationFrameImpl$B(useNativeImpl) {
	var prefixes;
	var i;
	var name;
	if (useNativeImpl) {
		prefixes = [ "c", "webkitC", "mozC", "oC", "msC" ];
		for (i = 0; i < prefixes.length; ++i) {
			name = (function (v) {
				if (! (v != null)) {
					debugger;
					throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:100:35] null access\n                var name = prefixes[i] + \"ancelAnimationFrame\";\n                                   ^\n");
				}
				return v;
			}(prefixes[i])) + "ancelAnimationFrame";
			if (js$0.global[name] instanceof Function) {
				return (function (timer) {
					(function ($v) {
						if (! ($v == null || typeof $v === "function")) {
							debugger;
							throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:103:41] detected invalid cast, value is not a function or null\n                        (js.global[name] as __noconvert__\n                                         ^^\n");
						}
						return $v;
					}(js$0.global[name]))(timer);
				});
			}
		}
	}
	return Timer$clearTimeout$LTimerHandle$;
};

Timer._getCancelAnimationFrameImpl$B = Timer$_getCancelAnimationFrameImpl$B;

function TimerHandle() {}
$__jsx_extend([TimerHandle], Object);
var js$0 = (function () {
	var global = Function("return this")();
	return {
		global: global,
		eval: global.eval,
		invoke: function(invocant, methodName, args) {
			return invocant[methodName].apply(invocant, args);
		},
		newFunction: Function
	};
}());
function TestCase$x2EMatcher(test, got, name) {
	this._test = test;
	this._got = got;
	this._name = name;
};

function TestCase$x2EMatcher$0(test, got) {
	TestCase$x2EMatcher.call(this, test, got, null);
};

$__jsx_extend([TestCase$x2EMatcher, TestCase$x2EMatcher$0], Object);
TestCase$x2EMatcher.prototype.toBe$X = function (x) {
	this._match$BXXS(this._got == x, this._got, x, "==");
};


TestCase$x2EMatcher.prototype.notToBe$X = function (x) {
	this._match$BXXS(this._got != x, this._got, x, "!=");
};


TestCase$x2EMatcher.prototype.toBeLT$N = function (x) {
	this._match$BXXS(+this._got < x, this._got, x, "<");
};


TestCase$x2EMatcher.prototype.toBeLE$N = function (x) {
	this._match$BXXS(+this._got <= x, this._got, x, "<=");
};


TestCase$x2EMatcher.prototype.toBeGT$N = function (x) {
	this._match$BXXS(+this._got > x, this._got, x, ">");
};


TestCase$x2EMatcher.prototype.toBeGE$N = function (x) {
	this._match$BXXS(+this._got >= x, this._got, x, ">=");
};


TestCase$x2EMatcher.prototype.toMatch$LRegExp$ = function (x) {
	this._match$BXXS(x.test(this._got + ""), this._got, x, "RegExp.test()");
};


TestCase$x2EMatcher.prototype.notToMatch$LRegExp$ = function (x) {
	this._match$BXXS(! x.test(this._got + ""), this._got, x, "! RegExp.test()");
};


TestCase$x2EMatcher.prototype._match$BXXS = function (value, got, expected, op) {
	if (value) {
		this._test._ok$US(this._name);
	} else {
		this._test._nok$USUSXX(this._name, op, got, expected);
	}
};


function TestCase$x2EFailure(reason) {
	Error.call(this, reason);
	this.message = reason;
	this.name = "TestCase.Failure";
	if (Error.captureStackTrace) Error.captureStackTrace(this, TestCase$x2EFailure);
};

$__jsx_extend([TestCase$x2EFailure], Error);
$__jsx_lazy_init(Timer, "_requestAnimationFrame", function () {
	return Timer$_getRequestAnimationFrameImpl$B(true);
});
$__jsx_lazy_init(Timer, "_cancelAnimationFrame", function () {
	return Timer$_getCancelAnimationFrameImpl$B(true);
});

var $__jsx_classMap = {
	"system:example/import.jsx": {
		_Main: _Main,
		_Main$: _Main,
		_Test: _Test,
		_Test$: _Test
	},
	"system:example/fib.jsx": {
		Fib: Fib,
		Fib$: Fib,
		_Main: _Main$0,
		_Main$: _Main$0
	},
	"system:lib/common/test-case.jsx": {
		TestCase: TestCase,
		TestCase$: TestCase,
		AsyncContext: AsyncContext,
		AsyncContext$LTestCase$SF$LAsyncContext$V$I: AsyncContext,
		"TestCase.Matcher": TestCase$x2EMatcher,
		"TestCase.Matcher$LTestCase$XUS": TestCase$x2EMatcher,
		"TestCase.Matcher$LTestCase$X": TestCase$x2EMatcher$0,
		"TestCase.Failure": TestCase$x2EFailure,
		"TestCase.Failure$S": TestCase$x2EFailure
	},
	"system:lib/js/timer.jsx": {
		Timer: Timer,
		Timer$: Timer,
		TimerHandle: TimerHandle
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
	if (! module._Main.main) {
		throw new ReferenceError("entry point _Main.main(:string[]):void not found in " + sourceFile);
	}
	module._Main.main(args);
};

/**
 * launches _Test#test*():void invoked by jsx --test
 */
JSX.runTests = function (sourceFile, tests) {
	var module = JSX.require(sourceFile);
	if (! module) return;

	var testClass = module._Test;

	if (!testClass) return; // skip if there's no test class

	if(tests.length === 0) {
		var p = testClass.prototype;
		for (var m in p) {
			if (p[m] instanceof Function && m.match(/^test\w*$/)) {
				tests.push(m);
			}
		}
	}

	var testCase = new testClass();

	if (testCase.beforeClass != null)
		testCase.beforeClass(tests);

	for (var i = 0; i < tests.length; ++i) {
		(function (method) {
			if (method in testCase) {
				testCase.run(method, function() { testCase[method](); });
			}
			else {
				throw new ReferenceError("No such test method: " + method);
			}
		}(tests[i]));
	}

	if (testCase.afterClass != null)
		testCase.afterClass();
};
/**
 * call a function on load/DOMContentLoaded
 */
function $__jsx_onload (event) {
	window.removeEventListener("load", $__jsx_onload);
	document.removeEventListener("DOMContentLoaded", $__jsx_onload);
	JSX.runMain("system:example/import.jsx", []);
}

window.addEventListener("load", $__jsx_onload);
document.addEventListener("DOMContentLoaded", $__jsx_onload);

})(JSX);

//# sourceMappingURL=import.jsx.js.mapping
