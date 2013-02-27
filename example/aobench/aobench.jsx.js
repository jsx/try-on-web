// generatedy by JSX compiler 0.9.10 (2013-02-27 11:48:24 +0900; 00a25ec6f510ce11034e389513b7d489c030e6cd)
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
JSX.DEBUG = false;
/**
 * class Config extends Object
 * @constructor
 */
function Config() {
}

/**
 * @constructor
 */
function Config$() {
};

Config$.prototype = new Config;

/**
 * class vec3 extends Object
 * @constructor
 */
function vec3() {
}

/**
 * @constructor
 * @param {!number} x
 * @param {!number} y
 * @param {!number} z
 */
function vec3$NNN(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
};

vec3$NNN.prototype = new vec3;

/**
 * @param {vec3} a
 * @param {vec3} b
 * @return {vec3}
 */
vec3.vadd$Lvec3$Lvec3$ = function (a, b) {
	return ({x: a.x + b.x, y: a.y + b.y, z: a.z + b.z});
};

var vec3$vadd$Lvec3$Lvec3$ = vec3.vadd$Lvec3$Lvec3$;

/**
 * @param {vec3} a
 * @param {vec3} b
 * @return {vec3}
 */
vec3.vsub$Lvec3$Lvec3$ = function (a, b) {
	return ({x: a.x - b.x, y: a.y - b.y, z: a.z - b.z});
};

var vec3$vsub$Lvec3$Lvec3$ = vec3.vsub$Lvec3$Lvec3$;

/**
 * @param {vec3} a
 * @param {vec3} b
 * @return {vec3}
 */
vec3.vcross$Lvec3$Lvec3$ = function (a, b) {
	/** @type {!number} */
	var z$0;
	/** @type {!number} */
	var z$1;
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var y$1;
	/** @type {!number} */
	var x$1;
	return ({x: (y$1 = a.y) * (z$1 = b.z) - (z$0 = a.z) * (y$0 = b.y), y: z$0 * (x$1 = b.x) - (x$0 = a.x) * z$1, z: x$0 * y$0 - y$1 * x$1});
};

var vec3$vcross$Lvec3$Lvec3$ = vec3.vcross$Lvec3$Lvec3$;

/**
 * @param {vec3} a
 * @param {vec3} b
 * @return {!number}
 */
vec3.vdot$Lvec3$Lvec3$ = function (a, b) {
	return a.x * b.x + a.y * b.y + a.z * b.z;
};

var vec3$vdot$Lvec3$Lvec3$ = vec3.vdot$Lvec3$Lvec3$;

/**
 * @param {vec3} a
 * @return {!number}
 */
vec3.vlength$Lvec3$ = function (a) {
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	return Math.sqrt((x$0 = a.x) * x$0 + (y$0 = a.y) * y$0 + (z$0 = a.z) * z$0);
};

var vec3$vlength$Lvec3$ = vec3.vlength$Lvec3$;

/**
 * @param {vec3} a
 * @return {vec3}
 */
vec3.vnormalize$Lvec3$ = function (a) {
	/** @type {!number} */
	var len;
	/** @type {vec3} */
	var v;
	/** @type {!number} */
	var x$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var z$0;
	len = Math.sqrt((x$0 = a.x) * x$0 + (y$0 = a.y) * y$0 + (z$0 = a.z) * z$0);
	v = ({x: a.x, y: a.y, z: a.z});
	if ((len >= 0 ? len : - len) > 1.0e-17) {
		v.x /= len;
		v.y /= len;
		v.z /= len;
	}
	return v;
};

var vec3$vnormalize$Lvec3$ = vec3.vnormalize$Lvec3$;

/**
 * class Isect extends Object
 * @constructor
 */
function Isect() {
}

/**
 * @constructor
 */
function Isect$() {
	this.t = 1000000.0;
	this.hit = false;
	this.p = ({x: 0.0, y: 0.0, z: 0.0});
	this.n = ({x: 0.0, y: 0.0, z: 0.0});
};

Isect$.prototype = new Isect;

/**
 * class Ray extends Object
 * @constructor
 */
function Ray() {
}

/**
 * @constructor
 * @param {vec3} org
 * @param {vec3} dir
 */
function Ray$Lvec3$Lvec3$(org, dir) {
	this.org = org;
	this.dir = dir;
};

Ray$Lvec3$Lvec3$.prototype = new Ray;

/**
 * class Sphere extends Object
 * @constructor
 */
function Sphere() {
}

/**
 * @constructor
 * @param {vec3} center
 * @param {!number} radius
 */
function Sphere$Lvec3$N(center, radius) {
	this.center = center;
	this.radius = radius;
};

Sphere$Lvec3$N.prototype = new Sphere;

