/* Copyright 2010 Google, Inc. All Rights Reserved. */
function k(a) {
    return function() {
        return this[a]
    }
}

function aa(a) {
    return function() {
        return a
    }
}
var n;
var ba = ba || {}, u = this;

function w(a) {
    return void 0 !== a
}

function ca() {}

function da(a) {
    a.Xb = function() {
        return a.nd ? a.nd : a.nd = new a
    }
}

function fa(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function ga(a) {
    return "array" == fa(a)
}

function ha(a) {
    var b = fa(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}

function x(a) {
    return "string" == typeof a
}

function ja(a) {
    return "function" == fa(a)
}

function ka(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}

function la(a) {
    return a[ma] || (a[ma] = ++na)
}
var ma = "closure_uid_" + (1E9 * Math.random() >>> 0),
    na = 0;

function pa(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function qa(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function y(a, b, c) {
    y = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? pa : qa;
    return y.apply(null, arguments)
}

function ra(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}
var C = Date.now || function() {
        return +new Date
    };

function D(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.D = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.xg = function(a, c, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[c].apply(a, g)
    }
};
var sa = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };

function ua(a, b) {
    var c = String(a).toLowerCase(),
        d = String(b).toLowerCase();
    return c < d ? -1 : c == d ? 0 : 1
}

function va(a) {
    if (!wa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(xa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ya, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(za, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Aa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ba, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Da, "&#0;"));
    return a
}
var xa = /&/g,
    ya = /</g,
    za = />/g,
    Aa = /"/g,
    Ba = /'/g,
    Da = /\x00/g,
    wa = /[\x00&<>"']/;

function Ea(a) {
    var b = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    }, c;
    c = u.document.createElement("div");
    return a.replace(Fa, function(a, e) {
        var f = b[a];
        if (f) return f;
        if ("#" == e.charAt(0)) {
            var g = Number("0" + e.substr(1));
            isNaN(g) || (f = String.fromCharCode(g))
        }
        f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, -1));
        return b[a] = f
    })
}

function Ga(a) {
    return a.replace(/&([^;]+);/g, function(a, c) {
        switch (c) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                if ("#" == c.charAt(0)) {
                    var d = Number("0" + c.substr(1));
                    if (!isNaN(d)) return String.fromCharCode(d)
                }
                return a
        }
    })
}
var Fa = /&([^;\s<&]+);?/g;

function Ha(a) {
    return Array.prototype.join.call(arguments, "")
}

function Ia(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
}

function Ja(a) {
    return String(a).replace(/\-([a-z])/g, function(a, c) {
        return c.toUpperCase()
    })
}

function Ka(a) {
    var b = x(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
        return b + e.toUpperCase()
    })
};

function La(a) {
    return 10 > a ? "0" + a : String(a)
}
var Ma = [, 31, , 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function Na(a, b) {
    return Ma[b] || Ma[a] || (Ma[a] = 28 + ((a & 3 ? 0 : a % 100 || !(a % 400)) ? 1 : 0))
}
var Oa = {};

function Pa(a, b) {
    var c = a << 4 | b;
    return Oa[c] || (Oa[c] = (new Date(a, b - 1, 1, 12, 0, 0, 0)).getDay())
}
var Ra = [, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];

function Ua(a, b, c) {
    a = 2 >= b || 29 - Na(a, 2);
    return Ra[b] + c - a
}

function Va(a) {
    var b = [];
    b.push(String(a.year), "-", La(a.month), "-", La(a.m));
    a.ac() || b.push("T", La(a.hour), ":", La(a.minute), ":", La(a.second), "Z");
    return b.join("")
};
var Wa = 1 / 131072;

function Xa(a) {
    if (28 > (a & 31)) return a + 1;
    var b = a >> 5 & 15;
    if ((a & 31) < (Ma[b] || Na((a >> 9) + 1970, 2))) return a + 1;
    var c = (a >> 9) + 1970;
    12 < ++b && (b = 1, ++c);
    return ((c - 1970 << 4) + b << 5) + 1 + a % 1
}

function Ya(a, b) {
    var c = a;
    a % 1 || (a += Wa);
    (b - Wa) % 1 || (b -= Wa);
    return function(d, e) {
        return d < b && (e > a || d >= c)
    }
};

function Za() {}
n = Za.prototype;
n.year = NaN;
n.month = NaN;
n.m = NaN;
n.hour = NaN;
n.minute = NaN;
n.second = NaN;
n.toString = function() {
    return this.b || (this.b = this.Gb())
};
n.F = function() {
    return this.j() | 0
};
n.min = function(a) {
    return this.j() < a.j() ? this : a
};
n.max = function(a) {
    return this.j() > a.j() ? this : a
};

function ab(a, b) {
    var c = cb(a);
    isNaN(a.year) || (c.year = NaN, c.month = NaN, c.m = db(a, b));
    isNaN(a.hour) || (c.hour -= b.hour, c.minute -= b.minute, c.second -= b.second);
    return new eb(c.m, c.hour, c.minute, c.second)
}

function db(a, b) {
    var c = a.year,
        d = a.month,
        e = a.m,
        f = b.year,
        g = b.month,
        h = b.m;
    return c == f ? Ua(c, d, e) - Ua(f, g, h) : Math.round((Date.UTC(c, d - 1, e) - Date.UTC(f, g - 1, h)) / 864E5)
}

function fb(a) {
    var b = a.year,
        c = a.month;
    a = a.m;
    28 < ++a && a > Na(b, c) && (a = 1, 13 === ++c && (c = 1, ++b));
    return gb(b, c, a)
}

function hb(a) {
    return a.hour || a.minute || a.second ? fb(a) : a.u()
}

function ib(a, b) {
    return jb(a.year, a.month, a.m + b).u()
}

function kb(a, b) {
    return ib(a, -((a.ea() - b + 7) % 7))
}

function lb(a, b) {
    return ib(a, (b - a.ea() + 7) % 7)
}
n.ea = function() {
    var a = this.m;
    return (Pa(this.year, this.month) + a - 1) % 7
};
n.u = function() {
    return gb(this.year || 0, this.month || 1, this.m || 1)
};
n.wa = function() {
    return new mb(this.year || 0, this.month || 1, this.m || 1, this.hour || 0, this.minute || 0, this.second || 0)
};
n.Hb = function() {
    return new nb(this.hour || 0, this.minute || 0, this.second || 0)
};

function ob(a) {
    return 60 * a.hour + a.minute
};

function pb() {}
D(pb, Za);
pb.prototype.ac = aa(!1);

function nb(a, b, c) {
    this.hour = a;
    this.minute = b;
    this.second = c
}
D(nb, Za);
nb.prototype.Hb = function() {
    return this
};
nb.prototype.Gb = function() {
    return Ha("T", La(this.hour), La(this.minute), La(this.second))
};
nb.prototype.H = function(a) {
    return !!a && this.constructor === a.constructor && this.j() == a.j()
};
nb.prototype.j = function() {
    return this.a || (this.a = (((this.hour << 6) + this.minute << 6) + this.second + 1) * Wa)
};

function mb(a, b, c, d, e, f) {
    this.year = a;
    this.month = b;
    this.m = c;
    this.hour = d;
    this.minute = e;
    this.second = f
}
D(mb, pb);
mb.prototype.wa = function() {
    return this
};
mb.prototype.j = function() {
    return this.a || (this.a = ((this.year - 1970 << 4) + this.month << 5) + this.m + (((this.hour << 6) + this.minute << 6) + this.second + 1) * Wa)
};
mb.prototype.Gb = function() {
    return Ha(String(this.year), La(this.month), La(this.m), "T", La(this.hour), La(this.minute), La(this.second))
};
mb.prototype.H = function(a) {
    return !!a && this.constructor === a.constructor && this.j() == a.j()
};

function qb(a) {
    return new mb(a.getUTCFullYear(), a.getUTCMonth() + 1, a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds())
}

function rb(a) {
    return new mb(a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds())
};

function tb() {}
D(tb, pb);
n = tb.prototype;
n.ac = aa(!0);

function ub(a, b, c, d) {
    var e = new tb;
    e.year = a;
    e.month = b;
    e.m = c;
    e.a = d;
    return yb[d] = e
}
n.u = function() {
    return this
};
n.j = k("a");
n.Gb = function() {
    return Ha(String(this.year), La(this.month), La(this.m))
};
n.H = function(a) {
    return this === a
};
var yb = {};

function gb(a, b, c) {
    var d = ((a - 1970 << 4) + b << 5) + c;
    return yb[d] || ub(a, b, c, d)
}

function zb(a) {
    return yb[a] || ub((a >> 9) + 1970, a >> 5 & 15, a & 31, a)
}

function Ab(a) {
    return gb(a.getUTCFullYear(), a.getUTCMonth() + 1, a.getUTCDate())
};

function eb(a, b, c, d) {
    this.c = a = 60 * (60 * (24 * a + b) + c) + d;
    this.second = a % 60;
    a = a / 60 | 0;
    this.minute = a % 60;
    a = a / 60 | 0;
    this.hour = a % 24;
    this.m = a / 24 | 0
}
D(eb, Za);
eb.prototype.j = function() {
    return this.a || (this.a = this.m + (((this.hour << 6) + this.minute << 6) + this.second + 1) * Wa)
};
eb.prototype.Gb = function() {
    var a = this.hour || this.minute || this.second || 0,
        b = this.m || a,
        b = 0 > b ? -1 : 0 < b ? 1 : 0,
        c = 0 > b ? "-P" : "P";
    this.m && (c = this.m % 7 ? c + (b * this.m + "D") : c + (b * this.m / 7 + "W"));
    a ? (c += "T", this.hour && (c += b * this.hour + "H"), this.minute && (c += b * this.minute + "M"), this.second && (c += b * this.second + "S")) : b || (c += "0D");
    return c
};
eb.prototype.H = function(a) {
    return !!a && this.constructor === a.constructor && this.j() == a.j()
};

function Bb() {}
D(Bb, Za);
n = Bb.prototype;
n.year = 0;
n.month = 0;
n.m = 0;
n.hour = 0;
n.minute = 0;
n.second = 0;
n.j = function() {
    var a = this.F();
    isNaN(this.hour) || (a += (((this.hour << 6) + this.minute << 6) + this.second + 1) * Wa);
    return a
};
n.F = function() {
    Cb(this);
    return ((this.year - 1970 << 4) + this.month << 5) + this.m
};

function Db(a, b) {
    a.m += b.m;
    a.hour += b.hour;
    a.minute += b.minute;
    a.second += b.second
}

function Cb(a) {
    if (a.hour || a.minute || a.second) {
        var b = 60 * (60 * a.hour + a.minute) + a.second,
            c = Math.floor(b / 86400),
            b = b - 86400 * c;
        a.m += c;
        a.second = b % 60;
        b /= 60;
        a.minute = (b | 0) % 60;
        a.hour = (b / 60 | 0) % 24
    }
    Eb(a);
    for (b = Na(a.year, a.month); 1 > a.m;)--a.month, Eb(a), b = Na(a.year, a.month), a.m += b;
    for (; a.m > b;) a.m -= b, a.month += 1, Eb(a), b = Na(a.year, a.month)
}

function Eb(a) {
    var b;
    if (1 > a.month || 12 < a.month) b = Math.floor((a.month - 1) / 12), a.month -= 12 * b, a.year += b
}
n.u = function() {
    Cb(this);
    return gb(this.year, this.month, this.m)
};
n.wa = function() {
    Cb(this);
    return new mb(this.year, this.month, this.m, this.hour, this.minute, this.second)
};
n.Hb = function() {
    Cb(this);
    return new nb(this.hour, this.minute, this.second)
};
n.ea = function() {
    Cb(this);
    var a = this.m;
    return (Pa(this.year, this.month) + a - 1) % 7
};
n.H = function(a) {
    return !!a && this.constructor == a.constructor && this.j() == a.j()
};

function cb(a) {
    return Fb(a.year || 0, a.month || 0, a.m || 0, a.hour || 0, a.minute || 0, a.second || 0)
}

function Fb(a, b, c, d, e, f) {
    var g = new Bb;
    g.year = a;
    g.month = b;
    g.m = c;
    g.hour = d;
    g.minute = e;
    g.second = f;
    return g
}

function jb(a, b, c) {
    var d = new Bb;
    d.year = a;
    d.month = b;
    d.m = c;
    return d
};

function E(a, b) {
    this.start = a;
    if (b.constructor === eb) {
        var c = cb(a);
        Db(c, b);
        this.end = this.start instanceof mb ? c.wa() : c.u();
        this.duration = b
    } else this.end = b, this.duration = ab(this.end, this.start)
}
E.prototype.toString = function() {
    return this.start + "/" + this.end
};
E.prototype.H = function(a) {
    return !!a && this.constructor === a.constructor && this.start.H(a.start) && this.end.H(a.end)
};
E.prototype.contains = function(a) {
    a = a.j();
    return a >= this.start.j() && a < this.end.j()
};

function Gb(a, b) {
    return 10 * a.charCodeAt(b) + a.charCodeAt(b + 1) - 528
}

function Hb(a) {
    var b = parseInt(a, 10),
        c = b % 100,
        b = b / 100,
        d = (b | 0) % 100,
        b = b / 100 | 0;
    return 8 == a.length ? gb(b, d, c) : new mb(b, d, c, Gb(a, 9), Gb(a, 11), Gb(a, 13))
}

function Ib(a, b, c) {
    var d = parseInt(a, 10),
        e = Gb(a, 5),
        f = Gb(a, 8),
        g = a.length;
    if (84 == a.charCodeAt(10)) {
        var h = Gb(a, 11),
            l = Gb(a, 14),
            m = Gb(a, 17);
        b || c ? (c = Date.UTC(d, e - 1, f, h, l, m), d = 0, 90 != a.charCodeAt(g - 1) && (d = 60 * Gb(a, g - 5) + Gb(a, g - 2), d *= 44 - a.charCodeAt(g - 6)), a = (b ? rb : qb)(new Date(c - 6E4 * d))) : a = new mb(d, e, f, h, l, m)
    } else a = gb(d, e, f);
    return a
};
var Jb;

function Kb(a) {
    Kb[" "](a);
    return a
}
Kb[" "] = ca;

function Lb(a, b) {
    try {
        return Kb(a[b]), !0
    } catch (c) {}
    return !1
};
var Ob = Array.prototype.indexOf ? function(a, b, c) {
        return Array.prototype.indexOf.call(a, b, c)
    } : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (x(a)) return x(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }, Pb = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = x(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }, Qb = Array.prototype.filter ? function(a, b, c) {
        return Array.prototype.filter.call(a,
            b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = [], f = 0, g = x(a) ? a.split("") : a, h = 0; h < d; h++)
            if (h in g) {
                var l = g[h];
                b.call(c, l, h, a) && (e[f++] = l)
            }
        return e
    }, Rb = Array.prototype.map ? function(a, b, c) {
        return Array.prototype.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = x(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    }, Sb = Array.prototype.some ? function(a, b, c) {
        return Array.prototype.some.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = x(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in
                e && b.call(c, e[f], f, a)) return !0;
        return !1
    };

function Tb(a) {
    var b;
    a: {
        b = Ub;
        for (var c = a.length, d = x(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break a
            }
        b = -1
    }
    return 0 > b ? null : x(a) ? a.charAt(b) : a[b]
}

function Vb(a, b) {
    var c = Ob(a, b),
        d;
    (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
    return d
}

function Wb(a) {
    return Array.prototype.concat.apply(Array.prototype, arguments)
}

function Xb(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
    }
    return []
}

function $b(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (ha(d)) {
            var e = a.length || 0,
                f = d.length || 0;
            a.length = e + f;
            for (var g = 0; g < f; g++) a[e + g] = d[g]
        } else a.push(d)
    }
}

function ac(a, b, c, d) {
    Array.prototype.splice.apply(a, bc(arguments, 1))
}

function bc(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
}

function cc(a, b) {
    for (var c = dc, d = 0, e = a.length, f; d < e;) {
        var g = d + e >> 1,
            h;
        h = c(b, a[g]);
        0 < h ? d = g + 1 : (e = g, f = !h)
    }
    return f ? d : ~d
}

function ec(a, b) {
    a.sort(b || dc)
}

function dc(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
}

function fc(a) {
    for (var b = [], c = 0; c < a; c++) b[c] = 0;
    return b
};

function gc(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
}

function hc(a) {
    var b = [],
        c = 0,
        d;
    for (d in a) b[c++] = a[d];
    return b
}

function ic(a) {
    var b = [],
        c = 0,
        d;
    for (d in a) b[c++] = d;
    return b
}

function jc(a, b) {
    return null !== a && b in a
}

function kc(a) {
    for (var b in a) return !1;
    return !0
}

function lc(a) {
    var b = {}, c;
    for (c in a) b[c] = a[c];
    return b
}
var mc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function nc(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < mc.length; f++) c = mc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
}

function oc(a) {
    var b = arguments.length;
    if (1 == b && ga(arguments[0])) return oc.apply(null, arguments[0]);
    if (b % 2) throw Error("Uneven number of arguments");
    for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
    return c
}

function pc(a) {
    var b = arguments.length;
    if (1 == b && ga(arguments[0])) return pc.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
    return c
};
var qc;
a: {
    var rc = u.navigator;
    if (rc) {
        var sc = rc.userAgent;
        if (sc) {
            qc = sc;
            break a
        }
    }
    qc = ""
}

function F(a) {
    return -1 != qc.indexOf(a)
};
var tc = F("Opera") || F("OPR"),
    G = F("Trident") || F("MSIE"),
    uc = F("Edge"),
    vc = uc || G,
    wc = F("Gecko") && !(-1 != qc.toLowerCase().indexOf("webkit") && !F("Edge")) && !(F("Trident") || F("MSIE")) && !F("Edge"),
    xc = -1 != qc.toLowerCase().indexOf("webkit") && !F("Edge"),
    yc = F("Macintosh"),
    zc = F("Windows");

function Ac() {
    var a = qc;
    if (wc) return /rv\:([^\);]+)(\)|;)/.exec(a);
    if (uc) return /Edge\/([\d\.]+)/.exec(a);
    if (G) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (xc) return /WebKit\/(\S+)/.exec(a)
}

function Bc() {
    var a = u.document;
    return a ? a.documentMode : void 0
}
var Cc = function() {
    if (tc && u.opera) {
        var a;
        var b = u.opera.version;
        try {
            a = b()
        } catch (c) {
            a = b
        }
        return a
    }
    a = "";
    (b = Ac()) && (a = b ? b[1] : "");
    return G && (b = Bc(), b > parseFloat(a)) ? String(b) : a
}(),
    Dc = {};

function H(a) {
    var b;
    if (!(b = Dc[a])) {
        b = 0;
        for (var c = sa(String(Cc)).split("."), d = sa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var g = c[f] || "",
                h = d[f] || "",
                l = RegExp("(\\d*)(\\D*)", "g"),
                m = RegExp("(\\d*)(\\D*)", "g");
            do {
                var p = l.exec(g) || ["", "", ""],
                    q = m.exec(h) || ["", "", ""];
                if (0 == p[0].length && 0 == q[0].length) break;
                b = Ia(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == q[1].length ? 0 : parseInt(q[1], 10)) || Ia(0 == p[2].length, 0 == q[2].length) || Ia(p[2], q[2])
            } while (0 == b)
        }
        b = Dc[a] = 0 <= b
    }
    return b
}
var Ec = u.document,
    Fc = Ec && G ? Bc() || ("CSS1Compat" == Ec.compatMode ? parseInt(Cc, 10) : 5) : void 0;
var Gc = !G || 9 <= Fc,
    Hc = !G || 9 <= Fc,
    Ic = G && !H("9");
!xc || H("528");
wc && H("1.9b") || G && H("8") || tc && H("9.5") || xc && H("528");
wc && !H("8") || G && H("9");

function I() {
    this.I = this.I;
    this.W = this.W
}
I.prototype.I = !1;
I.prototype.isDisposed = k("I");
I.prototype.M = function() {
    this.I || (this.I = !0, this.v())
};
I.prototype.v = function() {
    if (this.W)
        for (; this.W.length;) this.W.shift()()
};

function Jc(a) {
    a && "function" == typeof a.M && a.M()
};

function Kc(a, b) {
    this.type = a;
    this.a = this.target = b;
    this.c = !1;
    this.Ad = !0
}
Kc.prototype.stopPropagation = function() {
    this.c = !0
};
Kc.prototype.preventDefault = function() {
    this.Ad = !1
};

function Lc(a, b) {
    Kc.call(this, a ? a.type : "");
    this.a = this.target = null;
    this.keyCode = this.clientY = this.clientX = 0;
    this.i = this.f = this.h = this.g = this.Ka = !1;
    this.b = null;
    a && this.init(a, b)
}
D(Lc, Kc);
var Mc = [1, 4, 2];
Lc.prototype.init = function(a, b) {
    this.type = a.type;
    var c = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.a = b;
    var d = a.relatedTarget;
    d && wc && Lb(d, "nodeName");
    null === c ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== c.clientX ? c.clientX : c.pageX, this.clientY = void 0 !== c.clientY ? c.clientY : c.pageY);
    this.keyCode = a.keyCode || 0;
    this.Ka = a.ctrlKey;
    this.g = a.altKey;
    this.h = a.shiftKey;
    this.f = a.metaKey;
    this.i =
        yc ? a.metaKey : a.ctrlKey;
    this.b = a;
    a.defaultPrevented && this.preventDefault()
};

function Nc(a, b) {
    return Gc ? a.b.button == b : "click" == a.type ? 0 == b : !! (a.b.button & Mc[b])
}
Lc.prototype.stopPropagation = function() {
    Lc.D.stopPropagation.call(this);
    this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
};
Lc.prototype.preventDefault = function() {
    Lc.D.preventDefault.call(this);
    var a = this.b;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, Ic) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
var Oc = "closure_listenable_" + (1E6 * Math.random() | 0);

function Pc(a) {
    return !(!a || !a[Oc])
}
var Qc = 0;

function Rc(a, b, c, d, e) {
    this.listener = a;
    this.a = null;
    this.src = b;
    this.type = c;
    this.rb = !! d;
    this.zb = e;
    this.Ye = ++Qc;
    this.Pa = this.qb = !1
}

function Sc(a) {
    a.Pa = !0;
    a.listener = null;
    a.a = null;
    a.src = null;
    a.zb = null
};

function Tc(a) {
    this.src = a;
    this.a = {};
    this.b = 0
}

function Uc(a, b, c, d, e, f) {
    var g = b.toString();
    b = a.a[g];
    b || (b = a.a[g] = [], a.b++);
    var h = Vc(b, c, e, f); - 1 < h ? (a = b[h], d || (a.qb = !1)) : (a = new Rc(c, a.src, g, !! e, f), a.qb = d, b.push(a));
    return a
}

function Wc(a, b) {
    var c = b.type;
    if (!(c in a.a)) return !1;
    var d = Vb(a.a[c], b);
    d && (Sc(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
    return d
}

function Xc(a) {
    var b = 0,
        c;
    for (c in a.a) {
        for (var d = a.a[c], e = 0; e < d.length; e++)++b, Sc(d[e]);
        delete a.a[c];
        a.b--
    }
}

function Vc(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.Pa && f.listener == b && f.rb == !! c && f.zb == d) return e
    }
    return -1
};
var Yc = "closure_lm_" + (1E6 * Math.random() | 0),
    Zc = {}, $c = 0;

function J(a, b, c, d, e) {
    if (ga(b)) {
        for (var f = 0; f < b.length; f++) J(a, b[f], c, d, e);
        return null
    }
    c = ad(c);
    return Pc(a) ? Uc(a.ca, String(b), c, !1, d, e) : bd(a, b, c, !1, d, e)
}

function bd(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var g = !! e,
        h = cd(a);
    h || (a[Yc] = h = new Tc(a));
    c = Uc(h, b, c, d, e, f);
    if (c.a) return c;
    d = dd();
    c.a = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener) a.addEventListener(b.toString(), d, g);
    else if (a.attachEvent) a.attachEvent(ed(b.toString()), d);
    else throw Error("addEventListener and attachEvent are unavailable.");
    $c++;
    return c
}

function dd() {
    var a = fd,
        b = Hc ? function(c) {
            return a.call(b.src, b.listener, c)
        } : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c
        };
    return b
}

function gd(a, b, c, d, e) {
    if (ga(b))
        for (var f = 0; f < b.length; f++) gd(a, b[f], c, d, e);
    else c = ad(c), Pc(a) ? Uc(a.ca, String(b), c, !0, d, e) : bd(a, b, c, !0, d, e)
}

function hd(a, b, c, d, e) {
    if (ga(b))
        for (var f = 0; f < b.length; f++) hd(a, b[f], c, d, e);
    else(c = ad(c), Pc(a)) ? (a = a.ca, b = String(b).toString(), b in a.a && (f = a.a[b], c = Vc(f, c, d, e), -1 < c && (Sc(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = cd(a)) && (b = a.a[b.toString()], a = -1, b && (a = Vc(b, c, !! d, e)), (c = -1 < a ? b[a] : null) && id(c))
}

function id(a) {
    if ("number" == typeof a || !a || a.Pa) return !1;
    var b = a.src;
    if (Pc(b)) return Wc(b.ca, a);
    var c = a.type,
        d = a.a;
    b.removeEventListener ? b.removeEventListener(c, d, a.rb) : b.detachEvent && b.detachEvent(ed(c), d);
    $c--;
    (c = cd(b)) ? (Wc(c, a), 0 == c.b && (c.src = null, b[Yc] = null)) : Sc(a);
    return !0
}

function ed(a) {
    return a in Zc ? Zc[a] : Zc[a] = "on" + a
}

function jd(a, b, c, d) {
    var e = !0;
    if (a = cd(a))
        if (b = a.a[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.rb == c && !f.Pa && (f = kd(f, d), e = e && !1 !== f)
            }
        return e
}

function kd(a, b) {
    var c = a.listener,
        d = a.zb || a.src;
    a.qb && id(a);
    return c.call(d, b)
}

function fd(a, b) {
    if (a.Pa) return !0;
    if (!Hc) {
        var c;
        if (!(c = b)) a: {
            c = ["window", "event"];
            for (var d = u, e; e = c.shift();)
                if (null != d[e]) d = d[e];
                else {
                    c = null;
                    break a
                }
            c = d
        }
        e = c;
        c = new Lc(e, this);
        d = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
            a: {
                var f = !1;
                if (0 == e.keyCode) try {
                    e.keyCode = -1;
                    break a
                } catch (l) {
                    f = !0
                }
                if (f || void 0 == e.returnValue) e.returnValue = !0
            }
            e = [];
            for (f = c.a; f; f = f.parentNode) e.push(f);
            for (var f = a.type, g = e.length - 1; !c.c && 0 <= g; g--) {
                c.a = e[g];
                var h = jd(e[g], f, !0, c),
                    d = d && h
            }
            for (g = 0; !c.c && g < e.length; g++) c.a = e[g], h = jd(e[g],
                f, !1, c), d = d && h
        }
        return d
    }
    return kd(a, new Lc(b, this))
}

function cd(a) {
    a = a[Yc];
    return a instanceof Tc ? a : null
}
var ld = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function ad(a) {
    if (ja(a)) return a;
    a[ld] || (a[ld] = function(b) {
        return a.handleEvent(b)
    });
    return a[ld]
};

function L() {
    I.call(this);
    this.ca = new Tc(this);
    this.Pd = this;
    this.T = null
}
D(L, I);
L.prototype[Oc] = !0;
L.prototype.Ra = function(a) {
    this.T = a
};
L.prototype.addEventListener = function(a, b, c, d) {
    J(this, a, b, c, d)
};
L.prototype.removeEventListener = function(a, b, c, d) {
    hd(this, a, b, c, d)
};

function M(a, b) {
    var c, d = a.T;
    if (d)
        for (c = []; d; d = d.T) c.push(d);
    var d = a.Pd,
        e = b,
        f = e.type || e;
    if (x(e)) e = new Kc(e, d);
    else if (e instanceof Kc) e.target = e.target || d;
    else {
        var g = e,
            e = new Kc(f, d);
        nc(e, g)
    }
    var g = !0,
        h;
    if (c)
        for (var l = c.length - 1; !e.c && 0 <= l; l--) h = e.a = c[l], g = pd(h, f, !0, e) && g;
    e.c || (h = e.a = d, g = pd(h, f, !0, e) && g, e.c || (g = pd(h, f, !1, e) && g));
    if (c)
        for (l = 0; !e.c && l < c.length; l++) h = e.a = c[l], g = pd(h, f, !1, e) && g;
    return g
}
L.prototype.v = function() {
    L.D.v.call(this);
    this.ca && Xc(this.ca);
    this.T = null
};

function pd(a, b, c, d) {
    b = a.ca.a[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.Pa && g.rb == c) {
            var h = g.listener,
                l = g.zb || g.src;
            g.qb && Wc(a.ca, g);
            e = !1 !== h.call(l, d) && e
        }
    }
    return e && 0 != d.Ad
};

function qd() {
    L.call(this)
}
D(qd, L);
n = qd.prototype;
n.gb = null;
n.ec = null;
n.ad = null;
n.jb = function(a, b, c) {
    this.S(c)
};
n.S = function(a) {
    this.jb(a, a, a)
};
n.Ha = function(a) {
    this.S(ib(0 < a ? this.c : this.a, a))
};
n.contains = function(a) {
    a = a.u();
    return a.j() >= this.a.j() && a.j() <= this.c.j()
};

function rd(a) {
    return db(a.c, a.a) + 1
}
n.set = function(a, b, c) {
    this.a = a;
    this.c = b;
    this.b = c;
    this.gb && this.b.H(this.ad) && this.a.H(this.gb) && this.c.H(this.ec) || (this.gb && (this.a.j() > this.gb.j() || (this.c.j(), this.ec.j())), this.ad = this.b, this.gb = this.a, this.ec = this.c, M(this, "change"))
};

function sd() {
    L.call(this)
}
D(sd, qd);
sd.prototype.jb = function(a, b, c) {
    this.f.jb(a, b, c)
};
sd.prototype.S = function(a) {
    this.f.S(a)
};
sd.prototype.Ha = function(a) {
    this.f.Ha(a)
};

function td(a, b) {
    a.f && id(a.h);
    a.f = b;
    a.h = J(b, "change", a.g, !1, a);
    a.g()
}
sd.prototype.g = function() {
    var a = this.f;
    this.set(a.a, a.c, a.b)
};

function ud() {
    L.call(this)
}
D(ud, qd);
ud.prototype.S = function(a) {
    this.set(a, a, a)
};

function vd(a) {
    L.call(this);
    this.f = a
}
D(vd, qd);
vd.prototype.S = function(a) {
    var b = kb(a, this.f.c),
        c;
    this.f.b || (b = lb(b, this.f.g));
    c = ib(b, this.f.f - 1);
    a = a.min(c).max(b);
    this.set(b, c, a)
};
vd.prototype.Ha = function(a) {
    this.S(ib(this.b, 7 * a))
};

function wd() {
    L.call(this)
}
D(wd, qd);
wd.prototype.S = function(a) {
    var b = a.year,
        c = a.month;
    this.set(gb(b, c, 1), gb(b, c, Na(b, c)), a)
};

function xd(a, b) {
    L.call(this);
    this.g = a;
    this.f = b
}
D(xd, qd);
xd.prototype.S = function(a) {
    var b = a;
    w(this.f) && (b = kb(a, this.f));
    var c = ib(b, this.g - 1);
    a = a.min(c);
    this.set(b, c, a)
};
xd.prototype.Ha = function(a) {
    a *= rd(this);
    this.set(ib(this.a, a), ib(this.c, a), ib(this.b, a))
};

function yd(a) {
    a = a.className;
    return x(a) && a.match(/\S+/g) || []
}

function zd(a, b, c) {
    for (var d = yd(a), e = !1, f = 0; f < d.length; f++) d[f] == b && (ac(d, f--, 1), e = !0);
    e && (d.push(c), a.className = d.join(" "))
};
var Ad = RegExp("[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"),
    Bd = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),
    Cd = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"),
    Dd = /^http:\/\/.*/,
    Ed = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g,
    Fd = /\s+/,
    Gd = /[\d\u06f0-\u06f9]/;

function Hd(a) {
    var b = 0,
        c = 0,
        d = !1;
    a = a.split(Fd);
    for (var e = 0; e < a.length; e++) {
        var f = a[e];
        Cd.test(f) ? (b++, c++) : Dd.test(f) ? d = !0 : Bd.test(f) ? c++ : Gd.test(f) && (d = !0)
    }
    return 0 == c ? d ? 1 : 0 : .4 < b / c ? -1 : 1
};

function Id() {
    this.a = Jd
}
var Jd = {};

function Kd() {
    this.b = Ld
}
Kd.prototype.a = aa(1);

function Md(a) {
    return a instanceof Kd && a.constructor === Kd && a.b === Ld ? "" : "type_error:SafeUrl"
}
var Ld = {};

function Nd() {
    this.b = Od
}
Nd.prototype.a = aa(1);

function Pd(a) {
    return a instanceof Nd && a.constructor === Nd && a.b === Od ? "" : "type_error:TrustedResourceUrl"
}
var Od = {};

function Qd() {
    this.c = "";
    this.f = Rd;
    this.b = null
}
Qd.prototype.a = k("b");
var Rd = {};

function Sd(a) {
    var b = new Qd;
    b.c = a;
    b.b = 0
}
Sd("<!DOCTYPE html>");
Sd("");

function Td(a, b, c) {
    return Math.min(Math.max(a, b), c)
};

function N(a, b) {
    this.x = w(a) ? a : 0;
    this.y = w(b) ? b : 0
}
N.prototype.clone = function() {
    return new N(this.x, this.y)
};

function Ud(a, b) {
    return new N(a.x - b.x, a.y - b.y)
}
N.prototype.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
N.prototype.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
N.prototype.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};

function Vd(a, b) {
    this.width = a;
    this.height = b
}
n = Vd.prototype;
n.clone = function() {
    return new Vd(this.width, this.height)
};
n.ee = function() {
    return this.width * this.height
};
n.Ma = function() {
    return !this.ee()
};
n.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
n.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
n.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var Wd = !G || 9 <= Fc;
!wc && !G || G && 9 <= Fc || wc && H("1.9.1");
G && H("9");

function Xd(a) {
    return a ? new Yd(Zd(a)) : Jb || (Jb = new Yd)
}

function $d(a, b) {
    return x(b) ? a.getElementById(b) : b
}

