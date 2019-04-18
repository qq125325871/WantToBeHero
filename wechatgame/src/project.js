require = function o(r, s, c) {
    function l(t, e) {
        if (!s[t]) {
            if (!r[t]) {
                var a = "function" == typeof require && require;
                if (!e && a) return a(t, !0);
                if (u) return u(t, !0);
                var n = new Error("Cannot find module '" + t + "'");
                throw n.code = "MODULE_NOT_FOUND", n
            }
            var i = s[t] = {exports: {}};
            r[t][0].call(i.exports, function (e) {
                return l(r[t][1][e] || e)
            }, i, i.exports, o, r, s, c)
        }
        return s[t].exports
    }

    for (var u = "function" == typeof require && require, e = 0; e < c.length; e++) l(c[e]);
    return l
}({
    Accelarate_Dialog: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "36a8dZDWuVOaI9bn2WHgemg", "Accelarate_Dialog");
        e("analytics-data");
        var i = e("instant-util");
        e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                share_label: cc.Label,
                greyIcon: cc.Sprite,
                watchBtn: cc.Button,
                shareBtn: cc.Button,
                diamondBtn: cc.Button
            },
            onLoad: function () {
                uiManager.seekNodeWithName("tittleLabel", this.node).active = false;
                uiManager.seekNodeWithName("btn_video", this.node).active = false;
            },
            setData: function (e, t, a, n) {
                this.callbackshare = e, this.callbackvideo = t, this.callbackgot = n, 1 == a ? this.diamondBtn.node.active = !1 : 2 == a && (this.watchBtn.node.active = !0, this.shareBtn.node.active = !1), /*"WEB" === i.getPlatform() && */(this.greyIcon.node.active = !0)
            },
            watchWebBtn: function () {
                "Watch" === this.share_label.string && (cc.log(i.getPlatform()), "WEB" === i.getPlatform() && (this.watchBtn.interactable = !1, cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("No available Ad now.")))
            },
            aquireRewardByDiamond: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                1 == playerManager.diamondEnough(10) ? (playerManager.setNumData("Diamond", playerManager.getNumData("Diamond") - 10), this.callbackgot && this.callbackgot(), cc.director.emit("updateDiamond")) : e.showNODiamondPopUp()
            },
            onClickShare: function () {
                this.callbackshare && this.callbackshare()
            },
            onClickVideo: function () {
                "WEB" === i.getPlatform() ? cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("No available Ad now.") : this.callbackvideo && this.callbackvideo()
            },
            closeDialog: function () {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").closeSpeedUpPopUp()
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    AddCoin1: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "325c9IQba9ERrKG+tQk7wVc", "AddCoin1");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                console.log("111", this.node);
            }, animOver: function () {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").overAddCoinEffect()
            }
        }), cc._RF.pop()
    }, {}],
    AndroidPaymentExecutor: [function (e, t, a) {
        "use strict";

        function n() {
            this.className = "com/bianfeng/platform/jssupport/PaymentInterfaceExecutor"
        }

        cc._RF.push(t, "1ba84ZawxRMR7HWrl0NABOT", "AndroidPaymentExecutor"), n.prototype.payForProduct = function (e) {
            jsb.reflection.callStaticMethod(this.className, "payForProduct", "(Ljava/lang/String;)V", e)
        }, n.prototype.payForProduct = function (e, t, a, n, i, o, r, s, c, l, u, d) {
            var h = new Object;
            h.orderId = e, h.productId = t, h.productName = a, h.productPrice = n, h.productCount = i, h.roleId = o, h.roleName = r, h.roleGrade = s, h.roleBalance = c, h.serverId = l, h.notifyUrl = u, h.ext = d;
            var g = JSON.stringify(h);
            jsb.reflection.callStaticMethod(this.className, "payForProduct", "(Ljava/lang/String;)V", g)
        }, n.prototype.payForSingle = function (e, t, a, n, i, o) {
            var r = new Object;
            r.orderId = e, r.productId = t, r.productName = a, r.productPrice = n, r.productCount = i, r.ext = o;
            var s = JSON.stringify(r);
            jsb.reflection.callStaticMethod(this.className, "payForProduct", "(Ljava/lang/String;)V", s)
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    AndroidPlatformExecutor: [function (a, e, t) {
        "use strict";

        function n() {
            this.className = "com/bianfeng/platform/jssupport/PlatformSdkExecutor"
        }

        cc._RF.push(e, "968c0o8cBhNf4GILwMAFtzE", "AndroidPlatformExecutor"), n.prototype.init = function () {
            jsb.reflection.callStaticMethod(this.className, "init", "()V")
        }, n.prototype.setListener = function (e) {
            this.listener = e, jsb.reflection.callStaticMethod(this.className, "setListener", "(Ljava/lang/String;)V", "androidCallBack")
        }, n.prototype.callback = function (e, t) {
            this.listener(e, t)
        }, n.prototype.getSdkVersion = function () {
            return jsb.reflection.callStaticMethod(this.className, "getSdkVersion", "()Ljava/lang/String;")
        }, n.prototype.getPlatformId = function () {
            return jsb.reflection.callStaticMethod(this.className, "getPlatformId", "()Ljava/lang/String;")
        }, n.prototype.getPlatformName = function () {
            return jsb.reflection.callStaticMethod(this.className, "getPlatformName", "()Ljava/lang/String;")
        }, n.prototype.getPlatformVersion = function () {
            return jsb.reflection.callStaticMethod(this.className, "getPlatformVersion", "()Ljava/lang/String;")
        }, e.exports = new n, window.androidCallBack = function (e, t) {
            a("AndroidPlatformExecutor").callback(e, t)
        }, cc._RF.pop()
    }, {AndroidPlatformExecutor: "AndroidPlatformExecutor"}],
    AndroidUserExecutor: [function (e, t, a) {
        "use strict";

        function n() {
            this.className = "com/bianfeng/platform/jssupport/UserInterfaceExecutor"
        }

        cc._RF.push(t, "b2bdaNwiS9JE4yqgvPCgvJV", "AndroidUserExecutor"), n.prototype.login = function () {
            jsb.reflection.callStaticMethod(this.className, "login", "()V")
        }, n.prototype.isSupportFunction = function (e) {
            return jsb.reflection.callStaticMethod(this.className, "isSupportFunction", "(Ljava/lang/String;)Z", e)
        }, n.prototype.callFunction = function (e) {
            jsb.reflection.callStaticMethod(this.className, "callFunction", "(Ljava/lang/String;)V", e)
        }, n.prototype.callFunctionArray = function (e, t) {
            jsb.reflection.callStaticMethod(this.className, "callFunction", "(Ljava/lang/String;Ljava/lang/String;)V", e, t)
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    BrowserPaymentExecutor: [function (e, t, a) {
        "use strict";

        function n() {
        }

        cc._RF.push(t, "66882gdHe9DS6VDeHeHDEpw", "BrowserPaymentExecutor"), n.prototype.payForProduct = function (e, t, a, n, i, o, r, s, c, l, u, d) {
            var h = new Object;
            h.orderId = e, h.productId = t, h.productName = a, h.productPrice = n, h.productCount = i, h.roleId = o, h.roleName = r, h.roleGrade = s, h.roleBalance = c, h.serverId = l, h.notifyUrl = u, h.ext = d;
            JSON.stringify(h)
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    BrowserPlatformExecutor: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "96c2bL8C65DDKYJtbdI5ntA", "BrowserPlatformExecutor");
        var n = e("UserWrapper");

        function i() {
            i.androidClass = "org/cocos2dx/javascript/AppActivity"
        }

        i.androidClass = "org/cocos2dx/javascript/AppActivity", i.prototype.init = function () {
            this.listener(n.ACTION_RET_INIT_FAIL, "unimpl")
        }, i.prototype.setListener = function (e) {
            this.listener = e
        }, i.prototype.callback = function (e, t) {
            this.listener(e, t)
        }, i.prototype.getSdkVersion = function () {
            return 0
        }, i.prototype.getPlatformId = function () {
            return 0
        }, i.prototype.getPlatformName = function () {
            return "browser"
        }, i.prototype.getPlatformVersion = function () {
            return 0
        }, t.exports = new i, cc._RF.pop()
    }, {BrowserPlatformExecutor: "BrowserPlatformExecutor", UserWrapper: "UserWrapper"}],
    BrowserUserExecutor: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "92235ohiBBCI7Js0PHzEdQ4", "BrowserUserExecutor");
        var n = e("UserWrapper"), i = e("BrowserPlatformExecutor");

        function o() {
        }

        var r = new o;
        o.prototype.login = function () {
            i.listener(n.ACTION_RET_LOGIN_FAIL, "unimpl")
        }, o.prototype.isSupportFunction = function (e) {
            return !1
        }, o.prototype.callFunction = function (e) {
        }, o.prototype.callFunctionArray = function (e, t) {
            cc.log(t)
        }, t.exports = r, cc._RF.pop()
    }, {BrowserPlatformExecutor: "BrowserPlatformExecutor", UserWrapper: "UserWrapper"}],
    1: [function (e, t, a) {
        "use strict";
        a.byteLength = function (e) {
            return 3 * e.length / 4 - d(e)
        }, a.toByteArray = function (e) {
            var t, a, n, i, o, r = e.length;
            i = d(e), o = new u(3 * r / 4 - i), a = 0 < i ? r - 4 : r;
            var s = 0;
            for (t = 0; t < a; t += 4) n = l[e.charCodeAt(t)] << 18 | l[e.charCodeAt(t + 1)] << 12 | l[e.charCodeAt(t + 2)] << 6 | l[e.charCodeAt(t + 3)], o[s++] = n >> 16 & 255, o[s++] = n >> 8 & 255, o[s++] = 255 & n;
            2 === i ? (n = l[e.charCodeAt(t)] << 2 | l[e.charCodeAt(t + 1)] >> 4, o[s++] = 255 & n) : 1 === i && (n = l[e.charCodeAt(t)] << 10 | l[e.charCodeAt(t + 1)] << 4 | l[e.charCodeAt(t + 2)] >> 2, o[s++] = n >> 8 & 255, o[s++] = 255 & n);
            return o
        }, a.fromByteArray = function (e) {
            for (var t, a = e.length, n = a % 3, i = "", o = [], r = 0, s = a - n; r < s; r += 16383) o.push(h(e, r, s < r + 16383 ? s : r + 16383));
            1 === n ? (t = e[a - 1], i += c[t >> 2], i += c[t << 4 & 63], i += "==") : 2 === n && (t = (e[a - 2] << 8) + e[a - 1], i += c[t >> 10], i += c[t >> 4 & 63], i += c[t << 2 & 63], i += "=");
            return o.push(i), o.join("")
        };
        for (var c = [], l = [], u = "undefined" != typeof Uint8Array ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, o = n.length; i < o; ++i) c[i] = n[i], l[n.charCodeAt(i)] = i;

        function d(e) {
            var t = e.length;
            if (0 < t % 4) throw new Error("Invalid string. Length must be a multiple of 4");
            return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
        }

        function h(e, t, a) {
            for (var n, i, o = [], r = t; r < a; r += 3) n = (e[r] << 16 & 16711680) + (e[r + 1] << 8 & 65280) + (255 & e[r + 2]), o.push(c[(i = n) >> 18 & 63] + c[i >> 12 & 63] + c[i >> 6 & 63] + c[63 & i]);
            return o.join("")
        }

        l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63
    }, {}],
    2: [function (t, e, O) {
        (function (e) {
            "use strict";
            var n = t("base64-js"), o = t("ieee754"), r = t("isarray");

            function a() {
                return d.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function s(e, t) {
                if (a() < t) throw new RangeError("Invalid typed array length");
                return d.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = d.prototype : (null === e && (e = new d(t)), e.length = t), e
            }

            function d(e, t, a) {
                if (!(d.TYPED_ARRAY_SUPPORT || this instanceof d)) return new d(e, t, a);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return l(this, e)
                }
                return i(this, e, t, a)
            }

            function i(e, t, a, n) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, a, n) {
                    if (t.byteLength, a < 0 || t.byteLength < a) throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < a + (n || 0)) throw new RangeError("'length' is out of bounds");
                    t = void 0 === a && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, a) : new Uint8Array(t, a, n);
                    d.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = d.prototype : e = u(e, t);
                    return e
                }(e, t, a, n) : "string" == typeof t ? function (e, t, a) {
                    "string" == typeof a && "" !== a || (a = "utf8");
                    if (!d.isEncoding(a)) throw new TypeError('"encoding" must be a valid string encoding');
                    var n = 0 | g(t, a), i = (e = s(e, n)).write(t, a);
                    i !== n && (e = e.slice(0, i));
                    return e
                }(e, t, a) : function (e, t) {
                    if (d.isBuffer(t)) {
                        var a = 0 | h(t.length);
                        return 0 === (e = s(e, a)).length || t.copy(e, 0, 0, a), e
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (n = t.length) != n ? s(e, 0) : u(e, t);
                        if ("Buffer" === t.type && r(t.data)) return u(e, t.data)
                    }
                    var n;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }

            function c(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function l(e, t) {
                if (c(t), e = s(e, t < 0 ? 0 : 0 | h(t)), !d.TYPED_ARRAY_SUPPORT) for (var a = 0; a < t; ++a) e[a] = 0;
                return e
            }

            function u(e, t) {
                var a = t.length < 0 ? 0 : 0 | h(t.length);
                e = s(e, a);
                for (var n = 0; n < a; n += 1) e[n] = 255 & t[n];
                return e
            }

            function h(e) {
                if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                return 0 | e
            }

            function g(e, t) {
                if (d.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var a = e.length;
                if (0 === a) return 0;
                for (var n = !1; ;) switch (t) {
                    case"ascii":
                    case"latin1":
                    case"binary":
                        return a;
                    case"utf8":
                    case"utf-8":
                    case void 0:
                        return E(e).length;
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return 2 * a;
                    case"hex":
                        return a >>> 1;
                    case"base64":
                        return B(e).length;
                    default:
                        if (n) return E(e).length;
                        t = ("" + t).toLowerCase(), n = !0
                }
            }

            function p(e, t, a) {
                var n = e[t];
                e[t] = e[a], e[a] = n
            }

            function f(e, t, a, n, i) {
                if (0 === e.length) return -1;
                if ("string" == typeof a ? (n = a, a = 0) : 2147483647 < a ? a = 2147483647 : a < -2147483648 && (a = -2147483648), a = +a, isNaN(a) && (a = i ? 0 : e.length - 1), a < 0 && (a = e.length + a), a >= e.length) {
                    if (i) return -1;
                    a = e.length - 1
                } else if (a < 0) {
                    if (!i) return -1;
                    a = 0
                }
                if ("string" == typeof t && (t = d.from(t, n)), d.isBuffer(t)) return 0 === t.length ? -1 : m(e, t, a, n, i);
                if ("number" == typeof t) return t &= 255, d.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, a) : Uint8Array.prototype.lastIndexOf.call(e, t, a) : m(e, [t], a, n, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function m(e, t, a, n, i) {
                var o, r = 1, s = e.length, c = t.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    s /= r = 2, c /= 2, a /= 2
                }

                function l(e, t) {
                    return 1 === r ? e[t] : e.readUInt16BE(t * r)
                }

                if (i) {
                    var u = -1;
                    for (o = a; o < s; o++) if (l(e, o) === l(t, -1 === u ? 0 : o - u)) {
                        if (-1 === u && (u = o), o - u + 1 === c) return u * r
                    } else -1 !== u && (o -= o - u), u = -1
                } else for (s < a + c && (a = s - c), o = a; 0 <= o; o--) {
                    for (var d = !0, h = 0; h < c; h++) if (l(e, o + h) !== l(t, h)) {
                        d = !1;
                        break
                    }
                    if (d) return o
                }
                return -1
            }

            function v(e, t, a, n) {
                a = Number(a) || 0;
                var i = e.length - a;
                n ? i < (n = Number(n)) && (n = i) : n = i;
                var o = t.length;
                if (o % 2 != 0) throw new TypeError("Invalid hex string");
                o / 2 < n && (n = o / 2);
                for (var r = 0; r < n; ++r) {
                    var s = parseInt(t.substr(2 * r, 2), 16);
                    if (isNaN(s)) return r;
                    e[a + r] = s
                }
                return r
            }

            function y(e, t, a, n) {
                return L(function (e) {
                    for (var t = [], a = 0; a < e.length; ++a) t.push(255 & e.charCodeAt(a));
                    return t
                }(t), e, a, n)
            }

            function _(e, t, a) {
                return 0 === t && a === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, a))
            }

            function b(e, t, a) {
                a = Math.min(e.length, a);
                for (var n = [], i = t; i < a;) {
                    var o, r, s, c, l = e[i], u = null, d = 239 < l ? 4 : 223 < l ? 3 : 191 < l ? 2 : 1;
                    if (i + d <= a) switch (d) {
                        case 1:
                            l < 128 && (u = l);
                            break;
                        case 2:
                            128 == (192 & (o = e[i + 1])) && 127 < (c = (31 & l) << 6 | 63 & o) && (u = c);
                            break;
                        case 3:
                            o = e[i + 1], r = e[i + 2], 128 == (192 & o) && 128 == (192 & r) && 2047 < (c = (15 & l) << 12 | (63 & o) << 6 | 63 & r) && (c < 55296 || 57343 < c) && (u = c);
                            break;
                        case 4:
                            o = e[i + 1], r = e[i + 2], s = e[i + 3], 128 == (192 & o) && 128 == (192 & r) && 128 == (192 & s) && 65535 < (c = (15 & l) << 18 | (63 & o) << 12 | (63 & r) << 6 | 63 & s) && c < 1114112 && (u = c)
                    }
                    null === u ? (u = 65533, d = 1) : 65535 < u && (u -= 65536, n.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), n.push(u), i += d
                }
                return function (e) {
                    var t = e.length;
                    if (t <= w) return String.fromCharCode.apply(String, e);
                    var a = "", n = 0;
                    for (; n < t;) a += String.fromCharCode.apply(String, e.slice(n, n += w));
                    return a
                }(n)
            }

            O.Buffer = d, O.SlowBuffer = function (e) {
                +e != e && (e = 0);
                return d.alloc(+e)
            }, O.INSPECT_MAX_BYTES = 50, d.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype, foo: function () {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(), O.kMaxLength = a(), d.poolSize = 8192, d._augment = function (e) {
                return e.__proto__ = d.prototype, e
            }, d.from = function (e, t, a) {
                return i(null, e, t, a)
            }, d.TYPED_ARRAY_SUPPORT && (d.prototype.__proto__ = Uint8Array.prototype, d.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && d[Symbol.species] === d && Object.defineProperty(d, Symbol.species, {
                value: null,
                configurable: !0
            })), d.alloc = function (e, t, a) {
                return n = null, o = t, r = a, c(i = e), i <= 0 ? s(n, i) : void 0 !== o ? "string" == typeof r ? s(n, i).fill(o, r) : s(n, i).fill(o) : s(n, i);
                var n, i, o, r
            }, d.allocUnsafe = function (e) {
                return l(null, e)
            }, d.allocUnsafeSlow = function (e) {
                return l(null, e)
            }, d.isBuffer = function (e) {
                return !(null == e || !e._isBuffer)
            }, d.compare = function (e, t) {
                if (!d.isBuffer(e) || !d.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var a = e.length, n = t.length, i = 0, o = Math.min(a, n); i < o; ++i) if (e[i] !== t[i]) {
                    a = e[i], n = t[i];
                    break
                }
                return a < n ? -1 : n < a ? 1 : 0
            }, d.isEncoding = function (e) {
                switch (String(e).toLowerCase()) {
                    case"hex":
                    case"utf8":
                    case"utf-8":
                    case"ascii":
                    case"latin1":
                    case"binary":
                    case"base64":
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, d.concat = function (e, t) {
                if (!r(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return d.alloc(0);
                var a;
                if (void 0 === t) for (a = t = 0; a < e.length; ++a) t += e[a].length;
                var n = d.allocUnsafe(t), i = 0;
                for (a = 0; a < e.length; ++a) {
                    var o = e[a];
                    if (!d.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                    o.copy(n, i), i += o.length
                }
                return n
            }, d.byteLength = g, d.prototype._isBuffer = !0, d.prototype.swap16 = function () {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) p(this, t, t + 1);
                return this
            }, d.prototype.swap32 = function () {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
                return this
            }, d.prototype.swap64 = function () {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
                return this
            }, d.prototype.toString = function () {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? b(this, 0, e) : function (e, t, a) {
                    var n = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === a || a > this.length) && (a = this.length), a <= 0) return "";
                    if ((a >>>= 0) <= (t >>>= 0)) return "";
                    for (e || (e = "utf8"); ;) switch (e) {
                        case"hex":
                            return S(this, t, a);
                        case"utf8":
                        case"utf-8":
                            return b(this, t, a);
                        case"ascii":
                            return A(this, t, a);
                        case"latin1":
                        case"binary":
                            return C(this, t, a);
                        case"base64":
                            return _(this, t, a);
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                            return D(this, t, a);
                        default:
                            if (n) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), n = !0
                    }
                }.apply(this, arguments)
            }, d.prototype.equals = function (e) {
                if (!d.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === d.compare(this, e)
            }, d.prototype.inspect = function () {
                var e = "", t = O.INSPECT_MAX_BYTES;
                return 0 < this.length && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
            }, d.prototype.compare = function (e, t, a, n, i) {
                if (!d.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === a && (a = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || a > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                if (i <= n && a <= t) return 0;
                if (i <= n) return -1;
                if (a <= t) return 1;
                if (this === e) return 0;
                for (var o = (i >>>= 0) - (n >>>= 0), r = (a >>>= 0) - (t >>>= 0), s = Math.min(o, r), c = this.slice(n, i), l = e.slice(t, a), u = 0; u < s; ++u) if (c[u] !== l[u]) {
                    o = c[u], r = l[u];
                    break
                }
                return o < r ? -1 : r < o ? 1 : 0
            }, d.prototype.includes = function (e, t, a) {
                return -1 !== this.indexOf(e, t, a)
            }, d.prototype.indexOf = function (e, t, a) {
                return f(this, e, t, a, !0)
            }, d.prototype.lastIndexOf = function (e, t, a) {
                return f(this, e, t, a, !1)
            }, d.prototype.write = function (e, t, a, n) {
                if (void 0 === t) n = "utf8", a = this.length, t = 0; else if (void 0 === a && "string" == typeof t) n = t, a = this.length, t = 0; else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(a) ? (a |= 0, void 0 === n && (n = "utf8")) : (n = a, a = void 0)
                }
                var i = this.length - t;
                if ((void 0 === a || i < a) && (a = i), 0 < e.length && (a < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var o, r, s, c, l, u, d, h, g, p = !1; ;) switch (n) {
                    case"hex":
                        return v(this, e, t, a);
                    case"utf8":
                    case"utf-8":
                        return h = t, g = a, L(E(e, (d = this).length - h), d, h, g);
                    case"ascii":
                        return y(this, e, t, a);
                    case"latin1":
                    case"binary":
                        return y(this, e, t, a);
                    case"base64":
                        return c = this, l = t, u = a, L(B(e), c, l, u);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return r = t, s = a, L(function (e, t) {
                            for (var a, n, i, o = [], r = 0; r < e.length && !((t -= 2) < 0); ++r) a = e.charCodeAt(r), n = a >> 8, i = a % 256, o.push(i), o.push(n);
                            return o
                        }(e, (o = this).length - r), o, r, s);
                    default:
                        if (p) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), p = !0
                }
            }, d.prototype.toJSON = function () {
                return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
            };
            var w = 4096;

            function A(e, t, a) {
                var n = "";
                a = Math.min(e.length, a);
                for (var i = t; i < a; ++i) n += String.fromCharCode(127 & e[i]);
                return n
            }

            function C(e, t, a) {
                var n = "";
                a = Math.min(e.length, a);
                for (var i = t; i < a; ++i) n += String.fromCharCode(e[i]);
                return n
            }

            function S(e, t, a) {
                var n = e.length;
                (!t || t < 0) && (t = 0), (!a || a < 0 || n < a) && (a = n);
                for (var i = "", o = t; o < a; ++o) i += R(e[o]);
                return i
            }

            function D(e, t, a) {
                for (var n = e.slice(t, a), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                return i
            }

            function P(e, t, a) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (a < e + t) throw new RangeError("Trying to access beyond buffer length")
            }

            function I(e, t, a, n, i, o) {
                if (!d.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (i < t || t < o) throw new RangeError('"value" argument is out of bounds');
                if (a + n > e.length) throw new RangeError("Index out of range")
            }

            function x(e, t, a, n) {
                t < 0 && (t = 65535 + t + 1);
                for (var i = 0, o = Math.min(e.length - a, 2); i < o; ++i) e[a + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
            }

            function k(e, t, a, n) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var i = 0, o = Math.min(e.length - a, 4); i < o; ++i) e[a + i] = t >>> 8 * (n ? i : 3 - i) & 255
            }

            function T(e, t, a, n, i, o) {
                if (a + n > e.length) throw new RangeError("Index out of range");
                if (a < 0) throw new RangeError("Index out of range")
            }

            function N(e, t, a, n, i) {
                return i || T(e, 0, a, 4), o.write(e, t, a, n, 23, 4), a + 4
            }

            function M(e, t, a, n, i) {
                return i || T(e, 0, a, 8), o.write(e, t, a, n, 52, 8), a + 8
            }

            d.prototype.slice = function (e, t) {
                var a, n = this.length;
                if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : n < e && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : n < t && (t = n), t < e && (t = e), d.TYPED_ARRAY_SUPPORT) (a = this.subarray(e, t)).__proto__ = d.prototype; else {
                    var i = t - e;
                    a = new d(i, void 0);
                    for (var o = 0; o < i; ++o) a[o] = this[o + e]
                }
                return a
            }, d.prototype.readUIntLE = function (e, t, a) {
                e |= 0, t |= 0, a || P(e, t, this.length);
                for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                return n
            }, d.prototype.readUIntBE = function (e, t, a) {
                e |= 0, t |= 0, a || P(e, t, this.length);
                for (var n = this[e + --t], i = 1; 0 < t && (i *= 256);) n += this[e + --t] * i;
                return n
            }, d.prototype.readUInt8 = function (e, t) {
                return t || P(e, 1, this.length), this[e]
            }, d.prototype.readUInt16LE = function (e, t) {
                return t || P(e, 2, this.length), this[e] | this[e + 1] << 8
            }, d.prototype.readUInt16BE = function (e, t) {
                return t || P(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, d.prototype.readUInt32LE = function (e, t) {
                return t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, d.prototype.readUInt32BE = function (e, t) {
                return t || P(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, d.prototype.readIntLE = function (e, t, a) {
                e |= 0, t |= 0, a || P(e, t, this.length);
                for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                return (i *= 128) <= n && (n -= Math.pow(2, 8 * t)), n
            }, d.prototype.readIntBE = function (e, t, a) {
                e |= 0, t |= 0, a || P(e, t, this.length);
                for (var n = t, i = 1, o = this[e + --n]; 0 < n && (i *= 256);) o += this[e + --n] * i;
                return (i *= 128) <= o && (o -= Math.pow(2, 8 * t)), o
            }, d.prototype.readInt8 = function (e, t) {
                return t || P(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, d.prototype.readInt16LE = function (e, t) {
                t || P(e, 2, this.length);
                var a = this[e] | this[e + 1] << 8;
                return 32768 & a ? 4294901760 | a : a
            }, d.prototype.readInt16BE = function (e, t) {
                t || P(e, 2, this.length);
                var a = this[e + 1] | this[e] << 8;
                return 32768 & a ? 4294901760 | a : a
            }, d.prototype.readInt32LE = function (e, t) {
                return t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, d.prototype.readInt32BE = function (e, t) {
                return t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, d.prototype.readFloatLE = function (e, t) {
                return t || P(e, 4, this.length), o.read(this, e, !0, 23, 4)
            }, d.prototype.readFloatBE = function (e, t) {
                return t || P(e, 4, this.length), o.read(this, e, !1, 23, 4)
            }, d.prototype.readDoubleLE = function (e, t) {
                return t || P(e, 8, this.length), o.read(this, e, !0, 52, 8)
            }, d.prototype.readDoubleBE = function (e, t) {
                return t || P(e, 8, this.length), o.read(this, e, !1, 52, 8)
            }, d.prototype.writeUIntLE = function (e, t, a, n) {
                (e = +e, t |= 0, a |= 0, n) || I(this, e, t, a, Math.pow(2, 8 * a) - 1, 0);
                var i = 1, o = 0;
                for (this[t] = 255 & e; ++o < a && (i *= 256);) this[t + o] = e / i & 255;
                return t + a
            }, d.prototype.writeUIntBE = function (e, t, a, n) {
                (e = +e, t |= 0, a |= 0, n) || I(this, e, t, a, Math.pow(2, 8 * a) - 1, 0);
                var i = a - 1, o = 1;
                for (this[t + i] = 255 & e; 0 <= --i && (o *= 256);) this[t + i] = e / o & 255;
                return t + a
            }, d.prototype.writeUInt8 = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 1, 255, 0), d.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, d.prototype.writeUInt16LE = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 2, 65535, 0), d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : x(this, e, t, !0), t + 2
            }, d.prototype.writeUInt16BE = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 2, 65535, 0), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : x(this, e, t, !1), t + 2
            }, d.prototype.writeUInt32LE = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 4, 4294967295, 0), d.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : k(this, e, t, !0), t + 4
            }, d.prototype.writeUInt32BE = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 4, 4294967295, 0), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : k(this, e, t, !1), t + 4
            }, d.prototype.writeIntLE = function (e, t, a, n) {
                if (e = +e, t |= 0, !n) {
                    var i = Math.pow(2, 8 * a - 1);
                    I(this, e, t, a, i - 1, -i)
                }
                var o = 0, r = 1, s = 0;
                for (this[t] = 255 & e; ++o < a && (r *= 256);) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / r >> 0) - s & 255;
                return t + a
            }, d.prototype.writeIntBE = function (e, t, a, n) {
                if (e = +e, t |= 0, !n) {
                    var i = Math.pow(2, 8 * a - 1);
                    I(this, e, t, a, i - 1, -i)
                }
                var o = a - 1, r = 1, s = 0;
                for (this[t + o] = 255 & e; 0 <= --o && (r *= 256);) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / r >> 0) - s & 255;
                return t + a
            }, d.prototype.writeInt8 = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 1, 127, -128), d.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, d.prototype.writeInt16LE = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 2, 32767, -32768), d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : x(this, e, t, !0), t + 2
            }, d.prototype.writeInt16BE = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 2, 32767, -32768), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : x(this, e, t, !1), t + 2
            }, d.prototype.writeInt32LE = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 4, 2147483647, -2147483648), d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : k(this, e, t, !0), t + 4
            }, d.prototype.writeInt32BE = function (e, t, a) {
                return e = +e, t |= 0, a || I(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : k(this, e, t, !1), t + 4
            }, d.prototype.writeFloatLE = function (e, t, a) {
                return N(this, e, t, !0, a)
            }, d.prototype.writeFloatBE = function (e, t, a) {
                return N(this, e, t, !1, a)
            }, d.prototype.writeDoubleLE = function (e, t, a) {
                return M(this, e, t, !0, a)
            }, d.prototype.writeDoubleBE = function (e, t, a) {
                return M(this, e, t, !1, a)
            }, d.prototype.copy = function (e, t, a, n) {
                if (a || (a = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), 0 < n && n < a && (n = a), n === a) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (a < 0 || a >= this.length) throw new RangeError("sourceStart out of bounds");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - a && (n = e.length - t + a);
                var i, o = n - a;
                if (this === e && a < t && t < n) for (i = o - 1; 0 <= i; --i) e[i + t] = this[i + a]; else if (o < 1e3 || !d.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) e[i + t] = this[i + a]; else Uint8Array.prototype.set.call(e, this.subarray(a, a + o), t);
                return o
            }, d.prototype.fill = function (e, t, a, n) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (n = t, t = 0, a = this.length) : "string" == typeof a && (n = a, a = this.length), 1 === e.length) {
                        var i = e.charCodeAt(0);
                        i < 256 && (e = i)
                    }
                    if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !d.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < a) throw new RangeError("Out of range index");
                if (a <= t) return this;
                var o;
                if (t >>>= 0, a = void 0 === a ? this.length : a >>> 0, e || (e = 0), "number" == typeof e) for (o = t; o < a; ++o) this[o] = e; else {
                    var r = d.isBuffer(e) ? e : E(new d(e, n).toString()), s = r.length;
                    for (o = 0; o < a - t; ++o) this[o + t] = r[o % s]
                }
                return this
            };
            var F = /[^+\/0-9A-Za-z-_]/g;

            function R(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function E(e, t) {
                var a;
                t = t || 1 / 0;
                for (var n = e.length, i = null, o = [], r = 0; r < n; ++r) {
                    if (55295 < (a = e.charCodeAt(r)) && a < 57344) {
                        if (!i) {
                            if (56319 < a) {
                                -1 < (t -= 3) && o.push(239, 191, 189);
                                continue
                            }
                            if (r + 1 === n) {
                                -1 < (t -= 3) && o.push(239, 191, 189);
                                continue
                            }
                            i = a;
                            continue
                        }
                        if (a < 56320) {
                            -1 < (t -= 3) && o.push(239, 191, 189), i = a;
                            continue
                        }
                        a = 65536 + (i - 55296 << 10 | a - 56320)
                    } else i && -1 < (t -= 3) && o.push(239, 191, 189);
                    if (i = null, a < 128) {
                        if ((t -= 1) < 0) break;
                        o.push(a)
                    } else if (a < 2048) {
                        if ((t -= 2) < 0) break;
                        o.push(a >> 6 | 192, 63 & a | 128)
                    } else if (a < 65536) {
                        if ((t -= 3) < 0) break;
                        o.push(a >> 12 | 224, a >> 6 & 63 | 128, 63 & a | 128)
                    } else {
                        if (!(a < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        o.push(a >> 18 | 240, a >> 12 & 63 | 128, a >> 6 & 63 | 128, 63 & a | 128)
                    }
                }
                return o
            }

            function B(e) {
                return n.toByteArray(function (e) {
                    var t;
                    if ((e = (t = e, t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")).replace(F, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function L(e, t, a, n) {
                for (var i = 0; i < n && !(i + a >= t.length || i >= e.length); ++i) t[i + a] = e[i];
                return i
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"base64-js": 1, ieee754: 4, isarray: 3}],
    3: [function (e, t, a) {
        var n = {}.toString;
        t.exports = Array.isArray || function (e) {
            return "[object Array]" == n.call(e)
        }
    }, {}],
    4: [function (e, t, a) {
        a.read = function (e, t, a, n, i) {
            var o, r, s = 8 * i - n - 1, c = (1 << s) - 1, l = c >> 1, u = -7, d = a ? i - 1 : 0, h = a ? -1 : 1,
                g = e[t + d];
            for (d += h, o = g & (1 << -u) - 1, g >>= -u, u += s; 0 < u; o = 256 * o + e[t + d], d += h, u -= 8) ;
            for (r = o & (1 << -u) - 1, o >>= -u, u += n; 0 < u; r = 256 * r + e[t + d], d += h, u -= 8) ;
            if (0 === o) o = 1 - l; else {
                if (o === c) return r ? NaN : 1 / 0 * (g ? -1 : 1);
                r += Math.pow(2, n), o -= l
            }
            return (g ? -1 : 1) * r * Math.pow(2, o - n)
        }, a.write = function (e, t, a, n, i, o) {
            var r, s, c, l = 8 * o - i - 1, u = (1 << l) - 1, d = u >> 1,
                h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, g = n ? 0 : o - 1, p = n ? 1 : -1,
                f = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, r = u) : (r = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -r)) < 1 && (r--, c *= 2), 2 <= (t += 1 <= r + d ? h / c : h * Math.pow(2, 1 - d)) * c && (r++, c /= 2), u <= r + d ? (s = 0, r = u) : 1 <= r + d ? (s = (t * c - 1) * Math.pow(2, i), r += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, i), r = 0)); 8 <= i; e[a + g] = 255 & s, g += p, s /= 256, i -= 8) ;
            for (r = r << i | s, l += i; 0 < l; e[a + g] = 255 & r, g += p, r /= 256, l -= 8) ;
            e[a + g - p] |= 128 * f
        }
    }, {}],
    CoinGot: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "c9c80015J5NXpvX7Aefelxv", "CoinGot");
        e("analytics-data"), e("instant-util"), e("number-util");
        cc.Class({
            extends: cc.Component, properties: {rewardlabel: cc.Label}, onLoad: function () {
                console.log("222", this.node);
            }, setData: function (e, t) {
                this.rewardlabel.string = "+ " + e, this.rewardValue = e, this.callback = t
            }, aquireReward: function () {
                this.rewardValue
            }, onButtonShare: function (e, t) {
                this.closeDialog()
            }, closeDialog: function () {
                this.callback && this.callback(), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").closeCoinGotPopUp()
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    DailyBonusAgain: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "d1ff2m9O4tPvqc6NlOmlN9Z", "DailyBonusAgain");
        var r = e("analytics-data"), s = e("instant-util");
        e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {shareNode: cc.Node, videoNode: cc.Node, coinSprite: [cc.Sprite], rewardlabel: cc.Label},
            onLoad: function () {
                console.log("333", this.node);
                uiManager.seekNodeWithName("tittleLabel", this.node).active = false;
            },
            setData: function (e, t) {
                this.rewardlabel.string = "+ " + t.value, this.rewardValue = t, this.fatherSrc = e;
                for (var a = 0; a < this.coinSprite.length; a++) this.coinSprite[a].node.active = !1;
                this.coinSprite[t.type - 1].node.active = !0, this.shareNode.active = !1, this.videoNode.active = !1, globalManager.canShare(globalManager.shareType.dailyBonusAgain, {level: playerManager.getNumData("UnlockLevel")}) ? (this.getRewardType = 1, this.shareNode.active = !0) : (this.getRewardType = 2, this.videoNode.active = !0)
            },
            aquireReward: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"), t = this.rewardValue;
                1 == t.type ? (playerManager.addNumData("Diamond", t.value), cc.director.emit("updateDiamond")) : 2 == t.type && playerManager.addNumData("Ticket", t.value), e.showDiamondGotPopUp(t, 1)
            },
            onButtonShare: function (e, t) {
                var a = this, n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"),
                    i = {type: globalManager.shareType.dailyBonusAgain, inviter: /*s.getPlayerID()*/"", rewards: "1"};
                if (1 == this.getRewardType) {
                    var o = globalManager.getShareConfig(globalManager.shareType.dailyBonusAgain);
                    r.share_claimed_diamond_again_event(), s.chooseContext(function (e) {
                        r.share_claimed_diamond_again_success_event(), a.aquireReward(), a.closeDialog()
                    }, function (e, t) {
                        null != t && n.showToast(t)
                    }.bind(a), i, o.text, o.img)
                } else 2 == this.getRewardType && (r.watch_video_claimed_diamond_again_event()/*, s.showRewardAd(function () {
                    cc.log("showAd success"), r.watch_video_claimed_diamond_again_success_event(), a.aquireReward(), a.closeDialog()
                }, function () {
                    cc.log("RewardAd load err"), 1 == globalManager.canShowReward ? n.showToast("No available Ad right now, try again later.") : n.showToast("The web page does not currently support ads.")
                })*/)
            },
            closeDialog: function () {
                this.fatherSrc.closeDailyBonusAgain()
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    Daily_CheckIn: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "cb84dwVoURJn7Y5ap/KxwKw", "Daily_CheckIn");
        var r = e("analytics-data"), s = e("instant-util");
        e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                getSprite: cc.Sprite,
                bgSprite: cc.Node,
                rewardNode: cc.Node,
                shareBtn: cc.Button,
                videoBtn: cc.Button,
                dailybonusagain: cc.Prefab,
                getBtn: [cc.Button],
                bgSprites: [cc.Sprite],
                ylSprite: [cc.Sprite],
                gouSprite: [cc.Sprite],
                coinSprite: [cc.Sprite],
                dayslabel: [cc.Label],
                valuelabel: [cc.Label]
            },
            onLoad: function () {

                console.log("444", this.node);
                this.shareBtn.node.active = !1, this.videoBtn.node.active = !1, globalManager.canShare(globalManager.shareType.dailyCheckin, {level: playerManager.getNumData("UnlockLevel")}) ? this.rewardType = 1 : this.rewardType = 2, this.setData()
            },
            setData: function () {
                globalManager.scaleOffset;
                var e = cc.view.getFrameSize(), t = 1334 * e.width / 750 / e.height;
                this.rewardNode.scale = 1 < t ? 1 : t;
                for (var a = 0; a < this.gouSprite.length; a++) this.gouSprite[a].node.active = !1, this.getBtn[a].node.active = !1;
                for (a = 0; a < this.gouSprite.length; a++) this.valuelabel[a].node.active = !0, this.valuelabel[a].string = "x" + gameData.getDailyBonusReward(a).value;
                var n = playerManager.getNumData("dailyReward");
                n < 0 && (n = 0);
                var i = n % this.gouSprite.length;
                0 == i && 1 == playerManager.getNumData("dailyRewardCan") && (i = 7);
                for (a = 0; a < i; a++) this.valuelabel[a].node.active = !1, this.gouSprite[a].node.active = !0;
                1 == playerManager.getNumData("dailyRewardCan") ? (this.valuelabel[i - 1].node.active = !1, this.gouSprite[i - 1].node.active = !0, this.ylSprite[i - 1].node.active = !1, this.shareBtn.node.active = !1, this.videoBtn.node.active = !1, this.getSprite.node.active = !0, this.dayslabel[i - 1].node.getComponent(cc.LabelOutline).color = new cc.color(56, 93, 129, 255)) : (this.valuelabel[i].node.active = !0, this.gouSprite[i].node.active = !1, this.getBtn[i].node.active = !0, this.ylSprite[i].node.active = !0, this.dayslabel[i].node.getComponent(cc.LabelOutline).color = new cc.color(185, 121, 36, 255), this.valuelabel[i].node.color = new cc.color(183, 73, 19, 255), this.valuelabel[i].node.getComponent(cc.LabelOutline).color = new cc.color(183, 73, 19, 255), 1 == this.rewardType ? this.shareBtn.node.active = !0 : 2 == this.rewardType && (this.videoBtn.node.active = !0), this.getSprite.node.active = !1)
            },
            aquireReward: function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                    a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                if (0 == playerManager.getNumData("dailyRewardCan")) {
                    r.daily_claimed_event();
                    var n = playerManager.getNumData("dailyReward");
                    n < 0 && (n = 0);
                    var i = n % this.gouSprite.length, o = gameData.getDailyBonusReward(i);
                    playerManager.addNumData("dailyReward", 1), playerManager.setNumData("dailyRewardCan", 1), 1 == o.type ? (playerManager.addNumData("Diamond", o.value * t), cc.director.emit("updateDiamond")) : 2 <= o.type && o.type <= 3 && playerManager.addNumData("Ticket", o.value * t), this.showDailyBonusAgain(o), a.showDiamondGotPopUp(o, t), a.checkDaily()
                }
                this.setData()
            },
            onButtonShare: function (e, t) {
                console.log("onButtonShare=====")

                // var a = this, n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"),
                //     i = {type: globalManager.shareType.dailyCheckin, inviter: ""/*s.getPlayerID()*/, rewards: "1"},
                //     o = globalManager.getShareConfig(globalManager.shareType.dailyCheckin);
                // 1 == this.rewardType ? (r.share_double_claimed_diamond_event(), s.chooseContext(function (e) {
                //     r.share_double_claimed_diamond_success_event(), a.aquireReward(null, 2)
                // }, function (e, t) {
                //     null != t && n.showToast(t)
                // }.bind(a), i, o.text, o.img)) : 2 == this.rewardType && (r.watch_video_double_claimed_diamond_event(), s.showRewardAd(function () {
                //     cc.log("showAd success"), r.watch_video_double_claimed_diamond_success_event(), a.aquireReward(null, 2)
                // }, function () {
                //     cc.log("RewardAd load err"), 1 == globalManager.canShowReward ? n.showToast("No available Ad right now, try again later.") : n.showToast("The web page does not currently support ads.")
                // }))
            },
            showDailyBonusAgain: function (e) {
                null != this.dailybonusagain_dlg && (this.dailybonusagain_dlg.destroy(!0), this.dailybonusagain_dlg = null), this.dailybonusagain_dlg = cc.instantiate(this.dailybonusagain), this.dailybonusagain_dlg.parent = this.node, this.dailybonusagain_dlg.getComponent("DailyBonusAgain").setData(this, e)
            },
            closeDailyBonusAgain: function () {
                null != this.dailybonusagain_dlg && (this.dailybonusagain_dlg.destroy(!0), this.dailybonusagain_dlg = null)
            },
            closeDialog: function () {
                this.node.active = !1
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    DiamondGot: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "c308eq4IgdALoBpdzfE2yu4", "DiamondGot");
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        e("analytics-data"), e("instant-util"), e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {coinSprite: [cc.Sprite], rewardlabel: cc.Label},
            onLoad: function () {
                console.log("555", this.node);
            },
            setData: function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1, a = arguments[2];
                this.rewardValue = e, this.callback = a;
                for (var n = 0; n < this.coinSprite.length; n++) this.coinSprite[n].node.active = !1;
                "object" == (void 0 === e ? "undefined" : i(e)) ? (this.rewardlabel.string = "+ " + e.value * t, this.coinSprite[e.type - 1].node.active = !0) : (this.rewardlabel.string = "+ " + e * t, this.coinSprite[0].node.active = !0)
            },
            aquireReward: function () {
                this.rewardValue
            },
            onButtonShare: function (e, t) {
                this.closeDialog()
            },
            closeDialog: function () {
                this.callback && this.callback(), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").closeDiamondGotPopUp()
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    GameItemNodeCache: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "e152d9C35tFTprqe+GejRVR", "GameItemNodeCache");
        cc.Class({
            extends: cc.Component, properties: {itemFrame2: [cc.SpriteFrame]}, onLoad: function () {
            }, loadRes: function (r) {
                var s = this;
                cc.loader.loadResDir("P", cc.SpriteFrame, function (e, t, a) {
                    for (var n in t) {
                        var i = t[n], o = i._name;
                        o = o.slice(1), o = parseInt(o) - 1, s.itemFrame2[o] = i
                    }
                    r && r()
                })
            }, getItemFrame: function (e) {
                return this.itemFrame2[e]
            }
        }), cc._RF.pop()
    }, {}],
    GameItemNode: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "05338ua06pJnI5SNuFb3D/7", "GameItemNode");
        e("GameItemNodeCache");
        var n = e("number-util"), i = e("analytics-data");
        e("fbinstant-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                nodeId: 0,
                startnode: cc.Prefab,
                opennode: cc.Prefab,
                effectupgrade: cc.Prefab,
                effectmerge: cc.Prefab,
                hc_oknode: cc.Prefab,
                hc_startnode: cc.Prefab,
                expanimpre: cc.Prefab,
                spGreyItem: cc.Sprite,
                spItem: cc.Sprite,
                addlabel: cc.Label,
                levellabel: cc.Label,
                brandNode: cc.Node,
                addcoinanim: cc.Animation
            },
            onLoad: function () {
                this.oriOpacity = 150, this.oriScale = this.spItem.node.scale, this.addTouchEvent(this.spItem), this.isCanPut = !0, this.isBoxNode = !1, this.spGreyItem.node.active = !1, this.spItem.node.active = !1, this.spItem.node.opacity = 255, this.brandNode.active = !1, this.canTouch = !1, this.itemId = -1, this.curTime = 0, this.maxTime = 0;
                playerManager.setObjData("animTutorial", 0);
            },
            update: function (e) {
                -1 != this.itemId && 0 < this.maxTime && (this.curTime += e, 0 < playerManager.getNumData("AcelTime") && (this.curTime += e / 2), this.curTime >= this.maxTime && (this.curTime = 0, this.addCoin()))
            },
            addCoin: function () {
                var e = fish_data[this.itemId].coinround;
                0 < playerManager.getNumData("AcelTime") && (e = n.galaxyMut(e, 1.3333)), this.addlabel.string = "+" + n.unit_format(e), this.addcoinanim.play("house_addcoin", 0), playerManager.addNumData("Coin", fish_data[this.itemId].coinround), playerManager.addNumData("TotalCoin", fish_data[this.itemId].coinround), cc.director.emit("updateCoin"), cc.director.emit("effectCoin");
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").playSound("coins")
            },
            addHCOK: function (e, t) {
                this.removeHCOK(), this.hc_oknodeeff = cc.instantiate(this.hc_oknode), this.hc_oknodeeff.getComponent("HC_OK").setData(e, t), this.node.addChild(this.hc_oknodeeff, 1)
            },
            removeHCOK: function () {
                null != this.hc_oknodeeff && (this.hc_oknodeeff.destroy(), this.hc_oknodeeff = null)
            },
            addHCStart: function () {
                null != this.hc_startnodeeff && (cc.log("addHCStart"), this.hc_startnodeeff = cc.instantiate(this.hc_startnode), this.node.addChild(this.hc_startnodeeff, 1))
            },
            removeHCStart: function () {
                null != this.hc_startnodeeff && (cc.log("removeHCStart"), this.hc_startnodeeff.destroy(), this.hc_startnodeeff = null)
            },
            addChatDlg: function (e) {
                if (!(this.itemId < 0)) {
                    var t = this.node.x < 0 ? 0 : 1, a = cc.instantiate(e);
                    a.getComponent("chat_dlg").setData(t, this.itemId), a.x = this.node.x, a.y = this.node.y, a.setLocalZOrder(51), this.node.parent.addChild(a)
                }
            },
            addTouchEvent: function (r) {
                var s, c, l = this, u = 10;
                r.node.on("touchstart", function (e) {
                    1 == l.canTouch && (1 == playerManager.getObjData("animTutorial") && 0 == l.nodeId || (s = r.node.x, c = r.node.y))
                }, r), r.node.on("touchmove", function (e) {
                    if (1 == l.canTouch && (1 != playerManager.getObjData("animTutorial") || 0 != l.nodeId)) {
                        var t = e.getDeltaX(), a = e.getDeltaY();
                        if (r.node.x += t, r.node.y += a, 50 != r.node.getLocalZOrder()) {
                            var n = cc.v2(r.node.x, r.node.y), i = cc.v2(s, c), o = cc.pDistance(n, i);
                            u < o && (l.node.setLocalZOrder(50), l.spGreyItem.node.active = !0)
                        } else r.node.getLocalZOrder()
                    }
                }, r), r.node.on("touchend", function (e) {
                    if (cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").playButtonSound(), 50 != l.node.getLocalZOrder()) 255 != l.spItem.node.opacity && (l.spItem.node.opacity = 255, l.canTouch = !0, l.father.removeItemFromPaodao(l.itemId, l.nodeId)), l.node.setLocalZOrder(l.nodeId); else if (50 == l.node.getLocalZOrder()) {
                        var t = l.getDragPosId({x: r.node.x, y: r.node.y});
                        console.log("touchend=======", playerManager.getObjData("animTutorial"), t)
                        - 2 == t && 1 != playerManager.getObjData("animTutorial") ? l.dragToRecycle() : -1 == t ? (l.dragToPaodao(), r.node.y = l.oriPos.y, r.node.x = l.oriPos.x, l.node.setLocalZOrder(l.nodeId)) : 0 <= t && t <= l.father.scriptGameItemNode.length - 1 && 1 != playerManager.getObjData("animTutorial") || 0 == t && 1 == playerManager.getObjData("animTutorial") ? l.dragToOther(t, function () {
                            r.node.y = l.oriPos.y, r.node.x = l.oriPos.x, l.node.setLocalZOrder(l.nodeId)
                        }) : (r.node.y = l.oriPos.y, r.node.x = l.oriPos.x, l.node.setLocalZOrder(l.nodeId))
                    }
                    l.removeHCStart(), l.spGreyItem.node.active = !1
                }, r)
            },
            setParam: function (e, t, a, n) {
                this.father = e, this.node.setLocalZOrder(this.nodeId), this.refreshSellMatrix(a), this.refreshposition(), null == this.oriPos && (this.oriPos = {}, this.oriPos.x = this.spItem.node.x, this.oriPos.y = this.spItem.node.y, this.oriPos.w = this.spItem.node.width, this.oriPos.h = this.spItem.node.height, this.oriOpacity = 150, this.oriScale = this.spItem.node.scale, this.isCanPut = !0, this.isBoxNode = !1, this.spGreyItem.node.active = !1, this.spItem.node.active = !1, this.spItem.node.opacity = 255, this.canTouch = !1, this.itemId = -1, this.maxTime = 0)
            },
            refreshposition: function () {
                this.dragMatrix = this.getDragMatrix(this.nodeId)
            },
            refreshSellMatrix: function (e) {
                this.laySellSize = e, this.laySellMatrix = {
                    bl: {
                        x: this.laySellSize.x - this.node.x - this.laySellSize.width / 2,
                        y: this.laySellSize.y - this.node.y - this.laySellSize.height / 2
                    },
                    tr: {
                        x: this.laySellSize.x - this.node.x + this.laySellSize.width / 2,
                        y: this.laySellSize.y - this.node.y + this.laySellSize.height / 2
                    }
                }
            },
            refreshBrand: function () {
                0 <= this.itemId ? (this.levellabel.string = this.itemId + 1 + "", this.brandNode.active = !0) : (this.levellabel.string = "", this.brandNode.active = !1)
            },
            refreshLand: function (e) {
                this.node.active = e
            },
            getDragMatrix: function (e) {
                for (var t = [], a = -1 * Math.floor(e / 4), n = e % 4 * -1, i = 0; i <= this.father.scriptGameItemNode.length - 1; i++) {
                    var o = Math.floor(i / 4), r = i % 4,
                        s = {index: i, pos: {x: 0, y: 0}, bl: {x: 0, y: 0}, tr: {x: 0, y: 0}};
                    s.pos.x = 160 * (n + r), s.pos.y = -150 * (a + o), s.bl.x = 160 * (n + r) - 60, s.bl.y = -150 * (a + o) - 90, s.tr.x = 160 * (n + r) + 60, s.tr.y = -150 * (a + o) + 90, t.push(s)
                }
                return t
            },
            getDragPosId: function (e) {
                var t = -100;
                if (this.father.refreshSellMatrix(), 1 == this.isInRect(e, this.laySellMatrix)) return -2;
                for (var a = this.dragMatrix.length - 1; 0 <= a; a--) {
                    var n = this.dragMatrix[a];
                    if (1 == this.isInRect(e, n)) {
                        t = n.index;
                        break
                    }
                }
                return t
            },
            isInRect: function (e, t) {
                return e.x >= t.bl.x && e.y >= t.bl.y && e.x <= t.tr.x && e.y <= t.tr.y
            },
            dragToRecycle: function () {
                i.delete_frequency_event();
                var e = fish_data[this.itemId].sellprice,
                    t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"),
                    a = cc.instantiate(t.effgetcoinPre);
                a.parent = this.node, a.x = (this.laySellMatrix.bl.x + this.laySellMatrix.tr.x) / 2, a.y = (this.laySellMatrix.bl.y + this.laySellMatrix.tr.y) / 2, this.removeItemFromPanel(), playerManager.addNumData("Coin", e), playerManager.addNumData("TotalCoin", e), cc.director.emit("updateCoin"), cc.director.emit("effectCoin"), t.startRecycleAddCoinEffect(e)
            },
            dragToPaodao: function () {
                this.father.isRiverFull() || (this.spItem.node.opacity = this.oriOpacity, this.canTouch = !1, this.father.addItemToPaodao(this.itemId, this.nodeId), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").playRaceStartSound())
            },
            dragToOther: function (e, t) {
                var a = this, n = this.father.getItemNodeByNodeId(e), i = playerManager.getObjData("Panel" + a.nodeId);
                if (-1 == n.itemId && 1 == n.node.active) {
                    n.moveItemToPanel(a.itemId, i.price);
                    var o = cc.sequence(cc.scaleTo(.03, 1 * this.oriScale, 1 * this.oriScale), cc.scaleTo(.03, 1.2 * this.oriScale, 1.2 * this.oriScale), cc.scaleTo(.05, 1 * this.oriScale, 1 * this.oriScale), cc.moveTo(.03, this.dragMatrix[e].pos.x, this.dragMatrix[e].pos.y), cc.callFunc(function () {
                        n.spItem.node.opacity = 255, a.itemId = -1, a.removeItemFromPanel()
                    }, a));
                    this.spItem.node.runAction(o)
                } else if (this.itemId == n.itemId && 255 == n.spItem.node.opacity && n.itemId != fish_data.length - 1 && e != a.nodeId && 1 == n.node.active && 0 == n.isBoxNode) {
                    var r = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                    r.playMergeSound();
                    var s = fish_data[a.itemId + 1].price;
                    n.moveItemToPanel(a.itemId + 1, "-" + s), this.conbinAnimation(e, this.itemId, function () {
                        n.spItem.node.opacity = 0, a.itemId = -1, a.removeItemFromPanel(), n.addHCOK(n.itemId, function () {
                            n.spItem.node.opacity = 255, n.removeHCOK(), 1 == playerManager.getObjData("animTutorial") && cc.director.emit("nextTutorial2")
                        })
                    }, function () {
                        n.getExp(), n.itemId > playerManager.getNumData("UnlockLevel") && (playerManager.addNumData("UnlockLevel", 1), r.showUnlockDialog(playerManager.getNumData("UnlockLevel")), r.playUnlockSound())
                    }), globalManager.addTaskProgress(globalManager.taskType.mergeTimes)
                } else if (this.itemId != n.itemId && 255 == n.spItem.node.opacity && e != a.nodeId && 1 == n.node.active && 0 == n.isBoxNode) {
                    var c = n.itemId;
                    i = playerManager.getObjData("Panel" + a.nodeId);
                    n.moveItemToPanel(a.itemId, i.price), n.spItem.node.opacity = 255, i = playerManager.getObjData("Panel" + e), this.moveItemToPanel(c, i.price), this.spItem.node.opacity = 255
                } else t && t()
            },
            checkMerge: function (e) {
                var t = this.father.getItemNodeByNodeId(e);
                playerManager.getObjData("Panel" + this.nodeId);
                if (-1 == t.itemId && 1 == t.node.active) ; else if (this.itemId == t.itemId && 255 == t.spItem.node.opacity && t.itemId != fish_data.length - 1 && e != this.nodeId && 1 == t.node.active) return t.addHCStart(), !0;
                return !1
            },
            conbinAnimation: function (e, t, a, n) {
                var i = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache"),
                    o = this.father.getItemNodeByNodeId(e), r = new cc.Node("effectNode1"),
                    s = r.addComponent(cc.Sprite);
                s.spriteFrame = i.getItemFrame(t), s.type = cc.Sprite.Type.SIMPLE, s.sizeMode = cc.Sprite.SizeMode.TRIMMED, r.scaleX = 1, r.scaleY = 1, r.x = this.dragMatrix[e].pos.x, r.y = this.spItem.node.y, r.anchorY = 0, this.node.addChild(r);
                var c = cc.sequence(cc.moveTo(.1, r.x - 100, r.y), cc.moveTo(.2, r.x, r.y), cc.removeSelf());
                r.runAction(c);
                var l = new cc.Node("effectNode2"), u = l.addComponent(cc.Sprite);
                u.spriteFrame = i.getItemFrame(t), u.type = cc.Sprite.Type.SIMPLE, u.sizeMode = cc.Sprite.SizeMode.TRIMMED, l.scaleX = 1, l.scaleY = 1, l.x = this.dragMatrix[e].pos.x, l.y = this.spItem.node.y, l.anchorY = 0, this.node.addChild(l);
                var d = cc.sequence(cc.callFunc(function () {
                    n && n()
                }, this), cc.moveTo(.1, l.x + 100, l.y), cc.moveTo(.2, l.x, l.y), cc.callFunc(function () {
                    a && a()
                }, this), cc.removeSelf());
                l.runAction(d);
                var h = cc.instantiate(this.effectmerge);
                o.node.addChild(h), h.setLocalZOrder(100)
            },
            addExpAnimation: function () {
                var e = cc.instantiate(this.expanimpre);
                e.parent = this.node;
                var t = cc.sequence(cc.moveTo(.4, this.expStarPos.x, this.expStarPos.y), cc.delayTime(1), cc.removeSelf());
                e.runAction(t)
            },
            loadItemToPanel: function (e) {
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                this.itemId = e, this.maxTime = fish_data[e].time, this.spGreyItem.spriteFrame = t.getItemFrame(e), this.spGreyItem.node.active = !1, this.spItem.spriteFrame = t.getItemFrame(e), this.spItem.node.active = !0, this.refreshBrand(), this.isCanPut = !1, this.canTouch = !0;
                var a = gameData.getHousePanelPos(e);
                this.oriPos.x = a.posX, this.oriPos.y = a.posY, this.spItem.node.x = this.oriPos.x, this.spItem.node.y = this.oriPos.y, this.node.setLocalZOrder(this.nodeId)
            },
            addItemToPanel: function (n, e, i, o) {
                var r = this, s = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache"),
                    c = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.itemId = n, this.maxTime = fish_data[n].time, this.spGreyItem.spriteFrame = s.getItemFrame(n), this.spItem.spriteFrame = s.getItemFrame(n), this.spItem.node.active = !0, this.isCanPut = !1, this.canTouch = !0;
                var t = gameData.getHousePanelPos(n);
                this.oriPos.x = t.posX, this.oriPos.y = t.posY, this.spItem.node.x = this.father.btnBuy.node.x - this.node.x, this.spItem.node.y = this.father.btnBuy.node.y - this.node.y, this.node.setLocalZOrder(50);
                var a = cc.sequence(cc.moveTo(.15, this.oriPos.x, this.oriPos.y), cc.callFunc(function () {
                    r.refreshBrand();
                    var e = playerManager.getNumData("UnlockLevel");
                    if ("buy" == i && 4 <= e) {
                        var t = 100 * Math.random();
                        cc.log("buy random" + t);
                        var a = t <= globalManager.UpgradeBuy;
                        1 == o ? c.showUpgradeCarPopUp(n, 2, function (e) {
                            r.itemId = e, r.spGreyItem.spriteFrame = s.getItemFrame(e), r.spItem.spriteFrame = s.getItemFrame(e), playerManager.setObjData("Panel" + r.nodeId, {
                                level: e,
                                state: 0,
                                price: "0"
                            }), r.addUpgradeEffect(), c.scriptGamePaodao.refreshCoin(), r.refreshBrand()
                        }) : a && c.showUpgradeCarPopUp(n, 1, function (e) {
                            r.itemId = e, r.spGreyItem.spriteFrame = s.getItemFrame(e), r.spItem.spriteFrame = s.getItemFrame(e), playerManager.setObjData("Panel" + r.nodeId, {
                                level: e,
                                state: 0,
                                price: "0"
                            }), r.addUpgradeEffect(), c.scriptGamePaodao.refreshCoin(), r.refreshBrand()
                        })
                    }
                }, r), cc.scaleTo(.1, 1 * this.oriScale, 1 * this.oriScale), cc.scaleTo(.1, 1.2 * this.oriScale, 1.2 * this.oriScale), cc.scaleTo(.2, 1 * this.oriScale, 1 * this.oriScale), cc.callFunc(function () {
                    r.spGreyItem.node.active = !1, r.node.setLocalZOrder(r.nodeId)
                }, r));
                this.spItem.node.runAction(a), playerManager.setObjData("Panel" + r.nodeId, {
                    level: n,
                    state: 0,
                    price: "" + e
                })
            },
            addItemToPanelFromBox: function (n, e) {
                var i = this, o = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                this.itemId = n, i.spGreyItem.spriteFrame = o.getItemFrame(n), i.spGreyItem.node.active = !1, this.spItem.spriteFrame = o.getItemFrame(n), this.spItem.node.active = !1, this.isCanPut = !1, this.isBoxNode = !0, this.canTouch = !0;
                var t = gameData.getHousePanelPos(n);
                this.oriPos.x = t.posX, this.oriPos.y = t.posY, this.spItem.node.x = this.oriPos.x, this.spItem.node.y = this.oriPos.y, this.node.setLocalZOrder(this.nodeId);
                var r = cc.instantiate(this.startnode);
                r.parent = this.node, r.y = 40, r.getComponent("HZ_start").setData(e, function () {
                    r.removeFromParent(!0);
                    var a = cc.instantiate(i.opennode);
                    a.parent = i.node, a.y = 40, a.getComponent("HZ_open").setData(e, function () {
                        a.removeFromParent(!0), i.spGreyItem.node.active = !1, i.spItem.node.active = !0;
                        var e = playerManager.getNumData("UnlockLevel");
                        if (i.refreshBrand(), i.isBoxNode = !1, 4 <= e) {
                            var t = 100 * Math.random();
                            if (cc.log("box random" + t), t <= globalManager.UpgradeBox) cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showUpgradeCarPopUp(n, 2, function (e) {
                                i.itemId = e, i.spGreyItem.spriteFrame = o.getItemFrame(e), i.spItem.spriteFrame = o.getItemFrame(e), playerManager.setObjData("Panel" + i.nodeId, {
                                    level: e,
                                    state: 0,
                                    price: "0"
                                }), i.addUpgradeEffect(), i.refreshBrand()
                            })
                        }
                    })
                }), playerManager.setObjData("Panel" + i.nodeId, {level: n, state: 0, price: "0"})
            },
            moveItemToPanel: function (e, t) {
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                this.itemId = e, this.maxTime = fish_data[e].time, this.spGreyItem.spriteFrame = a.getItemFrame(e), this.spGreyItem.node.active = !1, this.spItem.spriteFrame = a.getItemFrame(e), this.spItem.node.active = !0, this.refreshBrand(), this.isCanPut = !1, this.canTouch = !0, this.spItem.node.opacity = this.oriOpacity;
                var n = gameData.getHousePanelPos(e);
                this.oriPos.x = n.posX, this.oriPos.y = n.posY, this.spItem.node.x = this.oriPos.x, this.spItem.node.y = this.oriPos.y, this.node.setLocalZOrder(this.nodeId), playerManager.setObjData("Panel" + this.nodeId, {
                    level: e,
                    state: 0,
                    price: "" + t
                })
            },
            removeItemFromPanel: function () {
                this.spGreyItem.node.active = !1, this.spItem.node.active = !1, this.canTouch = !1, this.spItem.node.opacity = 255, this.isCanPut = !0, this.itemId = -1, this.maxTime = 0, this.spItem.node.x = 0, this.spItem.node.y = 0, this.node.setLocalZOrder(this.nodeId), playerManager.setObjData("Panel" + this.nodeId, {
                    level: -1,
                    state: 0,
                    price: "0"
                }), this.refreshBrand()
            },
            getExp: function () {
                this.father.refreshLand()
            },
            addUpgradeEffect: function () {
            },
            canPut: function () {
                return this.isCanPut && 1 == this.node.active
            }
        }), cc._RF.pop()
    }, {
        GameItemNodeCache: "GameItemNodeCache",
        "analytics-data": "analytics-data",
        "fbinstant-util": "fbinstant-util",
        "number-util": "number-util"
    }],
    GameItemPaodao: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "0078c+hSQ5GuL31PpZH7MSC", "GameItemPaodao");
        cc.Class({
            extends: cc.Component, properties: {itemFrame: [cc.SpriteFrame]}, onLoad: function () {
                console.log("888", this.node);
                var e = this;
                this.beginPos = {x: -290, y: 242}, this.coinPos = {
                    x: 290,
                    y: 6
                }, this.curState = 0, this.schedule(function () {
                    e.checkAcelTime()
                }, 1)
            }, onDestroy: function () {
            }, update: function (e) {
            }, checkAcelTime: function (e) {
                if (null != this.itemId) if (playerManager.getNumData("AcelTime") <= 0 && 1 == this.curState) {
                    var t = 2 / fish_data[this.itemId].time;
                    this.getComponent(cc.Animation).getAnimationState("fish_swim_anim").speed = t, this.curState = 0
                } else if (0 < playerManager.getNumData("AcelTime") && 0 == this.curState) {
                    t = 2 / fish_data[this.itemId].time;
                    t *= 2, this.curState = 1, this.getComponent(cc.Animation).getAnimationState("fish_swim_anim").speed = t
                }
            }, setParam: function (e, t) {
                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                this.beginPos = {x: -290, y: 242}, this.coinPos = {
                    x: 290,
                    y: 6
                }, this.father = e, this.itemId = t, this.node.x = this.beginPos.x, this.node.y = this.beginPos.y, this.node.rotation = 180, this.getComponent(cc.Sprite).spriteFrame = this.itemFrame[t];
                var n = 2 / fish_data[t].time;
                0 < playerManager.getNumData("AcelTime") && (cc.log("speed up"), n *= 2, this.curState = 1);
                var i = this.getComponent(cc.Animation);
                i.getAnimationState("fish_swim_anim").speed = n, i.play("fish_swim_anim", a)
            }, getCoin: function () {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").addCoinInPaodao(this.itemId)
            }
        }), cc._RF.pop()
    }, {}],
    GamePaodao: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "b9a2d6X7IdI4JrR8yrC0rRi", "GamePaodao");
        var n = e("GameItemNode"), f = e("number-util"), m = e("analytics-data");
        cc.Class({
            extends: cc.Component,
            properties: {
                btnSelect: cc.Button,
                btnBuy: cc.Button,
                labelCoin: cc.Label,
                labelDiamond: cc.Label,
                labelBuyCoin: cc.Label,
                labelBuyLevel: cc.Label,
                nodeBuyLevel: cc.Node,
                labelProduct: cc.Label,
                labelName: cc.Label,
                labelLevelName: cc.Label,
                layoutSell: cc.Layout,
                scriptGameItemNode: [n],
                itemPrefab: cc.Prefab,
                addCoinPrefab: cc.Prefab,
                effdoublecoinPre: cc.Prefab,
                chatDlgPre: cc.Prefab,
                spOh: cc.Sprite
            },
            onLoad: function () {
                var e = this, a = this;
                this.customEvent = {
                    updateCoin: "refreshCoin",
                    effectCoin: "playCoinEffect",
                    updateDiamond: "refreshDiamond",
                    updateName: "refreshName"
                };
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t();
                this.itemPrefabArr = [], this.laySellSize = {}, this.isCoinEffectPlay = !1, this.STATE = {
                    Ready: 0,
                    BuyItem: 1
                }, this.state = this.STATE.Ready;
                for (var i = this.scriptGameItemNode.length - 1; 0 <= i; i--) this.scriptGameItemNode[i] = this.node.getChildByName("bgSprite" + (i + 1)).getComponent("GameItemNode"), this.scriptGameItemNode[i].setParam(this, this.layPutSize, this.laySellSize, i);
                this.refreshSellMatrix(), this.refreshCoin(), this.refreshDiamond(), this.refreshLand(), this.refreshName(), this.state = this.STATE.Ready, cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache").loadRes(function () {
                    a.loadItemNode(), a.state = a.STATE.Ready
                }), this.curState = 0, this.schedule(function () {
                    a.checkAcelTime(), a.checkCanFree()
                }, 1), this.schedule(function () {
                    a.addChatDlg()
                }, 10)
            },
            onDestroy: function () {
                for (var e in this.customEvent) cc.director.off(e)
            },
            update: function (e) {
                if (0 < globalManager.GoldenBox && 1 != this.isPoolFull(!0)) {
                    var t = playerManager.getNumData("UnlockLevel"), a = gameData.getBoxLevel(t) - 1;
                    this.boxItem(a, 1)
                }
            },
            checkAcelTime: function (e) {
                playerManager.getNumData("AcelTime") <= 0 && 1 == this.curState ? (this.curState = 0, this.removeDoubleCoinEffect()) : 0 < playerManager.getNumData("AcelTime") && 0 == this.curState && (this.curState = 1, this.playDoubleCoinEffect())
            },
            checkCanFree: function () {
                if (playerManager.getNumData("UnlockLevel") < 7) this.spOh.node.active = !1; else {
                    (new Date).getTime(), playerManager.getNumData("FreeHouseTime");
                    globalManager.storeFreeHouseCD, this.spOh.node.active = !1
                }
            },
            addChatDlg: function () {
                for (var e = [], t = 0; t < this.scriptGameItemNode.length; t++) 0 <= this.scriptGameItemNode[t].itemId && this.scriptGameItemNode[t].itemId < this.scriptGameItemNode.length && e.push(t);
                0 < (e = f.makeArrayRandom(e)).length && this.scriptGameItemNode[e[0]].addChatDlg(this.chatDlgPre)
            },
            refreshSellMatrix: function () {
                this.laySellSize.x = this.layoutSell.node.x, this.laySellSize.y = this.layoutSell.node.y, this.laySellSize.width = this.layoutSell.node.width, this.laySellSize.height = this.layoutSell.node.height;
                for (var e = this.scriptGameItemNode.length - 1; 0 <= e; e--) this.scriptGameItemNode[e].refreshSellMatrix(this.laySellSize)
            },
            refreshLand: function () {
            },
            refreshCoin: function () {
                var e = playerManager.getNumData("UnlockLevel") - 7;
                e = 0 <= e ? e : 0, cc.log("unlockFishbegin=" + e);
                var t = playerManager.getNumData("UnlockLevel") - 4;
                t = 0 <= t ? t : 0, cc.log("unlockFish=" + t), this.labelCoin.string = f.unit_format(playerManager.getObjData("Coin"));
                for (var a = playerManager.getObjData("Price" + e), n = e, i = Math.pow(2, n), o = f.galaxyDiv(a, i), r = e + 1; r <= t; r++) {
                    a = playerManager.getObjData("Price" + r), i = Math.pow(2, r);
                    var s = f.galaxyDiv(a, i);
                    f.cmpBigInt(s, o) < 0 && (o = s, n = r)
                }
                t = n, this.labelBuyCoin.string = f.unit_format(playerManager.getObjData("Price" + t)), this.labelBuyLevel.string = "LV" + (t + 1);
                var c = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                this.nodeBuyLevel.getComponent(cc.Sprite).spriteFrame = c.getItemFrame(t);
                for (var l = 0, u = this.scriptGameItemNode.length - 1; 0 <= u; u--) {
                    var d = this.scriptGameItemNode[u].getComponent("GameItemNode");
                    0 <= d.itemId && (l = f.galaxyAdd(l, fish_data[d.itemId].coinsec))
                }
                0 < playerManager.getNumData("AcelTime") && (l = f.galaxyMut(l, 2)), this.labelProduct.string = f.unit_format(l).toUpperCase() + " /s"
            },
            refreshDiamond: function () {
                this.labelDiamond.string = f.unit_format(playerManager.getObjData("Diamond"))
            },
            refreshName: function () {
                var e = playerManager.getNumData("UnlockLevel");
                this.labelName.string = fish_data[e].name, e < 11 ? (this.labelLevelName.string = "人", this.labelName.node.color = new cc.Color(225, 244, 250, 255), this.labelLevelName.node.color = new cc.Color(225, 244, 250, 255)) : e < 25 ? (this.labelLevelName.string = "Demigod", this.labelName.node.color = new cc.Color(118, 219, 163, 255), this.labelLevelName.node.color = new cc.Color(118, 219, 163, 255)) : e < 37 && (this.labelLevelName.string = "God", this.labelName.node.color = new cc.Color(255, 224, 124, 255), this.labelLevelName.node.color = new cc.Color(255, 224, 124, 255))
            },
            playCoinEffect: function () {
                var e = this;
                if (0 == e.isCoinEffectPlay) {
                    e.isCoinEffectPlay = !0;
                    var t = cc.sequence(cc.scaleTo(.03, 1, 1), cc.scaleTo(.03, 1.3, 1.3), cc.scaleTo(.05, 1, 1), cc.callFunc(function () {
                        e.isCoinEffectPlay = !1
                    }, e));
                    this.labelCoin.node.runAction(t)
                }
            },
            playDoubleCoinEffect: function () {
                this.removeDoubleCoinEffect(), this.effdoublecoin = cc.instantiate(this.effdoublecoinPre), this.node.addChild(this.effdoublecoin, 100)
            },
            removeDoubleCoinEffect: function () {
                null != this.effdoublecoin && (this.effdoublecoin.removeFromParent(!0), this.effdoublecoin = null)
            },
            refreshPaodaoCount: function () {
                for (var e = 0, t = this.itemPrefabArr.length - 1; 0 <= t; t--) {
                    var a = this.itemPrefabArr[t].getComponent("GameItemPaodao");
                    e = f.galaxyAdd(e, fish_data[a.itemId].coinsec)
                }
                0 < playerManager.getNumData("AcelTime") && (e = f.galaxyAdd(e, 2)), this.labelProduct.string = f.unit_format(e) + " /sec"
            },
            loadItemNode: function () {
                for (var e = 0; e <= this.scriptGameItemNode.length - 1; e++) {
                    var t = playerManager.getObjData("Panel" + e), a = this.scriptGameItemNode[e];
                    0 <= t.level && a.loadItemToPanel(t.level)
                }
            },
            loadItemPaodao: function (e) {
                var t = cc.instantiate(this.itemPrefab), a = Math.floor(200 * Math.random()) / 100;
                t.getComponent("GameItemPaodao").setParam(this, e, a), this.node.addChild(t), this.itemPrefabArr[this.itemPrefabArr.length] = t, this.refreshPaodaoCount()
            },
            addItemToPaodao: function (e, t) {
                if (10 <= this.itemPrefabArr.length) return !1;
                var a = cc.instantiate(this.itemPrefab);
                a.getComponent("GameItemPaodao").setParam(this, e), this.node.addChild(a), this.itemPrefabArr[this.itemPrefabArr.length] = a, this.refreshPaodaoCount();
                var n = playerManager.getObjData("Panel" + t);
                return playerManager.setObjData("Panel" + t, {level: e, state: 1, price: n.price}), !0
            },
            removeItemFromPaodao: function (e, t) {
            },
            getItemNodeByNodeId: function (e) {
                return this.scriptGameItemNode[e]
            },
            getTotalCoins: function () {
                for (var e = 0, t = this.scriptGameItemNode.length - 1; 0 <= t; t--) {
                    var a = this.scriptGameItemNode[t].getComponent("GameItemNode");
                    0 <= a.itemId && (e = f.galaxyAdd(e, fish_data[a.itemId].coinsec))
                }
                return 0 < playerManager.getNumData("AcelTime") && (e = f.galaxyMut(e, 2)), e
            },
            catchFish: function (e) {
                if (e < 0 || this.isPoolFull() || this.state == this.STATE.BuyItem) return !1;
                this.state = this.STATE.BuyItem, cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").playPurchaseSound();
                for (var t = 0; t < this.scriptGameItemNode.length; t++) {
                    var a = this.scriptGameItemNode[t];
                    if (1 == a.canPut()) {
                        var n = playerManager.getObjData("Price" + e);
                        a.addItemToPanel(e, n, "catchFish");
                        break
                    }
                }
                return this.state = this.STATE.Ready, !0
            },
            onButtonBuy: function (e, t) {
                if (this.isPoolFull() || this.state == this.STATE.BuyItem) return !1;
                m.quick_purchase_click_event(), this.state = this.STATE.BuyItem;
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                a.playPurchaseSound();
                for (var n = 0; n < this.scriptGameItemNode.length; n++) {
                    var i = this.scriptGameItemNode[n];
                    if (1 == i.canPut()) {
                        var o = playerManager.getNumData("UnlockLevel") - 7;
                        o = 0 <= o ? o : 0, cc.log("unlockFishbegin=" + o);
                        var r = playerManager.getNumData("UnlockLevel") - 4;
                        r = 0 <= r ? r : 0, cc.log("unlockFish=" + r);
                        for (var s = playerManager.getObjData("Price" + o), c = o, l = Math.pow(2, c), u = f.galaxyDiv(s, l), d = o + 1; d <= r; d++) {
                            s = playerManager.getObjData("Price" + d), l = Math.pow(2, d);
                            var h = f.galaxyDiv(s, l);
                            f.cmpBigInt(h, u) < 0 && (u = h, c = d)
                        }
                        r = c;
                        var g = fish_data[r], p = playerManager.getObjData("Price" + r);
                        cc.log("fishprice=" + p), 1 == playerManager.coinEnough(p) && (playerManager.setObjData("Coin", f.galaxySub(playerManager.getObjData("Coin"), p)), i.addItemToPanel(r, p, "buy", g.price == p), p = f.galaxyMut(p, g.rise), playerManager.setNumData("Price" + r, p), null != a.fishdialog && a.fishdialog.getComponent("fishlist-dialog").refreshCoin(playerManager.getObjData("Coin")), this.refreshCoin()), a.refreshFishListDialog(r);
                        break
                    }
                }
                return this.state = this.STATE.Ready, !0
            },
            boxItem: function (e, t) {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                for (var a = 0; a < this.scriptGameItemNode.length; a++) {
                    var n = this.scriptGameItemNode[a];
                    if (1 == n.canPut()) {
                        cc.log("box put on panel" + (a + 1) + " box left:" + globalManager.GoldenBox), n.addItemToPanelFromBox(e, t), 0 < globalManager.GoldenBox && globalManager.GoldenBox--;
                        break
                    }
                }
            },
            buyItem: function (e, t) {
                for (var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "coin", n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"), i = 0; i < this.scriptGameItemNode.length; i++) {
                    var o = this.scriptGameItemNode[i];
                    if (1 == o.canPut()) {
                        if ("coin" == a) {
                            var r = playerManager.getObjData("Price" + e);
                            1 == playerManager.coinEnough(r) && (playerManager.setObjData("Coin", f.galaxySub(playerManager.getObjData("Coin"), r)), o.addItemToPanel(e, r, "buy", t), null != n.fishdialog && n.fishdialog.getComponent("fishlist-dialog").refreshCoin(playerManager.getObjData("Coin")))
                        } else if ("diamond" == a) {
                            var s = playerManager.getObjData("PriceDiamond" + e);
                            1 == playerManager.diamondEnough(s) && (playerManager.setObjData("Diamond", f.galaxySub(playerManager.getObjData("Diamond"), s)), o.addItemToPanel(e, s, "buy", t))
                        }
                        break
                    }
                }
            },
            putItem: function (e) {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                for (var t = 0; t < this.scriptGameItemNode.length; t++) {
                    var a = this.scriptGameItemNode[t];
                    if (1 == a.canPut()) {
                        var n = playerManager.getObjData("Price" + e);
                        a.addItemToPanel(e, n);
                        break
                    }
                }
            },
            isPoolFull: function () {
                for (var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0], t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"), a = !0, n = 0; n < this.scriptGameItemNode.length; n++) {
                    if (1 == this.scriptGameItemNode[n].canPut()) {
                        a = !1;
                        break
                    }
                }
                return 1 == a && 0 == e && (1 == playerManager.getObjData("animTutorialRecycle") ? t.startTutorialrecycle() : t.showToast("Not enough land")), a
            },
            isRiverFull: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                return 10 <= this.itemPrefabArr.length && (e.showToast("The river is full"), !0)
            },
            addCoinInPaodao: function (e) {
                var t = fish_data[e].coinround, a = cc.instantiate(this.addCoinPrefab);
                a.getComponent("addcoin").setData(t), a.parent = this.node, a.setLocalZOrder(100)
            }
        }), cc._RF.pop()
    }, {GameItemNode: "GameItemNode", "analytics-data": "analytics-data", "number-util": "number-util"}],
    GameScene: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "a34c5fSLgFJYaRfVBIvePAa", "GameScene");
        var n = e("GamePaodao"), i = e("audioManager"), l = e("instant-util"), u = e("number-util"),
            o = e("analytics-data"), r = e("fbinstant-util"), s = "sfx_button", c = "sfx_finish", d = "sfx_merge",
            h = "sfx_purchase", g = "sfx_race_start", p = "sfx_unlock";
        cc.Class({
            extends: cc.Component, properties: {
                _dialogs: {default: {}},
                btnBack: cc.Button,
                btnStore: cc.Button,
                btnShare: cc.Button,
                btnTutorial: cc.Button,
                btnMoregame: cc.Button,
                btnSpin: cc.Button,
                bgShare: cc.Node,
                rewardTime: cc.Node,
                toolNode: cc.Node,
                effUFONode: cc.Node,
                labelZuan: cc.Label,
                labelCD: cc.Label,
                id_label: cc.Label,
                giftPoint: cc.Node,
                coinAddNode: cc.Node,
                coinAddAnim: cc.Animation,
                recycleCoinAdd: cc.Label,
                recycleCoinAddAnim: cc.Animation,
                catchFishLayout: cc.Node,
                fishSprite: cc.Sprite,
                spinredSp: cc.Sprite,
                dailyredSp: cc.Sprite,
                rewardredSp: cc.Sprite,
                skinSp: cc.Sprite,
                fishdialog: cc.Node,
                rankdialog: cc.Node,
                DailyCheckinPopUp: cc.Node,
                noCoinDlg: cc.Prefab,
                alertDlg: cc.Prefab,
                notification: cc.Prefab,
                unlockDlg: cc.Prefab,
                inviteFriendsDlg: cc.Prefab,
                speedUpDlg: cc.Prefab,
                tutotialPre: cc.Prefab,
                offcoinPre: cc.Prefab,
                bonustimePre: cc.Prefab,
                carUpgradePre: cc.Prefab,
                levelupRewardPre: cc.Prefab,
                luckyspinPre: cc.Prefab,
                UFOrewardPre: cc.Prefab,
                sharedailyPre: cc.Prefab,
                diamondgot: cc.Prefab,
                coingot: cc.Prefab,
                nodiamond: cc.Prefab,
                SpeedUpdlg: cc.Prefab,
                tutorialPre: [cc.Prefab],
                tutorial3Pre: [cc.Prefab],
                tutorial5Pre: [cc.Prefab],
                tutorialrecyclePre: cc.Prefab,
                effgetcoinPre: cc.Prefab,
                scriptGamePaodao: n,
                audioManager: i,
                customSharePre: cc.Prefab,
                customSharePre1: cc.Prefab,
                moregameDlg: cc.Prefab,
                recommendPre: cc.Prefab,
                _dailyData: null
            }, onLoad: function () {
                uiManager.seekNodeWithName("rankButton", this.node).active = false;
                /*var e = this;
                l.getPlayerInfo(function (e) {
                    var t = "";
                    t = fish_data.length - 1 == playerManager.getNumData("UnlockLevel") ? e.playerName + " has the biggest character! Catch up with " + e.playerName + "!" : e.playerName + " almost has character #" + (playerManager.getNumData("UnlockLevel") + 2) + "! Unlock it first!", o.auto_update_start_event("endGame"), l.updateContext(function () {
                        o.auto_update_success_event("endGame")
                    }, function () {
                    }, {type: "endGame"}, t, null, globalManager.updateStrategy.LAST, !0)
                }), o.game_page_event(), this.shareAnim = this.bgShare.getComponent(cc.Animation), this.shareAnim.play();
                var a = this;
                this.updateCDTimeWithOffline(["AcelTimeCD", "AcelTime"]), 0 < playerManager.getNumData("AcelTimeCD") && (a.setShareBtnEnable(!1), a.rewardTime.getComponent("count-down-node").setData(playerManager.getNumData("AcelTimeCD"), function (e) {
                    playerManager.setNumData("AcelTimeCD", e), 0 == e && a.setShareBtnEnable(!0)
                })), this.labelCD.node.active = !1, this.check2XCD(), this.checkUnlockStatus(), 1 == playerManager.getObjData("animTutorial") && (this.tutorialCount = 0, this.startTutorial(this.tutorialCount)), this.customEvent = {
                    game_eventshow: "getOfflineCoin",
                    catch_fish: "setCatchFishIcon",
                    hide_catch_fish: "hideCatchFishIcon",
                    show_speedup_dlg: "onButtonWatchVideo"
                };
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t();
                this.getOfflineCoin(), this.getMessageReward(), this.getShareLinkReward(), playerManager.getNumData("UnlockLevel"), this.schedule(function () {
                    o.invite_friends_info_start_event(), server_util.getActivityList(function (e) {
                        o.invite_friends_info_success_event(), e && (cc.sys.localStorage.setItem("dailyData1", JSON.stringify(e)), a.checkReward(e), a.setCatchFishIcon(e))
                    }.bind(this), function (e) {
                        a.giftPoint.active = !1, e.code && o.invite_friends_info_err_event(e.code)
                    }.bind(this))
                }, 300, null, .1), server_util.getGameList("1", function (e) {
                    globalManager.gameListInGame = e.list
                }), this.offlineClock = 0, this.offlineCD = 1, globalManager.firstInGame = !1, this.checkLuckySpin(), this.checkDaily(), this.checkReward(), this.playBGMusic(), this.overAddCoinEffect(), this.coinAddNode.setLocalZOrder(globalManager.ZOrder_Toast), this.id_label.string = "ID:" + l.getPlayerID()*/
            }, start: function () {
                this.fishdialog.setLocalZOrder(globalManager.ZOrder_Hide), this.rankdialog.setLocalZOrder(globalManager.ZOrder_Hide), this.DailyCheckinPopUp.setLocalZOrder(globalManager.ZOrder_Hide)
                console.log("============11111", this.node);
                sceneManager.addMoreBtn();
                sceneManager.showMoreGameList();
                uiManager.seekNodeWithName("tutorialButton", this.node).active = false;
                uiManager.seekNodeWithName("tittleLabel", this.node).active = false;
                uiManager.seekNodeWithName("spinButton", this.node).active = false;
                // uiManager.seekNodeWithName("xiangziNode", this.node).active = false;
                uiManager.seekNodeWithName("rank-dialog", this.node).active = false;
                uiManager.seekNodeWithName("shareDailyButton", this.node).active = false;
                // var bgSprite = uiManager.seekNodeWithName("bgSprite",this.parent);
                // bgSprite.scaleY=0.7;
                // var paodaoSprite = uiManager.seekNodeWithName("paodaoSprite",this.parent);
                // paodaoSprite.scaleY=0.7;
                // paodaoSprite.y=180;
                // var daily_checkin = uiManager.seekNodeWithName("daily_checkin",this.parent);
                // daily_checkin.scaleY=0.5;
                var Canvas1 = uiManager.seekNodeWithName("Canvas", this.parent);
                Canvas1.scaleY = 0.7;

            }, update: function (e) {
                this.offlineClock += e, this.offlineClock >= this.offlineCD && (playerManager.setObjData("lastOffline", Math.floor((new Date).getTime() / 1e3)), this.offlineClock = 0)
            }, onDestroy: function () {
                for (var e in cc.log("onDestory"), this.customEvent) cc.director.off(e);
                this.stopBGMusic(), u.playerdataCountDownClear("AcelTime"), playerManager.setObjData("lastOffline", Math.floor((new Date).getTime() / 1e3)), l.setLeaderboardScore(playerManager.getScore()), server_util.setLeaderboardScore(playerManager.getScore())
            }, AdPop: function () {
                l.showInterstitialAd(function () {
                }, function () {
                    cc.log("interstitialAd load err")
                }.bind(this))
            }, check2XCD: function () {
                var t = this;
                0 < playerManager.getNumData("AcelTime") ? (t.labelCD.string = "coins 2x " + u.time_format(playerManager.getNumData("AcelTime")), u.playerdataCountDown("AcelTime", 1, function (e) {
                    t.labelCD && (t.labelCD.string = "coins 2x " + u.time_format(e)), 0 == e && t.labelCD && (t.labelCD.node.active = !1)
                })) : t.labelCD.node.active = !1
            }, idClick: function () {
                this.id_label.node.active = !this.id_label.node.active, globalManager.webCopyString(l.getPlayerID())
            }, checkUnlockStatus: function () {
                var e = gameData.getUnlockStatus("Accelarate");
                this.btnShare.node.active = e, e = gameData.getUnlockStatus("Spin"), this.btnSpin.node.active = e, e = gameData.getUnlockStatus("UFO"), this.effUFONode.getComponent("effectUFO").setUFOEnable(e)
            }, checkLuckySpin: function () {
                u.isOneDay(playerManager.getNumData("getFreeTime"), Date.parse(new Date)) || (playerManager.addNumData("Ticket", 5), playerManager.setNumData("TicketAdsTimes", 3), playerManager.setNumData("getFreeTime", Date.parse(new Date))), this.spinredSp.node.active = 0 < playerManager.getNumData("Ticket")
            }, checkDaily: function () {
                1 == playerManager.getNumData("dailyRewardCan") ? this.dailyredSp.node.active = !1 : this.dailyredSp.node.active = !0
            }, checkReward: function (e) {
                var t = !1;
                playerManager.getNumData("dailyshareGetCount") >= globalManager.MaxShareCounts ? (t = this.setGiftPoint(e), this.rewardredSp.node.active = 1 == t) : t = this.rewardredSp.node.active = !0
            }, updateCDTimeWithOffline: function (e) {
                var t = Math.floor((new Date).getTime() / 1e3), a = playerManager.getObjData("lastOffline");
                if (0 < t - a && -1 != a) {
                    var n = t - a;
                    for (var i in e) playerManager.setNumData(e[i], playerManager.getNumData(e[i]) - n), playerManager.getNumData(e[i]) < 0 && playerManager.setNumData(e[i], 0)
                }
            }, startRecycleAddCoinEffect: function (e) {
                this.recycleCoinAdd.string = "+" + u.unit_format(e), this.recycleCoinAddAnim.play("house_addcoin2", 0)
            }, startAddCoinEffect: function () {
                this.coinAddNode.active = !0, this.coinAddAnim.play("coin-ef", 0)
            }, overAddCoinEffect: function () {
                this.coinAddNode.active = !1
            }, getOfflineCoin: function () {
                var e = Math.floor((new Date).getTime() / 1e3), t = playerManager.getObjData("lastOffline");
                if (0 < e - t && -1 != t) {
                    for (var a = 10800 < e - t ? 10800 : e - t, n = 0, i = 0; i <= 14; i++) {
                        var o = playerManager.getObjData("Panel" + i);
                        0 <= o.level && (n = u.galaxyAdd(n, fish_data[o.level].coinsec))
                    }
                    n = u.galaxyMut(n, .5), 0 < u.cmpBigInt(n, 0) && 300 < a && 0 == playerManager.getObjData("animTutorial") ? (null != this.offcoin_dialog && this.offcoin_dialog.getComponent("getoffcoin_dlg").closeDialog(), this.offcoin_dialog = cc.instantiate(this.offcoinPre), this.offcoin_dialog.parent = this.node) : 0 < u.cmpBigInt(n, 0) && (n = u.galaxyMut(n, a), playerManager.addNumData("Coin", n), playerManager.addNumData("TotalCoin", n), cc.director.emit("updateCoin"))
                }
            }, onButtonBack: function (e, t) {
                cc.director.loadScene("LoginScene")
            }, onButtonTutorial: function (e, t) {
                this.showTutorialDialog()
            }, onButtonStore: function (e, t) {
                o.all_diamond_click_event(), this.showShareDailyPopUp()
            }, onButtonWatchVideo: function () {
                var t = this;
                o.speed_up_click_event();
                var e = function () {
                    t.showSpeedUpDialog(), t.setShareBtnEnable(!1), playerManager.addNumData("AcelTime", globalManager.AccelarateTime1), t.check2XCD(), t.rewardTime.getComponent("count-down-node").setData(globalManager.AccelarateTime1, function (e) {
                        playerManager.setNumData("AcelTimeCD", e), 0 == e && t.setShareBtnEnable(!0)
                    }), t.closeBonusTimeDlg(), t.closeSpeedUpPopUp(), globalManager.addTaskProgress(globalManager.taskType.speedupTimes)
                }, a = function () {
                    o.watch_video_event("speed_up"), o.watch_video_speed_up_event("watch_video_speed_up"), l.showRewardAd(function () {
                        cc.log("showAd success"), o.watch_video_success_event("speed_up"), o.watch_video_speed_up_success_event("watch_video_speed_up_success"), t.showSpeedUpDialog(), t.setShareBtnEnable(!1), playerManager.addNumData("AcelTime", globalManager.AccelarateTime), t.check2XCD(), t.rewardTime.getComponent("count-down-node").setData(globalManager.AccelarateCD, function (e) {
                            playerManager.setNumData("AcelTimeCD", e), 0 == e && t.setShareBtnEnable(!0)
                        }), t.closeBonusTimeDlg(), t.closeSpeedUpPopUp(), globalManager.addTaskProgress(globalManager.taskType.speedupTimes)
                    }, function () {
                        cc.log("RewardAd load err"), n.showToast("No available Ad, 30s bonus time for free.")
                    })
                }, n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                globalManager.canShare(globalManager.shareType.speedUp, {
                    level: playerManager.getNumData("UnlockLevel"),
                    isFirst: globalManager.isNewPlayer
                }) ? this.showSpeedUpPopUp(function () {
                    t.onButtonShare(), t.closeSpeedUpPopUp()
                }, a, 1, e) : this.showSpeedUpPopUp(function () {
                    t.onButtonShare(), t.closeSpeedUpPopUp()
                }, a, 2, e)
            }, onButtonShare: function (e, t) {
                var a = this, n = {type: globalManager.shareType.speedUp, inviter: l.getPlayerID(), rewards: "1"},
                    i = globalManager.getShareConfig(globalManager.shareType.speedUp);
                o.game_share_event(), o.share_speed_up_event("share_speed_up"), l.chooseContext(function (e) {
                    o.game_share_success_event(), o.share_speed_up_success_event("share_speed_up_success"), a.showSpeedUpDialog(), a.setShareBtnEnable(!1), playerManager.addNumData("AcelTime", globalManager.AccelarateTime), a.check2XCD(), a.rewardTime.getComponent("count-down-node").setData(globalManager.AccelarateCD, function (e) {
                        playerManager.setNumData("AcelTimeCD", e), 0 == e && a.setShareBtnEnable(!0)
                    }), a.closeBonusTimeDlg(), globalManager.addTaskProgress(globalManager.taskType.speedupTimes)
                }, function (e, t) {
                    o.game_share_fail_event(e), a.showToast(t)
                }.bind(a), n, i.text, i.img)
            }, setShareBtnEnable: function (e) {
                e ? (this.bgShare.opacity = 255, this.btnShare.interactable = !0/*, this.shareAnim.play()*/) : (this.bgShare.opacity = 167, this.btnShare.interactable = !1/*, this.shareAnim.stop()*/)
            }, onButtonListDialog: function (e, t) {
                var a = this;
                o.shop_page_click_event(), 1 == playerManager.getObjData("animTutorial") && cc.director.emit("nextTutorial3"), null == this.fishdialog && (a.fishdialog = cc.instantiate(a.prefabListDialog), a.fishdialog.parent = a.node, a.fishdialog.setLocalZOrder(globalManager.ZOrder_Hide)), 1 == playerManager.getObjData("animTutorial") ? this.fishdialog.setLocalZOrder(globalManager.ZOrder_TutorPopup) : this.fishdialog.setLocalZOrder(globalManager.ZOrder_Popup)
            }, closeButtonListDialog: function () {
                this.fishdialog && this.fishdialog.setLocalZOrder(globalManager.ZOrder_Hide)
            }, refreshFishListDialog: function (e) {
                this.fishdialog.getComponent("fishlist-dialog").refreshListData(e)
            }, rankClick: function () {
                o.all_rank_click_event(), this.showRankPopup()
            }, showRankPopup: function () {
                null == this.rankdialog && (this.rankdialog = cc.instantiate(this.rank_dialog_prefab), this.rankdialog.parent = this.node), this.rankdialog.setLocalZOrder(globalManager.ZOrder_Popup)
            }, closeRankPopup: function () {
                null != this.rankdialog && this.rankdialog.setLocalZOrder(globalManager.ZOrder_Hide)
            }, showPrefabDialog: function (e) {
                null != this._dialogs[e.name] && this._dialogs[e.name].destroy(), cc.supportJit ? (cc.supportJit = !1, this._dialogs[e.name] = cc.instantiate(e), cc.supportJit = !0) : this._dialogs[e.name] = cc.instantiate(e), this._dialogs[e.name].parent = this.node
            }, showToast: function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2.5;
                e && (this.toast && this.toast.removeFromParent(), this.toast = cc.instantiate(this.alertDlg), this.toast.getComponent("toast").setData(e), this.toast.parent = this.node, this.toast.runAction(cc.sequence(cc.delayTime(t), cc.removeSelf(!0))), this.toast.setLocalZOrder(globalManager.ZOrder_Toast))
            }, showNotification: function (e, t) {
                var a = this;
                this.notificationDlg && this.notificationDlg.getComponent("notification").closedlg(), this.notificationDlg = cc.instantiate(this.notification), this.notificationDlg.getComponent("notification").setData(e, t, function () {
                    a.notificationDlg = null
                }), this.notificationDlg.parent = this.node, this.notificationDlg.setLocalZOrder(globalManager.ZOrder_Popup)
            }, showTutorialDialog: function () {
                cc.instantiate(this.tutotialPre).parent = this.node
            }, showNoCoinDialog: function () {
                var e = cc.instantiate(this.noCoinDlg);
                e.parent = this.node, e.setLocalZOrder(globalManager.ZOrder_Popup)
            }, showUnlockDialog: function (e) {
                var t = cc.instantiate(this.unlockDlg);
                t.getComponent("unlock-dialog").setData(e), t.parent = this.node, t.setLocalZOrder(globalManager.ZOrder_Popup), o.achieve_level_event(e), this.refreshFishListDialog(e);
                for (var a = 1; a <= 4; a++) {
                    var n = e - a;
                    n = 0 <= n ? n : 0, this.refreshFishListDialog(n)
                }
                4 == e && r.canSubscribeBotAsync(function (e) {
                    e && r.subscribeBotAsync(function () {
                        o.subscribe_bot_success_event(), o.subscribe_bot_success_level5_event()
                    })
                }), cc.director.emit("updateName")
            }, showInviteFriendsDialog: function () {
            }, showSpeedUpDialog: function () {
                var e = cc.instantiate(this.speedUpDlg);
                e.parent = this.node, e.setLocalZOrder(globalManager.ZOrder_Popup), e.runAction(cc.sequence(cc.delayTime(1), cc.removeSelf(!0)))
            }, showLevelupReward: function (e) {
                this.checkUnlockStatus(), o.achieve_character_level_event(e), null == this.leveluprewardPopUp && (this.leveluprewardPopUp = cc.instantiate(this.levelupRewardPre), this.leveluprewardPopUp.parent = this.node, this.leveluprewardPopUp.setLocalZOrder(globalManager.ZOrder_Popup))
            }, closeLevelupReward: function () {
                null != this.leveluprewardPopUp && (this.leveluprewardPopUp.destroy(), this.leveluprewardPopUp = null)
            }, startTutorial: function (e) {
                cc.log("GameScene startTutorial:" + e);
                var t = cc.instantiate(this.tutorialPre[e]);
                this.node.addChild(t), t.setLocalZOrder(globalManager.ZOrder_TutorNode)
            }, nextTutorial: function () {
                this.tutorialCount++, this.tutorialCount < this.tutorialPre.length && this.startTutorial(this.tutorialCount)
            }, startTutorial3: function (e) {
                cc.log("GameScene startTutorial3:" + e);
                var t = cc.instantiate(this.tutorial3Pre[e]);
                this.node.addChild(t), t.setLocalZOrder(globalManager.ZOrder_TutorNode)
            }, nextTutorial3: function () {
                this.tutorial3Count++, this.tutorial3Count < this.tutorial3Pre.length && this.startTutorial3(this.tutorial3Count)
            }, startTutorial5: function (e) {
                cc.log("GameScene startTutorial5:" + e);
                var t = cc.instantiate(this.tutorial5Pre[e]);
                this.node.addChild(t), t.setLocalZOrder(globalManager.ZOrder_TutorNode)
            }, nextTutorial5: function () {
                this.tutorial5Count++, this.tutorial5Count < this.tutorial5Pre.length && this.startTutorial5(this.tutorial5Count)
            }, startTutorialrecycle: function () {
                cc.log("GameScene startTutorialrecycle");
                var e = cc.instantiate(this.tutorialrecyclePre);
                this.node.addChild(e), e.setLocalZOrder(globalManager.ZOrder_TutorNode)
            }, addCoinInPaodao: function (e) {
                this.scriptGamePaodao.addCoinInPaodao(e), this.audioManager.playSound(c)
            }, playUnlockSound: function () {
                this.audioManager.playSound(p)
            }, playPurchaseSound: function () {
                this.audioManager.playSound(h)
            }, playMergeSound: function () {
                this.audioManager.playSound(d)
            }, playRaceStartSound: function () {
                this.audioManager.playSound(g)
            }, playButtonSound: function () {
                this.audioManager.playSound(s)
            }, playBGMusic: function () {
                this.audioManager.playBGSound()
            }, stopBGMusic: function () {
                this.audioManager.stopBGSound()
            }, playSound: function (e) {
                this.audioManager.playSound(e)
            }, showCustomShare: function (e, t, a) {
                var n = [this.customSharePre, this.customSharePre1], i = cc.instantiate(n[e]),
                    o = playerManager.getNumData("UnlockLevel");
                l.customImageShare(i, function (e) {
                    i.getComponent("customShare").setIcon(e, o)
                }, t, a)
            }, showBonusTimeDlg: function (e, t) {
                null != this.bonustime_dlg && (this.bonustime_dlg.removeFromParent(!0), this.bonustime_dlg = null), this.bonustime_dlg = cc.instantiate(this.bonustimePre), this.bonustime_dlg.parent = this.node, this.bonustime_dlg.setLocalZOrder(globalManager.ZOrder_Popup), this.bonustime_dlg.getComponent("bonustime_dlg").setData(e, t)
            }, closeBonusTimeDlg: function () {
                null != this.bonustime_dlg && (this.bonustime_dlg.removeFromParent(!0), this.bonustime_dlg = null)
            }, getMessageReward: function () {
                var e = l.getEntryPointData();
                if (cc.log("ext=" + JSON.stringify(e)), e && e.type && "messenger" == e.type && e.player_id == l.getPlayerID()) {
                    var t = playerManager.getObjData("messageRewardIds");
                    cc.log("messageIds=" + JSON.stringify(t));
                    for (var a = !1, n = 0; n < t.length; n++) if (t[n] == e.task_id) {
                        a = !0;
                        break
                    }
                    if (!a) {
                        var i = parseInt(e.coin);
                        playerManager.addNumData("Coin", i), cc.director.emit("updateCoin"), t.push(e.task_id), playerManager.setObjData("messageRewardIds", t), this.showNotification("Compensation Gifts\n+" + u.unit_format(i) + " coins", 5)
                    }
                }
            }, getShareLinkReward: function () {
                if (0 != globalManager.firstInGame) {
                    var e = l.getEntryPointData();
                    if (cc.log("ext=" + JSON.stringify(e)), e && e.type && e.rewards && e.inviter) {
                        var t = e.inviter + l.getContextID(), a = playerManager.getObjData("shareLinkRewardIds"),
                            n = [];
                        cc.log("shareIds=" + JSON.stringify(a));
                        for (var i = !1, o = 0; o < a.length; o++) {
                            var r = a[o];
                            u.isOneDay(r.claimTime, Date.parse(new Date)) && (n.push(r), r.playerId == t && (i = !0))
                        }
                        if (10 <= n.length) this.showNotification("10 times already, please wait tomorrow.", 5); else if (i) this.showNotification("Clicked before, try other shared links to get rewards!", 5); else {
                            var s = playerManager.getNumData("UnlockLevel") - 4;
                            s = 0 <= s ? s : 0, cc.log("price=" + playerManager.getObjData("Price" + s));
                            var c = u.galaxyMut(playerManager.getObjData("Price" + s), .5);
                            playerManager.addNumData("Coin", c), cc.director.emit("updateCoin"), n.push({
                                claimTime: Date.parse(new Date),
                                playerId: t
                            }), playerManager.setObjData("shareLinkRewardIds", n), this.showNotification("Rewards from shared link!\n+" + u.unit_format(c) + " coins", 5)
                        }
                    }
                }
            }, showUpgradeCarPopUp: function (e, t, a) {
                a && a(e)
            }, closeUpgradeCarPopUp: function () {
                null != this.upgradeCarPopUp && (this.upgradeCarPopUp.removeFromParent(!0), this.upgradeCarPopUp = null)
            }, showLuckySpinPopUp: function () {
                o.all_spin_click_event(), null == this.luckyspinPopUp && (this.luckyspinPopUp = cc.instantiate(this.luckyspinPre), this.luckyspinPopUp.parent = this.node, this.luckyspinPopUp.getComponent("luckyspin").setData(), this.luckyspinPopUp.setLocalZOrder(globalManager.ZOrder_Popup))
            }, closeLuckySpinPopUp: function () {
                null != this.luckyspinPopUp && (this.luckyspinPopUp.removeFromParent(!0), this.luckyspinPopUp = null)
            }, showUFOrewardPopUp: function (e, t) {
                null == this.UFOrewardPopUp && (this.UFOrewardPopUp = cc.instantiate(this.UFOrewardPre), this.UFOrewardPopUp.parent = this.node, this.UFOrewardPopUp.getComponent("UFO_reward").setData(e, t), this.UFOrewardPopUp.setLocalZOrder(globalManager.ZOrder_Popup))
            }, closeUFOrewardPopUp: function () {
                null != this.UFOrewardPopUp && (this.UFOrewardPopUp.removeFromParent(!0), this.UFOrewardPopUp = null)
            }, showShareDailyPopUp: function (e) {
                o.all_reward_click_event(), null == this.ShareDailyPopUp && (this.ShareDailyPopUp = cc.instantiate(this.sharedailyPre), this.ShareDailyPopUp.parent = this.node, this.ShareDailyPopUp.setLocalZOrder(globalManager.ZOrder_Popup))
            }, closeShareDailyPopUp: function () {
                null != this.ShareDailyPopUp && (this.ShareDailyPopUp.removeFromParent(!0), this.ShareDailyPopUp = null)
            }, showDailyCheckinPopUp: function (e) {
                o.all_daily_click_event(), null == this.DailyCheckinPopUp ? (this.DailyCheckinPopUp = cc.instantiate(this.dailycheckinPre), this.DailyCheckinPopUp.parent = this.node, this.DailyCheckinPopUp.setLocalZOrder(globalManager.ZOrder_Popup)) : (this.DailyCheckinPopUp.parent = this.node, this.DailyCheckinPopUp.setLocalZOrder(globalManager.ZOrder_Popup), this.DailyCheckinPopUp.active = !0)
            }, closeDailyCheckinPopUp: function () {
                null != this.DailyCheckinPopUp && (this.DailyCheckinPopUp.removeFromParent(!0), this.DailyCheckinPopUp = null)
            }, showDiamondGotPopUp: function (e, t, a) {
                null == this.DiamondGotPopUp && (this.DiamondGotPopUp = cc.instantiate(this.diamondgot), this.DiamondGotPopUp.getComponent("DiamondGot").setData(e, t, a), this.DiamondGotPopUp.parent = this.node, this.DiamondGotPopUp.setLocalZOrder(globalManager.ZOrder_Popup))
            }, closeDiamondGotPopUp: function () {
                null != this.DiamondGotPopUp && (this.DiamondGotPopUp.removeFromParent(!0), this.DiamondGotPopUp = null)
            }, showCoinGotPopUp: function (e, t) {
                null == this.CoinGotPopUp && (this.CoinGotPopUp = cc.instantiate(this.coingot), this.CoinGotPopUp.getComponent("CoinGot").setData(e, t), this.CoinGotPopUp.parent = this.node, this.CoinGotPopUp.setLocalZOrder(globalManager.ZOrder_Popup))
            }, closeCoinGotPopUp: function () {
                null != this.CoinGotPopUp && (this.CoinGotPopUp.removeFromParent(!0), this.CoinGotPopUp = null)
            }, showNODiamondPopUp: function (e) {
                null == this.NODiamondPopUp && (this.NODiamondPopUp = cc.instantiate(this.nodiamond), this.NODiamondPopUp.parent = this.node, this.NODiamondPopUp.setLocalZOrder(globalManager.ZOrder_Popup))
            }, closeNODiamondPopUp: function () {
                null != this.NODiamondPopUp && (this.NODiamondPopUp.removeFromParent(!0), this.NODiamondPopUp = null)
            }, showSpeedUpPopUp: function (e, t, a, n) {
                null == this.SpeedUpPopUp && (this.SpeedUpPopUp = cc.instantiate(this.SpeedUpdlg), this.SpeedUpPopUp.getComponent("Accelarate_Dialog").setData(e, t, a, n), this.SpeedUpPopUp.parent = this.node, this.SpeedUpPopUp.setLocalZOrder(globalManager.ZOrder_Popup))
            }, closeSpeedUpPopUp: function () {
                null != this.SpeedUpPopUp && (this.SpeedUpPopUp.removeFromParent(!0), this.SpeedUpPopUp = null)
            }, moreGameClick: function () {
                this.moregamedialog ? (this.moregamedialog.parent = this.node, this.moregamedialog.active = !0) : (this.moregamedialog = cc.instantiate(this.moregameDlg), this.moregamedialog.parent = this.node, this.moregamedialog.getComponent("moregame-dialog").setData(2))
            }, showRecommendDialog: function () {
            }, setGiftPoint: function (e) {
                var t = !1;
                var aa = cc.sys.localStorage.getItem("dailyData1");
                aa = aa == "" ? "{}" : aa;
                if ((e = e || JSON.parse(aa)).length <= 0) return t;
                var a = {}, n = !1;
                a[globalManager.taskType.watchVideo] = function (e) {
                    0 == n && (e.reward_num = 1)
                }, a[globalManager.taskType.share] = function (e) {
                    e.reward_num = 1, n = !0
                }, a[globalManager.taskType.mergeTimes] = function (e) {
                    parseInt(e.total_task_times), parseInt(e.reward_num);
                    e.progress = globalManager.getTaskProgress(globalManager.taskType.mergeTimes), e.progress >= parseInt(e.total_progress) && (e.progress = parseInt(e.total_progress), parseInt(e.reward_num) + 1, e.reward_num = "" + (parseInt(e.reward_num) + 1))
                }, a[globalManager.taskType.speedupTimes] = function (e) {
                    parseInt(e.total_task_times), parseInt(e.reward_num);
                    e.progress = globalManager.getTaskProgress(globalManager.taskType.speedupTimes), e.progress >= parseInt(e.total_progress) && (e.progress = parseInt(e.total_progress), parseInt(e.reward_num) + 1, e.reward_num = "" + (parseInt(e.reward_num) + 1))
                };
                for (var i = playerManager.getObjData("dailyTask").taskProgress, o = 0; o < e.length; o++) {
                    var r = e[o];
                    r.task_obj_type == globalManager.taskType.login && (r.reward_num = 1);
                    for (var s = 0; s < i.length; s++) if (i[s].task_id == r.task_id) {
                        r.reward_num = i[s].reward_num, r.do_num = i[s].do_num ? i[s].do_num : 0;
                        break
                    }
                    a[parseInt(r.task_obj_type)] && a[parseInt(r.task_obj_type)](r);
                    var c = parseInt(r.total_task_times), l = parseInt(r.do_num ? r.do_num : 0);
                    parseInt(r.reward_num);
                    if (0 < parseInt(r.reward_num) && l < c) return t = !0
                }
                return t
            }, setCatchFishIcon: function (e) {
                var aa = cc.sys.localStorage.getItem("dailyData1");
                if (0 < (e = e || JSON.parse(aa)).length) for (var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache"), a = {
                    level: playerManager.getNumData("UnlockLevel"),
                    isFirst: globalManager.isNewPlayer
                }, n = 0; n < e.length; n++) {
                    var i = e[n];
                    if (this.catchFishLayout.active = !1, "6" == i.task_obj_type) {
                        var o = playerManager.getObjData("catchFish");
                        if (cc.log("catchFish=" + JSON.stringify(o)), 1 <= parseInt(i.task_times) && 0 == parseInt(i.reward_num)) this.catchFishLayout.active = !1; else {
                            if (o.catchLevel && globalManager.serverLoginTime <= o.resetTime) {
                                this.fishSprite.spriteFrame = t.getItemFrame(o.catchLevel), this.setCatchFishAnim();
                                break
                            }
                            if (!i.config.limit || globalManager.eval(i.config.limit, a)) {
                                this.fishSprite.spriteFrame = t.getItemFrame(playerManager.getNumData("UnlockLevel")), playerManager.setObjData("catchFish", {
                                    catchLevel: playerManager.getNumData("UnlockLevel"),
                                    taskId: i.task_id,
                                    resetTime: globalManager.serverResetTime
                                }), this.setCatchFishAnim();
                                break
                            }
                        }
                    }
                }
            }, setCatchFishAnim: function () {
                this.catchFishLayout.active = !0
            }, hideCatchFishIcon: function () {
                this.catchFishLayout.active = !1
            }, refreshActivityList: function () {
                var t = this;
                server_util.getActivityList(function (e) {
                    o.invite_friends_info_success_event(), e && (cc.sys.localStorage.setItem("dailyData1", JSON.stringify(e)), t.setCatchFishIcon(e))
                }.bind(this), function (e) {
                }.bind(this))
            }
        }), cc._RF.pop()
    }, {
        GamePaodao: "GamePaodao",
        "analytics-data": "analytics-data",
        audioManager: "audioManager",
        "fbinstant-util": "fbinstant-util",
        "instant-util": "instant-util",
        "number-util": "number-util"
    }],
    HC_OK_animnode: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "96f033tzVpMqY4v5DEQ2pun", "HC_OK_animnode");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                console.log("11,11", this.node);
            }, setData: function (e) {
                this.overcb = e
            }, animOver: function () {
                this.overcb && this.overcb()
            }
        }), cc._RF.pop()
    }, {}],
    HC_OK: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "bccccOVVahPgYtAz8n8yoBb", "HC_OK");
        cc.Class({
            extends: cc.Component,
            properties: {spItem: cc.Sprite, rootNode: cc.Node, animlist: cc.Animation},
            onLoad: function () {
                console.log("1212", this.node);
            },
            setData: function (e, t) {
                this.itemId = e;
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                this.spItem.spriteFrame = a.getItemFrame(e);
                var n = gameData.getHousePanelPos(e);
                this.rootNode.y = n.posY + this.spItem.node.height / 2 - 6.8, this.animlist.play("hc-ok", 0), this.rootNode.getComponent("HC_OK_animnode").setData(t)
            }
        }), cc._RF.pop()
    }, {}],
    HZ_open: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "1764fK3PQpLH457lxrfh1W5", "HZ_open");
        cc.Class({
            extends: cc.Component,
            properties: {spItem: cc.Sprite, spCache: [cc.SpriteFrame], animlist: [cc.Animation]},
            onLoad: function () {
                console.log("1313", this.node);
                this.curcd = 0, this.MaxCD = 1
            },
            setData: function (e, t) {
                this.callback = t, this.spItem.spriteFrame = this.spCache[e]
            },
            clickBox: function () {
                this.callback && this.callback()
            },
            update: function (e) {
                this.curcd >= this.MaxCD && this.clickBox(), this.curcd += e
            }
        }), cc._RF.pop()
    }, {}],
    HZ_start: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "848abWHEAJPIKYo9JMelyI2", "HZ_start");
        cc.Class({
            extends: cc.Component,
            properties: {spItem: cc.Sprite, spCache: [cc.SpriteFrame], animlist: [cc.Animation]},
            onLoad: function () {
                console.log("1414", this.node);
                this.curcd = 0, this.MaxCD = 10
            },
            setData: function (e, t) {
                this.callback = t, this.spItem.spriteFrame = this.spCache[e]
            },
            clickBox: function () {
                this.callback && this.callback(), 1 == playerManager.getObjData("animTutorial") && cc.director.emit("nextTutorial2_1")
            },
            update: function (e) {
                this.curcd >= this.MaxCD && this.clickBox(), this.curcd += e
            }
        }), cc._RF.pop()
    }, {}],
    IosPaymentExecutor: [function (e, t, a) {
        "use strict";

        function n() {
        }

        cc._RF.push(t, "637a4HiycRKWLtNihBUgN5U", "IosPaymentExecutor"), n.prototype.payForProduct = function (e, t, a, n, i, o, r, s, c, l, u, d) {
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    IosPlatformExecutor: [function (e, t, a) {
        "use strict";

        function n() {
        }

        cc._RF.push(t, "32773vK6hdCeZLShZooooQk", "IosPlatformExecutor"), n.prototype.init = function () {
            jsb.reflection.callStaticMethod("YmnSdk", "init")
        }, n.prototype.setListener = function (e) {
            window.callbackCode = e
        }, n.prototype.getSdkVersion = function () {
            return 1
        }, n.prototype.getPlatformId = function () {
            return 2
        }, n.prototype.getPlatformName = function () {
            return 3
        }, n.prototype.getPlatformVersion = function () {
            return 4
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    IosUserExecutor: [function (e, t, a) {
        "use strict";

        function n() {
        }

        cc._RF.push(t, "dc284OuxRVJwoRHZhspDNlx", "IosUserExecutor"), n.prototype.login = function () {
            jsb.reflection.callStaticMethod("YmnSdkHelper", "callfunction:", "facebook_auto_login")
        }, n.prototype.isSupportFunction = function (e) {
            return jsb.reflection.callStaticMethod("YmnSdk", "isSupportFunction:", e)
        }, n.prototype.callFunction = function (e) {
            jsb.reflection.callStaticMethod("YmnSdkHelper", "callfunction:", e)
        }, n.prototype.callFunctionArray = function (e, t) {
            console.log("call here");
            jsb.reflection.callStaticMethod("YmnSdkHelper", "callfunction:withData:", e, t)
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    LevelupReward: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "7b4b1NWygNH0qyEE9mprb69", "LevelupReward");
        var n = e("number-util"), i = e("instant-util"), o = e("analytics-data");
        cc.Class({
            extends: cc.Component,
            properties: {
                btnback: cc.Button,
                shareBtn: cc.Node,
                videoBtn: cc.Node,
                reward1Node: cc.Node,
                reward2Node: cc.Node,
                coinlabrl: cc.Label,
                landlabrl: cc.Label,
                levellabrl: cc.Label
            },
            onLoad: function () {
                console.log("1515", this.node);
                var e = gameData.getPlayerLevel(playerManager.getObjData("PlayerExp")),
                    t = gameData.getLevelUpReward(e.level);
                this.levelreward = t, this.levelRes = e, this.levellabrl.string = e.level + 1 + "", 2 == t.count ? (this.coinlabrl.string = "+ " + n.unit_format(t.coin), this.landlabrl.string = "+ " + t.land) : 1 == t.count && (null != t.coin && (this.coinlabrl.string = "+ " + n.unit_format(t.coin), this.reward1Node.x = 0, this.reward2Node.active = !1), null != t.land && (this.landlabrl.string = "+ " + t.land, this.reward2Node.x = 0, this.reward1Node.active = !1)), this.shareBtn.active = !1, this.videoBtn.active = !1, this.rewardType = 1, this.shareBtn.active = !0;
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").playSound("congratulations")
            },
            animOver: function () {
            },
            watchVideo: function () {
                var e = this;
                o.watch_video_event("levelup");
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                i.showRewardAd(function () {
                    cc.log("showAd success"), o.watch_video_success_event("levelup"), e.closeDialog(null, !1)
                }, function () {
                    cc.log("RewardAd load err"), 1 == globalManager.canShowReward ? t.showToast("No available Ad right now, try again later.") : t.showToast("The web page does not currently support ads.")
                })
            },
            shareClick: function () {
                var n = this;
                o.share_levelup_event(), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showCustomShare(1, function (a) {
                    i.getPlayerInfo(function (e) {
                        var t = e.playerName + " has reached Lv." + (n.levelRes.level + 1) + "!";
                        i.share(function () {
                            n.closeDialog()
                        }, a, t)
                    })
                }, function () {
                    n.closeDialog()
                })
            },
            doubleClick: function () {
                o.offline_coin_click_event(), 1 == this.rewardType ? this.shareClick() : 2 == this.rewardType && this.watchVideo()
            },
            closeDialog: function (e) {
                !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                null != this.levelreward.coin && (playerManager.addNumData("Coin", this.levelreward.coin), playerManager.addNumData("TotalCoin", this.levelreward.coin), cc.director.emit("updateCoin")), t.closeLevelupReward()
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    No_Diamond_Dialog: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "7d524G4211Op6hJqlZxRSwD", "No_Diamond_Dialog");
        e("number-util");
        var i = e("instant-util"), o = e("analytics-data");
        cc.Class({
            extends: cc.Component,
            properties: {add_coint_label: {default: null, type: cc.Label}, shareBtn: cc.Node, videoBtn: cc.Node},
            onLoad: function () {
                console.log("====16", this.node);
                uiManager.seekNodeWithName("tittleLabel", this.node).active = false;
                this.add_coint_label.string = "+ " + globalManager.diamondReward, this.shareBtn.active = !1, this.videoBtn.active = !1, globalManager.canShare(globalManager.shareType.noDiamondShare, {
                    level: playerManager.getNumData("UnlockLevel"),
                    isFirst: globalManager.isNewPlayer
                }) ? this.shareBtn.active = !0 : this.videoBtn.active = !0
            },
            closeWatchVideoDialog: function () {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").closeNODiamondPopUp()
            },
            watchVideo: function () {
                var e = this;
                o.watch_video_get_diamond_event();
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                /*i.showRewardAd(function () {
                    cc.log("showAd success"), o.watch_video_get_diamond_success_event(), t.showDiamondGotPopUp(globalManager.diamondReward), playerManager.addNumData("Diamond", globalManager.diamondReward), cc.director.emit("updateDiamond"), e.closeWatchVideoDialog()
                }, function () {
                })*/
                cc.log("RewardAd load err"), 1 == globalManager.canShowReward ? t.showToast("No available Ad right now, try again later.") : t.showToast("The web page does not currently support ads."), e.closeWatchVideoDialog()
            },
            shareTo: function () {
                var e = this;
                o.share_get_diamond_event();
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"),
                    t = {type: globalManager.shareType.noDiamondShare, inviter: i.getPlayerID(), rewards: "1"},
                    n = globalManager.getShareConfig(globalManager.shareType.noDiamondShare);
                i.chooseContext(function () {
                    o.share_get_diamond_success_event(), a.showDiamondGotPopUp(globalManager.diamondReward), playerManager.addNumData("Diamond", globalManager.diamondReward), cc.director.emit("updateDiamond"), e.closeWatchVideoDialog()
                }, function (e, t) {
                    a.showToast(t)
                }, t, n.text, n.img)
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    OsUtil: [function (e, t, a) {
        "use strict";

        function n() {
        }

        cc._RF.push(t, "c0ef6VDcdlGeqeXR0m0WSfx", "OsUtil"), n.prototype.getOsName = function () {
            return cc.sys.isBrowser ? "Browser" : cc.sys.os == cc.sys.OS_ANDROID ? "Android" : cc.sys.os == cc.sys.OS_IOS ? "Ios" : cc.sys.os == cc.sys.OS_WINDOWS ? "Windows" : null
        }, n.prototype.getOsTarget = function (e) {
            return this.getOsName() + e
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    PaymentInterface: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "ff47c150VVGZrIoqmVp1YdF", "PaymentInterface");
        var h = e(e("OsUtil").getOsTarget("PaymentExecutor"));

        function n() {
        }

        n.prototype.payForProduct = function (e) {
            h.payForProduct(e)
        }, n.prototype.payForProduct = function (e, t, a, n, i, o, r, s, c, l, u, d) {
            h.payForProduct(e, t, a, n, i, o, r, s, c, l, u, d)
        }, n.prototype.payForSingle = function (e, t, a, n, i, o) {
            h.payForSingle(e, t, a, n, i, o)
        }, t.exports = new n, cc._RF.pop()
    }, {OsUtil: "OsUtil"}],
    PaymentWrapper: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "cabd3sG1MhFtacuoHOQ2snb", "PaymentWrapper"), t.exports = new function () {
            this.PAYRESULT_SUCCESS = 200, this.PAYRESULT_FAIL = 201, this.PAYRESULT_CANCEL = 202, this.PAYRESULT_NETWORK_ERROR = 203, this.PAYRESULT_PRODUCTIONINFOR_INCOMPLETE = 204, this.PAYRESULT_INIT_SUCCESS = 205, this.PAYRESULT_INIT_FAIL = 206, this.PAYRESULT_NOW_PAYING = 207
        }, cc._RF.pop()
    }, {}],
    PlatformSdk: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "0dbc4vqxo5LQZKSFslHj1rv", "PlatformSdk");
        var n = e(e("OsUtil").getOsTarget("PlatformExecutor"));

        function i() {
        }

        i.prototype.init = function () {
            n.init()
        }, i.prototype.setListener = function (e) {
            n.setListener(e)
        }, i.prototype.getSdkVersion = function () {
            return n.getSdkVersion()
        }, i.prototype.getPlatformId = function () {
            return n.getPlatformId()
        }, i.prototype.getPlatformName = function () {
            return n.getPlatformName()
        }, i.prototype.getPlatformVersion = function () {
            return n.getPlatformVersion()
        }, t.exports = new i, cc._RF.pop()
    }, {OsUtil: "OsUtil"}],
    Tutorial0_1: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "b7765gCM2xDpJYvTEDEf1jr", "Tutorial0_1");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                console.log("====17", this.node);
            }, onButtonBuy: function (e, t) {
                this.node.destroy(), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").nextTutorial()
            }
        }), cc._RF.pop()
    }, {}],
    Tutorial0_2: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "89cc8/o8NxHHbvP+YF5+haR", "Tutorial0_2");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                console.log("====18", this.node);
            }, onButtonBuy: function (e, t) {
                playerManager.setObjData("animTutorial", !1), this.node.destroy(), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").nextTutorial()
            }
        }), cc._RF.pop()
    }, {}],
    Tutorial0: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "75b53ve3ElD7LQnbY+hZ7ko", "Tutorial0");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                console.log("====19", this.node);
            }, onButtonBuy: function (e, t) {
                this.node.destroy(), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").nextTutorial()
            }
        }), cc._RF.pop()
    }, {}],
    Tutorial1_1: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "a3bb103b9BCPYUGEHpVxbmF", "Tutorial1_1");
        var n = e("analytics-data");
        cc.Class({
            extends: cc.Component, properties: {labelTip: cc.Label}, onLoad: function () {
                console.log("====20", this.node);
                this.count = 0;
                var e = this.getComponent(cc.Animation);
                e.getAnimationState("tutorial_anim1");
                e.play("tutorial_anim1"), this.clicktime = 0
            }, update: function (e) {
                0 < this.clicktime && (this.clicktime = this.clicktime - e)
            }, onButtonBuy: function (e, t) {
                if (!(0 < this.clicktime)) {
                    var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                    a.scriptGamePaodao.onButtonBuy(), this.count++, 2 <= this.count && (cc.log("Tutorial1 nextTutorial"), n.all_guide_step_event(3), this.node.destroy(), a.nextTutorial()), this.clicktime = .2
                }
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data"}],
    Tutorial1: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "77bc4oS4JRHuoV3Xlp5Ab9H", "Tutorial1");
        var n = e("analytics-data");
        cc.Class({
            extends: cc.Component, properties: {labelTip: cc.Label}, onLoad: function () {
                console.log("====21", this.node);
                this.count = 0;
                var e = this.getComponent(cc.Animation);
                e.getAnimationState("tutorial_anim1");
                e.play("tutorial_anim1"), playerManager.setObjData("Panel0", {level: 0, state: 0, price: "0"})
            }, update: function (e) {
            }, onButtonBuy: function (e, t) {
                n.all_guide_step_event(1);
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                a.scriptGamePaodao.onButtonBuy(), cc.log("Tutorial1 nextTutorial"), this.node.destroy(), a.nextTutorial()
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data"}],
    Tutorial2_1: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "1b2034g/35DxK1p06mXx1i1", "Tutorial2_1");
        var n = e("analytics-data");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                console.log("====22", this.node);
                var e = this, a = this;
                this.customEvent = {nextTutorial2_1: "nexttutorial"};
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t()
            }, onDestroy: function () {
                for (var e in cc.log("onDestory Tutorial2_1"), this.customEvent) cc.director.off(e)
            }, update: function (e) {
            }, nexttutorial: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.onDestroy(), this.node.destroy(), e.nextTutorial(), playerManager.setObjData("animTutorial", !1), n.all_novice_guide_success_event()
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data"}],
    Tutorial2: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "a63b4JzW0dCSbRMgEi2/Xof", "Tutorial2");
        var n = e("analytics-data");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                console.log("====23", this.node);
                var e = this, a = this;
                this.count = 0;
                var t = this.getComponent(cc.Animation);
                t.getAnimationState("tutorial_anim2");
                t.play("tutorial_anim2"), this.customEvent = {nextTutorial2: "nexttutorial"};
                var n = function () {
                    var t = e.customEvent[i];
                    cc.director.on(i, function (e) {
                        a[t]()
                    })
                };
                for (var i in this.customEvent) n()
            }, onDestroy: function () {
                for (var e in cc.log("onDestory Tutorial2"), this.customEvent) cc.director.off(e)
            }, update: function (e) {
            }, nexttutorial: function () {
                n.all_guide_step_event(2);
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.onDestroy(), this.node.destroy(), e.nextTutorial()
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data"}],
    Tutorial3: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "ffb59WbB/VIUJSH6tqUc++Y", "Tutorial3");
        var n = e("analytics-data");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                console.log("====24", this.node);
                n.all_delete_event()
            }, onDestroy: function () {
                cc.log("onDestory Tutorial3")
            }, nexttutorial: function () {
                n.all_delete_click_event(), this.node.destroy(), playerManager.setObjData("animTutorialRecycle", !1)
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data"}],
    Tutorial4: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "77c5aGp/n1E37W1RDJUEmm1", "Tutorial4");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                console.log("====25", this.node);
                var e = this, a = this;
                this.customEvent = {nextTutorial4: "nexttutorial"};
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t()
            }, onDestroy: function () {
                for (var e in cc.log("onDestory Tutorial4"), this.customEvent) cc.director.off(e)
            }, nexttutorial: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.onDestroy(), this.node.destroy(), e.nextTutorial()
            }
        }), cc._RF.pop()
    }, {}],
    Tutorial5: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "2a9e2y0e3JMyrSpO31iybHz", "Tutorial5");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                console.log("====26", this.node);
                var e = this, a = this;
                this.customEvent = {nextTutorial5: "nexttutorial"};
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t()
            }, onDestroy: function () {
                for (var e in cc.log("onDestory Tutorial5"), this.customEvent) cc.director.off(e)
            }, update: function (e) {
            }, nexttutorial: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.onDestroy(), this.node.destroy(!0), e.nextTutorial()
            }
        }), cc._RF.pop()
    }, {}],
    Tutorial6: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "85b404eFWBNCZQlHd9Z7OEn", "Tutorial6");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                console.log("====27", this.node);
                var e = this, a = this;
                this.customEvent = {nextTutorial6: "nexttutorial"};
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t()
            }, onDestroy: function () {
                for (var e in cc.log("onDestory Tutorial6"), this.customEvent) cc.director.off(e)
            }, update: function (e) {
            }, nexttutorial: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.onDestroy(), this.node.destroy(!0), e.nextTutorial3()
            }
        }), cc._RF.pop()
    }, {}],
    Tutorial7_1: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "4616creIVtNxKpHm33VJaOn", "Tutorial7_1");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                console.log("====28", this.node);
                var e = this, a = this;
                this.customEvent = {nextTutorial7_1: "nexttutorial"};
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t()
            }, onDestroy: function () {
                for (var e in cc.log("onDestory Tutorial7_1"), this.customEvent) cc.director.off(e)
            }, update: function (e) {
            }, nexttutorial: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.onDestroy(), this.node.removeFromParent(!0), e.nextTutorial5()
            }
        }), cc._RF.pop()
    }, {}],
    Tutorial7: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "f1527h9bj5Gnqy+K6VrGoBc", "Tutorial7");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                console.log("====29", this.node);
                var e = this, a = this;
                this.customEvent = {nextTutorial7: "nexttutorial"};
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t()
            }, onDestroy: function () {
                for (var e in cc.log("onDestory Tutorial7"), this.customEvent) cc.director.off(e)
            }, update: function (e) {
            }, nexttutorial: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                this.onDestroy(), this.node.removeFromParent(!0), e.nextTutorial5()
            }
        }), cc._RF.pop()
    }, {}],
    UFO_reward: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "484c6Iwvn9PyZrtVNJYL+Ai", "UFO_reward");
        var r = e("analytics-data"), s = e("instant-util"), d = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {shareNode: cc.Node, videoNode: cc.Node, coinlabel: [cc.Label], rewardNode: [cc.Node]},
            onLoad: function () {
                var e = this;
                this.scheduleOnce(function () {
                    e.node.getComponent(cc.Animation).play("UFO_reward", 0)
                }, .01)
            },
            setData: function (e, t) {
                cc.log("reward=" + e), this.rewardType = e, this.callback = t, 0 <= e && e <= this.rewardNode.length - 1 && (this.coinlabel[e].string = this.getRewardValue(e), this.rewardNode[e].active = !0), this.shareNode.active = !1, this.videoNode.active = !1, globalManager.canShare(globalManager.shareType.UFOShare, {level: playerManager.getNumData("UnlockLevel")}) ? (this.getRewardType = 1, this.shareNode.active = !0) : (this.getRewardType = 2, this.videoNode.active = !0)
            },
            getRewardValue: function (e) {
                var t = 0;
                if (0 == e) {
                    var a = playerManager.getNumData("UnlockLevel") - 7;
                    a = 0 <= a ? a : 0, cc.log("unlockFishbegin=" + a);
                    var n = playerManager.getNumData("UnlockLevel") - 4;
                    n = 0 <= n ? n : 0, cc.log("unlockFish=" + n);
                    for (var i = playerManager.getObjData("Price" + a), o = a, r = Math.pow(2, o), s = d.galaxyDiv(i, r), c = a + 1; c <= n; c++) {
                        i = playerManager.getObjData("Price" + c), r = Math.pow(2, c);
                        var l = d.galaxyDiv(i, r);
                        d.cmpBigInt(l, s) < 0 && (s = l, o = c)
                    }
                    n = o;
                    fish_data[n];
                    var u = playerManager.getObjData("Price" + n);
                    t = "+ " + d.unit_format(u)
                } else 1 == e && (t = "Golden Box!");
                return t
            },
            aquireReward: function () {
                var e = this.rewardType;
                if (0 == e) {
                    var t = playerManager.getNumData("UnlockLevel") - 7;
                    t = 0 <= t ? t : 0, cc.log("unlockFishbegin=" + t);
                    var a = playerManager.getNumData("UnlockLevel") - 4;
                    a = 0 <= a ? a : 0, cc.log("unlockFish=" + a);
                    for (var n = playerManager.getObjData("Price" + t), i = t, o = Math.pow(2, i), r = d.galaxyDiv(n, o), s = t + 1; s <= a; s++) {
                        n = playerManager.getObjData("Price" + s), o = Math.pow(2, s);
                        var c = d.galaxyDiv(n, o);
                        d.cmpBigInt(c, r) < 0 && (r = c, i = s)
                    }
                    a = i;
                    fish_data[a];
                    var l = playerManager.getObjData("Price" + a);
                    playerManager.addNumData("Coin", l), playerManager.addNumData("TotalCoin", l), cc.director.emit("updateCoin")
                } else 1 == e && (globalManager.GoldenBox += 4)
            },
            onButtonShare: function (e, t) {
                var a = this;
                r.all_bonus_coin_click_event();
                var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"),
                    i = {type: globalManager.shareType.UFOShare, inviter: "/*s.getPlayerID()*/", rewards: "1"};
                if (1 == this.getRewardType) {
                    var o = globalManager.getShareConfig(globalManager.shareType.UFOShare);
                    r.spin_share_event(), r.share_get_bonus_all_event(), 0 == this.rewardType ? r.share_get_bonus_coin_event() : 1 == this.rewardType && r.share_get_bonus_box_event(), s.chooseContext(function (e) {
                        r.spin_share_success_event(), r.share_get_bonus_all_success_event(), 0 == a.rewardType ? r.share_get_bonus_coin_success_event() : 1 == a.rewardType && r.share_get_bonus_box_success_event(), a.aquireReward(), a.callback && a.callback(), a.closeDialog()
                    }, function (e, t) {
                        null != t && n.showToast(t)
                    }.bind(a), i, o.text, o.img)
                } else 2 == this.getRewardType && (r.watch_video_event(), r.watch_video_get_bonus_all_event(), 0 == this.rewardType ? r.watch_video_get_bonus_coin_event() : 1 == this.rewardType && r.watch_video_get_bonus_box_event(),
                    r.watch_video_success_event(), r.watch_video_get_bonus_all_success_event(), 0 == a.rewardType ? r.watch_video_get_bonus_coin_success_event() : 1 == a.rewardType && r.watch_video_get_bonus_box_success_event(), a.aquireReward(), a.callback && a.callback(), a.closeDialog(),
                    /*s.showRewardAd(function () {
                    cc.log("showAd success"), r.watch_video_success_event(), r.watch_video_get_bonus_all_success_event(), 0 == a.rewardType ? r.watch_video_get_bonus_coin_success_event() : 1 == a.rewardType && r.watch_video_get_bonus_box_success_event(), a.aquireReward(), a.callback && a.callback(), a.closeDialog()
                }, */function () {
                    cc.log("RewardAd load err"), 1 == globalManager.canShowReward ? n.showToast("No available Ad right now, try again later.") : n.showToast("The web page does not currently support ads.")
                })
            },
            closeDialog: function () {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").closeUFOrewardPopUp()
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    UserInterface: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "9b79eg56/lIsYpDoef0ucNk", "UserInterface");
        var n = e(e("OsUtil").getOsTarget("UserExecutor"));

        function i() {
        }

        i.prototype.login = function () {
            n.login()
        }, i.prototype.isSupportFunction = function (e) {
            return n.isSupportFunction(e)
        }, i.prototype.callFunction = function (e) {
            n.callFunction(e)
        }, i.prototype.callFunctionArray = function (e, t) {
            n.callFunctionArray(e, t)
        }, t.exports = new i, cc._RF.pop()
    }, {OsUtil: "OsUtil"}],
    UserWrapper: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "63cd4LqAVdHtoViVeFb6i96", "UserWrapper"), t.exports = new function () {
            this.ACTION_RET_INIT_SUCCESS = 100, this.ACTION_RET_INIT_FAIL = 101, this.ACTION_RET_LOGIN_SUCCESS = 102, this.ACTION_RET_LOGIN_TIMEOUT = 103, this.ACTION_RET_LOGIN_NO_NEED = 104, this.ACTION_RET_LOGIN_FAIL = 105, this.ACTION_RET_LOGIN_CANCEL = 106, this.ACTION_RET_LOGOUT_SUCCESS = 107, this.ACTION_RET_LOGOUT_FAIL = 108, this.ACTION_RET_PLATFORM_ENTER = 109, this.ACTION_RET_PLATFORM_BACK = 110, this.ACTION_RET_PAUSE_PAGE = 111, this.ACTION_RET_EXIT_PAGE = 112, this.ACTION_RET_ANTIADDICTIONQUERY = 113, this.ACTION_RET_REALNAMEREGISTER = 114, this.ACTION_RET_ACCOUNTSWITCH_SUCCESS = 115, this.ACTION_RET_ACCOUNTSWITCH_FAIL = 116
        }, cc._RF.pop()
    }, {}],
    WShaderUtil: [function (t, e, a) {
        "use strict";
        cc._RF.push(e, "eae072h2XFDy4j0uFOBkeSo", "WShaderUtil"), Object.defineProperty(a, "__esModule", {value: !0});
        var n, i, o, r, s, c, l, u, d, h, g, p, f, m, v = function () {
            function n(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, a) {
                return t && n(e.prototype, t), a && n(e, a), e
            }
        }();

        function y(e, t, a, n) {
            a && Object.defineProperty(e, t, {
                enumerable: a.enumerable,
                configurable: a.configurable,
                writable: a.writable,
                value: a.initializer ? a.initializer.call(n) : void 0
            })
        }

        function _(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function b(a, n, e, t, i) {
            var o = {};
            return Object.keys(t).forEach(function (e) {
                o[e] = t[e]
            }), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = e.slice().reverse().reduce(function (e, t) {
                return t(a, n, e) || e
            }, o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(a, n, o), o = null), o
        }

        var w = cc._decorator, A = w.ccclass, C = w.property, S = (n = C({
            type: cc.String,
            displayName: "Vert No MVP Native",
            tooltip: "native顶点着色器的代码模块名称（文件名），比如：gray_vsh。"
        }), i = C({
            type: cc.String,
            displayName: "Vert Web",
            tooltip: "web顶点着色器的代码模块名称（文件名），比如：gray_vsh。"
        }), o = C({
            type: cc.String,
            displayName: "Frag",
            tooltip: "片元着色器的代码模块名称（文件名），比如：gray_fsh。"
        }), r = C({type: cc.Boolean, displayName: "need update", tooltip: "是否update"}), s = C({
            type: cc.Boolean,
            displayName: "Show Debug Logs",
            tooltip: "是否显示调试日志"
        }), c = C({type: cc.Boolean, displayName: "Is Enable Shader", tooltip: "是否默认使用shader"}), A((u = function (e) {
            function r() {
                var e, t, a;
                (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, r);
                for (var n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                return y(t = a = _(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [this].concat(i))), "vert_no_mvp", d, a), y(a, "vert", h, a), y(a, "frag", g, a), y(a, "isFlowlight", p, a), y(a, "isShowDebugLogs", f, a), y(a, "isEnableShader", m, a), _(a, t)
            }

            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(r, cc.Component), v(r, [{
                key: "onLoad", value: function () {
                    if (cc.sys.isNative) {
                        if (null === this.frag || null === this.vert) return void (this.isShowDebugLogs && cc.log("【WShaderUtil】vert or frag is null."))
                    } else if (null === this.frag || null === this.vert_no_mvp) return void (this.isShowDebugLogs && cc.log("【WShaderUtil】vert or frag is null."));
                    this.glNode = this.getComponent("cc.Sprite")._sgNode, this.loadShaderCode(), this.onInitGLProgram(), this.initFlowlight()
                }
            }, {
                key: "update", value: function (e) {
                    this.updateFlowlight(e)
                }
            }, {
                key: "initFlowlight", value: function () {
                    this.isFlowlight && (this._time = 0, this._sin = 0)
                }
            }, {
                key: "updateFlowlight", value: function (e) {
                    this.isFlowlight && (this._time += e, this._program.use(), this._sin = Math.sin(this._time), .99 < this._sin && (this._sin = 0, this._time = 0), cc.sys.isNative ? cc.GLProgramState.getOrCreateWithGLProgram(this._program).setUniformFloat("sys_time", this._sin) : this._program.setUniformLocationWith1f(this._program.getUniformLocationForName("sys_time"), this._sin))
                }
            }, {
                key: "loadShaderCode", value: function () {
                    if (this.isShowDebugLogs && cc.log("【WShaderUtil】require GL code from module."), cc.sys.isNative ? (this.isShowDebugLogs && cc.log("【WShaderUtil】require vert_no_mvp from module."), this._default_vert_no_mvp = t(this.vert_no_mvp)) : (this.isShowDebugLogs && cc.log("【WShaderUtil】require vert from module."), this._default_vert = t(this.vert)), this.isShowDebugLogs && cc.log("【WShaderUtil】require frag from module."), this._black_white_frag = t(this.frag), cc.sys.isNative) {
                        var e = cc.GLProgramState.getOrCreateWithGLProgram();
                        this.origlProgram = e
                    } else this.origlProgram = this.glNode.getShaderProgram()
                }
            }, {
                key: "onInitGLProgram", value: function () {
                    this.isShowDebugLogs && cc.log("【WShaderUtil】init GL Program."), this._program = new cc.GLProgram, cc.sys.isNative ? (this.isShowDebugLogs && cc.log("【WShaderUtil】use native GLProgram"), this._program.initWithString(this._default_vert_no_mvp, this._black_white_frag)) : (this.isShowDebugLogs && cc.log("【WShaderUtil】use webGL GLProgram"), this._program.initWithVertexShaderByteArray(this._default_vert, this._black_white_frag), this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION), this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR), this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS)), this._program.link(), this._program.updateUniforms(), 1 == this.isEnableShader ? this.setProgram(this.glNode, this._program) : this.setProgram(this.glNode, this.origlProgram), this.isShowDebugLogs && cc.log("【WShaderUtil】use GL Program success.")
                }
            }, {
                key: "setProgram", value: function (e, t) {
                    if (this.isShowDebugLogs && cc.log("【WShaderUtil】set GL Program."), cc.sys.isNative) {
                        var a = cc.GLProgramState.getOrCreateWithGLProgram(t);
                        e.setGLProgramState(a)
                    } else e.setShaderProgram(t);
                    var n = e.children;
                    if (n) for (var i = 0; i < n.length; i++) this.setProgram(n[i], t)
                }
            }, {
                key: "enableShader", value: function (e) {
                    null == this.glNode && (this.glNode = this.getComponent("cc.Sprite")._sgNode), this.isShowDebugLogs && cc.log("【WShaderUtil】enableShader " + e + "."), 1 == e ? (this.isEnableShader = !0, this.setProgram(this.glNode, this._program)) : (this.isEnableShader = !1, this.setProgram(this.glNode, this.origlProgram))
                }
            }]), r
        }(), d = b(u.prototype, "vert_no_mvp", [n], {
            enumerable: !0, initializer: function () {
                return ""
            }
        }), h = b(u.prototype, "vert", [i], {
            enumerable: !0, initializer: function () {
                return ""
            }
        }), g = b(u.prototype, "frag", [o], {
            enumerable: !0, initializer: function () {
                return ""
            }
        }), p = b(u.prototype, "isFlowlight", [r], {
            enumerable: !0, initializer: function () {
                return !1
            }
        }), f = b(u.prototype, "isShowDebugLogs", [s], {
            enumerable: !0, initializer: function () {
                return !1
            }
        }), m = b(u.prototype, "isEnableShader", [c], {
            enumerable: !0, initializer: function () {
                return !0
            }
        }), l = u)) || l);
        a.default = S, e.exports = a.default, cc._RF.pop()
    }, {}],
    WindowsPaymentExecutor: [function (e, t, a) {
        "use strict";

        function n() {
        }

        cc._RF.push(t, "004b8AyghFCuY1tLrNZTBsh", "WindowsPaymentExecutor"), n.prototype.payForProduct = function (e, t, a, n, i, o, r, s, c, l, u, d) {
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    WindowsPlatformExecutor: [function (e, t, a) {
        "use strict";

        function n() {
        }

        cc._RF.push(t, "760c7cWcRJGmqq4yIxOXqie", "WindowsPlatformExecutor"), n.prototype.init = function () {
        }, n.prototype.setListener = function (e) {
        }, n.prototype.getSdkVersion = function () {
            return 1
        }, n.prototype.getPlatformId = function () {
            return 2
        }, n.prototype.getPlatformName = function () {
            return 3
        }, n.prototype.getPlatformVersion = function () {
            return 4
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    WindowsUserExecutor: [function (e, t, a) {
        "use strict";

        function n() {
        }

        cc._RF.push(t, "66010SrVAxKl7uwTZPgnIqV", "WindowsUserExecutor"), n.prototype.login = function () {
        }, n.prototype.isSupportFunction = function (e) {
            return !1
        }, n.prototype.callFunction = function (e) {
        }, n.prototype.callFunction = function (e, t) {
        }, t.exports = new n, cc._RF.pop()
    }, {}],
    addcoin: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "3cb1d5uYcBCErO7VXUkY20a", "addcoin");
        var i = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {layoutPut: cc.Layout, effgetcoinPre: cc.Prefab, effNode: cc.Node, coinLabel: cc.Label},
            onLoad: function () {
                this.layPutSize = {}, this.layPutSize.x = this.layoutPut.node.x, this.layPutSize.y = this.layoutPut.node.y, this.layPutSize.width = this.layoutPut.node.width, this.layPutSize.height = this.layoutPut.node.height, this.layPutMatrix = {
                    bl: {
                        x: this.layPutSize.x - this.node.x - this.layPutSize.width / 2,
                        y: this.layPutSize.y - this.node.y - this.layPutSize.height / 2
                    },
                    tr: {
                        x: this.layPutSize.x - this.node.x + this.layPutSize.width / 2,
                        y: this.layPutSize.y - this.node.y + this.layPutSize.height / 2
                    }
                }
            },
            setData: function (e) {
                this.layPutSize = {}, this.layPutSize.x = this.layoutPut.node.x, this.layPutSize.y = this.layoutPut.node.y, this.layPutSize.width = this.layoutPut.node.width, this.layPutSize.height = this.layoutPut.node.height, this.layPutMatrix = {
                    bl: {
                        x: this.layPutSize.x - this.node.x - this.layPutSize.width / 2,
                        y: this.layPutSize.y - this.node.y - this.layPutSize.height / 2
                    },
                    tr: {
                        x: this.layPutSize.x - this.node.x + this.layPutSize.width / 2,
                        y: this.layPutSize.y - this.node.y + this.layPutSize.height / 2
                    }
                };
                var t = parseInt(Math.random() * (this.layPutMatrix.tr.x + .9999 - this.layPutMatrix.bl.x) + this.layPutMatrix.bl.x, 10),
                    a = parseInt(Math.random() * (this.layPutMatrix.tr.y + .9999 - this.layPutMatrix.bl.y) + this.layPutMatrix.bl.y, 10);
                this.coinLabel.string = "+" + i.unit_format(e), this.coinLabel.node.x = t, this.coinLabel.node.y = a;
                var n = cc.sequence(cc.moveBy(.8, 0, 20), cc.removeSelf());
                this.node.runAction(n), playerManager.addNumData("Coin", e), playerManager.addNumData("TotalCoin", e), cc.director.emit("updateCoin"), cc.director.emit("effectCoin"), cc.instantiate(this.effgetcoinPre).parent = this.effNode
            },
            update: function (e) {
            }
        }), cc._RF.pop()
    }, {"number-util": "number-util"}],
    "analytics-data": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "806eftFF+5E2KrsoycKWvm+", "analytics-data");
        // var n = e("instant-util");
        var n = {
            logEvent: function () {

            }
        };
        t.exports = {
            sever_login_event: function () {
                n.logEvent("sever_login")
            }, sever_login_success_event: function () {
                n.logEvent("sever_login_success")
            }, login_page_event: function () {
                n.logEvent("on_login_page")
            }, game_page_event: function () {
                n.logEvent("on_game_page")
            }, login_share_event: function () {
                n.logEvent("login_share")
            }, speed_up_click_event: function () {
                n.logEvent("all_speed_up_click")
            }, share_speed_up_event: function () {
                n.logEvent("share_speed_up")
            }, share_speed_up_success_event: function () {
                n.logEvent("share_speed_up_success")
            }, watch_video_speed_up_event: function () {
                n.logEvent("watch_video_speed_up")
            }, watch_video_speed_up_success_event: function () {
                n.logEvent("watch_video_speed_up_success")
            }, use_diamond_speed_up_event: function () {
                n.logEvent("use_diamond_speed_up")
            }, all_bonus_coin_click_event: function () {
                n.logEvent("all_bonus_coin_click")
            }, share_get_bonus_coin_event: function () {
                n.logEvent("share_get_bonus_coin")
            }, share_get_bonus_coin_success_event: function () {
                n.logEvent("share_get_bonus_coin_success")
            }, watch_video_get_bonus_coin_event: function () {
                n.logEvent("watch_video_get_bonus_coin")
            }, watch_video_get_bonus_coin_success_event: function () {
                n.logEvent("watch_video_get_bonus_coin_success")
            }, share_get_bonus_box_event: function () {
            }, share_get_bonus_box_success_event: function () {
            }, watch_video_get_bonus_box_event: function () {
            }, watch_video_get_bonus_box_success_event: function () {
            }, share_get_bonus_all_event: function () {
            }, share_get_bonus_all_success_event: function () {
            }, watch_video_get_bonus_all_event: function () {
            }, watch_video_get_bonus_all_success_event: function () {
            }, all_spin_click_event: function () {
                n.logEvent("all_spin_click")
            }, share_spin_get_ticket_event: function () {
                n.logEvent("share_spin_get_ticket")
            }, share_spin_get_ticket_success_event: function () {
                n.logEvent("share_spin_get_ticket_success")
            }, watch_video_spin_get_ticket_event: function () {
                n.logEvent("watch_video_spin_get_ticket")
            }, watch_video_spin_get_ticket_success_event: function () {
                n.logEvent("watch_video_spin_get_ticket_success")
            }, spin_click_event: function () {
                n.logEvent("spin_go_click")
            }, spin_click_lack_event: function () {
                n.logEvent("spin_go_click_lack")
            }, share_spin_click_lack_get_ticket_event: function () {
                n.logEvent("share_spin_click_lack_get_ticket")
            }, share_spin_click_lack_get_ticket_success_event: function () {
                n.logEvent("share_spin_click_lack_get_ticket_success")
            }, watch_video_spin_click_lack_get_ticket_event: function () {
                n.logEvent("watch_video_spin_click_lack_get_ticket")
            }, watch_video_spin_click_lack_get_ticket_success_event: function () {
                n.logEvent("watch_video_spin_click_lack_get_ticket_success")
            }, share_5times_click_event: function () {
                n.logEvent("share_5times_click")
            }, share_5times_click_success_event: function () {
                n.logEvent("share_5times_click_success")
            }, share_10times_click_event: function () {
                n.logEvent("share_10times_click")
            }, share_10times_click_success_event: function () {
                n.logEvent("share_10times_click_success")
            }, watch_video_5times_click_event: function () {
                n.logEvent("watch_video_5times_click")
            }, watch_video_5times_click_success_event: function () {
                n.logEvent("watch_video_5times_click_success")
            }, watch_video_10times_click_event: function () {
                n.logEvent("watch_video_10times_click")
            }, watch_video_10times_click_success_event: function () {
                n.logEvent("watch_video_10times_click_success")
            }, game_share_event: function () {
            }, game_share_success_event: function () {
            }, game_share_fail_event: function (e) {
            }, speed_up_with_share_event: function () {
                n.logEvent("speed_up_with_share")
            }, speed_up_without_share_event: function () {
                n.logEvent("speed_up_without_share")
            }, watch_video_event: function (e) {
            }, watch_video_success_event: function (e) {
            }, watch_video_shop_event: function (e) {
                n.logEvent("watch_video_shop")
            }, watch_video_shop_success_event: function (e) {
                n.logEvent("watch_video_shop_success")
            }, share_get_coin_event: function () {
                n.logEvent("share_get_coin")
            }, share_get_coin_success_event: function () {
                n.logEvent("share_get_coin_success")
            }, watch_video_get_coin_event: function () {
                n.logEvent("watch_video_get_coin")
            }, watch_video_get_coin_success_event: function () {
                n.logEvent("watch_video_get_coin_success")
            }, share_get_coin_fail_event: function (e) {
                "limit" == e ? n.logEvent("share_get_coin_limit") : n.logEvent("share_get_coin_fail")
            }, entry_with_type_event: function (e) {
                "share" == e ? n.logEvent("entry_with_share") : "update" == e && n.logEvent("entry_with_update")
            }, entry_with_context_event: function (e, t) {
                e && n.logEvent("entry_with_context", null, {contextId: e, group: t})
            }, offline_coin_click_event: function () {
                n.logEvent("offline_coin_click")
            }, spin_share_event: function () {
                n.logEvent("share_spin")
            }, spin_share_success_event: function () {
                n.logEvent("share_spin_success")
            }, upgrade_share_event: function () {
                n.logEvent("share_upgrade")
            }, upgrade_share_success_event: function () {
                n.logEvent("share_upgrade_success")
            }, share_levelup_event: function () {
                n.logEvent("level_up_share")
            }, share_levelup_success_event: function () {
                n.logEvent("level_up_share_success")
            }, share_offline_coin_event: function (e) {
                n.logEvent("share_offline_coin", null, {isShare: e})
            }, share_offline_coin_success_event: function () {
                n.logEvent("share_offline_coin_success")
            }, watch_video_offiline_coin_event: function () {
                n.logEvent("watch_video_offiline_coin")
            }, watch_video_offiline_coin_success_event: function () {
                n.logEvent("watch_video_offiline_coin_success")
            }, share_offline_coin_fail_event: function (e) {
                "limit" == e ? n.logEvent("share_offline_coin_limit") : n.logEvent("share_offline_coin_fail")
            }, get_offline_coin_without_share_event: function () {
                n.logEvent("offline_coin_without_share")
            }, create_shortcut_event: function () {
                n.logEvent("create_shortcut", null, {platform: n.getPlatform()})
            }, player_link_click_event: function (e) {
                n.logEvent("player_link_click", null, {type: e})
            }, new_player_link_click_event: function (e) {
                n.logEvent("new_player_link_click", null, {type: e})
            }, new_player_switch_click_event: function (e) {
                n.logEvent("new_player_switch_click", null, {game_name: e})
            }, fb_set_data_fail_event: function (e) {
                n.logEvent("fb_set_data_fail", null, {msg: e})
            }, fb_get_data_fail_event: function (e) {
                n.logEvent("fb_get_data_fail", null, {msg: e})
            }, achieve_level_event: function (e) {
                if (e) switch (e) {
                    case 1:
                        n.logEvent("achieve_level_2");
                        break;
                    case 2:
                        n.logEvent("achieve_level_3");
                        break;
                    case 3:
                        n.logEvent("achieve_level_4");
                        break;
                    case 4:
                        n.logEvent("achieve_level_5");
                        break;
                    case 9:
                        n.logEvent("achieve_level_10");
                        break;
                    case 14:
                        n.logEvent("achieve_level_15");
                        break;
                    case 19:
                        n.logEvent("achieve_level_20");
                        break;
                    case 24:
                        n.logEvent("achieve_level_25");
                        break;
                    case 29:
                        n.logEvent("achieve_level_30");
                        break;
                    case 34:
                        n.logEvent("achieve_level_35");
                        break;
                    case 35:
                        n.logEvent("achieve_level_36");
                        break;
                    case 36:
                        n.logEvent("achieve_level_37")
                }
            }, achieve_character_level_event: function (e) {
                if (e) switch (e) {
                    case 4:
                        n.logEvent("achieve_character_level_5_event");
                        break;
                    case 9:
                        n.logEvent("achieve_character_level_10_event");
                        break;
                    case 19:
                        n.logEvent("achieve_character_level_20_event");
                        break;
                    case 29:
                        n.logEvent("achieve_character_level_30_event");
                        break;
                    case 34:
                        n.logEvent("achieve_character_level_35_event");
                        break;
                    case 39:
                        n.logEvent("achieve_character_level_40_event");
                        break;
                    case 44:
                        n.logEvent("achieve_character_level_45_event")
                }
            }, achieve_level_5_event: function () {
                n.logEvent("achieve_level_5")
            }, achieve_level_10_event: function () {
                n.logEvent("achieve_level_10")
            }, achieve_level_20_event: function () {
                n.logEvent("achieve_level_20")
            }, achieve_level_30_event: function () {
                n.logEvent("achieve_level_30")
            }, data_loading_event: function () {
                n.logEvent("data_loading")
            }, invite_friends_info_start_event: function () {
                n.logEvent("invite_friends_info_start")
            }, invite_friends_info_success_event: function () {
                n.logEvent("invite_friends_info_success")
            }, invite_friends_info_err_event: function (e) {
                n.logEvent("invite_friends_info_err", null, {code: e})
            }, invite_friends_event: function () {
                n.logEvent("invite_friends_share")
            }, invite_friends_success_event: function () {
                n.logEvent("invite_friends_success_share")
            }, invite_new_success_event: function () {
                n.logEvent("invite_new_success")
            }, unlock_fish_share_event: function () {
            }, task_btn_start_event: function (e, t) {
                e = e || "undefined", null != t ? n.logEvent("task_btn_start_" + e, null, {times: t}) : n.logEvent("task_btn_start_" + e)
            }, task_btn_claim_event: function (e, t) {
                e = e || "undefined", null != t ? n.logEvent("task_btn_claim_" + e, null, {times: t}) : n.logEvent("task_btn_claim_" + e)
            }, mission_play_share_success_event: function () {
                n.logEvent("mission_play_share_success")
            }, mission_watch_success_event: function () {
                n.logEvent("mission_watch_success")
            }, gift_claim_event: function (e) {
                n.logEvent("gift_claim_" + e)
            }, switchgameasync_event: function (e) {
                n.logEvent("click_to_" + e)
            }, all_share_click_event: function () {
                n.logEvent("all_share_click")
            }, reset_data_event: function () {
                n.logEvent("reset_data")
            }, bot_recall_event: function (e) {
                n.logEvent("bot_recall_" + e)
            }, switch_hugefish_from_dialog_event: function () {
                n.logEvent("switch_hugefish_from_dialog")
            }, recommend_icon_click_event: function (e) {
                n.logEvent("recommend_icon_click", null, {name: e})
            }, catch_fish_click_event: function () {
                n.logEvent("save_hero_click")
            }, catch_fish_share_event: function () {
                n.logEvent("save_hero_share")
            }, catch_fish_claim_event: function (e) {
                null != e ? n.logEvent("save_hero_claim", null, {times: e}) : n.logEvent("save_hero_claim")
            }, share_free_upgrade_event: function () {
                n.logEvent("share_free_upgrade")
            }, share_free_upgrade_success_event: function () {
                n.logEvent("share_free_upgrade_success")
            }, watch_video_free_upgrade_event: function () {
                n.logEvent("watch_video_free_upgrade")
            }, watch_video_free_upgrade_success_event: function () {
                n.logEvent("watch_video_free_upgrade_success")
            }, all_diamond_click_event: function () {
                n.logEvent("all_diamond_click")
            }, share_quick_get_diamond_event: function () {
            }, share_quick_get_diamond_success_event: function () {
            }, watch_video_quick_get_diamond_event: function () {
                n.logEvent("watch_video_quick_get_diamond")
            }, watch_video_quick_get_diamond_success_event: function () {
                n.logEvent("watch_video_quick_get_diamond_success")
            }, stay_time_length_event: function (e) {
                cc.log("stay_time_length_event=" + e), n.logEvent("stay_time_length", null, {time: e})
            }, quick_purchase_click_event: function () {
                n.logEvent("quick_purchase_click")
            }, share_level_up_event: function () {
                n.logEvent("share_level_up")
            }, share_level_up_success_event: function () {
                n.logEvent("share_level_up_success")
            }, delete_frequency_event: function () {
                n.logEvent("delete_frequency")
            }, shop_page_click_event: function () {
                n.logEvent("shop_page_click")
            }, coin_buy_click_event: function () {
                n.logEvent("coin_buy_click")
            }, diamond_buy_click_event: function () {
                n.logEvent("diamond_buy_click")
            }, all_daily_click_event: function () {
                n.logEvent("all_daily_click")
            }, daily_claimed_event: function () {
                n.logEvent("daily_claimed")
            }, share_double_claimed_diamond_event: function () {
                n.logEvent("share_double_claimed_diamond")
            }, share_double_claimed_diamond_success_event: function () {
                n.logEvent("share_double_claimed_diamond_success")
            }, watch_video_double_claimed_diamond_event: function () {
                n.logEvent("watch_video_double_claimed_diamond")
            }, watch_video_double_claimed_diamond_success_event: function () {
                n.logEvent("watch_video_double_claimed_diamond_success")
            }, share_claimed_diamond_again_event: function () {
                n.logEvent("share_claimed_diamond_again")
            }, share_claimed_diamond_again_success_event: function () {
                n.logEvent("share_claimed_diamond_again_success")
            }, watch_video_claimed_diamond_again_event: function () {
                n.logEvent("watch_video_claimed_diamond_again")
            }, watch_video_claimed_diamond_again_success_event: function () {
                n.logEvent("watch_video_claimed_diamond_again_success")
            }, all_rank_click_event: function () {
                n.logEvent("all_rank_click")
            }, share_rank_event: function () {
                n.logEvent("share_rank")
            }, share_rank_success_event: function () {
                n.logEvent("share_rank_success")
            }, all_reward_click_event: function () {
                n.logEvent("all_reward_click")
            }, share_reward_event: function () {
                n.logEvent("share_reward")
            }, share_reward_success_event: function () {
                n.logEvent("share_reward_success")
            }, watch_reward_event: function () {
                n.logEvent("watch_reward")
            }, watch_reward_success_event: function () {
                n.logEvent("watch_reward_success")
            }, all_reward_get_click_event: function () {
                n.logEvent("all_reward_get_click")
            }, share_get_diamond_event: function () {
                n.logEvent("share_get_diamond")
            }, share_get_diamond_success_event: function () {
                n.logEvent("share_get_diamond_success")
            }, watch_video_get_diamond_event: function () {
                n.logEvent("watch_video_get_diamond")
            }, watch_video_get_diamond_success_event: function () {
                n.logEvent("watch_video_get_diamond_success")
            }, subscribe_bot_success_event: function () {
                n.logEvent("subscribe_bot_success")
            }, subscribe_bot_success_login_event: function () {
                n.logEvent("subscribe_bot_success_login")
            }, subscribe_bot_success_level5_event: function () {
                n.logEvent("subscribe_bot_success_level5")
            }, game_from_uc_event: function (e, t) {
                n.logEvent("game_switch_form_uc", null, {name: e, act_appid: t})
            }, all_delete_event: function () {
                n.logEvent("all_delete")
            }, all_delete_click_event: function () {
                n.logEvent("all_delete_click")
            }, all_guide_step_event: function (e) {
                n.logEvent("all_guide_step", null, {type: e})
            }, all_novice_guide_success_event: function () {
                n.logEvent("all_novice_guide_success")
            }, auto_update_start_event: function (e) {
                n.logEvent("auto_update_send", null, {type: e})
            }, auto_update_success_event: function (e) {
                n.logEvent("auto_update_success", null, {type: e})
            }
        }, cc._RF.pop()
    }, {"instant-util": "instant-util"}],
    arrowIcon: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "c017aj/2mhB664BY7B82c2y", "arrowIcon"), cc.Class({
            extends: cc.Component,
            properties: {arrowSprite: [cc.Sprite]},
            onLoad: function () {
            },
            update: function (e) {
            },
            setData: function (e) {
                for (var t = 0; t < this.arrowSprite.length; t++) this.arrowSprite[t].node.active = !1;
                for (t = 0; t < e; t++) this.arrowSprite[t].node.active = !0
            }
        }), cc._RF.pop()
    }, {}],
    audioManager: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "94b4eNTDqVDVIlSfE32YTHX", "audioManager");
        var s = {
            sfx_button: 0,
            sfx_finish: 1,
            sfx_merge: 2,
            sfx_purchase: 3,
            sfx_race_start: 4,
            sfx_unlock: 5,
            coins: 6,
            congratulations: 7,
            bgm: 8
        };
        cc.Class({
            extends: cc.Component,
            properties: {sounds: {url: cc.AudioClip, default: []}, bgm: {url: cc.AudioClip, default: null}},
            onLoad: function () {
                var r = this;
                cc.loader.loadResDir("sound", cc.AudioClip, function (e, t, a) {
                    for (var n in t) {
                        var i = t[n], o = i;
                        "bgm" == (o = (o = o.replace(/res\/raw-assets\/resources\/sound\//, "")).replace(/.mp3/, "")) && null == r.bgm ? (r.bgm = i, r.bgmCB && r.bgmCB()) : null != s[o] && null == r.sounds[s[o]] && (r.sounds[s[o]] = i)
                    }
                })
            },
            playSound: function (e) {
                playerManager.getObjData("enableSound") && null != s[e] && null != this.sounds[s[e]] && cc.audioEngine.play(this.sounds[s[e]], !1, 1)
            },
            playBGSound: function () {
                var e = this;
                this.stopBGSound(), playerManager.getObjData("enableSound") && (null != this.bgm ? this.bgsoundId = cc.audioEngine.play(this.bgm, !0, 1) : this.bgmCB = function () {
                    e.bgsoundId = cc.audioEngine.play(e.bgm, !0, 1)
                })
            },
            stopBGSound: function () {
                null != this.bgsoundId && (cc.audioEngine.stop(this.bgsoundId), this.bgsoundId = null)
            }
        }), cc._RF.pop()
    }, {}],
    bonustime_dlg: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "6d0f7+TO+NKv4VSYO4b5yNB", "bonustime_dlg");
        cc.Class({
            extends: cc.Component,
            properties: {btnback: cc.Button, shareBtn: cc.Node, share_toggle: {default: null, type: cc.Toggle}},
            onLoad: function () {
            },
            setData: function (e, t) {
                this.callback = e, this.callback1 = t
            },
            shareClick: function () {
                this.share_toggle.isChecked ? this.callback && this.callback() : this.callback1 && this.callback1()
            },
            closeDialog: function () {
                this.node.removeFromParent(!1)
            }
        }), cc._RF.pop()
    }, {}],
    boxnode: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "f70f68G7axAGaC26R8hpTp8", "boxnode");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                this.curcd = 0, this.MaxCD = 10, this.noUpdate = !1, this.offsettime = globalManager.BoxCD / 10
            }, updateState: function () {
            }, clickBox: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                    t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                if ((this.curcd < 10 || 1 != t.scriptGamePaodao.isPoolFull(e)) && this.curcd++, 10 <= this.curcd && 1 != t.scriptGamePaodao.isPoolFull(e)) {
                    this.curcd = 0, t.playPurchaseSound();
                    fish_data[this.index];
                    var a = playerManager.getNumData("UnlockLevel"), n = gameData.getBoxLevel(a) - 1;
                    t.scriptGamePaodao.boxItem(n, 0), this.noUpdate = !1
                } else 10 <= this.curcd && 1 == t.scriptGamePaodao.isPoolFull(e) ? this.noUpdate = !0 : this.noUpdate = !1
            }, update: function (e) {
            }
        }), cc._RF.pop()
    }, {}],
    "catch-fish-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "871e8DroIVOPZFIiutCRwK8", "catch-fish-dialog");
        var o = e("number-util"), n = e("instant-util"), r = e("analytics-data");
        cc.Class({
            extends: cc.Component,
            properties: {
                btn_label: {default: null, type: cc.Label},
                count_label: {default: null, type: cc.Label},
                count_down_label: {default: null, type: cc.Label},
                count_down_layout: {default: null, type: cc.Node},
                btn_share: cc.Sprite,
                btn_icons: {default: [], type: cc.SpriteFrame},
                fishSprite: cc.Sprite,
                _canClaim: !1,
                _taskData: null,
                _countDownId: null
            },
            onLoad: function () {
                r.catch_fish_click_event();
                var e = cc.sys.localStorage.getItem("dailyData1");
                e && (e = JSON.parse(cc.sys.localStorage.getItem("dailyData1")), this.setData(e)), server_util.getActivityList(function (e) {
                    e && (this.setData(e), cc.sys.localStorage.setItem("dailyData1", JSON.stringify(e)))
                }.bind(this), function (e) {
                }.bind(this)), this.count_down_layout.active = !1;
                var t = globalManager.serverResetTime - globalManager.serverLoginTime;
                if (cc.log("globalManager.resetCd=" + t), 0 < t && 0 < globalManager.loginTime) {
                    this.count_down_layout.active = !0;
                    var a = t - (Math.floor(Date.parse(new Date) / 1e3) - globalManager.loginTime);
                    a = a < 0 ? 86400 + a : a, this.countDownTime(a), this._countDownId = setInterval(function () {
                        a -= 1, cc.log("remainTime=" + a), a <= 0 && (clearInterval(this._countDownId), this.onLoad()), this.countDownTime(a)
                    }.bind(this), 1e3)
                }
                var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache"),
                    i = playerManager.getObjData("catchFish");
                null != i.catchLevel && o.isOneDay(i.resetTime, globalManager.serverLoginTime) ? this.fishSprite.spriteFrame = n.getItemFrame(i.catchLevel) : this.fishSprite.spriteFrame = n.getItemFrame(playerManager.getNumData("UnlockLevel"))
            },
            setData: function (e) {
                for (var t = 0; t < e.length; t++) {
                    var a = e[t], n = playerManager.getObjData("catchFish");
                    cc.log("catchFish=" + JSON.stringify(n)), n.taskId && a.task_id == n.taskId && (1 <= (this._taskData = a).reward_num ? (this.btn_label.string = "Claim", this.count_label.string = "(" + a.progress + "/" + a.total_progress + ")", this._canClaim = !0, this.btn_share.spriteFrame = this.btn_icons[1], this.btn_label.node.getComponent(cc.LabelOutline).enabled = !1) : (this.btn_label.string = "分享", this.count_label.string = "(" + a.progress + "/" + a.total_progress + ")", this._canClaim = !1, this.btn_share.spriteFrame = this.btn_icons[0], this.btn_label.node.getComponent(cc.LabelOutline).enabled = !0))
                }
            },
            btnClick: function () {
                var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                if (this._canClaim) t.scriptGamePaodao.isPoolFull() ? this.node.destroy() : server_util.receiveTask(this._taskData.task_id, function () {
                    playerManager.addNumData("taskSaveHeros", 1), r.catch_fish_claim_event(playerManager.getNumData("taskSaveHeros"));
                    var e = playerManager.getObjData("catchFish");
                    t.scriptGamePaodao.catchFish(e.catchLevel), playerManager.setObjData("catchFish", {}), t.hideCatchFishIcon(), t.refreshActivityList(), this.node.destroy()
                }.bind(this)); else {
                    r.catch_fish_share_event();
                    var e = globalManager.getShareConfig(globalManager.shareType.catchFish), a = {
                        type: globalManager.shareType.catchFish,
                        inviter: n.getPlayerID(),
                        taskId: this._taskData.task_id,
                        rewards: "1"
                    };
                    n.share(function () {
                        cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("Wait your friends click the link.")
                    }, e.img, e.text, a)
                }
            },
            closeBtn: function () {
                this.node.destroy()
            },
            countDownTime: function (e) {
                var t = parseInt(e / 3600), a = parseInt((e - 3600 * t) / 60), n = e - 3600 * t - 60 * a;
                this.count_down_label.string = (t < 10 ? "0" + t : t) + ":" + (a < 10 ? "0" + a : a) + ":" + (n < 10 ? "0" + n : n)
            },
            onDestroy: function () {
                clearInterval(this._countDownId)
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    chat_dlg: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "77afezz+ulDabeJfNnZUe7r", "chat_dlg");
        cc.Class({
            extends: cc.Component,
            properties: {dlgNode: [cc.Node], bottom_label: [cc.Label]},
            onLoad: function () {
                this.closeCountDown = 3
            },
            update: function (e) {
                this.closeCountDown -= e, this.closeCountDown <= 0 && this.closeDialog()
            },
            setData: function (e, t) {
                var a = gameData.getDialogue(e, t), n = a.index, i = a.text;
                this.dlgNode[n].active = !0;
                for (var o = 0; o < this.bottom_label.length; o++) this.bottom_label[o].string = i
            },
            closeDialog: function () {
                this.node.removeFromParent(!0)
            }
        }), cc._RF.pop()
    }, {}],
    "count-down-node": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "f3376OGyF9MuYe1ZY+sZ8dN", "count-down-node");
        var o = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {count_time_label: {default: null, type: cc.Label}},
            setData: function (e, n) {
                var i = this;
                i.node.active = !0;
                var t = parseInt(e / 60), a = e - 60 * t;
                i.count_time_label.string = t + ":" + (a < 10 ? "0" + a : a), this.countDownId = o.countTime(e, function (e) {
                    if (cc.isValid(i.node)) {
                        var t = parseInt(e / 60), a = e - 60 * t;
                        i.count_time_label && (i.count_time_label.string = t + ":" + (a < 10 ? "0" + a : a)), n(e), 0 == e && i.node && (i.node.active = !1)
                    } else o.clearInterval(this.countDownId)
                }.bind(this))
            }
        }), cc._RF.pop()
    }, {"number-util": "number-util"}],
    customShare: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "dee5fVbOYBH0YTTqqs1ZvIS", "customShare");
        e("webimg-util");
        cc.Class({
            extends: cc.Component, properties: {playerIcon: cc.Sprite, fishIcon: cc.Sprite}, onLoad: function () {
            }, update: function (e) {
            }, setIcon: function (e, t) {
                if (null != this.playerIcon && (this.playerIcon.spriteFrame = new cc.SpriteFrame(e)), null != this.fishIcon) {
                    var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                    this.fishIcon.spriteFrame = a.getItemFrame(t)
                }
            }
        }), cc._RF.pop()
    }, {"webimg-util": "webimg-util"}],
    "daily-bonus-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "2ac00wO7yFBRK430rmFeBr/", "daily-bonus-dialog");
        var n = e("number-util"), i = (e("instant-util"), e("analytics-data")), o = [{
            task_id: "1013",
            task_title: "Ask friends for help",
            task_desc: "Earn points with a friend's click.",
            task_obj_type: "5",
            total_progress: "1",
            total_task_times: "9999",
            scene: "0",
            config: {},
            reward: [{
                reward_id: "1024",
                reward_type: "1",
                reward_title: "",
                reward_desc: "",
                number: "1000"
            }, {reward_id: "1025", reward_type: "2", reward_title: "", reward_desc: "", number: "20"}],
            progress: "0",
            task_times: "2",
            reward_num: "0"
        }, {
            task_id: "1004",
            task_title: "Login game",
            task_desc: "",
            task_obj_type: "2",
            total_progress: "1",
            total_task_times: "1",
            scene: "0",
            config: {},
            reward: [{
                reward_id: "1010",
                reward_type: "1",
                reward_title: "",
                reward_desc: "",
                number: "1000"
            }, {reward_id: "1011", reward_type: "2", reward_title: "", reward_desc: "", number: "5"}],
            progress: "0",
            task_times: "0",
            reward_num: "0"
        }, {
            task_id: "1005",
            task_title: "Watch video",
            task_desc: "",
            task_obj_type: "3",
            total_progress: "1",
            total_task_times: "9",
            scene: "0",
            config: {interval: 600},
            reward: [{
                reward_id: "1012",
                reward_type: "1",
                reward_title: "",
                reward_desc: "",
                number: "1000"
            }, {reward_id: "1013", reward_type: "2", reward_title: "", reward_desc: "", number: "10"}],
            progress: "0",
            task_times: "0",
            reward_num: "0"
        }], r = "dailyData1";
        globalManager.taskType;
        cc.Class({
            extends: cc.Component,
            properties: {
                father_Node: {default: null, type: cc.Node},
                daily_bonus_prefab: {default: null, type: cc.Prefab},
                task_layout: {default: null, type: cc.Node}
            },
            onLoad: function () {
                var e = cc.sys.localStorage.getItem(r);
                cc.log("localData=" + e), e = e ? JSON.parse(e) : o;
                var t = this.setData(e);
                this.task_layout.getComponent("list-adapter").initListView(this.daily_bonus_prefab, "daily-node", t, null), i.invite_friends_info_start_event(), server_util.getActivityList(function (e) {
                    if (i.invite_friends_info_success_event(), e) {
                        cc.sys.localStorage.setItem(r, JSON.stringify(e));
                        var t = this.setData(e);
                        this.task_layout.getComponent("list-adapter").refreshListView(t), cc.log("this.task_layout.getChildren().length=" + this.task_layout.getChildren().length)
                    }
                }.bind(this), function (e) {
                    e.code && i.invite_friends_info_err_event(e.code)
                }.bind(this))
            },
            setData: function (e) {
                if (e && !(e.length <= 0)) {
                    var t = playerManager.getObjData("dailyTask"), a = t.taskProgress;
                    return cc.log("dailyTask=" + JSON.stringify(t)), n.isOneDay(t.taskTime, Date.parse(new Date)) ? e.map(function (e) {
                        "2" == e.task_obj_type && (e.reward_num = 1), e.task_obj_type == globalManager.taskType.share && (globalManager.hasShareTask = !0);
                        for (var t = 0; t < a.length; t++) if ("1" != e.task_obj_type && "5" != e.task_obj_type && a[t].task_id == e.task_id) {
                            e.reward_num = a[t].reward_num, e.do_num = a[t].do_num;
                            break
                        }
                    }) : (playerManager.setObjData("dailyTask", {
                        taskTime: Date.parse(new Date),
                        taskProgress: a
                    }), e.map(function (e) {
                        "2" == e.task_obj_type && (e.reward_num = 1), e.task_obj_type == globalManager.taskType.share && (globalManager.hasShareTask = !0)
                    })), e
                }
            },
            start: function () {
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    "daily-node": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "7ab54DNQcdB/7Y3WiDKITmS", "daily-node");
        var o = e("instant-util"), r = e("number-util"), n = e("analytics-data"), s = 1, c = 2,
            l = globalManager.taskType, u = 0, d = 1, h = 2;
        cc.Class({
            extends: cc.Component,
            properties: {
                title_label: {default: null, type: cc.Label},
                reward_layout: {default: null, type: cc.Node},
                coins_label: {default: null, type: cc.Label},
                count_Node: {default: null, type: cc.Node},
                count_label1: {default: null, type: cc.Label},
                count_label: {default: null, type: cc.Label},
                task_sprite: {default: null, type: cc.Sprite},
                task_icons: {default: [], type: cc.SpriteFrame},
                btn_states: {default: [], type: cc.SpriteFrame},
                btn_bg: {default: null, type: cc.Sprite},
                btn_node: {default: null, type: cc.Button},
                btn_label: {default: null, type: cc.Label},
                btn_count_down: {default: null, type: cc.Node},
                _task: null,
                _adTimeCd: 0,
                _point: null,
                _price: null,
                _btnState: null,
                _totalProgress: null,
                _doNum: null,
                _rewardNum: null,
                _callback: null
            },
            onLoad: function () {
            },
            start: function () {
            },
            setData: function (e, t) {
                var a = this, n = parseInt(e.task_obj_type);
                this._task = e, t && (this._callback = t), this.saveData(e), this._totalProgress = parseInt(e.total_task_times), this._doNum = parseInt(e.do_num ? e.do_num : 0), this._rewardNum = parseInt(e.reward_num), this.title_label.string = e.task_desc;
                var i = {};
                switch (i[l.watchVideo] = function () {
                    a._rewardNum = 1
                }, i[l.share] = function () {
                    a._rewardNum = 1
                }, i[l.mergeTimes] = function () {
                    e.progress = globalManager.getTaskProgress(l.mergeTimes), e.progress >= parseInt(e.total_progress) && (e.progress = parseInt(e.total_progress), a._doNum < a._totalProgress && (a._rewardNum = parseInt(e.reward_num) + 1, e.reward_num = "" + (parseInt(e.reward_num) + 1)))
                }, i[l.speedupTimes] = function () {
                    e.progress = globalManager.getTaskProgress(l.speedupTimes), e.progress >= parseInt(e.total_progress) && (e.progress = parseInt(e.total_progress), a._doNum < a._totalProgress && (a._rewardNum = parseInt(e.reward_num) + 1, e.reward_num = "" + (parseInt(e.reward_num) + 1)))
                }, i[n] && i[n](), e.reward.map(function (e) {
                    if (e.reward_type == c) this._point = parseInt(e.number)/*, this.point_label.string = e.number + " points"*/; else if (e.reward_type == s) {
                        var t = playerManager.getNumData("UnlockLevel") - 4;
                        t = 0 <= t ? t : 0, this._price = playerManager.getObjData("Price" + t), this._price = r.galaxyMut(this._price, e.number / 100), cc.log("this._price=" + this._price + "    reward.number=" + e.number), this.coins_label.string = r.unit_format(this._price)
                    }
                }.bind(this)), this._price = null == this._price ? 0 : this._price, this.task_sprite.spriteFrame = this.task_icons[n - 1], this.btn_node.interactable = !0, cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").checkReward(), cc.director.emit("refresh_mission_red"), this.count_Node.active = !1, n) {
                    case l.inviteFriend:
                        0 < this._rewardNum ? (this._btnState = u, this.btn_bg.spriteFrame = this.btn_states[u], this.btn_label.string = "CLAIM", this.btn_label.node.getComponent(cc.LabelOutline).color = new cc.color(126, 96, 33, 255)) : (this._btnState = h, this.btn_bg.spriteFrame = this.btn_states[h], this.btn_label.string = "GO", this.btn_label.node.getComponent(cc.LabelOutline).color = new cc.color(37, 102, 151, 255)), this.count_Node.active = !1;
                        break;
                    case l.playWithFriend:
                        this.count_Node.active = 0 < this._rewardNum, this.count_label1.string = e.progress, this.count_label.string = "/" + e.total_progress, this._btnState = u, this.btn_bg.spriteFrame = this.btn_states[u], this.btn_label.string = "CLAIM", this.btn_label.node.getComponent(cc.LabelOutline).color = new cc.color(126, 96, 33, 255), this.btn_node.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.2, 1.05, 1.05), cc.scaleTo(.2, 1, 1), cc.delayTime(.5))));
                        break;
                    case l.watchVideo:
                        /* "WEB" != o.getPlatform() &&*/
                        1 != globalManager.hasShareTask || this.node.removeFromParent(!0), this.count_Node.active = !0, this.count_label1.string = 1, this.count_label.string = "/1", this._doNum >= this._totalProgress ? (this._btnState = d, this.btn_bg.spriteFrame = this.btn_states[d], this.btn_node.interactable = !1, this.btn_label.string = "TOMORROW", this.btn_label.node.getComponent(cc.LabelOutline).enabled = !1) : (this._btnState = h, this.btn_bg.spriteFrame = this.btn_states[u], this.btn_label.string = "CLAIM", this.btn_label.node.getComponent(cc.LabelOutline).color = new cc.color(126, 96, 33, 255), this.startCountDown(l.watchVideo));
                        break;
                    case l.share:
                        this.count_Node.active = !0, this.count_label1.string = 1, this.count_label.string = "/1", this._doNum >= this._totalProgress ? (this._btnState = d, this.btn_bg.spriteFrame = this.btn_states[d], this.btn_node.interactable = !1, this.btn_label.string = "TOMORROW", this.btn_label.node.getComponent(cc.LabelOutline).enabled = !1) : (this._btnState = h, this.btn_bg.spriteFrame = this.btn_states[u], this.btn_label.string = "CLAIM", this.btn_label.node.getComponent(cc.LabelOutline).color = new cc.color(126, 96, 33, 255), this.startCountDown(l.share));
                        break;
                    case l.login:
                        this._doNum < this._totalProgress ? (this._btnState = u, this.btn_bg.spriteFrame = this.btn_states[u], this.btn_label.string = "CLAIM", this.btn_label.node.getComponent(cc.LabelOutline).color = new cc.color(126, 96, 33, 255)) : (this._btnState = d, this.btn_bg.spriteFrame = this.btn_states[d], this.btn_node.interactable = !1, this.btn_label.string = "TOMORROW", this.btn_label.node.getComponent(cc.LabelOutline).enabled = !1);
                        break;
                    case l.mergeTimes:
                    case l.speedupTimes:
                        this.count_Node.active = !0, this.count_label1.string = e.progress, this.count_label.string = "/" + e.total_progress, 0 < this._rewardNum ? (this._btnState = u, this.btn_bg.spriteFrame = this.btn_states[u], this.btn_label.string = "CLAIM", this.btn_label.node.getComponent(cc.LabelOutline).color = new cc.color(126, 96, 33, 255)) : this._doNum >= this._totalProgress ? (this._btnState = d, this.btn_bg.spriteFrame = this.btn_states[d], this.btn_node.interactable = !1, this.btn_label.string = "TOMORROW", this.btn_label.node.getComponent(cc.LabelOutline).enabled = !1) : (this._btnState = h, this.btn_bg.spriteFrame = this.btn_states[h], this.btn_label.string = "GO", this.btn_label.node.getComponent(cc.LabelOutline).color = new cc.color(37, 102, 151, 255));
                        break;
                    default:
                        this.node.removeFromParent(!0)
                }
            },
            claimClick: function () {
                var e = this._task, t = parseInt(this._task.task_obj_type);
                if (this._btnState == u) {
                    this._callback && this._callback(this._point);
                    var a = this._price;
                    switch (t) {
                        case l.inviteFriend:
                            a = this._price, server_util.receiveTask(this._task.task_id), this._rewardNum--, this._task.reward_num = this._rewardNum, this.setData(this._task), playerManager.addNumData("taskInviteNewOnes", 1);
                            break;
                        case l.playWithFriend:
                            a = this._price, server_util.receiveTask(this._task.task_id), this._rewardNum--, this._task.reward_num = this._rewardNum, this.setData(this._task);
                            break;
                        case l.watchVideo:
                        case l.share:
                            0 < this._rewardNum && (a = r.galaxyMut(this._price, this._rewardNum), this._doNum++, this._task.do_num = this._doNum, this.setData(this._task));
                            break;
                        case l.login:
                            this._doNum++, this._task.do_num = this._doNum, this.setData(this._task);
                            break;
                        case l.mergeTimes:
                        case l.speedupTimes:
                            0 < this._rewardNum && (this._rewardNum = 0, this._task.reward_num = this._rewardNum, this._doNum++, this._task.do_num = this._doNum, this.setData(this._task))
                    }
                    t == l.inviteFriend ? n.task_btn_claim_event(e.task_title, playerManager.getNumData("taskInviteNewOnes")) : n.task_btn_claim_event(e.task_title), playerManager.addNumData("Coin", a), playerManager.addNumData("TotalCoin", a), cc.director.emit("updateCoin"), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("+" + r.unit_format(a) + " coins")
                } else if (this._btnState == h) {
                    switch (t) {
                        case l.inviteFriend:
                            this.inviteNewClick(), playerManager.addNumData("taskClickNewOnes", 1);
                            break;
                        case l.playWithFriend:
                            this.inviteClick();
                            break;
                        case l.watchVideo:
                            this.watchVideo();
                            break;
                        case l.share:
                            this.shareClick();
                            break;
                        case l.mergeTimes:
                            cc.director.emit("mission_reward_close");
                            break;
                        case l.speedupTimes:
                            cc.director.emit("show_speedup_dlg"), cc.director.emit("mission_reward_close")
                    }
                    t == l.inviteFriend ? n.task_btn_start_event(e.task_title, playerManager.getNumData("taskClickNewOnes")) : n.task_btn_start_event(e.task_title)
                }
            },
            watchVideo: function () {
                // n.watch_video_event(""), o.showRewardAd(function () {
                //     cc.log("showAd success"), n.watch_video_success_event(), n.mission_watch_success_event();
                //     var e = 600;
                //     this._task.config && (e = parseInt(this._task.config.interval)), this.setCountDownTime(e, l.watchVideo), this._btnState = u, this.claimClick()
                // }.bind(this), function () {
                //     cc.log("RewardAd load err");
                //     var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                //     1 == globalManager.canShowReward ? e.showToast("No available Ad right now, try again later.") : e.showToast("The web page does not currently support ads.")
                // })
                console.log("watchVideo======")
            },
            startCountDown: function (e) {
                var t = Math.floor((new Date).getTime() / 1e3);
                if (e == l.watchVideo) {
                    if (t - (n = playerManager.getNumData("ADTime")) < 0) return;
                    var a = playerManager.getNumData("ADTimeCD") - (t - n);
                    this._adTimeCd = a
                } else if (e == l.share) {
                    var n;
                    if (t - (n = playerManager.getNumData("ShareTime")) < 0) return;
                    a = playerManager.getNumData("ShareTimeCD") - (t - n);
                    this._adTimeCd = a
                }
                cc.log("type=" + e + "   cd=" + a), 0 < this._adTimeCd && (this._btnState = d, this.btn_bg.spriteFrame = this.btn_states[d], this.btn_node.interactable = !1, this.btn_count_down.getComponent("count-down-node").setData(this._adTimeCd, function (e) {
                    0 == (this._adTimeCd = e) && (cc.log("time=0"), this.setData(this._task))
                }.bind(this)))
            },
            setCountDownTime: function (e, t) {
                t == l.watchVideo ? (playerManager.setNumData("ADTime", Math.floor((new Date).getTime() / 1e3)), playerManager.setNumData("ADTimeCD", e)) : t == l.share && (playerManager.setNumData("ShareTime", Math.floor((new Date).getTime() / 1e3)), playerManager.setNumData("ShareTimeCD", e))
            },
            shareClick: function () {
                var e = {type: globalManager.shareType.playWithFriend, inviter: o.getPlayerID(), rewards: "1"},
                    t = globalManager.getShareConfig(globalManager.shareType.playWithFriend);
                o.chooseContext(function () {
                    n.mission_play_share_success_event();
                    var e = 30;
                    this._task.config && this._task.config.interval && (e = parseInt(this._task.config.interval)), this.setCountDownTime(e, l.share), this._btnState = u, this.claimClick()
                }.bind(this), function (e, t) {
                    cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast(t)
                }, e, t.text, t.img)
            },
            inviteNewClick: function () {
                var e = {type: globalManager.shareType.inviteNewFriend, inviter: o.getPlayerID(), rewards: "1"},
                    t = globalManager.getShareConfig(globalManager.shareType.inviteNewFriend),
                    a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                o.share(function () {
                    a.showToast("Wait your friends click the link.")
                }, t.img, t.text, e)
            },
            inviteClick: function () {
                var e = {type: globalManager.shareType.inviteFriend, inviter: o.getPlayerID(), rewards: "1"},
                    t = globalManager.getShareConfig(globalManager.shareType.inviteFriend);
                o.share(function () {
                    cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("Wait your friends click the link.")
                }, t.img, t.text, e)
            },
            saveData: function (e) {
                for (var t = playerManager.getObjData("dailyTask"), a = t.taskProgress, n = t.taskTime, i = [], o = !1, r = 0; r < a.length; r++) if (a[r].task_id == e.task_id) {
                    var s = {task_id: e.task_id, reward_num: e.reward_num, do_num: e.do_num};
                    i.push(s), o = !0
                } else i.push(a[r]);
                if (!o) {
                    var c = {task_id: e.task_id, reward_num: e.reward_num, do_num: e.do_num};
                    i.push(c)
                }
                playerManager.setObjData("dailyTask", {taskTime: n, taskProgress: i})
            },
            onDestroy: function () {
                var e = parseInt(this._task.task_obj_type);
                this.setCountDownTime(this._adTimeCd, e)
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    effectDoubleCoin: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "32b0bPaNXVHcIedhKsEyEii", "effectDoubleCoin");
        cc.Class({
            extends: cc.Component, properties: {effFrame: cc.SpriteFrame}, onLoad: function () {
                for (var i = this, e = 0; e < 120; e++) {
                    (function e() {
                        var t = new cc.Node("effectNode1");
                        t.addComponent(cc.Sprite).spriteFrame = i.effFrame, t.x = 1200 * Math.random() - 600, t.y = 1e3, t.scale = Math.random() + .5, i.node.addChild(t);
                        var a = 5 * Math.random(),
                            n = cc.sequence(cc.delayTime(a), cc.spawn(cc.moveTo(2, t.x, -1e3), cc.repeat(cc.sequence(cc.scaleTo(.2, -1, 1), cc.scaleTo(.2, 1, 1)), 10)), cc.callFunc(function () {
                                e(), t.removeFromParent(!0)
                            }, i));
                        t.runAction(n)
                    })()
                }
            }, update: function (e) {
            }
        }), cc._RF.pop()
    }, {}],
    effectGetCoin: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "cde11yaJ1BOVL7De6jvSoCc", "effectGetCoin");
        cc.Class({
            extends: cc.Component, properties: {effFrame: cc.SpriteFrame}, onLoad: function () {
                for (var e = this, t = 0; t < 10; t++) {
                    var a = new cc.Node("effectNode1");
                    a.addComponent(cc.Sprite).spriteFrame = this.effFrame, a.x = 100 * Math.random() - 50, a.y = 100 * Math.random() - 50, this.node.addChild(a), a.opacity = 0;
                    var n = .2 * Math.random(),
                        i = cc.sequence(cc.delayTime(n), cc.fadeIn(.05), cc.scaleTo(.1, 1.4, 1.4), cc.scaleTo(.1, .5, .5), cc.removeSelf());
                    a.runAction(i)
                }
                this.scheduleOnce(function () {
                    e.node.removeFromParent(!0)
                }, .6)
            }, update: function (e) {
            }
        }), cc._RF.pop()
    }, {}],
    effectMerge: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "90445dgpK5Mwpy/zdfblUry", "effectMerge");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
            }, animOver: function () {
                this.node.destroy()
            }
        }), cc._RF.pop()
    }, {}],
    effectUFO: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "057ac5/YXRL2bX0IJQuNYjE", "effectUFO");
        cc.Class({
            extends: cc.Component,
            properties: {UFOEnable: !1, btnNode: cc.Node, moveanim: cc.Animation},
            onLoad: function () {
                var e = this;
                this.schedule(function () {
                    1 == e.UFOEnable && e.startUFO()
                }, 30), 1 == e.UFOEnable && e.startUFO()
            },
            startUFO: function () {
                this.btnNode.active = !0, this.moveanim.play("UFOmove", 0)
            },
            setUFOEnable: function (e) {
                this.UFOEnable = e
            },
            clickUFO: function () {
                var e = this, t = gameData.getUFOReward();
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showUFOrewardPopUp(t.type, function () {
                    e.btnNode.active = !1
                })
            }
        }), cc._RF.pop()
    }, {}],
    effectupgrade: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "3b943sSI3hAT79Wacl5aYjZ", "effectupgrade");
        cc.Class({
            extends: cc.Component, properties: {}, onLoad: function () {
                this.curcd = 0, this.MaxCD = 1
            }, update: function (e) {
                this.curcd >= this.MaxCD && this.node.destroy(), this.curcd += e
            }
        }), cc._RF.pop()
    }, {}],
    emitter: [function (e, t, a) {
        "use strict";

        function n(e) {
            if (e) return function (e) {
                for (var t in n.prototype) e[t] = n.prototype[t];
                return e
            }(e)
        }

        cc._RF.push(t, "8b01eKYHK9C9LN75m3JCn6O", "emitter"), t.exports = n, (window.EventEmitter = n).prototype.on = n.prototype.addEventListener = function (e, t) {
            return this._callbacks = this._callbacks || {}, (this._callbacks[e] = this._callbacks[e] || []).push(t), this
        }, n.prototype.once = function (e, t) {
            var a = this;

            function n() {
                a.off(e, n), t.apply(this, arguments)
            }

            return this._callbacks = this._callbacks || {}, n.fn = t, this.on(e, n), this
        }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (e, t) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var a, n = this._callbacks[e];
            if (!n) return this;
            if (1 == arguments.length) return delete this._callbacks[e], this;
            for (var i = 0; i < n.length; i++) if ((a = n[i]) === t || a.fn === t) {
                n.splice(i, 1);
                break
            }
            return this
        }, n.prototype.emit = function (e) {
            this._callbacks = this._callbacks || {};
            var t = [].slice.call(arguments, 1), a = this._callbacks[e];
            if (a) for (var n = 0, i = (a = a.slice(0)).length; n < i; ++n) a[n].apply(this, t);
            return this
        }, n.prototype.listeners = function (e) {
            return this._callbacks = this._callbacks || {}, this._callbacks[e] || []
        }, n.prototype.hasListeners = function (e) {
            return !!this.listeners(e).length
        }, cc._RF.pop()
    }, {}],
    expNode: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "7cf3fqS98lEu79wpR/mDOb9", "expNode");
        var n = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {expProgress: cc.ProgressBar, expLabel: cc.Label},
            onLoad: function () {
                var e = this, a = this;
                this.customEvent = {updateExp: "refreshExp"};
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t();
                this.refreshExp()
            },
            onDestroy: function () {
                for (var e in this.customEvent) cc.director.off(e)
            },
            refreshExp: function () {
                var e = gameData.getPlayerLevel(playerManager.getObjData("PlayerExp")), t = n.galaxyMut(e.curexp, 100),
                    a = n.galaxyDiv(t, e.nextexp);
                a = parseInt(a), this.expProgress.progress = a / 100, this.expLabel.string = e.level + 1 + ""
            }
        }), cc._RF.pop()
    }, {"number-util": "number-util"}],
    "fbinstant-util": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "0f0380alQhPE6h2GVgM4q4j", "fbinstant-util"), e("globalManager");
        var l = "data:image/jpeg;base64,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",
            u = "Can you surpass me? My hero!";
        globalManager.RewardAdId, e("number-util");
        t.exports = {
            getSupportedAPIs: function () {
                return "undefined" == typeof FBInstant ? [] : FBInstant.getSupportedAPIs()
            }, getPlayerID: function () {
                if ("undefined" == typeof FBInstant) return "13524679";
                var e = FBInstant.player.getID();
                return cc.log("playerID=" + e), e
            }, getPlayerInfo: function (e) {
                if ("undefined" != typeof FBInstant) {
                    var t = {};
                    t.playerId = FBInstant.player.getID(), t.playerName = FBInstant.player.getName(), t.photo = FBInstant.player.getPhoto(), e && e(t)
                } else e && e({
                    playerId: "13524679",
                    playerName: "bibibabibobi",
                    photo: "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p320x320/32713932_168979427273388_4735634539752194048_n.jpg?_nc_cat=0&oh=3187ef52a84de863937b566048026fbb&oe=5C0CE0C5"
                })
            }, getPlayerFrineds: function (n) {
                if ("undefined" != typeof FBInstant) {
                    var i = [];
                    FBInstant.player.getConnectedPlayersAsync().then(function (e) {
                        for (var t in e) {
                            var a = e[t];
                            i.push[{id: a.getID(), name: a.getName()}]
                        }
                        n && n(i)
                    })
                } else n && n([{id: "123456789test1", name: "zyq"}, {id: "123456789test", name: "bibibabibobi"}])
            }, getContextLeaderboard: function (t) {
                "undefined" != typeof FBInstant && FBInstant.getLeaderboardAsync(this.getLeaderboardName()).then(function (e) {
                    return e.getEntriesAsync()
                }).then(function (e) {
                    t(e)
                })
            }, getFriendsLeaderboard: function (t) {
                "undefined" != typeof FBInstant && FBInstant.getLeaderboardAsync("global-leaderboard").then(function (e) {
                    return e.getConnectedPlayerEntriesAsync()
                }).then(function (e) {
                    cc.log("getFriendsLeaderboard=" + JSON.stringify(e)), t(e)
                })
            }, getSelfLeaderboard: function (t) {
                "undefined" != typeof FBInstant && FBInstant.getLeaderboardAsync(this.getLeaderboardName()).then(function (e) {
                    return e.getPlayerEntryAsync()
                }).then(function (e) {
                    t(e)
                })
            }, setLeaderboardScore: function (t, a) {
                "undefined" != typeof FBInstant && FBInstant.getLeaderboardAsync("global-leaderboard").then(function (e) {
                    return cc.log("getLeaderboardAsync success"), e.setScoreAsync(t, a)
                }).then(function (e) {
                })
            }, getLeaderboardName: function () {
                if ("undefined" != typeof FBInstant) return cc.log("getLeaderboardName = friend-leaderboard." + FBInstant.context.getID()), "friend-leaderboard." + FBInstant.context.getID()
            }, chooseContext: function (a, n, i, o, r) {
                // if ("undefined" != typeof FBInstant) {
                //     var s = this, c = playerManager.getObjData("sharedContextIds");
                //     cc.log("sharedContextIds=" + JSON.stringify(c));
                //     var e = {};
                //     globalManager.publicConfig && (globalManager.publicConfig.UpdateContextFilter && (e.filters = [globalManager.publicConfig.UpdateContextFilter]), globalManager.publicConfig.UpdateContextMinSize && (e.minSize = parseInt(globalManager.publicConfig.UpdateContextMinSize))), cc.log("filter=" + JSON.stringify(e)), FBInstant.context.chooseAsync(e).then(function () {
                //         var e = s.getContextID();
                //         e ? s.isSharedToday(e) ? n("limit", "Only one time each group in 2 hours.") : (c[e] = Date.parse(new Date), playerManager.setObjData("sharedContextIds", c), s.updateContext(a, n, i, o, r)) : n("limit", "Only one time each group in 2 hours.")
                //     }, function (e) {
                //         if (cc.log("chooseContext=" + JSON.stringify(e)), "SAME_CONTEXT" == e.code) {
                //             var t = s.getContextID();
                //             s.isSharedToday(t) ? n("limit", "Only one time each group in 2 hours.") : (c[t] = Date.parse(new Date), playerManager.setObjData("sharedContextIds", c), s.updateContext(a, n, i, o, r))
                //         } else n()
                //     })
                // } else a && a()
                console.log("chooseContext=======")
            }, isSharedToday: function (e) {
                var t = playerManager.getObjData("sharedContextIds");
                if (t) for (var a in t) {
                    if (a == e) return Date.parse(new Date) - t[a] < 72e5
                }
                return !1
            }, updateContext: function (e, t, a, n, i, o, r) {
                if ("undefined" != typeof FBInstant) {
                    if (r || (this.logEvent("all_share_click"), this.logEvent("user_value_start")), !n || !i) {
                        var s = globalManager.getShareConfig("common");
                        n = n || s.text, i = i || s.img
                    }
                    var c = this;
                    FBInstant.updateAsync({
                        action: "CUSTOM",
                        cta: "Play",
                        image: i || l,
                        text: {default: n || u},
                        template: "play_turn",
                        data: a || {type: "update"},
                        strategy: o || "IMMEDIATE",
                        notification: "NO_PUSH"
                    }).then(function () {
                        cc.log("updateContext success"), r || c.logEvent("user_value_success"), e && e()
                    }, function (e) {
                        cc.log("updateContext fail=" + JSON.stringify(e)), t && t()
                    })
                }
            }, createContext: function (e, t) {
                "undefined" != typeof FBInstant && FBInstant.context.createAsync(this.getPlayerID()).then(function () {
                    cc.log("ContextID=" + FBInstant.context.getID()), e()
                }, function () {
                    cc.log("createContext fail"), t()
                })
            }, share: function (t, e, a, n) {
                if ("undefined" != typeof FBInstant) {
                    if (!a || !e) {
                        var i = globalManager.getShareConfig("common");
                        a = a || i.text, e = e || i.img
                    }
                    this.logEvent("all_share_click"), this.logEvent("user_value_start"), FBInstant.shareAsync({
                        intent: "REQUEST",
                        image: e || l,
                        text: a || u,
                        data: n || {type: "share"}
                    }).then(function (e) {
                        t(e)
                    })
                }
            }, requestInterstitialAd: function (e, t) {
                if ("undefined" != typeof FBInstant) {
                    var a = this;
                    a.interstitial = null, FBInstant.getInterstitialAdAsync(globalManager.InterstitialAdId).then(function (e) {
                        if (void 0 !== e) return (a.interstitial = e).loadAsync()
                    }).then(function () {
                        cc.log("requestInterstitialAd success"), t && t()
                    }).catch(function (e) {
                        cc.log("requestInterstitialAd err  msg=" + JSON.stringify(e))
                    })
                }
            }, showInterstitialAd: function (e, t, a) {
                var n = this, i = a ? "secondPicAd" : "picAd";
                a || (n.logEvent("all_ad_click", null, {type: i}), n.logEvent("user_value_start")), this.interstitial ? this.interstitial.showAsync().then(function () {
                    cc.log("showInterstitialAd success"), a || (n.logEvent("all_ad_click_success", null, {type: i}), n.logEvent("user_value_success")), n.interstitial = null, e && e(), n.requestInterstitialAd()
                }).catch(function (e) {
                    cc.log("showInterstitialAd err  msg=" + JSON.stringify(e)), t && t(), n.requestInterstitialAd()
                }) : (cc.log("showInterstitialAd err  rewardedVideo=null"), t && t(), n.requestInterstitialAd())
            }, requestRewardAd: function (e, t) {
                // if ("undefined" == typeof FBInstant) return cc.log("requestRewardAd"), this.isRequestVideo = !0, this.rewardedVideo = {}, void setTimeout(function () {
                //     this.isRequestVideo = !1, this.requestVideoCallback && this.requestVideoCallback(!0)
                // }.bind(this), 1e4);
                // var a = this;
                // FBInstant.getRewardedVideoAsync(globalManager.RewardAdId).then(function (e) {
                //     if (void 0 !== e) return a.rewardedVideo = e, a.isRequestVideo = !0, a.logEvent("ad_request_start"), e.loadAsync()
                // }).then(function () {
                //     cc.log("requestRewardAd success"), a.logEvent("ad_request_success"), a.isRequestVideo = !1, a.requestVideoCallback && a.requestVideoCallback(!0), e && e()
                // }).catch(function (e) {
                //     cc.log("requestRewardAd err  msg=" + JSON.stringify(e)), a.isRequestVideo = !1, a.requestVideoCallback && a.requestVideoCallback(!1), t && t()
                // })
            }, setRequestAdEvent: function (e, t) {
            }, getRewardedVideoAsync: function (t, a, e) {
                if ("undefined" != typeof FBInstant) {
                    var n = this;
                    n.rewardedVideo = null, FBInstant.getRewardedVideoAsync(t).then(function (e) {
                        if (void 0 !== e) return (n.rewardedVideo = e).loadAsync()
                    }).then(function () {
                        e && e()
                    }).catch(function (e) {
                        cc.log("requestRewardAd err =" + t + "   msg=" + e), n.rewardedVideo = null, n.isRequestVideo = !1, n.requestVideoCallback && n.requestVideoCallback(!0), a && a()
                    })
                } else e && e()
            }, showRewardAd: function (t, a, e) {
                // if ("undefined" != typeof FBInstant) {
                //     var n = this;
                //     e || (n.logEvent("all_ad_click"), n.logEvent("user_value_start")), n.rewardedVideo ? n.isRequestVideo ? (n.requestVideoCallback = function (e) {
                //         (null != n.waitNode || cc.isValid(n.waitNode)) && (n.waitNode.destroy(), n.waitNode = null, n.requestVideoCallback = null, clearTimeout(n.waitTimeId), e ? a && a() : n.showRewardAd(t, a, !0), n.requestVideoCallback = null, clearTimeout(n.waitTimeId))
                //     }, cc.loader.loadRes("loading/loading-node", function (e, t) {
                //         (null != n.waitNode || cc.isValid(n.waitNode)) && n.waitNode.destroy(), n.waitNode = cc.instantiate(t), n.waitNode.parent = cc.director.getScene().getChildByName("Canvas"), n.waitNode.setLocalZOrder(100), cc.log("load prefab"), n.waitTimeId = setTimeout(function () {
                //             n.requestVideoCallback && n.requestVideoCallback(!1)
                //         }, 3900)
                //     })) : n.rewardedVideo.showAsync().then(function () {
                //         cc.log("showRewardAd success"), n.logEvent("user_value_success"), n.logEvent("all_ad_click_success", null, {type: "rewardAd"}), n.rewardedVideo = null, t && t(), n.requestRewardAd()
                //     }).catch(function (e) {
                //         n.requestRewardAd(), n.logEvent("all_ad_click_fail", null, {msg: e}), a && a(e)
                //     }) : (cc.log("showRewardAd err  rewardedVideo=null"), n.logEvent("all_ad_click_fail", null, {msg: "null"}), n.requestRewardAd(), a && a())
                // } else t && t()
                console.log("showRewardAd======")
                wxHelper.showVideoAd(function () {
                    t && t();
                }, function () {
                    a && a();
                })
            }, isRewardAdReady: function () {
                return true;
                // return !!this.rewardedVideo
            }, setData: function (e) {
                // if ("undefined" != typeof FBInstant) {
                //     var t = this;
                //     FBInstant.player.setDataAsync(e).then(function () {
                //         cc.log("setData success")
                //     }).catch(function (e) {
                //         cc.log("fb_set_data_fail:" + JSON.stringify(e)), t.logEvent("fb_set_data_fail", null, {msg: e})
                //     })
                wxHelper.saveLocalData(e);
                console.log("setData=================================")
            }, getData: function (e, t) {
                // if ("undefined" != typeof FBInstant) {
                //     var a = this;
                //     FBInstant.player.getDataAsync(e).then(function (e) {
                //         cc.log("load data success = " + JSON.stringify(e)), t && t(e)
                //     }).catch(function (e) {
                //         cc.log("get data err"), a.logEvent("fb_get_data_fail", null, {msg: e})
                //     })
                // }
                var e = wxHelper.getLocalData(e);
                t && t(e)
            }, getStats: function (e, t) {
                "undefined" != typeof FBInstant && FBInstant.player.getStatsAsync(e).then(function (e) {
                    t && t(e)
                })
            }, setStats: function (e, t) {
                "undefined" != typeof FBInstant && FBInstant.player.setStatsAsync(e).then(function () {
                    t && t()
                })
            }, incrementStats: function (e, t) {
                "undefined" != typeof FBInstant && FBInstant.player.incrementStatsAsync(e).then(function (e) {
                    t && t(e)
                })
            }, quite: function () {
                "undefined" != typeof FBInstant && FBInstant.quit()
            }, pause: function (e) {
                "undefined" != typeof FBInstant && FBInstant.onPause(function () {
                    e && e()
                })
            }, logEvent: function (e, t, a) {
                if ("undefined" != typeof FBInstant) return FBInstant.logEvent(e, t, a)
            }, getContextID: function () {
                if ("undefined" != typeof FBInstant) {
                    var e = FBInstant.context.getID();
                    return cc.log("getContextID=" + e), e
                }
            }, getType: function () {
                if ("undefined" != typeof FBInstant) {
                    var e = FBInstant.context.getType();
                    return cc.log("getType=" + e), e
                }
            }, startGame: function (e) {
                "undefined" != typeof FBInstant ? FBInstant.startGameAsync().then(function () {
                    e()
                }) : e && e()
            }, getFriends: function (a) {
                if ("undefined" != typeof FBInstant) {
                    var n = this;
                    FBInstant.player.getConnectedPlayersAsync().then(function (e) {
                        var t = [];
                        e.map(function (e) {
                            cc.log("get ig friends list = " + e.getID()), t.push({
                                id: e.getID(),
                                name: e.getName(),
                                photo: e.getPhoto()
                            })
                        }), n.getPlayerInfo(function (e) {
                            cc.log("get ig friends list = " + e.playerName), t.push({
                                id: e.playerId,
                                name: e.playerName,
                                photo: e.photo
                            }), a && a(t)
                        })
                    })
                } else a && a([{id: "123456789test1", name: "zyq"}, {id: "123456789test", name: "bibibabibobi"}])
            }, getEntryPointData: function () {
                if ("undefined" != typeof FBInstant) return FBInstant.getEntryPointData()
            }, createShortcut: function (t) {
                "undefined" != typeof FBInstant && (cc.log("call createShortcut"), FBInstant.canCreateShortcutAsync().then(function (e) {
                    cc.log("canCreateShortcut=" + e), e && FBInstant.createShortcutAsync().then(function () {
                        t()
                    }).catch(function () {
                    })
                }))
            }, getPlatform: function () {
                return "undefined" == typeof FBInstant ? "WEB" : FBInstant.getPlatform()
            }, customImageShare: function (a, n, i, e) {
                var o = this;
                "undefined" != typeof FBInstant ? cc.loader.load(FBInstant.player.getPhoto(), function (e, t) {
                    n && n(t), cc.director.getScene().addChild(a), a.setLocalZOrder(-1), o.captureScreen(a, a.width, a.height, function (e, t) {
                        a.removeFromParent(!0), i && i(e)
                    })
                }) : i && i()
            }, captureScreen: function (e, r, s, c, t, l) {
                var a = window.gl, n = e._sgNode || e, u = a || cc._renderContext;
                r = Math.floor(r), s = Math.floor(s);
                var d = new cc.RenderTexture(r, s, cc.Texture2D.PIXEL_FORMAT_RGBA8888, cc.sys.isBrowser ? u.DEPTH_STENCIL : u.DEPTH24_STENCIL8_OES);
                cc.sys.isBrowser && d.setAutoDraw(!0);
                var h = e.y;
                e.scaleY = -e.scaleY, e.y = s;
                var i = cc.macro.ENABLE_CULLING;
                cc.macro.ENABLE_CULLING = !1, d.beginWithClear(0, 0, 0, 255, 0, 0), n.visit(), d.end(), cc.macro.ENABLE_CULLING = i, e.scaleY = -e.scaleY, e.y = h, cc.sys.isBrowser && (d.scaleY = -1, t && t());
                var g = "";
                cc.sys.isBrowser ? setTimeout(function () {
                    try {
                        var t = null, a = null;
                        if (cc._renderType === cc.game.RENDER_TYPE_CANVAS) g = d.sprite.getTexture().getHtmlElementObj().toDataURL("image/png"); else {
                            var e = d.sprite.getTexture()._glID;
                            h = s - (l = l || 0), t = u.getParameter(u.FRAMEBUFFER_BINDING);
                            var n = u.createFramebuffer();
                            a = n, u.bindFramebuffer(u.FRAMEBUFFER, n), u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, e, 0);
                            var i = new Uint8Array(r * h * 4);
                            u.readPixels(0, 0, r, h, u.RGBA, u.UNSIGNED_BYTE, i), u.deleteFramebuffer(n), a = null;
                            var o = document.createElement("canvas");
                            o.id = "captureCanvas", o.width = r, o.height = h, o.getContext("2d").putImageData(new ImageData(Uint8ClampedArray.from(i), r, h), 0, 0), g = o.toDataURL("image/png")
                        }
                        c && c(g, d)
                    } catch (e) {
                        console.log(e), a && (u.deleteFramebuffer(a), a = null), t && (u.bindFramebuffer(u.FRAMEBUFFER, t), t = null), c && c(g, d)
                    }
                }, 0) : c && c(g, d)
            }, switchGameAsync: function (e, t, a) {
                "undefined" != typeof FBInstant && FBInstant.switchGameAsync(e, a).catch(function (e) {
                    t && t(e)
                })
            }, canSubscribeBotAsync: function (t) {
                "undefined" != typeof FBInstant ? (cc.log("in canSubscribeBotAsync"), FBInstant.player.canSubscribeBotAsync().then(function (e) {
                    cc.log("can_subscribe=" + e), t && t(e)
                }).catch(function () {
                    cc.log("error canSubscribeBotAsync"), t && t(!1)
                })) : t && t(!0)
            }, subscribeBotAsync: function (e, t) {
                "undefined" != typeof FBInstant ? FBInstant.player.subscribeBotAsync().then(function () {
                    cc.log(" subscribed to the bot"), e && e(), cc.sys.localStorage.setItem("subscribeBot_success", 1)
                }).catch(function (e) {
                    cc.log(" subscription failure"), t && t()
                }) : e && e()
            }
        }, cc._RF.pop()
    }, {globalManager: "globalManager", "number-util": "number-util"}],
    "fish-cfg": [function (e, n, t) {
        "use strict";
        cc._RF.push(n, "40244FMFCRPPbAWyL8iSG95", "fish-cfg");
        e("number-util");
        (function () {
            if (window.fish_data) n.exports = window.fish_data; else {
                for (var e = [{
                    level: 1,
                    name: "Farmer",
                    coinround: "25",
                    coinsec: "4",
                    time: 100,
                    price: "107",
                    rise: 1.07,
                    pricediam: 0,
                    risediam: 0,
                    sellprice: "80",
                    rewarddiam: 0
                }, {
                    level: 2,
                    name: "Militia",
                    coinround: "50",
                    coinsec: "8",
                    time: 2.98,
                    price: "1500",
                    rise: 1.07,
                    pricediam: 0,
                    risediam: 0,
                    sellprice: "1200",
                    rewarddiam: 50
                }, {
                    level: 3,
                    name: "Soldier",
                    coinround: "100",
                    coinsec: "17",
                    time: 2.96,
                    price: "6750",
                    rise: 1.07,
                    pricediam: 0,
                    risediam: 0,
                    sellprice: "5400",
                    rewarddiam: 65
                }, {
                    level: 4,
                    name: "Centurion",
                    coinround: "200",
                    coinsec: "34",
                    time: 2.94,
                    price: "17900",
                    rise: 1.07,
                    pricediam: 20,
                    risediam: 3,
                    sellprice: "14300",
                    rewarddiam: 80
                }, {
                    level: 5,
                    name: "Chiliarchy",
                    coinround: "400",
                    coinsec: "71",
                    time: 2.92,
                    price: "47700",
                    rise: 1.07,
                    pricediam: 26,
                    risediam: 5,
                    sellprice: "38210",
                    rewarddiam: 95
                }, {
                    level: 6,
                    name: "Knight",
                    coinround: "800",
                    coinsec: "145",
                    time: 2.9,
                    price: "127000",
                    rise: 1.07,
                    pricediam: 35,
                    risediam: 9,
                    sellprice: "101600",
                    rewarddiam: 110
                }, {
                    level: 7,
                    name: "Legion Commander",
                    coinround: "1600",
                    coinsec: "297",
                    time: 2.88,
                    price: "337000",
                    rise: 1.07,
                    pricediam: 47,
                    risediam: 15,
                    sellprice: "270300",
                    rewarddiam: 125
                }, {
                    level: 8,
                    name: "Lord",
                    coinround: "3200",
                    coinsec: "609",
                    time: 2.86,
                    price: "896000",
                    rise: 1.07,
                    pricediam: 62,
                    risediam: 23,
                    sellprice: "719100",
                    rewarddiam: 140
                }, {
                    level: 9,
                    name: "Count",
                    coinround: "6400",
                    coinsec: "1248",
                    time: 2.84,
                    price: "2380000",
                    rise: 1.07,
                    pricediam: 80,
                    risediam: 33,
                    sellprice: "1910000",
                    rewarddiam: 155
                }, {
                    level: 10,
                    name: "Marquis",
                    coinround: "12800",
                    coinsec: "2558",
                    time: 2.82,
                    price: "6340000",
                    rise: 1.07,
                    pricediam: 101,
                    risediam: 45,
                    sellprice: "5090000",
                    rewarddiam: 160
                }, {
                    level: 11,
                    name: "Duke",
                    coinround: "25600",
                    coinsec: "5238",
                    time: 2.8,
                    price: "16800000",
                    rise: 1.07,
                    pricediam: 125,
                    risediam: 59,
                    sellprice: "13500000",
                    rewarddiam: 170
                }, {
                    level: 12,
                    name: "Holy Soldier LV1",
                    coinround: "51200",
                    coinsec: "10726",
                    time: 2.78,
                    price: "44800000",
                    rise: 1.07,
                    pricediam: 152,
                    risediam: 75,
                    sellprice: "36000000",
                    rewarddiam: 185
                }, {
                    level: 13,
                    name: "Holy Soldier LV2",
                    coinround: "102400",
                    coinsec: "21965",
                    time: 2.76,
                    price: "119000000",
                    rise: 1.07,
                    pricediam: 182,
                    risediam: 93,
                    sellprice: "95700000",
                    rewarddiam: 200
                }, {
                    level: 14,
                    name: "Holy Soldier LV3",
                    coinround: "204800",
                    coinsec: "44982",
                    time: 2.74,
                    price: "317000000",
                    rise: 1.07,
                    pricediam: 215,
                    risediam: 113,
                    sellprice: "254000000",
                    rewarddiam: 215
                }, {
                    level: 15,
                    name: "Marksman",
                    coinround: "409600",
                    coinsec: "92118",
                    time: 2.72,
                    price: "847000000",
                    rise: 1.07,
                    pricediam: 251,
                    risediam: 135,
                    sellprice: "677000000",
                    rewarddiam: 230
                }, {
                    level: 16,
                    name: "Nine-Tailed Fox",
                    coinround: "819200",
                    coinsec: "188648",
                    time: 2.7,
                    price: "2250000000",
                    rise: 1.07,
                    pricediam: 296,
                    risediam: 159,
                    sellprice: "1800000000",
                    rewarddiam: 245
                }, {
                    level: 17,
                    name: "Fox Elf",
                    coinround: "1638400",
                    coinsec: "386332",
                    time: 2.68,
                    price: "5970000000",
                    rise: 1.07,
                    pricediam: 350,
                    risediam: 185,
                    sellprice: "4790000000",
                    rewarddiam: 260
                }, {
                    level: 18,
                    name: "Tauren",
                    coinround: "3276800",
                    coinsec: "791169",
                    time: 2.66,
                    price: "15800000000",
                    rise: 1.07,
                    pricediam: 413,
                    risediam: 213,
                    sellprice: "12700000000",
                    rewarddiam: 275
                }, {
                    level: 19,
                    name: "Flying Bull",
                    coinround: "6553600",
                    coinsec: "1620234",
                    time: 2.64,
                    price: "42200000000",
                    rise: 1.07,
                    pricediam: 485,
                    risediam: 243,
                    sellprice: "33900000000",
                    rewarddiam: 290
                }, {
                    level: 20,
                    name: "Half Orc",
                    coinround: "13107200",
                    coinsec: "3318077",
                    time: 2.62,
                    price: "112000000000",
                    rise: 1.07,
                    pricediam: 566,
                    risediam: 275,
                    sellprice: "90200000000",
                    rewarddiam: 305
                }, {
                    level: 21,
                    name: "Peacock King",
                    coinround: "26214400",
                    coinsec: "6795089",
                    time: 2.6,
                    price: "290000000000",
                    rise: 1.07,
                    pricediam: 656,
                    risediam: 309,
                    sellprice: "240000000000",
                    rewarddiam: 320
                }, {
                    level: 22,
                    name: "Giant Turtle",
                    coinround: "52428800",
                    coinsec: "13915662",
                    time: 2.58,
                    price: "795000000000",
                    rise: 1.07,
                    pricediam: 755,
                    risediam: 345,
                    sellprice: "638000000000",
                    rewarddiam: 335
                }, {
                    level: 23,
                    name: "Fire Phoenix",
                    coinround: "104857600",
                    coinsec: "28497884",
                    time: 2.56,
                    price: "2110000000000",
                    rise: 1.07,
                    pricediam: 863,
                    risediam: 383,
                    sellprice: "1690000000000",
                    rewarddiam: 350
                }, {
                    level: 24,
                    name: "Dragon Prince",
                    coinround: "209715200",
                    coinsec: "58360816",
                    time: 2.54,
                    price: "5630000000000",
                    rise: 1.07,
                    pricediam: 980,
                    risediam: 423,
                    sellprice: "4510000000000",
                    rewarddiam: 365
                }, {
                    level: 25,
                    name: "Demigod King",
                    coinround: "419430400",
                    coinsec: "119517115",
                    time: 2.52,
                    price: "14900000000000",
                    rise: 1.07,
                    pricediam: 1106,
                    risediam: 465,
                    sellprice: "12000000000000",
                    rewarddiam: 380
                }, {
                    level: 26,
                    name: "Soldier",
                    coinround: "838860800",
                    coinsec: "244759099",
                    time: 2.5,
                    price: "39800000000000",
                    rise: 1.07,
                    pricediam: 1241,
                    risediam: 509,
                    sellprice: "31900000000000",
                    rewarddiam: 395
                }, {
                    level: 27,
                    name: "General",
                    coinround: "1677721600",
                    coinsec: "501242158",
                    time: 2.48,
                    price: "105000000000000",
                    rise: 1.07,
                    pricediam: 1385,
                    risediam: 555,
                    sellprice: "85000000000000",
                    rewarddiam: 410
                }, {
                    level: 28,
                    name: "Blind Monk",
                    coinround: "3355443200",
                    coinsec: "1026493815",
                    time: 2.46,
                    price: "281000000000000",
                    rise: 1.07,
                    pricediam: 1538,
                    risediam: 603,
                    sellprice: "226000000000000",
                    rewarddiam: 425
                }, {
                    level: 29,
                    name: "Titan",
                    coinround: "6710886400",
                    coinsec: "2102156683",
                    time: 2.44,
                    price: "749000000000000",
                    rise: 1.07,
                    pricediam: 1700,
                    risediam: 653,
                    sellprice: "601000000000000",
                    rewarddiam: 440
                }, {
                    level: 30,
                    name: "Muse",
                    coinround: "13421772800",
                    coinsec: "4305006671",
                    time: 2.42,
                    price: "1990000000000000",
                    rise: 1.07,
                    pricediam: 1871,
                    risediam: 705,
                    sellprice: "1600000000000000",
                    rewarddiam: 455
                }, {
                    level: 31,
                    name: "Thor",
                    coinround: "26843545600",
                    coinsec: "8816223161",
                    time: 2.4,
                    price: "5300000000000000",
                    rise: 1.07,
                    pricediam: 2069,
                    risediam: 759,
                    sellprice: "4250000000000000",
                    rewarddiam: 470
                }, {
                    level: 32,
                    name: "Ares",
                    coinround: "53687091200",
                    coinsec: "18054743411",
                    time: 2.38,
                    price: "14100000000000000",
                    rise: 1.07,
                    pricediam: 2294,
                    risediam: 815,
                    sellprice: "11300000000000000",
                    rewarddiam: 485
                }, {
                    level: 33,
                    name: "Three-Eyed General",
                    coinround: "107374182400",
                    coinsec: "36974309031",
                    time: 2.36,
                    price: "37500000000000000",
                    rise: 1.07,
                    pricediam: 2546,
                    risediam: 873,
                    sellprice: "30100000000000000",
                    rewarddiam: 500
                }, {
                    level: 34,
                    name: "Apollo",
                    coinround: "214748364800",
                    coinsec: "75719687464",
                    time: 2.34,
                    price: "99800000000000000",
                    rise: 1.07,
                    pricediam: 2825,
                    risediam: 933,
                    sellprice: "80100000000000000",
                    rewarddiam: 515
                }, {
                    level: 35,
                    name: "Monkey King",
                    coinround: "429496729600",
                    coinsec: "155066347957",
                    time: 2.32,
                    price: "265000000000000000",
                    rise: 1.07,
                    pricediam: 3131,
                    risediam: 995,
                    sellprice: "213000000000000000",
                    rewarddiam: 530
                }, {
                    level: 36,
                    name: "Buddha",
                    coinround: "858993459200",
                    coinsec: "317560373981",
                    time: 2.3,
                    price: "706000000000000000",
                    rise: 1.07,
                    pricediam: 3464,
                    risediam: 1059,
                    sellprice: "567000000000000000",
                    rewarddiam: 545
                }, {
                    level: 37,
                    name: "King of the Gods",
                    coinround: "1717986918400",
                    coinsec: "650331889875",
                    time: 2.28,
                    price: "1870000000000000000",
                    rise: 1.07,
                    pricediam: 3824,
                    risediam: 1125,
                    sellprice: "1500000000000000000",
                    rewarddiam: 560
                }], t = ["农民", "民兵", "士兵", "百夫长", "千夫长", "骑士", "军团指挥官", "领主", "伯爵", "侯爵", "公爵", "圣兵1阶", "圣兵2阶", "圣兵3阶", "神枪手", "九尾妖狐", "狐狸精", "牛头人", "飞牛", "半兽人", "孔雀王子", "巨人 乌龟", "火凤凰", "龙太子", "半神王", "士兵", "一般", "瞎僧", "泰坦", "缪斯", "雷神", "阿瑞斯", "三眼将军", "阿波罗", "孙悟空", "佛", "众神之王"], a = 0; a < e.length; a++) e[a].name = t[a];
                window.fish_data = e, n.exports = e
            }
        })(), cc._RF.pop()
    }, {"number-util": "number-util"}],
    "fish-item": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "e63dcFbkOFGwKtFkmnXrxgJ", "fish-item");
        var n = e("number-util"), i = e("instant-util"), o = e("analytics-data"),
            r = cc.Enum({Lock: 0, UnLock: 1, Free: 2, Diamond: 3});
        cc.Class({
            extends: cc.Component,
            properties: {
                img_bg: {default: null, type: cc.Sprite},
                img_fish: {default: null, type: cc.Sprite},
                price_label: {default: null, type: cc.Label},
                diamondprice_label: {default: null, type: cc.Label},
                brand_node: {default: null, type: cc.Node},
                level_label: {default: null, type: cc.Label},
                lock_btn: {default: null, type: cc.Node},
                unlock_btn: {default: null, type: cc.Node},
                diamond_btn: {default: null, type: cc.Node},
                unlock_icon: {default: null, type: cc.Sprite},
                unlock_level: {default: null, type: cc.Label},
                name_level: {default: null, type: cc.Label},
                toast_prefab: {default: null, type: cc.Prefab},
                get_one_btn: {default: null, type: cc.Node},
                get_coin_btn: {default: null, type: cc.Node}
            },
            setData: function (e, t) {
                this.callback = t, this.refreshData(e)
            },
            refreshData: function (e) {
                this.itemdata = e, this.index = e.index, this.loadRes(this.index, this.img_fish), this.showBtnState(this.itemdata.state), this.index <= playerManager.getNumData("UnlockLevel") ? (this.img_fish.node.color = new cc.Color(255, 255, 255), this.name_level.string = fish_data[this.index].name, this.index < 11 ? this.name_level.node.color = new cc.Color(180, 189, 221, 255) : this.index < 25 ? this.name_level.node.color = new cc.Color(118, 219, 163, 255) : this.index < 37 && (this.name_level.node.color = new cc.Color(255, 224, 124, 255))) : (this.img_fish.node.color = new cc.Color(0, 0, 0), this.img_fish.node.x = gameData.getHouseStorePos(this.index).posX, this.img_fish.node.y = gameData.getHouseStorePos(this.index).posY, this.img_fish.node.anchorY = 0, this.name_level.string = "??????", this.brand_node.active = !0), this.level_label.string = this.itemdata.index + 1 + ""
            },
            buyClick: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                if (e.playPurchaseSound(), !e.scriptGamePaodao.isPoolFull()) {
                    o.coin_buy_click_event();
                    var t = fish_data[this.index], a = playerManager.getObjData("Price" + this.index);
                    1 == playerManager.coinEnough(a) && (a = n.galaxyMut(a, t.rise), this.price_label.string = n.unit_format(a), e.scriptGamePaodao.buyItem(this.index, !1), playerManager.setNumData("Price" + this.index, a), e.scriptGamePaodao.refreshCoin(), 1 == playerManager.getObjData("animTutorial") && cc.director.emit("nextTutorial4"))
                }
            },
            buyDiamondClick: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                if (e.playPurchaseSound(), !e.scriptGamePaodao.isPoolFull()) {
                    o.diamond_buy_click_event();
                    var t = fish_data[this.index], a = playerManager.getObjData("PriceDiamond" + this.index);
                    1 == playerManager.diamondEnough(a) ? (a = n.galaxyAdd(a, t.risediam), this.diamondprice_label.string = n.unit_format(a), e.scriptGamePaodao.buyItem(this.index, !1, "diamond"), playerManager.setNumData("PriceDiamond" + this.index, a), e.scriptGamePaodao.refreshDiamond(), 1 == playerManager.getObjData("animTutorial") && cc.director.emit("nextTutorial4")) : e.showNODiamondPopUp()
                }
            },
            getOneClick: function () {
                var e = this, t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                o.watch_video_shop_event(), i.showRewardAd(function () {
                    cc.log("showAd success"), o.watch_video_shop_success_event(), t.scriptGamePaodao.putItem(e.index), playerManager.setNumData("FreeHouseTime", (new Date).getTime()), e.get_one_btn.active = !1, e.updateBtnState()
                }.bind(this), function () {
                    cc.log("RewardAd load err"), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("No available Ad right now."), e.get_one_btn.active = !1, e.showBtnState(r.UnLock)
                })
            },
            getCoinClick: function () {
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                i.chooseContext(function (e) {
                    a.showToast("share success");
                    var t = playerManager.getObjData("Price" + this.index);
                    t = n.galaxyMut(t, .8), this.price_label.string = n.unit_format(t), playerManager.setNumData("Price" + this.index, t), a.scriptGamePaodao.refreshCoin(), playerManager.setNumData("getCoinTime", Date.parse(new Date)), this.get_coin_btn.active = !1
                }.bind(this), function (e, t) {
                    a.showToast(t)
                }.bind(this))
            },
            updateBtnState: function () {
                var e = playerManager.getNumData("UnlockLevel") - 4;
                e = 0 <= e ? e : 0;
                var t = this.index <= e ? 1 : 0;
                this.showBtnState(t)
            },
            showBtnState: function (e) {
                switch (this.lock_btn.active = !1, this.unlock_btn.active = !1, this.get_one_btn.active = !1, this.diamond_btn.active = !1, e) {
                    case r.Lock:
                        this.lock_btn.active = !0;
                        var t = this.index + 4 >= fish_data.length ? fish_data.length - 1 : this.index + 4;
                        this.loadResWithoutPosition(t, this.unlock_icon), this.unlock_level.string = this.index + 4 >= fish_data.length ? "?" : t + 1 + "";
                        break;
                    case r.UnLock:
                        this.unlock_btn.active = !0;
                        var a = playerManager.getObjData("Price" + this.index);
                        this.price_label.string = n.unit_format(a);
                        break;
                    case r.Free:
                        this.get_one_btn.active = !0;
                        a = playerManager.getObjData("Price" + this.index);
                        this.price_label.string = n.unit_format(a);
                        break;
                    case r.Diamond:
                        this.diamond_btn.active = !0;
                        a = playerManager.getObjData("PriceDiamond" + this.index);
                        this.diamondprice_label.string = n.unit_format(a), this.lock_btn.active = !0;
                        t = this.index + 4 >= fish_data.length ? fish_data.length - 1 : this.index + 4;
                        this.unlock_level.string = this.index + 4 >= fish_data.length ? "?" : t + 1 + ""
                }
            },
            loadRes: function (e, t) {
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                t.spriteFrame = a.getItemFrame(e);
                var n = gameData.getHousePanelPos(e);
                t.node.x = n.posX * t.node.scaleX, t.node.y = n.posY * t.node.scaleY
            },
            loadResWithoutPosition: function (e, t) {
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                t.spriteFrame = a.getItemFrame(e)
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    "fishlist-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "7c7e8vBqhdP7IXPso/dQdVG", "fishlist-dialog");
        e("analytics-data"), e("instant-util");
        var i = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                coin_label: {default: null, type: cc.Label},
                list_layout: {default: null, type: cc.Node},
                fish_item_prefab: {default: null, type: cc.Prefab},
                newLabel: cc.Label,
                scrollviewList: cc.ScrollView,
                human: cc.Node,
                demigod: cc.Node,
                god: cc.Node
            },
            onLoad: function () {
                var e = this, a = this;
                this.customEvent = {updateCoin: "refreshCoin"};
                var t = function () {
                    var t = e.customEvent[n];
                    cc.director.on(n, function (e) {
                        a[t]()
                    })
                };
                for (var n in this.customEvent) t();
                this.setListData()
            },
            onDestroy: function () {
                console.log("222", this.node);
                for (var e in this.customEvent) cc.director.off(e)
            },
            setListData: function () {
                (new Date).getTime();
                this.list_layout.getComponent("list-adapter").removeAllListView(), this.coin_label.string = i.unit_format(playerManager.getObjData("Coin"));
                var e = [], t = playerManager.getNumData("UnlockLevel") - 4;
                t = 0 <= t ? t : 0;
                for (var a = 0; a < fish_data.length; a++) {
                    var n = a <= t ? 1 : 0;
                    1 == this.checkCanFree(a) ? n = 2 : 1 == this.checkDiamond(a) && (n = 3), e.push({
                        index: a,
                        state: n
                    })
                }
                this.list_layout.getComponent("list-adapter").initListView(this.fish_item_prefab, "fish-item", e)
            },
            refreshListData: function (e) {
                var t = playerManager.getNumData("UnlockLevel") - 4, a = e <= (t = 0 <= t ? t : 0) ? 1 : 0;
                1 == this.checkCanFree(e) ? a = 2 : 1 == this.checkDiamond(e) && (a = 3);
                var n = {index: e, state: a};
                this.list_layout.getComponent("list-adapter").refreshData(e, n)
            },
            checkCanFree: function (e) {
                return !1
            },
            checkDiamond: function (e) {
                if (playerManager.getNumData("UnlockLevel") < 5) return !1;
                if (5 == playerManager.getNumData("UnlockLevel") && 3 == e) return !0;
                if (5 == playerManager.getNumData("UnlockLevel") && 2 == e) return !1;
                var t = playerManager.getNumData("UnlockLevel") - 2;
                return t == e || t == e + 1
            },
            refreshCoin: function (e) {
                e = null == e ? i.unit_format(playerManager.getObjData("Coin")) : i.unit_format(e), this.coin_label.string = e
            },
            closeDialog: function () {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").closeButtonListDialog(), 1 == playerManager.getObjData("animTutorial") && cc.director.emit("nextTutorial5")
            },
            update: function () {
                1180 <= this.scrollviewList.getScrollOffset().y && this.scrollviewList.getScrollOffset().y <= 3326 && 11 <= playerManager.getNumData("UnlockLevel") ? (this.demigod.active = !0, this.god.active = !1, this.human.active = !1) : 3326 < this.scrollviewList.getScrollOffset().y && 25 <= playerManager.getNumData("UnlockLevel") ? (this.demigod.active = !1, this.god.active = !0, this.human.active = !1) : this.scrollviewList.getScrollOffset().y < 1180 && (this.demigod.active = !1, this.god.active = !1, this.human.active = !0)
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    flowlight_fsh: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "7e5e2KVB91EqosGZ/j/ieVO", "flowlight_fsh");
        t.exports = "precision mediump float;varying vec2 v_texCoord;uniform float sys_time;void main(){    vec4 src_color = texture2D(CC_Texture0, v_texCoord).rgba;    float width = 0.3;    float start = sys_time * 1.2;    float strength = 0.005;    float offset = 0.4;        if( v_texCoord.x < (start - offset * v_texCoord.y) &&  v_texCoord.x > (start - offset * v_texCoord.y - width))    {        vec3 improve = strength * vec3(255, 255, 255);        vec3 result = improve * vec3( src_color.r, src_color.g, src_color.b);        gl_FragColor = vec4(result, src_color.a);    } else {        gl_FragColor = src_color;    }}", cc._RF.pop()
    }, {}],
    flowlight_vsh: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "d3a53MPQ71B6oI3WFXmvzRR", "flowlight_vsh");
        t.exports = "attribute vec4 a_position;attribute vec2 a_texCoord;attribute vec4 a_color;varying vec2 v_texCoord;varying vec4 v_fragmentColor;void main(){gl_Position = CC_PMatrix * a_position;v_fragmentColor = a_color;v_texCoord = a_texCoord;}", cc._RF.pop()
    }, {}],
    gameData: [function (e, d, t) {
        "use strict";
        cc._RF.push(d, "e9854ut2KpC9Lu+9dcTVxnG", "gameData");
        var h = e("number-util");
        (function () {
            if (window.gameData) d.exports = window.gameData; else {
                var i = {}, t = [{name: "P1", posX: 7, posY: -11}, {name: "P2", posX: 7, posY: -11}, {
                        name: "P3",
                        posX: 7,
                        posY: -11
                    }, {name: "P4", posX: 7, posY: -11}, {name: "P5", posX: 21, posY: -11}, {
                        name: "P6",
                        posX: 21,
                        posY: -11
                    }, {name: "P7", posX: 5, posY: -11}, {name: "P8", posX: 5, posY: -11}, {
                        name: "P9",
                        posX: 5,
                        posY: -11
                    }, {name: "P10", posX: 5, posY: -11}, {name: "P11", posX: 5, posY: -11}, {
                        name: "P12",
                        posX: 5,
                        posY: -11
                    }, {name: "P13", posX: 10, posY: -11}, {name: "P14", posX: 10, posY: -11}, {
                        name: "P15",
                        posX: 10,
                        posY: -11
                    }, {name: "P16", posX: 10, posY: -11}, {name: "P17", posX: 18, posY: -11}, {
                        name: "P18",
                        posX: 18,
                        posY: -11
                    }, {name: "P19", posX: 18, posY: -11}, {name: "P20", posX: 24, posY: -11}, {
                        name: "P21",
                        posX: 24,
                        posY: -11
                    }, {name: "P22", posX: 24, posY: -11}, {name: "P23", posX: 24, posY: -11}, {
                        name: "P24",
                        posX: 24,
                        posY: -11
                    }, {name: "P25", posX: 24, posY: -11}, {name: "P26", posX: 15, posY: -11}, {
                        name: "P27",
                        posX: 15,
                        posY: -11
                    }, {name: "P28", posX: 15, posY: -11}, {name: "P29", posX: 15, posY: -11}, {
                        name: "P30",
                        posX: 15,
                        posY: -11
                    }, {name: "P31", posX: 15, posY: -11}, {name: "P32", posX: 15, posY: -11}, {
                        name: "P33",
                        posX: 15,
                        posY: -11
                    }, {name: "P34", posX: 15, posY: -11}, {name: "P35", posX: 15, posY: -11}, {
                        name: "P36",
                        posX: 15,
                        posY: -11
                    }, {name: "P37", posX: 15, posY: -11}],
                    a = [{name: "P1", posX: 7, posY: -11}, {name: "P2", posX: 7, posY: -11}, {
                        name: "P3",
                        posX: 7,
                        posY: -11
                    }, {name: "P4", posX: 7, posY: -11}, {name: "P5", posX: 21, posY: -11}, {
                        name: "P6",
                        posX: 21,
                        posY: -11
                    }, {name: "P7", posX: 5, posY: -11}, {name: "P8", posX: 5, posY: -11}, {
                        name: "P9",
                        posX: 5,
                        posY: -11
                    }, {name: "P10", posX: 5, posY: -11}, {name: "P11", posX: 5, posY: -11}, {
                        name: "P12",
                        posX: 5,
                        posY: -11
                    }, {name: "P13", posX: 10, posY: -11}, {name: "P14", posX: 10, posY: -11}, {
                        name: "P15",
                        posX: 10,
                        posY: -11
                    }, {name: "P16", posX: 10, posY: -11}, {name: "P17", posX: 18, posY: -11}, {
                        name: "P18",
                        posX: 18,
                        posY: -11
                    }, {name: "P19", posX: 18, posY: -11}, {name: "P20", posX: 24, posY: -11}, {
                        name: "P21",
                        posX: 24,
                        posY: -11
                    }, {name: "P22", posX: 24, posY: -11}, {name: "P23", posX: 24, posY: -11}, {
                        name: "P24",
                        posX: 24,
                        posY: -11
                    }, {name: "P25", posX: 24, posY: -11}, {name: "P26", posX: 15, posY: -11}, {
                        name: "P27",
                        posX: 15,
                        posY: -11
                    }, {name: "P28", posX: 15, posY: -11}, {name: "P29", posX: 15, posY: -11}, {
                        name: "P30",
                        posX: 15,
                        posY: -11
                    }, {name: "P31", posX: 15, posY: -11}, {name: "P32", posX: 15, posY: -11}, {
                        name: "P33",
                        posX: 15,
                        posY: -11
                    }, {name: "P34", posX: 15, posY: -11}, {name: "P35", posX: 15, posY: -11}, {
                        name: "P36",
                        posX: 15,
                        posY: -11
                    }, {name: "P37", posX: 15, posY: -11}],
                    n = [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 7, 8, 9, 10, 11, 12, 13, 13, 14, 15, 16, 17],
                    r = [{name: "Lv.1", unlockland: 4, bonuscoin: "0", exp: "0"}, {
                        name: "Lv.2",
                        unlockland: 5,
                        bonuscoin: "0",
                        exp: "6"
                    }, {name: "Lv.3", unlockland: 6, bonuscoin: "0", exp: "16"}, {
                        name: "Lv.4",
                        unlockland: 7,
                        bonuscoin: "0",
                        exp: "40"
                    }, {name: "Lv.5", unlockland: 8, bonuscoin: "0", exp: "96"}, {
                        name: "Lv.6",
                        unlockland: 9,
                        bonuscoin: "0",
                        exp: "224"
                    }, {name: "Lv.7", unlockland: 10, bonuscoin: "0", exp: "512"}, {
                        name: "Lv.8",
                        unlockland: 11,
                        bonuscoin: "0",
                        exp: "1152"
                    }, {name: "Lv.9", unlockland: 12, bonuscoin: "0", exp: "2560"}, {
                        name: "Lv.10",
                        unlockland: 13,
                        bonuscoin: "0",
                        exp: "5632"
                    }, {name: "Lv.11", unlockland: 14, bonuscoin: "1306000", exp: "12288"}, {
                        name: "Lv.12",
                        unlockland: 15,
                        bonuscoin: "4178000",
                        exp: "26624"
                    }, {name: "Lv.13", unlockland: 15, bonuscoin: "13786000", exp: "57344"}, {
                        name: "Lv.14",
                        unlockland: 15,
                        bonuscoin: "41939000",
                        exp: "122880"
                    }, {name: "Lv.15", unlockland: 15, bonuscoin: "130010000", exp: "262144"}, {
                        name: "Lv.16",
                        unlockland: 15,
                        bonuscoin: "403033000",
                        exp: "557056"
                    }, {name: "Lv.17", unlockland: 15, bonuscoin: "1249000000", exp: "1179648"}, {
                        name: "Lv.18",
                        unlockland: 15,
                        bonuscoin: "3873000000",
                        exp: "2490368"
                    }, {name: "Lv.19", unlockland: 15, bonuscoin: "12006000000", exp: "5242880"}, {
                        name: "Lv.20",
                        unlockland: 15,
                        bonuscoin: "39480000000",
                        exp: "11010048"
                    }, {name: "Lv.21", unlockland: 15, bonuscoin: "122388000000", exp: "23068672"}, {
                        name: "Lv.22",
                        unlockland: 15,
                        bonuscoin: "318207000000",
                        exp: "48234496"
                    }, {name: "Lv.23", unlockland: 15, bonuscoin: "1018000000000", exp: "100663296"}, {
                        name: "Lv.24",
                        unlockland: 15,
                        bonuscoin: "3360000000000",
                        exp: "209715200"
                    }, {name: "Lv.25", unlockland: 15, bonuscoin: "11425000000000", exp: "436207616"}, {
                        name: "Lv.26",
                        unlockland: 15,
                        bonuscoin: "38845000000000",
                        exp: "905969664"
                    }, {name: "Lv.27", unlockland: 15, bonuscoin: "89641000000000", exp: "1879048192"}, {
                        name: "Lv.28",
                        unlockland: 15,
                        bonuscoin: "286853000000000",
                        exp: "3892314112"
                    }, {name: "Lv.29", unlockland: 15, bonuscoin: "717312000000000", exp: "8053063680"}, {
                        name: "Lv.30",
                        unlockland: 15,
                        bonuscoin: "2000000000000000",
                        exp: "20000000000"
                    }], o = [{index: 0, weight: 5, type: 7}, {index: 1, weight: 5, type: 2}, {
                        index: 2,
                        weight: 5,
                        type: 0
                    }, {index: 3, weight: 5, type: 4}, {index: 4, weight: 5, type: 3}, {
                        index: 5,
                        weight: 5,
                        type: 6
                    }, {index: 6, weight: 5, type: 1}, {index: 7, weight: 5, type: 5}], s = {
                        Accelarate: function () {
                            return !0
                        }, Spin: function () {
                            return !0
                        }, UFO: function () {
                            return !0
                        }
                    }, c = [200, 300, 320, 340, 360, 380, 400],
                    l = [{type: 1, value: 200}, {type: 2, value: 10}, {type: 1, value: 400}, {
                        type: 1,
                        value: 600
                    }, {type: 1, value: 600}, {type: 1, value: 600}, {type: 3, value: 20}], u = {
                        Normal: [{index: 1, text: "我是个勤奋的人 ."}, {
                            index: 2,
                            text: "培训，培训."
                        }, {index: 3, text: "敌人?"}, {index: 4, text: "这把斧子很重."}, {
                            index: 5,
                            text: "看我的大刀."
                        }, {index: 6, text: "我的公主在哪?"}, {
                            index: 7,
                            text: "我应该为谁流血."
                        }, {index: 8, text: "这是我的土地."}, {index: 9, text: "我的帽子是进口的."}, {
                            index: 10,
                            text: "国王，我支持你."
                        }, {index: 11, text: "我说，你必须这么做."}, {
                            index: 12,
                            text: "我想变得更强壮."
                        }, {index: 13, text: "战斗，战斗!"}, {
                            index: 14,
                            text: "我觉得我很有力量."
                        }, {index: 15, text: "我的弓准备好了."}, {index: 16, text: "狐狸，狐狸!"}, {
                            index: 17,
                            text: "我超自然的力量."
                        }, {index: 18, text: "我有把斧子要磨."}, {index: 19, text: "我的猎物就在附近."}, {
                            index: 20,
                            text: "我听到野性的呼唤."
                        }, {index: 21, text: "我的羽毛最漂亮."}, {
                            index: 22,
                            text: "从我来的深处."
                        }, {index: 23, text: "复仇在燃烧."}, {
                            index: 24,
                            text: "来和我战斗吧."
                        }, {index: 25, text: "未来是我们的."}, {
                            index: 26,
                            text: "我必须保护土地!"
                        }, {index: 27, text: "士兵们，集合!"}, {
                            index: 28,
                            text: "我是盲人，但不是聋子."
                        }, {index: 29, text: "我充满力量！"}, {
                            index: 30,
                            text: "我在这里，一如既往."
                        }, {index: 31, text: "现在是时候了!"}, {index: 32, text: "我是不可战胜的."}, {
                            index: 33,
                            text: "我的眼睛能看到一切!"
                        }, {index: 34, text: "时间很短，凡人."}, {
                            index: 35,
                            text: "正义将得到伸张!"
                        }, {index: 36, text: "我活着是为了服务所有的信徒!"}, {
                            index: 37,
                            text: "好吧，谁想试试呢? "
                        }],
                        Short: ["天啊", "哇", "大笑", "WOWW", "WTF", "Amazing", "Jesus", "ROFL", "Awesome", "Oh", "Ah", "COME", "酷", "LMAO", "AHA！", "YOLO", "SKR", "What?!", "OPPS"]
                    };
                i.getHousePanelPos = function (e) {
                    return t[e]
                }, i.getHouseStorePos = function (e) {
                    return a[e]
                }, i.getBoxLevel = function (e) {
                    return n[e]
                }, i.getPlayerLevelData = function (e) {
                    return r[e]
                }, i.getPlayerLevel = function (e) {
                    for (var t = {level: 29, curexp: 100, nextexp: 100}, a = r.length - 1; 0 <= a; a--) {
                        var n = r[a], i = r[a + 1];
                        if (0 <= h.cmpBigInt(e, n.exp)) {
                            var o = h.galaxySub(e, n.exp);
                            t = {level: a, curexp: o, nextexp: null == i ? o : h.galaxySub(i.exp, n.exp)};
                            break
                        }
                    }
                    return t
                }, i.getLevelUpReward = function (e) {
                    var t = {count: 0}, a = i.getPlayerLevelData(e), n = i.getPlayerLevelData(e - 1);
                    return null == n && (n = {
                        name: "Lv.1",
                        unlockland: 4,
                        bonuscoin: "0",
                        exp: "0"
                    }), 0 < h.cmpBigInt(a.bonuscoin, 0) && (t.coin = a.bonuscoin, t.count++), 0 < a.unlockland - n.unlockland && (t.land = a.unlockland - n.unlockland, t.count++), t
                }, i.getSpinReward = function () {
                    for (var e = 0, t = {index: 0, weight: 5, type: 0}, a = 0; a < o.length; a++) e += o[a].weight;
                    var n = Math.random() * e;
                    for (a = 0; a < o.length; a++) {
                        if (n <= o[a].weight) {
                            t = o[a];
                            break
                        }
                        n -= o[a].weight
                    }
                    return t
                }, i.getUFOReward = function () {
                    return {index: 0, weight: 5, type: 0}
                }, i.getUnlockStatus = function (e) {
                    return !!s[e] && s[e]()
                }, i.getDailyShareReward = function (e) {
                    return e < 0 ? e = 0 : c.length <= e && (e = c.length - 1), c[e]
                }, i.getDailyBonusReward = function (e) {
                    return e < 0 ? e = 0 : l.length <= e && (e = l.length - 1), l[e]
                }, i.getDialogue = function (e, t) {
                    var a = Math.random() < .5 ? 0 : 2;
                    if (0 == a) return {index: e + a, text: u.Normal[t].text};
                    if (2 == a) {
                        var n = h.randomNum(0, u.Short.length - 1);
                        return {index: e + a, text: u.Short[n]}
                    }
                    return {index: 2, text: "OMG"}
                }, window.gameData = i, d.exports = i
            }
        })(), cc._RF.pop()
    }, {"number-util": "number-util"}],
    getoffcoin_dlg: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "9e8d8thXl9LaZtQUXQGg0GI", "getoffcoin_dlg");
        var o = e("number-util"), r = e("instant-util"), s = e("analytics-data");
        cc.Class({
            extends: cc.Component,
            properties: {
                btnback: cc.Button,
                labelCoin: cc.Label,
                shareBtn: cc.Node,
                videoBtn: cc.Node,
                share_toggle: {default: null, type: cc.Toggle}
            },
            onLoad: function () {
                for (var e = Math.floor((new Date).getTime() / 1e3), t = playerManager.getObjData("lastOffline"), a = 10800 < e - t ? 10800 : e - t, n = this.allearn = 0; n <= 14; n++) {
                    var i = playerManager.getObjData("Panel" + n);
                    0 <= i.level && (this.allearn = o.galaxyAdd(this.allearn, fish_data[i.level].coinsec))
                }
                this.allearn = o.galaxyMut(this.allearn, a / 2), this.labelCoin.string = "+" + o.unit_format(this.allearn), playerManager.setObjData("lastOffline", Math.floor((new Date).getTime() / 1e3)), this.shareBtn.active = !1, this.videoBtn.active = !1, globalManager.canShare(globalManager.shareType.offline, {
                    level: playerManager.getNumData("UnlockLevel"),
                    isFirst: globalManager.isNewPlayer
                }) ? (this.shareBtn.active = !0, this.rewardType = 1) : (this.videoBtn.active = !0, this.rewardType = 2);
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").playSound("congratulations")
            },
            watchVideo: function () {
                var t = this;
                s.watch_video_offiline_coin_event("offline");
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                r.showRewardAd(function () {
                    cc.log("showAd success"), s.watch_video_offiline_coin_success_event("offline");
                    var e = o.galaxyMut(t.allearn, 2);
                    a.showCoinGotPopUp(o.unit_format(e), t.checkAutoDaily), playerManager.addNumData("Coin", e), playerManager.addNumData("TotalCoin", e), cc.director.emit("updateCoin"), t.closeDialog(null, !1)
                }, function () {
                    cc.log("RewardAd load err"), 1 == globalManager.canShowReward ? a.showToast("No available Ad right now, try again later.") : a.showToast("The web page does not currently support ads.")
                })
            },
            shareClick: function () {
                var t = this;
                s.share_offline_coin_event(t.share_toggle.isChecked);
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                if (t.share_toggle.isChecked) {
                    cc.log("offcoin callback");
                    var e = {type: globalManager.shareType.offline, inviter: r.getPlayerID(), rewards: "1"},
                        n = globalManager.getShareConfig(globalManager.shareType.offline);
                    r.chooseContext(function () {
                        s.share_offline_coin_success_event();
                        var e = o.galaxyMut(t.allearn, 3);
                        a.showCoinGotPopUp(o.unit_format(e), t.checkAutoDaily), playerManager.addNumData("Coin", e), playerManager.addNumData("TotalCoin", e), cc.director.emit("updateCoin"), t.closeDialog(null, !1)
                    }, function (e, t) {
                        s.share_offline_coin_fail_event(e), a.showToast(t)
                    }, e, n.text, n.img)
                } else {
                    s.get_offline_coin_without_share_event(), cc.log("offcoin callback1");
                    var i = o.galaxyMut(t.allearn, 3);
                    a.showCoinGotPopUp(o.unit_format(i), t.checkAutoDaily), playerManager.addNumData("Coin", i), playerManager.addNumData("TotalCoin", i), cc.director.emit("updateCoin")
                }
            },
            doubleClick: function () {
                console.log("doubleClick=======")
                s.offline_coin_click_event(), 1 == this.rewardType ? this.shareClick() : this.watchVideo()
            },
            checkAutoDaily: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                0 == playerManager.getObjData("autoShowDaily") && (e.showDailyCheckinPopUp(), playerManager.setObjData("autoShowDaily", !0))
            },
            closeDialog: function (e) {
                var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                    a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                1 == t && (playerManager.addNumData("Coin", this.allearn), playerManager.addNumData("TotalCoin", this.allearn), cc.director.emit("updateCoin"), a.showCoinGotPopUp(o.unit_format(this.allearn), this.checkAutoDaily)), this.node.removeFromParent(!1), a.offcoin_dialog = null
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    "gift-node": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "4a6fag+C+pL5KyLREjd3zih", "gift-node"), cc.Class({
            extends: cc.Component,
            properties: {open_sprite: {default: null, type: cc.Sprite}, close_sprite: {default: null, type: cc.Sprite}},
            onLoad: function () {
            },
            start: function () {
            },
            setState: function (e, t) {
                cc.log("isOpen=" + e + "   isReceive=" + t), this.animate = this.getComponent(cc.Animation), e ? (this.open_sprite.node.active = !0, this.close_sprite.node.active = !1, t ? (this.animate.stop(), this.node.rotation = 0) : this.animate.play()) : (this.open_sprite.node.active = !1, this.close_sprite.node.active = !0, this.animate.stop(), this.node.rotation = 0)
            }
        }), cc._RF.pop()
    }, {}],
    globalManager: [function (require, module, exports) {
        "use strict";
        cc._RF.push(module, "ebfcbBGT/xFC4t82jzjGFqv", "globalManager");
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        require("md5");
        var NumberUtil = require("number-util"), WebimgUtil = require("webimg-util");
        (function () {
            if (window.globalManager) module.exports = window.globalManager; else {
                var TAG = "GlobalManager", Version = "V2.0.0", subVersion = Math.round(1e10 * Math.random()).toString(),
                    globalManager = {
                        ZOrder_Hide: -1,
                        ZOrder_Zero: 0,
                        ZOrder_TutorPopup: 98,
                        ZOrder_TutorNode: 99,
                        ZOrder_Popup: 100,
                        ZOrder_Toast: 101,
                        appId: "348201739301497",
                        appIdTest: "2221074618166857",
                        appid_reg: /348201739301497/,
                        appidtest_reg: /2221074618166857/,
                        loginTime: 0,
                        serverLoginTime: 0,
                        serverResetTime: 0,
                        isBlackList: !1,
                        InterstitialAdId: "348201739301497_355608925227445",
                        RewardAdId: "348201739301497_355610018560669",
                        isNewPlayer: !1,
                        firstInLogin: !0,
                        firstInGame: !0,
                        fbPlayerId: null,
                        gamelist: [{
                            app_id: "527721167689261",
                            name: "Juice Master",
                            img: "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p200x200/41286169_920761251443235_2508817730489024512_n.jpg?_nc_cat=0&oh=610bd9524a8a3ee175e6bb8b19ad74b6&oe=5C3960BD",
                            url: ""
                        }, {
                            app_id: "2095791540676791",
                            name: "Car Tycoon",
                            img: "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p200x200/40515193_2153404564925308_1599571423054004224_n.jpg?_nc_cat=1&oh=6fb3c3f9295512ec5c16dec80b33e29f&oe=5C2BC2B4",
                            url: ""
                        }],
                        gameListInGame: [{
                            app_id: "527721167689261",
                            name: "Juice Master",
                            img: "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p200x200/41286169_920761251443235_2508817730489024512_n.jpg?_nc_cat=0&oh=610bd9524a8a3ee175e6bb8b19ad74b6&oe=5C3960BD",
                            url: ""
                        }, {
                            app_id: "2095791540676791",
                            name: "Car Tycoon",
                            img: "https://scontent-hkg3-1.xx.fbcdn.net/v/t1.0-1/p200x200/40515193_2153404564925308_1599571423054004224_n.jpg?_nc_cat=1&oh=6fb3c3f9295512ec5c16dec80b33e29f&oe=5C2BC2B4",
                            url: ""
                        }],
                        publicConfig: {}
                    };
                globalManager.shareType = cc.Enum({
                    unlock: "unlock",
                    rankShare: "rankShare",
                    offline: "offline",
                    speedUp: "speedUp",
                    catchFish: "saveHero",
                    inviteFriend: "inviteFriend",
                    inviteNewFriend: "inviteNewFriend",
                    playWithFriend: "playWithFriend",
                    loginShare: "loginShare",
                    freeUpgrade: "freeUpgrade",
                    levelUp: "levelUp",
                    spinShare: "spinShare",
                    spinShareLack: "spinShareLack",
                    UFOShare: "UFOShare",
                    NoCoinShare: "NoCoinShare",
                    DailyShare: "DailyShare",
                    rewardMuti: "rewardMuti",
                    dailyCheckin: "dailyCheckin",
                    dailyBonusAgain: "dailyBonusAgain",
                    daimondStore: "daimondStore",
                    noDiamondShare: "noDiamondShare"
                }), globalManager.taskType = {
                    inviteFriend: 1,
                    login: 2,
                    watchVideo: 3,
                    share: 4,
                    playWithFriend: 5,
                    mergeTimes: 10,
                    speedupTimes: 11
                }, globalManager.storeFreeHouse = 1, globalManager.storeFreeHouseCD = 300, globalManager.UpgradeBuy = 5, globalManager.GoldenBox = 0, globalManager.SpinRewardMuti = 0, globalManager.BoxCD = 30, globalManager.AccelarateCD = 200, globalManager.AccelarateTime = 200, globalManager.AccelarateTime1 = 60, globalManager.updateStrategy = {
                    LAST: "LAST",
                    IMMEDIATE: "IMMEDIATE",
                    IMMEDIATE_CLEAR: "IMMEDIATE_CLEAR"
                }, globalManager.MaxShareCounts = 3, globalManager.shareRewardAutoShow = !1, globalManager.diamondReward = 200, globalManager.spinRotation = 180, globalManager.shareOrVideoMaxCounts = 30, globalManager.canShowReward = !0, globalManager.hasShareTask = !1;
                var randomNum = 100 * Math.random();
                globalManager.storeFreeHouse = randomNum <= 10 ? 1 : randomNum <= 40 ? 2 : 3;
                var noencrypt = !1;
                globalManager.isGameInit = function (e) {
                    return true;
                    // return !!/^192\..*|localhost/.exec(location.hostname) || !!e.exec(location.href)
                }, globalManager.encrypt = function (e, t) {
                    if (e += "", null == t || t.length <= 0) return null;
                    e = escape(e);
                    for (var a = "", n = 0; n < t.length; n++) a += t.charCodeAt(n).toString();
                    var i = Math.floor(a.length / 5),
                        o = parseInt(a.charAt(i) + a.charAt(2 * i) + a.charAt(3 * i) + a.charAt(4 * i) + a.charAt(5 * i)),
                        r = Math.ceil(t.length / 2), s = Math.pow(2, 31) - 1;
                    if (o < 2) return null;
                    var c = Math.round(1e9 * Math.random()) % 1e8;
                    for (a += c; 10 < a.length;) a = (parseInt(a.substring(0, 10)) + parseInt(a.substring(10, a.length))).toString();
                    a = (o * a + r) % s;
                    var l = "", u = "";
                    for (n = 0; n < e.length; n++) u += (l = parseInt(e.charCodeAt(n) ^ Math.floor(a / s * 255))) < 16 ? "0" + l.toString(16) : l.toString(16), a = (o * a + r) % s;
                    for (c = c.toString(16); c.length < 8;) c = "0" + c;
                    return u += c
                }, globalManager.decrypt = function (e, t) {
                    if (!(null == e || e.length < 8 || null == t || t.length <= 0)) {
                        for (var a = "", n = 0; n < t.length; n++) a += t.charCodeAt(n).toString();
                        var i = Math.floor(a.length / 5),
                            o = parseInt(a.charAt(i) + a.charAt(2 * i) + a.charAt(3 * i) + a.charAt(4 * i) + a.charAt(5 * i)),
                            r = Math.round(t.length / 2), s = Math.pow(2, 31) - 1,
                            c = parseInt(e.substring(e.length - 8, e.length), 16);
                        for (e = e.substring(0, e.length - 8), a += c; 10 < a.length;) a = (parseInt(a.substring(0, 10)) + parseInt(a.substring(10, a.length))).toString();
                        a = (o * a + r) % s;
                        var l = "", u = "";
                        for (n = 0; n < e.length; n += 2) l = parseInt(parseInt(e.substring(n, n + 2), 16) ^ Math.floor(a / s * 255)), u += String.fromCharCode(l), a = (o * a + r) % s;
                        return unescape(u)
                    }
                }, globalManager.encryptKey = function (e) {
                    return cc.MD5(e)
                }, globalManager.getDT = function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1, t = arguments[1],
                        a = e[1];
                    a = "subVersion";
                    var n = globalManager.getLocalData(a, null, !0);
                    if (null == n) {
                        var i = Math.round(1e10 * Math.random()).toString();
                        return globalManager.saveLocalData(a, i, !0), t && t(a), i
                    }
                    return n
                }, globalManager.saveLocalData = function (e, t) {
                    // var a = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    // null != globalManager.fbPlayerId && (e += globalManager.fbPlayerId, 1 != noencrypt && (e = globalManager.encryptKey(e), 0 == a && (t = globalManager.encrypt(t, subVersion)));
                    cc.sys.localStorage.setItem(e, t);
                    // console.error("saveLocalData=======")
                }, globalManager.getLocalData = function (e, t) {
                    // var a = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    // if (null == globalManager.fbPlayerId) return t;
                    // e += globalManager.fbPlayerId, 0 == noencrypt && (e = globalManager.encryptKey(e));
                    // console.log("getLocalData=======")
                    var n = cc.sys.localStorage.getItem(e);
                    return n;
                    // return null != n && "null" != n && 0 == a && 0 == noencrypt && (n = globalManager.decrypt(n, subVersion)), null != n && "null" != n || null == t || (n = t), n
                }, globalManager.initDT = function () {
                    subVersion = globalManager.getDT(Version, function () {
                        for (var e = 1; e <= 10; e++) globalManager.saveLocalData("key" + e, Math.round(1e10 * Math.random()).toString(), !0)
                    })
                }, globalManager.canShare = function (type, args) {
                    if (globalManager.isBlackList) return !1;
                    if ("undefined" === !("undefined" == typeof FBInstant || _typeof(FBInstant)) && (cc.log(FBInstant.getPlatform() + "!!!!!!!!!!!!!"), "WEB" === FBInstant.getPlatform())) return !0;
                    if (globalManager.publicConfig) {
                        args.date = Date.parse(new Date);
                        var result = globalManager.publicConfig[type];
                        if (result) try {
                            return result = NumberUtil.format(result, args), result = "(function(){" + result + "})()", cc.log("function = " + result), eval(result)
                        } catch (e) {
                            return cc.log(e.toString()), !1
                        }
                    }
                    return !1
                }, globalManager.eval = function (result, args) {
                    if (result) try {
                        return result = NumberUtil.format(result, args), result = "(function(){" + result + "})()", eval(result)
                    } catch (e) {
                        return cc.log(e.toString()), !1
                    }
                    return !1
                }, globalManager.webCopyString = function (e) {
                    console.log("复制");
                    var t = e + "", a = document.createElement("textarea");
                    a.value = t, a.setAttribute("readonly", ""), a.style.contain = "strict", a.style.position = "absolute", a.style.left = "-9999px", a.style.fontSize = "12pt";
                    var n = getSelection(), i = !1;
                    0 < n.rangeCount && (i = n.getRangeAt(0)), document.body.appendChild(a), a.select(), a.selectionStart = 0, a.selectionEnd = t.length;
                    var o = !1, r = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                    null == r && (r = cc.director.getScene().getChildByName("Canvas").getComponent("login-world"));
                    try {
                        o = document.execCommand("copy"), r.showToast("Copy success")
                    } catch (e) {
                        r.showToast("Copy failed")
                    }
                    return document.body.removeChild(a), i && (n.removeAllRanges(), n.addRange(i)), o
                }, globalManager.getCookie = function (e) {
                    var t, a = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
                    return (t = document.cookie.match(a)) ? t[2] : null
                }, globalManager.setShareConfig = function () {
                    server_util.shareList(function (e) {
                        var n = cc.sys.localStorage.getItem("shareConfigList");
                        n = n ? JSON.parse(n) : {}, e.list.map(function (e) {
                            var t = e.type;
                            cc.sys.localStorage.getItem(e.img) ? (n[t] = {
                                img: e.img,
                                title: e.title
                            }, cc.sys.localStorage.setItem("shareConfigList", JSON.stringify(n))) : WebimgUtil.getBase64(e.img, function (e, t) {
                                var a = t.type;
                                n[a] && cc.sys.localStorage.removeItem(n[a].img), cc.sys.localStorage.setItem(t.img, e), n[a] = {
                                    img: t.img,
                                    title: t.title
                                }, cc.sys.localStorage.setItem("shareConfigList", JSON.stringify(n))
                            }, function (e) {
                                n[t] = {title: e.title}, cc.sys.localStorage.setItem("shareConfigList", JSON.stringify(n))
                            }, e)
                        })
                    })
                }, globalManager.getShareConfig = function (e) {
                    var t = cc.sys.localStorage.getItem("shareConfigList");
                    return (t = t ? JSON.parse(t) : {})[e] ? {
                        img: cc.sys.localStorage.getItem(t[e].img),
                        text: t[e].title
                    } : {}
                }, globalManager.addTaskProgress = function (e) {
                    var t = {};
                    if (t[globalManager.taskType.mergeTimes] = "mergeTimes", t[globalManager.taskType.speedupTimes] = "speedUpTimes", null != t[e]) {
                        var a = playerManager.getNumData(t[e]) + 1;
                        playerManager.setNumData(t[e], a)
                    }
                    cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").checkReward()
                }, globalManager.getTaskProgress = function (e) {
                    var t = {};
                    return t[globalManager.taskType.mergeTimes] = "mergeTimes", t[globalManager.taskType.speedupTimes] = "speedUpTimes", null != t[e] ? playerManager.getNumData(t[e]) : 0
                }, window.globalManager = globalManager, module.exports = globalManager
            }
        })(), cc._RF.pop()
    }, {md5: "md5", "number-util": "number-util", "webimg-util": "webimg-util"}],
    gray_fsh: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "6abc7KVQGJENICEMF3Ix0mV", "gray_fsh");
        t.exports = "varying vec4 v_fragmentColor;varying vec2 v_texCoord;void main(){vec4 v_orColor = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);float gray = dot(v_orColor.rgb, vec3(0.299, 0.587, 0.114));gl_FragColor = vec4(gray, gray, gray, v_orColor.a);}", cc._RF.pop()
    }, {}],
    gray_vsh: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "54b8fmNpY9Kqo01mcvLJrHq", "gray_vsh");
        t.exports = "attribute vec4 a_position;attribute vec2 a_texCoord;attribute vec4 a_color;varying vec4 v_fragmentColor;varying vec2 v_texCoord;void main(){gl_Position = CC_PMatrix * a_position;v_fragmentColor = a_color;v_texCoord = a_texCoord;}", cc._RF.pop()
    }, {}],
    "http-client": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "756b3hdRixPh7UlwC6GQnCQ", "http-client");
        t.exports = {
            httpPostRequest: function (e, t, a, n) {
                a && a();
                return;
                var i = JSON.stringify(t);
                cc.log("httpPostRequest:" + e + ", after param = " + i);
                var o = cc.loader.getXMLHttpRequest();
                o.timeoutId = setTimeout(function () {
                    n && cc.log("httpRequest timeout")
                }, 6e3), o.open("POST", e), o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.send(i), o.onreadystatechange = function () {
                    if (clearTimeout(o.timeoutId), 4 == o.readyState && 200 <= o.status && o.status < 400) {
                        cc.log("httpRequest.readyState=" + o.readyState), cc.log("httpRequest.status=" + o.status);
                        o.statusText;
                        var e = o.responseText;
                        cc.log("responseText = " + e);
                        var t = null;
                        try {
                            t = JSON.parse(e)
                        } catch (e) {
                            cc.log("服务端未知错误")
                        }
                        t && (0 == t.code ? a && a(t.data) : n && n(t))
                    }
                }, o.onerror = function (e) {
                    clearTimeout(o.timeoutId);
                    var t = o.responseText;
                    t || (t = "network error"), n && n(t)
                }
            }, httpGetRequest: function (e, t, a, n) {
                for (var i in t) e += i + "=" + t.key;
                var o = cc.loader.getXMLHttpRequest();
                o.onreadystatechange = function () {
                    if (4 === o.readyState && 200 <= o.status && o.status < 400) {
                        var e = o.responseText;
                        cc.log("responseText = " + e);
                        var t = null;
                        try {
                            t = JSON.parse(e)
                        } catch (e) {
                            cc.log("服务端未知错误")
                        }
                        t && a && a(t)
                    }
                }, o.open("GET", e, !0), cc.sys.isNative && o.setRequestHeader("Accept-Encoding", "gzip,deflate"), o.timeoutId = setTimeout(function () {
                    n && cc.log("httpRequest timeout")
                }, 6e3), o.send()
            }
        }, cc._RF.pop()
    }, {}],
    "instant-util": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "1d9b4T4x31MFKzOCrskJ0yO", "instant-util");
        var n = e("fbinstant-util"), i = /^192\..*|localhost/.exec(/*location.hostname*/"");
        "undefined" != typeof FBInstant ? t.exports = n : null != i && (t.exports = n), cc._RF.pop()
    }, {"fbinstant-util": "fbinstant-util"}],
    "invite-friends-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "82ad3P6sClKE56sVBRwCK8X", "invite-friends-dialog");
        var n = e("instant-util"), i = e("number-util"), o = e("analytics-data");
        cc.Class({
            extends: cc.Component,
            properties: {
                task_layout: {default: null, type: cc.Node},
                task_node: {default: null, type: cc.Prefab},
                invite_progress: {default: null, type: cc.ProgressBar},
                progress_label: {default: null, type: cc.RichText},
                gift_toggle: {default: null, type: cc.Toggle},
                tip_label: {default: null, type: cc.Label},
                _allPlayers: null,
                _rewardPlayers: null,
                _listData: [],
                _taskId: null
            },
            onLoad: function () {
                o.invite_friends_info_start_event(), server_util.getActivityList(function (e) {
                    if (o.invite_friends_info_success_event(), e && e[0]) {
                        var t = parseInt(e[0].task_times), a = parseInt(e[0].reward_num), n = e[0].task_id;
                        this.setData(t, a, n), this.task_layout.getComponent("list-adapter").initListView(this.task_node, "task-node", this._listData, this.refreshListView.bind(this))
                    }
                }.bind(this), function (e) {
                    this.setData(0, 0, 0), this.task_layout.getComponent("list-adapter").initListView(this.task_node, "task-node", this._listData, this.refreshListView.bind(this)), e.code && o.invite_friends_info_err_event(e.code)
                }.bind(this)), this.giftAnimate = this.gift_toggle.node.getComponent(cc.Animation), this.setInviterProgress(0)
            },
            setData: function (e, t, a) {
                var n = playerManager.getObjData("inviteRewards"), i = e - t;
                if (n) for (var o = n.length - 1; o < e; o++) {
                    var r = o < i ? 1 : 0;
                    n.push(r)
                } else {
                    (n = []).push(playerManager.getObjData("freeReward") ? 1 : 0);
                    for (var s = 0; s < e; s++) {
                        var c = s < i ? 1 : 0;
                        n.push(c)
                    }
                }
                cc.log("inviteRewards=" + JSON.stringify(n)), playerManager.setObjData("inviteRewards", n), this._listData = [], this._allPlayers = e, this._rewardPlayers = t, this._taskId = a;
                var l = playerManager.getNumData("UnlockLevel") - 4;
                l = 0 <= l ? l : 0;
                var u = playerManager.getObjData("Price" + l);
                cc.log("price=" + u);
                for (var d = 0; d < n.length; d++) 0 == n[d] && this._listData.push({
                    type: d,
                    price: u,
                    taskId: a,
                    canClaim: !0
                });
                var h = e + 1;
                if (this._listData.length < 4) for (var g = this._listData.length; g < 4; g++) this._listData.push({
                    type: h,
                    price: u,
                    taskId: a,
                    canClaim: !1
                }), h++
            },
            refreshListView: function (e) {
                0 < e.type && this._rewardPlayers--, this.setData(this._allPlayers, this._rewardPlayers, this._taskId), this.task_layout.getComponent("list-adapter").refreshListView(this._listData)
            },
            inviteFriendClick: function () {
                if ("undefined" != typeof FBInstant) {
                    o.invite_friends_event();
                    var e = {type: "share", inviter: n.getPlayerID()};
                    n.chooseContext(function () {
                        cc.log("share finish"), o.invite_friends_success_event(), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("Sent! Wait your friends enter game!"), this.setInviterProgress(1)
                    }.bind(this), function (e, t) {
                        cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast(t)
                    }, e)
                } else this.setInviterProgress(1)
            },
            setInviterProgress: function (e) {
                var t = playerManager.getObjData("inviteReceiveTime");
                if (i.isOneDay(t, Date.parse(new Date))) this.invite_progress.progress = 1, this.progress_label.string = "<b><i>8/8</i></b>", this.gift_toggle.isChecked = !1, this.gift_toggle.interactable = !1, this.tip_label.string = "New gift tomorrow!", this.giftAnimate.stop(), playerManager.setNumData("inviteCount", 0); else {
                    var a = playerManager.getNumData("inviteCount");
                    8 < (a += e) && (a = 8), playerManager.setNumData("inviteCount", a), a < 8 ? (this.invite_progress.progress = a / 8, this.progress_label.string = "<b><i>" + a + "/8</i></b>", this.gift_toggle.isChecked = !1, this.gift_toggle.interactable = !1, this.giftAnimate.stop()) : (this.invite_progress.progress = 1, this.progress_label.string = "<b><i>8/8</i></b>", this.gift_toggle.isChecked = !0, this.gift_toggle.interactable = !0, this.giftAnimate.play()), this.tip_label.string = "Earn friendship, win rewards!"
                }
            },
            giftClick: function () {
                var e = playerManager.getNumData("UnlockLevel") - 4;
                e = 0 <= e ? e : 0;
                var t = playerManager.getObjData("Price" + e);
                playerManager.addNumData("Coin", t), playerManager.addNumData("TotalCoin", t), cc.director.emit("updateCoin"), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("+" + i.unit_format(t) + " coins"), playerManager.setObjData("inviteReceiveTime", Date.parse(new Date)), this.setInviterProgress(-8)
            },
            closeClick: function () {
                this.node.removeFromParent(!1)
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    "list-adapter": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "09ba3ffzBVCFoq/4RIrLUTc", "list-adapter"), cc.Class({
            extends: cc.Component,
            properties: {_prefab: null, _scriptName: null, _items: [], _callback: null},
            initListView: function (e, t, a, n) {
                this._prefab = e, this._scriptName = t, this._callback = n, this.node.removeAllChildren(!0), this.createItem(a)
            },
            refreshListView: function (e) {
                this.node.removeAllChildren(!0), this.createItem(e)
            },
            refreshData: function (e, t) {
                this._items[e].getComponent(this._scriptName).refreshData(t)
            },
            addListView: function (e) {
                this.createItem([e])
            },
            removeAllListView: function () {
                this.refreshListView()
            },
            destory: function () {
            },
            setPosition: function (e) {
            },
            createItem: function (e) {
                if (e) {
                    this._items = [];
                    for (var t = 0; t < e.length; t++) {
                        var a = null;
                        (a = cc.instantiate(this._prefab)).parent = this.node, a.getComponent(this._scriptName).setData(e[t], this._callback), this._items.push(a)
                    }
                }
            }
        }), cc._RF.pop()
    }, {}],
    "list-view-dynamic": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "4fcd83fAx1OaKd2LrCBG/dj", "list-view-dynamic"), cc.Class({
            extends: cc.Component,
            properties: {view: cc.Node, list: cc.Node, itemPrefab: cc.Prefab, spacingY: 0},
            onLoad: function () {
                this.data = [], this.rowItemCounts = 0, this.items = [], this.topMax = 0, this.bottomMax = 0, this.lastListY = 0, this.itemHeight = 0
            },
            init: function (e) {
                this.data = e;
                var t, a = cc.instantiate(this.itemPrefab);
                t = a.height, this.itemHeight = t, this.rowItemCounts = Math.ceil(this.view.height / (t + this.spacingY));
                for (var n = 0; n < this.rowItemCounts + 10 && void 0 !== e[n]; ++n) a.getComponent("ItemNode").updateItem(e[n]), a.__itemID = n, this.items.push(a), this.list.addChild(a), a.x = 20, a.y = -(t / 2 + n * (t + this.spacingY)), n < this.rowItemCounts + 9 && (a = cc.instantiate(this.itemPrefab));
                this.list.height = 20 + e.length * t + e.length * this.spacingY, this.topMax = 5 * t + 4 * this.spacingY, this.bottomMax = -(this.view.height + this.topMax), this.lastListY = this.list.y
            },
            update: function () {
                var e = this.list.y > this.lastListY, t = this.items.length, a = this.data.length;
                for (var n in this.items) {
                    var i = this.items[n], o = this.list.convertToWorldSpaceAR(i.position);
                    if (o.y -= this.view.height / 2, o = this.view.convertToNodeSpaceAR(o), e) {
                        if (o.y > this.topMax) {
                            var r = i.__itemID + t;
                            if (a <= r) return;
                            i.__itemID = r, i.y = i.y - t * this.itemHeight - t * this.spacingY, i.getComponent("ItemNode").updateItem(this.data[i.__itemID])
                        }
                    } else if (o.y < this.bottomMax) {
                        var s = i.__itemID - t;
                        if (s < 0) return;
                        i.__itemID = s, i.y = i.y + t * this.itemHeight + t * this.spacingY, i.getComponent("ItemNode").updateItem(this.data[i.__itemID])
                    }
                }
                this.lastListY = this.list.y
            }
        }), cc._RF.pop()
    }, {}],
    "load-animation": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "a3225BHU6RFrKHIMEK2u7nB", "load-animation"), cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function () {
                this.node.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(0, 36), cc.delayTime(.1))))
            },
            start: function () {
            }
        }), cc._RF.pop()
    }, {}],
    loading: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "b99aeZWplBPv5Yv1wF8pKAr", "loading");
        cc.Class({
            extends: cc.Component, properties: {spItem: [cc.Sprite]}, onLoad: function () {
                var e = this;
                this.curCount = 0, this.maxCount = this.spItem.length, this.schedule(function () {
                    e.myupdate()
                }, .05)
            }, myupdate: function (e) {
                for (var t = this, a = 0; a < t.spItem.length; a++) t.spItem[a].node.color = new cc.Color(255, 255, 255);
                t.spItem[t.curCount].node.color = new cc.Color(65, 64, 66), t.curCount++, t.curCount = t.curCount % this.maxCount
            }, onDestroy: function () {
            }
        }), cc._RF.pop()
    }, {}],
    "login-world": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "00686neljhElYHh8Nk8vMdQ", "login-world");
        var r = e("instant-util"), s = e("analytics-data"), n = e("webimg-util"), c = e("number-util"),
            l = e("fbinstant-util");
        e("fish-cfg"), e("playerManager"), cc.Class({
            extends: cc.Component,
            properties: {
                _dialogs: {default: {}},
                rank_dialog_prefab: {default: null, type: cc.Prefab},
                sounds_toggle: {default: null, type: cc.Toggle},
                id_label: {default: null, type: cc.Label},
                alertDlg: {default: null, type: cc.Prefab},
                notification: {default: null, type: cc.Prefab},
                moregameDlg: {default: null, type: cc.Prefab},
                loadDlg: {default: null, type: cc.Prefab},
                recommendIcon: {default: null, type: cc.Sprite}
            },
            onLoad: function () {
                console.log("aaaaaaaaaa",this.node);
                console.log("if判断", 1 == globalManager.firstInLogin);
                cc.log("isBrowser:" + cc.sys.isBrowser);
                var o = this, e = globalManager.isGameInit(globalManager.appid_reg);
                if (cc.log("gameinit:" + e), e) if (1 == globalManager.firstInLogin) {
                    var publicConfig = cc.sys.localStorage.getItem("publicConfig")
                    var t = JSON.parse(publicConfig == "" ? null : publicConfig);
                    t && t.config && (cc.log("load publicConfig from localStorage."), globalManager.publicConfig = t.config, t.config.boxcd && (globalManager.BoxCD = t.config.boxcd), t.config.upgradebuy && (globalManager.UpgradeBuy = t.config.upgradebuy), t.config.upgradebox && (globalManager.UpgradeBox = t.config.upgradebox)), this.dataloading = !0, this.GameSceneload = !1, /*r.startGame(function () {*/
                        this.scheduleOnce(function () {
                            globalManager.fbPlayerId = /*r.getPlayerID()*/"", globalManager.initDT(), s.login_page_event(), playerManager.loadAllData(function (e) {
                                globalManager.isNewPlayer = e;
                                var t = playerManager.getObjData("enableSound");
                                o.sounds_toggle.isChecked = t, s.achieve_level_event(playerManager.getNumData("UnlockLevel")), o.setBotRecall();
                                // var a = r.getEntryPointData();
                                // if (a && a.type && s.player_link_click_event(a.type), a && a.type && "switch_game" == a.type && a.taskId && (s.game_from_uc_event(a.name, a.appid), server_util.switchGame(a.taskId, a.gameId, a.userId)), e) a && a.type && ("switch_game" == a.type ? s.new_player_switch_click_event(a.name) : s.new_player_link_click_event(a.type)), l.canSubscribeBotAsync(function (e) {
                                //     cc.log("canSubscribe-new" + e), e && l.subscribeBotAsync(function () {
                                //         cc.log("subscribeBotAsync-new"), s.subscribe_bot_success_event(), s.subscribe_bot_success_login_event()
                                //     })
                                // }); else {
                                var n = cc.sys.localStorage.getItem("createshortcut");
                                n && c.isOneDay(n, Date.parse(new Date)) || (cc.sys.localStorage.setItem("createshortcut", Date.parse(new Date))/*, r.createShortcut(function () {
                                    s.create_shortcut_event()
                                })*/ /*l.canSubscribeBotAsync(function (e) {
                                    cc.log("canSubscribe-old" + e), e && l.subscribeBotAsync(function () {
                                        cc.log("subscribeBotAsync-old"), s.subscribe_bot_success_event(), s.subscribe_bot_success_login_event()
                                    })
                                })*/)
                                // }
                                if (o.dataloading = !1, 1 == o.GameSceneload && o.closeLoading(), o.playBGMusic(), 1 == globalManager.firstInGame) {
                                    var i = playerManager.getNumData("lastLogin");
                                    1 != c.isOneDay(i, (new Date).getTime()) &&
                                    (playerManager.setNumData("shareOrVideoCounts", 0), playerManager.setNumData("dailyshareGetCount", 0), playerManager.addNumData("playDays", 1), playerManager.setObjData("autoShowDaily", !1), playerManager.setNumData("dailyRewardCan", 0), playerManager.setNumData("mergeTimes", 0), playerManager.setNumData("speedUpTimes", 0)), 0 == i || 1 == c.caculateDays(i, (new Date).getTime()) ? playerManager.getNumData("keepLoginDays") == playerManager.getNumData("keepGotRewards") ? playerManager.addNumData("keepLoginDays", 1) : (playerManager.setNumData("keepLoginDays", 1), playerManager.setNumData("keepGotRewards", 0)) : (1 < c.caculateDays(i, (new Date).getTime()) || c.caculateDays(i, (new Date).getTime()) <= -1) && (playerManager.setNumData("keepLoginDays", 1), playerManager.setNumData("keepGotRewards", 0)), playerManager.setNumData("lastLogin", (new Date).getTime())
                                }
                                console.log("o.dataloading=======", o.dataloading)
                                globalManager.firstInLogin = !1
                                o.startGameClick();
                                /*}), r.requestRewardAd(globalManager.RewardAdId),
                                r.getPlayerInfo(function (e) {
                            var t = e.playerName, a = e.playerId;
                            o.id_label.string = "ID:" + a, server_util.login(t, a, e.photo, function () {
                                r.setLeaderboardScore(playerManager.getScore()), server_util.setLeaderboardScore(playerManager.getScore()), o.saveInviter(), o.getGlobalConfig()
                            })
                                }),
                                s.entry_with_context_event(r.getContextID(), r.getType()), r.getSupportedAPIs().toString().toLowerCase().indexOf("getrewardedvideoasync") <= -1 && (globalManager.canShowReward = !1)*/
                            })
                        }, 0)
                        , cc.director.preloadScene("GameScene", function (e) {
                        console.log("load GameScene success", o.dataloading), o.GameSceneload = !0, 0 == o.dataloading && o.closeLoading()
                    }), this.startGameClick()
                } else {
                    /*this.dataloading = !1, this.GameSceneload = !0, r.requestInterstitialAd(globalManager.InterstitialAdId, function () {
                        o.AdPop()
                    }), */
                    this.id_label.string = "ID:" + r.getPlayerID();
                    var a = playerManager.getObjData("enableSound");
                    o.sounds_toggle.isChecked = a
                }
            },
            start: function () {
                uiManager.seekNodeWithName("jukun_loading_bg", this.node).active = false;
                this.getRecommendConfig()
                console.log("1111", this.node);
                console.log("2222", this.showLoading())
            },
            onDestroy: function () {
                this.stopBGMusic()
            },
            startGameClick: function () {
                console.log("startGameClick========", 0 == this.dataloading, this.GameSceneload)
                0 == this.dataloading && this.GameSceneload ? cc.director.loadScene("GameScene") : this.showLoading(function () {
                    (new Date).getTime();
                    cc.director.loadScene("GameScene")
                })
            },
            shareClick: function () {
                var e = {type: globalManager.shareType.loginShare, inviter: r.getPlayerID(), rewards: "1"};
                s.login_share_event();
                var t = globalManager.getShareConfig(globalManager.shareType.loginShare);
                r.share(function () {
                    cc.log("share success")
                }, t.img, t.text, e)
            },
            AdPop: function () {
                r.showInterstitialAd(function () {
                    r.requestInterstitialAd(globalManager.InterstitialAdId)
                }, function () {
                    cc.log("interstitialAd load err"), r.requestInterstitialAd(globalManager.InterstitialAdId), this.showToast("No available Ad right now, try again later.")
                }.bind(this))
            },
            moreGameClick: function () {
                this.moregamedialog ? (this.moregamedialog.parent = this.node, this.moregamedialog.active = !0) : (this.moregamedialog = cc.instantiate(this.moregameDlg), this.moregamedialog.parent = this.node, this.moregamedialog.getComponent("moregame-dialog").setData(1))
            },
            rankClick: function () {
                this.showPrefabDialog(this.rank_dialog_prefab)
            },
            idClick: function () {
                this.id_label.node.active = !this.id_label.node.active, globalManager.webCopyString(r.getPlayerID())
            },
            resetClick: function () {
            },
            playBGMusic: function () {
            },
            stopBGMusic: function () {
            },
            showPrefabDialog: function (e) {
                null != this._dialogs[e.name] && this._dialogs[e.name].destroy(), cc.supportJit ? (cc.supportJit = !1, this._dialogs[e.name] = cc.instantiate(e), cc.supportJit = !0) : this._dialogs[e.name] = cc.instantiate(e), this._dialogs[e.name].parent = this.node
            },
            showToast: function (e) {
                this.toast && this.toast.removeFromParent(), this.toast = cc.instantiate(this.alertDlg), this.toast.getComponent("toast").setData(e), this.toast.parent = this.node, this.toast.runAction(cc.sequence(cc.delayTime(2), cc.removeSelf(!0))), this.toast.setLocalZOrder(100)
            },
            showNotification: function (e, t) {
                var a = this;
                this.notificationDlg && this.notificationDlg.getComponent("notification").closedlg(), this.notificationDlg = cc.instantiate(this.notification), this.notificationDlg.getComponent("notification").setData(e, t, function () {
                    a.notificationDlg = null
                }), this.notificationDlg.parent = this.node, this.notificationDlg.setLocalZOrder(100)
            },
            closeSound: function () {
                var e = playerManager.getObjData("enableSound");
                playerManager.setObjData("enableSound", !e)
            },
            showLoading: function (e) {
                s.data_loading_event(), this.loadcallback = e, this.loading && this.loading.removeFromParent(!0), this.loading = cc.instantiate(this.loadDlg), this.loading.parent = this.node
            },
            closeLoading: function () {
                this.loading && this.loadcallback && this.loadcallback()
            },
            saveInviter: function () {
                var e = r.getEntryPointData();
                cc.log("ext=" + JSON.stringify(e)), e && e.type && e.inviter && (e.taskId && e.type == globalManager.shareType.catchFish ? server_util.friendHelp(e.inviter, e.taskId, r.getContextID(), function () {
                    s.invite_new_success_event()
                }) : e.type == globalManager.shareType.inviteFriend ? server_util.saveInviter(e.inviter, r.getContextID(), function () {
                    s.invite_new_success_event()
                }) : e.type == globalManager.shareType.inviteNewFriend && server_util.saveInviter(e.inviter, r.getContextID(), function () {
                    s.invite_new_success_event()
                })), e && e.type && "switch_game" == e.type && s.game_switch_form_uc_event(e.name, e.appid)
            },
            getRecommendConfig: function () {
                var e = cc.sys.localStorage.getItem("recommendData");
                e && 0 < (e = JSON.parse(e)).length && (this.recommendData = e[0], n.load_webimg(this.recommendData.img, this.recommendIcon), this.recommendIcon.node.active = !0), server_util.getGameList("2", function (e) {
                    e && e.list && cc.sys.localStorage.setItem("recommendData", JSON.stringify(e.list))
                }.bind(this))
            },
            getGlobalConfig: function () {
                server_util.publicConfig(function (e) {
                    e && e.config && (globalManager.publicConfig = e.config)
                })
            },
            recommendClick: function () {
                if (this.recommendData) {
                    var e = {type: "switch_game", name: "bigfish", level: playerManager.getNumData("UnlockLevel") + 1};
                    s.recommend_icon_click_event(this.recommendData.name), r.switchGameAsync(this.recommendData.app_id, function (e) {
                    }, e)
                }
            },
            setBotRecall: function () {
                // var e = r.getEntryPointData();
                // cc.log("setBotRecall=" + JSON.stringify(e)), e && e.type && "messenger_recall" == e.type && (cc.log("event = bot_recall_" + e.count), s.bot_recall_event(e.count))
            }
        }), cc._RF.pop()
    }, {
        "analytics-data": "analytics-data",
        "fbinstant-util": "fbinstant-util",
        "fish-cfg": "fish-cfg",
        "instant-util": "instant-util",
        "number-util": "number-util",
        playerManager: "playerManager",
        "webimg-util": "webimg-util"
    }],
    luckyspin_reward: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "3ec9aV29l9P8785VLD2/3mj", "luckyspin_reward");
        var o = e("analytics-data"), r = e("instant-util"), s = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                sorrynode: cc.Node,
                congtittlenode: cc.Node,
                sorrytittlenode: cc.Node,
                coinlabel: [cc.Label],
                rewardNode: [cc.Node]
            },
            onLoad: function () {
            },
            setData: function (e, t) {
                cc.log("reward=" + e);
                var a = [0, 0, 1, 1, 3, 3, 2, 2][this.rewardType = e];
                this.farther = t, -1 != e && 0 <= a && a <= this.rewardNode.length - 1 ? (this.coinlabel[a].string = this.getRewardValue(e), this.rewardNode[a].active = !0, this.congtittlenode.active = !0) : -1 == e && (this.sorrynode.active = !0, this.sorrytittlenode.active = !0), this.sharevideoSucc = !1;
                var n = cc.view.getFrameSize(), i = 1 < (i = 1334 * n.width / 750 / n.height) ? 1 : i;
                this.sorrynode.scale = this.sorrynode.scale * i
            },
            getRewardValue: function (e) {
                var t = 0;
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                if (0 <= e && e <= 3) {
                    var a = playerManager.getNumData("UnlockLevel") - 4;
                    a = 0 <= a ? a : 0;
                    fish_data[a];
                    var n = playerManager.getObjData("Price" + a);
                    n = s.galaxyMut(n, [.1, .2, .4, .6][e]), t = "+ " + s.unit_format(n), 0 < globalManager.SpinRewardMuti && (t = t + " x" + globalManager.SpinRewardMuti)
                } else if (4 <= e && e <= 5) {
                    t = "+ " + [100, 200][e - 4], 0 < globalManager.SpinRewardMuti && (t = t + " x" + globalManager.SpinRewardMuti)
                } else if (6 <= e && e <= 7) {
                    t = "x" + [5, 10][e - 6] + " Next reward"
                }
                return cc.log("reward desc=" + t), t
            },
            aquireReward: function () {
                var e = this.rewardType, t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                if (0 <= e && e <= 3) {
                    var a = playerManager.getNumData("UnlockLevel") - 4;
                    a = 0 <= a ? a : 0;
                    fish_data[a];
                    var n = playerManager.getObjData("Price" + a);
                    n = s.galaxyMut(n, [.1, .2, .4, .6][e]), 0 < globalManager.SpinRewardMuti && (n = s.galaxyMut(n, globalManager.SpinRewardMuti)), playerManager.addNumData("Coin", n), playerManager.addNumData("TotalCoin", n), cc.director.emit("updateCoin"), t.startAddCoinEffect(), globalManager.SpinRewardMuti = 0
                } else if (4 <= e && e <= 5) {
                    var i = [100, 200][e - 4];
                    0 < globalManager.SpinRewardMuti && (i *= globalManager.SpinRewardMuti), playerManager.addNumData("Diamond", i), cc.director.emit("updateDiamond"), globalManager.SpinRewardMuti = 0
                } else if (6 <= e && e <= 7) if (1 == this.sharevideoSucc) {
                    var o = [5, 10][e - 6];
                    globalManager.SpinRewardMuti = globalManager.SpinRewardMuti < o ? o : globalManager.SpinRewardMuti
                } else {
                    var r = playerManager.getNumData("Ticket");
                    playerManager.setNumData("Ticket", r + 1)
                }
            },
            OKDialog: function () {
                var t = this;
                if (-1 == this.rewardType) {
                    var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                    if (globalManager.canShare(globalManager.shareType.spinShare, {level: playerManager.getNumData("UnlockLevel")})) {
                        var e = {type: globalManager.shareType.spinShareLack, inviter: r.getPlayerID(), rewards: "1"},
                            n = globalManager.getShareConfig(globalManager.shareType.spinShare);
                        o.spin_share_event(), o.share_spin_click_lack_get_ticket_event(), r.chooseContext(function (e) {
                            o.spin_share_success_event(), o.share_spin_click_lack_get_ticket_success_event(), playerManager.addNumData("Ticket", 5), t.farther.refreshTicket(), playerManager.addNumDataWithoutBig("TicketAdsTimes", -1), t.node.removeFromParent(!1)
                        }, function (e, t) {
                            null != t && a.showToast(t)
                        }.bind(t), e, n.text, n.img)
                    } else o.watch_video_event(), o.watch_video_spin_click_lack_get_ticket_event(), r.showRewardAd(function () {
                        cc.log("showAd success"), o.watch_video_success_event(), o.watch_video_spin_click_lack_get_ticket_success_event(), playerManager.addNumData("Ticket", 5), t.farther.refreshTicket(), playerManager.addNumDataWithoutBig("TicketAdsTimes", -1), t.node.removeFromParent(!1)
                    }, function () {
                        cc.log("RewardAd load err"), 1 == globalManager.canShowReward ? a.showToast("No available Ad right now, try again later.") : a.showToast("The web page does not currently support ads.")
                    })
                } else if (6 <= this.rewardType && this.rewardType <= 7) if (globalManager.canShare(globalManager.shareType.rewardMuti, {level: playerManager.getNumData("UnlockLevel")})) {
                    e = {type: "spinShare5", inviter: r.getPlayerID(), rewards: "1"};
                    var i = globalManager.getShareConfig(globalManager.shareType.rewardMuti);
                    6 == t.rewardType ? o.share_5times_click_event() : 7 == t.rewardType && (o.share_10times_click_event(), e = {
                        type: "spinShare10",
                        inviter: r.getPlayerID(),
                        rewards: "1"
                    }), r.chooseContext(function (e) {
                        6 == t.rewardType ? o.share_5times_click_success_event() : 7 == t.rewardType && o.share_10times_click_success_event(), t.sharevideoSucc = !0, t.aquireReward(), t.node.removeFromParent(!1)
                    }, function (e, t) {
                        cc.log("msg========== " + t), a.showToast(t)
                    }.bind(t), e, i.text, i.img)
                } else 6 == t.rewardType ? o.watch_video_5times_click_event() : 7 == t.rewardType && o.watch_video_10times_click_event(), r.showRewardAd(function () {
                    cc.log("showAd success"), 6 == t.rewardType ? o.watch_video_5times_click_success_event() : 7 == t.rewardType && o.watch_video_10times_click_success_event(), t.sharevideoSucc = !0, t.aquireReward(), t.node.removeFromParent(!1)
                }, function () {
                    cc.log("RewardAd load err"), 1 == globalManager.canShowReward ? a.showToast("No available Ad right now, try again later.") : a.showToast("The web page does not currently support ads.")
                }); else this.aquireReward(), this.node.removeFromParent(!1)
            },
            closeDialog: function () {
                this.aquireReward(), this.node.removeFromParent(!1)
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    luckyspin: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "509407AHU9DAKIFpR5wVjst", "luckyspin");
        var r = e("analytics-data"), s = e("instant-util");
        e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                spinrewardPre: cc.Prefab,
                ticketBtnNode: cc.Node,
                ticketSpNode: cc.Node,
                ticketLabel: cc.Label,
                spinBtn: cc.Button,
                spinNode: cc.Node
            },
            onLoad: function () {
                this.spinEnable = !1, this.spinNode.rotation = globalManager.spinRotation, this.setData()
            },
            setData: function () {
                this.refreshTicket(), this.refreshTicketBtn()
            },
            refreshTicket: function () {
                this.ticketLabel.string = "x" + playerManager.getNumData("Ticket"), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").checkLuckySpin()
            },
            refreshTicketBtn: function () {
            },
            startSpin: function () {
                if (1 != this.spinEnable) {
                    this.spinEnable = !0;
                    var e = playerManager.getNumData("Ticket");
                    0 < e ? (playerManager.setNumData("Ticket", e - 1), this.refreshTicket(), this.startSpinAnim(), r.spin_click_event()) : (this.showNoTicket(), r.spin_click_lack_event())
                }
            },
            startSpinAnim: function () {
                var e = this;
                this.rewarddata = gameData.getSpinReward(), this.spinNode.rotation = 157.5;
                var t = cc.sequence(cc.rotateBy(3, -2160 - 45 * this.rewarddata.index).easing(cc.easeSineOut()), cc.callFunc(function () {
                    e.showSpinReward(e.rewarddata.type), cc.log("reward index=" + e.rewarddata.index + ";spinNode rotation=" + e.spinNode.rotation)
                }, e));
                this.spinNode.runAction(t), globalManager.spinRotation = 157.5 - 45 * this.rewarddata.index
            },
            showSpinReward: function (e) {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").playSound("congratulations");
                var t = cc.instantiate(this.spinrewardPre);
                t.parent = this.node, t.getComponent("luckyspin_reward").setData(e, this), this.spinEnable = !1
            },
            showNoTicket: function () {
                var e = cc.instantiate(this.spinrewardPre);
                e.parent = this.node, e.getComponent("luckyspin_reward").setData(-1, this), this.spinEnable = !1
            },
            onButtonShare: function (e, t) {
                var a = this, n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                if (globalManager.canShare(globalManager.shareType.spinShare, {level: playerManager.getNumData("UnlockLevel")})) {
                    var i = {type: globalManager.shareType.spinShare, inviter: s.getPlayerID(), rewards: "1"},
                        o = globalManager.getShareConfig(globalManager.shareType.spinShare);
                    r.spin_share_event(), r.share_spin_get_ticket_event(), s.chooseContext(function (e) {
                        r.spin_share_success_event(), r.share_spin_get_ticket_success_event(), playerManager.addNumData("Ticket", 5), a.refreshTicket(), playerManager.addNumDataWithoutBig("TicketAdsTimes", -1), a.refreshTicketBtn()
                    }, function (e, t) {
                        null != t && n.showToast(t)
                    }.bind(a), i, o.text, o.img)
                } else r.watch_video_event(), r.watch_video_spin_get_ticket_event(), s.showRewardAd(function () {
                    cc.log("showAd success"), r.watch_video_success_event(), r.watch_video_spin_get_ticket_success_event(), playerManager.addNumData("Ticket", 5), a.refreshTicket(), playerManager.addNumDataWithoutBig("TicketAdsTimes", -1), a.refreshTicketBtn()
                }, function () {
                    cc.log("RewardAd load err"), s.requestRewardAd(globalManager.RewardAdId), 1 == globalManager.canShowReward ? n.showToast("No available Ad right now, try again later.") : n.showToast("The web page does not currently support ads.")
                })
            },
            closeDialog: function () {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").closeLuckySpinPopUp()
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    md5: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "abc2bn/pSlFVoNN3OWIKKno", "md5");
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        cc.MD5 = function (e) {
            function g(e, t, a) {
                return e & t | ~e & a
            }

            function p(e, t, a) {
                return a & e | ~a & t
            }

            function f(e, t, a) {
                return e ^ t ^ a
            }

            function m(e, t, a) {
                return t ^ (e | ~a)
            }

            function v(e, t) {
                return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]
            }

            function n(e) {
                for (var t = [], a = 0; a < e.length; a++) if (e.charCodeAt(a) <= 127) t.push(e.charCodeAt(a)); else for (var n = encodeURIComponent(e.charAt(a)).substr(1).split("%"), i = 0; i < n.length; i++) t.push(parseInt(n[i], 16));
                return t
            }

            function t(e) {
                for (var t = new Array(e.length), a = 0; a < e.length; a++) t[a] = e[a];
                return t
            }

            var y = null, a = null;

            function _(e, t) {
                return 4294967295 & e + t
            }

            return "string" == typeof e ? y = n(e) : e.constructor == Array ? 0 === e.length ? y = e : "string" == typeof e[0] ? y = function (e) {
                for (var t = [], a = 0; a < e.length; a++) t = t.concat(n(e[a]));
                return t
            }(e) : "number" == typeof e[0] ? y = e : a = i(e[0]) : "undefined" != typeof ArrayBuffer ? e instanceof ArrayBuffer ? y = t(new Uint8Array(e)) : e instanceof Uint8Array || e instanceof Int8Array ? y = t(e) : e instanceof Uint32Array || e instanceof Int32Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Float32Array || e instanceof Float64Array ? y = t(new Uint8Array(e.buffer)) : a = void 0 === e ? "undefined" : i(e) : a = void 0 === e ? "undefined" : i(e), a && alert("MD5 type mismatch, cannot process " + a), function () {
                function e(e, t, a, n) {
                    var i, o, r = d;
                    d = u, l = _(u = l, (i = _(c, _(e, _(t, a)))) << (o = n) & 4294967295 | i >>> 32 - o), c = r
                }

                var t = y.length;
                y.push(128);
                var a = y.length % 64;
                if (56 < a) {
                    for (var n = 0; n < 64 - a; n++) y.push(0);
                    a = y.length % 64
                }
                for (n = 0; n < 56 - a; n++) y.push(0);
                y = y.concat(function (e) {
                    for (var t = [], a = 0; a < 8; a++) t.push(255 & e), e >>>= 8;
                    return t
                }(8 * t));
                var i = 1732584193, o = 4023233417, r = 2562383102, s = 271733878, c = 0, l = 0, u = 0, d = 0;
                for (n = 0; n < y.length / 64; n++) {
                    c = i;
                    var h = 64 * n;
                    e(g(l = o, u = r, d = s), 3614090360, v(y, h), 7), e(g(l, u, d), 3905402710, v(y, h + 4), 12), e(g(l, u, d), 606105819, v(y, h + 8), 17), e(g(l, u, d), 3250441966, v(y, h + 12), 22), e(g(l, u, d), 4118548399, v(y, h + 16), 7), e(g(l, u, d), 1200080426, v(y, h + 20), 12), e(g(l, u, d), 2821735955, v(y, h + 24), 17), e(g(l, u, d), 4249261313, v(y, h + 28), 22), e(g(l, u, d), 1770035416, v(y, h + 32), 7), e(g(l, u, d), 2336552879, v(y, h + 36), 12), e(g(l, u, d), 4294925233, v(y, h + 40), 17), e(g(l, u, d), 2304563134, v(y, h + 44), 22), e(g(l, u, d), 1804603682, v(y, h + 48), 7), e(g(l, u, d), 4254626195, v(y, h + 52), 12), e(g(l, u, d), 2792965006, v(y, h + 56), 17), e(g(l, u, d), 1236535329, v(y, h + 60), 22), e(p(l, u, d), 4129170786, v(y, h + 4), 5), e(p(l, u, d), 3225465664, v(y, h + 24), 9), e(p(l, u, d), 643717713, v(y, h + 44), 14), e(p(l, u, d), 3921069994, v(y, h), 20), e(p(l, u, d), 3593408605, v(y, h + 20), 5), e(p(l, u, d), 38016083, v(y, h + 40), 9), e(p(l, u, d), 3634488961, v(y, h + 60), 14), e(p(l, u, d), 3889429448, v(y, h + 16), 20), e(p(l, u, d), 568446438, v(y, h + 36), 5), e(p(l, u, d), 3275163606, v(y, h + 56), 9), e(p(l, u, d), 4107603335, v(y, h + 12), 14), e(p(l, u, d), 1163531501, v(y, h + 32), 20), e(p(l, u, d), 2850285829, v(y, h + 52), 5), e(p(l, u, d), 4243563512, v(y, h + 8), 9), e(p(l, u, d), 1735328473, v(y, h + 28), 14), e(p(l, u, d), 2368359562, v(y, h + 48), 20), e(f(l, u, d), 4294588738, v(y, h + 20), 4), e(f(l, u, d), 2272392833, v(y, h + 32), 11), e(f(l, u, d), 1839030562, v(y, h + 44), 16), e(f(l, u, d), 4259657740, v(y, h + 56), 23), e(f(l, u, d), 2763975236, v(y, h + 4), 4), e(f(l, u, d), 1272893353, v(y, h + 16), 11), e(f(l, u, d), 4139469664, v(y, h + 28), 16), e(f(l, u, d), 3200236656, v(y, h + 40), 23), e(f(l, u, d), 681279174, v(y, h + 52), 4), e(f(l, u, d), 3936430074, v(y, h), 11), e(f(l, u, d), 3572445317, v(y, h + 12), 16), e(f(l, u, d), 76029189, v(y, h + 24), 23), e(f(l, u, d), 3654602809, v(y, h + 36), 4), e(f(l, u, d), 3873151461, v(y, h + 48), 11), e(f(l, u, d), 530742520, v(y, h + 60), 16), e(f(l, u, d), 3299628645, v(y, h + 8), 23), e(m(l, u, d), 4096336452, v(y, h), 6), e(m(l, u, d), 1126891415, v(y, h + 28), 10), e(m(l, u, d), 2878612391, v(y, h + 56), 15), e(m(l, u, d), 4237533241, v(y, h + 20), 21), e(m(l, u, d), 1700485571, v(y, h + 48), 6), e(m(l, u, d), 2399980690, v(y, h + 12), 10), e(m(l, u, d), 4293915773, v(y, h + 40), 15), e(m(l, u, d), 2240044497, v(y, h + 4), 21), e(m(l, u, d), 1873313359, v(y, h + 32), 6), e(m(l, u, d), 4264355552, v(y, h + 60), 10), e(m(l, u, d), 2734768916, v(y, h + 24), 15), e(m(l, u, d), 1309151649, v(y, h + 52), 21), e(m(l, u, d), 4149444226, v(y, h + 16), 6), e(m(l, u, d), 3174756917, v(y, h + 44), 10), e(m(l, u, d), 718787259, v(y, h + 8), 15), e(m(l, u, d), 3951481745, v(y, h + 36), 21), i = _(i, c), o = _(o, l), r = _(r, u), s = _(s, d)
                }
                return function (e, t, a, n) {
                    for (var i, o = "", r = 0, s = 0, c = 3; 0 <= c; c--) r = 255 & (s = arguments[c]), r <<= 8, r |= 255 & (s >>>= 8), r <<= 8, r |= 255 & (s >>>= 8), r <<= 8, o += (i = ((r |= s >>>= 8) >>> 0).toString(16), "00000000".substr(0, 8 - i.length) + i);
                    return o
                }(s, r, o, i).toUpperCase()
            }()
        }, cc._RF.pop()
    }, {}],
    "moregame-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "a7548VpoGZDiJZDWrB0E4zC", "moregame-dialog");
        cc.Class({
            extends: cc.Component,
            properties: {
                desc_label: {default: null, type: cc.Label},
                list_layout: {default: null, type: cc.Node},
                item_prefab: {default: null, type: cc.Prefab}
            },
            onLoad: function () {
            },
            onDestroy: function () {
            },
            setData: function (e) {
                1 == e ? (this.setListData(globalManager.gamelist), this.desc_label.string = "Here is the passport to other amazing games.\nTry now!") : 2 == e && (this.setListData(globalManager.gameListInGame), this.desc_label.string = "Congratulations! You are on the top of Big Fish!\nI believe you do have the talent in other games.\nTry now!")
            },
            setListData: function (e) {
                this.list_layout.getComponent("list-adapter").removeAllListView();
                for (var t = [], a = 0; a < e.length; a++) {
                    var n = e[a];
                    t.push({gamename: n.name, appid: n.app_id, iconurl: n.img})
                }
                this.list_layout.getComponent("list-adapter").initListView(this.item_prefab, "moregame-item", t)
            },
            closeDialog: function () {
                this.node.active = !1
            }
        }), cc._RF.pop()
    }, {}],
    "moregame-item": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "a018dIb+I9AP4G7IPM5dP/L", "moregame-item");
        var n = e("analytics-data"), i = e("instant-util"), o = e("webimg-util");
        cc.Class({
            extends: cc.Component,
            properties: {img_icon: cc.Sprite, name_label: cc.Label, play_btn: cc.Button},
            setData: function (e, t) {
                this.mydata = e, this.name_label.string = e.gamename, o.load_webimg(e.iconurl, this.img_icon)
            },
            buyClick: function () {
                var e = {type: "switch_game", name: "tobeemperor", level: playerManager.getNumData("UnlockLevel") + 1};
                n.switchgameasync_event(this.mydata.gamename), i.switchGameAsync(this.mydata.appid, function (e) {
                }, e)
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "webimg-util": "webimg-util"}],
    "native-util": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "76075+izWdG951U8gWf8cLW", "native-util");
        var n = e("PlatformSdk"), i = e("UserInterface");
        t.exports = {
            init: function () {
                n.setListener(this.callback.bind(this)), n.init()
            }, fbLogin: function () {
                i.login()
            }, callback: function (e, t) {
                e
            }
        }, cc._RF.pop()
    }, {PlatformSdk: "PlatformSdk", UserInterface: "UserInterface"}],
    "no-coin-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "7e1c9cTNZtJEIcwArcarMD0", "no-coin-dialog");
        var l = e("number-util"), u = e("instant-util"), i = e("analytics-data");
        cc.Class({
            extends: cc.Component,
            properties: {
                add_coint_label: {default: null, type: cc.Label},
                greyIcon: cc.Sprite,
                shareBtn: cc.Node,
                videoBtn: cc.Node
            },
            onLoad: function () {
                var e = playerManager.getNumData("UnlockLevel") - 7;
                e = 0 <= e ? e : 0, cc.log("unlockFishbegin=" + e);
                var t = playerManager.getNumData("UnlockLevel") - 4;
                t = 0 <= t ? t : 0, cc.log("unlockFish=" + t);
                for (var a = playerManager.getObjData("Price" + e), n = e, i = Math.pow(2, n), o = l.galaxyDiv(a, i), r = e + 1; r <= t; r++) {
                    a = playerManager.getObjData("Price" + r), i = Math.pow(2, r);
                    var s = l.galaxyDiv(a, i);
                    l.cmpBigInt(s, o) < 0 && (o = s, n = r)
                }
                t = n, this.rewardPrice = playerManager.getObjData("Price" + t);
                var c = l.unit_format(playerManager.getObjData("Price" + t));
                this.add_coint_label.string = "+" + c, this.setWatchVideoEnable(!0), this.shareBtn.active = !1, this.videoBtn.active = !1, globalManager.canShare(globalManager.shareType.NoCoinShare, {
                    level: playerManager.getNumData("UnlockLevel"),
                    isFirst: globalManager.isNewPlayer
                }) ? (this.shareBtn.active = !0, this.videoBtn.active = !0) : (this.videoBtn.active = !0, this.videoBtn.x = 0), "WEB" === u.getPlatform() && (this.videoBtn.getComponent(cc.Button).interactable = !1, this.greyIcon.node.active = !0)
            },
            closeWatchVideoDialog: function () {
                this.node.destroy()
            },
            watchVideo: function () {
                var t = this;
                i.watch_video_get_coin_event();
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                u.showRewardAd(function () {
                    cc.log("showAd success"), i.watch_video_get_coin_success_event();
                    var e = t.rewardPrice;
                    a.showCoinGotPopUp(l.unit_format(e)), playerManager.addNumData("Coin", e), playerManager.addNumData("TotalCoin", e), cc.director.emit("updateCoin"), t.closeWatchVideoDialog()
                }, function () {
                    cc.log("RewardAd load err"), 1 == globalManager.canShowReward ? a.showToast("No available Ad right now, try again later.") : a.showToast("The web page does not currently support ads."), t.closeWatchVideoDialog()
                })
            },
            shareTo: function () {
                var t = this;
                i.share_get_coin_event();
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"),
                    e = {type: globalManager.shareType.NoCoinShare, inviter: u.getPlayerID(), rewards: "1"},
                    n = globalManager.getShareConfig(globalManager.shareType.NoCoinShare);
                u.chooseContext(function () {
                    i.share_get_coin_success_event();
                    var e = t.rewardPrice;
                    a.showCoinGotPopUp(l.unit_format(e)), playerManager.addNumData("Coin", e), playerManager.addNumData("TotalCoin", e), cc.director.emit("updateCoin"), cc.log("got coin success~~~"), t.closeWatchVideoDialog()
                }, function (e, t) {
                    i.share_offline_coin_fail_event(e), a.showToast(t)
                }, e, n.text, n.img)
            },
            setWatchVideoEnable: function (e) {
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    notification: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "a5abbAhswJEZaNVWhA9tuob", "notification");
        cc.Class({
            extends: cc.Component,
            properties: {bg_layout: {default: null, type: cc.Node}, text_label: {default: null, type: cc.Label}},
            onLoad: function () {
            },
            start: function () {
            },
            setData: function (e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 5, a = arguments[2], n = this;
                this.text_label.string = e, this.callback = a, n.playAnim(!1), this.node.runAction(cc.sequence(cc.delayTime(t), cc.callFunc(function () {
                    n.closedlg()
                }, n)))
            },
            playAnim: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                    t = this.node.getComponent(cc.Animation);
                1 == e ? t.play("notification1_anim", 0) : t.play("notification_anim", 0)
            },
            closedlg: function () {
                var e = this;
                this.playAnim(!0), this.node.runAction(cc.sequence(cc.delayTime(.35), cc.callFunc(function () {
                    e.callback && e.callback()
                }, e), cc.removeSelf()))
            }
        }), cc._RF.pop()
    }, {}],
    "number-util": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "02fafbsqUREbJv8xzpAbqxZ", "number-util");
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, r = {};

        function y(e, t) {
            var a = [e, t];
            if (e.length < t.length) return a[0] = t, a[1] = e, a[2] = "not", a;
            if (e.length == t.length) for (var n = 0; n < e.length; n++) {
                if (a[0][n] > a[1][n]) return a[0] = e, a[1] = t, a;
                if (a[0][n] < a[1][n]) return a[0] = t, a[1] = e, a[2] = "not", a;
                if (n == e.length - 1) return a
            }
            return e.length > t.length ? a : void 0
        }

        function _(e) {
            if (0 == e) return e = 0;
            for (var t = (e = e.split("")).length, a = 0; a < t && 0 == e[0]; a++) e.splice(0, 1);
            return e
        }

        for (var i = ["", "K", "M", "B", "T"], n = 0; n < 2; n++) for (var s = 0; s < 26; s++) i.push(String.fromCharCode(65 + n) + String.fromCharCode(65 + s));
        t.exports = {
            unit_format: function (e) {
                var t = "";
                if (6 < (e = e.toString()).length) {
                    var a = parseInt(e.length / 3), n = e.length % 3;
                    t = i[a -= 0 == n ? 2 : 1], e = e.substr(0, e.length - 3 * a)
                }
                return this.number_format(e, 0, ",") + t
            }, number_format: function (e, t, a) {
                e = (e + "").replace(/[^0-9+-Ee.]/g, "");
                var n, i, o, r = isFinite(+e) ? +e : 0, s = isFinite(+t) ? Math.abs(t) : 0, c = void 0 === a ? "," : a,
                    l = "";
                l = (s ? (n = r, i = s, o = Math.pow(10, i), "" + Math.ceil(n * o) / o) : "" + Math.round(r)).split(".");
                for (var u = /(-?\d+)(\d{3})/; u.test(l[0]);) l[0] = l[0].replace(u, "$1" + c + "$2");
                return (l[1] || "").length < s && (l[1] = l[1] || "", l[1] += new Array(s - l[1].length + 1).join("0")), l.join(".")
            }, setNumberLength: function (e, t) {
                for (e = e.toString(); e.length < t;) e = "0" + e;
                return e
            }, time_format: function (e) {
                var t = this.setNumberLength(Math.floor(e / 3600), 2);
                return e %= 3600, t + ":" + this.setNumberLength(Math.floor(e / 60), 2) + ":" + this.setNumberLength(e % 60, 2)
            }, sortByType: function (e, t) {
                var i;
                return e.sort((i = t, function (e, t) {
                    var a, n;
                    if ("object" === (void 0 === e ? "undefined" : o(e)) && "object" === (void 0 === t ? "undefined" : o(t)) && e && t) return (a = e[i]) === (n = t[i]) ? 0 : (void 0 === a ? "undefined" : o(a)) === (void 0 === n ? "undefined" : o(n)) ? a < n ? -1 : 1 : (void 0 === a ? "undefined" : o(a)) < (void 0 === n ? "undefined" : o(n)) ? -1 : 1;
                    throw"error"
                }))
            }, countTime: function (e, t) {
                var a = setInterval(function () {
                    0 <= e ? (t(e), e--) : (cc.log("stop Interval=" + a), clearInterval(a))
                }.bind(this), 1e3);
                return a
            }, clearInterval: function (t) {
                function e(e) {
                    return t.apply(this, arguments)
                }

                return e.toString = function () {
                    return t.toString()
                }, e
            }(function (e) {
                cc.log("clearInterval=" + e), clearInterval(e)
            }), playerdataCountDown: function (t, e, a) {
                var n = this;

                function i() {
                    r[t] = window.setTimeout(function (e) {
                        playerManager.setNumData(t, playerManager.getNumData(t) - 1), a && a(playerManager.getNumData(t)), 0 < playerManager.getNumData(t) ? i() : r[t] = null
                    }.bind(n), 1e3 * e)
                }

                null == r[t] || this.playerdataCountDownClear(t), i()
            }, playerdataCountDownClear: function (e) {
                null != r[e] && (window.clearTimeout(r[e]), r[e] = null)
            }, isOneDay: function (e, t) {
                if (e && t) {
                    var a = new Date(parseInt(e)), n = new Date(parseInt(t));
                    if (a.getFullYear() == n.getFullYear() && a.getMonth() == n.getMonth() && a.getDate() == n.getDate()) return !0
                }
                return !1
            }, caculateDays: function (e, t) {
                if (e && t) {
                    var a = Math.floor(e / 864e5);
                    return Math.floor(t / 864e5) - a
                }
                return 0
            }, randomNum: function (e, t) {
                switch (arguments.length) {
                    case 1:
                        return parseInt(Math.random() * e + 1, 10);
                    case 2:
                        return parseInt(Math.random() * (t - e + 1) + e, 10);
                    default:
                        return 0
                }
            }, galaxyAdd: function (e, t) {
                var a, n = [String(e), String(t)], i = [];
                (n = y(n[0], n[1]))[0] = n[0].split(""), n[1] = n[1].split(""), n[0].length != n[1].length && (a = new Array(n[0].length - n[1].length + 1).join("0"), n[1] = a.split("").concat(n[1]));
                for (var o = 0, r = n[0].length - 1; 0 <= r; r--) {
                    var s = Number(n[0][r]) + Number(n[1][r]) + o;
                    i.unshift(s % 10), o = Math.floor(s / 10), 0 == r && 0 != o && i.unshift(o)
                }
                return i.join("")
            }, galaxySub: function (e, t) {
                var a, n = [String(e), String(t)], i = [];
                if (3 == (n = y(n[0], n[1])).length) return !1;
                n[0] = n[0].split(""), n[1] = n[1].split(""), n[0].length != n[1].length && (a = new Array(n[0].length - n[1].length + 1).join("0"), n[1] = a.split("").concat(n[1]));
                for (var o = 0, r = n[0].length - 1; 0 <= r; r--) {
                    var s = Number(n[0][r]) - Number(n[1][r]) - o;
                    s < (o = 0) && (s += 10, o = 1), i.unshift(s % 10)
                }
                var c = i.join("");
                0 == c[0] && (c = _(c));
                for (var l = "", u = 0; u < c.length; u++) l += "" + c[u];
                return "" == l && (l = "0"), l
            }, galaxyMut: function (e, t) {
                var a,
                    n = "number" == typeof (a = t) ? null != a.toString().split(".")[1] ? a.toString().split(".")[1].length : 0 : "string" == typeof a ? null != a.split(".")[1] ? a.split(".")[1].length : 0 : void 0;
                0 < n && (t = String(t).replace(".", ""));
                var i = [String(e), String(t)], o = [];
                if ((i = y(i[0], i[1]))[0] = i[0].split(""), i[1] = i[1].split(""), -1 != i[0].indexOf("N") || -1 != i[1].indexOf("N")) return e;
                for (var r = i[1].length - 1; 0 <= r; r--) {
                    for (var s, c = 0, l = [], u = i[0].length - 1; 0 <= u; u--) {
                        var d = Number(i[0][u]) * Number(i[1][r]) + c;
                        l.unshift(d % 10), c = Math.floor(d / 10), 0 == u && 0 != c && l.unshift(c)
                    }
                    s = new Array(i[1].length - (r + 1) + 1).join("0"), l.push(s), o[r] = l.join("")
                }
                for (var h = o.length, g = 1; g < h; g++) {
                    var p = this.galaxyAdd(o[0], o[1]);
                    o.splice(0, 2, p)
                }
                var f = o.join("");
                0 == f[0] && (f = _(f));
                for (var m = "", v = 0; v < f.length - n; v++) 0 <= parseInt(f[v]) && (m += "" + f[v]);
                return "" == m && (m = "0"), m
            }, galaxyDiv: function (e, t) {
                e = String(e), t = String(t);
                for (var a = e.length, n = (t.length, 0), i = 0, o = [], r = 0, s = 0; s < a; s++) (r = 10 * i + parseInt(e[s])) < t ? (i = r, o.push(0)) : (n = parseInt(r / t), i = r % t, o.push(n));
                var c = o.join("").replace(/\b(0+)/gi, "");
                return "" == c && (c = "0"), c
            }, cmpBigInt: function (e, t) {
                if (e = String(e), t = String(t), e.length > t.length) return 1;
                if (e.length < t.length) return -1;
                for (var a = 0; a < e.length; a++) {
                    if (e[a] > t[a]) return 1;
                    if (e[a] < t[a]) return -1
                }
                return 0
            }, compare: function (e, t) {
                return 0 <= this.cmpBigInt(e, t)
            }, format: function (e, t) {
                if (e && "object" == (void 0 === t ? "undefined" : o(t))) for (var a in t) if (null != t[a]) {
                    var n = new RegExp("({" + a + "})", "g");
                    e = e.replace(n, t[a])
                }
                return e
            }, makeArrayRandom: function (e, t) {
                null == t && (t = e.length);
                var a = e.slice(0, t);
                return a.sort(function () {
                    return Math.random() - .5
                }), a
            }
        }, cc._RF.pop()
    }, {}],
    playerManager: [function (e, c, t) {
        "use strict";
        cc._RF.push(c, "f8b1f3zdNlF9aBhUGRcZzQm", "playerManager");
        var h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, g = e("analytics-data"), p = e("fbinstant-util"), l = e("number-util");
        e("server-util"), function () {
            if (window.playerManager) c.exports = window.playerManager; else {
                for (var u = u || {}, d = {
                    firstLogin: !0,
                    lastLogin: 0,
                    lookTutorial: !0,
                    animTutorial: !0,
                    animTutorialRecycle: !0,
                    enableSound: !0,
                    Coin: "4000",
                    TotalCoin: "0",
                    Diamond: 0,
                    UnlockLevel: 0,
                    Ticket: 0,
                    TicketAdsTimes: 0,
                    playDays: 0,
                    dailyReward: 0,
                    dailyRewardCan: 0,
                    ADTime: 0,
                    ADTimeCD: 0,
                    AcelTimeCD: 0,
                    AcelTime: 0,
                    ShareTimeCD: 0,
                    FreeHouseTime: 0,
                    ShareTime: 0,
                    lastOffline: -1,
                    sharedContextIds: {},
                    getCoinTime: 0,
                    getFreeTime: 0,
                    freeReward: !1,
                    inviteRewards: {},
                    inviteCount: 0,
                    inviteReceiveTime: 0,
                    dailyshareCount: 0,
                    dailyshareGetCount: 0,
                    dailyTask: {taskTime: 0, taskProgress: []},
                    dailyPoint: {point: 0, rewardState: []},
                    messageRewardIds: [],
                    shareLinkRewardIds: [],
                    catchFish: {},
                    shareOrVideoCounts: 0,
                    autoShowDaily: !1,
                    keepLoginDays: 0,
                    keepGotRewards: 0,
                    mergeTimes: 0,
                    speedUpTimes: 0,
                    taskInviteNewOnes: 0,
                    taskClickNewOnes: 0,
                    taskSaveHeros: 0
                }, e = 0; e < fish_data.length; e++) d["Price" + e] = fish_data[e].price + "";
                for (e = 0; e < fish_data.length; e++) d["PriceDiamond" + e] = fish_data[e].pricediam + "";
                for (e = 0; e < 16; e++) d["Panel" + e] = {level: -1, state: 0, price: "0"};
                var t = {
                    firstLogin: !0,
                    lastLogin: 0,
                    lookTutorial: !0,
                    animTutorial: !0,
                    animTutorialRecycle: !0,
                    enableSound: !0,
                    Coin: "4000",
                    TotalCoin: "0",
                    Diamond: 0,
                    UnlockLevel: 0,
                    Ticket: 0,
                    TicketAdsTimes: 0,
                    playDays: 0,
                    dailyReward: 0,
                    dailyRewardCan: 0,
                    ADTime: 0,
                    ADTimeCD: 0,
                    AcelTimeCD: 0,
                    AcelTime: 0,
                    ShareTime: 0,
                    ShareTimeCD: 0,
                    FreeHouseTime: 0,
                    lastOffline: -1,
                    sharedContextIds: {},
                    getCoinTime: 0,
                    getFreeTime: 0,
                    freeReward: !1,
                    inviteRewards: null,
                    inviteCount: 0,
                    inviteReceiveTime: 0,
                    dailyshareCount: 0,
                    dailyshareGetCount: 0,
                    dailyTask: {taskTime: 0, taskProgress: []},
                    dailyPoint: {point: 0, rewardState: []},
                    messageRewardIds: [],
                    shareLinkRewardIds: [],
                    catchFish: {},
                    shareOrVideoCounts: 0,
                    autoShowDaily: !1,
                    keepLoginDays: 0,
                    keepGotRewards: 0,
                    mergeTimes: 0,
                    speedUpTimes: 0,
                    taskInviteNewOnes: 0,
                    taskClickNewOnes: 0,
                    taskSaveHeros: 0
                };
                for (e = 0; e < fish_data.length; e++) t["Price" + e] = fish_data[e].price + "";
                for (e = 0; e < fish_data.length; e++) t["PriceDiamond" + e] = fish_data[e].pricediam + "";
                for (e = 0; e < 16; e++) t["Panel" + e] = {level: -1, state: 0, price: "0"};
                /^192\..*|localhost/.exec(/*location.hostname*/"") && (t.animTutorial = !1, t.Coin = "100", t.UnlockLevel = 6, t.dailyshareGetCount = 3, t.lastLogin = (new Date).getTime()), u.playerData = t;
                var r = Math.round(1e10 * Math.random()).toString(), s = {Coin: !0, UnlockLevel: !0};
                for (var a in u.playerData) if (1 == s[a]) if ("number" == typeof d[a]) {
                    var n = globalManager.encrypt("" + u.playerData[a], r);
                    u.playerData[a] = n
                } else {
                    var i = u.playerData[a];
                    if ("object" == h(d[a])) {
                        var o = JSON.stringify(i);
                        i = globalManager.encrypt(o, r)
                    } else i = globalManager.encrypt("" + i, r);
                    u.playerData[a] = i
                }
                u.coinEnough = function (e) {
                    if (l.compare(u.getObjData("Coin"), e)) return !0;
                    var t = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                    return t.noCoinDlg && (t.showNoCoinDialog(), t.showToast("Insufficient coins")), !1
                }, u.diamondEnough = function (e) {
                    return !!l.compare(u.getObjData("Diamond"), e)
                }, u.setNumData = function (e, t) {
                    var a = t;
                    null != t && "null" != t || (a = d[e]), 1 == s[e] && (a = globalManager.encrypt("" + t, r)), u.playerData[e] = a;
                    var n = {};
                    n[e] = t + "", n[e + "savetime"] = (new Date).getTime() + "", /*p.setData(n),*/ globalManager.saveLocalData(e, n[e]), globalManager.saveLocalData(e + "savetime", n[e + "savetime"]), server_util.setGameData(e, t)
                }, u.getNumData = function (e) {
                    var t = u.playerData[e];
                    return 1 == s[e] && (t = globalManager.decrypt(u.playerData[e], r)), parseInt(t)
                }, u.addNumDataWithoutBig = function (e, t) {
                    t = isNaN(t) ? 0 : t;
                    var a = parseInt(u.playerData[e]);
                    a = isNaN(a) ? 0 : a, u.playerData[e] = "" + (a + t);
                    var n = {};
                    n[e] = u.playerData[e], n[e + "savetime"] = (new Date).getTime() + "", p.setData(n), globalManager.saveLocalData(e, n[e]), globalManager.saveLocalData(e + "savetime", n[e + "savetime"]), server_util.setGameData(e, n[e])
                }, u.addNumData = function (e, t) {
                    t = isNaN(t) ? 0 : t;
                    var a = u.getObjData(e);
                    a = isNaN(a) ? 0 : a, u.setObjData(e, l.galaxyAdd(a, t));
                    var n = {};
                    n[e] = u.getObjData(e), n[e + "savetime"] = (new Date).getTime() + "", /*p.setData(n),*/ globalManager.saveLocalData(e, n[e]), globalManager.saveLocalData(e + "savetime", n[e + "savetime"]), server_util.setGameData(e, n[e])
                }, u.setObjData = function (e, t) {
                    var a = t;
                    if (null != t && "null" != t || (a = d[e]), 1 == s[e]) if ("object" == h(d[e])) {
                        var n = JSON.stringify(t);
                        a = globalManager.encrypt(n, r)
                    } else a = globalManager.encrypt("" + t, r);
                    u.playerData[e] = a;
                    var i = {};
                    i[e] = t, i[e + "savetime"] = (new Date).getTime() + "";
                    var o = t;
                    "object" == h(d[e]) && (o = JSON.stringify(t)), globalManager.saveLocalData(e, o), globalManager.saveLocalData(e + "savetime", i[e + "savetime"]), /*p.setData(i), */server_util.setGameData(e, t)
                }, u.getObjData = function (e) {
                    var t, a = u.playerData[e];
                    if (1 == s[e]) if ("object" == h(d[e])) {
                        var n = globalManager.decrypt(a, r);
                        t = JSON.parse(n)
                    } else t = globalManager.decrypt(a, r); else t = a;
                    return t
                }, u.loadAllData = function (l) {
                    var e = wxHelper.getLocalData(["firstLogin", "firstLoginsavetime"]);
                    // true ? p.getData(["firstLogin", "firstLoginsavetime"], function (e) {
                    if (0 == u.getDataAuto(e, "firstLogin")) {
                        u.setObjData("animTutorial", !1);
                        var t = [], o = [], r = {};
                        for (var a in u.playerData) "firstLogin" != a && (t.push(a), o.push(a), t.push(a + "savetime"), r[a] = 1, r[a + "savetime"] = 1);
                        0 < t.length ? p.getData(t, function (e) {
                            for (var t in o) {
                                var a = o[t];
                                e[a];
                                u.setObjData(a, u.getDataAuto(e, a))
                            }
                            for (var t in e) {
                                null != e[t] && r[t]--
                            }
                            var n = "";
                            for (var i in r) 1 == r[i] && (g.fb_get_data_fail_event(i), n = n + i + ";");
                            "" != n && cc.log("fb_get_data_fail:" + n), l(!1)
                        }) : l(!1)
                    } else {
                        u.setObjData("firstLogin", !1);
                        t = [];
                        for (var a in u.playerData) t.push(a);
                        if (0 < t.length) {
                            for (var n = {}, i = t.length - 1; 0 <= i; i--) {
                                a = t[i];
                                var s = u.playerData[a];
                                s = "number" == typeof d[a] ? u.getNumData(a) : u.getObjData(a), n[a] = s, n[a + "savetime"] = (new Date).getTime() + "";
                                var c = s;
                                "object" == h(d[a]) && (c = JSON.stringify(s)), globalManager.saveLocalData(a, c), globalManager.saveLocalData(a + "savetime", n[a + "savetime"])
                            }
                            l(!0);
                            // p.setData(n, function (e) {
                            // })
                        } else l(!0)
                    }
                    /*}) : setTimeout(function () {
                        l && l(!0)
                    }, 1e3)*/
                }, u.getScore = function () {
                    return u.getObjData("TotalCoin")
                }, u.forceUpdateData = function (e) {
                    for (var t in e) {
                        var a = !1;
                        "string" == typeof e[t] && (a = 0 <= e[t].indexOf("savetime")), a ? e[t] = Number(e[t]) : "boolean" == typeof d[t] ? e[t] = Boolean(e[t]) : "number" == typeof d[t] ? e[t] = Number(e[t]) : "object" == h(d[t]) && (cc.log("data[k]=" + e[t]), e[t] = JSON.parse(e[t])), this.setObjData(t, e[t])
                    }
                }, u.compareSaveTime = function (e, t) {
                    return null != e && "" != e || (e = 0), e = Number(e), null != t && "" != t || (t = 0), e = Number(e), 0 == (t = Number(t)) && 0 == e ? 1 : e <= t ? 2 : 1
                }, u.getDataAuto = function (e, t) {
                    var a = this.compareSaveTime(e[t + "savetime"], globalManager.getLocalData(t + "savetime")),
                        n = void 0, i = function (e, t) {
                            return "boolean" == typeof e ? e : null == e || "" == e ? t : "false" != e && ("true" == e || void 0)
                        }, o = function (e, t) {
                            var a = Number(e);
                            return isNaN(a) ? t : a
                        }, r = function (e, t) {
                            var a;
                            try {
                                return "object" == (void 0 === (a = JSON.parse(e)) ? "undefined" : h(a)) && a ? a : t
                            } catch (e) {
                                return t
                            }
                        };
                    return 1 == a ? (cc.log("key " + t + " load from fb."), null != (n = e[t]) && "null" != n || (cc.log("fb load null key " + t + " load from local."), n = globalManager.getLocalData(t, d[t]), "boolean" == typeof d[t] ? (cc.log("boolean=" + n), n = i(n, d[t])) : "number" == typeof d[t] ? (cc.log("number=" + n), n = o(n, d[t])) : "object" == h(d[t]) && (cc.log("object=" + n), n = r(n, d[t])))) : 2 == a && (cc.log("key " + t + " load from local."), n = globalManager.getLocalData(t, d[t]), "boolean" == typeof d[t] ? (cc.log("boolean=" + n), n = i(n, d[t])) : "number" == typeof d[t] ? (cc.log("number=" + n), n = o(n, d[t])) : "object" == h(d[t]) && (cc.log("object=" + n), n = r(n, d[t]))), cc.log("value2=" + n), n
                }, u.resetData = function () {
                    for (var e in d) {
                        var t = d[e];
                        this.setObjData(e, t)
                    }
                }, cc.game.on(cc.game.EVENT_HIDE, function (e) {
                    cc.log("game onPause2"), u.setObjData("lastOffline", Math.floor((new Date).getTime() / 1e3))
                }), cc.game.on(cc.game.EVENT_SHOW, function (e) {
                    cc.log("game onResume"), cc.director.emit("game_eventshow")
                }), cc.director.on("forceUpdateData", function (e) {
                    u.forceUpdateData(e.detail)
                }), cc.director.on("resetData", function (e) {
                    u.resetData()
                }), window.playerManager = u, c.exports = u
            }
        }(), cc._RF.pop()
    }, {
        "analytics-data": "analytics-data",
        "fbinstant-util": "fbinstant-util",
        "number-util": "number-util",
        "server-util": "server-util"
    }],
    "pomelo-client": [function (W, H, e) {
        "use strict";
        cc._RF.push(H, "475261YaN5DH5scskqiHBzi", "pomelo-client"), function () {
            W("protocol");
            var r = window.protobuf, s = window.decodeIO_protobuf, c = null, l = null, u = Protocol.Package,
                o = Protocol.Message, e = window.EventEmitter, d = window.rsa;
            "undefined" != typeof window && "undefined" != typeof sys && sys.localStorage && (window.localStorage = sys.localStorage);
            "function" != typeof Object.create && (Object.create = function (e) {
                function t() {
                }

                return t.prototype = e, new t
            });
            var t = window, h = Object.create(e.prototype);
            t.pomelo = h;
            var g, p = null, n = 0, i = {}, f = {}, m = {}, v = {}, y = {}, _ = {}, b = {}, w = 0, a = 0, A = 0, C = 0,
                S = null, D = null, P = null, I = null, x = null, k = !1, T = null, N = null, M = 0, F = 5e3,
                R = {sys: {type: "js-websocket", version: "0.0.1", rsa: {}}, user: {}}, E = null;
            h.init = function (e, t) {
                E = t;
                var a = e.host, n = e.port, i = e.local;
                x = e.encode || L, I = e.decode || B;
                var o = i ? "ws://" + a : "wss://" + a;
                if (n && (o += ":" + n), R.user = e.user, e.encrypt) {
                    g = !0, d.generate(1024, "10001");
                    var r = {rsa_n: d.n.toString(16), rsa_e: d.e};
                    R.sys.rsa = r
                }
                P = e.handshakeCallback, O(e, o, t)
            };
            var B = h.decode = function (e) {
                var t = o.decode(e);
                if (!(0 < t.id) || (t.route = m[t.id], delete m[t.id], t.route)) return t.body = K(t), t
            }, L = h.encode = function (e, t, a) {
                var n = e ? o.TYPE_REQUEST : o.TYPE_NOTIFY;
                if (r && b[t]) a = r.encode(t, a); else if (c && c.lookup(t)) {
                    a = new (c.build(t))(a).encodeNB()
                } else a = Protocol.strencode(JSON.stringify(a));
                var i = 0;
                return v && v[t] && (t = v[t], i = 1), o.encode(e, n, i, t, a)
            }, O = function t(a, e, n) {
                cc.log("connect to " + e);
                var i = (a = a || {}).maxReconnectAttempts || 10;
                if (N = e, window.localStorage && window.localStorage.getItem("protos") && 0 === w) {
                    var o = JSON.parse(window.localStorage.getItem("protos"));
                    w = o.version || 0, _ = o.server || {}, b = o.client || {}, r && r.init({
                        encoderProtos: b,
                        decoderProtos: _
                    }), s && (c = s.loadJson(b), l = s.loadJson(_))
                }
                R.sys.protoVersion = w;
                (p = new WebSocket(e)).binaryType = "arraybuffer", p.onopen = function (e) {
                    k && h.emit("reconnect"), U();
                    var t = u.encode(u.TYPE_HANDSHAKE, Protocol.strencode(JSON.stringify(R)));
                    j(t)
                }, p.onmessage = function (e) {
                    V(u.decode(e.data), n), A && (C = Date.now() + A)
                }, p.onerror = function (e) {
                    h.emit("io-error", e), cc.error("socket error: ", e)
                }, p.onclose = function (e) {
                    h.emit("close", e), h.emit("disconnect", e), cc.error("socket close: ", e), a.reconnect && M < i && (k = !0, M++, T = setTimeout(function () {
                        t(a, N, n)
                    }, F), F *= 2)
                }
            };
            h.disconnect = function () {
                p && (p.disconnect && p.disconnect(), p.close && p.close(), cc.log("disconnect"), p = null), S && (clearTimeout(S), S = null), D && (clearTimeout(D), D = null)
            }, h.isconnect = function () {
                return !!p
            };
            var U = function () {
                k = !1, F = 5e3, M = 0, clearTimeout(T)
            };
            h.request = function (e, t, a) {
                2 === arguments.length && "function" == typeof t ? (a = t, t = {}) : t = t || {}, (e = e || t.route) && (G(++n, e, t), i[n] = a, m[n] = e)
            }, h.notify = function (e, t) {
                G(0, e, t = t || {})
            };
            var G = function (e, t, a) {
                if (g) {
                    a = JSON.stringify(a);
                    var n = d.signString(a, "sha256");
                    (a = JSON.parse(a)).__crypto__ = n
                }
                x && (a = x(e, t, a));
                var i = u.encode(u.TYPE_DATA, a);
                j(i)
            }, j = function (e) {
                p.send(e.buffer)
            }, Y = function e() {
                var t = C - Date.now();
                100 < t ? D = setTimeout(e, t) : (cc.error("server heartbeat timeout"), h.emit("heartbeat timeout"), h.disconnect())
            };
            f[u.TYPE_HANDSHAKE] = function (e) {
                if (501 !== (e = JSON.parse(Protocol.strdecode(e))).code) if (200 === e.code) {
                    X(e);
                    var t = u.encode(u.TYPE_HANDSHAKE_ACK);
                    j(t), E && E(p)
                } else h.emit("error", "handshake fail"); else h.emit("error", "client version not fullfill")
            }, f[u.TYPE_HEARTBEAT] = function (e) {
                if (a) {
                    var t = u.encode(u.TYPE_HEARTBEAT);
                    D && (clearTimeout(D), D = null), S || (S = setTimeout(function () {
                        S = null, j(t), C = Date.now() + A, D = setTimeout(Y, A)
                    }, a))
                }
            }, f[u.TYPE_DATA] = function (e) {
                var t = e;
                I && (t = I(t)), q(h, t)
            }, f[u.TYPE_KICK] = function (e) {
                e = JSON.parse(Protocol.strdecode(e)), h.emit("onKick", e)
            };
            var V = function (e) {
                if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
                    var a = e[t];
                    f[a.type](a.body)
                } else f[e.type](e.body)
            }, q = function (e, t) {
                if (t.id) {
                    var a = i[t.id];
                    delete i[t.id], "function" == typeof a && a(t.body)
                } else e.emit(t.route, t.body)
            }, K = function (e) {
                var t = e.route;
                if (e.compressRoute) {
                    if (!y[t]) return {};
                    t = e.route = y[t]
                }
                return r && _[t] ? r.decode(t, e.body) : l && l.lookup(t) ? l.build(t).decode(e.body) : JSON.parse(Protocol.strdecode(e.body))
            }, X = function (e) {
                e.sys && e.sys.heartbeat ? (a = 1e3 * e.sys.heartbeat, A = 2 * a) : A = a = 0, J(e), "function" == typeof P && P(e.user)
            }, J = function (e) {
                if (e && e.sys) {
                    v = e.sys.dict;
                    var t = e.sys.protos;
                    if (v) for (var a in y = {}, v = v) y[v[a]] = a;
                    t && (w = t.version || 0, _ = t.server || {}, b = t.client || {}, window.localStorage.setItem("protos", JSON.stringify(t)), r && r.init({
                        encoderProtos: t.client,
                        decoderProtos: t.server
                    }), s && (c = s.loadJson(b), l = s.loadJson(_)))
                }
            };
            H.exports = h
        }(), cc._RF.pop()
    }, {protocol: "protocol"}],
    "popup-window": [function (e, t, a) {
        "use strict";
        var n;
        cc._RF.push(t, "797f8vrwsBN9LVPJJnaILOX", "popup-window"), n = cc.Enum({open: 1}), cc.Class({
            extends: cc.Component,
            properties: {
                dialog_prefab: {default: null, type: cc.Prefab},
                menu: {default: n.open, type: cc.Enum(n)},
                _dialogNode: null
            },
            start: function () {
                this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart.bind(this), this), this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd.bind(this), this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel.bind(this), this)
            },
            touchStart: function () {
                this.node.scale = 1.1
            },
            touchCancel: function () {
                this.node.scale = 1
            },
            touchEnd: function () {
                this.node.scale = 1, cc.isValid(this._dialogNode) || (this._dialogNode = null), this.menu == n.off && this._dialogNode && (this._dialogNode.destroy(), this._dialogNode = null), this.menu == n.open && (null == this._dialogNode ? (this._dialogNode = cc.instantiate(this.dialog_prefab), this._dialogNode.parent = cc.director.getScene().getChildByName("Canvas")) : this._dialogNode.active = !0), this.menu == n.hide && this._dialogNode && (this._dialogNode.active = !1)
            },
            onDestroy: function () {
                this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart), this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel)
            }
        }), cc._RF.pop()
    }, {}],
    protobuf: [function (e, t, a) {
        "use strict";
        var n, i;
        cc._RF.push(t, "a10b8piHCFHG5/Pfi2BNF/g", "protobuf"), n = "undefined" == typeof window ? t.exports : {}, (i = n).init = function (e) {
            i.encoder.init(e.encoderProtos), i.decoder.init(e.decoderProtos)
        }, i.encode = function (e, t) {
            return i.encoder.encode(e, t)
        }, i.decode = function (e, t) {
            return i.decoder.decode(e, t)
        }, t.exports = i, "undefined" != typeof window && (window.protobuf = i), (("undefined" != typeof protobuf ? protobuf : t.exports).constants = {}).TYPES = {
            uInt32: 0,
            sInt32: 0,
            int32: 0,
            double: 1,
            string: 2,
            message: 2,
            float: 5
        }, (("undefined" != typeof protobuf ? protobuf : t.exports).util = {}).isSimpleType = function (e) {
            return "uInt32" === e || "sInt32" === e || "int32" === e || "uInt64" === e || "sInt64" === e || "float" === e || "double" === e
        }, function (e, t) {
            var a = e.codec = {}, n = new ArrayBuffer(8), i = new Float32Array(n), o = new Float64Array(n),
                r = new Uint8Array(n);

            function s(e) {
                return e <= 127 ? [e] : e <= 2047 ? [192 | e >> 6, 128 | 63 & e] : [224 | e >> 12, 128 | (4032 & e) >> 6, 128 | 63 & e]
            }

            function c(e) {
                return e <= 127 ? 1 : e <= 2047 ? 2 : 3
            }

            a.encodeUInt32 = function (e) {
                e = parseInt(e);
                if (isNaN(e) || e < 0) return null;
                var t = [];
                do {
                    var a = e % 128, n = Math.floor(e / 128);
                    0 !== n && (a += 128), t.push(a), e = n
                } while (0 !== e);
                return t
            }, a.encodeSInt32 = function (e) {
                e = parseInt(e);
                return isNaN(e) ? null : (e = e < 0 ? 2 * Math.abs(e) - 1 : 2 * e, a.encodeUInt32(e))
            }, a.decodeUInt32 = function (e) {
                for (var t = 0, a = 0; a < e.length; a++) {
                    var n = parseInt(e[a]);
                    if (t += (127 & n) * Math.pow(2, 7 * a), n < 128) return t
                }
                return t
            }, a.decodeSInt32 = function (e) {
                var t = this.decodeUInt32(e);
                return t = (t % 2 + t) / 2 * (t % 2 == 1 ? -1 : 1)
            }, a.encodeFloat = function (e) {
                return i[0] = e, r
            }, a.decodeFloat = function (e, t) {
                if (!e || e.length < t + 4) return null;
                for (var a = 0; a < 4; a++) r[a] = e[t + a];
                return i[0]
            }, a.encodeDouble = function (e) {
                return o[0] = e, r.subarray(0, 8)
            }, a.decodeDouble = function (e, t) {
                if (!e || e.length < t + 8) return null;
                for (var a = 0; a < 8; a++) r[a] = e[t + a];
                return o[0]
            }, a.encodeStr = function (e, t, a) {
                for (var n = 0; n < a.length; n++) for (var i = s(a.charCodeAt(n)), o = 0; o < i.length; o++) e[t] = i[o], t++;
                return t
            }, a.decodeStr = function (e, t, a) {
                for (var n = [], i = t + a; t < i;) {
                    var o = 0;
                    e[t] < 128 ? (o = e[t], t += 1) : e[t] < 224 ? (o = ((63 & e[t]) << 6) + (63 & e[t + 1]), t += 2) : (o = ((15 & e[t]) << 12) + ((63 & e[t + 1]) << 6) + (63 & e[t + 2]), t += 3), n.push(o)
                }
                for (var r = "", s = 0; s < n.length;) r += String.fromCharCode.apply(null, n.slice(s, s + 1e4)), s += 1e4;
                return r
            }, a.byteLength = function (e) {
                if ("string" != typeof e) return -1;
                for (var t = 0, a = 0; a < e.length; a++) {
                    t += c(e.charCodeAt(a))
                }
                return t
            }
        }("undefined" != typeof protobuf ? protobuf : t.exports), function (e, t) {
            var a = e, l = e.encoder = {}, u = a.codec, n = a.constants, r = a.util;

            function d(e, t, a, n) {
                for (var i in n) if (a[i]) {
                    var o = a[i];
                    switch (o.option) {
                        case"required":
                        case"optional":
                            t = h(e, t, g(o.type, o.tag)), t = s(n[i], o.type, t, e, a);
                            break;
                        case"repeated":
                            0 < n[i].length && (t = c(n[i], o, t, e, a))
                    }
                }
                return t
            }

            function s(e, t, a, n, i) {
                switch (t) {
                    case"uInt32":
                        a = h(n, a, u.encodeUInt32(e));
                        break;
                    case"int32":
                    case"sInt32":
                        a = h(n, a, u.encodeSInt32(e));
                        break;
                    case"float":
                        h(n, a, u.encodeFloat(e)), a += 4;
                        break;
                    case"double":
                        h(n, a, u.encodeDouble(e)), a += 8;
                        break;
                    case"string":
                        var o = u.byteLength(e);
                        a = h(n, a, u.encodeUInt32(o)), u.encodeStr(n, a, e), a += o;
                        break;
                    default:
                        var r = i.__messages[t] || l.protos["message " + t];
                        if (r) {
                            var s = new ArrayBuffer(2 * u.byteLength(JSON.stringify(e)));
                            o = d(s, o = 0, r, e), a = h(n, a, u.encodeUInt32(o));
                            for (var c = 0; c < o; c++) n[a] = s[c], a++
                        }
                }
                return a
            }

            function c(e, t, a, n, i) {
                var o = 0;
                if (r.isSimpleType(t.type)) for (a = h(n, a = h(n, a, g(t.type, t.tag)), u.encodeUInt32(e.length)), o = 0; o < e.length; o++) a = s(e[o], t.type, a, n); else for (o = 0; o < e.length; o++) a = h(n, a, g(t.type, t.tag)), a = s(e[o], t.type, a, n, i);
                return a
            }

            function h(e, t, a) {
                for (var n = 0; n < a.length; n++, t++) e[t] = a[n];
                return t
            }

            function g(e, t) {
                var a = n.TYPES[e] || 2;
                return u.encodeUInt32(t << 3 | a)
            }

            l.init = function (e) {
                this.protos = e || {}
            }, l.encode = function (e, t) {
                var a = this.protos[e];
                if (!function e(t, a) {
                    if (!a) return !1;
                    for (var n in a) {
                        var i = a[n];
                        switch (i.option) {
                            case"required":
                                if (void 0 === t[n]) return console.warn("no property exist for required! name: %j, proto: %j, msg: %j", n, i, t), !1;
                            case"optional":
                                if (void 0 !== t[n]) {
                                    var o = a.__messages[i.type] || l.protos["message " + i.type];
                                    if (o && !e(t[n], o)) return console.warn("inner proto error! name: %j, proto: %j, msg: %j", n, i, t), !1
                                }
                                break;
                            case"repeated":
                                var o = a.__messages[i.type] || l.protos["message " + i.type];
                                if (t[n] && o) for (var r = 0; r < t[n].length; r++) if (!e(t[n][r], o)) return !1
                        }
                    }
                    return !0
                }(t, a)) return null;
                var n = u.byteLength(JSON.stringify(t)), i = new ArrayBuffer(n), o = new Uint8Array(i), r = 0;
                return a && 0 < (r = d(o, r, a, t)) ? o.subarray(0, r) : null
            }
        }("undefined" != typeof protobuf ? protobuf : t.exports), function (e, t) {
            var c, a = e, l = e.decoder = {}, u = a.codec, o = a.util, d = 0;

            function h(e, t, a) {
                for (; d < a;) {
                    var n = (void 0, {type: 7 & (r = u.decodeUInt32(p())), tag: r >> 3}), i = n.tag, o = t.__tags[i];
                    switch (t[o].option) {
                        case"optional":
                        case"required":
                            e[o] = s(t[o].type, t);
                            break;
                        case"repeated":
                            e[o] || (e[o] = []), g(e[o], t[o].type, t)
                    }
                }
                var r;
                return e
            }

            function s(e, t) {
                switch (e) {
                    case"uInt32":
                        return u.decodeUInt32(p());
                    case"int32":
                    case"sInt32":
                        return u.decodeSInt32(p());
                    case"float":
                        var a = u.decodeFloat(c, d);
                        return d += 4, a;
                    case"double":
                        var n = u.decodeDouble(c, d);
                        return d += 8, n;
                    case"string":
                        var i = u.decodeUInt32(p()), o = u.decodeStr(c, d, i);
                        return d += i, o;
                    default:
                        var r = t && (t.__messages[e] || l.protos["message " + e]);
                        if (r) {
                            i = u.decodeUInt32(p());
                            var s = {};
                            return h(s, r, d + i), s
                        }
                }
            }

            function g(e, t, a) {
                if (o.isSimpleType(t)) for (var n = u.decodeUInt32(p()), i = 0; i < n; i++) e.push(s(t)); else e.push(s(t, a))
            }

            function p(e) {
                var t, a = [], n = d;
                for (e = e || !1; t = c[n], a.push(t), n++, 128 <= t;) ;
                return e || (d = n), a
            }

            l.init = function (e) {
                this.protos = e || {}
            }, l.setProtos = function (e) {
                e && (this.protos = e)
            }, l.decode = function (e, t) {
                var a = this.protos[e];
                return c = t, d = 0, a ? h({}, a, c.length) : null
            }
        }("undefined" != typeof protobuf ? protobuf : t.exports), cc._RF.pop()
    }, {}],
    protocol: [function (e, n, t) {
        (function (e) {
            "use strict";
            cc._RF.push(n, "36d2eGVqHVJ0IfC8R5KWOTt", "protocol"), function (e, p, t) {
                var f = e, a = f.Package = {}, i = f.Message = {};
                a.TYPE_HANDSHAKE = 1, a.TYPE_HANDSHAKE_ACK = 2, a.TYPE_HEARTBEAT = 3, a.TYPE_DATA = 4, a.TYPE_KICK = 5, i.TYPE_REQUEST = 0, i.TYPE_NOTIFY = 1, i.TYPE_RESPONSE = 2, i.TYPE_PUSH = 3, f.strencode = function (e) {
                    for (var t = new p(3 * e.length), a = 0, n = 0; n < e.length; n++) {
                        var i = e.charCodeAt(n), o = null;
                        o = i <= 127 ? [i] : i <= 2047 ? [192 | i >> 6, 128 | 63 & i] : [224 | i >> 12, 128 | (4032 & i) >> 6, 128 | 63 & i];
                        for (var r = 0; r < o.length; r++) t[a] = o[r], ++a
                    }
                    var s = new p(a);
                    return m(s, 0, t, 0, a), s
                }, f.strdecode = function (e, t) {
                    for (var a = new p(e), n = [], i = 0, o = 0, r = a.length; i < r;) a[i] < 128 ? (o = a[i], i += 1) : a[i] < 224 ? (o = ((63 & a[i]) << 6) + (63 & a[i + 1]), i += 2) : (o = ((15 & a[i]) << 12) + ((63 & a[i + 1]) << 6) + (63 & a[i + 2]), i += 3), n.push(o);
                    return String.fromCharCode.apply(null, n)
                }, a.encode = function (e, t) {
                    var a = t ? t.length : 0, n = new p(4 + a), i = 0;
                    return n[i++] = 255 & e, n[i++] = a >> 16 & 255, n[i++] = a >> 8 & 255, n[i++] = 255 & a, t && m(n, 4, t, 0, a), n
                }, a.decode = function (e) {
                    for (var t = 0, a = new p(e), n = 0, i = []; t < a.length;) {
                        var o = a[t++], r = (n = (a[t++] << 16 | a[t++] << 8 | a[t++]) >>> 0) ? new p(n) : null;
                        m(r, 0, a, t, n), t += n, i.push({type: o, body: r})
                    }
                    return 1 === i.length ? i[0] : i
                }, i.encode = function (e, t, a, n, i) {
                    var o = 1 + (v(t) ? c(e) : 0);
                    if (y(t)) if (a) {
                        if ("number" != typeof n) throw new Error("error flag for number route!");
                        o += 2
                    } else if (o += 1, n) {
                        if (255 < (n = f.strencode(n)).length) throw new Error("route maxlength is overflow");
                        o += n.length
                    }
                    i && (o += i.length);
                    var r = new p(o), s = 0;
                    return s = l(t, a, r, s), v(t) && (s = u(e, r, s)), y(t) && (s = d(a, n, r, s)), i && (s = h(i, r, s)), r
                }, i.decode = function (e) {
                    var t = new p(e), a = t.length || t.byteLength, n = 0, i = 0, o = null, r = t[n++], s = 1 & r,
                        c = r >> 1 & 7;
                    if (v(c)) {
                        var l = parseInt(t[n]), u = 0;
                        do {
                            i += (127 & (l = parseInt(t[n]))) * Math.pow(2, 7 * u), n++, u++
                        } while (128 <= l)
                    }
                    if (y(c)) if (s) o = t[n++] << 8 | t[n++]; else {
                        var d = t[n++];
                        d ? (o = new p(d), m(o, 0, t, n, d), o = f.strdecode(o)) : o = "", n += d
                    }
                    var h = a - n, g = new p(h);
                    return m(g, 0, t, n, h), {id: i, type: c, compressRoute: s, route: o, body: g}
                };
                var m = function (e, t, a, n, i) {
                    if ("function" == typeof a.copy) a.copy(e, t, n, n + i); else for (var o = 0; o < i; o++) e[t++] = a[n++]
                }, v = function (e) {
                    return e === i.TYPE_REQUEST || e === i.TYPE_RESPONSE
                }, y = function (e) {
                    return e === i.TYPE_REQUEST || e === i.TYPE_NOTIFY || e === i.TYPE_PUSH
                }, c = function (e) {
                    for (var t = 0; t += 1, 0 < (e >>= 7);) ;
                    return t
                }, l = function (e, t, a, n) {
                    if (e !== i.TYPE_REQUEST && e !== i.TYPE_NOTIFY && e !== i.TYPE_RESPONSE && e !== i.TYPE_PUSH) throw new Error("unkonw message type: " + e);
                    return a[n] = e << 1 | (t ? 1 : 0), n + 1
                }, u = function (e, t, a) {
                    do {
                        var n = e % 128, i = Math.floor(e / 128);
                        0 !== i && (n += 128), t[a++] = n, e = i
                    } while (0 !== e);
                    return a
                }, d = function (e, t, a, n) {
                    if (e) {
                        if (65535 < t) throw new Error("route number is overflow");
                        a[n++] = t >> 8 & 255, a[n++] = 255 & t
                    } else t ? (a[n++] = 255 & t.length, m(a, n, t, 0, t.length), n += t.length) : a[n++] = 0;
                    return n
                }, h = function (e, t, a) {
                    return m(t, a, e, 0, e.length), a + e.length
                };
                n.exports = f, "undefined" != typeof window && (window.Protocol = f)
            }("undefined" == typeof window ? n.exports : {}, "undefined" == typeof window ? e : Uint8Array), cc._RF.pop()
        }).call(this, e("buffer").Buffer)
    }, {buffer: 2}],
    "rank-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "6786eAF0QJLiK3ye/PrgjeS", "rank-dialog");
        var n = e("instant-util"), i = e("analytics-data");
        cc.Class({
            extends: cc.Component,
            properties: {
                rank_layout: {default: null, type: cc.Node},
                rank_item: {default: null, type: cc.Prefab},
                self_rank_node: {default: null, type: cc.Node}
            },
            onLoad: function () {
                var e = cc.sys.localStorage.getItem("rankData");
                e && this.setData(JSON.parse(e))/*, n.getFriends(function (e) {
                    server_util.getFrinedsLeaderboard(e, function (e) {
                        e && (cc.sys.localStorage.setItem("rankData", JSON.stringify(e)), this.setData(e))
                    }.bind(this))
                }.bind(this))*/
            },
            setData: function (e) {
                for (var t = 0; t < e.length; t++) {
                    var a = e[t];
                    a.index = t + 1, e[t] = a
                }
                this.initRankList(e)
            },
            initRankList: function (e) {
                this.rank_layout.getComponent("list-adapter").initListView(this.rank_item, "rank-item", e)
            },
            initSelfRank: function (e) {
            },
            shareClick: function () {
                // var e = {type: globalManager.shareType.rankShare, inviter: n.getPlayerID(), rewards: "1"},
                //     t = globalManager.getShareConfig(globalManager.shareType.rankShare);
                // i.share_rank_event();
                // var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                // n.chooseContext(function (e) {
                //     i.share_rank_success_event()
                // }, function (e, t) {
                //     null != t && a.showToast(t)
                // }.bind(self), e, t.text, t.img)
            },
            closeDialog: function () {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").closeRankPopup()
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util"}],
    "rank-item": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "581a2E8z0lIIYdjuOaa8E8R", "rank-item");
        var n = e("webimg-util"), i = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                index_label: {default: null, type: cc.Label},
                name_label: {default: null, type: cc.Label},
                level_label: {default: null, type: cc.Label},
                img_head: {default: null, type: cc.Sprite},
                img_first: cc.Sprite,
                img_second: cc.Sprite,
                img_third: cc.Sprite,
                score_label: {default: null, type: cc.Label},
                item_bg: {default: null, type: cc.Node}
            },
            setData: function (e) {
                var t = e.index;
                this.setIndexLabel(t), this.score_label.string = i.unit_format(e.score ? e.score : 0), this.name_label.string = e.name, e.photo && n.load_webimg(e.photo, this.img_head), this.level_label && (this.level_label.string = fish_data[e.user_level].name, e.user_level < 12 ? this.level_label.node.color = new cc.Color(180, 189, 221, 255) : e.user_level < 26 ? this.level_label.node.color = new cc.Color(118, 219, 163, 255) : e.user_level < 38 && (this.level_label.node.color = new cc.Color(255, 224, 124, 255)))
            },
            setIndexLabel: function (e) {
                this.index_label.node.active = !1, this.img_first.node.active = !1, this.img_second.node.active = !1, this.img_third.node.active = !1, 1 == e ? this.img_first.node.active = !0 : 2 == e ? this.img_second.node.active = !0 : 3 == e ? this.img_third.node.active = !0 : (this.index_label.node.active = !0, this.index_label.string = "" + e)
            }
        }), cc._RF.pop()
    }, {"number-util": "number-util", "webimg-util": "webimg-util"}],
    "recommend-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "5e94bcgFFtENLKVA8QUEzSn", "recommend-dialog");
        var n = e("instant-util"), i = e("analytics-data");
        cc.Class({
            extends: cc.Component, properties: {}, start: function () {
            }, toHugeFish: function () {
                var e = {type: "switch_game", name: "bigfish", level: playerManager.getNumData("UnlockLevel") + 1};
                i.switch_hugefish_from_dialog_event(), n.switchGameAsync("276127343005598", function (e) {
                }, e)
            }, closeClick: function () {
                this.node.destroy()
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util"}],
    "reset-data-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "05f659/VyhEZrlaq96dFk4G", "reset-data-dialog");
        var n = e("analytics-data");
        cc.Class({
            extends: cc.Component,
            properties: {
                toggle_btn: {default: null, type: cc.Toggle},
                reset_label: {default: null, type: cc.Label},
                reset_btn: {default: null, type: cc.Button}
            },
            start: function () {
                this.toggleChange()
            },
            resetClick: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("login-world");
                this.toggle_btn.isChecked && (playerManager.resetData(), playerManager.loadAllData(function (e) {
                    globalManager.isNewPlayer = e
                }), n.reset_data_event(), e.showToast("Reset successfully!")), this.node.destroy()
            },
            toggleChange: function () {
                this.reset_label.node.color = this.toggle_btn.isChecked ? cc.hexToColor("#0082FE") : cc.hexToColor("#B9B3B3"), this.reset_btn.interactable = this.toggle_btn.isChecked
            },
            closeClick: function () {
                this.node.destroy()
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data"}],
    "server-util": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "43fa8fF6rBLtqOmmYR8HuJk", "server-util");
        var l = e("http-client"), i = e("instant-util"), u = e("analytics-data");
        e("globalManager"), function () {
            if (window.server_util) t.exports = window.server_util; else {
                var o = o || {}, e = /^192\..*|localhost/.exec(/*location.hostname*/""), r = globalManager.appId;
                // if (cc.log("host=" + location.hostname + " isLocal=" + e + " isRelease=" + !0 + " appId=" + r), !e) globalManager.appid_reg.exec(location.href) || (r = location.hostname.replace(/[^0-9]/gi, ""), cc.log("current appid = " + r));
                o.serverIp = "https://fbgame.ymnsdk.com/", o.serverPort = 5014;
                var s, c = 0;
                o.login = function (e, t, a, n) {
                    setInterval(function () {
                        c++, u.stay_time_length_event(c)
                    }, 6e4), s = t, globalManager.fbPlayerId = t;
                    var i = {user_id: s, nickname: e, app_id: r, avatar: a};
                    u.sever_login_event(), l.httpPostRequest(o.serverIp + "user/login", i, function (t) {
                        u.sever_login_success_event(), globalManager.loginTime = Math.floor(Date.parse(new Date) / 1e3), globalManager.serverLoginTime = Math.floor(parseInt(t.server_time) / 1e3), globalManager.serverResetTime = Math.floor(parseInt(t.reset_time) / 1e3), globalManager.isBlackList = !!t.in_black && 1 == t.in_black, o.publicConfig(function (e) {
                            e && e.config && (cc.log("load publicConfig from server."), globalManager.publicConfig = e.config, e.config.boxcd && (globalManager.BoxCD = e.config.boxcd), e.config.upgradebuy && (globalManager.UpgradeBuy = e.config.upgradebuy), e.config.upgradebox && (globalManager.UpgradeBox = e.config.upgradebox), e.config.shareOrVideoMaxCounts && (globalManager.shareOrVideoMaxCounts = e.config.shareOrVideoMaxCounts), cc.sys.localStorage.setItem("publicConfig", JSON.stringify(e)))
                        }), globalManager.setShareConfig(), null != t.force_data && (null != t.force_data.resetData ? window.setTimeout(function (e) {
                            cc.log("pomelo.on(resetData)"), cc.director.emit("resetData")
                        }, 100) : window.setTimeout(function (e) {
                            cc.log("pomelo.on(forceUpdateData) data = ", t.force_data), cc.director.emit("forceUpdateData", t.force_data)
                        }, 100)), n && n()
                    }, function () {
                    }), l.httpPostRequest(o.serverIp + "game/list", i, function (e) {
                        null != e.list && (globalManager.gamelist = e.list)
                    }, function () {
                    })
                }, o.relogin = function (e, t) {
                }, o.queryEntry = function (e, t) {
                }, o.setGameData = function (e, t, a) {
                }, o.getGameData = function (e, t) {
                }, o.getGameList = function (e, t) {
                    l.httpPostRequest(o.serverIp + "game/list", {
                        user_id: ""/*i.getPlayerID()*/,
                        app_id: r,
                        type: e
                    }, function (e) {
                        t && t(e)
                    }, function () {
                    })
                }, o.setLeaderboardScore = function (e, t) {
                    var a = {
                        user_id: /*i.getPlayerID()*/"",
                        app_id: r,
                        point: e,
                        user_level: playerManager.getNumData("UnlockLevel")
                    };
                    l.httpPostRequest(o.serverIp + "user/setInfo", a, function (e) {
                        t && t()
                    }, function () {
                    })
                }, o.getLeaderboard = function (e, t, a) {
                }, o.getFrinedsLeaderboard = function (e, a) {
                    for (var t = [], n = e.length - 1; 0 <= n; n--) t.push(e[n].id);
                    var i = {friends: t, app_id: r, type: "point,user_level"};
                    l.httpPostRequest(o.serverIp + "rank/friend", i, function (e) {
                        if ("{}" != JSON.stringify(e)) {
                            for (var t = 0; t < e.length; t++) e[t].score = e[t].point, e[t].id = e[t].user_id, e[t].name = e[t].nickname, e[t].photo = e[t].avatar;
                            e.sort(function (e, t) {
                                return t.score - e.score
                            }), a && a(e)
                        } else a && a([])
                    }, function () {
                    })
                }, o.getDataConfig = function (e, t) {
                }, o.saveInviter = function (e, t, a) {
                    l.httpPostRequest(o.serverIp + "activity/invite", {
                        user_id: i.getPlayerID(),
                        app_id: r,
                        invite_id: e,
                        group_id: t
                    }, function (e) {
                        a && a(e)
                    }, function () {
                    })
                }, o.getActivityList = function (t, a) {
                    l.httpPostRequest(o.serverIp + "activity/list", {
                        user_id:/* i.getPlayerID()*/"",
                        app_id: r
                    }, function (e) {
                        "{}" != JSON.stringify(e) ? t && t(e) : t && t([])
                    }, function (e) {
                        a && a(e)
                    })
                }, o.receiveTask = function (e, t) {
                    l.httpPostRequest(o.serverIp + "activity/receive", {
                        user_id: /*i.getPlayerID()*/"",
                        app_id: r,
                        task_id: e
                    }, function (e) {
                        t && t(e)
                    }, function () {
                    })
                }, o.publicConfig = function (t) {
                    l.httpPostRequest(o.serverIp + "public/config", {app_id: r}, function (e) {
                        t && t(e)
                    }, function () {
                    })
                }, o.friendHelp = function (e, t, a, n) {
                    l.httpPostRequest(o.serverIp + "activity/friendsHelp", {
                        user_id: i.getPlayerID(),
                        app_id: r,
                        friend_id: e,
                        group_id: a,
                        task_id: t
                    }, function (e) {
                        n && n(e)
                    }, function () {
                    })
                }, o.shareList = function (t) {
                    l.httpPostRequest(o.serverIp + "share/list", {app_id: r}, function (e) {
                        t && t(e)
                    }, function () {
                    })
                }, o.switchGame = function (e, t, a) {
                    l.httpPostRequest(o.serverIp + "/uc/activity/switchGameNotify", {
                        user_id: i.getPlayerID(),
                        app_id: r,
                        task_id: e,
                        game_id: t,
                        game_user_id: a
                    }, function () {
                    }, function () {
                    })
                }, window.server_util = o, t.exports = o
            }
        }(), cc._RF.pop()
    }, {
        "analytics-data": "analytics-data",
        globalManager: "globalManager",
        "http-client": "http-client",
        "instant-util": "instant-util"
    }],
    share_reward: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "218bel50d9EOLt1jiwqr25y", "share_reward");
        var r = e("analytics-data"), s = e("instant-util");
        e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                missionNode: cc.Node,
                missionBtn: cc.Button,
                missionSp: cc.Node,
                missionRed: cc.Sprite,
                rewardNode: cc.Node,
                rewardBtn: cc.Button,
                rewardSp: cc.Node,
                rewardRed: cc.Sprite,
                shareNode: cc.Node,
                videoNode: cc.Node,
                shareSprite: cc.Node,
                videoSprite: cc.Node,
                adapterNode: cc.Node,
                getSprite: cc.Sprite,
                getButton: cc.Button,
                missionLabel: cc.Label,
                thisLabel: cc.Label,
                valueLabels: [cc.Label],
                valueLabel: cc.Label
            },
            onLoad: function () {
                var e = this, a = this;
                globalManager.canShare(globalManager.shareType.DailyShare, {level: playerManager.getNumData("UnlockLevel")}) ? (this.rewardType = 1) == globalManager.shareRewardAutoShow && globalManager.MaxShareCounts > playerManager.getNumData("dailyshareGetCount") && this.onButtonShare() : (this.rewardType = 2, 1 == globalManager.shareRewardAutoShow && globalManager.MaxShareCounts > playerManager.getNumData("dailyshareGetCount") && this.onButtonWatch()), this.setData(), this.setTittleNode(1), this.refreshRedNode();
                var t = cc.view.getFrameSize(), n = 1334 * t.width / 750 / t.height;
                this.adapterNode.scale = 1 < n ? 1 : n;
                for (var i = 0; i < this.valueLabels.length; i++) this.valueLabels.string = gameData.getDailyShareReward(0);
                this.customEvent = {refresh_mission_red: "refreshRedNode", mission_reward_close: "closeDialog"};
                var o = function () {
                    var t = e.customEvent[r];
                    cc.director.on(r, function (e) {
                        a[t]()
                    })
                };
                for (var r in this.customEvent) o()
            },
            onDestroy: function () {
                for (var e in cc.log("onDestory"), this.customEvent) cc.director.off(e)
            },
            setTittleNode: function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1;
                this.missionNode.active = !1, this.missionBtn.node.active = !1, this.missionSp.active = !1, this.rewardNode.active = !1, this.rewardBtn.node.active = !1, this.rewardSp.active = !1, 1 == e ? (this.missionNode.active = !0, this.missionBtn.node.active = !0, this.missionSp.active = !0, this.missionBtn.interactable = !1, this.rewardNode.active = !1, this.rewardBtn.node.active = !0, this.rewardSp.active = !1, this.rewardBtn.interactable = !0) : 2 == e && (this.missionNode.active = !1, this.missionBtn.node.active = !0, this.missionSp.active = !1, this.missionBtn.interactable = !0, this.rewardNode.active = !0, this.rewardBtn.node.active = !0, this.rewardSp.active = !0, this.rewardBtn.interactable = !1)
            },
            clickTittleBtn: function (e, t) {
                this.setTittleNode(t)
            },
            refreshRedNode: function () {
                var e = !1;
                return 1 != cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").setGiftPoint() ? this.missionRed.node.active = !1 : e = this.missionRed.node.active = !0, playerManager.getNumData("dailyshareGetCount") >= globalManager.MaxShareCounts ? this.rewardRed.node.active = !1 : e = this.rewardRed.node.active = !0, e
            },
            setData: function () {
                this.valueLabel.string = gameData.getDailyShareReward(playerManager.getNumData("keepLoginDays") - 1), this.missionLabel.string = playerManager.getNumData("dailyshareGetCount") + "/" + globalManager.MaxShareCounts, globalManager.MaxShareCounts, playerManager.getNumData("dailyshareGetCount"), this.getSprite.node.active = !1, this.getButton.node.active = !1;
                var e = Math.abs(this.shareNode.x);
                this.shareNode.active = !1, this.videoNode.active = !1, this.shareSprite.active = !1, this.videoSprite.active = !1, 1 == this.rewardType ? (this.shareNode.active = !0, this.videoNode.active = !0, this.shareNode.x = -1 * e, this.videoNode.x = e, globalManager.MaxShareCounts > playerManager.getNumData("dailyshareGetCount") ? (this.shareNode.active = !0, this.shareSprite.active = !1, this.videoNode.active = !0, this.videoSprite.active = !1) : (this.shareSprite.active = !0, this.shareNode.active = !1, this.videoNode.active = !1, this.videoSprite.active = !0)) : 2 == this.rewardType && (this.videoNode.active = !0, this.videoNode.x = 0, globalManager.MaxShareCounts > playerManager.getNumData("dailyshareGetCount") ? (this.videoNode.active = !0, this.videoSprite.active = !1) : (this.videoSprite.active = !0, this.videoNode.active = !1)),/* "WEB" === s.getPlatform() && */(this.videoSprite.active = !0, this.videoNode.active = !1)
            },
            aquireReward: function () {
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                if (globalManager.MaxShareCounts > playerManager.getNumData("dailyshareGetCount")) {
                    r.all_reward_get_click_event();
                    var t = gameData.getDailyShareReward(playerManager.getNumData("keepLoginDays") - 1);
                    playerManager.addNumData("dailyshareGetCount", 1), playerManager.getNumData("keepLoginDays") > playerManager.getNumData("keepGotRewards") && playerManager.addNumData("keepGotRewards", 1), playerManager.addNumData("Diamond", t), cc.director.emit("updateDiamond"), e.showDiamondGotPopUp(t), e.checkReward(), this.refreshRedNode()
                }
                this.setData()
            },
            onButtonShare: function (e, t) {
                var a = this;
                globalManager.shareRewardAutoShow = !0;
                var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"),
                    i = {type: globalManager.shareType.DailyShare, inviter: s.getPlayerID(), rewards: "1"},
                    o = globalManager.getShareConfig(globalManager.shareType.DailyShare);
                r.share_reward_event(), s.chooseContext(function (e) {
                    r.share_reward_success_event(), a.aquireReward()
                }, function (e, t) {
                    null != t && n.showToast(t)
                }.bind(a), i, o.text, o.img)
            },
            onButtonWatch: function (e, t) {
                var a = this;
                globalManager.shareRewardAutoShow = !0;
                var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                r.watch_reward_event(), s.showRewardAd(function () {
                    r.watch_reward_success_event(), a.aquireReward()
                }, function (e, t) {
                    1 == globalManager.canShowReward ? n.showToast("No available Ad right now, try again later.") : n.showToast("The web page does not currently support ads.")
                })
            },
            closeDialog: function () {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").closeShareDailyPopUp()
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    "task-node": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "9dc7aBiCp1OWabl6/dmTrQl", "task-node");
        var n = e("instant-util"), i = e("number-util"), o = e("analytics-data");
        cc.Class({
            extends: cc.Component,
            properties: {
                head_img: {default: null, type: cc.Sprite},
                title_label: {default: null, type: cc.Label},
                coins_label: {default: null, type: cc.Label},
                claim_btn: {default: null, type: cc.Toggle},
                head_icons: {default: [], type: cc.SpriteFrame},
                add_percent_label: {default: null, type: cc.Label},
                _data: null,
                _callback: null,
                _addPercent: 0
            },
            setData: function (e, t) {
                this._data = e, this._callback = t;
                var a = "";
                cc.log("data.type=" + e.type), 0 == e.type ? (a = "Free", this.add_percent_label.node.active = !1) : (a = "Invited No." + e.type + " Friend", this.add_percent_label.node.active = !0, this._addPercent = e.type <= 10 ? .1 * e.type : 1 + .01 * (e.type - 10), this.add_percent_label.string = "+" + parseInt(100 * this._addPercent) + "%");
                var n = 0;
                n = e.canClaim ? 0 == e.type ? 0 : 1 : 2, this.head_img.spriteFrame = this.head_icons[n], this.title_label.string = a, this.coins_label.string = i.unit_format(e.price), this.claim_btn.isChecked = e.canClaim, this.claim_btn.interactable = e.canClaim
            },
            claimClick: function () {
                for (var e = playerManager.getObjData("inviteRewards"), t = 0; t < e.length; t++) if (t == this._data.type) {
                    e[t] = 1;
                    break
                }
                cc.log("inviteRewards2222=" + JSON.stringify(e)), playerManager.setObjData("inviteRewards", e), 0 == this._data.type ? playerManager.setObjData("freeReward", !0) : 0 < this._data.type && server_util.receiveTask(this._data.taskId);
                var a = parseInt(this._data.price * (1 + this._addPercent));
                playerManager.addNumData("Coin", a), playerManager.addNumData("TotalCoin", a), cc.director.emit("updateCoin"), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("+" + i.unit_format(a) + " coins"), this._callback(this._data)
            },
            inviteFriendClick: function () {
                o.invite_friends_event();
                var e = {type: "share", inviter: n.getPlayerID()};
                n.chooseContext(function () {
                    cc.log("share finish"), o.invite_friends_success_event(), cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast("Sent! Wait your friends enter game!")
                }, function (e) {
                    cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showToast(e)
                }, e)
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    toast: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "98f21AcsM1Ld4kwc5z85hWu", "toast"), cc.Class({
            extends: cc.Component,
            properties: {
                bg_layout: {default: null, type: cc.Node},
                bottom_label: {default: null, type: cc.Label},
                text_label: {default: null, type: cc.Label}
            },
            onLoad: function () {
            },
            start: function () {
            },
            setData: function (e) {
                cc.log("text=" + e), this.text_label.string = e, this.bottom_label.string = e
            }
        }), cc._RF.pop()
    }, {}],
    tutorialDlg: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "1e97akuhZJOmonMRGwMkCt9", "tutorialDlg"), cc.Class({
            extends: cc.Component,
            properties: {bgSprite: cc.Node, tutoialSprite: cc.Node, btnBack: cc.Button},
            onLoad: function () {
                playerManager.setObjData("lookTutorial", !1);
                var e = cc.view.getFrameSize(), t = 1334 * e.width / 750 / e.height;
                this.tutoialSprite.scale = 1 < t ? 1 : t
            },
            update: function (e) {
            },
            onButtonBack: function (e, t) {
                this.node.removeFromParent(!0)
            }
        }), cc._RF.pop()
    }, {}],
    "unlock-dialog": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "393deBWRoJCpYPcOeHBxelE", "unlock-dialog");
        var r = e("analytics-data"), s = e("instant-util"), c = e("number-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                fish_img: {default: null, type: cc.Sprite},
                rewardNode: cc.Node,
                name_label: cc.Label,
                videobtn_label: cc.Label,
                sharebtn_label: cc.Label,
                level_label: cc.Label,
                _unlockFish: null
            },
            onLoad: function () {
                server_util.setLeaderboardScore(playerManager.getScore());
                var e = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene");
                e.scriptGamePaodao.refreshCoin();
                e.playSound("congratulations")
            },
            setData: function (e) {
                var t = this;
                this._unlockFish = e;
                var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"),
                    n = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                this.fish_img.spriteFrame = n.getItemFrame(e);
                var i = gameData.getHousePanelPos(this._unlockFish);
                if (this.fish_img.node.x = i.posX, this.fish_img.node.y = i.posY, this.rewarddiam = fish_data[this._unlockFish].rewarddiam, this.name_label.string = fish_data[this._unlockFish].name, this.level_label.string = e + 1 + "", 0 < c.cmpBigInt(this.rewarddiam, "0") && a.showDiamondGotPopUp(this.rewarddiam, 1, function () {
                    4 == t._unlockFish && 0 == playerManager.getObjData("autoShowDaily") && (cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").showDailyCheckinPopUp(), playerManager.setObjData("autoShowDaily", !0))
                }), 1 == playerManager.getObjData("animTutorial")) return this.videobtn_label.string = "OK", void (this.sharebtn_label.string = "OK");
                // var o = globalManager.getShareConfig(globalManager.shareType.levelUp);
                // s.getContextID() && (r.auto_update_start_event("autoUnlock"), s.updateContext(function () {
                //     r.auto_update_success_event("autoUnlock")
                // }, function () {
                // }, {type: "autoUnlock"}, o.text, o.img, null, !0))
            },
            shareClick: function () {
                /*var a = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"), e = this;
                if (1 != playerManager.getObjData("animTutorial")) {
                    var t = {type: globalManager.shareType.levelUp, inviter: /!*s.getPlayerID()*!/"", rewards: "1"},
                        n = globalManager.getShareConfig(globalManager.shareType.levelUp);
                    r.share_level_up_event(), s.chooseContext(function () {
                        r.share_level_up_success_event(), e.closeDialog()
                    }, function (e, t) {
                        null != t && a.showToast(t)
                    }.bind(this), t, n.text, n.img)
                } else e.closeDialog()*/
                wxHelper.shareMessage();
            },
            closeDialog: function () {
                this.showRecommendDialog(), this.showCatchFishIcon(), this.node.removeFromParent(!1), playerManager.addNumData("Diamond", this.rewarddiam), cc.director.emit("updateDiamond")
            },
            showRecommendDialog: function () {
            },
            showCatchFishIcon: function () {
                cc.director.emit("catch_fish")
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util", "number-util": "number-util"}],
    upgradeCarPopUp: [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "7b5d94YdEhCarBc5KrhCs7p", "upgradeCarPopUp");
        var r = e("analytics-data"), s = e("instant-util");
        cc.Class({
            extends: cc.Component,
            properties: {
                spupgradefrom: cc.Sprite,
                spupgradeto: cc.Sprite,
                lbupgradefrom: cc.Label,
                levelfrom: cc.Label,
                lbupgradeto: cc.Label,
                levelto: cc.Label,
                btnShare: cc.Button,
                btnVideo: cc.Button,
                btnBack: cc.Button
            },
            onLoad: function () {
            },
            setData: function (e, t, a) {
                this.carlevel = e, this.randomType = t, this.callback = a;
                var n = cc.director.getScene().getChildByName("Canvas").getComponent("GameItemNodeCache");
                this.spupgradefrom.spriteFrame = n.getItemFrame(e), this.spupgradefrom.node.x = gameData.getHousePanelPos(e).posX, this.spupgradefrom.node.y = gameData.getHousePanelPos(e).posY, this.lbupgradefrom.string = fish_data[e].name, this.levelfrom.string = e + 1 + "";
                var i = 0;
                if (1 == t) {
                    var o = 100 * Math.random();
                    i = o <= 20 ? 1 : o <= 70 ? 2 : 3
                } else 2 == t && (i = 2);
                this.upgradeto = i + e, this.lbupgradeto.string = fish_data[this.upgradeto].name, this.levelto.string = this.upgradeto + 1 + "", this.spupgradeto.spriteFrame = n.getItemFrame(this.upgradeto), this.spupgradeto.node.x = gameData.getHousePanelPos(this.upgradeto).posX, this.spupgradeto.node.y = gameData.getHousePanelPos(this.upgradeto).posY, this.btnShare.node.active = !1, this.btnVideo.node.active = !1, this.btnShare.node.active = !0, this.rewardType = 1
            },
            onButtonShare: function (e, t) {
                var a = this, n = cc.director.getScene().getChildByName("Canvas").getComponent("GameScene"),
                    i = {type: globalManager.shareType.freeUpgrade, inviter: s.getPlayerID(), rewards: "1"};
                if (1 == this.rewardType) {
                    var o = globalManager.getShareConfig(globalManager.shareType.freeUpgrade);
                    r.share_free_upgrade_event(), s.chooseContext(function (e) {
                        r.share_free_upgrade_success_event(), a.callback && a.callback(a.upgradeto), a.onButtonBack(), n.showToast("Upgrade successfully!")
                    }, function (e, t) {
                        null != t && n.showToast(t)
                    }.bind(a), i, o.text, o.img)
                } else 2 == this.rewardType && (r.watch_video_free_upgrade_event(), s.showRewardAd(function () {
                    cc.log("showAd success"), r.watch_video_free_upgrade_success_event(), a.callback && a.callback(a.upgradeto), a.onButtonBack(), n.showToast("Upgrade successfully!")
                }, function () {
                    cc.log("RewardAd load err"), 1 == globalManager.canShowReward ? n.showToast("No available Ad right now, try again later.") : n.showToast("The web page does not currently support ads.")
                }))
            },
            onButtonBack: function (e, t) {
                cc.director.getScene().getChildByName("Canvas").getComponent("GameScene").closeUpgradeCarPopUp()
            }
        }), cc._RF.pop()
    }, {"analytics-data": "analytics-data", "instant-util": "instant-util"}],
    "webimg-util": [function (e, t, a) {
        "use strict";
        cc._RF.push(t, "90d75n5RilPx5Q+ok7JHIby", "webimg-util"), t.exports = {
            load_webimg: function (e, a) {
                cc.loader.load({url: e, type: "png"}, function (e, t) {
                    return e ? (cc.log("load head img err: " + JSON.stringify(e)), e) : (a.spriteFrame = new cc.SpriteFrame(t), a.type = cc.Sprite.Type.SIMPLE, a.sizeMode = cc.Sprite.SizeMode.CUSTOM, 0)
                })
            }, getBase64: function (e, a, n, i) {
                window.URL = window.URL || window.webkitURL;
                var t = new XMLHttpRequest;
                t.open("get", e, !0), t.responseType = "blob", t.onload = function () {
                    if (200 == this.status) {
                        var e = this.response, t = new FileReader;
                        t.onloadend = function (e) {
                            var t = e.target.result;
                            a && a(t, i)
                        }, t.readAsDataURL(e)
                    } else n && n(i)
                }, t.send()
            }, getImgBase64: function () {
                var e = cc.find("Canvas/screenshot").getComponent(cc.Sprite), t = new cc.RenderTexture(960, 640);
                t.begin(), e._sgNode.visit(), t.end();
                var a = document.createElement("canvas"), n = a.getContext("2d");
                if (a.width = 960, a.height = 640, cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
                    var i = t.getSprite().getTexture().getHtmlElementObj();
                    n.drawImage(i, 0, 0)
                } else if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
                    var o = gl.createFramebuffer();
                    gl.bindFramebuffer(gl.FRAMEBUFFER, o);
                    var r = t.getSprite().getTexture()._glID;
                    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, r, 0);
                    var s = new Uint8Array(2457600);
                    gl.readPixels(0, 0, 960, 640, gl.RGBA, gl.UNSIGNED_BYTE, s), gl.bindFramebuffer(gl.FRAMEBUFFER, null);
                    for (var c = 0; c < 640; c++) {
                        var l = 639 - c, u = new Uint8ClampedArray(s.buffer, 960 * l * 4, 3840),
                            d = new ImageData(u, 960, 1);
                        n.putImageData(d, 0, c)
                    }
                }
                return a.toDataURL("image/png")
            }
        }, cc._RF.pop()
    }, {}]
}, {}, ["Accelarate_Dialog", "AddCoin1", "CoinGot", "DailyBonusAgain", "Daily_CheckIn", "DiamondGot", "GameItemNode", "GameItemNodeCache", "GameItemPaodao", "GamePaodao", "GameScene", "LevelupReward", "No_Diamond_Dialog", "Tutorial0", "Tutorial0_1", "Tutorial0_2", "Tutorial1", "Tutorial1_1", "Tutorial2", "Tutorial2_1", "Tutorial3", "Tutorial4", "Tutorial5", "Tutorial6", "Tutorial7", "Tutorial7_1", "UFO_reward", "addcoin", "arrowIcon", "bonustime_dlg", "catch-fish-dialog", "audioManager", "fish-cfg", "gameData", "globalManager", "playerManager", "daily-bonus-dialog", "HC_OK", "HC_OK_animnode", "HZ_open", "HZ_start", "effectDoubleCoin", "effectGetCoin", "effectMerge", "effectUFO", "effectupgrade", "expNode", "fishlist-dialog", "getoffcoin_dlg", "invite-friends-dialog", "boxnode", "chat_dlg", "count-down-node", "daily-node", "fish-item", "gift-node", "moregame-item", "rank-item", "task-node", "loading", "login-world", "luckyspin", "luckyspin_reward", "moregame-dialog", "no-coin-dialog", "PaymentInterface", "PaymentWrapper", "PlatformSdk", "UserInterface", "UserWrapper", "AndroidPaymentExecutor", "AndroidPlatformExecutor", "AndroidUserExecutor", "BrowserPaymentExecutor", "BrowserPlatformExecutor", "BrowserUserExecutor", "IosPaymentExecutor", "IosPlatformExecutor", "IosUserExecutor", "WindowsPaymentExecutor", "WindowsPlatformExecutor", "WindowsUserExecutor", "OsUtil", "rank-dialog", "recommend-dialog", "reset-data-dialog", "WShaderUtil", "flowlight_fsh", "flowlight_vsh", "gray_fsh", "gray_vsh", "customShare", "share_reward", "analytics-data", "fbinstant-util", "http-client", "instant-util", "list-adapter", "list-view-dynamic", "load-animation", "md5", "native-util", "notification", "number-util", "popup-window", "server-util", "toast", "webimg-util", "tutorialDlg", "unlock-dialog", "upgradeCarPopUp", "emitter", "pomelo-client", "protobuf", "protocol"]);