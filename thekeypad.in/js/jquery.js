/*! jQuery v3.7.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = []
      , r = Object.getPrototypeOf
      , i = n.slice
      , o = n.flat ? function(e) {
        return n.flat.call(e)
    }
    : function(e) {
        return n.concat.apply([], e)
    }
      , s = n.push
      , a = n.indexOf
      , u = {}
      , l = u.toString
      , c = u.hasOwnProperty
      , f = c.toString
      , p = f.call(Object)
      , d = {}
      , h = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , g = function(e) {
        return null != e && e === e.window
    }
      , v = e.document
      , y = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function m(e, t, n) {
        var r, i, o = (n = n || v).createElement("script");
        if (o.text = e,
        t)
            for (r in y)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function $(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[l.call(e)] || "object" : typeof e
    }
    var x = "3.7.0"
      , b = /HTML$/i
      , _ = function(e, t) {
        return new _.fn.init(e,t)
    };
    function T(e) {
        var t = !!e && "length"in e && e.length
          , n = $(e);
        return !h(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    function w(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    _.fn = _.prototype = {
        jquery: x,
        constructor: _,
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null == e ? i.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = _.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return _.each(this, e)
        },
        map: function(e) {
            return this.pushStack(_.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(_.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(_.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    },
    _.extend = _.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || h(s) || (s = {}),
        a === u && (s = this,
        a--); a < u; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && s !== r && (l && r && (_.isPlainObject(r) || (i = Array.isArray(r))) ? (n = s[t],
                    o = i && !Array.isArray(n) ? [] : i || _.isPlainObject(n) ? n : {},
                    i = !1,
                    s[t] = _.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }
    ,
    _.extend({
        expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== l.call(e)) && (!(t = r(e)) || "function" == typeof (n = c.call(t, "constructor") && t.constructor) && f.call(n) === p)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            m(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (T(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        text: function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i)
                    return e.textContent;
                if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += _.text(t);
            return n
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (T(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : a.call(t, e, n)
        },
        isXMLDoc: function(e) {
            var t = e && e.namespaceURI
              , n = e && (e.ownerDocument || e).documentElement;
            return !b.test(t || n && n.nodeName || "HTML")
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
                !t(e[i], i) !== s && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, s = 0, a = [];
            if (T(e))
                for (r = e.length; s < r; s++)
                    null != (i = t(e[s], s, n)) && a.push(i);
            else
                for (s in e)
                    null != (i = t(e[s], s, n)) && a.push(i);
            return o(a)
        },
        guid: 1,
        support: d
    }),
    "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]),
    _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var C = n.pop
      , k = n.sort
      , S = n.splice
      , j = "[\\x20\\t\\r\\n\\f]"
      , E = RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g");
    _.contains = function(e, t) {
        var n = t && t.parentNode;
        return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
    }
    ;
    var D = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function A(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
    }
    _.escapeSelector = function(e) {
        return (e + "").replace(D, A)
    }
    ;
    var N = v
      , q = s;
    !function() {
        var t, r, o, s, u, l, f, p, h, g, v = q, y = _.expando, m = 0, $ = 0, x = et(), b = et(), T = et(), D = et(), A = function(e, t) {
            return e === t && (u = !0),
            0
        }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", H = "(?:\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", P = "\\[" + j + "*(" + H + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + j + "*\\]", O = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", M = RegExp(j + "+", "g"), W = RegExp("^" + j + "*," + j + "*"), I = RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"), R = RegExp(j + "|>"), F = RegExp(O), B = RegExp("^" + H + "$"), X = {
            ID: RegExp("^#(" + H + ")"),
            CLASS: RegExp("^\\.(" + H + ")"),
            TAG: RegExp("^(" + H + "|[*])"),
            ATTR: RegExp("^" + P),
            PSEUDO: RegExp("^" + O),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
            bool: RegExp("^(?:" + L + ")$", "i"),
            needsContext: RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
        }, z = /^(?:input|select|textarea|button)$/i, U = /^h\d$/i, V = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, G = /[+~]/, Y = RegExp("\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])", "g"), Q = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, K = function() {
            el()
        }, J = ed(function(e) {
            return !0 === e.disabled && w(e, "fieldset")
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            v.apply(n = i.call(N.childNodes), N.childNodes),
            n[N.childNodes.length].nodeType
        } catch (Z) {
            v = {
                apply: function(e, t) {
                    q.apply(e, i.call(t))
                },
                call: function(e) {
                    q.apply(e, i.call(arguments, 1))
                }
            }
        }
        function ee(e, t, n, r) {
            var i, o, s, a, u, c, f, g = t && t.ownerDocument, m = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)
                return n;
            if (!r && (el(t),
            t = t || l,
            p)) {
                if (11 !== m && (u = V.exec(e))) {
                    if (i = u[1]) {
                        if (9 === m) {
                            if (!(s = t.getElementById(i)))
                                return n;
                            if (s.id === i)
                                return v.call(n, s),
                                n
                        } else if (g && (s = g.getElementById(i)) && ee.contains(t, s) && s.id === i)
                            return v.call(n, s),
                            n
                    } else {
                        if (u[2])
                            return v.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((i = u[3]) && t.getElementsByClassName)
                            return v.apply(n, t.getElementsByClassName(i)),
                            n
                    }
                }
                if (!(D[e + " "] || h && h.test(e))) {
                    if (f = e,
                    g = t,
                    1 === m && (R.test(e) || I.test(e))) {
                        for ((g = G.test(e) && eu(t.parentNode) || t) == t && d.scope || ((a = t.getAttribute("id")) ? a = _.escapeSelector(a) : t.setAttribute("id", a = y)),
                        o = (c = ef(e)).length; o--; )
                            c[o] = (a ? "#" + a : ":scope") + " " + ep(c[o]);
                        f = c.join(",")
                    }
                    try {
                        return v.apply(n, g.querySelectorAll(f)),
                        n
                    } catch ($) {
                        D(e, !0)
                    } finally {
                        a === y && t.removeAttribute("id")
                    }
                }
            }
            return e$(e.replace(E, "$1"), t, n, r)
        }
        function et() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
        }
        function en(e) {
            return e[y] = !0,
            e
        }
        function er(e) {
            var t = l.createElement("fieldset");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ei(e) {
            return function(t) {
                return w(t, "input") && t.type === e
            }
        }
        function eo(e) {
            return function(t) {
                return (w(t, "input") || w(t, "button")) && t.type === e
            }
        }
        function es(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || !e !== t.isDisabled && J(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function ea(e) {
            return en(function(t) {
                return t = +t,
                en(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--; )
                        n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function eu(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function el(e) {
            var t, n = e ? e.ownerDocument || e : N;
            return n != l && 9 === n.nodeType && n.documentElement && (f = (l = n).documentElement,
            p = !_.isXMLDoc(l),
            g = f.matches || f.webkitMatchesSelector || f.msMatchesSelector,
            N != l && (t = l.defaultView) && t.top !== t && t.addEventListener("unload", K),
            d.getById = er(function(e) {
                return f.appendChild(e).id = _.expando,
                !l.getElementsByName || !l.getElementsByName(_.expando).length
            }),
            d.disconnectedMatch = er(function(e) {
                return g.call(e, "*")
            }),
            d.scope = er(function() {
                return l.querySelectorAll(":scope")
            }),
            d.cssHas = er(function() {
                try {
                    return l.querySelector(":has(*,:jqfake)"),
                    !1
                } catch (e) {
                    return !0
                }
            }),
            d.getById ? (r.filter.ID = function(e) {
                var t = e.replace(Y, Q);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && p) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (r.filter.ID = function(e) {
                var t = e.replace(Y, Q);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && p) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (i = t.getElementsByName(e),
                        r = 0; o = i[r++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            r.find.TAG = function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
            }
            ,
            r.find.CLASS = function(e, t) {
                if (void 0 !== t.getElementsByClassName && p)
                    return t.getElementsByClassName(e)
            }
            ,
            h = [],
            er(function(e) {
                var t;
                f.appendChild(e).innerHTML = "<a id='" + y + "' href='' disabled='disabled'></a><select id='" + y + "-\r\\' disabled='disabled'><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || h.push("\\[" + j + "*(?:value|" + L + ")"),
                e.querySelectorAll("[id~=" + y + "-]").length || h.push("~="),
                e.querySelectorAll("a#" + y + "+*").length || h.push(".#.+[+~]"),
                e.querySelectorAll(":checked").length || h.push(":checked"),
                (t = l.createElement("input")).setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                f.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && h.push(":enabled", ":disabled"),
                (t = l.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || h.push("\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")")
            }),
            d.cssHas || h.push(":has"),
            h = h.length && RegExp(h.join("|")),
            A = function(e, t) {
                if (e === t)
                    return u = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument == N && ee.contains(N, e) ? -1 : t === l || t.ownerDocument == N && ee.contains(N, t) ? 1 : s ? a.call(s, e) - a.call(s, t) : 0 : 4 & n ? -1 : 1)
            }
            ),
            l
        }
        for (t in ee.matches = function(e, t) {
            return ee(e, null, null, t)
        }
        ,
        ee.matchesSelector = function(e, t) {
            if (el(e),
            p && !D[t + " "] && (!h || !h.test(t)))
                try {
                    var n = g.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (r) {
                    D(t, !0)
                }
            return 0 < ee(t, l, null, [e]).length
        }
        ,
        ee.contains = function(e, t) {
            return (e.ownerDocument || e) != l && el(e),
            _.contains(e, t)
        }
        ,
        ee.attr = function(e, t) {
            (e.ownerDocument || e) != l && el(e);
            var n = r.attrHandle[t.toLowerCase()]
              , i = n && c.call(r.attrHandle, t.toLowerCase()) ? n(e, t, !p) : void 0;
            return void 0 !== i ? i : e.getAttribute(t)
        }
        ,
        ee.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        _.uniqueSort = function(e) {
            var t, n = [], r = 0, o = 0;
            if (u = !d.sortStable,
            s = !d.sortStable && i.call(e, 0),
            k.call(e, A),
            u) {
                for (; t = e[o++]; )
                    t === e[o] && (r = n.push(o));
                for (; r--; )
                    S.call(e, n[r], 1)
            }
            return s = null,
            e
        }
        ,
        _.fn.uniqueSort = function() {
            return this.pushStack(_.uniqueSort(i.apply(this)))
        }
        ,
        (r = _.expr = {
            cacheLength: 50,
            createPseudo: en,
            match: X,
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
                    return e[1] = e[1].replace(Y, Q),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(Y, Q),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || ee.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ee.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && F.test(n) && (t = ef(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Y, Q).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return w(e, t)
                    }
                },
                CLASS: function(e) {
                    var t = x[e + " "];
                    return t || (t = RegExp("(^|" + j + ")" + e + "(" + j + "|$)"),
                    x(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    }))
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = ee.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && -1 < i.indexOf(n) : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? -1 < (" " + i.replace(M, " ") + " ").indexOf(n) : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, f, p, d, h = o !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = a && t.nodeName.toLowerCase(), $ = !u && !a, x = !1;
                        if (g) {
                            if (o) {
                                for (; h; ) {
                                    for (f = t; f = f[h]; )
                                        if (a ? w(f, v) : 1 === f.nodeType)
                                            return !1;
                                    d = h = "only" === e && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [s ? g.firstChild : g.lastChild],
                            s && $) {
                                for (x = (p = (l = (c = g[y] || (g[y] = {}))[e] || [])[0] === m && l[1]) && l[2],
                                f = p && g.childNodes[p]; f = ++p && f && f[h] || (x = p = 0) || d.pop(); )
                                    if (1 === f.nodeType && ++x && f === t) {
                                        c[e] = [m, p, x];
                                        break
                                    }
                            } else if ($ && (x = p = (l = (c = t[y] || (t[y] = {}))[e] || [])[0] === m && l[1]),
                            !1 === x)
                                for (; (f = ++p && f && f[h] || (x = p = 0) || d.pop()) && (!((a ? w(f, v) : 1 === f.nodeType) && ++x) || ($ && ((c = f[y] || (f[y] = {}))[e] = [m, x]),
                                f !== t)); )
                                    ;
                            return (x -= i) === r || x % r == 0 && 0 <= x / r
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ee.error("unsupported pseudo: " + e);
                    return i[y] ? i(t) : 1 < i.length ? (n = [e, e, "", t],
                    r.setFilters.hasOwnProperty(e.toLowerCase()) ? en(function(e, n) {
                        for (var r, o = i(e, t), s = o.length; s--; )
                            e[r = a.call(e, o[s])] = !(n[r] = o[s])
                    }) : function(e) {
                        return i(e, 0, n)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: en(function(e) {
                    var t = []
                      , n = []
                      , r = em(e.replace(E, "$1"));
                    return r[y] ? en(function(e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--; )
                            (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: en(function(e) {
                    return function(t) {
                        return 0 < ee(e, t).length
                    }
                }),
                contains: en(function(e) {
                    return e = e.replace(Y, Q),
                    function(t) {
                        return -1 < (t.textContent || _.text(t)).indexOf(e)
                    }
                }),
                lang: en(function(e) {
                    return B.test(e || "") || ee.error("unsupported lang: " + e),
                    e = e.replace(Y, Q).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === f
                },
                focus: function(e) {
                    return e === function() {
                        try {
                            return l.activeElement
                        } catch (e) {}
                    }() && l.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: es(!1),
                disabled: es(!0),
                checked: function(e) {
                    return w(e, "input") && !!e.checked || w(e, "option") && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return U.test(e.nodeName)
                },
                input: function(e) {
                    return z.test(e.nodeName)
                },
                button: function(e) {
                    return w(e, "input") && "button" === e.type || w(e, "button")
                },
                text: function(e) {
                    var t;
                    return w(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ea(function() {
                    return [0]
                }),
                last: ea(function(e, t) {
                    return [t - 1]
                }),
                eq: ea(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ea(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ea(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ea(function(e, t, n) {
                    var r;
                    for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ea(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = ei(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = eo(t);
        function ec() {}
        function ef(e, t) {
            var n, i, o, s, a, u, l, c = b[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (a = e,
            u = [],
            l = r.preFilter; a; ) {
                for (s in (!n || (i = W.exec(a))) && (i && (a = a.slice(i[0].length) || a),
                u.push(o = [])),
                n = !1,
                (i = I.exec(a)) && (n = i.shift(),
                o.push({
                    value: n,
                    type: i[0].replace(E, " ")
                }),
                a = a.slice(n.length)),
                r.filter)
                    (i = X[s].exec(a)) && (!l[s] || (i = l[s](i))) && (n = i.shift(),
                    o.push({
                        value: n,
                        type: s,
                        matches: i
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? ee.error(e) : b(e, u).slice(0)
        }
        function ep(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function ed(e, t, n) {
            var r = t.dir
              , i = t.next
              , o = i || r
              , s = n && "parentNode" === o
              , a = $++;
            return t.first ? function(t, n, i) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || s)
                        return e(t, n, i);
                return !1
            }
            : function(t, n, u) {
                var l, c, f = [m, a];
                if (u) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || s) && e(t, n, u))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || s) {
                            if (c = t[y] || (t[y] = {}),
                            i && w(t, i))
                                t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === m && l[1] === a)
                                    return f[2] = l[2];
                                if ((c[o] = f)[2] = e(t, n, u))
                                    return !0
                            }
                        }
                return !1
            }
        }
        function eh(e) {
            return 1 < e.length ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function eg(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)
                (o = e[a]) && (n && !n(o, r, i) || (s.push(o),
                l && t.push(a)));
            return s
        }
        function ev(e, t, n, r, i, o) {
            return r && !r[y] && (r = ev(r)),
            i && !i[y] && (i = ev(i, o)),
            en(function(o, s, u, l) {
                var c, f, p, d, h = [], g = [], y = s.length, m = o || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        ee(e, t[r], n);
                    return n
                }(t || "*", u.nodeType ? [u] : u, []), $ = e && (o || !t) ? eg(m, h, e, u, l) : m;
                if (n ? n($, d = i || (o ? e : y || r) ? [] : s, u, l) : d = $,
                r)
                    for (c = eg(d, g),
                    r(c, [], u, l),
                    f = c.length; f--; )
                        (p = c[f]) && (d[g[f]] = !($[g[f]] = p));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (c = [],
                            f = d.length; f--; )
                                (p = d[f]) && c.push($[f] = p);
                            i(null, d = [], c, l)
                        }
                        for (f = d.length; f--; )
                            (p = d[f]) && -1 < (c = i ? a.call(o, p) : h[f]) && (o[c] = !(s[c] = p))
                    }
                } else
                    d = eg(d === s ? d.splice(y, d.length) : d),
                    i ? i(null, s, d, l) : v.apply(s, d)
            })
        }
        function ey(e) {
            for (var t, n, i, s = e.length, u = r.relative[e[0].type], l = u || r.relative[" "], c = u ? 1 : 0, f = ed(function(e) {
                return e === t
            }, l, !0), p = ed(function(e) {
                return -1 < a.call(t, e)
            }, l, !0), d = [function(e, n, r) {
                var i = !u && (r || n != o) || ((t = n).nodeType ? f(e, n, r) : p(e, n, r));
                return t = null,
                i
            }
            ]; c < s; c++)
                if (n = r.relative[e[c].type])
                    d = [ed(eh(d), n)];
                else {
                    if ((n = r.filter[e[c].type].apply(null, e[c].matches))[y]) {
                        for (i = ++c; i < s && !r.relative[e[i].type]; i++)
                            ;
                        return ev(1 < c && eh(d), 1 < c && ep(e.slice(0, c - 1).concat({
                            value: " " === e[c - 2].type ? "*" : ""
                        })).replace(E, "$1"), n, c < i && ey(e.slice(c, i)), i < s && ey(e = e.slice(i)), i < s && ep(e))
                    }
                    d.push(n)
                }
            return eh(d)
        }
        function em(e, t) {
            var n, i, s, a, u, c, f = [], d = [], h = T[e + " "];
            if (!h) {
                for (t || (t = ef(e)),
                n = t.length; n--; )
                    (h = ey(t[n]))[y] ? f.push(h) : d.push(h);
                (h = T(e, (i = d,
                a = 0 < (s = f).length,
                u = 0 < i.length,
                c = function(e, t, n, c, f) {
                    var d, h, g, y = 0, $ = "0", x = e && [], b = [], T = o, w = e || u && r.find.TAG("*", f), k = m += null == T ? 1 : Math.random() || .1, S = w.length;
                    for (f && (o = t == l || t || f); $ !== S && null != (d = w[$]); $++) {
                        if (u && d) {
                            for (h = 0,
                            t || d.ownerDocument == l || (el(d),
                            n = !p); g = i[h++]; )
                                if (g(d, t || l, n)) {
                                    v.call(c, d);
                                    break
                                }
                            f && (m = k)
                        }
                        a && ((d = !g && d) && y--,
                        e && x.push(d))
                    }
                    if (y += $,
                    a && $ !== y) {
                        for (h = 0; g = s[h++]; )
                            g(x, b, t, n);
                        if (e) {
                            if (0 < y)
                                for (; $--; )
                                    x[$] || b[$] || (b[$] = C.call(c));
                            b = eg(b)
                        }
                        v.apply(c, b),
                        f && !e && 0 < b.length && 1 < y + s.length && _.uniqueSort(c)
                    }
                    return f && (m = k,
                    o = T),
                    x
                }
                ,
                a ? en(c) : c))).selector = e
            }
            return h
        }
        function e$(e, t, n, i) {
            var o, s, a, u, l, c = "function" == typeof e && e, f = !i && ef(e = c.selector || e);
            if (n = n || [],
            1 === f.length) {
                if (2 < (s = f[0] = f[0].slice(0)).length && "ID" === (a = s[0]).type && 9 === t.nodeType && p && r.relative[s[1].type]) {
                    if (!(t = (r.find.ID(a.matches[0].replace(Y, Q), t) || [])[0]))
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(s.shift().value.length)
                }
                for (o = X.needsContext.test(e) ? 0 : s.length; o-- && (a = s[o],
                !r.relative[u = a.type]); )
                    if ((l = r.find[u]) && (i = l(a.matches[0].replace(Y, Q), G.test(s[0].type) && eu(t.parentNode) || t))) {
                        if (s.splice(o, 1),
                        !(e = i.length && ep(s)))
                            return v.apply(n, i),
                            n;
                        break
                    }
            }
            return (c || em(e, f))(i, t, !p, n, !t || G.test(e) && eu(t.parentNode) || t),
            n
        }
        ec.prototype = r.filters = r.pseudos,
        r.setFilters = new ec,
        d.sortStable = y.split("").sort(A).join("") === y,
        el(),
        d.sortDetached = er(function(e) {
            return 1 & e.compareDocumentPosition(l.createElement("fieldset"))
        }),
        _.find = ee,
        _.expr[":"] = _.expr.pseudos,
        _.unique = _.uniqueSort,
        ee.compile = em,
        ee.select = e$,
        ee.setDocument = el,
        ee.escape = _.escapeSelector,
        ee.getText = _.text,
        ee.isXML = _.isXMLDoc,
        ee.selectors = _.expr,
        ee.support = _.support,
        ee.uniqueSort = _.uniqueSort
    }();
    var L = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && _(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , H = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , P = _.expr.match.needsContext
      , O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function M(e, t, n) {
        return h(t) ? _.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? _.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? _.grep(e, function(e) {
            return -1 < a.call(t, e) !== n
        }) : _.filter(t, e, n)
    }
    _.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? _.find.matchesSelector(r, e) ? [r] : [] : _.find.matches(e, _.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    _.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(_(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (_.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                _.find(e, i[t], n);
            return 1 < r ? _.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(M(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(M(this, e || [], !0))
        },
        is: function(e) {
            return !!M(this, "string" == typeof e && P.test(e) ? _(e) : e || [], !1).length
        }
    });
    var W, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || W,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : I.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof _ ? t[0] : t,
                _.merge(this, _.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : v, !0)),
                O.test(r[1]) && _.isPlainObject(t))
                    for (r in t)
                        h(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = v.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : h(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this)
    }
    ).prototype = _.fn,
    W = _(v);
    var R = /^(?:parents|prev(?:Until|All))/
      , F = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function B(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    _.fn.extend({
        has: function(e) {
            var t = _(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (_.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], s = "string" != typeof e && _(e);
            if (!P.test(e)) {
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            }
            return this.pushStack(1 < o.length ? _.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? a.call(_(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    _.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return L(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return L(e, "parentNode", n)
        },
        next: function(e) {
            return B(e, "nextSibling")
        },
        prev: function(e) {
            return B(e, "previousSibling")
        },
        nextAll: function(e) {
            return L(e, "nextSibling")
        },
        prevAll: function(e) {
            return L(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return L(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return L(e, "previousSibling", n)
        },
        siblings: function(e) {
            return H((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return H(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (w(e, "template") && (e = e.content || e),
            _.merge([], e.childNodes))
        }
    }, function(e, t) {
        _.fn[e] = function(n, r) {
            var i = _.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = _.filter(r, i)),
            1 < this.length && (F[e] || _.uniqueSort(i),
            R.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var X = /[^\x20\t\r\n\f]+/g;
    function z(e) {
        return e
    }
    function U(e) {
        throw e
    }
    function V(e, t, n, r) {
        var i;
        try {
            e && h(i = e.promise) ? i.call(e).done(t).fail(n) : e && h(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (o) {
            n.apply(void 0, [o])
        }
    }
    _.Callbacks = function(e) {
        e = "string" == typeof e ? (t = e,
        n = {},
        _.each(t.match(X) || [], function(e, t) {
            n[t] = !0
        }),
        n) : _.extend({}, e);
        var t, n, r, i, o, s, a = [], u = [], l = -1, c = function() {
            for (s = s || e.once,
            o = r = !0; u.length; l = -1)
                for (i = u.shift(); ++l < a.length; )
                    !1 === a[l].apply(i[0], i[1]) && e.stopOnFalse && (l = a.length,
                    i = !1);
            e.memory || (i = !1),
            r = !1,
            s && (a = i ? [] : "")
        }, f = {
            add: function() {
                return a && (i && !r && (l = a.length - 1,
                u.push(i)),
                function t(n) {
                    _.each(n, function(n, r) {
                        h(r) ? e.unique && f.has(r) || a.push(r) : r && r.length && "string" !== $(r) && t(r)
                    })
                }(arguments),
                i && !r && c()),
                this
            },
            remove: function() {
                return _.each(arguments, function(e, t) {
                    for (var n; -1 < (n = _.inArray(t, a, n)); )
                        a.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < _.inArray(e, a) : 0 < a.length
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return s = u = [],
                a = i = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return s = u = [],
                i || r || (a = i = ""),
                this
            },
            locked: function() {
                return !!s
            },
            fireWith: function(e, t) {
                return s || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                r || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    _.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2], ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , i = {
                state: function() {
                    return r
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return i.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return _.Deferred(function(t) {
                        _.each(n, function(n, r) {
                            var i = h(e[r[4]]) && e[r[4]];
                            o[r[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, r, i) {
                    var o = 0;
                    function s(t, n, r, i) {
                        return function() {
                            var a = this
                              , u = arguments
                              , l = function() {
                                var e, l;
                                if (!(t < o)) {
                                    if ((e = r.apply(a, u)) === n.promise())
                                        throw TypeError("Thenable self-resolution");
                                    h(l = e && ("object" == typeof e || "function" == typeof e) && e.then) ? i ? l.call(e, s(o, n, z, i), s(o, n, U, i)) : (o++,
                                    l.call(e, s(o, n, z, i), s(o, n, U, i), s(o, n, z, n.notifyWith))) : (r !== z && (a = void 0,
                                    u = [e]),
                                    (i || n.resolveWith)(a, u))
                                }
                            }
                              , c = i ? l : function() {
                                try {
                                    l()
                                } catch (e) {
                                    _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, c.error),
                                    o <= t + 1 && (r !== U && (a = void 0,
                                    u = [e]),
                                    n.rejectWith(a, u))
                                }
                            }
                            ;
                            t ? c() : (_.Deferred.getErrorHook ? c.error = _.Deferred.getErrorHook() : _.Deferred.getStackHook && (c.error = _.Deferred.getStackHook()),
                            e.setTimeout(c))
                        }
                    }
                    return _.Deferred(function(e) {
                        n[0][3].add(s(0, e, h(i) ? i : z, e.notifyWith)),
                        n[1][3].add(s(0, e, h(t) ? t : z)),
                        n[2][3].add(s(0, e, h(r) ? r : U))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? _.extend(e, i) : i
                }
            }
              , o = {};
            return _.each(n, function(e, t) {
                var s = t[2]
                  , a = t[5];
                i[t[1]] = s.add,
                a && s.add(function() {
                    r = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                s.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = s.fireWith
            }),
            i.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , o = i.call(arguments)
              , s = _.Deferred()
              , a = function(e) {
                return function(n) {
                    r[e] = this,
                    o[e] = 1 < arguments.length ? i.call(arguments) : n,
                    --t || s.resolveWith(r, o)
                }
            };
            if (t <= 1 && (V(e, s.done(a(n)).resolve, s.reject, !t),
            "pending" === s.state() || h(o[n] && o[n].then)))
                return s.then();
            for (; n--; )
                V(o[n], a(n), s.reject);
            return s.promise()
        }
    });
    var G = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && G.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    _.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var Y = _.Deferred();
    function Q() {
        v.removeEventListener("DOMContentLoaded", Q),
        e.removeEventListener("load", Q),
        _.ready()
    }
    _.fn.ready = function(e) {
        return Y.then(e).catch(function(e) {
            _.readyException(e)
        }),
        this
    }
    ,
    _.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0) !== e && 0 < --_.readyWait || Y.resolveWith(v, [_])
        }
    }),
    _.ready.then = Y.then,
    "complete" !== v.readyState && ("loading" === v.readyState || v.documentElement.doScroll) ? (v.addEventListener("DOMContentLoaded", Q),
    e.addEventListener("load", Q)) : e.setTimeout(_.ready);
    var K = function(e, t, n, r, i, o, s) {
        var a = 0
          , u = e.length
          , l = null == n;
        if ("object" === $(n))
            for (a in i = !0,
            n)
                K(e, t, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0,
        h(r) || (s = !0),
        l && (s ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(_(e), n)
        }
        )),
        t))
            for (; a < u; a++)
                t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , J = /^-ms-/
      , Z = /-([a-z])/g;
    function ee(e, t) {
        return t.toUpperCase()
    }
    function et(e) {
        return e.replace(J, "ms-").replace(Z, ee)
    }
    var en = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function er() {
        this.expando = _.expando + er.uid++
    }
    er.uid = 1,
    er.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            en(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[et(t)] = n;
            else
                for (r in t)
                    i[et(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][et(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t)
                    for (n = (t = Array.isArray(t) ? t.map(et) : ((t = et(t))in r) ? [t] : t.match(X) || []).length; n--; )
                        delete r[t[n]];
                (void 0 === t || _.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !_.isEmptyObject(t)
        }
    };
    var ei = new er
      , eo = new er
      , es = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ea = /[A-Z]/g;
    function eu(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType) {
            if (r = "data-" + t.replace(ea, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : es.test(i) ? JSON.parse(i) : i)
                } catch (o) {}
                eo.set(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    _.extend({
        hasData: function(e) {
            return eo.hasData(e) || ei.hasData(e)
        },
        data: function(e, t, n) {
            return eo.access(e, t, n)
        },
        removeData: function(e, t) {
            eo.remove(e, t)
        },
        _data: function(e, t, n) {
            return ei.access(e, t, n)
        },
        _removeData: function(e, t) {
            ei.remove(e, t)
        }
    }),
    _.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = eo.get(o),
                1 === o.nodeType && !ei.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && 0 === (r = s[n].name).indexOf("data-") && eu(o, r = et(r.slice(5)), i[r]);
                    ei.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                eo.set(this, e)
            }) : K(this, function(t) {
                var n;
                if (o && void 0 === t)
                    return void 0 !== (n = eo.get(o, e)) ? n : void 0 !== (n = eu(o, e)) ? n : void 0;
                this.each(function() {
                    eo.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                eo.remove(this, e)
            })
        }
    }),
    _.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = ei.get(e, t),
                n && (!r || Array.isArray(n) ? r = ei.access(e, t, _.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = _.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = _._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                _.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ei.get(e, n) || ei.access(e, n, {
                empty: _.Callbacks("once memory").add(function() {
                    ei.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    _.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? _.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = _.queue(this, e, t);
                _._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                _.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = _.Deferred(), o = this, s = this.length, a = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (n = ei.get(o[s], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(a));
            return a(),
            i.promise(t)
        }
    });
    var el = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ec = RegExp("^(?:([+-])=|)(" + el + ")([a-z%]*)$", "i")
      , ef = ["Top", "Right", "Bottom", "Left"]
      , ep = v.documentElement
      , ed = function(e) {
        return _.contains(e.ownerDocument, e)
    }
      , eh = {
        composed: !0
    };
    ep.getRootNode && (ed = function(e) {
        return _.contains(e.ownerDocument, e) || e.getRootNode(eh) === e.ownerDocument
    }
    );
    var eg = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ed(e) && "none" === _.css(e, "display")
    };
    function ev(e, t, n, r) {
        var i, o, s = 20, a = r ? function() {
            return r.cur()
        }
        : function() {
            return _.css(e, t, "")
        }
        , u = a(), l = n && n[3] || (_.cssNumber[t] ? "" : "px"), c = e.nodeType && (_.cssNumber[t] || "px" !== l && +u) && ec.exec(_.css(e, t));
        if (c && c[3] !== l) {
            for (u /= 2,
            l = l || c[3],
            c = +u || 1; s--; )
                _.style(e, t, c + l),
                (1 - o) * (1 - (o = a() / u || .5)) <= 0 && (s = 0),
                c /= o;
            c *= 2,
            _.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ey = {};
    function em(e, t) {
        for (var n, r, i, o, s, a, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = ei.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && eg(r) && (l[c] = (u = s = o = void 0,
            s = (i = r).ownerDocument,
            (u = ey[a = i.nodeName]) || (o = s.body.appendChild(s.createElement(a)),
            u = _.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ey[a] = u)))) : "none" !== n && (l[c] = "none",
            ei.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    _.fn.extend({
        show: function() {
            return em(this, !0)
        },
        hide: function() {
            return em(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                eg(this) ? _(this).show() : _(this).hide()
            })
        }
    });
    var e$, ex, eb = /^(?:checkbox|radio)$/i, e_ = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, eT = /^$|^module$|\/(?:java|ecma)script/i;
    e$ = v.createDocumentFragment().appendChild(v.createElement("div")),
    (ex = v.createElement("input")).setAttribute("type", "radio"),
    ex.setAttribute("checked", "checked"),
    ex.setAttribute("name", "t"),
    e$.appendChild(ex),
    d.checkClone = e$.cloneNode(!0).cloneNode(!0).lastChild.checked,
    e$.innerHTML = "<textarea>x</textarea>",
    d.noCloneChecked = !!e$.cloneNode(!0).lastChild.defaultValue,
    e$.innerHTML = "<option></option>",
    d.option = !!e$.lastChild;
    var ew = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function eC(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && w(e, t) ? _.merge([e], n) : n
    }
    function ek(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            ei.set(e[n], "globalEval", !t || ei.get(t[n], "globalEval"))
    }
    ew.tbody = ew.tfoot = ew.colgroup = ew.caption = ew.thead,
    ew.th = ew.td,
    d.option || (ew.optgroup = ew.option = [1, "<select multiple='multiple'>", "</select>"]);
    var eS = /<|&#?\w+;/;
    function ej(e, t, n, r, i) {
        for (var o, s, a, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o) {
                if ("object" === $(o))
                    _.merge(p, o.nodeType ? [o] : o);
                else if (eS.test(o)) {
                    for (s = s || f.appendChild(t.createElement("div")),
                    u = ew[a = (e_.exec(o) || ["", ""])[1].toLowerCase()] || ew._default,
                    s.innerHTML = u[1] + _.htmlPrefilter(o) + u[2],
                    c = u[0]; c--; )
                        s = s.lastChild;
                    _.merge(p, s.childNodes),
                    (s = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o))
            }
        for (f.textContent = "",
        d = 0; o = p[d++]; )
            if (r && -1 < _.inArray(o, r))
                i && i.push(o);
            else if (l = ed(o),
            s = eC(f.appendChild(o), "script"),
            l && ek(s),
            n)
                for (c = 0; o = s[c++]; )
                    eT.test(o.type || "") && n.push(o);
        return f
    }
    var eE = /^([^.]*)(?:\.(.+)|)/;
    function eD() {
        return !0
    }
    function eA() {
        return !1
    }
    function eN(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                eN(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = eA;
        else if (!i)
            return e;
        return 1 === o && (s = i,
        (i = function(e) {
            return _().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = _.guid++)),
        e.each(function() {
            _.event.add(this, t, i, r, n)
        })
    }
    function eq(e, t, n) {
        n ? (ei.set(e, t, !1),
        _.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var n, r = ei.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (r)
                        (_.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (r = i.call(arguments),
                    ei.set(this, t, r),
                    this[t](),
                    n = ei.get(this, t),
                    ei.set(this, t, !1),
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n
                } else
                    r && (ei.set(this, t, _.event.trigger(r[0], r.slice(1), this)),
                    e.stopPropagation(),
                    e.isImmediatePropagationStopped = eD)
            }
        })) : void 0 === ei.get(e, t) && _.event.add(e, t, eD)
    }
    _.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, v = ei.get(e);
            if (en(e))
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                i && _.find.matchesSelector(ep, i),
                n.guid || (n.guid = _.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (s = v.handle) || (s = v.handle = function(t) {
                    return _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                l = (t = (t || "").match(X) || [""]).length; l--; )
                    d = g = (a = eE.exec(t[l]) || [])[1],
                    h = (a[2] || "").split(".").sort(),
                    d && (f = _.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = _.event.special[d] || {},
                    c = _.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && _.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(d, s)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    _.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, v = ei.hasData(e) && ei.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(X) || [""]).length; l--; )
                    if (d = g = (a = eE.exec(t[l]) || [])[1],
                    h = (a[2] || "").split(".").sort(),
                    d) {
                        for (f = _.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        a = a[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = p.length; o--; )
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || _.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            _.event.remove(e, d + t[l], n, r, !0);
                _.isEmptyObject(u) && ei.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, s, a = Array(arguments.length), u = _.event.fix(e), l = (ei.get(this, "events") || Object.create(null))[u.type] || [], c = _.event.special[u.type] || {};
            for (a[0] = u,
            t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                for (s = _.event.handlers.call(this, u, l),
                t = 0; (i = s[t++]) && !u.isPropagationStopped(); )
                    for (u.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped(); )
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((_.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s, a = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) {
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        s = {},
                        n = 0; n < u; n++)
                            void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? -1 < _(i, this).index(l) : _.find(i, this, null, [l]).length),
                            s[i] && o.push(r);
                        o.length && a.push({
                            elem: l,
                            handlers: o
                        })
                    }
            }
            return l = this,
            u < t.length && a.push({
                elem: l,
                handlers: t.slice(u)
            }),
            a
        },
        addProp: function(e, t) {
            Object.defineProperty(_.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: h(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
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
            return e[_.expando] ? e : new _.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return eb.test(t.type) && t.click && w(t, "input") && eq(t, "click", !0),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return eb.test(t.type) && t.click && w(t, "input") && eq(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return eb.test(t.type) && t.click && w(t, "input") && ei.get(t, "click") || w(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    _.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    _.Event = function(e, t) {
        if (!(this instanceof _.Event))
            return new _.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? eD : eA,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && _.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[_.expando] = !0
    }
    ,
    _.Event.prototype = {
        constructor: _.Event,
        isDefaultPrevented: eA,
        isPropagationStopped: eA,
        isImmediatePropagationStopped: eA,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = eD,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = eD,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = eD,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    _.each({
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
        which: !0
    }, _.event.addProp),
    _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        function n(e) {
            if (v.documentMode) {
                var n = ei.get(this, "handle")
                  , r = _.event.fix(e);
                r.type = "focusin" === e.type ? "focus" : "blur",
                r.isSimulated = !0,
                n(e),
                r.target === r.currentTarget && n(r)
            } else
                _.event.simulate(t, e.target, _.event.fix(e))
        }
        _.event.special[e] = {
            setup: function() {
                var r;
                if (eq(this, e, !0),
                !v.documentMode)
                    return !1;
                (r = ei.get(this, t)) || this.addEventListener(t, n),
                ei.set(this, t, (r || 0) + 1)
            },
            trigger: function() {
                return eq(this, e),
                !0
            },
            teardown: function() {
                var e;
                if (!v.documentMode)
                    return !1;
                (e = ei.get(this, t) - 1) ? ei.set(this, t, e) : (this.removeEventListener(t, n),
                ei.remove(this, t))
            },
            _default: function(t) {
                return ei.get(t.target, e)
            },
            delegateType: t
        },
        _.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this.document || this
                  , i = v.documentMode ? this : r
                  , o = ei.get(i, t);
                o || (v.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)),
                ei.set(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this.document || this
                  , i = v.documentMode ? this : r
                  , o = ei.get(i, t) - 1;
                o ? ei.set(i, t, o) : (v.documentMode ? this.removeEventListener(t, n) : r.removeEventListener(e, n, !0),
                ei.remove(i, t))
            }
        }
    }),
    _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        _.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget, i = e.handleObj;
                return r && (r === this || _.contains(this, r)) || (e.type = i.origType,
                n = i.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    _.fn.extend({
        on: function(e, t, n, r) {
            return eN(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return eN(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                _(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = eA),
            this.each(function() {
                _.event.remove(this, e, n, t)
            })
        }
    });
    var eL = /<script|<style|<link/i
      , eH = /checked\s*(?:[^=]|=\s*.checked.)/i
      , eP = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function eO(e, t) {
        return w(e, "table") && w(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e
    }
    function e0(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function eM(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function eW(e, t) {
        var n, r, i, o, s, a;
        if (1 === t.nodeType) {
            if (ei.hasData(e) && (a = ei.get(e).events))
                for (i in ei.remove(t, "handle events"),
                a)
                    for (n = 0,
                    r = a[i].length; n < r; n++)
                        _.event.add(t, i, a[i][n]);
            eo.hasData(e) && (o = eo.access(e),
            s = _.extend({}, o),
            eo.set(t, s))
        }
    }
    function eI(e, t, n, r) {
        t = o(t);
        var i, s, a, u, l, c, f = 0, p = e.length, g = p - 1, v = t[0], y = h(v);
        if (y || 1 < p && "string" == typeof v && !d.checkClone && eH.test(v))
            return e.each(function(i) {
                var o = e.eq(i);
                y && (t[0] = v.call(this, i, o.html())),
                eI(o, t, n, r)
            });
        if (p && (s = (i = ej(t, e[0].ownerDocument, !1, e, r)).firstChild,
        1 === i.childNodes.length && (i = s),
        s || r)) {
            for (u = (a = _.map(eC(i, "script"), e0)).length; f < p; f++)
                l = i,
                f !== g && (l = _.clone(l, !0, !0),
                u && _.merge(a, eC(l, "script"))),
                n.call(e[f], l, f);
            if (u)
                for (c = a[a.length - 1].ownerDocument,
                _.map(a, eM),
                f = 0; f < u; f++)
                    l = a[f],
                    eT.test(l.type || "") && !ei.access(l, "globalEval") && _.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? _._evalUrl && !l.noModule && _._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, c) : m(l.textContent.replace(eP, ""), l, c))
        }
        return e
    }
    function e1(e, t, n) {
        for (var r, i = t ? _.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || _.cleanData(eC(r)),
            r.parentNode && (n && ed(r) && ek(eC(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    _.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, s, a, u, l, c = e.cloneNode(!0), f = ed(e);
            if (!(d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e)))
                for (s = eC(c),
                r = 0,
                i = (o = eC(e)).length; r < i; r++)
                    a = o[r],
                    "input" === (l = (u = s[r]).nodeName.toLowerCase()) && eb.test(a.type) ? u.checked = a.checked : "input" !== l && "textarea" !== l || (u.defaultValue = a.defaultValue);
            if (t) {
                if (n)
                    for (o = o || eC(e),
                    s = s || eC(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        eW(o[r], s[r]);
                else
                    eW(e, c)
            }
            return 0 < (s = eC(c, "script")).length && ek(s, !f && eC(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = _.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (en(n)) {
                    if (t = n[ei.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? _.event.remove(n, r) : _.removeEvent(n, r, t.handle);
                        n[ei.expando] = void 0
                    }
                    n[eo.expando] && (n[eo.expando] = void 0)
                }
        }
    }),
    _.fn.extend({
        detach: function(e) {
            return e1(this, e, !0)
        },
        remove: function(e) {
            return e1(this, e)
        },
        text: function(e) {
            return K(this, function(e) {
                return void 0 === e ? _.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return eI(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || eO(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return eI(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = eO(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return eI(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return eI(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (_.cleanData(eC(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return _.clone(this, e, t)
            })
        },
        html: function(e) {
            return K(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !eL.test(e) && !ew[(e_.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = _.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (_.cleanData(eC(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return eI(this, arguments, function(t) {
                var n = this.parentNode;
                0 > _.inArray(this, e) && (_.cleanData(eC(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        _.fn[e] = function(e) {
            for (var n, r = [], i = _(e), o = i.length - 1, a = 0; a <= o; a++)
                n = a === o ? this : this.clone(!0),
                _(i[a])[t](n),
                s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var eR = RegExp("^(" + el + ")(?!px)[a-z%]+$", "i")
      , e9 = /^--/
      , eF = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , eB = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , e8 = RegExp(ef.join("|"), "i");
    function eX(e, t, n) {
        var r, i, o, s, a = e9.test(t), u = e.style;
        return (n = n || eF(e)) && (s = n.getPropertyValue(t) || n[t],
        a && s && (s = s.replace(E, "$1") || void 0),
        "" !== s || ed(e) || (s = _.style(e, t)),
        !d.pixelBoxStyles() && eR.test(s) && e8.test(t) && (r = u.width,
        i = u.minWidth,
        o = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = s,
        s = n.width,
        u.width = r,
        u.minWidth = i,
        u.maxWidth = o)),
        void 0 !== s ? s + "" : s
    }
    function e2(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                ep.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                r = "1%" !== t.top,
                u = 12 === n(t.marginLeft),
                c.style.right = "60%",
                s = 36 === n(t.right),
                i = 36 === n(t.width),
                c.style.position = "absolute",
                o = 12 === n(c.offsetWidth / 3),
                ep.removeChild(l),
                c = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, i, o, s, a, u, l = v.createElement("div"), c = v.createElement("div");
        c.style && (c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        d.clearCloneStyle = "content-box" === c.style.backgroundClip,
        _.extend(d, {
            boxSizingReliable: function() {
                return t(),
                i
            },
            pixelBoxStyles: function() {
                return t(),
                s
            },
            pixelPosition: function() {
                return t(),
                r
            },
            reliableMarginLeft: function() {
                return t(),
                u
            },
            scrollboxSize: function() {
                return t(),
                o
            },
            reliableTrDimensions: function() {
                var t, n, r, i;
                return null == a && (t = v.createElement("table"),
                n = v.createElement("tr"),
                r = v.createElement("div"),
                t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                n.style.cssText = "border:1px solid",
                n.style.height = "1px",
                r.style.height = "9px",
                r.style.display = "block",
                ep.appendChild(t).appendChild(n).appendChild(r),
                a = parseInt((i = e.getComputedStyle(n)).height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === n.offsetHeight,
                ep.removeChild(t)),
                a
            }
        }))
    }();
    var ez = ["Webkit", "Moz", "ms"]
      , eU = v.createElement("div").style
      , e3 = {};
    function e4(e) {
        return _.cssProps[e] || e3[e] || (e in eU ? e : e3[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = ez.length; n--; )
                if ((e = ez[n] + t)in eU)
                    return e
        }(e) || e)
    }
    var e7 = /^(none|table(?!-c[ea]).+)/
      , eV = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , eG = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function eY(e, t, n) {
        var r = ec.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function eQ(e, t, n, r, i, o) {
        var s = "width" === t ? 1 : 0
          , a = 0
          , u = 0
          , l = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += _.css(e, n + ef[s], !0, i)),
            r ? ("content" === n && (u -= _.css(e, "padding" + ef[s], !0, i)),
            "margin" !== n && (u -= _.css(e, "border" + ef[s] + "Width", !0, i))) : (u += _.css(e, "padding" + ef[s], !0, i),
            "padding" !== n ? u += _.css(e, "border" + ef[s] + "Width", !0, i) : a += _.css(e, "border" + ef[s] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - .5)) || 0),
        u + l
    }
    function e6(e, t, n) {
        var r = eF(e)
          , i = (!d.boxSizingReliable() || n) && "border-box" === _.css(e, "boxSizing", !1, r)
          , o = i
          , s = eX(e, t, r)
          , a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (eR.test(s)) {
            if (!n)
                return s;
            s = "auto"
        }
        return (!d.boxSizingReliable() && i || !d.reliableTrDimensions() && w(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === _.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === _.css(e, "boxSizing", !1, r),
        (o = a in e) && (s = e[a])),
        (s = parseFloat(s) || 0) + eQ(e, t, n || (i ? "border" : "content"), o, r, s) + "px"
    }
    function eK(e, t, n, r, i) {
        return new eK.prototype.init(e,t,n,r,i)
    }
    _.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = eX(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
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
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = et(t), u = e9.test(t), l = e.style;
                if (u || (t = e4(a)),
                s = _.cssHooks[t] || _.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ec.exec(n)) && i[1] && (n = ev(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (_.cssNumber[a] ? "" : "px")),
                d.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = et(t);
            return e9.test(t) || (t = e4(a)),
            (s = _.cssHooks[t] || _.cssHooks[a]) && "get"in s && (i = s.get(e, !0, n)),
            void 0 === i && (i = eX(e, t, r)),
            "normal" === i && t in eG && (i = eG[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    _.each(["height", "width"], function(e, t) {
        _.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !e7.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? e6(e, t, r) : eB(e, eV, function() {
                        return e6(e, t, r)
                    })
            },
            set: function(e, n, r) {
                var i, o = eF(e), s = !d.scrollboxSize() && "absolute" === o.position, a = (s || r) && "border-box" === _.css(e, "boxSizing", !1, o), u = r ? eQ(e, t, r, a, o) : 0;
                return a && s && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - eQ(e, t, "border", !1, o) - .5)),
                u && (i = ec.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                n = _.css(e, t)),
                eY(0, n, u)
            }
        }
    }),
    _.cssHooks.marginLeft = e2(d.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(eX(e, "marginLeft")) || e.getBoundingClientRect().left - eB(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        _.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + ef[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        "margin" !== e && (_.cssHooks[e + t].set = eY)
    }),
    _.fn.extend({
        css: function(e, t) {
            return K(this, function(e, t, n) {
                var r, i, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (r = eF(e),
                    i = t.length; s < i; s++)
                        o[t[s]] = _.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? _.style(e, t, n) : _.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((_.Tween = eK).prototype = {
        constructor: eK,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || _.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (_.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = eK.propHooks[this.prop];
            return e && e.get ? e.get(this) : eK.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = eK.propHooks[this.prop];
            return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : eK.propHooks._default.set(this),
            this
        }
    }).init.prototype = eK.prototype,
    (eK.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 === e.elem.nodeType && (_.cssHooks[e.prop] || null != e.elem.style[e4(e.prop)]) ? _.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }).scrollTop = eK.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    _.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    _.fx = eK.prototype.init,
    _.fx.step = {};
    var e5, eJ, eZ, te, tt = /^(?:toggle|show|hide)$/, tn = /queueHooks$/;
    function tr() {
        return e.setTimeout(function() {
            e5 = void 0
        }),
        e5 = Date.now()
    }
    function ti(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ef[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function to(e, t, n) {
        for (var r, i = (ts.tweeners[t] || []).concat(ts.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function ts(e, t, n) {
        var r, i, o = 0, s = ts.prefilters.length, a = _.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = e5 || tr(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, s = l.tweens.length; o < s; o++)
                l.tweens[o].run(r);
            return a.notifyWith(e, [l, r, n]),
            r < 1 && s ? n : (s || a.notifyWith(e, [l, 1, 0]),
            a.resolveWith(e, [l]),
            !1)
        }, l = a.promise({
            elem: e,
            props: _.extend({}, t),
            opts: _.extend(!0, {
                specialEasing: {},
                easing: _.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: e5 || tr(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = _.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    l.tweens[n].run(1);
                return t ? (a.notifyWith(e, [l, 1, 0]),
                a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, s;
            for (n in e)
                if (i = t[r = et(n)],
                Array.isArray(o = e[n]) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (s = _.cssHooks[r]) && ("expand"in s))
                    for (n in o = s.expand(o),
                    delete e[r],
                    o)
                        (n in e) || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); o < s; o++)
            if (r = ts.prefilters[o].call(l, e, c, l.opts))
                return h(r.stop) && (_._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                r;
        return _.map(c, to, l),
        h(l.opts.start) && l.opts.start.call(e, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        _.fx.timer(_.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    _.Animation = _.extend(ts, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ev(n.elem, e, ec.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            h(e) ? (t = e,
            e = ["*"]) : e = e.match(X);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                ts.tweeners[n] = ts.tweeners[n] || [],
                ts.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, s, a, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && eg(e), v = ei.get(e, "fxshow");
            for (r in n.queue || (null == (s = _._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            p.always(function() {
                p.always(function() {
                    s.unqueued--,
                    _.queue(e, "fx").length || s.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                tt.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || _.style(e, r)
                }
            if ((u = !_.isEmptyObject(t)) || !_.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = ei.get(e, "display")),
                "none" === (c = _.css(e, "display")) && (l ? c = l : (em([e], !0),
                l = e.style.display || l,
                c = _.css(e, "display"),
                em([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === _.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (l = "none" === (c = h.display) ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = ei.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && em([e], !0),
                    p.done(function() {
                        for (r in g || em([e]),
                        ei.remove(e, "fxshow"),
                        d)
                            _.style(e, r, d[r])
                    })),
                    u = to(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? ts.prefilters.unshift(e) : ts.prefilters.push(e)
        }
    }),
    _.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? _.extend({}, e) : {
            complete: n || !n && t || h(e) && e,
            duration: e,
            easing: n && t || t && !h(t) && t
        };
        return _.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in _.fx.speeds ? r.duration = _.fx.speeds[r.duration] : r.duration = _.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            h(r.old) && r.old.call(this),
            r.queue && _.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    _.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(eg).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = _.isEmptyObject(e)
              , o = _.speed(t, n, r)
              , s = function() {
                var t = ts(this, _.extend({}, e), o);
                (i || ei.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = _.timers
                  , s = ei.get(this);
                if (i)
                    s[i] && s[i].stop && r(s[i]);
                else
                    for (i in s)
                        s[i] && s[i].stop && tn.test(i) && r(s[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                !t && n || _.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = ei.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = _.timers, s = r ? r.length : 0;
                for (n.finish = !0,
                _.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < s; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    _.each(["toggle", "show", "hide"], function(e, t) {
        var n = _.fn[t];
        _.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ti(t, !0), e, r, i)
        }
    }),
    _.each({
        slideDown: ti("show"),
        slideUp: ti("hide"),
        slideToggle: ti("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        _.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    _.timers = [],
    _.fx.tick = function() {
        var e, t = 0, n = _.timers;
        for (e5 = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || _.fx.stop(),
        e5 = void 0
    }
    ,
    _.fx.timer = function(e) {
        _.timers.push(e),
        _.fx.start()
    }
    ,
    _.fx.interval = 13,
    _.fx.start = function() {
        eJ || (eJ = !0,
        function t() {
            eJ && (!1 === v.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(t) : e.setTimeout(t, _.fx.interval),
            _.fx.tick())
        }())
    }
    ,
    _.fx.stop = function() {
        eJ = null
    }
    ,
    _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    _.fn.delay = function(t, n) {
        return t = _.fx && _.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }
    ,
    eZ = v.createElement("input"),
    te = v.createElement("select").appendChild(v.createElement("option")),
    eZ.type = "checkbox",
    d.checkOn = "" !== eZ.value,
    d.optSelected = te.selected,
    (eZ = v.createElement("input")).value = "t",
    eZ.type = "radio",
    d.radioValue = "t" === eZ.value;
    var ta, tu = _.expr.attrHandle;
    _.fn.extend({
        attr: function(e, t) {
            return K(this, _.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                _.removeAttr(this, e)
            })
        }
    }),
    _.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === o && _.isXMLDoc(e) || (i = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? ta : void 0)),
                void 0 !== n ? null === n ? void _.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = _.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!d.radioValue && "radio" === t && w(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(X);
            if (i && 1 === e.nodeType)
                for (; n = i[r++]; )
                    e.removeAttribute(n)
        }
    }),
    ta = {
        set: function(e, t, n) {
            return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    _.each(_.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = tu[t] || _.find.attr;
        tu[t] = function(e, t, r) {
            var i, o, s = t.toLowerCase();
            return r || (o = tu[s],
            tu[s] = i,
            i = null != n(e, t, r) ? s : null,
            tu[s] = o),
            i
        }
    });
    var tl = /^(?:input|select|textarea|button)$/i
      , tc = /^(?:a|area)$/i;
    function tf(e) {
        return (e.match(X) || []).join(" ")
    }
    function tp(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function td(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(X) || []
    }
    _.fn.extend({
        prop: function(e, t) {
            return K(this, _.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[_.propFix[e] || e]
            })
        }
    }),
    _.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && _.isXMLDoc(e) || (t = _.propFix[t] || t,
                i = _.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = _.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : tl.test(e.nodeName) || tc.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    d.optSelected || (_.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    }),
    _.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s;
            return h(e) ? this.each(function(t) {
                _(this).addClass(e.call(this, t, tp(this)))
            }) : (t = td(e)).length ? this.each(function() {
                if (r = tp(this),
                n = 1 === this.nodeType && " " + tf(r) + " ") {
                    for (o = 0; o < t.length; o++)
                        i = t[o],
                        0 > n.indexOf(" " + i + " ") && (n += i + " ");
                    r !== (s = tf(n)) && this.setAttribute("class", s)
                }
            }) : this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s;
            return h(e) ? this.each(function(t) {
                _(this).removeClass(e.call(this, t, tp(this)))
            }) : arguments.length ? (t = td(e)).length ? this.each(function() {
                if (r = tp(this),
                n = 1 === this.nodeType && " " + tf(r) + " ") {
                    for (o = 0; o < t.length; o++)
                        for (i = t[o]; -1 < n.indexOf(" " + i + " "); )
                            n = n.replace(" " + i + " ", " ");
                    r !== (s = tf(n)) && this.setAttribute("class", s)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(e, t) {
            var n, r, i, o, s = typeof e, a = "string" === s || Array.isArray(e);
            return h(e) ? this.each(function(n) {
                _(this).toggleClass(e.call(this, n, tp(this), t), t)
            }) : "boolean" == typeof t && a ? t ? this.addClass(e) : this.removeClass(e) : (n = td(e),
            this.each(function() {
                if (a)
                    for (o = _(this),
                    i = 0; i < n.length; i++)
                        r = n[i],
                        o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else
                    void 0 !== e && "boolean" !== s || ((r = tp(this)) && ei.set(this, "__className__", r),
                    this.setAttribute && this.setAttribute("class", r || !1 === e ? "" : ei.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && -1 < (" " + tf(tp(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var th = /\r/g;
    _.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = h(e),
            this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, _(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = _.map(i, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = _.valHooks[i.type] || _.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(th, "") : null == n ? "" : n : void 0
        }
    }),
    _.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = _.find.attr(e, "value");
                    return null != t ? t : tf(_.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], u = s ? o + 1 : i.length;
                    for (r = o < 0 ? u : s ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !w(n.parentNode, "optgroup"))) {
                            if (t = _(n).val(),
                            s)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = _.makeArray(t), s = i.length; s--; )
                        ((r = i[s]).selected = -1 < _.inArray(_.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < _.inArray(_(e).val(), t)
            }
        },
        d.checkOn || (_.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var tg = e.location
      , tv = {
        guid: Date.now()
    }
      , ty = /\?/;
    _.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (i) {}
        return r = n && n.getElementsByTagName("parsererror")[0],
        n && !r || _.error("Invalid XML: " + (r ? _.map(r.childNodes, function(e) {
            return e.textContent
        }).join("\n") : t)),
        n
    }
    ;
    var tm = /^(?:focusinfocus|focusoutblur)$/
      , t$ = function(e) {
        e.stopPropagation()
    };
    _.extend(_.event, {
        trigger: function(t, n, r, i) {
            var o, s, a, u, l, f, p, d, y = [r || v], m = c.call(t, "type") ? t.type : t, $ = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = d = a = r = r || v,
            3 !== r.nodeType && 8 !== r.nodeType && !tm.test(m + _.event.triggered) && (-1 < m.indexOf(".") && (m = ($ = m.split(".")).shift(),
            $.sort()),
            l = 0 > m.indexOf(":") && "on" + m,
            (t = t[_.expando] ? t : new _.Event(m,"object" == typeof t && t)).isTrigger = i ? 2 : 3,
            t.namespace = $.join("."),
            t.rnamespace = t.namespace ? RegExp("(^|\\.)" + $.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : _.makeArray(n, [t]),
            p = _.event.special[m] || {},
            i || !p.trigger || !1 !== p.trigger.apply(r, n))) {
                if (!i && !p.noBubble && !g(r)) {
                    for (u = p.delegateType || m,
                    tm.test(u + m) || (s = s.parentNode); s; s = s.parentNode)
                        y.push(s),
                        a = s;
                    a === (r.ownerDocument || v) && y.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = y[o++]) && !t.isPropagationStopped(); )
                    d = s,
                    t.type = 1 < o ? u : p.bindType || m,
                    (f = (ei.get(s, "events") || Object.create(null))[t.type] && ei.get(s, "handle")) && f.apply(s, n),
                    (f = l && s[l]) && f.apply && en(s) && (t.result = f.apply(s, n),
                    !1 === t.result && t.preventDefault());
                return t.type = m,
                i || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(y.pop(), n) || !en(r) || l && h(r[m]) && !g(r) && ((a = r[l]) && (r[l] = null),
                _.event.triggered = m,
                t.isPropagationStopped() && d.addEventListener(m, t$),
                r[m](),
                t.isPropagationStopped() && d.removeEventListener(m, t$),
                _.event.triggered = void 0,
                a && (r[l] = a)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = _.extend(new _.Event, n, {
                type: e,
                isSimulated: !0
            });
            _.event.trigger(r, null, t)
        }
    }),
    _.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                _.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return _.event.trigger(e, t, n, !0)
        }
    });
    var tx = /\[\]$/
      , tb = /\r?\n/g
      , t_ = /^(?:submit|button|image|reset|file)$/i
      , tT = /^(?:input|select|textarea|keygen)/i;
    function tw(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            _.each(t, function(t, i) {
                n || tx.test(e) ? r(e, i) : tw(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== $(t))
            r(e, t);
        else
            for (i in t)
                tw(e + "[" + i + "]", t[i], n, r)
    }
    _.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = h(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !_.isPlainObject(e))
            _.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                tw(n, e[n], t, i);
        return r.join("&")
    }
    ,
    _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = _.prop(this, "elements");
                return e ? _.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !_(this).is(":disabled") && tT.test(this.nodeName) && !t_.test(e) && (this.checked || !eb.test(e))
            }).map(function(e, t) {
                var n = _(this).val();
                return null == n ? null : Array.isArray(n) ? _.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(tb, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(tb, "\r\n")
                }
            }).get()
        }
    });
    var tC = /%20/g
      , tk = /#.*$/
      , tS = /([?&])_=[^&]*/
      , tj = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , tE = /^(?:GET|HEAD)$/
      , tD = /^\/\//
      , tA = {}
      , tN = {}
      , tq = "*/".concat("*")
      , tL = v.createElement("a");
    function tH(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(X) || [];
            if (h(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (e[r = r.slice(1) || "*"] = e[r] || []).unshift(n) : (e[r] = e[r] || []).push(n)
        }
    }
    function tP(e, t, n, r) {
        var i = {}
          , o = e === tN;
        function s(a) {
            var u;
            return i[a] = !0,
            _.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                s(l),
                !1)
            }),
            u
        }
        return s(t.dataTypes[0]) || !i["*"] && s("*")
    }
    function tO(e, t) {
        var n, r, i = _.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && _.extend(!0, e, r),
        e
    }
    tL.href = tg.href,
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tg.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(tg.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tq,
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
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? tO(tO(e, _.ajaxSettings), t) : tO(_.ajaxSettings, e)
        },
        ajaxPrefilter: tH(tA),
        ajaxTransport: tH(tN),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var r, i, o, s, a, u, l, c, f, p, d = _.ajaxSetup({}, n), h = d.context || d, g = d.context && (h.nodeType || h.jquery) ? _(h) : _.event, y = _.Deferred(), m = _.Callbacks("once memory"), $ = d.statusCode || {}, x = {}, b = {}, T = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (l) {
                        if (!s)
                            for (s = {}; t = tj.exec(o); )
                                s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = s[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return l ? o : null
                },
                setRequestHeader: function(e, t) {
                    return null == l && (x[e = b[e.toLowerCase()] = b[e.toLowerCase()] || e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == l && (d.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) {
                        if (l)
                            w.always(e[w.status]);
                        else
                            for (t in e)
                                $[t] = [$[t], e[t]]
                    }
                    return this
                },
                abort: function(e) {
                    var t = e || T;
                    return r && r.abort(t),
                    S(0, t),
                    this
                }
            };
            if (y.promise(w),
            d.url = ((t || d.url || tg.href) + "").replace(tD, tg.protocol + "//"),
            d.type = n.method || n.type || d.method || d.type,
            d.dataTypes = (d.dataType || "*").toLowerCase().match(X) || [""],
            null == d.crossDomain) {
                u = v.createElement("a");
                try {
                    u.href = d.url,
                    u.href = u.href,
                    d.crossDomain = tL.protocol + "//" + tL.host != u.protocol + "//" + u.host
                } catch (C) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = _.param(d.data, d.traditional)),
            tP(tA, d, n, w),
            l)
                return w;
            for (f in (c = _.event && d.global) && 0 == _.active++ && _.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !tE.test(d.type),
            i = d.url.replace(tk, ""),
            d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(tC, "+")) : (p = d.url.slice(i.length),
            d.data && (d.processData || "string" == typeof d.data) && (i += (ty.test(i) ? "&" : "?") + d.data,
            delete d.data),
            !1 === d.cache && (i = i.replace(tS, "$1"),
            p = (ty.test(i) ? "&" : "?") + "_=" + tv.guid++ + p),
            d.url = i + p),
            d.ifModified && (_.lastModified[i] && w.setRequestHeader("If-Modified-Since", _.lastModified[i]),
            _.etag[i] && w.setRequestHeader("If-None-Match", _.etag[i])),
            (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && w.setRequestHeader("Content-Type", d.contentType),
            w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + tq + "; q=0.01" : "") : d.accepts["*"]),
            d.headers)
                w.setRequestHeader(f, d.headers[f]);
            if (d.beforeSend && (!1 === d.beforeSend.call(h, w, d) || l))
                return w.abort();
            if (T = "abort",
            m.add(d.complete),
            w.done(d.success),
            w.fail(d.error),
            r = tP(tN, d, n, w)) {
                if (w.readyState = 1,
                c && g.trigger("ajaxSend", [w, d]),
                l)
                    return w;
                d.async && 0 < d.timeout && (a = e.setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    l = !1,
                    r.send(x, S)
                } catch (k) {
                    if (l)
                        throw k;
                    S(-1, k)
                }
            } else
                S(-1, "No Transport");
            function S(t, n, s, u) {
                var f, p, v, x, b, T = n;
                l || (l = !0,
                a && e.clearTimeout(a),
                r = void 0,
                o = u || "",
                w.readyState = 0 < t ? 4 : 0,
                f = 200 <= t && t < 300 || 304 === t,
                s && (x = function(e, t, n) {
                    for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; )
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) {
                        for (i in a)
                            if (a[i] && a[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            s || (s = i)
                        }
                        o = o || s
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(d, w, s)),
                !f && -1 < _.inArray("script", d.dataTypes) && 0 > _.inArray("json", d.dataTypes) && (d.converters["text script"] = function() {}
                ),
                x = function(e, t, n, r) {
                    var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters)
                            l[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift()) {
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(s = l[u + " " + o] || l["* " + o])) {
                                    for (i in l)
                                        if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                            !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0],
                                            c.unshift(a[1]));
                                            break
                                        }
                                }
                                if (!0 !== s) {
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (f) {
                                            return {
                                                state: "parsererror",
                                                error: s ? f : "No conversion from " + u + " to " + o
                                            }
                                        }
                                }
                            }
                        }
                    return {
                        state: "success",
                        data: t
                    }
                }(d, x, w, f),
                f ? (d.ifModified && ((b = w.getResponseHeader("Last-Modified")) && (_.lastModified[i] = b),
                (b = w.getResponseHeader("etag")) && (_.etag[i] = b)),
                204 === t || "HEAD" === d.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state,
                p = x.data,
                f = !(v = x.error))) : (v = T,
                !t && T || (T = "error",
                t < 0 && (t = 0))),
                w.status = t,
                w.statusText = (n || T) + "",
                f ? y.resolveWith(h, [p, T, w]) : y.rejectWith(h, [w, T, v]),
                w.statusCode($),
                $ = void 0,
                c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [w, d, f ? p : v]),
                m.fireWith(h, [w, T]),
                c && (g.trigger("ajaxComplete", [w, d]),
                --_.active || _.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(e, t, n) {
            return _.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return _.get(e, void 0, t, "script")
        }
    }),
    _.each(["get", "post"], function(e, t) {
        _[t] = function(e, n, r, i) {
            return h(n) && (i = i || r,
            r = n,
            n = void 0),
            _.ajax(_.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, _.isPlainObject(e) && e))
        }
    }),
    _.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    _._evalUrl = function(e, t, n) {
        return _.ajax({
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
                _.globalEval(e, t, n)
            }
        })
    }
    ,
    _.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (h(e) && (e = e.call(this[0])),
            t = _(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return h(e) ? this.each(function(t) {
                _(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = _(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = h(e);
            return this.each(function(n) {
                _(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                _(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    _.expr.pseudos.hidden = function(e) {
        return !_.expr.pseudos.visible(e)
    }
    ,
    _.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    _.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var t0 = {
        0: 200,
        1223: 204
    }
      , tM = _.ajaxSettings.xhr();
    d.cors = !!tM && "withCredentials"in tM,
    d.ajax = tM = !!tM,
    _.ajaxTransport(function(t) {
        var n, r;
        if (d.cors || tM && !t.crossDomain)
            return {
                send: function(i, o) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (s in t.xhrFields)
                            a[s] = t.xhrFields[s];
                    for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                    i)
                        a.setRequestHeader(s, i[s]);
                    n = function(e) {
                        return function() {
                            n && (n = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                            "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(t0[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }
                    ,
                    a.onload = n(),
                    r = a.onerror = a.ontimeout = n("error"),
                    void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                        4 === a.readyState && e.setTimeout(function() {
                            n && r()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (u) {
                        if (n)
                            throw u
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    _.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return _.globalEval(e),
                e
            }
        }
    }),
    _.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    _.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs)
            return {
                send: function(r, i) {
                    t = _("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    v.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    });
    var tW, tI = [], t1 = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = tI.pop() || _.expando + "_" + tv.guid++;
            return this[e] = !0,
            e
        }
    }),
    _.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = !1 !== t.jsonp && (t1.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && t1.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            a ? t[a] = t[a].replace(t1, "$1" + i) : !1 !== t.jsonp && (t.url += (ty.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            t.converters["script json"] = function() {
                return s || _.error(i + " was not called"),
                s[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[i],
            e[i] = function() {
                s = arguments
            }
            ,
            r.always(function() {
                void 0 === o ? _(e).removeProp(i) : e[i] = o,
                t[i] && (t.jsonpCallback = n.jsonpCallback,
                tI.push(i)),
                s && h(o) && o(s[0]),
                s = o = void 0
            }),
            "script"
    }),
    d.createHTMLDocument = ((tW = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === tW.childNodes.length),
    _.parseHTML = function(e, t, n) {
        var r, i, o;
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (d.createHTMLDocument ? ((r = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href,
        t.head.appendChild(r)) : t = v),
        o = !n && [],
        (i = O.exec(e)) ? [t.createElement(i[1])] : (i = ej([e], t, o),
        o && o.length && _(o).remove(),
        _.merge([], i.childNodes)))
    }
    ,
    _.fn.load = function(e, t, n) {
        var r, i, o, s = this, a = e.indexOf(" ");
        return -1 < a && (r = tf(e.slice(a)),
        e = e.slice(0, a)),
        h(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < s.length && _.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(r ? _("<div>").append(_.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    _.expr.pseudos.animated = function(e) {
        return _.grep(_.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    _.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l = _.css(e, "position"), c = _(e), f = {};
            "static" === l && (e.style.position = "relative"),
            a = c.offset(),
            o = _.css(e, "top"),
            u = _.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (s = (r = c.position()).top,
            i = r.left) : (s = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            h(t) && (t = t.call(e, n, _.extend({}, a))),
            null != t.top && (f.top = t.top - a.top + s),
            null != t.left && (f.left = t.left - a.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    _.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    _.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === _.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = _(e).offset()).top += _.css(e, "borderTopWidth", !0),
                    i.left += _.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - _.css(r, "marginTop", !0),
                    left: t.left - i.left - _.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === _.css(e, "position"); )
                    e = e.offsetParent;
                return e || ep
            })
        }
    }),
    _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        _.fn[e] = function(r) {
            return K(this, function(e, r, i) {
                var o;
                if (g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i)
                    return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }),
    _.each(["top", "left"], function(e, t) {
        _.cssHooks[t] = e2(d.pixelPosition, function(e, n) {
            if (n)
                return n = eX(e, t),
                eR.test(n) ? _(e).position()[t] + "px" : n
        })
    }),
    _.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        _.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            _.fn[r] = function(i, o) {
                var s = arguments.length && (n || "boolean" != typeof i)
                  , a = n || (!0 === i || !0 === o ? "margin" : "border");
                return K(this, function(t, n, i) {
                    var o;
                    return g(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? _.css(t, n, a) : _.style(t, n, i, a)
                }, t, s ? i : void 0, s)
            }
        })
    }),
    _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        _.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    _.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        _.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    });
    var tR = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    _.proxy = function(e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        h(e))
            return r = i.call(arguments, 2),
            (o = function() {
                return e.apply(t || this, r.concat(i.call(arguments)))
            }
            ).guid = e.guid = e.guid || _.guid++,
            o
    }
    ,
    _.holdReady = function(e) {
        e ? _.readyWait++ : _.ready(!0)
    }
    ,
    _.isArray = Array.isArray,
    _.parseJSON = JSON.parse,
    _.nodeName = w,
    _.isFunction = h,
    _.isWindow = g,
    _.camelCase = et,
    _.type = $,
    _.now = Date.now,
    _.isNumeric = function(e) {
        var t = _.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    _.trim = function(e) {
        return null == e ? "" : (e + "").replace(tR, "$1")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var t9 = e.jQuery
      , tF = e.$;
    return _.noConflict = function(t) {
        return e.$ === _ && (e.$ = tF),
        t && e.jQuery === _ && (e.jQuery = t9),
        _
    }
    ,
    void 0 === t && (e.jQuery = e.$ = _),
    _
});