/**
 * @param {Sphere} $this
 * @param {Ray} ray
 * @param {Isect} isect
 */
Sphere.intersect$LSphere$LRay$LIsect$ = function ($this, ray, isect) {
	/** @type {!number} */
	var B;
	/** @type {!number} */
	var C;
	/** @type {!number} */
	var D;
	/** @type {!number} */
	var t;
	/** @type {vec3} */
	var n;
	/** @type {vec3} */
	var a$0;
	/** @type {vec3} */
	var b$0;
	/** @type {vec3} */
	var b$1;
	/** @type {vec3} */
	var b$2;
	/** @type {!number} */
	var rs$x$0;
	/** @type {!number} */
	var rs$y$0;
	/** @type {!number} */
	var rs$z$0;
	/** @type {vec3} */
	var org$0;
	/** @type {vec3} */
	var dir$0;
	/** @type {vec3} */
	var p$0;
	/** @type {!number} */
	var radius$0;
	a$0 = ray.org;
	b$0 = $this.center;
	rs$x$0 = a$0.x - b$0.x;
	rs$y$0 = a$0.y - b$0.y;
	rs$z$0 = a$0.z - b$0.z;
	b$1 = ray.dir;
	B = rs$x$0 * b$1.x + rs$y$0 * b$1.y + rs$z$0 * b$1.z;
	C = rs$x$0 * rs$x$0 + rs$y$0 * rs$y$0 + rs$z$0 * rs$z$0 - (radius$0 = $this.radius) * radius$0;
	D = B * B - C;
	if (D > 0.0) {
		t = - B - Math.sqrt(D);
		if (t > 0.0 && t < isect.t) {
			isect.t = t;
			isect.hit = true;
			p$0 = isect.p = ({x: (org$0 = ray.org).x + (dir$0 = ray.dir).x * t, y: org$0.y + dir$0.y * t, z: org$0.z + dir$0.z * t});
			b$2 = $this.center;
			n = ({x: p$0.x - b$2.x, y: p$0.y - b$2.y, z: p$0.z - b$2.z});
			isect.n = vec3$vnormalize$Lvec3$(n);
		}
	}
};

var Sphere$intersect$LSphere$LRay$LIsect$ = Sphere.intersect$LSphere$LRay$LIsect$;

/**
 * class Plane extends Object
 * @constructor
 */
function Plane() {
}

/**
 * @constructor
 * @param {vec3} p
 * @param {vec3} n
 */
function Plane$Lvec3$Lvec3$(p, n) {
	this.p = p;
	this.n = n;
};

Plane$Lvec3$Lvec3$.prototype = new Plane;

/**
 * @param {Plane} $this
 * @param {Ray} ray
 * @param {Isect} isect
 */
Plane.intersect$LPlane$LRay$LIsect$ = function ($this, ray, isect) {
	/** @type {!number} */
	var d;
	/** @type {!number} */
	var v;
	/** @type {!number} */
	var t;
	/** @type {vec3} */
	var a$0;
	/** @type {vec3} */
	var b$0;
	/** @type {vec3} */
	var org$0;
	/** @type {vec3} */
	var dir$0;
	d = - vec3$vdot$Lvec3$Lvec3$($this.p, $this.n);
	a$0 = ray.dir;
	b$0 = $this.n;
	v = a$0.x * b$0.x + a$0.y * b$0.y + a$0.z * b$0.z;
	if ((v >= 0 ? v : - v) < 1.0e-17) {
		return;
	}
	t = - (vec3$vdot$Lvec3$Lvec3$(ray.org, $this.n) + d) / v;
	if (t > 0.0 && t < isect.t) {
		isect.hit = true;
		isect.t = t;
		isect.n = $this.n;
		isect.p = ({x: (org$0 = ray.org).x + t * (dir$0 = ray.dir).x, y: org$0.y + t * dir$0.y, z: org$0.z + t * dir$0.z});
	}
};

var Plane$intersect$LPlane$LRay$LIsect$ = Plane.intersect$LPlane$LRay$LIsect$;

/**
 * class Random extends Object
 * @constructor
 */
function Random() {
}

/**
 * @constructor
 */
function Random$() {
};

Random$.prototype = new Random;

/**
 * @return {!number}
 */
Random.next$ = function () {
	Random._x = Random._x * 0x5DEECE66D + 0xB;
	Random._x %= 0xFFFFFFFFFFFF;
	return Random._x * 3.552713678800501e-15;
};

var Random$next$ = Random.next$;

/**
 * class AOBench extends Object
 * @constructor
 */
function AOBench() {
}

/**
 * @constructor
 */
