var R1 = Object.create, To = Object.defineProperty, C1 = Object.getOwnPropertyDescriptor, M1 = Object.getOwnPropertyNames, I1 = Object.getPrototypeOf, q1 = Object.prototype.hasOwnProperty, vn = (n, r) => () => (r || (n((r = { exports: {} }).exports, r), n = null), r.exports), An = (n, r) => {
  let o = {};
  for (var s in n)
    To(o, s, {
      get: n[s],
      enumerable: !0
    });
  return r || To(o, Symbol.toStringTag, { value: "Module" }), o;
}, H1 = (n, r, o, s) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (var i = M1(r), u = 0, d = i.length, g; u < d; u++)
      g = i[u], !q1.call(n, g) && g !== o && To(n, g, {
        get: ((j) => r[j]).bind(null, g),
        enumerable: !(s = C1(r, g)) || s.enumerable
      });
  return n;
}, Lg = (n, r, o) => (o = n != null ? R1(I1(n)) : {}, H1(r || !n || !n.__esModule ? To(o, "default", {
  value: n,
  enumerable: !0
}) : o, n)), Sa = /* @__PURE__ */ ((n) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(n, { get: (r, o) => (typeof require < "u" ? require : r)[o] }) : n)(function(n) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Calling `require` for "' + n + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), L1 = /* @__PURE__ */ vn(((n) => {
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), i = /* @__PURE__ */ Symbol.for("react.strict_mode"), u = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), j = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.memo"), $ = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), R = Symbol.iterator;
  function q(S) {
    return S === null || typeof S != "object" ? null : (S = R && S[R] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var X = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, F = Object.assign, ee = {};
  function K(S, C, L) {
    this.props = S, this.context = C, this.refs = ee, this.updater = L || X;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(S, C) {
    if (typeof S != "object" && typeof S != "function" && S != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, S, C, "setState");
  }, K.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function ce() {
  }
  ce.prototype = K.prototype;
  function ue(S, C, L) {
    this.props = S, this.context = C, this.refs = ee, this.updater = L || X;
  }
  var rt = ue.prototype = new ce();
  rt.constructor = ue, F(rt, K.prototype), rt.isPureReactComponent = !0;
  var nt = Array.isArray;
  function vt() {
  }
  var he = {
    H: null,
    A: null,
    T: null,
    S: null
  }, _t = Object.prototype.hasOwnProperty;
  function un(S, C, L) {
    var V = L.ref;
    return {
      $$typeof: r,
      type: S,
      key: C,
      ref: V !== void 0 ? V : null,
      props: L
    };
  }
  function ui(S, C) {
    return un(S.type, C, S.props);
  }
  function Ot(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }
  function cn(S) {
    var C = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + S.replace(/[=:]/g, function(L) {
      return C[L];
    });
  }
  var Ci = /\/+/g;
  function tn(S, C) {
    return typeof S == "object" && S !== null && S.key != null ? cn("" + S.key) : C.toString(36);
  }
  function G(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(vt, vt) : (S.status = "pending", S.then(function(C) {
          S.status === "pending" && (S.status = "fulfilled", S.value = C);
        }, function(C) {
          S.status === "pending" && (S.status = "rejected", S.reason = C);
        })), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function I(S, C, L, V, se) {
    var fe = typeof S;
    (fe === "undefined" || fe === "boolean") && (S = null);
    var we = !1;
    if (S === null) we = !0;
    else switch (fe) {
      case "bigint":
      case "string":
      case "number":
        we = !0;
        break;
      case "object":
        switch (S.$$typeof) {
          case r:
          case o:
            we = !0;
            break;
          case $:
            return we = S._init, I(we(S._payload), C, L, V, se);
        }
    }
    if (we) return se = se(S), we = V === "" ? "." + tn(S, 0) : V, nt(se) ? (L = "", we != null && (L = we.replace(Ci, "$&/") + "/"), I(se, C, L, "", function(Aa) {
      return Aa;
    })) : se != null && (Ot(se) && (se = ui(se, L + (se.key == null || S && S.key === se.key ? "" : ("" + se.key).replace(Ci, "$&/") + "/") + we)), C.push(se)), 1;
    we = 0;
    var ht = V === "" ? "." : V + ":";
    if (nt(S)) for (var Ye = 0; Ye < S.length; Ye++) V = S[Ye], fe = ht + tn(V, Ye), we += I(V, C, L, fe, se);
    else if (Ye = q(S), typeof Ye == "function") for (S = Ye.call(S), Ye = 0; !(V = S.next()).done; ) V = V.value, fe = ht + tn(V, Ye++), we += I(V, C, L, fe, se);
    else if (fe === "object") {
      if (typeof S.then == "function") return I(G(S), C, L, V, se);
      throw C = String(S), Error("Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead.");
    }
    return we;
  }
  function B(S, C, L) {
    if (S == null) return S;
    var V = [], se = 0;
    return I(S, V, "", "", function(fe) {
      return C.call(L, fe, se++);
    }), V;
  }
  function Se(S) {
    if (S._status === -1) {
      var C = S._result;
      C = C(), C.then(function(L) {
        (S._status === 0 || S._status === -1) && (S._status = 1, S._result = L);
      }, function(L) {
        (S._status === 0 || S._status === -1) && (S._status = 2, S._result = L);
      }), S._status === -1 && (S._status = 0, S._result = C);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var Ie = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var C = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(C)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, Nt = {
    map: B,
    forEach: function(S, C, L) {
      B(S, function() {
        C.apply(this, arguments);
      }, L);
    },
    count: function(S) {
      var C = 0;
      return B(S, function() {
        C++;
      }), C;
    },
    toArray: function(S) {
      return B(S, function(C) {
        return C;
      }) || [];
    },
    only: function(S) {
      if (!Ot(S)) throw Error("React.Children.only expected to receive a single React element child.");
      return S;
    }
  };
  n.Activity = y, n.Children = Nt, n.Component = K, n.Fragment = s, n.Profiler = u, n.PureComponent = ue, n.StrictMode = i, n.Suspense = p, n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = he, n.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return he.H.useMemoCache(S);
    }
  }, n.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, n.cacheSignal = function() {
    return null;
  }, n.cloneElement = function(S, C, L) {
    if (S == null) throw Error("The argument must be a React element, but you passed " + S + ".");
    var V = F({}, S.props), se = S.key;
    if (C != null) for (fe in C.key !== void 0 && (se = "" + C.key), C) !_t.call(C, fe) || fe === "key" || fe === "__self" || fe === "__source" || fe === "ref" && C.ref === void 0 || (V[fe] = C[fe]);
    var fe = arguments.length - 2;
    if (fe === 1) V.children = L;
    else if (1 < fe) {
      for (var we = Array(fe), ht = 0; ht < fe; ht++) we[ht] = arguments[ht + 2];
      V.children = we;
    }
    return un(S.type, se, V);
  }, n.createContext = function(S) {
    return S = {
      $$typeof: g,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: d,
      _context: S
    }, S;
  }, n.createElement = function(S, C, L) {
    var V, se = {}, fe = null;
    if (C != null) for (V in C.key !== void 0 && (fe = "" + C.key), C) _t.call(C, V) && V !== "key" && V !== "__self" && V !== "__source" && (se[V] = C[V]);
    var we = arguments.length - 2;
    if (we === 1) se.children = L;
    else if (1 < we) {
      for (var ht = Array(we), Ye = 0; Ye < we; Ye++) ht[Ye] = arguments[Ye + 2];
      se.children = ht;
    }
    if (S && S.defaultProps) for (V in we = S.defaultProps, we) se[V] === void 0 && (se[V] = we[V]);
    return un(S, fe, se);
  }, n.createRef = function() {
    return { current: null };
  }, n.forwardRef = function(S) {
    return {
      $$typeof: j,
      render: S
    };
  }, n.isValidElement = Ot, n.lazy = function(S) {
    return {
      $$typeof: $,
      _payload: {
        _status: -1,
        _result: S
      },
      _init: Se
    };
  }, n.memo = function(S, C) {
    return {
      $$typeof: _,
      type: S,
      compare: C === void 0 ? null : C
    };
  }, n.startTransition = function(S) {
    var C = he.T, L = {};
    he.T = L;
    try {
      var V = S(), se = he.S;
      se !== null && se(L, V), typeof V == "object" && V !== null && typeof V.then == "function" && V.then(vt, Ie);
    } catch (fe) {
      Ie(fe);
    } finally {
      C !== null && L.types !== null && (C.types = L.types), he.T = C;
    }
  }, n.unstable_useCacheRefresh = function() {
    return he.H.useCacheRefresh();
  }, n.use = function(S) {
    return he.H.use(S);
  }, n.useActionState = function(S, C, L) {
    return he.H.useActionState(S, C, L);
  }, n.useCallback = function(S, C) {
    return he.H.useCallback(S, C);
  }, n.useContext = function(S) {
    return he.H.useContext(S);
  }, n.useDebugValue = function() {
  }, n.useDeferredValue = function(S, C) {
    return he.H.useDeferredValue(S, C);
  }, n.useEffect = function(S, C) {
    return he.H.useEffect(S, C);
  }, n.useEffectEvent = function(S) {
    return he.H.useEffectEvent(S);
  }, n.useId = function() {
    return he.H.useId();
  }, n.useImperativeHandle = function(S, C, L) {
    return he.H.useImperativeHandle(S, C, L);
  }, n.useInsertionEffect = function(S, C) {
    return he.H.useInsertionEffect(S, C);
  }, n.useLayoutEffect = function(S, C) {
    return he.H.useLayoutEffect(S, C);
  }, n.useMemo = function(S, C) {
    return he.H.useMemo(S, C);
  }, n.useOptimistic = function(S, C) {
    return he.H.useOptimistic(S, C);
  }, n.useReducer = function(S, C, L) {
    return he.H.useReducer(S, C, L);
  }, n.useRef = function(S) {
    return he.H.useRef(S);
  }, n.useState = function(S) {
    return he.H.useState(S);
  }, n.useSyncExternalStore = function(S, C, L) {
    return he.H.useSyncExternalStore(S, C, L);
  }, n.useTransition = function() {
    return he.H.useTransition();
  }, n.version = "19.2.7";
})), of = /* @__PURE__ */ vn(((n, r) => {
  r.exports = L1();
})), B1 = /* @__PURE__ */ vn(((n) => {
  function r(G, I) {
    var B = G.length;
    G.push(I);
    e: for (; 0 < B; ) {
      var Se = B - 1 >>> 1, Ie = G[Se];
      if (0 < i(Ie, I)) G[Se] = I, G[B] = Ie, B = Se;
      else break e;
    }
  }
  function o(G) {
    return G.length === 0 ? null : G[0];
  }
  function s(G) {
    if (G.length === 0) return null;
    var I = G[0], B = G.pop();
    if (B !== I) {
      G[0] = B;
      e: for (var Se = 0, Ie = G.length, Nt = Ie >>> 1; Se < Nt; ) {
        var S = 2 * (Se + 1) - 1, C = G[S], L = S + 1, V = G[L];
        if (0 > i(C, B)) L < Ie && 0 > i(V, C) ? (G[Se] = V, G[L] = B, Se = L) : (G[Se] = C, G[S] = B, Se = S);
        else if (L < Ie && 0 > i(V, B)) G[Se] = V, G[L] = B, Se = L;
        else break e;
      }
    }
    return I;
  }
  function i(G, I) {
    var B = G.sortIndex - I.sortIndex;
    return B !== 0 ? B : G.id - I.id;
  }
  if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var u = performance;
    n.unstable_now = function() {
      return u.now();
    };
  } else {
    var d = Date, g = d.now();
    n.unstable_now = function() {
      return d.now() - g;
    };
  }
  var j = [], p = [], _ = 1, $ = null, y = 3, R = !1, q = !1, X = !1, F = !1, ee = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, ce = typeof setImmediate < "u" ? setImmediate : null;
  function ue(G) {
    for (var I = o(p); I !== null; ) {
      if (I.callback === null) s(p);
      else if (I.startTime <= G) s(p), I.sortIndex = I.expirationTime, r(j, I);
      else break;
      I = o(p);
    }
  }
  function rt(G) {
    if (X = !1, ue(G), !q) if (o(j) !== null) q = !0, nt || (nt = !0, Ot());
    else {
      var I = o(p);
      I !== null && tn(rt, I.startTime - G);
    }
  }
  var nt = !1, vt = -1, he = 5, _t = -1;
  function un() {
    return F ? !0 : !(n.unstable_now() - _t < he);
  }
  function ui() {
    if (F = !1, nt) {
      var G = n.unstable_now();
      _t = G;
      var I = !0;
      try {
        e: {
          q = !1, X && (X = !1, K(vt), vt = -1), R = !0;
          var B = y;
          try {
            t: {
              for (ue(G), $ = o(j); $ !== null && !($.expirationTime > G && un()); ) {
                var Se = $.callback;
                if (typeof Se == "function") {
                  $.callback = null, y = $.priorityLevel;
                  var Ie = Se($.expirationTime <= G);
                  if (G = n.unstable_now(), typeof Ie == "function") {
                    $.callback = Ie, ue(G), I = !0;
                    break t;
                  }
                  $ === o(j) && s(j), ue(G);
                } else s(j);
                $ = o(j);
              }
              if ($ !== null) I = !0;
              else {
                var Nt = o(p);
                Nt !== null && tn(rt, Nt.startTime - G), I = !1;
              }
            }
            break e;
          } finally {
            $ = null, y = B, R = !1;
          }
          I = void 0;
        }
      } finally {
        I ? Ot() : nt = !1;
      }
    }
  }
  var Ot;
  if (typeof ce == "function") Ot = function() {
    ce(ui);
  };
  else if (typeof MessageChannel < "u") {
    var cn = new MessageChannel(), Ci = cn.port2;
    cn.port1.onmessage = ui, Ot = function() {
      Ci.postMessage(null);
    };
  } else Ot = function() {
    ee(ui, 0);
  };
  function tn(G, I) {
    vt = ee(function() {
      G(n.unstable_now());
    }, I);
  }
  n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(G) {
    G.callback = null;
  }, n.unstable_forceFrameRate = function(G) {
    0 > G || 125 < G ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : he = 0 < G ? Math.floor(1e3 / G) : 5;
  }, n.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, n.unstable_next = function(G) {
    switch (y) {
      case 1:
      case 2:
      case 3:
        var I = 3;
        break;
      default:
        I = y;
    }
    var B = y;
    y = I;
    try {
      return G();
    } finally {
      y = B;
    }
  }, n.unstable_requestPaint = function() {
    F = !0;
  }, n.unstable_runWithPriority = function(G, I) {
    switch (G) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        G = 3;
    }
    var B = y;
    y = G;
    try {
      return I();
    } finally {
      y = B;
    }
  }, n.unstable_scheduleCallback = function(G, I, B) {
    var Se = n.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? Se + B : Se) : B = Se, G) {
      case 1:
        var Ie = -1;
        break;
      case 2:
        Ie = 250;
        break;
      case 5:
        Ie = 1073741823;
        break;
      case 4:
        Ie = 1e4;
        break;
      default:
        Ie = 5e3;
    }
    return Ie = B + Ie, G = {
      id: _++,
      callback: I,
      priorityLevel: G,
      startTime: B,
      expirationTime: Ie,
      sortIndex: -1
    }, B > Se ? (G.sortIndex = B, r(p, G), o(j) === null && G === o(p) && (X ? (K(vt), vt = -1) : X = !0, tn(rt, B - Se))) : (G.sortIndex = Ie, r(j, G), q || R || (q = !0, nt || (nt = !0, Ot()))), G;
  }, n.unstable_shouldYield = un, n.unstable_wrapCallback = function(G) {
    var I = y;
    return function() {
      var B = y;
      y = I;
      try {
        return G.apply(this, arguments);
      } finally {
        y = B;
      }
    };
  };
})), G1 = /* @__PURE__ */ vn(((n, r) => {
  r.exports = B1();
})), Y1 = /* @__PURE__ */ vn(((n) => {
  var r = of();
  function o(p) {
    var _ = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      _ += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var $ = 2; $ < arguments.length; $++) _ += "&args[]=" + encodeURIComponent(arguments[$]);
    }
    return "Minified React error #" + p + "; visit " + _ + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var i = {
    d: {
      f: s,
      r: function() {
        throw Error(o(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, u = /* @__PURE__ */ Symbol.for("react.portal");
  function d(p, _, $) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: y == null ? null : "" + y,
      children: p,
      containerInfo: _,
      implementation: $
    };
  }
  var g = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function j(p, _) {
    if (p === "font") return "";
    if (typeof _ == "string") return _ === "use-credentials" ? _ : "";
  }
  n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, n.createPortal = function(p, _) {
    var $ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_ || _.nodeType !== 1 && _.nodeType !== 9 && _.nodeType !== 11) throw Error(o(299));
    return d(p, _, null, $);
  }, n.flushSync = function(p) {
    var _ = g.T, $ = i.p;
    try {
      if (g.T = null, i.p = 2, p) return p();
    } finally {
      g.T = _, i.p = $, i.d.f();
    }
  }, n.preconnect = function(p, _) {
    typeof p == "string" && (_ ? (_ = _.crossOrigin, _ = typeof _ == "string" ? _ === "use-credentials" ? _ : "" : void 0) : _ = null, i.d.C(p, _));
  }, n.prefetchDNS = function(p) {
    typeof p == "string" && i.d.D(p);
  }, n.preinit = function(p, _) {
    if (typeof p == "string" && _ && typeof _.as == "string") {
      var $ = _.as, y = j($, _.crossOrigin), R = typeof _.integrity == "string" ? _.integrity : void 0, q = typeof _.fetchPriority == "string" ? _.fetchPriority : void 0;
      $ === "style" ? i.d.S(p, typeof _.precedence == "string" ? _.precedence : void 0, {
        crossOrigin: y,
        integrity: R,
        fetchPriority: q
      }) : $ === "script" && i.d.X(p, {
        crossOrigin: y,
        integrity: R,
        fetchPriority: q,
        nonce: typeof _.nonce == "string" ? _.nonce : void 0
      });
    }
  }, n.preinitModule = function(p, _) {
    if (typeof p == "string") if (typeof _ == "object" && _ !== null) {
      if (_.as == null || _.as === "script") {
        var $ = j(_.as, _.crossOrigin);
        i.d.M(p, {
          crossOrigin: $,
          integrity: typeof _.integrity == "string" ? _.integrity : void 0,
          nonce: typeof _.nonce == "string" ? _.nonce : void 0
        });
      }
    } else _ ?? i.d.M(p);
  }, n.preload = function(p, _) {
    if (typeof p == "string" && typeof _ == "object" && _ !== null && typeof _.as == "string") {
      var $ = _.as, y = j($, _.crossOrigin);
      i.d.L(p, $, {
        crossOrigin: y,
        integrity: typeof _.integrity == "string" ? _.integrity : void 0,
        nonce: typeof _.nonce == "string" ? _.nonce : void 0,
        type: typeof _.type == "string" ? _.type : void 0,
        fetchPriority: typeof _.fetchPriority == "string" ? _.fetchPriority : void 0,
        referrerPolicy: typeof _.referrerPolicy == "string" ? _.referrerPolicy : void 0,
        imageSrcSet: typeof _.imageSrcSet == "string" ? _.imageSrcSet : void 0,
        imageSizes: typeof _.imageSizes == "string" ? _.imageSizes : void 0,
        media: typeof _.media == "string" ? _.media : void 0
      });
    }
  }, n.preloadModule = function(p, _) {
    if (typeof p == "string") if (_) {
      var $ = j(_.as, _.crossOrigin);
      i.d.m(p, {
        as: typeof _.as == "string" && _.as !== "script" ? _.as : void 0,
        crossOrigin: $,
        integrity: typeof _.integrity == "string" ? _.integrity : void 0
      });
    } else i.d.m(p);
  }, n.requestFormReset = function(p) {
    i.d.r(p);
  }, n.unstable_batchedUpdates = function(p, _) {
    return p(_);
  }, n.useFormState = function(p, _, $) {
    return g.H.useFormState(p, _, $);
  }, n.useFormStatus = function() {
    return g.H.useHostTransitionStatus();
  }, n.version = "19.2.7";
})), Q1 = /* @__PURE__ */ vn(((n, r) => {
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (s) {
        console.error(s);
      }
  }
  o(), r.exports = Y1();
})), V1 = /* @__PURE__ */ vn(((n) => {
  var r = G1(), o = of(), s = Q1();
  function i(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function d(e) {
    var t = e, a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function g(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function j(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (d(e) !== e) throw Error(i(188));
  }
  function _(e) {
    var t = e.alternate;
    if (!t) {
      if (t = d(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var c = a.return;
      if (c === null) break;
      var f = c.alternate;
      if (f === null) {
        if (l = c.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (c.child === f.child) {
        for (f = c.child; f; ) {
          if (f === a) return p(c), e;
          if (f === l) return p(c), t;
          f = f.sibling;
        }
        throw Error(i(188));
      }
      if (a.return !== l.return) a = c, l = f;
      else {
        for (var m = !1, v = c.child; v; ) {
          if (v === a) {
            m = !0, a = c, l = f;
            break;
          }
          if (v === l) {
            m = !0, l = c, a = f;
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = f.child; v; ) {
            if (v === a) {
              m = !0, a = f, l = c;
              break;
            }
            if (v === l) {
              m = !0, l = f, a = c;
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(i(189));
        }
      }
      if (a.alternate !== l) throw Error(i(190));
    }
    if (a.tag !== 3) throw Error(i(188));
    return a.stateNode.current === a ? e : t;
  }
  function $(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = $(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign, R = /* @__PURE__ */ Symbol.for("react.element"), q = /* @__PURE__ */ Symbol.for("react.transitional.element"), X = /* @__PURE__ */ Symbol.for("react.portal"), F = /* @__PURE__ */ Symbol.for("react.fragment"), ee = /* @__PURE__ */ Symbol.for("react.strict_mode"), K = /* @__PURE__ */ Symbol.for("react.profiler"), ce = /* @__PURE__ */ Symbol.for("react.consumer"), ue = /* @__PURE__ */ Symbol.for("react.context"), rt = /* @__PURE__ */ Symbol.for("react.forward_ref"), nt = /* @__PURE__ */ Symbol.for("react.suspense"), vt = /* @__PURE__ */ Symbol.for("react.suspense_list"), he = /* @__PURE__ */ Symbol.for("react.memo"), _t = /* @__PURE__ */ Symbol.for("react.lazy"), un = /* @__PURE__ */ Symbol.for("react.activity"), ui = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ot = Symbol.iterator;
  function cn(e) {
    return e === null || typeof e != "object" ? null : (e = Ot && e[Ot] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ci = /* @__PURE__ */ Symbol.for("react.client.reference");
  function tn(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === Ci ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case F:
        return "Fragment";
      case K:
        return "Profiler";
      case ee:
        return "StrictMode";
      case nt:
        return "Suspense";
      case vt:
        return "SuspenseList";
      case un:
        return "Activity";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case X:
        return "Portal";
      case ue:
        return e.displayName || "Context";
      case ce:
        return (e._context.displayName || "Context") + ".Consumer";
      case rt:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case he:
        return t = e.displayName || null, t !== null ? t : tn(e.type) || "Memo";
      case _t:
        t = e._payload, e = e._init;
        try {
          return tn(e(t));
        } catch {
        }
    }
    return null;
  }
  var G = Array.isArray, I = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Se = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ie = [], Nt = -1;
  function S(e) {
    return { current: e };
  }
  function C(e) {
    0 > Nt || (e.current = Ie[Nt], Ie[Nt] = null, Nt--);
  }
  function L(e, t) {
    Nt++, Ie[Nt] = e.current, e.current = t;
  }
  var V = S(null), se = S(null), fe = S(null), we = S(null);
  function ht(e, t) {
    switch (L(fe, t), L(se, e), L(V, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Gh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI) t = Gh(t), e = Yh(t, e);
        else switch (e) {
          case "svg":
            e = 1;
            break;
          case "math":
            e = 2;
            break;
          default:
            e = 0;
        }
    }
    C(V), L(V, e);
  }
  function Ye() {
    C(V), C(se), C(fe);
  }
  function Aa(e) {
    e.memoizedState !== null && L(we, e);
    var t = V.current, a = Yh(t, e.type);
    t !== a && (L(se, e), L(V, a));
  }
  function nl(e) {
    se.current === e && (C(V), C(se)), we.current === e && (C(we), zr._currentValue = Se);
  }
  var Ru, Sm;
  function ci(e) {
    if (Ru === void 0) try {
      throw Error();
    } catch (a) {
      var t = a.stack.trim().match(/\n( *(at )?)/);
      Ru = t && t[1] || "", Sm = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Ru + e + Sm;
  }
  var Cu = !1;
  function Mu(e, t) {
    if (!e || Cu) return "";
    Cu = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var Z = function() {
              throw Error();
            };
            if (Object.defineProperty(Z.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Z, []);
              } catch (x) {
                var N = x;
              }
              Reflect.construct(e, [], Z);
            } else {
              try {
                Z.call();
              } catch (x) {
                N = x;
              }
              e.call(Z.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (x) {
              N = x;
            }
            (Z = e()) && typeof Z.catch == "function" && Z.catch(function() {
            });
          }
        } catch (x) {
          if (x && N && typeof x.stack == "string") return [x.stack, N.stack];
        }
        return [null, null];
      } };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
      c && c.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var f = l.DetermineComponentFrameRoot(), m = f[0], v = f[1];
      if (m && v) {
        var h = m.split(`
`), O = v.split(`
`);
        for (c = l = 0; l < h.length && !h[l].includes("DetermineComponentFrameRoot"); ) l++;
        for (; c < O.length && !O[c].includes("DetermineComponentFrameRoot"); ) c++;
        if (l === h.length || c === O.length) for (l = h.length - 1, c = O.length - 1; 1 <= l && 0 <= c && h[l] !== O[c]; ) c--;
        for (; 1 <= l && 0 <= c; l--, c--) if (h[l] !== O[c]) {
          if (l !== 1 || c !== 1) do
            if (l--, c--, 0 > c || h[l] !== O[c]) {
              var D = `
` + h[l].replace(" at new ", " at ");
              return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), D;
            }
          while (1 <= l && 0 <= c);
          break;
        }
      }
    } finally {
      Cu = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? ci(a) : "";
  }
  function b0(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ci(e.type);
      case 16:
        return ci("Lazy");
      case 13:
        return e.child !== t && t !== null ? ci("Suspense Fallback") : ci("Suspense");
      case 19:
        return ci("SuspenseList");
      case 0:
      case 15:
        return Mu(e.type, !1);
      case 11:
        return Mu(e.type.render, !1);
      case 1:
        return Mu(e.type, !0);
      case 31:
        return ci("Activity");
      default:
        return "";
    }
  }
  function $m(e) {
    try {
      var t = "", a = null;
      do
        t += b0(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Iu = Object.prototype.hasOwnProperty, qu = r.unstable_scheduleCallback, Hu = r.unstable_cancelCallback, S0 = r.unstable_shouldYield, $0 = r.unstable_requestPaint, Ut = r.unstable_now, z0 = r.unstable_getCurrentPriorityLevel, zm = r.unstable_ImmediatePriority, Tm = r.unstable_UserBlockingPriority, il = r.unstable_NormalPriority, T0 = r.unstable_LowPriority, wm = r.unstable_IdlePriority, w0 = r.log, E0 = r.unstable_setDisableYieldValue, Za = null, xt = null;
  function Zn(e) {
    if (typeof w0 == "function" && E0(e), xt && typeof xt.setStrictMode == "function") try {
      xt.setStrictMode(Za, e);
    } catch {
    }
  }
  var jt = Math.clz32 ? Math.clz32 : N0, k0 = Math.log, O0 = Math.LN2;
  function N0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (k0(e) / O0 | 0) | 0;
  }
  var al = 256, rl = 262144, ll = 4194304;
  function si(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ol(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var c = 0, f = e.suspendedLanes, m = e.pingedLanes;
    e = e.warmLanes;
    var v = l & 134217727;
    return v !== 0 ? (l = v & ~f, l !== 0 ? c = si(l) : (m &= v, m !== 0 ? c = si(m) : a || (a = v & ~e, a !== 0 && (c = si(a))))) : (v = l & ~f, v !== 0 ? c = si(v) : m !== 0 ? c = si(m) : a || (a = l & ~e, a !== 0 && (c = si(a)))), c === 0 ? 0 : t !== 0 && t !== c && (t & f) === 0 && (f = c & -c, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : c;
  }
  function Ra(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function U0(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Em() {
    var e = ll;
    return ll <<= 1, (ll & 62914560) === 0 && (ll = 4194304), e;
  }
  function Lu(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function ul(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function x0(e, t, a, l, c, f) {
    var m = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var v = e.entanglements, h = e.expirationTimes, O = e.hiddenUpdates;
    for (a = m & ~a; 0 < a; ) {
      var D = 31 - jt(a), Z = 1 << D;
      v[D] = 0, h[D] = -1;
      var N = O[D];
      if (N !== null) for (O[D] = null, D = 0; D < N.length; D++) {
        var x = N[D];
        x !== null && (x.lane &= -536870913);
      }
      a &= ~Z;
    }
    l !== 0 && km(e, l, 0), f !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(m & ~t));
  }
  function km(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - jt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 261930;
  }
  function Om(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var l = 31 - jt(a), c = 1 << l;
      c & t | e[l] & t && (e[l] |= t), a &= ~c;
    }
  }
  function Nm(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Um(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Um(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Bu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function xm() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : dg(e.type));
  }
  function jm(e, t) {
    var a = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = a;
    }
  }
  var Rn = Math.random().toString(36).slice(2), lt = "__reactFiber$" + Rn, bt = "__reactProps$" + Rn, Ca = "__reactContainer$" + Rn, Gu = "__reactEvents$" + Rn, j0 = "__reactListeners$" + Rn, D0 = "__reactHandles$" + Rn, Dm = "__reactResources$" + Rn, Ma = "__reactMarker$" + Rn;
  function Yu(e) {
    delete e[lt], delete e[bt], delete e[Gu], delete e[j0], delete e[D0];
  }
  function Mi(e) {
    var t = e[lt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Ca] || a[lt]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null) for (e = Fh(e); e !== null; ) {
          if (a = e[lt]) return a;
          e = Fh(e);
        }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Ii(e) {
    if (e = e[lt] || e[Ca]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Ia(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function qi(e) {
    var t = e[Dm];
    return t || (t = e[Dm] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), t;
  }
  function it(e) {
    e[Ma] = !0;
  }
  var Am = /* @__PURE__ */ new Set(), Zm = {};
  function fi(e, t) {
    Hi(e, t), Hi(e + "Capture", t);
  }
  function Hi(e, t) {
    for (Zm[e] = t, e = 0; e < t.length; e++) Am.add(t[e]);
  }
  var A0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Rm = {}, Cm = {};
  function Z0(e) {
    return Iu.call(Cm, e) ? !0 : Iu.call(Rm, e) ? !1 : A0.test(e) ? Cm[e] = !0 : (Rm[e] = !0, !1);
  }
  function cl(e, t, a) {
    if (Z0(t)) if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
          e.removeAttribute(t);
          return;
        case "boolean":
          var l = t.toLowerCase().slice(0, 5);
          if (l !== "data-" && l !== "aria-") {
            e.removeAttribute(t);
            return;
          }
      }
      e.setAttribute(t, "" + a);
    }
  }
  function sl(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function pn(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + l);
    }
  }
  function qt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Mm(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function R0(e, t, a) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, f = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(m) {
          a = "" + m, f.call(this, m);
        }
      }), Object.defineProperty(e, t, { enumerable: l.enumerable }), {
        getValue: function() {
          return a;
        },
        setValue: function(m) {
          a = "" + m;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Qu(e) {
    if (!e._valueTracker) {
      var t = Mm(e) ? "checked" : "value";
      e._valueTracker = R0(e, t, "" + e[t]);
    }
  }
  function Im(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), l = "";
    return e && (l = Mm(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (t.setValue(e), !0) : !1;
  }
  function fl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var C0 = /[\n"\\]/g;
  function Ht(e) {
    return e.replace(C0, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Vu(e, t, a, l, c, f, m, v) {
    e.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"), t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + qt(t)) : e.value !== "" + qt(t) && (e.value = "" + qt(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"), t != null ? Ju(e, m, qt(t)) : a != null ? Ju(e, m, qt(a)) : l != null && e.removeAttribute("value"), c == null && f != null && (e.defaultChecked = !!f), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.name = "" + qt(v) : e.removeAttribute("name");
  }
  function qm(e, t, a, l, c, f, m, v) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || a != null) {
      if (!(f !== "submit" && f !== "reset" || t != null)) {
        Qu(e);
        return;
      }
      a = a != null ? "" + qt(a) : "", t = t != null ? "" + qt(t) : a, v || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? c, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = v ? e.checked : !!l, e.defaultChecked = !!l, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m), Qu(e);
  }
  function Ju(e, t, a) {
    t === "number" && fl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Li(e, t, a, l) {
    if (e = e.options, t) {
      t = {};
      for (var c = 0; c < a.length; c++) t["$" + a[c]] = !0;
      for (a = 0; a < e.length; a++) c = t.hasOwnProperty("$" + e[a].value), e[a].selected !== c && (e[a].selected = c), c && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + qt(a), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === a) {
          e[c].selected = !0, l && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Hm(e, t, a) {
    if (t != null && (t = "" + qt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + qt(a) : "";
  }
  function Lm(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(i(92));
        if (G(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        a = l;
      }
      a ??= "", t = a;
    }
    a = qt(t), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l), Qu(e);
  }
  function Bi(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var M0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Bm(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, a) : typeof a != "number" || a === 0 || M0.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Gm(e, t, a) {
    if (t != null && typeof t != "object") throw Error(i(62));
    if (e = e.style, a != null) {
      for (var l in a) !a.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var c in t) l = t[c], t.hasOwnProperty(c) && a[c] !== l && Bm(e, c, l);
    } else for (var f in t) t.hasOwnProperty(f) && Bm(e, f, t[f]);
  }
  function Xu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var I0 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), q0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function dl(e) {
    return q0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function hn() {
  }
  var Ku = null;
  function Pu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Gi = null, Yi = null;
  function Ym(e) {
    var t = Ii(e);
    if (t && (e = t.stateNode)) {
      var a = e[bt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Vu(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll('input[name="' + Ht("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var c = l[bt] || null;
                if (!c) throw Error(i(90));
                Vu(l, c.value, c.defaultValue, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name);
              }
            }
            for (t = 0; t < a.length; t++) l = a[t], l.form === e.form && Im(l);
          }
          break e;
        case "textarea":
          Hm(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Li(e, !!a.multiple, t, !1);
      }
    }
  }
  var Fu = !1;
  function Qm(e, t, a) {
    if (Fu) return e(t, a);
    Fu = !0;
    try {
      return e(t);
    } finally {
      if (Fu = !1, (Gi !== null || Yi !== null) && (Wl(), Gi && (t = Gi, e = Yi, Yi = Gi = null, Ym(t), e)))
        for (t = 0; t < e.length; t++) Ym(e[t]);
    }
  }
  function qa(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[bt] || null;
    if (l === null) return null;
    a = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(i(231, t, typeof a));
    return a;
  }
  var gn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wu = !1;
  if (gn) try {
    var Ha = {};
    Object.defineProperty(Ha, "passive", { get: function() {
      Wu = !0;
    } }), window.addEventListener("test", Ha, Ha), window.removeEventListener("test", Ha, Ha);
  } catch {
    Wu = !1;
  }
  var Cn = null, ec = null, ml = null;
  function Vm() {
    if (ml) return ml;
    var e, t = ec, a = t.length, l, c = "value" in Cn ? Cn.value : Cn.textContent, f = c.length;
    for (e = 0; e < a && t[e] === c[e]; e++) ;
    var m = a - e;
    for (l = 1; l <= m && t[a - l] === c[f - l]; l++) ;
    return ml = c.slice(e, 1 < l ? 1 - l : void 0);
  }
  function vl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function pl() {
    return !0;
  }
  function Jm() {
    return !1;
  }
  function St(e) {
    function t(a, l, c, f, m) {
      this._reactName = a, this._targetInst = c, this.type = l, this.nativeEvent = f, this.target = m, this.currentTarget = null;
      for (var v in e) e.hasOwnProperty(v) && (a = e[v], this[v] = a ? a(f) : f[v]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? pl : Jm, this.isPropagationStopped = Jm, this;
    }
    return y(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = pl);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = pl);
      },
      persist: function() {
      },
      isPersistent: pl
    }), t;
  }
  var di = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, hl = St(di), La = y({}, di, {
    view: 0,
    detail: 0
  }), H0 = St(La), tc, nc, Ba, gl = y({}, La, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ac,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ba && (Ba && e.type === "mousemove" ? (tc = e.screenX - Ba.screenX, nc = e.screenY - Ba.screenY) : nc = tc = 0, Ba = e), tc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : nc;
    }
  }), Xm = St(gl), L0 = St(y({}, gl, { dataTransfer: 0 })), ic = St(y({}, La, { relatedTarget: 0 })), B0 = St(y({}, di, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), G0 = St(y({}, di, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } })), Km = St(y({}, di, { data: 0 })), Y0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Q0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, V0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function J0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = V0[e]) ? !!t[e] : !1;
  }
  function ac() {
    return J0;
  }
  var X0 = St(y({}, La, {
    key: function(e) {
      if (e.key) {
        var t = Y0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = vl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Q0[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ac,
    charCode: function(e) {
      return e.type === "keypress" ? vl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? vl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  })), Pm = St(y({}, gl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  })), K0 = St(y({}, La, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ac
  })), P0 = St(y({}, di, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), F0 = St(y({}, gl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  })), W0 = St(y({}, di, {
    newState: 0,
    oldState: 0
  })), e$ = [
    9,
    13,
    27,
    32
  ], rc = gn && "CompositionEvent" in window, Ga = null;
  gn && "documentMode" in document && (Ga = document.documentMode);
  var t$ = gn && "TextEvent" in window && !Ga, Fm = gn && (!rc || Ga && 8 < Ga && 11 >= Ga), Wm = " ", ev = !1;
  function tv(e, t) {
    switch (e) {
      case "keyup":
        return e$.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function nv(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Qi = !1;
  function n$(e, t) {
    switch (e) {
      case "compositionend":
        return nv(t);
      case "keypress":
        return t.which !== 32 ? null : (ev = !0, Wm);
      case "textInput":
        return e = t.data, e === Wm && ev ? null : e;
      default:
        return null;
    }
  }
  function i$(e, t) {
    if (Qi) return e === "compositionend" || !rc && tv(e, t) ? (e = Vm(), ml = ec = Cn = null, Qi = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Fm && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var a$ = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function iv(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!a$[e.type] : t === "textarea";
  }
  function av(e, t, a, l) {
    Gi ? Yi ? Yi.push(l) : Yi = [l] : Gi = l, t = lo(t, "onChange"), 0 < t.length && (a = new hl("onChange", "change", null, a, l), e.push({
      event: a,
      listeners: t
    }));
  }
  var Ya = null, Qa = null;
  function r$(e) {
    Ch(e, 0);
  }
  function yl(e) {
    if (Im(Ia(e))) return e;
  }
  function rv(e, t) {
    if (e === "change") return t;
  }
  var lv = !1;
  if (gn) {
    var lc;
    if (gn) {
      var oc = "oninput" in document;
      if (!oc) {
        var ov = document.createElement("div");
        ov.setAttribute("oninput", "return;"), oc = typeof ov.oninput == "function";
      }
      lc = oc;
    } else lc = !1;
    lv = lc && (!document.documentMode || 9 < document.documentMode);
  }
  function uv() {
    Ya && (Ya.detachEvent("onpropertychange", cv), Qa = Ya = null);
  }
  function cv(e) {
    if (e.propertyName === "value" && yl(Qa)) {
      var t = [];
      av(t, Qa, e, Pu(e)), Qm(r$, t);
    }
  }
  function l$(e, t, a) {
    e === "focusin" ? (uv(), Ya = t, Qa = a, Ya.attachEvent("onpropertychange", cv)) : e === "focusout" && uv();
  }
  function o$(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return yl(Qa);
  }
  function u$(e, t) {
    if (e === "click") return yl(t);
  }
  function c$(e, t) {
    if (e === "input" || e === "change") return yl(t);
  }
  function s$(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Dt = typeof Object.is == "function" ? Object.is : s$;
  function Va(e, t) {
    if (Dt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var a = Object.keys(e), l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var c = a[l];
      if (!Iu.call(t, c) || !Dt(e[c], t[c])) return !1;
    }
    return !0;
  }
  function sv(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function fv(e, t) {
    var a = sv(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = e + a.textContent.length, e <= t && l >= t) return {
          node: a,
          offset: t - e
        };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = sv(a);
    }
  }
  function dv(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? dv(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function mv(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = fl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = fl(e.document);
    }
    return t;
  }
  function uc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var f$ = gn && "documentMode" in document && 11 >= document.documentMode, Vi = null, cc = null, Ja = null, sc = !1;
  function vv(e, t, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    sc || Vi == null || Vi !== fl(l) || (l = Vi, "selectionStart" in l && uc(l) ? l = {
      start: l.selectionStart,
      end: l.selectionEnd
    } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Ja && Va(Ja, l) || (Ja = l, l = lo(cc, "onSelect"), 0 < l.length && (t = new hl("onSelect", "select", null, t, a), e.push({
      event: t,
      listeners: l
    }), t.target = Vi)));
  }
  function mi(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Ji = {
    animationend: mi("Animation", "AnimationEnd"),
    animationiteration: mi("Animation", "AnimationIteration"),
    animationstart: mi("Animation", "AnimationStart"),
    transitionrun: mi("Transition", "TransitionRun"),
    transitionstart: mi("Transition", "TransitionStart"),
    transitioncancel: mi("Transition", "TransitionCancel"),
    transitionend: mi("Transition", "TransitionEnd")
  }, fc = {}, pv = {};
  gn && (pv = document.createElement("div").style, "AnimationEvent" in window || (delete Ji.animationend.animation, delete Ji.animationiteration.animation, delete Ji.animationstart.animation), "TransitionEvent" in window || delete Ji.transitionend.transition);
  function vi(e) {
    if (fc[e]) return fc[e];
    if (!Ji[e]) return e;
    var t = Ji[e], a;
    for (a in t) if (t.hasOwnProperty(a) && a in pv) return fc[e] = t[a];
    return e;
  }
  var hv = vi("animationend"), gv = vi("animationiteration"), yv = vi("animationstart"), d$ = vi("transitionrun"), m$ = vi("transitionstart"), v$ = vi("transitioncancel"), _v = vi("transitionend"), bv = /* @__PURE__ */ new Map(), dc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  dc.push("scrollEnd");
  function nn(e, t) {
    bv.set(e, t), fi(t, [e]);
  }
  var _l = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Lt = [], Xi = 0, mc = 0;
  function bl() {
    for (var e = Xi, t = mc = Xi = 0; t < e; ) {
      var a = Lt[t];
      Lt[t++] = null;
      var l = Lt[t];
      Lt[t++] = null;
      var c = Lt[t];
      Lt[t++] = null;
      var f = Lt[t];
      if (Lt[t++] = null, l !== null && c !== null) {
        var m = l.pending;
        m === null ? c.next = c : (c.next = m.next, m.next = c), l.pending = c;
      }
      f !== 0 && Sv(a, c, f);
    }
  }
  function Sl(e, t, a, l) {
    Lt[Xi++] = e, Lt[Xi++] = t, Lt[Xi++] = a, Lt[Xi++] = l, mc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function vc(e, t, a, l) {
    return Sl(e, t, a, l), $l(e);
  }
  function pi(e, t) {
    return Sl(e, null, null, t), $l(e);
  }
  function Sv(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var c = !1, f = e.return; f !== null; ) f.childLanes |= a, l = f.alternate, l !== null && (l.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (c = !0)), e = f, f = f.return;
    return e.tag === 3 ? (f = e.stateNode, c && t !== null && (c = 31 - jt(a), e = f.hiddenUpdates, l = e[c], l === null ? e[c] = [t] : l.push(t), t.lane = a | 536870912), f) : null;
  }
  function $l(e) {
    if (50 < hr) throw hr = 0, zs = null, Error(i(185));
    for (var t = e.return; t !== null; ) e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ki = {};
  function p$(e, t, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function At(e, t, a, l) {
    return new p$(e, t, a, l);
  }
  function pc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function yn(e, t) {
    var a = e.alternate;
    return a === null ? (a = At(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function $v(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function zl(e, t, a, l, c, f) {
    var m = 0;
    if (l = e, typeof e == "function") pc(e) && (m = 1);
    else if (typeof e == "string") m = S1(e, a, V.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (e) {
      case un:
        return e = At(31, a, t, c), e.elementType = un, e.lanes = f, e;
      case F:
        return hi(a.children, c, f, t);
      case ee:
        m = 8, c |= 24;
        break;
      case K:
        return e = At(12, a, t, c | 2), e.elementType = K, e.lanes = f, e;
      case nt:
        return e = At(13, a, t, c), e.elementType = nt, e.lanes = f, e;
      case vt:
        return e = At(19, a, t, c), e.elementType = vt, e.lanes = f, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ue:
            m = 10;
            break e;
          case ce:
            m = 9;
            break e;
          case rt:
            m = 11;
            break e;
          case he:
            m = 14;
            break e;
          case _t:
            m = 16, l = null;
            break e;
        }
        m = 29, a = Error(i(130, e === null ? "null" : typeof e, "")), l = null;
    }
    return t = At(m, a, t, c), t.elementType = e, t.type = l, t.lanes = f, t;
  }
  function hi(e, t, a, l) {
    return e = At(7, e, l, t), e.lanes = a, e;
  }
  function hc(e, t, a) {
    return e = At(6, e, null, t), e.lanes = a, e;
  }
  function zv(e) {
    var t = At(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function gc(e, t, a) {
    return t = At(4, e.children !== null ? e.children : [], e.key, t), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Tv = /* @__PURE__ */ new WeakMap();
  function Bt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Tv.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: $m(t)
      }, Tv.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: $m(t)
    };
  }
  var Pi = [], Fi = 0, Tl = null, Xa = 0, Gt = [], Yt = 0, Mn = null, sn = 1, fn = "";
  function _n(e, t) {
    Pi[Fi++] = Xa, Pi[Fi++] = Tl, Tl = e, Xa = t;
  }
  function wv(e, t, a) {
    Gt[Yt++] = sn, Gt[Yt++] = fn, Gt[Yt++] = Mn, Mn = e;
    var l = sn;
    e = fn;
    var c = 32 - jt(l) - 1;
    l &= ~(1 << c), a += 1;
    var f = 32 - jt(t) + c;
    if (30 < f) {
      var m = c - c % 5;
      f = (l & (1 << m) - 1).toString(32), l >>= m, c -= m, sn = 1 << 32 - jt(t) + c | a << c | l, fn = f + e;
    } else sn = 1 << f | a << c | l, fn = e;
  }
  function yc(e) {
    e.return !== null && (_n(e, 1), wv(e, 1, 0));
  }
  function _c(e) {
    for (; e === Tl; ) Tl = Pi[--Fi], Pi[Fi] = null, Xa = Pi[--Fi], Pi[Fi] = null;
    for (; e === Mn; ) Mn = Gt[--Yt], Gt[Yt] = null, fn = Gt[--Yt], Gt[Yt] = null, sn = Gt[--Yt], Gt[Yt] = null;
  }
  function Ev(e, t) {
    Gt[Yt++] = sn, Gt[Yt++] = fn, Gt[Yt++] = Mn, sn = t.id, fn = t.overflow, Mn = e;
  }
  var ot = null, qe = null, ge = !1, In = null, Qt = !1, bc = Error(i(519));
  function qn(e) {
    throw Ka(Bt(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), bc;
  }
  function kv(e) {
    var t = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (t[lt] = e, t[bt] = l, a) {
      case "dialog":
        me("cancel", t), me("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        me("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < yr.length; a++) me(yr[a], t);
        break;
      case "source":
        me("error", t);
        break;
      case "img":
      case "image":
      case "link":
        me("error", t), me("load", t);
        break;
      case "details":
        me("toggle", t);
        break;
      case "input":
        me("invalid", t), qm(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
        break;
      case "select":
        me("invalid", t);
        break;
      case "textarea":
        me("invalid", t), Lm(t, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || l.suppressHydrationWarning === !0 || Lh(t.textContent, a) ? (l.popover != null && (me("beforetoggle", t), me("toggle", t)), l.onScroll != null && me("scroll", t), l.onScrollEnd != null && me("scrollend", t), l.onClick != null && (t.onclick = hn), t = !0) : t = !1, t || qn(e, !0);
  }
  function Ov(e) {
    for (ot = e.return; ot; ) switch (ot.tag) {
      case 5:
      case 31:
      case 13:
        Qt = !1;
        return;
      case 27:
      case 3:
        Qt = !0;
        return;
      default:
        ot = ot.return;
    }
  }
  function Wi(e) {
    if (e !== ot) return !1;
    if (!ge) return Ov(e), ge = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Cs(e.type, e.memoizedProps)), a = !a), a && qe && qn(e), Ov(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      qe = Ph(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      qe = Ph(e);
    } else t === 27 ? (t = qe, Fn(e.type) ? (e = Ls, Ls = null, qe = e) : qe = t) : qe = ot ? Xt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function gi() {
    qe = ot = null, ge = !1;
  }
  function Sc() {
    var e = In;
    return e !== null && (wt === null ? wt = e : wt.push.apply(wt, e), In = null), e;
  }
  function Ka(e) {
    In === null ? In = [e] : In.push(e);
  }
  var $c = S(null), yi = null, bn = null;
  function Hn(e, t, a) {
    L($c, t._currentValue), t._currentValue = a;
  }
  function Sn(e) {
    e._currentValue = $c.current, C($c);
  }
  function zc(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function Tc(e, t, a, l) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var f = c.dependencies;
      if (f !== null) {
        var m = c.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var v = f;
          f = c;
          for (var h = 0; h < t.length; h++) if (v.context === t[h]) {
            f.lanes |= a, v = f.alternate, v !== null && (v.lanes |= a), zc(f.return, a, e), l || (m = null);
            break e;
          }
          f = v.next;
        }
      } else if (c.tag === 18) {
        if (m = c.return, m === null) throw Error(i(341));
        m.lanes |= a, f = m.alternate, f !== null && (f.lanes |= a), zc(m, a, e), m = null;
      } else m = c.child;
      if (m !== null) m.return = c;
      else for (m = c; m !== null; ) {
        if (m === e) {
          m = null;
          break;
        }
        if (c = m.sibling, c !== null) {
          c.return = m.return, m = c;
          break;
        }
        m = m.return;
      }
      c = m;
    }
  }
  function ea(e, t, a, l) {
    e = null;
    for (var c = t, f = !1; c !== null; ) {
      if (!f) {
        if ((c.flags & 524288) !== 0) f = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var m = c.alternate;
        if (m === null) throw Error(i(387));
        if (m = m.memoizedProps, m !== null) {
          var v = c.type;
          Dt(c.pendingProps.value, m.value) || (e !== null ? e.push(v) : e = [v]);
        }
      } else if (c === we.current) {
        if (m = c.alternate, m === null) throw Error(i(387));
        m.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(zr) : e = [zr]);
      }
      c = c.return;
    }
    e !== null && Tc(t, e, a, l), t.flags |= 262144;
  }
  function wl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Dt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function _i(e) {
    yi = e, bn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ut(e) {
    return Nv(yi, e);
  }
  function El(e, t) {
    return yi === null && _i(e), Nv(e, t);
  }
  function Nv(e, t) {
    var a = t._currentValue;
    if (t = {
      context: t,
      memoizedValue: a,
      next: null
    }, bn === null) {
      if (e === null) throw Error(i(308));
      bn = t, e.dependencies = {
        lanes: 0,
        firstContext: t
      }, e.flags |= 524288;
    } else bn = bn.next = t;
    return a;
  }
  var h$ = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, g$ = r.unstable_scheduleCallback, y$ = r.unstable_NormalPriority, Xe = {
    $$typeof: ue,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function wc() {
    return {
      controller: new h$(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Pa(e) {
    e.refCount--, e.refCount === 0 && g$(y$, function() {
      e.controller.abort();
    });
  }
  var Fa = null, Ec = 0, ta = 0, na = null;
  function _$(e, t) {
    if (Fa === null) {
      var a = Fa = [];
      Ec = 0, ta = Ns(), na = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return Ec++, t.then(Uv, Uv), t;
  }
  function Uv() {
    if (--Ec === 0 && Fa !== null) {
      na !== null && (na.status = "fulfilled");
      var e = Fa;
      Fa = null, ta = 0, na = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function b$(e, t) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(c) {
        a.push(c);
      }
    };
    return e.then(function() {
      l.status = "fulfilled", l.value = t;
      for (var c = 0; c < a.length; c++) (0, a[c])(t);
    }, function(c) {
      for (l.status = "rejected", l.reason = c, c = 0; c < a.length; c++) (0, a[c])(void 0);
    }), l;
  }
  var xv = I.S;
  I.S = function(e, t) {
    fh = Ut(), typeof t == "object" && t !== null && typeof t.then == "function" && _$(e, t), xv !== null && xv(e, t);
  };
  var bi = S(null);
  function kc() {
    var e = bi.current;
    return e !== null ? e : Ae.pooledCache;
  }
  function kl(e, t) {
    t === null ? L(bi, bi.current) : L(bi, t.pool);
  }
  function jv() {
    var e = kc();
    return e === null ? null : {
      parent: Xe._currentValue,
      pool: e
    };
  }
  var ia = Error(i(460)), Oc = Error(i(474)), Ol = Error(i(542)), Nl = { then: function() {
  } };
  function Dv(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Av(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(hn, hn), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Rv(e), e;
      default:
        if (typeof t.status == "string") t.then(hn, hn);
        else {
          if (e = Ae, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
          e = t, e.status = "pending", e.then(function(l) {
            if (t.status === "pending") {
              var c = t;
              c.status = "fulfilled", c.value = l;
            }
          }, function(l) {
            if (t.status === "pending") {
              var c = t;
              c.status = "rejected", c.reason = l;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Rv(e), e;
        }
        throw $i = t, ia;
    }
  }
  function Si(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? ($i = a, ia) : a;
    }
  }
  var $i = null;
  function Zv() {
    if ($i === null) throw Error(i(459));
    var e = $i;
    return $i = null, e;
  }
  function Rv(e) {
    if (e === ia || e === Ol) throw Error(i(483));
  }
  var aa = null, Wa = 0;
  function Ul(e) {
    var t = Wa;
    return Wa += 1, aa === null && (aa = []), Av(aa, e, t);
  }
  function er(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function xl(e, t) {
    throw t.$$typeof === R ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
  }
  function Cv(e) {
    function t(z, b) {
      if (e) {
        var k = z.deletions;
        k === null ? (z.deletions = [b], z.flags |= 16) : k.push(b);
      }
    }
    function a(z, b) {
      if (!e) return null;
      for (; b !== null; ) t(z, b), b = b.sibling;
      return null;
    }
    function l(z) {
      for (var b = /* @__PURE__ */ new Map(); z !== null; ) z.key !== null ? b.set(z.key, z) : b.set(z.index, z), z = z.sibling;
      return b;
    }
    function c(z, b) {
      return z = yn(z, b), z.index = 0, z.sibling = null, z;
    }
    function f(z, b, k) {
      return z.index = k, e ? (k = z.alternate, k !== null ? (k = k.index, k < b ? (z.flags |= 67108866, b) : k) : (z.flags |= 67108866, b)) : (z.flags |= 1048576, b);
    }
    function m(z) {
      return e && z.alternate === null && (z.flags |= 67108866), z;
    }
    function v(z, b, k, A) {
      return b === null || b.tag !== 6 ? (b = hc(k, z.mode, A), b.return = z, b) : (b = c(b, k), b.return = z, b);
    }
    function h(z, b, k, A) {
      var J = k.type;
      return J === F ? D(z, b, k.props.children, A, k.key) : b !== null && (b.elementType === J || typeof J == "object" && J !== null && J.$$typeof === _t && Si(J) === b.type) ? (b = c(b, k.props), er(b, k), b.return = z, b) : (b = zl(k.type, k.key, k.props, null, z.mode, A), er(b, k), b.return = z, b);
    }
    function O(z, b, k, A) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== k.containerInfo || b.stateNode.implementation !== k.implementation ? (b = gc(k, z.mode, A), b.return = z, b) : (b = c(b, k.children || []), b.return = z, b);
    }
    function D(z, b, k, A, J) {
      return b === null || b.tag !== 7 ? (b = hi(k, z.mode, A, J), b.return = z, b) : (b = c(b, k), b.return = z, b);
    }
    function Z(z, b, k) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint") return b = hc("" + b, z.mode, k), b.return = z, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case q:
            return k = zl(b.type, b.key, b.props, null, z.mode, k), er(k, b), k.return = z, k;
          case X:
            return b = gc(b, z.mode, k), b.return = z, b;
          case _t:
            return b = Si(b), Z(z, b, k);
        }
        if (G(b) || cn(b)) return b = hi(b, z.mode, k, null), b.return = z, b;
        if (typeof b.then == "function") return Z(z, Ul(b), k);
        if (b.$$typeof === ue) return Z(z, El(z, b), k);
        xl(z, b);
      }
      return null;
    }
    function N(z, b, k, A) {
      var J = b !== null ? b.key : null;
      if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint") return J !== null ? null : v(z, b, "" + k, A);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case q:
            return k.key === J ? h(z, b, k, A) : null;
          case X:
            return k.key === J ? O(z, b, k, A) : null;
          case _t:
            return k = Si(k), N(z, b, k, A);
        }
        if (G(k) || cn(k)) return J !== null ? null : D(z, b, k, A, null);
        if (typeof k.then == "function") return N(z, b, Ul(k), A);
        if (k.$$typeof === ue) return N(z, b, El(z, k), A);
        xl(z, k);
      }
      return null;
    }
    function x(z, b, k, A, J) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint") return z = z.get(k) || null, v(b, z, "" + A, J);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case q:
            return z = z.get(A.key === null ? k : A.key) || null, h(b, z, A, J);
          case X:
            return z = z.get(A.key === null ? k : A.key) || null, O(b, z, A, J);
          case _t:
            return A = Si(A), x(z, b, k, A, J);
        }
        if (G(A) || cn(A)) return z = z.get(k) || null, D(b, z, A, J, null);
        if (typeof A.then == "function") return x(z, b, k, Ul(A), J);
        if (A.$$typeof === ue) return x(z, b, k, El(b, A), J);
        xl(b, A);
      }
      return null;
    }
    function Y(z, b, k, A) {
      for (var J = null, _e = null, Q = b, ae = b = 0, pe = null; Q !== null && ae < k.length; ae++) {
        Q.index > ae ? (pe = Q, Q = null) : pe = Q.sibling;
        var be = N(z, Q, k[ae], A);
        if (be === null) {
          Q === null && (Q = pe);
          break;
        }
        e && Q && be.alternate === null && t(z, Q), b = f(be, b, ae), _e === null ? J = be : _e.sibling = be, _e = be, Q = pe;
      }
      if (ae === k.length) return a(z, Q), ge && _n(z, ae), J;
      if (Q === null) {
        for (; ae < k.length; ae++) Q = Z(z, k[ae], A), Q !== null && (b = f(Q, b, ae), _e === null ? J = Q : _e.sibling = Q, _e = Q);
        return ge && _n(z, ae), J;
      }
      for (Q = l(Q); ae < k.length; ae++) pe = x(Q, z, ae, k[ae], A), pe !== null && (e && pe.alternate !== null && Q.delete(pe.key === null ? ae : pe.key), b = f(pe, b, ae), _e === null ? J = pe : _e.sibling = pe, _e = pe);
      return e && Q.forEach(function(ii) {
        return t(z, ii);
      }), ge && _n(z, ae), J;
    }
    function P(z, b, k, A) {
      if (k == null) throw Error(i(151));
      for (var J = null, _e = null, Q = b, ae = b = 0, pe = null, be = k.next(); Q !== null && !be.done; ae++, be = k.next()) {
        Q.index > ae ? (pe = Q, Q = null) : pe = Q.sibling;
        var ii = N(z, Q, be.value, A);
        if (ii === null) {
          Q === null && (Q = pe);
          break;
        }
        e && Q && ii.alternate === null && t(z, Q), b = f(ii, b, ae), _e === null ? J = ii : _e.sibling = ii, _e = ii, Q = pe;
      }
      if (be.done) return a(z, Q), ge && _n(z, ae), J;
      if (Q === null) {
        for (; !be.done; ae++, be = k.next()) be = Z(z, be.value, A), be !== null && (b = f(be, b, ae), _e === null ? J = be : _e.sibling = be, _e = be);
        return ge && _n(z, ae), J;
      }
      for (Q = l(Q); !be.done; ae++, be = k.next()) be = x(Q, z, ae, be.value, A), be !== null && (e && be.alternate !== null && Q.delete(be.key === null ? ae : be.key), b = f(be, b, ae), _e === null ? J = be : _e.sibling = be, _e = be);
      return e && Q.forEach(function(Z1) {
        return t(z, Z1);
      }), ge && _n(z, ae), J;
    }
    function De(z, b, k, A) {
      if (typeof k == "object" && k !== null && k.type === F && k.key === null && (k = k.props.children), typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case q:
            e: {
              for (var J = k.key; b !== null; ) {
                if (b.key === J) {
                  if (J = k.type, J === F) {
                    if (b.tag === 7) {
                      a(z, b.sibling), A = c(b, k.props.children), A.return = z, z = A;
                      break e;
                    }
                  } else if (b.elementType === J || typeof J == "object" && J !== null && J.$$typeof === _t && Si(J) === b.type) {
                    a(z, b.sibling), A = c(b, k.props), er(A, k), A.return = z, z = A;
                    break e;
                  }
                  a(z, b);
                  break;
                } else t(z, b);
                b = b.sibling;
              }
              k.type === F ? (A = hi(k.props.children, z.mode, A, k.key), A.return = z, z = A) : (A = zl(k.type, k.key, k.props, null, z.mode, A), er(A, k), A.return = z, z = A);
            }
            return m(z);
          case X:
            e: {
              for (J = k.key; b !== null; ) {
                if (b.key === J) if (b.tag === 4 && b.stateNode.containerInfo === k.containerInfo && b.stateNode.implementation === k.implementation) {
                  a(z, b.sibling), A = c(b, k.children || []), A.return = z, z = A;
                  break e;
                } else {
                  a(z, b);
                  break;
                }
                else t(z, b);
                b = b.sibling;
              }
              A = gc(k, z.mode, A), A.return = z, z = A;
            }
            return m(z);
          case _t:
            return k = Si(k), De(z, b, k, A);
        }
        if (G(k)) return Y(z, b, k, A);
        if (cn(k)) {
          if (J = cn(k), typeof J != "function") throw Error(i(150));
          return k = J.call(k), P(z, b, k, A);
        }
        if (typeof k.then == "function") return De(z, b, Ul(k), A);
        if (k.$$typeof === ue) return De(z, b, El(z, k), A);
        xl(z, k);
      }
      return typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint" ? (k = "" + k, b !== null && b.tag === 6 ? (a(z, b.sibling), A = c(b, k), A.return = z, z = A) : (a(z, b), A = hc(k, z.mode, A), A.return = z, z = A), m(z)) : a(z, b);
    }
    return function(z, b, k, A) {
      try {
        Wa = 0;
        var J = De(z, b, k, A);
        return aa = null, J;
      } catch (Q) {
        if (Q === ia || Q === Ol) throw Q;
        var _e = At(29, Q, null, z.mode);
        return _e.lanes = A, _e.return = z, _e;
      }
    };
  }
  var zi = Cv(!0), Mv = Cv(!1), Ln = !1;
  function Nc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    };
  }
  function Uc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Ti(e) {
    return {
      lane: e,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function wi(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, ($e & 2) !== 0) {
      var c = l.pending;
      return c === null ? t.next = t : (t.next = c.next, c.next = t), l.pending = t, t = $l(e), Sv(e, null, a), t;
    }
    return Sl(e, l, t, a), $l(e);
  }
  function tr(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Om(e, a);
    }
  }
  function xc(e, t) {
    var a = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var c = null, f = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var m = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          f === null ? c = f = m : f = f.next = m, a = a.next;
        } while (a !== null);
        f === null ? c = f = t : f = f.next = t;
      } else c = f = t;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: f,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var jc = !1;
  function nr() {
    if (jc) {
      var e = na;
      if (e !== null) throw e;
    }
  }
  function ir(e, t, a, l) {
    jc = !1;
    var c = e.updateQueue;
    Ln = !1;
    var f = c.firstBaseUpdate, m = c.lastBaseUpdate, v = c.shared.pending;
    if (v !== null) {
      c.shared.pending = null;
      var h = v, O = h.next;
      h.next = null, m === null ? f = O : m.next = O, m = h;
      var D = e.alternate;
      D !== null && (D = D.updateQueue, v = D.lastBaseUpdate, v !== m && (v === null ? D.firstBaseUpdate = O : v.next = O, D.lastBaseUpdate = h));
    }
    if (f !== null) {
      var Z = c.baseState;
      m = 0, D = O = h = null, v = f;
      do {
        var N = v.lane & -536870913, x = N !== v.lane;
        if (x ? (ve & N) === N : (l & N) === N) {
          N !== 0 && N === ta && (jc = !0), D !== null && (D = D.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var Y = e, P = v;
            N = t;
            var De = a;
            switch (P.tag) {
              case 1:
                if (Y = P.payload, typeof Y == "function") {
                  Z = Y.call(De, Z, N);
                  break e;
                }
                Z = Y;
                break e;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = P.payload, N = typeof Y == "function" ? Y.call(De, Z, N) : Y, N == null) break e;
                Z = y({}, Z, N);
                break e;
              case 2:
                Ln = !0;
            }
          }
          N = v.callback, N !== null && (e.flags |= 64, x && (e.flags |= 8192), x = c.callbacks, x === null ? c.callbacks = [N] : x.push(N));
        } else x = {
          lane: N,
          tag: v.tag,
          payload: v.payload,
          callback: v.callback,
          next: null
        }, D === null ? (O = D = x, h = Z) : D = D.next = x, m |= N;
        if (v = v.next, v === null) {
          if (v = c.shared.pending, v === null) break;
          x = v, v = x.next, x.next = null, c.lastBaseUpdate = x, c.shared.pending = null;
        }
      } while (!0);
      D === null && (h = Z), c.baseState = h, c.firstBaseUpdate = O, c.lastBaseUpdate = D, f === null && (c.shared.lanes = 0), Vn |= m, e.lanes = m, e.memoizedState = Z;
    }
  }
  function Iv(e, t) {
    if (typeof e != "function") throw Error(i(191, e));
    e.call(t);
  }
  function qv(e, t) {
    var a = e.callbacks;
    if (a !== null) for (e.callbacks = null, e = 0; e < a.length; e++) Iv(a[e], t);
  }
  var ra = S(null), jl = S(0);
  function Hv(e, t) {
    e = Un, L(jl, e), L(ra, t), Un = e | t.baseLanes;
  }
  function Dc() {
    L(jl, Un), L(ra, ra.current);
  }
  function Ac() {
    Un = jl.current, C(ra), C(jl);
  }
  var Zt = S(null), Vt = null;
  function Bn(e) {
    var t = e.alternate;
    L(Qe, Qe.current & 1), L(Zt, e), Vt === null && (t === null || ra.current !== null || t.memoizedState !== null) && (Vt = e);
  }
  function Zc(e) {
    L(Qe, Qe.current), L(Zt, e), Vt === null && (Vt = e);
  }
  function Lv(e) {
    e.tag === 22 ? (L(Qe, Qe.current), L(Zt, e), Vt === null && (Vt = e)) : Gn(e);
  }
  function Gn() {
    L(Qe, Qe.current), L(Zt, Zt.current);
  }
  function Rt(e) {
    C(Zt), Vt === e && (Vt = null), C(Qe);
  }
  var Qe = S(0);
  function Dl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || qs(a) || Hs(a))) return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var $n = 0, ne = null, xe = null, Ke = null, Al = !1, la = !1, Ei = !1, Zl = 0, ar = 0, oa = null, S$ = 0;
  function Be() {
    throw Error(i(321));
  }
  function Rc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++) if (!Dt(e[a], t[a])) return !1;
    return !0;
  }
  function Cc(e, t, a, l, c, f) {
    return $n = f, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, I.H = e === null || e.memoizedState === null ? wp : Fc, Ei = !1, f = a(l, c), Ei = !1, la && (f = Gv(t, a, l, c)), Bv(e), f;
  }
  function Bv(e) {
    I.H = or;
    var t = xe !== null && xe.next !== null;
    if ($n = 0, Ke = xe = ne = null, Al = !1, ar = 0, oa = null, t) throw Error(i(300));
    e === null || Pe || (e = e.dependencies, e !== null && wl(e) && (Pe = !0));
  }
  function Gv(e, t, a, l) {
    ne = e;
    var c = 0;
    do {
      if (la && (oa = null), ar = 0, la = !1, 25 <= c) throw Error(i(301));
      if (c += 1, Ke = xe = null, e.updateQueue != null) {
        var f = e.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      I.H = Ep, f = t(a, l);
    } while (la);
    return f;
  }
  function $$() {
    var e = I.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? rr(t) : t, e = e.useState()[0], (xe !== null ? xe.memoizedState : null) !== e && (ne.flags |= 1024), t;
  }
  function Mc() {
    var e = Zl !== 0;
    return Zl = 0, e;
  }
  function Ic(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function qc(e) {
    if (Al) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Al = !1;
    }
    $n = 0, Ke = xe = ne = null, la = !1, ar = Zl = 0, oa = null;
  }
  function gt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ke === null ? ne.memoizedState = Ke = e : Ke = Ke.next = e, Ke;
  }
  function Ve() {
    if (xe === null) {
      var e = ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = xe.next;
    var t = Ke === null ? ne.memoizedState : Ke.next;
    if (t !== null) Ke = t, xe = e;
    else {
      if (e === null)
        throw ne.alternate === null ? Error(i(467)) : Error(i(310));
      xe = e, e = {
        memoizedState: xe.memoizedState,
        baseState: xe.baseState,
        baseQueue: xe.baseQueue,
        queue: xe.queue,
        next: null
      }, Ke === null ? ne.memoizedState = Ke = e : Ke = Ke.next = e;
    }
    return Ke;
  }
  function Rl() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function rr(e) {
    var t = ar;
    return ar += 1, oa === null && (oa = []), e = Av(oa, e, t), t = ne, (Ke === null ? t.memoizedState : Ke.next) === null && (t = t.alternate, I.H = t === null || t.memoizedState === null ? wp : Fc), e;
  }
  function Cl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return rr(e);
      if (e.$$typeof === ue) return ut(e);
    }
    throw Error(i(438, String(e)));
  }
  function Hc(e) {
    var t = null, a = ne.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var l = ne.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (t ??= {
      data: [],
      index: 0
    }, a === null && (a = Rl(), ne.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0) for (a = t.data[t.index] = Array(e), l = 0; l < e; l++) a[l] = ui;
    return t.index++, a;
  }
  function zn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ml(e) {
    return Lc(Ve(), xe, e);
  }
  function Lc(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = a;
    var c = e.baseQueue, f = l.pending;
    if (f !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = f.next, f.next = m;
      }
      t.baseQueue = c = f, l.pending = null;
    }
    if (f = e.baseState, c === null) e.memoizedState = f;
    else {
      t = c.next;
      var v = m = null, h = null, O = t, D = !1;
      do {
        var Z = O.lane & -536870913;
        if (Z !== O.lane ? (ve & Z) === Z : ($n & Z) === Z) {
          var N = O.revertLane;
          if (N === 0) h !== null && (h = h.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          }), Z === ta && (D = !0);
          else if (($n & N) === N) {
            O = O.next, N === ta && (D = !0);
            continue;
          } else Z = {
            lane: 0,
            revertLane: O.revertLane,
            gesture: null,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          }, h === null ? (v = h = Z, m = f) : h = h.next = Z, ne.lanes |= N, Vn |= N;
          Z = O.action, Ei && a(f, Z), f = O.hasEagerState ? O.eagerState : a(f, Z);
        } else N = {
          lane: Z,
          revertLane: O.revertLane,
          gesture: O.gesture,
          action: O.action,
          hasEagerState: O.hasEagerState,
          eagerState: O.eagerState,
          next: null
        }, h === null ? (v = h = N, m = f) : h = h.next = N, ne.lanes |= Z, Vn |= Z;
        O = O.next;
      } while (O !== null && O !== t);
      if (h === null ? m = f : h.next = v, !Dt(f, e.memoizedState) && (Pe = !0, D && (a = na, a !== null))) throw a;
      e.memoizedState = f, e.baseState = m, e.baseQueue = h, l.lastRenderedState = f;
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Bc(e) {
    var t = Ve(), a = t.queue;
    if (a === null) throw Error(i(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, c = a.pending, f = t.memoizedState;
    if (c !== null) {
      a.pending = null;
      var m = c = c.next;
      do
        f = e(f, m.action), m = m.next;
      while (m !== c);
      Dt(f, t.memoizedState) || (Pe = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
    }
    return [f, l];
  }
  function Yv(e, t, a) {
    var l = ne, c = Ve(), f = ge;
    if (f) {
      if (a === void 0) throw Error(i(407));
      a = a();
    } else a = t();
    var m = !Dt((xe || c).memoizedState, a);
    if (m && (c.memoizedState = a, Pe = !0), c = c.queue, Qc(Jv.bind(null, l, c, e), [e]), c.getSnapshot !== t || m || Ke !== null && Ke.memoizedState.tag & 1) {
      if (l.flags |= 2048, ua(9, { destroy: void 0 }, Vv.bind(null, l, c, a, t), null), Ae === null) throw Error(i(349));
      f || ($n & 127) !== 0 || Qv(l, t, a);
    }
    return a;
  }
  function Qv(e, t, a) {
    e.flags |= 16384, e = {
      getSnapshot: t,
      value: a
    }, t = ne.updateQueue, t === null ? (t = Rl(), ne.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function Vv(e, t, a, l) {
    t.value = a, t.getSnapshot = l, Xv(t) && Kv(e);
  }
  function Jv(e, t, a) {
    return a(function() {
      Xv(t) && Kv(e);
    });
  }
  function Xv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Dt(e, a);
    } catch {
      return !0;
    }
  }
  function Kv(e) {
    var t = pi(e, 2);
    t !== null && Et(t, e, 2);
  }
  function Gc(e) {
    var t = gt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), Ei) {
        Zn(!0);
        try {
          a();
        } finally {
          Zn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zn,
      lastRenderedState: e
    }, t;
  }
  function Pv(e, t, a, l) {
    return e.baseState = a, Lc(e, xe, typeof l == "function" ? l : zn);
  }
  function z$(e, t, a, l, c) {
    if (Hl(e)) throw Error(i(485));
    if (e = t.action, e !== null) {
      var f = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          f.listeners.push(m);
        }
      };
      I.T !== null ? a(!0) : f.isTransition = !1, l(f), a = t.pending, a === null ? (f.next = t.pending = f, Fv(t, f)) : (f.next = a.next, t.pending = a.next = f);
    }
  }
  function Fv(e, t) {
    var a = t.action, l = t.payload, c = e.state;
    if (t.isTransition) {
      var f = I.T, m = {};
      I.T = m;
      try {
        var v = a(c, l), h = I.S;
        h !== null && h(m, v), Wv(e, t, v);
      } catch (O) {
        Yc(e, t, O);
      } finally {
        f !== null && m.types !== null && (f.types = m.types), I.T = f;
      }
    } else try {
      f = a(c, l), Wv(e, t, f);
    } catch (O) {
      Yc(e, t, O);
    }
  }
  function Wv(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(l) {
      ep(e, t, l);
    }, function(l) {
      return Yc(e, t, l);
    }) : ep(e, t, a);
  }
  function ep(e, t, a) {
    t.status = "fulfilled", t.value = a, tp(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Fv(e, a)));
  }
  function Yc(e, t, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = a, tp(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function tp(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function np(e, t) {
    return t;
  }
  function ip(e, t) {
    if (ge) {
      var a = Ae.formState;
      if (a !== null) {
        e: {
          var l = ne;
          if (ge) {
            if (qe) {
              t: {
                for (var c = qe, f = Qt; c.nodeType !== 8; ) {
                  if (!f) {
                    c = null;
                    break t;
                  }
                  if (c = Xt(c.nextSibling), c === null) {
                    c = null;
                    break t;
                  }
                }
                f = c.data, c = f === "F!" || f === "F" ? c : null;
              }
              if (c) {
                qe = Xt(c.nextSibling), l = c.data === "F!";
                break e;
              }
            }
            qn(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return a = gt(), a.memoizedState = a.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: np,
      lastRenderedState: t
    }, a.queue = l, a = $p.bind(null, ne, l), l.dispatch = a, l = Gc(!1), f = Pc.bind(null, ne, !1, l.queue), l = gt(), c = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = c, a = z$.bind(null, ne, c, f, a), c.dispatch = a, l.memoizedState = e, [
      t,
      a,
      !1
    ];
  }
  function ap(e) {
    return rp(Ve(), xe, e);
  }
  function rp(e, t, a) {
    if (t = Lc(e, t, np)[0], e = Ml(zn)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var l = rr(t);
    } catch (m) {
      throw m === ia ? Ol : m;
    }
    else l = t;
    t = Ve();
    var c = t.queue, f = c.dispatch;
    return a !== t.memoizedState && (ne.flags |= 2048, ua(9, { destroy: void 0 }, T$.bind(null, c, a), null)), [
      l,
      f,
      e
    ];
  }
  function T$(e, t) {
    e.action = t;
  }
  function lp(e) {
    var t = Ve(), a = xe;
    if (a !== null) return rp(t, a, e);
    Ve(), t = t.memoizedState, a = Ve();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [
      t,
      l,
      !1
    ];
  }
  function ua(e, t, a, l) {
    return e = {
      tag: e,
      create: a,
      deps: l,
      inst: t,
      next: null
    }, t = ne.updateQueue, t === null && (t = Rl(), ne.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, t.lastEffect = e), e;
  }
  function op() {
    return Ve().memoizedState;
  }
  function Il(e, t, a, l) {
    var c = gt();
    ne.flags |= e, c.memoizedState = ua(1 | t, { destroy: void 0 }, a, l === void 0 ? null : l);
  }
  function ql(e, t, a, l) {
    var c = Ve();
    l = l === void 0 ? null : l;
    var f = c.memoizedState.inst;
    xe !== null && l !== null && Rc(l, xe.memoizedState.deps) ? c.memoizedState = ua(t, f, a, l) : (ne.flags |= e, c.memoizedState = ua(1 | t, f, a, l));
  }
  function up(e, t) {
    Il(8390656, 8, e, t);
  }
  function Qc(e, t) {
    ql(2048, 8, e, t);
  }
  function w$(e) {
    ne.flags |= 4;
    var t = ne.updateQueue;
    if (t === null) t = Rl(), ne.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function cp(e) {
    var t = Ve().memoizedState;
    return w$({
      ref: t,
      nextImpl: e
    }), function() {
      if (($e & 2) !== 0) throw Error(i(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function sp(e, t) {
    return ql(4, 2, e, t);
  }
  function fp(e, t) {
    return ql(4, 4, e, t);
  }
  function dp(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function mp(e, t, a) {
    a = a != null ? a.concat([e]) : null, ql(4, 4, dp.bind(null, t, e), a);
  }
  function Vc() {
  }
  function vp(e, t) {
    var a = Ve();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && Rc(t, l[1]) ? l[0] : (a.memoizedState = [e, t], e);
  }
  function pp(e, t) {
    var a = Ve();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && Rc(t, l[1])) return l[0];
    if (l = e(), Ei) {
      Zn(!0);
      try {
        e();
      } finally {
        Zn(!1);
      }
    }
    return a.memoizedState = [l, t], l;
  }
  function Jc(e, t, a) {
    return a === void 0 || ($n & 1073741824) !== 0 && (ve & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = mh(), ne.lanes |= e, Vn |= e, a);
  }
  function hp(e, t, a, l) {
    return Dt(a, t) ? a : ra.current !== null ? (e = Jc(e, a, l), Dt(e, t) || (Pe = !0), e) : ($n & 42) === 0 || ($n & 1073741824) !== 0 && (ve & 261930) === 0 ? (Pe = !0, e.memoizedState = a) : (e = mh(), ne.lanes |= e, Vn |= e, t);
  }
  function gp(e, t, a, l, c) {
    var f = B.p;
    B.p = f !== 0 && 8 > f ? f : 8;
    var m = I.T, v = {};
    I.T = v, Pc(e, !1, t, a);
    try {
      var h = c(), O = I.S;
      O !== null && O(v, h), h !== null && typeof h == "object" && typeof h.then == "function" ? lr(e, t, b$(h, l), Jt(e)) : lr(e, t, l, Jt(e));
    } catch (D) {
      lr(e, t, {
        then: function() {
        },
        status: "rejected",
        reason: D
      }, Jt());
    } finally {
      B.p = f, m !== null && v.types !== null && (m.types = v.types), I.T = m;
    }
  }
  function E$() {
  }
  function Xc(e, t, a, l) {
    if (e.tag !== 5) throw Error(i(476));
    var c = yp(e).queue;
    gp(e, c, t, Se, a === null ? E$ : function() {
      return _p(e), a(l);
    });
  }
  function yp(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Se,
      baseState: Se,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zn,
        lastRenderedState: Se
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zn,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function _p(e) {
    var t = yp(e);
    t.next === null && (t = e.alternate.memoizedState), lr(e, t.next.queue, {}, Jt());
  }
  function Kc() {
    return ut(zr);
  }
  function bp() {
    return Ve().memoizedState;
  }
  function Sp() {
    return Ve().memoizedState;
  }
  function k$(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Jt();
          e = Ti(a);
          var l = wi(t, e, a);
          l !== null && (Et(l, t, a), tr(l, t, a)), t = { cache: wc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function O$(e, t, a) {
    var l = Jt();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Hl(e) ? zp(t, a) : (a = vc(e, t, a, l), a !== null && (Et(a, e, l), Tp(a, t, l)));
  }
  function $p(e, t, a) {
    lr(e, t, a, Jt());
  }
  function lr(e, t, a, l) {
    var c = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Hl(e)) zp(t, c);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) try {
        var m = t.lastRenderedState, v = f(m, a);
        if (c.hasEagerState = !0, c.eagerState = v, Dt(v, m)) return Sl(e, t, c, 0), Ae === null && bl(), !1;
      } catch {
      }
      if (a = vc(e, t, c, l), a !== null) return Et(a, e, l), Tp(a, t, l), !0;
    }
    return !1;
  }
  function Pc(e, t, a, l) {
    if (l = {
      lane: 2,
      revertLane: Ns(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Hl(e)) {
      if (t) throw Error(i(479));
    } else t = vc(e, a, l, 2), t !== null && Et(t, e, 2);
  }
  function Hl(e) {
    var t = e.alternate;
    return e === ne || t !== null && t === ne;
  }
  function zp(e, t) {
    la = Al = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Tp(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, a |= l, t.lanes = a, Om(e, a);
    }
  }
  var or = {
    readContext: ut,
    use: Cl,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useLayoutEffect: Be,
    useInsertionEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useSyncExternalStore: Be,
    useId: Be,
    useHostTransitionStatus: Be,
    useFormState: Be,
    useActionState: Be,
    useOptimistic: Be,
    useMemoCache: Be,
    useCacheRefresh: Be
  };
  or.useEffectEvent = Be;
  var wp = {
    readContext: ut,
    use: Cl,
    useCallback: function(e, t) {
      return gt().memoizedState = [e, t === void 0 ? null : t], e;
    },
    useContext: ut,
    useEffect: up,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Il(4194308, 4, dp.bind(null, t, e), a);
    },
    useLayoutEffect: function(e, t) {
      return Il(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Il(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = gt();
      t = t === void 0 ? null : t;
      var l = e();
      if (Ei) {
        Zn(!0);
        try {
          e();
        } finally {
          Zn(!1);
        }
      }
      return a.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, a) {
      var l = gt();
      if (a !== void 0) {
        var c = a(t);
        if (Ei) {
          Zn(!0);
          try {
            a(t);
          } finally {
            Zn(!1);
          }
        }
      } else c = t;
      return l.memoizedState = l.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, l.queue = e, e = e.dispatch = O$.bind(null, ne, e), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = gt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Gc(e);
      var t = e.queue, a = $p.bind(null, ne, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Vc,
    useDeferredValue: function(e, t) {
      return Jc(gt(), e, t);
    },
    useTransition: function() {
      var e = Gc(!1);
      return e = gp.bind(null, ne, e.queue, !0, !1), gt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var l = ne, c = gt();
      if (ge) {
        if (a === void 0) throw Error(i(407));
        a = a();
      } else {
        if (a = t(), Ae === null) throw Error(i(349));
        (ve & 127) !== 0 || Qv(l, t, a);
      }
      c.memoizedState = a;
      var f = {
        value: a,
        getSnapshot: t
      };
      return c.queue = f, up(Jv.bind(null, l, f, e), [e]), l.flags |= 2048, ua(9, { destroy: void 0 }, Vv.bind(null, l, f, a, t), null), a;
    },
    useId: function() {
      var e = gt(), t = Ae.identifierPrefix;
      if (ge) {
        var a = fn, l = sn;
        a = (l & ~(1 << 32 - jt(l) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Zl++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else a = S$++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Kc,
    useFormState: ip,
    useActionState: ip,
    useOptimistic: function(e) {
      var t = gt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Pc.bind(null, ne, !0, a), a.dispatch = t, [e, t];
    },
    useMemoCache: Hc,
    useCacheRefresh: function() {
      return gt().memoizedState = k$.bind(null, ne);
    },
    useEffectEvent: function(e) {
      var t = gt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if (($e & 2) !== 0) throw Error(i(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Fc = {
    readContext: ut,
    use: Cl,
    useCallback: vp,
    useContext: ut,
    useEffect: Qc,
    useImperativeHandle: mp,
    useInsertionEffect: sp,
    useLayoutEffect: fp,
    useMemo: pp,
    useReducer: Ml,
    useRef: op,
    useState: function() {
      return Ml(zn);
    },
    useDebugValue: Vc,
    useDeferredValue: function(e, t) {
      return hp(Ve(), xe.memoizedState, e, t);
    },
    useTransition: function() {
      var e = Ml(zn)[0], t = Ve().memoizedState;
      return [typeof e == "boolean" ? e : rr(e), t];
    },
    useSyncExternalStore: Yv,
    useId: bp,
    useHostTransitionStatus: Kc,
    useFormState: ap,
    useActionState: ap,
    useOptimistic: function(e, t) {
      return Pv(Ve(), xe, e, t);
    },
    useMemoCache: Hc,
    useCacheRefresh: Sp
  };
  Fc.useEffectEvent = cp;
  var Ep = {
    readContext: ut,
    use: Cl,
    useCallback: vp,
    useContext: ut,
    useEffect: Qc,
    useImperativeHandle: mp,
    useInsertionEffect: sp,
    useLayoutEffect: fp,
    useMemo: pp,
    useReducer: Bc,
    useRef: op,
    useState: function() {
      return Bc(zn);
    },
    useDebugValue: Vc,
    useDeferredValue: function(e, t) {
      var a = Ve();
      return xe === null ? Jc(a, e, t) : hp(a, xe.memoizedState, e, t);
    },
    useTransition: function() {
      var e = Bc(zn)[0], t = Ve().memoizedState;
      return [typeof e == "boolean" ? e : rr(e), t];
    },
    useSyncExternalStore: Yv,
    useId: bp,
    useHostTransitionStatus: Kc,
    useFormState: lp,
    useActionState: lp,
    useOptimistic: function(e, t) {
      var a = Ve();
      return xe !== null ? Pv(a, xe, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Hc,
    useCacheRefresh: Sp
  };
  Ep.useEffectEvent = cp;
  function Wc(e, t, a, l) {
    t = e.memoizedState, a = a(l, t), a = a == null ? t : y({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var es = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var l = Jt(), c = Ti(l);
      c.payload = t, a != null && (c.callback = a), t = wi(e, c, l), t !== null && (Et(t, e, l), tr(t, e, l));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var l = Jt(), c = Ti(l);
      c.tag = 1, c.payload = t, a != null && (c.callback = a), t = wi(e, c, l), t !== null && (Et(t, e, l), tr(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Jt(), l = Ti(a);
      l.tag = 2, t != null && (l.callback = t), t = wi(e, l, a), t !== null && (Et(t, e, a), tr(t, e, a));
    }
  };
  function kp(e, t, a, l, c, f, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, f, m) : t.prototype && t.prototype.isPureReactComponent ? !Va(a, l) || !Va(c, f) : !0;
  }
  function Op(e, t, a, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== e && es.enqueueReplaceState(t, t.state, null);
  }
  function ki(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t) l !== "ref" && (a[l] = t[l]);
    }
    if (e = e.defaultProps) {
      a === t && (a = y({}, a));
      for (var c in e) a[c] === void 0 && (a[c] = e[c]);
    }
    return a;
  }
  function N$(e) {
    _l(e);
  }
  function U$(e) {
    console.error(e);
  }
  function x$(e) {
    _l(e);
  }
  function Ll(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Np(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function ts(e, t, a) {
    return a = Ti(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Ll(e, t);
    }, a;
  }
  function Up(e) {
    return e = Ti(e), e.tag = 3, e;
  }
  function xp(e, t, a, l) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var f = l.value;
      e.payload = function() {
        return c(f);
      }, e.callback = function() {
        Np(t, a, l);
      };
    }
    var m = a.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (e.callback = function() {
      Np(t, a, l), typeof c != "function" && (Jn === null ? Jn = /* @__PURE__ */ new Set([this]) : Jn.add(this));
      var v = l.stack;
      this.componentDidCatch(l.value, { componentStack: v !== null ? v : "" });
    });
  }
  function j$(e, t, a, l, c) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = a.alternate, t !== null && ea(t, a, c, !0), a = Zt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Vt === null ? eo() : a.alternate === null && Ge === 0 && (Ge = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, l === Nl ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Es(e, l, c)), !1;
          case 22:
            return a.flags |= 65536, l === Nl ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), Es(e, l, c)), !1;
        }
        throw Error(i(435, a.tag));
      }
      return Es(e, l, c), eo(), !1;
    }
    if (ge) return t = Zt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = c, l !== bc && (e = Error(i(422), { cause: l }), Ka(Bt(e, a)))) : (l !== bc && (t = Error(i(423), { cause: l }), Ka(Bt(t, a))), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, l = Bt(l, a), c = ts(e.stateNode, l, c), xc(e, c), Ge !== 4 && (Ge = 2)), !1;
    var f = Error(i(520), { cause: l });
    if (f = Bt(f, a), pr === null ? pr = [f] : pr.push(f), Ge !== 4 && (Ge = 2), t === null) return !0;
    l = Bt(l, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = c & -c, a.lanes |= e, e = ts(a.stateNode, l, e), xc(a, e), !1;
        case 1:
          if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Jn === null || !Jn.has(f)))) return a.flags |= 65536, c &= -c, a.lanes |= c, c = Up(c), xp(c, e, a, l), xc(a, c), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var ns = Error(i(461)), Pe = !1;
  function ct(e, t, a, l) {
    t.child = e === null ? Mv(t, null, a, l) : zi(t, e.child, a, l);
  }
  function jp(e, t, a, l, c) {
    a = a.render;
    var f = t.ref;
    if ("ref" in l) {
      var m = {};
      for (var v in l) v !== "ref" && (m[v] = l[v]);
    } else m = l;
    return _i(t), l = Cc(e, t, a, m, f, c), v = Mc(), e !== null && !Pe ? (Ic(e, t, c), Tn(e, t, c)) : (ge && v && yc(t), t.flags |= 1, ct(e, t, l, c), t.child);
  }
  function Dp(e, t, a, l, c) {
    if (e === null) {
      var f = a.type;
      return typeof f == "function" && !pc(f) && f.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = f, Ap(e, t, f, l, c)) : (e = zl(a.type, null, l, t, t.mode, c), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (f = e.child, !ss(e, c)) {
      var m = f.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Va, a(m, l) && e.ref === t.ref) return Tn(e, t, c);
    }
    return t.flags |= 1, e = yn(f, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ap(e, t, a, l, c) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Va(f, l) && e.ref === t.ref) if (Pe = !1, t.pendingProps = l = f, ss(e, c)) (e.flags & 131072) !== 0 && (Pe = !0);
      else return t.lanes = e.lanes, Tn(e, t, c);
    }
    return is(e, t, a, l, c);
  }
  function Zp(e, t, a, l) {
    var c = l.children, f = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (f = f !== null ? f.baseLanes | a : a, e !== null) {
          for (l = t.child = e.child, c = 0; l !== null; ) c = c | l.lanes | l.childLanes, l = l.sibling;
          l = c & ~f;
        } else l = 0, t.child = null;
        return Rp(e, t, f, a, l);
      }
      if ((a & 536870912) !== 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, e !== null && kl(t, f !== null ? f.cachePool : null), f !== null ? Hv(t, f) : Dc(), Lv(t);
      else return l = t.lanes = 536870912, Rp(e, t, f !== null ? f.baseLanes | a : a, a, l);
    } else f !== null ? (kl(t, f.cachePool), Hv(t, f), Gn(t), t.memoizedState = null) : (e !== null && kl(t, null), Dc(), Gn(t));
    return ct(e, t, c, a), t.child;
  }
  function ur(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Rp(e, t, a, l, c) {
    var f = kc();
    return f = f === null ? null : {
      parent: Xe._currentValue,
      pool: f
    }, t.memoizedState = {
      baseLanes: a,
      cachePool: f
    }, e !== null && kl(t, null), Dc(), Lv(t), e !== null && ea(e, t, l, !0), t.childLanes = c, null;
  }
  function Bl(e, t) {
    return t = Yl({
      mode: t.mode,
      children: t.children
    }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Cp(e, t, a) {
    return zi(t, e.child, null, a), e = Bl(t, t.pendingProps), e.flags |= 2, Rt(t), t.memoizedState = null, e;
  }
  function D$(e, t, a) {
    var l = t.pendingProps, c = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ge) {
        if (l.mode === "hidden") return e = Bl(t, l), t.lanes = 536870912, ur(null, e);
        if (Zc(t), (e = qe) ? (e = Kh(e, Qt), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Mn !== null ? {
            id: sn,
            overflow: fn
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = zv(e), a.return = t, t.child = a, ot = t, qe = null)) : e = null, e === null) throw qn(t);
        return t.lanes = 536870912, null;
      }
      return Bl(t, l);
    }
    var f = e.memoizedState;
    if (f !== null) {
      var m = f.dehydrated;
      if (Zc(t), c) if (t.flags & 256) t.flags &= -257, t = Cp(e, t, a);
      else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
      else throw Error(i(558));
      else if (Pe || ea(e, t, a, !1), c = (a & e.childLanes) !== 0, Pe || c) {
        if (l = Ae, l !== null && (m = Nm(l, a), m !== 0 && m !== f.retryLane)) throw f.retryLane = m, pi(e, m), Et(l, e, m), ns;
        eo(), t = Cp(e, t, a);
      } else e = f.treeContext, qe = Xt(m.nextSibling), ot = t, ge = !0, In = null, Qt = !1, e !== null && Ev(t, e), t = Bl(t, l), t.flags |= 4096;
      return t;
    }
    return e = yn(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Gl(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(i(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function is(e, t, a, l, c) {
    return _i(t), a = Cc(e, t, a, l, void 0, c), l = Mc(), e !== null && !Pe ? (Ic(e, t, c), Tn(e, t, c)) : (ge && l && yc(t), t.flags |= 1, ct(e, t, a, c), t.child);
  }
  function Mp(e, t, a, l, c, f) {
    return _i(t), t.updateQueue = null, a = Gv(t, l, a, c), Bv(e), l = Mc(), e !== null && !Pe ? (Ic(e, t, f), Tn(e, t, f)) : (ge && l && yc(t), t.flags |= 1, ct(e, t, a, f), t.child);
  }
  function Ip(e, t, a, l, c) {
    if (_i(t), t.stateNode === null) {
      var f = Ki, m = a.contextType;
      typeof m == "object" && m !== null && (f = ut(m)), f = new a(l, f), t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = es, t.stateNode = f, f._reactInternals = t, f = t.stateNode, f.props = l, f.state = t.memoizedState, f.refs = {}, Nc(t), m = a.contextType, f.context = typeof m == "object" && m !== null ? ut(m) : Ki, f.state = t.memoizedState, m = a.getDerivedStateFromProps, typeof m == "function" && (Wc(t, a, m, l), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (m = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), m !== f.state && es.enqueueReplaceState(f, f.state, null), ir(t, l, f, c), nr(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      f = t.stateNode;
      var v = t.memoizedProps, h = ki(a, v);
      f.props = h;
      var O = f.context, D = a.contextType;
      m = Ki, typeof D == "object" && D !== null && (m = ut(D));
      var Z = a.getDerivedStateFromProps;
      D = typeof Z == "function" || typeof f.getSnapshotBeforeUpdate == "function", v = t.pendingProps !== v, D || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v || O !== m) && Op(t, f, l, m), Ln = !1;
      var N = t.memoizedState;
      f.state = N, ir(t, l, f, c), nr(), O = t.memoizedState, v || N !== O || Ln ? (typeof Z == "function" && (Wc(t, a, Z, l), O = t.memoizedState), (h = Ln || kp(t, a, h, l, N, O, m)) ? (D || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = O), f.props = l, f.state = O, f.context = m, l = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      f = t.stateNode, Uc(e, t), m = t.memoizedProps, D = ki(a, m), f.props = D, Z = t.pendingProps, N = f.context, O = a.contextType, h = Ki, typeof O == "object" && O !== null && (h = ut(O)), v = a.getDerivedStateFromProps, (O = typeof v == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (m !== Z || N !== h) && Op(t, f, l, h), Ln = !1, N = t.memoizedState, f.state = N, ir(t, l, f, c), nr();
      var x = t.memoizedState;
      m !== Z || N !== x || Ln || e !== null && e.dependencies !== null && wl(e.dependencies) ? (typeof v == "function" && (Wc(t, a, v, l), x = t.memoizedState), (D = Ln || kp(t, a, D, l, N, x, h) || e !== null && e.dependencies !== null && wl(e.dependencies)) ? (O || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(l, x, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(l, x, h)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || m === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = x), f.props = l, f.state = x, f.context = h, l = D) : (typeof f.componentDidUpdate != "function" || m === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return f = l, Gl(e, t), l = (t.flags & 128) !== 0, f || l ? (f = t.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : f.render(), t.flags |= 1, e !== null && l ? (t.child = zi(t, e.child, null, c), t.child = zi(t, null, a, c)) : ct(e, t, a, c), t.memoizedState = f.state, e = t.child) : e = Tn(e, t, c), e;
  }
  function qp(e, t, a, l) {
    return gi(), t.flags |= 256, ct(e, t, a, l), t.child;
  }
  var as = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function rs(e) {
    return {
      baseLanes: e,
      cachePool: jv()
    };
  }
  function ls(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Mt), e;
  }
  function Hp(e, t, a) {
    var l = t.pendingProps, c = !1, f = (t.flags & 128) !== 0, m;
    if ((m = f) || (m = e !== null && e.memoizedState === null ? !1 : (Qe.current & 2) !== 0), m && (c = !0, t.flags &= -129), m = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ge) {
        if (c ? Bn(t) : Gn(t), (e = qe) ? (e = Kh(e, Qt), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Mn !== null ? {
            id: sn,
            overflow: fn
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = zv(e), a.return = t, t.child = a, ot = t, qe = null)) : e = null, e === null) throw qn(t);
        return Hs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var v = l.children;
      return l = l.fallback, c ? (Gn(t), c = t.mode, v = Yl({
        mode: "hidden",
        children: v
      }, c), l = hi(l, c, a, null), v.return = t, l.return = t, v.sibling = l, t.child = v, l = t.child, l.memoizedState = rs(a), l.childLanes = ls(e, m, a), t.memoizedState = as, ur(null, l)) : (Bn(t), os(t, v));
    }
    var h = e.memoizedState;
    if (h !== null && (v = h.dehydrated, v !== null)) {
      if (f) t.flags & 256 ? (Bn(t), t.flags &= -257, t = us(e, t, a)) : t.memoizedState !== null ? (Gn(t), t.child = e.child, t.flags |= 128, t = null) : (Gn(t), v = l.fallback, c = t.mode, l = Yl({
        mode: "visible",
        children: l.children
      }, c), v = hi(v, c, a, null), v.flags |= 2, l.return = t, v.return = t, l.sibling = v, t.child = l, zi(t, e.child, null, a), l = t.child, l.memoizedState = rs(a), l.childLanes = ls(e, m, a), t.memoizedState = as, t = ur(null, l));
      else if (Bn(t), Hs(v)) {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var O = m.dgst;
        m = O, l = Error(i(419)), l.stack = "", l.digest = m, Ka({
          value: l,
          source: null,
          stack: null
        }), t = us(e, t, a);
      } else if (Pe || ea(e, t, a, !1), m = (a & e.childLanes) !== 0, Pe || m) {
        if (m = Ae, m !== null && (l = Nm(m, a), l !== 0 && l !== h.retryLane)) throw h.retryLane = l, pi(e, l), Et(m, e, l), ns;
        qs(v) || eo(), t = us(e, t, a);
      } else qs(v) ? (t.flags |= 192, t.child = e.child, t = null) : (e = h.treeContext, qe = Xt(v.nextSibling), ot = t, ge = !0, In = null, Qt = !1, e !== null && Ev(t, e), t = os(t, l.children), t.flags |= 4096);
      return t;
    }
    return c ? (Gn(t), v = l.fallback, c = t.mode, h = e.child, O = h.sibling, l = yn(h, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = h.subtreeFlags & 65011712, O !== null ? v = yn(O, v) : (v = hi(v, c, a, null), v.flags |= 2), v.return = t, l.return = t, l.sibling = v, t.child = l, ur(null, l), l = t.child, v = e.child.memoizedState, v === null ? v = rs(a) : (c = v.cachePool, c !== null ? (h = Xe._currentValue, c = c.parent !== h ? {
      parent: h,
      pool: h
    } : c) : c = jv(), v = {
      baseLanes: v.baseLanes | a,
      cachePool: c
    }), l.memoizedState = v, l.childLanes = ls(e, m, a), t.memoizedState = as, ur(e.child, l)) : (Bn(t), a = e.child, e = a.sibling, a = yn(a, {
      mode: "visible",
      children: l.children
    }), a.return = t, a.sibling = null, e !== null && (m = t.deletions, m === null ? (t.deletions = [e], t.flags |= 16) : m.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function os(e, t) {
    return t = Yl({
      mode: "visible",
      children: t
    }, e.mode), t.return = e, e.child = t;
  }
  function Yl(e, t) {
    return e = At(22, e, null, t), e.lanes = 0, e;
  }
  function us(e, t, a) {
    return zi(t, e.child, null, a), e = os(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Lp(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), zc(e.return, t, a);
  }
  function cs(e, t, a, l, c, f) {
    var m = e.memoizedState;
    m === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: c,
      treeForkCount: f
    } : (m.isBackwards = t, m.rendering = null, m.renderingStartTime = 0, m.last = l, m.tail = a, m.tailMode = c, m.treeForkCount = f);
  }
  function Bp(e, t, a) {
    var l = t.pendingProps, c = l.revealOrder, f = l.tail;
    l = l.children;
    var m = Qe.current, v = (m & 2) !== 0;
    if (v ? (m = m & 1 | 2, t.flags |= 128) : m &= 1, L(Qe, m), ct(e, t, l, a), l = ge ? Xa : 0, !v && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Lp(e, a, t);
      else if (e.tag === 19) Lp(e, a, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    switch (c) {
      case "forwards":
        for (a = t.child, c = null; a !== null; ) e = a.alternate, e !== null && Dl(e) === null && (c = a), a = a.sibling;
        a = c, a === null ? (c = t.child, t.child = null) : (c = a.sibling, a.sibling = null), cs(t, !1, c, a, f, l);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, c = t.child, t.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && Dl(e) === null) {
            t.child = c;
            break;
          }
          e = c.sibling, c.sibling = a, a = c, c = e;
        }
        cs(t, !0, a, null, f, l);
        break;
      case "together":
        cs(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Tn(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Vn |= t.lanes, (a & t.childLanes) === 0) if (e !== null) {
      if (ea(e, t, a, !1), (a & t.childLanes) === 0) return null;
    } else return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, a = yn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; ) e = e.sibling, a = a.sibling = yn(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function ss(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && wl(e)));
  }
  function A$(e, t, a) {
    switch (t.tag) {
      case 3:
        ht(t, t.stateNode.containerInfo), Hn(t, Xe, e.memoizedState.cache), gi();
        break;
      case 27:
      case 5:
        Aa(t);
        break;
      case 4:
        ht(t, t.stateNode.containerInfo);
        break;
      case 10:
        Hn(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, Zc(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Bn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Hp(e, t, a) : (Bn(t), e = Tn(e, t, a), e !== null ? e.sibling : null);
        Bn(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (l = (a & t.childLanes) !== 0, l || (ea(e, t, a, !1), l = (a & t.childLanes) !== 0), c) {
          if (l) return Bp(e, t, a);
          t.flags |= 128;
        }
        if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), L(Qe, Qe.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Zp(e, t, a, t.pendingProps);
      case 24:
        Hn(t, Xe, e.memoizedState.cache);
    }
    return Tn(e, t, a);
  }
  function Gp(e, t, a) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps) Pe = !0;
    else {
      if (!ss(e, a) && (t.flags & 128) === 0) return Pe = !1, A$(e, t, a);
      Pe = (e.flags & 131072) !== 0;
    }
    else Pe = !1, ge && (t.flags & 1048576) !== 0 && wv(t, Xa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = Si(t.elementType), t.type = e, typeof e == "function") pc(e) ? (l = ki(e, l), t.tag = 1, t = Ip(null, t, e, l, a)) : (t.tag = 0, t = is(null, t, e, l, a));
          else {
            if (e != null) {
              var c = e.$$typeof;
              if (c === rt) {
                t.tag = 11, t = jp(null, t, e, l, a);
                break e;
              } else if (c === he) {
                t.tag = 14, t = Dp(null, t, e, l, a);
                break e;
              }
            }
            throw t = tn(e) || e, Error(i(306, t, ""));
          }
        }
        return t;
      case 0:
        return is(e, t, t.type, t.pendingProps, a);
      case 1:
        return l = t.type, c = ki(l, t.pendingProps), Ip(e, t, l, c, a);
      case 3:
        e: {
          if (ht(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
          l = t.pendingProps;
          var f = t.memoizedState;
          c = f.element, Uc(e, t), ir(t, l, null, a);
          var m = t.memoizedState;
          if (l = m.cache, Hn(t, Xe, l), l !== f.cache && Tc(t, [Xe], a, !0), nr(), l = m.element, f.isDehydrated) if (f = {
            element: l,
            isDehydrated: !1,
            cache: m.cache
          }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
            t = qp(e, t, l, a);
            break e;
          } else if (l !== c) {
            c = Bt(Error(i(424)), t), Ka(c), t = qp(e, t, l, a);
            break e;
          } else
            for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, qe = Xt(e.firstChild), ot = t, ge = !0, In = null, Qt = !0, a = Mv(t, null, l, a), t.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (gi(), l === c) {
              t = Tn(e, t, a);
              break e;
            }
            ct(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Gl(e, t), e === null ? (a = ng(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : ge || (a = t.type, e = t.pendingProps, l = oo(fe.current).createElement(a), l[lt] = t, l[bt] = e, st(l, a, e), it(l), t.stateNode = l) : t.memoizedState = ng(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
      case 27:
        return Aa(t), e === null && ge && (l = t.stateNode = Wh(t.type, t.pendingProps, fe.current), ot = t, Qt = !0, c = qe, Fn(t.type) ? (Ls = c, qe = Xt(l.firstChild)) : qe = c), ct(e, t, t.pendingProps.children, a), Gl(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ge && ((c = l = qe) && (l = u1(l, t.type, t.pendingProps, Qt), l !== null ? (t.stateNode = l, ot = t, qe = Xt(l.firstChild), Qt = !1, c = !0) : c = !1), c || qn(t)), Aa(t), c = t.type, f = t.pendingProps, m = e !== null ? e.memoizedProps : null, l = f.children, Cs(c, f) ? l = null : m !== null && Cs(c, m) && (t.flags |= 32), t.memoizedState !== null && (c = Cc(e, t, $$, null, null, a), zr._currentValue = c), Gl(e, t), ct(e, t, l, a), t.child;
      case 6:
        return e === null && ge && ((e = a = qe) && (a = c1(a, t.pendingProps, Qt), a !== null ? (t.stateNode = a, ot = t, qe = null, e = !0) : e = !1), e || qn(t)), null;
      case 13:
        return Hp(e, t, a);
      case 4:
        return ht(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = zi(t, null, l, a) : ct(e, t, l, a), t.child;
      case 11:
        return jp(e, t, t.type, t.pendingProps, a);
      case 7:
        return ct(e, t, t.pendingProps, a), t.child;
      case 8:
        return ct(e, t, t.pendingProps.children, a), t.child;
      case 12:
        return ct(e, t, t.pendingProps.children, a), t.child;
      case 10:
        return l = t.pendingProps, Hn(t, t.type, l.value), ct(e, t, l.children, a), t.child;
      case 9:
        return c = t.type._context, l = t.pendingProps.children, _i(t), c = ut(c), l = l(c), t.flags |= 1, ct(e, t, l, a), t.child;
      case 14:
        return Dp(e, t, t.type, t.pendingProps, a);
      case 15:
        return Ap(e, t, t.type, t.pendingProps, a);
      case 19:
        return Bp(e, t, a);
      case 31:
        return D$(e, t, a);
      case 22:
        return Zp(e, t, a, t.pendingProps);
      case 24:
        return _i(t), l = ut(Xe), e === null ? (c = kc(), c === null && (c = Ae, f = wc(), c.pooledCache = f, f.refCount++, f !== null && (c.pooledCacheLanes |= a), c = f), t.memoizedState = {
          parent: l,
          cache: c
        }, Nc(t), Hn(t, Xe, c)) : ((e.lanes & a) !== 0 && (Uc(e, t), ir(t, null, null, a), nr()), c = e.memoizedState, f = t.memoizedState, c.parent !== l ? (c = {
          parent: l,
          cache: l
        }, t.memoizedState = c, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c), Hn(t, Xe, l)) : (l = f.cache, Hn(t, Xe, l), l !== c.cache && Tc(t, [Xe], a, !0))), ct(e, t, t.pendingProps.children, a), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function wn(e) {
    e.flags |= 4;
  }
  function fs(e, t, a, l, c) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (c & 335544128) === c) if (e.stateNode.complete) e.flags |= 8192;
      else if (gh()) e.flags |= 8192;
      else throw $i = Nl, Oc;
    } else e.flags &= -16777217;
  }
  function Yp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !og(t)) if (gh()) e.flags |= 8192;
    else throw $i = Nl, Oc;
  }
  function Ql(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Em() : 536870912, e.lanes |= t, da |= t);
  }
  function cr(e, t) {
    if (!ge) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var a = null; t !== null; ) t.alternate !== null && (a = t), t = t.sibling;
        a === null ? e.tail = null : a.sibling = null;
        break;
      case "collapsed":
        a = e.tail;
        for (var l = null; a !== null; ) a.alternate !== null && (l = a), a = a.sibling;
        l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
    }
  }
  function He(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (t) for (var c = e.child; c !== null; ) a |= c.lanes | c.childLanes, l |= c.subtreeFlags & 65011712, l |= c.flags & 65011712, c.return = e, c = c.sibling;
    else for (c = e.child; c !== null; ) a |= c.lanes | c.childLanes, l |= c.subtreeFlags, l |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, t;
  }
  function Z$(e, t, a) {
    var l = t.pendingProps;
    switch (_c(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return He(t), null;
      case 1:
        return He(t), null;
      case 3:
        return a = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Sn(Xe), Ye(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Wi(t) ? wn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Sc())), He(t), null;
      case 26:
        var c = t.type, f = t.memoizedState;
        return e === null ? (wn(t), f !== null ? (He(t), Yp(t, f)) : (He(t), fs(t, c, null, l, a))) : f ? f !== e.memoizedState ? (wn(t), He(t), Yp(t, f)) : (He(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && wn(t), He(t), fs(t, c, e, l, a)), null;
      case 27:
        if (nl(t), a = fe.current, c = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && wn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return He(t), null;
          }
          e = V.current, Wi(t) ? kv(t, e) : (e = Wh(c, l, a), t.stateNode = e, wn(t));
        }
        return He(t), null;
      case 5:
        if (nl(t), c = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && wn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return He(t), null;
          }
          if (f = V.current, Wi(t)) kv(t, f);
          else {
            var m = oo(fe.current);
            switch (f) {
              case 1:
                f = m.createElementNS("http://www.w3.org/2000/svg", c);
                break;
              case 2:
                f = m.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                break;
              default:
                switch (c) {
                  case "svg":
                    f = m.createElementNS("http://www.w3.org/2000/svg", c);
                    break;
                  case "math":
                    f = m.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                    break;
                  case "script":
                    f = m.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(f.firstChild);
                    break;
                  case "select":
                    f = typeof l.is == "string" ? m.createElement("select", { is: l.is }) : m.createElement("select"), l.multiple ? f.multiple = !0 : l.size && (f.size = l.size);
                    break;
                  default:
                    f = typeof l.is == "string" ? m.createElement(c, { is: l.is }) : m.createElement(c);
                }
            }
            f[lt] = t, f[bt] = l;
            e: for (m = t.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6) f.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === t) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === t) break e;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            t.stateNode = f;
            e: switch (st(f, c, l), c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && wn(t);
          }
        }
        return He(t), fs(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && wn(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(i(166));
          if (e = fe.current, Wi(t)) {
            if (e = t.stateNode, a = t.memoizedProps, l = null, c = ot, c !== null) switch (c.tag) {
              case 27:
              case 5:
                l = c.memoizedProps;
            }
            e[lt] = t, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Lh(e.nodeValue, a)), e || qn(t, !0);
          } else e = oo(e).createTextNode(l), e[lt] = t, t.stateNode = e;
        }
        return He(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Wi(t), a !== null) {
            if (e === null) {
              if (!l) throw Error(i(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(557));
              e[lt] = t;
            } else gi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            He(t), e = !1;
          } else a = Sc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Rt(t), t) : (Rt(t), null);
          if ((t.flags & 128) !== 0) throw Error(i(558));
        }
        return He(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = Wi(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(i(318));
              if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(i(317));
              c[lt] = t;
            } else gi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            He(t), c = !1;
          } else c = Sc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return t.flags & 256 ? (Rt(t), t) : (Rt(t), null);
        }
        return Rt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = l !== null, e = e !== null && e.memoizedState !== null, a && (l = t.child, c = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (c = l.alternate.memoizedState.cachePool.pool), f = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (f = l.memoizedState.cachePool.pool), f !== c && (l.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Ql(t, t.updateQueue), He(t), null);
      case 4:
        return Ye(), e === null && Mh(t.stateNode.containerInfo), He(t), null;
      case 10:
        return Sn(t.type), He(t), null;
      case 19:
        if (C(Qe), l = t.memoizedState, l === null) return He(t), null;
        if (c = (t.flags & 128) !== 0, f = l.rendering, f === null) if (c) cr(l, !1);
        else {
          if (Ge !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (f = Dl(e), f !== null) {
              for (t.flags |= 128, cr(l, !1), e = f.updateQueue, t.updateQueue = e, Ql(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; ) $v(a, e), a = a.sibling;
              return L(Qe, Qe.current & 1 | 2), ge && _n(t, l.treeForkCount), t.child;
            }
            e = e.sibling;
          }
          l.tail !== null && Ut() > Pl && (t.flags |= 128, c = !0, cr(l, !1), t.lanes = 4194304);
        }
        else {
          if (!c) if (e = Dl(f), e !== null) {
            if (t.flags |= 128, c = !0, e = e.updateQueue, t.updateQueue = e, Ql(t, e), cr(l, !0), l.tail === null && l.tailMode === "hidden" && !f.alternate && !ge) return He(t), null;
          } else 2 * Ut() - l.renderingStartTime > Pl && a !== 536870912 && (t.flags |= 128, c = !0, cr(l, !1), t.lanes = 4194304);
          l.isBackwards ? (f.sibling = t.child, t.child = f) : (e = l.last, e !== null ? e.sibling = f : t.child = f, l.last = f);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Ut(), e.sibling = null, a = Qe.current, L(Qe, c ? a & 1 | 2 : a & 1), ge && _n(t, l.treeForkCount), e) : (He(t), null);
      case 22:
      case 23:
        return Rt(t), Ac(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (He(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : He(t), a = t.updateQueue, a !== null && Ql(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (t.flags |= 2048), e !== null && C(bi), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Sn(Xe), He(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function R$(e, t) {
    switch (_c(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Sn(Xe), Ye(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return nl(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Rt(t), t.alternate === null) throw Error(i(340));
          gi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Rt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          gi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return C(Qe), null;
      case 4:
        return Ye(), null;
      case 10:
        return Sn(t.type), null;
      case 22:
      case 23:
        return Rt(t), Ac(), e !== null && C(bi), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Sn(Xe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Qp(e, t) {
    switch (_c(t), t.tag) {
      case 3:
        Sn(Xe), Ye();
        break;
      case 26:
      case 27:
      case 5:
        nl(t);
        break;
      case 4:
        Ye();
        break;
      case 31:
        t.memoizedState !== null && Rt(t);
        break;
      case 13:
        Rt(t);
        break;
      case 19:
        C(Qe);
        break;
      case 10:
        Sn(t.type);
        break;
      case 22:
      case 23:
        Rt(t), Ac(), e !== null && C(bi);
        break;
      case 24:
        Sn(Xe);
    }
  }
  function sr(e, t) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var c = l.next;
        a = c;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var f = a.create, m = a.inst;
            l = f(), m.destroy = l;
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (v) {
      ke(t, t.return, v);
    }
  }
  function Yn(e, t, a) {
    try {
      var l = t.updateQueue, c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var f = c.next;
        l = f;
        do {
          if ((l.tag & e) === e) {
            var m = l.inst, v = m.destroy;
            if (v !== void 0) {
              m.destroy = void 0, c = t;
              var h = a, O = v;
              try {
                O();
              } catch (D) {
                ke(c, h, D);
              }
            }
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (D) {
      ke(t, t.return, D);
    }
  }
  function Vp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        qv(t, a);
      } catch (l) {
        ke(e, e.return, l);
      }
    }
  }
  function Jp(e, t, a) {
    a.props = ki(e.type, e.memoizedProps), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      ke(e, t, l);
    }
  }
  function fr(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(l) : a.current = l;
      }
    } catch (c) {
      ke(e, t, c);
    }
  }
  function dn(e, t) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null) if (typeof l == "function") try {
      l();
    } catch (c) {
      ke(e, t, c);
    } finally {
      e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
    }
    else if (typeof a == "function") try {
      a(null);
    } catch (c) {
      ke(e, t, c);
    }
    else a.current = null;
  }
  function Xp(e) {
    var t = e.type, a = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (c) {
      ke(e, e.return, c);
    }
  }
  function ds(e, t, a) {
    try {
      var l = e.stateNode;
      n1(l, e.type, a, t), l[bt] = t;
    } catch (c) {
      ke(e, e.return, c);
    }
  }
  function Kp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Fn(e.type) || e.tag === 4;
  }
  function ms(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Kp(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Fn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function vs(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = hn));
    else if (l !== 4 && (l === 27 && Fn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null)) for (vs(e, t, a), e = e.sibling; e !== null; ) vs(e, t, a), e = e.sibling;
  }
  function Vl(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Fn(e.type) && (a = e.stateNode), e = e.child, e !== null)) for (Vl(e, t, a), e = e.sibling; e !== null; ) Vl(e, t, a), e = e.sibling;
  }
  function Pp(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, c = t.attributes; c.length; ) t.removeAttributeNode(c[0]);
      st(t, l, a), t[lt] = e, t[bt] = a;
    } catch (f) {
      ke(e, e.return, f);
    }
  }
  var En = !1, Fe = !1, ps = !1, Fp = typeof WeakSet == "function" ? WeakSet : Set, at = null;
  function C$(e, t) {
    if (e = e.containerInfo, Zs = po, e = mv(e), uc(e)) {
      if ("selectionStart" in e) var a = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
      else e: {
        a = (a = e.ownerDocument) && a.defaultView || window;
        var l = a.getSelection && a.getSelection();
        if (l && l.rangeCount !== 0) {
          a = l.anchorNode;
          var c = l.anchorOffset, f = l.focusNode;
          l = l.focusOffset;
          try {
            a.nodeType, f.nodeType;
          } catch {
            a = null;
            break e;
          }
          var m = 0, v = -1, h = -1, O = 0, D = 0, Z = e, N = null;
          t: for (; ; ) {
            for (var x; Z !== a || c !== 0 && Z.nodeType !== 3 || (v = m + c), Z !== f || l !== 0 && Z.nodeType !== 3 || (h = m + l), Z.nodeType === 3 && (m += Z.nodeValue.length), (x = Z.firstChild) !== null; )
              N = Z, Z = x;
            for (; ; ) {
              if (Z === e) break t;
              if (N === a && ++O === c && (v = m), N === f && ++D === l && (h = m), (x = Z.nextSibling) !== null) break;
              Z = N, N = Z.parentNode;
            }
            Z = x;
          }
          a = v === -1 || h === -1 ? null : {
            start: v,
            end: h
          };
        } else a = null;
      }
      a = a || {
        start: 0,
        end: 0
      };
    } else a = null;
    for (Rs = {
      focusedElem: e,
      selectionRange: a
    }, po = !1, at = t; at !== null; ) if (t = at, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, at = e;
    else for (; at !== null; ) {
      switch (t = at, f = t.alternate, e = t.flags, t.tag) {
        case 0:
          if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null)) for (a = 0; a < e.length; a++) c = e[a], c.ref.impl = c.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((e & 1024) !== 0 && f !== null) {
            e = void 0, a = t, c = f.memoizedProps, f = f.memoizedState, l = a.stateNode;
            try {
              var Y = ki(a.type, c);
              e = l.getSnapshotBeforeUpdate(Y, f), l.__reactInternalSnapshotBeforeUpdate = e;
            } catch (P) {
              ke(a, a.return, P);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9) Is(e);
            else if (a === 1) switch (e.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Is(e);
                break;
              default:
                e.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((e & 1024) !== 0) throw Error(i(163));
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, at = e;
        break;
      }
      at = t.return;
    }
  }
  function Wp(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        On(e, a), l & 4 && sr(5, a);
        break;
      case 1:
        if (On(e, a), l & 4) if (e = a.stateNode, t === null) try {
          e.componentDidMount();
        } catch (m) {
          ke(a, a.return, m);
        }
        else {
          var c = ki(a.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            e.componentDidUpdate(c, t, e.__reactInternalSnapshotBeforeUpdate);
          } catch (m) {
            ke(a, a.return, m);
          }
        }
        l & 64 && Vp(a), l & 512 && fr(a, a.return);
        break;
      case 3:
        if (On(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null) switch (a.child.tag) {
            case 27:
            case 5:
              t = a.child.stateNode;
              break;
            case 1:
              t = a.child.stateNode;
          }
          try {
            qv(e, t);
          } catch (m) {
            ke(a, a.return, m);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Pp(a);
      case 26:
      case 5:
        On(e, a), t === null && l & 4 && Xp(a), l & 512 && fr(a, a.return);
        break;
      case 12:
        On(e, a);
        break;
      case 31:
        On(e, a), l & 4 && nh(e, a);
        break;
      case 13:
        On(e, a), l & 4 && ih(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Q$.bind(null, a), s1(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || En, !l) {
          t = t !== null && t.memoizedState !== null || Fe, c = En;
          var f = Fe;
          En = l, (Fe = t) && !f ? Nn(e, a, (a.subtreeFlags & 8772) !== 0) : On(e, a), En = c, Fe = f;
        }
        break;
      case 30:
        break;
      default:
        On(e, a);
    }
  }
  function eh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, eh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Yu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Le = null, $t = !1;
  function kn(e, t, a) {
    for (a = a.child; a !== null; ) th(e, t, a), a = a.sibling;
  }
  function th(e, t, a) {
    if (xt && typeof xt.onCommitFiberUnmount == "function") try {
      xt.onCommitFiberUnmount(Za, a);
    } catch {
    }
    switch (a.tag) {
      case 26:
        Fe || dn(a, t), kn(e, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Fe || dn(a, t);
        var l = Le, c = $t;
        Fn(a.type) && (Le = a.stateNode, $t = !1), kn(e, t, a), br(a.stateNode), Le = l, $t = c;
        break;
      case 5:
        Fe || dn(a, t);
      case 6:
        if (l = Le, c = $t, Le = null, kn(e, t, a), Le = l, $t = c, Le !== null) if ($t) try {
          (Le.nodeType === 9 ? Le.body : Le.nodeName === "HTML" ? Le.ownerDocument.body : Le).removeChild(a.stateNode);
        } catch (f) {
          ke(a, t, f);
        }
        else try {
          Le.removeChild(a.stateNode);
        } catch (f) {
          ke(a, t, f);
        }
        break;
      case 18:
        Le !== null && ($t ? (e = Le, Jh(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), ba(e)) : Jh(Le, a.stateNode));
        break;
      case 4:
        l = Le, c = $t, Le = a.stateNode.containerInfo, $t = !0, kn(e, t, a), Le = l, $t = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Yn(2, a, t), Fe || Yn(4, a, t), kn(e, t, a);
        break;
      case 1:
        Fe || (dn(a, t), l = a.stateNode, typeof l.componentWillUnmount == "function" && Jp(a, t, l)), kn(e, t, a);
        break;
      case 21:
        kn(e, t, a);
        break;
      case 22:
        Fe = (l = Fe) || a.memoizedState !== null, kn(e, t, a), Fe = l;
        break;
      default:
        kn(e, t, a);
    }
  }
  function nh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ba(e);
      } catch (a) {
        ke(t, t.return, a);
      }
    }
  }
  function ih(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      ba(e);
    } catch (a) {
      ke(t, t.return, a);
    }
  }
  function M$(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Fp()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Fp()), t;
      default:
        throw Error(i(435, e.tag));
    }
  }
  function Jl(e, t) {
    var a = M$(e);
    t.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var c = V$.bind(null, e, l);
        l.then(c, c);
      }
    });
  }
  function zt(e, t) {
    var a = t.deletions;
    if (a !== null) for (var l = 0; l < a.length; l++) {
      var c = a[l], f = e, m = t, v = m;
      e: for (; v !== null; ) {
        switch (v.tag) {
          case 27:
            if (Fn(v.type)) {
              Le = v.stateNode, $t = !1;
              break e;
            }
            break;
          case 5:
            Le = v.stateNode, $t = !1;
            break e;
          case 3:
          case 4:
            Le = v.stateNode.containerInfo, $t = !0;
            break e;
        }
        v = v.return;
      }
      if (Le === null) throw Error(i(160));
      th(f, m, c), Le = null, $t = !1, f = c.alternate, f !== null && (f.return = null), c.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) ah(t, e), t = t.sibling;
  }
  var an = null;
  function ah(e, t) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        zt(t, e), Tt(e), l & 4 && (Yn(3, e, e.return), sr(3, e), Yn(5, e, e.return));
        break;
      case 1:
        zt(t, e), Tt(e), l & 512 && (Fe || a === null || dn(a, a.return)), l & 64 && En && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var c = an;
        if (zt(t, e), Tt(e), l & 512 && (Fe || a === null || dn(a, a.return)), l & 4) {
          var f = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null) if (l === null) if (e.stateNode === null) {
            e: {
              l = e.type, a = e.memoizedProps, c = c.ownerDocument || c;
              t: switch (l) {
                case "title":
                  f = c.getElementsByTagName("title")[0], (!f || f[Ma] || f[lt] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = c.createElement(l), c.head.insertBefore(f, c.querySelector("head > title"))), st(f, l, a), f[lt] = e, it(f), l = f;
                  break e;
                case "link":
                  var m = rg("link", "href", c).get(l + (a.href || ""));
                  if (m) {
                    for (var v = 0; v < m.length; v++) if (f = m[v], f.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && f.getAttribute("rel") === (a.rel == null ? null : a.rel) && f.getAttribute("title") === (a.title == null ? null : a.title) && f.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                      m.splice(v, 1);
                      break t;
                    }
                  }
                  f = c.createElement(l), st(f, l, a), c.head.appendChild(f);
                  break;
                case "meta":
                  if (m = rg("meta", "content", c).get(l + (a.content || ""))) {
                    for (v = 0; v < m.length; v++) if (f = m[v], f.getAttribute("content") === (a.content == null ? null : "" + a.content) && f.getAttribute("name") === (a.name == null ? null : a.name) && f.getAttribute("property") === (a.property == null ? null : a.property) && f.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && f.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                      m.splice(v, 1);
                      break t;
                    }
                  }
                  f = c.createElement(l), st(f, l, a), c.head.appendChild(f);
                  break;
                default:
                  throw Error(i(468, l));
              }
              f[lt] = e, it(f), l = f;
            }
            e.stateNode = l;
          } else lg(c, e.type, e.stateNode);
          else e.stateNode = ag(c, l, e.memoizedProps);
          else f !== l ? (f === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : f.count--, l === null ? lg(c, e.type, e.stateNode) : ag(c, l, e.memoizedProps)) : l === null && e.stateNode !== null && ds(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        zt(t, e), Tt(e), l & 512 && (Fe || a === null || dn(a, a.return)), a !== null && l & 4 && ds(e, e.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (zt(t, e), Tt(e), l & 512 && (Fe || a === null || dn(a, a.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Bi(c, "");
          } catch (Y) {
            ke(e, e.return, Y);
          }
        }
        l & 4 && e.stateNode != null && (c = e.memoizedProps, ds(e, c, a !== null ? a.memoizedProps : c)), l & 1024 && (ps = !0);
        break;
      case 6:
        if (zt(t, e), Tt(e), l & 4) {
          if (e.stateNode === null) throw Error(i(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (Y) {
            ke(e, e.return, Y);
          }
        }
        break;
      case 3:
        if (so = null, c = an, an = uo(t.containerInfo), zt(t, e), an = c, Tt(e), l & 4 && a !== null && a.memoizedState.isDehydrated) try {
          ba(t.containerInfo);
        } catch (Y) {
          ke(e, e.return, Y);
        }
        ps && (ps = !1, rh(e));
        break;
      case 4:
        l = an, an = uo(e.stateNode.containerInfo), zt(t, e), Tt(e), an = l;
        break;
      case 12:
        zt(t, e), Tt(e);
        break;
      case 31:
        zt(t, e), Tt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Jl(e, l)));
        break;
      case 13:
        zt(t, e), Tt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Kl = Ut()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Jl(e, l)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var h = a !== null && a.memoizedState !== null, O = En, D = Fe;
        if (En = O || c, Fe = D || h, zt(t, e), Fe = D, En = O, Tt(e), l & 8192) e: for (t = e.stateNode, t._visibility = c ? t._visibility & -2 : t._visibility | 1, c && (a === null || h || En || Fe || Oi(e)), a = null, t = e; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (a === null) {
              h = a = t;
              try {
                if (f = h.stateNode, c) m = f.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                else {
                  v = h.stateNode;
                  var Z = h.memoizedProps.style, N = Z != null && Z.hasOwnProperty("display") ? Z.display : null;
                  v.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                }
              } catch (Y) {
                ke(h, h.return, Y);
              }
            }
          } else if (t.tag === 6) {
            if (a === null) {
              h = t;
              try {
                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
              } catch (Y) {
                ke(h, h.return, Y);
              }
            }
          } else if (t.tag === 18) {
            if (a === null) {
              h = t;
              try {
                var x = h.stateNode;
                c ? Xh(x, !0) : Xh(h.stateNode, !1);
              } catch (Y) {
                ke(h, h.return, Y);
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break e;
            a === t && (a = null), t = t.return;
          }
          a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
        }
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, Jl(e, a))));
        break;
      case 19:
        zt(t, e), Tt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Jl(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        zt(t, e), Tt(e);
    }
  }
  function Tt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (Kp(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(i(160));
        switch (a.tag) {
          case 27:
            var c = a.stateNode;
            Vl(e, ms(e), c);
            break;
          case 5:
            var f = a.stateNode;
            a.flags & 32 && (Bi(f, ""), a.flags &= -33), Vl(e, ms(e), f);
            break;
          case 3:
          case 4:
            var m = a.stateNode.containerInfo;
            vs(e, ms(e), m);
            break;
          default:
            throw Error(i(161));
        }
      } catch (v) {
        ke(e, e.return, v);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function rh(e) {
    if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
      var t = e;
      rh(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
    }
  }
  function On(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) Wp(e, t.alternate, t), t = t.sibling;
  }
  function Oi(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Yn(4, t, t.return), Oi(t);
          break;
        case 1:
          dn(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Jp(t, t.return, a), Oi(t);
          break;
        case 27:
          br(t.stateNode);
        case 26:
        case 5:
          dn(t, t.return), Oi(t);
          break;
        case 22:
          t.memoizedState === null && Oi(t);
          break;
        case 30:
          Oi(t);
          break;
        default:
          Oi(t);
      }
      e = e.sibling;
    }
  }
  function Nn(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, c = e, f = t, m = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Nn(c, f, a), sr(4, f);
          break;
        case 1:
          if (Nn(c, f, a), l = f, c = l.stateNode, typeof c.componentDidMount == "function") try {
            c.componentDidMount();
          } catch (O) {
            ke(l, l.return, O);
          }
          if (l = f, c = l.updateQueue, c !== null) {
            var v = l.stateNode;
            try {
              var h = c.shared.hiddenCallbacks;
              if (h !== null) for (c.shared.hiddenCallbacks = null, c = 0; c < h.length; c++) Iv(h[c], v);
            } catch (O) {
              ke(l, l.return, O);
            }
          }
          a && m & 64 && Vp(f), fr(f, f.return);
          break;
        case 27:
          Pp(f);
        case 26:
        case 5:
          Nn(c, f, a), a && l === null && m & 4 && Xp(f), fr(f, f.return);
          break;
        case 12:
          Nn(c, f, a);
          break;
        case 31:
          Nn(c, f, a), a && m & 4 && nh(c, f);
          break;
        case 13:
          Nn(c, f, a), a && m & 4 && ih(c, f);
          break;
        case 22:
          f.memoizedState === null && Nn(c, f, a), fr(f, f.return);
          break;
        case 30:
          break;
        default:
          Nn(c, f, a);
      }
      t = t.sibling;
    }
  }
  function hs(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Pa(a));
  }
  function gs(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Pa(e));
  }
  function rn(e, t, a, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) lh(e, t, a, l), t = t.sibling;
  }
  function lh(e, t, a, l) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        rn(e, t, a, l), c & 2048 && sr(9, t);
        break;
      case 1:
        rn(e, t, a, l);
        break;
      case 3:
        rn(e, t, a, l), c & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Pa(e)));
        break;
      case 12:
        if (c & 2048) {
          rn(e, t, a, l), e = t.stateNode;
          try {
            var f = t.memoizedProps, m = f.id, v = f.onPostCommit;
            typeof v == "function" && v(m, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (h) {
            ke(t, t.return, h);
          }
        } else rn(e, t, a, l);
        break;
      case 31:
        rn(e, t, a, l);
        break;
      case 13:
        rn(e, t, a, l);
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, m = t.alternate, t.memoizedState !== null ? f._visibility & 2 ? rn(e, t, a, l) : dr(e, t) : f._visibility & 2 ? rn(e, t, a, l) : (f._visibility |= 2, ca(e, t, a, l, (t.subtreeFlags & 10256) !== 0 || !1)), c & 2048 && hs(m, t);
        break;
      case 24:
        rn(e, t, a, l), c & 2048 && gs(t.alternate, t);
        break;
      default:
        rn(e, t, a, l);
    }
  }
  function ca(e, t, a, l, c) {
    for (c = c && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var f = e, m = t, v = a, h = l, O = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          ca(f, m, v, h, c), sr(8, m);
          break;
        case 23:
          break;
        case 22:
          var D = m.stateNode;
          m.memoizedState !== null ? D._visibility & 2 ? ca(f, m, v, h, c) : dr(f, m) : (D._visibility |= 2, ca(f, m, v, h, c)), c && O & 2048 && hs(m.alternate, m);
          break;
        case 24:
          ca(f, m, v, h, c), c && O & 2048 && gs(m.alternate, m);
          break;
        default:
          ca(f, m, v, h, c);
      }
      t = t.sibling;
    }
  }
  function dr(e, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var a = e, l = t, c = l.flags;
      switch (l.tag) {
        case 22:
          dr(a, l), c & 2048 && hs(l.alternate, l);
          break;
        case 24:
          dr(a, l), c & 2048 && gs(l.alternate, l);
          break;
        default:
          dr(a, l);
      }
      t = t.sibling;
    }
  }
  var mr = 8192;
  function sa(e, t, a) {
    if (e.subtreeFlags & mr) for (e = e.child; e !== null; ) oh(e, t, a), e = e.sibling;
  }
  function oh(e, t, a) {
    switch (e.tag) {
      case 26:
        sa(e, t, a), e.flags & mr && e.memoizedState !== null && $1(a, an, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        sa(e, t, a);
        break;
      case 3:
      case 4:
        var l = an;
        an = uo(e.stateNode.containerInfo), sa(e, t, a), an = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = mr, mr = 16777216, sa(e, t, a), mr = l) : sa(e, t, a));
        break;
      default:
        sa(e, t, a);
    }
  }
  function uh(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function vr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var l = t[a];
        at = l, sh(l, e);
      }
      uh(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) ch(e), e = e.sibling;
  }
  function ch(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        vr(e), e.flags & 2048 && Yn(9, e, e.return);
        break;
      case 3:
        vr(e);
        break;
      case 12:
        vr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Xl(e)) : vr(e);
        break;
      default:
        vr(e);
    }
  }
  function Xl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var l = t[a];
        at = l, sh(l, e);
      }
      uh(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Yn(8, t, t.return), Xl(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Xl(t));
          break;
        default:
          Xl(t);
      }
      e = e.sibling;
    }
  }
  function sh(e, t) {
    for (; at !== null; ) {
      var a = at;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Yn(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Pa(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, at = l;
      else e: for (a = e; at !== null; ) {
        l = at;
        var c = l.sibling, f = l.return;
        if (eh(l), l === a) {
          at = null;
          break e;
        }
        if (c !== null) {
          c.return = f, at = c;
          break e;
        }
        at = f;
      }
    }
  }
  var I$ = {
    getCacheForType: function(e) {
      var t = ut(Xe), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return ut(Xe).controller.signal;
    }
  }, q$ = typeof WeakMap == "function" ? WeakMap : Map, $e = 0, Ae = null, de = null, ve = 0, Ee = 0, Ct = null, Qn = !1, fa = !1, ys = !1, Un = 0, Ge = 0, Vn = 0, Ni = 0, _s = 0, Mt = 0, da = 0, pr = null, wt = null, bs = !1, Kl = 0, fh = 0, Pl = 1 / 0, Fl = null, Jn = null, We = 0, Xn = null, ma = null, xn = 0, Ss = 0, $s = null, dh = null, hr = 0, zs = null;
  function Jt() {
    return ($e & 2) !== 0 && ve !== 0 ? ve & -ve : I.T !== null ? Ns() : xm();
  }
  function mh() {
    if (Mt === 0) if ((ve & 536870912) === 0 || ge) {
      var e = rl;
      rl <<= 1, (rl & 3932160) === 0 && (rl = 262144), Mt = e;
    } else Mt = 536870912;
    return e = Zt.current, e !== null && (e.flags |= 32), Mt;
  }
  function Et(e, t, a) {
    (e === Ae && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null) && (va(e, 0), Kn(e, ve, Mt, !1)), ul(e, a), (($e & 2) === 0 || e !== Ae) && (e === Ae && (($e & 2) === 0 && (Ni |= a), Ge === 4 && Kn(e, ve, Mt, !1)), jn(e));
  }
  function vh(e, t, a) {
    if (($e & 6) !== 0) throw Error(i(327));
    var l = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ra(e, t), c = l ? B$(e, t) : ws(e, t, !0), f = l;
    do {
      if (c === 0) {
        fa && !l && Kn(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, f && !H$(a)) {
          c = ws(e, t, !1), f = !1;
          continue;
        }
        if (c === 2) {
          if (f = t, e.errorRecoveryDisabledLanes & f) var m = 0;
          else m = e.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            t = m;
            e: {
              var v = e;
              c = pr;
              var h = v.current.memoizedState.isDehydrated;
              if (h && (va(v, m).flags |= 256), m = ws(v, m, !1), m !== 2) {
                if (ys && !h) {
                  v.errorRecoveryDisabledLanes |= f, Ni |= f, c = 4;
                  break e;
                }
                f = wt, wt = c, f !== null && (wt === null ? wt = f : wt.push.apply(wt, f));
              }
              c = m;
            }
            if (f = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          va(e, 0), Kn(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, f = c, f) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Kn(l, t, Mt, !Qn);
              break e;
            case 2:
              wt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && (c = Kl + 300 - Ut(), 10 < c)) {
            if (Kn(l, t, Mt, !Qn), ol(l, 0, !0) !== 0) break e;
            xn = t, l.timeoutHandle = Qh(ph.bind(null, l, a, wt, Fl, bs, t, Mt, Ni, da, Qn, f, "Throttled", -0, 0), c);
            break e;
          }
          ph(l, a, wt, Fl, bs, t, Mt, Ni, da, Qn, f, null, -0, 0);
        }
      }
      break;
    } while (!0);
    jn(e);
  }
  function ph(e, t, a, l, c, f, m, v, h, O, D, Z, N, x) {
    if (e.timeoutHandle = -1, Z = t.subtreeFlags, Z & 8192 || (Z & 16785408) === 16785408) {
      Z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: hn
      }, oh(t, f, Z);
      var Y = (f & 62914560) === f ? Kl - Ut() : (f & 4194048) === f ? fh - Ut() : 0;
      if (Y = z1(Z, Y), Y !== null) {
        xn = f, e.cancelPendingCommit = Y(zh.bind(null, e, t, f, a, l, c, m, v, h, D, Z, null, N, x)), Kn(e, f, m, !O);
        return;
      }
    }
    zh(e, t, f, a, l, c, m, v, h);
  }
  function H$(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null))) for (var l = 0; l < a.length; l++) {
        var c = a[l], f = c.getSnapshot;
        c = c.value;
        try {
          if (!Dt(f(), c)) return !1;
        } catch {
          return !1;
        }
      }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null) a.return = t, t = a;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Kn(e, t, a, l) {
    t &= ~_s, t &= ~Ni, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var c = t; 0 < c; ) {
      var f = 31 - jt(c), m = 1 << f;
      l[f] = -1, c &= ~m;
    }
    a !== 0 && km(e, a, t);
  }
  function Wl() {
    return ($e & 6) === 0 ? (gr(0, !1), !1) : !0;
  }
  function Ts() {
    if (de !== null) {
      if (Ee === 0) var e = de.return;
      else e = de, bn = yi = null, qc(e), aa = null, Wa = 0, e = de;
      for (; e !== null; ) Qp(e.alternate, e), e = e.return;
      de = null;
    }
  }
  function va(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, r1(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), xn = 0, Ts(), Ae = e, de = a = yn(e.current, null), ve = t, Ee = 0, Ct = null, Qn = !1, fa = Ra(e, t), ys = !1, da = Mt = _s = Ni = Vn = Ge = 0, wt = pr = null, bs = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0) for (e = e.entanglements, l &= t; 0 < l; ) {
      var c = 31 - jt(l), f = 1 << c;
      t |= e[c], l &= ~f;
    }
    return Un = t, bl(), a;
  }
  function hh(e, t) {
    ne = null, I.H = or, t === ia || t === Ol ? (t = Zv(), Ee = 3) : t === Oc ? (t = Zv(), Ee = 4) : Ee = t === ns ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ct = t, de === null && (Ge = 1, Ll(e, Bt(t, e.current)));
  }
  function gh() {
    var e = Zt.current;
    return e === null ? !0 : (ve & 4194048) === ve ? Vt === null : (ve & 62914560) === ve || (ve & 536870912) !== 0 ? e === Vt : !1;
  }
  function yh() {
    var e = I.H;
    return I.H = or, e === null ? or : e;
  }
  function _h() {
    var e = I.A;
    return I.A = I$, e;
  }
  function eo() {
    Ge = 4, Qn || (ve & 4194048) !== ve && Zt.current !== null || (fa = !0), (Vn & 134217727) === 0 && (Ni & 134217727) === 0 || Ae === null || Kn(Ae, ve, Mt, !1);
  }
  function ws(e, t, a) {
    var l = $e;
    $e |= 2;
    var c = yh(), f = _h();
    (Ae !== e || ve !== t) && (Fl = null, va(e, t)), t = !1;
    var m = Ge;
    e: do
      try {
        if (Ee !== 0 && de !== null) {
          var v = de, h = Ct;
          switch (Ee) {
            case 8:
              Ts(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Zt.current === null && (t = !0);
              var O = Ee;
              if (Ee = 0, Ct = null, pa(e, v, h, O), a && fa) {
                m = 0;
                break e;
              }
              break;
            default:
              O = Ee, Ee = 0, Ct = null, pa(e, v, h, O);
          }
        }
        L$(), m = Ge;
        break;
      } catch (D) {
        hh(e, D);
      }
    while (!0);
    return t && e.shellSuspendCounter++, bn = yi = null, $e = l, I.H = c, I.A = f, de === null && (Ae = null, ve = 0, bl()), m;
  }
  function L$() {
    for (; de !== null; ) bh(de);
  }
  function B$(e, t) {
    var a = $e;
    $e |= 2;
    var l = yh(), c = _h();
    Ae !== e || ve !== t ? (Fl = null, Pl = Ut() + 500, va(e, t)) : fa = Ra(e, t);
    e: do
      try {
        if (Ee !== 0 && de !== null) {
          t = de;
          var f = Ct;
          t: switch (Ee) {
            case 1:
              Ee = 0, Ct = null, pa(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (Dv(f)) {
                Ee = 0, Ct = null, Sh(t);
                break;
              }
              t = function() {
                Ee !== 2 && Ee !== 9 || Ae !== e || (Ee = 7), jn(e);
              }, f.then(t, t);
              break e;
            case 3:
              Ee = 7;
              break e;
            case 4:
              Ee = 5;
              break e;
            case 7:
              Dv(f) ? (Ee = 0, Ct = null, Sh(t)) : (Ee = 0, Ct = null, pa(e, t, f, 7));
              break;
            case 5:
              var m = null;
              switch (de.tag) {
                case 26:
                  m = de.memoizedState;
                case 5:
                case 27:
                  var v = de;
                  if (m ? og(m) : v.stateNode.complete) {
                    Ee = 0, Ct = null;
                    var h = v.sibling;
                    if (h !== null) de = h;
                    else {
                      var O = v.return;
                      O !== null ? (de = O, to(O)) : de = null;
                    }
                    break t;
                  }
              }
              Ee = 0, Ct = null, pa(e, t, f, 5);
              break;
            case 6:
              Ee = 0, Ct = null, pa(e, t, f, 6);
              break;
            case 8:
              Ts(), Ge = 6;
              break e;
            default:
              throw Error(i(462));
          }
        }
        G$();
        break;
      } catch (D) {
        hh(e, D);
      }
    while (!0);
    return bn = yi = null, I.H = l, I.A = c, $e = a, de !== null ? 0 : (Ae = null, ve = 0, bl(), Ge);
  }
  function G$() {
    for (; de !== null && !S0(); ) bh(de);
  }
  function bh(e) {
    var t = Gp(e.alternate, e, Un);
    e.memoizedProps = e.pendingProps, t === null ? to(e) : de = t;
  }
  function Sh(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Mp(a, t, t.pendingProps, t.type, void 0, ve);
        break;
      case 11:
        t = Mp(a, t, t.pendingProps, t.type.render, t.ref, ve);
        break;
      case 5:
        qc(t);
      default:
        Qp(a, t), t = de = $v(t, Un), t = Gp(a, t, Un);
    }
    e.memoizedProps = e.pendingProps, t === null ? to(e) : de = t;
  }
  function pa(e, t, a, l) {
    bn = yi = null, qc(t), aa = null, Wa = 0;
    var c = t.return;
    try {
      if (j$(e, c, t, a, ve)) {
        Ge = 1, Ll(e, Bt(a, e.current)), de = null;
        return;
      }
    } catch (f) {
      if (c !== null) throw de = c, f;
      Ge = 1, Ll(e, Bt(a, e.current)), de = null;
      return;
    }
    t.flags & 32768 ? (ge || l === 1 ? e = !0 : fa || (ve & 536870912) !== 0 ? e = !1 : (Qn = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Zt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), $h(t, e)) : to(t);
  }
  function to(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        $h(t, Qn);
        return;
      }
      e = t.return;
      var a = Z$(t.alternate, t, Un);
      if (a !== null) {
        de = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        de = t;
        return;
      }
      de = t = e;
    } while (t !== null);
    Ge === 0 && (Ge = 5);
  }
  function $h(e, t) {
    do {
      var a = R$(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, de = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        de = e;
        return;
      }
      de = e = a;
    } while (e !== null);
    Ge = 6, de = null;
  }
  function zh(e, t, a, l, c, f, m, v, h) {
    e.cancelPendingCommit = null;
    do
      no();
    while (We !== 0);
    if (($e & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (f = t.lanes | t.childLanes, f |= mc, x0(e, a, f, m, v, h), e === Ae && (de = Ae = null, ve = 0), ma = t, Xn = e, xn = a, Ss = f, $s = c, dh = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, J$(il, function() {
        return Oh(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = I.T, I.T = null, c = B.p, B.p = 2, m = $e, $e |= 4;
        try {
          C$(e, t, a);
        } finally {
          $e = m, B.p = c, I.T = l;
        }
      }
      We = 1, Th(), wh(), Eh();
    }
  }
  function Th() {
    if (We === 1) {
      We = 0;
      var e = Xn, t = ma, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = I.T, I.T = null;
        var l = B.p;
        B.p = 2;
        var c = $e;
        $e |= 4;
        try {
          ah(t, e);
          var f = Rs, m = mv(e.containerInfo), v = f.focusedElem, h = f.selectionRange;
          if (m !== v && v && v.ownerDocument && dv(v.ownerDocument.documentElement, v)) {
            if (h !== null && uc(v)) {
              var O = h.start, D = h.end;
              if (D === void 0 && (D = O), "selectionStart" in v) v.selectionStart = O, v.selectionEnd = Math.min(D, v.value.length);
              else {
                var Z = v.ownerDocument || document, N = Z && Z.defaultView || window;
                if (N.getSelection) {
                  var x = N.getSelection(), Y = v.textContent.length, P = Math.min(h.start, Y), De = h.end === void 0 ? P : Math.min(h.end, Y);
                  !x.extend && P > De && (m = De, De = P, P = m);
                  var z = fv(v, P), b = fv(v, De);
                  if (z && b && (x.rangeCount !== 1 || x.anchorNode !== z.node || x.anchorOffset !== z.offset || x.focusNode !== b.node || x.focusOffset !== b.offset)) {
                    var k = Z.createRange();
                    k.setStart(z.node, z.offset), x.removeAllRanges(), P > De ? (x.addRange(k), x.extend(b.node, b.offset)) : (k.setEnd(b.node, b.offset), x.addRange(k));
                  }
                }
              }
            }
            for (Z = [], x = v; x = x.parentNode; ) x.nodeType === 1 && Z.push({
              element: x,
              left: x.scrollLeft,
              top: x.scrollTop
            });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < Z.length; v++) {
              var A = Z[v];
              A.element.scrollLeft = A.left, A.element.scrollTop = A.top;
            }
          }
          po = !!Zs, Rs = Zs = null;
        } finally {
          $e = c, B.p = l, I.T = a;
        }
      }
      e.current = t, We = 2;
    }
  }
  function wh() {
    if (We === 2) {
      We = 0;
      var e = Xn, t = ma, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = I.T, I.T = null;
        var l = B.p;
        B.p = 2;
        var c = $e;
        $e |= 4;
        try {
          Wp(e, t.alternate, t);
        } finally {
          $e = c, B.p = l, I.T = a;
        }
      }
      We = 3;
    }
  }
  function Eh() {
    if (We === 4 || We === 3) {
      We = 0, $0();
      var e = Xn, t = ma, a = xn, l = dh;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? We = 5 : (We = 0, ma = Xn = null, kh(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Jn = null), Bu(a), t = t.stateNode, xt && typeof xt.onCommitFiberRoot == "function") try {
        xt.onCommitFiberRoot(Za, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (l !== null) {
        t = I.T, c = B.p, B.p = 2, I.T = null;
        try {
          for (var f = e.onRecoverableError, m = 0; m < l.length; m++) {
            var v = l[m];
            f(v.value, { componentStack: v.stack });
          }
        } finally {
          I.T = t, B.p = c;
        }
      }
      (xn & 3) !== 0 && no(), jn(e), c = e.pendingLanes, (a & 261930) !== 0 && (c & 42) !== 0 ? e === zs ? hr++ : (hr = 0, zs = e) : hr = 0, gr(0, !1);
    }
  }
  function kh(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Pa(t)));
  }
  function no() {
    return Th(), wh(), Eh(), Oh();
  }
  function Oh() {
    if (We !== 5) return !1;
    var e = Xn, t = Ss;
    Ss = 0;
    var a = Bu(xn), l = I.T, c = B.p;
    try {
      B.p = 32 > a ? 32 : a, I.T = null, a = $s, $s = null;
      var f = Xn, m = xn;
      if (We = 0, ma = Xn = null, xn = 0, ($e & 6) !== 0) throw Error(i(331));
      var v = $e;
      if ($e |= 4, ch(f.current), lh(f, f.current, m, a), $e = v, gr(0, !1), xt && typeof xt.onPostCommitFiberRoot == "function") try {
        xt.onPostCommitFiberRoot(Za, f);
      } catch {
      }
      return !0;
    } finally {
      B.p = c, I.T = l, kh(e, t);
    }
  }
  function Nh(e, t, a) {
    t = Bt(a, t), t = ts(e.stateNode, t, 2), e = wi(e, t, 2), e !== null && (ul(e, 2), jn(e));
  }
  function ke(e, t, a) {
    if (e.tag === 3) Nh(e, e, a);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Nh(t, e, a);
        break;
      } else if (t.tag === 1) {
        var l = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Jn === null || !Jn.has(l))) {
          e = Bt(a, e), a = Up(2), l = wi(t, a, 2), l !== null && (xp(a, l, t, e), ul(l, 2), jn(l));
          break;
        }
      }
      t = t.return;
    }
  }
  function Es(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new q$();
      var c = /* @__PURE__ */ new Set();
      l.set(t, c);
    } else c = l.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(t, c));
    c.has(a) || (ys = !0, c.add(a), e = Y$.bind(null, e, t, a), t.then(e, e));
  }
  function Y$(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Ae === e && (ve & a) === a && (Ge === 4 || Ge === 3 && (ve & 62914560) === ve && 300 > Ut() - Kl ? ($e & 2) === 0 && va(e, 0) : _s |= a, da === ve && (da = 0)), jn(e);
  }
  function Uh(e, t) {
    t === 0 && (t = Em()), e = pi(e, t), e !== null && (ul(e, t), jn(e));
  }
  function Q$(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Uh(e, a);
  }
  function V$(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, c = e.memoizedState;
        c !== null && (a = c.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    l !== null && l.delete(t), Uh(e, a);
  }
  function J$(e, t) {
    return qu(e, t);
  }
  var io = null, ha = null, ks = !1, ao = !1, Os = !1, Pn = 0;
  function jn(e) {
    e !== ha && e.next === null && (ha === null ? io = ha = e : ha = ha.next = e), ao = !0, ks || (ks = !0, K$());
  }
  function gr(e, t) {
    if (!Os && ao) {
      Os = !0;
      do
        for (var a = !1, l = io; l !== null; ) {
          if (!t) if (e !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var f = 0;
            else {
              var m = l.suspendedLanes, v = l.pingedLanes;
              f = (1 << 31 - jt(42 | e) + 1) - 1, f &= c & ~(m & ~v), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (a = !0, Ah(l, f));
          } else f = ve, f = ol(l, l === Ae ? f : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (f & 3) === 0 || Ra(l, f) || (a = !0, Ah(l, f));
          l = l.next;
        }
      while (a);
      Os = !1;
    }
  }
  function X$() {
    xh();
  }
  function xh() {
    ao = ks = !1;
    var e = 0;
    Pn !== 0 && a1() && (e = Pn);
    for (var t = Ut(), a = null, l = io; l !== null; ) {
      var c = l.next, f = jh(l, t);
      f === 0 ? (l.next = null, a === null ? io = c : a.next = c, c === null && (ha = a)) : (a = l, (e !== 0 || (f & 3) !== 0) && (ao = !0)), l = c;
    }
    We !== 0 && We !== 5 || gr(e, !1), Pn !== 0 && (Pn = 0);
  }
  function jh(e, t) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var m = 31 - jt(f), v = 1 << m, h = c[m];
      h === -1 ? ((v & a) === 0 || (v & l) !== 0) && (c[m] = U0(v, t)) : h <= t && (e.expiredLanes |= v), f &= ~v;
    }
    if (t = Ae, a = ve, a = ol(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l = e.callbackNode, a === 0 || e === t && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null) return l !== null && l !== null && Hu(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Ra(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (l !== null && Hu(l), Bu(a)) {
        case 2:
        case 8:
          a = Tm;
          break;
        case 32:
          a = il;
          break;
        case 268435456:
          a = wm;
          break;
        default:
          a = il;
      }
      return l = Dh.bind(null, e), a = qu(a, l), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return l !== null && l !== null && Hu(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Dh(e, t) {
    if (We !== 0 && We !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (no() && e.callbackNode !== a) return null;
    var l = ve;
    return l = ol(e, e === Ae ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l === 0 ? null : (vh(e, l, t), jh(e, Ut()), e.callbackNode != null && e.callbackNode === a ? Dh.bind(null, e) : null);
  }
  function Ah(e, t) {
    if (no()) return null;
    vh(e, t, !0);
  }
  function K$() {
    l1(function() {
      ($e & 6) !== 0 ? qu(zm, X$) : xh();
    });
  }
  function Ns() {
    if (Pn === 0) {
      var e = ta;
      e === 0 && (e = al, al <<= 1, (al & 261888) === 0 && (al = 256)), Pn = e;
    }
    return Pn;
  }
  function Zh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : dl("" + e);
  }
  function Rh(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function P$(e, t, a, l, c) {
    if (t === "submit" && a && a.stateNode === c) {
      var f = Zh((c[bt] || null).action), m = l.submitter;
      m && (t = (t = m[bt] || null) ? Zh(t.formAction) : m.getAttribute("formAction"), t !== null && (f = t, m = null));
      var v = new hl("action", "action", null, l, c);
      e.push({
        event: v,
        listeners: [{
          instance: null,
          listener: function() {
            if (l.defaultPrevented) {
              if (Pn !== 0) {
                var h = m ? Rh(c, m) : new FormData(c);
                Xc(a, {
                  pending: !0,
                  data: h,
                  method: c.method,
                  action: f
                }, null, h);
              }
            } else typeof f == "function" && (v.preventDefault(), h = m ? Rh(c, m) : new FormData(c), Xc(a, {
              pending: !0,
              data: h,
              method: c.method,
              action: f
            }, f, h));
          },
          currentTarget: c
        }]
      });
    }
  }
  for (var Us = 0; Us < dc.length; Us++) {
    var xs = dc[Us];
    nn(xs.toLowerCase(), "on" + (xs[0].toUpperCase() + xs.slice(1)));
  }
  nn(hv, "onAnimationEnd"), nn(gv, "onAnimationIteration"), nn(yv, "onAnimationStart"), nn("dblclick", "onDoubleClick"), nn("focusin", "onFocus"), nn("focusout", "onBlur"), nn(d$, "onTransitionRun"), nn(m$, "onTransitionStart"), nn(v$, "onTransitionCancel"), nn(_v, "onTransitionEnd"), Hi("onMouseEnter", ["mouseout", "mouseover"]), Hi("onMouseLeave", ["mouseout", "mouseover"]), Hi("onPointerEnter", ["pointerout", "pointerover"]), Hi("onPointerLeave", ["pointerout", "pointerover"]), fi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), fi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), fi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), fi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), fi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), fi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var yr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), F$ = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yr));
  function Ch(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], c = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (t) for (var m = l.length - 1; 0 <= m; m--) {
          var v = l[m], h = v.instance, O = v.currentTarget;
          if (v = v.listener, h !== f && c.isPropagationStopped()) break e;
          f = v, c.currentTarget = O;
          try {
            f(c);
          } catch (D) {
            _l(D);
          }
          c.currentTarget = null, f = h;
        }
        else for (m = 0; m < l.length; m++) {
          if (v = l[m], h = v.instance, O = v.currentTarget, v = v.listener, h !== f && c.isPropagationStopped()) break e;
          f = v, c.currentTarget = O;
          try {
            f(c);
          } catch (D) {
            _l(D);
          }
          c.currentTarget = null, f = h;
        }
      }
    }
  }
  function me(e, t) {
    var a = t[Gu];
    a === void 0 && (a = t[Gu] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (Ih(t, e, 2, !1), a.add(l));
  }
  function js(e, t, a) {
    var l = 0;
    t && (l |= 4), Ih(a, e, l, t);
  }
  var ro = "_reactListening" + Math.random().toString(36).slice(2);
  function Mh(e) {
    if (!e[ro]) {
      e[ro] = !0, Am.forEach(function(a) {
        a !== "selectionchange" && (F$.has(a) || js(a, !1, e), js(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ro] || (t[ro] = !0, js("selectionchange", !1, t));
    }
  }
  function Ih(e, t, a, l) {
    switch (dg(t)) {
      case 2:
        var c = O1;
        break;
      case 8:
        c = N1;
        break;
      default:
        c = Vs;
    }
    a = c.bind(null, t, a, e), c = void 0, !Wu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), l ? c !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: c
    }) : e.addEventListener(t, a, !0) : c !== void 0 ? e.addEventListener(t, a, { passive: c }) : e.addEventListener(t, a, !1);
  }
  function Ds(e, t, a, l, c) {
    var f = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null) e: for (; ; ) {
      if (l === null) return;
      var m = l.tag;
      if (m === 3 || m === 4) {
        var v = l.stateNode.containerInfo;
        if (v === c) break;
        if (m === 4) for (m = l.return; m !== null; ) {
          var h = m.tag;
          if ((h === 3 || h === 4) && m.stateNode.containerInfo === c) return;
          m = m.return;
        }
        for (; v !== null; ) {
          if (m = Mi(v), m === null) return;
          if (h = m.tag, h === 5 || h === 6 || h === 26 || h === 27) {
            l = f = m;
            continue e;
          }
          v = v.parentNode;
        }
      }
      l = l.return;
    }
    Qm(function() {
      var O = f, D = Pu(a), Z = [];
      e: {
        var N = bv.get(e);
        if (N !== void 0) {
          var x = hl, Y = e;
          switch (e) {
            case "keypress":
              if (vl(a) === 0) break e;
            case "keydown":
            case "keyup":
              x = X0;
              break;
            case "focusin":
              Y = "focus", x = ic;
              break;
            case "focusout":
              Y = "blur", x = ic;
              break;
            case "beforeblur":
            case "afterblur":
              x = ic;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              x = Xm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = L0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = K0;
              break;
            case hv:
            case gv:
            case yv:
              x = B0;
              break;
            case _v:
              x = P0;
              break;
            case "scroll":
            case "scrollend":
              x = H0;
              break;
            case "wheel":
              x = F0;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = G0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = Pm;
              break;
            case "toggle":
            case "beforetoggle":
              x = W0;
          }
          var P = (t & 4) !== 0, De = !P && (e === "scroll" || e === "scrollend"), z = P ? N !== null ? N + "Capture" : null : N;
          P = [];
          for (var b = O, k; b !== null; ) {
            var A = b;
            if (k = A.stateNode, A = A.tag, A !== 5 && A !== 26 && A !== 27 || k === null || z === null || (A = qa(b, z), A != null && P.push(_r(b, A, k))), De) break;
            b = b.return;
          }
          0 < P.length && (N = new x(N, Y, null, a, D), Z.push({
            event: N,
            listeners: P
          }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (N = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", N && a !== Ku && (Y = a.relatedTarget || a.fromElement) && (Mi(Y) || Y[Ca])) break e;
          if ((x || N) && (N = D.window === D ? D : (N = D.ownerDocument) ? N.defaultView || N.parentWindow : window, x ? (Y = a.relatedTarget || a.toElement, x = O, Y = Y ? Mi(Y) : null, Y !== null && (De = d(Y), P = Y.tag, Y !== De || P !== 5 && P !== 27 && P !== 6) && (Y = null)) : (x = null, Y = O), x !== Y)) {
            if (P = Xm, A = "onMouseLeave", z = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (P = Pm, A = "onPointerLeave", z = "onPointerEnter", b = "pointer"), De = x == null ? N : Ia(x), k = Y == null ? N : Ia(Y), N = new P(A, b + "leave", x, a, D), N.target = De, N.relatedTarget = k, A = null, Mi(D) === O && (P = new P(z, b + "enter", Y, a, D), P.target = k, P.relatedTarget = De, A = P), De = A, x && Y) t: {
              for (P = W$, z = x, b = Y, k = 0, A = z; A; A = P(A)) k++;
              A = 0;
              for (var J = b; J; J = P(J)) A++;
              for (; 0 < k - A; ) z = P(z), k--;
              for (; 0 < A - k; ) b = P(b), A--;
              for (; k--; ) {
                if (z === b || b !== null && z === b.alternate) {
                  P = z;
                  break t;
                }
                z = P(z), b = P(b);
              }
              P = null;
            }
            else P = null;
            x !== null && qh(Z, N, x, P, !1), Y !== null && De !== null && qh(Z, De, Y, P, !0);
          }
        }
        e: {
          if (N = O ? Ia(O) : window, x = N.nodeName && N.nodeName.toLowerCase(), x === "select" || x === "input" && N.type === "file") var _e = rv;
          else if (iv(N)) if (lv) _e = c$;
          else {
            _e = o$;
            var Q = l$;
          }
          else x = N.nodeName, !x || x.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? O && Xu(O.elementType) && (_e = rv) : _e = u$;
          if (_e && (_e = _e(e, O))) {
            av(Z, _e, a, D);
            break e;
          }
          Q && Q(e, N, O), e === "focusout" && O && N.type === "number" && O.memoizedProps.value != null && Ju(N, "number", N.value);
        }
        switch (Q = O ? Ia(O) : window, e) {
          case "focusin":
            (iv(Q) || Q.contentEditable === "true") && (Vi = Q, cc = O, Ja = null);
            break;
          case "focusout":
            Ja = cc = Vi = null;
            break;
          case "mousedown":
            sc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            sc = !1, vv(Z, a, D);
            break;
          case "selectionchange":
            if (f$) break;
          case "keydown":
          case "keyup":
            vv(Z, a, D);
        }
        var ae;
        if (rc) e: {
          switch (e) {
            case "compositionstart":
              var pe = "onCompositionStart";
              break e;
            case "compositionend":
              pe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              pe = "onCompositionUpdate";
              break e;
          }
          pe = void 0;
        }
        else Qi ? tv(e, a) && (pe = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (pe = "onCompositionStart");
        pe && (Fm && a.locale !== "ko" && (Qi || pe !== "onCompositionStart" ? pe === "onCompositionEnd" && Qi && (ae = Vm()) : (Cn = D, ec = "value" in Cn ? Cn.value : Cn.textContent, Qi = !0)), Q = lo(O, pe), 0 < Q.length && (pe = new Km(pe, e, null, a, D), Z.push({
          event: pe,
          listeners: Q
        }), ae ? pe.data = ae : (ae = nv(a), ae !== null && (pe.data = ae)))), (ae = t$ ? n$(e, a) : i$(e, a)) && (pe = lo(O, "onBeforeInput"), 0 < pe.length && (Q = new Km("onBeforeInput", "beforeinput", null, a, D), Z.push({
          event: Q,
          listeners: pe
        }), Q.data = ae)), P$(Z, e, O, a, D);
      }
      Ch(Z, t);
    });
  }
  function _r(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function lo(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var c = e, f = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || f === null || (c = qa(e, a), c != null && l.unshift(_r(e, c, f)), c = qa(e, t), c != null && l.push(_r(e, c, f))), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function W$(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function qh(e, t, a, l, c) {
    for (var f = t._reactName, m = []; a !== null && a !== l; ) {
      var v = a, h = v.alternate, O = v.stateNode;
      if (v = v.tag, h !== null && h === l) break;
      v !== 5 && v !== 26 && v !== 27 || O === null || (h = O, c ? (O = qa(a, f), O != null && m.unshift(_r(a, O, h))) : c || (O = qa(a, f), O != null && m.push(_r(a, O, h)))), a = a.return;
    }
    m.length !== 0 && e.push({
      event: t,
      listeners: m
    });
  }
  var e1 = /\r\n?/g, t1 = /\u0000|\uFFFD/g;
  function Hh(e) {
    return (typeof e == "string" ? e : "" + e).replace(e1, `
`).replace(t1, "");
  }
  function Lh(e, t) {
    return t = Hh(t), Hh(e) === t;
  }
  function je(e, t, a, l, c, f) {
    switch (a) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Bi(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Bi(e, "" + l);
        break;
      case "className":
        sl(e, "class", l);
        break;
      case "tabIndex":
        sl(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        sl(e, a, l);
        break;
      case "style":
        Gm(e, l, f);
        break;
      case "data":
        if (t !== "object") {
          sl(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = dl("" + l), e.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof f == "function" && (a === "formAction" ? (t !== "input" && je(e, t, "name", c.name, c, null), je(e, t, "formEncType", c.formEncType, c, null), je(e, t, "formMethod", c.formMethod, c, null), je(e, t, "formTarget", c.formTarget, c, null)) : (je(e, t, "encType", c.encType, c, null), je(e, t, "method", c.method, c, null), je(e, t, "target", c.target, c, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = dl("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = hn);
        break;
      case "onScroll":
        l != null && me("scroll", e);
        break;
      case "onScrollEnd":
        l != null && me("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (a = l.__html, a != null) {
            if (c.children != null) throw Error(i(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = dl("" + l), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "" + l) : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(a) : e.setAttribute(a, l);
        break;
      case "popover":
        me("beforetoggle", e), me("toggle", e), cl(e, "popover", l);
        break;
      case "xlinkActuate":
        pn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        pn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        pn(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        pn(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        pn(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        pn(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        pn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        pn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        pn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        cl(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = I0.get(a) || a, cl(e, a, l));
    }
  }
  function As(e, t, a, l, c, f) {
    switch (a) {
      case "style":
        Gm(e, l, f);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (a = l.__html, a != null) {
            if (c.children != null) throw Error(i(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Bi(e, l) : (typeof l == "number" || typeof l == "bigint") && Bi(e, "" + l);
        break;
      case "onScroll":
        l != null && me("scroll", e);
        break;
      case "onScrollEnd":
        l != null && me("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = hn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Zm.hasOwnProperty(a)) e: {
          if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), t = a.slice(2, c ? a.length - 7 : void 0), f = e[bt] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, c), typeof l == "function")) {
            typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, l, c);
            break e;
          }
          a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : cl(e, a, l);
        }
    }
  }
  function st(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        me("error", e), me("load", e);
        var l = !1, c = !1, f;
        for (f in a) if (a.hasOwnProperty(f)) {
          var m = a[f];
          if (m != null) switch (f) {
            case "src":
              l = !0;
              break;
            case "srcSet":
              c = !0;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(i(137, t));
            default:
              je(e, t, f, m, a, null);
          }
        }
        c && je(e, t, "srcSet", a.srcSet, a, null), l && je(e, t, "src", a.src, a, null);
        return;
      case "input":
        me("invalid", e);
        var v = f = m = c = null, h = null, O = null;
        for (l in a) if (a.hasOwnProperty(l)) {
          var D = a[l];
          if (D != null) switch (l) {
            case "name":
              c = D;
              break;
            case "type":
              m = D;
              break;
            case "checked":
              h = D;
              break;
            case "defaultChecked":
              O = D;
              break;
            case "value":
              f = D;
              break;
            case "defaultValue":
              v = D;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (D != null) throw Error(i(137, t));
              break;
            default:
              je(e, t, l, D, a, null);
          }
        }
        qm(e, f, v, h, O, m, c, !1);
        return;
      case "select":
        me("invalid", e), l = m = f = null;
        for (c in a) if (a.hasOwnProperty(c) && (v = a[c], v != null)) switch (c) {
          case "value":
            f = v;
            break;
          case "defaultValue":
            m = v;
            break;
          case "multiple":
            l = v;
          default:
            je(e, t, c, v, a, null);
        }
        t = f, a = m, e.multiple = !!l, t != null ? Li(e, !!l, t, !1) : a != null && Li(e, !!l, a, !0);
        return;
      case "textarea":
        me("invalid", e), f = c = l = null;
        for (m in a) if (a.hasOwnProperty(m) && (v = a[m], v != null)) switch (m) {
          case "value":
            l = v;
            break;
          case "defaultValue":
            c = v;
            break;
          case "children":
            f = v;
            break;
          case "dangerouslySetInnerHTML":
            if (v != null) throw Error(i(91));
            break;
          default:
            je(e, t, m, v, a, null);
        }
        Lm(e, l, c, f);
        return;
      case "option":
        for (h in a) a.hasOwnProperty(h) && (l = a[h], l != null) && (h === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : je(e, t, h, l, a, null));
        return;
      case "dialog":
        me("beforetoggle", e), me("toggle", e), me("cancel", e), me("close", e);
        break;
      case "iframe":
      case "object":
        me("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < yr.length; l++) me(yr[l], e);
        break;
      case "image":
        me("error", e), me("load", e);
        break;
      case "details":
        me("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        me("error", e), me("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (O in a) if (a.hasOwnProperty(O) && (l = a[O], l != null)) switch (O) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(i(137, t));
          default:
            je(e, t, O, l, a, null);
        }
        return;
      default:
        if (Xu(t)) {
          for (D in a) a.hasOwnProperty(D) && (l = a[D], l !== void 0 && As(e, t, D, l, a, void 0));
          return;
        }
    }
    for (v in a) a.hasOwnProperty(v) && (l = a[v], l != null && je(e, t, v, l, a, null));
  }
  function n1(e, t, a, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null, f = null, m = null, v = null, h = null, O = null, D = null;
        for (x in a) {
          var Z = a[x];
          if (a.hasOwnProperty(x) && Z != null) switch (x) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              h = Z;
            default:
              l.hasOwnProperty(x) || je(e, t, x, null, l, Z);
          }
        }
        for (var N in l) {
          var x = l[N];
          if (Z = a[N], l.hasOwnProperty(N) && (x != null || Z != null)) switch (N) {
            case "type":
              f = x;
              break;
            case "name":
              c = x;
              break;
            case "checked":
              O = x;
              break;
            case "defaultChecked":
              D = x;
              break;
            case "value":
              m = x;
              break;
            case "defaultValue":
              v = x;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (x != null) throw Error(i(137, t));
              break;
            default:
              x !== Z && je(e, t, N, x, l, Z);
          }
        }
        Vu(e, m, v, h, O, D, f, c);
        return;
      case "select":
        x = m = v = N = null;
        for (f in a) if (h = a[f], a.hasOwnProperty(f) && h != null) switch (f) {
          case "value":
            break;
          case "multiple":
            x = h;
          default:
            l.hasOwnProperty(f) || je(e, t, f, null, l, h);
        }
        for (c in l) if (f = l[c], h = a[c], l.hasOwnProperty(c) && (f != null || h != null)) switch (c) {
          case "value":
            N = f;
            break;
          case "defaultValue":
            v = f;
            break;
          case "multiple":
            m = f;
          default:
            f !== h && je(e, t, c, f, l, h);
        }
        t = v, a = m, l = x, N != null ? Li(e, !!a, N, !1) : !!l != !!a && (t != null ? Li(e, !!a, t, !0) : Li(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        x = N = null;
        for (v in a) if (c = a[v], a.hasOwnProperty(v) && c != null && !l.hasOwnProperty(v)) switch (v) {
          case "value":
            break;
          case "children":
            break;
          default:
            je(e, t, v, null, l, c);
        }
        for (m in l) if (c = l[m], f = a[m], l.hasOwnProperty(m) && (c != null || f != null)) switch (m) {
          case "value":
            N = c;
            break;
          case "defaultValue":
            x = c;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (c != null) throw Error(i(91));
            break;
          default:
            c !== f && je(e, t, m, c, l, f);
        }
        Hm(e, N, x);
        return;
      case "option":
        for (var Y in a) N = a[Y], a.hasOwnProperty(Y) && N != null && !l.hasOwnProperty(Y) && (Y === "selected" ? e.selected = !1 : je(e, t, Y, null, l, N));
        for (h in l) N = l[h], x = a[h], l.hasOwnProperty(h) && N !== x && (N != null || x != null) && (h === "selected" ? e.selected = N && typeof N != "function" && typeof N != "symbol" : je(e, t, h, N, l, x));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var P in a) N = a[P], a.hasOwnProperty(P) && N != null && !l.hasOwnProperty(P) && je(e, t, P, null, l, N);
        for (O in l) if (N = l[O], x = a[O], l.hasOwnProperty(O) && N !== x && (N != null || x != null)) switch (O) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (N != null) throw Error(i(137, t));
            break;
          default:
            je(e, t, O, N, l, x);
        }
        return;
      default:
        if (Xu(t)) {
          for (var De in a) N = a[De], a.hasOwnProperty(De) && N !== void 0 && !l.hasOwnProperty(De) && As(e, t, De, void 0, l, N);
          for (D in l) N = l[D], x = a[D], !l.hasOwnProperty(D) || N === x || N === void 0 && x === void 0 || As(e, t, D, N, l, x);
          return;
        }
    }
    for (var z in a) N = a[z], a.hasOwnProperty(z) && N != null && !l.hasOwnProperty(z) && je(e, t, z, null, l, N);
    for (Z in l) N = l[Z], x = a[Z], !l.hasOwnProperty(Z) || N === x || N == null && x == null || je(e, t, Z, N, l, x);
  }
  function Bh(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function i1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var c = a[l], f = c.transferSize, m = c.initiatorType, v = c.duration;
        if (f && v && Bh(m)) {
          for (m = 0, v = c.responseEnd, l += 1; l < a.length; l++) {
            var h = a[l], O = h.startTime;
            if (O > v) break;
            var D = h.transferSize, Z = h.initiatorType;
            D && Bh(Z) && (h = h.responseEnd, m += D * (h < v ? 1 : (v - O) / (h - O)));
          }
          if (--l, t += 8 * (f + m) / (c.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Zs = null, Rs = null;
  function oo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Gh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Yh(e, t) {
    if (e === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Cs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ms = null;
  function a1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Ms ? !1 : (Ms = e, !0) : (Ms = null, !1);
  }
  var Qh = typeof setTimeout == "function" ? setTimeout : void 0, r1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Vh = typeof Promise == "function" ? Promise : void 0, l1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vh < "u" ? function(e) {
    return Vh.resolve(null).then(e).catch(o1);
  } : Qh;
  function o1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Fn(e) {
    return e === "head";
  }
  function Jh(e, t) {
    var a = t, l = 0;
    do {
      var c = a.nextSibling;
      if (e.removeChild(a), c && c.nodeType === 8) if (a = c.data, a === "/$" || a === "/&") {
        if (l === 0) {
          e.removeChild(c), ba(t);
          return;
        }
        l--;
      } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") l++;
      else if (a === "html") br(e.ownerDocument.documentElement);
      else if (a === "head") {
        a = e.ownerDocument.head, br(a);
        for (var f = a.firstChild; f; ) {
          var m = f.nextSibling, v = f.nodeName;
          f[Ma] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = m;
        }
      } else a === "body" && br(e.ownerDocument.body);
      a = c;
    } while (a);
    ba(t);
  }
  function Xh(e, t) {
    var a = e;
    e = 0;
    do {
      var l = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), l && l.nodeType === 8) if (a = l.data, a === "/$") {
        if (e === 0) break;
        e--;
      } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
      a = l;
    } while (a);
  }
  function Is(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Is(a), Yu(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function u1(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var c = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[Ma]) switch (t) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence")) break;
            if (f !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title)) break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (f = e.getAttribute("src"), (f !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
            return e;
          default:
            return e;
        }
      } else if (t === "input" && e.type === "hidden") {
        var f = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === f) return e;
      } else return e;
      if (e = Xt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function c1(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Xt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Kh(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Xt(e.nextSibling), e === null)) return null;
    return e;
  }
  function qs(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Hs(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function s1(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading") t();
    else {
      var l = function() {
        t(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function Xt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Ls = null;
  function Ph(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return Xt(e.nextSibling);
          t--;
        } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Fh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Wh(e, t, a) {
    switch (t = oo(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(i(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(i(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function br(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Yu(e);
  }
  var Kt = /* @__PURE__ */ new Map(), eg = /* @__PURE__ */ new Set();
  function uo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Dn = B.d;
  B.d = {
    f: f1,
    r: d1,
    D: m1,
    C: v1,
    L: p1,
    m: h1,
    X: y1,
    S: g1,
    M: _1
  };
  function f1() {
    var e = Dn.f(), t = Wl();
    return e || t;
  }
  function d1(e) {
    var t = Ii(e);
    t !== null && t.tag === 5 && t.type === "form" ? _p(t) : Dn.r(e);
  }
  var ga = typeof document > "u" ? null : document;
  function tg(e, t, a) {
    var l = ga;
    if (l && typeof t == "string" && t) {
      var c = Ht(t);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), eg.has(c) || (eg.add(c), e = {
        rel: e,
        crossOrigin: a,
        href: t
      }, l.querySelector(c) === null && (t = l.createElement("link"), st(t, "link", e), it(t), l.head.appendChild(t)));
    }
  }
  function m1(e) {
    Dn.D(e), tg("dns-prefetch", e, null);
  }
  function v1(e, t) {
    Dn.C(e, t), tg("preconnect", e, t);
  }
  function p1(e, t, a) {
    Dn.L(e, t, a);
    var l = ga;
    if (l && e && t) {
      var c = 'link[rel="preload"][as="' + Ht(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + Ht(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (c += '[imagesizes="' + Ht(a.imageSizes) + '"]')) : c += '[href="' + Ht(e) + '"]';
      var f = c;
      switch (t) {
        case "style":
          f = ya(e);
          break;
        case "script":
          f = _a(e);
      }
      Kt.has(f) || (e = y({
        rel: "preload",
        href: t === "image" && a && a.imageSrcSet ? void 0 : e,
        as: t
      }, a), Kt.set(f, e), l.querySelector(c) !== null || t === "style" && l.querySelector(Sr(f)) || t === "script" && l.querySelector($r(f)) || (t = l.createElement("link"), st(t, "link", e), it(t), l.head.appendChild(t)));
    }
  }
  function h1(e, t) {
    Dn.m(e, t);
    var a = ga;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", c = 'link[rel="modulepreload"][as="' + Ht(l) + '"][href="' + Ht(e) + '"]', f = c;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = _a(e);
      }
      if (!Kt.has(f) && (e = y({
        rel: "modulepreload",
        href: e
      }, t), Kt.set(f, e), a.querySelector(c) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector($r(f))) return;
        }
        l = a.createElement("link"), st(l, "link", e), it(l), a.head.appendChild(l);
      }
    }
  }
  function g1(e, t, a) {
    Dn.S(e, t, a);
    var l = ga;
    if (l && e) {
      var c = qi(l).hoistableStyles, f = ya(e);
      t = t || "default";
      var m = c.get(f);
      if (!m) {
        var v = {
          loading: 0,
          preload: null
        };
        if (m = l.querySelector(Sr(f))) v.loading = 5;
        else {
          e = y({
            rel: "stylesheet",
            href: e,
            "data-precedence": t
          }, a), (a = Kt.get(f)) && Bs(e, a);
          var h = m = l.createElement("link");
          it(h), st(h, "link", e), h._p = new Promise(function(O, D) {
            h.onload = O, h.onerror = D;
          }), h.addEventListener("load", function() {
            v.loading |= 1;
          }), h.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, co(m, t, l);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: v
        }, c.set(f, m);
      }
    }
  }
  function y1(e, t) {
    Dn.X(e, t);
    var a = ga;
    if (a && e) {
      var l = qi(a).hoistableScripts, c = _a(e), f = l.get(c);
      f || (f = a.querySelector($r(c)), f || (e = y({
        src: e,
        async: !0
      }, t), (t = Kt.get(c)) && Gs(e, t), f = a.createElement("script"), it(f), st(f, "link", e), a.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, l.set(c, f));
    }
  }
  function _1(e, t) {
    Dn.M(e, t);
    var a = ga;
    if (a && e) {
      var l = qi(a).hoistableScripts, c = _a(e), f = l.get(c);
      f || (f = a.querySelector($r(c)), f || (e = y({
        src: e,
        async: !0,
        type: "module"
      }, t), (t = Kt.get(c)) && Gs(e, t), f = a.createElement("script"), it(f), st(f, "link", e), a.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, l.set(c, f));
    }
  }
  function ng(e, t, a, l) {
    var c = (c = fe.current) ? uo(c) : null;
    if (!c) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = ya(a.href), a = qi(c).hoistableStyles, l = a.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = ya(a.href);
          var f = qi(c).hoistableStyles, m = f.get(e);
          if (m || (c = c.ownerDocument || c, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, f.set(e, m), (f = c.querySelector(Sr(e))) && !f._p && (m.instance = f, m.state.loading = 5), Kt.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Kt.set(e, a), f || b1(c, e, a, m.state))), t && l === null) throw Error(i(528, ""));
          return m;
        }
        if (t && l !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = _a(a), a = qi(c).hoistableScripts, l = a.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, l)), l) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(i(444, e));
    }
  }
  function ya(e) {
    return 'href="' + Ht(e) + '"';
  }
  function Sr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function ig(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function b1(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), st(t, "link", a), it(t), e.head.appendChild(t));
  }
  function _a(e) {
    return '[src="' + Ht(e) + '"]';
  }
  function $r(e) {
    return "script[async]" + e;
  }
  function ag(e, t, a) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var l = e.querySelector('style[data-href~="' + Ht(a.href) + '"]');
        if (l) return t.instance = l, it(l), l;
        var c = y({}, a, {
          "data-href": a.href,
          "data-precedence": a.precedence,
          href: null,
          precedence: null
        });
        return l = (e.ownerDocument || e).createElement("style"), it(l), st(l, "style", c), co(l, a.precedence, e), t.instance = l;
      case "stylesheet":
        c = ya(a.href);
        var f = e.querySelector(Sr(c));
        if (f) return t.state.loading |= 4, t.instance = f, it(f), f;
        l = ig(a), (c = Kt.get(c)) && Bs(l, c), f = (e.ownerDocument || e).createElement("link"), it(f);
        var m = f;
        return m._p = new Promise(function(v, h) {
          m.onload = v, m.onerror = h;
        }), st(f, "link", l), t.state.loading |= 4, co(f, a.precedence, e), t.instance = f;
      case "script":
        return f = _a(a.src), (c = e.querySelector($r(f))) ? (t.instance = c, it(c), c) : (l = a, (c = Kt.get(f)) && (l = y({}, a), Gs(l, c)), e = e.ownerDocument || e, c = e.createElement("script"), it(c), st(c, "link", l), e.head.appendChild(c), t.instance = c);
      case "void":
        return null;
      default:
        throw Error(i(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, co(l, a.precedence, e));
    return t.instance;
  }
  function co(e, t, a) {
    for (var l = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), c = l.length ? l[l.length - 1] : null, f = c, m = 0; m < l.length; m++) {
      var v = l[m];
      if (v.dataset.precedence === t) f = v;
      else if (f !== c) break;
    }
    f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Bs(e, t) {
    e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
  }
  function Gs(e, t) {
    e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
  }
  var so = null;
  function rg(e, t, a) {
    if (so === null) {
      var l = /* @__PURE__ */ new Map(), c = so = /* @__PURE__ */ new Map();
      c.set(a, l);
    } else c = so, l = c.get(a), l || (l = /* @__PURE__ */ new Map(), c.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), c = 0; c < a.length; c++) {
      var f = a[c];
      if (!(f[Ma] || f[lt] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = f.getAttribute(t) || "";
        m = e + m;
        var v = l.get(m);
        v ? v.push(f) : l.set(m, [f]);
      }
    }
    return l;
  }
  function lg(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null);
  }
  function S1(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
    }
    return !1;
  }
  function og(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function $1(e, t, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var c = ya(l.href), f = t.querySelector(Sr(c));
        if (f) {
          t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = fo.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = f, it(f);
          return;
        }
        f = t.ownerDocument || t, l = ig(l), (c = Kt.get(c)) && Bs(l, c), f = f.createElement("link"), it(f);
        var m = f;
        m._p = new Promise(function(v, h) {
          m.onload = v, m.onerror = h;
        }), st(f, "link", l), a.instance = f;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = fo.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Ys = 0;
  function z1(e, t) {
    return e.stylesheets && e.count === 0 && vo(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (e.stylesheets && vo(e, e.stylesheets), e.unsuspend) {
          var f = e.unsuspend;
          e.unsuspend = null, f();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ys === 0 && (Ys = 62500 * i1());
      var c = setTimeout(function() {
        if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && vo(e, e.stylesheets), e.unsuspend)) {
          var f = e.unsuspend;
          e.unsuspend = null, f();
        }
      }, (e.imgBytes > Ys ? 50 : 800) + t);
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(c);
      };
    } : null;
  }
  function fo() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) vo(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var mo = null;
  function vo(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, mo = /* @__PURE__ */ new Map(), t.forEach(T1, e), mo = null, fo.call(e));
  }
  function T1(e, t) {
    if (!(t.state.loading & 4)) {
      var a = mo.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), mo.set(e, a);
        for (var c = e.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0; f < c.length; f++) {
          var m = c[f];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (a.set(m.dataset.precedence, m), l = m);
        }
        l && a.set(null, l);
      }
      c = t.instance, m = c.getAttribute("data-precedence"), f = a.get(m) || l, f === l && a.set(null, c), a.set(m, c), this.count++, l = fo.bind(this), c.addEventListener("load", l), c.addEventListener("error", l), f ? f.parentNode.insertBefore(c, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), t.state.loading |= 4;
    }
  }
  var zr = {
    $$typeof: ue,
    Provider: null,
    Consumer: null,
    _currentValue: Se,
    _currentValue2: Se,
    _threadCount: 0
  };
  function w1(e, t, a, l, c, f, m, v, h) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Lu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Lu(0), this.hiddenUpdates = Lu(null), this.identifierPrefix = l, this.onUncaughtError = c, this.onCaughtError = f, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function E1(e, t, a, l, c, f, m, v, h, O, D, Z) {
    return e = new w1(e, t, a, m, h, O, D, Z, v), t = 1, f === !0 && (t |= 24), f = At(3, null, null, t), e.current = f, f.stateNode = e, t = wc(), t.refCount++, e.pooledCache = t, t.refCount++, f.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: t
    }, Nc(f), e;
  }
  function k1(e) {
    return e ? (e = Ki, e) : Ki;
  }
  function ug(e, t, a, l, c, f) {
    c = k1(c), l.context === null ? l.context = c : l.pendingContext = c, l = Ti(t), l.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (l.callback = f), a = wi(e, l, t), a !== null && (Et(a, e, t), tr(a, e, t));
  }
  function cg(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Qs(e, t) {
    cg(e, t), (e = e.alternate) && cg(e, t);
  }
  function sg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = pi(e, 67108864);
      t !== null && Et(t, e, 67108864), Qs(e, 67108864);
    }
  }
  function fg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Jt();
      t = Um(t);
      var a = pi(e, t);
      a !== null && Et(a, e, t), Qs(e, t);
    }
  }
  var po = !0;
  function O1(e, t, a, l) {
    var c = I.T;
    I.T = null;
    var f = B.p;
    try {
      B.p = 2, Vs(e, t, a, l);
    } finally {
      B.p = f, I.T = c;
    }
  }
  function N1(e, t, a, l) {
    var c = I.T;
    I.T = null;
    var f = B.p;
    try {
      B.p = 8, Vs(e, t, a, l);
    } finally {
      B.p = f, I.T = c;
    }
  }
  function Vs(e, t, a, l) {
    if (po) {
      var c = Js(l);
      if (c === null) Ds(e, t, l, ho, a), mg(e, l);
      else if (x1(c, e, t, a, l)) l.stopPropagation();
      else if (mg(e, l), t & 4 && -1 < U1.indexOf(e)) {
        for (; c !== null; ) {
          var f = Ii(c);
          if (f !== null) switch (f.tag) {
            case 3:
              if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                var m = si(f.pendingLanes);
                if (m !== 0) {
                  var v = f;
                  for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                    var h = 1 << 31 - jt(m);
                    v.entanglements[1] |= h, m &= ~h;
                  }
                  jn(f), ($e & 6) === 0 && (Pl = Ut() + 500, gr(0, !1));
                }
              }
              break;
            case 31:
            case 13:
              v = pi(f, 2), v !== null && Et(v, f, 2), Wl(), Qs(f, 2);
          }
          if (f = Js(l), f === null && Ds(e, t, l, ho, a), f === c) break;
          c = f;
        }
        c !== null && l.stopPropagation();
      } else Ds(e, t, l, null, a);
    }
  }
  function Js(e) {
    return e = Pu(e), Xs(e);
  }
  var ho = null;
  function Xs(e) {
    if (ho = null, e = Mi(e), e !== null) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = g(t), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = j(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ho = e, null;
  }
  function dg(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (z0()) {
          case zm:
            return 2;
          case Tm:
            return 8;
          case il:
          case T0:
            return 32;
          case wm:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ks = !1, Wn = null, ei = null, ti = null, Tr = /* @__PURE__ */ new Map(), wr = /* @__PURE__ */ new Map(), ni = [], U1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function mg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Wn = null;
        break;
      case "dragenter":
      case "dragleave":
        ei = null;
        break;
      case "mouseover":
      case "mouseout":
        ti = null;
        break;
      case "pointerover":
      case "pointerout":
        Tr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wr.delete(t.pointerId);
    }
  }
  function Er(e, t, a, l, c, f) {
    return e === null || e.nativeEvent !== f ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: f,
      targetContainers: [c]
    }, t !== null && (t = Ii(t), t !== null && sg(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function x1(e, t, a, l, c) {
    switch (t) {
      case "focusin":
        return Wn = Er(Wn, e, t, a, l, c), !0;
      case "dragenter":
        return ei = Er(ei, e, t, a, l, c), !0;
      case "mouseover":
        return ti = Er(ti, e, t, a, l, c), !0;
      case "pointerover":
        var f = c.pointerId;
        return Tr.set(f, Er(Tr.get(f) || null, e, t, a, l, c)), !0;
      case "gotpointercapture":
        return f = c.pointerId, wr.set(f, Er(wr.get(f) || null, e, t, a, l, c)), !0;
    }
    return !1;
  }
  function vg(e) {
    var t = Mi(e.target);
    if (t !== null) {
      var a = d(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = g(a), t !== null) {
            e.blockedOn = t, jm(e.priority, function() {
              fg(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = j(a), t !== null) {
            e.blockedOn = t, jm(e.priority, function() {
              fg(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function go(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Js(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(a.type, a);
        Ku = l, a.target.dispatchEvent(l), Ku = null;
      } else return t = Ii(a), t !== null && sg(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function pg(e, t, a) {
    go(e) && a.delete(t);
  }
  function j1() {
    Ks = !1, Wn !== null && go(Wn) && (Wn = null), ei !== null && go(ei) && (ei = null), ti !== null && go(ti) && (ti = null), Tr.forEach(pg), wr.forEach(pg);
  }
  function yo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ks || (Ks = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, j1)));
  }
  var _o = null;
  function hg(e) {
    _o !== e && (_o = e, r.unstable_scheduleCallback(r.unstable_NormalPriority, function() {
      _o === e && (_o = null);
      for (var t = 0; t < e.length; t += 3) {
        var a = e[t], l = e[t + 1], c = e[t + 2];
        if (typeof l != "function") {
          if (Xs(l || a) === null) continue;
          break;
        }
        var f = Ii(a);
        f !== null && (e.splice(t, 3), t -= 3, Xc(f, {
          pending: !0,
          data: c,
          method: a.method,
          action: l
        }, l, c));
      }
    }));
  }
  function ba(e) {
    function t(h) {
      return yo(h, e);
    }
    Wn !== null && yo(Wn, e), ei !== null && yo(ei, e), ti !== null && yo(ti, e), Tr.forEach(t), wr.forEach(t);
    for (var a = 0; a < ni.length; a++) {
      var l = ni[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < ni.length && (a = ni[0], a.blockedOn === null); ) vg(a), a.blockedOn === null && ni.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null) for (l = 0; l < a.length; l += 3) {
      var c = a[l], f = a[l + 1], m = c[bt] || null;
      if (typeof f == "function") m || hg(a);
      else if (m) {
        var v = null;
        if (f && f.hasAttribute("formAction")) {
          if (c = f, m = f[bt] || null) v = m.formAction;
          else if (Xs(c) !== null) continue;
        } else v = m.action;
        typeof v == "function" ? a[l + 1] = v : (a.splice(l, 3), l -= 3), hg(a);
      }
    }
  }
  function D1() {
    function e(f) {
      f.canIntercept && f.info === "react-transition" && f.intercept({
        handler: function() {
          return new Promise(function(m) {
            return c = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      c !== null && (c(), c = null), l || setTimeout(a, 20);
    }
    function a() {
      if (!l && !navigation.transition) {
        var f = navigation.currentEntry;
        f && f.url != null && navigation.navigate(f.url, {
          state: f.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, c = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), c !== null && (c(), c = null);
      };
    }
  }
  function Ps(e) {
    this._internalRoot = e;
  }
  Fs.prototype.render = Ps.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    var a = t.current;
    ug(a, Jt(), e, t, null, null);
  }, Fs.prototype.unmount = Ps.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ug(e.current, 2, null, e, null, null), Wl(), t[Ca] = null;
    }
  };
  function Fs(e) {
    this._internalRoot = e;
  }
  Fs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = xm();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var a = 0; a < ni.length && t !== 0 && t < ni[a].priority; a++) ;
      ni.splice(a, 0, e), a === 0 && vg(e);
    }
  };
  var gg = o.version;
  if (gg !== "19.2.7") throw Error(i(527, gg, "19.2.7"));
  B.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = _(t), e = e !== null ? $(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var A1 = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: I,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var bo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!bo.isDisabled && bo.supportsFiber) try {
      Za = bo.inject(A1), xt = bo;
    } catch {
    }
  }
  n.createRoot = function(e, t) {
    if (!u(e)) throw Error(i(299));
    var a = !1, l = "", c = N$, f = U$, m = x$;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (c = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (m = t.onRecoverableError)), t = E1(e, 1, !1, null, null, a, l, null, c, f, m, D1), e[Ca] = t.current, Mh(e), new Ps(t);
  };
})), J1 = /* @__PURE__ */ vn(((n, r) => {
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (s) {
        console.error(s);
      }
  }
  o(), r.exports = V1();
})), Ws = /* @__PURE__ */ Lg(of(), 1), X1 = /* @__PURE__ */ Lg(J1(), 1), K1 = class {
  listeners = /* @__PURE__ */ new Map();
  eventHistory = [];
  maxHistorySize;
  eventTarget;
  constructor(n = {}) {
    this.maxHistorySize = n.maxHistorySize ?? 100, this.eventTarget = n.eventTarget;
  }
  configure(n) {
    this.maxHistorySize = n.maxHistorySize ?? this.maxHistorySize, this.eventTarget = n.eventTarget ?? this.eventTarget;
  }
  on(n, r) {
    return this.listeners.has(n) || this.listeners.set(n, /* @__PURE__ */ new Set()), this.listeners.get(n).add(r), () => {
      const o = this.listeners.get(n);
      o && (o.delete(r), o.size === 0 && this.listeners.delete(n));
    };
  }
  once(n, r) {
    const o = this.on(n, (s) => {
      r(s), o();
    });
    return o;
  }
  emit(n, r, o) {
    const s = {
      type: n,
      source: r,
      payload: o,
      timestamp: Date.now()
    };
    this.eventHistory.push(s), this.eventHistory.length > this.maxHistorySize && this.eventHistory.shift();
    const i = this.listeners.get(n);
    i && i.forEach((d) => {
      try {
        d(s);
      } catch (g) {
        console.error(`[EventBus] Error in listener for ${n}:`, g);
      }
    });
    const u = this.eventTarget ?? (typeof window < "u" ? window : void 0);
    if (u && typeof CustomEvent < "u") {
      const d = new CustomEvent("platform-event", {
        detail: s,
        bubbles: !0
      });
      u.dispatchEvent(d);
    }
  }
  getHistory(n) {
    return n ? this.eventHistory.filter((r) => r.type === n) : [...this.eventHistory];
  }
  clearHistory() {
    this.eventHistory = [];
  }
  off(n) {
    this.listeners.delete(n);
  }
  clear() {
    this.listeners.clear();
  }
}, ef = new K1(), tf = {
  APP_LOADED: "app:loaded",
  APP_UNLOADED: "app:unloaded",
  APP_ERROR: "app:error",
  USER_LOGGED_IN: "auth:login",
  USER_LOGGED_OUT: "auth:logout",
  AUTH_STATE_CHANGED: "auth:state-changed",
  NAVIGATE: "nav:navigate",
  ROUTE_CHANGED: "nav:route-changed",
  SHOW_NOTIFICATION: "notification:show",
  HIDE_NOTIFICATION: "notification:hide",
  DATA_UPDATED: "data:updated",
  DATA_REFRESH: "data:refresh",
  THEME_CHANGED: "theme:changed",
  APP_MESSAGE: "app:message",
  MCP_APP_REGISTERED: "mcp:app-registered",
  MCP_TOOL_CALL_REQUESTED: "mcp:tool-call-requested",
  MCP_TOOL_CALL_COMPLETED: "mcp:tool-call-completed",
  MCP_TOOL_CALL_FAILED: "mcp:tool-call-failed",
  MCP_RESOURCE_REQUESTED: "mcp:resource-requested",
  MCP_PROMPT_REQUESTED: "mcp:prompt-requested"
}, uf = Object.freeze({ status: "aborted" });
function w(n, r, o) {
  function s(g, j) {
    var p;
    Object.defineProperty(g, "_zod", {
      value: g._zod ?? {},
      enumerable: !1
    }), (p = g._zod).traits ?? (p.traits = /* @__PURE__ */ new Set()), g._zod.traits.add(n), r(g, j);
    for (const _ in d.prototype) _ in g || Object.defineProperty(g, _, { value: d.prototype[_].bind(g) });
    g._zod.constr = d, g._zod.def = j;
  }
  const i = o?.Parent ?? Object;
  class u extends i {
  }
  Object.defineProperty(u, "name", { value: n });
  function d(g) {
    var j;
    const p = o?.Parent ? new u() : this;
    s(p, g), (j = p._zod).deferred ?? (j.deferred = []);
    for (const _ of p._zod.deferred) _();
    return p;
  }
  return Object.defineProperty(d, "init", { value: s }), Object.defineProperty(d, Symbol.hasInstance, { value: (g) => o?.Parent && g instanceof o.Parent ? !0 : g?._zod?.traits?.has(n) }), Object.defineProperty(d, "name", { value: n }), d;
}
var cf = /* @__PURE__ */ Symbol("zod_brand"), Ta = class extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}, wo = {};
function ft(n) {
  return n && Object.assign(wo, n), wo;
}
var P1 = /* @__PURE__ */ An({
  BIGINT_FORMAT_RANGES: () => Xg,
  Class: () => sz,
  NUMBER_FORMAT_RANGES: () => Jg,
  aborted: () => za,
  allowsEval: () => Yg,
  assert: () => nz,
  assertEqual: () => F1,
  assertIs: () => ez,
  assertNever: () => tz,
  assertNotEqual: () => W1,
  assignProp: () => xa,
  cached: () => Do,
  captureStackTrace: () => ff,
  cleanEnum: () => cz,
  cleanRegex: () => Ao,
  clone: () => on,
  createTransparentProxy: () => uz,
  defineLazy: () => Te,
  esc: () => $a,
  escapeRegex: () => Zi,
  extend: () => Fg,
  finalizeIssue: () => ln,
  floatSafeRemainder: () => Gg,
  getElementAtPath: () => iz,
  getEnumValues: () => sf,
  getLengthableOrigin: () => Ro,
  getParsedType: () => oz,
  getSizableOrigin: () => Zo,
  isObject: () => Or,
  isPlainObject: () => Nr,
  issue: () => wa,
  joinValues: () => H,
  jsonStringifyReplacer: () => Bg,
  merge: () => Wg,
  normalizeParams: () => M,
  nullish: () => Ai,
  numKeys: () => lz,
  omit: () => Pg,
  optionalKeys: () => Vg,
  partial: () => ey,
  pick: () => Kg,
  prefixIssues: () => Pt,
  primitiveTypes: () => Qg,
  promiseAllObject: () => az,
  propertyKeyTypes: () => Eo,
  randomString: () => rz,
  required: () => ty,
  stringifyPrimitive: () => re,
  unwrapMessage: () => kr
});
function F1(n) {
  return n;
}
function W1(n) {
  return n;
}
function ez(n) {
}
function tz(n) {
  throw new Error();
}
function nz(n) {
}
function sf(n) {
  const r = Object.values(n).filter((o) => typeof o == "number");
  return Object.entries(n).filter(([o, s]) => r.indexOf(+o) === -1).map(([o, s]) => s);
}
function H(n, r = "|") {
  return n.map((o) => re(o)).join(r);
}
function Bg(n, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function Do(n) {
  return { get value() {
    {
      const r = n();
      return Object.defineProperty(this, "value", { value: r }), r;
    }
    throw new Error("cached value already set");
  } };
}
function Ai(n) {
  return n == null;
}
function Ao(n) {
  const r = n.startsWith("^") ? 1 : 0, o = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(r, o);
}
function Gg(n, r) {
  const o = (n.toString().split(".")[1] || "").length, s = (r.toString().split(".")[1] || "").length, i = o > s ? o : s;
  return Number.parseInt(n.toFixed(i).replace(".", "")) % Number.parseInt(r.toFixed(i).replace(".", "")) / 10 ** i;
}
function Te(n, r, o) {
  Object.defineProperty(n, r, {
    get() {
      {
        const s = o();
        return n[r] = s, s;
      }
      throw new Error("cached value already set");
    },
    set(s) {
      Object.defineProperty(n, r, { value: s });
    },
    configurable: !0
  });
}
function xa(n, r, o) {
  Object.defineProperty(n, r, {
    value: o,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function iz(n, r) {
  return r ? r.reduce((o, s) => o?.[s], n) : n;
}
function az(n) {
  const r = Object.keys(n), o = r.map((s) => n[s]);
  return Promise.all(o).then((s) => {
    const i = {};
    for (let u = 0; u < r.length; u++) i[r[u]] = s[u];
    return i;
  });
}
function rz(n = 10) {
  const r = "abcdefghijklmnopqrstuvwxyz";
  let o = "";
  for (let s = 0; s < n; s++) o += r[Math.floor(Math.random() * 26)];
  return o;
}
function $a(n) {
  return JSON.stringify(n);
}
var ff = Error.captureStackTrace ? Error.captureStackTrace : (...n) => {
};
function Or(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
var Yg = Do(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
});
function Nr(n) {
  if (Or(n) === !1) return !1;
  const r = n.constructor;
  if (r === void 0) return !0;
  const o = r.prototype;
  return !(Or(o) === !1 || Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === !1);
}
function lz(n) {
  let r = 0;
  for (const o in n) Object.prototype.hasOwnProperty.call(n, o) && r++;
  return r;
}
var oz = (n) => {
  const r = typeof n;
  switch (r) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(n) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      return Array.isArray(n) ? "array" : n === null ? "null" : n.then && typeof n.then == "function" && n.catch && typeof n.catch == "function" ? "promise" : typeof Map < "u" && n instanceof Map ? "map" : typeof Set < "u" && n instanceof Set ? "set" : typeof Date < "u" && n instanceof Date ? "date" : typeof File < "u" && n instanceof File ? "file" : "object";
    default:
      throw new Error(`Unknown data type: ${r}`);
  }
}, Eo = /* @__PURE__ */ new Set([
  "string",
  "number",
  "symbol"
]), Qg = /* @__PURE__ */ new Set([
  "string",
  "number",
  "bigint",
  "boolean",
  "symbol",
  "undefined"
]);
function Zi(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function on(n, r, o) {
  const s = new n._zod.constr(r ?? n._zod.def);
  return (!r || o?.parent) && (s._zod.parent = n), s;
}
function M(n) {
  const r = n;
  if (!r) return {};
  if (typeof r == "string") return { error: () => r };
  if (r?.message !== void 0) {
    if (r?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
    r.error = r.message;
  }
  return delete r.message, typeof r.error == "string" ? {
    ...r,
    error: () => r.error
  } : r;
}
function uz(n) {
  let r;
  return new Proxy({}, {
    get(o, s, i) {
      return r ?? (r = n()), Reflect.get(r, s, i);
    },
    set(o, s, i, u) {
      return r ?? (r = n()), Reflect.set(r, s, i, u);
    },
    has(o, s) {
      return r ?? (r = n()), Reflect.has(r, s);
    },
    deleteProperty(o, s) {
      return r ?? (r = n()), Reflect.deleteProperty(r, s);
    },
    ownKeys(o) {
      return r ?? (r = n()), Reflect.ownKeys(r);
    },
    getOwnPropertyDescriptor(o, s) {
      return r ?? (r = n()), Reflect.getOwnPropertyDescriptor(r, s);
    },
    defineProperty(o, s, i) {
      return r ?? (r = n()), Reflect.defineProperty(r, s, i);
    }
  });
}
function re(n) {
  return typeof n == "bigint" ? n.toString() + "n" : typeof n == "string" ? `"${n}"` : `${n}`;
}
function Vg(n) {
  return Object.keys(n).filter((r) => n[r]._zod.optin === "optional" && n[r]._zod.optout === "optional");
}
var Jg = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, Xg = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function Kg(n, r) {
  const o = {}, s = n._zod.def;
  for (const i in r) {
    if (!(i in s.shape)) throw new Error(`Unrecognized key: "${i}"`);
    r[i] && (o[i] = s.shape[i]);
  }
  return on(n, {
    ...n._zod.def,
    shape: o,
    checks: []
  });
}
function Pg(n, r) {
  const o = { ...n._zod.def.shape }, s = n._zod.def;
  for (const i in r) {
    if (!(i in s.shape)) throw new Error(`Unrecognized key: "${i}"`);
    r[i] && delete o[i];
  }
  return on(n, {
    ...n._zod.def,
    shape: o,
    checks: []
  });
}
function Fg(n, r) {
  if (!Nr(r)) throw new Error("Invalid input to extend: expected a plain object");
  return on(n, {
    ...n._zod.def,
    get shape() {
      const o = {
        ...n._zod.def.shape,
        ...r
      };
      return xa(this, "shape", o), o;
    },
    checks: []
  });
}
function Wg(n, r) {
  return on(n, {
    ...n._zod.def,
    get shape() {
      const o = {
        ...n._zod.def.shape,
        ...r._zod.def.shape
      };
      return xa(this, "shape", o), o;
    },
    catchall: r._zod.def.catchall,
    checks: []
  });
}
function ey(n, r, o) {
  const s = r._zod.def.shape, i = { ...s };
  if (o) for (const u in o) {
    if (!(u in s)) throw new Error(`Unrecognized key: "${u}"`);
    o[u] && (i[u] = n ? new n({
      type: "optional",
      innerType: s[u]
    }) : s[u]);
  }
  else for (const u in s) i[u] = n ? new n({
    type: "optional",
    innerType: s[u]
  }) : s[u];
  return on(r, {
    ...r._zod.def,
    shape: i,
    checks: []
  });
}
function ty(n, r, o) {
  const s = r._zod.def.shape, i = { ...s };
  if (o) for (const u in o) {
    if (!(u in i)) throw new Error(`Unrecognized key: "${u}"`);
    o[u] && (i[u] = new n({
      type: "nonoptional",
      innerType: s[u]
    }));
  }
  else for (const u in s) i[u] = new n({
    type: "nonoptional",
    innerType: s[u]
  });
  return on(r, {
    ...r._zod.def,
    shape: i,
    checks: []
  });
}
function za(n, r = 0) {
  for (let o = r; o < n.issues.length; o++) if (n.issues[o]?.continue !== !0) return !0;
  return !1;
}
function Pt(n, r) {
  return r.map((o) => {
    var s;
    return (s = o).path ?? (s.path = []), o.path.unshift(n), o;
  });
}
function kr(n) {
  return typeof n == "string" ? n : n?.message;
}
function ln(n, r, o) {
  const s = {
    ...n,
    path: n.path ?? []
  };
  return n.message || (s.message = kr(n.inst?._zod.def?.error?.(n)) ?? kr(r?.error?.(n)) ?? kr(o.customError?.(n)) ?? kr(o.localeError?.(n)) ?? "Invalid input"), delete s.inst, delete s.continue, r?.reportInput || delete s.input, s;
}
function Zo(n) {
  return n instanceof Set ? "set" : n instanceof Map ? "map" : n instanceof File ? "file" : "unknown";
}
function Ro(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function wa(...n) {
  const [r, o, s] = n;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: o,
    inst: s
  } : { ...r };
}
function cz(n) {
  return Object.entries(n).filter(([r, o]) => Number.isNaN(Number.parseInt(r, 10))).map((r) => r[1]);
}
var sz = class {
  constructor(...n) {
  }
}, ny = (n, r) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: r,
    enumerable: !1
  }), Object.defineProperty(n, "message", {
    get() {
      return JSON.stringify(r, Bg, 2);
    },
    enumerable: !0
  }), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, df = w("$ZodError", ny), Zr = w("$ZodError", ny, { Parent: Error });
function Co(n, r = (o) => o.message) {
  const o = {}, s = [];
  for (const i of n.issues) i.path.length > 0 ? (o[i.path[0]] = o[i.path[0]] || [], o[i.path[0]].push(r(i))) : s.push(r(i));
  return {
    formErrors: s,
    fieldErrors: o
  };
}
function Mo(n, r) {
  const o = r || function(u) {
    return u.message;
  }, s = { _errors: [] }, i = (u) => {
    for (const d of u.issues) if (d.code === "invalid_union" && d.errors.length) d.errors.map((g) => i({ issues: g }));
    else if (d.code === "invalid_key") i({ issues: d.issues });
    else if (d.code === "invalid_element") i({ issues: d.issues });
    else if (d.path.length === 0) s._errors.push(o(d));
    else {
      let g = s, j = 0;
      for (; j < d.path.length; ) {
        const p = d.path[j];
        j !== d.path.length - 1 ? g[p] = g[p] || { _errors: [] } : (g[p] = g[p] || { _errors: [] }, g[p]._errors.push(o(d))), g = g[p], j++;
      }
    }
  };
  return i(n), s;
}
function mf(n, r) {
  const o = r || function(u) {
    return u.message;
  }, s = { errors: [] }, i = (u, d = []) => {
    var g, j;
    for (const p of u.issues) if (p.code === "invalid_union" && p.errors.length) p.errors.map((_) => i({ issues: _ }, p.path));
    else if (p.code === "invalid_key") i({ issues: p.issues }, p.path);
    else if (p.code === "invalid_element") i({ issues: p.issues }, p.path);
    else {
      const _ = [...d, ...p.path];
      if (_.length === 0) {
        s.errors.push(o(p));
        continue;
      }
      let $ = s, y = 0;
      for (; y < _.length; ) {
        const R = _[y], q = y === _.length - 1;
        typeof R == "string" ? ($.properties ?? ($.properties = {}), (g = $.properties)[R] ?? (g[R] = { errors: [] }), $ = $.properties[R]) : ($.items ?? ($.items = []), (j = $.items)[R] ?? (j[R] = { errors: [] }), $ = $.items[R]), q && $.errors.push(o(p)), y++;
      }
    }
  };
  return i(n), s;
}
function iy(n) {
  const r = [];
  for (const o of n) typeof o == "number" ? r.push(`[${o}]`) : typeof o == "symbol" ? r.push(`[${JSON.stringify(String(o))}]`) : /[^\w$]/.test(o) ? r.push(`[${JSON.stringify(o)}]`) : (r.length && r.push("."), r.push(o));
  return r.join("");
}
function vf(n) {
  const r = [], o = [...n.issues].sort((s, i) => s.path.length - i.path.length);
  for (const s of o)
    r.push(`✖ ${s.message}`), s.path?.length && r.push(`  → at ${iy(s.path)}`);
  return r.join(`
`);
}
var pf = (n) => (r, o, s, i) => {
  const u = s ? Object.assign(s, { async: !1 }) : { async: !1 }, d = r._zod.run({
    value: o,
    issues: []
  }, u);
  if (d instanceof Promise) throw new Ta();
  if (d.issues.length) {
    const g = new (i?.Err ?? n)(d.issues.map((j) => ln(j, u, ft())));
    throw ff(g, i?.callee), g;
  }
  return d.value;
}, nf = /* @__PURE__ */ pf(Zr), hf = (n) => async (r, o, s, i) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let d = r._zod.run({
    value: o,
    issues: []
  }, u);
  if (d instanceof Promise && (d = await d), d.issues.length) {
    const g = new (i?.Err ?? n)(d.issues.map((j) => ln(j, u, ft())));
    throw ff(g, i?.callee), g;
  }
  return d.value;
}, af = /* @__PURE__ */ hf(Zr), gf = (n) => (r, o, s) => {
  const i = s ? {
    ...s,
    async: !1
  } : { async: !1 }, u = r._zod.run({
    value: o,
    issues: []
  }, i);
  if (u instanceof Promise) throw new Ta();
  return u.issues.length ? {
    success: !1,
    error: new (n ?? df)(u.issues.map((d) => ln(d, i, ft())))
  } : {
    success: !0,
    data: u.value
  };
}, yf = /* @__PURE__ */ gf(Zr), _f = (n) => async (r, o, s) => {
  const i = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({
    value: o,
    issues: []
  }, i);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new n(u.issues.map((d) => ln(d, i, ft())))
  } : {
    success: !0,
    data: u.value
  };
}, ay = /* @__PURE__ */ _f(Zr), bf = /* @__PURE__ */ An({
  _emoji: () => vy,
  base64: () => by,
  base64url: () => Sf,
  bigint: () => Ny,
  boolean: () => jy,
  browserEmail: () => yz,
  cidrv4: () => yy,
  cidrv6: () => _y,
  cuid: () => ry,
  cuid2: () => ly,
  date: () => Ty,
  datetime: () => ky,
  domain: () => _z,
  duration: () => fy,
  e164: () => $y,
  email: () => my,
  emoji: () => py,
  extendedDuration: () => fz,
  guid: () => dy,
  hostname: () => Sy,
  html5Email: () => pz,
  integer: () => Uy,
  ipv4: () => hy,
  ipv6: () => gy,
  ksuid: () => cy,
  lowercase: () => Zy,
  nanoid: () => sy,
  null: () => Dy,
  number: () => xy,
  rfc5322Email: () => hz,
  string: () => Oy,
  time: () => Ey,
  ulid: () => oy,
  undefined: () => Ay,
  unicodeEmail: () => gz,
  uppercase: () => Ry,
  uuid: () => Ea,
  uuid4: () => dz,
  uuid6: () => mz,
  uuid7: () => vz,
  xid: () => uy
}), ry = /^[cC][^\s-]{8,}$/, ly = /^[0-9a-z]+$/, oy = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, uy = /^[0-9a-vA-V]{20}$/, cy = /^[A-Za-z0-9]{27}$/, sy = /^[a-zA-Z0-9_-]{21}$/, fy = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, fz = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, dy = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ea = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/, dz = /* @__PURE__ */ Ea(4), mz = /* @__PURE__ */ Ea(6), vz = /* @__PURE__ */ Ea(7), my = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, pz = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, hz = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, gz = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, yz = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, vy = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function py() {
  return new RegExp(vy, "u");
}
var hy = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, gy = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/, yy = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, _y = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, by = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Sf = /^[A-Za-z0-9_-]*$/, Sy = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/, _z = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, $y = /^\+(?:[0-9]){6,14}[0-9]$/, zy = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Ty = /* @__PURE__ */ new RegExp(`^${zy}$`);
function wy(n) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${r}` : n.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${n.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Ey(n) {
  return new RegExp(`^${wy(n)}$`);
}
function ky(n) {
  const r = wy({ precision: n.precision }), o = ["Z"];
  n.local && o.push(""), n.offset && o.push("([+-]\\d{2}:\\d{2})");
  const s = `${r}(?:${o.join("|")})`;
  return new RegExp(`^${zy}T(?:${s})$`);
}
var Oy = (n) => {
  const r = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, Ny = /^\d+n?$/, Uy = /^\d+$/, xy = /^-?\d+(?:\.\d+)?/i, jy = /true|false/i, Dy = /null/i, Ay = /undefined/i, Zy = /^[^A-Z]*$/, Ry = /^[^a-z]*$/, Je = /* @__PURE__ */ w("$ZodCheck", (n, r) => {
  var o;
  n._zod ?? (n._zod = {}), n._zod.def = r, (o = n._zod).onattach ?? (o.onattach = []);
}), Cy = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, $f = /* @__PURE__ */ w("$ZodCheckLessThan", (n, r) => {
  Je.init(n, r);
  const o = Cy[typeof r.value];
  n._zod.onattach.push((s) => {
    const i = s._zod.bag, u = (r.inclusive ? i.maximum : i.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    r.value < u && (r.inclusive ? i.maximum = r.value : i.exclusiveMaximum = r.value);
  }), n._zod.check = (s) => {
    (r.inclusive ? s.value <= r.value : s.value < r.value) || s.issues.push({
      origin: o,
      code: "too_big",
      maximum: r.value,
      input: s.value,
      inclusive: r.inclusive,
      inst: n,
      continue: !r.abort
    });
  };
}), zf = /* @__PURE__ */ w("$ZodCheckGreaterThan", (n, r) => {
  Je.init(n, r);
  const o = Cy[typeof r.value];
  n._zod.onattach.push((s) => {
    const i = s._zod.bag, u = (r.inclusive ? i.minimum : i.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    r.value > u && (r.inclusive ? i.minimum = r.value : i.exclusiveMinimum = r.value);
  }), n._zod.check = (s) => {
    (r.inclusive ? s.value >= r.value : s.value > r.value) || s.issues.push({
      origin: o,
      code: "too_small",
      minimum: r.value,
      input: s.value,
      inclusive: r.inclusive,
      inst: n,
      continue: !r.abort
    });
  };
}), My = /* @__PURE__ */ w("$ZodCheckMultipleOf", (n, r) => {
  Je.init(n, r), n._zod.onattach.push((o) => {
    var s;
    (s = o._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), n._zod.check = (o) => {
    if (typeof o.value != typeof r.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof o.value == "bigint" ? o.value % r.value === BigInt(0) : Gg(o.value, r.value) === 0) || o.issues.push({
      origin: typeof o.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: o.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Iy = /* @__PURE__ */ w("$ZodCheckNumberFormat", (n, r) => {
  Je.init(n, r), r.format = r.format || "float64";
  const o = r.format?.includes("int"), s = o ? "int" : "number", [i, u] = Jg[r.format];
  n._zod.onattach.push((d) => {
    const g = d._zod.bag;
    g.format = r.format, g.minimum = i, g.maximum = u, o && (g.pattern = Uy);
  }), n._zod.check = (d) => {
    const g = d.value;
    if (o) {
      if (!Number.isInteger(g)) {
        d.issues.push({
          expected: s,
          format: r.format,
          code: "invalid_type",
          input: g,
          inst: n
        });
        return;
      }
      if (!Number.isSafeInteger(g)) {
        g > 0 ? d.issues.push({
          input: g,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: s,
          continue: !r.abort
        }) : d.issues.push({
          input: g,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: s,
          continue: !r.abort
        });
        return;
      }
    }
    g < i && d.issues.push({
      origin: "number",
      input: g,
      code: "too_small",
      minimum: i,
      inclusive: !0,
      inst: n,
      continue: !r.abort
    }), g > u && d.issues.push({
      origin: "number",
      input: g,
      code: "too_big",
      maximum: u,
      inst: n
    });
  };
}), qy = /* @__PURE__ */ w("$ZodCheckBigIntFormat", (n, r) => {
  Je.init(n, r);
  const [o, s] = Xg[r.format];
  n._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.format = r.format, u.minimum = o, u.maximum = s;
  }), n._zod.check = (i) => {
    const u = i.value;
    u < o && i.issues.push({
      origin: "bigint",
      input: u,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: n,
      continue: !r.abort
    }), u > s && i.issues.push({
      origin: "bigint",
      input: u,
      code: "too_big",
      maximum: s,
      inst: n
    });
  };
}), Hy = /* @__PURE__ */ w("$ZodCheckMaxSize", (n, r) => {
  var o;
  Je.init(n, r), (o = n._zod.def).when ?? (o.when = (s) => {
    const i = s.value;
    return !Ai(i) && i.size !== void 0;
  }), n._zod.onattach.push((s) => {
    const i = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < i && (s._zod.bag.maximum = r.maximum);
  }), n._zod.check = (s) => {
    const i = s.value;
    i.size <= r.maximum || s.issues.push({
      origin: Zo(i),
      code: "too_big",
      maximum: r.maximum,
      input: i,
      inst: n,
      continue: !r.abort
    });
  };
}), Ly = /* @__PURE__ */ w("$ZodCheckMinSize", (n, r) => {
  var o;
  Je.init(n, r), (o = n._zod.def).when ?? (o.when = (s) => {
    const i = s.value;
    return !Ai(i) && i.size !== void 0;
  }), n._zod.onattach.push((s) => {
    const i = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > i && (s._zod.bag.minimum = r.minimum);
  }), n._zod.check = (s) => {
    const i = s.value;
    i.size >= r.minimum || s.issues.push({
      origin: Zo(i),
      code: "too_small",
      minimum: r.minimum,
      input: i,
      inst: n,
      continue: !r.abort
    });
  };
}), By = /* @__PURE__ */ w("$ZodCheckSizeEquals", (n, r) => {
  var o;
  Je.init(n, r), (o = n._zod.def).when ?? (o.when = (s) => {
    const i = s.value;
    return !Ai(i) && i.size !== void 0;
  }), n._zod.onattach.push((s) => {
    const i = s._zod.bag;
    i.minimum = r.size, i.maximum = r.size, i.size = r.size;
  }), n._zod.check = (s) => {
    const i = s.value, u = i.size;
    if (u === r.size) return;
    const d = u > r.size;
    s.issues.push({
      origin: Zo(i),
      ...d ? {
        code: "too_big",
        maximum: r.size
      } : {
        code: "too_small",
        minimum: r.size
      },
      inclusive: !0,
      exact: !0,
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Gy = /* @__PURE__ */ w("$ZodCheckMaxLength", (n, r) => {
  var o;
  Je.init(n, r), (o = n._zod.def).when ?? (o.when = (s) => {
    const i = s.value;
    return !Ai(i) && i.length !== void 0;
  }), n._zod.onattach.push((s) => {
    const i = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < i && (s._zod.bag.maximum = r.maximum);
  }), n._zod.check = (s) => {
    const i = s.value;
    if (i.length <= r.maximum) return;
    const u = Ro(i);
    s.issues.push({
      origin: u,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: i,
      inst: n,
      continue: !r.abort
    });
  };
}), Yy = /* @__PURE__ */ w("$ZodCheckMinLength", (n, r) => {
  var o;
  Je.init(n, r), (o = n._zod.def).when ?? (o.when = (s) => {
    const i = s.value;
    return !Ai(i) && i.length !== void 0;
  }), n._zod.onattach.push((s) => {
    const i = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > i && (s._zod.bag.minimum = r.minimum);
  }), n._zod.check = (s) => {
    const i = s.value;
    if (i.length >= r.minimum) return;
    const u = Ro(i);
    s.issues.push({
      origin: u,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: i,
      inst: n,
      continue: !r.abort
    });
  };
}), Qy = /* @__PURE__ */ w("$ZodCheckLengthEquals", (n, r) => {
  var o;
  Je.init(n, r), (o = n._zod.def).when ?? (o.when = (s) => {
    const i = s.value;
    return !Ai(i) && i.length !== void 0;
  }), n._zod.onattach.push((s) => {
    const i = s._zod.bag;
    i.minimum = r.length, i.maximum = r.length, i.length = r.length;
  }), n._zod.check = (s) => {
    const i = s.value, u = i.length;
    if (u === r.length) return;
    const d = Ro(i), g = u > r.length;
    s.issues.push({
      origin: d,
      ...g ? {
        code: "too_big",
        maximum: r.length
      } : {
        code: "too_small",
        minimum: r.length
      },
      inclusive: !0,
      exact: !0,
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Rr = /* @__PURE__ */ w("$ZodCheckStringFormat", (n, r) => {
  var o, s;
  Je.init(n, r), n._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.format = r.format, r.pattern && (u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(r.pattern));
  }), r.pattern ? (o = n._zod).check ?? (o.check = (i) => {
    r.pattern.lastIndex = 0, !r.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: r.format,
      input: i.value,
      ...r.pattern ? { pattern: r.pattern.toString() } : {},
      inst: n,
      continue: !r.abort
    });
  }) : (s = n._zod).check ?? (s.check = () => {
  });
}), Vy = /* @__PURE__ */ w("$ZodCheckRegex", (n, r) => {
  Rr.init(n, r), n._zod.check = (o) => {
    r.pattern.lastIndex = 0, !r.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: o.value,
      pattern: r.pattern.toString(),
      inst: n,
      continue: !r.abort
    });
  };
}), Jy = /* @__PURE__ */ w("$ZodCheckLowerCase", (n, r) => {
  r.pattern ?? (r.pattern = Zy), Rr.init(n, r);
}), Xy = /* @__PURE__ */ w("$ZodCheckUpperCase", (n, r) => {
  r.pattern ?? (r.pattern = Ry), Rr.init(n, r);
}), Ky = /* @__PURE__ */ w("$ZodCheckIncludes", (n, r) => {
  Je.init(n, r);
  const o = Zi(r.includes), s = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${o}` : o);
  r.pattern = s, n._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), n._zod.check = (i) => {
    i.value.includes(r.includes, r.position) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: r.includes,
      input: i.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Py = /* @__PURE__ */ w("$ZodCheckStartsWith", (n, r) => {
  Je.init(n, r);
  const o = new RegExp(`^${Zi(r.prefix)}.*`);
  r.pattern ?? (r.pattern = o), n._zod.onattach.push((s) => {
    const i = s._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(o);
  }), n._zod.check = (s) => {
    s.value.startsWith(r.prefix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: r.prefix,
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Fy = /* @__PURE__ */ w("$ZodCheckEndsWith", (n, r) => {
  Je.init(n, r);
  const o = new RegExp(`.*${Zi(r.suffix)}$`);
  r.pattern ?? (r.pattern = o), n._zod.onattach.push((s) => {
    const i = s._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(o);
  }), n._zod.check = (s) => {
    s.value.endsWith(r.suffix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: r.suffix,
      input: s.value,
      inst: n,
      continue: !r.abort
    });
  };
});
function yg(n, r, o) {
  n.issues.length && r.issues.push(...Pt(o, n.issues));
}
var Wy = /* @__PURE__ */ w("$ZodCheckProperty", (n, r) => {
  Je.init(n, r), n._zod.check = (o) => {
    const s = r.schema._zod.run({
      value: o.value[r.property],
      issues: []
    }, {});
    if (s instanceof Promise) return s.then((i) => yg(i, o, r.property));
    yg(s, o, r.property);
  };
}), e_ = /* @__PURE__ */ w("$ZodCheckMimeType", (n, r) => {
  Je.init(n, r);
  const o = new Set(r.mime);
  n._zod.onattach.push((s) => {
    s._zod.bag.mime = r.mime;
  }), n._zod.check = (s) => {
    o.has(s.value.type) || s.issues.push({
      code: "invalid_value",
      values: r.mime,
      input: s.value.type,
      inst: n
    });
  };
}), t_ = /* @__PURE__ */ w("$ZodCheckOverwrite", (n, r) => {
  Je.init(n, r), n._zod.check = (o) => {
    o.value = r.tx(o.value);
  };
}), n_ = class {
  constructor(n = []) {
    this.content = [], this.indent = 0, this && (this.args = n);
  }
  indented(n) {
    this.indent += 1, n(this), this.indent -= 1;
  }
  write(n) {
    if (typeof n == "function") {
      n(this, { execution: "sync" }), n(this, { execution: "async" });
      return;
    }
    const r = n.split(`
`).filter((i) => i), o = Math.min(...r.map((i) => i.length - i.trimStart().length)), s = r.map((i) => i.slice(o)).map((i) => " ".repeat(this.indent * 2) + i);
    for (const i of s) this.content.push(i);
  }
  compile() {
    const n = Function, r = this?.args, o = [...(this?.content ?? [""]).map((s) => `  ${s}`)];
    return new n(...r, o.join(`
`));
  }
}, i_ = {
  major: 4,
  minor: 0,
  patch: 0
}, te = /* @__PURE__ */ w("$ZodType", (n, r) => {
  var o;
  n ?? (n = {}), n._zod.def = r, n._zod.bag = n._zod.bag || {}, n._zod.version = i_;
  const s = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && s.unshift(n);
  for (const i of s) for (const u of i._zod.onattach) u(n);
  if (s.length === 0)
    (o = n._zod).deferred ?? (o.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const i = (u, d, g) => {
      let j = za(u), p;
      for (const _ of d) {
        if (_._zod.def.when) {
          if (!_._zod.def.when(u)) continue;
        } else if (j) continue;
        const $ = u.issues.length, y = _._zod.check(u);
        if (y instanceof Promise && g?.async === !1) throw new Ta();
        if (p || y instanceof Promise) p = (p ?? Promise.resolve()).then(async () => {
          await y, u.issues.length !== $ && (j || (j = za(u, $)));
        });
        else {
          if (u.issues.length === $) continue;
          j || (j = za(u, $));
        }
      }
      return p ? p.then(() => u) : u;
    };
    n._zod.run = (u, d) => {
      const g = n._zod.parse(u, d);
      if (g instanceof Promise) {
        if (d.async === !1) throw new Ta();
        return g.then((j) => i(j, s, d));
      }
      return i(g, s, d);
    };
  }
  n["~standard"] = {
    validate: (i) => {
      try {
        const u = yf(n, i);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return ay(n, i).then((d) => d.success ? { value: d.data } : { issues: d.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Cr = /* @__PURE__ */ w("$ZodString", (n, r) => {
  te.init(n, r), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? Oy(n._zod.bag), n._zod.parse = (o, s) => {
    if (r.coerce) try {
      o.value = String(o.value);
    } catch {
    }
    return typeof o.value == "string" || o.issues.push({
      expected: "string",
      code: "invalid_type",
      input: o.value,
      inst: n
    }), o;
  };
}), Ce = /* @__PURE__ */ w("$ZodStringFormat", (n, r) => {
  Rr.init(n, r), Cr.init(n, r);
}), a_ = /* @__PURE__ */ w("$ZodGUID", (n, r) => {
  r.pattern ?? (r.pattern = dy), Ce.init(n, r);
}), r_ = /* @__PURE__ */ w("$ZodUUID", (n, r) => {
  if (r.version) {
    const o = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[r.version];
    if (o === void 0) throw new Error(`Invalid UUID version: "${r.version}"`);
    r.pattern ?? (r.pattern = Ea(o));
  } else r.pattern ?? (r.pattern = Ea());
  Ce.init(n, r);
}), l_ = /* @__PURE__ */ w("$ZodEmail", (n, r) => {
  r.pattern ?? (r.pattern = my), Ce.init(n, r);
}), o_ = /* @__PURE__ */ w("$ZodURL", (n, r) => {
  Ce.init(n, r), n._zod.check = (o) => {
    try {
      const s = o.value, i = new URL(s), u = i.href;
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(i.hostname) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: Sy.source,
        input: o.value,
        inst: n,
        continue: !r.abort
      })), r.protocol && (r.protocol.lastIndex = 0, r.protocol.test(i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: r.protocol.source,
        input: o.value,
        inst: n,
        continue: !r.abort
      })), !s.endsWith("/") && u.endsWith("/") ? o.value = u.slice(0, -1) : o.value = u;
      return;
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "url",
        input: o.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
}), u_ = /* @__PURE__ */ w("$ZodEmoji", (n, r) => {
  r.pattern ?? (r.pattern = py()), Ce.init(n, r);
}), c_ = /* @__PURE__ */ w("$ZodNanoID", (n, r) => {
  r.pattern ?? (r.pattern = sy), Ce.init(n, r);
}), s_ = /* @__PURE__ */ w("$ZodCUID", (n, r) => {
  r.pattern ?? (r.pattern = ry), Ce.init(n, r);
}), f_ = /* @__PURE__ */ w("$ZodCUID2", (n, r) => {
  r.pattern ?? (r.pattern = ly), Ce.init(n, r);
}), d_ = /* @__PURE__ */ w("$ZodULID", (n, r) => {
  r.pattern ?? (r.pattern = oy), Ce.init(n, r);
}), m_ = /* @__PURE__ */ w("$ZodXID", (n, r) => {
  r.pattern ?? (r.pattern = uy), Ce.init(n, r);
}), v_ = /* @__PURE__ */ w("$ZodKSUID", (n, r) => {
  r.pattern ?? (r.pattern = cy), Ce.init(n, r);
}), p_ = /* @__PURE__ */ w("$ZodISODateTime", (n, r) => {
  r.pattern ?? (r.pattern = ky(r)), Ce.init(n, r);
}), h_ = /* @__PURE__ */ w("$ZodISODate", (n, r) => {
  r.pattern ?? (r.pattern = Ty), Ce.init(n, r);
}), g_ = /* @__PURE__ */ w("$ZodISOTime", (n, r) => {
  r.pattern ?? (r.pattern = Ey(r)), Ce.init(n, r);
}), y_ = /* @__PURE__ */ w("$ZodISODuration", (n, r) => {
  r.pattern ?? (r.pattern = fy), Ce.init(n, r);
}), __ = /* @__PURE__ */ w("$ZodIPv4", (n, r) => {
  r.pattern ?? (r.pattern = hy), Ce.init(n, r), n._zod.onattach.push((o) => {
    const s = o._zod.bag;
    s.format = "ipv4";
  });
}), b_ = /* @__PURE__ */ w("$ZodIPv6", (n, r) => {
  r.pattern ?? (r.pattern = gy), Ce.init(n, r), n._zod.onattach.push((o) => {
    const s = o._zod.bag;
    s.format = "ipv6";
  }), n._zod.check = (o) => {
    try {
      new URL(`http://[${o.value}]`);
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: o.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
}), S_ = /* @__PURE__ */ w("$ZodCIDRv4", (n, r) => {
  r.pattern ?? (r.pattern = yy), Ce.init(n, r);
}), $_ = /* @__PURE__ */ w("$ZodCIDRv6", (n, r) => {
  r.pattern ?? (r.pattern = _y), Ce.init(n, r), n._zod.check = (o) => {
    const [s, i] = o.value.split("/");
    try {
      if (!i) throw new Error();
      const u = Number(i);
      if (`${u}` !== i) throw new Error();
      if (u < 0 || u > 128) throw new Error();
      new URL(`http://[${s}]`);
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: o.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
});
function Tf(n) {
  if (n === "") return !0;
  if (n.length % 4 !== 0) return !1;
  try {
    return atob(n), !0;
  } catch {
    return !1;
  }
}
var z_ = /* @__PURE__ */ w("$ZodBase64", (n, r) => {
  r.pattern ?? (r.pattern = by), Ce.init(n, r), n._zod.onattach.push((o) => {
    o._zod.bag.contentEncoding = "base64";
  }), n._zod.check = (o) => {
    Tf(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64",
      input: o.value,
      inst: n,
      continue: !r.abort
    });
  };
});
function T_(n) {
  if (!Sf.test(n)) return !1;
  const r = n.replace(/[-_]/g, (o) => o === "-" ? "+" : "/");
  return Tf(r.padEnd(Math.ceil(r.length / 4) * 4, "="));
}
var w_ = /* @__PURE__ */ w("$ZodBase64URL", (n, r) => {
  r.pattern ?? (r.pattern = Sf), Ce.init(n, r), n._zod.onattach.push((o) => {
    o._zod.bag.contentEncoding = "base64url";
  }), n._zod.check = (o) => {
    T_(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: o.value,
      inst: n,
      continue: !r.abort
    });
  };
}), E_ = /* @__PURE__ */ w("$ZodE164", (n, r) => {
  r.pattern ?? (r.pattern = $y), Ce.init(n, r);
});
function k_(n, r = null) {
  try {
    const o = n.split(".");
    if (o.length !== 3) return !1;
    const [s] = o;
    if (!s) return !1;
    const i = JSON.parse(atob(s));
    return !("typ" in i && i?.typ !== "JWT" || !i.alg || r && (!("alg" in i) || i.alg !== r));
  } catch {
    return !1;
  }
}
var O_ = /* @__PURE__ */ w("$ZodJWT", (n, r) => {
  Ce.init(n, r), n._zod.check = (o) => {
    k_(o.value, r.alg) || o.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: o.value,
      inst: n,
      continue: !r.abort
    });
  };
}), N_ = /* @__PURE__ */ w("$ZodCustomStringFormat", (n, r) => {
  Ce.init(n, r), n._zod.check = (o) => {
    r.fn(o.value) || o.issues.push({
      code: "invalid_format",
      format: r.format,
      input: o.value,
      inst: n,
      continue: !r.abort
    });
  };
}), wf = /* @__PURE__ */ w("$ZodNumber", (n, r) => {
  te.init(n, r), n._zod.pattern = n._zod.bag.pattern ?? xy, n._zod.parse = (o, s) => {
    if (r.coerce) try {
      o.value = Number(o.value);
    } catch {
    }
    const i = o.value;
    if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return o;
    const u = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : "Infinity" : void 0;
    return o.issues.push({
      expected: "number",
      code: "invalid_type",
      input: i,
      inst: n,
      ...u ? { received: u } : {}
    }), o;
  };
}), U_ = /* @__PURE__ */ w("$ZodNumber", (n, r) => {
  Iy.init(n, r), wf.init(n, r);
}), Ef = /* @__PURE__ */ w("$ZodBoolean", (n, r) => {
  te.init(n, r), n._zod.pattern = jy, n._zod.parse = (o, s) => {
    if (r.coerce) try {
      o.value = !!o.value;
    } catch {
    }
    const i = o.value;
    return typeof i == "boolean" || o.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: i,
      inst: n
    }), o;
  };
}), kf = /* @__PURE__ */ w("$ZodBigInt", (n, r) => {
  te.init(n, r), n._zod.pattern = Ny, n._zod.parse = (o, s) => {
    if (r.coerce) try {
      o.value = BigInt(o.value);
    } catch {
    }
    return typeof o.value == "bigint" || o.issues.push({
      expected: "bigint",
      code: "invalid_type",
      input: o.value,
      inst: n
    }), o;
  };
}), x_ = /* @__PURE__ */ w("$ZodBigInt", (n, r) => {
  qy.init(n, r), kf.init(n, r);
}), j_ = /* @__PURE__ */ w("$ZodSymbol", (n, r) => {
  te.init(n, r), n._zod.parse = (o, s) => {
    const i = o.value;
    return typeof i == "symbol" || o.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input: i,
      inst: n
    }), o;
  };
}), D_ = /* @__PURE__ */ w("$ZodUndefined", (n, r) => {
  te.init(n, r), n._zod.pattern = Ay, n._zod.values = /* @__PURE__ */ new Set([void 0]), n._zod.optin = "optional", n._zod.optout = "optional", n._zod.parse = (o, s) => {
    const i = o.value;
    return typeof i > "u" || o.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input: i,
      inst: n
    }), o;
  };
}), A_ = /* @__PURE__ */ w("$ZodNull", (n, r) => {
  te.init(n, r), n._zod.pattern = Dy, n._zod.values = /* @__PURE__ */ new Set([null]), n._zod.parse = (o, s) => {
    const i = o.value;
    return i === null || o.issues.push({
      expected: "null",
      code: "invalid_type",
      input: i,
      inst: n
    }), o;
  };
}), Z_ = /* @__PURE__ */ w("$ZodAny", (n, r) => {
  te.init(n, r), n._zod.parse = (o) => o;
}), ko = /* @__PURE__ */ w("$ZodUnknown", (n, r) => {
  te.init(n, r), n._zod.parse = (o) => o;
}), R_ = /* @__PURE__ */ w("$ZodNever", (n, r) => {
  te.init(n, r), n._zod.parse = (o, s) => (o.issues.push({
    expected: "never",
    code: "invalid_type",
    input: o.value,
    inst: n
  }), o);
}), C_ = /* @__PURE__ */ w("$ZodVoid", (n, r) => {
  te.init(n, r), n._zod.parse = (o, s) => {
    const i = o.value;
    return typeof i > "u" || o.issues.push({
      expected: "void",
      code: "invalid_type",
      input: i,
      inst: n
    }), o;
  };
}), M_ = /* @__PURE__ */ w("$ZodDate", (n, r) => {
  te.init(n, r), n._zod.parse = (o, s) => {
    if (r.coerce) try {
      o.value = new Date(o.value);
    } catch {
    }
    const i = o.value, u = i instanceof Date;
    return u && !Number.isNaN(i.getTime()) || o.issues.push({
      expected: "date",
      code: "invalid_type",
      input: i,
      ...u ? { received: "Invalid Date" } : {},
      inst: n
    }), o;
  };
});
function _g(n, r, o) {
  n.issues.length && r.issues.push(...Pt(o, n.issues)), r.value[o] = n.value;
}
var Of = /* @__PURE__ */ w("$ZodArray", (n, r) => {
  te.init(n, r), n._zod.parse = (o, s) => {
    const i = o.value;
    if (!Array.isArray(i))
      return o.issues.push({
        expected: "array",
        code: "invalid_type",
        input: i,
        inst: n
      }), o;
    o.value = Array(i.length);
    const u = [];
    for (let d = 0; d < i.length; d++) {
      const g = i[d], j = r.element._zod.run({
        value: g,
        issues: []
      }, s);
      j instanceof Promise ? u.push(j.then((p) => _g(p, o, d))) : _g(j, o, d);
    }
    return u.length ? Promise.all(u).then(() => o) : o;
  };
});
function So(n, r, o) {
  n.issues.length && r.issues.push(...Pt(o, n.issues)), r.value[o] = n.value;
}
function bg(n, r, o, s) {
  n.issues.length ? s[o] === void 0 ? o in s ? r.value[o] = void 0 : r.value[o] = n.value : r.issues.push(...Pt(o, n.issues)) : n.value === void 0 ? o in s && (r.value[o] = void 0) : r.value[o] = n.value;
}
var I_ = /* @__PURE__ */ w("$ZodObject", (n, r) => {
  te.init(n, r);
  const o = Do(() => {
    const $ = Object.keys(r.shape);
    for (const R of $) if (!(r.shape[R] instanceof te)) throw new Error(`Invalid element at key "${R}": expected a Zod schema`);
    const y = Vg(r.shape);
    return {
      shape: r.shape,
      keys: $,
      keySet: new Set($),
      numKeys: $.length,
      optionalKeys: new Set(y)
    };
  });
  Te(n._zod, "propValues", () => {
    const $ = r.shape, y = {};
    for (const R in $) {
      const q = $[R]._zod;
      if (q.values) {
        y[R] ?? (y[R] = /* @__PURE__ */ new Set());
        for (const X of q.values) y[R].add(X);
      }
    }
    return y;
  });
  const s = ($) => {
    const y = new n_([
      "shape",
      "payload",
      "ctx"
    ]), R = o.value, q = (K) => {
      const ce = $a(K);
      return `shape[${ce}]._zod.run({ value: input[${ce}], issues: [] }, ctx)`;
    };
    y.write("const input = payload.value;");
    const X = /* @__PURE__ */ Object.create(null);
    let F = 0;
    for (const K of R.keys) X[K] = `key_${F++}`;
    y.write("const newResult = {}");
    for (const K of R.keys) if (R.optionalKeys.has(K)) {
      const ce = X[K];
      y.write(`const ${ce} = ${q(K)};`);
      const ue = $a(K);
      y.write(`
        if (${ce}.issues.length) {
          if (input[${ue}] === undefined) {
            if (${ue} in input) {
              newResult[${ue}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${ce}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${ue}, ...iss.path] : [${ue}],
              }))
            );
          }
        } else if (${ce}.value === undefined) {
          if (${ue} in input) newResult[${ue}] = undefined;
        } else {
          newResult[${ue}] = ${ce}.value;
        }
        `);
    } else {
      const ce = X[K];
      y.write(`const ${ce} = ${q(K)};`), y.write(`
          if (${ce}.issues.length) payload.issues = payload.issues.concat(${ce}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${$a(K)}, ...iss.path] : [${$a(K)}]
          })));`), y.write(`newResult[${$a(K)}] = ${ce}.value`);
    }
    y.write("payload.value = newResult;"), y.write("return payload;");
    const ee = y.compile();
    return (K, ce) => ee($, K, ce);
  };
  let i;
  const u = Or, d = !wo.jitless, j = d && Yg.value, p = r.catchall;
  let _;
  n._zod.parse = ($, y) => {
    _ ?? (_ = o.value);
    const R = $.value;
    if (!u(R))
      return $.issues.push({
        expected: "object",
        code: "invalid_type",
        input: R,
        inst: n
      }), $;
    const q = [];
    if (d && j && y?.async === !1 && y.jitless !== !0)
      i || (i = s(r.shape)), $ = i($, y);
    else {
      $.value = {};
      const ce = _.shape;
      for (const ue of _.keys) {
        const rt = ce[ue], nt = rt._zod.run({
          value: R[ue],
          issues: []
        }, y), vt = rt._zod.optin === "optional" && rt._zod.optout === "optional";
        nt instanceof Promise ? q.push(nt.then((he) => vt ? bg(he, $, ue, R) : So(he, $, ue))) : vt ? bg(nt, $, ue, R) : So(nt, $, ue);
      }
    }
    if (!p) return q.length ? Promise.all(q).then(() => $) : $;
    const X = [], F = _.keySet, ee = p._zod, K = ee.def.type;
    for (const ce of Object.keys(R)) {
      if (F.has(ce)) continue;
      if (K === "never") {
        X.push(ce);
        continue;
      }
      const ue = ee.run({
        value: R[ce],
        issues: []
      }, y);
      ue instanceof Promise ? q.push(ue.then((rt) => So(rt, $, ce))) : So(ue, $, ce);
    }
    return X.length && $.issues.push({
      code: "unrecognized_keys",
      keys: X,
      input: R,
      inst: n
    }), q.length ? Promise.all(q).then(() => $) : $;
  };
});
function Sg(n, r, o, s) {
  for (const i of n) if (i.issues.length === 0)
    return r.value = i.value, r;
  return r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: o,
    errors: n.map((i) => i.issues.map((u) => ln(u, s, ft())))
  }), r;
}
var Nf = /* @__PURE__ */ w("$ZodUnion", (n, r) => {
  te.init(n, r), Te(n._zod, "optin", () => r.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), Te(n._zod, "optout", () => r.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), Te(n._zod, "values", () => {
    if (r.options.every((o) => o._zod.values)) return new Set(r.options.flatMap((o) => Array.from(o._zod.values)));
  }), Te(n._zod, "pattern", () => {
    if (r.options.every((o) => o._zod.pattern)) {
      const o = r.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${o.map((s) => Ao(s.source)).join("|")})$`);
    }
  }), n._zod.parse = (o, s) => {
    let i = !1;
    const u = [];
    for (const d of r.options) {
      const g = d._zod.run({
        value: o.value,
        issues: []
      }, s);
      if (g instanceof Promise)
        u.push(g), i = !0;
      else {
        if (g.issues.length === 0) return g;
        u.push(g);
      }
    }
    return i ? Promise.all(u).then((d) => Sg(d, o, n, s)) : Sg(u, o, n, s);
  };
}), q_ = /* @__PURE__ */ w("$ZodDiscriminatedUnion", (n, r) => {
  Nf.init(n, r);
  const o = n._zod.parse;
  Te(n._zod, "propValues", () => {
    const i = {};
    for (const u of r.options) {
      const d = u._zod.propValues;
      if (!d || Object.keys(d).length === 0) throw new Error(`Invalid discriminated union option at index "${r.options.indexOf(u)}"`);
      for (const [g, j] of Object.entries(d)) {
        i[g] || (i[g] = /* @__PURE__ */ new Set());
        for (const p of j) i[g].add(p);
      }
    }
    return i;
  });
  const s = Do(() => {
    const i = r.options, u = /* @__PURE__ */ new Map();
    for (const d of i) {
      const g = d._zod.propValues[r.discriminator];
      if (!g || g.size === 0) throw new Error(`Invalid discriminated union option at index "${r.options.indexOf(d)}"`);
      for (const j of g) {
        if (u.has(j)) throw new Error(`Duplicate discriminator value "${String(j)}"`);
        u.set(j, d);
      }
    }
    return u;
  });
  n._zod.parse = (i, u) => {
    const d = i.value;
    if (!Or(d))
      return i.issues.push({
        code: "invalid_type",
        expected: "object",
        input: d,
        inst: n
      }), i;
    const g = s.value.get(d?.[r.discriminator]);
    return g ? g._zod.run(i, u) : r.unionFallback ? o(i, u) : (i.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      input: d,
      path: [r.discriminator],
      inst: n
    }), i);
  };
}), H_ = /* @__PURE__ */ w("$ZodIntersection", (n, r) => {
  te.init(n, r), n._zod.parse = (o, s) => {
    const i = o.value, u = r.left._zod.run({
      value: i,
      issues: []
    }, s), d = r.right._zod.run({
      value: i,
      issues: []
    }, s);
    return u instanceof Promise || d instanceof Promise ? Promise.all([u, d]).then(([g, j]) => $g(o, g, j)) : $g(o, u, d);
  };
});
function rf(n, r) {
  if (n === r) return {
    valid: !0,
    data: n
  };
  if (n instanceof Date && r instanceof Date && +n == +r) return {
    valid: !0,
    data: n
  };
  if (Nr(n) && Nr(r)) {
    const o = Object.keys(r), s = Object.keys(n).filter((u) => o.indexOf(u) !== -1), i = {
      ...n,
      ...r
    };
    for (const u of s) {
      const d = rf(n[u], r[u]);
      if (!d.valid) return {
        valid: !1,
        mergeErrorPath: [u, ...d.mergeErrorPath]
      };
      i[u] = d.data;
    }
    return {
      valid: !0,
      data: i
    };
  }
  if (Array.isArray(n) && Array.isArray(r)) {
    if (n.length !== r.length) return {
      valid: !1,
      mergeErrorPath: []
    };
    const o = [];
    for (let s = 0; s < n.length; s++) {
      const i = n[s], u = r[s], d = rf(i, u);
      if (!d.valid) return {
        valid: !1,
        mergeErrorPath: [s, ...d.mergeErrorPath]
      };
      o.push(d.data);
    }
    return {
      valid: !0,
      data: o
    };
  }
  return {
    valid: !1,
    mergeErrorPath: []
  };
}
function $g(n, r, o) {
  if (r.issues.length && n.issues.push(...r.issues), o.issues.length && n.issues.push(...o.issues), za(n)) return n;
  const s = rf(r.value, o.value);
  if (!s.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return n.value = s.data, n;
}
var Io = /* @__PURE__ */ w("$ZodTuple", (n, r) => {
  te.init(n, r);
  const o = r.items, s = o.length - [...o].reverse().findIndex((i) => i._zod.optin !== "optional");
  n._zod.parse = (i, u) => {
    const d = i.value;
    if (!Array.isArray(d))
      return i.issues.push({
        input: d,
        inst: n,
        expected: "tuple",
        code: "invalid_type"
      }), i;
    i.value = [];
    const g = [];
    if (!r.rest) {
      const p = d.length > o.length, _ = d.length < s - 1;
      if (p || _)
        return i.issues.push({
          input: d,
          inst: n,
          origin: "array",
          ...p ? {
            code: "too_big",
            maximum: o.length
          } : {
            code: "too_small",
            minimum: o.length
          }
        }), i;
    }
    let j = -1;
    for (const p of o) {
      if (j++, j >= d.length && j >= s)
        continue;
      const _ = p._zod.run({
        value: d[j],
        issues: []
      }, u);
      _ instanceof Promise ? g.push(_.then(($) => $o($, i, j))) : $o(_, i, j);
    }
    if (r.rest) {
      const p = d.slice(o.length);
      for (const _ of p) {
        j++;
        const $ = r.rest._zod.run({
          value: _,
          issues: []
        }, u);
        $ instanceof Promise ? g.push($.then((y) => $o(y, i, j))) : $o($, i, j);
      }
    }
    return g.length ? Promise.all(g).then(() => i) : i;
  };
});
function $o(n, r, o) {
  n.issues.length && r.issues.push(...Pt(o, n.issues)), r.value[o] = n.value;
}
var L_ = /* @__PURE__ */ w("$ZodRecord", (n, r) => {
  te.init(n, r), n._zod.parse = (o, s) => {
    const i = o.value;
    if (!Nr(i))
      return o.issues.push({
        expected: "record",
        code: "invalid_type",
        input: i,
        inst: n
      }), o;
    const u = [];
    if (r.keyType._zod.values) {
      const d = r.keyType._zod.values;
      o.value = {};
      for (const j of d) if (typeof j == "string" || typeof j == "number" || typeof j == "symbol") {
        const p = r.valueType._zod.run({
          value: i[j],
          issues: []
        }, s);
        p instanceof Promise ? u.push(p.then((_) => {
          _.issues.length && o.issues.push(...Pt(j, _.issues)), o.value[j] = _.value;
        })) : (p.issues.length && o.issues.push(...Pt(j, p.issues)), o.value[j] = p.value);
      }
      let g;
      for (const j in i) d.has(j) || (g = g ?? [], g.push(j));
      g && g.length > 0 && o.issues.push({
        code: "unrecognized_keys",
        input: i,
        inst: n,
        keys: g
      });
    } else {
      o.value = {};
      for (const d of Reflect.ownKeys(i)) {
        if (d === "__proto__") continue;
        const g = r.keyType._zod.run({
          value: d,
          issues: []
        }, s);
        if (g instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
        if (g.issues.length) {
          o.issues.push({
            origin: "record",
            code: "invalid_key",
            issues: g.issues.map((p) => ln(p, s, ft())),
            input: d,
            path: [d],
            inst: n
          }), o.value[g.value] = g.value;
          continue;
        }
        const j = r.valueType._zod.run({
          value: i[d],
          issues: []
        }, s);
        j instanceof Promise ? u.push(j.then((p) => {
          p.issues.length && o.issues.push(...Pt(d, p.issues)), o.value[g.value] = p.value;
        })) : (j.issues.length && o.issues.push(...Pt(d, j.issues)), o.value[g.value] = j.value);
      }
    }
    return u.length ? Promise.all(u).then(() => o) : o;
  };
}), B_ = /* @__PURE__ */ w("$ZodMap", (n, r) => {
  te.init(n, r), n._zod.parse = (o, s) => {
    const i = o.value;
    if (!(i instanceof Map))
      return o.issues.push({
        expected: "map",
        code: "invalid_type",
        input: i,
        inst: n
      }), o;
    const u = [];
    o.value = /* @__PURE__ */ new Map();
    for (const [d, g] of i) {
      const j = r.keyType._zod.run({
        value: d,
        issues: []
      }, s), p = r.valueType._zod.run({
        value: g,
        issues: []
      }, s);
      j instanceof Promise || p instanceof Promise ? u.push(Promise.all([j, p]).then(([_, $]) => {
        zg(_, $, o, d, i, n, s);
      })) : zg(j, p, o, d, i, n, s);
    }
    return u.length ? Promise.all(u).then(() => o) : o;
  };
});
function zg(n, r, o, s, i, u, d) {
  n.issues.length && (Eo.has(typeof s) ? o.issues.push(...Pt(s, n.issues)) : o.issues.push({
    origin: "map",
    code: "invalid_key",
    input: i,
    inst: u,
    issues: n.issues.map((g) => ln(g, d, ft()))
  })), r.issues.length && (Eo.has(typeof s) ? o.issues.push(...Pt(s, r.issues)) : o.issues.push({
    origin: "map",
    code: "invalid_element",
    input: i,
    inst: u,
    key: s,
    issues: r.issues.map((g) => ln(g, d, ft()))
  })), o.value.set(n.value, r.value);
}
var G_ = /* @__PURE__ */ w("$ZodSet", (n, r) => {
  te.init(n, r), n._zod.parse = (o, s) => {
    const i = o.value;
    if (!(i instanceof Set))
      return o.issues.push({
        input: i,
        inst: n,
        expected: "set",
        code: "invalid_type"
      }), o;
    const u = [];
    o.value = /* @__PURE__ */ new Set();
    for (const d of i) {
      const g = r.valueType._zod.run({
        value: d,
        issues: []
      }, s);
      g instanceof Promise ? u.push(g.then((j) => Tg(j, o))) : Tg(g, o);
    }
    return u.length ? Promise.all(u).then(() => o) : o;
  };
});
function Tg(n, r) {
  n.issues.length && r.issues.push(...n.issues), r.value.add(n.value);
}
var Y_ = /* @__PURE__ */ w("$ZodEnum", (n, r) => {
  te.init(n, r);
  const o = sf(r.entries);
  n._zod.values = new Set(o), n._zod.pattern = new RegExp(`^(${o.filter((s) => Eo.has(typeof s)).map((s) => typeof s == "string" ? Zi(s) : s.toString()).join("|")})$`), n._zod.parse = (s, i) => {
    const u = s.value;
    return n._zod.values.has(u) || s.issues.push({
      code: "invalid_value",
      values: o,
      input: u,
      inst: n
    }), s;
  };
}), Q_ = /* @__PURE__ */ w("$ZodLiteral", (n, r) => {
  te.init(n, r), n._zod.values = new Set(r.values), n._zod.pattern = new RegExp(`^(${r.values.map((o) => typeof o == "string" ? Zi(o) : o ? o.toString() : String(o)).join("|")})$`), n._zod.parse = (o, s) => {
    const i = o.value;
    return n._zod.values.has(i) || o.issues.push({
      code: "invalid_value",
      values: r.values,
      input: i,
      inst: n
    }), o;
  };
}), V_ = /* @__PURE__ */ w("$ZodFile", (n, r) => {
  te.init(n, r), n._zod.parse = (o, s) => {
    const i = o.value;
    return i instanceof File || o.issues.push({
      expected: "file",
      code: "invalid_type",
      input: i,
      inst: n
    }), o;
  };
}), Uf = /* @__PURE__ */ w("$ZodTransform", (n, r) => {
  te.init(n, r), n._zod.parse = (o, s) => {
    const i = r.transform(o.value, o);
    if (s.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((u) => (o.value = u, o));
    if (i instanceof Promise) throw new Ta();
    return o.value = i, o;
  };
}), J_ = /* @__PURE__ */ w("$ZodOptional", (n, r) => {
  te.init(n, r), n._zod.optin = "optional", n._zod.optout = "optional", Te(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), Te(n._zod, "pattern", () => {
    const o = r.innerType._zod.pattern;
    return o ? new RegExp(`^(${Ao(o.source)})?$`) : void 0;
  }), n._zod.parse = (o, s) => r.innerType._zod.optin === "optional" ? r.innerType._zod.run(o, s) : o.value === void 0 ? o : r.innerType._zod.run(o, s);
}), X_ = /* @__PURE__ */ w("$ZodNullable", (n, r) => {
  te.init(n, r), Te(n._zod, "optin", () => r.innerType._zod.optin), Te(n._zod, "optout", () => r.innerType._zod.optout), Te(n._zod, "pattern", () => {
    const o = r.innerType._zod.pattern;
    return o ? new RegExp(`^(${Ao(o.source)}|null)$`) : void 0;
  }), Te(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), n._zod.parse = (o, s) => o.value === null ? o : r.innerType._zod.run(o, s);
}), K_ = /* @__PURE__ */ w("$ZodDefault", (n, r) => {
  te.init(n, r), n._zod.optin = "optional", Te(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (o, s) => {
    if (o.value === void 0)
      return o.value = r.defaultValue, o;
    const i = r.innerType._zod.run(o, s);
    return i instanceof Promise ? i.then((u) => wg(u, r)) : wg(i, r);
  };
});
function wg(n, r) {
  return n.value === void 0 && (n.value = r.defaultValue), n;
}
var P_ = /* @__PURE__ */ w("$ZodPrefault", (n, r) => {
  te.init(n, r), n._zod.optin = "optional", Te(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (o, s) => (o.value === void 0 && (o.value = r.defaultValue), r.innerType._zod.run(o, s));
}), F_ = /* @__PURE__ */ w("$ZodNonOptional", (n, r) => {
  te.init(n, r), Te(n._zod, "values", () => {
    const o = r.innerType._zod.values;
    return o ? new Set([...o].filter((s) => s !== void 0)) : void 0;
  }), n._zod.parse = (o, s) => {
    const i = r.innerType._zod.run(o, s);
    return i instanceof Promise ? i.then((u) => Eg(u, n)) : Eg(i, n);
  };
});
function Eg(n, r) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: r
  }), n;
}
var W_ = /* @__PURE__ */ w("$ZodSuccess", (n, r) => {
  te.init(n, r), n._zod.parse = (o, s) => {
    const i = r.innerType._zod.run(o, s);
    return i instanceof Promise ? i.then((u) => (o.value = u.issues.length === 0, o)) : (o.value = i.issues.length === 0, o);
  };
}), eb = /* @__PURE__ */ w("$ZodCatch", (n, r) => {
  te.init(n, r), n._zod.optin = "optional", Te(n._zod, "optout", () => r.innerType._zod.optout), Te(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (o, s) => {
    const i = r.innerType._zod.run(o, s);
    return i instanceof Promise ? i.then((u) => (o.value = u.value, u.issues.length && (o.value = r.catchValue({
      ...o,
      error: { issues: u.issues.map((d) => ln(d, s, ft())) },
      input: o.value
    }), o.issues = []), o)) : (o.value = i.value, i.issues.length && (o.value = r.catchValue({
      ...o,
      error: { issues: i.issues.map((u) => ln(u, s, ft())) },
      input: o.value
    }), o.issues = []), o);
  };
}), tb = /* @__PURE__ */ w("$ZodNaN", (n, r) => {
  te.init(n, r), n._zod.parse = (o, s) => ((typeof o.value != "number" || !Number.isNaN(o.value)) && o.issues.push({
    input: o.value,
    inst: n,
    expected: "nan",
    code: "invalid_type"
  }), o);
}), xf = /* @__PURE__ */ w("$ZodPipe", (n, r) => {
  te.init(n, r), Te(n._zod, "values", () => r.in._zod.values), Te(n._zod, "optin", () => r.in._zod.optin), Te(n._zod, "optout", () => r.out._zod.optout), n._zod.parse = (o, s) => {
    const i = r.in._zod.run(o, s);
    return i instanceof Promise ? i.then((u) => kg(u, r, s)) : kg(i, r, s);
  };
});
function kg(n, r, o) {
  return za(n) ? n : r.out._zod.run({
    value: n.value,
    issues: n.issues
  }, o);
}
var nb = /* @__PURE__ */ w("$ZodReadonly", (n, r) => {
  te.init(n, r), Te(n._zod, "propValues", () => r.innerType._zod.propValues), Te(n._zod, "values", () => r.innerType._zod.values), Te(n._zod, "optin", () => r.innerType._zod.optin), Te(n._zod, "optout", () => r.innerType._zod.optout), n._zod.parse = (o, s) => {
    const i = r.innerType._zod.run(o, s);
    return i instanceof Promise ? i.then(Og) : Og(i);
  };
});
function Og(n) {
  return n.value = Object.freeze(n.value), n;
}
var ib = /* @__PURE__ */ w("$ZodTemplateLiteral", (n, r) => {
  te.init(n, r);
  const o = [];
  for (const s of r.parts) if (s instanceof te) {
    if (!s._zod.pattern) throw new Error(`Invalid template literal part, no pattern found: ${[...s._zod.traits].shift()}`);
    const i = s._zod.pattern instanceof RegExp ? s._zod.pattern.source : s._zod.pattern;
    if (!i) throw new Error(`Invalid template literal part: ${s._zod.traits}`);
    const u = i.startsWith("^") ? 1 : 0, d = i.endsWith("$") ? i.length - 1 : i.length;
    o.push(i.slice(u, d));
  } else if (s === null || Qg.has(typeof s)) o.push(Zi(`${s}`));
  else throw new Error(`Invalid template literal part: ${s}`);
  n._zod.pattern = new RegExp(`^${o.join("")}$`), n._zod.parse = (s, i) => typeof s.value != "string" ? (s.issues.push({
    input: s.value,
    inst: n,
    expected: "template_literal",
    code: "invalid_type"
  }), s) : (n._zod.pattern.lastIndex = 0, n._zod.pattern.test(s.value) || s.issues.push({
    input: s.value,
    inst: n,
    code: "invalid_format",
    format: "template_literal",
    pattern: n._zod.pattern.source
  }), s);
}), ab = /* @__PURE__ */ w("$ZodPromise", (n, r) => {
  te.init(n, r), n._zod.parse = (o, s) => Promise.resolve(o.value).then((i) => r.innerType._zod.run({
    value: i,
    issues: []
  }, s));
}), rb = /* @__PURE__ */ w("$ZodLazy", (n, r) => {
  te.init(n, r), Te(n._zod, "innerType", () => r.getter()), Te(n._zod, "pattern", () => n._zod.innerType._zod.pattern), Te(n._zod, "propValues", () => n._zod.innerType._zod.propValues), Te(n._zod, "optin", () => n._zod.innerType._zod.optin), Te(n._zod, "optout", () => n._zod.innerType._zod.optout), n._zod.parse = (o, s) => n._zod.innerType._zod.run(o, s);
}), lb = /* @__PURE__ */ w("$ZodCustom", (n, r) => {
  Je.init(n, r), te.init(n, r), n._zod.parse = (o, s) => o, n._zod.check = (o) => {
    const s = o.value, i = r.fn(s);
    if (i instanceof Promise) return i.then((u) => Ng(u, o, s, n));
    Ng(i, o, s, n);
  };
});
function Ng(n, r, o, s) {
  if (!n) {
    const i = {
      code: "custom",
      input: o,
      inst: s,
      path: [...s._zod.def.path ?? []],
      continue: !s._zod.def.abort
    };
    s._zod.def.params && (i.params = s._zod.def.params), r.issues.push(wa(i));
  }
}
var bz = () => {
  const n = {
    string: {
      unit: "حرف",
      verb: "أن يحوي"
    },
    file: {
      unit: "بايت",
      verb: "أن يحوي"
    },
    array: {
      unit: "عنصر",
      verb: "أن يحوي"
    },
    set: {
      unit: "عنصر",
      verb: "أن يحوي"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "number";
      case "object":
        if (Array.isArray(i)) return "array";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "مدخل",
    email: "بريد إلكتروني",
    url: "رابط",
    emoji: "إيموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاريخ ووقت بمعيار ISO",
    date: "تاريخ بمعيار ISO",
    time: "وقت بمعيار ISO",
    duration: "مدة بمعيار ISO",
    ipv4: "عنوان IPv4",
    ipv6: "عنوان IPv6",
    cidrv4: "مدى عناوين بصيغة IPv4",
    cidrv6: "مدى عناوين بصيغة IPv6",
    base64: "نَص بترميز base64-encoded",
    base64url: "نَص بترميز base64url-encoded",
    json_string: "نَص على هيئة JSON",
    e164: "رقم هاتف بمعيار E.164",
    jwt: "JWT",
    template_literal: "مدخل"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `مدخلات غير مقبولة: يفترض إدخال ${i.expected}، ولكن تم إدخال ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `مدخلات غير مقبولة: يفترض إدخال ${re(i.values[0])}` : `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? ` أكبر من اللازم: يفترض أن تكون ${i.origin ?? "القيمة"} ${u} ${i.maximum.toString()} ${d.unit ?? "عنصر"}` : `أكبر من اللازم: يفترض أن تكون ${i.origin ?? "القيمة"} ${u} ${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `أصغر من اللازم: يفترض لـ ${i.origin} أن يكون ${u} ${i.minimum.toString()} ${d.unit}` : `أصغر من اللازم: يفترض لـ ${i.origin} أن يكون ${u} ${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `نَص غير مقبول: يجب أن يبدأ بـ "${i.prefix}"` : u.format === "ends_with" ? `نَص غير مقبول: يجب أن ينتهي بـ "${u.suffix}"` : u.format === "includes" ? `نَص غير مقبول: يجب أن يتضمَّن "${u.includes}"` : u.format === "regex" ? `نَص غير مقبول: يجب أن يطابق النمط ${u.pattern}` : `${s[u.format] ?? i.format} غير مقبول`;
      }
      case "not_multiple_of":
        return `رقم غير مقبول: يجب أن يكون من مضاعفات ${i.divisor}`;
      case "unrecognized_keys":
        return `معرف${i.keys.length > 1 ? "ات" : ""} غريب${i.keys.length > 1 ? "ة" : ""}: ${H(i.keys, "، ")}`;
      case "invalid_key":
        return `معرف غير مقبول في ${i.origin}`;
      case "invalid_union":
        return "مدخل غير مقبول";
      case "invalid_element":
        return `مدخل غير مقبول في ${i.origin}`;
      default:
        return "مدخل غير مقبول";
    }
  };
};
function Sz() {
  return { localeError: bz() };
}
var $z = () => {
  const n = {
    string: {
      unit: "simvol",
      verb: "olmalıdır"
    },
    file: {
      unit: "bayt",
      verb: "olmalıdır"
    },
    array: {
      unit: "element",
      verb: "olmalıdır"
    },
    set: {
      unit: "element",
      verb: "olmalıdır"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "number";
      case "object":
        if (Array.isArray(i)) return "array";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Yanlış dəyər: gözlənilən ${i.expected}, daxil olan ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Yanlış dəyər: gözlənilən ${re(i.values[0])}` : `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `Çox böyük: gözlənilən ${i.origin ?? "dəyər"} ${u}${i.maximum.toString()} ${d.unit ?? "element"}` : `Çox böyük: gözlənilən ${i.origin ?? "dəyər"} ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `Çox kiçik: gözlənilən ${i.origin} ${u}${i.minimum.toString()} ${d.unit}` : `Çox kiçik: gözlənilən ${i.origin} ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Yanlış mətn: "${u.prefix}" ilə başlamalıdır` : u.format === "ends_with" ? `Yanlış mətn: "${u.suffix}" ilə bitməlidir` : u.format === "includes" ? `Yanlış mətn: "${u.includes}" daxil olmalıdır` : u.format === "regex" ? `Yanlış mətn: ${u.pattern} şablonuna uyğun olmalıdır` : `Yanlış ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Yanlış ədəd: ${i.divisor} ilə bölünə bilən olmalıdır`;
      case "unrecognized_keys":
        return `Tanınmayan açar${i.keys.length > 1 ? "lar" : ""}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `${i.origin} daxilində yanlış açar`;
      case "invalid_union":
        return "Yanlış dəyər";
      case "invalid_element":
        return `${i.origin} daxilində yanlış dəyər`;
      default:
        return "Yanlış dəyər";
    }
  };
};
function zz() {
  return { localeError: $z() };
}
function Ug(n, r, o, s) {
  const i = Math.abs(n), u = i % 10, d = i % 100;
  return d >= 11 && d <= 19 ? s : u === 1 ? r : u >= 2 && u <= 4 ? o : s;
}
var Tz = () => {
  const n = {
    string: {
      unit: {
        one: "сімвал",
        few: "сімвалы",
        many: "сімвалаў"
      },
      verb: "мець"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элементы",
        many: "элементаў"
      },
      verb: "мець"
    },
    file: {
      unit: {
        one: "байт",
        few: "байты",
        many: "байтаў"
      },
      verb: "мець"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "лік";
      case "object":
        if (Array.isArray(i)) return "масіў";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "увод",
    email: "email адрас",
    url: "URL",
    emoji: "эмодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата і час",
    date: "ISO дата",
    time: "ISO час",
    duration: "ISO працягласць",
    ipv4: "IPv4 адрас",
    ipv6: "IPv6 адрас",
    cidrv4: "IPv4 дыяпазон",
    cidrv6: "IPv6 дыяпазон",
    base64: "радок у фармаце base64",
    base64url: "радок у фармаце base64url",
    json_string: "JSON радок",
    e164: "нумар E.164",
    jwt: "JWT",
    template_literal: "увод"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Няправільны ўвод: чакаўся ${i.expected}, атрымана ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Няправільны ўвод: чакалася ${re(i.values[0])}` : `Няправільны варыянт: чакаўся адзін з ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        if (d) {
          const g = Ug(Number(i.maximum), d.unit.one, d.unit.few, d.unit.many);
          return `Занадта вялікі: чакалася, што ${i.origin ?? "значэнне"} павінна ${d.verb} ${u}${i.maximum.toString()} ${g}`;
        }
        return `Занадта вялікі: чакалася, што ${i.origin ?? "значэнне"} павінна быць ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        if (d) {
          const g = Ug(Number(i.minimum), d.unit.one, d.unit.few, d.unit.many);
          return `Занадта малы: чакалася, што ${i.origin} павінна ${d.verb} ${u}${i.minimum.toString()} ${g}`;
        }
        return `Занадта малы: чакалася, што ${i.origin} павінна быць ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Няправільны радок: павінен пачынацца з "${u.prefix}"` : u.format === "ends_with" ? `Няправільны радок: павінен заканчвацца на "${u.suffix}"` : u.format === "includes" ? `Няправільны радок: павінен змяшчаць "${u.includes}"` : u.format === "regex" ? `Няправільны радок: павінен адпавядаць шаблону ${u.pattern}` : `Няправільны ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Няправільны лік: павінен быць кратным ${i.divisor}`;
      case "unrecognized_keys":
        return `Нераспазнаны ${i.keys.length > 1 ? "ключы" : "ключ"}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Няправільны ключ у ${i.origin}`;
      case "invalid_union":
        return "Няправільны ўвод";
      case "invalid_element":
        return `Няправільнае значэнне ў ${i.origin}`;
      default:
        return "Няправільны ўвод";
    }
  };
};
function wz() {
  return { localeError: Tz() };
}
var Ez = () => {
  const n = {
    string: {
      unit: "caràcters",
      verb: "contenir"
    },
    file: {
      unit: "bytes",
      verb: "contenir"
    },
    array: {
      unit: "elements",
      verb: "contenir"
    },
    set: {
      unit: "elements",
      verb: "contenir"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "number";
      case "object":
        if (Array.isArray(i)) return "array";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "entrada",
    email: "adreça electrònica",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "durada ISO",
    ipv4: "adreça IPv4",
    ipv6: "adreça IPv6",
    cidrv4: "rang IPv4",
    cidrv6: "rang IPv6",
    base64: "cadena codificada en base64",
    base64url: "cadena codificada en base64url",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Tipus invàlid: s'esperava ${i.expected}, s'ha rebut ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Valor invàlid: s'esperava ${re(i.values[0])}` : `Opció invàlida: s'esperava una de ${H(i.values, " o ")}`;
      case "too_big": {
        const u = i.inclusive ? "com a màxim" : "menys de", d = r(i.origin);
        return d ? `Massa gran: s'esperava que ${i.origin ?? "el valor"} contingués ${u} ${i.maximum.toString()} ${d.unit ?? "elements"}` : `Massa gran: s'esperava que ${i.origin ?? "el valor"} fos ${u} ${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? "com a mínim" : "més de", d = r(i.origin);
        return d ? `Massa petit: s'esperava que ${i.origin} contingués ${u} ${i.minimum.toString()} ${d.unit}` : `Massa petit: s'esperava que ${i.origin} fos ${u} ${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Format invàlid: ha de començar amb "${u.prefix}"` : u.format === "ends_with" ? `Format invàlid: ha d'acabar amb "${u.suffix}"` : u.format === "includes" ? `Format invàlid: ha d'incloure "${u.includes}"` : u.format === "regex" ? `Format invàlid: ha de coincidir amb el patró ${u.pattern}` : `Format invàlid per a ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Número invàlid: ha de ser múltiple de ${i.divisor}`;
      case "unrecognized_keys":
        return `Clau${i.keys.length > 1 ? "s" : ""} no reconeguda${i.keys.length > 1 ? "s" : ""}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Clau invàlida a ${i.origin}`;
      case "invalid_union":
        return "Entrada invàlida";
      case "invalid_element":
        return `Element invàlid a ${i.origin}`;
      default:
        return "Entrada invàlida";
    }
  };
};
function kz() {
  return { localeError: Ez() };
}
var Oz = () => {
  const n = {
    string: {
      unit: "znaků",
      verb: "mít"
    },
    file: {
      unit: "bajtů",
      verb: "mít"
    },
    array: {
      unit: "prvků",
      verb: "mít"
    },
    set: {
      unit: "prvků",
      verb: "mít"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "číslo";
      case "string":
        return "řetězec";
      case "boolean":
        return "boolean";
      case "bigint":
        return "bigint";
      case "function":
        return "funkce";
      case "symbol":
        return "symbol";
      case "undefined":
        return "undefined";
      case "object":
        if (Array.isArray(i)) return "pole";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "regulární výraz",
    email: "e-mailová adresa",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "datum a čas ve formátu ISO",
    date: "datum ve formátu ISO",
    time: "čas ve formátu ISO",
    duration: "doba trvání ISO",
    ipv4: "IPv4 adresa",
    ipv6: "IPv6 adresa",
    cidrv4: "rozsah IPv4",
    cidrv6: "rozsah IPv6",
    base64: "řetězec zakódovaný ve formátu base64",
    base64url: "řetězec zakódovaný ve formátu base64url",
    json_string: "řetězec ve formátu JSON",
    e164: "číslo E.164",
    jwt: "JWT",
    template_literal: "vstup"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Neplatný vstup: očekáváno ${i.expected}, obdrženo ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Neplatný vstup: očekáváno ${re(i.values[0])}` : `Neplatná možnost: očekávána jedna z hodnot ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `Hodnota je příliš velká: ${i.origin ?? "hodnota"} musí mít ${u}${i.maximum.toString()} ${d.unit ?? "prvků"}` : `Hodnota je příliš velká: ${i.origin ?? "hodnota"} musí být ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `Hodnota je příliš malá: ${i.origin ?? "hodnota"} musí mít ${u}${i.minimum.toString()} ${d.unit ?? "prvků"}` : `Hodnota je příliš malá: ${i.origin ?? "hodnota"} musí být ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Neplatný řetězec: musí začínat na "${u.prefix}"` : u.format === "ends_with" ? `Neplatný řetězec: musí končit na "${u.suffix}"` : u.format === "includes" ? `Neplatný řetězec: musí obsahovat "${u.includes}"` : u.format === "regex" ? `Neplatný řetězec: musí odpovídat vzoru ${u.pattern}` : `Neplatný formát ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Neplatné číslo: musí být násobkem ${i.divisor}`;
      case "unrecognized_keys":
        return `Neznámé klíče: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Neplatný klíč v ${i.origin}`;
      case "invalid_union":
        return "Neplatný vstup";
      case "invalid_element":
        return `Neplatná hodnota v ${i.origin}`;
      default:
        return "Neplatný vstup";
    }
  };
};
function Nz() {
  return { localeError: Oz() };
}
var Uz = () => {
  const n = {
    string: {
      unit: "Zeichen",
      verb: "zu haben"
    },
    file: {
      unit: "Bytes",
      verb: "zu haben"
    },
    array: {
      unit: "Elemente",
      verb: "zu haben"
    },
    set: {
      unit: "Elemente",
      verb: "zu haben"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "Zahl";
      case "object":
        if (Array.isArray(i)) return "Array";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "Eingabe",
    email: "E-Mail-Adresse",
    url: "URL",
    emoji: "Emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-Datum und -Uhrzeit",
    date: "ISO-Datum",
    time: "ISO-Uhrzeit",
    duration: "ISO-Dauer",
    ipv4: "IPv4-Adresse",
    ipv6: "IPv6-Adresse",
    cidrv4: "IPv4-Bereich",
    cidrv6: "IPv6-Bereich",
    base64: "Base64-codierter String",
    base64url: "Base64-URL-codierter String",
    json_string: "JSON-String",
    e164: "E.164-Nummer",
    jwt: "JWT",
    template_literal: "Eingabe"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Ungültige Eingabe: erwartet ${i.expected}, erhalten ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Ungültige Eingabe: erwartet ${re(i.values[0])}` : `Ungültige Option: erwartet eine von ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `Zu groß: erwartet, dass ${i.origin ?? "Wert"} ${u}${i.maximum.toString()} ${d.unit ?? "Elemente"} hat` : `Zu groß: erwartet, dass ${i.origin ?? "Wert"} ${u}${i.maximum.toString()} ist`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `Zu klein: erwartet, dass ${i.origin} ${u}${i.minimum.toString()} ${d.unit} hat` : `Zu klein: erwartet, dass ${i.origin} ${u}${i.minimum.toString()} ist`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Ungültiger String: muss mit "${u.prefix}" beginnen` : u.format === "ends_with" ? `Ungültiger String: muss mit "${u.suffix}" enden` : u.format === "includes" ? `Ungültiger String: muss "${u.includes}" enthalten` : u.format === "regex" ? `Ungültiger String: muss dem Muster ${u.pattern} entsprechen` : `Ungültig: ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Ungültige Zahl: muss ein Vielfaches von ${i.divisor} sein`;
      case "unrecognized_keys":
        return `${i.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Ungültiger Schlüssel in ${i.origin}`;
      case "invalid_union":
        return "Ungültige Eingabe";
      case "invalid_element":
        return `Ungültiger Wert in ${i.origin}`;
      default:
        return "Ungültige Eingabe";
    }
  };
};
function xz() {
  return { localeError: Uz() };
}
var jz = (n) => {
  const r = typeof n;
  switch (r) {
    case "number":
      return Number.isNaN(n) ? "NaN" : "number";
    case "object":
      if (Array.isArray(n)) return "array";
      if (n === null) return "null";
      if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor) return n.constructor.name;
  }
  return r;
}, Dz = () => {
  const n = {
    string: {
      unit: "characters",
      verb: "to have"
    },
    file: {
      unit: "bytes",
      verb: "to have"
    },
    array: {
      unit: "items",
      verb: "to have"
    },
    set: {
      unit: "items",
      verb: "to have"
    }
  };
  function r(s) {
    return n[s] ?? null;
  }
  const o = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  };
  return (s) => {
    switch (s.code) {
      case "invalid_type":
        return `Invalid input: expected ${s.expected}, received ${jz(s.input)}`;
      case "invalid_value":
        return s.values.length === 1 ? `Invalid input: expected ${re(s.values[0])}` : `Invalid option: expected one of ${H(s.values, "|")}`;
      case "too_big": {
        const i = s.inclusive ? "<=" : "<", u = r(s.origin);
        return u ? `Too big: expected ${s.origin ?? "value"} to have ${i}${s.maximum.toString()} ${u.unit ?? "elements"}` : `Too big: expected ${s.origin ?? "value"} to be ${i}${s.maximum.toString()}`;
      }
      case "too_small": {
        const i = s.inclusive ? ">=" : ">", u = r(s.origin);
        return u ? `Too small: expected ${s.origin} to have ${i}${s.minimum.toString()} ${u.unit}` : `Too small: expected ${s.origin} to be ${i}${s.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = s;
        return i.format === "starts_with" ? `Invalid string: must start with "${i.prefix}"` : i.format === "ends_with" ? `Invalid string: must end with "${i.suffix}"` : i.format === "includes" ? `Invalid string: must include "${i.includes}"` : i.format === "regex" ? `Invalid string: must match pattern ${i.pattern}` : `Invalid ${o[i.format] ?? s.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${s.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${s.keys.length > 1 ? "s" : ""}: ${H(s.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${s.origin}`;
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${s.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function ob() {
  return { localeError: Dz() };
}
var Az = (n) => {
  const r = typeof n;
  switch (r) {
    case "number":
      return Number.isNaN(n) ? "NaN" : "nombro";
    case "object":
      if (Array.isArray(n)) return "tabelo";
      if (n === null) return "senvalora";
      if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor) return n.constructor.name;
  }
  return r;
}, Zz = () => {
  const n = {
    string: {
      unit: "karaktrojn",
      verb: "havi"
    },
    file: {
      unit: "bajtojn",
      verb: "havi"
    },
    array: {
      unit: "elementojn",
      verb: "havi"
    },
    set: {
      unit: "elementojn",
      verb: "havi"
    }
  };
  function r(s) {
    return n[s] ?? null;
  }
  const o = {
    regex: "enigo",
    email: "retadreso",
    url: "URL",
    emoji: "emoĝio",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datotempo",
    date: "ISO-dato",
    time: "ISO-tempo",
    duration: "ISO-daŭro",
    ipv4: "IPv4-adreso",
    ipv6: "IPv6-adreso",
    cidrv4: "IPv4-rango",
    cidrv6: "IPv6-rango",
    base64: "64-ume kodita karaktraro",
    base64url: "URL-64-ume kodita karaktraro",
    json_string: "JSON-karaktraro",
    e164: "E.164-nombro",
    jwt: "JWT",
    template_literal: "enigo"
  };
  return (s) => {
    switch (s.code) {
      case "invalid_type":
        return `Nevalida enigo: atendiĝis ${s.expected}, riceviĝis ${Az(s.input)}`;
      case "invalid_value":
        return s.values.length === 1 ? `Nevalida enigo: atendiĝis ${re(s.values[0])}` : `Nevalida opcio: atendiĝis unu el ${H(s.values, "|")}`;
      case "too_big": {
        const i = s.inclusive ? "<=" : "<", u = r(s.origin);
        return u ? `Tro granda: atendiĝis ke ${s.origin ?? "valoro"} havu ${i}${s.maximum.toString()} ${u.unit ?? "elementojn"}` : `Tro granda: atendiĝis ke ${s.origin ?? "valoro"} havu ${i}${s.maximum.toString()}`;
      }
      case "too_small": {
        const i = s.inclusive ? ">=" : ">", u = r(s.origin);
        return u ? `Tro malgranda: atendiĝis ke ${s.origin} havu ${i}${s.minimum.toString()} ${u.unit}` : `Tro malgranda: atendiĝis ke ${s.origin} estu ${i}${s.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = s;
        return i.format === "starts_with" ? `Nevalida karaktraro: devas komenciĝi per "${i.prefix}"` : i.format === "ends_with" ? `Nevalida karaktraro: devas finiĝi per "${i.suffix}"` : i.format === "includes" ? `Nevalida karaktraro: devas inkluzivi "${i.includes}"` : i.format === "regex" ? `Nevalida karaktraro: devas kongrui kun la modelo ${i.pattern}` : `Nevalida ${o[i.format] ?? s.format}`;
      }
      case "not_multiple_of":
        return `Nevalida nombro: devas esti oblo de ${s.divisor}`;
      case "unrecognized_keys":
        return `Nekonata${s.keys.length > 1 ? "j" : ""} ŝlosilo${s.keys.length > 1 ? "j" : ""}: ${H(s.keys, ", ")}`;
      case "invalid_key":
        return `Nevalida ŝlosilo en ${s.origin}`;
      case "invalid_union":
        return "Nevalida enigo";
      case "invalid_element":
        return `Nevalida valoro en ${s.origin}`;
      default:
        return "Nevalida enigo";
    }
  };
};
function Rz() {
  return { localeError: Zz() };
}
var Cz = () => {
  const n = {
    string: {
      unit: "caracteres",
      verb: "tener"
    },
    file: {
      unit: "bytes",
      verb: "tener"
    },
    array: {
      unit: "elementos",
      verb: "tener"
    },
    set: {
      unit: "elementos",
      verb: "tener"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "número";
      case "object":
        if (Array.isArray(i)) return "arreglo";
        if (i === null) return "nulo";
        if (Object.getPrototypeOf(i) !== Object.prototype) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "entrada",
    email: "dirección de correo electrónico",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "fecha y hora ISO",
    date: "fecha ISO",
    time: "hora ISO",
    duration: "duración ISO",
    ipv4: "dirección IPv4",
    ipv6: "dirección IPv6",
    cidrv4: "rango IPv4",
    cidrv6: "rango IPv6",
    base64: "cadena codificada en base64",
    base64url: "URL codificada en base64",
    json_string: "cadena JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Entrada inválida: se esperaba ${i.expected}, recibido ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Entrada inválida: se esperaba ${re(i.values[0])}` : `Opción inválida: se esperaba una de ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `Demasiado grande: se esperaba que ${i.origin ?? "valor"} tuviera ${u}${i.maximum.toString()} ${d.unit ?? "elementos"}` : `Demasiado grande: se esperaba que ${i.origin ?? "valor"} fuera ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `Demasiado pequeño: se esperaba que ${i.origin} tuviera ${u}${i.minimum.toString()} ${d.unit}` : `Demasiado pequeño: se esperaba que ${i.origin} fuera ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Cadena inválida: debe comenzar con "${u.prefix}"` : u.format === "ends_with" ? `Cadena inválida: debe terminar en "${u.suffix}"` : u.format === "includes" ? `Cadena inválida: debe incluir "${u.includes}"` : u.format === "regex" ? `Cadena inválida: debe coincidir con el patrón ${u.pattern}` : `Inválido ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Número inválido: debe ser múltiplo de ${i.divisor}`;
      case "unrecognized_keys":
        return `Llave${i.keys.length > 1 ? "s" : ""} desconocida${i.keys.length > 1 ? "s" : ""}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Llave inválida en ${i.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido en ${i.origin}`;
      default:
        return "Entrada inválida";
    }
  };
};
function Mz() {
  return { localeError: Cz() };
}
var Iz = () => {
  const n = {
    string: {
      unit: "کاراکتر",
      verb: "داشته باشد"
    },
    file: {
      unit: "بایت",
      verb: "داشته باشد"
    },
    array: {
      unit: "آیتم",
      verb: "داشته باشد"
    },
    set: {
      unit: "آیتم",
      verb: "داشته باشد"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "عدد";
      case "object":
        if (Array.isArray(i)) return "آرایه";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "ورودی",
    email: "آدرس ایمیل",
    url: "URL",
    emoji: "ایموجی",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "تاریخ و زمان ایزو",
    date: "تاریخ ایزو",
    time: "زمان ایزو",
    duration: "مدت زمان ایزو",
    ipv4: "IPv4 آدرس",
    ipv6: "IPv6 آدرس",
    cidrv4: "IPv4 دامنه",
    cidrv6: "IPv6 دامنه",
    base64: "base64-encoded رشته",
    base64url: "base64url-encoded رشته",
    json_string: "JSON رشته",
    e164: "E.164 عدد",
    jwt: "JWT",
    template_literal: "ورودی"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `ورودی نامعتبر: می‌بایست ${i.expected} می‌بود، ${o(i.input)} دریافت شد`;
      case "invalid_value":
        return i.values.length === 1 ? `ورودی نامعتبر: می‌بایست ${re(i.values[0])} می‌بود` : `گزینه نامعتبر: می‌بایست یکی از ${H(i.values, "|")} می‌بود`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `خیلی بزرگ: ${i.origin ?? "مقدار"} باید ${u}${i.maximum.toString()} ${d.unit ?? "عنصر"} باشد` : `خیلی بزرگ: ${i.origin ?? "مقدار"} باید ${u}${i.maximum.toString()} باشد`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `خیلی کوچک: ${i.origin} باید ${u}${i.minimum.toString()} ${d.unit} باشد` : `خیلی کوچک: ${i.origin} باید ${u}${i.minimum.toString()} باشد`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `رشته نامعتبر: باید با "${u.prefix}" شروع شود` : u.format === "ends_with" ? `رشته نامعتبر: باید با "${u.suffix}" تمام شود` : u.format === "includes" ? `رشته نامعتبر: باید شامل "${u.includes}" باشد` : u.format === "regex" ? `رشته نامعتبر: باید با الگوی ${u.pattern} مطابقت داشته باشد` : `${s[u.format] ?? i.format} نامعتبر`;
      }
      case "not_multiple_of":
        return `عدد نامعتبر: باید مضرب ${i.divisor} باشد`;
      case "unrecognized_keys":
        return `کلید${i.keys.length > 1 ? "های" : ""} ناشناس: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `کلید ناشناس در ${i.origin}`;
      case "invalid_union":
        return "ورودی نامعتبر";
      case "invalid_element":
        return `مقدار نامعتبر در ${i.origin}`;
      default:
        return "ورودی نامعتبر";
    }
  };
};
function qz() {
  return { localeError: Iz() };
}
var Hz = () => {
  const n = {
    string: {
      unit: "merkkiä",
      subject: "merkkijonon"
    },
    file: {
      unit: "tavua",
      subject: "tiedoston"
    },
    array: {
      unit: "alkiota",
      subject: "listan"
    },
    set: {
      unit: "alkiota",
      subject: "joukon"
    },
    number: {
      unit: "",
      subject: "luvun"
    },
    bigint: {
      unit: "",
      subject: "suuren kokonaisluvun"
    },
    int: {
      unit: "",
      subject: "kokonaisluvun"
    },
    date: {
      unit: "",
      subject: "päivämäärän"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "number";
      case "object":
        if (Array.isArray(i)) return "array";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "säännöllinen lauseke",
    email: "sähköpostiosoite",
    url: "URL-osoite",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-aikaleima",
    date: "ISO-päivämäärä",
    time: "ISO-aika",
    duration: "ISO-kesto",
    ipv4: "IPv4-osoite",
    ipv6: "IPv6-osoite",
    cidrv4: "IPv4-alue",
    cidrv6: "IPv6-alue",
    base64: "base64-koodattu merkkijono",
    base64url: "base64url-koodattu merkkijono",
    json_string: "JSON-merkkijono",
    e164: "E.164-luku",
    jwt: "JWT",
    template_literal: "templaattimerkkijono"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Virheellinen tyyppi: odotettiin ${i.expected}, oli ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Virheellinen syöte: täytyy olla ${re(i.values[0])}` : `Virheellinen valinta: täytyy olla yksi seuraavista: ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `Liian suuri: ${d.subject} täytyy olla ${u}${i.maximum.toString()} ${d.unit}`.trim() : `Liian suuri: arvon täytyy olla ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `Liian pieni: ${d.subject} täytyy olla ${u}${i.minimum.toString()} ${d.unit}`.trim() : `Liian pieni: arvon täytyy olla ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Virheellinen syöte: täytyy alkaa "${u.prefix}"` : u.format === "ends_with" ? `Virheellinen syöte: täytyy loppua "${u.suffix}"` : u.format === "includes" ? `Virheellinen syöte: täytyy sisältää "${u.includes}"` : u.format === "regex" ? `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${u.pattern}` : `Virheellinen ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: täytyy olla luvun ${i.divisor} monikerta`;
      case "unrecognized_keys":
        return `${i.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return "Virheellinen syöte";
    }
  };
};
function Lz() {
  return { localeError: Hz() };
}
var Bz = () => {
  const n = {
    string: {
      unit: "caractères",
      verb: "avoir"
    },
    file: {
      unit: "octets",
      verb: "avoir"
    },
    array: {
      unit: "éléments",
      verb: "avoir"
    },
    set: {
      unit: "éléments",
      verb: "avoir"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "nombre";
      case "object":
        if (Array.isArray(i)) return "tableau";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "entrée",
    email: "adresse e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date et heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Entrée invalide : ${i.expected} attendu, ${o(i.input)} reçu`;
      case "invalid_value":
        return i.values.length === 1 ? `Entrée invalide : ${re(i.values[0])} attendu` : `Option invalide : une valeur parmi ${H(i.values, "|")} attendue`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `Trop grand : ${i.origin ?? "valeur"} doit ${d.verb} ${u}${i.maximum.toString()} ${d.unit ?? "élément(s)"}` : `Trop grand : ${i.origin ?? "valeur"} doit être ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `Trop petit : ${i.origin} doit ${d.verb} ${u}${i.minimum.toString()} ${d.unit}` : `Trop petit : ${i.origin} doit être ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Chaîne invalide : doit commencer par "${u.prefix}"` : u.format === "ends_with" ? `Chaîne invalide : doit se terminer par "${u.suffix}"` : u.format === "includes" ? `Chaîne invalide : doit inclure "${u.includes}"` : u.format === "regex" ? `Chaîne invalide : doit correspondre au modèle ${u.pattern}` : `${s[u.format] ?? i.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${i.divisor}`;
      case "unrecognized_keys":
        return `Clé${i.keys.length > 1 ? "s" : ""} non reconnue${i.keys.length > 1 ? "s" : ""} : ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${i.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${i.origin}`;
      default:
        return "Entrée invalide";
    }
  };
};
function Gz() {
  return { localeError: Bz() };
}
var Yz = () => {
  const n = {
    string: {
      unit: "caractères",
      verb: "avoir"
    },
    file: {
      unit: "octets",
      verb: "avoir"
    },
    array: {
      unit: "éléments",
      verb: "avoir"
    },
    set: {
      unit: "éléments",
      verb: "avoir"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "number";
      case "object":
        if (Array.isArray(i)) return "array";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "entrée",
    email: "adresse courriel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "date-heure ISO",
    date: "date ISO",
    time: "heure ISO",
    duration: "durée ISO",
    ipv4: "adresse IPv4",
    ipv6: "adresse IPv6",
    cidrv4: "plage IPv4",
    cidrv6: "plage IPv6",
    base64: "chaîne encodée en base64",
    base64url: "chaîne encodée en base64url",
    json_string: "chaîne JSON",
    e164: "numéro E.164",
    jwt: "JWT",
    template_literal: "entrée"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Entrée invalide : attendu ${i.expected}, reçu ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Entrée invalide : attendu ${re(i.values[0])}` : `Option invalide : attendu l'une des valeurs suivantes ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "≤" : "<", d = r(i.origin);
        return d ? `Trop grand : attendu que ${i.origin ?? "la valeur"} ait ${u}${i.maximum.toString()} ${d.unit}` : `Trop grand : attendu que ${i.origin ?? "la valeur"} soit ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? "≥" : ">", d = r(i.origin);
        return d ? `Trop petit : attendu que ${i.origin} ait ${u}${i.minimum.toString()} ${d.unit}` : `Trop petit : attendu que ${i.origin} soit ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Chaîne invalide : doit commencer par "${u.prefix}"` : u.format === "ends_with" ? `Chaîne invalide : doit se terminer par "${u.suffix}"` : u.format === "includes" ? `Chaîne invalide : doit inclure "${u.includes}"` : u.format === "regex" ? `Chaîne invalide : doit correspondre au motif ${u.pattern}` : `${s[u.format] ?? i.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${i.divisor}`;
      case "unrecognized_keys":
        return `Clé${i.keys.length > 1 ? "s" : ""} non reconnue${i.keys.length > 1 ? "s" : ""} : ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${i.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${i.origin}`;
      default:
        return "Entrée invalide";
    }
  };
};
function Qz() {
  return { localeError: Yz() };
}
var Vz = () => {
  const n = {
    string: {
      unit: "אותיות",
      verb: "לכלול"
    },
    file: {
      unit: "בייטים",
      verb: "לכלול"
    },
    array: {
      unit: "פריטים",
      verb: "לכלול"
    },
    set: {
      unit: "פריטים",
      verb: "לכלול"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "number";
      case "object":
        if (Array.isArray(i)) return "array";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "קלט",
    email: "כתובת אימייל",
    url: "כתובת רשת",
    emoji: "אימוג'י",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "תאריך וזמן ISO",
    date: "תאריך ISO",
    time: "זמן ISO",
    duration: "משך זמן ISO",
    ipv4: "כתובת IPv4",
    ipv6: "כתובת IPv6",
    cidrv4: "טווח IPv4",
    cidrv6: "טווח IPv6",
    base64: "מחרוזת בבסיס 64",
    base64url: "מחרוזת בבסיס 64 לכתובות רשת",
    json_string: "מחרוזת JSON",
    e164: "מספר E.164",
    jwt: "JWT",
    template_literal: "קלט"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `קלט לא תקין: צריך ${i.expected}, התקבל ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `קלט לא תקין: צריך ${re(i.values[0])}` : `קלט לא תקין: צריך אחת מהאפשרויות  ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `גדול מדי: ${i.origin ?? "value"} צריך להיות ${u}${i.maximum.toString()} ${d.unit ?? "elements"}` : `גדול מדי: ${i.origin ?? "value"} צריך להיות ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `קטן מדי: ${i.origin} צריך להיות ${u}${i.minimum.toString()} ${d.unit}` : `קטן מדי: ${i.origin} צריך להיות ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `מחרוזת לא תקינה: חייבת להתחיל ב"${u.prefix}"` : u.format === "ends_with" ? `מחרוזת לא תקינה: חייבת להסתיים ב "${u.suffix}"` : u.format === "includes" ? `מחרוזת לא תקינה: חייבת לכלול "${u.includes}"` : u.format === "regex" ? `מחרוזת לא תקינה: חייבת להתאים לתבנית ${u.pattern}` : `${s[u.format] ?? i.format} לא תקין`;
      }
      case "not_multiple_of":
        return `מספר לא תקין: חייב להיות מכפלה של ${i.divisor}`;
      case "unrecognized_keys":
        return `מפתח${i.keys.length > 1 ? "ות" : ""} לא מזוה${i.keys.length > 1 ? "ים" : "ה"}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `מפתח לא תקין ב${i.origin}`;
      case "invalid_union":
        return "קלט לא תקין";
      case "invalid_element":
        return `ערך לא תקין ב${i.origin}`;
      default:
        return "קלט לא תקין";
    }
  };
};
function Jz() {
  return { localeError: Vz() };
}
var Xz = () => {
  const n = {
    string: {
      unit: "karakter",
      verb: "legyen"
    },
    file: {
      unit: "byte",
      verb: "legyen"
    },
    array: {
      unit: "elem",
      verb: "legyen"
    },
    set: {
      unit: "elem",
      verb: "legyen"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "szám";
      case "object":
        if (Array.isArray(i)) return "tömb";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "bemenet",
    email: "email cím",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO időbélyeg",
    date: "ISO dátum",
    time: "ISO idő",
    duration: "ISO időintervallum",
    ipv4: "IPv4 cím",
    ipv6: "IPv6 cím",
    cidrv4: "IPv4 tartomány",
    cidrv6: "IPv6 tartomány",
    base64: "base64-kódolt string",
    base64url: "base64url-kódolt string",
    json_string: "JSON string",
    e164: "E.164 szám",
    jwt: "JWT",
    template_literal: "bemenet"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Érvénytelen bemenet: a várt érték ${i.expected}, a kapott érték ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Érvénytelen bemenet: a várt érték ${re(i.values[0])}` : `Érvénytelen opció: valamelyik érték várt ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `Túl nagy: ${i.origin ?? "érték"} mérete túl nagy ${u}${i.maximum.toString()} ${d.unit ?? "elem"}` : `Túl nagy: a bemeneti érték ${i.origin ?? "érték"} túl nagy: ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `Túl kicsi: a bemeneti érték ${i.origin} mérete túl kicsi ${u}${i.minimum.toString()} ${d.unit}` : `Túl kicsi: a bemeneti érték ${i.origin} túl kicsi ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Érvénytelen string: "${u.prefix}" értékkel kell kezdődnie` : u.format === "ends_with" ? `Érvénytelen string: "${u.suffix}" értékkel kell végződnie` : u.format === "includes" ? `Érvénytelen string: "${u.includes}" értéket kell tartalmaznia` : u.format === "regex" ? `Érvénytelen string: ${u.pattern} mintának kell megfelelnie` : `Érvénytelen ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Érvénytelen szám: ${i.divisor} többszörösének kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${i.keys.length > 1 ? "s" : ""}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Érvénytelen kulcs ${i.origin}`;
      case "invalid_union":
        return "Érvénytelen bemenet";
      case "invalid_element":
        return `Érvénytelen érték: ${i.origin}`;
      default:
        return "Érvénytelen bemenet";
    }
  };
};
function Kz() {
  return { localeError: Xz() };
}
var Pz = () => {
  const n = {
    string: {
      unit: "karakter",
      verb: "memiliki"
    },
    file: {
      unit: "byte",
      verb: "memiliki"
    },
    array: {
      unit: "item",
      verb: "memiliki"
    },
    set: {
      unit: "item",
      verb: "memiliki"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "number";
      case "object":
        if (Array.isArray(i)) return "array";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "input",
    email: "alamat email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tanggal dan waktu format ISO",
    date: "tanggal format ISO",
    time: "jam format ISO",
    duration: "durasi format ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "rentang alamat IPv4",
    cidrv6: "rentang alamat IPv6",
    base64: "string dengan enkode base64",
    base64url: "string dengan enkode base64url",
    json_string: "string JSON",
    e164: "angka E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Input tidak valid: diharapkan ${i.expected}, diterima ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Input tidak valid: diharapkan ${re(i.values[0])}` : `Pilihan tidak valid: diharapkan salah satu dari ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `Terlalu besar: diharapkan ${i.origin ?? "value"} memiliki ${u}${i.maximum.toString()} ${d.unit ?? "elemen"}` : `Terlalu besar: diharapkan ${i.origin ?? "value"} menjadi ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `Terlalu kecil: diharapkan ${i.origin} memiliki ${u}${i.minimum.toString()} ${d.unit}` : `Terlalu kecil: diharapkan ${i.origin} menjadi ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `String tidak valid: harus dimulai dengan "${u.prefix}"` : u.format === "ends_with" ? `String tidak valid: harus berakhir dengan "${u.suffix}"` : u.format === "includes" ? `String tidak valid: harus menyertakan "${u.includes}"` : u.format === "regex" ? `String tidak valid: harus sesuai pola ${u.pattern}` : `${s[u.format] ?? i.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${i.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${i.keys.length > 1 ? "s" : ""}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${i.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${i.origin}`;
      default:
        return "Input tidak valid";
    }
  };
};
function Fz() {
  return { localeError: Pz() };
}
var Wz = () => {
  const n = {
    string: {
      unit: "caratteri",
      verb: "avere"
    },
    file: {
      unit: "byte",
      verb: "avere"
    },
    array: {
      unit: "elementi",
      verb: "avere"
    },
    set: {
      unit: "elementi",
      verb: "avere"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "numero";
      case "object":
        if (Array.isArray(i)) return "vettore";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "input",
    email: "indirizzo email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e ora ISO",
    date: "data ISO",
    time: "ora ISO",
    duration: "durata ISO",
    ipv4: "indirizzo IPv4",
    ipv6: "indirizzo IPv6",
    cidrv4: "intervallo IPv4",
    cidrv6: "intervallo IPv6",
    base64: "stringa codificata in base64",
    base64url: "URL codificata in base64",
    json_string: "stringa JSON",
    e164: "numero E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Input non valido: atteso ${i.expected}, ricevuto ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Input non valido: atteso ${re(i.values[0])}` : `Opzione non valida: atteso uno tra ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `Troppo grande: ${i.origin ?? "valore"} deve avere ${u}${i.maximum.toString()} ${d.unit ?? "elementi"}` : `Troppo grande: ${i.origin ?? "valore"} deve essere ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `Troppo piccolo: ${i.origin} deve avere ${u}${i.minimum.toString()} ${d.unit}` : `Troppo piccolo: ${i.origin} deve essere ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Stringa non valida: deve iniziare con "${u.prefix}"` : u.format === "ends_with" ? `Stringa non valida: deve terminare con "${u.suffix}"` : u.format === "includes" ? `Stringa non valida: deve includere "${u.includes}"` : u.format === "regex" ? `Stringa non valida: deve corrispondere al pattern ${u.pattern}` : `Invalid ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${i.divisor}`;
      case "unrecognized_keys":
        return `Chiav${i.keys.length > 1 ? "i" : "e"} non riconosciut${i.keys.length > 1 ? "e" : "a"}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${i.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${i.origin}`;
      default:
        return "Input non valido";
    }
  };
};
function e4() {
  return { localeError: Wz() };
}
var t4 = () => {
  const n = {
    string: {
      unit: "文字",
      verb: "である"
    },
    file: {
      unit: "バイト",
      verb: "である"
    },
    array: {
      unit: "要素",
      verb: "である"
    },
    set: {
      unit: "要素",
      verb: "である"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "数値";
      case "object":
        if (Array.isArray(i)) return "配列";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "入力値",
    email: "メールアドレス",
    url: "URL",
    emoji: "絵文字",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日時",
    date: "ISO日付",
    time: "ISO時刻",
    duration: "ISO期間",
    ipv4: "IPv4アドレス",
    ipv6: "IPv6アドレス",
    cidrv4: "IPv4範囲",
    cidrv6: "IPv6範囲",
    base64: "base64エンコード文字列",
    base64url: "base64urlエンコード文字列",
    json_string: "JSON文字列",
    e164: "E.164番号",
    jwt: "JWT",
    template_literal: "入力値"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `無効な入力: ${i.expected}が期待されましたが、${o(i.input)}が入力されました`;
      case "invalid_value":
        return i.values.length === 1 ? `無効な入力: ${re(i.values[0])}が期待されました` : `無効な選択: ${H(i.values, "、")}のいずれかである必要があります`;
      case "too_big": {
        const u = i.inclusive ? "以下である" : "より小さい", d = r(i.origin);
        return d ? `大きすぎる値: ${i.origin ?? "値"}は${i.maximum.toString()}${d.unit ?? "要素"}${u}必要があります` : `大きすぎる値: ${i.origin ?? "値"}は${i.maximum.toString()}${u}必要があります`;
      }
      case "too_small": {
        const u = i.inclusive ? "以上である" : "より大きい", d = r(i.origin);
        return d ? `小さすぎる値: ${i.origin}は${i.minimum.toString()}${d.unit}${u}必要があります` : `小さすぎる値: ${i.origin}は${i.minimum.toString()}${u}必要があります`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `無効な文字列: "${u.prefix}"で始まる必要があります` : u.format === "ends_with" ? `無効な文字列: "${u.suffix}"で終わる必要があります` : u.format === "includes" ? `無効な文字列: "${u.includes}"を含む必要があります` : u.format === "regex" ? `無効な文字列: パターン${u.pattern}に一致する必要があります` : `無効な${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `無効な数値: ${i.divisor}の倍数である必要があります`;
      case "unrecognized_keys":
        return `認識されていないキー${i.keys.length > 1 ? "群" : ""}: ${H(i.keys, "、")}`;
      case "invalid_key":
        return `${i.origin}内の無効なキー`;
      case "invalid_union":
        return "無効な入力";
      case "invalid_element":
        return `${i.origin}内の無効な値`;
      default:
        return "無効な入力";
    }
  };
};
function n4() {
  return { localeError: t4() };
}
var i4 = () => {
  const n = {
    string: {
      unit: "តួអក្សរ",
      verb: "គួរមាន"
    },
    file: {
      unit: "បៃ",
      verb: "គួរមាន"
    },
    array: {
      unit: "ធាតុ",
      verb: "គួរមាន"
    },
    set: {
      unit: "ធាតុ",
      verb: "គួរមាន"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "មិនមែនជាលេខ (NaN)" : "លេខ";
      case "object":
        if (Array.isArray(i)) return "អារេ (Array)";
        if (i === null) return "គ្មានតម្លៃ (null)";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "ទិន្នន័យបញ្ចូល",
    email: "អាសយដ្ឋានអ៊ីមែល",
    url: "URL",
    emoji: "សញ្ញាអារម្មណ៍",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO",
    date: "កាលបរិច្ឆេទ ISO",
    time: "ម៉ោង ISO",
    duration: "រយៈពេល ISO",
    ipv4: "អាសយដ្ឋាន IPv4",
    ipv6: "អាសយដ្ឋាន IPv6",
    cidrv4: "ដែនអាសយដ្ឋាន IPv4",
    cidrv6: "ដែនអាសយដ្ឋាន IPv6",
    base64: "ខ្សែអក្សរអ៊ិកូដ base64",
    base64url: "ខ្សែអក្សរអ៊ិកូដ base64url",
    json_string: "ខ្សែអក្សរ JSON",
    e164: "លេខ E.164",
    jwt: "JWT",
    template_literal: "ទិន្នន័យបញ្ចូល"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${i.expected} ប៉ុន្តែទទួលបាន ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${re(i.values[0])}` : `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `ធំពេក៖ ត្រូវការ ${i.origin ?? "តម្លៃ"} ${u} ${i.maximum.toString()} ${d.unit ?? "ធាតុ"}` : `ធំពេក៖ ត្រូវការ ${i.origin ?? "តម្លៃ"} ${u} ${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `តូចពេក៖ ត្រូវការ ${i.origin} ${u} ${i.minimum.toString()} ${d.unit}` : `តូចពេក៖ ត្រូវការ ${i.origin} ${u} ${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${u.prefix}"` : u.format === "ends_with" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${u.suffix}"` : u.format === "includes" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${u.includes}"` : u.format === "regex" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${u.pattern}` : `មិនត្រឹមត្រូវ៖ ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${i.divisor}`;
      case "unrecognized_keys":
        return `រកឃើញសោមិនស្គាល់៖ ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `សោមិនត្រឹមត្រូវនៅក្នុង ${i.origin}`;
      case "invalid_union":
        return "ទិន្នន័យមិនត្រឹមត្រូវ";
      case "invalid_element":
        return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${i.origin}`;
      default:
        return "ទិន្នន័យមិនត្រឹមត្រូវ";
    }
  };
};
function a4() {
  return { localeError: i4() };
}
var r4 = () => {
  const n = {
    string: {
      unit: "문자",
      verb: "to have"
    },
    file: {
      unit: "바이트",
      verb: "to have"
    },
    array: {
      unit: "개",
      verb: "to have"
    },
    set: {
      unit: "개",
      verb: "to have"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "number";
      case "object":
        if (Array.isArray(i)) return "array";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "입력",
    email: "이메일 주소",
    url: "URL",
    emoji: "이모지",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 날짜시간",
    date: "ISO 날짜",
    time: "ISO 시간",
    duration: "ISO 기간",
    ipv4: "IPv4 주소",
    ipv6: "IPv6 주소",
    cidrv4: "IPv4 범위",
    cidrv6: "IPv6 범위",
    base64: "base64 인코딩 문자열",
    base64url: "base64url 인코딩 문자열",
    json_string: "JSON 문자열",
    e164: "E.164 번호",
    jwt: "JWT",
    template_literal: "입력"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `잘못된 입력: 예상 타입은 ${i.expected}, 받은 타입은 ${o(i.input)}입니다`;
      case "invalid_value":
        return i.values.length === 1 ? `잘못된 입력: 값은 ${re(i.values[0])} 이어야 합니다` : `잘못된 옵션: ${H(i.values, "또는 ")} 중 하나여야 합니다`;
      case "too_big": {
        const u = i.inclusive ? "이하" : "미만", d = u === "미만" ? "이어야 합니다" : "여야 합니다", g = r(i.origin), j = g?.unit ?? "요소";
        return g ? `${i.origin ?? "값"}이 너무 큽니다: ${i.maximum.toString()}${j} ${u}${d}` : `${i.origin ?? "값"}이 너무 큽니다: ${i.maximum.toString()} ${u}${d}`;
      }
      case "too_small": {
        const u = i.inclusive ? "이상" : "초과", d = u === "이상" ? "이어야 합니다" : "여야 합니다", g = r(i.origin), j = g?.unit ?? "요소";
        return g ? `${i.origin ?? "값"}이 너무 작습니다: ${i.minimum.toString()}${j} ${u}${d}` : `${i.origin ?? "값"}이 너무 작습니다: ${i.minimum.toString()} ${u}${d}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `잘못된 문자열: "${u.prefix}"(으)로 시작해야 합니다` : u.format === "ends_with" ? `잘못된 문자열: "${u.suffix}"(으)로 끝나야 합니다` : u.format === "includes" ? `잘못된 문자열: "${u.includes}"을(를) 포함해야 합니다` : u.format === "regex" ? `잘못된 문자열: 정규식 ${u.pattern} 패턴과 일치해야 합니다` : `잘못된 ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `잘못된 숫자: ${i.divisor}의 배수여야 합니다`;
      case "unrecognized_keys":
        return `인식할 수 없는 키: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `잘못된 키: ${i.origin}`;
      case "invalid_union":
        return "잘못된 입력";
      case "invalid_element":
        return `잘못된 값: ${i.origin}`;
      default:
        return "잘못된 입력";
    }
  };
};
function l4() {
  return { localeError: r4() };
}
var o4 = () => {
  const n = {
    string: {
      unit: "знаци",
      verb: "да имаат"
    },
    file: {
      unit: "бајти",
      verb: "да имаат"
    },
    array: {
      unit: "ставки",
      verb: "да имаат"
    },
    set: {
      unit: "ставки",
      verb: "да имаат"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "број";
      case "object":
        if (Array.isArray(i)) return "низа";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "внес",
    email: "адреса на е-пошта",
    url: "URL",
    emoji: "емоџи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO датум и време",
    date: "ISO датум",
    time: "ISO време",
    duration: "ISO времетраење",
    ipv4: "IPv4 адреса",
    ipv6: "IPv6 адреса",
    cidrv4: "IPv4 опсег",
    cidrv6: "IPv6 опсег",
    base64: "base64-енкодирана низа",
    base64url: "base64url-енкодирана низа",
    json_string: "JSON низа",
    e164: "E.164 број",
    jwt: "JWT",
    template_literal: "внес"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Грешен внес: се очекува ${i.expected}, примено ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Invalid input: expected ${re(i.values[0])}` : `Грешана опција: се очекува една ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `Премногу голем: се очекува ${i.origin ?? "вредноста"} да има ${u}${i.maximum.toString()} ${d.unit ?? "елементи"}` : `Премногу голем: се очекува ${i.origin ?? "вредноста"} да биде ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `Премногу мал: се очекува ${i.origin} да има ${u}${i.minimum.toString()} ${d.unit}` : `Премногу мал: се очекува ${i.origin} да биде ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Неважечка низа: мора да започнува со "${u.prefix}"` : u.format === "ends_with" ? `Неважечка низа: мора да завршува со "${u.suffix}"` : u.format === "includes" ? `Неважечка низа: мора да вклучува "${u.includes}"` : u.format === "regex" ? `Неважечка низа: мора да одгоара на патернот ${u.pattern}` : `Invalid ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Грешен број: мора да биде делив со ${i.divisor}`;
      case "unrecognized_keys":
        return `${i.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Грешен клуч во ${i.origin}`;
      case "invalid_union":
        return "Грешен внес";
      case "invalid_element":
        return `Грешна вредност во ${i.origin}`;
      default:
        return "Грешен внес";
    }
  };
};
function u4() {
  return { localeError: o4() };
}
var c4 = () => {
  const n = {
    string: {
      unit: "aksara",
      verb: "mempunyai"
    },
    file: {
      unit: "bait",
      verb: "mempunyai"
    },
    array: {
      unit: "elemen",
      verb: "mempunyai"
    },
    set: {
      unit: "elemen",
      verb: "mempunyai"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "nombor";
      case "object":
        if (Array.isArray(i)) return "array";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "input",
    email: "alamat e-mel",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "tarikh masa ISO",
    date: "tarikh ISO",
    time: "masa ISO",
    duration: "tempoh ISO",
    ipv4: "alamat IPv4",
    ipv6: "alamat IPv6",
    cidrv4: "julat IPv4",
    cidrv6: "julat IPv6",
    base64: "string dikodkan base64",
    base64url: "string dikodkan base64url",
    json_string: "string JSON",
    e164: "nombor E.164",
    jwt: "JWT",
    template_literal: "input"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Input tidak sah: dijangka ${i.expected}, diterima ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Input tidak sah: dijangka ${re(i.values[0])}` : `Pilihan tidak sah: dijangka salah satu daripada ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `Terlalu besar: dijangka ${i.origin ?? "nilai"} ${d.verb} ${u}${i.maximum.toString()} ${d.unit ?? "elemen"}` : `Terlalu besar: dijangka ${i.origin ?? "nilai"} adalah ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `Terlalu kecil: dijangka ${i.origin} ${d.verb} ${u}${i.minimum.toString()} ${d.unit}` : `Terlalu kecil: dijangka ${i.origin} adalah ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `String tidak sah: mesti bermula dengan "${u.prefix}"` : u.format === "ends_with" ? `String tidak sah: mesti berakhir dengan "${u.suffix}"` : u.format === "includes" ? `String tidak sah: mesti mengandungi "${u.includes}"` : u.format === "regex" ? `String tidak sah: mesti sepadan dengan corak ${u.pattern}` : `${s[u.format] ?? i.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${i.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${i.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${i.origin}`;
      default:
        return "Input tidak sah";
    }
  };
};
function s4() {
  return { localeError: c4() };
}
var f4 = () => {
  const n = {
    string: { unit: "tekens" },
    file: { unit: "bytes" },
    array: { unit: "elementen" },
    set: { unit: "elementen" }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "getal";
      case "object":
        if (Array.isArray(i)) return "array";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "invoer",
    email: "emailadres",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum en tijd",
    date: "ISO datum",
    time: "ISO tijd",
    duration: "ISO duur",
    ipv4: "IPv4-adres",
    ipv6: "IPv6-adres",
    cidrv4: "IPv4-bereik",
    cidrv6: "IPv6-bereik",
    base64: "base64-gecodeerde tekst",
    base64url: "base64 URL-gecodeerde tekst",
    json_string: "JSON string",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "invoer"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Ongeldige invoer: verwacht ${i.expected}, ontving ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Ongeldige invoer: verwacht ${re(i.values[0])}` : `Ongeldige optie: verwacht één van ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `Te lang: verwacht dat ${i.origin ?? "waarde"} ${u}${i.maximum.toString()} ${d.unit ?? "elementen"} bevat` : `Te lang: verwacht dat ${i.origin ?? "waarde"} ${u}${i.maximum.toString()} is`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `Te kort: verwacht dat ${i.origin} ${u}${i.minimum.toString()} ${d.unit} bevat` : `Te kort: verwacht dat ${i.origin} ${u}${i.minimum.toString()} is`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Ongeldige tekst: moet met "${u.prefix}" beginnen` : u.format === "ends_with" ? `Ongeldige tekst: moet op "${u.suffix}" eindigen` : u.format === "includes" ? `Ongeldige tekst: moet "${u.includes}" bevatten` : u.format === "regex" ? `Ongeldige tekst: moet overeenkomen met patroon ${u.pattern}` : `Ongeldig: ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${i.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${i.keys.length > 1 ? "s" : ""}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${i.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${i.origin}`;
      default:
        return "Ongeldige invoer";
    }
  };
};
function d4() {
  return { localeError: f4() };
}
var m4 = () => {
  const n = {
    string: {
      unit: "tegn",
      verb: "å ha"
    },
    file: {
      unit: "bytes",
      verb: "å ha"
    },
    array: {
      unit: "elementer",
      verb: "å inneholde"
    },
    set: {
      unit: "elementer",
      verb: "å inneholde"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "tall";
      case "object":
        if (Array.isArray(i)) return "liste";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "input",
    email: "e-postadresse",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO dato- og klokkeslett",
    date: "ISO-dato",
    time: "ISO-klokkeslett",
    duration: "ISO-varighet",
    ipv4: "IPv4-område",
    ipv6: "IPv6-område",
    cidrv4: "IPv4-spekter",
    cidrv6: "IPv6-spekter",
    base64: "base64-enkodet streng",
    base64url: "base64url-enkodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Ugyldig input: forventet ${i.expected}, fikk ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Ugyldig verdi: forventet ${re(i.values[0])}` : `Ugyldig valg: forventet en av ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `For stor(t): forventet ${i.origin ?? "value"} til å ha ${u}${i.maximum.toString()} ${d.unit ?? "elementer"}` : `For stor(t): forventet ${i.origin ?? "value"} til å ha ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `For lite(n): forventet ${i.origin} til å ha ${u}${i.minimum.toString()} ${d.unit}` : `For lite(n): forventet ${i.origin} til å ha ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Ugyldig streng: må starte med "${u.prefix}"` : u.format === "ends_with" ? `Ugyldig streng: må ende med "${u.suffix}"` : u.format === "includes" ? `Ugyldig streng: må inneholde "${u.includes}"` : u.format === "regex" ? `Ugyldig streng: må matche mønsteret ${u.pattern}` : `Ugyldig ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: må være et multiplum av ${i.divisor}`;
      case "unrecognized_keys":
        return `${i.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig nøkkel i ${i.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${i.origin}`;
      default:
        return "Ugyldig input";
    }
  };
};
function v4() {
  return { localeError: m4() };
}
var p4 = () => {
  const n = {
    string: {
      unit: "harf",
      verb: "olmalıdır"
    },
    file: {
      unit: "bayt",
      verb: "olmalıdır"
    },
    array: {
      unit: "unsur",
      verb: "olmalıdır"
    },
    set: {
      unit: "unsur",
      verb: "olmalıdır"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "numara";
      case "object":
        if (Array.isArray(i)) return "saf";
        if (i === null) return "gayb";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "giren",
    email: "epostagâh",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO hengâmı",
    date: "ISO tarihi",
    time: "ISO zamanı",
    duration: "ISO müddeti",
    ipv4: "IPv4 nişânı",
    ipv6: "IPv6 nişânı",
    cidrv4: "IPv4 menzili",
    cidrv6: "IPv6 menzili",
    base64: "base64-şifreli metin",
    base64url: "base64url-şifreli metin",
    json_string: "JSON metin",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "giren"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Fâsit giren: umulan ${i.expected}, alınan ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Fâsit giren: umulan ${re(i.values[0])}` : `Fâsit tercih: mûteberler ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `Fazla büyük: ${i.origin ?? "value"}, ${u}${i.maximum.toString()} ${d.unit ?? "elements"} sahip olmalıydı.` : `Fazla büyük: ${i.origin ?? "value"}, ${u}${i.maximum.toString()} olmalıydı.`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `Fazla küçük: ${i.origin}, ${u}${i.minimum.toString()} ${d.unit} sahip olmalıydı.` : `Fazla küçük: ${i.origin}, ${u}${i.minimum.toString()} olmalıydı.`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Fâsit metin: "${u.prefix}" ile başlamalı.` : u.format === "ends_with" ? `Fâsit metin: "${u.suffix}" ile bitmeli.` : u.format === "includes" ? `Fâsit metin: "${u.includes}" ihtivâ etmeli.` : u.format === "regex" ? `Fâsit metin: ${u.pattern} nakşına uymalı.` : `Fâsit ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Fâsit sayı: ${i.divisor} katı olmalıydı.`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar ${i.keys.length > 1 ? "s" : ""}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `${i.origin} için tanınmayan anahtar var.`;
      case "invalid_union":
        return "Giren tanınamadı.";
      case "invalid_element":
        return `${i.origin} için tanınmayan kıymet var.`;
      default:
        return "Kıymet tanınamadı.";
    }
  };
};
function h4() {
  return { localeError: p4() };
}
var g4 = () => {
  const n = {
    string: {
      unit: "توکي",
      verb: "ولري"
    },
    file: {
      unit: "بایټس",
      verb: "ولري"
    },
    array: {
      unit: "توکي",
      verb: "ولري"
    },
    set: {
      unit: "توکي",
      verb: "ولري"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "عدد";
      case "object":
        if (Array.isArray(i)) return "ارې";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "ورودي",
    email: "بریښنالیک",
    url: "یو آر ال",
    emoji: "ایموجي",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "نیټه او وخت",
    date: "نېټه",
    time: "وخت",
    duration: "موده",
    ipv4: "د IPv4 پته",
    ipv6: "د IPv6 پته",
    cidrv4: "د IPv4 ساحه",
    cidrv6: "د IPv6 ساحه",
    base64: "base64-encoded متن",
    base64url: "base64url-encoded متن",
    json_string: "JSON متن",
    e164: "د E.164 شمېره",
    jwt: "JWT",
    template_literal: "ورودي"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `ناسم ورودي: باید ${i.expected} وای, مګر ${o(i.input)} ترلاسه شو`;
      case "invalid_value":
        return i.values.length === 1 ? `ناسم ورودي: باید ${re(i.values[0])} وای` : `ناسم انتخاب: باید یو له ${H(i.values, "|")} څخه وای`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `ډیر لوی: ${i.origin ?? "ارزښت"} باید ${u}${i.maximum.toString()} ${d.unit ?? "عنصرونه"} ولري` : `ډیر لوی: ${i.origin ?? "ارزښت"} باید ${u}${i.maximum.toString()} وي`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `ډیر کوچنی: ${i.origin} باید ${u}${i.minimum.toString()} ${d.unit} ولري` : `ډیر کوچنی: ${i.origin} باید ${u}${i.minimum.toString()} وي`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `ناسم متن: باید د "${u.prefix}" سره پیل شي` : u.format === "ends_with" ? `ناسم متن: باید د "${u.suffix}" سره پای ته ورسيږي` : u.format === "includes" ? `ناسم متن: باید "${u.includes}" ولري` : u.format === "regex" ? `ناسم متن: باید د ${u.pattern} سره مطابقت ولري` : `${s[u.format] ?? i.format} ناسم دی`;
      }
      case "not_multiple_of":
        return `ناسم عدد: باید د ${i.divisor} مضرب وي`;
      case "unrecognized_keys":
        return `ناسم ${i.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `ناسم کلیډ په ${i.origin} کې`;
      case "invalid_union":
        return "ناسمه ورودي";
      case "invalid_element":
        return `ناسم عنصر په ${i.origin} کې`;
      default:
        return "ناسمه ورودي";
    }
  };
};
function y4() {
  return { localeError: g4() };
}
var _4 = () => {
  const n = {
    string: {
      unit: "znaków",
      verb: "mieć"
    },
    file: {
      unit: "bajtów",
      verb: "mieć"
    },
    array: {
      unit: "elementów",
      verb: "mieć"
    },
    set: {
      unit: "elementów",
      verb: "mieć"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "liczba";
      case "object":
        if (Array.isArray(i)) return "tablica";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "wyrażenie",
    email: "adres email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data i godzina w formacie ISO",
    date: "data w formacie ISO",
    time: "godzina w formacie ISO",
    duration: "czas trwania ISO",
    ipv4: "adres IPv4",
    ipv6: "adres IPv6",
    cidrv4: "zakres IPv4",
    cidrv6: "zakres IPv6",
    base64: "ciąg znaków zakodowany w formacie base64",
    base64url: "ciąg znaków zakodowany w formacie base64url",
    json_string: "ciąg znaków w formacie JSON",
    e164: "liczba E.164",
    jwt: "JWT",
    template_literal: "wejście"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Nieprawidłowe dane wejściowe: oczekiwano ${i.expected}, otrzymano ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Nieprawidłowe dane wejściowe: oczekiwano ${re(i.values[0])}` : `Nieprawidłowa opcja: oczekiwano jednej z wartości ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `Za duża wartość: oczekiwano, że ${i.origin ?? "wartość"} będzie mieć ${u}${i.maximum.toString()} ${d.unit ?? "elementów"}` : `Zbyt duż(y/a/e): oczekiwano, że ${i.origin ?? "wartość"} będzie wynosić ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `Za mała wartość: oczekiwano, że ${i.origin ?? "wartość"} będzie mieć ${u}${i.minimum.toString()} ${d.unit ?? "elementów"}` : `Zbyt mał(y/a/e): oczekiwano, że ${i.origin ?? "wartość"} będzie wynosić ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Nieprawidłowy ciąg znaków: musi zaczynać się od "${u.prefix}"` : u.format === "ends_with" ? `Nieprawidłowy ciąg znaków: musi kończyć się na "${u.suffix}"` : u.format === "includes" ? `Nieprawidłowy ciąg znaków: musi zawierać "${u.includes}"` : u.format === "regex" ? `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${u.pattern}` : `Nieprawidłow(y/a/e) ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Nieprawidłowa liczba: musi być wielokrotnością ${i.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${i.keys.length > 1 ? "s" : ""}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawidłowy klucz w ${i.origin}`;
      case "invalid_union":
        return "Nieprawidłowe dane wejściowe";
      case "invalid_element":
        return `Nieprawidłowa wartość w ${i.origin}`;
      default:
        return "Nieprawidłowe dane wejściowe";
    }
  };
};
function b4() {
  return { localeError: _4() };
}
var S4 = () => {
  const n = {
    string: {
      unit: "caracteres",
      verb: "ter"
    },
    file: {
      unit: "bytes",
      verb: "ter"
    },
    array: {
      unit: "itens",
      verb: "ter"
    },
    set: {
      unit: "itens",
      verb: "ter"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "número";
      case "object":
        if (Array.isArray(i)) return "array";
        if (i === null) return "nulo";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "padrão",
    email: "endereço de e-mail",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "data e hora ISO",
    date: "data ISO",
    time: "hora ISO",
    duration: "duração ISO",
    ipv4: "endereço IPv4",
    ipv6: "endereço IPv6",
    cidrv4: "faixa de IPv4",
    cidrv6: "faixa de IPv6",
    base64: "texto codificado em base64",
    base64url: "URL codificada em base64",
    json_string: "texto JSON",
    e164: "número E.164",
    jwt: "JWT",
    template_literal: "entrada"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Tipo inválido: esperado ${i.expected}, recebido ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Entrada inválida: esperado ${re(i.values[0])}` : `Opção inválida: esperada uma das ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `Muito grande: esperado que ${i.origin ?? "valor"} tivesse ${u}${i.maximum.toString()} ${d.unit ?? "elementos"}` : `Muito grande: esperado que ${i.origin ?? "valor"} fosse ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `Muito pequeno: esperado que ${i.origin} tivesse ${u}${i.minimum.toString()} ${d.unit}` : `Muito pequeno: esperado que ${i.origin} fosse ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Texto inválido: deve começar com "${u.prefix}"` : u.format === "ends_with" ? `Texto inválido: deve terminar com "${u.suffix}"` : u.format === "includes" ? `Texto inválido: deve incluir "${u.includes}"` : u.format === "regex" ? `Texto inválido: deve corresponder ao padrão ${u.pattern}` : `${s[u.format] ?? i.format} inválido`;
      }
      case "not_multiple_of":
        return `Número inválido: deve ser múltiplo de ${i.divisor}`;
      case "unrecognized_keys":
        return `Chave${i.keys.length > 1 ? "s" : ""} desconhecida${i.keys.length > 1 ? "s" : ""}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Chave inválida em ${i.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido em ${i.origin}`;
      default:
        return "Campo inválido";
    }
  };
};
function $4() {
  return { localeError: S4() };
}
function xg(n, r, o, s) {
  const i = Math.abs(n), u = i % 10, d = i % 100;
  return d >= 11 && d <= 19 ? s : u === 1 ? r : u >= 2 && u <= 4 ? o : s;
}
var z4 = () => {
  const n = {
    string: {
      unit: {
        one: "символ",
        few: "символа",
        many: "символов"
      },
      verb: "иметь"
    },
    file: {
      unit: {
        one: "байт",
        few: "байта",
        many: "байт"
      },
      verb: "иметь"
    },
    array: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    },
    set: {
      unit: {
        one: "элемент",
        few: "элемента",
        many: "элементов"
      },
      verb: "иметь"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "число";
      case "object":
        if (Array.isArray(i)) return "массив";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "ввод",
    email: "email адрес",
    url: "URL",
    emoji: "эмодзи",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO дата и время",
    date: "ISO дата",
    time: "ISO время",
    duration: "ISO длительность",
    ipv4: "IPv4 адрес",
    ipv6: "IPv6 адрес",
    cidrv4: "IPv4 диапазон",
    cidrv6: "IPv6 диапазон",
    base64: "строка в формате base64",
    base64url: "строка в формате base64url",
    json_string: "JSON строка",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "ввод"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Неверный ввод: ожидалось ${i.expected}, получено ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Неверный ввод: ожидалось ${re(i.values[0])}` : `Неверный вариант: ожидалось одно из ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        if (d) {
          const g = xg(Number(i.maximum), d.unit.one, d.unit.few, d.unit.many);
          return `Слишком большое значение: ожидалось, что ${i.origin ?? "значение"} будет иметь ${u}${i.maximum.toString()} ${g}`;
        }
        return `Слишком большое значение: ожидалось, что ${i.origin ?? "значение"} будет ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        if (d) {
          const g = xg(Number(i.minimum), d.unit.one, d.unit.few, d.unit.many);
          return `Слишком маленькое значение: ожидалось, что ${i.origin} будет иметь ${u}${i.minimum.toString()} ${g}`;
        }
        return `Слишком маленькое значение: ожидалось, что ${i.origin} будет ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Неверная строка: должна начинаться с "${u.prefix}"` : u.format === "ends_with" ? `Неверная строка: должна заканчиваться на "${u.suffix}"` : u.format === "includes" ? `Неверная строка: должна содержать "${u.includes}"` : u.format === "regex" ? `Неверная строка: должна соответствовать шаблону ${u.pattern}` : `Неверный ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Неверное число: должно быть кратным ${i.divisor}`;
      case "unrecognized_keys":
        return `Нераспознанн${i.keys.length > 1 ? "ые" : "ый"} ключ${i.keys.length > 1 ? "и" : ""}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Неверный ключ в ${i.origin}`;
      case "invalid_union":
        return "Неверные входные данные";
      case "invalid_element":
        return `Неверное значение в ${i.origin}`;
      default:
        return "Неверные входные данные";
    }
  };
};
function T4() {
  return { localeError: z4() };
}
var w4 = () => {
  const n = {
    string: {
      unit: "znakov",
      verb: "imeti"
    },
    file: {
      unit: "bajtov",
      verb: "imeti"
    },
    array: {
      unit: "elementov",
      verb: "imeti"
    },
    set: {
      unit: "elementov",
      verb: "imeti"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "število";
      case "object":
        if (Array.isArray(i)) return "tabela";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "vnos",
    email: "e-poštni naslov",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datum in čas",
    date: "ISO datum",
    time: "ISO čas",
    duration: "ISO trajanje",
    ipv4: "IPv4 naslov",
    ipv6: "IPv6 naslov",
    cidrv4: "obseg IPv4",
    cidrv6: "obseg IPv6",
    base64: "base64 kodiran niz",
    base64url: "base64url kodiran niz",
    json_string: "JSON niz",
    e164: "E.164 številka",
    jwt: "JWT",
    template_literal: "vnos"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Neveljaven vnos: pričakovano ${i.expected}, prejeto ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Neveljaven vnos: pričakovano ${re(i.values[0])}` : `Neveljavna možnost: pričakovano eno izmed ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `Preveliko: pričakovano, da bo ${i.origin ?? "vrednost"} imelo ${u}${i.maximum.toString()} ${d.unit ?? "elementov"}` : `Preveliko: pričakovano, da bo ${i.origin ?? "vrednost"} ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `Premajhno: pričakovano, da bo ${i.origin} imelo ${u}${i.minimum.toString()} ${d.unit}` : `Premajhno: pričakovano, da bo ${i.origin} ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Neveljaven niz: mora se začeti z "${u.prefix}"` : u.format === "ends_with" ? `Neveljaven niz: mora se končati z "${u.suffix}"` : u.format === "includes" ? `Neveljaven niz: mora vsebovati "${u.includes}"` : u.format === "regex" ? `Neveljaven niz: mora ustrezati vzorcu ${u.pattern}` : `Neveljaven ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno število: mora biti večkratnik ${i.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${i.keys.length > 1 ? "i ključi" : " ključ"}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven ključ v ${i.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${i.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
};
function E4() {
  return { localeError: w4() };
}
var k4 = () => {
  const n = {
    string: {
      unit: "tecken",
      verb: "att ha"
    },
    file: {
      unit: "bytes",
      verb: "att ha"
    },
    array: {
      unit: "objekt",
      verb: "att innehålla"
    },
    set: {
      unit: "objekt",
      verb: "att innehålla"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "antal";
      case "object":
        if (Array.isArray(i)) return "lista";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "reguljärt uttryck",
    email: "e-postadress",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO-datum och tid",
    date: "ISO-datum",
    time: "ISO-tid",
    duration: "ISO-varaktighet",
    ipv4: "IPv4-intervall",
    ipv6: "IPv6-intervall",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodad sträng",
    base64url: "base64url-kodad sträng",
    json_string: "JSON-sträng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "mall-literal"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Ogiltig inmatning: förväntat ${i.expected}, fick ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Ogiltig inmatning: förväntat ${re(i.values[0])}` : `Ogiltigt val: förväntade en av ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `För stor(t): förväntade ${i.origin ?? "värdet"} att ha ${u}${i.maximum.toString()} ${d.unit ?? "element"}` : `För stor(t): förväntat ${i.origin ?? "värdet"} att ha ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `För lite(t): förväntade ${i.origin ?? "värdet"} att ha ${u}${i.minimum.toString()} ${d.unit}` : `För lite(t): förväntade ${i.origin ?? "värdet"} att ha ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Ogiltig sträng: måste börja med "${u.prefix}"` : u.format === "ends_with" ? `Ogiltig sträng: måste sluta med "${u.suffix}"` : u.format === "includes" ? `Ogiltig sträng: måste innehålla "${u.includes}"` : u.format === "regex" ? `Ogiltig sträng: måste matcha mönstret "${u.pattern}"` : `Ogiltig(t) ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: måste vara en multipel av ${i.divisor}`;
      case "unrecognized_keys":
        return `${i.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${i.origin ?? "värdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt värde i ${i.origin ?? "värdet"}`;
      default:
        return "Ogiltig input";
    }
  };
};
function O4() {
  return { localeError: k4() };
}
var N4 = () => {
  const n = {
    string: {
      unit: "எழுத்துக்கள்",
      verb: "கொண்டிருக்க வேண்டும்"
    },
    file: {
      unit: "பைட்டுகள்",
      verb: "கொண்டிருக்க வேண்டும்"
    },
    array: {
      unit: "உறுப்புகள்",
      verb: "கொண்டிருக்க வேண்டும்"
    },
    set: {
      unit: "உறுப்புகள்",
      verb: "கொண்டிருக்க வேண்டும்"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "எண் அல்லாதது" : "எண்";
      case "object":
        if (Array.isArray(i)) return "அணி";
        if (i === null) return "வெறுமை";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "உள்ளீடு",
    email: "மின்னஞ்சல் முகவரி",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO தேதி நேரம்",
    date: "ISO தேதி",
    time: "ISO நேரம்",
    duration: "ISO கால அளவு",
    ipv4: "IPv4 முகவரி",
    ipv6: "IPv6 முகவரி",
    cidrv4: "IPv4 வரம்பு",
    cidrv6: "IPv6 வரம்பு",
    base64: "base64-encoded சரம்",
    base64url: "base64url-encoded சரம்",
    json_string: "JSON சரம்",
    e164: "E.164 எண்",
    jwt: "JWT",
    template_literal: "input"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${i.expected}, பெறப்பட்டது ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${re(i.values[0])}` : `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${H(i.values, "|")} இல் ஒன்று`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${i.origin ?? "மதிப்பு"} ${u}${i.maximum.toString()} ${d.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்` : `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${i.origin ?? "மதிப்பு"} ${u}${i.maximum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${i.origin} ${u}${i.minimum.toString()} ${d.unit} ஆக இருக்க வேண்டும்` : `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${i.origin} ${u}${i.minimum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `தவறான சரம்: "${u.prefix}" இல் தொடங்க வேண்டும்` : u.format === "ends_with" ? `தவறான சரம்: "${u.suffix}" இல் முடிவடைய வேண்டும்` : u.format === "includes" ? `தவறான சரம்: "${u.includes}" ஐ உள்ளடக்க வேண்டும்` : u.format === "regex" ? `தவறான சரம்: ${u.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்` : `தவறான ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `தவறான எண்: ${i.divisor} இன் பலமாக இருக்க வேண்டும்`;
      case "unrecognized_keys":
        return `அடையாளம் தெரியாத விசை${i.keys.length > 1 ? "கள்" : ""}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `${i.origin} இல் தவறான விசை`;
      case "invalid_union":
        return "தவறான உள்ளீடு";
      case "invalid_element":
        return `${i.origin} இல் தவறான மதிப்பு`;
      default:
        return "தவறான உள்ளீடு";
    }
  };
};
function U4() {
  return { localeError: N4() };
}
var x4 = () => {
  const n = {
    string: {
      unit: "ตัวอักษร",
      verb: "ควรมี"
    },
    file: {
      unit: "ไบต์",
      verb: "ควรมี"
    },
    array: {
      unit: "รายการ",
      verb: "ควรมี"
    },
    set: {
      unit: "รายการ",
      verb: "ควรมี"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "ไม่ใช่ตัวเลข (NaN)" : "ตัวเลข";
      case "object":
        if (Array.isArray(i)) return "อาร์เรย์ (Array)";
        if (i === null) return "ไม่มีค่า (null)";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "ข้อมูลที่ป้อน",
    email: "ที่อยู่อีเมล",
    url: "URL",
    emoji: "อิโมจิ",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "วันที่เวลาแบบ ISO",
    date: "วันที่แบบ ISO",
    time: "เวลาแบบ ISO",
    duration: "ช่วงเวลาแบบ ISO",
    ipv4: "ที่อยู่ IPv4",
    ipv6: "ที่อยู่ IPv6",
    cidrv4: "ช่วง IP แบบ IPv4",
    cidrv6: "ช่วง IP แบบ IPv6",
    base64: "ข้อความแบบ Base64",
    base64url: "ข้อความแบบ Base64 สำหรับ URL",
    json_string: "ข้อความแบบ JSON",
    e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)",
    jwt: "โทเคน JWT",
    template_literal: "ข้อมูลที่ป้อน"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${i.expected} แต่ได้รับ ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `ค่าไม่ถูกต้อง: ควรเป็น ${re(i.values[0])}` : `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "ไม่เกิน" : "น้อยกว่า", d = r(i.origin);
        return d ? `เกินกำหนด: ${i.origin ?? "ค่า"} ควรมี${u} ${i.maximum.toString()} ${d.unit ?? "รายการ"}` : `เกินกำหนด: ${i.origin ?? "ค่า"} ควรมี${u} ${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? "อย่างน้อย" : "มากกว่า", d = r(i.origin);
        return d ? `น้อยกว่ากำหนด: ${i.origin} ควรมี${u} ${i.minimum.toString()} ${d.unit}` : `น้อยกว่ากำหนด: ${i.origin} ควรมี${u} ${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${u.prefix}"` : u.format === "ends_with" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${u.suffix}"` : u.format === "includes" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${u.includes}" อยู่ในข้อความ` : u.format === "regex" ? `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${u.pattern}` : `รูปแบบไม่ถูกต้อง: ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${i.divisor} ได้ลงตัว`;
      case "unrecognized_keys":
        return `พบคีย์ที่ไม่รู้จัก: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `คีย์ไม่ถูกต้องใน ${i.origin}`;
      case "invalid_union":
        return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
      case "invalid_element":
        return `ข้อมูลไม่ถูกต้องใน ${i.origin}`;
      default:
        return "ข้อมูลไม่ถูกต้อง";
    }
  };
};
function j4() {
  return { localeError: x4() };
}
var D4 = (n) => {
  const r = typeof n;
  switch (r) {
    case "number":
      return Number.isNaN(n) ? "NaN" : "number";
    case "object":
      if (Array.isArray(n)) return "array";
      if (n === null) return "null";
      if (Object.getPrototypeOf(n) !== Object.prototype && n.constructor) return n.constructor.name;
  }
  return r;
}, A4 = () => {
  const n = {
    string: {
      unit: "karakter",
      verb: "olmalı"
    },
    file: {
      unit: "bayt",
      verb: "olmalı"
    },
    array: {
      unit: "öğe",
      verb: "olmalı"
    },
    set: {
      unit: "öğe",
      verb: "olmalı"
    }
  };
  function r(s) {
    return n[s] ?? null;
  }
  const o = {
    regex: "girdi",
    email: "e-posta adresi",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO tarih ve saat",
    date: "ISO tarih",
    time: "ISO saat",
    duration: "ISO süre",
    ipv4: "IPv4 adresi",
    ipv6: "IPv6 adresi",
    cidrv4: "IPv4 aralığı",
    cidrv6: "IPv6 aralığı",
    base64: "base64 ile şifrelenmiş metin",
    base64url: "base64url ile şifrelenmiş metin",
    json_string: "JSON dizesi",
    e164: "E.164 sayısı",
    jwt: "JWT",
    template_literal: "Şablon dizesi"
  };
  return (s) => {
    switch (s.code) {
      case "invalid_type":
        return `Geçersiz değer: beklenen ${s.expected}, alınan ${D4(s.input)}`;
      case "invalid_value":
        return s.values.length === 1 ? `Geçersiz değer: beklenen ${re(s.values[0])}` : `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${H(s.values, "|")}`;
      case "too_big": {
        const i = s.inclusive ? "<=" : "<", u = r(s.origin);
        return u ? `Çok büyük: beklenen ${s.origin ?? "değer"} ${i}${s.maximum.toString()} ${u.unit ?? "öğe"}` : `Çok büyük: beklenen ${s.origin ?? "değer"} ${i}${s.maximum.toString()}`;
      }
      case "too_small": {
        const i = s.inclusive ? ">=" : ">", u = r(s.origin);
        return u ? `Çok küçük: beklenen ${s.origin} ${i}${s.minimum.toString()} ${u.unit}` : `Çok küçük: beklenen ${s.origin} ${i}${s.minimum.toString()}`;
      }
      case "invalid_format": {
        const i = s;
        return i.format === "starts_with" ? `Geçersiz metin: "${i.prefix}" ile başlamalı` : i.format === "ends_with" ? `Geçersiz metin: "${i.suffix}" ile bitmeli` : i.format === "includes" ? `Geçersiz metin: "${i.includes}" içermeli` : i.format === "regex" ? `Geçersiz metin: ${i.pattern} desenine uymalı` : `Geçersiz ${o[i.format] ?? s.format}`;
      }
      case "not_multiple_of":
        return `Geçersiz sayı: ${s.divisor} ile tam bölünebilmeli`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar${s.keys.length > 1 ? "lar" : ""}: ${H(s.keys, ", ")}`;
      case "invalid_key":
        return `${s.origin} içinde geçersiz anahtar`;
      case "invalid_union":
        return "Geçersiz değer";
      case "invalid_element":
        return `${s.origin} içinde geçersiz değer`;
      default:
        return "Geçersiz değer";
    }
  };
};
function Z4() {
  return { localeError: A4() };
}
var R4 = () => {
  const n = {
    string: {
      unit: "символів",
      verb: "матиме"
    },
    file: {
      unit: "байтів",
      verb: "матиме"
    },
    array: {
      unit: "елементів",
      verb: "матиме"
    },
    set: {
      unit: "елементів",
      verb: "матиме"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "число";
      case "object":
        if (Array.isArray(i)) return "масив";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "вхідні дані",
    email: "адреса електронної пошти",
    url: "URL",
    emoji: "емодзі",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "дата та час ISO",
    date: "дата ISO",
    time: "час ISO",
    duration: "тривалість ISO",
    ipv4: "адреса IPv4",
    ipv6: "адреса IPv6",
    cidrv4: "діапазон IPv4",
    cidrv6: "діапазон IPv6",
    base64: "рядок у кодуванні base64",
    base64url: "рядок у кодуванні base64url",
    json_string: "рядок JSON",
    e164: "номер E.164",
    jwt: "JWT",
    template_literal: "вхідні дані"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Неправильні вхідні дані: очікується ${i.expected}, отримано ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Неправильні вхідні дані: очікується ${re(i.values[0])}` : `Неправильна опція: очікується одне з ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `Занадто велике: очікується, що ${i.origin ?? "значення"} ${d.verb} ${u}${i.maximum.toString()} ${d.unit ?? "елементів"}` : `Занадто велике: очікується, що ${i.origin ?? "значення"} буде ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `Занадто мале: очікується, що ${i.origin} ${d.verb} ${u}${i.minimum.toString()} ${d.unit}` : `Занадто мале: очікується, що ${i.origin} буде ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Неправильний рядок: повинен починатися з "${u.prefix}"` : u.format === "ends_with" ? `Неправильний рядок: повинен закінчуватися на "${u.suffix}"` : u.format === "includes" ? `Неправильний рядок: повинен містити "${u.includes}"` : u.format === "regex" ? `Неправильний рядок: повинен відповідати шаблону ${u.pattern}` : `Неправильний ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Неправильне число: повинно бути кратним ${i.divisor}`;
      case "unrecognized_keys":
        return `Нерозпізнаний ключ${i.keys.length > 1 ? "і" : ""}: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Неправильний ключ у ${i.origin}`;
      case "invalid_union":
        return "Неправильні вхідні дані";
      case "invalid_element":
        return `Неправильне значення у ${i.origin}`;
      default:
        return "Неправильні вхідні дані";
    }
  };
};
function C4() {
  return { localeError: R4() };
}
var M4 = () => {
  const n = {
    string: {
      unit: "حروف",
      verb: "ہونا"
    },
    file: {
      unit: "بائٹس",
      verb: "ہونا"
    },
    array: {
      unit: "آئٹمز",
      verb: "ہونا"
    },
    set: {
      unit: "آئٹمز",
      verb: "ہونا"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "نمبر";
      case "object":
        if (Array.isArray(i)) return "آرے";
        if (i === null) return "نل";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "ان پٹ",
    email: "ای میل ایڈریس",
    url: "یو آر ایل",
    emoji: "ایموجی",
    uuid: "یو یو آئی ڈی",
    uuidv4: "یو یو آئی ڈی وی 4",
    uuidv6: "یو یو آئی ڈی وی 6",
    nanoid: "نینو آئی ڈی",
    guid: "جی یو آئی ڈی",
    cuid: "سی یو آئی ڈی",
    cuid2: "سی یو آئی ڈی 2",
    ulid: "یو ایل آئی ڈی",
    xid: "ایکس آئی ڈی",
    ksuid: "کے ایس یو آئی ڈی",
    datetime: "آئی ایس او ڈیٹ ٹائم",
    date: "آئی ایس او تاریخ",
    time: "آئی ایس او وقت",
    duration: "آئی ایس او مدت",
    ipv4: "آئی پی وی 4 ایڈریس",
    ipv6: "آئی پی وی 6 ایڈریس",
    cidrv4: "آئی پی وی 4 رینج",
    cidrv6: "آئی پی وی 6 رینج",
    base64: "بیس 64 ان کوڈڈ سٹرنگ",
    base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ",
    json_string: "جے ایس او این سٹرنگ",
    e164: "ای 164 نمبر",
    jwt: "جے ڈبلیو ٹی",
    template_literal: "ان پٹ"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `غلط ان پٹ: ${i.expected} متوقع تھا، ${o(i.input)} موصول ہوا`;
      case "invalid_value":
        return i.values.length === 1 ? `غلط ان پٹ: ${re(i.values[0])} متوقع تھا` : `غلط آپشن: ${H(i.values, "|")} میں سے ایک متوقع تھا`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `بہت بڑا: ${i.origin ?? "ویلیو"} کے ${u}${i.maximum.toString()} ${d.unit ?? "عناصر"} ہونے متوقع تھے` : `بہت بڑا: ${i.origin ?? "ویلیو"} کا ${u}${i.maximum.toString()} ہونا متوقع تھا`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `بہت چھوٹا: ${i.origin} کے ${u}${i.minimum.toString()} ${d.unit} ہونے متوقع تھے` : `بہت چھوٹا: ${i.origin} کا ${u}${i.minimum.toString()} ہونا متوقع تھا`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `غلط سٹرنگ: "${u.prefix}" سے شروع ہونا چاہیے` : u.format === "ends_with" ? `غلط سٹرنگ: "${u.suffix}" پر ختم ہونا چاہیے` : u.format === "includes" ? `غلط سٹرنگ: "${u.includes}" شامل ہونا چاہیے` : u.format === "regex" ? `غلط سٹرنگ: پیٹرن ${u.pattern} سے میچ ہونا چاہیے` : `غلط ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `غلط نمبر: ${i.divisor} کا مضاعف ہونا چاہیے`;
      case "unrecognized_keys":
        return `غیر تسلیم شدہ کی${i.keys.length > 1 ? "ز" : ""}: ${H(i.keys, "، ")}`;
      case "invalid_key":
        return `${i.origin} میں غلط کی`;
      case "invalid_union":
        return "غلط ان پٹ";
      case "invalid_element":
        return `${i.origin} میں غلط ویلیو`;
      default:
        return "غلط ان پٹ";
    }
  };
};
function I4() {
  return { localeError: M4() };
}
var q4 = () => {
  const n = {
    string: {
      unit: "ký tự",
      verb: "có"
    },
    file: {
      unit: "byte",
      verb: "có"
    },
    array: {
      unit: "phần tử",
      verb: "có"
    },
    set: {
      unit: "phần tử",
      verb: "có"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "số";
      case "object":
        if (Array.isArray(i)) return "mảng";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "đầu vào",
    email: "địa chỉ email",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ngày giờ ISO",
    date: "ngày ISO",
    time: "giờ ISO",
    duration: "khoảng thời gian ISO",
    ipv4: "địa chỉ IPv4",
    ipv6: "địa chỉ IPv6",
    cidrv4: "dải IPv4",
    cidrv6: "dải IPv6",
    base64: "chuỗi mã hóa base64",
    base64url: "chuỗi mã hóa base64url",
    json_string: "chuỗi JSON",
    e164: "số E.164",
    jwt: "JWT",
    template_literal: "đầu vào"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `Đầu vào không hợp lệ: mong đợi ${i.expected}, nhận được ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Đầu vào không hợp lệ: mong đợi ${re(i.values[0])}` : `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `Quá lớn: mong đợi ${i.origin ?? "giá trị"} ${d.verb} ${u}${i.maximum.toString()} ${d.unit ?? "phần tử"}` : `Quá lớn: mong đợi ${i.origin ?? "giá trị"} ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `Quá nhỏ: mong đợi ${i.origin} ${d.verb} ${u}${i.minimum.toString()} ${d.unit}` : `Quá nhỏ: mong đợi ${i.origin} ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Chuỗi không hợp lệ: phải bắt đầu bằng "${u.prefix}"` : u.format === "ends_with" ? `Chuỗi không hợp lệ: phải kết thúc bằng "${u.suffix}"` : u.format === "includes" ? `Chuỗi không hợp lệ: phải bao gồm "${u.includes}"` : u.format === "regex" ? `Chuỗi không hợp lệ: phải khớp với mẫu ${u.pattern}` : `${s[u.format] ?? i.format} không hợp lệ`;
      }
      case "not_multiple_of":
        return `Số không hợp lệ: phải là bội số của ${i.divisor}`;
      case "unrecognized_keys":
        return `Khóa không được nhận dạng: ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `Khóa không hợp lệ trong ${i.origin}`;
      case "invalid_union":
        return "Đầu vào không hợp lệ";
      case "invalid_element":
        return `Giá trị không hợp lệ trong ${i.origin}`;
      default:
        return "Đầu vào không hợp lệ";
    }
  };
};
function H4() {
  return { localeError: q4() };
}
var L4 = () => {
  const n = {
    string: {
      unit: "字符",
      verb: "包含"
    },
    file: {
      unit: "字节",
      verb: "包含"
    },
    array: {
      unit: "项",
      verb: "包含"
    },
    set: {
      unit: "项",
      verb: "包含"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "非数字(NaN)" : "数字";
      case "object":
        if (Array.isArray(i)) return "数组";
        if (i === null) return "空值(null)";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "输入",
    email: "电子邮件",
    url: "URL",
    emoji: "表情符号",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO日期时间",
    date: "ISO日期",
    time: "ISO时间",
    duration: "ISO时长",
    ipv4: "IPv4地址",
    ipv6: "IPv6地址",
    cidrv4: "IPv4网段",
    cidrv6: "IPv6网段",
    base64: "base64编码字符串",
    base64url: "base64url编码字符串",
    json_string: "JSON字符串",
    e164: "E.164号码",
    jwt: "JWT",
    template_literal: "输入"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `无效输入：期望 ${i.expected}，实际接收 ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `无效输入：期望 ${re(i.values[0])}` : `无效选项：期望以下之一 ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `数值过大：期望 ${i.origin ?? "值"} ${u}${i.maximum.toString()} ${d.unit ?? "个元素"}` : `数值过大：期望 ${i.origin ?? "值"} ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `数值过小：期望 ${i.origin} ${u}${i.minimum.toString()} ${d.unit}` : `数值过小：期望 ${i.origin} ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `无效字符串：必须以 "${u.prefix}" 开头` : u.format === "ends_with" ? `无效字符串：必须以 "${u.suffix}" 结尾` : u.format === "includes" ? `无效字符串：必须包含 "${u.includes}"` : u.format === "regex" ? `无效字符串：必须满足正则表达式 ${u.pattern}` : `无效${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `无效数字：必须是 ${i.divisor} 的倍数`;
      case "unrecognized_keys":
        return `出现未知的键(key): ${H(i.keys, ", ")}`;
      case "invalid_key":
        return `${i.origin} 中的键(key)无效`;
      case "invalid_union":
        return "无效输入";
      case "invalid_element":
        return `${i.origin} 中包含无效值(value)`;
      default:
        return "无效输入";
    }
  };
};
function B4() {
  return { localeError: L4() };
}
var G4 = () => {
  const n = {
    string: {
      unit: "字元",
      verb: "擁有"
    },
    file: {
      unit: "位元組",
      verb: "擁有"
    },
    array: {
      unit: "項目",
      verb: "擁有"
    },
    set: {
      unit: "項目",
      verb: "擁有"
    }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const o = (i) => {
    const u = typeof i;
    switch (u) {
      case "number":
        return Number.isNaN(i) ? "NaN" : "number";
      case "object":
        if (Array.isArray(i)) return "array";
        if (i === null) return "null";
        if (Object.getPrototypeOf(i) !== Object.prototype && i.constructor) return i.constructor.name;
    }
    return u;
  }, s = {
    regex: "輸入",
    email: "郵件地址",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO 日期時間",
    date: "ISO 日期",
    time: "ISO 時間",
    duration: "ISO 期間",
    ipv4: "IPv4 位址",
    ipv6: "IPv6 位址",
    cidrv4: "IPv4 範圍",
    cidrv6: "IPv6 範圍",
    base64: "base64 編碼字串",
    base64url: "base64url 編碼字串",
    json_string: "JSON 字串",
    e164: "E.164 數值",
    jwt: "JWT",
    template_literal: "輸入"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type":
        return `無效的輸入值：預期為 ${i.expected}，但收到 ${o(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `無效的輸入值：預期為 ${re(i.values[0])}` : `無效的選項：預期為以下其中之一 ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        return d ? `數值過大：預期 ${i.origin ?? "值"} 應為 ${u}${i.maximum.toString()} ${d.unit ?? "個元素"}` : `數值過大：預期 ${i.origin ?? "值"} 應為 ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        return d ? `數值過小：預期 ${i.origin} 應為 ${u}${i.minimum.toString()} ${d.unit}` : `數值過小：預期 ${i.origin} 應為 ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `無效的字串：必須以 "${u.prefix}" 開頭` : u.format === "ends_with" ? `無效的字串：必須以 "${u.suffix}" 結尾` : u.format === "includes" ? `無效的字串：必須包含 "${u.includes}"` : u.format === "regex" ? `無效的字串：必須符合格式 ${u.pattern}` : `無效的 ${s[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `無效的數字：必須為 ${i.divisor} 的倍數`;
      case "unrecognized_keys":
        return `無法識別的鍵值${i.keys.length > 1 ? "們" : ""}：${H(i.keys, "、")}`;
      case "invalid_key":
        return `${i.origin} 中有無效的鍵值`;
      case "invalid_union":
        return "無效的輸入值";
      case "invalid_element":
        return `${i.origin} 中有無效的值`;
      default:
        return "無效的輸入值";
    }
  };
};
function Y4() {
  return { localeError: G4() };
}
var jf = /* @__PURE__ */ An({
  ar: () => Sz,
  az: () => zz,
  be: () => wz,
  ca: () => kz,
  cs: () => Nz,
  de: () => xz,
  en: () => ob,
  eo: () => Rz,
  es: () => Mz,
  fa: () => qz,
  fi: () => Lz,
  fr: () => Gz,
  frCA: () => Qz,
  he: () => Jz,
  hu: () => Kz,
  id: () => Fz,
  it: () => e4,
  ja: () => n4,
  kh: () => a4,
  ko: () => l4,
  mk: () => u4,
  ms: () => s4,
  nl: () => d4,
  no: () => v4,
  ota: () => h4,
  pl: () => b4,
  ps: () => y4,
  pt: () => $4,
  ru: () => T4,
  sl: () => E4,
  sv: () => O4,
  ta: () => U4,
  th: () => j4,
  tr: () => Z4,
  ua: () => C4,
  ur: () => I4,
  vi: () => H4,
  zhCN: () => B4,
  zhTW: () => Y4
}), Df = /* @__PURE__ */ Symbol("ZodOutput"), Af = /* @__PURE__ */ Symbol("ZodInput"), Zf = class {
  constructor() {
    this._map = /* @__PURE__ */ new Map(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(n, ...r) {
    const o = r[0];
    if (this._map.set(n, o), o && typeof o == "object" && "id" in o) {
      if (this._idmap.has(o.id)) throw new Error(`ID ${o.id} already exists in the registry`);
      this._idmap.set(o.id, n);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new Map(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(n) {
    const r = this._map.get(n);
    return r && typeof r == "object" && "id" in r && this._idmap.delete(r.id), this._map.delete(n), this;
  }
  get(n) {
    const r = n._zod.parent;
    if (r) {
      const o = { ...this.get(r) ?? {} };
      return delete o.id, {
        ...o,
        ...this._map.get(n)
      };
    }
    return this._map.get(n);
  }
  has(n) {
    return this._map.has(n);
  }
};
function qo() {
  return new Zf();
}
var ai = /* @__PURE__ */ qo();
function ub(n, r) {
  return new n({
    type: "string",
    ...M(r)
  });
}
function cb(n, r) {
  return new n({
    type: "string",
    coerce: !0,
    ...M(r)
  });
}
function Rf(n, r) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...M(r)
  });
}
function Oo(n, r) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...M(r)
  });
}
function Cf(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...M(r)
  });
}
function Mf(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...M(r)
  });
}
function If(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...M(r)
  });
}
function qf(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...M(r)
  });
}
function Hf(n, r) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...M(r)
  });
}
function Lf(n, r) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...M(r)
  });
}
function Bf(n, r) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...M(r)
  });
}
function Gf(n, r) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...M(r)
  });
}
function Yf(n, r) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...M(r)
  });
}
function Qf(n, r) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...M(r)
  });
}
function Vf(n, r) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...M(r)
  });
}
function Jf(n, r) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...M(r)
  });
}
function Xf(n, r) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...M(r)
  });
}
function Kf(n, r) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...M(r)
  });
}
function Pf(n, r) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...M(r)
  });
}
function Ff(n, r) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...M(r)
  });
}
function Wf(n, r) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...M(r)
  });
}
function ed(n, r) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...M(r)
  });
}
function td(n, r) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...M(r)
  });
}
function nd(n, r) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...M(r)
  });
}
var id = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
function sb(n, r) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...M(r)
  });
}
function fb(n, r) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...M(r)
  });
}
function db(n, r) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...M(r)
  });
}
function mb(n, r) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...M(r)
  });
}
function vb(n, r) {
  return new n({
    type: "number",
    checks: [],
    ...M(r)
  });
}
function pb(n, r) {
  return new n({
    type: "number",
    coerce: !0,
    checks: [],
    ...M(r)
  });
}
function hb(n, r) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...M(r)
  });
}
function gb(n, r) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...M(r)
  });
}
function yb(n, r) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...M(r)
  });
}
function _b(n, r) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...M(r)
  });
}
function bb(n, r) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...M(r)
  });
}
function Sb(n, r) {
  return new n({
    type: "boolean",
    ...M(r)
  });
}
function $b(n, r) {
  return new n({
    type: "boolean",
    coerce: !0,
    ...M(r)
  });
}
function zb(n, r) {
  return new n({
    type: "bigint",
    ...M(r)
  });
}
function Tb(n, r) {
  return new n({
    type: "bigint",
    coerce: !0,
    ...M(r)
  });
}
function wb(n, r) {
  return new n({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...M(r)
  });
}
function Eb(n, r) {
  return new n({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...M(r)
  });
}
function kb(n, r) {
  return new n({
    type: "symbol",
    ...M(r)
  });
}
function Ob(n, r) {
  return new n({
    type: "undefined",
    ...M(r)
  });
}
function Nb(n, r) {
  return new n({
    type: "null",
    ...M(r)
  });
}
function Ub(n) {
  return new n({ type: "any" });
}
function No(n) {
  return new n({ type: "unknown" });
}
function xb(n, r) {
  return new n({
    type: "never",
    ...M(r)
  });
}
function jb(n, r) {
  return new n({
    type: "void",
    ...M(r)
  });
}
function Db(n, r) {
  return new n({
    type: "date",
    ...M(r)
  });
}
function Ab(n, r) {
  return new n({
    type: "date",
    coerce: !0,
    ...M(r)
  });
}
function Zb(n, r) {
  return new n({
    type: "nan",
    ...M(r)
  });
}
function ri(n, r) {
  return new $f({
    check: "less_than",
    ...M(r),
    value: n,
    inclusive: !1
  });
}
function Ft(n, r) {
  return new $f({
    check: "less_than",
    ...M(r),
    value: n,
    inclusive: !0
  });
}
function li(n, r) {
  return new zf({
    check: "greater_than",
    ...M(r),
    value: n,
    inclusive: !1
  });
}
function kt(n, r) {
  return new zf({
    check: "greater_than",
    ...M(r),
    value: n,
    inclusive: !0
  });
}
function ad(n) {
  return li(0, n);
}
function rd(n) {
  return ri(0, n);
}
function ld(n) {
  return Ft(0, n);
}
function od(n) {
  return kt(0, n);
}
function ka(n, r) {
  return new My({
    check: "multiple_of",
    ...M(r),
    value: n
  });
}
function Mr(n, r) {
  return new Hy({
    check: "max_size",
    ...M(r),
    maximum: n
  });
}
function Oa(n, r) {
  return new Ly({
    check: "min_size",
    ...M(r),
    minimum: n
  });
}
function Ho(n, r) {
  return new By({
    check: "size_equals",
    ...M(r),
    size: n
  });
}
function Ir(n, r) {
  return new Gy({
    check: "max_length",
    ...M(r),
    maximum: n
  });
}
function ji(n, r) {
  return new Yy({
    check: "min_length",
    ...M(r),
    minimum: n
  });
}
function qr(n, r) {
  return new Qy({
    check: "length_equals",
    ...M(r),
    length: n
  });
}
function Lo(n, r) {
  return new Vy({
    check: "string_format",
    format: "regex",
    ...M(r),
    pattern: n
  });
}
function Bo(n) {
  return new Jy({
    check: "string_format",
    format: "lowercase",
    ...M(n)
  });
}
function Go(n) {
  return new Xy({
    check: "string_format",
    format: "uppercase",
    ...M(n)
  });
}
function Yo(n, r) {
  return new Ky({
    check: "string_format",
    format: "includes",
    ...M(r),
    includes: n
  });
}
function Qo(n, r) {
  return new Py({
    check: "string_format",
    format: "starts_with",
    ...M(r),
    prefix: n
  });
}
function Vo(n, r) {
  return new Fy({
    check: "string_format",
    format: "ends_with",
    ...M(r),
    suffix: n
  });
}
function ud(n, r, o) {
  return new Wy({
    check: "property",
    property: n,
    schema: r,
    ...M(o)
  });
}
function Jo(n, r) {
  return new e_({
    check: "mime_type",
    mime: n,
    ...M(r)
  });
}
function oi(n) {
  return new t_({
    check: "overwrite",
    tx: n
  });
}
function Xo(n) {
  return oi((r) => r.normalize(n));
}
function Ko() {
  return oi((n) => n.trim());
}
function Po() {
  return oi((n) => n.toLowerCase());
}
function Fo() {
  return oi((n) => n.toUpperCase());
}
function cd(n, r, o) {
  return new n({
    type: "array",
    element: r,
    ...M(o)
  });
}
function Q4(n, r, o) {
  return new n({
    type: "union",
    options: r,
    ...M(o)
  });
}
function V4(n, r, o, s) {
  return new n({
    type: "union",
    options: o,
    discriminator: r,
    ...M(s)
  });
}
function J4(n, r, o) {
  return new n({
    type: "intersection",
    left: r,
    right: o
  });
}
function Rb(n, r, o, s) {
  const i = o instanceof te, u = i ? s : o;
  return new n({
    type: "tuple",
    items: r,
    rest: i ? o : null,
    ...M(u)
  });
}
function X4(n, r, o, s) {
  return new n({
    type: "record",
    keyType: r,
    valueType: o,
    ...M(s)
  });
}
function K4(n, r, o, s) {
  return new n({
    type: "map",
    keyType: r,
    valueType: o,
    ...M(s)
  });
}
function P4(n, r, o) {
  return new n({
    type: "set",
    valueType: r,
    ...M(o)
  });
}
function F4(n, r, o) {
  return new n({
    type: "enum",
    entries: Array.isArray(r) ? Object.fromEntries(r.map((s) => [s, s])) : r,
    ...M(o)
  });
}
function W4(n, r, o) {
  return new n({
    type: "enum",
    entries: r,
    ...M(o)
  });
}
function eT(n, r, o) {
  return new n({
    type: "literal",
    values: Array.isArray(r) ? r : [r],
    ...M(o)
  });
}
function Cb(n, r) {
  return new n({
    type: "file",
    ...M(r)
  });
}
function tT(n, r) {
  return new n({
    type: "transform",
    transform: r
  });
}
function nT(n, r) {
  return new n({
    type: "optional",
    innerType: r
  });
}
function iT(n, r) {
  return new n({
    type: "nullable",
    innerType: r
  });
}
function aT(n, r, o) {
  return new n({
    type: "default",
    innerType: r,
    get defaultValue() {
      return typeof o == "function" ? o() : o;
    }
  });
}
function rT(n, r, o) {
  return new n({
    type: "nonoptional",
    innerType: r,
    ...M(o)
  });
}
function lT(n, r) {
  return new n({
    type: "success",
    innerType: r
  });
}
function oT(n, r, o) {
  return new n({
    type: "catch",
    innerType: r,
    catchValue: typeof o == "function" ? o : () => o
  });
}
function uT(n, r, o) {
  return new n({
    type: "pipe",
    in: r,
    out: o
  });
}
function cT(n, r) {
  return new n({
    type: "readonly",
    innerType: r
  });
}
function sT(n, r, o) {
  return new n({
    type: "template_literal",
    parts: r,
    ...M(o)
  });
}
function fT(n, r) {
  return new n({
    type: "lazy",
    getter: r
  });
}
function dT(n, r) {
  return new n({
    type: "promise",
    innerType: r
  });
}
function Mb(n, r, o) {
  const s = M(o);
  return s.abort ?? (s.abort = !0), new n({
    type: "custom",
    check: "custom",
    fn: r,
    ...s
  });
}
function Ib(n, r, o) {
  return new n({
    type: "custom",
    check: "custom",
    fn: r,
    ...M(o)
  });
}
function qb(n, r) {
  const o = M(r);
  let s = o.truthy ?? [
    "true",
    "1",
    "yes",
    "on",
    "y",
    "enabled"
  ], i = o.falsy ?? [
    "false",
    "0",
    "no",
    "off",
    "n",
    "disabled"
  ];
  o.case !== "sensitive" && (s = s.map(($) => typeof $ == "string" ? $.toLowerCase() : $), i = i.map(($) => typeof $ == "string" ? $.toLowerCase() : $));
  const u = new Set(s), d = new Set(i), g = n.Pipe ?? xf, j = n.Boolean ?? Ef, p = n.String ?? Cr, _ = new (n.Transform ?? Uf)({
    type: "transform",
    transform: ($, y) => {
      let R = $;
      return o.case !== "sensitive" && (R = R.toLowerCase()), u.has(R) ? !0 : d.has(R) ? !1 : (y.issues.push({
        code: "invalid_value",
        expected: "stringbool",
        values: [...u, ...d],
        input: y.value,
        inst: _
      }), {});
    },
    error: o.error
  });
  return new g({
    type: "pipe",
    in: new g({
      type: "pipe",
      in: new p({
        type: "string",
        error: o.error
      }),
      out: _,
      error: o.error
    }),
    out: new j({
      type: "boolean",
      error: o.error
    }),
    error: o.error
  });
}
function Hb(n, r, o, s = {}) {
  const i = M(s), u = {
    ...M(s),
    check: "string_format",
    type: "string",
    format: r,
    fn: typeof o == "function" ? o : (d) => o.test(d),
    ...i
  };
  return o instanceof RegExp && (u.pattern = o), new n(u);
}
var Lb = class {
  constructor(n) {
    this._def = n, this.def = n;
  }
  implement(n) {
    if (typeof n != "function") throw new Error("implement() must be called with a function");
    const r = ((...o) => {
      const s = this._def.input ? nf(this._def.input, o, void 0, { callee: r }) : o;
      if (!Array.isArray(s)) throw new Error("Invalid arguments schema: not an array or tuple schema.");
      const i = n(...s);
      return this._def.output ? nf(this._def.output, i, void 0, { callee: r }) : i;
    });
    return r;
  }
  implementAsync(n) {
    if (typeof n != "function") throw new Error("implement() must be called with a function");
    const r = (async (...o) => {
      const s = this._def.input ? await af(this._def.input, o, void 0, { callee: r }) : o;
      if (!Array.isArray(s)) throw new Error("Invalid arguments schema: not an array or tuple schema.");
      const i = await n(...s);
      return this._def.output ? af(this._def.output, i, void 0, { callee: r }) : i;
    });
    return r;
  }
  input(...n) {
    const r = this.constructor;
    return Array.isArray(n[0]) ? new r({
      type: "function",
      input: new Io({
        type: "tuple",
        items: n[0],
        rest: n[1]
      }),
      output: this._def.output
    }) : new r({
      type: "function",
      input: n[0],
      output: this._def.output
    });
  }
  output(n) {
    const r = this.constructor;
    return new r({
      type: "function",
      input: this._def.input,
      output: n
    });
  }
};
function sd(n) {
  return new Lb({
    type: "function",
    input: Array.isArray(n?.input) ? Rb(Io, n?.input) : n?.input ?? cd(Of, No(ko)),
    output: n?.output ?? No(ko)
  });
}
var lf = class {
  constructor(n) {
    this.counter = 0, this.metadataRegistry = n?.metadata ?? ai, this.target = n?.target ?? "draft-2020-12", this.unrepresentable = n?.unrepresentable ?? "throw", this.override = n?.override ?? (() => {
    }), this.io = n?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(n, r = {
    path: [],
    schemaPath: []
  }) {
    var o;
    const s = n._zod.def, i = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
    }, u = this.seen.get(n);
    if (u)
      return u.count++, r.schemaPath.includes(n) && (u.cycle = r.path), u.schema;
    const d = {
      schema: {},
      count: 1,
      cycle: void 0,
      path: r.path
    };
    this.seen.set(n, d);
    const g = n._zod.toJSONSchema?.();
    if (g) d.schema = g;
    else {
      const p = {
        ...r,
        schemaPath: [...r.schemaPath, n],
        path: r.path
      }, _ = n._zod.parent;
      if (_)
        d.ref = _, this.process(_, p), this.seen.get(_).isParent = !0;
      else {
        const $ = d.schema;
        switch (s.type) {
          case "string": {
            const y = $;
            y.type = "string";
            const { minimum: R, maximum: q, format: X, patterns: F, contentEncoding: ee } = n._zod.bag;
            if (typeof R == "number" && (y.minLength = R), typeof q == "number" && (y.maxLength = q), X && (y.format = i[X] ?? X, y.format === "" && delete y.format), ee && (y.contentEncoding = ee), F && F.size > 0) {
              const K = [...F];
              K.length === 1 ? y.pattern = K[0].source : K.length > 1 && (d.schema.allOf = [...K.map((ce) => ({
                ...this.target === "draft-7" ? { type: "string" } : {},
                pattern: ce.source
              }))]);
            }
            break;
          }
          case "number": {
            const y = $, { minimum: R, maximum: q, format: X, multipleOf: F, exclusiveMaximum: ee, exclusiveMinimum: K } = n._zod.bag;
            typeof X == "string" && X.includes("int") ? y.type = "integer" : y.type = "number", typeof K == "number" && (y.exclusiveMinimum = K), typeof R == "number" && (y.minimum = R, typeof K == "number" && (K >= R ? delete y.minimum : delete y.exclusiveMinimum)), typeof ee == "number" && (y.exclusiveMaximum = ee), typeof q == "number" && (y.maximum = q, typeof ee == "number" && (ee <= q ? delete y.maximum : delete y.exclusiveMaximum)), typeof F == "number" && (y.multipleOf = F);
            break;
          }
          case "boolean": {
            const y = $;
            y.type = "boolean";
            break;
          }
          case "bigint":
            if (this.unrepresentable === "throw") throw new Error("BigInt cannot be represented in JSON Schema");
            break;
          case "symbol":
            if (this.unrepresentable === "throw") throw new Error("Symbols cannot be represented in JSON Schema");
            break;
          case "null":
            $.type = "null";
            break;
          case "any":
            break;
          case "unknown":
            break;
          case "undefined":
            if (this.unrepresentable === "throw") throw new Error("Undefined cannot be represented in JSON Schema");
            break;
          case "void":
            if (this.unrepresentable === "throw") throw new Error("Void cannot be represented in JSON Schema");
            break;
          case "never":
            $.not = {};
            break;
          case "date":
            if (this.unrepresentable === "throw") throw new Error("Date cannot be represented in JSON Schema");
            break;
          case "array": {
            const y = $, { minimum: R, maximum: q } = n._zod.bag;
            typeof R == "number" && (y.minItems = R), typeof q == "number" && (y.maxItems = q), y.type = "array", y.items = this.process(s.element, {
              ...p,
              path: [...p.path, "items"]
            });
            break;
          }
          case "object": {
            const y = $;
            y.type = "object", y.properties = {};
            const R = s.shape;
            for (const F in R) y.properties[F] = this.process(R[F], {
              ...p,
              path: [
                ...p.path,
                "properties",
                F
              ]
            });
            const q = new Set(Object.keys(R)), X = new Set([...q].filter((F) => {
              const ee = s.shape[F]._zod;
              return this.io === "input" ? ee.optin === void 0 : ee.optout === void 0;
            }));
            X.size > 0 && (y.required = Array.from(X)), s.catchall?._zod.def.type === "never" ? y.additionalProperties = !1 : s.catchall ? s.catchall && (y.additionalProperties = this.process(s.catchall, {
              ...p,
              path: [...p.path, "additionalProperties"]
            })) : this.io === "output" && (y.additionalProperties = !1);
            break;
          }
          case "union": {
            const y = $;
            y.anyOf = s.options.map((R, q) => this.process(R, {
              ...p,
              path: [
                ...p.path,
                "anyOf",
                q
              ]
            }));
            break;
          }
          case "intersection": {
            const y = $, R = this.process(s.left, {
              ...p,
              path: [
                ...p.path,
                "allOf",
                0
              ]
            }), q = this.process(s.right, {
              ...p,
              path: [
                ...p.path,
                "allOf",
                1
              ]
            }), X = (F) => "allOf" in F && Object.keys(F).length === 1;
            y.allOf = [...X(R) ? R.allOf : [R], ...X(q) ? q.allOf : [q]];
            break;
          }
          case "tuple": {
            const y = $;
            y.type = "array";
            const R = s.items.map((F, ee) => this.process(F, {
              ...p,
              path: [
                ...p.path,
                "prefixItems",
                ee
              ]
            }));
            if (this.target === "draft-2020-12" ? y.prefixItems = R : y.items = R, s.rest) {
              const F = this.process(s.rest, {
                ...p,
                path: [...p.path, "items"]
              });
              this.target === "draft-2020-12" ? y.items = F : y.additionalItems = F;
            }
            s.rest && (y.items = this.process(s.rest, {
              ...p,
              path: [...p.path, "items"]
            }));
            const { minimum: q, maximum: X } = n._zod.bag;
            typeof q == "number" && (y.minItems = q), typeof X == "number" && (y.maxItems = X);
            break;
          }
          case "record": {
            const y = $;
            y.type = "object", y.propertyNames = this.process(s.keyType, {
              ...p,
              path: [...p.path, "propertyNames"]
            }), y.additionalProperties = this.process(s.valueType, {
              ...p,
              path: [...p.path, "additionalProperties"]
            });
            break;
          }
          case "map":
            if (this.unrepresentable === "throw") throw new Error("Map cannot be represented in JSON Schema");
            break;
          case "set":
            if (this.unrepresentable === "throw") throw new Error("Set cannot be represented in JSON Schema");
            break;
          case "enum": {
            const y = $, R = sf(s.entries);
            R.every((q) => typeof q == "number") && (y.type = "number"), R.every((q) => typeof q == "string") && (y.type = "string"), y.enum = R;
            break;
          }
          case "literal": {
            const y = $, R = [];
            for (const q of s.values) if (q === void 0) {
              if (this.unrepresentable === "throw") throw new Error("Literal `undefined` cannot be represented in JSON Schema");
            } else if (typeof q == "bigint") {
              if (this.unrepresentable === "throw") throw new Error("BigInt literals cannot be represented in JSON Schema");
              R.push(Number(q));
            } else R.push(q);
            if (R.length !== 0)
              if (R.length === 1) {
                const q = R[0];
                y.type = q === null ? "null" : typeof q, y.const = q;
              } else
                R.every((q) => typeof q == "number") && (y.type = "number"), R.every((q) => typeof q == "string") && (y.type = "string"), R.every((q) => typeof q == "boolean") && (y.type = "string"), R.every((q) => q === null) && (y.type = "null"), y.enum = R;
            break;
          }
          case "file": {
            const y = $, R = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: q, maximum: X, mime: F } = n._zod.bag;
            q !== void 0 && (R.minLength = q), X !== void 0 && (R.maxLength = X), F ? F.length === 1 ? (R.contentMediaType = F[0], Object.assign(y, R)) : y.anyOf = F.map((ee) => ({
              ...R,
              contentMediaType: ee
            })) : Object.assign(y, R);
            break;
          }
          case "transform":
            if (this.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          case "nullable":
            $.anyOf = [this.process(s.innerType, p), { type: "null" }];
            break;
          case "nonoptional":
            this.process(s.innerType, p), d.ref = s.innerType;
            break;
          case "success": {
            const y = $;
            y.type = "boolean";
            break;
          }
          case "default":
            this.process(s.innerType, p), d.ref = s.innerType, $.default = JSON.parse(JSON.stringify(s.defaultValue));
            break;
          case "prefault":
            this.process(s.innerType, p), d.ref = s.innerType, this.io === "input" && ($._prefault = JSON.parse(JSON.stringify(s.defaultValue)));
            break;
          case "catch": {
            this.process(s.innerType, p), d.ref = s.innerType;
            let y;
            try {
              y = s.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            $.default = y;
            break;
          }
          case "nan":
            if (this.unrepresentable === "throw") throw new Error("NaN cannot be represented in JSON Schema");
            break;
          case "template_literal": {
            const y = $, R = n._zod.pattern;
            if (!R) throw new Error("Pattern not found in template literal");
            y.type = "string", y.pattern = R.source;
            break;
          }
          case "pipe": {
            const y = this.io === "input" ? s.in._zod.def.type === "transform" ? s.out : s.in : s.out;
            this.process(y, p), d.ref = y;
            break;
          }
          case "readonly":
            this.process(s.innerType, p), d.ref = s.innerType, $.readOnly = !0;
            break;
          case "promise":
            this.process(s.innerType, p), d.ref = s.innerType;
            break;
          case "optional":
            this.process(s.innerType, p), d.ref = s.innerType;
            break;
          case "lazy": {
            const y = n._zod.innerType;
            this.process(y, p), d.ref = y;
            break;
          }
          case "custom":
            if (this.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
            break;
          default:
        }
      }
    }
    const j = this.metadataRegistry.get(n);
    return j && Object.assign(d.schema, j), this.io === "input" && et(n) && (delete d.schema.examples, delete d.schema.default), this.io === "input" && d.schema._prefault && ((o = d.schema).default ?? (o.default = d.schema._prefault)), delete d.schema._prefault, this.seen.get(n).schema;
  }
  emit(n, r) {
    const o = {
      cycles: r?.cycles ?? "ref",
      reused: r?.reused ?? "inline",
      external: r?.external ?? void 0
    }, s = this.seen.get(n);
    if (!s) throw new Error("Unprocessed schema. This is a bug in Zod.");
    const i = (p) => {
      const _ = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (o.external) {
        const R = o.external.registry.get(p[0])?.id, q = o.external.uri ?? ((F) => F);
        if (R) return { ref: q(R) };
        const X = p[1].defId ?? p[1].schema.id ?? `schema${this.counter++}`;
        return p[1].defId = X, {
          defId: X,
          ref: `${q("__shared")}#/${_}/${X}`
        };
      }
      if (p[1] === s) return { ref: "#" };
      const $ = `#/${_}/`, y = p[1].schema.id ?? `__schema${this.counter++}`;
      return {
        defId: y,
        ref: $ + y
      };
    }, u = (p) => {
      if (p[1].schema.$ref) return;
      const _ = p[1], { ref: $, defId: y } = i(p);
      _.def = { ..._.schema }, y && (_.defId = y);
      const R = _.schema;
      for (const q in R) delete R[q];
      R.$ref = $;
    };
    if (o.cycles === "throw") for (const p of this.seen.entries()) {
      const _ = p[1];
      if (_.cycle) throw new Error(`Cycle detected: #/${_.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
    for (const p of this.seen.entries()) {
      const _ = p[1];
      if (n === p[0]) {
        u(p);
        continue;
      }
      if (o.external) {
        const $ = o.external.registry.get(p[0])?.id;
        if (n !== p[0] && $) {
          u(p);
          continue;
        }
      }
      if (this.metadataRegistry.get(p[0])?.id) {
        u(p);
        continue;
      }
      if (_.cycle) {
        u(p);
        continue;
      }
      if (_.count > 1 && o.reused === "ref") {
        u(p);
        continue;
      }
    }
    const d = (p, _) => {
      const $ = this.seen.get(p), y = $.def ?? $.schema, R = { ...y };
      if ($.ref === null) return;
      const q = $.ref;
      if ($.ref = null, q) {
        d(q, _);
        const X = this.seen.get(q).schema;
        X.$ref && _.target === "draft-7" ? (y.allOf = y.allOf ?? [], y.allOf.push(X)) : (Object.assign(y, X), Object.assign(y, R));
      }
      $.isParent || this.override({
        zodSchema: p,
        jsonSchema: y,
        path: $.path ?? []
      });
    };
    for (const p of [...this.seen.entries()].reverse()) d(p[0], { target: this.target });
    const g = {};
    if (this.target === "draft-2020-12" ? g.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? g.$schema = "http://json-schema.org/draft-07/schema#" : console.warn(`Invalid target: ${this.target}`), o.external?.uri) {
      const p = o.external.registry.get(n)?.id;
      if (!p) throw new Error("Schema is missing an `id` property");
      g.$id = o.external.uri(p);
    }
    Object.assign(g, s.def);
    const j = o.external?.defs ?? {};
    for (const p of this.seen.entries()) {
      const _ = p[1];
      _.def && _.defId && (j[_.defId] = _.def);
    }
    o.external || Object.keys(j).length > 0 && (this.target === "draft-2020-12" ? g.$defs = j : g.definitions = j);
    try {
      return JSON.parse(JSON.stringify(g));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
};
function fd(n, r) {
  if (n instanceof Zf) {
    const s = new lf(r), i = {};
    for (const g of n._idmap.entries()) {
      const [j, p] = g;
      s.process(p);
    }
    const u = {}, d = {
      registry: n,
      uri: r?.uri,
      defs: i
    };
    for (const g of n._idmap.entries()) {
      const [j, p] = g;
      u[j] = s.emit(p, {
        ...r,
        external: d
      });
    }
    return Object.keys(i).length > 0 && (u.__shared = { [s.target === "draft-2020-12" ? "$defs" : "definitions"]: i }), { schemas: u };
  }
  const o = new lf(r);
  return o.process(n), o.emit(n, r);
}
function et(n, r) {
  const o = r ?? { seen: /* @__PURE__ */ new Set() };
  if (o.seen.has(n)) return !1;
  o.seen.add(n);
  const s = n._zod.def;
  switch (s.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
      return !1;
    case "array":
      return et(s.element, o);
    case "object":
      for (const i in s.shape) if (et(s.shape[i], o)) return !0;
      return !1;
    case "union":
      for (const i of s.options) if (et(i, o)) return !0;
      return !1;
    case "intersection":
      return et(s.left, o) || et(s.right, o);
    case "tuple":
      for (const i of s.items) if (et(i, o)) return !0;
      return !!(s.rest && et(s.rest, o));
    case "record":
      return et(s.keyType, o) || et(s.valueType, o);
    case "map":
      return et(s.keyType, o) || et(s.valueType, o);
    case "set":
      return et(s.valueType, o);
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return et(s.innerType, o);
    case "lazy":
      return et(s.getter(), o);
    case "default":
      return et(s.innerType, o);
    case "prefault":
      return et(s.innerType, o);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return et(s.in, o) || et(s.out, o);
    case "success":
      return !1;
    case "catch":
      return !1;
    default:
  }
  throw new Error(`Unknown schema type: ${s.type}`);
}
var mT = /* @__PURE__ */ An({}), Bb = /* @__PURE__ */ An({
  $ZodAny: () => Z_,
  $ZodArray: () => Of,
  $ZodAsyncError: () => Ta,
  $ZodBase64: () => z_,
  $ZodBase64URL: () => w_,
  $ZodBigInt: () => kf,
  $ZodBigIntFormat: () => x_,
  $ZodBoolean: () => Ef,
  $ZodCIDRv4: () => S_,
  $ZodCIDRv6: () => $_,
  $ZodCUID: () => s_,
  $ZodCUID2: () => f_,
  $ZodCatch: () => eb,
  $ZodCheck: () => Je,
  $ZodCheckBigIntFormat: () => qy,
  $ZodCheckEndsWith: () => Fy,
  $ZodCheckGreaterThan: () => zf,
  $ZodCheckIncludes: () => Ky,
  $ZodCheckLengthEquals: () => Qy,
  $ZodCheckLessThan: () => $f,
  $ZodCheckLowerCase: () => Jy,
  $ZodCheckMaxLength: () => Gy,
  $ZodCheckMaxSize: () => Hy,
  $ZodCheckMimeType: () => e_,
  $ZodCheckMinLength: () => Yy,
  $ZodCheckMinSize: () => Ly,
  $ZodCheckMultipleOf: () => My,
  $ZodCheckNumberFormat: () => Iy,
  $ZodCheckOverwrite: () => t_,
  $ZodCheckProperty: () => Wy,
  $ZodCheckRegex: () => Vy,
  $ZodCheckSizeEquals: () => By,
  $ZodCheckStartsWith: () => Py,
  $ZodCheckStringFormat: () => Rr,
  $ZodCheckUpperCase: () => Xy,
  $ZodCustom: () => lb,
  $ZodCustomStringFormat: () => N_,
  $ZodDate: () => M_,
  $ZodDefault: () => K_,
  $ZodDiscriminatedUnion: () => q_,
  $ZodE164: () => E_,
  $ZodEmail: () => l_,
  $ZodEmoji: () => u_,
  $ZodEnum: () => Y_,
  $ZodError: () => df,
  $ZodFile: () => V_,
  $ZodFunction: () => Lb,
  $ZodGUID: () => a_,
  $ZodIPv4: () => __,
  $ZodIPv6: () => b_,
  $ZodISODate: () => h_,
  $ZodISODateTime: () => p_,
  $ZodISODuration: () => y_,
  $ZodISOTime: () => g_,
  $ZodIntersection: () => H_,
  $ZodJWT: () => O_,
  $ZodKSUID: () => v_,
  $ZodLazy: () => rb,
  $ZodLiteral: () => Q_,
  $ZodMap: () => B_,
  $ZodNaN: () => tb,
  $ZodNanoID: () => c_,
  $ZodNever: () => R_,
  $ZodNonOptional: () => F_,
  $ZodNull: () => A_,
  $ZodNullable: () => X_,
  $ZodNumber: () => wf,
  $ZodNumberFormat: () => U_,
  $ZodObject: () => I_,
  $ZodOptional: () => J_,
  $ZodPipe: () => xf,
  $ZodPrefault: () => P_,
  $ZodPromise: () => ab,
  $ZodReadonly: () => nb,
  $ZodRealError: () => Zr,
  $ZodRecord: () => L_,
  $ZodRegistry: () => Zf,
  $ZodSet: () => G_,
  $ZodString: () => Cr,
  $ZodStringFormat: () => Ce,
  $ZodSuccess: () => W_,
  $ZodSymbol: () => j_,
  $ZodTemplateLiteral: () => ib,
  $ZodTransform: () => Uf,
  $ZodTuple: () => Io,
  $ZodType: () => te,
  $ZodULID: () => d_,
  $ZodURL: () => o_,
  $ZodUUID: () => r_,
  $ZodUndefined: () => D_,
  $ZodUnion: () => Nf,
  $ZodUnknown: () => ko,
  $ZodVoid: () => C_,
  $ZodXID: () => m_,
  $brand: () => cf,
  $constructor: () => w,
  $input: () => Af,
  $output: () => Df,
  Doc: () => n_,
  JSONSchema: () => mT,
  JSONSchemaGenerator: () => lf,
  NEVER: () => uf,
  TimePrecision: () => id,
  _any: () => Ub,
  _array: () => cd,
  _base64: () => Wf,
  _base64url: () => ed,
  _bigint: () => zb,
  _boolean: () => Sb,
  _catch: () => oT,
  _cidrv4: () => Pf,
  _cidrv6: () => Ff,
  _coercedBigint: () => Tb,
  _coercedBoolean: () => $b,
  _coercedDate: () => Ab,
  _coercedNumber: () => pb,
  _coercedString: () => cb,
  _cuid: () => Gf,
  _cuid2: () => Yf,
  _custom: () => Mb,
  _date: () => Db,
  _default: () => aT,
  _discriminatedUnion: () => V4,
  _e164: () => td,
  _email: () => Rf,
  _emoji: () => Lf,
  _endsWith: () => Vo,
  _enum: () => F4,
  _file: () => Cb,
  _float32: () => gb,
  _float64: () => yb,
  _gt: () => li,
  _gte: () => kt,
  _guid: () => Oo,
  _includes: () => Yo,
  _int: () => hb,
  _int32: () => _b,
  _int64: () => wb,
  _intersection: () => J4,
  _ipv4: () => Xf,
  _ipv6: () => Kf,
  _isoDate: () => fb,
  _isoDateTime: () => sb,
  _isoDuration: () => mb,
  _isoTime: () => db,
  _jwt: () => nd,
  _ksuid: () => Jf,
  _lazy: () => fT,
  _length: () => qr,
  _literal: () => eT,
  _lowercase: () => Bo,
  _lt: () => ri,
  _lte: () => Ft,
  _map: () => K4,
  _max: () => Ft,
  _maxLength: () => Ir,
  _maxSize: () => Mr,
  _mime: () => Jo,
  _min: () => kt,
  _minLength: () => ji,
  _minSize: () => Oa,
  _multipleOf: () => ka,
  _nan: () => Zb,
  _nanoid: () => Bf,
  _nativeEnum: () => W4,
  _negative: () => rd,
  _never: () => xb,
  _nonnegative: () => od,
  _nonoptional: () => rT,
  _nonpositive: () => ld,
  _normalize: () => Xo,
  _null: () => Nb,
  _nullable: () => iT,
  _number: () => vb,
  _optional: () => nT,
  _overwrite: () => oi,
  _parse: () => pf,
  _parseAsync: () => hf,
  _pipe: () => uT,
  _positive: () => ad,
  _promise: () => dT,
  _property: () => ud,
  _readonly: () => cT,
  _record: () => X4,
  _refine: () => Ib,
  _regex: () => Lo,
  _safeParse: () => gf,
  _safeParseAsync: () => _f,
  _set: () => P4,
  _size: () => Ho,
  _startsWith: () => Qo,
  _string: () => ub,
  _stringFormat: () => Hb,
  _stringbool: () => qb,
  _success: () => lT,
  _symbol: () => kb,
  _templateLiteral: () => sT,
  _toLowerCase: () => Po,
  _toUpperCase: () => Fo,
  _transform: () => tT,
  _trim: () => Ko,
  _tuple: () => Rb,
  _uint32: () => bb,
  _uint64: () => Eb,
  _ulid: () => Qf,
  _undefined: () => Ob,
  _union: () => Q4,
  _unknown: () => No,
  _uppercase: () => Go,
  _url: () => Hf,
  _uuid: () => Cf,
  _uuidv4: () => Mf,
  _uuidv6: () => If,
  _uuidv7: () => qf,
  _void: () => jb,
  _xid: () => Vf,
  clone: () => on,
  config: () => ft,
  flattenError: () => Co,
  formatError: () => Mo,
  function: () => sd,
  globalConfig: () => wo,
  globalRegistry: () => ai,
  isValidBase64: () => Tf,
  isValidBase64URL: () => T_,
  isValidJWT: () => k_,
  locales: () => jf,
  parse: () => nf,
  parseAsync: () => af,
  prettifyError: () => vf,
  regexes: () => bf,
  registry: () => qo,
  safeParse: () => yf,
  safeParseAsync: () => ay,
  toDotPath: () => iy,
  toJSONSchema: () => fd,
  treeifyError: () => mf,
  util: () => P1,
  version: () => i_
});
function dd(n) {
  return !!n._zod;
}
function Gb(n, r) {
  return dd(n) ? yf(n, r) : n.safeParse(r);
}
function vT(n) {
  if (!n) return;
  let r;
  if (dd(n) ? r = n._zod?.def?.shape : r = n.shape, !!r) {
    if (typeof r == "function") try {
      return r();
    } catch {
      return;
    }
    return r;
  }
}
function pT(n) {
  if (dd(n)) {
    const s = n._zod?.def;
    if (s) {
      if (s.value !== void 0) return s.value;
      if (Array.isArray(s.values) && s.values.length > 0) return s.values[0];
    }
  }
  const r = n._def;
  if (r) {
    if (r.value !== void 0) return r.value;
    if (Array.isArray(r.values) && r.values.length > 0) return r.values[0];
  }
  const o = n.value;
  if (o !== void 0) return o;
}
var Yb = /* @__PURE__ */ An({
  ZodISODate: () => eu,
  ZodISODateTime: () => Wo,
  ZodISODuration: () => nu,
  ZodISOTime: () => tu,
  date: () => Qb,
  datetime: () => md,
  duration: () => Jb,
  time: () => Vb
}), Wo = /* @__PURE__ */ w("ZodISODateTime", (n, r) => {
  p_.init(n, r), Me.init(n, r);
});
function md(n) {
  return sb(Wo, n);
}
var eu = /* @__PURE__ */ w("ZodISODate", (n, r) => {
  h_.init(n, r), Me.init(n, r);
});
function Qb(n) {
  return fb(eu, n);
}
var tu = /* @__PURE__ */ w("ZodISOTime", (n, r) => {
  g_.init(n, r), Me.init(n, r);
});
function Vb(n) {
  return db(tu, n);
}
var nu = /* @__PURE__ */ w("ZodISODuration", (n, r) => {
  y_.init(n, r), Me.init(n, r);
});
function Jb(n) {
  return mb(nu, n);
}
var Xb = (n, r) => {
  df.init(n, r), n.name = "ZodError", Object.defineProperties(n, {
    format: { value: (o) => Mo(n, o) },
    flatten: { value: (o) => Co(n, o) },
    addIssue: { value: (o) => n.issues.push(o) },
    addIssues: { value: (o) => n.issues.push(...o) },
    isEmpty: { get() {
      return n.issues.length === 0;
    } }
  });
}, Kb = w("ZodError", Xb), ja = w("ZodError", Xb, { Parent: Error }), vd = /* @__PURE__ */ pf(ja), pd = /* @__PURE__ */ hf(ja), hd = /* @__PURE__ */ gf(ja), gd = /* @__PURE__ */ _f(ja), le = /* @__PURE__ */ w("ZodType", (n, r) => (te.init(n, r), n.def = r, Object.defineProperty(n, "_def", { value: r }), n.check = (...o) => n.clone({
  ...r,
  checks: [...r.checks ?? [], ...o.map((s) => typeof s == "function" ? { _zod: {
    check: s,
    def: { check: "custom" },
    onattach: []
  } } : s)]
}), n.clone = (o, s) => on(n, o, s), n.brand = () => n, n.register = ((o, s) => (o.add(n, s), n)), n.parse = (o, s) => vd(n, o, s, { callee: n.parse }), n.safeParse = (o, s) => hd(n, o, s), n.parseAsync = async (o, s) => pd(n, o, s, { callee: n.parseAsync }), n.safeParseAsync = async (o, s) => gd(n, o, s), n.spa = n.safeParseAsync, n.refine = (o, s) => n.check(Fd(o, s)), n.superRefine = (o) => n.check(Wd(o)), n.overwrite = (o) => n.check(oi(o)), n.optional = () => Re(n), n.nullable = () => jr(n), n.nullish = () => Re(jr(n)), n.nonoptional = (o) => Id(n, o), n.array = () => W(n), n.or = (o) => oe([n, o]), n.and = (o) => Qr(n, o), n.transform = (o) => Dr(n, Ou(o)), n.default = (o) => Rd(n, o), n.prefault = (o) => Md(n, o), n.catch = (o) => Ld(n, o), n.pipe = (o) => Dr(n, o), n.readonly = () => Yd(n), n.describe = (o) => {
  const s = n.clone();
  return ai.add(s, { description: o }), s;
}, Object.defineProperty(n, "description", {
  get() {
    return ai.get(n)?.description;
  },
  configurable: !0
}), n.meta = (...o) => {
  if (o.length === 0) return ai.get(n);
  const s = n.clone();
  return ai.add(s, o[0]), s;
}, n.isOptional = () => n.safeParse(void 0).success, n.isNullable = () => n.safeParse(null).success, n)), iu = /* @__PURE__ */ w("_ZodString", (n, r) => {
  Cr.init(n, r), le.init(n, r);
  const o = n._zod.bag;
  n.format = o.format ?? null, n.minLength = o.minimum ?? null, n.maxLength = o.maximum ?? null, n.regex = (...s) => n.check(Lo(...s)), n.includes = (...s) => n.check(Yo(...s)), n.startsWith = (...s) => n.check(Qo(...s)), n.endsWith = (...s) => n.check(Vo(...s)), n.min = (...s) => n.check(ji(...s)), n.max = (...s) => n.check(Ir(...s)), n.length = (...s) => n.check(qr(...s)), n.nonempty = (...s) => n.check(ji(1, ...s)), n.lowercase = (s) => n.check(Bo(s)), n.uppercase = (s) => n.check(Go(s)), n.trim = () => n.check(Ko()), n.normalize = (...s) => n.check(Xo(...s)), n.toLowerCase = () => n.check(Po()), n.toUpperCase = () => n.check(Fo());
}), Hr = /* @__PURE__ */ w("ZodString", (n, r) => {
  Cr.init(n, r), iu.init(n, r), n.email = (o) => n.check(Rf(au, o)), n.url = (o) => n.check(Hf(ru, o)), n.jwt = (o) => n.check(nd(bu, o)), n.emoji = (o) => n.check(Lf(lu, o)), n.guid = (o) => n.check(Oo(Ur, o)), n.uuid = (o) => n.check(Cf(mn, o)), n.uuidv4 = (o) => n.check(Mf(mn, o)), n.uuidv6 = (o) => n.check(If(mn, o)), n.uuidv7 = (o) => n.check(qf(mn, o)), n.nanoid = (o) => n.check(Bf(ou, o)), n.guid = (o) => n.check(Oo(Ur, o)), n.cuid = (o) => n.check(Gf(uu, o)), n.cuid2 = (o) => n.check(Yf(cu, o)), n.ulid = (o) => n.check(Qf(su, o)), n.base64 = (o) => n.check(Wf(gu, o)), n.base64url = (o) => n.check(ed(yu, o)), n.xid = (o) => n.check(Vf(fu, o)), n.ksuid = (o) => n.check(Jf(du, o)), n.ipv4 = (o) => n.check(Xf(mu, o)), n.ipv6 = (o) => n.check(Kf(vu, o)), n.cidrv4 = (o) => n.check(Pf(pu, o)), n.cidrv6 = (o) => n.check(Ff(hu, o)), n.e164 = (o) => n.check(td(_u, o)), n.datetime = (o) => n.check(md(o)), n.date = (o) => n.check(Qb(o)), n.time = (o) => n.check(Vb(o)), n.duration = (o) => n.check(Jb(o));
});
function E(n) {
  return ub(Hr, n);
}
var Me = /* @__PURE__ */ w("ZodStringFormat", (n, r) => {
  Ce.init(n, r), iu.init(n, r);
}), au = /* @__PURE__ */ w("ZodEmail", (n, r) => {
  l_.init(n, r), Me.init(n, r);
});
function Pb(n) {
  return Rf(au, n);
}
var Ur = /* @__PURE__ */ w("ZodGUID", (n, r) => {
  a_.init(n, r), Me.init(n, r);
});
function Fb(n) {
  return Oo(Ur, n);
}
var mn = /* @__PURE__ */ w("ZodUUID", (n, r) => {
  r_.init(n, r), Me.init(n, r);
});
function Wb(n) {
  return Cf(mn, n);
}
function eS(n) {
  return Mf(mn, n);
}
function tS(n) {
  return If(mn, n);
}
function nS(n) {
  return qf(mn, n);
}
var ru = /* @__PURE__ */ w("ZodURL", (n, r) => {
  o_.init(n, r), Me.init(n, r);
});
function iS(n) {
  return Hf(ru, n);
}
var lu = /* @__PURE__ */ w("ZodEmoji", (n, r) => {
  u_.init(n, r), Me.init(n, r);
});
function aS(n) {
  return Lf(lu, n);
}
var ou = /* @__PURE__ */ w("ZodNanoID", (n, r) => {
  c_.init(n, r), Me.init(n, r);
});
function rS(n) {
  return Bf(ou, n);
}
var uu = /* @__PURE__ */ w("ZodCUID", (n, r) => {
  s_.init(n, r), Me.init(n, r);
});
function lS(n) {
  return Gf(uu, n);
}
var cu = /* @__PURE__ */ w("ZodCUID2", (n, r) => {
  f_.init(n, r), Me.init(n, r);
});
function oS(n) {
  return Yf(cu, n);
}
var su = /* @__PURE__ */ w("ZodULID", (n, r) => {
  d_.init(n, r), Me.init(n, r);
});
function uS(n) {
  return Qf(su, n);
}
var fu = /* @__PURE__ */ w("ZodXID", (n, r) => {
  m_.init(n, r), Me.init(n, r);
});
function cS(n) {
  return Vf(fu, n);
}
var du = /* @__PURE__ */ w("ZodKSUID", (n, r) => {
  v_.init(n, r), Me.init(n, r);
});
function sS(n) {
  return Jf(du, n);
}
var mu = /* @__PURE__ */ w("ZodIPv4", (n, r) => {
  __.init(n, r), Me.init(n, r);
});
function fS(n) {
  return Xf(mu, n);
}
var vu = /* @__PURE__ */ w("ZodIPv6", (n, r) => {
  b_.init(n, r), Me.init(n, r);
});
function dS(n) {
  return Kf(vu, n);
}
var pu = /* @__PURE__ */ w("ZodCIDRv4", (n, r) => {
  S_.init(n, r), Me.init(n, r);
});
function mS(n) {
  return Pf(pu, n);
}
var hu = /* @__PURE__ */ w("ZodCIDRv6", (n, r) => {
  $_.init(n, r), Me.init(n, r);
});
function vS(n) {
  return Ff(hu, n);
}
var gu = /* @__PURE__ */ w("ZodBase64", (n, r) => {
  z_.init(n, r), Me.init(n, r);
});
function pS(n) {
  return Wf(gu, n);
}
var yu = /* @__PURE__ */ w("ZodBase64URL", (n, r) => {
  w_.init(n, r), Me.init(n, r);
});
function hS(n) {
  return ed(yu, n);
}
var _u = /* @__PURE__ */ w("ZodE164", (n, r) => {
  E_.init(n, r), Me.init(n, r);
});
function gS(n) {
  return td(_u, n);
}
var bu = /* @__PURE__ */ w("ZodJWT", (n, r) => {
  O_.init(n, r), Me.init(n, r);
});
function yS(n) {
  return nd(bu, n);
}
var yd = /* @__PURE__ */ w("ZodCustomStringFormat", (n, r) => {
  N_.init(n, r), Me.init(n, r);
});
function _S(n, r, o = {}) {
  return Hb(yd, n, r, o);
}
var Lr = /* @__PURE__ */ w("ZodNumber", (n, r) => {
  wf.init(n, r), le.init(n, r), n.gt = (s, i) => n.check(li(s, i)), n.gte = (s, i) => n.check(kt(s, i)), n.min = (s, i) => n.check(kt(s, i)), n.lt = (s, i) => n.check(ri(s, i)), n.lte = (s, i) => n.check(Ft(s, i)), n.max = (s, i) => n.check(Ft(s, i)), n.int = (s) => n.check(Uo(s)), n.safe = (s) => n.check(Uo(s)), n.positive = (s) => n.check(li(0, s)), n.nonnegative = (s) => n.check(kt(0, s)), n.negative = (s) => n.check(ri(0, s)), n.nonpositive = (s) => n.check(Ft(0, s)), n.multipleOf = (s, i) => n.check(ka(s, i)), n.step = (s, i) => n.check(ka(s, i)), n.finite = () => n;
  const o = n._zod.bag;
  n.minValue = Math.max(o.minimum ?? Number.NEGATIVE_INFINITY, o.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(o.maximum ?? Number.POSITIVE_INFINITY, o.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (o.format ?? "").includes("int") || Number.isSafeInteger(o.multipleOf ?? 0.5), n.isFinite = !0, n.format = o.format ?? null;
});
function ie(n) {
  return vb(Lr, n);
}
var Ri = /* @__PURE__ */ w("ZodNumberFormat", (n, r) => {
  U_.init(n, r), Lr.init(n, r);
});
function Uo(n) {
  return hb(Ri, n);
}
function bS(n) {
  return gb(Ri, n);
}
function SS(n) {
  return yb(Ri, n);
}
function $S(n) {
  return _b(Ri, n);
}
function zS(n) {
  return bb(Ri, n);
}
var Br = /* @__PURE__ */ w("ZodBoolean", (n, r) => {
  Ef.init(n, r), le.init(n, r);
});
function Ne(n) {
  return Sb(Br, n);
}
var Gr = /* @__PURE__ */ w("ZodBigInt", (n, r) => {
  kf.init(n, r), le.init(n, r), n.gte = (s, i) => n.check(kt(s, i)), n.min = (s, i) => n.check(kt(s, i)), n.gt = (s, i) => n.check(li(s, i)), n.gte = (s, i) => n.check(kt(s, i)), n.min = (s, i) => n.check(kt(s, i)), n.lt = (s, i) => n.check(ri(s, i)), n.lte = (s, i) => n.check(Ft(s, i)), n.max = (s, i) => n.check(Ft(s, i)), n.positive = (s) => n.check(li(BigInt(0), s)), n.negative = (s) => n.check(ri(BigInt(0), s)), n.nonpositive = (s) => n.check(Ft(BigInt(0), s)), n.nonnegative = (s) => n.check(kt(BigInt(0), s)), n.multipleOf = (s, i) => n.check(ka(s, i));
  const o = n._zod.bag;
  n.minValue = o.minimum ?? null, n.maxValue = o.maximum ?? null, n.format = o.format ?? null;
});
function TS(n) {
  return zb(Gr, n);
}
var Su = /* @__PURE__ */ w("ZodBigIntFormat", (n, r) => {
  x_.init(n, r), Gr.init(n, r);
});
function wS(n) {
  return wb(Su, n);
}
function ES(n) {
  return Eb(Su, n);
}
var _d = /* @__PURE__ */ w("ZodSymbol", (n, r) => {
  j_.init(n, r), le.init(n, r);
});
function kS(n) {
  return kb(_d, n);
}
var bd = /* @__PURE__ */ w("ZodUndefined", (n, r) => {
  D_.init(n, r), le.init(n, r);
});
function xr(n) {
  return Ob(bd, n);
}
var Sd = /* @__PURE__ */ w("ZodNull", (n, r) => {
  A_.init(n, r), le.init(n, r);
});
function $u(n) {
  return Nb(Sd, n);
}
var $d = /* @__PURE__ */ w("ZodAny", (n, r) => {
  Z_.init(n, r), le.init(n, r);
});
function OS() {
  return Ub($d);
}
var zd = /* @__PURE__ */ w("ZodUnknown", (n, r) => {
  ko.init(n, r), le.init(n, r);
});
function Ue() {
  return No(zd);
}
var Td = /* @__PURE__ */ w("ZodNever", (n, r) => {
  R_.init(n, r), le.init(n, r);
});
function Di(n) {
  return xb(Td, n);
}
var wd = /* @__PURE__ */ w("ZodVoid", (n, r) => {
  C_.init(n, r), le.init(n, r);
});
function NS(n) {
  return jb(wd, n);
}
var zu = /* @__PURE__ */ w("ZodDate", (n, r) => {
  M_.init(n, r), le.init(n, r), n.min = (s, i) => n.check(kt(s, i)), n.max = (s, i) => n.check(Ft(s, i));
  const o = n._zod.bag;
  n.minDate = o.minimum ? new Date(o.minimum) : null, n.maxDate = o.maximum ? new Date(o.maximum) : null;
});
function US(n) {
  return Db(zu, n);
}
var Ed = /* @__PURE__ */ w("ZodArray", (n, r) => {
  Of.init(n, r), le.init(n, r), n.element = r.element, n.min = (o, s) => n.check(ji(o, s)), n.nonempty = (o) => n.check(ji(1, o)), n.max = (o, s) => n.check(Ir(o, s)), n.length = (o, s) => n.check(qr(o, s)), n.unwrap = () => n.element;
});
function W(n, r) {
  return cd(Ed, n, r);
}
function xS(n) {
  const r = n._zod.def.shape;
  return T(Object.keys(r));
}
var Yr = /* @__PURE__ */ w("ZodObject", (n, r) => {
  I_.init(n, r), le.init(n, r), Te(n, "shape", () => r.shape), n.keyof = () => yt(Object.keys(n._zod.def.shape)), n.catchall = (o) => n.clone({
    ...n._zod.def,
    catchall: o
  }), n.passthrough = () => n.clone({
    ...n._zod.def,
    catchall: Ue()
  }), n.loose = () => n.clone({
    ...n._zod.def,
    catchall: Ue()
  }), n.strict = () => n.clone({
    ...n._zod.def,
    catchall: Di()
  }), n.strip = () => n.clone({
    ...n._zod.def,
    catchall: void 0
  }), n.extend = (o) => Fg(n, o), n.merge = (o) => Wg(n, o), n.pick = (o) => Kg(n, o), n.omit = (o) => Pg(n, o), n.partial = (...o) => ey(Nu, n, o[0]), n.required = (...o) => ty(Uu, n, o[0]);
});
function U(n, r) {
  return new Yr({
    type: "object",
    get shape() {
      return xa(this, "shape", { ...n }), this.shape;
    },
    ...M(r)
  });
}
function jS(n, r) {
  return new Yr({
    type: "object",
    get shape() {
      return xa(this, "shape", { ...n }), this.shape;
    },
    catchall: Di(),
    ...M(r)
  });
}
function pt(n, r) {
  return new Yr({
    type: "object",
    get shape() {
      return xa(this, "shape", { ...n }), this.shape;
    },
    catchall: Ue(),
    ...M(r)
  });
}
var Tu = /* @__PURE__ */ w("ZodUnion", (n, r) => {
  Nf.init(n, r), le.init(n, r), n.options = r.options;
});
function oe(n, r) {
  return new Tu({
    type: "union",
    options: n,
    ...M(r)
  });
}
var kd = /* @__PURE__ */ w("ZodDiscriminatedUnion", (n, r) => {
  Tu.init(n, r), q_.init(n, r);
});
function wu(n, r, o) {
  return new kd({
    type: "union",
    options: r,
    discriminator: n,
    ...M(o)
  });
}
var Od = /* @__PURE__ */ w("ZodIntersection", (n, r) => {
  H_.init(n, r), le.init(n, r);
});
function Qr(n, r) {
  return new Od({
    type: "intersection",
    left: n,
    right: r
  });
}
var Nd = /* @__PURE__ */ w("ZodTuple", (n, r) => {
  Io.init(n, r), le.init(n, r), n.rest = (o) => n.clone({
    ...n._zod.def,
    rest: o
  });
});
function DS(n, r, o) {
  const s = r instanceof te, i = s ? o : r;
  return new Nd({
    type: "tuple",
    items: n,
    rest: s ? r : null,
    ...M(i)
  });
}
var Eu = /* @__PURE__ */ w("ZodRecord", (n, r) => {
  L_.init(n, r), le.init(n, r), n.keyType = r.keyType, n.valueType = r.valueType;
});
function ye(n, r, o) {
  return new Eu({
    type: "record",
    keyType: n,
    valueType: r,
    ...M(o)
  });
}
function AS(n, r, o) {
  return new Eu({
    type: "record",
    keyType: oe([n, Di()]),
    valueType: r,
    ...M(o)
  });
}
var Ud = /* @__PURE__ */ w("ZodMap", (n, r) => {
  B_.init(n, r), le.init(n, r), n.keyType = r.keyType, n.valueType = r.valueType;
});
function ZS(n, r, o) {
  return new Ud({
    type: "map",
    keyType: n,
    valueType: r,
    ...M(o)
  });
}
var xd = /* @__PURE__ */ w("ZodSet", (n, r) => {
  G_.init(n, r), le.init(n, r), n.min = (...o) => n.check(Oa(...o)), n.nonempty = (o) => n.check(Oa(1, o)), n.max = (...o) => n.check(Mr(...o)), n.size = (...o) => n.check(Ho(...o));
});
function RS(n, r) {
  return new xd({
    type: "set",
    valueType: n,
    ...M(r)
  });
}
var Na = /* @__PURE__ */ w("ZodEnum", (n, r) => {
  Y_.init(n, r), le.init(n, r), n.enum = r.entries, n.options = Object.values(r.entries);
  const o = new Set(Object.keys(r.entries));
  n.extract = (s, i) => {
    const u = {};
    for (const d of s) if (o.has(d)) u[d] = r.entries[d];
    else throw new Error(`Key ${d} not found in enum`);
    return new Na({
      ...r,
      checks: [],
      ...M(i),
      entries: u
    });
  }, n.exclude = (s, i) => {
    const u = { ...r.entries };
    for (const d of s) if (o.has(d)) delete u[d];
    else throw new Error(`Key ${d} not found in enum`);
    return new Na({
      ...r,
      checks: [],
      ...M(i),
      entries: u
    });
  };
});
function yt(n, r) {
  return new Na({
    type: "enum",
    entries: Array.isArray(n) ? Object.fromEntries(n.map((o) => [o, o])) : n,
    ...M(r)
  });
}
function CS(n, r) {
  return new Na({
    type: "enum",
    entries: n,
    ...M(r)
  });
}
var jd = /* @__PURE__ */ w("ZodLiteral", (n, r) => {
  Q_.init(n, r), le.init(n, r), n.values = new Set(r.values), Object.defineProperty(n, "value", { get() {
    if (r.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
    return r.values[0];
  } });
});
function T(n, r) {
  return new jd({
    type: "literal",
    values: Array.isArray(n) ? n : [n],
    ...M(r)
  });
}
var Dd = /* @__PURE__ */ w("ZodFile", (n, r) => {
  V_.init(n, r), le.init(n, r), n.min = (o, s) => n.check(Oa(o, s)), n.max = (o, s) => n.check(Mr(o, s)), n.mime = (o, s) => n.check(Jo(Array.isArray(o) ? o : [o], s));
});
function MS(n) {
  return Cb(Dd, n);
}
var ku = /* @__PURE__ */ w("ZodTransform", (n, r) => {
  Uf.init(n, r), le.init(n, r), n._zod.parse = (o, s) => {
    o.addIssue = (u) => {
      if (typeof u == "string") o.issues.push(wa(u, o.value, r));
      else {
        const d = u;
        d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = o.value), d.inst ?? (d.inst = n), d.continue ?? (d.continue = !0), o.issues.push(wa(d));
      }
    };
    const i = r.transform(o.value, o);
    return i instanceof Promise ? i.then((u) => (o.value = u, o)) : (o.value = i, o);
  };
});
function Ou(n) {
  return new ku({
    type: "transform",
    transform: n
  });
}
var Nu = /* @__PURE__ */ w("ZodOptional", (n, r) => {
  J_.init(n, r), le.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Re(n) {
  return new Nu({
    type: "optional",
    innerType: n
  });
}
var Ad = /* @__PURE__ */ w("ZodNullable", (n, r) => {
  X_.init(n, r), le.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function jr(n) {
  return new Ad({
    type: "nullable",
    innerType: n
  });
}
function IS(n) {
  return Re(jr(n));
}
var Zd = /* @__PURE__ */ w("ZodDefault", (n, r) => {
  K_.init(n, r), le.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function Rd(n, r) {
  return new Zd({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : r;
    }
  });
}
var Cd = /* @__PURE__ */ w("ZodPrefault", (n, r) => {
  P_.init(n, r), le.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Md(n, r) {
  return new Cd({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : r;
    }
  });
}
var Uu = /* @__PURE__ */ w("ZodNonOptional", (n, r) => {
  F_.init(n, r), le.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Id(n, r) {
  return new Uu({
    type: "nonoptional",
    innerType: n,
    ...M(r)
  });
}
var qd = /* @__PURE__ */ w("ZodSuccess", (n, r) => {
  W_.init(n, r), le.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function qS(n) {
  return new qd({
    type: "success",
    innerType: n
  });
}
var Hd = /* @__PURE__ */ w("ZodCatch", (n, r) => {
  eb.init(n, r), le.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function Ld(n, r) {
  return new Hd({
    type: "catch",
    innerType: n,
    catchValue: typeof r == "function" ? r : () => r
  });
}
var Bd = /* @__PURE__ */ w("ZodNaN", (n, r) => {
  tb.init(n, r), le.init(n, r);
});
function HS(n) {
  return Zb(Bd, n);
}
var xu = /* @__PURE__ */ w("ZodPipe", (n, r) => {
  xf.init(n, r), le.init(n, r), n.in = r.in, n.out = r.out;
});
function Dr(n, r) {
  return new xu({
    type: "pipe",
    in: n,
    out: r
  });
}
var Gd = /* @__PURE__ */ w("ZodReadonly", (n, r) => {
  nb.init(n, r), le.init(n, r);
});
function Yd(n) {
  return new Gd({
    type: "readonly",
    innerType: n
  });
}
var Qd = /* @__PURE__ */ w("ZodTemplateLiteral", (n, r) => {
  ib.init(n, r), le.init(n, r);
});
function LS(n, r) {
  return new Qd({
    type: "template_literal",
    parts: n,
    ...M(r)
  });
}
var Vd = /* @__PURE__ */ w("ZodLazy", (n, r) => {
  rb.init(n, r), le.init(n, r), n.unwrap = () => n._zod.def.getter();
});
function Jd(n) {
  return new Vd({
    type: "lazy",
    getter: n
  });
}
var Xd = /* @__PURE__ */ w("ZodPromise", (n, r) => {
  ab.init(n, r), le.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function BS(n) {
  return new Xd({
    type: "promise",
    innerType: n
  });
}
var Vr = /* @__PURE__ */ w("ZodCustom", (n, r) => {
  lb.init(n, r), le.init(n, r);
});
function Kd(n) {
  const r = new Je({ check: "custom" });
  return r._zod.check = n, r;
}
function Pd(n, r) {
  return Mb(Vr, n ?? (() => !0), r);
}
function Fd(n, r = {}) {
  return Ib(Vr, n, r);
}
function Wd(n) {
  const r = Kd((o) => (o.addIssue = (s) => {
    if (typeof s == "string") o.issues.push(wa(s, o.value, r._zod.def));
    else {
      const i = s;
      i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = o.value), i.inst ?? (i.inst = r), i.continue ?? (i.continue = !r._zod.def.abort), o.issues.push(wa(i));
    }
  }, n(o.value, o)));
  return r;
}
function GS(n, r = { error: `Input not instance of ${n.name}` }) {
  const o = new Vr({
    type: "custom",
    check: "custom",
    fn: (s) => s instanceof n,
    abort: !0,
    ...M(r)
  });
  return o._zod.bag.Class = n, o;
}
var YS = (...n) => qb({
  Pipe: xu,
  Boolean: Br,
  String: Hr,
  Transform: ku
}, ...n);
function QS(n) {
  const r = Jd(() => oe([
    E(n),
    ie(),
    Ne(),
    $u(),
    W(r),
    ye(E(), r)
  ]));
  return r;
}
function ju(n, r) {
  return Dr(Ou(n), r);
}
var VS = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom"
};
function JS(n) {
  ft({ customError: n });
}
function XS() {
  return ft().customError;
}
var KS = /* @__PURE__ */ An({
  bigint: () => _T,
  boolean: () => yT,
  date: () => bT,
  number: () => gT,
  string: () => hT
});
function hT(n) {
  return cb(Hr, n);
}
function gT(n) {
  return pb(Lr, n);
}
function yT(n) {
  return $b(Br, n);
}
function _T(n) {
  return Tb(Gr, n);
}
function bT(n) {
  return Ab(zu, n);
}
var ST = /* @__PURE__ */ An({
  $brand: () => cf,
  $input: () => Af,
  $output: () => Df,
  NEVER: () => uf,
  TimePrecision: () => id,
  ZodAny: () => $d,
  ZodArray: () => Ed,
  ZodBase64: () => gu,
  ZodBase64URL: () => yu,
  ZodBigInt: () => Gr,
  ZodBigIntFormat: () => Su,
  ZodBoolean: () => Br,
  ZodCIDRv4: () => pu,
  ZodCIDRv6: () => hu,
  ZodCUID: () => uu,
  ZodCUID2: () => cu,
  ZodCatch: () => Hd,
  ZodCustom: () => Vr,
  ZodCustomStringFormat: () => yd,
  ZodDate: () => zu,
  ZodDefault: () => Zd,
  ZodDiscriminatedUnion: () => kd,
  ZodE164: () => _u,
  ZodEmail: () => au,
  ZodEmoji: () => lu,
  ZodEnum: () => Na,
  ZodError: () => Kb,
  ZodFile: () => Dd,
  ZodGUID: () => Ur,
  ZodIPv4: () => mu,
  ZodIPv6: () => vu,
  ZodISODate: () => eu,
  ZodISODateTime: () => Wo,
  ZodISODuration: () => nu,
  ZodISOTime: () => tu,
  ZodIntersection: () => Od,
  ZodIssueCode: () => VS,
  ZodJWT: () => bu,
  ZodKSUID: () => du,
  ZodLazy: () => Vd,
  ZodLiteral: () => jd,
  ZodMap: () => Ud,
  ZodNaN: () => Bd,
  ZodNanoID: () => ou,
  ZodNever: () => Td,
  ZodNonOptional: () => Uu,
  ZodNull: () => Sd,
  ZodNullable: () => Ad,
  ZodNumber: () => Lr,
  ZodNumberFormat: () => Ri,
  ZodObject: () => Yr,
  ZodOptional: () => Nu,
  ZodPipe: () => xu,
  ZodPrefault: () => Cd,
  ZodPromise: () => Xd,
  ZodReadonly: () => Gd,
  ZodRealError: () => ja,
  ZodRecord: () => Eu,
  ZodSet: () => xd,
  ZodString: () => Hr,
  ZodStringFormat: () => Me,
  ZodSuccess: () => qd,
  ZodSymbol: () => _d,
  ZodTemplateLiteral: () => Qd,
  ZodTransform: () => ku,
  ZodTuple: () => Nd,
  ZodType: () => le,
  ZodULID: () => su,
  ZodURL: () => ru,
  ZodUUID: () => mn,
  ZodUndefined: () => bd,
  ZodUnion: () => Tu,
  ZodUnknown: () => zd,
  ZodVoid: () => wd,
  ZodXID: () => fu,
  _ZodString: () => iu,
  _default: () => Rd,
  any: () => OS,
  array: () => W,
  base64: () => pS,
  base64url: () => hS,
  bigint: () => TS,
  boolean: () => Ne,
  catch: () => Ld,
  check: () => Kd,
  cidrv4: () => mS,
  cidrv6: () => vS,
  clone: () => on,
  coerce: () => KS,
  config: () => ft,
  core: () => Bb,
  cuid: () => lS,
  cuid2: () => oS,
  custom: () => Pd,
  date: () => US,
  discriminatedUnion: () => wu,
  e164: () => gS,
  email: () => Pb,
  emoji: () => aS,
  endsWith: () => Vo,
  enum: () => yt,
  file: () => MS,
  flattenError: () => Co,
  float32: () => bS,
  float64: () => SS,
  formatError: () => Mo,
  function: () => sd,
  getErrorMap: () => XS,
  globalRegistry: () => ai,
  gt: () => li,
  gte: () => kt,
  guid: () => Fb,
  includes: () => Yo,
  instanceof: () => GS,
  int: () => Uo,
  int32: () => $S,
  int64: () => wS,
  intersection: () => Qr,
  ipv4: () => fS,
  ipv6: () => dS,
  iso: () => Yb,
  json: () => QS,
  jwt: () => yS,
  keyof: () => xS,
  ksuid: () => sS,
  lazy: () => Jd,
  length: () => qr,
  literal: () => T,
  locales: () => jf,
  looseObject: () => pt,
  lowercase: () => Bo,
  lt: () => ri,
  lte: () => Ft,
  map: () => ZS,
  maxLength: () => Ir,
  maxSize: () => Mr,
  mime: () => Jo,
  minLength: () => ji,
  minSize: () => Oa,
  multipleOf: () => ka,
  nan: () => HS,
  nanoid: () => rS,
  nativeEnum: () => CS,
  negative: () => rd,
  never: () => Di,
  nonnegative: () => od,
  nonoptional: () => Id,
  nonpositive: () => ld,
  normalize: () => Xo,
  null: () => $u,
  nullable: () => jr,
  nullish: () => IS,
  number: () => ie,
  object: () => U,
  optional: () => Re,
  overwrite: () => oi,
  parse: () => vd,
  parseAsync: () => pd,
  partialRecord: () => AS,
  pipe: () => Dr,
  positive: () => ad,
  prefault: () => Md,
  preprocess: () => ju,
  prettifyError: () => vf,
  promise: () => BS,
  property: () => ud,
  readonly: () => Yd,
  record: () => ye,
  refine: () => Fd,
  regex: () => Lo,
  regexes: () => bf,
  registry: () => qo,
  safeParse: () => hd,
  safeParseAsync: () => gd,
  set: () => RS,
  setErrorMap: () => JS,
  size: () => Ho,
  startsWith: () => Qo,
  strictObject: () => jS,
  string: () => E,
  stringFormat: () => _S,
  stringbool: () => YS,
  success: () => qS,
  superRefine: () => Wd,
  symbol: () => kS,
  templateLiteral: () => LS,
  toJSONSchema: () => fd,
  toLowerCase: () => Po,
  toUpperCase: () => Fo,
  transform: () => Ou,
  treeifyError: () => mf,
  trim: () => Ko,
  tuple: () => DS,
  uint32: () => zS,
  uint64: () => ES,
  ulid: () => uS,
  undefined: () => xr,
  union: () => oe,
  unknown: () => Ue,
  uppercase: () => Go,
  url: () => iS,
  uuid: () => Wb,
  uuidv4: () => eS,
  uuidv6: () => tS,
  uuidv7: () => nS,
  void: () => NS,
  xid: () => cS
});
ft(ob());
var $T = /* @__PURE__ */ An({
  $brand: () => cf,
  $input: () => Af,
  $output: () => Df,
  NEVER: () => uf,
  TimePrecision: () => id,
  ZodAny: () => $d,
  ZodArray: () => Ed,
  ZodBase64: () => gu,
  ZodBase64URL: () => yu,
  ZodBigInt: () => Gr,
  ZodBigIntFormat: () => Su,
  ZodBoolean: () => Br,
  ZodCIDRv4: () => pu,
  ZodCIDRv6: () => hu,
  ZodCUID: () => uu,
  ZodCUID2: () => cu,
  ZodCatch: () => Hd,
  ZodCustom: () => Vr,
  ZodCustomStringFormat: () => yd,
  ZodDate: () => zu,
  ZodDefault: () => Zd,
  ZodDiscriminatedUnion: () => kd,
  ZodE164: () => _u,
  ZodEmail: () => au,
  ZodEmoji: () => lu,
  ZodEnum: () => Na,
  ZodError: () => Kb,
  ZodFile: () => Dd,
  ZodGUID: () => Ur,
  ZodIPv4: () => mu,
  ZodIPv6: () => vu,
  ZodISODate: () => eu,
  ZodISODateTime: () => Wo,
  ZodISODuration: () => nu,
  ZodISOTime: () => tu,
  ZodIntersection: () => Od,
  ZodIssueCode: () => VS,
  ZodJWT: () => bu,
  ZodKSUID: () => du,
  ZodLazy: () => Vd,
  ZodLiteral: () => jd,
  ZodMap: () => Ud,
  ZodNaN: () => Bd,
  ZodNanoID: () => ou,
  ZodNever: () => Td,
  ZodNonOptional: () => Uu,
  ZodNull: () => Sd,
  ZodNullable: () => Ad,
  ZodNumber: () => Lr,
  ZodNumberFormat: () => Ri,
  ZodObject: () => Yr,
  ZodOptional: () => Nu,
  ZodPipe: () => xu,
  ZodPrefault: () => Cd,
  ZodPromise: () => Xd,
  ZodReadonly: () => Gd,
  ZodRealError: () => ja,
  ZodRecord: () => Eu,
  ZodSet: () => xd,
  ZodString: () => Hr,
  ZodStringFormat: () => Me,
  ZodSuccess: () => qd,
  ZodSymbol: () => _d,
  ZodTemplateLiteral: () => Qd,
  ZodTransform: () => ku,
  ZodTuple: () => Nd,
  ZodType: () => le,
  ZodULID: () => su,
  ZodURL: () => ru,
  ZodUUID: () => mn,
  ZodUndefined: () => bd,
  ZodUnion: () => Tu,
  ZodUnknown: () => zd,
  ZodVoid: () => wd,
  ZodXID: () => fu,
  _ZodString: () => iu,
  _default: () => Rd,
  any: () => OS,
  array: () => W,
  base64: () => pS,
  base64url: () => hS,
  bigint: () => TS,
  boolean: () => Ne,
  catch: () => Ld,
  check: () => Kd,
  cidrv4: () => mS,
  cidrv6: () => vS,
  clone: () => on,
  coerce: () => KS,
  config: () => ft,
  core: () => Bb,
  cuid: () => lS,
  cuid2: () => oS,
  custom: () => Pd,
  date: () => US,
  discriminatedUnion: () => wu,
  e164: () => gS,
  email: () => Pb,
  emoji: () => aS,
  endsWith: () => Vo,
  enum: () => yt,
  file: () => MS,
  flattenError: () => Co,
  float32: () => bS,
  float64: () => SS,
  formatError: () => Mo,
  function: () => sd,
  getErrorMap: () => XS,
  globalRegistry: () => ai,
  gt: () => li,
  gte: () => kt,
  guid: () => Fb,
  includes: () => Yo,
  instanceof: () => GS,
  int: () => Uo,
  int32: () => $S,
  int64: () => wS,
  intersection: () => Qr,
  ipv4: () => fS,
  ipv6: () => dS,
  iso: () => Yb,
  json: () => QS,
  jwt: () => yS,
  keyof: () => xS,
  ksuid: () => sS,
  lazy: () => Jd,
  length: () => qr,
  literal: () => T,
  locales: () => jf,
  looseObject: () => pt,
  lowercase: () => Bo,
  lt: () => ri,
  lte: () => Ft,
  map: () => ZS,
  maxLength: () => Ir,
  maxSize: () => Mr,
  mime: () => Jo,
  minLength: () => ji,
  minSize: () => Oa,
  multipleOf: () => ka,
  nan: () => HS,
  nanoid: () => rS,
  nativeEnum: () => CS,
  negative: () => rd,
  never: () => Di,
  nonnegative: () => od,
  nonoptional: () => Id,
  nonpositive: () => ld,
  normalize: () => Xo,
  null: () => $u,
  nullable: () => jr,
  nullish: () => IS,
  number: () => ie,
  object: () => U,
  optional: () => Re,
  overwrite: () => oi,
  parse: () => vd,
  parseAsync: () => pd,
  partialRecord: () => AS,
  pipe: () => Dr,
  positive: () => ad,
  prefault: () => Md,
  preprocess: () => ju,
  prettifyError: () => vf,
  promise: () => BS,
  property: () => ud,
  readonly: () => Yd,
  record: () => ye,
  refine: () => Fd,
  regex: () => Lo,
  regexes: () => bf,
  registry: () => qo,
  safeParse: () => hd,
  safeParseAsync: () => gd,
  set: () => RS,
  setErrorMap: () => JS,
  size: () => Ho,
  startsWith: () => Qo,
  strictObject: () => jS,
  string: () => E,
  stringFormat: () => _S,
  stringbool: () => YS,
  success: () => qS,
  superRefine: () => Wd,
  symbol: () => kS,
  templateLiteral: () => LS,
  toJSONSchema: () => fd,
  toLowerCase: () => Po,
  toUpperCase: () => Fo,
  transform: () => Ou,
  treeifyError: () => mf,
  trim: () => Ko,
  tuple: () => DS,
  uint32: () => zS,
  uint64: () => ES,
  ulid: () => uS,
  undefined: () => xr,
  union: () => oe,
  unknown: () => Ue,
  uppercase: () => Go,
  url: () => iS,
  uuid: () => Wb,
  uuidv4: () => eS,
  uuidv6: () => tS,
  uuidv7: () => nS,
  void: () => NS,
  xid: () => cS,
  z: () => ST
}), xi = "io.modelcontextprotocol/related-task";
var tt = Pd((n) => n !== null && (typeof n == "object" || typeof n == "function")), PS = oe([E(), ie().int()]), FS = E(), Xw = pt({
  ttl: ie().optional(),
  pollInterval: ie().optional()
}), zT = U({ ttl: ie().optional() }), TT = U({ taskId: E() }), em = pt({
  progressToken: PS.optional(),
  [xi]: TT.optional()
}), It = U({ _meta: em.optional() }), Jr = It.extend({ task: zT.optional() }), wT = (n) => Jr.safeParse(n).success, dt = U({
  method: E(),
  params: It.loose().optional()
}), Wt = U({ _meta: em.optional() }), en = U({
  method: E(),
  params: Wt.loose().optional()
}), mt = pt({ _meta: em.optional() }), Xr = oe([E(), ie().int()]), WS = U({
  jsonrpc: T("2.0"),
  id: Xr,
  ...dt.shape
}).strict(), jg = (n) => WS.safeParse(n).success, e0 = U({
  jsonrpc: T("2.0"),
  ...en.shape
}).strict(), ET = (n) => e0.safeParse(n).success, tm = U({
  jsonrpc: T("2.0"),
  id: Xr,
  result: mt
}).strict(), zo = (n) => tm.safeParse(n).success, Oe;
(function(n) {
  n[n.ConnectionClosed = -32e3] = "ConnectionClosed", n[n.RequestTimeout = -32001] = "RequestTimeout", n[n.ParseError = -32700] = "ParseError", n[n.InvalidRequest = -32600] = "InvalidRequest", n[n.MethodNotFound = -32601] = "MethodNotFound", n[n.InvalidParams = -32602] = "InvalidParams", n[n.InternalError = -32603] = "InternalError", n[n.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
})(Oe || (Oe = {}));
var nm = U({
  jsonrpc: T("2.0"),
  id: Xr.optional(),
  error: U({
    code: ie().int(),
    message: E(),
    data: Ue().optional()
  })
}).strict(), kT = (n) => nm.safeParse(n).success, OT = oe([
  WS,
  e0,
  tm,
  nm
]), Kw = oe([tm, nm]), im = mt.strict(), NT = Wt.extend({
  requestId: Xr.optional(),
  reason: E().optional()
}), am = en.extend({
  method: T("notifications/cancelled"),
  params: NT
}), UT = U({
  src: E(),
  mimeType: E().optional(),
  sizes: W(E()).optional(),
  theme: yt(["light", "dark"]).optional()
}), Kr = U({ icons: W(UT).optional() }), Ua = U({
  name: E(),
  title: E().optional()
}), Du = Ua.extend({
  ...Ua.shape,
  ...Kr.shape,
  version: E(),
  websiteUrl: E().optional(),
  description: E().optional()
}), xT = Qr(U({ applyDefaults: Ne().optional() }), ye(E(), Ue())), jT = ju((n) => n && typeof n == "object" && !Array.isArray(n) && Object.keys(n).length === 0 ? { form: {} } : n, Qr(U({
  form: xT.optional(),
  url: tt.optional()
}), ye(E(), Ue()).optional())), DT = pt({
  list: tt.optional(),
  cancel: tt.optional(),
  requests: pt({
    sampling: pt({ createMessage: tt.optional() }).optional(),
    elicitation: pt({ create: tt.optional() }).optional()
  }).optional()
}), AT = pt({
  list: tt.optional(),
  cancel: tt.optional(),
  requests: pt({ tools: pt({ call: tt.optional() }).optional() }).optional()
}), ZT = U({
  experimental: ye(E(), tt).optional(),
  sampling: U({
    context: tt.optional(),
    tools: tt.optional()
  }).optional(),
  elicitation: jT.optional(),
  roots: U({ listChanged: Ne().optional() }).optional(),
  tasks: DT.optional(),
  extensions: ye(E(), tt).optional()
}), RT = It.extend({
  protocolVersion: E(),
  capabilities: ZT,
  clientInfo: Du
}), CT = dt.extend({
  method: T("initialize"),
  params: RT
}), MT = U({
  experimental: ye(E(), tt).optional(),
  logging: tt.optional(),
  completions: tt.optional(),
  prompts: U({ listChanged: Ne().optional() }).optional(),
  resources: U({
    subscribe: Ne().optional(),
    listChanged: Ne().optional()
  }).optional(),
  tools: U({ listChanged: Ne().optional() }).optional(),
  tasks: AT.optional(),
  extensions: ye(E(), tt).optional()
}), IT = mt.extend({
  protocolVersion: E(),
  capabilities: MT,
  serverInfo: Du,
  instructions: E().optional()
}), qT = en.extend({
  method: T("notifications/initialized"),
  params: Wt.optional()
}), Au = dt.extend({
  method: T("ping"),
  params: It.optional()
}), HT = U({
  progress: ie(),
  total: Re(ie()),
  message: Re(E())
}), LT = U({
  ...Wt.shape,
  ...HT.shape,
  progressToken: PS
}), rm = en.extend({
  method: T("notifications/progress"),
  params: LT
}), BT = It.extend({ cursor: FS.optional() }), Pr = dt.extend({ params: BT.optional() }), Fr = mt.extend({ nextCursor: FS.optional() }), GT = yt([
  "working",
  "input_required",
  "completed",
  "failed",
  "cancelled"
]), Wr = U({
  taskId: E(),
  status: GT,
  ttl: oe([ie(), $u()]),
  createdAt: E(),
  lastUpdatedAt: E(),
  pollInterval: Re(ie()),
  statusMessage: Re(E())
}), lm = mt.extend({ task: Wr }), YT = Wt.merge(Wr), xo = en.extend({
  method: T("notifications/tasks/status"),
  params: YT
}), om = dt.extend({
  method: T("tasks/get"),
  params: It.extend({ taskId: E() })
}), um = mt.merge(Wr), cm = dt.extend({
  method: T("tasks/result"),
  params: It.extend({ taskId: E() })
}), Pw = mt.loose(), sm = Pr.extend({ method: T("tasks/list") }), fm = Fr.extend({ tasks: W(Wr) }), dm = dt.extend({
  method: T("tasks/cancel"),
  params: It.extend({ taskId: E() })
}), QT = mt.merge(Wr), t0 = U({
  uri: E(),
  mimeType: Re(E()),
  _meta: ye(E(), Ue()).optional()
}), n0 = t0.extend({ text: E() }), mm = E().refine((n) => {
  try {
    return atob(n), !0;
  } catch {
    return !1;
  }
}, { message: "Invalid Base64 string" }), i0 = t0.extend({ blob: mm }), el = yt(["user", "assistant"]), Da = U({
  audience: W(el).optional(),
  priority: ie().min(0).max(1).optional(),
  lastModified: md({ offset: !0 }).optional()
}), a0 = U({
  ...Ua.shape,
  ...Kr.shape,
  uri: E(),
  description: Re(E()),
  mimeType: Re(E()),
  size: Re(ie()),
  annotations: Da.optional(),
  _meta: Re(pt({}))
}), VT = U({
  ...Ua.shape,
  ...Kr.shape,
  uriTemplate: E(),
  description: Re(E()),
  mimeType: Re(E()),
  annotations: Da.optional(),
  _meta: Re(pt({}))
}), JT = Pr.extend({ method: T("resources/list") }), r0 = Fr.extend({ resources: W(a0) }), XT = Pr.extend({ method: T("resources/templates/list") }), KT = Fr.extend({ resourceTemplates: W(VT) }), vm = It.extend({ uri: E() }), PT = vm, FT = dt.extend({
  method: T("resources/read"),
  params: PT
}), l0 = mt.extend({ contents: W(oe([n0, i0])) }), WT = en.extend({
  method: T("notifications/resources/list_changed"),
  params: Wt.optional()
}), e6 = vm, t6 = dt.extend({
  method: T("resources/subscribe"),
  params: e6
}), n6 = vm, i6 = dt.extend({
  method: T("resources/unsubscribe"),
  params: n6
}), a6 = Wt.extend({ uri: E() }), r6 = en.extend({
  method: T("notifications/resources/updated"),
  params: a6
}), l6 = U({
  name: E(),
  description: Re(E()),
  required: Re(Ne())
}), o6 = U({
  ...Ua.shape,
  ...Kr.shape,
  description: Re(E()),
  arguments: Re(W(l6)),
  _meta: Re(pt({}))
}), u6 = Pr.extend({ method: T("prompts/list") }), c6 = Fr.extend({ prompts: W(o6) }), s6 = It.extend({
  name: E(),
  arguments: ye(E(), E()).optional()
}), f6 = dt.extend({
  method: T("prompts/get"),
  params: s6
}), pm = U({
  type: T("text"),
  text: E(),
  annotations: Da.optional(),
  _meta: ye(E(), Ue()).optional()
}), hm = U({
  type: T("image"),
  data: mm,
  mimeType: E(),
  annotations: Da.optional(),
  _meta: ye(E(), Ue()).optional()
}), gm = U({
  type: T("audio"),
  data: mm,
  mimeType: E(),
  annotations: Da.optional(),
  _meta: ye(E(), Ue()).optional()
}), d6 = U({
  type: T("tool_use"),
  name: E(),
  id: E(),
  input: ye(E(), Ue()),
  _meta: ye(E(), Ue()).optional()
}), o0 = U({
  type: T("resource"),
  resource: oe([n0, i0]),
  annotations: Da.optional(),
  _meta: ye(E(), Ue()).optional()
}), u0 = a0.extend({ type: T("resource_link") }), tl = oe([
  pm,
  hm,
  gm,
  u0,
  o0
]), m6 = U({
  role: el,
  content: tl
}), v6 = mt.extend({
  description: E().optional(),
  messages: W(m6)
}), p6 = en.extend({
  method: T("notifications/prompts/list_changed"),
  params: Wt.optional()
}), h6 = U({
  title: E().optional(),
  readOnlyHint: Ne().optional(),
  destructiveHint: Ne().optional(),
  idempotentHint: Ne().optional(),
  openWorldHint: Ne().optional()
}), g6 = U({ taskSupport: yt([
  "required",
  "optional",
  "forbidden"
]).optional() }), ym = U({
  ...Ua.shape,
  ...Kr.shape,
  description: E().optional(),
  inputSchema: U({
    type: T("object"),
    properties: ye(E(), tt).optional(),
    required: W(E()).optional()
  }).catchall(Ue()),
  outputSchema: U({
    type: T("object"),
    properties: ye(E(), tt).optional(),
    required: W(E()).optional()
  }).catchall(Ue()).optional(),
  annotations: h6.optional(),
  execution: g6.optional(),
  _meta: ye(E(), Ue()).optional()
}), c0 = Pr.extend({ method: T("tools/list") }), y6 = Fr.extend({ tools: W(ym) }), Zu = mt.extend({
  content: W(tl).default([]),
  structuredContent: ye(E(), Ue()).optional(),
  isError: Ne().optional()
}), Fw = Zu.or(mt.extend({ toolResult: Ue() })), _6 = Jr.extend({
  name: E(),
  arguments: ye(E(), Ue()).optional()
}), s0 = dt.extend({
  method: T("tools/call"),
  params: _6
}), b6 = en.extend({
  method: T("notifications/tools/list_changed"),
  params: Wt.optional()
}), Ww = U({
  autoRefresh: Ne().default(!0),
  debounceMs: ie().int().nonnegative().default(300)
}), f0 = yt([
  "debug",
  "info",
  "notice",
  "warning",
  "error",
  "critical",
  "alert",
  "emergency"
]), S6 = It.extend({ level: f0 }), $6 = dt.extend({
  method: T("logging/setLevel"),
  params: S6
}), z6 = Wt.extend({
  level: f0,
  logger: E().optional(),
  data: Ue()
}), T6 = en.extend({
  method: T("notifications/message"),
  params: z6
}), w6 = U({ name: E().optional() }), E6 = U({
  hints: W(w6).optional(),
  costPriority: ie().min(0).max(1).optional(),
  speedPriority: ie().min(0).max(1).optional(),
  intelligencePriority: ie().min(0).max(1).optional()
}), k6 = U({ mode: yt([
  "auto",
  "required",
  "none"
]).optional() }), O6 = U({
  type: T("tool_result"),
  toolUseId: E().describe("The unique identifier for the corresponding tool call."),
  content: W(tl).default([]),
  structuredContent: U({}).loose().optional(),
  isError: Ne().optional(),
  _meta: ye(E(), Ue()).optional()
}), N6 = wu("type", [
  pm,
  hm,
  gm
]), jo = wu("type", [
  pm,
  hm,
  gm,
  d6,
  O6
]), U6 = U({
  role: el,
  content: oe([jo, W(jo)]),
  _meta: ye(E(), Ue()).optional()
}), x6 = Jr.extend({
  messages: W(U6),
  modelPreferences: E6.optional(),
  systemPrompt: E().optional(),
  includeContext: yt([
    "none",
    "thisServer",
    "allServers"
  ]).optional(),
  temperature: ie().optional(),
  maxTokens: ie().int(),
  stopSequences: W(E()).optional(),
  metadata: tt.optional(),
  tools: W(ym).optional(),
  toolChoice: k6.optional()
}), j6 = dt.extend({
  method: T("sampling/createMessage"),
  params: x6
}), d0 = mt.extend({
  model: E(),
  stopReason: Re(yt([
    "endTurn",
    "stopSequence",
    "maxTokens"
  ]).or(E())),
  role: el,
  content: N6
}), m0 = mt.extend({
  model: E(),
  stopReason: Re(yt([
    "endTurn",
    "stopSequence",
    "maxTokens",
    "toolUse"
  ]).or(E())),
  role: el,
  content: oe([jo, W(jo)])
}), D6 = U({
  type: T("boolean"),
  title: E().optional(),
  description: E().optional(),
  default: Ne().optional()
}), A6 = U({
  type: T("string"),
  title: E().optional(),
  description: E().optional(),
  minLength: ie().optional(),
  maxLength: ie().optional(),
  format: yt([
    "email",
    "uri",
    "date",
    "date-time"
  ]).optional(),
  default: E().optional()
}), Z6 = U({
  type: yt(["number", "integer"]),
  title: E().optional(),
  description: E().optional(),
  minimum: ie().optional(),
  maximum: ie().optional(),
  default: ie().optional()
}), R6 = U({
  type: T("string"),
  title: E().optional(),
  description: E().optional(),
  enum: W(E()),
  default: E().optional()
}), C6 = U({
  type: T("string"),
  title: E().optional(),
  description: E().optional(),
  oneOf: W(U({
    const: E(),
    title: E()
  })),
  default: E().optional()
}), M6 = U({
  type: T("string"),
  title: E().optional(),
  description: E().optional(),
  enum: W(E()),
  enumNames: W(E()).optional(),
  default: E().optional()
}), I6 = oe([R6, C6]), q6 = U({
  type: T("array"),
  title: E().optional(),
  description: E().optional(),
  minItems: ie().optional(),
  maxItems: ie().optional(),
  items: U({
    type: T("string"),
    enum: W(E())
  }),
  default: W(E()).optional()
}), H6 = U({
  type: T("array"),
  title: E().optional(),
  description: E().optional(),
  minItems: ie().optional(),
  maxItems: ie().optional(),
  items: U({ anyOf: W(U({
    const: E(),
    title: E()
  })) }),
  default: W(E()).optional()
}), L6 = oe([q6, H6]), B6 = oe([
  M6,
  I6,
  L6
]), G6 = oe([
  B6,
  D6,
  A6,
  Z6
]), Y6 = Jr.extend({
  mode: T("form").optional(),
  message: E(),
  requestedSchema: U({
    type: T("object"),
    properties: ye(E(), G6),
    required: W(E()).optional()
  })
}), Q6 = Jr.extend({
  mode: T("url"),
  message: E(),
  elicitationId: E(),
  url: E().url()
}), V6 = oe([Y6, Q6]), J6 = dt.extend({
  method: T("elicitation/create"),
  params: V6
}), X6 = Wt.extend({ elicitationId: E() }), K6 = en.extend({
  method: T("notifications/elicitation/complete"),
  params: X6
}), P6 = mt.extend({
  action: yt([
    "accept",
    "decline",
    "cancel"
  ]),
  content: ju((n) => n === null ? void 0 : n, ye(E(), oe([
    E(),
    ie(),
    Ne(),
    W(E())
  ])).optional())
}), F6 = U({
  type: T("ref/resource"),
  uri: E()
}), W6 = U({
  type: T("ref/prompt"),
  name: E()
}), ew = It.extend({
  ref: oe([W6, F6]),
  argument: U({
    name: E(),
    value: E()
  }),
  context: U({ arguments: ye(E(), E()).optional() }).optional()
}), tw = dt.extend({
  method: T("completion/complete"),
  params: ew
}), nw = mt.extend({ completion: pt({
  values: W(E()).max(100),
  total: Re(ie().int()),
  hasMore: Re(Ne())
}) }), iw = U({
  uri: E().startsWith("file://"),
  name: E().optional(),
  _meta: ye(E(), Ue()).optional()
}), aw = dt.extend({
  method: T("roots/list"),
  params: It.optional()
}), rw = mt.extend({ roots: W(iw) }), lw = en.extend({
  method: T("notifications/roots/list_changed"),
  params: Wt.optional()
}), eE = oe([
  Au,
  CT,
  tw,
  $6,
  f6,
  u6,
  JT,
  XT,
  FT,
  t6,
  i6,
  s0,
  c0,
  om,
  cm,
  sm,
  dm
]), tE = oe([
  am,
  rm,
  qT,
  lw,
  xo
]), nE = oe([
  im,
  d0,
  m0,
  P6,
  rw,
  um,
  fm,
  lm
]), iE = oe([
  Au,
  j6,
  J6,
  aw,
  om,
  cm,
  sm,
  dm
]), aE = oe([
  am,
  rm,
  T6,
  r6,
  WT,
  b6,
  p6,
  xo,
  K6
]), rE = oe([
  im,
  IT,
  nw,
  v6,
  c6,
  r0,
  KT,
  l0,
  Zu,
  y6,
  um,
  fm,
  lm
]), ze = class v0 extends Error {
  constructor(r, o, s) {
    super(`MCP error ${r}: ${o}`), this.code = r, this.data = s, this.name = "McpError";
  }
  static fromError(r, o, s) {
    if (r === Oe.UrlElicitationRequired && s) {
      const i = s;
      if (i.elicitations) return new ow(i.elicitations, o);
    }
    return new v0(r, o, s);
  }
}, ow = class extends ze {
  constructor(n, r = `URL elicitation${n.length > 1 ? "s" : ""} required`) {
    super(Oe.UrlElicitationRequired, r, { elicitations: n });
  }
  get elicitations() {
    return this.data?.elicitations ?? [];
  }
};
function Ui(n) {
  return n === "completed" || n === "failed" || n === "cancelled";
}
function Dg(n) {
  const r = vT(n)?.method;
  if (!r) throw new Error("Schema is missing a method literal");
  const o = pT(r);
  if (typeof o != "string") throw new Error("Schema method literal must be a string");
  return o;
}
function Ag(n, r) {
  const o = Gb(n, r);
  if (!o.success) throw o.error;
  return o.data;
}
var uw = class {
  constructor(n) {
    this._options = n, this._requestMessageId = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this._requestHandlerAbortControllers = /* @__PURE__ */ new Map(), this._notificationHandlers = /* @__PURE__ */ new Map(), this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this._timeoutInfo = /* @__PURE__ */ new Map(), this._pendingDebouncedNotifications = /* @__PURE__ */ new Set(), this._taskProgressTokens = /* @__PURE__ */ new Map(), this._requestResolvers = /* @__PURE__ */ new Map(), this.setNotificationHandler(am, (r) => {
      this._oncancel(r);
    }), this.setNotificationHandler(rm, (r) => {
      this._onprogress(r);
    }), this.setRequestHandler(Au, (r) => ({})), this._taskStore = n?.taskStore, this._taskMessageQueue = n?.taskMessageQueue, this._taskStore && (this.setRequestHandler(om, async (r, o) => {
      const s = await this._taskStore.getTask(r.params.taskId, o.sessionId);
      if (!s) throw new ze(Oe.InvalidParams, "Failed to retrieve task: Task not found");
      return { ...s };
    }), this.setRequestHandler(cm, async (r, o) => {
      const s = async () => {
        const i = r.params.taskId;
        if (this._taskMessageQueue) {
          let d;
          for (; d = await this._taskMessageQueue.dequeue(i, o.sessionId); ) {
            if (d.type === "response" || d.type === "error") {
              const g = d.message, j = g.id, p = this._requestResolvers.get(j);
              if (p)
                if (this._requestResolvers.delete(j), d.type === "response") p(g);
                else {
                  const _ = g;
                  p(new ze(_.error.code, _.error.message, _.error.data));
                }
              else {
                const _ = d.type === "response" ? "Response" : "Error";
                this._onerror(/* @__PURE__ */ new Error(`${_} handler missing for request ${j}`));
              }
              continue;
            }
            await this._transport?.send(d.message, { relatedRequestId: o.requestId });
          }
        }
        const u = await this._taskStore.getTask(i, o.sessionId);
        if (!u) throw new ze(Oe.InvalidParams, `Task not found: ${i}`);
        if (!Ui(u.status))
          return await this._waitForTaskUpdate(i, o.signal), await s();
        if (Ui(u.status)) {
          const d = await this._taskStore.getTaskResult(i, o.sessionId);
          return this._clearTaskQueue(i), {
            ...d,
            _meta: {
              ...d._meta,
              [xi]: { taskId: i }
            }
          };
        }
        return await s();
      };
      return await s();
    }), this.setRequestHandler(sm, async (r, o) => {
      try {
        const { tasks: s, nextCursor: i } = await this._taskStore.listTasks(r.params?.cursor, o.sessionId);
        return {
          tasks: s,
          nextCursor: i,
          _meta: {}
        };
      } catch (s) {
        throw new ze(Oe.InvalidParams, `Failed to list tasks: ${s instanceof Error ? s.message : String(s)}`);
      }
    }), this.setRequestHandler(dm, async (r, o) => {
      try {
        const s = await this._taskStore.getTask(r.params.taskId, o.sessionId);
        if (!s) throw new ze(Oe.InvalidParams, `Task not found: ${r.params.taskId}`);
        if (Ui(s.status)) throw new ze(Oe.InvalidParams, `Cannot cancel task in terminal status: ${s.status}`);
        await this._taskStore.updateTaskStatus(r.params.taskId, "cancelled", "Client cancelled task execution.", o.sessionId), this._clearTaskQueue(r.params.taskId);
        const i = await this._taskStore.getTask(r.params.taskId, o.sessionId);
        if (!i) throw new ze(Oe.InvalidParams, `Task not found after cancellation: ${r.params.taskId}`);
        return {
          _meta: {},
          ...i
        };
      } catch (s) {
        throw s instanceof ze ? s : new ze(Oe.InvalidRequest, `Failed to cancel task: ${s instanceof Error ? s.message : String(s)}`);
      }
    }));
  }
  async _oncancel(n) {
    n.params.requestId && this._requestHandlerAbortControllers.get(n.params.requestId)?.abort(n.params.reason);
  }
  _setupTimeout(n, r, o, s, i = !1) {
    this._timeoutInfo.set(n, {
      timeoutId: setTimeout(s, r),
      startTime: Date.now(),
      timeout: r,
      maxTotalTimeout: o,
      resetTimeoutOnProgress: i,
      onTimeout: s
    });
  }
  _resetTimeout(n) {
    const r = this._timeoutInfo.get(n);
    if (!r) return !1;
    const o = Date.now() - r.startTime;
    if (r.maxTotalTimeout && o >= r.maxTotalTimeout)
      throw this._timeoutInfo.delete(n), ze.fromError(Oe.RequestTimeout, "Maximum total timeout exceeded", {
        maxTotalTimeout: r.maxTotalTimeout,
        totalElapsed: o
      });
    return clearTimeout(r.timeoutId), r.timeoutId = setTimeout(r.onTimeout, r.timeout), !0;
  }
  _cleanupTimeout(n) {
    const r = this._timeoutInfo.get(n);
    r && (clearTimeout(r.timeoutId), this._timeoutInfo.delete(n));
  }
  async connect(n) {
    if (this._transport) throw new Error("Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection.");
    this._transport = n;
    const r = this.transport?.onclose;
    this._transport.onclose = () => {
      r?.(), this._onclose();
    };
    const o = this.transport?.onerror;
    this._transport.onerror = (i) => {
      o?.(i), this._onerror(i);
    };
    const s = this._transport?.onmessage;
    this._transport.onmessage = (i, u) => {
      s?.(i, u), zo(i) || kT(i) ? this._onresponse(i) : jg(i) ? this._onrequest(i, u) : ET(i) ? this._onnotification(i) : this._onerror(/* @__PURE__ */ new Error(`Unknown message type: ${JSON.stringify(i)}`));
    }, await this._transport.start();
  }
  _onclose() {
    const n = this._responseHandlers;
    this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers.clear(), this._taskProgressTokens.clear(), this._pendingDebouncedNotifications.clear();
    for (const o of this._timeoutInfo.values()) clearTimeout(o.timeoutId);
    this._timeoutInfo.clear();
    for (const o of this._requestHandlerAbortControllers.values()) o.abort();
    this._requestHandlerAbortControllers.clear();
    const r = ze.fromError(Oe.ConnectionClosed, "Connection closed");
    this._transport = void 0, this.onclose?.();
    for (const o of n.values()) o(r);
  }
  _onerror(n) {
    this.onerror?.(n);
  }
  _onnotification(n) {
    const r = this._notificationHandlers.get(n.method) ?? this.fallbackNotificationHandler;
    r !== void 0 && Promise.resolve().then(() => r(n)).catch((o) => this._onerror(/* @__PURE__ */ new Error(`Uncaught error in notification handler: ${o}`)));
  }
  _onrequest(n, r) {
    const o = this._requestHandlers.get(n.method) ?? this.fallbackRequestHandler, s = this._transport, i = n.params?._meta?.[xi]?.taskId;
    if (o === void 0) {
      const p = {
        jsonrpc: "2.0",
        id: n.id,
        error: {
          code: Oe.MethodNotFound,
          message: "Method not found"
        }
      };
      i && this._taskMessageQueue ? this._enqueueTaskMessage(i, {
        type: "error",
        message: p,
        timestamp: Date.now()
      }, s?.sessionId).catch((_) => this._onerror(/* @__PURE__ */ new Error(`Failed to enqueue error response: ${_}`))) : s?.send(p).catch((_) => this._onerror(/* @__PURE__ */ new Error(`Failed to send an error response: ${_}`)));
      return;
    }
    const u = new AbortController();
    this._requestHandlerAbortControllers.set(n.id, u);
    const d = wT(n.params) ? n.params.task : void 0, g = this._taskStore ? this.requestTaskStore(n, s?.sessionId) : void 0, j = {
      signal: u.signal,
      sessionId: s?.sessionId,
      _meta: n.params?._meta,
      sendNotification: async (p) => {
        if (u.signal.aborted) return;
        const _ = { relatedRequestId: n.id };
        i && (_.relatedTask = { taskId: i }), await this.notification(p, _);
      },
      sendRequest: async (p, _, $) => {
        if (u.signal.aborted) throw new ze(Oe.ConnectionClosed, "Request was cancelled");
        const y = {
          ...$,
          relatedRequestId: n.id
        };
        i && !y.relatedTask && (y.relatedTask = { taskId: i });
        const R = y.relatedTask?.taskId ?? i;
        return R && g && await g.updateTaskStatus(R, "input_required"), await this.request(p, _, y);
      },
      authInfo: r?.authInfo,
      requestId: n.id,
      requestInfo: r?.requestInfo,
      taskId: i,
      taskStore: g,
      taskRequestedTtl: d?.ttl,
      closeSSEStream: r?.closeSSEStream,
      closeStandaloneSSEStream: r?.closeStandaloneSSEStream
    };
    Promise.resolve().then(() => {
      d && this.assertTaskHandlerCapability(n.method);
    }).then(() => o(n, j)).then(async (p) => {
      if (u.signal.aborted) return;
      const _ = {
        result: p,
        jsonrpc: "2.0",
        id: n.id
      };
      i && this._taskMessageQueue ? await this._enqueueTaskMessage(i, {
        type: "response",
        message: _,
        timestamp: Date.now()
      }, s?.sessionId) : await s?.send(_);
    }, async (p) => {
      if (u.signal.aborted) return;
      const _ = {
        jsonrpc: "2.0",
        id: n.id,
        error: {
          code: Number.isSafeInteger(p.code) ? p.code : Oe.InternalError,
          message: p.message ?? "Internal error",
          ...p.data !== void 0 && { data: p.data }
        }
      };
      i && this._taskMessageQueue ? await this._enqueueTaskMessage(i, {
        type: "error",
        message: _,
        timestamp: Date.now()
      }, s?.sessionId) : await s?.send(_);
    }).catch((p) => this._onerror(/* @__PURE__ */ new Error(`Failed to send response: ${p}`))).finally(() => {
      this._requestHandlerAbortControllers.get(n.id) === u && this._requestHandlerAbortControllers.delete(n.id);
    });
  }
  _onprogress(n) {
    const { progressToken: r, ...o } = n.params, s = Number(r), i = this._progressHandlers.get(s);
    if (!i) {
      this._onerror(/* @__PURE__ */ new Error(`Received a progress notification for an unknown token: ${JSON.stringify(n)}`));
      return;
    }
    const u = this._responseHandlers.get(s), d = this._timeoutInfo.get(s);
    if (d && u && d.resetTimeoutOnProgress) try {
      this._resetTimeout(s);
    } catch (g) {
      this._responseHandlers.delete(s), this._progressHandlers.delete(s), this._cleanupTimeout(s), u(g);
      return;
    }
    i(o);
  }
  _onresponse(n) {
    const r = Number(n.id), o = this._requestResolvers.get(r);
    if (o) {
      this._requestResolvers.delete(r), zo(n) ? o(n) : o(new ze(n.error.code, n.error.message, n.error.data));
      return;
    }
    const s = this._responseHandlers.get(r);
    if (s === void 0) {
      this._onerror(/* @__PURE__ */ new Error(`Received a response for an unknown message ID: ${JSON.stringify(n)}`));
      return;
    }
    this._responseHandlers.delete(r), this._cleanupTimeout(r);
    let i = !1;
    if (zo(n) && n.result && typeof n.result == "object") {
      const u = n.result;
      if (u.task && typeof u.task == "object") {
        const d = u.task;
        typeof d.taskId == "string" && (i = !0, this._taskProgressTokens.set(d.taskId, r));
      }
    }
    i || this._progressHandlers.delete(r), zo(n) ? s(n) : s(ze.fromError(n.error.code, n.error.message, n.error.data));
  }
  get transport() {
    return this._transport;
  }
  async close() {
    await this._transport?.close();
  }
  async *requestStream(n, r, o) {
    const { task: s } = o ?? {};
    if (!s) {
      try {
        yield {
          type: "result",
          result: await this.request(n, r, o)
        };
      } catch (u) {
        yield {
          type: "error",
          error: u instanceof ze ? u : new ze(Oe.InternalError, String(u))
        };
      }
      return;
    }
    let i;
    try {
      const u = await this.request(n, lm, o);
      if (u.task)
        i = u.task.taskId, yield {
          type: "taskCreated",
          task: u.task
        };
      else throw new ze(Oe.InternalError, "Task creation did not return a task");
      for (; ; ) {
        const d = await this.getTask({ taskId: i }, o);
        if (yield {
          type: "taskStatus",
          task: d
        }, Ui(d.status)) {
          d.status === "completed" ? yield {
            type: "result",
            result: await this.getTaskResult({ taskId: i }, r, o)
          } : d.status === "failed" ? yield {
            type: "error",
            error: new ze(Oe.InternalError, `Task ${i} failed`)
          } : d.status === "cancelled" && (yield {
            type: "error",
            error: new ze(Oe.InternalError, `Task ${i} was cancelled`)
          });
          return;
        }
        if (d.status === "input_required") {
          yield {
            type: "result",
            result: await this.getTaskResult({ taskId: i }, r, o)
          };
          return;
        }
        const g = d.pollInterval ?? this._options?.defaultTaskPollInterval ?? 1e3;
        await new Promise((j) => setTimeout(j, g)), o?.signal?.throwIfAborted();
      }
    } catch (u) {
      yield {
        type: "error",
        error: u instanceof ze ? u : new ze(Oe.InternalError, String(u))
      };
    }
  }
  request(n, r, o) {
    const { relatedRequestId: s, resumptionToken: i, onresumptiontoken: u, task: d, relatedTask: g } = o ?? {};
    return new Promise((j, p) => {
      const _ = (ee) => {
        p(ee);
      };
      if (!this._transport) {
        _(/* @__PURE__ */ new Error("Not connected"));
        return;
      }
      if (this._options?.enforceStrictCapabilities === !0) try {
        this.assertCapabilityForMethod(n.method), d && this.assertTaskCapability(n.method);
      } catch (ee) {
        _(ee);
        return;
      }
      o?.signal?.throwIfAborted();
      const $ = this._requestMessageId++, y = {
        ...n,
        jsonrpc: "2.0",
        id: $
      };
      o?.onprogress && (this._progressHandlers.set($, o.onprogress), y.params = {
        ...n.params,
        _meta: {
          ...n.params?._meta || {},
          progressToken: $
        }
      }), d && (y.params = {
        ...y.params,
        task: d
      }), g && (y.params = {
        ...y.params,
        _meta: {
          ...y.params?._meta || {},
          [xi]: g
        }
      });
      const R = (ee) => {
        this._responseHandlers.delete($), this._progressHandlers.delete($), this._cleanupTimeout($), this._transport?.send({
          jsonrpc: "2.0",
          method: "notifications/cancelled",
          params: {
            requestId: $,
            reason: String(ee)
          }
        }, {
          relatedRequestId: s,
          resumptionToken: i,
          onresumptiontoken: u
        }).catch((K) => this._onerror(/* @__PURE__ */ new Error(`Failed to send cancellation: ${K}`))), p(ee instanceof ze ? ee : new ze(Oe.RequestTimeout, String(ee)));
      };
      this._responseHandlers.set($, (ee) => {
        if (!o?.signal?.aborted) {
          if (ee instanceof Error) return p(ee);
          try {
            const K = Gb(r, ee.result);
            K.success ? j(K.data) : p(K.error);
          } catch (K) {
            p(K);
          }
        }
      }), o?.signal?.addEventListener("abort", () => {
        R(o?.signal?.reason);
      });
      const q = o?.timeout ?? 6e4, X = () => R(ze.fromError(Oe.RequestTimeout, "Request timed out", { timeout: q }));
      this._setupTimeout($, q, o?.maxTotalTimeout, X, o?.resetTimeoutOnProgress ?? !1);
      const F = g?.taskId;
      if (F) {
        const ee = (K) => {
          const ce = this._responseHandlers.get($);
          ce ? ce(K) : this._onerror(/* @__PURE__ */ new Error(`Response handler missing for side-channeled request ${$}`));
        };
        this._requestResolvers.set($, ee), this._enqueueTaskMessage(F, {
          type: "request",
          message: y,
          timestamp: Date.now()
        }).catch((K) => {
          this._cleanupTimeout($), p(K);
        });
      } else this._transport.send(y, {
        relatedRequestId: s,
        resumptionToken: i,
        onresumptiontoken: u
      }).catch((ee) => {
        this._cleanupTimeout($), p(ee);
      });
    });
  }
  async getTask(n, r) {
    return this.request({
      method: "tasks/get",
      params: n
    }, um, r);
  }
  async getTaskResult(n, r, o) {
    return this.request({
      method: "tasks/result",
      params: n
    }, r, o);
  }
  async listTasks(n, r) {
    return this.request({
      method: "tasks/list",
      params: n
    }, fm, r);
  }
  async cancelTask(n, r) {
    return this.request({
      method: "tasks/cancel",
      params: n
    }, QT, r);
  }
  async notification(n, r) {
    if (!this._transport) throw new Error("Not connected");
    this.assertNotificationCapability(n.method);
    const o = r?.relatedTask?.taskId;
    if (o) {
      const i = {
        ...n,
        jsonrpc: "2.0",
        params: {
          ...n.params,
          _meta: {
            ...n.params?._meta || {},
            [xi]: r.relatedTask
          }
        }
      };
      await this._enqueueTaskMessage(o, {
        type: "notification",
        message: i,
        timestamp: Date.now()
      });
      return;
    }
    if ((this._options?.debouncedNotificationMethods ?? []).includes(n.method) && !n.params && !r?.relatedRequestId && !r?.relatedTask) {
      if (this._pendingDebouncedNotifications.has(n.method)) return;
      this._pendingDebouncedNotifications.add(n.method), Promise.resolve().then(() => {
        if (this._pendingDebouncedNotifications.delete(n.method), !this._transport) return;
        let i = {
          ...n,
          jsonrpc: "2.0"
        };
        r?.relatedTask && (i = {
          ...i,
          params: {
            ...i.params,
            _meta: {
              ...i.params?._meta || {},
              [xi]: r.relatedTask
            }
          }
        }), this._transport?.send(i, r).catch((u) => this._onerror(u));
      });
      return;
    }
    let s = {
      ...n,
      jsonrpc: "2.0"
    };
    r?.relatedTask && (s = {
      ...s,
      params: {
        ...s.params,
        _meta: {
          ...s.params?._meta || {},
          [xi]: r.relatedTask
        }
      }
    }), await this._transport.send(s, r);
  }
  setRequestHandler(n, r) {
    const o = Dg(n);
    this.assertRequestHandlerCapability(o), this._requestHandlers.set(o, (s, i) => {
      const u = Ag(n, s);
      return Promise.resolve(r(u, i));
    });
  }
  removeRequestHandler(n) {
    this._requestHandlers.delete(n);
  }
  assertCanSetRequestHandler(n) {
    if (this._requestHandlers.has(n)) throw new Error(`A request handler for ${n} already exists, which would be overridden`);
  }
  setNotificationHandler(n, r) {
    const o = Dg(n);
    this._notificationHandlers.set(o, (s) => {
      const i = Ag(n, s);
      return Promise.resolve(r(i));
    });
  }
  removeNotificationHandler(n) {
    this._notificationHandlers.delete(n);
  }
  _cleanupTaskProgressHandler(n) {
    const r = this._taskProgressTokens.get(n);
    r !== void 0 && (this._progressHandlers.delete(r), this._taskProgressTokens.delete(n));
  }
  async _enqueueTaskMessage(n, r, o) {
    if (!this._taskStore || !this._taskMessageQueue) throw new Error("Cannot enqueue task message: taskStore and taskMessageQueue are not configured");
    const s = this._options?.maxTaskQueueSize;
    await this._taskMessageQueue.enqueue(n, r, o, s);
  }
  async _clearTaskQueue(n, r) {
    if (this._taskMessageQueue) {
      const o = await this._taskMessageQueue.dequeueAll(n, r);
      for (const s of o) if (s.type === "request" && jg(s.message)) {
        const i = s.message.id, u = this._requestResolvers.get(i);
        u ? (u(new ze(Oe.InternalError, "Task cancelled or completed")), this._requestResolvers.delete(i)) : this._onerror(/* @__PURE__ */ new Error(`Resolver missing for request ${i} during task ${n} cleanup`));
      }
    }
  }
  async _waitForTaskUpdate(n, r) {
    let o = this._options?.defaultTaskPollInterval ?? 1e3;
    try {
      const s = await this._taskStore?.getTask(n);
      s?.pollInterval && (o = s.pollInterval);
    } catch {
    }
    return new Promise((s, i) => {
      if (r.aborted) {
        i(new ze(Oe.InvalidRequest, "Request cancelled"));
        return;
      }
      const u = setTimeout(s, o);
      r.addEventListener("abort", () => {
        clearTimeout(u), i(new ze(Oe.InvalidRequest, "Request cancelled"));
      }, { once: !0 });
    });
  }
  requestTaskStore(n, r) {
    const o = this._taskStore;
    if (!o) throw new Error("No task store configured");
    return {
      createTask: async (s) => {
        if (!n) throw new Error("No request provided");
        return await o.createTask(s, n.id, {
          method: n.method,
          params: n.params
        }, r);
      },
      getTask: async (s) => {
        const i = await o.getTask(s, r);
        if (!i) throw new ze(Oe.InvalidParams, "Failed to retrieve task: Task not found");
        return i;
      },
      storeTaskResult: async (s, i, u) => {
        await o.storeTaskResult(s, i, u, r);
        const d = await o.getTask(s, r);
        if (d) {
          const g = xo.parse({
            method: "notifications/tasks/status",
            params: d
          });
          await this.notification(g), Ui(d.status) && this._cleanupTaskProgressHandler(s);
        }
      },
      getTaskResult: (s) => o.getTaskResult(s, r),
      updateTaskStatus: async (s, i, u) => {
        const d = await o.getTask(s, r);
        if (!d) throw new ze(Oe.InvalidParams, `Task "${s}" not found - it may have been cleaned up`);
        if (Ui(d.status)) throw new ze(Oe.InvalidParams, `Cannot update task "${s}" from terminal status "${d.status}" to "${i}". Terminal states (completed, failed, cancelled) cannot transition to other states.`);
        await o.updateTaskStatus(s, i, u, r);
        const g = await o.getTask(s, r);
        if (g) {
          const j = xo.parse({
            method: "notifications/tasks/status",
            params: g
          });
          await this.notification(j), Ui(g.status) && this._cleanupTaskProgressHandler(s);
        }
      },
      listTasks: (s) => o.listTasks(s, r)
    };
  }
};
function Zg(n) {
  return n !== null && typeof n == "object" && !Array.isArray(n);
}
function cw(n, r) {
  const o = { ...n };
  for (const s in r) {
    const i = s, u = r[i];
    if (u === void 0) continue;
    const d = o[i];
    Zg(d) && Zg(u) ? o[i] = {
      ...d,
      ...u
    } : o[i] = u;
  }
  return o;
}
((n) => typeof Sa < "u" ? Sa : typeof Proxy < "u" ? new Proxy(n, { get: (r, o) => (typeof Sa < "u" ? Sa : r)[o] }) : n)(function(n) {
  if (typeof Sa < "u") return Sa.apply(this, arguments);
  throw Error('Dynamic require of "' + n + '" is not supported');
});
var sw = class extends uw {
  _registeredMethods = /* @__PURE__ */ new Set();
  _eventSlots = /* @__PURE__ */ new Map();
  onEventDispatch(n, r) {
  }
  _ensureEventSlot(n) {
    let r = this._eventSlots.get(n);
    if (!r) {
      let o = this.eventSchemas[n];
      if (!o) throw Error(`Unknown event: ${String(n)}`);
      r = { listeners: [] }, this._eventSlots.set(n, r);
      let s = o.shape.method.value;
      this._registeredMethods.add(s);
      let i = r;
      super.setNotificationHandler(o, (u) => {
        let d = u.params;
        this.onEventDispatch(n, d), i.onHandler?.(d);
        for (let g of [...i.listeners]) g(d);
      });
    }
    return r;
  }
  setEventHandler(n, r) {
    let o = this._ensureEventSlot(n);
    o.onHandler && r && console.warn(`[MCP Apps] on${String(n)} handler replaced. Use addEventListener("${String(n)}", …) to add multiple listeners without replacing.`), o.onHandler = r;
  }
  getEventHandler(n) {
    return this._eventSlots.get(n)?.onHandler;
  }
  addEventListener(n, r) {
    this._ensureEventSlot(n).listeners.push(r);
  }
  removeEventListener(n, r) {
    let o = this._eventSlots.get(n);
    if (!o) return;
    let s = o.listeners.indexOf(r);
    s !== -1 && o.listeners.splice(s, 1);
  }
  setRequestHandler = (n, r) => {
    this._assertMethodNotRegistered(n, "setRequestHandler"), super.setRequestHandler(n, r);
  };
  setNotificationHandler = (n, r) => {
    this._assertMethodNotRegistered(n, "setNotificationHandler"), super.setNotificationHandler(n, r);
  };
  warnIfRequestHandlerReplaced(n, r, o) {
    r && o && console.warn(`[MCP Apps] ${n} handler replaced. Previous handler will no longer be called.`);
  }
  replaceRequestHandler = (n, r) => {
    let o = n.shape.method.value;
    this._registeredMethods.add(o), super.setRequestHandler(n, r);
  };
  _assertMethodNotRegistered(n, r) {
    let o = n.shape.method.value;
    if (this._registeredMethods.has(o)) throw Error(`Handler for "${o}" already registered (via ${r}). Use addEventListener() to attach multiple listeners, or the on* setter for replace semantics.`);
    this._registeredMethods.add(o);
  }
}, fw = "2026-01-26";
var dw = class {
  eventTarget;
  eventSource;
  messageListener;
  constructor(n = window.parent, r) {
    this.eventTarget = n, this.eventSource = r, this.messageListener = (o) => {
      if (r && o.source !== this.eventSource) {
        console.debug("Ignoring message from unknown source", o);
        return;
      }
      let s = OT.safeParse(o.data);
      s.success ? (console.debug("Parsed message", s.data), this.onmessage?.(s.data)) : o.data?.jsonrpc !== "2.0" ? console.debug("Ignoring non-JSON-RPC message", s.error.message, o) : (console.error("Failed to parse message", s.error.message, o), this.onerror?.(Error("Invalid JSON-RPC message received: " + s.error.message)));
    };
  }
  async start() {
    window.addEventListener("message", this.messageListener);
  }
  async send(n, r) {
    n.method !== "ui/notifications/tool-input-partial" && console.debug("Sending message", n), this.eventTarget.postMessage(n, "*");
  }
  async close() {
    window.removeEventListener("message", this.messageListener), this.onclose?.();
  }
  onclose;
  onerror;
  onmessage;
  sessionId;
  setProtocolVersion;
}, mw = oe([T("light"), T("dark")]).describe("Color theme preference for the host environment."), Ar = oe([
  T("inline"),
  T("fullscreen"),
  T("pip")
]).describe("Display mode for UI presentation."), vw = oe([
  T("--color-background-primary"),
  T("--color-background-secondary"),
  T("--color-background-tertiary"),
  T("--color-background-inverse"),
  T("--color-background-ghost"),
  T("--color-background-info"),
  T("--color-background-danger"),
  T("--color-background-success"),
  T("--color-background-warning"),
  T("--color-background-disabled"),
  T("--color-text-primary"),
  T("--color-text-secondary"),
  T("--color-text-tertiary"),
  T("--color-text-inverse"),
  T("--color-text-ghost"),
  T("--color-text-info"),
  T("--color-text-danger"),
  T("--color-text-success"),
  T("--color-text-warning"),
  T("--color-text-disabled"),
  T("--color-border-primary"),
  T("--color-border-secondary"),
  T("--color-border-tertiary"),
  T("--color-border-inverse"),
  T("--color-border-ghost"),
  T("--color-border-info"),
  T("--color-border-danger"),
  T("--color-border-success"),
  T("--color-border-warning"),
  T("--color-border-disabled"),
  T("--color-ring-primary"),
  T("--color-ring-secondary"),
  T("--color-ring-inverse"),
  T("--color-ring-info"),
  T("--color-ring-danger"),
  T("--color-ring-success"),
  T("--color-ring-warning"),
  T("--font-sans"),
  T("--font-mono"),
  T("--font-weight-normal"),
  T("--font-weight-medium"),
  T("--font-weight-semibold"),
  T("--font-weight-bold"),
  T("--font-text-xs-size"),
  T("--font-text-sm-size"),
  T("--font-text-md-size"),
  T("--font-text-lg-size"),
  T("--font-heading-xs-size"),
  T("--font-heading-sm-size"),
  T("--font-heading-md-size"),
  T("--font-heading-lg-size"),
  T("--font-heading-xl-size"),
  T("--font-heading-2xl-size"),
  T("--font-heading-3xl-size"),
  T("--font-text-xs-line-height"),
  T("--font-text-sm-line-height"),
  T("--font-text-md-line-height"),
  T("--font-text-lg-line-height"),
  T("--font-heading-xs-line-height"),
  T("--font-heading-sm-line-height"),
  T("--font-heading-md-line-height"),
  T("--font-heading-lg-line-height"),
  T("--font-heading-xl-line-height"),
  T("--font-heading-2xl-line-height"),
  T("--font-heading-3xl-line-height"),
  T("--border-radius-xs"),
  T("--border-radius-sm"),
  T("--border-radius-md"),
  T("--border-radius-lg"),
  T("--border-radius-xl"),
  T("--border-radius-full"),
  T("--border-width-regular"),
  T("--shadow-hairline"),
  T("--shadow-sm"),
  T("--shadow-md"),
  T("--shadow-lg")
]).describe("CSS variable keys available to MCP apps for theming."), pw = ye(vw.describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`), oe([E(), xr()]).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`)).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`), lE = U({
  method: T("ui/open-link"),
  params: U({ url: E().describe("URL to open in the host's browser") })
}), hw = U({ isError: Ne().optional().describe("True if the host failed to open the URL (e.g., due to security policy).") }).passthrough(), gw = U({ isError: Ne().optional().describe("True if the download failed (e.g., user cancelled or host denied).") }).passthrough(), yw = U({ isError: Ne().optional().describe("True if the host rejected or failed to deliver the message.") }).passthrough(), oE = U({
  method: T("ui/notifications/sandbox-proxy-ready"),
  params: U({})
}), _m = U({
  connectDomains: W(E()).optional().describe(`Origins for network requests (fetch/XHR/WebSocket).

- Maps to CSP \`connect-src\` directive
- Empty or omitted → no network connections (secure default)`),
  resourceDomains: W(E()).optional().describe("Origins for static resources (images, scripts, stylesheets, fonts, media).\n\n- Maps to CSP `img-src`, `script-src`, `style-src`, `font-src`, `media-src` directives\n- Wildcard subdomains supported: `https://*.example.com`\n- Empty or omitted → no network resources (secure default)"),
  frameDomains: W(E()).optional().describe("Origins for nested iframes.\n\n- Maps to CSP `frame-src` directive\n- Empty or omitted → no nested iframes allowed (`frame-src 'none'`)"),
  baseUriDomains: W(E()).optional().describe("Allowed base URIs for the document.\n\n- Maps to CSP `base-uri` directive\n- Empty or omitted → only same origin allowed (`base-uri 'self'`)")
}), bm = U({
  camera: U({}).optional().describe("Request camera access.\n\nMaps to Permission Policy `camera` feature."),
  microphone: U({}).optional().describe("Request microphone access.\n\nMaps to Permission Policy `microphone` feature."),
  geolocation: U({}).optional().describe("Request geolocation access.\n\nMaps to Permission Policy `geolocation` feature."),
  clipboardWrite: U({}).optional().describe("Request clipboard write access.\n\nMaps to Permission Policy `clipboard-write` feature.")
}), uE = U({
  method: T("ui/notifications/size-changed"),
  params: U({
    width: ie().optional().describe("New width in pixels."),
    height: ie().optional().describe("New height in pixels.")
  })
}), _w = U({
  method: T("ui/notifications/tool-input"),
  params: U({ arguments: ye(E(), Ue().describe("Complete tool call arguments as key-value pairs.")).optional().describe("Complete tool call arguments as key-value pairs.") })
}), bw = U({
  method: T("ui/notifications/tool-input-partial"),
  params: U({ arguments: ye(E(), Ue().describe("Partial tool call arguments (incomplete, may change).")).optional().describe("Partial tool call arguments (incomplete, may change).") })
}), Sw = U({
  method: T("ui/notifications/tool-cancelled"),
  params: U({ reason: E().optional().describe('Optional reason for the cancellation (e.g., "user action", "timeout").') })
}), $w = U({ fonts: E().optional() }), zw = U({
  variables: pw.optional().describe("CSS variables for theming the app."),
  css: $w.optional().describe("CSS blocks that apps can inject.")
}), Tw = U({
  method: T("ui/resource-teardown"),
  params: U({})
}), cE = ye(E(), Ue()), Rg = U({
  text: U({}).optional().describe("Host supports text content blocks."),
  image: U({}).optional().describe("Host supports image content blocks."),
  audio: U({}).optional().describe("Host supports audio content blocks."),
  resource: U({}).optional().describe("Host supports resource content blocks."),
  resourceLink: U({}).optional().describe("Host supports resource link content blocks."),
  structuredContent: U({}).optional().describe("Host supports structured content.")
}), sE = U({
  method: T("ui/notifications/request-teardown"),
  params: U({}).optional()
}), ww = U({
  experimental: U({}).optional().describe("Experimental features (structure TBD)."),
  openLinks: U({}).optional().describe("Host supports opening external URLs."),
  downloadFile: U({}).optional().describe("Host supports file downloads via ui/download-file."),
  serverTools: U({ listChanged: Ne().optional().describe("Host supports tools/list_changed notifications.") }).optional().describe("Host can proxy tool calls to the MCP server."),
  serverResources: U({ listChanged: Ne().optional().describe("Host supports resources/list_changed notifications.") }).optional().describe("Host can proxy resource reads to the MCP server."),
  logging: U({}).optional().describe("Host accepts log messages."),
  sandbox: U({
    permissions: bm.optional().describe("Permissions granted by the host (camera, microphone, geolocation)."),
    csp: _m.optional().describe("CSP domains approved by the host.")
  }).optional().describe("Sandbox configuration applied by the host."),
  updateModelContext: Rg.optional().describe("Host accepts context updates (ui/update-model-context) to be included in the model's context for future turns."),
  message: Rg.optional().describe("Host supports receiving content messages (ui/message) from the view."),
  sampling: U({ tools: U({}).optional().describe("Host supports tool use via `tools` and `toolChoice` parameters.") }).optional().describe("Host supports LLM sampling (sampling/createMessage) from the view.\nMirrors the MCP `ClientCapabilities.sampling` shape so hosts can pass it through.")
}), Ew = U({
  experimental: U({}).optional().describe("Experimental features (structure TBD)."),
  tools: U({ listChanged: Ne().optional().describe("App supports tools/list_changed notifications.") }).optional().describe("App exposes MCP-style tools that the host can call."),
  availableDisplayModes: W(Ar).optional().describe("Display modes the app supports.")
}), fE = U({
  method: T("ui/notifications/initialized"),
  params: U({}).optional()
}), dE = U({
  csp: _m.optional().describe("Content Security Policy configuration for UI resources."),
  permissions: bm.optional().describe("Sandbox permissions requested by the UI resource."),
  domain: E().optional().describe(`Dedicated origin for view sandbox.

Useful when views need stable, dedicated origins for OAuth callbacks, CORS policies, or API key allowlists.

**Host-dependent:** The format and validation rules for this field are determined by each host. Servers MUST consult host-specific documentation for the expected domain format. Common patterns include:
- Hash-based subdomains (e.g., \`{hash}.claudemcpcontent.com\`)
- URL-derived subdomains (e.g., \`www-example-com.oaiusercontent.com\`)

If omitted, host uses default sandbox origin (typically per-conversation).`),
  prefersBorder: Ne().optional().describe(`Visual boundary preference - true if view prefers a visible border.

Boolean requesting whether a visible border and background is provided by the host. Specifying an explicit value for this is recommended because hosts' defaults may vary.

- \`true\`: request visible border + background
- \`false\`: request no visible border + background
- omitted: host decides border`)
}), mE = U({
  method: T("ui/request-display-mode"),
  params: U({ mode: Ar.describe("The display mode being requested.") })
}), kw = U({ mode: Ar.describe("The display mode that was actually set. May differ from requested if not supported.") }).passthrough(), Ow = oe([T("model"), T("app")]).describe("Tool visibility scope - who can access the tool."), vE = U({
  resourceUri: E().optional(),
  visibility: W(Ow).optional().describe(`Who can access this tool. Default: ["model", "app"]
- "model": Tool visible to and callable by the agent
- "app": Tool callable by the app from this server only`),
  csp: Di().optional(),
  permissions: Di().optional()
});
U({ mimeTypes: W(E()).optional().describe('Array of supported MIME types for UI resources.\nMust include `"text/html;profile=mcp-app"` for MCP Apps support.') });
var pE = U({
  method: T("ui/download-file"),
  params: U({ contents: W(oe([o0, u0])).describe("Resource contents to download — embedded (inline data) or linked (host fetches). Uses standard MCP resource types.") })
}), hE = U({
  method: T("ui/message"),
  params: U({
    role: T("user").describe('Message role, currently only "user" is supported.'),
    content: W(tl).describe("Message content blocks (text, image, etc.).")
  })
}), gE = U({
  method: T("ui/notifications/sandbox-resource-ready"),
  params: U({
    html: E().describe("HTML content to load into the inner iframe."),
    sandbox: E().optional().describe("Optional override for the inner iframe's sandbox attribute."),
    csp: _m.optional().describe("CSP configuration from resource metadata."),
    permissions: bm.optional().describe("Sandbox permissions from resource metadata.")
  })
}), Nw = U({
  method: T("ui/notifications/tool-result"),
  params: Zu.describe("Standard MCP tool execution result.")
}), p0 = U({
  toolInfo: U({
    id: Xr.optional().describe("JSON-RPC id of the tools/call request."),
    tool: ym.describe("Tool definition including name, inputSchema, etc.")
  }).optional().describe("Metadata of the tool call that instantiated this App."),
  theme: mw.optional().describe("Current color theme preference."),
  styles: zw.optional().describe("Style configuration for theming the app."),
  displayMode: Ar.optional().describe("How the UI is currently displayed."),
  availableDisplayModes: W(Ar).optional().describe("Display modes the host supports."),
  containerDimensions: oe([U({ height: ie().describe("Fixed container height in pixels.") }), U({ maxHeight: oe([ie(), xr()]).optional().describe("Maximum container height in pixels.") })]).and(oe([U({ width: ie().describe("Fixed container width in pixels.") }), U({ maxWidth: oe([ie(), xr()]).optional().describe("Maximum container width in pixels.") })])).optional().describe(`Container dimensions. Represents the dimensions of the iframe or other
container holding the app. Specify either width or maxWidth, and either height or maxHeight.`),
  locale: E().optional().describe("User's language and region preference in BCP 47 format."),
  timeZone: E().optional().describe("User's timezone in IANA format."),
  userAgent: E().optional().describe("Host application identifier."),
  platform: oe([
    T("web"),
    T("desktop"),
    T("mobile")
  ]).optional().describe("Platform type for responsive design decisions."),
  deviceCapabilities: U({
    touch: Ne().optional().describe("Whether the device supports touch input."),
    hover: Ne().optional().describe("Whether the device supports hover interactions.")
  }).optional().describe("Device input capabilities."),
  safeAreaInsets: U({
    top: ie().describe("Top safe area inset in pixels."),
    right: ie().describe("Right safe area inset in pixels."),
    bottom: ie().describe("Bottom safe area inset in pixels."),
    left: ie().describe("Left safe area inset in pixels.")
  }).optional().describe("Mobile safe area boundaries in pixels.")
}).passthrough(), Uw = U({
  method: T("ui/notifications/host-context-changed"),
  params: p0.describe("Partial context update containing only changed fields.")
}), yE = U({
  method: T("ui/update-model-context"),
  params: U({
    content: W(tl).optional().describe("Context content blocks (text, image, etc.)."),
    structuredContent: ye(E(), Ue().describe("Structured content for machine-readable context data.")).optional().describe("Structured content for machine-readable context data.")
  })
}), _E = U({
  method: T("ui/initialize"),
  params: U({
    appInfo: Du.describe("App identification (name and version)."),
    appCapabilities: Ew.describe("Features and capabilities this app provides."),
    protocolVersion: E().describe("Protocol version this app supports.")
  })
}), xw = U({
  protocolVersion: E().describe('Negotiated protocol version string (e.g., "2025-11-21").'),
  hostInfo: Du.describe("Host application identification and version."),
  hostCapabilities: ww.describe("Features and capabilities provided by the host."),
  hostContext: p0.describe("Rich context about the host environment.")
}).passthrough(), jw = { target: "draft-2020-12" };
async function Cg(n, r) {
  let o = n["~standard"];
  if (o.jsonSchema) return o.jsonSchema[r](jw);
  if (o.vendor === "zod") {
    let { z: s } = await Promise.resolve().then(() => $T);
    return s.toJSONSchema(n, { io: r });
  }
  throw Error(`Schema (vendor: ${o.vendor}) does not implement Standard JSON Schema (~standard.jsonSchema). Use a library that does (zod v4, ArkType, Valibot) or wrap your schema accordingly.`);
}
async function Mg(n, r, o = "") {
  let s = await n["~standard"].validate(r);
  if (s.issues) {
    let i = s.issues.map((u) => {
      let d = u.path?.map((g) => typeof g == "object" ? g.key : g).join(".");
      return d ? `${d}: ${u.message}` : u.message;
    }).join("; ");
    throw Error(o + i);
  }
  return s.value;
}
var Dw = class h0 extends sw {
  _appInfo;
  _capabilities;
  options;
  _hostCapabilities;
  _hostInfo;
  _hostContext;
  _registeredTools = {};
  _initializedSent = !1;
  _assertInitialized(r) {
    if (this._initializedSent) return;
    let o = `[ext-apps] App.${r}() called before connect() completed the ui/initialize handshake. Await app.connect() before calling this method, or move data loading to an ontoolresult handler.`;
    if (this.options?.strict) throw Error(o);
    console.warn(`${o}. This will throw in a future release.`);
  }
  eventSchemas = {
    toolinput: _w,
    toolinputpartial: bw,
    toolresult: Nw,
    toolcancelled: Sw,
    hostcontextchanged: Uw
  };
  static ONE_SHOT_EVENTS = /* @__PURE__ */ new Set([
    "toolinput",
    "toolinputpartial",
    "toolresult",
    "toolcancelled"
  ]);
  _everHadListener = /* @__PURE__ */ new Set();
  _assertHandlerTiming(r) {
    if (!h0.ONE_SHOT_EVENTS.has(r) || this._everHadListener.has(r) || (this._everHadListener.add(r), !this._initializedSent)) return;
    let o = `[ext-apps] "${String(r)}" handler registered after connect() completed the ui/initialize handshake. The host may have already sent this notification. Register handlers before calling app.connect().`;
    if (this.options?.strict) throw Error(o);
    console.warn(o);
  }
  setEventHandler(r, o) {
    o && this._assertHandlerTiming(r), super.setEventHandler(r, o);
  }
  addEventListener(r, o) {
    this._assertHandlerTiming(r), super.addEventListener(r, o);
  }
  onEventDispatch(r, o) {
    r === "hostcontextchanged" && (this._hostContext = {
      ...this._hostContext,
      ...o
    });
  }
  constructor(r, o = {}, s = { autoResize: !0 }) {
    super(s), this._appInfo = r, this._capabilities = o, this.options = s, s.allowUnsafeEval || ft({ jitless: !0 }), this.setRequestHandler(Au, (i) => (console.log("Received ping:", i.params), {})), this.setEventHandler("hostcontextchanged", void 0);
  }
  registerCapabilities(r) {
    if (this.transport) throw Error("Cannot register capabilities after transport is established");
    this._capabilities = cw(this._capabilities, r);
  }
  registerTool(r, o, s) {
    if (this._registeredTools[r]) throw Error(`Tool ${r} is already registered`);
    let i = this, u = () => {
      i._initializedSent && i._capabilities.tools?.listChanged && i.sendToolListChanged();
    }, d = o.inputSchema !== void 0, g = {
      title: o.title,
      description: o.description,
      inputSchema: o.inputSchema,
      outputSchema: o.outputSchema,
      annotations: o.annotations,
      _meta: o._meta,
      enabled: !0,
      enable() {
        this.enabled = !0, u();
      },
      disable() {
        this.enabled = !1, u();
      },
      update(j) {
        Object.assign(this, j), u();
      },
      remove() {
        i._registeredTools[r] === g && (delete i._registeredTools[r], u());
      },
      handler: async (j, p) => {
        if (!g.enabled) throw Error(`Tool ${r} is disabled`);
        let _;
        if (d) {
          let $ = g.inputSchema;
          _ = await s($ ? await Mg($, j ?? {}, `Invalid input for tool ${r}: `) : j ?? {}, p);
        } else _ = await s(p);
        return g.outputSchema && !_.isError && (_.structuredContent = await Mg(g.outputSchema, _.structuredContent, `Invalid output for tool ${r}: `)), _;
      }
    };
    return this._registeredTools[r] = g, !this._capabilities.tools && !this.transport && this.registerCapabilities({ tools: { listChanged: !0 } }), this.ensureToolHandlersInitialized(), u(), g;
  }
  _toolHandlersInitialized = !1;
  ensureToolHandlersInitialized() {
    this._toolHandlersInitialized || (this._toolHandlersInitialized = !0, this.oncalltool = async (r, o) => {
      let s = this._registeredTools[r.name];
      if (!s) throw Error(`Tool ${r.name} not found`);
      return s.handler(r.arguments, o);
    }, this.onlisttools = async (r, o) => ({ tools: await Promise.all(Object.entries(this._registeredTools).filter(([s, i]) => i.enabled).map(async ([s, i]) => {
      let u = {
        name: s,
        title: i.title,
        description: i.description,
        inputSchema: i.inputSchema ? await Cg(i.inputSchema, "input") : {
          type: "object",
          properties: {}
        }
      };
      return i.outputSchema && (u.outputSchema = await Cg(i.outputSchema, "output")), i.annotations && (u.annotations = i.annotations), i._meta && (u._meta = i._meta), u;
    })) }));
  }
  async sendToolListChanged(r = {}) {
    this._assertInitialized("sendToolListChanged"), await this.notification({
      method: "notifications/tools/list_changed",
      params: r
    });
  }
  getHostCapabilities() {
    return this._hostCapabilities;
  }
  getHostVersion() {
    return this._hostInfo;
  }
  getHostContext() {
    return this._hostContext;
  }
  get ontoolinput() {
    return this.getEventHandler("toolinput");
  }
  set ontoolinput(r) {
    this.setEventHandler("toolinput", r);
  }
  get ontoolinputpartial() {
    return this.getEventHandler("toolinputpartial");
  }
  set ontoolinputpartial(r) {
    this.setEventHandler("toolinputpartial", r);
  }
  get ontoolresult() {
    return this.getEventHandler("toolresult");
  }
  set ontoolresult(r) {
    this.setEventHandler("toolresult", r);
  }
  get ontoolcancelled() {
    return this.getEventHandler("toolcancelled");
  }
  set ontoolcancelled(r) {
    this.setEventHandler("toolcancelled", r);
  }
  get onhostcontextchanged() {
    return this.getEventHandler("hostcontextchanged");
  }
  set onhostcontextchanged(r) {
    this.setEventHandler("hostcontextchanged", r);
  }
  _onteardown;
  get onteardown() {
    return this._onteardown;
  }
  set onteardown(r) {
    this.warnIfRequestHandlerReplaced("onteardown", this._onteardown, r), this._onteardown = r, this.replaceRequestHandler(Tw, (o, s) => {
      if (!this._onteardown) throw Error("No onteardown handler set");
      return this._onteardown(o.params, s);
    });
  }
  _oncalltool;
  get oncalltool() {
    return this._oncalltool;
  }
  set oncalltool(r) {
    this.warnIfRequestHandlerReplaced("oncalltool", this._oncalltool, r), this._oncalltool = r, this.replaceRequestHandler(s0, (o, s) => {
      if (!this._oncalltool) throw Error("No oncalltool handler set");
      return this._oncalltool(o.params, s);
    });
  }
  _onlisttools;
  get onlisttools() {
    return this._onlisttools;
  }
  set onlisttools(r) {
    this.warnIfRequestHandlerReplaced("onlisttools", this._onlisttools, r), this._onlisttools = r, this.replaceRequestHandler(c0, (o, s) => {
      if (!this._onlisttools) throw Error("No onlisttools handler set");
      return this._onlisttools(o.params, s);
    });
  }
  assertCapabilityForMethod(r) {
    switch (r) {
      case "sampling/createMessage":
        if (!this._hostCapabilities?.sampling) throw Error(`Host does not support sampling (required for ${r})`);
        break;
    }
  }
  assertRequestHandlerCapability(r) {
    switch (r) {
      case "tools/call":
      case "tools/list":
        if (!this._capabilities.tools) throw Error(`Client does not support tool capability (required for ${r})`);
        return;
      case "ping":
      case "ui/resource-teardown":
        return;
      default:
        throw Error(`No handler for method ${r} registered`);
    }
  }
  assertNotificationCapability(r) {
  }
  assertTaskCapability(r) {
    throw Error("Tasks are not supported in MCP Apps");
  }
  assertTaskHandlerCapability(r) {
    throw Error("Task handlers are not supported in MCP Apps");
  }
  async callServerTool(r, o) {
    if (this._assertInitialized("callServerTool"), typeof r == "string") throw Error(`callServerTool() expects an object as its first argument, but received a string ("${r}"). Did you mean: callServerTool({ name: "${r}", arguments: { ... } })?`);
    return await this.request({
      method: "tools/call",
      params: r
    }, Zu, {
      onprogress: () => {
      },
      resetTimeoutOnProgress: !0,
      ...o
    });
  }
  async readServerResource(r, o) {
    return this._assertInitialized("readServerResource"), await this.request({
      method: "resources/read",
      params: r
    }, l0, o);
  }
  async listServerResources(r, o) {
    return this._assertInitialized("listServerResources"), await this.request({
      method: "resources/list",
      params: r
    }, r0, o);
  }
  async createSamplingMessage(r, o) {
    this._assertInitialized("createSamplingMessage");
    let s = r.tools ? m0 : d0;
    return await this.request({
      method: "sampling/createMessage",
      params: r
    }, s, o);
  }
  sendMessage(r, o) {
    return this._assertInitialized("sendMessage"), this.request({
      method: "ui/message",
      params: r
    }, yw, o);
  }
  sendLog(r) {
    return this.notification({
      method: "notifications/message",
      params: r
    });
  }
  updateModelContext(r, o) {
    return this._assertInitialized("updateModelContext"), this.request({
      method: "ui/update-model-context",
      params: r
    }, im, o);
  }
  openLink(r, o) {
    return this._assertInitialized("openLink"), this.request({
      method: "ui/open-link",
      params: r
    }, hw, o);
  }
  sendOpenLink = this.openLink;
  downloadFile(r, o) {
    return this._assertInitialized("downloadFile"), this.request({
      method: "ui/download-file",
      params: r
    }, gw, o);
  }
  requestTeardown(r = {}) {
    return this.notification({
      method: "ui/notifications/request-teardown",
      params: r
    });
  }
  requestDisplayMode(r, o) {
    return this._assertInitialized("requestDisplayMode"), this.request({
      method: "ui/request-display-mode",
      params: r
    }, kw, o);
  }
  sendSizeChanged(r) {
    return this.notification({
      method: "ui/notifications/size-changed",
      params: r
    });
  }
  setupSizeChangedNotifications() {
    let r = !1, o = 0, s = 0, i = () => {
      r || (r = !0, requestAnimationFrame(() => {
        r = !1;
        let d = document.documentElement, g = d.style.height;
        d.style.height = "max-content";
        let j = Math.ceil(d.getBoundingClientRect().height);
        d.style.height = g;
        let p = Math.ceil(window.innerWidth);
        (p !== o || j !== s) && (o = p, s = j, this.sendSizeChanged({
          width: p,
          height: j
        }));
      }));
    };
    i();
    let u = new ResizeObserver(i);
    return u.observe(document.documentElement), u.observe(document.body), () => u.disconnect();
  }
  async connect(r = new dw(window.parent, window.parent), o) {
    if (this.transport) throw Error("App is already connected. Call close() before connecting again.");
    this._initializedSent = !1, await super.connect(r);
    try {
      let s = await this.request({
        method: "ui/initialize",
        params: {
          appCapabilities: this._capabilities,
          appInfo: this._appInfo,
          protocolVersion: fw
        }
      }, xw, o);
      if (s === void 0) throw Error(`Server sent invalid initialize result: ${s}`);
      this._hostCapabilities = s.hostCapabilities, this._hostInfo = s.hostInfo, this._hostContext = s.hostContext, await this.notification({ method: "ui/notifications/initialized" }), this._initializedSent = !0, this.options?.autoResize && this.setupSizeChangedNotifications();
    } catch (s) {
      throw this.close(), s;
    }
  }
};
async function Aw(n) {
  if (typeof window > "u" || window.parent === window) return Ig("standalone");
  typeof window < "u" && (window.__MCP_RUNTIME_CONNECTED__ = !0);
  try {
    const r = new Dw({
      name: n.name,
      version: n.version
    }, n.capabilities ?? {}, {
      autoResize: !0,
      strict: !1,
      ...n.appOptions
    });
    return Cw(r, n.handlers), await Mw(r.connect(), n.timeoutMs ?? 1e4, "MCP Apps host connection timed out"), {
      status: "connected",
      app: r,
      getHostContext() {
        return r.getHostContext();
      },
      getHostCapabilities() {
        return r.getHostCapabilities();
      },
      getHostInfo() {
        return r.getHostVersion();
      },
      async requestHostCompletion(o, s) {
        return g0((await r.createSamplingMessage({
          messages: [{
            role: "user",
            content: {
              type: "text",
              text: o
            }
          }],
          maxTokens: 320,
          systemPrompt: s
        })).content);
      },
      createSamplingMessage(o) {
        return r.createSamplingMessage(o);
      },
      sendHostMessage(o, s) {
        return r.sendMessage(Zw(o, s));
      },
      sendMessage(o) {
        return r.sendMessage(o);
      },
      async sendLog(o, s) {
        await r.sendLog({
          level: o,
          data: s
        });
      },
      updateModelContext(o) {
        return r.updateModelContext(Rw(o));
      },
      callServerTool(o, s = {}) {
        return r.callServerTool({
          name: o,
          arguments: s
        });
      },
      callServerToolWithParams(o) {
        return r.callServerTool(o);
      },
      readServerResource(o) {
        return r.readServerResource(typeof o == "string" ? { uri: o } : o);
      },
      listServerResources(o) {
        return r.listServerResources(o);
      },
      openLink(o) {
        return r.openLink(typeof o == "string" ? { url: o } : o);
      },
      downloadFile(o) {
        return r.downloadFile(o);
      },
      requestDisplayMode(o) {
        return r.requestDisplayMode(typeof o == "string" ? { mode: o } : o);
      },
      requestTeardown() {
        return r.requestTeardown();
      },
      sendSizeChanged(o) {
        return r.sendSizeChanged(o);
      },
      async dispose() {
        await r.close?.();
      }
    };
  } catch (r) {
    return Ig("error", r);
  }
}
function Ig(n, r) {
  return {
    status: n,
    error: r instanceof Error ? r : r ? new Error(String(r)) : void 0,
    getHostContext() {
    },
    getHostCapabilities() {
    },
    getHostInfo() {
    },
    requestHostCompletion() {
      return Promise.reject(/* @__PURE__ */ new Error("No MCP Apps host model runtime is connected"));
    },
    createSamplingMessage() {
      return Promise.reject(/* @__PURE__ */ new Error("No MCP Apps host sampling runtime is connected"));
    },
    sendHostMessage() {
      return Promise.reject(/* @__PURE__ */ new Error("No MCP Apps host message runtime is connected"));
    },
    sendMessage() {
      return Promise.reject(/* @__PURE__ */ new Error("No MCP Apps host message runtime is connected"));
    },
    sendLog() {
      return Promise.resolve();
    },
    updateModelContext() {
      return Promise.resolve();
    },
    callServerTool() {
      return Promise.reject(/* @__PURE__ */ new Error("No MCP Apps host tool bridge is connected"));
    },
    callServerToolWithParams() {
      return Promise.reject(/* @__PURE__ */ new Error("No MCP Apps host tool bridge is connected"));
    },
    readServerResource() {
      return Promise.reject(/* @__PURE__ */ new Error("No MCP Apps host resource bridge is connected"));
    },
    listServerResources() {
      return Promise.reject(/* @__PURE__ */ new Error("No MCP Apps host resource bridge is connected"));
    },
    openLink() {
      return Promise.reject(/* @__PURE__ */ new Error("No MCP Apps host open-link bridge is connected"));
    },
    downloadFile() {
      return Promise.reject(/* @__PURE__ */ new Error("No MCP Apps host download bridge is connected"));
    },
    requestDisplayMode() {
      return Promise.reject(/* @__PURE__ */ new Error("No MCP Apps host display-mode bridge is connected"));
    },
    requestTeardown() {
      return Promise.resolve();
    },
    sendSizeChanged() {
      return Promise.resolve();
    },
    dispose() {
      return Promise.resolve();
    }
  };
}
function Zw(n, r) {
  return {
    role: "user",
    content: [{
      type: "text",
      text: r ? `${r}

${n}` : n
    }]
  };
}
function Rw(n) {
  return typeof n != "string" ? n : { content: [{
    type: "text",
    text: n
  }] };
}
function Cw(n, r = {}) {
  n.ontoolinput = r.onToolInput, n.ontoolinputpartial = r.onToolInputPartial, n.ontoolresult = r.onToolResult, n.ontoolcancelled = r.onToolCancelled, n.onhostcontextchanged = r.onHostContextChanged, r.onTeardown && (n.onteardown = async () => r.onTeardown?.() ?? {});
}
async function Mw(n, r, o) {
  let s;
  try {
    return await Promise.race([n, new Promise((i, u) => {
      s = setTimeout(() => u(new Error(o)), r);
    })]);
  } finally {
    s && clearTimeout(s);
  }
}
function g0(n) {
  return typeof n == "string" ? n : n ? Array.isArray(n) ? n.map((r) => g0(r)).filter(Boolean).join(`
`) : typeof n == "object" && "text" in n && typeof n.text == "string" ? n.text : "" : "";
}
function Iw(n) {
  return n instanceof Error ? {
    name: n.name,
    message: n.message,
    stack: n.stack
  } : { message: typeof n == "string" ? n : "Unknown runtime error" };
}
function qg({ app: n, error: r, logger: o, source: s = "runtime", metadata: i }) {
  const u = {
    level: "error",
    message: `${n.name} failed in ${s}`,
    appId: n.id,
    source: s,
    error: Iw(r),
    metadata: i,
    timestamp: Date.now()
  };
  return ef.emit(tf.APP_ERROR, n.id, u), o?.log(u), u;
}
function qw(n = y0()) {
  return typeof n?.modelContext?.registerTool == "function";
}
function Hw(n, r = {}, o = y0()) {
  if (!qw(o)) return {
    supported: !1,
    unregister: () => {
    }
  };
  const s = r.signal ? void 0 : new AbortController(), i = r.signal ?? s?.signal;
  try {
    return o.modelContext.registerTool(n, {
      ...r,
      signal: i
    }), {
      supported: !0,
      unregister: () => s?.abort()
    };
  } catch (u) {
    return console.error(`[Platform SDK] WebMCP registration for tool "${n.name}" failed:`, u), {
      supported: !1,
      unregister: () => {
      }
    };
  }
}
function y0() {
  return typeof document > "u" ? void 0 : document;
}
var _0 = /* @__PURE__ */ new Map();
function Lw(n, r, o = {}) {
  const s = customElements.get(n);
  if (s) return s;
  class i extends HTMLElement {
    static observedAttributes = o.observedAttributes ?? [];
    cleanup;
    async connectedCallback() {
      const d = this.createContext();
      console.log(`[Platform SDK] connectedCallback triggered for: ${d.app.id}`);
      let g = null;
      const j = (typeof window < "u" ? window.__MICRO_APP_CONTEXT__ : null)?.app?.capabilities?.aiNative === !0, p = n.toLowerCase(), _ = _0.get(p);
      if (typeof window < "u" && _ && _.mcp && _.tools) for (const [$, y] of Object.entries(_.tools)) try {
        Hw({
          name: $,
          description: y.description,
          inputSchema: y.inputSchema,
          execute: y.execute
        });
      } catch (R) {
        console.warn(`[Platform SDK] Failed to register WebMCP tool ${$}:`, R);
      }
      typeof window < "u" && window.parent !== window && !j && !window.__MCP_RUNTIME_CONNECTED__ && (!_ || _.mcp === !0) && (console.log(`[Platform SDK] Auto-connecting to MCP runtime for: ${d.app.id}...`), g = Aw({
        name: _?.name ?? d.app.name,
        version: _?.version ?? d.app.version ?? "1.0.0",
        capabilities: _?.capabilities ?? {
          sampling: {},
          serverTools: {},
          modelContext: {}
        },
        handlers: _?.handlers ?? {
          onToolInput($) {
            console.log("[Platform SDK] MCP Tool input received:", $);
          },
          onToolResult($) {
            console.log("[Platform SDK] MCP Tool result received:", $);
          },
          async onTeardown() {
            return console.log("[Platform SDK] MCP Teardown event received"), { appId: _?.id ?? d.app.id };
          }
        }
      }).then(($) => (console.log(`[Platform SDK] connectOfficialMcpAppRuntime finished for: ${d.app.id}. Status:`, $.status), $)).catch(($) => (console.warn(`[Platform SDK] Auto-connecting to MCP runtime for ${d.app.id} failed:`, $), null)));
      try {
        const $ = await r.mount(this, d);
        this.cleanup = typeof $ == "function" ? $ : void 0, await Bw(), g && await g, this.dispatchEvent(new CustomEvent("micro-app:ready", {
          bubbles: !0,
          composed: !0,
          detail: {
            appId: d.app.id,
            tagName: n,
            timestamp: Date.now()
          }
        })), ef.emit(tf.APP_LOADED, d.app.id, { tagName: n });
      } catch ($) {
        throw qg({
          app: d.app,
          error: $,
          logger: o.logger,
          source: "micro-app-connected-callback",
          metadata: { tagName: n }
        }), $;
      }
    }
    disconnectedCallback() {
      window.setTimeout(() => {
        try {
          this.cleanup?.(), r.unmount?.(this), ef.emit(tf.APP_UNLOADED, this.getAttribute("data-app-name") ?? n, { tagName: n });
        } catch (d) {
          qg({
            app: {
              id: this.getAttribute("data-app-name") ?? n,
              name: this.getAttribute("data-app-name") ?? n
            },
            error: d,
            logger: o.logger,
            source: "micro-app-disconnected-callback",
            metadata: { tagName: n }
          });
        }
      }, 0);
    }
    createContext() {
      return {
        app: {
          id: this.getAttribute("data-app-name") ?? n,
          name: this.getAttribute("data-app-name") ?? n,
          description: "",
          domain: "",
          icon: "",
          accent: "",
          status: "Ready",
          framework: "custom",
          rendering: ["csr"],
          entryUrl: "",
          manifestUrl: "",
          runtime: {
            type: "web-component",
            tagName: n
          },
          version: this.getAttribute("data-version") ?? "0.0.0",
          owner: "",
          permissions: []
        },
        shellOrigin: this.getAttribute("data-shell-origin") ?? window.location.origin
      };
    }
  }
  return customElements.define(n, i), i;
}
function Bw() {
  return new Promise((n) => {
    requestAnimationFrame(() => requestAnimationFrame(() => n()));
  });
}
function Gw(n) {
  return typeof window > "u" ? { options: n } : (_0.set(n.tagName.toLowerCase(), n), {
    options: n,
    customElementClass: Lw(n.tagName, { mount(r, o) {
      return n.mount(r, o);
    } }, { observedAttributes: [
      "data-theme",
      "data-tenant",
      "data-locale"
    ] })
  });
}
var Yw = /* @__PURE__ */ vn(((n) => {
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(i, u, d) {
    var g = null;
    if (d !== void 0 && (g = "" + d), u.key !== void 0 && (g = "" + u.key), "key" in u) {
      d = {};
      for (var j in u) j !== "key" && (d[j] = u[j]);
    } else d = u;
    return u = d.ref, {
      $$typeof: r,
      type: i,
      key: g,
      ref: u !== void 0 ? u : null,
      props: d
    };
  }
  n.jsx = s, n.jsxs = s;
})), Qw = /* @__PURE__ */ vn(((n, r) => {
  r.exports = Yw();
})), Ze = Qw(), Hg = [
  {
    id: "CUS-1042",
    name: "Northstar Retail",
    segment: "Enterprise",
    health: 94,
    mrr: 18400,
    owner: "Aarav"
  },
  {
    id: "CUS-1188",
    name: "Nimbus Health",
    segment: "Growth",
    health: 82,
    mrr: 7200,
    owner: "Maya"
  },
  {
    id: "CUS-1201",
    name: "Orbit Labs",
    segment: "Startup",
    health: 68,
    mrr: 2300,
    owner: "Ishan"
  }
];
function Vw() {
  const [n, r] = (0, Ws.useState)("All"), o = (0, Ws.useMemo)(() => Hg.filter((s) => n === "All" || s.segment === n), [n]);
  return (0, Ws.useEffect)(() => {
    window.dispatchEvent(new CustomEvent("platform-event", { detail: {
      type: "app:loaded",
      source: "customer",
      payload: { count: Hg.length },
      timestamp: Date.now()
    } }));
  }, []), /* @__PURE__ */ (0, Ze.jsxs)("section", {
    className: "micro-app-container",
    children: [
      /* @__PURE__ */ (0, Ze.jsxs)("header", {
        className: "micro-app-header",
        children: [
          /* @__PURE__ */ (0, Ze.jsx)("span", { children: "CRM" }),
          /* @__PURE__ */ (0, Ze.jsx)("h1", { children: "Customer Operations" }),
          /* @__PURE__ */ (0, Ze.jsx)("p", { children: "Account health, ownership, and lifecycle visibility." })
        ]
      }),
      /* @__PURE__ */ (0, Ze.jsx)("div", {
        className: "toolbar",
        children: [
          "All",
          "Enterprise",
          "Growth",
          "Startup"
        ].map((s) => /* @__PURE__ */ (0, Ze.jsx)("button", {
          className: n === s ? "chip active" : "chip",
          onClick: () => r(s),
          children: s
        }, s))
      }),
      /* @__PURE__ */ (0, Ze.jsxs)("div", {
        className: "stats-grid",
        children: [
          /* @__PURE__ */ (0, Ze.jsxs)("div", {
            className: "stat-card",
            children: [/* @__PURE__ */ (0, Ze.jsx)("div", {
              className: "stat-label",
              children: "Total MRR"
            }), /* @__PURE__ */ (0, Ze.jsxs)("div", {
              className: "stat-value",
              children: ["$", o.reduce((s, i) => s + i.mrr, 0).toLocaleString()]
            })]
          }),
          /* @__PURE__ */ (0, Ze.jsxs)("div", {
            className: "stat-card",
            children: [/* @__PURE__ */ (0, Ze.jsx)("div", {
              className: "stat-label",
              children: "Avg Health"
            }), /* @__PURE__ */ (0, Ze.jsxs)("div", {
              className: "stat-value",
              children: [Math.round(o.reduce((s, i) => s + i.health, 0) / o.length), "%"]
            })]
          }),
          /* @__PURE__ */ (0, Ze.jsxs)("div", {
            className: "stat-card",
            children: [/* @__PURE__ */ (0, Ze.jsx)("div", {
              className: "stat-label",
              children: "Accounts"
            }), /* @__PURE__ */ (0, Ze.jsx)("div", {
              className: "stat-value",
              children: o.length
            })]
          })
        ]
      }),
      /* @__PURE__ */ (0, Ze.jsx)("div", {
        className: "list-section",
        children: o.map((s) => /* @__PURE__ */ (0, Ze.jsxs)("article", {
          className: "row-card",
          children: [/* @__PURE__ */ (0, Ze.jsxs)("div", { children: [/* @__PURE__ */ (0, Ze.jsx)("strong", { children: s.name }), /* @__PURE__ */ (0, Ze.jsxs)("span", { children: [
            s.id,
            " · ",
            s.segment,
            " · Owner ",
            s.owner
          ] })] }), /* @__PURE__ */ (0, Ze.jsxs)("div", {
            className: "health",
            children: [/* @__PURE__ */ (0, Ze.jsxs)("span", { children: [s.health, "%"] }), /* @__PURE__ */ (0, Ze.jsx)("div", { children: /* @__PURE__ */ (0, Ze.jsx)("i", { style: { width: `${s.health}%` } }) })]
          })]
        }, s.id))
      })
    ]
  });
}
var Jw = Gw({
  id: "customer",
  name: "Customer App",
  tagName: "micro-customer-app",
  framework: "react",
  rendering: ["csr"],
  mcp: !0,
  mount(n) {
    const r = X1.createRoot(n);
    return r.render(/* @__PURE__ */ (0, Ze.jsx)(Vw, {})), () => r.unmount();
  }
}), bE = Jw.customElementClass;
export {
  bE as MicroCustomerApp
};
