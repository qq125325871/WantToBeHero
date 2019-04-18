require = function a(r, i, p) {
    function s(t, e) {
        if (!i[t]) {
            if (!r[t]) {
                var n = "function" == typeof require && require;
                if (!e && n) return n(t, !0);
                if (l) return l(t, !0);
                var o = new Error("Cannot find module '" + t + "'");
                throw o.code = "MODULE_NOT_FOUND", o
            }
            var c = i[t] = {exports: {}};
            r[t][0].call(c.exports, function (e) {
                return s(r[t][1][e] || e)
            }, c, c.exports, a, r, i, p)
        }
        return i[t].exports
    }

    for (var l = "function" == typeof require && require, e = 0; e < p.length; e++) s(p[e]);
    return s
}({
    GMLaunch: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "9591eR7+tlNhKDGp8RmQWwn", "GMLaunch"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, c = o.ccclass, a = (o.property, function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return __extends(t, e), t.prototype.start = function () {
                window.wx && wx.showLoading && wx.showLoading({title: "加载中", mask: !0}), wxHelper.getConfig()
            }, t = __decorate([c], t)
        }(cc.Component));
        n.default = a, cc._RF.pop()
    }, {}], endAds: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "f47dcuUy9lHGaLsuEzw4GUa", "endAds"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, c = o.ccclass, a = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.nodeContent = null, e.pfbGameItem = null, e.wgtMask = null, e
            }

            return __extends(e, t), e.prototype.onLoad = function () {
                this.node.scale = .8, this.wgtMask.target = cc.director.getScene().getComponentInChildren(cc.Canvas).node, this.wgtMask.left = this.wgtMask.right = this.wgtMask.top = this.wgtMask.bottom = 0, this.wgtMask.updateAlignment()
            }, e.prototype.updateWithData = function (e) {
                for (var t = this, n = Math.min(e.length, 9), o = 0; o < n; o++) this.addItem(e[o], o);
                this.randomTick(), this.schedule(function () {
                    t.randomTick()
                }, 3)
            }, e.prototype.randomTick = function () {
                for (var e = Math.round(Math.random()) + 1, t = [], n = 0; n < e; n++) t.push(Math.floor(Math.random() * this.nodeContent.childrenCount));
                for (n = 0; n < t.length; n++) this.nodeContent.children[t[n]].runAction(cc.sequence(cc.sequence(cc.rotateTo(.1, 15), cc.rotateTo(.1, -15)).repeat(6), cc.rotateTo(.2, 0)));
                cc.SpriteFrame
            }, e.prototype.addItem = function (t, e) {
                var n = cc.instantiate(this.pfbGameItem);
                n.removeComponent(cc.Widget);
                var o = n.getChildByName("lblName");
                n.scale = 1.5, o.color = cc.Color.BLACK, o.getComponent(cc.Label).string = t.name.substr(0, 5), n.x = e % 3 * 231 - 234, n.y = 266 - 224 * Math.floor(e / 3), n.parent = this.nodeContent, cc.loader.load({
                    url: t.imgUrl,
                    type: "png"
                }, function (e, t) {
                    e || (n.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t))
                }), n.on(cc.Node.EventType.TOUCH_END, function () {
                    wx.navigateToMiniProgram && wx.navigateToMiniProgram({
                        appId: t.appid,
                        path: t.path,
                        success: function () {
                            console.log("跳转小程序成功");
                            var e = {};
                            e[wxHelper.gameConfig.appname] = t.name, wx.aldSendEvent && (wx.aldSendEvent("侧面入口导量", e), wx.aldSendEvent(wxHelper.gameConfig.appname, t.name), wx.aldSendEvent(t.name, wxHelper.gameConfig.appname))
                        },
                        complete: function (e) {
                            console.log("跳转小程序", e)
                        }
                    })
                })
            }, e.prototype.onDestroy = function () {
                this.onClose && this.onClose()
            }, e.prototype.onClickClose = function () {
                this.node.destroy()
            }, e.prototype.onClickMoreGame = function () {
                wxHelper._config && wx.navigateToMiniProgram && wx.navigateToMiniProgram({
                    appId: wxHelper._config.boxid,
                    path: wxHelper._config.boxpath,
                    success: function () {
                        console.log("跳转小程序成功");
                        var e = {};
                        e[wxHelper.gameConfig.appname] = "盒子", wx.aldSendEvent && wx.aldSendEvent("跳转盒子", e)
                    },
                    complete: function (e) {
                        console.log("跳转小程序", e)
                    }
                })
            }, __decorate([a(cc.Node)], e.prototype, "nodeContent", void 0), __decorate([a(cc.Prefab)], e.prototype, "pfbGameItem", void 0), __decorate([a(cc.Widget)], e.prototype, "wgtMask", void 0), e = __decorate([c], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}], gameBox: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "ff418xe6tBJFoBhhF5qaesC", "gameBox"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, c = o.ccclass, a = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.pfbBoxItem = null, e.nodeContent = null, e
            }

            return __extends(e, t), e.prototype.start = function () {
                this.updateWithData(wxHelper._config.list)
            }, e.prototype.updateWithData = function (e) {
                for (var t = Math.min(e.length, 9), n = 0; n < t; n++) this.addItem(e[n], n)
            }, e.prototype.addItem = function (t, e) {
                var n = cc.instantiate(this.pfbBoxItem);
                n.removeComponent(cc.Widget), n.getChildByName("lblName").getComponent(cc.Label).string = t.name, n.getChildByName("lblAccount").getComponent(cc.Label).string = t.account, n.getChildByName("lblContent").getComponent(cc.Label).string = t.introduce.substr(0, 20) + (20 < t.introduce.length ? ".." : ""), n.parent = this.nodeContent, cc.loader.load({
                    url: t.imgUrl,
                    type: "png"
                }, function (e, t) {
                    e || (n.getChildByName("itemIcon").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t))
                }), n.on(cc.Node.EventType.TOUCH_END, function () {
                    wx.navigateToMiniProgram && wx.navigateToMiniProgram({
                        appId: t.appid,
                        path: t.path,
                        success: function () {
                            console.log("跳转小程序成功");
                            var e = {};
                            e[wxHelper.gameConfig.appname] = t.name, console.log("跳转小程序成功--\x3e", e), wx.aldSendEvent && (wx.aldSendEvent("gameBox导量", e), wx.aldSendEvent(wxHelper.gameConfig.appname, t.name), wx.aldSendEvent(t.name, wxHelper.gameConfig.appname))
                        },
                        complete: function (e) {
                            console.log("跳转小程序", e)
                        }
                    })
                })
            }, __decorate([a(cc.Prefab)], e.prototype, "pfbBoxItem", void 0), __decorate([a(cc.Node)], e.prototype, "nodeContent", void 0), e = __decorate([c], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}], gamesPanel: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "7e844dn0YZL0LbP+vNAFhMl", "gamesPanel"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, c = o.ccclass, a = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.nodeContent = null, e.pfbGameItem = null, e
            }

            return __extends(e, t), e.prototype.updateWithData = function (e) {
                for (var t = this, n = 0; n < e.length; n++) this.addItem(e[n], n);
                this.randomTick(), this.schedule(function () {
                    t.randomTick()
                }, 3)
            }, e.prototype.randomTick = function () {
                for (var e = Math.round(Math.random()) + 1, t = [], n = 0; n < e; n++) t.push(Math.floor(Math.random() * this.nodeContent.childrenCount));
                for (n = 0; n < t.length; n++) this.nodeContent.children[t[n]].runAction(cc.sequence(cc.sequence(cc.rotateTo(.1, 15), cc.rotateTo(.1, -15)).repeat(6), cc.rotateTo(.2, 0)))
            }, e.prototype.addItem = function (t, e) {
                var n = cc.instantiate(this.pfbGameItem);
                n.removeComponent(cc.Widget);
                var o = n.getChildByName("lblName");
                o.color = cc.Color.BLACK, o.getComponent(cc.Label).string = t.name.substr(0, 5), n.scale = .9, n.x = e % 2 ? -80 : 80, n.y = this.nodeContent.height / 2 - 150 * Math.floor(e / 2) - n.width / 2 - 20, n.parent = this.nodeContent, cc.loader.load({
                    url: t.imgUrl,
                    type: "png"
                }, function (e, t) {
                    e || (n.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t))
                }), n.on(cc.Node.EventType.TOUCH_END, function () {
                    wx.navigateToMiniProgram && wx.navigateToMiniProgram({
                        appId: t.appid,
                        path: t.path,
                        success: function () {
                            console.log("跳转小程序成功");
                            var e = {};
                            e[wxHelper.gameConfig.appname] = t.name, wx.aldSendEvent && (wx.aldSendEvent("侧面入口导量", e), wx.aldSendEvent(wxHelper.gameConfig.appname, t.name), wx.aldSendEvent(t.name, wxHelper.gameConfig.appname))
                        },
                        complete: function (e) {
                            console.log("跳转小程序", e)
                        }
                    })
                })
            }, e.prototype.onClickClose = function () {
                var e = this;
                this.node.runAction(cc.sequence(cc.moveBy(.3, -this.nodeContent.width - 70, 0), cc.callFunc(function () {
                    e.node.active = !1
                })))
            }, __decorate([a(cc.Node)], e.prototype, "nodeContent", void 0), __decorate([a(cc.Prefab)], e.prototype, "pfbGameItem", void 0), e = __decorate([c], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}], gmMore: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "346fdfNXWhEj4AUf9OrIPLH", "gmMore"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, c = o.ccclass, a = (o.property, function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }

            return __extends(t, e), t.prototype.onClick = function () {
                sceneManager.showLeftGameList && sceneManager.showLeftGameList(this.node.parent)
            }, t.prototype.onEnable = function () {
                this.node.runAction(cc.sequence(cc.sequence(cc.rotateTo(.2, 10), cc.rotateTo(.2, -10)).repeat(3), cc.rotateTo(.1, 0), cc.delayTime(.5)).repeatForever())
            }, t.prototype.onDisable = function () {
                this.node.stopAllActions()
            }, t = __decorate([c], t)
        }(cc.Component));
        n.default = a, cc._RF.pop()
    }, {}], moreGameList: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "a7bf2nWZPVF85vYMQbxZbeN", "moreGameList"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, c = o.ccclass, a = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.pfbGameItem = null, e.nodeListContent = null, e._itemWidth = 140, e
            }

            return __extends(e, t), e.prototype.updateWithData = function (e) {
                var t = this;
                this.nodeListContent.width = e.length * this._itemWidth;
                for (var n = 0; n < e.length; n++) this.addItem(e[n]);
                this.randomTick(), this.schedule(function () {
                    t.randomTick()
                }, 3)
            }, e.prototype.randomTick = function () {
                for (var e = Math.round(Math.random()) + 1, t = [], n = 0; n < e; n++) t.push(Math.floor(Math.random() * this.nodeListContent.childrenCount));
                for (n = 0; n < t.length; n++) this.nodeListContent.children[t[n]].runAction(cc.sequence(cc.sequence(cc.rotateTo(.1, 15), cc.rotateTo(.1, -15)).repeat(6), cc.rotateTo(.2, 0)))
            }, e.prototype.addItem = function (t) {
                var n = cc.instantiate(this.pfbGameItem);
                n.parent = this.nodeListContent, cc.loader.load({url: t.imgUrl, type: "png"}, function (e, t) {
                    e || (n.getChildByName("icon").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(t))
                }), n.getChildByName("lblName").getComponent(cc.Label).string = t.name.substr(0, 5), n.on(cc.Node.EventType.TOUCH_END, function () {
                    wx.navigateToMiniProgram && wx.navigateToMiniProgram({
                        appId: t.appid,
                        path: t.path,
                        success: function () {
                            console.log("跳转小程序成功");
                            var e = {};
                            e[wxHelper.gameConfig.appname] = t.name, wx.aldSendEvent && (wx.aldSendEvent("更多游戏导量", e), wx.aldSendEvent(wxHelper.gameConfig.appname, t.name), wx.aldSendEvent(t.name, wxHelper.gameConfig.appname))
                        },
                        complete: function (e) {
                            console.log("跳转小程序", e)
                        }
                    })
                })
            }, __decorate([a(cc.Prefab)], e.prototype, "pfbGameItem", void 0), __decorate([a(cc.Node)], e.prototype, "nodeListContent", void 0), e = __decorate([c], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}], startAd: [function (e, t, n) {
        "use strict";
        cc._RF.push(t, "1d460nfuKtAhYcOSd4HEmq5", "startAd"), Object.defineProperty(n, "__esModule", {value: !0});
        var o = cc._decorator, c = o.ccclass, a = o.property, r = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.icon = null, e.btnStart = null, e.wgtMask = null, e
            }

            return __extends(e, t), e.prototype.start = function () {
                this.btnStart.runAction(cc.sequence(cc.scaleTo(.4, 1.2), cc.scaleTo(.4, 1)).repeatForever()), this.wgtMask.target = cc.director.getScene().getComponentInChildren(cc.Canvas).node, this.wgtMask.left = this.wgtMask.right = this.wgtMask.top = this.wgtMask.bottom = 0, this.wgtMask.updateAlignment()
            }, e.prototype.updateWithData = function (e) {
                var n = this, t = this.getParams(e.path);
                if (t && wxHelper._config.left_list) for (var o = 0; o < wxHelper._config.left_list.length; o++) if (wxHelper._config.left_list[o].appid === t) {
                    wxHelper._config.left_list[o];
                    break
                }
                this._config = e, this._config.imgUrl && cc.loader.load({
                    url: this._config.imgUrl,
                    type: "png"
                }, function (e, t) {
                    e || (n.icon.spriteFrame = new cc.SpriteFrame(t))
                })
            }, e.prototype.getParams = function (e) {
                var t = {};
                if (-1 != e.indexOf("?")) for (var n = e.substr(1).split("&"), o = 0; o < n.length; o++) t[n[o].split("=")[0]] = unescape(n[o].split("=")[1]);
                return t
            }, e.prototype.onClickClose = function () {
                this.node.destroy()
            }, e.prototype.onClickStartGame = function () {
                var t = this;
                cc.sys.platform === cc.sys.WECHAT_GAME && this._config && wx.navigateToMiniProgram && wx.navigateToMiniProgram({
                    appId: this._config.appid,
                    path: this._config.path,
                    success: function () {
                        console.log("跳转小程序成功");
                        var e = {};
                        e[wxHelper.gameConfig.appname] = t._config.name, wx.aldSendEvent && (wx.aldSendEvent("首页导量", e), wx.aldSendEvent(wxHelper.gameConfig.appname, t._config.name), wx.aldSendEvent(t._config.name, wxHelper.gameConfig.appname))
                    },
                    complete: function (e) {
                        console.log("跳转小程序", e)
                    }
                })
            }, __decorate([a(cc.Sprite)], e.prototype, "icon", void 0), __decorate([a(cc.Node)], e.prototype, "btnStart", void 0), __decorate([a(cc.Widget)], e.prototype, "wgtMask", void 0), e = __decorate([c], e)
        }(cc.Component);
        n.default = r, cc._RF.pop()
    }, {}]
}, {}, ["GMLaunch", "endAds", "gameBox", "gamesPanel", "gmMore", "moreGameList", "startAd"]);