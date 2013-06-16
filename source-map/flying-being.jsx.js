// generatedy by JSX compiler 0.9.40 (2013-06-15 20:20:23 -0700; 9a4e853c9b1397f8255469af1d0a0b150c0d97b7)
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
function g_StopIteration() {
	Error.call(this);
};

$__jsx_extend([g_StopIteration], Error);
function Flyable() {
};

$__jsx_extend([Flyable], Object);
Flyable.prototype.$__jsx_implements_Flyable = true;

function Animal() {
};

$__jsx_extend([Animal], Object);
Animal.prototype.eat$ = function () {
	console.log("An animal is eating!");
};


function Bat() {
	Animal.call(this);
	Flyable.call(this);
};

$__jsx_extend([Bat], Animal);
$__jsx_merge_interface(Bat, Flyable);

Bat.prototype.fly$ = function () {
	console.log("A bat is flying!");
};


function Insect() {
};

$__jsx_extend([Insect], Object);
function Bee() {
	Insect.call(this);
	Flyable.call(this);
};

$__jsx_extend([Bee], Insect);
$__jsx_merge_interface(Bee, Flyable);

Bee.prototype.fly$ = function () {
	console.log("A bee is flying!");
};


function _Main() {
};

$__jsx_extend([_Main], Object);
function _Main$takeAnimal$LAnimal$(animal) {
	animal.eat$();
};

_Main.takeAnimal$LAnimal$ = _Main$takeAnimal$LAnimal$;

function _Main$takeFlyable$LFlyable$(flyingBeing) {
	flyingBeing.fly$();
};

_Main.takeFlyable$LFlyable$ = _Main$takeFlyable$LFlyable$;

function _Main$main$AS(args) {
	var bat;
	var bee;
	bat = new Bat();
	_Main$takeAnimal$LAnimal$(bat);
	_Main$takeFlyable$LFlyable$(bat);
	bee = new Bee();
	_Main$takeFlyable$LFlyable$(bee);
};

_Main.main = _Main$main$AS;
_Main.main$AS = _Main$main$AS;


var $__jsx_classMap = {
	"system:lib/built-in.jsx": {
		g_StopIteration: g_StopIteration,
		g_StopIteration$: g_StopIteration
	},
	"system:example/flying-being.jsx": {
		Flyable: Flyable,
		Flyable$: Flyable,
		Animal: Animal,
		Animal$: Animal,
		Bat: Bat,
		Bat$: Bat,
		Insect: Insect,
		Insect$: Insect,
		Bee: Bee,
		Bee$: Bee,
		_Main: _Main,
		_Main$: _Main
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
	var testClass = module._Test;

	if (!testClass) return; // skip if there's no test class

	if(tests.length === 0) {
		var p = testClass.prototype;
		for (var m in p) {
			if (p[m] instanceof Function && m.match(/^test\w+$/)) {
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
	JSX.runMain("system:example/flying-being.jsx", [])
}

window.addEventListener("load", $__jsx_onload);
document.addEventListener("DOMContentLoaded", $__jsx_onload);

})(JSX);

//# sourceMappingURL=flying-being.jsx.js.mapping
