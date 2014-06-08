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
JSX.DEBUG = false;
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
function Config() {
};

$__jsx_extend([Config], Object);
function vec3(x, y, z) {
	this.x = x;
	this.y = y;
	this.z = z;
};

$__jsx_extend([vec3], Object);
function vec3$vadd$Lvec3$Lvec3$(a, b) {
	return ({x: a.x + b.x, y: a.y + b.y, z: a.z + b.z});
};

vec3.vadd$Lvec3$Lvec3$ = vec3$vadd$Lvec3$Lvec3$;

function vec3$vsub$Lvec3$Lvec3$(a, b) {
	return ({x: a.x - b.x, y: a.y - b.y, z: a.z - b.z});
};

vec3.vsub$Lvec3$Lvec3$ = vec3$vsub$Lvec3$Lvec3$;

function vec3$vcross$Lvec3$Lvec3$(a, b) {
	var z$0;
	var z$1;
	var x$0;
	var y$0;
	var y$1;
	var x$1;
	return ({x: (y$1 = a.y) * (z$1 = b.z) - (z$0 = a.z) * (y$0 = b.y), y: z$0 * (x$1 = b.x) - (x$0 = a.x) * z$1, z: x$0 * y$0 - y$1 * x$1});
};

vec3.vcross$Lvec3$Lvec3$ = vec3$vcross$Lvec3$Lvec3$;

function vec3$vdot$Lvec3$Lvec3$(a, b) {
	return a.x * b.x + a.y * b.y + a.z * b.z;
};

vec3.vdot$Lvec3$Lvec3$ = vec3$vdot$Lvec3$Lvec3$;

function vec3$vlength$Lvec3$(a) {
	var x$0;
	var y$0;
	var z$0;
	return Math.sqrt((x$0 = a.x) * x$0 + (y$0 = a.y) * y$0 + (z$0 = a.z) * z$0);
};

vec3.vlength$Lvec3$ = vec3$vlength$Lvec3$;