function AOBench$() {
	this.spheres = [ ({center: ({x: -2, y: 0.0, z: -3.5}), radius: 0.5}), ({center: ({x: -0.5, y: 0.0, z: -3}), radius: 0.5}), ({center: ({x: 1.0, y: 0.0, z: -2.2}), radius: 0.5}) ];
	this.plane = ({p: ({x: 0.0, y: -0.5, z: 0.0}), n: ({x: 0.0, y: 1.0, z: 0.0})});
};

AOBench$.prototype = new AOBench;

/**
 * @param {!number} f
 * @return {!number}
 */
AOBench.clamp$N = function (f) {
	/** @type {!number} */
	var i;
	i = f * 255.0;
	if (i > 255.0) {
		i = 255.0;
	}
	if (i < 0.0) {
		i = 0.0;
	}
	return i | 0;
};

var AOBench$clamp$N = AOBench.clamp$N;

/**
 * @param {AOBench} $this
 * @param {Array.<undefined|vec3>} basis
 * @param {vec3} n
 */
AOBench.orthoBasis$LAOBench$ALvec3$Lvec3$ = function ($this, basis, n) {
	/** @type {!number} */
	var z$0;
	/** @type {!number} */
	var y$0;
	/** @type {!number} */
	var x$0;
	basis[2] = n;
	basis[1] = ({x: 0.0, y: 0.0, z: 0.0});
	if ((x$0 = n.x) < 0.6 && x$0 > -0.6) {
		basis[1].x = 1.0;
	} else {
		if ((y$0 = n.y) < 0.6 && y$0 > -0.6) {
			basis[1].y = 1.0;
		} else {
			if ((z$0 = n.z) < 0.6 && z$0 > -0.6) {
				basis[1].z = 1.0;
			} else {
				basis[1].x = 1.0;
			}
		}
	}
	basis[0] = vec3$vcross$Lvec3$Lvec3$(basis[1], basis[2]);
	basis[0] = vec3$vnormalize$Lvec3$(basis[0]);
	basis[1] = vec3$vcross$Lvec3$Lvec3$(basis[2], basis[0]);
	basis[1] = vec3$vnormalize$Lvec3$(basis[1]);
};

var AOBench$orthoBasis$LAOBench$ALvec3$Lvec3$ = AOBench.orthoBasis$LAOBench$ALvec3$Lvec3$;

/**
 * @param {AOBench} $this
 * @param {Isect} isect
 * @return {vec3}
 */
AOBench.ambient_occlusion$LAOBench$LIsect$ = function ($this, isect) {
	/** @type {Array.<undefined|vec3>} */
	var basis;
	/** @type {vec3} */
	var p;
	/** @type {!number} */
	var occlusion;
	/** @type {!number} */
	var j;
	/** @type {!number} */
	var i;
	/** @type {!number} */
	var r;
	/** @type {!number} */
	var phi;
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var y;
	/** @type {!number} */
	var z;
	/** @type {!number} */
	var rx;
	/** @type {!number} */
	var ry;
	/** @type {!number} */
	var rz;
	/** @type {vec3} */
	var raydir;
	/** @type {Ray} */
	var ray;
	/** @type {Isect} */
	var occIsect;
	/** @type {!number} */
	var occ_f;
	/** @type {vec3} */
	var p$0;
	/** @type {vec3} */
	var n$0;
	basis = new Array(3);
	AOBench$orthoBasis$LAOBench$ALvec3$Lvec3$($this, basis, isect.n);
	p = ({x: (p$0 = isect.p).x + 0.0001 * (n$0 = isect.n).x, y: p$0.y + 0.0001 * n$0.y, z: p$0.z + 0.0001 * n$0.z});
	occlusion = 0;
	for (j = 0; j < 8; j++) {
		for (i = 0; i < 8; i++) {
			Random._x = Random._x * 0x5DEECE66D + 0xB;
			Random._x %= 0xFFFFFFFFFFFF;
			r = Random._x * 3.552713678800501e-15;
			phi = 6.283185307179586 * Random$next$();
			x = Math.cos(phi) * Math.sqrt(1.0 - r);
			y = Math.sin(phi) * Math.sqrt(1.0 - r);
			z = Math.sqrt(r);
			rx = x * basis[0].x + y * basis[1].x + z * basis[2].x;
			ry = x * basis[0].y + y * basis[1].y + z * basis[2].y;
			rz = x * basis[0].z + y * basis[1].z + z * basis[2].z;
			raydir = ({x: rx, y: ry, z: rz});
			ray = ({org: p, dir: raydir});
			occIsect = ({t: 1000000.0, hit: false, p: ({x: 0.0, y: 0.0, z: 0.0}), n: ({x: 0.0, y: 0.0, z: 0.0})});
			Sphere$intersect$LSphere$LRay$LIsect$($this.spheres[0], ray, occIsect);
			Sphere$intersect$LSphere$LRay$LIsect$($this.spheres[1], ray, occIsect);
			Sphere$intersect$LSphere$LRay$LIsect$($this.spheres[2], ray, occIsect);
			Plane$intersect$LPlane$LRay$LIsect$($this.plane, ray, occIsect);
			if (occIsect.hit) {
				occlusion++;
			}
		}
	}
	occ_f = (64 - occlusion) / 64;
	return ({x: occ_f, y: occ_f, z: occ_f});
};

