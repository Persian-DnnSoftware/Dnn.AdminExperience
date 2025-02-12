! function (e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(i, r, function (t) {
                return e[t]
            }.bind(null, r));
        return i
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 55)
}([function (e, t) {
    e.exports = window.dnn.nodeModules.React
}, function (e, t) {
    e.exports = window.dnn.nodeModules.CommonComponents
}, function (e, t, n) {
    "use strict";
    var i = {
        LOAD_MORE: "LOAD_MORE",
        LOAD_TAB_DATA: "LOAD_TAB_DATA"
    },
        r = {
            SELECT_PANEL: "SELECT_PANEL"
        },
        a = {
            RETRIEVED_SECURITY_IP_FILTERS: "RETRIEVED_SECURITY_IP_FILTERS",
            RETRIEVED_SECURITY_IP_FILTER: "RETRIEVED_SECURITY_IP_FILTER",
            RETRIEVED_SECURITY_BASIC_LOGIN_SETTINS: "RETRIEVED_SECURITY_BASIC_LOGIN_SETTINS",
            UPDATED_SECURITY_BASIC_LOGIN_SETTINS: "UPDATED_SECURITY_BASIC_LOGIN_SETTINS",
            UPDATED_SECURITY_IP_FILTER: "UPDATED_SECURITY_IP_FILTER",
            DELETED_SECURITY_IP_FILTER: "DELETED_SECURITY_IP_FILTER",
            RETRIEVED_SECURITY_MEMBER_SETTINS: "RETRIEVED_SECURITY_MEMBER_SETTINS",
            UPDATED_SECURITY_MEMBER_SETTINS: "UPDATED_SECURITY_MEMBER_SETTINS",
            RETRIEVED_SECURITY_REGISTRATION_SETTINS: "RETRIEVED_SECURITY_REGISTRATION_SETTINS",
            UPDATED_SECURITY_REGISTRATION_SETTINS: "UPDATED_SECURITY_REGISTRATION_SETTINS",
            RETRIEVED_SECURITY_SSL_SETTINS: "RETRIEVED_SECURITY_SSL_SETTINS",
            UPDATED_SECURITY_SSL_SETTINS: "UPDATED_SECURITY_SSL_SETTINS",
            RETRIEVED_SECURITY_OTHER_SETTINS: "RETRIEVED_SECURITY_OTHER_SETTINS",
            UPDATED_SECURITY_OTHER_SETTINS: "UPDATED_SECURITY_OTHER_SETTINS",
            RETRIEVED_SECURITY_BULLETINS: "RETRIEVED_SECURITY_BULLETINS",
            RETRIEVED_SECURITY_SUPERUSER_ACTIVITIES: "RETRIEVED_SECURITY_SUPERUSER_ACTIVITIES",
            RETRIEVED_SECURITY_AUDITCHECK_RESULTS: "RETRIEVED_SECURITY_AUDITCHECK_RESULTS",
            RETRIEVED_SECURITY_AUDITCHECK_RESULT: "RETRIEVED_SECURITY_AUDITCHECK_RESULT",
            RETRIEVED_SECURITY_SEARCH_FILE_SYSTEM_DATABASE: "RETRIEVED_SECURITY_SEARCH_FILE_SYSTEM_DATABASE",
            RETRIEVED_SECURITY_LAST_MODIFIED_SETTINGS: "RETRIEVED_SECURITY_LAST_MODIFIED_SETTINGS",
            RETRIEVED_SECURITY_LAST_MODIFIED_FILES: "RETRIEVED_SECURITY_LAST_MODIFIED_FILES",
            SECURITY_BASIC_LOGIN_SETTINS_CLIENT_MODIFIED: "SECURITY_BASIC_LOGIN_SETTINS_CLIENT_MODIFIED",
            SECURITY_MEMBER_SETTINS_CLIENT_MODIFIED: "SECURITY_MEMBER_SETTINS_CLIENT_MODIFIED",
            SECURITY_REGISTRATION_SETTINS_CLIENT_MODIFIED: "SECURITY_REGISTRATION_SETTINS_CLIENT_MODIFIED",
            SECURITY_SSL_SETTINS_CLIENT_MODIFIED: "SECURITY_SSL_SETTINS_CLIENT_MODIFIED",
            SECURITY_OTHER_SETTINS_CLIENT_MODIFIED: "SECURITY_OTHER_SETTINS_CLIENT_MODIFIED",
            UPDATED_SECURITY_SEARCH_FILE_SYSTEM_DATABASE_KEYWORD: "UPDATED_SECURITY_SEARCH_FILE_SYSTEM_DATABASE_KEYWORD",
            UPDATED_SECURITY_SEARCH_FILE_SYSTEM_DATABASE_ACTIVE_TAB: "UPDATED_SECURITY_SEARCH_FILE_SYSTEM_DATABASE_ACTIVE_TAB"
        };
    n.d(t, "a", function () {
        return i
    }), n.d(t, "c", function () {
        return r
    }), n.d(t, "b", function () {
        return a
    })
}, function (e, t, n) {
    "use strict";
    var i = {
        init: function (e) {
            if (!e) throw new Error("Utilities is undefined.");
            this.utilities = e
        },
        utilities: null
    };
    t.a = i
}, function (e, t) {
    e.exports = window.dnn.nodeModules.ReactRedux
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map(function (t) {
                var n = function (e, t) {
                    var n = e[1] || "",
                        i = e[3];
                    if (!i) return n;
                    if (t && "function" == typeof btoa) {
                        var r = (o = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"),
                            a = i.sources.map(function (e) {
                                return "/*# sourceURL=" + i.sourceRoot + e + " */"
                            });
                        return [n].concat(a).concat([r]).join("\n")
                    }
                    var o;
                    return [n].join("\n")
                }(t, e);
                return t[2] ? "@media " + t[2] + "{" + n + "}" : n
            }).join("")
        }, t.i = function (e, n) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var i = {}, r = 0; r < this.length; r++) {
                var a = this[r][0];
                null != a && (i[a] = !0)
            }
            for (r = 0; r < e.length; r++) {
                var o = e[r];
                null != o[0] && i[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), t.push(o))
            }
        }, t
    }
}, function (e, t, n) {
    var i, r, a = {},
        o = (i = function () {
            return window && document && document.all && !window.atob
        }, function () {
            return void 0 === r && (r = i.apply(this, arguments)), r
        }),
        s = function (e) {
            var t = {};
            return function (e, n) {
                if ("function" == typeof e) return e();
                if (void 0 === t[e]) {
                    var i = function (e, t) {
                        return t ? t.querySelector(e) : document.querySelector(e)
                    }.call(this, e, n);
                    if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                        i = i.contentDocument.head
                    } catch (e) {
                        i = null
                    }
                    t[e] = i
                }
                return t[e]
            }
        }(),
        l = null,
        c = 0,
        p = [],
        u = n(29);

    function d(e, t) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n],
                r = a[i.id];
            if (r) {
                r.refs++;
                for (var o = 0; o < r.parts.length; o++) r.parts[o](i.parts[o]);
                for (; o < i.parts.length; o++) r.parts.push(S(i.parts[o], t))
            } else {
                var s = [];
                for (o = 0; o < i.parts.length; o++) s.push(S(i.parts[o], t));
                a[i.id] = {
                    id: i.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function m(e, t) {
        for (var n = [], i = {}, r = 0; r < e.length; r++) {
            var a = e[r],
                o = t.base ? a[0] + t.base : a[0],
                s = {
                    css: a[1],
                    media: a[2],
                    sourceMap: a[3]
                };
            i[o] ? i[o].parts.push(s) : n.push(i[o] = {
                id: o,
                parts: [s]
            })
        }
        return n
    }

    function g(e, t) {
        var n = s(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var i = p[p.length - 1];
        if ("top" === e.insertAt) i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), p.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var r = s(e.insertAt.before, n);
            n.insertBefore(t, r)
        }
    }

    function f(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = p.indexOf(e);
        t >= 0 && p.splice(t, 1)
    }

    function h(e) {
        var t = document.createElement("style");
        if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
            var i = function () {
                0;
                return n.nc
            }();
            i && (e.attrs.nonce = i)
        }
        return b(t, e.attrs), g(e, t), t
    }

    function b(e, t) {
        Object.keys(t).forEach(function (n) {
            e.setAttribute(n, t[n])
        })
    }

    function S(e, t) {
        var n, i, r, a;
        if (t.transform && e.css) {
            if (!(a = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function () { };
            e.css = a
        }
        if (t.singleton) {
            var o = c++;
            n = l || (l = h(t)), i = y.bind(null, n, o, !1), r = y.bind(null, n, o, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
            var t = document.createElement("link");
            return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", b(t, e.attrs), g(e, t), t
        }(t), i = function (e, t, n) {
            var i = n.css,
                r = n.sourceMap,
                a = void 0 === t.convertToAbsoluteUrls && r;
            (t.convertToAbsoluteUrls || a) && (i = u(i));
            r && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var o = new Blob([i], {
                type: "text/css"
            }),
                s = e.href;
            e.href = URL.createObjectURL(o), s && URL.revokeObjectURL(s)
        }.bind(null, n, t), r = function () {
            f(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = h(t), i = function (e, t) {
            var n = t.css,
                i = t.media;
            i && e.setAttribute("media", i);
            if (e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), r = function () {
            f(n)
        });
        return i(e),
            function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    i(e = t)
                } else r()
            }
    }
    e.exports = function (e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = o()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var n = m(e, t);
        return d(n, t),
            function (e) {
                for (var i = [], r = 0; r < n.length; r++) {
                    var o = n[r];
                    (s = a[o.id]).refs-- , i.push(s)
                }
                e && d(m(e, t), t);
                for (r = 0; r < i.length; r++) {
                    var s;
                    if (0 === (s = i[r]).refs) {
                        for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                        delete a[s.id]
                    }
                }
            }
    };
    var E, C = (E = [], function (e, t) {
        return E[e] = t, E.filter(Boolean).join("\n")
    });

    function y(e, t, n, i) {
        var r = n ? "" : i.css;
        if (e.styleSheet) e.styleSheet.cssText = C(t, r);
        else {
            var a = document.createTextNode(r),
                o = e.childNodes;
            o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(a, o[t]) : e.appendChild(a)
        }
    }
}, function (e, t, n) {
    e.exports = n(30)()
}, function (e, t) {
    e.exports = window.dnn.nodeModules.Redux
}, function (e, t, n) {
    var i = n(48);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(6)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    var i = n(32);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(6)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    var i = n(33);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(6)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    var i = n(34);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(6)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    var i = n(43);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(6)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    var i = n(45);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(6)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    var i = n(49);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(6)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    var i = n(50);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(6)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    var i = n(51);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(6)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t) {
    e.exports = window.dnn.nodeModules.ReduxThunk
}, function (e, t, n) {
    "use strict";
    n.r(t), t.default = '<?xml version="1.0" encoding="utf-8"?>\r\n\x3c!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\r\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n\t viewBox="0 0 2048 2048" style="enable-background:new 0 0 2048 2048;" xml:space="preserve">\r\n<style type="text/css">\r\n\t.st0{fill:#E72635;}\r\n</style>\r\n<path class="st0" d="M1564.2,483.7c-298.4-298.2-782.1-298.2-1080.5,0c-298.4,298.2-298.4,782.1,0,1080.5\r\n\tc298.4,298.4,782.3,298.2,1080.5,0C1862.6,1266,1862.6,781.9,1564.2,483.7z M1160.2,507.3l-33.6,703.7H929.4l-33.6-703.7H1160.2z\r\n\t M1028,1638.6c-82.9,0-150.1-67.2-150.1-150.1c0-82.9,67.2-150.1,150.1-150.1s150.1,67.2,150.1,150.1\r\n\tC1178,1571.4,1110.9,1638.6,1028,1638.6z"/>\r\n</svg>\r\n'
}, function (e, t) {
    e.exports = window.dnn.nodeModules.ReactDOM
}, function (e, t) {
    e.exports = window.dnn.nodeModules.ReduxImmutableStateInvariant
}, function (e, t) {
    e.exports = window.dnn.nodeModules.ReduxDevTools
}, function (e, t) {
    e.exports = window.dnn.nodeModules.ReduxDevToolsLogMonitor
}, function (e, t) {
    e.exports = window.dnn.nodeModules.ReduxDevToolsDockMonitor
}, function (e, t, n) {
    e.exports = n(54)
}, function (e, t, n) {
    var i = n(44);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(6)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    var i = n(28);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(6)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    (e.exports = n(5)(!1)).push([e.i, ".securitySettings-app .dnn-persona-bar-page-body .persona-bar-page-body {\n  min-height: 600px;\n}\n", ""])
}, function (e, t) {
    e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
            i = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
            var r, a = t.trim().replace(/^"(.*)"$/, function (e, t) {
                return t
            }).replace(/^'(.*)'$/, function (e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a) ? e : (r = 0 === a.indexOf("//") ? a : 0 === a.indexOf("/") ? n + a : i + a.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
        })
    }
}, function (e, t, n) {
    "use strict";
    var i = n(31);

    function r() { }

    function a() { }
    a.resetWarningCache = r, e.exports = function () {
        function e(e, t, n, r, a, o) {
            if (o !== i) {
                var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw s.name = "Invariant Violation", s
            }
        }

        function t() {
            return e
        }
        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: a,
            resetWarningCache: r
        };
        return n.PropTypes = n, n
    }
}, function (e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function (e, t, n) {
    (t = e.exports = n(5)(!1)).push([e.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n.kIkCR5w5DhUjzOfvYBmGC {\n  margin: 30px 30px;\n}\n.kIkCR5w5DhUjzOfvYBmGC * {\n  box-sizing: border-box;\n}\n.kIkCR5w5DhUjzOfvYBmGC .dnn-ui-common-input-group label {\n  font-weight: bolder;\n  float: left;\n}\n.kIkCR5w5DhUjzOfvYBmGC .dnn-ui-common-input-group .dnn-dropdown {\n  width: 100%;\n  margin-bottom: 32px;\n}\n.kIkCR5w5DhUjzOfvYBmGC .dnn-ui-common-input-group .dnn-switch-container {\n  float: right;\n}\n.kIkCR5w5DhUjzOfvYBmGC .dnn-ui-common-input-group .dnn-page-picker {\n  margin-bottom: 32px;\n}\n.kIkCR5w5DhUjzOfvYBmGC .dnn-ui-common-input-group .loginSettings-row_switch {\n  border-bottom: 1px solid #C8C8C8;\n  margin: 20px 0 0 0;\n  display: table;\n  width: 100%;\n  padding: 0 0 20px 0;\n}\n.kIkCR5w5DhUjzOfvYBmGC .buttons-box {\n  width: 100%;\n  text-align: center;\n  margin: 20px 0;\n}\n.kIkCR5w5DhUjzOfvYBmGC .buttons-box .dnn-ui-common-button {\n  margin: 5px;\n}\n.kIkCR5w5DhUjzOfvYBmGC .globalIcon {\n  width: 18px;\n  height: 18px;\n  float: left;\n  margin: 5px 0 0 -10px;\n}\n.kIkCR5w5DhUjzOfvYBmGC .globalIcon > svg {\n  fill: #4B4E4F;\n}\n", ""]), t.locals = {
        loginSettings: "kIkCR5w5DhUjzOfvYBmGC"
    }
}, function (e, t, n) {
    (t = e.exports = n(5)(!1)).push([e.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n._3XoNXQBqTTctzszPNP2Ntp {\n  margin: 30px 30px;\n}\n._3XoNXQBqTTctzszPNP2Ntp * {\n  box-sizing: border-box;\n}\n._3XoNXQBqTTctzszPNP2Ntp .dnn-ui-common-input-group label {\n  font-weight: bolder;\n  float: left;\n}\n._3XoNXQBqTTctzszPNP2Ntp .dnn-ui-common-input-group .dnn-switch-container {\n  float: right;\n}\n._3XoNXQBqTTctzszPNP2Ntp .dnn-ui-common-input-group .dnn-single-line-input-with-error {\n  width: 100%;\n}\n._3XoNXQBqTTctzszPNP2Ntp .dnn-ui-common-input-group .sslSettings-row_switch {\n  border-bottom: 1px solid #C8C8C8;\n  margin: 0 0 20px 0;\n  display: table;\n  width: 100%;\n  padding: 0 0 10px 0;\n}\n._3XoNXQBqTTctzszPNP2Ntp .buttons-box {\n  width: 100%;\n  text-align: center;\n  margin: 0 0 10px 0;\n}\n._3XoNXQBqTTctzszPNP2Ntp .buttons-box .dnn-ui-common-button {\n  margin: 5px;\n}\n", ""]), t.locals = {
        sslSettings: "_3XoNXQBqTTctzszPNP2Ntp"
    }
}, function (e, t, n) {
    (t = e.exports = n(5)(!1)).push([e.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n._3NPQ9fcK0FTTh2u8C7klQH {\n  margin: 30px 30px;\n}\n._3NPQ9fcK0FTTh2u8C7klQH * {\n  box-sizing: border-box;\n}\n._3NPQ9fcK0FTTh2u8C7klQH .dnn-ui-common-input-group label {\n  font-weight: bolder;\n  float: left;\n}\n._3NPQ9fcK0FTTh2u8C7klQH .dnn-ui-common-input-group .dnn-switch-container {\n  float: right;\n}\n._3NPQ9fcK0FTTh2u8C7klQH .dnn-ui-common-input-group .dnn-single-line-input-with-error {\n  width: 100%;\n}\n._3NPQ9fcK0FTTh2u8C7klQH .dnn-ui-common-input-group .dnn-multi-line-input-with-error {\n  width: 100%;\n}\n._3NPQ9fcK0FTTh2u8C7klQH .dnn-ui-common-input-group .dnn-multi-line-input-with-error .dnn-ui-common-multi-line-input {\n  margin-bottom: 0 !important;\n}\n._3NPQ9fcK0FTTh2u8C7klQH .dnn-ui-common-input-group .otherSettings-row_switch {\n  margin: 0 0 20px 0;\n  border-bottom: 1px solid #C8C8C8;\n  display: table;\n  width: 100%;\n  padding: 0 0 10px 0;\n}\n._3NPQ9fcK0FTTh2u8C7klQH .buttons-box {\n  width: 100%;\n  text-align: center;\n  margin: 10px 0;\n}\n._3NPQ9fcK0FTTh2u8C7klQH .buttons-box .dnn-ui-common-button {\n  margin: 5px;\n}\n", ""]), t.locals = {
        otherSettings: "_3NPQ9fcK0FTTh2u8C7klQH"
    }
}, function (e, t, n) {
    var i = n(36);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(6)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    (e.exports = n(5)(!1)).push([e.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n.collapsible-component-ipfilters {\n  display: block;\n  float: left;\n  width: 100%;\n  cursor: auto;\n}\n.collapsible-component-ipfilters:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n.collapsible-component-ipfilters .ip-filter-wrapper > div {\n  float: left;\n  width: 100%;\n}\n.collapsible-component-ipfilters div.collapsible-ipfilters {\n  width: 100%;\n  float: left;\n  position: relative;\n  padding: 15px 0 10px 0;\n  box-sizing: border-box;\n  cursor: auto;\n}\n.collapsible-component-ipfilters div.collapsible-ipfilters .row .item-row-ruleType {\n  width: 20%;\n  float: left;\n  padding-left: 15px;\n}\n.collapsible-component-ipfilters div.collapsible-ipfilters .row .item-row-ruleType .item-row-ruleType-display {\n  color: #959695;\n  margin: 0 0 0 -15px;\n}\n.collapsible-component-ipfilters div.collapsible-ipfilters .row .item-row-ruleType .item-row-ruleType-display .allow-icon,\n.collapsible-component-ipfilters div.collapsible-ipfilters .row .item-row-ruleType .item-row-ruleType-display .deny-icon {\n  padding-left: 15px;\n}\n.collapsible-component-ipfilters div.collapsible-ipfilters .row .item-row-ruleType .item-row-ruleType-display .allow-icon > svg,\n.collapsible-component-ipfilters div.collapsible-ipfilters .row .item-row-ruleType .item-row-ruleType-display .deny-icon > svg {\n  width: 20px;\n  float: left;\n  height: 20px;\n  fill: #959695;\n}\n.collapsible-component-ipfilters div.collapsible-ipfilters .row .item-row-ipAddress {\n  width: 65%;\n  float: left;\n  padding-top: 3px;\n}\n.collapsible-component-ipfilters div.collapsible-ipfilters .row .item-row-editButton {\n  width: 13%;\n  float: left;\n}\n.collapsible-component-ipfilters div.collapsible-ipfilters .row .item-row-editButton .edit-icon {\n  cursor: pointer;\n  float: right;\n  margin-right: 5px;\n}\n.collapsible-component-ipfilters div.collapsible-ipfilters .row .item-row-editButton .edit-icon > svg {\n  width: 20px;\n  float: right;\n  height: 20px;\n  fill: #C8C8C8;\n}\n.collapsible-component-ipfilters div.collapsible-ipfilters .row .item-row-editButton .edit-icon > svg:hover {\n  fill: #4B4E4F;\n}\n.collapsible-component-ipfilters div.collapsible-ipfilters .row .item-row-editButton .edit-icon-active {\n  float: right;\n  cursor: pointer;\n}\n.collapsible-component-ipfilters div.collapsible-ipfilters .row .item-row-editButton .edit-icon-active > svg {\n  width: 20px;\n  float: right;\n  height: 20px;\n  fill: #1E88C3;\n}\n.collapsible-component-ipfilters div.collapsible-ipfilters .row .item-row-editButton .delete-icon-hidden {\n  display: none;\n}\n.collapsible-component-ipfilters div.collapsible-ipfilters .row .item-row-editButton .delete-icon {\n  cursor: pointer;\n  float: right;\n}\n.collapsible-component-ipfilters div.collapsible-ipfilters .row .item-row-editButton .delete-icon > svg {\n  width: 20px;\n  float: right;\n  height: 20px;\n  fill: #C8C8C8;\n}\n.collapsible-component-ipfilters div.collapsible-ipfilters .row .item-row-editButton .delete-icon > svg:hover {\n  fill: #4B4E4F;\n}\n.collapsible-component-ipfilters div.collapsible-ipfilters .row .item-row-wrapper {\n  padding: 0 5px 0 5px;\n}\n", ""])
}, function (e, t, n) {
    "use strict";
    n.r(t), t.default = '<?xml version="1.0" encoding="utf-8"?>\r\n\x3c!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\r\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n\t viewBox="0 0 2048 2048" style="enable-background:new 0 0 2048 2048;" xml:space="preserve">\r\n<path d="M256.9,260.9V1793h1532.1V260.9H256.9z M1612.3,440.2v75.6l-2-2l-770.4,770.4l-295-295l-116.7,116.7V440.2H1612.3z\r\n\t M428.2,1624.3V1174l411.8,411.8l150.8-150.8l0,0l621.6-621.6v811H428.2z"/>\r\n</svg>\r\n'
}, function (e, t, n) {
    "use strict";
    n.r(t), t.default = '<?xml version="1.0" encoding="utf-8"?>\r\n\x3c!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\r\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n\t viewBox="0 0 2048 2048" style="enable-background:new 0 0 2048 2048;" xml:space="preserve">\r\n<path d="M1024,258.7c-423.2,0-766.4,343.1-766.4,766.4s343.1,766.4,766.4,766.4s766.4-343.1,766.4-766.4S1447.2,258.7,1024,258.7z\r\n\t M446.1,1025.1c0-320.6,259.9-580.5,580.5-580.5c129.8,0,249.2,43.1,345.9,115.1L561.2,1371C489.2,1274.3,446.1,1154.9,446.1,1025.1\r\n\tz M1026.5,1605.6c-122.4,0-235.9-38.1-329.5-102.9l807.2-807.2c64.7,93.6,102.8,207.1,102.8,329.5\r\n\tC1607,1345.7,1347.1,1605.6,1026.5,1605.6z"/>\r\n</svg>\r\n'
}, function (e, t, n) {
    "use strict";
    n.r(t), t.default = '<?xml version="1.0" encoding="utf-8"?>\r\n\x3c!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\r\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n\t viewBox="0 0 2048 2048" style="enable-background:new 0 0 2048 2048;" xml:space="preserve">\r\n<g>\r\n\t<polygon points="306.5,1438.4 259,1789 609.6,1741.5 610.8,1740.3 307.7,1437.2 \t"/>\r\n\t<rect x="294.4" y="752.6" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -367.0447 1047.6558)" width="1573.5" height="428.7"/>\r\n</g>\r\n</svg>\r\n'
}, function (e, t, n) {
    "use strict";
    n.r(t), t.default = '<?xml version="1.0" encoding="utf-8"?>\r\n\x3c!-- Generator: Adobe Illustrator 20.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\x3e\r\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r\n\t viewBox="0 0 2048 2048" style="enable-background:new 0 0 2048 2048;" xml:space="preserve">\r\n<g>\r\n\t<polygon points="503.6,1786 1535.6,1786 1672.6,626.4 390.5,626.4 \t"/>\r\n\t<polygon points="1287.6,386.2 1287.6,262 767.5,262 767.5,386.2 317.4,386.2 317.4,514 1730.6,514 1730.6,386.2 \t"/>\r\n</g>\r\n</svg>\r\n'
}, function (e, t, n) {
    var i = n(42);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(6)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    (e.exports = n(5)(!1)).push([e.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n.ip-filter-setting-editor .container {\n  padding: 10px 30px 10px 30px;\n}\n.ip-filter-setting-editor .container .dnn-ui-common-input-group {\n  width: 100%;\n  padding: 0 0 10px 0;\n  margin: 0 0 10px 0;\n}\n.ip-filter-setting-editor .container .dnn-ui-common-input-group:first-child {\n  border-bottom: solid 1px #C8C8C8;\n  margin: 0 0 20px 0;\n}\n.ip-filter-setting-editor .container .dnn-ui-common-input-group .dnn-dropdown {\n  width: 100%;\n}\n.ip-filter-setting-editor .container .dnn-ui-common-input-group .dnn-label {\n  margin: 5px 0 0 0;\n}\n.ip-filter-setting-editor .container .dnn-ui-common-input-group .dnn-label label {\n  float: left;\n  font-weight: bolder;\n}\n.ip-filter-setting-editor .container .dnn-ui-common-input-group .dnn-single-line-input-with-error {\n  width: 100%;\n}\n.ip-filter-setting-editor .container .dnn-ui-common-input-group .dnn-radio-buttons {\n  float: left;\n  width: 300px;\n  margin: 9px 0 0 30px;\n}\n.ip-filter-setting-editor .container .dnn-ui-common-input-group .dnn-radio-buttons label {\n  float: left;\n}\n.ip-filter-setting-editor .container .dnn-ui-common-input-group .dnn-radio-buttons li {\n  margin: 0 20px 0 0;\n}\n.ip-filter-setting-editor .container .mask {\n  display: block;\n}\n.ip-filter-setting-editor .container .mask-hidden {\n  display: none;\n}\n.ip-filter-setting-editor .buttons-box {\n  width: 100%;\n  text-align: center;\n  float: left;\n  margin: 0 0 20px 0;\n}\n.ip-filter-setting-editor .buttons-box .dnn-ui-common-button {\n  margin: 5px;\n}\n.ip-filter-setting-editor .buttons-box .edit-icon {\n  margin: 0px 10px 20px 10px;\n  float: right;\n}\n.ip-filter-setting-editor .buttons-box .edit-icon svg {\n  width: 16px;\n  float: left;\n  height: 16px;\n}\n.ip-filter-setting-editor .buttons-box .delete-icon {\n  margin: 0px 10px 20px 10px;\n  float: right;\n}\n.ip-filter-setting-editor .buttons-box .delete-icon svg {\n  width: 16px;\n  float: left;\n  height: 16px;\n}\n", ""])
}, function (e, t, n) {
    (t = e.exports = n(5)(!1)).push([e.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n._12gGN-MUMm3hAMmgrd8E80 {\n  margin: 20px 30px;\n  display: block;\n}\n._12gGN-MUMm3hAMmgrd8E80 * {\n  box-sizing: border-box;\n}\n._12gGN-MUMm3hAMmgrd8E80 .ip-filter-items-grid {\n  border: solid 1px #C8C8C8;\n  margin: 20px 0 55px 0;\n  float: left;\n  width: 100%;\n}\n._12gGN-MUMm3hAMmgrd8E80 .header-row {\n  padding: 10px 0 10px 0;\n  width: 100%;\n  float: left;\n  overflow: hidden;\n}\n._12gGN-MUMm3hAMmgrd8E80 .header-RuleType {\n  width: 20%;\n  float: left;\n  font-weight: bolder;\n  padding-left: 15px;\n}\n._12gGN-MUMm3hAMmgrd8E80 .header-IPAddress {\n  width: 65%;\n  float: left;\n  font-weight: bolder;\n}\n._12gGN-MUMm3hAMmgrd8E80 .collapsible-component .collapsible-header {\n  text-align: right;\n  text-transform: none;\n  padding-right: 40px;\n}\n._12gGN-MUMm3hAMmgrd8E80 .collapsible-component .collapsible-header .collapse-icon {\n  display: none;\n}\n._12gGN-MUMm3hAMmgrd8E80 .collapsible-component .collapsible-header .collapse-icon.collapsed {\n  display: none;\n}\n._12gGN-MUMm3hAMmgrd8E80 .ip-filter-topbar {\n  border-bottom: 1px solid #C8C8C8;\n  float: left;\n  width: 100%;\n}\n._12gGN-MUMm3hAMmgrd8E80 .ip-filter-topbar .warning-container {\n  width: 75%;\n  float: left;\n  margin: 10px 0 15px 0;\n  font-weight: bolder;\n  color: #EA2134;\n}\n._12gGN-MUMm3hAMmgrd8E80 .ip-filter-topbar .warning-container .collapsible-content {\n  margin-top: 5px;\n}\n._12gGN-MUMm3hAMmgrd8E80 .ip-filter-topbar .warning-container .collapsible-content > div {\n  border: solid 1px;\n}\n._12gGN-MUMm3hAMmgrd8E80 .ip-filter-topbar .warning-container .warning-icon > svg {\n  width: 17px;\n  float: left;\n  height: 17px;\n  margin: 0 10px 0 0;\n}\n._12gGN-MUMm3hAMmgrd8E80 .ip-filter-topbar .AddItemRow {\n  text-align: right;\n  width: 25%;\n  float: right;\n  margin: 10px 0 15px 0;\n  font-weight: bolder;\n  overflow: hidden;\n  cursor: pointer;\n}\n._12gGN-MUMm3hAMmgrd8E80 .ip-filter-topbar .AddItemRow .AddItemBox {\n  width: auto;\n  float: right;\n  color: #4B4E4F;\n}\n._12gGN-MUMm3hAMmgrd8E80 .ip-filter-topbar .AddItemRow .AddItemBox .add-icon {\n  margin-left: 20px;\n  margin-right: 5px;\n  float: left;\n  cursor: pointer;\n}\n._12gGN-MUMm3hAMmgrd8E80 .ip-filter-topbar .AddItemRow .AddItemBox .add-icon svg {\n  width: 16px;\n  float: left;\n  height: 16px;\n  fill: #4B4E4F;\n}\n._12gGN-MUMm3hAMmgrd8E80 .ip-filter-topbar .AddItemRow .AddItemBox-active {\n  width: auto;\n  float: right;\n  color: #1E88C3;\n}\n._12gGN-MUMm3hAMmgrd8E80 .ip-filter-topbar .AddItemRow .AddItemBox-active .add-icon {\n  margin-left: 20px;\n  margin-right: 5px;\n  float: left;\n  cursor: pointer;\n}\n._12gGN-MUMm3hAMmgrd8E80 .ip-filter-topbar .AddItemRow .AddItemBox-active .add-icon svg {\n  width: 16px;\n  float: left;\n  height: 16px;\n  fill: #1E88C3;\n}\n._12gGN-MUMm3hAMmgrd8E80 .ip-filter-item {\n  color: #4B4E4F;\n}\n", ""]), t.locals = {
        ipFilterItems: "_12gGN-MUMm3hAMmgrd8E80"
    }
}, function (e, t, n) {
    (t = e.exports = n(5)(!1)).push([e.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n._1c24_V4B0QpqBXurcXuM8s {\n  margin: 30px 30px;\n}\n._1c24_V4B0QpqBXurcXuM8s * {\n  box-sizing: border-box;\n}\n._1c24_V4B0QpqBXurcXuM8s .dnn-ui-common-input-group label {\n  font-weight: bolder;\n  float: left;\n}\n._1c24_V4B0QpqBXurcXuM8s .dnn-ui-common-input-group .dnn-switch-container {\n  float: right;\n}\n._1c24_V4B0QpqBXurcXuM8s .dnn-ui-common-input-group .memberSettings-row_switch {\n  border-bottom: 1px solid #C8C8C8;\n  margin: 20px 0 0 0;\n  display: table;\n  width: 100%;\n  padding: 0 0 20px 0;\n}\n._1c24_V4B0QpqBXurcXuM8s .dnn-ui-common-input-group .dnn-single-line-input-with-error {\n  width: 100%;\n}\n._1c24_V4B0QpqBXurcXuM8s .buttons-box {\n  width: 100%;\n  text-align: center;\n}\n._1c24_V4B0QpqBXurcXuM8s .buttons-box .dnn-ui-common-button {\n  margin: 5px;\n}\n._1c24_V4B0QpqBXurcXuM8s .globalIcon {\n  width: 18px;\n  height: 18px;\n  float: left;\n  margin: 5px 0 0 -10px;\n}\n._1c24_V4B0QpqBXurcXuM8s .globalIcon > svg {\n  fill: #4B4E4F;\n}\n", ""]), t.locals = {
        memberSettings: "_1c24_V4B0QpqBXurcXuM8s"
    }
}, function (e, t, n) {
    (t = e.exports = n(5)(!1)).push([e.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n._2p6jX-baSb_GVJbY7Culx4 {\n  margin: 30px 30px;\n}\n._2p6jX-baSb_GVJbY7Culx4 * {\n  box-sizing: border-box;\n}\n._2p6jX-baSb_GVJbY7Culx4 .dnn-ui-common-input-group label {\n  font-weight: bolder;\n  float: left;\n}\n._2p6jX-baSb_GVJbY7Culx4 .dnn-ui-common-input-group .registrationSettings-row-options {\n  float: left;\n  width: 100%;\n}\n._2p6jX-baSb_GVJbY7Culx4 .dnn-ui-common-input-group .registrationSettings-row-options .dnn-label {\n  width: 30%;\n  margin-right: 0;\n}\n._2p6jX-baSb_GVJbY7Culx4 .dnn-ui-common-input-group .registrationSettings-row-options .dnn-radio-buttons {\n  float: left;\n  width: 70%;\n  margin: 5px 0 0 0;\n}\n._2p6jX-baSb_GVJbY7Culx4 .dnn-ui-common-input-group .registrationSettings-row-input {\n  float: left;\n  width: 100%;\n}\n._2p6jX-baSb_GVJbY7Culx4 .dnn-ui-common-input-group .registrationSettings-row-static {\n  float: left;\n  width: 100%;\n  margin: 20px 0 0 0;\n  padding: 0 0 20px 0;\n  border-bottom: solid 1px #C8C8C8;\n}\n._2p6jX-baSb_GVJbY7Culx4 .dnn-ui-common-input-group .registrationSettings-row-static .registrationSettings-row-static-text {\n  color: #4B4E4F;\n  margin: 6px 0 0 0;\n  float: right;\n}\n._2p6jX-baSb_GVJbY7Culx4 .dnn-ui-common-input-group .tags-field {\n  width: 100%;\n}\n._2p6jX-baSb_GVJbY7Culx4 .dnn-ui-common-input-group .tags-field .tag-search-results {\n  z-index: 99;\n}\n._2p6jX-baSb_GVJbY7Culx4 .dnn-ui-common-input-group .registrationSettings-row_switch {\n  border-bottom: 1px solid #C8C8C8;\n  margin: 20px 0 0 0;\n  display: table;\n  width: 100%;\n  padding: 0 0 20px 0;\n}\n._2p6jX-baSb_GVJbY7Culx4 .dnn-ui-common-input-group .registrationSettings-row_switch .dnn-switch-container {\n  float: right;\n}\n._2p6jX-baSb_GVJbY7Culx4 .dnn-ui-common-input-group .dnn-single-line-input-with-error {\n  width: 100%;\n}\n._2p6jX-baSb_GVJbY7Culx4 .buttons-box {\n  width: 100%;\n  text-align: center;\n  margin: 30px 0 10px 0;\n}\n._2p6jX-baSb_GVJbY7Culx4 .buttons-box .dnn-ui-common-button {\n  margin: 5px;\n}\n._2p6jX-baSb_GVJbY7Culx4 .globalIcon {\n  width: 18px;\n  height: 18px;\n  float: left;\n  margin: 5px 0 0 -10px;\n}\n._2p6jX-baSb_GVJbY7Culx4 .globalIcon > svg {\n  fill: #4B4E4F;\n}\n", ""]), t.locals = {
        registrationSettings: "_2p6jX-baSb_GVJbY7Culx4"
    }
}, function (e, t, n) {
    var i = n(47);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(6)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    (e.exports = n(5)(!1)).push([e.i, "", ""])
}, function (e, t, n) {
    (t = e.exports = n(5)(!1)).push([e.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n._3ViSU018VS9mVohAQXPO17 {\n  display: inline-block;\n  margin: 30px 20px;\n  border: solid 1px #C8C8C8;\n  width: 94%;\n}\n._3ViSU018VS9mVohAQXPO17 .warning-container {\n  float: left;\n  margin: 25px;\n  color: #EA2134;\n  width: 90%;\n}\n._3ViSU018VS9mVohAQXPO17 .warning-container .warning-icon {\n  float: left;\n  width: 5%;\n}\n._3ViSU018VS9mVohAQXPO17 .warning-container .warning-icon > svg {\n  width: 17px;\n  float: left;\n  height: 17px;\n  margin: 0 10px 0 0;\n}\n._3ViSU018VS9mVohAQXPO17 .warning-container .warning-msg {\n  float: left;\n  width: 95%;\n  font-weight: bold;\n}\n._3ViSU018VS9mVohAQXPO17 .bulletinsHeader-wrapper {\n  width: 100%;\n  float: left;\n  padding: 15px 0 15px 0;\n  text-transform: uppercase;\n  font-weight: bolder;\n}\n._3ViSU018VS9mVohAQXPO17 .bulletinsHeader-wrapper:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n._3ViSU018VS9mVohAQXPO17 .bulletinsHeader-wrapper .bulletinsHeader-Bulletins {\n  margin: 0 20px 0 25px;\n}\n._3ViSU018VS9mVohAQXPO17 .bulletinItem {\n  display: table;\n  width: 100%;\n}\n._3ViSU018VS9mVohAQXPO17 .bulletinItem:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n._3ViSU018VS9mVohAQXPO17 .bulletinItem .bulletin-detail-wrapper {\n  float: left;\n  width: 700px;\n  margin: 0 25px 0px 25px;\n}\n._3ViSU018VS9mVohAQXPO17 .bulletinItem .collapsible-bulletinitemdetail-header {\n  width: 100%;\n  float: left;\n  position: relative;\n  padding: 15px 20px;\n  box-sizing: border-box;\n}\n._3ViSU018VS9mVohAQXPO17 .bulletinItem .collapsible-bulletinitemdetail-header .term-header {\n  cursor: pointer;\n}\n._3ViSU018VS9mVohAQXPO17 .bulletinItem .collapsible-bulletinitemdetail-header .term-header .term-label-title {\n  width: 80%;\n  float: left;\n}\n._3ViSU018VS9mVohAQXPO17 .bulletinItem .collapsible-bulletinitemdetail-header .term-header .term-label-date {\n  width: 20%;\n  float: left;\n  text-align: right;\n}\n._3ViSU018VS9mVohAQXPO17 .bulletinItem .collapsible-bulletinitemdetail-header .term-header .term-label-wrapper {\n  padding: 0 5px 0 5px;\n  overflow-wrap: break-word;\n}\n", ""]), t.locals = {
        bulletins: "_3ViSU018VS9mVohAQXPO17"
    }
}, function (e, t, n) {
    (t = e.exports = n(5)(!1)).push([e.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n._3oV8nWdPoTSQlDGmGxXjX7 .activities-topbar {\n  border-bottom: solid 1px #C8C8C8;\n  margin: 20px 25px 0 25px;\n  padding: 0 0 15px 0;\n  font-weight: bolder;\n  color: #4B4E4F;\n}\n._3oV8nWdPoTSQlDGmGxXjX7 .activityItems {\n  display: inline-block;\n  margin: 15px 25px 30px 25px;\n  border: solid 1px #C8C8C8;\n}\n._3oV8nWdPoTSQlDGmGxXjX7 .activityItems .activityHeader-wrapper {\n  width: 100%;\n  float: left;\n  padding: 15px 0 15px 0;\n  text-transform: uppercase;\n  font-weight: bolder;\n}\n._3oV8nWdPoTSQlDGmGxXjX7 .activityItems .activityHeader-wrapper:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n._3oV8nWdPoTSQlDGmGxXjX7 .activityItems .activityHeader-wrapper .activityHeader-Username {\n  padding: 0 0 0 25px;\n  width: 34%;\n  float: left;\n}\n._3oV8nWdPoTSQlDGmGxXjX7 .activityItems .activityHeader-wrapper .activityHeader-CreatedDate {\n  width: 20%;\n  float: left;\n}\n._3oV8nWdPoTSQlDGmGxXjX7 .activityItems .activityHeader-wrapper .activityHeader-LastLogin {\n  width: 20%;\n  float: left;\n}\n._3oV8nWdPoTSQlDGmGxXjX7 .activityItems .activityHeader-wrapper .activityHeader-LastActivityDate {\n  width: 20%;\n  float: left;\n}\n._3oV8nWdPoTSQlDGmGxXjX7 .activityItems .activityItem {\n  display: table;\n  width: 100%;\n  padding: 15px 0;\n  color: #4B4E4F;\n}\n._3oV8nWdPoTSQlDGmGxXjX7 .activityItems .activityItem:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n._3oV8nWdPoTSQlDGmGxXjX7 .activityItems .activityItem .label-username {\n  padding: 0 0 0 20px;\n  width: 34%;\n  float: left;\n}\n._3oV8nWdPoTSQlDGmGxXjX7 .activityItems .activityItem .label-createddate {\n  width: 20%;\n  float: left;\n}\n._3oV8nWdPoTSQlDGmGxXjX7 .activityItems .activityItem .label-lastlogindate {\n  width: 20%;\n  float: left;\n}\n._3oV8nWdPoTSQlDGmGxXjX7 .activityItems .activityItem .label-lastactivitydate {\n  width: 20%;\n  float: left;\n}\n._3oV8nWdPoTSQlDGmGxXjX7 .activityItems .activityItem .label-wrapper {\n  padding: 0 5px 0 5px;\n  overflow-wrap: break-word;\n}\n", ""]), t.locals = {
        activities: "_3oV8nWdPoTSQlDGmGxXjX7"
    }
}, function (e, t, n) {
    (t = e.exports = n(5)(!1)).push([e.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n._1YD5s8gju6zxFXOP0Dy_PH .auditcheck-topbar {\n  border-bottom: solid 1px #C8C8C8;\n  margin: 20px 25px 0 25px;\n  padding: 0 0 15px 0;\n  font-weight: bolder;\n  color: #4B4E4F;\n}\n._1YD5s8gju6zxFXOP0Dy_PH .auditCheckItems {\n  display: inline-block;\n  margin: 15px 25px 50px 25px;\n  border: solid 1px #C8C8C8;\n}\n._1YD5s8gju6zxFXOP0Dy_PH .auditCheckItems .auditCheckHeader-wrapper {\n  width: 100%;\n  float: left;\n  padding: 15px 0 15px 0;\n  text-transform: uppercase;\n  font-weight: bolder;\n}\n._1YD5s8gju6zxFXOP0Dy_PH .auditCheckItems .auditCheckHeader-wrapper:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n._1YD5s8gju6zxFXOP0Dy_PH .auditCheckItems .auditCheckHeader-wrapper .auditCheckHeader-SecurityCheck {\n  padding: 0 0 0 25px;\n  width: 34%;\n  float: left;\n}\n._1YD5s8gju6zxFXOP0Dy_PH .auditCheckItems .auditCheckHeader-wrapper .auditCheckHeader-Result {\n  width: 31%;\n  float: left;\n}\n._1YD5s8gju6zxFXOP0Dy_PH .auditCheckItems .auditCheckHeader-wrapper .auditCheckHeader-Notes {\n  width: 31%;\n  float: left;\n}\n._1YD5s8gju6zxFXOP0Dy_PH .auditCheckItems .auditCheckItem {\n  display: table;\n  width: 100%;\n  padding: 15px 0;\n  color: #4B4E4F;\n}\n._1YD5s8gju6zxFXOP0Dy_PH .auditCheckItems .auditCheckItem:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n._1YD5s8gju6zxFXOP0Dy_PH .auditCheckItems .auditCheckItem .label-name {\n  padding: 0 0 0 20px;\n  width: 34%;\n  float: left;\n}\n._1YD5s8gju6zxFXOP0Dy_PH .auditCheckItems .auditCheckItem .label-result {\n  width: 31%;\n  float: left;\n}\n._1YD5s8gju6zxFXOP0Dy_PH .auditCheckItems .auditCheckItem .label-notes {\n  width: 31%;\n  float: left;\n}\n._1YD5s8gju6zxFXOP0Dy_PH .auditCheckItems .auditCheckItem .label-wrapper {\n  word-break: break-word;\n  padding: 0 5px 0 5px;\n  overflow-wrap: break-word;\n}\n._1YD5s8gju6zxFXOP0Dy_PH .auditCheckItems .auditCheckItem .label-wrapper .label-result-severity-fail {\n  color: #EA2134;\n  font-weight: bolder;\n  margin: 0 0 10px 0;\n  text-transform: uppercase;\n}\n._1YD5s8gju6zxFXOP0Dy_PH .auditCheckItems .auditCheckItem .label-wrapper .label-result-severity-alert {\n  color: #1E88C3;\n  font-weight: bolder;\n  margin: 0 0 10px 0;\n  text-transform: uppercase;\n}\n._1YD5s8gju6zxFXOP0Dy_PH .auditCheckItems .auditCheckItem .label-wrapper .label-result-severity-pass {\n  color: #368254;\n  font-weight: bolder;\n  margin: 0 0 10px 0;\n  text-transform: uppercase;\n}\n._1YD5s8gju6zxFXOP0Dy_PH .auditCheckItems .auditCheckItem .label-wrapper .label-result-severity-unverified {\n  color: #1E88C3;\n  font-weight: bolder;\n  margin: 0 0 10px 0;\n  text-transform: uppercase;\n  text-decoration: underline;\n  cursor: pointer;\n}\n", ""]), t.locals = {
        auditCheckResults: "_1YD5s8gju6zxFXOP0Dy_PH"
    }
}, function (e, t, n) {
    (t = e.exports = n(5)(!1)).push([e.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n._1cNC-Cro3OloCzqAHm2ANo {\n  min-height: 171px;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-title {\n  margin: 0 0 0 25px;\n  color: #4B4E4F;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannercheck-topbar {\n  border-bottom: solid 1px #C8C8C8;\n  height: 34px;\n  margin: 20px 25px 20px 25px;\n  padding: 0 0 10px 0;\n  font-weight: bolder;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannercheck-topbar .search-filter {\n  float: left;\n  width: 400px;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannercheck-topbar .search-filter:hover svg {\n  fill: #1E88C3;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannercheck-topbar .search-filter > div {\n  display: block !important;\n  border-right: 1px solid #C8C8C8;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannercheck-topbar .search-filter > div input {\n  display: block;\n  width: 100%;\n  position: inherit !important;\n  border: none;\n  border-radius: none;\n  background-color: transparent;\n  outline: none;\n  padding-right: 45px;\n  padding: 9px 16px 9px 0 !important;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannercheck-topbar .search-filter > div input::-webkit-search-cancel-button {\n  position: relative;\n  right: 30px;\n  cursor: pointer;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannercheck-topbar .search-filter-active {\n  float: left;\n  width: 400px;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannercheck-topbar .search-filter-active > div {\n  display: block !important;\n  border-right: 1px solid #C8C8C8;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannercheck-topbar .search-filter-active > div input {\n  display: block;\n  width: 100%;\n  position: inherit !important;\n  border: none;\n  border-radius: none;\n  background-color: transparent;\n  outline: none;\n  padding-right: 45px;\n  color: #1E88C3 !important;\n  padding: 9px 16px 9px 0 !important;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannercheck-topbar .search-filter-active > div input::-webkit-search-cancel-button {\n  position: relative;\n  right: 30px;\n  cursor: pointer;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannercheck-topbar .search-filter-active svg {\n  fill: #1E88C3;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannercheck-topbar .files-filter {\n  float: right;\n  border-right: 1px solid #C8C8C8;\n  margin: 0px 20px 0 0;\n  padding: 9px 20px 4px 0px;\n  height: 21px;\n  color: #4B4E4F;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannercheck-topbar .files-filter:hover {\n  cursor: pointer;\n  color: #1E88C3;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannercheck-topbar .files-filter-active {\n  float: right;\n  border-right: 1px solid #C8C8C8;\n  margin: 0px 20px 0 0;\n  padding: 9px 20px 4px 0px;\n  height: 21px;\n  color: #1E88C3;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannercheck-topbar .settings-filter {\n  float: right;\n  color: #4B4E4F;\n  margin: 9px 0 0 0;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannercheck-topbar .settings-filter:hover {\n  cursor: pointer;\n  color: #1E88C3;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannercheck-topbar .settings-filter-active {\n  float: right;\n  color: #1E88C3;\n  margin: 9px 0 0 0;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems {\n  display: inline-block;\n  margin: 15px 25px 30px 25px;\n  border: solid 1px #C8C8C8;\n  width: 746px;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems .scannerCheckHeader-wrapper {\n  width: 100%;\n  float: left;\n  padding: 15px 0 15px 0;\n  text-transform: uppercase;\n  font-weight: bolder;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems .scannerCheckHeader-wrapper:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems .scannerCheckHeader-wrapper .scannerCheckHeader-FileName {\n  padding: 0 0 0 25px;\n  width: 73%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems .scannerCheckHeader-wrapper .scannerCheckHeader-LastWriteTime {\n  width: 23%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems .scannerCheckHeader-wrapper .scannerCheckHeader-DatabaseInstance {\n  padding: 0 0 0 25px;\n  width: 40%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems .scannerCheckHeader-wrapper .scannerCheckHeader-DatabaseValue {\n  width: 54%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems .scannerCheckItem {\n  display: table;\n  width: 100%;\n  padding: 15px 0;\n  color: #4B4E4F;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems .scannerCheckItem:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems .scannerCheckItem .label-name {\n  padding: 0 0 0 20px;\n  width: 73%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems .scannerCheckItem .label-date {\n  width: 23%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems .scannerCheckItem .label-columnname {\n  padding: 0 0 0 20px;\n  width: 40%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems .scannerCheckItem .label-columnvalue {\n  width: 54%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems .scannerCheckItem .label-wrapper {\n  padding: 0 5px 0 5px;\n  overflow-wrap: break-word;\n  word-break: break-all;\n  max-width: 500px;\n  width: 100%;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-riskFiles {\n  display: inline-block;\n  margin: 15px 25px 30px 25px;\n  border: solid 1px #C8C8C8;\n  width: 746px;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-riskFiles .scannerCheckHeader-wrapper {\n  width: 100%;\n  float: left;\n  padding: 15px 0 15px 0;\n  text-transform: uppercase;\n  font-weight: bolder;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-riskFiles .scannerCheckHeader-wrapper:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-riskFiles .scannerCheckHeader-wrapper .scannerCheckHeader-FileName {\n  padding: 0 0 0 25px;\n  width: 75%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-riskFiles .scannerCheckHeader-wrapper .scannerCheckHeader-LastWriteTime {\n  width: 20%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-riskFiles .scannerCheckItem {\n  display: table;\n  width: 100%;\n  padding: 15px 0;\n  color: #4B4E4F;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-riskFiles .scannerCheckItem:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-riskFiles .scannerCheckItem .label-name {\n  padding: 0 0 0 20px;\n  width: 75%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-riskFiles .scannerCheckItem .label-date {\n  width: 20%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-riskFiles .scannerCheckItem .label-wrapper {\n  padding: 0 5px 0 5px;\n  overflow-wrap: break-word;\n  word-break: break-all;\n  max-width: 500px;\n  width: 100%;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-portalSettings {\n  display: inline-block;\n  margin: 15px 25px 30px 25px;\n  border: solid 1px #C8C8C8;\n  width: 746px;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-portalSettings .scannerCheckHeader-wrapper {\n  width: 100%;\n  float: left;\n  padding: 15px 0 15px 0;\n  text-transform: uppercase;\n  font-weight: bolder;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-portalSettings .scannerCheckHeader-wrapper:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-portalSettings .scannerCheckHeader-wrapper .scannerCheckHeader-PortalId {\n  padding: 0 0 0 25px;\n  width: 10%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-portalSettings .scannerCheckHeader-wrapper .scannerCheckHeader-SettingName {\n  width: 35%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-portalSettings .scannerCheckHeader-wrapper .scannerCheckHeader-SettingValue {\n  width: 20%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-portalSettings .scannerCheckHeader-wrapper .scannerCheckHeader-UserId {\n  width: 10%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-portalSettings .scannerCheckHeader-wrapper .scannerCheckHeader-LastWriteTime {\n  width: 18%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-portalSettings .scannerCheckItem {\n  display: table;\n  width: 100%;\n  padding: 15px 0;\n  color: #4B4E4F;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-portalSettings .scannerCheckItem:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-portalSettings .scannerCheckItem .label-id {\n  padding: 0 0 0 20px;\n  width: 10%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-portalSettings .scannerCheckItem .label-name {\n  width: 35%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-portalSettings .scannerCheckItem .label-value {\n  width: 20%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-portalSettings .scannerCheckItem .label-user {\n  width: 10%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-portalSettings .scannerCheckItem .label-date {\n  width: 18%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-portalSettings .scannerCheckItem .label-wrapper {\n  padding: 0 5px 0 5px;\n  overflow-wrap: break-word;\n  word-break: break-all;\n  width: 100%;\n  max-width: 150px;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-hostSettings {\n  display: inline-block;\n  margin: 15px 25px 30px 25px;\n  border: solid 1px #C8C8C8;\n  width: 746px;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-hostSettings .scannerCheckHeader-wrapper {\n  width: 100%;\n  float: left;\n  padding: 15px 0 15px 0;\n  text-transform: uppercase;\n  font-weight: bolder;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-hostSettings .scannerCheckHeader-wrapper:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-hostSettings .scannerCheckHeader-wrapper .scannerCheckHeader-SettingName {\n  padding: 0 0 0 25px;\n  width: 35%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-hostSettings .scannerCheckHeader-wrapper .scannerCheckHeader-SettingValue {\n  width: 30%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-hostSettings .scannerCheckHeader-wrapper .scannerCheckHeader-UserId {\n  width: 10%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-hostSettings .scannerCheckHeader-wrapper .scannerCheckHeader-LastWriteTime {\n  width: 18%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-hostSettings .scannerCheckItem {\n  display: table;\n  width: 100%;\n  padding: 15px 0;\n  color: #4B4E4F;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-hostSettings .scannerCheckItem:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-hostSettings .scannerCheckItem .label-name {\n  padding: 0 0 0 20px;\n  width: 35%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-hostSettings .scannerCheckItem .label-value {\n  width: 30%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-hostSettings .scannerCheckItem .label-user {\n  width: 10%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-hostSettings .scannerCheckItem .label-date {\n  width: 18%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-hostSettings .scannerCheckItem .label-wrapper {\n  padding: 0 5px 0 5px;\n  overflow-wrap: break-word;\n  word-break: break-all;\n  width: 100%;\n  max-width: 150px;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-tabSettings {\n  display: inline-block;\n  margin: 15px 25px 30px 25px;\n  border: solid 1px #C8C8C8;\n  width: 746px;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-tabSettings .scannerCheckHeader-wrapper {\n  width: 100%;\n  float: left;\n  padding: 15px 0 15px 0;\n  text-transform: uppercase;\n  font-weight: bolder;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-tabSettings .scannerCheckHeader-wrapper:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-tabSettings .scannerCheckHeader-wrapper .scannerCheckHeader-TabId {\n  padding: 0 0 0 25px;\n  width: 10%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-tabSettings .scannerCheckHeader-wrapper .scannerCheckHeader-PortalId {\n  width: 10%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-tabSettings .scannerCheckHeader-wrapper .scannerCheckHeader-SettingName {\n  width: 25%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-tabSettings .scannerCheckHeader-wrapper .scannerCheckHeader-SettingValue {\n  width: 20%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-tabSettings .scannerCheckHeader-wrapper .scannerCheckHeader-UserId {\n  width: 10%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-tabSettings .scannerCheckHeader-wrapper .scannerCheckHeader-LastWriteTime {\n  width: 18%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-tabSettings .scannerCheckItem {\n  display: table;\n  width: 100%;\n  padding: 15px 0;\n  color: #4B4E4F;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-tabSettings .scannerCheckItem:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-tabSettings .scannerCheckItem .label-tab {\n  padding: 0 0 0 20px;\n  width: 10%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-tabSettings .scannerCheckItem .label-id {\n  width: 10%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-tabSettings .scannerCheckItem .label-name {\n  width: 25%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-tabSettings .scannerCheckItem .label-value {\n  width: 20%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-tabSettings .scannerCheckItem .label-user {\n  width: 10%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-tabSettings .scannerCheckItem .label-date {\n  width: 18%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-tabSettings .scannerCheckItem .label-wrapper {\n  padding: 0 5px 0 5px;\n  overflow-wrap: break-word;\n  word-break: break-all;\n  width: 100%;\n  max-width: 150px;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings {\n  display: inline-block;\n  margin: 15px 25px 30px 25px;\n  border: solid 1px #C8C8C8;\n  width: 746px;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings .scannerCheckHeader-wrapper {\n  width: 100%;\n  float: left;\n  padding: 15px 0 15px 0;\n  text-transform: uppercase;\n  font-weight: bolder;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings .scannerCheckHeader-wrapper:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings .scannerCheckHeader-wrapper .scannerCheckHeader-Type {\n  padding: 0 0 0 25px;\n  width: 18%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings .scannerCheckHeader-wrapper .scannerCheckHeader-ModuleId {\n  width: 11%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings .scannerCheckHeader-wrapper .scannerCheckHeader-PortalId {\n  width: 10%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings .scannerCheckHeader-wrapper .scannerCheckHeader-SettingName {\n  width: 15%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings .scannerCheckHeader-wrapper .scannerCheckHeader-SettingValue {\n  width: 15%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings .scannerCheckHeader-wrapper .scannerCheckHeader-UserId {\n  width: 8%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings .scannerCheckHeader-wrapper .scannerCheckHeader-LastWriteTime {\n  width: 18%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings .scannerCheckItem {\n  display: table;\n  width: 100%;\n  padding: 15px 0;\n  color: #4B4E4F;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings .scannerCheckItem:not(:last-child) {\n  border-bottom: 1px solid #C8C8C8;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings .scannerCheckItem .label-type {\n  padding: 0 0 0 20px;\n  width: 18%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings .scannerCheckItem .label-module {\n  width: 11%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings .scannerCheckItem .label-id {\n  width: 10%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings .scannerCheckItem .label-name {\n  width: 15%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings .scannerCheckItem .label-value {\n  width: 15%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings .scannerCheckItem .label-user {\n  width: 8%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings .scannerCheckItem .label-date {\n  width: 18%;\n  float: left;\n}\n._1cNC-Cro3OloCzqAHm2ANo .scannerCheckItems-moduleSettings .scannerCheckItem .label-wrapper {\n  padding: 0 5px 0 5px;\n  overflow-wrap: break-word;\n  word-break: break-all;\n  width: 100%;\n  max-width: 150px;\n}\n", ""]), t.locals = {
        scannerCheckResults: "_1cNC-Cro3OloCzqAHm2ANo"
    }
}, function (e, t, n) {
    var i = n(53);
    "string" == typeof i && (i = [
        [e.i, i, ""]
    ]);
    var r = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    n(6)(i, r);
    i.locals && (e.exports = i.locals)
}, function (e, t, n) {
    (e.exports = n(5)(!1)).push([e.i, "/* START EVOQ COLOR PALETTE */\n/* END EVOQ COLOR PALETTE */\n/* START ATTENTION COLORS */\n/* END ATTENTION COLORS */\n/* SVG HOVER STATES */\nsvg {\n  fill: #C8C8C8;\n}\nsvg:hover {\n  fill: #6F7273;\n}\nsvg:active {\n  fill: #1E88C3;\n}\n/* END SVG HOVER STATES */\n#security-container .dnn-persona-bar-page {\n  border-bottom: 0;\n}\n#security-container .dnn-persona-bar-page .primary > .react-tabs__tab-list > .react-tabs__tab {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n#security-container .dnn-persona-bar-page .row-opened {\n  margin-top: -1px;\n  margin-bottom: -1px;\n  border-top: 2px solid #1E88C3;\n  border-bottom: 2px solid #1E88C3 !important;\n}\n", ""])
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(0),
        r = n.n(i),
        a = (n(7), n(4)),
        o = n(1),
        s = n(2),
        l = {
            loadTab: function (e) {
                return function (t) {
                    t({
                        type: s.a.LOAD_TAB_DATA,
                        payload: {
                            index: e
                        }
                    })
                }
            }
        },
        c = n(3);

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function u(e) {
        var t = [];
        for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t.join("&")
    }
    var d = new (function () {
        function e() {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var t, n, i;
        return t = e, (n = [{
            key: "getServiceFramework",
            value: function (e) {
                var t = c.a.utilities.sf;
                return t.moduleRoot = "PersonaBar", t.controller = e, t
            }
        }, {
            key: "getIpFilters",
            value: function (e) {
                this.getServiceFramework("Security").get("GetIpFilters", {}, e)
            }
        }, {
            key: "getIpFilter",
            value: function (e, t) {
                var n = this.getServiceFramework("Security");
                e = Object.assign({}, e, {}), n.get("GetIpFilter?" + u(e), {}, t)
            }
        }, {
            key: "deleteIpFilter",
            value: function (e, t, n) {
                this.getServiceFramework("Security").post("DeleteIpFilter?filterId=" + e, {}, t, n)
            }
        }, {
            key: "getBasicLoginSettings",
            value: function (e, t) {
                this.getServiceFramework("Security").get("GetBasicLoginSettings?cultureCode=" + e, {}, t)
            }
        }, {
            key: "updateBasicLoginSettings",
            value: function (e, t) {
                this.getServiceFramework("Security").post("UpdateBasicLoginSettings", e, t)
            }
        }, {
            key: "updateIpFilter",
            value: function (e, t) {
                this.getServiceFramework("Security").post("UpdateIpFilter", e, t)
            }
        }, {
            key: "getMemberSettings",
            value: function (e) {
                this.getServiceFramework("Security").get("GetMemberSettings", {}, e)
            }
        }, {
            key: "updateMemberSettings",
            value: function (e, t) {
                this.getServiceFramework("Security").post("UpdateMemberSettings", e, t)
            }
        }, {
            key: "getRegistrationSettings",
            value: function (e) {
                this.getServiceFramework("Security").get("GetRegistrationSettings", {}, e)
            }
        }, {
            key: "updateRegistrationSettings",
            value: function (e, t, n) {
                this.getServiceFramework("Security").post("UpdateRegistrationSettings", e, t, n)
            }
        }, {
            key: "getSslSettings",
            value: function (e) {
                this.getServiceFramework("Security").get("GetSslSettings", {}, e)
            }
        }, {
            key: "updateSslSettings",
            value: function (e, t) {
                this.getServiceFramework("Security").post("UpdateSslSettings", e, t)
            }
        }, {
            key: "getOtherSettings",
            value: function (e) {
                this.getServiceFramework("Security").get("GetOtherSettings", {}, e)
            }
        }, {
            key: "updateOtherSettings",
            value: function (e, t) {
                this.getServiceFramework("Security").post("UpdateOtherSettings", e, t)
            }
        }, {
            key: "getSecurityBulletins",
            value: function (e, t) {
                this.getServiceFramework("Security").get("GetSecurityBulletins", {}, e, t)
            }
        }, {
            key: "getSuperuserActivities",
            value: function (e) {
                this.getServiceFramework("Security").get("GetSuperuserActivities", {}, e)
            }
        }, {
            key: "getAuditCheckResults",
            value: function (e) {
                this.getServiceFramework("Security").get("GetAuditCheckResults", {}, e)
            }
        }, {
            key: "getAuditCheckResult",
            value: function (e, t) {
                this.getServiceFramework("Security").get("GetAuditCheckResult", {
                    id: e
                }, t)
            }
        }, {
            key: "searchFileSystemAndDatabase",
            value: function (e, t) {
                var n = this.getServiceFramework("Security");
                e = Object.assign({}, e, {}), this.searchRequest && 4 !== this.searchRequest.readyState && (window.dnn && (window.dnn.loading = !1), this.searchRequest.abort()), this.searchRequest = n.get("SearchFileSystemAndDatabase?" + u(e), {}, t)
            }
        }, {
            key: "getLastModifiedSettings",
            value: function (e) {
                this.getServiceFramework("Security").get("GetLastModifiedSettings", {}, e)
            }
        }, {
            key: "getLastModifiedFiles",
            value: function (e) {
                this.getServiceFramework("Security").get("GetLastModifiedFiles", {}, e)
            }
        }]) && p(t.prototype, n), i && p(t, i), e
    }()),
        m = {
            getIpFilters: function (e) {
                return function (t) {
                    d.getIpFilters(function (n) {
                        t({
                            type: s.b.RETRIEVED_SECURITY_IP_FILTERS,
                            data: {
                                ipFilters: n.Results.Filters,
                                enableIPChecking: n.Results.EnableIPChecking
                            }
                        }), e && e(n)
                    })
                }
            },
            getIpFilter: function (e, t) {
                return function (n) {
                    d.getIpFilter(e, function (e) {
                        n({
                            type: s.b.RETRIEVED_SECURITY_IP_FILTER,
                            data: {
                                ipFilter: e.Results
                            }
                        }), t && t(e)
                    })
                }
            },
            deleteIpFilter: function (e, t, n) {
                return function (i) {
                    d.deleteIpFilter(e, function (e) {
                        i({
                            type: s.b.DELETED_SECURITY_IP_FILTER,
                            data: {
                                ipFilters: t
                            }
                        }), n && n(e)
                    }, function (e) {
                        var t = JSON.parse(e.responseText);
                        c.a.utilities.notifyError(t.Message)
                    })
                }
            },
            getBasicLoginSettings: function (e, t) {
                return function (n) {
                    d.getBasicLoginSettings(e, function (e) {
                        n({
                            type: s.b.RETRIEVED_SECURITY_BASIC_LOGIN_SETTINS,
                            data: {
                                basicLoginSettings: e.Results.Settings,
                                adminUsers: e.Results.Administrators,
                                authProviders: e.Results.AuthProviders,
                                basicLoginSettingsClientModified: !1
                            }
                        }), t && t(e)
                    })
                }
            },
            updateBasicLoginSettings: function (e, t) {
                return function (n) {
                    d.updateBasicLoginSettings(e, function (e) {
                        n({
                            type: s.b.UPDATED_SECURITY_BASIC_LOGIN_SETTINS,
                            data: {
                                basicLoginSettingsClientModified: !1
                            }
                        }), t && t(e)
                    })
                }
            },
            basicLoginSettingsClientModified: function (e) {
                return function (t) {
                    t({
                        type: s.b.SECURITY_BASIC_LOGIN_SETTINS_CLIENT_MODIFIED,
                        data: {
                            basicLoginSettings: e,
                            basicLoginSettingsClientModified: !0
                        }
                    })
                }
            },
            memberSettingsClientModified: function (e) {
                return function (t) {
                    t({
                        type: s.b.SECURITY_MEMBER_SETTINS_CLIENT_MODIFIED,
                        data: {
                            memberSettings: e,
                            memberSettingsClientModified: !0
                        }
                    })
                }
            },
            registrationSettingsClientModified: function (e) {
                return function (t) {
                    t({
                        type: s.b.SECURITY_REGISTRATION_SETTINS_CLIENT_MODIFIED,
                        data: {
                            registrationSettings: e,
                            registrationSettingsClientModified: !0
                        }
                    })
                }
            },
            sslSettingsClientModified: function (e) {
                return function (t) {
                    t({
                        type: s.b.SECURITY_SSL_SETTINS_CLIENT_MODIFIED,
                        data: {
                            sslSettings: e,
                            sslSettingsClientModified: !0
                        }
                    })
                }
            },
            otherSettingsClientModified: function (e) {
                return function (t) {
                    t({
                        type: s.b.SECURITY_OTHER_SETTINS_CLIENT_MODIFIED,
                        data: {
                            otherSettings: e,
                            otherSettingsClientModified: !0
                        }
                    })
                }
            },
            updateIpFilter: function (e, t) {
                return function (n) {
                    d.updateIpFilter(e, function (e) {
                        n({
                            type: s.b.UPDATED_SECURITY_IP_FILTER,
                            data: {}
                        }), t && t(e)
                    })
                }
            },
            getMemberSettings: function (e) {
                return function (t) {
                    d.getMemberSettings(function (n) {
                        t({
                            type: s.b.RETRIEVED_SECURITY_MEMBER_SETTINS,
                            data: {
                                memberSettings: n.Results.Settings,
                                memberSettingsClientModified: !1
                            }
                        }), e && e(n)
                    })
                }
            },
            updateMemberSettings: function (e, t) {
                return function (n) {
                    d.updateMemberSettings(e, function (e) {
                        n({
                            type: s.b.UPDATED_SECURITY_MEMBER_SETTINS,
                            data: {
                                memberSettingsClientModified: !1
                            }
                        }), t && t(e)
                    })
                }
            },
            getRegistrationSettings: function (e) {
                return function (t) {
                    d.getRegistrationSettings(function (n) {
                        t({
                            type: s.b.RETRIEVED_SECURITY_REGISTRATION_SETTINS,
                            data: {
                                registrationSettings: n.Results.Settings,
                                userRegistrationOptions: n.Results.UserRegistrationOptions,
                                registrationFormTypeOptions: n.Results.RegistrationFormTypeOptions,
                                registrationSettingsClientModified: !1
                            }
                        }), e && e(n)
                    })
                }
            },
            updateRegistrationSettings: function (e, t, n) {
                return function (i) {
                    d.updateRegistrationSettings(e, function (e) {
                        i({
                            type: s.b.UPDATED_SECURITY_REGISTRATION_SETTINS,
                            data: {
                                registrationSettingsClientModified: !1
                            }
                        }), t && t(e)
                    }, function (e) {
                        n && n(e)
                    })
                }
            },
            getSslSettings: function (e) {
                return function (t) {
                    d.getSslSettings(function (n) {
                        t({
                            type: s.b.RETRIEVED_SECURITY_SSL_SETTINS,
                            data: {
                                sslSettings: n.Results.Settings,
                                sslSettingsClientModified: !1
                            }
                        }), e && e(n)
                    })
                }
            },
            updateSslSettings: function (e, t, n) {
                return function (i) {
                    d.updateSslSettings(e, function (e) {
                        i({
                            type: s.b.UPDATED_SECURITY_SSL_SETTINS,
                            data: {
                                sslSettingsClientModified: !1
                            }
                        }), t && t(e)
                    }, function (e) {
                        n && n(e)
                    })
                }
            },
            getOtherSettings: function (e) {
                return function (t) {
                    d.getOtherSettings(function (n) {
                        t({
                            type: s.b.RETRIEVED_SECURITY_OTHER_SETTINS,
                            data: {
                                otherSettings: n.Results.Settings,
                                otherSettingsClientModified: !1
                            }
                        }), e && e(n)
                    })
                }
            },
            updateOtherSettings: function (e, t) {
                return function (n) {
                    d.updateOtherSettings(e, function (e) {
                        n({
                            type: s.b.UPDATED_SECURITY_OTHER_SETTINS,
                            data: {
                                otherSettingsClientModified: !1
                            }
                        }), t && t(e)
                    })
                }
            },
            getSecurityBulletins: function (e, t) {
                return function (n) {
                    d.getSecurityBulletins(function (t) {
                        n({
                            type: s.b.RETRIEVED_SECURITY_BULLETINS,
                            data: {
                                platformVersion: t.Results.PlatformVersion,
                                securityBulletins: t.Results.SecurityBulletins
                            }
                        }), e && e(t)
                    }, function (e) {
                        t && t(e)
                    })
                }
            },
            getSuperuserActivities: function (e) {
                return function (t) {
                    d.getSuperuserActivities(function (n) {
                        t({
                            type: s.b.RETRIEVED_SECURITY_SUPERUSER_ACTIVITIES,
                            data: {
                                activities: n.Results.Activities
                            }
                        }), e && e(n)
                    })
                }
            },
            getAuditCheckResults: function (e) {
                return function (t) {
                    d.getAuditCheckResults(function (n) {
                        t({
                            type: s.b.RETRIEVED_SECURITY_AUDITCHECK_RESULTS,
                            data: {
                                auditCheckResults: n.Results
                            }
                        }), e && e(n)
                    })
                }
            },
            getAuditCheckResult: function (e, t) {
                return function (n) {
                    d.getAuditCheckResult(e, function (e) {
                        n({
                            type: s.b.RETRIEVED_SECURITY_AUDITCHECK_RESULT,
                            data: {
                                auditCheckResult: e.Result
                            }
                        }), t && t(e)
                    })
                }
            },
            searchFileSystemAndDatabase: function (e, t) {
                return function (n) {
                    d.searchFileSystemAndDatabase(e, function (i) {
                        n({
                            type: s.b.RETRIEVED_SECURITY_SEARCH_FILE_SYSTEM_DATABASE,
                            data: {
                                searchResults: i.Results,
                                scannerCheckKeyword: e.term,
                                scannerCheckActiveTab: "search"
                            }
                        }), t && t(i)
                    })
                }
            },
            clearFileSystemAndDatabaseSearch: function () {
                return function (e) {
                    e({
                        type: s.b.RETRIEVED_SECURITY_SEARCH_FILE_SYSTEM_DATABASE,
                        data: {
                            searchResults: void 0,
                            scannerCheckKeyword: "",
                            scannerCheckActiveTab: "search"
                        }
                    })
                }
            },
            getLastModifiedSettings: function (e) {
                return function (t) {
                    d.getLastModifiedSettings(function (n) {
                        t({
                            type: s.b.RETRIEVED_SECURITY_LAST_MODIFIED_SETTINGS,
                            data: {
                                modifiedSettings: n.Results,
                                scannerCheckActiveTab: "settings"
                            }
                        }), e && e(n)
                    })
                }
            },
            getLastModifiedFiles: function (e) {
                return function (t) {
                    d.getLastModifiedFiles(function (n) {
                        t({
                            type: s.b.RETRIEVED_SECURITY_LAST_MODIFIED_FILES,
                            data: {
                                modifiedFiles: n.Results,
                                scannerCheckActiveTab: "files"
                            }
                        }), e && e(n)
                    })
                }
            },
            updatefileSystemAndDatabaseSearchKeyword: function (e) {
                return function (t) {
                    t({
                        type: s.b.UPDATED_SECURITY_SEARCH_FILE_SYSTEM_DATABASE_KEYWORD,
                        data: {
                            scannerCheckKeyword: e,
                            scannerCheckActiveTab: "search"
                        }
                    })
                }
            },
            updatefileSystemAndDatabaseActiveTab: function (e) {
                return function (t) {
                    t({
                        type: s.b.UPDATED_SECURITY_SEARCH_FILE_SYSTEM_DATABASE_ACTIVE_TAB,
                        data: {
                            scannerCheckActiveTab: e
                        }
                    })
                }
            }
        },
        g = n(10),
        f = n.n(g),
        h = {
            get: function (e) {
                var t = c.a.moduleName;
                return c.a.utilities.getResx(t, e)
            }
        };

    function b(e) {
        return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function S(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function E(e, t) {
        return !t || "object" !== b(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function C(e) {
        return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function y(e, t) {
        return (y = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var v = !1,
        T = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = E(this, C(t).call(this))).state = {
                    basicLoginSettings: void 0
                }, v = c.a.settings.isHost || c.a.settings.isAdmin || c.a.settings.permissions.BASIC_LOGIN_SETTINGS_EDIT, e
            }
            var n, a, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && y(e, t)
            }(t, i["Component"]), n = t, (a = [{
                key: "UNSAFE_componentWillMount",
                value: function () {
                    var e = this,
                        t = this.props;
                    t.basicLoginSettings ? this.setState({
                        basicLoginSettings: t.basicLoginSettings
                    }) : t.dispatch(m.getBasicLoginSettings(t.cultureCode, function (t) {
                        var n = Object.assign({}, t.Results.Settings);
                        e.setState({
                            basicLoginSettings: n
                        })
                    }))
                }
            }, {
                key: "getAuthProviderOptions",
                value: function () {
                    var e = [];
                    return void 0 !== this.props.authProviders && (e = this.props.authProviders.map(function (e) {
                        return {
                            label: e.Name,
                            value: e.Value
                        }
                    })), e
                }
            }, {
                key: "getAdminUserOptions",
                value: function () {
                    var e = [];
                    return void 0 !== this.props.adminUsers && (e = this.props.adminUsers.map(function (e) {
                        return {
                            label: e.FullName,
                            value: e.UserID
                        }
                    })), e
                }
            }, {
                key: "onSettingChange",
                value: function (e, t) {
                    var n = this.props,
                        i = this.state,
                        r = Object.assign({}, i.basicLoginSettings);
                    if ("RedirectAfterLoginTabId" === e || "RedirectAfterLogoutTabId" === e) {
                        if (r[e] === parseInt(t)) return;
                        r[e] = t
                    } else r[e] = "DefaultAuthProvider" === e || "PrimaryAdministratorId" === e ? t.value : "object" === b(t) ? t.target.value : t;
                    this.setState({
                        basicLoginSettings: r
                    }), n.dispatch(m.basicLoginSettingsClientModified(r))
                }
            }, {
                key: "onUpdate",
                value: function (e) {
                    e.preventDefault();
                    var t = this.props,
                        n = this.state;
                    t.dispatch(m.updateBasicLoginSettings(n.basicLoginSettings, function () {
                        c.a.utilities.notify(h.get("BasicLoginSettingsUpdateSuccess"))
                    }, function () {
                        c.a.utilities.notifyError(h.get("BasicLoginSettingsError"))
                    }))
                }
            }, {
                key: "onCancel",
                value: function () {
                    var e = this,
                        t = this.props;
                    c.a.utilities.confirm(h.get("LoginSettingsRestoreWarning"), h.get("Yes"), h.get("No"), function () {
                        t.dispatch(m.getBasicLoginSettings(t.cultureCode, function (t) {
                            var n = Object.assign({}, t.Results.Settings);
                            e.setState({
                                basicLoginSettings: n
                            })
                        }))
                    })
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.state,
                        t = "<" + h.get("NoneSpecified") + ">";
                    return e.basicLoginSettings ? r.a.createElement("div", {
                        className: f.a.loginSettings
                    }, r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("DefaultAuthProvider.Help"),
                        label: h.get("DefaultAuthProvider")
                    }), r.a.createElement(o.Dropdown, {
                        options: this.getAuthProviderOptions(),
                        value: e.basicLoginSettings.DefaultAuthProvider,
                        onSelect: this.onSettingChange.bind(this, "DefaultAuthProvider"),
                        enabled: v
                    })), r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("plAdministrator.Help"),
                        label: h.get("plAdministrator")
                    }), r.a.createElement(o.Dropdown, {
                        options: this.getAdminUserOptions(),
                        value: e.basicLoginSettings.PrimaryAdministratorId,
                        onSelect: this.onSettingChange.bind(this, "PrimaryAdministratorId"),
                        enabled: v
                    })), r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("Redirect_AfterLogin.Help"),
                        label: h.get("Redirect_AfterLogin")
                    }), r.a.createElement(o.PagePicker, {
                        serviceFramework: c.a.utilities.sf,
                        style: {
                            width: "100%",
                            zIndex: 2
                        },
                        selectedTabId: e.basicLoginSettings.RedirectAfterLoginTabId,
                        OnSelect: this.onSettingChange.bind(this, "RedirectAfterLoginTabId"),
                        defaultLabel: "" !== e.basicLoginSettings.RedirectAfterLoginTabName ? e.basicLoginSettings.RedirectAfterLoginTabName : t,
                        noneSpecifiedText: t,
                        CountText: "{0} Results",
                        PortalTabsParameters: {
                            portalId: -2,
                            cultureCode: "",
                            isMultiLanguage: !1,
                            excludeAdminTabs: !1,
                            disabledNotSelectable: !1,
                            roles: "1;-1",
                            sortOrder: 0
                        },
                        enabled: v
                    })), r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("Redirect_AfterLogout.Help"),
                        label: h.get("Redirect_AfterLogout")
                    }), r.a.createElement(o.PagePicker, {
                        serviceFramework: c.a.utilities.sf,
                        style: {
                            width: "100%",
                            zIndex: 1
                        },
                        selectedTabId: e.basicLoginSettings.RedirectAfterLogoutTabId,
                        OnSelect: this.onSettingChange.bind(this, "RedirectAfterLogoutTabId"),
                        defaultLabel: "" !== e.basicLoginSettings.RedirectAfterLogoutTabName ? e.basicLoginSettings.RedirectAfterLogoutTabName : t,
                        noneSpecifiedText: t,
                        CountText: "{0} Results",
                        PortalTabsParameters: {
                            portalId: -2,
                            cultureCode: "",
                            isMultiLanguage: !1,
                            excludeAdminTabs: !1,
                            disabledNotSelectable: !1,
                            roles: "-1",
                            sortOrder: 0
                        },
                        enabled: v
                    })), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "loginSettings-row_switch",
                        style: {
                            margin: "0"
                        }
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("Security_RequireValidProfileAtLogin.Help"),
                        label: h.get("Security_RequireValidProfileAtLogin")
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: e.basicLoginSettings.RequireValidProfileAtLogin,
                        onChange: this.onSettingChange.bind(this, "RequireValidProfileAtLogin"),
                        readOnly: !v
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "loginSettings-row_switch"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("Security_CaptchaLogin.Help"),
                        label: h.get("Security_CaptchaLogin")
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: e.basicLoginSettings.CaptchaLogin,
                        onChange: this.onSettingChange.bind(this, "CaptchaLogin"),
                        readOnly: !v
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "loginSettings-row_switch"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("Security_CaptchaRetrivePassword.Help"),
                        label: h.get("Security_CaptchaRetrivePassword")
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: e.basicLoginSettings.CaptchaRetrivePassword,
                        onChange: this.onSettingChange.bind(this, "CaptchaRetrivePassword"),
                        readOnly: !v
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "loginSettings-row_switch"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("Security_CaptchaChangePassword.Help"),
                        label: h.get("Security_CaptchaChangePassword")
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: e.basicLoginSettings.CaptchaChangePassword,
                        onChange: this.onSettingChange.bind(this, "CaptchaChangePassword"),
                        readOnly: !v
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "loginSettings-row_switch"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("plHideLoginControl.Help"),
                        label: h.get("plHideLoginControl")
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: e.basicLoginSettings.HideLoginControl,
                        onChange: this.onSettingChange.bind(this, "HideLoginControl"),
                        readOnly: !v
                    }))), v && r.a.createElement("div", {
                        className: "buttons-box"
                    }, r.a.createElement(o.Button, {
                        disabled: !this.props.basicLoginSettingsClientModified,
                        type: "secondary",
                        onClick: this.onCancel.bind(this)
                    }, h.get("Cancel")), r.a.createElement(o.Button, {
                        disabled: !this.props.basicLoginSettingsClientModified,
                        type: "primary",
                        onClick: this.onUpdate.bind(this)
                    }, h.get("Save")))) : r.a.createElement("div", null)
                }
            }]) && S(n.prototype, a), s && S(n, s), t
        }();
    var w = Object(a.connect)(function (e) {
        return {
            tabIndex: e.pagination.tabIndex,
            authProviders: e.security.authProviders,
            adminUsers: e.security.adminUsers,
            basicLoginSettings: e.security.basicLoginSettings,
            basicLoginSettingsClientModified: e.security.basicLoginSettingsClientModified
        }
    })(T),
        I = n(11),
        _ = n.n(I);

    function N(e) {
        return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function x(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function k(e, t) {
        return !t || "object" !== N(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function R(e) {
        return (R = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var A = function (e) {
        function t() {
            var e;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), (e = k(this, R(t).call(this))).state = {
                sslSettings: void 0
            }, e
        }
        var n, a, s;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && O(e, t)
        }(t, i["Component"]), n = t, (a = [{
            key: "UNSAFE_componentWillMount",
            value: function () {
                var e = this.props;
                e.sslSettings ? this.setState({
                    sslSettings: e.sslSettings
                }) : this.getSslSettings()
            }
        }, {
            key: "onSettingChange",
            value: function (e, t) {
                var n = this.state,
                    i = this.props,
                    r = Object.assign({}, n.sslSettings);
                r[e] = "object" === N(t) ? t.target.value : t, this.setState({
                    sslSettings: r
                }), i.dispatch(m.sslSettingsClientModified(r))
            }
        }, {
            key: "onUpdate",
            value: function (e) {
                var t = this;
                e.preventDefault();
                var n = this.props,
                    i = this.state;
                n.dispatch(m.updateSslSettings(i.sslSettings, function () {
                    c.a.utilities.notify(h.get("SslSettingsUpdateSuccess")), t.getSslSettings()
                }, function () {
                    c.a.utilities.notifyError(h.get("SslSettingsError"))
                }))
            }
        }, {
            key: "onCancel",
            value: function () {
                var e = this;
                c.a.utilities.confirm(h.get("SslSettingsRestoreWarning"), h.get("Yes"), h.get("No"), function () {
                    e.getSslSettings()
                })
            }
        }, {
            key: "getSslSettings",
            value: function () {
                var e = this;
                this.props.dispatch(m.getSslSettings(function (t) {
                    var n = Object.assign({}, t.Results.Settings);
                    e.setState({
                        sslSettings: n
                    })
                }))
            }
        }, {
            key: "render",
            value: function () {
                var e = this.state;
                return e.sslSettings ? r.a.createElement("div", {
                    className: _.a.sslSettings
                }, r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                    className: "sslSettings-row_switch"
                }, r.a.createElement(o.Label, {
                    labelType: "inline",
                    tooltipMessage: h.get("plSSLEnabled.Help"),
                    label: h.get("plSSLEnabled")
                }), r.a.createElement(o.Switch, {
                    onText: h.get("SwitchOn"),
                    offText: h.get("SwitchOff"),
                    value: e.sslSettings.SSLEnabled,
                    onChange: this.onSettingChange.bind(this, "SSLEnabled")
                }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                    className: "sslSettings-row_switch"
                }, r.a.createElement(o.Label, {
                    labelType: "inline",
                    tooltipMessage: h.get("plSSLEnforced.Help"),
                    label: h.get("plSSLEnforced")
                }), r.a.createElement(o.Switch, {
                    onText: h.get("SwitchOn"),
                    offText: h.get("SwitchOff"),
                    value: e.sslSettings.SSLEnforced,
                    onChange: this.onSettingChange.bind(this, "SSLEnforced")
                }))), r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                    tooltipMessage: h.get("plSSLURL.Help"),
                    label: h.get("plSSLURL")
                }), r.a.createElement(o.SingleLineInputWithError, {
                    withLabel: !1,
                    error: !1,
                    value: e.sslSettings.SSLURL,
                    onChange: this.onSettingChange.bind(this, "SSLURL")
                })), r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                    tooltipMessage: h.get("plSTDURL.Help"),
                    label: h.get("plSTDURL")
                }), r.a.createElement(o.SingleLineInputWithError, {
                    withLabel: !1,
                    error: !1,
                    value: e.sslSettings.STDURL,
                    onChange: this.onSettingChange.bind(this, "STDURL")
                })), null != e.sslSettings.SSLOffloadHeader && r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                    tooltipMessage: h.get("plSSLOffload.Help"),
                    label: h.get("plSSLOffload"),
                    extra: r.a.createElement(o.Tooltip, {
                        messages: [h.get("GlobalSetting")],
                        type: "global",
                        style: {
                            float: "left",
                            position: "static"
                        }
                    })
                }), r.a.createElement(o.SingleLineInputWithError, {
                    withLabel: !1,
                    error: !1,
                    value: e.sslSettings.SSLOffloadHeader,
                    onChange: this.onSettingChange.bind(this, "SSLOffloadHeader")
                })), r.a.createElement("div", {
                    className: "buttons-box"
                }, r.a.createElement(o.Button, {
                    disabled: !this.props.sslSettingsClientModified,
                    type: "secondary",
                    onClick: this.onCancel.bind(this)
                }, h.get("Cancel")), r.a.createElement(o.Button, {
                    disabled: !this.props.sslSettingsClientModified,
                    type: "primary",
                    onClick: this.onUpdate.bind(this)
                }, h.get("Save")))) : r.a.createElement("div", null)
            }
        }]) && x(n.prototype, a), s && x(n, s), t
    }();
    var L = Object(a.connect)(function (e) {
        return {
            tabIndex: e.pagination.tabIndex,
            sslSettings: e.security.sslSettings,
            sslSettingsClientModified: e.security.sslSettingsClientModified
        }
    })(A),
        P = n(12),
        M = n.n(P);

    function D(e) {
        return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function H(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function U(e, t) {
        return !t || "object" !== D(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function F(e) {
        return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function V(e, t) {
        return (V = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var G = /^[1-9][0-9]?[0-9]?$|^0$/,
        j = /^([9]\d|\d{3,4})$/,
        B = /^([1][2-9]|[2-9][0-9]|\d{3,})$/,
        z = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = U(this, F(t).call(this))).state = {
                    otherSettings: void 0,
                    error: {
                        autoAccountUnlockDuration: !1,
                        asyncTimeout: !1,
                        maxUploadSize: !1
                    },
                    triedToSubmit: !1
                }, e
            }
            var n, a, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && V(e, t)
            }(t, i["Component"]), n = t, (a = [{
                key: "UNSAFE_componentWillMount",
                value: function () {
                    var e = this,
                        t = this.props;
                    t.otherSettings ? this.setState({
                        otherSettings: t.otherSettings
                    }) : t.dispatch(m.getOtherSettings(function (t) {
                        var n = Object.assign({}, t.Results.Settings);
                        e.setState({
                            otherSettings: n
                        })
                    }))
                }
            }, {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                    var t = this.state,
                        n = e.otherSettings.AutoAccountUnlockDuration;
                    "" !== n && G.test(n) ? "" !== n && G.test(n) && (t.error.autoAccountUnlockDuration = !1) : t.error.autoAccountUnlockDuration = !0;
                    var i = e.otherSettings.AsyncTimeout;
                    "" !== i && j.test(i) ? "" !== i && j.test(i) && (t.error.asyncTimeout = !1) : t.error.asyncTimeout = !0;
                    var r = e.otherSettings.MaxUploadSize;
                    this.isMaxUploadSizeValid(r) ? this.isMaxUploadSizeValid(r) && (t.error.maxUploadSize = !1) : t.error.maxUploadSize = !0, this.setState({
                        otherSettings: Object.assign({}, e.otherSettings),
                        triedToSubmit: !1,
                        error: t.error
                    })
                }
            }, {
                key: "isMaxUploadSizeValid",
                value: function (e) {
                    var t = this.props;
                    if (void 0 === t.otherSettings) return !0;
                    var n = parseInt(t.otherSettings.RangeUploadSize);
                    if ("" === e) return !1;
                    var i = parseInt(e);
                    return !(!B.test(i) || i > n)
                }
            }, {
                key: "onSettingChange",
                value: function (e, t) {
                    var n = this.state,
                        i = this.props,
                        r = Object.assign({}, n.otherSettings);
                    r[e] = "object" === D(t) ? t.target.value : t, G.test(r[e]) || "AutoAccountUnlockDuration" !== e ? G.test(r[e]) && "AutoAccountUnlockDuration" === e && (n.error.autoAccountUnlockDuration = !1) : n.error.autoAccountUnlockDuration = !0, j.test(r[e]) || "AsyncTimeout" !== e ? j.test(r[e]) && "AsyncTimeout" === e && (n.error.asyncTimeout = !1) : n.error.asyncTimeout = !0, "MaxUploadSize" !== e || this.isMaxUploadSizeValid(r[e]) ? "MaxUploadSize" === e && this.isMaxUploadSizeValid(r[e]) && (n.error.maxUploadSize = !1) : n.error.maxUploadSize = !0, this.setState({
                        otherSettings: r,
                        error: n.error,
                        triedToSubmit: !1
                    }), i.dispatch(m.otherSettingsClientModified(r))
                }
            }, {
                key: "onUpdate",
                value: function (e) {
                    e.preventDefault();
                    var t = this.props,
                        n = this.state;
                    if (this.setState({
                        triedToSubmit: !0
                    }), !(n.error.autoAccountUnlockDuration || n.error.asyncTimeout || n.error.maxUploadSize)) {
                        var i = Object.assign({}, n.otherSettings);
                        t.dispatch(m.updateOtherSettings(i, function () {
                            c.a.utilities.notify(h.get("OtherSettingsUpdateSuccess"))
                        }, function () {
                            c.a.utilities.notifyError(h.get("OtherSettingsError"))
                        }))
                    }
                }
            }, {
                key: "onCancel",
                value: function () {
                    var e = this,
                        t = this.props;
                    c.a.utilities.confirm(h.get("OtherSettingsRestoreWarning"), h.get("Yes"), h.get("No"), function () {
                        t.dispatch(m.getOtherSettings(function (t) {
                            var n = Object.assign({}, t.Results.Settings);
                            e.setState({
                                otherSettings: n
                            })
                        }))
                    })
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.state;
                    return e.otherSettings ? r.a.createElement("div", {
                        className: M.a.otherSettings
                    }, r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "otherSettings-row_switch"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("plDisplayCopyright.Help"),
                        label: h.get("plDisplayCopyright"),
                        extra: r.a.createElement(o.Tooltip, {
                            messages: [h.get("GlobalSetting")],
                            type: "global",
                            style: {
                                float: "left",
                                position: "static"
                            }
                        })
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: e.otherSettings.DisplayCopyright,
                        onChange: this.onSettingChange.bind(this, "DisplayCopyright")
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "otherSettings-row_switch"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("plShowCriticalErrors.Help"),
                        label: h.get("plShowCriticalErrors"),
                        extra: r.a.createElement(o.Tooltip, {
                            messages: [h.get("GlobalSetting")],
                            type: "global",
                            style: {
                                float: "left",
                                position: "static"
                            }
                        })
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: e.otherSettings.ShowCriticalErrors,
                        onChange: this.onSettingChange.bind(this, "ShowCriticalErrors")
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "otherSettings-row_switch"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("plDebugMode.Help"),
                        label: h.get("plDebugMode"),
                        extra: r.a.createElement(o.Tooltip, {
                            messages: [h.get("GlobalSetting")],
                            type: "global",
                            style: {
                                float: "left",
                                position: "static"
                            }
                        })
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: e.otherSettings.DebugMode,
                        onChange: this.onSettingChange.bind(this, "DebugMode")
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "otherSettings-row_switch"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("plRememberMe.Help"),
                        label: h.get("plRememberMe"),
                        extra: r.a.createElement(o.Tooltip, {
                            messages: [h.get("GlobalSetting")],
                            type: "global",
                            style: {
                                float: "left",
                                position: "static"
                            }
                        })
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: e.otherSettings.RememberCheckbox,
                        onChange: this.onSettingChange.bind(this, "RememberCheckbox")
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("plAutoAccountUnlock.Help"),
                        label: h.get("plAutoAccountUnlock"),
                        extra: r.a.createElement(o.Tooltip, {
                            messages: [h.get("GlobalSetting")],
                            type: "global",
                            style: {
                                float: "left",
                                position: "static"
                            }
                        })
                    }), r.a.createElement(o.SingleLineInputWithError, {
                        withLabel: !1,
                        error: this.state.error.autoAccountUnlockDuration && this.state.triedToSubmit,
                        errorMessage: h.get("AutoAccountUnlockDuration.ErrorMessage"),
                        value: e.otherSettings.AutoAccountUnlockDuration,
                        onChange: this.onSettingChange.bind(this, "AutoAccountUnlockDuration")
                    })), r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("plAsyncTimeout.Help"),
                        label: h.get("plAsyncTimeout"),
                        extra: r.a.createElement(o.Tooltip, {
                            messages: [h.get("GlobalSetting")],
                            type: "global",
                            style: {
                                float: "left",
                                position: "static"
                            }
                        })
                    }), r.a.createElement(o.SingleLineInputWithError, {
                        withLabel: !1,
                        error: this.state.error.asyncTimeout && this.state.triedToSubmit,
                        errorMessage: h.get("AsyncTimeout.ErrorMessage"),
                        value: e.otherSettings.AsyncTimeout,
                        onChange: this.onSettingChange.bind(this, "AsyncTimeout")
                    })), r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("plMaxUploadSize.Help"),
                        label: h.get("plMaxUploadSize"),
                        extra: r.a.createElement(o.Tooltip, {
                            messages: [h.get("GlobalSetting")],
                            type: "global",
                            style: {
                                float: "left",
                                position: "static"
                            }
                        })
                    }), r.a.createElement(o.SingleLineInputWithError, {
                        withLabel: !1,
                        error: this.state.error.maxUploadSize && this.state.triedToSubmit,
                        errorMessage: h.get("maxUploadSize.Error").replace("{0}", e.otherSettings.RangeUploadSize),
                        value: e.otherSettings.MaxUploadSize,
                        onChange: this.onSettingChange.bind(this, "MaxUploadSize")
                    })), r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("plFileExtensions.Help"),
                        label: h.get("plFileExtensions"),
                        extra: r.a.createElement(o.Tooltip, {
                            messages: [h.get("GlobalSetting")],
                            type: "global",
                            style: {
                                float: "left",
                                position: "static"
                            }
                        })
                    }), r.a.createElement(o.MultiLineInputWithError, {
                        value: e.otherSettings.AllowedExtensionWhitelist,
                        onChange: this.onSettingChange.bind(this, "AllowedExtensionWhitelist")
                    })), r.a.createElement("div", {
                        className: "buttons-box"
                    }, r.a.createElement(o.Button, {
                        disabled: !this.props.otherSettingsClientModified,
                        type: "secondary",
                        onClick: this.onCancel.bind(this)
                    }, h.get("Cancel")), r.a.createElement(o.Button, {
                        disabled: !this.props.otherSettingsClientModified,
                        type: "primary",
                        onClick: this.onUpdate.bind(this)
                    }, h.get("Save")))) : r.a.createElement("div", null)
                }
            }]) && H(n.prototype, a), s && H(n, s), t
        }();
    var Y = Object(a.connect)(function (e) {
        return {
            tabIndex: e.pagination.tabIndex,
            otherSettings: e.security.otherSettings,
            otherSettingsClientModified: e.security.otherSettingsClientModified
        }
    })(z);
    n(35);

    function q(e) {
        return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function X(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function Q(e, t) {
        return !t || "object" !== q(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function W(e) {
        return (W = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function K(e, t) {
        return (K = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var J = n(37).default,
        $ = n(38).default,
        Z = n(39).default,
        ee = n(40).default,
        te = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), Q(this, W(t).call(this))
            }
            var n, a, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && K(e, t)
            }(t, i["Component"]), n = t, (a = [{
                key: "componentDidMount",
                value: function () {
                    var e = "" !== this.props.openId && this.props.id === this.props.openId;
                    this.setState({
                        opened: e
                    })
                }
            }, {
                key: "toggle",
                value: function () {
                    "" !== this.props.openId && this.props.id === this.props.openId ? this.props.Collapse() : this.props.OpenCollapse(this.props.id)
                }
            }, {
                key: "getRuleTypeDisplay",
                value: function () {
                    var e = this.props;
                    return "add" !== e.id ? 1 === e.ruleType ? r.a.createElement("div", {
                        className: "item-row-ruleType-display"
                    }, r.a.createElement("div", {
                        className: "allow-icon",
                        dangerouslySetInnerHTML: {
                            __html: J
                        }
                    }), r.a.createElement("div", {
                        style: {
                            paddingLeft: "10px",
                            paddingTop: 3,
                            float: "left"
                        }
                    }, h.get("AllowIP"))) : r.a.createElement("div", {
                        className: "item-row-ruleType-display"
                    }, r.a.createElement("div", {
                        className: "deny-icon",
                        dangerouslySetInnerHTML: {
                            __html: $
                        }
                    }), r.a.createElement("div", {
                        style: {
                            paddingLeft: "10px",
                            paddingTop: 3,
                            float: "left"
                        }
                    }, h.get("DenyIP"))) : "-"
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = "" !== this.props.openId && this.props.id === this.props.openId;
                    return r.a.createElement("div", {
                        className: "collapsible-component-ipfilters" + (t ? " row-opened" : "")
                    }, e.visible && r.a.createElement("div", {
                        className: "collapsible-ipfilters " + !t
                    }, r.a.createElement("div", {
                        className: "row"
                    }, r.a.createElement("div", {
                        className: "ip-filter-item item-row-ruleType"
                    }, this.getRuleTypeDisplay()), r.a.createElement("div", {
                        className: "ip-filter-item item-row-ipAddress"
                    }, e.ipFilter), "add" !== e.id && !e.readOnly && r.a.createElement("div", {
                        className: "ip-filter-item item-row-editButton"
                    }, r.a.createElement("div", {
                        className: t ? "delete-icon-hidden" : "delete-icon",
                        dangerouslySetInnerHTML: {
                            __html: ee
                        },
                        onClick: this.props.onDelete.bind(this)
                    }), r.a.createElement("div", {
                        className: t ? "edit-icon-active" : "edit-icon",
                        dangerouslySetInnerHTML: {
                            __html: Z
                        },
                        onClick: this.toggle.bind(this)
                    })))), r.a.createElement(o.Collapsible, {
                        className: "ip-filter-wrapper",
                        accordion: !0,
                        isOpened: t,
                        style: {
                            overflow: "visible",
                            width: "100%"
                        }
                    }, t && e.children))
                }
            }]) && X(n.prototype, a), s && X(n, s), t
        }();
    te.defaultProps = {
        collapsed: !0,
        visible: !0,
        readOnly: !1
    };
    var ne = te;
    n(41);

    function ie(e) {
        return (ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function re(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function ae(e, t) {
        return !t || "object" !== ie(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function oe(e) {
        return (oe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function se(e, t) {
        return (se = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var le = [],
        ce = [],
        pe = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        ue = "SingleIP",
        de = "IPRange",
        me = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = ae(this, oe(t).call(this))).state = {
                    ipFilter: {
                        RuleType: 1
                    },
                    error: {
                        ip: !0,
                        mask: !0
                    },
                    triedToSubmit: !1,
                    formModified: !1,
                    ruleSpecificity: ue
                }, (le = []).push({
                    label: h.get(ue),
                    value: ue
                }), le.push({
                    label: h.get(de),
                    value: de
                }), (ce = []).push({
                    label: h.get("AllowIP"),
                    value: 1
                }), ce.push({
                    label: h.get("DenyIP"),
                    value: 2
                }), e
            }
            var n, a, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && se(e, t)
            }(t, i["Component"]), n = t, (a = [{
                key: "componentDidMount",
                value: function () {
                    var e = this,
                        t = this.props;
                    t.ipFilterId && t.dispatch(m.getIpFilter({
                        filterId: t.ipFilterId
                    }, function (t) {
                        var n = Object.assign({}, t.Results);
                        e.setState({
                            error: {
                                ip: !1,
                                mask: !1
                            },
                            ruleSpecificity: "" === n.SubnetMask ? ue : de,
                            ipFilter: n
                        })
                    }))
                }
            }, {
                key: "onRuleSpecificityChange",
                value: function (e) {
                    this.setState({
                        ruleSpecificity: e,
                        formModified: !0,
                        triedToSubmit: !1
                    })
                }
            }, {
                key: "onSettingChange",
                value: function (e, t) {
                    var n = this.state.ipFilter;
                    n[e] = "RuleType" === e ? parseInt(t.value) : "object" === ie(t) ? t.target.value : t, this.setState({
                        ipFilter: n,
                        triedToSubmit: !1,
                        formModified: !0
                    })
                }
            }, {
                key: "onUpdateItem",
                value: function (e) {
                    e.preventDefault();
                    var t = this.state;
                    this.setState({
                        triedToSubmit: !0
                    }), this.validateIPAddressContainsError() || (t.ruleSpecificity === ue && (t.ipFilter.SubnetMask = ""), this.props.onUpdate(this.state.ipFilter))
                }
            }, {
                key: "validateIPAddressContainsError",
                value: function () {
                    var e = this.state;
                    return e.error.ip = !this.isValidIpAddress(e.ipFilter.IPAddress), e.ruleSpecificity === de ? e.error.mask = !this.isValidIpAddress(e.ipFilter.SubnetMask) : e.error.mask = !1, this.setState({
                        error: e.error
                    }), e.error.ip || e.error.mask
                }
            }, {
                key: "isValidIpAddress",
                value: function (e) {
                    return pe.test(e)
                }
            }, {
                key: "render",
                value: function () {
                    var e = r.a.createElement("div", {
                        className: "container"
                    }, r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("plRuleSpecifity.Help"),
                        label: h.get("plRuleSpecifity")
                    }), r.a.createElement(o.RadioButtons, {
                        onChange: this.onRuleSpecificityChange.bind(this),
                        options: le,
                        buttonGroup: "specificity",
                        value: this.state.ruleSpecificity
                    })), r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("plRuleType.Help"),
                        label: h.get("plRuleType")
                    }), r.a.createElement(o.Dropdown, {
                        options: ce,
                        value: this.state.ipFilter.RuleType,
                        onSelect: this.onSettingChange.bind(this, "RuleType")
                    })), r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("plFirstIP.Help"),
                        label: h.get("plFirstIP")
                    }), r.a.createElement(o.SingleLineInputWithError, {
                        inputStyle: {
                            margin: "0"
                        },
                        withLabel: !1,
                        error: this.state.error.ip && this.state.triedToSubmit,
                        errorMessage: h.get("IPValidation.ErrorMessage"),
                        value: this.state.ipFilter.IPAddress,
                        onChange: this.onSettingChange.bind(this, "IPAddress")
                    })), this.state.ruleSpecificity === de && r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("plSubnet.Help"),
                        label: h.get("plSubnet")
                    }), r.a.createElement(o.SingleLineInputWithError, {
                        inputStyle: {
                            margin: "0"
                        },
                        withLabel: !1,
                        error: this.state.error.mask && this.state.triedToSubmit,
                        errorMessage: h.get("IPValidation.ErrorMessage"),
                        value: this.state.ipFilter.SubnetMask,
                        onChange: this.onSettingChange.bind(this, "SubnetMask")
                    }))),
                        t = [];
                    return t.push(e), r.a.createElement("div", {
                        className: "ip-filter-setting-editor"
                    }, r.a.createElement(o.GridSystem, {
                        numberOfColumns: 1
                    }, t), r.a.createElement("div", {
                        className: "buttons-box"
                    }, r.a.createElement(o.Button, {
                        type: "secondary",
                        onClick: this.props.Collapse.bind(this)
                    }, h.get("Cancel")), r.a.createElement(o.Button, {
                        disabled: !this.state.formModified,
                        type: "primary",
                        onClick: this.onUpdateItem.bind(this)
                    }, h.get("Save"))))
                }
            }]) && re(n.prototype, a), s && re(n, s), t
        }();
    var ge = Object(a.connect)(function (e) {
        return {
            ipFilter: e.security.ipFilter
        }
    })(me),
        fe = n(13),
        he = n.n(fe);

    function be(e) {
        return (be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Se(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function Ee(e, t) {
        return !t || "object" !== be(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Ce(e) {
        return (Ce = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function ye(e, t) {
        return (ye = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var ve = n(19).default,
        Te = [],
        we = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = Ee(this, Ce(t).call(this))).state = {
                    openId: ""
                }, e
            }
            var n, a, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ye(e, t)
            }(t, i["Component"]), n = t, (a = [{
                key: "componentDidMount",
                value: function () {
                    this.props.dispatch(m.getIpFilters()), (Te = []).push({
                        name: h.get("FilterType.Header"),
                        id: "RuleType"
                    }), Te.push({
                        name: h.get("IpAddress.Header"),
                        id: "IPAddress"
                    })
                }
            }, {
                key: "renderHeader",
                value: function () {
                    var e = Te.map(function (e) {
                        var t = "ip-filter-items header-" + e.id;
                        return r.a.createElement("div", {
                            className: t,
                            key: "header-" + e.id
                        }, r.a.createElement("span", null, e.name))
                    });
                    return r.a.createElement("div", {
                        className: "header-row"
                    }, e)
                }
            }, {
                key: "uncollapse",
                value: function (e) {
                    this.setState({
                        openId: e
                    })
                }
            }, {
                key: "collapse",
                value: function () {
                    "" !== this.state.openId && this.setState({
                        openId: ""
                    })
                }
            }, {
                key: "toggle",
                value: function (e) {
                    "" !== e && this.uncollapse(e)
                }
            }, {
                key: "onUpdateIpFilter",
                value: function (e) {
                    var t = this,
                        n = this.props;
                    n.dispatch(m.updateIpFilter(e, function () {
                        c.a.utilities.notify(h.get("IpFilterUpdateSuccess")), t.collapse(), n.dispatch(m.getIpFilters())
                    }, function () {
                        c.a.utilities.notifyError(h.get("IpFilterUpdateError"))
                    }))
                }
            }, {
                key: "onDeleteIpFilter",
                value: function (e) {
                    var t = this,
                        n = this.props;
                    c.a.utilities.confirm(h.get("IpFilterDeletedWarning"), h.get("Yes"), h.get("No"), function () {
                        var i = n.ipFilters.filter(function (t) {
                            return t.IPFilterID !== e
                        });
                        n.dispatch(m.deleteIpFilter(e, i, function () {
                            c.a.utilities.notify(h.get("DeleteSuccess")), t.collapse()
                        }, function () {
                            c.a.utilities.notifyError(h.get("DeleteError"))
                        }))
                    })
                }
            }, {
                key: "renderedIpFilters",
                value: function () {
                    var e = this,
                        t = 0;
                    return this.props.ipFilters.map(function (n, i) {
                        var a = "row-" + t++;
                        return r.a.createElement(ne, {
                            ipFilterId: n.IPFilterID,
                            ruleType: n.RuleType,
                            ipFilter: n.IPFilter,
                            index: i,
                            key: "ipFilter-" + i,
                            closeOnClick: !0,
                            openId: e.state.openId,
                            OpenCollapse: e.toggle.bind(e),
                            Collapse: e.collapse.bind(e),
                            onDelete: e.onDeleteIpFilter.bind(e, n.IPFilterID),
                            id: a
                        }, r.a.createElement(ge, {
                            ipFilterId: n.IPFilterID,
                            Collapse: e.collapse.bind(e),
                            onUpdate: e.onUpdateIpFilter.bind(e),
                            id: a,
                            openId: e.state.openId
                        }))
                    })
                }
            }, {
                key: "render",
                value: function () {
                    var e = "add" === this.state.openId;
                    return this.props.ipFilters ? r.a.createElement("div", {
                        className: he.a.ipFilterItems
                    }, r.a.createElement("div", {
                        className: "ip-filter-topbar"
                    }, !this.props.enableIPChecking && r.a.createElement("div", {
                        className: "warning-container"
                    }, r.a.createElement("div", {
                        className: "warning-icon",
                        dangerouslySetInnerHTML: {
                            __html: ve
                        }
                    }), h.get("IPFiltersDisabled")), r.a.createElement("div", {
                        className: "AddItemRow"
                    }, r.a.createElement("div", {
                        className: e ? "AddItemBox-active" : "AddItemBox",
                        onClick: this.toggle.bind(this, e ? "" : "add")
                    }, r.a.createElement("div", {
                        className: "add-icon",
                        dangerouslySetInnerHTML: {
                            __html: o.SvgIcons.AddIcon
                        }
                    }), " ", h.get("cmdAdd")))), r.a.createElement("div", {
                        className: "ip-filter-items-grid"
                    }, this.renderHeader(), r.a.createElement(ne, {
                        ipFilterId: "-",
                        ruleType: "-",
                        ipFilter: "-",
                        index: "add",
                        key: "ipFilter-add",
                        closeOnClick: !0,
                        openId: this.state.openId,
                        OpenCollapse: this.toggle.bind(this),
                        Collapse: this.collapse.bind(this),
                        onDelete: this.onDeleteIpFilter.bind(this),
                        id: "add",
                        visible: e
                    }, r.a.createElement(ge, {
                        Collapse: this.collapse.bind(this),
                        onUpdate: this.onUpdateIpFilter.bind(this),
                        id: "add",
                        openId: this.state.openId
                    })), this.renderedIpFilters())) : r.a.createElement("div", null)
                }
            }]) && Se(n.prototype, a), s && Se(n, s), t
        }();
    var Ie = Object(a.connect)(function (e) {
        return {
            tabIndex: e.pagination.tabIndex,
            ipFilters: e.security.ipFilters,
            enableIPChecking: e.security.enableIPChecking
        }
    })(we),
        _e = n(26),
        Ne = n.n(_e);

    function xe(e) {
        return (xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function ke(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function Re(e, t) {
        return !t || "object" !== xe(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Oe(e) {
        return (Oe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Ae(e, t) {
        return (Ae = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var Le = /^[1-9][0-9]?[0-9]?[0-9]?$/,
        Pe = /^[1-9][0-9]?[0-9]?[0-9]?$|^0$/,
        Me = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = Re(this, Oe(t).call(this))).state = {
                    memberSettings: void 0,
                    error: {
                        membershipResetLinkValidity: !0,
                        adminMembershipResetLinkValidity: !0,
                        membershipNumberPasswords: !0,
                        membershipDaysBeforePasswordReuse: !0,
                        passwordExpiry: !0,
                        passwordExpiryReminder: !0
                    },
                    triedToSubmit: !1
                }, e
            }
            var n, a, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Ae(e, t)
            }(t, i["Component"]), n = t, (a = [{
                key: "UNSAFE_componentWillMount",
                value: function () {
                    var e = this,
                        t = this.props;
                    t.memberSettings ? this.updateMemberSettings(t.memberSettings) : t.dispatch(m.getMemberSettings(function (t) {
                        e.updateMemberSettings(t.Results.Settings)
                    }))
                }
            }, {
                key: "updateMemberSettings",
                value: function (e) {
                    if (e) {
                        var t = this.state,
                            n = e.MembershipResetLinkValidity;
                        "" !== n && Le.test(n) ? "" !== n && Le.test(n) && (t.error.membershipResetLinkValidity = !1) : t.error.membershipResetLinkValidity = !0;
                        var i = e.AdminMembershipResetLinkValidity;
                        "" !== i && Le.test(i) ? "" !== i && Le.test(i) && (t.error.adminMembershipResetLinkValidity = !1) : t.error.adminMembershipResetLinkValidity = !0;
                        var r = e.MembershipNumberPasswords;
                        "" !== r && Pe.test(r) ? "" !== r && Pe.test(r) && (t.error.membershipNumberPasswords = !1) : t.error.membershipNumberPasswords = !0;
                        var a = e.MembershipDaysBeforePasswordReuse;
                        "" !== a && Pe.test(a) ? "" !== a && Pe.test(a) && (t.error.membershipDaysBeforePasswordReuse = !1) : t.error.membershipDaysBeforePasswordReuse = !0;
                        var o = e.PasswordExpiry;
                        "" !== o && Pe.test(o) ? "" !== o && Pe.test(o) && (t.error.passwordExpiry = !1) : t.error.passwordExpiry = !0;
                        var s = e.PasswordExpiryReminder;
                        "" !== s && Pe.test(s) ? "" !== s && Pe.test(s) && (t.error.passwordExpiryReminder = !1) : t.error.passwordExpiryReminder = !0, this.setState({
                            memberSettings: Object.assign({}, e),
                            triedToSubmit: !1,
                            error: t.error
                        })
                    }
                }
            }, {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                    this.updateMemberSettings(e.memberSettings)
                }
            }, {
                key: "onSettingChange",
                value: function (e, t) {
                    var n = this.state,
                        i = this.props,
                        r = Object.assign({}, n.memberSettings);
                    r[e] = "object" === xe(t) ? t.target.value : t, this.updateMemberSettings(r), i.dispatch(m.memberSettingsClientModified(r))
                }
            }, {
                key: "onUpdate",
                value: function (e) {
                    e.preventDefault();
                    var t = this.props,
                        n = this.state;
                    if (this.setState({
                        triedToSubmit: !0
                    }), !(n.error.membershipResetLinkValidity || n.error.adminMembershipResetLinkValidity || n.error.membershipNumberPasswords || n.error.membershipDaysBeforePasswordReuse || n.error.passwordExpiry || n.error.passwordExpiryReminder)) {
                        var i = Object.assign({}, n.memberSettings);
                        t.dispatch(m.updateMemberSettings(i, function () {
                            c.a.utilities.notify(h.get("MemberSettingsUpdateSuccess"))
                        }, function () {
                            c.a.utilities.notifyError(h.get("MemberSettingsError"))
                        }))
                    }
                }
            }, {
                key: "onCancel",
                value: function () {
                    var e = this,
                        t = this.props;
                    c.a.utilities.confirm(h.get("MemberSettingsRestoreWarning"), h.get("Yes"), h.get("No"), function () {
                        t.dispatch(m.getMemberSettings(function (t) {
                            e.updateMemberSettings(t.Results.Settings)
                        }))
                    })
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.state;
                    return e.memberSettings ? r.a.createElement("div", {
                        className: Ne.a.memberSettings
                    }, r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("plResetLinkValidity.Help"),
                        label: h.get("plResetLinkValidity"),
                        extra: r.a.createElement(o.Tooltip, {
                            messages: [h.get("GlobalSetting")],
                            type: "global",
                            style: {
                                float: "left",
                                position: "static"
                            }
                        })
                    }), r.a.createElement(o.SingleLineInputWithError, {
                        withLabel: !1,
                        error: this.state.error.membershipResetLinkValidity && this.state.triedToSubmit,
                        errorMessage: h.get("MembershipResetLinkValidity.ErrorMessage"),
                        value: e.memberSettings.MembershipResetLinkValidity,
                        onChange: this.onSettingChange.bind(this, "MembershipResetLinkValidity")
                    })), r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("plAdminResetLinkValidity.Help"),
                        label: h.get("plAdminResetLinkValidity"),
                        extra: r.a.createElement(o.Tooltip, {
                            messages: [h.get("GlobalSetting")],
                            type: "global",
                            style: {
                                float: "left",
                                position: "static"
                            }
                        })
                    }), r.a.createElement(o.SingleLineInputWithError, {
                        withLabel: !1,
                        error: this.state.error.adminMembershipResetLinkValidity && this.state.triedToSubmit,
                        errorMessage: h.get("AdminMembershipResetLinkValidity.ErrorMessage"),
                        value: e.memberSettings.AdminMembershipResetLinkValidity,
                        onChange: this.onSettingChange.bind(this, "AdminMembershipResetLinkValidity")
                    })), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "memberSettings-row_switch",
                        style: {
                            margin: "0 0 20px 0"
                        }
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("plEnablePasswordHistory.Help"),
                        label: h.get("plEnablePasswordHistory"),
                        extra: r.a.createElement(o.Tooltip, {
                            messages: [h.get("GlobalSetting")],
                            type: "global",
                            style: {
                                float: "left",
                                position: "static"
                            }
                        })
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: e.memberSettings.EnablePasswordHistory,
                        onChange: this.onSettingChange.bind(this, "EnablePasswordHistory")
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("plNumberPasswords.Help"),
                        label: h.get("plNumberPasswords"),
                        extra: r.a.createElement(o.Tooltip, {
                            messages: [h.get("GlobalSetting")],
                            type: "global",
                            style: {
                                float: "left",
                                position: "static"
                            }
                        })
                    }), r.a.createElement(o.SingleLineInputWithError, {
                        withLabel: !1,
                        error: this.state.error.membershipNumberPasswords && this.state.triedToSubmit,
                        errorMessage: h.get("MembershipNumberPasswords.ErrorMessage"),
                        value: e.memberSettings.MembershipNumberPasswords,
                        onChange: this.onSettingChange.bind(this, "MembershipNumberPasswords")
                    })), r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("plPasswordDays.Help"),
                        label: h.get("plPasswordDays"),
                        extra: r.a.createElement(o.Tooltip, {
                            messages: [h.get("GlobalSetting")],
                            type: "global",
                            style: {
                                float: "left",
                                position: "static"
                            }
                        })
                    }), r.a.createElement(o.SingleLineInputWithError, {
                        withLabel: !1,
                        error: this.state.error.membershipDaysBeforePasswordReuse && this.state.triedToSubmit,
                        errorMessage: h.get("MembershipDaysBeforePasswordReuse.ErrorMessage"),
                        value: e.memberSettings.MembershipDaysBeforePasswordReuse,
                        onChange: this.onSettingChange.bind(this, "MembershipDaysBeforePasswordReuse")
                    })), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "memberSettings-row_switch",
                        style: {
                            margin: "0 0 20px 0"
                        }
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("plEnableBannedList.Help"),
                        label: h.get("plEnableBannedList"),
                        extra: r.a.createElement(o.Tooltip, {
                            messages: [h.get("GlobalSetting")],
                            type: "global",
                            style: {
                                float: "left",
                                position: "static"
                            }
                        })
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: e.memberSettings.EnableBannedList,
                        onChange: this.onSettingChange.bind(this, "EnableBannedList")
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "memberSettings-row_switch",
                        style: {
                            margin: "0 0 20px 0"
                        }
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("plEnableStrengthMeter.Help"),
                        label: h.get("plEnableStrengthMeter"),
                        extra: r.a.createElement(o.Tooltip, {
                            messages: [h.get("GlobalSetting")],
                            type: "global",
                            style: {
                                float: "left",
                                position: "static"
                            }
                        })
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: e.memberSettings.EnableStrengthMeter,
                        onChange: this.onSettingChange.bind(this, "EnableStrengthMeter")
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "memberSettings-row_switch",
                        style: {
                            margin: "0 0 20px 0"
                        }
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("plEnableIPChecking.Help"),
                        label: h.get("plEnableIPChecking"),
                        extra: r.a.createElement(o.Tooltip, {
                            messages: [h.get("GlobalSetting")],
                            type: "global",
                            style: {
                                float: "left",
                                position: "static"
                            }
                        })
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: e.memberSettings.EnableIPChecking,
                        onChange: this.onSettingChange.bind(this, "EnableIPChecking")
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "memberSettings-row_switch",
                        style: {
                            margin: "0 0 20px 0"
                        }
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("plForceLogOutAfterPasswordChanged.Help"),
                        label: h.get("plForceLogOutAfterPasswordChanged"),
                        extra: r.a.createElement(o.Tooltip, {
                            messages: [h.get("GlobalSetting")],
                            type: "global",
                            style: {
                                float: "left",
                                position: "static"
                            }
                        })
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: e.memberSettings.ForceLogoutAfterPasswordChanged,
                        onChange: this.onSettingChange.bind(this, "ForceLogoutAfterPasswordChanged")
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("PasswordConfig_PasswordExpiry.Help"),
                        label: h.get("PasswordConfig_PasswordExpiry"),
                        extra: r.a.createElement(o.Tooltip, {
                            messages: [h.get("GlobalSetting")],
                            type: "global",
                            style: {
                                float: "left",
                                position: "static"
                            }
                        })
                    }), r.a.createElement(o.SingleLineInputWithError, {
                        withLabel: !1,
                        error: this.state.error.passwordExpiry && this.state.triedToSubmit,
                        errorMessage: h.get("PasswordExpiry.ErrorMessage"),
                        value: e.memberSettings.PasswordExpiry,
                        onChange: this.onSettingChange.bind(this, "PasswordExpiry")
                    })), r.a.createElement(o.InputGroup, null, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("PasswordConfig_PasswordExpiryReminder.Help"),
                        label: h.get("PasswordConfig_PasswordExpiryReminder"),
                        extra: r.a.createElement(o.Tooltip, {
                            messages: [h.get("GlobalSetting")],
                            type: "global",
                            style: {
                                float: "left",
                                position: "static"
                            }
                        })
                    }), r.a.createElement(o.SingleLineInputWithError, {
                        withLabel: !1,
                        error: this.state.error.passwordExpiryReminder && this.state.triedToSubmit,
                        errorMessage: h.get("PasswordExpiryReminder.ErrorMessage"),
                        value: e.memberSettings.PasswordExpiryReminder,
                        onChange: this.onSettingChange.bind(this, "PasswordExpiryReminder")
                    })), r.a.createElement("div", {
                        className: "buttons-box"
                    }, r.a.createElement(o.Button, {
                        disabled: !this.props.memberSettingsClientModified,
                        type: "secondary",
                        onClick: this.onCancel.bind(this)
                    }, h.get("Cancel")), r.a.createElement(o.Button, {
                        disabled: !this.props.memberSettingsClientModified,
                        type: "primary",
                        onClick: this.onUpdate.bind(this)
                    }, h.get("Save")))) : r.a.createElement("div", null)
                }
            }]) && ke(n.prototype, a), s && ke(n, s), t
        }();
    var De = Object(a.connect)(function (e) {
        return {
            tabIndex: e.pagination.tabIndex,
            memberSettings: e.security.memberSettings,
            memberSettingsClientModified: e.security.memberSettingsClientModified
        }
    })(Me),
        He = n(14),
        Ue = n.n(He);

    function Fe(e) {
        return (Fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ve(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function Ge(e, t) {
        return !t || "object" !== Fe(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function je(e) {
        return (je = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Be(e, t) {
        return (Be = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var ze = !1,
        Ye = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = Ge(this, je(t).call(this))).state = {
                    registrationSettings: void 0,
                    triedToSubmit: !1,
                    error: {
                        registrationFields: "",
                        validationFields: ""
                    }
                }, ze = c.a.settings.isHost || c.a.settings.isAdmin || c.a.settings.permissions.REGISTRATION_SETTINGS_EDIT, e
            }
            var n, a, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Be(e, t)
            }(t, i["Component"]), n = t, (a = [{
                key: "UNSAFE_componentWillMount",
                value: function () {
                    var e = this,
                        t = this.props;
                    t.registrationSettings ? this.setState({
                        registrationSettings: t.registrationSettings
                    }) : t.dispatch(m.getRegistrationSettings(function (t) {
                        var n = Object.assign({}, t.Results.Settings);
                        e.setState({
                            registrationSettings: n
                        })
                    }))
                }
            }, {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                    this.setState({
                        registrationSettings: Object.assign({}, e.registrationSettings),
                        triedToSubmit: !1
                    })
                }
            }, {
                key: "onSettingChange",
                value: function (e, t) {
                    var n = this.state,
                        i = this.props,
                        r = Object.assign({}, n.registrationSettings);
                    if ("UserRegistration" === e || "RegistrationFormType" === e) r[e] = parseInt(t);
                    else if ("RedirectAfterRegistrationTabId" === e) {
                        if (r[e] === parseInt(t)) return;
                        r[e] = t
                    } else r[e] = "object" === Fe(t) ? t.target.value : t;
                    this.setState({
                        registrationSettings: r,
                        triedToSubmit: !1
                    }), i.dispatch(m.registrationSettingsClientModified(r))
                }
            }, {
                key: "onUpdate",
                value: function (e) {
                    var t = this;
                    e.preventDefault();
                    var n = this.props,
                        i = this.state;
                    i.error.validationFields = "", this.setState({
                        triedToSubmit: !0
                    }), n.dispatch(m.updateRegistrationSettings(i.registrationSettings, function () {
                        c.a.utilities.notify(h.get("RegistrationSettingsUpdateSuccess"))
                    }, function (e) {
                        c.a.utilities.notifyError(h.get("RegistrationSettingsError"));
                        var n = JSON.parse(e.responseText);
                        i.error.registrationFields = n.Message, i.error.validationFields = n.ModelState, t.setState({
                            error: i.error
                        })
                    }))
                }
            }, {
                key: "onCancel",
                value: function () {
                    var e = this,
                        t = this.props;
                    c.a.utilities.confirm(h.get("RegistrationSettingsRestoreWarning"), h.get("Yes"), h.get("No"), function () {
                        t.dispatch(m.getRegistrationSettings(function (t) {
                            var n = Object.assign({}, t.Results.Settings);
                            e.setState({
                                registrationSettings: n
                            })
                        }))
                    })
                }
            }, {
                key: "keyValuePairsToOptions",
                value: function (e) {
                    var t = [];
                    return void 0 !== e && (t = e.map(function (e) {
                        return {
                            label: e.Key,
                            value: e.Value
                        }
                    })), t
                }
            }, {
                key: "isCustomFormType",
                value: function () {
                    var e = this.state;
                    return null != e.registrationSettings && 1 === e.registrationSettings.RegistrationFormType
                }
            }, {
                key: "getRegistrationFields",
                value: function (e) {
                    var t = [];
                    return e && (t = e.split(",").map(function (e) {
                        return {
                            id: e,
                            name: e
                        }
                    })), t
                }
            }, {
                key: "onUpdateTags",
                value: function (e) {
                    var t = this.state,
                        n = this.props,
                        i = Object.assign({}, t.registrationSettings),
                        r = e.map(function (e) {
                            return e.name
                        }).join(",");
                    i.RegistrationFields = r, this.setState({
                        registrationSettings: i,
                        triedToSubmit: !1
                    }), n.dispatch(m.registrationSettingsClientModified(i))
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = this.state,
                        n = "<" + h.get("NoneSpecified") + ">";
                    return t.registrationSettings ? r.a.createElement("div", {
                        className: Ue.a.registrationSettings
                    }, r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row-options"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("plUserRegistration.Help"),
                        label: h.get("plUserRegistration")
                    }), r.a.createElement(o.RadioButtons, {
                        onChange: this.onSettingChange.bind(this, "UserRegistration"),
                        options: this.keyValuePairsToOptions(e.userRegistrationOptions),
                        buttonGroup: "registrationType",
                        value: t.registrationSettings.UserRegistration,
                        disabled: !ze
                    }))), r.a.createElement(o.InputGroup, {
                        style: {
                            marginBottom: "5px"
                        }
                    }, r.a.createElement("div", {
                        className: "registrationSettings-row-options"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("registrationFormTypeLabel.Help"),
                        label: h.get("registrationFormTypeLabel")
                    }), r.a.createElement(o.RadioButtons, {
                        onChange: this.onSettingChange.bind(this, "RegistrationFormType"),
                        options: this.keyValuePairsToOptions(e.registrationFormTypeOptions),
                        buttonGroup: "formType",
                        value: t.registrationSettings.RegistrationFormType,
                        disabled: !ze
                    }))), this.isCustomFormType() && r.a.createElement(o.InputGroup, {
                        style: {
                            marginBottom: "30px"
                        }
                    }, r.a.createElement("div", {
                        className: "registrationSettings-row-input"
                    }, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("registrationFieldsLabel.Help"),
                        label: h.get("registrationFieldsLabel")
                    }), r.a.createElement(o.SearchableTags, {
                        utils: c.a,
                        tags: this.getRegistrationFields(t.registrationSettings.RegistrationFields),
                        onUpdateTags: this.onUpdateTags.bind(this),
                        error: "" !== this.state.error.registrationFields,
                        errorMessage: this.state.error.registrationFields,
                        enabled: ze
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row-input"
                    }, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("Security_DisplayNameFormat.Help"),
                        label: h.get("Security_DisplayNameFormat")
                    }), r.a.createElement(o.SingleLineInputWithError, {
                        error: !1,
                        value: t.registrationSettings.DisplayNameFormat,
                        onChange: this.onSettingChange.bind(this, "DisplayNameFormat"),
                        enabled: ze
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row-input"
                    }, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("Security_UserNameValidation.Help"),
                        label: h.get("Security_UserNameValidation")
                    }), r.a.createElement(o.SingleLineInputWithError, {
                        error: !1,
                        value: t.registrationSettings.UserNameValidation,
                        onChange: this.onSettingChange.bind(this, "UserNameValidation"),
                        enabled: ze
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row-input"
                    }, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("Security_EmailValidation.Help"),
                        label: h.get("Security_EmailValidation")
                    }), r.a.createElement(o.SingleLineInputWithError, {
                        error: !1,
                        withLabel: !1,
                        value: t.registrationSettings.EmailAddressValidation,
                        onChange: this.onSettingChange.bind(this, "EmailAddressValidation"),
                        enabled: ze
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row-input"
                    }, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("Registration_ExcludeTerms.Help"),
                        label: h.get("Registration_ExcludeTerms")
                    }), r.a.createElement(o.SingleLineInputWithError, {
                        error: !1,
                        withLabel: !1,
                        value: t.registrationSettings.ExcludedTerms,
                        onChange: this.onSettingChange.bind(this, "ExcludedTerms"),
                        enabled: ze
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row-input"
                    }, r.a.createElement(o.Label, {
                        tooltipMessage: h.get("Redirect_AfterRegistration.Help"),
                        label: h.get("Redirect_AfterRegistration")
                    }), r.a.createElement(o.PagePicker, {
                        serviceFramework: c.a.utilities.sf,
                        style: {
                            width: "100%",
                            zIndex: 1
                        },
                        selectedTabId: t.registrationSettings.RedirectAfterRegistrationTabId,
                        OnSelect: this.onSettingChange.bind(this, "RedirectAfterRegistrationTabId"),
                        defaultLabel: "" !== t.registrationSettings.RedirectAfterRegistrationTabName ? t.registrationSettings.RedirectAfterRegistrationTabName : n,
                        noneSpecifiedText: n,
                        CountText: "{0} Results",
                        PortalTabsParameters: {
                            portalId: -2,
                            cultureCode: "",
                            isMultiLanguage: !1,
                            excludeAdminTabs: !1,
                            disabledNotSelectable: !1,
                            roles: "1;-1",
                            sortOrder: 0
                        },
                        enabled: ze
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row_switch"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("plEnableRegisterNotification.Help"),
                        label: h.get("plEnableRegisterNotification")
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: t.registrationSettings.EnableRegisterNotification,
                        onChange: this.onSettingChange.bind(this, "EnableRegisterNotification"),
                        readOnly: !ze
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row_switch"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("Registration_UseAuthProviders.Help"),
                        label: h.get("Registration_UseAuthProviders")
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: t.registrationSettings.UseAuthenticationProviders,
                        onChange: this.onSettingChange.bind(this, "UseAuthenticationProviders"),
                        readOnly: !ze
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row_switch"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("Registration_UseProfanityFilter.Help"),
                        label: h.get("Registration_UseProfanityFilter")
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: t.registrationSettings.UseProfanityFilter,
                        onChange: this.onSettingChange.bind(this, "UseProfanityFilter"),
                        readOnly: !ze
                    }))), !this.isCustomFormType() && r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row_switch"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("Registration_UseEmailAsUserName.Help"),
                        label: h.get("Registration_UseEmailAsUserName")
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: t.registrationSettings.UseEmailAsUsername,
                        onChange: this.onSettingChange.bind(this, "UseEmailAsUsername"),
                        readOnly: !ze
                    }), "" !== this.state.error.validationFields["request.UseEmailAsUsername"] && r.a.createElement(o.Tooltip, {
                        messages: [this.state.error.validationFields["request.UseEmailAsUsername"]],
                        type: "error",
                        tooltipPlace: "top",
                        style: {
                            padding: "5px 0",
                            float: "left"
                        },
                        rendered: "" !== this.state.error.validationFields["request.UseEmailAsUsername"]
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row_switch"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("Registration_RequireUniqueDisplayName.Help"),
                        label: h.get("Registration_RequireUniqueDisplayName")
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: t.registrationSettings.RequireUniqueDisplayName,
                        onChange: this.onSettingChange.bind(this, "RequireUniqueDisplayName"),
                        readOnly: !ze
                    }))), !this.isCustomFormType() && r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row_switch"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("Registration_RandomPassword.Help"),
                        label: h.get("Registration_RandomPassword")
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: t.registrationSettings.UseRandomPassword,
                        onChange: this.onSettingChange.bind(this, "UseRandomPassword"),
                        readOnly: !ze
                    }))), !this.isCustomFormType() && r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row_switch"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("Registration_RequireConfirmPassword.Help"),
                        label: h.get("Registration_RequireConfirmPassword")
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: t.registrationSettings.RequirePasswordConfirmation,
                        onChange: this.onSettingChange.bind(this, "RequirePasswordConfirmation"),
                        readOnly: !ze
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row_switch"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("Security_RequireValidProfile.Help"),
                        label: h.get("Security_RequireValidProfile")
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: t.registrationSettings.RequireValidProfile,
                        onChange: this.onSettingChange.bind(this, "RequireValidProfile"),
                        readOnly: !ze
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row_switch"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("Security_CaptchaRegister.Help"),
                        label: h.get("Security_CaptchaRegister")
                    }), r.a.createElement(o.Switch, {
                        onText: h.get("SwitchOn"),
                        offText: h.get("SwitchOff"),
                        value: t.registrationSettings.UseCaptchaRegister,
                        onChange: this.onSettingChange.bind(this, "UseCaptchaRegister"),
                        readOnly: !ze
                    }))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row-static"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("RequiresUniqueEmail.Help"),
                        label: h.get("RequiresUniqueEmail")
                    }), r.a.createElement("div", {
                        className: "registrationSettings-row-static-text"
                    }, t.registrationSettings.RequiresUniqueEmail))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row-static"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("PasswordFormat.Help"),
                        label: h.get("PasswordFormat")
                    }), r.a.createElement("div", {
                        className: "registrationSettings-row-static-text"
                    }, t.registrationSettings.PasswordFormat))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row-static"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("PasswordRetrievalEnabled.Help"),
                        label: h.get("PasswordRetrievalEnabled")
                    }), r.a.createElement("div", {
                        className: "registrationSettings-row-static-text"
                    }, t.registrationSettings.PasswordRetrievalEnabled))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row-static"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("PasswordResetEnabledTitle.Help"),
                        label: h.get("PasswordResetEnabledTitle")
                    }), r.a.createElement("div", {
                        className: "registrationSettings-row-static-text"
                    }, t.registrationSettings.PasswordResetEnabled))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row-static"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("MinPasswordLengthTitle.Help"),
                        label: h.get("MinPasswordLengthTitle")
                    }), r.a.createElement("div", {
                        className: "registrationSettings-row-static-text"
                    }, t.registrationSettings.MinPasswordLength))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row-static"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("MinNonAlphanumericCharactersTitle.Help"),
                        label: h.get("MinNonAlphanumericCharactersTitle")
                    }), r.a.createElement("div", {
                        className: "registrationSettings-row-static-text"
                    }, t.registrationSettings.MinNonAlphanumericCharacters))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row-static"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("RequiresQuestionAndAnswerTitle.Help"),
                        label: h.get("RequiresQuestionAndAnswerTitle")
                    }), r.a.createElement("div", {
                        className: "registrationSettings-row-static-text"
                    }, t.registrationSettings.RequiresQuestionAndAnswer))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row-static"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("PasswordStrengthRegularExpressionTitle.Help"),
                        label: h.get("PasswordStrengthRegularExpressionTitle")
                    }), r.a.createElement("div", {
                        className: "registrationSettings-row-static-text"
                    }, t.registrationSettings.PasswordStrengthRegularExpression))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row-static"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("MaxInvalidPasswordAttemptsTitle.Help"),
                        label: h.get("MaxInvalidPasswordAttemptsTitle")
                    }), r.a.createElement("div", {
                        className: "registrationSettings-row-static-text"
                    }, t.registrationSettings.MaxInvalidPasswordAttempts))), r.a.createElement(o.InputGroup, null, r.a.createElement("div", {
                        className: "registrationSettings-row-static"
                    }, r.a.createElement(o.Label, {
                        labelType: "inline",
                        tooltipMessage: h.get("PasswordAttemptWindowTitle.Help"),
                        label: h.get("PasswordAttemptWindowTitle")
                    }), r.a.createElement("div", {
                        className: "registrationSettings-row-static-text"
                    }, t.registrationSettings.PasswordAttemptWindow))), ze && r.a.createElement("div", {
                        className: "buttons-box"
                    }, r.a.createElement(o.Button, {
                        disabled: !this.props.registrationSettingsClientModified,
                        type: "secondary",
                        onClick: this.onCancel.bind(this)
                    }, h.get("Cancel")), r.a.createElement(o.Button, {
                        disabled: !this.props.registrationSettingsClientModified,
                        type: "primary",
                        onClick: this.onUpdate.bind(this)
                    }, h.get("Save")))) : r.a.createElement("div", null)
                }
            }]) && Ve(n.prototype, a), s && Ve(n, s), t
        }();
    var qe = Object(a.connect)(function (e) {
        return {
            tabIndex: e.pagination.tabIndex,
            registrationSettings: e.security.registrationSettings,
            userRegistrationOptions: e.security.userRegistrationOptions,
            registrationFormTypeOptions: e.security.registrationFormTypeOptions,
            registrationSettingsClientModified: e.security.registrationSettingsClientModified
        }
    })(Ye);
    n(46);

    function Xe(e) {
        return (Xe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Qe(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function We(e, t) {
        return !t || "object" !== Xe(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Ke(e) {
        return (Ke = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Je(e, t) {
        return (Je = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var $e = function (e) {
        function t() {
            var e;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), (e = We(this, Ke(t).call(this))).state = {
                collapsed: !0,
                collapsedClass: !0,
                repainting: !1
            }, e
        }
        var n, a, s;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Je(e, t)
        }(t, i["Component"]), n = t, (a = [{
            key: "uncollapse",
            value: function () {
                this.setState({
                    collapsed: !1
                })
            }
        }, {
            key: "collapse",
            value: function () {
                this.setState({
                    collapsed: !0
                })
            }
        }, {
            key: "toggle",
            value: function () {
                this.state.collapsed ? this.uncollapse() : this.collapse()
            }
        }, {
            key: "render",
            value: function () {
                var e = this.props,
                    t = this.state;
                return r.a.createElement("div", {
                    className: "bulletinItem"
                }, r.a.createElement("div", {
                    className: "collapsible-bulletinitemdetail-header " + t.collapsed
                }, r.a.createElement("div", {
                    className: "term-header"
                }, r.a.createElement("div", {
                    className: "term-label-title",
                    onClick: this.toggle.bind(this)
                }, r.a.createElement("div", {
                    className: "term-label-wrapper"
                }, r.a.createElement("span", null, this.props.title, "  "))), r.a.createElement("div", {
                    className: "term-label-date",
                    onClick: this.toggle.bind(this)
                }, r.a.createElement("div", {
                    className: "term-label-wrapper"
                }, r.a.createElement("span", null, this.props.pubDate, "  "))))), r.a.createElement(o.Collapsible, {
                    className: this.props.className,
                    isOpened: !this.state.collapsed
                }, !t.collapsed && e.children))
            }
        }]) && Qe(n.prototype, a), s && Qe(n, s), t
    }(),
        Ze = n(9),
        et = n.n(Ze);

    function tt(e) {
        return (tt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function nt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function it(e, t) {
        return !t || "object" !== tt(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function rt(e) {
        return (rt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function at(e, t) {
        return (at = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var ot = n(19).default,
        st = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = it(this, rt(t).call(this))).state = {
                    error: void 0
                }, e
            }
            var n, a, o;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && at(e, t)
            }(t, i["Component"]), n = t, (a = [{
                key: "UNSAFE_componentWillMount",
                value: function () {
                    var e = this,
                        t = this.props;
                    t.securityBulletins || t.dispatch(m.getSecurityBulletins(function () { }, function (t) {
                        var n = JSON.parse(t.responseText);
                        e.setState({
                            error: n.Message
                        })
                    }))
                }
            }, {
                key: "renderHeader",
                value: function () {
                    var e = [{
                        name: h.get("Bulletins"),
                        id: "Bulletins"
                    }].map(function (e, t) {
                        var n = "bulletinsHeader bulletinsHeader-" + e.id;
                        return r.a.createElement("div", {
                            className: n,
                            key: t
                        }, r.a.createElement("span", null, e.name))
                    });
                    return r.a.createElement("div", {
                        className: "bulletinsHeader-wrapper"
                    }, e)
                }
            }, {
                key: "renderedList",
                value: function () {
                    var e = this.props;
                    if (e.securityBulletins) return e.securityBulletins.map(function (e, t) {
                        return r.a.createElement($e, {
                            className: "bulletin-detail-wrapper",
                            pubDate: e.PubDate,
                            title: e.Title,
                            link: e.Link,
                            description: e.Description,
                            author: e.Author,
                            index: t,
                            key: "bulletin-" + t,
                            closeOnClick: !0
                        }, r.a.createElement("div", {
                            className: "bulletin-detail"
                        }, r.a.createElement("div", {
                            style: {
                                fontWeight: "bolder",
                                margin: "0 0 15px 0"
                            }
                        }, h.get("BulletinDescription")), r.a.createElement("div", {
                            className: "bulletin-detail-desc"
                        }, e.Description), r.a.createElement("div", {
                            style: {
                                fontWeight: "bolder",
                                margin: "15px 0 15px 0"
                            }
                        }, h.get("BulletinLink")), r.a.createElement("div", {
                            className: "bulletin-detail-link"
                        }, r.a.createElement("a", {
                            target: "_blank",
                            href: e.Link,
                            rel: "noopener noreferrer"
                        }, e.Link)), r.a.createElement("div", {
                            style: {
                                height: "20px"
                            }
                        }, " ")))
                    })
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = this.state;
                    return t.error ? r.a.createElement("div", {
                        className: et.a.bulletins
                    }, r.a.createElement("div", {
                        className: "warning-container"
                    }, r.a.createElement("div", {
                        className: "warning-icon",
                        dangerouslySetInnerHTML: {
                            __html: ot
                        }
                    }), r.a.createElement("div", {
                        className: "warning-msg"
                    }, t.error))) : e.securityBulletins && e.securityBulletins.length > 0 ? r.a.createElement("div", {
                        className: et.a.bulletins
                    }, this.renderHeader(), this.renderedList()) : r.a.createElement("div", {
                        style: {
                            margin: "25px"
                        }
                    }, h.get("BulletinsDoNotExist").replace("{0}", e.platformVersion))
                }
            }]) && nt(n.prototype, a), o && nt(n, o), t
        }();
    var lt = Object(a.connect)(function (e) {
        return {
            tabIndex: e.pagination.tabIndex,
            platformVersion: e.security.platformVersion,
            securityBulletins: e.security.securityBulletins
        }
    })(st),
        ct = n(15),
        pt = n.n(ct);

    function ut(e) {
        return (ut = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function dt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function mt(e, t) {
        return !t || "object" !== ut(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function gt(e) {
        return (gt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function ft(e, t) {
        return (ft = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var ht = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), mt(this, gt(t).call(this))
        }
        var n, a, o;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && ft(e, t)
        }(t, i["Component"]), n = t, (a = [{
            key: "UNSAFE_componentWillMount",
            value: function () {
                var e = this.props;
                e.activities || e.dispatch(m.getSuperuserActivities())
            }
        }, {
            key: "renderHeader",
            value: function () {
                var e = [{
                    name: h.get("Username"),
                    id: "Username"
                }, {
                    name: h.get("CreatedDate"),
                    id: "CreatedDate"
                }, {
                    name: h.get("LastLogin"),
                    id: "LastLogin"
                }, {
                    name: h.get("LastActivityDate"),
                    id: "LastActivityDate"
                }].map(function (e, t) {
                    var n = "activityHeader activityHeader-" + e.id;
                    return r.a.createElement("div", {
                        className: n,
                        key: t
                    }, r.a.createElement("span", null, e.name))
                });
                return r.a.createElement("div", {
                    className: "activityHeader-wrapper"
                }, e)
            }
        }, {
            key: "renderedList",
            value: function () {
                return this.props.activities.map(function (e, t) {
                    return r.a.createElement("div", {
                        className: "activityItem",
                        key: t
                    }, r.a.createElement("div", {
                        className: "label-username"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.Username, "  "))), r.a.createElement("div", {
                        className: "label-createddate"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                        //START persian-dnnsoftware
                    }, r.a.createElement("span", null, window.isRtl ? moment(e.CreatedDate, "MM/DD/YYYY HH:mm:ss").format("jYYYY/jMM/jDD HH:mm:ss") : e.CreatedDate, "  "))), r.a.createElement("div", {
                        className: "label-lastlogindate"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, window.isRtl ? moment(e.LastLoginDate, "MM/DD/YYYY HH:mm:ss").format("jYYYY/jMM/jDD HH:mm:ss") : e.LastLoginDate, "  "))), r.a.createElement("div", {
                        className: "label-lastactivitydate"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, window.isRtl ? moment(e.LastActivityDate, "MM/DD/YYYY HH:mm:ss").format("jYYYY/jMM/jDD HH:mm:ss") : e.LastActivityDate, "  "))))
                    //END persian-dnnsoftware
                })
            }
        }, {
            key: "render",
            value: function () {
                return this.props.activities ? r.a.createElement("div", {
                    className: pt.a.activities
                }, r.a.createElement("div", {
                    className: "activities-topbar"
                }, h.get("SuperUserActivityExplaination")), r.a.createElement("div", {
                    className: "activityItems"
                }, this.renderHeader(), this.renderedList())) : r.a.createElement("div", null)
            }
        }]) && dt(n.prototype, a), o && dt(n, o), t
    }();
    var bt = Object(a.connect)(function (e) {
        return {
            tabIndex: e.pagination.tabIndex,
            activities: e.security.activities
        }
    })(ht),
        St = n(16),
        Et = n.n(St);

    function Ct(e) {
        return (Ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function yt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function vt(e, t) {
        return !t || "object" !== Ct(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Tt(e) {
        return (Tt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function wt(e, t) {
        return (wt = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var It = function (e) {
        function t() {
            var e;
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), (e = vt(this, Tt(t).call(this))).state = {
                checking: !1
            }, e
        }
        var n, a, s;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && wt(e, t)
        }(t, i["Component"]), n = t, (a = [{
            key: "UNSAFE_componentWillMount",
            value: function () {
                var e = this.props;
                e.auditCheckResults || e.dispatch(m.getAuditCheckResults())
            }
        }, {
            key: "renderHeader",
            value: function () {
                var e = [{
                    name: h.get("SecurityCheck"),
                    id: "SecurityCheck"
                }, {
                    name: h.get("Result"),
                    id: "Result"
                }, {
                    name: h.get("Notes"),
                    id: "Notes"
                }].map(function (e, t) {
                    var n = "auditCheckHeader auditCheckHeader-" + e.id;
                    return r.a.createElement("div", {
                        className: n,
                        key: t
                    }, r.a.createElement("span", null, e.name))
                });
                return r.a.createElement("div", {
                    className: "auditCheckHeader-wrapper"
                }, e)
            }
        }, {
            key: "getResultDisplay",
            value: function (e) {
                var t = e.Severity,
                    n = e.SuccessText,
                    i = e.FailureText,
                    a = e.Reason;
                switch (t) {
                    case 0:
                        return r.a.createElement("div", {
                            className: "label-result-severity"
                        }, r.a.createElement("div", {
                            className: "label-result-severity-pass"
                        }, h.get("Pass")), r.a.createElement("div", null, n));
                    case 1:
                        return r.a.createElement("div", {
                            className: "label-result-severity"
                        }, r.a.createElement("div", {
                            className: "label-result-severity-alert"
                        }, h.get("Alert")), r.a.createElement("div", null, i));
                    case 2:
                        return r.a.createElement("div", {
                            className: "label-result-severity"
                        }, r.a.createElement("div", {
                            className: "label-result-severity-fail"
                        }, h.get("Fail")), r.a.createElement("div", {
                            dangerouslySetInnerHTML: {
                                __html: i
                            }
                        }));
                    default:
                        return r.a.createElement("div", {
                            className: "label-result-severity"
                        }, r.a.createElement("div", {
                            className: "label-result-severity-unverified",
                            onClick: this.onAuditCheck.bind(this, e)
                        }, h.get("Check")), r.a.createElement("div", null, a))
                }
            }
        }, {
            key: "onAuditCheck",
            value: function (e) {
                var t = this,
                    n = this.state,
                    i = this.props;
                n.checking || this.setState({
                    checking: !0
                }, function () {
                    i.dispatch(m.getAuditCheckResult(e.CheckName, function () {
                        t.setState({
                            checking: !1
                        })
                    }))
                })
            }
        }, {
            key: "getNotesDisplay",
            value: function (e) {
                return e && e.length > 0 ? r.a.createElement("div", {
                    className: "log-detail",
                    dangerouslySetInnerHTML: {
                        __html: e
                    }
                }) : "N/A"
            }
        }, {
            key: "renderedList",
            value: function () {
                var e = this;
                return this.props.auditCheckResults.map(function (t, n) {
                    return r.a.createElement("div", {
                        className: "auditCheckItem",
                        key: n
                    }, r.a.createElement("div", {
                        className: "label-name"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, t.CheckNameText, "  "))), r.a.createElement("div", {
                        className: "label-result"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.getResultDisplay(t), "  "))), r.a.createElement("div", {
                        className: "label-notes"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.getNotesDisplay(t.Notes), "  "))))
                })
            }
        }, {
            key: "render",
            value: function () {
                var e = this.props,
                    t = !!(e.auditCheckResults && e.auditCheckResults.length > 0);
                return r.a.createElement(o.ContentLoadWrapper, {
                    loadComplete: t,
                    svgSkeleton: r.a.createElement("div", {
                        dangerouslySetInnerHTML: {
                            __html: o.SvgIcons.TableEmptyState
                        }
                    })
                }, r.a.createElement("div", {
                    className: Et.a.auditCheckResults
                }, r.a.createElement("div", {
                    className: "auditcheck-topbar"
                }, h.get("AuditExplanation")), r.a.createElement("div", {
                    className: "auditCheckItems"
                }, t && this.renderHeader(), t && this.renderedList())))
            }
        }]) && yt(n.prototype, a), s && yt(n, s), t
    }();
    var _t = Object(a.connect)(function (e) {
        return {
            tabIndex: e.pagination.tabIndex,
            auditCheckResults: e.security.auditCheckResults
        }
    })(It),
        Nt = n(17),
        xt = n.n(Nt);

    function kt(e) {
        return (kt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Rt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function Ot(e, t) {
        return !t || "object" !== kt(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function At(e) {
        return (At = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Lt(e, t) {
        return (Lt = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var Pt = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), Ot(this, At(t).call(this))
        }
        var n, a, s;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Lt(e, t)
        }(t, i["Component"]), n = t, (a = [{
            key: "renderFileHeader",
            value: function () {
                var e = [{
                    name: h.get("FileName"),
                    id: "FileName"
                }, {
                    name: h.get("LastWriteTime"),
                    id: "LastWriteTime"
                }].map(function (e, t) {
                    var n = "scannerCheckHeader scannerCheckHeader-" + e.id;
                    return r.a.createElement("div", {
                        className: n,
                        key: t
                    }, r.a.createElement("span", null, e.name))
                });
                return r.a.createElement("div", {
                    className: "scannerCheckHeader-wrapper"
                }, e)
            }
        }, {
            key: "renderedFileList",
            value: function () {
                return this.props.searchResults.FoundInFiles.map(function (e, t) {
                    return r.a.createElement("div", {
                        className: "scannerCheckItem",
                        key: t
                    }, r.a.createElement("div", {
                        className: "label-name"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.FileName, " "))), r.a.createElement("div", {
                        className: "label-date"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                        //START persian-dnnsoftware
                    }, r.a.createElement("span", null, window.isRtl ? moment(e.LastWriteTime, "MM/DD/YYYY HH:mm:ss").format("jYYYY/jMM/jDD HH:mm:ss") : e.LastWriteTime, " "))))
                    //END persian-dnnsoftware
                })
            }
        }, {
            key: "renderDatabaseHeader",
            value: function () {
                var e = [{
                    name: h.get("DatabaseInstance"),
                    id: "DatabaseInstance"
                }, {
                    name: h.get("DatabaseValue"),
                    id: "DatabaseValue"
                }].map(function (e, t) {
                    var n = "scannerCheckHeader scannerCheckHeader-" + e.id;
                    return r.a.createElement("div", {
                        className: n,
                        key: t
                    }, r.a.createElement("span", null, e.name))
                });
                return r.a.createElement("div", {
                    className: "scannerCheckHeader-wrapper"
                }, e)
            }
        }, {
            key: "renderedDatabaseList",
            value: function () {
                return this.props.searchResults.FoundInDatabase.map(function (e, t) {
                    return r.a.createElement("div", {
                        className: "scannerCheckItem",
                        key: t
                    }, r.a.createElement("div", {
                        className: "label-columnname"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.ColumnName, "  "))), r.a.createElement("div", {
                        className: "label-columnvalue"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.ColumnValue, "  "))))
                })
            }
        }, {
            key: "renderRiskFilesHeader",
            value: function () {
                var e = [{
                    name: h.get("FileName"),
                    id: "FileName"
                }, {
                    name: h.get("LastWriteTime"),
                    id: "LastWriteTime"
                }].map(function (e, t) {
                    var n = "scannerCheckHeader scannerCheckHeader-" + e.id;
                    return r.a.createElement("div", {
                        className: n,
                        key: t
                    }, r.a.createElement("span", null, e.name))
                });
                return r.a.createElement("div", {
                    className: "scannerCheckHeader-wrapper"
                }, e)
            }
        }, {
            key: "renderRiskFilesList",
            value: function (e) {
                var t = this.props,
                    n = t.modifiedFiles.HighRiskFiles;
                return "low" === e && (n = t.modifiedFiles.LowRiskFiles), n.map(function (e, t) {
                    return r.a.createElement("div", {
                        className: "scannerCheckItem",
                        key: t
                    }, r.a.createElement("div", {
                        className: "label-name"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.FilePath, "  "))), r.a.createElement("div", {
                        className: "label-date"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                        //START persian-dnnsoftware
                    }, r.a.createElement("span", null, window.isRtl ? moment(e.LastWriteTime, "MM/DD/YYYY HH:mm:ss").format("jYYYY/jMM/jDD HH:mm:ss") : e.LastWriteTime, "  "))))
                    //END persian-dnnsoftware
                })
            }
        }, {
            key: "renderPortalSettingsHeader",
            value: function () {
                var e = [{
                    name: h.get("PortalId"),
                    id: "PortalId"
                }, {
                    name: h.get("SettingName"),
                    id: "SettingName"
                }, {
                    name: h.get("SettingValue"),
                    id: "SettingValue"
                }, {
                    name: h.get("UserId"),
                    id: "UserId"
                }, {
                    name: h.get("LastWriteTime"),
                    id: "LastWriteTime"
                }].map(function (e, t) {
                    var n = "scannerCheckHeader scannerCheckHeader-" + e.id;
                    return r.a.createElement("div", {
                        className: n,
                        key: t
                    }, r.a.createElement("span", null, e.name))
                });
                return r.a.createElement("div", {
                    className: "scannerCheckHeader-wrapper"
                }, e)
            }
        }, {
            key: "renderedPortalSettingsList",
            value: function () {
                return this.props.modifiedSettings.PortalSettings.map(function (e, t) {
                    return r.a.createElement("div", {
                        className: "scannerCheckItem",
                        key: t
                    }, r.a.createElement("div", {
                        className: "label-id"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.PortalId, "  "))), r.a.createElement("div", {
                        className: "label-name"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.SettingName, " "))), r.a.createElement("div", {
                        className: "label-value"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.SettingValue, " "))), r.a.createElement("div", {
                        className: "label-user"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.LastModifiedByUserId, "  "))), r.a.createElement("div", {
                        className: "label-date"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                        //START perian-dnnsoftware
                    }, r.a.createElement("span", null, window.isRtl ? moment(e.LastModifiedOnDate, "MM/DD/YYYY HH:mm:ss").format("jYYYY/jMM/jDD HH:mm:ss") : e.LastModifiedOnDate, "  "))))
                    //END perian-dnnsoftware
                })
            }
        }, {
            key: "renderHostSettingsHeader",
            value: function () {
                var e = [{
                    name: h.get("SettingName"),
                    id: "SettingName"
                }, {
                    name: h.get("SettingValue"),
                    id: "SettingValue"
                }, {
                    name: h.get("UserId"),
                    id: "UserId"
                }, {
                    name: h.get("LastWriteTime"),
                    id: "LastWriteTime"
                }].map(function (e, t) {
                    var n = "scannerCheckHeader scannerCheckHeader-" + e.id;
                    return r.a.createElement("div", {
                        className: n,
                        key: t
                    }, r.a.createElement("span", null, e.name))
                });
                return r.a.createElement("div", {
                    className: "scannerCheckHeader-wrapper"
                }, e)
            }
        }, {
            key: "renderedHostSettingsList",
            value: function () {
                return this.props.modifiedSettings.PortalSettings.map(function (e, t) {
                    return r.a.createElement("div", {
                        className: "scannerCheckItem",
                        key: t
                    }, r.a.createElement("div", {
                        className: "label-name"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.SettingName, " "))), r.a.createElement("div", {
                        className: "label-value"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.SettingValue, " "))), r.a.createElement("div", {
                        className: "label-user"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.LastModifiedByUserId, "  "))), r.a.createElement("div", {
                        className: "label-date"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                        //START persian-dnnsoftware
                    }, r.a.createElement("span", null, window.isRtl ? moment(e.LastModifiedOnDate, "MM/DD/YYYY HH:mm:ss").format("jYYYY/jMM/jDD HH:mm:ss") : e.LastModifiedOnDate, "  "))))
                    //END persian-dnnsoftware
                })
            }
        }, {
            key: "renderTabSettingsHeader",
            value: function () {
                var e = [{
                    name: h.get("TabId"),
                    id: "TabId"
                }, {
                    name: h.get("PortalId"),
                    id: "PortalId"
                }, {
                    name: h.get("SettingName"),
                    id: "SettingName"
                }, {
                    name: h.get("SettingValue"),
                    id: "SettingValue"
                }, {
                    name: h.get("UserId"),
                    id: "UserId"
                }, {
                    name: h.get("LastWriteTime"),
                    id: "LastWriteTime"
                }].map(function (e, t) {
                    var n = "scannerCheckHeader scannerCheckHeader-" + e.id;
                    return r.a.createElement("div", {
                        className: n,
                        key: t
                    }, r.a.createElement("span", null, e.name))
                });
                return r.a.createElement("div", {
                    className: "scannerCheckHeader-wrapper"
                }, e)
            }
        }, {
            key: "renderedTabSettingsList",
            value: function () {
                return this.props.modifiedSettings.TabSettings.map(function (e, t) {
                    return r.a.createElement("div", {
                        className: "scannerCheckItem",
                        key: t
                    }, r.a.createElement("div", {
                        className: "label-tab"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.TabId, "  "))), r.a.createElement("div", {
                        className: "label-id"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.PortalId, "  "))), r.a.createElement("div", {
                        className: "label-name"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.SettingName, "  "))), r.a.createElement("div", {
                        className: "label-value"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.SettingValue, "  "))), r.a.createElement("div", {
                        className: "label-user"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.LastModifiedByUserId, "  "))), r.a.createElement("div", {
                        className: "label-date"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, window.isRtl ? moment(e.LastModifiedOnDate, "MM/DD/YYYY HH:mm:ss").format("jYYYY/jMM/jDD HH:mm:ss") : e.LastModifiedOnDate, "  "))))
                })
            }
        }, {
            key: "renderModuleSettingsHeader",
            value: function () {
                var e = [{
                    name: h.get("Type"),
                    id: "Type"
                }, {
                    name: h.get("ModuleId"),
                    id: "ModuleId"
                }, {
                    name: h.get("PortalId"),
                    id: "PortalId"
                }, {
                    name: h.get("SettingName"),
                    id: "SettingName"
                }, {
                    name: h.get("SettingValue"),
                    id: "SettingValue"
                }, {
                    name: h.get("UserId"),
                    id: "UserId"
                }, {
                    name: h.get("LastWriteTime"),
                    id: "LastWriteTime"
                }].map(function (e, t) {
                    var n = "scannerCheckHeader scannerCheckHeader-" + e.id;
                    return r.a.createElement("div", {
                        className: n,
                        key: t
                    }, r.a.createElement("span", null, e.name))
                });
                return r.a.createElement("div", {
                    className: "scannerCheckHeader-wrapper"
                }, e)
            }
        }, {
            key: "renderedModuleSettingsList",
            value: function () {
                return this.props.modifiedSettings.ModuleSettings.map(function (e, t) {
                    return r.a.createElement("div", {
                        className: "scannerCheckItem",
                        key: t
                    }, r.a.createElement("div", {
                        className: "label-type"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.Type, "  "))), r.a.createElement("div", {
                        className: "label-module"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.ModuleId, "  "))), r.a.createElement("div", {
                        className: "label-id"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.PortalId, "  "))), r.a.createElement("div", {
                        className: "label-name"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.SettingName, "  "))), r.a.createElement("div", {
                        className: "label-value"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.SettingValue, "  "))), r.a.createElement("div", {
                        className: "label-user"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, e.LastModifiedByUserId, "  "))), r.a.createElement("div", {
                        className: "label-date"
                    }, r.a.createElement("div", {
                        className: "label-wrapper"
                    }, r.a.createElement("span", null, window.isRtl ? moment(e.LastModifiedOnDate, "MM/DD/YYYY HH:mm:ss").format("jYYYY/jMM/jDD HH:mm:ss") : e.LastModifiedOnDate, "  "))))
                })
            }
        }, {
            key: "onKeywordChanged",
            value: function (e) {
                var t = this.props;
                "" === e && "" !== t.scannerCheckKeyword && (e = t.scannerCheckKeyword), e !== t.scannerCheckKeyword ? (e && "" !== e ? t.dispatch(m.searchFileSystemAndDatabase({
                    term: e
                }, function () { })) : t.dispatch(m.clearFileSystemAndDatabaseSearch()), t.dispatch(m.updatefileSystemAndDatabaseSearchKeyword(e))) : t.dispatch(m.updatefileSystemAndDatabaseActiveTab("search"))
            }
        }, {
            key: "getModifiedSettings",
            value: function () {
                var e = this.props;
                "settings" !== e.scannerCheckActiveTab && (e.modifiedSettings ? e.dispatch(m.updatefileSystemAndDatabaseActiveTab("settings")) : e.dispatch(m.getLastModifiedSettings(function () { })))
            }
        }, {
            key: "getModifiedFiles",
            value: function () {
                var e = this.props;
                "files" !== e.scannerCheckActiveTab && (e.modifiedFiles ? e.dispatch(m.updatefileSystemAndDatabaseActiveTab("files")) : e.dispatch(m.getLastModifiedFiles(function () { })))
            }
        }, {
            key: "showSearchResults",
            value: function () {
                var e = this.props;
                return !(!e.searchResults || "search" !== e.scannerCheckActiveTab)
            }
        }, {
            key: "showModifiedSettings",
            value: function () {
                var e = this.props;
                return !(!e.modifiedSettings || "settings" !== e.scannerCheckActiveTab)
            }
        }, {
            key: "showModifiedFiles",
            value: function () {
                var e = this.props;
                return !(!e.modifiedFiles || "files" !== e.scannerCheckActiveTab)
            }
        }, {
            key: "render",
            value: function () {
                var e = this.props;
                return r.a.createElement("div", {
                    className: xt.a.scannerCheckResults
                }, r.a.createElement("div", {
                    className: "scannercheck-topbar"
                }, r.a.createElement("div", {
                    className: "search" === e.scannerCheckActiveTab ? "search-filter-active" : "search-filter"
                }, r.a.createElement(o.SearchBox, {
                    placeholder: h.get("ScannerChecks"),
                    initialValue: e.scannerCheckKeyword && e.scannerCheckKeyword.length > 0 ? e.scannerCheckKeyword : null,
                    onSearch: this.onKeywordChanged.bind(this),
                    maxLength: 50
                }), r.a.createElement("div", {
                    className: "clear"
                })), r.a.createElement("div", {
                    className: this.showModifiedSettings() ? "settings-filter-active" : "settings-filter",
                    onClick: this.getModifiedSettings.bind(this)
                }, r.a.createElement(o.TextOverflowWrapper, {
                    text: h.get("ModifiedSettings"),
                    maxWidth: 150
                })), r.a.createElement("div", {
                    className: this.showModifiedFiles() ? "files-filter-active" : "files-filter",
                    onClick: this.getModifiedFiles.bind(this)
                }, r.a.createElement(o.TextOverflowWrapper, {
                    text: h.get("ModifiedFiles"),
                    maxWidth: 150
                }))), this.showSearchResults() && e.searchResults.FoundInFiles && r.a.createElement("div", null, r.a.createElement("div", {
                    className: "scannerCheckItems-title"
                }, h.get("SearchFileSystemResult").replace("{0}", e.searchResults.FoundInFiles.length)), e.searchResults.FoundInFiles.length > 0 && r.a.createElement("div", {
                    className: "scannerCheckItems"
                }, this.renderFileHeader(), this.renderedFileList())), this.showSearchResults() && e.searchResults.FoundInDatabase && r.a.createElement("div", null, r.a.createElement("div", {
                    className: "scannerCheckItems-title"
                }, h.get("SearchDatabaseResult").replace("{0}", e.searchResults.FoundInDatabase.length)), e.searchResults.FoundInDatabase.length > 0 && r.a.createElement("div", {
                    className: "scannerCheckItems"
                }, this.renderDatabaseHeader(), this.renderedDatabaseList())), this.showModifiedFiles() && r.a.createElement("div", null, r.a.createElement("div", {
                    className: "scannerCheckItems-title"
                }, h.get("HighRiskFiles")), r.a.createElement("div", {
                    className: "scannerCheckItems-riskFiles"
                }, this.renderRiskFilesHeader(), this.renderRiskFilesList("high"))), this.showModifiedFiles() && r.a.createElement("div", null, r.a.createElement("div", {
                    className: "scannerCheckItems-title"
                }, h.get("LowRiskFiles")), r.a.createElement("div", {
                    className: "scannerCheckItems-riskFiles"
                }, this.renderRiskFilesHeader(), this.renderRiskFilesList("low"))), this.showModifiedSettings() && r.a.createElement("div", null, r.a.createElement("div", {
                    className: "scannerCheckItems-title"
                }, h.get("PortalSettings")), r.a.createElement("div", {
                    className: "scannerCheckItems-portalSettings"
                }, this.renderPortalSettingsHeader(), this.renderedPortalSettingsList())), this.showModifiedSettings() && r.a.createElement("div", null, r.a.createElement("div", {
                    className: "scannerCheckItems-title"
                }, h.get("HostSettings")), r.a.createElement("div", {
                    className: "scannerCheckItems-hostSettings"
                }, this.renderHostSettingsHeader(), this.renderedHostSettingsList())), this.showModifiedSettings() && r.a.createElement("div", null, r.a.createElement("div", {
                    className: "scannerCheckItems-title"
                }, h.get("TabSettings")), r.a.createElement("div", {
                    className: "scannerCheckItems-tabSettings"
                }, this.renderTabSettingsHeader(), this.renderedTabSettingsList())), this.showModifiedSettings() && r.a.createElement("div", null, r.a.createElement("div", {
                    className: "scannerCheckItems-title"
                }, h.get("ModuleSettings")), r.a.createElement("div", {
                    className: "scannerCheckItems-moduleSettings"
                }, this.renderModuleSettingsHeader(), this.renderedModuleSettingsList())))
            }
        }]) && Rt(n.prototype, a), s && Rt(n, s), t
    }();
    var Mt = Object(a.connect)(function (e) {
        return {
            tabIndex: e.pagination.tabIndex,
            searchResults: e.security.searchResults,
            modifiedSettings: e.security.modifiedSettings,
            modifiedFiles: e.security.modifiedFiles,
            scannerCheckKeyword: e.security.scannerCheckKeyword,
            scannerCheckActiveTab: e.security.scannerCheckActiveTab
        }
    })(Pt);
    n(52);

    function Dt(e) {
        return (Dt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ht(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function Ut(e) {
        return (Ut = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Ft(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Vt(e, t) {
        return (Vt = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var Gt = !1,
        jt = !1,
        Bt = !1,
        zt = !1,
        Yt = function (e) {
            function t() {
                var e, n, i;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), n = this, (e = !(i = Ut(t).call(this)) || "object" !== Dt(i) && "function" != typeof i ? Ft(n) : i).handleSelect = e.handleSelect.bind(Ft(e)), Gt = c.a.settings.isHost, jt = Gt || c.a.settings.isAdmin, Bt = Gt || jt || c.a.settings.permissions.BASIC_LOGIN_SETTINGS_VIEW, zt = Gt || jt || c.a.settings.permissions.REGISTRATION_SETTINGS_VIEW, e
            }
            var n, a, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Vt(e, t)
            }(t, i["Component"]), n = t, (a = [{
                key: "handleSelect",
                value: function (e) {
                    this.props.dispatch(l.loadTab(e))
                }
            }, {
                key: "renderTabs",
                value: function () {
                    var e = [],
                        t = [],
                        n = [],
                        i = [],
                        a = [],
                        s = [],
                        l = [];
                    return (Bt || Gt) && (t.push([h.get("TabLoginSettings")]), Bt && n.push(h.get("TabBasicLoginSettings")), Gt && n.push(r.a.createElement("div", {
                        style: {
                            fontSize: "9pt"
                        }
                    }, h.get("TabIpFilters"), r.a.createElement(o.Tooltip, {
                        messages: [h.get("GlobalSettingsTab")],
                        type: "global",
                        style: {
                            position: "absolute",
                            right: -27,
                            top: 15,
                            textTransform: "none"
                        }
                    })))), (Gt || zt) && (t.push([h.get("TabMemberAccounts")]), Gt && (i.push(r.a.createElement("div", {
                        style: {
                            fontSize: "9pt"
                        }
                    }, h.get("TabMemberSettings"), r.a.createElement(o.Tooltip, {
                        messages: [h.get("GlobalSettingsTab")],
                        type: "global",
                        style: {
                            position: "absolute",
                            right: -27,
                            top: 15,
                            textTransform: "none"
                        }
                    }))), l.push(r.a.createElement(De, {
                        key: "memberManagement"
                    }))), zt && (i.push(r.a.createElement("div", {
                        style: {
                            marginLeft: Gt ? 35 : 0
                        }
                    }, r.a.createElement("div", {
                        style: {
                            width: Gt ? 35 : "auto",
                            height: 3,
                            position: "absolute",
                            left: 0,
                            bottom: -3,
                            backgroundColor: "white"
                        }
                    }), h.get("TabRegistrationSettings"))), l.push(r.a.createElement(qe, {
                        key: "registrationSettings"
                    })))), jt && (a.push(h.get("TabSslSettings")), s.push(r.a.createElement(L, {
                        key: "sslSettings"
                    }))), Gt && (t.push(h.get("TabSecurityAnalyzer")), t.push(h.get("TabSecurityBulletins")), a.push(r.a.createElement("div", {
                        style: {
                            fontSize: "9pt"
                        }
                    }, h.get("TabMoreSecuritySettings"), r.a.createElement(o.Tooltip, {
                        messages: [h.get("GlobalSettingsTab")],
                        type: "global",
                        style: {
                            position: "absolute",
                            right: -27,
                            top: 15,
                            textTransform: "none"
                        }
                    }))), s.push(r.a.createElement(Y, {
                        key: "otherSettings"
                    }))), jt && t.push(h.get("TabMore")), (Bt || Gt) && e.push(r.a.createElement(o.DnnTabs, {
                        key: "loginSettingsTab",
                        onSelect: this.handleSelect.bind(this),
                        tabHeaders: n,
                        type: "secondary"
                    }, Bt && r.a.createElement(w, {
                        cultureCode: this.props.cultureCode
                    }), Gt && r.a.createElement(Ie, null))), (Gt || zt) && e.push(r.a.createElement(o.DnnTabs, {
                        key: "memberAccountsTab",
                        onSelect: this.handleSelect.bind(this),
                        tabHeaders: i,
                        type: "secondary"
                    }, l)), Gt && (e.push(r.a.createElement(o.DnnTabs, {
                        key: "auditChecksTab",
                        onSelect: this.handleSelect.bind(this),
                        tabHeaders: [h.get("TabAuditChecks"), h.get("TabScannerCheck"), h.get("TabSuperuserActivity")],
                        type: "secondary"
                    }, r.a.createElement(_t, null), r.a.createElement(Mt, null), r.a.createElement(bt, null))), e.push(r.a.createElement(lt, {
                        key: "securityBulletinsTab"
                    }))), jt && e.push(r.a.createElement(o.DnnTabs, {
                        key: "moreTab",
                        onSelect: this.handleSelect.bind(this),
                        tabHeaders: a,
                        type: "secondary"
                    }, s)), r.a.createElement(o.DnnTabs, {
                        onSelect: this.handleSelect.bind(this),
                        tabHeaders: t,
                        type: "primary"
                    }, e)
                }
            }, {
                key: "render",
                value: function () {
                    return r.a.createElement(o.PersonaBarPageBody, null, this.renderTabs())
                }
            }]) && Ht(n.prototype, a), s && Ht(n, s), t
        }();
    var qt = Object(a.connect)(function (e) {
        return {
            tabIndex: e.pagination.index
        }
    })(Yt);

    function Xt(e) {
        return (Xt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Qt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function Wt(e, t) {
        return !t || "object" !== Xt(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Kt(e) {
        return (Kt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Jt(e, t) {
        return (Jt = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var $t = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), Wt(this, Kt(t).call(this))
        }
        var n, a, s;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Jt(e, t)
        }(t, i["Component"]), n = t, (a = [{
            key: "render",
            value: function () {
                var e = this.props;
                return r.a.createElement("div", {
                    className: "securitySettings-app"
                }, r.a.createElement(o.PersonaBarPage, {
                    isOpen: 0 === e.selectedPage
                }, r.a.createElement(o.PersonaBarPageHeader, {
                    title: h.get("nav_Security")
                }), r.a.createElement(qt, {
                    cultureCode: e.cultureCode
                })))
            }
        }]) && Qt(n.prototype, a), s && Qt(n, s), t
    }();
    var Zt = Object(a.connect)(function (e) {
        return {
            selectedPage: e.visiblePanel.selectedPage,
            selectedPageVisibleIndex: e.visiblePanel.selectedPageVisibleIndex
        }
    })($t);

    function en(e) {
        return (en = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function tn(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function nn(e, t) {
        return !t || "object" !== en(t) && "function" != typeof t ? function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function rn(e) {
        return (rn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function an(e, t) {
        return (an = Object.setPrototypeOf || function (e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var on = function (e) {
        function t() {
            return function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), nn(this, rn(t).call(this))
        }
        var n, a, o;
        return function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && an(e, t)
        }(t, i["Component"]), n = t, (a = [{
            key: "render",
            value: function () {
                var e = window.parent.personaBarSettings.culture;
                return r.a.createElement("div", {
                    className: "taskScheduler-Root"
                }, r.a.createElement(Zt, {
                    cultureCode: e
                }))
            }
        }]) && tn(n.prototype, a), o && tn(n, o), t
    }();
    t.default = on
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(0),
        r = n.n(i),
        a = n(20),
        o = n(4),
        s = n(3),
        l = {
            init: function () {
                var e = window.dnn.initSecurity();
                s.a.init(e.utility), s.a.moduleName = e.moduleName, s.a.settings = e.settings, n(27)
            },
            dispatch: function () {
                throw new Error("dispatch method needs to be overwritten from the Redux store")
            }
        },
        c = n(8),
        p = n(18),
        u = n.n(p),
        d = n(21),
        m = n.n(d),
        g = n(2);

    function f(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function (t) {
                h(e, t, n[t])
            })
        }
        return e
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function b(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function (t) {
                S(e, t, n[t])
            })
        }
        return e
    }

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function (t) {
                C(e, t, n[t])
            })
        }
        return e
    }

    function C(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var y = Object(c.combineReducers)({
        pagination: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                tabIndex: 0
            },
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case g.a.LOAD_TAB_DATA:
                    return f({}, e, {
                        tabIndex: t.payload.index
                    });
                default:
                    return f({}, e)
            }
        },
        visiblePanel: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                selectedPage: 0,
                selectedPageVisibleIndex: 0
            },
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case g.c.SELECT_PANEL:
                    return b({}, e, {
                        selectedPage: t.payload.selectedPage,
                        selectedPageVisibleIndex: t.payload.selectedPageVisibleIndex
                    });
                default:
                    return b({}, e)
            }
        },
        security: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
                case g.b.RETRIEVED_SECURITY_BASIC_LOGIN_SETTINS:
                    return E({}, e, {
                        basicLoginSettings: t.data.basicLoginSettings,
                        adminUsers: t.data.adminUsers,
                        authProviders: t.data.authProviders,
                        basicLoginSettingsClientModified: !1
                    });
                case g.b.RETRIEVED_SECURITY_MEMBER_SETTINS:
                    return E({}, e, {
                        memberSettings: t.data.memberSettings,
                        memberSettingsClientModified: !1
                    });
                case g.b.RETRIEVED_SECURITY_OTHER_SETTINS:
                    return E({}, e, {
                        otherSettings: t.data.otherSettings,
                        otherSettingsClientModified: !1
                    });
                case g.b.RETRIEVED_SECURITY_SSL_SETTINS:
                    return E({}, e, {
                        sslSettings: t.data.sslSettings,
                        sslSettingsClientModified: !1
                    });
                case g.b.RETRIEVED_SECURITY_REGISTRATION_SETTINS:
                    return E({}, e, {
                        registrationSettings: t.data.registrationSettings,
                        userRegistrationOptions: t.data.userRegistrationOptions,
                        registrationFormTypeOptions: t.data.registrationFormTypeOptions,
                        registrationSettingsClientModified: !1
                    });
                case g.b.RETRIEVED_SECURITY_IP_FILTERS:
                    return E({}, e, {
                        ipFilters: t.data.ipFilters,
                        enableIPChecking: t.data.enableIPChecking
                    });
                case g.b.DELETED_SECURITY_IP_FILTER:
                    return E({}, e, {
                        ipFilters: t.data.ipFilters
                    });
                case g.b.RETRIEVED_SECURITY_IP_FILTER:
                    return E({}, e, {
                        ipFilter: t.data.ipFilter
                    });
                case g.b.RETRIEVED_SECURITY_BULLETINS:
                    return E({}, e, {
                        platformVersion: t.data.platformVersion,
                        securityBulletins: t.data.securityBulletins
                    });
                case g.b.RETRIEVED_SECURITY_SUPERUSER_ACTIVITIES:
                    return E({}, e, {
                        activities: t.data.activities
                    });
                case g.b.RETRIEVED_SECURITY_AUDITCHECK_RESULTS:
                    return E({}, e, {
                        auditCheckResults: t.data.auditCheckResults
                    });
                case g.b.RETRIEVED_SECURITY_AUDITCHECK_RESULT:
                    for (var n = t.data.auditCheckResult, i = Object.assign([], JSON.parse(JSON.stringify(e.auditCheckResults))), r = 0; r < i.length; r++)
                        if (i[r].CheckName === n.CheckName) {
                            i[r] = n;
                            break
                        } return E({}, e, {
                            auditCheckResults: i
                        });
                case g.b.RETRIEVED_SECURITY_SEARCH_FILE_SYSTEM_DATABASE:
                    return E({}, e, {
                        searchResults: t.data.searchResults,
                        scannerCheckKeyword: t.data.scannerCheckKeyword,
                        scannerCheckActiveTab: t.data.scannerCheckActiveTab
                    });
                case g.b.RETRIEVED_SECURITY_LAST_MODIFIED_SETTINGS:
                    return E({}, e, {
                        modifiedSettings: t.data.modifiedSettings,
                        scannerCheckActiveTab: t.data.scannerCheckActiveTab
                    });
                case g.b.RETRIEVED_SECURITY_LAST_MODIFIED_FILES:
                    return E({}, e, {
                        modifiedFiles: t.data.modifiedFiles,
                        scannerCheckActiveTab: t.data.scannerCheckActiveTab
                    });
                case g.b.SECURITY_BASIC_LOGIN_SETTINS_CLIENT_MODIFIED:
                    return E({}, e, {
                        basicLoginSettings: t.data.basicLoginSettings,
                        basicLoginSettingsClientModified: t.data.basicLoginSettingsClientModified
                    });
                case g.b.UPDATED_SECURITY_BASIC_LOGIN_SETTINS:
                    return E({}, e, {
                        basicLoginSettingsClientModified: t.data.basicLoginSettingsClientModified
                    });
                case g.b.SECURITY_MEMBER_SETTINS_CLIENT_MODIFIED:
                    return E({}, e, {
                        memberSettings: t.data.memberSettings,
                        memberSettingsClientModified: t.data.memberSettingsClientModified
                    });
                case g.b.SECURITY_REGISTRATION_SETTINS_CLIENT_MODIFIED:
                    return E({}, e, {
                        registrationSettings: t.data.registrationSettings,
                        registrationSettingsClientModified: t.data.registrationSettingsClientModified
                    });
                case g.b.SECURITY_SSL_SETTINS_CLIENT_MODIFIED:
                    return E({}, e, {
                        sslSettings: t.data.sslSettings,
                        sslSettingsClientModified: t.data.sslSettingsClientModified
                    });
                case g.b.SECURITY_OTHER_SETTINS_CLIENT_MODIFIED:
                    return E({}, e, {
                        otherSettings: t.data.otherSettings,
                        otherSettingsClientModified: t.data.otherSettingsClientModified
                    });
                case g.b.UPDATED_SECURITY_MEMBER_SETTINS:
                    return E({}, e, {
                        memberSettingsClientModified: t.data.memberSettingsClientModified
                    });
                case g.b.UPDATED_SECURITY_REGISTRATION_SETTINS:
                    return E({}, e, {
                        registrationSettingsClientModified: t.data.registrationSettingsClientModified
                    });
                case g.b.UPDATED_SECURITY_SSL_SETTINS:
                    return E({}, e, {
                        sslSettingsClientModified: t.data.sslSettingsClientModified
                    });
                case g.b.UPDATED_SECURITY_OTHER_SETTINS:
                    return E({}, e, {
                        otherSettingsClientModified: t.data.otherSettingsClientModified
                    });
                case g.b.UPDATED_SECURITY_SEARCH_FILE_SYSTEM_DATABASE_KEYWORD:
                    return E({}, e, {
                        scannerCheckActiveTab: t.data.scannerCheckActiveTab,
                        scannerCheckKeyword: t.data.scannerCheckKeyword
                    });
                case g.b.UPDATED_SECURITY_SEARCH_FILE_SYSTEM_DATABASE_ACTIVE_TAB:
                    return E({}, e, {
                        scannerCheckActiveTab: t.data.scannerCheckActiveTab
                    });
                default:
                    return E({}, e)
            }
        }
    }),
        v = n(22),
        T = n(23),
        w = n.n(T),
        I = n(24),
        _ = n.n(I),
        N = Object(v.createDevTools)(r.a.createElement(_.a, {
            toggleVisibilityKey: "ctrl-h",
            changePositionKey: "ctrl-q"
        }, r.a.createElement(w.a, null))),
        x = !0;
    var k, R = n(25),
        O = n.n(R),
        A = Object(c.createStore)(y, k, Object(c.compose)(x ? Object(c.applyMiddleware)(u.a) : Object(c.applyMiddleware)(u.a, m()()), N.instrument()));
    l.dispatch = A.dispatch, l.init();
    var L = document.getElementById("security-container");
    Object(a.render)(r.a.createElement(o.Provider, {
        store: A
    }, r.a.createElement(O.a, null)), L)
}]);
//# sourceMappingURL=security-settings-bundle.js.map