function vec3$vnormalize$Lvec3$(a) {
	var len;
	var v;
	var x$0;
	var y$0;
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

vec3.vnormalize$Lvec3$ = vec3$vnormalize$Lvec3$;

function Isect() {
	this.t = 1000000.0;
	this.hit = false;
	this.p = ({x: 0.0, y: 0.0, z: 0.0});
	this.n = ({x: 0.0, y: 0.0, z: 0.0});
};

$__jsx_extend([Isect], Object);
function Ray(org, dir) {
	this.org = org;
	this.dir = dir;
};

$__jsx_extend([Ray], Object);
function Sphere(center, radius) {
	this.center = center;
	this.radius = radius;
};

$__jsx_extend([Sphere], Object);
function Sphere$intersect$LSphere$LRay$LIsect$($this, ray, isect) {
	var B;
	var C;
	var D;
	var t;
	var n;
	var a$0;
	var b$0;
	var b$1;
	var b$2;
	var rs$x$0;
	var rs$y$0;
	var rs$z$0;
	var org$0;
	var dir$0;
	var p$0;
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

Sphere.intersect$LSphere$LRay$LIsect$ = Sphere$intersect$LSphere$LRay$LIsect$;

function Plane(p, n) {
	this.p = p;
	this.n = n;
};

$__jsx_extend([Plane], Object);
function Plane$intersect$LPlane$LRay$LIsect$($this, ray, isect) {
	var d;
	var v;
	var t;
	var a$0;
	var b$0;
	var a$1;
	var a$2;
	var b$2;
	var n$0;
	var org$0;
	var dir$0;
	d = - (a$0 = $this.p, b$0 = n$0 = $this.n, a$0.x * b$0.x + a$0.y * b$0.y + a$0.z * b$0.z);
	a$1 = ray.dir;
	v = a$1.x * n$0.x + a$1.y * n$0.y + a$1.z * n$0.z;
	if ((v >= 0 ? v : - v) < 1.0e-17) {
		return;
	}
	t = - ((a$2 = ray.org, b$2 = $this.n, a$2.x * b$2.x + a$2.y * b$2.y + a$2.z * b$2.z) + d) / v;
	if (t > 0.0 && t < isect.t) {
		isect.hit = true;
		isect.t = t;
		isect.n = $this.n;
		isect.p = ({x: (org$0 = ray.org).x + t * (dir$0 = ray.dir).x, y: org$0.y + t * dir$0.y, z: org$0.z + t * dir$0.z});
	}
};

Plane.intersect$LPlane$LRay$LIsect$ = Plane$intersect$LPlane$LRay$LIsect$;

function Random() {
};

$__jsx_extend([Random], Object);
function Random$next$() {
	Random._x = Random._x * 0x5DEECE66D + 0xB;
	Random._x %= 0xFFFFFFFFFFFF;
	return Random._x * 3.552713678800501e-15;
};

Random.next$ = Random$next$;

function AOBench() {
	this.spheres = [ ({center: ({x: -2, y: 0.0, z: -3.5}), radius: 0.5}), ({center: ({x: -0.5, y: 0.0, z: -3}), radius: 0.5}), ({center: ({x: 1.0, y: 0.0, z: -2.2}), radius: 0.5}) ];
	this.plane = ({p: ({x: 0.0, y: -0.5, z: 0.0}), n: ({x: 0.0, y: 1.0, z: 0.0})});
};

$__jsx_extend([AOBench], Object);
function AOBench$clamp$N(f) {
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

AOBench.clamp$N = AOBench$clamp$N;

function AOBench$orthoBasis$LAOBench$ALvec3$Lvec3$($this, basis, n) {
	var z$0;
	var y$0;
	var x$0;
	basis[2] = n;
	basis[1] = ({x: 0.0, y: 0.0, z: 0.0});
	if ((x$0 = n.x) < 0.6 && x$0 > -0.6) {
		basis[1].x = 1.0;
	} else if ((y$0 = n.y) < 0.6 && y$0 > -0.6) {
		basis[1].y = 1.0;
	} else if ((z$0 = n.z) < 0.6 && z$0 > -0.6) {
		basis[1].z = 1.0;
	} else {
		basis[1].x = 1.0;
	}
	basis[0] = vec3$vcross$Lvec3$Lvec3$(basis[1], basis[2]);
	basis[0] = vec3$vnormalize$Lvec3$(basis[0]);
	basis[1] = vec3$vcross$Lvec3$Lvec3$(basis[2], basis[0]);
	basis[1] = vec3$vnormalize$Lvec3$(basis[1]);
};

AOBench.orthoBasis$LAOBench$ALvec3$Lvec3$ = AOBench$orthoBasis$LAOBench$ALvec3$Lvec3$;

function AOBench$ambient_occlusion$LAOBench$LIsect$($this, isect) {
	var basis;
	var p;
	var occlusion;
	var j;
	var i;
	var r;
	var phi;
	var x;
	var y;
	var z;
	var rx;
	var ry;
	var rz;
	var raydir;
	var ray;
	var occIsect;
	var occ_f;
	var p$0;
	var n$0;
	var $__jsx_postinc_t;
	basis = new Array(3);
	AOBench$orthoBasis$LAOBench$ALvec3$Lvec3$($this, basis, isect.n);
	p = ({x: (p$0 = isect.p).x + 0.0001 * (n$0 = isect.n).x, y: p$0.y + 0.0001 * n$0.y, z: p$0.z + 0.0001 * n$0.z});
	occlusion = 0;
	for (j = 0; j < 8; j++) {
		for (i = 0; i < 8; i++) {
			Random._x = Random._x * 0x5DEECE66D + 0xB;
			Random._x %= 0xFFFFFFFFFFFF;
			r = Random._x * 3.552713678800501e-15;
			phi = 6.283185307179586 * (Random._x = Random._x * 0x5DEECE66D + 0xB, Random._x %= 0xFFFFFFFFFFFF, Random._x * 3.552713678800501e-15);
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
				($__jsx_postinc_t = occlusion, occlusion = ($__jsx_postinc_t + 1) | 0, $__jsx_postinc_t);
			}
		}
	}
	occ_f = (64 - occlusion) / 64;
	return ({x: occ_f, y: occ_f, z: occ_f});
};

AOBench.ambient_occlusion$LAOBench$LIsect$ = AOBench$ambient_occlusion$LAOBench$LIsect$;

function AOBench$render$LAOBench$F$IIIIIV$II($this, fill, w, h) {
	var half_w;
	var half_h;
	var y;
	var x;
	var px;
	var py;
	var eye;
	var ray;
	var isect;
	var col;
	var r;
	var g;
	var b;
	var f$0;
	var i$0;
	var f$1;
	var i$1;
	var f$2;
	var i$2;
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
			f$0 = col.x;
			i$0 = f$0 * 255.0;
			if (i$0 > 255.0) {
				i$0 = 255.0;
			}
			if (i$0 < 0.0) {
				i$0 = 0.0;
			}
			r = i$0 | 0;
			f$1 = col.y;
			i$1 = f$1 * 255.0;
			if (i$1 > 255.0) {
				i$1 = 255.0;
			}
			if (i$1 < 0.0) {
				i$1 = 0.0;
			}
			g = i$1 | 0;
			f$2 = col.z;
			i$2 = f$2 * 255.0;
			if (i$2 > 255.0) {
				i$2 = 255.0;
			}
			if (i$2 < 0.0) {
				i$2 = 0.0;
			}
			b = i$2 | 0;
			fill((x | 0), (y | 0), (r | 0), (g | 0), (b | 0));
		}
	}
};