var AOBench$ambient_occlusion$LAOBench$LIsect$ = AOBench.ambient_occlusion$LAOBench$LIsect$;

/**
 * @param {AOBench} $this
 * @param {*} fill
 * @param {!number} w
 * @param {!number} h
 */
AOBench.render$LAOBench$F$IIIIIV$II = function ($this, fill, w, h) {
	/** @type {!number} */
	var half_w;
	/** @type {!number} */
	var half_h;
	/** @type {!number} */
	var y;
	/** @type {!number} */
	var x;
	/** @type {!number} */
	var px;
	/** @type {!number} */
	var py;
	/** @type {vec3} */
	var eye;
	/** @type {Ray} */
	var ray;
	/** @type {Isect} */
	var isect;
	/** @type {vec3} */
	var col;
	/** @type {!number} */
	var r;
	/** @type {!number} */
	var g;
	/** @type {!number} */
	var b;
	half_w = w * .5;
	half_h = h * .5;
	for (y = 0; y < h; y++) {
		for (x = 0; x < w; x++) {
			px = (x - half_w) / half_w;
			py = - (y - half_h) / half_h;
			eye = vec3$vnormalize$Lvec3$(({x: px, y: py, z: -1}));
			ray = ({org: ({x: 0.0, y: 0.0, z: 0.0}), dir: eye});
			isect = ({t: 1000000.0, hit: false, p: ({x: 0.0, y: 0.0, z: 0.0}), n: ({x: 0.0, y: 0.0, z: 0.0})});
			Sphere$intersect$LSphere$LRay$LIsect$($this.spheres[0], ray, isect);
			Sphere$intersect$LSphere$LRay$LIsect$($this.spheres[1], ray, isect);
			Sphere$intersect$LSphere$LRay$LIsect$($this.spheres[2], ray, isect);
			Plane$intersect$LPlane$LRay$LIsect$($this.plane, ray, isect);
			col = ({x: 0.0, y: 0.0, z: 0.0});
			if (isect.hit) {
				col = AOBench$ambient_occlusion$LAOBench$LIsect$($this, isect);
			}
			r = AOBench$clamp$N(col.x);
			g = AOBench$clamp$N(col.y);
			b = AOBench$clamp$N(col.z);
			fill(x, y, r, g, b);
		}
	}
};

var AOBench$render$LAOBench$F$IIIIIV$II = AOBench.render$LAOBench$F$IIIIIV$II;

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
	/** @type {HTMLCanvasElement} */
	var canvas;
	/** @type {CanvasRenderingContext2D} */
	var ctx;
	/** @type {AOBench} */
	var ao;
	/** @type {!number} */
	var t0;
	/** @type {!number} */
	var t1;
	/** @type {!number} */
	var d;
	canvas = dom.document.getElementById("world");
	ctx = canvas.getContext("2d");
	ao = ({spheres: [ ({center: ({x: -2, y: 0.0, z: -3.5}), radius: 0.5}), ({center: ({x: -0.5, y: 0.0, z: -3}), radius: 0.5}), ({center: ({x: 1.0, y: 0.0, z: -2.2}), radius: 0.5}) ], plane: ({p: ({x: 0.0, y: -0.5, z: 0.0}), n: ({x: 0.0, y: 1.0, z: 0.0})})});
	t0 = Date.now();
	AOBench$render$LAOBench$F$IIIIIV$II(ao, (function (x, y, r, g, b) {
		ctx.fillStyle = "rgb(" + (r + "") + "," + (g + "") + "," + (b + "") + ")";
		ctx.fillRect(x, y, 1, 1);
	}), canvas.width, canvas.height);
	t1 = Date.now();
	d = t1 - t0;
	dom.document.getElementById("status").innerHTML = "Time = " + (d + "") + "[ms]";
};

var _Main$main$AS = _Main.main$AS;

/**
 * class dom extends Object
 * @constructor
 */
function dom() {
}

/**
 * @constructor
 */
function dom$() {
};

dom$.prototype = new dom;

/**
 * @param {!string} id
 * @return {HTMLElement}
 */
dom.id$S = function (id) {
	return dom.document.getElementById(id);
};

var dom$id$S = dom.id$S;