function ae(a, b) {
    gc(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : be.hasOwnProperty(d) ? a.setAttribute(be[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}
var be = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};

function ce(a) {
    a = a.document.documentElement;
    return new Vd(a.clientWidth, a.clientHeight)
}

function de(a) {
    return a.scrollingElement ? a.scrollingElement : xc ? a.body || a.documentElement : a.documentElement
}

function ee(a) {
    return a.parentWindow || a.defaultView
}

function fe(a, b, c) {
    function d(c) {
        c && b.appendChild(x(c) ? a.createTextNode(c) : c)
    }
    for (var e = 2; e < c.length; e++) {
        var f = c[e];
        !ha(f) || ka(f) && 0 < f.nodeType ? d(f) : Pb(ge(f) ? Xb(f) : f, d)
    }
}

function he(a) {
    for (var b; b = a.firstChild;) a.removeChild(b)
}

function ie(a, b) {
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
}

function Zd(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}

function je(a, b) {
    if ("textContent" in a) a.textContent = b;
    else if (3 == a.nodeType) a.data = b;
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = b
    } else he(a), a.appendChild(Zd(a).createTextNode(String(b)))
}

function ge(a) {
    if (a && "number" == typeof a.length) {
        if (ka(a)) return "function" == typeof a.item || "string" == typeof a.item;
        if (ja(a)) return "function" == typeof a.item
    }
    return !1
}

function ke(a, b) {
    if (!b) return null;
    var c = b ? b.toUpperCase() : null;
    return le(a, function(a) {
        return (!c || a.nodeName == c) && !0
    }, void 0)
}

function le(a, b, c) {
    for (var d = null == c, e = 0; a && (d || e <= c);) {
        if (b(a)) return a;
        a = a.parentNode;
        e++
    }
    return null
}

function Yd(a) {
    this.a = a || u.document || document
}
n = Yd.prototype;
n.o = function(a) {
    return $d(this.a, a)
};
n.We = function(a, b, c) {
    var d = this.a,
        e = arguments,
        f = e[0],
        g = e[1];
    if (!Wd && g && (g.name || g.type)) {
        f = ["<", f];
        g.name && f.push(' name="', va(g.name), '"');
        if (g.type) {
            f.push(' type="', va(g.type), '"');
            var h = {};
            nc(h, g);
            delete h.type;
            g = h
        }
        f.push(">");
        f = f.join("")
    }
    f = d.createElement(f);
    g && (x(g) ? f.className = g : ga(g) ? f.className = g.join(" ") : ae(f, g));
    2 < e.length && fe(d, f, e);
    return f
};
n.createElement = function(a) {
    return this.a.createElement(a)
};
n.Ve = function(a, b) {
    a.appendChild(b)
};
n.Xe = function(a) {
    a && a.parentNode && a.parentNode.removeChild(a)
};
n.contains = ie;
var me = {}, ne = {}, oe = {}, pe = {}, qe = {}, re = {};

function se() {
    throw Error("Do not instantiate directly");
}
se.prototype.ua = null;
se.prototype.toString = k("content");

function te(a, b, c) {
    a.innerHTML = ue(b(c || ve, void 0, void 0))
}

function we(a, b, c, d) {
    d = d || Xd();
    a = ue(a(b || ve, void 0, c));
    c = d.a;
    b = c.createElement("DIV");
    G ? (b.innerHTML = "<br>" + a, b.removeChild(b.firstChild)) : b.innerHTML = a;
    if (1 == b.childNodes.length) a = b.removeChild(b.firstChild);
    else
        for (a = c.createDocumentFragment(); b.firstChild;) a.appendChild(b.firstChild);
    return a
}

function xe(a, b) {
    var c = (b || Xd()).createElement("DIV"),
        d = ue(a);
    c.innerHTML = d;
    return 1 == c.childNodes.length && (d = c.firstChild, 1 == d.nodeType) ? d : c
}

function ue(a) {
    if (!ka(a)) return String(a);
    if (a instanceof se) {
        if (a.qa === me) return a.content;
        if (a.qa === re) return va(a.content)
    }
    return "zSoyz"
}
var ve = {};

function ye(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
n = ye.prototype;
n.getHeight = function() {
    return this.bottom - this.top
};
n.clone = function() {
    return new ye(this.top, this.right, this.bottom, this.left)
};
n.contains = function(a) {
    return this && a ? a instanceof ye ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
n.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
n.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
n.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};

function ze(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
n = ze.prototype;
n.clone = function() {
    return new ze(this.left, this.top, this.width, this.height)
};
n.contains = function(a) {
    return a instanceof ze ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
n.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
n.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
n.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};

function Ae(a, b, c) {
    var d = Be[c];
    if (!d) {
        var e = Ja(c),
            d = e;
        void 0 === a.style[e] && (e = (xc ? "Webkit" : wc ? "Moz" : G ? "ms" : tc ? "O" : null) + Ka(e), void 0 !== a.style[e] && (d = e));
        Be[c] = d
    }(c = d) && (a.style[c] = b)
}
var Be = {};

function Ce(a, b) {
    var c = Zd(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}

function De(a, b) {
    return Ce(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}

function Ee(a, b, c) {
    var d;
    b instanceof N ? (d = b.x, b = b.y) : (d = b, b = c);
    a.style.left = Ne(d);
    a.style.top = Ne(b)
}

function Oe(a) {
    return new N(a.offsetLeft, a.offsetTop)
}

function Pe(a) {
    a = a ? Zd(a) : document;
    var b;
    (b = !G || 9 <= Fc) || (Xd(a), b = !0);
    return b ? a.documentElement : a.body
}

function Qe(a) {
    var b;
    try {
        b = a.getBoundingClientRect()
    } catch (c) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    G && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}

function Re(a) {
    if (G && !(8 <= Fc)) return a.offsetParent;
    var b = Zd(a),
        c = De(a, "position"),
        d = "relative" == c || "relative" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (11 == a.nodeType && a.host && (a = a.host), c = De(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "relative" == c || "relative" == c || "relative" == c)) return a;
    return null
}

function Se(a) {
    for (var b = new ye(0, Infinity, Infinity, 0), c = Xd(a), d = c.a.body, e = c.a.documentElement, f = de(c.a); a = Re(a);)
        if (!(G && 0 == a.clientWidth || xc && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != De(a, "overflow")) {
            var g = Te(a),
                h = new N(a.clientLeft, a.clientTop);
            g.x += h.x;
            g.y += h.y;
            b.top = Math.max(b.top, g.y);
            b.right = Math.min(b.right, g.x + a.clientWidth);
            b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
            b.left = Math.max(b.left, g.x)
        }
    d = f.scrollLeft;
    f = f.scrollTop;
    b.left = Math.max(b.left, d);
    b.top = Math.max(b.top, f);
    c =
        ce(ee(c.a) || window);
    b.right = Math.min(b.right, d + c.width);
    b.bottom = Math.min(b.bottom, f + c.height);
    return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
}

function Te(a) {
    var b = Zd(a),
        c = new N(0, 0),
        d = Pe(b);
    if (a == d) return c;
    a = Qe(a);
    d = Xd(b).a;
    b = de(d);
    d = ee(d);
    b = G && H("10") && d.pageYOffset != b.scrollTop ? new N(b.scrollLeft, b.scrollTop) : new N(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c
}

function Ne(a) {
    "number" == typeof a && (a = a + "px");
    return a
}

function Ue(a) {
    var b = Ve;
    if ("none" != De(a, "display")) return b(a);
    var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
    c.visibility = "hidden";
    c.position = "relative";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
}

function Ve(a) {
    var b = a.offsetWidth,
        c = a.offsetHeight,
        d = xc && !b && !c;
    return w(b) && !d || !a.getBoundingClientRect ? new Vd(b, c) : (a = Qe(a), new Vd(a.right - a.left, a.bottom - a.top))
}

function We(a) {
    var b = Te(a);
    a = Ue(a);
    return new ze(b.x, b.y, a.width, a.height)
}

function Xe(a, b) {
    a.style.display = b ? "" : "none"
}

function Ye(a, b) {
    if (/^\d+px?$/.test(b)) return parseInt(b, 10);
    var c = a.style.left,
        d = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = b;
    var e = a.style.pixelLeft;
    a.style.left = c;
    a.runtimeStyle.left = d;
    return e
}

function Ze(a, b) {
    var c = a.currentStyle ? a.currentStyle[b] : null;
    return c ? Ye(a, c) : 0
}

function $e(a, b) {
    if (G) {
        var c = Ze(a, b + "Left"),
            d = Ze(a, b + "Right"),
            e = Ze(a, b + "Top"),
            f = Ze(a, b + "Bottom");
        return new ye(e, d, f, c)
    }
    c = Ce(a, b + "Left");
    d = Ce(a, b + "Right");
    e = Ce(a, b + "Top");
    f = Ce(a, b + "Bottom");
    return new ye(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(c))
}
var af = {
    thin: 2,
    medium: 4,
    thick: 6
};

function bf(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
    return c in af ? af[c] : Ye(a, c)
};
var cf = "StopIteration" in u ? u.StopIteration : {
    message: "StopIteration",
    stack: ""
};

function df() {}
df.prototype.next = function() {
    throw cf;
};
df.prototype.ae = function() {
    return this
};

function ef(a, b) {
    this.b = {};
    this.a = [];
    this.f = this.c = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else if (a) {
        a instanceof ef ? (c = a.na(), d = a.ga()) : (c = ic(a), d = hc(a));
        for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
    }
}
n = ef.prototype;
n.cd = k("c");
n.ga = function() {
    ff(this);
    for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
    return a
};
n.na = function() {
    ff(this);
    return this.a.concat()
};
n.H = function(a, b) {
    if (this === a) return !0;
    if (this.c != a.cd()) return !1;
    var c = b || gf;
    ff(this);
    for (var d, e = 0; d = this.a[e]; e++)
        if (!c(this.get(d), a.get(d))) return !1;
    return !0
};

function gf(a, b) {
    return a === b
}
n.Ma = function() {
    return 0 == this.c
};

function ff(a) {
    if (a.c != a.a.length) {
        for (var b = 0, c = 0; b < a.a.length;) {
            var d = a.a[b];
            hf(a.b, d) && (a.a[c++] = d);
            b++
        }
        a.a.length = c
    }
    if (a.c != a.a.length) {
        for (var e = {}, c = b = 0; b < a.a.length;) d = a.a[b], hf(e, d) || (a.a[c++] = d, e[d] = 1), b++;
        a.a.length = c
    }
}
n.get = function(a, b) {
    return hf(this.b, a) ? this.b[a] : b
};
n.set = function(a, b) {
    hf(this.b, a) || (this.c++, this.a.push(a), this.f++);
    this.b[a] = b
};
n.forEach = function(a, b) {
    for (var c = this.na(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);
        a.call(b, f, e, this)
    }
};
n.clone = function() {
    return new ef(this)
};
n.ae = function(a) {
    ff(this);
    var b = 0,
        c = this.f,
        d = this,
        e = new df;
    e.next = function() {
        if (c != d.f) throw Error("The map has changed since the iterator was created");
        if (b >= d.a.length) throw cf;
        var e = d.a[b++];
        return a ? e : d.b[e]
    };
    return e
};

function hf(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};

function jf(a) {
    if (a.ga && "function" == typeof a.ga) return a.ga();
    if (x(a)) return a.split("");
    if (ha(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    }
    return hc(a)
}

function kf(a, b) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
    else if (ha(a) || x(a)) Pb(a, b, void 0);
    else {
        var c;
        if (a.na && "function" == typeof a.na) c = a.na();
        else if (a.ga && "function" == typeof a.ga) c = void 0;
        else if (ha(a) || x(a)) {
            c = [];
            for (var d = a.length, e = 0; e < d; e++) c.push(e)
        } else c = ic(a);
        for (var d = jf(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
    }
};

function lf() {
    var a = [0, 10, 1, 2, 1, 18, 95, 33, 13, 1, 594, 112, 275, 7, 263, 45, 1, 1, 1, 2, 1, 2, 1, 1, 56, 5, 11, 11, 48, 21, 16, 1, 101, 7, 1, 1, 6, 2, 2, 1, 4, 33, 1, 1, 1, 30, 27, 91, 11, 58, 9, 34, 4, 1, 9, 1, 3, 1, 5, 43, 3, 136, 31, 1, 17, 37, 1, 1, 1, 1, 3, 8, 4, 1, 2, 1, 7, 8, 2, 2, 21, 8, 1, 2, 17, 39, 1, 1, 1, 2, 6, 6, 1, 9, 5, 4, 2, 2, 12, 2, 15, 2, 1, 17, 39, 2, 3, 12, 4, 8, 6, 17, 2, 3, 14, 1, 17, 39, 1, 1, 3, 8, 4, 1, 20, 2, 29, 1, 2, 17, 39, 1, 1, 2, 1, 6, 6, 9, 6, 4, 2, 2, 13, 1, 16, 1, 18, 41, 1, 1, 1, 12, 1, 9, 1, 41, 3, 17, 37, 4, 3, 5, 7, 8, 3, 2, 8, 2, 30, 2, 17, 39, 1, 1, 1, 1, 2, 1, 3, 1, 5, 1, 8, 9, 1, 3, 2, 30, 2, 17, 38, 3, 1, 2, 5, 7, 1, 9, 1, 10, 2, 30, 2, 22, 48, 5,
        1, 2, 6, 7, 19, 2, 13, 46, 2, 1, 1, 1, 6, 1, 12, 8, 50, 46, 2, 1, 1, 1, 9, 11, 6, 14, 2, 58, 2, 27, 1, 1, 1, 1, 1, 4, 2, 49, 14, 1, 4, 1, 1, 2, 5, 48, 9, 1, 57, 33, 12, 4, 1, 6, 1, 2, 2, 2, 1, 16, 2, 4, 2, 2, 4, 3, 1, 3, 2, 7, 3, 4, 13, 1, 1, 1, 2, 6, 1, 1, 14, 1, 98, 96, 72, 88, 349, 3, 931, 15, 2, 1, 14, 15, 2, 1, 14, 15, 2, 15, 15, 14, 35, 17, 2, 1, 7, 8, 1, 2, 9, 1, 1, 9, 1, 45, 3, 155, 1, 87, 31, 3, 4, 2, 9, 1, 6, 3, 20, 19, 29, 44, 9, 3, 2, 1, 69, 23, 2, 3, 4, 45, 6, 2, 1, 1, 1, 8, 1, 1, 1, 2, 8, 6, 13, 128, 4, 1, 14, 33, 1, 1, 5, 1, 1, 5, 1, 1, 1, 7, 31, 9, 12, 2, 1, 7, 23, 1, 4, 2, 2, 2, 2, 2, 11, 3, 2, 36, 2, 1, 1, 2, 3, 1, 1, 3, 2, 12, 36, 8, 8, 2, 2, 21, 3, 128, 3, 1, 13, 1, 7, 4, 1, 4, 2, 1, 203,
        64, 523, 1, 2, 2, 24, 7, 49, 16, 96, 33, 3070, 3, 141, 1, 96, 32, 554, 6, 105, 2, 30164, 4, 1, 10, 33, 1, 80, 2, 272, 1, 3, 1, 4, 1, 23, 2, 2, 1, 24, 30, 4, 4, 3, 8, 1, 1, 13, 2, 16, 34, 16, 1, 27, 18, 24, 24, 4, 8, 2, 23, 11, 1, 1, 12, 32, 3, 1, 5, 3, 3, 36, 1, 2, 4, 2, 1, 3, 1, 69, 35, 6, 2, 2, 2, 2, 12, 1, 8, 1, 1, 18, 16, 1, 3, 6, 1, 5, 48, 1, 1, 3, 2, 2, 5, 2, 1, 1, 32, 9, 1, 2, 2, 5, 1, 1, 201, 14, 2, 1, 1, 9, 8, 2, 1, 2, 1, 2, 1, 1, 1, 18, 11184, 27, 49, 1028, 1024, 6942, 1, 737, 16, 16, 7, 216, 1, 158, 2, 89, 3, 513, 1, 2051, 15, 40, 7, 1, 1472, 1, 1, 1, 53, 14, 1, 57, 2, 1, 45, 3, 4, 2, 1, 1, 2, 1, 66, 3, 36, 5, 1, 6, 2, 75, 2, 1, 48, 3, 9, 1, 1, 1258, 1, 1, 1, 2, 6, 1, 1, 22681, 62,
        4, 25042, 1, 1, 3, 3, 1, 5, 8, 8, 2, 7, 30, 4, 148, 3, 8097, 26, 790017, 255
    ],
        b = [1, 13, 1, 12, 1, 0, 1, 0, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1, 0, 2, 0, 2, 0, 2, 0, 2, 1, 0, 2, 0, 2, 0, 2, 0, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 4, 0, 5, 2, 4, 2, 0, 4, 2, 4, 6, 4, 0, 2, 5, 0, 2, 0, 5, 2, 4, 0, 5, 2, 0, 2, 4, 2, 4, 6, 0, 2, 5, 0, 2, 0, 5, 0, 2, 4, 0, 5, 2, 4, 2, 6, 2, 5, 0, 2, 0, 2, 4, 0, 5, 2, 0, 4, 2, 4, 6, 0, 2, 0, 2, 4, 0, 5, 2, 0, 2, 4, 2, 4, 6, 2, 5, 0, 2, 0, 5, 0, 2, 0, 5, 2, 4, 2, 4, 6, 0, 2, 0, 4, 0, 5, 0, 2, 4, 2, 6, 2, 5, 0, 2, 0, 4, 0, 5, 2, 0, 4, 2, 4, 2, 4, 2, 4, 2, 6, 2, 5, 0, 2, 0, 4, 0, 5, 0, 2, 4, 2, 4, 6, 0, 2, 0, 2, 0, 4, 0, 5, 6, 2, 4, 2, 4, 2, 4, 0, 5, 0, 2, 0, 4, 2, 6,
            0, 2, 0, 5, 0, 2, 0, 4, 2, 0, 2, 0, 5, 0, 2, 0, 2, 0, 2, 0, 2, 0, 4, 5, 2, 4, 2, 6, 0, 2, 0, 2, 0, 2, 0, 5, 0, 2, 4, 2, 0, 6, 4, 2, 5, 0, 5, 0, 4, 2, 5, 2, 5, 0, 5, 0, 5, 2, 5, 2, 0, 4, 2, 0, 2, 5, 0, 2, 0, 7, 8, 9, 0, 2, 0, 5, 2, 6, 0, 5, 2, 6, 0, 5, 2, 0, 5, 2, 5, 0, 2, 4, 2, 4, 2, 4, 2, 6, 2, 0, 2, 0, 2, 0, 2, 0, 5, 2, 4, 2, 4, 2, 4, 2, 0, 5, 0, 5, 0, 4, 0, 4, 0, 5, 2, 4, 0, 5, 0, 5, 4, 2, 4, 2, 6, 0, 2, 0, 2, 4, 2, 0, 2, 4, 0, 5, 2, 4, 2, 4, 2, 4, 2, 4, 6, 5, 0, 2, 0, 2, 4, 0, 5, 4, 2, 4, 2, 6, 4, 5, 0, 5, 0, 5, 0, 2, 4, 2, 4, 2, 4, 2, 6, 0, 5, 4, 2, 4, 2, 0, 5, 0, 2, 0, 2, 4, 2, 0, 2, 0, 4, 2, 0, 2, 0, 1, 2, 1, 0, 1, 0, 1, 0, 2, 0, 2, 0, 6, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 6, 5, 2, 5, 4, 2, 4, 0, 5, 0, 5, 0, 5, 0, 5, 0,
            4, 0, 5, 4, 6, 0, 2, 0, 5, 0, 2, 0, 5, 2, 4, 6, 0, 7, 2, 4, 0, 5, 0, 5, 2, 4, 2, 4, 2, 4, 6, 0, 5, 2, 4, 2, 4, 2, 0, 2, 0, 2, 4, 0, 5, 0, 5, 0, 5, 0, 5, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 5, 4, 2, 4, 0, 4, 6, 0, 5, 0, 5, 0, 5, 0, 4, 2, 4, 2, 4, 0, 4, 6, 0, 11, 8, 9, 0, 2, 0, 2, 0, 2, 0, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0, 2, 0, 2, 6, 0, 4, 2, 4, 0, 2, 6, 0, 2, 4, 0, 4, 2, 4, 6, 2, 0, 1, 0, 2, 0, 2, 4, 2, 6, 0, 2, 4, 0, 4, 2, 4, 6, 0, 2, 4, 2, 4, 2, 6, 2, 0, 4, 2, 0, 2, 4, 2, 0, 4, 2, 1, 2, 0, 2, 0, 2, 0, 2, 0, 14, 0, 1, 2
        ];
    this.a = null;
    if (a.length != b.length) return null;
    this.a = a;
    for (var c = 1; c < a.length; c++) null == a[c] ? a[c] = a[c - 1] + 1 : a[c] += a[c - 1];
    this.b = b
};
var mf = null;

function nf(a) {
    if (44032 <= a && 55203 >= a) return 16 == a % 28 ? 10 : 11;
    mf || (mf = new lf);
    for (var b = mf, c = b.a, d = 0, e = c.length; 8 < e - d;) {
        var f = e + d >> 1;
        c[f] <= a ? d = f : e = f
    }
    for (; d < e && !(a < c[d]); ++d);
    a = d - 1;
    return 0 > a ? null : b.b[a]
};

function of(a) {
    return 32 >= a || 4096 <= a && (8192 <= a && 8198 >= a || 8200 <= a && 8203 >= a || 5760 == a || 6158 == a || 8232 == a || 8233 == a || 8287 == a || 12288 == a)
}
var pf = G && H(8),
    qf = xc ? "<wbr></wbr>" : tc ? "&shy;" : pf ? "&#8203;" : "<wbr>";

function rf(a, b) {
    return null != a && a.qa === b
}

function sf(a) {
    if (null != a) switch (a.ua) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
    }
    return null
}

function tf() {
    se.call(this)
}
D(tf, se);
tf.prototype.qa = me;

function O(a) {
    if (null == a || a.qa !== me)
        if (a instanceof Qd) {
            var b = P,
                c;
            c = a instanceof Qd && a.constructor === Qd && a.f === Rd ? a.c : "type_error:SafeHtml";
            a = b(c, a.a())
        } else a = P(va(String(String(a))), sf(a));
    return a
}

function uf() {
    se.call(this)
}
D(uf, se);
uf.prototype.qa = ne;
uf.prototype.ua = 1;

function vf() {
    se.call(this)
}
D(vf, se);
vf.prototype.qa = oe;
vf.prototype.ua = 1;

function wf() {
    se.call(this)
}
D(wf, se);
wf.prototype.qa = pe;
wf.prototype.ua = 1;

function xf() {
    se.call(this)
}
D(xf, se);
xf.prototype.qa = {};
xf.prototype.ua = 1;

function yf() {
    se.call(this)
}
D(yf, se);
yf.prototype.qa = qe;
yf.prototype.ua = 1;

function zf(a) {
    function b(a) {
        this.content = a
    }
    b.prototype = a.prototype;
    return function(a) {
        return new b(String(a))
    }
}
var P = function(a) {
    function b(a) {
        this.content = a
    }
    b.prototype = a.prototype;
    return function(a, d) {
        var e = new b(String(a));
        void 0 !== d && (e.ua = d);
        return e
    }
}(tf),
    Af = zf(uf);
zf(vf);
zf(wf);
zf(xf);
var Bf = zf(yf);

function Cf(a, b) {
    function c() {}
    c.prototype = a;
    var d = new c,
        e;
    for (e in b) d[e] = b[e];
    return d
}

function Df(a) {
    function b(a) {
        this.content = a
    }
    b.prototype = a.prototype;
    return function(a) {
        return (a = String(a)) ? new b(a) : ""
    }
}
var Ef = function(a) {
    function b(a) {
        this.content = a
    }
    b.prototype = a.prototype;
    return function(a, d) {
        var e = String(a);
        if (!e) return "";
        e = new b(e);
        void 0 !== d && (e.ua = d);
        return e
    }
}(tf);
Df(uf);
Df(wf);
Df(vf);
Df(xf);
var Ff = Df(yf);

function Gf(a) {
    return O(a)
}

function Hf(a) {
    return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
}

function Q(a) {
    rf(a, me) ? (a = String(a.content).replace(If, "").replace(Jf, "&lt;"), a = String(a).replace(Kf, Lf)) : a = va(String(a));
    return a
}

function Mf(a) {
    rf(a, me) ? (a = String(a.content).replace(If, "").replace(Jf, "&lt;"), a = String(a).replace(Nf, Lf)) : a = String(a).replace(Of, Lf);
    return a
}

function S(a) {
    if (null == a) return " null ";
    if (rf(a, ne)) return a.content;
    switch (typeof a) {
        case "boolean":
        case "number":
            return " " + a + " ";
        default:
            return "'" + String(String(a)).replace(Pf, Qf) + "'"
    }
}

function Rf(a) {
    return String(a).replace(Sf, Tf)
}

function Uf(a) {
    rf(a, oe) || rf(a, pe) ? a = String(a).replace(Sf, Tf) : a instanceof Kd ? a = Rf(Md(a)) : a instanceof Nd ? a = Rf(Pd(a)) : (a = String(a), a = Vf.test(a) ? a.replace(Sf, Tf) : "#zSoyz");
    return a
}

function Wf(a) {
    rf(a, oe) || rf(a, pe) ? a = String(a).replace(Sf, Tf) : a instanceof Kd ? a = Rf(Md(a)) : a instanceof Nd ? a = Rf(Pd(a)) : (a = String(a), a = Xf.test(a) ? a.replace(Sf, Tf) : "about:invalid#zSoyz");
    return a
}

function T(a) {
    rf(a, qe) ? a = Hf(a.content) : null == a ? a = "" : a instanceof Id ? (a = a instanceof Id && a.constructor === Id && a.a === Jd ? "" : "type_error:SafeStyle", a = Hf(a)) : (a = String(a), a = Yf.test(a) ? a : "zSoyz");
    return a
}
var Zf = {
    "\x00": "&#0;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "-": "&#45;",
    "/": "&#47;",
    "<": "&lt;",
    "=": "&#61;",
    ">": "&gt;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
};

function Lf(a) {
    return Zf[a]
}
var $f = {
    "\x00": "\\x00",
    "\b": "\\x08",
    "\t": "\\t",
    "\n": "\\n",
    "\x0B": "\\x0b",
    "\f": "\\f",
    "\r": "\\r",
    '"': "\\x22",
    $: "\\x24",
    "&": "\\x26",
    "'": "\\x27",
    "(": "\\x28",
    ")": "\\x29",
    "*": "\\x2a",
    "+": "\\x2b",
    ",": "\\x2c",
    "-": "\\x2d",
    ".": "\\x2e",
    "/": "\\/",
    ":": "\\x3a",
    "<": "\\x3c",
    "=": "\\x3d",
    ">": "\\x3e",
    "?": "\\x3f",
    "[": "\\x5b",
    "\\": "\\\\",
    "]": "\\x5d",
    "^": "\\x5e",
    "{": "\\x7b",
    "|": "\\x7c",
    "}": "\\x7d",
    "\u0085": "\\x85",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
};

function Qf(a) {
    return $f[a]
}
var ag = {
    "\x00": "%00",
    "\u0001": "%01",
    "\u0002": "%02",
    "\u0003": "%03",
    "\u0004": "%04",
    "\u0005": "%05",
    "\u0006": "%06",
    "\u0007": "%07",
    "\b": "%08",
    "\t": "%09",
    "\n": "%0A",
    "\x0B": "%0B",
    "\f": "%0C",
    "\r": "%0D",
    "\u000e": "%0E",
    "\u000f": "%0F",
    "\u0010": "%10",
    "\u0011": "%11",
    "\u0012": "%12",
    "\u0013": "%13",
    "\u0014": "%14",
    "\u0015": "%15",
    "\u0016": "%16",
    "\u0017": "%17",
    "\u0018": "%18",
    "\u0019": "%19",
    "\u001a": "%1A",
    "\u001b": "%1B",
    "\u001c": "%1C",
    "\u001d": "%1D",
    "\u001e": "%1E",
    "\u001f": "%1F",
    " ": "%20",
    '"': "%22",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "<": "%3C",
    ">": "%3E",
    "\\": "%5C",
    "{": "%7B",
    "}": "%7D",
    "\u007f": "%7F",
    "\u0085": "%C2%85",
    "\u00a0": "%C2%A0",
    "\u2028": "%E2%80%A8",
    "\u2029": "%E2%80%A9",
    "\uff01": "%EF%BC%81",
    "\uff03": "%EF%BC%83",
    "\uff04": "%EF%BC%84",
    "\uff06": "%EF%BC%86",
    "\uff07": "%EF%BC%87",
    "\uff08": "%EF%BC%88",
    "\uff09": "%EF%BC%89",
    "\uff0a": "%EF%BC%8A",
    "\uff0b": "%EF%BC%8B",
    "\uff0c": "%EF%BC%8C",
    "\uff0f": "%EF%BC%8F",
    "\uff1a": "%EF%BC%9A",
    "\uff1b": "%EF%BC%9B",
    "\uff1d": "%EF%BC%9D",
    "\uff1f": "%EF%BC%9F",
    "\uff20": "%EF%BC%A0",
    "\uff3b": "%EF%BC%BB",
    "\uff3d": "%EF%BC%BD"
};

function Tf(a) {
    return ag[a]
}
var Kf = /[\x00\x22\x27\x3c\x3e]/g,
    Of = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
    Nf = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
    Pf = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
    Sf = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    Yf = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,
    Vf =
        /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
    Xf = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
    If = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    Jf = /</g;

function bg(a) {
    return P('<pre><div class="event-details-inner">' + O(a.Ee) + "</div></pre>")
}

function cg(a) {
    var b = a.height;
    a = a.id;
    return P('<div id="agenda' + Q(a) + '" class="agenda-scrollboxBoundary agenda"><div id="agendaEventContainer' + Q(a) + '" class="scrollbox" style="height:' + Q(T(b)) + ';position:relative"><div id="agendaScrollContent' + Q(a) + '" style="position:relative"><div id="agenda-underflow-top' + Q(a) + '" class="underflow-top"> </div><div id="eventContainer' + Q(a) + '"> </div></div><div id="agenda-underflow-bottom' + Q(a) + '" class="underflow-bot" style="height:100%"> </div></div></div>')
}

function dg(a) {
    var b = a.functionName,
        c = !! a.Dc,
        d = a.rd;
    return P(O(a.Cd) + '. <span class="agenda-more" onclick="' + Q(S(b)) + "(" + (c ? "true" : "false") + ');">' + O(d) + "</span>")
}

function eg(a) {
    var b, c = "";
    a = a.ab;
    for (var d = a.length, e = 0; e < d; e++) c += Gf(null == (b = a[e]) ? "" : b);
    return P(c)
};
var _dbmode = !1;
var fg = 0;

function gg() {}
gg.prototype.a = function(a) {
    return a
};

function hg() {
    var a = new gg;
    y(a.a, a)
};
hg();
var ig = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

function jg(a) {
    var b = a.match(ig);
    a = b[1];
    var c = b[2],
        d = b[3],
        b = b[4],
        e = "";
    a && (e += a + ":");
    d && (e += "//", c && (e += c + "@"), e += d, b && (e += ":" + b));
    return e
}

function kg(a, b) {
    if (a)
        for (var c = a.split("&"), d = 0; d < c.length; d++) {
            var e = c[d].indexOf("="),
                f = null,
                g = null;
            0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
            b(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
        }
}

function lg(a, b, c) {
    if (ga(b))
        for (var d = 0; d < b.length; d++) lg(a, String(b[d]), c);
    else null != b && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
}

function mg(a, b, c) {
    for (c = c || 0; c < b.length; c += 2) lg(b[c], b[c + 1], a);
    return a
}

function ng(a, b) {
    var c = 2 == arguments.length ? mg([a], arguments[1], 0) : mg([a], arguments, 1);
    if (c[1]) {
        var d = c[0],
            e = d.indexOf("#");
        0 <= e && (c.push(d.substr(e)), c[0] = d = d.substr(0, e));
        e = d.indexOf("?");
        0 > e ? c[1] = "?" : e == d.length - 1 && (c[1] = void 0)
    }
    return c.join("")
};

function og(a, b) {
    this.c = this.l = this.a = "";
    this.i = null;
    this.g = this.h = "";
    this.b = !1;
    var c;
    a instanceof og ? (this.b = w(b) ? b : a.b, pg(this, a.a), this.l = a.l, this.c = a.c, qg(this, a.i), this.h = a.h, rg(this, a.f.clone()), this.g = a.g) : a && (c = String(a).match(ig)) ? (this.b = !! b, pg(this, c[1] || "", !0), this.l = sg(c[2] || ""), this.c = sg(c[3] || "", !0), qg(this, c[4]), this.h = sg(c[5] || "", !0), rg(this, c[6] || "", !0), this.g = sg(c[7] || "")) : (this.b = !! b, this.f = new tg(null, 0, this.b))
}
og.prototype.toString = function() {
    var a = [],
        b = this.a;
    b && a.push(ug(b, vg, !0), ":");
    var c = this.c;
    if (c || "file" == b) a.push("//"), (b = this.l) && a.push(ug(b, vg, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.i, null != c && a.push(":", String(c));
    if (c = this.h) this.c && "/" != c.charAt(0) && a.push("/"), a.push(ug(c, "/" == c.charAt(0) ? wg : xg, !0));
    (c = this.f.toString()) && a.push("?", c);
    (c = this.g) && a.push("#", ug(c, yg));
    return a.join("")
};
og.prototype.clone = function() {
    return new og(this)
};

function pg(a, b, c) {
    a.a = c ? sg(b, !0) : b;
    a.a && (a.a = a.a.replace(/:$/, ""))
}

function qg(a, b) {
    if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
        a.i = b
    } else a.i = null
}

function rg(a, b, c) {
    b instanceof tg ? (a.f = b, zg(a.f, a.b)) : (c || (b = ug(b, Ag)), a.f = new tg(b, 0, a.b))
}
og.prototype.pd = aa(!1);

function sg(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
}

function ug(a, b, c) {
    return x(a) ? (a = encodeURI(a).replace(b, Bg), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
}

function Bg(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var vg = /[#\/\?@]/g,
    xg = /[\#\?:]/g,
    wg = /[\#\?]/g,
    Ag = /[\#\?@]/g,
    yg = /#/g;

function tg(a, b, c) {
    this.b = this.a = null;
    this.c = a || null;
    this.f = !! c
}

function Cg(a) {
    a.a || (a.a = new ef, a.b = 0, a.c && kg(a.c, function(b, c) {
        var d = decodeURIComponent(b.replace(/\+/g, " "));
        Cg(a);
        a.c = null;
        var d = Dg(a, d),
            e = a.a.get(d);
        e || a.a.set(d, e = []);
        e.push(c);
        a.b++
    }))
}
n = tg.prototype;
n.cd = function() {
    Cg(this);
    return this.b
};

function Eg(a, b) {
    Cg(a);
    b = Dg(a, b);
    if (hf(a.a.b, b)) {
        a.c = null;
        a.b -= a.a.get(b).length;
        var c = a.a;
        hf(c.b, b) && (delete c.b[b], c.c--, c.f++, c.a.length > 2 * c.c && ff(c))
    }
}
n.Ma = function() {
    Cg(this);
    return 0 == this.b
};

function Fg(a, b) {
    Cg(a);
    b = Dg(a, b);
    return hf(a.a.b, b)
}
n.na = function() {
    Cg(this);
    for (var a = this.a.ga(), b = this.a.na(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c
};
n.ga = function(a) {
    Cg(this);
    var b = [];
    if (x(a)) Fg(this, a) && (b = Wb(b, this.a.get(Dg(this, a))));
    else {
        a = this.a.ga();
        for (var c = 0; c < a.length; c++) b = Wb(b, a[c])
    }
    return b
};
n.set = function(a, b) {
    Cg(this);
    this.c = null;
    a = Dg(this, a);
    Fg(this, a) && (this.b -= this.a.get(a).length);
    this.a.set(a, [b]);
    this.b++;
    return this
};
n.get = function(a, b) {
    var c = a ? this.ga(a) : [];
    return 0 < c.length ? String(c[0]) : b
};
n.toString = function() {
    if (this.c) return this.c;
    if (!this.a) return "";
    for (var a = [], b = this.a.na(), c = 0; c < b.length; c++)
        for (var d = b[c], e = encodeURIComponent(String(d)), d = this.ga(d), f = 0; f < d.length; f++) {
            var g = e;
            "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
            a.push(g)
        }
    return this.c = a.join("&")
};
n.clone = function() {
    var a = new tg;
    a.c = this.c;
    this.a && (a.a = this.a.clone(), a.b = this.b);
    return a
};

function Dg(a, b) {
    var c = String(b);
    a.f && (c = c.toLowerCase());
    return c
}

function zg(a, b) {
    b && !a.f && (Cg(a), a.c = null, a.a.forEach(function(a, b) {
        var e = b.toLowerCase();
        b != e && (Eg(this, b), Eg(this, e), 0 < a.length && (this.c = null, this.a.set(Dg(this, e), Xb(a)), this.b += a.length))
    }, a));
    a.f = b
};
var Gg = /^(https?:\/\/[^/]*)\/calendar(\/((hosted)|(a)|(b))\/[^/]*)?/,
    Hg = "undefined" != typeof window ? window.location.href : "";
Hg.replace(/#.*/, "");

function Ig(a) {
    return !(!a || !a.match(/^(?:https?:)?\/\/(?:[^:\/]+\.)?google\.com(?::\d+)?(?:\/.*$|$)/))
}

function Jg(a) {
    return Ig(a) ? a.replace(/^https?:\/\//i, "//") : a
}

function Kg(a) {
    return (a = a.match(Gg)) && "b" == a[3] ? [a[1] + "/calendar", a[2]] : null
}

function Lg() {
    var a = Kg(Hg);
    return a ? parseInt(a[1].split("/")[2], 10) : null
}

function Mg(a) {
    a = a || "";
    a = a instanceof og ? a.clone() : new og(a, void 0);
    return "http" != a.a && "https" != a.a && "" != a.a ? "" : a.toString()
};

function Ng(a, b) {
    this.f = a;
    this.b = Mg(b)
}
var Og = /^[a-zA-Z0-9_]+$/;

function Pg(a) {
    return !!a.b && "CHIP" != a.c
};

function Qg(a, b, c, d, e) {
    this.A = a;
    this.C = b;
    this.O = c;
    a = b.j();
    this.b = isNaN(b.hour);
    this.c = c.j() >= Xa(a);
    this.I = !this.b && 0 == ob(c);
    this.s = (a << 1) + !this.c + a % 1;
    this.h = d ? d : 0;
    this.l = e || {}
}
Qg.prototype.a = O("");
Qg.prototype.f = "";
hg();
var Rg = {
    needsAction: 0,
    accepted: 1,
    declined: 2,
    tentative: 3
};
n = Qg.prototype;
n.Nb = -1;
n.getId = k("A");
n.J = k("C");

function Sg(a, b) {
    return b(a.J().j(), a.O.j())
}

function Tg(a) {
    return /^[\s\xa0]*$/.test(a.a.content) ? O("(No title)") : a.a
}
n.Z = aa(null);
n.H = function(a) {
    return this == a ? !0 : !! a && a.getId() == this.getId()
};

function Ug(a, b, c) {
    return b.s - c.s || c.O.j() - b.O.j() || a(b, c) || ua(b.a.content, c.a.content)
};

function mh(a, b, c) {
    Qg.call(this, a, b, c);
    this.W = []
}
D(mh, Qg);
n = mh.prototype;
n.Xc = null;
n.Ea = "";
n.Tb = null;
n.cb = !1;
n.Z = k("Xc");
n.Aa = k("Tb");

function nh(a, b) {
    return a.Aa() && b.Aa() && a.Aa().Pc(b.Aa()) || 0
}

function oh(a, b, c) {
    c = b.j() == c.j() ? c.ac() ? fb(c) : Fb(c.year, c.month, c.m, c.hour, c.minute, c.second + 1).wa() : c;
    return new mh(a, b, c)
};

function ph(a, b, c, d, e, f) {
    var g, h;
    if (g = c.offsetParent) {
        var l = "HTML" == g.tagName || "BODY" == g.tagName;
        l && "static" == De(g, "position") || (h = Te(g), l || (l = (l = "rtl" == De(g, "direction")) && wc ? -g.scrollLeft : !l || vc && H("8") || "visible" == De(g, "overflowX") ? g.scrollLeft : g.scrollWidth - g.clientWidth - g.scrollLeft, h = Ud(h, new N(l, g.scrollTop))))
    }
    g = h || new N;
    h = We(a);
    if (l = Se(a)) {
        var m = new ze(l.left, l.top, l.right - l.left, l.bottom - l.top),
            l = Math.max(h.left, m.left),
            p = Math.min(h.left + h.width, m.left + m.width);
        if (l <= p) {
            var q = Math.max(h.top,
                m.top),
                m = Math.min(h.top + h.height, m.top + m.height);
            q <= m && (h.left = l, h.top = q, h.width = p - l, h.height = m - q)
        }
    }
    l = Xd(a);
    p = Xd(c);
    if (l.a != p.a) {
        l = l.a.body;
        p = ee(p.a);
        q = new N(0, 0);
        m = (m = Zd(l)) ? ee(m) : window;
        if (Lb(m, "parent")) {
            var r = l;
            do {
                var v;
                m == p ? v = Te(r) : (v = Qe(r), v = new N(v.left, v.top));
                q.x += v.x;
                q.y += v.y
            } while (m && m != p && m != m.parent && (r = m.frameElement) && (m = m.parent))
        }
        l = Ud(q, Te(l));
        h.left += l.x;
        h.top += l.y
    }
    a = qh(a, b);
    a = new N(a & 2 ? h.left + h.width : h.left, a & 1 ? h.top + h.height : h.top);
    a = Ud(a, g);
    var t;
    f && (t = Se(c)) && (t.top -= g.y, t.right -=
        g.x, t.bottom -= g.y, t.left -= g.x);
    a = a.clone();
    g = qh(c, d);
    d = Ue(c);
    b = d.clone();
    a = a.clone();
    b = b.clone();
    h = 0;
    if (e || 0 != g) g & 2 ? a.x -= b.width + (e ? e.right : 0) : e && (a.x += e.left), g & 1 ? a.y -= b.height + (e ? e.bottom : 0) : e && (a.y += e.top);
    f && (t ? (e = a, g = b, h = 0, 65 == (f & 65) && (e.x < t.left || e.x >= t.right) && (f &= -2), 132 == (f & 132) && (e.y < t.top || e.y >= t.bottom) && (f &= -5), e.x < t.left && f & 1 && (e.x = t.left, h |= 1), f & 16 && (l = e.x, e.x < t.left && (e.x = t.left, h |= 4), e.x + g.width > t.right && (g.width = Math.min(t.right - e.x, l + g.width - t.left), g.width = Math.max(g.width, 0),
        h |= 4)), e.x + g.width > t.right && f & 1 && (e.x = Math.max(t.right - g.width, t.left), h |= 1), f & 2 && (h = h | (e.x < t.left ? 16 : 0) | (e.x + g.width > t.right ? 32 : 0)), e.y < t.top && f & 4 && (e.y = t.top, h |= 2), f & 32 && (l = e.y, e.y < t.top && (e.y = t.top, h |= 8), e.y + g.height > t.bottom && (g.height = Math.min(t.bottom - e.y, l + g.height - t.top), g.height = Math.max(g.height, 0), h |= 8)), e.y + g.height > t.bottom && f & 4 && (e.y = Math.max(t.bottom - g.height, t.top), h |= 2), f & 8 && (h = h | (e.y < t.top ? 64 : 0) | (e.y + g.height > t.bottom ? 128 : 0)), f = h) : f = 256, h = f);
    f = new ze(0, 0, 0, 0);
    f.left = a.x;
    f.top = a.y;
    f.width = b.width;
    f.height = b.height;
    h & 496 || (Ee(c, new N(f.left, f.top)), b = new Vd(f.width, f.height), d == b || d && b && d.width == b.width && d.height == b.height || (f = b, Xd(Zd(c)), !G || H("10") || H("8") ? (c = c.style, wc ? c.MozBoxSizing = "border-box" : xc ? c.WebkitBoxSizing = "border-box" : c.boxSizing = "border-box", c.width = Math.max(f.width, 0) + "px", c.height = Math.max(f.height, 0) + "px") : (e = c.style, d = $e(c, "padding"), !G || 9 <= Fc ? (t = Ce(c, "borderLeftWidth"), a = Ce(c, "borderRightWidth"), b = Ce(c, "borderTopWidth"), c = Ce(c, "borderBottomWidth"), c = new ye(parseFloat(b),
        parseFloat(a), parseFloat(c), parseFloat(t))) : (t = bf(c, "borderLeft"), a = bf(c, "borderRight"), b = bf(c, "borderTop"), c = bf(c, "borderBottom"), c = new ye(b, a, c, t)), e.pixelWidth = f.width - c.left - d.left - d.right - c.right, e.pixelHeight = f.height - c.top - d.top - d.bottom - c.bottom)))
}

function qh(a, b) {
    return (b & 4 && "rtl" == De(a, "direction") ? b ^ 2 : b) & -5
};

function rh(a) {
    I.call(this);
    this.a = a;
    this.b = {}
}
D(rh, I);
var sh = [];

function U(a, b, c, d, e) {
    ga(c) || (c && (sh[0] = c.toString()), c = sh);
    for (var f = 0; f < c.length; f++) {
        var g = J(b, c[f], d || a.handleEvent, e || !1, a.a || a);
        if (!g) break;
        a.b[g.Ye] = g
    }
}

function th(a) {
    gc(a.b, function(a, c) {
        this.b.hasOwnProperty(c) && id(a)
    }, a);
    a.b = {}
}
rh.prototype.v = function() {
    rh.D.v.call(this);
    th(this)
};
rh.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
};

function uh(a) {
    if (wc) a = vh(a);
    else if (yc && xc) a: switch (a) {
        case 93:
            a = 91;
            break a
    }
    return a
}

function vh(a) {
    switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
    }
};

function wh(a, b, c) {
    this.f = c;
    this.c = a;
    this.g = b;
    this.b = 0;
    this.a = null
}
wh.prototype.get = function() {
    var a;
    0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c();
    return a
};

function xh(a, b) {
    a.g(b);
    a.b < a.f && (a.b++, b.next = a.a, a.a = b)
};

function yh(a) {
    u.setTimeout(function() {
        throw a;
    }, 0)
}
var zh;

function Ah() {
    var a = u.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !F("Presto") && (a = function() {
        var a = document.createElement("IFRAME");
        a.style.display = "none";
        a.src = "";
        document.documentElement.appendChild(a);
        var b = a.contentWindow,
            a = b.document;
        a.open();
        a.write("");
        a.close();
        var c = "callImmediate" + Math.random(),
            d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
            a = y(function(a) {
                if (("*" == d || a.origin == d) && a.data ==
                    c) this.port1.onmessage()
            }, this);
        b.addEventListener("message", a, !1);
        this.port1 = {};
        this.port2 = {
            postMessage: function() {
                b.postMessage(c, d)
            }
        }
    });
    if ("undefined" !== typeof a && !F("Trident") && !F("MSIE")) {
        var b = new a,
            c = {}, d = c;
        b.port1.onmessage = function() {
            if (w(c.next)) {
                c = c.next;
                var a = c.Nc;
                c.Nc = null;
                a()
            }
        };
        return function(a) {
            d.next = {
                Nc: a
            };
            d = d.next;
            b.port2.postMessage(0)
        }
    }
    return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
        var b = document.createElement("SCRIPT");
        b.onreadystatechange = function() {
            b.onreadystatechange = null;
            b.parentNode.removeChild(b);
            b = null;
            a();
            a = null
        };
        document.documentElement.appendChild(b)
    } : function(a) {
        u.setTimeout(a, 0)
    }
};
var Ch = new wh(function() {
    return new Bh
}, function(a) {
    a.reset()
}, 100);

function Dh() {
    var a = Eh,
        b = null;
    a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
    return b
}

function Bh() {
    this.next = this.b = this.a = null
}
Bh.prototype.set = function(a, b) {
    this.a = a;
    this.b = b;
    this.next = null
};
Bh.prototype.reset = function() {
    this.next = this.b = this.a = null
};

function Fh(a, b) {
    Gh || Hh();
    Ih || (Gh(), Ih = !0);
    var c = Eh,
        d = Ch.get();
    d.set(a, b);
    c.b ? c.b.next = d : c.a = d;
    c.b = d
}
var Gh;

function Hh() {
    if (u.Promise && u.Promise.resolve) {
        var a = u.Promise.resolve(void 0);
        Gh = function() {
            a.then(Jh)
        }
    } else Gh = function() {
        var a = Jh;
        !ja(u.setImmediate) || u.Window && u.Window.prototype && !F("Edge") && u.Window.prototype.setImmediate == u.setImmediate ? (zh || (zh = Ah()), zh(a)) : u.setImmediate(a)
    }
}
var Ih = !1,
    Eh = new function() {
        this.b = this.a = null
    };

function Jh() {
    for (var a = null; a = Dh();) {
        try {
            a.a.call(a.b)
        } catch (b) {
            yh(b)
        }
        xh(Ch, a)
    }
    Ih = !1
};

function Kh(a) {
    a.prototype.then = a.prototype.then;
    a.prototype.$goog_Thenable = !0
}

function Lh(a) {
    if (!a) return !1;
    try {
        return !!a.$goog_Thenable
    } catch (b) {
        return !1
    }
};

function Mh(a, b) {
    this.a = 0;
    this.i = void 0;
    this.c = this.b = this.f = null;
    this.g = this.h = !1;
    if (a != ca) try {
        var c = this;
        a.call(b, function(a) {
            Nh(c, 2, a)
        }, function(a) {
            Nh(c, 3, a)
        })
    } catch (d) {
        Nh(this, 3, d)
    }
}

function Oh() {
    this.next = this.c = this.b = this.f = this.a = null;
    this.g = !1
}
Oh.prototype.reset = function() {
    this.c = this.b = this.f = this.a = null;
    this.g = !1
};
var Ph = new wh(function() {
    return new Oh
}, function(a) {
    a.reset()
}, 100);

function Qh(a, b, c) {
    var d = Ph.get();
    d.f = a;
    d.b = b;
    d.c = c;
    return d
}
Mh.prototype.then = function(a, b, c) {
    return Rh(this, ja(a) ? a : null, ja(b) ? b : null, c)
};
Kh(Mh);

function Sh(a, b) {
    a.b || 2 != a.a && 3 != a.a || Th(a);
    a.c ? a.c.next = b : a.b = b;
    a.c = b
}

function Rh(a, b, c, d) {
    var e = Qh(null, null, null);
    e.a = new Mh(function(a, g) {
        e.f = b ? function(c) {
            try {
                var e = b.call(d, c);
                a(e)
            } catch (m) {
                g(m)
            }
        } : a;
        e.b = c ? function(b) {
            try {
                var e = c.call(d, b);
                a(e)
            } catch (m) {
                g(m)
            }
        } : g
    });
    e.a.f = a;
    Sh(a, e);
    return e.a
}
Mh.prototype.s = function(a) {
    this.a = 0;
    Nh(this, 2, a)
};
Mh.prototype.I = function(a) {
    this.a = 0;
    Nh(this, 3, a)
};

function Nh(a, b, c) {
    if (0 == a.a) {
        a == c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.a = 1;
        var d;
        a: {
            var e = c,
                f = a.s,
                g = a.I;
            if (e instanceof Mh) Sh(e, Qh(f || ca, g || null, a)), d = !0;
            else if (Lh(e)) e.then(f, g, a), d = !0;
            else {
                if (ka(e)) try {
                    var h = e.then;
                    if (ja(h)) {
                        Uh(e, h, f, g, a);
                        d = !0;
                        break a
                    }
                } catch (l) {
                    g.call(a, l);
                    d = !0;
                    break a
                }
                d = !1
            }
        }
        d || (a.i = c, a.a = b, a.f = null, Th(a), 3 != b || Vh(a, c))
    }
}

function Uh(a, b, c, d, e) {
    function f(a) {
        h || (h = !0, d.call(e, a))
    }

    function g(a) {
        h || (h = !0, c.call(e, a))
    }
    var h = !1;
    try {
        b.call(a, g, f)
    } catch (l) {
        f(l)
    }
}

function Th(a) {
    a.h || (a.h = !0, Fh(a.l, a))
}

function Wh(a) {
    var b = null;
    a.b && (b = a.b, a.b = b.next, b.next = null);
    a.b || (a.c = null);
    return b
}
Mh.prototype.l = function() {
    for (var a = null; a = Wh(this);) {
        var b = this.a,
            c = this.i;
        if (3 == b && a.b && !a.g)
            for (var d = void 0, d = this; d && d.g; d = d.f) d.g = !1;
        if (a.a) a.a.f = null, Xh(a, b, c);
        else try {
            a.g ? a.f.call(a.c) : Xh(a, b, c)
        } catch (e) {
            Yh.call(null, e)
        }
        xh(Ph, a)
    }
    this.h = !1
};

function Xh(a, b, c) {
    2 == b ? a.f.call(a.c, c) : a.b && a.b.call(a.c, c)
}

function Vh(a, b) {
    a.g = !0;
    Fh(function() {
        a.g && Yh.call(null, b)
    })
}
var Yh = yh;

function Zh(a, b, c) {
    if (ja(a)) c && (a = y(a, c));
    else if (a && "function" == typeof a.handleEvent) a = y(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < b ? -1 : u.setTimeout(a, b || 0)
};

function $h(a, b) {
    L.call(this);
    this.a = new rh(this);
    var c = a || null;
    ai(this);
    this.aa = c;
    b && (this.La = b)
}
D($h, L);
n = $h.prototype;
n.aa = null;
n.Gc = !0;
n.Fc = null;
n.ra = !1;
n.cc = -1;
n.bc = -1;
n.Cb = !1;
n.Qb = !0;
n.La = "toggle_display";
n.Y = k("La");
n.o = k("aa");

function bi(a) {
    ai(a);
    a.Gc = !0
}

function ai(a) {
    if (a.ra) throw Error("Can not change this state of the popup while showing.");
}
n.Na = function() {
    return this.ra || 150 > C() - this.bc
};
n.ba = function(a) {
    this.c && this.c.stop();
    this.b && this.b.stop();
    if (a) {
        if (!this.ra && M(this, "beforeshow")) {
            if (!this.aa) throw Error("Caller must call setElement before trying to show the popup");
            this.$a();
            a = Zd(this.aa);
            this.Cb && U(this.a, a, "keydown", this.tf, !0);
            if (this.Gc)
                if (U(this.a, a, "mousedown", this.vd, !0), G) {
                    var b;
                    try {
                        b = a.activeElement
                    } catch (d) {}
                    for (; b && "IFRAME" == b.nodeName;) {
                        try {
                            var c = b.contentDocument || b.contentWindow.document
                        } catch (d) {
                            break
                        }
                        a = c;
                        b = a.activeElement
                    }
                    U(this.a, a, "mousedown", this.vd, !0);
                    U(this.a, a, "deactivate", this.ud)
                } else U(this.a, a, "blur", this.ud);
                "toggle_display" == this.La ? (this.aa.style.visibility = "visible", Xe(this.aa, !0)) : "move_offscreen" == this.La && this.$a();
            this.ra = !0;
            this.cc = C();
            this.bc = -1;
            this.c ? (gd(this.c, "end", this.xd, !1, this), this.c.play()) : this.xd()
        }
    } else ci(this)
};
n.$a = ca;

function ci(a, b) {
    if (!a.ra || !M(a, {
        type: "beforehide",
        target: b
    })) return !1;
    a.a && th(a.a);
    a.ra = !1;
    a.bc = C();
    a.b ? (gd(a.b, "end", ra(a.Rc, b), !1, a), a.b.play()) : a.Rc(b);
    return !0
}
n.Rc = function(a) {
    "toggle_display" == this.La ? this.mf() : "move_offscreen" == this.La && (this.aa.style.top = "-10000px");
    M(this, {
        type: "hide",
        target: a
    })
};
n.mf = function() {
    this.aa.style.visibility = "hidden";
    Xe(this.aa, !1)
};
n.xd = function() {
    M(this, "show")
};
n.vd = function(a) {
    a = a.target;
    ie(this.aa, a) || di(this, a) || 150 > C() - this.cc || ci(this, a)
};
n.tf = function(a) {
    27 == a.keyCode && ci(this, a.target) && (a.preventDefault(), a.stopPropagation())
};
n.ud = function(a) {
    if (this.Qb) {
        var b = Zd(this.aa);
        if ("undefined" != typeof document.activeElement) {
            if (a = b.activeElement, !a || ie(this.aa, a) || "BODY" == a.tagName) return
        } else if (a.target != b) return;
        150 > C() - this.cc || ci(this)
    }
};

function di(a, b) {
    return Sb(a.Fc || [], function(a) {
        return b === a || ie(a, b)
    })
}
n.v = function() {
    $h.D.v.call(this);
    this.a.M();
    Jc(this.c);
    Jc(this.b);
    delete this.aa;
    delete this.a;
    delete this.Fc
};

function ei(a, b) {
    this.g = 4;
    this.f = b || void 0;
    $h.call(this, a)
}
D(ei, $h);
ei.prototype.$a = function() {
    if (this.f) {
        var a = !this.ra && "move_offscreen" != this.Y(),
            b = this.o();
        a && (b.style.visibility = "hidden", Xe(b, !0));
        this.f.a(b, this.g, this.l);
        a && Xe(b, !1)
    }
};

function fi(a, b, c) {
    this.c = [];
    this.b = b || gi;
    this.f = c || "gcal$func$";
    this.h = a
}
D(fi, I);
var gi = u.gcal$func$ = {}, hi = 0,
    ii = new fi;
fi.prototype.v = function() {
    for (var a = 0, b = this.c.length; a < b; ++a) delete this.b[this.c[a]];
    fi.D.v.call(this)
};
fi.prototype.a = function(a, b) {
    var c = b || this.h;
    c && (a = y(a, c));
    c = hi++;
    this.b[c] = a;
    this.c.push(c);
    return Af(this.f + "[" + c + "]")
};
fi.prototype.g = function(a) {
    delete this.b[a.substring(this.f.length + 1, a.length - 1)]
};
var ji = y(ii.a, ii);
y(ii.g, ii);

function ki(a, b) {
    I.call(this);
    this.a = a;
    this.b = Xd(a);
    this.c = new fi(this);
    this.f = b || 30000001
}
D(ki, I);
n = ki.prototype;
n.P = null;
n.da = null;
n.v = function() {
    this.c.M();
    if (this.da) {
        var a = this.da;
        if (a)
            if (Pc(a)) a.ca && Xc(a.ca);
            else if (a = cd(a)) {
            var b = 0,
                c;
            for (c in a.a)
                for (var d = a.a[c].concat(), e = 0; e < d.length; ++e) id(d[e]) && ++b
        }
        this.da.M()
    }
    ki.D.v.call(this)
};
n.De = function() {
    this.b.Xe(this.P)
};
n.render = function(a, b, c, d, e, f) {
    if (!this.P) {
        var g;
        g = this.c.a(this.vb);
        g = P('<div class=cc style="z-index:' + Q(T(this.f)) + '"><div class=cc-titlebar><div class=cc-close onclick="' + Q(S(g)) + '();"></div><div class=cc-title></div></div><div class=cc-body></div></div>');
        this.P = xe(g, this.b);
        this.da = new ei(this.P);
        bi(this.da);
        g = this.da;
        ai(g);
        g.Cb = !0;
        this.da.Qb = !1;
        J(this.da, "beforehide", this.De, !1, this)
    }
    this.da.ba(!1);
    this.P.style.left = "0";
    this.P.style.top = "0";
    this.a.appendChild(this.P);
    this.P.style.display = "";
    this.P.style.width = c ? c + "px" : "";
    this.P.childNodes[1].style.height = d ? d + "px" : "";
    this.P.childNodes[1].innerHTML = ue(f);
    e && 0 < e.length ? (je(this.P.childNodes[0].childNodes[1], e), this.P.childNodes[0].style.display = "") : this.P.childNodes[0].style.display = "none";
    d = ce(ee(this.b.a) || window);
    e = d.width;
    f = d.height;
    g = Te(this.a);
    c = this.P.offsetWidth;
    d = this.P.offsetHeight;
    a = Math.min(Math.max(a, 10), Math.max(e - c - 10, 10));
    c = b;
    b = Math.min(Math.max(b, 10), Math.max(f - d - 10, 10));
    c != b && (a += 16);
    a -= g.x;
    b -= g.y;
    this.P.style.left = a +
        "px";
    this.P.style.top = b + "px";
    this.da.ba(!0)
};
n.vb = function() {
    this.da && this.da.ba(!1)
};
var li;

function mi(a, b, c, d, e) {
    L.call(this);
    this.b = b;
    this.h = e || Xd();
    this.nb = c;
    this.a = d;
    d.S(ni(this.b.a));
    J(d, "change", this.Zb, !1, this);
    this.la = a;
    this.ja = new fi(this);
    this.f = {};
    this.s = new ki(oi(this.la));
    a: {
        for (b = 0; b < a.s.length; b++)
            if (a.s[b] === this) break a;
        a.s.push(this);
        this.Ra(a);
        this.register();
        pi(a);
        qi(a)
    }
}
D(mi, L);
n = mi.prototype;
n.za = "CalendarView";
n.v = function() {
    this.ja.M();
    mi.D.v.call(this)
};
n.Y = k("nb");
n.Zb = function() {
    this.render()
};
n.Zc = function() {
    this.a.Ha(1)
};
n.Yc = function() {
    this.a.Ha(-1)
};
n.V = function() {
    return new E(this.a.a, fb(this.a.c))
};
n.render = function() {
    this.s.vb()
};
n.register = function() {
    this.ob = ji(this.yd, this)
};
n.pf = function(a) {
    return 2 != a.Nb
};

function ri(a, b) {
    var c = a.b.b,
        d = b.f,
        e = b.g || "";
    e && (e = P(e));
    var c = si(c, new E(b.J(), b.O)),
        f = "https://maps.google.com/maps?hl=" + encodeURIComponent("en-GB") + "&q=" + encodeURIComponent(d);
    li && (f = li.replace("{q}", encodeURIComponent(d)).replace("{hl}", "en-GB").replace("{googUrl}", encodeURIComponent(f)));
    var g = f,
        f = e,
        e = P,
        d = '<div class="detail-item"><span class="event-details-label">' + O("When") + '</span><span class="event-when">' + O(c) + "</span></div>" + (d ? '<div class="detail-item"><span class="event-details-label">' +
            O("Where") + '</span><span class="event-where">' + O(d) + ' (<a href="' + Q(Uf(g)) + '" class="menu-link" target=_blank>' + O("map") + "</a>)</span></div>" : "");
    if (f) {
        c = '<div class="detail-item"><span class="event-details-label">' + O("Description") + '</span><span class="event-description">';
        f = O(f);
        g = String(f);
        if (!(15 > g.length)) {
            for (var h = [], l = 0, m = 0, p = 0, q = 0, r = 0; r < g.length; r++) {
                var v = q,
                    q = g.charCodeAt(r),
                    t;
                if (t = 768 <= q) t = q, v = nf(v), t = nf(t), t = !((12 == v && 13 == t ? 0 : 1 == v || 12 == v || 13 == v || 1 == t || 12 == t || 13 == t || (7 != v || 7 != t && 8 != t &&
                    10 != t && 11 != t) && (10 != v && 8 != v || 8 != t && 9 != t) && (11 != v && 9 != v || 9 != t) && 2 != t && 6 != t && (6 != v || 5 != t)) && 3 != v && 4 != t);
                v = t;
                15 <= l && !of(q) && !v && (h.push(g.substring(p, r), qf), p = r, l = 0);
                m ? 62 == q && 60 == m ? m = 0 : 59 == q && 38 == m && (m = 0, l++) : 60 == q || 38 == q ? m = q : of(q) ? l = 0 : 8204 <= q && 8207 >= q || 8234 <= q && 8238 >= q || l++
            }
            h.push(g.substr(p));
            g = h.join("")
        }
        f = rf(f, me) ? P(g, sf(f)) : g;
        c = c + f + "</span></div>"
    } else c = "";
    return e(d + c)
}
n.yd = function(a, b) {
    var c = this.f[a],
        d = this.s,
        e = We(b),
        f = c.a.content,
        g = c.Z();
    if (g.a) {
        var h, l = Jg(g.a),
            m = g.a;
        h = g.Y();
        if (1 == h)
            if (m = c.J(), c = c.O, 1 != g.Y()) m = null;
            else {
                c = "http://www.gmodules.com/gadgets/ifr?url=" + encodeURIComponent(g.a) + "&synd=calendar&w=" + g.ia + "&h=" + g.getHeight() + "&up_startdate=" + m.u().toString() + "&up_enddate=" + c.u().toString() + "&lang=" + "en_GB".replace("_", "-");
                if (m = g.g)
                    for (var p in m) p.match(Og) && (c += "&up_" + p + "=" + encodeURIComponent(m[p]));
                m = c
            } else m = l;
        p = 1 == h;
        c = m;
        h = P(3 == h ? '<img src="' + Q(Wf(c)) +
            '" class="wc-root">' : "<iframe frameborder=0" + (p ? ' scrolling="no"' : "") + ' src="' + Q(Uf(c)) + '" class="wc-root"></iframe>');
        g.getHeight();
        p = document.body;
        p != d.a && (d.P && d.vb(), d.a = p);
        d.render(e.left, e.top + e.height, g.ia, g.getHeight(), f, h)
    }
};

function ti(a, b) {
    for (var c = 0; c < b.length; c++) a.f[la(b[c])] = b[c]
}

function ui(a, b) {
    var c = $e(a, "margin"),
        d = $e(a, "padding");
    a.style.height = Math.max(1, b - c.top - d.top - c.bottom - d.bottom) + "px"
}

function vi(a, b) {
    var c = a.b.l,
        d;
    d = b.a.content;
    d = -1 != d.indexOf("&") ? "document" in u ? Ea(d) : Ga(d) : d;
    var e = new E(b.J(), b.O),
        f = b.g || "";
    f && 1024 < f.length && (f = f.substring(0, 1024) + "...");
    return ng(c.Ob + "/event", "action", "TEMPLATE", "hl", "en_GB", "text", d, "dates", e, "location", b.f, "ctz", c.Hd, "details", f)
}

function wi(a, b, c) {
    var d = a.la;
    xi(a.la, b, function(e) {
        var f;
        if (f = d.c == a) f = a.V(), f = f.start.j() <= b.start.j() && f.end.j() >= b.end.j();
        f && c(e)
    })
}
n.Ga = function() {
    this.s.vb()
};

function yi(a, b, c) {
    this.b = Math.max(c, 1);
    this.c = a;
    this.a = b;
    this.a.push(this.b);
    this.f = this.c.length
}

function zi(a, b, c, d) {
    this.a = a;
    this.c = b;
    this.offset = c;
    this.b = d;
    this.f = this.offset / this.b
}

function Ai(a, b, c) {
    return new zi(a.c[b], a.c[b + 1], c, a.a[b + 1] - a.a[b] || 1)
}

function Bi(a, b, c) {
    var d = 0,
        e = 0;
    w(b) && (d = cc(a.c, b), 0 > d ? (d = -d - 1, d == a.f && (d--, e = a.b - a.a[d])) : c && (e = (a.a[d + 1] - a.a[d]) * c));
    return {
        index: d,
        offset: e
    }
}
yi.prototype.Ma = function() {
    return !this.f
};

function Ci(a, b, c, d) {
    this.mb = d || 28;
    this.l = a.h.b;
    this.i = Di(this, this.l);
    this.za = "Agenda";
    this.A = {};
    this.K = !1;
    this.c = Ei++;
    this.Da = null;
    this.G = c;
    mi.call(this, a, b, "agenda", new ud, a.b)
}
D(Ci, mi);
var Ei = 1;
n = Ci.prototype;
n.hc = 0;
n.tb = null;
n.Zc = function() {
    var a = Fi(this).scrollTop + parseInt(Fi(this).style.height, 10),
        b = this.h.o("eventContainer" + this.c).offsetHeight;
    a >= b && (this.ib(!0), a = b);
    Gi(this, a)
};
n.Yc = function() {
    var a = Fi(this).scrollTop - parseInt(Fi(this).style.height, 10);
    0 >= a && (this.ib(!1), a = 0);
    Gi(this, a)
};
n.V = function() {
    return new E(this.l, this.i)
};
n.Wb = function() {
    return Hi(this.b.b, this.a.b)
};
n.Zb = function() {
    if (Fi(this) && (!this.tb || !this.tb.H(this.a.b))) {
        var a = this.a.b;
        ni(this.b.a);
        var b = this.V();
        b.start.j() <= a.j() && b.end.j() > a.j() ? (this.tb = a, Ii(this).Ma() ? b = Ji(this) : (b = Ii(this), a = a.F(), a = Bi(b, a, void 0), b = Ai(b, a.index, a.offset)), Ki(this, b, !0, !1)) : (b = new E(a, Di(this, a)), this.l = b.start.u(), this.i = b.end.u(), wi(this, b, Li(this, b, !1, !1, !0, !0)))
    }
};
n.render = function() {
    Ci.D.render.call(this);
    var a = !this.C;
    wi(this, this.V(), Li(this, this.V(), !1, !1, !1, a))
};

function Li(a, b, c, d, e, f) {
    return function(g) {
        if (!c) {
            var h = oi(a.la);
            te(h, cg, {
                height: "200px",
                id: String(a.c)
            });
            var l = Fi(a),
                h = parseInt(h.style.height, 10);
            ui(l, h);
            id(a.Da);
            a.Da = J(Fi(a), "scroll", a.hf, !1, a)
        }
        M(a, "a");
        var l = b.end,
            h = [],
            m = b.start;
        c || (a.f = {});
        ti(a, g);
        var p = a.G,
            q = a.ob;
        p.L = a.L;
        p.f = q;
        p = f ? 45 : Infinity;
        for (q = ra(Ug, nh); m.j() < l.j() && 0 < p;) {
            var r = a,
                v = m,
                t = [],
                v = Ya(v.j(), fb(v).j()),
                r = r.f,
                z = void 0;
            for (z in r) {
                var A = r[parseInt(z, 10)];
                Sg(A, v) && t.push(A)
            }
            t = Qb(t, a.pf, a);
            t.sort(q);
            h.push(Mi(a, m, t));
            p -= t.length;
            m = fb(m)
        }
        if (!c || d) a.i = m;
        m = {
            ab: h
        };
        M(a, "b");
        l = a.h.o("eventContainer" + a.c);
        h = xc ? l.clientHeight : Ue(l).height;
        c ? (m = we(eg, m), d ? l.appendChild(m) : l.insertBefore(m, l.firstChild)) : te(l, eg, m);
        a.g = null;
        c && !d && (l = (xc ? l.clientHeight : Ue(l).height) - h, Gi(a, Fi(a).scrollTop + l));
        M(a, "c");
        l = a.b.b;
        h = a.h.o("agenda-underflow-top" + a.c);
        m = Ni(l, a.l);
        te(h, dg, {
            Cd: "Displaying events after " + m,
            functionName: a.ka,
            Dc: !1,
            rd: "Look for earlier events"
        });
        h = Oi(a);
        l = Ni(l, a.i);
        te(h, dg, {
            Cd: "Displaying events until " + l,
            functionName: a.ka,
            Dc: !0,
            rd: "Look for more"
        });
        a.C || (a.C = Ji(a));
        a.K = !1;
        a.G.b(g);
        e ? a.Zb() : c || Ki(a, a.C, !0, !0)
    }
}

function Mi(a, b, c) {
    var d = c.length;
    if (!d) return null;
    for (var e = [], f, g = 0; g < d; g++) {
        var h = c[g];
        f = ["event"];
        0 == g ? f.push("first-event") : g == d - 1 && f.push("last-event");
        e.push(a.G.render(h, b, f))
    }
    a = {
        ze: Hi(a.b.b, b),
        ye: b.toString(),
        Rb: e
    };
    b = a.ya;
    c = a.ye;
    d = a.ze;
    a = a.Rb;
    b = '<div class="day ' + Q(null == b ? "" : b) + '" id="day-' + Q(c) + '"><div class="date-label">' + O(d) + "</div>";
    c = a.length;
    for (d = 0; d < c; d++) b += O(a[d]);
    return P(b + "</div>")
}

function Ii(a) {
    if (a.g) return a.g;
    var b;
    b = a.la.b.a;
    if (b.querySelectorAll && b.querySelector) b = b.querySelectorAll("DIV.day");
    else if (b.getElementsByClassName) {
        b = b.getElementsByClassName("day");
        for (var c = {}, d = 0, e = 0, f; f = b[e]; e++) "DIV" == f.nodeName && (c[d++] = f);
        c.length = d;
        b = c
    } else {
        b = b.getElementsByTagName("DIV");
        c = {};
        for (e = d = 0; f = b[e]; e++) {
            var g = f.className,
                h;
            if (h = "function" == typeof g.split) h = 0 <= Ob(g.split(/\s+/), "day");
            h && (c[d++] = f)
        }
        c.length = d;
        b = c
    }
    e = [];
    f = [];
    for (g = 0; g < b.length; g++) "none" != b[g].style.display &&
        (c = b[g].id.substring(4), d = Oe(b[g]), e.push(Hb(c).F()), f.push(d.y));
    a.g = new yi(e, f, Oe(Oi(a)).y);
    return a.g
}
n.register = function() {
    Ci.D.register.call(this);
    this.L = ji(this.Mf, this);
    this.ka = this.ja.a(this.ib)
};
n.Mf = function(a, b) {
    var c = new Lc(b);
    if (Nc(c, 0) && !(xc && yc && c.Ka) || Nc(c, 1)) {
        var d = this.h.o("details-" + a.id),
            e = parseInt(a.id.substring(0, a.id.lastIndexOf("-")), 10);
        if (this.A[e]) delete this.A[e], Pi(d, a, !1);
        else {
            if (c.h || c.i || Nc(c, 1)) {
                var c = this.f[e],
                    f = c.Ea,
                    f = Jg(f);
                d = f;
                e = Lg();
                d && Ig(d) && !Kg(d) && null != e ? (c = d.split("/calendar"), f = 2 < c.length ? d : c.join("/calendar/b/" + e)) : f = d;
                f && window.open(encodeURI(f));
                return
            }
            if (!d.firstChild) {
                var c = this.f[e],
                    g = ri(this, c),
                    f = c.Ea;
                !c.Z() && f && (f = g, g = c.Ea, c = vi(this, c), c = P('<a href="' +
                    Q(Uf(g)) + '" target="_blank">' + O("more details") + '&raquo;</a>&nbsp;&nbsp;<a href="' + Q(Uf(c)) + '" target="_blank">' + O("copy to my calendar") + "</a>"), g = P(O(f) + '<div class="event-links">' + O(c) + "</div>"));
                for (te(d, bg, {
                    Ee: g
                }); d.firstChild.firstChild;) d.appendChild(d.firstChild.firstChild);
                d.removeChild(d.firstChild);
                Pi(d, a, !0);
                this.A[e] = 1;
                this.g = null;
                return
            }
            Pi(d, a, !0);
            this.A[e] = 1
        }
        this.g = null
    }
};

function Pi(a, b, c) {
    Xe(a, c);
    c ? zd(b, "event-summary", "event-summary-expanded") : zd(b, "event-summary-expanded", "event-summary")
}

function Gi(a, b) {
    Fi(a).scrollTop = Math.round(b)
}

function Ji(a) {
    return new zi(a.a.b.F(), void 0, 0, 1)
}

function Ki(a, b, c, d) {
    a.C = b;
    if (c) {
        c = Ii(a);
        var e = Bi(c, b.a, b.f);
        c = Td(c.a[e.index] + e.offset, c.a[0], c.b);
        Gi(a, c);
        a.hc = c
    }
    d && (b = zb(b.c && 30 > b.b - b.offset ? b.c : b.a), a.tb = b, a.a.S(b))
}
n.hf = function() {
    var a = Fi(this),
        b = a.scrollTop,
        c = this.h.o("agendaScrollContent" + this.c).offsetHeight;
    if (0 != c && (b + a.clientHeight >= c ? this.ib(!0) : 0 == b && this.ib(!1), 5 < Math.abs(this.hc - b))) {
        if (Ii(this).Ma()) a = Ji(this);
        else {
            var a = Ii(this),
                c = Td(b, a.a[0], a.b),
                d = cc(a.a, c);
            0 > d ? d = -d - 2 : d == a.f && d && d--;
            a = Ai(a, d, c - a.a[d])
        }
        Ki(this, a, !1, !0);
        this.hc = b
    }
};
n.ib = function(a) {
    if (!this.K) {
        this.K = !0;
        var b = this.V();
        if (a) {
            var c = b.end;
            this.i = b = Di(this, b.end)
        } else c = Di(this, b.start, !0), b = b.start, this.l = c;
        c = new E(c, b);
        wi(this, c, Li(this, c, !0, a, !1, a))
    }
};

function Di(a, b, c) {
    c = c ? -1 : 1;
    b = ib(b, c * a.mb);
    a = b.year;
    var d = b.month,
        e = gb(a, d, 15);
    return b = 0 > c ? e.j() <= b.j() ? e : gb(a, d, 1) : e.j() >= b.j() ? e : gb(a, d, Na(a, d))
}

function Fi(a) {
    return a.h.o("agendaEventContainer" + a.c)
}

function Oi(a) {
    return a.h.o("agenda-underflow-bottom" + a.c)
};

function Qi() {};

function Ri(a, b) {
    this.a = a;
    this.c = b
}
D(Ri, Qi);
Ri.prototype.render = function(a, b, c) {
    var d, e, f, g, h, l, m;
    d = this.L;
    (f = a.Z()) && f.b && (e = f.b, f = f.f || "", g = this.f, l = la(a), e = P('<span onclick="' + Q(S(g)) + "(" + Q(S(l)) + ', this)" class="agenda-wc"><img src="' + Q(Wf(e)) + '" class="agenda-web-content" title="' + Q(f) + '" alt="' + Q(f) + '"></span>'), c.push("web-content"));
    c = c.join(" ");
    f = si(this.a, new E(a.J(), a.O));
    l = !1;
    a.b ? (g = "All day", l = !0) : (g = a.J().u(), m = a.O.u(), a.c || g !== m ? g === b ? g = Si(this.a, a.J(), !1, !1) : m === b ? g = "\u00bb\u00a0" + Si(this.a, a.O, !1, !1) : (g = "All day", l = !0) : g =
        Si(this.a, a.J(), !1, !1));
    h = l;
    l = Tg(a);
    m = this.c.Za(a).a;
    a = la(a) + "-" + b;
    b = !! h;
    return P('<div class="' + Q(c) + '"><div class="' + (b ? "all-day " : "") + 'event-summary" id="' + Q(a) + '" onmousedown="' + Q(S(d)) + '(this, event);return false;"><span class="event-time" alt="' + Q(f) + '" title="' + Q(f) + '">' + O(g) + '</span><div class="title-wrapper"><span class="event-reply-status">&nbsp;</span><span class="event-title" style="color: ' + Q(T(m)) + ';">' + O(null == e ? "" : e) + O(l) + '</span></div></div><div class="event-details" id="details-' +
        Q(a) + '"></div></div>')
};
Ri.prototype.b = ca;

function Ti() {
    this.a = {};
    this.g = {};
    this.f = this.b = this.c = null
}

function Ui(a, b) {
    for (var c = b.start.u(), d = b.end.u(), e = c.F(), d = d.F(), c = {}, f = []; e < d; e = Xa(e))
        if (e in a.a) {
            var g = a.a[e];
            if (g) {
                for (var h in g) {
                    var l = g[h];
                    l.cb ? delete g[h] : h in c || (f.push(l), c[h] = 1)
                }
                kc(g) && delete a.a[e]
            }
        }
    return f
};

function Vi(a) {
    this.h = a
}
Vi.prototype.getId = k("h");

function Wi() {
    L.call(this);
    this.a = {};
    this.f = {};
    this.b = {};
    this.c = {};
    this.g = {}
}
D(Wi, L);
Wi.prototype.h = 0;
var Xi = 1;

function Yi(a, b, c) {
    this.id = a;
    this.g = b;
    this.c = c;
    this.f = null;
    this.b = [];
    this.a = {}
}

function Zi(a, b, c, d) {
    var e;
    b.sort();
    e = c.toString() + ":" + b.join(",");
    if (e in a.g) d(a.g[e]);
    else if (e in a.c) a.c[e].push(d);
    else if (b = $i(a, b, c, d), b.f = e, ++a.h, a.c[e] = [d], kc(b.a)) aj(a, b);
    else
        for (var f in b.a) d = a.f[f], e = y(a.i, a, f, b), d.f(b.a[f], e)
}

function $i(a, b, c, d, e) {
    var f = Xi++;
    d = new Yi(f, d, c);
    for (f = 0; f < b.length; ++f) {
        var g = b[f],
            h = a.a[g],
            l;
        l = h;
        var m = c,
            p = e ? h.f : null;
        if (l.c && l.b) {
            var p = !! p && (null == l.f || p >= l.f),
                q = m.start.j() < l.c.j(),
                r = m.end.j() > l.b.j();
            l = q || r ? q && r ? m : r ? new E(p ? l.c : l.b, m.end.u()) : new E(m.start.u(), p ? l.b : l.c) : p ? new E(l.c, l.b) : null
        } else l = m;
        l ? d.a[g] = l : e || d.b.push(Ui(h, c))
    }
    return d
}
Wi.prototype.i = function(a, b, c, d) {
    c && bj(this, a, c, b.c, d ? d : void 0);
    b.b.push(Ui(this.a[a], b.c));
    delete b.a[a];
    kc(b.a) && (aj(this, b), M(this, "d"))
};

function aj(a, b) {
    --a.h;
    var c;
    c = b.b;
    for (var d = [], e = 0; e < c.length; ++e) $b(d, c[e]);
    c = d.sort(ra(Ug, nh));
    (d = b.f) && (a.g[d] = c);
    for (var e = a.c[d], f = 0; f < e.length; ++f) e[f](c);
    delete a.c[d]
}
Wi.prototype.l = function(a, b, c, d) {
    c && (bj(this, a, c, b.c, d ? d : void 0), b.b.push(c));
    delete b.a[a];
    kc(b.a) && (b.g(), M(this, "d"))
};

function bj(a, b, c, d, e) {
    b = a.a[b];
    for (var f = 0, g = c.length; f < g; ++f) {
        var h = c[f],
            l = h.getId(),
            m = b.g[l];
        m && (m.cb = !0);
        if (h.cb) delete b.g[l];
        else {
            var p = h.J().F(),
                m = h.O.F();
            h.b || h.I || (m = Xa(m));
            for (b.g[l] = h; p < m; p = Xa(p)) {
                var q;
                p in b.a ? q = b.a[p] : (q = [], b.a[p] = q);
                q[l] = h
            }
        }
    }
    if (d) {
        var r, v;
        if (!b.c || d.start.j() <= b.c.j()) b.c = d.start.u(), r = !0;
        if (!b.b || d.end.j() >= b.b.j()) b.b = d.end.u(), v = !0;
        e && r && v && (!b.f || e > b.f) && (b.f = e)
    }
    for (d = 0; d < c.length; ++d) e = c[d].getId(), e in a.b && c[d].cb ? delete a.b[e] : a.b[e] = c[d];
    a.g = {}
};
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function cj(a, b) {
    this.c = [];
    this.A = b || null;
    this.a = this.h = !1;
    this.b = void 0;
    this.s = this.g = !1;
    this.f = 0;
    this.i = null;
    this.I = 0
}
cj.prototype.l = function(a, b) {
    this.g = !1;
    this.h = !0;
    this.b = b;
    this.a = !a;
    dj(this)
};

function ej(a, b, c) {
    a.c.push([b, c, void 0]);
    a.h && dj(a)
}
cj.prototype.then = function(a, b, c) {
    var d, e, f = new Mh(function(a, b) {
            d = a;
            e = b
        });
    ej(this, d, function(a) {
        e(a)
    });
    return f.then(a, b, c)
};
Kh(cj);

function fj(a) {
    return Sb(a.c, function(a) {
        return ja(a[1])
    })
}

function dj(a) {
    if (a.f && a.h && fj(a)) {
        var b = a.f,
            c = gj[b];
        c && (u.clearTimeout(c.xb), delete gj[b]);
        a.f = 0
    }
    a.i && (a.i.I--, delete a.i);
    for (var b = a.b, d = c = !1; a.c.length && !a.g;) {
        var e = a.c.shift(),
            f = e[0],
            g = e[1],
            e = e[2];
        if (f = a.a ? g : f) try {
            var h = f.call(e || a.A, b);
            w(h) && (a.a = a.a && (h == b || h instanceof Error), a.b = b = h);
            if (Lh(b) || "function" === typeof u.Promise && b instanceof u.Promise) d = !0, a.g = !0
        } catch (l) {
            b = l, a.a = !0, fj(a) || (c = !0)
        }
    }
    a.b = b;
    d && (h = y(a.l, a, !0), d = y(a.l, a, !1), b instanceof cj ? (ej(b, h, d), b.s = !0) : b.then(h, d));
    c && (b = new hj(b),
        gj[b.xb] = b, a.f = b.xb)
}

function hj(a) {
    this.xb = u.setTimeout(y(this.b, this), 0);
    this.a = a
}
hj.prototype.b = function() {
    delete gj[this.xb];
    throw this.a;
};
var gj = {};
var ij;

function jj(a) {
    this.b = a
};

function kj(a) {
    var b = [],
        c = a.a,
        d;
    for (d in c) {
        var e = c[d].slice().sort(function(a, b) {
            return a - b
        });
        b.push(d + ": " + e.join(", "))
    }
    b.push("\nreset?");
    confirm(b.join("\n")) && a.reset()
};

function lj() {
    L.call(this);
    this.a = {}
}
D(lj, L);
da(lj);
lj.prototype.reset = function() {
    this.a = {}
};
var mj = /\W/g;
lj.prototype.log = function(a, b) {
    if (!(0 > b || 6E5 < b)) {
        var c = a.replace(mj, "_");
        c in this.a || (this.a[c] = []);
        this.a[c].push(b)
    }
};

function nj(a) {
    this.f = a;
    this.c = this.a = C()
}
nj.prototype.J = k("a");

function oj(a, b, c, d, e) {
    this.a = a;
    this.b = b;
    this.g = c;
    this.c = d;
    this.f = e
}

function pj(a, b) {
    var c = parseInt(a.substr(1, 2), 16),
        d = parseInt(a.substr(3, 2), 16),
        e = parseInt(a.substr(5, 2), 16),
        c = Math.floor(255 - (255 - c) * b),
        d = Math.floor(255 - (255 - d) * b),
        e = Math.floor(255 - (255 - e) * b);
    return "#" + qj(c) + qj(d) + qj(e)
}

function rj(a) {
    var b;
    b = parseInt(a.substr(1, 2), 16);
    var c = parseInt(a.substr(3, 2), 16),
        d = parseInt(a.substr(5, 2), 16);
    b *= .7;
    var c = .7 * c,
        d = .7 * d,
        e = .3 * b + .59 * c + .11 * d,
        f, g = Math.exp(e / 255);
    f = (.595716 * b - .274453 * c - .321263 * d) * g;
    d = (.211456 * b - .522591 * c + .311135 * d) * g;
    b = Math.floor(Math.min(Math.max(e + .9563 * f + .621 * d, 0), 255));
    c = Math.floor(Math.min(Math.max(e - .2721 * f - .6474 * d, 0), 255));
    d = Math.floor(Math.min(Math.max(e - 1.107 * f + 1.7046 * d, 0), 255));
    b = "#" + qj(b) + qj(c) + qj(d);
    c = pj(a, .33);
    e = pj(a, Math.min(1, .5 + (parseInt(a.substr(1, 2),
        16) + parseInt(a.substr(3, 2), 16) + parseInt(a.substr(5, 2), 16)) / 3 / 255 / 1.5));
    return new oj(a, b, a, e, c)
}
oj.prototype.H = function(a) {
    return this.color == a.color
};

function sj(a, b) {
    return "#" + "666666888888aaaaaabbbbbbdddddda32929cc3333d96666e69999f0c2c2b1365fdd4477e67399eea2bbf5c7d67a367a994499b373b3cca2cce1c7e15229a36633cc8c66d9b399e6d1c2f029527a336699668cb399b3ccc2d1e12952a33366cc668cd999b3e6c2d1f01b887a22aa9959bfb391d5ccbde6e128754e32926265ad8999c9b1c2dfd00d78131096184cb05288cb8cb8e0ba52880066aa008cbf40b3d580d1e6b388880eaaaa11bfbf4dd5d588e6e6b8ab8b00d6ae00e0c240ebd780f3e7b3be6d00ee8800f2a640f7c480fadcb3b1440edd5511e6804deeaa88f5ccb8865a5aa87070be9494d4b8b8e5d4d47057708c6d8ca992a9c6b6c6ddd3dd4e5d6c6274878997a5b1bac3d0d6db5a69867083a894a2beb8c1d4d4dae54a716c5c8d8785aaa5aec6c3cedddb6e6e41898951a7a77dc4c4a8dcdccb8d6f47b08b59c4a883d8c5ace7dcce8531049f3501c7561ee2723ad6a58c6914268a2d38b5515dcd6a75d0a4a95c1158962181c244abda5dc4d69fcc23164e402175603f997d5cb5a89ac2182c5730487e536ca66d86c0a4afc9060d5e1821863640ad525cc8969acb125a121f753c3c995b5ab67998c2a62f62133d82155ca63279c34fa6c7942f63095a9a087ec2259add42b6d48e5f6b0281910ba7b828c3d445c8d0908755099d7000cf9911ebb42ed9c2858c500baa5a00d47f1eee9939ddb78d7549168d4500b56414d38233cda9866b3304743500914d14b37037bb9d845b123b870b50ab2671c9448ec98eae42104a70237f9643a5b15fc0c09cc7113f4725617d4585a361a0be9dbac73333335151517373738f8f8fb2b2b20f4b38227f6341a5875dc0a29bc7ba856508a59114d1bc36e9d34fddd398711616871111ad2d2dc94a4acb9292ac725e75481eac725ec68c78e6d5cfd06b64924420d06b64db7972f0d0cef83a22a64232f83a22f97d6df6c9c2fa573cd02424fa573cfc8976fed0c8ff7537bb5517ff7537fa9162ffd8c7ffad46cb7403ffad46ffad46ffe8cb42d69250b68e42d69242d692caf4e016a765007d3916a7656bcfa2d1ede07bd1484db8107bd1487bd148daf2ccb3dc6c93c00bb3dc6cb3dc6ceaf5dcfbe983bdb634fbe983fbe983fef9dcfad165bf9608fad165fad165fef2d392e1c033b69492e1c092e1c0e0f7ed9fe1e70bbcb29fe1e79fe1e7e4f7f89fc6e71587bd9fc6e79fc6e7e4eff84986e72c70d14986e78fb5f2dbe7fa9a9cff373ad79a9cffa9abfee3e3ffb99aff6733ddb99affb99affebe3ffc2c2c2979797c2c2c2d0d0d0e6e6e6cabdbf717171cabdbfcabdbfeae6e6cca6ac8a404dcca6accca6acf1e6e8f691b2d21e5bf691b2f9a9c3fce0e9cd74e6ca2ae6cd74e6dd8ef3f1d8f8a47ae29c3ce4a47ae2b38cede6daf7".substr(30 * a +
        6 * b, 6).toUpperCase()
}
var tj = null;

function uj() {
    if (tj) return tj;
    for (var a = [], b = 0; 67 > b; b++) {
        var c = sj,
            c = new oj(c(b, 0), c(b, 1), c(b, 2), c(b, 3), c(b, 4));
        c.color = b;
        a[b] = c
    }
    return tj = a
}
for (var vj = [35, 23, 42, 14, 22, 33, 40, 28, 30, 31, 12, 32, 8, 7, 6, 26, 5, 4, 39, 21, 15, 2, 37, 25], wj = [26, 23, 41, 28, 33, 37, 35, 30, 38, 40, 24, 31, 27, 22, 25, 42, 29, 32, 34, 36, 39, 6, 1, 12, 9, 14, 4, 21, 8, 19, 7, 2, 11, 10, 3, 20, 13, 5, 15, 16, 17, 18], xj = {}, yj = 0; yj < wj.length; ++yj) xj[wj[yj]] = yj;

function zj(a) {
    a = Aj(a);
    return uj()[a] || null
}
var Bj = null;

function Cj(a) {
    a = a.toUpperCase();
    if (!Bj) {
        Bj = {};
        for (var b = uj(), c = 0, d = b.length; c < d; ++c) Bj[b[c].a] = c
    }
    return Bj[a] || -1
}

function Dj(a) {
    if (!a) return wj[0];
    a = xj[a];
    return w(a) ? wj[(a + 1) % wj.length] : wj[0]
}

function qj(a) {
    a = Number(a | 0).toString(16);
    return 2 > a.length ? "0" + a : a
}

function Aj(a) {
    return 43 <= a && 66 >= a ? vj[a - 43] : a
}

function Ej(a) {
    var b = {};
    gc(a, function(a, d) {
        d = parseInt(d, 10);
        d = Aj(d);
        var e = b[d];
        e && (a += e);
        b[d] = a
    });
    return b
};

function Fj(a, b, c, d) {
    this.h = a;
    this.a = c || a;
    a = this.g = b;
    b = this.getId();
    if (b in a.a) throw Error("Already registered an event source with id " + b);
    a.a[b] = new Ti;
    a.f[b] = this;
    d || (Gj = d = Dj(Gj), d = zj(d));
    this.l = d
}
D(Fj, Vi);
Fj.prototype.va = k("l");
Fj.prototype.Pc = function(a) {
    return ua(this.a, a.a)
};
Fj.prototype.f = function(a, b) {
    b.call(null, [], null)
};
var Gj = 0;
var Hj = {};

function Ij(a, b) {
    var c = [a.year, Jj(a.month), Jj(a.m)].join("-"),
        d = [Jj(a.hour), Jj(a.minute), Jj(a.second)].join(":"),
        e = "";
    if (w(b))
        if (0 == b) e = "Z";
        else {
            var e = b,
                f = Hj[e];
            if (f) e = f;
            else {
                0 > e ? (f = "-", e *= -1) : f = "+";
                var g = Math.floor(e / 60);
                10 > g && (g = "0" + g);
                e %= 60;
                e = Hj[e] = Ha(f, g, ":", 10 > e ? "0" + e : e)
            }
        }
    return Ha(c, "T", d, e)
}

function Jj(a) {
    return 10 > a ? "0" + a : String(a)
};

function Kj() {
    L.call(this)
}
D(Kj, L);

function Lj(a, b, c) {
    L.call(this);
    this.c = a;
    this.g = b || Infinity;
    this.f = c;
    C();
    this.a = this.oa();
    this.b = 0;
    this.fc()
}
D(Lj, Kj);
var Mj = 0;
n = Lj.prototype;
n.Ya = function(a) {
    var b = this.c;
    void 0 === b ? b = -6E4 * (new Date(a)).getTimezoneOffset() : a >= this.g && (b = this.f);
    return b
};
n.dc = function() {
    var a = C() + Mj;
    return this.Ya(a) + a
};
n.oa = function() {
    return new Date(this.dc())
};
n.Yb = function() {
    this.a.getUTCDate() != this.oa().getUTCDate() && (window.clearTimeout(this.b), this.fc());
    return this.a
};
n.fc = function() {
    var a = this.a,
        b = this.oa(),
        c = 18E5 - b.getTime() % 18E5;
    this.b = window.setTimeout(y(this.fc, this), c);
    a.getUTCDate() !== b.getUTCDate() && (this.a = this.oa(), M(this, "newday"))
};

function Nj(a, b, c, d) {
    void 0 != c.body && (c.body = gadgets.json.stringify(c.body));
    c.path = "/calendar/" + a.T + "/" + escape(b);
    c.root = a.l.getProxyUrl();
    gapi.client.request(c).then(function(a) {
        d(a.result)
    }, function() {
        c.authType = "none";
        gapi.client.request(c).execute(d)
    })
};

function Oj(a, b) {
    var c = a.title || b || "",
        d = Jg(a.iconLink);
    Ng.call(this, c, d);
    if (c = a.type) d = 2, "application/x-google-gadgets+xml" == c ? d = 1 : c.match(/^image/i) && (d = 3), this.type = d;
    if (a.link || a.width || a.height || a.display || a.preferences) this.a = Mg(a.link), this.c = Pj[a.display] || null || "ICON", this.ia = parseInt(a.width, 10) || 300, this.h = parseInt(a.height, 10) || 400, a.preferences && (this.g = a.preferences)
}
D(Oj, Ng);
Oj.prototype.a = "";
Oj.prototype.c = "ICON";
Oj.prototype.getHeight = k("h");
Oj.prototype.Y = k("type");
var Pj = {
    icon: "ICON",
    chip: "CHIP"
};
var Qj = gb(1970, 1, 1),
    Rj = gb(1970, 1, 2);

function Sj(a) {
    return a && a.date ? Ib(a.date) : a && a.dateTime ? Ib(a.dateTime) : null
};

function Tj(a, b) {
    this.a = [];
    this.b = a;
    this.c = b
};

function Uj(a, b, c, d, e, f) {
    Fj.call(this, c, b, e, f);
    this.b = a;
    this.c = this.b.a;
    this.i = d
}
D(Uj, Fj);
Uj.prototype.f = function(a, b, c) {
    null == b && (b = ca);
    var d = this.b.h;
    if (null == d) {
        var d = this.c.Ya(C() + Mj) / 6E4,
            e = "+";
        0 > d && (e = "-", d = -d);
        var f = d / 60,
            d = "GMT" + e + f + ":" + d % 60
    }
    if (10 < this.i) c ? (e = Ib(c), f = this.c.oa(), e = 27 > ab(qb(f), e).m) : e = !1, e = e ? c : void 0, d = {
        calendarId: this.getId(),
        singleEvents: !0,
        timeZone: d,
        maxAttendees: 1,
        maxResults: 250,
        updatedMin: e,
        sanitizeHtml: !0
    }, Vj(this, d, a), Wj(this, d, [], null, b, !! c);
    else {
        c = d;
        var d = [],
            e = a.start.u(),
            f = a.end.u(),
            g = cb(e),
            h = new eb(30, 0, 0, 0);
        for (Db(g, h); g.j() < f.j();) {
            var l = g.u();
            d.push(new E(e,
                l));
            e = l;
            Db(g, h)
        }
        d.push(new E(e, f));
        a = new Tj(d.length, a);
        for (e = 0; e < d.length; e++) f = {
            timeZone: c,
            items: [{
                id: this.getId()
            }]
        }, Vj(this, f, d[e]), Nj(this.b, "freeBusy", {
            method: "POST",
            body: f
        }, y(this.s, this, b, a))
    }
};

function Vj(a, b, c) {
    var d = c.start.u();
    c = c.end.u();
    a = a.c.Ya(C() + Mj) / 6E4;
    d = Ij(d.wa(), a);
    c = Ij(c.wa(), a);
    b.timeMin = d;
    b.timeMax = c
}
Uj.prototype.s = function(a, b, c) {
    if (c) {
        var d = (c = c.calendars) ? c[this.getId()] : void 0;
        if (d && d.busy) {
            c = [];
            for (var d = d.busy, e = 0; e < d.length; e++) {
                var f = d[e],
                    g = Ib(f.start),
                    h = Ib(f.end),
                    f = oh(f.start + f.end, g, h);
                f.a = O("busy");
                g = f;
                g.Tb = this;
                h = this.getId();
                g.i = h;
                c.push(f)
            }
        } else c = null
    } else c = null;
    c = c || [];
    b.b--;
    b.a = b.a.concat(c);
    if (0 == b.b) {
        c = this.g;
        h = b.c;
        if (e = c.a[this.getId()]) {
            for (var d = [], l = h.start.u().F(), f = h.end.u().F(), g = h.start.u().j(), h = h.end.u().j(); l < f; l = Xa(l)) {
                var m = e.a[l],
                    p;
                for (p in m)(m = e.g[p]) && m.J().u().j() >=
                    g && m.O.u().j() <= h && (delete e.g[p], d.push(p), delete e.a[l][p])
            }
            for (p = 0; p < d.length; p++) delete c.b[d[p]]
        }
        a(b.a, Va(qb(this.c.oa())))
    }
};
Uj.prototype.I = function(a, b, c, d, e, f) {
    if (f && "calendar#events" == f.kind) {
        var g = [],
            h = f.items;
        if (h)
            for (var l = 0; l < h.length; l++) {
                var m;
                m = h[l];
                var p = f.defaultReminders,
                    q = m.id,
                    r = Sj(m.start),
                    v = Sj(m.end),
                    t = void 0;
                if (r && v) {
                    q = t = oh(q, r, v);
                    r = m.visibility;
                    v = m.summary;
                    q.a = v ? O(v) : r && "public" != r && "default" != r ? O("busy") : O("");
                    w(m.description) && (q.g = m.description);
                    null != m.htmlLink && (t.Ea = m.htmlLink);
                    w(m.location) && (t.f = m.location);
                    if (w(m.attendees)) {
                        q = void 0;
                        a: {
                            q = m.attendees;
                            for (r = 0; r < q.length; r++)
                                if (q[r].self) {
                                    q = q[r];
                                    break a
                                }
                            q = null
                        }
                        q = q && q.responseStatus;
                        w(q) && (r = void 0, q = Rg[q], r = w(q) ? q : null, null != r && (t.Nb = r))
                    }
                    q = void 0;
                    !m.reminders || m.reminders.useDefault ? q = p : m.reminders && m.reminders.overrides && (q = m.reminders.overrides);
                    if (q)
                        for (p = q, q = t, r = 0; r < p.length; r++) {
                            var z = p[r];
                            if ("popup" == z.method) {
                                var v = q,
                                    z = z.minutes,
                                    A = cb(v.J());
                                A.minute -= z;
                                v.W.push(A.wa())
                            }
                        }
                    p = t;
                    w(m.gadget) && (q = m.gadget, void 0 != q.title && (q.title = va(q.title)), q = new Oj(q, p.a.content), p.Xc = q ? q : null)
                } else t = new mh(q, Qj, Rj);
                "cancelled" == m.status && (t.cb = !0);
                t = m = t;
                t.Tb = this;
                p = this.getId();
                t.i = p;
                g.push(m)
            }
        b = b.concat(g);
        g = Ib(f.updated, !1, !0);
        c = c ? c.min(g) : g;
        if (f.nextPageToken) a.pageToken = f.nextPageToken, Wj(this, a, b, c, d, e);
        else {
            if (e && !a.updatedMin && (a = this.g, f = a.a[this.getId()])) {
                e = [];
                for (var B in f.g) e.push(B);
                f.a = {};
                f.g = {};
                for (B = 0; B < e.length; B++) delete a.b[e[B]]
            }
            d(b, Va(c))
        }
    } else {
        a: {
            if (f && f.error && (B = f.error.data))
                for (f = 0; f < B.length; f++)
                    if ("updatedMinTooLongAgo" == B[f].reason) {
                        B = !0;
                        break a
                    }
            B = !1
        }
        B ? (delete a.updatedMin, Wj(this, a, b, c, d, e)) : d(null)
    }
};

function Wj(a, b, c, d, e, f) {
    Nj(a.b, "calendars/" + b.calendarId + "/events", {
        params: b
    }, y(a.I, a, b, c, d, e, f))
};

function Xj() {}
var Yj = {};

function Zj() {}
D(Zj, Xj);
Zj.prototype.init = function(a, b) {
    this.b = a;
    this.a = b;
    gapi.config.update("googleapis.config/auth/useFirstPartyAuth", !0);
    void 0 != a.A && gapi.client.setApiKey(a.A);
    var c = Lg();
    null != c && gapi.config.update("googleapis.config/sessionIndex", c)
};
Zj.prototype.create = function(a, b, c, d) {
    return new Uj(this.b, this.a, a, b, d, c)
};

function ak() {}
ak.prototype.a = null;

function bk(a) {
    var b;
    (b = a.a) || (b = {}, ck(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
    return b
};
var dk;

function ek() {}
D(ek, ak);

function fk(a) {
    return (a = ck(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}

function ck(a) {
    if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d), a.b = d
            } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.b
}
dk = new ek;

function gk(a) {
    L.call(this);
    this.headers = new ef;
    this.l = a || null;
    this.b = !1;
    this.i = this.a = null;
    this.C = "";
    this.c = this.A = this.g = this.s = !1;
    this.h = 0;
    this.f = null;
    this.K = "";
    this.G = this.L = !1
}
D(gk, L);
var hk = /^https?$/i,
    ik = ["POST", "PUT"],
    jk = [];

function kk(a, b, c, d, e, f, g) {
    var h = new gk;
    jk.push(h);
    b && Uc(h.ca, "complete", b, !1, void 0, void 0);
    Uc(h.ca, "ready", h.pe, !0, void 0, void 0);
    f && (h.h = Math.max(0, f));
    g && (h.L = g);
    lk(h, a, c, d, e);
    return h
}
n = gk.prototype;
n.pe = function() {
    this.M();
    Vb(jk, this)
};

function lk(a, b, c, d, e) {
    if (a.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.C + "; newUri=" + b);
    c = c ? c.toUpperCase() : "GET";
    a.C = b;
    a.s = !1;
    a.b = !0;
    a.a = a.l ? fk(a.l) : fk(dk);
    a.i = a.l ? bk(a.l) : bk(dk);
    a.a.onreadystatechange = y(a.wd, a);
    try {
        a.A = !0, a.a.open(c, String(b), !0), a.A = !1
    } catch (g) {
        mk(a);
        return
    }
    b = d || "";
    var f = a.headers.clone();
    e && kf(e, function(a, b) {
        f.set(b, a)
    });
    e = Tb(f.na());
    d = u.FormData && b instanceof u.FormData;
    !(0 <= Ob(ik, c)) || e || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    f.forEach(function(a, b) {
        this.a.setRequestHeader(b, a)
    }, a);
    a.K && (a.a.responseType = a.K);
    jc(a.a, "withCredentials") && (a.a.withCredentials = a.L);
    try {
        nk(a), 0 < a.h && (a.G = ok(a.a), a.G ? (a.a.timeout = a.h, a.a.ontimeout = y(a.Gd, a)) : a.f = Zh(a.Gd, a.h, a)), a.g = !0, a.a.send(b), a.g = !1
    } catch (g) {
        mk(a)
    }
}

function ok(a) {
    return G && H(9) && "number" == typeof a.timeout && w(a.ontimeout)
}

function Ub(a) {
    return "content-type" == a.toLowerCase()
}
n.Gd = function() {
    "undefined" != typeof ba && this.a && (M(this, "timeout"), this.a && this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1, M(this, "complete"), M(this, "abort"), pk(this)))
};

function mk(a) {
    a.b = !1;
    a.a && (a.c = !0, a.a.abort(), a.c = !1);
    qk(a);
    pk(a)
}

function qk(a) {
    a.s || (a.s = !0, M(a, "complete"), M(a, "error"))
}
n.v = function() {
    this.a && (this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1), pk(this, !0));
    gk.D.v.call(this)
};
n.wd = function() {
    this.isDisposed() || (this.A || this.g || this.c ? rk(this) : this.vf())
};
n.vf = function() {
    rk(this)
};

function rk(a) {
    if (a.b && "undefined" != typeof ba && (!a.i[1] || 4 != (a.a ? a.a.readyState : 0) || 2 != sk(a)))
        if (a.g && 4 == (a.a ? a.a.readyState : 0)) Zh(a.wd, 0, a);
        else if (M(a, "readystatechange"), 4 == (a.a ? a.a.readyState : 0)) {
        a.b = !1;
        try {
            var b = sk(a),
                c;
            a: switch (b) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    c = !0;
                    break a;
                default:
                    c = !1
            }
            var d;
            if (!(d = c)) {
                var e;
                if (e = 0 === b) {
                    var f = String(a.C).match(ig)[1] || null;
                    if (!f && u.self && u.self.location) var g = u.self.location.protocol,
                    f = g.substr(0, g.length - 1);
                    e = !hk.test(f ? f.toLowerCase() :
                        "")
                }
                d = e
            }
            d ? (M(a, "complete"), M(a, "success")) : qk(a)
        } finally {
            pk(a)
        }
    }
}

function pk(a, b) {
    if (a.a) {
        nk(a);
        var c = a.a,
            d = a.i[0] ? ca : null;
        a.a = null;
        a.i = null;
        b || M(a, "ready");
        try {
            c.onreadystatechange = d
        } catch (e) {}
    }
}

function nk(a) {
    a.a && a.G && (a.a.ontimeout = null);
    "number" == typeof a.f && (u.clearTimeout(a.f), a.f = null)
}

function sk(a) {
    try {
        return 2 < (a.a ? a.a.readyState : 0) ? a.a.status : -1
    } catch (b) {
        return -1
    }
};

function tk(a, b, c, d) {
    if (!kc(a.a)) {
        var e = tk.a + "=",
            f = encodeURIComponent,
            g = [];
        c = c || "";
        b = b || "";
        for (var h in a.a) g.push(b + h + c), g.push(a.a[h].join("#"));
        (d || kk)(tk.b, null, "POST", e + f(g.join(":")));
        a.reset()
    }
}
tk.a = "perf";
tk.b = "perf";

function uk(a, b, c) {
    I.call(this);
    this.b = null != c ? y(a, c) : a;
    this.f = b;
    this.c = y(this.wf, this);
    this.a = []
}
D(uk, I);
n = uk.prototype;
n.Fb = !1;
n.Ja = null;
n.Ue = function(a) {
    this.a = arguments;
    this.Ja ? this.Fb = !0 : vk(this)
};
n.stop = function() {
    this.Ja && (u.clearTimeout(this.Ja), this.Ja = null, this.Fb = !1, this.a = [])
};
n.v = function() {
    uk.D.v.call(this);
    this.stop()
};
n.wf = function() {
    this.Ja = null;
    this.Fb && (this.Fb = !1, vk(this))
};

function vk(a) {
    a.Ja = Zh(a.c, a.f);
    a.b.apply(null, a.a)
};
var wk = 0;

function xk() {
    if (wk) return wk;
    var a = document.createElement("div");
    a.style.cssText = "visibility:hidden;overflow-y:scroll;position:relative;top:0;width:100px;height:100px";
    document.body.appendChild(a);
    wk = a.offsetWidth - a.clientWidth || 18;
    document.body.removeChild(a);
    return wk
};

function yk(a) {
    L.call(this);
    this.b = a
}
D(yk, L);
yk.prototype.getId = k("b");
yk.prototype.getKey = k("b");
yk.prototype.Pc = function(a) {
    return ua(this.a.a, a.a.a)
};

function zk(a) {
    L.call(this);
    this.h = (fg++).toString(36);
    this.c = new L;
    a = a || [];
    for (var b = {}, c = 0; c < a.length; c++) {
        var d = a[c],
            e = d.getKey();
        b[e] = d;
        d.Ra && d.Ra(this.c)
    }
    this.a = lc(b);
    this.f = a.length;
    J(this.c, "change", y(this.bf, this))
}
D(zk, L);
n = zk.prototype;
n.fb = null;
n.Ab = !1;
n.Ia = 0;
n.v = function() {
    zk.D.v.call(this);
    for (var a in this.a) Jc(this.a[a]);
    this.c.M()
};
n.Ma = function() {
    return 0 == this.f
};
n.Vb = function(a) {
    return this.a[a]
};
n.contains = function(a) {
    return jc(this.a, a)
};
n.Ub = function(a) {
    var b = a.getKey();
    if (jc(this.a, b)) return !1;
    this.a[b] = a;
    this.f++;
    a.Ra && a.Ra(this.c);
    this.Ia && a.xa && a.xa();
    Ak(this, "e", a);
    Bk(this);
    return !0
};
n.na = function() {
    return ic(this.a)
};
n.xa = function() {
    this.Ia++;
    if (1 == this.Ia)
        for (var a in this.a) {
            var b = this.a[a];
            b.xa && b.xa()
        }
};
n.Xa = function() {
    if (1 == this.Ia)
        for (var a in this.a) {
            var b = this.a[a];
            b.Xa && b.Xa()
        }
    this.Ia--;
    Bk(this)
};

function Ak(a, b, c) {
    var d = a.fb || {};
    b in d || (d[b] = []);
    d[b].push(c);
    a.fb = d
}
n.bf = function(a) {
    Ak(this, "change", a.target);
    this.Ab = !0;
    Bk(this)
};
n.H = function(a) {
    return a === this
};
n.getKey = k("h");

function Bk(a) {
    if (!a.Ia && (a.fb || a.Ab)) {
        a.xa();
        var b = a.Ab;
        a.Ab = !1;
        a.fb && (b = new Ck, a.fb = null, M(a, b), b = !0);
        b && M(a, "change");
        a.Xa()
    }
}

function Ck() {
    Kc.call(this, "g")
}
D(Ck, Kc);

function Dk(a, b, c, d) {
    this.b = b;
    this.a = Aj(a);
    this.f = d;
    this.c = (b ? rj(c) : zj(a)) || rj(c)
}

function Ek(a) {
    a = Aj(a);
    return new Dk(a, !1, sj(a, 0), "#000000")
}
Dk.prototype.va = k("c");

function Fk(a, b, c) {
    I.call(this);
    this.c = a;
    this.a = {};
    this.b = {};
    this.f = c || [];
    Gk(this, b || [])
}
D(Fk, I);

function Hk(a, b, c) {
    a.a[b] = c;
    b = c.a;
    a.b[b] = (a.b[b] || 0) + 1
}
Fk.prototype.va = function(a) {
    w(this.a[a]) || Gk(this, [a]);
    return this.a[a].va()
};

function Gk(a, b) {
    for (var c = 0, d = b.length; c < d; c++) {
        var e = b[c],
            f = a.c[e];
        w(f) && Hk(a, e, f)
    }
    c = 0;
    for (d = b.length; c < d; ++c)
        if (e = b[c], !w(a.a[e])) {
            a: {
                var f = a.b,
                    g = a.f,
                    f = Ej(f);
                if (g) {
                    for (var h = [], l = 0; l < g.length; l++) h.push(Aj(g[l]));
                    g = h
                }
                if (g && g.length) {
                    h = Xb(wj);
                    for (l = 0; l < g.length; l++) Vb(h, g[l]);
                    g = h
                } else g = wj;
                for (var h = g[0], l = Infinity, m = 0, p = g.length; m < p; ++m) {
                    var q = g[m];
                    if (!f[q]) {
                        f = q;
                        break a
                    }
                    var r = f[q];
                    r < l && (h = q, l = r)
                }
                f = h
            }
            Hk(a, e, Ek(f))
        }
}
Fk.prototype.v = function() {
    Fk.D.v.call(this);
    this.b = this.a = this.c = null
};
Fk.prototype.clone = function() {
    var a = new Fk(lc(this.c));
    a.a = lc(this.a);
    a.b = lc(this.b);
    return a
};

function Ik(a) {
    zk.call(this);
    this.g = a || new Fk({});
    this.b = {}
}
D(Ik, zk);
Ik.prototype.v = function() {
    this.b = null;
    Ik.D.v.call(this)
};
Ik.prototype.Ub = function(a, b, c) {
    this.xa();
    var d = Ik.D.Ub.call(this, a);
    b || (this.b[a.getId()] = a, Ak(this, "h", a));
    c && Hk(this.g, a.getId(), c);
    this.Xa();
    return d
};
Ik.prototype.i = function(a, b) {
    x(a) || (a = a.getId());
    var c = this.b[a],
        d = !! c != b;
    b ? (c = this.Vb(a), this.b[a] = c) : delete this.b[a];
    d && (Ak(this, "h", c), Bk(this))
};

function Jk(a, b) {
    x(b) || (b = b.getId());
    return b in a.b
};

function Kk(a, b, c, d, e) {
    this.pa = a;
    this.b = b;
    this.c = b.ea();
    this.ha = c;
    this.U = d;
    this.a = e || 7;
    this.g = this.ha * this.U
}

function Lk(a) {
    var b;
    if (!(b = a.f)) {
        b = a.b.F();
        for (var c = a.U, d = a.a, e = [], f = 0, g = 0; g < a.ha; g++) {
            for (var h = 0; h < c; h++) e[f++] = b, b = Xa(b);
            for (; h < d; h++) b = Xa(b)
        }
        b = a.f = e
    }
    return b
}
Kk.prototype.H = function(a) {
    return this.pa.H(a.pa) && this.b.H(a.b) && this.ha == a.ha && this.U == a.U && this.a == a.a
};

function Mk(a, b) {
    var c = cb(a);
    c.m = Na(a.year, a.month);
    var d = (c.u().ea() - b + 7) % 7;
    c.m -= d + 35;
    return new Kk(a, c.u(), 7, 7)
}

function Nk() {}

function Ok(a) {
    this.a = a
}
D(Ok, Nk);

function Pk(a) {
    if (a.classList) return a.classList;
    a = a.className;
    return x(a) && a.match(/\S+/g) || []
}

function Qk(a, b) {
    var c;
    a.classList ? c = a.classList.contains(b) : (c = Pk(a), c = 0 <= Ob(c, b));
    return c
}

function Rk(a, b) {
    a.classList ? a.classList.add(b) : Qk(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}

function Sk(a, b) {
    a.classList ? a.classList.remove(b) : Qk(a, b) && (a.className = Qb(Pk(a), function(a) {
        return a != b
    }).join(" "))
};

function Tk(a) {
    var b = a.me,
        c = a.className,
        d = !! a.Ff,
        e = a.id,
        f = a.U,
        g = a.sf,
        h = !! a.kf,
        l = a.pa,
        m = a.summary,
        p = a.Be;
    a = a.rows;
    c = '<div class="' + Q(c) + 'monthtablediv monthtableSpace"><table class="' + Q(c) + 'monthtable" role="presentation" cellspacing=0 cellpadding=0 style="-moz-user-select:none;-webkit-user-select:none;">' + (d ? '<tr id="' + Q(e) + 'header" class="monthtableHeader"><td colspan=' + Mf(f - 2) + ' id="' + Q(g) + '" class="' + Q(b) + 'sb-cur">' + (h ? '<span class="h zippy-arrow" unselectable=on>&nbsp;</span>' : "") + '<span class="calHeaderSpace">' +
        O(l) + '</span></td><td colspan=2 class="' + Q(b) + 'sb-nav"><span id="' + Q(e) + 'prev" class="' + Q(b) + 'sb-prev goog-inline-block"></span><span id="' + Q(e) + 'next" class="' + Q(b) + 'sb-next goog-inline-block"></span></td></tr>' : '<tr class="' + Q(b) + 'heading" id="' + Q(e) + 'header"><td id="' + Q(e) + 'prev" class="' + Q(b) + 'prev">&laquo;</td><td colspan=' + Mf(f - 2) + ' id="' + Q(g) + '" class="' + Q(b) + 'cur">' + O(l) + '</td><td id="' + Q(e) + 'next" class="' + Q(b) + 'next">&raquo;</td></tr>') + '</table><table class="' + Q(c) + 'monthtable monthtableBody" summary="' +
        Q(m) + '" cellspacing=0 cellpadding=0 id="' + Q(e) + 'tbl" style="-moz-user-select:none;-webkit-user-select:none;"><colgroup span=7><tr class="' + Q(c) + 'days">';
    d = p.length;
    for (e = 0; e < d; e++) f = p[e], c += '<th scope="col" class="' + Q(b) + "dayh" + (f.Vf ? " " + Q(b) + "weekendh" : "") + '" title="' + Q(f.title) + '">' + O(f.Bb) + "</th>";
    c += "</tr>";
    b = a.length;
    for (p = 0; p < b; p++) c += O(a[p]);
    return P(c + "</table></div>")
}

function Uk(a) {
    var b = a.cols;
    a = '<tr style="cursor:' + (a.lf ? "pointer" : "default") + '" id="' + Q(a.id) + '">';
    for (var c = b.length, d = 0; d < c; d++) {
        var e = b[d];
        a += '<td id="' + Q(e.id) + '" class="' + Q(e.className) + '">' + O(e.m) + "</td>"
    }
    return P(a + "</tr>")
};

function Vk(a, b, c, d, e, f, g, h, l, m) {
    I.call(this);
    this.C = d;
    this.f = a;
    this.id = e || this.f.id + "_";
    this.className = f || "dp-";
    this.G = c;
    this.c = b;
    this.h = {};
    a = w(g) ? g : 1;
    h = (1 << a + 7) - (1 << a + (h || 5));
    this.T = h + (h >> 7);
    this.ja = !! l;
    this.L = !! m;
    Wk[this.id] = this
}
D(Vk, I);
var Wk = {};
n = Vk.prototype;
n.ub = !1;
n.ic = null;
n.Bd = null;

function Xk(a) {
    var b = a.a;
    if (!a.b) {
        a.s = [];
        for (var c = 7; c--;) a.s[c] = Yk(a.c, a.c.a.c[c]);
        for (var c = a.className, d = [], e = 48; e--;) {
            var f = ["cell"];
            e & 2 ? (f.push(e & 1 ? "weekend-selected" : "weekday-selected"), e & 8 && f.push("today-selected"), f.push(e & 4 ? "onmonth-selected" : "offmonth-selected")) : (f.push(e & 1 ? "weekend" : "weekday"), e & 8 && f.push("today"), f.push(e & 4 ? "onmonth" : "offmonth"));
            e & 16 && f.push("day-left");
            e & 32 && f.push("day-right");
            d[e] = c + f.join(" " + c) + " "
        }
        a.l = d;
        a.g = [];
        a.b = a.id + "day_";
        a.i = a.id + "cur"
    }
    var g = Zk(a.c, a.a.pa);
    a.ka && (g = a.ka + " - " + g);
    c = [];
    d = a.a.c;
    e = a.T;
    for (f = 0; f < b.U; f++) c.push({
        title: a.c.a.b[d],
        Vf: e >> d & 1,
        Bb: a.s[d]
    }), d = (d + 1) % 7;
    var b = a.f,
        d = a.className + "cell " + a.className,
        e = a.className,
        f = a.ja,
        h = a.id,
        l = a.a.U,
        m = a.i,
        p = a.L,
        q = Zk(a.c, a.a.pa),
        r = a.a,
        v = r.U,
        t = a.T,
        z = a.l,
        A = Lk(r),
        B = !! a.ic,
        K = B ? a.ic.F() : 1,
        R = B ? a.Bd.F() : 0,
        Ca = a.A.F(),
        Mb = a.a.pa.month,
        Qa = 0;
    a.K && (a.h = a.K(r));
    for (var sb = [], oa = 0; oa < a.a.ha; oa++) {
        for (var ia = [], ea = r.c, $a = v; $a--; Qa++) {
            var ta = A[Qa],
                Nb = (ta == Ca && 8) | ((ta >> 5 & 15) == Mb && 4) | (ta >= K && ta <= R && 2) | ($a == v - 1 && 16) | (0 ==
                    $a && 32) | t >> ea & 1,
                ea = (ea + 1) % 7;
            a.g[Qa] = Nb;
            ia.push({
                id: a.b + ta,
                m: ta & 31,
                className: z[Nb] + (a.h[ta] || "")
            })
        }
        sb.push(Uk({
            id: a.id + "row_" + oa,
            lf: B,
            cols: ia
        }))
    }
    te(b, Tk, {
        me: d,
        className: e,
        Ff: f,
        id: h,
        U: l,
        sf: m,
        kf: p,
        pa: q,
        summary: g,
        Be: c,
        rows: sb
    })
}
n.render = function() {
    if (this.ub) {
        Xk(this);
        var a = this.id,
            b = this.C;
        b(a + "prev").onmousedown = function() {
            $k(Wk[a], -1)
        };
        b(a + "next").onmousedown = function() {
            $k(Wk[a], 1)
        }
    }
};

function al(a, b) {
    var c = b.id;
    return c && 0 == c.indexOf(a.b) ? zb(parseInt(c.substr(a.b.length), 10)) : null
}

function bl(a, b) {
    return a.C(a.b + b)
}
n.o = k("f");

function $k(a, b) {
    cl(a, jb(a.a.pa.year, a.a.pa.month + b, 1).u())
}

function cl(a, b) {
    var c = a.a.pa;
    if (b.year != c.year || b.month != c.month) a.a = Mk(b, a.G.a), a.update()
}
n.update = function() {
    this.ub && this.render()
};
n.getId = k("id");

function dl(a, b, c, d) {
    a.ic = b;
    a.Bd = c;
    d && cl(a, d);
    if (a.ub) {
        d = Lk(a.a);
        b = b.F();
        c = c.F();
        for (var e = a.a.g; e--;) {
            var f = a.g[e],
                g = d[e],
                h = g >= b && g <= c ? f | 2 : f & -3;
            h != f && (f = e, bl(a, Lk(a.a)[f]).className = a.l[h] + (a.h[g] || ""), a.g[e] = h)
        }
    } else a.update()
}
n.setup = function(a) {
    this.A = a;
    this.a ? this.update() : this.a = Mk(a, this.G.a)
};
n.v = function() {
    delete this.f;
    delete Wk[this.id];
    Vk.D.v.call(this)
};

function el(a) {
    return P('<div id="dpPopup' + Q(a.id) + '" class="dp-popup" style="display: none;"></div>')
};

function fl(a, b, c, d) {
    L.call(this);
    this.b = c;
    this.a = a;
    a.setup(ni(b));
    dl(a, this.b.a, this.b.c, this.b.b);
    this.c = new rh(this);
    U(this.c, c, "change", this.jd);
    U(this.c, a.o(), "mousedown", this.ef);
    U(this.c, a.o(), "mouseover", this.ff);
    U(this.c, a.o(), "mouseout", this.Qe);
    U(this.c, b, "newday", this.Re);
    this.f = new rh(this);
    this.h = b;
    this.g = !! d
}
D(fl, L);
n = fl.prototype;
n.Fa = null;
n.sb = null;
n.Pe = function(a) {
    var b = al(this.a, a.target),
        c = this.Fa;
    b && c && !(this.sb || c).H(b) && (this.sb = b, this.b.jb(c.min(b), c.max(b), b));
    a.preventDefault()
};
n.ef = function(a) {
    var b = a.target,
        c = al(this.a, b);
    c ? (this.Fa = c, this.g && this.b.S(c), b = this.a.o().ownerDocument, U(this.f, b, "mousemove", this.Pe), U(this.f, b, "mouseup", this.gf)) : (c = this.a, (c.i == b.id || b.parentNode && c.i == b.parentNode.id) && M(this, "j"));
    a.preventDefault()
};
n.Hf = function() {
    var a = this.Fa;
    a && (th(this.f), this.Fa = null, this.sb || (this.g ? this.jd() : this.b.S(a)), this.sb = null, M(this, "i"))
};
n.gf = fl.prototype.Hf;
n.ff = function(a) {
    if ((a = al(this.a, a.target)) && null == this.Fa) {
        var b = this.a;
        Rk(bl(b, a.F()), b.className + "onhover")
    }
};
n.Qe = function(a) {
    if (a = al(this.a, a.target)) {
        var b = this.a;
        Sk(bl(b, a.F()), b.className + "onhover")
    }
};
n.jd = function() {
    var a = void 0;
    null == this.Fa && (a = this.b.b);
    dl(this.a, this.b.a, this.b.c, a)
};
n.Re = function() {
    var a = this.a,
        b = ni(this.h);
    a.A = b;
    a.update()
};
n.v = function() {
    Jc(this.c);
    Jc(null);
    Jc(this.f);
    Jc(this.a);
    fl.D.v.call(this)
};

function gl(a, b, c, d, e, f) {
    I.call(this);
    var g = Xd(a);
    f = we(el, {
        id: f || ""
    }, void 0, g);
    this.f = b;
    a = a.appendChild(f);
    this.c = new fl(new Vk(a, this.f, d, y(g.o, g)), c, e, !0);
    J(this.c, "i", this.$e, !1, this);
    c = this.c.a;
    c.ub = !0;
    c.render();
    this.a = new ei(a);
    bi(this.a);
    c = this.a;
    ai(c);
    c.Cb = !0;
    this.b = a
}
D(gl, I);
n = gl.prototype;
n.v = function() {
    this.a && (this.a.M(), this.a = null);
    this.b = null
};
n.ba = function(a) {
    this.a.ba(a)
};
n.Na = function() {
    return this.a.Na()
};
n.$e = function() {
    this.ba(!1)
};
n.o = k("b");
var hl;
var il = ["click", wc ? "keypress" : "keydown", "keyup"];

function jl(a, b, c, d) {
    function e(a) {
        var d = ad(b),
            e = a.target,
            e = ka(e) && 1 == e.nodeType ? a.target.getAttribute("role") || null : null;
        "click" != a.type || !Nc(a, 0) || xc && yc && a.Ka ? 13 != a.keyCode && 3 != a.keyCode || "keyup" == a.type ? 32 != a.keyCode || "keyup" != a.type || "button" != e && "tab" != e || (d.call(c, a), a.preventDefault()) : (a.type = "keypress", d.call(c, a)) : d.call(c, a)
    }
    e.b = b;
    e.a = c;
    d ? U(d, a, il, e, void 0) : J(a, il, e, void 0)
};
var kl = {
    8: "backspace",
    9: "tab",
    13: "enter",
    16: "shift",
    17: "ctrl",
    18: "alt",
    19: "pause",
    20: "caps-lock",
    27: "esc",
    32: "space",
    33: "pg-up",
    34: "pg-down",
    35: "end",
    36: "home",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    45: "insert",
    46: "delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    59: "semicolon",
    61: "equals",
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    93: "context",
    96: "num-0",
    97: "num-1",
    98: "num-2",
    99: "num-3",
    100: "num-4",
    101: "num-5",
    102: "num-6",
    103: "num-7",
    104: "num-8",
    105: "num-9",
    106: "num-multiply",
    107: "num-plus",
    109: "num-minus",
    110: "num-period",
    111: "num-division",
    112: "f1",
    113: "f2",
    114: "f3",
    115: "f4",
    116: "f5",
    117: "f6",
    118: "f7",
    119: "f8",
    120: "f9",
    121: "f10",
    122: "f11",
    123: "f12",
    186: "semicolon",
    187: "equals",
    189: "dash",
    188: ",",
    190: ".",
    191: "/",
    192: "`",
    219: "open-square-bracket",
    220: "\\",
    221: "close-square-bracket",
    222: "single-quote",
    224: "win"
};

function ll(a) {
    L.call(this);
    this.b = this.c = {};
    this.f = 0;
    this.l = pc(ml);
    this.s = pc(nl);
    this.g = null;
    this.a = a;
    J(this.a, "keydown", this.yb, !1, this);
    wc && J(this.a, "keyup", this.gd, !1, this);
    zc && !wc && (J(this.a, "keypress", this.kd, !1, this), J(this.a, "keyup", this.ld, !1, this))
}
var ol;
D(ll, L);

function pl(a) {
    this.a = a || null;
    this.next = a ? null : {}
}
var ml = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
    nl = "color date datetime datetime-local email month number password search tel text time url week".split(" ");
n = ll.prototype;
n.Ca = function(a, b) {
    ql(this.c, rl(arguments), a)
};

function rl(a) {
    if (x(a[1])) a = Rb(sl(a[1]), function(a) {
        return a.keyCode & 255 | a.rf << 8
    });
    else {
        var b = a,
            c = 1;
        ga(a[1]) && (b = a[1], c = 0);
        for (a = []; c < b.length; c += 2) a.push(b[c] & 255 | b[c + 1] << 8)
    }
    return a
}
n.v = function() {
    ll.D.v.call(this);
    this.c = {};
    hd(this.a, "keydown", this.yb, !1, this);
    wc && hd(this.a, "keyup", this.gd, !1, this);
    zc && !wc && (hd(this.a, "keypress", this.kd, !1, this), hd(this.a, "keyup", this.ld, !1, this));
    this.a = null
};

function sl(a) {
    a = a.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase();
    a = a.split(" ");
    for (var b = [], c, d = 0; c = a[d]; d++) {
        var e = c.split("+"),
            f = null;
        c = 0;
        for (var g, h = 0; g = e[h]; h++) {
            switch (g) {
                case "shift":
                    c |= 1;
                    continue;
                case "ctrl":
                    c |= 2;
                    continue;
                case "alt":
                    c |= 4;
                    continue;
                case "meta":
                    c |= 8;
                    continue
            }
            e = g;
            if (!ol) {
                f = {};
                g = void 0;
                for (g in kl) f[kl[g]] = uh(parseInt(g, 10));
                ol = f
            }
            f = ol[e];
            break
        }
        b.push({
            keyCode: f,
            rf: c
        })
    }
    return b
}
n.gd = function(a) {
    if (yc) {
        if (224 == a.keyCode) {
            this.i = !0;
            Zh(function() {
                this.i = !1
            }, 400, this);
            return
        }
        var b = a.f || this.i;
        67 != a.keyCode && 88 != a.keyCode && 86 != a.keyCode || !b || (a.f = b, this.yb(a))
    }
    32 == this.g && 32 == a.keyCode && a.preventDefault();
    this.g = null
};

function tl(a) {
    return zc && !wc && a.Ka && a.g && !a.h
}
n.kd = function(a) {
    32 < a.keyCode && tl(a) && (this.h = !0)
};
n.ld = function(a) {
    !this.h && tl(a) && this.yb(a)
};

function ql(a, b, c) {
    var d = b.shift(),
        e = a[d];
    if (e && (0 == b.length || e.a)) throw Error("Keyboard shortcut conflicts with existing shortcut");
    b.length ? (d = d.toString(), e = new pl, e = d in a ? a[d] : a[d] = e, ql(e.next, b, c)) : a[d] = new pl(c)
}
n.yb = function(a) {
    var b;
    b = a.keyCode;
    if (16 == b || 17 == b || 18 == b) b = !1;
    else {
        var c = a.target,
            d = "TEXTAREA" == c.tagName || "INPUT" == c.tagName || "BUTTON" == c.tagName || "SELECT" == c.tagName,
            e = !d && (c.isContentEditable || c.ownerDocument && "on" == c.ownerDocument.designMode);
        b = !d && !e || this.l[b] ? !0 : e ? !1 : a.g || a.Ka || a.f ? !0 : "INPUT" == c.tagName && this.s[c.type] ? 13 == b : "INPUT" == c.tagName || "BUTTON" == c.tagName ? 32 != b : !1
    } if (b)
        if ("keydown" == a.type && tl(a)) this.h = !1;
        else {
            b = uh(a.keyCode);
            c = b & 255 | ((a.h ? 1 : 0) | (a.Ka ? 2 : 0) | (a.g ? 4 : 0) | (a.f ? 8 : 0)) << 8;
            if (!this.b[c] || 1500 <= C() - this.f) this.b = this.c, this.f = C();
            if (c = this.b[c]) c.next ? (this.b = c.next, this.f = C(), a.preventDefault()) : (this.b = this.c, this.f = C(), a.preventDefault(), c = c.a, d = a.target, e = M(this, new ul("shortcut", c, d)), (e &= M(this, new ul("shortcut_" + c, c, d))) || a.preventDefault(), wc && (this.g = b))
        }
};

function ul(a, b, c) {
    Kc.call(this, a, c);
    this.b = b
}
D(ul, Kc);

function vl(a) {
    var b, c = a.Nf,
        d = a.id,
        e = a.Le,
        f = a.he;
    return P('<div class="calendar-container ' + Q(a.ya) + '">' + Gf(null == (b = c) ? "" : b) + '<div class="view-cap t1-embed">&nbsp;</div><div class="view-cap t2-embed">&nbsp;</div><div class="view-container-border" id="calendarContainer' + Q(d) + '"><div id="viewContainer' + Q(d) + '" class="view-container"></div>' + O(e) + '<div id="loading' + Q(d) + '" class="loading">' + O("Loading...") + '</div></div><div class="view-cap t2-embed">&nbsp;</div><div class="view-cap t1-embed">&nbsp;</div>' +
        Gf(null == (b = f) ? "" : b) + "</div>")
}

function wl(a) {
    var b = a.w,
        c = a.Sf,
        d = a.ne;
    a = a.name;
    return P('<td class="ui-rtsr"><div class="' + Q(b) + ' t1-embed">&nbsp;</div><div class="' + Q(b) + ' t2-embed">&nbsp;</div><div class="' + Q(b) + ' ui-rtsr-name" onclick="' + Q(S(d)) + "(" + Q(S(c)) + ')">' + O(a) + "</div></td>")
}

function xl(a) {
    var b = "<table cellpadding=0 cellspacing=0><tr>";
    a = a.If;
    for (var c = a.length, d = 0; d < c; d++) b += O(a[d]);
    return P(b + "</tr></table>")
};

function yl() {}
yl.prototype.a = function() {};

function zl(a, b, c) {
    this.element = a;
    this.b = b;
    this.c = c
}
D(zl, yl);
zl.prototype.a = function(a, b, c) {
    ph(this.element, this.b, a, b, c, this.c)
};

function Al(a) {
    yk.call(this, a.getId());
    this.a = a
}
D(Al, yk);
Al.prototype.va = function() {
    return this.a.va()
};
Al.prototype.Aa = k("a");

function Bl() {
    Ik.call(this)
}
D(Bl, Ik);
Bl.prototype.Vb = function(a) {
    return Bl.D.Vb.call(this, a)
};

function Cl(a) {
    var b = a.ie,
        c = a.id,
        d = a.oe,
        e = a.xf,
        f = !! a.checked,
        g = a.Kf;
    a = a.name;
    return P('<div class="calendar-row"><label for="cal' + Q(b) + "checkbox" + Q(c) + '"><input type="checkbox" name="calVisibility' + Q(c) + '" id="cal' + Q(b) + "checkbox" + Q(c) + '" value="' + Q(d) + '" onclick="' + Q(S(e)) + '(value, this.checked);"' + (f ? " checked " : "") + '><span style="color: ' + Q(T(g)) + '">' + O(a) + "</span></label></div>")
};

function Dl(a) {
    this.list = a;
    this.id = El++;
    this.a = ji(this.list.i, this.list)
}
var Xl = 0,
    El = 0;

function Yl(a) {
    Dl.call(this, a)
}
D(Yl, Dl);

function Zl(a, b) {
    this.h = a;
    var c = b || Xd(),
        d = c.We("div", {
            style: "position:relative;display:none;z-index:25000003"
        });
    c.Ve(c.a.body, d);
    ei.call(this, d);
    bi(this)
}
D(Zl, ei);
Zl.prototype.i = function() {
    this.ba(!1);
    if (!this.Na()) {
        var a = this.o(),
            b, c = this.h,
            d = c.id,
            e = hc(c.list.a);
        b = [];
        for (var f = 0; f < e.length; ++f) {
            var g = e[f].Aa(),
                h = g.getId(),
                l = ++Xl;
            b.push(Cl({
                id: c.id,
                ie: l,
                oe: h,
                checked: Jk(c.list, h),
                Kf: g.va().a,
                name: g.a,
                xf: c.a
            }))
        }
        c = '<div id="calendarList' + Q(d) + '" class="calendar-list">';
        d = b.length;
        for (e = 0; e < d; e++) c += O(b[e]);
        b = P(c + "</div>");
        a.innerHTML = ue(b);
        this.ba(!0)
    }
};

function $l(a, b, c, d, e) {
    L.call(this);
    this.f = b;
    b = e || {};
    for (var f in am) f in b || (b[f] = am[f]);
    this.A = a;
    this.b = Xd(a);
    this.g = c;
    this.s = [];
    this.c = null;
    this.ka = b.showNavigation;
    this.Da = b.showTabs;
    this.tc = b.showPrintButton;
    this.l = b.showDateMarker;
    this.ja = b.showCalendarMenu;
    this.Wd = b.showCurrentTime;
    this.Zd = b.showTz;
    this.Yd = b.showSubscribeButton;
    this.Xd = b.showElementsLogo;
    this.a = String(bm++);
    a = this.mb = new fi(this);
    this.Ud = a.a(this.Sa);
    this.uc = a.a(this.Lf);
    this.nb = a.a(this.cf);
    this.$d = a.a(this.subscribe);
    this.Vd =
        a.a(this.Bf);
    this.C = new rh(this);
    this.i = d;
    J(this.i, "g", this.af, !1, this);
    this.K = null;
    J(this.f.a, "newday", this.Oe, !1, this);
    this.h = new sd;
    d = new ud;
    d.S(ni(this.f.a));
    td(this.h, d);
    d = {};
    a = this.a;
    c = !! this.jf();
    a = P('<div class="header" id="nav' + Q(a) + '" style="overflow:hidden;' + (c ? "" : "display:none;") + '">&nbsp;</div>');
    d.Nf = a;
    d.he = null;
    a = [];
    G && (a.push("ie"), H("8") ? a.push("ie8") : H("7") ? a.push("ie7") : a.push("ie6"));
    d.ya = a.join(" ");
    a = "";
    this.Xd ? (a = this.f.g, a = P(G && 7 > Cc ? '<td valign="bottom" align="' + Q("right") +
        '"><a target="_blank" href="http://www.google.com/webelements"><span style="width:130px;height:20px;display:inline-block;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=' + Q(T(a)) + 'gwe.png,sizingMethod=crop)"></span></a></td>' : '<td valign="bottom"><a target="_blank" href="http://www.google.com/webelements"><img align="' + Q("right") + '" src="' + Q(Wf(a)) + 'gwe.png" width="130" height="20" border="0"></a></td>')) : this.Yd && (a = P('<td valign="bottom" style="text-align:right;"><div class="subscribe-image" style="display:inline-block;" onclick="' +
        Q(S(this.$d)) + '();" title="' + Q("Add to Google Calendar") + '">' + Gf(P('<div class="logo-plus-button"><div class="logo-plus-button-plus-icon"></div><div class="logo-plus-button-lockup"><span class="logo-plus-button-lockup-text">' + O("Calendar") + "</span></div></div>")) + "</div></td>"));
    c = "";
    this.Zd && (c = P('<td valign="bottom" id="timezone">' + O(this.f.h ? "Events shown in time zone: " + this.f.C : "Events shown in your computer's time zone") + "</td>"));
    d.id = this.a;
    a = P('<table id="footer' + Q(this.a) + '" class="footer" cellpadding="0" cellspacing="0" width="100%"><tr>' +
        O(c) + O(a) + "</tr></table>");
    d.Le = a;
    te(this.A, vl, d);
    d = this.b.o("nav" + this.a);
    var g;
    f = this.ka;
    var h = this.tc;
    e = this.Vd;
    var l = this.ja;
    a = this.a;
    c = this.f.g;
    var m, p;
    if (this.l) {
        m = this.a;
        p = this.nb;
        var q = this.uc;
        m = P('<td id="dateEditableBox' + Q(m) + '" class="date-picker-off" onmouseover="' + Q(S(p)) + '(true);" onmouseout="' + Q(S(p)) + '(false);" onmousedown="' + Q(S(q)) + '()"><div class="date-top" id="currentDate' + Q(m) + '">&nbsp;</div></td>');
        p = this.a;
        var q = this.nb,
            r = this.uc,
            v = this.f.g;
        p = P('<td id="dateMenuArrow' + Q(p) +
            '" class="date-picker-off" onmouseover="' + Q(S(q)) + '(true);" onmouseout="' + Q(S(q)) + '(false);" onmousedown="' + Q(S(r)) + '()"><img src="' + Q(Wf(v)) + 'menu_arrow_open.gif" id="arrowImg' + Q(p) + '" class="arrowImg" width=9 height=9></td>')
    }
    h = !! h;
    q = !! l;
    l = P;
    m = '<div class="date-controls"><table class="nav-table" cellpadding="0" cellspacing="0" border="0"><tr>' + (f ? P('<td class="date-nav-buttons"><button class="today-button" id="todayButton' + Q(a) + '">' + O("Today") + '</button><img id="navBack' + Q(a) + '" role=button tabindex=0 title="' +
        Q("Previous period") + '" src="//calendar.google.com/googlecalendar/images/blank.gif" width=22 height=17 class="navbutton navBack"><img id="navForward' + Q(a) + '" role=button tabindex=0 title="' + Q("Next period") + '" src="//calendar.google.com/googlecalendar/images/blank.gif" width=22 height=17 class="navbutton navForward"></td>') : "") + Gf(null == (g = m) ? "" : g) + Gf(null == (g = p) ? "" : g) + '<td class="navSpacer">&nbsp;</td>' + (h ? '<td><img src="' + Q(Wf(c)) + 'icon_print.gif" style="cursor: pointer;" width="16" height="16" onclick="' +
        Q(S(e)) + '()" title="' + Q("Print my calendar (shows preview)") + '"></td><td><div class="tab-name" onclick="' + Q(S(e)) + '()">' + O("Print") + "</div></td>" : "") + '<td id="calendarTabs' + Q(a) + '"></td>';
    g = q ? P('<td class="calendar-nav"><img id="calendarListButton' + Q(a) + '" src="' + Q(Wf(c)) + 'btn_menu6.gif" alt="" title="" width=15 height=14></td>') : "";
    g = l(m + g + "</tr></table></div>");
    d.innerHTML = ue(g);
    this.ka && (th(this.C), g = this.b, m = this.C, jl(g.o("navBack" + this.a), this.Vc, m.a || m, m), m = this.C, jl(g.o("navForward" + this.a),
        this.Wc, m.a || m, m), m = this.C, jl(g.o("todayButton" + this.a), this.sd, m.a || m, m));
    J(this.h, "change", this.Kd, !1, this);
    this.ja && (g = cm(this), g.g = 6, g.ra && g.$a(), g = cm(this), m = this.b.o("calendarListButton" + this.a), J(m, "mousedown", g.i, !1, g), g.f = new zl(m, 7) || void 0, g.ra && g.$a());
    this.Da && pi(this);
    this.l && (this.G = new gl(this.A, this.f.b, this.f.a, new Ok(this.f.c), this.h, this.a));
    qi(this);
    this.L = null;
    b = b.pingInterval || 36E5; - 1 != b && (this.vc = window.setInterval(y(this.Ne, this), b))
}
D($l, L);
var bm = 1;
$l.prototype.v = function() {
    $l.D.v.call(this);
    this.C.M();
    this.i.M();
    w(this.vc) && window.clearInterval(this.vc);
    this.mb.M()
};
var am = {
    showNavigation: !0,
    showPrintButton: !0,
    showTabs: !0,
    showDateMarker: !0,
    showCalendarMenu: !0,
    showSubscribeButton: !0,
    showTz: !0,
    showElementsLogo: !1
};
n = $l.prototype;
n.cf = function(a) {
    if (this.l) {
        var b = this.b.o("dateEditableBox" + this.a),
            c = this.b.o("dateMenuArrow" + this.a),
            d = this.b.o("arrowImg" + this.a);
        a ? (b.className = "date-picker-on", c.className = "date-picker-on date-picker-arrow-on", d.src = this.f.g + "menu_arrow_hover.gif") : (b.className = "date-picker-off", c.className = "date-picker-off", d.src = this.f.g + "menu_arrow_open.gif")
    }
};
n.Lf = function() {
    this.l && (this.G.Na() ? this.G.ba(!1) : (this.G.ba(!0), ph(this.b.o("dateMenuArrow" + this.a), 7, this.G.o(), 6, void 0, 5)))
};

function cm(a) {
    if (!a.K) {
        var b = new Yl(a.i);
        a.K = new Zl(b, a.b)
    }
    return a.K
}
n.jf = function() {
    return this.ka || this.l || this.Da || this.ja || this.tc
};

function qi(a) {
    if (!(0 >= Pe(a.A).clientHeight)) {
        var b = (parseInt(a.A.style.height, 10) || 0) - (a.b.o("footer" + a.a).offsetHeight + a.b.o("nav" + a.a).offsetHeight + 4),
            c = oi(a);
        0 >= b && (b = 1);
        c.style.height = b + "px";
        dm(a)
    }
}
n.Bf = function() {
    for (var a = this.c, b = a.Y().toUpperCase(), c = [], d = ic(this.i.b), e = 0; e < d.length; ++e) {
        var f = d[e];
        f && c.push(decodeURIComponent(f))
    }
    d = this.f.l;
    a = a.V();
    b = ng(d.Ob + "/print_preview", "dates", a.toString(), "hl", "en_GB", "ctz", d.Hd, "pgsz", "letter", "wkst", String(d.f + 1), "mode", b, "wdtp", this.f.f ? null : "23456", "src", c);
    b = window.open(b.toString(), "goocalprint", "location=0,status=0,fullscreen=0,directories=0,toolbar=0,menubar=0,width=600,height=680", !0);
    try {
        b.document.close(), b.focus()
    } catch (g) {}
};

function pi(a) {
    if (a.Da) {
        for (var b = a.s, c = a.c, d = [], e = 0; e < b.length; e++) {
            var f = b[e],
                g = f === c ? "ui-rtsr-selected" : "ui-rtsr-unselected";
            0 == e && (g += " ui-rtsr-first-tab");
            e == b.length - 1 && (g += " ui-rtsr-last-tab");
            d.push(wl({
                ne: a.Ud,
                w: g,
                name: f.za,
                Sf: f.Y()
            }))
        }
        te(a.b.o("calendarTabs" + a.a), xl, {
            If: d
        })
    }
}
n.df = function(a) {
    switch (a.b) {
        case "today":
            this.sd();
            break;
        case "prev":
            this.Vc();
            break;
        case "next":
            this.Wc();
            break;
        case "dayview":
            this.Sa("day");
            break;
        case "weekview":
            this.Sa("week");
            break;
        case "monthview":
            this.Sa("month");
            break;
        case "agendaview":
            this.Sa("agenda")
    }
};
n.Sa = function(a) {
    if ("string" == typeof a) {
        var b = a;
        a = null;
        for (var c = 0; c < this.s.length; ++c) {
            var d = this.s[c];
            if (d.Y() == b) {
                a = d;
                break
            }
        }
        if (!a) return !1
    }
    b = 0 == a.Y().lastIndexOf("next", 0);
    if (a == this.c && !b) return !1;
    this.c && this.c.Ga();
    if (this.c = a) a = this.c.a, a.jb(this.h.a, this.h.c, this.h.b), td(this.h, a);
    this.Kd();
    dm(this);
    pi(this);
    return !0
};
n.af = function() {
    dm(this)
};

function dm(a) {
    (a = a.c) && a.render()
}

function xi(a, b, c) {
    em(a, !0);
    Zi(a.g, ic(a.i.b), b, function(b) {
        c.call(null, b);
        em(a, 0 < a.g.h)
    })
}
n.Ne = function() {
    if (this.c && !(0 >= Pe(this.A).clientHeight)) {
        var a = this.g,
            b = this.c.V(),
            c = y(this.uf, this),
            b = $i(a, ic(a.f), b, c, !0),
            d;
        for (d in b.a) {
            var c = a.f[d],
                e = a.a[d],
                f = y(a.l, a, d, b);
            c.f(b.a[d], f, e.f)
        }
    }
};
n.uf = function() {
    dm(this)
};

function em(a, b) {
    var c = a.b.o("loading" + a.a),
        d = c.style,
        e;
    if (null != a.L) e = a.L;
    else {
        e = xk();
        var f = oi(a);
        e += a.b.o("calendarContainer" + a.a).offsetWidth - (f.offsetWidth + f.offsetLeft);
        a.L = e
    }
    d.right = e + "px";
    c.style.display = b ? "block" : "none"
}
n.Oe = function() {
    window.setTimeout(y(this.Je, this), 3E5 * Math.random())
};
n.Je = function() {
    dm(this)
};
n.Wc = function() {
    this.c.Zc()
};
n.Vc = function() {
    this.c.Yc()
};
n.sd = function() {
    var a = ni(this.f.a);
    this.h.S(a)
};
n.Kd = function() {
    this.l && this.c && je(this.b.o("currentDate" + this.a), this.c.Wb())
};

function oi(a) {
    return a.b.o("viewContainer" + a.a)
}
n.subscribe = function() {
    for (var a = ic(this.i.b), b = [], c = 0; c < a.length; ++c) b.push(a[c]);
    window.open(ng(this.f.l.Ob + "/render", "cid", b))
};

function fm() {
    L.call(this)
}
D(fm, L);

function gm(a, b, c, d, e, f, g) {
    L.call(this);
    ga(a);
    this.c = b;
    this.b = c;
    this.g = w(d) ? d : 0;
    this.f = e || 7;
    this.a = g || {}
}
D(gm, fm);
gm.prototype.set = function(a, b) {
    var c = this.a[a];
    this.a[a] = b;
    return c != b
};
gm.prototype.get = function(a) {
    return this.a[a]
};

function hm(a, b, c) {
    this.c = a;
    this.a = b;
    this.b = c || "";
    this.b || this.a.match(im)
}
var im = /GMT[+-](([01]\d((?=:00)|(:\d{2})))|((\?)*))/;
hm.prototype.H = function(a) {
    return null !== a && this.c == a.c && this.a == a.a
};

function jm() {}

function km(a, b, c) {
    a.a = null;
    b || (b = []);
    a.h = void 0;
    a.f = -1;
    a.b = b;
    a: {
        if (a.b.length) {
            b = a.b.length - 1;
            var d = a.b[b];
            if (d && "object" == typeof d && !ga(d)) {
                a.g = b - a.f;
                a.c = d;
                break a
            }
        }
        a.g = Number.MAX_VALUE
    }
    if (c)
        for (b = 0; b < c.length; b++) d = c[b], d < a.g ? (d += a.f, a.b[d] = a.b[d] || lm) : a.c[d] = a.c[d] || lm
}
var lm = [];

function V(a, b) {
    if (b < a.g) {
        var c = b + a.f,
            d = a.b[c];
        return d === lm ? a.b[c] = [] : d
    }
    d = a.c[b];
    return d === lm ? a.c[b] = [] : d
}

function W(a, b, c) {
    a.a || (a.a = {});
    if (!a.a[c]) {
        var d = V(a, c);
        d && (a.a[c] = new b(d))
    }
    return a.a[c]
}

function mm(a) {
    var b = nm;
    a.a || (a.a = {});
    if (!a.a[1]) {
        for (var c = V(a, 1), d = [], e = 0; e < c.length; e++) d[e] = new b(c[e]);
        a.a[1] = d
    }
    b = a.a[1];
    b == lm && (b = a.a[1] = []);
    return b
}
jm.prototype.toString = function() {
    return this.b.toString()
};
var om = {
    mc: {
        1E3: {
            other: "0K"
        },
        1E4: {
            other: "00K"
        },
        1E5: {
            other: "000K"
        },
        1E6: {
            other: "0M"
        },
        1E7: {
            other: "00M"
        },
        1E8: {
            other: "000M"
        },
        1E9: {
            other: "0B"
        },
        1E10: {
            other: "00B"
        },
        1E11: {
            other: "000B"
        },
        1E12: {
            other: "0T"
        },
        1E13: {
            other: "00T"
        },
        1E14: {
            other: "000T"
        }
    },
    lc: {
        1E3: {
            other: "0 thousand"
        },
        1E4: {
            other: "00 thousand"
        },
        1E5: {
            other: "000 thousand"
        },
        1E6: {
            other: "0 million"
        },
        1E7: {
            other: "00 million"
        },
        1E8: {
            other: "000 million"
        },
        1E9: {
            other: "0 billion"
        },
        1E10: {
            other: "00 billion"
        },
        1E11: {
            other: "000 billion"
        },
        1E12: {
            other: "0 trillion"
        },
        1E13: {
            other: "00 trillion"
        },
        1E14: {
            other: "000 trillion"
        }
    }
}, om = {
        mc: {
            1E3: {
                other: "0K"
            },
            1E4: {
                other: "00K"
            },
            1E5: {
                other: "000K"
            },
            1E6: {
                other: "0M"
            },
            1E7: {
                other: "00M"
            },
            1E8: {
                other: "000M"
            },
            1E9: {
                other: "0B"
            },
            1E10: {
                other: "00B"
            },
            1E11: {
                other: "000B"
            },
            1E12: {
                other: "0T"
            },
            1E13: {
                other: "00T"
            },
            1E14: {
                other: "000T"
            }
        },
        lc: {
            1E3: {
                other: "0 thousand"
            },
            1E4: {
                other: "00 thousand"
            },
            1E5: {
                other: "000 thousand"
            },
            1E6: {
                other: "0 million"
            },
            1E7: {
                other: "00 million"
            },
            1E8: {
                other: "000 million"
            },
            1E9: {
                other: "0 billion"
            },
            1E10: {
                other: "00 billion"
            },
            1E11: {
                other: "000 billion"
            },
            1E12: {
                other: "0 trillion"
            },
            1E13: {
                other: "00 trillion"
            },
            1E14: {
                other: "000 trillion"
            }
        }
    };
var pm = {
    AED: [2, "dh", "\u062f.\u0625.", "DH"],
    ALL: [0, "Lek", "Lek"],
    AUD: [2, "$", "AU$"],
    BDT: [2, "\u09f3", "Tk"],
    BGN: [2, "lev", "lev"],
    BRL: [2, "R$", "R$"],
    CAD: [2, "$", "C$"],
    CDF: [2, "FrCD", "CDF"],
    CHF: [2, "CHF", "CHF"],
    CLP: [0, "$", "CL$"],
    CNY: [2, "\u00a5", "RMB\u00a5"],
    COP: [0, "$", "COL$"],
    CRC: [0, "\u20a1", "CR\u20a1"],
    CZK: [50, "K\u010d", "K\u010d"],
    DKK: [50, "kr.", "kr."],
    DOP: [2, "$", "RD$"],
    EGP: [2, "\u00a3", "LE"],
    ETB: [2, "Birr", "Birr"],
    EUR: [2, "\u20ac", "\u20ac"],
    GBP: [2, "\u00a3", "GB\u00a3"],
    HKD: [2, "$", "HK$"],
    HRK: [2, "kn", "kn"],
    HUF: [0,
        "Ft", "Ft"
    ],
    IDR: [0, "Rp", "Rp"],
    ILS: [2, "\u20aa", "IL\u20aa"],
    INR: [2, "\u20b9", "Rs"],
    IRR: [0, "Rial", "IRR"],
    ISK: [0, "kr", "kr"],
    JMD: [2, "$", "JA$"],
    JPY: [0, "\u00a5", "JP\u00a5"],
    KRW: [0, "\u20a9", "KR\u20a9"],
    LKR: [2, "Rs", "SLRs"],
    LTL: [2, "Lt", "Lt"],
    MNT: [0, "\u20ae", "MN\u20ae"],
    MVR: [2, "Rf", "MVR"],
    MXN: [2, "$", "Mex$"],
    MYR: [2, "RM", "RM"],
    NOK: [50, "kr", "NOkr"],
    PAB: [2, "B/.", "B/."],
    PEN: [2, "S/.", "S/."],
    PHP: [2, "\u20b1", "Php"],
    PKR: [0, "Rs", "PKRs."],
    PLN: [50, "z\u0142", "z\u0142"],
    RON: [2, "RON", "RON"],
    RSD: [0, "din", "RSD"],
    RUB: [50, "\u0440\u0443\u0431.",
        "\u0440\u0443\u0431."
    ],
    SAR: [2, "Rial", "Rial"],
    SEK: [2, "kr", "kr"],
    SGD: [2, "$", "S$"],
    THB: [2, "\u0e3f", "THB"],
    TRY: [2, "TL", "YTL"],
    TWD: [2, "NT$", "NT$"],
    TZS: [0, "TSh", "TSh"],
    UAH: [2, "\u20b4", "UAH"],
    USD: [2, "$", "US$"],
    UYU: [2, "$", "$U"],
    VND: [0, "\u20ab", "VN\u20ab"],
    YER: [0, "Rial", "Rial"],
    ZAR: [2, "R", "ZAR"]
};
var X = {
    oc: ".",
    Kb: ",",
    yc: "%",
    Mb: "0",
    Bc: "+",
    wc: "-",
    qc: "E",
    Ac: "\u2030",
    sc: "\u221e",
    xc: "NaN",
    Jb: "#,##0.###",
    Cc: "#E0",
    zc: "#,##0%",
    nc: "\u00a4#,##0.00",
    pc: "USD"
}, X = {
        oc: ".",
        Kb: ",",
        yc: "%",
        Mb: "0",
        Bc: "+",
        wc: "-",
        qc: "E",
        Ac: "\u2030",
        sc: "\u221e",
        xc: "NaN",
        Jb: "#,##0.###",
        Cc: "#E0",
        zc: "#,##0%",
        nc: "\u00a4#,##0.00",
        pc: "GBP"
    };

function qm() {
    this.C = X.pc;
    this.h = 40;
    this.a = 1;
    this.T = 0;
    this.f = 3;
    this.i = this.b = 0;
    this.L = !1;
    this.W = this.G = "";
    this.l = "-";
    this.s = "";
    this.g = 1;
    this.c = [];
    this.I = this.K = !1;
    this.A = 0;
    switch (1) {
        case 1:
            rm(this, X.Jb);
            break;
        case 2:
            rm(this, X.Cc);
            break;
        case 3:
            rm(this, X.zc);
            break;
        case 4:
            var a;
            a = X.nc;
            var b = ["0"],
                c = pm[this.C][0] & 7;
            if (0 < c) {
                b.push(".");
                for (var d = 0; d < c; d++) b.push("0")
            }
            a = a.replace(/0.00/g, b.join(""));
            rm(this, a);
            break;
        case 5:
            sm(this, 1);
            break;
        case 6:
            sm(this, 2);
            break;
        default:
            throw Error("Unsupported pattern type.");
    }
}

function rm(a, b) {
    b.replace(/ /g, "\u00a0");
    var c = [0];
    a.G = tm(a, b, c);
    for (var d = c[0], e = -1, f = 0, g = 0, h = 0, l = -1, m = b.length, p = !0; c[0] < m && p; c[0]++) switch (b.charAt(c[0])) {
        case "#":
            0 < g ? h++ : f++;
            0 <= l && 0 > e && l++;
            break;
        case "0":
            if (0 < h) throw Error('Unexpected "0" in pattern "' + b + '"');
            g++;
            0 <= l && 0 > e && l++;
            break;
        case ",":
            0 < l && a.c.push(l);
            l = 0;
            break;
        case ".":
            if (0 <= e) throw Error('Multiple decimal separators in pattern "' + b + '"');
            e = f + g + h;
            break;
        case "E":
            if (a.I) throw Error('Multiple exponential symbols in pattern "' + b + '"');
            a.I = !0;
            a.i = 0;
            c[0] + 1 < m && "+" == b.charAt(c[0] + 1) && (c[0]++, a.L = !0);
            for (; c[0] + 1 < m && "0" == b.charAt(c[0] + 1);) c[0]++, a.i++;
            if (1 > f + g || 1 > a.i) throw Error('Malformed exponential pattern "' + b + '"');
            p = !1;
            break;
        default:
            c[0]--, p = !1
    }
    0 == g && 0 < f && 0 <= e && (g = e, 0 == g && g++, h = f - g, f = g - 1, g = 1);
    if (0 > e && 0 < h || 0 <= e && (e < f || e > f + g) || 0 == l) throw Error('Malformed pattern "' + b + '"');
    h = f + g + h;
    a.f = 0 <= e ? h - e : 0;
    0 <= e && (a.b = f + g - e, 0 > a.b && (a.b = 0));
    a.a = (0 <= e ? e : h) - f;
    a.I && (a.h = f + a.a, 0 == a.f && 0 == a.a && (a.a = 1));
    a.c.push(Math.max(0, l));
    a.K = 0 == e || e == h;
    d = c[0] - d;
    a.W =
        tm(a, b, c);
    c[0] < b.length && ";" == b.charAt(c[0]) ? (c[0]++, a.l = tm(a, b, c), c[0] += d, a.s = tm(a, b, c)) : (a.l = a.G + a.l, a.s += a.W)
}

function sm(a, b) {
    a.A = b;
    rm(a, X.Jb);
    a.b = 0;
    a.f = 2;
    if (0 < a.b) throw Error("Can't combine significant digits and minimum fraction digits");
    a.T = 2
}

function um(a, b) {
    var c = Math.pow(10, a.f),
        d;
    if (0 >= a.T) d = Math.round(b * c);
    else {
        d = b * c;
        var e = a.f;
        if (d) {
            var f = a.T - vm(d) - 1;
            f < -e ? (e = Math.pow(10, e), d = Math.round(d / e) * e) : (e = Math.pow(10, f), d = Math.round(d * e) / e)
        }
        d = Math.round(d)
    }
    e = d;
    isFinite(e) ? (d = Math.floor(e / c), c = Math.floor(e - d * c)) : (d = b, c = 0);
    return {
        od: d,
        Me: c
    }
}

function wm(a, b, c, d) {
    if (a.b > a.f) throw Error("Min value must be less than max value");
    d || (d = []);
    b = um(a, b);
    var e = Math.pow(10, a.f),
        f = b.od,
        g = b.Me,
        h = 0 < a.b || 0 < g || !1;
    b = a.b;
    h && (b = a.b);
    for (var l = "", m = f; 1E20 < m;) l = "0" + l, m = Math.round(m / 10);
    var l = m + l,
        p = X.oc,
        m = X.Mb.charCodeAt(0),
        q = l.length,
        r = 0;
    if (0 < f || 0 < c) {
        for (f = q; f < c; f++) d.push(String.fromCharCode(m));
        if (2 <= a.c.length)
            for (c = 1; c < a.c.length; c++) r += a.c[c];
        c = q - r;
        if (0 < c)
            for (var f = a.c, v = r = q = 0, t = X.Kb, z = l.length, A = 0; A < z; A++) {
                if (d.push(String.fromCharCode(m + 1 * l.charAt(A))),
                    1 < z - A)
                    if (v = f[r], A < c) {
                        var B = c - A;
                        (1 === v || 0 < v && 1 === B % v) && d.push(t)
                    } else r < f.length && (A === c ? r += 1 : v === A - c - q + 1 && (d.push(t), q += v, r += 1))
            } else {
                c = l;
                l = a.c;
                f = X.Kb;
                r = 0;
                v = c.length;
                t = [];
                for (q = l.length - 1; 0 <= q && 0 < v; q--) {
                    r = l[q];
                    for (z = 0; z < r && 0 <= v - z - 1; z++) t.push(String.fromCharCode(m + 1 * c.charAt(v - z - 1)));
                    v -= r;
                    0 < v && t.push(f)
                }
                d.push.apply(d, t.reverse())
            }
    } else h || d.push(String.fromCharCode(m));
    (a.K || h) && d.push(p);
    a = "" + (g + e);
    for (e = a.length;
        "0" == a.charAt(e - 1) && e > b + 1;) e--;
    for (f = 1; f < e; f++) d.push(String.fromCharCode(m + 1 * a.charAt(f)))
}

function xm(a, b, c) {
    c.push(X.qc);
    0 > b ? (b = -b, c.push(X.wc)) : a.L && c.push(X.Bc);
    b = "" + b;
    for (var d = X.Mb, e = b.length; e < a.i; e++) c.push(d);
    c.push(b)
}

function tm(a, b, c) {
    for (var d = "", e = !1, f = b.length; c[0] < f; c[0]++) {
        var g = b.charAt(c[0]);
        if ("'" == g) c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0]++, d += "'") : e = !e;
        else if (e) d += g;
        else switch (g) {
            case "#":
            case "0":
            case ",":
            case ".":
            case ";":
                return d;
            case "\u00a4":
                c[0] + 1 < f && "\u00a4" == b.charAt(c[0] + 1) ? (c[0]++, d += a.C) : d += pm[a.C][1];
                break;
            case "%":
                if (1 != a.g) throw Error("Too many percent/permill");
                a.g = 100;
                d += X.yc;
                break;
            case "\u2030":
                if (1 != a.g) throw Error("Too many percent/permill");
                a.g = 1E3;
                d += X.Ac;
                break;
            default:
                d += g
        }
    }
    return d
}
var ym = {
    prefix: "",
    Fd: "",
    Pb: 0
};

function zm(a, b) {
    var c = 1 == a.A ? om.mc : om.lc;
    if (3 > b) return ym;
    b = Math.min(14, b);
    c = c[Math.pow(10, b)];
    if (!c) return ym;
    c = c.other;
    return c && "0" != c ? (c = /([^0]*)(0+)(.*)/.exec(c)) ? {
        prefix: c[1],
        Fd: c[3],
        Pb: b - (c[2].length - 1)
    } : ym : ym
}

function vm(a) {
    for (var b = 0; 1 <= (a /= 10);) b++;
    return b
};

function Am(a) {
    return 1 == a % 10 && 11 != a % 100 ? "one" : 2 == a % 10 && 12 != a % 100 ? "two" : 3 == a % 10 && 13 != a % 100 ? "few" : "other"
}
var Bm = Am,
    Bm = Am;

function Cm(a, b) {
    var c;
    if (void 0 === b) {
        c = a + "";
        var d = c.indexOf(".");
        c = Math.min(-1 == d ? 0 : c.length - d - 1, 3)
    } else c = b;
    return 1 == (a | 0) && 0 == c ? "one" : "other"
}
var Dm = Cm,
    Dm = Cm;

function Em(a) {
    this.a = [];
    this.f = [];
    this.c = new qm;
    a && (a = Fm(this, a), this.f = Gm(this, a))
}
var Hm = RegExp("'([{}#].*?)'", "g"),
    Im = RegExp("''", "g");

function Jm(a, b, c, d, e) {
    for (var f = 0; f < b.length; f++) switch (b[f].type) {
        case 4:
            e.push(b[f].value);
            break;
        case 3:
            var g = b[f].value,
                h = a,
                l = e,
                m = c[g];
            w(m) ? (h.a.push(m), l.push(h.b(h.a))) : l.push("Undefined parameter - " + g);
            break;
        case 2:
            g = b[f].value;
            h = e;
            l = g.pb;
            w(c[l]) ? (l = g[c[l]], w(l) || (l = g.other), Jm(a, l, c, d, h)) : h.push("Undefined parameter - " + l);
            break;
        case 0:
            g = b[f].value;
            Km(a, g, c, Dm, d, e);
            break;
        case 1:
            g = b[f].value, Km(a, g, c, Bm, d, e)
    }
}

function Km(a, b, c, d, e, f) {
    var g = b.pb,
        h = b.Ec,
        l = +c[g];
    if (isNaN(l)) f.push("Undefined or invalid parameter - " + g);
    else if (h = l - h, g = b[c[g]], w(g) || (d = a.c.ja ? d(h, a.c.ja()) : d(h), g = b[d], w(g) || (g = b.other)), b = [], Jm(a, g, c, e, b), c = b.join(""), e) f.push(c);
    else {
        a = a.c;
        d = h;
        if (isNaN(d)) a = X.xc;
        else {
            e = [];
            h = d;
            0 == a.A ? h = ym : (h = Math.abs(h), b = zm(a, 1 >= h ? 0 : vm(h)).Pb, h = zm(a, b + vm(um(a, h / Math.pow(10, b)).od)));
            d /= Math.pow(10, h.Pb);
            e.push(h.prefix);
            b = 0 > d || 0 == d && 0 > 1 / d;
            e.push(b ? a.l : a.G);
            if (isFinite(d))
                if (d = d * (b ? -1 : 1) * a.g, a.I)
                    if (0 == d) wm(a,
                        d, a.a, e), xm(a, 0, e);
                    else {
                        g = Math.floor(Math.log(d) / Math.log(10) + 2E-15);
                        d /= Math.pow(10, g);
                        l = a.a;
                        if (1 < a.h && a.h > a.a) {
                            for (; 0 != g % a.h;) d *= 10, g--;
                            l = 1
                        } else 1 > a.a ? (g++, d /= 10) : (g -= a.a - 1, d *= Math.pow(10, a.a - 1));
                        wm(a, d, l, e);
                        xm(a, g, e)
                    } else wm(a, d, a.a, e);
                    else e.push(X.sc);
            e.push(b ? a.s : a.W);
            e.push(h.Fd);
            a = e.join("")
        }
        f.push(c.replace(/#/g, a))
    }
}

function Fm(a, b) {
    var c = a.a,
        d = y(a.b, a);
    b = b.replace(Im, function() {
        c.push("'");
        return d(c)
    });
    return b = b.replace(Hm, function(a, b) {
        c.push(b);
        return d(c)
    })
}

function Lm(a) {
    var b = 0,
        c = [],
        d = [],
        e = /[{}]/g;
    e.lastIndex = 0;
    for (var f; f = e.exec(a);) {
        var g = f.index;
        "}" == f[0] ? (c.pop(), 0 == c.length && (f = {
            type: 1
        }, f.value = a.substring(b, g), d.push(f), b = g + 1)) : (0 == c.length && (b = a.substring(b, g), "" != b && d.push({
            type: 0,
            value: b
        }), b = g + 1), c.push("{"))
    }
    b = a.substring(b);
    "" != b && d.push({
        type: 0,
        value: b
    });
    return d
}
var Mm = /^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/,
    Nm = /^\s*(\w+)\s*,\s*selectordinal\s*,/,
    Om = /^\s*(\w+)\s*,\s*select\s*,/;

function Gm(a, b) {
    for (var c = [], d = Lm(b), e = 0; e < d.length; e++) {
        var f = {};
        if (0 == d[e].type) f.type = 4, f.value = d[e].value;
        else if (1 == d[e].type) {
            var g = d[e].value;
            switch (Mm.test(g) ? 0 : Nm.test(g) ? 1 : Om.test(g) ? 2 : /^\s*\w+\s*/.test(g) ? 3 : 5) {
                case 2:
                    f.type = 2;
                    f.value = Pm(a, d[e].value);
                    break;
                case 0:
                    f.type = 0;
                    f.value = Qm(a, d[e].value);
                    break;
                case 1:
                    f.type = 1;
                    f.value = Rm(a, d[e].value);
                    break;
                case 3:
                    f.type = 3, f.value = d[e].value
            }
        }
        c.push(f)
    }
    return c
}

function Pm(a, b) {
    var c = "";
    b = b.replace(Om, function(a, b) {
        c = b;
        return ""
    });
    var d = {};
    d.pb = c;
    for (var e = Lm(b), f = 0; f < e.length;) {
        var g = e[f].value;
        f++;
        if (1 == e[f].type) var h = Gm(a, e[f].value);
        d[g.replace(/\s/g, "")] = h;
        f++
    }
    return d
}

function Qm(a, b) {
    var c = "",
        d = 0;
    b = b.replace(Mm, function(a, b, e) {
        c = b;
        e && (d = parseInt(e, 10));
        return ""
    });
    var e = {};
    e.pb = c;
    e.Ec = d;
    for (var f = Lm(b), g = 0; g < f.length;) {
        var h = f[g].value;
        g++;
        if (1 == f[g].type) var l = Gm(a, f[g].value);
        e[h.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = l;
        g++
    }
    return e
}

function Rm(a, b) {
    var c = "";
    b = b.replace(Nm, function(a, b) {
        c = b;
        return ""
    });
    var d = {};
    d.pb = c;
    d.Ec = 0;
    for (var e = Lm(b), f = 0; f < e.length;) {
        var g = e[f].value;
        f++;
        if (1 == e[f].type) var h = Gm(a, e[f].value);
        d[g.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = h;
        f++
    }
    return d
}
Em.prototype.b = function(a) {
    return "\ufddf_" + (a.length - 1).toString(10) + "_"
};
var Sm;
Sm = ["en", 0, ".", [
        [
            [, 0],
            [" \u2013 "],
            [, 1]
        ]
    ],
    [
        [
            [, 0],
            [" "],
            [, 1]
        ]
    ],
    [
        [
            [, 0],
            [", "],
            [, 1]
        ]
    ],
    [
        [
            [, 0],
            ["/"],
            [, 1]
        ]
    ],
    [
        [
            [, 0],
            ["/"],
            [, 1],
            ["/"],
            [, 2]
        ]
    ],
    [
        [
            [, 0],
            ["/"],
            [, 1]
        ]
    ],
    [
        [
            [, 0],
            ["/"],
            [, 1]
        ]
    ],
    [
        [
            [, 0],
            ["/"],
            [, 1]
        ]
    ],
    [
        [
            [, 0],
            ["/"],
            [, 1],
            ["/"],
            [, 2]
        ]
    ],
    [
        [
            [, 0],
            ["-"],
            [, 1],
            ["-"],
            [, 2]
        ]
    ],
    [
        [
            [, 0],
            [":00"]
        ]
    ],
    [
        [
            [, 0],
            [, 1]
        ]
    ],
    [
        [
            [, 0],
            [":"],
            [, 1]
        ]
    ],
    [
        [
            [, 0],
            [":"],
            [, 1],
            [, 2]
        ]
    ],
    [
        [
            [, 1],
            [" "],
            [, 0]
        ]
    ],
    [
        [
            [, 1],
            [" "],
            [, 0],
            [" "],
            [, 2]
        ]
    ],
    [
        [
            [, 0],
            [" "],
            [, 1]
        ]
    ],
    [
        [
            [, 1],
            [" "],
            [, 0]
        ]
    ],
    [
        [
            [, 1],
            [" "],
            [, 0],
            [" "],
            [, 2]
        ]
    ],
    [
        [
            [, 0],
            [" "],
            [, 1]
        ]
    ],
    [
        [
            [, 1],
            [" \u2013 "],
            [, 2],
            [" "],
            [, 0],
            [" "],
            [, 3]
        ]
    ],
    [
        [
            [, 1],
            [" \u2013 "],
            [, 2],
            [" "],
            [, 0],
            [" "],
            [, 3]
        ]
    ],
    [
        [
            [, 1],
            [" "],
            [, 0],
            [" \u2013 "],
            [, 3],
            [" "],
            [, 2],
            [" "],
            [, 4]
        ]
    ],
    [
        [
            [, 0],
            [" \u2013 "],
            [, 1]
        ]
    ],
    [
        [
            [, 0],
            [" ("],
            [, 1],
            [")"]
        ]
    ],
    [
        [
            [, 0],
            [" \u2013 "],
            [, 1],
            [" "],
            [, 2]
        ]
    ],
    [
        [
            [, 0],
            [" "],
            [, 1]
        ]
    ],
    [
        [
            [, 0],
            [", "],
            [, 1]
        ]
    ], "SMTWTFS".split(""), "Sun Mon Tue Wed Thu Fri Sat".split(" "), "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), "January February March April May June July August September October November December".split(" "),
    "January February March April May June July August September October November December".split(" "), ["a", "p"],
    ["am", "pm"],
    ["am", "pm"], "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), 1, 1, 1, [
        [
            [, 0],
            [", "],
            [, 1]
        ]
    ]
];

function Tm(a) {
    km(this, a, null)
}
D(Tm, jm);

function Y(a) {
    km(this, a, Um)
}
D(Y, jm);
var Um = [1];

function nm(a) {
    km(this, a, null)
}
D(nm, jm);

function Vm(a) {
    km(this, a, null)
}
D(Vm, jm);

function Wm(a) {
    km(this, a, null)
}
D(Wm, jm);

function Xm(a) {
    km(this, a, null)
}
D(Xm, jm);

function Ym(a) {
    return V(a, 2)
};

function Zm() {
    this.B = new Tm(Sm);
    this.c = $m(W(this.B, Vm, 32));
    this.a = $m(W(this.B, Vm, 33));
    this.b = $m(W(this.B, Vm, 34));
    this.i = an(W(this.B, Wm, 35));
    this.g = an(W(this.B, Wm, 36));
    this.f = an(W(this.B, Wm, 37));
    this.h = an(W(this.B, Wm, 41))
}
da(Zm);

function $m(a) {
    return [V(a, 1), V(a, 2), V(a, 3), V(a, 4), V(a, 5), V(a, 6), V(a, 7)]
}

function an(a) {
    return [, V(a, 1), V(a, 2), V(a, 3), V(a, 4), V(a, 5), V(a, 6), V(a, 7), V(a, 8), V(a, 9), V(a, 10), V(a, 11), V(a, 12)]
}

function bn(a, b) {
    return a.b[b]
}

function cn(a) {
    return isNaN(a) ? "??" : "" + (a % 12 || 12)
}

function dn(a) {
    return isNaN(a) ? "??" : (10 > a ? "0" : "") + a
}

function en(a, b) {
    var c;
    isNaN(b) ? c = "" : 12 > b % 24 ? (c = W(a.B, Xm, 39), c = V(c, 1)) : c = Ym(W(a.B, Xm, 39));
    return c
}

function Z(a, b) {
    var c = [];
    Pb(mm(a), function(a) {
        null != V(a, 1) ? c.push(V(a, 1)) : (a = b[V(a, 2)], c.push(a))
    });
    return c.join("")
};

function fn() {};

function gn(a, b, c) {
    this.b = a || new hn;
    this.a = b || Zm.Xb();
    this.f = w(c) ? c : !0
}
D(gn, fn);

function jn(a, b, c) {
    return V(a.a.B, 2) ? String(b) : c ? a.a.i[b] : a.a.g[b]
}

function kn(a, b, c) {
    return a.f && !V(a.a.B, 2) ? c ? a.a.h[b] : a.a.f[b] : jn(a, b, c || "ru" == V(a.a.B, 1))
}

function Si(a, b, c, d) {
    a.b.c || isNaN(b.hour) ? (c = b.hour, b = b.minute, b = Z(W(a.a.B, Y, 16), [isNaN(c) ? "??" : (10 > c ? "0" : "") + c, dn(b)])) : c && 0 == b.minute ? d ? (a = a.a, b = b.hour, b = Z(W(a.B, Y, 15), [cn(b), isNaN(b) ? "" : 12 > b % 24 ? "" : Ym(W(a.B, Xm, 38))])) : (a = a.a, b = b.hour, b = Z(W(a.B, Y, 15), [cn(b), en(a, b)])) : d ? (a = a.a, c = b.hour, b = b.minute, b = Z(W(a.B, Y, 17), [cn(c), dn(b), isNaN(c) ? "" : 12 > c % 24 ? "" : Ym(W(a.B, Xm, 38))])) : (a = a.a, c = b.hour, b = b.minute, b = Z(W(a.B, Y, 17), [cn(c), dn(b), en(a, c)]));
    return b
}

function Ni(a, b) {
    var c;
    a: switch (a.b.b) {
        case 1:
            c = b.m;
            var d = b.month;
            c = Z(W(a.a.B, Y, 7), [c, d]);
            break a;
        case 0:
            c = b.month;
            d = b.m;
            c = Z(W(a.a.B, Y, 10), [c, d]);
            break a;
        case 2:
            c = b.month;
            d = b.m;
            c = Z(W(a.a.B, Y, 11), [c, d]);
            break a;
        default:
            c = b.month, d = b.m, c = Z(W(a.a.B, Y, 10), [c, d])
    }
    return c
}

function Hi(a, b, c) {
    var d = kn(a, b.month, void 0);
    if (b.year == a.b.a.year && 4 > Math.abs(b.month - a.b.a.month)) var e = b.m,
    d = Z(W(a.a.B, Y, 18), [d, e]);
    else var e = b.m,
    f = b.year, d = Z(W(a.a.B, Y, 19), [d, e, f]);
    c ? (b = b.ea(), b = a.a.a[b]) : b = bn(a.a, b.ea());
    return Z(W(a.a.B, Y, 31), [b, d])
}
gn.prototype.c = function(a) {
    var b;
    1 == a.m ? (b = kn(this, a.month, !0), a = a.m, b = Z(W(this.a.B, Y, 21), [b, a])) : b = String(a.m);
    return b
};

function ln(a, b) {
    var c;
    var d = b.start,
        e = ib(b.end, -1),
        f = d.year,
        g = d.month,
        h = d.m;
    c = e.year;
    var l = e.month,
        e = e.m,
        m = kn(a, g, !0),
        p = kn(a, l, !0);
    f == c ? g == l ? h == e ? (c = Z(W(a.a.B, Y, 19), [m, h, f]), d = bn(a.a, d.ea()), c = Z(W(a.a.B, Y, 31), [d, c])) : c = Z(W(a.a.B, Y, 25), [m, h, e, f]) : c = Z(W(a.a.B, Y, 26), [m, h, p, e, f]) : (d = a.a, f = Z(W(a.a.B, Y, 22), [m, h, f]), c = Z(W(a.a.B, Y, 22), [p, e, c]), c = Z(W(d.B, Y, 4), [f, c]));
    return c
}

function Zk(a, b) {
    var c = jn(a, b.month),
        d = b.year;
    return Z(W(a.a.B, Y, 20), [c, d])
}

function si(a, b) {
    var c, d, e;
    b instanceof E ? (d = b.start, e = b.end) : (d = b, e = void 0);
    if (isNaN(e.hour)) c = 24 <= (ab(e, d).c / 3600 | 0) ? ln(a, new E(d, e)) : Hi(a, d, !0);
    else {
        var f = !(d.minute || e.minute);
        c = Hi(a, d, !0) + ", " + Si(a, d, f);
        d = (d.u() != e.u() ? Hi(a, e, !0) + ", " : "") + Si(a, e, f);
        c = Z(W(a.a.B, Y, 4), [c, d])
    }
    return c
}

function Yk(a, b) {
    return "ru" == V(a.a.B, 1) ? b.substring(0, 1).toUpperCase() + b.substring(1) : b
}

function hn(a, b) {
    this.c = a || !1;
    this.b = b || 0;
    this.a = Ab(new Date)
};

function mn() {
    L.call(this)
}
D(mn, Kj);

function nn(a, b, c) {
    L.call(this);
    this.a = new Lj(a, b, c);
    this.a.Ra(this)
}
D(nn, mn);
nn.prototype.Ya = function(a) {
    return this.a.Ya(a)
};
nn.prototype.dc = function() {
    return this.a.dc()
};
nn.prototype.oa = function() {
    return this.a.oa()
};
nn.prototype.Yb = function() {
    return this.a.Yb()
};

function ni(a) {
    return Ab(a.Yb())
};

function on(a, b, c) {
    nn.call(this, a, b, c)
}
D(on, nn);

function pn(a, b, c) {
    L.call(this);
    this.a = a;
    c && Xb(c)
}
D(pn, L);

function qn(a, b, c) {
    pn.call(this, a, 0, null);
    this.c = c ? c.replace("{hl}", encodeURIComponent("en-GB")) : null
}
D(qn, pn);

function rn(a, b, c, d, e, f) {
    this.c = a;
    this.a = b;
    this.f = d;
    this.Hd = c;
    this.b = e;
    a = this.c + "calendar";
    null != this.b ? a += "/b/" + this.b : this.a && (a += "/hosted/" + this.a);
    this.Ob = a;
    this.g = f || null
}
rn.prototype.getProxyUrl = k("g");

function sn(a) {
    for (var b in tn) b in a || (a[b] = tn[b]);
    this.K = a.collapseAllday;
    b = new hn(a.format24hour, parseInt(a.dateFieldOrder, 10));
    this.b = new gn(b);
    this.W = a.autoResize;
    this.I = (b = a.hostedDomain) ? new qn(b.name, 0, b.maplink) : null;
    this.i = a.baseUrl;
    jg(this.i) || (this.i = jg(window.location.href) + this.i);
    this.c = a.weekstart;
    this.g = a.imagePath;
    this.h = a.timezone || null;
    this.C = a.timezoneLocalized;
    this.L = a.haveQuickAdd;
    if ("nowMs" in a) {
        b = parseInt(a.nowMs, 10);
        var c = C() + Mj;
        3E4 <= Math.abs(c - b) && (Mj = b - C())
    }
    this.a = new on(un(a.timezoneOffsetMs),
        un(a.timezoneNextTransitionMs), un(a.timezoneNextOffsetMs));
    this.f = a.showWeekends;
    this.s = parseInt(a.firstWeekday, 10);
    this.G = parseInt(a.workWeekLength, 10);
    this.l = new rn(this.i, this.I && this.I.a || "", this.h, this.c, Lg(), a.proxyUrl);
    this.T = a.calendarApiVersion;
    this.A = a.developerKey
}

function un(a) {
    a = parseInt(a, 10);
    isNaN(a) && (a = void 0);
    return a
}
var tn = {
    autoResize: !0,
    baseUrl: "http://www.google.com/",
    collapseAllday: !1,
    dateFieldOrder: 0,
    format24hour: !0,
    hostedDomain: null,
    imagePath: "http://www.google.com/calendar/images/",
    showWeekends: !0,
    preloadEnd: null,
    preloadStart: null,
    weekstart: 0,
    haveQuickAdd: !1,
    firstWeekday: 1,
    workWeekLength: 5
};

function vn(a, b, c) {
    I.call(this);
    this.a = a;
    this.c = b;
    this.f = new rh(this);
    if (c || .05 > Math.random()) U(this.f, this.c, "a", this.g), U(this.f, this.c, ["b", "c"], this.h);
    wn(this)
}
D(vn, I);
vn.prototype.v = function() {
    this.f.M()
};

function wn(a) {
    var b = u.gcal$perf$serverTime,
        c = u.gcal$perf$headStartTime;
    w(b) && w(c) && (a.a.log("container", C() - c + b), gd(a.c, "c", function(a) {
        var e = C() - c;
        this.a.log(a.target.Y() + "_loadTime", e);
        this.a.log(a.target.Y() + "_totalLoadTime", e + b)
    }, !1, a))
}
vn.prototype.g = function() {
    this.b = new nj(this.a)
};
vn.prototype.h = function(a) {
    if (this.b) {
        var b = "c" == a.type,
            c = this.b,
            d = a.target.Y() + "_" + (b ? "insertDom" : "computeContent") || c.b,
            e = C();
        c.f.log(d, e - c.c);
        c.c = e;
        b && (b = this.b, a = a.target.Y() + "_render" || b.b, c = C(), b.f.log(a, c - b.a), b.c = c, this.b = null)
    }
};

function xn(a) {
    (a || window).location.reload(!0)
};

function yn(a) {
    I.call(this);
    ij = new jj(a.features);
    this.data = a;
    this.a = new sn(a);
    Yj.gcal$connect$ApiV3Calendar = new Zj
}
D(yn, I);
yn.prototype.c = null;
yn.prototype.setup = function() {
    var a = this.data,
        b = $d(document, a.la || "container"),
        c = this.a.I;
    (c = c && c.c) && (li = c);
    if (G) try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (r) {}
    this.g = new Wi;
    this.h = new Bl;
    Zh(xn, 36E5 * Math.abs(20) + Math.floor(36E5 * Math.random() * Math.abs(3)));
    var c = a.preloadStart,
        d = a.preloadEnd;
    c && d && (this.f = new E(Hb(c), Hb(d)));
    c = Yj[a.calendarFactoryClass || "gcal$connect$ApiV3Calendar"] || null;
    c.init(this.a, this.g);
    var d = this.h,
        e = a.cids || {};
    d.xa();
    for (var f in e) {
        var g;
        g = c;
        var h = f,
            l =
                e[f],
            m = l.color,
            p = l.title,
            l = l.access || 0;
        m ? (m = Cj(m), m = 0 <= m ? zj(m) : null) : m = void 0;
        g = g.create(h, l, m, p);
        h = e[f].hidden;
        d.Ub(new Al(g), h)
    }
    d.Xa();
    a.skin && (b.className = b.className + " " + a.skin);
    b.style.position = "relative";
    this.i(b);
    zn(this, b);
    this.b = new $l(b, this.a, this.g, this.h, a);
    this.c = new lj;
    new vn(this.c, this.b);
    this.data.loggedin && (a = window.location.pathname, a = ra(tk, this.c, a.substr(a.lastIndexOf("/") + 1) + "_", void 0, void 0), window.setTimeout(a, 3E5), window.setInterval(a, 36E5));
    a = ni(this.a.a);
    this.f && !this.f.contains(a) &&
        (a = this.f.start);
    this.b.h.S(a);
    a = this.b;
    b = new An;
    "day" == this.data.view && new Bn(a, this.a, b, 1);
    new Bn(a, this.a, b);
    new Cn(a, this.a, b);
    new Ci(a, this.a, new Ri(this.a.b, b));
    this.b.Sa(this.data.view);
    a = ra(kj, this.c);
    b = ["_ShowPerf"];
    f = u;
    b[0] in f || !f.execScript || f.execScript("var " + b[0]);
    for (var q; b.length && (q = b.shift());)!b.length && w(a) ? f[q] = a : f[q] ? f = f[q] : f = f[q] = {}
};

function zn(a, b) {
    var c = y(a.i, a, b),
        d = new uk(c, 100);
    J(window, "resize", function() {
        d.Ue()
    })
}
yn.prototype.i = function(a, b) {
    if (this.a.W) {
        var c;
        c = (c = $d(document, "calendarTitle")) ? c.offsetHeight : 0;
        var d = $d(document, "warningBox");
        d && (c += d.offsetHeight);
        d = Xd(a);
        d = ee(d.a);
        d = b || ce(d || window).height;
        this.l != d && (c = d - c, 0 >= c && (c = 1), a.style.height = c + "px", this.b && qi(this.b), this.l = d)
    }
};

function Dn() {
    I.call(this);
    this.a = {}
}
D(Dn, I);
Dn.prototype.v = function() {
    Dn.D.v.call(this);
    this.a = null
};
var En = {};

function Fn(a) {
    a = a || null;
    this.a = !! a && a.a(12).f("VR");
    var b;
    if (b = a) b = !! a.a(4).b[31];
    b && a.a(4)
}
n = Fn.prototype;
n.Za = function() {
    return zj(Dj())
};

function Gn(a, b) {
    var c = a.Za(b),
        d = Cj(c.a),
        e;
    if (0 <= d) e = Ek(d);
    else {
        c = c.a;
        d = Cj(c.toUpperCase());
        if (!(43 <= d))
            for (var d = 0, f = parseInt(c.substr(1, 2), 16) / 255, g = parseInt(c.substr(3, 2), 16) / 255, h = parseInt(c.substr(5, 2), 16) / 255, l = 43; 66 > l; l++) {
                var m = sj(l, 0),
                    p = f - parseInt(m.substr(1, 2), 16) / 255,
                    q = g - parseInt(m.substr(3, 2), 16) / 255,
                    m = h - parseInt(m.substr(5, 2), 16) / 255,
                    p = p * p + q * q + m * m;
                if (43 == l || p < e) d = l, e = p
            }
        e = d;
        e = new Dk(e, !0, c, "#000000")
    }
    return e
}
n.bb = aa(!1);
n.wb = function() {
    return O("")
};
n.eb = k("a");
n.ed = aa("\u00a0");

function An() {
    Fn.call(this);
    this.b = new Dn
}
D(An, Fn);
An.prototype.Za = function(a) {
    return a.Aa().va()
};
An.prototype.wb = function(a) {
    a = a.Z();
    a = a = {
        icon: a && a.b
    };
    a = a.src;
    return P(a ? '<img class=cwci src="' + Q(Wf(a)) + '">' : "")
};
An.prototype.bb = function(a) {
    a = a.Nb;
    return 2 == a || 6 == a
};
An.prototype.ed = function(a) {
    var b = this.b,
        b = b.a["{N,plural, =0{0 events}=1{1 event}other{# events}}"] || (b.a["{N,plural, =0{0 events}=1{1 event}other{# events}}"] = new Em("{N,plural, =0{0 events}=1{1 event}other{# events}}"));
    a = {
        N: a
    };
    if (0 == b.f.length) b = "";
    else {
        var c = [];
        Jm(b, b.f, a, !1, c);
        for (a = c.join(""); 0 < b.a.length;) a = a.replace(b.b(b.a), b.a.pop());
        b = a
    }
    return b
};

function Hn(a) {
    I.call(this);
    this.b = a;
    this.g = [];
    this.c = [];
    this.h = [];
    this.a = new rh(this)
}
D(Hn, I);
Hn.prototype.i = !1;
Hn.prototype.v = function() {
    this.a.M();
    this.h = this.c = this.g = this.b = this.a = null
};

function In(a) {
    this.a = a
}

function Jn(a, b) {
    this.a = a;
    this.b = b
}
D(Jn, In);

function Kn(a, b, c) {
    b = new Jn(b, c);
    if (!a.i) {
        c = a.a;
        var d = y(a.f, a, a.g);
        jl(a.b, d, c.a || c, c);
        U(a.a, a.b, "click", y(a.f, a, a.c));
        U(a.a, a.b, "dblclick", y(a.f, a, a.h));
        a.i = !0
    }
    a.c.push(b)
}
Hn.prototype.f = function(a, b) {
    for (var c = b.target, d = 0; d < a.length; d++) {
        var e = a[d],
            f = e.a(c);
        if (f) {
            e.b(f, b);
            b.preventDefault();
            break
        }
    }
};

function Ln(a, b) {
    return null !== Mn(a, b)
}

function Mn(a, b) {
    for (var c = yd(b), d = 0; d < c.length; ++d) {
        var e = c[d];
        if (0 == e.lastIndexOf(a, 0)) return e.substring(a.length)
    }
    return null
}

function Nn(a, b) {
    var c;
    a: {
        c = b;
        for (var d = ra(Ln, "ca-evp"); c;) {
            if (d(c)) break a;
            if (a && c == a) break;
            c = c.parentNode
        }
        c = null
    }
    return c
}

function On(a) {
    return le(a, ra(Ln, "ca-mlp"))
};

function Pn() {}
da(Pn);
Pn.prototype.a = 0;

function Qn(a) {
    return P("<pre>" + O(a.content) + "</pre>")
};

function Rn(a) {
    I.call(this);
    this.f = a;
    this.c = new fi(this);
    this.a = ":" + (Pn.Xb().a++).toString(36);
    this.b = Xd(a)
}
D(Rn, I);
n = Rn.prototype;
n.fa = null;
n.Oa = null;
n.X = null;
n.ia = 400;
n.Md = 0;
n.Nd = 0;
n.Sc = !1;
n.Va = null;
n.v = function() {
    this.c.M();
    Jc(this.X);
    Rn.D.v.call(this)
};
n.init = function() {
    if (!this.fa) {
        var a, b = this.c.a(this.bd),
            c = this.a,
            d = Sn(this, "tl"),
            e = Sn(this, "tr"),
            f = Sn(this, "bl"),
            g = Sn(this, "br");
        a = P;
        d = '<div style="display:none;z-index:' + Q(T(1001)) + '" class="bubble"><table cellpadding=0 cellspacing=0 class="bubble-table"><tr><td class="bubble-cell-side">' + O(d) + '</td><td class="bubble-cell-main"><div class="bubble-top"></div></td><td class="bubble-cell-side">' + O(e) + '</td></tr><tr><td colspan=3 class="bubble-mid"><div style="overflow:hidden" id="bubbleContent' + Q(c) +
            '"></div></td></tr><tr><td>' + O(f) + '</td><td><div class="bubble-bottom"></div></td><td>' + O(g) + '</td></tr></table><div id="bubbleClose' + Q(c) + '" class="bubble-closebutton" onclick="' + Q(S(b)) + '();"></div>';
        b = P('<div class="prong" id="prong' + Q(c) + '" onclick="' + Q(S(b)) + '()"><div class="bubble-sprite"></div></div>');
        a = a(d + b + "</div>");
        this.fa = xe(a, void 0);
        this.f.appendChild(this.fa);
        this.fa.style.width = this.ia + "px";
        this.Oa = this.b.o("prong" + this.a);
        this.X = new ei(this.fa);
        bi(this.X);
        a = this.X;
        ai(a);
        a.Cb = !0;
        this.X.Qb = !1;
        J(this.X, "beforehide", y(this.fe, this));
        J(this.X, "hide", y(this.Oc, this))
    }
};
n.o = k("fa");

function Sn(a, b) {
    var c = a.a;
    return P('<div class="bubble-corner" id="' + Q(b) + Q(c) + '"><div class="bubble-sprite bubble-' + Q(b) + '"></div></div>')
}

function Tn(a, b, c) {
    var d = a.left + 10,
        e = a.top + 10;
    return new ye(d, Math.max(a.left + a.width - 10 - b, d), Math.max(a.top + a.height - 10 - c, e), e)
}
n.render = function(a, b, c, d, e, f) {
    var g = this.b.o("bubbleContent" + this.a);
    if (g)
        if (c instanceof tf) {
            for (te(g, Qn, {
                content: c
            }); g.firstChild.firstChild;) g.appendChild(g.firstChild.firstChild);
            g.removeChild(g.firstChild)
        } else this.Oc(), he(g), this.Va = c, c.render(g), J(this.Va, "change", this.td, !1, this);
    Xe(this.b.o("bubbleClose" + this.a), !e);
    d && gd(this.X, "beforehide", d);
    this.Md = a;
    this.Nd = b;
    this.Sc = !f;
    Un(this, !0);
    this.X.ba(!0)
};

function Un(a, b) {
    var c = a.Md,
        d = a.Nd;
    a.fa.style.display = "block";
    a.Oa.style.display = "block";
    var e = Math.round(.4 * a.ia - .6 * a.Oa.offsetWidth),
        f = ce(ee(a.b.a) || window),
        f = new ze(0, 0, f.width, f.height),
        g;
    var h = a.fa.offsetHeight + a.Oa.offsetHeight - 1;
    g = Tn(f, a.ia, h);
    h = d - h;
    if (Td(h, g.top, g.bottom) != h) g = null;
    else {
        var l = c - e;
        g = Td(l, g.left, g.right) != l ? null : new N(l, h)
    } if (g && a.Sc) a.Oa.style.left = e + "px";
    else {
        a.Oa.style.display = "none";
        if (!b) return;
        g = a.ia;
        e = a.fa.offsetHeight;
        f = Tn(f, g, e);
        c = Td(c - g / 2, f.left, f.right);
        e = d - e - 10;
        e < f.top && (e = d + 10);
        g = new N(c, Td(e, f.top, f.bottom))
    }
    d = a.fa;
    c = g.x;
    f = g.y;
    e = Te(d);
    c instanceof N && (f = c.y, c = c.x);
    Ee(d, d.offsetLeft + (c - e.x), d.offsetTop + (f - e.y))
}
n.bd = function() {
    this.X && this.X.ba(!1)
};
n.fe = function() {
    G && document.activeElement && ie(this.fa, document.activeElement) && document.body.focus()
};
n.Oc = function() {
    hd(this.Va, "change", this.td, !1, this);
    Jc(this.Va);
    delete this.Va
};
n.Na = function() {
    return !(!this.X || !this.X.Na())
};
n.td = function() {
    Un(this)
};

function Vn(a) {
    var b = a.ab;
    a = '<div class="' + Q(a.w) + '">';
    for (var c = b.length, d = 0; d < c; d++) a += O(b[d]);
    return P(a + "</div>")
};

function Wn(a, b, c, d, e) {
    this.b = b;
    this.c = c;
    this.i = d;
    b = [];
    c = [];
    var f;
    d = 0;
    var g = this.c,
        h = this.b,
        l = Ya(h.j(), ib(h, g).j());
    for (f = 0; f < g; f++) b[f] = [], c[f] = [];
    f = 0;
    for (var m = a.length; f < m; f++) {
        var p = a[f];
        if (Sg(p, l)) {
            var q = p.c,
                r = 0,
                v = db(p.J().u(), h);
            if (0 > v) {
                if (!q) continue;
                v = 0;
                r |= 1
            }
            var t = db(hb(p.O), h);
            t > g && (t = g, r |= 2);
            q = new Xn(p, q ? t - v : 1, r);
            (p = p.Z()) && Pg(p) ? c[v].push(q) : (b[v].push(q), d++)
        }
    }
    this.a = b;
    this.f = c;
    this.h = d;
    this.g = e || 0
}

function Xn(a, b, c) {
    this.event = a;
    this.a = b;
    this.b = c
}

function Yn(a, b) {
    for (var c = a.c, d = a.h, e = a.i, f = fc(c), g = fc(c), h = fc(c), l = [], m = 0, p = 0; d;) {
        m == c && (m = 0, p++);
        var q = a.a[m][f[m]++];
        if (q) {
            for (var r = q.a; r--;) h[m] = p, p + 1 == e ? l[m] = q : p >= e && (g[m]++, l[m] && (l[m].md = !0)), m++;
            --d
        } else m++
    }
    f = fc(c);
    d = [];
    r = p;
    p = 0;
    switch (a.g) {
        case 2:
            for (m = 0; m < c; m++)
                if (a.a[m].length && !(g[m] || l[m] && l[m].md)) {
                    p = 1;
                    break
                }
            break;
        case 1:
            p = 1
    }
    for (var e = Math.min(r, e - 1), v = e + 1 + p, p = 0; p < v; p++) {
        var t = v - p;
        b.R.push(P("<tr>"));
        for (m = 0; m < c; m++)
            if (!d[m]) {
                var q = a.a[m][f[m]++],
                    z = p >= h[m];
                if (p == e && (g[m] || l[m] && l[m].md)) {
                    var z =
                        b,
                        q = ib(a.b, m),
                        A = g[m] + (l[m] ? 1 : 0),
                        B = void 0,
                        B = z.f && z.Ba ? z.a.ed(A) : z.f ? "\u25bc" : "+" + A + " more";
                    z.R.push(Zn({
                        ta: $n,
                        qf: "ca-mlp" + q.F(),
                        Qf: z.f,
                        Ba: z.Ba,
                        content: B
                    }))
                } else if (q && p <= e) {
                    A = 1;
                    1 < q.a ? m += q.a - 1 : z && p != r && (A = t, d[m] = !0);
                    var z = b,
                        B = !! (q.b & 1),
                        K = !! (q.b & 2),
                        R = "ca-evp" + la(q.event);
                    z.i(q, A, !1, B, K, R);
                    z.c(q, A, !1, B, K, R);
                    z.h(q, A, !1, B, K, R)
                } else d[m] = z, b.R.push(ao({
                    w: "st-c st-s",
                    gc: z ? t : 1
                }))
            }
    }
};

function bo() {
    L.call(this);
    this.a = {}
}
D(bo, L);
da(bo);
bo.prototype.get = function(a) {
    return this.a[a]
};
bo.prototype.forEach = function(a) {
    for (var b in this.a)
        if (!1 === a(b, this.a[b])) break
};

function co(a, b) {
    var c = null;
    a.forEach(function(a, e) {
        if (e.b == b) return c = a, !1
    });
    return c
};

function eo(a) {
    var b = bo.Xb(),
        c = a.i,
        d = b.get(c);
    d || (c = co(b, c)) && (d = b.get(c));
    return !d || 60 > d.a ? "" : (a = a.l.eventColor) && /^#[0-9a-fA-F]{6}$/.test(a) ? fo(a) : ""
}

function fo(a) {
    switch (a) {
        case "#a4bdfc":
        case "#5484ed":
        case "#46d6db":
            return "#1111cc";
        case "#7ae7bf":
        case "#51b749":
            return "#228822";
        case "#dbadff":
            return "#551a8b";
        case "#ff887c":
        case "#dc2127":
            return "#ff0000";
        case "#fbd75b":
            return "#fbb818";
        case "#ffb878":
            return "#ff6600";
        case "#e1e1e1":
            return "#bfbfbf";
        default:
            return a
    }
};

function go(a) {
    var b = a.va(),
        c, d, e = ho;
    if (e) {
        a = (c = "#000000" != (a.b ? a.f : "#000000")) ? "#eeeeee" : "#1d1d1d";
        c = c ? "#dddddd" : "#333333";
        d = b.b;
        var f;
        f = 255 + .6 * (parseInt(d.substr(3, 2), 16) - 255);
        var g;
        g = 255 + .6 * (parseInt(d.substr(5, 2), 16) - 255);
        d = "#" + qj(255 + .6 * (parseInt(d.substr(1, 2), 16) - 255)) + qj(f) + qj(g)
    } else c = a = "", d = b.f;
    this.c = a;
    this.a = b.g;
    this.b = e ? b.b : b.a;
    this.G = e ? "" : b.a;
    this.T = e ? b.g : b.b;
    this.K = e ? b.g : b.f;
    this.L = e ? "" : b.b;
    this.A = c;
    this.f = b.f;
    this.s = b.c;
    this.I = e ? "" : b.c;
    this.W = e ? b.b : b.a;
    this.C = d;
    this.g = e ? this.a : b.f;
    this.h = e ? this.b : b.c;
    this.i = e ? "" : b.c;
    this.l = e ? this.c : b.a
}
var ho = !1,
    io = {};

function jo(a) {
    var b = la(a);
    io[b] || (io[b] = new go(a));
    return io[b]
};
var ko = F("Firefox");

function lo(a) {
    return Bf(a.Df ? "direction:" + T("rtl") + ";text-align:" + T("left") + ";" : "")
};

function mo(a, b, c, d, e, f, g, h) {
    a = {
        color: c,
        kb: d,
        hb: e || "",
        sa: g || "",
        Sb: f || "",
        content: a,
        Df: b
    };
    if (h) return a.sa += " rb-n", a.borderColor = h, a.$b = "rb-ni", h = a.sa, b = a.borderColor, c = a.kb, d = a.color, e = a.$b, f = a.Sb, g = a.content, P('<div class="' + Q(a.hb) + " " + Q(h) + '" style="border:1px solid ' + Q(T(b)) + "; color:" + Q(T(c)) + ";background-color:" + Q(T(d)) + ";" + Q(T(lo(a))) + '"><div class="' + Q(e) + '">' + O(f) + O(g) + "</div></div>");
    if (no) return a.sa += " rb-n", h = a.sa, b = a.kb, c = a.color, d = a.Sb, e = a.content, P('<div class="' + Q(a.hb) + " " + Q(h) +
        '" style="color:' + Q(T(b)) + ";background-color:" + Q(T(c)) + ";" + Q(T(lo(a))) + '">' + O(d) + O(e) + "</div>");
    a.hb += " rb-o";
    a.sa += " rb-m";
    a.$b = "rb-i";
    h = a.color;
    b = a.sa;
    c = a.kb;
    d = a.Sb;
    e = a.$b;
    f = a.content;
    return P('<div class="' + Q(a.hb) + '" style="border-color:' + Q(T(h)) + ";" + Q(T(lo(a))) + '"><div class="' + Q(b) + '" style="border-color:' + Q(T(h)) + ";background-color:" + Q(T(h)) + ";color:" + Q(T(c)) + '">' + O(d) + '<div class="' + Q(e) + '">' + O(f) + "</div></div></div>")
}
var no = xc || ko;

function oo(a) {
    var b = a.w,
        c = a.Ua;
    a = '<table id="' + Q(a.id) + '" cellpadding=0 cellspacing=0 class="' + Q(b) + '"><tr>';
    for (var b = c.length, d = 0; d < b; d++) {
        var e = c[d];
        a += "<td" + (e.w ? ' class="' + Q(e.w) + '"' : "") + ">&nbsp;</td>"
    }
    return P(a + "</tr></table>")
}

function po(a) {
    var b = a.Ua;
    a = '<table cellpadding=0 cellspacing=0 class="' + Q(a.w) + '"><tr>';
    for (var c = b.length, d = 0; d < c; d++) a += '<td class="' + Q(b[d].w) + '">&nbsp;</td>';
    return P(a + "</tr></table>")
}

function qo() {
    return P('<table cellpadding="0" cellspacing="0" class="' + Q("st-grid") + '">')
}

function ro(a) {
    var b = "<tr>";
    a = a.Ua;
    for (var c = a.length, d = 0; d < c; d++) var e = a[d],
    b = b + ('<td class="' + Q(e.w) + '">' + O(e.Tf) + '<span class="' + Q(e.Gf) + '">' + O(e.Ae) + "</span></td>");
    return P(b + "</tr>")
}

function ao(a) {
    var b = a.gc;
    return P('<td class="' + Q(a.w) + '"' + (1 < b ? ' rowspan="' + Q(b) + '"' : "") + ">&nbsp;")
}

function so(a) {
    var b = a.Ge,
        c = a.gc,
        d = a.ve,
        e = a.Ie;
    return P('<td class="' + Q(a.w) + '"' + (1 < c ? ' rowspan="' + Q(c) + '"' : "") + (1 < d ? ' colspan="' + Q(d) + '"' : "") + '><div class="' + Q(b) + '">' + O(e) + "</div></td>")
}

function Zn(a) {
    var b = a.qf,
        c = !! a.Qf,
        d = !! a.Ba,
        e = a.content;
    return P('<td class="' + Q(a.ta.Od) + " " + Q(a.ta.Qd) + '">' + (c ? d ? '<div class="' + Q(b) + " " + Q(a.ta.Lb) + " " + Q(a.ta.Td) + '">' + O(e) + "</div>" : '<div class="' + Q(b) + " " + Q(a.ta.Lb) + " " + Q(a.ta.Rd) + '">' + O(e) + "</div>" : '<span class="' + Q(b) + " " + Q(a.ta.Lb) + " " + Q(a.ta.Sd) + '">' + O(e) + "</span>") + "</td>")
};

function to(a) {
    a = a.He;
    return P(a ? '<span class="te-c goog-inline-block" style="background-color:' + Q(T(a)) + '">&nbsp;</span>' : "")
};

function uo(a, b, c, d, e) {
    this.b = a;
    this.a = b;
    this.l = c || !1;
    this.f = !! d;
    this.g = !! e;
    this.Ba = b.eb()
}
var $n = {
    $f: "st-bg-table",
    Wf: "st-bg-all",
    Xf: "st-bg",
    Yf: "st-bg-fc",
    Zf: "st-bg-lc",
    ag: "st-bg-today",
    dg: "st-bg-next",
    bg: "st-bg-td-first",
    cg: "st-bg-td-last",
    eg: "st-dtitle",
    hg: "st-dtitle-fr",
    gg: "st-dtitle-fc",
    ig: "st-dtitle-lc",
    lg: "st-dtitle-today",
    jg: "st-dtitle-next",
    fg: "st-dtitle-down",
    kg: "st-dtitle-nonmonth",
    mg: "st-grid",
    Od: "st-c",
    ng: "st-c-pos",
    og: "st-s",
    Rd: "st-moreicon",
    pg: "st-ad-ml",
    qg: "st-ad-ml2",
    rg: "st-ad-mpad",
    sg: "st-ad-mr",
    tg: "st-ad-mr2",
    ug: "st-ad-mpadr",
    Qd: "st-more-c",
    Lb: "st-more",
    Sd: "st-moreul",
    Td: "st-morewk",
    vg: "st-wc",
    wg: "st-wc-click"
};
uo.prototype.R = null;

function vo(a) {
    for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
            e = d.event.Z();
        e.b && (d = "ca-evp" + la(d.event) + " st-wc", e.a && (d += " st-wc-click"), b.push({
            title: e.f || "",
            url: e.b,
            w: d
        }))
    }
    a = "";
    c = b.length;
    for (e = 0; e < c; e++) d = b[e], a += '<img src="' + Q(Wf(d.url)) + '" class="' + Q(d.w) + '" title="' + Q(d.title) + '" alt="' + Q(d.title) + '">';
    return P(a)
}
uo.prototype.i = ca;
uo.prototype.c = function(a, b, c, d, e, f) {
    this.R.push(so({
        w: "st-c",
        gc: b,
        ve: a.a,
        Ge: "st-c-pos",
        Ie: wo(this, a.event, d, e, f)
    }))
};
uo.prototype.h = ca;

function wo(a, b, c, d, e) {
    if (b.c || b.b) {
        c = !! c;
        d = !! d;
        var f = e || "",
            g, h, l, m;
        e = a.a.wb(b, !0);
        g = Tg(b);
        a.g && (h = "evt-lk ca-elp" + la(b));
        l = O("");
        if (!b.b && !c) {
            m = "(" + Si(a.b, b.J()) + ")";
            var p = Ad.test(m) ? "\u200f" : "\u200e";
            m = m.replace(Ed, p + "$&" + p)
        }
        h = P(O(e) + (m ? O(m) + " " : "") + (h ? '<span class="' + Q(h) + '">' + O(g) + "</span>" : O(g)) + O(l));
        e = Gn(a.a, b);
        l = jo(e);
        g = l.c;
        e = a.a.bb(b) ? l.f : l.a;
        (m = eo(b)) && (e = m);
        var q;
        a.a.eb() && (q = l.b);
        a = [];
        c && a.push("st-ad-mpad");
        d && a.push("st-ad-mpadr");
        a = a.join(" ");
        c = xo(c, d, e, q);
        b = -1 == Hd(b.a.content) ? !(b.G &&
            b.G()) : !1;
        b = mo(h, b, e, g, f, c, a, q)
    } else q = e || "", c = a.a.wb(b, !1), d = Tg(b), h = O(""), a.g && (f = "evt-lk ca-elp" + la(b)), f = P((f ? '<span class="' + Q(f) + '">' + O(d) + "</span>" : O(d)) + O(h)), d = a.a.bb(b), h = Gn(a.a, b), h = jo(h), d = d ? h.C : h.W, h = eo(b), b = Si(a.b, b.J(), !0, a.l), b = {
        color: d,
        time: b,
        qd: c,
        Ed: f,
        ya: q,
        He: h
    }, -1 == Hd(f.toString()) ? (a = b.color, q = b.qd, c = b.time, f = b.Ed, b = P('<div class="' + Q(b.ya) + ' te" style="color:' + Q(T(a)) + '"><table cellpadding=0 cellspacing=0 class="te-rev"><tr><td class="te-t">' + O(q) + O(c) + "&nbsp;</td><td>" + to(b) +
        '&nbsp;</td><td class="te-rev-s"><div class="te-rev-spos">&nbsp;<div class="te-rev-scont" dir="' + Q("rtl") + '">' + O(f) + "</div></div></td></tr></table></div>")) : (a = b.color, q = b.qd, c = b.time, f = b.Ed, b = P('<div class="' + Q(b.ya) + ' te" style="color:' + Q(T(a)) + '"><span class="te-t">' + O(q) + O(c) + "&nbsp;</span>" + to(b) + '<span class="te-s">' + O(f) + "</span></div>"));
    return b
}

function xo(a, b, c, d) {
    var e = [];
    a && (e.push({
        w: "st-ad-ml",
        color: d || c
    }), e.push({
        w: "st-ad-ml2",
        color: c
    }));
    b && (e.push({
        w: "st-ad-mr",
        color: d || c
    }), e.push({
        w: "st-ad-mr2",
        color: c
    }));
    c = "";
    a = e.length;
    for (b = 0; b < a; b++) {
        d = e[b];
        var f = d.color;
        d = P('<div class="' + Q(d.w) + '" style="border-color: transparent ' + Q(T(f)) + '"></div>');
        c = c + d
    }
    return P(c)
};

function yo(a, b, c, d, e) {
    this.id = zo++;
    this.type = c;
    this.i = b.b;
    this.l = new Rn(oi(a).parentNode);
    this.K = e;
    mi.call(this, a, b, c, d, a.b)
}
D(yo, mi);
var zo = zo || 1;
n = yo.prototype;
n.jc = null;
n.render = function() {
    yo.D.render.call(this);
    this.l.bd()
};

function Ao(a, b) {
    var c = a.K.Za(b).a,
        d = Tg(b),
        e = ri(a, b),
        f;
    if (b.Ea) {
        f = encodeURI(b.Ea);
        var g = vi(a, b);
        f = P('<div class="separator" style="background-color: ' + Q(T(c)) + ';"></div><span class="links"><a href="' + Q(Uf(f)) + '" target="_blank">' + O("more details") + '&raquo;</a>&nbsp;&nbsp;<a href="' + Q(Uf(g)) + '" target="_blank">' + O("copy to my calendar") + "&raquo;</a></span>")
    }
    return P('<div class="details"><span class="title" style="color: ' + Q(T(c)) + '">' + O(d) + '</span><div class="detail-content">' + O(e) + "</div>" + O(null ==
        f ? "" : f) + "</div>")
}
n.fd = function(a, b) {
    var c;
    c = Mn("ca-evp", a);
    c = parseInt(c, 10);
    var d = this.f[c].Z();
    if (d && d.a) this.yd(c, b.target);
    else {
        c = this.f[c];
        var d = b.clientX + document.documentElement.scrollLeft,
            e = b.clientY + document.documentElement.scrollTop;
        y(this.l.render, this.l, d, e);
        c && this.l.render(d, e, Ao(this, c))
    }
};
n.hd = function(a) {
    var b;
    b = Mn("ca-mlp", a);
    b = zb(parseInt(b, 10));
    var c = ke(a, "TD"),
        d = ke(a, "TABLE");
    a = Te(c).x;
    var c = Te(d).y,
        d = this.dd(b),
        e = [];
    d.Qa.R = e;
    d.Qa.R.push(qo());
    Yn(new Wn(this.jc, b, 1, 99), d.Qa);
    d.Qa.R.push(P("</table>"));
    this.s.render(a, c, d.width, null, d.title, Vn({
        w: d.Qc,
        ab: e
    }))
};
n.dd = function(a) {
    return {
        title: Hi(this.i, a),
        Qa: new uo(this.i, this.K),
        Qc: "st-contents",
        width: 225
    }
};
n.register = function() {
    yo.D.register.call(this);
    this.l.init()
};

function Bo(a) {
    var b = a.Uf,
        c = a.Ef,
        d = a.ha;
    a = a.ab;
    b = '<div class=month-row style="top:' + Q(T(b * c)) + "%;" + (c < d - 1 ? "height:" + Q(T(b + 1)) + "%" : "bottom:0") + '">';
    c = a.length;
    for (d = 0; d < c; d++) b += O(a[d]);
    return P(b + "</div>")
};

function Co(a, b, c) {
    this.b = a;
    this.a = b;
    this.c = c
}
var Do = new function(a, b, c, d) {
        this.b = a;
        this.c = b;
        this.f = c;
        this.a = d || 0
    }(14, 17, 17);

function Cn(a, b, c, d) {
    this.c = parseInt(d, 10) | 0;
    if (2 > this.c || 4 < this.c) this.c = !1;
    this.c ? (this.za = [null, null, "2 Weeks", "3 Weeks", "4 Weeks"][this.c], d = "next" + this.c + "weeks") : (this.za = "Month", d = "month");
    var e = this.c ? new xd(7 * this.c, b.c) : new wd;
    this.A = new rh(this);
    yo.call(this, a, b, d, e, c);
    Eo(this);
    this.C = new uo(this.i, c);
    this.L = new Co(this.i, this.C, this.id + "")
}
D(Cn, yo);

function Eo(a) {
    var b = a.V();
    a.G = new Kk(a.a.b, b.start, Math.ceil(b.duration.m / 7), a.b.f ? 7 : 5, 7)
}
n = Cn.prototype;
n.V = function() {
    var a = kb(this.a.a, this.b.c),
        b = lb(this.a.c, this.b.c + 6);
    this.b.f || (a = lb(a, this.b.s), b = kb(b, this.b.s + this.b.G - 1));
    return new E(a, fb(b))
};
n.Wb = function() {
    var a;
    if (this.c) a = ln(this.i, this.V());
    else {
        a = this.i;
        var b;
        this.c ? b = null : (b = this.a.b, b = gb(b.year, b.month, 1));
        a = Zk(a, b)
    }
    return a
};
n.register = function() {
    Cn.D.register.call(this)
};
n.Se = function(a) {
    M(this, "a");
    var b, c = this.L,
        d = this.G,
        e = ni(this.b.a),
        f = this.a.b.month;
    var g;
    g = Math.max(1, Math.floor(((this.ka - Do.b) / d.ha + Do.a - Do.c) / Do.f));
    var h = [];
    for (b = 0; b < d.U; b++) {
        var l = d,
            m = b,
            l = zb(Lk(l)[0 * l.U + m]).ea(),
            m = c.b,
            l = Yk(m, m.a.a[l]);
        h.push(l)
    }
    l = 100 / d.ha;
    b = [];
    for (m = 0; m < d.ha; m++) {
        var p = [];
        c.a.R = p;
        var q, r = d,
            v = m;
        q = zb(Lk(r)[v * r.U + 0]);
        for (var r = c.a, v = d.U, t = e, z = [], A = !0, B = v, K = q; B--; K = fb(K)) {
            var R = ["st-bg"];
            A && (A = !1, R.push("st-bg-fc"));
            K.H(t) && (0 == B && r.a.eb() ? R.push("st-bg-td-last") : R.push("st-bg-today"));
            K.H(fb(t)) && B != v - 1 && R.push("st-bg-next");
            z.push({
                w: R.join(" ")
            })
        }
        r.R.push(po({
            w: "st-bg-table",
            Ua: z
        }));
        c.a.R.push(qo());
        for (var r = new Wn(a, q, d.U, g), v = c.a, t = d.U, z = e, A = f, B = r.f, K = y(c.b.c, c.b), R = 0 == m, Ca = [], Mb = !0, Qa = fb(z), sb = ib(z, 7), oa = 0; oa < t; oa++) {
            var ia = ib(q, oa),
                ea = ["st-dtitle"];
            R && ea.push("st-dtitle-fr");
            Mb && (Mb = !1, ea.push("st-dtitle-fc"));
            z.H(ia) && (ea.push("st-dtitle-today"), oa == t - 1 && ea.push("st-dtitle-lc"));
            Qa.H(ia) && 0 != oa && ea.push("st-dtitle-next");
            sb.H(ia) && ea.push("st-dtitle-down");
            ia.month != A &&
                ea.push("st-dtitle-nonmonth");
            Ca.push({
                w: ea.join(" "),
                Gf: "ca-cdp" + ia.F(),
                Ae: K(ia),
                Tf: vo(B[oa])
            })
        }
        v.R.push(ro({
            Ua: Ca
        }));
        Yn(r, c.a);
        c.a.R.push(P("</table>"));
        b.push(Bo({
            Uf: l,
            Ef: m,
            ha: d.ha,
            ab: p
        }));
        c.a.R = null
    }
    d = c.c;
    c = '<div class="mv-container"><table cellpadding=0 cellspacing=0 class="mv-daynames-table" id="mvDaynamesTable"><tr>';
    e = h.length;
    for (f = 0; f < e; f++) g = h[f], c += '<th class="mv-dayname" title="' + Q(g) + '">' + O(g) + "</th>";
    c += '</tr></table><div class="mv-event-container" id="mvEventContainer' + Q(d) + '">';
    h =
        b.length;
    for (d = 0; d < h; d++) c += O(b[d]);
    b = P(c + "</div></div>");
    M(this, "b");
    this.Ga();
    h = oi(this.la);
    h.innerHTML = ue(b);
    this.f = {};
    ti(this, a);
    this.jc = a.slice();
    a = new Hn(h);
    Kn(a, ra(Nn, h), y(this.fd, this));
    Kn(a, On, y(this.hd, this));
    this.g = a;
    M(this, "c")
};
n.Ga = function() {
    Cn.D.Ga.call(this);
    th(this.A);
    this.g && (this.g.M(), this.g = null)
};
n.render = function() {
    Cn.D.render.call(this);
    Eo(this);
    this.ka = oi(this.la).offsetHeight;
    wi(this, this.V(), y(this.Se, this))
};

function Fo(a, b, c, d, e) {
    function f(a) {
        a && (a.tabIndex = 0, a.setAttribute("role", "tab"), Rk(a, "goog-zippy-header"), a && U(g.l, a, "click", g.s), a && U(g.i, a, "keydown", g.A))
    }
    L.call(this);
    this.h = e || Xd();
    this.a = this.h.o(a) || null;
    this.f = this.h.o(d || null);
    this.c = (this.g = ja(b) ? b : null) || !b ? null : this.h.o(b);
    this.b = 1 == c;
    w(c) || this.g || (this.f ? this.b = "none" != this.f.style.display : this.a && (this.b = Qk(this.a, "goog-zippy-expanded")));
    this.i = new rh(this);
    this.l = new rh(this);
    var g = this;
    f(this.a);
    f(this.f);
    Go(this, this.b)
}
D(Fo, L);
Fo.prototype.v = function() {
    Fo.D.v.call(this);
    Jc(this.i);
    Jc(this.l)
};

function Go(a, b) {
    a.c ? Xe(a.c, b) : b && a.g && (a.c = a.g());
    a.c && Rk(a.c, "goog-zippy-content");
    if (a.f) Xe(a.a, !b), Xe(a.f, b);
    else if (a.a) {
        var c = a.a;
        b ? Rk(c, "goog-zippy-expanded") : Sk(c, "goog-zippy-expanded");
        c = a.a;
        b ? Sk(c, "goog-zippy-collapsed") : Rk(c, "goog-zippy-collapsed");
        var c = a.a,
            d = b;
        ga(d) && (d = d.join(" "));
        "" === d || void 0 == d ? (hl || (hl = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), d = hl, "expanded" in d ? c.setAttribute("aria-expanded", d.expanded) : c.removeAttribute("aria-expanded")) : c.setAttribute("aria-expanded", d)
    }
    a.b = b;
    M(a, new Ho("toggle", a))
}
Fo.prototype.A = function(a) {
    if (13 == a.keyCode || 32 == a.keyCode) Go(this, !this.b), M(this, new Kc("action", this)), a.preventDefault(), a.stopPropagation()
};
Fo.prototype.s = function() {
    Go(this, !this.b);
    M(this, new Kc("action", this))
};

function Ho(a, b) {
    Kc.call(this, a, b)
}
D(Ho, Kc);

function Io(a) {
    var b = a.we;
    return P('<td class="' + Q(a.w) + '">' + O(b) + "</td>")
};

function Jo(a, b, c, d) {
    uo.call(this, a, b, c, !1, d)
}
D(Jo, uo);
Jo.prototype.i = function(a, b, c, d, e, f) {
    a = a.event;
    Ko(this, a, f, d, !1, a.J())
};
Jo.prototype.h = function(a, b, c, d, e, f) {
    a = a.event;
    b = a.O;
    b = ib(hb(b), -1);
    Ko(this, a, f, !1, e, b)
};
Jo.prototype.c = function(a, b, c, d, e, f) {
    this.Ba || (e = d = !1);
    Jo.D.c.call(this, a, b, c, d, e, f)
};

function Ko(a, b, c, d, e, f) {
    var g = "",
        h = "wk-sideevents";
    if (e || d)
        if (f = Ni(a.b, f), a.Ba && f) h = d ? "wk-sideeventsb" : "wk-sideeventsa", g = f;
        else if (!a.Ba) {
        g = a.a.Za(b);
        b = (b = eo(b)) ? b : g.c;
        g = "";
        d && (c += " wk-more-prealign", g = "st-ad-mpad");
        var l = -1 == Hd(f),
            g = mo(O(f), l, b, "", c, xo(d, e, b), g)
    }
    a.R.push(Io({
        w: h,
        we: g
    }))
};

function Lo(a, b) {
    this.start = a < b ? a : b;
    this.end = a < b ? b : a
}
Lo.prototype.clone = function() {
    return new Lo(this.start, this.end)
};

function Mo() {}

function No() {}
No.prototype.b = !0;

function Oo() {
    this.w = []
}
n = Oo.prototype;
n.top = 0;
n.Tc = 0;
n.Uc = "px";
n.Wa = "left";
n.height = "";
n.width = 100;
n.Ld = "%";
n.text = null;
n.Jd = function() {
    return O("")
};

function Po(a) {
    var b = a.Ic;
    a = a.content;
    return P(b ? '<div style="' + Q(T(b)) + '">' + O(a) + "</div>" : O(a))
};

function Qo() {
    this.w = []
}
D(Qo, Oo);
n = Qo.prototype;
n.ma = 0;
n.kc = "";
n.Mc = "";
n.Lc = "";
n.je = null;
n.Hc = "#fff";
n.Jc = "#000";
n.Kc = "#000";
n.$c = "";

function Ro(a, b, c) {
    a.ma = c ? a.ma | b : a.ma & ~b
}

function So(a, b, c, d) {
    var e;
    if (c) {
        c = -1 == Hd(c);
        var f = 2 * c + 1,
            g = En[f];
        g || (g = Bf(c ? "direction:" + T("rtl") + ";" + (G ? "zoom:1;" : "") : ""), En[f] = g);
        c = g;
        c.content && (e = c)
    }
    b = P(b || "");
    "caption" == d ? (a.caption = b, a.ke = e) : (a.text = b, a.Jf = e)
}
n.Jd = function() {
    this.data = {
        Pf: !! (this.ma & 2),
        pd: !! (this.ma & 1),
        of: !! (this.ma & 16),
        de: !! (this.ma & 4),
        eb: !1
    };
    this.data.w = this.w.join(" ");
    var a = [];
    this.ma & 1 && a.push("cro");
    this.ma & 2 || a.push("cbrd");
    this.data.ya = a.join(" ");
    this.data.top = this.top + "px";
    this.data.offset = this.Tc + this.Uc;
    this.data.Wa = this.Wa;
    this.data.width = this.width + this.Ld;
    a = this.height;
    this.data.height = a ? a - 0 - (this.ma & 2 ? 5 : 3) + "px" : "auto";
    this.data.borderColor = this.Jc;
    this.data.bgColor = this.Hc;
    this.data.le = this.Kc;
    this.data.kb = this.$c;
    a = this.text ?
        this.text.toString() : "";
    So(this.data, this.Mc, this.Lc, "caption");
    So(this.data, a, a, "text");
    this.kc && (this.data.Id = this.kc);
    this.data.ge = "";
    this.data.nf = "";
    this.a && (this.data.Rf = this.f, this.data.yf = this.b ? "cpic-fade" : "", this.data.Af = this.c & 1 ? "cpic-rot-left" : "cpic-rot-right", this.data.zd = this.a);
    var a = this.data,
        b = !! a.eb,
        c = !! a.of,
        d = a.borderColor,
        e = a.bgColor,
        f = a.w,
        g = a.zd,
        h = a.top,
        l = a.Wa,
        m = a.offset,
        p = a.width,
        q = !! a.Pf,
        r = !! a.pd,
        v = a.ya,
        t = a.height,
        z = a.kb,
        A = !! a.de,
        B = "",
        e = "border-color:" + T(d) + ";background-color:" +
            T(e) + ";",
        e = Ff(e);
    if (b && c) var c = a.Wa,
    K = a.offset, R = a.yg, Ca = a.width, c = P('<div class="rsvp-no-bg" style="top:' + Q(T(a.top)) + ";" + Q(T(c)) + ":" + Q(T(K)) + ";height:" + Q(T(R)) + ";width:" + Q(T(Ca)) + ';">&nbsp;</div>');
    else c = "";
    f = c + '<div class="' + Q(f) + " chip" + (g ? " corg" : "") + '" style="top:' + Q(T(h)) + ";" + Q(T(l)) + ":" + Q(T(m)) + ";width:" + Q(T(p)) + ';">' + (q ? r ? '<div class="cb2" style="border-color:' + Q(T(d)) + ';">&nbsp;</div><div class="cb1" style="' + Q(T(e)) + '">&nbsp;</div>' : '<div class="ct" style="border-bottom-color:' + Q(T(d)) +
        '">&nbsp;</div>' : "") + '<dl class="' + Q(v) + '" style="height:' + Q(T(t)) + ";" + Q(T(e)) + (z ? "color:" + Q(T(z)) : "") + '">';
    h = a.le;
    l = a.ke;
    m = a.ge;
    p = a.Id;
    r = a.caption;
    v = a.nf;
    h = P('<dt style="' + (h ? "background-color:" + Q(T(h)) + ";" : "") + '">' + Po({
        Ic: l,
        content: Ef(O(m) + '<span class="chip-caption ' + Q(p) + '">' + O(r) + "</span>" + O(v))
    }) + "</dt>");
    f = f + h + "<dd>";
    h = a.Id;
    l = a.text;
    h = P(Po({
        Ic: a.Jf,
        content: Ef("" + (h ? '<span class="' + Q(h) + '">' + O(l) + "</span>" : O(l)))
    }));
    f = f + h + "</dd>";
    b ? (h = Cf(a, {
        ue: e
    }), b = h.ue, h = h.zg, b = P('<div><div class="mask mask-top" style="' +
        Q(T(b)) + '">&nbsp;</div><div class="mask mask-bottom" style="' + Q(T(b)) + '">&nbsp;</div><div class="mask mask-left" style="height:' + Q(T(h)) + ";" + Q(T(b)) + '">&nbsp;</div><div class="mask mask-right" style="height:' + Q(T(h)) + ";" + Q(T(b)) + '">&nbsp;</div></div>')) : b = "";
    d = f + b + (A ? '<div class="resizer"><div class="rszr-icon">&nbsp;</div></div>' : "") + "</dl>" + (q ? '<div class="cb1" style="' + Q(T(e)) + '">&nbsp;</div><div class="cb2" style="border-color:' + Q(T(d)) + ';">&nbsp;</div>' : "");
    g ? (g = a.Af, q = a.Rf, A = a.borderColor, e =
        a.zd, a = P('<div class="g-hovercard cpic ' + Q(a.yf) + " " + Q(g) + '" data-userid="' + Q(q) + '" style="border-color:' + Q(T(A)) + ';"><img src="' + Q(Wf(e)) + '?sz=24" height="24" width="24"></div>')) : a = "";
    return P(B + (d + a + "</div>"))
};

function To(a, b, c) {
    this.b = b;
    this.a = c
}
D(To, Mo);

function Uo(a, b, c, d) {
    b = Si(a.b, b.Hb(), !0, !0);
    c ? (a = d || Si(a.b, c.Hb(), !0, !0), a = "" + b + " \u2013 " + a) : a = "At " + b;
    return a
}
var Vo = !(xc || ko);

function Wo(a) {
    var b = a.style,
        c = a.height;
    a = a.text;
    return P('<div style="height:' + Q(T(c)) + 'px;"><div class="' + Q(b) + '" style="height:' + Q(T(c - 1)) + 'px;">' + O(a) + "</div></div>")
}

function Xo(a) {
    return P('<td style="width:' + Q(T(a.width)) + 'px;"></td>')
};

function Yo(a, b) {
    this.ia = a;
    this.b = b || ""
}

function Zo(a) {
    Yo.call(this, 4 < a.title.length ? 60 : a.f ? 45 : 40, a.title);
    this.f = a.c;
    this.c = a.a;
    this.a = a.b
}
D(Zo, Yo);

function $o(a, b, c) {
    for (var d = [], e = 0; 24 > e; ++e) {
        var f = 23 == e ? a.a.a + " " + a.a.c : a.a.a,
            g;
        g = a.c;
        var h = Fb(2E3, 1, 1, e, a.f, 0);
        g = Si(g, h.wa(), !0);
        d.push(Wo({
            style: f,
            height: 42,
            text: g
        }))
    }
    a = '<td class="' + Q(a.a.b + (b ? "" : " tg-timesnotlast")) + '">';
    b = d.length;
    for (e = 0; e < b; e++) a += O(d[e]);
    d = c.length;
    for (b = 0; b < d; b++) a += O(c[b]);
    return P(a + "</td>")
}

function ap() {}
var bp = new function() {
        this.b = "tg-times-pri";
        this.a = "tg-time-pri";
        this.c = "tg-time-pri-last"
    };

function cp(a, b) {
    this.b = a;
    this.g = b
}
cp.prototype.f = ca;
cp.prototype.c = ca;
cp.prototype.a = k("b");
cp.prototype.ba = function(a) {
    this.b = a
};

function dp() {
    cp.call(this, !1, 0)
}
D(dp, cp);
dp.prototype.a = aa(!1);

function ep(a, b, c, d, e, f) {
    I.call(this);
    this.b = d;
    this.a = f
}
D(ep, I);
ep.prototype.v = function() {
    ep.D.v.call(this)
};
ep.prototype.o = aa(null);
oc([2, 1, 0, 3]);
hg();
hg();

function fp(a, b, c, d) {
    this.event = a;
    this.Ta = b;
    this.a = c;
    this.qe = d;
    this.Eb = []
};

function gp(a) {
    var b, c = a.id,
        d = a.te,
        e = a.se,
        f = a.Ze,
        g = a.Of,
        h = a.zf,
        l = a.Ce,
        m = a.Rb;
    a = '<td class="' + Q(a.re) + '">';
    for (var p = g.length, q = 0; q < p; q++) a += Gf(null == (b = g[q]) ? "" : b);
    a += '<div id="' + Q(c) + "Col" + Q(d) + '" class="tg-col-eventwrapper" style="height:' + Q(T(e)) + "px;margin-bottom:-" + Q(T(e)) + 'px;"><div class="' + Q(f) + '">';
    e = m.length;
    for (f = 0; f < e; f++) a += O(m[f]);
    m = l.length;
    for (e = 0; e < m; e++) a += Gf(null == (b = l[e]) ? "" : b);
    a += '</div></div><div id="' + Q(c) + "Over" + Q(d) + '" class="tg-col-overlaywrapper">';
    c = h.length;
    for (d = 0; d <
        c; d++) a += Gf(null == (b = h[d]) ? "" : b);
    return P(a + "</div></td>")
};

function hp(a, b, c, d, e) {
    this.C = new To(Xd(), a, b);
    this.a = c || "tg";
    this.I = d || !1;
    this.i = !0;
    this.A = e || "tg-gutter";
    b = new ap;
    b.title = "";
    b.c = 0;
    b.a = a;
    b.b = bp;
    this.c = [new Zo(b)];
    this.h = [];
    this.l = [];
    this.g = [];
    this.f = new dp;
    this.h.push(ip);
    this.g.push(jp)
}
hp.prototype.s = null;

function kp(a, b, c, d) {
    var e = a.C;
    if (a.b)
        for (var f in a.b)
            if (a.b[f].Ag(b, c)) {
                e = a.b[f].Qa;
                break
            }
    a = new No;
    a.Ta = b.Ta;
    a.c = b.a;
    a.event = b.event;
    a.left = b.left;
    a.width = b.Ke;
    a.a = 42;
    a.f = 0;
    a.b = !b.Fe;
    a.g = 24;
    var g = e,
        e = a.event;
    b = new Qo;
    Ro(b, 2, Vo && !0);
    f = ij.b[79] ? jc(e.l, "SS_asid") : !1;
    var h = e.T,
        l = Gn(g.a, e),
        m = 0;
    f ? m = 3 : g.a.bb(e) && (m = 2);
    var p = eo(e),
        q = m,
        m = jo(l),
        r = !1,
        v, t, z = m.c;
    switch (q || 0) {
        case 1:
            q = m.T;
            v = m.K;
            t = m.L;
            break;
        case 2:
            q = m.f;
            v = m.s;
            t = m.I;
            z = m.A;
            r = !0;
            break;
        case 3:
            q = m.g;
            v = m.h;
            t = m.i;
            z = m.l;
            break;
        default:
            q = m.a, v = m.b, t = m.G
    }
    p &&
        (q = p);
    b.je = l;
    b.Hc = q;
    b.Jc = v;
    b.Kc = t;
    b.$c = z;
    b.b = r;
    l = (a.g - 0) * a.a;
    p = Math.round((a.Ta / 60 - a.f) * a.a);
    p = Math.max(0 * a.a, p);
    b.top = p;
    b.Tc = 100 * a.left;
    b.Uc = "%";
    b.Wa = "left";
    m = Math.round((a.c / 60 - a.f) * a.a);
    m = Math.min(m, l);
    b.height = Math.max(m - p, a.a / 2);
    b.width = 100 * a.width;
    b.Ld = "%";
    Ro(b, 1, !1);
    l = g.a.bb(e);
    Ro(b, 16, l);
    l && b.w.push("rsvp-no-chip");
    Ro(b, 4, !1);
    1 == e.h && a.b && (l = e.getId().charCodeAt(1), p = 1 == e.h ? "" : null, b.a = null, b.c = l, b.f = p);
    p = Tg(e);
    l = !1;
    h ? (h = Uo(g, e.J()), m = "", b.text = p, l = !0) : 30 < a.c - a.Ta ? (h = Uo(g, e.J(), e.O), m = "",
        b.text = p, l = !0) : (p = p.content, h = Uo(g, e.J(), e.O, p), m = p);
    h = g.a.wb(e, !0) + h + " " + O("");
    b.Mc = h;
    b.Lc = m || "";
    g = "ca-evp" + la(e);
    b.w.push(g);
    f && b.w.push("av-chip");
    l && (e = "evt-lk ca-elp" + la(e), b.kc = e);
    0 < a.left && (b.w.push("chip-border"), (d = d && d.u()) && c == d ? b.w.push("chip-color-today") : b.w.push("chip-color"));
    return b.Jd()
}

function ip(a, b, c, d, e) {
    return (a = e && e.u()) && b == a ? P('<div class="tg-today" style="height:' + Q(T(1008)) + "px;margin-bottom:-" + Q(T(1008)) + 'px;">&nbsp;</div>') : null
}

function jp(a, b, c, d, e) {
    a = e && e.u();
    b == a ? (b = 42 * (e.hour + e.minute / 60 - 0) | 0, e = !! lp(d, e), d = P('<div class="tg-hourmarker tg-nowmarker" id="' + Q(d.a) + 'nowmarker" style="top:' + Q(T(b)) + "px;" + (e ? "" : "display:none;") + '"> </div>')) : d = null;
    return d
}
hp.prototype.render = function(a, b, c) {
    var d = a.length,
        e, f = c || null,
        g = this.c;
    e = [];
    for (var h = 0, l = g.length; h < l; h++) e.push(Xo({
        width: g[h].ia
    }));
    e.push(mp(this, d));
    f ? (h = (42 * (f.hour + f.minute / 60 - 0) | 0) - 4, f = !! lp(this, f), f = [P('<div id="' + Q(this.a) + 'nowptr" class="tg-nowptr" style="' + Q(T("left")) + ":" + Q(T(0)) + "px;top:" + Q(T(h)) + "px;" + (f ? "" : "display:none;") + '"></div>')]) : f = [];
    for (var m = f, f = [], h = 0, l = g.length; h < l; h++) {
        var p = h == l - 1;
        f.push($o(g[h], p, p ? m : []))
    }
    g = '<tr height="1">';
    h = e.length;
    for (l = 0; l < h; l++) g += O(e[l]);
    g +=
        "</tr><tr>";
    e = f.length;
    for (h = 0; h < e; h++) g += O(f[h]);
    e = P(g);
    g = b;
    b = [];
    for (f = 0; f < d; f++) {
        l = [];
        h = a[f];
        if (h.length) {
            for (var l = h, m = g, p = l.length, q = [], r = [], v = [], t = 0; t < p; ++t) {
                var z = l[t],
                    A = z.J(),
                    B = ob(A) || 0;
                A.F() < m.F() && (B = 0);
                var K = z.O,
                    A = ob(K) || 0;
                30 > A - B && (A = B + 30);
                if (K.F() > m.F() || 1440 < A) A = 1440;
                for (K = 0; r[K] > B;) K++;
                var z = new fp(z, B, A, K),
                    R = v[K];
                R || (R = v[K] = []);
                R.push(z);
                r[K] = A;
                q[K] = z;
                0 != K && (z.Db = [q[K - 1]], q[K - 1].Eb.push(z));
                for (A = K + 1; r[A] <= B;) A++;
                if (B = q[A]) z.Eb.push(B), B.Db.push(z)
            }
            l = Array.prototype.concat.apply([],
                v);
            m = l.length;
            r = q = p = void 0;
            for (q = m; q--;) {
                v = 1;
                t = 0;
                p = l[q];
                for (r = p.Eb.length; r--;) B = p.Eb[r], t = Math.max(t, B.Dd), v = Math.min(v, B.left), B.Ta < p.Ta + 30 && (p.Fe = !0);
                p.Dd = t + 1;
                p.width = v / (p.qe + 1);
                p.left = v - p.width
            }
            for (q = 0; q < m; q++) {
                p = l[q];
                p.left = 0;
                if (p.Db)
                    for (r = p.Db.length; r--;) v = p.Db[r], p.left = Math.max(p.left, v.left + v.width);
                r = (1 - p.left) / p.Dd;
                p.width = Math.max(p.width, r);
                p.Ke = Math.min(1 - p.left, p.width + .7 * r)
            }
            m = g;
            p = c;
            q = [];
            for (r = 0; r < l.length; r++) q.push(kp(this, l[r], m, p));
            l = q
        }
        m = [];
        for (r = 0; r < this.h.length; ++r) m.push(this.h[r](f,
            g, h, this, c));
        m.push(null);
        p = [];
        for (r = 0; r < this.l.length; ++r) p.push(this.l[r](f, g, h, this, c));
        p.push(null);
        q = [];
        for (r = 0; r < this.g.length; ++r) q.push(this.g[r](f, g, h, this, c));
        q.push(null);
        h = this.I && f == d - 1 ? "tg-gutter" : this.A;
        r = "tg-col";
        c && (g.H(c.u()) || 1 < d && g.H(fb(c)) && 0 < f) && (r = "tg-col-today");
        v = g.ea();
        b.push(gp({
            se: 1008,
            id: this.a,
            te: f,
            Of: m,
            re: 0 == v || 6 == v ? r + " tg-weekend" : r,
            Ze: h,
            Rb: l,
            Ce: p,
            zf: q
        }));
        this.I || (g = fb(g))
    }
    c = 0;
    for (d = this.c.length; c < d; c++);
    d = c = NaN;
    a = Array.prototype.concat.apply([], a);
    g = a.length;
    for (f =
        0; f < g; f++) l = a[f], h = ob(l.J()), l = ob(l.O), l < h || (isNaN(c) ? (c = h, d = l) : (c = Math.min(c, h), d = Math.max(d, l)));
    this.s = new ep(0, 0, 0, 42, 0, isNaN(c) ? null : new Lo(c, d));
    a = this.f;
    c = this.a;
    a = '<div class="tg-mainwrapper" style="margin-top:' + Q(T(a.a() ? a.g : 0)) + 'px;"><table id="' + Q(c) + 'Table" class="tg-timedevents" cellpadding="0" cellspacing="0" style="height:' + Q(T(1010)) + 'px">' + O(e);
    c = b.length;
    for (d = 0; d < c; d++) a += O(b[d]);
    return P(a + "</tr></table></div>")
};

function mp(a, b) {
    for (var c = a.f.f(42), d = a.f.c(42), e, f = a.a, c = '<td colspan="' + Q(b) + '"><div class="tg-spanningwrapper"><div class="tg-hourmarkers">' + Gf(null == (e = c) ? "" : e), g = 0; 24 > g; g++) c += '<div class="tg-markercell' + Q("") + '"><div class="tg-dualmarker' + Q("") + '"></div></div>';
    c += Gf(null == (e = d) ? "" : e) + '</div></div><div class="tg-spanningwrapper tg-chipspanningwrapper" id="' + Q(f) + 'spanningwrapper"></div></td>';
    return P(c)
}

function lp(a, b) {
    return a.i && !isNaN(b.hour) && 0 <= b.hour && 24 > b.hour
};
var np = new Lo(5, 20);

function op(a, b) {
    this.a = a;
    this.b = b
};

function pp(a) {
    this.a = a
}
pp.prototype.apply = function(a) {
    for (var b = [], c = [], d = 0, e = a.length; d < e; d++) {
        var f = a[d],
            g = f.Z() && Pg(f.Z());
        this.a && g || (f.b || f.c || g ? b.push(f) : c.push(f))
    }
    return new op(b, c)
};

function qp(a, b, c, d, e) {
    this.c = a;
    this.id = String(b);
    this.a = c;
    this.g = d;
    this.h = e
}

function rp(a) {
    return "scrolltimedevents" + a.id
}
qp.prototype.b = function() {
    return "topcontainer" + this.id
};

function sp(a, b, c, d, e) {
    qp.call(this, a, b, c, d, new pp(!1));
    this.i = !! e
}
D(sp, qp);
sp.prototype.f = !1;

function tp(a, b) {
    if (!a.f) return !1;
    var c = Qb(b, function(a) {
        return !(a.Z() && Pg(a.Z()))
    });
    ec(c, function(a, b) {
        return a.J().u().F() - b.J().u().F()
    });
    for (var d = 1, e = c.length; d < e; ++d)
        if (c[d - 1].O.u().F() > c[d].J().u().F()) return !0;
    return !1
}

function up(a, b, c) {
    a = "allday-disclose" + a.id;
    var d = b ? "Expand All Day events" : "Collapse All Day events";
    b = b ? "goog-zippy-collapsed" : "goog-zippy-expanded";
    return P('<div class=wk-disclose-pos style="width:' + Q(T(c)) + 'px"><div id="' + Q(a) + '" title="' + Q(d) + '" role=button class="wk-disclose ' + Q(b) + '"><div class=wk-zip></div></div></div>')
}
sp.prototype.b = function() {
    return "topcontainer" + this.id
};

function Bn(a, b, c, d) {
    this.A = b.K;
    this.c = parseInt(d, 10);
    if (isNaN(this.c) || 1 > this.c || 7 < this.c) this.c = 0;
    1 == this.c ? (this.za = "Day", d = "day") : this.c ? (this.za = [null, null, "2 Days", "3 Days", "4 Days", "5 Days", "6 Days", "7 Days"][this.c], d = "next" + this.c + "days") : (this.za = "Week", d = "week");
    var e;
    this.c ? e = new xd(this.c) : (e = [], b.h && e.push(new hm(b.h, b.C)), e = new gm(e, b.c, b.f, b.f ? void 0 : b.s, b.f ? void 0 : b.G), e = new vd(e));
    this.a = e;
    yo.call(this, a, b, d, e, c);
    d = new uo(b.b, c, !1, !0);
    this.G = new hp(b.b, c);
    this.G.i = !! a.Wd;
    this.g =
        new sp(b.b, this.id, d, this.G);
    this.g.f = !0
}
D(Bn, yo);
n = Bn.prototype;
n.lb = null;
n.Ib = null;
n.Wb = function() {
    var a = this.b.b;
    return 1 == rd(this.a) ? Hi(a, this.a.a) : ln(a, this.V())
};
n.Te = function(a) {
    M(this, "a");
    var b = qb(this.b.a.oa()),
        c = this.g,
        d = this.a.a,
        e = this.L,
        f = !! this.A,
        g = c.h.apply(a),
        h, l = g.a,
        m = tp(c, l),
        p, q = xk() - 1;
    p = P('<th class="wk-dummyth" rowspan=3 style="width: ' + Q(T(q)) + 'px;">&nbsp;</th>');
    for (var r, v = c.g.c, t = 0, z = [], A = 0; A < v.length; A++) t += v[A].ia, z.push({
        width: v[A].ia,
        title: v[A].b,
        be: A == v.length - 1 && m ? up(c, !! f, t) : ""
    });
    for (var B = "", K = z.length, R = 0; R < K; R++) var Ca = z[R],
    B = B + ('<td class=wk-tzlabel style="width:' + Q(T(Ca.width)) + 'px" rowspan=3>' + O(Ca.title) + O(Ca.be) + "</td>");
    r =
        P(B);
    for (var Mb = 1 < e ? " wk-full-mode" : "", Qa = [], sb, oa = b.u(), ia, ea = !1, $a = 0; $a < e; $a++) {
        ia = ib(d, $a);
        var ta;
        if (1 == e) {
            var Nb = c.c,
                Fl = ia,
                wp = bn(Nb.a, Fl.ea()),
                xp = Ni(Nb, Fl);
            ta = Z(W(Nb.a.B, Y, 30), [wp, xp])
        } else {
            var Fe = c.c,
                Gl = ia,
                yp = Fe.a,
                zp = Fe,
                Ap = Gl.ea(),
                Bp = Yk(zp, Fe.a.a[Ap]),
                Cp = Ni(Fe, Gl);
            ta = Z(W(yp.B, Y, 30), [Bp, Cp])
        }
        var Dp = ta,
            vb = "wk-dayname";
        ea && (ea = !1, vb += " wk-tomorrow");
        ia.H(oa) && (vb += " wk-today", $a == e - 1 ? vb += " wk-today-last" : ea = !0);
        Qa.push({
            Bb: Dp,
            w: vb,
            xe: "ca-cdp" + ia.F()
        })
    }
    var Vg = [];
    c.a.R = Vg;
    var Ep = c.a,
        Hl = b.u(),
        Fp = "weekViewAllDayBg" +
            c.id,
        Wg = [];
    if (1 == e && d.H(Hl)) Wg.push({
        w: "st-bg-td-last"
    });
    else
        for (var Xg = !1, Yg = e, md = d; Yg--; md = fb(md)) {
            var Yb = "";
            md.H(Hl) ? (Xg = !0, Yb = md.H(d) ? "st-bg-td-first" : 0 == Yg ? "st-bg-td-last" : "st-bg-today") : md.H(d) || Xg ? (Yb = "st-bg-next", Xg = !1) : Yb = "st-bg";
            0 == Yg && (Yb += " st-bg-lc");
            Wg.push({
                w: Yb
            })
        }
    Ep.R.push(oo({
        id: Fp,
        w: "st-bg-all",
        Ua: Wg
    }));
    c.a.R.push(qo());
    var Il = new Wn(l, d, e, f ? 1 : 200, c.i && f ? 2 : 1);
    Yn(Il, c.a);
    c.a.R.push(P("</table>"));
    c.a.R = null;
    for (var Gp = Il.f, Zg = [], $g = 0; $g < e; $g++) Zg.push(vo(Gp[$g]));
    for (var Hp = "weekViewAllDay" +
        c.id, Sa = '<tr><td class="wk-allday" colspan="' + Q(e) + '"><div id="' + Q(Hp) + '" class="wk-allday-pos">', Ip = Vg.length, ah = 0; ah < Ip; ah++) Sa += O(Vg[ah]);
    for (var Sa = Sa + '</div></td></tr><tr class="wk-webcontent">', Jp = Zg.length, bh = 0; bh < Jp; bh++) Sa += '<td class="wk-webcontent-td">' + O(Zg[bh]) + "</td>";
    Sa += "</tr>";
    sb = P(Sa);
    for (var nd = '<table class="wk-weektop' + Q(Mb) + '" cellpadding=0 cellspacing=0><tr class=wk-daynames>' + O(r), Kp = Qa.length, ch = 0; ch < Kp; ch++) var Ge = Qa[ch],
    nd = nd + ('<th title="' + Q(Ge.Bb) + '" scope=col><div class="' +
        Q(Ge.w) + '"><span class="' + Q(Ge.xe) + ' wk-daylink">' + O(Ge.Bb) + "</span></div></th>");
    nd += O(p) + "</tr>" + O(sb) + "</table>";
    h = P(nd);
    for (var Jl, Kl = g.b, dh = [], Ll = {}, Ml = d.F(), Ta = Ml, bb = 0; bb < e; bb++) dh[bb] = [], Ll[Ta] = bb, Ta = Xa(Ta);
    for (var Lp = Ta, bb = 0, Mp = Kl.length; bb < Mp; bb++)
        for (var eh = Kl[bb], Ta = Math.max(eh.J().F(), Ml), Np = Math.min(hb(eh.O).F(), Lp); Ta < Np;) dh[Ll[Ta]].push(eh), Ta = Xa(Ta);
    Jl = c.g.render(dh, d, b);
    M(this, "b");
    var Nl = this.la,
        He = Nl.b,
        Ie = oi(Nl);
    if (!He.o(rp(this.g))) {
        var Ol, Je = this.g,
            Op = !! xc,
            Pp = "topcontainerBorder" +
                Je.id,
            Pl = rp(Je),
            Qp = "bottomcontainerBorder" + Je.id;
        Ol = P('<div id="' + Q(Je.b()) + '"></div>' + (Op ? '<div id="' + Q(Pp) + '" class="wk-border"></div><div id="' + Q(Pl) + '" class="wbkt wk-scrolltimedevents"></div><div id="' + Q(Qp) + '" class="wk-border"></div>' : '<div id="' + Q(Pl) + '" class="wk-scrolltimedevents"></div>'));
        Ie.innerHTML = ue(Ol)
    }
    var Ke = He.o(rp(this.g)),
        Ql = He.o(this.g.b());
    Ql.innerHTML = ue(h);
    Ke.innerHTML = ue(Jl);
    ui(Ke, Ie.offsetHeight - Ql.offsetHeight);
    this.a.a.j();
    for (var Rp = a.length, Rl = [], fh = 0; fh < Rp; fh++) {
        var Le =
            a[fh];
        !Le.b && !Le.c || Le.Z() || Rl.push(Le)
    }
    this.jc = Rl;
    this.f = {};
    ti(this, a);
    var Sl = this.G.s,
        Me = Ke.clientHeight,
        Zb = [];
    if (b) {
        var gh = ob(b);
        Zb.push(gh);
        Zb.push(gh + 30, gh - 30)
    }
    var hh = Sl.a;
    hh && Zb.push(hh.start, hh.end);
    Zb.push(60 * np.start, 60 * np.end, 1440, 0);
    for (var Tl = w(void 0) ? void 0 : 1E5, Sp = w(void 0) ? void 0 + Me : -1, Ul = Sl.b, Tp = 24 * Ul, wb = NaN, od = NaN, ih = !1, jh = 0; jh < Zb.length; ++jh) {
        var xb = Td(Zb[jh] * Ul / 60, 0, Tp),
            ih = ih || xb < Tl || xb > Sp;
        if (isNaN(wb)) wb = od = xb;
        else if (xb < wb ? wb = Math.max(xb, od - Me) : xb > od && (od = Math.min(xb, wb + Me)),
            od - wb >= Me) break
    }
    Ke.scrollTop = ih ? wb : Tl;
    null == this.lb && (this.lb = u.setInterval(y(this.Cf, this), 6E4));
    this.C && this.C.M();
    this.Ib && this.Ib.M();
    var Vl = "allday-disclose" + this.g.id;
    He.o(Vl) && (this.Ib = new Fo(Vl, void 0, !this.A), J(this.Ib, "toggle", this.ce, !1, this));
    var kh = new Hn(Ie);
    Kn(kh, ra(Nn, Ie), y(this.fd, this));
    Kn(kh, On, y(this.hd, this));
    this.C = kh;
    M(this, "c");
    var lh = $d(document, "weekViewAllDayBg" + this.g.id);
    if (lh) {
        var Up = Ue($d(document, "weekViewAllDay" + this.g.id)).height;
        if (x("height")) Ae(lh, Up + "px", "height");
        else
            for (var Wl in "height") Ae(lh, "height" [Wl], Wl)
    }
};
n.render = function() {
    Bn.D.render.call(this);
    this.L = rd(this.a);
    wi(this, this.V(), y(this.Te, this))
};
n.Cf = function() {
    var a = this.G,
        b = this.h,
        c = qb(this.b.a.oa()),
        d = lp(a, c),
        c = 42 * (c.hour + c.minute / 60 - 0) | 0,
        e = b.o(a.a + "nowmarker");
    e && (Xe(e, d), e.style.top = c + "px");
    if (a = b.o(a.a + "nowptr")) Xe(a, d), a.style.top = c - 4 + "px"
};
n.Ga = function() {
    Bn.D.Ga.call(this);
    this.C && this.C.M();
    null != this.lb && (u.clearInterval(this.lb), this.lb = null)
};
n.dd = function() {
    return {
        title: "",
        Qa: new Jo(this.i, this.K),
        Qc: "wk-moreevents st-contents",
        width: 400
    }
};
n.ce = function() {
    this.A = !this.A;
    dm(this.la)
};

function vp(a) {
    yn.call(this, a)
}
D(vp, yn);
vp.prototype.setup = function() {
    vp.D.setup.call(this);
    var a = this.b;
    if (1 != !! a.ob) {
        a.ob = new ll(a.b.a);
        var b = a.ob;
        b.Ca("today", "t");
        b.Ca("prev", "p");
        b.Ca("next", "n");
        b.Ca("dayview", "d");
        b.Ca("weekview", "w");
        b.Ca("monthview", "m");
        b.Ca("agendaview", "a");
        J(b, "shortcut", y(a.df, a))
    }
};
window._init = function(a) {
    (new vp(a)).setup()
};