AOBench.render$LAOBench$F$IIIIIV$II = AOBench$render$LAOBench$F$IIIIIV$II;

function _Main() {
};

$__jsx_extend([_Main], Object);
function _Main$main$AS(args) {
	var canvas;
	var ctx;
	var ao;
	var t0;
	var t1;
	var d;
	canvas = dom.document.getElementById("world");
	ctx = canvas.getContext("2d");
	ao = ({spheres: [ ({center: ({x: -2, y: 0.0, z: -3.5}), radius: 0.5}), ({center: ({x: -0.5, y: 0.0, z: -3}), radius: 0.5}), ({center: ({x: 1.0, y: 0.0, z: -2.2}), radius: 0.5}) ], plane: ({p: ({x: 0.0, y: -0.5, z: 0.0}), n: ({x: 0.0, y: 1.0, z: 0.0})})});
	t0 = Date.now();
	AOBench$render$LAOBench$F$IIIIIV$II(ao, (function (x, y, r, g, b) {
		ctx.fillStyle = "rgb(" + (r + "") + "," + (g + "") + "," + (b + "") + ")";
		ctx.fillRect(x, y, 1, 1);
	}), (canvas.width | 0), (canvas.height | 0));
	t1 = Date.now();
	d = t1 - t0;
	dom.document.getElementById("status").innerHTML = "Time = " + (d + "") + "[ms]";
};

_Main.main = _Main$main$AS;
_Main.main$AS = _Main$main$AS;

function dom() {}
$__jsx_extend([dom], Object);
function dom$id$S(id) {
	return dom.document.getElementById(id);
};

dom.id$S = dom$id$S;

function dom$getElementById$S(id) {
	return dom.document.getElementById(id);
};

dom.getElementById$S = dom$getElementById$S;

function dom$createElement$S(tag) {
	return dom.document.createElement(tag);
};

dom.createElement$S = dom$createElement$S;

function EventInit() {
	this.bubbles = false;
	this.cancelable = false;
};

$__jsx_extend([EventInit], Object);
function CustomEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.detail = null;
};

$__jsx_extend([CustomEventInit], EventInit);
function MutationObserverInit() {
	this.childList = false;
	this.attributes = false;
	this.characterData = false;
	this.subtree = false;
	this.attributeOldValue = false;
	this.characterDataOldValue = false;
	this.attributeFilter = null;
};

$__jsx_extend([MutationObserverInit], Object);
function UIEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
};

$__jsx_extend([UIEventInit], EventInit);
function FocusEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.relatedTarget = null;
};