/**
 * @param {!string} id
 * @return {HTMLElement}
 */
dom.getElementById$S = function (id) {
	return dom.document.getElementById(id);
};

var dom$getElementById$S = dom.getElementById$S;

/**
 * @param {!string} tag
 * @return {HTMLElement}
 */
dom.createElement$S = function (tag) {
	return dom.document.createElement(tag);
};

var dom$createElement$S = dom.createElement$S;

/**
 * class EventInit extends Object
 * @constructor
 */
function EventInit() {
}

/**
 * @constructor
 */
function EventInit$() {
	this.bubbles = false;
	this.cancelable = false;
};

EventInit$.prototype = new EventInit;

/**
 * class CustomEventInit extends EventInit
 * @constructor
 */
function CustomEventInit() {
}

CustomEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function CustomEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.detail = null;
};

CustomEventInit$.prototype = new CustomEventInit;

/**
 * class MutationObserverInit extends Object
 * @constructor
 */
function MutationObserverInit() {
}

/**
 * @constructor
 */
function MutationObserverInit$() {
	this.childList = false;
	this.attributes = false;
	this.characterData = false;
	this.subtree = false;
	this.attributeOldValue = false;
	this.characterDataOldValue = false;
	this.attributeFilter = null;
};

MutationObserverInit$.prototype = new MutationObserverInit;

/**
 * class UIEventInit extends EventInit
 * @constructor
 */
function UIEventInit() {
}

UIEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function UIEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
};

UIEventInit$.prototype = new UIEventInit;

/**
 * class FocusEventInit extends Object
 * @constructor
 */
function FocusEventInit() {
}

/**
 * @constructor
 */
function FocusEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.relatedTarget = null;
};

FocusEventInit$.prototype = new FocusEventInit;

/**
 * class MouseEventInit extends UIEventInit
 * @constructor
 */
function MouseEventInit() {
}

MouseEventInit.prototype = new UIEventInit;
/**
 * @constructor
 */
function MouseEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.region = null;
};

MouseEventInit$.prototype = new MouseEventInit;

/**
 * class WheelEventInit extends Object
 * @constructor
 */
function WheelEventInit() {
}

/**
 * @constructor
 */
function WheelEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.deltaX = 0;
	this.deltaY = 0;
	this.deltaZ = 0;
	this.deltaMode = 0;
};

WheelEventInit$.prototype = new WheelEventInit;

/**
 * class KeyboardEventInit extends Object
 * @constructor
 */
function KeyboardEventInit() {
}

/**
 * @constructor
 */
function KeyboardEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.char = "";
	this.key = "";
	this.location = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.repeat = false;
	this.locale = "";
	this.charCode = 0;
	this.keyCode = 0;
	this.which = 0;
};

KeyboardEventInit$.prototype = new KeyboardEventInit;

/**
 * class CompositionEventInit extends Object
 * @constructor
 */
function CompositionEventInit() {
}

/**
 * @constructor
 */
function CompositionEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.data = null;
	this.locale = "";
};

CompositionEventInit$.prototype = new CompositionEventInit;

/**
 * class ProgressEventInit extends EventInit
 * @constructor
 */
function ProgressEventInit() {
}

ProgressEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function ProgressEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.lengthComputable = false;
	this.loaded = 0;
	this.total = 0;
};

ProgressEventInit$.prototype = new ProgressEventInit;

/**
 * class XMLHttpRequestOptions extends Object
 * @constructor
 */
function XMLHttpRequestOptions() {
}

/**
 * @constructor
 */
function XMLHttpRequestOptions$() {
	this.anon = false;
};

XMLHttpRequestOptions$.prototype = new XMLHttpRequestOptions;

/**
 * class TrackEventInit extends EventInit
 * @constructor
 */
function TrackEventInit() {
}

TrackEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function TrackEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.track = null;
};

TrackEventInit$.prototype = new TrackEventInit;

/**
 * class PopStateEventInit extends EventInit
 * @constructor
 */
function PopStateEventInit() {
}

PopStateEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function PopStateEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.state = null;
};

PopStateEventInit$.prototype = new PopStateEventInit;

/**
 * class HashChangeEventInit extends EventInit
 * @constructor
 */
function HashChangeEventInit() {
}

HashChangeEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function HashChangeEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.oldURL = "";
	this.newURL = "";
};

HashChangeEventInit$.prototype = new HashChangeEventInit;

/**
 * class PageTransitionEventInit extends EventInit
 * @constructor
 */
function PageTransitionEventInit() {
}

PageTransitionEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function PageTransitionEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.persisted = false;
};

PageTransitionEventInit$.prototype = new PageTransitionEventInit;

/**
 * class DragEventInit extends EventInit
 * @constructor
 */
