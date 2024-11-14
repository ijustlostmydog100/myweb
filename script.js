! function() {
    "use strict";

    var startingBalance = 700;
    var startingJackpot = 1539;

    var jackpotIncrement = 37;
    var spinCost = 7;

    var t = {
            9662: function(t, n, e) {
                var o = e(614),
                    r = e(6330),
                    i = TypeError;
                t.exports = function(t) {
                    if (o(t)) return t;
                    throw i(r(t) + " is not a function")
                }
            },
            9483: function(t, n, e) {
                var o = e(4411),
                    r = e(6330),
                    i = TypeError;
                t.exports = function(t) {
                    if (o(t)) return t;
                    throw i(r(t) + " is not a constructor")
                }
            },
            6077: function(t, n, e) {
                var o = e(614),
                    r = String,
                    i = TypeError;
                t.exports = function(t) {
                    if ("object" == typeof t || o(t)) return t;
                    throw i("Can't set " + r(t) + " as a prototype")
                }
            },
            1223: function(t, n, e) {
                var o = e(5112),
                    r = e(30),
                    i = e(3070).f,
                    s = o("unscopables"),
                    a = Array.prototype;
                null == a[s] && i(a, s, {
                    configurable: !0,
                    value: r(null)
                }), t.exports = function(t) {
                    a[s][t] = !0
                }
            },
            1530: function(t, n, e) {
                var o = e(8710).charAt;
                t.exports = function(t, n, e) {
                    return n + (e ? o(t, n).length : 1)
                }
            },
            5787: function(t, n, e) {
                var o = e(7976),
                    r = TypeError;
                t.exports = function(t, n) {
                    if (o(n, t)) return t;
                    throw r("Incorrect invocation")
                }
            },
            9670: function(t, n, e) {
                var o = e(111),
                    r = String,
                    i = TypeError;
                t.exports = function(t) {
                    if (o(t)) return t;
                    throw i(r(t) + " is not an object")
                }
            },
            8533: function(t, n, e) {
                var o = e(2092).forEach,
                    r = e(9341)("forEach");
                t.exports = r ? [].forEach : function(t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            },
            1318: function(t, n, e) {
                var o = e(5656),
                    r = e(1400),
                    i = e(6244),
                    s = function(t) {
                        return function(n, e, s) {
                            var a, c = o(n),
                                u = i(c),
                                l = r(s, u);
                            if (t && e != e) {
                                for (; u > l;)
                                    if ((a = c[l++]) != a) return !0
                            } else
                                for (; u > l; l++)
                                    if ((t || l in c) && c[l] === e) return t || l || 0;
                            return !t && -1
                        }
                    };
                t.exports = {
                    includes: s(!0),
                    indexOf: s(!1)
                }
            },
            2092: function(t, n, e) {
                var o = e(9974),
                    r = e(1702),
                    i = e(8361),
                    s = e(7908),
                    a = e(6244),
                    c = e(5417),
                    u = r([].push),
                    l = function(t) {
                        var n = 1 == t,
                            e = 2 == t,
                            r = 3 == t,
                            l = 4 == t,
                            f = 6 == t,
                            h = 7 == t,
                            p = 5 == t || f;
                        return function(d, v, y, m) {
                            for (var g, S, b = s(d), _ = i(b), x = o(v, y), E = a(_), O = 0, T = m || c, I = n ? T(d, E) : e || h ? T(d, 0) : void 0; E > O; O++)
                                if ((p || O in _) && (S = x(g = _[O], O, b), t))
                                    if (n) I[O] = S;
                                    else if (S) switch (t) {
                                case 3:
                                    return !0;
                                case 5:
                                    return g;
                                case 6:
                                    return O;
                                case 2:
                                    u(I, g)
                            } else switch (t) {
                                case 4:
                                    return !1;
                                case 7:
                                    u(I, g)
                            }
                            return f ? -1 : r || l ? l : I
                        }
                    };
                t.exports = {
                    forEach: l(0),
                    map: l(1),
                    filter: l(2),
                    some: l(3),
                    every: l(4),
                    find: l(5),
                    findIndex: l(6),
                    filterReject: l(7)
                }
            },
            1194: function(t, n, e) {
                var o = e(7293),
                    r = e(5112),
                    i = e(7392),
                    s = r("species");
                t.exports = function(t) {
                    return i >= 51 || !o((function() {
                        var n = [];
                        return (n.constructor = {})[s] = function() {
                            return {
                                foo: 1
                            }
                        }, 1 !== n[t](Boolean).foo
                    }))
                }
            },
            9341: function(t, n, e) {
                var o = e(7293);
                t.exports = function(t, n) {
                    var e = [][t];
                    return !!e && o((function() {
                        e.call(null, n || function() {
                            return 1
                        }, 1)
                    }))
                }
            },
            3658: function(t, n, e) {
                var o = e(9781),
                    r = e(3157),
                    i = TypeError,
                    s = Object.getOwnPropertyDescriptor,
                    a = o && ! function() {
                        if (void 0 !== this) return !0;
                        try {
                            Object.defineProperty([], "length", {
                                writable: !1
                            }).length = 1
                        } catch (t) {
                            return t instanceof TypeError
                        }
                    }();
                t.exports = a ? function(t, n) {
                    if (r(t) && !s(t, "length").writable) throw i("Cannot set read only .length");
                    return t.length = n
                } : function(t, n) {
                    return t.length = n
                }
            },
            206: function(t, n, e) {
                var o = e(1702);
                t.exports = o([].slice)
            },
            7475: function(t, n, e) {
                var o = e(3157),
                    r = e(4411),
                    i = e(111),
                    s = e(5112)("species"),
                    a = Array;
                t.exports = function(t) {
                    var n;
                    return o(t) && (n = t.constructor, (r(n) && (n === a || o(n.prototype)) || i(n) && null === (n = n[s])) && (n = void 0)), void 0 === n ? a : n
                }
            },
            5417: function(t, n, e) {
                var o = e(7475);
                t.exports = function(t, n) {
                    return new(o(t))(0 === n ? 0 : n)
                }
            },
            7072: function(t, n, e) {
                var o = e(5112)("iterator"),
                    r = !1;
                try {
                    var i = 0,
                        s = {
                            next: function() {
                                return {
                                    done: !!i++
                                }
                            },
                            return: function() {
                                r = !0
                            }
                        };
                    s[o] = function() {
                        return this
                    }, Array.from(s, (function() {
                        throw 2
                    }))
                } catch (t) {}
                t.exports = function(t, n) {
                    if (!n && !r) return !1;
                    var e = !1;
                    try {
                        var i = {};
                        i[o] = function() {
                            return {
                                next: function() {
                                    return {
                                        done: e = !0
                                    }
                                }
                            }
                        }, t(i)
                    } catch (t) {}
                    return e
                }
            },
            4326: function(t, n, e) {
                var o = e(1702),
                    r = o({}.toString),
                    i = o("".slice);
                t.exports = function(t) {
                    return i(r(t), 8, -1)
                }
            },
            648: function(t, n, e) {
                var o = e(1694),
                    r = e(614),
                    i = e(4326),
                    s = e(5112)("toStringTag"),
                    a = Object,
                    c = "Arguments" == i(function() {
                        return arguments
                    }());
                t.exports = o ? i : function(t) {
                    var n, e, o;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(e = function(t, n) {
                        try {
                            return t[n]
                        } catch (t) {}
                    }(n = a(t), s)) ? e : c ? i(n) : "Object" == (o = i(n)) && r(n.callee) ? "Arguments" : o
                }
            },
            9920: function(t, n, e) {
                var o = e(2597),
                    r = e(3887),
                    i = e(1236),
                    s = e(3070);
                t.exports = function(t, n, e) {
                    for (var a = r(n), c = s.f, u = i.f, l = 0; l < a.length; l++) {
                        var f = a[l];
                        o(t, f) || e && o(e, f) || c(t, f, u(n, f))
                    }
                }
            },
            4964: function(t, n, e) {
                var o = e(5112)("match");
                t.exports = function(t) {
                    var n = /./;
                    try {
                        "/./" [t](n)
                    } catch (e) {
                        try {
                            return n[o] = !1, "/./" [t](n)
                        } catch (t) {}
                    }
                    return !1
                }
            },
            8544: function(t, n, e) {
                var o = e(7293);
                t.exports = !o((function() {
                    function t() {}
                    return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
                }))
            },
            6178: function(t) {
                t.exports = function(t, n) {
                    return {
                        value: t,
                        done: n
                    }
                }
            },
            8880: function(t, n, e) {
                var o = e(9781),
                    r = e(3070),
                    i = e(9114);
                t.exports = o ? function(t, n, e) {
                    return r.f(t, n, i(1, e))
                } : function(t, n, e) {
                    return t[n] = e, t
                }
            },
            9114: function(t) {
                t.exports = function(t, n) {
                    return {
                        enumerable: !(1 & t),
                        configurable: !(2 & t),
                        writable: !(4 & t),
                        value: n
                    }
                }
            },
            6135: function(t, n, e) {
                var o = e(4948),
                    r = e(3070),
                    i = e(9114);
                t.exports = function(t, n, e) {
                    var s = o(n);
                    s in t ? r.f(t, s, i(0, e)) : t[s] = e
                }
            },
            7045: function(t, n, e) {
                var o = e(6339),
                    r = e(3070);
                t.exports = function(t, n, e) {
                    return e.get && o(e.get, n, {
                        getter: !0
                    }), e.set && o(e.set, n, {
                        setter: !0
                    }), r.f(t, n, e)
                }
            },
            8052: function(t, n, e) {
                var o = e(614),
                    r = e(3070),
                    i = e(6339),
                    s = e(3072);
                t.exports = function(t, n, e, a) {
                    a || (a = {});
                    var c = a.enumerable,
                        u = void 0 !== a.name ? a.name : n;
                    if (o(e) && i(e, u, a), a.global) c ? t[n] = e : s(n, e);
                    else {
                        try {
                            a.unsafe ? t[n] && (c = !0) : delete t[n]
                        } catch (t) {}
                        c ? t[n] = e : r.f(t, n, {
                            value: e,
                            enumerable: !1,
                            configurable: !a.nonConfigurable,
                            writable: !a.nonWritable
                        })
                    }
                    return t
                }
            },
            3072: function(t, n, e) {
                var o = e(7854),
                    r = Object.defineProperty;
                t.exports = function(t, n) {
                    try {
                        r(o, t, {
                            value: n,
                            configurable: !0,
                            writable: !0
                        })
                    } catch (e) {
                        o[t] = n
                    }
                    return n
                }
            },
            5117: function(t, n, e) {
                var o = e(6330),
                    r = TypeError;
                t.exports = function(t, n) {
                    if (!delete t[n]) throw r("Cannot delete property " + o(n) + " of " + o(t))
                }
            },
            9781: function(t, n, e) {
                var o = e(7293);
                t.exports = !o((function() {
                    return 7 != Object.defineProperty({}, 1, {
                        get: function() {
                            return 7
                        }
                    })[1]
                }))
            },
            4154: function(t) {
                var n = "object" == typeof document && document.all,
                    e = void 0 === n && void 0 !== n;
                t.exports = {
                    all: n,
                    IS_HTMLDDA: e
                }
            },
            317: function(t, n, e) {
                var o = e(7854),
                    r = e(111),
                    i = o.document,
                    s = r(i) && r(i.createElement);
                t.exports = function(t) {
                    return s ? i.createElement(t) : {}
                }
            },
            7207: function(t) {
                var n = TypeError;
                t.exports = function(t) {
                    if (t > 9007199254740991) throw n("Maximum allowed index exceeded");
                    return t
                }
            },
            8324: function(t) {
                t.exports = {
                    CSSRuleList: 0,
                    CSSStyleDeclaration: 0,
                    CSSValueList: 0,
                    ClientRectList: 0,
                    DOMRectList: 0,
                    DOMStringList: 0,
                    DOMTokenList: 1,
                    DataTransferItemList: 0,
                    FileList: 0,
                    HTMLAllCollection: 0,
                    HTMLCollection: 0,
                    HTMLFormElement: 0,
                    HTMLSelectElement: 0,
                    MediaList: 0,
                    MimeTypeArray: 0,
                    NamedNodeMap: 0,
                    NodeList: 1,
                    PaintRequestList: 0,
                    Plugin: 0,
                    PluginArray: 0,
                    SVGLengthList: 0,
                    SVGNumberList: 0,
                    SVGPathSegList: 0,
                    SVGPointList: 0,
                    SVGStringList: 0,
                    SVGTransformList: 0,
                    SourceBufferList: 0,
                    StyleSheetList: 0,
                    TextTrackCueList: 0,
                    TextTrackList: 0,
                    TouchList: 0
                }
            },
            8509: function(t, n, e) {
                var o = e(317)("span").classList,
                    r = o && o.constructor && o.constructor.prototype;
                t.exports = r === Object.prototype ? void 0 : r
            },
            7871: function(t, n, e) {
                var o = e(3823),
                    r = e(5268);
                t.exports = !o && !r && "object" == typeof window && "object" == typeof document
            },
            3823: function(t) {
                t.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version
            },
            1528: function(t, n, e) {
                var o = e(8113);
                t.exports = /ipad|iphone|ipod/i.test(o) && "undefined" != typeof Pebble
            },
            6833: function(t, n, e) {
                var o = e(8113);
                t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(o)
            },
            5268: function(t, n, e) {
                var o = e(4326);
                t.exports = "undefined" != typeof process && "process" == o(process)
            },
            1036: function(t, n, e) {
                var o = e(8113);
                t.exports = /web0s(?!.*chrome)/i.test(o)
            },
            8113: function(t) {
                t.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
            },
            7392: function(t, n, e) {
                var o, r, i = e(7854),
                    s = e(8113),
                    a = i.process,
                    c = i.Deno,
                    u = a && a.versions || c && c.version,
                    l = u && u.v8;
                l && (r = (o = l.split("."))[0] > 0 && o[0] < 4 ? 1 : +(o[0] + o[1])), !r && s && (!(o = s.match(/Edge\/(\d+)/)) || o[1] >= 74) && (o = s.match(/Chrome\/(\d+)/)) && (r = +o[1]), t.exports = r
            },
            748: function(t) {
                t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
            },
            2109: function(t, n, e) {
                var o = e(7854),
                    r = e(1236).f,
                    i = e(8880),
                    s = e(8052),
                    a = e(3072),
                    c = e(9920),
                    u = e(4705);
                t.exports = function(t, n) {
                    var e, l, f, h, p, d = t.target,
                        v = t.global,
                        y = t.stat;
                    if (e = v ? o : y ? o[d] || a(d, {}) : (o[d] || {}).prototype)
                        for (l in n) {
                            if (h = n[l], f = t.dontCallGetSet ? (p = r(e, l)) && p.value : e[l], !u(v ? l : d + (y ? "." : "#") + l, t.forced) && void 0 !== f) {
                                if (typeof h == typeof f) continue;
                                c(h, f)
                            }(t.sham || f && f.sham) && i(h, "sham", !0), s(e, l, h, t)
                        }
                }
            },
            7293: function(t) {
                t.exports = function(t) {
                    try {
                        return !!t()
                    } catch (t) {
                        return !0
                    }
                }
            },
            7007: function(t, n, e) {
                e(4916);
                var o = e(1470),
                    r = e(8052),
                    i = e(2261),
                    s = e(7293),
                    a = e(5112),
                    c = e(8880),
                    u = a("species"),
                    l = RegExp.prototype;
                t.exports = function(t, n, e, f) {
                    var h = a(t),
                        p = !s((function() {
                            var n = {};
                            return n[h] = function() {
                                return 7
                            }, 7 != "" [t](n)
                        })),
                        d = p && !s((function() {
                            var n = !1,
                                e = /a/;
                            return "split" === t && ((e = {}).constructor = {}, e.constructor[u] = function() {
                                return e
                            }, e.flags = "", e[h] = /./ [h]), e.exec = function() {
                                return n = !0, null
                            }, e[h](""), !n
                        }));
                    if (!p || !d || e) {
                        var v = o(/./ [h]),
                            y = n(h, "" [t], (function(t, n, e, r, s) {
                                var a = o(t),
                                    c = n.exec;
                                return c === i || c === l.exec ? p && !s ? {
                                    done: !0,
                                    value: v(n, e, r)
                                } : {
                                    done: !0,
                                    value: a(e, n, r)
                                } : {
                                    done: !1
                                }
                            }));
                        r(String.prototype, t, y[0]), r(l, h, y[1])
                    }
                    f && c(l[h], "sham", !0)
                }
            },
            2104: function(t, n, e) {
                var o = e(4374),
                    r = Function.prototype,
                    i = r.apply,
                    s = r.call;
                t.exports = "object" == typeof Reflect && Reflect.apply || (o ? s.bind(i) : function() {
                    return s.apply(i, arguments)
                })
            },
            9974: function(t, n, e) {
                var o = e(1470),
                    r = e(9662),
                    i = e(4374),
                    s = o(o.bind);
                t.exports = function(t, n) {
                    return r(t), void 0 === n ? t : i ? s(t, n) : function() {
                        return t.apply(n, arguments)
                    }
                }
            },
            4374: function(t, n, e) {
                var o = e(7293);
                t.exports = !o((function() {
                    var t = function() {}.bind();
                    return "function" != typeof t || t.hasOwnProperty("prototype")
                }))
            },
            6916: function(t, n, e) {
                var o = e(4374),
                    r = Function.prototype.call;
                t.exports = o ? r.bind(r) : function() {
                    return r.apply(r, arguments)
                }
            },
            6530: function(t, n, e) {
                var o = e(9781),
                    r = e(2597),
                    i = Function.prototype,
                    s = o && Object.getOwnPropertyDescriptor,
                    a = r(i, "name"),
                    c = a && "something" === function() {}.name,
                    u = a && (!o || o && s(i, "name").configurable);
                t.exports = {
                    EXISTS: a,
                    PROPER: c,
                    CONFIGURABLE: u
                }
            },
            5668: function(t, n, e) {
                var o = e(1702),
                    r = e(9662);
                t.exports = function(t, n, e) {
                    try {
                        return o(r(Object.getOwnPropertyDescriptor(t, n)[e]))
                    } catch (t) {}
                }
            },
            1470: function(t, n, e) {
                var o = e(4326),
                    r = e(1702);
                t.exports = function(t) {
                    if ("Function" === o(t)) return r(t)
                }
            },
            1702: function(t, n, e) {
                var o = e(4374),
                    r = Function.prototype,
                    i = r.call,
                    s = o && r.bind.bind(i, i);
                t.exports = o ? s : function(t) {
                    return function() {
                        return i.apply(t, arguments)
                    }
                }
            },
            5005: function(t, n, e) {
                var o = e(7854),
                    r = e(614);
                t.exports = function(t, n) {
                    return arguments.length < 2 ? (e = o[t], r(e) ? e : void 0) : o[t] && o[t][n];
                    var e
                }
            },
            1246: function(t, n, e) {
                var o = e(648),
                    r = e(8173),
                    i = e(8554),
                    s = e(7497),
                    a = e(5112)("iterator");
                t.exports = function(t) {
                    if (!i(t)) return r(t, a) || r(t, "@@iterator") || s[o(t)]
                }
            },
            4121: function(t, n, e) {
                var o = e(6916),
                    r = e(9662),
                    i = e(9670),
                    s = e(6330),
                    a = e(1246),
                    c = TypeError;
                t.exports = function(t, n) {
                    var e = arguments.length < 2 ? a(t) : n;
                    if (r(e)) return i(o(e, t));
                    throw c(s(t) + " is not iterable")
                }
            },
            8173: function(t, n, e) {
                var o = e(9662),
                    r = e(8554);
                t.exports = function(t, n) {
                    var e = t[n];
                    return r(e) ? void 0 : o(e)
                }
            },
            647: function(t, n, e) {
                var o = e(1702),
                    r = e(7908),
                    i = Math.floor,
                    s = o("".charAt),
                    a = o("".replace),
                    c = o("".slice),
                    u = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
                    l = /\$([$&'`]|\d{1,2})/g;
                t.exports = function(t, n, e, o, f, h) {
                    var p = e + t.length,
                        d = o.length,
                        v = l;
                    return void 0 !== f && (f = r(f), v = u), a(h, v, (function(r, a) {
                        var u;
                        switch (s(a, 0)) {
                            case "$":
                                return "$";
                            case "&":
                                return t;
                            case "`":
                                return c(n, 0, e);
                            case "'":
                                return c(n, p);
                            case "<":
                                u = f[c(a, 1, -1)];
                                break;
                            default:
                                var l = +a;
                                if (0 === l) return r;
                                if (l > d) {
                                    var h = i(l / 10);
                                    return 0 === h ? r : h <= d ? void 0 === o[h - 1] ? s(a, 1) : o[h - 1] + s(a, 1) : r
                                }
                                u = o[l - 1]
                        }
                        return void 0 === u ? "" : u
                    }))
                }
            },
            7854: function(t, n, e) {
                var o = function(t) {
                    return t && t.Math == Math && t
                };
                t.exports = o("object" == typeof globalThis && globalThis) || o("object" == typeof window && window) || o("object" == typeof self && self) || o("object" == typeof e.g && e.g) || function() {
                    return this
                }() || this || Function("return this")()
            },
            2597: function(t, n, e) {
                var o = e(1702),
                    r = e(7908),
                    i = o({}.hasOwnProperty);
                t.exports = Object.hasOwn || function(t, n) {
                    return i(r(t), n)
                }
            },
            3501: function(t) {
                t.exports = {}
            },
            842: function(t) {
                t.exports = function(t, n) {
                    try {
                        1 == arguments.length ? console.error(t) : console.error(t, n)
                    } catch (t) {}
                }
            },
            490: function(t, n, e) {
                var o = e(5005);
                t.exports = o("document", "documentElement")
            },
            4664: function(t, n, e) {
                var o = e(9781),
                    r = e(7293),
                    i = e(317);
                t.exports = !o && !r((function() {
                    return 7 != Object.defineProperty(i("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                }))
            },
            8361: function(t, n, e) {
                var o = e(1702),
                    r = e(7293),
                    i = e(4326),
                    s = Object,
                    a = o("".split);
                t.exports = r((function() {
                    return !s("z").propertyIsEnumerable(0)
                })) ? function(t) {
                    return "String" == i(t) ? a(t, "") : s(t)
                } : s
            },
            2788: function(t, n, e) {
                var o = e(1702),
                    r = e(614),
                    i = e(5465),
                    s = o(Function.toString);
                r(i.inspectSource) || (i.inspectSource = function(t) {
                    return s(t)
                }), t.exports = i.inspectSource
            },
            9909: function(t, n, e) {
                var o, r, i, s = e(4811),
                    a = e(7854),
                    c = e(111),
                    u = e(8880),
                    l = e(2597),
                    f = e(5465),
                    h = e(6200),
                    p = e(3501),
                    d = "Object already initialized",
                    v = a.TypeError,
                    y = a.WeakMap;
                if (s || f.state) {
                    var m = f.state || (f.state = new y);
                    m.get = m.get, m.has = m.has, m.set = m.set, o = function(t, n) {
                        if (m.has(t)) throw v(d);
                        return n.facade = t, m.set(t, n), n
                    }, r = function(t) {
                        return m.get(t) || {}
                    }, i = function(t) {
                        return m.has(t)
                    }
                } else {
                    var g = h("state");
                    p[g] = !0, o = function(t, n) {
                        if (l(t, g)) throw v(d);
                        return n.facade = t, u(t, g, n), n
                    }, r = function(t) {
                        return l(t, g) ? t[g] : {}
                    }, i = function(t) {
                        return l(t, g)
                    }
                }
                t.exports = {
                    set: o,
                    get: r,
                    has: i,
                    enforce: function(t) {
                        return i(t) ? r(t) : o(t, {})
                    },
                    getterFor: function(t) {
                        return function(n) {
                            var e;
                            if (!c(n) || (e = r(n)).type !== t) throw v("Incompatible receiver, " + t + " required");
                            return e
                        }
                    }
                }
            },
            7659: function(t, n, e) {
                var o = e(5112),
                    r = e(7497),
                    i = o("iterator"),
                    s = Array.prototype;
                t.exports = function(t) {
                    return void 0 !== t && (r.Array === t || s[i] === t)
                }
            },
            3157: function(t, n, e) {
                var o = e(4326);
                t.exports = Array.isArray || function(t) {
                    return "Array" == o(t)
                }
            },
            614: function(t, n, e) {
                var o = e(4154),
                    r = o.all;
                t.exports = o.IS_HTMLDDA ? function(t) {
                    return "function" == typeof t || t === r
                } : function(t) {
                    return "function" == typeof t
                }
            },
            4411: function(t, n, e) {
                var o = e(1702),
                    r = e(7293),
                    i = e(614),
                    s = e(648),
                    a = e(5005),
                    c = e(2788),
                    u = function() {},
                    l = [],
                    f = a("Reflect", "construct"),
                    h = /^\s*(?:class|function)\b/,
                    p = o(h.exec),
                    d = !h.exec(u),
                    v = function(t) {
                        if (!i(t)) return !1;
                        try {
                            return f(u, l, t), !0
                        } catch (t) {
                            return !1
                        }
                    },
                    y = function(t) {
                        if (!i(t)) return !1;
                        switch (s(t)) {
                            case "AsyncFunction":
                            case "GeneratorFunction":
                            case "AsyncGeneratorFunction":
                                return !1
                        }
                        try {
                            return d || !!p(h, c(t))
                        } catch (t) {
                            return !0
                        }
                    };
                y.sham = !0, t.exports = !f || r((function() {
                    var t;
                    return v(v.call) || !v(Object) || !v((function() {
                        t = !0
                    })) || t
                })) ? y : v
            },
            4705: function(t, n, e) {
                var o = e(7293),
                    r = e(614),
                    i = /#|\.prototype\./,
                    s = function(t, n) {
                        var e = c[a(t)];
                        return e == l || e != u && (r(n) ? o(n) : !!n)
                    },
                    a = s.normalize = function(t) {
                        return String(t).replace(i, ".").toLowerCase()
                    },
                    c = s.data = {},
                    u = s.NATIVE = "N",
                    l = s.POLYFILL = "P";
                t.exports = s
            },
            8554: function(t) {
                t.exports = function(t) {
                    return null == t
                }
            },
            111: function(t, n, e) {
                var o = e(614),
                    r = e(4154),
                    i = r.all;
                t.exports = r.IS_HTMLDDA ? function(t) {
                    return "object" == typeof t ? null !== t : o(t) || t === i
                } : function(t) {
                    return "object" == typeof t ? null !== t : o(t)
                }
            },
            1913: function(t) {
                t.exports = !1
            },
            7850: function(t, n, e) {
                var o = e(111),
                    r = e(4326),
                    i = e(5112)("match");
                t.exports = function(t) {
                    var n;
                    return o(t) && (void 0 !== (n = t[i]) ? !!n : "RegExp" == r(t))
                }
            },
            2190: function(t, n, e) {
                var o = e(5005),
                    r = e(614),
                    i = e(7976),
                    s = e(3307),
                    a = Object;
                t.exports = s ? function(t) {
                    return "symbol" == typeof t
                } : function(t) {
                    var n = o("Symbol");
                    return r(n) && i(n.prototype, a(t))
                }
            },
            408: function(t, n, e) {
                var o = e(9974),
                    r = e(6916),
                    i = e(9670),
                    s = e(6330),
                    a = e(7659),
                    c = e(6244),
                    u = e(7976),
                    l = e(4121),
                    f = e(1246),
                    h = e(9212),
                    p = TypeError,
                    d = function(t, n) {
                        this.stopped = t, this.result = n
                    },
                    v = d.prototype;
                t.exports = function(t, n, e) {
                    var y, m, g, S, b, _, x, E = e && e.that,
                        O = !(!e || !e.AS_ENTRIES),
                        T = !(!e || !e.IS_RECORD),
                        I = !(!e || !e.IS_ITERATOR),
                        w = !(!e || !e.INTERRUPTED),
                        C = o(n, E),
                        A = function(t) {
                            return y && h(y, "normal", t), new d(!0, t)
                        },
                        L = function(t) {
                            return O ? (i(t), w ? C(t[0], t[1], A) : C(t[0], t[1])) : w ? C(t, A) : C(t)
                        };
                    if (T) y = t.iterator;
                    else if (I) y = t;
                    else {
                        if (!(m = f(t))) throw p(s(t) + " is not iterable");
                        if (a(m)) {
                            for (g = 0, S = c(t); S > g; g++)
                                if ((b = L(t[g])) && u(v, b)) return b;
                            return new d(!1)
                        }
                        y = l(t, m)
                    }
                    for (_ = T ? t.next : y.next; !(x = r(_, y)).done;) {
                        try {
                            b = L(x.value)
                        } catch (t) {
                            h(y, "throw", t)
                        }
                        if ("object" == typeof b && b && u(v, b)) return b
                    }
                    return new d(!1)
                }
            },
            9212: function(t, n, e) {
                var o = e(6916),
                    r = e(9670),
                    i = e(8173);
                t.exports = function(t, n, e) {
                    var s, a;
                    r(t);
                    try {
                        if (!(s = i(t, "return"))) {
                            if ("throw" === n) throw e;
                            return e
                        }
                        s = o(s, t)
                    } catch (t) {
                        a = !0, s = t
                    }
                    if ("throw" === n) throw e;
                    if (a) throw s;
                    return r(s), e
                }
            },
            3061: function(t, n, e) {
                var o = e(3383).IteratorPrototype,
                    r = e(30),
                    i = e(9114),
                    s = e(8003),
                    a = e(7497),
                    c = function() {
                        return this
                    };
                t.exports = function(t, n, e, u) {
                    var l = n + " Iterator";
                    return t.prototype = r(o, {
                        next: i(+!u, e)
                    }), s(t, l, !1, !0), a[l] = c, t
                }
            },
            1656: function(t, n, e) {
                var o = e(2109),
                    r = e(6916),
                    i = e(1913),
                    s = e(6530),
                    a = e(614),
                    c = e(3061),
                    u = e(9518),
                    l = e(7674),
                    f = e(8003),
                    h = e(8880),
                    p = e(8052),
                    d = e(5112),
                    v = e(7497),
                    y = e(3383),
                    m = s.PROPER,
                    g = s.CONFIGURABLE,
                    S = y.IteratorPrototype,
                    b = y.BUGGY_SAFARI_ITERATORS,
                    _ = d("iterator"),
                    x = "keys",
                    E = "values",
                    O = "entries",
                    T = function() {
                        return this
                    };
                t.exports = function(t, n, e, s, d, y, I) {
                    c(e, n, s);
                    var w, C, A, L = function(t) {
                            if (t === d && M) return M;
                            if (!b && t in R) return R[t];
                            switch (t) {
                                case x:
                                case E:
                                case O:
                                    return function() {
                                        return new e(this, t)
                                    }
                            }
                            return function() {
                                return new e(this)
                            }
                        },
                        P = n + " Iterator",
                        N = !1,
                        R = t.prototype,
                        k = R[_] || R["@@iterator"] || d && R[d],
                        M = !b && k || L(d),
                        j = "Array" == n && R.entries || k;
                    if (j && (w = u(j.call(new t))) !== Object.prototype && w.next && (i || u(w) === S || (l ? l(w, S) : a(w[_]) || p(w, _, T)), f(w, P, !0, !0), i && (v[P] = T)), m && d == E && k && k.name !== E && (!i && g ? h(R, "name", E) : (N = !0, M = function() {
                            return r(k, this)
                        })), d)
                        if (C = {
                                values: L(E),
                                keys: y ? M : L(x),
                                entries: L(O)
                            }, I)
                            for (A in C)(b || N || !(A in R)) && p(R, A, C[A]);
                        else o({
                            target: n,
                            proto: !0,
                            forced: b || N
                        }, C);
                    return i && !I || R[_] === M || p(R, _, M, {
                        name: d
                    }), v[n] = M, C
                }
            },
            3383: function(t, n, e) {
                var o, r, i, s = e(7293),
                    a = e(614),
                    c = e(111),
                    u = e(30),
                    l = e(9518),
                    f = e(8052),
                    h = e(5112),
                    p = e(1913),
                    d = h("iterator"),
                    v = !1;
                [].keys && ("next" in (i = [].keys()) ? (r = l(l(i))) !== Object.prototype && (o = r) : v = !0), !c(o) || s((function() {
                    var t = {};
                    return o[d].call(t) !== t
                })) ? o = {} : p && (o = u(o)), a(o[d]) || f(o, d, (function() {
                    return this
                })), t.exports = {
                    IteratorPrototype: o,
                    BUGGY_SAFARI_ITERATORS: v
                }
            },
            7497: function(t) {
                t.exports = {}
            },
            6244: function(t, n, e) {
                var o = e(7466);
                t.exports = function(t) {
                    return o(t.length)
                }
            },
            6339: function(t, n, e) {
                var o = e(1702),
                    r = e(7293),
                    i = e(614),
                    s = e(2597),
                    a = e(9781),
                    c = e(6530).CONFIGURABLE,
                    u = e(2788),
                    l = e(9909),
                    f = l.enforce,
                    h = l.get,
                    p = String,
                    d = Object.defineProperty,
                    v = o("".slice),
                    y = o("".replace),
                    m = o([].join),
                    g = a && !r((function() {
                        return 8 !== d((function() {}), "length", {
                            value: 8
                        }).length
                    })),
                    S = String(String).split("String"),
                    b = t.exports = function(t, n, e) {
                        "Symbol(" === v(p(n), 0, 7) && (n = "[" + y(p(n), /^Symbol\(([^)]*)\)/, "$1") + "]"), e && e.getter && (n = "get " + n), e && e.setter && (n = "set " + n), (!s(t, "name") || c && t.name !== n) && (a ? d(t, "name", {
                            value: n,
                            configurable: !0
                        }) : t.name = n), g && e && s(e, "arity") && t.length !== e.arity && d(t, "length", {
                            value: e.arity
                        });
                        try {
                            e && s(e, "constructor") && e.constructor ? a && d(t, "prototype", {
                                writable: !1
                            }) : t.prototype && (t.prototype = void 0)
                        } catch (t) {}
                        var o = f(t);
                        return s(o, "source") || (o.source = m(S, "string" == typeof n ? n : "")), t
                    };
                Function.prototype.toString = b((function() {
                    return i(this) && h(this).source || u(this)
                }), "toString")
            },
            4758: function(t) {
                var n = Math.ceil,
                    e = Math.floor;
                t.exports = Math.trunc || function(t) {
                    var o = +t;
                    return (o > 0 ? e : n)(o)
                }
            },
            5948: function(t, n, e) {
                var o, r, i, s, a, c = e(7854),
                    u = e(9974),
                    l = e(1236).f,
                    f = e(261).set,
                    h = e(8572),
                    p = e(6833),
                    d = e(1528),
                    v = e(1036),
                    y = e(5268),
                    m = c.MutationObserver || c.WebKitMutationObserver,
                    g = c.document,
                    S = c.process,
                    b = c.Promise,
                    _ = l(c, "queueMicrotask"),
                    x = _ && _.value;
                if (!x) {
                    var E = new h,
                        O = function() {
                            var t, n;
                            for (y && (t = S.domain) && t.exit(); n = E.get();) try {
                                n()
                            } catch (t) {
                                throw E.head && o(), t
                            }
                            t && t.enter()
                        };
                    p || y || v || !m || !g ? !d && b && b.resolve ? ((s = b.resolve(void 0)).constructor = b, a = u(s.then, s), o = function() {
                        a(O)
                    }) : y ? o = function() {
                        S.nextTick(O)
                    } : (f = u(f, c), o = function() {
                        f(O)
                    }) : (r = !0, i = g.createTextNode(""), new m(O).observe(i, {
                        characterData: !0
                    }), o = function() {
                        i.data = r = !r
                    }), x = function(t) {
                        E.head || o(), E.add(t)
                    }
                }
                t.exports = x
            },
            8523: function(t, n, e) {
                var o = e(9662),
                    r = TypeError,
                    i = function(t) {
                        var n, e;
                        this.promise = new t((function(t, o) {
                            if (void 0 !== n || void 0 !== e) throw r("Bad Promise constructor");
                            n = t, e = o
                        })), this.resolve = o(n), this.reject = o(e)
                    };
                t.exports.f = function(t) {
                    return new i(t)
                }
            },
            3929: function(t, n, e) {
                var o = e(7850),
                    r = TypeError;
                t.exports = function(t) {
                    if (o(t)) throw r("The method doesn't accept regular expressions");
                    return t
                }
            },
            30: function(t, n, e) {
                var o, r = e(9670),
                    i = e(6048),
                    s = e(748),
                    a = e(3501),
                    c = e(490),
                    u = e(317),
                    l = e(6200),
                    f = "prototype",
                    h = "script",
                    p = l("IE_PROTO"),
                    d = function() {},
                    v = function(t) {
                        return "<" + h + ">" + t + "</" + h + ">"
                    },
                    y = function(t) {
                        t.write(v("")), t.close();
                        var n = t.parentWindow.Object;
                        return t = null, n
                    },
                    m = function() {
                        try {
                            o = new ActiveXObject("htmlfile")
                        } catch (t) {}
                        var t, n, e;
                        m = "undefined" != typeof document ? document.domain && o ? y(o) : (n = u("iframe"), e = "java" + h + ":", n.style.display = "none", c.appendChild(n), n.src = String(e), (t = n.contentWindow.document).open(), t.write(v("document.F=Object")), t.close(), t.F) : y(o);
                        for (var r = s.length; r--;) delete m[f][s[r]];
                        return m()
                    };
                a[p] = !0, t.exports = Object.create || function(t, n) {
                    var e;
                    return null !== t ? (d[f] = r(t), e = new d, d[f] = null, e[p] = t) : e = m(), void 0 === n ? e : i.f(e, n)
                }
            },
            6048: function(t, n, e) {
                var o = e(9781),
                    r = e(3353),
                    i = e(3070),
                    s = e(9670),
                    a = e(5656),
                    c = e(1956);
                n.f = o && !r ? Object.defineProperties : function(t, n) {
                    s(t);
                    for (var e, o = a(n), r = c(n), u = r.length, l = 0; u > l;) i.f(t, e = r[l++], o[e]);
                    return t
                }
            },
            3070: function(t, n, e) {
                var o = e(9781),
                    r = e(4664),
                    i = e(3353),
                    s = e(9670),
                    a = e(4948),
                    c = TypeError,
                    u = Object.defineProperty,
                    l = Object.getOwnPropertyDescriptor,
                    f = "enumerable",
                    h = "configurable",
                    p = "writable";
                n.f = o ? i ? function(t, n, e) {
                    if (s(t), n = a(n), s(e), "function" == typeof t && "prototype" === n && "value" in e && p in e && !e[p]) {
                        var o = l(t, n);
                        o && o[p] && (t[n] = e.value, e = {
                            configurable: h in e ? e[h] : o[h],
                            enumerable: f in e ? e[f] : o[f],
                            writable: !1
                        })
                    }
                    return u(t, n, e)
                } : u : function(t, n, e) {
                    if (s(t), n = a(n), s(e), r) try {
                        return u(t, n, e)
                    } catch (t) {}
                    if ("get" in e || "set" in e) throw c("Accessors not supported");
                    return "value" in e && (t[n] = e.value), t
                }
            },
            1236: function(t, n, e) {
                var o = e(9781),
                    r = e(6916),
                    i = e(5296),
                    s = e(9114),
                    a = e(5656),
                    c = e(4948),
                    u = e(2597),
                    l = e(4664),
                    f = Object.getOwnPropertyDescriptor;
                n.f = o ? f : function(t, n) {
                    if (t = a(t), n = c(n), l) try {
                        return f(t, n)
                    } catch (t) {}
                    if (u(t, n)) return s(!r(i.f, t, n), t[n])
                }
            },
            8006: function(t, n, e) {
                var o = e(6324),
                    r = e(748).concat("length", "prototype");
                n.f = Object.getOwnPropertyNames || function(t) {
                    return o(t, r)
                }
            },
            5181: function(t, n) {
                n.f = Object.getOwnPropertySymbols
            },
            9518: function(t, n, e) {
                var o = e(2597),
                    r = e(614),
                    i = e(7908),
                    s = e(6200),
                    a = e(8544),
                    c = s("IE_PROTO"),
                    u = Object,
                    l = u.prototype;
                t.exports = a ? u.getPrototypeOf : function(t) {
                    var n = i(t);
                    if (o(n, c)) return n[c];
                    var e = n.constructor;
                    return r(e) && n instanceof e ? e.prototype : n instanceof u ? l : null
                }
            },
            7976: function(t, n, e) {
                var o = e(1702);
                t.exports = o({}.isPrototypeOf)
            },
            6324: function(t, n, e) {
                var o = e(1702),
                    r = e(2597),
                    i = e(5656),
                    s = e(1318).indexOf,
                    a = e(3501),
                    c = o([].push);
                t.exports = function(t, n) {
                    var e, o = i(t),
                        u = 0,
                        l = [];
                    for (e in o) !r(a, e) && r(o, e) && c(l, e);
                    for (; n.length > u;) r(o, e = n[u++]) && (~s(l, e) || c(l, e));
                    return l
                }
            },
            1956: function(t, n, e) {
                var o = e(6324),
                    r = e(748);
                t.exports = Object.keys || function(t) {
                    return o(t, r)
                }
            },
            5296: function(t, n) {
                var e = {}.propertyIsEnumerable,
                    o = Object.getOwnPropertyDescriptor,
                    r = o && !e.call({
                        1: 2
                    }, 1);
                n.f = r ? function(t) {
                    var n = o(this, t);
                    return !!n && n.enumerable
                } : e
            },
            7674: function(t, n, e) {
                var o = e(5668),
                    r = e(9670),
                    i = e(6077);
                t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                    var t, n = !1,
                        e = {};
                    try {
                        (t = o(Object.prototype, "__proto__", "set"))(e, []), n = e instanceof Array
                    } catch (t) {}
                    return function(e, o) {
                        return r(e), i(o), n ? t(e, o) : e.__proto__ = o, e
                    }
                }() : void 0)
            },
            288: function(t, n, e) {
                var o = e(1694),
                    r = e(648);
                t.exports = o ? {}.toString : function() {
                    return "[object " + r(this) + "]"
                }
            },
            2140: function(t, n, e) {
                var o = e(6916),
                    r = e(614),
                    i = e(111),
                    s = TypeError;
                t.exports = function(t, n) {
                    var e, a;
                    if ("string" === n && r(e = t.toString) && !i(a = o(e, t))) return a;
                    if (r(e = t.valueOf) && !i(a = o(e, t))) return a;
                    if ("string" !== n && r(e = t.toString) && !i(a = o(e, t))) return a;
                    throw s("Can't convert object to primitive value")
                }
            },
            3887: function(t, n, e) {
                var o = e(5005),
                    r = e(1702),
                    i = e(8006),
                    s = e(5181),
                    a = e(9670),
                    c = r([].concat);
                t.exports = o("Reflect", "ownKeys") || function(t) {
                    var n = i.f(a(t)),
                        e = s.f;
                    return e ? c(n, e(t)) : n
                }
            },
            2534: function(t) {
                t.exports = function(t) {
                    try {
                        return {
                            error: !1,
                            value: t()
                        }
                    } catch (t) {
                        return {
                            error: !0,
                            value: t
                        }
                    }
                }
            },
            3702: function(t, n, e) {
                var o = e(7854),
                    r = e(2492),
                    i = e(614),
                    s = e(4705),
                    a = e(2788),
                    c = e(5112),
                    u = e(7871),
                    l = e(3823),
                    f = e(1913),
                    h = e(7392),
                    p = r && r.prototype,
                    d = c("species"),
                    v = !1,
                    y = i(o.PromiseRejectionEvent),
                    m = s("Promise", (function() {
                        var t = a(r),
                            n = t !== String(r);
                        if (!n && 66 === h) return !0;
                        if (f && (!p.catch || !p.finally)) return !0;
                        if (!h || h < 51 || !/native code/.test(t)) {
                            var e = new r((function(t) {
                                    t(1)
                                })),
                                o = function(t) {
                                    t((function() {}), (function() {}))
                                };
                            if ((e.constructor = {})[d] = o, !(v = e.then((function() {})) instanceof o)) return !0
                        }
                        return !n && (u || l) && !y
                    }));
                t.exports = {
                    CONSTRUCTOR: m,
                    REJECTION_EVENT: y,
                    SUBCLASSING: v
                }
            },
            2492: function(t, n, e) {
                var o = e(7854);
                t.exports = o.Promise
            },
            9478: function(t, n, e) {
                var o = e(9670),
                    r = e(111),
                    i = e(8523);
                t.exports = function(t, n) {
                    if (o(t), r(n) && n.constructor === t) return n;
                    var e = i.f(t);
                    return (0, e.resolve)(n), e.promise
                }
            },
            612: function(t, n, e) {
                var o = e(2492),
                    r = e(7072),
                    i = e(3702).CONSTRUCTOR;
                t.exports = i || !r((function(t) {
                    o.all(t).then(void 0, (function() {}))
                }))
            },
            8572: function(t) {
                var n = function() {
                    this.head = null, this.tail = null
                };
                n.prototype = {
                    add: function(t) {
                        var n = {
                                item: t,
                                next: null
                            },
                            e = this.tail;
                        e ? e.next = n : this.head = n, this.tail = n
                    },
                    get: function() {
                        var t = this.head;
                        if (t) return null === (this.head = t.next) && (this.tail = null), t.item
                    }
                }, t.exports = n
            },
            7651: function(t, n, e) {
                var o = e(6916),
                    r = e(9670),
                    i = e(614),
                    s = e(4326),
                    a = e(2261),
                    c = TypeError;
                t.exports = function(t, n) {
                    var e = t.exec;
                    if (i(e)) {
                        var u = o(e, t, n);
                        return null !== u && r(u), u
                    }
                    if ("RegExp" === s(t)) return o(a, t, n);
                    throw c("RegExp#exec called on incompatible receiver")
                }
            },
            2261: function(t, n, e) {
                var o, r, i = e(6916),
                    s = e(1702),
                    a = e(1340),
                    c = e(7066),
                    u = e(2999),
                    l = e(2309),
                    f = e(30),
                    h = e(9909).get,
                    p = e(9441),
                    d = e(7168),
                    v = l("native-string-replace", String.prototype.replace),
                    y = RegExp.prototype.exec,
                    m = y,
                    g = s("".charAt),
                    S = s("".indexOf),
                    b = s("".replace),
                    _ = s("".slice),
                    x = (r = /b*/g, i(y, o = /a/, "a"), i(y, r, "a"), 0 !== o.lastIndex || 0 !== r.lastIndex),
                    E = u.BROKEN_CARET,
                    O = void 0 !== /()??/.exec("")[1];
                (x || O || E || p || d) && (m = function(t) {
                    var n, e, o, r, s, u, l, p = this,
                        d = h(p),
                        T = a(t),
                        I = d.raw;
                    if (I) return I.lastIndex = p.lastIndex, n = i(m, I, T), p.lastIndex = I.lastIndex, n;
                    var w = d.groups,
                        C = E && p.sticky,
                        A = i(c, p),
                        L = p.source,
                        P = 0,
                        N = T;
                    if (C && (A = b(A, "y", ""), -1 === S(A, "g") && (A += "g"), N = _(T, p.lastIndex), p.lastIndex > 0 && (!p.multiline || p.multiline && "\n" !== g(T, p.lastIndex - 1)) && (L = "(?: " + L + ")", N = " " + N, P++), e = new RegExp("^(?:" + L + ")", A)), O && (e = new RegExp("^" + L + "$(?!\\s)", A)), x && (o = p.lastIndex), r = i(y, C ? e : p, N), C ? r ? (r.input = _(r.input, P), r[0] = _(r[0], P), r.index = p.lastIndex, p.lastIndex += r[0].length) : p.lastIndex = 0 : x && r && (p.lastIndex = p.global ? r.index + r[0].length : o), O && r && r.length > 1 && i(v, r[0], e, (function() {
                            for (s = 1; s < arguments.length - 2; s++) void 0 === arguments[s] && (r[s] = void 0)
                        })), r && w)
                        for (r.groups = u = f(null), s = 0; s < w.length; s++) u[(l = w[s])[0]] = r[l[1]];
                    return r
                }), t.exports = m
            },
            7066: function(t, n, e) {
                var o = e(9670);
                t.exports = function() {
                    var t = o(this),
                        n = "";
                    return t.hasIndices && (n += "d"), t.global && (n += "g"), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), t.dotAll && (n += "s"), t.unicode && (n += "u"), t.unicodeSets && (n += "v"), t.sticky && (n += "y"), n
                }
            },
            4706: function(t, n, e) {
                var o = e(6916),
                    r = e(2597),
                    i = e(7976),
                    s = e(7066),
                    a = RegExp.prototype;
                t.exports = function(t) {
                    var n = t.flags;
                    return void 0 !== n || "flags" in a || r(t, "flags") || !i(a, t) ? n : o(s, t)
                }
            },
            2999: function(t, n, e) {
                var o = e(7293),
                    r = e(7854).RegExp,
                    i = o((function() {
                        var t = r("a", "y");
                        return t.lastIndex = 2, null != t.exec("abcd")
                    })),
                    s = i || o((function() {
                        return !r("a", "y").sticky
                    })),
                    a = i || o((function() {
                        var t = r("^r", "gy");
                        return t.lastIndex = 2, null != t.exec("str")
                    }));
                t.exports = {
                    BROKEN_CARET: a,
                    MISSED_STICKY: s,
                    UNSUPPORTED_Y: i
                }
            },
            9441: function(t, n, e) {
                var o = e(7293),
                    r = e(7854).RegExp;
                t.exports = o((function() {
                    var t = r(".", "s");
                    return !(t.dotAll && t.exec("\n") && "s" === t.flags)
                }))
            },
            7168: function(t, n, e) {
                var o = e(7293),
                    r = e(7854).RegExp;
                t.exports = o((function() {
                    var t = r("(?<a>b)", "g");
                    return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c")
                }))
            },
            4488: function(t, n, e) {
                var o = e(8554),
                    r = TypeError;
                t.exports = function(t) {
                    if (o(t)) throw r("Can't call method on " + t);
                    return t
                }
            },
            6340: function(t, n, e) {
                var o = e(5005),
                    r = e(7045),
                    i = e(5112),
                    s = e(9781),
                    a = i("species");
                t.exports = function(t) {
                    var n = o(t);
                    s && n && !n[a] && r(n, a, {
                        configurable: !0,
                        get: function() {
                            return this
                        }
                    })
                }
            },
            8003: function(t, n, e) {
                var o = e(3070).f,
                    r = e(2597),
                    i = e(5112)("toStringTag");
                t.exports = function(t, n, e) {
                    t && !e && (t = t.prototype), t && !r(t, i) && o(t, i, {
                        configurable: !0,
                        value: n
                    })
                }
            },
            6200: function(t, n, e) {
                var o = e(2309),
                    r = e(9711),
                    i = o("keys");
                t.exports = function(t) {
                    return i[t] || (i[t] = r(t))
                }
            },
            5465: function(t, n, e) {
                var o = e(7854),
                    r = e(3072),
                    i = "__core-js_shared__",
                    s = o[i] || r(i, {});
                t.exports = s
            },
            2309: function(t, n, e) {
                var o = e(1913),
                    r = e(5465);
                (t.exports = function(t, n) {
                    return r[t] || (r[t] = void 0 !== n ? n : {})
                })("versions", []).push({
                    version: "3.32.0",
                    mode: o ? "pure" : "global",
                    copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
                    license: "https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",
                    source: "https://github.com/zloirock/core-js"
                })
            },
            6707: function(t, n, e) {
                var o = e(9670),
                    r = e(9483),
                    i = e(8554),
                    s = e(5112)("species");
                t.exports = function(t, n) {
                    var e, a = o(t).constructor;
                    return void 0 === a || i(e = o(a)[s]) ? n : r(e)
                }
            },
            8710: function(t, n, e) {
                var o = e(1702),
                    r = e(9303),
                    i = e(1340),
                    s = e(4488),
                    a = o("".charAt),
                    c = o("".charCodeAt),
                    u = o("".slice),
                    l = function(t) {
                        return function(n, e) {
                            var o, l, f = i(s(n)),
                                h = r(e),
                                p = f.length;
                            return h < 0 || h >= p ? t ? "" : void 0 : (o = c(f, h)) < 55296 || o > 56319 || h + 1 === p || (l = c(f, h + 1)) < 56320 || l > 57343 ? t ? a(f, h) : o : t ? u(f, h, h + 2) : l - 56320 + (o - 55296 << 10) + 65536
                        }
                    };
                t.exports = {
                    codeAt: l(!1),
                    charAt: l(!0)
                }
            },
            4986: function(t, n, e) {
                var o = e(8113);
                t.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(o)
            },
            6650: function(t, n, e) {
                var o = e(1702),
                    r = e(7466),
                    i = e(1340),
                    s = e(8415),
                    a = e(4488),
                    c = o(s),
                    u = o("".slice),
                    l = Math.ceil,
                    f = function(t) {
                        return function(n, e, o) {
                            var s, f, h = i(a(n)),
                                p = r(e),
                                d = h.length,
                                v = void 0 === o ? " " : i(o);
                            return p <= d || "" == v ? h : ((f = c(v, l((s = p - d) / v.length))).length > s && (f = u(f, 0, s)), t ? h + f : f + h)
                        }
                    };
                t.exports = {
                    start: f(!1),
                    end: f(!0)
                }
            },
            8415: function(t, n, e) {
                var o = e(9303),
                    r = e(1340),
                    i = e(4488),
                    s = RangeError;
                t.exports = function(t) {
                    var n = r(i(this)),
                        e = "",
                        a = o(t);
                    if (a < 0 || a == 1 / 0) throw s("Wrong number of repetitions");
                    for (; a > 0;
                        (a >>>= 1) && (n += n)) 1 & a && (e += n);
                    return e
                }
            },
            6293: function(t, n, e) {
                var o = e(7392),
                    r = e(7293),
                    i = e(7854).String;
                t.exports = !!Object.getOwnPropertySymbols && !r((function() {
                    var t = Symbol();
                    return !i(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && o && o < 41
                }))
            },
            261: function(t, n, e) {
                var o, r, i, s, a = e(7854),
                    c = e(2104),
                    u = e(9974),
                    l = e(614),
                    f = e(2597),
                    h = e(7293),
                    p = e(490),
                    d = e(206),
                    v = e(317),
                    y = e(8053),
                    m = e(6833),
                    g = e(5268),
                    S = a.setImmediate,
                    b = a.clearImmediate,
                    _ = a.process,
                    x = a.Dispatch,
                    E = a.Function,
                    O = a.MessageChannel,
                    T = a.String,
                    I = 0,
                    w = {},
                    C = "onreadystatechange";
                h((function() {
                    o = a.location
                }));
                var A = function(t) {
                        if (f(w, t)) {
                            var n = w[t];
                            delete w[t], n()
                        }
                    },
                    L = function(t) {
                        return function() {
                            A(t)
                        }
                    },
                    P = function(t) {
                        A(t.data)
                    },
                    N = function(t) {
                        a.postMessage(T(t), o.protocol + "//" + o.host)
                    };
                S && b || (S = function(t) {
                    y(arguments.length, 1);
                    var n = l(t) ? t : E(t),
                        e = d(arguments, 1);
                    return w[++I] = function() {
                        c(n, void 0, e)
                    }, r(I), I
                }, b = function(t) {
                    delete w[t]
                }, g ? r = function(t) {
                    _.nextTick(L(t))
                } : x && x.now ? r = function(t) {
                    x.now(L(t))
                } : O && !m ? (s = (i = new O).port2, i.port1.onmessage = P, r = u(s.postMessage, s)) : a.addEventListener && l(a.postMessage) && !a.importScripts && o && "file:" !== o.protocol && !h(N) ? (r = N, a.addEventListener("message", P, !1)) : r = C in v("script") ? function(t) {
                    p.appendChild(v("script"))[C] = function() {
                        p.removeChild(this), A(t)
                    }
                } : function(t) {
                    setTimeout(L(t), 0)
                }), t.exports = {
                    set: S,
                    clear: b
                }
            },
            1400: function(t, n, e) {
                var o = e(9303),
                    r = Math.max,
                    i = Math.min;
                t.exports = function(t, n) {
                    var e = o(t);
                    return e < 0 ? r(e + n, 0) : i(e, n)
                }
            },
            5656: function(t, n, e) {
                var o = e(8361),
                    r = e(4488);
                t.exports = function(t) {
                    return o(r(t))
                }
            },
            9303: function(t, n, e) {
                var o = e(4758);
                t.exports = function(t) {
                    var n = +t;
                    return n != n || 0 === n ? 0 : o(n)
                }
            },
            7466: function(t, n, e) {
                var o = e(9303),
                    r = Math.min;
                t.exports = function(t) {
                    return t > 0 ? r(o(t), 9007199254740991) : 0
                }
            },
            7908: function(t, n, e) {
                var o = e(4488),
                    r = Object;
                t.exports = function(t) {
                    return r(o(t))
                }
            },
            7593: function(t, n, e) {
                var o = e(6916),
                    r = e(111),
                    i = e(2190),
                    s = e(8173),
                    a = e(2140),
                    c = e(5112),
                    u = TypeError,
                    l = c("toPrimitive");
                t.exports = function(t, n) {
                    if (!r(t) || i(t)) return t;
                    var e, c = s(t, l);
                    if (c) {
                        if (void 0 === n && (n = "default"), e = o(c, t, n), !r(e) || i(e)) return e;
                        throw u("Can't convert object to primitive value")
                    }
                    return void 0 === n && (n = "number"), a(t, n)
                }
            },
            4948: function(t, n, e) {
                var o = e(7593),
                    r = e(2190);
                t.exports = function(t) {
                    var n = o(t, "string");
                    return r(n) ? n : n + ""
                }
            },
            1694: function(t, n, e) {
                var o = {};
                o[e(5112)("toStringTag")] = "z", t.exports = "[object z]" === String(o)
            },
            1340: function(t, n, e) {
                var o = e(648),
                    r = String;
                t.exports = function(t) {
                    if ("Symbol" === o(t)) throw TypeError("Cannot convert a Symbol value to a string");
                    return r(t)
                }
            },
            6330: function(t) {
                var n = String;
                t.exports = function(t) {
                    try {
                        return n(t)
                    } catch (t) {
                        return "Object"
                    }
                }
            },
            9711: function(t, n, e) {
                var o = e(1702),
                    r = 0,
                    i = Math.random(),
                    s = o(1..toString);
                t.exports = function(t) {
                    return "Symbol(" + (void 0 === t ? "" : t) + ")_" + s(++r + i, 36)
                }
            },
            3307: function(t, n, e) {
                var o = e(6293);
                t.exports = o && !Symbol.sham && "symbol" == typeof Symbol.iterator
            },
            3353: function(t, n, e) {
                var o = e(9781),
                    r = e(7293);
                t.exports = o && r((function() {
                    return 42 != Object.defineProperty((function() {}), "prototype", {
                        value: 42,
                        writable: !1
                    }).prototype
                }))
            },
            8053: function(t) {
                var n = TypeError;
                t.exports = function(t, e) {
                    if (t < e) throw n("Not enough arguments");
                    return t
                }
            },
            4811: function(t, n, e) {
                var o = e(7854),
                    r = e(614),
                    i = o.WeakMap;
                t.exports = r(i) && /native code/.test(String(i))
            },
            5112: function(t, n, e) {
                var o = e(7854),
                    r = e(2309),
                    i = e(2597),
                    s = e(9711),
                    a = e(6293),
                    c = e(3307),
                    u = o.Symbol,
                    l = r("wks"),
                    f = c ? u.for || u : u && u.withoutSetter || s;
                t.exports = function(t) {
                    return i(l, t) || (l[t] = a && i(u, t) ? u[t] : f("Symbol." + t)), l[t]
                }
            },
            2222: function(t, n, e) {
                var o = e(2109),
                    r = e(7293),
                    i = e(3157),
                    s = e(111),
                    a = e(7908),
                    c = e(6244),
                    u = e(7207),
                    l = e(6135),
                    f = e(5417),
                    h = e(1194),
                    p = e(5112),
                    d = e(7392),
                    v = p("isConcatSpreadable"),
                    y = d >= 51 || !r((function() {
                        var t = [];
                        return t[v] = !1, t.concat()[0] !== t
                    })),
                    m = function(t) {
                        if (!s(t)) return !1;
                        var n = t[v];
                        return void 0 !== n ? !!n : i(t)
                    };
                o({
                    target: "Array",
                    proto: !0,
                    arity: 1,
                    forced: !y || !h("concat")
                }, {
                    concat: function(t) {
                        var n, e, o, r, i, s = a(this),
                            h = f(s, 0),
                            p = 0;
                        for (n = -1, o = arguments.length; n < o; n++)
                            if (m(i = -1 === n ? s : arguments[n]))
                                for (r = c(i), u(p + r), e = 0; e < r; e++, p++) e in i && l(h, p, i[e]);
                            else u(p + 1), l(h, p++, i);
                        return h.length = p, h
                    }
                })
            },
            6699: function(t, n, e) {
                var o = e(2109),
                    r = e(1318).includes,
                    i = e(7293),
                    s = e(1223);
                o({
                    target: "Array",
                    proto: !0,
                    forced: i((function() {
                        return !Array(1).includes()
                    }))
                }, {
                    includes: function(t) {
                        return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
                    }
                }), s("includes")
            },
            6992: function(t, n, e) {
                var o = e(5656),
                    r = e(1223),
                    i = e(7497),
                    s = e(9909),
                    a = e(3070).f,
                    c = e(1656),
                    u = e(6178),
                    l = e(1913),
                    f = e(9781),
                    h = "Array Iterator",
                    p = s.set,
                    d = s.getterFor(h);
                t.exports = c(Array, "Array", (function(t, n) {
                    p(this, {
                        type: h,
                        target: o(t),
                        index: 0,
                        kind: n
                    })
                }), (function() {
                    var t = d(this),
                        n = t.target,
                        e = t.kind,
                        o = t.index++;
                    return !n || o >= n.length ? (t.target = void 0, u(void 0, !0)) : u("keys" == e ? o : "values" == e ? n[o] : [o, n[o]], !1)
                }), "values");
                var v = i.Arguments = i.Array;
                if (r("keys"), r("values"), r("entries"), !l && f && "values" !== v.name) try {
                    a(v, "name", {
                        value: "values"
                    })
                } catch (t) {}
            },
            1249: function(t, n, e) {
                var o = e(2109),
                    r = e(2092).map;
                o({
                    target: "Array",
                    proto: !0,
                    forced: !e(1194)("map")
                }, {
                    map: function(t) {
                        return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
                    }
                })
            },
            561: function(t, n, e) {
                var o = e(2109),
                    r = e(7908),
                    i = e(1400),
                    s = e(9303),
                    a = e(6244),
                    c = e(3658),
                    u = e(7207),
                    l = e(5417),
                    f = e(6135),
                    h = e(5117),
                    p = e(1194)("splice"),
                    d = Math.max,
                    v = Math.min;
                o({
                    target: "Array",
                    proto: !0,
                    forced: !p
                }, {
                    splice: function(t, n) {
                        var e, o, p, y, m, g, S = r(this),
                            b = a(S),
                            _ = i(t, b),
                            x = arguments.length;
                        for (0 === x ? e = o = 0 : 1 === x ? (e = 0, o = b - _) : (e = x - 2, o = v(d(s(n), 0), b - _)), u(b + e - o), p = l(S, o), y = 0; y < o; y++)(m = _ + y) in S && f(p, y, S[m]);
                        if (p.length = o, e < o) {
                            for (y = _; y < b - o; y++) g = y + e, (m = y + o) in S ? S[g] = S[m] : h(S, g);
                            for (y = b; y > b - o + e; y--) h(S, y - 1)
                        } else if (e > o)
                            for (y = b - o; y > _; y--) g = y + e - 1, (m = y + o - 1) in S ? S[g] = S[m] : h(S, g);
                        for (y = 0; y < e; y++) S[y + _] = arguments[y + 2];
                        return c(S, b - o + e), p
                    }
                })
            },
            1539: function(t, n, e) {
                var o = e(1694),
                    r = e(8052),
                    i = e(288);
                o || r(Object.prototype, "toString", i, {
                    unsafe: !0
                })
            },
            821: function(t, n, e) {
                var o = e(2109),
                    r = e(6916),
                    i = e(9662),
                    s = e(8523),
                    a = e(2534),
                    c = e(408);
                o({
                    target: "Promise",
                    stat: !0,
                    forced: e(612)
                }, {
                    all: function(t) {
                        var n = this,
                            e = s.f(n),
                            o = e.resolve,
                            u = e.reject,
                            l = a((function() {
                                var e = i(n.resolve),
                                    s = [],
                                    a = 0,
                                    l = 1;
                                c(t, (function(t) {
                                    var i = a++,
                                        c = !1;
                                    l++, r(e, n, t).then((function(t) {
                                        c || (c = !0, s[i] = t, --l || o(s))
                                    }), u)
                                })), --l || o(s)
                            }));
                        return l.error && u(l.value), e.promise
                    }
                })
            },
            4164: function(t, n, e) {
                var o = e(2109),
                    r = e(1913),
                    i = e(3702).CONSTRUCTOR,
                    s = e(2492),
                    a = e(5005),
                    c = e(614),
                    u = e(8052),
                    l = s && s.prototype;
                if (o({
                        target: "Promise",
                        proto: !0,
                        forced: i,
                        real: !0
                    }, {
                        catch: function(t) {
                            return this.then(void 0, t)
                        }
                    }), !r && c(s)) {
                    var f = a("Promise").prototype.catch;
                    l.catch !== f && u(l, "catch", f, {
                        unsafe: !0
                    })
                }
            },
            3401: function(t, n, e) {
                var o, r, i, s = e(2109),
                    a = e(1913),
                    c = e(5268),
                    u = e(7854),
                    l = e(6916),
                    f = e(8052),
                    h = e(7674),
                    p = e(8003),
                    d = e(6340),
                    v = e(9662),
                    y = e(614),
                    m = e(111),
                    g = e(5787),
                    S = e(6707),
                    b = e(261).set,
                    _ = e(5948),
                    x = e(842),
                    E = e(2534),
                    O = e(8572),
                    T = e(9909),
                    I = e(2492),
                    w = e(3702),
                    C = e(8523),
                    A = "Promise",
                    L = w.CONSTRUCTOR,
                    P = w.REJECTION_EVENT,
                    N = w.SUBCLASSING,
                    R = T.getterFor(A),
                    k = T.set,
                    M = I && I.prototype,
                    j = I,
                    D = M,
                    U = u.TypeError,
                    B = u.document,
                    F = u.process,
                    G = C.f,
                    V = G,
                    z = !!(B && B.createEvent && u.dispatchEvent),
                    W = "unhandledrejection",
                    q = function(t) {
                        var n;
                        return !(!m(t) || !y(n = t.then)) && n
                    },
                    H = function(t, n) {
                        var e, o, r, i = n.value,
                            s = 1 == n.state,
                            a = s ? t.ok : t.fail,
                            c = t.resolve,
                            u = t.reject,
                            f = t.domain;
                        try {
                            a ? (s || (2 === n.rejection && X(n), n.rejection = 1), !0 === a ? e = i : (f && f.enter(), e = a(i), f && (f.exit(), r = !0)), e === t.promise ? u(U("Promise-chain cycle")) : (o = q(e)) ? l(o, e, c, u) : c(e)) : u(i)
                        } catch (t) {
                            f && !r && f.exit(), u(t)
                        }
                    },
                    Y = function(t, n) {
                        t.notified || (t.notified = !0, _((function() {
                            for (var e, o = t.reactions; e = o.get();) H(e, t);
                            t.notified = !1, n && !t.rejection && K(t)
                        })))
                    },
                    $ = function(t, n, e) {
                        var o, r;
                        z ? ((o = B.createEvent("Event")).promise = n, o.reason = e, o.initEvent(t, !1, !0), u.dispatchEvent(o)) : o = {
                            promise: n,
                            reason: e
                        }, !P && (r = u["on" + t]) ? r(o) : t === W && x("Unhandled promise rejection", e)
                    },
                    K = function(t) {
                        l(b, u, (function() {
                            var n, e = t.facade,
                                o = t.value;
                            if (Z(t) && (n = E((function() {
                                    c ? F.emit("unhandledRejection", o, e) : $(W, e, o)
                                })), t.rejection = c || Z(t) ? 2 : 1, n.error)) throw n.value
                        }))
                    },
                    Z = function(t) {
                        return 1 !== t.rejection && !t.parent
                    },
                    X = function(t) {
                        l(b, u, (function() {
                            var n = t.facade;
                            c ? F.emit("rejectionHandled", n) : $("rejectionhandled", n, t.value)
                        }))
                    },
                    J = function(t, n, e) {
                        return function(o) {
                            t(n, o, e)
                        }
                    },
                    Q = function(t, n, e) {
                        t.done || (t.done = !0, e && (t = e), t.value = n, t.state = 2, Y(t, !0))
                    },
                    tt = function(t, n, e) {
                        if (!t.done) {
                            t.done = !0, e && (t = e);
                            try {
                                if (t.facade === n) throw U("Promise can't be resolved itself");
                                var o = q(n);
                                o ? _((function() {
                                    var e = {
                                        done: !1
                                    };
                                    try {
                                        l(o, n, J(tt, e, t), J(Q, e, t))
                                    } catch (n) {
                                        Q(e, n, t)
                                    }
                                })) : (t.value = n, t.state = 1, Y(t, !1))
                            } catch (n) {
                                Q({
                                    done: !1
                                }, n, t)
                            }
                        }
                    };
                if (L && (D = (j = function(t) {
                        g(this, D), v(t), l(o, this);
                        var n = R(this);
                        try {
                            t(J(tt, n), J(Q, n))
                        } catch (t) {
                            Q(n, t)
                        }
                    }).prototype, (o = function(t) {
                        k(this, {
                            type: A,
                            done: !1,
                            notified: !1,
                            parent: !1,
                            reactions: new O,
                            rejection: !1,
                            state: 0,
                            value: void 0
                        })
                    }).prototype = f(D, "then", (function(t, n) {
                        var e = R(this),
                            o = G(S(this, j));
                        return e.parent = !0, o.ok = !y(t) || t, o.fail = y(n) && n, o.domain = c ? F.domain : void 0, 0 == e.state ? e.reactions.add(o) : _((function() {
                            H(o, e)
                        })), o.promise
                    })), r = function() {
                        var t = new o,
                            n = R(t);
                        this.promise = t, this.resolve = J(tt, n), this.reject = J(Q, n)
                    }, C.f = G = function(t) {
                        return t === j || void 0 === t ? new r(t) : V(t)
                    }, !a && y(I) && M !== Object.prototype)) {
                    i = M.then, N || f(M, "then", (function(t, n) {
                        var e = this;
                        return new j((function(t, n) {
                            l(i, e, t, n)
                        })).then(t, n)
                    }), {
                        unsafe: !0
                    });
                    try {
                        delete M.constructor
                    } catch (t) {}
                    h && h(M, D)
                }
                s({
                    global: !0,
                    constructor: !0,
                    wrap: !0,
                    forced: L
                }, {
                    Promise: j
                }), p(j, A, !1, !0), d(A)
            },
            8674: function(t, n, e) {
                e(3401), e(821), e(4164), e(6027), e(683), e(6294)
            },
            6027: function(t, n, e) {
                var o = e(2109),
                    r = e(6916),
                    i = e(9662),
                    s = e(8523),
                    a = e(2534),
                    c = e(408);
                o({
                    target: "Promise",
                    stat: !0,
                    forced: e(612)
                }, {
                    race: function(t) {
                        var n = this,
                            e = s.f(n),
                            o = e.reject,
                            u = a((function() {
                                var s = i(n.resolve);
                                c(t, (function(t) {
                                    r(s, n, t).then(e.resolve, o)
                                }))
                            }));
                        return u.error && o(u.value), e.promise
                    }
                })
            },
            683: function(t, n, e) {
                var o = e(2109),
                    r = e(6916),
                    i = e(8523);
                o({
                    target: "Promise",
                    stat: !0,
                    forced: e(3702).CONSTRUCTOR
                }, {
                    reject: function(t) {
                        var n = i.f(this);
                        return r(n.reject, void 0, t), n.promise
                    }
                })
            },
            6294: function(t, n, e) {
                var o = e(2109),
                    r = e(5005),
                    i = e(1913),
                    s = e(2492),
                    a = e(3702).CONSTRUCTOR,
                    c = e(9478),
                    u = r("Promise"),
                    l = i && !a;
                o({
                    target: "Promise",
                    stat: !0,
                    forced: i || a
                }, {
                    resolve: function(t) {
                        return c(l && this === u ? s : this, t)
                    }
                })
            },
            4916: function(t, n, e) {
                var o = e(2109),
                    r = e(2261);
                o({
                    target: "RegExp",
                    proto: !0,
                    forced: /./.exec !== r
                }, {
                    exec: r
                })
            },
            9714: function(t, n, e) {
                var o = e(6530).PROPER,
                    r = e(8052),
                    i = e(9670),
                    s = e(1340),
                    a = e(7293),
                    c = e(4706),
                    u = "toString",
                    l = RegExp.prototype[u],
                    f = a((function() {
                        return "/a/b" != l.call({
                            source: "a",
                            flags: "b"
                        })
                    })),
                    h = o && l.name != u;
                (f || h) && r(RegExp.prototype, u, (function() {
                    var t = i(this);
                    return "/" + s(t.source) + "/" + s(c(t))
                }), {
                    unsafe: !0
                })
            },
            2023: function(t, n, e) {
                var o = e(2109),
                    r = e(1702),
                    i = e(3929),
                    s = e(4488),
                    a = e(1340),
                    c = e(4964),
                    u = r("".indexOf);
                o({
                    target: "String",
                    proto: !0,
                    forced: !c("includes")
                }, {
                    includes: function(t) {
                        return !!~u(a(s(this)), a(i(t)), arguments.length > 1 ? arguments[1] : void 0)
                    }
                })
            },
            3112: function(t, n, e) {
                var o = e(2109),
                    r = e(6650).start;
                o({
                    target: "String",
                    proto: !0,
                    forced: e(4986)
                }, {
                    padStart: function(t) {
                        return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
                    }
                })
            },
            5306: function(t, n, e) {
                var o = e(2104),
                    r = e(6916),
                    i = e(1702),
                    s = e(7007),
                    a = e(7293),
                    c = e(9670),
                    u = e(614),
                    l = e(8554),
                    f = e(9303),
                    h = e(7466),
                    p = e(1340),
                    d = e(4488),
                    v = e(1530),
                    y = e(8173),
                    m = e(647),
                    g = e(7651),
                    S = e(5112)("replace"),
                    b = Math.max,
                    _ = Math.min,
                    x = i([].concat),
                    E = i([].push),
                    O = i("".indexOf),
                    T = i("".slice),
                    I = "$0" === "a".replace(/./, "$0"),
                    w = !!/./ [S] && "" === /./ [S]("a", "$0");
                s("replace", (function(t, n, e) {
                    var i = w ? "$" : "$0";
                    return [function(t, e) {
                        var o = d(this),
                            i = l(t) ? void 0 : y(t, S);
                        return i ? r(i, t, o, e) : r(n, p(o), t, e)
                    }, function(t, r) {
                        var s = c(this),
                            a = p(t);
                        if ("string" == typeof r && -1 === O(r, i) && -1 === O(r, "$<")) {
                            var l = e(n, s, a, r);
                            if (l.done) return l.value
                        }
                        var d = u(r);
                        d || (r = p(r));
                        var y = s.global;
                        if (y) {
                            var S = s.unicode;
                            s.lastIndex = 0
                        }
                        for (var I = [];;) {
                            var w = g(s, a);
                            if (null === w) break;
                            if (E(I, w), !y) break;
                            "" === p(w[0]) && (s.lastIndex = v(a, h(s.lastIndex), S))
                        }
                        for (var C, A = "", L = 0, P = 0; P < I.length; P++) {
                            for (var N = p((w = I[P])[0]), R = b(_(f(w.index), a.length), 0), k = [], M = 1; M < w.length; M++) E(k, void 0 === (C = w[M]) ? C : String(C));
                            var j = w.groups;
                            if (d) {
                                var D = x([N], k, R, a);
                                void 0 !== j && E(D, j);
                                var U = p(o(r, void 0, D))
                            } else U = m(N, a, R, k, j, r);
                            R >= L && (A += T(a, L, R) + U, L = R + N.length)
                        }
                        return A + T(a, L)
                    }]
                }), !!a((function() {
                    var t = /./;
                    return t.exec = function() {
                        var t = [];
                        return t.groups = {
                            a: "7"
                        }, t
                    }, "7" !== "".replace(t, "$<a>")
                })) || !I || w)
            },
            4747: function(t, n, e) {
                var o = e(7854),
                    r = e(8324),
                    i = e(8509),
                    s = e(8533),
                    a = e(8880),
                    c = function(t) {
                        if (t && t.forEach !== s) try {
                            a(t, "forEach", s)
                        } catch (n) {
                            t.forEach = s
                        }
                    };
                for (var u in r) r[u] && c(o[u] && o[u].prototype);
                c(i)
            },
            3948: function(t, n, e) {
                var o = e(7854),
                    r = e(8324),
                    i = e(8509),
                    s = e(6992),
                    a = e(8880),
                    c = e(5112),
                    u = c("iterator"),
                    l = c("toStringTag"),
                    f = s.values,
                    h = function(t, n) {
                        if (t) {
                            if (t[u] !== f) try {
                                a(t, u, f)
                            } catch (n) {
                                t[u] = f
                            }
                            if (t[l] || a(t, l, n), r[n])
                                for (var e in s)
                                    if (t[e] !== s[e]) try {
                                        a(t, e, s[e])
                                    } catch (n) {
                                        t[e] = s[e]
                                    }
                        }
                    };
                for (var p in r) h(o[p] && o[p].prototype, p);
                h(i, "DOMTokenList")
            }
        },
        n = {};

    function e(o) {
        var r = n[o];
        if (void 0 !== r) return r.exports;
        var i = n[o] = {
            exports: {}
        };
        return t[o].call(i.exports, i, i.exports, e), i.exports
    }
    e.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" == typeof window) return window
            }
        }(),
        function() {
            e(1539), e(9714), e(3112), e(6699), e(2023);
            var t, n = ["🍋", "🍊", "🍉", "🍈", "🍇", "🥝", "🍓", "🍒", "🌟", "🍀", "💎", "🎰"],
                o = [n, ["🧣", "⛄", "🎄", "🎁", "🎀", "🍾", "🍷", "🔔", "🌟", "🦌", "🎅"],
                    ["🌚", "🎃", "🦇", "😈", "🧠", "👹", "👽", "🤡", "👻", "🧟‍", "🧛‍", "💀"],
                    ["🐞", "🐟", "🐭", "🐸", "🐓", "🐷", "🦀", "🐍", "🦊‍", "🦁", "🦕", "🦖"],
                    ["🎯", "🎱", "🏐", "⛳", "⚾", "🏈", "🏀", "⚽", "🥉", "🥈", "🥇", "🏆"],
                    ["💌", "🎁", "📸", "💘", "💋", "🔞", "💑", "💍", "💎", "💖"],
                    ["🎴", "🎲", "🕶", "🥃", "💷", "💴", "💵", "💰", "🍀", "💎", "🎰", "🧞‍️", "🃏"],
                    ["🥦", "🍋", "🍆", "🍙", "🍯", "🍑", "🍓", "🍭", "🍫", "🍩", "🍕", "🍗", "🥩", "🍣"]
                ],
                r = o[Math.random() * o.length | 0],
                i = (e(4916), /iPad|iPhone|iPod/.test(navigator.platform || "")),
                s = navigator.userAgent.toLowerCase().includes("firefox"),
                a = (navigator.maxTouchPoints > 0 || "ontouchstart" in window || window.DocumentTouch && (document, window.DocumentTouch), !(null !== (t = navigator.userAgentData) && void 0 !== t && t.mobile)),
                c = (e(2222), e(4747), e(1249), null);
            e(6992), e(8674), e(3948), e(561), window.AudioContext = window.AudioContext || window.webkitAudioContext;
            var u = new AudioContext,
                l = function() {
                    function t(t) {
                        this.url = "", this.buffer = null, this.sources = [], this.url = t
                    }
                    var n = t.prototype;
                    return n.load = function() {
                        var t = this;
                        return this.url ? this.buffer ? Promise.resolve(this.buffer) : new Promise((function(n, e) {
                            var o = new XMLHttpRequest;
                            o.open("GET", t.url, !0), o.responseType = "arraybuffer", o.onload = function() {
                                u.decodeAudioData(o.response, (function(o) {
                                    if (!o) return console.log("Sound decoding error: " + t.url), void e(new Error("Sound decoding error: " + t.url));
                                    t.buffer = o, n(o)
                                }))
                            }, o.onerror = function(t) {
                                console.log("Sound XMLHttpRequest error:", t), e(t)
                            }, o.send()
                        })) : Promise.reject(new Error("Missing or invalid URL: ", this.url))
                    }, n.play = function(t, n) {
                        var e = this;
                        if (void 0 === t && (t = 1), void 0 === n && (n = 0), this.buffer) {
                            var o = u.createBufferSource();
                            o.buffer = this.buffer;
                            var r = this.sources.push(o) - 1;
                            o.onended = function() {
                                o.stop(0), e.sources.splice(r, 1)
                            };
                            var i = u.createGain();
                            i.gain.value = t, o.connect(i).connect(u.destination), o.start(n)
                        }
                    }, n.stop = function() {
                        this.sources.forEach((function(t) {
                            t.stop(0)
                        })), this.sources = []
                    }, t
                }(),
                f = function() {
                    function t() {
                        this.blipSound = new l("./sounds/blip." + t.EXTENSION), this.coinSound = new l("./sounds/coin." + t.EXTENSION), this.stopSound = new l("./sounds/stop." + t.EXTENSION), this.unluckySound = new l("./sounds/unlucky." + t.EXTENSION), this.winSound = new l("./sounds/win." + t.EXTENSION), this.soundsStatus = "loading", this.isEnabled = !1, this.loadSounds()
                    }
                    var n = t.prototype;
                    return n.loadSounds = function() {
                        var t = this;
                        this.soundsStatus = "loading", this.isEnabled = !1, Promise.all([this.blipSound.load(), this.coinSound.load(), this.stopSound.load(), this.unluckySound.load(), this.winSound.load()]).then((function() {
                            t.soundsStatus = "loaded", t.isEnabled = !0
                        })).catch((function() {
                            t.soundsStatus = "error", t.isEnabled = !1
                        }))
                    }, n.enable = function() {
                        "loaded" === this.soundsStatus ? this.isEnabled = !0 : "error" === this.soundsStatus && this.loadSounds()
                    }, n.disable = function() {
                        "loaded" === this.soundsStatus && (this.isEnabled = !1, this.blipSound.stop(), this.coinSound.stop(), this.stopSound.stop(), this.unluckySound.stop(), this.winSound.stop())
                    }, n.blip = function() {
                        var t;
                        this.isEnabled && (t = this.blipSound).play.apply(t, arguments)
                    }, n.coin = function() {
                        var t;
                        this.isEnabled && (t = this.coinSound).play.apply(t, arguments)
                    }, n.stop = function() {
                        var t;
                        this.isEnabled && (t = this.stopSound).play.apply(t, arguments)
                    }, n.unlucky = function() {
                        var t;
                        this.isEnabled && (t = this.unluckySound).play.apply(t, arguments)
                    }, n.win = function() {
                        var t;
                        this.isEnabled && (t = this.winSound).play.apply(t, arguments)
                    }, t
                }();
            f.EXTENSION = s ? "ogg" : "mp3";
            var h = new f,
                p = window.navigator,
                d = p.vibrate ? p.vibrate.bind(p) : function() {},
                v = [200, 50, 50, 50, 50, 25, 25, 25, 25, 25, 25, 25, 25],
                y = [25, 25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 50, 50],
                m = !0,
                g = {
                    start() {
                        m && d(y)
                    },
                    stop() {
                        m && d(v)
                    },
                    enable() {
                        m = !0
                    },
                    disable() {
                        m = !1, d(0)
                    }
                },
                S = !1,
                b = null;

            function _() {
                S = !0
            }

            function x() {
                S = !1
            }

            function E() {
                S && (b(), S = !1)
            }

            function O(t) {
                b = t, i ? (document.ontouchstart = _, document.ontouchmove = x, document.ontouchcancel = x, document.ontouchend = E) : document.onmousedown = t
            }

            function T(t, n, e, o) {
                void 0 === t && (t = ""), void 0 === n && (n = ""), void 0 === e && (e = null), void 0 === o && (o = null);
                var r = document.createElement("DIV");
                return r.className = Array.isArray(t) ? t.join(" ") : t, "string" == typeof n ? r.innerText = n : n && r.appendChild(n), o && (r.style = o), null !== e && (r.style.transform = "rotate(" + e + "deg)"), r
            }
            var I, w = function() {
                function t(n, e, o, r) {
                    this.root = void 0, this.style = void 0, this.index = void 0, this.alpha = void 0, this.shadowCount = void 0, this.angle = 0, this.stopAt = 0, this.index = n, this.alpha = e;
                    var i = t.C_REEL,
                        a = t.C_CELL,
                        c = t.C_CELL_SHADOW,
                        u = t.C_CELL_BLUR,
                        l = t.C_FIGURE,
                        f = t.C_IS_STOP,
                        h = t.V_INDEX,
                        p = this.root = T([i, f]);
                    if ((this.style = p.style).setProperty(h, n), o) {
                        var d, v;
                        s ? (d = [a, c], v = .5) : (d = [a, c, u], v = 1);
                        var y = this.shadowCount = Math.max(2, Math.round((r - .5 - 2 * n) * Math.PI / o.length)),
                            m = 1 / y;
                        ! function(t) {
                            for (var n = t.length - 1; n > 0; --n) {
                                var e = Math.floor(Math.random() * (n + 1)),
                                    o = [t[e], t[n]];
                                t[n] = o[0], t[e] = o[1]
                            }
                        }(o), o.forEach((function(t, n) {
                            var o = T(l, t),
                                r = T(a, o, n * e);
                            p.appendChild(r);
                            for (var i = 1; i < y; ++i) p.appendChild(T(d, o.cloneNode(!0), e * (n + m * i), "opacity: " + v * (1 - m * i) + "; "))
                        }))
                    }
                }
                var n = t.prototype;
                return n.reset = function() {
                    var t = this.root,
                        n = this.style,
                        e = this.stopAt;
                    t.classList.remove("is-stop"), n.transform = "rotate(" + (this.angle = (360 - e) % 360) + "deg)", n.animation = "", this.stopAt = 0
                }, n.stop = function(n, e) {
                    var o = this.alpha,
                        r = this.root,
                        i = (360 - this.angle - e) % 360,
                        s = Math.ceil(i / o),
                        a = s * o,
                        u = "stop-" + this.index,
                        l = function(t, n, e, o, r) {
                            var i = [n, e - .25 * o, e + .125 * o, e - .0625 * o, e + .03125 * o, e - .015625 * o, e],
                                s = n,
                                a = 0,
                                u = i.map((function(t) {
                                    var n = Math.max(Math.abs(t - s) / Math.abs(r), 10);
                                    return s = t, a += n, n
                                })),
                                l = 0;
                            return function(t, n) {
                                c || ((c = document.createElement("style")).type = "text/css", document.head.appendChild(c)), c.sheet.insertRule("@keyframes " + t + " {\n        " + n + "\n    }", c.length)
                            }(t, u.map((function(t) {
                                var n = l + 100 * t / a;
                                return l = n, n
                            })).map((function(t, n) {
                                return Math.round(t) + "% { transform: rotate(" + i[n].toFixed(2) + "deg); }"
                            })).join("\n")), a
                        }(u, (360 - i) % 360, (360 - a) % 360, o, n) * t.STOP_ANIMATION_DURATION_MULTIPLIER;
                    return this.stopAt = a, this.style.animation = u + " " + l + "ms ease-out forwards", r.classList.add(t.C_IS_STOP), (r.children[s * this.shadowCount] || r.children[0]).innerText
                }, t
            }();
            w.C_REEL = "sm__reel", w.C_CELL = "sm__cell", w.C_CELL_SHADOW = "sm__cell--has-shadow", w.C_CELL_BLUR = "sm__cell--has-blur", w.C_FIGURE = "sm__figure", w.C_IS_STOP = "is-stop", w.V_INDEX = "--index", w.STOP_ANIMATION_DURATION_MULTIPLIER = 5;
            var C = function() {
                function t(e, o, r, i, s, a, c) {
                    void 0 === i && (i = 3), void 0 === s && (s = n), void 0 === a && (a = !1), void 0 === c && (c = -.552), this.wrapper = void 0, this.root = document.querySelector(t.S_BASE), this.reelsContainer = document.querySelector(t.S_REELS_CONTAINER), this.display = document.querySelector(t.S_DISPLAY), this.reels = [], this.blipFading = void 0, this.reelCount = void 0, this.symbols = void 0, this.alpha = void 0, this.speed = void 0, this.zoomTransitionTimeoutID = null, this.currentCombination = [], this.currentReel = null, this.blipCounter = 0, this.lastUpdate = 0, this.isPaused = !1, this.keydownTimeoutID = null, this.keydownLastCalled = 0, this.init(e, o, r, i, s, c), window.onresize = this.handleResize.bind(this), document.onkeydown = this.handleKeyDown.bind(this), document.onkeyup = this.handleKeyUp.bind(this), this.handleClick = this.handleClick.bind(this), a ? this.pause() : this.resume()
                }
                var e = t.prototype;
                return e.init = function(n, e, o, r, i, a) {
                    this.wrapper = n, this.handleUseCoin = e, this.handleGetPrice = o, this.reelCount = r, this.symbols = i, this.speed = a, this.blipFading = 1 / r;
                    var c = this.alpha = 360 / i.length,
                        u = [].concat(i),
                        l = 2 * r + t.UNITS_CENTER;
                    this.resize(), s && this.root.style.setProperty(t.V_SHADOW_WEIGHT, t.FIREFOX_SHADOW_WEIGHT);
                    for (var f = this.reelsContainer, h = this.reels, p = 0; p < r; ++p) {
                        var d = new w(p, c, u, l);
                        f.appendChild(d.root), h.push(d)
                    }
                    f.appendChild(new w(r).root)
                }, e.start = function() {
                    var n = this;
                    this.handleUseCoin(), this.currentCombination = [], this.currentReel = 0, this.zoomOut(), this.display.classList.remove(t.C_IS_WIN, t.C_IS_FAIL), this.reels.forEach((function(t) {
                        return t.reset()
                    })), c && (c.remove(), c = null), h.coin(), g.start(), this.lastUpdate = performance.now(), requestAnimationFrame((function() {
                        return n.tick()
                    }))
                }, e.stop = function() {
                    var n = this.checkPrize();
                    this.currentReel = null, this.zoomIn(), n ? (h.win(), this.display.classList.add(t.C_IS_WIN), this.handleGetPrice(n)) : (h.unlucky(), this.display.classList.add(t.C_IS_FAIL))
                }, e.tick = function() {
                    var n = this,
                        e = this.reels,
                        o = this.speed,
                        r = this.currentReel,
                        i = this.lastUpdate,
                        s = performance.now(),
                        a = (s - i) * o;
                    if (null !== r && !this.isPaused) {
                        0 == (this.blipCounter = (this.blipCounter + 1) % t.BLIP_RATE) && h.blip(1 - this.blipFading * r), this.lastUpdate = s;
                        for (var c = e.length - 1; c >= r; --c) {
                            var u = e[c],
                                l = u.angle = (360 + (u.angle + a)) % 360;
                            u.style.transform = "rotate(" + l + "deg)"
                        }
                        requestAnimationFrame((function() {
                            return n.tick()
                        }))
                    }
                }, e.zoomIn = function() {
                    this.zoom()
                }, e.zoomOut = function() {
                    this.zoom(!0)
                }, e.zoom = function(n) {
                    void 0 === n && (n = !1), clearTimeout(this.zoomTransitionTimeoutID);
                    var e = this.root;
                    e.style.transition = t.ZOOM_TRANSITION, e.classList[n ? "remove" : "add"](t.C_HAS_ZOOM), this.zoomTransitionTimeoutID = setTimeout((function() {
                        e.style.transition = ""
                    }), t.ZOOM_TRANSITION_DURATION)
                }, e.resize = function() {
                    var n = this,
                        e = this.wrapper,
                        o = this.root,
                        r = this.reelCount,
                        i = this.display,
                        s = o.style,
                        a = e.offsetWidth,
                        c = e.offsetHeight,
                        u = Math.min(a, c) - t.APP_PADDING,
                        l = u / (2 * r + t.UNITS_TOTAL) | 0;
                    u <= 0 || l <= 0 || o.offsetWidth / i.offsetWidth <= 0 ? requestAnimationFrame((function() {
                        return n.resize()
                    })) : (s.setProperty(t.V_WRAPPER_SIZE, u + "px"), s.setProperty(t.V_REEL_SIZE, l + "px"), s.setProperty(t.V_DISPLAY_SIZE, l * r + "px"), s.setProperty(t.V_DISPLAY_ZOOM, "" + o.offsetWidth / i.offsetWidth))
                }, e.stopReel = function(t) {
                    var n = this.speed,
                        e = (performance.now() - this.lastUpdate) * n;
                    this.currentCombination.push(this.reels[t].stop(n, e)), h.stop(), g.stop()
                }, e.checkPrize = function() {
                    for (var t = this.currentCombination, n = this.reelCount, e = this.symbols, o = {}, r = 0, i = "", s = "", a = 0, c = 0; c < n; ++c) {
                        var u = t[c],
                            l = o[u] = i === u ? o[u] + 1 : 1;
                        if (i = u, l > r) {
                            r = l;
                            var f = e.indexOf(u);
                            f > e.indexOf(s) && (s = u, a = f + 1)
                        }
                    }
                    return r > 2 ? r * (a / e.length) / n : null
                }, e.handleResize = function() {
                    var t = this;
                    requestAnimationFrame((function() {
                        return t.resize()
                    }))
                }, e.handleKeyDown = function(t) {
                    window.clearTimeout(this.keydownTimeoutID);
                    var n = t.key;
                    if (!this.isPaused && document.activeElement === document && [" ", "Enter"].includes(n)) {
                        var e = Date.now() - this.keydownLastCalled;
                        e >= 1e3 ? this.handleClick() : this.keydownTimeoutID = window.setTimeout(this.handleClick.bind(this), 1e3 - e)
                    }
                }, e.handleKeyUp = function(t) {
                    [" ", "Enter"].includes(t.key) && (window.clearTimeout(this.keydownTimeoutID), this.keydownLastCalled = 0)
                }, e.handleClick = function(t) {
                    if (void 0 === t && (t = null), window.clearTimeout(this.keydownTimeoutID), this.keydownLastCalled = Date.now(), t) {
                        var n = t.target,
                            e = n.tagName,
                            o = n.parentElement.tagName;
                        if (/^A|BUTTON$/.test(e) || /^A|BUTTON$/.test(o)) return void document.activeElement.blur();
                        if (3 === t.which) return
                    }
                    var r = this.currentReel;
                    null === r ? this.start() : (++this.currentReel, this.stopReel(r), r === this.reels.length - 1 && this.stop())
                }, e.pause = function() {
                    O(null), this.isPaused = !0
                }, e.resume = function() {
                    var t = this;
                    O(this.handleClick), this.isPaused = !1, null !== this.currentReel && requestAnimationFrame((function() {
                        return t.tick()
                    }))
                }, t
            }();

            function A(t) {
                return void 0 === t && (t = ""), t.toLowerCase().split("-").map((function(t) {
                    return "" + t[0].toUpperCase() + t.substring(1)
                })).join(" ")
            }
            I = C, C.C_HAS_ZOOM = "has-zoom", C.C_IS_WIN = "is-win", C.C_IS_FAIL = "is-fail", C.S_BASE = ".sm__base", C.S_REELS_CONTAINER = ".sm__reelsContainer", C.S_DISPLAY = ".sm__display", C.V_WRAPPER_SIZE = "--wrapperSize", C.V_REEL_SIZE = "--reelSize", C.V_DISPLAY_SIZE = "--displaySize", C.V_DISPLAY_ZOOM = "--displayZoom", C.V_SHADOW_WEIGHT = "--shadowWeight", C.UNITS_CENTER = 3, C.UNITS_MARGIN = 1, C.UNITS_TOTAL = I.UNITS_CENTER + I.UNITS_MARGIN, C.ZOOM_TRANSITION = "transform ease-in-out 500ms 250ms", C.ZOOM_TRANSITION_DURATION = 1e3, C.BLIP_RATE = 4, C.FIREFOX_SHADOW_WEIGHT = .5, C.APP_PADDING = 32;
            var L = function() {
                function t(t, n, e, o) {
                    this.root = void 0, this.icon = void 0, this.key = void 0, this.value = void 0, this.onButtonClick = void 0;
                    var r = this.root = document.querySelector(t);
                    this.icon = r.children[0], this.key = n, this.onButtonClick = o, e ? this.enable() : this.disable(), r.onclick = this.handleButtonClicked.bind(this)
                }
                var n = t.prototype;
                return n.enable = function() {
                    var n = A(this.key);
                    this.root.classList.remove(t.C_IS_DISABLED), this.root.setAttribute("title", "Turn " + n + " Off"), this.root.setAttribute("aria-label", "Turn " + n + " Off"), this.icon.setAttribute("aria-label", n + " Is On"), this.value = !0, this.onButtonClick && this.onButtonClick(this.key, !0)
                }, n.disable = function() {
                    var n = A(this.key);
                    this.root.classList.add(t.C_IS_DISABLED), this.root.setAttribute("title", "Turn " + n + " On"), this.root.setAttribute("aria-label", "Turn " + n + " On"), this.icon.setAttribute("aria-label", n + " Is Off"), this.value = !1, this.onButtonClick && this.onButtonClick(this.key, !1)
                }, n.toggle = function() {
                    this.value ? this.disable() : this.enable()
                }, n.handleButtonClicked = function(t) {
                    t.stopPropagation(), document.activeElement.blur(), this.toggle()
                }, t
            }();
            L.C_IS_DISABLED = "is-disabled";
            var P = function() {
                function t(t, n, e, o) {
                    this.root = void 0, this.label = void 0, this.isOpen = void 0, this.onButtonClick = void 0;
                    var r = this.root = document.querySelector(t);
                    this.label = n, this.onButtonClick = o, e ? this.open() : this.close(), r.onclick = this.handleButtonClicked.bind(this)
                }
                var n = t.prototype;
                return n.open = function() {
                    var n = this.label;
                    this.root.classList.add(t.C_IS_OPEN), this.root.setAttribute("title", "Close " + n), this.root.setAttribute("aria-label", "Close " + n), this.isOpen = !0, this.onButtonClick && this.onButtonClick(!0)
                }, n.close = function() {
                    var n = this.label;
                    this.root.classList.remove(t.C_IS_OPEN), this.root.setAttribute("title", "Open " + n), this.root.setAttribute("aria-label", "Open " + n), this.isOpen = !1, this.onButtonClick && this.onButtonClick(!1)
                }, n.toggle = function() {
                    this.isOpen ? this.close() : this.open()
                }, n.handleButtonClicked = function(t) {
                    t.stopPropagation(), document.activeElement.blur(), this.toggle()
                }, t
            }();
            P.C_IS_OPEN = "is-open";
            var N = function() {
                function t(n, e, o, r, i, s) {
                    var a = this;
                    this.root = void 0, this.closeButton = void 0, this.modalButton = void 0, this.key = void 0, this.isOpen = void 0, this.isFixed = void 0, this.onModalToggled = void 0, this.root = document.querySelector(n), this.closeButton = this.root.querySelector(t.S_CLOSE_BUTTON), this.modalButton = new P(e, A(o), r, this.handleButtonClicked.bind(this)), this.key = o, this.onModalToggled = s, r ? this.open("init", i) : this.close("init"), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleClickOutside = this.handleClickOutside.bind(this), this.closeButton.onclick = function(t) {
                        t.stopPropagation(), document.activeElement.blur(), a.close("close")
                    }
                }
                var n = t.prototype;
                return n.addEventListeners = function() {
                    document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("click", this.handleClickOutside)
                }, n.removeEventListeners = function() {
                    document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("click", this.handleClickOutside)
                }, n.handleKeyDown = function(t) {
                    var n = t.key;
                    this.isFixed || "Esc" !== n && "Escape" !== n || this.close("esc")
                }, n.handleButtonClicked = function(t) {
                    this.isFixed || void 0 === this.isOpen || this.isOpen === t || this.toggle("toggle")
                }, n.handleClickOutside = function(t) {
                    var n = t.target;
                    this.isFixed || n === this.root || this.root.contains(n) || this.close("outside")
                }, n.open = function(n, e) {
                    t.OPEN_MODAL && t.OPEN_MODAL.close(), t.OPEN_MODAL = this, e && this.setFixed(), this.root.classList.add(t.C_IS_OPEN), this.isOpen = !0, this.isFixed = e, this.onModalToggled && this.onModalToggled(!0, this.key + "-" + n), this.modalButton.open(), this.addEventListeners()
                }, n.close = function(n) {
                    t.OPEN_MODAL = null, this.removeEventListeners(), this.root.classList.remove(t.C_IS_OPEN), this.isFixed && this.setDismissible(), this.isOpen = !1, this.isFixed = !1, this.onModalToggled && this.onModalToggled(!1, this.key + "-" + n), this.modalButton.close()
                }, n.toggle = function(t) {
                    this.isOpen ? this.close(t) : this.open(t)
                }, n.setFixed = function() {
                    this.closeButton.setAttribute("hidden", !0)
                }, n.setDismissible = function() {
                    this.closeButton.removeAttribute("hidden")
                }, t
            }();
            N.OPEN_MODAL = null, N.S_CLOSE_BUTTON = ".modal__button", N.C_IS_OPEN = "is-open", e(5306);
            var R = function() {
                function t(n) {
                    var e = this;
                    this.root = document.querySelector(t.S_ROOT), this.payMatrix = {}, this.activeColumn = null;
                    var o = n.length;
                    this.root.innerHTML = '\n            <li class="pt__header">\n                <div class="pt__rowContent">\n                    <span class="pt__c1"></span>\n                    <button class="pt__c2 pt__tab"><span class="pt__tabText">× 3</span></button>\n                    <button class="pt__c3 pt__tab"><span class="pt__tabText">× 4</span></button>\n                    <button class="pt__c4 pt__tab"><span class="pt__tabText">× 5</span></button>\n                </div>\n            </li>\n        ' + n.map((function(t, n) {
                        var r = (n + 1) / o * 100,
                            i = .6 * r,
                            s = .8 * r,
                            a = r;
                        return e.payMatrix[t] = [i, s, a], '\n                <li class="pt__row">\n                    <div class="pt__rowContent">\n                        <span class="pt__c1">' + t + '</span>\n                        <span class="pt__c2">' + i.toFixed(2) + ' %</span>\n                        <span class="pt__c3">' + s.toFixed(2) + ' %</span>\n                        <span class="pt__c4">' + a.toFixed(2) + " %</span>\n                    </div>\n                </li>\n            "
                    })).join(""), this.activeColumn = this.root.querySelector(t.S_INITIALLY_ACTIVE_COLUMN), this.root.querySelector(t.S_HEADER).addEventListener("click", this.handleColumnClicked.bind(this))
                }
                return t.prototype.handleColumnClicked = function(n) {
                    var e = n.target,
                        o = parseInt(e.className.replace(t.C_COLUMN, ""), 10) || 0;
                    o <= 1 || e === this.activeColumn || (this.activeColumn = e, this.root.className = t.C_BASE + " " + t.C_ACTIVE + o, document.activeElement.blur())
                }, t
            }();
            R.C_BASE = "pt__base", R.C_ACTIVE = "pt__base--activeC", R.C_COLUMN = "pt__c", R.S_ROOT = ".pt__base", R.S_HEADER = ".pt__header", R.S_INITIALLY_ACTIVE_COLUMN = ".pt__header .pt__c2";
            var k = {
                    sound: h,
                    vibration: g
                },
                M = function(t, n) {
                    var e = k[t];
                    e && e[n ? "enable" : "disable"](), localStorage.setItem(t, n)
                },
                j = function() {
                    function t() {
                        this.coinsElement = document.querySelector(t.S_COINS), this.jackpotElement = document.querySelector(t.S_JACKPOT), this.spinsElement = document.querySelector(t.S_SPINS), this.mainElement = document.querySelector(t.S_MAIN), this.slotMachine = void 0, this.payTable = void 0, this.instructionsModal = void 0, this.coins = parseInt(localStorage.coins, 10) || startingBalance, this.jackpot = parseInt(localStorage.jackpot, 10) || 1e3, this.spins = parseInt(localStorage.spins, 10) || 0, this.lastSpin = localStorage.lastSpin || 0, this.isSoundDisabled = "false" === localStorage.sound, this.isVibrationDisabled = "false" === localStorage.vibration, this.isFirstTime = "false" !== localStorage.firstTime;
                        var n = Date.now();
                        n - this.lastSpin >= t.ONE_DAY && (localStorage.jackpot = this.jackpot = 0 | Math.max(500, this.jackpot + 1 * startingJackpot), localStorage.lastSpin = n), this.handleModalToggle = this.handleModalToggle.bind(this), this.handleUseCoin = this.handleUseCoin.bind(this), this.handleGetPrice = this.handleGetPrice.bind(this);
                        var e = !1;
                        document.addEventListener("keydown", (function(n) {
                            "Tab" !== n.key || e ? "Escape" === n.key && e && (e = !1, document.body.classList.remove(t.C_FOCUS_ACTIVE)) : (e = !0, document.body.classList.add(t.C_FOCUS_ACTIVE))
                        })), document.addEventListener("mousedown", (function() {
                            e = !1, document.body.classList.remove(t.C_FOCUS_ACTIVE)
                        })), this.initUI()
                    }
                    var n = t.prototype;
                    return n.handleUseCoin = function() {
                        localStorage.coins = this.coins = Math.max(this.coins - spinCost, 0) || 100, localStorage.jackpot = this.jackpot += jackpotIncrement, localStorage.spins = ++this.spins, localStorage.lastSpin = this.lastSpin = Date.now(), this.refreshGameInfo()
                    }, n.handleGetPrice = function(t) {
                        var n = Math.min(Math.max(Math.ceil(t * this.jackpot), 10), this.jackpot);
                        localStorage.jackpot = this.jackpot = Math.max(this.jackpot - n, 0) || 1e3, localStorage.coins = this.coins += n, this.refreshGameInfo()
                    }, n.refreshGameInfo = function() {
                        var t = Math.max(this.coins, this.jackpot, this.spins),
                            n = Math.max(2 * Math.ceil(t.toString().length / 2), 5);
                        this.coinsElement.innerText = ("" + this.coins).padStart(n, "0"), this.jackpotElement.innerText = ("" + this.jackpot).padStart(n, "0"), this.spinsElement.innerText = ("" + this.spins).padStart(n, "0")
                    }, n.initUI = function() {
                        var n = this,
                            e = this.isFirstTime;
                        this.refreshGameInfo(), a && (document.querySelector(t.S_TOGGLE_VIBRATION).parentElement.setAttribute("hidden", !0), document.querySelector(t.S_VIBRATION_INSTRUCTIONS).setAttribute("hidden", !0)), this.initToggleButtons();
                        var o = document.querySelector(t.S_PLAY);
                        e ? o.onclick = function() {
                            n.isFirstTime = localStorage.firstTime = !1, o.setAttribute("hidden", !0), n.instructionsModal.close(), document.activeElement.blur(), n.slotMachine.start()
                        } : o.setAttribute("hidden", !0), this.instructionsModal = new N(t.S_INSTRUCTIONS_MODAL, t.S_INSTRUCTIONS_MODAL_BUTTON, "instructions", e, e, this.handleModalToggle), this.slotMachine = new C(this.mainElement, this.handleUseCoin, this.handleGetPrice, 5, r, e), this.payTable = new R(r), new N(t.S_PAY_TABLE_MODAL, t.S_PAY_TABLE_MODAL_BUTTON, "pay-table", !1, !1, this.handleModalToggle)
                    }, n.initToggleButtons = function() {
                        new L(t.S_TOGGLE_SOUND, "sound", !this.isSoundDisabled, M), a || new L(t.S_TOGGLE_VIBRATION, "vibration", !this.isVibrationDisabled, M)
                    }, n.handleModalToggle = function(t, n) {
                        this.slotMachine && !n.includes("-init") && (t ? this.slotMachine.pause() : this.slotMachine.resume())
                    }, t
                }();
            j.C_FOCUS_ACTIVE = "focus-active", j.S_COINS = "#coins", j.S_JACKPOT = "#jackpot", j.S_SPINS = "#spins", j.S_MAIN = "#main", j.S_TOGGLE_SOUND = "#toggleSound", j.S_TOGGLE_VIBRATION = "#toggleVibration", j.S_VIBRATION_INSTRUCTIONS = "#vibrationInstructions", j.S_INSTRUCTIONS_MODAL = "#instructionsModal", j.S_INSTRUCTIONS_MODAL_BUTTON = "#toggleInstructions", j.S_PAY_TABLE_MODAL = "#payTableModal", j.S_PAY_TABLE_MODAL_BUTTON = "#togglePayTable", j.S_PLAY = "#playButton", j.ONE_DAY = 864e5, new j
        }()
}();