$__jsx_extend([FocusEventInit], Object);
function MouseEventInit() {
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

$__jsx_extend([MouseEventInit], UIEventInit);
function WheelEventInit() {
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

$__jsx_extend([WheelEventInit], Object);
function KeyboardEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.key = "";
	this.location = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.repeat = false;
	this.charCode = 0;
	this.keyCode = 0;
	this.which = 0;
};

$__jsx_extend([KeyboardEventInit], Object);
function CompositionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.data = null;
};

$__jsx_extend([CompositionEventInit], Object);
function ProgressEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.lengthComputable = false;
	this.loaded = 0;
	this.total = 0;
};

$__jsx_extend([ProgressEventInit], EventInit);
function XMLHttpRequestOptions() {
	this.anon = false;
};

$__jsx_extend([XMLHttpRequestOptions], Object);
function ScrollOptions() {
	this.behavior = "";
};

$__jsx_extend([ScrollOptions], Object);
function ScrollOptionsHorizontal() {
	this.behavior = "";
	this.x = 0;
};

$__jsx_extend([ScrollOptionsHorizontal], ScrollOptions);
function ScrollOptionsVertical() {
	this.behavior = "";
	this.y = 0;
};

$__jsx_extend([ScrollOptionsVertical], ScrollOptions);
function BoxQuadOptions() {
	this.box = "";
	this.relativeTo = null;
};

$__jsx_extend([BoxQuadOptions], Object);
function ConvertCoordinateOptions() {
	this.fromBox = "";
	this.toBox = "";
};

$__jsx_extend([ConvertCoordinateOptions], Object);
function TrackEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.track = null;
};

$__jsx_extend([TrackEventInit], EventInit);
function PopStateEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.state = null;
};

$__jsx_extend([PopStateEventInit], EventInit);
function HashChangeEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.oldURL = "";
	this.newURL = "";
};

$__jsx_extend([HashChangeEventInit], EventInit);
function PageTransitionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.persisted = false;
};

$__jsx_extend([PageTransitionEventInit], EventInit);
function ErrorEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.message = "";
	this.filename = "";
	this.lineno = 0;
	this.column = 0;
};

$__jsx_extend([ErrorEventInit], EventInit);
function DragEventInit() {
	MouseEventInit.call(this);
	this.dataTransfer = null;
};

$__jsx_extend([DragEventInit], MouseEventInit);
function CloseEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.wasClean = false;
	this.code = 0;
	this.reason = "";
};

$__jsx_extend([CloseEventInit], EventInit);
function StorageEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.key = null;
	this.oldValue = null;
	this.newValue = null;
	this.url = "";
	this.storageArea = null;
};

$__jsx_extend([StorageEventInit], EventInit);
function MessageEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.data = null;
	this.origin = "";
	this.lastEventId = "";
	this.source = null;
	this.ports = null;
};

$__jsx_extend([MessageEventInit], EventInit);
function EventSourceInit() {
	this.withCredentials = false;
};

$__jsx_extend([EventSourceInit], Object);
function IDBObjectStoreParameters() {
	this.keyPath = null;
	this.autoIncrement = false;
};

$__jsx_extend([IDBObjectStoreParameters], Object);
function IDBIndexParameters() {
	this.unique = false;
	this.multiEntry = false;
};

$__jsx_extend([IDBIndexParameters], Object);
function IDBVersionChangeEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.oldVersion = 0;
	this.newVersion = null;
};

$__jsx_extend([IDBVersionChangeEventInit], EventInit);
function NotificationOptions() {
	this.titleDir = "";
	this.body = "";
	this.bodyDir = "";
	this.tag = "";
	this.iconUrl = "";
};

$__jsx_extend([NotificationOptions], Object);
function DOMPointInit() {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.w = 0;
};

$__jsx_extend([DOMPointInit], Object);
function SourceInfo() {
	this.sourceId = "";
	this.kind = "";
	this.label = "";
};

$__jsx_extend([SourceInfo], Object);
function MediaStreamTrackEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.track = null;
};

$__jsx_extend([MediaStreamTrackEventInit], EventInit);
function MediaSourceStates() {
	this.sourceType = "";
	this.sourceId = "";
	this.width = null;
	this.height = null;
	this.frameRate = null;
	this.aspectRatio = null;
	this.facingMode = null;
	this.volume = null;
};