function DragEventInit() {
}

DragEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function DragEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.dataTransfer = null;
};

DragEventInit$.prototype = new DragEventInit;

/**
 * class CloseEventInit extends EventInit
 * @constructor
 */
function CloseEventInit() {
}

CloseEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function CloseEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.wasClean = false;
	this.code = 0;
	this.reason = "";
};

CloseEventInit$.prototype = new CloseEventInit;

/**
 * class StorageEventInit extends EventInit
 * @constructor
 */
function StorageEventInit() {
}

StorageEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function StorageEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.key = null;
	this.oldValue = null;
	this.newValue = null;
	this.url = "";
	this.storageArea = null;
};

StorageEventInit$.prototype = new StorageEventInit;

/**
 * class MessageEventInit extends EventInit
 * @constructor
 */
function MessageEventInit() {
}

MessageEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function MessageEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.data = null;
	this.origin = "";
	this.lastEventId = "";
	this.source = null;
	this.ports = null;
};

MessageEventInit$.prototype = new MessageEventInit;

/**
 * class ErrorEventInit extends EventInit
 * @constructor
 */
function ErrorEventInit() {
}

ErrorEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function ErrorEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.message = "";
	this.filename = "";
	this.lineno = 0;
};

ErrorEventInit$.prototype = new ErrorEventInit;

/**
 * class EventSourceInit extends Object
 * @constructor
 */
function EventSourceInit() {
}

/**
 * @constructor
 */
function EventSourceInit$() {
	this.withCredentials = false;
};

EventSourceInit$.prototype = new EventSourceInit;

/**
 * class IDBObjectStoreParameters extends Object
 * @constructor
 */
function IDBObjectStoreParameters() {
}

/**
 * @constructor
 */
function IDBObjectStoreParameters$() {
	this.keyPath = null;
	this.autoIncrement = false;
};

IDBObjectStoreParameters$.prototype = new IDBObjectStoreParameters;

/**
 * class IDBIndexParameters extends Object
 * @constructor
 */
function IDBIndexParameters() {
}

/**
 * @constructor
 */
function IDBIndexParameters$() {
	this.unique = false;
	this.multiEntry = false;
};

IDBIndexParameters$.prototype = new IDBIndexParameters;

/**
 * class IDBVersionChangeEventInit extends EventInit
 * @constructor
 */
function IDBVersionChangeEventInit() {
}

IDBVersionChangeEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function IDBVersionChangeEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.oldVersion = 0;
	this.newVersion = null;
};

IDBVersionChangeEventInit$.prototype = new IDBVersionChangeEventInit;

/**
 * class NotificationOptions extends Object
 * @constructor
 */
function NotificationOptions() {
}

/**
 * @constructor
 */
function NotificationOptions$() {
	this.titleDir = "";
	this.body = "";
	this.bodyDir = "";
	this.tag = "";
	this.iconUrl = "";
};

NotificationOptions$.prototype = new NotificationOptions;

/**
 * class RTCSessionDescriptionInit extends Object
 * @constructor
 */
function RTCSessionDescriptionInit() {
}

/**
 * @constructor
 */
function RTCSessionDescriptionInit$() {
	this.type = "";
	this.sdp = "";
};

RTCSessionDescriptionInit$.prototype = new RTCSessionDescriptionInit;

/**
 * class RTCIceCandidateInit extends Object
 * @constructor
 */
function RTCIceCandidateInit() {
}

/**
 * @constructor
 */
function RTCIceCandidateInit$() {
	this.candidate = "";
	this.sdpMid = "";
	this.sdpMLineIndex = 0;
};

RTCIceCandidateInit$.prototype = new RTCIceCandidateInit;

/**
 * class RTCIceServer extends Object
 * @constructor
 */
function RTCIceServer() {
}

/**
 * @constructor
 */
function RTCIceServer$() {
	this.url = "";
	this.credential = null;
};

RTCIceServer$.prototype = new RTCIceServer;

/**
 * class RTCConfiguration extends Object
 * @constructor
 */
function RTCConfiguration() {
}

/**
 * @constructor
 */
function RTCConfiguration$() {
	this.iceServers = null;
};

RTCConfiguration$.prototype = new RTCConfiguration;

/**
 * class DataChannelInit extends Object
 * @constructor
 */
function DataChannelInit() {
}

/**
 * @constructor
 */
function DataChannelInit$() {
	this.reliable = false;
};

DataChannelInit$.prototype = new DataChannelInit;

/**
 * class RTCPeerConnectionIceEventInit extends EventInit
 * @constructor
 */
function RTCPeerConnectionIceEventInit() {
}

RTCPeerConnectionIceEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function RTCPeerConnectionIceEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.candidate = null;
};

