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

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
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
	id = null;
	id = Timer$setInterval$F$V$N((function () {
		console.log(++ i);
		if (i === 4) {
			Timer$clearInterval$LTimerHandle$(id);
		}
	}), 500);
};

var _Main$main$AS = _Main.main$AS;

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
 * @param {!number} intervalMS
 * @return {TimerHandle}
 */
Timer.setTimeout$F$V$N = function (callback, intervalMS) {
	return (function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:34] detected invalid cast, value is not a function or null");
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
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:38] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.clearTimeout))(timer);
};

var Timer$clearTimeout$LTimerHandle$ = Timer.clearTimeout$LTimerHandle$;

/**
 * @param {!number} intervalMS
 * @return {TimerHandle}
 */
Timer.setInterval$F$V$N = function (callback, intervalMS) {
	return (function (v) {
		if (! (v == null || typeof v === "function")) {
			debugger;
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:42] detected invalid cast, value is not a function or null");
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
			throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:46] detected invalid cast, value is not a function or null");
		}
		return v;
	}(js.global.clearInterval))(timer);
};

var Timer$clearInterval$LTimerHandle$ = Timer.clearInterval$LTimerHandle$;

/**
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
						throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:72] detected invalid cast, value is not a function or null");
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
							throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:78] detected invalid cast, value is not a function or null");
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
								throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:84] detected invalid cast, value is not a function or null");
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
									throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:90] detected invalid cast, value is not a function or null");
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
										throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:96] detected invalid cast, value is not a function or null");
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
 */
Timer._getCancelAnimationFrameImpl$B = function (useNativeImpl) {
	if (useNativeImpl) {
		if (js.global.cancelAnimationFrame) {
			return (function (timer) {
				(function (v) {
					if (! (v == null || typeof v === "function")) {
						debugger;
						throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:119] detected invalid cast, value is not a function or null");
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
							throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:125] detected invalid cast, value is not a function or null");
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
								throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:131] detected invalid cast, value is not a function or null");
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
									throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:137] detected invalid cast, value is not a function or null");
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
										throw new Error("[/Users/gfx/repo/try-on-web/JSX/lib/js/timer.jsx:143] detected invalid cast, value is not a function or null");
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

TimerHandle.prototype = new Object;
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

js.prototype = new Object;
/**
 * @constructor
 */
function js$() {
};

js$.prototype = new js;

$__jsx_lazy_init(Timer, "_requestAnimationFrame", function () {
	return Timer$_getRequestAnimationFrameImpl$B(true);
});
$__jsx_lazy_init(Timer, "_cancelAnimationFrame", function () {
	return Timer$_getCancelAnimationFrameImpl$B(true);
});
js.global = (function () { return this; })();

var $__jsx_classMap = {
	"timers.jsx": {
		_Main: _Main,
		_Main$: _Main$
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

	if (! module._Main) {
		throw new Error("entry point _Main not found in " + sourceFile);
	}
	if (! module._Main.main$AS) {
		throw new Error("entry point _Main.main(:string[]):void not found in " + sourceFile);
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
	JSX.runMain("timers.jsx", [])
}

window.addEventListener("load", $__jsx_onload);
document.addEventListener("DOMContentLoaded", $__jsx_onload);

})();

//@ sourceMappingURL=timers.jsx.js.mapping
