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
function Async() {
};

$__jsx_extend([Async], Object);
function Async$sleep$N(durationMS) {
	return (function (g) {
		Timer$setTimeout$F$V$N((function () {
			Async$go$X(g);
		}), durationMS);
	});
};

Async.sleep$N = Async$sleep$N;

function Async$run$F$LGenerator$x2E$x3Cvoid$x2Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E$$(coro) {
	Async$go$X(coro());
};

Async.run$F$LGenerator$x2E$x3Cvoid$x2Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E$$ = Async$run$F$LGenerator$x2E$x3Cvoid$x2Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E$$;

function Async$go$X(v) {
	var g;
	var data;
	g = v;
	data = g.next();
	if (data.done) {
		return;
	} else {
		data.value(g);
	}
};

Async.go$X = Async$go$X;

function _Main() {
};

$__jsx_extend([_Main], Object);
function _Main$main$AS(args) {
	Async$run$F$LGenerator$x2E$x3Cvoid$x2Cfunction$x20$x28$x3A$x20variant$x29$x20$x3A$x20void$x3E$$((function * () {
		console.log("H");
		yield Async$sleep$N(100);
		console.log("e");
		yield Async$sleep$N(100);
		console.log("l");
		yield Async$sleep$N(100);
		console.log("l");
		yield Async$sleep$N(100);
		console.log("o");
	}));
};

_Main.main = _Main$main$AS;
_Main.main$AS = _Main$main$AS;

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
$__jsx_lazy_init(Timer, "_requestAnimationFrame", function () {
	return Timer$_getRequestAnimationFrameImpl$B(true);
});
$__jsx_lazy_init(Timer, "_cancelAnimationFrame", function () {
	return Timer$_getCancelAnimationFrameImpl$B(true);
});

var $__jsx_classMap = {
	"system:example/yield.jsx": {
		Async: Async,
		Async$: Async,
		_Main: _Main,
		_Main$: _Main
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
	JSX.runMain("system:example/yield.jsx", []);
}

window.addEventListener("load", $__jsx_onload);
document.addEventListener("DOMContentLoaded", $__jsx_onload);

})(JSX);

//# sourceMappingURL=yield.jsx.js.mapping