RTCPeerConnectionIceEventInit$.prototype = new RTCPeerConnectionIceEventInit;

/**
 * class MediaStreamEventInit extends EventInit
 * @constructor
 */
function MediaStreamEventInit() {
}

MediaStreamEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function MediaStreamEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.stream = null;
};

MediaStreamEventInit$.prototype = new MediaStreamEventInit;

/**
 * class DataChannelEventInit extends EventInit
 * @constructor
 */
function DataChannelEventInit() {
}

DataChannelEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function DataChannelEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.channel = null;
};

DataChannelEventInit$.prototype = new DataChannelEventInit;

/**
 * class MediaStreamConstraints extends Object
 * @constructor
 */
function MediaStreamConstraints() {
}

/**
 * @constructor
 */
function MediaStreamConstraints$() {
	this.video = null;
	this.audio = null;
};

MediaStreamConstraints$.prototype = new MediaStreamConstraints;

/**
 * class MediaTrackConstraints extends Object
 * @constructor
 */
function MediaTrackConstraints() {
}

/**
 * @constructor
 */
function MediaTrackConstraints$() {
	this.mandatory = null;
	this.optional = null;
};

MediaTrackConstraints$.prototype = new MediaTrackConstraints;

/**
 * class HitRegionOptions extends Object
 * @constructor
 */
function HitRegionOptions() {
}

/**
 * @constructor
 */
function HitRegionOptions$() {
	this.path = null;
	this.id = "";
	this.parentID = null;
	this.cursor = "";
	this.control = null;
	this.label = null;
	this.role = null;
};

HitRegionOptions$.prototype = new HitRegionOptions;

/**
 * class WebGLContextAttributes extends Object
 * @constructor
 */
function WebGLContextAttributes() {
}

/**
 * @constructor
 */
function WebGLContextAttributes$() {
	this.alpha = false;
	this.depth = false;
	this.stencil = false;
	this.antialias = false;
	this.premultipliedAlpha = false;
	this.preserveDrawingBuffer = false;
};

WebGLContextAttributes$.prototype = new WebGLContextAttributes;

/**
 * class WebGLContextEventInit extends EventInit
 * @constructor
 */
function WebGLContextEventInit() {
}

WebGLContextEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function WebGLContextEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.statusMessage = "";
};

WebGLContextEventInit$.prototype = new WebGLContextEventInit;

/**
 * class DeviceOrientationEventInit extends EventInit
 * @constructor
 */
function DeviceOrientationEventInit() {
}

DeviceOrientationEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function DeviceOrientationEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.alpha = null;
	this.beta = null;
	this.gamma = null;
	this.absolute = false;
};

DeviceOrientationEventInit$.prototype = new DeviceOrientationEventInit;

/**
 * class DeviceMotionEventInit extends EventInit
 * @constructor
 */
function DeviceMotionEventInit() {
}

DeviceMotionEventInit.prototype = new EventInit;
/**
 * @constructor
 */
function DeviceMotionEventInit$() {
	this.bubbles = false;
	this.cancelable = false;
	this.acceleration = null;
	this.accelerationIncludingGravity = null;
	this.rotationRate = null;
	this.interval = null;
};

DeviceMotionEventInit$.prototype = new DeviceMotionEventInit;

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