$__jsx_extend([MediaSourceStates], Object);
function CapabilityRange() {
	this.max = null;
	this.min = null;
	this.supported = false;
};

$__jsx_extend([CapabilityRange], Object);
function AllVideoCapabilities() {
	this.sourceType = null;
	this.sourceId = null;
	this.width = null;
	this.height = null;
	this.frameRate = null;
	this.aspectRatio = null;
	this.facingMode = null;
};

$__jsx_extend([AllVideoCapabilities], Object);
function AllAudioCapabilities() {
	this.volume = null;
};

$__jsx_extend([AllAudioCapabilities], Object);
function MediaStreamConstraints() {
	this.video = null;
	this.audio = null;
};

$__jsx_extend([MediaStreamConstraints], Object);
function MediaTrackConstraints() {
	this.mandatory = null;
	this._optional = null;
};

$__jsx_extend([MediaTrackConstraints], Object);
function MinMaxConstraint() {
	this.max = null;
	this.min = null;
};

$__jsx_extend([MinMaxConstraint], Object);
function HitRegionOptions() {
	this.path = null;
	this.id = "";
	this.parentID = null;
	this.cursor = "";
	this.control = null;
	this.label = null;
	this.role = null;
};

$__jsx_extend([HitRegionOptions], Object);
function WebGLContextAttributes() {
	this.alpha = false;
	this.depth = false;
	this.stencil = false;
	this.antialias = false;
	this.premultipliedAlpha = false;
	this.preserveDrawingBuffer = false;
};

$__jsx_extend([WebGLContextAttributes], Object);
function WebGLContextEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.statusMessage = "";
};

$__jsx_extend([WebGLContextEventInit], EventInit);
function DeviceOrientationEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.alpha = null;
	this.beta = null;
	this.gamma = null;
	this.absolute = false;
};

$__jsx_extend([DeviceOrientationEventInit], EventInit);
function DeviceMotionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.acceleration = null;
	this.accelerationIncludingGravity = null;
	this.rotationRate = null;
	this.interval = null;
};

$__jsx_extend([DeviceMotionEventInit], EventInit);
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
	return js$0.global.window;
});
$__jsx_lazy_init(dom, "document", function () {
	return js$0.global.document;
});

