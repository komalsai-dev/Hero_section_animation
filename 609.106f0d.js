(self.webpackChunkmicro_acquire_website = self.webpackChunkmicro_acquire_website || []).push([
    [609], {
        95113: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            });
            var i = n(22451),
                o = n(52540),
                r = {
                    TouchDesktop: {
                        id: 1,
                        name: "TouchDesktop",
                        width: 1024,
                        height: 800,
                        mediaQuery: "(min-width: 1024px) and (any-hover: hover) and (any-pointer: coarse)"
                    },
                    Desktop: {
                        id: 2,
                        name: "Desktop",
                        width: 1440,
                        height: 800,
                        mediaQuery: "(min-width: 1025px) and (any-hover: hover)"
                    },
                    WindowedDesktop: {
                        id: 3,
                        name: "WindowedDesktop",
                        width: 1024,
                        height: 800,
                        mediaQuery: "(max-width: 1024px) and (any-hover: hover)"
                    },
                    Tablet: {
                        id: 4,
                        name: "Tablet",
                        width: 1024,
                        height: 768,
                        mediaQuery: "(any-pointer: coarse) and (min-width: 768px) and (hover: none) and (max-width: 1367px)"
                    },
                    MobilePortrait: {
                        id: 5,
                        name: "MobilePortrait",
                        width: 480,
                        height: 897,
                        mediaQuery: "(max-width: 480px) and (hover: none) and (any-pointer: coarse)"
                    }
                };
            o.A.registerBreakpoint(r.TouchDesktop), o.A.registerBreakpoint(r.Desktop), o.A.registerBreakpoint(r.WindowedDesktop), o.A.registerBreakpoint(r.Tablet), o.A.registerBreakpoint(r.MobilePortrait);
            var s = i.sH.object({
                width: 0,
                height: 0
            });
            const a = i.sH.object({
                get All() {
                    return r
                },
                Current: {
                    get breakpoint() {
                        return o.A.Current.breakpoint
                    },
                    get rem() {
                        return o.A.Current.rem
                    }
                },
                get width() {
                    return s.width
                },
                get height() {
                    return s.height
                },
                resize: function(e, t) {
                    s.width = e, s.height = t, o.A.resize(e, t)
                },
                isActive: function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return 0 <= t.indexOf(this.Current.breakpoint.id)
                }
            })
        },
        62119: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            var i = n(20738),
                o = n(87549);
            i.Ay.registerPlugin(o.A);
            const r = o.A
        },
        87549: (e, t, n) => {
            "use strict";
            var i = Math.abs,
                o = Math.max;
            n.d(t, {
                A: () => g
            });
            var r, s, a = n(98344),
                l = function() {
                    return r || "undefined" != typeof window && (r = window.gsap) && r.registerPlugin && r
                },
                c = function() {
                    (r = l()) ? (r.registerEase("_CE", g.create), s = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
                },
                d = function(e) {
                    return ~~(1e3 * e + (0 > e ? -.5 : .5)) / 1e3
                },
                u = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
                p = /[cLlsSaAhHvVtTqQ]/g,
                f = function(e, t, n) {
                    n || 0 === n || (n = o(+e[e.length - 1], +e[1]));
                    var r, s = -1 * +e[0],
                        a = -n,
                        l = e.length,
                        c = 1 / (+e[l - 2] + s),
                        d = -t || (i(+e[l - 1] - +e[1]) < .01 * (+e[l - 2] - +e[0]) ? function(e) {
                            var t, n = e.length,
                                i = 1e20;
                            for (t = 1; t < n; t += 6) + e[t] < i && (i = +e[t]);
                            return i
                        }(e) + a : +e[l - 1] + a);
                    for (d = d ? 1 / d : -c, r = 0; r < l; r += 2) e[r] = (+e[r] + s) * c, e[r + 1] = (+e[r + 1] + a) * d
                },
                h = function e(t, n, o, r, s, a, l, c, d, u, p) {
                    var f, h = (t + o) / 2,
                        g = (n + r) / 2,
                        v = (o + s) / 2,
                        y = (r + a) / 2,
                        m = (s + l) / 2,
                        x = (a + c) / 2,
                        w = (h + v) / 2,
                        b = (g + y) / 2,
                        T = (v + m) / 2,
                        k = (y + x) / 2,
                        S = (w + T) / 2,
                        C = (b + k) / 2,
                        $ = l - t,
                        A = c - n,
                        E = i((o - l) * A - (r - c) * $),
                        D = i((s - l) * A - (a - c) * $);
                    return u || (u = [{
                        x: t,
                        y: n
                    }, {
                        x: l,
                        y: c
                    }], p = 1), u.splice(p || u.length - 1, 0, {
                        x: S,
                        y: C
                    }), (E + D) * (E + D) > d * ($ * $ + A * A) && (f = u.length, e(t, n, h, g, w, b, S, C, d, u, p), e(S, C, T, k, m, x, l, c, d, u, p + 1 + (u.length - f))), u
                },
                g = function() {
                    function e(e, t, n) {
                        s || c(), this.id = e, this.setData(t, n)
                    }
                    var t = e.prototype;
                    return t.setData = function(e, t) {
                        t = t || {};
                        var n, o, s, l, c, d, g, v, y, m = (e = e || "0,0,1,1").match(u),
                            x = 1,
                            w = [],
                            b = [],
                            T = t.precision || 1,
                            k = 1 >= T;
                        if (this.data = e, (p.test(e) || ~e.indexOf("M") && 0 > e.indexOf("C")) && (m = (0, a.UY)(e)[0]), 4 === (n = m.length)) m.unshift(0, 0), m.push(1, 1), n = 8;
                        else if ((n - 2) % 6) throw "Invalid CustomEase";
                        for ((0 != +m[0] || 1 != +m[n - 2]) && f(m, t.height, t.originY), this.segment = m, l = 2; l < n; l += 6) o = {
                            x: +m[l - 2],
                            y: +m[l - 1]
                        }, s = {
                            x: +m[l + 4],
                            y: +m[l + 5]
                        }, w.push(o, s), h(o.x, o.y, +m[l], +m[l + 1], +m[l + 2], +m[l + 3], s.x, s.y, 1 / (2e5 * T), w, w.length - 1);
                        for (n = w.length, l = 0; l < n; l++) g = w[l], v = w[l - 1] || g, (g.x > v.x || v.y !== g.y && v.x === g.x || g === v) && 1 >= g.x ? (v.cx = g.x - v.x, v.cy = g.y - v.y, v.n = g, v.nx = g.x, k && 1 < l && 2 < i(v.cy / v.cx - w[l - 2].cy / w[l - 2].cx) && (k = 0), v.cx < x && (v.cx ? x = v.cx : (v.cx = .001, l === n - 1 && (v.x -= .001, x = Math.min(x, .001), k = 0)))) : (w.splice(l--, 1), n--);
                        if (c = 1 / (n = 0 | 1 / x + 1), d = 0, g = w[0], k) {
                            for (l = 0; l < n; l++) y = l * c, g.nx < y && (g = w[++d]), o = g.y + (y - g.x) / g.cx * g.cy, b[l] = {
                                x: y,
                                cx: c,
                                y: o,
                                cy: 0,
                                nx: 9
                            }, l && (b[l - 1].cy = o - b[l - 1].y);
                            b[n - 1].cy = w[w.length - 1].y - o
                        } else {
                            for (l = 0; l < n; l++) g.nx < l * c && (g = w[++d]), b[l] = g;
                            d < w.length - 1 && (b[l - 1] = w[w.length - 2])
                        }
                        return this.ease = function(e) {
                            var t = b[0 | e * n] || b[n - 1];
                            return t.nx < e && (t = t.n), t.y + (e - t.x) / t.cx * t.cy
                        }, this.ease.custom = this, this.id && r && r.registerEase(this.id, this.ease), this
                    }, t.getSVGData = function(t) {
                        return e.getSVGData(this, t)
                    }, e.create = function(t, n, i) {
                        return new e(t, n, i).ease
                    }, e.register = function(e) {
                        r = e, c()
                    }, e.get = function(e) {
                        return r.parseEase(e)
                    }, e.getSVGData = function(t, n) {
                        var s, l, c, u, p, f, h, g, v, y, m = (n = n || {}).width || 100,
                            x = n.height || 100,
                            w = n.x || 0,
                            b = (n.y || 0) + x,
                            T = r.utils.toArray(n.path)[0];
                        if (n.invert && (x = -x, b = 0), "string" == typeof t && (t = r.parseEase(t)), t.custom && (t = t.custom), t instanceof e) s = (0, a.a9)((0, a.ag)([t.segment], m, 0, 0, -x, w, b));
                        else {
                            for (s = [w, b], u = 1 / (h = o(5, 200 * (n.precision || 1))), g = 5 / (h += 2), v = d(w + u * m), l = ((y = d(b + t(u) * -x)) - b) / (v - w), c = 2; c < h; c++) p = d(w + c * u * m), f = d(b + t(c * u) * -x), (i((f - y) / (p - v) - l) > g || c === h - 1) && (s.push(v, y), l = (f - y) / (p - v)), v = p, y = f;
                            s = "M" + s.join(",")
                        }
                        return T && T.setAttribute("d", s), s
                    }, e
                }();
            l() && r.registerPlugin(g), g.version = "3.10.4"
        },
        20738: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ay: () => r,
                K3: () => s
            });
            var i = n(48607),
                o = n(22650),
                r = i.os.registerPlugin(o.H0) || i.os,
                s = r.core.Tween
        },
        98344: (e, t, n) => {
            "use strict";

            function i(e, t, n, i, o, r, s) {
                for (var a, l, c, d, u, p = e.length; - 1 < --p;)
                    for (l = (a = e[p]).length, c = 0; c < l; c += 2) d = a[c], u = a[c + 1], a[c] = d * t + u * i + r, a[c + 1] = d * n + u * o + s;
                return e._dirty = 1, e
            }

            function o(e, t, n, i, o, r, s, a, c) {
                var d = Math.acos;
                if (e !== a || t !== c) {
                    n = g(n), i = g(i);
                    var u = o % 360 * p,
                        y = h(u),
                        m = f(u),
                        x = l,
                        w = 2 * x,
                        b = (e - a) / 2,
                        T = (t - c) / 2,
                        k = y * b + m * T,
                        S = -m * b + y * T,
                        C = k * k,
                        $ = S * S,
                        A = C / (n * n) + $ / (i * i);
                    1 < A && (n = v(A) * n, i = v(A) * i);
                    var E = n * n,
                        D = i * i,
                        j = (E * D - E * $ - D * C) / (E * $ + D * C);
                    0 > j && (j = 0);
                    var N = (r === s ? -1 : 1) * v(j),
                        H = N * (n * S / i),
                        L = N * (-i * k / n),
                        O = (k - H) / n,
                        P = (S - L) / i,
                        q = (-k - H) / n,
                        M = (-S - L) / i,
                        I = O * O + P * P,
                        z = (0 > P ? -1 : 1) * d(O / v(I)),
                        W = (0 > O * M - P * q ? -1 : 1) * d((O * q + P * M) / v(I * (q * q + M * M)));
                    isNaN(W) && (W = x), !s && 0 < W ? W -= w : s && 0 > W && (W += w), z %= w, W %= w;
                    var F, R = Math.ceil(g(W) / (w / 4)),
                        B = [],
                        U = W / R,
                        _ = 4 / 3 * f(U / 2) / (1 + h(U / 2)),
                        X = y * n,
                        Y = m * n,
                        V = m * -i,
                        G = y * i;
                    for (F = 0; F < R; F++) k = h(o = z + F * U), S = f(o), O = h(o += U), P = f(o), B.push(k - _ * S, S + _ * k, O + _ * P, P - _ * O, O, P);
                    for (F = 0; F < B.length; F += 2) k = B[F], S = B[F + 1], B[F] = k * X + S * V + ((e + a) / 2 + (y * H - m * L)), B[F + 1] = k * Y + S * G + ((t + c) / 2 + (m * H + y * L));
                    return B[F - 2] = a, B[F - 1] = c, B
                }
            }

            function r(e) {
                var t, n, i, r, s, a, l, c, p, f, h, v, y, m, x, w = (e + "").replace(u, (function(e) {
                        var t = +e;
                        return 1e-4 > t && -1e-4 < t ? 0 : t
                    })).match(d) || [],
                    b = [],
                    T = 0,
                    k = 0,
                    S = 2 / 3,
                    C = w.length,
                    $ = 0,
                    A = "ERROR: malformed path: " + e,
                    E = function(e, t, n, i) {
                        f = (n - e) / 3, h = (i - t) / 3, l.push(e + f, t + h, n - f, i - h, n, i)
                    };
                if (!e || !isNaN(w[0]) || isNaN(w[1])) return console.log(A), b;
                for (t = 0; t < C; t++)
                    if (y = s, isNaN(w[t]) ? a = (s = w[t].toUpperCase()) !== w[t] : t--, i = +w[t + 1], r = +w[t + 2], a && (i += T, r += k), t || (c = i, p = r), "M" === s) l && (8 > l.length ? b.length -= 1 : $ += l.length), T = c = i, k = p = r, l = [i, r], b.push(l), t += 2, s = "L";
                    else if ("C" === s) l || (l = [0, 0]), a || (T = k = 0), l.push(i, r, T + 1 * w[t + 3], k + 1 * w[t + 4], T += 1 * w[t + 5], k += 1 * w[t + 6]), t += 6;
                else if ("S" === s) f = T, h = k, ("C" === y || "S" === y) && (f += T - l[l.length - 4], h += k - l[l.length - 3]), a || (T = k = 0), l.push(f, h, i, r, T += 1 * w[t + 3], k += 1 * w[t + 4]), t += 4;
                else if ("Q" === s) f = T + (i - T) * S, h = k + (r - k) * S, a || (T = k = 0), T += 1 * w[t + 3], k += 1 * w[t + 4], l.push(f, h, T + (i - T) * S, k + (r - k) * S, T, k), t += 4;
                else if ("T" === s) f = T - l[l.length - 4], h = k - l[l.length - 3], l.push(T + f, k + h, i + (T + 1.5 * f - i) * S, r + (k + 1.5 * h - r) * S, T = i, k = r), t += 2;
                else if ("H" === s) E(T, k, T = i, k), t += 1;
                else if ("V" === s) E(T, k, T, k = i + (a ? k - T : 0)), t += 1;
                else if ("L" === s || "Z" === s) "Z" === s && (i = c, r = p, l.closed = !0), ("L" === s || .5 < g(T - i) || .5 < g(k - r)) && (E(T, k, i, r), "L" === s && (t += 2)), T = i, k = r;
                else if ("A" === s) {
                    if (m = w[t + 4], x = w[t + 5], f = w[t + 6], h = w[t + 7], n = 7, 1 < m.length && (3 > m.length ? (h = f, f = x, n--) : (h = x, f = m.substr(2), n -= 2), x = m.charAt(1), m = m.charAt(0)), v = o(T, k, +w[t + 1], +w[t + 2], +w[t + 3], +m, +x, (a ? T : 0) + 1 * f, (a ? k : 0) + 1 * h), t += n, v)
                        for (n = 0; n < v.length; n++) l.push(v[n]);
                    T = l[l.length - 2], k = l[l.length - 1]
                } else console.log(A);
                return 6 > (t = l.length) ? (b.pop(), t = 0) : l[0] === l[t - 2] && l[1] === l[t - 1] && (l.closed = !0), b.totalPoints = $ + t, b
            }

            function s(e) {
                y(e[0]) && (e = [e]);
                var t, n, i, o, r = "",
                    s = e.length;
                for (n = 0; n < s; n++) {
                    for (o = e[n], r += "M" + x(o[0]) + "," + x(o[1]) + " C", t = o.length, i = 2; i < t; i++) r += x(o[i++]) + "," + x(o[i++]) + " " + x(o[i++]) + "," + x(o[i++]) + " " + x(o[i++]) + "," + x(o[i]) + " ";
                    o.closed && (r += "z")
                }
                return r
            }
            Math.pow;
            var a = Math.round,
                l = Math.PI,
                c = (Math.min, Math.abs);
            Math.max, n.d(t, {
                UY: () => r,
                a9: () => s,
                ag: () => i
            });
            var d = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                u = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
                p = l / 180,
                f = Math.sin,
                h = Math.cos,
                g = c,
                v = Math.sqrt,
                y = (Math.atan2, function(e) {
                    return "number" == typeof e
                }),
                m = 1e5,
                x = function(e) {
                    return a(e * m) / m || 0
                }
        },
        74692: function(e, t) {
            var n, i = Math.ceil,
                o = Math.max;
            ! function(t, n) {
                "use strict";
                "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return n(e)
                } : n(t)
            }("undefined" == typeof window ? this : window, (function(r, s) {
                "use strict";

                function a(e, t, n) {
                    var i, o, r = (n = n || me).createElement("script");
                    if (r.text = e, t)
                        for (i in xe)(o = t[i] || t.getAttribute && t.getAttribute(i)) && r.setAttribute(i, o);
                    n.head.appendChild(r).parentNode.removeChild(r)
                }

                function l(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? de[ue.call(e)] || "object" : typeof e
                }

                function c(e) {
                    var t = !!e && "length" in e && e.length,
                        n = l(e);
                    return !(ve(e) || ye(e)) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
                }

                function d(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }

                function u(e, t, n) {
                    return ve(t) ? be.grep(e, (function(e, i) {
                        return !!t.call(e, i, e) !== n
                    })) : t.nodeType ? be.grep(e, (function(e) {
                        return e === t !== n
                    })) : "string" == typeof t ? be.filter(t, e, n) : be.grep(e, (function(e) {
                        return -1 < ce.call(t, e) !== n
                    }))
                }

                function p(e, t) {
                    for (;
                        (e = e[t]) && 1 !== e.nodeType;);
                    return e
                }

                function f(e) {
                    return e
                }

                function h(e) {
                    throw e
                }

                function g(e, t, n, i) {
                    var o;
                    try {
                        e && ve(o = e.promise) ? o.call(e).done(t).fail(n) : e && ve(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
                    } catch (e) {
                        n.apply(void 0, [e])
                    }
                }

                function v() {
                    me.removeEventListener("DOMContentLoaded", v), r.removeEventListener("load", v), be.ready()
                }

                function y(e, t) {
                    return t.toUpperCase()
                }

                function m(e) {
                    return e.replace(qe, "ms-").replace(Me, y)
                }

                function x() {
                    this.expando = be.expando + x.uid++
                }

                function w(e, t, n) {
                    var i;
                    if (void 0 === n && 1 === e.nodeType)
                        if (i = "data-" + t.replace(Re, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                            try {
                                n = function(e) {
                                    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Fe.test(e) ? JSON.parse(e) : e)
                                }(n)
                            } catch (t) {}
                            We.set(e, t, n)
                        } else n = void 0;
                    return n
                }

                function b(e, t, n, i) {
                    var o, r, s = 20,
                        a = i ? function() {
                            return i.cur()
                        } : function() {
                            return be.css(e, t, "")
                        },
                        l = a(),
                        c = n && n[3] || (be.cssNumber[t] ? "" : "px"),
                        d = e.nodeType && (be.cssNumber[t] || "px" !== c && +l) && Ue.exec(be.css(e, t));
                    if (d && d[3] !== c) {
                        for (l /= 2, c = c || d[3], d = +l || 1; s--;) be.style(e, t, d + c), 0 >= (1 - r) * (1 - (r = a() / l || .5)) && (s = 0), d /= r;
                        d *= 2, be.style(e, t, d + c), n = n || []
                    }
                    return n && (d = +d || +l || 0, o = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = d, i.end = o)), o
                }

                function T(e) {
                    var t, n = e.ownerDocument,
                        i = e.nodeName,
                        o = Qe[i];
                    return o || (t = n.body.appendChild(n.createElement(i)), o = be.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Qe[i] = o, o)
                }

                function k(e, t) {
                    for (var n, i, o = [], r = 0, s = e.length; r < s; r++)(i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = ze.get(i, "display") || null, !o[r] && (i.style.display = "")), "" === i.style.display && Ge(i) && (o[r] = T(i))) : "none" !== n && (o[r] = "none", ze.set(i, "display", n)));
                    for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
                    return e
                }

                function S(e, t) {
                    var n;
                    return n = void 0 === e.getElementsByTagName ? void 0 === e.querySelectorAll ? [] : e.querySelectorAll(t || "*") : e.getElementsByTagName(t || "*"), void 0 === t || t && d(e, t) ? be.merge([e], n) : n
                }

                function C(e, t) {
                    for (var n = 0, i = e.length; n < i; n++) ze.set(e[n], "globalEval", !t || ze.get(t[n], "globalEval"))
                }

                function $(e, t, n, i, o) {
                    for (var r, s, a, c, d, u, p = t.createDocumentFragment(), f = [], h = 0, g = e.length; h < g; h++)
                        if ((r = e[h]) || 0 === r)
                            if ("object" === l(r)) be.merge(f, r.nodeType ? [r] : r);
                            else if (tt.test(r)) {
                        for (s = s || p.appendChild(t.createElement("div")), a = (Ke.exec(r) || ["", ""])[1].toLowerCase(), c = et[a] || et._default, s.innerHTML = c[1] + be.htmlPrefilter(r) + c[2], u = c[0]; u--;) s = s.lastChild;
                        be.merge(f, s.childNodes), (s = p.firstChild).textContent = ""
                    } else f.push(t.createTextNode(r));
                    for (p.textContent = "", h = 0; r = f[h++];)
                        if (i && -1 < be.inArray(r, i)) o && o.push(r);
                        else if (d = Ye(r), s = S(p.appendChild(r), "script"), d && C(s), n)
                        for (u = 0; r = s[u++];) Ze.test(r.type || "") && n.push(r);
                    return p
                }

                function A() {
                    return !0
                }

                function E() {
                    return !1
                }

                function D(e, t) {
                    return e === function() {
                        try {
                            return me.activeElement
                        } catch (e) {}
                    }() == ("focus" === t)
                }

                function j(e, t, n, i, o, r) {
                    var s, a;
                    if ("object" == typeof t) {
                        for (a in "string" != typeof n && (i = i || n, n = void 0), t) j(e, a, n, i, t[a], r);
                        return e
                    }
                    if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = E;
                    else if (!o) return e;
                    return 1 === r && (s = o, o = function(e) {
                        return be().off(e), s.apply(this, arguments)
                    }, o.guid = s.guid || (s.guid = be.guid++)), e.each((function() {
                        be.event.add(this, t, o, i, n)
                    }))
                }

                function N(e, t, n) {
                    return n ? (ze.set(e, t, !1), void be.event.add(e, t, {
                        namespace: !1,
                        handler: function(e) {
                            var i, o, r = ze.get(this, t);
                            if (1 & e.isTrigger && this[t]) {
                                if (r.length)(be.event.special[t] || {}).delegateType && e.stopPropagation();
                                else if (r = se.call(arguments), ze.set(this, t, r), i = n(this, t), this[t](), r !== (o = ze.get(this, t)) || i ? ze.set(this, t, !1) : o = {}, r !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
                            } else r.length && (ze.set(this, t, {
                                value: be.event.trigger(be.extend(r[0], be.Event.prototype), r.slice(1), this)
                            }), e.stopImmediatePropagation())
                        }
                    })) : void(void 0 === ze.get(e, t) && be.event.add(e, t, A))
                }

                function H(e, t) {
                    return d(e, "table") && d(11 === t.nodeType ? t.firstChild : t, "tr") && be(e).children("tbody")[0] || e
                }

                function L(e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                }

                function O(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
                }

                function P(e, t) {
                    var n, i, o, r, s, a;
                    if (1 === t.nodeType) {
                        if (ze.hasData(e) && (a = ze.get(e).events))
                            for (o in ze.remove(t, "handle events"), a)
                                for (n = 0, i = a[o].length; n < i; n++) be.event.add(t, o, a[o][n]);
                        We.hasData(e) && (r = We.access(e), s = be.extend({}, r), We.set(t, s))
                    }
                }

                function q(e, t) {
                    var n = t.nodeName.toLowerCase();
                    "input" === n && Je.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
                }

                function M(e, t, n, i) {
                    t = ae(t);
                    var o, r, s, l, c, d, u = 0,
                        p = e.length,
                        f = t[0],
                        h = ve(f);
                    if (h || 1 < p && "string" == typeof f && !ge.checkClone && st.test(f)) return e.each((function(o) {
                        var r = e.eq(o);
                        h && (t[0] = f.call(this, o, r.html())), M(r, t, n, i)
                    }));
                    if (p && (r = (o = $(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
                        for (l = (s = be.map(S(o, "script"), L)).length; u < p; u++) c = o, u != p - 1 && (c = be.clone(c, !0, !0), l && be.merge(s, S(c, "script"))), n.call(e[u], c, u);
                        if (l)
                            for (d = s[s.length - 1].ownerDocument, be.map(s, O), u = 0; u < l; u++) c = s[u], Ze.test(c.type || "") && !ze.access(c, "globalEval") && be.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? be._evalUrl && !c.noModule && be._evalUrl(c.src, {
                                nonce: c.nonce || c.getAttribute("nonce")
                            }, d) : a(c.textContent.replace(at, ""), c, d))
                    }
                    return e
                }

                function I(e, t, n) {
                    for (var i, o = t ? be.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || be.cleanData(S(i)), i.parentNode && (n && Ye(i) && C(S(i, "script")), i.parentNode.removeChild(i));
                    return e
                }

                function z(e, t, n) {
                    var i, o, r, s, a = e.style;
                    return (n = n || ct(e)) && ("" === (s = n.getPropertyValue(t) || n[t]) && !Ye(e) && (s = be.style(e, t)), !ge.pixelBoxStyles() && lt.test(s) && ut.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 === s ? s : s + ""
                }

                function W(e, t) {
                    return {
                        get: function() {
                            return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                        }
                    }
                }

                function F(e) {
                    return be.cssProps[e] || ht[e] || (e in ft ? e : ht[e] = function(e) {
                        for (var t = e[0].toUpperCase() + e.slice(1), n = pt.length; n--;)
                            if ((e = pt[n] + t) in ft) return e
                    }(e) || e)
                }

                function R(e, t, n) {
                    var i = Ue.exec(t);
                    return i ? o(0, i[2] - (n || 0)) + (i[3] || "px") : t
                }

                function B(e, t, n, r, s, a) {
                    var l = "width" === t ? 1 : 0,
                        c = 0,
                        d = 0;
                    if (n === (r ? "border" : "content")) return 0;
                    for (; 4 > l; l += 2) "margin" === n && (d += be.css(e, n + _e[l], !0, s)), r ? ("content" === n && (d -= be.css(e, "padding" + _e[l], !0, s)), "margin" !== n && (d -= be.css(e, "border" + _e[l] + "Width", !0, s))) : (d += be.css(e, "padding" + _e[l], !0, s), "padding" === n ? c += be.css(e, "border" + _e[l] + "Width", !0, s) : d += be.css(e, "border" + _e[l] + "Width", !0, s));
                    return !r && 0 <= a && (d += o(0, i(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - d - c - .5)) || 0), d
                }

                function U(e, t, n) {
                    var i = ct(e),
                        o = (!ge.boxSizingReliable() || n) && "border-box" === be.css(e, "boxSizing", !1, i),
                        r = o,
                        s = z(e, t, i),
                        a = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (lt.test(s)) {
                        if (!n) return s;
                        s = "auto"
                    }
                    return (!ge.boxSizingReliable() && o || !ge.reliableTrDimensions() && d(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === be.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === be.css(e, "boxSizing", !1, i), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + B(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
                }

                function _(e, t, n, i, o) {
                    return new _.prototype.init(e, t, n, i, o)
                }

                function X() {
                    wt && (!1 === me.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(X) : r.setTimeout(X, be.fx.interval), be.fx.tick())
                }

                function Y() {
                    return r.setTimeout((function() {
                        xt = void 0
                    })), xt = Date.now()
                }

                function V(e, t) {
                    var n, i = 0,
                        o = {
                            height: e
                        };
                    for (t = t ? 1 : 0; 4 > i; i += 2 - t) o["margin" + (n = _e[i])] = o["padding" + n] = e;
                    return t && (o.opacity = o.width = e), o
                }

                function G(e, t, n) {
                    for (var i, o = (Q.tweeners[t] || []).concat(Q.tweeners["*"]), r = 0, s = o.length; r < s; r++)
                        if (i = o[r].call(n, t, e)) return i
                }

                function Q(e, t, n) {
                    var i, r, s = 0,
                        a = Q.prefilters.length,
                        l = be.Deferred().always((function() {
                            delete c.elem
                        })),
                        c = function() {
                            if (r) return !1;
                            for (var t = xt || Y(), n = o(0, d.startTime + d.duration - t), i = 1 - (n / d.duration || 0), s = 0, a = d.tweens.length; s < a; s++) d.tweens[s].run(i);
                            return l.notifyWith(e, [d, i, n]), 1 > i && a ? n : (a || l.notifyWith(e, [d, 1, 0]), l.resolveWith(e, [d]), !1)
                        },
                        d = l.promise({
                            elem: e,
                            props: be.extend({}, t),
                            opts: be.extend(!0, {
                                specialEasing: {},
                                easing: be.easing._default
                            }, n),
                            originalProperties: t,
                            originalOptions: n,
                            startTime: xt || Y(),
                            duration: n.duration,
                            tweens: [],
                            createTween: function(t, n) {
                                var i = be.Tween(e, d.opts, t, n, d.opts.specialEasing[t] || d.opts.easing);
                                return d.tweens.push(i), i
                            },
                            stop: function(t) {
                                var n = 0,
                                    i = t ? d.tweens.length : 0;
                                if (r) return this;
                                for (r = !0; n < i; n++) d.tweens[n].run(1);
                                return t ? (l.notifyWith(e, [d, 1, 0]), l.resolveWith(e, [d, t])) : l.rejectWith(e, [d, t]), this
                            }
                        }),
                        u = d.props;
                    for (function(e, t) {
                            var n, i, o, r, s;
                            for (n in e)
                                if (o = t[i = m(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n != i && (e[i] = r, delete e[n]), (s = be.cssHooks[i]) && "expand" in s)
                                    for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                                else t[i] = o
                        }(u, d.opts.specialEasing); s < a; s++)
                        if (i = Q.prefilters[s].call(d, e, u, d.opts)) return ve(i.stop) && (be._queueHooks(d.elem, d.opts.queue).stop = i.stop.bind(i)), i;
                    return be.map(u, G, d), ve(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), be.fx.timer(be.extend(c, {
                        elem: e,
                        anim: d,
                        queue: d.opts.queue
                    })), d
                }

                function J(e) {
                    return (e.match(He) || []).join(" ")
                }

                function K(e) {
                    return e.getAttribute && e.getAttribute("class") || ""
                }

                function Z(e) {
                    return Array.isArray(e) ? e : "string" == typeof e && e.match(He) || []
                }

                function ee(e, t, n, i) {
                    if (Array.isArray(t)) be.each(t, (function(t, o) {
                        n || Lt.test(e) ? i(e, o) : ee(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
                    }));
                    else if (n || "object" !== l(t)) i(e, t);
                    else
                        for (var o in t) ee(e + "[" + o + "]", t[o], n, i)
                }

                function te(e) {
                    return function(t, n) {
                        "string" != typeof t && (n = t, t = "*");
                        var i, o = 0,
                            r = t.toLowerCase().match(He) || [];
                        if (ve(n))
                            for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                    }
                }

                function ne(e, t, n, i) {
                    function o(a) {
                        var l;
                        return r[a] = !0, be.each(e[a] || [], (function(e, a) {
                            var c = a(t, n, i);
                            return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
                        })), l
                    }
                    var r = {},
                        s = e === Ut;
                    return o(t.dataTypes[0]) || !r["*"] && o("*")
                }

                function ie(e, t) {
                    var n, i, o = be.ajaxSettings.flatOptions || {};
                    for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
                    return i && be.extend(!0, e, i), e
                }
                var oe = [],
                    re = Object.getPrototypeOf,
                    se = oe.slice,
                    ae = oe.flat ? function(e) {
                        return oe.flat.call(e)
                    } : function(e) {
                        return oe.concat.apply([], e)
                    },
                    le = oe.push,
                    ce = oe.indexOf,
                    de = {},
                    ue = de.toString,
                    pe = de.hasOwnProperty,
                    fe = pe.toString,
                    he = fe.call(Object),
                    ge = {},
                    ve = function(e) {
                        return "function" == typeof e && "number" != typeof e.nodeType
                    },
                    ye = function(e) {
                        return null != e && e === e.window
                    },
                    me = r.document,
                    xe = {
                        type: !0,
                        src: !0,
                        nonce: !0,
                        noModule: !0
                    },
                    we = "3.5.1",
                    be = function(e, t) {
                        return new be.fn.init(e, t)
                    };
                be.fn = be.prototype = {
                    jquery: we,
                    constructor: be,
                    length: 0,
                    toArray: function() {
                        return se.call(this)
                    },
                    get: function(e) {
                        return null == e ? se.call(this) : 0 > e ? this[e + this.length] : this[e]
                    },
                    pushStack: function(e) {
                        var t = be.merge(this.constructor(), e);
                        return t.prevObject = this, t
                    },
                    each: function(e) {
                        return be.each(this, e)
                    },
                    map: function(e) {
                        return this.pushStack(be.map(this, (function(t, n) {
                            return e.call(t, n, t)
                        })))
                    },
                    slice: function() {
                        return this.pushStack(se.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    even: function() {
                        return this.pushStack(be.grep(this, (function(e, t) {
                            return (t + 1) % 2
                        })))
                    },
                    odd: function() {
                        return this.pushStack(be.grep(this, (function(e, t) {
                            return t % 2
                        })))
                    },
                    eq: function(e) {
                        var t = this.length,
                            n = +e + (0 > e ? t : 0);
                        return this.pushStack(0 <= n && n < t ? [this[n]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: le,
                    sort: oe.sort,
                    splice: oe.splice
                }, be.extend = be.fn.extend = function() {
                    var e, t, n, i, o, r, s = arguments[0] || {},
                        a = 1,
                        l = arguments.length,
                        c = !1;
                    for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || ve(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                        if (null != (e = arguments[a]))
                            for (t in e) i = e[t], "__proto__" !== t && s !== i && (c && i && (be.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[t], r = o && !Array.isArray(n) ? [] : o || be.isPlainObject(n) ? n : {}, o = !1, s[t] = be.extend(c, r, i)) : void 0 !== i && (s[t] = i));
                    return s
                }, be.extend({
                    expando: "jQuery" + (we + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(e) {
                        throw new Error(e)
                    },
                    noop: function() {},
                    isPlainObject: function(e) {
                        var t, n;
                        return !(!e || "[object Object]" !== ue.call(e) || (t = re(e), t && (n = pe.call(t, "constructor") && t.constructor, "function" != typeof n || fe.call(n) !== he)))
                    },
                    isEmptyObject: function(e) {
                        for (var t in e) return !1;
                        return !0
                    },
                    globalEval: function(e, t, n) {
                        a(e, {
                            nonce: t && t.nonce
                        }, n)
                    },
                    each: function(e, t) {
                        var n, i = 0;
                        if (c(e))
                            for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                        else
                            for (i in e)
                                if (!1 === t.call(e[i], i, e[i])) break;
                        return e
                    },
                    makeArray: function(e, t) {
                        var n = t || [];
                        return null != e && (c(Object(e)) ? be.merge(n, "string" == typeof e ? [e] : e) : le.call(n, e)), n
                    },
                    inArray: function(e, t, n) {
                        return null == t ? -1 : ce.call(t, e, n)
                    },
                    merge: function(e, t) {
                        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                        return e.length = o, e
                    },
                    grep: function(e, t, n) {
                        for (var i = [], o = 0, r = e.length; o < r; o++) !t(e[o], o) != !n && i.push(e[o]);
                        return i
                    },
                    map: function(e, t, n) {
                        var i, o, r = 0,
                            s = [];
                        if (c(e))
                            for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
                        else
                            for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
                        return ae(s)
                    },
                    guid: 1,
                    support: ge
                }), "function" == typeof Symbol && (be.fn[Symbol.iterator] = oe[Symbol.iterator]), be.each(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol"], (function(e, t) {
                    de["[object " + t + "]"] = t.toLowerCase()
                }));
                var Te = function(e) {
                    function t(e, t, n, i) {
                        var o, r, s, a, l, c, d, p = t && t.ownerDocument,
                            h = t ? t.nodeType : 9;
                        if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
                        if (!i && (H(t), t = t || L, P)) {
                            if (11 !== h && (l = ye.exec(e)))
                                if (o = l[1]) {
                                    if (9 === h) {
                                        if (!(s = t.getElementById(o))) return n;
                                        if (s.id === o) return n.push(s), n
                                    } else if (p && (s = p.getElementById(o)) && z(t, s) && s.id === o) return n.push(s), n
                                } else {
                                    if (l[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                                    if ((o = l[3]) && T.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(o)), n
                                }
                            if (T.qsa && !Y[e + " "] && (!q || !q.test(e)) && (1 !== h || "object" !== t.nodeName.toLowerCase())) {
                                if (d = e, p = t, 1 === h && (ce.test(e) || le.test(e))) {
                                    for ((p = me.test(e) && u(t.parentNode) || t) === t && T.scope || ((a = t.getAttribute("id")) ? a = a.replace(be, Te) : t.setAttribute("id", a = W)), r = (c = $(e)).length; r--;) c[r] = (a ? "#" + a : ":scope") + " " + f(c[r]);
                                    d = c.join(",")
                                }
                                try {
                                    return Z.apply(n, p.querySelectorAll(d)), n
                                } catch (t) {
                                    Y(e, !0)
                                } finally {
                                    a === W && t.removeAttribute("id")
                                }
                            }
                        }
                        return E(e.replace(se, "$1"), t, n, i)
                    }

                    function n() {
                        var e = [];
                        return function t(n, i) {
                            return e.push(n + " ") > k.cacheLength && delete t[e.shift()], t[n + " "] = i
                        }
                    }

                    function i(e) {
                        return e[W] = !0, e
                    }

                    function o(e) {
                        var t = L.createElement("fieldset");
                        try {
                            return !!e(t)
                        } catch (t) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null
                        }
                    }

                    function r(e, t) {
                        for (var n = e.split("|"), i = n.length; i--;) k.attrHandle[n[i]] = t
                    }

                    function s(e, t) {
                        var n = t && e,
                            i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                        if (i) return i;
                        if (n)
                            for (; n = n.nextSibling;)
                                if (n === t) return -1;
                        return e ? 1 : -1
                    }

                    function a(e) {
                        return function(t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e
                        }
                    }

                    function l(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }

                    function c(e) {
                        return function(t) {
                            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Se(t) === e : t.disabled === e : !!("label" in t) && t.disabled === e
                        }
                    }

                    function d(e) {
                        return i((function(t) {
                            return t = +t, i((function(n, i) {
                                for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                            }))
                        }))
                    }

                    function u(e) {
                        return e && void 0 !== e.getElementsByTagName && e
                    }

                    function p() {}

                    function f(e) {
                        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                        return i
                    }

                    function h(e, t, n) {
                        var i = t.dir,
                            o = t.next,
                            r = o || i,
                            s = n && "parentNode" === r,
                            a = B++;
                        return t.first ? function(t, n, o) {
                            for (; t = t[i];)
                                if (1 === t.nodeType || s) return e(t, n, o);
                            return !1
                        } : function(t, n, l) {
                            var c, d, u, p = [R, a];
                            if (l) {
                                for (; t = t[i];)
                                    if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                            } else
                                for (; t = t[i];)
                                    if (1 === t.nodeType || s)
                                        if (d = (u = t[W] || (t[W] = {}))[t.uniqueID] || (u[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                                        else {
                                            if ((c = d[r]) && c[0] === R && c[1] === a) return p[2] = c[2];
                                            if (d[r] = p, p[2] = e(t, n, l)) return !0
                                        } return !1
                        }
                    }

                    function g(e) {
                        return 1 < e.length ? function(t, n, i) {
                            for (var o = e.length; o--;)
                                if (!e[o](t, n, i)) return !1;
                            return !0
                        } : e[0]
                    }

                    function v(e, n, i) {
                        for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
                        return i
                    }

                    function y(e, t, n, i, o) {
                        for (var r, s = [], a = 0, l = e.length; a < l; a++)(r = e[a]) && (!n || n(r, i, o)) && (s.push(r), null != t && t.push(a));
                        return s
                    }

                    function m(e, t, n, o, r, s) {
                        return o && !o[W] && (o = m(o)), r && !r[W] && (r = m(r, s)), i((function(i, s, a, l) {
                            var c, d, u, p = [],
                                f = [],
                                h = s.length,
                                g = i || v(t || "*", a.nodeType ? [a] : a, []),
                                m = !e || !i && t ? g : y(g, p, e, a, l),
                                x = n ? r || (i ? e : h || o) ? [] : s : m;
                            if (n && n(m, x, a, l), o)
                                for (c = y(x, f), o(c, [], a, l), d = c.length; d--;)(u = c[d]) && (x[f[d]] = !(m[f[d]] = u));
                            if (i) {
                                if (r || e) {
                                    if (r) {
                                        for (c = [], d = x.length; d--;)(u = x[d]) && c.push(m[d] = u);
                                        r(null, x = [], c, l)
                                    }
                                    for (d = x.length; d--;)(u = x[d]) && -1 < (c = r ? te(i, u) : p[d]) && (i[c] = !(s[c] = u))
                                }
                            } else x = y(x === s ? x.splice(h, x.length) : x), r ? r(null, s, x, l) : Z.apply(s, x)
                        }))
                    }

                    function x(e) {
                        for (var t, n, i, o = e.length, r = k.relative[e[0].type], s = r || k.relative[" "], a = r ? 1 : 0, l = h((function(e) {
                                return e === t
                            }), s, !0), c = h((function(e) {
                                return -1 < te(t, e)
                            }), s, !0), d = [function(e, n, i) {
                                var o = !r && (i || n !== D) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                                return t = null, o
                            }]; a < o; a++)
                            if (n = k.relative[e[a].type]) d = [h(g(d), n)];
                            else {
                                if ((n = k.filter[e[a].type].apply(null, e[a].matches))[W]) {
                                    for (i = ++a; i < o && !k.relative[e[i].type]; i++);
                                    return m(1 < a && g(d), 1 < a && f(e.slice(0, a - 1).concat({
                                        value: " " === e[a - 2].type ? "*" : ""
                                    })).replace(se, "$1"), n, a < i && x(e.slice(a, i)), i < o && x(e = e.slice(i)), i < o && f(e))
                                }
                                d.push(n)
                            }
                        return g(d)
                    }

                    function w(e, n) {
                        var o = 0 < n.length,
                            r = 0 < e.length,
                            s = function(i, s, a, l, c) {
                                var d, u, p, f = 0,
                                    h = "0",
                                    g = i && [],
                                    v = [],
                                    m = D,
                                    x = i || r && k.find.TAG("*", c),
                                    w = R += null == m ? 1 : Math.random() || .1,
                                    b = x.length;
                                for (c && (D = s == L || s || c); h !== b && null != (d = x[h]); h++) {
                                    if (r && d) {
                                        for (u = 0, s || d.ownerDocument == L || (H(d), a = !P); p = e[u++];)
                                            if (p(d, s || L, a)) {
                                                l.push(d);
                                                break
                                            }
                                        c && (R = w)
                                    }
                                    o && ((d = !p && d) && f--, i && g.push(d))
                                }
                                if (f += h, o && h !== f) {
                                    for (u = 0; p = n[u++];) p(g, v, s, a);
                                    if (i) {
                                        if (0 < f)
                                            for (; h--;) g[h] || v[h] || (v[h] = J.call(l));
                                        v = y(v)
                                    }
                                    Z.apply(l, v), c && !i && 0 < v.length && 1 < f + n.length && t.uniqueSort(l)
                                }
                                return c && (R = w, D = m), g
                            };
                        return o ? i(s) : s
                    }
                    var b, T, k, S, C, $, A, E, D, j, N, H, L, O, P, q, M, I, z, W = "sizzle" + 1 * new Date,
                        F = e.document,
                        R = 0,
                        B = 0,
                        U = n(),
                        _ = n(),
                        X = n(),
                        Y = n(),
                        V = function(e, t) {
                            return e === t && (N = !0), 0
                        },
                        G = {}.hasOwnProperty,
                        Q = [],
                        J = Q.pop,
                        K = Q.push,
                        Z = Q.push,
                        ee = Q.slice,
                        te = function(e, t) {
                            for (var n = 0, i = e.length; n < i; n++)
                                if (e[n] === t) return n;
                            return -1
                        },
                        ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        ie = "[\\x20\\t\\r\\n\\f]",
                        oe = "(?:\\\\[\\da-fA-F]{1,6}" + ie + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                        re = /[\x20\t\r\n\f]+/g,
                        se = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
                        ae = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
                        le = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
                        ce = /[\x20\t\r\n\f]|>/,
                        de = /:((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                        ue = /^(?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+$/,
                        pe = {
                            ID: /^#((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)/,
                            CLASS: /^\.((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)/,
                            TAG: /^((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+|[*])/,
                            ATTR: /^\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+))|)[\x20\t\r\n\f]*\]/,
                            PSEUDO: /^:((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\[^\r\n\f]|[\w-]|[^\0-\x7f])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                            CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                            bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                            needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
                        },
                        fe = /HTML$/i,
                        he = /^(?:input|select|textarea|button)$/i,
                        ge = /^h\d$/i,
                        ve = /^[^{]+\{\s*\[native \w/,
                        ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        me = /[+~]/,
                        xe = /\\[\da-fA-F]{1,6}[\x20\t\r\n\f]?|\\([^\r\n\f])/g,
                        we = function(e, t) {
                            var n = String.fromCharCode,
                                i = "0x" + e.slice(1) - 65536;
                            return t || (0 > i ? n(i + 65536) : n(55296 | i >> 10, 56320 | 1023 & i))
                        },
                        be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        Te = function(e, t) {
                            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                        },
                        ke = function() {
                            H()
                        },
                        Se = h((function(e) {
                            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                        }), {
                            dir: "parentNode",
                            next: "legend"
                        });
                    try {
                        Z.apply(Q = ee.call(F.childNodes), F.childNodes), Q[F.childNodes.length].nodeType
                    } catch (t) {
                        Z = {
                            apply: Q.length ? function(e, t) {
                                K.apply(e, ee.call(t))
                            } : function(e, t) {
                                for (var n = e.length, i = 0; e[n++] = t[i++];);
                                e.length = n - 1
                            }
                        }
                    }
                    for (b in T = t.support = {}, C = t.isXML = function(e) {
                            var t = e.namespaceURI,
                                n = (e.ownerDocument || e).documentElement;
                            return !fe.test(t || n && n.nodeName || "HTML")
                        }, H = t.setDocument = function(e) {
                            var t, n, i = e ? e.ownerDocument || e : F;
                            return i != L && 9 === i.nodeType && i.documentElement ? (O = (L = i).documentElement, P = !C(L), F != L && (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ke, !1) : n.attachEvent && n.attachEvent("onunload", ke)), T.scope = o((function(e) {
                                return O.appendChild(e).appendChild(L.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                            })), T.attributes = o((function(e) {
                                return e.className = "i", !e.getAttribute("className")
                            })), T.getElementsByTagName = o((function(e) {
                                return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length
                            })), T.getElementsByClassName = ve.test(L.getElementsByClassName), T.getById = o((function(e) {
                                return O.appendChild(e).id = W, !L.getElementsByName || !L.getElementsByName(W).length
                            })), T.getById ? (k.filter.ID = function(e) {
                                var t = e.replace(xe, we);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }, k.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && P) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : []
                                }
                            }) : (k.filter.ID = function(e) {
                                var t = e.replace(xe, we);
                                return function(e) {
                                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }, k.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && P) {
                                    var n, i, o, r = t.getElementById(e);
                                    if (r) {
                                        if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                        for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                                    }
                                    return []
                                }
                            }), k.find.TAG = T.getElementsByTagName ? function(e, t) {
                                return void 0 === t.getElementsByTagName ? T.qsa ? t.querySelectorAll(e) : void 0 : t.getElementsByTagName(e)
                            } : function(e, t) {
                                var n, i = [],
                                    o = 0,
                                    r = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                                    return i
                                }
                                return r
                            }, k.find.CLASS = T.getElementsByClassName && function(e, t) {
                                if (void 0 !== t.getElementsByClassName && P) return t.getElementsByClassName(e)
                            }, M = [], q = [], (T.qsa = ve.test(L.querySelectorAll)) && (o((function(e) {
                                var t;
                                O.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ie + "*(?:value|" + ne + ")"), e.querySelectorAll("[id~=" + W + "-]").length || q.push("~="), (t = L.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || q.push("\\[" + ie + "*name" + ie + "*=" + ie + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + W + "+*").length || q.push(".#.+[+~]"), e.querySelectorAll("\\\f"), q.push("[\\r\\n\\f]")
                            })), o((function(e) {
                                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var t = L.createElement("input");
                                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ie + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), O.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
                            }))), (T.matchesSelector = ve.test(I = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o((function(e) {
                                T.disconnectedMatch = I.call(e, "*"), I.call(e, "[s!='']:x"), M.push("!=", ":(" + oe + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[" + ie + "*(" + oe + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ie + "*\\])*)|.*)\\)|)")
                            })), q = q.length && new RegExp(q.join("|")), M = M.length && new RegExp(M.join("|")), t = ve.test(O.compareDocumentPosition), z = t || ve.test(O.contains) ? function(e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e,
                                    i = t && t.parentNode;
                                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                            } : function(e, t) {
                                if (t)
                                    for (; t = t.parentNode;)
                                        if (t === e) return !0;
                                return !1
                            }, V = t ? function(e, t) {
                                if (e === t) return N = !0, 0;
                                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !T.sortDetached && t.compareDocumentPosition(e) === n ? e == L || e.ownerDocument == F && z(F, e) ? -1 : t == L || t.ownerDocument == F && z(F, t) ? 1 : j ? te(j, e) - te(j, t) : 0 : 4 & n ? -1 : 1)
                            } : function(e, t) {
                                if (e === t) return N = !0, 0;
                                var n, i = 0,
                                    o = e.parentNode,
                                    r = t.parentNode,
                                    a = [e],
                                    l = [t];
                                if (!o || !r) return e == L ? -1 : t == L ? 1 : o ? -1 : r ? 1 : j ? te(j, e) - te(j, t) : 0;
                                if (o === r) return s(e, t);
                                for (n = e; n = n.parentNode;) a.unshift(n);
                                for (n = t; n = n.parentNode;) l.unshift(n);
                                for (; a[i] === l[i];) i++;
                                return i ? s(a[i], l[i]) : a[i] == F ? -1 : l[i] == F ? 1 : 0
                            }, L) : L
                        }, t.matches = function(e, n) {
                            return t(e, null, null, n)
                        }, t.matchesSelector = function(e, n) {
                            if (H(e), T.matchesSelector && P && !Y[n + " "] && (!M || !M.test(n)) && (!q || !q.test(n))) try {
                                var i = I.call(e, n);
                                if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                            } catch (e) {
                                Y(n, !0)
                            }
                            return 0 < t(n, L, null, [e]).length
                        }, t.contains = function(e, t) {
                            return (e.ownerDocument || e) != L && H(e), z(e, t)
                        }, t.attr = function(e, t) {
                            (e.ownerDocument || e) != L && H(e);
                            var n = k.attrHandle[t.toLowerCase()],
                                i = n && G.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
                            return void 0 === i ? T.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null : i
                        }, t.escape = function(e) {
                            return (e + "").replace(be, Te)
                        }, t.error = function(e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        }, t.uniqueSort = function(e) {
                            var t, n = [],
                                i = 0,
                                o = 0;
                            if (N = !T.detectDuplicates, j = !T.sortStable && e.slice(0), e.sort(V), N) {
                                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                                for (; i--;) e.splice(n[i], 1)
                            }
                            return j = null, e
                        }, S = t.getText = function(e) {
                            var t, n = "",
                                i = 0,
                                o = e.nodeType;
                            if (o) {
                                if (1 === o || 9 === o || 11 === o) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                                } else if (3 === o || 4 === o) return e.nodeValue
                            } else
                                for (; t = e[i++];) n += S(t);
                            return n
                        }, k = t.selectors = {
                            cacheLength: 50,
                            createPseudo: i,
                            match: pe,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(e) {
                                    return e[1] = e[1].replace(xe, we), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                },
                                CHILD: function(e) {
                                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (!e[3] && t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                                },
                                PSEUDO: function(e) {
                                    var t, n = !e[6] && e[2];
                                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = $(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function(e) {
                                    var t = e.replace(xe, we).toLowerCase();
                                    return "*" === e ? function() {
                                        return !0
                                    } : function(e) {
                                        return e.nodeName && e.nodeName.toLowerCase() === t
                                    }
                                },
                                CLASS: function(e) {
                                    var t = U[e + " "];
                                    return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && U(e, (function(e) {
                                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                    }))
                                },
                                ATTR: function(e, n, i) {
                                    return function(o) {
                                        var r = t.attr(o, e);
                                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && -1 < r.indexOf(i) : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? -1 < (" " + r.replace(re, " ") + " ").indexOf(i) : "|=" == n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                                    }
                                },
                                CHILD: function(e, t, n, i, o) {
                                    var r = "nth" !== e.slice(0, 3),
                                        s = "last" !== e.slice(-4),
                                        a = "of-type" === t;
                                    return 1 === i && 0 === o ? function(e) {
                                        return !!e.parentNode
                                    } : function(t, n, l) {
                                        var c, d, u, p, f, h, g = r == s ? "previousSibling" : "nextSibling",
                                            v = t.parentNode,
                                            y = a && t.nodeName.toLowerCase(),
                                            m = !l && !a,
                                            x = !1;
                                        if (v) {
                                            if (r) {
                                                for (; g;) {
                                                    for (p = t; p = p[g];)
                                                        if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                                    h = g = "only" === e && !h && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (h = [s ? v.firstChild : v.lastChild], s && m) {
                                                for (x = (f = (c = (d = (u = (p = v)[W] || (p[W] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === R && c[1]) && c[2], p = f && v.childNodes[f]; p = ++f && p && p[g] || (x = f = 0) || h.pop();)
                                                    if (1 === p.nodeType && ++x && p === t) {
                                                        d[e] = [R, f, x];
                                                        break
                                                    }
                                            } else if (m && (x = f = (c = (d = (u = (p = t)[W] || (p[W] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === R && c[1]), !1 === x)
                                                for (;
                                                    (p = ++f && p && p[g] || (x = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((d = (u = p[W] || (p[W] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [R, x]), p !== t)););
                                            return (x -= o) === i || 0 == x % i && 0 <= x / i
                                        }
                                    }
                                },
                                PSEUDO: function(e, n) {
                                    var o, r = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                    return r[W] ? r(n) : 1 < r.length ? (o = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? i((function(e, t) {
                                        for (var i, o = r(e, n), s = o.length; s--;) e[i = te(e, o[s])] = !(t[i] = o[s])
                                    })) : function(e) {
                                        return r(e, 0, o)
                                    }) : r
                                }
                            },
                            pseudos: {
                                not: i((function(e) {
                                    var t = [],
                                        n = [],
                                        o = A(e.replace(se, "$1"));
                                    return o[W] ? i((function(e, t, n, i) {
                                        for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                                    })) : function(e, i, r) {
                                        return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                                    }
                                })),
                                has: i((function(e) {
                                    return function(n) {
                                        return 0 < t(e, n).length
                                    }
                                })),
                                contains: i((function(e) {
                                    return e = e.replace(xe, we),
                                        function(t) {
                                            return -1 < (t.textContent || S(t)).indexOf(e)
                                        }
                                })),
                                lang: i((function(e) {
                                    return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(),
                                        function(t) {
                                            var n;
                                            do {
                                                if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                            } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1
                                        }
                                })),
                                target: function(t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id
                                },
                                root: function(e) {
                                    return e === O
                                },
                                focus: function(e) {
                                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                },
                                enabled: c(!1),
                                disabled: c(!0),
                                checked: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                                },
                                selected: function(e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                },
                                empty: function(e) {
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        if (6 > e.nodeType) return !1;
                                    return !0
                                },
                                parent: function(e) {
                                    return !k.pseudos.empty(e)
                                },
                                header: function(e) {
                                    return ge.test(e.nodeName)
                                },
                                input: function(e) {
                                    return he.test(e.nodeName)
                                },
                                button: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && "button" === e.type || "button" === t
                                },
                                text: function(e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                },
                                first: d((function() {
                                    return [0]
                                })),
                                last: d((function(e, t) {
                                    return [t - 1]
                                })),
                                eq: d((function(e, t, n) {
                                    return [0 > n ? n + t : n]
                                })),
                                even: d((function(e, t) {
                                    for (var n = 0; n < t; n += 2) e.push(n);
                                    return e
                                })),
                                odd: d((function(e, t) {
                                    for (var n = 1; n < t; n += 2) e.push(n);
                                    return e
                                })),
                                lt: d((function(e, t, n) {
                                    for (var i = 0 > n ? n + t : n > t ? t : n; 0 <= --i;) e.push(i);
                                    return e
                                })),
                                gt: d((function(e, t, n) {
                                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                                    return e
                                }))
                            }
                        }, k.pseudos.nth = k.pseudos.eq, {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) k.pseudos[b] = a(b);
                    for (b in {
                            submit: !0,
                            reset: !0
                        }) k.pseudos[b] = l(b);
                    return p.prototype = k.filters = k.pseudos, k.setFilters = new p, $ = t.tokenize = function(e, n) {
                        var i, o, r, s, a, l, c, d = _[e + " "];
                        if (d) return n ? 0 : d.slice(0);
                        for (a = e, l = [], c = k.preFilter; a;) {
                            for (s in (!i || (o = ae.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = le.exec(a)) && (i = o.shift(), r.push({
                                    value: i,
                                    type: o[0].replace(se, " ")
                                }), a = a.slice(i.length)), k.filter)(o = pe[s].exec(a)) && (!c[s] || (o = c[s](o))) && (i = o.shift(), r.push({
                                value: i,
                                type: s,
                                matches: o
                            }), a = a.slice(i.length));
                            if (!i) break
                        }
                        return n ? a.length : a ? t.error(e) : _(e, l).slice(0)
                    }, A = t.compile = function(e, t) {
                        var n, i = [],
                            o = [],
                            r = X[e + " "];
                        if (!r) {
                            for (t || (t = $(e)), n = t.length; n--;)(r = x(t[n]))[W] ? i.push(r) : o.push(r);
                            (r = X(e, w(o, i))).selector = e
                        }
                        return r
                    }, E = t.select = function(e, t, n, i) {
                        var o, r, s, a, l, c = "function" == typeof e && e,
                            d = !i && $(e = c.selector || e);
                        if (n = n || [], 1 === d.length) {
                            if (2 < (r = d[0] = d[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && P && k.relative[r[1].type]) {
                                if (!(t = (k.find.ID(s.matches[0].replace(xe, we), t) || [])[0])) return n;
                                c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                            }
                            for (o = pe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !k.relative[a = s.type]);)
                                if ((l = k.find[a]) && (i = l(s.matches[0].replace(xe, we), me.test(r[0].type) && u(t.parentNode) || t))) {
                                    if (r.splice(o, 1), !(e = i.length && f(r))) return Z.apply(n, i), n;
                                    break
                                }
                        }
                        return (c || A(e, d))(i, t, !P, n, !t || me.test(e) && u(t.parentNode) || t), n
                    }, T.sortStable = W.split("").sort(V).join("") === W, T.detectDuplicates = !!N, H(), T.sortDetached = o((function(e) {
                        return 1 & e.compareDocumentPosition(L.createElement("fieldset"))
                    })), o((function(e) {
                        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                    })) || r("type|href|height|width", (function(e, t, n) {
                        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    })), T.attributes && o((function(e) {
                        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                    })) || r("value", (function(e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                    })), o((function(e) {
                        return null == e.getAttribute("disabled")
                    })) || r(ne, (function(e, t, n) {
                        var i;
                        if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    })), t
                }(r);
                be.find = Te, be.expr = Te.selectors, be.expr[":"] = be.expr.pseudos, be.uniqueSort = be.unique = Te.uniqueSort, be.text = Te.getText, be.isXMLDoc = Te.isXML, be.contains = Te.contains, be.escapeSelector = Te.escape;
                var ke = function(e, t, n) {
                        for (var i = [];
                            (e = e[t]) && 9 !== e.nodeType;)
                            if (1 === e.nodeType) {
                                if (void 0 !== n && be(e).is(n)) break;
                                i.push(e)
                            }
                        return i
                    },
                    Se = function(e, t) {
                        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                        return n
                    },
                    Ce = be.expr.match.needsContext,
                    $e = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                be.filter = function(e, t, n) {
                    var i = t[0];
                    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? be.find.matchesSelector(i, e) ? [i] : [] : be.find.matches(e, be.grep(t, (function(e) {
                        return 1 === e.nodeType
                    })))
                }, be.fn.extend({
                    find: function(e) {
                        var t, n, i = this.length,
                            o = this;
                        if ("string" != typeof e) return this.pushStack(be(e).filter((function() {
                            for (t = 0; t < i; t++)
                                if (be.contains(o[t], this)) return !0
                        })));
                        for (n = this.pushStack([]), t = 0; t < i; t++) be.find(e, o[t], n);
                        return 1 < i ? be.uniqueSort(n) : n
                    },
                    filter: function(e) {
                        return this.pushStack(u(this, e || [], !1))
                    },
                    not: function(e) {
                        return this.pushStack(u(this, e || [], !0))
                    },
                    is: function(e) {
                        return !!u(this, "string" == typeof e && Ce.test(e) ? be(e) : e || [], !1).length
                    }
                });
                var Ae, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
                    De = be.fn.init = function(e, t, n) {
                        var i, o;
                        if (!e) return this;
                        if (n = n || Ae, "string" == typeof e) {
                            if ((i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : Ee.exec(e)) && (i[1] || !t)) {
                                if (i[1]) {
                                    if (t = t instanceof be ? t[0] : t, be.merge(this, be.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : me, !0)), $e.test(i[1]) && be.isPlainObject(t))
                                        for (i in t) ve(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                                    return this
                                }
                                return (o = me.getElementById(i[2])) && (this[0] = o, this.length = 1), this
                            }
                            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e)
                        }
                        return e.nodeType ? (this[0] = e, this.length = 1, this) : ve(e) ? void 0 === n.ready ? e(be) : n.ready(e) : be.makeArray(e, this)
                    };
                De.prototype = be.fn, Ae = be(me);
                var je = /^(?:parents|prev(?:Until|All))/,
                    Ne = {
                        children: !0,
                        contents: !0,
                        next: !0,
                        prev: !0
                    };
                be.fn.extend({
                    has: function(e) {
                        var t = be(e, this),
                            n = t.length;
                        return this.filter((function() {
                            for (var e = 0; e < n; e++)
                                if (be.contains(this, t[e])) return !0
                        }))
                    },
                    closest: function(e, t) {
                        var n, i = 0,
                            o = this.length,
                            r = [],
                            s = "string" != typeof e && be(e);
                        if (!Ce.test(e))
                            for (; i < o; i++)
                                for (n = this[i]; n && n !== t; n = n.parentNode)
                                    if (11 > n.nodeType && (s ? -1 < s.index(n) : 1 === n.nodeType && be.find.matchesSelector(n, e))) {
                                        r.push(n);
                                        break
                                    }
                        return this.pushStack(1 < r.length ? be.uniqueSort(r) : r)
                    },
                    index: function(e) {
                        return e ? "string" == typeof e ? ce.call(be(e), this[0]) : ce.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(e, t) {
                        return this.pushStack(be.uniqueSort(be.merge(this.get(), be(e, t))))
                    },
                    addBack: function(e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                    }
                }), be.each({
                    parent: function(e) {
                        var t = e.parentNode;
                        return t && 11 !== t.nodeType ? t : null
                    },
                    parents: function(e) {
                        return ke(e, "parentNode")
                    },
                    parentsUntil: function(e, t, n) {
                        return ke(e, "parentNode", n)
                    },
                    next: function(e) {
                        return p(e, "nextSibling")
                    },
                    prev: function(e) {
                        return p(e, "previousSibling")
                    },
                    nextAll: function(e) {
                        return ke(e, "nextSibling")
                    },
                    prevAll: function(e) {
                        return ke(e, "previousSibling")
                    },
                    nextUntil: function(e, t, n) {
                        return ke(e, "nextSibling", n)
                    },
                    prevUntil: function(e, t, n) {
                        return ke(e, "previousSibling", n)
                    },
                    siblings: function(e) {
                        return Se((e.parentNode || {}).firstChild, e)
                    },
                    children: function(e) {
                        return Se(e.firstChild)
                    },
                    contents: function(e) {
                        return null != e.contentDocument && re(e.contentDocument) ? e.contentDocument : (d(e, "template") && (e = e.content || e), be.merge([], e.childNodes))
                    }
                }, (function(e, t) {
                    be.fn[e] = function(n, i) {
                        var o = be.map(this, t, n);
                        return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = be.filter(i, o)), 1 < this.length && (!Ne[e] && be.uniqueSort(o), je.test(e) && o.reverse()), this.pushStack(o)
                    }
                }));
                var He = /[^\x20\t\r\n\f]+/g;
                be.Callbacks = function(e) {
                    e = "string" == typeof e ? function(e) {
                        var t = {};
                        return be.each(e.match(He) || [], (function(e, n) {
                            t[n] = !0
                        })), t
                    }(e) : be.extend({}, e);
                    var t, n, i, o, r = [],
                        s = [],
                        a = -1,
                        c = function() {
                            for (o = o || e.once, i = t = !0; s.length; a = -1)
                                for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length, n = !1);
                            e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
                        },
                        d = {
                            add: function() {
                                return r && (n && !t && (a = r.length - 1, s.push(n)), function t(n) {
                                    be.each(n, (function(n, i) {
                                        ve(i) ? (!e.unique || !d.has(i)) && r.push(i) : i && i.length && "string" !== l(i) && t(i)
                                    }))
                                }(arguments), n && !t && c()), this
                            },
                            remove: function() {
                                return be.each(arguments, (function(e, t) {
                                    for (var n; - 1 < (n = be.inArray(t, r, n));) r.splice(n, 1), n <= a && a--
                                })), this
                            },
                            has: function(e) {
                                return e ? -1 < be.inArray(e, r) : 0 < r.length
                            },
                            empty: function() {
                                return r && (r = []), this
                            },
                            disable: function() {
                                return o = s = [], r = n = "", this
                            },
                            disabled: function() {
                                return !r
                            },
                            lock: function() {
                                return o = s = [], n || t || (r = n = ""), this
                            },
                            locked: function() {
                                return !!o
                            },
                            fireWith: function(e, n) {
                                return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), !t && c()), this
                            },
                            fire: function() {
                                return d.fireWith(this, arguments), this
                            },
                            fired: function() {
                                return !!i
                            }
                        };
                    return d
                }, be.extend({
                    Deferred: function(e) {
                        var t = [
                                ["notify", "progress", be.Callbacks("memory"), be.Callbacks("memory"), 2],
                                ["resolve", "done", be.Callbacks("once memory"), be.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", be.Callbacks("once memory"), be.Callbacks("once memory"), 1, "rejected"]
                            ],
                            n = "pending",
                            i = {
                                state: function() {
                                    return n
                                },
                                always: function() {
                                    return o.done(arguments).fail(arguments), this
                                },
                                catch: function(e) {
                                    return i.then(null, e)
                                },
                                pipe: function() {
                                    var e = arguments;
                                    return be.Deferred((function(n) {
                                        be.each(t, (function(t, i) {
                                            var r = ve(e[i[4]]) && e[i[4]];
                                            o[i[1]]((function() {
                                                var e = r && r.apply(this, arguments);
                                                e && ve(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments)
                                            }))
                                        })), e = null
                                    })).promise()
                                },
                                then: function(e, n, i) {
                                    function o(e, t, n, i) {
                                        return function() {
                                            var a = this,
                                                l = arguments,
                                                c = function() {
                                                    var r, c;
                                                    if (!(e < s)) {
                                                        if ((r = n.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                        c = r && ("object" == typeof r || "function" == typeof r) && r.then, ve(c) ? i ? c.call(r, o(s, t, f, i), o(s, t, h, i)) : (s++, c.call(r, o(s, t, f, i), o(s, t, h, i), o(s, t, f, t.notifyWith))) : (n !== f && (a = void 0, l = [r]), (i || t.resolveWith)(a, l))
                                                    }
                                                },
                                                d = i ? c : function() {
                                                    try {
                                                        c()
                                                    } catch (i) {
                                                        be.Deferred.exceptionHook && be.Deferred.exceptionHook(i, d.stackTrace), e + 1 >= s && (n !== h && (a = void 0, l = [i]), t.rejectWith(a, l))
                                                    }
                                                };
                                            e ? d() : (be.Deferred.getStackHook && (d.stackTrace = be.Deferred.getStackHook()), r.setTimeout(d))
                                        }
                                    }
                                    var s = 0;
                                    return be.Deferred((function(r) {
                                        t[0][3].add(o(0, r, ve(i) ? i : f, r.notifyWith)), t[1][3].add(o(0, r, ve(e) ? e : f)), t[2][3].add(o(0, r, ve(n) ? n : h))
                                    })).promise()
                                },
                                promise: function(e) {
                                    return null == e ? i : be.extend(e, i)
                                }
                            },
                            o = {};
                        return be.each(t, (function(e, r) {
                            var s = r[2],
                                a = r[5];
                            i[r[1]] = s.add, a && s.add((function() {
                                n = a
                            }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(r[3].fire), o[r[0]] = function() {
                                return o[r[0] + "With"](this === o ? void 0 : this, arguments), this
                            }, o[r[0] + "With"] = s.fireWith
                        })), i.promise(o), e && e.call(o, o), o
                    },
                    when: function(e) {
                        var t = arguments.length,
                            n = t,
                            i = Array(n),
                            o = se.call(arguments),
                            r = be.Deferred(),
                            s = function(e) {
                                return function(n) {
                                    i[e] = this, o[e] = 1 < arguments.length ? se.call(arguments) : n, --t || r.resolveWith(i, o)
                                }
                            };
                        if (1 >= t && (g(e, r.done(s(n)).resolve, r.reject, !t), "pending" === r.state() || ve(o[n] && o[n].then))) return r.then();
                        for (; n--;) g(o[n], s(n), r.reject);
                        return r.promise()
                    }
                });
                var Le = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                be.Deferred.exceptionHook = function(e, t) {
                    r.console && r.console.warn && e && Le.test(e.name) && r.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                }, be.readyException = function(e) {
                    r.setTimeout((function() {
                        throw e
                    }))
                };
                var Oe = be.Deferred();
                be.fn.ready = function(e) {
                    return Oe.then(e).catch((function(e) {
                        be.readyException(e)
                    })), this
                }, be.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(e) {
                        (!0 === e ? !--be.readyWait : !be.isReady) && (be.isReady = !0, !0 !== e && 0 < --be.readyWait || Oe.resolveWith(me, [be]))
                    }
                }), be.ready.then = Oe.then, "complete" === me.readyState || "loading" !== me.readyState && !me.documentElement.doScroll ? r.setTimeout(be.ready) : (me.addEventListener("DOMContentLoaded", v), r.addEventListener("load", v));
                var Pe = function(e, t, n, i, o, r, s) {
                        var a = 0,
                            c = e.length,
                            d = null == n;
                        if ("object" === l(n))
                            for (a in o = !0, n) Pe(e, t, a, n[a], !0, r, s);
                        else if (void 0 !== i && (o = !0, ve(i) || (s = !0), d && (s ? (t.call(e, i), t = null) : (d = t, t = function(e, t, n) {
                                return d.call(be(e), n)
                            })), t))
                            for (; a < c; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                        return o ? e : d ? t.call(e) : c ? t(e[0], n) : r
                    },
                    qe = /^-ms-/,
                    Me = /-([a-z])/g,
                    Ie = function(e) {
                        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                    };
                x.uid = 1, x.prototype = {
                    cache: function(e) {
                        var t = e[this.expando];
                        return t || (t = {}, Ie(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0
                        }))), t
                    },
                    set: function(e, t, n) {
                        var i, o = this.cache(e);
                        if ("string" == typeof t) o[m(t)] = n;
                        else
                            for (i in t) o[m(i)] = t[i];
                        return o
                    },
                    get: function(e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][m(t)]
                    },
                    access: function(e, t, n) {
                        return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 === n ? t : n)
                    },
                    remove: function(e, t) {
                        var n, i = e[this.expando];
                        if (void 0 !== i) {
                            if (void 0 !== t)
                                for ((n = (t = Array.isArray(t) ? t.map(m) : (t = m(t)) in i ? [t] : t.match(He) || []).length); n--;) delete i[t[n]];
                            (void 0 === t || be.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                        }
                    },
                    hasData: function(e) {
                        var t = e[this.expando];
                        return void 0 !== t && !be.isEmptyObject(t)
                    }
                };
                var ze = new x,
                    We = new x,
                    Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    Re = /[A-Z]/g;
                be.extend({
                    hasData: function(e) {
                        return We.hasData(e) || ze.hasData(e)
                    },
                    data: function(e, t, n) {
                        return We.access(e, t, n)
                    },
                    removeData: function(e, t) {
                        We.remove(e, t)
                    },
                    _data: function(e, t, n) {
                        return ze.access(e, t, n)
                    },
                    _removeData: function(e, t) {
                        ze.remove(e, t)
                    }
                }), be.fn.extend({
                    data: function(e, t) {
                        var n, i, o, r = this[0],
                            s = r && r.attributes;
                        if (void 0 === e) {
                            if (this.length && (o = We.get(r), 1 === r.nodeType && !ze.get(r, "hasDataAttrs"))) {
                                for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = m(i.slice(5)), w(r, i, o[i]));
                                ze.set(r, "hasDataAttrs", !0)
                            }
                            return o
                        }
                        return "object" == typeof e ? this.each((function() {
                            We.set(this, e)
                        })) : Pe(this, (function(t) {
                            var n;
                            return r && void 0 === t ? void 0 !== (n = We.get(r, e)) ? n : void 0 === (n = w(r, e)) ? void 0 : n : void this.each((function() {
                                We.set(this, e, t)
                            }))
                        }), null, t, 1 < arguments.length, null, !0)
                    },
                    removeData: function(e) {
                        return this.each((function() {
                            We.remove(this, e)
                        }))
                    }
                }), be.extend({
                    queue: function(e, t, n) {
                        var i;
                        if (e) return t = (t || "fx") + "queue", i = ze.get(e, t), n && (!i || Array.isArray(n) ? i = ze.access(e, t, be.makeArray(n)) : i.push(n)), i || []
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = be.queue(e, t),
                            i = n.length,
                            o = n.shift(),
                            r = be._queueHooks(e, t);
                        "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, (function() {
                            be.dequeue(e, t)
                        }), r)), !i && r && r.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return ze.get(e, n) || ze.access(e, n, {
                            empty: be.Callbacks("once memory").add((function() {
                                ze.remove(e, [t + "queue", n])
                            }))
                        })
                    }
                }), be.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? be.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                            var n = be.queue(this, e, t);
                            be._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && be.dequeue(this, e)
                        }))
                    },
                    dequeue: function(e) {
                        return this.each((function() {
                            be.dequeue(this, e)
                        }))
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, t) {
                        var n, i = 1,
                            o = be.Deferred(),
                            r = this,
                            s = this.length,
                            a = function() {
                                --i || o.resolveWith(r, [r])
                            };
                        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = ze.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                        return a(), o.promise(t)
                    }
                });
                var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    Ue = new RegExp("^(?:([+-])=|)(" + Be + ")([a-z%]*)$", "i"),
                    _e = ["Top", "Right", "Bottom", "Left"],
                    Xe = me.documentElement,
                    Ye = function(e) {
                        return be.contains(e.ownerDocument, e)
                    },
                    Ve = {
                        composed: !0
                    };
                Xe.getRootNode && (Ye = function(e) {
                    return be.contains(e.ownerDocument, e) || e.getRootNode(Ve) === e.ownerDocument
                });
                var Ge = function(e, t) {
                        return "none" === (e = t || e).style.display || "" === e.style.display && Ye(e) && "none" === be.css(e, "display")
                    },
                    Qe = {};
                be.fn.extend({
                    show: function() {
                        return k(this, !0)
                    },
                    hide: function() {
                        return k(this)
                    },
                    toggle: function(e) {
                        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                            Ge(this) ? be(this).show() : be(this).hide()
                        }))
                    }
                });
                var Je = /^(?:checkbox|radio)$/i,
                    Ke = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    Ze = /^$|^module$|\/(?:java|ecma)script/i;
                ! function() {
                    var e = me.createDocumentFragment().appendChild(me.createElement("div")),
                        t = me.createElement("input");
                    t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), ge.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", ge.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, e.innerHTML = "<option></option>", ge.option = !!e.lastChild
                }();
                var et = {
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
                et.tbody = et.tfoot = et.colgroup = et.caption = et.thead, et.th = et.td, ge.option || (et.optgroup = et.option = [1, "<select multiple='multiple'>", "</select>"]);
                var tt = /<|&#?\w+;/,
                    nt = /^key/,
                    it = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                    ot = /^([^.]*)(?:\.(.+)|)/;
                be.event = {
                    global: {},
                    add: function(e, t, n, i, o) {
                        var r, s, a, l, c, d, u, p, f, h, g, v = ze.get(e);
                        if (Ie(e))
                            for (n.handler && (n = (r = n).handler, o = r.selector), o && be.find.matchesSelector(Xe, o), n.guid || (n.guid = be.guid++), (l = v.events) || (l = v.events = Object.create(null)), (s = v.handle) || (s = v.handle = function(t) {
                                    return void 0 !== be && be.event.triggered !== t.type ? be.event.dispatch.apply(e, arguments) : void 0
                                }), c = (t = (t || "").match(He) || [""]).length; c--;) f = g = (a = ot.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (u = be.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = be.event.special[f] || {}, d = be.extend({
                                type: f,
                                origType: g,
                                data: i,
                                handler: n,
                                guid: n.guid,
                                selector: o,
                                needsContext: o && be.expr.match.needsContext.test(o),
                                namespace: h.join(".")
                            }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, (!u.setup || !1 === u.setup.call(e, i, h, s)) && e.addEventListener && e.addEventListener(f, s)), u.add && (u.add.call(e, d), !d.handler.guid && (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), be.event.global[f] = !0)
                    },
                    remove: function(e, t, n, i, o) {
                        var r, s, a, l, c, d, u, p, f, h, g, v = ze.hasData(e) && ze.get(e);
                        if (v && (l = v.events)) {
                            for (c = (t = (t || "").match(He) || [""]).length; c--;)
                                if (f = g = (a = ot.exec(t[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                                    for (u = be.event.special[f] || {}, p = l[f = (i ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) d = p[r], (o || g === d.origType) && (!n || n.guid === d.guid) && (!a || a.test(d.namespace)) && (!i || i === d.selector || "**" === i && d.selector) && (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                                    s && !p.length && ((!u.teardown || !1 === u.teardown.call(e, h, v.handle)) && be.removeEvent(e, f, v.handle), delete l[f])
                                } else
                                    for (f in l) be.event.remove(e, f + t[c], n, i, !0);
                            be.isEmptyObject(l) && ze.remove(e, "handle events")
                        }
                    },
                    dispatch: function(e) {
                        var t, n, i, o, r, s, a = Array(arguments.length),
                            l = be.event.fix(e),
                            c = (ze.get(this, "events") || Object.create(null))[l.type] || [],
                            d = be.event.special[l.type] || {};
                        for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                        if (l.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, l)) {
                            for (s = be.event.handlers.call(this, l, c), t = 0;
                                (o = s[t++]) && !l.isPropagationStopped();)
                                for (l.currentTarget = o.elem, n = 0;
                                    (r = o.handlers[n++]) && !l.isImmediatePropagationStopped();)(!l.rnamespace || !1 === r.namespace || l.rnamespace.test(r.namespace)) && (l.handleObj = r, l.data = r.data, void 0 !== (i = ((be.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                            return d.postDispatch && d.postDispatch.call(this, l), l.result
                        }
                    },
                    handlers: function(e, t) {
                        var n, i, o, r, s, a = [],
                            l = t.delegateCount,
                            c = e.target;
                        if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                            for (; c !== this; c = c.parentNode || this)
                                if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                    for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? -1 < be(o, this).index(c) : be.find(o, this, null, [c]).length), s[o] && r.push(i);
                                    r.length && a.push({
                                        elem: c,
                                        handlers: r
                                    })
                                }
                        return c = this, l < t.length && a.push({
                            elem: c,
                            handlers: t.slice(l)
                        }), a
                    },
                    addProp: function(e, t) {
                        Object.defineProperty(be.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: ve(t) ? function() {
                                if (this.originalEvent) return t(this.originalEvent)
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[e]
                            },
                            set: function(t) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                })
                            }
                        })
                    },
                    fix: function(e) {
                        return e[be.expando] ? e : new be.Event(e)
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(e) {
                                var t = this || e;
                                return Je.test(t.type) && t.click && d(t, "input") && N(t, "click", A), !1
                            },
                            trigger: function(e) {
                                var t = this || e;
                                return Je.test(t.type) && t.click && d(t, "input") && N(t, "click"), !0
                            },
                            _default: function(e) {
                                var t = e.target;
                                return Je.test(t.type) && t.click && d(t, "input") && ze.get(t, "click") || d(t, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                            }
                        }
                    }
                }, be.removeEvent = function(e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n)
                }, be.Event = function(e, t) {
                    return this instanceof be.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? A : E, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && be.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), void(this[be.expando] = !0)) : new be.Event(e, t)
                }, be.Event.prototype = {
                    constructor: be.Event,
                    isDefaultPrevented: E,
                    isPropagationStopped: E,
                    isImmediatePropagationStopped: E,
                    isSimulated: !1,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = A, e && !this.isSimulated && e.preventDefault()
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = A, e && !this.isSimulated && e.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = A, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                    }
                }, be.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: function(e) {
                        var t = e.button;
                        return null == e.which && nt.test(e.type) ? null == e.charCode ? e.keyCode : e.charCode : !e.which && void 0 !== t && it.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                    }
                }, be.event.addProp), be.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                    be.event.special[e] = {
                        setup: function() {
                            return N(this, e, D), !1
                        },
                        trigger: function() {
                            return N(this, e), !0
                        },
                        delegateType: t
                    }
                })), be.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(e, t) {
                    be.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            var n, i = e.relatedTarget,
                                o = e.handleObj;
                            return i && (i === this || be.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                        }
                    }
                })), be.fn.extend({
                    on: function(e, t, n, i) {
                        return j(this, e, t, n, i)
                    },
                    one: function(e, t, n, i) {
                        return j(this, e, t, n, i, 1)
                    },
                    off: function(e, t, n) {
                        var i, o;
                        if (e && e.preventDefault && e.handleObj) return i = e.handleObj, be(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                        if ("object" == typeof e) {
                            for (o in e) this.off(o, t, e[o]);
                            return this
                        }
                        return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = E), this.each((function() {
                            be.event.remove(this, e, n, t)
                        }))
                    }
                });
                var rt = /<script|<style|<link/i,
                    st = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    at = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                be.extend({
                    htmlPrefilter: function(e) {
                        return e
                    },
                    clone: function(e, t, n) {
                        var i, o, r, s, a = e.cloneNode(!0),
                            l = Ye(e);
                        if (!(ge.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || be.isXMLDoc(e)))
                            for (s = S(a), i = 0, o = (r = S(e)).length; i < o; i++) q(r[i], s[i]);
                        if (t)
                            if (n)
                                for (r = r || S(e), s = s || S(a), i = 0, o = r.length; i < o; i++) P(r[i], s[i]);
                            else P(e, a);
                        return 0 < (s = S(a, "script")).length && C(s, !l && S(e, "script")), a
                    },
                    cleanData: function(e) {
                        for (var t, n, i, o = be.event.special, r = 0; void 0 !== (n = e[r]); r++)
                            if (Ie(n)) {
                                if (t = n[ze.expando]) {
                                    if (t.events)
                                        for (i in t.events) o[i] ? be.event.remove(n, i) : be.removeEvent(n, i, t.handle);
                                    n[ze.expando] = void 0
                                }
                                n[We.expando] && (n[We.expando] = void 0)
                            }
                    }
                }), be.fn.extend({
                    detach: function(e) {
                        return I(this, e, !0)
                    },
                    remove: function(e) {
                        return I(this, e)
                    },
                    text: function(e) {
                        return Pe(this, (function(e) {
                            return void 0 === e ? be.text(this) : this.empty().each((function() {
                                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                            }))
                        }), null, e, arguments.length)
                    },
                    append: function() {
                        return M(this, arguments, (function(e) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || H(this, e).appendChild(e)
                        }))
                    },
                    prepend: function() {
                        return M(this, arguments, (function(e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = H(this, e);
                                t.insertBefore(e, t.firstChild)
                            }
                        }))
                    },
                    before: function() {
                        return M(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this)
                        }))
                    },
                    after: function() {
                        return M(this, arguments, (function(e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                        }))
                    },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (be.cleanData(S(e, !1)), e.textContent = "");
                        return this
                    },
                    clone: function(e, t) {
                        return e = null != e && e, t = null == t ? e : t, this.map((function() {
                            return be.clone(this, e, t)
                        }))
                    },
                    html: function(e) {
                        return Pe(this, (function(e) {
                            var t = this[0] || {},
                                n = 0,
                                i = this.length;
                            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                            if ("string" == typeof e && !rt.test(e) && !et[(Ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                                e = be.htmlPrefilter(e);
                                try {
                                    for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (be.cleanData(S(t, !1)), t.innerHTML = e);
                                    t = 0
                                } catch (t) {}
                            }
                            t && this.empty().append(e)
                        }), null, e, arguments.length)
                    },
                    replaceWith: function() {
                        var e = [];
                        return M(this, arguments, (function(t) {
                            var n = this.parentNode;
                            0 > be.inArray(this, e) && (be.cleanData(S(this)), n && n.replaceChild(t, this))
                        }), e)
                    }
                }), be.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(e, t) {
                    be.fn[e] = function(e) {
                        for (var n, i = [], o = be(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), be(o[s])[t](n), le.apply(i, n.get());
                        return this.pushStack(i)
                    }
                }));
                var lt = new RegExp("^(" + Be + ")(?!px)[a-z%]+$", "i"),
                    ct = function(e) {
                        var t = e.ownerDocument.defaultView;
                        return t && t.opener || (t = r), t.getComputedStyle(e)
                    },
                    dt = function(e, t, n) {
                        var i, o, r = {};
                        for (o in t) r[o] = e.style[o], e.style[o] = t[o];
                        for (o in i = n.call(e), t) e.style[o] = r[o];
                        return i
                    },
                    ut = new RegExp(_e.join("|"), "i");
                ! function() {
                    function e() {
                        if (d) {
                            c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Xe.appendChild(c).appendChild(d);
                            var e = r.getComputedStyle(d);
                            n = "1%" !== e.top, l = 12 === t(e.marginLeft), d.style.right = "60%", s = 36 === t(e.right), i = 36 === t(e.width), d.style.position = "absolute", o = 12 === t(d.offsetWidth / 3), Xe.removeChild(c), d = null
                        }
                    }

                    function t(e) {
                        return Math.round(parseFloat(e))
                    }
                    var n, i, o, s, a, l, c = me.createElement("div"),
                        d = me.createElement("div");
                    d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", ge.clearCloneStyle = "content-box" === d.style.backgroundClip, be.extend(ge, {
                        boxSizingReliable: function() {
                            return e(), i
                        },
                        pixelBoxStyles: function() {
                            return e(), s
                        },
                        pixelPosition: function() {
                            return e(), n
                        },
                        reliableMarginLeft: function() {
                            return e(), l
                        },
                        scrollboxSize: function() {
                            return e(), o
                        },
                        reliableTrDimensions: function() {
                            var e, t, n, i;
                            return null == a && (e = me.createElement("table"), t = me.createElement("tr"), n = me.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", Xe.appendChild(e).appendChild(t).appendChild(n), i = r.getComputedStyle(t), a = 3 < parseInt(i.height), Xe.removeChild(e)), a
                        }
                    }))
                }();
                var pt = ["Webkit", "Moz", "ms"],
                    ft = me.createElement("div").style,
                    ht = {},
                    gt = /^(none|table(?!-c[ea]).+)/,
                    vt = /^--/,
                    yt = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    },
                    mt = {
                        letterSpacing: "0",
                        fontWeight: "400"
                    };
                be.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = z(e, "opacity");
                                    return "" === n ? "1" : n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {},
                    style: function(e, t, n, i) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var o, r, s, a = m(t),
                                l = vt.test(t),
                                c = e.style;
                            if (l || (t = F(a)), s = be.cssHooks[t] || be.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                            if ("string" == (r = typeof n) && (o = Ue.exec(n)) && o[1] && (n = b(e, t, o), r = "number"), null == n || n != n) return;
                            "number" !== r || l || (n += o && o[3] || (be.cssNumber[a] ? "" : "px")), ge.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n)
                        }
                    },
                    css: function(e, t, n, i) {
                        var o, r, s, a = m(t);
                        return vt.test(t) || (t = F(a)), (s = be.cssHooks[t] || be.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = z(e, t, i)), "normal" === o && t in mt && (o = mt[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
                    }
                }), be.each(["height", "width"], (function(e, t) {
                    be.cssHooks[t] = {
                        get: function(e, n, i) {
                            if (n) return !gt.test(be.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? U(e, t, i) : dt(e, yt, (function() {
                                return U(e, t, i)
                            }))
                        },
                        set: function(e, n, o) {
                            var r, s = ct(e),
                                a = !ge.scrollboxSize() && "absolute" === s.position,
                                l = (a || o) && "border-box" === be.css(e, "boxSizing", !1, s),
                                c = o ? B(e, t, o, l, s) : 0;
                            return l && a && (c -= i(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(s[t]) - B(e, t, "border", !1, s) - .5)), c && (r = Ue.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = be.css(e, t)), R(0, n, c)
                        }
                    }
                })), be.cssHooks.marginLeft = W(ge.reliableMarginLeft, (function(e, t) {
                    if (t) return (parseFloat(z(e, "marginLeft")) || e.getBoundingClientRect().left - dt(e, {
                        marginLeft: 0
                    }, (function() {
                        return e.getBoundingClientRect().left
                    }))) + "px"
                })), be.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(e, t) {
                    be.cssHooks[e + t] = {
                        expand: function(n) {
                            for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + _e[i] + t] = r[i] || r[i - 2] || r[0];
                            return o
                        }
                    }, "margin" !== e && (be.cssHooks[e + t].set = R)
                })), be.fn.extend({
                    css: function(e, t) {
                        return Pe(this, (function(e, t, n) {
                            var i, o, r = {},
                                s = 0;
                            if (Array.isArray(t)) {
                                for (i = ct(e), o = t.length; s < o; s++) r[t[s]] = be.css(e, t[s], !1, i);
                                return r
                            }
                            return void 0 === n ? be.css(e, t) : be.style(e, t, n)
                        }), e, t, 1 < arguments.length)
                    }
                }), be.Tween = _, _.prototype = {
                    constructor: _,
                    init: function(e, t, n, i, o, r) {
                        this.elem = e, this.prop = n, this.easing = o || be.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (be.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var e = _.propHooks[this.prop];
                        return e && e.get ? e.get(this) : _.propHooks._default.get(this)
                    },
                    run: function(e) {
                        var t, n = _.propHooks[this.prop];
                        return this.pos = t = this.options.duration ? be.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : _.propHooks._default.set(this), this
                    }
                }, _.prototype.init.prototype = _.prototype, _.propHooks = {
                    _default: {
                        get: function(e) {
                            var t;
                            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = be.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                        },
                        set: function(e) {
                            be.fx.step[e.prop] ? be.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !be.cssHooks[e.prop] && null == e.elem.style[F(e.prop)] ? e.elem[e.prop] = e.now : be.style(e.elem, e.prop, e.now + e.unit)
                        }
                    }
                }, _.propHooks.scrollTop = _.propHooks.scrollLeft = {
                    set: function(e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                    }
                }, be.easing = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    _default: "swing"
                }, be.fx = _.prototype.init, be.fx.step = {};
                var xt, wt, bt = /^(?:toggle|show|hide)$/,
                    Tt = /queueHooks$/;
                be.Animation = be.extend(Q, {
                        tweeners: {
                            "*": [function(e, t) {
                                var n = this.createTween(e, t);
                                return b(n.elem, e, Ue.exec(t), n), n
                            }]
                        },
                        tweener: function(e, t) {
                            ve(e) ? (t = e, e = ["*"]) : e = e.match(He);
                            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], Q.tweeners[n] = Q.tweeners[n] || [], Q.tweeners[n].unshift(t)
                        },
                        prefilters: [function(e, t, n) {
                            var i, o, r, s, a, l, c, d, u = "width" in t || "height" in t,
                                p = this,
                                f = {},
                                h = e.style,
                                g = e.nodeType && Ge(e),
                                v = ze.get(e, "fxshow");
                            for (i in n.queue || (null == (s = be._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                                    s.unqueued || a()
                                }), s.unqueued++, p.always((function() {
                                    p.always((function() {
                                        s.unqueued--, be.queue(e, "fx").length || s.empty.fire()
                                    }))
                                }))), t)
                                if (o = t[i], bt.test(o)) {
                                    if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                                        if ("show" !== o || !v || void 0 === v[i]) continue;
                                        g = !0
                                    }
                                    f[i] = v && v[i] || be.style(e, i)
                                }
                            if ((l = !be.isEmptyObject(t)) || !be.isEmptyObject(f))
                                for (i in u && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = v && v.display) && (c = ze.get(e, "display")), "none" === (d = be.css(e, "display")) && (c ? d = c : (k([e], !0), c = e.style.display || c, d = be.css(e, "display"), k([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === be.css(e, "float") && (!l && (p.done((function() {
                                        h.display = c
                                    })), null == c && (d = h.display, c = "none" === d ? "" : d)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always((function() {
                                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                                    }))), l = !1, f) l || (v ? "hidden" in v && (g = v.hidden) : v = ze.access(e, "fxshow", {
                                    display: c
                                }), r && (v.hidden = !g), g && k([e], !0), p.done((function() {
                                    for (i in g || k([e]), ze.remove(e, "fxshow"), f) be.style(e, i, f[i])
                                }))), l = G(g ? v[i] : 0, i, p), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0))
                        }],
                        prefilter: function(e, t) {
                            t ? Q.prefilters.unshift(e) : Q.prefilters.push(e)
                        }
                    }), be.speed = function(e, t, n) {
                        var i = e && "object" == typeof e ? be.extend({}, e) : {
                            complete: n || !n && t || ve(e) && e,
                            duration: e,
                            easing: n && t || t && !ve(t) && t
                        };
                        return be.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in be.fx.speeds ? i.duration = be.fx.speeds[i.duration] : i.duration = be.fx.speeds._default), (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                            ve(i.old) && i.old.call(this), i.queue && be.dequeue(this, i.queue)
                        }, i
                    }, be.fn.extend({
                        fadeTo: function(e, t, n, i) {
                            return this.filter(Ge).css("opacity", 0).show().end().animate({
                                opacity: t
                            }, e, n, i)
                        },
                        animate: function(e, t, n, i) {
                            var o = be.isEmptyObject(e),
                                r = be.speed(t, n, i),
                                s = function() {
                                    var t = Q(this, be.extend({}, e), r);
                                    (o || ze.get(this, "finish")) && t.stop(!0)
                                };
                            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                        },
                        stop: function(e, t, n) {
                            var i = function(e) {
                                var t = e.stop;
                                delete e.stop, t(n)
                            };
                            return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                                var t = !0,
                                    o = null != e && e + "queueHooks",
                                    r = be.timers,
                                    s = ze.get(this);
                                if (o) s[o] && s[o].stop && i(s[o]);
                                else
                                    for (o in s) s[o] && s[o].stop && Tt.test(o) && i(s[o]);
                                for (o = r.length; o--;) r[o].elem === this && (null == e || r[o].queue === e) && (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                                (t || !n) && be.dequeue(this, e)
                            }))
                        },
                        finish: function(e) {
                            return !1 !== e && (e = e || "fx"), this.each((function() {
                                var t, n = ze.get(this),
                                    i = n[e + "queue"],
                                    o = n[e + "queueHooks"],
                                    r = be.timers,
                                    s = i ? i.length : 0;
                                for (n.finish = !0, be.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                                delete n.finish
                            }))
                        }
                    }), be.each(["toggle", "show", "hide"], (function(e, t) {
                        var n = be.fn[t];
                        be.fn[t] = function(e, i, o) {
                            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(V(t, !0), e, i, o)
                        }
                    })), be.each({
                        slideDown: V("show"),
                        slideUp: V("hide"),
                        slideToggle: V("toggle"),
                        fadeIn: {
                            opacity: "show"
                        },
                        fadeOut: {
                            opacity: "hide"
                        },
                        fadeToggle: {
                            opacity: "toggle"
                        }
                    }, (function(e, t) {
                        be.fn[e] = function(e, n, i) {
                            return this.animate(t, e, n, i)
                        }
                    })), be.timers = [], be.fx.tick = function() {
                        var e, t = 0,
                            n = be.timers;
                        for (xt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                        n.length || be.fx.stop(), xt = void 0
                    }, be.fx.timer = function(e) {
                        be.timers.push(e), be.fx.start()
                    }, be.fx.interval = 13, be.fx.start = function() {
                        wt || (wt = !0, X())
                    }, be.fx.stop = function() {
                        wt = null
                    }, be.fx.speeds = {
                        slow: 600,
                        fast: 200,
                        _default: 400
                    }, be.fn.delay = function(e, t) {
                        return e = be.fx && be.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, n) {
                            var i = r.setTimeout(t, e);
                            n.stop = function() {
                                r.clearTimeout(i)
                            }
                        }))
                    },
                    function() {
                        var e = me.createElement("input"),
                            t = me.createElement("select").appendChild(me.createElement("option"));
                        e.type = "checkbox", ge.checkOn = "" !== e.value, ge.optSelected = t.selected, (e = me.createElement("input")).value = "t", e.type = "radio", ge.radioValue = "t" === e.value
                    }();
                var kt, St = be.expr.attrHandle;
                be.fn.extend({
                    attr: function(e, t) {
                        return Pe(this, be.attr, e, t, 1 < arguments.length)
                    },
                    removeAttr: function(e) {
                        return this.each((function() {
                            be.removeAttr(this, e)
                        }))
                    }
                }), be.extend({
                    attr: function(e, t, n) {
                        var i, o, r = e.nodeType;
                        if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? be.prop(e, t, n) : (1 === r && be.isXMLDoc(e) || (o = be.attrHooks[t.toLowerCase()] || (be.expr.match.bool.test(t) ? kt : void 0)), void 0 !== n ? null === n ? void be.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = be.find.attr(e, t)) ? void 0 : i)
                    },
                    attrHooks: {
                        type: {
                            set: function(e, t) {
                                if (!ge.radioValue && "radio" === t && d(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t
                                }
                            }
                        }
                    },
                    removeAttr: function(e, t) {
                        var n, i = 0,
                            o = t && t.match(He);
                        if (o && 1 === e.nodeType)
                            for (; n = o[i++];) e.removeAttribute(n)
                    }
                }), kt = {
                    set: function(e, t, n) {
                        return !1 === t ? be.removeAttr(e, n) : e.setAttribute(n, n), n
                    }
                }, be.each(be.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                    var n = St[t] || be.find.attr;
                    St[t] = function(e, t, i) {
                        var o, r, s = t.toLowerCase();
                        return i || (r = St[s], St[s] = o, o = null == n(e, t, i) ? null : s, St[s] = r), o
                    }
                }));
                var Ct = /^(?:input|select|textarea|button)$/i,
                    $t = /^(?:a|area)$/i;
                be.fn.extend({
                    prop: function(e, t) {
                        return Pe(this, be.prop, e, t, 1 < arguments.length)
                    },
                    removeProp: function(e) {
                        return this.each((function() {
                            delete this[be.propFix[e] || e]
                        }))
                    }
                }), be.extend({
                    prop: function(e, t, n) {
                        var i, o, r = e.nodeType;
                        if (3 !== r && 8 !== r && 2 !== r) return 1 === r && be.isXMLDoc(e) || (t = be.propFix[t] || t, o = be.propHooks[t]), void 0 === n ? o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t] : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(e) {
                                var t = be.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : Ct.test(e.nodeName) || $t.test(e.nodeName) && e.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }), ge.optSelected || (be.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        return t && t.parentNode && t.parentNode.selectedIndex, null
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                    }
                }), be.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                    be.propFix[this.toLowerCase()] = this
                })), be.fn.extend({
                    addClass: function(e) {
                        var t, n, i, o, r, s, a, l = 0;
                        if (ve(e)) return this.each((function(t) {
                            be(this).addClass(e.call(this, t, K(this)))
                        }));
                        if ((t = Z(e)).length)
                            for (; n = this[l++];)
                                if (o = K(n), i = 1 === n.nodeType && " " + J(o) + " ") {
                                    for (s = 0; r = t[s++];) 0 > i.indexOf(" " + r + " ") && (i += r + " ");
                                    o !== (a = J(i)) && n.setAttribute("class", a)
                                }
                        return this
                    },
                    removeClass: function(e) {
                        var t, n, i, o, r, s, a, l = 0;
                        if (ve(e)) return this.each((function(t) {
                            be(this).removeClass(e.call(this, t, K(this)))
                        }));
                        if (!arguments.length) return this.attr("class", "");
                        if ((t = Z(e)).length)
                            for (; n = this[l++];)
                                if (o = K(n), i = 1 === n.nodeType && " " + J(o) + " ") {
                                    for (s = 0; r = t[s++];)
                                        for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                                    o !== (a = J(i)) && n.setAttribute("class", a)
                                }
                        return this
                    },
                    toggleClass: function(e, t) {
                        var n = typeof e,
                            i = "string" == n || Array.isArray(e);
                        return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : ve(e) ? this.each((function(n) {
                            be(this).toggleClass(e.call(this, n, K(this), t), t)
                        })) : this.each((function() {
                            var t, o, r, s;
                            if (i)
                                for (o = 0, r = be(this), s = Z(e); t = s[o++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                            else(void 0 === e || "boolean" == n) && ((t = K(this)) && ze.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : ze.get(this, "__className__") || ""))
                        }))
                    },
                    hasClass: function(e) {
                        var t, n, i = 0;
                        for (t = " " + e + " "; n = this[i++];)
                            if (1 === n.nodeType && -1 < (" " + J(K(n)) + " ").indexOf(t)) return !0;
                        return !1
                    }
                });
                var At = /\r/g;
                be.fn.extend({
                    val: function(e) {
                        var t, n, i, o = this[0];
                        return arguments.length ? (i = ve(e), this.each((function(n) {
                            var o;
                            1 !== this.nodeType || (null == (o = i ? e.call(this, n, be(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = be.map(o, (function(e) {
                                return null == e ? "" : e + ""
                            }))), (!(t = be.valHooks[this.type] || be.valHooks[this.nodeName.toLowerCase()]) || !("set" in t) || void 0 === t.set(this, o, "value")) && (this.value = o))
                        }))) : o ? (t = be.valHooks[o.type] || be.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(At, "") : null == n ? "" : n : void 0
                    }
                }), be.extend({
                    valHooks: {
                        option: {
                            get: function(e) {
                                var t = be.find.attr(e, "value");
                                return null == t ? J(be.text(e)) : t
                            }
                        },
                        select: {
                            get: function(e) {
                                var t, n, i, o = e.options,
                                    r = e.selectedIndex,
                                    s = "select-one" === e.type,
                                    a = s ? null : [],
                                    l = s ? r + 1 : o.length;
                                for (i = 0 > r ? l : s ? r : 0; i < l; i++)
                                    if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !d(n.parentNode, "optgroup"))) {
                                        if (t = be(n).val(), s) return t;
                                        a.push(t)
                                    }
                                return a
                            },
                            set: function(e, t) {
                                for (var n, i, o = e.options, r = be.makeArray(t), s = o.length; s--;)((i = o[s]).selected = -1 < be.inArray(be.valHooks.option.get(i), r)) && (n = !0);
                                return n || (e.selectedIndex = -1), r
                            }
                        }
                    }
                }), be.each(["radio", "checkbox"], (function() {
                    be.valHooks[this] = {
                        set: function(e, t) {
                            if (Array.isArray(t)) return e.checked = -1 < be.inArray(be(e).val(), t)
                        }
                    }, ge.checkOn || (be.valHooks[this].get = function(e) {
                        return null === e.getAttribute("value") ? "on" : e.value
                    })
                })), ge.focusin = "onfocusin" in r;
                var Et = /^(?:focusinfocus|focusoutblur)$/,
                    Dt = function(e) {
                        e.stopPropagation()
                    };
                be.extend(be.event, {
                    trigger: function(e, t, n, i) {
                        var o, s, a, l, c, d, u, p, f = [n || me],
                            h = pe.call(e, "type") ? e.type : e,
                            g = pe.call(e, "namespace") ? e.namespace.split(".") : [];
                        if (s = p = a = n = n || me, 3 !== n.nodeType && 8 !== n.nodeType && !Et.test(h + be.event.triggered) && (-1 < h.indexOf(".") && (g = h.split("."), h = g.shift(), g.sort()), c = 0 > h.indexOf(":") && "on" + h, (e = e[be.expando] ? e : new be.Event(h, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : be.makeArray(t, [e]), u = be.event.special[h] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                            if (!i && !u.noBubble && !ye(n)) {
                                for (l = u.delegateType || h, Et.test(l + h) || (s = s.parentNode); s; s = s.parentNode) f.push(s), a = s;
                                a === (n.ownerDocument || me) && f.push(a.defaultView || a.parentWindow || r)
                            }
                            for (o = 0;
                                (s = f[o++]) && !e.isPropagationStopped();) p = s, e.type = 1 < o ? l : u.bindType || h, (d = (ze.get(s, "events") || Object.create(null))[e.type] && ze.get(s, "handle")) && d.apply(s, t), (d = c && s[c]) && d.apply && Ie(s) && (e.result = d.apply(s, t), !1 === e.result && e.preventDefault());
                            return e.type = h, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.pop(), t) || !Ie(n) || !c || !ve(n[h]) || ye(n) || ((a = n[c]) && (n[c] = null), be.event.triggered = h, e.isPropagationStopped() && p.addEventListener(h, Dt), n[h](), e.isPropagationStopped() && p.removeEventListener(h, Dt), be.event.triggered = void 0, a && (n[c] = a)), e.result
                        }
                    },
                    simulate: function(e, t, n) {
                        var i = be.extend(new be.Event, n, {
                            type: e,
                            isSimulated: !0
                        });
                        be.event.trigger(i, null, t)
                    }
                }), be.fn.extend({
                    trigger: function(e, t) {
                        return this.each((function() {
                            be.event.trigger(e, t, this)
                        }))
                    },
                    triggerHandler: function(e, t) {
                        var n = this[0];
                        if (n) return be.event.trigger(e, t, n, !0)
                    }
                }), ge.focusin || be.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(e, t) {
                    var n = function(e) {
                        be.event.simulate(t, e.target, be.event.fix(e))
                    };
                    be.event.special[t] = {
                        setup: function() {
                            var i = this.ownerDocument || this.document || this,
                                o = ze.access(i, t);
                            o || i.addEventListener(e, n, !0), ze.access(i, t, (o || 0) + 1)
                        },
                        teardown: function() {
                            var i = this.ownerDocument || this.document || this,
                                o = ze.access(i, t) - 1;
                            o ? ze.access(i, t, o) : (i.removeEventListener(e, n, !0), ze.remove(i, t))
                        }
                    }
                }));
                var jt = r.location,
                    Nt = {
                        guid: Date.now()
                    },
                    Ht = /\?/;
                be.parseXML = function(e) {
                    var t;
                    if (!e || "string" != typeof e) return null;
                    try {
                        t = (new r.DOMParser).parseFromString(e, "text/xml")
                    } catch (e) {
                        t = void 0
                    }
                    return (!t || t.getElementsByTagName("parsererror").length) && be.error("Invalid XML: " + e), t
                };
                var Lt = /\[\]$/,
                    Ot = /\r?\n/g,
                    Pt = /^(?:submit|button|image|reset|file)$/i,
                    qt = /^(?:input|select|textarea|keygen)/i;
                be.param = function(e, t) {
                    var n, i = [],
                        o = function(e, t) {
                            var n = ve(t) ? t() : t;
                            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                        };
                    if (null == e) return "";
                    if (Array.isArray(e) || e.jquery && !be.isPlainObject(e)) be.each(e, (function() {
                        o(this.name, this.value)
                    }));
                    else
                        for (n in e) ee(n, e[n], t, o);
                    return i.join("&")
                }, be.fn.extend({
                    serialize: function() {
                        return be.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var e = be.prop(this, "elements");
                            return e ? be.makeArray(e) : this
                        })).filter((function() {
                            var e = this.type;
                            return this.name && !be(this).is(":disabled") && qt.test(this.nodeName) && !Pt.test(e) && (this.checked || !Je.test(e))
                        })).map((function(e, t) {
                            var n = be(this).val();
                            return null == n ? null : Array.isArray(n) ? be.map(n, (function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(Ot, "\r\n")
                                }
                            })) : {
                                name: t.name,
                                value: n.replace(Ot, "\r\n")
                            }
                        })).get()
                    }
                });
                var Mt = /%20/g,
                    It = /#.*$/,
                    zt = /([?&])_=[^&]*/,
                    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    Ft = /^(?:GET|HEAD)$/,
                    Rt = /^\/\//,
                    Bt = {},
                    Ut = {},
                    _t = "*/".concat("*"),
                    Xt = me.createElement("a");
                Xt.href = jt.href, be.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: jt.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(jt.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": _t,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": be.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(e, t) {
                        return t ? ie(ie(e, be.ajaxSettings), t) : ie(be.ajaxSettings, e)
                    },
                    ajaxPrefilter: te(Bt),
                    ajaxTransport: te(Ut),
                    ajax: function(e, t) {
                        function n(e, t, n, a) {
                            var c, p, f, w, b, T = t;
                            d || (d = !0, l && r.clearTimeout(l), i = void 0, s = a || "", k.readyState = 0 < e ? 4 : 0, c = 200 <= e && 300 > e || 304 === e, n && (w = function(e, t, n) {
                                for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                                    "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (i)
                                    for (o in a)
                                        if (a[o] && a[o].test(i)) {
                                            l.unshift(o);
                                            break
                                        }
                                if (l[0] in n) r = l[0];
                                else {
                                    for (o in n) {
                                        if (!l[0] || e.converters[o + " " + l[0]]) {
                                            r = o;
                                            break
                                        }
                                        s || (s = o)
                                    }
                                    r = r || s
                                }
                                return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
                            }(h, k, n)), !c && -1 < be.inArray("script", h.dataTypes) && (h.converters["text script"] = function() {}), w = function(e, t, n, i) {
                                var o, r, s, a, l, c = {},
                                    d = e.dataTypes.slice();
                                if (d[1])
                                    for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                                for (r = d.shift(); r;)
                                    if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
                                        if ("*" === r) r = l;
                                        else if ("*" !== l && l != r) {
                                    if (!(s = c[l + " " + r] || c["* " + r]))
                                        for (o in c)
                                            if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], d.unshift(a[1]));
                                                break
                                            }
                                    if (!0 !== s)
                                        if (s && e.throws) t = s(t);
                                        else try {
                                            t = s(t)
                                        } catch (t) {
                                            return {
                                                state: "parsererror",
                                                error: s ? t : "No conversion from " + l + " to " + r
                                            }
                                        }
                                }
                                return {
                                    state: "success",
                                    data: t
                                }
                            }(h, w, k, c), c ? (h.ifModified && ((b = k.getResponseHeader("Last-Modified")) && (be.lastModified[o] = b), (b = k.getResponseHeader("etag")) && (be.etag[o] = b)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = w.state, p = w.data, c = !(f = w.error))) : (f = T, (e || !T) && (T = "error", 0 > e && (e = 0))), k.status = e, k.statusText = (t || T) + "", c ? y.resolveWith(g, [p, T, k]) : y.rejectWith(g, [k, T, f]), k.statusCode(x), x = void 0, u && v.trigger(c ? "ajaxSuccess" : "ajaxError", [k, h, c ? p : f]), m.fireWith(g, [k, T]), u && (v.trigger("ajaxComplete", [k, h]), !--be.active && be.event.trigger("ajaxStop")))
                        }
                        "object" == typeof e && (t = e, e = void 0), t = t || {};
                        var i, o, s, a, l, c, d, u, p, f, h = be.ajaxSetup({}, t),
                            g = h.context || h,
                            v = h.context && (g.nodeType || g.jquery) ? be(g) : be.event,
                            y = be.Deferred(),
                            m = be.Callbacks("once memory"),
                            x = h.statusCode || {},
                            w = {},
                            b = {},
                            T = "canceled",
                            k = {
                                readyState: 0,
                                getResponseHeader: function(e) {
                                    var t;
                                    if (d) {
                                        if (!a)
                                            for (a = {}; t = Wt.exec(s);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                        t = a[e.toLowerCase() + " "]
                                    }
                                    return null == t ? null : t.join(", ")
                                },
                                getAllResponseHeaders: function() {
                                    return d ? s : null
                                },
                                setRequestHeader: function(e, t) {
                                    return null == d && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e, w[e] = t), this
                                },
                                overrideMimeType: function(e) {
                                    return null == d && (h.mimeType = e), this
                                },
                                statusCode: function(e) {
                                    if (e)
                                        if (d) k.always(e[k.status]);
                                        else
                                            for (var t in e) x[t] = [x[t], e[t]];
                                    return this
                                },
                                abort: function(e) {
                                    var t = e || T;
                                    return i && i.abort(t), n(0, t), this
                                }
                            };
                        if (y.promise(k), h.url = ((e || h.url || jt.href) + "").replace(Rt, jt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(He) || [""], null == h.crossDomain) {
                            c = me.createElement("a");
                            try {
                                c.href = h.url, c.href = c.href, h.crossDomain = Xt.protocol + "//" + Xt.host != c.protocol + "//" + c.host
                            } catch (t) {
                                h.crossDomain = !0
                            }
                        }
                        if (h.data && h.processData && "string" != typeof h.data && (h.data = be.param(h.data, h.traditional)), ne(Bt, h, t, k), d) return k;
                        for (p in (u = be.event && h.global) && 0 == be.active++ && be.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ft.test(h.type), o = h.url.replace(It, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Mt, "+")) : (f = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Ht.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(zt, "$1"), f = (Ht.test(o) ? "&" : "?") + "_=" + Nt.guid++ + f), h.url = o + f), h.ifModified && (be.lastModified[o] && k.setRequestHeader("If-Modified-Since", be.lastModified[o]), be.etag[o] && k.setRequestHeader("If-None-Match", be.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && k.setRequestHeader("Content-Type", h.contentType), k.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" === h.dataTypes[0] ? "" : ", " + _t + "; q=0.01") : h.accepts["*"]), h.headers) k.setRequestHeader(p, h.headers[p]);
                        if (h.beforeSend && (!1 === h.beforeSend.call(g, k, h) || d)) return k.abort();
                        if (T = "abort", m.add(h.complete), k.done(h.success), k.fail(h.error), i = ne(Ut, h, t, k)) {
                            if (k.readyState = 1, u && v.trigger("ajaxSend", [k, h]), d) return k;
                            h.async && 0 < h.timeout && (l = r.setTimeout((function() {
                                k.abort("timeout")
                            }), h.timeout));
                            try {
                                d = !1, i.send(w, n)
                            } catch (t) {
                                if (d) throw t;
                                n(-1, t)
                            }
                        } else n(-1, "No Transport");
                        return k
                    },
                    getJSON: function(e, t, n) {
                        return be.get(e, t, n, "json")
                    },
                    getScript: function(e, t) {
                        return be.get(e, void 0, t, "script")
                    }
                }), be.each(["get", "post"], (function(e, t) {
                    be[t] = function(e, n, i, o) {
                        return ve(n) && (o = o || i, i = n, n = void 0), be.ajax(be.extend({
                            url: e,
                            type: t,
                            dataType: o,
                            data: n,
                            success: i
                        }, be.isPlainObject(e) && e))
                    }
                })), be.ajaxPrefilter((function(e) {
                    for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                })), be._evalUrl = function(e, t, n) {
                    return be.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(e) {
                            be.globalEval(e, t, n)
                        }
                    })
                }, be.fn.extend({
                    wrapAll: function(e) {
                        var t;
                        return this[0] && (ve(e) && (e = e.call(this[0])), t = be(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                            return e
                        })).append(this)), this
                    },
                    wrapInner: function(e) {
                        return ve(e) ? this.each((function(t) {
                            be(this).wrapInner(e.call(this, t))
                        })) : this.each((function() {
                            var t = be(this),
                                n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        }))
                    },
                    wrap: function(e) {
                        var t = ve(e);
                        return this.each((function(n) {
                            be(this).wrapAll(t ? e.call(this, n) : e)
                        }))
                    },
                    unwrap: function(e) {
                        return this.parent(e).not("body").each((function() {
                            be(this).replaceWith(this.childNodes)
                        })), this
                    }
                }), be.expr.pseudos.hidden = function(e) {
                    return !be.expr.pseudos.visible(e)
                }, be.expr.pseudos.visible = function(e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }, be.ajaxSettings.xhr = function() {
                    try {
                        return new r.XMLHttpRequest
                    } catch (e) {}
                };
                var Yt = {
                        0: 200,
                        1223: 204
                    },
                    Vt = be.ajaxSettings.xhr();
                ge.cors = !!Vt && "withCredentials" in Vt, ge.ajax = Vt = !!Vt, be.ajaxTransport((function(e) {
                    var t, n;
                    if (ge.cors || Vt && !e.crossDomain) return {
                        send: function(i, o) {
                            var s, a = e.xhr();
                            if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                for (s in e.xhrFields) a[s] = e.xhrFields[s];
                            for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) a.setRequestHeader(s, i[s]);
                            t = function(e) {
                                return function() {
                                    t && (t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" == typeof a.status ? o(a.status, a.statusText) : o(0, "error") : o(Yt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                        binary: a.response
                                    } : {
                                        text: a.responseText
                                    }, a.getAllResponseHeaders()))
                                }
                            }, a.onload = t(), n = a.onerror = a.ontimeout = t("error"), void 0 === a.onabort ? a.onreadystatechange = function() {
                                4 === a.readyState && r.setTimeout((function() {
                                    t && n()
                                }))
                            } : a.onabort = n, t = t("abort");
                            try {
                                a.send(e.hasContent && e.data || null)
                            } catch (e) {
                                if (t) throw e
                            }
                        },
                        abort: function() {
                            t && t()
                        }
                    }
                })), be.ajaxPrefilter((function(e) {
                    e.crossDomain && (e.contents.script = !1)
                })), be.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(e) {
                            return be.globalEval(e), e
                        }
                    }
                }), be.ajaxPrefilter("script", (function(e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
                })), be.ajaxTransport("script", (function(e) {
                    var t, n;
                    if (e.crossDomain || e.scriptAttrs) return {
                        send: function(i, o) {
                            t = be("<script>").attr(e.scriptAttrs || {}).prop({
                                charset: e.scriptCharset,
                                src: e.url
                            }).on("load error", n = function(e) {
                                t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                            }), me.head.appendChild(t[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }));
                var Gt = [],
                    Qt = /(=)\?(?=&|$)|\?\?/;
                be.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var e = Gt.pop() || be.expando + "_" + Nt.guid++;
                        return this[e] = !0, e
                    }
                }), be.ajaxPrefilter("json jsonp", (function(e, t, n) {
                    var i, o, s, a = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
                    if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = ve(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Qt, "$1" + i) : !1 !== e.jsonp && (e.url += (Ht.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                        return s || be.error(i + " was not called"), s[0]
                    }, e.dataTypes[0] = "json", o = r[i], r[i] = function() {
                        s = arguments
                    }, n.always((function() {
                        void 0 === o ? be(r).removeProp(i) : r[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Gt.push(i)), s && ve(o) && o(s[0]), s = o = void 0
                    })), "script"
                })), ge.createHTMLDocument = function() {
                    var e = me.implementation.createHTMLDocument("").body;
                    return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
                }(), be.parseHTML = function(e, t, n) {
                    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (ge.createHTMLDocument ? ((i = (t = me.implementation.createHTMLDocument("")).createElement("base")).href = me.location.href, t.head.appendChild(i)) : t = me), r = !n && [], (o = $e.exec(e)) ? [t.createElement(o[1])] : (o = $([e], t, r), r && r.length && be(r).remove(), be.merge([], o.childNodes)));
                    var i, o, r
                }, be.fn.load = function(e, t, n) {
                    var i, o, r, s = this,
                        a = e.indexOf(" ");
                    return -1 < a && (i = J(e.slice(a)), e = e.slice(0, a)), ve(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && be.ajax({
                        url: e,
                        type: o || "GET",
                        dataType: "html",
                        data: t
                    }).done((function(e) {
                        r = arguments, s.html(i ? be("<div>").append(be.parseHTML(e)).find(i) : e)
                    })).always(n && function(e, t) {
                        s.each((function() {
                            n.apply(this, r || [e.responseText, t, e])
                        }))
                    }), this
                }, be.expr.pseudos.animated = function(e) {
                    return be.grep(be.timers, (function(t) {
                        return e === t.elem
                    })).length
                }, be.offset = {
                    setOffset: function(e, t, n) {
                        var i, o, r, s, a, l, c = be.css(e, "position"),
                            d = be(e),
                            u = {};
                        "static" === c && (e.style.position = "relative"), a = d.offset(), r = be.css(e, "top"), l = be.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (s = (i = d.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), ve(t) && (t = t.call(e, n, be.extend({}, a))), null != t.top && (u.top = t.top - a.top + s), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : ("number" == typeof u.top && (u.top += "px"), "number" == typeof u.left && (u.left += "px"), d.css(u))
                    }
                }, be.fn.extend({
                    offset: function(e) {
                        if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                            be.offset.setOffset(this, e, t)
                        }));
                        var t, n, i = this[0];
                        return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                            top: t.top + n.pageYOffset,
                            left: t.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        } : void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var e, t, n, i = this[0],
                                o = {
                                    top: 0,
                                    left: 0
                                };
                            if ("fixed" === be.css(i, "position")) t = i.getBoundingClientRect();
                            else {
                                for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === be.css(e, "position");) e = e.parentNode;
                                e && e !== i && 1 === e.nodeType && ((o = be(e).offset()).top += be.css(e, "borderTopWidth", !0), o.left += be.css(e, "borderLeftWidth", !0))
                            }
                            return {
                                top: t.top - o.top - be.css(i, "marginTop", !0),
                                left: t.left - o.left - be.css(i, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            for (var e = this.offsetParent; e && "static" === be.css(e, "position");) e = e.offsetParent;
                            return e || Xe
                        }))
                    }
                }), be.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(e, t) {
                    var n = "pageYOffset" === t;
                    be.fn[e] = function(i) {
                        return Pe(this, (function(e, i, o) {
                            var r;
                            return ye(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
                        }), e, i, arguments.length)
                    }
                })), be.each(["top", "left"], (function(e, t) {
                    be.cssHooks[t] = W(ge.pixelPosition, (function(e, n) {
                        if (n) return n = z(e, t), lt.test(n) ? be(e).position()[t] + "px" : n
                    }))
                })), be.each({
                    Height: "height",
                    Width: "width"
                }, (function(e, t) {
                    be.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, (function(n, i) {
                        be.fn[i] = function(r, s) {
                            var a = arguments.length && (n || "boolean" != typeof r),
                                l = n || (!0 === r || !0 === s ? "margin" : "border");
                            return Pe(this, (function(t, n, r) {
                                var s;
                                return ye(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, o(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === r ? be.css(t, n, l) : be.style(t, n, r, l)
                            }), t, a ? r : void 0, a)
                        }
                    }))
                })), be.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                    be.fn[t] = function(e) {
                        return this.on(t, e)
                    }
                })), be.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, i) {
                        return this.on(t, e, n, i)
                    },
                    undelegate: function(e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                    },
                    hover: function(e, t) {
                        return this.mouseenter(e).mouseleave(t || e)
                    }
                }), be.each(["blur", "focus", "focusin", "focusout", "resize", "scroll", "click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave", "change", "select", "submit", "keydown", "keypress", "keyup", "contextmenu"], (function(e, t) {
                    be.fn[t] = function(e, n) {
                        return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
                    }
                }));
                var Jt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                be.proxy = function(e, t) {
                    var n, i, o;
                    if ("string" == typeof t && (n = e[t], t = e, e = n), ve(e)) return i = se.call(arguments, 2), o = function() {
                        return e.apply(t || this, i.concat(se.call(arguments)))
                    }, o.guid = e.guid = e.guid || be.guid++, o
                }, be.holdReady = function(e) {
                    e ? be.readyWait++ : be.ready(!0)
                }, be.isArray = Array.isArray, be.parseJSON = JSON.parse, be.nodeName = d, be.isFunction = ve, be.isWindow = ye, be.camelCase = m, be.type = l, be.now = Date.now, be.isNumeric = function(e) {
                    var t = be.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                }, be.trim = function(e) {
                    return null == e ? "" : (e + "").replace(Jt, "")
                }, void 0 === (n = function() {
                    return be
                }.apply(t, [])) || (e.exports = n);
                var Kt = r.jQuery,
                    Zt = r.$;
                return be.noConflict = function(e) {
                    return r.$ === be && (r.$ = Zt), e && r.jQuery === be && (r.jQuery = Kt), be
                }, void 0 === s && (r.jQuery = r.$ = be), be
            }))
        },
        9599: (e, t, n) => {
            var i, o, r, s = Math.pow,
                a = Math.ceil,
                l = Math.round,
                c = Math.sqrt,
                d = Math.abs;
            ! function(s) {
                "use strict";
                o = [n(74692)], void 0 === (r = "function" == typeof(i = s) ? i.apply(t, o) : i) || (e.exports = r)
            }((function(e) {
                "use strict";
                var t = Math.floor,
                    n = window.Slick || {};
                n = function() {
                    var t = 0;
                    return function(n, i) {
                        var o, r = this;
                        r.defaults = {
                            accessibility: !0,
                            adaptiveHeight: !1,
                            appendArrows: e(n),
                            appendDots: e(n),
                            arrows: !0,
                            asNavFor: null,
                            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                            autoplay: !1,
                            autoplaySpeed: 3e3,
                            centerMode: !1,
                            centerPadding: "50px",
                            cssEase: "ease",
                            customPaging: function(t, n) {
                                return e('<button type="button" />').text(n + 1)
                            },
                            dots: !1,
                            dotsClass: "slick-dots",
                            draggable: !0,
                            easing: "linear",
                            edgeFriction: .35,
                            fade: !1,
                            focusOnSelect: !1,
                            focusOnChange: !1,
                            infinite: !0,
                            initialSlide: 0,
                            lazyLoad: "ondemand",
                            mobileFirst: !1,
                            pauseOnHover: !0,
                            pauseOnFocus: !0,
                            pauseOnDotsHover: !1,
                            respondTo: "window",
                            responsive: null,
                            rows: 1,
                            rtl: !1,
                            slide: "",
                            slidesPerRow: 1,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            speed: 500,
                            swipe: !0,
                            swipeToSlide: !1,
                            touchMove: !0,
                            touchThreshold: 5,
                            useCSS: !0,
                            useTransform: !0,
                            variableWidth: !1,
                            vertical: !1,
                            verticalSwiping: !1,
                            waitForAnimate: !0,
                            zIndex: 1e3
                        }, r.initials = {
                            animating: !1,
                            dragging: !1,
                            autoPlayTimer: null,
                            currentDirection: 0,
                            currentLeft: null,
                            currentSlide: 0,
                            direction: 1,
                            $dots: null,
                            listWidth: null,
                            listHeight: null,
                            loadIndex: 0,
                            $nextArrow: null,
                            $prevArrow: null,
                            scrolling: !1,
                            slideCount: null,
                            slideWidth: null,
                            $slideTrack: null,
                            $slides: null,
                            sliding: !1,
                            slideOffset: 0,
                            swipeLeft: null,
                            swiping: !1,
                            $list: null,
                            touchObject: {},
                            transformsEnabled: !1,
                            unslicked: !1
                        }, e.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.focussed = !1, r.interrupted = !1, r.hidden = "hidden", r.paused = !0, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = e(n), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = e(n).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 === document.mozHidden ? void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange") : (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange"), r.autoPlay = e.proxy(r.autoPlay, r), r.autoPlayClear = e.proxy(r.autoPlayClear, r), r.autoPlayIterator = e.proxy(r.autoPlayIterator, r), r.changeSlide = e.proxy(r.changeSlide, r), r.clickHandler = e.proxy(r.clickHandler, r), r.selectHandler = e.proxy(r.selectHandler, r), r.setPosition = e.proxy(r.setPosition, r), r.swipeHandler = e.proxy(r.swipeHandler, r), r.dragHandler = e.proxy(r.dragHandler, r), r.keyHandler = e.proxy(r.keyHandler, r), r.instanceUid = t++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0)
                    }
                }(), n.prototype.activateADA = function() {
                    this.$slideTrack.find(".slick-active").attr({
                        "aria-hidden": "false"
                    }).find("a, input, button, select").attr({
                        tabindex: "0"
                    })
                }, n.prototype.addSlide = n.prototype.slickAdd = function(t, n, i) {
                    var o = this;
                    if ("boolean" == typeof n) i = n, n = null;
                    else if (0 > n || n >= o.slideCount) return !1;
                    o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each((function(t, n) {
                        e(n).attr("data-slick-index", t)
                    })), o.$slidesCache = o.$slides, o.reinit()
                }, n.prototype.animateHeight = function() {
                    var e = this;
                    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                        e.$list.animate({
                            height: t
                        }, e.options.speed)
                    }
                }, n.prototype.animateSlide = function(t, n) {
                    var i = {},
                        o = this;
                    o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
                        left: t
                    }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
                        top: t
                    }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
                        animStart: o.currentLeft
                    }).animate({
                        animStart: t
                    }, {
                        duration: o.options.speed,
                        easing: o.options.easing,
                        step: function(e) {
                            e = a(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
                        },
                        complete: function() {
                            n && n.call()
                        }
                    })) : (o.applyTransition(), t = a(t), i[o.animType] = !1 === o.options.vertical ? "translate3d(" + t + "px, 0px, 0px)" : "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout((function() {
                        o.disableTransition(), n.call()
                    }), o.options.speed))
                }, n.prototype.getNavTarget = function() {
                    var t = this.options.asNavFor;
                    return t && null !== t && (t = e(t).not(this.$slider)), t
                }, n.prototype.asNavFor = function(t) {
                    var n = this.getNavTarget();
                    null !== n && "object" == typeof n && n.each((function() {
                        var n = e(this).slick("getSlick");
                        n.unslicked || n.slideHandler(t, !0)
                    }))
                }, n.prototype.applyTransition = function(e) {
                    var t = this,
                        n = {};
                    n[t.transitionType] = !1 === t.options.fade ? t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
                }, n.prototype.autoPlay = function() {
                    var e = this;
                    e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
                }, n.prototype.autoPlayClear = function() {
                    this.autoPlayTimer && clearInterval(this.autoPlayTimer)
                }, n.prototype.autoPlayIterator = function() {
                    var e = this,
                        t = e.currentSlide + e.options.slidesToScroll;
                    e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, 0 == e.currentSlide - 1 && (e.direction = 1))), e.slideHandler(t))
                }, n.prototype.buildArrows = function() {
                    var t = this;
                    !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                        "aria-disabled": "true",
                        tabindex: "-1"
                    }))
                }, n.prototype.buildDots = function() {
                    var t, n, i = this;
                    if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                        for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
                        i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
                    }
                }, n.prototype.buildOut = function() {
                    var t = this;
                    t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each((function(t, n) {
                        e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
                    })), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (!0 === t.options.centerMode || !0 === t.options.swipeToSlide) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
                }, n.prototype.buildRows = function() {
                    var e, t, n, i, o, r, s, l = this;
                    if (i = document.createDocumentFragment(), r = l.$slider.children(), 0 < l.options.rows) {
                        for (s = l.options.slidesPerRow * l.options.rows, o = a(r.length / s), e = 0; e < o; e++) {
                            var c = document.createElement("div");
                            for (t = 0; t < l.options.rows; t++) {
                                var d = document.createElement("div");
                                for (n = 0; n < l.options.slidesPerRow; n++) {
                                    var u = e * s + (t * l.options.slidesPerRow + n);
                                    r.get(u) && d.appendChild(r.get(u))
                                }
                                c.appendChild(d)
                            }
                            i.appendChild(c)
                        }
                        l.$slider.empty().append(i), l.$slider.children().children().children().css({
                            width: 100 / l.options.slidesPerRow + "%",
                            display: "inline-block"
                        })
                    }
                }, n.prototype.checkResponsive = function(t, n) {
                    var i, o, r, s = this,
                        a = !1,
                        l = s.$slider.width(),
                        c = window.innerWidth || e(window).width();
                    if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                        for (i in o = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
                        null === o ? null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o) : (null === s.activeBreakpoint || o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o), t || 0 == a || s.$slider.trigger("breakpoint", [s, a])
                    }
                }, n.prototype.changeSlide = function(t, n) {
                    var i, o, r = this,
                        s = e(t.currentTarget);
                    switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), i = 0 != r.slideCount % r.options.slidesToScroll ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                        case "previous":
                            o = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
                            break;
                        case "next":
                            o = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
                            break;
                        case "index":
                            var a = 0 === t.data.index ? 0 : t.data.index || s.index() * r.options.slidesToScroll;
                            r.slideHandler(r.checkNavigable(a), !1, n), s.children().trigger("focus")
                    }
                }, n.prototype.checkNavigable = function(e) {
                    var t, n;
                    if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
                    else
                        for (var i in t) {
                            if (e < t[i]) {
                                e = n;
                                break
                            }
                            n = t[i]
                        }
                    return e
                }, n.prototype.cleanUpEvents = function() {
                    var t = this;
                    t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
                }, n.prototype.cleanUpSlideEvents = function() {
                    var t = this;
                    t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
                }, n.prototype.cleanUpRows = function() {
                    var e, t = this;
                    0 < t.options.rows && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
                }, n.prototype.clickHandler = function(e) {
                    !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
                }, n.prototype.destroy = function(t) {
                    var n = this;
                    n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
                        e(this).attr("style", e(this).data("originalStyling"))
                    })), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, t || n.$slider.trigger("destroy", [n])
                }, n.prototype.disableTransition = function(e) {
                    var t = this,
                        n = {};
                    n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
                }, n.prototype.fadeSlide = function(e, t) {
                    var n = this;
                    !1 === n.cssTransitions ? (n.$slides.eq(e).css({
                        zIndex: n.options.zIndex
                    }), n.$slides.eq(e).animate({
                        opacity: 1
                    }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
                        opacity: 1,
                        zIndex: n.options.zIndex
                    }), t && setTimeout((function() {
                        n.disableTransition(e), t.call()
                    }), n.options.speed))
                }, n.prototype.fadeSlideOut = function(e) {
                    var t = this;
                    !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                        opacity: 0,
                        zIndex: t.options.zIndex - 2
                    }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                        opacity: 0,
                        zIndex: t.options.zIndex - 2
                    }))
                }, n.prototype.filterSlides = n.prototype.slickFilter = function(e) {
                    var t = this;
                    null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
                }, n.prototype.focusHandler = function() {
                    var t = this;
                    t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(n) {
                        n.stopImmediatePropagation();
                        var i = e(this);
                        setTimeout((function() {
                            t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
                        }), 0)
                    }))
                }, n.prototype.getCurrent = n.prototype.slickCurrentSlide = function() {
                    return this.currentSlide
                }, n.prototype.getDotCount = function() {
                    var e = this,
                        t = 0,
                        n = 0,
                        i = 0;
                    if (!0 === e.options.infinite)
                        if (e.slideCount <= e.options.slidesToShow) ++i;
                        else
                            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                    else if (!0 === e.options.centerMode) i = e.slideCount;
                    else if (e.options.asNavFor)
                        for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                    else i = 1 + a((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                    return i - 1
                }, n.prototype.getLeft = function(e) {
                    var n, i, o, r, s = this,
                        a = 0;
                    return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, r = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? r = -1.5 : 1 === s.options.slidesToShow && (r = -2)), a = i * s.options.slidesToShow * r), 0 != s.slideCount % s.options.slidesToScroll && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, a = (s.options.slidesToShow - (e - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, a = s.slideCount % s.options.slidesToScroll * i * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, a = (e + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, a = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * t(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * t(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * t(s.options.slidesToShow / 2)), n = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * i * -1 + a, !0 === s.options.variableWidth && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), n = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === s.options.centerMode && (o = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), n = !0 === s.options.rtl ? o[0] ? -1 * (s.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, n += (s.$list.width() - o.outerWidth()) / 2)), n
                }, n.prototype.getOption = n.prototype.slickGetOption = function(e) {
                    return this.options[e]
                }, n.prototype.getNavigableIndexes = function() {
                    var e, t = this,
                        n = 0,
                        i = 0,
                        o = [];
                    for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                    return o
                }, n.prototype.getSlick = function() {
                    return this
                }, n.prototype.getSlideCount = function() {
                    var n, i, o = this;
                    return i = !0 === o.options.centerMode ? o.slideWidth * t(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each((function(t, r) {
                        if (r.offsetLeft - i + e(r).outerWidth() / 2 > -1 * o.swipeLeft) return n = r, !1
                    })), d(e(n).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
                }, n.prototype.goTo = n.prototype.slickGoTo = function(e, t) {
                    this.changeSlide({
                        data: {
                            message: "index",
                            index: parseInt(e)
                        }
                    }, t)
                }, n.prototype.init = function(t) {
                    var n = this;
                    e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
                }, n.prototype.initADA = function() {
                    var t = this,
                        n = a(t.slideCount / t.options.slidesToShow),
                        i = t.getNavigableIndexes().filter((function(e) {
                            return 0 <= e && e < t.slideCount
                        }));
                    t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                        "aria-hidden": "true",
                        tabindex: "-1"
                    }).find("a, input, button, select").attr({
                        tabindex: "-1"
                    }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each((function(n) {
                        var o = i.indexOf(n);
                        if (e(this).attr({
                                role: "tabpanel",
                                id: "slick-slide" + t.instanceUid + n,
                                tabindex: -1
                            }), -1 !== o) {
                            var r = "slick-slide-control" + t.instanceUid + o;
                            e("#" + r).length && e(this).attr({
                                "aria-describedby": r
                            })
                        }
                    })), t.$dots.attr("role", "tablist").find("li").each((function(o) {
                        var r = i[o];
                        e(this).attr({
                            role: "presentation"
                        }), e(this).find("button").first().attr({
                            role: "tab",
                            id: "slick-slide-control" + t.instanceUid + o,
                            "aria-controls": "slick-slide" + t.instanceUid + r,
                            "aria-label": o + 1 + " of " + n,
                            "aria-selected": null,
                            tabindex: "-1"
                        })
                    })).eq(t.currentSlide).find("button").attr({
                        "aria-selected": "true",
                        tabindex: "0"
                    }).end());
                    for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++) t.options.focusOnChange ? t.$slides.eq(o).attr({
                        tabindex: "0"
                    }) : t.$slides.eq(o).removeAttr("tabindex");
                    t.activateADA()
                }, n.prototype.initArrowEvents = function() {
                    var e = this;
                    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                        message: "previous"
                    }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                        message: "next"
                    }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
                }, n.prototype.initDotEvents = function() {
                    var t = this;
                    !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
                        message: "index"
                    }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
                }, n.prototype.initSlideEvents = function() {
                    var t = this;
                    t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
                }, n.prototype.initializeEvents = function() {
                    var t = this;
                    t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                        action: "start"
                    }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                        action: "move"
                    }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                        action: "end"
                    }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                        action: "end"
                    }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
                }, n.prototype.initUI = function() {
                    var e = this;
                    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
                }, n.prototype.keyHandler = function(e) {
                    var t = this;
                    e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                        data: {
                            message: !0 === t.options.rtl ? "next" : "previous"
                        }
                    }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                        data: {
                            message: !0 === t.options.rtl ? "previous" : "next"
                        }
                    }))
                }, n.prototype.lazyLoad = function() {
                    function t(t) {
                        e("img[data-lazy]", t).each((function() {
                            var t = e(this),
                                n = e(this).attr("data-lazy"),
                                i = e(this).attr("data-srcset"),
                                o = e(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                                s = document.createElement("img");
                            s.onload = function() {
                                t.animate({
                                    opacity: 0
                                }, 100, (function() {
                                    i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).animate({
                                        opacity: 1
                                    }, 200, (function() {
                                        t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                    })), r.$slider.trigger("lazyLoaded", [r, t, n])
                                }))
                            }, s.onerror = function() {
                                t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, n])
                            }, s.src = n
                        }))
                    }
                    var n, i, o, r = this;
                    if (!0 === r.options.centerMode ? !0 === r.options.infinite ? o = (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (i = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (i = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, o = a(i + r.options.slidesToShow), !0 === r.options.fade && (0 < i && i--, o <= r.slideCount && o++)), n = r.$slider.find(".slick-slide").slice(i, o), "anticipated" === r.options.lazyLoad)
                        for (var s = i - 1, l = o, c = r.$slider.find(".slick-slide"), d = 0; d < r.options.slidesToScroll; d++) 0 > s && (s = r.slideCount - 1), n = (n = n.add(c.eq(s))).add(c.eq(l)), s--, l++;
                    t(n), r.slideCount <= r.options.slidesToShow ? t(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? t(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && t(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
                }, n.prototype.loadSlider = function() {
                    var e = this;
                    e.setPosition(), e.$slideTrack.css({
                        opacity: 1
                    }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
                }, n.prototype.next = n.prototype.slickNext = function() {
                    this.changeSlide({
                        data: {
                            message: "next"
                        }
                    })
                }, n.prototype.orientationChange = function() {
                    this.checkResponsive(), this.setPosition()
                }, n.prototype.pause = n.prototype.slickPause = function() {
                    this.autoPlayClear(), this.paused = !0
                }, n.prototype.play = n.prototype.slickPlay = function() {
                    var e = this;
                    e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
                }, n.prototype.postSlide = function(t) {
                    var n = this;
                    !n.unslicked && (n.$slider.trigger("afterChange", [n, t]), n.animating = !1, n.slideCount > n.options.slidesToShow && n.setPosition(), n.swipeLeft = null, n.options.autoplay && n.autoPlay(), !0 === n.options.accessibility && (n.initADA(), n.options.focusOnChange)) && e(n.$slides.get(n.currentSlide)).attr("tabindex", 0).focus()
                }, n.prototype.prev = n.prototype.slickPrev = function() {
                    this.changeSlide({
                        data: {
                            message: "previous"
                        }
                    })
                }, n.prototype.preventDefault = function(e) {
                    e.preventDefault()
                }, n.prototype.progressiveLazyLoad = function(t) {
                    t = t || 1;
                    var n, i, o, r, s, a = this,
                        l = e("img[data-lazy]", a.$slider);
                    l.length ? (n = l.first(), i = n.attr("data-lazy"), o = n.attr("data-srcset"), r = n.attr("data-sizes") || a.$slider.attr("data-sizes"), (s = document.createElement("img")).onload = function() {
                        o && (n.attr("srcset", o), r && n.attr("sizes", r)), n.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, n, i]), a.progressiveLazyLoad()
                    }, s.onerror = function() {
                        3 > t ? setTimeout((function() {
                            a.progressiveLazyLoad(t + 1)
                        }), 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, n, i]), a.progressiveLazyLoad())
                    }, s.src = i) : a.$slider.trigger("allImagesLoaded", [a])
                }, n.prototype.refresh = function(t) {
                    var n, i, o = this;
                    i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
                        currentSlide: n
                    }), o.init(), t || o.changeSlide({
                        data: {
                            message: "index",
                            index: n
                        }
                    }, !1)
                }, n.prototype.registerBreakpoints = function() {
                    var t, n, i, o = this,
                        r = o.options.responsive || null;
                    if ("array" === e.type(r) && r.length) {
                        for (t in o.respondTo = o.options.respondTo || "window", r)
                            if (i = o.breakpoints.length - 1, r.hasOwnProperty(t)) {
                                for (n = r[t].breakpoint; 0 <= i;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                                o.breakpoints.push(n), o.breakpointSettings[n] = r[t].settings
                            }
                        o.breakpoints.sort((function(e, t) {
                            return o.options.mobileFirst ? e - t : t - e
                        }))
                    }
                }, n.prototype.reinit = function() {
                    var t = this;
                    t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide -= t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
                }, n.prototype.resize = function() {
                    var t = this;
                    e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout((function() {
                        t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
                    }), 50))
                }, n.prototype.removeSlide = n.prototype.slickRemove = function(e, t, n) {
                    var i = this;
                    return e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, !(1 > i.slideCount || 0 > e || e > i.slideCount - 1) && (i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
                }, n.prototype.setCSS = function(e) {
                    var t, n, i = this,
                        o = {};
                    !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? a(e) + "px" : "0px", n = "top" == i.positionProp ? a(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
                }, n.prototype.setDimensions = function() {
                    var e = this;
                    !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                        padding: "0px " + e.options.centerPadding
                    }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                        padding: e.options.centerPadding + " 0px"
                    })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = a(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(a(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = a(e.listWidth), e.$slideTrack.height(a(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                    var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                    !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
                }, n.prototype.setFade = function() {
                    var t, n = this;
                    n.$slides.each((function(i, o) {
                        t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
                            position: "relative",
                            right: t,
                            top: 0,
                            zIndex: n.options.zIndex - 2,
                            opacity: 0
                        }) : e(o).css({
                            position: "relative",
                            left: t,
                            top: 0,
                            zIndex: n.options.zIndex - 2,
                            opacity: 0
                        })
                    })), n.$slides.eq(n.currentSlide).css({
                        zIndex: n.options.zIndex - 1,
                        opacity: 1
                    })
                }, n.prototype.setHeight = function() {
                    var e = this;
                    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                        e.$list.css("height", t)
                    }
                }, n.prototype.setOption = n.prototype.slickSetOption = function() {
                    var t, n, i, o, r, s = this,
                        a = !1;
                    if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[i] = o;
                    else if ("multiple" === r) e.each(i, (function(e, t) {
                        s.options[e] = t
                    }));
                    else if ("responsive" === r)
                        for (n in o)
                            if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]];
                            else {
                                for (t = s.options.responsive.length - 1; 0 <= t;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1), t--;
                                s.options.responsive.push(o[n])
                            }
                    a && (s.unload(), s.reinit())
                }, n.prototype.setPosition = function() {
                    var e = this;
                    e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
                }, n.prototype.setProps = function() {
                    var e = this,
                        t = document.body.style;
                    e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? 3 > e.options.zIndex && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
                }, n.prototype.setSlideClasses = function(e) {
                    var n, i, o, r, s = this;
                    if (i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode) {
                        var a = 0 == s.options.slidesToShow % 2 ? 1 : 0;
                        n = t(s.options.slidesToShow / 2), !0 === s.options.infinite && (e >= n && e <= s.slideCount - 1 - n ? s.$slides.slice(e - n + a, e + n + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = s.options.slidesToShow + e, i.slice(o - n + 1 + a, o + n + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e == s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")
                    } else 0 <= e && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (r = s.slideCount % s.options.slidesToShow, o = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(o - (s.options.slidesToShow - r), o + r).addClass("slick-active").attr("aria-hidden", "false") : i.slice(o, o + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                    ("ondemand" === s.options.lazyLoad || "anticipated" === s.options.lazyLoad) && s.lazyLoad()
                }, n.prototype.setupInfinite = function() {
                    var t, n, i, o = this;
                    if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
                        for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                        for (t = 0; t < i + o.slideCount; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                        o.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                            e(this).attr("id", "")
                        }))
                    }
                }, n.prototype.interrupt = function(e) {
                    e || this.autoPlay(), this.interrupted = e
                }, n.prototype.selectHandler = function(t) {
                    var n = this,
                        i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                        o = parseInt(i.attr("data-slick-index"));
                    return o || (o = 0), n.slideCount <= n.options.slidesToShow ? void n.slideHandler(o, !1, !0) : void n.slideHandler(o)
                }, n.prototype.slideHandler = function(e, t, n) {
                    var i, o, r, s, a, l = null,
                        c = this;
                    if (t = t || !1, !0 !== c.animating || !0 !== c.options.waitForAnimate) return !0 !== c.options.fade || c.currentSlide !== e ? (!1 === t && c.asNavFor(e), i = e, l = c.getLeft(i), s = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (0 > e || e > c.getDotCount() * c.options.slidesToScroll) || !1 === c.options.infinite && !0 === c.options.centerMode && (0 > e || e > c.slideCount - c.options.slidesToScroll) ? void(!1 === c.options.fade && (i = c.currentSlide, !0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(s, (function() {
                        c.postSlide(i)
                    })) : c.postSlide(i))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = 0 > i ? 0 == c.slideCount % c.options.slidesToScroll ? c.slideCount + i : c.slideCount - c.slideCount % c.options.slidesToScroll : i >= c.slideCount ? 0 == c.slideCount % c.options.slidesToScroll ? i - c.slideCount : 0 : i, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), r = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 === n ? c.postSlide(o) : (c.fadeSlideOut(r), c.fadeSlide(o, (function() {
                        c.postSlide(o)
                    }))), void c.animateHeight()) : void(!0 !== n && c.slideCount > c.options.slidesToShow ? c.animateSlide(l, (function() {
                        c.postSlide(o)
                    })) : c.postSlide(o)))) : void 0
                }, n.prototype.startLoad = function() {
                    var e = this;
                    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
                }, n.prototype.swipeDirection = function() {
                    var e, t, n, i, o = this;
                    return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), 0 > (i = l(180 * n / Math.PI)) && (i = 360 - d(i)), 45 >= i && 0 <= i || 360 >= i && 315 <= i ? !1 === o.options.rtl ? "left" : "right" : 135 <= i && 225 >= i ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= i && 135 >= i ? "down" : "up" : "vertical"
                }, n.prototype.swipeEnd = function() {
                    var e, t, n = this;
                    if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1, !1;
                    if (n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
                    if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                        switch (t = n.swipeDirection()) {
                            case "left":
                            case "down":
                                e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                                break;
                            case "right":
                            case "up":
                                e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                        }
                        "vertical" != t && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, t]))
                    } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
                }, n.prototype.swipeHandler = function(e) {
                    var t = this;
                    if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                        case "start":
                            t.swipeStart(e);
                            break;
                        case "move":
                            t.swipeMove(e);
                            break;
                        case "end":
                            t.swipeEnd(e)
                    }
                }, n.prototype.swipeMove = function(e) {
                    var t, n, i, o, r, a, d = this;
                    return r = void 0 === e.originalEvent ? null : e.originalEvent.touches, !(!d.dragging || d.scrolling || r && 1 !== r.length) && (t = d.getLeft(d.currentSlide), d.touchObject.curX = void 0 === r ? e.clientX : r[0].pageX, d.touchObject.curY = void 0 === r ? e.clientY : r[0].pageY, d.touchObject.swipeLength = l(c(s(d.touchObject.curX - d.touchObject.startX, 2))), a = l(c(s(d.touchObject.curY - d.touchObject.startY, 2))), !d.options.verticalSwiping && !d.swiping && 4 < a ? (d.scrolling = !0, !1) : (!0 === d.options.verticalSwiping && (d.touchObject.swipeLength = a), n = d.swipeDirection(), void 0 !== e.originalEvent && 4 < d.touchObject.swipeLength && (d.swiping = !0, e.preventDefault()), o = (!1 === d.options.rtl ? 1 : -1) * (d.touchObject.curX > d.touchObject.startX ? 1 : -1), !0 === d.options.verticalSwiping && (o = d.touchObject.curY > d.touchObject.startY ? 1 : -1), i = d.touchObject.swipeLength, d.touchObject.edgeHit = !1, !1 === d.options.infinite && (0 === d.currentSlide && "right" === n || d.currentSlide >= d.getDotCount() && "left" === n) && (i = d.touchObject.swipeLength * d.options.edgeFriction, d.touchObject.edgeHit = !0), d.swipeLeft = !1 === d.options.vertical ? t + i * o : t + i * (d.$list.height() / d.listWidth) * o, !0 === d.options.verticalSwiping && (d.swipeLeft = t + i * o), !0 !== d.options.fade && !1 !== d.options.touchMove && (!0 === d.animating ? (d.swipeLeft = null, !1) : void d.setCSS(d.swipeLeft))))
                }, n.prototype.swipeStart = function(e) {
                    var t, n = this;
                    return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 === t ? e.clientX : t.pageX, n.touchObject.startY = n.touchObject.curY = void 0 === t ? e.clientY : t.pageY, void(n.dragging = !0))
                }, n.prototype.unfilterSlides = n.prototype.slickUnfilter = function() {
                    var e = this;
                    null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
                }, n.prototype.unload = function() {
                    var t = this;
                    e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
                }, n.prototype.unslick = function(e) {
                    var t = this;
                    t.$slider.trigger("unslick", [t, e]), t.destroy()
                }, n.prototype.updateArrows = function() {
                    var e = this;
                    t(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
                }, n.prototype.updateDots = function() {
                    var e = this;
                    null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(t(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
                }, n.prototype.visibility = function() {
                    var e = this;
                    e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
                }, e.fn.slick = function() {
                    var e, t, i = this,
                        o = arguments[0],
                        r = Array.prototype.slice.call(arguments, 1),
                        s = i.length;
                    for (e = 0; e < s; e++)
                        if ("object" == typeof o || void 0 === o ? i[e].slick = new n(i[e], o) : t = i[e].slick[o].apply(i[e].slick, r), void 0 !== t) return t;
                    return i
                }
            }))
        }
    }
]);