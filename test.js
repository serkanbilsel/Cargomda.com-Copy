/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
function blogLikeButton(n, t) {
    $.ajax({
        url: "/blog/detay/like",
        method: "POST",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: {
            createDate: n,
            head: t
        },
        success: function(n) {
            if (n.status) {
                $("#likeButton").toggleClass("text-success").toggleClass("bg-light-success");
                var t = parseInt($("#likeCount").text());
                n.likeStatus ? $("#likeCount").text(t + 1) : $("#likeCount").text(t - 1)
            }
        }
    })
}
function shipmentTracking() {
    var n = $(".trace-input").val();
    n.length == 12 ? location.href = "/takip?siparis=" + n : ($(".trace-input").val(""),
    LayoutMessage("Başarısız!", "Lütfen geçerli bir sipariş numarası giriniz."))
}
function showShipmentTrackingDetails() {
    $("#modalDetails").modal("show")
}
!function(n, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document)
            throw new Error("jQuery requires a window with a document");
        return t(n)
    }
    : t(n)
}("undefined" != typeof window ? window : this, function(n, t) {
    "use strict";
    function hr(n, t, i) {
        var r, u = (t = t || f).createElement("script");
        if (u.text = n,
        i)
            for (r in df)
                i[r] && (u[r] = i[r]);
        t.head.appendChild(u).parentNode.removeChild(u)
    }
    function it(n) {
        return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? bt[or.call(n)] || "object" : typeof n
    }
    function hi(n) {
        var t = !!n && "length"in n && n.length
          , i = it(n);
        return !u(n) && !tt(n) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in n)
    }
    function v(n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
    }
    function li(n, t, r) {
        return u(t) ? i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        }) : t.nodeType ? i.grep(n, function(n) {
            return n === t !== r
        }) : "string" != typeof t ? i.grep(n, function(n) {
            return wt.call(t, n) > -1 !== r
        }) : i.filter(t, n, r)
    }
    function wr(n, t) {
        while ((n = n[t]) && 1 !== n.nodeType)
            ;
        return n
    }
    function ne(n) {
        var t = {};
        return i.each(n.match(l) || [], function(n, i) {
            t[i] = !0
        }),
        t
    }
    function ut(n) {
        return n
    }
    function dt(n) {
        throw n;
    }
    function br(n, t, i, r) {
        var f;
        try {
            n && u(f = n.promise) ? f.call(n).done(t).fail(i) : n && u(f = n.then) ? f.call(n, t, i) : t.apply(void 0, [n].slice(r))
        } catch (n) {
            i.apply(void 0, [n])
        }
    }
    function ni() {
        f.removeEventListener("DOMContentLoaded", ni);
        n.removeEventListener("load", ni);
        i.ready()
    }
    function re(n, t) {
        return t.toUpperCase()
    }
    function y(n) {
        return n.replace(te, "ms-").replace(ie, re)
    }
    function at() {
        this.expando = i.expando + at.uid++
    }
    function ee(n) {
        return "true" === n || "false" !== n && ("null" === n ? null : n === +n + "" ? +n : ue.test(n) ? JSON.parse(n) : n)
    }
    function dr(n, t, i) {
        var r;
        if (void 0 === i && 1 === n.nodeType)
            if (r = "data-" + t.replace(fe, "-$&").toLowerCase(),
            "string" == typeof (i = n.getAttribute(r))) {
                try {
                    i = ee(i)
                } catch (n) {}
                o.set(n, t, i)
            } else
                i = void 0;
        return i
    }
    function tu(n, t, r, u) {
        var s, h, c = 20, l = u ? function() {
            return u.cur()
        }
        : function() {
            return i.css(n, t, "")
        }
        , o = l(), e = r && r[3] || (i.cssNumber[t] ? "" : "px"), f = (i.cssNumber[t] || "px" !== e && +o) && vt.exec(i.css(n, t));
        if (f && f[3] !== e) {
            for (o /= 2,
            e = e || f[3],
            f = +o || 1; c--; )
                i.style(n, t, f + e),
                (1 - h) * (1 - (h = l() / o || .5)) <= 0 && (c = 0),
                f /= h;
            f *= 2;
            i.style(n, t, f + e);
            r = r || []
        }
        return r && (f = +f || +o || 0,
        s = r[1] ? f + (r[1] + 1) * r[2] : +r[2],
        u && (u.unit = e,
        u.start = f,
        u.end = s)),
        s
    }
    function oe(n) {
        var r, f = n.ownerDocument, u = n.nodeName, t = ai[u];
        return t || (r = f.body.appendChild(f.createElement(u)),
        t = i.css(r, "display"),
        r.parentNode.removeChild(r),
        "none" === t && (t = "block"),
        ai[u] = t,
        t)
    }
    function ft(n, t) {
        for (var e, u, f = [], i = 0, o = n.length; i < o; i++)
            (u = n[i]).style && (e = u.style.display,
            t ? ("none" === e && (f[i] = r.get(u, "display") || null,
            f[i] || (u.style.display = "")),
            "" === u.style.display && ti(u) && (f[i] = oe(u))) : "none" !== e && (f[i] = "none",
            r.set(u, "display", e)));
        for (i = 0; i < o; i++)
            null != f[i] && (n[i].style.display = f[i]);
        return n
    }
    function s(n, t) {
        var r;
        return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [],
        void 0 === t || t && v(n, t) ? i.merge([n], r) : r
    }
    function vi(n, t) {
        for (var i = 0, u = n.length; i < u; i++)
            r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }
    function eu(n, t, r, u, f) {
        for (var e, o, p, a, w, v, h = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if ((e = n[l]) || 0 === e)
                if ("object" === it(e))
                    i.merge(y, e.nodeType ? [e] : e);
                else if (fu.test(e)) {
                    for (o = o || h.appendChild(t.createElement("div")),
                    p = (ru.exec(e) || ["", ""])[1].toLowerCase(),
                    a = c[p] || c._default,
                    o.innerHTML = a[1] + i.htmlPrefilter(e) + a[2],
                    v = a[0]; v--; )
                        o = o.lastChild;
                    i.merge(y, o.childNodes);
                    (o = h.firstChild).textContent = ""
                } else
                    y.push(t.createTextNode(e));
        for (h.textContent = "",
        l = 0; e = y[l++]; )
            if (u && i.inArray(e, u) > -1)
                f && f.push(e);
            else if (w = i.contains(e.ownerDocument, e),
            o = s(h.appendChild(e), "script"),
            w && vi(o),
            r)
                for (v = 0; e = o[v++]; )
                    uu.test(e.type || "") && r.push(e);
        return h
    }
    function ri() {
        return !0
    }
    function et() {
        return !1
    }
    function su() {
        try {
            return f.activeElement
        } catch (n) {}
    }
    function yi(n, t, r, u, f, e) {
        var o, s;
        if ("object" == typeof t) {
            "string" != typeof r && (u = u || r,
            r = void 0);
            for (s in t)
                yi(n, s, r, u, t[s], e);
            return n
        }
        if (null == u && null == f ? (f = r,
        u = r = void 0) : null == f && ("string" == typeof r ? (f = u,
        u = void 0) : (f = u,
        u = r,
        r = void 0)),
        !1 === f)
            f = et;
        else if (!f)
            return n;
        return 1 === e && (o = f,
        (f = function(n) {
            return i().off(n),
            o.apply(this, arguments)
        }
        ).guid = o.guid || (o.guid = i.guid++)),
        n.each(function() {
            i.event.add(this, t, f, u, r)
        })
    }
    function hu(n, t) {
        return v(n, "table") && v(11 !== t.nodeType ? t : t.firstChild, "tr") ? i(n).children("tbody")[0] || n : n
    }
    function ye(n) {
        return n.type = (null !== n.getAttribute("type")) + "/" + n.type,
        n
    }
    function pe(n) {
        return "true/" === (n.type || "").slice(0, 5) ? n.type = n.type.slice(5) : n.removeAttribute("type"),
        n
    }
    function cu(n, t) {
        var u, c, f, s, h, l, a, e;
        if (1 === t.nodeType) {
            if (r.hasData(n) && (s = r.access(n),
            h = r.set(t, s),
            e = s.events)) {
                delete h.handle;
                h.events = {};
                for (f in e)
                    for (u = 0,
                    c = e[f].length; u < c; u++)
                        i.event.add(t, f, e[f][u])
            }
            o.hasData(n) && (l = o.access(n),
            a = i.extend({}, l),
            o.set(t, a))
        }
    }
    function we(n, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && iu.test(n.type) ? t.checked = n.checked : "input" !== i && "textarea" !== i || (t.defaultValue = n.defaultValue)
    }
    function ot(n, t, f, o) {
        t = er.apply([], t);
        var l, w, a, v, h, b, c = 0, y = n.length, d = y - 1, p = t[0], k = u(p);
        if (k || y > 1 && "string" == typeof p && !e.checkClone && ae.test(p))
            return n.each(function(i) {
                var r = n.eq(i);
                k && (t[0] = p.call(this, i, r.html()));
                ot(r, t, f, o)
            });
        if (y && (l = eu(t, n[0].ownerDocument, !1, n, o),
        w = l.firstChild,
        1 === l.childNodes.length && (l = w),
        w || o)) {
            for (v = (a = i.map(s(l, "script"), ye)).length; c < y; c++)
                h = l,
                c !== d && (h = i.clone(h, !0, !0),
                v && i.merge(a, s(h, "script"))),
                f.call(n[c], h, c);
            if (v)
                for (b = a[a.length - 1].ownerDocument,
                i.map(a, pe),
                c = 0; c < v; c++)
                    h = a[c],
                    uu.test(h.type || "") && !r.access(h, "globalEval") && i.contains(b, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? i._evalUrl && i._evalUrl(h.src) : hr(h.textContent.replace(ve, ""), b, h))
        }
        return n
    }
    function lu(n, t, r) {
        for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++)
            r || 1 !== u.nodeType || i.cleanData(s(u)),
            u.parentNode && (r && i.contains(u.ownerDocument, u) && vi(s(u, "script")),
            u.parentNode.removeChild(u));
        return n
    }
    function yt(n, t, r) {
        var o, s, h, f, u = n.style;
        return (r = r || ui(n)) && ("" !== (f = r.getPropertyValue(t) || r[t]) || i.contains(n.ownerDocument, n) || (f = i.style(n, t)),
        !e.pixelBoxStyles() && pi.test(f) && be.test(t) && (o = u.width,
        s = u.minWidth,
        h = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = f,
        f = r.width,
        u.width = o,
        u.minWidth = s,
        u.maxWidth = h)),
        void 0 !== f ? f + "" : f
    }
    function au(n, t) {
        return {
            get: function() {
                if (!n())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function ge(n) {
        if (n in wu)
            return n;
        for (var i = n[0].toUpperCase() + n.slice(1), t = pu.length; t--; )
            if ((n = pu[t] + i)in wu)
                return n
    }
    function bu(n) {
        var t = i.cssProps[n];
        return t || (t = i.cssProps[n] = ge(n) || n),
        t
    }
    function ku(n, t, i) {
        var r = vt.exec(t);
        return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
    }
    function wi(n, t, r, u, f, e) {
        var o = "width" === t ? 1 : 0
          , h = 0
          , s = 0;
        if (r === (u ? "border" : "content"))
            return 0;
        for (; o < 4; o += 2)
            "margin" === r && (s += i.css(n, r + w[o], !0, f)),
            u ? ("content" === r && (s -= i.css(n, "padding" + w[o], !0, f)),
            "margin" !== r && (s -= i.css(n, "border" + w[o] + "Width", !0, f))) : (s += i.css(n, "padding" + w[o], !0, f),
            "padding" !== r ? s += i.css(n, "border" + w[o] + "Width", !0, f) : h += i.css(n, "border" + w[o] + "Width", !0, f));
        return !u && e >= 0 && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - .5))),
        s
    }
    function du(n, t, r) {
        var f = ui(n)
          , u = yt(n, t, f)
          , s = "border-box" === i.css(n, "boxSizing", !1, f)
          , o = s;
        if (pi.test(u)) {
            if (!r)
                return u;
            u = "auto"
        }
        return o = o && (e.boxSizingReliable() || u === n.style[t]),
        ("auto" === u || !parseFloat(u) && "inline" === i.css(n, "display", !1, f)) && (u = n["offset" + t[0].toUpperCase() + t.slice(1)],
        o = !0),
        (u = parseFloat(u) || 0) + wi(n, t, r || (s ? "border" : "content"), o, f, u) + "px"
    }
    function h(n, t, i, r, u) {
        return new h.prototype.init(n,t,i,r,u)
    }
    function bi() {
        fi && (!1 === f.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(bi) : n.setTimeout(bi, i.fx.interval),
        i.fx.tick())
    }
    function tf() {
        return n.setTimeout(function() {
            st = void 0
        }),
        st = Date.now()
    }
    function ei(n, t) {
        var u, r = 0, i = {
            height: n
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (u = w[r])] = i["padding" + u] = n;
        return t && (i.opacity = i.width = n),
        i
    }
    function rf(n, t, i) {
        for (var u, f = (a.tweeners[t] || []).concat(a.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n))
                return u
    }
    function no(n, t, u) {
        var f, y, w, c, b, h, o, l, k = "width"in t || "height"in t, v = this, p = {}, s = n.style, a = n.nodeType && ti(n), e = r.get(n, "fxshow");
        u.queue || (null == (c = i._queueHooks(n, "fx")).unqueued && (c.unqueued = 0,
        b = c.empty.fire,
        c.empty.fire = function() {
            c.unqueued || b()
        }
        ),
        c.unqueued++,
        v.always(function() {
            v.always(function() {
                c.unqueued--;
                i.queue(n, "fx").length || c.empty.fire()
            })
        }));
        for (f in t)
            if (y = t[f],
            gu.test(y)) {
                if (delete t[f],
                w = w || "toggle" === y,
                y === (a ? "hide" : "show")) {
                    if ("show" !== y || !e || void 0 === e[f])
                        continue;
                    a = !0
                }
                p[f] = e && e[f] || i.style(n, f)
            }
        if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p)) {
            k && 1 === n.nodeType && (u.overflow = [s.overflow, s.overflowX, s.overflowY],
            null == (o = e && e.display) && (o = r.get(n, "display")),
            "none" === (l = i.css(n, "display")) && (o ? l = o : (ft([n], !0),
            o = n.style.display || o,
            l = i.css(n, "display"),
            ft([n]))),
            ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (h || (v.done(function() {
                s.display = o
            }),
            null == o && (l = s.display,
            o = "none" === l ? "" : l)),
            s.display = "inline-block"));
            u.overflow && (s.overflow = "hidden",
            v.always(function() {
                s.overflow = u.overflow[0];
                s.overflowX = u.overflow[1];
                s.overflowY = u.overflow[2]
            }));
            h = !1;
            for (f in p)
                h || (e ? "hidden"in e && (a = e.hidden) : e = r.access(n, "fxshow", {
                    display: o
                }),
                w && (e.hidden = !a),
                a && ft([n], !0),
                v.done(function() {
                    a || ft([n]);
                    r.remove(n, "fxshow");
                    for (f in p)
                        i.style(n, f, p[f])
                })),
                h = rf(a ? e[f] : 0, f, v),
                f in e || (e[f] = h.start,
                a && (h.end = h.start,
                h.start = 0))
        }
    }
    function to(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = y(r),
            e = t[f],
            u = n[r],
            Array.isArray(u) && (e = u[1],
            u = n[r] = u[0]),
            r !== f && (n[f] = u,
            delete n[r]),
            (o = i.cssHooks[f]) && "expand"in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u)
                    r in n || (n[r] = u[r],
                    t[r] = e)
            } else
                t[f] = e
    }
    function a(n, t, r) {
        var o, s, h = 0, v = a.prefilters.length, e = i.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (s)
                return !1;
            for (var o = st || tf(), t = Math.max(0, f.startTime + f.duration - o), i = 1 - (t / f.duration || 0), r = 0, u = f.tweens.length; r < u; r++)
                f.tweens[r].run(i);
            return e.notifyWith(n, [f, i, t]),
            i < 1 && u ? t : (u || e.notifyWith(n, [f, 1, 0]),
            e.resolveWith(n, [f]),
            !1)
        }, f = e.promise({
            elem: n,
            props: i.extend({}, t),
            opts: i.extend(!0, {
                specialEasing: {},
                easing: i.easing._default
            }, r),
            originalProperties: t,
            originalOptions: r,
            startTime: st || tf(),
            duration: r.duration,
            tweens: [],
            createTween: function(t, r) {
                var u = i.Tween(n, f.opts, t, r, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(u),
                u
            },
            stop: function(t) {
                var i = 0
                  , r = t ? f.tweens.length : 0;
                if (s)
                    return this;
                for (s = !0; i < r; i++)
                    f.tweens[i].run(1);
                return t ? (e.notifyWith(n, [f, 1, 0]),
                e.resolveWith(n, [f, t])) : e.rejectWith(n, [f, t]),
                this
            }
        }), c = f.props;
        for (to(c, f.opts.specialEasing); h < v; h++)
            if (o = a.prefilters[h].call(f, n, c, f.opts))
                return u(o.stop) && (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)),
                o;
        return i.map(c, rf, f),
        u(f.opts.start) && f.opts.start.call(n, f),
        f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always),
        i.fx.timer(i.extend(l, {
            elem: n,
            anim: f,
            queue: f.opts.queue
        })),
        f
    }
    function g(n) {
        return (n.match(l) || []).join(" ")
    }
    function nt(n) {
        return n.getAttribute && n.getAttribute("class") || ""
    }
    function ki(n) {
        return Array.isArray(n) ? n : "string" == typeof n ? n.match(l) || [] : []
    }
    function tr(n, t, r, u) {
        var f;
        if (Array.isArray(t))
            i.each(t, function(t, i) {
                r || io.test(n) ? u(n, i) : tr(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
            });
        else if (r || "object" !== it(t))
            u(n, t);
        else
            for (f in t)
                tr(n + "[" + f + "]", t[f], r, u)
    }
    function af(n) {
        return function(t, i) {
            "string" != typeof t && (i = t,
            t = "*");
            var r, f = 0, e = t.toLowerCase().match(l) || [];
            if (u(i))
                while (r = e[f++])
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (n[r] = n[r] || []).unshift(i)) : (n[r] = n[r] || []).push(i)
        }
    }
    function vf(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0,
            i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s),
                e(s),
                !1)
            }),
            h
        }
        var f = {}
          , o = n === ir;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }
    function ur(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t)
            void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u),
        n
    }
    function lo(n, t, i) {
        for (var e, u, f, o, s = n.contents, r = n.dataTypes; "*" === r[0]; )
            r.shift(),
            void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (u in s)
                if (s[u] && s[u].test(e)) {
                    r.unshift(u);
                    break
                }
        if (r[0]in i)
            f = r[0];
        else {
            for (u in i) {
                if (!r[0] || n.converters[u + " " + r[0]]) {
                    f = u;
                    break
                }
                o || (o = u)
            }
            f = f || o
        }
        if (f)
            return f !== r[0] && r.unshift(f),
            i[f]
    }
    function ao(n, t, i, r) {
        var h, u, f, s, e, o = {}, c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters)
                o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u; )
            if (n.responseFields[u] && (i[n.responseFields[u]] = t),
            !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
            e = u,
            u = c.shift())
                if ("*" === u)
                    u = e;
                else if ("*" !== e && e !== u) {
                    if (!(f = o[e + " " + u] || o["* " + u]))
                        for (h in o)
                            if ((s = h.split(" "))[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                                !0 === f ? f = o[h] : !0 !== o[h] && (u = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (!0 !== f)
                        if (f && n.throws)
                            t = f(t);
                        else
                            try {
                                t = f(t)
                            } catch (n) {
                                return {
                                    state: "parsererror",
                                    error: f ? n : "No conversion from " + e + " to " + u
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    var k = [], f = n.document, bf = Object.getPrototypeOf, d = k.slice, er = k.concat, si = k.push, wt = k.indexOf, bt = {}, or = bt.toString, kt = bt.hasOwnProperty, sr = kt.toString, kf = sr.call(Object), e = {}, u = function(n) {
        return "function" == typeof n && "number" != typeof n.nodeType
    }, tt = function(n) {
        return null != n && n === n.window
    }, df = {
        type: !0,
        src: !0,
        noModule: !0
    }, i = function(n, t) {
        return new i.fn.init(n,t)
    }, gf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, b, ci, ar, vr, yr, pr, l, kr, gt, lt, ai, fu, st, fi, gu, nf, uf, ht, ff, ef, of, di, gi, yf, ct, fr, oi, pf, wf;
    i.fn = i.prototype = {
        jquery: "3.3.1",
        constructor: i,
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(n) {
            return null == n ? d.call(this) : n < 0 ? this[n + this.length] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this,
            t
        },
        each: function(n) {
            return i.each(this, n)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length
              , t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: si,
        sort: k.sort,
        splice: k.splice
    };
    i.extend = i.fn.extend = function() {
        var o, e, t, r, s, h, n = arguments[0] || {}, f = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof n && (c = n,
        n = arguments[f] || {},
        f++),
        "object" == typeof n || u(n) || (n = {}),
        f === l && (n = this,
        f--); f < l; f++)
            if (null != (o = arguments[f]))
                for (e in o)
                    t = n[e],
                    n !== (r = o[e]) && (c && r && (i.isPlainObject(r) || (s = Array.isArray(r))) ? (s ? (s = !1,
                    h = t && Array.isArray(t) ? t : []) : h = t && i.isPlainObject(t) ? t : {},
                    n[e] = i.extend(c, h, r)) : void 0 !== r && (n[e] = r));
        return n
    }
    ;
    i.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isPlainObject: function(n) {
            var t, i;
            return !(!n || "[object Object]" !== or.call(n)) && (!(t = bf(n)) || "function" == typeof (i = kt.call(t, "constructor") && t.constructor) && sr.call(i) === kf)
        },
        isEmptyObject: function(n) {
            for (var t in n)
                return !1;
            return !0
        },
        globalEval: function(n) {
            hr(n)
        },
        each: function(n, t) {
            var r, i = 0;
            if (hi(n)) {
                for (r = n.length; i < r; i++)
                    if (!1 === t.call(n[i], i, n[i]))
                        break
            } else
                for (i in n)
                    if (!1 === t.call(n[i], i, n[i]))
                        break;
            return n
        },
        trim: function(n) {
            return null == n ? "" : (n + "").replace(gf, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (hi(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : si.call(r, n)),
            r
        },
        inArray: function(n, t, i) {
            return null == t ? -1 : wt.call(t, n, i)
        },
        merge: function(n, t) {
            for (var u = +t.length, i = 0, r = n.length; i < u; i++)
                n[r++] = t[i];
            return n.length = r,
            n
        },
        grep: function(n, t, i) {
            for (var f, u = [], r = 0, e = n.length, o = !i; r < e; r++)
                (f = !t(n[r], r)) !== o && u.push(n[r]);
            return u
        },
        map: function(n, t, i) {
            var e, u, r = 0, f = [];
            if (hi(n))
                for (e = n.length; r < e; r++)
                    null != (u = t(n[r], r, i)) && f.push(u);
            else
                for (r in n)
                    null != (u = t(n[r], r, i)) && f.push(u);
            return er.apply([], f)
        },
        guid: 1,
        support: e
    });
    "function" == typeof Symbol && (i.fn[Symbol.iterator] = k[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
        bt["[object " + t + "]"] = t.toLowerCase()
    });
    b = function(n) {
        function u(n, t, r, u) {
            var s, p, l, a, w, d, g, y = t && t.ownerDocument, v = t ? t.nodeType : 9;
            if (r = r || [],
            "string" != typeof n || !n || 1 !== v && 9 !== v && 11 !== v)
                return r;
            if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t),
            t = t || i,
            h)) {
                if (11 !== v && (w = cr.exec(n)))
                    if (s = w[1]) {
                        if (9 === v) {
                            if (!(l = t.getElementById(s)))
                                return r;
                            if (l.id === s)
                                return r.push(l),
                                r
                        } else if (y && (l = y.getElementById(s)) && et(t, l) && l.id === s)
                            return r.push(l),
                            r
                    } else {
                        if (w[2])
                            return k.apply(r, t.getElementsByTagName(n)),
                            r;
                        if ((s = w[3]) && e.getElementsByClassName && t.getElementsByClassName)
                            return k.apply(r, t.getElementsByClassName(s)),
                            r
                    }
                if (e.qsa && !lt[n + " "] && (!o || !o.test(n))) {
                    if (1 !== v)
                        y = t,
                        g = n;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(vi, yi) : t.setAttribute("id", a = f),
                        p = (d = ft(n)).length; p--; )
                            d[p] = "#" + a + " " + yt(d[p]);
                        g = d.join(",");
                        y = ni.test(n) && ri(t.parentNode) || t
                    }
                    if (g)
                        try {
                            return k.apply(r, y.querySelectorAll(g)),
                            r
                        } catch (n) {} finally {
                            a === f && t.removeAttribute("id")
                        }
                }
            }
            return si(n.replace(at, "$1"), t, r, u)
        }
        function ti() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()],
                n[r + " "] = u
            }
            var i = [];
            return n
        }
        function l(n) {
            return n[f] = !0,
            n
        }
        function a(n) {
            var t = i.createElement("fieldset");
            try {
                return !!n(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }
        function ii(n, i) {
            for (var r = n.split("|"), u = r.length; u--; )
                t.attrHandle[r[u]] = i
        }
        function wi(n, t) {
            var i = t && n
              , r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t)
                        return -1;
            return n ? 1 : -1
        }
        function ar(n) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === n
            }
        }
        function vr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }
        function bi(n) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && lr(t) === n : t.disabled === n : "label"in t && t.disabled === n
            }
        }
        function it(n) {
            return l(function(t) {
                return t = +t,
                l(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--; )
                        i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }
        function ri(n) {
            return n && "undefined" != typeof n.getElementsByTagName && n
        }
        function ki() {}
        function yt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++)
                i += n[t].value;
            return i
        }
        function pt(n, t, i) {
            var r = t.dir
              , u = t.next
              , e = u || r
              , o = i && "parentNode" === e
              , s = di++;
            return t.first ? function(t, i, u) {
                while (t = t[r])
                    if (1 === t.nodeType || o)
                        return n(t, i, u);
                return !1
            }
            : function(t, i, h) {
                var c, l, a, y = [v, s];
                if (h) {
                    while (t = t[r])
                        if ((1 === t.nodeType || o) && n(t, i, h))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (a = t[f] || (t[f] = {}),
                            l = a[t.uniqueID] || (a[t.uniqueID] = {}),
                            u && u === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((c = l[e]) && c[0] === v && c[1] === s)
                                    return y[2] = c[2];
                                if (l[e] = y,
                                y[2] = n(t, i, h))
                                    return !0
                            }
                return !1
            }
        }
        function ui(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--; )
                    if (!n[u](t, i, r))
                        return !1;
                return !0
            }
            : n[0]
        }
        function yr(n, t, i) {
            for (var r = 0, f = t.length; r < f; r++)
                u(n, t[r], i);
            return i
        }
        function wt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)
                (e = n[f]) && (i && !i(e, r, u) || (o.push(e),
                h && t.push(f)));
            return o
        }
        function fi(n, t, i, r, u, e) {
            return r && !r[f] && (r = fi(r)),
            u && !u[f] && (u = fi(u, e)),
            l(function(f, e, o, s) {
                var l, c, a, p = [], y = [], w = e.length, b = f || yr(t || "*", o.nodeType ? [o] : o, []), v = !n || !f && t ? b : wt(b, p, n, o, s), h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s),
                r)
                    for (l = wt(h, y),
                    r(l, [], o, s),
                    c = l.length; c--; )
                        (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [],
                            c = h.length; c--; )
                                (a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--; )
                            (a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else
                    h = wt(h === e ? h.splice(w, h.length) : h),
                    u ? u(null, e, h, s) : k.apply(e, h)
            })
        }
        function ei(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = pt(function(n) {
                return n === o
            }, c, !0), a = pt(function(n) {
                return nt(o, n) > -1
            }, c, !0), e = [function(n, t, i) {
                var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                return o = null,
                r
            }
            ]; i < s; i++)
                if (u = t.relative[n[i].type])
                    e = [pt(ui(e), u)];
                else {
                    if ((u = t.filter[n[i].type].apply(null, n[i].matches))[f]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type])
                                break;
                        return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({
                            value: " " === n[i - 2].type ? "*" : ""
                        })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && yt(n))
                    }
                    e.push(u)
                }
            return ui(e)
        }
        function pr(n, r) {
            var f = r.length > 0
              , e = n.length > 0
              , o = function(o, s, c, l, a) {
                var y, nt, d, g = 0, p = "0", tt = o && [], w = [], it = ht, rt = o || e && t.find.TAG("*", a), ut = v += null == it ? 1 : Math.random() || .1, ft = rt.length;
                for (a && (ht = s === i || s || a); p !== ft && null != (y = rt[p]); p++) {
                    if (e && y) {
                        for (nt = 0,
                        s || y.ownerDocument === i || (b(y),
                        c = !h); d = n[nt++]; )
                            if (d(y, s || i, c)) {
                                l.push(y);
                                break
                            }
                        a && (v = ut)
                    }
                    f && ((y = !d && y) && g--,
                    o && tt.push(y))
                }
                if (g += p,
                f && p !== g) {
                    for (nt = 0; d = r[nt++]; )
                        d(tt, w, s, c);
                    if (o) {
                        if (g > 0)
                            while (p--)
                                tt[p] || w[p] || (w[p] = nr.call(l));
                        w = wt(w)
                    }
                    k.apply(l, w);
                    a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l)
                }
                return a && (v = ut,
                ht = it),
                tt
            };
            return f ? l(o) : o
        }
        var rt, e, t, st, oi, ft, bt, si, ht, w, ut, b, i, s, h, o, d, ct, et, f = "sizzle" + 1 * new Date, c = n.document, v = 0, di = 0, hi = ti(), ci = ti(), lt = ti(), kt = function(n, t) {
            return n === t && (ut = !0),
            0
        }, gi = {}.hasOwnProperty, g = [], nr = g.pop, tr = g.push, k = g.push, li = g.slice, nt = function(n, t) {
            for (var i = 0, r = n.length; i < r; i++)
                if (n[i] === t)
                    return i;
            return -1
        }, dt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", r = "[\\x20\\t\\r\\n\\f]", tt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ai = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]", gt = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ai + ")*)|.*)\\)|)", ir = new RegExp(r + "+","g"), at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$","g"), rr = new RegExp("^" + r + "*," + r + "*"), ur = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"), fr = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]","g"), er = new RegExp(gt), or = new RegExp("^" + tt + "$"), vt = {
            ID: new RegExp("^#(" + tt + ")"),
            CLASS: new RegExp("^\\.(" + tt + ")"),
            TAG: new RegExp("^(" + tt + "|[*])"),
            ATTR: new RegExp("^" + ai),
            PSEUDO: new RegExp("^" + gt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)","i"),
            bool: new RegExp("^(?:" + dt + ")$","i"),
            needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)","i")
        }, sr = /^(?:input|select|textarea|button)$/i, hr = /^h\d$/i, ot = /^[^{]+\{\s*\[native \w/, cr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ni = /[+~]/, y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)","ig"), p = function(n, t, i) {
            var r = "0x" + t - 65536;
            return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, vi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, yi = function(n, t) {
            return t ? "\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
        }, pi = function() {
            b()
        }, lr = pt(function(n) {
            return !0 === n.disabled && ("form"in n || "label"in n)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            k.apply(g = li.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType
        } catch (n) {
            k = {
                apply: g.length ? function(n, t) {
                    tr.apply(n, li.call(t))
                }
                : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++]; )
                        ;
                    n.length = i - 1
                }
            }
        }
        e = u.support = {};
        oi = u.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ;
        b = u.setDocument = function(n) {
            var v, u, l = n ? n.ownerDocument || n : c;
            return l !== i && 9 === l.nodeType && l.documentElement ? (i = l,
            s = i.documentElement,
            h = !oi(i),
            c !== i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", pi, !1) : u.attachEvent && u.attachEvent("onunload", pi)),
            e.attributes = a(function(n) {
                return n.className = "i",
                !n.getAttribute("className")
            }),
            e.getElementsByTagName = a(function(n) {
                return n.appendChild(i.createComment("")),
                !n.getElementsByTagName("*").length
            }),
            e.getElementsByClassName = ot.test(i.getElementsByClassName),
            e.getById = a(function(n) {
                return s.appendChild(n).id = f,
                !i.getElementsByName || !i.getElementsByName(f).length
            }),
            e.getById ? (t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }
            ,
            t.find.ID = function(n, t) {
                if ("undefined" != typeof t.getElementById && h) {
                    var i = t.getElementById(n);
                    return i ? [i] : []
                }
            }
            ) : (t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }
            ,
            t.find.ID = function(n, t) {
                if ("undefined" != typeof t.getElementById && h) {
                    var r, u, f, i = t.getElementById(n);
                    if (i) {
                        if ((r = i.getAttributeNode("id")) && r.value === n)
                            return [i];
                        for (f = t.getElementsByName(n),
                        u = 0; i = f[u++]; )
                            if ((r = i.getAttributeNode("id")) && r.value === n)
                                return [i]
                    }
                    return []
                }
            }
            ),
            t.find.TAG = e.getElementsByTagName ? function(n, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : e.qsa ? t.querySelectorAll(n) : void 0
            }
            : function(n, t) {
                var i, r = [], f = 0, u = t.getElementsByTagName(n);
                if ("*" === n) {
                    while (i = u[f++])
                        1 === i.nodeType && r.push(i);
                    return r
                }
                return u
            }
            ,
            t.find.CLASS = e.getElementsByClassName && function(n, t) {
                if ("undefined" != typeof t.getElementsByClassName && h)
                    return t.getElementsByClassName(n)
            }
            ,
            d = [],
            o = [],
            (e.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + dt + ")");
                n.querySelectorAll("[id~=" + f + "-]").length || o.push("~=");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + f + "+*").length || o.push(".#.+[+~]")
            }),
            a(function(n) {
                n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
                s.appendChild(n).disabled = !0;
                2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })),
            (e.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                e.disconnectedMatch = ct.call(n, "*");
                ct.call(n, "[s!='']:x");
                d.push("!=", gt)
            }),
            o = o.length && new RegExp(o.join("|")),
            d = d.length && new RegExp(d.join("|")),
            v = ot.test(s.compareDocumentPosition),
            et = v || ot.test(s.contains) ? function(n, t) {
                var r = 9 === n.nodeType ? n.documentElement : n
                  , i = t && t.parentNode;
                return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
            }
            : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n)
                            return !0;
                return !1
            }
            ,
            kt = v ? function(n, t) {
                if (n === t)
                    return ut = !0,
                    0;
                var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1) || !e.sortDetached && t.compareDocumentPosition(n) === r ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(n, t) {
                if (n === t)
                    return ut = !0,
                    0;
                var r, u = 0, o = n.parentNode, s = t.parentNode, f = [n], e = [t];
                if (!o || !s)
                    return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                if (o === s)
                    return wi(n, t);
                for (r = n; r = r.parentNode; )
                    f.unshift(r);
                for (r = t; r = r.parentNode; )
                    e.unshift(r);
                while (f[u] === e[u])
                    u++;
                return u ? wi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
            }
            ,
            i) : i
        }
        ;
        u.matches = function(n, t) {
            return u(n, null, null, t)
        }
        ;
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== i && b(n),
            t = t.replace(fr, "='$1']"),
            e.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t)))
                try {
                    var r = ct.call(n, t);
                    if (r || e.disconnectedMatch || n.document && 11 !== n.document.nodeType)
                        return r
                } catch (n) {}
            return u(t, i, null, [n]).length > 0
        }
        ;
        u.contains = function(n, t) {
            return (n.ownerDocument || n) !== i && b(n),
            et(n, t)
        }
        ;
        u.attr = function(n, r) {
            (n.ownerDocument || n) !== i && b(n);
            var f = t.attrHandle[r.toLowerCase()]
              , u = f && gi.call(t.attrHandle, r.toLowerCase()) ? f(n, r, !h) : void 0;
            return void 0 !== u ? u : e.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
        }
        ;
        u.escape = function(n) {
            return (n + "").replace(vi, yi)
        }
        ;
        u.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        }
        ;
        u.uniqueSort = function(n) {
            var r, u = [], t = 0, i = 0;
            if (ut = !e.detectDuplicates,
            w = !e.sortStable && n.slice(0),
            n.sort(kt),
            ut) {
                while (r = n[i++])
                    r === n[i] && (t = u.push(i));
                while (t--)
                    n.splice(u[t], 1)
            }
            return w = null,
            n
        }
        ;
        st = u.getText = function(n) {
            var r, i = "", u = 0, t = n.nodeType;
            if (t) {
                if (1 === t || 9 === t || 11 === t) {
                    if ("string" == typeof n.textContent)
                        return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling)
                        i += st(n)
                } else if (3 === t || 4 === t)
                    return n.nodeValue
            } else
                while (r = n[u++])
                    i += st(r);
            return i
        }
        ;
        (t = u.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: vt,
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
                ATTR: function(n) {
                    return n[1] = n[1].replace(y, p),
                    n[3] = (n[3] || n[4] || n[5] || "").replace(y, p),
                    "~=" === n[2] && (n[3] = " " + n[3] + " "),
                    n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(),
                    "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]),
                    n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])),
                    n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]),
                    n
                },
                PSEUDO: function(n) {
                    var i, t = !n[6] && n[2];
                    return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && er.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i),
                    n[2] = t.slice(0, i)),
                    n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(y, p).toLowerCase();
                    return "*" === n ? function() {
                        return !0
                    }
                    : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = hi[n + " "];
                    return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
                        return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return null == f ? "!=" === t : !t || (f += "",
                        "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f.replace(ir, " ") + " ").indexOf(i) > -1 : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = "nth" !== n.slice(0, 3)
                      , o = "last" !== n.slice(-4)
                      , e = "of-type" === t;
                    return 1 === r && 0 === u ? function(n) {
                        return !!n.parentNode
                    }
                    : function(t, i, h) {
                        var p, d, y, c, a, w, b = s !== o ? "nextSibling" : "previousSibling", k = t.parentNode, nt = e && t.nodeName.toLowerCase(), g = !h && !e, l = !1;
                        if (k) {
                            if (s) {
                                while (b) {
                                    for (c = t; c = c[b]; )
                                        if (e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType)
                                            return !1;
                                    w = b = "only" === n && !w && "nextSibling"
                                }
                                return !0
                            }
                            if (w = [o ? k.firstChild : k.lastChild],
                            o && g) {
                                for (l = (a = (p = (d = (y = (c = k)[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]) && p[2],
                                c = a && k.childNodes[a]; c = ++a && c && c[b] || (l = a = 0) || w.pop(); )
                                    if (1 === c.nodeType && ++l && c === t) {
                                        d[n] = [v, a, l];
                                        break
                                    }
                            } else if (g && (l = a = (p = (d = (y = (c = t)[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]),
                            !1 === l)
                                while (c = ++a && c && c[b] || (l = a = 0) || w.pop())
                                    if ((e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && ((d = (y = c[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] = [v, l]),
                                    c === t))
                                        break;
                            return (l -= u) === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return r[f] ? r(i) : r.length > 1 ? (e = [n, n, "", i],
                    t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
                        for (var e, u = r(n, i), f = u.length; f--; )
                            n[e = nt(n, u[f])] = !(t[e] = u[f])
                    }) : function(n) {
                        return r(n, 0, e)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: l(function(n) {
                    var t = []
                      , r = []
                      , i = bt(n.replace(at, "$1"));
                    return i[f] ? l(function(n, t, r, u) {
                        for (var e, o = i(n, null, u, []), f = n.length; f--; )
                            (e = o[f]) && (n[f] = !(t[f] = e))
                    }) : function(n, u, f) {
                        return t[0] = n,
                        i(t, null, f, r),
                        t[0] = null,
                        !r.pop()
                    }
                }),
                has: l(function(n) {
                    return function(t) {
                        return u(n, t).length > 0
                    }
                }),
                contains: l(function(n) {
                    return n = n.replace(y, p),
                    function(t) {
                        return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                    }
                }),
                lang: l(function(n) {
                    return or.test(n || "") || u.error("unsupported lang: " + n),
                    n = n.replace(y, p).toLowerCase(),
                    function(t) {
                        var i;
                        do
                            if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === s
                },
                focus: function(n) {
                    return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: bi(!1),
                disabled: bi(!0),
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && !!n.checked || "option" === t && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex,
                    !0 === n.selected
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return hr.test(n.nodeName)
                },
                input: function(n) {
                    return sr.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return "input" === t && "button" === n.type || "button" === t
                },
                text: function(n) {
                    var t;
                    return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: it(function() {
                    return [0]
                }),
                last: it(function(n, t) {
                    return [t - 1]
                }),
                eq: it(function(n, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: it(function(n, t) {
                    for (var i = 0; i < t; i += 2)
                        n.push(i);
                    return n
                }),
                odd: it(function(n, t) {
                    for (var i = 1; i < t; i += 2)
                        n.push(i);
                    return n
                }),
                lt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; --r >= 0; )
                        n.push(r);
                    return n
                }),
                gt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t; )
                        n.push(r);
                    return n
                })
            }
        }).pseudos.nth = t.pseudos.eq;
        for (rt in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            t.pseudos[rt] = ar(rt);
        for (rt in {
            submit: !0,
            reset: !0
        })
            t.pseudos[rt] = vr(rt);
        return ki.prototype = t.filters = t.pseudos,
        t.setFilters = new ki,
        ft = u.tokenize = function(n, i) {
            var e, f, s, o, r, h, c, l = ci[n + " "];
            if (l)
                return i ? 0 : l.slice(0);
            for (r = n,
            h = [],
            c = t.preFilter; r; ) {
                (!e || (f = rr.exec(r))) && (f && (r = r.slice(f[0].length) || r),
                h.push(s = []));
                e = !1;
                (f = ur.exec(r)) && (e = f.shift(),
                s.push({
                    value: e,
                    type: f[0].replace(at, " ")
                }),
                r = r.slice(e.length));
                for (o in t.filter)
                    (f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(),
                    s.push({
                        value: e,
                        type: o,
                        matches: f
                    }),
                    r = r.slice(e.length));
                if (!e)
                    break
            }
            return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
        }
        ,
        bt = u.compile = function(n, t) {
            var r, u = [], e = [], i = lt[n + " "];
            if (!i) {
                for (t || (t = ft(n)),
                r = t.length; r--; )
                    (i = ei(t[r]))[f] ? u.push(i) : e.push(i);
                (i = lt(n, pr(e, u))).selector = n
            }
            return i
        }
        ,
        si = u.select = function(n, i, r, u) {
            var o, f, e, l, a, c = "function" == typeof n && n, s = !u && ft(n = c.selector || n);
            if (r = r || [],
            1 === s.length) {
                if ((f = s[0] = s[0].slice(0)).length > 2 && "ID" === (e = f[0]).type && 9 === i.nodeType && h && t.relative[f[1].type]) {
                    if (!(i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0]))
                        return r;
                    c && (i = i.parentNode);
                    n = n.slice(f.shift().value.length)
                }
                for (o = vt.needsContext.test(n) ? 0 : f.length; o--; ) {
                    if (e = f[o],
                    t.relative[l = e.type])
                        break;
                    if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ni.test(f[0].type) && ri(i.parentNode) || i))) {
                        if (f.splice(o, 1),
                        !(n = u.length && yt(f)))
                            return k.apply(r, u),
                            r;
                        break
                    }
                }
            }
            return (c || bt(n, s))(u, i, !h, r, !i || ni.test(n) && ri(i.parentNode) || i),
            r
        }
        ,
        e.sortStable = f.split("").sort(kt).join("") === f,
        e.detectDuplicates = !!ut,
        b(),
        e.sortDetached = a(function(n) {
            return 1 & n.compareDocumentPosition(i.createElement("fieldset"))
        }),
        a(function(n) {
            return n.innerHTML = "<a href='#'><\/a>",
            "#" === n.firstChild.getAttribute("href")
        }) || ii("type|href|height|width", function(n, t, i) {
            if (!i)
                return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        e.attributes && a(function(n) {
            return n.innerHTML = "<input/>",
            n.firstChild.setAttribute("value", ""),
            "" === n.firstChild.getAttribute("value")
        }) || ii("value", function(n, t, i) {
            if (!i && "input" === n.nodeName.toLowerCase())
                return n.defaultValue
        }),
        a(function(n) {
            return null == n.getAttribute("disabled")
        }) || ii(dt, function(n, t, i) {
            var r;
            if (!i)
                return !0 === n[t] ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        u
    }(n);
    i.find = b;
    i.expr = b.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = b.uniqueSort;
    i.text = b.getText;
    i.isXMLDoc = b.isXML;
    i.contains = b.contains;
    i.escapeSelector = b.escape;
    var rt = function(n, t, r) {
        for (var u = [], f = void 0 !== r; (n = n[t]) && 9 !== n.nodeType; )
            if (1 === n.nodeType) {
                if (f && i(n).is(r))
                    break;
                u.push(n)
            }
        return u
    }
      , cr = function(n, t) {
        for (var i = []; n; n = n.nextSibling)
            1 === n.nodeType && n !== t && i.push(n);
        return i
    }
      , lr = i.expr.match.needsContext;
    ci = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"),
        1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return 1 === n.nodeType
        }))
    }
    ;
    i.fn.extend({
        find: function(n) {
            var t, r, u = this.length, f = this;
            if ("string" != typeof n)
                return this.pushStack(i(n).filter(function() {
                    for (t = 0; t < u; t++)
                        if (i.contains(f[t], this))
                            return !0
                }));
            for (r = this.pushStack([]),
            t = 0; t < u; t++)
                i.find(n, f[t], r);
            return u > 1 ? i.uniqueSort(r) : r
        },
        filter: function(n) {
            return this.pushStack(li(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(li(this, n || [], !0))
        },
        is: function(n) {
            return !!li(this, "string" == typeof n && lr.test(n) ? i(n) : n || [], !1).length
        }
    });
    vr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (i.fn.init = function(n, t, r) {
        var e, o;
        if (!n)
            return this;
        if (r = r || ar,
        "string" == typeof n) {
            if (!(e = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [null, n, null] : vr.exec(n)) || !e[1] && t)
                return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
            if (e[1]) {
                if (t = t instanceof i ? t[0] : t,
                i.merge(this, i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)),
                ci.test(e[1]) && i.isPlainObject(t))
                    for (e in t)
                        u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
                return this
            }
            return (o = f.getElementById(e[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return n.nodeType ? (this[0] = n,
        this.length = 1,
        this) : u(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this)
    }
    ).prototype = i.fn;
    ar = i(f);
    yr = /^(?:parents|prev(?:Until|All))/;
    pr = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        has: function(n) {
            var t = i(n, this)
              , r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n]))
                        return !0
            })
        },
        closest: function(n, t) {
            var r, f = 0, o = this.length, u = [], e = "string" != typeof n && i(n);
            if (!lr.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        }
            return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? wt.call(i(n), this[0]) : wt.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return rt(n, "parentNode")
        },
        parentsUntil: function(n, t, i) {
            return rt(n, "parentNode", i)
        },
        next: function(n) {
            return wr(n, "nextSibling")
        },
        prev: function(n) {
            return wr(n, "previousSibling")
        },
        nextAll: function(n) {
            return rt(n, "nextSibling")
        },
        prevAll: function(n) {
            return rt(n, "previousSibling")
        },
        nextUntil: function(n, t, i) {
            return rt(n, "nextSibling", i)
        },
        prevUntil: function(n, t, i) {
            return rt(n, "previousSibling", i)
        },
        siblings: function(n) {
            return cr((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return cr(n.firstChild)
        },
        contents: function(n) {
            return v(n, "iframe") ? n.contentDocument : (v(n, "template") && (n = n.content || n),
            i.merge([], n.childNodes))
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r),
            u && "string" == typeof u && (f = i.filter(u, f)),
            this.length > 1 && (pr[n] || i.uniqueSort(f),
            yr.test(n) && f.reverse()),
            this.pushStack(f)
        }
    });
    l = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function(n) {
        n = "string" == typeof n ? ne(n) : i.extend({}, n);
        var f, r, c, e, t = [], s = [], o = -1, l = function() {
            for (e = e || n.once,
            c = f = !0; s.length; o = -1)
                for (r = s.shift(); ++o < t.length; )
                    !1 === t[o].apply(r[0], r[1]) && n.stopOnFalse && (o = t.length,
                    r = !1);
            n.memory || (r = !1);
            f = !1;
            e && (t = r ? [] : "")
        }, h = {
            add: function() {
                return t && (r && !f && (o = t.length - 1,
                s.push(r)),
                function f(r) {
                    i.each(r, function(i, r) {
                        u(r) ? n.unique && h.has(r) || t.push(r) : r && r.length && "string" !== it(r) && f(r)
                    })
                }(arguments),
                r && !f && l()),
                this
            },
            remove: function() {
                return i.each(arguments, function(n, r) {
                    for (var u; (u = i.inArray(r, t, u)) > -1; )
                        t.splice(u, 1),
                        u <= o && o--
                }),
                this
            },
            has: function(n) {
                return n ? i.inArray(n, t) > -1 : t.length > 0
            },
            empty: function() {
                return t && (t = []),
                this
            },
            disable: function() {
                return e = s = [],
                t = r = "",
                this
            },
            disabled: function() {
                return !t
            },
            lock: function() {
                return e = s = [],
                r || f || (t = r = ""),
                this
            },
            locked: function() {
                return !!e
            },
            fireWith: function(n, t) {
                return e || (t = [n, (t = t || []).slice ? t.slice() : t],
                s.push(t),
                f || l()),
                this
            },
            fire: function() {
                return h.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!c
            }
        };
        return h
    }
    ;
    i.extend({
        Deferred: function(t) {
            var f = [["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2], ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]]
              , o = "pending"
              , e = {
                state: function() {
                    return o
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                "catch": function(n) {
                    return e.then(null, n)
                },
                pipe: function() {
                    var n = arguments;
                    return i.Deferred(function(t) {
                        i.each(f, function(i, f) {
                            var e = u(n[f[4]]) && n[f[4]];
                            r[f[1]](function() {
                                var n = e && e.apply(this, arguments);
                                n && u(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                            })
                        });
                        n = null
                    }).promise()
                },
                then: function(t, r, e) {
                    function s(t, r, f, e) {
                        return function() {
                            var h = this
                              , c = arguments
                              , a = function() {
                                var n, i;
                                if (!(t < o)) {
                                    if ((n = f.apply(h, c)) === r.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    i = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                    u(i) ? e ? i.call(n, s(o, r, ut, e), s(o, r, dt, e)) : (o++,
                                    i.call(n, s(o, r, ut, e), s(o, r, dt, e), s(o, r, ut, r.notifyWith))) : (f !== ut && (h = void 0,
                                    c = [n]),
                                    (e || r.resolveWith)(h, c))
                                }
                            }
                              , l = e ? a : function() {
                                try {
                                    a()
                                } catch (n) {
                                    i.Deferred.exceptionHook && i.Deferred.exceptionHook(n, l.stackTrace);
                                    t + 1 >= o && (f !== dt && (h = void 0,
                                    c = [n]),
                                    r.rejectWith(h, c))
                                }
                            }
                            ;
                            t ? l() : (i.Deferred.getStackHook && (l.stackTrace = i.Deferred.getStackHook()),
                            n.setTimeout(l))
                        }
                    }
                    var o = 0;
                    return i.Deferred(function(n) {
                        f[0][3].add(s(0, n, u(e) ? e : ut, n.notifyWith));
                        f[1][3].add(s(0, n, u(t) ? t : ut));
                        f[2][3].add(s(0, n, u(r) ? r : dt))
                    }).promise()
                },
                promise: function(n) {
                    return null != n ? i.extend(n, e) : e
                }
            }
              , r = {};
            return i.each(f, function(n, t) {
                var i = t[2]
                  , u = t[5];
                e[t[1]] = i.add;
                u && i.add(function() {
                    o = u
                }, f[3 - n][2].disable, f[3 - n][3].disable, f[0][2].lock, f[0][3].lock);
                i.add(t[3].fire);
                r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments),
                    this
                }
                ;
                r[t[0] + "With"] = i.fireWith
            }),
            e.promise(r),
            t && t.call(r, r),
            r
        },
        when: function(n) {
            var e = arguments.length
              , t = e
              , o = Array(t)
              , f = d.call(arguments)
              , r = i.Deferred()
              , s = function(n) {
                return function(t) {
                    o[n] = this;
                    f[n] = arguments.length > 1 ? d.call(arguments) : t;
                    --e || r.resolveWith(o, f)
                }
            };
            if (e <= 1 && (br(n, r.done(s(t)).resolve, r.reject, !e),
            "pending" === r.state() || u(f[t] && f[t].then)))
                return r.then();
            while (t--)
                br(f[t], s(t), r.reject);
            return r.promise()
        }
    });
    kr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(t, i) {
        n.console && n.console.warn && t && kr.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    }
    ;
    i.readyException = function(t) {
        n.setTimeout(function() {
            throw t;
        })
    }
    ;
    gt = i.Deferred();
    i.fn.ready = function(n) {
        return gt.then(n)["catch"](function(n) {
            i.readyException(n)
        }),
        this
    }
    ;
    i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(n) {
            (!0 === n ? --i.readyWait : i.isReady) || (i.isReady = !0,
            !0 !== n && --i.readyWait > 0 || gt.resolveWith(f, [i]))
        }
    });
    i.ready.then = gt.then;
    "complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll ? n.setTimeout(i.ready) : (f.addEventListener("DOMContentLoaded", ni),
    n.addEventListener("load", ni));
    var p = function(n, t, r, f, e, o, s) {
        var h = 0
          , l = n.length
          , c = null == r;
        if ("object" === it(r)) {
            e = !0;
            for (h in r)
                p(n, t, h, r[h], !0, o, s)
        } else if (void 0 !== f && (e = !0,
        u(f) || (s = !0),
        c && (s ? (t.call(n, f),
        t = null) : (c = t,
        t = function(n, t, r) {
            return c.call(i(n), r)
        }
        )),
        t))
            for (; h < l; h++)
                t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
        return e ? n : c ? t.call(n) : l ? t(n[0], r) : o
    }
      , te = /^-ms-/
      , ie = /-([a-z])/g;
    lt = function(n) {
        return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
    }
    ;
    at.uid = 1;
    at.prototype = {
        cache: function(n) {
            var t = n[this.expando];
            return t || (t = {},
            lt(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(n, t, i) {
            var r, u = this.cache(n);
            if ("string" == typeof t)
                u[y(t)] = i;
            else
                for (r in t)
                    u[y(r)] = t[r];
            return u
        },
        get: function(n, t) {
            return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][y(t)]
        },
        access: function(n, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i),
            void 0 !== i ? i : t)
        },
        remove: function(n, t) {
            var u, r = n[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t)
                    for (u = (t = Array.isArray(t) ? t.map(y) : (t = y(t))in r ? [t] : t.match(l) || []).length; u--; )
                        delete r[t[u]];
                (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
            }
        },
        hasData: function(n) {
            var t = n[this.expando];
            return void 0 !== t && !i.isEmptyObject(t)
        }
    };
    var r = new at
      , o = new at
      , ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , fe = /[A-Z]/g;
    i.extend({
        hasData: function(n) {
            return o.hasData(n) || r.hasData(n)
        },
        data: function(n, t, i) {
            return o.access(n, t, i)
        },
        removeData: function(n, t) {
            o.remove(n, t)
        },
        _data: function(n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function(n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, i = this[0], s = i && i.attributes;
            if (void 0 === n) {
                if (this.length && (e = o.get(i),
                1 === i.nodeType && !r.get(i, "hasDataAttrs"))) {
                    for (f = s.length; f--; )
                        s[f] && 0 === (u = s[f].name).indexOf("data-") && (u = y(u.slice(5)),
                        dr(i, u, e[u]));
                    r.set(i, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof n ? this.each(function() {
                o.set(this, n)
            }) : p(this, function(t) {
                var r;
                if (i && void 0 === t) {
                    if (void 0 !== (r = o.get(i, n)) || void 0 !== (r = dr(i, n)))
                        return r
                } else
                    this.each(function() {
                        o.set(this, n, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                o.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, u) {
            var f;
            if (n)
                return t = (t || "fx") + "queue",
                f = r.get(n, t),
                u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)),
                f || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t)
              , e = r.length
              , u = r.shift()
              , f = i._queueHooks(n, t)
              , o = function() {
                i.dequeue(n, t)
            };
            "inprogress" === u && (u = r.shift(),
            e--);
            u && ("fx" === t && r.unshift("inprogress"),
            delete f.stop,
            u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function() {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n,
            n = "fx",
            r--),
            arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var u, e = 1, o = i.Deferred(), f = this, s = this.length, h = function() {
                --e || o.resolveWith(f, [f])
            };
            for ("string" != typeof n && (t = n,
            n = void 0),
            n = n || "fx"; s--; )
                (u = r.get(f[s], n + "queueHooks")) && u.empty && (e++,
                u.empty.add(h));
            return h(),
            o.promise(t)
        }
    });
    var gr = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , vt = new RegExp("^(?:([+-])=|)(" + gr + ")([a-z%]*)$","i")
      , w = ["Top", "Right", "Bottom", "Left"]
      , ti = function(n, t) {
        return "none" === (n = t || n).style.display || "" === n.style.display && i.contains(n.ownerDocument, n) && "none" === i.css(n, "display")
    }
      , nu = function(n, t, i, r) {
        var f, u, e = {};
        for (u in t)
            e[u] = n.style[u],
            n.style[u] = t[u];
        f = i.apply(n, r || []);
        for (u in t)
            n.style[u] = e[u];
        return f
    };
    ai = {};
    i.fn.extend({
        show: function() {
            return ft(this, !0)
        },
        hide: function() {
            return ft(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                ti(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    var iu = /^(?:checkbox|radio)$/i
      , ru = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , uu = /^$|^module$|\/(?:java|ecma)script/i
      , c = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        thead: [1, "<table>", "<\/table>"],
        col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: [0, "", ""]
    };
    c.optgroup = c.option;
    c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
    c.th = c.td;
    fu = /<|&#?\w+;/;
    !function() {
        var n = f.createDocumentFragment().appendChild(f.createElement("div"))
          , t = f.createElement("input");
        t.setAttribute("type", "radio");
        t.setAttribute("checked", "checked");
        t.setAttribute("name", "t");
        n.appendChild(t);
        e.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
        n.innerHTML = "<textarea>x<\/textarea>";
        e.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
    }();
    var ii = f.documentElement
      , se = /^key/
      , he = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , ou = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var p, v, k, y, w, h, s, c, o, b, d, a = r.get(n);
            if (a)
                for (u.handler && (u = (p = u).handler,
                e = p.selector),
                e && i.find.matchesSelector(ii, e),
                u.guid || (u.guid = i.guid++),
                (y = a.events) || (y = a.events = {}),
                (v = a.handle) || (v = a.handle = function(t) {
                    if ("undefined" != typeof i && i.event.triggered !== t.type)
                        return i.event.dispatch.apply(n, arguments)
                }
                ),
                w = (t = (t || "").match(l) || [""]).length; w--; )
                    o = d = (k = ou.exec(t[w]) || [])[1],
                    b = (k[2] || "").split(".").sort(),
                    o && (s = i.event.special[o] || {},
                    o = (e ? s.delegateType : s.bindType) || o,
                    s = i.event.special[o] || {},
                    h = i.extend({
                        type: o,
                        origType: d,
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: b.join(".")
                    }, p),
                    (c = y[o]) || ((c = y[o] = []).delegateCount = 0,
                    s.setup && !1 !== s.setup.call(n, f, b, v) || n.addEventListener && n.addEventListener(o, v)),
                    s.add && (s.add.call(n, h),
                    h.handler.guid || (h.handler.guid = u.guid)),
                    e ? c.splice(c.delegateCount++, 0, h) : c.push(h),
                    i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var y, k, h, v, p, s, c, a, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (v = w.events)) {
                for (p = (t = (t || "").match(l) || [""]).length; p--; )
                    if (h = ou.exec(t[p]) || [],
                    o = d = h[1],
                    b = (h[2] || "").split(".").sort(),
                    o) {
                        for (c = i.event.special[o] || {},
                        a = v[o = (f ? c.delegateType : c.bindType) || o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        k = y = a.length; y--; )
                            s = a[y],
                            !e && d !== s.origType || u && u.guid !== s.guid || h && !h.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (a.splice(y, 1),
                            s.selector && a.delegateCount--,
                            c.remove && c.remove.call(n, s));
                        k && !a.length && (c.teardown && !1 !== c.teardown.call(n, b, w.handle) || i.removeEvent(n, o, w.handle),
                        delete v[o])
                    } else
                        for (o in v)
                            i.event.remove(n, o + t[p], u, f, !0);
                i.isEmptyObject(v) && r.remove(n, "handle events")
            }
        },
        dispatch: function(n) {
            var t = i.event.fix(n), u, h, c, e, f, l, s = new Array(arguments.length), a = (r.get(this, "events") || {})[t.type] || [], o = i.event.special[t.type] || {};
            for (s[0] = t,
            u = 1; u < arguments.length; u++)
                s[u] = arguments[u];
            if (t.delegateTarget = this,
            !o.preDispatch || !1 !== o.preDispatch.call(this, t)) {
                for (l = i.event.handlers.call(this, t, a),
                u = 0; (e = l[u++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = e.elem,
                    h = 0; (f = e.handlers[h++]) && !t.isImmediatePropagationStopped(); )
                        t.rnamespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f,
                        t.data = f.data,
                        void 0 !== (c = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, s)) && !1 === (t.result = c) && (t.preventDefault(),
                        t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(n, t) {
            var f, h, u, e, o, c = [], s = t.delegateCount, r = n.target;
            if (s && r.nodeType && !("click" === n.type && n.button >= 1))
                for (; r !== this; r = r.parentNode || this)
                    if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) {
                        for (e = [],
                        o = {},
                        f = 0; f < s; f++)
                            void 0 === o[u = (h = t[f]).selector + " "] && (o[u] = h.needsContext ? i(u, this).index(r) > -1 : i.find(u, this, null, [r]).length),
                            o[u] && e.push(h);
                        e.length && c.push({
                            elem: r,
                            handlers: e
                        })
                    }
            return r = this,
            s < t.length && c.push({
                elem: r,
                handlers: t.slice(s)
            }),
            c
        },
        addProp: function(n, t) {
            Object.defineProperty(i.Event.prototype, n, {
                enumerable: !0,
                configurable: !0,
                get: u(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[n]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, n, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(n) {
            return n[i.expando] ? n : new i.Event(n)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== su() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === su() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && v(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(n) {
                    return v(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        }
    };
    i.removeEvent = function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i)
    }
    ;
    i.Event = function(n, t) {
        if (!(this instanceof i.Event))
            return new i.Event(n,t);
        n && n.type ? (this.originalEvent = n,
        this.type = n.type,
        this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && !1 === n.returnValue ? ri : et,
        this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target,
        this.currentTarget = n.currentTarget,
        this.relatedTarget = n.relatedTarget) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || Date.now();
        this[i.expando] = !0
    }
    ;
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: et,
        isPropagationStopped: et,
        isImmediatePropagationStopped: et,
        isSimulated: !1,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = ri;
            n && !this.isSimulated && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = ri;
            n && !this.isSimulated && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = ri;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
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
        which: function(n) {
            var t = n.button;
            return null == n.which && se.test(n.type) ? null != n.charCode ? n.charCode : n.keyCode : !n.which && void 0 !== t && he.test(n.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : n.which
        }
    }, i.event.addProp);
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this, r = n.relatedTarget, e = n.handleObj;
                return r && (r === f || i.contains(f, r)) || (n.type = e.origType,
                u = e.handler.apply(this, arguments),
                n.type = t),
                u
            }
        }
    });
    i.fn.extend({
        on: function(n, t, i, r) {
            return yi(this, n, t, i, r)
        },
        one: function(n, t, i, r) {
            return yi(this, n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj)
                return u = n.handleObj,
                i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler),
                this;
            if ("object" == typeof n) {
                for (f in n)
                    this.off(f, t, n[f]);
                return this
            }
            return !1 !== t && "function" != typeof t || (r = t,
            t = void 0),
            !1 === r && (r = et),
            this.each(function() {
                i.event.remove(this, n, r, t)
            })
        }
    });
    var ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , le = /<script|<style|<link/i
      , ae = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({
        htmlPrefilter: function(n) {
            return n.replace(ce, "<$1><\/$2>")
        },
        clone: function(n, t, r) {
            var u, c, o, f, h = n.cloneNode(!0), l = i.contains(n.ownerDocument, n);
            if (!(e.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (f = s(h),
                u = 0,
                c = (o = s(n)).length; u < c; u++)
                    we(o[u], f[u]);
            if (t)
                if (r)
                    for (o = o || s(n),
                    f = f || s(h),
                    u = 0,
                    c = o.length; u < c; u++)
                        cu(o[u], f[u]);
                else
                    cu(n, h);
            return (f = s(h, "script")).length > 0 && vi(f, !l && s(n, "script")),
            h
        },
        cleanData: function(n) {
            for (var u, t, f, s = i.event.special, e = 0; void 0 !== (t = n[e]); e++)
                if (lt(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)
                            for (f in u.events)
                                s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = void 0
                    }
                    t[o.expando] && (t[o.expando] = void 0)
                }
        }
    });
    i.fn.extend({
        detach: function(n) {
            return lu(this, n, !0)
        },
        remove: function(n) {
            return lu(this, n)
        },
        text: function(n) {
            return p(this, function(n) {
                return void 0 === n ? i.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n)
                })
            }, null, n, arguments.length)
        },
        append: function() {
            return ot(this, arguments, function(n) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || hu(this, n).appendChild(n)
            })
        },
        prepend: function() {
            return ot(this, arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = hu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return ot(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return ot(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++)
                1 === n.nodeType && (i.cleanData(s(n, !1)),
                n.textContent = "");
            return this
        },
        clone: function(n, t) {
            return n = null != n && n,
            t = null == t ? n : t,
            this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return p(this, function(n) {
                var t = this[0] || {}
                  , r = 0
                  , u = this.length;
                if (void 0 === n && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof n && !le.test(n) && !c[(ru.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++)
                            1 === (t = this[r] || {}).nodeType && (i.cleanData(s(t, !1)),
                            t.innerHTML = n);
                        t = 0
                    } catch (n) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return ot(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(s(this)),
                r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++)
                u = r === o ? this : this.clone(!0),
                i(e[r])[t](u),
                si.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    var pi = new RegExp("^(" + gr + ")(?!px)[a-z%]+$","i")
      , ui = function(t) {
        var i = t.ownerDocument.defaultView;
        return i && i.opener || (i = n),
        i.getComputedStyle(t)
    }
      , be = new RegExp(w.join("|"),"i");
    !function() {
        function r() {
            if (t) {
                o.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                ii.appendChild(o).appendChild(t);
                var i = n.getComputedStyle(t);
                s = "1%" !== i.top;
                a = 12 === u(i.marginLeft);
                t.style.right = "60%";
                l = 36 === u(i.right);
                h = 36 === u(i.width);
                t.style.position = "absolute";
                c = 36 === t.offsetWidth || "absolute";
                ii.removeChild(o);
                t = null
            }
        }
        function u(n) {
            return Math.round(parseFloat(n))
        }
        var s, h, c, l, a, o = f.createElement("div"), t = f.createElement("div");
        t.style && (t.style.backgroundClip = "content-box",
        t.cloneNode(!0).style.backgroundClip = "",
        e.clearCloneStyle = "content-box" === t.style.backgroundClip,
        i.extend(e, {
            boxSizingReliable: function() {
                return r(),
                h
            },
            pixelBoxStyles: function() {
                return r(),
                l
            },
            pixelPosition: function() {
                return r(),
                s
            },
            reliableMarginLeft: function() {
                return r(),
                a
            },
            scrollboxSize: function() {
                return r(),
                c
            }
        }))
    }();
    var ke = /^(none|table(?!-c[ea]).+)/
      , vu = /^--/
      , de = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , yu = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , pu = ["Webkit", "Moz", "ms"]
      , wu = f.createElement("div").style;
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = yt(n, "opacity");
                        return "" === i ? "1" : i
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
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(n, t, r, u) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var f, h, o, c = y(t), l = vu.test(t), s = n.style;
                if (l || (t = bu(c)),
                o = i.cssHooks[t] || i.cssHooks[c],
                void 0 === r)
                    return o && "get"in o && void 0 !== (f = o.get(n, !1, u)) ? f : s[t];
                "string" == (h = typeof r) && (f = vt.exec(r)) && f[1] && (r = tu(n, t, f),
                h = "number");
                null != r && r === r && ("number" === h && (r += f && f[3] || (i.cssNumber[c] ? "" : "px")),
                e.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (s[t] = "inherit"),
                o && "set"in o && void 0 === (r = o.set(n, r, u)) || (l ? s.setProperty(t, r) : s[t] = r))
            }
        },
        css: function(n, t, r, u) {
            var f, e, o, s = y(t);
            return vu.test(t) || (t = bu(s)),
            (o = i.cssHooks[t] || i.cssHooks[s]) && "get"in o && (f = o.get(n, !0, r)),
            void 0 === f && (f = yt(n, t, u)),
            "normal" === f && t in yu && (f = yu[t]),
            "" === r || r ? (e = parseFloat(f),
            !0 === r || isFinite(e) ? e || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r)
                    return !ke.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? du(n, t, u) : nu(n, de, function() {
                        return du(n, t, u)
                    })
            },
            set: function(n, r, u) {
                var s, f = ui(n), h = "border-box" === i.css(n, "boxSizing", !1, f), o = u && wi(n, t, u, h, f);
                return h && e.scrollboxSize() === f.position && (o -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(f[t]) - wi(n, t, "border", !1, f) - .5)),
                o && (s = vt.exec(r)) && "px" !== (s[3] || "px") && (n.style[t] = r,
                r = i.css(n, t)),
                ku(n, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = au(e.reliableMarginLeft, function(n, t) {
        if (t)
            return (parseFloat(yt(n, "marginLeft")) || n.getBoundingClientRect().left - nu(n, {
                marginLeft: 0
            }, function() {
                return n.getBoundingClientRect().left
            })) + "px"
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++)
                    f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        "margin" !== n && (i.cssHooks[n + t].set = ku)
    });
    i.fn.extend({
        css: function(n, t) {
            return p(this, function(n, t, r) {
                var f, e, o = {}, u = 0;
                if (Array.isArray(t)) {
                    for (f = ui(n),
                    e = t.length; u < e; u++)
                        o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        }
    });
    i.Tween = h;
    h.prototype = {
        constructor: h,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = h.propHooks[this.prop];
            return n && n.get ? n.get(this) : h.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = h.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            r && r.set ? r.set(this) : h.propHooks._default.set(this),
            this
        }
    };
    h.prototype.init.prototype = h.prototype;
    h.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || null == n.elem.style[i.cssProps[n.prop]] && !i.cssHooks[n.prop] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
            }
        }
    };
    h.propHooks.scrollTop = h.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        },
        _default: "swing"
    };
    i.fx = h.prototype.init;
    i.fx.step = {};
    gu = /^(?:toggle|show|hide)$/;
    nf = /queueHooks$/;
    i.Animation = i.extend(a, {
        tweeners: {
            "*": [function(n, t) {
                var i = this.createTween(n, t);
                return tu(i.elem, n, vt.exec(t), i),
                i
            }
            ]
        },
        tweener: function(n, t) {
            u(n) ? (t = n,
            n = ["*"]) : n = n.match(l);
            for (var i, r = 0, f = n.length; r < f; r++)
                i = n[r],
                a.tweeners[i] = a.tweeners[i] || [],
                a.tweeners[i].unshift(t)
        },
        prefilters: [no],
        prefilter: function(n, t) {
            t ? a.prefilters.unshift(n) : a.prefilters.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var f = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || u(n) && n,
            duration: n,
            easing: r && t || t && !u(t) && t
        };
        return i.fx.off ? f.duration = 0 : "number" != typeof f.duration && (f.duration = f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default),
        null != f.queue && !0 !== f.queue || (f.queue = "fx"),
        f.old = f.complete,
        f.complete = function() {
            u(f.old) && f.old.call(this);
            f.queue && i.dequeue(this, f.queue)
        }
        ,
        f
    }
    ;
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(ti).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n)
              , o = i.speed(t, u, f)
              , e = function() {
                var t = a(this, i.extend({}, n), o);
                (s || r.get(this, "finish")) && t.stop(!0)
            };
            return e.finish = e,
            s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return "string" != typeof n && (u = t,
            t = n,
            n = void 0),
            t && !1 !== n && this.queue(n || "fx", []),
            this.each(function() {
                var s = !0
                  , t = null != n && n + "queueHooks"
                  , o = i.timers
                  , e = r.get(this);
                if (t)
                    e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e)
                        e[t] && e[t].stop && nf.test(t) && f(e[t]);
                for (t = o.length; t--; )
                    o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u),
                    s = !1,
                    o.splice(t, 1));
                !s && u || i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return !1 !== n && (n = n || "fx"),
            this.each(function() {
                var t, e = r.get(this), u = e[n + "queue"], o = e[n + "queueHooks"], f = i.timers, s = u ? u.length : 0;
                for (e.finish = !0,
                i.queue(this, n, []),
                o && o.stop && o.stop.call(this, !0),
                t = f.length; t--; )
                    f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0),
                    f.splice(t, 1));
                for (t = 0; t < s; t++)
                    u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(ei(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: ei("show"),
        slideUp: ei("hide"),
        slideToggle: ei("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0, t = i.timers;
        for (st = Date.now(); n < t.length; n++)
            (r = t[n])() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        st = void 0
    }
    ;
    i.fx.timer = function(n) {
        i.timers.push(n);
        i.fx.start()
    }
    ;
    i.fx.interval = 13;
    i.fx.start = function() {
        fi || (fi = !0,
        bi())
    }
    ;
    i.fx.stop = function() {
        fi = null
    }
    ;
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(t, r) {
        return t = i.fx ? i.fx.speeds[t] || t : t,
        r = r || "fx",
        this.queue(r, function(i, r) {
            var u = n.setTimeout(i, t);
            r.stop = function() {
                n.clearTimeout(u)
            }
        })
    }
    ,
    function() {
        var n = f.createElement("input")
          , t = f.createElement("select").appendChild(f.createElement("option"));
        n.type = "checkbox";
        e.checkOn = "" !== n.value;
        e.optSelected = t.selected;
        (n = f.createElement("input")).value = "t";
        n.type = "radio";
        e.radioValue = "t" === n.value
    }();
    ht = i.expr.attrHandle;
    i.fn.extend({
        attr: function(n, t) {
            return p(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e)
                return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (u = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? uf : void 0)),
                void 0 !== r ? null === r ? void i.removeAttr(n, t) : u && "set"in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""),
                r) : u && "get"in u && null !== (f = u.get(n, t)) ? f : null == (f = i.find.attr(n, t)) ? void 0 : f)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!e.radioValue && "radio" === t && v(n, "input")) {
                        var i = n.value;
                        return n.setAttribute("type", t),
                        i && (n.value = i),
                        t
                    }
                }
            }
        },
        removeAttr: function(n, t) {
            var i, u = 0, r = t && t.match(l);
            if (r && 1 === n.nodeType)
                while (i = r[u++])
                    n.removeAttribute(i)
        }
    });
    uf = {
        set: function(n, t, r) {
            return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r),
            r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = ht[t] || i.find.attr;
        ht[t] = function(n, t, i) {
            var f, e, u = t.toLowerCase();
            return i || (e = ht[u],
            ht[u] = f,
            f = null != r(n, t, i) ? u : null,
            ht[u] = e),
            f
        }
    });
    ff = /^(?:input|select|textarea|button)$/i;
    ef = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return p(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return this.each(function() {
                delete this[i.propFix[n] || n]
            })
        }
    });
    i.extend({
        prop: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e)
                return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t,
                u = i.propHooks[t]),
                void 0 !== r ? u && "set"in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get"in u && null !== (f = u.get(n, t)) ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : ff.test(n.nodeName) || ef.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    e.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, f, e, s, h, c = 0;
            if (u(n))
                return this.each(function(t) {
                    i(this).addClass(n.call(this, t, nt(this)))
                });
            if ((o = ki(n)).length)
                while (t = this[c++])
                    if (f = nt(t),
                    r = 1 === t.nodeType && " " + g(f) + " ") {
                        for (s = 0; e = o[s++]; )
                            r.indexOf(" " + e + " ") < 0 && (r += e + " ");
                        f !== (h = g(r)) && t.setAttribute("class", h)
                    }
            return this
        },
        removeClass: function(n) {
            var o, r, t, f, e, s, h, c = 0;
            if (u(n))
                return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, nt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((o = ki(n)).length)
                while (r = this[c++])
                    if (f = nt(r),
                    t = 1 === r.nodeType && " " + g(f) + " ") {
                        for (s = 0; e = o[s++]; )
                            while (t.indexOf(" " + e + " ") > -1)
                                t = t.replace(" " + e + " ", " ");
                        f !== (h = g(t)) && r.setAttribute("class", h)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var f = typeof n
              , e = "string" === f || Array.isArray(n);
            return "boolean" == typeof t && e ? t ? this.addClass(n) : this.removeClass(n) : u(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, nt(this), t), t)
            }) : this.each(function() {
                var t, o, u, s;
                if (e)
                    for (o = 0,
                    u = i(this),
                    s = ki(n); t = s[o++]; )
                        u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else
                    void 0 !== n && "boolean" !== f || ((t = nt(this)) && r.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === n ? "" : r.get(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++]; )
                if (1 === t.nodeType && (" " + g(nt(t)) + " ").indexOf(i) > -1)
                    return !0;
            return !1
        }
    });
    of = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, e, f = this[0];
            return arguments.length ? (e = u(n),
            this.each(function(r) {
                var u;
                1 === this.nodeType && (null == (u = e ? n.call(this, r, i(this).val()) : n) ? u = "" : "number" == typeof u ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) {
                    return null == n ? "" : n + ""
                })),
                (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : f ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]) && "get"in t && void 0 !== (r = t.get(f, "value")) ? r : "string" == typeof (r = f.value) ? r.replace(of, "") : null == r ? "" : r : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : g(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
                        if (((t = o[r]).selected || r === u) && !t.disabled && (!t.parentNode.disabled || !v(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(),
                            f)
                                return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(n, t) {
                    for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--; )
                        ((u = f[o]).selected = i.inArray(i.valHooks.option.get(u), e) > -1) && (r = !0);
                    return r || (n.selectedIndex = -1),
                    e
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (Array.isArray(t))
                    return n.checked = i.inArray(i(n).val(), t) > -1
            }
        };
        e.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" : n.value
        }
        )
    });
    e.focusin = "onfocusin"in n;
    di = /^(?:focusinfocus|focusoutblur)$/;
    gi = function(n) {
        n.stopPropagation()
    }
    ;
    i.extend(i.event, {
        trigger: function(t, e, o, s) {
            var k, c, l, d, v, y, a, p, w = [o || f], h = kt.call(t, "type") ? t.type : t, b = kt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (c = p = l = o = o || f,
            3 !== o.nodeType && 8 !== o.nodeType && !di.test(h + i.event.triggered) && (h.indexOf(".") > -1 && (h = (b = h.split(".")).shift(),
            b.sort()),
            v = h.indexOf(":") < 0 && "on" + h,
            t = t[i.expando] ? t : new i.Event(h,"object" == typeof t && t),
            t.isTrigger = s ? 2 : 3,
            t.namespace = b.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = o),
            e = null == e ? [t] : i.makeArray(e, [t]),
            a = i.event.special[h] || {},
            s || !a.trigger || !1 !== a.trigger.apply(o, e))) {
                if (!s && !a.noBubble && !tt(o)) {
                    for (d = a.delegateType || h,
                    di.test(d + h) || (c = c.parentNode); c; c = c.parentNode)
                        w.push(c),
                        l = c;
                    l === (o.ownerDocument || f) && w.push(l.defaultView || l.parentWindow || n)
                }
                for (k = 0; (c = w[k++]) && !t.isPropagationStopped(); )
                    p = c,
                    t.type = k > 1 ? d : a.bindType || h,
                    (y = (r.get(c, "events") || {})[t.type] && r.get(c, "handle")) && y.apply(c, e),
                    (y = v && c[v]) && y.apply && lt(c) && (t.result = y.apply(c, e),
                    !1 === t.result && t.preventDefault());
                return t.type = h,
                s || t.isDefaultPrevented() || a._default && !1 !== a._default.apply(w.pop(), e) || !lt(o) || v && u(o[h]) && !tt(o) && ((l = o[v]) && (o[v] = null),
                i.event.triggered = h,
                t.isPropagationStopped() && p.addEventListener(h, gi),
                o[h](),
                t.isPropagationStopped() && p.removeEventListener(h, gi),
                i.event.triggered = void 0,
                l && (o[v] = l)),
                t.result
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0
            });
            i.event.trigger(u, null, t)
        }
    });
    i.fn.extend({
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r)
                return i.event.trigger(n, t, r, !0)
        }
    });
    e.focusin || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n))
        };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0),
                r.remove(i, t))
            }
        }
    });
    var pt = n.location
      , sf = Date.now()
      , nr = /\?/;
    i.parseXML = function(t) {
        var r;
        if (!t || "string" != typeof t)
            return null;
        try {
            r = (new n.DOMParser).parseFromString(t, "text/xml")
        } catch (n) {
            r = void 0
        }
        return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t),
        r
    }
    ;
    var io = /\[\]$/
      , hf = /\r?\n/g
      , ro = /^(?:submit|button|image|reset|file)$/i
      , uo = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, f = [], e = function(n, t) {
            var i = u(t) ? t() : t;
            f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (Array.isArray(n) || n.jquery && !i.isPlainObject(n))
            i.each(n, function() {
                e(this.name, this.value)
            });
        else
            for (r in n)
                tr(r, n[r], t, e);
        return f.join("&")
    }
    ;
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && uo.test(this.nodeName) && !ro.test(n) && (this.checked || !iu.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : Array.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(hf, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(hf, "\r\n")
                }
            }).get()
        }
    });
    var fo = /%20/g
      , eo = /#.*$/
      , oo = /([?&])_=[^&]*/
      , so = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , ho = /^(?:GET|HEAD)$/
      , co = /^\/\//
      , cf = {}
      , ir = {}
      , lf = "*/".concat("*")
      , rr = f.createElement("a");
    return rr.href = pt.href,
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: pt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pt.protocol),
            global: !0,
            processData: !0,
            "async": !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": lf,
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
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ur(ur(n, i.ajaxSettings), t) : ur(i.ajaxSettings, n)
        },
        ajaxPrefilter: af(cf),
        ajaxTransport: af(ir),
        ajax: function(t, r) {
            function b(t, r, f, c) {
                var v, rt, b, p, g, l = r;
                s || (s = !0,
                d && n.clearTimeout(d),
                a = void 0,
                k = c || "",
                e.readyState = t > 0 ? 4 : 0,
                v = t >= 200 && t < 300 || 304 === t,
                f && (p = lo(u, e, f)),
                p = ao(u, p, e, v),
                v ? (u.ifModified && ((g = e.getResponseHeader("Last-Modified")) && (i.lastModified[o] = g),
                (g = e.getResponseHeader("etag")) && (i.etag[o] = g)),
                204 === t || "HEAD" === u.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = p.state,
                rt = p.data,
                v = !(b = p.error))) : (b = l,
                !t && l || (l = "error",
                t < 0 && (t = 0))),
                e.status = t,
                e.statusText = (r || l) + "",
                v ? tt.resolveWith(h, [rt, l, e]) : tt.rejectWith(h, [e, l, b]),
                e.statusCode(w),
                w = void 0,
                y && nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : b]),
                it.fireWith(h, [e, l]),
                y && (nt.trigger("ajaxComplete", [e, u]),
                --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (r = t,
            t = void 0);
            r = r || {};
            var a, o, k, v, d, c, s, y, g, p, u = i.ajaxSetup({}, r), h = u.context || u, nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event, tt = i.Deferred(), it = i.Callbacks("once memory"), w = u.statusCode || {}, rt = {}, ut = {}, ft = "canceled", e = {
                readyState: 0,
                getResponseHeader: function(n) {
                    var t;
                    if (s) {
                        if (!v)
                            for (v = {}; t = so.exec(k); )
                                v[t[1].toLowerCase()] = t[2];
                        t = v[n.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return s ? k : null
                },
                setRequestHeader: function(n, t) {
                    return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n,
                    rt[n] = t),
                    this
                },
                overrideMimeType: function(n) {
                    return null == s && (u.mimeType = n),
                    this
                },
                statusCode: function(n) {
                    var t;
                    if (n)
                        if (s)
                            e.always(n[e.status]);
                        else
                            for (t in n)
                                w[t] = [w[t], n[t]];
                    return this
                },
                abort: function(n) {
                    var t = n || ft;
                    return a && a.abort(t),
                    b(0, t),
                    this
                }
            };
            if (tt.promise(e),
            u.url = ((t || u.url || pt.href) + "").replace(co, pt.protocol + "//"),
            u.type = r.method || r.type || u.method || u.type,
            u.dataTypes = (u.dataType || "*").toLowerCase().match(l) || [""],
            null == u.crossDomain) {
                c = f.createElement("a");
                try {
                    c.href = u.url;
                    c.href = c.href;
                    u.crossDomain = rr.protocol + "//" + rr.host != c.protocol + "//" + c.host
                } catch (n) {
                    u.crossDomain = !0
                }
            }
            if (u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)),
            vf(cf, u, r, e),
            s)
                return e;
            (y = i.event && u.global) && 0 == i.active++ && i.event.trigger("ajaxStart");
            u.type = u.type.toUpperCase();
            u.hasContent = !ho.test(u.type);
            o = u.url.replace(eo, "");
            u.hasContent ? u.data && u.processData && 0 === (u.contentType || "").indexOf("application/x-www-form-urlencoded") && (u.data = u.data.replace(fo, "+")) : (p = u.url.slice(o.length),
            u.data && (u.processData || "string" == typeof u.data) && (o += (nr.test(o) ? "&" : "?") + u.data,
            delete u.data),
            !1 === u.cache && (o = o.replace(oo, "$1"),
            p = (nr.test(o) ? "&" : "?") + "_=" + sf++ + p),
            u.url = o + p);
            u.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]),
            i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
            (u.data && u.hasContent && !1 !== u.contentType || r.contentType) && e.setRequestHeader("Content-Type", u.contentType);
            e.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + lf + "; q=0.01" : "") : u.accepts["*"]);
            for (g in u.headers)
                e.setRequestHeader(g, u.headers[g]);
            if (u.beforeSend && (!1 === u.beforeSend.call(h, e, u) || s))
                return e.abort();
            if (ft = "abort",
            it.add(u.complete),
            e.done(u.success),
            e.fail(u.error),
            a = vf(ir, u, r, e)) {
                if (e.readyState = 1,
                y && nt.trigger("ajaxSend", [e, u]),
                s)
                    return e;
                u.async && u.timeout > 0 && (d = n.setTimeout(function() {
                    e.abort("timeout")
                }, u.timeout));
                try {
                    s = !1;
                    a.send(rt, b)
                } catch (n) {
                    if (s)
                        throw n;
                    b(-1, n)
                }
            } else
                b(-1, "No Transport");
            return e
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, void 0, t, "script")
        }
    }),
    i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, f, e) {
            return u(r) && (e = e || f,
            f = r,
            r = void 0),
            i.ajax(i.extend({
                url: n,
                type: t,
                dataType: e,
                data: r,
                success: f
            }, i.isPlainObject(n) && n))
        }
    }),
    i._evalUrl = function(n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            cache: !0,
            "async": !1,
            global: !1,
            throws: !0
        })
    }
    ,
    i.fn.extend({
        wrapAll: function(n) {
            var t;
            return this[0] && (u(n) && (n = n.call(this[0])),
            t = i(n, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var n = this; n.firstElementChild; )
                    n = n.firstElementChild;
                return n
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return u(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this)
                  , r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = u(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function(n) {
            return this.parent(n).not("body").each(function() {
                i(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    i.expr.pseudos.hidden = function(n) {
        return !i.expr.pseudos.visible(n)
    }
    ,
    i.expr.pseudos.visible = function(n) {
        return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
    }
    ,
    i.ajaxSettings.xhr = function() {
        try {
            return new n.XMLHttpRequest
        } catch (n) {}
    }
    ,
    yf = {
        0: 200,
        1223: 204
    },
    ct = i.ajaxSettings.xhr(),
    e.cors = !!ct && "withCredentials"in ct,
    e.ajax = ct = !!ct,
    i.ajaxTransport(function(t) {
        var i, r;
        if (e.cors || ct && !t.crossDomain)
            return {
                send: function(u, f) {
                    var o, e = t.xhr();
                    if (e.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (o in t.xhrFields)
                            e[o] = t.xhrFields[o];
                    t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                    t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest");
                    for (o in u)
                        e.setRequestHeader(o, u[o]);
                    i = function(n) {
                        return function() {
                            i && (i = r = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null,
                            "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(yf[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {
                                binary: e.response
                            } : {
                                text: e.responseText
                            }, e.getAllResponseHeaders()))
                        }
                    }
                    ;
                    e.onload = i();
                    r = e.onerror = e.ontimeout = i("error");
                    void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function() {
                        4 === e.readyState && n.setTimeout(function() {
                            i && r()
                        })
                    }
                    ;
                    i = i("abort");
                    try {
                        e.send(t.hasContent && t.data || null)
                    } catch (n) {
                        if (i)
                            throw n;
                    }
                },
                abort: function() {
                    i && i()
                }
            }
    }),
    i.ajaxPrefilter(function(n) {
        n.crossDomain && (n.contents.script = !1)
    }),
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n),
                n
            }
        }
    }),
    i.ajaxPrefilter("script", function(n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }),
    i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var r, t;
            return {
                send: function(u, e) {
                    r = i("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", t = function(n) {
                        r.remove();
                        t = null;
                        n && e("error" === n.type ? 404 : 200, n.type)
                    }
                    );
                    f.head.appendChild(r[0])
                },
                abort: function() {
                    t && t()
                }
            }
        }
    }),
    fr = [],
    oi = /(=)\?(?=&|$)|\?\?/,
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = fr.pop() || i.expando + "_" + sf++;
            return this[n] = !0,
            n
        }
    }),
    i.ajaxPrefilter("json jsonp", function(t, r, f) {
        var e, o, s, h = !1 !== t.jsonp && (oi.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && oi.test(t.data) && "data");
        if (h || "jsonp" === t.dataTypes[0])
            return e = t.jsonpCallback = u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            h ? t[h] = t[h].replace(oi, "$1" + e) : !1 !== t.jsonp && (t.url += (nr.test(t.url) ? "&" : "?") + t.jsonp + "=" + e),
            t.converters["script json"] = function() {
                return s || i.error(e + " was not called"),
                s[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = n[e],
            n[e] = function() {
                s = arguments
            }
            ,
            f.always(function() {
                void 0 === o ? i(n).removeProp(e) : n[e] = o;
                t[e] && (t.jsonpCallback = r.jsonpCallback,
                fr.push(e));
                s && u(o) && o(s[0]);
                s = o = void 0
            }),
            "script"
    }),
    e.createHTMLDocument = function() {
        var n = f.implementation.createHTMLDocument("").body;
        return n.innerHTML = "<form><\/form><form><\/form>",
        2 === n.childNodes.length
    }(),
    i.parseHTML = function(n, t, r) {
        if ("string" != typeof n)
            return [];
        "boolean" == typeof t && (r = t,
        t = !1);
        var s, u, o;
        return t || (e.createHTMLDocument ? ((s = (t = f.implementation.createHTMLDocument("")).createElement("base")).href = f.location.href,
        t.head.appendChild(s)) : t = f),
        u = ci.exec(n),
        o = !r && [],
        u ? [t.createElement(u[1])] : (u = eu([n], t, o),
        o && o.length && i(o).remove(),
        i.merge([], u.childNodes))
    }
    ,
    i.fn.load = function(n, t, r) {
        var f, s, h, e = this, o = n.indexOf(" ");
        return o > -1 && (f = g(n.slice(o)),
        n = n.slice(0, o)),
        u(t) ? (r = t,
        t = void 0) : t && "object" == typeof t && (s = "POST"),
        e.length > 0 && i.ajax({
            url: n,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done(function(n) {
            h = arguments;
            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
        }).always(r && function(n, t) {
            e.each(function() {
                r.apply(this, h || [n.responseText, t, n])
            })
        }
        ),
        this
    }
    ,
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }),
    i.expr.pseudos.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }
    ,
    i.offset = {
        setOffset: function(n, t, r) {
            var v, o, s, h, f, c, y, l = i.css(n, "position"), a = i(n), e = {};
            "static" === l && (n.style.position = "relative");
            f = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            (y = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1) ? (h = (v = a.position()).top,
            o = v.left) : (h = parseFloat(s) || 0,
            o = parseFloat(c) || 0);
            u(t) && (t = t.call(n, r, i.extend({}, f)));
            null != t.top && (e.top = t.top - f.top + h);
            null != t.left && (e.left = t.left - f.left + o);
            "using"in t ? t.using.call(n, e) : a.css(e)
        }
    },
    i.fn.extend({
        offset: function(n) {
            if (arguments.length)
                return void 0 === n ? this : this.each(function(t) {
                    i.offset.setOffset(this, n, t)
                });
            var r, u, t = this[0];
            if (t)
                return t.getClientRects().length ? (r = t.getBoundingClientRect(),
                u = t.ownerDocument.defaultView,
                {
                    top: r.top + u.pageYOffset,
                    left: r.left + u.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
        },
        position: function() {
            if (this[0]) {
                var n, r, u, t = this[0], f = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === i.css(t, "position"))
                    r = t.getBoundingClientRect();
                else {
                    for (r = this.offset(),
                    u = t.ownerDocument,
                    n = t.offsetParent || u.documentElement; n && (n === u.body || n === u.documentElement) && "static" === i.css(n, "position"); )
                        n = n.parentNode;
                    n && n !== t && 1 === n.nodeType && ((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0),
                    f.left += i.css(n, "borderLeftWidth", !0))
                }
                return {
                    top: r.top - f.top - i.css(t, "marginTop", !0),
                    left: r.left - f.left - i.css(t, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent; n && "static" === i.css(n, "position"); )
                    n = n.offsetParent;
                return n || ii
            })
        }
    }),
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function(i) {
            return p(this, function(n, i, u) {
                var f;
                if (tt(n) ? f = n : 9 === n.nodeType && (f = n.defaultView),
                void 0 === u)
                    return f ? f[t] : n[i];
                f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
            }, n, i, arguments.length)
        }
    }),
    i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = au(e.pixelPosition, function(n, r) {
            if (r)
                return r = yt(n, t),
                pi.test(r) ? i(n).position()[t] + "px" : r
        })
    }),
    i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(f, e) {
                var o = arguments.length && (r || "boolean" != typeof f)
                  , s = r || (!0 === f || !0 === e ? "margin" : "border");
                return p(this, function(t, r, f) {
                    var e;
                    return tt(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement,
                    Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s)
                }, t, o ? f : void 0, o)
            }
        })
    }),
    i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    }),
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    }),
    i.fn.extend({
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    }),
    i.proxy = function(n, t) {
        var f, e, r;
        if ("string" == typeof t && (f = n[t],
        t = n,
        n = f),
        u(n))
            return e = d.call(arguments, 2),
            r = function() {
                return n.apply(t || this, e.concat(d.call(arguments)))
            }
            ,
            r.guid = n.guid = n.guid || i.guid++,
            r
    }
    ,
    i.holdReady = function(n) {
        n ? i.readyWait++ : i.ready(!0)
    }
    ,
    i.isArray = Array.isArray,
    i.parseJSON = JSON.parse,
    i.nodeName = v,
    i.isFunction = u,
    i.isWindow = tt,
    i.camelCase = y,
    i.type = it,
    i.now = Date.now,
    i.isNumeric = function(n) {
        var t = i.type(n);
        return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    }),
    pf = n.jQuery,
    wf = n.$,
    i.noConflict = function(t) {
        return n.$ === i && (n.$ = wf),
        t && n.jQuery === i && (n.jQuery = pf),
        i
    }
    ,
    t || (n.jQuery = n.$ = i),
    i
});
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function(n, t, i) {
    function o(n, t) {
        return typeof n === t
    }
    function ht() {
        var i, n, u, f, e, s, t;
        for (var h in l)
            if (l.hasOwnProperty(h)) {
                if (i = [],
                n = l[h],
                n.name && (i.push(n.name.toLowerCase()),
                n.options && n.options.aliases && n.options.aliases.length))
                    for (u = 0; u < n.options.aliases.length; u++)
                        i.push(n.options.aliases[u].toLowerCase());
                for (f = o(n.fn, "function") ? n.fn() : n.fn,
                e = 0; e < i.length; e++)
                    s = i[e],
                    t = s.split("."),
                    1 === t.length ? r[t[0]] = f : (!r[t[0]] || r[t[0]]instanceof Boolean || (r[t[0]] = new Boolean(r[t[0]])),
                    r[t[0]][t[1]] = f),
                    rt.push((f ? "" : "no-") + t.join("-"))
            }
    }
    function g(n) {
        var t = s.className, i = r._config.classPrefix || "", u;
        (v && (t = t.baseVal),
        r._config.enableJSClass) && (u = new RegExp("(^|\\s)" + i + "no-js(\\s|$)"),
        t = t.replace(u, "$1" + i + "js$2"));
        r._config.enableClasses && (t += " " + i + n.join(" " + i),
        v ? s.className.baseVal = t : s.className = t)
    }
    function a(n, t) {
        var u, i, f;
        if ("object" == typeof n)
            for (u in n)
                et(n, u) && a(u, n[u]);
        else {
            if (n = n.toLowerCase(),
            i = n.split("."),
            f = r[i[0]],
            2 == i.length && (f = f[i[1]]),
            "undefined" != typeof f)
                return r;
            t = "function" == typeof t ? t() : t;
            1 == i.length ? r[i[0]] = t : (!r[i[0]] || r[i[0]]instanceof Boolean || (r[i[0]] = new Boolean(r[i[0]])),
            r[i[0]][i[1]] = t);
            g([(t && 0 != t ? "" : "no-") + i.join("-")]);
            r._trigger(n, t)
        }
        return r
    }
    function f() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : v ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }
    function ct() {
        var n = t.body;
        return n || (n = f(v ? "svg" : "body"),
        n.fake = !0),
        n
    }
    function p(n, i, r, u) {
        var o, a, c, v, l = "modernizr", h = f("div"), e = ct();
        if (parseInt(r, 10))
            for (; r--; )
                c = f("div"),
                c.id = u ? u[r] : l + (r + 1),
                h.appendChild(c);
        return o = f("style"),
        o.type = "text/css",
        o.id = "s" + l,
        (e.fake ? e : h).appendChild(o),
        e.appendChild(h),
        o.styleSheet ? o.styleSheet.cssText = n : o.appendChild(t.createTextNode(n)),
        h.id = l,
        e.fake && (e.style.background = "",
        e.style.overflow = "hidden",
        v = s.style.overflow,
        s.style.overflow = "hidden",
        s.appendChild(e)),
        a = i(h, n),
        e.fake ? (e.parentNode.removeChild(e),
        s.style.overflow = v,
        s.offsetHeight) : h.parentNode.removeChild(h),
        !!a
    }
    function lt(n, t) {
        return !!~("" + n).indexOf(t)
    }
    function nt(n) {
        return n.replace(/([A-Z])/g, function(n, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function at(t, i, r) {
        var u, f, e;
        return "getComputedStyle"in n ? (u = getComputedStyle.call(n, t, i),
        f = n.console,
        null !== u ? r && (u = u.getPropertyValue(r)) : f && (e = f.error ? "error" : "log",
        f[e].call(f, "getComputedStyle returning null, its possible modernizr test results are inaccurate"))) : u = !i && t.currentStyle && t.currentStyle[r],
        u
    }
    function vt(t, r) {
        var f = t.length, u;
        if ("CSS"in n && "supports"in n.CSS) {
            for (; f--; )
                if (n.CSS.supports(nt(t[f]), r))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in n) {
            for (u = []; f--; )
                u.push("(" + nt(t[f]) + ":" + r + ")");
            return u = u.join(" or "),
            p("@supports (" + u + ") { #modernizr { position: absolute; } }", function(n) {
                return "absolute" == at(n, null, "position")
            })
        }
        return i
    }
    function yt(n) {
        return n.replace(/([a-z])-([a-z])/g, function(n, t, i) {
            return t + i.toUpperCase()
        }).replace(/^-/, "")
    }
    function tt(n, t, r, u) {
        function c() {
            v && (delete e.style,
            delete e.modElem)
        }
        var l, v, h, y, s, p, a;
        if ((u = o(u, "undefined") ? !1 : u,
        !o(r, "undefined")) && (l = vt(n, r),
        !o(l, "undefined")))
            return l;
        for (a = ["modernizr", "tspan", "samp"]; !e.style && a.length; )
            v = !0,
            e.modElem = f(a.shift()),
            e.style = e.modElem.style;
        for (y = n.length,
        h = 0; y > h; h++)
            if (s = n[h],
            p = e.style[s],
            lt(s, "-") && (s = yt(s)),
            e.style[s] !== i) {
                if (u || o(r, "undefined"))
                    return c(),
                    "pfx" == t ? s : !0;
                try {
                    e.style[s] = r
                } catch (w) {}
                if (e.style[s] != p)
                    return c(),
                    "pfx" == t ? s : !0
            }
        return c(),
        !1
    }
    function pt(n, t) {
        return function() {
            return n.apply(t, arguments)
        }
    }
    function wt(n, t, i) {
        var r;
        for (var u in n)
            if (n[u]in t)
                return i === !1 ? n[u] : (r = t[n[u]],
                o(r, "function") ? pt(r, i || t) : r);
        return !1
    }
    function it(n, t, i, r, u) {
        var f = n.charAt(0).toUpperCase() + n.slice(1)
          , e = (n + " " + b.join(f + " ") + f).split(" ");
        return o(t, "string") || o(t, "undefined") ? tt(e, t, r, u) : (e = (n + " " + c.join(f + " ") + f).split(" "),
        wt(e, t, i))
    }
    function h(n, t, r) {
        return it(n, i, i, t, r)
    }
    var l = [], u = {
        _version: "3.6.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(n, t) {
            var i = this;
            setTimeout(function() {
                t(i[n])
            }, 0)
        },
        addTest: function(n, t, i) {
            l.push({
                name: n,
                fn: t,
                options: i
            })
        },
        addAsyncTest: function(n) {
            l.push({
                name: null,
                fn: n
            })
        }
    }, r = function() {}, ft, et, w, ot, st, b, k, e, d, y;
    r.prototype = u;
    r = new r;
    var rt = []
      , s = t.documentElement
      , v = "svg" === s.nodeName.toLowerCase()
      , ut = "Moz O ms Webkit"
      , c = u._config.usePrefixes ? ut.toLowerCase().split(" ") : [];
    u._domPrefixes = c;
    ft = u._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    u._prefixes = ft;
    !function() {
        var n = {}.hasOwnProperty;
        et = o(n, "undefined") || o(n.call, "undefined") ? function(n, t) {
            return t in n && o(n.constructor.prototype[t], "undefined")
        }
        : function(t, i) {
            return n.call(t, i)
        }
    }();
    u._l = {};
    u.on = function(n, t) {
        this._l[n] || (this._l[n] = []);
        this._l[n].push(t);
        r.hasOwnProperty(n) && setTimeout(function() {
            r._trigger(n, r[n])
        }, 0)
    }
    ;
    u._trigger = function(n, t) {
        if (this._l[n]) {
            var i = this._l[n];
            setTimeout(function() {
                for (var r, n = 0; n < i.length; n++)
                    (r = i[n])(t)
            }, 0);
            delete this._l[n]
        }
    }
    ;
    r._q.push(function() {
        u.addTest = a
    });
    w = function() {
        function n(n, t) {
            var u;
            return n ? (t && "string" != typeof t || (t = f(t || "div")),
            n = "on" + n,
            u = n in t,
            !u && r && (t.setAttribute || (t = f("div")),
            t.setAttribute(n, ""),
            u = "function" == typeof t[n],
            t[n] !== i && (t[n] = i),
            t.removeAttribute(n)),
            u) : !1
        }
        var r = !("onblur"in t.documentElement);
        return n
    }();
    u.hasEvent = w;
    ot = function() {
        var t = n.matchMedia || n.msMatchMedia;
        return t ? function(n) {
            var i = t(n);
            return i && i.matches || !1
        }
        : function(t) {
            var i = !1;
            return p("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                i = "absolute" == (n.getComputedStyle ? n.getComputedStyle(t, null) : t.currentStyle).position
            }),
            i
        }
    }();
    u.mq = ot;
    st = function(n, t) {
        var i = !1, e = f("div"), r = e.style, u;
        if (n in r)
            for (u = c.length,
            r[n] = t,
            i = r[n]; u-- && !i; )
                r[n] = "-" + c[u] + "-" + t,
                i = r[n];
        return "" === i && (i = !1),
        i
    }
    ;
    u.prefixedCSSValue = st;
    b = u._config.usePrefixes ? ut.split(" ") : [];
    u._cssomPrefixes = b;
    k = {
        elem: f("modernizr")
    };
    r._q.push(function() {
        delete k.elem
    });
    e = {
        style: k.elem.style
    };
    r._q.unshift(function() {
        delete e.style
    });
    u.testAllProps = it;
    u.testAllProps = h;
    u.testProp = function(n, t, r) {
        return tt([n], i, t, r)
    }
    ;
    u.testStyles = p;
    r.addTest("customelements", "customElements"in n);
    r.addTest("history", function() {
        var t = navigator.userAgent;
        return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol ? n.history && "pushState"in n.history : !1
    });
    r.addTest("pointerevents", function() {
        for (var n = !1, t = c.length, n = r.hasEvent("pointerdown"); t-- && !n; )
            w(c[t] + "pointerdown") && (n = !0);
        return n
    });
    r.addTest("postmessage", "postMessage"in n);
    r.addTest("webgl", function() {
        var t = f("canvas")
          , i = "probablySupportsContext"in t ? "probablySupportsContext" : "supportsContext";
        return i in t ? t[i]("webgl") || t[i]("experimental-webgl") : "WebGLRenderingContext"in n
    });
    d = !1;
    try {
        d = "WebSocket"in n && 2 === n.WebSocket.CLOSING
    } catch (bt) {}
    for (r.addTest("websockets", d),
    r.addTest("cssanimations", h("animationName", "a", !0)),
    function() {
        r.addTest("csscolumns", function() {
            var n = !1
              , t = h("columnCount");
            try {
                n = !!t;
                n && (n = new Boolean(n))
            } catch (i) {}
            return n
        });
        for (var n, i, u = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], t = 0; t < u.length; t++)
            n = u[t].toLowerCase(),
            i = h("column" + u[t]),
            ("breakbefore" === n || "breakafter" === n || "breakinside" == n) && (i = i || h(u[t])),
            r.addTest("csscolumns." + n, i)
    }(),
    r.addTest("flexbox", h("flexBasis", "1px", !0)),
    r.addTest("picture", "HTMLPictureElement"in n),
    r.addAsyncTest(function() {
        var t, r, i, n = f("img"), u = "sizes"in n;
        !u && "srcset"in n ? (r = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
        t = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        i = function() {
            a("sizes", 2 == n.width)
        }
        ,
        n.onload = i,
        n.onerror = i,
        n.setAttribute("sizes", "9px"),
        n.srcset = t + " 1w," + r + " 8w",
        n.src = t) : a("sizes", u)
    }),
    r.addTest("srcset", "srcset"in f("img")),
    r.addTest("webworkers", "Worker"in n),
    ht(),
    g(rt),
    delete u.addTest,
    delete u.addAsyncTest,
    y = 0; y < r._q.length; y++)
        r._q[y]();
    n.Modernizr = r
}(window, document),
function() {
    for (var n, u = function() {}, t = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], i = t.length, r = window.console = window.console || {}; i--; )
        n = t[i],
        r[n] || (r[n] = u)
}();
/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((n = n || self).bootstrap = {}, n.jQuery, n.Popper)
}(this, function(n, t, i) {
    "use strict";
    function eu(n, t) {
        for (var i, r = 0; r < t.length; r++)
            i = t[r],
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(n, i.key, i)
    }
    function c(n, t, i) {
        return t && eu(n.prototype, t),
        i && eu(n, i),
        n
    }
    function ou(n, t) {
        var r = Object.keys(n), i;
        return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(n),
        t && (i = i.filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
        })),
        r.push.apply(r, i)),
        r
    }
    function f(n) {
        for (var i, t = 1; t < arguments.length; t++)
            i = null != arguments[t] ? arguments[t] : {},
            t % 2 ? ou(Object(i), !0).forEach(function(t) {
                var r, u, f;
                r = n;
                f = i[u = t];
                u in r ? Object.defineProperty(r, u, {
                    value: f,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[u] = f
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : ou(Object(i)).forEach(function(t) {
                Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(i, t))
            });
        return n
    }
    function vf(n) {
        var u = this
          , i = !1;
        return t(this).one(r.TRANSITION_END, function() {
            i = !0
        }),
        setTimeout(function() {
            i || r.triggerTransitionEnd(u)
        }, n),
        this
    }
    function du(n, t, i) {
        if (0 === n.length)
            return n;
        if (i && "function" == typeof i)
            return i(n);
        for (var u = (new window.DOMParser).parseFromString(n, "text/html"), e = Object.keys(t), f = [].slice.call(u.body.querySelectorAll("*")), o = function(n) {
            var i = f[n], o = i.nodeName.toLowerCase(), r, u;
            if (-1 === e.indexOf(i.nodeName.toLowerCase()))
                return i.parentNode.removeChild(i),
                "continue";
            r = [].slice.call(i.attributes);
            u = [].concat(t["*"] || [], t[o] || []);
            r.forEach(function(n) {
                (function(n, t) {
                    var i = n.nodeName.toLowerCase();
                    if (-1 !== t.indexOf(i))
                        return -1 === ss.indexOf(i) || Boolean(n.nodeValue.match(hs) || n.nodeValue.match(cs));
                    for (var u = t.filter(function(n) {
                        return n instanceof RegExp
                    }), r = 0, f = u.length; r < f; r++)
                        if (i.match(u[r]))
                            return !0;
                    return !1
                }
                )(n, u) || i.removeAttribute(n.nodeName)
            })
        }, r = 0, s = f.length; r < s; r++)
            o(r);
        return u.body.innerHTML
    }
    var vt, r;
    t = t && t.hasOwnProperty("default") ? t.default : t;
    i = i && i.hasOwnProperty("default") ? i.default : i;
    vt = "transitionend";
    r = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(n) {
            for (; n += ~~(1e6 * Math.random()),
            document.getElementById(n); )
                ;
            return n
        },
        getSelectorFromElement: function(n) {
            var t = n.getAttribute("data-target"), i;
            t && "#" !== t || (i = n.getAttribute("href"),
            t = i && "#" !== i ? i.trim() : "");
            try {
                return document.querySelector(t) ? t : null
            } catch (n) {
                return null
            }
        },
        getTransitionDurationFromElement: function(n) {
            if (!n)
                return 0;
            var i = t(n).css("transition-duration")
              , r = t(n).css("transition-delay")
              , u = parseFloat(i)
              , f = parseFloat(r);
            return u || f ? (i = i.split(",")[0],
            r = r.split(",")[0],
            1e3 * (parseFloat(i) + parseFloat(r))) : 0
        },
        reflow: function(n) {
            return n.offsetHeight
        },
        triggerTransitionEnd: function(n) {
            t(n).trigger(vt)
        },
        supportsTransitionEnd: function() {
            return Boolean(vt)
        },
        isElement: function(n) {
            return (n[0] || n).nodeType
        },
        typeCheckConfig: function(n, t, i) {
            var u, s;
            for (u in i)
                if (Object.prototype.hasOwnProperty.call(i, u)) {
                    var e = i[u]
                      , f = t[u]
                      , o = f && r.isElement(f) ? "element" : (s = f,
                    {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(e).test(o))
                        throw new Error(n.toUpperCase() + ': Option "' + u + '" provided type "' + o + '" but expected type "' + e + '".');
                }
        },
        findShadowRoot: function(n) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" != typeof n.getRootNode)
                return n instanceof ShadowRoot ? n : n.parentNode ? r.findShadowRoot(n.parentNode) : null;
            var t = n.getRootNode();
            return t instanceof ShadowRoot ? t : null
        },
        jQueryDetection: function() {
            if ("undefined" == typeof t)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var n = t.fn.jquery.split(" ")[0].split(".");
            if (n[0] < 2 && n[1] < 9 || 1 === n[0] && 9 === n[1] && n[2] < 1 || 4 <= n[0])
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        }
    };
    r.jQueryDetection();
    t.fn.emulateTransitionEnd = vf;
    t.event.special[r.TRANSITION_END] = {
        bindType: vt,
        delegateType: vt,
        handle: function(n) {
            if (t(n.target).is(this))
                return n.handleObj.handler.apply(this, arguments)
        }
    };
    var yt = "alert"
      , pi = "bs.alert"
      , ar = "." + pi
      , yf = t.fn[yt]
      , vr = {
        CLOSE: "close" + ar,
        CLOSED: "closed" + ar,
        CLICK_DATA_API: "click" + ar + ".data-api"
    }
      , pf = "alert"
      , wf = "fade"
      , bf = "show"
      , rt = function() {
        function n(n) {
            this._element = n
        }
        var i = n.prototype;
        return i.close = function(n) {
            var t = this._element;
            n && (t = this._getRootElement(n));
            this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }
        ,
        i.dispose = function() {
            t.removeData(this._element, pi);
            this._element = null
        }
        ,
        i._getRootElement = function(n) {
            var u = r.getSelectorFromElement(n)
              , i = !1;
            return u && (i = document.querySelector(u)),
            i = i || t(n).closest("." + pf)[0]
        }
        ,
        i._triggerCloseEvent = function(n) {
            var i = t.Event(vr.CLOSE);
            return t(n).trigger(i),
            i
        }
        ,
        i._removeElement = function(n) {
            var u = this, i;
            (t(n).removeClass(bf),
            t(n).hasClass(wf)) ? (i = r.getTransitionDurationFromElement(n),
            t(n).one(r.TRANSITION_END, function(t) {
                return u._destroyElement(n, t)
            }).emulateTransitionEnd(i)) : this._destroyElement(n)
        }
        ,
        i._destroyElement = function(n) {
            t(n).detach().trigger(vr.CLOSED).remove()
        }
        ,
        n._jQueryInterface = function(i) {
            return this.each(function() {
                var u = t(this)
                  , r = u.data(pi);
                r || (r = new n(this),
                u.data(pi, r));
                "close" === i && r[i](this)
            })
        }
        ,
        n._handleDismiss = function(n) {
            return function(t) {
                t && t.preventDefault();
                n.close(this)
            }
        }
        ,
        c(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]),
        n
    }();
    t(document).on(vr.CLICK_DATA_API, '[data-dismiss="alert"]', rt._handleDismiss(new rt));
    t.fn[yt] = rt._jQueryInterface;
    t.fn[yt].Constructor = rt;
    t.fn[yt].noConflict = function() {
        return t.fn[yt] = yf,
        rt._jQueryInterface
    }
    ;
    var pt = "button"
      , wi = "bs.button"
      , bi = "." + wi
      , ki = ".data-api"
      , kf = t.fn[pt]
      , y = "active"
      , df = "btn"
      , gf = "focus"
      , su = '[data-toggle^="button"]'
      , ne = '[data-toggle="buttons"]'
      , te = '[data-toggle="button"]'
      , ie = '[data-toggle="buttons"] .btn'
      , yr = 'input:not([type="hidden"])'
      , re = ".active"
      , hu = ".btn"
      , pr = {
        CLICK_DATA_API: "click" + bi + ki,
        FOCUS_BLUR_DATA_API: "focus" + bi + ki + " blur" + bi + ki,
        LOAD_DATA_API: "load" + bi + ki
    }
      , wt = function() {
        function n(n) {
            this._element = n
        }
        var i = n.prototype;
        return i.toggle = function() {
            var i = !0, u = !0, f = t(this._element).closest(ne)[0], n, r;
            f && (n = this._element.querySelector(yr),
            n && ("radio" === n.type ? n.checked && this._element.classList.contains(y) ? i = !1 : (r = f.querySelector(re),
            r && t(r).removeClass(y)) : "checkbox" === n.type ? "LABEL" === this._element.tagName && n.checked === this._element.classList.contains(y) && (i = !1) : i = !1,
            i && (n.checked = !this._element.classList.contains(y),
            t(n).trigger("change")),
            n.focus(),
            u = !1));
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (u && this._element.setAttribute("aria-pressed", !this._element.classList.contains(y)),
            i && t(this._element).toggleClass(y))
        }
        ,
        i.dispose = function() {
            t.removeData(this._element, wi);
            this._element = null
        }
        ,
        n._jQueryInterface = function(i) {
            return this.each(function() {
                var r = t(this).data(wi);
                r || (r = new n(this),
                t(this).data(wi, r));
                "toggle" === i && r[i]()
            })
        }
        ,
        c(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]),
        n
    }();
    t(document).on(pr.CLICK_DATA_API, su, function(n) {
        var i = n.target, r;
        if (t(i).hasClass(df) || (i = t(i).closest(hu)[0]),
        !i || i.hasAttribute("disabled") || i.classList.contains("disabled"))
            n.preventDefault();
        else {
            if (r = i.querySelector(yr),
            r && (r.hasAttribute("disabled") || r.classList.contains("disabled")))
                return void n.preventDefault();
            wt._jQueryInterface.call(t(i), "toggle")
        }
    }).on(pr.FOCUS_BLUR_DATA_API, su, function(n) {
        var i = t(n.target).closest(hu)[0];
        t(i).toggleClass(gf, /^focus(in)?$/.test(n.type))
    });
    t(window).on(pr.LOAD_DATA_API, function() {
        for (var t, f, i, e, r, n = [].slice.call(document.querySelectorAll(ie)), u = 0, o = n.length; u < o; u++)
            t = n[u],
            f = t.querySelector(yr),
            f.checked || f.hasAttribute("checked") ? t.classList.add(y) : t.classList.remove(y);
        for (i = 0,
        e = (n = [].slice.call(document.querySelectorAll(te))).length; i < e; i++)
            r = n[i],
            "true" === r.getAttribute("aria-pressed") ? r.classList.add(y) : r.classList.remove(y)
    });
    t.fn[pt] = wt._jQueryInterface;
    t.fn[pt].Constructor = wt;
    t.fn[pt].noConflict = function() {
        return t.fn[pt] = kf,
        wt._jQueryInterface
    }
    ;
    var ut = "carousel"
      , bt = "bs.carousel"
      , e = "." + bt
      , cu = ".data-api"
      , ue = t.fn[ut]
      , wr = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , fe = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , di = "next"
      , gi = "prev"
      , ee = "left"
      , oe = "right"
      , o = {
        SLIDE: "slide" + e,
        SLID: "slid" + e,
        KEYDOWN: "keydown" + e,
        MOUSEENTER: "mouseenter" + e,
        MOUSELEAVE: "mouseleave" + e,
        TOUCHSTART: "touchstart" + e,
        TOUCHMOVE: "touchmove" + e,
        TOUCHEND: "touchend" + e,
        POINTERDOWN: "pointerdown" + e,
        POINTERUP: "pointerup" + e,
        DRAG_START: "dragstart" + e,
        LOAD_DATA_API: "load" + e + cu,
        CLICK_DATA_API: "click" + e + cu
    }
      , se = "carousel"
      , b = "active"
      , he = "slide"
      , ce = "carousel-item-right"
      , le = "carousel-item-left"
      , ae = "carousel-item-next"
      , ve = "carousel-item-prev"
      , ye = "pointer-event"
      , pe = ".active"
      , br = ".active.carousel-item"
      , we = ".carousel-item"
      , be = ".carousel-item img"
      , ke = ".carousel-item-next, .carousel-item-prev"
      , de = ".carousel-indicators"
      , ge = '[data-ride="carousel"]'
      , lu = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , ft = function() {
        function i(n, t) {
            this._items = null;
            this._interval = null;
            this._activeElement = null;
            this._isPaused = !1;
            this._isSliding = !1;
            this.touchTimeout = null;
            this.touchStartX = 0;
            this.touchDeltaX = 0;
            this._config = this._getConfig(t);
            this._element = n;
            this._indicatorsElement = this._element.querySelector(de);
            this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints;
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);
            this._addEventListeners()
        }
        var n = i.prototype;
        return n.next = function() {
            this._isSliding || this._slide(di)
        }
        ,
        n.nextWhenVisible = function() {
            !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
        }
        ,
        n.prev = function() {
            this._isSliding || this._slide(gi)
        }
        ,
        n.pause = function(n) {
            n || (this._isPaused = !0);
            this._element.querySelector(ke) && (r.triggerTransitionEnd(this._element),
            this.cycle(!0));
            clearInterval(this._interval);
            this._interval = null
        }
        ,
        n.cycle = function(n) {
            n || (this._isPaused = !1);
            this._interval && (clearInterval(this._interval),
            this._interval = null);
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        n.to = function(n) {
            var u = this, i, r;
            if (this._activeElement = this._element.querySelector(br),
            i = this._getItemIndex(this._activeElement),
            !(n > this._items.length - 1 || n < 0))
                if (this._isSliding)
                    t(this._element).one(o.SLID, function() {
                        return u.to(n)
                    });
                else {
                    if (i === n)
                        return this.pause(),
                        void this.cycle();
                    r = i < n ? di : gi;
                    this._slide(r, this._items[n])
                }
        }
        ,
        n.dispose = function() {
            t(this._element).off(e);
            t.removeData(this._element, bt);
            this._items = null;
            this._config = null;
            this._element = null;
            this._interval = null;
            this._isPaused = null;
            this._isSliding = null;
            this._activeElement = null;
            this._indicatorsElement = null
        }
        ,
        n._getConfig = function(n) {
            return n = f({}, wr, {}, n),
            r.typeCheckConfig(ut, n, fe),
            n
        }
        ,
        n._handleSwipe = function() {
            var t = Math.abs(this.touchDeltaX), n;
            t <= 40 || (n = t / this.touchDeltaX,
            (this.touchDeltaX = 0) < n && this.prev(),
            n < 0 && this.next())
        }
        ,
        n._addEventListeners = function() {
            var n = this;
            this._config.keyboard && t(this._element).on(o.KEYDOWN, function(t) {
                return n._keydown(t)
            });
            "hover" === this._config.pause && t(this._element).on(o.MOUSEENTER, function(t) {
                return n.pause(t)
            }).on(o.MOUSELEAVE, function(t) {
                return n.cycle(t)
            });
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        n._addTouchEventListeners = function() {
            var n = this, i, r;
            this._touchSupported && (i = function(t) {
                n._pointerEvent && lu[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
            }
            ,
            r = function(t) {
                n._pointerEvent && lu[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX);
                n._handleSwipe();
                "hover" === n._config.pause && (n.pause(),
                n.touchTimeout && clearTimeout(n.touchTimeout),
                n.touchTimeout = setTimeout(function(t) {
                    return n.cycle(t)
                }, 500 + n._config.interval))
            }
            ,
            t(this._element.querySelectorAll(be)).on(o.DRAG_START, function(n) {
                return n.preventDefault()
            }),
            this._pointerEvent ? (t(this._element).on(o.POINTERDOWN, function(n) {
                return i(n)
            }),
            t(this._element).on(o.POINTERUP, function(n) {
                return r(n)
            }),
            this._element.classList.add(ye)) : (t(this._element).on(o.TOUCHSTART, function(n) {
                return i(n)
            }),
            t(this._element).on(o.TOUCHMOVE, function(t) {
                return function(t) {
                    n.touchDeltaX = t.originalEvent.touches && 1 < t.originalEvent.touches.length ? 0 : t.originalEvent.touches[0].clientX - n.touchStartX
                }(t)
            }),
            t(this._element).on(o.TOUCHEND, function(n) {
                return r(n)
            })))
        }
        ,
        n._keydown = function(n) {
            if (!/input|textarea/i.test(n.target.tagName))
                switch (n.which) {
                case 37:
                    n.preventDefault();
                    this.prev();
                    break;
                case 39:
                    n.preventDefault();
                    this.next()
                }
        }
        ,
        n._getItemIndex = function(n) {
            return this._items = n && n.parentNode ? [].slice.call(n.parentNode.querySelectorAll(we)) : [],
            this._items.indexOf(n)
        }
        ,
        n._getItemByDirection = function(n, t) {
            var u = n === di, f = n === gi, i = this._getItemIndex(t), e = this._items.length - 1, r;
            return (f && 0 === i || u && i === e) && !this._config.wrap ? t : (r = (i + (n === gi ? -1 : 1)) % this._items.length,
            -1 == r ? this._items[this._items.length - 1] : this._items[r])
        }
        ,
        n._triggerSlideEvent = function(n, i) {
            var u = this._getItemIndex(n)
              , f = this._getItemIndex(this._element.querySelector(br))
              , r = t.Event(o.SLIDE, {
                relatedTarget: n,
                direction: i,
                from: f,
                to: u
            });
            return t(this._element).trigger(r),
            r
        }
        ,
        n._setActiveIndicatorElement = function(n) {
            var r, i;
            this._indicatorsElement && (r = [].slice.call(this._indicatorsElement.querySelectorAll(pe)),
            t(r).removeClass(b),
            i = this._indicatorsElement.children[this._getItemIndex(n)],
            i && t(i).addClass(b))
        }
        ,
        n._slide = function(n, i) {
            var e, s, h, a = this, f = this._element.querySelector(br), p = this._getItemIndex(f), u = i || f && this._getItemByDirection(n, f), w = this._getItemIndex(u), v = Boolean(this._interval), c, l, y;
            (h = n === di ? (e = le,
            s = ae,
            ee) : (e = ce,
            s = ve,
            oe),
            u && t(u).hasClass(b)) ? this._isSliding = !1 : !this._triggerSlideEvent(u, h).isDefaultPrevented() && f && u && (this._isSliding = !0,
            v && this.pause(),
            this._setActiveIndicatorElement(u),
            c = t.Event(o.SLID, {
                relatedTarget: u,
                direction: h,
                from: p,
                to: w
            }),
            t(this._element).hasClass(he) ? (t(u).addClass(s),
            r.reflow(u),
            t(f).addClass(e),
            t(u).addClass(e),
            l = parseInt(u.getAttribute("data-interval"), 10),
            l ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
            this._config.interval = l) : this._config.interval = this._config.defaultInterval || this._config.interval,
            y = r.getTransitionDurationFromElement(f),
            t(f).one(r.TRANSITION_END, function() {
                t(u).removeClass(e + " " + s).addClass(b);
                t(f).removeClass(b + " " + s + " " + e);
                a._isSliding = !1;
                setTimeout(function() {
                    return t(a._element).trigger(c)
                }, 0)
            }).emulateTransitionEnd(y)) : (t(f).removeClass(b),
            t(u).addClass(b),
            this._isSliding = !1,
            t(this._element).trigger(c)),
            v && this.cycle())
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var r = t(this).data(bt), u = f({}, wr, {}, t(this).data()), e;
                if ("object" == typeof n && (u = f({}, u, {}, n)),
                e = "string" == typeof n ? n : u.slide,
                r || (r = new i(this,u),
                t(this).data(bt, r)),
                "number" == typeof n)
                    r.to(n);
                else if ("string" == typeof e) {
                    if ("undefined" == typeof r[e])
                        throw new TypeError('No method named "' + e + '"');
                    r[e]()
                } else
                    u.interval && u.ride && (r.pause(),
                    r.cycle())
            })
        }
        ,
        i._dataApiClickHandler = function(n) {
            var s = r.getSelectorFromElement(this), u, o, e;
            s && (u = t(s)[0],
            u && t(u).hasClass(se) && (o = f({}, t(u).data(), {}, t(this).data()),
            e = this.getAttribute("data-slide-to"),
            e && (o.interval = !1),
            i._jQueryInterface.call(t(u), o),
            e && t(u).data(bt).to(e),
            n.preventDefault()))
        }
        ,
        c(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return wr
            }
        }]),
        i
    }();
    t(document).on(o.CLICK_DATA_API, "[data-slide], [data-slide-to]", ft._dataApiClickHandler);
    t(window).on(o.LOAD_DATA_API, function() {
        for (var i, r = [].slice.call(document.querySelectorAll(ge)), n = 0, u = r.length; n < u; n++)
            i = t(r[n]),
            ft._jQueryInterface.call(i, i.data())
    });
    t.fn[ut] = ft._jQueryInterface;
    t.fn[ut].Constructor = ft;
    t.fn[ut].noConflict = function() {
        return t.fn[ut] = ue,
        ft._jQueryInterface
    }
    ;
    var et = "collapse"
      , k = "bs.collapse"
      , kt = "." + k
      , no = t.fn[et]
      , kr = {
        toggle: !0,
        parent: ""
    }
      , to = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , dt = {
        SHOW: "show" + kt,
        SHOWN: "shown" + kt,
        HIDE: "hide" + kt,
        HIDDEN: "hidden" + kt,
        CLICK_DATA_API: "click" + kt + ".data-api"
    }
      , d = "show"
      , gt = "collapse"
      , nr = "collapsing"
      , dr = "collapsed"
      , au = "width"
      , io = "height"
      , ro = ".show, .collapsing"
      , vu = '[data-toggle="collapse"]'
      , ni = function() {
        function i(n, t) {
            this._isTransitioning = !1;
            this._element = n;
            this._config = this._getConfig(t);
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'));
            for (var f = [].slice.call(document.querySelectorAll(vu)), i = 0, o = f.length; i < o; i++) {
                var e = f[i]
                  , u = r.getSelectorFromElement(e)
                  , s = [].slice.call(document.querySelectorAll(u)).filter(function(t) {
                    return t === n
                });
                null !== u && 0 < s.length && (this._selector = u,
                this._triggerArray.push(e))
            }
            this._parent = this._config.parent ? this._getParent() : null;
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray);
            this._config.toggle && this.toggle()
        }
        var n = i.prototype;
        return n.toggle = function() {
            t(this._element).hasClass(d) ? this.hide() : this.show()
        }
        ,
        n.show = function() {
            var n, e, u = this, o, f, s, h;
            this._isTransitioning || t(this._element).hasClass(d) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(ro)).filter(function(n) {
                return "string" == typeof u._config.parent ? n.getAttribute("data-parent") === u._config.parent : n.classList.contains(gt)
            })).length && (n = null),
            n && (e = t(n).not(this._selector).data(k)) && e._isTransitioning) || (o = t.Event(dt.SHOW),
            (t(this._element).trigger(o),
            o.isDefaultPrevented()) || (n && (i._jQueryInterface.call(t(n).not(this._selector), "hide"),
            e || t(n).data(k, null)),
            f = this._getDimension(),
            t(this._element).removeClass(gt).addClass(nr),
            this._element.style[f] = 0,
            this._triggerArray.length && t(this._triggerArray).removeClass(dr).attr("aria-expanded", !0),
            this.setTransitioning(!0),
            s = "scroll" + (f[0].toUpperCase() + f.slice(1)),
            h = r.getTransitionDurationFromElement(this._element),
            t(this._element).one(r.TRANSITION_END, function() {
                t(u._element).removeClass(nr).addClass(gt).addClass(d);
                u._element.style[f] = "";
                u.setTransitioning(!1);
                t(u._element).trigger(dt.SHOWN)
            }).emulateTransitionEnd(h),
            this._element.style[f] = this._element[s] + "px"))
        }
        ,
        n.hide = function() {
            var s = this, u, n, f, i, e, o, h;
            if (!this._isTransitioning && t(this._element).hasClass(d) && (u = t.Event(dt.HIDE),
            t(this._element).trigger(u),
            !u.isDefaultPrevented())) {
                if (n = this._getDimension(),
                this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                r.reflow(this._element),
                t(this._element).addClass(nr).removeClass(gt).removeClass(d),
                f = this._triggerArray.length,
                0 < f)
                    for (i = 0; i < f; i++)
                        e = this._triggerArray[i],
                        o = r.getSelectorFromElement(e),
                        null !== o && (t([].slice.call(document.querySelectorAll(o))).hasClass(d) || t(e).addClass(dr).attr("aria-expanded", !1));
                this.setTransitioning(!0);
                this._element.style[n] = "";
                h = r.getTransitionDurationFromElement(this._element);
                t(this._element).one(r.TRANSITION_END, function() {
                    s.setTransitioning(!1);
                    t(s._element).removeClass(nr).addClass(gt).trigger(dt.HIDDEN)
                }).emulateTransitionEnd(h)
            }
        }
        ,
        n.setTransitioning = function(n) {
            this._isTransitioning = n
        }
        ,
        n.dispose = function() {
            t.removeData(this._element, k);
            this._config = null;
            this._parent = null;
            this._element = null;
            this._triggerArray = null;
            this._isTransitioning = null
        }
        ,
        n._getConfig = function(n) {
            return (n = f({}, kr, {}, n)).toggle = Boolean(n.toggle),
            r.typeCheckConfig(et, n, to),
            n
        }
        ,
        n._getDimension = function() {
            return t(this._element).hasClass(au) ? au : io
        }
        ,
        n._getParent = function() {
            var n, e = this, u, f;
            return r.isElement(this._config.parent) ? (n = this._config.parent,
            "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent),
            u = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
            f = [].slice.call(n.querySelectorAll(u)),
            t(f).each(function(n, t) {
                e._addAriaAndCollapsedClass(i._getTargetFromElement(t), [t])
            }),
            n
        }
        ,
        n._addAriaAndCollapsedClass = function(n, i) {
            var r = t(n).hasClass(d);
            i.length && t(i).toggleClass(dr, !r).attr("aria-expanded", r)
        }
        ,
        i._getTargetFromElement = function(n) {
            var t = r.getSelectorFromElement(n);
            return t ? document.querySelector(t) : null
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var u = t(this)
                  , r = u.data(k)
                  , e = f({}, kr, {}, u.data(), {}, "object" == typeof n && n ? n : {});
                if (!r && e.toggle && /show|hide/.test(n) && (e.toggle = !1),
                r || (r = new i(this,e),
                u.data(k, r)),
                "string" == typeof n) {
                    if ("undefined" == typeof r[n])
                        throw new TypeError('No method named "' + n + '"');
                    r[n]()
                }
            })
        }
        ,
        c(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return kr
            }
        }]),
        i
    }();
    t(document).on(dt.CLICK_DATA_API, vu, function(n) {
        "A" === n.currentTarget.tagName && n.preventDefault();
        var i = t(this)
          , u = r.getSelectorFromElement(this)
          , f = [].slice.call(document.querySelectorAll(u));
        t(f).each(function() {
            var n = t(this)
              , r = n.data(k) ? "toggle" : i.data();
            ni._jQueryInterface.call(n, r)
        })
    });
    t.fn[et] = ni._jQueryInterface;
    t.fn[et].Constructor = ni;
    t.fn[et].noConflict = function() {
        return t.fn[et] = no,
        ni._jQueryInterface
    }
    ;
    var ot = "dropdown"
      , ti = "bs.dropdown"
      , p = "." + ti
      , gr = ".data-api"
      , uo = t.fn[ot]
      , fo = new RegExp("38|40|27")
      , s = {
        HIDE: "hide" + p,
        HIDDEN: "hidden" + p,
        SHOW: "show" + p,
        SHOWN: "shown" + p,
        CLICK: "click" + p,
        CLICK_DATA_API: "click" + p + gr,
        KEYDOWN_DATA_API: "keydown" + p + gr,
        KEYUP_DATA_API: "keyup" + p + gr
    }
      , tr = "disabled"
      , l = "show"
      , eo = "dropup"
      , oo = "dropright"
      , so = "dropleft"
      , yu = "dropdown-menu-right"
      , ho = "position-static"
      , ir = '[data-toggle="dropdown"]'
      , nu = ".dropdown-menu"
      , co = ".navbar-nav"
      , lo = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
      , ao = "top-start"
      , vo = "top-end"
      , yo = "bottom-start"
      , po = "bottom-end"
      , wo = "right-start"
      , bo = "left-start"
      , ko = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }
      , go = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }
      , w = function() {
        function n(n, t) {
            this._element = n;
            this._popper = null;
            this._config = this._getConfig(t);
            this._menu = this._getMenuElement();
            this._inNavbar = this._detectNavbar();
            this._addEventListeners()
        }
        var u = n.prototype;
        return u.toggle = function() {
            if (!this._element.disabled && !t(this._element).hasClass(tr)) {
                var i = t(this._menu).hasClass(l);
                n._clearMenus();
                i || this.show(!0)
            }
        }
        ,
        u.show = function(u) {
            var e;
            if (void 0 === u && (u = !1),
            !(this._element.disabled || t(this._element).hasClass(tr) || t(this._menu).hasClass(l))) {
                var o = {
                    relatedTarget: this._element
                }
                  , h = t.Event(s.SHOW, o)
                  , f = n._getParentFromElement(this._element);
                if (t(f).trigger(h),
                !h.isDefaultPrevented()) {
                    if (!this._inNavbar && u) {
                        if ("undefined" == typeof i)
                            throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                        e = this._element;
                        "parent" === this._config.reference ? e = f : r.isElement(this._config.reference) && (e = this._config.reference,
                        "undefined" != typeof this._config.reference.jquery && (e = this._config.reference[0]));
                        "scrollParent" !== this._config.boundary && t(f).addClass(ho);
                        this._popper = new i(e,this._menu,this._getPopperConfig())
                    }
                    "ontouchstart"in document.documentElement && 0 === t(f).closest(co).length && t(document.body).children().on("mouseover", null, t.noop);
                    this._element.focus();
                    this._element.setAttribute("aria-expanded", !0);
                    t(this._menu).toggleClass(l);
                    t(f).toggleClass(l).trigger(t.Event(s.SHOWN, o))
                }
            }
        }
        ,
        u.hide = function() {
            if (!this._element.disabled && !t(this._element).hasClass(tr) && t(this._menu).hasClass(l)) {
                var i = {
                    relatedTarget: this._element
                }
                  , r = t.Event(s.HIDE, i)
                  , u = n._getParentFromElement(this._element);
                t(u).trigger(r);
                r.isDefaultPrevented() || (this._popper && this._popper.destroy(),
                t(this._menu).toggleClass(l),
                t(u).toggleClass(l).trigger(t.Event(s.HIDDEN, i)))
            }
        }
        ,
        u.dispose = function() {
            t.removeData(this._element, ti);
            t(this._element).off(p);
            this._element = null;
            (this._menu = null) !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        u.update = function() {
            this._inNavbar = this._detectNavbar();
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        u._addEventListeners = function() {
            var n = this;
            t(this._element).on(s.CLICK, function(t) {
                t.preventDefault();
                t.stopPropagation();
                n.toggle()
            })
        }
        ,
        u._getConfig = function(n) {
            return n = f({}, this.constructor.Default, {}, t(this._element).data(), {}, n),
            r.typeCheckConfig(ot, n, this.constructor.DefaultType),
            n
        }
        ,
        u._getMenuElement = function() {
            if (!this._menu) {
                var t = n._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(nu))
            }
            return this._menu
        }
        ,
        u._getPlacement = function() {
            var i = t(this._element.parentNode)
              , n = yo;
            return i.hasClass(eo) ? (n = ao,
            t(this._menu).hasClass(yu) && (n = vo)) : i.hasClass(oo) ? n = wo : i.hasClass(so) ? n = bo : t(this._menu).hasClass(yu) && (n = po),
            n
        }
        ,
        u._detectNavbar = function() {
            return 0 < t(this._element).closest(".navbar").length
        }
        ,
        u._getOffset = function() {
            var t = this
              , n = {};
            return "function" == typeof this._config.offset ? n.fn = function(n) {
                return n.offsets = f({}, n.offsets, {}, t._config.offset(n.offsets, t._element) || {}),
                n
            }
            : n.offset = this._config.offset,
            n
        }
        ,
        u._getPopperConfig = function() {
            var n = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (n.modifiers.applyStyle = {
                enabled: !1
            }),
            f({}, n, {}, this._config.popperConfig)
        }
        ,
        n._jQueryInterface = function(i) {
            return this.each(function() {
                var r = t(this).data(ti);
                if (r || (r = new n(this,"object" == typeof i ? i : null),
                t(this).data(ti, r)),
                "string" == typeof i) {
                    if ("undefined" == typeof r[i])
                        throw new TypeError('No method named "' + i + '"');
                    r[i]()
                }
            })
        }
        ,
        n._clearMenus = function(i) {
            var c, h;
            if (!i || 3 !== i.which && ("keyup" !== i.type || 9 === i.which))
                for (var u = [].slice.call(document.querySelectorAll(ir)), r = 0, a = u.length; r < a; r++) {
                    var f = n._getParentFromElement(u[r])
                      , e = t(u[r]).data(ti)
                      , o = {
                        relatedTarget: u[r]
                    };
                    (i && "click" === i.type && (o.clickEvent = i),
                    e) && (c = e._menu,
                    !t(f).hasClass(l) || i && ("click" === i.type && /input|textarea/i.test(i.target.tagName) || "keyup" === i.type && 9 === i.which) && t.contains(f, i.target) || (h = t.Event(s.HIDE, o),
                    t(f).trigger(h),
                    h.isDefaultPrevented() || ("ontouchstart"in document.documentElement && t(document.body).children().off("mouseover", null, t.noop),
                    u[r].setAttribute("aria-expanded", "false"),
                    e._popper && e._popper.destroy(),
                    t(c).removeClass(l),
                    t(f).removeClass(l).trigger(t.Event(s.HIDDEN, o)))))
                }
        }
        ,
        n._getParentFromElement = function(n) {
            var t, i = r.getSelectorFromElement(n);
            return i && (t = document.querySelector(i)),
            t || n.parentNode
        }
        ,
        n._dataApiKeydownHandler = function(i) {
            var f, e, u, r, o;
            (/input|textarea/i.test(i.target.tagName) ? 32 === i.which || 27 !== i.which && (40 !== i.which && 38 !== i.which || t(i.target).closest(nu).length) : !fo.test(i.which)) || (i.preventDefault(),
            i.stopPropagation(),
            this.disabled || t(this).hasClass(tr)) || (f = n._getParentFromElement(this),
            e = t(f).hasClass(l),
            (e || 27 !== i.which) && (e && (!e || 27 !== i.which && 32 !== i.which) ? (u = [].slice.call(f.querySelectorAll(lo)).filter(function(n) {
                return t(n).is(":visible")
            }),
            0 !== u.length && (r = u.indexOf(i.target),
            38 === i.which && 0 < r && r--,
            40 === i.which && r < u.length - 1 && r++,
            r < 0 && (r = 0),
            u[r].focus())) : (27 === i.which && (o = f.querySelector(ir),
            t(o).trigger("focus")),
            t(this).trigger("click"))))
        }
        ,
        c(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ko
            }
        }, {
            key: "DefaultType",
            get: function() {
                return go
            }
        }]),
        n
    }();
    t(document).on(s.KEYDOWN_DATA_API, ir, w._dataApiKeydownHandler).on(s.KEYDOWN_DATA_API, nu, w._dataApiKeydownHandler).on(s.CLICK_DATA_API + " " + s.KEYUP_DATA_API, w._clearMenus).on(s.CLICK_DATA_API, ir, function(n) {
        n.preventDefault();
        n.stopPropagation();
        w._jQueryInterface.call(t(this), "toggle")
    }).on(s.CLICK_DATA_API, ".dropdown form", function(n) {
        n.stopPropagation()
    });
    t.fn[ot] = w._jQueryInterface;
    t.fn[ot].Constructor = w;
    t.fn[ot].noConflict = function() {
        return t.fn[ot] = uo,
        w._jQueryInterface
    }
    ;
    var st = "modal"
      , ii = "bs.modal"
      , h = "." + ii
      , ns = t.fn[st]
      , tu = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , ts = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , u = {
        HIDE: "hide" + h,
        HIDE_PREVENTED: "hidePrevented" + h,
        HIDDEN: "hidden" + h,
        SHOW: "show" + h,
        SHOWN: "shown" + h,
        FOCUSIN: "focusin" + h,
        RESIZE: "resize" + h,
        CLICK_DISMISS: "click.dismiss" + h,
        KEYDOWN_DISMISS: "keydown.dismiss" + h,
        MOUSEUP_DISMISS: "mouseup.dismiss" + h,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + h,
        CLICK_DATA_API: "click" + h + ".data-api"
    }
      , is = "modal-dialog-scrollable"
      , rs = "modal-scrollbar-measure"
      , us = "modal-backdrop"
      , pu = "modal-open"
      , ht = "fade"
      , rr = "show"
      , wu = "modal-static"
      , fs = ".modal-dialog"
      , es = ".modal-body"
      , os = '[data-dismiss="modal"]'
      , bu = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , ku = ".sticky-top"
      , ri = function() {
        function i(n, t) {
            this._config = this._getConfig(t);
            this._element = n;
            this._dialog = n.querySelector(fs);
            this._backdrop = null;
            this._isShown = !1;
            this._isBodyOverflowing = !1;
            this._ignoreBackdropClick = !1;
            this._isTransitioning = !1;
            this._scrollbarWidth = 0
        }
        var n = i.prototype;
        return n.toggle = function(n) {
            return this._isShown ? this.hide() : this.show(n)
        }
        ,
        n.show = function(n) {
            var i = this, r;
            this._isShown || this._isTransitioning || (t(this._element).hasClass(ht) && (this._isTransitioning = !0),
            r = t.Event(u.SHOW, {
                relatedTarget: n
            }),
            t(this._element).trigger(r),
            this._isShown || r.isDefaultPrevented() || (this._isShown = !0,
            this._checkScrollbar(),
            this._setScrollbar(),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            t(this._element).on(u.CLICK_DISMISS, os, function(n) {
                return i.hide(n)
            }),
            t(this._dialog).on(u.MOUSEDOWN_DISMISS, function() {
                t(i._element).one(u.MOUSEUP_DISMISS, function(n) {
                    t(n.target).is(i._element) && (i._ignoreBackdropClick = !0)
                })
            }),
            this._showBackdrop(function() {
                return i._showElement(n)
            })))
        }
        ,
        n.hide = function(n) {
            var o = this, i, f, e;
            (n && n.preventDefault(),
            this._isShown && !this._isTransitioning) && (i = t.Event(u.HIDE),
            (t(this._element).trigger(i),
            this._isShown && !i.isDefaultPrevented()) && (this._isShown = !1,
            f = t(this._element).hasClass(ht),
            (f && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            t(document).off(u.FOCUSIN),
            t(this._element).removeClass(rr),
            t(this._element).off(u.CLICK_DISMISS),
            t(this._dialog).off(u.MOUSEDOWN_DISMISS),
            f) ? (e = r.getTransitionDurationFromElement(this._element),
            t(this._element).one(r.TRANSITION_END, function(n) {
                return o._hideModal(n)
            }).emulateTransitionEnd(e)) : this._hideModal()))
        }
        ,
        n.dispose = function() {
            [window, this._element, this._dialog].forEach(function(n) {
                return t(n).off(h)
            });
            t(document).off(u.FOCUSIN);
            t.removeData(this._element, ii);
            this._config = null;
            this._element = null;
            this._dialog = null;
            this._backdrop = null;
            this._isShown = null;
            this._isBodyOverflowing = null;
            this._ignoreBackdropClick = null;
            this._isTransitioning = null;
            this._scrollbarWidth = null
        }
        ,
        n.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        n._getConfig = function(n) {
            return n = f({}, tu, {}, n),
            r.typeCheckConfig(st, n, ts),
            n
        }
        ,
        n._triggerBackdropTransition = function() {
            var f = this, n, i;
            if ("static" === this._config.backdrop) {
                if (n = t.Event(u.HIDE_PREVENTED),
                t(this._element).trigger(n),
                n.defaultPrevented)
                    return;
                this._element.classList.add(wu);
                i = r.getTransitionDurationFromElement(this._element);
                t(this._element).one(r.TRANSITION_END, function() {
                    f._element.classList.remove(wu)
                }).emulateTransitionEnd(i);
                this._element.focus()
            } else
                this.hide()
        }
        ,
        n._showElement = function(n) {
            function o() {
                i._config.focus && i._element.focus();
                i._isTransitioning = !1;
                t(i._element).trigger(s)
            }
            var i = this, f = t(this._element).hasClass(ht), e = this._dialog ? this._dialog.querySelector(es) : null, s, h;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element);
            this._element.style.display = "block";
            this._element.removeAttribute("aria-hidden");
            this._element.setAttribute("aria-modal", !0);
            t(this._dialog).hasClass(is) && e ? e.scrollTop = 0 : this._element.scrollTop = 0;
            f && r.reflow(this._element);
            t(this._element).addClass(rr);
            this._config.focus && this._enforceFocus();
            s = t.Event(u.SHOWN, {
                relatedTarget: n
            });
            f ? (h = r.getTransitionDurationFromElement(this._dialog),
            t(this._dialog).one(r.TRANSITION_END, o).emulateTransitionEnd(h)) : o()
        }
        ,
        n._enforceFocus = function() {
            var n = this;
            t(document).off(u.FOCUSIN).on(u.FOCUSIN, function(i) {
                document !== i.target && n._element !== i.target && 0 === t(n._element).has(i.target).length && n._element.focus()
            })
        }
        ,
        n._setEscapeEvent = function() {
            var n = this;
            this._isShown && this._config.keyboard ? t(this._element).on(u.KEYDOWN_DISMISS, function(t) {
                27 === t.which && n._triggerBackdropTransition()
            }) : this._isShown || t(this._element).off(u.KEYDOWN_DISMISS)
        }
        ,
        n._setResizeEvent = function() {
            var n = this;
            this._isShown ? t(window).on(u.RESIZE, function(t) {
                return n.handleUpdate(t)
            }) : t(window).off(u.RESIZE)
        }
        ,
        n._hideModal = function() {
            var n = this;
            this._element.style.display = "none";
            this._element.setAttribute("aria-hidden", !0);
            this._element.removeAttribute("aria-modal");
            this._isTransitioning = !1;
            this._showBackdrop(function() {
                t(document.body).removeClass(pu);
                n._resetAdjustments();
                n._resetScrollbar();
                t(n._element).trigger(u.HIDDEN)
            })
        }
        ,
        n._removeBackdrop = function() {
            this._backdrop && (t(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        n._showBackdrop = function(n) {
            var i = this, f = t(this._element).hasClass(ht) ? ht : "", o, e, s;
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = us,
                f && this._backdrop.classList.add(f),
                t(this._backdrop).appendTo(document.body),
                t(this._element).on(u.CLICK_DISMISS, function(n) {
                    i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : n.target === n.currentTarget && i._triggerBackdropTransition()
                }),
                f && r.reflow(this._backdrop),
                t(this._backdrop).addClass(rr),
                !n)
                    return;
                if (!f)
                    return void n();
                o = r.getTransitionDurationFromElement(this._backdrop);
                t(this._backdrop).one(r.TRANSITION_END, n).emulateTransitionEnd(o)
            } else
                !this._isShown && this._backdrop ? (t(this._backdrop).removeClass(rr),
                e = function() {
                    i._removeBackdrop();
                    n && n()
                }
                ,
                t(this._element).hasClass(ht) ? (s = r.getTransitionDurationFromElement(this._backdrop),
                t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(s)) : e()) : n && n()
        }
        ,
        n._adjustDialog = function() {
            var n = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && n && (this._element.style.paddingLeft = this._scrollbarWidth + "px");
            this._isBodyOverflowing && !n && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        n._resetAdjustments = function() {
            this._element.style.paddingLeft = "";
            this._element.style.paddingRight = ""
        }
        ,
        n._checkScrollbar = function() {
            var n = document.body.getBoundingClientRect();
            this._isBodyOverflowing = n.left + n.right < window.innerWidth;
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        n._setScrollbar = function() {
            var n = this, i, r, u, f;
            this._isBodyOverflowing && (i = [].slice.call(document.querySelectorAll(bu)),
            r = [].slice.call(document.querySelectorAll(ku)),
            t(i).each(function(i, r) {
                var u = r.style.paddingRight
                  , f = t(r).css("padding-right");
                t(r).data("padding-right", u).css("padding-right", parseFloat(f) + n._scrollbarWidth + "px")
            }),
            t(r).each(function(i, r) {
                var u = r.style.marginRight
                  , f = t(r).css("margin-right");
                t(r).data("margin-right", u).css("margin-right", parseFloat(f) - n._scrollbarWidth + "px")
            }),
            u = document.body.style.paddingRight,
            f = t(document.body).css("padding-right"),
            t(document.body).data("padding-right", u).css("padding-right", parseFloat(f) + this._scrollbarWidth + "px"));
            t(document.body).addClass(pu)
        }
        ,
        n._resetScrollbar = function() {
            var r = [].slice.call(document.querySelectorAll(bu)), n, i;
            t(r).each(function(n, i) {
                var r = t(i).data("padding-right");
                t(i).removeData("padding-right");
                i.style.paddingRight = r || ""
            });
            n = [].slice.call(document.querySelectorAll("" + ku));
            t(n).each(function(n, i) {
                var r = t(i).data("margin-right");
                "undefined" != typeof r && t(i).css("margin-right", r).removeData("margin-right")
            });
            i = t(document.body).data("padding-right");
            t(document.body).removeData("padding-right");
            document.body.style.paddingRight = i || ""
        }
        ,
        n._getScrollbarWidth = function() {
            var n = document.createElement("div"), t;
            return n.className = rs,
            document.body.appendChild(n),
            t = n.getBoundingClientRect().width - n.clientWidth,
            document.body.removeChild(n),
            t
        }
        ,
        i._jQueryInterface = function(n, r) {
            return this.each(function() {
                var u = t(this).data(ii)
                  , e = f({}, tu, {}, t(this).data(), {}, "object" == typeof n && n ? n : {});
                if (u || (u = new i(this,e),
                t(this).data(ii, u)),
                "string" == typeof n) {
                    if ("undefined" == typeof u[n])
                        throw new TypeError('No method named "' + n + '"');
                    u[n](r)
                } else
                    e.show && u.show(r)
            })
        }
        ,
        c(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return tu
            }
        }]),
        i
    }();
    t(document).on(u.CLICK_DATA_API, '[data-toggle="modal"]', function(n) {
        var i, e = this, o = r.getSelectorFromElement(this), s, h;
        o && (i = document.querySelector(o));
        s = t(i).data(ii) ? "toggle" : f({}, t(i).data(), {}, t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
        h = t(i).one(u.SHOW, function(n) {
            n.isDefaultPrevented() || h.one(u.HIDDEN, function() {
                t(e).is(":visible") && e.focus()
            })
        });
        ri._jQueryInterface.call(t(i), s, this)
    });
    t.fn[st] = ri._jQueryInterface;
    t.fn[st].Constructor = ri;
    t.fn[st].noConflict = function() {
        return t.fn[st] = ns,
        ri._jQueryInterface
    }
    ;
    var ss = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , hs = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
      , cs = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    var g = "tooltip"
      , ur = "bs.tooltip"
      , a = "." + ur
      , ls = t.fn[g]
      , gu = "bs-tooltip"
      , as = new RegExp("(^|\\s)" + gu + "\\S+","g")
      , vs = ["sanitize", "whiteList", "sanitizeFn"]
      , ys = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
    }
      , ps = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , ws = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }
      , ui = "show"
      , iu = "out"
      , bs = {
        HIDE: "hide" + a,
        HIDDEN: "hidden" + a,
        SHOW: "show" + a,
        SHOWN: "shown" + a,
        INSERTED: "inserted" + a,
        CLICK: "click" + a,
        FOCUSIN: "focusin" + a,
        FOCUSOUT: "focusout" + a,
        MOUSEENTER: "mouseenter" + a,
        MOUSELEAVE: "mouseleave" + a
    }
      , fi = "fade"
      , ei = "show"
      , ks = ".tooltip-inner"
      , ds = ".arrow"
      , oi = "hover"
      , ru = "focus"
      , gs = "click"
      , nh = "manual"
      , nt = function() {
        function u(n, t) {
            if ("undefined" == typeof i)
                throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0;
            this._timeout = 0;
            this._hoverState = "";
            this._activeTrigger = {};
            this._popper = null;
            this.element = n;
            this.config = this._getConfig(t);
            this.tip = null;
            this._setListeners()
        }
        var n = u.prototype;
        return n.enable = function() {
            this._isEnabled = !0
        }
        ,
        n.disable = function() {
            this._isEnabled = !1
        }
        ,
        n.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        n.toggle = function(n) {
            if (this._isEnabled)
                if (n) {
                    var r = this.constructor.DATA_KEY
                      , i = t(n.currentTarget).data(r);
                    i || (i = new this.constructor(n.currentTarget,this._getDelegateConfig()),
                    t(n.currentTarget).data(r, i));
                    i._activeTrigger.click = !i._activeTrigger.click;
                    i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                } else {
                    if (t(this.getTipElement()).hasClass(ei))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        n.dispose = function() {
            clearTimeout(this._timeout);
            t.removeData(this.element, this.constructor.DATA_KEY);
            t(this.element).off(this.constructor.EVENT_KEY);
            t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler);
            this.tip && t(this.tip).remove();
            this._isEnabled = null;
            this._timeout = null;
            this._hoverState = null;
            this._activeTrigger = null;
            this._popper && this._popper.destroy();
            this._popper = null;
            this.element = null;
            this.config = null;
            this.tip = null
        }
        ,
        n.show = function() {
            var n = this, f, e, c, u, o, l, s, a, h, v;
            if ("none" === t(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            if (f = t.Event(this.constructor.Event.SHOW),
            this.isWithContent() && this._isEnabled) {
                if (t(this.element).trigger(f),
                e = r.findShadowRoot(this.element),
                c = t.contains(null !== e ? e : this.element.ownerDocument.documentElement, this.element),
                f.isDefaultPrevented() || !c)
                    return;
                u = this.getTipElement();
                o = r.getUID(this.constructor.NAME);
                u.setAttribute("id", o);
                this.element.setAttribute("aria-describedby", o);
                this.setContent();
                this.config.animation && t(u).addClass(fi);
                l = "function" == typeof this.config.placement ? this.config.placement.call(this, u, this.element) : this.config.placement;
                s = this._getAttachment(l);
                this.addAttachmentClass(s);
                a = this._getContainer();
                t(u).data(this.constructor.DATA_KEY, this);
                t.contains(this.element.ownerDocument.documentElement, this.tip) || t(u).appendTo(a);
                t(this.element).trigger(this.constructor.Event.INSERTED);
                this._popper = new i(this.element,u,this._getPopperConfig(s));
                t(u).addClass(ei);
                "ontouchstart"in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                h = function() {
                    n.config.animation && n._fixTransition();
                    var i = n._hoverState;
                    n._hoverState = null;
                    t(n.element).trigger(n.constructor.Event.SHOWN);
                    i === iu && n._leave(null, n)
                }
                ;
                t(this.tip).hasClass(fi) ? (v = r.getTransitionDurationFromElement(this.tip),
                t(this.tip).one(r.TRANSITION_END, h).emulateTransitionEnd(v)) : h()
            }
        }
        ,
        n.hide = function(n) {
            function f() {
                i._hoverState !== ui && u.parentNode && u.parentNode.removeChild(u);
                i._cleanTipClass();
                i.element.removeAttribute("aria-describedby");
                t(i.element).trigger(i.constructor.Event.HIDDEN);
                null !== i._popper && i._popper.destroy();
                n && n()
            }
            var i = this, u = this.getTipElement(), e = t.Event(this.constructor.Event.HIDE), o;
            (t(this.element).trigger(e),
            e.isDefaultPrevented()) || ((t(u).removeClass(ei),
            "ontouchstart"in document.documentElement && t(document.body).children().off("mouseover", null, t.noop),
            this._activeTrigger[gs] = !1,
            this._activeTrigger[ru] = !1,
            this._activeTrigger[oi] = !1,
            t(this.tip).hasClass(fi)) ? (o = r.getTransitionDurationFromElement(u),
            t(u).one(r.TRANSITION_END, f).emulateTransitionEnd(o)) : f(),
            this._hoverState = "")
        }
        ,
        n.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        n.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        n.addAttachmentClass = function(n) {
            t(this.getTipElement()).addClass(gu + "-" + n)
        }
        ,
        n.getTipElement = function() {
            return this.tip = this.tip || t(this.config.template)[0],
            this.tip
        }
        ,
        n.setContent = function() {
            var n = this.getTipElement();
            this.setElementContent(t(n.querySelectorAll(ks)), this.getTitle());
            t(n).removeClass(fi + " " + ei)
        }
        ,
        n.setElementContent = function(n, i) {
            "object" != typeof i || !i.nodeType && !i.jquery ? this.config.html ? (this.config.sanitize && (i = du(i, this.config.whiteList, this.config.sanitizeFn)),
            n.html(i)) : n.text(i) : this.config.html ? t(i).parent().is(n) || n.empty().append(i) : n.text(t(i).text())
        }
        ,
        n.getTitle = function() {
            var n = this.element.getAttribute("data-original-title");
            return n || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
        }
        ,
        n._getPopperConfig = function(n) {
            var t = this;
            return f({}, {
                placement: n,
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                        element: ds
                    },
                    preventOverflow: {
                        boundariesElement: this.config.boundary
                    }
                },
                onCreate: function(n) {
                    n.originalPlacement !== n.placement && t._handlePopperPlacementChange(n)
                },
                onUpdate: function(n) {
                    return t._handlePopperPlacementChange(n)
                }
            }, {}, this.config.popperConfig)
        }
        ,
        n._getOffset = function() {
            var t = this
              , n = {};
            return "function" == typeof this.config.offset ? n.fn = function(n) {
                return n.offsets = f({}, n.offsets, {}, t.config.offset(n.offsets, t.element) || {}),
                n
            }
            : n.offset = this.config.offset,
            n
        }
        ,
        n._getContainer = function() {
            return !1 === this.config.container ? document.body : r.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
        }
        ,
        n._getAttachment = function(n) {
            return ps[n.toUpperCase()]
        }
        ,
        n._setListeners = function() {
            var n = this;
            this.config.trigger.split(" ").forEach(function(i) {
                if ("click" === i)
                    t(n.element).on(n.constructor.Event.CLICK, n.config.selector, function(t) {
                        return n.toggle(t)
                    });
                else if (i !== nh) {
                    var r = i === oi ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN
                      , u = i === oi ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT;
                    t(n.element).on(r, n.config.selector, function(t) {
                        return n._enter(t)
                    }).on(u, n.config.selector, function(t) {
                        return n._leave(t)
                    })
                }
            });
            this._hideModalHandler = function() {
                n.element && n.hide()
            }
            ;
            t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler);
            this.config.selector ? this.config = f({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        n._fixTitle = function() {
            var n = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" != n) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        n._enter = function(n, i) {
            var r = this.constructor.DATA_KEY;
            (i = i || t(n.currentTarget).data(r)) || (i = new this.constructor(n.currentTarget,this._getDelegateConfig()),
            t(n.currentTarget).data(r, i));
            n && (i._activeTrigger["focusin" === n.type ? ru : oi] = !0);
            t(i.getTipElement()).hasClass(ei) || i._hoverState === ui ? i._hoverState = ui : (clearTimeout(i._timeout),
            i._hoverState = ui,
            i.config.delay && i.config.delay.show ? i._timeout = setTimeout(function() {
                i._hoverState === ui && i.show()
            }, i.config.delay.show) : i.show())
        }
        ,
        n._leave = function(n, i) {
            var r = this.constructor.DATA_KEY;
            (i = i || t(n.currentTarget).data(r)) || (i = new this.constructor(n.currentTarget,this._getDelegateConfig()),
            t(n.currentTarget).data(r, i));
            n && (i._activeTrigger["focusout" === n.type ? ru : oi] = !1);
            i._isWithActiveTrigger() || (clearTimeout(i._timeout),
            i._hoverState = iu,
            i.config.delay && i.config.delay.hide ? i._timeout = setTimeout(function() {
                i._hoverState === iu && i.hide()
            }, i.config.delay.hide) : i.hide())
        }
        ,
        n._isWithActiveTrigger = function() {
            for (var n in this._activeTrigger)
                if (this._activeTrigger[n])
                    return !0;
            return !1
        }
        ,
        n._getConfig = function(n) {
            var i = t(this.element).data();
            return Object.keys(i).forEach(function(n) {
                -1 !== vs.indexOf(n) && delete i[n]
            }),
            "number" == typeof (n = f({}, this.constructor.Default, {}, i, {}, "object" == typeof n && n ? n : {})).delay && (n.delay = {
                show: n.delay,
                hide: n.delay
            }),
            "number" == typeof n.title && (n.title = n.title.toString()),
            "number" == typeof n.content && (n.content = n.content.toString()),
            r.typeCheckConfig(g, n, this.constructor.DefaultType),
            n.sanitize && (n.template = du(n.template, n.whiteList, n.sanitizeFn)),
            n
        }
        ,
        n._getDelegateConfig = function() {
            var t = {}, n;
            if (this.config)
                for (n in this.config)
                    this.constructor.Default[n] !== this.config[n] && (t[n] = this.config[n]);
            return t
        }
        ,
        n._cleanTipClass = function() {
            var i = t(this.getTipElement())
              , n = i.attr("class").match(as);
            null !== n && n.length && i.removeClass(n.join(""))
        }
        ,
        n._handlePopperPlacementChange = function(n) {
            var t = n.instance;
            this.tip = t.popper;
            this._cleanTipClass();
            this.addAttachmentClass(this._getAttachment(n.placement))
        }
        ,
        n._fixTransition = function() {
            var n = this.getTipElement()
              , i = this.config.animation;
            null === n.getAttribute("x-placement") && (t(n).removeClass(fi),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = i)
        }
        ,
        u._jQueryInterface = function(n) {
            return this.each(function() {
                var i = t(this).data(ur)
                  , r = "object" == typeof n && n;
                if ((i || !/dispose|hide/.test(n)) && (i || (i = new u(this,r),
                t(this).data(ur, i)),
                "string" == typeof n)) {
                    if ("undefined" == typeof i[n])
                        throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            })
        }
        ,
        c(u, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ws
            }
        }, {
            key: "NAME",
            get: function() {
                return g
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return ur
            }
        }, {
            key: "Event",
            get: function() {
                return bs
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return a
            }
        }, {
            key: "DefaultType",
            get: function() {
                return ys
            }
        }]),
        u
    }();
    t.fn[g] = nt._jQueryInterface;
    t.fn[g].Constructor = nt;
    t.fn[g].noConflict = function() {
        return t.fn[g] = ls,
        nt._jQueryInterface
    }
    ;
    var ct = "popover"
      , fr = "bs.popover"
      , v = "." + fr
      , th = t.fn[ct]
      , nf = "bs-popover"
      , ih = new RegExp("(^|\\s)" + nf + "\\S+","g")
      , rh = f({}, nt.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
    })
      , uh = f({}, nt.DefaultType, {
        content: "(string|element|function)"
    })
      , fh = "fade"
      , eh = "show"
      , oh = ".popover-header"
      , sh = ".popover-body"
      , hh = {
        HIDE: "hide" + v,
        HIDDEN: "hidden" + v,
        SHOW: "show" + v,
        SHOWN: "shown" + v,
        INSERTED: "inserted" + v,
        CLICK: "click" + v,
        FOCUSIN: "focusin" + v,
        FOCUSOUT: "focusout" + v,
        MOUSEENTER: "mouseenter" + v,
        MOUSELEAVE: "mouseleave" + v
    }
      , er = function(n) {
        function i() {
            return n.apply(this, arguments) || this
        }
        !function(n, t) {
            n.prototype = Object.create(t.prototype);
            (n.prototype.constructor = n).__proto__ = t
        }(i, n);
        var r = i.prototype;
        return r.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        r.addAttachmentClass = function(n) {
            t(this.getTipElement()).addClass(nf + "-" + n)
        }
        ,
        r.getTipElement = function() {
            return this.tip = this.tip || t(this.config.template)[0],
            this.tip
        }
        ,
        r.setContent = function() {
            var i = t(this.getTipElement()), n;
            this.setElementContent(i.find(oh), this.getTitle());
            n = this._getContent();
            "function" == typeof n && (n = n.call(this.element));
            this.setElementContent(i.find(sh), n);
            i.removeClass(fh + " " + eh)
        }
        ,
        r._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        r._cleanTipClass = function() {
            var i = t(this.getTipElement())
              , n = i.attr("class").match(ih);
            null !== n && 0 < n.length && i.removeClass(n.join(""))
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var r = t(this).data(fr)
                  , u = "object" == typeof n ? n : null;
                if ((r || !/dispose|hide/.test(n)) && (r || (r = new i(this,u),
                t(this).data(fr, r)),
                "string" == typeof n)) {
                    if ("undefined" == typeof r[n])
                        throw new TypeError('No method named "' + n + '"');
                    r[n]()
                }
            })
        }
        ,
        c(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return rh
            }
        }, {
            key: "NAME",
            get: function() {
                return ct
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return fr
            }
        }, {
            key: "Event",
            get: function() {
                return hh
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return v
            }
        }, {
            key: "DefaultType",
            get: function() {
                return uh
            }
        }]),
        i
    }(nt);
    t.fn[ct] = er._jQueryInterface;
    t.fn[ct].Constructor = er;
    t.fn[ct].noConflict = function() {
        return t.fn[ct] = th,
        er._jQueryInterface
    }
    ;
    var tt = "scrollspy"
      , or = "bs.scrollspy"
      , sr = "." + or
      , ch = t.fn[tt]
      , tf = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , lh = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , uu = {
        ACTIVATE: "activate" + sr,
        SCROLL: "scroll" + sr,
        LOAD_DATA_API: "load" + sr + ".data-api"
    }
      , ah = "dropdown-item"
      , it = "active"
      , vh = '[data-spy="scroll"]'
      , rf = ".nav, .list-group"
      , fu = ".nav-link"
      , yh = ".nav-item"
      , uf = ".list-group-item"
      , ph = ".dropdown"
      , wh = ".dropdown-item"
      , bh = ".dropdown-toggle"
      , kh = "offset"
      , ff = "position"
      , si = function() {
        function i(n, i) {
            var r = this;
            this._element = n;
            this._scrollElement = "BODY" === n.tagName ? window : n;
            this._config = this._getConfig(i);
            this._selector = this._config.target + " " + fu + "," + this._config.target + " " + uf + "," + this._config.target + " " + wh;
            this._offsets = [];
            this._targets = [];
            this._activeTarget = null;
            this._scrollHeight = 0;
            t(this._scrollElement).on(uu.SCROLL, function(n) {
                return r._process(n)
            });
            this.refresh();
            this._process()
        }
        var n = i.prototype;
        return n.refresh = function() {
            var n = this
              , u = this._scrollElement === this._scrollElement.window ? kh : ff
              , i = "auto" === this._config.method ? u : this._config.method
              , f = i === ff ? this._getScrollTop() : 0;
            this._offsets = [];
            this._targets = [];
            this._scrollHeight = this._getScrollHeight();
            [].slice.call(document.querySelectorAll(this._selector)).map(function(n) {
                var u, e = r.getSelectorFromElement(n), o;
                return (e && (u = document.querySelector(e)),
                u) && (o = u.getBoundingClientRect(),
                o.width || o.height) ? [t(u)[i]().top + f, e] : null
            }).filter(function(n) {
                return n
            }).sort(function(n, t) {
                return n[0] - t[0]
            }).forEach(function(t) {
                n._offsets.push(t[0]);
                n._targets.push(t[1])
            })
        }
        ,
        n.dispose = function() {
            t.removeData(this._element, or);
            t(this._scrollElement).off(sr);
            this._element = null;
            this._scrollElement = null;
            this._config = null;
            this._selector = null;
            this._offsets = null;
            this._targets = null;
            this._activeTarget = null;
            this._scrollHeight = null
        }
        ,
        n._getConfig = function(n) {
            if ("string" != typeof (n = f({}, tf, {}, "object" == typeof n && n ? n : {})).target) {
                var i = t(n.target).attr("id");
                i || (i = r.getUID(tt),
                t(n.target).attr("id", i));
                n.target = "#" + i
            }
            return r.typeCheckConfig(tt, n, lh),
            n
        }
        ,
        n._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        n._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        n._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        n._process = function() {
            var t = this._getScrollTop() + this._config.offset, r = this._getScrollHeight(), u = this._config.offset + r - this._getOffsetHeight(), i, n;
            if (this._scrollHeight !== r && this.refresh(),
            u <= t)
                i = this._targets[this._targets.length - 1],
                this._activeTarget !== i && this._activate(i);
            else {
                if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (n = this._offsets.length; n--; )
                    this._activeTarget !== this._targets[n] && t >= this._offsets[n] && ("undefined" == typeof this._offsets[n + 1] || t < this._offsets[n + 1]) && this._activate(this._targets[n])
            }
        }
        ,
        n._activate = function(n) {
            this._activeTarget = n;
            this._clear();
            var r = this._selector.split(",").map(function(t) {
                return t + '[data-target="' + n + '"],' + t + '[href="' + n + '"]'
            })
              , i = t([].slice.call(document.querySelectorAll(r.join(","))));
            i.hasClass(ah) ? (i.closest(ph).find(bh).addClass(it),
            i.addClass(it)) : (i.addClass(it),
            i.parents(rf).prev(fu + ", " + uf).addClass(it),
            i.parents(rf).prev(yh).children(fu).addClass(it));
            t(this._scrollElement).trigger(uu.ACTIVATE, {
                relatedTarget: n
            })
        }
        ,
        n._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(n) {
                return n.classList.contains(it)
            }).forEach(function(n) {
                return n.classList.remove(it)
            })
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var r = t(this).data(or);
                if (r || (r = new i(this,"object" == typeof n && n),
                t(this).data(or, r)),
                "string" == typeof n) {
                    if ("undefined" == typeof r[n])
                        throw new TypeError('No method named "' + n + '"');
                    r[n]()
                }
            })
        }
        ,
        c(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return tf
            }
        }]),
        i
    }();
    t(window).on(uu.LOAD_DATA_API, function() {
        for (var r, n = [].slice.call(document.querySelectorAll(vh)), i = n.length; i--; )
            r = t(n[i]),
            si._jQueryInterface.call(r, r.data())
    });
    t.fn[tt] = si._jQueryInterface;
    t.fn[tt].Constructor = si;
    t.fn[tt].noConflict = function() {
        return t.fn[tt] = ch,
        si._jQueryInterface
    }
    ;
    var hr = "bs.tab"
      , hi = "." + hr
      , dh = t.fn.tab
      , ci = {
        HIDE: "hide" + hi,
        HIDDEN: "hidden" + hi,
        SHOW: "show" + hi,
        SHOWN: "shown" + hi,
        CLICK_DATA_API: "click" + hi + ".data-api"
    }
      , gh = "dropdown-menu"
      , li = "active"
      , nc = "disabled"
      , ef = "fade"
      , of = "show"
      , tc = ".dropdown"
      , ic = ".nav, .list-group"
      , sf = ".active"
      , hf = "> li > .active"
      , rc = ".dropdown-toggle"
      , uc = "> .dropdown-menu .active"
      , ai = function() {
        function n(n) {
            this._element = n
        }
        var i = n.prototype;
        return i.show = function() {
            var h = this, u, n, i, f, c, e, o, s;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(li) || t(this._element).hasClass(nc) || (i = t(this._element).closest(ic)[0],
            f = r.getSelectorFromElement(this._element),
            i && (c = "UL" === i.nodeName || "OL" === i.nodeName ? hf : sf,
            n = (n = t.makeArray(t(i).find(c)))[n.length - 1]),
            e = t.Event(ci.HIDE, {
                relatedTarget: this._element
            }),
            o = t.Event(ci.SHOW, {
                relatedTarget: n
            }),
            (n && t(n).trigger(e),
            t(this._element).trigger(o),
            o.isDefaultPrevented() || e.isDefaultPrevented()) || (f && (u = document.querySelector(f)),
            this._activate(this._element, i),
            s = function() {
                var i = t.Event(ci.HIDDEN, {
                    relatedTarget: h._element
                })
                  , r = t.Event(ci.SHOWN, {
                    relatedTarget: n
                });
                t(n).trigger(i);
                t(h._element).trigger(r)
            }
            ,
            u ? this._activate(u, u.parentNode, s) : s()))
        }
        ,
        i.dispose = function() {
            t.removeData(this._element, hr);
            this._element = null
        }
        ,
        i._activate = function(n, i, u) {
            function e() {
                return s._transitionComplete(n, f, u)
            }
            var s = this, f = (!i || "UL" !== i.nodeName && "OL" !== i.nodeName ? t(i).children(sf) : t(i).find(hf))[0], h = u && f && t(f).hasClass(ef), o;
            f && h ? (o = r.getTransitionDurationFromElement(f),
            t(f).removeClass(of).one(r.TRANSITION_END, e).emulateTransitionEnd(o)) : e()
        }
        ,
        i._transitionComplete = function(n, i, u) {
            var f, e, o;
            i && (t(i).removeClass(li),
            f = t(i.parentNode).find(uc)[0],
            f && t(f).removeClass(li),
            "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1));
            (t(n).addClass(li),
            "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !0),
            r.reflow(n),
            n.classList.contains(ef) && n.classList.add(of),
            n.parentNode && t(n.parentNode).hasClass(gh)) && (e = t(n).closest(tc)[0],
            e && (o = [].slice.call(e.querySelectorAll(rc)),
            t(o).addClass(li)),
            n.setAttribute("aria-expanded", !0));
            u && u()
        }
        ,
        n._jQueryInterface = function(i) {
            return this.each(function() {
                var u = t(this)
                  , r = u.data(hr);
                if (r || (r = new n(this),
                u.data(hr, r)),
                "string" == typeof i) {
                    if ("undefined" == typeof r[i])
                        throw new TypeError('No method named "' + i + '"');
                    r[i]()
                }
            })
        }
        ,
        c(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]),
        n
    }();
    t(document).on(ci.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(n) {
        n.preventDefault();
        ai._jQueryInterface.call(t(this), "show")
    });
    t.fn.tab = ai._jQueryInterface;
    t.fn.tab.Constructor = ai;
    t.fn.tab.noConflict = function() {
        return t.fn.tab = dh,
        ai._jQueryInterface
    }
    ;
    var lt = "toast"
      , cr = "bs.toast"
      , vi = "." + cr
      , fc = t.fn[lt]
      , at = {
        CLICK_DISMISS: "click.dismiss" + vi,
        HIDE: "hide" + vi,
        HIDDEN: "hidden" + vi,
        SHOW: "show" + vi,
        SHOWN: "shown" + vi
    }
      , ec = "fade"
      , cf = "hide"
      , yi = "show"
      , lf = "showing"
      , oc = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , af = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , sc = '[data-dismiss="toast"]'
      , lr = function() {
        function i(n, t) {
            this._element = n;
            this._config = this._getConfig(t);
            this._timeout = null;
            this._setListeners()
        }
        var n = i.prototype;
        return n.show = function() {
            var n = this, u = t.Event(at.SHOW), i, f;
            (t(this._element).trigger(u),
            u.isDefaultPrevented()) || (this._config.animation && this._element.classList.add(ec),
            i = function() {
                n._element.classList.remove(lf);
                n._element.classList.add(yi);
                t(n._element).trigger(at.SHOWN);
                n._config.autohide && (n._timeout = setTimeout(function() {
                    n.hide()
                }, n._config.delay))
            }
            ,
            (this._element.classList.remove(cf),
            r.reflow(this._element),
            this._element.classList.add(lf),
            this._config.animation) ? (f = r.getTransitionDurationFromElement(this._element),
            t(this._element).one(r.TRANSITION_END, i).emulateTransitionEnd(f)) : i())
        }
        ,
        n.hide = function() {
            if (this._element.classList.contains(yi)) {
                var n = t.Event(at.HIDE);
                t(this._element).trigger(n);
                n.isDefaultPrevented() || this._close()
            }
        }
        ,
        n.dispose = function() {
            clearTimeout(this._timeout);
            this._timeout = null;
            this._element.classList.contains(yi) && this._element.classList.remove(yi);
            t(this._element).off(at.CLICK_DISMISS);
            t.removeData(this._element, cr);
            this._element = null;
            this._config = null
        }
        ,
        n._getConfig = function(n) {
            return n = f({}, af, {}, t(this._element).data(), {}, "object" == typeof n && n ? n : {}),
            r.typeCheckConfig(lt, n, this.constructor.DefaultType),
            n
        }
        ,
        n._setListeners = function() {
            var n = this;
            t(this._element).on(at.CLICK_DISMISS, sc, function() {
                return n.hide()
            })
        }
        ,
        n._close = function() {
            function n() {
                i._element.classList.add(cf);
                t(i._element).trigger(at.HIDDEN)
            }
            var i = this, u;
            (this._element.classList.remove(yi),
            this._config.animation) ? (u = r.getTransitionDurationFromElement(this._element),
            t(this._element).one(r.TRANSITION_END, n).emulateTransitionEnd(u)) : n()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var u = t(this)
                  , r = u.data(cr);
                if (r || (r = new i(this,"object" == typeof n && n),
                u.data(cr, r)),
                "string" == typeof n) {
                    if ("undefined" == typeof r[n])
                        throw new TypeError('No method named "' + n + '"');
                    r[n](this)
                }
            })
        }
        ,
        c(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return oc
            }
        }, {
            key: "Default",
            get: function() {
                return af
            }
        }]),
        i
    }();
    t.fn[lt] = lr._jQueryInterface;
    t.fn[lt].Constructor = lr;
    t.fn[lt].noConflict = function() {
        return t.fn[lt] = fc,
        lr._jQueryInterface
    }
    ;
    n.Alert = rt;
    n.Button = wt;
    n.Carousel = ft;
    n.Collapse = ni;
    n.Dropdown = w;
    n.Modal = ri;
    n.Popover = er;
    n.Scrollspy = si;
    n.Tab = ai;
    n.Toast = lr;
    n.Tooltip = nt;
    n.Util = r;
    Object.defineProperty(n, "__esModule", {
        value: !0
    })
});
/*! jQuery UI - v1.12.1 - 2019-07-07
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/selectable.js, widgets/sortable.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/selectmenu.js, widgets/slider.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : n(jQuery)
}
)(function(n) {
    function b(n) {
        for (var t = n.css("visibility"); "inherit" === t; )
            n = n.parent(),
            t = n.css("visibility");
        return "hidden" !== t
    }
    function k(n) {
        for (var t, i; n.length && n[0] !== document; ) {
            if (t = n.css("position"),
            ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(n.css("zIndex"), 10),
            !isNaN(i) && 0 !== i))
                return i;
            n = n.parent()
        }
        return 0
    }
    function c() {
        this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._datepickerShowing = !1;
        this._inDialog = !1;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        };
        n.extend(this._defaults, this.regional[""]);
        this.regional.en = n.extend(!0, {}, this.regional[""]);
        this.regional["en-US"] = n.extend(!0, {}, this.regional.en);
        this.dpDiv = l(n("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>"))
    }
    function l(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.on("mouseout", i, function() {
            n(this).removeClass("ui-state-hover");
            -1 !== this.className.indexOf("ui-datepicker-prev") && n(this).removeClass("ui-datepicker-prev-hover");
            -1 !== this.className.indexOf("ui-datepicker-next") && n(this).removeClass("ui-datepicker-next-hover")
        }).on("mouseover", i, a)
    }
    function a() {
        n.datepicker._isDisabledDatepicker(i.inline ? i.dpDiv.parent()[0] : i.input[0]) || (n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
        n(this).addClass("ui-state-hover"),
        -1 !== this.className.indexOf("ui-datepicker-prev") && n(this).addClass("ui-datepicker-prev-hover"),
        -1 !== this.className.indexOf("ui-datepicker-next") && n(this).addClass("ui-datepicker-next-hover"))
    }
    function u(t, i) {
        n.extend(t, i);
        for (var r in i)
            null == i[r] && (t[r] = i[r]);
        return t
    }
    function t(n) {
        return function() {
            var t = this.element.val();
            n.apply(this, arguments);
            this._refresh();
            t !== this.element.val() && this._trigger("change")
        }
    }
    var v, o, r, f, y, i, w;
    n.ui = n.ui || {};
    n.ui.version = "1.12.1";
    v = 0;
    o = Array.prototype.slice;
    n.cleanData = function(t) {
        return function(i) {
            for (var r, u, f = 0; null != (u = i[f]); f++)
                try {
                    r = n._data(u, "events");
                    r && r.remove && n(u).triggerHandler("remove")
                } catch (e) {}
            t(i)
        }
    }(n.cleanData);
    n.widget = function(t, i, r) {
        var f, u, o, h = {}, e = t.split(".")[0], s;
        return t = t.split(".")[1],
        s = e + "-" + t,
        r || (r = i,
        i = n.Widget),
        n.isArray(r) && (r = n.extend.apply(null, [{}].concat(r))),
        n.expr[":"][s.toLowerCase()] = function(t) {
            return !!n.data(t, s)
        }
        ,
        n[e] = n[e] || {},
        f = n[e][t],
        u = n[e][t] = function(n, t) {
            return this._createWidget ? (arguments.length && this._createWidget(n, t),
            void 0) : new u(n,t)
        }
        ,
        n.extend(u, f, {
            version: r.version,
            _proto: n.extend({}, r),
            _childConstructors: []
        }),
        o = new i,
        o.options = n.widget.extend({}, o.options),
        n.each(r, function(t, r) {
            return n.isFunction(r) ? (h[t] = function() {
                function n() {
                    return i.prototype[t].apply(this, arguments)
                }
                function u(n) {
                    return i.prototype[t].apply(this, n)
                }
                return function() {
                    var t, i = this._super, f = this._superApply;
                    return this._super = n,
                    this._superApply = u,
                    t = r.apply(this, arguments),
                    this._super = i,
                    this._superApply = f,
                    t
                }
            }(),
            void 0) : (h[t] = r,
            void 0)
        }),
        u.prototype = n.widget.extend(o, {
            widgetEventPrefix: f ? o.widgetEventPrefix || t : t
        }, h, {
            constructor: u,
            namespace: e,
            widgetName: t,
            widgetFullName: s
        }),
        f ? (n.each(f._childConstructors, function(t, i) {
            var r = i.prototype;
            n.widget(r.namespace + "." + r.widgetName, u, i._proto)
        }),
        delete f._childConstructors) : i._childConstructors.push(u),
        n.widget.bridge(t, u),
        u
    }
    ;
    n.widget.extend = function(t) {
        for (var i, r, f = o.call(arguments, 1), u = 0, e = f.length; e > u; u++)
            for (i in f[u])
                r = f[u][i],
                f[u].hasOwnProperty(i) && void 0 !== r && (t[i] = n.isPlainObject(r) ? n.isPlainObject(t[i]) ? n.widget.extend({}, t[i], r) : n.widget.extend({}, r) : r);
        return t
    }
    ;
    n.widget.bridge = function(t, i) {
        var r = i.prototype.widgetFullName || t;
        n.fn[t] = function(u) {
            var s = "string" == typeof u
              , e = o.call(arguments, 1)
              , f = this;
            return s ? this.length || "instance" !== u ? this.each(function() {
                var i, o = n.data(this, r);
                return "instance" === u ? (f = o,
                !1) : o ? n.isFunction(o[u]) && "_" !== u.charAt(0) ? (i = o[u].apply(o, e),
                i !== o && void 0 !== i ? (f = i && i.jquery ? f.pushStack(i.get()) : i,
                !1) : void 0) : n.error("no such method '" + u + "' for " + t + " widget instance") : n.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + u + "'")
            }) : f = void 0 : (e.length && (u = n.widget.extend.apply(null, [u].concat(e))),
            this.each(function() {
                var t = n.data(this, r);
                t ? (t.option(u || {}),
                t._init && t._init()) : n.data(this, r, new i(u,this))
            })),
            f
        }
    }
    ;
    n.Widget = function() {}
    ;
    n.Widget._childConstructors = [];
    n.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = n(i || this.defaultElement || this)[0];
            this.element = n(i);
            this.uuid = v++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = n();
            this.hoverable = n();
            this.focusable = n();
            this.classesElementLookup = {};
            i !== this && (n.data(i, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(n) {
                    n.target === i && this.destroy()
                }
            }),
            this.document = n(i.style ? i.ownerDocument : i.document || i),
            this.window = n(this.document[0].defaultView || this.document[0].parentWindow));
            this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t);
            this._create();
            this.options.disabled && this._setOptionDisabled(this.options.disabled);
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: n.noop,
        _create: n.noop,
        _init: n.noop,
        destroy: function() {
            var t = this;
            this._destroy();
            n.each(this.classesElementLookup, function(n, i) {
                t._removeClass(i, n)
            });
            this.element.off(this.eventNamespace).removeData(this.widgetFullName);
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
            this.bindings.off(this.eventNamespace)
        },
        _destroy: n.noop,
        widget: function() {
            return this.element
        },
        option: function(t, i) {
            var r, u, f, e = t;
            if (0 === arguments.length)
                return n.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (e = {},
                r = t.split("."),
                t = r.shift(),
                r.length) {
                    for (u = e[t] = n.widget.extend({}, this.options[t]),
                    f = 0; r.length - 1 > f; f++)
                        u[r[f]] = u[r[f]] || {},
                        u = u[r[f]];
                    if (t = r.pop(),
                    1 === arguments.length)
                        return void 0 === u[t] ? null : u[t];
                    u[t] = i
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[t] ? null : this.options[t];
                    e[t] = i
                }
            return this._setOptions(e),
            this
        },
        _setOptions: function(n) {
            for (var t in n)
                this._setOption(t, n[t]);
            return this
        },
        _setOption: function(n, t) {
            return "classes" === n && this._setOptionClasses(t),
            this.options[n] = t,
            "disabled" === n && this._setOptionDisabled(t),
            this
        },
        _setOptionClasses: function(t) {
            var i, u, r;
            for (i in t)
                r = this.classesElementLookup[i],
                t[i] !== this.options.classes[i] && r && r.length && (u = n(r.get()),
                this._removeClass(r, i),
                u.addClass(this._classes({
                    element: u,
                    keys: i,
                    classes: t,
                    add: !0
                })))
        },
        _setOptionDisabled: function(n) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!n);
            n && (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(t) {
            function r(r, f) {
                for (var o, e = 0; r.length > e; e++)
                    o = u.classesElementLookup[r[e]] || n(),
                    o = t.add ? n(n.unique(o.get().concat(t.element.get()))) : n(o.not(t.element).get()),
                    u.classesElementLookup[r[e]] = o,
                    i.push(r[e]),
                    f && t.classes[r[e]] && i.push(t.classes[r[e]])
            }
            var i = []
              , u = this;
            return t = n.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, t),
            this._on(t.element, {
                remove: "_untrackClassesElement"
            }),
            t.keys && r(t.keys.match(/\S+/g) || [], !0),
            t.extra && r(t.extra.match(/\S+/g) || []),
            i.join(" ")
        },
        _untrackClassesElement: function(t) {
            var i = this;
            n.each(i.classesElementLookup, function(r, u) {
                -1 !== n.inArray(t.target, u) && (i.classesElementLookup[r] = n(u.not(t.target).get()))
            })
        },
        _removeClass: function(n, t, i) {
            return this._toggleClass(n, t, i, !1)
        },
        _addClass: function(n, t, i) {
            return this._toggleClass(n, t, i, !0)
        },
        _toggleClass: function(n, t, i, r) {
            r = "boolean" == typeof r ? r : i;
            var u = "string" == typeof n || null === n
              , f = {
                extra: u ? t : i,
                keys: u ? n : t,
                element: u ? this.element : n,
                add: r
            };
            return f.element.toggleClass(this._classes(f), r),
            this
        },
        _on: function(t, i, r) {
            var f, u = this;
            "boolean" != typeof t && (r = i,
            i = t,
            t = !1);
            r ? (i = f = n(i),
            this.bindings = this.bindings.add(i)) : (r = i,
            i = this.element,
            f = this.widget());
            n.each(r, function(r, e) {
                function o() {
                    if (t || u.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled"))
                        return ("string" == typeof e ? u[e] : e).apply(u, arguments)
                }
                "string" != typeof e && (o.guid = e.guid = e.guid || o.guid || n.guid++);
                var s = r.match(/^([\w:-]*)\s*(.*)$/)
                  , h = s[1] + u.eventNamespace
                  , c = s[2];
                c ? f.on(h, c, o) : i.on(h, o)
            })
        },
        _off: function(t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            t.off(i).off(i);
            this.bindings = n(this.bindings.not(t).get());
            this.focusable = n(this.focusable.not(t).get());
            this.hoverable = n(this.hoverable.not(t).get())
        },
        _delay: function(n, t) {
            function r() {
                return ("string" == typeof n ? i[n] : n).apply(i, arguments)
            }
            var i = this;
            return setTimeout(r, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t);
            this._on(t, {
                mouseenter: function(t) {
                    this._addClass(n(t.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(t) {
                    this._removeClass(n(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t);
            this._on(t, {
                focusin: function(t) {
                    this._addClass(n(t.currentTarget), null, "ui-state-focus")
                },
                focusout: function(t) {
                    this._removeClass(n(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, r) {
            var u, f, e = this.options[t];
            if (r = r || {},
            i = n.Event(i),
            i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            i.target = this.element[0],
            f = i.originalEvent)
                for (u in f)
                    u in i || (i[u] = f[u]);
            return this.element.trigger(i, r),
            !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented())
        }
    };
    n.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        n.Widget.prototype["_" + t] = function(r, u, f) {
            "string" == typeof u && (u = {
                effect: u
            });
            var o, e = u ? u === !0 || "number" == typeof u ? i : u.effect || i : t;
            u = u || {};
            "number" == typeof u && (u = {
                duration: u
            });
            o = !n.isEmptyObject(u);
            u.complete = f;
            u.delay && r.delay(u.delay);
            o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function(i) {
                n(this)[t]();
                f && f.call(r[0]);
                i()
            })
        }
    });
    n.widget,
    function() {
        function f(n, t, i) {
            return [parseFloat(n[0]) * (c.test(n[0]) ? t / 100 : 1), parseFloat(n[1]) * (c.test(n[1]) ? i / 100 : 1)]
        }
        function i(t, i) {
            return parseInt(n.css(t, i), 10) || 0
        }
        function l(t) {
            var i = t[0];
            return 9 === i.nodeType ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : n.isWindow(i) ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: t.scrollTop(),
                    left: t.scrollLeft()
                }
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            } : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset()
            }
        }
        var u, r = Math.max, t = Math.abs, e = /left|center|right/, o = /top|center|bottom/, s = /[\+\-]\d+(\.[\d]+)?%?/, h = /^\w+/, c = /%$/, a = n.fn.position;
        n.position = {
            scrollbarWidth: function() {
                if (void 0 !== u)
                    return u;
                var r, i, t = n("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'><\/div><\/div>"), f = t.children()[0];
                return n("body").append(t),
                r = f.offsetWidth,
                t.css("overflow", "scroll"),
                i = f.offsetWidth,
                r === i && (i = t[0].clientWidth),
                t.remove(),
                u = r - i
            },
            getScrollInfo: function(t) {
                var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x")
                  , r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y")
                  , u = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth
                  , f = "scroll" === r || "auto" === r && t.height < t.element[0].scrollHeight;
                return {
                    width: f ? n.position.scrollbarWidth() : 0,
                    height: u ? n.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(t) {
                var i = n(t || window)
                  , r = n.isWindow(i[0])
                  , u = !!i[0] && 9 === i[0].nodeType
                  , f = !r && !u;
                return {
                    element: i,
                    isWindow: r,
                    isDocument: u,
                    offset: f ? n(t).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: i.outerWidth(),
                    height: i.outerHeight()
                }
            }
        };
        n.fn.position = function(u) {
            if (!u || !u.of)
                return a.apply(this, arguments);
            u = n.extend({}, u);
            var w, c, v, p, y, k, d = n(u.of), nt = n.position.getWithinInfo(u.within), tt = n.position.getScrollInfo(nt), b = (u.collision || "flip").split(" "), g = {};
            return k = l(d),
            d[0].preventDefault && (u.at = "left top"),
            c = k.width,
            v = k.height,
            p = k.offset,
            y = n.extend({}, p),
            n.each(["my", "at"], function() {
                var t, i, n = (u[this] || "").split(" ");
                1 === n.length && (n = e.test(n[0]) ? n.concat(["center"]) : o.test(n[0]) ? ["center"].concat(n) : ["center", "center"]);
                n[0] = e.test(n[0]) ? n[0] : "center";
                n[1] = o.test(n[1]) ? n[1] : "center";
                t = s.exec(n[0]);
                i = s.exec(n[1]);
                g[this] = [t ? t[0] : 0, i ? i[0] : 0];
                u[this] = [h.exec(n[0])[0], h.exec(n[1])[0]]
            }),
            1 === b.length && (b[1] = b[0]),
            "right" === u.at[0] ? y.left += c : "center" === u.at[0] && (y.left += c / 2),
            "bottom" === u.at[1] ? y.top += v : "center" === u.at[1] && (y.top += v / 2),
            w = f(g.at, c, v),
            y.left += w[0],
            y.top += w[1],
            this.each(function() {
                var a, k, o = n(this), s = o.outerWidth(), h = o.outerHeight(), it = i(this, "marginLeft"), rt = i(this, "marginTop"), ut = s + it + i(this, "marginRight") + tt.width, ft = h + rt + i(this, "marginBottom") + tt.height, e = n.extend({}, y), l = f(g.my, o.outerWidth(), o.outerHeight());
                "right" === u.my[0] ? e.left -= s : "center" === u.my[0] && (e.left -= s / 2);
                "bottom" === u.my[1] ? e.top -= h : "center" === u.my[1] && (e.top -= h / 2);
                e.left += l[0];
                e.top += l[1];
                a = {
                    marginLeft: it,
                    marginTop: rt
                };
                n.each(["left", "top"], function(t, i) {
                    n.ui.position[b[t]] && n.ui.position[b[t]][i](e, {
                        targetWidth: c,
                        targetHeight: v,
                        elemWidth: s,
                        elemHeight: h,
                        collisionPosition: a,
                        collisionWidth: ut,
                        collisionHeight: ft,
                        offset: [w[0] + l[0], w[1] + l[1]],
                        my: u.my,
                        at: u.at,
                        within: nt,
                        elem: o
                    })
                });
                u.using && (k = function(n) {
                    var i = p.left - e.left
                      , a = i + c - s
                      , f = p.top - e.top
                      , y = f + v - h
                      , l = {
                        target: {
                            element: d,
                            left: p.left,
                            top: p.top,
                            width: c,
                            height: v
                        },
                        element: {
                            element: o,
                            left: e.left,
                            top: e.top,
                            width: s,
                            height: h
                        },
                        horizontal: 0 > a ? "left" : i > 0 ? "right" : "center",
                        vertical: 0 > y ? "top" : f > 0 ? "bottom" : "middle"
                    };
                    s > c && c > t(i + a) && (l.horizontal = "center");
                    h > v && v > t(f + y) && (l.vertical = "middle");
                    l.important = r(t(i), t(a)) > r(t(f), t(y)) ? "horizontal" : "vertical";
                    u.using.call(this, n, l)
                }
                );
                o.offset(n.extend(e, {
                    using: k
                }))
            })
        }
        ;
        n.ui.position = {
            fit: {
                left: function(n, t) {
                    var h, e = t.within, u = e.isWindow ? e.scrollLeft : e.offset.left, o = e.width, s = n.left - t.collisionPosition.marginLeft, i = u - s, f = s + t.collisionWidth - o - u;
                    t.collisionWidth > o ? i > 0 && 0 >= f ? (h = n.left + i + t.collisionWidth - o - u,
                    n.left += i - h) : n.left = f > 0 && 0 >= i ? u : i > f ? u + o - t.collisionWidth : u : i > 0 ? n.left += i : f > 0 ? n.left -= f : n.left = r(n.left - s, n.left)
                },
                top: function(n, t) {
                    var h, o = t.within, u = o.isWindow ? o.scrollTop : o.offset.top, e = t.within.height, s = n.top - t.collisionPosition.marginTop, i = u - s, f = s + t.collisionHeight - e - u;
                    t.collisionHeight > e ? i > 0 && 0 >= f ? (h = n.top + i + t.collisionHeight - e - u,
                    n.top += i - h) : n.top = f > 0 && 0 >= i ? u : i > f ? u + e - t.collisionHeight : u : i > 0 ? n.top += i : f > 0 ? n.top -= f : n.top = r(n.top - s, n.top)
                }
            },
            flip: {
                left: function(n, i) {
                    var o, s, r = i.within, y = r.offset.left + r.scrollLeft, c = r.width, h = r.isWindow ? r.scrollLeft : r.offset.left, l = n.left - i.collisionPosition.marginLeft, a = l - h, v = l + i.collisionWidth - c - h, u = "left" === i.my[0] ? -i.elemWidth : "right" === i.my[0] ? i.elemWidth : 0, f = "left" === i.at[0] ? i.targetWidth : "right" === i.at[0] ? -i.targetWidth : 0, e = -2 * i.offset[0];
                    0 > a ? (o = n.left + u + f + e + i.collisionWidth - c - y,
                    (0 > o || t(a) > o) && (n.left += u + f + e)) : v > 0 && (s = n.left - i.collisionPosition.marginLeft + u + f + e - h,
                    (s > 0 || v > t(s)) && (n.left += u + f + e))
                },
                top: function(n, i) {
                    var o, s, r = i.within, y = r.offset.top + r.scrollTop, c = r.height, h = r.isWindow ? r.scrollTop : r.offset.top, l = n.top - i.collisionPosition.marginTop, a = l - h, v = l + i.collisionHeight - c - h, p = "top" === i.my[1], u = p ? -i.elemHeight : "bottom" === i.my[1] ? i.elemHeight : 0, f = "top" === i.at[1] ? i.targetHeight : "bottom" === i.at[1] ? -i.targetHeight : 0, e = -2 * i.offset[1];
                    0 > a ? (s = n.top + u + f + e + i.collisionHeight - c - y,
                    (0 > s || t(a) > s) && (n.top += u + f + e)) : v > 0 && (o = n.top - i.collisionPosition.marginTop + u + f + e - h,
                    (o > 0 || v > t(o)) && (n.top += u + f + e))
                }
            },
            flipfit: {
                left: function() {
                    n.ui.position.flip.left.apply(this, arguments);
                    n.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    n.ui.position.flip.top.apply(this, arguments);
                    n.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    }();
    n.ui.position;
    n.extend(n.expr[":"], {
        data: n.expr.createPseudo ? n.expr.createPseudo(function(t) {
            return function(i) {
                return !!n.data(i, t)
            }
        }) : function(t, i, r) {
            return !!n.data(t, r[3])
        }
    });
    n.fn.extend({
        disableSelection: function() {
            var n = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.on(n + ".ui-disableSelection", function(n) {
                    n.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.off(".ui-disableSelection")
        }
    });
    n.ui.focusable = function(t, i) {
        var u, f, e, r, o, s = t.nodeName.toLowerCase();
        return "area" === s ? (u = t.parentNode,
        f = u.name,
        t.href && f && "map" === u.nodeName.toLowerCase() ? (e = n("img[usemap='#" + f + "']"),
        e.length > 0 && e.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(s) ? (r = !t.disabled,
        r && (o = n(t).closest("fieldset")[0],
        o && (r = !o.disabled))) : r = "a" === s ? t.href || i : i,
        r && n(t).is(":visible") && b(n(t)))
    }
    ;
    n.extend(n.expr[":"], {
        focusable: function(t) {
            return n.ui.focusable(t, null != n.attr(t, "tabindex"))
        }
    });
    n.ui.focusable;
    n.fn.form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : n(this[0].form)
    }
    ;
    n.ui.formResetMixin = {
        _formResetHandler: function() {
            var t = n(this);
            setTimeout(function() {
                var i = t.data("ui-form-reset-instances");
                n.each(i, function() {
                    this.refresh()
                })
            })
        },
        _bindFormResetHandler: function() {
            if (this.form = this.element.form(),
            this.form.length) {
                var n = this.form.data("ui-form-reset-instances") || [];
                n.length || this.form.on("reset.ui-form-reset", this._formResetHandler);
                n.push(this);
                this.form.data("ui-form-reset-instances", n)
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var t = this.form.data("ui-form-reset-instances");
                t.splice(n.inArray(this, t), 1);
                t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
            }
        }
    };
    "1.7" === n.fn.jquery.substring(0, 3) && (n.each(["Width", "Height"], function(t, i) {
        function r(t, i, r, u) {
            return n.each(e, function() {
                i -= parseFloat(n.css(t, "padding" + this)) || 0;
                r && (i -= parseFloat(n.css(t, "border" + this + "Width")) || 0);
                u && (i -= parseFloat(n.css(t, "margin" + this)) || 0)
            }),
            i
        }
        var e = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"]
          , u = i.toLowerCase()
          , f = {
            innerWidth: n.fn.innerWidth,
            innerHeight: n.fn.innerHeight,
            outerWidth: n.fn.outerWidth,
            outerHeight: n.fn.outerHeight
        };
        n.fn["inner" + i] = function(t) {
            return void 0 === t ? f["inner" + i].call(this) : this.each(function() {
                n(this).css(u, r(this, t) + "px")
            })
        }
        ;
        n.fn["outer" + i] = function(t, e) {
            return "number" != typeof t ? f["outer" + i].call(this, t) : this.each(function() {
                n(this).css(u, r(this, t, !0, e) + "px")
            })
        }
    }),
    n.fn.addBack = function(n) {
        return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
    }
    );
    n.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    };
    n.ui.escapeSelector = function() {
        var n = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
        return function(t) {
            return t.replace(n, "\\$1")
        }
    }();
    n.fn.labels = function() {
        var t, r, u, i, f;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (i = this.eq(0).parents("label"),
        u = this.attr("id"),
        u && (t = this.eq(0).parents().last(),
        f = t.add(t.length ? t.siblings() : this.siblings()),
        r = "label[for='" + n.ui.escapeSelector(u) + "']",
        i = i.add(f.find(r).addBack(r))),
        this.pushStack(i))
    }
    ;
    n.fn.scrollParent = function(t) {
        var i = this.css("position")
          , u = "absolute" === i
          , f = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/
          , r = this.parents().filter(function() {
            var t = n(this);
            return u && "static" === t.css("position") ? !1 : f.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
        }).eq(0);
        return "fixed" !== i && r.length ? r : n(this[0].ownerDocument || document)
    }
    ;
    n.extend(n.expr[":"], {
        tabbable: function(t) {
            var i = n.attr(t, "tabindex")
              , r = null != i;
            return (!r || i >= 0) && n.ui.focusable(t, r)
        }
    });
    n.fn.extend({
        uniqueId: function() {
            var n = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++n)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && n(this).removeAttr("id")
            })
        }
    });
    n.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    r = !1;
    n(document).on("mouseup", function() {
        r = !1
    });
    n.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.on("mousedown." + this.widgetName, function(n) {
                return t._mouseDown(n)
            }).on("click." + this.widgetName, function(i) {
                if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent"))
                    return (n.removeData(i.target, t.widgetName + ".preventClickEvent"),
                    i.stopImmediatePropagation(),
                    !1)
            });
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName);
            this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!r) {
                this._mouseMoved = !1;
                this._mouseStarted && this._mouseUp(t);
                this._mouseDownEvent = t;
                var i = this
                  , u = 1 === t.which
                  , f = "string" == typeof this.options.cancel && t.target.nodeName ? n(t.target).closest(this.options.cancel).length : !1;
                return u && !f && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1,
                !this._mouseStarted) ? (t.preventDefault(),
                !0) : (!0 === n.data(t.target, this.widgetName + ".preventClickEvent") && n.removeData(t.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(n) {
                    return i._mouseMove(n)
                }
                ,
                this._mouseUpDelegate = function(n) {
                    return i._mouseUp(n)
                }
                ,
                this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate),
                t.preventDefault(),
                r = !0,
                !0)) : !0
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (n.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button)
                    return this._mouseUp(t);
                if (!t.which)
                    if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey)
                        this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich)
                        return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0),
            this._mouseStarted ? (this._mouseDrag(t),
            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1,
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted)
        },
        _mouseUp: function(t) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
            this._mouseStarted && (this._mouseStarted = !1,
            t.target === this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t));
            this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer),
            delete this._mouseDelayTimer);
            this.ignoreMissingWhich = !1;
            r = !1;
            t.preventDefault()
        },
        _mouseDistanceMet: function(n) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    });
    n.ui.plugin = {
        add: function(t, i, r) {
            var u, f = n.ui[t].prototype;
            for (u in r)
                f.plugins[u] = f.plugins[u] || [],
                f.plugins[u].push([i, r[u]])
        },
        call: function(n, t, i, r) {
            var u, f = n.plugins[t];
            if (f && (r || n.element[0].parentNode && 11 !== n.element[0].parentNode.nodeType))
                for (u = 0; f.length > u; u++)
                    n.options[f[u][0]] && f[u][1].apply(n.element, i)
        }
    };
    n.ui.safeActiveElement = function(n) {
        var t;
        try {
            t = n.activeElement
        } catch (i) {
            t = n.body
        }
        return t || (t = n.body),
        t.nodeName || (t = n.body),
        t
    }
    ;
    n.ui.safeBlur = function(t) {
        t && "body" !== t.nodeName.toLowerCase() && n(t).trigger("blur")
    }
    ;
    n.widget("ui.draggable", n.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative();
            this.options.addClasses && this._addClass("ui-draggable");
            this._setHandleClassName();
            this._mouseInit()
        },
        _setOption: function(n, t) {
            this._super(n, t);
            "handle" === n && (this._removeHandleClassName(),
            this._setHandleClassName())
        },
        _destroy: function() {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0,
            void 0) : (this._removeHandleClassName(),
            this._mouseDestroy(),
            void 0)
        },
        _mouseCapture: function(t) {
            var i = this.options;
            return this.helper || i.disabled || n(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t),
            this.handle ? (this._blurActiveElement(t),
            this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix),
            !0) : !1)
        },
        _blockFrames: function(t) {
            this.iframeBlocks = this.document.find(t).map(function() {
                var t = n(this);
                return n("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _blurActiveElement: function(t) {
            var i = n.ui.safeActiveElement(this.document[0])
              , r = n(t.target);
            r.closest(i).length || n.ui.safeBlur(i)
        },
        _mouseStart: function(t) {
            var i = this.options;
            return this.helper = this._createHelper(t),
            this._addClass(this.helper, "ui-draggable-dragging"),
            this._cacheHelperProportions(),
            n.ui.ddmanager && (n.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(!0),
            this.offsetParent = this.helper.offsetParent(),
            this.hasFixedAncestor = this.helper.parents().filter(function() {
                return "fixed" === n(this).css("position")
            }).length > 0,
            this.positionAbs = this.element.offset(),
            this._refreshOffsets(t),
            this.originalPosition = this.position = this._generatePosition(t, !1),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
            this._setContainment(),
            this._trigger("start", t) === !1 ? (this._clear(),
            !1) : (this._cacheHelperProportions(),
            n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t),
            this._mouseDrag(t, !0),
            n.ui.ddmanager && n.ui.ddmanager.dragStart(this, t),
            !0)
        },
        _refreshOffsets: function(n) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };
            this.offset.click = {
                left: n.pageX - this.offset.left,
                top: n.pageY - this.offset.top
            }
        },
        _mouseDrag: function(t, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()),
            this.position = this._generatePosition(t, !0),
            this.positionAbs = this._convertPositionTo("absolute"),
            !i) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1)
                    return this._mouseUp(new n.Event("mouseup",t)),
                    !1;
                this.position = r.position
            }
            return this.helper[0].style.left = this.position.left + "px",
            this.helper[0].style.top = this.position.top + "px",
            n.ui.ddmanager && n.ui.ddmanager.drag(this, t),
            !1
        },
        _mouseStop: function(t) {
            var r = this
              , i = !1;
            return n.ui.ddmanager && !this.options.dropBehaviour && (i = n.ui.ddmanager.drop(this, t)),
            this.dropped && (i = this.dropped,
            this.dropped = !1),
            "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || this.options.revert === !0 || n.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? n(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                r._trigger("stop", t) !== !1 && r._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(),
            !1
        },
        _mouseUp: function(t) {
            return this._unblockFrames(),
            n.ui.ddmanager && n.ui.ddmanager.dragStop(this, t),
            this.handleElement.is(t.target) && this.element.trigger("focus"),
            n.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new n.Event("mouseup",{
                target: this.element[0]
            })) : this._clear(),
            this
        },
        _getHandle: function(t) {
            return this.options.handle ? !!n(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function(t) {
            var r = this.options
              , u = n.isFunction(r.helper)
              , i = u ? n(r.helper.apply(this.element[0], [t])) : "clone" === r.helper ? this.element.clone().removeAttr("id") : this.element;
            return i.parents("body").length || i.appendTo("parent" === r.appendTo ? this.element[0].parentNode : r.appendTo),
            u && i[0] === this.element[0] && this._setPositionRelative(),
            i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"),
            i
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" "));
            n.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            });
            "left"in t && (this.offset.click.left = t.left + this.margins.left);
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
            "top"in t && (this.offset.click.top = t.top + this.margins.top);
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _isRootNode: function(n) {
            return /(html|body)/i.test(n.tagName) || n === this.document[0]
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset()
              , i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop()),
            this._isRootNode(this.offsetParent[0]) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition)
                return {
                    top: 0,
                    left: 0
                };
            var n = this.element.position()
              , t = this._isRootNode(this.scrollParent[0]);
            return {
                top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var f, t, i, r = this.options, u = this.document[0];
            return this.relativeContainer = null,
            r.containment ? "window" === r.containment ? (this.containment = [n(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, n(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, n(window).scrollLeft() + n(window).width() - this.helperProportions.width - this.margins.left, n(window).scrollTop() + (n(window).height() || u.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top],
            void 0) : "document" === r.containment ? (this.containment = [0, 0, n(u).width() - this.helperProportions.width - this.margins.left, (n(u).height() || u.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top],
            void 0) : r.containment.constructor === Array ? (this.containment = r.containment,
            void 0) : ("parent" === r.containment && (r.containment = this.helper[0].parentNode),
            t = n(r.containment),
            i = t[0],
            i && (f = /(scroll|auto)/.test(t.css("overflow")),
            this.containment = [(parseInt(t.css("borderLeftWidth"), 10) || 0) + (parseInt(t.css("paddingLeft"), 10) || 0), (parseInt(t.css("borderTopWidth"), 10) || 0) + (parseInt(t.css("paddingTop"), 10) || 0), (f ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t.css("borderRightWidth"), 10) || 0) - (parseInt(t.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (f ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t.css("borderBottomWidth"), 10) || 0) - (parseInt(t.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
            this.relativeContainer = t),
            void 0) : (this.containment = null,
            void 0)
        },
        _convertPositionTo: function(n, t) {
            t || (t = this.position);
            var i = "absolute" === n ? 1 : -1
              , r = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top) * i,
                left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(n, t) {
            var i, s, u, f, r = this.options, h = this._isRootNode(this.scrollParent[0]), e = n.pageX, o = n.pageY;
            return h && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }),
            t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(),
            i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment,
            n.pageX - this.offset.click.left < i[0] && (e = i[0] + this.offset.click.left),
            n.pageY - this.offset.click.top < i[1] && (o = i[1] + this.offset.click.top),
            n.pageX - this.offset.click.left > i[2] && (e = i[2] + this.offset.click.left),
            n.pageY - this.offset.click.top > i[3] && (o = i[3] + this.offset.click.top)),
            r.grid && (u = r.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY,
            o = i ? u - this.offset.click.top >= i[1] || u - this.offset.click.top > i[3] ? u : u - this.offset.click.top >= i[1] ? u - r.grid[1] : u + r.grid[1] : u,
            f = r.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX,
            e = i ? f - this.offset.click.left >= i[0] || f - this.offset.click.left > i[2] ? f : f - this.offset.click.left >= i[0] ? f - r.grid[0] : f + r.grid[0] : f),
            "y" === r.axis && (e = this.originalPageX),
            "x" === r.axis && (o = this.originalPageY)),
            {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
                left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging");
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = !1;
            this.destroyOnClear && this.destroy()
        },
        _trigger: function(t, i, r) {
            return r = r || this._uiHash(),
            n.ui.plugin.call(this, t, [i, r, this], !0),
            /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"),
            r.offset = this.positionAbs),
            n.Widget.prototype._trigger.call(this, t, i, r)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    n.ui.plugin.add("draggable", "connectToSortable", {
        start: function(t, i, r) {
            var u = n.extend({}, i, {
                item: r.element
            });
            r.sortables = [];
            n(r.options.connectToSortable).each(function() {
                var i = n(this).sortable("instance");
                i && !i.options.disabled && (r.sortables.push(i),
                i.refreshPositions(),
                i._trigger("activate", t, u))
            })
        },
        stop: function(t, i, r) {
            var u = n.extend({}, i, {
                item: r.element
            });
            r.cancelHelperRemoval = !1;
            n.each(r.sortables, function() {
                var n = this;
                n.isOver ? (n.isOver = 0,
                r.cancelHelperRemoval = !0,
                n.cancelHelperRemoval = !1,
                n._storedCSS = {
                    position: n.placeholder.css("position"),
                    top: n.placeholder.css("top"),
                    left: n.placeholder.css("left")
                },
                n._mouseStop(t),
                n.options.helper = n.options._helper) : (n.cancelHelperRemoval = !0,
                n._trigger("deactivate", t, u))
            })
        },
        drag: function(t, i, r) {
            n.each(r.sortables, function() {
                var f = !1
                  , u = this;
                u.positionAbs = r.positionAbs;
                u.helperProportions = r.helperProportions;
                u.offset.click = r.offset.click;
                u._intersectsWith(u.containerCache) && (f = !0,
                n.each(r.sortables, function() {
                    return this.positionAbs = r.positionAbs,
                    this.helperProportions = r.helperProportions,
                    this.offset.click = r.offset.click,
                    this !== u && this._intersectsWith(this.containerCache) && n.contains(u.element[0], this.element[0]) && (f = !1),
                    f
                }));
                f ? (u.isOver || (u.isOver = 1,
                r._parent = i.helper.parent(),
                u.currentItem = i.helper.appendTo(u.element).data("ui-sortable-item", !0),
                u.options._helper = u.options.helper,
                u.options.helper = function() {
                    return i.helper[0]
                }
                ,
                t.target = u.currentItem[0],
                u._mouseCapture(t, !0),
                u._mouseStart(t, !0, !0),
                u.offset.click.top = r.offset.click.top,
                u.offset.click.left = r.offset.click.left,
                u.offset.parent.left -= r.offset.parent.left - u.offset.parent.left,
                u.offset.parent.top -= r.offset.parent.top - u.offset.parent.top,
                r._trigger("toSortable", t),
                r.dropped = u.element,
                n.each(r.sortables, function() {
                    this.refreshPositions()
                }),
                r.currentItem = r.element,
                u.fromOutside = r),
                u.currentItem && (u._mouseDrag(t),
                i.position = u.position)) : u.isOver && (u.isOver = 0,
                u.cancelHelperRemoval = !0,
                u.options._revert = u.options.revert,
                u.options.revert = !1,
                u._trigger("out", t, u._uiHash(u)),
                u._mouseStop(t, !0),
                u.options.revert = u.options._revert,
                u.options.helper = u.options._helper,
                u.placeholder && u.placeholder.remove(),
                i.helper.appendTo(r._parent),
                r._refreshOffsets(t),
                i.position = r._generatePosition(t, !0),
                r._trigger("fromSortable", t),
                r.dropped = !1,
                n.each(r.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    });
    n.ui.plugin.add("draggable", "cursor", {
        start: function(t, i, r) {
            var u = n("body")
              , f = r.options;
            u.css("cursor") && (f._cursor = u.css("cursor"));
            u.css("cursor", f.cursor)
        },
        stop: function(t, i, r) {
            var u = r.options;
            u._cursor && n("body").css("cursor", u._cursor)
        }
    });
    n.ui.plugin.add("draggable", "opacity", {
        start: function(t, i, r) {
            var u = n(i.helper)
              , f = r.options;
            u.css("opacity") && (f._opacity = u.css("opacity"));
            u.css("opacity", f.opacity)
        },
        stop: function(t, i, r) {
            var u = r.options;
            u._opacity && n(i.helper).css("opacity", u._opacity)
        }
    });
    n.ui.plugin.add("draggable", "scroll", {
        start: function(n, t, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1));
            i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function(t, i, r) {
            var u = r.options
              , o = !1
              , e = r.scrollParentNotHidden[0]
              , f = r.document[0];
            e !== f && "HTML" !== e.tagName ? (u.axis && "x" === u.axis || (r.overflowOffset.top + e.offsetHeight - t.pageY < u.scrollSensitivity ? e.scrollTop = o = e.scrollTop + u.scrollSpeed : t.pageY - r.overflowOffset.top < u.scrollSensitivity && (e.scrollTop = o = e.scrollTop - u.scrollSpeed)),
            u.axis && "y" === u.axis || (r.overflowOffset.left + e.offsetWidth - t.pageX < u.scrollSensitivity ? e.scrollLeft = o = e.scrollLeft + u.scrollSpeed : t.pageX - r.overflowOffset.left < u.scrollSensitivity && (e.scrollLeft = o = e.scrollLeft - u.scrollSpeed))) : (u.axis && "x" === u.axis || (t.pageY - n(f).scrollTop() < u.scrollSensitivity ? o = n(f).scrollTop(n(f).scrollTop() - u.scrollSpeed) : n(window).height() - (t.pageY - n(f).scrollTop()) < u.scrollSensitivity && (o = n(f).scrollTop(n(f).scrollTop() + u.scrollSpeed))),
            u.axis && "y" === u.axis || (t.pageX - n(f).scrollLeft() < u.scrollSensitivity ? o = n(f).scrollLeft(n(f).scrollLeft() - u.scrollSpeed) : n(window).width() - (t.pageX - n(f).scrollLeft()) < u.scrollSensitivity && (o = n(f).scrollLeft(n(f).scrollLeft() + u.scrollSpeed))));
            o !== !1 && n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(r, t)
        }
    });
    n.ui.plugin.add("draggable", "snap", {
        start: function(t, i, r) {
            var u = r.options;
            r.snapElements = [];
            n(u.snap.constructor !== String ? u.snap.items || ":data(ui-draggable)" : u.snap).each(function() {
                var t = n(this)
                  , i = t.offset();
                this !== r.element[0] && r.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function(t, i, r) {
            for (var e, o, s, h, c, a, l, v, w, b = r.options, f = b.snapTolerance, y = i.offset.left, k = y + r.helperProportions.width, p = i.offset.top, d = p + r.helperProportions.height, u = r.snapElements.length - 1; u >= 0; u--)
                c = r.snapElements[u].left - r.margins.left,
                a = c + r.snapElements[u].width,
                l = r.snapElements[u].top - r.margins.top,
                v = l + r.snapElements[u].height,
                c - f > k || y > a + f || l - f > d || p > v + f || !n.contains(r.snapElements[u].item.ownerDocument, r.snapElements[u].item) ? (r.snapElements[u].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, n.extend(r._uiHash(), {
                    snapItem: r.snapElements[u].item
                })),
                r.snapElements[u].snapping = !1) : ("inner" !== b.snapMode && (e = f >= Math.abs(l - d),
                o = f >= Math.abs(v - p),
                s = f >= Math.abs(c - k),
                h = f >= Math.abs(a - y),
                e && (i.position.top = r._convertPositionTo("relative", {
                    top: l - r.helperProportions.height,
                    left: 0
                }).top),
                o && (i.position.top = r._convertPositionTo("relative", {
                    top: v,
                    left: 0
                }).top),
                s && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: c - r.helperProportions.width
                }).left),
                h && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left)),
                w = e || o || s || h,
                "outer" !== b.snapMode && (e = f >= Math.abs(l - p),
                o = f >= Math.abs(v - d),
                s = f >= Math.abs(c - y),
                h = f >= Math.abs(a - k),
                e && (i.position.top = r._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top),
                o && (i.position.top = r._convertPositionTo("relative", {
                    top: v - r.helperProportions.height,
                    left: 0
                }).top),
                s && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: c
                }).left),
                h && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a - r.helperProportions.width
                }).left)),
                !r.snapElements[u].snapping && (e || o || s || h || w) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, n.extend(r._uiHash(), {
                    snapItem: r.snapElements[u].item
                })),
                r.snapElements[u].snapping = e || o || s || h || w)
        }
    });
    n.ui.plugin.add("draggable", "stack", {
        start: function(t, i, r) {
            var f, e = r.options, u = n.makeArray(n(e.stack)).sort(function(t, i) {
                return (parseInt(n(t).css("zIndex"), 10) || 0) - (parseInt(n(i).css("zIndex"), 10) || 0)
            });
            u.length && (f = parseInt(n(u[0]).css("zIndex"), 10) || 0,
            n(u).each(function(t) {
                n(this).css("zIndex", f + t)
            }),
            this.css("zIndex", f + u.length))
        }
    });
    n.ui.plugin.add("draggable", "zIndex", {
        start: function(t, i, r) {
            var u = n(i.helper)
              , f = r.options;
            u.css("zIndex") && (f._zIndex = u.css("zIndex"));
            u.css("zIndex", f.zIndex)
        },
        stop: function(t, i, r) {
            var u = r.options;
            u._zIndex && n(i.helper).css("zIndex", u._zIndex)
        }
    });
    n.ui.draggable;
    n.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var t, i = this.options, r = i.accept;
            this.isover = !1;
            this.isout = !0;
            this.accept = n.isFunction(r) ? r : function(n) {
                return n.is(r)
            }
            ;
            this.proportions = function() {
                return arguments.length ? (t = arguments[0],
                void 0) : t ? t : t = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            }
            ;
            this._addToManager(i.scope);
            i.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function(t) {
            n.ui.ddmanager.droppables[t] = n.ui.ddmanager.droppables[t] || [];
            n.ui.ddmanager.droppables[t].push(this)
        },
        _splice: function(n) {
            for (var t = 0; n.length > t; t++)
                n[t] === this && n.splice(t, 1)
        },
        _destroy: function() {
            var t = n.ui.ddmanager.droppables[this.options.scope];
            this._splice(t)
        },
        _setOption: function(t, i) {
            if ("accept" === t)
                this.accept = n.isFunction(i) ? i : function(n) {
                    return n.is(i)
                }
                ;
            else if ("scope" === t) {
                var r = n.ui.ddmanager.droppables[this.options.scope];
                this._splice(r);
                this._addToManager(i)
            }
            this._super(t, i)
        },
        _activate: function(t) {
            var i = n.ui.ddmanager.current;
            this._addActiveClass();
            i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function(t) {
            var i = n.ui.ddmanager.current;
            this._removeActiveClass();
            i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(),
            this._trigger("over", t, this.ui(i)))
        },
        _out: function(t) {
            var i = n.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(),
            this._trigger("out", t, this.ui(i)))
        },
        _drop: function(t, i) {
            var r = i || n.ui.ddmanager.current
              , u = !1;
            return r && (r.currentItem || r.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var i = n(this).droppable("instance");
                if (i.options.greedy && !i.options.disabled && i.options.scope === r.options.scope && i.accept.call(i.element[0], r.currentItem || r.element) && f(r, n.extend(i, {
                    offset: i.element.offset()
                }), i.options.tolerance, t))
                    return (u = !0,
                    !1)
            }),
            u ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this._removeActiveClass(),
            this._removeHoverClass(),
            this._trigger("drop", t, this.ui(r)),
            this.element) : !1) : !1
        },
        ui: function(n) {
            return {
                draggable: n.currentItem || n.element,
                helper: n.helper,
                position: n.position,
                offset: n.positionAbs
            }
        },
        _addHoverClass: function() {
            this._addClass("ui-droppable-hover")
        },
        _removeHoverClass: function() {
            this._removeClass("ui-droppable-hover")
        },
        _addActiveClass: function() {
            this._addClass("ui-droppable-active")
        },
        _removeActiveClass: function() {
            this._removeClass("ui-droppable-active")
        }
    });
    f = n.ui.intersect = function() {
        function n(n, t, i) {
            return n >= t && t + i > n
        }
        return function(t, i, r, u) {
            if (!i.offset)
                return !1;
            var o = (t.positionAbs || t.position.absolute).left + t.margins.left
              , s = (t.positionAbs || t.position.absolute).top + t.margins.top
              , h = o + t.helperProportions.width
              , c = s + t.helperProportions.height
              , f = i.offset.left
              , e = i.offset.top
              , l = f + i.proportions().width
              , a = e + i.proportions().height;
            switch (r) {
            case "fit":
                return o >= f && l >= h && s >= e && a >= c;
            case "intersect":
                return o + t.helperProportions.width / 2 > f && l > h - t.helperProportions.width / 2 && s + t.helperProportions.height / 2 > e && a > c - t.helperProportions.height / 2;
            case "pointer":
                return n(u.pageY, e, i.proportions().height) && n(u.pageX, f, i.proportions().width);
            case "touch":
                return (s >= e && a >= s || c >= e && a >= c || e > s && c > a) && (o >= f && l >= o || h >= f && l >= h || f > o && h > l);
            default:
                return !1
            }
        }
    }();
    n.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, i) {
            var r, f, u = n.ui.ddmanager.droppables[t.options.scope] || [], o = i ? i.type : null, e = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            n: for (r = 0; u.length > r; r++)
                if (!(u[r].options.disabled || t && !u[r].accept.call(u[r].element[0], t.currentItem || t.element))) {
                    for (f = 0; e.length > f; f++)
                        if (e[f] === u[r].element[0]) {
                            u[r].proportions().height = 0;
                            continue n
                        }
                    u[r].visible = "none" !== u[r].element.css("display");
                    u[r].visible && ("mousedown" === o && u[r]._activate.call(u[r], i),
                    u[r].offset = u[r].element.offset(),
                    u[r].proportions({
                        width: u[r].element[0].offsetWidth,
                        height: u[r].element[0].offsetHeight
                    }))
                }
        },
        drop: function(t, i) {
            var r = !1;
            return n.each((n.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && f(t, this, this.options.tolerance, i) && (r = this._drop.call(this, i) || r),
                !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0,
                this.isover = !1,
                this._deactivate.call(this, i)))
            }),
            r
        },
        dragStart: function(t, i) {
            t.element.parentsUntil("body").on("scroll.droppable", function() {
                t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
            })
        },
        drag: function(t, i) {
            t.options.refreshPositions && n.ui.ddmanager.prepareOffsets(t, i);
            n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var r, o, e, s = f(t, this, this.options.tolerance, i), u = !s && this.isover ? "isout" : s && !this.isover ? "isover" : null;
                    u && (this.options.greedy && (o = this.options.scope,
                    e = this.element.parents(":data(ui-droppable)").filter(function() {
                        return n(this).droppable("instance").options.scope === o
                    }),
                    e.length && (r = n(e[0]).droppable("instance"),
                    r.greedyChild = "isover" === u)),
                    r && "isover" === u && (r.isover = !1,
                    r.isout = !0,
                    r._out.call(r, i)),
                    this[u] = !0,
                    this["isout" === u ? "isover" : "isout"] = !1,
                    this["isover" === u ? "_over" : "_out"].call(this, i),
                    r && "isout" === u && (r.isout = !1,
                    r.isover = !0,
                    r._over.call(r, i)))
                }
            })
        },
        dragStop: function(t, i) {
            t.element.parentsUntil("body").off("scroll.droppable");
            t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
        }
    };
    n.uiBackCompat !== !1 && n.widget("ui.droppable", n.ui.droppable, {
        options: {
            hoverClass: !1,
            activeClass: !1
        },
        _addActiveClass: function() {
            this._super();
            this.options.activeClass && this.element.addClass(this.options.activeClass)
        },
        _removeActiveClass: function() {
            this._super();
            this.options.activeClass && this.element.removeClass(this.options.activeClass)
        },
        _addHoverClass: function() {
            this._super();
            this.options.hoverClass && this.element.addClass(this.options.hoverClass)
        },
        _removeHoverClass: function() {
            this._super();
            this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
        }
    });
    n.ui.droppable;
    n.widget("ui.resizable", n.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(n) {
            return parseFloat(n) || 0
        },
        _isNumber: function(n) {
            return !isNaN(parseFloat(n))
        },
        _hasScroll: function(t, i) {
            if ("hidden" === n(t).css("overflow"))
                return !1;
            var r = i && "left" === i ? "scrollLeft" : "scrollTop"
              , u = !1;
            return t[r] > 0 ? !0 : (t[r] = 1,
            u = t[r] > 0,
            t[r] = 0,
            u)
        },
        _create: function() {
            var r, t = this.options, i = this;
            this._addClass("ui-resizable");
            n.extend(this, {
                _aspectRatio: !!t.aspectRatio,
                aspectRatio: t.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null
            });
            this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(n("<div class='ui-wrapper' style='overflow: hidden;'><\/div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })),
            this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")),
            this.elementIsWrapper = !0,
            r = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            },
            this.element.css(r),
            this.originalElement.css("margin", 0),
            this.originalResizeStyle = this.originalElement.css("resize"),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })),
            this.originalElement.css(r),
            this._proportionallyResize());
            this._setupHandles();
            t.autoHide && n(this.element).on("mouseenter", function() {
                t.disabled || (i._removeClass("ui-resizable-autohide"),
                i._handles.show())
            }).on("mouseleave", function() {
                t.disabled || i.resizing || (i._addClass("ui-resizable-autohide"),
                i._handles.hide())
            });
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var t, i = function(t) {
                n(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element),
            t = this.element,
            this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t),
            t.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            i(this.originalElement),
            this
        },
        _setOption: function(n, t) {
            switch (this._super(n, t),
            n) {
            case "handles":
                this._removeHandles();
                this._setupHandles()
            }
        },
        _setupHandles: function() {
            var i, r, u, o, t, f = this.options, e = this;
            if (this.handles = f.handles || (n(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"),
            this._handles = n(),
            this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                u = this.handles.split(","),
                this.handles = {},
                r = 0; u.length > r; r++)
                    i = n.trim(u[r]),
                    o = "ui-resizable-" + i,
                    t = n("<div>"),
                    this._addClass(t, "ui-resizable-handle " + o),
                    t.css({
                        zIndex: f.zIndex
                    }),
                    this.handles[i] = ".ui-resizable-" + i,
                    this.element.append(t);
            this._renderAxis = function(t) {
                var i, r, u, f;
                t = t || this.element;
                for (i in this.handles)
                    this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = n(this.handles[i]),
                    this._on(this.handles[i], {
                        mousedown: e._mouseDown
                    })),
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (r = n(this.handles[i], this.element),
                    f = /sw|ne|nw|se|n|s/.test(i) ? r.outerHeight() : r.outerWidth(),
                    u = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""),
                    t.css(u, f),
                    this._proportionallyResize()),
                    this._handles = this._handles.add(this.handles[i])
            }
            ;
            this._renderAxis(this.element);
            this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
            this._handles.disableSelection();
            this._handles.on("mouseover", function() {
                e.resizing || (this.className && (t = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                e.axis = t && t[1] ? t[1] : "se")
            });
            f.autoHide && (this._handles.hide(),
            this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() {
            this._handles.remove()
        },
        _mouseCapture: function(t) {
            var r, i, u = !1;
            for (r in this.handles)
                i = n(this.handles[r])[0],
                (i === t.target || n.contains(i, t.target)) && (u = !0);
            return !this.options.disabled && u
        },
        _mouseStart: function(t) {
            var u, f, e, r = this.options, i = this.element;
            return this.resizing = !0,
            this._renderProxy(),
            u = this._num(this.helper.css("left")),
            f = this._num(this.helper.css("top")),
            r.containment && (u += n(r.containment).scrollLeft() || 0,
            f += n(r.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: u,
                top: f
            },
            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: i.width(),
                height: i.height()
            },
            this.originalSize = this._helper ? {
                width: i.outerWidth(),
                height: i.outerHeight()
            } : {
                width: i.width(),
                height: i.height()
            },
            this.sizeDiff = {
                width: i.outerWidth() - i.width(),
                height: i.outerHeight() - i.height()
            },
            this.originalPosition = {
                left: u,
                top: f
            },
            this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            },
            this.aspectRatio = "number" == typeof r.aspectRatio ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
            e = n(".ui-resizable-" + this.axis).css("cursor"),
            n("body").css("cursor", "auto" === e ? this.axis + "-resize" : e),
            this._addClass("ui-resizable-resizing"),
            this._propagate("start", t),
            !0
        },
        _mouseDrag: function(t) {
            var i, r, u = this.originalMousePosition, e = this.axis, o = t.pageX - u.left || 0, s = t.pageY - u.top || 0, f = this._change[e];
            return this._updatePrevProperties(),
            f ? (i = f.apply(this, [t, o, s]),
            this._updateVirtualBoundaries(t.shiftKey),
            (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)),
            i = this._respectSize(i, t),
            this._updateCache(i),
            this._propagate("resize", t),
            r = this._applyChanges(),
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
            n.isEmptyObject(r) || (this._updatePrevProperties(),
            this._trigger("resize", t, this.ui()),
            this._applyChanges()),
            !1) : !1
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var r, u, f, e, o, s, h, c = this.options, i = this;
            return this._helper && (r = this._proportionallyResizeElements,
            u = r.length && /textarea/i.test(r[0].nodeName),
            f = u && this._hasScroll(r[0], "left") ? 0 : i.sizeDiff.height,
            e = u ? 0 : i.sizeDiff.width,
            o = {
                width: i.helper.width() - e,
                height: i.helper.height() - f
            },
            s = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
            h = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null,
            c.animate || this.element.css(n.extend(o, {
                top: h,
                left: s
            })),
            i.helper.height(i.size.height),
            i.helper.width(i.size.width),
            this._helper && !c.animate && this._proportionallyResize()),
            n("body").css("cursor", "auto"),
            this._removeClass("ui-resizable-resizing"),
            this._propagate("stop", t),
            this._helper && this.helper.remove(),
            !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var n = {};
            return this.position.top !== this.prevPosition.top && (n.top = this.position.top + "px"),
            this.position.left !== this.prevPosition.left && (n.left = this.position.left + "px"),
            this.size.width !== this.prevSize.width && (n.width = this.size.width + "px"),
            this.size.height !== this.prevSize.height && (n.height = this.size.height + "px"),
            this.helper.css(n),
            n
        },
        _updateVirtualBoundaries: function(n) {
            var r, u, f, e, t, i = this.options;
            t = {
                minWidth: this._isNumber(i.minWidth) ? i.minWidth : 0,
                maxWidth: this._isNumber(i.maxWidth) ? i.maxWidth : 1 / 0,
                minHeight: this._isNumber(i.minHeight) ? i.minHeight : 0,
                maxHeight: this._isNumber(i.maxHeight) ? i.maxHeight : 1 / 0
            };
            (this._aspectRatio || n) && (r = t.minHeight * this.aspectRatio,
            f = t.minWidth / this.aspectRatio,
            u = t.maxHeight * this.aspectRatio,
            e = t.maxWidth / this.aspectRatio,
            r > t.minWidth && (t.minWidth = r),
            f > t.minHeight && (t.minHeight = f),
            t.maxWidth > u && (t.maxWidth = u),
            t.maxHeight > e && (t.maxHeight = e));
            this._vBoundaries = t
        },
        _updateCache: function(n) {
            this.offset = this.helper.offset();
            this._isNumber(n.left) && (this.position.left = n.left);
            this._isNumber(n.top) && (this.position.top = n.top);
            this._isNumber(n.height) && (this.size.height = n.height);
            this._isNumber(n.width) && (this.size.width = n.width)
        },
        _updateRatio: function(n) {
            var t = this.position
              , i = this.size
              , r = this.axis;
            return this._isNumber(n.height) ? n.width = n.height * this.aspectRatio : this._isNumber(n.width) && (n.height = n.width / this.aspectRatio),
            "sw" === r && (n.left = t.left + (i.width - n.width),
            n.top = null),
            "nw" === r && (n.top = t.top + (i.height - n.height),
            n.left = t.left + (i.width - n.width)),
            n
        },
        _respectSize: function(n) {
            var t = this._vBoundaries
              , i = this.axis
              , r = this._isNumber(n.width) && t.maxWidth && t.maxWidth < n.width
              , u = this._isNumber(n.height) && t.maxHeight && t.maxHeight < n.height
              , f = this._isNumber(n.width) && t.minWidth && t.minWidth > n.width
              , e = this._isNumber(n.height) && t.minHeight && t.minHeight > n.height
              , o = this.originalPosition.left + this.originalSize.width
              , s = this.originalPosition.top + this.originalSize.height
              , h = /sw|nw|w/.test(i)
              , c = /nw|ne|n/.test(i);
            return f && (n.width = t.minWidth),
            e && (n.height = t.minHeight),
            r && (n.width = t.maxWidth),
            u && (n.height = t.maxHeight),
            f && h && (n.left = o - t.minWidth),
            r && h && (n.left = o - t.maxWidth),
            e && c && (n.top = s - t.minHeight),
            u && c && (n.top = s - t.maxHeight),
            n.width || n.height || n.left || !n.top ? n.width || n.height || n.top || !n.left || (n.left = null) : n.top = null,
            n
        },
        _getPaddingPlusBorderDimensions: function(n) {
            for (var t = 0, i = [], r = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], u = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")]; 4 > t; t++)
                i[t] = parseFloat(r[t]) || 0,
                i[t] += parseFloat(u[t]) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var n, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++)
                    n = this._proportionallyResizeElements[t],
                    this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(n)),
                    n.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
        },
        _renderProxy: function() {
            var t = this.element
              , i = this.options;
            this.elementOffset = t.offset();
            this._helper ? (this.helper = this.helper || n("<div style='overflow:hidden;'><\/div>"),
            this._addClass(this.helper, this._helper),
            this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }),
            this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(n, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function(n, t) {
                var i = this.originalSize
                  , r = this.originalPosition;
                return {
                    left: r.left + t,
                    width: i.width - t
                }
            },
            n: function(n, t, i) {
                var r = this.originalSize
                  , u = this.originalPosition;
                return {
                    top: u.top + i,
                    height: r.height - i
                }
            },
            s: function(n, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            sw: function(t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            },
            ne: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            nw: function(t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            }
        },
        _propagate: function(t, i) {
            n.ui.plugin.call(this, t, [i, this.ui()]);
            "resize" !== t && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    n.ui.plugin.add("resizable", "animate", {
        stop: function(t) {
            var i = n(this).resizable("instance")
              , u = i.options
              , r = i._proportionallyResizeElements
              , f = r.length && /textarea/i.test(r[0].nodeName)
              , s = f && i._hasScroll(r[0], "left") ? 0 : i.sizeDiff.height
              , h = f ? 0 : i.sizeDiff.width
              , c = {
                width: i.size.width - h,
                height: i.size.height - s
            }
              , e = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null
              , o = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(n.extend(c, o && e ? {
                top: o,
                left: e
            } : {}), {
                duration: u.animateDuration,
                easing: u.animateEasing,
                step: function() {
                    var u = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    r && r.length && n(r[0]).css({
                        width: u.width,
                        height: u.height
                    });
                    i._updateCache(u);
                    i._propagate("resize", t)
                }
            })
        }
    });
    n.ui.plugin.add("resizable", "containment", {
        start: function() {
            var r, f, e, o, s, h, c, t = n(this).resizable("instance"), l = t.options, a = t.element, u = l.containment, i = u instanceof n ? u.get(0) : /parent/.test(u) ? a.parent().get(0) : u;
            i && (t.containerElement = n(i),
            /document/.test(u) || u === document ? (t.containerOffset = {
                left: 0,
                top: 0
            },
            t.containerPosition = {
                left: 0,
                top: 0
            },
            t.parentData = {
                element: n(document),
                left: 0,
                top: 0,
                width: n(document).width(),
                height: n(document).height() || document.body.parentNode.scrollHeight
            }) : (r = n(i),
            f = [],
            n(["Top", "Right", "Left", "Bottom"]).each(function(n, i) {
                f[n] = t._num(r.css("padding" + i))
            }),
            t.containerOffset = r.offset(),
            t.containerPosition = r.position(),
            t.containerSize = {
                height: r.innerHeight() - f[3],
                width: r.innerWidth() - f[1]
            },
            e = t.containerOffset,
            o = t.containerSize.height,
            s = t.containerSize.width,
            h = t._hasScroll(i, "left") ? i.scrollWidth : s,
            c = t._hasScroll(i) ? i.scrollHeight : o,
            t.parentData = {
                element: i,
                left: e.left,
                top: e.top,
                width: h,
                height: c
            }))
        },
        resize: function(t) {
            var o, s, h, c, i = n(this).resizable("instance"), v = i.options, r = i.containerOffset, l = i.position, f = i._aspectRatio || t.shiftKey, e = {
                top: 0,
                left: 0
            }, a = i.containerElement, u = !0;
            a[0] !== document && /static/.test(a.css("position")) && (e = r);
            l.left < (i._helper ? r.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - r.left : i.position.left - e.left),
            f && (i.size.height = i.size.width / i.aspectRatio,
            u = !1),
            i.position.left = v.helper ? r.left : 0);
            l.top < (i._helper ? r.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - r.top : i.position.top),
            f && (i.size.width = i.size.height * i.aspectRatio,
            u = !1),
            i.position.top = i._helper ? r.top : 0);
            h = i.containerElement.get(0) === i.element.parent().get(0);
            c = /relative|absolute/.test(i.containerElement.css("position"));
            h && c ? (i.offset.left = i.parentData.left + i.position.left,
            i.offset.top = i.parentData.top + i.position.top) : (i.offset.left = i.element.offset().left,
            i.offset.top = i.element.offset().top);
            o = Math.abs(i.sizeDiff.width + (i._helper ? i.offset.left - e.left : i.offset.left - r.left));
            s = Math.abs(i.sizeDiff.height + (i._helper ? i.offset.top - e.top : i.offset.top - r.top));
            o + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - o,
            f && (i.size.height = i.size.width / i.aspectRatio,
            u = !1));
            s + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - s,
            f && (i.size.width = i.size.height * i.aspectRatio,
            u = !1));
            u || (i.position.left = i.prevPosition.left,
            i.position.top = i.prevPosition.top,
            i.size.width = i.prevSize.width,
            i.size.height = i.prevSize.height)
        },
        stop: function() {
            var t = n(this).resizable("instance")
              , r = t.options
              , u = t.containerOffset
              , f = t.containerPosition
              , e = t.containerElement
              , i = n(t.helper)
              , o = i.offset()
              , s = i.outerWidth() - t.sizeDiff.width
              , h = i.outerHeight() - t.sizeDiff.height;
            t._helper && !r.animate && /relative/.test(e.css("position")) && n(this).css({
                left: o.left - f.left - u.left,
                width: s,
                height: h
            });
            t._helper && !r.animate && /static/.test(e.css("position")) && n(this).css({
                left: o.left - f.left - u.left,
                width: s,
                height: h
            })
        }
    });
    n.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = n(this).resizable("instance")
              , i = t.options;
            n(i.alsoResize).each(function() {
                var t = n(this);
                t.data("ui-resizable-alsoresize", {
                    width: parseFloat(t.width()),
                    height: parseFloat(t.height()),
                    left: parseFloat(t.css("left")),
                    top: parseFloat(t.css("top"))
                })
            })
        },
        resize: function(t, i) {
            var r = n(this).resizable("instance")
              , e = r.options
              , u = r.originalSize
              , f = r.originalPosition
              , o = {
                height: r.size.height - u.height || 0,
                width: r.size.width - u.width || 0,
                top: r.position.top - f.top || 0,
                left: r.position.left - f.left || 0
            };
            n(e.alsoResize).each(function() {
                var t = n(this)
                  , u = n(this).data("ui-resizable-alsoresize")
                  , r = {}
                  , f = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                n.each(f, function(n, t) {
                    var i = (u[t] || 0) + (o[t] || 0);
                    i && i >= 0 && (r[t] = i || null)
                });
                t.css(r)
            })
        },
        stop: function() {
            n(this).removeData("ui-resizable-alsoresize")
        }
    });
    n.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = n(this).resizable("instance")
              , i = t.size;
            t.ghost = t.originalElement.clone();
            t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            });
            t._addClass(t.ghost, "ui-resizable-ghost");
            n.uiBackCompat !== !1 && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost);
            t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = n(this).resizable("instance");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = n(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    });
    n.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var h, t = n(this).resizable("instance"), i = t.options, y = t.size, o = t.originalSize, s = t.originalPosition, c = t.axis, l = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid, f = l[0] || 1, e = l[1] || 1, a = Math.round((y.width - o.width) / f) * f, v = Math.round((y.height - o.height) / e) * e, r = o.width + a, u = o.height + v, p = i.maxWidth && r > i.maxWidth, w = i.maxHeight && u > i.maxHeight, b = i.minWidth && i.minWidth > r, k = i.minHeight && i.minHeight > u;
            i.grid = l;
            b && (r += f);
            k && (u += e);
            p && (r -= f);
            w && (u -= e);
            /^(se|s|e)$/.test(c) ? (t.size.width = r,
            t.size.height = u) : /^(ne)$/.test(c) ? (t.size.width = r,
            t.size.height = u,
            t.position.top = s.top - v) : /^(sw)$/.test(c) ? (t.size.width = r,
            t.size.height = u,
            t.position.left = s.left - a) : ((0 >= u - e || 0 >= r - f) && (h = t._getPaddingPlusBorderDimensions(this)),
            u - e > 0 ? (t.size.height = u,
            t.position.top = s.top - v) : (u = e - h.height,
            t.size.height = u,
            t.position.top = s.top + o.height - u),
            r - f > 0 ? (t.size.width = r,
            t.position.left = s.left - a) : (r = f - h.width,
            t.size.width = r,
            t.position.left = s.left + o.width - r))
        }
    });
    n.ui.resizable;
    n.widget("ui.selectable", n.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var t = this;
            this._addClass("ui-selectable");
            this.dragged = !1;
            this.refresh = function() {
                t.elementPos = n(t.element[0]).offset();
                t.selectees = n(t.options.filter, t.element[0]);
                t._addClass(t.selectees, "ui-selectee");
                t.selectees.each(function() {
                    var i = n(this)
                      , u = i.offset()
                      , r = {
                        left: u.left - t.elementPos.left,
                        top: u.top - t.elementPos.top
                    };
                    n.data(this, "selectable-item", {
                        element: this,
                        $element: i,
                        left: r.left,
                        top: r.top,
                        right: r.left + i.outerWidth(),
                        bottom: r.top + i.outerHeight(),
                        startselected: !1,
                        selected: i.hasClass("ui-selected"),
                        selecting: i.hasClass("ui-selecting"),
                        unselecting: i.hasClass("ui-unselecting")
                    })
                })
            }
            ;
            this.refresh();
            this._mouseInit();
            this.helper = n("<div>");
            this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item");
            this._mouseDestroy()
        },
        _mouseStart: function(t) {
            var i = this
              , r = this.options;
            this.opos = [t.pageX, t.pageY];
            this.elementPos = n(this.element[0]).offset();
            this.options.disabled || (this.selectees = n(r.filter, this.element[0]),
            this._trigger("start", t),
            n(r.appendTo).append(this.helper),
            this.helper.css({
                left: t.pageX,
                top: t.pageY,
                width: 0,
                height: 0
            }),
            r.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each(function() {
                var r = n.data(this, "selectable-item");
                r.startselected = !0;
                t.metaKey || t.ctrlKey || (i._removeClass(r.$element, "ui-selected"),
                r.selected = !1,
                i._addClass(r.$element, "ui-unselecting"),
                r.unselecting = !0,
                i._trigger("unselecting", t, {
                    unselecting: r.element
                }))
            }),
            n(t.target).parents().addBack().each(function() {
                var u, r = n.data(this, "selectable-item");
                if (r)
                    return (u = !t.metaKey && !t.ctrlKey || !r.$element.hasClass("ui-selected"),
                    i._removeClass(r.$element, u ? "ui-unselecting" : "ui-selected")._addClass(r.$element, u ? "ui-selecting" : "ui-unselecting"),
                    r.unselecting = !u,
                    r.selecting = u,
                    r.selected = u,
                    u ? i._trigger("selecting", t, {
                        selecting: r.element
                    }) : i._trigger("unselecting", t, {
                        unselecting: r.element
                    }),
                    !1)
            }))
        },
        _mouseDrag: function(t) {
            if (this.dragged = !0,
            !this.options.disabled) {
                var o, i = this, s = this.options, r = this.opos[0], u = this.opos[1], f = t.pageX, e = t.pageY;
                return r > f && (o = f,
                f = r,
                r = o),
                u > e && (o = e,
                e = u,
                u = o),
                this.helper.css({
                    left: r,
                    top: u,
                    width: f - r,
                    height: e - u
                }),
                this.selectees.each(function() {
                    var o = n.data(this, "selectable-item")
                      , c = !1
                      , h = {};
                    o && o.element !== i.element[0] && (h.left = o.left + i.elementPos.left,
                    h.right = o.right + i.elementPos.left,
                    h.top = o.top + i.elementPos.top,
                    h.bottom = o.bottom + i.elementPos.top,
                    "touch" === s.tolerance ? c = !(h.left > f || r > h.right || h.top > e || u > h.bottom) : "fit" === s.tolerance && (c = h.left > r && f > h.right && h.top > u && e > h.bottom),
                    c ? (o.selected && (i._removeClass(o.$element, "ui-selected"),
                    o.selected = !1),
                    o.unselecting && (i._removeClass(o.$element, "ui-unselecting"),
                    o.unselecting = !1),
                    o.selecting || (i._addClass(o.$element, "ui-selecting"),
                    o.selecting = !0,
                    i._trigger("selecting", t, {
                        selecting: o.element
                    }))) : (o.selecting && ((t.metaKey || t.ctrlKey) && o.startselected ? (i._removeClass(o.$element, "ui-selecting"),
                    o.selecting = !1,
                    i._addClass(o.$element, "ui-selected"),
                    o.selected = !0) : (i._removeClass(o.$element, "ui-selecting"),
                    o.selecting = !1,
                    o.startselected && (i._addClass(o.$element, "ui-unselecting"),
                    o.unselecting = !0),
                    i._trigger("unselecting", t, {
                        unselecting: o.element
                    }))),
                    o.selected && (t.metaKey || t.ctrlKey || o.startselected || (i._removeClass(o.$element, "ui-selected"),
                    o.selected = !1,
                    i._addClass(o.$element, "ui-unselecting"),
                    o.unselecting = !0,
                    i._trigger("unselecting", t, {
                        unselecting: o.element
                    })))))
                }),
                !1
            }
        },
        _mouseStop: function(t) {
            var i = this;
            return this.dragged = !1,
            n(".ui-unselecting", this.element[0]).each(function() {
                var r = n.data(this, "selectable-item");
                i._removeClass(r.$element, "ui-unselecting");
                r.unselecting = !1;
                r.startselected = !1;
                i._trigger("unselected", t, {
                    unselected: r.element
                })
            }),
            n(".ui-selecting", this.element[0]).each(function() {
                var r = n.data(this, "selectable-item");
                i._removeClass(r.$element, "ui-selecting")._addClass(r.$element, "ui-selected");
                r.selecting = !1;
                r.selected = !0;
                r.startselected = !0;
                i._trigger("selected", t, {
                    selected: r.element
                })
            }),
            this._trigger("stop", t),
            this.helper.remove(),
            !1
        }
    });
    n.widget("ui.sortable", n.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(n, t, i) {
            return n >= t && t + i > n
        },
        _isFloating: function(n) {
            return /left|right/.test(n.css("float")) || /inline|table-cell/.test(n.css("display"))
        },
        _create: function() {
            this.containerCache = {};
            this._addClass("ui-sortable");
            this.refresh();
            this.offset = this.element.offset();
            this._mouseInit();
            this._setHandleClassName();
            this.ready = !0
        },
        _setOption: function(n, t) {
            this._super(n, t);
            "handle" === n && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            var t = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle");
            n.each(this.items, function() {
                t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            })
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var n = this.items.length - 1; n >= 0; n--)
                this.items[n].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(t, i) {
            var r = null
              , f = !1
              , u = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t),
            n(t.target).parents().each(function() {
                if (n.data(this, u.widgetName + "-item") === u)
                    return (r = n(this),
                    !1)
            }),
            n.data(t.target, u.widgetName + "-item") === u && (r = n(t.target)),
            r ? !this.options.handle || i || (n(this.options.handle, r).find("*").addBack().each(function() {
                this === t.target && (f = !0)
            }),
            f) ? (this.currentItem = r,
            this._removeCurrentsFromItems(),
            !0) : !1 : !1)
        },
        _mouseStart: function(t, i, r) {
            var f, e, u = this.options;
            if (this.currentContainer = this,
            this.refreshPositions(),
            this.helper = this._createHelper(t),
            this._cacheHelperProportions(),
            this._cacheMargins(),
            this.scrollParent = this.helper.scrollParent(),
            this.offset = this.currentItem.offset(),
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            },
            n.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }),
            this.helper.css("position", "absolute"),
            this.cssPosition = this.helper.css("position"),
            this.originalPosition = this._generatePosition(t),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            u.cursorAt && this._adjustOffsetFromHelper(u.cursorAt),
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            },
            this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
            this._createPlaceholder(),
            u.containment && this._setContainment(),
            u.cursor && "auto" !== u.cursor && (e = this.document.find("body"),
            this.storedCursor = e.css("cursor"),
            e.css("cursor", u.cursor),
            this.storedStylesheet = n("<style>*{ cursor: " + u.cursor + " !important; }<\/style>").appendTo(e)),
            u.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", u.opacity)),
            u.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", u.zIndex)),
            this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
            this._trigger("start", t, this._uiHash()),
            this._preserveHelperProportions || this._cacheHelperProportions(),
            !r)
                for (f = this.containers.length - 1; f >= 0; f--)
                    this.containers[f]._trigger("activate", t, this._uiHash(this));
            return n.ui.ddmanager && (n.ui.ddmanager.current = this),
            n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t),
            this.dragging = !0,
            this._addClass(this.helper, "ui-sortable-helper"),
            this._mouseDrag(t),
            !0
        },
        _mouseDrag: function(t) {
            var e, u, f, o, i = this.options, r = !1;
            for (this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - i.scrollSpeed),
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - this.document.scrollTop() < i.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - i.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < i.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + i.scrollSpeed)),
            t.pageX - this.document.scrollLeft() < i.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - i.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < i.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + i.scrollSpeed))),
            r !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t)),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
            e = this.items.length - 1; e >= 0; e--)
                if (u = this.items[e],
                f = u.item[0],
                o = this._intersectsWithPointer(u),
                o && u.instance === this.currentContainer && f !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== f && !n.contains(this.placeholder[0], f) && ("semi-dynamic" === this.options.type ? !n.contains(this.element[0], f) : !0)) {
                    if (this.direction = 1 === o ? "down" : "up",
                    "pointer" !== this.options.tolerance && !this._intersectsWithSides(u))
                        break;
                    this._rearrange(t, u);
                    this._trigger("change", t, this._uiHash());
                    break
                }
            return this._contactContainers(t),
            n.ui.ddmanager && n.ui.ddmanager.drag(this, t),
            this._trigger("sort", t, this._uiHash()),
            this.lastPositionAbs = this.positionAbs,
            !1
        },
        _mouseStop: function(t, i) {
            if (t) {
                if (n.ui.ddmanager && !this.options.dropBehaviour && n.ui.ddmanager.drop(this, t),
                this.options.revert) {
                    var e = this
                      , f = this.placeholder.offset()
                      , r = this.options.axis
                      , u = {};
                    r && "x" !== r || (u.left = f.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft));
                    r && "y" !== r || (u.top = f.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop));
                    this.reverting = !0;
                    n(this.helper).animate(u, parseInt(this.options.revert, 10) || 500, function() {
                        e._clear(t)
                    })
                } else
                    this._clear(t, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new n.Event("mouseup",{
                    target: null
                }));
                "original" === this.options.helper ? (this.currentItem.css(this._storedCSS),
                this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--)
                    this.containers[t]._trigger("deactivate", null, this._uiHash(this)),
                    this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)),
                    this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
            n.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }),
            this.domPosition.prev ? n(this.domPosition.prev).after(this.currentItem) : n(this.domPosition.parent).prepend(this.currentItem)),
            this
        },
        serialize: function(t) {
            var r = this._getItemsAsjQuery(t && t.connected)
              , i = [];
            return t = t || {},
            n(r).each(function() {
                var r = (n(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                r && i.push((t.key || r[1] + "[]") + "=" + (t.key && t.expression ? r[1] : r[2]))
            }),
            !i.length && t.key && i.push(t.key + "="),
            i.join("&")
        },
        toArray: function(t) {
            var r = this._getItemsAsjQuery(t && t.connected)
              , i = [];
            return t = t || {},
            r.each(function() {
                i.push(n(t.item || this).attr(t.attribute || "id") || "")
            }),
            i
        },
        _intersectsWith: function(n) {
            var t = this.positionAbs.left
              , h = t + this.helperProportions.width
              , i = this.positionAbs.top
              , c = i + this.helperProportions.height
              , r = n.left
              , f = r + n.width
              , u = n.top
              , e = u + n.height
              , o = this.offset.click.top
              , s = this.offset.click.left
              , l = "x" === this.options.axis || i + o > u && e > i + o
              , a = "y" === this.options.axis || t + s > r && f > t + s
              , v = l && a;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > n[this.floating ? "width" : "height"] ? v : t + this.helperProportions.width / 2 > r && f > h - this.helperProportions.width / 2 && i + this.helperProportions.height / 2 > u && e > c - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(n) {
            var t, i, r = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, n.top, n.height), u = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, n.left, n.width), f = r && u;
            return f ? (t = this._getDragVerticalDirection(),
            i = this._getDragHorizontalDirection(),
            this.floating ? "right" === i || "down" === t ? 2 : 1 : t && ("down" === t ? 2 : 1)) : !1
        },
        _intersectsWithSides: function(n) {
            var r = this._isOverAxis(this.positionAbs.top + this.offset.click.top, n.top + n.height / 2, n.height)
              , u = this._isOverAxis(this.positionAbs.left + this.offset.click.left, n.left + n.width / 2, n.width)
              , t = this._getDragVerticalDirection()
              , i = this._getDragHorizontalDirection();
            return this.floating && i ? "right" === i && u || "left" === i && !u : t && ("down" === t && r || "up" === t && !r)
        },
        _getDragVerticalDirection: function() {
            var n = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== n && (n > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var n = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== n && (n > 0 ? "right" : "left")
        },
        refresh: function(n) {
            return this._refreshItems(n),
            this._setHandleClassName(),
            this.refreshPositions(),
            this
        },
        _connectWith: function() {
            var n = this.options;
            return n.connectWith.constructor === String ? [n.connectWith] : n.connectWith
        },
        _getItemsAsjQuery: function(t) {
            function h() {
                s.push(this)
            }
            var r, u, e, i, s = [], f = [], o = this._connectWith();
            if (o && t)
                for (r = o.length - 1; r >= 0; r--)
                    for (e = n(o[r], this.document[0]),
                    u = e.length - 1; u >= 0; u--)
                        i = n.data(e[u], this.widgetFullName),
                        i && i !== this && !i.options.disabled && f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element) : n(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i]);
            for (f.push([n.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : n(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]),
            r = f.length - 1; r >= 0; r--)
                f[r][0].each(h);
            return n(s)
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = n.grep(this.items, function(n) {
                for (var i = 0; t.length > i; i++)
                    if (t[i] === n.item[0])
                        return !1;
                return !0
            })
        },
        _refreshItems: function(t) {
            this.items = [];
            this.containers = [this];
            var r, u, e, i, o, s, h, l, a = this.items, f = [[n.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                item: this.currentItem
            }) : n(this.options.items, this.element), this]], c = this._connectWith();
            if (c && this.ready)
                for (r = c.length - 1; r >= 0; r--)
                    for (e = n(c[r], this.document[0]),
                    u = e.length - 1; u >= 0; u--)
                        i = n.data(e[u], this.widgetFullName),
                        i && i !== this && !i.options.disabled && (f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element[0], t, {
                            item: this.currentItem
                        }) : n(i.options.items, i.element), i]),
                        this.containers.push(i));
            for (r = f.length - 1; r >= 0; r--)
                for (o = f[r][1],
                s = f[r][0],
                u = 0,
                l = s.length; l > u; u++)
                    h = n(s[u]),
                    h.data(this.widgetName + "-item", o),
                    a.push({
                        item: h,
                        instance: o,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
        },
        refreshPositions: function(t) {
            this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1;
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var r, f, u, i = this.items.length - 1; i >= 0; i--)
                r = this.items[i],
                r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0] || (f = this.options.toleranceElement ? n(this.options.toleranceElement, r.item) : r.item,
                t || (r.width = f.outerWidth(),
                r.height = f.outerHeight()),
                u = f.offset(),
                r.left = u.left,
                r.top = u.top);
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--)
                    u = this.containers[i].element.offset(),
                    this.containers[i].containerCache.left = u.left,
                    this.containers[i].containerCache.top = u.top,
                    this.containers[i].containerCache.width = this.containers[i].element.outerWidth(),
                    this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(t) {
            t = t || this;
            var r, i = t.options;
            i.placeholder && i.placeholder.constructor !== String || (r = i.placeholder,
            i.placeholder = {
                element: function() {
                    var u = t.currentItem[0].nodeName.toLowerCase()
                      , i = n("<" + u + ">", t.document[0]);
                    return t._addClass(i, "ui-sortable-placeholder", r || t.currentItem[0].className)._removeClass(i, "ui-sortable-helper"),
                    "tbody" === u ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), n("<tr>", t.document[0]).appendTo(i)) : "tr" === u ? t._createTrPlaceholder(t.currentItem, i) : "img" === u && i.attr("src", t.currentItem.attr("src")),
                    r || i.css("visibility", "hidden"),
                    i
                },
                update: function(n, u) {
                    (!r || i.forcePlaceholderSize) && (u.height() || u.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)),
                    u.width() || u.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                }
            });
            t.placeholder = n(i.placeholder.element.call(t.element, t.currentItem));
            t.currentItem.after(t.placeholder);
            i.placeholder.update(t, t.placeholder)
        },
        _createTrPlaceholder: function(t, i) {
            var r = this;
            t.children().each(function() {
                n("<td>&#160;<\/td>", r.document[0]).attr("colspan", n(this).attr("colspan") || 1).appendTo(i)
            })
        },
        _contactContainers: function(t) {
            for (var u, c, f, a, v, o, l, s, h, e = null, i = null, r = this.containers.length - 1; r >= 0; r--)
                if (!n.contains(this.currentItem[0], this.containers[r].element[0]))
                    if (this._intersectsWith(this.containers[r].containerCache)) {
                        if (e && n.contains(this.containers[r].element[0], e.element[0]))
                            continue;
                        e = this.containers[r];
                        i = r
                    } else
                        this.containers[r].containerCache.over && (this.containers[r]._trigger("out", t, this._uiHash(this)),
                        this.containers[r].containerCache.over = 0);
            if (e)
                if (1 === this.containers.length)
                    this.containers[i].containerCache.over || (this.containers[i]._trigger("over", t, this._uiHash(this)),
                    this.containers[i].containerCache.over = 1);
                else {
                    for (c = 1e4,
                    f = null,
                    s = e.floating || this._isFloating(this.currentItem),
                    a = s ? "left" : "top",
                    v = s ? "width" : "height",
                    h = s ? "pageX" : "pageY",
                    u = this.items.length - 1; u >= 0; u--)
                        n.contains(this.containers[i].element[0], this.items[u].item[0]) && this.items[u].item[0] !== this.currentItem[0] && (o = this.items[u].item.offset()[a],
                        l = !1,
                        t[h] - o > this.items[u][v] / 2 && (l = !0),
                        c > Math.abs(t[h] - o) && (c = Math.abs(t[h] - o),
                        f = this.items[u],
                        this.direction = l ? "up" : "down"));
                    if (!f && !this.options.dropOnEmpty)
                        return;
                    if (this.currentContainer === this.containers[i])
                        return this.currentContainer.containerCache.over || (this.containers[i]._trigger("over", t, this._uiHash()),
                        this.currentContainer.containerCache.over = 1),
                        void 0;
                    f ? this._rearrange(t, f, null, !0) : this._rearrange(t, null, this.containers[i].element, !0);
                    this._trigger("change", t, this._uiHash());
                    this.containers[i]._trigger("change", t, this._uiHash(this));
                    this.currentContainer = this.containers[i];
                    this.options.placeholder.update(this.currentContainer, this.placeholder);
                    this.containers[i]._trigger("over", t, this._uiHash(this));
                    this.containers[i].containerCache.over = 1
                }
        },
        _createHelper: function(t) {
            var r = this.options
              , i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === r.helper ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || n("parent" !== r.appendTo ? r.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]),
            i[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }),
            (!i[0].style.width || r.forceHelperSize) && i.width(this.currentItem.width()),
            (!i[0].style.height || r.forceHelperSize) && i.height(this.currentItem.height()),
            i
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" "));
            n.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            });
            "left"in t && (this.offset.click.left = t.left + this.margins.left);
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
            "top"in t && (this.offset.click.top = t.top + this.margins.top);
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop()),
            (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && n.ui.ie) && (t = {
                top: 0,
                left: 0
            }),
            {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var n = this.currentItem.position();
                return {
                    top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, r, u, i = this.options;
            "parent" === i.containment && (i.containment = this.helper[0].parentNode);
            ("document" === i.containment || "window" === i.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === i.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === i.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]);
            /^(document|window|parent)$/.test(i.containment) || (t = n(i.containment)[0],
            r = n(i.containment).offset(),
            u = "hidden" !== n(t).css("overflow"),
            this.containment = [r.left + (parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(t, i) {
            i || (i = this.position);
            var r = "absolute" === t ? 1 : -1
              , u = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent
              , f = /(html|body)/i.test(u[0].tagName);
            return {
                top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r,
                left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r
            }
        },
        _generatePosition: function(t) {
            var r, u, i = this.options, f = t.pageX, e = t.pageY, o = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && n.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, s = /(html|body)/i.test(o[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
            this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < this.containment[1] && (e = this.containment[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > this.containment[3] && (e = this.containment[3] + this.offset.click.top)),
            i.grid && (r = this.originalPageY + Math.round((e - this.originalPageY) / i.grid[1]) * i.grid[1],
            e = this.containment ? r - this.offset.click.top >= this.containment[1] && r - this.offset.click.top <= this.containment[3] ? r : r - this.offset.click.top >= this.containment[1] ? r - i.grid[1] : r + i.grid[1] : r,
            u = this.originalPageX + Math.round((f - this.originalPageX) / i.grid[0]) * i.grid[0],
            f = this.containment ? u - this.offset.click.left >= this.containment[0] && u - this.offset.click.left <= this.containment[2] ? u : u - this.offset.click.left >= this.containment[0] ? u - i.grid[0] : u + i.grid[0] : u)),
            {
                top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft())
            }
        },
        _rearrange: function(n, t, i, r) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling);
            this.counter = this.counter ? ++this.counter : 1;
            var u = this.counter;
            this._delay(function() {
                u === this.counter && this.refreshPositions(!r)
            })
        },
        _clear: function(n, t) {
            function u(n, t, i) {
                return function(r) {
                    i._trigger(n, r, t._uiHash(t))
                }
            }
            this.reverting = !1;
            var i, r = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem),
            this._noFinalSort = null,
            this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS)
                    ("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS);
                this._removeClass(this.currentItem, "ui-sortable-helper")
            } else
                this.currentItem.show();
            for (this.fromOutside && !t && r.push(function(n) {
                this._trigger("receive", n, this._uiHash(this.fromOutside))
            }),
            !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || r.push(function(n) {
                this._trigger("update", n, this._uiHash())
            }),
            this !== this.currentContainer && (t || (r.push(function(n) {
                this._trigger("remove", n, this._uiHash())
            }),
            r.push(function(n) {
                return function(t) {
                    n._trigger("receive", t, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)),
            r.push(function(n) {
                return function(t) {
                    n._trigger("update", t, this._uiHash(this))
                }
            }
            .call(this, this.currentContainer)))),
            i = this.containers.length - 1; i >= 0; i--)
                t || r.push(u("deactivate", this, this.containers[i])),
                this.containers[i].containerCache.over && (r.push(u("out", this, this.containers[i])),
                this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor),
            this.storedStylesheet.remove()),
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity),
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex),
            this.dragging = !1,
            t || this._trigger("beforeStop", n, this._uiHash()),
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(),
            this.helper = null),
            !t) {
                for (i = 0; r.length > i; i++)
                    r[i].call(this, n);
                this._trigger("stop", n, this._uiHash())
            }
            return this.fromOutside = !1,
            !this.cancelHelperRemoval
        },
        _trigger: function() {
            n.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || n([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element : null
            }
        }
    });
    n.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var t = this.options;
            this.prevShow = this.prevHide = n();
            this._addClass("ui-accordion", "ui-widget ui-helper-reset");
            this.element.attr("role", "tablist");
            t.collapsible || t.active !== !1 && null != t.active || (t.active = 0);
            this._processPanels();
            0 > t.active && (t.active += this.headers.length);
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : n()
            }
        },
        _createIcons: function() {
            var i, r, t = this.options.icons;
            t && (i = n("<span>"),
            this._addClass(i, "ui-accordion-header-icon", "ui-icon " + t.header),
            i.prependTo(this.headers),
            r = this.active.children(".ui-accordion-header-icon"),
            this._removeClass(r, t.header)._addClass(r, null, t.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, "ui-accordion-icons");
            this.headers.children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var n;
            this.element.removeAttr("role");
            this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId();
            this._destroyIcons();
            n = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId();
            "content" !== this.options.heightStyle && n.css("height", "")
        },
        _setOption: function(n, t) {
            return "active" === n ? (this._activate(t),
            void 0) : ("event" === n && (this.options.event && this._off(this.headers, this.options.event),
            this._setupEvents(t)),
            this._super(n, t),
            "collapsible" !== n || t || this.options.active !== !1 || this._activate(0),
            "icons" === n && (this._destroyIcons(),
            t && this._createIcons()),
            void 0)
        },
        _setOptionDisabled: function(n) {
            this._super(n);
            this.element.attr("aria-disabled", n);
            this._toggleClass(null, "ui-state-disabled", !!n);
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!n)
        },
        _keydown: function(t) {
            if (!t.altKey && !t.ctrlKey) {
                var i = n.ui.keyCode
                  , u = this.headers.length
                  , f = this.headers.index(t.target)
                  , r = !1;
                switch (t.keyCode) {
                case i.RIGHT:
                case i.DOWN:
                    r = this.headers[(f + 1) % u];
                    break;
                case i.LEFT:
                case i.UP:
                    r = this.headers[(f - 1 + u) % u];
                    break;
                case i.SPACE:
                case i.ENTER:
                    this._eventHandler(t);
                    break;
                case i.HOME:
                    r = this.headers[0];
                    break;
                case i.END:
                    r = this.headers[u - 1]
                }
                r && (n(t.target).attr("tabIndex", -1),
                n(r).attr("tabIndex", 0),
                n(r).trigger("focus"),
                t.preventDefault())
            }
        },
        _panelKeyDown: function(t) {
            t.keyCode === n.ui.keyCode.UP && t.ctrlKey && n(t.currentTarget).prev().trigger("focus")
        },
        refresh: function() {
            var t = this.options;
            this._processPanels();
            t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1,
            this.active = n()) : t.active === !1 ? this._activate(0) : this.active.length && !n.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1,
            this.active = n()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active);
            this._destroyIcons();
            this._refresh()
        },
        _processPanels: function() {
            var t = this.headers
              , n = this.panels;
            this.headers = this.element.find(this.options.header);
            this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default");
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide();
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content");
            n && (this._off(t.not(this.headers)),
            this._off(n.not(this.panels)))
        },
        _refresh: function() {
            var t, i = this.options, r = i.heightStyle, u = this.element.parent();
            this.active = this._findActive(i.active);
            this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed");
            this._addClass(this.active.next(), "ui-accordion-content-active");
            this.active.next().show();
            this.headers.attr("role", "tab").each(function() {
                var t = n(this)
                  , r = t.uniqueId().attr("id")
                  , i = t.next()
                  , u = i.uniqueId().attr("id");
                t.attr("aria-controls", u);
                i.attr("aria-labelledby", r)
            }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide();
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0);
            this._createIcons();
            this._setupEvents(i.event);
            "fill" === r ? (t = u.height(),
            this.element.siblings(":visible").each(function() {
                var i = n(this)
                  , r = i.css("position");
                "absolute" !== r && "fixed" !== r && (t -= i.outerHeight(!0))
            }),
            this.headers.each(function() {
                t -= n(this).outerHeight(!0)
            }),
            this.headers.next().each(function() {
                n(this).height(Math.max(0, t - n(this).innerHeight() + n(this).height()))
            }).css("overflow", "auto")) : "auto" === r && (t = 0,
            this.headers.next().each(function() {
                var i = n(this).is(":visible");
                i || n(this).show();
                t = Math.max(t, n(this).css("height", "").height());
                i || n(this).hide()
            }).height(t))
        },
        _activate: function(t) {
            var i = this._findActive(t)[0];
            i !== this.active[0] && (i = i || this.active[0],
            this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: n.noop
            }))
        },
        _findActive: function(t) {
            return "number" == typeof t ? this.headers.eq(t) : n()
        },
        _setupEvents: function(t) {
            var i = {
                keydown: "_keydown"
            };
            t && n.each(t.split(" "), function(n, t) {
                i[t] = "_eventHandler"
            });
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, i);
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            });
            this._hoverable(this.headers);
            this._focusable(this.headers)
        },
        _eventHandler: function(t) {
            var e, o, i = this.options, u = this.active, r = n(t.currentTarget), f = r[0] === u[0], s = f && i.collapsible, c = s ? n() : r.next(), l = u.next(), h = {
                oldHeader: u,
                oldPanel: l,
                newHeader: s ? n() : r,
                newPanel: c
            };
            t.preventDefault();
            f && !i.collapsible || this._trigger("beforeActivate", t, h) === !1 || (i.active = s ? !1 : this.headers.index(r),
            this.active = f ? n() : r,
            this._toggle(h),
            this._removeClass(u, "ui-accordion-header-active", "ui-state-active"),
            i.icons && (e = u.children(".ui-accordion-header-icon"),
            this._removeClass(e, null, i.icons.activeHeader)._addClass(e, null, i.icons.header)),
            f || (this._removeClass(r, "ui-accordion-header-collapsed")._addClass(r, "ui-accordion-header-active", "ui-state-active"),
            i.icons && (o = r.children(".ui-accordion-header-icon"),
            this._removeClass(o, null, i.icons.header)._addClass(o, null, i.icons.activeHeader)),
            this._addClass(r.next(), "ui-accordion-content-active")))
        },
        _toggle: function(t) {
            var r = t.newPanel
              , i = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0);
            this.prevShow = r;
            this.prevHide = i;
            this.options.animate ? this._animate(r, i, t) : (i.hide(),
            r.show(),
            this._toggleComplete(t));
            i.attr({
                "aria-hidden": "true"
            });
            i.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            r.length && i.length ? i.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : r.length && this.headers.filter(function() {
                return 0 === parseInt(n(this).attr("tabIndex"), 10)
            }).attr("tabIndex", -1);
            r.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function(n, t, i) {
            var h, r, u, c = this, o = 0, l = n.css("box-sizing"), a = n.length && (!t.length || n.index() < t.index()), e = this.options.animate || {}, f = a && e.down || e, s = function() {
                c._toggleComplete(i)
            };
            return "number" == typeof f && (u = f),
            "string" == typeof f && (r = f),
            r = r || f.easing || e.easing,
            u = u || f.duration || e.duration,
            t.length ? n.length ? (h = n.show().outerHeight(),
            t.animate(this.hideProps, {
                duration: u,
                easing: r,
                step: function(n, t) {
                    t.now = Math.round(n)
                }
            }),
            n.hide().animate(this.showProps, {
                duration: u,
                easing: r,
                complete: s,
                step: function(n, i) {
                    i.now = Math.round(n);
                    "height" !== i.prop ? "content-box" === l && (o += i.now) : "content" !== c.options.heightStyle && (i.now = Math.round(h - t.outerHeight() - o),
                    o = 0)
                }
            }),
            void 0) : t.animate(this.hideProps, u, r, s) : n.animate(this.showProps, u, r, s)
        },
        _toggleComplete: function(n) {
            var t = n.oldPanel
              , i = t.prev();
            this._removeClass(t, "ui-accordion-content-active");
            this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed");
            t.length && (t.parent()[0].className = t.parent()[0].className);
            this._trigger("activate", null, n)
        }
    });
    n.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element;
            this.mouseHandled = !1;
            this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            });
            this._addClass("ui-menu", "ui-widget ui-widget-content");
            this._on({
                "mousedown .ui-menu-item": function(n) {
                    n.preventDefault()
                },
                "click .ui-menu-item": function(t) {
                    var i = n(t.target)
                      , r = n(n.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t),
                    t.isPropagationStopped() || (this.mouseHandled = !0),
                    i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && r.closest(".ui-menu").length && (this.element.trigger("focus", [!0]),
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(t) {
                    if (!this.previousFilter) {
                        var r = n(t.target).closest(".ui-menu-item")
                          , i = n(t.currentTarget);
                        r[0] === i[0] && (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"),
                        this.focus(t, i))
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(n, t) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    t || this.focus(n, i)
                },
                blur: function(t) {
                    this._delay(function() {
                        var i = !n.contains(this.element[0], n.ui.safeActiveElement(this.document[0]));
                        i && this.collapseAll(t)
                    })
                },
                keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function(n) {
                    this._closeOnDocumentClick(n) && this.collapseAll(n);
                    this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled")
              , i = t.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show();
            i.children().each(function() {
                var t = n(this);
                t.data("ui-menu-submenu-caret") && t.remove()
            })
        },
        _keydown: function(t) {
            var i, u, r, f, e = !0;
            switch (t.keyCode) {
            case n.ui.keyCode.PAGE_UP:
                this.previousPage(t);
                break;
            case n.ui.keyCode.PAGE_DOWN:
                this.nextPage(t);
                break;
            case n.ui.keyCode.HOME:
                this._move("first", "first", t);
                break;
            case n.ui.keyCode.END:
                this._move("last", "last", t);
                break;
            case n.ui.keyCode.UP:
                this.previous(t);
                break;
            case n.ui.keyCode.DOWN:
                this.next(t);
                break;
            case n.ui.keyCode.LEFT:
                this.collapse(t);
                break;
            case n.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                break;
            case n.ui.keyCode.ENTER:
            case n.ui.keyCode.SPACE:
                this._activate(t);
                break;
            case n.ui.keyCode.ESCAPE:
                this.collapse(t);
                break;
            default:
                e = !1;
                u = this.previousFilter || "";
                f = !1;
                r = t.keyCode >= 96 && 105 >= t.keyCode ? "" + (t.keyCode - 96) : String.fromCharCode(t.keyCode);
                clearTimeout(this.filterTimer);
                r === u ? f = !0 : r = u + r;
                i = this._filterMenuItems(r);
                i = f && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i;
                i.length || (r = String.fromCharCode(t.keyCode),
                i = this._filterMenuItems(r));
                i.length ? (this.focus(t, i),
                this.previousFilter = r,
                this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter
            }
            e && t.preventDefault()
        },
        _activate: function(n) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(n) : this.select(n))
        },
        refresh: function() {
            var u, t, f, i, e, r = this, s = this.options.icons.submenu, o = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length);
            f = o.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var t = n(this)
                  , i = t.prev()
                  , u = n("<span>").data("ui-menu-submenu-caret", !0);
                r._addClass(u, "ui-menu-icon", "ui-icon " + s);
                i.attr("aria-haspopup", "true").prepend(u);
                t.attr("aria-labelledby", i.attr("id"))
            });
            this._addClass(f, "ui-menu", "ui-widget ui-widget-content ui-front");
            u = o.add(this.element);
            t = u.find(this.options.items);
            t.not(".ui-menu-item").each(function() {
                var t = n(this);
                r._isDivider(t) && r._addClass(t, "ui-menu-divider", "ui-widget-content")
            });
            i = t.not(".ui-menu-item, .ui-menu-divider");
            e = i.children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            this._addClass(i, "ui-menu-item")._addClass(e, "ui-menu-item-wrapper");
            t.filter(".ui-state-disabled").attr("aria-disabled", "true");
            this.active && !n.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(n, t) {
            if ("icons" === n) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, t.submenu)
            }
            this._super(n, t)
        },
        _setOptionDisabled: function(n) {
            this._super(n);
            this.element.attr("aria-disabled", n + "");
            this._toggleClass(null, "ui-state-disabled", !!n)
        },
        focus: function(n, t) {
            var i, r, u;
            this.blur(n, n && "focus" === n.type);
            this._scrollIntoView(t);
            this.active = t.first();
            r = this.active.children(".ui-menu-item-wrapper");
            this._addClass(r, null, "ui-state-active");
            this.options.role && this.element.attr("aria-activedescendant", r.attr("id"));
            u = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");
            this._addClass(u, null, "ui-state-active");
            n && "keydown" === n.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay);
            i = t.children(".ui-menu");
            i.length && n && /^mouse/.test(n.type) && this._startOpening(i);
            this.activeMenu = t.parent();
            this._trigger("focus", n, {
                item: t
            })
        },
        _scrollIntoView: function(t) {
            var e, o, i, r, u, f;
            this._hasScroll() && (e = parseFloat(n.css(this.activeMenu[0], "borderTopWidth")) || 0,
            o = parseFloat(n.css(this.activeMenu[0], "paddingTop")) || 0,
            i = t.offset().top - this.activeMenu.offset().top - e - o,
            r = this.activeMenu.scrollTop(),
            u = this.activeMenu.height(),
            f = t.outerHeight(),
            0 > i ? this.activeMenu.scrollTop(r + i) : i + f > u && this.activeMenu.scrollTop(r + i - u + f))
        },
        blur: function(n, t) {
            t || clearTimeout(this.timer);
            this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"),
            this._trigger("blur", n, {
                item: this.active
            }),
            this.active = null)
        },
        _startOpening: function(n) {
            clearTimeout(this.timer);
            "true" === n.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close();
                this._open(n)
            }, this.delay))
        },
        _open: function(t) {
            var i = n.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(t, i) {
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                var r = i ? this.element : n(t && t.target).closest(this.element.find(".ui-menu"));
                r.length || (r = this.element);
                this._close(r);
                this.blur(t);
                this._removeClass(r.find(".ui-state-active"), null, "ui-state-active");
                this.activeMenu = r
            }, this.delay)
        },
        _close: function(n) {
            n || (n = this.active ? this.active.parent() : this.element);
            n.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(t) {
            return !n(t.target).closest(".ui-menu").length
        },
        _isDivider: function(n) {
            return !/[^\-\u2014\u2013\s]/.test(n.text())
        },
        collapse: function(n) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(),
            this.focus(n, t))
        },
        expand: function(n) {
            var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            t && t.length && (this._open(t.parent()),
            this._delay(function() {
                this.focus(n, t)
            }))
        },
        next: function(n) {
            this._move("next", "first", n)
        },
        previous: function(n) {
            this._move("prev", "last", n)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(n, t, i) {
            var r;
            this.active && (r = "first" === n || "last" === n ? this.active["first" === n ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[n + "All"](".ui-menu-item").eq(0));
            r && r.length && this.active || (r = this.activeMenu.find(this.options.items)[t]());
            this.focus(i, r)
        },
        nextPage: function(t) {
            var i, r, u;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (r = this.active.offset().top,
            u = this.element.height(),
            this.active.nextAll(".ui-menu-item").each(function() {
                return i = n(this),
                0 > i.offset().top - r - u
            }),
            this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())),
            void 0) : (this.next(t),
            void 0)
        },
        previousPage: function(t) {
            var i, r, u;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (r = this.active.offset().top,
            u = this.element.height(),
            this.active.prevAll(".ui-menu-item").each(function() {
                return i = n(this),
                i.offset().top - r + u > 0
            }),
            this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())),
            void 0) : (this.next(t),
            void 0)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(t) {
            this.active = this.active || n(t.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0);
            this._trigger("select", t, i)
        },
        _filterMenuItems: function(t) {
            var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
              , r = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return r.test(n.trim(n(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    });
    n.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var t, i, r, u = this.element[0].nodeName.toLowerCase(), f = "textarea" === u, e = "input" === u;
            this.isMultiLine = f || !e && this._isContentEditable(this.element);
            this.valueMethod = this.element[f || e ? "val" : "text"];
            this.isNewMenu = !0;
            this._addClass("ui-autocomplete-input");
            this.element.attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function(u) {
                    if (this.element.prop("readOnly"))
                        return t = !0,
                        r = !0,
                        i = !0,
                        void 0;
                    t = !1;
                    r = !1;
                    i = !1;
                    var f = n.ui.keyCode;
                    switch (u.keyCode) {
                    case f.PAGE_UP:
                        t = !0;
                        this._move("previousPage", u);
                        break;
                    case f.PAGE_DOWN:
                        t = !0;
                        this._move("nextPage", u);
                        break;
                    case f.UP:
                        t = !0;
                        this._keyEvent("previous", u);
                        break;
                    case f.DOWN:
                        t = !0;
                        this._keyEvent("next", u);
                        break;
                    case f.ENTER:
                        this.menu.active && (t = !0,
                        u.preventDefault(),
                        this.menu.select(u));
                        break;
                    case f.TAB:
                        this.menu.active && this.menu.select(u);
                        break;
                    case f.ESCAPE:
                        this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term),
                        this.close(u),
                        u.preventDefault());
                        break;
                    default:
                        i = !0;
                        this._searchTimeout(u)
                    }
                },
                keypress: function(r) {
                    if (t)
                        return t = !1,
                        (!this.isMultiLine || this.menu.element.is(":visible")) && r.preventDefault(),
                        void 0;
                    if (!i) {
                        var u = n.ui.keyCode;
                        switch (r.keyCode) {
                        case u.PAGE_UP:
                            this._move("previousPage", r);
                            break;
                        case u.PAGE_DOWN:
                            this._move("nextPage", r);
                            break;
                        case u.UP:
                            this._keyEvent("previous", r);
                            break;
                        case u.DOWN:
                            this._keyEvent("next", r)
                        }
                    }
                },
                input: function(n) {
                    return r ? (r = !1,
                    n.preventDefault(),
                    void 0) : (this._searchTimeout(n),
                    void 0)
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value()
                },
                blur: function(n) {
                    return this.cancelBlur ? (delete this.cancelBlur,
                    void 0) : (clearTimeout(this.searching),
                    this.close(n),
                    this._change(n),
                    void 0)
                }
            });
            this._initSource();
            this.menu = n("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance");
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front");
            this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault();
                    this.cancelBlur = !0;
                    this._delay(function() {
                        delete this.cancelBlur;
                        this.element[0] !== n.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    })
                },
                menufocus: function(t, i) {
                    var r, u;
                    return this.isNewMenu && (this.isNewMenu = !1,
                    t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(),
                    this.document.one("mousemove", function() {
                        n(t.target).trigger(t.originalEvent)
                    }),
                    void 0) : (u = i.item.data("ui-autocomplete-item"),
                    !1 !== this._trigger("focus", t, {
                        item: u
                    }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(u.value),
                    r = i.item.attr("aria-label") || u.value,
                    r && n.trim(r).length && (this.liveRegion.children().hide(),
                    n("<div>").text(r).appendTo(this.liveRegion)),
                    void 0)
                },
                menuselect: function(t, i) {
                    var r = i.item.data("ui-autocomplete-item")
                      , u = this.previous;
                    this.element[0] !== n.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"),
                    this.previous = u,
                    this._delay(function() {
                        this.previous = u;
                        this.selectedItem = r
                    }));
                    !1 !== this._trigger("select", t, {
                        item: r
                    }) && this._value(r.value);
                    this.term = this._value();
                    this.close(t);
                    this.selectedItem = r
                }
            });
            this.liveRegion = n("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching);
            this.element.removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function(n, t) {
            this._super(n, t);
            "source" === n && this._initSource();
            "appendTo" === n && this.menu.element.appendTo(this._appendTo());
            "disabled" === n && t && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(t) {
            var i = this.menu.element[0];
            return t.target === this.element[0] || t.target === i || n.contains(i, t.target)
        },
        _closeOnClickOutside: function(n) {
            this._isEventTargetInWidget(n) || this.close()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)),
            t && t[0] || (t = this.element.closest(".ui-front, dialog")),
            t.length || (t = this.document[0].body),
            t
        },
        _initSource: function() {
            var i, r, t = this;
            n.isArray(this.options.source) ? (i = this.options.source,
            this.source = function(t, r) {
                r(n.ui.autocomplete.filter(i, t.term))
            }
            ) : "string" == typeof this.options.source ? (r = this.options.source,
            this.source = function(i, u) {
                t.xhr && t.xhr.abort();
                t.xhr = n.ajax({
                    url: r,
                    data: i,
                    dataType: "json",
                    success: function(n) {
                        u(n)
                    },
                    error: function() {
                        u([])
                    }
                })
            }
            ) : this.source = this.options.source
        },
        _searchTimeout: function(n) {
            clearTimeout(this.searching);
            this.searching = this._delay(function() {
                var t = this.term === this._value()
                  , i = this.menu.element.is(":visible")
                  , r = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
                t && (!t || i || r) || (this.selectedItem = null,
                this.search(null, n))
            }, this.options.delay)
        },
        search: function(n, t) {
            return n = null != n ? n : this._value(),
            this.term = this._value(),
            n.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(n) : void 0
        },
        _search: function(n) {
            this.pending++;
            this._addClass("ui-autocomplete-loading");
            this.cancelSearch = !1;
            this.source({
                term: n
            }, this._response())
        },
        _response: function() {
            var t = ++this.requestIndex;
            return n.proxy(function(n) {
                t === this.requestIndex && this.__response(n);
                this.pending--;
                this.pending || this._removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(n) {
            n && (n = this._normalize(n));
            this._trigger("response", null, {
                content: n
            });
            !this.options.disabled && n && n.length && !this.cancelSearch ? (this._suggest(n),
            this._trigger("open")) : this._close()
        },
        close: function(n) {
            this.cancelSearch = !0;
            this._close(n)
        },
        _close: function(n) {
            this._off(this.document, "mousedown");
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.blur(),
            this.isNewMenu = !0,
            this._trigger("close", n))
        },
        _change: function(n) {
            this.previous !== this._value() && this._trigger("change", n, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : n.map(t, function(t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : n.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                })
            })
        },
        _suggest: function(t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t);
            this.isNewMenu = !0;
            this.menu.refresh();
            i.show();
            this._resizeMenu();
            i.position(n.extend({
                of: this.element
            }, this.options.position));
            this.options.autoFocus && this.menu.next();
            this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var n = this.menu.element;
            n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, i) {
            var r = this;
            n.each(i, function(n, i) {
                r._renderItemData(t, i)
            })
        },
        _renderItemData: function(n, t) {
            return this._renderItem(n, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, i) {
            return n("<li>").append(n("<div>").text(i.label)).appendTo(t)
        },
        _move: function(n, t) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(n) || this.menu.isLastItem() && /^next/.test(n) ? (this.isMultiLine || this._value(this.term),
            this.menu.blur(),
            void 0) : (this.menu[n](t),
            void 0) : (this.search(null, t),
            void 0)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(n, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t),
            t.preventDefault())
        },
        _isContentEditable: function(n) {
            if (!n.length)
                return !1;
            var t = n.prop("contentEditable");
            return "inherit" === t ? this._isContentEditable(n.parent()) : "true" === t
        }
    });
    n.extend(n.ui.autocomplete, {
        escapeRegex: function(n) {
            return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, i) {
            var r = RegExp(n.ui.autocomplete.escapeRegex(i), "i");
            return n.grep(t, function(n) {
                return r.test(n.label || n.value || n)
            })
        }
    });
    n.widget("ui.autocomplete", n.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(n) {
                    return n + (n > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(t) {
            var i;
            this._superApply(arguments);
            this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults,
            this.liveRegion.children().hide(),
            n("<div>").text(i).appendTo(this.liveRegion))
        }
    });
    n.ui.autocomplete;
    y = /ui-corner-([a-z]){2,6}/g;
    n.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance()
        },
        _enhance: function() {
            this.element.attr("role", "toolbar");
            this.refresh()
        },
        _destroy: function() {
            this._callChildMethod("destroy");
            this.childWidgets.removeData("ui-controlgroup-data");
            this.element.removeAttr("role");
            this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function() {
            var t = this
              , i = [];
            n.each(this.options.items, function(r, u) {
                var f, e = {};
                if (u)
                    return "controlgroupLabel" === r ? (f = t.element.find(u),
                    f.each(function() {
                        var t = n(this);
                        t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'><\/span>")
                    }),
                    t._addClass(f, null, "ui-widget ui-widget-content ui-state-default"),
                    i = i.concat(f.get()),
                    void 0) : (n.fn[r] && (e = t["_" + r + "Options"] ? t["_" + r + "Options"]("middle") : {
                        classes: {}
                    },
                    t.element.find(u).each(function() {
                        var u = n(this), f = u[r]("instance"), o = n.widget.extend({}, e), s;
                        "button" === r && u.parent(".ui-spinner").length || (f || (f = u[r]()[r]("instance")),
                        f && (o.classes = t._resolveClassesValues(o.classes, f)),
                        u[r](o),
                        s = u[r]("widget"),
                        n.data(s[0], "ui-controlgroup-data", f ? f : u[r]("instance")),
                        i.push(s[0]))
                    })),
                    void 0)
            });
            this.childWidgets = n(n.unique(i));
            this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(t) {
            this.childWidgets.each(function() {
                var r = n(this)
                  , i = r.data("ui-controlgroup-data");
                i && i[t] && i[t]()
            })
        },
        _updateCornerClass: function(n, t) {
            var i = this._buildSimpleOptions(t, "label").classes.label;
            this._removeClass(n, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all");
            this._addClass(n, null, i)
        },
        _buildSimpleOptions: function(n, t) {
            var i = "vertical" === this.options.direction
              , r = {
                classes: {}
            };
            return r.classes[t] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            }[n],
            r
        },
        _spinnerOptions: function(n) {
            var t = this._buildSimpleOptions(n, "ui-spinner");
            return t.classes["ui-spinner-up"] = "",
            t.classes["ui-spinner-down"] = "",
            t
        },
        _buttonOptions: function(n) {
            return this._buildSimpleOptions(n, "ui-button")
        },
        _checkboxradioOptions: function(n) {
            return this._buildSimpleOptions(n, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function(n) {
            var t = "vertical" === this.options.direction;
            return {
                width: t ? "auto" : !1,
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (t ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (t ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": t ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (t ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[n]
            }
        },
        _resolveClassesValues: function(t, i) {
            var r = {};
            return n.each(t, function(u) {
                var f = i.options.classes[u] || "";
                f = n.trim(f.replace(y, ""));
                r[u] = (f + " " + t[u]).replace(/\s+/g, " ")
            }),
            r
        },
        _setOption: function(n, t) {
            return "direction" === n && this._removeClass("ui-controlgroup-" + this.options.direction),
            this._super(n, t),
            "disabled" === n ? (this._callChildMethod(t ? "disable" : "enable"),
            void 0) : (this.refresh(),
            void 0)
        },
        refresh: function() {
            var t, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction);
            "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix");
            this._initWidgets();
            t = this.childWidgets;
            this.options.onlyVisible && (t = t.filter(":visible"));
            t.length && (n.each(["first", "last"], function(n, r) {
                var u = t[r]().data("ui-controlgroup-data"), f;
                u && i["_" + u.widgetName + "Options"] ? (f = i["_" + u.widgetName + "Options"](1 === t.length ? "only" : r),
                f.classes = i._resolveClassesValues(f.classes, u),
                u.element[u.widgetName](f)) : i._updateCornerClass(t[r](), r)
            }),
            this._callChildMethod("refresh"))
        }
    });
    n.widget("ui.checkboxradio", [n.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var t, i, u = this, r = this._super() || {};
            return this._readType(),
            i = this.element.labels(),
            this.label = n(i[i.length - 1]),
            this.label.length || n.error("No label found for checkboxradio widget"),
            this.originalLabel = "",
            this.label.contents().not(this.element[0]).each(function() {
                u.originalLabel += 3 === this.nodeType ? n(this).text() : this.outerHTML
            }),
            this.originalLabel && (r.label = this.originalLabel),
            t = this.element[0].disabled,
            null != t && (r.disabled = t),
            r
        },
        _create: function() {
            var n = this.element[0].checked;
            this._bindFormResetHandler();
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled);
            this._setOption("disabled", this.options.disabled);
            this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible");
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget");
            "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label");
            this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel);
            this._enhance();
            n && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"),
            this.icon && this._addClass(this.icon, null, "ui-state-hover"));
            this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        },
        _readType: function() {
            var t = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type;
            "input" === t && /radio|checkbox/.test(this.type) || n.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type)
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked)
        },
        widget: function() {
            return this.label
        },
        _getRadioGroup: function() {
            var t, i = this.element[0].name, r = "input[name='" + n.ui.escapeSelector(i) + "']";
            return i ? (t = this.form.length ? n(this.form[0].elements).filter(r) : n(r).filter(function() {
                return 0 === n(this).form().length
            }),
            t.not(this.element)) : n([])
        },
        _toggleClasses: function() {
            var t = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t);
            this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t);
            "radio" === this.type && this._getRadioGroup().each(function() {
                var t = n(this).checkboxradio("instance");
                t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function() {
            this._unbindFormResetHandler();
            this.icon && (this.icon.remove(),
            this.iconSpace.remove())
        },
        _setOption: function(n, t) {
            if ("label" !== n || t)
                return (this._super(n, t),
                "disabled" === n ? (this._toggleClass(this.label, null, "ui-state-disabled", t),
                this.element[0].disabled = t,
                void 0) : (this.refresh(),
                void 0))
        },
        _updateIcon: function(t) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = n("<span>"),
            this.iconSpace = n("<span> <\/span>"),
            this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")),
            "checkbox" === this.type ? (i += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank",
            this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank",
            this._addClass(this.icon, "ui-checkboxradio-icon", i),
            t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"),
            this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(),
            this.iconSpace.remove(),
            delete this.icon)
        },
        _updateLabel: function() {
            var n = this.label.contents().not(this.element[0]);
            this.icon && (n = n.not(this.icon[0]));
            this.iconSpace && (n = n.not(this.iconSpace[0]));
            n.remove();
            this.label.append(this.options.label)
        },
        refresh: function() {
            var n = this.element[0].checked
              , t = this.element[0].disabled;
            this._updateIcon(n);
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", n);
            null !== this.options.label && this._updateLabel();
            t !== this.options.disabled && this._setOptions({
                disabled: t
            })
        }
    }]);
    n.ui.checkboxradio;
    n.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function() {
            var n, t = this._super() || {};
            return this.isInput = this.element.is("input"),
            n = this.element[0].disabled,
            null != n && (t.disabled = n),
            this.originalLabel = this.isInput ? this.element.val() : this.element.html(),
            this.originalLabel && (t.label = this.originalLabel),
            t
        },
        _create: function() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0);
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1);
            this.hasTitle = !!this.element.attr("title");
            this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label));
            this._addClass("ui-button", "ui-widget");
            this._setOption("disabled", this.options.disabled);
            this._enhance();
            this.element.is("a") && this._on({
                keyup: function(t) {
                    t.keyCode === n.ui.keyCode.SPACE && (t.preventDefault(),
                    this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                }
            })
        },
        _enhance: function() {
            this.element.is("button") || this.element.attr("role", "button");
            this.options.icon && (this._updateIcon("icon", this.options.icon),
            this._updateTooltip())
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title");
            this.options.showLabel || this.title || this.element.attr("title", this.options.label)
        },
        _updateIcon: function(t, i) {
            var u = "iconPosition" !== t
              , r = u ? this.options.iconPosition : i
              , f = "top" === r || "bottom" === r;
            this.icon ? u && this._removeClass(this.icon, null, this.options.icon) : (this.icon = n("<span>"),
            this._addClass(this.icon, "ui-button-icon", "ui-icon"),
            this.options.showLabel || this._addClass("ui-button-icon-only"));
            u && this._addClass(this.icon, null, i);
            this._attachIcon(r);
            f ? (this._addClass(this.icon, null, "ui-widget-icon-block"),
            this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = n("<span> <\/span>"),
            this._addClass(this.iconSpace, "ui-button-icon-space")),
            this._removeClass(this.icon, null, "ui-wiget-icon-block"),
            this._attachIconSpace(r))
        },
        _destroy: function() {
            this.element.removeAttr("role");
            this.icon && this.icon.remove();
            this.iconSpace && this.iconSpace.remove();
            this.hasTitle || this.element.removeAttr("title")
        },
        _attachIconSpace: function(n) {
            this.icon[/^(?:end|bottom)/.test(n) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function(n) {
            this.element[/^(?:end|bottom)/.test(n) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function(n) {
            var t = void 0 === n.showLabel ? this.options.showLabel : n.showLabel
              , i = void 0 === n.icon ? this.options.icon : n.icon;
            t || i || (n.showLabel = !0);
            this._super(n)
        },
        _setOption: function(n, t) {
            "icon" === n && (t ? this._updateIcon(n, t) : this.icon && (this.icon.remove(),
            this.iconSpace && this.iconSpace.remove()));
            "iconPosition" === n && this._updateIcon(n, t);
            "showLabel" === n && (this._toggleClass("ui-button-icon-only", null, !t),
            this._updateTooltip());
            "label" === n && (this.isInput ? this.element.val(t) : (this.element.html(t),
            this.icon && (this._attachIcon(this.options.iconPosition),
            this._attachIconSpace(this.options.iconPosition))));
            this._super(n, t);
            "disabled" === n && (this._toggleClass(null, "ui-state-disabled", t),
            this.element[0].disabled = t,
            t && this.element.blur())
        },
        refresh: function() {
            var n = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            n !== this.options.disabled && this._setOptions({
                disabled: n
            });
            this._updateTooltip()
        }
    });
    n.uiBackCompat !== !1 && (n.widget("ui.button", n.ui.button, {
        options: {
            text: !0,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text);
            !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel);
            this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary,
            this.options.iconPosition = "end");
            this._super()
        },
        _setOption: function(n, t) {
            return "text" === n ? (this._super("showLabel", t),
            void 0) : ("showLabel" === n && (this.options.text = t),
            "icon" === n && (this.options.icons.primary = t),
            "icons" === n && (t.primary ? (this._super("icon", t.primary),
            this._super("iconPosition", "beginning")) : t.secondary && (this._super("icon", t.secondary),
            this._super("iconPosition", "end"))),
            this._superApply(arguments),
            void 0)
        }
    }),
    n.fn.button = function(t) {
        return function() {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? t.apply(this, arguments) : (n.ui.checkboxradio || n.error("Checkboxradio widget missing"),
            0 === arguments.length ? this.checkboxradio({
                icon: !1
            }) : this.checkboxradio.apply(this, arguments))
        }
    }(n.fn.button),
    n.fn.buttonset = function() {
        return n.ui.controlgroup || n.error("Controlgroup widget missing"),
        "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        }),
        this.controlgroup.apply(this, arguments))
    }
    );
    n.ui.button;
    n.extend(n.ui, {
        datepicker: {
            version: "1.12.1"
        }
    });
    n.extend(c.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(n) {
            return u(this._defaults, n || {}),
            this
        },
        _attachDatepicker: function(t, i) {
            var r, f, u;
            r = t.nodeName.toLowerCase();
            f = "div" === r || "span" === r;
            t.id || (this.uuid += 1,
            t.id = "dp" + this.uuid);
            u = this._newInst(n(t), f);
            u.settings = n.extend({}, i || {});
            "input" === r ? this._connectDatepicker(t, u) : f && this._inlineDatepicker(t, u)
        },
        _newInst: function(t, i) {
            var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: r,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? l(n("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, i) {
            var r = n(t);
            i.append = n([]);
            i.trigger = n([]);
            r.hasClass(this.markerClassName) || (this._attachments(r, i),
            r.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp),
            this._autoSize(i),
            n.data(t, "datepicker", i),
            i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var u, r, f, e = this._get(i, "appendText"), o = this._get(i, "isRTL");
            i.append && i.append.remove();
            e && (i.append = n("<span class='" + this._appendClass + "'>" + e + "<\/span>"),
            t[o ? "before" : "after"](i.append));
            t.off("focus", this._showDatepicker);
            i.trigger && i.trigger.remove();
            u = this._get(i, "showOn");
            ("focus" === u || "both" === u) && t.on("focus", this._showDatepicker);
            ("button" === u || "both" === u) && (r = this._get(i, "buttonText"),
            f = this._get(i, "buttonImage"),
            i.trigger = n(this._get(i, "buttonImageOnly") ? n("<img/>").addClass(this._triggerClass).attr({
                src: f,
                alt: r,
                title: r
            }) : n("<button type='button'><\/button>").addClass(this._triggerClass).html(f ? n("<img/>").attr({
                src: f,
                alt: r,
                title: r
            }) : r)),
            t[o ? "before" : "after"](i.trigger),
            i.trigger.on("click", function() {
                return n.datepicker._datepickerShowing && n.datepicker._lastInput === t[0] ? n.datepicker._hideDatepicker() : n.datepicker._datepickerShowing && n.datepicker._lastInput !== t[0] ? (n.datepicker._hideDatepicker(),
                n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]),
                !1
            }))
        },
        _autoSize: function(n) {
            if (this._get(n, "autoSize") && !n.inline) {
                var r, u, f, t, i = new Date(2009,11,20), e = this._get(n, "dateFormat");
                e.match(/[DM]/) && (r = function(n) {
                    for (u = 0,
                    f = 0,
                    t = 0; n.length > t; t++)
                        n[t].length > u && (u = n[t].length,
                        f = t);
                    return f
                }
                ,
                i.setMonth(r(this._get(n, e.match(/MM/) ? "monthNames" : "monthNamesShort"))),
                i.setDate(r(this._get(n, e.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - i.getDay()));
                n.input.attr("size", this._formatDate(n, i).length)
            }
        },
        _inlineDatepicker: function(t, i) {
            var r = n(t);
            r.hasClass(this.markerClassName) || (r.addClass(this.markerClassName).append(i.dpDiv),
            n.data(t, "datepicker", i),
            this._setDate(i, this._getDefaultDate(i), !0),
            this._updateDatepicker(i),
            this._updateAlternate(i),
            i.settings.disabled && this._disableDatepicker(t),
            i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, i, r, f, e) {
            var s, h, c, l, a, o = this._dialogInst;
            return o || (this.uuid += 1,
            s = "dp" + this.uuid,
            this._dialogInput = n("<input type='text' id='" + s + "' style='position: absolute; top: -100px; width: 0px;'/>"),
            this._dialogInput.on("keydown", this._doKeyDown),
            n("body").append(this._dialogInput),
            o = this._dialogInst = this._newInst(this._dialogInput, !1),
            o.settings = {},
            n.data(this._dialogInput[0], "datepicker", o)),
            u(o.settings, f || {}),
            i = i && i.constructor === Date ? this._formatDate(o, i) : i,
            this._dialogInput.val(i),
            this._pos = e ? e.length ? e : [e.pageX, e.pageY] : null,
            this._pos || (h = document.documentElement.clientWidth,
            c = document.documentElement.clientHeight,
            l = document.documentElement.scrollLeft || document.body.scrollLeft,
            a = document.documentElement.scrollTop || document.body.scrollTop,
            this._pos = [h / 2 - 100 + l, c / 2 - 150 + a]),
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
            o.settings.onSelect = r,
            this._inDialog = !0,
            this.dpDiv.addClass(this._dialogClass),
            this._showDatepicker(this._dialogInput[0]),
            n.blockUI && n.blockUI(this.dpDiv),
            n.data(this._dialogInput[0], "datepicker", o),
            this
        },
        _destroyDatepicker: function(t) {
            var r, u = n(t), f = n.data(t, "datepicker");
            u.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(),
            n.removeData(t, "datepicker"),
            "input" === r ? (f.append.remove(),
            f.trigger.remove(),
            u.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === r || "span" === r) && u.removeClass(this.markerClassName).empty(),
            i === f && (i = null))
        },
        _enableDatepicker: function(t) {
            var i, r, u = n(t), f = n.data(t, "datepicker");
            u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(),
            "input" === i ? (t.disabled = !1,
            f.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (r = u.children("." + this._inlineClass),
            r.children().removeClass("ui-state-disabled"),
            r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
            this._disabledInputs = n.map(this._disabledInputs, function(n) {
                return n === t ? null : n
            }))
        },
        _disableDatepicker: function(t) {
            var i, r, u = n(t), f = n.data(t, "datepicker");
            u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(),
            "input" === i ? (t.disabled = !0,
            f.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (r = u.children("." + this._inlineClass),
            r.children().addClass("ui-state-disabled"),
            r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
            this._disabledInputs = n.map(this._disabledInputs, function(n) {
                return n === t ? null : n
            }),
            this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(n) {
            if (!n)
                return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === n)
                    return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return n.data(t, "datepicker")
            } catch (i) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(t, i, r) {
            var e, h, o, s, f = this._getInst(t);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? n.extend({}, n.datepicker._defaults) : f ? "all" === i ? n.extend({}, f.settings) : this._get(f, i) : null : (e = i || {},
            "string" == typeof i && (e = {},
            e[i] = r),
            f && (this._curInst === f && this._hideDatepicker(),
            h = this._getDateDatepicker(t, !0),
            o = this._getMinMaxDate(f, "min"),
            s = this._getMinMaxDate(f, "max"),
            u(f.settings, e),
            null !== o && void 0 !== e.dateFormat && void 0 === e.minDate && (f.settings.minDate = this._formatDate(f, o)),
            null !== s && void 0 !== e.dateFormat && void 0 === e.maxDate && (f.settings.maxDate = this._formatDate(f, s)),
            "disabled"in e && (e.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)),
            this._attachments(n(t), f),
            this._autoSize(f),
            this._setDate(f, h),
            this._updateAlternate(f),
            this._updateDatepicker(f)),
            void 0)
        },
        _changeDatepicker: function(n, t, i) {
            this._optionDatepicker(n, t, i)
        },
        _refreshDatepicker: function(n) {
            var t = this._getInst(n);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(n, t) {
            var i = this._getInst(n);
            i && (this._setDate(i, t),
            this._updateDatepicker(i),
            this._updateAlternate(i))
        },
        _getDateDatepicker: function(n, t) {
            var i = this._getInst(n);
            return i && !i.inline && this._setDateFromField(i, t),
            i ? this._getDate(i) : null
        },
        _doKeyDown: function(t) {
            var u, e, f, i = n.datepicker._getInst(t.target), r = !0, o = i.dpDiv.is(".ui-datepicker-rtl");
            if (i._keyEvent = !0,
            n.datepicker._datepickerShowing)
                switch (t.keyCode) {
                case 9:
                    n.datepicker._hideDatepicker();
                    r = !1;
                    break;
                case 13:
                    return f = n("td." + n.datepicker._dayOverClass + ":not(." + n.datepicker._currentClass + ")", i.dpDiv),
                    f[0] && n.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, f[0]),
                    u = n.datepicker._get(i, "onSelect"),
                    u ? (e = n.datepicker._formatDate(i),
                    u.apply(i.input ? i.input[0] : null, [e, i])) : n.datepicker._hideDatepicker(),
                    !1;
                case 27:
                    n.datepicker._hideDatepicker();
                    break;
                case 33:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 34:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && n.datepicker._clearDate(t.target);
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && n.datepicker._gotoToday(t.target);
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? 1 : -1, "D");
                    r = t.ctrlKey || t.metaKey;
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, -7, "D");
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? -1 : 1, "D");
                    r = t.ctrlKey || t.metaKey;
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, 7, "D");
                    r = t.ctrlKey || t.metaKey;
                    break;
                default:
                    r = !1
                }
            else
                36 === t.keyCode && t.ctrlKey ? n.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(),
            t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var i, r, u = n.datepicker._getInst(t.target);
            if (n.datepicker._get(u, "constrainInput"))
                return (i = n.datepicker._possibleChars(n.datepicker._get(u, "dateFormat")),
                r = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode),
                t.ctrlKey || t.metaKey || " " > r || !i || i.indexOf(r) > -1)
        },
        _doKeyUp: function(t) {
            var r, i = n.datepicker._getInst(t.target);
            if (i.input.val() !== i.lastVal)
                try {
                    r = n.datepicker.parseDate(n.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, n.datepicker._getFormatConfig(i));
                    r && (n.datepicker._setDateFromField(i),
                    n.datepicker._updateAlternate(i),
                    n.datepicker._updateDatepicker(i))
                } catch (u) {}
            return !0
        },
        _showDatepicker: function(t) {
            if (t = t.target || t,
            "input" !== t.nodeName.toLowerCase() && (t = n("input", t.parentNode)[0]),
            !n.datepicker._isDisabledDatepicker(t) && n.datepicker._lastInput !== t) {
                var i, o, s, r, f, e, h;
                i = n.datepicker._getInst(t);
                n.datepicker._curInst && n.datepicker._curInst !== i && (n.datepicker._curInst.dpDiv.stop(!0, !0),
                i && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0]));
                o = n.datepicker._get(i, "beforeShow");
                s = o ? o.apply(t, [t, i]) : {};
                s !== !1 && (u(i.settings, s),
                i.lastVal = null,
                n.datepicker._lastInput = t,
                n.datepicker._setDateFromField(i),
                n.datepicker._inDialog && (t.value = ""),
                n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t),
                n.datepicker._pos[1] += t.offsetHeight),
                r = !1,
                n(t).parents().each(function() {
                    return r |= "fixed" === n(this).css("position"),
                    !r
                }),
                f = {
                    left: n.datepicker._pos[0],
                    top: n.datepicker._pos[1]
                },
                n.datepicker._pos = null,
                i.dpDiv.empty(),
                i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }),
                n.datepicker._updateDatepicker(i),
                f = n.datepicker._checkOffset(i, f, r),
                i.dpDiv.css({
                    position: n.datepicker._inDialog && n.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: f.left + "px",
                    top: f.top + "px"
                }),
                i.inline || (e = n.datepicker._get(i, "showAnim"),
                h = n.datepicker._get(i, "duration"),
                i.dpDiv.css("z-index", k(n(t)) + 1),
                n.datepicker._datepickerShowing = !0,
                n.effects && n.effects.effect[e] ? i.dpDiv.show(e, n.datepicker._get(i, "showOptions"), h) : i.dpDiv[e || "show"](e ? h : null),
                n.datepicker._shouldFocusInput(i) && i.input.trigger("focus"),
                n.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4;
            i = t;
            t.dpDiv.empty().append(this._generateHTML(t));
            this._attachHandlers(t);
            var r, u = this._getNumberOfMonths(t), f = u[1], e = t.dpDiv.find("." + this._dayOverClass + " a");
            e.length > 0 && a.apply(e.get(0));
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            f > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", 17 * f + "em");
            t.dpDiv[(1 !== u[0] || 1 !== u[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            t === n.datepicker._curInst && n.datepicker._datepickerShowing && n.datepicker._shouldFocusInput(t) && t.input.trigger("focus");
            t.yearshtml && (r = t.yearshtml,
            setTimeout(function() {
                r === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml);
                r = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(n) {
            return n.input && n.input.is(":visible") && !n.input.is(":disabled") && !n.input.is(":focus")
        },
        _checkOffset: function(t, i, r) {
            var u = t.dpDiv.outerWidth()
              , f = t.dpDiv.outerHeight()
              , h = t.input ? t.input.outerWidth() : 0
              , o = t.input ? t.input.outerHeight() : 0
              , e = document.documentElement.clientWidth + (r ? 0 : n(document).scrollLeft())
              , s = document.documentElement.clientHeight + (r ? 0 : n(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? u - h : 0,
            i.left -= r && i.left === t.input.offset().left ? n(document).scrollLeft() : 0,
            i.top -= r && i.top === t.input.offset().top + o ? n(document).scrollTop() : 0,
            i.left -= Math.min(i.left, i.left + u > e && e > u ? Math.abs(i.left + u - e) : 0),
            i.top -= Math.min(i.top, i.top + f > s && s > f ? Math.abs(f + o) : 0),
            i
        },
        _findPos: function(t) {
            for (var i, r = this._getInst(t), u = this._get(r, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || n.expr.filters.hidden(t)); )
                t = t[u ? "previousSibling" : "nextSibling"];
            return i = n(t).offset(),
            [i.left, i.top]
        },
        _hideDatepicker: function(t) {
            var r, f, u, e, i = this._curInst;
            !i || t && i !== n.data(t, "datepicker") || this._datepickerShowing && (r = this._get(i, "showAnim"),
            f = this._get(i, "duration"),
            u = function() {
                n.datepicker._tidyDialog(i)
            }
            ,
            n.effects && (n.effects.effect[r] || n.effects[r]) ? i.dpDiv.hide(r, n.datepicker._get(i, "showOptions"), f, u) : i.dpDiv["slideDown" === r ? "slideUp" : "fadeIn" === r ? "fadeOut" : "hide"](r ? f : null, u),
            r || u(),
            this._datepickerShowing = !1,
            e = this._get(i, "onClose"),
            e && e.apply(i.input ? i.input[0] : null, [i.input ? i.input.val() : "", i]),
            this._lastInput = null,
            this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }),
            n.blockUI && (n.unblockUI(),
            n("body").append(this.dpDiv))),
            this._inDialog = !1)
        },
        _tidyDialog: function(n) {
            n.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (n.datepicker._curInst) {
                var i = n(t.target)
                  , r = n.datepicker._getInst(i[0]);
                (i[0].id === n.datepicker._mainDivId || 0 !== i.parents("#" + n.datepicker._mainDivId).length || i.hasClass(n.datepicker.markerClassName) || i.closest("." + n.datepicker._triggerClass).length || !n.datepicker._datepickerShowing || n.datepicker._inDialog && n.blockUI) && (!i.hasClass(n.datepicker.markerClassName) || n.datepicker._curInst === r) || n.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, r) {
            var f = n(t)
              , u = this._getInst(f[0]);
            this._isDisabledDatepicker(f[0]) || (this._adjustInstDate(u, i + ("M" === r ? this._get(u, "showCurrentAtPos") : 0), r),
            this._updateDatepicker(u))
        },
        _gotoToday: function(t) {
            var r, u = n(t), i = this._getInst(u[0]);
            this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay,
            i.drawMonth = i.selectedMonth = i.currentMonth,
            i.drawYear = i.selectedYear = i.currentYear) : (r = new Date,
            i.selectedDay = r.getDate(),
            i.drawMonth = i.selectedMonth = r.getMonth(),
            i.drawYear = i.selectedYear = r.getFullYear());
            this._notifyChange(i);
            this._adjustDate(u)
        },
        _selectMonthYear: function(t, i, r) {
            var f = n(t)
              , u = this._getInst(f[0]);
            u["selected" + ("M" === r ? "Month" : "Year")] = u["draw" + ("M" === r ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10);
            this._notifyChange(u);
            this._adjustDate(f)
        },
        _selectDay: function(t, i, r, u) {
            var f, e = n(t);
            n(u).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0]) || (f = this._getInst(e[0]),
            f.selectedDay = f.currentDay = n("a", u).html(),
            f.selectedMonth = f.currentMonth = i,
            f.selectedYear = f.currentYear = r,
            this._selectDate(t, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
        },
        _clearDate: function(t) {
            var i = n(t);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var u, f = n(t), r = this._getInst(f[0]);
            i = null != i ? i : this._formatDate(r);
            r.input && r.input.val(i);
            this._updateAlternate(r);
            u = this._get(r, "onSelect");
            u ? u.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change");
            r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(),
            this._lastInput = r.input[0],
            "object" != typeof r.input[0] && r.input.trigger("focus"),
            this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i, r, u, f = this._get(t, "altField");
            f && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"),
            r = this._getDate(t),
            u = this.formatDate(i, r, this._getFormatConfig(t)),
            n(f).val(u))
        },
        noWeekends: function(n) {
            var t = n.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function(n) {
            var i, t = new Date(n.getTime());
            return t.setDate(t.getDate() + 4 - (t.getDay() || 7)),
            i = t.getTime(),
            t.setMonth(0),
            t.setDate(1),
            Math.floor(Math.round((i - t) / 864e5) / 7) + 1
        },
        parseDate: function(t, i, r) {
            if (null == t || null == i)
                throw "Invalid arguments";
            if (i = "object" == typeof i ? "" + i : i + "",
            "" === i)
                return null;
            for (var a, v, u, f = 0, y = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff, d = "string" != typeof y ? y : (new Date).getFullYear() % 100 + parseInt(y, 10), g = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort, nt = (r ? r.dayNames : null) || this._defaults.dayNames, tt = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort, it = (r ? r.monthNames : null) || this._defaults.monthNames, e = -1, s = -1, h = -1, p = -1, w = !1, l = function(n) {
                var i = t.length > o + 1 && t.charAt(o + 1) === n;
                return i && o++,
                i
            }, c = function(n) {
                var u = l(n)
                  , r = "@" === n ? 14 : "!" === n ? 20 : "y" === n && u ? 4 : "o" === n ? 3 : 2
                  , e = "y" === n ? r : 1
                  , o = RegExp("^\\d{" + e + "," + r + "}")
                  , t = i.substring(f).match(o);
                if (!t)
                    throw "Missing number at position " + f;
                return f += t[0].length,
                parseInt(t[0], 10)
            }, k = function(t, r, u) {
                var e = -1
                  , o = n.map(l(t) ? u : r, function(n, t) {
                    return [[t, n]]
                }).sort(function(n, t) {
                    return -(n[1].length - t[1].length)
                });
                if (n.each(o, function(n, t) {
                    var r = t[1];
                    if (i.substr(f, r.length).toLowerCase() === r.toLowerCase())
                        return (e = t[0],
                        f += r.length,
                        !1)
                }),
                -1 !== e)
                    return e + 1;
                throw "Unknown name at position " + f;
            }, b = function() {
                if (i.charAt(f) !== t.charAt(o))
                    throw "Unexpected literal at position " + f;
                f++
            }, o = 0; t.length > o; o++)
                if (w)
                    "'" !== t.charAt(o) || l("'") ? b() : w = !1;
                else
                    switch (t.charAt(o)) {
                    case "d":
                        h = c("d");
                        break;
                    case "D":
                        k("D", g, nt);
                        break;
                    case "o":
                        p = c("o");
                        break;
                    case "m":
                        s = c("m");
                        break;
                    case "M":
                        s = k("M", tt, it);
                        break;
                    case "y":
                        e = c("y");
                        break;
                    case "@":
                        u = new Date(c("@"));
                        e = u.getFullYear();
                        s = u.getMonth() + 1;
                        h = u.getDate();
                        break;
                    case "!":
                        u = new Date((c("!") - this._ticksTo1970) / 1e4);
                        e = u.getFullYear();
                        s = u.getMonth() + 1;
                        h = u.getDate();
                        break;
                    case "'":
                        l("'") ? b() : w = !0;
                        break;
                    default:
                        b()
                    }
            if (i.length > f && (v = i.substr(f),
            !/^\s+/.test(v)))
                throw "Extra/unparsed characters found in date: " + v;
            if (-1 === e ? e = (new Date).getFullYear() : 100 > e && (e += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d >= e ? 0 : -100)),
            p > -1)
                for (s = 1,
                h = p; ; ) {
                    if (a = this._getDaysInMonth(e, s - 1),
                    a >= h)
                        break;
                    s++;
                    h -= a
                }
            if (u = this._daylightSavingAdjust(new Date(e,s - 1,h)),
            u.getFullYear() !== e || u.getMonth() + 1 !== s || u.getDate() !== h)
                throw "Invalid date";
            return u
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(n, t, i) {
            if (!t)
                return "";
            var u, h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, c = (i ? i.dayNames : null) || this._defaults.dayNames, l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, a = (i ? i.monthNames : null) || this._defaults.monthNames, f = function(t) {
                var i = n.length > u + 1 && n.charAt(u + 1) === t;
                return i && u++,
                i
            }, e = function(n, t, i) {
                var r = "" + t;
                if (f(n))
                    for (; i > r.length; )
                        r = "0" + r;
                return r
            }, s = function(n, t, i, r) {
                return f(n) ? r[t] : i[t]
            }, r = "", o = !1;
            if (t)
                for (u = 0; n.length > u; u++)
                    if (o)
                        "'" !== n.charAt(u) || f("'") ? r += n.charAt(u) : o = !1;
                    else
                        switch (n.charAt(u)) {
                        case "d":
                            r += e("d", t.getDate(), 2);
                            break;
                        case "D":
                            r += s("D", t.getDay(), h, c);
                            break;
                        case "o":
                            r += e("o", Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime() - new Date(t.getFullYear(),0,0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            r += e("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            r += s("M", t.getMonth(), l, a);
                            break;
                        case "y":
                            r += f("y") ? t.getFullYear() : (10 > t.getFullYear() % 100 ? "0" : "") + t.getFullYear() % 100;
                            break;
                        case "@":
                            r += t.getTime();
                            break;
                        case "!":
                            r += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            f("'") ? r += "'" : o = !0;
                            break;
                        default:
                            r += n.charAt(u)
                        }
            return r
        },
        _possibleChars: function(n) {
            for (var i = "", r = !1, u = function(i) {
                var r = n.length > t + 1 && n.charAt(t + 1) === i;
                return r && t++,
                r
            }, t = 0; n.length > t; t++)
                if (r)
                    "'" !== n.charAt(t) || u("'") ? i += n.charAt(t) : r = !1;
                else
                    switch (n.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        u("'") ? i += "'" : r = !0;
                        break;
                    default:
                        i += n.charAt(t)
                    }
            return i
        },
        _get: function(n, t) {
            return void 0 !== n.settings[t] ? n.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(n, t) {
            if (n.input.val() !== n.lastVal) {
                var f = this._get(n, "dateFormat")
                  , r = n.lastVal = n.input ? n.input.val() : null
                  , u = this._getDefaultDate(n)
                  , i = u
                  , e = this._getFormatConfig(n);
                try {
                    i = this.parseDate(f, r, e) || u
                } catch (o) {
                    r = t ? "" : r
                }
                n.selectedDay = i.getDate();
                n.drawMonth = n.selectedMonth = i.getMonth();
                n.drawYear = n.selectedYear = i.getFullYear();
                n.currentDay = r ? i.getDate() : 0;
                n.currentMonth = r ? i.getMonth() : 0;
                n.currentYear = r ? i.getFullYear() : 0;
                this._adjustInstDate(n)
            }
        },
        _getDefaultDate: function(n) {
            return this._restrictMinMax(n, this._determineDate(n, this._get(n, "defaultDate"), new Date))
        },
        _determineDate: function(t, i, r) {
            var f = function(n) {
                var t = new Date;
                return t.setDate(t.getDate() + n),
                t
            }
              , e = function(i) {
                try {
                    return n.datepicker.parseDate(n.datepicker._get(t, "dateFormat"), i, n.datepicker._getFormatConfig(t))
                } catch (h) {}
                for (var o = (i.toLowerCase().match(/^c/) ? n.datepicker._getDate(t) : null) || new Date, f = o.getFullYear(), e = o.getMonth(), r = o.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = s.exec(i); u; ) {
                    switch (u[2] || "d") {
                    case "d":
                    case "D":
                        r += parseInt(u[1], 10);
                        break;
                    case "w":
                    case "W":
                        r += 7 * parseInt(u[1], 10);
                        break;
                    case "m":
                    case "M":
                        e += parseInt(u[1], 10);
                        r = Math.min(r, n.datepicker._getDaysInMonth(f, e));
                        break;
                    case "y":
                    case "Y":
                        f += parseInt(u[1], 10);
                        r = Math.min(r, n.datepicker._getDaysInMonth(f, e))
                    }
                    u = s.exec(i)
                }
                return new Date(f,e,r)
            }
              , u = null == i || "" === i ? r : "string" == typeof i ? e(i) : "number" == typeof i ? isNaN(i) ? r : f(i) : new Date(i.getTime());
            return u = u && "Invalid Date" == "" + u ? r : u,
            u && (u.setHours(0),
            u.setMinutes(0),
            u.setSeconds(0),
            u.setMilliseconds(0)),
            this._daylightSavingAdjust(u)
        },
        _daylightSavingAdjust: function(n) {
            return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0),
            n) : null
        },
        _setDate: function(n, t, i) {
            var u = !t
              , f = n.selectedMonth
              , e = n.selectedYear
              , r = this._restrictMinMax(n, this._determineDate(n, t, new Date));
            n.selectedDay = n.currentDay = r.getDate();
            n.drawMonth = n.selectedMonth = n.currentMonth = r.getMonth();
            n.drawYear = n.selectedYear = n.currentYear = r.getFullYear();
            f === n.selectedMonth && e === n.selectedYear || i || this._notifyChange(n);
            this._adjustInstDate(n);
            n.input && n.input.val(u ? "" : this._formatDate(n))
        },
        _getDate: function(n) {
            return !n.currentYear || n.input && "" === n.input.val() ? null : this._daylightSavingAdjust(new Date(n.currentYear,n.currentMonth,n.currentDay))
        },
        _attachHandlers: function(t) {
            var r = this._get(t, "stepMonths")
              , i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        n.datepicker._adjustDate(i, -r, "M")
                    },
                    next: function() {
                        n.datepicker._adjustDate(i, +r, "M")
                    },
                    hide: function() {
                        n.datepicker._hideDatepicker()
                    },
                    today: function() {
                        n.datepicker._gotoToday(i)
                    },
                    selectDay: function() {
                        return n.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this),
                        !1
                    },
                    selectMonth: function() {
                        return n.datepicker._selectMonthYear(i, this, "M"),
                        !1
                    },
                    selectYear: function() {
                        return n.datepicker._selectMonthYear(i, this, "Y"),
                        !1
                    }
                };
                n(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(n) {
            var b, s, rt, h, ut, k, ft, et, ri, c, ot, ui, fi, ei, oi, st, g, si, ht, nt, o, y, ct, p, lt, l, u, at, vt, yt, pt, tt, wt, i, bt, kt, d, a, it, dt = new Date, gt = this._daylightSavingAdjust(new Date(dt.getFullYear(),dt.getMonth(),dt.getDate())), f = this._get(n, "isRTL"), li = this._get(n, "showButtonPanel"), hi = this._get(n, "hideIfNoPrevNext"), ni = this._get(n, "navigationAsDateFormat"), e = this._getNumberOfMonths(n), ai = this._get(n, "showCurrentAtPos"), ci = this._get(n, "stepMonths"), ti = 1 !== e[0] || 1 !== e[1], ii = this._daylightSavingAdjust(n.currentDay ? new Date(n.currentYear,n.currentMonth,n.currentDay) : new Date(9999,9,9)), w = this._getMinMaxDate(n, "min"), v = this._getMinMaxDate(n, "max"), t = n.drawMonth - ai, r = n.drawYear;
            if (0 > t && (t += 12,
            r--),
            v)
                for (b = this._daylightSavingAdjust(new Date(v.getFullYear(),v.getMonth() - e[0] * e[1] + 1,v.getDate())),
                b = w && w > b ? w : b; this._daylightSavingAdjust(new Date(r,t,1)) > b; )
                    t--,
                    0 > t && (t = 11,
                    r--);
            for (n.drawMonth = t,
            n.drawYear = r,
            s = this._get(n, "prevText"),
            s = ni ? this.formatDate(s, this._daylightSavingAdjust(new Date(r,t - ci,1)), this._getFormatConfig(n)) : s,
            rt = this._canAdjustMonth(n, -1, r, t) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "e" : "w") + "'>" + s + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "e" : "w") + "'>" + s + "<\/span><\/a>",
            h = this._get(n, "nextText"),
            h = ni ? this.formatDate(h, this._daylightSavingAdjust(new Date(r,t + ci,1)), this._getFormatConfig(n)) : h,
            ut = this._canAdjustMonth(n, 1, r, t) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "w" : "e") + "'>" + h + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (f ? "w" : "e") + "'>" + h + "<\/span><\/a>",
            k = this._get(n, "currentText"),
            ft = this._get(n, "gotoCurrent") && n.currentDay ? ii : gt,
            k = ni ? this.formatDate(k, ft, this._getFormatConfig(n)) : k,
            et = n.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(n, "closeText") + "<\/button>",
            ri = li ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (f ? et : "") + (this._isInRange(n, ft) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + k + "<\/button>" : "") + (f ? "" : et) + "<\/div>" : "",
            c = parseInt(this._get(n, "firstDay"), 10),
            c = isNaN(c) ? 0 : c,
            ot = this._get(n, "showWeek"),
            ui = this._get(n, "dayNames"),
            fi = this._get(n, "dayNamesMin"),
            ei = this._get(n, "monthNames"),
            oi = this._get(n, "monthNamesShort"),
            st = this._get(n, "beforeShowDay"),
            g = this._get(n, "showOtherMonths"),
            si = this._get(n, "selectOtherMonths"),
            ht = this._getDefaultDate(n),
            nt = "",
            y = 0; e[0] > y; y++) {
                for (ct = "",
                this.maxRows = 4,
                p = 0; e[1] > p; p++) {
                    if (lt = this._daylightSavingAdjust(new Date(r,t,n.selectedDay)),
                    l = " ui-corner-all",
                    u = "",
                    ti) {
                        if (u += "<div class='ui-datepicker-group",
                        e[1] > 1)
                            switch (p) {
                            case 0:
                                u += " ui-datepicker-group-first";
                                l = " ui-corner-" + (f ? "right" : "left");
                                break;
                            case e[1] - 1:
                                u += " ui-datepicker-group-last";
                                l = " ui-corner-" + (f ? "left" : "right");
                                break;
                            default:
                                u += " ui-datepicker-group-middle";
                                l = ""
                            }
                        u += "'>"
                    }
                    for (u += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + l + "'>" + (/all|left/.test(l) && 0 === y ? f ? ut : rt : "") + (/all|right/.test(l) && 0 === y ? f ? rt : ut : "") + this._generateMonthYearHeader(n, t, r, w, v, y > 0 || p > 0, ei, oi) + "<\/div><table class='ui-datepicker-calendar'><thead><tr>",
                    at = ot ? "<th class='ui-datepicker-week-col'>" + this._get(n, "weekHeader") + "<\/th>" : "",
                    o = 0; 7 > o; o++)
                        vt = (o + c) % 7,
                        at += "<th scope='col'" + ((o + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + ui[vt] + "'>" + fi[vt] + "<\/span><\/th>";
                    for (u += at + "<\/tr><\/thead><tbody>",
                    yt = this._getDaysInMonth(r, t),
                    r === n.selectedYear && t === n.selectedMonth && (n.selectedDay = Math.min(n.selectedDay, yt)),
                    pt = (this._getFirstDayOfMonth(r, t) - c + 7) % 7,
                    tt = Math.ceil((pt + yt) / 7),
                    wt = ti ? this.maxRows > tt ? this.maxRows : tt : tt,
                    this.maxRows = wt,
                    i = this._daylightSavingAdjust(new Date(r,t,1 - pt)),
                    bt = 0; wt > bt; bt++) {
                        for (u += "<tr>",
                        kt = ot ? "<td class='ui-datepicker-week-col'>" + this._get(n, "calculateWeek")(i) + "<\/td>" : "",
                        o = 0; 7 > o; o++)
                            d = st ? st.apply(n.input ? n.input[0] : null, [i]) : [!0, ""],
                            a = i.getMonth() !== t,
                            it = a && !si || !d[0] || w && w > i || v && i > v,
                            kt += "<td class='" + ((o + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (a ? " ui-datepicker-other-month" : "") + (i.getTime() === lt.getTime() && t === n.selectedMonth && n._keyEvent || ht.getTime() === i.getTime() && ht.getTime() === lt.getTime() ? " " + this._dayOverClass : "") + (it ? " " + this._unselectableClass + " ui-state-disabled" : "") + (a && !g ? "" : " " + d[1] + (i.getTime() === ii.getTime() ? " " + this._currentClass : "") + (i.getTime() === gt.getTime() ? " ui-datepicker-today" : "")) + "'" + (a && !g || !d[2] ? "" : " title='" + d[2].replace(/'/g, "&#39;") + "'") + (it ? "" : " data-handler='selectDay' data-event='click' data-month='" + i.getMonth() + "' data-year='" + i.getFullYear() + "'") + ">" + (a && !g ? "&#xa0;" : it ? "<span class='ui-state-default'>" + i.getDate() + "<\/span>" : "<a class='ui-state-default" + (i.getTime() === gt.getTime() ? " ui-state-highlight" : "") + (i.getTime() === ii.getTime() ? " ui-state-active" : "") + (a ? " ui-priority-secondary" : "") + "' href='#'>" + i.getDate() + "<\/a>") + "<\/td>",
                            i.setDate(i.getDate() + 1),
                            i = this._daylightSavingAdjust(i);
                        u += kt + "<\/tr>"
                    }
                    t++;
                    t > 11 && (t = 0,
                    r++);
                    u += "<\/tbody><\/table>" + (ti ? "<\/div>" + (e[0] > 0 && p === e[1] - 1 ? "<div class='ui-datepicker-row-break'><\/div>" : "") : "");
                    ct += u
                }
                nt += ct
            }
            return nt += ri,
            n._keyEvent = !1,
            nt
        },
        _generateMonthYearHeader: function(n, t, i, r, u, f, e, o) {
            var k, d, h, v, y, p, s, a, w = this._get(n, "changeMonth"), b = this._get(n, "changeYear"), g = this._get(n, "showMonthAfterYear"), c = "<div class='ui-datepicker-title'>", l = "";
            if (f || !w)
                l += "<span class='ui-datepicker-month'>" + e[t] + "<\/span>";
            else {
                for (k = r && r.getFullYear() === i,
                d = u && u.getFullYear() === i,
                l += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
                h = 0; 12 > h; h++)
                    (!k || h >= r.getMonth()) && (!d || u.getMonth() >= h) && (l += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "<\/option>");
                l += "<\/select>"
            }
            if (g || (c += l + (!f && w && b ? "" : "&#xa0;")),
            !n.yearshtml)
                if (n.yearshtml = "",
                f || !b)
                    c += "<span class='ui-datepicker-year'>" + i + "<\/span>";
                else {
                    for (v = this._get(n, "yearRange").split(":"),
                    y = (new Date).getFullYear(),
                    p = function(n) {
                        var t = n.match(/c[+\-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+\-].*/) ? y + parseInt(n, 10) : parseInt(n, 10);
                        return isNaN(t) ? y : t
                    }
                    ,
                    s = p(v[0]),
                    a = Math.max(s, p(v[1] || "")),
                    s = r ? Math.max(s, r.getFullYear()) : s,
                    a = u ? Math.min(a, u.getFullYear()) : a,
                    n.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; a >= s; s++)
                        n.yearshtml += "<option value='" + s + "'" + (s === i ? " selected='selected'" : "") + ">" + s + "<\/option>";
                    n.yearshtml += "<\/select>";
                    c += n.yearshtml;
                    n.yearshtml = null
                }
            return c += this._get(n, "yearSuffix"),
            g && (c += (!f && w && b ? "" : "&#xa0;") + l),
            c + "<\/div>"
        },
        _adjustInstDate: function(n, t, i) {
            var u = n.selectedYear + ("Y" === i ? t : 0)
              , f = n.selectedMonth + ("M" === i ? t : 0)
              , e = Math.min(n.selectedDay, this._getDaysInMonth(u, f)) + ("D" === i ? t : 0)
              , r = this._restrictMinMax(n, this._daylightSavingAdjust(new Date(u,f,e)));
            n.selectedDay = r.getDate();
            n.drawMonth = n.selectedMonth = r.getMonth();
            n.drawYear = n.selectedYear = r.getFullYear();
            ("M" === i || "Y" === i) && this._notifyChange(n)
        },
        _restrictMinMax: function(n, t) {
            var i = this._getMinMaxDate(n, "min")
              , r = this._getMinMaxDate(n, "max")
              , u = i && i > t ? i : t;
            return r && u > r ? r : u
        },
        _notifyChange: function(n) {
            var t = this._get(n, "onChangeMonthYear");
            t && t.apply(n.input ? n.input[0] : null, [n.selectedYear, n.selectedMonth + 1, n])
        },
        _getNumberOfMonths: function(n) {
            var t = this._get(n, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(n, t) {
            return this._determineDate(n, this._get(n, t + "Date"), null)
        },
        _getDaysInMonth: function(n, t) {
            return 32 - this._daylightSavingAdjust(new Date(n,t,32)).getDate()
        },
        _getFirstDayOfMonth: function(n, t) {
            return new Date(n,t,1).getDay()
        },
        _canAdjustMonth: function(n, t, i, r) {
            var f = this._getNumberOfMonths(n)
              , u = this._daylightSavingAdjust(new Date(i,r + (0 > t ? t : f[0] * f[1]),1));
            return 0 > t && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth())),
            this._isInRange(n, u)
        },
        _isInRange: function(n, t) {
            var i, f, e = this._getMinMaxDate(n, "min"), o = this._getMinMaxDate(n, "max"), r = null, u = null, s = this._get(n, "yearRange");
            return s && (i = s.split(":"),
            f = (new Date).getFullYear(),
            r = parseInt(i[0], 10),
            u = parseInt(i[1], 10),
            i[0].match(/[+\-].*/) && (r += f),
            i[1].match(/[+\-].*/) && (u += f)),
            (!e || t.getTime() >= e.getTime()) && (!o || t.getTime() <= o.getTime()) && (!r || t.getFullYear() >= r) && (!u || u >= t.getFullYear())
        },
        _getFormatConfig: function(n) {
            var t = this._get(n, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10),
            {
                shortYearCutoff: t,
                dayNamesShort: this._get(n, "dayNamesShort"),
                dayNames: this._get(n, "dayNames"),
                monthNamesShort: this._get(n, "monthNamesShort"),
                monthNames: this._get(n, "monthNames")
            }
        },
        _formatDate: function(n, t, i, r) {
            t || (n.currentDay = n.selectedDay,
            n.currentMonth = n.selectedMonth,
            n.currentYear = n.selectedYear);
            var u = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(r,i,t)) : this._daylightSavingAdjust(new Date(n.currentYear,n.currentMonth,n.currentDay));
            return this.formatDate(this._get(n, "dateFormat"), u, this._getFormatConfig(n))
        }
    });
    n.fn.datepicker = function(t) {
        if (!this.length)
            return this;
        n.datepicker.initialized || (n(document).on("mousedown", n.datepicker._checkExternalClick),
        n.datepicker.initialized = !0);
        0 === n("#" + n.datepicker._mainDivId).length && n("body").append(n.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof t ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t)
        }) : n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i))
    }
    ;
    n.datepicker = new c;
    n.datepicker.initialized = !1;
    n.datepicker.uuid = (new Date).getTime();
    n.datepicker.version = "1.12.1";
    n.datepicker;
    n.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var i = n(this).css(t).offset().top;
                    0 > i && n(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle = this.element.attr("title");
            null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle);
            this.options.disabled && (this.options.disabled = !1);
            this._createWrapper();
            this.element.show().removeAttr("title").appendTo(this.uiDialog);
            this._addClass("ui-dialog-content", "ui-widget-content");
            this._createTitlebar();
            this._createButtonPane();
            this.options.draggable && n.fn.draggable && this._makeDraggable();
            this.options.resizable && n.fn.resizable && this._makeResizable();
            this._isOpen = !1;
            this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? n(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function() {
            var n, t = this.originalPosition;
            this._untrackInstance();
            this._destroyOverlay();
            this.element.removeUniqueId().css(this.originalCss).detach();
            this.uiDialog.remove();
            this.originalTitle && this.element.attr("title", this.originalTitle);
            n = t.parent.children().eq(t.index);
            n.length && n[0] !== this.element[0] ? n.before(this.element) : t.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: n.noop,
        enable: n.noop,
        close: function(t) {
            var i = this;
            this._isOpen && this._trigger("beforeClose", t) !== !1 && (this._isOpen = !1,
            this._focusedElement = null,
            this._destroyOverlay(),
            this._untrackInstance(),
            this.opener.filter(":focusable").trigger("focus").length || n.ui.safeBlur(n.ui.safeActiveElement(this.document[0])),
            this._hide(this.uiDialog, this.options.hide, function() {
                i._trigger("close", t)
            }))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, i) {
            var r = !1
              , f = this.uiDialog.siblings(".ui-front:visible").map(function() {
                return +n(this).css("z-index")
            }).get()
              , u = Math.max.apply(null, f);
            return u >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", u + 1),
            r = !0),
            r && !i && this._trigger("focus", t),
            r
        },
        open: function() {
            var t = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(),
            void 0) : (this._isOpen = !0,
            this.opener = n(n.ui.safeActiveElement(this.document[0])),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
            this._show(this.uiDialog, this.options.show, function() {
                t._focusTabbable();
                t._trigger("focus")
            }),
            this._makeFocusTarget(),
            this._trigger("open"),
            void 0)
        },
        _focusTabbable: function() {
            var n = this._focusedElement;
            n || (n = this.element.find("[autofocus]"));
            n.length || (n = this.element.find(":tabbable"));
            n.length || (n = this.uiDialogButtonPane.find(":tabbable"));
            n.length || (n = this.uiDialogTitlebarClose.filter(":tabbable"));
            n.length || (n = this.uiDialog);
            n.eq(0).trigger("focus")
        },
        _keepFocus: function(t) {
            function i() {
                var t = n.ui.safeActiveElement(this.document[0])
                  , i = this.uiDialog[0] === t || n.contains(this.uiDialog[0], t);
                i || this._focusTabbable()
            }
            t.preventDefault();
            i.call(this);
            this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = n("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo());
            this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front");
            this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === n.ui.keyCode.ESCAPE)
                        return t.preventDefault(),
                        this.close(t),
                        void 0;
                    if (t.keyCode === n.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable")
                          , r = i.filter(":first")
                          , u = i.filter(":last");
                        t.target !== u[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== r[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function() {
                            u.trigger("focus")
                        }),
                        t.preventDefault()) : (this._delay(function() {
                            r.trigger("focus")
                        }),
                        t.preventDefault())
                    }
                },
                mousedown: function(n) {
                    this._moveToTop(n) && this._focusTabbable()
                }
            });
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = n("<div>");
            this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix");
            this._on(this.uiDialogTitlebar, {
                mousedown: function(t) {
                    n(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            });
            this.uiDialogTitlebarClose = n("<button type='button'><\/button>").button({
                label: n("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar);
            this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close");
            this._on(this.uiDialogTitlebarClose, {
                click: function(n) {
                    n.preventDefault();
                    this.close(n)
                }
            });
            t = n("<span>").uniqueId().prependTo(this.uiDialogTitlebar);
            this._addClass(t, "ui-dialog-title");
            this._title(t);
            this.uiDialogTitlebar.prependTo(this.uiDialog);
            this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function(n) {
            this.options.title ? n.text(this.options.title) : n.html("&#160;")
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = n("<div>");
            this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = n("<div>").appendTo(this.uiDialogButtonPane);
            this._addClass(this.uiButtonSet, "ui-dialog-buttonset");
            this._createButtons()
        },
        _createButtons: function() {
            var i = this
              , t = this.options.buttons;
            return this.uiDialogButtonPane.remove(),
            this.uiButtonSet.empty(),
            n.isEmptyObject(t) || n.isArray(t) && !t.length ? (this._removeClass(this.uiDialog, "ui-dialog-buttons"),
            void 0) : (n.each(t, function(t, r) {
                var u, f;
                r = n.isFunction(r) ? {
                    click: r,
                    text: t
                } : r;
                r = n.extend({
                    type: "button"
                }, r);
                u = r.click;
                f = {
                    icon: r.icon,
                    iconPosition: r.iconPosition,
                    showLabel: r.showLabel,
                    icons: r.icons,
                    text: r.text
                };
                delete r.click;
                delete r.icon;
                delete r.iconPosition;
                delete r.showLabel;
                delete r.icons;
                "boolean" == typeof r.text && delete r.text;
                n("<button><\/button>", r).button(f).appendTo(i.uiButtonSet).on("click", function() {
                    u.apply(i.element[0], arguments)
                })
            }),
            this._addClass(this.uiDialog, "ui-dialog-buttons"),
            this.uiDialogButtonPane.appendTo(this.uiDialog),
            void 0)
        },
        _makeDraggable: function() {
            function i(n) {
                return {
                    position: n.position,
                    offset: n.offset
                }
            }
            var t = this
              , r = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(r, u) {
                    t._addClass(n(this), "ui-dialog-dragging");
                    t._blockFrames();
                    t._trigger("dragStart", r, i(u))
                },
                drag: function(n, r) {
                    t._trigger("drag", n, i(r))
                },
                stop: function(u, f) {
                    var e = f.offset.left - t.document.scrollLeft()
                      , o = f.offset.top - t.document.scrollTop();
                    r.position = {
                        my: "left top",
                        at: "left" + (e >= 0 ? "+" : "") + e + " top" + (o >= 0 ? "+" : "") + o,
                        of: t.window
                    };
                    t._removeClass(n(this), "ui-dialog-dragging");
                    t._unblockFrames();
                    t._trigger("dragStop", u, i(f))
                }
            })
        },
        _makeResizable: function() {
            function r(n) {
                return {
                    originalPosition: n.originalPosition,
                    originalSize: n.originalSize,
                    position: n.position,
                    size: n.size
                }
            }
            var t = this
              , i = this.options
              , u = i.resizable
              , f = this.uiDialog.css("position")
              , e = "string" == typeof u ? u : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: i.maxWidth,
                maxHeight: i.maxHeight,
                minWidth: i.minWidth,
                minHeight: this._minHeight(),
                handles: e,
                start: function(i, u) {
                    t._addClass(n(this), "ui-dialog-resizing");
                    t._blockFrames();
                    t._trigger("resizeStart", i, r(u))
                },
                resize: function(n, i) {
                    t._trigger("resize", n, r(i))
                },
                stop: function(u, f) {
                    var e = t.uiDialog.offset()
                      , o = e.left - t.document.scrollLeft()
                      , s = e.top - t.document.scrollTop();
                    i.height = t.uiDialog.height();
                    i.width = t.uiDialog.width();
                    i.position = {
                        my: "left top",
                        at: "left" + (o >= 0 ? "+" : "") + o + " top" + (s >= 0 ? "+" : "") + s,
                        of: t.window
                    };
                    t._removeClass(n(this), "ui-dialog-resizing");
                    t._unblockFrames();
                    t._trigger("resizeStop", u, r(f))
                }
            }).css("position", f)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(t) {
                    this._makeFocusTarget();
                    this._focusedElement = n(t.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance();
            this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var t = this._trackingInstances()
              , i = n.inArray(this, t);
            -1 !== i && t.splice(i, 1)
        },
        _trackingInstances: function() {
            var n = this.document.data("ui-dialog-instances");
            return n || (n = [],
            this.document.data("ui-dialog-instances", n)),
            n
        },
        _minHeight: function() {
            var n = this.options;
            return "auto" === n.height ? n.minHeight : Math.min(n.minHeight, n.height)
        },
        _position: function() {
            var n = this.uiDialog.is(":visible");
            n || this.uiDialog.show();
            this.uiDialog.position(this.options.position);
            n || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var i = this
              , r = !1
              , u = {};
            n.each(t, function(n, t) {
                i._setOption(n, t);
                n in i.sizeRelatedOptions && (r = !0);
                n in i.resizableRelatedOptions && (u[n] = t)
            });
            r && (this._size(),
            this._position());
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", u)
        },
        _setOption: function(t, i) {
            var f, u, r = this.uiDialog;
            "disabled" !== t && (this._super(t, i),
            "appendTo" === t && this.uiDialog.appendTo(this._appendTo()),
            "buttons" === t && this._createButtons(),
            "closeText" === t && this.uiDialogTitlebarClose.button({
                label: n("<a>").text("" + this.options.closeText).html()
            }),
            "draggable" === t && (f = r.is(":data(ui-draggable)"),
            f && !i && r.draggable("destroy"),
            !f && i && this._makeDraggable()),
            "position" === t && this._position(),
            "resizable" === t && (u = r.is(":data(ui-resizable)"),
            u && !i && r.resizable("destroy"),
            u && "string" == typeof i && r.resizable("option", "handles", i),
            u || i === !1 || this._makeResizable()),
            "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var t, i, r, n = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });
            n.minWidth > n.width && (n.width = n.minWidth);
            t = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight();
            i = Math.max(0, n.minHeight - t);
            r = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none";
            "auto" === n.height ? this.element.css({
                minHeight: i,
                maxHeight: r,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - t));
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var t = n(this);
                return n("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _allowInteraction: function(t) {
            return n(t.target).closest(".ui-dialog").length ? !0 : !!n(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var t = !0;
                this._delay(function() {
                    t = !1
                });
                this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(n) {
                        t || this._allowInteraction(n) || (n.preventDefault(),
                        this._trackingInstances()[0]._focusTabbable())
                    }
                });
                this.overlay = n("<div>").appendTo(this._appendTo());
                this._addClass(this.overlay, null, "ui-widget-overlay ui-front");
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                });
                this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var n = this.document.data("ui-dialog-overlays") - 1;
                n ? this.document.data("ui-dialog-overlays", n) : (this._off(this.document, "focusin"),
                this.document.removeData("ui-dialog-overlays"));
                this.overlay.remove();
                this.overlay = null
            }
        }
    });
    n.uiBackCompat !== !1 && n.widget("ui.dialog", n.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function() {
            this._super();
            this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function(n, t) {
            "dialogClass" === n && this.uiDialog.removeClass(this.options.dialogClass).addClass(t);
            this._superApply(arguments)
        }
    });
    n.ui.dialog;
    n.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue();
            this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            });
            this._addClass("ui-progressbar", "ui-widget ui-widget-content");
            this.valueDiv = n("<div>").appendTo(this.element);
            this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header");
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");
            this.valueDiv.remove()
        },
        value: function(n) {
            return void 0 === n ? this.options.value : (this.options.value = this._constrainedValue(n),
            this._refreshValue(),
            void 0)
        },
        _constrainedValue: function(n) {
            return void 0 === n && (n = this.options.value),
            this.indeterminate = n === !1,
            "number" != typeof n && (n = 0),
            this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, n))
        },
        _setOptions: function(n) {
            var t = n.value;
            delete n.value;
            this._super(n);
            this.options.value = this._constrainedValue(t);
            this._refreshValue()
        },
        _setOption: function(n, t) {
            "max" === n && (t = Math.max(this.min, t));
            this._super(n, t)
        },
        _setOptionDisabled: function(n) {
            this._super(n);
            this.element.attr("aria-disabled", n);
            this._toggleClass(null, "ui-state-disabled", !!n)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var t = this.options.value
              , i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).width(i.toFixed(0) + "%");
            this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate);
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"),
            this.overlayDiv || (this.overlayDiv = n("<div>").appendTo(this.valueDiv),
            this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }),
            this.overlayDiv && (this.overlayDiv.remove(),
            this.overlayDiv = null));
            this.oldValue !== t && (this.oldValue = t,
            this._trigger("change"));
            t === this.options.max && this._trigger("complete")
        }
    });
    n.widget("ui.selectmenu", [n.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var t = this.element.uniqueId().attr("id");
            this.ids = {
                element: t,
                button: t + "-button",
                menu: t + "-menu"
            };
            this._drawButton();
            this._drawMenu();
            this._bindFormResetHandler();
            this._rendered = !1;
            this.menuItems = n()
        },
        _drawButton: function() {
            var t, i = this, r = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button);
            this._on(this.labels, {
                click: function(n) {
                    this.button.focus();
                    n.preventDefault()
                }
            });
            this.element.hide();
            this.button = n("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element);
            this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget");
            t = n("<span>").appendTo(this.button);
            this._addClass(t, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button);
            this.buttonItem = this._renderButtonItem(r).appendTo(this.button);
            this.options.width !== !1 && this._resizeButton();
            this._on(this.button, this._buttonEvents);
            this.button.one("focusin", function() {
                i._rendered || i._refreshMenu()
            })
        },
        _drawMenu: function() {
            var t = this;
            this.menu = n("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            });
            this.menuWrap = n("<div>").append(this.menu);
            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front");
            this.menuWrap.appendTo(this._appendTo());
            this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(n, i) {
                    n.preventDefault();
                    t._setSelection();
                    t._select(i.item.data("ui-selectmenu-item"), n)
                },
                focus: function(n, i) {
                    var r = i.item.data("ui-selectmenu-item");
                    null != t.focusIndex && r.index !== t.focusIndex && (t._trigger("focus", n, {
                        item: r
                    }),
                    t.isOpen || t._select(r, n));
                    t.focusIndex = r.index;
                    t.button.attr("aria-activedescendant", t.menuItems.eq(r.index).attr("id"))
                }
            }).menu("instance");
            this.menuInstance._off(this.menu, "mouseleave");
            this.menuInstance._closeOnDocumentClick = function() {
                return !1
            }
            ;
            this.menuInstance._isDivider = function() {
                return !1
            }
        },
        refresh: function() {
            this._refreshMenu();
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {}));
            null === this.options.width && this._resizeButton()
        },
        _refreshMenu: function() {
            var n, t = this.element.find("option");
            this.menu.empty();
            this._parseOptions(t);
            this._renderMenu(this.menu, this.items);
            this.menuInstance.refresh();
            this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper");
            this._rendered = !0;
            t.length && (n = this._getSelectedItem(),
            this.menuInstance.focus(null, n),
            this._setAria(n.data("ui-selectmenu-item")),
            this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(n) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"),
            this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(),
            this.menuItems.length && (this.isOpen = !0,
            this._toggleAttr(),
            this._resizeMenu(),
            this._position(),
            this._on(this.document, this._documentClick),
            this._trigger("open", n)))
        },
        _position: function() {
            this.menuWrap.position(n.extend({
                of: this.button
            }, this.options.position))
        },
        close: function(n) {
            this.isOpen && (this.isOpen = !1,
            this._toggleAttr(),
            this.range = null,
            this._off(this.document),
            this._trigger("close", n))
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderButtonItem: function(t) {
            var i = n("<span>");
            return this._setText(i, t.label),
            this._addClass(i, "ui-selectmenu-text"),
            i
        },
        _renderMenu: function(t, i) {
            var r = this
              , u = "";
            n.each(i, function(i, f) {
                var e;
                f.optgroup !== u && (e = n("<li>", {
                    text: f.optgroup
                }),
                r._addClass(e, "ui-selectmenu-optgroup", "ui-menu-divider" + (f.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")),
                e.appendTo(t),
                u = f.optgroup);
                r._renderItemData(t, f)
            })
        },
        _renderItemData: function(n, t) {
            return this._renderItem(n, t).data("ui-selectmenu-item", t)
        },
        _renderItem: function(t, i) {
            var r = n("<li>")
              , u = n("<div>", {
                title: i.element.attr("title")
            });
            return i.disabled && this._addClass(r, null, "ui-state-disabled"),
            this._setText(u, i.label),
            r.append(u).appendTo(t)
        },
        _setText: function(n, t) {
            t ? n.text(t) : n.html("&#160;")
        },
        _move: function(n, t) {
            var i, r, u = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"),
            u += ":not(.ui-state-disabled)");
            r = "first" === n || "last" === n ? i["first" === n ? "prevAll" : "nextAll"](u).eq(-1) : i[n + "All"](u).eq(0);
            r.length && this.menuInstance.focus(t, r)
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
        },
        _toggle: function(n) {
            this[this.isOpen ? "close" : "open"](n)
        },
        _setSelection: function() {
            var n;
            this.range && (window.getSelection ? (n = window.getSelection(),
            n.removeAllRanges(),
            n.addRange(this.range)) : this.range.select(),
            this.button.focus())
        },
        _documentClick: {
            mousedown: function(t) {
                this.isOpen && (n(t.target).closest(".ui-selectmenu-menu, #" + n.ui.escapeSelector(this.ids.button)).length || this.close(t))
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var n;
                window.getSelection ? (n = window.getSelection(),
                n.rangeCount && (this.range = n.getRangeAt(0))) : this.range = document.selection.createRange()
            },
            click: function(n) {
                this._setSelection();
                this._toggle(n)
            },
            keydown: function(t) {
                var i = !0;
                switch (t.keyCode) {
                case n.ui.keyCode.TAB:
                case n.ui.keyCode.ESCAPE:
                    this.close(t);
                    i = !1;
                    break;
                case n.ui.keyCode.ENTER:
                    this.isOpen && this._selectFocusedItem(t);
                    break;
                case n.ui.keyCode.UP:
                    t.altKey ? this._toggle(t) : this._move("prev", t);
                    break;
                case n.ui.keyCode.DOWN:
                    t.altKey ? this._toggle(t) : this._move("next", t);
                    break;
                case n.ui.keyCode.SPACE:
                    this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                    break;
                case n.ui.keyCode.LEFT:
                    this._move("prev", t);
                    break;
                case n.ui.keyCode.RIGHT:
                    this._move("next", t);
                    break;
                case n.ui.keyCode.HOME:
                case n.ui.keyCode.PAGE_UP:
                    this._move("first", t);
                    break;
                case n.ui.keyCode.END:
                case n.ui.keyCode.PAGE_DOWN:
                    this._move("last", t);
                    break;
                default:
                    this.menu.trigger(t);
                    i = !1
                }
                i && t.preventDefault()
            }
        },
        _selectFocusedItem: function(n) {
            var t = this.menuItems.eq(this.focusIndex).parent("li");
            t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), n)
        },
        _select: function(n, t) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = n.index;
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(n));
            this._setAria(n);
            this._trigger("select", t, {
                item: n
            });
            n.index !== i && this._trigger("change", t, {
                item: n
            });
            this.close(t)
        },
        _setAria: function(n) {
            var t = this.menuItems.eq(n.index).attr("id");
            this.button.attr({
                "aria-labelledby": t,
                "aria-activedescendant": t
            });
            this.menu.attr("aria-activedescendant", t)
        },
        _setOption: function(n, t) {
            if ("icons" === n) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, t.button)
            }
            this._super(n, t);
            "appendTo" === n && this.menuWrap.appendTo(this._appendTo());
            "width" === n && this._resizeButton()
        },
        _setOptionDisabled: function(n) {
            this._super(n);
            this.menuInstance.option("disabled", n);
            this.button.attr("aria-disabled", n);
            this._toggleClass(this.button, null, "ui-state-disabled", n);
            this.element.prop("disabled", n);
            n ? (this.button.attr("tabindex", -1),
            this.close()) : this.button.attr("tabindex", 0)
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)),
            t && t[0] || (t = this.element.closest(".ui-front, dialog")),
            t.length || (t = this.document[0].body),
            t
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen);
            this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen);
            this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function() {
            var n = this.options.width;
            return n === !1 ? (this.button.css("width", ""),
            void 0) : (null === n && (n = this.element.show().outerWidth(),
            this.element.hide()),
            this.button.outerWidth(n),
            void 0)
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            var n = this._super();
            return n.disabled = this.element.prop("disabled"),
            n
        },
        _parseOptions: function(t) {
            var r = this
              , i = [];
            t.each(function(t, u) {
                i.push(r._parseOption(n(u), t))
            });
            this.items = i
        },
        _parseOption: function(n, t) {
            var i = n.parent("optgroup");
            return {
                element: n,
                index: t,
                value: n.val(),
                label: n.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || n.prop("disabled")
            }
        },
        _destroy: function() {
            this._unbindFormResetHandler();
            this.menuWrap.remove();
            this.button.remove();
            this.element.show();
            this.element.removeUniqueId();
            this.labels.attr("for", this.ids.element)
        }
    }]);
    n.widget("ui.slider", n.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1;
            this._mouseSliding = !1;
            this._animateOff = !0;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();
            this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content");
            this._refresh();
            this._animateOff = !1
        },
        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },
        _createHandles: function() {
            var r, i, u = this.options, t = this.element.find(".ui-slider-handle"), f = [];
            for (i = u.values && u.values.length || 1,
            t.length > i && (t.slice(i).remove(),
            t = t.slice(0, i)),
            r = t.length; i > r; r++)
                f.push("<span tabindex='0'><\/span>");
            this.handles = t.add(n(f.join("")).appendTo(this.element));
            this._addClass(this.handles, "ui-slider-handle", "ui-state-default");
            this.handle = this.handles.eq(0);
            this.handles.each(function(t) {
                n(this).data("ui-slider-handle-index", t).attr("tabIndex", 0)
            })
        },
        _createRange: function() {
            var t = this.options;
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : n.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]),
            this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"),
            this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = n("<div>").appendTo(this.element),
            this._addClass(this.range, "ui-slider-range")),
            ("min" === t.range || "max" === t.range) && this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(),
            this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove();
            this.range && this.range.remove();
            this._mouseDestroy()
        },
        _mouseCapture: function(t) {
            var s, f, r, i, u, h, e, c, o = this, l = this.options;
            return l.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            },
            this.elementOffset = this.element.offset(),
            s = {
                x: t.pageX,
                y: t.pageY
            },
            f = this._normValueFromMouse(s),
            r = this._valueMax() - this._valueMin() + 1,
            this.handles.each(function(t) {
                var e = Math.abs(f - o.values(t));
                (r > e || r === e && (t === o._lastChangedValue || o.values(t) === l.min)) && (r = e,
                i = n(this),
                u = t)
            }),
            h = this._start(t, u),
            h === !1 ? !1 : (this._mouseSliding = !0,
            this._handleIndex = u,
            this._addClass(i, null, "ui-state-active"),
            i.trigger("focus"),
            e = i.offset(),
            c = !n(t.target).parents().addBack().is(".ui-slider-handle"),
            this._clickOffset = c ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - e.left - i.width() / 2,
                top: t.pageY - e.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
            },
            this.handles.hasClass("ui-state-hover") || this._slide(t, u, f),
            this._animateOff = !0,
            !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(n) {
            var t = {
                x: n.pageX,
                y: n.pageY
            }
              , i = this._normValueFromMouse(t);
            return this._slide(n, this._handleIndex, i),
            !1
        },
        _mouseStop: function(n) {
            return this._removeClass(this.handles, null, "ui-state-active"),
            this._mouseSliding = !1,
            this._stop(n, this._handleIndex),
            this._change(n, this._handleIndex),
            this._handleIndex = null,
            this._clickOffset = null,
            this._animateOff = !1,
            !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(n) {
            var i, r, t, u, f;
            return "horizontal" === this.orientation ? (i = this.elementSize.width,
            r = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height,
            r = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
            t = r / i,
            t > 1 && (t = 1),
            0 > t && (t = 0),
            "vertical" === this.orientation && (t = 1 - t),
            u = this._valueMax() - this._valueMin(),
            f = this._valueMin() + t * u,
            this._trimAlignValue(f)
        },
        _uiHash: function(n, t, i) {
            var r = {
                handle: this.handles[n],
                handleIndex: n,
                value: void 0 !== t ? t : this.value()
            };
            return this._hasMultipleValues() && (r.value = void 0 !== t ? t : this.values(n),
            r.values = i || this.values()),
            r
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length
        },
        _start: function(n, t) {
            return this._trigger("start", n, this._uiHash(t))
        },
        _slide: function(n, t, i) {
            var u, r, f = this.value(), e = this.values();
            this._hasMultipleValues() && (r = this.values(t ? 0 : 1),
            f = this.values(t),
            2 === this.options.values.length && this.options.range === !0 && (i = 0 === t ? Math.min(r, i) : Math.max(r, i)),
            e[t] = i);
            i !== f && (u = this._trigger("slide", n, this._uiHash(t, i, e)),
            u !== !1 && (this._hasMultipleValues() ? this.values(t, i) : this.value(i)))
        },
        _stop: function(n, t) {
            this._trigger("stop", n, this._uiHash(t))
        },
        _change: function(n, t) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = t,
            this._trigger("change", n, this._uiHash(t)))
        },
        value: function(n) {
            return arguments.length ? (this.options.value = this._trimAlignValue(n),
            this._refreshValue(),
            this._change(null, 0),
            void 0) : this._value()
        },
        values: function(t, i) {
            var u, f, r;
            if (arguments.length > 1)
                return this.options.values[t] = this._trimAlignValue(i),
                this._refreshValue(),
                this._change(null, t),
                void 0;
            if (!arguments.length)
                return this._values();
            if (!n.isArray(arguments[0]))
                return this._hasMultipleValues() ? this._values(t) : this.value();
            for (u = this.options.values,
            f = arguments[0],
            r = 0; u.length > r; r += 1)
                u[r] = this._trimAlignValue(f[r]),
                this._change(null, r);
            this._refreshValue()
        },
        _setOption: function(t, i) {
            var r, u = 0;
            switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0),
            this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1),
            this.options.values = null)),
            n.isArray(this.options.values) && (u = this.options.values.length),
            this._super(t, i),
            t) {
            case "orientation":
                this._detectOrientation();
                this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation);
                this._refreshValue();
                this.options.range && this._refreshRange(i);
                this.handles.css("horizontal" === i ? "bottom" : "left", "");
                break;
            case "value":
                this._animateOff = !0;
                this._refreshValue();
                this._change(null, 0);
                this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0,
                this._refreshValue(),
                r = u - 1; r >= 0; r--)
                    this._change(null, r);
                this._animateOff = !1;
                break;
            case "step":
            case "min":
            case "max":
                this._animateOff = !0;
                this._calculateNewMax();
                this._refreshValue();
                this._animateOff = !1;
                break;
            case "range":
                this._animateOff = !0;
                this._refresh();
                this._animateOff = !1
            }
        },
        _setOptionDisabled: function(n) {
            this._super(n);
            this._toggleClass(null, "ui-state-disabled", !!n)
        },
        _value: function() {
            var n = this.options.value;
            return this._trimAlignValue(n)
        },
        _values: function(n) {
            var r, t, i;
            if (arguments.length)
                return r = this.options.values[n],
                r = this._trimAlignValue(r);
            if (this._hasMultipleValues()) {
                for (t = this.options.values.slice(),
                i = 0; t.length > i; i += 1)
                    t[i] = this._trimAlignValue(t[i]);
                return t
            }
            return []
        },
        _trimAlignValue: function(n) {
            if (this._valueMin() >= n)
                return this._valueMin();
            if (n >= this._valueMax())
                return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1
              , i = (n - this._valueMin()) % t
              , r = n - i;
            return 2 * Math.abs(i) >= t && (r += i > 0 ? t : -t),
            parseFloat(r.toFixed(5))
        },
        _calculateNewMax: function() {
            var n = this.options.max
              , i = this._valueMin()
              , t = this.options.step
              , r = Math.round((n - i) / t) * t;
            n = r + i;
            n > this.options.max && (n -= t);
            this.max = parseFloat(n.toFixed(this._precision()))
        },
        _precision: function() {
            var n = this._precisionOf(this.options.step);
            return null !== this.options.min && (n = Math.max(n, this._precisionOf(this.options.min))),
            n
        },
        _precisionOf: function(n) {
            var t = "" + n
              , i = t.indexOf(".");
            return -1 === i ? 0 : t.length - i - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshRange: function(n) {
            "vertical" === n && this.range.css({
                width: "",
                left: ""
            });
            "horizontal" === n && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function() {
            var s, t, c, f, h, e = this.options.range, i = this.options, r = this, u = this._animateOff ? !1 : i.animate, o = {};
            this._hasMultipleValues() ? this.handles.each(function(f) {
                t = 100 * ((r.values(f) - r._valueMin()) / (r._valueMax() - r._valueMin()));
                o["horizontal" === r.orientation ? "left" : "bottom"] = t + "%";
                n(this).stop(1, 1)[u ? "animate" : "css"](o, i.animate);
                r.options.range === !0 && ("horizontal" === r.orientation ? (0 === f && r.range.stop(1, 1)[u ? "animate" : "css"]({
                    left: t + "%"
                }, i.animate),
                1 === f && r.range[u ? "animate" : "css"]({
                    width: t - s + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                })) : (0 === f && r.range.stop(1, 1)[u ? "animate" : "css"]({
                    bottom: t + "%"
                }, i.animate),
                1 === f && r.range[u ? "animate" : "css"]({
                    height: t - s + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                })));
                s = t
            }) : (c = this.value(),
            f = this._valueMin(),
            h = this._valueMax(),
            t = h !== f ? 100 * ((c - f) / (h - f)) : 0,
            o["horizontal" === this.orientation ? "left" : "bottom"] = t + "%",
            this.handle.stop(1, 1)[u ? "animate" : "css"](o, i.animate),
            "min" === e && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                width: t + "%"
            }, i.animate),
            "max" === e && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                width: 100 - t + "%"
            }, i.animate),
            "min" === e && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                height: t + "%"
            }, i.animate),
            "max" === e && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                height: 100 - t + "%"
            }, i.animate))
        },
        _handleEvents: {
            keydown: function(t) {
                var e, r, i, u, f = n(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                case n.ui.keyCode.HOME:
                case n.ui.keyCode.END:
                case n.ui.keyCode.PAGE_UP:
                case n.ui.keyCode.PAGE_DOWN:
                case n.ui.keyCode.UP:
                case n.ui.keyCode.RIGHT:
                case n.ui.keyCode.DOWN:
                case n.ui.keyCode.LEFT:
                    if (t.preventDefault(),
                    !this._keySliding && (this._keySliding = !0,
                    this._addClass(n(t.target), null, "ui-state-active"),
                    e = this._start(t, f),
                    e === !1))
                        return
                }
                switch (u = this.options.step,
                r = i = this._hasMultipleValues() ? this.values(f) : this.value(),
                t.keyCode) {
                case n.ui.keyCode.HOME:
                    i = this._valueMin();
                    break;
                case n.ui.keyCode.END:
                    i = this._valueMax();
                    break;
                case n.ui.keyCode.PAGE_UP:
                    i = this._trimAlignValue(r + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case n.ui.keyCode.PAGE_DOWN:
                    i = this._trimAlignValue(r - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;
                case n.ui.keyCode.UP:
                case n.ui.keyCode.RIGHT:
                    if (r === this._valueMax())
                        return;
                    i = this._trimAlignValue(r + u);
                    break;
                case n.ui.keyCode.DOWN:
                case n.ui.keyCode.LEFT:
                    if (r === this._valueMin())
                        return;
                    i = this._trimAlignValue(r - u)
                }
                this._slide(t, f, i)
            },
            keyup: function(t) {
                var i = n(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1,
                this._stop(t, i),
                this._change(t, i),
                this._removeClass(n(t.target), null, "ui-state-active"))
            }
        }
    });
    n.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step);
            "" !== this.value() && this._value(this.element.val(), !0);
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var t = this._super()
              , i = this.element;
            return n.each(["min", "max", "step"], function(n, r) {
                var u = i.attr(r);
                null != u && u.length && (t[r] = u)
            }),
            t
        },
        _events: {
            keydown: function(n) {
                this._start(n) && this._keydown(n) && n.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(n) {
                return this.cancelBlur ? (delete this.cancelBlur,
                void 0) : (this._stop(),
                this._refresh(),
                this.previous !== this.element.val() && this._trigger("change", n),
                void 0)
            },
            mousewheel: function(n, t) {
                if (t) {
                    if (!this.spinning && !this._start(n))
                        return !1;
                    this._spin((t > 0 ? 1 : -1) * this.options.step, n);
                    clearTimeout(this.mousewheelTimer);
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(n)
                    }, 100);
                    n.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(t) {
                function r() {
                    var t = this.element[0] === n.ui.safeActiveElement(this.document[0]);
                    t || (this.element.trigger("focus"),
                    this.previous = i,
                    this._delay(function() {
                        this.previous = i
                    }))
                }
                var i;
                i = this.element[0] === n.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val();
                t.preventDefault();
                r.call(this);
                this.cancelBlur = !0;
                this._delay(function() {
                    delete this.cancelBlur;
                    r.call(this)
                });
                this._start(t) !== !1 && this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(t) {
                if (n(t.currentTarget).hasClass("ui-state-active"))
                    return this._start(t) === !1 ? !1 : (this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t),
                    void 0)
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a><\/a><a><\/a>")
        },
        _draw: function() {
            this._enhance();
            this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content");
            this._addClass("ui-spinner-input");
            this.element.attr("role", "spinbutton");
            this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                classes: {
                    "ui-button": ""
                }
            });
            this._removeClass(this.buttons, "ui-corner-all");
            this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up");
            this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down");
            this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            });
            this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            });
            this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
        },
        _keydown: function(t) {
            var r = this.options
              , i = n.ui.keyCode;
            switch (t.keyCode) {
            case i.UP:
                return this._repeat(null, 1, t),
                !0;
            case i.DOWN:
                return this._repeat(null, -1, t),
                !0;
            case i.PAGE_UP:
                return this._repeat(null, r.page, t),
                !0;
            case i.PAGE_DOWN:
                return this._repeat(null, -r.page, t),
                !0
            }
            return !1
        },
        _start: function(n) {
            return this.spinning || this._trigger("start", n) !== !1 ? (this.counter || (this.counter = 1),
            this.spinning = !0,
            !0) : !1
        },
        _repeat: function(n, t, i) {
            n = n || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                this._repeat(40, t, i)
            }, n);
            this._spin(t * this.options.step, i)
        },
        _spin: function(n, t) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1);
            i = this._adjustValue(i + n * this._increment(this.counter));
            this.spinning && this._trigger("spin", t, {
                value: i
            }) === !1 || (this._value(i),
            this.counter++)
        },
        _increment: function(t) {
            var i = this.options.incremental;
            return i ? n.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function() {
            var n = this._precisionOf(this.options.step);
            return null !== this.options.min && (n = Math.max(n, this._precisionOf(this.options.min))),
            n
        },
        _precisionOf: function(n) {
            var t = "" + n
              , i = t.indexOf(".");
            return -1 === i ? 0 : t.length - i - 1
        },
        _adjustValue: function(n) {
            var r, i, t = this.options;
            return r = null !== t.min ? t.min : 0,
            i = n - r,
            i = Math.round(i / t.step) * t.step,
            n = r + i,
            n = parseFloat(n.toFixed(this._precision())),
            null !== t.max && n > t.max ? t.max : null !== t.min && t.min > n ? t.min : n
        },
        _stop: function(n) {
            this.spinning && (clearTimeout(this.timer),
            clearTimeout(this.mousewheelTimer),
            this.counter = 0,
            this.spinning = !1,
            this._trigger("stop", n))
        },
        _setOption: function(n, t) {
            var u, i, r;
            return "culture" === n || "numberFormat" === n ? (u = this._parse(this.element.val()),
            this.options[n] = t,
            this.element.val(this._format(u)),
            void 0) : (("max" === n || "min" === n || "step" === n) && "string" == typeof t && (t = this._parse(t)),
            "icons" === n && (i = this.buttons.first().find(".ui-icon"),
            this._removeClass(i, null, this.options.icons.up),
            this._addClass(i, null, t.up),
            r = this.buttons.last().find(".ui-icon"),
            this._removeClass(r, null, this.options.icons.down),
            this._addClass(r, null, t.down)),
            this._super(n, t),
            void 0)
        },
        _setOptionDisabled: function(n) {
            this._super(n);
            this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!n);
            this.element.prop("disabled", !!n);
            this.buttons.button(n ? "disable" : "enable")
        },
        _setOptions: t(function(n) {
            this._super(n)
        }),
        _parse: function(n) {
            return "string" == typeof n && "" !== n && (n = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(n, 10, this.options.culture) : +n),
            "" === n || isNaN(n) ? null : n
        },
        _format: function(n) {
            return "" === n ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(n, this.options.numberFormat, this.options.culture) : n
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function() {
            var n = this.value();
            return null === n ? !1 : n === this._adjustValue(n)
        },
        _value: function(n, t) {
            var i;
            "" !== n && (i = this._parse(n),
            null !== i && (t || (i = this._adjustValue(i)),
            n = this._format(i)));
            this.element.val(n);
            this._refresh()
        },
        _destroy: function() {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: t(function(n) {
            this._stepUp(n)
        }),
        _stepUp: function(n) {
            this._start() && (this._spin((n || 1) * this.options.step),
            this._stop())
        },
        stepDown: t(function(n) {
            this._stepDown(n)
        }),
        _stepDown: function(n) {
            this._start() && (this._spin((n || 1) * -this.options.step),
            this._stop())
        },
        pageUp: t(function(n) {
            this._stepUp((n || 1) * this.options.page)
        }),
        pageDown: t(function(n) {
            this._stepDown((n || 1) * this.options.page)
        }),
        value: function(n) {
            return arguments.length ? (t(this._value).call(this, n),
            void 0) : this._parse(this.element.val())
        },
        widget: function() {
            return this.uiSpinner
        }
    });
    n.uiBackCompat !== !1 && n.widget("ui.spinner", n.ui.spinner, {
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
        },
        _uiSpinnerHtml: function() {
            return "<span>"
        },
        _buttonHtml: function() {
            return "<a><\/a><a><\/a>"
        }
    });
    n.ui.spinner;
    n.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var n = /#.*$/;
            return function(t) {
                var i, r;
                i = t.href.replace(n, "");
                r = location.href.replace(n, "");
                try {
                    i = decodeURIComponent(i)
                } catch (u) {}
                try {
                    r = decodeURIComponent(r)
                } catch (u) {}
                return t.hash.length > 1 && i === r
            }
        }(),
        _create: function() {
            var i = this
              , t = this.options;
            this.running = !1;
            this._addClass("ui-tabs", "ui-widget ui-widget-content");
            this._toggleClass("ui-tabs-collapsible", null, t.collapsible);
            this._processTabs();
            t.active = this._initialActive();
            n.isArray(t.disabled) && (t.disabled = n.unique(t.disabled.concat(n.map(this.tabs.filter(".ui-state-disabled"), function(n) {
                return i.tabs.index(n)
            }))).sort());
            this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(t.active) : n();
            this._refresh();
            this.active.length && this.load(t.active)
        },
        _initialActive: function() {
            var t = this.options.active
              , i = this.options.collapsible
              , r = location.hash.substring(1);
            return null === t && (r && this.tabs.each(function(i, u) {
                if (n(u).attr("aria-controls") === r)
                    return (t = i,
                    !1)
            }),
            null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
            (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)),
            t !== !1 && (t = this.tabs.index(this.tabs.eq(t)),
            -1 === t && (t = i ? !1 : 0)),
            !i && t === !1 && this.anchors.length && (t = 0),
            t
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : n()
            }
        },
        _tabKeydown: function(t) {
            var r = n(n.ui.safeActiveElement(this.document[0])).closest("li")
              , i = this.tabs.index(r)
              , u = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                case n.ui.keyCode.RIGHT:
                case n.ui.keyCode.DOWN:
                    i++;
                    break;
                case n.ui.keyCode.UP:
                case n.ui.keyCode.LEFT:
                    u = !1;
                    i--;
                    break;
                case n.ui.keyCode.END:
                    i = this.anchors.length - 1;
                    break;
                case n.ui.keyCode.HOME:
                    i = 0;
                    break;
                case n.ui.keyCode.SPACE:
                    return t.preventDefault(),
                    clearTimeout(this.activating),
                    this._activate(i),
                    void 0;
                case n.ui.keyCode.ENTER:
                    return t.preventDefault(),
                    clearTimeout(this.activating),
                    this._activate(i === this.options.active ? !1 : i),
                    void 0;
                default:
                    return
                }
                t.preventDefault();
                clearTimeout(this.activating);
                i = this._focusNextTab(i, u);
                t.ctrlKey || t.metaKey || (r.attr("aria-selected", "false"),
                this.tabs.eq(i).attr("aria-selected", "true"),
                this.activating = this._delay(function() {
                    this.option("active", i)
                }, this.delay))
            }
        },
        _panelKeydown: function(t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === n.ui.keyCode.UP && (t.preventDefault(),
            this.active.trigger("focus"))
        },
        _handlePageNav: function(t) {
            return t.altKey && t.keyCode === n.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
            !0) : t.altKey && t.keyCode === n.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
            !0) : void 0
        },
        _findNextTab: function(t, i) {
            function u() {
                return t > r && (t = 0),
                0 > t && (t = r),
                t
            }
            for (var r = this.tabs.length - 1; -1 !== n.inArray(u(), this.options.disabled); )
                t = i ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function(n, t) {
            return n = this._findNextTab(n, t),
            this.tabs.eq(n).trigger("focus"),
            n
        },
        _setOption: function(n, t) {
            return "active" === n ? (this._activate(t),
            void 0) : (this._super(n, t),
            "collapsible" === n && (this._toggleClass("ui-tabs-collapsible", null, t),
            t || this.options.active !== !1 || this._activate(0)),
            "event" === n && this._setupEvents(t),
            "heightStyle" === n && this._setupHeightStyle(t),
            void 0)
        },
        _sanitizeSelector: function(n) {
            return n ? n.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var t = this.options
              , i = this.tablist.children(":has(a[href])");
            t.disabled = n.map(i.filter(".ui-state-disabled"), function(n) {
                return i.index(n)
            });
            this._processTabs();
            t.active !== !1 && this.anchors.length ? this.active.length && !n.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1,
            this.active = n()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1,
            this.active = n());
            this._refresh()
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            });
            this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }),
            this._addClass(this.active, "ui-tabs-active", "ui-state-active"),
            this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var t = this
              , i = this.tabs
              , r = this.anchors
              , u = this.panels;
            this.tablist = this._getList().attr("role", "tablist");
            this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header");
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function(t) {
                n(this).is(".ui-state-disabled") && t.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                n(this).closest("li").is(".ui-state-disabled") && this.blur()
            });
            this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            });
            this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default");
            this.anchors = this.tabs.map(function() {
                return n("a", this)[0]
            }).attr({
                role: "presentation",
                tabIndex: -1
            });
            this._addClass(this.anchors, "ui-tabs-anchor");
            this.panels = n();
            this.anchors.each(function(i, r) {
                var f, u, e, s = n(r).uniqueId().attr("id"), o = n(r).closest("li"), h = o.attr("aria-controls");
                t._isLocal(r) ? (f = r.hash,
                e = f.substring(1),
                u = t.element.find(t._sanitizeSelector(f))) : (e = o.attr("aria-controls") || n({}).uniqueId()[0].id,
                f = "#" + e,
                u = t.element.find(f),
                u.length || (u = t._createPanel(e),
                u.insertAfter(t.panels[i - 1] || t.tablist)),
                u.attr("aria-live", "polite"));
                u.length && (t.panels = t.panels.add(u));
                h && o.data("ui-tabs-aria-controls", h);
                o.attr({
                    "aria-controls": e,
                    "aria-labelledby": s
                });
                u.attr("aria-labelledby", s)
            });
            this.panels.attr("role", "tabpanel");
            this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content");
            i && (this._off(i.not(this.tabs)),
            this._off(r.not(this.anchors)),
            this._off(u.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function(t) {
            return n("<div>").attr("id", t).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function(t) {
            var i, u, r;
            for (n.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1),
            r = 0; u = this.tabs[r]; r++)
                i = n(u),
                t === !0 || -1 !== n.inArray(r, t) ? (i.attr("aria-disabled", "true"),
                this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"),
                this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = t;
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, t === !0)
        },
        _setupEvents: function(t) {
            var i = {};
            t && n.each(t.split(" "), function(n, t) {
                i[t] = "_eventHandler"
            });
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(!0, this.anchors, {
                click: function(n) {
                    n.preventDefault()
                }
            });
            this._on(this.anchors, i);
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            });
            this._on(this.panels, {
                keydown: "_panelKeydown"
            });
            this._focusable(this.tabs);
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(t) {
            var i, r = this.element.parent();
            "fill" === t ? (i = r.height(),
            i -= this.element.outerHeight() - this.element.height(),
            this.element.siblings(":visible").each(function() {
                var t = n(this)
                  , r = t.css("position");
                "absolute" !== r && "fixed" !== r && (i -= t.outerHeight(!0))
            }),
            this.element.children().not(this.panels).each(function() {
                i -= n(this).outerHeight(!0)
            }),
            this.panels.each(function() {
                n(this).height(Math.max(0, i - n(this).innerHeight() + n(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (i = 0,
            this.panels.each(function() {
                i = Math.max(i, n(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(t) {
            var u = this.options
              , r = this.active
              , c = n(t.currentTarget)
              , i = c.closest("li")
              , f = i[0] === r[0]
              , e = f && u.collapsible
              , o = e ? n() : this._getPanelForTab(i)
              , s = r.length ? this._getPanelForTab(r) : n()
              , h = {
                oldTab: r,
                oldPanel: s,
                newTab: e ? n() : i,
                newPanel: o
            };
            t.preventDefault();
            i.hasClass("ui-state-disabled") || i.hasClass("ui-tabs-loading") || this.running || f && !u.collapsible || this._trigger("beforeActivate", t, h) === !1 || (u.active = e ? !1 : this.tabs.index(i),
            this.active = f ? n() : i,
            this.xhr && this.xhr.abort(),
            s.length || o.length || n.error("jQuery UI Tabs: Mismatching fragment identifier."),
            o.length && this.load(this.tabs.index(i), t),
            this._toggle(t, h))
        },
        _toggle: function(t, i) {
            function e() {
                r.running = !1;
                r._trigger("activate", t, i)
            }
            function o() {
                r._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active");
                u.length && r.options.show ? r._show(u, r.options.show, e) : (u.show(),
                e())
            }
            var r = this
              , u = i.newPanel
              , f = i.oldPanel;
            this.running = !0;
            f.length && this.options.hide ? this._hide(f, this.options.hide, function() {
                r._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");
                o()
            }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"),
            f.hide(),
            o());
            f.attr("aria-hidden", "true");
            i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            u.length && f.length ? i.oldTab.attr("tabIndex", -1) : u.length && this.tabs.filter(function() {
                return 0 === n(this).attr("tabIndex")
            }).attr("tabIndex", -1);
            u.attr("aria-hidden", "false");
            i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(t) {
            var r, i = this._findActive(t);
            i[0] !== this.active[0] && (i.length || (i = this.active),
            r = i.find(".ui-tabs-anchor")[0],
            this._eventHandler({
                target: r,
                currentTarget: r,
                preventDefault: n.noop
            }))
        },
        _findActive: function(t) {
            return t === !1 ? n() : this.tabs.eq(t)
        },
        _getIndex: function(t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + n.ui.escapeSelector(t) + "']"))),
            t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort();
            this.tablist.removeAttr("role").off(this.eventNamespace);
            this.anchors.removeAttr("role tabIndex").removeUniqueId();
            this.tabs.add(this.panels).each(function() {
                n.data(this, "ui-tabs-destroy") ? n(this).remove() : n(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            });
            this.tabs.each(function() {
                var t = n(this)
                  , i = t.data("ui-tabs-aria-controls");
                i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            });
            this.panels.show();
            "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(t) {
            var i = this.options.disabled;
            i !== !1 && (void 0 === t ? i = !1 : (t = this._getIndex(t),
            i = n.isArray(i) ? n.map(i, function(n) {
                return n !== t ? n : null
            }) : n.map(this.tabs, function(n, i) {
                return i !== t ? i : null
            })),
            this._setOptionDisabled(i))
        },
        disable: function(t) {
            var i = this.options.disabled;
            if (i !== !0) {
                if (void 0 === t)
                    i = !0;
                else {
                    if (t = this._getIndex(t),
                    -1 !== n.inArray(t, i))
                        return;
                    i = n.isArray(i) ? n.merge([t], i).sort() : [t]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function(t, i) {
            t = this._getIndex(t);
            var r = this
              , u = this.tabs.eq(t)
              , e = u.find(".ui-tabs-anchor")
              , f = this._getPanelForTab(u)
              , o = {
                tab: u,
                panel: f
            }
              , s = function(n, t) {
                "abort" === t && r.panels.stop(!1, !0);
                r._removeClass(u, "ui-tabs-loading");
                f.removeAttr("aria-busy");
                n === r.xhr && delete r.xhr
            };
            this._isLocal(e[0]) || (this.xhr = n.ajax(this._ajaxSettings(e, i, o)),
            this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(u, "ui-tabs-loading"),
            f.attr("aria-busy", "true"),
            this.xhr.done(function(n, t, u) {
                setTimeout(function() {
                    f.html(n);
                    r._trigger("load", i, o);
                    s(u, t)
                }, 1)
            }).fail(function(n, t) {
                setTimeout(function() {
                    s(n, t)
                }, 1)
            })))
        },
        _ajaxSettings: function(t, i, r) {
            var u = this;
            return {
                url: t.attr("href").replace(/#.*$/, ""),
                beforeSend: function(t, f) {
                    return u._trigger("beforeLoad", i, n.extend({
                        jqXHR: t,
                        ajaxSettings: f
                    }, r))
                }
            }
        },
        _getPanelForTab: function(t) {
            var i = n(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    });
    n.uiBackCompat !== !1 && n.widget("ui.tabs", n.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments);
            this._addClass(this.tabs, "ui-tab")
        }
    });
    n.ui.tabs;
    n.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var t = n(this).attr("title") || "";
                return n("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(t, i) {
            var r = (t.attr("aria-describedby") || "").split(/\s+/);
            r.push(i);
            t.data("ui-tooltip-id", i).attr("aria-describedby", n.trim(r.join(" ")))
        },
        _removeDescribedBy: function(t) {
            var u = t.data("ui-tooltip-id")
              , i = (t.attr("aria-describedby") || "").split(/\s+/)
              , r = n.inArray(u, i);
            -1 !== r && i.splice(r, 1);
            t.removeData("ui-tooltip-id");
            i = n.trim(i.join(" "));
            i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            });
            this.tooltips = {};
            this.parents = {};
            this.liveRegion = n("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
            this.disabledTitles = n([])
        },
        _setOption: function(t, i) {
            var r = this;
            this._super(t, i);
            "content" === t && n.each(this.tooltips, function(n, t) {
                r._updateContent(t.element)
            })
        },
        _setOptionDisabled: function(n) {
            this[n ? "_disable" : "_enable"]()
        },
        _disable: function() {
            var t = this;
            n.each(this.tooltips, function(i, r) {
                var u = n.Event("blur");
                u.target = u.currentTarget = r.element[0];
                t.close(u, !0)
            });
            this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                var t = n(this);
                if (t.is("[title]"))
                    return t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
            }))
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var t = n(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            });
            this.disabledTitles = n([])
        },
        open: function(t) {
            var r = this
              , i = n(t ? t.target : this.element).closest(this.options.items);
            i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")),
            i.data("ui-tooltip-open", !0),
            t && "mouseover" === t.type && i.parents().each(function() {
                var i, t = n(this);
                t.data("ui-tooltip-open") && (i = n.Event("blur"),
                i.target = i.currentTarget = this,
                r.close(i, !0));
                t.attr("title") && (t.uniqueId(),
                r.parents[this.id] = {
                    element: this,
                    title: t.attr("title")
                },
                t.attr("title", ""))
            }),
            this._registerCloseHandlers(t, i),
            this._updateContent(i, t))
        },
        _updateContent: function(n, t) {
            var r, i = this.options.content, u = this, f = t ? t.type : null;
            return "string" == typeof i || i.nodeType || i.jquery ? this._open(t, n, i) : (r = i.call(n[0], function(i) {
                u._delay(function() {
                    n.data("ui-tooltip-open") && (t && (t.type = f),
                    this._open(t, n, i))
                })
            }),
            r && this._open(t, n, r),
            void 0)
        },
        _open: function(t, i, r) {
            function o(n) {
                s.of = n;
                u.is(":hidden") || u.position(s)
            }
            var f, u, h, e, s = n.extend({}, this.options.position);
            if (r) {
                if (f = this._find(i))
                    return f.tooltip.find(".ui-tooltip-content").html(r),
                    void 0;
                i.is("[title]") && (t && "mouseover" === t.type ? i.attr("title", "") : i.removeAttr("title"));
                f = this._tooltip(i);
                u = f.tooltip;
                this._addDescribedBy(i, u.attr("id"));
                u.find(".ui-tooltip-content").html(r);
                this.liveRegion.children().hide();
                e = n("<div>").html(u.find(".ui-tooltip-content").html());
                e.removeAttr("name").find("[name]").removeAttr("name");
                e.removeAttr("id").find("[id]").removeAttr("id");
                e.appendTo(this.liveRegion);
                this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                    mousemove: o
                }),
                o(t)) : u.position(n.extend({
                    of: i
                }, this.options.position));
                u.hide();
                this._show(u, this.options.show);
                this.options.track && this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
                    u.is(":visible") && (o(s.of),
                    clearInterval(h))
                }, n.fx.interval));
                this._trigger("open", t, {
                    tooltip: u
                })
            }
        },
        _registerCloseHandlers: function(t, i) {
            var r = {
                keyup: function(t) {
                    if (t.keyCode === n.ui.keyCode.ESCAPE) {
                        var r = n.Event(t);
                        r.currentTarget = i[0];
                        this.close(r, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (r.remove = function() {
                this._removeTooltip(this._find(i).tooltip)
            }
            );
            t && "mouseover" !== t.type || (r.mouseleave = "close");
            t && "focusin" !== t.type || (r.focusout = "close");
            this._on(!0, i, r)
        },
        close: function(t) {
            var u, f = this, i = n(t ? t.currentTarget : this.element), r = this._find(i);
            return r ? (u = r.tooltip,
            r.closing || (clearInterval(this.delayedShow),
            i.data("ui-tooltip-title") && !i.attr("title") && i.attr("title", i.data("ui-tooltip-title")),
            this._removeDescribedBy(i),
            r.hiding = !0,
            u.stop(!0),
            this._hide(u, this.options.hide, function() {
                f._removeTooltip(n(this))
            }),
            i.removeData("ui-tooltip-open"),
            this._off(i, "mouseleave focusout keyup"),
            i[0] !== this.element[0] && this._off(i, "remove"),
            this._off(this.document, "mousemove"),
            t && "mouseleave" === t.type && n.each(this.parents, function(t, i) {
                n(i.element).attr("title", i.title);
                delete f.parents[t]
            }),
            r.closing = !0,
            this._trigger("close", t, {
                tooltip: u
            }),
            r.hiding || (r.closing = !1)),
            void 0) : (i.removeData("ui-tooltip-open"),
            void 0)
        },
        _tooltip: function(t) {
            var i = n("<div>").attr("role", "tooltip")
              , r = n("<div>").appendTo(i)
              , u = i.uniqueId().attr("id");
            return this._addClass(r, "ui-tooltip-content"),
            this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"),
            i.appendTo(this._appendTo(t)),
            this.tooltips[u] = {
                element: t,
                tooltip: i
            }
        },
        _find: function(n) {
            var t = n.data("ui-tooltip-id");
            return t ? this.tooltips[t] : null
        },
        _removeTooltip: function(n) {
            n.remove();
            delete this.tooltips[n.attr("id")]
        },
        _appendTo: function(n) {
            var t = n.closest(".ui-front, dialog");
            return t.length || (t = this.document[0].body),
            t
        },
        _destroy: function() {
            var t = this;
            n.each(this.tooltips, function(i, r) {
                var f = n.Event("blur")
                  , u = r.element;
                f.target = f.currentTarget = u[0];
                t.close(f, !0);
                n("#" + i).remove();
                u.data("ui-tooltip-title") && (u.attr("title") || u.attr("title", u.data("ui-tooltip-title")),
                u.removeData("ui-tooltip-title"))
            });
            this.liveRegion.remove()
        }
    });
    n.uiBackCompat !== !1 && n.widget("ui.tooltip", n.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function() {
            var n = this._superApply(arguments);
            return this.options.tooltipClass && n.tooltip.addClass(this.options.tooltipClass),
            n
        }
    });
    n.ui.tooltip;
    var e = "ui-effects-"
      , s = "ui-effects-style"
      , h = "ui-effects-animated"
      , p = n;
    n.effects = {
        effect: {}
    },
    function(n, t) {
        function f(n, t, i) {
            var r = h[t.type] || {};
            return null == n ? i || !t.def ? null : t.def : (n = r.floor ? ~~n : parseFloat(n),
            isNaN(n) ? t.def : r.mod ? (n + r.mod) % r.mod : 0 > n ? 0 : n > r.max ? r.max : n)
        }
        function s(f) {
            var o = i()
              , s = o._rgba = [];
            return f = f.toLowerCase(),
            r(v, function(n, i) {
                var r, h = i.re.exec(f), c = h && i.parse(h), e = i.space || "rgba";
                return c ? (r = o[e](c),
                o[u[e].cache] = r[u[e].cache],
                s = o._rgba = r._rgba,
                !1) : t
            }),
            s.length ? ("0,0,0,0" === s.join() && n.extend(s, e.transparent),
            o) : e[f]
        }
        function o(n, t, i) {
            return i = (i + 1) % 1,
            1 > 6 * i ? n + 6 * (t - n) * i : 1 > 2 * i ? t : 2 > 3 * i ? n + 6 * (t - n) * (2 / 3 - i) : n
        }
        var e, a = /^([\-+])=\s*(\d+\.?\d*)/, v = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(n) {
                return [n[1], n[2], n[3], n[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(n) {
                return [2.55 * n[1], 2.55 * n[2], 2.55 * n[3], n[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(n) {
                return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(n) {
                return [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(n) {
                return [n[1], n[2] / 100, n[3] / 100, n[4]]
            }
        }], i = n.Color = function(t, i, r, u) {
            return new n.Color.fn.parse(t,i,r,u)
        }
        , u = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, h = {
            byte: {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, c = i.support = {}, l = n("<p>")[0], r = n.each;
        l.style.cssText = "background-color:rgba(1,1,1,.5)";
        c.rgba = l.style.backgroundColor.indexOf("rgba") > -1;
        r(u, function(n, t) {
            t.cache = "_" + n;
            t.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        });
        i.fn = n.extend(i.prototype, {
            parse: function(o, h, c, l) {
                if (o === t)
                    return this._rgba = [null, null, null, null],
                    this;
                (o.jquery || o.nodeType) && (o = n(o).css(h),
                h = t);
                var a = this
                  , v = n.type(o)
                  , y = this._rgba = [];
                return h !== t && (o = [o, h, c, l],
                v = "array"),
                "string" === v ? this.parse(s(o) || e._default) : "array" === v ? (r(u.rgba.props, function(n, t) {
                    y[t.idx] = f(o[t.idx], t)
                }),
                this) : "object" === v ? (o instanceof i ? r(u, function(n, t) {
                    o[t.cache] && (a[t.cache] = o[t.cache].slice())
                }) : r(u, function(t, i) {
                    var u = i.cache;
                    r(i.props, function(n, t) {
                        if (!a[u] && i.to) {
                            if ("alpha" === n || null == o[n])
                                return;
                            a[u] = i.to(a._rgba)
                        }
                        a[u][t.idx] = f(o[n], t, !0)
                    });
                    a[u] && 0 > n.inArray(null, a[u].slice(0, 3)) && (a[u][3] = 1,
                    i.from && (a._rgba = i.from(a[u])))
                }),
                this) : t
            },
            is: function(n) {
                var o = i(n)
                  , f = !0
                  , e = this;
                return r(u, function(n, i) {
                    var s, u = o[i.cache];
                    return u && (s = e[i.cache] || i.to && i.to(e._rgba) || [],
                    r(i.props, function(n, i) {
                        return null != u[i.idx] ? f = u[i.idx] === s[i.idx] : t
                    })),
                    f
                }),
                f
            },
            _space: function() {
                var n = []
                  , t = this;
                return r(u, function(i, r) {
                    t[r.cache] && n.push(i)
                }),
                n.pop()
            },
            transition: function(n, t) {
                var e = i(n)
                  , c = e._space()
                  , o = u[c]
                  , l = 0 === this.alpha() ? i("transparent") : this
                  , a = l[o.cache] || o.to(l._rgba)
                  , s = a.slice();
                return e = e[o.cache],
                r(o.props, function(n, i) {
                    var c = i.idx
                      , r = a[c]
                      , u = e[c]
                      , o = h[i.type] || {};
                    null !== u && (null === r ? s[c] = u : (o.mod && (u - r > o.mod / 2 ? r += o.mod : r - u > o.mod / 2 && (r -= o.mod)),
                    s[c] = f((u - r) * t + r, i)))
                }),
                this[c](s)
            },
            blend: function(t) {
                if (1 === this._rgba[3])
                    return this;
                var r = this._rgba.slice()
                  , u = r.pop()
                  , f = i(t)._rgba;
                return i(n.map(r, function(n, t) {
                    return (1 - u) * f[t] + u * n
                }))
            },
            toRgbaString: function() {
                var i = "rgba("
                  , t = n.map(this._rgba, function(n, t) {
                    return null == n ? t > 2 ? 1 : 0 : n
                });
                return 1 === t[3] && (t.pop(),
                i = "rgb("),
                i + t.join() + ")"
            },
            toHslaString: function() {
                var i = "hsla("
                  , t = n.map(this.hsla(), function(n, t) {
                    return null == n && (n = t > 2 ? 1 : 0),
                    t && 3 > t && (n = Math.round(100 * n) + "%"),
                    n
                });
                return 1 === t[3] && (t.pop(),
                i = "hsl("),
                i + t.join() + ")"
            },
            toHexString: function(t) {
                var i = this._rgba.slice()
                  , r = i.pop();
                return t && i.push(~~(255 * r)),
                "#" + n.map(i, function(n) {
                    return n = (n || 0).toString(16),
                    1 === n.length ? "0" + n : n
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        });
        i.fn.parse.prototype = i.fn;
        u.hsla.to = function(n) {
            if (null == n[0] || null == n[1] || null == n[2])
                return [null, null, null, n[3]];
            var s, h, i = n[0] / 255, r = n[1] / 255, f = n[2] / 255, c = n[3], u = Math.max(i, r, f), e = Math.min(i, r, f), t = u - e, o = u + e, l = .5 * o;
            return s = e === u ? 0 : i === u ? 60 * (r - f) / t + 360 : r === u ? 60 * (f - i) / t + 120 : 60 * (i - r) / t + 240,
            h = 0 === t ? 0 : .5 >= l ? t / o : t / (2 - o),
            [Math.round(s) % 360, h, l, null == c ? 1 : c]
        }
        ;
        u.hsla.from = function(n) {
            if (null == n[0] || null == n[1] || null == n[2])
                return [null, null, null, n[3]];
            var r = n[0] / 360
              , u = n[1]
              , t = n[2]
              , e = n[3]
              , i = .5 >= t ? t * (1 + u) : t + u - t * u
              , f = 2 * t - i;
            return [Math.round(255 * o(f, i, r + 1 / 3)), Math.round(255 * o(f, i, r)), Math.round(255 * o(f, i, r - 1 / 3)), e]
        }
        ;
        r(u, function(u, e) {
            var s = e.props
              , o = e.cache
              , h = e.to
              , c = e.from;
            i.fn[u] = function(u) {
                if (h && !this[o] && (this[o] = h(this._rgba)),
                u === t)
                    return this[o].slice();
                var l, a = n.type(u), v = "array" === a || "object" === a ? u : arguments, e = this[o].slice();
                return r(s, function(n, t) {
                    var i = v["object" === a ? n : t.idx];
                    null == i && (i = e[t.idx]);
                    e[t.idx] = f(i, t)
                }),
                c ? (l = i(c(e)),
                l[o] = e,
                l) : i(e)
            }
            ;
            r(s, function(t, r) {
                i.fn[t] || (i.fn[t] = function(i) {
                    var f, e = n.type(i), h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : u, o = this[h](), s = o[r.idx];
                    return "undefined" === e ? s : ("function" === e && (i = i.call(this, s),
                    e = n.type(i)),
                    null == i && r.empty ? this : ("string" === e && (f = a.exec(i),
                    f && (i = s + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))),
                    o[r.idx] = i,
                    this[h](o)))
                }
                )
            })
        });
        i.hook = function(t) {
            var u = t.split(" ");
            r(u, function(t, r) {
                n.cssHooks[r] = {
                    set: function(t, u) {
                        var o, f, e = "";
                        if ("transparent" !== u && ("string" !== n.type(u) || (o = s(u)))) {
                            if (u = i(o || u),
                            !c.rgba && 1 !== u._rgba[3]) {
                                for (f = "backgroundColor" === r ? t.parentNode : t; ("" === e || "transparent" === e) && f && f.style; )
                                    try {
                                        e = n.css(f, "backgroundColor");
                                        f = f.parentNode
                                    } catch (h) {}
                                u = u.blend(e && "transparent" !== e ? e : "_default")
                            }
                            u = u.toRgbaString()
                        }
                        try {
                            t.style[r] = u
                        } catch (h) {}
                    }
                };
                n.fx.step[r] = function(t) {
                    t.colorInit || (t.start = i(t.elem, r),
                    t.end = i(t.end),
                    t.colorInit = !0);
                    n.cssHooks[r].set(t.elem, t.start.transition(t.end, t.pos))
                }
            })
        }
        ;
        i.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
        n.cssHooks.borderColor = {
            expand: function(n) {
                var t = {};
                return r(["Top", "Right", "Bottom", "Left"], function(i, r) {
                    t["border" + r + "Color"] = n
                }),
                t
            }
        };
        e = n.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(p),
    function() {
        function t(t) {
            var r, u, i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, f = {};
            if (i && i.length && i[0] && i[i[0]])
                for (u = i.length; u--; )
                    r = i[u],
                    "string" == typeof i[r] && (f[n.camelCase(r)] = i[r]);
            else
                for (r in i)
                    "string" == typeof i[r] && (f[r] = i[r]);
            return f
        }
        function i(t, i) {
            var r, f, e = {};
            for (r in i)
                f = i[r],
                t[r] !== f && (u[r] || (n.fx.step[r] || !isNaN(parseFloat(f))) && (e[r] = f));
            return e
        }
        var r = ["add", "remove", "toggle"]
          , u = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        n.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
            n.fx.step[i] = function(n) {
                ("none" === n.end || n.setAttr) && (1 !== n.pos || n.setAttr) || (p.style(n.elem, i, n.end),
                n.setAttr = !0)
            }
        });
        n.fn.addBack || (n.fn.addBack = function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
        );
        n.effects.animateClass = function(u, f, e, o) {
            var s = n.speed(f, e, o);
            return this.queue(function() {
                var o, e = n(this), h = e.attr("class") || "", f = s.children ? e.find("*").addBack() : e;
                f = f.map(function() {
                    var i = n(this);
                    return {
                        el: i,
                        start: t(this)
                    }
                });
                o = function() {
                    n.each(r, function(n, t) {
                        u[t] && e[t + "Class"](u[t])
                    })
                }
                ;
                o();
                f = f.map(function() {
                    return this.end = t(this.el[0]),
                    this.diff = i(this.start, this.end),
                    this
                });
                e.attr("class", h);
                f = f.map(function() {
                    var i = this
                      , t = n.Deferred()
                      , r = n.extend({}, s, {
                        queue: !1,
                        complete: function() {
                            t.resolve(i)
                        }
                    });
                    return this.el.animate(this.diff, r),
                    t.promise()
                });
                n.when.apply(n, f.get()).done(function() {
                    o();
                    n.each(arguments, function() {
                        var t = this.el;
                        n.each(this.diff, function(n) {
                            t.css(n, "")
                        })
                    });
                    s.complete.call(e[0])
                })
            })
        }
        ;
        n.fn.extend({
            addClass: function(t) {
                return function(i, r, u, f) {
                    return r ? n.effects.animateClass.call(this, {
                        add: i
                    }, r, u, f) : t.apply(this, arguments)
                }
            }(n.fn.addClass),
            removeClass: function(t) {
                return function(i, r, u, f) {
                    return arguments.length > 1 ? n.effects.animateClass.call(this, {
                        remove: i
                    }, r, u, f) : t.apply(this, arguments)
                }
            }(n.fn.removeClass),
            toggleClass: function(t) {
                return function(i, r, u, f, e) {
                    return "boolean" == typeof r || void 0 === r ? u ? n.effects.animateClass.call(this, r ? {
                        add: i
                    } : {
                        remove: i
                    }, u, f, e) : t.apply(this, arguments) : n.effects.animateClass.call(this, {
                        toggle: i
                    }, r, u, f)
                }
            }(n.fn.toggleClass),
            switchClass: function(t, i, r, u, f) {
                return n.effects.animateClass.call(this, {
                    add: i,
                    remove: t
                }, r, u, f)
            }
        })
    }(),
    function() {
        function t(t, i, r, u) {
            return n.isPlainObject(t) && (i = t,
            t = t.effect),
            t = {
                effect: t
            },
            null == i && (i = {}),
            n.isFunction(i) && (u = i,
            r = null,
            i = {}),
            ("number" == typeof i || n.fx.speeds[i]) && (u = r,
            r = i,
            i = {}),
            n.isFunction(r) && (u = r,
            r = null),
            i && n.extend(t, i),
            r = r || i.duration,
            t.duration = n.fx.off ? 0 : "number" == typeof r ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default,
            t.complete = u || i.complete,
            t
        }
        function i(t) {
            return !t || "number" == typeof t || n.fx.speeds[t] ? !0 : "string" != typeof t || n.effects.effect[t] ? n.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
        }
        function r(n, t) {
            var r = t.outerWidth()
              , u = t.outerHeight()
              , i = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(n) || ["", 0, r, u, 0];
            return {
                top: parseFloat(i[1]) || 0,
                right: "auto" === i[2] ? r : parseFloat(i[2]),
                bottom: "auto" === i[3] ? u : parseFloat(i[3]),
                left: parseFloat(i[4]) || 0
            }
        }
        n.expr && n.expr.filters && n.expr.filters.animated && (n.expr.filters.animated = function(t) {
            return function(i) {
                return !!n(i).data(h) || t(i)
            }
        }(n.expr.filters.animated));
        n.uiBackCompat !== !1 && n.extend(n.effects, {
            save: function(n, t) {
                for (var i = 0, r = t.length; r > i; i++)
                    null !== t[i] && n.data(e + t[i], n[0].style[t[i]])
            },
            restore: function(n, t) {
                for (var r, i = 0, u = t.length; u > i; i++)
                    null !== t[i] && (r = n.data(e + t[i]),
                    n.css(t[i], r))
            },
            setMode: function(n, t) {
                return "toggle" === t && (t = n.is(":hidden") ? "show" : "hide"),
                t
            },
            createWrapper: function(t) {
                if (t.parent().is(".ui-effects-wrapper"))
                    return t.parent();
                var i = {
                    width: t.outerWidth(!0),
                    height: t.outerHeight(!0),
                    float: t.css("float")
                }
                  , u = n("<div><\/div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                })
                  , f = {
                    width: t.width(),
                    height: t.height()
                }
                  , r = document.activeElement;
                try {
                    r.id
                } catch (e) {
                    r = document.body
                }
                return t.wrap(u),
                (t[0] === r || n.contains(t[0], r)) && n(r).trigger("focus"),
                u = t.parent(),
                "static" === t.css("position") ? (u.css({
                    position: "relative"
                }),
                t.css({
                    position: "relative"
                })) : (n.extend(i, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }),
                n.each(["top", "left", "bottom", "right"], function(n, r) {
                    i[r] = t.css(r);
                    isNaN(parseInt(i[r], 10)) && (i[r] = "auto")
                }),
                t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })),
                t.css(f),
                u.css(i).show()
            },
            removeWrapper: function(t) {
                var i = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t),
                (t[0] === i || n.contains(t[0], i)) && n(i).trigger("focus")),
                t
            }
        });
        n.extend(n.effects, {
            version: "1.12.1",
            define: function(t, i, r) {
                return r || (r = i,
                i = "effect"),
                n.effects.effect[t] = r,
                n.effects.effect[t].mode = i,
                r
            },
            scaledDimensions: function(n, t, i) {
                if (0 === t)
                    return {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                var r = "horizontal" !== i ? (t || 100) / 100 : 1
                  , u = "vertical" !== i ? (t || 100) / 100 : 1;
                return {
                    height: n.height() * u,
                    width: n.width() * r,
                    outerHeight: n.outerHeight() * u,
                    outerWidth: n.outerWidth() * r
                }
            },
            clipToBox: function(n) {
                return {
                    width: n.clip.right - n.clip.left,
                    height: n.clip.bottom - n.clip.top,
                    left: n.clip.left,
                    top: n.clip.top
                }
            },
            unshift: function(n, t, i) {
                var r = n.queue();
                t > 1 && r.splice.apply(r, [1, 0].concat(r.splice(t, i)));
                n.dequeue()
            },
            saveStyle: function(n) {
                n.data(s, n[0].style.cssText)
            },
            restoreStyle: function(n) {
                n[0].style.cssText = n.data(s) || "";
                n.removeData(s)
            },
            mode: function(n, t) {
                var i = n.is(":hidden");
                return "toggle" === t && (t = i ? "show" : "hide"),
                (i ? "hide" === t : "show" === t) && (t = "none"),
                t
            },
            getBaseline: function(n, t) {
                var i, r;
                switch (n[0]) {
                case "top":
                    i = 0;
                    break;
                case "middle":
                    i = .5;
                    break;
                case "bottom":
                    i = 1;
                    break;
                default:
                    i = n[0] / t.height
                }
                switch (n[1]) {
                case "left":
                    r = 0;
                    break;
                case "center":
                    r = .5;
                    break;
                case "right":
                    r = 1;
                    break;
                default:
                    r = n[1] / t.width
                }
                return {
                    x: r,
                    y: i
                }
            },
            createPlaceholder: function(t) {
                var i, r = t.css("position"), u = t.position();
                return t.css({
                    marginTop: t.css("marginTop"),
                    marginBottom: t.css("marginBottom"),
                    marginLeft: t.css("marginLeft"),
                    marginRight: t.css("marginRight")
                }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()),
                /^(static|relative)/.test(r) && (r = "absolute",
                i = n("<" + t[0].nodeName + ">").insertAfter(t).css({
                    display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: t.css("marginTop"),
                    marginBottom: t.css("marginBottom"),
                    marginLeft: t.css("marginLeft"),
                    marginRight: t.css("marginRight"),
                    float: t.css("float")
                }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"),
                t.data(e + "placeholder", i)),
                t.css({
                    position: r,
                    left: u.left,
                    top: u.top
                }),
                i
            },
            removePlaceholder: function(n) {
                var t = e + "placeholder"
                  , i = n.data(t);
                i && (i.remove(),
                n.removeData(t))
            },
            cleanUp: function(t) {
                n.effects.restoreStyle(t);
                n.effects.removePlaceholder(t)
            },
            setTransition: function(t, i, r, u) {
                return u = u || {},
                n.each(i, function(n, i) {
                    var f = t.cssUnit(i);
                    f[0] > 0 && (u[i] = f[0] * r + f[1])
                }),
                u
            }
        });
        n.fn.extend({
            effect: function() {
                function o(t) {
                    function c() {
                        o.removeData(h);
                        n.effects.cleanUp(o);
                        "hide" === i.mode && o.hide();
                        s()
                    }
                    function s() {
                        n.isFunction(f) && f.call(o[0]);
                        n.isFunction(t) && t()
                    }
                    var o = n(this);
                    i.mode = l.shift();
                    n.uiBackCompat === !1 || u ? "none" === i.mode ? (o[r](),
                    s()) : e.call(o[0], i, c) : (o.is(":hidden") ? "hide" === r : "show" === r) ? (o[r](),
                    s()) : e.call(o[0], i, s)
                }
                var i = t.apply(this, arguments)
                  , e = n.effects.effect[i.effect]
                  , u = e.mode
                  , s = i.queue
                  , c = s || "fx"
                  , f = i.complete
                  , r = i.mode
                  , l = []
                  , a = function(t) {
                    var f = n(this)
                      , i = n.effects.mode(f, r) || u;
                    f.data(h, !0);
                    l.push(i);
                    u && ("show" === i || i === u && "hide" === i) && f.show();
                    u && "none" === i || n.effects.saveStyle(f);
                    n.isFunction(t) && t()
                };
                return n.fx.off || !e ? r ? this[r](i.duration, f) : this.each(function() {
                    f && f.call(this)
                }) : s === !1 ? this.each(a).each(o) : this.queue(c, a).queue(c, o)
            },
            show: function(n) {
                return function(r) {
                    if (i(r))
                        return n.apply(this, arguments);
                    var u = t.apply(this, arguments);
                    return u.mode = "show",
                    this.effect.call(this, u)
                }
            }(n.fn.show),
            hide: function(n) {
                return function(r) {
                    if (i(r))
                        return n.apply(this, arguments);
                    var u = t.apply(this, arguments);
                    return u.mode = "hide",
                    this.effect.call(this, u)
                }
            }(n.fn.hide),
            toggle: function(n) {
                return function(r) {
                    if (i(r) || "boolean" == typeof r)
                        return n.apply(this, arguments);
                    var u = t.apply(this, arguments);
                    return u.mode = "toggle",
                    this.effect.call(this, u)
                }
            }(n.fn.toggle),
            cssUnit: function(t) {
                var i = this.css(t)
                  , r = [];
                return n.each(["em", "px", "%", "pt"], function(n, t) {
                    i.indexOf(t) > 0 && (r = [parseFloat(i), t])
                }),
                r
            },
            cssClip: function(n) {
                return n ? this.css("clip", "rect(" + n.top + "px " + n.right + "px " + n.bottom + "px " + n.left + "px)") : r(this.css("clip"), this)
            },
            transfer: function(t, i) {
                var u = n(this)
                  , r = n(t.to)
                  , f = "fixed" === r.css("position")
                  , e = n("body")
                  , o = f ? e.scrollTop() : 0
                  , s = f ? e.scrollLeft() : 0
                  , h = r.offset()
                  , l = {
                    top: h.top - o,
                    left: h.left - s,
                    height: r.innerHeight(),
                    width: r.innerWidth()
                }
                  , c = u.offset()
                  , a = n("<div class='ui-effects-transfer'><\/div>").appendTo("body").addClass(t.className).css({
                    top: c.top - o,
                    left: c.left - s,
                    height: u.innerHeight(),
                    width: u.innerWidth(),
                    position: f ? "fixed" : "absolute"
                }).animate(l, t.duration, t.easing, function() {
                    a.remove();
                    n.isFunction(i) && i()
                })
            }
        });
        n.fx.step.clip = function(t) {
            t.clipInit || (t.start = n(t.elem).cssClip(),
            "string" == typeof t.end && (t.end = r(t.end, t.elem)),
            t.clipInit = !0);
            n(t.elem).cssClip({
                top: t.pos * (t.end.top - t.start.top) + t.start.top,
                right: t.pos * (t.end.right - t.start.right) + t.start.right,
                bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
                left: t.pos * (t.end.left - t.start.left) + t.start.left
            })
        }
    }(),
    function() {
        var t = {};
        n.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(n, i) {
            t[i] = function(t) {
                return Math.pow(t, n + 2)
            }
        });
        n.extend(t, {
            Sine: function(n) {
                return 1 - Math.cos(n * Math.PI / 2)
            },
            Circ: function(n) {
                return 1 - Math.sqrt(1 - n * n)
            },
            Elastic: function(n) {
                return 0 === n || 1 === n ? n : -Math.pow(2, 8 * (n - 1)) * Math.sin((80 * (n - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(n) {
                return n * n * (3 * n - 2)
            },
            Bounce: function(n) {
                for (var t, i = 4; ((t = Math.pow(2, --i)) - 1) / 11 > n; )
                    ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - n, 2)
            }
        });
        n.each(t, function(t, i) {
            n.easing["easeIn" + t] = i;
            n.easing["easeOut" + t] = function(n) {
                return 1 - i(1 - n)
            }
            ;
            n.easing["easeInOut" + t] = function(n) {
                return .5 > n ? i(2 * n) / 2 : 1 - i(-2 * n + 2) / 2
            }
        })
    }();
    w = n.effects;
    n.effects.define("blind", "hide", function(t, i) {
        var e = {
            up: ["bottom", "top"],
            vertical: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            horizontal: ["right", "left"],
            right: ["left", "right"]
        }
          , u = n(this)
          , o = t.direction || "up"
          , s = u.cssClip()
          , r = {
            clip: n.extend({}, s)
        }
          , f = n.effects.createPlaceholder(u);
        r.clip[e[o][0]] = r.clip[e[o][1]];
        "show" === t.mode && (u.cssClip(r.clip),
        f && f.css(n.effects.clipToBox(r)),
        r.clip = s);
        f && f.animate(n.effects.clipToBox(r), t.duration, t.easing);
        u.animate(r, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    });
    n.effects.define("bounce", function(t, i) {
        var e, o, a, u = n(this), p = t.mode, s = "hide" === p, w = "show" === p, h = t.direction || "up", r = t.distance, v = t.times || 5, b = 2 * v + (w || s ? 1 : 0), c = t.duration / b, l = t.easing, f = "up" === h || "down" === h ? "top" : "left", y = "up" === h || "left" === h, k = 0, d = u.queue().length;
        for (n.effects.createPlaceholder(u),
        a = u.css(f),
        r || (r = u["top" === f ? "outerHeight" : "outerWidth"]() / 3),
        w && (o = {
            opacity: 1
        },
        o[f] = a,
        u.css("opacity", 0).css(f, y ? 2 * -r : 2 * r).animate(o, c, l)),
        s && (r /= Math.pow(2, v - 1)),
        o = {},
        o[f] = a; v > k; k++)
            e = {},
            e[f] = (y ? "-=" : "+=") + r,
            u.animate(e, c, l).animate(o, c, l),
            r = s ? 2 * r : r / 2;
        s && (e = {
            opacity: 0
        },
        e[f] = (y ? "-=" : "+=") + r,
        u.animate(e, c, l));
        u.queue(i);
        n.effects.unshift(u, d, b + 1)
    });
    n.effects.define("clip", "hide", function(t, i) {
        var r, u = {}, f = n(this), e = t.direction || "vertical", o = "both" === e, s = o || "horizontal" === e, h = o || "vertical" === e;
        r = f.cssClip();
        u.clip = {
            top: h ? (r.bottom - r.top) / 2 : r.top,
            right: s ? (r.right - r.left) / 2 : r.right,
            bottom: h ? (r.bottom - r.top) / 2 : r.bottom,
            left: s ? (r.right - r.left) / 2 : r.left
        };
        n.effects.createPlaceholder(f);
        "show" === t.mode && (f.cssClip(u.clip),
        u.clip = r);
        f.animate(u, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    });
    n.effects.define("drop", "hide", function(t, i) {
        var e, u = n(this), h = t.mode, c = "show" === h, f = t.direction || "left", o = "up" === f || "down" === f ? "top" : "left", s = "up" === f || "left" === f ? "-=" : "+=", l = "+=" === s ? "-=" : "+=", r = {
            opacity: 0
        };
        n.effects.createPlaceholder(u);
        e = t.distance || u["top" === o ? "outerHeight" : "outerWidth"](!0) / 2;
        r[o] = s + e;
        c && (u.css(r),
        r[o] = l + e,
        r.opacity = 1);
        u.animate(r, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    });
    n.effects.define("explode", "hide", function(t, i) {
        function b() {
            p.push(this);
            p.length === e * c && k()
        }
        function k() {
            o.css({
                visibility: "visible"
            });
            n(p).remove();
            i()
        }
        for (var u, l, a, v, y, e = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = e, o = n(this), d = t.mode, f = "show" === d, w = o.show().css("visibility", "hidden").offset(), s = Math.ceil(o.outerWidth() / c), h = Math.ceil(o.outerHeight() / e), p = [], r = 0; e > r; r++)
            for (a = w.top + r * h,
            y = r - (e - 1) / 2,
            u = 0; c > u; u++)
                l = w.left + u * s,
                v = u - (c - 1) / 2,
                o.clone().appendTo("body").wrap("<div><\/div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -u * s,
                    top: -r * h
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: s,
                    height: h,
                    left: l + (f ? v * s : 0),
                    top: a + (f ? y * h : 0),
                    opacity: f ? 0 : 1
                }).animate({
                    left: l + (f ? 0 : v * s),
                    top: a + (f ? 0 : y * h),
                    opacity: f ? 1 : 0
                }, t.duration || 500, t.easing, b)
    });
    n.effects.define("fade", "toggle", function(t, i) {
        var r = "show" === t.mode;
        n(this).css("opacity", r ? 0 : 1).animate({
            opacity: r ? 1 : 0
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    });
    n.effects.define("fold", "hide", function(t, i) {
        var u = n(this)
          , l = t.mode
          , v = "show" === l
          , y = "hide" === l
          , o = t.size || 15
          , a = /([0-9]+)%/.exec(o)
          , p = !!t.horizFirst
          , f = p ? ["right", "bottom"] : ["bottom", "right"]
          , s = t.duration / 2
          , h = n.effects.createPlaceholder(u)
          , e = u.cssClip()
          , c = {
            clip: n.extend({}, e)
        }
          , r = {
            clip: n.extend({}, e)
        }
          , w = [e[f[0]], e[f[1]]]
          , b = u.queue().length;
        a && (o = parseInt(a[1], 10) / 100 * w[y ? 0 : 1]);
        c.clip[f[0]] = o;
        r.clip[f[0]] = o;
        r.clip[f[1]] = 0;
        v && (u.cssClip(r.clip),
        h && h.css(n.effects.clipToBox(r)),
        r.clip = e);
        u.queue(function(i) {
            h && h.animate(n.effects.clipToBox(c), s, t.easing).animate(n.effects.clipToBox(r), s, t.easing);
            i()
        }).animate(c, s, t.easing).animate(r, s, t.easing).queue(i);
        n.effects.unshift(u, b, 4)
    });
    n.effects.define("highlight", "show", function(t, i) {
        var r = n(this)
          , u = {
            backgroundColor: r.css("backgroundColor")
        };
        "hide" === t.mode && (u.opacity = 0);
        n.effects.saveStyle(r);
        r.css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(u, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    });
    n.effects.define("size", function(t, i) {
        var l, r, p, u = n(this), v = ["fontSize"], s = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], w = t.mode, y = "effect" !== w, c = t.scale || "both", b = t.origin || ["middle", "center"], k = u.css("position"), a = u.position(), o = n.effects.scaledDimensions(u), f = t.from || o, e = t.to || n.effects.scaledDimensions(u, 0);
        n.effects.createPlaceholder(u);
        "show" === w && (p = f,
        f = e,
        e = p);
        r = {
            from: {
                y: f.height / o.height,
                x: f.width / o.width
            },
            to: {
                y: e.height / o.height,
                x: e.width / o.width
            }
        };
        ("box" === c || "both" === c) && (r.from.y !== r.to.y && (f = n.effects.setTransition(u, s, r.from.y, f),
        e = n.effects.setTransition(u, s, r.to.y, e)),
        r.from.x !== r.to.x && (f = n.effects.setTransition(u, h, r.from.x, f),
        e = n.effects.setTransition(u, h, r.to.x, e)));
        ("content" === c || "both" === c) && r.from.y !== r.to.y && (f = n.effects.setTransition(u, v, r.from.y, f),
        e = n.effects.setTransition(u, v, r.to.y, e));
        b && (l = n.effects.getBaseline(b, o),
        f.top = (o.outerHeight - f.outerHeight) * l.y + a.top,
        f.left = (o.outerWidth - f.outerWidth) * l.x + a.left,
        e.top = (o.outerHeight - e.outerHeight) * l.y + a.top,
        e.left = (o.outerWidth - e.outerWidth) * l.x + a.left);
        u.css(f);
        ("content" === c || "both" === c) && (s = s.concat(["marginTop", "marginBottom"]).concat(v),
        h = h.concat(["marginLeft", "marginRight"]),
        u.find("*[width]").each(function() {
            var i = n(this)
              , u = n.effects.scaledDimensions(i)
              , f = {
                height: u.height * r.from.y,
                width: u.width * r.from.x,
                outerHeight: u.outerHeight * r.from.y,
                outerWidth: u.outerWidth * r.from.x
            }
              , e = {
                height: u.height * r.to.y,
                width: u.width * r.to.x,
                outerHeight: u.height * r.to.y,
                outerWidth: u.width * r.to.x
            };
            r.from.y !== r.to.y && (f = n.effects.setTransition(i, s, r.from.y, f),
            e = n.effects.setTransition(i, s, r.to.y, e));
            r.from.x !== r.to.x && (f = n.effects.setTransition(i, h, r.from.x, f),
            e = n.effects.setTransition(i, h, r.to.x, e));
            y && n.effects.saveStyle(i);
            i.css(f);
            i.animate(e, t.duration, t.easing, function() {
                y && n.effects.restoreStyle(i)
            })
        }));
        u.animate(e, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                var t = u.offset();
                0 === e.opacity && u.css("opacity", f.opacity);
                y || (u.css("position", "static" === k ? "relative" : k).offset(t),
                n.effects.saveStyle(u));
                i()
            }
        })
    });
    n.effects.define("scale", function(t, i) {
        var u = n(this)
          , f = t.mode
          , e = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "effect" !== f ? 0 : 100)
          , r = n.extend(!0, {
            from: n.effects.scaledDimensions(u),
            to: n.effects.scaledDimensions(u, e, t.direction || "both"),
            origin: t.origin || ["middle", "center"]
        }, t);
        t.fade && (r.from.opacity = 1,
        r.to.opacity = 0);
        n.effects.effect.size.call(this, r, i)
    });
    n.effects.define("puff", "hide", function(t, i) {
        var r = n.extend(!0, {}, t, {
            fade: !0,
            percent: parseInt(t.percent, 10) || 150
        });
        n.effects.effect.scale.call(this, r, i)
    });
    n.effects.define("pulsate", "show", function(t, i) {
        var r = n(this)
          , e = t.mode
          , o = "show" === e
          , c = "hide" === e
          , l = o || c
          , f = 2 * (t.times || 5) + (l ? 1 : 0)
          , s = t.duration / f
          , u = 0
          , h = 1
          , a = r.queue().length;
        for ((o || !r.is(":visible")) && (r.css("opacity", 0).show(),
        u = 1); f > h; h++)
            r.animate({
                opacity: u
            }, s, t.easing),
            u = 1 - u;
        r.animate({
            opacity: u
        }, s, t.easing);
        r.queue(i);
        n.effects.unshift(r, a, f + 1)
    });
    n.effects.define("shake", function(t, i) {
        var l = 1
          , r = n(this)
          , f = t.direction || "left"
          , e = t.distance || 20
          , a = t.times || 3
          , v = 2 * a + 1
          , u = Math.round(t.duration / v)
          , o = "up" === f || "down" === f ? "top" : "left"
          , s = "up" === f || "left" === f
          , h = {}
          , c = {}
          , y = {}
          , p = r.queue().length;
        for (n.effects.createPlaceholder(r),
        h[o] = (s ? "-=" : "+=") + e,
        c[o] = (s ? "+=" : "-=") + 2 * e,
        y[o] = (s ? "-=" : "+=") + 2 * e,
        r.animate(h, u, t.easing); a > l; l++)
            r.animate(c, u, t.easing).animate(y, u, t.easing);
        r.animate(c, u, t.easing).animate(h, u / 2, t.easing).queue(i);
        n.effects.unshift(r, p, v + 1)
    });
    n.effects.define("slide", "show", function(t, i) {
        var s, o, u = n(this), h = {
            up: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            right: ["left", "right"]
        }, c = t.mode, f = t.direction || "left", e = "up" === f || "down" === f ? "top" : "left", l = "up" === f || "left" === f, a = t.distance || u["top" === e ? "outerHeight" : "outerWidth"](!0), r = {};
        n.effects.createPlaceholder(u);
        s = u.cssClip();
        o = u.position()[e];
        r[e] = (l ? -1 : 1) * a + o;
        r.clip = u.cssClip();
        r.clip[h[f][1]] = r.clip[h[f][0]];
        "show" === c && (u.cssClip(r.clip),
        u.css(e, r[e]),
        r.clip = s,
        r[e] = o);
        u.animate(r, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    });
    n.uiBackCompat !== !1 && (w = n.effects.define("transfer", function(t, i) {
        n(this).transfer(t, i)
    }))
});
/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/
(function() {
    var n, f, i, r, u, t = function(n, t) {
        return function() {
            return n.apply(t, arguments)
        }
    }, e = [].indexOf || function(n) {
        for (var t = 0, i = this.length; i > t; t++)
            if (t in this && this[t] === n)
                return t;
        return -1
    }
    ;
    f = function() {
        function n() {}
        return n.prototype.extend = function(n, t) {
            var i, r;
            for (i in t)
                r = t[i],
                null == n[i] && (n[i] = r);
            return n
        }
        ,
        n.prototype.isMobile = function(n) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(n)
        }
        ,
        n.prototype.createEvent = function(n, t, i, r) {
            var u;
            return null == t && (t = !1),
            null == i && (i = !1),
            null == r && (r = null),
            null != document.createEvent ? (u = document.createEvent("CustomEvent"),
            u.initCustomEvent(n, t, i, r)) : null != document.createEventObject ? (u = document.createEventObject(),
            u.eventType = n) : u.eventName = n,
            u
        }
        ,
        n.prototype.emitEvent = function(n, t) {
            return null != n.dispatchEvent ? n.dispatchEvent(t) : t in (null != n) ? n[t]() : "on" + t in (null != n) ? n["on" + t]() : void 0
        }
        ,
        n.prototype.addEvent = function(n, t, i) {
            return null != n.addEventListener ? n.addEventListener(t, i, !1) : null != n.attachEvent ? n.attachEvent("on" + t, i) : n[t] = i
        }
        ,
        n.prototype.removeEvent = function(n, t, i) {
            return null != n.removeEventListener ? n.removeEventListener(t, i, !1) : null != n.detachEvent ? n.detachEvent("on" + t, i) : delete n[t]
        }
        ,
        n.prototype.innerHeight = function() {
            return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
        }
        ,
        n
    }();
    i = this.WeakMap || this.MozWeakMap || (i = function() {
        function n() {
            this.keys = [];
            this.values = []
        }
        return n.prototype.get = function(n) {
            var t, u, i, f, r;
            for (r = this.keys,
            t = i = 0,
            f = r.length; f > i; t = ++i)
                if (u = r[t],
                u === n)
                    return this.values[t]
        }
        ,
        n.prototype.set = function(n, t) {
            var i, f, r, e, u;
            for (u = this.keys,
            i = r = 0,
            e = u.length; e > r; i = ++r)
                if (f = u[i],
                f === n)
                    return void (this.values[i] = t);
            return this.keys.push(n),
            this.values.push(t)
        }
        ,
        n
    }());
    n = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (n = function() {
        function n() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser.");
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return n.notSupported = !0,
        n.prototype.observe = function() {}
        ,
        n
    }());
    r = this.getComputedStyle || function(n) {
        return this.getPropertyValue = function(t) {
            var i;
            return "float" === t && (t = "styleFloat"),
            u.test(t) && t.replace(u, function(n, t) {
                return t.toUpperCase()
            }),
            (null != (i = n.currentStyle) ? i[t] : void 0) || null
        }
        ,
        this
    }
    ;
    u = /(\-([a-z]){1})/g;
    this.WOW = function() {
        function u(n) {
            null == n && (n = {});
            this.scrollCallback = t(this.scrollCallback, this);
            this.scrollHandler = t(this.scrollHandler, this);
            this.resetAnimation = t(this.resetAnimation, this);
            this.start = t(this.start, this);
            this.scrolled = !0;
            this.config = this.util().extend(n, this.defaults);
            null != n.scrollContainer && (this.config.scrollContainer = document.querySelector(n.scrollContainer));
            this.animationNameCache = new i;
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return u.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        },
        u.prototype.init = function() {
            var n;
            return this.element = window.document.documentElement,
            "interactive" === (n = document.readyState) || "complete" === n ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        }
        ,
        u.prototype.start = function() {
            var t, i, u, r;
            if (this.stopped = !1,
            this.boxes = function() {
                var n, u, i, r;
                for (i = this.element.querySelectorAll("." + this.config.boxClass),
                r = [],
                n = 0,
                u = i.length; u > n; n++)
                    t = i[n],
                    r.push(t);
                return r
            }
            .call(this),
            this.all = function() {
                var n, u, i, r;
                for (i = this.boxes,
                r = [],
                n = 0,
                u = i.length; u > n; n++)
                    t = i[n],
                    r.push(t);
                return r
            }
            .call(this),
            this.boxes.length)
                if (this.disabled())
                    this.resetStyle();
                else
                    for (r = this.boxes,
                    i = 0,
                    u = r.length; u > i; i++)
                        t = r[i],
                        this.applyStyle(t, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().addEvent(window, "resize", this.scrollHandler),
            this.interval = setInterval(this.scrollCallback, 50)),
            this.config.live ? new n(function(n) {
                return function(t) {
                    var i, u, f, e, r;
                    for (r = [],
                    i = 0,
                    u = t.length; u > i; i++)
                        e = t[i],
                        r.push(function() {
                            var n, r, t, i;
                            for (t = e.addedNodes || [],
                            i = [],
                            n = 0,
                            r = t.length; r > n; n++)
                                f = t[n],
                                i.push(this.doSync(f));
                            return i
                        }
                        .call(n));
                    return r
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }
        ,
        u.prototype.stop = function() {
            return this.stopped = !0,
            this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
        }
        ,
        u.prototype.sync = function() {
            if (n.notSupported)
                return this.doSync(this.element)
        }
        ,
        u.prototype.doSync = function(n) {
            var t, i, f, u, r;
            if (null == n && (n = this.element),
            1 === n.nodeType) {
                for (n = n.parentNode || n,
                u = n.querySelectorAll("." + this.config.boxClass),
                r = [],
                i = 0,
                f = u.length; f > i; i++)
                    t = u[i],
                    e.call(this.all, t) < 0 ? (this.boxes.push(t),
                    this.all.push(t),
                    this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0),
                    r.push(this.scrolled = !0)) : r.push(void 0);
                return r
            }
        }
        ,
        u.prototype.show = function(n) {
            return this.applyStyle(n),
            n.className = n.className + " " + this.config.animateClass,
            null != this.config.callback && this.config.callback(n),
            this.util().emitEvent(n, this.wowEvent),
            this.util().addEvent(n, "animationend", this.resetAnimation),
            this.util().addEvent(n, "oanimationend", this.resetAnimation),
            this.util().addEvent(n, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(n, "MSAnimationEnd", this.resetAnimation),
            n
        }
        ,
        u.prototype.applyStyle = function(n, t) {
            var i, r, u;
            return r = n.getAttribute("data-wow-duration"),
            i = n.getAttribute("data-wow-delay"),
            u = n.getAttribute("data-wow-iteration"),
            this.animate(function(f) {
                return function() {
                    return f.customStyle(n, t, r, i, u)
                }
            }(this))
        }
        ,
        u.prototype.animate = function() {
            return "requestAnimationFrame"in window ? function(n) {
                return window.requestAnimationFrame(n)
            }
            : function(n) {
                return n()
            }
        }(),
        u.prototype.resetStyle = function() {
            var r, n, u, t, i;
            for (t = this.boxes,
            i = [],
            n = 0,
            u = t.length; u > n; n++)
                r = t[n],
                i.push(r.style.visibility = "visible");
            return i
        }
        ,
        u.prototype.resetAnimation = function(n) {
            var t;
            if (n.type.toLowerCase().indexOf("animationend") >= 0)
                return (t = n.target || n.srcElement,
                t.className = t.className.replace(this.config.animateClass, "").trim())
        }
        ,
        u.prototype.customStyle = function(n, t, i, r, u) {
            return t && this.cacheAnimationName(n),
            n.style.visibility = t ? "hidden" : "visible",
            i && this.vendorSet(n.style, {
                animationDuration: i
            }),
            r && this.vendorSet(n.style, {
                animationDelay: r
            }),
            u && this.vendorSet(n.style, {
                animationIterationCount: u
            }),
            this.vendorSet(n.style, {
                animationName: t ? "none" : this.cachedAnimationName(n)
            }),
            n
        }
        ,
        u.prototype.vendors = ["moz", "webkit"],
        u.prototype.vendorSet = function(n, t) {
            var i, r, u, f;
            r = [];
            for (i in t)
                u = t[i],
                n["" + i] = u,
                r.push(function() {
                    var t, o, r, e;
                    for (r = this.vendors,
                    e = [],
                    t = 0,
                    o = r.length; o > t; t++)
                        f = r[t],
                        e.push(n["" + f + i.charAt(0).toUpperCase() + i.substr(1)] = u);
                    return e
                }
                .call(this));
            return r
        }
        ,
        u.prototype.vendorCSS = function(n, t) {
            var i, o, f, u, e, s;
            for (e = r(n),
            u = e.getPropertyCSSValue(t),
            f = this.vendors,
            i = 0,
            o = f.length; o > i; i++)
                s = f[i],
                u = u || e.getPropertyCSSValue("-" + s + "-" + t);
            return u
        }
        ,
        u.prototype.animationName = function(n) {
            var t;
            try {
                t = this.vendorCSS(n, "animation-name").cssText
            } catch (i) {
                t = r(n).getPropertyValue("animation-name")
            }
            return "none" === t ? "" : t
        }
        ,
        u.prototype.cacheAnimationName = function(n) {
            return this.animationNameCache.set(n, this.animationName(n))
        }
        ,
        u.prototype.cachedAnimationName = function(n) {
            return this.animationNameCache.get(n)
        }
        ,
        u.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        u.prototype.scrollCallback = function() {
            var n;
            if (this.scrolled && !(this.scrolled = !1,
            this.boxes = function() {
                var t, u, i, r;
                for (i = this.boxes,
                r = [],
                t = 0,
                u = i.length; u > t; t++)
                    n = i[t],
                    n && (this.isVisible(n) ? this.show(n) : r.push(n));
                return r
            }
            .call(this),
            this.boxes.length || this.config.live))
                return this.stop()
        }
        ,
        u.prototype.offsetTop = function(n) {
            for (var t; void 0 === n.offsetTop; )
                n = n.parentNode;
            for (t = n.offsetTop; n = n.offsetParent; )
                t += n.offsetTop;
            return t
        }
        ,
        u.prototype.isVisible = function(n) {
            var r, u, t, f, i;
            return u = n.getAttribute("data-wow-offset") || this.config.offset,
            i = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
            f = i + Math.min(this.element.clientHeight, this.util().innerHeight()) - u,
            t = this.offsetTop(n),
            r = t + n.clientHeight,
            f >= t && r >= i
        }
        ,
        u.prototype.util = function() {
            return null != this._util ? this._util : this._util = new f
        }
        ,
        u.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }
        ,
        u
    }()
}
).call(this);
/*!
Waypoints - 4.0.0
Copyright Ã‚Â© 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function() {
    "use strict";
    function n(r) {
        if (!r)
            throw new Error("No options passed to Waypoint constructor");
        if (!r.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!r.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + i;
        this.options = n.Adapter.extend({}, n.defaults, r);
        this.element = this.options.element;
        this.adapter = new n.Adapter(this.element);
        this.callback = r.handler;
        this.axis = this.options.horizontal ? "horizontal" : "vertical";
        this.enabled = this.options.enabled;
        this.triggerPoint = null;
        this.group = n.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        });
        this.context = n.Context.findOrCreateByElement(this.options.context);
        n.offsetAliases[this.options.offset] && (this.options.offset = n.offsetAliases[this.options.offset]);
        this.group.add(this);
        this.context.add(this);
        t[this.key] = this;
        i += 1
    }
    var i = 0
      , t = {};
    n.prototype.queueTrigger = function(n) {
        this.group.queueTrigger(this, n)
    }
    ;
    n.prototype.trigger = function(n) {
        this.enabled && this.callback && this.callback.apply(this, n)
    }
    ;
    n.prototype.destroy = function() {
        this.context.remove(this);
        this.group.remove(this);
        delete t[this.key]
    }
    ;
    n.prototype.disable = function() {
        return this.enabled = !1,
        this
    }
    ;
    n.prototype.enable = function() {
        return this.context.refresh(),
        this.enabled = !0,
        this
    }
    ;
    n.prototype.next = function() {
        return this.group.next(this)
    }
    ;
    n.prototype.previous = function() {
        return this.group.previous(this)
    }
    ;
    n.invokeAll = function(n) {
        var r = [], u, i, f;
        for (u in t)
            r.push(t[u]);
        for (i = 0,
        f = r.length; f > i; i++)
            r[i][n]()
    }
    ;
    n.destroyAll = function() {
        n.invokeAll("destroy")
    }
    ;
    n.disableAll = function() {
        n.invokeAll("disable")
    }
    ;
    n.enableAll = function() {
        n.invokeAll("enable")
    }
    ;
    n.refreshAll = function() {
        n.Context.refreshAll()
    }
    ;
    n.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }
    ;
    n.viewportWidth = function() {
        return document.documentElement.clientWidth
    }
    ;
    n.adapters = [];
    n.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    };
    n.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    };
    window.Waypoint = n
}(),
function() {
    "use strict";
    function f(n) {
        window.setTimeout(n, 1e3 / 60)
    }
    function n(n) {
        this.element = n;
        this.Adapter = t.Adapter;
        this.adapter = new this.Adapter(n);
        this.key = "waypoint-context-" + r;
        this.didScroll = !1;
        this.didResize = !1;
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        };
        this.waypoints = {
            vertical: {},
            horizontal: {}
        };
        n.waypointContextKey = this.key;
        i[n.waypointContextKey] = this;
        r += 1;
        this.createThrottledScrollHandler();
        this.createThrottledResizeHandler()
    }
    var r = 0
      , i = {}
      , t = window.Waypoint
      , u = window.onload;
    n.prototype.add = function(n) {
        var t = n.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[t][n.key] = n;
        this.refresh()
    }
    ;
    n.prototype.checkEmpty = function() {
        var n = this.Adapter.isEmptyObject(this.waypoints.horizontal)
          , t = this.Adapter.isEmptyObject(this.waypoints.vertical);
        n && t && (this.adapter.off(".waypoints"),
        delete i[this.key])
    }
    ;
    n.prototype.createThrottledResizeHandler = function() {
        function i() {
            n.handleResize();
            n.didResize = !1
        }
        var n = this;
        this.adapter.on("resize.waypoints", function() {
            n.didResize || (n.didResize = !0,
            t.requestAnimationFrame(i))
        })
    }
    ;
    n.prototype.createThrottledScrollHandler = function() {
        function i() {
            n.handleScroll();
            n.didScroll = !1
        }
        var n = this;
        this.adapter.on("scroll.waypoints", function() {
            (!n.didScroll || t.isTouch) && (n.didScroll = !0,
            t.requestAnimationFrame(i))
        })
    }
    ;
    n.prototype.handleResize = function() {
        t.Context.refreshAll()
    }
    ;
    n.prototype.handleScroll = function() {
        var u = {}, i = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        }, r, f, s;
        for (r in i) {
            var n = i[r]
              , h = n.newScroll > n.oldScroll
              , c = h ? n.forward : n.backward;
            for (f in this.waypoints[r]) {
                var t = this.waypoints[r][f]
                  , e = n.oldScroll < t.triggerPoint
                  , o = n.newScroll >= t.triggerPoint
                  , l = e && o
                  , a = !e && !o;
                (l || a) && (t.queueTrigger(c),
                u[t.group.id] = t.group)
            }
        }
        for (s in u)
            u[s].flushTriggers();
        this.oldScroll = {
            x: i.horizontal.newScroll,
            y: i.vertical.newScroll
        }
    }
    ;
    n.prototype.innerHeight = function() {
        return this.element == this.element.window ? t.viewportHeight() : this.adapter.innerHeight()
    }
    ;
    n.prototype.remove = function(n) {
        delete this.waypoints[n.axis][n.key];
        this.checkEmpty()
    }
    ;
    n.prototype.innerWidth = function() {
        return this.element == this.element.window ? t.viewportWidth() : this.adapter.innerWidth()
    }
    ;
    n.prototype.destroy = function() {
        var t = [], i, r, n, u;
        for (i in this.waypoints)
            for (r in this.waypoints[i])
                t.push(this.waypoints[i][r]);
        for (n = 0,
        u = t.length; u > n; n++)
            t[n].destroy()
    }
    ;
    n.prototype.refresh = function() {
        var o, u = this.element == this.element.window, l = u ? void 0 : this.adapter.offset(), f = {}, e, i, a;
        this.handleScroll();
        o = {
            horizontal: {
                contextOffset: u ? 0 : l.left,
                contextScroll: u ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: u ? 0 : l.top,
                contextScroll: u ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (e in o) {
            i = o[e];
            for (a in this.waypoints[e]) {
                var v, s, h, y, p, n = this.waypoints[e][a], r = n.options.offset, w = n.triggerPoint, b = 0, c = null == w;
                n.element !== n.element.window && (b = n.adapter.offset()[i.offsetProp]);
                "function" == typeof r ? r = r.apply(n) : "string" == typeof r && (r = parseFloat(r),
                n.options.offset.indexOf("%") > -1 && (r = Math.ceil(i.contextDimension * r / 100)));
                v = i.contextScroll - i.contextOffset;
                n.triggerPoint = b + v - r;
                s = w < i.oldScroll;
                h = n.triggerPoint >= i.oldScroll;
                y = s && h;
                p = !s && !h;
                !c && y ? (n.queueTrigger(i.backward),
                f[n.group.id] = n.group) : !c && p ? (n.queueTrigger(i.forward),
                f[n.group.id] = n.group) : c && i.oldScroll >= n.triggerPoint && (n.queueTrigger(i.forward),
                f[n.group.id] = n.group)
            }
        }
        return t.requestAnimationFrame(function() {
            for (var n in f)
                f[n].flushTriggers()
        }),
        this
    }
    ;
    n.findOrCreateByElement = function(t) {
        return n.findByElement(t) || new n(t)
    }
    ;
    n.refreshAll = function() {
        for (var n in i)
            i[n].refresh()
    }
    ;
    n.findByElement = function(n) {
        return i[n.waypointContextKey]
    }
    ;
    window.onload = function() {
        u && u();
        n.refreshAll()
    }
    ;
    t.requestAnimationFrame = function(n) {
        var t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || f;
        t.call(window, n)
    }
    ;
    t.Context = n
}(),
function() {
    "use strict";
    function i(n, t) {
        return n.triggerPoint - t.triggerPoint
    }
    function u(n, t) {
        return t.triggerPoint - n.triggerPoint
    }
    function n(n) {
        this.name = n.name;
        this.axis = n.axis;
        this.id = this.name + "-" + this.axis;
        this.waypoints = [];
        this.clearTriggerQueues();
        r[this.axis][this.name] = this
    }
    var r = {
        vertical: {},
        horizontal: {}
    }
      , t = window.Waypoint;
    n.prototype.add = function(n) {
        this.waypoints.push(n)
    }
    ;
    n.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }
    ;
    n.prototype.flushTriggers = function() {
        var n, t, e, r, o, f;
        for (n in this.triggerQueues)
            for (t = this.triggerQueues[n],
            e = "up" === n || "left" === n,
            t.sort(e ? u : i),
            r = 0,
            o = t.length; o > r; r += 1)
                f = t[r],
                (f.options.continuous || r === t.length - 1) && f.trigger([n]);
        this.clearTriggerQueues()
    }
    ;
    n.prototype.next = function(n) {
        this.waypoints.sort(i);
        var r = t.Adapter.inArray(n, this.waypoints)
          , u = r === this.waypoints.length - 1;
        return u ? null : this.waypoints[r + 1]
    }
    ;
    n.prototype.previous = function(n) {
        this.waypoints.sort(i);
        var r = t.Adapter.inArray(n, this.waypoints);
        return r ? this.waypoints[r - 1] : null
    }
    ;
    n.prototype.queueTrigger = function(n, t) {
        this.triggerQueues[t].push(n)
    }
    ;
    n.prototype.remove = function(n) {
        var i = t.Adapter.inArray(n, this.waypoints);
        i > -1 && this.waypoints.splice(i, 1)
    }
    ;
    n.prototype.first = function() {
        return this.waypoints[0]
    }
    ;
    n.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }
    ;
    n.findOrCreate = function(t) {
        return r[t.axis][t.name] || new n(t)
    }
    ;
    t.Group = n
}(),
function() {
    "use strict";
    function n(n) {
        this.$element = t(n)
    }
    var t = window.jQuery
      , i = window.Waypoint;
    t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, i) {
        n.prototype[i] = function() {
            var n = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, n)
        }
    });
    t.each(["extend", "inArray", "isEmptyObject"], function(i, r) {
        n[r] = t[r]
    });
    i.adapters.push({
        name: "jquery",
        Adapter: n
    });
    i.Adapter = n
}(),
function() {
    "use strict";
    function n(n) {
        return function() {
            var r = []
              , i = arguments[0];
            return n.isFunction(arguments[0]) && (i = n.extend({}, arguments[1]),
            i.handler = arguments[0]),
            this.each(function() {
                var u = n.extend({}, i, {
                    element: this
                });
                "string" == typeof u.context && (u.context = n(this).closest(u.context)[0]);
                r.push(new t(u))
            }),
            r
        }
    }
    var t = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = n(window.jQuery));
    window.Zepto && (window.Zepto.fn.waypoint = n(window.Zepto))
}();
!function(n) {
    n.fn.niceSelect = function(t) {
        function i(t) {
            t.after(n("<div><\/div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"><\/span><ul class="list"><\/ul>'));
            var i = t.next()
              , u = t.find("option")
              , r = t.find("option:selected");
            i.find(".current").html(r.data("display") || r.text());
            u.each(function() {
                var t = n(this)
                  , r = t.data("display");
                i.find("ul").append(n("<li><\/li>").attr("data-value", t.val()).attr("data-display", r || null).addClass("option" + (t.is(":selected") ? " selected" : "") + (t.is(":disabled") ? " disabled" : "")).html(t.text()))
            })
        }
        if ("string" == typeof t)
            return "update" == t ? this.each(function() {
                var r = n(this)
                  , t = n(this).next(".nice-select")
                  , u = t.hasClass("open");
                t.length && (t.remove(),
                i(r),
                u && r.next().trigger("click"))
            }) : "destroy" == t ? (this.each(function() {
                var i = n(this)
                  , t = n(this).next(".nice-select");
                t.length && (t.remove(),
                i.css("display", ""))
            }),
            0 == n(".nice-select").length && n(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'),
            this;
        this.hide();
        this.each(function() {
            var t = n(this);
            t.next().hasClass("nice-select") || i(t)
        });
        n(document).off(".nice_select");
        n(document).on("click.nice_select", ".nice-select", function() {
            var t = n(this);
            n(".nice-select").not(t).removeClass("open");
            t.toggleClass("open");
            t.hasClass("open") ? (t.find(".option"),
            t.find(".focus").removeClass("focus"),
            t.find(".selected").addClass("focus")) : t.focus()
        });
        n(document).on("click.nice_select", function(t) {
            0 === n(t.target).closest(".nice-select").length && n(".nice-select").removeClass("open").find(".option")
        });
        n(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function() {
            var t = n(this), i = t.closest(".nice-select"), r;
            i.find(".selected").removeClass("selected");
            t.addClass("selected");
            r = t.data("display") || t.text();
            i.find(".current").text(r);
            i.prev("select").val(t.data("value")).trigger("change")
        });
        n(document).on("keydown.nice_select", ".nice-select", function(t) {
            var i = n(this), r = n(i.find(".focus") || i.find(".list .option.selected")), u, f;
            if (32 == t.keyCode || 13 == t.keyCode)
                return i.hasClass("open") ? r.trigger("click") : i.trigger("click"),
                !1;
            if (40 == t.keyCode)
                return i.hasClass("open") ? (u = r.nextAll(".option:not(.disabled)").first(),
                u.length > 0 && (i.find(".focus").removeClass("focus"),
                u.addClass("focus"))) : i.trigger("click"),
                !1;
            if (38 == t.keyCode)
                return i.hasClass("open") ? (f = r.prevAll(".option:not(.disabled)").first(),
                f.length > 0 && (i.find(".focus").removeClass("focus"),
                f.addClass("focus"))) : i.trigger("click"),
                !1;
            if (27 == t.keyCode)
                i.hasClass("open") && i.trigger("click");
            else if (9 == t.keyCode && i.hasClass("open"))
                return !1
        });
        var r = document.createElement("a").style;
        return r.cssText = "pointer-events:auto",
        "auto" !== r.pointerEvents && n("html").addClass("no-csspointerevents"),
        this
    }
}(jQuery);
!function(n, t, i, r) {
    function u(t, i) {
        this.settings = null;
        this.options = n.extend({}, u.Defaults, i);
        this.$element = n(t);
        this._handlers = {};
        this._plugins = {};
        this._supress = {};
        this._current = null;
        this._speed = null;
        this._coordinates = [];
        this._breakpoint = null;
        this._width = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._widths = [];
        this._invalidated = {};
        this._pipe = [];
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        };
        this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        };
        n.each(["onResize", "onThrottledResize"], n.proxy(function(t, i) {
            this._handlers[i] = n.proxy(this[i], this)
        }, this));
        n.each(u.Plugins, n.proxy(function(n, t) {
            this._plugins[n.charAt(0).toLowerCase() + n.slice(1)] = new t(this)
        }, this));
        n.each(u.Workers, n.proxy(function(t, i) {
            this._pipe.push({
                filter: i.filter,
                run: n.proxy(i.run, this)
            })
        }, this));
        this.setup();
        this.initialize()
    }
    u.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: t,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    };
    u.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    };
    u.Type = {
        Event: "event",
        State: "state"
    };
    u.Plugins = {};
    u.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            n.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var t = this.settings.margin || ""
              , u = !this.settings.autoWidth
              , i = this.settings.rtl
              , r = {
                width: "auto",
                "margin-left": i ? t : "",
                "margin-right": i ? "" : t
            };
            u || this.$stage.children().css(r);
            n.css = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var r = (this.width() / this.settings.items).toFixed(3) - this.settings.margin
              , t = null
              , i = this._items.length
              , f = !this.settings.autoWidth
              , u = [];
            for (n.items = {
                merge: !1,
                width: r
            }; i--; )
                t = this._mergers[i],
                t = this.settings.mergeFit && Math.min(t, this.settings.items) || t,
                n.items.merge = t > 1 || n.items.merge,
                u[i] = f ? r * t : this._items[i].width();
            this._widths = u
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = []
              , i = this._items
              , r = this.settings
              , f = Math.max(2 * r.items, 4)
              , s = 2 * Math.ceil(i.length / 2)
              , e = r.loop && i.length ? r.rewind ? f : Math.max(f, s) : 0
              , o = ""
              , u = "";
            for (e /= 2; e--; )
                t.push(this.normalize(t.length / 2, !0)),
                o += i[t[t.length - 1]][0].outerHTML,
                t.push(this.normalize(i.length - 1 - (t.length - 1) / 2, !0)),
                u = i[t[t.length - 1]][0].outerHTML + u;
            this._clones = t;
            n(o).addClass("cloned").appendTo(this.$stage);
            n(u).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var u = this.settings.rtl ? 1 : -1, f = this._clones.length + this._items.length, n = -1, i = 0, r = 0, t = []; ++n < f; )
                i = t[n - 1] || 0,
                r = this._widths[this.relative(n)] + this.settings.margin,
                t.push(i + r * u);
            this._coordinates = t
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var n = this.settings.stagePadding
              , t = this._coordinates
              , i = {
                width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * n,
                "padding-left": n || "",
                "padding-right": n || ""
            };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var t = this._coordinates.length
              , i = !this.settings.autoWidth
              , r = this.$stage.children();
            if (i && n.items.merge)
                for (; t--; )
                    n.css.width = this._widths[this.relative(t)],
                    r.eq(t).css(n.css);
            else
                i && (n.css.width = n.items.width,
                r.css(n.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            n.current = n.current ? this.$stage.children().index(n.current) : 0;
            n.current = Math.max(this.minimum(), Math.min(this.maximum(), n.current));
            this.reset(n.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            for (var t, i, f = this.settings.rtl ? 1 : -1, e = 2 * this.settings.stagePadding, r = this.coordinates(this.current()) + e, o = r + this.width() * f, s = [], n = 0, u = this._coordinates.length; n < u; n++)
                t = this._coordinates[n - 1] || 0,
                i = Math.abs(this._coordinates[n]) + e * f,
                (this.op(t, "<=", r) && this.op(t, ">", o) || this.op(i, "<", r) && this.op(i, ">", o)) && s.push(n);
            this.$stage.children(".active").removeClass("active");
            this.$stage.children(":eq(" + s.join("), :eq(") + ")").addClass("active");
            this.settings.center && (this.$stage.children(".center").removeClass("center"),
            this.$stage.children().eq(this.current()).addClass("center"))
        }
    }];
    u.prototype.initialize = function() {
        if (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading")) {
            var t, i, u;
            t = this.$element.find("img");
            i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r;
            u = this.$element.children(i).width();
            t.length && u <= 0 && this.preloadAutoWidthImages(t)
        }
        this.$element.addClass(this.options.loadingClass);
        this.$stage = n("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>');
        this.$element.append(this.$stage.parent());
        this.replace(this.$element.children().not(this.$stage.parent()));
        this.$element.is(":visible") ? this.refresh() : this.invalidate("width");
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
        this.registerEventHandlers();
        this.leave("initializing");
        this.trigger("initialized")
    }
    ;
    u.prototype.setup = function() {
        var u = this.viewport()
          , r = this.options.responsive
          , i = -1
          , t = null;
        r ? (n.each(r, function(n) {
            n <= u && n > i && (i = Number(n))
        }),
        t = n.extend({}, this.options, r[i]),
        "function" == typeof t.stagePadding && (t.stagePadding = t.stagePadding()),
        delete t.responsive,
        t.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s","g"), "$1" + i))) : t = n.extend({}, this.options);
        this.trigger("change", {
            property: {
                name: "settings",
                value: t
            }
        });
        this._breakpoint = i;
        this.settings = t;
        this.invalidate("settings");
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }
    ;
    u.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1,
        this.settings.merge = !1)
    }
    ;
    u.prototype.prepare = function(t) {
        var i = this.trigger("prepare", {
            content: t
        });
        return i.data || (i.data = n("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)),
        this.trigger("prepared", {
            content: i.data
        }),
        i.data
    }
    ;
    u.prototype.update = function() {
        for (var t = 0, i = this._pipe.length, r = n.proxy(function(n) {
            return this[n]
        }, this._invalidated), u = {}; t < i; )
            (this._invalidated.all || n.grep(this._pipe[t].filter, r).length > 0) && this._pipe[t].run(u),
            t++;
        this._invalidated = {};
        this.is("valid") || this.enter("valid")
    }
    ;
    u.prototype.width = function(n) {
        switch (n = n || u.Width.Default) {
        case u.Width.Inner:
        case u.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }
    ;
    u.prototype.refresh = function() {
        this.enter("refreshing");
        this.trigger("refresh");
        this.setup();
        this.optionsLogic();
        this.$element.addClass(this.options.refreshClass);
        this.update();
        this.$element.removeClass(this.options.refreshClass);
        this.leave("refreshing");
        this.trigger("refreshed")
    }
    ;
    u.prototype.onThrottledResize = function() {
        t.clearTimeout(this.resizeTimer);
        this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }
    ;
    u.prototype.onResize = function() {
        return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"),
        !1) : (this.invalidate("width"),
        this.refresh(),
        this.leave("resizing"),
        void this.trigger("resized")))
    }
    ;
    u.prototype.registerEventHandlers = function() {
        n.support.transition && this.$stage.on(n.support.transition.end + ".owl.core", n.proxy(this.onTransitionEnd, this));
        this.settings.responsive !== !1 && this.on(t, "resize", this._handlers.onThrottledResize);
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
        this.$stage.on("mousedown.owl.core", n.proxy(this.onDragStart, this)),
        this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        }));
        this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", n.proxy(this.onDragStart, this)),
        this.$stage.on("touchcancel.owl.core", n.proxy(this.onDragEnd, this)))
    }
    ;
    u.prototype.onDragStart = function(t) {
        var r = null;
        3 !== t.which && (n.support.transform ? (r = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","),
        r = {
            x: r[16 === r.length ? 12 : 4],
            y: r[16 === r.length ? 13 : 5]
        }) : (r = this.$stage.position(),
        r = {
            x: this.settings.rtl ? r.left + this.$stage.width() - this.width() + this.settings.margin : r.left,
            y: r.top
        }),
        this.is("animating") && (n.support.transform ? this.animate(r.x) : this.$stage.stop(),
        this.invalidate("position")),
        this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type),
        this.speed(0),
        this._drag.time = (new Date).getTime(),
        this._drag.target = n(t.target),
        this._drag.stage.start = r,
        this._drag.stage.current = r,
        this._drag.pointer = this.pointer(t),
        n(i).on("mouseup.owl.core touchend.owl.core", n.proxy(this.onDragEnd, this)),
        n(i).one("mousemove.owl.core touchmove.owl.core", n.proxy(function(t) {
            var r = this.difference(this._drag.pointer, this.pointer(t));
            n(i).on("mousemove.owl.core touchmove.owl.core", n.proxy(this.onDragMove, this));
            Math.abs(r.x) < Math.abs(r.y) && this.is("valid") || (t.preventDefault(),
            this.enter("dragging"),
            this.trigger("drag"))
        }, this)))
    }
    ;
    u.prototype.onDragMove = function(n) {
        var t = null
          , i = null
          , u = null
          , f = this.difference(this._drag.pointer, this.pointer(n))
          , r = this.difference(this._drag.stage.start, f);
        this.is("dragging") && (n.preventDefault(),
        this.settings.loop ? (t = this.coordinates(this.minimum()),
        i = this.coordinates(this.maximum() + 1) - t,
        r.x = ((r.x - t) % i + i) % i + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()),
        i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
        u = this.settings.pullDrag ? f.x / -5 : 0,
        r.x = Math.max(Math.min(r.x, t + u), i + u)),
        this._drag.stage.current = r,
        this.animate(r.x))
    }
    ;
    u.prototype.onDragEnd = function(t) {
        var r = this.difference(this._drag.pointer, this.pointer(t))
          , f = this._drag.stage.current
          , u = r.x > 0 ^ this.settings.rtl ? "left" : "right";
        n(i).off(".owl.core");
        this.$element.removeClass(this.options.grabClass);
        (0 !== r.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
        this.current(this.closest(f.x, 0 !== r.x ? u : this._drag.direction)),
        this.invalidate("position"),
        this.update(),
        this._drag.direction = u,
        (Math.abs(r.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        }));
        this.is("dragging") && (this.leave("dragging"),
        this.trigger("dragged"))
    }
    ;
    u.prototype.closest = function(t, i) {
        var r = -1
          , u = 30
          , e = this.width()
          , f = this.coordinates();
        return this.settings.freeDrag || n.each(f, n.proxy(function(n, o) {
            return "left" === i && t > o - u && t < o + u ? r = n : "right" === i && t > o - e - u && t < o - e + u ? r = n + 1 : this.op(t, "<", o) && this.op(t, ">", f[n + 1] || o - e) && (r = "left" === i ? n + 1 : n),
            r === -1
        }, this)),
        this.settings.loop || (this.op(t, ">", f[this.minimum()]) ? r = t = this.minimum() : this.op(t, "<", f[this.maximum()]) && (r = t = this.maximum())),
        r
    }
    ;
    u.prototype.animate = function(t) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd();
        i && (this.enter("animating"),
        this.trigger("translate"));
        n.support.transform3d && n.support.transition ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : i ? this.$stage.animate({
            left: t + "px"
        }, this.speed(), this.settings.fallbackEasing, n.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: t + "px"
        })
    }
    ;
    u.prototype.is = function(n) {
        return this._states.current[n] && this._states.current[n] > 0
    }
    ;
    u.prototype.current = function(n) {
        if (n === r)
            return this._current;
        if (0 === this._items.length)
            return r;
        if (n = this.normalize(n),
        this._current !== n) {
            var t = this.trigger("change", {
                property: {
                    name: "position",
                    value: n
                }
            });
            t.data !== r && (n = this.normalize(t.data));
            this._current = n;
            this.invalidate("position");
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }
    ;
    u.prototype.invalidate = function(t) {
        return "string" === n.type(t) && (this._invalidated[t] = !0,
        this.is("valid") && this.leave("valid")),
        n.map(this._invalidated, function(n, t) {
            return t
        })
    }
    ;
    u.prototype.reset = function(n) {
        n = this.normalize(n);
        n !== r && (this._speed = 0,
        this._current = n,
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(n)),
        this.release(["translate", "translated"]))
    }
    ;
    u.prototype.normalize = function(n, t) {
        var i = this._items.length
          , u = t ? 0 : this._clones.length;
        return !this.isNumeric(n) || i < 1 ? n = r : (n < 0 || n >= i + u) && (n = ((n - u / 2) % i + i) % i + u / 2),
        n
    }
    ;
    u.prototype.relative = function(n) {
        return n -= this._clones.length / 2,
        this.normalize(n, !0)
    }
    ;
    u.prototype.maximum = function(n) {
        var t, u, f, i = this.settings, r = this._coordinates.length;
        if (i.loop)
            r = this._clones.length / 2 + this._items.length - 1;
        else if (i.autoWidth || i.merge) {
            for (t = this._items.length,
            u = this._items[--t].width(),
            f = this.$element.width(); t-- && (u += this._items[t].width() + this.settings.margin,
            !(u > f)); )
                ;
            r = t + 1
        } else
            r = i.center ? this._items.length - 1 : this._items.length - i.items;
        return n && (r -= this._clones.length / 2),
        Math.max(r, 0)
    }
    ;
    u.prototype.minimum = function(n) {
        return n ? 0 : this._clones.length / 2
    }
    ;
    u.prototype.items = function(n) {
        return n === r ? this._items.slice() : (n = this.normalize(n, !0),
        this._items[n])
    }
    ;
    u.prototype.mergers = function(n) {
        return n === r ? this._mergers.slice() : (n = this.normalize(n, !0),
        this._mergers[n])
    }
    ;
    u.prototype.clones = function(t) {
        var i = this._clones.length / 2
          , f = i + this._items.length
          , u = function(n) {
            return n % 2 == 0 ? f + n / 2 : i - (n + 1) / 2
        };
        return t === r ? n.map(this._clones, function(n, t) {
            return u(t)
        }) : n.map(this._clones, function(n, i) {
            return n === t ? u(i) : null
        })
    }
    ;
    u.prototype.speed = function(n) {
        return n !== r && (this._speed = n),
        this._speed
    }
    ;
    u.prototype.coordinates = function(t) {
        var i, f = 1, u = t - 1;
        return t === r ? n.map(this._coordinates, n.proxy(function(n, t) {
            return this.coordinates(t)
        }, this)) : (this.settings.center ? (this.settings.rtl && (f = -1,
        u = t + 1),
        i = this._coordinates[t],
        i += (this.width() - i + (this._coordinates[u] || 0)) / 2 * f) : i = this._coordinates[u] || 0,
        i = Math.ceil(i))
    }
    ;
    u.prototype.duration = function(n, t, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(t - n), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }
    ;
    u.prototype.to = function(n, t) {
        var f = this.current()
          , r = null
          , i = n - this.relative(f)
          , s = (i > 0) - (i < 0)
          , e = this._items.length
          , o = this.minimum()
          , u = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(i) > e / 2 && (i += s * -1 * e),
        n = f + i,
        r = ((n - o) % e + e) % e + o,
        r !== n && r - i <= u && r - i > 0 && (f = r - i,
        n = r,
        this.reset(f))) : this.settings.rewind ? (u += 1,
        n = (n % u + u) % u) : n = Math.max(o, Math.min(u, n));
        this.speed(this.duration(f, n, t));
        this.current(n);
        this.$element.is(":visible") && this.update()
    }
    ;
    u.prototype.next = function(n) {
        n = n || !1;
        this.to(this.relative(this.current()) + 1, n)
    }
    ;
    u.prototype.prev = function(n) {
        n = n || !1;
        this.to(this.relative(this.current()) - 1, n)
    }
    ;
    u.prototype.onTransitionEnd = function(n) {
        if (n !== r && (n.stopPropagation(),
        (n.target || n.srcElement || n.originalTarget) !== this.$stage.get(0)))
            return !1;
        this.leave("animating");
        this.trigger("translated")
    }
    ;
    u.prototype.viewport = function() {
        var r;
        return this.options.responsiveBaseElement !== t ? r = n(this.options.responsiveBaseElement).width() : t.innerWidth ? r = t.innerWidth : i.documentElement && i.documentElement.clientWidth ? r = i.documentElement.clientWidth : console.warn("Can not detect viewport width."),
        r
    }
    ;
    u.prototype.replace = function(t) {
        this.$stage.empty();
        this._items = [];
        t && (t = t instanceof jQuery ? t : n(t));
        this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector));
        t.filter(function() {
            return 1 === this.nodeType
        }).each(n.proxy(function(n, t) {
            t = this.prepare(t);
            this.$stage.append(t);
            this._items.push(t);
            this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this));
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate("items")
    }
    ;
    u.prototype.add = function(t, i) {
        var u = this.relative(this._current);
        i = i === r ? this._items.length : this.normalize(i, !0);
        t = t instanceof jQuery ? t : n(t);
        this.trigger("add", {
            content: t,
            position: i
        });
        t = this.prepare(t);
        0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(t),
        0 !== this._items.length && this._items[i - 1].after(t),
        this._items.push(t),
        this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(t),
        this._items.splice(i, 0, t),
        this._mergers.splice(i, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1));
        this._items[u] && this.reset(this._items[u].index());
        this.invalidate("items");
        this.trigger("added", {
            content: t,
            position: i
        })
    }
    ;
    u.prototype.remove = function(n) {
        n = this.normalize(n, !0);
        n !== r && (this.trigger("remove", {
            content: this._items[n],
            position: n
        }),
        this._items[n].remove(),
        this._items.splice(n, 1),
        this._mergers.splice(n, 1),
        this.invalidate("items"),
        this.trigger("removed", {
            content: null,
            position: n
        }))
    }
    ;
    u.prototype.preloadAutoWidthImages = function(t) {
        t.each(n.proxy(function(t, i) {
            this.enter("pre-loading");
            i = n(i);
            n(new Image).one("load", n.proxy(function(n) {
                i.attr("src", n.target.src);
                i.css("opacity", 1);
                this.leave("pre-loading");
                !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }
    ;
    u.prototype.destroy = function() {
        this.$element.off(".owl.core");
        this.$stage.off(".owl.core");
        n(i).off(".owl.core");
        this.settings.responsive !== !1 && (t.clearTimeout(this.resizeTimer),
        this.off(t, "resize", this._handlers.onThrottledResize));
        for (var r in this._plugins)
            this._plugins[r].destroy();
        this.$stage.children(".cloned").remove();
        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s","g"), "")).removeData("owl.carousel")
    }
    ;
    u.prototype.op = function(n, t, i) {
        var r = this.settings.rtl;
        switch (t) {
        case "<":
            return r ? n > i : n < i;
        case ">":
            return r ? n < i : n > i;
        case ">=":
            return r ? n <= i : n >= i;
        case "<=":
            return r ? n >= i : n <= i
        }
    }
    ;
    u.prototype.on = function(n, t, i, r) {
        n.addEventListener ? n.addEventListener(t, i, r) : n.attachEvent && n.attachEvent("on" + t, i)
    }
    ;
    u.prototype.off = function(n, t, i, r) {
        n.removeEventListener ? n.removeEventListener(t, i, r) : n.detachEvent && n.detachEvent("on" + t, i)
    }
    ;
    u.prototype.trigger = function(t, i, r) {
        var o = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }
          , e = n.camelCase(n.grep(["on", t, r], function(n) {
            return n
        }).join("-").toLowerCase())
          , f = n.Event([t, "owl", r || "carousel"].join(".").toLowerCase(), n.extend({
            relatedTarget: this
        }, o, i));
        return this._supress[t] || (n.each(this._plugins, function(n, t) {
            t.onTrigger && t.onTrigger(f)
        }),
        this.register({
            type: u.Type.Event,
            name: t
        }),
        this.$element.trigger(f),
        this.settings && "function" == typeof this.settings[e] && this.settings[e].call(this, f)),
        f
    }
    ;
    u.prototype.enter = function(t) {
        n.each([t].concat(this._states.tags[t] || []), n.proxy(function(n, t) {
            this._states.current[t] === r && (this._states.current[t] = 0);
            this._states.current[t]++
        }, this))
    }
    ;
    u.prototype.leave = function(t) {
        n.each([t].concat(this._states.tags[t] || []), n.proxy(function(n, t) {
            this._states.current[t]--
        }, this))
    }
    ;
    u.prototype.register = function(t) {
        if (t.type === u.Type.Event) {
            if (n.event.special[t.name] || (n.event.special[t.name] = {}),
            !n.event.special[t.name].owl) {
                var i = n.event.special[t.name]._default;
                n.event.special[t.name]._default = function(n) {
                    return !i || !i.apply || n.namespace && n.namespace.indexOf("owl") !== -1 ? n.namespace && n.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                }
                ;
                n.event.special[t.name].owl = !0
            }
        } else
            t.type === u.Type.State && (this._states.tags[t.name] = this._states.tags[t.name] ? this._states.tags[t.name].concat(t.tags) : t.tags,
            this._states.tags[t.name] = n.grep(this._states.tags[t.name], n.proxy(function(i, r) {
                return n.inArray(i, this._states.tags[t.name]) === r
            }, this)))
    }
    ;
    u.prototype.suppress = function(t) {
        n.each(t, n.proxy(function(n, t) {
            this._supress[t] = !0
        }, this))
    }
    ;
    u.prototype.release = function(t) {
        n.each(t, n.proxy(function(n, t) {
            delete this._supress[t]
        }, this))
    }
    ;
    u.prototype.pointer = function(n) {
        var i = {
            x: null,
            y: null
        };
        return n = n.originalEvent || n || t.event,
        n = n.touches && n.touches.length ? n.touches[0] : n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
        n.pageX ? (i.x = n.pageX,
        i.y = n.pageY) : (i.x = n.clientX,
        i.y = n.clientY),
        i
    }
    ;
    u.prototype.isNumeric = function(n) {
        return !isNaN(parseFloat(n))
    }
    ;
    u.prototype.difference = function(n, t) {
        return {
            x: n.x - t.x,
            y: n.y - t.y
        }
    }
    ;
    n.fn.owlCarousel = function(t) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var f = n(this)
              , r = f.data("owl.carousel");
            r || (r = new u(this,"object" == typeof t && t),
            f.data("owl.carousel", r),
            n.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, i) {
                r.register({
                    type: u.Type.Event,
                    name: i
                });
                r.$element.on(i + ".owl.carousel.core", n.proxy(function(n) {
                    n.namespace && n.relatedTarget !== this && (this.suppress([i]),
                    r[i].apply(this, [].slice.call(arguments, 1)),
                    this.release([i]))
                }, r))
            }));
            "string" == typeof t && "_" !== t.charAt(0) && r[t].apply(r, i)
        })
    }
    ;
    n.fn.owlCarousel.Constructor = u
}(window.Zepto || window.jQuery, window, document),
function(n, t) {
    var i = function(t) {
        this._core = t;
        this._interval = null;
        this._visible = null;
        this._handlers = {
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        };
        this._core.options = n.extend({}, i.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    };
    i.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"),
        this._interval = t.setInterval(n.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }
    ;
    i.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible,
        this._core.$element.toggleClass("owl-hidden", !this._visible),
        this._visible && this._core.invalidate("width") && this._core.refresh())
    }
    ;
    i.prototype.destroy = function() {
        var n, i;
        t.clearInterval(this._interval);
        for (n in this._handlers)
            this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this))
            "function" != typeof this[i] && (this[i] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.AutoRefresh = i
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    var u = function(t) {
        this._core = t;
        this._loaded = [];
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": n.proxy(function(t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
                    for (var i = this._core.settings, f = i.center && Math.ceil(i.items / 2) || i.items, e = i.center && f * -1 || 0, u = (t.property && t.property.value !== r ? t.property.value : this._core.current()) + e, o = this._core.clones().length, s = n.proxy(function(n, t) {
                        this.load(t)
                    }, this); e++ < f; )
                        this.load(o / 2 + this._core.relative(u)),
                        o && n.each(this._core.clones(this._core.relative(u)), s),
                        u++
            }, this)
        };
        this._core.options = n.extend({}, u.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    u.Defaults = {
        lazyLoad: !1
    };
    u.prototype.load = function(i) {
        var r = this._core.$stage.children().eq(i)
          , u = r && r.find(".owl-lazy");
        !u || n.inArray(r.get(0), this._loaded) > -1 || (u.each(n.proxy(function(i, r) {
            var e, u = n(r), f = t.devicePixelRatio > 1 && u.attr("data-src-retina") || u.attr("data-src");
            this._core.trigger("load", {
                element: u,
                url: f
            }, "lazy");
            u.is("img") ? u.one("load.owl.lazy", n.proxy(function() {
                u.css("opacity", 1);
                this._core.trigger("loaded", {
                    element: u,
                    url: f
                }, "lazy")
            }, this)).attr("src", f) : (e = new Image,
            e.onload = n.proxy(function() {
                u.css({
                    "background-image": 'url("' + f + '")',
                    opacity: "1"
                });
                this._core.trigger("loaded", {
                    element: u,
                    url: f
                }, "lazy")
            }, this),
            e.src = f)
        }, this)),
        this._loaded.push(r.get(0)))
    }
    ;
    u.prototype.destroy = function() {
        var n, t;
        for (n in this.handlers)
            this._core.$element.off(n, this.handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
            "function" != typeof this[t] && (this[t] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.Lazy = u
}(window.Zepto || window.jQuery, window, document),
function(n) {
    var t = function(i) {
        this._core = i;
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoHeight && "position" == n.property.name && this.update()
            }, this),
            "loaded.owl.lazy": n.proxy(function(n) {
                n.namespace && this._core.settings.autoHeight && n.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        };
        this._core.options = n.extend({}, t.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    t.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    };
    t.prototype.update = function() {
        var t = this._core._current
          , u = t + this._core.settings.items
          , f = this._core.$stage.children().toArray().slice(t, u)
          , i = []
          , r = 0;
        n.each(f, function(t, r) {
            i.push(n(r).height())
        });
        r = Math.max.apply(null, i);
        this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
    }
    ;
    t.prototype.destroy = function() {
        var n, t;
        for (n in this._handlers)
            this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
            "function" != typeof this[t] && (this[t] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.AutoHeight = t
}(window.Zepto || window.jQuery, window, document),
function(n, t, i) {
    var r = function(t) {
        this._core = t;
        this._videos = {};
        this._playing = null;
        this._handlers = {
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.video && this.isInFullScreen() && n.preventDefault()
            }, this),
            "refreshed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && "position" === n.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": n.proxy(function(t) {
                if (t.namespace) {
                    var i = n(t.content).find(".owl-video");
                    i.length && (i.css("display", "none"),
                    this.fetch(i, n(t.content)))
                }
            }, this)
        };
        this._core.options = n.extend({}, r.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", n.proxy(function(n) {
            this.play(n)
        }, this))
    };
    r.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    };
    r.prototype.fetch = function(n, t) {
        var u = function() {
            return n.attr("data-vimeo-id") ? "vimeo" : n.attr("data-vzaar-id") ? "vzaar" : "youtube"
        }()
          , i = n.attr("data-vimeo-id") || n.attr("data-youtube-id") || n.attr("data-vzaar-id")
          , f = n.attr("data-width") || this._core.settings.videoWidth
          , e = n.attr("data-height") || this._core.settings.videoHeight
          , r = n.attr("href");
        if (!r)
            throw new Error("Missing video URL.");
        if (i = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),
        i[3].indexOf("youtu") > -1)
            u = "youtube";
        else if (i[3].indexOf("vimeo") > -1)
            u = "vimeo";
        else {
            if (!(i[3].indexOf("vzaar") > -1))
                throw new Error("Video URL not supported.");
            u = "vzaar"
        }
        i = i[6];
        this._videos[r] = {
            type: u,
            id: i,
            width: f,
            height: e
        };
        t.attr("data-video", r);
        this.thumbnail(n, this._videos[r])
    }
    ;
    r.prototype.thumbnail = function(t, i) {
        var o, s, r, c = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "", f = t.find("img"), e = "src", h = "", l = this._core.settings, u = function(n) {
            s = '<div class="owl-video-play-icon"><\/div>';
            o = l.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + e + '="' + n + '"><\/div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + n + ')"><\/div>';
            t.after(o);
            t.after(s)
        };
        if (t.wrap('<div class="owl-video-wrapper"' + c + "><\/div>"),
        this._core.settings.lazyLoad && (e = "data-src",
        h = "owl-lazy"),
        f.length)
            return u(f.attr(e)),
            f.remove(),
            !1;
        "youtube" === i.type ? (r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg",
        u(r)) : "vimeo" === i.type ? n.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(n) {
                r = n[0].thumbnail_large;
                u(r)
            }
        }) : "vzaar" === i.type && n.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(n) {
                r = n.framegrab_url;
                u(r)
            }
        })
    }
    ;
    r.prototype.stop = function() {
        this._core.trigger("stop", null, "video");
        this._playing.find(".owl-video-frame").remove();
        this._playing.removeClass("owl-video-playing");
        this._playing = null;
        this._core.leave("playing");
        this._core.trigger("stopped", null, "video")
    }
    ;
    r.prototype.play = function(t) {
        var u, o = n(t.target), r = o.closest("." + this._core.settings.itemClass), i = this._videos[r.attr("data-video")], f = i.width || "100%", e = i.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"),
        this._core.trigger("play", null, "video"),
        r = this._core.items(this._core.relative(r.index())),
        this._core.reset(r.index()),
        "youtube" === i.type ? u = '<iframe width="' + f + '" height="' + e + '" src="//www.youtube.com/embed/' + i.id + "?autoplay=1&rel=0&v=" + i.id + '" frameborder="0" allowfullscreen><\/iframe>' : "vimeo" === i.type ? u = '<iframe src="//player.vimeo.com/video/' + i.id + '?autoplay=1" width="' + f + '" height="' + e + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen><\/iframe>' : "vzaar" === i.type && (u = '<iframe frameborder="0"height="' + e + '"width="' + f + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + i.id + '/player?autoplay=true"><\/iframe>'),
        n('<div class="owl-video-frame">' + u + "<\/div>").insertAfter(r.find(".owl-video")),
        this._playing = r.addClass("owl-video-playing"))
    }
    ;
    r.prototype.isInFullScreen = function() {
        var t = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return t && n(t).parent().hasClass("owl-video-frame")
    }
    ;
    r.prototype.destroy = function() {
        var n, t;
        this._core.$element.off("click.owl.video");
        for (n in this._handlers)
            this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
            "function" != typeof this[t] && (this[t] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.Video = r
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    var u = function(t) {
        this.core = t;
        this.core.options = n.extend({}, u.Defaults, this.core.options);
        this.swapping = !0;
        this.previous = r;
        this.next = r;
        this.handlers = {
            "change.owl.carousel": n.proxy(function(n) {
                n.namespace && "position" == n.property.name && (this.previous = this.core.current(),
                this.next = n.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": n.proxy(function(n) {
                n.namespace && (this.swapping = "translated" == n.type)
            }, this),
            "translate.owl.carousel": n.proxy(function(n) {
                n.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        };
        this.core.$element.on(this.handlers)
    };
    u.Defaults = {
        animateOut: !1,
        animateIn: !1
    };
    u.prototype.swap = function() {
        if (1 === this.core.settings.items && n.support.animation && n.support.transition) {
            this.core.speed(0);
            var t, i = n.proxy(this.clear, this), f = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), r = this.core.settings.animateIn, u = this.core.settings.animateOut;
            this.core.current() !== this.previous && (u && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
            f.one(n.support.animation.end, i).css({
                left: t + "px"
            }).addClass("animated owl-animated-out").addClass(u)),
            r && e.one(n.support.animation.end, i).addClass("animated owl-animated-in").addClass(r))
        }
    }
    ;
    u.prototype.clear = function(t) {
        n(t.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd()
    }
    ;
    u.prototype.destroy = function() {
        var n, t;
        for (n in this.handlers)
            this.core.$element.off(n, this.handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
            "function" != typeof this[t] && (this[t] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.Animate = u
}(window.Zepto || window.jQuery, window, document),
function(n, t, i) {
    var r = function(t) {
        this._core = t;
        this._timeout = null;
        this._paused = !1;
        this._handlers = {
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && "settings" === n.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : n.namespace && "position" === n.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": n.proxy(function(n, t, i) {
                n.namespace && this.play(t, i)
            }, this),
            "stop.owl.autoplay": n.proxy(function(n) {
                n.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        };
        this._core.$element.on(this._handlers);
        this._core.options = n.extend({}, r.Defaults, this._core.options)
    };
    r.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    };
    r.prototype.play = function() {
        this._paused = !1;
        this._core.is("rotating") || (this._core.enter("rotating"),
        this._setAutoPlayInterval())
    }
    ;
    r.prototype._getNextTimeout = function(r, u) {
        return this._timeout && t.clearTimeout(this._timeout),
        t.setTimeout(n.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(u || this._core.settings.autoplaySpeed)
        }, this), r || this._core.settings.autoplayTimeout)
    }
    ;
    r.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    }
    ;
    r.prototype.stop = function() {
        this._core.is("rotating") && (t.clearTimeout(this._timeout),
        this._core.leave("rotating"))
    }
    ;
    r.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    }
    ;
    r.prototype.destroy = function() {
        var n, t;
        this.stop();
        for (n in this._handlers)
            this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
            "function" != typeof this[t] && (this[t] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.autoplay = r
}(window.Zepto || window.jQuery, window, document),
function(n) {
    "use strict";
    var t = function(i) {
        this._core = i;
        this._initialized = !1;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };
        this._handlers = {
            "prepared.owl.carousel": n.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + n(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "<\/div>")
            }, this),
            "added.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.dotsData && this._templates.splice(n.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.dotsData && this._templates.splice(n.position, 1)
            }, this),
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && "position" == n.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                this.initialize(),
                this.update(),
                this.draw(),
                this._initialized = !0,
                this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                this.update(),
                this.draw(),
                this._core.trigger("refreshed", null, "navigation"))
            }, this)
        };
        this._core.options = n.extend({}, t.Defaults, this._core.options);
        this.$element.on(this._handlers)
    };
    t.Defaults = {
        nav: !1,
        navText: ["Önce", "Sonra"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    };
    t.prototype.initialize = function() {
        var i, t = this._core.settings;
        this._controls.$relative = (t.navContainer ? n(t.navContainer) : n("<div>").addClass(t.navContainerClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$previous = n("<" + t.navElement + ">").addClass(t.navClass[0]).html(t.navText[0]).prependTo(this._controls.$relative).on("click", n.proxy(function() {
            this.prev(t.navSpeed)
        }, this));
        this._controls.$next = n("<" + t.navElement + ">").addClass(t.navClass[1]).html(t.navText[1]).appendTo(this._controls.$relative).on("click", n.proxy(function() {
            this.next(t.navSpeed)
        }, this));
        t.dotsData || (this._templates = [n("<div>").addClass(t.dotClass).append(n("<span>")).prop("outerHTML")]);
        this._controls.$absolute = (t.dotsContainer ? n(t.dotsContainer) : n("<div>").addClass(t.dotsClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$absolute.on("click", "div", n.proxy(function(i) {
            var r = n(i.target).parent().is(this._controls.$absolute) ? n(i.target).index() : n(i.target).parent().index();
            i.preventDefault();
            this.to(r, t.dotsSpeed)
        }, this));
        for (i in this._overrides)
            this._core[i] = n.proxy(this[i], this)
    }
    ;
    t.prototype.destroy = function() {
        var n, r, t, i;
        for (n in this._handlers)
            this.$element.off(n, this._handlers[n]);
        for (r in this._controls)
            this._controls[r].remove();
        for (i in this.overides)
            this._core[i] = this._overrides[i];
        for (t in Object.getOwnPropertyNames(this))
            "function" != typeof this[t] && (this[t] = null)
    }
    ;
    t.prototype.update = function() {
        var t, i, f, r = this._core.clones().length / 2, o = r + this._core.items().length, u = this._core.maximum(!0), n = this._core.settings, e = n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items;
        if ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)),
        n.dots || "page" == n.slideBy)
            for (this._pages = [],
            t = r,
            i = 0,
            f = 0; t < o; t++) {
                if (i >= e || 0 === i) {
                    if (this._pages.push({
                        start: Math.min(u, t - r),
                        end: t - r + e - 1
                    }),
                    Math.min(u, t - r) === u)
                        break;
                    i = 0;
                    ++f
                }
                i += this._core.mergers(this._core.relative(t))
            }
    }
    ;
    t.prototype.draw = function() {
        var i, t = this._core.settings, r = this._core.items().length <= t.items, u = this._core.relative(this._core.current()), f = t.loop || t.rewind;
        this._controls.$relative.toggleClass("disabled", !t.nav || r);
        t.nav && (this._controls.$previous.toggleClass("disabled", !f && u <= this._core.minimum(!0)),
        this._controls.$next.toggleClass("disabled", !f && u >= this._core.maximum(!0)));
        this._controls.$absolute.toggleClass("disabled", !t.dots || r);
        t.dots && (i = this._pages.length - this._controls.$absolute.children().length,
        t.dotsData && 0 !== i ? this._controls.$absolute.html(this._templates.join("")) : i > 0 ? this._controls.$absolute.append(new Array(i + 1).join(this._templates[0])) : i < 0 && this._controls.$absolute.children().slice(i).remove(),
        this._controls.$absolute.find(".active").removeClass("active"),
        this._controls.$absolute.children().eq(n.inArray(this.current(), this._pages)).addClass("active"))
    }
    ;
    t.prototype.onTrigger = function(t) {
        var i = this._core.settings;
        t.page = {
            index: n.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }
    ;
    t.prototype.current = function() {
        var t = this._core.relative(this._core.current());
        return n.grep(this._pages, n.proxy(function(n) {
            return n.start <= t && n.end >= t
        }, this)).pop()
    }
    ;
    t.prototype.getPosition = function(t) {
        var i, r, u = this._core.settings;
        return "page" == u.slideBy ? (i = n.inArray(this.current(), this._pages),
        r = this._pages.length,
        t ? ++i : --i,
        i = this._pages[(i % r + r) % r].start) : (i = this._core.relative(this._core.current()),
        r = this._core.items().length,
        t ? i += u.slideBy : i -= u.slideBy),
        i
    }
    ;
    t.prototype.next = function(t) {
        n.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }
    ;
    t.prototype.prev = function(t) {
        n.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }
    ;
    t.prototype.to = function(t, i, r) {
        var u;
        !r && this._pages.length ? (u = this._pages.length,
        n.proxy(this._overrides.to, this._core)(this._pages[(t % u + u) % u].start, i)) : n.proxy(this._overrides.to, this._core)(t, i)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.Navigation = t
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    "use strict";
    var u = function(i) {
        this._core = i;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = {
            "initialized.owl.carousel": n.proxy(function(i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && n(t).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": n.proxy(function(t) {
                if (t.namespace) {
                    var i = n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i)
                        return;
                    this._hashes[i] = t.content
                }
            }, this),
            "changed.owl.carousel": n.proxy(function(i) {
                if (i.namespace && "position" === i.property.name) {
                    var u = this._core.items(this._core.relative(this._core.current()))
                      , r = n.map(this._hashes, function(n, t) {
                        return n === u ? t : null
                    }).join();
                    if (!r || t.location.hash.slice(1) === r)
                        return;
                    t.location.hash = r
                }
            }, this)
        };
        this._core.options = n.extend({}, u.Defaults, this._core.options);
        this.$element.on(this._handlers);
        n(t).on("hashchange.owl.navigation", n.proxy(function() {
            var i = t.location.hash.substring(1)
              , u = this._core.$stage.children()
              , n = this._hashes[i] && u.index(this._hashes[i]);
            n !== r && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
        }, this))
    };
    u.Defaults = {
        URLhashListener: !1
    };
    u.prototype.destroy = function() {
        var i, r;
        n(t).off("hashchange.owl.navigation");
        for (i in this._handlers)
            this._core.$element.off(i, this._handlers[i]);
        for (r in Object.getOwnPropertyNames(this))
            "function" != typeof this[r] && (this[r] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.Hash = u
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    function u(t, i) {
        var u = !1
          , f = t.charAt(0).toUpperCase() + t.slice(1);
        return n.each((t + " " + h.join(f + " ") + f).split(" "), function(n, t) {
            if (s[t] !== r)
                return u = !i || t,
                !1
        }),
        u
    }
    function e(n) {
        return u(n, !0)
    }
    var s = n("<support>").get(0).style
      , h = "Webkit Moz O ms".split(" ")
      , o = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }
      , f = {
        csstransforms: function() {
            return !!u("transform")
        },
        csstransforms3d: function() {
            return !!u("perspective")
        },
        csstransitions: function() {
            return !!u("transition")
        },
        cssanimations: function() {
            return !!u("animation")
        }
    };
    f.csstransitions() && (n.support.transition = new String(e("transition")),
    n.support.transition.end = o.transition.end[n.support.transition]);
    f.cssanimations() && (n.support.animation = new String(e("animation")),
    n.support.animation.end = o.animation.end[n.support.animation]);
    f.csstransforms() && (n.support.transform = new String(e("transform")),
    n.support.transform3d = f.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
/*! owl.carousel2.thumbs - v0.1.8 | (c) 2016 @gijsroge | MIT license | https://github.com/gijsroge/OwlCarousel2-Thumbs */
!function(n, t, i, r) {
    "use strict";
    var u = function(t) {
        this.owl = t;
        this._thumbcontent = [];
        this._identifier = 0;
        this.owl_currentitem = this.owl.options.startPosition;
        this.$element = this.owl.$element;
        this._handlers = {
            "prepared.owl.carousel": n.proxy(function(t) {
                if (!t.namespace || !this.owl.options.thumbs || this.owl.options.thumbImage || this.owl.options.thumbsPrerendered || this.owl.options.thumbImage) {
                    if (t.namespace && this.owl.options.thumbs && this.owl.options.thumbImage) {
                        var i = n(t.content).find("img");
                        this._thumbcontent.push(i)
                    }
                } else
                    n(t.content).find("[data-thumb]").attr("data-thumb") !== r && this._thumbcontent.push(n(t.content).find("[data-thumb]").attr("data-thumb"))
            }, this),
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && this.owl.options.thumbs && (this.render(),
                this.listen(),
                this._identifier = this.owl.$element.data("slider-id"),
                this.setActive())
            }, this),
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && "position" === n.property.name && this.owl.options.thumbs && (this._identifier = this.owl.$element.data("slider-id"),
                this.setActive())
            }, this)
        };
        this.owl.options = n.extend({}, u.Defaults, this.owl.options);
        this.owl.$element.on(this._handlers)
    };
    u.Defaults = {
        thumbs: !0,
        thumbImage: !1,
        thumbContainerClass: "owl-thumbs",
        thumbItemClass: "owl-thumb-item",
        moveThumbsInside: !1
    };
    u.prototype.listen = function() {
        var t = this.owl.options;
        t.thumbsPrerendered && (this._thumbcontent._thumbcontainer = n("." + t.thumbContainerClass));
        n(this._thumbcontent._thumbcontainer).on("click", this._thumbcontent._thumbcontainer.children(), n.proxy(function(i) {
            this._identifier = n(i.target).closest("." + t.thumbContainerClass).data("slider-id");
            var r = n(i.target).parent().is(this._thumbcontent._thumbcontainer) ? n(i.target).index() : n(i.target).closest("." + t.thumbItemClass).index();
            t.thumbsPrerendered ? n("[data-slider-id=" + this._identifier + "]").trigger("to.owl.carousel", [r, t.dotsSpeed, !0]) : this.owl.to(r, t.dotsSpeed);
            i.preventDefault()
        }, this))
    }
    ;
    u.prototype.render = function() {
        var i = this.owl.options, t;
        if (i.thumbsPrerendered ? (this._thumbcontent._thumbcontainer = n("." + i.thumbContainerClass),
        i.moveThumbsInside && this._thumbcontent._thumbcontainer.appendTo(this.$element)) : this._thumbcontent._thumbcontainer = n("<div>").addClass(i.thumbContainerClass).appendTo(this.$element),
        i.thumbImage)
            for (t = 0; t < this._thumbcontent.length; ++t)
                this._thumbcontent._thumbcontainer.append("<button class=" + i.thumbItemClass + '><img src="' + this._thumbcontent[t].attr("src") + '" alt="' + this._thumbcontent[t].attr("alt") + '" /><\/button>');
        else
            for (t = 0; t < this._thumbcontent.length; ++t)
                this._thumbcontent._thumbcontainer.append("<button class=" + i.thumbItemClass + ">" + this._thumbcontent[t] + "<\/button>")
    }
    ;
    u.prototype.setActive = function() {
        this.owl_currentitem = this.owl._current - this.owl._clones.length / 2;
        this.owl_currentitem === this.owl._items.length && (this.owl_currentitem = 0);
        var t = this.owl.options
          , i = t.thumbsPrerendered ? n("." + t.thumbContainerClass + '[data-slider-id="' + this._identifier + '"]') : this._thumbcontent._thumbcontainer;
        i.children().filter(".active").removeClass("active");
        i.children().eq(this.owl_currentitem).addClass("active")
    }
    ;
    u.prototype.destroy = function() {
        var n, t;
        for (n in this._handlers)
            this.owl.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this))
            "function" != typeof this[t] && (this[t] = null)
    }
    ;
    n.fn.owlCarousel.Constructor.Plugins.Thumbs = u
}(window.Zepto || window.jQuery, window, document);
!function(n) {
    "use strict";
    n.fn.countUp = function(t) {
        var i = n.extend({
            time: 2e3,
            delay: 10
        }, t);
        return this.each(function() {
            var t = n(this)
              , r = i
              , u = function() {
                var i, h;
                t.data("counterupTo") || t.data("counterupTo", t.text());
                var c = parseInt(t.data("counter-time")) > 0 ? parseInt(t.data("counter-time")) : r.time
                  , f = parseInt(t.data("counter-delay")) > 0 ? parseInt(t.data("counter-delay")) : r.delay
                  , e = c / f
                  , n = t.data("counterupTo")
                  , o = [n]
                  , l = /[0-9]+,[0-9]+/.test(n);
                n = n.replace(/,/g, "");
                for (var s = (/^[0-9]+$/.test(n),
                /^[0-9]+\.[0-9]+$/.test(n)), a = s ? (n.split(".")[1] || []).length : 0, u = e; u >= 1; u--) {
                    if (i = parseInt(Math.round(n / e * u)),
                    s && (i = parseFloat(n / e * u).toFixed(a)),
                    l)
                        for (; /(\d+)(\d{3})/.test(i.toString()); )
                            i = i.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                    o.unshift(i)
                }
                t.data("counterup-nums", o);
                t.text("0");
                h = function() {
                    t.text(t.data("counterup-nums").shift());
                    t.data("counterup-nums").length ? setTimeout(t.data("counterup-func"), f) : (delete t.data("counterup-nums"),
                    t.data("counterup-nums", null),
                    t.data("counterup-func", null))
                }
                ;
                t.data("counterup-func", h);
                setTimeout(t.data("counterup-func"), f)
            };
            t.waypoint(u, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
}(jQuery);
!function(n) {
    "use strict";
    "function" == typeof define && define.amd ? define("parollerjs", ["jquery"], n) : "object" == typeof module && "object" == typeof module.exports ? module.exports = n(require("jquery")) : n(jQuery)
}(function(n) {
    "use strict";
    var t = !1
      , e = function() {
        t = !1
    }
      , i = function(n, t) {
        return n.css({
            "background-position": "center " + -t + "px"
        })
    }
      , r = function(n, t) {
        return n.css({
            "background-position": -t + "px center"
        })
    }
      , u = function(n, t, i, r) {
        return "none" !== r || (r = ""),
        n.css({
            "-webkit-transform": "translateY(" + t + "px)" + r,
            "-moz-transform": "translateY(" + t + "px)" + r,
            transform: "translate(0," + t + "px)" + r,
            transition: i,
            "will-change": "transform"
        })
    }
      , f = function(n, t, i, r) {
        return "none" !== r || (r = ""),
        n.css({
            "-webkit-transform": "translateX(" + t + "px)" + r,
            "-moz-transform": "translateX(" + t + "px)" + r,
            transform: "translate(" + t + "px, 0)" + r,
            transition: i,
            "will-change": "transform"
        })
    }
      , o = function(n, t, i) {
        var y = n.data("paroller-factor"), r = y || i.factor, u, f, e, o, s, h, c, l, a, v;
        return t < 576 ? (u = n.data("paroller-factor-xs"),
        f = u || i.factorXs,
        f || r) : t <= 768 ? (e = n.data("paroller-factor-sm"),
        o = e || i.factorSm,
        o || r) : t <= 1024 ? (s = n.data("paroller-factor-md"),
        h = s || i.factorMd,
        h || r) : t <= 1200 ? (c = n.data("paroller-factor-lg"),
        l = c || i.factorLg,
        l || r) : t <= 1920 ? (a = n.data("paroller-factor-xl"),
        v = a || i.factorXl,
        v || r) : r
    }
      , s = function(n, t) {
        return Math.round(n * t)
    }
      , h = function(n, t, i, r) {
        return Math.round((n - i / 2 + r) * t)
    }
      , c = function(n) {
        return n.css({
            "background-position": "unset"
        })
    }
      , l = function(n) {
        return n.css({
            transform: "unset",
            transition: "unset"
        })
    };
    n.fn.paroller = function(a) {
        var v = n(window).height()
          , y = n(document).height();
        return a = n.extend({
            factor: 0,
            factorXs: 0,
            factorSm: 0,
            factorMd: 0,
            factorLg: 0,
            factorXl: 0,
            transition: "transform .1s ease",
            type: "background",
            direction: "vertical"
        }, a),
        this.each(function() {
            var p = n(this)
              , ut = n(window).width()
              , g = p.offset().top
              , it = p.outerHeight()
              , ft = p.data("paroller-type")
              , et = p.data("paroller-direction")
              , ot = p.data("paroller-transition")
              , rt = p.css("transform")
              , nt = ot || a.transition
              , tt = ft || a.type
              , w = et || a.direction
              , b = 0
              , k = s(g, b)
              , d = h(g, b, v, it);
            "background" === tt ? "vertical" === w ? i(p, k) : "horizontal" === w && r(p, k) : "foreground" === tt && ("vertical" === w ? u(p, d, nt, rt) : "horizontal" === w && f(p, d, nt, rt));
            n(window).on("resize", function() {
                var s = n(this).scrollTop();
                ut = n(window).width();
                g = p.offset().top;
                it = p.outerHeight();
                b = o(p, ut, a);
                k = Math.round(g * b);
                d = Math.round((g - v / 2 + it) * b);
                t || (window.requestAnimationFrame(e),
                t = !0);
                "background" === tt ? (c(p),
                "vertical" === w ? i(p, k) : "horizontal" === w && r(p, k)) : "foreground" === tt && s <= y && (l(p),
                "vertical" === w ? u(p, d, nt) : "horizontal" === w && f(p, d, nt))
            });
            n(window).on("scroll", function() {
                var s = n(this).scrollTop()
                  , h = n(document).scrollTop();
                b = 0 === h ? 0 : o(p, ut, a);
                k = Math.round((g - s) * b);
                d = Math.round((g - v / 2 + it - s) * b);
                t || (window.requestAnimationFrame(e),
                t = !0);
                "background" === tt ? "vertical" === w ? i(p, k) : "horizontal" === w && r(p, k) : "foreground" === tt && s <= y && ("vertical" === w ? u(p, d, nt, rt) : "horizontal" === w && f(p, d, nt, rt))
            })
        })
    }
});
!function() {
    "use strict";
    function t(r) {
        return "undefined" == typeof this || Object.getPrototypeOf(this) !== t.prototype ? new t(r) : (n = this,
        n.version = "3.4.0",
        n.tools = new i,
        n.isSupported() ? (n.tools.extend(n.defaults, r || {}),
        n.defaults.container = f(n.defaults),
        n.store = {
            elements: {},
            containers: []
        },
        n.sequences = {},
        n.history = [],
        n.uid = 0,
        n.initialized = !1) : "undefined" != typeof console && null !== console,
        n)
    }
    function f(t) {
        if (t && t.container) {
            if ("string" == typeof t.container)
                return window.document.documentElement.querySelector(t.container);
            if (n.tools.isNode(t.container))
                return t.container
        }
        return n.defaults.container
    }
    function y(t, i) {
        return "string" == typeof t ? Array.prototype.slice.call(i.querySelectorAll(t)) : n.tools.isNode(t) ? [t] : n.tools.isNodeList(t) ? Array.prototype.slice.call(t) : Array.isArray(t) ? t.filter(n.tools.isNode) : []
    }
    function e() {
        return ++n.uid
    }
    function p(t, i, r) {
        i.container && (i.container = r);
        t.config = t.config ? n.tools.extendClone(t.config, i) : n.tools.extendClone(n.defaults, i);
        t.config.axis = "top" === t.config.origin || "bottom" === t.config.origin ? "Y" : "X"
    }
    function w(n) {
        var t = window.getComputedStyle(n.domEl);
        n.styles || (n.styles = {
            transition: {},
            transform: {},
            computed: {}
        },
        n.styles.inline = n.domEl.getAttribute("style") || "",
        n.styles.inline += "; visibility: visible; ",
        n.styles.computed.opacity = t.opacity,
        n.styles.computed.transition = t.transition && "all 0s ease 0s" !== t.transition ? t.transition + ", " : "");
        n.styles.transition.instant = o(n, 0);
        n.styles.transition.delayed = o(n, n.config.delay);
        n.styles.transform.initial = " -webkit-transform:";
        n.styles.transform.target = " -webkit-transform:";
        s(n);
        n.styles.transform.initial += "transform:";
        n.styles.transform.target += "transform:";
        s(n)
    }
    function o(n, t) {
        var i = n.config;
        return "-webkit-transition: " + n.styles.computed.transition + "-webkit-transform " + i.duration / 1e3 + "s " + i.easing + " " + t / 1e3 + "s, opacity " + i.duration / 1e3 + "s " + i.easing + " " + t / 1e3 + "s; transition: " + n.styles.computed.transition + "transform " + i.duration / 1e3 + "s " + i.easing + " " + t / 1e3 + "s, opacity " + i.duration / 1e3 + "s " + i.easing + " " + t / 1e3 + "s; "
    }
    function s(n) {
        var r, t = n.config, i = n.styles.transform;
        r = "top" === t.origin || "left" === t.origin ? /^-/.test(t.distance) ? t.distance.substr(1) : "-" + t.distance : t.distance;
        parseInt(t.distance) && (i.initial += " translate" + t.axis + "(" + r + ")",
        i.target += " translate" + t.axis + "(0)");
        t.scale && (i.initial += " scale(" + t.scale + ")",
        i.target += " scale(1)");
        t.rotate.x && (i.initial += " rotateX(" + t.rotate.x + "deg)",
        i.target += " rotateX(0)");
        t.rotate.y && (i.initial += " rotateY(" + t.rotate.y + "deg)",
        i.target += " rotateY(0)");
        t.rotate.z && (i.initial += " rotateZ(" + t.rotate.z + "deg)",
        i.target += " rotateZ(0)");
        i.initial += "; opacity: " + t.opacity + ";";
        i.target += "; opacity: " + n.styles.computed.opacity + ";"
    }
    function b(t) {
        var i = t.config.container;
        i && n.store.containers.indexOf(i) === -1 && n.store.containers.push(t.config.container);
        n.store.elements[t.id] = t
    }
    function k(t, i, r) {
        var u = {
            target: t,
            config: i,
            interval: r
        };
        n.history.push(u)
    }
    function h() {
        if (n.isSupported()) {
            c();
            for (var t = 0; t < n.store.containers.length; t++)
                n.store.containers[t].addEventListener("scroll", r),
                n.store.containers[t].addEventListener("resize", r);
            n.initialized || (window.addEventListener("scroll", r),
            window.addEventListener("resize", r),
            n.initialized = !0)
        }
        return n
    }
    function r() {
        v(c)
    }
    function d() {
        var t, r, f, i;
        n.tools.forOwn(n.sequences, function(e) {
            i = n.sequences[e];
            t = !1;
            for (var o = 0; o < i.elemIds.length; o++)
                f = i.elemIds[o],
                r = n.store.elements[f],
                u(r) && !t && (t = !0);
            i.active = t
        })
    }
    function c() {
        var i, t;
        d();
        n.tools.forOwn(n.store.elements, function(r) {
            t = n.store.elements[r];
            i = tt(t);
            nt(t) ? (t.config.beforeReveal(t.domEl),
            i ? t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.delayed) : t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.instant),
            l("reveal", t, i),
            t.revealing = !0,
            t.seen = !0,
            t.sequence && g(t, i)) : it(t) && (t.config.beforeReset(t.domEl),
            t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.initial + t.styles.transition.instant),
            l("reset", t),
            t.revealing = !1)
        })
    }
    function g(t, i) {
        var f = 0
          , e = 0
          , u = n.sequences[t.sequence.id];
        u.blocked = !0;
        i && "onload" === t.config.useDelay && (e = t.config.delay);
        t.sequence.timer && (f = Math.abs(t.sequence.timer.started - new Date),
        window.clearTimeout(t.sequence.timer));
        t.sequence.timer = {
            started: new Date
        };
        t.sequence.timer.clock = window.setTimeout(function() {
            u.blocked = !1;
            t.sequence.timer = null;
            r()
        }, Math.abs(u.interval) + e - f)
    }
    function l(n, t, i) {
        var f = 0
          , r = 0
          , u = "after";
        switch (n) {
        case "reveal":
            r = t.config.duration;
            i && (r += t.config.delay);
            u += "Reveal";
            break;
        case "reset":
            r = t.config.duration;
            u += "Reset"
        }
        t.timer && (f = Math.abs(t.timer.started - new Date),
        window.clearTimeout(t.timer.clock));
        t.timer = {
            started: new Date
        };
        t.timer.clock = window.setTimeout(function() {
            t.config[u](t.domEl);
            t.timer = null
        }, r - f)
    }
    function nt(t) {
        if (t.sequence) {
            var i = n.sequences[t.sequence.id];
            return i.active && !i.blocked && !t.revealing && !t.disabled
        }
        return u(t) && !t.revealing && !t.disabled
    }
    function tt(t) {
        var i = t.config.useDelay;
        return "always" === i || "onload" === i && !n.initialized || "once" === i && !t.seen
    }
    function it(t) {
        if (t.sequence) {
            var i = n.sequences[t.sequence.id];
            return !i.active && t.config.reset && t.revealing && !t.disabled
        }
        return !u(t) && t.config.reset && t.revealing && !t.disabled
    }
    function rt(n) {
        return {
            width: n.clientWidth,
            height: n.clientHeight
        }
    }
    function ut(n) {
        if (n && n !== window.document.documentElement) {
            var t = a(n);
            return {
                x: n.scrollLeft + t.left,
                y: n.scrollTop + t.top
            }
        }
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    }
    function a(n) {
        var t = 0
          , i = 0
          , r = n.offsetHeight
          , u = n.offsetWidth;
        do
            isNaN(n.offsetTop) || (t += n.offsetTop),
            isNaN(n.offsetLeft) || (i += n.offsetLeft),
            n = n.offsetParent;
        while (n);
        return {
            top: t,
            left: i,
            height: r,
            width: u
        }
    }
    function u(n) {
        function h() {
            var t = o + u * r
              , h = s + f * r
              , c = l - u * r
              , a = v - f * r
              , y = i.y + n.config.viewOffset.top
              , p = i.x + n.config.viewOffset.left
              , w = i.y - n.config.viewOffset.bottom + e.height
              , b = i.x - n.config.viewOffset.right + e.width;
            return t < w && c > y && h < b && a > p
        }
        function c() {
            return "fixed" === window.getComputedStyle(n.domEl).position
        }
        var t = a(n.domEl)
          , e = rt(n.config.container)
          , i = ut(n.config.container)
          , r = n.config.viewFactor
          , u = t.height
          , f = t.width
          , o = t.top
          , s = t.left
          , l = o + u
          , v = s + f;
        return h() || c()
    }
    function i() {}
    var n, v;
    t.prototype.defaults = {
        origin: "bottom",
        distance: "20px",
        duration: 500,
        delay: 0,
        rotate: {
            x: 0,
            y: 0,
            z: 0
        },
        opacity: 0,
        scale: .9,
        easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
        container: window.document.documentElement,
        mobile: !0,
        reset: !1,
        useDelay: "always",
        viewFactor: .2,
        viewOffset: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        beforeReveal: function() {},
        beforeReset: function() {},
        afterReveal: function() {},
        afterReset: function() {}
    };
    t.prototype.isSupported = function() {
        var n = document.documentElement.style;
        return "WebkitTransition"in n && "WebkitTransform"in n || "transition"in n && "transform"in n
    }
    ;
    t.prototype.reveal = function(t, i, r, u) {
        var a, s, o, v, c, d, l;
        if (void 0 !== i && "number" == typeof i ? (r = i,
        i = {}) : void 0 !== i && null !== i || (i = {}),
        a = f(i),
        s = y(t, a),
        !s.length)
            return n;
        for (r && "number" == typeof r && (d = e(),
        c = n.sequences[d] = {
            id: d,
            interval: r,
            elemIds: [],
            active: !1
        }),
        l = 0; l < s.length; l++)
            v = s[l].getAttribute("data-sr-id"),
            v ? o = n.store.elements[v] : (o = {
                id: e(),
                domEl: s[l],
                seen: !1,
                revealing: !1
            },
            o.domEl.setAttribute("data-sr-id", o.id)),
            c && (o.sequence = {
                id: c.id,
                index: c.elemIds.length
            },
            c.elemIds.push(o.id)),
            p(o, i, a),
            w(o),
            b(o),
            n.tools.isMobile() && !o.config.mobile || !n.isSupported() ? (o.domEl.setAttribute("style", o.styles.inline),
            o.disabled = !0) : o.revealing || o.domEl.setAttribute("style", o.styles.inline + o.styles.transform.initial);
        return !u && n.isSupported() && (k(t, i, r),
        n.initTimeout && window.clearTimeout(n.initTimeout),
        n.initTimeout = window.setTimeout(h, 0)),
        n
    }
    ;
    t.prototype.sync = function() {
        var t, i;
        if (n.history.length && n.isSupported()) {
            for (t = 0; t < n.history.length; t++)
                i = n.history[t],
                n.reveal(i.target, i.config, i.interval, !0);
            h()
        }
        return n
    }
    ;
    i.prototype.isObject = function(n) {
        return null !== n && "object" == typeof n && n.constructor === Object
    }
    ;
    i.prototype.isNode = function(n) {
        return "object" == typeof Node ? n instanceof window.Node : n && "object" == typeof n && "number" == typeof n.nodeType && "string" == typeof n.nodeName
    }
    ;
    i.prototype.isNodeList = function(n) {
        var t = Object.prototype.toString.call(n);
        return "object" == typeof NodeList ? n instanceof window.NodeList : n && "object" == typeof n && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(t) && "number" == typeof n.length && (0 === n.length || this.isNode(n[0]))
    }
    ;
    i.prototype.forOwn = function(n, t) {
        if (!this.isObject(n))
            throw new TypeError('Expected "object", but received "' + typeof n + '".');
        for (var i in n)
            n.hasOwnProperty(i) && t(i)
    }
    ;
    i.prototype.extend = function(n, t) {
        return this.forOwn(t, function(i) {
            this.isObject(t[i]) ? (n[i] && this.isObject(n[i]) || (n[i] = {}),
            this.extend(n[i], t[i])) : n[i] = t[i]
        }
        .bind(this)),
        n
    }
    ;
    i.prototype.extendClone = function(n, t) {
        return this.extend(this.extend({}, n), t)
    }
    ;
    i.prototype.isMobile = function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }
    ;
    v = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(n) {
        window.setTimeout(n, 1e3 / 60)
    }
    ;
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return t
    }) : "undefined" != typeof module && module.exports ? module.exports = t : window.ScrollReveal = t
}();
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : n("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(n) {
    var t, it, f, p, o, pt, s = "Close", wt = "BeforeClose", ti = "AfterClose", ii = "BeforeAppend", rt = "MarkupParse", ut = "Open", bt = "Change", ft = "mfp", u = "." + ft, w = "mfp-ready", kt = "mfp-removing", et = "mfp-prevent-close", b = function() {}, ot = !!window.jQuery, h = n(window), r = function(n, i) {
        t.ev.on(ft + n + u, i)
    }, l = function(t, i, r, u) {
        var f = document.createElement("div");
        return f.className = "mfp-" + t,
        r && (f.innerHTML = r),
        u ? i && i.appendChild(f) : (f = n(f),
        i && f.appendTo(i)),
        f
    }, i = function(i, r) {
        t.ev.triggerHandler(ft + i, r);
        t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1),
        t.st.callbacks[i] && t.st.callbacks[i].apply(t, n.isArray(r) ? r : [r]))
    }, st = function(i) {
        return i === pt && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = n(t.st.closeMarkup.replace("%title%", t.st.tClose)),
        pt = i),
        t.currTemplate.closeBtn
    }, ht = function() {
        n.magnificPopup.instance || (t = new b,
        t.init(),
        n.magnificPopup.instance = t)
    }, ri = function() {
        var n = document.createElement("p").style
          , t = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== n.transition)
            return !0;
        for (; t.length; )
            if (t.pop() + "Transition"in n)
                return !0;
        return !1
    }, a, k, d, g, ct, e, gt, at, ni, nt, yt, tt;
    b.prototype = {
        constructor: b,
        init: function() {
            var i = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener;
            t.isAndroid = /android/gi.test(i);
            t.isIOS = /iphone|ipad|ipod/gi.test(i);
            t.supportsTransition = ri();
            t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
            f = n(document);
            t.popupsCache = {}
        },
        open: function(e) {
            var s, c, p, b, a, k, v, d, y;
            if (e.isObj === !1) {
                for (t.items = e.items.toArray(),
                t.index = 0,
                p = e.items,
                s = 0; s < p.length; s++)
                    if (c = p[s],
                    c.parsed && (c = c.el[0]),
                    c === e.el[0]) {
                        t.index = s;
                        break
                    }
            } else
                t.items = n.isArray(e.items) ? e.items : [e.items],
                t.index = e.index || 0;
            if (t.isOpen)
                return void t.updateItemHTML();
            for (t.types = [],
            o = "",
            t.ev = e.mainEl && e.mainEl.length ? e.mainEl.eq(0) : f,
            e.key ? (t.popupsCache[e.key] || (t.popupsCache[e.key] = {}),
            t.currTemplate = t.popupsCache[e.key]) : t.currTemplate = {},
            t.st = n.extend(!0, {}, n.magnificPopup.defaults, e),
            t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos,
            t.st.modal && (t.st.closeOnContentClick = !1,
            t.st.closeOnBgClick = !1,
            t.st.showCloseBtn = !1,
            t.st.enableEscapeKey = !1),
            t.bgOverlay || (t.bgOverlay = l("bg").on("click" + u, function() {
                t.close()
            }),
            t.wrap = l("wrap").attr("tabindex", -1).on("click" + u, function(n) {
                t._checkIfClose(n.target) && t.close()
            }),
            t.container = l("container", t.wrap)),
            t.contentContainer = l("content"),
            t.st.preloader && (t.preloader = l("preloader", t.container, t.st.tLoading)),
            b = n.magnificPopup.modules,
            s = 0; s < b.length; s++)
                a = b[s],
                a = a.charAt(0).toUpperCase() + a.slice(1),
                t["init" + a].call(t);
            return i("BeforeOpen"),
            t.st.showCloseBtn && (t.st.closeBtnInside ? (r(rt, function(n, t, i, r) {
                i.close_replaceWith = st(r.type)
            }),
            o += " mfp-close-btn-in") : t.wrap.append(st())),
            t.st.alignTop && (o += " mfp-align-top"),
            t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: h.scrollTop(),
                position: "absolute"
            }),
            (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: f.height(),
                position: "absolute"
            }),
            t.st.enableEscapeKey && f.on("keyup" + u, function(n) {
                27 === n.keyCode && t.close()
            }),
            h.on("resize" + u, function() {
                t.updateSize()
            }),
            t.st.closeOnContentClick || (o += " mfp-auto-cursor"),
            o && t.wrap.addClass(o),
            k = t.wH = h.height(),
            v = {},
            t.fixedContentPos && t._hasScrollBar(k) && (d = t._getScrollbarSize(),
            d && (v.marginRight = d)),
            t.fixedContentPos && (t.isIE7 ? n("body, html").css("overflow", "hidden") : v.overflow = "hidden"),
            y = t.st.mainClass,
            t.isIE7 && (y += " mfp-ie7"),
            y && t._addClassToMFP(y),
            t.updateItemHTML(),
            i("BuildControls"),
            n("html").css(v),
            t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || n(document.body)),
            t._lastFocusedEl = document.activeElement,
            setTimeout(function() {
                t.content ? (t._addClassToMFP(w),
                t._setFocus()) : t.bgOverlay.addClass(w);
                f.on("focusin" + u, t._onFocusIn)
            }, 16),
            t.isOpen = !0,
            t.updateSize(k),
            i(ut),
            e
        },
        close: function() {
            t.isOpen && (i(wt),
            t.isOpen = !1,
            t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(kt),
            setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            var r, e;
            i(s);
            r = kt + " " + w + " ";
            (t.bgOverlay.detach(),
            t.wrap.detach(),
            t.container.empty(),
            t.st.mainClass && (r += t.st.mainClass + " "),
            t._removeClassFromMFP(r),
            t.fixedContentPos) && (e = {
                marginRight: ""
            },
            t.isIE7 ? n("body, html").css("overflow", "") : e.overflow = "",
            n("html").css(e));
            f.off("keyup" + u + " focusin" + u);
            t.ev.off(u);
            t.wrap.attr("class", "mfp-wrap").removeAttr("style");
            t.bgOverlay.attr("class", "mfp-bg");
            t.container.attr("class", "mfp-container");
            !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach();
            t.st.autoFocusLast && t._lastFocusedEl && n(t._lastFocusedEl).focus();
            t.currItem = null;
            t.content = null;
            t.currTemplate = null;
            t.prevHeight = 0;
            i(ti)
        },
        updateSize: function(n) {
            if (t.isIOS) {
                var u = document.documentElement.clientWidth / window.innerWidth
                  , r = window.innerHeight * u;
                t.wrap.css("height", r);
                t.wH = r
            } else
                t.wH = n || h.height();
            t.fixedContentPos || t.wrap.css("height", t.wH);
            i("Resize")
        },
        updateItemHTML: function() {
            var u = t.items[t.index], r, f, e;
            t.contentContainer.detach();
            t.content && t.content.detach();
            u.parsed || (u = t.parseEl(t.index));
            r = u.type;
            (i("BeforeChange", [t.currItem ? t.currItem.type : "", r]),
            t.currItem = u,
            t.currTemplate[r]) || (f = t.st[r] ? t.st[r].markup : !1,
            i("FirstMarkupParse", f),
            t.currTemplate[r] = f ? n(f) : !0);
            p && p !== u.type && t.container.removeClass("mfp-" + p + "-holder");
            e = t["get" + r.charAt(0).toUpperCase() + r.slice(1)](u, t.currTemplate[r]);
            t.appendContent(e, r);
            u.preloaded = !0;
            i(bt, u);
            p = u.type;
            t.container.prepend(t.contentContainer);
            i("AfterChange")
        },
        appendContent: function(n, r) {
            t.content = n;
            n ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[r] === !0 ? t.content.find(".mfp-close").length || t.content.append(st()) : t.content = n : t.content = "";
            i(ii);
            t.container.addClass("mfp-" + r + "-holder");
            t.contentContainer.append(t.content)
        },
        parseEl: function(r) {
            var o, u = t.items[r], e, f;
            if (u.tagName ? u = {
                el: n(u)
            } : (o = u.type,
            u = {
                data: u,
                src: u.src
            }),
            u.el) {
                for (e = t.types,
                f = 0; f < e.length; f++)
                    if (u.el.hasClass("mfp-" + e[f])) {
                        o = e[f];
                        break
                    }
                u.src = u.el.attr("data-mfp-src");
                u.src || (u.src = u.el.attr("href"))
            }
            return u.type = o || t.st.type || "inline",
            u.index = r,
            u.parsed = !0,
            t.items[r] = u,
            i("ElementParse", u),
            t.items[r]
        },
        addGroup: function(n, i) {
            var u = function(r) {
                r.mfpEl = this;
                t._openClick(r, n, i)
            }, r;
            i || (i = {});
            r = "click.magnificPopup";
            i.mainEl = n;
            i.items ? (i.isObj = !0,
            n.off(r).on(r, u)) : (i.isObj = !1,
            i.delegate ? n.off(r).on(r, i.delegate, u) : (i.items = n,
            n.off(r).on(r, u)))
        },
        _openClick: function(i, r, u) {
            var e = void 0 !== u.midClick ? u.midClick : n.magnificPopup.defaults.midClick, f;
            if (e || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                if (f = void 0 !== u.disableOn ? u.disableOn : n.magnificPopup.defaults.disableOn,
                f)
                    if (n.isFunction(f)) {
                        if (!f.call(t))
                            return !0
                    } else if (h.width() < f)
                        return !0;
                i.type && (i.preventDefault(),
                t.isOpen && i.stopPropagation());
                u.el = n(i.mfpEl);
                u.delegate && (u.items = r.find(u.delegate));
                t.open(u)
            }
        },
        updateStatus: function(n, r) {
            if (t.preloader) {
                it !== n && t.container.removeClass("mfp-s-" + it);
                r || "loading" !== n || (r = t.st.tLoading);
                var u = {
                    status: n,
                    text: r
                };
                i("UpdateStatus", u);
                n = u.status;
                r = u.text;
                t.preloader.html(r);
                t.preloader.find("a").on("click", function(n) {
                    n.stopImmediatePropagation()
                });
                t.container.addClass("mfp-s-" + n);
                it = n
            }
        },
        _checkIfClose: function(i) {
            if (!n(i).hasClass(et)) {
                var r = t.st.closeOnContentClick
                  , u = t.st.closeOnBgClick;
                if (r && u || !t.content || n(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0])
                    return !0;
                if (i === t.content[0] || n.contains(t.content[0], i)) {
                    if (r)
                        return !0
                } else if (u && n.contains(document, i))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(n) {
            t.bgOverlay.addClass(n);
            t.wrap.addClass(n)
        },
        _removeClassFromMFP: function(n) {
            this.bgOverlay.removeClass(n);
            t.wrap.removeClass(n)
        },
        _hasScrollBar: function(n) {
            return (t.isIE7 ? f.height() : document.body.scrollHeight) > (n || h.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(i) {
            if (i.target !== t.wrap[0] && !n.contains(t.wrap[0], i.target))
                return (t._setFocus(),
                !1)
        },
        _parseMarkup: function(t, r, f) {
            var e;
            f.data && (r = n.extend(f.data, r));
            i(rt, [t, r, f]);
            n.each(r, function(i, r) {
                var f, o;
                if (void 0 === r || r === !1)
                    return !0;
                (e = i.split("_"),
                e.length > 1) ? (f = t.find(u + "-" + e[0]),
                f.length > 0 && (o = e[1],
                "replaceWith" === o ? f[0] !== r[0] && f.replaceWith(r) : "img" === o ? f.is("img") ? f.attr("src", r) : f.replaceWith(n("<img>").attr("src", r).attr("class", f.attr("class"))) : f.attr(e[1], r))) : t.find(u + "-" + i).html(r)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var n = document.createElement("div");
                n.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
                document.body.appendChild(n);
                t.scrollbarSize = n.offsetWidth - n.clientWidth;
                document.body.removeChild(n)
            }
            return t.scrollbarSize
        }
    };
    n.magnificPopup = {
        instance: null,
        proto: b.prototype,
        modules: [],
        open: function(t, i) {
            return ht(),
            t = t ? n.extend(!0, {}, t) : {},
            t.isObj = !0,
            t.index = i || 0,
            this.instance.open(t)
        },
        close: function() {
            return n.magnificPopup.instance && n.magnificPopup.instance.close()
        },
        registerModule: function(t, i) {
            i.options && (n.magnificPopup.defaults[t] = i.options);
            n.extend(this.proto, i.proto);
            this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;<\/button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    };
    n.fn.magnificPopup = function(i) {
        var r, u, f, e;
        return ht(),
        r = n(this),
        "string" == typeof i ? "open" === i ? (f = ot ? r.data("magnificPopup") : r[0].magnificPopup,
        e = parseInt(arguments[1], 10) || 0,
        f.items ? u = f.items[e] : (u = r,
        f.delegate && (u = u.find(f.delegate)),
        u = u.eq(e)),
        t._openClick({
            mfpEl: u
        }, r, f)) : t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1)) : (i = n.extend(!0, {}, i),
        ot ? r.data("magnificPopup", i) : r[0].magnificPopup = i,
        t.addGroup(r, i)),
        r
    }
    ;
    g = "inline";
    ct = function() {
        d && (k.after(d.addClass(a)).detach(),
        d = null)
    }
    ;
    n.magnificPopup.registerModule(g, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(g);
                r(s + "." + g, function() {
                    ct()
                })
            },
            getInline: function(i, r) {
                var f, u, e;
                return (ct(),
                i.src) ? (f = t.st.inline,
                u = n(i.src),
                u.length ? (e = u[0].parentNode,
                e && e.tagName && (k || (a = f.hiddenClass,
                k = l(a),
                a = "mfp-" + a),
                d = u.after(k).detach().removeClass(a)),
                t.updateStatus("ready")) : (t.updateStatus("error", f.tNotFound),
                u = n("<div>")),
                i.inlineElement = u,
                u) : (t.updateStatus("ready"),
                t._parseMarkup(r, {}, i),
                r)
            }
        }
    });
    var v, y = "ajax", lt = function() {
        v && n(document.body).removeClass(v)
    }, dt = function() {
        lt();
        t.req && t.req.abort()
    };
    n.magnificPopup.registerModule(y, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content<\/a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(y);
                v = t.st.ajax.cursor;
                r(s + "." + y, dt);
                r("BeforeChange." + y, dt)
            },
            getAjax: function(r) {
                v && n(document.body).addClass(v);
                t.updateStatus("loading");
                var u = n.extend({
                    url: r.src,
                    success: function(u, f, e) {
                        var o = {
                            data: u,
                            xhr: e
                        };
                        i("ParseAjax", o);
                        t.appendContent(n(o.data), y);
                        r.finished = !0;
                        lt();
                        t._setFocus();
                        setTimeout(function() {
                            t.wrap.addClass(w)
                        }, 16);
                        t.updateStatus("ready");
                        i("AjaxContentAdded")
                    },
                    error: function() {
                        lt();
                        r.finished = r.loadError = !0;
                        t.updateStatus("error", t.st.ajax.tError.replace("%url%", r.src))
                    }
                }, t.st.ajax.settings);
                return t.req = n.ajax(u),
                ""
            }
        }
    });
    gt = function(i) {
        if (i.data && void 0 !== i.data.title)
            return i.data.title;
        var r = t.st.image.titleSrc;
        if (r) {
            if (n.isFunction(r))
                return r.call(t, i);
            if (i.el)
                return i.el.attr(r) || ""
        }
        return ""
    }
    ;
    n.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"><\/div><figure><div class="mfp-img"><\/div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"><\/div><div class="mfp-counter"><\/div><\/div><\/figcaption><\/figure><\/div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image<\/a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var i = t.st.image
                  , f = ".image";
                t.types.push("image");
                r(ut + f, function() {
                    "image" === t.currItem.type && i.cursor && n(document.body).addClass(i.cursor)
                });
                r(s + f, function() {
                    i.cursor && n(document.body).removeClass(i.cursor);
                    h.off("resize" + u)
                });
                r("Resize" + f, t.resizeImage);
                t.isLowIE && r("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var n = t.currItem, i;
                n && n.img && t.st.image.verticalFit && (i = 0,
                t.isLowIE && (i = parseInt(n.img.css("padding-top"), 10) + parseInt(n.img.css("padding-bottom"), 10)),
                n.img.css("max-height", t.wH - i))
            },
            _onImageHasSize: function(n) {
                n.img && (n.hasSize = !0,
                e && clearInterval(e),
                n.isCheckingImgSize = !1,
                i("ImageHasSize", n),
                n.imgHidden && (t.content && t.content.removeClass("mfp-loading"),
                n.imgHidden = !1))
            },
            findImageSize: function(n) {
                var i = 0
                  , u = n.img[0]
                  , r = function(f) {
                    e && clearInterval(e);
                    e = setInterval(function() {
                        return u.naturalWidth > 0 ? void t._onImageHasSize(n) : (i > 200 && clearInterval(e),
                        i++,
                        void (3 === i ? r(10) : 40 === i ? r(50) : 100 === i && r(500)))
                    }, f)
                };
                r(1)
            },
            getImage: function(r, u) {
                var o = 0, s = function() {
                    r && (r.img[0].complete ? (r.img.off(".mfploader"),
                    r === t.currItem && (t._onImageHasSize(r),
                    t.updateStatus("ready")),
                    r.hasSize = !0,
                    r.loaded = !0,
                    i("ImageLoadComplete")) : (o++,
                    200 > o ? setTimeout(s, 100) : h()))
                }, h = function() {
                    r && (r.img.off(".mfploader"),
                    r === t.currItem && (t._onImageHasSize(r),
                    t.updateStatus("error", c.tError.replace("%url%", r.src))),
                    r.hasSize = !0,
                    r.loaded = !0,
                    r.loadError = !0)
                }, c = t.st.image, l = u.find(".mfp-img"), f;
                return l.length && (f = document.createElement("img"),
                f.className = "mfp-img",
                r.el && r.el.find("img").length && (f.alt = r.el.find("img").attr("alt")),
                r.img = n(f).on("load.mfploader", s).on("error.mfploader", h),
                f.src = r.src,
                l.is("img") && (r.img = r.img.clone()),
                f = r.img[0],
                f.naturalWidth > 0 ? r.hasSize = !0 : f.width || (r.hasSize = !1)),
                t._parseMarkup(u, {
                    title: gt(r),
                    img_replaceWith: r.img
                }, r),
                t.resizeImage(),
                r.hasSize ? (e && clearInterval(e),
                r.loadError ? (u.addClass("mfp-loading"),
                t.updateStatus("error", c.tError.replace("%url%", r.src))) : (u.removeClass("mfp-loading"),
                t.updateStatus("ready")),
                u) : (t.updateStatus("loading"),
                r.loading = !0,
                r.hasSize || (r.imgHidden = !0,
                u.addClass("mfp-loading"),
                t.findImageSize(r)),
                u)
            }
        }
    });
    ni = function() {
        return void 0 === at && (at = void 0 !== document.createElement("p").style.MozTransform),
        at
    }
    ;
    n.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(n) {
                return n.is("img") ? n : n.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var u, f = t.st.zoom, o = ".zoom";
                if (f.enabled && t.supportsTransition) {
                    var e, n, c = f.duration, l = function(n) {
                        var r = n.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                          , u = "all " + f.duration / 1e3 + "s " + f.easing
                          , t = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }
                          , i = "transition";
                        return t["-webkit-" + i] = t["-moz-" + i] = t["-o-" + i] = t[i] = u,
                        r.css(t),
                        r
                    }, h = function() {
                        t.content.css("visibility", "visible")
                    };
                    r("BuildControls" + o, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(e),
                            t.content.css("visibility", "hidden"),
                            u = t._getItemToZoom(),
                            !u)
                                return void h();
                            n = l(u);
                            n.css(t._getOffset());
                            t.wrap.append(n);
                            e = setTimeout(function() {
                                n.css(t._getOffset(!0));
                                e = setTimeout(function() {
                                    h();
                                    setTimeout(function() {
                                        n.remove();
                                        u = n = null;
                                        i("ZoomAnimationEnded")
                                    }, 16)
                                }, c)
                            }, 16)
                        }
                    });
                    r(wt + o, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(e),
                            t.st.removalDelay = c,
                            !u) {
                                if (u = t._getItemToZoom(),
                                !u)
                                    return;
                                n = l(u)
                            }
                            n.css(t._getOffset(!0));
                            t.wrap.append(n);
                            t.content.css("visibility", "hidden");
                            setTimeout(function() {
                                n.css(t._getOffset())
                            }, 16)
                        }
                    });
                    r(s + o, function() {
                        t._allowZoom() && (h(),
                        n && n.remove(),
                        u = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function(i) {
                var r, u;
                r = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var f = r.offset()
                  , e = parseInt(r.css("padding-top"), 10)
                  , o = parseInt(r.css("padding-bottom"), 10);
                return f.top -= n(window).scrollTop() - e,
                u = {
                    width: r.width(),
                    height: (ot ? r.innerHeight() : r[0].offsetHeight) - o - e
                },
                ni() ? u["-moz-transform"] = u.transform = "translate(" + f.left + "px," + f.top + "px)" : (u.left = f.left,
                u.top = f.top),
                u
            }
        }
    });
    var c = "iframe"
      , ui = "//about:blank"
      , vt = function(n) {
        if (t.currTemplate[c]) {
            var i = t.currTemplate[c].find("iframe");
            i.length && (n || (i[0].src = ui),
            t.isIE8 && i.css("display", n ? "block" : "none"))
        }
    };
    n.magnificPopup.registerModule(c, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"><\/div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen><\/iframe><\/div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(c);
                r("BeforeChange", function(n, t, i) {
                    t !== i && (t === c ? vt() : i === c && vt(!0))
                });
                r(s + "." + c, function() {
                    vt()
                })
            },
            getIframe: function(i, r) {
                var u = i.src, f = t.st.iframe, e;
                return n.each(f.patterns, function() {
                    if (u.indexOf(this.index) > -1)
                        return (this.id && (u = "string" == typeof this.id ? u.substr(u.lastIndexOf(this.id) + this.id.length, u.length) : this.id.call(this, u)),
                        u = this.src.replace("%id%", u),
                        !1)
                }),
                e = {},
                f.srcAction && (e[f.srcAction] = u),
                t._parseMarkup(r, e, i),
                t.updateStatus("ready"),
                r
            }
        }
    });
    nt = function(n) {
        var i = t.items.length;
        return n > i - 1 ? n - i : 0 > n ? i + n : n
    }
    ;
    yt = function(n, t, i) {
        return n.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
    }
    ;
    n.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><\/button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var u = t.st.gallery
                  , i = ".mfp-gallery";
                return t.direction = !0,
                u && u.enabled ? (o += " mfp-gallery",
                r(ut + i, function() {
                    u.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function() {
                        if (t.items.length > 1)
                            return (t.next(),
                            !1)
                    });
                    f.on("keydown" + i, function(n) {
                        37 === n.keyCode ? t.prev() : 39 === n.keyCode && t.next()
                    })
                }),
                r("UpdateStatus" + i, function(n, i) {
                    i.text && (i.text = yt(i.text, t.currItem.index, t.items.length))
                }),
                r(rt + i, function(n, i, r, f) {
                    var e = t.items.length;
                    r.counter = e > 1 ? yt(u.tCounter, f.index, e) : ""
                }),
                r("BuildControls" + i, function() {
                    if (t.items.length > 1 && u.arrows && !t.arrowLeft) {
                        var i = u.arrowMarkup
                          , r = t.arrowLeft = n(i.replace(/%title%/gi, u.tPrev).replace(/%dir%/gi, "left")).addClass(et)
                          , f = t.arrowRight = n(i.replace(/%title%/gi, u.tNext).replace(/%dir%/gi, "right")).addClass(et);
                        r.click(function() {
                            t.prev()
                        });
                        f.click(function() {
                            t.next()
                        });
                        t.container.append(r.add(f))
                    }
                }),
                r(bt + i, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout);
                    t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages();
                        t._preloadTimeout = null
                    }, 16)
                }),
                void r(s + i, function() {
                    f.off(i);
                    t.wrap.off("click" + i);
                    t.arrowRight = t.arrowLeft = null
                })) : !1
            },
            next: function() {
                t.direction = !0;
                t.index = nt(t.index + 1);
                t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1;
                t.index = nt(t.index - 1);
                t.updateItemHTML()
            },
            goTo: function(n) {
                t.direction = n >= t.index;
                t.index = n;
                t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                for (var i = t.st.gallery.preload, r = Math.min(i[0], t.items.length), u = Math.min(i[1], t.items.length), n = 1; n <= (t.direction ? u : r); n++)
                    t._preloadItem(t.index + n);
                for (n = 1; n <= (t.direction ? r : u); n++)
                    t._preloadItem(t.index - n)
            },
            _preloadItem: function(r) {
                if (r = nt(r),
                !t.items[r].preloaded) {
                    var u = t.items[r];
                    u.parsed || (u = t.parseEl(r));
                    i("LazyLoad", u);
                    "image" === u.type && (u.img = n('<img class="mfp-img" />').on("load.mfploader", function() {
                        u.hasSize = !0
                    }).on("error.mfploader", function() {
                        u.hasSize = !0;
                        u.loadError = !0;
                        i("LazyLoadError", u)
                    }).attr("src", u.src));
                    u.preloaded = !0
                }
            }
        }
    });
    tt = "retina";
    n.magnificPopup.registerModule(tt, {
        options: {
            replaceSrc: function(n) {
                return n.src.replace(/\.\w+$/, function(n) {
                    return "@2x" + n
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var i = t.st.retina
                      , n = i.ratio;
                    n = isNaN(n) ? n() : n;
                    n > 1 && (r("ImageHasSize." + tt, function(t, i) {
                        i.img.css({
                            "max-width": i.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }),
                    r("ElementParse." + tt, function(t, r) {
                        r.src = i.replaceSrc(r, n)
                    }))
                }
            }
        }
    });
    ht()
}),
function(n) {
    "user strict";
    n(window).on("load", function() {
        n("[data-paroller-factor]").paroller();
        n(".preloader").fadeOut(1e3)
    });
    n(document).ready(function() {
        var t, e, c, l, i, r, u, f, o, s, h;
        n(".select-bar").niceSelect();
        n(".popup").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: !0,
            fixedContentPos: !1,
            disableOn: 300
        });
        n("body").each(function() {
            n(this).find(".img-pop").magnificPopup({
                type: "image",
                gallery: {
                    enabled: !0
                }
            })
        });
        (new WOW).init();
        n(".faq-wrapper .faq-title").on("click", function() {
            var t = n(this).parent(".faq-item");
            t.hasClass("open") ? (t.removeClass("open"),
            t.find(".faq-content").removeClass("open"),
            t.find(".faq-content").slideUp(300, "swing")) : (t.addClass("open"),
            t.children(".faq-content").slideDown(300, "swing"),
            t.siblings(".faq-item").children(".faq-content").slideUp(300, "swing"),
            t.siblings(".faq-item").removeClass("open"),
            t.siblings(".faq-item").find(".faq-title").removeClass("open"),
            t.siblings(".faq-item").find(".faq-content").slideUp(300, "swing"))
        });
        n(".faq--area .faq-title").on("click", function() {
            var t = n(this).parent(".faq--item");
            t.hasClass("open") ? (t.removeClass("open"),
            t.find(".faq-content").removeClass("open"),
            t.find(".faq-content").slideUp(300, "swing")) : (t.addClass("open"),
            t.children(".faq-content").slideDown(300, "swing"),
            t.siblings(".faq--item").children(".faq-content").slideUp(300, "swing"),
            t.siblings(".faq--item").removeClass("open"),
            t.siblings(".faq--item").find(".faq-title").removeClass("open"),
            t.siblings(".faq--item").find(".faq-content").slideUp(300, "swing"))
        });
        n("ul>li>.submenu").parent("li").addClass("menu-item-has-children");
        n(".submenu").parent("li").hover(function() {
            var t = n(this).find("ul"), r = n(t).offset(), i;
            r.left + t.width() > n(window).width() && (i = -n(t).width(),
            t.css({
                left: i
            }))
        });
        n(".menu li a").on("click", function() {
            var t = n(this).parent("li");
            t.hasClass("open") ? (t.removeClass("open"),
            t.find("li").removeClass("open"),
            t.find("ul").slideUp(300, "swing")) : (t.addClass("open"),
            t.children("ul").slideDown(300, "swing"),
            t.siblings("li").children("ul").slideUp(300, "swing"),
            t.siblings("li").removeClass("open"),
            t.siblings("li").find("li").removeClass("open"),
            t.siblings("li").find("ul").slideUp(300, "swing"))
        });
        n(".widget-slider").owlCarousel({
            loop: !0,
            nav: !1,
            dots: !1,
            items: 1,
            autoplay: !0,
            autoplayTimeout: 2500,
            autoplayHoverPause: !0,
            margin: 30
        });
        t = n(".widget-slider");
        t.owlCarousel();
        n(".widget-next").on("click", function() {
            t.trigger("next.owl.carousel")
        });
        n(".widget-prev").on("click", function() {
            t.trigger("prev.owl.carousel", [300])
        });
        e = n(".scrollToTop");
        n(window).on("scroll", function() {
            n(this).scrollTop() < 500 ? e.removeClass("active") : e.addClass("active")
        });
        n(".scrollToTop").on("click", function() {
            return n("html, body").animate({
                scrollTop: 0
            }, 500),
            !1
        });
        n(".header-bar").on("click", function() {
            n(this).toggleClass("active");
            n(".overlay").toggleClass("active");
            n(".menu").toggleClass("active")
        });
        n(".overlay").on("click", function() {
            n(this).removeClass("active");
            n(".header-bar").removeClass("active");
            n(".menu").removeClass("active")
        });
        c = window.scrollY;
        c >= 1 && (n(".header-bottom").addClass("active"),
        n(".header-section-2").removeClass("plan-header"));
        l = n(".header-section");
        n(".tab ul.tab-menu li").on("click", function(t) {
            var i = n(this).closest(".tab")
              , r = n(this).closest("li").index();
            i.find("li").siblings("li").removeClass("active");
            n(this).closest("li").addClass("active");
            i.find(".tab-area").find("div.tab-item").not("div.tab-item:eq(" + r + ")").hide(10);
            i.find(".tab-area").find("div.tab-item:eq(" + r + ")").fadeIn(10);
            t.preventDefault()
        });
        n(".tab-up ul.tab-menu li").on("click", function(t) {
            var i = n(this).closest(".tab-up")
              , r = n(this).closest("li").index();
            i.find("li").siblings("li").removeClass("active");
            n(this).closest("li").addClass("active");
            i.find(".tab-area").find("div.tab-item").not("div.tab-item:eq(" + r + ")").slideUp(400);
            i.find(".tab-area").find("div.tab-item:eq(" + r + ")").slideDown(400);
            t.preventDefault()
        });
        n(".counter").countUp({
            time: 1500,
            delay: 10
        });
        n(".social-icons li a").on("mouseover", function() {
            var t = n(this).parent("li");
            t.children("a").hasClass("active") ? (t.siblings("li").children("a").removeClass("active"),
            n(this).addClass("active")) : (t.siblings("li").children("a").removeClass("active"),
            n(this).addClass("active"))
        });
        n(".testimonial-slider").owlCarousel({
            loop: !0,
            nav: !1,
            dots: !1,
            items: 1,
            autoplay: !0,
            autoplayTimeout: 2500,
            autoplayHoverPause: !0,
            margin: 0,
            mouseDrag: !1,
            touchDrag: !0
        });
        i = n(".testimonial-slider");
        i.owlCarousel();
        n(".testi-next").on("click", function() {
            i.trigger("prev.owl.carousel")
        });
        n(".testi-prev").on("click", function() {
            i.trigger("next.owl.carousel", [300])
        });
        n(".mobile-slider-16").owlCarousel({
            loop: !0,
            nav: !1,
            dots: !0,
            items: 1,
            autoplay: !0,
            autoplayTimeout: 2500,
            autoplayHoverPause: !1,
            margin: 0,
            mouseDrag: !1,
            touchDrag: !1
        });
        n(".mobile-slider").owlCarousel({
            loop: !0,
            nav: !1,
            dots: !1,
            items: 1,
            autoplay: !0,
            autoplayTimeout: 4e3,
            autoplayHoverPause: !1,
            margin: 0,
            mouseDrag: !1,
            touchDrag: !1
        });
        r = n(".mobile-slider");
        r.owlCarousel();
        n(".cola-next").on("click", function() {
            r.trigger("next.owl.carousel")
        });
        n(".cola-prev").on("click", function() {
            r.trigger("prev.owl.carousel", [300])
        });
        n(".colaboration-slider").owlCarousel({
            loop: !0,
            nav: !1,
            dots: !1,
            items: 1,
            autoplay: !0,
            autoplayTimeout: 4e3,
            autoplayHoverPause: !1,
            margin: 0,
            mouseDrag: !1,
            touchDrag: !1
        });
        u = n(".colaboration-slider");
        u.owlCarousel();
        n(".cola-next").on("click", function() {
            u.trigger("next.owl.carousel")
        });
        n(".cola-prev").on("click", function() {
            u.trigger("prev.owl.carousel", [300])
        });
        n(".banner-4-slider").owlCarousel({
            loop: !0,
            nav: !1,
            dots: !1,
            items: 1,
            autoplay: !0,
            autoplayTimeout: 4e3,
            autoplayHoverPause: !1,
            margin: 0,
            mouseDrag: !1,
            touchDrag: !0
        });
        f = n(".banner-4-slider");
        f.owlCarousel();
        n(".ban-next").on("click", function() {
            f.trigger("next.owl.carousel")
        });
        n(".ban-prev").on("click", function() {
            f.trigger("prev.owl.carousel", [300])
        });
        n(".banner-1-slider").owlCarousel({
            loop: !0,
            nav: !1,
            dots: !1,
            items: 1,
            autoplay: !1,
            margin: 0,
            mouseDrag: !1,
            touchDrag: !1,
            animateOut: "fadeOut",
            animateIn: "fadeIn"
        });
        o = n(".banner-1-slider");
        o.owlCarousel();
        n(".ban-click").on("click", function() {
            o.trigger("next.owl.carousel")
        });
        n(function() {
            n("#usd-range").slider({
                range: "min",
                value: 250,
                min: 1,
                max: 500,
                slide: function(t, i) {
                    n("#usd-amount").val(i.value + " Users")
                }
            });
            n("#usd-amount").val(n("#usd-range").slider("value") + " Users")
        });
        n(".sponsor-slider").owlCarousel({
            loop: !0,
            margin: 0,
            responsiveClass: !0,
            nav: !1,
            dots: !1,
            loop: !0,
            autoplay: !0,
            autoplayTimeout: 2e3,
            autoplayHoverPause: !0,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                }
            }
        });
        n(".sponsor-slider-two").owlCarousel({
            loop: !0,
            margin: 30,
            responsiveClass: !0,
            nav: !1,
            dots: !1,
            loop: !0,
            autoplay: !0,
            autoplayTimeout: 2e3,
            autoplayHoverPause: !0,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 5
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
        n(".sponsor-slider-3").owlCarousel({
            loop: !0,
            margin: 30,
            responsiveClass: !0,
            nav: !1,
            dots: !1,
            loop: !0,
            autoplay: !0,
            autoplayTimeout: 2e3,
            autoplayHoverPause: !0,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        });
        n(".sponsor-slider-4").owlCarousel({
            loop: !0,
            margin: 30,
            responsiveClass: !0,
            nav: !1,
            dots: !1,
            loop: !0,
            autoplay: !0,
            autoplayTimeout: 2e3,
            autoplayHoverPause: !0,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 5
                },
                992: {
                    items: 6
                },
                1200: {
                    items: 7
                }
            }
        });
        n(".logo-slider").owlCarousel({
            loop: !0,
            margin: 30,
            responsiveClass: !0,
            nav: !1,
            dots: !1,
            loop: !0,
            autoplay: !0,
            autoplayTimeout: 2e3,
            autoplayHoverPause: !0,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1200: {
                    items: 6
                }
            }
        });
        n(".client-slider").owlCarousel({
            loop: !0,
            margin: 0,
            responsiveClass: !0,
            nav: !1,
            dots: !1,
            loop: !0,
            autoplay: !0,
            autoplayTimeout: 2e3,
            autoplayHoverPause: !0,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
        n(".history-slider").owlCarousel({
            loop: !0,
            margin: 0,
            responsiveClass: !0,
            nav: !1,
            dots: !1,
            loop: !0,
            autoplay: !0,
            autoplayTimeout: 2e3,
            autoplayHoverPause: !0,
            center: !0,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 3
                },
                1199: {
                    items: 5
                }
            }
        });
        n(".tool-slider").owlCarousel({
            loop: !0,
            margin: 30,
            responsiveClass: !0,
            nav: !0,
            navText: ["<i class='flaticon-double-left-angle-arrows' aria-hidden='true'><\/i>", "<i class='flaticon-double-angle-arrow-pointing-to-right' aria-hidden='true'><\/i>"],
            dots: !1,
            loop: !0,
            autoplay: !0,
            autoplayTimeout: 2e3,
            autoplayHoverPause: !0,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 2
                }
            }
        });
        n(".feature-item-2-slider").owlCarousel({
            loop: !0,
            margin: 30,
            responsiveClass: !0,
            nav: !1,
            dots: !1,
            loop: !0,
            autoplay: !0,
            autoplayTimeout: 2e3,
            autoplayHoverPause: !0,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
        n(".pricing-slider").owlCarousel({
            loop: !0,
            margin: 0,
            responsiveClass: !0,
            nav: !1,
            dots: !1,
            loop: !0,
            autoplay: !0,
            autoplayTimeout: 2e3,
            autoplayHoverPause: !0,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
        n(".feat-slider").length && n(".feat-slider").owlCarousel({
            center: !0,
            items: 1,
            loop: !0,
            margin: 0,
            singleItem: !0,
            nav: !1,
            dots: !1,
            thumbs: !0,
            mouseDrag: !1,
            touchDrag: !0,
            thumbsPrerendered: !0,
            animateOut: "fadeOut",
            animateIn: "fadeIn"
        });
        s = n(".feat-slider, .app-screenshot-slider-20, .feature-content-slider-20");
        n(".feat-prev").on("click", function() {
            s.trigger("prev.owl.carousel")
        });
        n(".feat-next").on("click", function() {
            s.trigger("next.owl.carousel", [300])
        });
        n(".work-slider").length && n(".work-slider").owlCarousel({
            center: !0,
            items: 1,
            loop: !1,
            margin: 0,
            singleItem: !0,
            nav: !0,
            dots: !1,
            thumbs: !0,
            mouseDrag: !1,
            touchDrag: !0,
            thumbsPrerendered: !0
        });
        n(".screenshot-slider, .screenshot-slider-3").owlCarousel({
            items: 1,
            loop: !1,
            margin: 30,
            singleItem: !0,
            nav: !1,
            dots: !1
        });
        h = n(".screenshot-slider, .screenshot-slider-3");
        n(".app-prev").on("click", function() {
            h.trigger("prev.owl.carousel")
        });
        n(".app-next").on("click", function() {
            h.trigger("next.owl.carousel", [300])
        });
        n(".screenshot-slider-2").owlCarousel({
            items: 1,
            loop: !1,
            margin: 30,
            singleItem: !0,
            nav: !1,
            dots: !0,
            dotsContainer: ".dots-2"
        });
        n(".app-screenshot-slider-20, .how-slider-20").owlCarousel({
            items: 1,
            loop: !1,
            margin: 30,
            singleItem: !0,
            nav: !1,
            dots: !0,
            dotsContainer: ".dots-2",
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            mouseDrag: !1
        });
        n(".client-slider-2, .feature-content-slider-20").owlCarousel({
            items: 1,
            loop: !1,
            margin: 30,
            singleItem: !0,
            nav: !1,
            dots: !1
        });
        n(".amazing-slider").owlCarousel({
            loop: !0,
            margin: 30,
            responsiveClass: !0,
            nav: !1,
            dots: !1,
            loop: !0,
            autoplay: !0,
            autoplayTimeout: 2e3,
            autoplayHoverPause: !0,
            responsive: {
                0: {
                    items: 1
                },
                450: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3,
                    margin: 70
                }
            }
        });
        n(".up--down--overflow").prev("*").addClass("pb-lg-200");
        n(".up--down--overflow").next("*").addClass("pt-lg-200");
        n(".up--down--overflow").addClass("pt-lg-0 pb-lg-0");
        n(".chorka").on("click", function() {
            n(".swap-area").toggleClass("active")
        });
        n(".client-item-16 .client-thumb").on("mouseover", function() {
            var t = n(this).parent(".client-item-16");
            t.hasClass("open") ? (t.removeClass("open"),
            t.removeClass("active")) : (t.siblings(".client-item-16").find(".client-content").removeClass("active"),
            t.siblings(".client-item-16").removeClass("active"),
            t.children(".client-content").addClass("active"),
            t.addClass("active"))
        })
    })
}(jQuery);
$(function() {
    window.sr = ScrollReveal();
    sr.reveal(".banner-content-11,.footer-bottom,.page-header-content.cl-white h2", {
        duration: 1e3,
        opacity: 0,
        mobile: !1
    });
    sr.reveal(".am-item,.contact-wrapper", {
        duration: 1e3,
        origin: "bottom",
        distance: "1000px",
        mobile: !1
    });
    sr.reveal(".contact-item,.faq-item", {
        duration: 1e3,
        origin: "right",
        distance: "1000px",
        mobile: !1
    });
    sr.reveal(".feature-item,.faq-header", {
        duration: 1300,
        delay: 200,
        origin: "left",
        distance: "420px",
        mobile: !1
    })
});
$(".counter").each(function() {
    var n = $(this)
      , t = n.attr("data-count");
    $({
        countNum: n.text()
    }).animate({
        countNum: t
    }, {
        duration: 3e3,
        easing: "linear",
        step: function() {
            n.text(Math.floor(this.countNum))
        },
        complete: function() {
            n.text(this.countNum)
        }
    })
});
$(document).on("blur", "input", function() {
    var n = $(this).val();
    n == "" ? ($(this).removeClass("filled"),
    $(this).parents(".form-group").removeClass("focused")) : $(this).addClass("filled")
});
$(document).on("focus", "input", function() {
    $(this).parents(".form-group").addClass("focused")
});
$("input").blur(function() {
    var n = $(this).val();
    n == "" ? ($(this).removeClass("filled"),
    $(this).parents(".form-group").removeClass("focused")) : $(this).addClass("filled")
});
window.addEventListener("load", function() {
    window.cookieconsent.initialise({
        palette: {
            popup: {
                background: "#bed3f3",
                text: "#0c2041"
            },
            button: {
                background: "#8ec760",
                text: "#ffffff"
            }
        },
        theme: "classic",
        content: {
            message: "Sitemizden en iyi şekilde faydalanabilmeniz için çerezler kullanılmaktadır. Bu siteye giriş yaparak çerez kullanımını kabul etmiş sayılıyorsunuz.",
            dismiss: "Tamam",
            link: "Daha fazla bilgi",
            href: "/cerez-politikasi"
        }
    })
});
/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
!function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = n(require("jquery")) : n(jQuery)
}(function(n) {
    n.extend(n.fn, {
        validate: function(t) {
            if (!this.length)
                return void (t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var i = n.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"),
            i = new n.validator(t,this[0]),
            n.data(this[0], "validator", i),
            i.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                i.submitButton = t.currentTarget;
                n(this).hasClass("cancel") && (i.cancelSubmit = !0);
                void 0 !== n(this).attr("formnovalidate") && (i.cancelSubmit = !0)
            }),
            this.on("submit.validate", function(t) {
                function r() {
                    var r, u;
                    return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (r = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(n(i.submitButton).val()).appendTo(i.currentForm)),
                    !i.settings.submitHandler || (u = i.settings.submitHandler.call(i, i.currentForm, t),
                    r && r.remove(),
                    void 0 !== u && u)
                }
                return i.settings.debug && t.preventDefault(),
                i.cancelSubmit ? (i.cancelSubmit = !1,
                r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0,
                !1) : r() : (i.focusInvalid(),
                !1)
            })),
            i)
        },
        valid: function() {
            var t, i, r;
            return n(this[0]).is("form") ? t = this.validate().form() : (r = [],
            t = !0,
            i = n(this[0].form).validate(),
            this.each(function() {
                t = i.element(this) && t;
                t || (r = r.concat(i.errorList))
            }),
            i.errorList = r),
            t
        },
        rules: function(t, i) {
            var e, s, f, u, o, h, r = this[0];
            if (null != r && (!r.form && r.hasAttribute("contenteditable") && (r.form = this.closest("form")[0],
            r.name = this.attr("name")),
            null != r.form)) {
                if (t)
                    switch (e = n.data(r.form, "validator").settings,
                    s = e.rules,
                    f = n.validator.staticRules(r),
                    t) {
                    case "add":
                        n.extend(f, n.validator.normalizeRule(i));
                        delete f.messages;
                        s[r.name] = f;
                        i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                        break;
                    case "remove":
                        return i ? (h = {},
                        n.each(i.split(/\s/), function(n, t) {
                            h[t] = f[t];
                            delete f[t]
                        }),
                        h) : (delete s[r.name],
                        f)
                    }
                return u = n.validator.normalizeRules(n.extend({}, n.validator.classRules(r), n.validator.attributeRules(r), n.validator.dataRules(r), n.validator.staticRules(r)), r),
                u.required && (o = u.required,
                delete u.required,
                u = n.extend({
                    required: o
                }, u)),
                u.remote && (o = u.remote,
                delete u.remote,
                u = n.extend(u, {
                    remote: o
                })),
                u
            }
        }
    });
    n.extend(n.expr.pseudos || n.expr[":"], {
        blank: function(t) {
            return !n.trim("" + n(t).val())
        },
        filled: function(t) {
            var i = n(t).val();
            return null !== i && !!n.trim("" + i)
        },
        unchecked: function(t) {
            return !n(t).prop("checked")
        }
    });
    n.validator = function(t, i) {
        this.settings = n.extend(!0, {}, n.validator.defaults, t);
        this.currentForm = i;
        this.init()
    }
    ;
    n.validator.format = function(t, i) {
        return 1 === arguments.length ? function() {
            var i = n.makeArray(arguments);
            return i.unshift(t),
            n.validator.format.apply(this, i)
        }
        : void 0 === i ? t : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)),
        i.constructor !== Array && (i = [i]),
        n.each(i, function(n, i) {
            t = t.replace(new RegExp("\\{" + n + "\\}","g"), function() {
                return i
            })
        }),
        t)
    }
    ;
    n.extend(n.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: n([]),
            errorLabelContainer: n([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(n) {
                this.lastActive = n;
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(n)))
            },
            onfocusout: function(n) {
                !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
            },
            onkeyup: function(t, i) {
                9 === i.which && "" === this.elementValue(t) || n.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) !== -1 || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function(n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            },
            highlight: function(t, i, r) {
                "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            },
            unhighlight: function(t, i, r) {
                "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }
        },
        setDefaults: function(t) {
            n.extend(n.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Gecerli bir mail adresi giriniz!",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: n.validator.format("Please enter no more than {0} characters."),
            minlength: n.validator.format("Please enter at least {0} characters."),
            rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
            range: n.validator.format("Please enter a value between {0} and {1}."),
            max: n.validator.format("Please enter a value less than or equal to {0}."),
            min: n.validator.format("Please enter a value greater than or equal to {0}."),
            step: n.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function i(t) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = n(this).closest("form")[0],
                    this.name = n(this).attr("name"));
                    var r = n.data(this.form, "validator")
                      , u = "on" + t.type.replace(/^validate/, "")
                      , i = r.settings;
                    i[u] && !n(this).is(i.ignore) && i[u].call(r, this, t)
                }
                this.labelContainer = n(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm);
                this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var t, r = this.groups = {};
                n.each(this.settings.groups, function(t, i) {
                    "string" == typeof i && (i = i.split(/\s/));
                    n.each(i, function(n, i) {
                        r[i] = t
                    })
                });
                t = this.settings.rules;
                n.each(t, function(i, r) {
                    t[i] = n.validator.normalizeRule(r)
                });
                n(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", i).on("click.validate", "select, option, [type='radio'], [type='checkbox']", i);
                this.settings.invalidHandler && n(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(),
                n.extend(this.submitted, this.errorMap),
                this.invalid = n.extend({}, this.errorMap),
                this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++)
                    this.check(t[n]);
                return this.valid()
            },
            element: function(t) {
                var e, o, i = this.clean(t), r = this.validationTargetFor(i), u = this, f = !0;
                return void 0 === r ? delete this.invalid[i.name] : (this.prepareElement(r),
                this.currentElements = n(r),
                o = this.groups[r.name],
                o && n.each(this.groups, function(n, t) {
                    t === o && n !== r.name && (i = u.validationTargetFor(u.clean(u.findByName(n))),
                    i && i.name in u.invalid && (u.currentElements.push(i),
                    f = u.check(i) && f))
                }),
                e = this.check(r) !== !1,
                f = f && e,
                this.invalid[r.name] = e ? !1 : !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                n(t).attr("aria-invalid", !e)),
                f
            },
            showErrors: function(t) {
                if (t) {
                    var i = this;
                    n.extend(this.errorMap, t);
                    this.errorList = n.map(this.errorMap, function(n, t) {
                        return {
                            message: n,
                            element: i.findByName(t)[0]
                        }
                    });
                    this.successList = n.grep(this.successList, function(n) {
                        return !(n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                n.fn.resetForm && n(this.currentForm).resetForm();
                this.invalid = {};
                this.submitted = {};
                this.prepareForm();
                this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            },
            resetElements: function(n) {
                var t;
                if (this.settings.unhighlight)
                    for (t = 0; n[t]; t++)
                        this.settings.unhighlight.call(this, n[t], this.settings.errorClass, ""),
                        this.findByName(n[t].name).removeClass(this.settings.validClass);
                else
                    n.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(n) {
                var t, i = 0;
                for (t in n)
                    void 0 !== n[t] && null !== n[t] && n[t] !== !1 && i++;
                return i
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(n) {
                n.not(this.containers).text("");
                this.addWrapper(n).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === n.grep(this.errorList, function(n) {
                    return n.element.name === t.name
                }).length && t
            },
            elements: function() {
                var t = this
                  , i = {};
                return n(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var r = this.name || n(this).attr("name");
                    return !r && t.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.hasAttribute("contenteditable") && (this.form = n(this).closest("form")[0],
                    this.name = r),
                    !(r in i || !t.objectLength(n(this).rules())) && (i[r] = !0,
                    !0)
                })
            },
            clean: function(t) {
                return n(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return n(this.settings.errorElement + "." + t, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = n([]);
                this.toHide = n([])
            },
            reset: function() {
                this.resetInternals();
                this.currentElements = n([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(n) {
                this.reset();
                this.toHide = this.errorsFor(n)
            },
            elementValue: function(t) {
                var i, r, f = n(t), u = t.type;
                return "radio" === u || "checkbox" === u ? this.findByName(t.name).filter(":checked").val() : "number" === u && "undefined" != typeof t.validity ? t.validity.badInput ? "NaN" : f.val() : (i = t.hasAttribute("contenteditable") ? f.text() : f.val(),
                "file" === u ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (r = i.lastIndexOf("/"),
                r >= 0 ? i.substr(r + 1) : (r = i.lastIndexOf("\\"),
                r >= 0 ? i.substr(r + 1) : i)) : "string" == typeof i ? i.replace(/\r/g, "") : i)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var u, f, r, e, i = n(t).rules(), c = n.map(i, function(n, t) {
                    return t
                }).length, h = !1, o = this.elementValue(t);
                if ("function" == typeof i.normalizer ? e = i.normalizer : "function" == typeof this.settings.normalizer && (e = this.settings.normalizer),
                e) {
                    if (o = e.call(t, o),
                    "string" != typeof o)
                        throw new TypeError("The normalizer should return a string value.");
                    delete i.normalizer
                }
                for (f in i) {
                    r = {
                        method: f,
                        parameters: i[f]
                    };
                    try {
                        if (u = n.validator.methods[f].call(this, o, t, r.parameters),
                        "dependency-mismatch" === u && 1 === c) {
                            h = !0;
                            continue
                        }
                        if (h = !1,
                        "pending" === u)
                            return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!u)
                            return this.formatAndAdd(t, r),
                            !1
                    } catch (s) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", s),
                        s instanceof TypeError && (s.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."),
                        s;
                    }
                }
                if (!h)
                    return this.objectLength(i) && this.successList.push(t),
                    !0
            },
            customDataMessage: function(t, i) {
                return n(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || n(t).data("msg")
            },
            customMessage: function(n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor === String ? i : i[t])
            },
            findDefined: function() {
                for (var n = 0; n < arguments.length; n++)
                    if (void 0 !== arguments[n])
                        return arguments[n]
            },
            defaultMessage: function(t, i) {
                "string" == typeof i && (i = {
                    method: i
                });
                var r = this.findDefined(this.customMessage(t.name, i.method), this.customDataMessage(t, i.method), !this.settings.ignoreTitle && t.title || void 0, n.validator.messages[i.method], "<strong>Warning: No message defined for " + t.name + "<\/strong>")
                  , u = /\$?\{(\d+)\}/g;
                return "function" == typeof r ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters)),
                r
            },
            formatAndAdd: function(n, t) {
                var i = this.defaultMessage(n, t);
                this.errorList.push({
                    message: i,
                    element: n,
                    method: t.method
                });
                this.errorMap[n.name] = i;
                this.submitted[n.name] = i
            },
            addWrapper: function(n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))),
                n
            },
            defaultShowErrors: function() {
                for (var i, t, n = 0; this.errorList[n]; n++)
                    t = this.errorList[n],
                    this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (n = 0; this.successList[n]; n++)
                        this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0,
                    i = this.validElements(); i[n]; n++)
                        this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return n(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, i) {
                var u, s, e, o, r = this.errorsFor(t), h = this.idOrName(t), f = n(t).attr("aria-describedby");
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                r.html(i)) : (r = n("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(i || ""),
                u = r,
                this.settings.wrapper && (u = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(u) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, u, n(t)) : u.insertAfter(t),
                r.is("label") ? r.attr("for", h) : 0 === r.parents("label[for='" + this.escapeCssMeta(h) + "']").length && (e = r.attr("id"),
                f ? f.match(new RegExp("\\b" + this.escapeCssMeta(e) + "\\b")) || (f += " " + e) : f = e,
                n(t).attr("aria-describedby", f),
                s = this.groups[t.name],
                s && (o = this,
                n.each(o.groups, function(t, i) {
                    i === s && n("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr("aria-describedby", r.attr("id"))
                }))));
                !i && this.settings.success && (r.text(""),
                "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t));
                this.toShow = this.toShow.add(r)
            },
            errorsFor: function(t) {
                var r = this.escapeCssMeta(this.idOrName(t))
                  , u = n(t).attr("aria-describedby")
                  , i = "label[for='" + r + "'], label[for='" + r + "'] *";
                return u && (i = i + ", #" + this.escapeCssMeta(u).replace(/\s+/g, ", #")),
                this.errors().filter(i)
            },
            escapeCssMeta: function(n) {
                return n.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name)),
                n(t).not(this.settings.ignore)[0]
            },
            checkable: function(n) {
                return /radio|checkbox/i.test(n.type)
            },
            findByName: function(t) {
                return n(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return n("option:selected", i).length;
                case "input":
                    if (this.checkable(i))
                        return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(n, t) {
                return !this.dependTypes[typeof n] || this.dependTypes[typeof n](n, t)
            },
            dependTypes: {
                boolean: function(n) {
                    return n
                },
                string: function(t, i) {
                    return !!n(t, i.form).length
                },
                "function": function(n, t) {
                    return n(t)
                }
            },
            optional: function(t) {
                var i = this.elementValue(t);
                return !n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++,
                n(t).addClass(this.settings.pendingClass),
                this.pending[t.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--;
                this.pendingRequest < 0 && (this.pendingRequest = 0);
                delete this.pending[t.name];
                n(t).removeClass(this.settings.pendingClass);
                i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (n(this.currentForm).submit(),
                this.submitButton && n("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(),
                this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(t, i) {
                return i = "string" == typeof i && i || "remote",
                n.data(t, "previousValue") || n.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {
                        method: i
                    })
                })
            },
            destroy: function() {
                this.resetForm();
                n(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {}
              , r = n(t).attr("class");
            return r && n.each(r.split(" "), function() {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }),
            i
        },
        normalizeAttributeRule: function(n, t, i, r) {
            /min|max|step/.test(i) && (null === t || /number|range|text/.test(t)) && (r = Number(r),
            isNaN(r) && (r = void 0));
            r || 0 === r ? n[i] = r : t === i && "range" !== t && (n[i] = !0)
        },
        attributeRules: function(t) {
            var r, i, u = {}, f = n(t), e = t.getAttribute("type");
            for (r in n.validator.methods)
                "required" === r ? (i = t.getAttribute(r),
                "" === i && (i = !0),
                i = !!i) : i = f.attr(r),
                this.normalizeAttributeRule(u, e, r, i);
            return u.maxlength && /-1|2147483647|524288/.test(u.maxlength) && delete u.maxlength,
            u
        },
        dataRules: function(t) {
            var i, r, u = {}, f = n(t), e = t.getAttribute("type");
            for (i in n.validator.methods)
                r = f.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()),
                this.normalizeAttributeRule(u, e, i, r);
            return u
        },
        staticRules: function(t) {
            var i = {}
              , r = n.data(t.form, "validator");
            return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}),
            i
        },
        normalizeRules: function(t, i) {
            return n.each(t, function(r, u) {
                if (u === !1)
                    return void delete t[r];
                if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                    case "string":
                        f = !!n(u.depends, i.form).length;
                        break;
                    case "function":
                        f = u.depends.call(i, i)
                    }
                    f ? t[r] = void 0 === u.param || u.param : (n.data(i.form, "validator").resetElements(n(i)),
                    delete t[r])
                }
            }),
            n.each(t, function(r, u) {
                t[r] = n.isFunction(u) && "normalizer" !== r ? u(i) : u
            }),
            n.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }),
            n.each(["rangelength", "range"], function() {
                var i;
                t[this] && (n.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                t[this] = [Number(i[0]), Number(i[1])]))
            }),
            n.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max],
            delete t.min,
            delete t.max),
            null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength],
            delete t.minlength,
            delete t.maxlength)),
            t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var i = {};
                n.each(t.split(/\s/), function() {
                    i[this] = !0
                });
                t = i
            }
            return t
        },
        addMethod: function(t, i, r) {
            n.validator.methods[t] = i;
            n.validator.messages[t] = void 0 !== r ? r : n.validator.messages[t];
            i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, r) {
                if (!this.depend(r, i))
                    return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var u = n(i).val();
                    return u && u.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : t.length > 0
            },
            email: function(n, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(n)
            },
            url: function(n, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(n)
            },
            date: function(n, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(n).toString())
            },
            dateISO: function(n, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(n)
            },
            number: function(n, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
            },
            digits: function(n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            },
            minlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || u >= r
            },
            maxlength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || u <= r
            },
            rangelength: function(t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || u >= r[0] && u <= r[1]
            },
            min: function(n, t, i) {
                return this.optional(t) || n >= i
            },
            max: function(n, t, i) {
                return this.optional(t) || n <= i
            },
            range: function(n, t, i) {
                return this.optional(t) || n >= i[0] && n <= i[1]
            },
            step: function(t, i, r) {
                var u, f = n(i).attr("type"), h = "Step attribute on input type " + f + " is not supported.", c = new RegExp("\\b" + f + "\\b"), l = f && !c.test("text,number,range"), e = function(n) {
                    var t = ("" + n).match(/(?:\.(\d+))?$/);
                    return t && t[1] ? t[1].length : 0
                }, o = function(n) {
                    return Math.round(n * Math.pow(10, u))
                }, s = !0;
                if (l)
                    throw new Error(h);
                return u = e(r),
                (e(t) > u || o(t) % o(r) != 0) && (s = !1),
                this.optional(i) || s
            },
            equalTo: function(t, i, r) {
                var u = n(r);
                return this.settings.onfocusout && u.not(".validate-equalTo-blur").length && u.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    n(i).valid()
                }),
                t === u.val()
            },
            remote: function(t, i, r, u) {
                if (this.optional(i))
                    return "dependency-mismatch";
                u = "string" == typeof u && u || "remote";
                var f, o, s, e = this.previousValue(i, u);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
                e.originalMessage = e.originalMessage || this.settings.messages[i.name][u],
                this.settings.messages[i.name][u] = e.message,
                r = "string" == typeof r && {
                    url: r
                } || r,
                s = n.param(n.extend({
                    data: t
                }, r.data)),
                e.old === s ? e.valid : (e.old = s,
                f = this,
                this.startRequest(i),
                o = {},
                o[i.name] = t,
                n.ajax(n.extend(!0, {
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: o,
                    context: f.currentForm,
                    success: function(n) {
                        var r, s, h, o = n === !0 || "true" === n;
                        f.settings.messages[i.name][u] = e.originalMessage;
                        o ? (h = f.formSubmitted,
                        f.resetInternals(),
                        f.toHide = f.errorsFor(i),
                        f.formSubmitted = h,
                        f.successList.push(i),
                        f.invalid[i.name] = !1,
                        f.showErrors()) : (r = {},
                        s = n || f.defaultMessage(i, {
                            method: u,
                            parameters: t
                        }),
                        r[i.name] = e.message = s,
                        f.invalid[i.name] = !0,
                        f.showErrors(r));
                        e.valid = o;
                        f.stopRequest(i, o)
                    }
                }, r)),
                "pending")
            }
        }
    });
    var i, t = {};
    return n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
        var u = n.port;
        "abort" === n.mode && (t[u] && t[u].abort(),
        t[u] = r)
    }) : (i = n.ajax,
    n.ajax = function(r) {
        var f = ("mode"in r ? r : n.ajaxSettings).mode
          , u = ("port"in r ? r : n.ajaxSettings).port;
        return "abort" === f ? (t[u] && t[u].abort(),
        t[u] = i.apply(this, arguments),
        t[u]) : i.apply(this, arguments)
    }
    ),
    n
});
!function(n) {
    "function" == typeof define && define.amd ? define("jquery.validate.unobtrusive", ["jquery-validation"], n) : "object" == typeof module && module.exports ? module.exports = n(require("jquery-validation")) : jQuery.validator.unobtrusive = n(jQuery)
}(function(n) {
    function i(n, t, i) {
        n.rules[t] = i;
        n.message && (n.messages[t] = n.message)
    }
    function h(n) {
        return n.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g)
    }
    function f(n) {
        return n.replace(/([!"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
    }
    function e(n) {
        return n.substr(0, n.lastIndexOf(".") + 1)
    }
    function o(n, t) {
        return 0 === n.indexOf("*.") && (n = n.replace("*.", t)),
        n
    }
    function c(t, i) {
        var r = n(this).find("[data-valmsg-for='" + f(i[0].name) + "']")
          , u = r.attr("data-valmsg-replace")
          , e = u ? n.parseJSON(u) !== !1 : null;
        r.removeClass("field-validation-valid").addClass("field-validation-error");
        t.data("unobtrusiveContainer", r);
        e ? (r.empty(),
        t.removeClass("input-validation-error").appendTo(r)) : t.hide()
    }
    function l(t, i) {
        var u = n(this).find("[data-valmsg-summary=true]")
          , r = u.find("ul");
        r && r.length && i.errorList.length && (r.empty(),
        u.addClass("validation-summary-errors").removeClass("validation-summary-valid"),
        n.each(i.errorList, function() {
            n("<li />").html(this.message).appendTo(r)
        }))
    }
    function a(t) {
        var i = t.data("unobtrusiveContainer"), r, u;
        i && (r = i.attr("data-valmsg-replace"),
        u = r ? n.parseJSON(r) : null,
        i.addClass("field-validation-valid").removeClass("field-validation-error"),
        t.removeData("unobtrusiveContainer"),
        u && i.empty())
    }
    function v() {
        var t = n(this)
          , i = "__jquery_unobtrusive_validation_form_reset";
        if (!t.data(i)) {
            t.data(i, !0);
            try {
                t.data("validator").resetForm()
            } finally {
                t.removeData(i)
            }
            t.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
            t.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
        }
    }
    function s(t) {
        var i = n(t)
          , f = i.data(u)
          , s = n.proxy(v, t)
          , e = r.unobtrusive.options || {}
          , o = function(i, r) {
            var u = e[i];
            u && n.isFunction(u) && u.apply(t, r)
        };
        return f || (f = {
            options: {
                errorClass: e.errorClass || "input-validation-error",
                errorElement: e.errorElement || "span",
                errorPlacement: function() {
                    c.apply(t, arguments);
                    o("errorPlacement", arguments)
                },
                invalidHandler: function() {
                    l.apply(t, arguments);
                    o("invalidHandler", arguments)
                },
                messages: {},
                rules: {},
                success: function() {
                    a.apply(t, arguments);
                    o("success", arguments)
                }
            },
            attachValidation: function() {
                i.off("reset." + u, s).on("reset." + u, s).validate(this.options)
            },
            validate: function() {
                return i.validate(),
                i.valid()
            }
        },
        i.data(u, f)),
        f
    }
    var t, r = n.validator, u = "unobtrusiveValidation";
    return r.unobtrusive = {
        adapters: [],
        parseElement: function(t, i) {
            var r, u, o, f = n(t), e = f.parents("form")[0];
            e && (r = s(e),
            r.options.rules[t.name] = u = {},
            r.options.messages[t.name] = o = {},
            n.each(this.adapters, function() {
                var i = "data-val-" + this.name
                  , r = f.attr(i)
                  , s = {};
                void 0 !== r && (i += "-",
                n.each(this.params, function() {
                    s[this] = f.attr(i + this)
                }),
                this.adapt({
                    element: t,
                    form: e,
                    message: r,
                    params: s,
                    rules: u,
                    messages: o
                }))
            }),
            n.extend(u, {
                __dummy__: !0
            }),
            i || r.attachValidation())
        },
        parse: function(t) {
            var i = n(t)
              , u = i.parents().addBack().filter("form").add(i.find("form")).has("[data-val=true]");
            i.find("[data-val=true]").each(function() {
                r.unobtrusive.parseElement(this, !0)
            });
            u.each(function() {
                var n = s(this);
                n && n.attachValidation()
            })
        }
    },
    t = r.unobtrusive.adapters,
    t.add = function(n, t, i) {
        return i || (i = t,
        t = []),
        this.push({
            name: n,
            params: t,
            adapt: i
        }),
        this
    }
    ,
    t.addBool = function(n, t) {
        return this.add(n, function(r) {
            i(r, t || n, !0)
        })
    }
    ,
    t.addMinMax = function(n, t, r, u, f, e) {
        return this.add(n, [f || "min", e || "max"], function(n) {
            var f = n.params.min
              , e = n.params.max;
            f && e ? i(n, u, [f, e]) : f ? i(n, t, f) : e && i(n, r, e)
        })
    }
    ,
    t.addSingleVal = function(n, t, r) {
        return this.add(n, [t || "val"], function(u) {
            i(u, r || n, u.params[t])
        })
    }
    ,
    r.addMethod("__dummy__", function() {
        return !0
    }),
    r.addMethod("regex", function(n, t, i) {
        var r;
        return !!this.optional(t) || (r = new RegExp(i).exec(n),
        r && 0 === r.index && r[0].length === n.length)
    }),
    r.addMethod("nonalphamin", function(n, t, i) {
        var r;
        return i && (r = n.match(/\W/g),
        r = r && r.length >= i),
        r
    }),
    r.methods.extension ? (t.addSingleVal("accept", "mimtype"),
    t.addSingleVal("extension", "extension")) : t.addSingleVal("extension", "extension", "accept"),
    t.addSingleVal("regex", "pattern"),
    t.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url"),
    t.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range"),
    t.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength"),
    t.add("equalto", ["other"], function(t) {
        var r = e(t.element.name)
          , u = t.params.other
          , s = o(u, r)
          , h = n(t.form).find(":input").filter("[name='" + f(s) + "']")[0];
        i(t, "equalTo", h)
    }),
    t.add("required", function(n) {
        "INPUT" === n.element.tagName.toUpperCase() && "CHECKBOX" === n.element.type.toUpperCase() || i(n, "required", !0)
    }),
    t.add("remote", ["url", "type", "additionalfields"], function(t) {
        var r = {
            url: t.params.url,
            type: t.params.type || "GET",
            data: {}
        }
          , u = e(t.element.name);
        n.each(h(t.params.additionalfields || t.element.name), function(i, e) {
            var s = o(e, u);
            r.data[s] = function() {
                var i = n(t.form).find(":input").filter("[name='" + f(s) + "']");
                return i.is(":checkbox") ? i.filter(":checked").val() || i.filter(":hidden").val() || "" : i.is(":radio") ? i.filter(":checked").val() || "" : i.val()
            }
        });
        i(t, "remote", r)
    }),
    t.add("password", ["min", "nonalphamin", "regex"], function(n) {
        n.params.min && i(n, "minlength", n.params.min);
        n.params.nonalphamin && i(n, "nonalphamin", n.params.nonalphamin);
        n.params.regex && i(n, "regex", n.params.regex)
    }),
    t.add("fileextensions", ["extensions"], function(n) {
        i(n, "extension", n.params.extensions)
    }),
    n(function() {
        r.unobtrusive.parse(document)
    }),
    r.unobtrusive
});
var defaultRangeValidator = $.validator.methods.range;
$.validator.methods.range = function(n, t, i) {
    return t.type === "checkbox" ? t.checked : defaultRangeValidator.call(this, n, t, i)
}
;
!function(n) {
    var t, i;
    n.hasInitialised || (t = {
        escapeRegExp: function(n) {
            return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        },
        hasClass: function(n, t) {
            var i = " ";
            return 1 === n.nodeType && (i + n.className + i).replace(/[\n\t]/g, i).indexOf(i + t + i) >= 0
        },
        addClass: function(n, t) {
            n.className += " " + t
        },
        removeClass: function(n, t) {
            var i = new RegExp("\\b" + this.escapeRegExp(t) + "\\b");
            n.className = n.className.replace(i, "")
        },
        interpolateString: function(n, t) {
            return n.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, function() {
                return t(arguments[1]) || ""
            })
        },
        getCookie: function(n) {
            var i = "; " + document.cookie
              , t = i.split("; " + n + "=");
            if (2 == t.length)
                return t.pop().split(";").shift()
        },
        setCookie: function(n, t, i, r, u) {
            var f = new Date, e;
            f.setDate(f.getDate() + (i || 365));
            e = [n + "=" + t, "expires=" + f.toUTCString(), "path=" + (u || "/")];
            r && e.push("domain=" + r);
            document.cookie = e.join(";")
        },
        deepExtend: function(n, t) {
            for (var i in t)
                t.hasOwnProperty(i) && (i in n && this.isPlainObject(n[i]) && this.isPlainObject(t[i]) ? this.deepExtend(n[i], t[i]) : n[i] = t[i]);
            return n
        },
        throttle: function(n, t) {
            var i = !1;
            return function() {
                i || (n.apply(this, arguments),
                i = !0,
                setTimeout(function() {
                    i = !1
                }, t))
            }
        },
        hash: function(n) {
            var i, r, u, t = 0;
            if (0 === n.length)
                return t;
            for (i = 0,
            u = n.length; i < u; ++i)
                r = n.charCodeAt(i),
                t = (t << 5) - t + r,
                t |= 0;
            return t
        },
        normaliseHex: function(n) {
            return "#" == n[0] && (n = n.substr(1)),
            3 == n.length && (n = n[0] + n[0] + n[1] + n[1] + n[2] + n[2]),
            n
        },
        getContrast: function(n) {
            n = this.normaliseHex(n);
            var t = parseInt(n.substr(0, 2), 16)
              , i = parseInt(n.substr(2, 2), 16)
              , r = parseInt(n.substr(4, 2), 16)
              , u = (299 * t + 587 * i + 114 * r) / 1e3;
            return u >= 128 ? "#000" : "#fff"
        },
        getLuminance: function(n) {
            var t = parseInt(this.normaliseHex(n), 16)
              , i = 38
              , r = (t >> 16) + i
              , u = (t >> 8 & 255) + i
              , f = (255 & t) + i
              , e = (16777216 + 65536 * (r < 255 ? r < 1 ? 0 : r : 255) + 256 * (u < 255 ? u < 1 ? 0 : u : 255) + (f < 255 ? f < 1 ? 0 : f : 255)).toString(16).slice(1);
            return "#" + e
        },
        isMobile: function() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        },
        isPlainObject: function(n) {
            return "object" == typeof n && null !== n && n.constructor == Object
        }
    },
    n.status = {
        deny: "deny",
        allow: "allow",
        dismiss: "dismiss"
    },
    n.transitionEnd = function() {
        var i = document.createElement("div")
          , n = {
            t: "transitionend",
            OT: "oTransitionEnd",
            msT: "MSTransitionEnd",
            MozT: "transitionend",
            WebkitT: "webkitTransitionEnd"
        };
        for (var t in n)
            if (n.hasOwnProperty(t) && "undefined" != typeof i.style[t + "ransition"])
                return n[t];
        return ""
    }(),
    n.hasTransition = !!n.transitionEnd,
    i = Object.keys(n.status).map(t.escapeRegExp),
    n.customStyles = {},
    n.Popup = function() {
        function r() {
            this.initialise.apply(this, arguments)
        }
        function f(n) {
            this.openingTimeout = null;
            t.removeClass(n, "cc-invisible")
        }
        function e(t) {
            t.style.display = "none";
            t.removeEventListener(n.transitionEnd, this.afterTransition);
            this.afterTransition = null
        }
        function h() {
            var t = this.options.onInitialise.bind(this);
            if (!window.navigator.cookieEnabled)
                return t(n.status.deny),
                !0;
            if (window.CookiesOK || window.navigator.CookiesOK)
                return t(n.status.allow),
                !0;
            var u = Object.keys(n.status)
              , i = this.getStatus()
              , r = u.indexOf(i) >= 0;
            return r && t(i),
            r
        }
        function o() {
            var t = this.options.position.split("-")
              , n = [];
            return t.forEach(function(t) {
                n.push("cc-" + t)
            }),
            n
        }
        function c() {
            var i = this.options, r = "top" == i.position || "bottom" == i.position ? "banner" : "floating", n;
            return t.isMobile() && (r = "floating"),
            n = ["cc-" + r, "cc-type-" + i.type, "cc-theme-" + i.theme],
            i.static && n.push("cc-static"),
            n.push.apply(n, o.call(this)),
            v.call(this, this.options.palette),
            this.customStyleSelector && n.push(this.customStyleSelector),
            n
        }
        function l() {
            var i = {}, n = this.options, r, u;
            return n.showLink || (n.elements.link = "",
            n.elements.messagelink = n.elements.message),
            Object.keys(n.elements).forEach(function(r) {
                i[r] = t.interpolateString(n.elements[r], function(t) {
                    var i = n.content[t];
                    return t && "string" == typeof i && i.length ? i : ""
                })
            }),
            r = n.compliance[n.type],
            r || (r = n.compliance.info),
            i.compliance = t.interpolateString(r, function(n) {
                return i[n]
            }),
            u = n.layouts[n.layout],
            u || (u = n.layouts.basic),
            t.interpolateString(u, function(n) {
                return i[n]
            })
        }
        function u(i) {
            var u = this.options, e = document.createElement("div"), f = u.container && 1 === u.container.nodeType ? u.container : document.body, r;
            return e.innerHTML = i,
            r = e.children[0],
            r.style.display = "none",
            t.hasClass(r, "cc-window") && n.hasTransition && t.addClass(r, "cc-invisible"),
            this.onButtonClick = a.bind(this),
            r.addEventListener("click", this.onButtonClick),
            u.autoAttach && (f.firstChild ? f.insertBefore(r, f.firstChild) : f.appendChild(r)),
            r
        }
        function a(r) {
            var u = r.target, f, e;
            t.hasClass(u, "cc-btn") && (f = u.className.match(new RegExp("\\bcc-(" + i.join("|") + ")\\b")),
            e = f && f[1] || !1,
            e && (this.setStatus(e),
            this.close(!0)));
            t.hasClass(u, "cc-close") && (this.setStatus(n.status.dismiss),
            this.close(!0));
            t.hasClass(u, "cc-revoke") && this.revokeChoice()
        }
        function v(n) {
            var r = t.hash(JSON.stringify(n))
              , u = "cc-color-override-" + r
              , i = t.isPlainObject(n);
            return this.customStyleSelector = i ? u : null,
            i && y(r, n, "." + u),
            i
        }
        function y(i, r, u) {
            var h, l, c;
            if (n.customStyles[i])
                return void ++n.customStyles[i].references;
            var s = {}
              , f = r.popup
              , e = r.button
              , o = r.highlight;
            f && (f.text = f.text ? f.text : t.getContrast(f.background),
            f.link = f.link ? f.link : f.text,
            s[u + ".cc-window"] = ["color: " + f.text, "background-color: " + f.background],
            s[u + ".cc-revoke"] = ["color: " + f.text, "background-color: " + f.background],
            s[u + " .cc-link," + u + " .cc-link:active," + u + " .cc-link:visited"] = ["color: " + f.link],
            e && (e.text = e.text ? e.text : t.getContrast(e.background),
            e.border = e.border ? e.border : "transparent",
            s[u + " .cc-btn"] = ["color: " + e.text, "border-color: " + e.border, "background-color: " + e.background],
            "transparent" != e.background && (s[u + " .cc-btn:hover, " + u + " .cc-btn:focus"] = ["background-color: " + p(e.background)]),
            o ? (o.text = o.text ? o.text : t.getContrast(o.background),
            o.border = o.border ? o.border : "transparent",
            s[u + " .cc-highlight .cc-btn:first-child"] = ["color: " + o.text, "border-color: " + o.border, "background-color: " + o.background]) : s[u + " .cc-highlight .cc-btn:first-child"] = ["color: " + f.text]));
            h = document.createElement("style");
            document.head.appendChild(h);
            n.customStyles[i] = {
                references: 1,
                element: h.sheet
            };
            l = -1;
            for (c in s)
                s.hasOwnProperty(c) && h.sheet.insertRule(c + "{" + s[c].join(";") + "}", ++l)
        }
        function p(n) {
            return n = t.normaliseHex(n),
            "000000" == n ? "#222" : t.getLuminance(n)
        }
        function w(i) {
            var f, u, r;
            t.isPlainObject(i) && (f = t.hash(JSON.stringify(i)),
            u = n.customStyles[f],
            u && !--u.references && (r = u.element.ownerNode,
            r && r.parentNode && r.parentNode.removeChild(r),
            n.customStyles[f] = null))
        }
        function s(n, t) {
            for (var i, r = 0, u = n.length; r < u; ++r)
                if (i = n[r],
                i instanceof RegExp && i.test(t) || "string" == typeof i && i.length && i === t)
                    return !0;
            return !1
        }
        function b() {
            var u = this.setStatus.bind(this), r = this.options.dismissOnTimeout, t, i;
            "number" == typeof r && r >= 0 && (this.dismissTimeout = window.setTimeout(function() {
                u(n.status.dismiss)
            }, Math.floor(r)));
            t = this.options.dismissOnScroll;
            "number" == typeof t && t >= 0 && (i = function() {
                window.pageYOffset > Math.floor(t) && (u(n.status.dismiss),
                window.removeEventListener("scroll", i),
                this.onWindowScroll = null)
            }
            ,
            this.onWindowScroll = i,
            window.addEventListener("scroll", i))
        }
        function k() {
            var i, f, n, r;
            ("info" != this.options.type && (this.options.revokable = !0),
            t.isMobile() && (this.options.animateRevokable = !1),
            this.options.revokable) && (i = o.call(this),
            this.options.animateRevokable && i.push("cc-animate"),
            this.customStyleSelector && i.push(this.customStyleSelector),
            f = this.options.revokeBtn.replace("{{classes}}", i.join(" ")),
            this.revokeBtn = u.call(this, f),
            n = this.revokeBtn,
            this.options.animateRevokable && (r = t.throttle(function(i) {
                var r = !1
                  , u = window.innerHeight - 20;
                t.hasClass(n, "cc-top") && i.clientY < 20 && (r = !0);
                t.hasClass(n, "cc-bottom") && i.clientY > u && (r = !0);
                r ? t.hasClass(n, "cc-active") || t.addClass(n, "cc-active") : t.hasClass(n, "cc-active") && t.removeClass(n, "cc-active")
            }, 200),
            this.onMouseMove = r,
            window.addEventListener("mousemove", r)))
        }
        var d = {
            enabled: !0,
            container: null,
            cookie: {
                name: "cookieconsent_status",
                path: "/",
                domain: "",
                expiryDays: 365
            },
            onPopupOpen: function() {},
            onPopupClose: function() {},
            onInitialise: function() {},
            onStatusChange: function() {},
            onRevokeChoice: function() {},
            content: {
                header: "Web sitesinde kullanılan çerezler!",
                message: "Sitemizden en iyi şekilde faydalanabilmeniz için çerezler kullanılmaktadır. Bu siteye giriş yaparak çerez kullanımını kabul etmiş sayılıyorsunuz.",
                dismiss: "Tamam",
                allow: "Çerezleri kabul et",
                deny: "Gizle",
                link: "Devamı",
                href: "http://oguzturk.net",
                close: "&#x274c;"
            },
            elements: {
                header: '<span class="cc-header">{{header}}<\/span>&nbsp;',
                message: '<span id="cookieconsent:desc" class="cc-message">{{message}}<\/span>',
                messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="çerezler hakkında" role=button tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}<\/a><\/span>',
                dismiss: '<a aria-label="çerez kabul edilmedi" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}<\/a>',
                allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}<\/a>',
                deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}<\/a>',
                link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}<\/a>',
                close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}<\/span>'
            },
            window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">{{children}}<\/div>',
            revokeBtn: '<div class="cc-revoke {{classes}}">Çerez Politikası<\/div>',
            compliance: {
                info: '<div class="cc-compliance">{{dismiss}}<\/div>',
                "opt-in": '<div class="cc-compliance cc-highlight">{{dismiss}}{{allow}}<\/div>',
                "opt-out": '<div class="cc-compliance cc-highlight">{{deny}}{{dismiss}}<\/div>'
            },
            type: "info",
            layouts: {
                basic: "{{messagelink}}{{compliance}}",
                "basic-close": "{{messagelink}}{{compliance}}{{close}}",
                "basic-header": "{{header}}{{message}}{{link}}{{compliance}}"
            },
            layout: "basic",
            position: "bottom",
            theme: "block",
            static: !1,
            palette: null,
            revokable: !1,
            animateRevokable: !0,
            showLink: !0,
            dismissOnScroll: !1,
            dismissOnTimeout: !1,
            autoOpen: !0,
            autoAttach: !0,
            whitelistPage: [],
            blacklistPage: [],
            overrideHTML: null
        };
        return r.prototype.initialise = function(n) {
            var i, r, f;
            this.options && this.destroy();
            t.deepExtend(this.options = {}, d);
            t.isPlainObject(n) && t.deepExtend(this.options, n);
            h.call(this) && (this.options.enabled = !1);
            s(this.options.blacklistPage, location.pathname) && (this.options.enabled = !1);
            s(this.options.whitelistPage, location.pathname) && (this.options.enabled = !0);
            i = this.options.window.replace("{{classes}}", c.call(this).join(" ")).replace("{{children}}", l.call(this));
            r = this.options.overrideHTML;
            ("string" == typeof r && r.length && (i = r),
            this.options.static) ? (f = u.call(this, '<div class="cc-grower">' + i + "<\/div>"),
            f.style.display = "",
            this.element = f.firstChild,
            this.element.style.display = "none",
            t.addClass(this.element, "cc-invisible")) : this.element = u.call(this, i);
            b.call(this);
            k.call(this);
            this.options.autoOpen && this.autoOpen()
        }
        ,
        r.prototype.destroy = function() {
            this.onButtonClick && this.element && (this.element.removeEventListener("click", this.onButtonClick),
            this.onButtonClick = null);
            this.dismissTimeout && (clearTimeout(this.dismissTimeout),
            this.dismissTimeout = null);
            this.onWindowScroll && (window.removeEventListener("scroll", this.onWindowScroll),
            this.onWindowScroll = null);
            this.onMouseMove && (window.removeEventListener("mousemove", this.onMouseMove),
            this.onMouseMove = null);
            this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element);
            this.element = null;
            this.revokeBtn && this.revokeBtn.parentNode && this.revokeBtn.parentNode.removeChild(this.revokeBtn);
            this.revokeBtn = null;
            w(this.options.palette);
            this.options = null
        }
        ,
        r.prototype.open = function() {
            if (this.element)
                return this.isOpen() || (n.hasTransition ? this.fadeIn() : this.element.style.display = "",
                this.options.revokable && this.toggleRevokeButton(),
                this.options.onPopupOpen.call(this)),
                this
        }
        ,
        r.prototype.close = function(t) {
            if (this.element)
                return this.isOpen() && (n.hasTransition ? this.fadeOut() : this.element.style.display = "none",
                t && this.options.revokable && this.toggleRevokeButton(!0),
                this.options.onPopupClose.call(this)),
                this
        }
        ,
        r.prototype.fadeIn = function() {
            var i = this.element, r, u;
            n.hasTransition && i && (this.afterTransition && e.call(this, i),
            t.hasClass(i, "cc-invisible")) && ((i.style.display = "",
            this.options.static) && (r = this.element.clientHeight,
            this.element.parentNode.style.maxHeight = r + "px"),
            u = 20,
            this.openingTimeout = setTimeout(f.bind(this, i), u))
        }
        ,
        r.prototype.fadeOut = function() {
            var i = this.element;
            n.hasTransition && i && (this.openingTimeout && (clearTimeout(this.openingTimeout),
            f.bind(this, i)),
            t.hasClass(i, "cc-invisible") || (this.options.static && (this.element.parentNode.style.maxHeight = ""),
            this.afterTransition = e.bind(this, i),
            i.addEventListener(n.transitionEnd, this.afterTransition),
            t.addClass(i, "cc-invisible")))
        }
        ,
        r.prototype.isOpen = function() {
            return this.element && "" == this.element.style.display && (!n.hasTransition || !t.hasClass(this.element, "cc-invisible"))
        }
        ,
        r.prototype.toggleRevokeButton = function(n) {
            this.revokeBtn && (this.revokeBtn.style.display = n ? "" : "none")
        }
        ,
        r.prototype.revokeChoice = function(n) {
            this.options.enabled = !0;
            this.clearStatus();
            this.options.onRevokeChoice.call(this);
            n || this.autoOpen()
        }
        ,
        r.prototype.hasAnswered = function() {
            return Object.keys(n.status).indexOf(this.getStatus()) >= 0
        }
        ,
        r.prototype.hasConsented = function() {
            var t = this.getStatus();
            return t == n.status.allow || t == n.status.dismiss
        }
        ,
        r.prototype.autoOpen = function() {
            !this.hasAnswered() && this.options.enabled && this.open()
        }
        ,
        r.prototype.setStatus = function(i) {
            var r = this.options.cookie
              , u = t.getCookie(r.name)
              , f = Object.keys(n.status).indexOf(u) >= 0;
            Object.keys(n.status).indexOf(i) >= 0 ? (t.setCookie(r.name, i, r.expiryDays, r.domain, r.path),
            this.options.onStatusChange.call(this, i, f)) : this.clearStatus()
        }
        ,
        r.prototype.getStatus = function() {
            return t.getCookie(this.options.cookie.name)
        }
        ,
        r.prototype.clearStatus = function() {
            var n = this.options.cookie;
            t.setCookie(n.name, "", -1, n.domain, n.path)
        }
        ,
        r
    }(),
    n.Location = function() {
        function n(n) {
            t.deepExtend(this.options = {}, f);
            t.isPlainObject(n) && t.deepExtend(this.options, n);
            this.currentServiceIndex = -1
        }
        function r(n, t, i) {
            var u, r = document.createElement("script");
            r.type = "text/" + (n.type || "javascript");
            r.src = n.src || n;
            r.async = !1;
            r.onreadystatechange = r.onload = function() {
                var n = r.readyState;
                clearTimeout(u);
                t.done || n && !/loaded|complete/.test(n) || (t.done = !0,
                t(),
                r.onreadystatechange = r.onload = null)
            }
            ;
            document.body.appendChild(r);
            u = setTimeout(function() {
                t.done = !0;
                t();
                r.onreadystatechange = r.onload = null
            }, i)
        }
        function u(n, t, i, r, u) {
            var f = new (window.XMLHttpRequest || window.ActiveXObject)("MSXML2.XMLHTTP.3.0"), e, s, o;
            if (f.open(r ? "POST" : "GET", n, 1),
            f.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
            f.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
            Array.isArray(u))
                for (e = 0,
                s = u.length; e < s; ++e)
                    o = u[e].split(":", 2),
                    f.setRequestHeader(o[0].replace(/^\s+|\s+$/g, ""), o[1].replace(/^\s+|\s+$/g, ""));
            "function" == typeof t && (f.onreadystatechange = function() {
                f.readyState > 3 && t(f)
            }
            );
            f.send(r)
        }
        function i(n) {
            return new Error("Error [" + (n.code || "UNKNOWN") + "]: " + n.error)
        }
        var f = {
            timeout: 5e3,
            services: ["freegeoip", "ipinfo", "maxmind"],
            serviceDefinitions: {
                freegeoip: function() {
                    return {
                        url: "",
                        isScript: !0,
                        callback: function(n, t) {
                            try {
                                var r = JSON.parse(t);
                                return r.error ? i(r) : {
                                    code: r.country_code
                                }
                            } catch (u) {
                                return i({
                                    error: "Invalid response (" + u + ")"
                                })
                            }
                        }
                    }
                },
                ipinfo: function() {
                    return {
                        url: "//ipinfo.io",
                        headers: ["Accept: application/json"],
                        callback: function(n, t) {
                            try {
                                var r = JSON.parse(t);
                                return r.error ? i(r) : {
                                    code: r.country
                                }
                            } catch (u) {
                                return i({
                                    error: "Invalid response (" + u + ")"
                                })
                            }
                        }
                    }
                },
                ipinfodb: function() {
                    return {
                        url: "",
                        isScript: !0,
                        callback: function(n, t) {
                            try {
                                var r = JSON.parse(t);
                                return "ERROR" == r.statusCode ? i({
                                    error: r.statusMessage
                                }) : {
                                    code: r.countryCode
                                }
                            } catch (u) {
                                return i({
                                    error: "Invalid response (" + u + ")"
                                })
                            }
                        }
                    }
                },
                maxmind: function() {
                    return {
                        url: "",
                        isScript: !0,
                        callback: function(n) {
                            return window.geoip2 ? void geoip2.country(function(t) {
                                try {
                                    n({
                                        code: t.country.iso_code
                                    })
                                } catch (r) {
                                    n(i(r))
                                }
                            }, function(t) {
                                n(i(t))
                            }) : void n(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))
                        }
                    }
                }
            }
        };
        return n.prototype.getNextService = function() {
            var n;
            do
                n = this.getServiceByIdx(++this.currentServiceIndex);
            while (this.currentServiceIndex < this.options.services.length && !n);
            return n
        }
        ,
        n.prototype.getServiceByIdx = function(n) {
            var i = this.options.services[n], r;
            return "function" == typeof i ? (r = i(),
            r.name && t.deepExtend(r, this.options.serviceDefinitions[r.name](r)),
            r) : "string" == typeof i ? this.options.serviceDefinitions[i]() : t.isPlainObject(i) ? this.options.serviceDefinitions[i.name](i) : null
        }
        ,
        n.prototype.locate = function(n, t) {
            var i = this.getNextService();
            return i ? (this.callbackComplete = n,
            this.callbackError = t,
            void this.runService(i, this.runNextServiceOnError.bind(this))) : void t(new Error("No services to run"))
        }
        ,
        n.prototype.setupUrl = function(n) {
            var t = this.getCurrentServiceOpts();
            return n.url.replace(/\{(.*?)\}/g, function(i, r) {
                if ("callback" === r) {
                    var u = "callback" + Date.now();
                    return window[u] = function(t) {
                        n.__JSONP_DATA = JSON.stringify(t)
                    }
                    ,
                    u
                }
                if (r in t.interpolateUrl)
                    return t.interpolateUrl[r]
            })
        }
        ,
        n.prototype.runService = function(n, t) {
            var i = this, f, e;
            n && n.url && n.callback && (f = n.isScript ? r : u,
            e = this.setupUrl(n),
            f(e, function(r) {
                var u = r ? r.responseText : "";
                n.__JSONP_DATA && (u = n.__JSONP_DATA,
                delete n.__JSONP_DATA);
                i.runServiceCallback.call(i, t, n, u)
            }, this.options.timeout, n.data, n.headers))
        }
        ,
        n.prototype.runServiceCallback = function(n, t, i) {
            var u = this
              , f = function(t) {
                r || u.onServiceResult.call(u, n, t)
            }
              , r = t.callback(f, i);
            r && this.onServiceResult.call(this, n, r)
        }
        ,
        n.prototype.onServiceResult = function(n, t) {
            t instanceof Error || t && t.error ? n.call(this, t, null) : n.call(this, null, t)
        }
        ,
        n.prototype.runNextServiceOnError = function(n, t) {
            if (n) {
                this.logError(n);
                var i = this.getNextService();
                i ? this.runService(i, this.runNextServiceOnError.bind(this)) : this.completeService.call(this, this.callbackError, new Error("All services failed"))
            } else
                this.completeService.call(this, this.callbackComplete, t)
        }
        ,
        n.prototype.getCurrentServiceOpts = function() {
            var n = this.options.services[this.currentServiceIndex];
            return "string" == typeof n ? {
                name: n
            } : "function" == typeof n ? n() : t.isPlainObject(n) ? n : {}
        }
        ,
        n.prototype.completeService = function(n, t) {
            this.currentServiceIndex = -1;
            n && n(t)
        }
        ,
        n.prototype.logError = function(n) {
            var t = this.currentServiceIndex
              , i = this.getServiceByIdx(t);
            console.error("The service[" + t + "] (" + i.url + ") responded with the following error", n)
        }
        ,
        n
    }(),
    n.Law = function() {
        function n() {
            this.initialise.apply(this, arguments)
        }
        var i = {
            regionalLaw: !0,
            hasLaw: ["AT", "BE", "BG", "HR", "CZ", "CY", "DK", "EE", "FI", "FR", "DE", "EL", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "SK", "SI", "ES", "SE", "GB", "UK"],
            revokable: ["HR", "CY", "DK", "EE", "FR", "DE", "LV", "LT", "NL", "PT", "ES"],
            explicitAction: ["HR", "IT", "ES"]
        };
        return n.prototype.initialise = function(n) {
            t.deepExtend(this.options = {}, i);
            t.isPlainObject(n) && t.deepExtend(this.options, n)
        }
        ,
        n.prototype.get = function(n) {
            var t = this.options;
            return {
                hasLaw: t.hasLaw.indexOf(n) >= 0,
                revokable: t.revokable.indexOf(n) >= 0,
                explicitAction: t.explicitAction.indexOf(n) >= 0
            }
        }
        ,
        n.prototype.applyLaw = function(n, t) {
            var i = this.get(t);
            return i.hasLaw || (n.enabled = !1),
            this.options.regionalLaw && (i.revokable && (n.revokable = !0),
            i.explicitAction && (n.dismissOnScroll = !1,
            n.dismissOnTimeout = !1)),
            n
        }
        ,
        n
    }(),
    n.initialise = function(t, i, r) {
        var u = new n.Law(t.law);
        i || (i = function() {}
        );
        r || (r = function() {}
        );
        n.getCountryCode(t, function(r) {
            delete t.law;
            delete t.location;
            r.code && (t = u.applyLaw(t, r.code));
            i(new n.Popup(t))
        }, function(i) {
            delete t.law;
            delete t.location;
            r(i, new n.Popup(t))
        })
    }
    ,
    n.getCountryCode = function(t, i, r) {
        if (t.law && t.law.countryCode)
            return void i({
                code: t.law.countryCode
            });
        if (t.location) {
            var u = new n.Location(t.location);
            return void u.locate(function(n) {
                i(n || {})
            }, r)
        }
        i({})
    }
    ,
    n.utils = t,
    n.hasInitialised = !0,
    window.cookieconsent = n)
}(window.cookieconsent || {});