var $__jsx_classMap = {
	"system:web/example/aobench/aobench.jsx": {
		Config: Config,
		Config$: Config,
		vec3: vec3,
		vec3$NNN: vec3,
		Isect: Isect,
		Isect$: Isect,
		Ray: Ray,
		Ray$Lvec3$Lvec3$: Ray,
		Sphere: Sphere,
		Sphere$Lvec3$N: Sphere,
		Plane: Plane,
		Plane$Lvec3$Lvec3$: Plane,
		Random: Random,
		Random$: Random,
		AOBench: AOBench,
		AOBench$: AOBench,
		_Main: _Main,
		_Main$: _Main
	},
	"system:lib/js/js/web.jsx": {
		dom: dom,
		EventInit: EventInit,
		EventInit$: EventInit,
		CustomEventInit: CustomEventInit,
		CustomEventInit$: CustomEventInit,
		MutationObserverInit: MutationObserverInit,
		MutationObserverInit$: MutationObserverInit,
		UIEventInit: UIEventInit,
		UIEventInit$: UIEventInit,
		FocusEventInit: FocusEventInit,
		FocusEventInit$: FocusEventInit,
		MouseEventInit: MouseEventInit,
		MouseEventInit$: MouseEventInit,
		WheelEventInit: WheelEventInit,
		WheelEventInit$: WheelEventInit,
		KeyboardEventInit: KeyboardEventInit,
		KeyboardEventInit$: KeyboardEventInit,
		CompositionEventInit: CompositionEventInit,
		CompositionEventInit$: CompositionEventInit,
		ProgressEventInit: ProgressEventInit,
		ProgressEventInit$: ProgressEventInit,
		XMLHttpRequestOptions: XMLHttpRequestOptions,
		XMLHttpRequestOptions$: XMLHttpRequestOptions,
		ScrollOptions: ScrollOptions,
		ScrollOptions$: ScrollOptions,
		ScrollOptionsHorizontal: ScrollOptionsHorizontal,
		ScrollOptionsHorizontal$: ScrollOptionsHorizontal,
		ScrollOptionsVertical: ScrollOptionsVertical,
		ScrollOptionsVertical$: ScrollOptionsVertical,
		BoxQuadOptions: BoxQuadOptions,
		BoxQuadOptions$: BoxQuadOptions,
		ConvertCoordinateOptions: ConvertCoordinateOptions,
		ConvertCoordinateOptions$: ConvertCoordinateOptions,
		TrackEventInit: TrackEventInit,
		TrackEventInit$: TrackEventInit,
		PopStateEventInit: PopStateEventInit,
		PopStateEventInit$: PopStateEventInit,
		HashChangeEventInit: HashChangeEventInit,
		HashChangeEventInit$: HashChangeEventInit,
		PageTransitionEventInit: PageTransitionEventInit,
		PageTransitionEventInit$: PageTransitionEventInit,
		ErrorEventInit: ErrorEventInit,
		ErrorEventInit$: ErrorEventInit,
		DragEventInit: DragEventInit,
		DragEventInit$: DragEventInit,
		CloseEventInit: CloseEventInit,
		CloseEventInit$: CloseEventInit,
		StorageEventInit: StorageEventInit,
		StorageEventInit$: StorageEventInit,
		MessageEventInit: MessageEventInit,
		MessageEventInit$: MessageEventInit,
		EventSourceInit: EventSourceInit,
		EventSourceInit$: EventSourceInit,
		IDBObjectStoreParameters: IDBObjectStoreParameters,
		IDBObjectStoreParameters$: IDBObjectStoreParameters,
		IDBIndexParameters: IDBIndexParameters,
		IDBIndexParameters$: IDBIndexParameters,
		IDBVersionChangeEventInit: IDBVersionChangeEventInit,
		IDBVersionChangeEventInit$: IDBVersionChangeEventInit,
		NotificationOptions: NotificationOptions,
		NotificationOptions$: NotificationOptions,
		DOMPointInit: DOMPointInit,
		DOMPointInit$: DOMPointInit,
		SourceInfo: SourceInfo,
		SourceInfo$: SourceInfo,
		MediaStreamTrackEventInit: MediaStreamTrackEventInit,
		MediaStreamTrackEventInit$: MediaStreamTrackEventInit,
		MediaSourceStates: MediaSourceStates,
		MediaSourceStates$: MediaSourceStates,
		CapabilityRange: CapabilityRange,
		CapabilityRange$: CapabilityRange,
		AllVideoCapabilities: AllVideoCapabilities,
		AllVideoCapabilities$: AllVideoCapabilities,
		AllAudioCapabilities: AllAudioCapabilities,
		AllAudioCapabilities$: AllAudioCapabilities,
		MediaStreamConstraints: MediaStreamConstraints,
		MediaStreamConstraints$: MediaStreamConstraints,
		MediaTrackConstraints: MediaTrackConstraints,
		MediaTrackConstraints$: MediaTrackConstraints,
		MinMaxConstraint: MinMaxConstraint,
		MinMaxConstraint$: MinMaxConstraint,
		HitRegionOptions: HitRegionOptions,
		HitRegionOptions$: HitRegionOptions,
		WebGLContextAttributes: WebGLContextAttributes,
		WebGLContextAttributes$: WebGLContextAttributes,
		WebGLContextEventInit: WebGLContextEventInit,
		WebGLContextEventInit$: WebGLContextEventInit,
		DeviceOrientationEventInit: DeviceOrientationEventInit,
		DeviceOrientationEventInit$: DeviceOrientationEventInit,
		DeviceMotionEventInit: DeviceMotionEventInit,
		DeviceMotionEventInit$: DeviceMotionEventInit
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
	JSX.runMain("system:web/example/aobench/aobench.jsx", []);
}

window.addEventListener("load", $__jsx_onload);
document.addEventListener("DOMContentLoaded", $__jsx_onload);

})(JSX);