Config.canvasId = "world";
Config.statusId = "status";
Random._x = 0;
AOBench.NSUBSAMPLES = 2;
AOBench.NAO_SAMPLES = 8;
AOBench.EPS = 0.0001;
AOBench.NPHI = 8;
AOBench.NTHETA = 8;
AOBench.ALLRAY = 64;
$__jsx_lazy_init(dom, "window", function () {
	return js.global.window;
});
$__jsx_lazy_init(dom, "document", function () {
	return js.global.document;
});
js.global = (function () { return this; })();
var $__jsx_classMap = {
	"system:web/example/aobench/aobench.jsx": {
		Config: Config,
		Config$: Config$,
		vec3: vec3,
		vec3$NNN: vec3$NNN,
		Isect: Isect,
		Isect$: Isect$,
		Ray: Ray,
		Ray$Lvec3$Lvec3$: Ray$Lvec3$Lvec3$,
		Sphere: Sphere,
		Sphere$Lvec3$N: Sphere$Lvec3$N,
		Plane: Plane,
		Plane$Lvec3$Lvec3$: Plane$Lvec3$Lvec3$,
		Random: Random,
		Random$: Random$,
		AOBench: AOBench,
		AOBench$: AOBench$,
		_Main: _Main,
		_Main$: _Main$
	},
	"system:lib/js/js/web.jsx": {
		dom: dom,
		dom$: dom$,
		EventInit: EventInit,
		EventInit$: EventInit$,
		CustomEventInit: CustomEventInit,
		CustomEventInit$: CustomEventInit$,
		MutationObserverInit: MutationObserverInit,
		MutationObserverInit$: MutationObserverInit$,
		UIEventInit: UIEventInit,
		UIEventInit$: UIEventInit$,
		FocusEventInit: FocusEventInit,
		FocusEventInit$: FocusEventInit$,
		MouseEventInit: MouseEventInit,
		MouseEventInit$: MouseEventInit$,
		WheelEventInit: WheelEventInit,
		WheelEventInit$: WheelEventInit$,
		KeyboardEventInit: KeyboardEventInit,
		KeyboardEventInit$: KeyboardEventInit$,
		CompositionEventInit: CompositionEventInit,
		CompositionEventInit$: CompositionEventInit$,
		ProgressEventInit: ProgressEventInit,
		ProgressEventInit$: ProgressEventInit$,
		XMLHttpRequestOptions: XMLHttpRequestOptions,
		XMLHttpRequestOptions$: XMLHttpRequestOptions$,
		TrackEventInit: TrackEventInit,
		TrackEventInit$: TrackEventInit$,
		PopStateEventInit: PopStateEventInit,
		PopStateEventInit$: PopStateEventInit$,
		HashChangeEventInit: HashChangeEventInit,
		HashChangeEventInit$: HashChangeEventInit$,
		PageTransitionEventInit: PageTransitionEventInit,
		PageTransitionEventInit$: PageTransitionEventInit$,
		DragEventInit: DragEventInit,
		DragEventInit$: DragEventInit$,
		CloseEventInit: CloseEventInit,
		CloseEventInit$: CloseEventInit$,
		StorageEventInit: StorageEventInit,
		StorageEventInit$: StorageEventInit$,
		MessageEventInit: MessageEventInit,
		MessageEventInit$: MessageEventInit$,
		ErrorEventInit: ErrorEventInit,
		ErrorEventInit$: ErrorEventInit$,
		EventSourceInit: EventSourceInit,
		EventSourceInit$: EventSourceInit$,
		IDBObjectStoreParameters: IDBObjectStoreParameters,
		IDBObjectStoreParameters$: IDBObjectStoreParameters$,
		IDBIndexParameters: IDBIndexParameters,
		IDBIndexParameters$: IDBIndexParameters$,
		IDBVersionChangeEventInit: IDBVersionChangeEventInit,
		IDBVersionChangeEventInit$: IDBVersionChangeEventInit$,
		NotificationOptions: NotificationOptions,
		NotificationOptions$: NotificationOptions$,
		RTCSessionDescriptionInit: RTCSessionDescriptionInit,
		RTCSessionDescriptionInit$: RTCSessionDescriptionInit$,
		RTCIceCandidateInit: RTCIceCandidateInit,
		RTCIceCandidateInit$: RTCIceCandidateInit$,
		RTCIceServer: RTCIceServer,
		RTCIceServer$: RTCIceServer$,
		RTCConfiguration: RTCConfiguration,
		RTCConfiguration$: RTCConfiguration$,
		DataChannelInit: DataChannelInit,
		DataChannelInit$: DataChannelInit$,
		RTCPeerConnectionIceEventInit: RTCPeerConnectionIceEventInit,
		RTCPeerConnectionIceEventInit$: RTCPeerConnectionIceEventInit$,
		MediaStreamEventInit: MediaStreamEventInit,
		MediaStreamEventInit$: MediaStreamEventInit$,
		DataChannelEventInit: DataChannelEventInit,
		DataChannelEventInit$: DataChannelEventInit$,
		MediaStreamConstraints: MediaStreamConstraints,
		MediaStreamConstraints$: MediaStreamConstraints$,
		MediaTrackConstraints: MediaTrackConstraints,
		MediaTrackConstraints$: MediaTrackConstraints$,
		HitRegionOptions: HitRegionOptions,
		HitRegionOptions$: HitRegionOptions$,
		WebGLContextAttributes: WebGLContextAttributes,
		WebGLContextAttributes$: WebGLContextAttributes$,
		WebGLContextEventInit: WebGLContextEventInit,
		WebGLContextEventInit$: WebGLContextEventInit$,
		DeviceOrientationEventInit: DeviceOrientationEventInit,
		DeviceOrientationEventInit$: DeviceOrientationEventInit$,
		DeviceMotionEventInit: DeviceMotionEventInit,
		DeviceMotionEventInit$: DeviceMotionEventInit$
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
	JSX.runMain("system:web/example/aobench/aobench.jsx", [])
}

window.addEventListener("load", $__jsx_onload);
document.addEventListener("DOMContentLoaded", $__jsx_onload);

})(JSX);
