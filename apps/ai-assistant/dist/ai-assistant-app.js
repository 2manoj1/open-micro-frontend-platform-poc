var V1 = Object.create, Ul = Object.defineProperty, J1 = Object.getOwnPropertyDescriptor, X1 = Object.getOwnPropertyNames, P1 = Object.getPrototypeOf, K1 = Object.prototype.hasOwnProperty, hn = (n, r) => () => (r || (n((r = { exports: {} }).exports, r), n = null), r.exports), Cn = (n, r) => {
  let l = {};
  for (var s in n)
    Ul(l, s, {
      get: n[s],
      enumerable: !0
    });
  return r || Ul(l, Symbol.toStringTag, { value: "Module" }), l;
}, W1 = (n, r, l, s) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (var i = X1(r), u = 0, d = i.length, h; u < d; u++)
      h = i[u], !K1.call(n, h) && h !== l && Ul(n, h, {
        get: ((w) => r[w]).bind(null, h),
        enumerable: !(s = J1(r, h)) || s.enumerable
      });
  return n;
}, Xg = (n, r, l) => (l = n != null ? V1(P1(n)) : {}, W1(r || !n || !n.__esModule ? Ul(l, "default", {
  value: n,
  enumerable: !0
}) : l, n)), za = /* @__PURE__ */ ((n) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(n, { get: (r, l) => (typeof require < "u" ? require : r)[l] }) : n)(function(n) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Calling `require` for "' + n + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), F1 = /* @__PURE__ */ hn(((n) => {
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), i = /* @__PURE__ */ Symbol.for("react.strict_mode"), u = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), h = /* @__PURE__ */ Symbol.for("react.context"), w = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), $ = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), Z = Symbol.iterator;
  function q(S) {
    return S === null || typeof S != "object" ? null : (S = Z && S[Z] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var W = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, te = Object.assign, ne = {};
  function K(S, M, L) {
    this.props = S, this.context = M, this.refs = ne, this.updater = L || W;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(S, M) {
    if (typeof S != "object" && typeof S != "function" && S != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, S, M, "setState");
  }, K.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function le() {
  }
  le.prototype = K.prototype;
  function ue(S, M, L) {
    this.props = S, this.context = M, this.refs = ne, this.updater = L || W;
  }
  var it = ue.prototype = new le();
  it.constructor = ue, te(it, K.prototype), it.isPureReactComponent = !0;
  var Ke = Array.isArray;
  function Q() {
  }
  var J = {
    H: null,
    A: null,
    T: null,
    S: null
  }, ce = Object.prototype.hasOwnProperty;
  function at(S, M, L) {
    var P = L.ref;
    return {
      $$typeof: r,
      type: S,
      key: M,
      ref: P !== void 0 ? P : null,
      props: L
    };
  }
  function Lt(S, M) {
    return at(S.type, M, S.props);
  }
  function We(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }
  function fn(S) {
    var M = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + S.replace(/[=:]/g, function(L) {
      return M[L];
    });
  }
  var Ii = /\/+/g;
  function rn(S, M) {
    return typeof S == "object" && S !== null && S.key != null ? fn("" + S.key) : M.toString(36);
  }
  function G(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(Q, Q) : (S.status = "pending", S.then(function(M) {
          S.status === "pending" && (S.status = "fulfilled", S.value = M);
        }, function(M) {
          S.status === "pending" && (S.status = "rejected", S.reason = M);
        })), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function I(S, M, L, P, pe) {
    var ve = typeof S;
    (ve === "undefined" || ve === "boolean") && (S = null);
    var Oe = !1;
    if (S === null) Oe = !0;
    else switch (ve) {
      case "bigint":
      case "string":
      case "number":
        Oe = !0;
        break;
      case "object":
        switch (S.$$typeof) {
          case r:
          case l:
            Oe = !0;
            break;
          case $:
            return Oe = S._init, I(Oe(S._payload), M, L, P, pe);
        }
    }
    if (Oe) return pe = pe(S), Oe = P === "" ? "." + rn(S, 0) : P, Ke(pe) ? (L = "", Oe != null && (L = Oe.replace(Ii, "$&/") + "/"), I(pe, M, L, "", function(Ca) {
      return Ca;
    })) : pe != null && (We(pe) && (pe = Lt(pe, L + (pe.key == null || S && S.key === pe.key ? "" : ("" + pe.key).replace(Ii, "$&/") + "/") + Oe)), M.push(pe)), 1;
    Oe = 0;
    var _t = P === "" ? "." : P + ":";
    if (Ke(S)) for (var Ve = 0; Ve < S.length; Ve++) P = S[Ve], ve = _t + rn(P, Ve), Oe += I(P, M, L, ve, pe);
    else if (Ve = q(S), typeof Ve == "function") for (S = Ve.call(S), Ve = 0; !(P = S.next()).done; ) P = P.value, ve = _t + rn(P, Ve++), Oe += I(P, M, L, ve, pe);
    else if (ve === "object") {
      if (typeof S.then == "function") return I(G(S), M, L, P, pe);
      throw M = String(S), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
    }
    return Oe;
  }
  function B(S, M, L) {
    if (S == null) return S;
    var P = [], pe = 0;
    return I(S, P, "", "", function(ve) {
      return M.call(L, ve, pe++);
    }), P;
  }
  function we(S) {
    if (S._status === -1) {
      var M = S._result;
      M = M(), M.then(function(L) {
        (S._status === 0 || S._status === -1) && (S._status = 1, S._result = L);
      }, function(L) {
        (S._status === 0 || S._status === -1) && (S._status = 2, S._result = L);
      }), S._status === -1 && (S._status = 0, S._result = M);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var He = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var M = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(M)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, Nt = {
    map: B,
    forEach: function(S, M, L) {
      B(S, function() {
        M.apply(this, arguments);
      }, L);
    },
    count: function(S) {
      var M = 0;
      return B(S, function() {
        M++;
      }), M;
    },
    toArray: function(S) {
      return B(S, function(M) {
        return M;
      }) || [];
    },
    only: function(S) {
      if (!We(S)) throw Error("React.Children.only expected to receive a single React element child.");
      return S;
    }
  };
  n.Activity = y, n.Children = Nt, n.Component = K, n.Fragment = s, n.Profiler = u, n.PureComponent = ue, n.StrictMode = i, n.Suspense = v, n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J, n.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return J.H.useMemoCache(S);
    }
  }, n.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, n.cacheSignal = function() {
    return null;
  }, n.cloneElement = function(S, M, L) {
    if (S == null) throw Error("The argument must be a React element, but you passed " + S + ".");
    var P = te({}, S.props), pe = S.key;
    if (M != null) for (ve in M.key !== void 0 && (pe = "" + M.key), M) !ce.call(M, ve) || ve === "key" || ve === "__self" || ve === "__source" || ve === "ref" && M.ref === void 0 || (P[ve] = M[ve]);
    var ve = arguments.length - 2;
    if (ve === 1) P.children = L;
    else if (1 < ve) {
      for (var Oe = Array(ve), _t = 0; _t < ve; _t++) Oe[_t] = arguments[_t + 2];
      P.children = Oe;
    }
    return at(S.type, pe, P);
  }, n.createContext = function(S) {
    return S = {
      $$typeof: h,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: d,
      _context: S
    }, S;
  }, n.createElement = function(S, M, L) {
    var P, pe = {}, ve = null;
    if (M != null) for (P in M.key !== void 0 && (ve = "" + M.key), M) ce.call(M, P) && P !== "key" && P !== "__self" && P !== "__source" && (pe[P] = M[P]);
    var Oe = arguments.length - 2;
    if (Oe === 1) pe.children = L;
    else if (1 < Oe) {
      for (var _t = Array(Oe), Ve = 0; Ve < Oe; Ve++) _t[Ve] = arguments[Ve + 2];
      pe.children = _t;
    }
    if (S && S.defaultProps) for (P in Oe = S.defaultProps, Oe) pe[P] === void 0 && (pe[P] = Oe[P]);
    return at(S, ve, pe);
  }, n.createRef = function() {
    return { current: null };
  }, n.forwardRef = function(S) {
    return {
      $$typeof: w,
      render: S
    };
  }, n.isValidElement = We, n.lazy = function(S) {
    return {
      $$typeof: $,
      _payload: {
        _status: -1,
        _result: S
      },
      _init: we
    };
  }, n.memo = function(S, M) {
    return {
      $$typeof: b,
      type: S,
      compare: M === void 0 ? null : M
    };
  }, n.startTransition = function(S) {
    var M = J.T, L = {};
    J.T = L;
    try {
      var P = S(), pe = J.S;
      pe !== null && pe(L, P), typeof P == "object" && P !== null && typeof P.then == "function" && P.then(Q, He);
    } catch (ve) {
      He(ve);
    } finally {
      M !== null && L.types !== null && (M.types = L.types), J.T = M;
    }
  }, n.unstable_useCacheRefresh = function() {
    return J.H.useCacheRefresh();
  }, n.use = function(S) {
    return J.H.use(S);
  }, n.useActionState = function(S, M, L) {
    return J.H.useActionState(S, M, L);
  }, n.useCallback = function(S, M) {
    return J.H.useCallback(S, M);
  }, n.useContext = function(S) {
    return J.H.useContext(S);
  }, n.useDebugValue = function() {
  }, n.useDeferredValue = function(S, M) {
    return J.H.useDeferredValue(S, M);
  }, n.useEffect = function(S, M) {
    return J.H.useEffect(S, M);
  }, n.useEffectEvent = function(S) {
    return J.H.useEffectEvent(S);
  }, n.useId = function() {
    return J.H.useId();
  }, n.useImperativeHandle = function(S, M, L) {
    return J.H.useImperativeHandle(S, M, L);
  }, n.useInsertionEffect = function(S, M) {
    return J.H.useInsertionEffect(S, M);
  }, n.useLayoutEffect = function(S, M) {
    return J.H.useLayoutEffect(S, M);
  }, n.useMemo = function(S, M) {
    return J.H.useMemo(S, M);
  }, n.useOptimistic = function(S, M) {
    return J.H.useOptimistic(S, M);
  }, n.useReducer = function(S, M, L) {
    return J.H.useReducer(S, M, L);
  }, n.useRef = function(S) {
    return J.H.useRef(S);
  }, n.useState = function(S) {
    return J.H.useState(S);
  }, n.useSyncExternalStore = function(S, M, L) {
    return J.H.useSyncExternalStore(S, M, L);
  }, n.useTransition = function() {
    return J.H.useTransition();
  }, n.version = "19.2.7";
})), pf = /* @__PURE__ */ hn(((n, r) => {
  r.exports = F1();
})), ez = /* @__PURE__ */ hn(((n) => {
  function r(G, I) {
    var B = G.length;
    G.push(I);
    e: for (; 0 < B; ) {
      var we = B - 1 >>> 1, He = G[we];
      if (0 < i(He, I)) G[we] = I, G[B] = He, B = we;
      else break e;
    }
  }
  function l(G) {
    return G.length === 0 ? null : G[0];
  }
  function s(G) {
    if (G.length === 0) return null;
    var I = G[0], B = G.pop();
    if (B !== I) {
      G[0] = B;
      e: for (var we = 0, He = G.length, Nt = He >>> 1; we < Nt; ) {
        var S = 2 * (we + 1) - 1, M = G[S], L = S + 1, P = G[L];
        if (0 > i(M, B)) L < He && 0 > i(P, M) ? (G[we] = P, G[L] = B, we = L) : (G[we] = M, G[S] = B, we = S);
        else if (L < He && 0 > i(P, B)) G[we] = P, G[L] = B, we = L;
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
    var d = Date, h = d.now();
    n.unstable_now = function() {
      return d.now() - h;
    };
  }
  var w = [], v = [], b = 1, $ = null, y = 3, Z = !1, q = !1, W = !1, te = !1, ne = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, le = typeof setImmediate < "u" ? setImmediate : null;
  function ue(G) {
    for (var I = l(v); I !== null; ) {
      if (I.callback === null) s(v);
      else if (I.startTime <= G) s(v), I.sortIndex = I.expirationTime, r(w, I);
      else break;
      I = l(v);
    }
  }
  function it(G) {
    if (W = !1, ue(G), !q) if (l(w) !== null) q = !0, Ke || (Ke = !0, We());
    else {
      var I = l(v);
      I !== null && rn(it, I.startTime - G);
    }
  }
  var Ke = !1, Q = -1, J = 5, ce = -1;
  function at() {
    return te ? !0 : !(n.unstable_now() - ce < J);
  }
  function Lt() {
    if (te = !1, Ke) {
      var G = n.unstable_now();
      ce = G;
      var I = !0;
      try {
        e: {
          q = !1, W && (W = !1, K(Q), Q = -1), Z = !0;
          var B = y;
          try {
            t: {
              for (ue(G), $ = l(w); $ !== null && !($.expirationTime > G && at()); ) {
                var we = $.callback;
                if (typeof we == "function") {
                  $.callback = null, y = $.priorityLevel;
                  var He = we($.expirationTime <= G);
                  if (G = n.unstable_now(), typeof He == "function") {
                    $.callback = He, ue(G), I = !0;
                    break t;
                  }
                  $ === l(w) && s(w), ue(G);
                } else s(w);
                $ = l(w);
              }
              if ($ !== null) I = !0;
              else {
                var Nt = l(v);
                Nt !== null && rn(it, Nt.startTime - G), I = !1;
              }
            }
            break e;
          } finally {
            $ = null, y = B, Z = !1;
          }
          I = void 0;
        }
      } finally {
        I ? We() : Ke = !1;
      }
    }
  }
  var We;
  if (typeof le == "function") We = function() {
    le(Lt);
  };
  else if (typeof MessageChannel < "u") {
    var fn = new MessageChannel(), Ii = fn.port2;
    fn.port1.onmessage = Lt, We = function() {
      Ii.postMessage(null);
    };
  } else We = function() {
    ne(Lt, 0);
  };
  function rn(G, I) {
    Q = ne(function() {
      G(n.unstable_now());
    }, I);
  }
  n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(G) {
    G.callback = null;
  }, n.unstable_forceFrameRate = function(G) {
    0 > G || 125 < G ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : J = 0 < G ? Math.floor(1e3 / G) : 5;
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
    te = !0;
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
    var we = n.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? we + B : we) : B = we, G) {
      case 1:
        var He = -1;
        break;
      case 2:
        He = 250;
        break;
      case 5:
        He = 1073741823;
        break;
      case 4:
        He = 1e4;
        break;
      default:
        He = 5e3;
    }
    return He = B + He, G = {
      id: b++,
      callback: I,
      priorityLevel: G,
      startTime: B,
      expirationTime: He,
      sortIndex: -1
    }, B > we ? (G.sortIndex = B, r(v, G), l(w) === null && G === l(v) && (W ? (K(Q), Q = -1) : W = !0, rn(it, B - we))) : (G.sortIndex = He, r(w, G), q || Z || (q = !0, Ke || (Ke = !0, We()))), G;
  }, n.unstable_shouldYield = at, n.unstable_wrapCallback = function(G) {
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
})), tz = /* @__PURE__ */ hn(((n, r) => {
  r.exports = ez();
})), nz = /* @__PURE__ */ hn(((n) => {
  var r = pf();
  function l(v) {
    var b = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var $ = 2; $ < arguments.length; $++) b += "&args[]=" + encodeURIComponent(arguments[$]);
    }
    return "Minified React error #" + v + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var i = {
    d: {
      f: s,
      r: function() {
        throw Error(l(522));
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
  function d(v, b, $) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: y == null ? null : "" + y,
      children: v,
      containerInfo: b,
      implementation: $
    };
  }
  var h = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function w(v, b) {
    if (v === "font") return "";
    if (typeof b == "string") return b === "use-credentials" ? b : "";
  }
  n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, n.createPortal = function(v, b) {
    var $ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11) throw Error(l(299));
    return d(v, b, null, $);
  }, n.flushSync = function(v) {
    var b = h.T, $ = i.p;
    try {
      if (h.T = null, i.p = 2, v) return v();
    } finally {
      h.T = b, i.p = $, i.d.f();
    }
  }, n.preconnect = function(v, b) {
    typeof v == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, i.d.C(v, b));
  }, n.prefetchDNS = function(v) {
    typeof v == "string" && i.d.D(v);
  }, n.preinit = function(v, b) {
    if (typeof v == "string" && b && typeof b.as == "string") {
      var $ = b.as, y = w($, b.crossOrigin), Z = typeof b.integrity == "string" ? b.integrity : void 0, q = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      $ === "style" ? i.d.S(v, typeof b.precedence == "string" ? b.precedence : void 0, {
        crossOrigin: y,
        integrity: Z,
        fetchPriority: q
      }) : $ === "script" && i.d.X(v, {
        crossOrigin: y,
        integrity: Z,
        fetchPriority: q,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, n.preinitModule = function(v, b) {
    if (typeof v == "string") if (typeof b == "object" && b !== null) {
      if (b.as == null || b.as === "script") {
        var $ = w(b.as, b.crossOrigin);
        i.d.M(v, {
          crossOrigin: $,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          nonce: typeof b.nonce == "string" ? b.nonce : void 0
        });
      }
    } else b ?? i.d.M(v);
  }, n.preload = function(v, b) {
    if (typeof v == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var $ = b.as, y = w($, b.crossOrigin);
      i.d.L(v, $, {
        crossOrigin: y,
        integrity: typeof b.integrity == "string" ? b.integrity : void 0,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0,
        type: typeof b.type == "string" ? b.type : void 0,
        fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
        referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
        imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
        imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
        media: typeof b.media == "string" ? b.media : void 0
      });
    }
  }, n.preloadModule = function(v, b) {
    if (typeof v == "string") if (b) {
      var $ = w(b.as, b.crossOrigin);
      i.d.m(v, {
        as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
        crossOrigin: $,
        integrity: typeof b.integrity == "string" ? b.integrity : void 0
      });
    } else i.d.m(v);
  }, n.requestFormReset = function(v) {
    i.d.r(v);
  }, n.unstable_batchedUpdates = function(v, b) {
    return v(b);
  }, n.useFormState = function(v, b, $) {
    return h.H.useFormState(v, b, $);
  }, n.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, n.version = "19.2.7";
})), iz = /* @__PURE__ */ hn(((n, r) => {
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (s) {
        console.error(s);
      }
  }
  l(), r.exports = nz();
})), az = /* @__PURE__ */ hn(((n) => {
  var r = tz(), l = pf(), s = iz();
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
  function h(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function w(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (d(e) !== e) throw Error(i(188));
  }
  function b(e) {
    var t = e.alternate;
    if (!t) {
      if (t = d(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var a = e, o = t; ; ) {
      var c = a.return;
      if (c === null) break;
      var f = c.alternate;
      if (f === null) {
        if (o = c.return, o !== null) {
          a = o;
          continue;
        }
        break;
      }
      if (c.child === f.child) {
        for (f = c.child; f; ) {
          if (f === a) return v(c), e;
          if (f === o) return v(c), t;
          f = f.sibling;
        }
        throw Error(i(188));
      }
      if (a.return !== o.return) a = c, o = f;
      else {
        for (var m = !1, p = c.child; p; ) {
          if (p === a) {
            m = !0, a = c, o = f;
            break;
          }
          if (p === o) {
            m = !0, o = c, a = f;
            break;
          }
          p = p.sibling;
        }
        if (!m) {
          for (p = f.child; p; ) {
            if (p === a) {
              m = !0, a = f, o = c;
              break;
            }
            if (p === o) {
              m = !0, o = f, a = c;
              break;
            }
            p = p.sibling;
          }
          if (!m) throw Error(i(189));
        }
      }
      if (a.alternate !== o) throw Error(i(190));
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
  var y = Object.assign, Z = /* @__PURE__ */ Symbol.for("react.element"), q = /* @__PURE__ */ Symbol.for("react.transitional.element"), W = /* @__PURE__ */ Symbol.for("react.portal"), te = /* @__PURE__ */ Symbol.for("react.fragment"), ne = /* @__PURE__ */ Symbol.for("react.strict_mode"), K = /* @__PURE__ */ Symbol.for("react.profiler"), le = /* @__PURE__ */ Symbol.for("react.consumer"), ue = /* @__PURE__ */ Symbol.for("react.context"), it = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ke = /* @__PURE__ */ Symbol.for("react.suspense"), Q = /* @__PURE__ */ Symbol.for("react.suspense_list"), J = /* @__PURE__ */ Symbol.for("react.memo"), ce = /* @__PURE__ */ Symbol.for("react.lazy"), at = /* @__PURE__ */ Symbol.for("react.activity"), Lt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), We = Symbol.iterator;
  function fn(e) {
    return e === null || typeof e != "object" ? null : (e = We && e[We] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ii = /* @__PURE__ */ Symbol.for("react.client.reference");
  function rn(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === Ii ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case te:
        return "Fragment";
      case K:
        return "Profiler";
      case ne:
        return "StrictMode";
      case Ke:
        return "Suspense";
      case Q:
        return "SuspenseList";
      case at:
        return "Activity";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case W:
        return "Portal";
      case ue:
        return e.displayName || "Context";
      case le:
        return (e._context.displayName || "Context") + ".Consumer";
      case it:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case J:
        return t = e.displayName || null, t !== null ? t : rn(e.type) || "Memo";
      case ce:
        t = e._payload, e = e._init;
        try {
          return rn(e(t));
        } catch {
        }
    }
    return null;
  }
  var G = Array.isArray, I = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, we = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, He = [], Nt = -1;
  function S(e) {
    return { current: e };
  }
  function M(e) {
    0 > Nt || (e.current = He[Nt], He[Nt] = null, Nt--);
  }
  function L(e, t) {
    Nt++, He[Nt] = e.current, e.current = t;
  }
  var P = S(null), pe = S(null), ve = S(null), Oe = S(null);
  function _t(e, t) {
    switch (L(ve, t), L(pe, e), L(P, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Kh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI) t = Kh(t), e = Wh(t, e);
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
    M(P), L(P, e);
  }
  function Ve() {
    M(P), M(pe), M(ve);
  }
  function Ca(e) {
    e.memoizedState !== null && L(Oe, e);
    var t = P.current, a = Wh(t, e.type);
    t !== a && (L(pe, e), L(P, a));
  }
  function lo(e) {
    pe.current === e && (M(P), M(pe)), Oe.current === e && (M(Oe), Tr._currentValue = we);
  }
  var Gu, Om;
  function fi(e) {
    if (Gu === void 0) try {
      throw Error();
    } catch (a) {
      var t = a.stack.trim().match(/\n( *(at )?)/);
      Gu = t && t[1] || "", Om = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Gu + e + Om;
  }
  var Yu = !1;
  function Qu(e, t) {
    if (!e || Yu) return "";
    Yu = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var C = function() {
              throw Error();
            };
            if (Object.defineProperty(C.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(C, []);
              } catch (A) {
                var U = A;
              }
              Reflect.construct(e, [], C);
            } else {
              try {
                C.call();
              } catch (A) {
                U = A;
              }
              e.call(C.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (A) {
              U = A;
            }
            (C = e()) && typeof C.catch == "function" && C.catch(function() {
            });
          }
        } catch (A) {
          if (A && U && typeof A.stack == "string") return [A.stack, U.stack];
        }
        return [null, null];
      } };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, "name");
      c && c.configurable && Object.defineProperty(o.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var f = o.DetermineComponentFrameRoot(), m = f[0], p = f[1];
      if (m && p) {
        var g = m.split(`
`), x = p.split(`
`);
        for (c = o = 0; o < g.length && !g[o].includes("DetermineComponentFrameRoot"); ) o++;
        for (; c < x.length && !x[c].includes("DetermineComponentFrameRoot"); ) c++;
        if (o === g.length || c === x.length) for (o = g.length - 1, c = x.length - 1; 1 <= o && 0 <= c && g[o] !== x[c]; ) c--;
        for (; 1 <= o && 0 <= c; o--, c--) if (g[o] !== x[c]) {
          if (o !== 1 || c !== 1) do
            if (o--, c--, 0 > c || g[o] !== x[c]) {
              var j = `
` + g[o].replace(" at new ", " at ");
              return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), j;
            }
          while (1 <= o && 0 <= c);
          break;
        }
      }
    } finally {
      Yu = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? fi(a) : "";
  }
  function N0(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return fi(e.type);
      case 16:
        return fi("Lazy");
      case 13:
        return e.child !== t && t !== null ? fi("Suspense Fallback") : fi("Suspense");
      case 19:
        return fi("SuspenseList");
      case 0:
      case 15:
        return Qu(e.type, !1);
      case 11:
        return Qu(e.type.render, !1);
      case 1:
        return Qu(e.type, !0);
      case 31:
        return fi("Activity");
      default:
        return "";
    }
  }
  function xm(e) {
    try {
      var t = "", a = null;
      do
        t += N0(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (o) {
      return `
Error generating stack: ` + o.message + `
` + o.stack;
    }
  }
  var Vu = Object.prototype.hasOwnProperty, Ju = r.unstable_scheduleCallback, Xu = r.unstable_cancelCallback, A0 = r.unstable_shouldYield, j0 = r.unstable_requestPaint, At = r.unstable_now, D0 = r.unstable_getCurrentPriorityLevel, Um = r.unstable_ImmediatePriority, Nm = r.unstable_UserBlockingPriority, uo = r.unstable_NormalPriority, Z0 = r.unstable_LowPriority, Am = r.unstable_IdlePriority, C0 = r.log, M0 = r.unstable_setDisableYieldValue, Ma = null, jt = null;
  function Mn(e) {
    if (typeof C0 == "function" && M0(e), jt && typeof jt.setStrictMode == "function") try {
      jt.setStrictMode(Ma, e);
    } catch {
    }
  }
  var Dt = Math.clz32 ? Math.clz32 : q0, R0 = Math.log, I0 = Math.LN2;
  function q0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (R0(e) / I0 | 0) | 0;
  }
  var co = 256, so = 262144, fo = 4194304;
  function di(e) {
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
  function mo(e, t, a) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var c = 0, f = e.suspendedLanes, m = e.pingedLanes;
    e = e.warmLanes;
    var p = o & 134217727;
    return p !== 0 ? (o = p & ~f, o !== 0 ? c = di(o) : (m &= p, m !== 0 ? c = di(m) : a || (a = p & ~e, a !== 0 && (c = di(a))))) : (p = o & ~f, p !== 0 ? c = di(p) : m !== 0 ? c = di(m) : a || (a = o & ~e, a !== 0 && (c = di(a)))), c === 0 ? 0 : t !== 0 && t !== c && (t & f) === 0 && (f = c & -c, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : c;
  }
  function Ra(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function H0(e, t) {
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
  function jm() {
    var e = fo;
    return fo <<= 1, (fo & 62914560) === 0 && (fo = 4194304), e;
  }
  function Pu(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function po(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function L0(e, t, a, o, c, f) {
    var m = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var p = e.entanglements, g = e.expirationTimes, x = e.hiddenUpdates;
    for (a = m & ~a; 0 < a; ) {
      var j = 31 - Dt(a), C = 1 << j;
      p[j] = 0, g[j] = -1;
      var U = x[j];
      if (U !== null) for (x[j] = null, j = 0; j < U.length; j++) {
        var A = U[j];
        A !== null && (A.lane &= -536870913);
      }
      a &= ~C;
    }
    o !== 0 && Dm(e, o, 0), f !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(m & ~t));
  }
  function Dm(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var o = 31 - Dt(t);
    e.entangledLanes |= t, e.entanglements[o] = e.entanglements[o] | 1073741824 | a & 261930;
  }
  function Zm(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var o = 31 - Dt(a), c = 1 << o;
      c & t | e[o] & t && (e[o] |= t), a &= ~c;
    }
  }
  function Cm(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Mm(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Mm(e) {
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
  function Ku(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Rm() {
    var e = B.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : bg(e.type));
  }
  function Im(e, t) {
    var a = B.p;
    try {
      return B.p = e, t();
    } finally {
      B.p = a;
    }
  }
  var Rn = Math.random().toString(36).slice(2), st = "__reactFiber$" + Rn, zt = "__reactProps$" + Rn, Ia = "__reactContainer$" + Rn, Wu = "__reactEvents$" + Rn, B0 = "__reactListeners$" + Rn, G0 = "__reactHandles$" + Rn, qm = "__reactResources$" + Rn, qa = "__reactMarker$" + Rn;
  function Fu(e) {
    delete e[st], delete e[zt], delete e[Wu], delete e[B0], delete e[G0];
  }
  function qi(e) {
    var t = e[st];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[Ia] || a[st]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null) for (e = rg(e); e !== null; ) {
          if (a = e[st]) return a;
          e = rg(e);
        }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Hi(e) {
    if (e = e[st] || e[Ia]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function Ha(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function Li(e) {
    var t = e[qm];
    return t || (t = e[qm] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), t;
  }
  function ut(e) {
    e[qa] = !0;
  }
  var Hm = /* @__PURE__ */ new Set(), Lm = {};
  function mi(e, t) {
    Bi(e, t), Bi(e + "Capture", t);
  }
  function Bi(e, t) {
    for (Lm[e] = t, e = 0; e < t.length; e++) Hm.add(t[e]);
  }
  var Y0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Bm = {}, Gm = {};
  function Q0(e) {
    return Vu.call(Gm, e) ? !0 : Vu.call(Bm, e) ? !1 : Y0.test(e) ? Gm[e] = !0 : (Bm[e] = !0, !1);
  }
  function vo(e, t, a) {
    if (Q0(t)) if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
          e.removeAttribute(t);
          return;
        case "boolean":
          var o = t.toLowerCase().slice(0, 5);
          if (o !== "data-" && o !== "aria-") {
            e.removeAttribute(t);
            return;
          }
      }
      e.setAttribute(t, "" + a);
    }
  }
  function ho(e, t, a) {
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
  function gn(e, t, a, o) {
    if (o === null) e.removeAttribute(a);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + o);
    }
  }
  function Bt(e) {
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
  function Ym(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function V0(e, t, a) {
    var o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (!e.hasOwnProperty(t) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var c = o.get, f = o.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(m) {
          a = "" + m, f.call(this, m);
        }
      }), Object.defineProperty(e, t, { enumerable: o.enumerable }), {
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
  function ec(e) {
    if (!e._valueTracker) {
      var t = Ym(e) ? "checked" : "value";
      e._valueTracker = V0(e, t, "" + e[t]);
    }
  }
  function Qm(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), o = "";
    return e && (o = Ym(e) ? e.checked ? "true" : "false" : e.value), e = o, e !== a ? (t.setValue(e), !0) : !1;
  }
  function go(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var J0 = /[\n"\\]/g;
  function Gt(e) {
    return e.replace(J0, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function tc(e, t, a, o, c, f, m, p) {
    e.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"), t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Bt(t)) : e.value !== "" + Bt(t) && (e.value = "" + Bt(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"), t != null ? nc(e, m, Bt(t)) : a != null ? nc(e, m, Bt(a)) : o != null && e.removeAttribute("value"), c == null && f != null && (e.defaultChecked = !!f), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.name = "" + Bt(p) : e.removeAttribute("name");
  }
  function Vm(e, t, a, o, c, f, m, p) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || a != null) {
      if (!(f !== "submit" && f !== "reset" || t != null)) {
        ec(e);
        return;
      }
      a = a != null ? "" + Bt(a) : "", t = t != null ? "" + Bt(t) : a, p || t === e.value || (e.value = t), e.defaultValue = t;
    }
    o = o ?? c, o = typeof o != "function" && typeof o != "symbol" && !!o, e.checked = p ? e.checked : !!o, e.defaultChecked = !!o, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m), ec(e);
  }
  function nc(e, t, a) {
    t === "number" && go(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Gi(e, t, a, o) {
    if (e = e.options, t) {
      t = {};
      for (var c = 0; c < a.length; c++) t["$" + a[c]] = !0;
      for (a = 0; a < e.length; a++) c = t.hasOwnProperty("$" + e[a].value), e[a].selected !== c && (e[a].selected = c), c && o && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Bt(a), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === a) {
          e[c].selected = !0, o && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Jm(e, t, a) {
    if (t != null && (t = "" + Bt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Bt(a) : "";
  }
  function Xm(e, t, a, o) {
    if (t == null) {
      if (o != null) {
        if (a != null) throw Error(i(92));
        if (G(o)) {
          if (1 < o.length) throw Error(i(93));
          o = o[0];
        }
        a = o;
      }
      a ??= "", t = a;
    }
    a = Bt(t), e.defaultValue = a, o = e.textContent, o === a && o !== "" && o !== null && (e.value = o), ec(e);
  }
  function Yi(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var X0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Pm(e, t, a) {
    var o = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? o ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : o ? e.setProperty(t, a) : typeof a != "number" || a === 0 || X0.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function Km(e, t, a) {
    if (t != null && typeof t != "object") throw Error(i(62));
    if (e = e.style, a != null) {
      for (var o in a) !a.hasOwnProperty(o) || t != null && t.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
      for (var c in t) o = t[c], t.hasOwnProperty(c) && a[c] !== o && Pm(e, c, o);
    } else for (var f in t) t.hasOwnProperty(f) && Pm(e, f, t[f]);
  }
  function ic(e) {
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
  var P0 = /* @__PURE__ */ new Map([
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
  ]), K0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function yo(e) {
    return K0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function yn() {
  }
  var ac = null;
  function rc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Qi = null, Vi = null;
  function Wm(e) {
    var t = Hi(e);
    if (t && (e = t.stateNode)) {
      var a = e[zt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (tc(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll('input[name="' + Gt("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
              var o = a[t];
              if (o !== e && o.form === e.form) {
                var c = o[zt] || null;
                if (!c) throw Error(i(90));
                tc(o, c.value, c.defaultValue, c.defaultValue, c.checked, c.defaultChecked, c.type, c.name);
              }
            }
            for (t = 0; t < a.length; t++) o = a[t], o.form === e.form && Qm(o);
          }
          break e;
        case "textarea":
          Jm(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && Gi(e, !!a.multiple, t, !1);
      }
    }
  }
  var oc = !1;
  function Fm(e, t, a) {
    if (oc) return e(t, a);
    oc = !0;
    try {
      return e(t);
    } finally {
      if (oc = !1, (Qi !== null || Vi !== null) && (rl(), Qi && (t = Qi, e = Vi, Vi = Qi = null, Wm(t), e)))
        for (t = 0; t < e.length; t++) Wm(e[t]);
    }
  }
  function La(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var o = a[zt] || null;
    if (o === null) return null;
    a = o[t];
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
        (o = !o.disabled) || (e = e.type, o = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !o;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(i(231, t, typeof a));
    return a;
  }
  var bn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), lc = !1;
  if (bn) try {
    var Ba = {};
    Object.defineProperty(Ba, "passive", { get: function() {
      lc = !0;
    } }), window.addEventListener("test", Ba, Ba), window.removeEventListener("test", Ba, Ba);
  } catch {
    lc = !1;
  }
  var In = null, uc = null, bo = null;
  function ep() {
    if (bo) return bo;
    var e, t = uc, a = t.length, o, c = "value" in In ? In.value : In.textContent, f = c.length;
    for (e = 0; e < a && t[e] === c[e]; e++) ;
    var m = a - e;
    for (o = 1; o <= m && t[a - o] === c[f - o]; o++) ;
    return bo = c.slice(e, 1 < o ? 1 - o : void 0);
  }
  function _o(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function So() {
    return !0;
  }
  function tp() {
    return !1;
  }
  function wt(e) {
    function t(a, o, c, f, m) {
      this._reactName = a, this._targetInst = c, this.type = o, this.nativeEvent = f, this.target = m, this.currentTarget = null;
      for (var p in e) e.hasOwnProperty(p) && (a = e[p], this[p] = a ? a(f) : f[p]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? So : tp, this.isPropagationStopped = tp, this;
    }
    return y(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = So);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = So);
      },
      persist: function() {
      },
      isPersistent: So
    }), t;
  }
  var pi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, $o = wt(pi), Ga = y({}, pi, {
    view: 0,
    detail: 0
  }), W0 = wt(Ga), cc, sc, Ya, zo = y({}, Ga, {
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
    getModifierState: dc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ya && (Ya && e.type === "mousemove" ? (cc = e.screenX - Ya.screenX, sc = e.screenY - Ya.screenY) : sc = cc = 0, Ya = e), cc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : sc;
    }
  }), np = wt(zo), F0 = wt(y({}, zo, { dataTransfer: 0 })), fc = wt(y({}, Ga, { relatedTarget: 0 })), e$ = wt(y({}, pi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), t$ = wt(y({}, pi, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } })), ip = wt(y({}, pi, { data: 0 })), n$ = {
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
  }, i$ = {
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
  }, a$ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function r$(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = a$[e]) ? !!t[e] : !1;
  }
  function dc() {
    return r$;
  }
  var o$ = wt(y({}, Ga, {
    key: function(e) {
      if (e.key) {
        var t = n$[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = _o(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? i$[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: dc,
    charCode: function(e) {
      return e.type === "keypress" ? _o(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? _o(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  })), ap = wt(y({}, zo, {
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
  })), l$ = wt(y({}, Ga, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: dc
  })), u$ = wt(y({}, pi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), c$ = wt(y({}, zo, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  })), s$ = wt(y({}, pi, {
    newState: 0,
    oldState: 0
  })), f$ = [
    9,
    13,
    27,
    32
  ], mc = bn && "CompositionEvent" in window, Qa = null;
  bn && "documentMode" in document && (Qa = document.documentMode);
  var d$ = bn && "TextEvent" in window && !Qa, rp = bn && (!mc || Qa && 8 < Qa && 11 >= Qa), op = " ", lp = !1;
  function up(e, t) {
    switch (e) {
      case "keyup":
        return f$.indexOf(t.keyCode) !== -1;
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
  function cp(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ji = !1;
  function m$(e, t) {
    switch (e) {
      case "compositionend":
        return cp(t);
      case "keypress":
        return t.which !== 32 ? null : (lp = !0, op);
      case "textInput":
        return e = t.data, e === op && lp ? null : e;
      default:
        return null;
    }
  }
  function p$(e, t) {
    if (Ji) return e === "compositionend" || !mc && up(e, t) ? (e = ep(), bo = uc = In = null, Ji = !1, e) : null;
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
        return rp && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var v$ = {
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
  function sp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!v$[e.type] : t === "textarea";
  }
  function fp(e, t, a, o) {
    Qi ? Vi ? Vi.push(o) : Vi = [o] : Qi = o, t = dl(t, "onChange"), 0 < t.length && (a = new $o("onChange", "change", null, a, o), e.push({
      event: a,
      listeners: t
    }));
  }
  var Va = null, Ja = null;
  function h$(e) {
    Gh(e, 0);
  }
  function wo(e) {
    if (Qm(Ha(e))) return e;
  }
  function dp(e, t) {
    if (e === "change") return t;
  }
  var mp = !1;
  if (bn) {
    var pc;
    if (bn) {
      var vc = "oninput" in document;
      if (!vc) {
        var pp = document.createElement("div");
        pp.setAttribute("oninput", "return;"), vc = typeof pp.oninput == "function";
      }
      pc = vc;
    } else pc = !1;
    mp = pc && (!document.documentMode || 9 < document.documentMode);
  }
  function vp() {
    Va && (Va.detachEvent("onpropertychange", hp), Ja = Va = null);
  }
  function hp(e) {
    if (e.propertyName === "value" && wo(Ja)) {
      var t = [];
      fp(t, Ja, e, rc(e)), Fm(h$, t);
    }
  }
  function g$(e, t, a) {
    e === "focusin" ? (vp(), Va = t, Ja = a, Va.attachEvent("onpropertychange", hp)) : e === "focusout" && vp();
  }
  function y$(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return wo(Ja);
  }
  function b$(e, t) {
    if (e === "click") return wo(t);
  }
  function _$(e, t) {
    if (e === "input" || e === "change") return wo(t);
  }
  function S$(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Zt = typeof Object.is == "function" ? Object.is : S$;
  function Xa(e, t) {
    if (Zt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var a = Object.keys(e), o = Object.keys(t);
    if (a.length !== o.length) return !1;
    for (o = 0; o < a.length; o++) {
      var c = a[o];
      if (!Vu.call(t, c) || !Zt(e[c], t[c])) return !1;
    }
    return !0;
  }
  function gp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function yp(e, t) {
    var a = gp(e);
    e = 0;
    for (var o; a; ) {
      if (a.nodeType === 3) {
        if (o = e + a.textContent.length, e <= t && o >= t) return {
          node: a,
          offset: t - e
        };
        e = o;
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
      a = gp(a);
    }
  }
  function bp(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function _p(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = go(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = go(e.document);
    }
    return t;
  }
  function hc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var $$ = bn && "documentMode" in document && 11 >= document.documentMode, Xi = null, gc = null, Pa = null, yc = !1;
  function Sp(e, t, a) {
    var o = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    yc || Xi == null || Xi !== go(o) || (o = Xi, "selectionStart" in o && hc(o) ? o = {
      start: o.selectionStart,
      end: o.selectionEnd
    } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = {
      anchorNode: o.anchorNode,
      anchorOffset: o.anchorOffset,
      focusNode: o.focusNode,
      focusOffset: o.focusOffset
    }), Pa && Xa(Pa, o) || (Pa = o, o = dl(gc, "onSelect"), 0 < o.length && (t = new $o("onSelect", "select", null, t, a), e.push({
      event: t,
      listeners: o
    }), t.target = Xi)));
  }
  function vi(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var Pi = {
    animationend: vi("Animation", "AnimationEnd"),
    animationiteration: vi("Animation", "AnimationIteration"),
    animationstart: vi("Animation", "AnimationStart"),
    transitionrun: vi("Transition", "TransitionRun"),
    transitionstart: vi("Transition", "TransitionStart"),
    transitioncancel: vi("Transition", "TransitionCancel"),
    transitionend: vi("Transition", "TransitionEnd")
  }, bc = {}, $p = {};
  bn && ($p = document.createElement("div").style, "AnimationEvent" in window || (delete Pi.animationend.animation, delete Pi.animationiteration.animation, delete Pi.animationstart.animation), "TransitionEvent" in window || delete Pi.transitionend.transition);
  function hi(e) {
    if (bc[e]) return bc[e];
    if (!Pi[e]) return e;
    var t = Pi[e], a;
    for (a in t) if (t.hasOwnProperty(a) && a in $p) return bc[e] = t[a];
    return e;
  }
  var zp = hi("animationend"), wp = hi("animationiteration"), Tp = hi("animationstart"), z$ = hi("transitionrun"), w$ = hi("transitionstart"), T$ = hi("transitioncancel"), kp = hi("transitionend"), Ep = /* @__PURE__ */ new Map(), _c = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  _c.push("scrollEnd");
  function on(e, t) {
    Ep.set(e, t), mi(t, [e]);
  }
  var To = typeof reportError == "function" ? reportError : function(e) {
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
  }, Yt = [], Ki = 0, Sc = 0;
  function ko() {
    for (var e = Ki, t = Sc = Ki = 0; t < e; ) {
      var a = Yt[t];
      Yt[t++] = null;
      var o = Yt[t];
      Yt[t++] = null;
      var c = Yt[t];
      Yt[t++] = null;
      var f = Yt[t];
      if (Yt[t++] = null, o !== null && c !== null) {
        var m = o.pending;
        m === null ? c.next = c : (c.next = m.next, m.next = c), o.pending = c;
      }
      f !== 0 && Op(a, c, f);
    }
  }
  function Eo(e, t, a, o) {
    Yt[Ki++] = e, Yt[Ki++] = t, Yt[Ki++] = a, Yt[Ki++] = o, Sc |= o, e.lanes |= o, e = e.alternate, e !== null && (e.lanes |= o);
  }
  function $c(e, t, a, o) {
    return Eo(e, t, a, o), Oo(e);
  }
  function gi(e, t) {
    return Eo(e, null, null, t), Oo(e);
  }
  function Op(e, t, a) {
    e.lanes |= a;
    var o = e.alternate;
    o !== null && (o.lanes |= a);
    for (var c = !1, f = e.return; f !== null; ) f.childLanes |= a, o = f.alternate, o !== null && (o.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (c = !0)), e = f, f = f.return;
    return e.tag === 3 ? (f = e.stateNode, c && t !== null && (c = 31 - Dt(a), e = f.hiddenUpdates, o = e[c], o === null ? e[c] = [t] : o.push(t), t.lane = a | 536870912), f) : null;
  }
  function Oo(e) {
    if (50 < yr) throw yr = 0, Ns = null, Error(i(185));
    for (var t = e.return; t !== null; ) e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Wi = {};
  function k$(e, t, a, o) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ct(e, t, a, o) {
    return new k$(e, t, a, o);
  }
  function zc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function _n(e, t) {
    var a = e.alternate;
    return a === null ? (a = Ct(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function xp(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function xo(e, t, a, o, c, f) {
    var m = 0;
    if (o = e, typeof e == "function") zc(e) && (m = 1);
    else if (typeof e == "string") m = A1(e, a, P.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (e) {
      case at:
        return e = Ct(31, a, t, c), e.elementType = at, e.lanes = f, e;
      case te:
        return yi(a.children, c, f, t);
      case ne:
        m = 8, c |= 24;
        break;
      case K:
        return e = Ct(12, a, t, c | 2), e.elementType = K, e.lanes = f, e;
      case Ke:
        return e = Ct(13, a, t, c), e.elementType = Ke, e.lanes = f, e;
      case Q:
        return e = Ct(19, a, t, c), e.elementType = Q, e.lanes = f, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ue:
            m = 10;
            break e;
          case le:
            m = 9;
            break e;
          case it:
            m = 11;
            break e;
          case J:
            m = 14;
            break e;
          case ce:
            m = 16, o = null;
            break e;
        }
        m = 29, a = Error(i(130, e === null ? "null" : typeof e, "")), o = null;
    }
    return t = Ct(m, a, t, c), t.elementType = e, t.type = o, t.lanes = f, t;
  }
  function yi(e, t, a, o) {
    return e = Ct(7, e, o, t), e.lanes = a, e;
  }
  function wc(e, t, a) {
    return e = Ct(6, e, null, t), e.lanes = a, e;
  }
  function Up(e) {
    var t = Ct(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Tc(e, t, a) {
    return t = Ct(4, e.children !== null ? e.children : [], e.key, t), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Np = /* @__PURE__ */ new WeakMap();
  function Qt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Np.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: xm(t)
      }, Np.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: xm(t)
    };
  }
  var Fi = [], ea = 0, Uo = null, Ka = 0, Vt = [], Jt = 0, qn = null, dn = 1, mn = "";
  function Sn(e, t) {
    Fi[ea++] = Ka, Fi[ea++] = Uo, Uo = e, Ka = t;
  }
  function Ap(e, t, a) {
    Vt[Jt++] = dn, Vt[Jt++] = mn, Vt[Jt++] = qn, qn = e;
    var o = dn;
    e = mn;
    var c = 32 - Dt(o) - 1;
    o &= ~(1 << c), a += 1;
    var f = 32 - Dt(t) + c;
    if (30 < f) {
      var m = c - c % 5;
      f = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, dn = 1 << 32 - Dt(t) + c | a << c | o, mn = f + e;
    } else dn = 1 << f | a << c | o, mn = e;
  }
  function kc(e) {
    e.return !== null && (Sn(e, 1), Ap(e, 1, 0));
  }
  function Ec(e) {
    for (; e === Uo; ) Uo = Fi[--ea], Fi[ea] = null, Ka = Fi[--ea], Fi[ea] = null;
    for (; e === qn; ) qn = Vt[--Jt], Vt[Jt] = null, mn = Vt[--Jt], Vt[Jt] = null, dn = Vt[--Jt], Vt[Jt] = null;
  }
  function jp(e, t) {
    Vt[Jt++] = dn, Vt[Jt++] = mn, Vt[Jt++] = qn, dn = t.id, mn = t.overflow, qn = e;
  }
  var ft = null, Le = null, _e = !1, Hn = null, Xt = !1, Oc = Error(i(519));
  function Ln(e) {
    throw Wa(Qt(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), Oc;
  }
  function Dp(e) {
    var t = e.stateNode, a = e.type, o = e.memoizedProps;
    switch (t[st] = e, t[zt] = o, a) {
      case "dialog":
        ge("cancel", t), ge("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ge("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < _r.length; a++) ge(_r[a], t);
        break;
      case "source":
        ge("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ge("error", t), ge("load", t);
        break;
      case "details":
        ge("toggle", t);
        break;
      case "input":
        ge("invalid", t), Vm(t, o.value, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name, !0);
        break;
      case "select":
        ge("invalid", t);
        break;
      case "textarea":
        ge("invalid", t), Xm(t, o.value, o.defaultValue, o.children);
    }
    a = o.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || o.suppressHydrationWarning === !0 || Xh(t.textContent, a) ? (o.popover != null && (ge("beforetoggle", t), ge("toggle", t)), o.onScroll != null && ge("scroll", t), o.onScrollEnd != null && ge("scrollend", t), o.onClick != null && (t.onclick = yn), t = !0) : t = !1, t || Ln(e, !0);
  }
  function Zp(e) {
    for (ft = e.return; ft; ) switch (ft.tag) {
      case 5:
      case 31:
      case 13:
        Xt = !1;
        return;
      case 27:
      case 3:
        Xt = !0;
        return;
      default:
        ft = ft.return;
    }
  }
  function ta(e) {
    if (e !== ft) return !1;
    if (!_e) return Zp(e), _e = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Ys(e.type, e.memoizedProps)), a = !a), a && Le && Ln(e), Zp(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      Le = ag(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      Le = ag(e);
    } else t === 27 ? (t = Le, ei(e.type) ? (e = Ps, Ps = null, Le = e) : Le = t) : Le = ft ? Wt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function bi() {
    Le = ft = null, _e = !1;
  }
  function xc() {
    var e = Hn;
    return e !== null && (Ot === null ? Ot = e : Ot.push.apply(Ot, e), Hn = null), e;
  }
  function Wa(e) {
    Hn === null ? Hn = [e] : Hn.push(e);
  }
  var Uc = S(null), _i = null, $n = null;
  function Bn(e, t, a) {
    L(Uc, t._currentValue), t._currentValue = a;
  }
  function zn(e) {
    e._currentValue = Uc.current, M(Uc);
  }
  function Nc(e, t, a) {
    for (; e !== null; ) {
      var o = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function Ac(e, t, a, o) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var f = c.dependencies;
      if (f !== null) {
        var m = c.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var p = f;
          f = c;
          for (var g = 0; g < t.length; g++) if (p.context === t[g]) {
            f.lanes |= a, p = f.alternate, p !== null && (p.lanes |= a), Nc(f.return, a, e), o || (m = null);
            break e;
          }
          f = p.next;
        }
      } else if (c.tag === 18) {
        if (m = c.return, m === null) throw Error(i(341));
        m.lanes |= a, f = m.alternate, f !== null && (f.lanes |= a), Nc(m, a, e), m = null;
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
  function na(e, t, a, o) {
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
          var p = c.type;
          Zt(c.pendingProps.value, m.value) || (e !== null ? e.push(p) : e = [p]);
        }
      } else if (c === Oe.current) {
        if (m = c.alternate, m === null) throw Error(i(387));
        m.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Tr) : e = [Tr]);
      }
      c = c.return;
    }
    e !== null && Ac(t, e, a, o), t.flags |= 262144;
  }
  function No(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Zt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Si(e) {
    _i = e, $n = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function dt(e) {
    return Cp(_i, e);
  }
  function Ao(e, t) {
    return _i === null && Si(e), Cp(e, t);
  }
  function Cp(e, t) {
    var a = t._currentValue;
    if (t = {
      context: t,
      memoizedValue: a,
      next: null
    }, $n === null) {
      if (e === null) throw Error(i(308));
      $n = t, e.dependencies = {
        lanes: 0,
        firstContext: t
      }, e.flags |= 524288;
    } else $n = $n.next = t;
    return a;
  }
  var E$ = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, o) {
        e.push(o);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, O$ = r.unstable_scheduleCallback, x$ = r.unstable_NormalPriority, Fe = {
    $$typeof: ue,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function jc() {
    return {
      controller: new E$(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Fa(e) {
    e.refCount--, e.refCount === 0 && O$(x$, function() {
      e.controller.abort();
    });
  }
  var er = null, Dc = 0, ia = 0, aa = null;
  function U$(e, t) {
    if (er === null) {
      var a = er = [];
      Dc = 0, ia = Ms(), aa = {
        status: "pending",
        value: void 0,
        then: function(o) {
          a.push(o);
        }
      };
    }
    return Dc++, t.then(Mp, Mp), t;
  }
  function Mp() {
    if (--Dc === 0 && er !== null) {
      aa !== null && (aa.status = "fulfilled");
      var e = er;
      er = null, ia = 0, aa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function N$(e, t) {
    var a = [], o = {
      status: "pending",
      value: null,
      reason: null,
      then: function(c) {
        a.push(c);
      }
    };
    return e.then(function() {
      o.status = "fulfilled", o.value = t;
      for (var c = 0; c < a.length; c++) (0, a[c])(t);
    }, function(c) {
      for (o.status = "rejected", o.reason = c, c = 0; c < a.length; c++) (0, a[c])(void 0);
    }), o;
  }
  var Rp = I.S;
  I.S = function(e, t) {
    yh = At(), typeof t == "object" && t !== null && typeof t.then == "function" && U$(e, t), Rp !== null && Rp(e, t);
  };
  var $i = S(null);
  function Zc() {
    var e = $i.current;
    return e !== null ? e : Me.pooledCache;
  }
  function jo(e, t) {
    t === null ? L($i, $i.current) : L($i, t.pool);
  }
  function Ip() {
    var e = Zc();
    return e === null ? null : {
      parent: Fe._currentValue,
      pool: e
    };
  }
  var ra = Error(i(460)), Cc = Error(i(474)), Do = Error(i(542)), Zo = { then: function() {
  } };
  function qp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Hp(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(yn, yn), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Bp(e), e;
      default:
        if (typeof t.status == "string") t.then(yn, yn);
        else {
          if (e = Me, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
          e = t, e.status = "pending", e.then(function(o) {
            if (t.status === "pending") {
              var c = t;
              c.status = "fulfilled", c.value = o;
            }
          }, function(o) {
            if (t.status === "pending") {
              var c = t;
              c.status = "rejected", c.reason = o;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Bp(e), e;
        }
        throw wi = t, ra;
    }
  }
  function zi(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (wi = a, ra) : a;
    }
  }
  var wi = null;
  function Lp() {
    if (wi === null) throw Error(i(459));
    var e = wi;
    return wi = null, e;
  }
  function Bp(e) {
    if (e === ra || e === Do) throw Error(i(483));
  }
  var oa = null, tr = 0;
  function Co(e) {
    var t = tr;
    return tr += 1, oa === null && (oa = []), Hp(oa, e, t);
  }
  function nr(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Mo(e, t) {
    throw t.$$typeof === Z ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
  }
  function Gp(e) {
    function t(z, _) {
      if (e) {
        var O = z.deletions;
        O === null ? (z.deletions = [_], z.flags |= 16) : O.push(_);
      }
    }
    function a(z, _) {
      if (!e) return null;
      for (; _ !== null; ) t(z, _), _ = _.sibling;
      return null;
    }
    function o(z) {
      for (var _ = /* @__PURE__ */ new Map(); z !== null; ) z.key !== null ? _.set(z.key, z) : _.set(z.index, z), z = z.sibling;
      return _;
    }
    function c(z, _) {
      return z = _n(z, _), z.index = 0, z.sibling = null, z;
    }
    function f(z, _, O) {
      return z.index = O, e ? (O = z.alternate, O !== null ? (O = O.index, O < _ ? (z.flags |= 67108866, _) : O) : (z.flags |= 67108866, _)) : (z.flags |= 1048576, _);
    }
    function m(z) {
      return e && z.alternate === null && (z.flags |= 67108866), z;
    }
    function p(z, _, O, D) {
      return _ === null || _.tag !== 6 ? (_ = wc(O, z.mode, D), _.return = z, _) : (_ = c(_, O), _.return = z, _);
    }
    function g(z, _, O, D) {
      var F = O.type;
      return F === te ? j(z, _, O.props.children, D, O.key) : _ !== null && (_.elementType === F || typeof F == "object" && F !== null && F.$$typeof === ce && zi(F) === _.type) ? (_ = c(_, O.props), nr(_, O), _.return = z, _) : (_ = xo(O.type, O.key, O.props, null, z.mode, D), nr(_, O), _.return = z, _);
    }
    function x(z, _, O, D) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== O.containerInfo || _.stateNode.implementation !== O.implementation ? (_ = Tc(O, z.mode, D), _.return = z, _) : (_ = c(_, O.children || []), _.return = z, _);
    }
    function j(z, _, O, D, F) {
      return _ === null || _.tag !== 7 ? (_ = yi(O, z.mode, D, F), _.return = z, _) : (_ = c(_, O), _.return = z, _);
    }
    function C(z, _, O) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint") return _ = wc("" + _, z.mode, O), _.return = z, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case q:
            return O = xo(_.type, _.key, _.props, null, z.mode, O), nr(O, _), O.return = z, O;
          case W:
            return _ = Tc(_, z.mode, O), _.return = z, _;
          case ce:
            return _ = zi(_), C(z, _, O);
        }
        if (G(_) || fn(_)) return _ = yi(_, z.mode, O, null), _.return = z, _;
        if (typeof _.then == "function") return C(z, Co(_), O);
        if (_.$$typeof === ue) return C(z, Ao(z, _), O);
        Mo(z, _);
      }
      return null;
    }
    function U(z, _, O, D) {
      var F = _ !== null ? _.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint") return F !== null ? null : p(z, _, "" + O, D);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case q:
            return O.key === F ? g(z, _, O, D) : null;
          case W:
            return O.key === F ? x(z, _, O, D) : null;
          case ce:
            return O = zi(O), U(z, _, O, D);
        }
        if (G(O) || fn(O)) return F !== null ? null : j(z, _, O, D, null);
        if (typeof O.then == "function") return U(z, _, Co(O), D);
        if (O.$$typeof === ue) return U(z, _, Ao(z, O), D);
        Mo(z, O);
      }
      return null;
    }
    function A(z, _, O, D, F) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint") return z = z.get(O) || null, p(_, z, "" + D, F);
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case q:
            return z = z.get(D.key === null ? O : D.key) || null, g(_, z, D, F);
          case W:
            return z = z.get(D.key === null ? O : D.key) || null, x(_, z, D, F);
          case ce:
            return D = zi(D), A(z, _, O, D, F);
        }
        if (G(D) || fn(D)) return z = z.get(O) || null, j(_, z, D, F, null);
        if (typeof D.then == "function") return A(z, _, O, Co(D), F);
        if (D.$$typeof === ue) return A(z, _, O, Ao(_, D), F);
        Mo(_, D);
      }
      return null;
    }
    function V(z, _, O, D) {
      for (var F = null, $e = null, X = _, se = _ = 0, be = null; X !== null && se < O.length; se++) {
        X.index > se ? (be = X, X = null) : be = X.sibling;
        var ze = U(z, X, O[se], D);
        if (ze === null) {
          X === null && (X = be);
          break;
        }
        e && X && ze.alternate === null && t(z, X), _ = f(ze, _, se), $e === null ? F = ze : $e.sibling = ze, $e = ze, X = be;
      }
      if (se === O.length) return a(z, X), _e && Sn(z, se), F;
      if (X === null) {
        for (; se < O.length; se++) X = C(z, O[se], D), X !== null && (_ = f(X, _, se), $e === null ? F = X : $e.sibling = X, $e = X);
        return _e && Sn(z, se), F;
      }
      for (X = o(X); se < O.length; se++) be = A(X, z, se, O[se], D), be !== null && (e && be.alternate !== null && X.delete(be.key === null ? se : be.key), _ = f(be, _, se), $e === null ? F = be : $e.sibling = be, $e = be);
      return e && X.forEach(function(ri) {
        return t(z, ri);
      }), _e && Sn(z, se), F;
    }
    function ee(z, _, O, D) {
      if (O == null) throw Error(i(151));
      for (var F = null, $e = null, X = _, se = _ = 0, be = null, ze = O.next(); X !== null && !ze.done; se++, ze = O.next()) {
        X.index > se ? (be = X, X = null) : be = X.sibling;
        var ri = U(z, X, ze.value, D);
        if (ri === null) {
          X === null && (X = be);
          break;
        }
        e && X && ri.alternate === null && t(z, X), _ = f(ri, _, se), $e === null ? F = ri : $e.sibling = ri, $e = ri, X = be;
      }
      if (ze.done) return a(z, X), _e && Sn(z, se), F;
      if (X === null) {
        for (; !ze.done; se++, ze = O.next()) ze = C(z, ze.value, D), ze !== null && (_ = f(ze, _, se), $e === null ? F = ze : $e.sibling = ze, $e = ze);
        return _e && Sn(z, se), F;
      }
      for (X = o(X); !ze.done; se++, ze = O.next()) ze = A(X, z, se, ze.value, D), ze !== null && (e && ze.alternate !== null && X.delete(ze.key === null ? se : ze.key), _ = f(ze, _, se), $e === null ? F = ze : $e.sibling = ze, $e = ze);
      return e && X.forEach(function(Q1) {
        return t(z, Q1);
      }), _e && Sn(z, se), F;
    }
    function Ce(z, _, O, D) {
      if (typeof O == "object" && O !== null && O.type === te && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case q:
            e: {
              for (var F = O.key; _ !== null; ) {
                if (_.key === F) {
                  if (F = O.type, F === te) {
                    if (_.tag === 7) {
                      a(z, _.sibling), D = c(_, O.props.children), D.return = z, z = D;
                      break e;
                    }
                  } else if (_.elementType === F || typeof F == "object" && F !== null && F.$$typeof === ce && zi(F) === _.type) {
                    a(z, _.sibling), D = c(_, O.props), nr(D, O), D.return = z, z = D;
                    break e;
                  }
                  a(z, _);
                  break;
                } else t(z, _);
                _ = _.sibling;
              }
              O.type === te ? (D = yi(O.props.children, z.mode, D, O.key), D.return = z, z = D) : (D = xo(O.type, O.key, O.props, null, z.mode, D), nr(D, O), D.return = z, z = D);
            }
            return m(z);
          case W:
            e: {
              for (F = O.key; _ !== null; ) {
                if (_.key === F) if (_.tag === 4 && _.stateNode.containerInfo === O.containerInfo && _.stateNode.implementation === O.implementation) {
                  a(z, _.sibling), D = c(_, O.children || []), D.return = z, z = D;
                  break e;
                } else {
                  a(z, _);
                  break;
                }
                else t(z, _);
                _ = _.sibling;
              }
              D = Tc(O, z.mode, D), D.return = z, z = D;
            }
            return m(z);
          case ce:
            return O = zi(O), Ce(z, _, O, D);
        }
        if (G(O)) return V(z, _, O, D);
        if (fn(O)) {
          if (F = fn(O), typeof F != "function") throw Error(i(150));
          return O = F.call(O), ee(z, _, O, D);
        }
        if (typeof O.then == "function") return Ce(z, _, Co(O), D);
        if (O.$$typeof === ue) return Ce(z, _, Ao(z, O), D);
        Mo(z, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, _ !== null && _.tag === 6 ? (a(z, _.sibling), D = c(_, O), D.return = z, z = D) : (a(z, _), D = wc(O, z.mode, D), D.return = z, z = D), m(z)) : a(z, _);
    }
    return function(z, _, O, D) {
      try {
        tr = 0;
        var F = Ce(z, _, O, D);
        return oa = null, F;
      } catch (X) {
        if (X === ra || X === Do) throw X;
        var $e = Ct(29, X, null, z.mode);
        return $e.lanes = D, $e.return = z, $e;
      }
    };
  }
  var Ti = Gp(!0), Yp = Gp(!1), Gn = !1;
  function Mc(e) {
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
  function Rc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function ki(e) {
    return {
      lane: e,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Ei(e, t, a) {
    var o = e.updateQueue;
    if (o === null) return null;
    if (o = o.shared, (Te & 2) !== 0) {
      var c = o.pending;
      return c === null ? t.next = t : (t.next = c.next, c.next = t), o.pending = t, t = Oo(e), Op(e, null, a), t;
    }
    return Eo(e, o, t, a), Oo(e);
  }
  function ir(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var o = t.lanes;
      o &= e.pendingLanes, a |= o, t.lanes = a, Zm(e, a);
    }
  }
  function Ic(e, t) {
    var a = e.updateQueue, o = e.alternate;
    if (o !== null && (o = o.updateQueue, a === o)) {
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
        baseState: o.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: f,
        shared: o.shared,
        callbacks: o.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var qc = !1;
  function ar() {
    if (qc) {
      var e = aa;
      if (e !== null) throw e;
    }
  }
  function rr(e, t, a, o) {
    qc = !1;
    var c = e.updateQueue;
    Gn = !1;
    var f = c.firstBaseUpdate, m = c.lastBaseUpdate, p = c.shared.pending;
    if (p !== null) {
      c.shared.pending = null;
      var g = p, x = g.next;
      g.next = null, m === null ? f = x : m.next = x, m = g;
      var j = e.alternate;
      j !== null && (j = j.updateQueue, p = j.lastBaseUpdate, p !== m && (p === null ? j.firstBaseUpdate = x : p.next = x, j.lastBaseUpdate = g));
    }
    if (f !== null) {
      var C = c.baseState;
      m = 0, j = x = g = null, p = f;
      do {
        var U = p.lane & -536870913, A = U !== p.lane;
        if (A ? (ye & U) === U : (o & U) === U) {
          U !== 0 && U === ia && (qc = !0), j !== null && (j = j.next = {
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: null,
            next: null
          });
          e: {
            var V = e, ee = p;
            U = t;
            var Ce = a;
            switch (ee.tag) {
              case 1:
                if (V = ee.payload, typeof V == "function") {
                  C = V.call(Ce, C, U);
                  break e;
                }
                C = V;
                break e;
              case 3:
                V.flags = V.flags & -65537 | 128;
              case 0:
                if (V = ee.payload, U = typeof V == "function" ? V.call(Ce, C, U) : V, U == null) break e;
                C = y({}, C, U);
                break e;
              case 2:
                Gn = !0;
            }
          }
          U = p.callback, U !== null && (e.flags |= 64, A && (e.flags |= 8192), A = c.callbacks, A === null ? c.callbacks = [U] : A.push(U));
        } else A = {
          lane: U,
          tag: p.tag,
          payload: p.payload,
          callback: p.callback,
          next: null
        }, j === null ? (x = j = A, g = C) : j = j.next = A, m |= U;
        if (p = p.next, p === null) {
          if (p = c.shared.pending, p === null) break;
          A = p, p = A.next, A.next = null, c.lastBaseUpdate = A, c.shared.pending = null;
        }
      } while (!0);
      j === null && (g = C), c.baseState = g, c.firstBaseUpdate = x, c.lastBaseUpdate = j, f === null && (c.shared.lanes = 0), Xn |= m, e.lanes = m, e.memoizedState = C;
    }
  }
  function Qp(e, t) {
    if (typeof e != "function") throw Error(i(191, e));
    e.call(t);
  }
  function Vp(e, t) {
    var a = e.callbacks;
    if (a !== null) for (e.callbacks = null, e = 0; e < a.length; e++) Qp(a[e], t);
  }
  var la = S(null), Ro = S(0);
  function Jp(e, t) {
    e = An, L(Ro, e), L(la, t), An = e | t.baseLanes;
  }
  function Hc() {
    L(Ro, An), L(la, la.current);
  }
  function Lc() {
    An = Ro.current, M(la), M(Ro);
  }
  var Mt = S(null), Pt = null;
  function Yn(e) {
    var t = e.alternate;
    L(Je, Je.current & 1), L(Mt, e), Pt === null && (t === null || la.current !== null || t.memoizedState !== null) && (Pt = e);
  }
  function Bc(e) {
    L(Je, Je.current), L(Mt, e), Pt === null && (Pt = e);
  }
  function Xp(e) {
    e.tag === 22 ? (L(Je, Je.current), L(Mt, e), Pt === null && (Pt = e)) : Qn(e);
  }
  function Qn() {
    L(Je, Je.current), L(Mt, Mt.current);
  }
  function Rt(e) {
    M(Mt), Pt === e && (Pt = null), M(Je);
  }
  var Je = S(0);
  function Io(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Js(a) || Xs(a))) return t;
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
  var wn = 0, re = null, De = null, et = null, qo = !1, ua = !1, Oi = !1, Ho = 0, or = 0, ca = null, A$ = 0;
  function Ye() {
    throw Error(i(321));
  }
  function Gc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++) if (!Zt(e[a], t[a])) return !1;
    return !0;
  }
  function Yc(e, t, a, o, c, f) {
    return wn = f, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, I.H = e === null || e.memoizedState === null ? Av : os, Oi = !1, f = a(o, c), Oi = !1, ua && (f = Kp(t, a, o, c)), Pp(e), f;
  }
  function Pp(e) {
    I.H = cr;
    var t = De !== null && De.next !== null;
    if (wn = 0, et = De = re = null, qo = !1, or = 0, ca = null, t) throw Error(i(300));
    e === null || tt || (e = e.dependencies, e !== null && No(e) && (tt = !0));
  }
  function Kp(e, t, a, o) {
    re = e;
    var c = 0;
    do {
      if (ua && (ca = null), or = 0, ua = !1, 25 <= c) throw Error(i(301));
      if (c += 1, et = De = null, e.updateQueue != null) {
        var f = e.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      I.H = jv, f = t(a, o);
    } while (ua);
    return f;
  }
  function j$() {
    var e = I.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? lr(t) : t, e = e.useState()[0], (De !== null ? De.memoizedState : null) !== e && (re.flags |= 1024), t;
  }
  function Qc() {
    var e = Ho !== 0;
    return Ho = 0, e;
  }
  function Vc(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function Jc(e) {
    if (qo) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      qo = !1;
    }
    wn = 0, et = De = re = null, ua = !1, or = Ho = 0, ca = null;
  }
  function St() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return et === null ? re.memoizedState = et = e : et = et.next = e, et;
  }
  function Xe() {
    if (De === null) {
      var e = re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = De.next;
    var t = et === null ? re.memoizedState : et.next;
    if (t !== null) et = t, De = e;
    else {
      if (e === null)
        throw re.alternate === null ? Error(i(467)) : Error(i(310));
      De = e, e = {
        memoizedState: De.memoizedState,
        baseState: De.baseState,
        baseQueue: De.baseQueue,
        queue: De.queue,
        next: null
      }, et === null ? re.memoizedState = et = e : et = et.next = e;
    }
    return et;
  }
  function Lo() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function lr(e) {
    var t = or;
    return or += 1, ca === null && (ca = []), e = Hp(ca, e, t), t = re, (et === null ? t.memoizedState : et.next) === null && (t = t.alternate, I.H = t === null || t.memoizedState === null ? Av : os), e;
  }
  function Bo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return lr(e);
      if (e.$$typeof === ue) return dt(e);
    }
    throw Error(i(438, String(e)));
  }
  function Xc(e) {
    var t = null, a = re.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var o = re.alternate;
      o !== null && (o = o.updateQueue, o !== null && (o = o.memoCache, o != null && (t = {
        data: o.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (t ??= {
      data: [],
      index: 0
    }, a === null && (a = Lo(), re.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0) for (a = t.data[t.index] = Array(e), o = 0; o < e; o++) a[o] = Lt;
    return t.index++, a;
  }
  function Tn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Go(e) {
    return Pc(Xe(), De, e);
  }
  function Pc(e, t, a) {
    var o = e.queue;
    if (o === null) throw Error(i(311));
    o.lastRenderedReducer = a;
    var c = e.baseQueue, f = o.pending;
    if (f !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = f.next, f.next = m;
      }
      t.baseQueue = c = f, o.pending = null;
    }
    if (f = e.baseState, c === null) e.memoizedState = f;
    else {
      t = c.next;
      var p = m = null, g = null, x = t, j = !1;
      do {
        var C = x.lane & -536870913;
        if (C !== x.lane ? (ye & C) === C : (wn & C) === C) {
          var U = x.revertLane;
          if (U === 0) g !== null && (g = g.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null
          }), C === ia && (j = !0);
          else if ((wn & U) === U) {
            x = x.next, U === ia && (j = !0);
            continue;
          } else C = {
            lane: 0,
            revertLane: x.revertLane,
            gesture: null,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null
          }, g === null ? (p = g = C, m = f) : g = g.next = C, re.lanes |= U, Xn |= U;
          C = x.action, Oi && a(f, C), f = x.hasEagerState ? x.eagerState : a(f, C);
        } else U = {
          lane: C,
          revertLane: x.revertLane,
          gesture: x.gesture,
          action: x.action,
          hasEagerState: x.hasEagerState,
          eagerState: x.eagerState,
          next: null
        }, g === null ? (p = g = U, m = f) : g = g.next = U, re.lanes |= C, Xn |= C;
        x = x.next;
      } while (x !== null && x !== t);
      if (g === null ? m = f : g.next = p, !Zt(f, e.memoizedState) && (tt = !0, j && (a = aa, a !== null))) throw a;
      e.memoizedState = f, e.baseState = m, e.baseQueue = g, o.lastRenderedState = f;
    }
    return c === null && (o.lanes = 0), [e.memoizedState, o.dispatch];
  }
  function Kc(e) {
    var t = Xe(), a = t.queue;
    if (a === null) throw Error(i(311));
    a.lastRenderedReducer = e;
    var o = a.dispatch, c = a.pending, f = t.memoizedState;
    if (c !== null) {
      a.pending = null;
      var m = c = c.next;
      do
        f = e(f, m.action), m = m.next;
      while (m !== c);
      Zt(f, t.memoizedState) || (tt = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
    }
    return [f, o];
  }
  function Wp(e, t, a) {
    var o = re, c = Xe(), f = _e;
    if (f) {
      if (a === void 0) throw Error(i(407));
      a = a();
    } else a = t();
    var m = !Zt((De || c).memoizedState, a);
    if (m && (c.memoizedState = a, tt = !0), c = c.queue, es(tv.bind(null, o, c, e), [e]), c.getSnapshot !== t || m || et !== null && et.memoizedState.tag & 1) {
      if (o.flags |= 2048, sa(9, { destroy: void 0 }, ev.bind(null, o, c, a, t), null), Me === null) throw Error(i(349));
      f || (wn & 127) !== 0 || Fp(o, t, a);
    }
    return a;
  }
  function Fp(e, t, a) {
    e.flags |= 16384, e = {
      getSnapshot: t,
      value: a
    }, t = re.updateQueue, t === null ? (t = Lo(), re.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function ev(e, t, a, o) {
    t.value = a, t.getSnapshot = o, nv(t) && iv(e);
  }
  function tv(e, t, a) {
    return a(function() {
      nv(t) && iv(e);
    });
  }
  function nv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !Zt(e, a);
    } catch {
      return !0;
    }
  }
  function iv(e) {
    var t = gi(e, 2);
    t !== null && xt(t, e, 2);
  }
  function Wc(e) {
    var t = St();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), Oi) {
        Mn(!0);
        try {
          a();
        } finally {
          Mn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Tn,
      lastRenderedState: e
    }, t;
  }
  function av(e, t, a, o) {
    return e.baseState = a, Pc(e, De, typeof o == "function" ? o : Tn);
  }
  function D$(e, t, a, o, c) {
    if (Vo(e)) throw Error(i(485));
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
      I.T !== null ? a(!0) : f.isTransition = !1, o(f), a = t.pending, a === null ? (f.next = t.pending = f, rv(t, f)) : (f.next = a.next, t.pending = a.next = f);
    }
  }
  function rv(e, t) {
    var a = t.action, o = t.payload, c = e.state;
    if (t.isTransition) {
      var f = I.T, m = {};
      I.T = m;
      try {
        var p = a(c, o), g = I.S;
        g !== null && g(m, p), ov(e, t, p);
      } catch (x) {
        Fc(e, t, x);
      } finally {
        f !== null && m.types !== null && (f.types = m.types), I.T = f;
      }
    } else try {
      f = a(c, o), ov(e, t, f);
    } catch (x) {
      Fc(e, t, x);
    }
  }
  function ov(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(o) {
      lv(e, t, o);
    }, function(o) {
      return Fc(e, t, o);
    }) : lv(e, t, a);
  }
  function lv(e, t, a) {
    t.status = "fulfilled", t.value = a, uv(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, rv(e, a)));
  }
  function Fc(e, t, a) {
    var o = e.pending;
    if (e.pending = null, o !== null) {
      o = o.next;
      do
        t.status = "rejected", t.reason = a, uv(t), t = t.next;
      while (t !== o);
    }
    e.action = null;
  }
  function uv(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function cv(e, t) {
    return t;
  }
  function sv(e, t) {
    if (_e) {
      var a = Me.formState;
      if (a !== null) {
        e: {
          var o = re;
          if (_e) {
            if (Le) {
              t: {
                for (var c = Le, f = Xt; c.nodeType !== 8; ) {
                  if (!f) {
                    c = null;
                    break t;
                  }
                  if (c = Wt(c.nextSibling), c === null) {
                    c = null;
                    break t;
                  }
                }
                f = c.data, c = f === "F!" || f === "F" ? c : null;
              }
              if (c) {
                Le = Wt(c.nextSibling), o = c.data === "F!";
                break e;
              }
            }
            Ln(o);
          }
          o = !1;
        }
        o && (t = a[0]);
      }
    }
    return a = St(), a.memoizedState = a.baseState = t, o = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cv,
      lastRenderedState: t
    }, a.queue = o, a = xv.bind(null, re, o), o.dispatch = a, o = Wc(!1), f = rs.bind(null, re, !1, o.queue), o = St(), c = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, o.queue = c, a = D$.bind(null, re, c, f, a), c.dispatch = a, o.memoizedState = e, [
      t,
      a,
      !1
    ];
  }
  function fv(e) {
    return dv(Xe(), De, e);
  }
  function dv(e, t, a) {
    if (t = Pc(e, t, cv)[0], e = Go(Tn)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var o = lr(t);
    } catch (m) {
      throw m === ra ? Do : m;
    }
    else o = t;
    t = Xe();
    var c = t.queue, f = c.dispatch;
    return a !== t.memoizedState && (re.flags |= 2048, sa(9, { destroy: void 0 }, Z$.bind(null, c, a), null)), [
      o,
      f,
      e
    ];
  }
  function Z$(e, t) {
    e.action = t;
  }
  function mv(e) {
    var t = Xe(), a = De;
    if (a !== null) return dv(t, a, e);
    Xe(), t = t.memoizedState, a = Xe();
    var o = a.queue.dispatch;
    return a.memoizedState = e, [
      t,
      o,
      !1
    ];
  }
  function sa(e, t, a, o) {
    return e = {
      tag: e,
      create: a,
      deps: o,
      inst: t,
      next: null
    }, t = re.updateQueue, t === null && (t = Lo(), re.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (o = a.next, a.next = e, e.next = o, t.lastEffect = e), e;
  }
  function pv() {
    return Xe().memoizedState;
  }
  function Yo(e, t, a, o) {
    var c = St();
    re.flags |= e, c.memoizedState = sa(1 | t, { destroy: void 0 }, a, o === void 0 ? null : o);
  }
  function Qo(e, t, a, o) {
    var c = Xe();
    o = o === void 0 ? null : o;
    var f = c.memoizedState.inst;
    De !== null && o !== null && Gc(o, De.memoizedState.deps) ? c.memoizedState = sa(t, f, a, o) : (re.flags |= e, c.memoizedState = sa(1 | t, f, a, o));
  }
  function vv(e, t) {
    Yo(8390656, 8, e, t);
  }
  function es(e, t) {
    Qo(2048, 8, e, t);
  }
  function C$(e) {
    re.flags |= 4;
    var t = re.updateQueue;
    if (t === null) t = Lo(), re.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function hv(e) {
    var t = Xe().memoizedState;
    return C$({
      ref: t,
      nextImpl: e
    }), function() {
      if ((Te & 2) !== 0) throw Error(i(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function gv(e, t) {
    return Qo(4, 2, e, t);
  }
  function yv(e, t) {
    return Qo(4, 4, e, t);
  }
  function bv(e, t) {
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
  function _v(e, t, a) {
    a = a != null ? a.concat([e]) : null, Qo(4, 4, bv.bind(null, t, e), a);
  }
  function ts() {
  }
  function Sv(e, t) {
    var a = Xe();
    t = t === void 0 ? null : t;
    var o = a.memoizedState;
    return t !== null && Gc(t, o[1]) ? o[0] : (a.memoizedState = [e, t], e);
  }
  function $v(e, t) {
    var a = Xe();
    t = t === void 0 ? null : t;
    var o = a.memoizedState;
    if (t !== null && Gc(t, o[1])) return o[0];
    if (o = e(), Oi) {
      Mn(!0);
      try {
        e();
      } finally {
        Mn(!1);
      }
    }
    return a.memoizedState = [o, t], o;
  }
  function ns(e, t, a) {
    return a === void 0 || (wn & 1073741824) !== 0 && (ye & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = _h(), re.lanes |= e, Xn |= e, a);
  }
  function zv(e, t, a, o) {
    return Zt(a, t) ? a : la.current !== null ? (e = ns(e, a, o), Zt(e, t) || (tt = !0), e) : (wn & 42) === 0 || (wn & 1073741824) !== 0 && (ye & 261930) === 0 ? (tt = !0, e.memoizedState = a) : (e = _h(), re.lanes |= e, Xn |= e, t);
  }
  function wv(e, t, a, o, c) {
    var f = B.p;
    B.p = f !== 0 && 8 > f ? f : 8;
    var m = I.T, p = {};
    I.T = p, rs(e, !1, t, a);
    try {
      var g = c(), x = I.S;
      x !== null && x(p, g), g !== null && typeof g == "object" && typeof g.then == "function" ? ur(e, t, N$(g, o), Kt(e)) : ur(e, t, o, Kt(e));
    } catch (j) {
      ur(e, t, {
        then: function() {
        },
        status: "rejected",
        reason: j
      }, Kt());
    } finally {
      B.p = f, m !== null && p.types !== null && (m.types = p.types), I.T = m;
    }
  }
  function M$() {
  }
  function is(e, t, a, o) {
    if (e.tag !== 5) throw Error(i(476));
    var c = Tv(e).queue;
    wv(e, c, t, we, a === null ? M$ : function() {
      return kv(e), a(o);
    });
  }
  function Tv(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: we,
      baseState: we,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tn,
        lastRenderedState: we
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
        lastRenderedReducer: Tn,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function kv(e) {
    var t = Tv(e);
    t.next === null && (t = e.alternate.memoizedState), ur(e, t.next.queue, {}, Kt());
  }
  function as() {
    return dt(Tr);
  }
  function Ev() {
    return Xe().memoizedState;
  }
  function Ov() {
    return Xe().memoizedState;
  }
  function R$(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Kt();
          e = ki(a);
          var o = Ei(t, e, a);
          o !== null && (xt(o, t, a), ir(o, t, a)), t = { cache: jc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function I$(e, t, a) {
    var o = Kt();
    a = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Vo(e) ? Uv(t, a) : (a = $c(e, t, a, o), a !== null && (xt(a, e, o), Nv(a, t, o)));
  }
  function xv(e, t, a) {
    ur(e, t, a, Kt());
  }
  function ur(e, t, a, o) {
    var c = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Vo(e)) Uv(t, c);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) try {
        var m = t.lastRenderedState, p = f(m, a);
        if (c.hasEagerState = !0, c.eagerState = p, Zt(p, m)) return Eo(e, t, c, 0), Me === null && ko(), !1;
      } catch {
      }
      if (a = $c(e, t, c, o), a !== null) return xt(a, e, o), Nv(a, t, o), !0;
    }
    return !1;
  }
  function rs(e, t, a, o) {
    if (o = {
      lane: 2,
      revertLane: Ms(),
      gesture: null,
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Vo(e)) {
      if (t) throw Error(i(479));
    } else t = $c(e, a, o, 2), t !== null && xt(t, e, 2);
  }
  function Vo(e) {
    var t = e.alternate;
    return e === re || t !== null && t === re;
  }
  function Uv(e, t) {
    ua = qo = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function Nv(e, t, a) {
    if ((a & 4194048) !== 0) {
      var o = t.lanes;
      o &= e.pendingLanes, a |= o, t.lanes = a, Zm(e, a);
    }
  }
  var cr = {
    readContext: dt,
    use: Bo,
    useCallback: Ye,
    useContext: Ye,
    useEffect: Ye,
    useImperativeHandle: Ye,
    useLayoutEffect: Ye,
    useInsertionEffect: Ye,
    useMemo: Ye,
    useReducer: Ye,
    useRef: Ye,
    useState: Ye,
    useDebugValue: Ye,
    useDeferredValue: Ye,
    useTransition: Ye,
    useSyncExternalStore: Ye,
    useId: Ye,
    useHostTransitionStatus: Ye,
    useFormState: Ye,
    useActionState: Ye,
    useOptimistic: Ye,
    useMemoCache: Ye,
    useCacheRefresh: Ye
  };
  cr.useEffectEvent = Ye;
  var Av = {
    readContext: dt,
    use: Bo,
    useCallback: function(e, t) {
      return St().memoizedState = [e, t === void 0 ? null : t], e;
    },
    useContext: dt,
    useEffect: vv,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, Yo(4194308, 4, bv.bind(null, t, e), a);
    },
    useLayoutEffect: function(e, t) {
      return Yo(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Yo(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = St();
      t = t === void 0 ? null : t;
      var o = e();
      if (Oi) {
        Mn(!0);
        try {
          e();
        } finally {
          Mn(!1);
        }
      }
      return a.memoizedState = [o, t], o;
    },
    useReducer: function(e, t, a) {
      var o = St();
      if (a !== void 0) {
        var c = a(t);
        if (Oi) {
          Mn(!0);
          try {
            a(t);
          } finally {
            Mn(!1);
          }
        }
      } else c = t;
      return o.memoizedState = o.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, o.queue = e, e = e.dispatch = I$.bind(null, re, e), [o.memoizedState, e];
    },
    useRef: function(e) {
      var t = St();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Wc(e);
      var t = e.queue, a = xv.bind(null, re, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: ts,
    useDeferredValue: function(e, t) {
      return ns(St(), e, t);
    },
    useTransition: function() {
      var e = Wc(!1);
      return e = wv.bind(null, re, e.queue, !0, !1), St().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var o = re, c = St();
      if (_e) {
        if (a === void 0) throw Error(i(407));
        a = a();
      } else {
        if (a = t(), Me === null) throw Error(i(349));
        (ye & 127) !== 0 || Fp(o, t, a);
      }
      c.memoizedState = a;
      var f = {
        value: a,
        getSnapshot: t
      };
      return c.queue = f, vv(tv.bind(null, o, f, e), [e]), o.flags |= 2048, sa(9, { destroy: void 0 }, ev.bind(null, o, f, a, t), null), a;
    },
    useId: function() {
      var e = St(), t = Me.identifierPrefix;
      if (_e) {
        var a = mn, o = dn;
        a = (o & ~(1 << 32 - Dt(o) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Ho++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else a = A$++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: as,
    useFormState: sv,
    useActionState: sv,
    useOptimistic: function(e) {
      var t = St();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = rs.bind(null, re, !0, a), a.dispatch = t, [e, t];
    },
    useMemoCache: Xc,
    useCacheRefresh: function() {
      return St().memoizedState = R$.bind(null, re);
    },
    useEffectEvent: function(e) {
      var t = St(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((Te & 2) !== 0) throw Error(i(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, os = {
    readContext: dt,
    use: Bo,
    useCallback: Sv,
    useContext: dt,
    useEffect: es,
    useImperativeHandle: _v,
    useInsertionEffect: gv,
    useLayoutEffect: yv,
    useMemo: $v,
    useReducer: Go,
    useRef: pv,
    useState: function() {
      return Go(Tn);
    },
    useDebugValue: ts,
    useDeferredValue: function(e, t) {
      return zv(Xe(), De.memoizedState, e, t);
    },
    useTransition: function() {
      var e = Go(Tn)[0], t = Xe().memoizedState;
      return [typeof e == "boolean" ? e : lr(e), t];
    },
    useSyncExternalStore: Wp,
    useId: Ev,
    useHostTransitionStatus: as,
    useFormState: fv,
    useActionState: fv,
    useOptimistic: function(e, t) {
      return av(Xe(), De, e, t);
    },
    useMemoCache: Xc,
    useCacheRefresh: Ov
  };
  os.useEffectEvent = hv;
  var jv = {
    readContext: dt,
    use: Bo,
    useCallback: Sv,
    useContext: dt,
    useEffect: es,
    useImperativeHandle: _v,
    useInsertionEffect: gv,
    useLayoutEffect: yv,
    useMemo: $v,
    useReducer: Kc,
    useRef: pv,
    useState: function() {
      return Kc(Tn);
    },
    useDebugValue: ts,
    useDeferredValue: function(e, t) {
      var a = Xe();
      return De === null ? ns(a, e, t) : zv(a, De.memoizedState, e, t);
    },
    useTransition: function() {
      var e = Kc(Tn)[0], t = Xe().memoizedState;
      return [typeof e == "boolean" ? e : lr(e), t];
    },
    useSyncExternalStore: Wp,
    useId: Ev,
    useHostTransitionStatus: as,
    useFormState: mv,
    useActionState: mv,
    useOptimistic: function(e, t) {
      var a = Xe();
      return De !== null ? av(a, De, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Xc,
    useCacheRefresh: Ov
  };
  jv.useEffectEvent = hv;
  function ls(e, t, a, o) {
    t = e.memoizedState, a = a(o, t), a = a == null ? t : y({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var us = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var o = Kt(), c = ki(o);
      c.payload = t, a != null && (c.callback = a), t = Ei(e, c, o), t !== null && (xt(t, e, o), ir(t, e, o));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var o = Kt(), c = ki(o);
      c.tag = 1, c.payload = t, a != null && (c.callback = a), t = Ei(e, c, o), t !== null && (xt(t, e, o), ir(t, e, o));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Kt(), o = ki(a);
      o.tag = 2, t != null && (o.callback = t), t = Ei(e, o, a), t !== null && (xt(t, e, a), ir(t, e, a));
    }
  };
  function Dv(e, t, a, o, c, f, m) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, f, m) : t.prototype && t.prototype.isPureReactComponent ? !Xa(a, o) || !Xa(c, f) : !0;
  }
  function Zv(e, t, a, o) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, o), t.state !== e && us.enqueueReplaceState(t, t.state, null);
  }
  function xi(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var o in t) o !== "ref" && (a[o] = t[o]);
    }
    if (e = e.defaultProps) {
      a === t && (a = y({}, a));
      for (var c in e) a[c] === void 0 && (a[c] = e[c]);
    }
    return a;
  }
  function q$(e) {
    To(e);
  }
  function H$(e) {
    console.error(e);
  }
  function L$(e) {
    To(e);
  }
  function Jo(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Cv(e, t, a) {
    try {
      var o = e.onCaughtError;
      o(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function cs(e, t, a) {
    return a = ki(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Jo(e, t);
    }, a;
  }
  function Mv(e) {
    return e = ki(e), e.tag = 3, e;
  }
  function Rv(e, t, a, o) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var f = o.value;
      e.payload = function() {
        return c(f);
      }, e.callback = function() {
        Cv(t, a, o);
      };
    }
    var m = a.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (e.callback = function() {
      Cv(t, a, o), typeof c != "function" && (Pn === null ? Pn = /* @__PURE__ */ new Set([this]) : Pn.add(this));
      var p = o.stack;
      this.componentDidCatch(o.value, { componentStack: p !== null ? p : "" });
    });
  }
  function B$(e, t, a, o, c) {
    if (a.flags |= 32768, o !== null && typeof o == "object" && typeof o.then == "function") {
      if (t = a.alternate, t !== null && na(t, a, c, !0), a = Mt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Pt === null ? ol() : a.alternate === null && Qe === 0 && (Qe = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, o === Zo ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([o]) : t.add(o), Ds(e, o, c)), !1;
          case 22:
            return a.flags |= 65536, o === Zo ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([o])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([o]) : a.add(o)), Ds(e, o, c)), !1;
        }
        throw Error(i(435, a.tag));
      }
      return Ds(e, o, c), ol(), !1;
    }
    if (_e) return t = Mt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = c, o !== Oc && (e = Error(i(422), { cause: o }), Wa(Qt(e, a)))) : (o !== Oc && (t = Error(i(423), { cause: o }), Wa(Qt(t, a))), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, o = Qt(o, a), c = cs(e.stateNode, o, c), Ic(e, c), Qe !== 4 && (Qe = 2)), !1;
    var f = Error(i(520), { cause: o });
    if (f = Qt(f, a), gr === null ? gr = [f] : gr.push(f), Qe !== 4 && (Qe = 2), t === null) return !0;
    o = Qt(o, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = c & -c, a.lanes |= e, e = cs(a.stateNode, o, e), Ic(a, e), !1;
        case 1:
          if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Pn === null || !Pn.has(f)))) return a.flags |= 65536, c &= -c, a.lanes |= c, c = Mv(c), Rv(c, e, a, o), Ic(a, c), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var ss = Error(i(461)), tt = !1;
  function mt(e, t, a, o) {
    t.child = e === null ? Yp(t, null, a, o) : Ti(t, e.child, a, o);
  }
  function Iv(e, t, a, o, c) {
    a = a.render;
    var f = t.ref;
    if ("ref" in o) {
      var m = {};
      for (var p in o) p !== "ref" && (m[p] = o[p]);
    } else m = o;
    return Si(t), o = Yc(e, t, a, m, f, c), p = Qc(), e !== null && !tt ? (Vc(e, t, c), kn(e, t, c)) : (_e && p && kc(t), t.flags |= 1, mt(e, t, o, c), t.child);
  }
  function qv(e, t, a, o, c) {
    if (e === null) {
      var f = a.type;
      return typeof f == "function" && !zc(f) && f.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = f, Hv(e, t, f, o, c)) : (e = xo(a.type, null, o, t, t.mode, c), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (f = e.child, !ys(e, c)) {
      var m = f.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Xa, a(m, o) && e.ref === t.ref) return kn(e, t, c);
    }
    return t.flags |= 1, e = _n(f, o), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Hv(e, t, a, o, c) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Xa(f, o) && e.ref === t.ref) if (tt = !1, t.pendingProps = o = f, ys(e, c)) (e.flags & 131072) !== 0 && (tt = !0);
      else return t.lanes = e.lanes, kn(e, t, c);
    }
    return fs(e, t, a, o, c);
  }
  function Lv(e, t, a, o) {
    var c = o.children, f = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), o.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (f = f !== null ? f.baseLanes | a : a, e !== null) {
          for (o = t.child = e.child, c = 0; o !== null; ) c = c | o.lanes | o.childLanes, o = o.sibling;
          o = c & ~f;
        } else o = 0, t.child = null;
        return Bv(e, t, f, a, o);
      }
      if ((a & 536870912) !== 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, e !== null && jo(t, f !== null ? f.cachePool : null), f !== null ? Jp(t, f) : Hc(), Xp(t);
      else return o = t.lanes = 536870912, Bv(e, t, f !== null ? f.baseLanes | a : a, a, o);
    } else f !== null ? (jo(t, f.cachePool), Jp(t, f), Qn(t), t.memoizedState = null) : (e !== null && jo(t, null), Hc(), Qn(t));
    return mt(e, t, c, a), t.child;
  }
  function sr(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Bv(e, t, a, o, c) {
    var f = Zc();
    return f = f === null ? null : {
      parent: Fe._currentValue,
      pool: f
    }, t.memoizedState = {
      baseLanes: a,
      cachePool: f
    }, e !== null && jo(t, null), Hc(), Xp(t), e !== null && na(e, t, o, !0), t.childLanes = c, null;
  }
  function Xo(e, t) {
    return t = Ko({
      mode: t.mode,
      children: t.children
    }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Gv(e, t, a) {
    return Ti(t, e.child, null, a), e = Xo(t, t.pendingProps), e.flags |= 2, Rt(t), t.memoizedState = null, e;
  }
  function G$(e, t, a) {
    var o = t.pendingProps, c = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (_e) {
        if (o.mode === "hidden") return e = Xo(t, o), t.lanes = 536870912, sr(null, e);
        if (Bc(t), (e = Le) ? (e = ig(e, Xt), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: qn !== null ? {
            id: dn,
            overflow: mn
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Up(e), a.return = t, t.child = a, ft = t, Le = null)) : e = null, e === null) throw Ln(t);
        return t.lanes = 536870912, null;
      }
      return Xo(t, o);
    }
    var f = e.memoizedState;
    if (f !== null) {
      var m = f.dehydrated;
      if (Bc(t), c) if (t.flags & 256) t.flags &= -257, t = Gv(e, t, a);
      else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
      else throw Error(i(558));
      else if (tt || na(e, t, a, !1), c = (a & e.childLanes) !== 0, tt || c) {
        if (o = Me, o !== null && (m = Cm(o, a), m !== 0 && m !== f.retryLane)) throw f.retryLane = m, gi(e, m), xt(o, e, m), ss;
        ol(), t = Gv(e, t, a);
      } else e = f.treeContext, Le = Wt(m.nextSibling), ft = t, _e = !0, Hn = null, Xt = !1, e !== null && jp(t, e), t = Xo(t, o), t.flags |= 4096;
      return t;
    }
    return e = _n(e.child, {
      mode: o.mode,
      children: o.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Po(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(i(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function fs(e, t, a, o, c) {
    return Si(t), a = Yc(e, t, a, o, void 0, c), o = Qc(), e !== null && !tt ? (Vc(e, t, c), kn(e, t, c)) : (_e && o && kc(t), t.flags |= 1, mt(e, t, a, c), t.child);
  }
  function Yv(e, t, a, o, c, f) {
    return Si(t), t.updateQueue = null, a = Kp(t, o, a, c), Pp(e), o = Qc(), e !== null && !tt ? (Vc(e, t, f), kn(e, t, f)) : (_e && o && kc(t), t.flags |= 1, mt(e, t, a, f), t.child);
  }
  function Qv(e, t, a, o, c) {
    if (Si(t), t.stateNode === null) {
      var f = Wi, m = a.contextType;
      typeof m == "object" && m !== null && (f = dt(m)), f = new a(o, f), t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = us, t.stateNode = f, f._reactInternals = t, f = t.stateNode, f.props = o, f.state = t.memoizedState, f.refs = {}, Mc(t), m = a.contextType, f.context = typeof m == "object" && m !== null ? dt(m) : Wi, f.state = t.memoizedState, m = a.getDerivedStateFromProps, typeof m == "function" && (ls(t, a, m, o), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (m = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), m !== f.state && us.enqueueReplaceState(f, f.state, null), rr(t, o, f, c), ar(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), o = !0;
    } else if (e === null) {
      f = t.stateNode;
      var p = t.memoizedProps, g = xi(a, p);
      f.props = g;
      var x = f.context, j = a.contextType;
      m = Wi, typeof j == "object" && j !== null && (m = dt(j));
      var C = a.getDerivedStateFromProps;
      j = typeof C == "function" || typeof f.getSnapshotBeforeUpdate == "function", p = t.pendingProps !== p, j || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (p || x !== m) && Zv(t, f, o, m), Gn = !1;
      var U = t.memoizedState;
      f.state = U, rr(t, o, f, c), ar(), x = t.memoizedState, p || U !== x || Gn ? (typeof C == "function" && (ls(t, a, C, o), x = t.memoizedState), (g = Gn || Dv(t, a, g, o, U, x, m)) ? (j || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = o, t.memoizedState = x), f.props = o, f.state = x, f.context = m, o = g) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), o = !1);
    } else {
      f = t.stateNode, Rc(e, t), m = t.memoizedProps, j = xi(a, m), f.props = j, C = t.pendingProps, U = f.context, x = a.contextType, g = Wi, typeof x == "object" && x !== null && (g = dt(x)), p = a.getDerivedStateFromProps, (x = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (m !== C || U !== g) && Zv(t, f, o, g), Gn = !1, U = t.memoizedState, f.state = U, rr(t, o, f, c), ar();
      var A = t.memoizedState;
      m !== C || U !== A || Gn || e !== null && e.dependencies !== null && No(e.dependencies) ? (typeof p == "function" && (ls(t, a, p, o), A = t.memoizedState), (j = Gn || Dv(t, a, j, o, U, A, g) || e !== null && e.dependencies !== null && No(e.dependencies)) ? (x || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(o, A, g), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(o, A, g)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || m === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), t.memoizedProps = o, t.memoizedState = A), f.props = o, f.state = A, f.context = g, o = j) : (typeof f.componentDidUpdate != "function" || m === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), o = !1);
    }
    return f = o, Po(e, t), o = (t.flags & 128) !== 0, f || o ? (f = t.stateNode, a = o && typeof a.getDerivedStateFromError != "function" ? null : f.render(), t.flags |= 1, e !== null && o ? (t.child = Ti(t, e.child, null, c), t.child = Ti(t, null, a, c)) : mt(e, t, a, c), t.memoizedState = f.state, e = t.child) : e = kn(e, t, c), e;
  }
  function Vv(e, t, a, o) {
    return bi(), t.flags |= 256, mt(e, t, a, o), t.child;
  }
  var ds = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ms(e) {
    return {
      baseLanes: e,
      cachePool: Ip()
    };
  }
  function ps(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= qt), e;
  }
  function Jv(e, t, a) {
    var o = t.pendingProps, c = !1, f = (t.flags & 128) !== 0, m;
    if ((m = f) || (m = e !== null && e.memoizedState === null ? !1 : (Je.current & 2) !== 0), m && (c = !0, t.flags &= -129), m = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (_e) {
        if (c ? Yn(t) : Qn(t), (e = Le) ? (e = ig(e, Xt), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: qn !== null ? {
            id: dn,
            overflow: mn
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = Up(e), a.return = t, t.child = a, ft = t, Le = null)) : e = null, e === null) throw Ln(t);
        return Xs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var p = o.children;
      return o = o.fallback, c ? (Qn(t), c = t.mode, p = Ko({
        mode: "hidden",
        children: p
      }, c), o = yi(o, c, a, null), p.return = t, o.return = t, p.sibling = o, t.child = p, o = t.child, o.memoizedState = ms(a), o.childLanes = ps(e, m, a), t.memoizedState = ds, sr(null, o)) : (Yn(t), vs(t, p));
    }
    var g = e.memoizedState;
    if (g !== null && (p = g.dehydrated, p !== null)) {
      if (f) t.flags & 256 ? (Yn(t), t.flags &= -257, t = hs(e, t, a)) : t.memoizedState !== null ? (Qn(t), t.child = e.child, t.flags |= 128, t = null) : (Qn(t), p = o.fallback, c = t.mode, o = Ko({
        mode: "visible",
        children: o.children
      }, c), p = yi(p, c, a, null), p.flags |= 2, o.return = t, p.return = t, o.sibling = p, t.child = o, Ti(t, e.child, null, a), o = t.child, o.memoizedState = ms(a), o.childLanes = ps(e, m, a), t.memoizedState = ds, t = sr(null, o));
      else if (Yn(t), Xs(p)) {
        if (m = p.nextSibling && p.nextSibling.dataset, m) var x = m.dgst;
        m = x, o = Error(i(419)), o.stack = "", o.digest = m, Wa({
          value: o,
          source: null,
          stack: null
        }), t = hs(e, t, a);
      } else if (tt || na(e, t, a, !1), m = (a & e.childLanes) !== 0, tt || m) {
        if (m = Me, m !== null && (o = Cm(m, a), o !== 0 && o !== g.retryLane)) throw g.retryLane = o, gi(e, o), xt(m, e, o), ss;
        Js(p) || ol(), t = hs(e, t, a);
      } else Js(p) ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, Le = Wt(p.nextSibling), ft = t, _e = !0, Hn = null, Xt = !1, e !== null && jp(t, e), t = vs(t, o.children), t.flags |= 4096);
      return t;
    }
    return c ? (Qn(t), p = o.fallback, c = t.mode, g = e.child, x = g.sibling, o = _n(g, {
      mode: "hidden",
      children: o.children
    }), o.subtreeFlags = g.subtreeFlags & 65011712, x !== null ? p = _n(x, p) : (p = yi(p, c, a, null), p.flags |= 2), p.return = t, o.return = t, o.sibling = p, t.child = o, sr(null, o), o = t.child, p = e.child.memoizedState, p === null ? p = ms(a) : (c = p.cachePool, c !== null ? (g = Fe._currentValue, c = c.parent !== g ? {
      parent: g,
      pool: g
    } : c) : c = Ip(), p = {
      baseLanes: p.baseLanes | a,
      cachePool: c
    }), o.memoizedState = p, o.childLanes = ps(e, m, a), t.memoizedState = ds, sr(e.child, o)) : (Yn(t), a = e.child, e = a.sibling, a = _n(a, {
      mode: "visible",
      children: o.children
    }), a.return = t, a.sibling = null, e !== null && (m = t.deletions, m === null ? (t.deletions = [e], t.flags |= 16) : m.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function vs(e, t) {
    return t = Ko({
      mode: "visible",
      children: t
    }, e.mode), t.return = e, e.child = t;
  }
  function Ko(e, t) {
    return e = Ct(22, e, null, t), e.lanes = 0, e;
  }
  function hs(e, t, a) {
    return Ti(t, e.child, null, a), e = vs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Xv(e, t, a) {
    e.lanes |= t;
    var o = e.alternate;
    o !== null && (o.lanes |= t), Nc(e.return, t, a);
  }
  function gs(e, t, a, o, c, f) {
    var m = e.memoizedState;
    m === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: a,
      tailMode: c,
      treeForkCount: f
    } : (m.isBackwards = t, m.rendering = null, m.renderingStartTime = 0, m.last = o, m.tail = a, m.tailMode = c, m.treeForkCount = f);
  }
  function Pv(e, t, a) {
    var o = t.pendingProps, c = o.revealOrder, f = o.tail;
    o = o.children;
    var m = Je.current, p = (m & 2) !== 0;
    if (p ? (m = m & 1 | 2, t.flags |= 128) : m &= 1, L(Je, m), mt(e, t, o, a), o = _e ? Ka : 0, !p && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Xv(e, a, t);
      else if (e.tag === 19) Xv(e, a, t);
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
        for (a = t.child, c = null; a !== null; ) e = a.alternate, e !== null && Io(e) === null && (c = a), a = a.sibling;
        a = c, a === null ? (c = t.child, t.child = null) : (c = a.sibling, a.sibling = null), gs(t, !1, c, a, f, o);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, c = t.child, t.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && Io(e) === null) {
            t.child = c;
            break;
          }
          e = c.sibling, c.sibling = a, a = c, c = e;
        }
        gs(t, !0, a, null, f, o);
        break;
      case "together":
        gs(t, !1, null, null, void 0, o);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function kn(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), Xn |= t.lanes, (a & t.childLanes) === 0) if (e !== null) {
      if (na(e, t, a, !1), (a & t.childLanes) === 0) return null;
    } else return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, a = _n(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; ) e = e.sibling, a = a.sibling = _n(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function ys(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && No(e)));
  }
  function Y$(e, t, a) {
    switch (t.tag) {
      case 3:
        _t(t, t.stateNode.containerInfo), Bn(t, Fe, e.memoizedState.cache), bi();
        break;
      case 27:
      case 5:
        Ca(t);
        break;
      case 4:
        _t(t, t.stateNode.containerInfo);
        break;
      case 10:
        Bn(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, Bc(t), null;
        break;
      case 13:
        var o = t.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (Yn(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Jv(e, t, a) : (Yn(t), e = kn(e, t, a), e !== null ? e.sibling : null);
        Yn(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (o = (a & t.childLanes) !== 0, o || (na(e, t, a, !1), o = (a & t.childLanes) !== 0), c) {
          if (o) return Pv(e, t, a);
          t.flags |= 128;
        }
        if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), L(Je, Je.current), o) break;
        return null;
      case 22:
        return t.lanes = 0, Lv(e, t, a, t.pendingProps);
      case 24:
        Bn(t, Fe, e.memoizedState.cache);
    }
    return kn(e, t, a);
  }
  function Kv(e, t, a) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps) tt = !0;
    else {
      if (!ys(e, a) && (t.flags & 128) === 0) return tt = !1, Y$(e, t, a);
      tt = (e.flags & 131072) !== 0;
    }
    else tt = !1, _e && (t.flags & 1048576) !== 0 && Ap(t, Ka, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var o = t.pendingProps;
          if (e = zi(t.elementType), t.type = e, typeof e == "function") zc(e) ? (o = xi(e, o), t.tag = 1, t = Qv(null, t, e, o, a)) : (t.tag = 0, t = fs(null, t, e, o, a));
          else {
            if (e != null) {
              var c = e.$$typeof;
              if (c === it) {
                t.tag = 11, t = Iv(null, t, e, o, a);
                break e;
              } else if (c === J) {
                t.tag = 14, t = qv(null, t, e, o, a);
                break e;
              }
            }
            throw t = rn(e) || e, Error(i(306, t, ""));
          }
        }
        return t;
      case 0:
        return fs(e, t, t.type, t.pendingProps, a);
      case 1:
        return o = t.type, c = xi(o, t.pendingProps), Qv(e, t, o, c, a);
      case 3:
        e: {
          if (_t(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
          o = t.pendingProps;
          var f = t.memoizedState;
          c = f.element, Rc(e, t), rr(t, o, null, a);
          var m = t.memoizedState;
          if (o = m.cache, Bn(t, Fe, o), o !== f.cache && Ac(t, [Fe], a, !0), ar(), o = m.element, f.isDehydrated) if (f = {
            element: o,
            isDehydrated: !1,
            cache: m.cache
          }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
            t = Vv(e, t, o, a);
            break e;
          } else if (o !== c) {
            c = Qt(Error(i(424)), t), Wa(c), t = Vv(e, t, o, a);
            break e;
          } else
            for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Le = Wt(e.firstChild), ft = t, _e = !0, Hn = null, Xt = !0, a = Yp(t, null, o, a), t.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (bi(), o === c) {
              t = kn(e, t, a);
              break e;
            }
            mt(e, t, o, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Po(e, t), e === null ? (a = cg(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : _e || (a = t.type, e = t.pendingProps, o = ml(ve.current).createElement(a), o[st] = t, o[zt] = e, pt(o, a, e), ut(o), t.stateNode = o) : t.memoizedState = cg(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
      case 27:
        return Ca(t), e === null && _e && (o = t.stateNode = og(t.type, t.pendingProps, ve.current), ft = t, Xt = !0, c = Le, ei(t.type) ? (Ps = c, Le = Wt(o.firstChild)) : Le = c), mt(e, t, t.pendingProps.children, a), Po(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && _e && ((c = o = Le) && (o = b1(o, t.type, t.pendingProps, Xt), o !== null ? (t.stateNode = o, ft = t, Le = Wt(o.firstChild), Xt = !1, c = !0) : c = !1), c || Ln(t)), Ca(t), c = t.type, f = t.pendingProps, m = e !== null ? e.memoizedProps : null, o = f.children, Ys(c, f) ? o = null : m !== null && Ys(c, m) && (t.flags |= 32), t.memoizedState !== null && (c = Yc(e, t, j$, null, null, a), Tr._currentValue = c), Po(e, t), mt(e, t, o, a), t.child;
      case 6:
        return e === null && _e && ((e = a = Le) && (a = _1(a, t.pendingProps, Xt), a !== null ? (t.stateNode = a, ft = t, Le = null, e = !0) : e = !1), e || Ln(t)), null;
      case 13:
        return Jv(e, t, a);
      case 4:
        return _t(t, t.stateNode.containerInfo), o = t.pendingProps, e === null ? t.child = Ti(t, null, o, a) : mt(e, t, o, a), t.child;
      case 11:
        return Iv(e, t, t.type, t.pendingProps, a);
      case 7:
        return mt(e, t, t.pendingProps, a), t.child;
      case 8:
        return mt(e, t, t.pendingProps.children, a), t.child;
      case 12:
        return mt(e, t, t.pendingProps.children, a), t.child;
      case 10:
        return o = t.pendingProps, Bn(t, t.type, o.value), mt(e, t, o.children, a), t.child;
      case 9:
        return c = t.type._context, o = t.pendingProps.children, Si(t), c = dt(c), o = o(c), t.flags |= 1, mt(e, t, o, a), t.child;
      case 14:
        return qv(e, t, t.type, t.pendingProps, a);
      case 15:
        return Hv(e, t, t.type, t.pendingProps, a);
      case 19:
        return Pv(e, t, a);
      case 31:
        return G$(e, t, a);
      case 22:
        return Lv(e, t, a, t.pendingProps);
      case 24:
        return Si(t), o = dt(Fe), e === null ? (c = Zc(), c === null && (c = Me, f = jc(), c.pooledCache = f, f.refCount++, f !== null && (c.pooledCacheLanes |= a), c = f), t.memoizedState = {
          parent: o,
          cache: c
        }, Mc(t), Bn(t, Fe, c)) : ((e.lanes & a) !== 0 && (Rc(e, t), rr(t, null, null, a), ar()), c = e.memoizedState, f = t.memoizedState, c.parent !== o ? (c = {
          parent: o,
          cache: o
        }, t.memoizedState = c, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = c), Bn(t, Fe, o)) : (o = f.cache, Bn(t, Fe, o), o !== c.cache && Ac(t, [Fe], a, !0))), mt(e, t, t.pendingProps.children, a), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function En(e) {
    e.flags |= 4;
  }
  function bs(e, t, a, o, c) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (c & 335544128) === c) if (e.stateNode.complete) e.flags |= 8192;
      else if (wh()) e.flags |= 8192;
      else throw wi = Zo, Cc;
    } else e.flags &= -16777217;
  }
  function Wv(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !pg(t)) if (wh()) e.flags |= 8192;
    else throw wi = Zo, Cc;
  }
  function Wo(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? jm() : 536870912, e.lanes |= t, pa |= t);
  }
  function fr(e, t) {
    if (!_e) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var a = null; t !== null; ) t.alternate !== null && (a = t), t = t.sibling;
        a === null ? e.tail = null : a.sibling = null;
        break;
      case "collapsed":
        a = e.tail;
        for (var o = null; a !== null; ) a.alternate !== null && (o = a), a = a.sibling;
        o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null;
    }
  }
  function Be(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, o = 0;
    if (t) for (var c = e.child; c !== null; ) a |= c.lanes | c.childLanes, o |= c.subtreeFlags & 65011712, o |= c.flags & 65011712, c.return = e, c = c.sibling;
    else for (c = e.child; c !== null; ) a |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= o, e.childLanes = a, t;
  }
  function Q$(e, t, a) {
    var o = t.pendingProps;
    switch (Ec(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Be(t), null;
      case 1:
        return Be(t), null;
      case 3:
        return a = t.stateNode, o = null, e !== null && (o = e.memoizedState.cache), t.memoizedState.cache !== o && (t.flags |= 2048), zn(Fe), Ve(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (ta(t) ? En(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, xc())), Be(t), null;
      case 26:
        var c = t.type, f = t.memoizedState;
        return e === null ? (En(t), f !== null ? (Be(t), Wv(t, f)) : (Be(t), bs(t, c, null, o, a))) : f ? f !== e.memoizedState ? (En(t), Be(t), Wv(t, f)) : (Be(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== o && En(t), Be(t), bs(t, c, e, o, a)), null;
      case 27:
        if (lo(t), a = ve.current, c = t.type, e !== null && t.stateNode != null) e.memoizedProps !== o && En(t);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(i(166));
            return Be(t), null;
          }
          e = P.current, ta(t) ? Dp(t, e) : (e = og(c, o, a), t.stateNode = e, En(t));
        }
        return Be(t), null;
      case 5:
        if (lo(t), c = t.type, e !== null && t.stateNode != null) e.memoizedProps !== o && En(t);
        else {
          if (!o) {
            if (t.stateNode === null) throw Error(i(166));
            return Be(t), null;
          }
          if (f = P.current, ta(t)) Dp(t, f);
          else {
            var m = ml(ve.current);
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
                    f = typeof o.is == "string" ? m.createElement("select", { is: o.is }) : m.createElement("select"), o.multiple ? f.multiple = !0 : o.size && (f.size = o.size);
                    break;
                  default:
                    f = typeof o.is == "string" ? m.createElement(c, { is: o.is }) : m.createElement(c);
                }
            }
            f[st] = t, f[zt] = o;
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
            e: switch (pt(f, c, o), c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break e;
              case "img":
                o = !0;
                break e;
              default:
                o = !1;
            }
            o && En(t);
          }
        }
        return Be(t), bs(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== o && En(t);
        else {
          if (typeof o != "string" && t.stateNode === null) throw Error(i(166));
          if (e = ve.current, ta(t)) {
            if (e = t.stateNode, a = t.memoizedProps, o = null, c = ft, c !== null) switch (c.tag) {
              case 27:
              case 5:
                o = c.memoizedProps;
            }
            e[st] = t, e = !!(e.nodeValue === a || o !== null && o.suppressHydrationWarning === !0 || Xh(e.nodeValue, a)), e || Ln(t, !0);
          } else e = ml(e).createTextNode(o), e[st] = t, t.stateNode = e;
        }
        return Be(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (o = ta(t), a !== null) {
            if (e === null) {
              if (!o) throw Error(i(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(557));
              e[st] = t;
            } else bi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Be(t), e = !1;
          } else a = xc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Rt(t), t) : (Rt(t), null);
          if ((t.flags & 128) !== 0) throw Error(i(558));
        }
        return Be(t), null;
      case 13:
        if (o = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = ta(t), o !== null && o.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(i(318));
              if (c = t.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(i(317));
              c[st] = t;
            } else bi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Be(t), c = !1;
          } else c = xc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return t.flags & 256 ? (Rt(t), t) : (Rt(t), null);
        }
        return Rt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = o !== null, e = e !== null && e.memoizedState !== null, a && (o = t.child, c = null, o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (c = o.alternate.memoizedState.cachePool.pool), f = null, o.memoizedState !== null && o.memoizedState.cachePool !== null && (f = o.memoizedState.cachePool.pool), f !== c && (o.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Wo(t, t.updateQueue), Be(t), null);
      case 4:
        return Ve(), e === null && Yh(t.stateNode.containerInfo), Be(t), null;
      case 10:
        return zn(t.type), Be(t), null;
      case 19:
        if (M(Je), o = t.memoizedState, o === null) return Be(t), null;
        if (c = (t.flags & 128) !== 0, f = o.rendering, f === null) if (c) fr(o, !1);
        else {
          if (Qe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (f = Io(e), f !== null) {
              for (t.flags |= 128, fr(o, !1), e = f.updateQueue, t.updateQueue = e, Wo(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; ) xp(a, e), a = a.sibling;
              return L(Je, Je.current & 1 | 2), _e && Sn(t, o.treeForkCount), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && At() > il && (t.flags |= 128, c = !0, fr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!c) if (e = Io(f), e !== null) {
            if (t.flags |= 128, c = !0, e = e.updateQueue, t.updateQueue = e, Wo(t, e), fr(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !_e) return Be(t), null;
          } else 2 * At() - o.renderingStartTime > il && a !== 536870912 && (t.flags |= 128, c = !0, fr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
        }
        return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = At(), e.sibling = null, a = Je.current, L(Je, c ? a & 1 | 2 : a & 1), _e && Sn(t, o.treeForkCount), e) : (Be(t), null);
      case 22:
      case 23:
        return Rt(t), Lc(), o = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== o && (t.flags |= 8192) : o && (t.flags |= 8192), o ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Be(t), a = t.updateQueue, a !== null && Wo(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), o = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (o = t.memoizedState.cachePool.pool), o !== a && (t.flags |= 2048), e !== null && M($i), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), zn(Fe), Be(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function V$(e, t) {
    switch (Ec(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return zn(Fe), Ve(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return lo(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Rt(t), t.alternate === null) throw Error(i(340));
          bi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Rt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          bi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return M(Je), null;
      case 4:
        return Ve(), null;
      case 10:
        return zn(t.type), null;
      case 22:
      case 23:
        return Rt(t), Lc(), e !== null && M($i), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return zn(Fe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fv(e, t) {
    switch (Ec(t), t.tag) {
      case 3:
        zn(Fe), Ve();
        break;
      case 26:
      case 27:
      case 5:
        lo(t);
        break;
      case 4:
        Ve();
        break;
      case 31:
        t.memoizedState !== null && Rt(t);
        break;
      case 13:
        Rt(t);
        break;
      case 19:
        M(Je);
        break;
      case 10:
        zn(t.type);
        break;
      case 22:
      case 23:
        Rt(t), Lc(), e !== null && M($i);
        break;
      case 24:
        zn(Fe);
    }
  }
  function dr(e, t) {
    try {
      var a = t.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var c = o.next;
        a = c;
        do {
          if ((a.tag & e) === e) {
            o = void 0;
            var f = a.create, m = a.inst;
            o = f(), m.destroy = o;
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (p) {
      Ue(t, t.return, p);
    }
  }
  function Vn(e, t, a) {
    try {
      var o = t.updateQueue, c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var f = c.next;
        o = f;
        do {
          if ((o.tag & e) === e) {
            var m = o.inst, p = m.destroy;
            if (p !== void 0) {
              m.destroy = void 0, c = t;
              var g = a, x = p;
              try {
                x();
              } catch (j) {
                Ue(c, g, j);
              }
            }
          }
          o = o.next;
        } while (o !== f);
      }
    } catch (j) {
      Ue(t, t.return, j);
    }
  }
  function eh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Vp(t, a);
      } catch (o) {
        Ue(e, e.return, o);
      }
    }
  }
  function th(e, t, a) {
    a.props = xi(e.type, e.memoizedProps), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (o) {
      Ue(e, t, o);
    }
  }
  function mr(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var o = e.stateNode;
            break;
          case 30:
            o = e.stateNode;
            break;
          default:
            o = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(o) : a.current = o;
      }
    } catch (c) {
      Ue(e, t, c);
    }
  }
  function pn(e, t) {
    var a = e.ref, o = e.refCleanup;
    if (a !== null) if (typeof o == "function") try {
      o();
    } catch (c) {
      Ue(e, t, c);
    } finally {
      e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
    }
    else if (typeof a == "function") try {
      a(null);
    } catch (c) {
      Ue(e, t, c);
    }
    else a.current = null;
  }
  function nh(e) {
    var t = e.type, a = e.memoizedProps, o = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && o.focus();
          break e;
        case "img":
          a.src ? o.src = a.src : a.srcSet && (o.srcset = a.srcSet);
      }
    } catch (c) {
      Ue(e, e.return, c);
    }
  }
  function _s(e, t, a) {
    try {
      var o = e.stateNode;
      m1(o, e.type, a, t), o[zt] = t;
    } catch (c) {
      Ue(e, e.return, c);
    }
  }
  function ih(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ei(e.type) || e.tag === 4;
  }
  function Ss(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ih(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && ei(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function $s(e, t, a) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = yn));
    else if (o !== 4 && (o === 27 && ei(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null)) for ($s(e, t, a), e = e.sibling; e !== null; ) $s(e, t, a), e = e.sibling;
  }
  function Fo(e, t, a) {
    var o = e.tag;
    if (o === 5 || o === 6) e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (o !== 4 && (o === 27 && ei(e.type) && (a = e.stateNode), e = e.child, e !== null)) for (Fo(e, t, a), e = e.sibling; e !== null; ) Fo(e, t, a), e = e.sibling;
  }
  function ah(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var o = e.type, c = t.attributes; c.length; ) t.removeAttributeNode(c[0]);
      pt(t, o, a), t[st] = e, t[zt] = a;
    } catch (f) {
      Ue(e, e.return, f);
    }
  }
  var On = !1, nt = !1, zs = !1, rh = typeof WeakSet == "function" ? WeakSet : Set, ct = null;
  function J$(e, t) {
    if (e = e.containerInfo, Bs = _l, e = _p(e), hc(e)) {
      if ("selectionStart" in e) var a = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
      else e: {
        a = (a = e.ownerDocument) && a.defaultView || window;
        var o = a.getSelection && a.getSelection();
        if (o && o.rangeCount !== 0) {
          a = o.anchorNode;
          var c = o.anchorOffset, f = o.focusNode;
          o = o.focusOffset;
          try {
            a.nodeType, f.nodeType;
          } catch {
            a = null;
            break e;
          }
          var m = 0, p = -1, g = -1, x = 0, j = 0, C = e, U = null;
          t: for (; ; ) {
            for (var A; C !== a || c !== 0 && C.nodeType !== 3 || (p = m + c), C !== f || o !== 0 && C.nodeType !== 3 || (g = m + o), C.nodeType === 3 && (m += C.nodeValue.length), (A = C.firstChild) !== null; )
              U = C, C = A;
            for (; ; ) {
              if (C === e) break t;
              if (U === a && ++x === c && (p = m), U === f && ++j === o && (g = m), (A = C.nextSibling) !== null) break;
              C = U, U = C.parentNode;
            }
            C = A;
          }
          a = p === -1 || g === -1 ? null : {
            start: p,
            end: g
          };
        } else a = null;
      }
      a = a || {
        start: 0,
        end: 0
      };
    } else a = null;
    for (Gs = {
      focusedElem: e,
      selectionRange: a
    }, _l = !1, ct = t; ct !== null; ) if (t = ct, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ct = e;
    else for (; ct !== null; ) {
      switch (t = ct, f = t.alternate, e = t.flags, t.tag) {
        case 0:
          if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null)) for (a = 0; a < e.length; a++) c = e[a], c.ref.impl = c.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((e & 1024) !== 0 && f !== null) {
            e = void 0, a = t, c = f.memoizedProps, f = f.memoizedState, o = a.stateNode;
            try {
              var V = xi(a.type, c);
              e = o.getSnapshotBeforeUpdate(V, f), o.__reactInternalSnapshotBeforeUpdate = e;
            } catch (ee) {
              Ue(a, a.return, ee);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9) Vs(e);
            else if (a === 1) switch (e.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Vs(e);
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
        e.return = t.return, ct = e;
        break;
      }
      ct = t.return;
    }
  }
  function oh(e, t, a) {
    var o = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Un(e, a), o & 4 && dr(5, a);
        break;
      case 1:
        if (Un(e, a), o & 4) if (e = a.stateNode, t === null) try {
          e.componentDidMount();
        } catch (m) {
          Ue(a, a.return, m);
        }
        else {
          var c = xi(a.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            e.componentDidUpdate(c, t, e.__reactInternalSnapshotBeforeUpdate);
          } catch (m) {
            Ue(a, a.return, m);
          }
        }
        o & 64 && eh(a), o & 512 && mr(a, a.return);
        break;
      case 3:
        if (Un(e, a), o & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null) switch (a.child.tag) {
            case 27:
            case 5:
              t = a.child.stateNode;
              break;
            case 1:
              t = a.child.stateNode;
          }
          try {
            Vp(e, t);
          } catch (m) {
            Ue(a, a.return, m);
          }
        }
        break;
      case 27:
        t === null && o & 4 && ah(a);
      case 26:
      case 5:
        Un(e, a), t === null && o & 4 && nh(a), o & 512 && mr(a, a.return);
        break;
      case 12:
        Un(e, a);
        break;
      case 31:
        Un(e, a), o & 4 && ch(e, a);
        break;
      case 13:
        Un(e, a), o & 4 && sh(e, a), o & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = i1.bind(null, a), S1(e, a))));
        break;
      case 22:
        if (o = a.memoizedState !== null || On, !o) {
          t = t !== null && t.memoizedState !== null || nt, c = On;
          var f = nt;
          On = o, (nt = t) && !f ? Nn(e, a, (a.subtreeFlags & 8772) !== 0) : Un(e, a), On = c, nt = f;
        }
        break;
      case 30:
        break;
      default:
        Un(e, a);
    }
  }
  function lh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, lh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Fu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ge = null, Tt = !1;
  function xn(e, t, a) {
    for (a = a.child; a !== null; ) uh(e, t, a), a = a.sibling;
  }
  function uh(e, t, a) {
    if (jt && typeof jt.onCommitFiberUnmount == "function") try {
      jt.onCommitFiberUnmount(Ma, a);
    } catch {
    }
    switch (a.tag) {
      case 26:
        nt || pn(a, t), xn(e, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        nt || pn(a, t);
        var o = Ge, c = Tt;
        ei(a.type) && (Ge = a.stateNode, Tt = !1), xn(e, t, a), $r(a.stateNode), Ge = o, Tt = c;
        break;
      case 5:
        nt || pn(a, t);
      case 6:
        if (o = Ge, c = Tt, Ge = null, xn(e, t, a), Ge = o, Tt = c, Ge !== null) if (Tt) try {
          (Ge.nodeType === 9 ? Ge.body : Ge.nodeName === "HTML" ? Ge.ownerDocument.body : Ge).removeChild(a.stateNode);
        } catch (f) {
          Ue(a, t, f);
        }
        else try {
          Ge.removeChild(a.stateNode);
        } catch (f) {
          Ue(a, t, f);
        }
        break;
      case 18:
        Ge !== null && (Tt ? (e = Ge, tg(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, a.stateNode), $a(e)) : tg(Ge, a.stateNode));
        break;
      case 4:
        o = Ge, c = Tt, Ge = a.stateNode.containerInfo, Tt = !0, xn(e, t, a), Ge = o, Tt = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Vn(2, a, t), nt || Vn(4, a, t), xn(e, t, a);
        break;
      case 1:
        nt || (pn(a, t), o = a.stateNode, typeof o.componentWillUnmount == "function" && th(a, t, o)), xn(e, t, a);
        break;
      case 21:
        xn(e, t, a);
        break;
      case 22:
        nt = (o = nt) || a.memoizedState !== null, xn(e, t, a), nt = o;
        break;
      default:
        xn(e, t, a);
    }
  }
  function ch(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        $a(e);
      } catch (a) {
        Ue(t, t.return, a);
      }
    }
  }
  function sh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      $a(e);
    } catch (a) {
      Ue(t, t.return, a);
    }
  }
  function X$(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new rh()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new rh()), t;
      default:
        throw Error(i(435, e.tag));
    }
  }
  function el(e, t) {
    var a = X$(e);
    t.forEach(function(o) {
      if (!a.has(o)) {
        a.add(o);
        var c = a1.bind(null, e, o);
        o.then(c, c);
      }
    });
  }
  function kt(e, t) {
    var a = t.deletions;
    if (a !== null) for (var o = 0; o < a.length; o++) {
      var c = a[o], f = e, m = t, p = m;
      e: for (; p !== null; ) {
        switch (p.tag) {
          case 27:
            if (ei(p.type)) {
              Ge = p.stateNode, Tt = !1;
              break e;
            }
            break;
          case 5:
            Ge = p.stateNode, Tt = !1;
            break e;
          case 3:
          case 4:
            Ge = p.stateNode.containerInfo, Tt = !0;
            break e;
        }
        p = p.return;
      }
      if (Ge === null) throw Error(i(160));
      uh(f, m, c), Ge = null, Tt = !1, f = c.alternate, f !== null && (f.return = null), c.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) fh(t, e), t = t.sibling;
  }
  var ln = null;
  function fh(e, t) {
    var a = e.alternate, o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        kt(t, e), Et(e), o & 4 && (Vn(3, e, e.return), dr(3, e), Vn(5, e, e.return));
        break;
      case 1:
        kt(t, e), Et(e), o & 512 && (nt || a === null || pn(a, a.return)), o & 64 && On && (e = e.updateQueue, e !== null && (o = e.callbacks, o !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? o : a.concat(o))));
        break;
      case 26:
        var c = ln;
        if (kt(t, e), Et(e), o & 512 && (nt || a === null || pn(a, a.return)), o & 4) {
          var f = a !== null ? a.memoizedState : null;
          if (o = e.memoizedState, a === null) if (o === null) if (e.stateNode === null) {
            e: {
              o = e.type, a = e.memoizedProps, c = c.ownerDocument || c;
              t: switch (o) {
                case "title":
                  f = c.getElementsByTagName("title")[0], (!f || f[qa] || f[st] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = c.createElement(o), c.head.insertBefore(f, c.querySelector("head > title"))), pt(f, o, a), f[st] = e, ut(f), o = f;
                  break e;
                case "link":
                  var m = dg("link", "href", c).get(o + (a.href || ""));
                  if (m) {
                    for (var p = 0; p < m.length; p++) if (f = m[p], f.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && f.getAttribute("rel") === (a.rel == null ? null : a.rel) && f.getAttribute("title") === (a.title == null ? null : a.title) && f.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                      m.splice(p, 1);
                      break t;
                    }
                  }
                  f = c.createElement(o), pt(f, o, a), c.head.appendChild(f);
                  break;
                case "meta":
                  if (m = dg("meta", "content", c).get(o + (a.content || ""))) {
                    for (p = 0; p < m.length; p++) if (f = m[p], f.getAttribute("content") === (a.content == null ? null : "" + a.content) && f.getAttribute("name") === (a.name == null ? null : a.name) && f.getAttribute("property") === (a.property == null ? null : a.property) && f.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && f.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                      m.splice(p, 1);
                      break t;
                    }
                  }
                  f = c.createElement(o), pt(f, o, a), c.head.appendChild(f);
                  break;
                default:
                  throw Error(i(468, o));
              }
              f[st] = e, ut(f), o = f;
            }
            e.stateNode = o;
          } else mg(c, e.type, e.stateNode);
          else e.stateNode = fg(c, o, e.memoizedProps);
          else f !== o ? (f === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : f.count--, o === null ? mg(c, e.type, e.stateNode) : fg(c, o, e.memoizedProps)) : o === null && e.stateNode !== null && _s(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        kt(t, e), Et(e), o & 512 && (nt || a === null || pn(a, a.return)), a !== null && o & 4 && _s(e, e.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (kt(t, e), Et(e), o & 512 && (nt || a === null || pn(a, a.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Yi(c, "");
          } catch (V) {
            Ue(e, e.return, V);
          }
        }
        o & 4 && e.stateNode != null && (c = e.memoizedProps, _s(e, c, a !== null ? a.memoizedProps : c)), o & 1024 && (zs = !0);
        break;
      case 6:
        if (kt(t, e), Et(e), o & 4) {
          if (e.stateNode === null) throw Error(i(162));
          o = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = o;
          } catch (V) {
            Ue(e, e.return, V);
          }
        }
        break;
      case 3:
        if (hl = null, c = ln, ln = pl(t.containerInfo), kt(t, e), ln = c, Et(e), o & 4 && a !== null && a.memoizedState.isDehydrated) try {
          $a(t.containerInfo);
        } catch (V) {
          Ue(e, e.return, V);
        }
        zs && (zs = !1, dh(e));
        break;
      case 4:
        o = ln, ln = pl(e.stateNode.containerInfo), kt(t, e), Et(e), ln = o;
        break;
      case 12:
        kt(t, e), Et(e);
        break;
      case 31:
        kt(t, e), Et(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, el(e, o)));
        break;
      case 13:
        kt(t, e), Et(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (nl = At()), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, el(e, o)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var g = a !== null && a.memoizedState !== null, x = On, j = nt;
        if (On = x || c, nt = j || g, kt(t, e), nt = j, On = x, Et(e), o & 8192) e: for (t = e.stateNode, t._visibility = c ? t._visibility & -2 : t._visibility | 1, c && (a === null || g || On || nt || Ui(e)), a = null, t = e; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (a === null) {
              g = a = t;
              try {
                if (f = g.stateNode, c) m = f.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                else {
                  p = g.stateNode;
                  var C = g.memoizedProps.style, U = C != null && C.hasOwnProperty("display") ? C.display : null;
                  p.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                }
              } catch (V) {
                Ue(g, g.return, V);
              }
            }
          } else if (t.tag === 6) {
            if (a === null) {
              g = t;
              try {
                g.stateNode.nodeValue = c ? "" : g.memoizedProps;
              } catch (V) {
                Ue(g, g.return, V);
              }
            }
          } else if (t.tag === 18) {
            if (a === null) {
              g = t;
              try {
                var A = g.stateNode;
                c ? ng(A, !0) : ng(g.stateNode, !1);
              } catch (V) {
                Ue(g, g.return, V);
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
        o & 4 && (o = e.updateQueue, o !== null && (a = o.retryQueue, a !== null && (o.retryQueue = null, el(e, a))));
        break;
      case 19:
        kt(t, e), Et(e), o & 4 && (o = e.updateQueue, o !== null && (e.updateQueue = null, el(e, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        kt(t, e), Et(e);
    }
  }
  function Et(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, o = e.return; o !== null; ) {
          if (ih(o)) {
            a = o;
            break;
          }
          o = o.return;
        }
        if (a == null) throw Error(i(160));
        switch (a.tag) {
          case 27:
            var c = a.stateNode;
            Fo(e, Ss(e), c);
            break;
          case 5:
            var f = a.stateNode;
            a.flags & 32 && (Yi(f, ""), a.flags &= -33), Fo(e, Ss(e), f);
            break;
          case 3:
          case 4:
            var m = a.stateNode.containerInfo;
            $s(e, Ss(e), m);
            break;
          default:
            throw Error(i(161));
        }
      } catch (p) {
        Ue(e, e.return, p);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function dh(e) {
    if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
      var t = e;
      dh(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
    }
  }
  function Un(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) oh(e, t.alternate, t), t = t.sibling;
  }
  function Ui(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Vn(4, t, t.return), Ui(t);
          break;
        case 1:
          pn(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && th(t, t.return, a), Ui(t);
          break;
        case 27:
          $r(t.stateNode);
        case 26:
        case 5:
          pn(t, t.return), Ui(t);
          break;
        case 22:
          t.memoizedState === null && Ui(t);
          break;
        case 30:
          Ui(t);
          break;
        default:
          Ui(t);
      }
      e = e.sibling;
    }
  }
  function Nn(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var o = t.alternate, c = e, f = t, m = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Nn(c, f, a), dr(4, f);
          break;
        case 1:
          if (Nn(c, f, a), o = f, c = o.stateNode, typeof c.componentDidMount == "function") try {
            c.componentDidMount();
          } catch (x) {
            Ue(o, o.return, x);
          }
          if (o = f, c = o.updateQueue, c !== null) {
            var p = o.stateNode;
            try {
              var g = c.shared.hiddenCallbacks;
              if (g !== null) for (c.shared.hiddenCallbacks = null, c = 0; c < g.length; c++) Qp(g[c], p);
            } catch (x) {
              Ue(o, o.return, x);
            }
          }
          a && m & 64 && eh(f), mr(f, f.return);
          break;
        case 27:
          ah(f);
        case 26:
        case 5:
          Nn(c, f, a), a && o === null && m & 4 && nh(f), mr(f, f.return);
          break;
        case 12:
          Nn(c, f, a);
          break;
        case 31:
          Nn(c, f, a), a && m & 4 && ch(c, f);
          break;
        case 13:
          Nn(c, f, a), a && m & 4 && sh(c, f);
          break;
        case 22:
          f.memoizedState === null && Nn(c, f, a), mr(f, f.return);
          break;
        case 30:
          break;
        default:
          Nn(c, f, a);
      }
      t = t.sibling;
    }
  }
  function ws(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Fa(a));
  }
  function Ts(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Fa(e));
  }
  function un(e, t, a, o) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) mh(e, t, a, o), t = t.sibling;
  }
  function mh(e, t, a, o) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        un(e, t, a, o), c & 2048 && dr(9, t);
        break;
      case 1:
        un(e, t, a, o);
        break;
      case 3:
        un(e, t, a, o), c & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Fa(e)));
        break;
      case 12:
        if (c & 2048) {
          un(e, t, a, o), e = t.stateNode;
          try {
            var f = t.memoizedProps, m = f.id, p = f.onPostCommit;
            typeof p == "function" && p(m, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (g) {
            Ue(t, t.return, g);
          }
        } else un(e, t, a, o);
        break;
      case 31:
        un(e, t, a, o);
        break;
      case 13:
        un(e, t, a, o);
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, m = t.alternate, t.memoizedState !== null ? f._visibility & 2 ? un(e, t, a, o) : pr(e, t) : f._visibility & 2 ? un(e, t, a, o) : (f._visibility |= 2, fa(e, t, a, o, (t.subtreeFlags & 10256) !== 0 || !1)), c & 2048 && ws(m, t);
        break;
      case 24:
        un(e, t, a, o), c & 2048 && Ts(t.alternate, t);
        break;
      default:
        un(e, t, a, o);
    }
  }
  function fa(e, t, a, o, c) {
    for (c = c && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var f = e, m = t, p = a, g = o, x = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          fa(f, m, p, g, c), dr(8, m);
          break;
        case 23:
          break;
        case 22:
          var j = m.stateNode;
          m.memoizedState !== null ? j._visibility & 2 ? fa(f, m, p, g, c) : pr(f, m) : (j._visibility |= 2, fa(f, m, p, g, c)), c && x & 2048 && ws(m.alternate, m);
          break;
        case 24:
          fa(f, m, p, g, c), c && x & 2048 && Ts(m.alternate, m);
          break;
        default:
          fa(f, m, p, g, c);
      }
      t = t.sibling;
    }
  }
  function pr(e, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var a = e, o = t, c = o.flags;
      switch (o.tag) {
        case 22:
          pr(a, o), c & 2048 && ws(o.alternate, o);
          break;
        case 24:
          pr(a, o), c & 2048 && Ts(o.alternate, o);
          break;
        default:
          pr(a, o);
      }
      t = t.sibling;
    }
  }
  var vr = 8192;
  function da(e, t, a) {
    if (e.subtreeFlags & vr) for (e = e.child; e !== null; ) ph(e, t, a), e = e.sibling;
  }
  function ph(e, t, a) {
    switch (e.tag) {
      case 26:
        da(e, t, a), e.flags & vr && e.memoizedState !== null && j1(a, ln, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        da(e, t, a);
        break;
      case 3:
      case 4:
        var o = ln;
        ln = pl(e.stateNode.containerInfo), da(e, t, a), ln = o;
        break;
      case 22:
        e.memoizedState === null && (o = e.alternate, o !== null && o.memoizedState !== null ? (o = vr, vr = 16777216, da(e, t, a), vr = o) : da(e, t, a));
        break;
      default:
        da(e, t, a);
    }
  }
  function vh(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function hr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var o = t[a];
        ct = o, gh(o, e);
      }
      vh(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) hh(e), e = e.sibling;
  }
  function hh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        hr(e), e.flags & 2048 && Vn(9, e, e.return);
        break;
      case 3:
        hr(e);
        break;
      case 12:
        hr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, tl(e)) : hr(e);
        break;
      default:
        hr(e);
    }
  }
  function tl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var o = t[a];
        ct = o, gh(o, e);
      }
      vh(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Vn(8, t, t.return), tl(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, tl(t));
          break;
        default:
          tl(t);
      }
      e = e.sibling;
    }
  }
  function gh(e, t) {
    for (; ct !== null; ) {
      var a = ct;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Vn(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var o = a.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          Fa(a.memoizedState.cache);
      }
      if (o = a.child, o !== null) o.return = a, ct = o;
      else e: for (a = e; ct !== null; ) {
        o = ct;
        var c = o.sibling, f = o.return;
        if (lh(o), o === a) {
          ct = null;
          break e;
        }
        if (c !== null) {
          c.return = f, ct = c;
          break e;
        }
        ct = f;
      }
    }
  }
  var P$ = {
    getCacheForType: function(e) {
      var t = dt(Fe), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return dt(Fe).controller.signal;
    }
  }, K$ = typeof WeakMap == "function" ? WeakMap : Map, Te = 0, Me = null, he = null, ye = 0, xe = 0, It = null, Jn = !1, ma = !1, ks = !1, An = 0, Qe = 0, Xn = 0, Ni = 0, Es = 0, qt = 0, pa = 0, gr = null, Ot = null, Os = !1, nl = 0, yh = 0, il = 1 / 0, al = null, Pn = null, rt = 0, Kn = null, va = null, jn = 0, xs = 0, Us = null, bh = null, yr = 0, Ns = null;
  function Kt() {
    return (Te & 2) !== 0 && ye !== 0 ? ye & -ye : I.T !== null ? Ms() : Rm();
  }
  function _h() {
    if (qt === 0) if ((ye & 536870912) === 0 || _e) {
      var e = so;
      so <<= 1, (so & 3932160) === 0 && (so = 262144), qt = e;
    } else qt = 536870912;
    return e = Mt.current, e !== null && (e.flags |= 32), qt;
  }
  function xt(e, t, a) {
    (e === Me && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) && (ha(e, 0), Wn(e, ye, qt, !1)), po(e, a), ((Te & 2) === 0 || e !== Me) && (e === Me && ((Te & 2) === 0 && (Ni |= a), Qe === 4 && Wn(e, ye, qt, !1)), Dn(e));
  }
  function Sh(e, t, a) {
    if ((Te & 6) !== 0) throw Error(i(327));
    var o = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ra(e, t), c = o ? e1(e, t) : js(e, t, !0), f = o;
    do {
      if (c === 0) {
        ma && !o && Wn(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, f && !W$(a)) {
          c = js(e, t, !1), f = !1;
          continue;
        }
        if (c === 2) {
          if (f = t, e.errorRecoveryDisabledLanes & f) var m = 0;
          else m = e.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            t = m;
            e: {
              var p = e;
              c = gr;
              var g = p.current.memoizedState.isDehydrated;
              if (g && (ha(p, m).flags |= 256), m = js(p, m, !1), m !== 2) {
                if (ks && !g) {
                  p.errorRecoveryDisabledLanes |= f, Ni |= f, c = 4;
                  break e;
                }
                f = Ot, Ot = c, f !== null && (Ot === null ? Ot = f : Ot.push.apply(Ot, f));
              }
              c = m;
            }
            if (f = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          ha(e, 0), Wn(e, t, 0, !0);
          break;
        }
        e: {
          switch (o = e, f = c, f) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Wn(o, t, qt, !Jn);
              break e;
            case 2:
              Ot = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && (c = nl + 300 - At(), 10 < c)) {
            if (Wn(o, t, qt, !Jn), mo(o, 0, !0) !== 0) break e;
            jn = t, o.timeoutHandle = Fh($h.bind(null, o, a, Ot, al, Os, t, qt, Ni, pa, Jn, f, "Throttled", -0, 0), c);
            break e;
          }
          $h(o, a, Ot, al, Os, t, qt, Ni, pa, Jn, f, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Dn(e);
  }
  function $h(e, t, a, o, c, f, m, p, g, x, j, C, U, A) {
    if (e.timeoutHandle = -1, C = t.subtreeFlags, C & 8192 || (C & 16785408) === 16785408) {
      C = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: yn
      }, ph(t, f, C);
      var V = (f & 62914560) === f ? nl - At() : (f & 4194048) === f ? yh - At() : 0;
      if (V = D1(C, V), V !== null) {
        jn = f, e.cancelPendingCommit = V(Uh.bind(null, e, t, f, a, o, c, m, p, g, j, C, null, U, A)), Wn(e, f, m, !x);
        return;
      }
    }
    Uh(e, t, f, a, o, c, m, p, g);
  }
  function W$(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null))) for (var o = 0; o < a.length; o++) {
        var c = a[o], f = c.getSnapshot;
        c = c.value;
        try {
          if (!Zt(f(), c)) return !1;
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
  function Wn(e, t, a, o) {
    t &= ~Es, t &= ~Ni, e.suspendedLanes |= t, e.pingedLanes &= ~t, o && (e.warmLanes |= t), o = e.expirationTimes;
    for (var c = t; 0 < c; ) {
      var f = 31 - Dt(c), m = 1 << f;
      o[f] = -1, c &= ~m;
    }
    a !== 0 && Dm(e, a, t);
  }
  function rl() {
    return (Te & 6) === 0 ? (br(0, !1), !1) : !0;
  }
  function As() {
    if (he !== null) {
      if (xe === 0) var e = he.return;
      else e = he, $n = _i = null, Jc(e), oa = null, tr = 0, e = he;
      for (; e !== null; ) Fv(e.alternate, e), e = e.return;
      he = null;
    }
  }
  function ha(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, h1(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), jn = 0, As(), Me = e, he = a = _n(e.current, null), ye = t, xe = 0, It = null, Jn = !1, ma = Ra(e, t), ks = !1, pa = qt = Es = Ni = Xn = Qe = 0, Ot = gr = null, Os = !1, (t & 8) !== 0 && (t |= t & 32);
    var o = e.entangledLanes;
    if (o !== 0) for (e = e.entanglements, o &= t; 0 < o; ) {
      var c = 31 - Dt(o), f = 1 << c;
      t |= e[c], o &= ~f;
    }
    return An = t, ko(), a;
  }
  function zh(e, t) {
    re = null, I.H = cr, t === ra || t === Do ? (t = Lp(), xe = 3) : t === Cc ? (t = Lp(), xe = 4) : xe = t === ss ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, It = t, he === null && (Qe = 1, Jo(e, Qt(t, e.current)));
  }
  function wh() {
    var e = Mt.current;
    return e === null ? !0 : (ye & 4194048) === ye ? Pt === null : (ye & 62914560) === ye || (ye & 536870912) !== 0 ? e === Pt : !1;
  }
  function Th() {
    var e = I.H;
    return I.H = cr, e === null ? cr : e;
  }
  function kh() {
    var e = I.A;
    return I.A = P$, e;
  }
  function ol() {
    Qe = 4, Jn || (ye & 4194048) !== ye && Mt.current !== null || (ma = !0), (Xn & 134217727) === 0 && (Ni & 134217727) === 0 || Me === null || Wn(Me, ye, qt, !1);
  }
  function js(e, t, a) {
    var o = Te;
    Te |= 2;
    var c = Th(), f = kh();
    (Me !== e || ye !== t) && (al = null, ha(e, t)), t = !1;
    var m = Qe;
    e: do
      try {
        if (xe !== 0 && he !== null) {
          var p = he, g = It;
          switch (xe) {
            case 8:
              As(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Mt.current === null && (t = !0);
              var x = xe;
              if (xe = 0, It = null, ga(e, p, g, x), a && ma) {
                m = 0;
                break e;
              }
              break;
            default:
              x = xe, xe = 0, It = null, ga(e, p, g, x);
          }
        }
        F$(), m = Qe;
        break;
      } catch (j) {
        zh(e, j);
      }
    while (!0);
    return t && e.shellSuspendCounter++, $n = _i = null, Te = o, I.H = c, I.A = f, he === null && (Me = null, ye = 0, ko()), m;
  }
  function F$() {
    for (; he !== null; ) Eh(he);
  }
  function e1(e, t) {
    var a = Te;
    Te |= 2;
    var o = Th(), c = kh();
    Me !== e || ye !== t ? (al = null, il = At() + 500, ha(e, t)) : ma = Ra(e, t);
    e: do
      try {
        if (xe !== 0 && he !== null) {
          t = he;
          var f = It;
          t: switch (xe) {
            case 1:
              xe = 0, It = null, ga(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (qp(f)) {
                xe = 0, It = null, Oh(t);
                break;
              }
              t = function() {
                xe !== 2 && xe !== 9 || Me !== e || (xe = 7), Dn(e);
              }, f.then(t, t);
              break e;
            case 3:
              xe = 7;
              break e;
            case 4:
              xe = 5;
              break e;
            case 7:
              qp(f) ? (xe = 0, It = null, Oh(t)) : (xe = 0, It = null, ga(e, t, f, 7));
              break;
            case 5:
              var m = null;
              switch (he.tag) {
                case 26:
                  m = he.memoizedState;
                case 5:
                case 27:
                  var p = he;
                  if (m ? pg(m) : p.stateNode.complete) {
                    xe = 0, It = null;
                    var g = p.sibling;
                    if (g !== null) he = g;
                    else {
                      var x = p.return;
                      x !== null ? (he = x, ll(x)) : he = null;
                    }
                    break t;
                  }
              }
              xe = 0, It = null, ga(e, t, f, 5);
              break;
            case 6:
              xe = 0, It = null, ga(e, t, f, 6);
              break;
            case 8:
              As(), Qe = 6;
              break e;
            default:
              throw Error(i(462));
          }
        }
        t1();
        break;
      } catch (j) {
        zh(e, j);
      }
    while (!0);
    return $n = _i = null, I.H = o, I.A = c, Te = a, he !== null ? 0 : (Me = null, ye = 0, ko(), Qe);
  }
  function t1() {
    for (; he !== null && !A0(); ) Eh(he);
  }
  function Eh(e) {
    var t = Kv(e.alternate, e, An);
    e.memoizedProps = e.pendingProps, t === null ? ll(e) : he = t;
  }
  function Oh(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Yv(a, t, t.pendingProps, t.type, void 0, ye);
        break;
      case 11:
        t = Yv(a, t, t.pendingProps, t.type.render, t.ref, ye);
        break;
      case 5:
        Jc(t);
      default:
        Fv(a, t), t = he = xp(t, An), t = Kv(a, t, An);
    }
    e.memoizedProps = e.pendingProps, t === null ? ll(e) : he = t;
  }
  function ga(e, t, a, o) {
    $n = _i = null, Jc(t), oa = null, tr = 0;
    var c = t.return;
    try {
      if (B$(e, c, t, a, ye)) {
        Qe = 1, Jo(e, Qt(a, e.current)), he = null;
        return;
      }
    } catch (f) {
      if (c !== null) throw he = c, f;
      Qe = 1, Jo(e, Qt(a, e.current)), he = null;
      return;
    }
    t.flags & 32768 ? (_e || o === 1 ? e = !0 : ma || (ye & 536870912) !== 0 ? e = !1 : (Jn = e = !0, (o === 2 || o === 9 || o === 3 || o === 6) && (o = Mt.current, o !== null && o.tag === 13 && (o.flags |= 16384))), xh(t, e)) : ll(t);
  }
  function ll(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        xh(t, Jn);
        return;
      }
      e = t.return;
      var a = Q$(t.alternate, t, An);
      if (a !== null) {
        he = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        he = t;
        return;
      }
      he = t = e;
    } while (t !== null);
    Qe === 0 && (Qe = 5);
  }
  function xh(e, t) {
    do {
      var a = V$(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, he = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        he = e;
        return;
      }
      he = e = a;
    } while (e !== null);
    Qe = 6, he = null;
  }
  function Uh(e, t, a, o, c, f, m, p, g) {
    e.cancelPendingCommit = null;
    do
      ul();
    while (rt !== 0);
    if ((Te & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (f = t.lanes | t.childLanes, f |= Sc, L0(e, a, f, m, p, g), e === Me && (he = Me = null, ye = 0), va = t, Kn = e, jn = a, xs = f, Us = c, bh = o, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, r1(uo, function() {
        return Zh(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), o = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || o) {
        o = I.T, I.T = null, c = B.p, B.p = 2, m = Te, Te |= 4;
        try {
          J$(e, t, a);
        } finally {
          Te = m, B.p = c, I.T = o;
        }
      }
      rt = 1, Nh(), Ah(), jh();
    }
  }
  function Nh() {
    if (rt === 1) {
      rt = 0;
      var e = Kn, t = va, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = I.T, I.T = null;
        var o = B.p;
        B.p = 2;
        var c = Te;
        Te |= 4;
        try {
          fh(t, e);
          var f = Gs, m = _p(e.containerInfo), p = f.focusedElem, g = f.selectionRange;
          if (m !== p && p && p.ownerDocument && bp(p.ownerDocument.documentElement, p)) {
            if (g !== null && hc(p)) {
              var x = g.start, j = g.end;
              if (j === void 0 && (j = x), "selectionStart" in p) p.selectionStart = x, p.selectionEnd = Math.min(j, p.value.length);
              else {
                var C = p.ownerDocument || document, U = C && C.defaultView || window;
                if (U.getSelection) {
                  var A = U.getSelection(), V = p.textContent.length, ee = Math.min(g.start, V), Ce = g.end === void 0 ? ee : Math.min(g.end, V);
                  !A.extend && ee > Ce && (m = Ce, Ce = ee, ee = m);
                  var z = yp(p, ee), _ = yp(p, Ce);
                  if (z && _ && (A.rangeCount !== 1 || A.anchorNode !== z.node || A.anchorOffset !== z.offset || A.focusNode !== _.node || A.focusOffset !== _.offset)) {
                    var O = C.createRange();
                    O.setStart(z.node, z.offset), A.removeAllRanges(), ee > Ce ? (A.addRange(O), A.extend(_.node, _.offset)) : (O.setEnd(_.node, _.offset), A.addRange(O));
                  }
                }
              }
            }
            for (C = [], A = p; A = A.parentNode; ) A.nodeType === 1 && C.push({
              element: A,
              left: A.scrollLeft,
              top: A.scrollTop
            });
            for (typeof p.focus == "function" && p.focus(), p = 0; p < C.length; p++) {
              var D = C[p];
              D.element.scrollLeft = D.left, D.element.scrollTop = D.top;
            }
          }
          _l = !!Bs, Gs = Bs = null;
        } finally {
          Te = c, B.p = o, I.T = a;
        }
      }
      e.current = t, rt = 2;
    }
  }
  function Ah() {
    if (rt === 2) {
      rt = 0;
      var e = Kn, t = va, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = I.T, I.T = null;
        var o = B.p;
        B.p = 2;
        var c = Te;
        Te |= 4;
        try {
          oh(e, t.alternate, t);
        } finally {
          Te = c, B.p = o, I.T = a;
        }
      }
      rt = 3;
    }
  }
  function jh() {
    if (rt === 4 || rt === 3) {
      rt = 0, j0();
      var e = Kn, t = va, a = jn, o = bh;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? rt = 5 : (rt = 0, va = Kn = null, Dh(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Pn = null), Ku(a), t = t.stateNode, jt && typeof jt.onCommitFiberRoot == "function") try {
        jt.onCommitFiberRoot(Ma, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (o !== null) {
        t = I.T, c = B.p, B.p = 2, I.T = null;
        try {
          for (var f = e.onRecoverableError, m = 0; m < o.length; m++) {
            var p = o[m];
            f(p.value, { componentStack: p.stack });
          }
        } finally {
          I.T = t, B.p = c;
        }
      }
      (jn & 3) !== 0 && ul(), Dn(e), c = e.pendingLanes, (a & 261930) !== 0 && (c & 42) !== 0 ? e === Ns ? yr++ : (yr = 0, Ns = e) : yr = 0, br(0, !1);
    }
  }
  function Dh(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Fa(t)));
  }
  function ul() {
    return Nh(), Ah(), jh(), Zh();
  }
  function Zh() {
    if (rt !== 5) return !1;
    var e = Kn, t = xs;
    xs = 0;
    var a = Ku(jn), o = I.T, c = B.p;
    try {
      B.p = 32 > a ? 32 : a, I.T = null, a = Us, Us = null;
      var f = Kn, m = jn;
      if (rt = 0, va = Kn = null, jn = 0, (Te & 6) !== 0) throw Error(i(331));
      var p = Te;
      if (Te |= 4, hh(f.current), mh(f, f.current, m, a), Te = p, br(0, !1), jt && typeof jt.onPostCommitFiberRoot == "function") try {
        jt.onPostCommitFiberRoot(Ma, f);
      } catch {
      }
      return !0;
    } finally {
      B.p = c, I.T = o, Dh(e, t);
    }
  }
  function Ch(e, t, a) {
    t = Qt(a, t), t = cs(e.stateNode, t, 2), e = Ei(e, t, 2), e !== null && (po(e, 2), Dn(e));
  }
  function Ue(e, t, a) {
    if (e.tag === 3) Ch(e, e, a);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ch(t, e, a);
        break;
      } else if (t.tag === 1) {
        var o = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Pn === null || !Pn.has(o))) {
          e = Qt(a, e), a = Mv(2), o = Ei(t, a, 2), o !== null && (Rv(a, o, t, e), po(o, 2), Dn(o));
          break;
        }
      }
      t = t.return;
    }
  }
  function Ds(e, t, a) {
    var o = e.pingCache;
    if (o === null) {
      o = e.pingCache = new K$();
      var c = /* @__PURE__ */ new Set();
      o.set(t, c);
    } else c = o.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(t, c));
    c.has(a) || (ks = !0, c.add(a), e = n1.bind(null, e, t, a), t.then(e, e));
  }
  function n1(e, t, a) {
    var o = e.pingCache;
    o !== null && o.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Me === e && (ye & a) === a && (Qe === 4 || Qe === 3 && (ye & 62914560) === ye && 300 > At() - nl ? (Te & 2) === 0 && ha(e, 0) : Es |= a, pa === ye && (pa = 0)), Dn(e);
  }
  function Mh(e, t) {
    t === 0 && (t = jm()), e = gi(e, t), e !== null && (po(e, t), Dn(e));
  }
  function i1(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Mh(e, a);
  }
  function a1(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var o = e.stateNode, c = e.memoizedState;
        c !== null && (a = c.retryLane);
        break;
      case 19:
        o = e.stateNode;
        break;
      case 22:
        o = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    o !== null && o.delete(t), Mh(e, a);
  }
  function r1(e, t) {
    return Ju(e, t);
  }
  var cl = null, ya = null, Zs = !1, sl = !1, Cs = !1, Fn = 0;
  function Dn(e) {
    e !== ya && e.next === null && (ya === null ? cl = ya = e : ya = ya.next = e), sl = !0, Zs || (Zs = !0, l1());
  }
  function br(e, t) {
    if (!Cs && sl) {
      Cs = !0;
      do
        for (var a = !1, o = cl; o !== null; ) {
          if (!t) if (e !== 0) {
            var c = o.pendingLanes;
            if (c === 0) var f = 0;
            else {
              var m = o.suspendedLanes, p = o.pingedLanes;
              f = (1 << 31 - Dt(42 | e) + 1) - 1, f &= c & ~(m & ~p), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (a = !0, Hh(o, f));
          } else f = ye, f = mo(o, o === Me ? f : 0, o.cancelPendingCommit !== null || o.timeoutHandle !== -1), (f & 3) === 0 || Ra(o, f) || (a = !0, Hh(o, f));
          o = o.next;
        }
      while (a);
      Cs = !1;
    }
  }
  function o1() {
    Rh();
  }
  function Rh() {
    sl = Zs = !1;
    var e = 0;
    Fn !== 0 && v1() && (e = Fn);
    for (var t = At(), a = null, o = cl; o !== null; ) {
      var c = o.next, f = Ih(o, t);
      f === 0 ? (o.next = null, a === null ? cl = c : a.next = c, c === null && (ya = a)) : (a = o, (e !== 0 || (f & 3) !== 0) && (sl = !0)), o = c;
    }
    rt !== 0 && rt !== 5 || br(e, !1), Fn !== 0 && (Fn = 0);
  }
  function Ih(e, t) {
    for (var a = e.suspendedLanes, o = e.pingedLanes, c = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var m = 31 - Dt(f), p = 1 << m, g = c[m];
      g === -1 ? ((p & a) === 0 || (p & o) !== 0) && (c[m] = H0(p, t)) : g <= t && (e.expiredLanes |= p), f &= ~p;
    }
    if (t = Me, a = ye, a = mo(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), o = e.callbackNode, a === 0 || e === t && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) return o !== null && o !== null && Xu(o), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Ra(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (o !== null && Xu(o), Ku(a)) {
        case 2:
        case 8:
          a = Nm;
          break;
        case 32:
          a = uo;
          break;
        case 268435456:
          a = Am;
          break;
        default:
          a = uo;
      }
      return o = qh.bind(null, e), a = Ju(a, o), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return o !== null && o !== null && Xu(o), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function qh(e, t) {
    if (rt !== 0 && rt !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (ul() && e.callbackNode !== a) return null;
    var o = ye;
    return o = mo(e, e === Me ? o : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), o === 0 ? null : (Sh(e, o, t), Ih(e, At()), e.callbackNode != null && e.callbackNode === a ? qh.bind(null, e) : null);
  }
  function Hh(e, t) {
    if (ul()) return null;
    Sh(e, t, !0);
  }
  function l1() {
    g1(function() {
      (Te & 6) !== 0 ? Ju(Um, o1) : Rh();
    });
  }
  function Ms() {
    if (Fn === 0) {
      var e = ia;
      e === 0 && (e = co, co <<= 1, (co & 261888) === 0 && (co = 256)), Fn = e;
    }
    return Fn;
  }
  function Lh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yo("" + e);
  }
  function Bh(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function u1(e, t, a, o, c) {
    if (t === "submit" && a && a.stateNode === c) {
      var f = Lh((c[zt] || null).action), m = o.submitter;
      m && (t = (t = m[zt] || null) ? Lh(t.formAction) : m.getAttribute("formAction"), t !== null && (f = t, m = null));
      var p = new $o("action", "action", null, o, c);
      e.push({
        event: p,
        listeners: [{
          instance: null,
          listener: function() {
            if (o.defaultPrevented) {
              if (Fn !== 0) {
                var g = m ? Bh(c, m) : new FormData(c);
                is(a, {
                  pending: !0,
                  data: g,
                  method: c.method,
                  action: f
                }, null, g);
              }
            } else typeof f == "function" && (p.preventDefault(), g = m ? Bh(c, m) : new FormData(c), is(a, {
              pending: !0,
              data: g,
              method: c.method,
              action: f
            }, f, g));
          },
          currentTarget: c
        }]
      });
    }
  }
  for (var Rs = 0; Rs < _c.length; Rs++) {
    var Is = _c[Rs];
    on(Is.toLowerCase(), "on" + (Is[0].toUpperCase() + Is.slice(1)));
  }
  on(zp, "onAnimationEnd"), on(wp, "onAnimationIteration"), on(Tp, "onAnimationStart"), on("dblclick", "onDoubleClick"), on("focusin", "onFocus"), on("focusout", "onBlur"), on(z$, "onTransitionRun"), on(w$, "onTransitionStart"), on(T$, "onTransitionCancel"), on(kp, "onTransitionEnd"), Bi("onMouseEnter", ["mouseout", "mouseover"]), Bi("onMouseLeave", ["mouseout", "mouseover"]), Bi("onPointerEnter", ["pointerout", "pointerover"]), Bi("onPointerLeave", ["pointerout", "pointerover"]), mi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), mi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), mi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), mi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), mi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), mi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var _r = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), c1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_r));
  function Gh(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var o = e[a], c = o.event;
      o = o.listeners;
      e: {
        var f = void 0;
        if (t) for (var m = o.length - 1; 0 <= m; m--) {
          var p = o[m], g = p.instance, x = p.currentTarget;
          if (p = p.listener, g !== f && c.isPropagationStopped()) break e;
          f = p, c.currentTarget = x;
          try {
            f(c);
          } catch (j) {
            To(j);
          }
          c.currentTarget = null, f = g;
        }
        else for (m = 0; m < o.length; m++) {
          if (p = o[m], g = p.instance, x = p.currentTarget, p = p.listener, g !== f && c.isPropagationStopped()) break e;
          f = p, c.currentTarget = x;
          try {
            f(c);
          } catch (j) {
            To(j);
          }
          c.currentTarget = null, f = g;
        }
      }
    }
  }
  function ge(e, t) {
    var a = t[Wu];
    a === void 0 && (a = t[Wu] = /* @__PURE__ */ new Set());
    var o = e + "__bubble";
    a.has(o) || (Qh(t, e, 2, !1), a.add(o));
  }
  function qs(e, t, a) {
    var o = 0;
    t && (o |= 4), Qh(a, e, o, t);
  }
  var fl = "_reactListening" + Math.random().toString(36).slice(2);
  function Yh(e) {
    if (!e[fl]) {
      e[fl] = !0, Hm.forEach(function(a) {
        a !== "selectionchange" && (c1.has(a) || qs(a, !1, e), qs(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[fl] || (t[fl] = !0, qs("selectionchange", !1, t));
    }
  }
  function Qh(e, t, a, o) {
    switch (bg(t)) {
      case 2:
        var c = I1;
        break;
      case 8:
        c = q1;
        break;
      default:
        c = tf;
    }
    a = c.bind(null, t, a, e), c = void 0, !lc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), o ? c !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: c
    }) : e.addEventListener(t, a, !0) : c !== void 0 ? e.addEventListener(t, a, { passive: c }) : e.addEventListener(t, a, !1);
  }
  function Hs(e, t, a, o, c) {
    var f = o;
    if ((t & 1) === 0 && (t & 2) === 0 && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var p = o.stateNode.containerInfo;
        if (p === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var g = m.tag;
          if ((g === 3 || g === 4) && m.stateNode.containerInfo === c) return;
          m = m.return;
        }
        for (; p !== null; ) {
          if (m = qi(p), m === null) return;
          if (g = m.tag, g === 5 || g === 6 || g === 26 || g === 27) {
            o = f = m;
            continue e;
          }
          p = p.parentNode;
        }
      }
      o = o.return;
    }
    Fm(function() {
      var x = f, j = rc(a), C = [];
      e: {
        var U = Ep.get(e);
        if (U !== void 0) {
          var A = $o, V = e;
          switch (e) {
            case "keypress":
              if (_o(a) === 0) break e;
            case "keydown":
            case "keyup":
              A = o$;
              break;
            case "focusin":
              V = "focus", A = fc;
              break;
            case "focusout":
              V = "blur", A = fc;
              break;
            case "beforeblur":
            case "afterblur":
              A = fc;
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
              A = np;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = F0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = l$;
              break;
            case zp:
            case wp:
            case Tp:
              A = e$;
              break;
            case kp:
              A = u$;
              break;
            case "scroll":
            case "scrollend":
              A = W0;
              break;
            case "wheel":
              A = c$;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = t$;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = ap;
              break;
            case "toggle":
            case "beforetoggle":
              A = s$;
          }
          var ee = (t & 4) !== 0, Ce = !ee && (e === "scroll" || e === "scrollend"), z = ee ? U !== null ? U + "Capture" : null : U;
          ee = [];
          for (var _ = x, O; _ !== null; ) {
            var D = _;
            if (O = D.stateNode, D = D.tag, D !== 5 && D !== 26 && D !== 27 || O === null || z === null || (D = La(_, z), D != null && ee.push(Sr(_, D, O))), Ce) break;
            _ = _.return;
          }
          0 < ee.length && (U = new A(U, V, null, a, j), C.push({
            event: U,
            listeners: ee
          }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (U = e === "mouseover" || e === "pointerover", A = e === "mouseout" || e === "pointerout", U && a !== ac && (V = a.relatedTarget || a.fromElement) && (qi(V) || V[Ia])) break e;
          if ((A || U) && (U = j.window === j ? j : (U = j.ownerDocument) ? U.defaultView || U.parentWindow : window, A ? (V = a.relatedTarget || a.toElement, A = x, V = V ? qi(V) : null, V !== null && (Ce = d(V), ee = V.tag, V !== Ce || ee !== 5 && ee !== 27 && ee !== 6) && (V = null)) : (A = null, V = x), A !== V)) {
            if (ee = np, D = "onMouseLeave", z = "onMouseEnter", _ = "mouse", (e === "pointerout" || e === "pointerover") && (ee = ap, D = "onPointerLeave", z = "onPointerEnter", _ = "pointer"), Ce = A == null ? U : Ha(A), O = V == null ? U : Ha(V), U = new ee(D, _ + "leave", A, a, j), U.target = Ce, U.relatedTarget = O, D = null, qi(j) === x && (ee = new ee(z, _ + "enter", V, a, j), ee.target = O, ee.relatedTarget = Ce, D = ee), Ce = D, A && V) t: {
              for (ee = s1, z = A, _ = V, O = 0, D = z; D; D = ee(D)) O++;
              D = 0;
              for (var F = _; F; F = ee(F)) D++;
              for (; 0 < O - D; ) z = ee(z), O--;
              for (; 0 < D - O; ) _ = ee(_), D--;
              for (; O--; ) {
                if (z === _ || _ !== null && z === _.alternate) {
                  ee = z;
                  break t;
                }
                z = ee(z), _ = ee(_);
              }
              ee = null;
            }
            else ee = null;
            A !== null && Vh(C, U, A, ee, !1), V !== null && Ce !== null && Vh(C, Ce, V, ee, !0);
          }
        }
        e: {
          if (U = x ? Ha(x) : window, A = U.nodeName && U.nodeName.toLowerCase(), A === "select" || A === "input" && U.type === "file") var $e = dp;
          else if (sp(U)) if (mp) $e = _$;
          else {
            $e = y$;
            var X = g$;
          }
          else A = U.nodeName, !A || A.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? x && ic(x.elementType) && ($e = dp) : $e = b$;
          if ($e && ($e = $e(e, x))) {
            fp(C, $e, a, j);
            break e;
          }
          X && X(e, U, x), e === "focusout" && x && U.type === "number" && x.memoizedProps.value != null && nc(U, "number", U.value);
        }
        switch (X = x ? Ha(x) : window, e) {
          case "focusin":
            (sp(X) || X.contentEditable === "true") && (Xi = X, gc = x, Pa = null);
            break;
          case "focusout":
            Pa = gc = Xi = null;
            break;
          case "mousedown":
            yc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yc = !1, Sp(C, a, j);
            break;
          case "selectionchange":
            if ($$) break;
          case "keydown":
          case "keyup":
            Sp(C, a, j);
        }
        var se;
        if (mc) e: {
          switch (e) {
            case "compositionstart":
              var be = "onCompositionStart";
              break e;
            case "compositionend":
              be = "onCompositionEnd";
              break e;
            case "compositionupdate":
              be = "onCompositionUpdate";
              break e;
          }
          be = void 0;
        }
        else Ji ? up(e, a) && (be = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (be = "onCompositionStart");
        be && (rp && a.locale !== "ko" && (Ji || be !== "onCompositionStart" ? be === "onCompositionEnd" && Ji && (se = ep()) : (In = j, uc = "value" in In ? In.value : In.textContent, Ji = !0)), X = dl(x, be), 0 < X.length && (be = new ip(be, e, null, a, j), C.push({
          event: be,
          listeners: X
        }), se ? be.data = se : (se = cp(a), se !== null && (be.data = se)))), (se = d$ ? m$(e, a) : p$(e, a)) && (be = dl(x, "onBeforeInput"), 0 < be.length && (X = new ip("onBeforeInput", "beforeinput", null, a, j), C.push({
          event: X,
          listeners: be
        }), X.data = se)), u1(C, e, x, a, j);
      }
      Gh(C, t);
    });
  }
  function Sr(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function dl(e, t) {
    for (var a = t + "Capture", o = []; e !== null; ) {
      var c = e, f = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || f === null || (c = La(e, a), c != null && o.unshift(Sr(e, c, f)), c = La(e, t), c != null && o.push(Sr(e, c, f))), e.tag === 3) return o;
      e = e.return;
    }
    return [];
  }
  function s1(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Vh(e, t, a, o, c) {
    for (var f = t._reactName, m = []; a !== null && a !== o; ) {
      var p = a, g = p.alternate, x = p.stateNode;
      if (p = p.tag, g !== null && g === o) break;
      p !== 5 && p !== 26 && p !== 27 || x === null || (g = x, c ? (x = La(a, f), x != null && m.unshift(Sr(a, x, g))) : c || (x = La(a, f), x != null && m.push(Sr(a, x, g)))), a = a.return;
    }
    m.length !== 0 && e.push({
      event: t,
      listeners: m
    });
  }
  var f1 = /\r\n?/g, d1 = /\u0000|\uFFFD/g;
  function Jh(e) {
    return (typeof e == "string" ? e : "" + e).replace(f1, `
`).replace(d1, "");
  }
  function Xh(e, t) {
    return t = Jh(t), Jh(e) === t;
  }
  function Ze(e, t, a, o, c, f) {
    switch (a) {
      case "children":
        typeof o == "string" ? t === "body" || t === "textarea" && o === "" || Yi(e, o) : (typeof o == "number" || typeof o == "bigint") && t !== "body" && Yi(e, "" + o);
        break;
      case "className":
        ho(e, "class", o);
        break;
      case "tabIndex":
        ho(e, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ho(e, a, o);
        break;
      case "style":
        Km(e, o, f);
        break;
      case "data":
        if (t !== "object") {
          ho(e, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        o = yo("" + o), e.setAttribute(a, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof f == "function" && (a === "formAction" ? (t !== "input" && Ze(e, t, "name", c.name, c, null), Ze(e, t, "formEncType", c.formEncType, c, null), Ze(e, t, "formMethod", c.formMethod, c, null), Ze(e, t, "formTarget", c.formTarget, c, null)) : (Ze(e, t, "encType", c.encType, c, null), Ze(e, t, "method", c.method, c, null), Ze(e, t, "target", c.target, c, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          e.removeAttribute(a);
          break;
        }
        o = yo("" + o), e.setAttribute(a, o);
        break;
      case "onClick":
        o != null && (e.onclick = yn);
        break;
      case "onScroll":
        o != null && ge("scroll", e);
        break;
      case "onScrollEnd":
        o != null && ge("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(i(61));
          if (a = o.__html, a != null) {
            if (c.children != null) throw Error(i(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        e.muted = o && typeof o != "function" && typeof o != "symbol";
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
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = yo("" + o), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, "" + o) : e.removeAttribute(a);
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
        o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        o === !0 ? e.setAttribute(a, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, o) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(a, o) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(a) : e.setAttribute(a, o);
        break;
      case "popover":
        ge("beforetoggle", e), ge("toggle", e), vo(e, "popover", o);
        break;
      case "xlinkActuate":
        gn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        gn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        gn(e, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        gn(e, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        gn(e, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        gn(e, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        gn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        gn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        gn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        vo(e, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = P0.get(a) || a, vo(e, a, o));
    }
  }
  function Ls(e, t, a, o, c, f) {
    switch (a) {
      case "style":
        Km(e, o, f);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(i(61));
          if (a = o.__html, a != null) {
            if (c.children != null) throw Error(i(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof o == "string" ? Yi(e, o) : (typeof o == "number" || typeof o == "bigint") && Yi(e, "" + o);
        break;
      case "onScroll":
        o != null && ge("scroll", e);
        break;
      case "onScrollEnd":
        o != null && ge("scrollend", e);
        break;
      case "onClick":
        o != null && (e.onclick = yn);
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
        if (!Lm.hasOwnProperty(a)) e: {
          if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), t = a.slice(2, c ? a.length - 7 : void 0), f = e[zt] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, c), typeof o == "function")) {
            typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, o, c);
            break e;
          }
          a in e ? e[a] = o : o === !0 ? e.setAttribute(a, "") : vo(e, a, o);
        }
    }
  }
  function pt(e, t, a) {
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
        ge("error", e), ge("load", e);
        var o = !1, c = !1, f;
        for (f in a) if (a.hasOwnProperty(f)) {
          var m = a[f];
          if (m != null) switch (f) {
            case "src":
              o = !0;
              break;
            case "srcSet":
              c = !0;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(i(137, t));
            default:
              Ze(e, t, f, m, a, null);
          }
        }
        c && Ze(e, t, "srcSet", a.srcSet, a, null), o && Ze(e, t, "src", a.src, a, null);
        return;
      case "input":
        ge("invalid", e);
        var p = f = m = c = null, g = null, x = null;
        for (o in a) if (a.hasOwnProperty(o)) {
          var j = a[o];
          if (j != null) switch (o) {
            case "name":
              c = j;
              break;
            case "type":
              m = j;
              break;
            case "checked":
              g = j;
              break;
            case "defaultChecked":
              x = j;
              break;
            case "value":
              f = j;
              break;
            case "defaultValue":
              p = j;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (j != null) throw Error(i(137, t));
              break;
            default:
              Ze(e, t, o, j, a, null);
          }
        }
        Vm(e, f, p, g, x, m, c, !1);
        return;
      case "select":
        ge("invalid", e), o = m = f = null;
        for (c in a) if (a.hasOwnProperty(c) && (p = a[c], p != null)) switch (c) {
          case "value":
            f = p;
            break;
          case "defaultValue":
            m = p;
            break;
          case "multiple":
            o = p;
          default:
            Ze(e, t, c, p, a, null);
        }
        t = f, a = m, e.multiple = !!o, t != null ? Gi(e, !!o, t, !1) : a != null && Gi(e, !!o, a, !0);
        return;
      case "textarea":
        ge("invalid", e), f = c = o = null;
        for (m in a) if (a.hasOwnProperty(m) && (p = a[m], p != null)) switch (m) {
          case "value":
            o = p;
            break;
          case "defaultValue":
            c = p;
            break;
          case "children":
            f = p;
            break;
          case "dangerouslySetInnerHTML":
            if (p != null) throw Error(i(91));
            break;
          default:
            Ze(e, t, m, p, a, null);
        }
        Xm(e, o, c, f);
        return;
      case "option":
        for (g in a) a.hasOwnProperty(g) && (o = a[g], o != null) && (g === "selected" ? e.selected = o && typeof o != "function" && typeof o != "symbol" : Ze(e, t, g, o, a, null));
        return;
      case "dialog":
        ge("beforetoggle", e), ge("toggle", e), ge("cancel", e), ge("close", e);
        break;
      case "iframe":
      case "object":
        ge("load", e);
        break;
      case "video":
      case "audio":
        for (o = 0; o < _r.length; o++) ge(_r[o], e);
        break;
      case "image":
        ge("error", e), ge("load", e);
        break;
      case "details":
        ge("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ge("error", e), ge("load", e);
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
        for (x in a) if (a.hasOwnProperty(x) && (o = a[x], o != null)) switch (x) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(i(137, t));
          default:
            Ze(e, t, x, o, a, null);
        }
        return;
      default:
        if (ic(t)) {
          for (j in a) a.hasOwnProperty(j) && (o = a[j], o !== void 0 && Ls(e, t, j, o, a, void 0));
          return;
        }
    }
    for (p in a) a.hasOwnProperty(p) && (o = a[p], o != null && Ze(e, t, p, o, a, null));
  }
  function m1(e, t, a, o) {
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
        var c = null, f = null, m = null, p = null, g = null, x = null, j = null;
        for (A in a) {
          var C = a[A];
          if (a.hasOwnProperty(A) && C != null) switch (A) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              g = C;
            default:
              o.hasOwnProperty(A) || Ze(e, t, A, null, o, C);
          }
        }
        for (var U in o) {
          var A = o[U];
          if (C = a[U], o.hasOwnProperty(U) && (A != null || C != null)) switch (U) {
            case "type":
              f = A;
              break;
            case "name":
              c = A;
              break;
            case "checked":
              x = A;
              break;
            case "defaultChecked":
              j = A;
              break;
            case "value":
              m = A;
              break;
            case "defaultValue":
              p = A;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (A != null) throw Error(i(137, t));
              break;
            default:
              A !== C && Ze(e, t, U, A, o, C);
          }
        }
        tc(e, m, p, g, x, j, f, c);
        return;
      case "select":
        A = m = p = U = null;
        for (f in a) if (g = a[f], a.hasOwnProperty(f) && g != null) switch (f) {
          case "value":
            break;
          case "multiple":
            A = g;
          default:
            o.hasOwnProperty(f) || Ze(e, t, f, null, o, g);
        }
        for (c in o) if (f = o[c], g = a[c], o.hasOwnProperty(c) && (f != null || g != null)) switch (c) {
          case "value":
            U = f;
            break;
          case "defaultValue":
            p = f;
            break;
          case "multiple":
            m = f;
          default:
            f !== g && Ze(e, t, c, f, o, g);
        }
        t = p, a = m, o = A, U != null ? Gi(e, !!a, U, !1) : !!o != !!a && (t != null ? Gi(e, !!a, t, !0) : Gi(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        A = U = null;
        for (p in a) if (c = a[p], a.hasOwnProperty(p) && c != null && !o.hasOwnProperty(p)) switch (p) {
          case "value":
            break;
          case "children":
            break;
          default:
            Ze(e, t, p, null, o, c);
        }
        for (m in o) if (c = o[m], f = a[m], o.hasOwnProperty(m) && (c != null || f != null)) switch (m) {
          case "value":
            U = c;
            break;
          case "defaultValue":
            A = c;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (c != null) throw Error(i(91));
            break;
          default:
            c !== f && Ze(e, t, m, c, o, f);
        }
        Jm(e, U, A);
        return;
      case "option":
        for (var V in a) U = a[V], a.hasOwnProperty(V) && U != null && !o.hasOwnProperty(V) && (V === "selected" ? e.selected = !1 : Ze(e, t, V, null, o, U));
        for (g in o) U = o[g], A = a[g], o.hasOwnProperty(g) && U !== A && (U != null || A != null) && (g === "selected" ? e.selected = U && typeof U != "function" && typeof U != "symbol" : Ze(e, t, g, U, o, A));
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
        for (var ee in a) U = a[ee], a.hasOwnProperty(ee) && U != null && !o.hasOwnProperty(ee) && Ze(e, t, ee, null, o, U);
        for (x in o) if (U = o[x], A = a[x], o.hasOwnProperty(x) && U !== A && (U != null || A != null)) switch (x) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (U != null) throw Error(i(137, t));
            break;
          default:
            Ze(e, t, x, U, o, A);
        }
        return;
      default:
        if (ic(t)) {
          for (var Ce in a) U = a[Ce], a.hasOwnProperty(Ce) && U !== void 0 && !o.hasOwnProperty(Ce) && Ls(e, t, Ce, void 0, o, U);
          for (j in o) U = o[j], A = a[j], !o.hasOwnProperty(j) || U === A || U === void 0 && A === void 0 || Ls(e, t, j, U, o, A);
          return;
        }
    }
    for (var z in a) U = a[z], a.hasOwnProperty(z) && U != null && !o.hasOwnProperty(z) && Ze(e, t, z, null, o, U);
    for (C in o) U = o[C], A = a[C], !o.hasOwnProperty(C) || U === A || U == null && A == null || Ze(e, t, C, U, o, A);
  }
  function Ph(e) {
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
  function p1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), o = 0; o < a.length; o++) {
        var c = a[o], f = c.transferSize, m = c.initiatorType, p = c.duration;
        if (f && p && Ph(m)) {
          for (m = 0, p = c.responseEnd, o += 1; o < a.length; o++) {
            var g = a[o], x = g.startTime;
            if (x > p) break;
            var j = g.transferSize, C = g.initiatorType;
            j && Ph(C) && (g = g.responseEnd, m += j * (g < p ? 1 : (p - x) / (g - x)));
          }
          if (--o, t += 8 * (f + m) / (c.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Bs = null, Gs = null;
  function ml(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Kh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Wh(e, t) {
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
  function Ys(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Qs = null;
  function v1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Qs ? !1 : (Qs = e, !0) : (Qs = null, !1);
  }
  var Fh = typeof setTimeout == "function" ? setTimeout : void 0, h1 = typeof clearTimeout == "function" ? clearTimeout : void 0, eg = typeof Promise == "function" ? Promise : void 0, g1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof eg < "u" ? function(e) {
    return eg.resolve(null).then(e).catch(y1);
  } : Fh;
  function y1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ei(e) {
    return e === "head";
  }
  function tg(e, t) {
    var a = t, o = 0;
    do {
      var c = a.nextSibling;
      if (e.removeChild(a), c && c.nodeType === 8) if (a = c.data, a === "/$" || a === "/&") {
        if (o === 0) {
          e.removeChild(c), $a(t);
          return;
        }
        o--;
      } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") o++;
      else if (a === "html") $r(e.ownerDocument.documentElement);
      else if (a === "head") {
        a = e.ownerDocument.head, $r(a);
        for (var f = a.firstChild; f; ) {
          var m = f.nextSibling, p = f.nodeName;
          f[qa] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = m;
        }
      } else a === "body" && $r(e.ownerDocument.body);
      a = c;
    } while (a);
    $a(t);
  }
  function ng(e, t) {
    var a = e;
    e = 0;
    do {
      var o = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), o && o.nodeType === 8) if (a = o.data, a === "/$") {
        if (e === 0) break;
        e--;
      } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
      a = o;
    } while (a);
  }
  function Vs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Vs(a), Fu(a);
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
  function b1(e, t, a, o) {
    for (; e.nodeType === 1; ) {
      var c = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (o) {
        if (!e[qa]) switch (t) {
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
      if (e = Wt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function _1(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Wt(e.nextSibling), e === null)) return null;
    return e;
  }
  function ig(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Wt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Js(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Xs(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function S1(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading") t();
    else {
      var o = function() {
        t(), a.removeEventListener("DOMContentLoaded", o);
      };
      a.addEventListener("DOMContentLoaded", o), e._reactRetry = o;
    }
  }
  function Wt(e) {
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
  var Ps = null;
  function ag(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return Wt(e.nextSibling);
          t--;
        } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function rg(e) {
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
  function og(e, t, a) {
    switch (t = ml(a), e) {
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
  function $r(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Fu(e);
  }
  var Ft = /* @__PURE__ */ new Map(), lg = /* @__PURE__ */ new Set();
  function pl(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Zn = B.d;
  B.d = {
    f: $1,
    r: z1,
    D: w1,
    C: T1,
    L: k1,
    m: E1,
    X: x1,
    S: O1,
    M: U1
  };
  function $1() {
    var e = Zn.f(), t = rl();
    return e || t;
  }
  function z1(e) {
    var t = Hi(e);
    t !== null && t.tag === 5 && t.type === "form" ? kv(t) : Zn.r(e);
  }
  var ba = typeof document > "u" ? null : document;
  function ug(e, t, a) {
    var o = ba;
    if (o && typeof t == "string" && t) {
      var c = Gt(t);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), lg.has(c) || (lg.add(c), e = {
        rel: e,
        crossOrigin: a,
        href: t
      }, o.querySelector(c) === null && (t = o.createElement("link"), pt(t, "link", e), ut(t), o.head.appendChild(t)));
    }
  }
  function w1(e) {
    Zn.D(e), ug("dns-prefetch", e, null);
  }
  function T1(e, t) {
    Zn.C(e, t), ug("preconnect", e, t);
  }
  function k1(e, t, a) {
    Zn.L(e, t, a);
    var o = ba;
    if (o && e && t) {
      var c = 'link[rel="preload"][as="' + Gt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + Gt(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (c += '[imagesizes="' + Gt(a.imageSizes) + '"]')) : c += '[href="' + Gt(e) + '"]';
      var f = c;
      switch (t) {
        case "style":
          f = _a(e);
          break;
        case "script":
          f = Sa(e);
      }
      Ft.has(f) || (e = y({
        rel: "preload",
        href: t === "image" && a && a.imageSrcSet ? void 0 : e,
        as: t
      }, a), Ft.set(f, e), o.querySelector(c) !== null || t === "style" && o.querySelector(zr(f)) || t === "script" && o.querySelector(wr(f)) || (t = o.createElement("link"), pt(t, "link", e), ut(t), o.head.appendChild(t)));
    }
  }
  function E1(e, t) {
    Zn.m(e, t);
    var a = ba;
    if (a && e) {
      var o = t && typeof t.as == "string" ? t.as : "script", c = 'link[rel="modulepreload"][as="' + Gt(o) + '"][href="' + Gt(e) + '"]', f = c;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Sa(e);
      }
      if (!Ft.has(f) && (e = y({
        rel: "modulepreload",
        href: e
      }, t), Ft.set(f, e), a.querySelector(c) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(wr(f))) return;
        }
        o = a.createElement("link"), pt(o, "link", e), ut(o), a.head.appendChild(o);
      }
    }
  }
  function O1(e, t, a) {
    Zn.S(e, t, a);
    var o = ba;
    if (o && e) {
      var c = Li(o).hoistableStyles, f = _a(e);
      t = t || "default";
      var m = c.get(f);
      if (!m) {
        var p = {
          loading: 0,
          preload: null
        };
        if (m = o.querySelector(zr(f))) p.loading = 5;
        else {
          e = y({
            rel: "stylesheet",
            href: e,
            "data-precedence": t
          }, a), (a = Ft.get(f)) && Ks(e, a);
          var g = m = o.createElement("link");
          ut(g), pt(g, "link", e), g._p = new Promise(function(x, j) {
            g.onload = x, g.onerror = j;
          }), g.addEventListener("load", function() {
            p.loading |= 1;
          }), g.addEventListener("error", function() {
            p.loading |= 2;
          }), p.loading |= 4, vl(m, t, o);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: p
        }, c.set(f, m);
      }
    }
  }
  function x1(e, t) {
    Zn.X(e, t);
    var a = ba;
    if (a && e) {
      var o = Li(a).hoistableScripts, c = Sa(e), f = o.get(c);
      f || (f = a.querySelector(wr(c)), f || (e = y({
        src: e,
        async: !0
      }, t), (t = Ft.get(c)) && Ws(e, t), f = a.createElement("script"), ut(f), pt(f, "link", e), a.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, o.set(c, f));
    }
  }
  function U1(e, t) {
    Zn.M(e, t);
    var a = ba;
    if (a && e) {
      var o = Li(a).hoistableScripts, c = Sa(e), f = o.get(c);
      f || (f = a.querySelector(wr(c)), f || (e = y({
        src: e,
        async: !0,
        type: "module"
      }, t), (t = Ft.get(c)) && Ws(e, t), f = a.createElement("script"), ut(f), pt(f, "link", e), a.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, o.set(c, f));
    }
  }
  function cg(e, t, a, o) {
    var c = (c = ve.current) ? pl(c) : null;
    if (!c) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = _a(a.href), a = Li(c).hoistableStyles, o = a.get(t), o || (o = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, o)), o) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = _a(a.href);
          var f = Li(c).hoistableStyles, m = f.get(e);
          if (m || (c = c.ownerDocument || c, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, f.set(e, m), (f = c.querySelector(zr(e))) && !f._p && (m.instance = f, m.state.loading = 5), Ft.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Ft.set(e, a), f || N1(c, e, a, m.state))), t && o === null) throw Error(i(528, ""));
          return m;
        }
        if (t && o !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Sa(a), a = Li(c).hoistableScripts, o = a.get(t), o || (o = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, o)), o) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(i(444, e));
    }
  }
  function _a(e) {
    return 'href="' + Gt(e) + '"';
  }
  function zr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function sg(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function N1(e, t, a, o) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? o.loading = 1 : (t = e.createElement("link"), o.preload = t, t.addEventListener("load", function() {
      return o.loading |= 1;
    }), t.addEventListener("error", function() {
      return o.loading |= 2;
    }), pt(t, "link", a), ut(t), e.head.appendChild(t));
  }
  function Sa(e) {
    return '[src="' + Gt(e) + '"]';
  }
  function wr(e) {
    return "script[async]" + e;
  }
  function fg(e, t, a) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var o = e.querySelector('style[data-href~="' + Gt(a.href) + '"]');
        if (o) return t.instance = o, ut(o), o;
        var c = y({}, a, {
          "data-href": a.href,
          "data-precedence": a.precedence,
          href: null,
          precedence: null
        });
        return o = (e.ownerDocument || e).createElement("style"), ut(o), pt(o, "style", c), vl(o, a.precedence, e), t.instance = o;
      case "stylesheet":
        c = _a(a.href);
        var f = e.querySelector(zr(c));
        if (f) return t.state.loading |= 4, t.instance = f, ut(f), f;
        o = sg(a), (c = Ft.get(c)) && Ks(o, c), f = (e.ownerDocument || e).createElement("link"), ut(f);
        var m = f;
        return m._p = new Promise(function(p, g) {
          m.onload = p, m.onerror = g;
        }), pt(f, "link", o), t.state.loading |= 4, vl(f, a.precedence, e), t.instance = f;
      case "script":
        return f = Sa(a.src), (c = e.querySelector(wr(f))) ? (t.instance = c, ut(c), c) : (o = a, (c = Ft.get(f)) && (o = y({}, a), Ws(o, c)), e = e.ownerDocument || e, c = e.createElement("script"), ut(c), pt(c, "link", o), e.head.appendChild(c), t.instance = c);
      case "void":
        return null;
      default:
        throw Error(i(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (o = t.instance, t.state.loading |= 4, vl(o, a.precedence, e));
    return t.instance;
  }
  function vl(e, t, a) {
    for (var o = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), c = o.length ? o[o.length - 1] : null, f = c, m = 0; m < o.length; m++) {
      var p = o[m];
      if (p.dataset.precedence === t) f = p;
      else if (f !== c) break;
    }
    f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function Ks(e, t) {
    e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
  }
  function Ws(e, t) {
    e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
  }
  var hl = null;
  function dg(e, t, a) {
    if (hl === null) {
      var o = /* @__PURE__ */ new Map(), c = hl = /* @__PURE__ */ new Map();
      c.set(a, o);
    } else c = hl, o = c.get(a), o || (o = /* @__PURE__ */ new Map(), c.set(a, o));
    if (o.has(e)) return o;
    for (o.set(e, null), a = a.getElementsByTagName(e), c = 0; c < a.length; c++) {
      var f = a[c];
      if (!(f[qa] || f[st] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = f.getAttribute(t) || "";
        m = e + m;
        var p = o.get(m);
        p ? p.push(f) : o.set(m, [f]);
      }
    }
    return o;
  }
  function mg(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null);
  }
  function A1(e, t, a) {
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
  function pg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function j1(e, t, a, o) {
    if (a.type === "stylesheet" && (typeof o.media != "string" || matchMedia(o.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var c = _a(o.href), f = t.querySelector(zr(c));
        if (f) {
          t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = gl.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = f, ut(f);
          return;
        }
        f = t.ownerDocument || t, o = sg(o), (c = Ft.get(c)) && Ks(o, c), f = f.createElement("link"), ut(f);
        var m = f;
        m._p = new Promise(function(p, g) {
          m.onload = p, m.onerror = g;
        }), pt(f, "link", o), a.instance = f;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = gl.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Fs = 0;
  function D1(e, t) {
    return e.stylesheets && e.count === 0 && bl(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var o = setTimeout(function() {
        if (e.stylesheets && bl(e, e.stylesheets), e.unsuspend) {
          var f = e.unsuspend;
          e.unsuspend = null, f();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Fs === 0 && (Fs = 62500 * p1());
      var c = setTimeout(function() {
        if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && bl(e, e.stylesheets), e.unsuspend)) {
          var f = e.unsuspend;
          e.unsuspend = null, f();
        }
      }, (e.imgBytes > Fs ? 50 : 800) + t);
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(o), clearTimeout(c);
      };
    } : null;
  }
  function gl() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) bl(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var yl = null;
  function bl(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, yl = /* @__PURE__ */ new Map(), t.forEach(Z1, e), yl = null, gl.call(e));
  }
  function Z1(e, t) {
    if (!(t.state.loading & 4)) {
      var a = yl.get(e);
      if (a) var o = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), yl.set(e, a);
        for (var c = e.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0; f < c.length; f++) {
          var m = c[f];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (a.set(m.dataset.precedence, m), o = m);
        }
        o && a.set(null, o);
      }
      c = t.instance, m = c.getAttribute("data-precedence"), f = a.get(m) || o, f === o && a.set(null, c), a.set(m, c), this.count++, o = gl.bind(this), c.addEventListener("load", o), c.addEventListener("error", o), f ? f.parentNode.insertBefore(c, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Tr = {
    $$typeof: ue,
    Provider: null,
    Consumer: null,
    _currentValue: we,
    _currentValue2: we,
    _threadCount: 0
  };
  function C1(e, t, a, o, c, f, m, p, g) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Pu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pu(0), this.hiddenUpdates = Pu(null), this.identifierPrefix = o, this.onUncaughtError = c, this.onCaughtError = f, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function M1(e, t, a, o, c, f, m, p, g, x, j, C) {
    return e = new C1(e, t, a, m, g, x, j, C, p), t = 1, f === !0 && (t |= 24), f = Ct(3, null, null, t), e.current = f, f.stateNode = e, t = jc(), t.refCount++, e.pooledCache = t, t.refCount++, f.memoizedState = {
      element: o,
      isDehydrated: a,
      cache: t
    }, Mc(f), e;
  }
  function R1(e) {
    return e ? (e = Wi, e) : Wi;
  }
  function vg(e, t, a, o, c, f) {
    c = R1(c), o.context === null ? o.context = c : o.pendingContext = c, o = ki(t), o.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (o.callback = f), a = Ei(e, o, t), a !== null && (xt(a, e, t), ir(a, e, t));
  }
  function hg(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function ef(e, t) {
    hg(e, t), (e = e.alternate) && hg(e, t);
  }
  function gg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = gi(e, 67108864);
      t !== null && xt(t, e, 67108864), ef(e, 67108864);
    }
  }
  function yg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Kt();
      t = Mm(t);
      var a = gi(e, t);
      a !== null && xt(a, e, t), ef(e, t);
    }
  }
  var _l = !0;
  function I1(e, t, a, o) {
    var c = I.T;
    I.T = null;
    var f = B.p;
    try {
      B.p = 2, tf(e, t, a, o);
    } finally {
      B.p = f, I.T = c;
    }
  }
  function q1(e, t, a, o) {
    var c = I.T;
    I.T = null;
    var f = B.p;
    try {
      B.p = 8, tf(e, t, a, o);
    } finally {
      B.p = f, I.T = c;
    }
  }
  function tf(e, t, a, o) {
    if (_l) {
      var c = nf(o);
      if (c === null) Hs(e, t, o, Sl, a), _g(e, o);
      else if (L1(c, e, t, a, o)) o.stopPropagation();
      else if (_g(e, o), t & 4 && -1 < H1.indexOf(e)) {
        for (; c !== null; ) {
          var f = Hi(c);
          if (f !== null) switch (f.tag) {
            case 3:
              if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                var m = di(f.pendingLanes);
                if (m !== 0) {
                  var p = f;
                  for (p.pendingLanes |= 2, p.entangledLanes |= 2; m; ) {
                    var g = 1 << 31 - Dt(m);
                    p.entanglements[1] |= g, m &= ~g;
                  }
                  Dn(f), (Te & 6) === 0 && (il = At() + 500, br(0, !1));
                }
              }
              break;
            case 31:
            case 13:
              p = gi(f, 2), p !== null && xt(p, f, 2), rl(), ef(f, 2);
          }
          if (f = nf(o), f === null && Hs(e, t, o, Sl, a), f === c) break;
          c = f;
        }
        c !== null && o.stopPropagation();
      } else Hs(e, t, o, null, a);
    }
  }
  function nf(e) {
    return e = rc(e), af(e);
  }
  var Sl = null;
  function af(e) {
    if (Sl = null, e = qi(e), e !== null) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = h(t), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = w(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Sl = e, null;
  }
  function bg(e) {
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
        switch (D0()) {
          case Um:
            return 2;
          case Nm:
            return 8;
          case uo:
          case Z0:
            return 32;
          case Am:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var rf = !1, ti = null, ni = null, ii = null, kr = /* @__PURE__ */ new Map(), Er = /* @__PURE__ */ new Map(), ai = [], H1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function _g(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ti = null;
        break;
      case "dragenter":
      case "dragleave":
        ni = null;
        break;
      case "mouseover":
      case "mouseout":
        ii = null;
        break;
      case "pointerover":
      case "pointerout":
        kr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Er.delete(t.pointerId);
    }
  }
  function Or(e, t, a, o, c, f) {
    return e === null || e.nativeEvent !== f ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: o,
      nativeEvent: f,
      targetContainers: [c]
    }, t !== null && (t = Hi(t), t !== null && gg(t)), e) : (e.eventSystemFlags |= o, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function L1(e, t, a, o, c) {
    switch (t) {
      case "focusin":
        return ti = Or(ti, e, t, a, o, c), !0;
      case "dragenter":
        return ni = Or(ni, e, t, a, o, c), !0;
      case "mouseover":
        return ii = Or(ii, e, t, a, o, c), !0;
      case "pointerover":
        var f = c.pointerId;
        return kr.set(f, Or(kr.get(f) || null, e, t, a, o, c)), !0;
      case "gotpointercapture":
        return f = c.pointerId, Er.set(f, Or(Er.get(f) || null, e, t, a, o, c)), !0;
    }
    return !1;
  }
  function Sg(e) {
    var t = qi(e.target);
    if (t !== null) {
      var a = d(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = h(a), t !== null) {
            e.blockedOn = t, Im(e.priority, function() {
              yg(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = w(a), t !== null) {
            e.blockedOn = t, Im(e.priority, function() {
              yg(a);
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
  function $l(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = nf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var o = new a.constructor(a.type, a);
        ac = o, a.target.dispatchEvent(o), ac = null;
      } else return t = Hi(a), t !== null && gg(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function $g(e, t, a) {
    $l(e) && a.delete(t);
  }
  function B1() {
    rf = !1, ti !== null && $l(ti) && (ti = null), ni !== null && $l(ni) && (ni = null), ii !== null && $l(ii) && (ii = null), kr.forEach($g), Er.forEach($g);
  }
  function zl(e, t) {
    e.blockedOn === t && (e.blockedOn = null, rf || (rf = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, B1)));
  }
  var wl = null;
  function zg(e) {
    wl !== e && (wl = e, r.unstable_scheduleCallback(r.unstable_NormalPriority, function() {
      wl === e && (wl = null);
      for (var t = 0; t < e.length; t += 3) {
        var a = e[t], o = e[t + 1], c = e[t + 2];
        if (typeof o != "function") {
          if (af(o || a) === null) continue;
          break;
        }
        var f = Hi(a);
        f !== null && (e.splice(t, 3), t -= 3, is(f, {
          pending: !0,
          data: c,
          method: a.method,
          action: o
        }, o, c));
      }
    }));
  }
  function $a(e) {
    function t(g) {
      return zl(g, e);
    }
    ti !== null && zl(ti, e), ni !== null && zl(ni, e), ii !== null && zl(ii, e), kr.forEach(t), Er.forEach(t);
    for (var a = 0; a < ai.length; a++) {
      var o = ai[a];
      o.blockedOn === e && (o.blockedOn = null);
    }
    for (; 0 < ai.length && (a = ai[0], a.blockedOn === null); ) Sg(a), a.blockedOn === null && ai.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null) for (o = 0; o < a.length; o += 3) {
      var c = a[o], f = a[o + 1], m = c[zt] || null;
      if (typeof f == "function") m || zg(a);
      else if (m) {
        var p = null;
        if (f && f.hasAttribute("formAction")) {
          if (c = f, m = f[zt] || null) p = m.formAction;
          else if (af(c) !== null) continue;
        } else p = m.action;
        typeof p == "function" ? a[o + 1] = p : (a.splice(o, 3), o -= 3), zg(a);
      }
    }
  }
  function G1() {
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
      c !== null && (c(), c = null), o || setTimeout(a, 20);
    }
    function a() {
      if (!o && !navigation.transition) {
        var f = navigation.currentEntry;
        f && f.url != null && navigation.navigate(f.url, {
          state: f.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var o = !1, c = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        o = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), c !== null && (c(), c = null);
      };
    }
  }
  function of(e) {
    this._internalRoot = e;
  }
  lf.prototype.render = of.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    var a = t.current;
    vg(a, Kt(), e, t, null, null);
  }, lf.prototype.unmount = of.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      vg(e.current, 2, null, e, null, null), rl(), t[Ia] = null;
    }
  };
  function lf(e) {
    this._internalRoot = e;
  }
  lf.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Rm();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var a = 0; a < ai.length && t !== 0 && t < ai[a].priority; a++) ;
      ai.splice(a, 0, e), a === 0 && Sg(e);
    }
  };
  var wg = l.version;
  if (wg !== "19.2.7") throw Error(i(527, wg, "19.2.7"));
  B.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = b(t), e = e !== null ? $(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Y1 = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: I,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tl.isDisabled && Tl.supportsFiber) try {
      Ma = Tl.inject(Y1), jt = Tl;
    } catch {
    }
  }
  n.createRoot = function(e, t) {
    if (!u(e)) throw Error(i(299));
    var a = !1, o = "", c = q$, f = H$, m = L$;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onUncaughtError !== void 0 && (c = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (m = t.onRecoverableError)), t = M1(e, 1, !1, null, null, a, o, null, c, f, m, G1), e[Ia] = t.current, Yh(e), new of(t);
  };
})), rz = /* @__PURE__ */ hn(((n, r) => {
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (s) {
        console.error(s);
      }
  }
  l(), r.exports = az();
})), vt = /* @__PURE__ */ Xg(pf(), 1), oz = /* @__PURE__ */ Xg(rz(), 1), lz = class {
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
      const l = this.listeners.get(n);
      l && (l.delete(r), l.size === 0 && this.listeners.delete(n));
    };
  }
  once(n, r) {
    const l = this.on(n, (s) => {
      r(s), l();
    });
    return l;
  }
  emit(n, r, l) {
    const s = {
      type: n,
      source: r,
      payload: l,
      timestamp: Date.now()
    };
    this.eventHistory.push(s), this.eventHistory.length > this.maxHistorySize && this.eventHistory.shift();
    const i = this.listeners.get(n);
    i && i.forEach((d) => {
      try {
        d(s);
      } catch (h) {
        console.error(`[EventBus] Error in listener for ${n}:`, h);
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
}, Nl = new lz(), Al = {
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
}, vf = Object.freeze({ status: "aborted" });
function k(n, r, l) {
  function s(h, w) {
    var v;
    Object.defineProperty(h, "_zod", {
      value: h._zod ?? {},
      enumerable: !1
    }), (v = h._zod).traits ?? (v.traits = /* @__PURE__ */ new Set()), h._zod.traits.add(n), r(h, w);
    for (const b in d.prototype) b in h || Object.defineProperty(h, b, { value: d.prototype[b].bind(h) });
    h._zod.constr = d, h._zod.def = w;
  }
  const i = l?.Parent ?? Object;
  class u extends i {
  }
  Object.defineProperty(u, "name", { value: n });
  function d(h) {
    var w;
    const v = l?.Parent ? new u() : this;
    s(v, h), (w = v._zod).deferred ?? (w.deferred = []);
    for (const b of v._zod.deferred) b();
    return v;
  }
  return Object.defineProperty(d, "init", { value: s }), Object.defineProperty(d, Symbol.hasInstance, { value: (h) => l?.Parent && h instanceof l.Parent ? !0 : h?._zod?.traits?.has(n) }), Object.defineProperty(d, "name", { value: n }), d;
}
var hf = /* @__PURE__ */ Symbol("zod_brand"), ka = class extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}, jl = {};
function ht(n) {
  return n && Object.assign(jl, n), jl;
}
var uz = /* @__PURE__ */ Cn({
  BIGINT_FORMAT_RANGES: () => ny,
  Class: () => Sz,
  NUMBER_FORMAT_RANGES: () => ty,
  aborted: () => Ta,
  allowsEval: () => Wg,
  assert: () => mz,
  assertEqual: () => cz,
  assertIs: () => fz,
  assertNever: () => dz,
  assertNotEqual: () => sz,
  assignProp: () => ja,
  cached: () => Hl,
  captureStackTrace: () => yf,
  cleanEnum: () => _z,
  cleanRegex: () => Ll,
  clone: () => sn,
  createTransparentProxy: () => bz,
  defineLazy: () => Ee,
  esc: () => wa,
  escapeRegex: () => Mi,
  extend: () => ry,
  finalizeIssue: () => cn,
  floatSafeRemainder: () => Kg,
  getElementAtPath: () => pz,
  getEnumValues: () => gf,
  getLengthableOrigin: () => Gl,
  getParsedType: () => yz,
  getSizableOrigin: () => Bl,
  isObject: () => jr,
  isPlainObject: () => Dr,
  issue: () => Ea,
  joinValues: () => H,
  jsonStringifyReplacer: () => Pg,
  merge: () => oy,
  normalizeParams: () => R,
  nullish: () => Ci,
  numKeys: () => gz,
  omit: () => ay,
  optionalKeys: () => ey,
  partial: () => ly,
  pick: () => iy,
  prefixIssues: () => en,
  primitiveTypes: () => Fg,
  promiseAllObject: () => vz,
  propertyKeyTypes: () => Dl,
  randomString: () => hz,
  required: () => uy,
  stringifyPrimitive: () => fe,
  unwrapMessage: () => xr
});
function cz(n) {
  return n;
}
function sz(n) {
  return n;
}
function fz(n) {
}
function dz(n) {
  throw new Error();
}
function mz(n) {
}
function gf(n) {
  const r = Object.values(n).filter((l) => typeof l == "number");
  return Object.entries(n).filter(([l, s]) => r.indexOf(+l) === -1).map(([l, s]) => s);
}
function H(n, r = "|") {
  return n.map((l) => fe(l)).join(r);
}
function Pg(n, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function Hl(n) {
  return { get value() {
    {
      const r = n();
      return Object.defineProperty(this, "value", { value: r }), r;
    }
    throw new Error("cached value already set");
  } };
}
function Ci(n) {
  return n == null;
}
function Ll(n) {
  const r = n.startsWith("^") ? 1 : 0, l = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(r, l);
}
function Kg(n, r) {
  const l = (n.toString().split(".")[1] || "").length, s = (r.toString().split(".")[1] || "").length, i = l > s ? l : s;
  return Number.parseInt(n.toFixed(i).replace(".", "")) % Number.parseInt(r.toFixed(i).replace(".", "")) / 10 ** i;
}
function Ee(n, r, l) {
  Object.defineProperty(n, r, {
    get() {
      {
        const s = l();
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
function ja(n, r, l) {
  Object.defineProperty(n, r, {
    value: l,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function pz(n, r) {
  return r ? r.reduce((l, s) => l?.[s], n) : n;
}
function vz(n) {
  const r = Object.keys(n), l = r.map((s) => n[s]);
  return Promise.all(l).then((s) => {
    const i = {};
    for (let u = 0; u < r.length; u++) i[r[u]] = s[u];
    return i;
  });
}
function hz(n = 10) {
  const r = "abcdefghijklmnopqrstuvwxyz";
  let l = "";
  for (let s = 0; s < n; s++) l += r[Math.floor(Math.random() * 26)];
  return l;
}
function wa(n) {
  return JSON.stringify(n);
}
var yf = Error.captureStackTrace ? Error.captureStackTrace : (...n) => {
};
function jr(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
var Wg = Hl(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
});
function Dr(n) {
  if (jr(n) === !1) return !1;
  const r = n.constructor;
  if (r === void 0) return !0;
  const l = r.prototype;
  return !(jr(l) === !1 || Object.prototype.hasOwnProperty.call(l, "isPrototypeOf") === !1);
}
function gz(n) {
  let r = 0;
  for (const l in n) Object.prototype.hasOwnProperty.call(n, l) && r++;
  return r;
}
var yz = (n) => {
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
}, Dl = /* @__PURE__ */ new Set([
  "string",
  "number",
  "symbol"
]), Fg = /* @__PURE__ */ new Set([
  "string",
  "number",
  "bigint",
  "boolean",
  "symbol",
  "undefined"
]);
function Mi(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function sn(n, r, l) {
  const s = new n._zod.constr(r ?? n._zod.def);
  return (!r || l?.parent) && (s._zod.parent = n), s;
}
function R(n) {
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
function bz(n) {
  let r;
  return new Proxy({}, {
    get(l, s, i) {
      return r ?? (r = n()), Reflect.get(r, s, i);
    },
    set(l, s, i, u) {
      return r ?? (r = n()), Reflect.set(r, s, i, u);
    },
    has(l, s) {
      return r ?? (r = n()), Reflect.has(r, s);
    },
    deleteProperty(l, s) {
      return r ?? (r = n()), Reflect.deleteProperty(r, s);
    },
    ownKeys(l) {
      return r ?? (r = n()), Reflect.ownKeys(r);
    },
    getOwnPropertyDescriptor(l, s) {
      return r ?? (r = n()), Reflect.getOwnPropertyDescriptor(r, s);
    },
    defineProperty(l, s, i) {
      return r ?? (r = n()), Reflect.defineProperty(r, s, i);
    }
  });
}
function fe(n) {
  return typeof n == "bigint" ? n.toString() + "n" : typeof n == "string" ? `"${n}"` : `${n}`;
}
function ey(n) {
  return Object.keys(n).filter((r) => n[r]._zod.optin === "optional" && n[r]._zod.optout === "optional");
}
var ty = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, ny = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function iy(n, r) {
  const l = {}, s = n._zod.def;
  for (const i in r) {
    if (!(i in s.shape)) throw new Error(`Unrecognized key: "${i}"`);
    r[i] && (l[i] = s.shape[i]);
  }
  return sn(n, {
    ...n._zod.def,
    shape: l,
    checks: []
  });
}
function ay(n, r) {
  const l = { ...n._zod.def.shape }, s = n._zod.def;
  for (const i in r) {
    if (!(i in s.shape)) throw new Error(`Unrecognized key: "${i}"`);
    r[i] && delete l[i];
  }
  return sn(n, {
    ...n._zod.def,
    shape: l,
    checks: []
  });
}
function ry(n, r) {
  if (!Dr(r)) throw new Error("Invalid input to extend: expected a plain object");
  return sn(n, {
    ...n._zod.def,
    get shape() {
      const l = {
        ...n._zod.def.shape,
        ...r
      };
      return ja(this, "shape", l), l;
    },
    checks: []
  });
}
function oy(n, r) {
  return sn(n, {
    ...n._zod.def,
    get shape() {
      const l = {
        ...n._zod.def.shape,
        ...r._zod.def.shape
      };
      return ja(this, "shape", l), l;
    },
    catchall: r._zod.def.catchall,
    checks: []
  });
}
function ly(n, r, l) {
  const s = r._zod.def.shape, i = { ...s };
  if (l) for (const u in l) {
    if (!(u in s)) throw new Error(`Unrecognized key: "${u}"`);
    l[u] && (i[u] = n ? new n({
      type: "optional",
      innerType: s[u]
    }) : s[u]);
  }
  else for (const u in s) i[u] = n ? new n({
    type: "optional",
    innerType: s[u]
  }) : s[u];
  return sn(r, {
    ...r._zod.def,
    shape: i,
    checks: []
  });
}
function uy(n, r, l) {
  const s = r._zod.def.shape, i = { ...s };
  if (l) for (const u in l) {
    if (!(u in i)) throw new Error(`Unrecognized key: "${u}"`);
    l[u] && (i[u] = new n({
      type: "nonoptional",
      innerType: s[u]
    }));
  }
  else for (const u in s) i[u] = new n({
    type: "nonoptional",
    innerType: s[u]
  });
  return sn(r, {
    ...r._zod.def,
    shape: i,
    checks: []
  });
}
function Ta(n, r = 0) {
  for (let l = r; l < n.issues.length; l++) if (n.issues[l]?.continue !== !0) return !0;
  return !1;
}
function en(n, r) {
  return r.map((l) => {
    var s;
    return (s = l).path ?? (s.path = []), l.path.unshift(n), l;
  });
}
function xr(n) {
  return typeof n == "string" ? n : n?.message;
}
function cn(n, r, l) {
  const s = {
    ...n,
    path: n.path ?? []
  };
  return n.message || (s.message = xr(n.inst?._zod.def?.error?.(n)) ?? xr(r?.error?.(n)) ?? xr(l.customError?.(n)) ?? xr(l.localeError?.(n)) ?? "Invalid input"), delete s.inst, delete s.continue, r?.reportInput || delete s.input, s;
}
function Bl(n) {
  return n instanceof Set ? "set" : n instanceof Map ? "map" : n instanceof File ? "file" : "unknown";
}
function Gl(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function Ea(...n) {
  const [r, l, s] = n;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: l,
    inst: s
  } : { ...r };
}
function _z(n) {
  return Object.entries(n).filter(([r, l]) => Number.isNaN(Number.parseInt(r, 10))).map((r) => r[1]);
}
var Sz = class {
  constructor(...n) {
  }
}, cy = (n, r) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: r,
    enumerable: !1
  }), Object.defineProperty(n, "message", {
    get() {
      return JSON.stringify(r, Pg, 2);
    },
    enumerable: !0
  }), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, bf = k("$ZodError", cy), qr = k("$ZodError", cy, { Parent: Error });
function Yl(n, r = (l) => l.message) {
  const l = {}, s = [];
  for (const i of n.issues) i.path.length > 0 ? (l[i.path[0]] = l[i.path[0]] || [], l[i.path[0]].push(r(i))) : s.push(r(i));
  return {
    formErrors: s,
    fieldErrors: l
  };
}
function Ql(n, r) {
  const l = r || function(u) {
    return u.message;
  }, s = { _errors: [] }, i = (u) => {
    for (const d of u.issues) if (d.code === "invalid_union" && d.errors.length) d.errors.map((h) => i({ issues: h }));
    else if (d.code === "invalid_key") i({ issues: d.issues });
    else if (d.code === "invalid_element") i({ issues: d.issues });
    else if (d.path.length === 0) s._errors.push(l(d));
    else {
      let h = s, w = 0;
      for (; w < d.path.length; ) {
        const v = d.path[w];
        w !== d.path.length - 1 ? h[v] = h[v] || { _errors: [] } : (h[v] = h[v] || { _errors: [] }, h[v]._errors.push(l(d))), h = h[v], w++;
      }
    }
  };
  return i(n), s;
}
function _f(n, r) {
  const l = r || function(u) {
    return u.message;
  }, s = { errors: [] }, i = (u, d = []) => {
    var h, w;
    for (const v of u.issues) if (v.code === "invalid_union" && v.errors.length) v.errors.map((b) => i({ issues: b }, v.path));
    else if (v.code === "invalid_key") i({ issues: v.issues }, v.path);
    else if (v.code === "invalid_element") i({ issues: v.issues }, v.path);
    else {
      const b = [...d, ...v.path];
      if (b.length === 0) {
        s.errors.push(l(v));
        continue;
      }
      let $ = s, y = 0;
      for (; y < b.length; ) {
        const Z = b[y], q = y === b.length - 1;
        typeof Z == "string" ? ($.properties ?? ($.properties = {}), (h = $.properties)[Z] ?? (h[Z] = { errors: [] }), $ = $.properties[Z]) : ($.items ?? ($.items = []), (w = $.items)[Z] ?? (w[Z] = { errors: [] }), $ = $.items[Z]), q && $.errors.push(l(v)), y++;
      }
    }
  };
  return i(n), s;
}
function sy(n) {
  const r = [];
  for (const l of n) typeof l == "number" ? r.push(`[${l}]`) : typeof l == "symbol" ? r.push(`[${JSON.stringify(String(l))}]`) : /[^\w$]/.test(l) ? r.push(`[${JSON.stringify(l)}]`) : (r.length && r.push("."), r.push(l));
  return r.join("");
}
function Sf(n) {
  const r = [], l = [...n.issues].sort((s, i) => s.path.length - i.path.length);
  for (const s of l)
    r.push(`✖ ${s.message}`), s.path?.length && r.push(`  → at ${sy(s.path)}`);
  return r.join(`
`);
}
var $f = (n) => (r, l, s, i) => {
  const u = s ? Object.assign(s, { async: !1 }) : { async: !1 }, d = r._zod.run({
    value: l,
    issues: []
  }, u);
  if (d instanceof Promise) throw new ka();
  if (d.issues.length) {
    const h = new (i?.Err ?? n)(d.issues.map((w) => cn(w, u, ht())));
    throw yf(h, i?.callee), h;
  }
  return d.value;
}, cf = /* @__PURE__ */ $f(qr), zf = (n) => async (r, l, s, i) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let d = r._zod.run({
    value: l,
    issues: []
  }, u);
  if (d instanceof Promise && (d = await d), d.issues.length) {
    const h = new (i?.Err ?? n)(d.issues.map((w) => cn(w, u, ht())));
    throw yf(h, i?.callee), h;
  }
  return d.value;
}, sf = /* @__PURE__ */ zf(qr), wf = (n) => (r, l, s) => {
  const i = s ? {
    ...s,
    async: !1
  } : { async: !1 }, u = r._zod.run({
    value: l,
    issues: []
  }, i);
  if (u instanceof Promise) throw new ka();
  return u.issues.length ? {
    success: !1,
    error: new (n ?? bf)(u.issues.map((d) => cn(d, i, ht())))
  } : {
    success: !0,
    data: u.value
  };
}, Tf = /* @__PURE__ */ wf(qr), kf = (n) => async (r, l, s) => {
  const i = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({
    value: l,
    issues: []
  }, i);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new n(u.issues.map((d) => cn(d, i, ht())))
  } : {
    success: !0,
    data: u.value
  };
}, fy = /* @__PURE__ */ kf(qr), Ef = /* @__PURE__ */ Cn({
  _emoji: () => Sy,
  base64: () => Ey,
  base64url: () => Of,
  bigint: () => Cy,
  boolean: () => Iy,
  browserEmail: () => xz,
  cidrv4: () => Ty,
  cidrv6: () => ky,
  cuid: () => dy,
  cuid2: () => my,
  date: () => Ny,
  datetime: () => Dy,
  domain: () => Uz,
  duration: () => yy,
  e164: () => xy,
  email: () => _y,
  emoji: () => $y,
  extendedDuration: () => $z,
  guid: () => by,
  hostname: () => Oy,
  html5Email: () => kz,
  integer: () => My,
  ipv4: () => zy,
  ipv6: () => wy,
  ksuid: () => hy,
  lowercase: () => Ly,
  nanoid: () => gy,
  null: () => qy,
  number: () => Ry,
  rfc5322Email: () => Ez,
  string: () => Zy,
  time: () => jy,
  ulid: () => py,
  undefined: () => Hy,
  unicodeEmail: () => Oz,
  uppercase: () => By,
  uuid: () => Oa,
  uuid4: () => zz,
  uuid6: () => wz,
  uuid7: () => Tz,
  xid: () => vy
}), dy = /^[cC][^\s-]{8,}$/, my = /^[0-9a-z]+$/, py = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, vy = /^[0-9a-vA-V]{20}$/, hy = /^[A-Za-z0-9]{27}$/, gy = /^[a-zA-Z0-9_-]{21}$/, yy = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, $z = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, by = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Oa = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/, zz = /* @__PURE__ */ Oa(4), wz = /* @__PURE__ */ Oa(6), Tz = /* @__PURE__ */ Oa(7), _y = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, kz = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Ez = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Oz = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, xz = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Sy = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function $y() {
  return new RegExp(Sy, "u");
}
var zy = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, wy = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/, Ty = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, ky = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Ey = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Of = /^[A-Za-z0-9_-]*$/, Oy = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/, Uz = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, xy = /^\+(?:[0-9]){6,14}[0-9]$/, Uy = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Ny = /* @__PURE__ */ new RegExp(`^${Uy}$`);
function Ay(n) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${r}` : n.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${n.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function jy(n) {
  return new RegExp(`^${Ay(n)}$`);
}
function Dy(n) {
  const r = Ay({ precision: n.precision }), l = ["Z"];
  n.local && l.push(""), n.offset && l.push("([+-]\\d{2}:\\d{2})");
  const s = `${r}(?:${l.join("|")})`;
  return new RegExp(`^${Uy}T(?:${s})$`);
}
var Zy = (n) => {
  const r = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, Cy = /^\d+n?$/, My = /^\d+$/, Ry = /^-?\d+(?:\.\d+)?/i, Iy = /true|false/i, qy = /null/i, Hy = /undefined/i, Ly = /^[^A-Z]*$/, By = /^[^a-z]*$/, Pe = /* @__PURE__ */ k("$ZodCheck", (n, r) => {
  var l;
  n._zod ?? (n._zod = {}), n._zod.def = r, (l = n._zod).onattach ?? (l.onattach = []);
}), Gy = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, xf = /* @__PURE__ */ k("$ZodCheckLessThan", (n, r) => {
  Pe.init(n, r);
  const l = Gy[typeof r.value];
  n._zod.onattach.push((s) => {
    const i = s._zod.bag, u = (r.inclusive ? i.maximum : i.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    r.value < u && (r.inclusive ? i.maximum = r.value : i.exclusiveMaximum = r.value);
  }), n._zod.check = (s) => {
    (r.inclusive ? s.value <= r.value : s.value < r.value) || s.issues.push({
      origin: l,
      code: "too_big",
      maximum: r.value,
      input: s.value,
      inclusive: r.inclusive,
      inst: n,
      continue: !r.abort
    });
  };
}), Uf = /* @__PURE__ */ k("$ZodCheckGreaterThan", (n, r) => {
  Pe.init(n, r);
  const l = Gy[typeof r.value];
  n._zod.onattach.push((s) => {
    const i = s._zod.bag, u = (r.inclusive ? i.minimum : i.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    r.value > u && (r.inclusive ? i.minimum = r.value : i.exclusiveMinimum = r.value);
  }), n._zod.check = (s) => {
    (r.inclusive ? s.value >= r.value : s.value > r.value) || s.issues.push({
      origin: l,
      code: "too_small",
      minimum: r.value,
      input: s.value,
      inclusive: r.inclusive,
      inst: n,
      continue: !r.abort
    });
  };
}), Yy = /* @__PURE__ */ k("$ZodCheckMultipleOf", (n, r) => {
  Pe.init(n, r), n._zod.onattach.push((l) => {
    var s;
    (s = l._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), n._zod.check = (l) => {
    if (typeof l.value != typeof r.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof l.value == "bigint" ? l.value % r.value === BigInt(0) : Kg(l.value, r.value) === 0) || l.issues.push({
      origin: typeof l.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: l.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Qy = /* @__PURE__ */ k("$ZodCheckNumberFormat", (n, r) => {
  Pe.init(n, r), r.format = r.format || "float64";
  const l = r.format?.includes("int"), s = l ? "int" : "number", [i, u] = ty[r.format];
  n._zod.onattach.push((d) => {
    const h = d._zod.bag;
    h.format = r.format, h.minimum = i, h.maximum = u, l && (h.pattern = My);
  }), n._zod.check = (d) => {
    const h = d.value;
    if (l) {
      if (!Number.isInteger(h)) {
        d.issues.push({
          expected: s,
          format: r.format,
          code: "invalid_type",
          input: h,
          inst: n
        });
        return;
      }
      if (!Number.isSafeInteger(h)) {
        h > 0 ? d.issues.push({
          input: h,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: s,
          continue: !r.abort
        }) : d.issues.push({
          input: h,
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
    h < i && d.issues.push({
      origin: "number",
      input: h,
      code: "too_small",
      minimum: i,
      inclusive: !0,
      inst: n,
      continue: !r.abort
    }), h > u && d.issues.push({
      origin: "number",
      input: h,
      code: "too_big",
      maximum: u,
      inst: n
    });
  };
}), Vy = /* @__PURE__ */ k("$ZodCheckBigIntFormat", (n, r) => {
  Pe.init(n, r);
  const [l, s] = ny[r.format];
  n._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.format = r.format, u.minimum = l, u.maximum = s;
  }), n._zod.check = (i) => {
    const u = i.value;
    u < l && i.issues.push({
      origin: "bigint",
      input: u,
      code: "too_small",
      minimum: l,
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
}), Jy = /* @__PURE__ */ k("$ZodCheckMaxSize", (n, r) => {
  var l;
  Pe.init(n, r), (l = n._zod.def).when ?? (l.when = (s) => {
    const i = s.value;
    return !Ci(i) && i.size !== void 0;
  }), n._zod.onattach.push((s) => {
    const i = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < i && (s._zod.bag.maximum = r.maximum);
  }), n._zod.check = (s) => {
    const i = s.value;
    i.size <= r.maximum || s.issues.push({
      origin: Bl(i),
      code: "too_big",
      maximum: r.maximum,
      input: i,
      inst: n,
      continue: !r.abort
    });
  };
}), Xy = /* @__PURE__ */ k("$ZodCheckMinSize", (n, r) => {
  var l;
  Pe.init(n, r), (l = n._zod.def).when ?? (l.when = (s) => {
    const i = s.value;
    return !Ci(i) && i.size !== void 0;
  }), n._zod.onattach.push((s) => {
    const i = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > i && (s._zod.bag.minimum = r.minimum);
  }), n._zod.check = (s) => {
    const i = s.value;
    i.size >= r.minimum || s.issues.push({
      origin: Bl(i),
      code: "too_small",
      minimum: r.minimum,
      input: i,
      inst: n,
      continue: !r.abort
    });
  };
}), Py = /* @__PURE__ */ k("$ZodCheckSizeEquals", (n, r) => {
  var l;
  Pe.init(n, r), (l = n._zod.def).when ?? (l.when = (s) => {
    const i = s.value;
    return !Ci(i) && i.size !== void 0;
  }), n._zod.onattach.push((s) => {
    const i = s._zod.bag;
    i.minimum = r.size, i.maximum = r.size, i.size = r.size;
  }), n._zod.check = (s) => {
    const i = s.value, u = i.size;
    if (u === r.size) return;
    const d = u > r.size;
    s.issues.push({
      origin: Bl(i),
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
}), Ky = /* @__PURE__ */ k("$ZodCheckMaxLength", (n, r) => {
  var l;
  Pe.init(n, r), (l = n._zod.def).when ?? (l.when = (s) => {
    const i = s.value;
    return !Ci(i) && i.length !== void 0;
  }), n._zod.onattach.push((s) => {
    const i = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < i && (s._zod.bag.maximum = r.maximum);
  }), n._zod.check = (s) => {
    const i = s.value;
    if (i.length <= r.maximum) return;
    const u = Gl(i);
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
}), Wy = /* @__PURE__ */ k("$ZodCheckMinLength", (n, r) => {
  var l;
  Pe.init(n, r), (l = n._zod.def).when ?? (l.when = (s) => {
    const i = s.value;
    return !Ci(i) && i.length !== void 0;
  }), n._zod.onattach.push((s) => {
    const i = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > i && (s._zod.bag.minimum = r.minimum);
  }), n._zod.check = (s) => {
    const i = s.value;
    if (i.length >= r.minimum) return;
    const u = Gl(i);
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
}), Fy = /* @__PURE__ */ k("$ZodCheckLengthEquals", (n, r) => {
  var l;
  Pe.init(n, r), (l = n._zod.def).when ?? (l.when = (s) => {
    const i = s.value;
    return !Ci(i) && i.length !== void 0;
  }), n._zod.onattach.push((s) => {
    const i = s._zod.bag;
    i.minimum = r.length, i.maximum = r.length, i.length = r.length;
  }), n._zod.check = (s) => {
    const i = s.value, u = i.length;
    if (u === r.length) return;
    const d = Gl(i), h = u > r.length;
    s.issues.push({
      origin: d,
      ...h ? {
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
}), Hr = /* @__PURE__ */ k("$ZodCheckStringFormat", (n, r) => {
  var l, s;
  Pe.init(n, r), n._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.format = r.format, r.pattern && (u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(r.pattern));
  }), r.pattern ? (l = n._zod).check ?? (l.check = (i) => {
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
}), eb = /* @__PURE__ */ k("$ZodCheckRegex", (n, r) => {
  Hr.init(n, r), n._zod.check = (l) => {
    r.pattern.lastIndex = 0, !r.pattern.test(l.value) && l.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: l.value,
      pattern: r.pattern.toString(),
      inst: n,
      continue: !r.abort
    });
  };
}), tb = /* @__PURE__ */ k("$ZodCheckLowerCase", (n, r) => {
  r.pattern ?? (r.pattern = Ly), Hr.init(n, r);
}), nb = /* @__PURE__ */ k("$ZodCheckUpperCase", (n, r) => {
  r.pattern ?? (r.pattern = By), Hr.init(n, r);
}), ib = /* @__PURE__ */ k("$ZodCheckIncludes", (n, r) => {
  Pe.init(n, r);
  const l = Mi(r.includes), s = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${l}` : l);
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
}), ab = /* @__PURE__ */ k("$ZodCheckStartsWith", (n, r) => {
  Pe.init(n, r);
  const l = new RegExp(`^${Mi(r.prefix)}.*`);
  r.pattern ?? (r.pattern = l), n._zod.onattach.push((s) => {
    const i = s._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(l);
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
}), rb = /* @__PURE__ */ k("$ZodCheckEndsWith", (n, r) => {
  Pe.init(n, r);
  const l = new RegExp(`.*${Mi(r.suffix)}$`);
  r.pattern ?? (r.pattern = l), n._zod.onattach.push((s) => {
    const i = s._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(l);
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
function Tg(n, r, l) {
  n.issues.length && r.issues.push(...en(l, n.issues));
}
var ob = /* @__PURE__ */ k("$ZodCheckProperty", (n, r) => {
  Pe.init(n, r), n._zod.check = (l) => {
    const s = r.schema._zod.run({
      value: l.value[r.property],
      issues: []
    }, {});
    if (s instanceof Promise) return s.then((i) => Tg(i, l, r.property));
    Tg(s, l, r.property);
  };
}), lb = /* @__PURE__ */ k("$ZodCheckMimeType", (n, r) => {
  Pe.init(n, r);
  const l = new Set(r.mime);
  n._zod.onattach.push((s) => {
    s._zod.bag.mime = r.mime;
  }), n._zod.check = (s) => {
    l.has(s.value.type) || s.issues.push({
      code: "invalid_value",
      values: r.mime,
      input: s.value.type,
      inst: n
    });
  };
}), ub = /* @__PURE__ */ k("$ZodCheckOverwrite", (n, r) => {
  Pe.init(n, r), n._zod.check = (l) => {
    l.value = r.tx(l.value);
  };
}), cb = class {
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
`).filter((i) => i), l = Math.min(...r.map((i) => i.length - i.trimStart().length)), s = r.map((i) => i.slice(l)).map((i) => " ".repeat(this.indent * 2) + i);
    for (const i of s) this.content.push(i);
  }
  compile() {
    const n = Function, r = this?.args, l = [...(this?.content ?? [""]).map((s) => `  ${s}`)];
    return new n(...r, l.join(`
`));
  }
}, sb = {
  major: 4,
  minor: 0,
  patch: 0
}, ae = /* @__PURE__ */ k("$ZodType", (n, r) => {
  var l;
  n ?? (n = {}), n._zod.def = r, n._zod.bag = n._zod.bag || {}, n._zod.version = sb;
  const s = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && s.unshift(n);
  for (const i of s) for (const u of i._zod.onattach) u(n);
  if (s.length === 0)
    (l = n._zod).deferred ?? (l.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const i = (u, d, h) => {
      let w = Ta(u), v;
      for (const b of d) {
        if (b._zod.def.when) {
          if (!b._zod.def.when(u)) continue;
        } else if (w) continue;
        const $ = u.issues.length, y = b._zod.check(u);
        if (y instanceof Promise && h?.async === !1) throw new ka();
        if (v || y instanceof Promise) v = (v ?? Promise.resolve()).then(async () => {
          await y, u.issues.length !== $ && (w || (w = Ta(u, $)));
        });
        else {
          if (u.issues.length === $) continue;
          w || (w = Ta(u, $));
        }
      }
      return v ? v.then(() => u) : u;
    };
    n._zod.run = (u, d) => {
      const h = n._zod.parse(u, d);
      if (h instanceof Promise) {
        if (d.async === !1) throw new ka();
        return h.then((w) => i(w, s, d));
      }
      return i(h, s, d);
    };
  }
  n["~standard"] = {
    validate: (i) => {
      try {
        const u = Tf(n, i);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return fy(n, i).then((d) => d.success ? { value: d.data } : { issues: d.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), Lr = /* @__PURE__ */ k("$ZodString", (n, r) => {
  ae.init(n, r), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? Zy(n._zod.bag), n._zod.parse = (l, s) => {
    if (r.coerce) try {
      l.value = String(l.value);
    } catch {
    }
    return typeof l.value == "string" || l.issues.push({
      expected: "string",
      code: "invalid_type",
      input: l.value,
      inst: n
    }), l;
  };
}), Ie = /* @__PURE__ */ k("$ZodStringFormat", (n, r) => {
  Hr.init(n, r), Lr.init(n, r);
}), fb = /* @__PURE__ */ k("$ZodGUID", (n, r) => {
  r.pattern ?? (r.pattern = by), Ie.init(n, r);
}), db = /* @__PURE__ */ k("$ZodUUID", (n, r) => {
  if (r.version) {
    const l = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[r.version];
    if (l === void 0) throw new Error(`Invalid UUID version: "${r.version}"`);
    r.pattern ?? (r.pattern = Oa(l));
  } else r.pattern ?? (r.pattern = Oa());
  Ie.init(n, r);
}), mb = /* @__PURE__ */ k("$ZodEmail", (n, r) => {
  r.pattern ?? (r.pattern = _y), Ie.init(n, r);
}), pb = /* @__PURE__ */ k("$ZodURL", (n, r) => {
  Ie.init(n, r), n._zod.check = (l) => {
    try {
      const s = l.value, i = new URL(s), u = i.href;
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(i.hostname) || l.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: Oy.source,
        input: l.value,
        inst: n,
        continue: !r.abort
      })), r.protocol && (r.protocol.lastIndex = 0, r.protocol.test(i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol) || l.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: r.protocol.source,
        input: l.value,
        inst: n,
        continue: !r.abort
      })), !s.endsWith("/") && u.endsWith("/") ? l.value = u.slice(0, -1) : l.value = u;
      return;
    } catch {
      l.issues.push({
        code: "invalid_format",
        format: "url",
        input: l.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
}), vb = /* @__PURE__ */ k("$ZodEmoji", (n, r) => {
  r.pattern ?? (r.pattern = $y()), Ie.init(n, r);
}), hb = /* @__PURE__ */ k("$ZodNanoID", (n, r) => {
  r.pattern ?? (r.pattern = gy), Ie.init(n, r);
}), gb = /* @__PURE__ */ k("$ZodCUID", (n, r) => {
  r.pattern ?? (r.pattern = dy), Ie.init(n, r);
}), yb = /* @__PURE__ */ k("$ZodCUID2", (n, r) => {
  r.pattern ?? (r.pattern = my), Ie.init(n, r);
}), bb = /* @__PURE__ */ k("$ZodULID", (n, r) => {
  r.pattern ?? (r.pattern = py), Ie.init(n, r);
}), _b = /* @__PURE__ */ k("$ZodXID", (n, r) => {
  r.pattern ?? (r.pattern = vy), Ie.init(n, r);
}), Sb = /* @__PURE__ */ k("$ZodKSUID", (n, r) => {
  r.pattern ?? (r.pattern = hy), Ie.init(n, r);
}), $b = /* @__PURE__ */ k("$ZodISODateTime", (n, r) => {
  r.pattern ?? (r.pattern = Dy(r)), Ie.init(n, r);
}), zb = /* @__PURE__ */ k("$ZodISODate", (n, r) => {
  r.pattern ?? (r.pattern = Ny), Ie.init(n, r);
}), wb = /* @__PURE__ */ k("$ZodISOTime", (n, r) => {
  r.pattern ?? (r.pattern = jy(r)), Ie.init(n, r);
}), Tb = /* @__PURE__ */ k("$ZodISODuration", (n, r) => {
  r.pattern ?? (r.pattern = yy), Ie.init(n, r);
}), kb = /* @__PURE__ */ k("$ZodIPv4", (n, r) => {
  r.pattern ?? (r.pattern = zy), Ie.init(n, r), n._zod.onattach.push((l) => {
    const s = l._zod.bag;
    s.format = "ipv4";
  });
}), Eb = /* @__PURE__ */ k("$ZodIPv6", (n, r) => {
  r.pattern ?? (r.pattern = wy), Ie.init(n, r), n._zod.onattach.push((l) => {
    const s = l._zod.bag;
    s.format = "ipv6";
  }), n._zod.check = (l) => {
    try {
      new URL(`http://[${l.value}]`);
    } catch {
      l.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: l.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
}), Ob = /* @__PURE__ */ k("$ZodCIDRv4", (n, r) => {
  r.pattern ?? (r.pattern = Ty), Ie.init(n, r);
}), xb = /* @__PURE__ */ k("$ZodCIDRv6", (n, r) => {
  r.pattern ?? (r.pattern = ky), Ie.init(n, r), n._zod.check = (l) => {
    const [s, i] = l.value.split("/");
    try {
      if (!i) throw new Error();
      const u = Number(i);
      if (`${u}` !== i) throw new Error();
      if (u < 0 || u > 128) throw new Error();
      new URL(`http://[${s}]`);
    } catch {
      l.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: l.value,
        inst: n,
        continue: !r.abort
      });
    }
  };
});
function Nf(n) {
  if (n === "") return !0;
  if (n.length % 4 !== 0) return !1;
  try {
    return atob(n), !0;
  } catch {
    return !1;
  }
}
var Ub = /* @__PURE__ */ k("$ZodBase64", (n, r) => {
  r.pattern ?? (r.pattern = Ey), Ie.init(n, r), n._zod.onattach.push((l) => {
    l._zod.bag.contentEncoding = "base64";
  }), n._zod.check = (l) => {
    Nf(l.value) || l.issues.push({
      code: "invalid_format",
      format: "base64",
      input: l.value,
      inst: n,
      continue: !r.abort
    });
  };
});
function Nb(n) {
  if (!Of.test(n)) return !1;
  const r = n.replace(/[-_]/g, (l) => l === "-" ? "+" : "/");
  return Nf(r.padEnd(Math.ceil(r.length / 4) * 4, "="));
}
var Ab = /* @__PURE__ */ k("$ZodBase64URL", (n, r) => {
  r.pattern ?? (r.pattern = Of), Ie.init(n, r), n._zod.onattach.push((l) => {
    l._zod.bag.contentEncoding = "base64url";
  }), n._zod.check = (l) => {
    Nb(l.value) || l.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: l.value,
      inst: n,
      continue: !r.abort
    });
  };
}), jb = /* @__PURE__ */ k("$ZodE164", (n, r) => {
  r.pattern ?? (r.pattern = xy), Ie.init(n, r);
});
function Db(n, r = null) {
  try {
    const l = n.split(".");
    if (l.length !== 3) return !1;
    const [s] = l;
    if (!s) return !1;
    const i = JSON.parse(atob(s));
    return !("typ" in i && i?.typ !== "JWT" || !i.alg || r && (!("alg" in i) || i.alg !== r));
  } catch {
    return !1;
  }
}
var Zb = /* @__PURE__ */ k("$ZodJWT", (n, r) => {
  Ie.init(n, r), n._zod.check = (l) => {
    Db(l.value, r.alg) || l.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: l.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Cb = /* @__PURE__ */ k("$ZodCustomStringFormat", (n, r) => {
  Ie.init(n, r), n._zod.check = (l) => {
    r.fn(l.value) || l.issues.push({
      code: "invalid_format",
      format: r.format,
      input: l.value,
      inst: n,
      continue: !r.abort
    });
  };
}), Af = /* @__PURE__ */ k("$ZodNumber", (n, r) => {
  ae.init(n, r), n._zod.pattern = n._zod.bag.pattern ?? Ry, n._zod.parse = (l, s) => {
    if (r.coerce) try {
      l.value = Number(l.value);
    } catch {
    }
    const i = l.value;
    if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return l;
    const u = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : "Infinity" : void 0;
    return l.issues.push({
      expected: "number",
      code: "invalid_type",
      input: i,
      inst: n,
      ...u ? { received: u } : {}
    }), l;
  };
}), Mb = /* @__PURE__ */ k("$ZodNumber", (n, r) => {
  Qy.init(n, r), Af.init(n, r);
}), jf = /* @__PURE__ */ k("$ZodBoolean", (n, r) => {
  ae.init(n, r), n._zod.pattern = Iy, n._zod.parse = (l, s) => {
    if (r.coerce) try {
      l.value = !!l.value;
    } catch {
    }
    const i = l.value;
    return typeof i == "boolean" || l.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: i,
      inst: n
    }), l;
  };
}), Df = /* @__PURE__ */ k("$ZodBigInt", (n, r) => {
  ae.init(n, r), n._zod.pattern = Cy, n._zod.parse = (l, s) => {
    if (r.coerce) try {
      l.value = BigInt(l.value);
    } catch {
    }
    return typeof l.value == "bigint" || l.issues.push({
      expected: "bigint",
      code: "invalid_type",
      input: l.value,
      inst: n
    }), l;
  };
}), Rb = /* @__PURE__ */ k("$ZodBigInt", (n, r) => {
  Vy.init(n, r), Df.init(n, r);
}), Ib = /* @__PURE__ */ k("$ZodSymbol", (n, r) => {
  ae.init(n, r), n._zod.parse = (l, s) => {
    const i = l.value;
    return typeof i == "symbol" || l.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input: i,
      inst: n
    }), l;
  };
}), qb = /* @__PURE__ */ k("$ZodUndefined", (n, r) => {
  ae.init(n, r), n._zod.pattern = Hy, n._zod.values = /* @__PURE__ */ new Set([void 0]), n._zod.optin = "optional", n._zod.optout = "optional", n._zod.parse = (l, s) => {
    const i = l.value;
    return typeof i > "u" || l.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input: i,
      inst: n
    }), l;
  };
}), Hb = /* @__PURE__ */ k("$ZodNull", (n, r) => {
  ae.init(n, r), n._zod.pattern = qy, n._zod.values = /* @__PURE__ */ new Set([null]), n._zod.parse = (l, s) => {
    const i = l.value;
    return i === null || l.issues.push({
      expected: "null",
      code: "invalid_type",
      input: i,
      inst: n
    }), l;
  };
}), Lb = /* @__PURE__ */ k("$ZodAny", (n, r) => {
  ae.init(n, r), n._zod.parse = (l) => l;
}), Zl = /* @__PURE__ */ k("$ZodUnknown", (n, r) => {
  ae.init(n, r), n._zod.parse = (l) => l;
}), Bb = /* @__PURE__ */ k("$ZodNever", (n, r) => {
  ae.init(n, r), n._zod.parse = (l, s) => (l.issues.push({
    expected: "never",
    code: "invalid_type",
    input: l.value,
    inst: n
  }), l);
}), Gb = /* @__PURE__ */ k("$ZodVoid", (n, r) => {
  ae.init(n, r), n._zod.parse = (l, s) => {
    const i = l.value;
    return typeof i > "u" || l.issues.push({
      expected: "void",
      code: "invalid_type",
      input: i,
      inst: n
    }), l;
  };
}), Yb = /* @__PURE__ */ k("$ZodDate", (n, r) => {
  ae.init(n, r), n._zod.parse = (l, s) => {
    if (r.coerce) try {
      l.value = new Date(l.value);
    } catch {
    }
    const i = l.value, u = i instanceof Date;
    return u && !Number.isNaN(i.getTime()) || l.issues.push({
      expected: "date",
      code: "invalid_type",
      input: i,
      ...u ? { received: "Invalid Date" } : {},
      inst: n
    }), l;
  };
});
function kg(n, r, l) {
  n.issues.length && r.issues.push(...en(l, n.issues)), r.value[l] = n.value;
}
var Zf = /* @__PURE__ */ k("$ZodArray", (n, r) => {
  ae.init(n, r), n._zod.parse = (l, s) => {
    const i = l.value;
    if (!Array.isArray(i))
      return l.issues.push({
        expected: "array",
        code: "invalid_type",
        input: i,
        inst: n
      }), l;
    l.value = Array(i.length);
    const u = [];
    for (let d = 0; d < i.length; d++) {
      const h = i[d], w = r.element._zod.run({
        value: h,
        issues: []
      }, s);
      w instanceof Promise ? u.push(w.then((v) => kg(v, l, d))) : kg(w, l, d);
    }
    return u.length ? Promise.all(u).then(() => l) : l;
  };
});
function kl(n, r, l) {
  n.issues.length && r.issues.push(...en(l, n.issues)), r.value[l] = n.value;
}
function Eg(n, r, l, s) {
  n.issues.length ? s[l] === void 0 ? l in s ? r.value[l] = void 0 : r.value[l] = n.value : r.issues.push(...en(l, n.issues)) : n.value === void 0 ? l in s && (r.value[l] = void 0) : r.value[l] = n.value;
}
var Qb = /* @__PURE__ */ k("$ZodObject", (n, r) => {
  ae.init(n, r);
  const l = Hl(() => {
    const $ = Object.keys(r.shape);
    for (const Z of $) if (!(r.shape[Z] instanceof ae)) throw new Error(`Invalid element at key "${Z}": expected a Zod schema`);
    const y = ey(r.shape);
    return {
      shape: r.shape,
      keys: $,
      keySet: new Set($),
      numKeys: $.length,
      optionalKeys: new Set(y)
    };
  });
  Ee(n._zod, "propValues", () => {
    const $ = r.shape, y = {};
    for (const Z in $) {
      const q = $[Z]._zod;
      if (q.values) {
        y[Z] ?? (y[Z] = /* @__PURE__ */ new Set());
        for (const W of q.values) y[Z].add(W);
      }
    }
    return y;
  });
  const s = ($) => {
    const y = new cb([
      "shape",
      "payload",
      "ctx"
    ]), Z = l.value, q = (K) => {
      const le = wa(K);
      return `shape[${le}]._zod.run({ value: input[${le}], issues: [] }, ctx)`;
    };
    y.write("const input = payload.value;");
    const W = /* @__PURE__ */ Object.create(null);
    let te = 0;
    for (const K of Z.keys) W[K] = `key_${te++}`;
    y.write("const newResult = {}");
    for (const K of Z.keys) if (Z.optionalKeys.has(K)) {
      const le = W[K];
      y.write(`const ${le} = ${q(K)};`);
      const ue = wa(K);
      y.write(`
        if (${le}.issues.length) {
          if (input[${ue}] === undefined) {
            if (${ue} in input) {
              newResult[${ue}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${le}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${ue}, ...iss.path] : [${ue}],
              }))
            );
          }
        } else if (${le}.value === undefined) {
          if (${ue} in input) newResult[${ue}] = undefined;
        } else {
          newResult[${ue}] = ${le}.value;
        }
        `);
    } else {
      const le = W[K];
      y.write(`const ${le} = ${q(K)};`), y.write(`
          if (${le}.issues.length) payload.issues = payload.issues.concat(${le}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${wa(K)}, ...iss.path] : [${wa(K)}]
          })));`), y.write(`newResult[${wa(K)}] = ${le}.value`);
    }
    y.write("payload.value = newResult;"), y.write("return payload;");
    const ne = y.compile();
    return (K, le) => ne($, K, le);
  };
  let i;
  const u = jr, d = !jl.jitless, w = d && Wg.value, v = r.catchall;
  let b;
  n._zod.parse = ($, y) => {
    b ?? (b = l.value);
    const Z = $.value;
    if (!u(Z))
      return $.issues.push({
        expected: "object",
        code: "invalid_type",
        input: Z,
        inst: n
      }), $;
    const q = [];
    if (d && w && y?.async === !1 && y.jitless !== !0)
      i || (i = s(r.shape)), $ = i($, y);
    else {
      $.value = {};
      const le = b.shape;
      for (const ue of b.keys) {
        const it = le[ue], Ke = it._zod.run({
          value: Z[ue],
          issues: []
        }, y), Q = it._zod.optin === "optional" && it._zod.optout === "optional";
        Ke instanceof Promise ? q.push(Ke.then((J) => Q ? Eg(J, $, ue, Z) : kl(J, $, ue))) : Q ? Eg(Ke, $, ue, Z) : kl(Ke, $, ue);
      }
    }
    if (!v) return q.length ? Promise.all(q).then(() => $) : $;
    const W = [], te = b.keySet, ne = v._zod, K = ne.def.type;
    for (const le of Object.keys(Z)) {
      if (te.has(le)) continue;
      if (K === "never") {
        W.push(le);
        continue;
      }
      const ue = ne.run({
        value: Z[le],
        issues: []
      }, y);
      ue instanceof Promise ? q.push(ue.then((it) => kl(it, $, le))) : kl(ue, $, le);
    }
    return W.length && $.issues.push({
      code: "unrecognized_keys",
      keys: W,
      input: Z,
      inst: n
    }), q.length ? Promise.all(q).then(() => $) : $;
  };
});
function Og(n, r, l, s) {
  for (const i of n) if (i.issues.length === 0)
    return r.value = i.value, r;
  return r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: l,
    errors: n.map((i) => i.issues.map((u) => cn(u, s, ht())))
  }), r;
}
var Cf = /* @__PURE__ */ k("$ZodUnion", (n, r) => {
  ae.init(n, r), Ee(n._zod, "optin", () => r.options.some((l) => l._zod.optin === "optional") ? "optional" : void 0), Ee(n._zod, "optout", () => r.options.some((l) => l._zod.optout === "optional") ? "optional" : void 0), Ee(n._zod, "values", () => {
    if (r.options.every((l) => l._zod.values)) return new Set(r.options.flatMap((l) => Array.from(l._zod.values)));
  }), Ee(n._zod, "pattern", () => {
    if (r.options.every((l) => l._zod.pattern)) {
      const l = r.options.map((s) => s._zod.pattern);
      return new RegExp(`^(${l.map((s) => Ll(s.source)).join("|")})$`);
    }
  }), n._zod.parse = (l, s) => {
    let i = !1;
    const u = [];
    for (const d of r.options) {
      const h = d._zod.run({
        value: l.value,
        issues: []
      }, s);
      if (h instanceof Promise)
        u.push(h), i = !0;
      else {
        if (h.issues.length === 0) return h;
        u.push(h);
      }
    }
    return i ? Promise.all(u).then((d) => Og(d, l, n, s)) : Og(u, l, n, s);
  };
}), Vb = /* @__PURE__ */ k("$ZodDiscriminatedUnion", (n, r) => {
  Cf.init(n, r);
  const l = n._zod.parse;
  Ee(n._zod, "propValues", () => {
    const i = {};
    for (const u of r.options) {
      const d = u._zod.propValues;
      if (!d || Object.keys(d).length === 0) throw new Error(`Invalid discriminated union option at index "${r.options.indexOf(u)}"`);
      for (const [h, w] of Object.entries(d)) {
        i[h] || (i[h] = /* @__PURE__ */ new Set());
        for (const v of w) i[h].add(v);
      }
    }
    return i;
  });
  const s = Hl(() => {
    const i = r.options, u = /* @__PURE__ */ new Map();
    for (const d of i) {
      const h = d._zod.propValues[r.discriminator];
      if (!h || h.size === 0) throw new Error(`Invalid discriminated union option at index "${r.options.indexOf(d)}"`);
      for (const w of h) {
        if (u.has(w)) throw new Error(`Duplicate discriminator value "${String(w)}"`);
        u.set(w, d);
      }
    }
    return u;
  });
  n._zod.parse = (i, u) => {
    const d = i.value;
    if (!jr(d))
      return i.issues.push({
        code: "invalid_type",
        expected: "object",
        input: d,
        inst: n
      }), i;
    const h = s.value.get(d?.[r.discriminator]);
    return h ? h._zod.run(i, u) : r.unionFallback ? l(i, u) : (i.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      input: d,
      path: [r.discriminator],
      inst: n
    }), i);
  };
}), Jb = /* @__PURE__ */ k("$ZodIntersection", (n, r) => {
  ae.init(n, r), n._zod.parse = (l, s) => {
    const i = l.value, u = r.left._zod.run({
      value: i,
      issues: []
    }, s), d = r.right._zod.run({
      value: i,
      issues: []
    }, s);
    return u instanceof Promise || d instanceof Promise ? Promise.all([u, d]).then(([h, w]) => xg(l, h, w)) : xg(l, u, d);
  };
});
function ff(n, r) {
  if (n === r) return {
    valid: !0,
    data: n
  };
  if (n instanceof Date && r instanceof Date && +n == +r) return {
    valid: !0,
    data: n
  };
  if (Dr(n) && Dr(r)) {
    const l = Object.keys(r), s = Object.keys(n).filter((u) => l.indexOf(u) !== -1), i = {
      ...n,
      ...r
    };
    for (const u of s) {
      const d = ff(n[u], r[u]);
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
    const l = [];
    for (let s = 0; s < n.length; s++) {
      const i = n[s], u = r[s], d = ff(i, u);
      if (!d.valid) return {
        valid: !1,
        mergeErrorPath: [s, ...d.mergeErrorPath]
      };
      l.push(d.data);
    }
    return {
      valid: !0,
      data: l
    };
  }
  return {
    valid: !1,
    mergeErrorPath: []
  };
}
function xg(n, r, l) {
  if (r.issues.length && n.issues.push(...r.issues), l.issues.length && n.issues.push(...l.issues), Ta(n)) return n;
  const s = ff(r.value, l.value);
  if (!s.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return n.value = s.data, n;
}
var Vl = /* @__PURE__ */ k("$ZodTuple", (n, r) => {
  ae.init(n, r);
  const l = r.items, s = l.length - [...l].reverse().findIndex((i) => i._zod.optin !== "optional");
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
    const h = [];
    if (!r.rest) {
      const v = d.length > l.length, b = d.length < s - 1;
      if (v || b)
        return i.issues.push({
          input: d,
          inst: n,
          origin: "array",
          ...v ? {
            code: "too_big",
            maximum: l.length
          } : {
            code: "too_small",
            minimum: l.length
          }
        }), i;
    }
    let w = -1;
    for (const v of l) {
      if (w++, w >= d.length && w >= s)
        continue;
      const b = v._zod.run({
        value: d[w],
        issues: []
      }, u);
      b instanceof Promise ? h.push(b.then(($) => El($, i, w))) : El(b, i, w);
    }
    if (r.rest) {
      const v = d.slice(l.length);
      for (const b of v) {
        w++;
        const $ = r.rest._zod.run({
          value: b,
          issues: []
        }, u);
        $ instanceof Promise ? h.push($.then((y) => El(y, i, w))) : El($, i, w);
      }
    }
    return h.length ? Promise.all(h).then(() => i) : i;
  };
});
function El(n, r, l) {
  n.issues.length && r.issues.push(...en(l, n.issues)), r.value[l] = n.value;
}
var Xb = /* @__PURE__ */ k("$ZodRecord", (n, r) => {
  ae.init(n, r), n._zod.parse = (l, s) => {
    const i = l.value;
    if (!Dr(i))
      return l.issues.push({
        expected: "record",
        code: "invalid_type",
        input: i,
        inst: n
      }), l;
    const u = [];
    if (r.keyType._zod.values) {
      const d = r.keyType._zod.values;
      l.value = {};
      for (const w of d) if (typeof w == "string" || typeof w == "number" || typeof w == "symbol") {
        const v = r.valueType._zod.run({
          value: i[w],
          issues: []
        }, s);
        v instanceof Promise ? u.push(v.then((b) => {
          b.issues.length && l.issues.push(...en(w, b.issues)), l.value[w] = b.value;
        })) : (v.issues.length && l.issues.push(...en(w, v.issues)), l.value[w] = v.value);
      }
      let h;
      for (const w in i) d.has(w) || (h = h ?? [], h.push(w));
      h && h.length > 0 && l.issues.push({
        code: "unrecognized_keys",
        input: i,
        inst: n,
        keys: h
      });
    } else {
      l.value = {};
      for (const d of Reflect.ownKeys(i)) {
        if (d === "__proto__") continue;
        const h = r.keyType._zod.run({
          value: d,
          issues: []
        }, s);
        if (h instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
        if (h.issues.length) {
          l.issues.push({
            origin: "record",
            code: "invalid_key",
            issues: h.issues.map((v) => cn(v, s, ht())),
            input: d,
            path: [d],
            inst: n
          }), l.value[h.value] = h.value;
          continue;
        }
        const w = r.valueType._zod.run({
          value: i[d],
          issues: []
        }, s);
        w instanceof Promise ? u.push(w.then((v) => {
          v.issues.length && l.issues.push(...en(d, v.issues)), l.value[h.value] = v.value;
        })) : (w.issues.length && l.issues.push(...en(d, w.issues)), l.value[h.value] = w.value);
      }
    }
    return u.length ? Promise.all(u).then(() => l) : l;
  };
}), Pb = /* @__PURE__ */ k("$ZodMap", (n, r) => {
  ae.init(n, r), n._zod.parse = (l, s) => {
    const i = l.value;
    if (!(i instanceof Map))
      return l.issues.push({
        expected: "map",
        code: "invalid_type",
        input: i,
        inst: n
      }), l;
    const u = [];
    l.value = /* @__PURE__ */ new Map();
    for (const [d, h] of i) {
      const w = r.keyType._zod.run({
        value: d,
        issues: []
      }, s), v = r.valueType._zod.run({
        value: h,
        issues: []
      }, s);
      w instanceof Promise || v instanceof Promise ? u.push(Promise.all([w, v]).then(([b, $]) => {
        Ug(b, $, l, d, i, n, s);
      })) : Ug(w, v, l, d, i, n, s);
    }
    return u.length ? Promise.all(u).then(() => l) : l;
  };
});
function Ug(n, r, l, s, i, u, d) {
  n.issues.length && (Dl.has(typeof s) ? l.issues.push(...en(s, n.issues)) : l.issues.push({
    origin: "map",
    code: "invalid_key",
    input: i,
    inst: u,
    issues: n.issues.map((h) => cn(h, d, ht()))
  })), r.issues.length && (Dl.has(typeof s) ? l.issues.push(...en(s, r.issues)) : l.issues.push({
    origin: "map",
    code: "invalid_element",
    input: i,
    inst: u,
    key: s,
    issues: r.issues.map((h) => cn(h, d, ht()))
  })), l.value.set(n.value, r.value);
}
var Kb = /* @__PURE__ */ k("$ZodSet", (n, r) => {
  ae.init(n, r), n._zod.parse = (l, s) => {
    const i = l.value;
    if (!(i instanceof Set))
      return l.issues.push({
        input: i,
        inst: n,
        expected: "set",
        code: "invalid_type"
      }), l;
    const u = [];
    l.value = /* @__PURE__ */ new Set();
    for (const d of i) {
      const h = r.valueType._zod.run({
        value: d,
        issues: []
      }, s);
      h instanceof Promise ? u.push(h.then((w) => Ng(w, l))) : Ng(h, l);
    }
    return u.length ? Promise.all(u).then(() => l) : l;
  };
});
function Ng(n, r) {
  n.issues.length && r.issues.push(...n.issues), r.value.add(n.value);
}
var Wb = /* @__PURE__ */ k("$ZodEnum", (n, r) => {
  ae.init(n, r);
  const l = gf(r.entries);
  n._zod.values = new Set(l), n._zod.pattern = new RegExp(`^(${l.filter((s) => Dl.has(typeof s)).map((s) => typeof s == "string" ? Mi(s) : s.toString()).join("|")})$`), n._zod.parse = (s, i) => {
    const u = s.value;
    return n._zod.values.has(u) || s.issues.push({
      code: "invalid_value",
      values: l,
      input: u,
      inst: n
    }), s;
  };
}), Fb = /* @__PURE__ */ k("$ZodLiteral", (n, r) => {
  ae.init(n, r), n._zod.values = new Set(r.values), n._zod.pattern = new RegExp(`^(${r.values.map((l) => typeof l == "string" ? Mi(l) : l ? l.toString() : String(l)).join("|")})$`), n._zod.parse = (l, s) => {
    const i = l.value;
    return n._zod.values.has(i) || l.issues.push({
      code: "invalid_value",
      values: r.values,
      input: i,
      inst: n
    }), l;
  };
}), e_ = /* @__PURE__ */ k("$ZodFile", (n, r) => {
  ae.init(n, r), n._zod.parse = (l, s) => {
    const i = l.value;
    return i instanceof File || l.issues.push({
      expected: "file",
      code: "invalid_type",
      input: i,
      inst: n
    }), l;
  };
}), Mf = /* @__PURE__ */ k("$ZodTransform", (n, r) => {
  ae.init(n, r), n._zod.parse = (l, s) => {
    const i = r.transform(l.value, l);
    if (s.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((u) => (l.value = u, l));
    if (i instanceof Promise) throw new ka();
    return l.value = i, l;
  };
}), t_ = /* @__PURE__ */ k("$ZodOptional", (n, r) => {
  ae.init(n, r), n._zod.optin = "optional", n._zod.optout = "optional", Ee(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), Ee(n._zod, "pattern", () => {
    const l = r.innerType._zod.pattern;
    return l ? new RegExp(`^(${Ll(l.source)})?$`) : void 0;
  }), n._zod.parse = (l, s) => r.innerType._zod.optin === "optional" ? r.innerType._zod.run(l, s) : l.value === void 0 ? l : r.innerType._zod.run(l, s);
}), n_ = /* @__PURE__ */ k("$ZodNullable", (n, r) => {
  ae.init(n, r), Ee(n._zod, "optin", () => r.innerType._zod.optin), Ee(n._zod, "optout", () => r.innerType._zod.optout), Ee(n._zod, "pattern", () => {
    const l = r.innerType._zod.pattern;
    return l ? new RegExp(`^(${Ll(l.source)}|null)$`) : void 0;
  }), Ee(n._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), n._zod.parse = (l, s) => l.value === null ? l : r.innerType._zod.run(l, s);
}), i_ = /* @__PURE__ */ k("$ZodDefault", (n, r) => {
  ae.init(n, r), n._zod.optin = "optional", Ee(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (l, s) => {
    if (l.value === void 0)
      return l.value = r.defaultValue, l;
    const i = r.innerType._zod.run(l, s);
    return i instanceof Promise ? i.then((u) => Ag(u, r)) : Ag(i, r);
  };
});
function Ag(n, r) {
  return n.value === void 0 && (n.value = r.defaultValue), n;
}
var a_ = /* @__PURE__ */ k("$ZodPrefault", (n, r) => {
  ae.init(n, r), n._zod.optin = "optional", Ee(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (l, s) => (l.value === void 0 && (l.value = r.defaultValue), r.innerType._zod.run(l, s));
}), r_ = /* @__PURE__ */ k("$ZodNonOptional", (n, r) => {
  ae.init(n, r), Ee(n._zod, "values", () => {
    const l = r.innerType._zod.values;
    return l ? new Set([...l].filter((s) => s !== void 0)) : void 0;
  }), n._zod.parse = (l, s) => {
    const i = r.innerType._zod.run(l, s);
    return i instanceof Promise ? i.then((u) => jg(u, n)) : jg(i, n);
  };
});
function jg(n, r) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: r
  }), n;
}
var o_ = /* @__PURE__ */ k("$ZodSuccess", (n, r) => {
  ae.init(n, r), n._zod.parse = (l, s) => {
    const i = r.innerType._zod.run(l, s);
    return i instanceof Promise ? i.then((u) => (l.value = u.issues.length === 0, l)) : (l.value = i.issues.length === 0, l);
  };
}), l_ = /* @__PURE__ */ k("$ZodCatch", (n, r) => {
  ae.init(n, r), n._zod.optin = "optional", Ee(n._zod, "optout", () => r.innerType._zod.optout), Ee(n._zod, "values", () => r.innerType._zod.values), n._zod.parse = (l, s) => {
    const i = r.innerType._zod.run(l, s);
    return i instanceof Promise ? i.then((u) => (l.value = u.value, u.issues.length && (l.value = r.catchValue({
      ...l,
      error: { issues: u.issues.map((d) => cn(d, s, ht())) },
      input: l.value
    }), l.issues = []), l)) : (l.value = i.value, i.issues.length && (l.value = r.catchValue({
      ...l,
      error: { issues: i.issues.map((u) => cn(u, s, ht())) },
      input: l.value
    }), l.issues = []), l);
  };
}), u_ = /* @__PURE__ */ k("$ZodNaN", (n, r) => {
  ae.init(n, r), n._zod.parse = (l, s) => ((typeof l.value != "number" || !Number.isNaN(l.value)) && l.issues.push({
    input: l.value,
    inst: n,
    expected: "nan",
    code: "invalid_type"
  }), l);
}), Rf = /* @__PURE__ */ k("$ZodPipe", (n, r) => {
  ae.init(n, r), Ee(n._zod, "values", () => r.in._zod.values), Ee(n._zod, "optin", () => r.in._zod.optin), Ee(n._zod, "optout", () => r.out._zod.optout), n._zod.parse = (l, s) => {
    const i = r.in._zod.run(l, s);
    return i instanceof Promise ? i.then((u) => Dg(u, r, s)) : Dg(i, r, s);
  };
});
function Dg(n, r, l) {
  return Ta(n) ? n : r.out._zod.run({
    value: n.value,
    issues: n.issues
  }, l);
}
var c_ = /* @__PURE__ */ k("$ZodReadonly", (n, r) => {
  ae.init(n, r), Ee(n._zod, "propValues", () => r.innerType._zod.propValues), Ee(n._zod, "values", () => r.innerType._zod.values), Ee(n._zod, "optin", () => r.innerType._zod.optin), Ee(n._zod, "optout", () => r.innerType._zod.optout), n._zod.parse = (l, s) => {
    const i = r.innerType._zod.run(l, s);
    return i instanceof Promise ? i.then(Zg) : Zg(i);
  };
});
function Zg(n) {
  return n.value = Object.freeze(n.value), n;
}
var s_ = /* @__PURE__ */ k("$ZodTemplateLiteral", (n, r) => {
  ae.init(n, r);
  const l = [];
  for (const s of r.parts) if (s instanceof ae) {
    if (!s._zod.pattern) throw new Error(`Invalid template literal part, no pattern found: ${[...s._zod.traits].shift()}`);
    const i = s._zod.pattern instanceof RegExp ? s._zod.pattern.source : s._zod.pattern;
    if (!i) throw new Error(`Invalid template literal part: ${s._zod.traits}`);
    const u = i.startsWith("^") ? 1 : 0, d = i.endsWith("$") ? i.length - 1 : i.length;
    l.push(i.slice(u, d));
  } else if (s === null || Fg.has(typeof s)) l.push(Mi(`${s}`));
  else throw new Error(`Invalid template literal part: ${s}`);
  n._zod.pattern = new RegExp(`^${l.join("")}$`), n._zod.parse = (s, i) => typeof s.value != "string" ? (s.issues.push({
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
}), f_ = /* @__PURE__ */ k("$ZodPromise", (n, r) => {
  ae.init(n, r), n._zod.parse = (l, s) => Promise.resolve(l.value).then((i) => r.innerType._zod.run({
    value: i,
    issues: []
  }, s));
}), d_ = /* @__PURE__ */ k("$ZodLazy", (n, r) => {
  ae.init(n, r), Ee(n._zod, "innerType", () => r.getter()), Ee(n._zod, "pattern", () => n._zod.innerType._zod.pattern), Ee(n._zod, "propValues", () => n._zod.innerType._zod.propValues), Ee(n._zod, "optin", () => n._zod.innerType._zod.optin), Ee(n._zod, "optout", () => n._zod.innerType._zod.optout), n._zod.parse = (l, s) => n._zod.innerType._zod.run(l, s);
}), m_ = /* @__PURE__ */ k("$ZodCustom", (n, r) => {
  Pe.init(n, r), ae.init(n, r), n._zod.parse = (l, s) => l, n._zod.check = (l) => {
    const s = l.value, i = r.fn(s);
    if (i instanceof Promise) return i.then((u) => Cg(u, l, s, n));
    Cg(i, l, s, n);
  };
});
function Cg(n, r, l, s) {
  if (!n) {
    const i = {
      code: "custom",
      input: l,
      inst: s,
      path: [...s._zod.def.path ?? []],
      continue: !s._zod.def.abort
    };
    s._zod.def.params && (i.params = s._zod.def.params), r.issues.push(Ea(i));
  }
}
var Nz = () => {
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
  const l = (i) => {
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
        return `مدخلات غير مقبولة: يفترض إدخال ${i.expected}، ولكن تم إدخال ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `مدخلات غير مقبولة: يفترض إدخال ${fe(i.values[0])}` : `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${H(i.values, "|")}`;
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
function Az() {
  return { localeError: Nz() };
}
var jz = () => {
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
  const l = (i) => {
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
        return `Yanlış dəyər: gözlənilən ${i.expected}, daxil olan ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Yanlış dəyər: gözlənilən ${fe(i.values[0])}` : `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${H(i.values, "|")}`;
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
function Dz() {
  return { localeError: jz() };
}
function Mg(n, r, l, s) {
  const i = Math.abs(n), u = i % 10, d = i % 100;
  return d >= 11 && d <= 19 ? s : u === 1 ? r : u >= 2 && u <= 4 ? l : s;
}
var Zz = () => {
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
  const l = (i) => {
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
        return `Няправільны ўвод: чакаўся ${i.expected}, атрымана ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Няправільны ўвод: чакалася ${fe(i.values[0])}` : `Няправільны варыянт: чакаўся адзін з ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        if (d) {
          const h = Mg(Number(i.maximum), d.unit.one, d.unit.few, d.unit.many);
          return `Занадта вялікі: чакалася, што ${i.origin ?? "значэнне"} павінна ${d.verb} ${u}${i.maximum.toString()} ${h}`;
        }
        return `Занадта вялікі: чакалася, што ${i.origin ?? "значэнне"} павінна быць ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        if (d) {
          const h = Mg(Number(i.minimum), d.unit.one, d.unit.few, d.unit.many);
          return `Занадта малы: чакалася, што ${i.origin} павінна ${d.verb} ${u}${i.minimum.toString()} ${h}`;
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
function Cz() {
  return { localeError: Zz() };
}
var Mz = () => {
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
  const l = (i) => {
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
        return `Tipus invàlid: s'esperava ${i.expected}, s'ha rebut ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Valor invàlid: s'esperava ${fe(i.values[0])}` : `Opció invàlida: s'esperava una de ${H(i.values, " o ")}`;
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
function Rz() {
  return { localeError: Mz() };
}
var Iz = () => {
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
  const l = (i) => {
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
        return `Neplatný vstup: očekáváno ${i.expected}, obdrženo ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Neplatný vstup: očekáváno ${fe(i.values[0])}` : `Neplatná možnost: očekávána jedna z hodnot ${H(i.values, "|")}`;
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
function qz() {
  return { localeError: Iz() };
}
var Hz = () => {
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
  const l = (i) => {
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
        return `Ungültige Eingabe: erwartet ${i.expected}, erhalten ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Ungültige Eingabe: erwartet ${fe(i.values[0])}` : `Ungültige Option: erwartet eine von ${H(i.values, "|")}`;
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
function Lz() {
  return { localeError: Hz() };
}
var Bz = (n) => {
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
}, Gz = () => {
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
  const l = {
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
        return `Invalid input: expected ${s.expected}, received ${Bz(s.input)}`;
      case "invalid_value":
        return s.values.length === 1 ? `Invalid input: expected ${fe(s.values[0])}` : `Invalid option: expected one of ${H(s.values, "|")}`;
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
        return i.format === "starts_with" ? `Invalid string: must start with "${i.prefix}"` : i.format === "ends_with" ? `Invalid string: must end with "${i.suffix}"` : i.format === "includes" ? `Invalid string: must include "${i.includes}"` : i.format === "regex" ? `Invalid string: must match pattern ${i.pattern}` : `Invalid ${l[i.format] ?? s.format}`;
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
function p_() {
  return { localeError: Gz() };
}
var Yz = (n) => {
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
}, Qz = () => {
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
  const l = {
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
        return `Nevalida enigo: atendiĝis ${s.expected}, riceviĝis ${Yz(s.input)}`;
      case "invalid_value":
        return s.values.length === 1 ? `Nevalida enigo: atendiĝis ${fe(s.values[0])}` : `Nevalida opcio: atendiĝis unu el ${H(s.values, "|")}`;
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
        return i.format === "starts_with" ? `Nevalida karaktraro: devas komenciĝi per "${i.prefix}"` : i.format === "ends_with" ? `Nevalida karaktraro: devas finiĝi per "${i.suffix}"` : i.format === "includes" ? `Nevalida karaktraro: devas inkluzivi "${i.includes}"` : i.format === "regex" ? `Nevalida karaktraro: devas kongrui kun la modelo ${i.pattern}` : `Nevalida ${l[i.format] ?? s.format}`;
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
function Vz() {
  return { localeError: Qz() };
}
var Jz = () => {
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
  const l = (i) => {
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
        return `Entrada inválida: se esperaba ${i.expected}, recibido ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Entrada inválida: se esperaba ${fe(i.values[0])}` : `Opción inválida: se esperaba una de ${H(i.values, "|")}`;
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
function Xz() {
  return { localeError: Jz() };
}
var Pz = () => {
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
  const l = (i) => {
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
        return `ورودی نامعتبر: می‌بایست ${i.expected} می‌بود، ${l(i.input)} دریافت شد`;
      case "invalid_value":
        return i.values.length === 1 ? `ورودی نامعتبر: می‌بایست ${fe(i.values[0])} می‌بود` : `گزینه نامعتبر: می‌بایست یکی از ${H(i.values, "|")} می‌بود`;
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
function Kz() {
  return { localeError: Pz() };
}
var Wz = () => {
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
  const l = (i) => {
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
        return `Virheellinen tyyppi: odotettiin ${i.expected}, oli ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Virheellinen syöte: täytyy olla ${fe(i.values[0])}` : `Virheellinen valinta: täytyy olla yksi seuraavista: ${H(i.values, "|")}`;
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
function Fz() {
  return { localeError: Wz() };
}
var ew = () => {
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
  const l = (i) => {
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
        return `Entrée invalide : ${i.expected} attendu, ${l(i.input)} reçu`;
      case "invalid_value":
        return i.values.length === 1 ? `Entrée invalide : ${fe(i.values[0])} attendu` : `Option invalide : une valeur parmi ${H(i.values, "|")} attendue`;
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
function tw() {
  return { localeError: ew() };
}
var nw = () => {
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
  const l = (i) => {
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
        return `Entrée invalide : attendu ${i.expected}, reçu ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Entrée invalide : attendu ${fe(i.values[0])}` : `Option invalide : attendu l'une des valeurs suivantes ${H(i.values, "|")}`;
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
function iw() {
  return { localeError: nw() };
}
var aw = () => {
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
  const l = (i) => {
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
        return `קלט לא תקין: צריך ${i.expected}, התקבל ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `קלט לא תקין: צריך ${fe(i.values[0])}` : `קלט לא תקין: צריך אחת מהאפשרויות  ${H(i.values, "|")}`;
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
function rw() {
  return { localeError: aw() };
}
var ow = () => {
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
  const l = (i) => {
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
        return `Érvénytelen bemenet: a várt érték ${i.expected}, a kapott érték ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Érvénytelen bemenet: a várt érték ${fe(i.values[0])}` : `Érvénytelen opció: valamelyik érték várt ${H(i.values, "|")}`;
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
function lw() {
  return { localeError: ow() };
}
var uw = () => {
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
  const l = (i) => {
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
        return `Input tidak valid: diharapkan ${i.expected}, diterima ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Input tidak valid: diharapkan ${fe(i.values[0])}` : `Pilihan tidak valid: diharapkan salah satu dari ${H(i.values, "|")}`;
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
function cw() {
  return { localeError: uw() };
}
var sw = () => {
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
  const l = (i) => {
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
        return `Input non valido: atteso ${i.expected}, ricevuto ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Input non valido: atteso ${fe(i.values[0])}` : `Opzione non valida: atteso uno tra ${H(i.values, "|")}`;
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
function fw() {
  return { localeError: sw() };
}
var dw = () => {
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
  const l = (i) => {
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
        return `無効な入力: ${i.expected}が期待されましたが、${l(i.input)}が入力されました`;
      case "invalid_value":
        return i.values.length === 1 ? `無効な入力: ${fe(i.values[0])}が期待されました` : `無効な選択: ${H(i.values, "、")}のいずれかである必要があります`;
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
function mw() {
  return { localeError: dw() };
}
var pw = () => {
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
  const l = (i) => {
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
        return `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${i.expected} ប៉ុន្តែទទួលបាន ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${fe(i.values[0])}` : `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${H(i.values, "|")}`;
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
function vw() {
  return { localeError: pw() };
}
var hw = () => {
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
  const l = (i) => {
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
        return `잘못된 입력: 예상 타입은 ${i.expected}, 받은 타입은 ${l(i.input)}입니다`;
      case "invalid_value":
        return i.values.length === 1 ? `잘못된 입력: 값은 ${fe(i.values[0])} 이어야 합니다` : `잘못된 옵션: ${H(i.values, "또는 ")} 중 하나여야 합니다`;
      case "too_big": {
        const u = i.inclusive ? "이하" : "미만", d = u === "미만" ? "이어야 합니다" : "여야 합니다", h = r(i.origin), w = h?.unit ?? "요소";
        return h ? `${i.origin ?? "값"}이 너무 큽니다: ${i.maximum.toString()}${w} ${u}${d}` : `${i.origin ?? "값"}이 너무 큽니다: ${i.maximum.toString()} ${u}${d}`;
      }
      case "too_small": {
        const u = i.inclusive ? "이상" : "초과", d = u === "이상" ? "이어야 합니다" : "여야 합니다", h = r(i.origin), w = h?.unit ?? "요소";
        return h ? `${i.origin ?? "값"}이 너무 작습니다: ${i.minimum.toString()}${w} ${u}${d}` : `${i.origin ?? "값"}이 너무 작습니다: ${i.minimum.toString()} ${u}${d}`;
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
function gw() {
  return { localeError: hw() };
}
var yw = () => {
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
  const l = (i) => {
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
        return `Грешен внес: се очекува ${i.expected}, примено ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Invalid input: expected ${fe(i.values[0])}` : `Грешана опција: се очекува една ${H(i.values, "|")}`;
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
function bw() {
  return { localeError: yw() };
}
var _w = () => {
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
  const l = (i) => {
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
        return `Input tidak sah: dijangka ${i.expected}, diterima ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Input tidak sah: dijangka ${fe(i.values[0])}` : `Pilihan tidak sah: dijangka salah satu daripada ${H(i.values, "|")}`;
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
function Sw() {
  return { localeError: _w() };
}
var $w = () => {
  const n = {
    string: { unit: "tekens" },
    file: { unit: "bytes" },
    array: { unit: "elementen" },
    set: { unit: "elementen" }
  };
  function r(i) {
    return n[i] ?? null;
  }
  const l = (i) => {
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
        return `Ongeldige invoer: verwacht ${i.expected}, ontving ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Ongeldige invoer: verwacht ${fe(i.values[0])}` : `Ongeldige optie: verwacht één van ${H(i.values, "|")}`;
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
function zw() {
  return { localeError: $w() };
}
var ww = () => {
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
  const l = (i) => {
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
        return `Ugyldig input: forventet ${i.expected}, fikk ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Ugyldig verdi: forventet ${fe(i.values[0])}` : `Ugyldig valg: forventet en av ${H(i.values, "|")}`;
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
function Tw() {
  return { localeError: ww() };
}
var kw = () => {
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
  const l = (i) => {
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
        return `Fâsit giren: umulan ${i.expected}, alınan ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Fâsit giren: umulan ${fe(i.values[0])}` : `Fâsit tercih: mûteberler ${H(i.values, "|")}`;
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
function Ew() {
  return { localeError: kw() };
}
var Ow = () => {
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
  const l = (i) => {
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
        return `ناسم ورودي: باید ${i.expected} وای, مګر ${l(i.input)} ترلاسه شو`;
      case "invalid_value":
        return i.values.length === 1 ? `ناسم ورودي: باید ${fe(i.values[0])} وای` : `ناسم انتخاب: باید یو له ${H(i.values, "|")} څخه وای`;
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
function xw() {
  return { localeError: Ow() };
}
var Uw = () => {
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
  const l = (i) => {
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
        return `Nieprawidłowe dane wejściowe: oczekiwano ${i.expected}, otrzymano ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Nieprawidłowe dane wejściowe: oczekiwano ${fe(i.values[0])}` : `Nieprawidłowa opcja: oczekiwano jednej z wartości ${H(i.values, "|")}`;
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
function Nw() {
  return { localeError: Uw() };
}
var Aw = () => {
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
  const l = (i) => {
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
        return `Tipo inválido: esperado ${i.expected}, recebido ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Entrada inválida: esperado ${fe(i.values[0])}` : `Opção inválida: esperada uma das ${H(i.values, "|")}`;
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
function jw() {
  return { localeError: Aw() };
}
function Rg(n, r, l, s) {
  const i = Math.abs(n), u = i % 10, d = i % 100;
  return d >= 11 && d <= 19 ? s : u === 1 ? r : u >= 2 && u <= 4 ? l : s;
}
var Dw = () => {
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
  const l = (i) => {
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
        return `Неверный ввод: ожидалось ${i.expected}, получено ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Неверный ввод: ожидалось ${fe(i.values[0])}` : `Неверный вариант: ожидалось одно из ${H(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = r(i.origin);
        if (d) {
          const h = Rg(Number(i.maximum), d.unit.one, d.unit.few, d.unit.many);
          return `Слишком большое значение: ожидалось, что ${i.origin ?? "значение"} будет иметь ${u}${i.maximum.toString()} ${h}`;
        }
        return `Слишком большое значение: ожидалось, что ${i.origin ?? "значение"} будет ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = r(i.origin);
        if (d) {
          const h = Rg(Number(i.minimum), d.unit.one, d.unit.few, d.unit.many);
          return `Слишком маленькое значение: ожидалось, что ${i.origin} будет иметь ${u}${i.minimum.toString()} ${h}`;
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
function Zw() {
  return { localeError: Dw() };
}
var Cw = () => {
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
  const l = (i) => {
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
        return `Neveljaven vnos: pričakovano ${i.expected}, prejeto ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Neveljaven vnos: pričakovano ${fe(i.values[0])}` : `Neveljavna možnost: pričakovano eno izmed ${H(i.values, "|")}`;
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
function Mw() {
  return { localeError: Cw() };
}
var Rw = () => {
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
  const l = (i) => {
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
        return `Ogiltig inmatning: förväntat ${i.expected}, fick ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Ogiltig inmatning: förväntat ${fe(i.values[0])}` : `Ogiltigt val: förväntade en av ${H(i.values, "|")}`;
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
function Iw() {
  return { localeError: Rw() };
}
var qw = () => {
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
  const l = (i) => {
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
        return `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${i.expected}, பெறப்பட்டது ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${fe(i.values[0])}` : `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${H(i.values, "|")} இல் ஒன்று`;
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
function Hw() {
  return { localeError: qw() };
}
var Lw = () => {
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
  const l = (i) => {
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
        return `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${i.expected} แต่ได้รับ ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `ค่าไม่ถูกต้อง: ควรเป็น ${fe(i.values[0])}` : `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${H(i.values, "|")}`;
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
function Bw() {
  return { localeError: Lw() };
}
var Gw = (n) => {
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
}, Yw = () => {
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
  const l = {
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
        return `Geçersiz değer: beklenen ${s.expected}, alınan ${Gw(s.input)}`;
      case "invalid_value":
        return s.values.length === 1 ? `Geçersiz değer: beklenen ${fe(s.values[0])}` : `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${H(s.values, "|")}`;
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
        return i.format === "starts_with" ? `Geçersiz metin: "${i.prefix}" ile başlamalı` : i.format === "ends_with" ? `Geçersiz metin: "${i.suffix}" ile bitmeli` : i.format === "includes" ? `Geçersiz metin: "${i.includes}" içermeli` : i.format === "regex" ? `Geçersiz metin: ${i.pattern} desenine uymalı` : `Geçersiz ${l[i.format] ?? s.format}`;
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
function Qw() {
  return { localeError: Yw() };
}
var Vw = () => {
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
  const l = (i) => {
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
        return `Неправильні вхідні дані: очікується ${i.expected}, отримано ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Неправильні вхідні дані: очікується ${fe(i.values[0])}` : `Неправильна опція: очікується одне з ${H(i.values, "|")}`;
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
function Jw() {
  return { localeError: Vw() };
}
var Xw = () => {
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
  const l = (i) => {
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
        return `غلط ان پٹ: ${i.expected} متوقع تھا، ${l(i.input)} موصول ہوا`;
      case "invalid_value":
        return i.values.length === 1 ? `غلط ان پٹ: ${fe(i.values[0])} متوقع تھا` : `غلط آپشن: ${H(i.values, "|")} میں سے ایک متوقع تھا`;
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
function Pw() {
  return { localeError: Xw() };
}
var Kw = () => {
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
  const l = (i) => {
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
        return `Đầu vào không hợp lệ: mong đợi ${i.expected}, nhận được ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `Đầu vào không hợp lệ: mong đợi ${fe(i.values[0])}` : `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${H(i.values, "|")}`;
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
function Ww() {
  return { localeError: Kw() };
}
var Fw = () => {
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
  const l = (i) => {
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
        return `无效输入：期望 ${i.expected}，实际接收 ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `无效输入：期望 ${fe(i.values[0])}` : `无效选项：期望以下之一 ${H(i.values, "|")}`;
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
function eT() {
  return { localeError: Fw() };
}
var tT = () => {
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
  const l = (i) => {
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
        return `無效的輸入值：預期為 ${i.expected}，但收到 ${l(i.input)}`;
      case "invalid_value":
        return i.values.length === 1 ? `無效的輸入值：預期為 ${fe(i.values[0])}` : `無效的選項：預期為以下其中之一 ${H(i.values, "|")}`;
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
function nT() {
  return { localeError: tT() };
}
var If = /* @__PURE__ */ Cn({
  ar: () => Az,
  az: () => Dz,
  be: () => Cz,
  ca: () => Rz,
  cs: () => qz,
  de: () => Lz,
  en: () => p_,
  eo: () => Vz,
  es: () => Xz,
  fa: () => Kz,
  fi: () => Fz,
  fr: () => tw,
  frCA: () => iw,
  he: () => rw,
  hu: () => lw,
  id: () => cw,
  it: () => fw,
  ja: () => mw,
  kh: () => vw,
  ko: () => gw,
  mk: () => bw,
  ms: () => Sw,
  nl: () => zw,
  no: () => Tw,
  ota: () => Ew,
  pl: () => Nw,
  ps: () => xw,
  pt: () => jw,
  ru: () => Zw,
  sl: () => Mw,
  sv: () => Iw,
  ta: () => Hw,
  th: () => Bw,
  tr: () => Qw,
  ua: () => Jw,
  ur: () => Pw,
  vi: () => Ww,
  zhCN: () => eT,
  zhTW: () => nT
}), qf = /* @__PURE__ */ Symbol("ZodOutput"), Hf = /* @__PURE__ */ Symbol("ZodInput"), Lf = class {
  constructor() {
    this._map = /* @__PURE__ */ new Map(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(n, ...r) {
    const l = r[0];
    if (this._map.set(n, l), l && typeof l == "object" && "id" in l) {
      if (this._idmap.has(l.id)) throw new Error(`ID ${l.id} already exists in the registry`);
      this._idmap.set(l.id, n);
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
      const l = { ...this.get(r) ?? {} };
      return delete l.id, {
        ...l,
        ...this._map.get(n)
      };
    }
    return this._map.get(n);
  }
  has(n) {
    return this._map.has(n);
  }
};
function Jl() {
  return new Lf();
}
var li = /* @__PURE__ */ Jl();
function v_(n, r) {
  return new n({
    type: "string",
    ...R(r)
  });
}
function h_(n, r) {
  return new n({
    type: "string",
    coerce: !0,
    ...R(r)
  });
}
function Bf(n, r) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...R(r)
  });
}
function Cl(n, r) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...R(r)
  });
}
function Gf(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...R(r)
  });
}
function Yf(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...R(r)
  });
}
function Qf(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...R(r)
  });
}
function Vf(n, r) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...R(r)
  });
}
function Jf(n, r) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...R(r)
  });
}
function Xf(n, r) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...R(r)
  });
}
function Pf(n, r) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...R(r)
  });
}
function Kf(n, r) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...R(r)
  });
}
function Wf(n, r) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...R(r)
  });
}
function Ff(n, r) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...R(r)
  });
}
function ed(n, r) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...R(r)
  });
}
function td(n, r) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...R(r)
  });
}
function nd(n, r) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...R(r)
  });
}
function id(n, r) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...R(r)
  });
}
function ad(n, r) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...R(r)
  });
}
function rd(n, r) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...R(r)
  });
}
function od(n, r) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...R(r)
  });
}
function ld(n, r) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...R(r)
  });
}
function ud(n, r) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...R(r)
  });
}
function cd(n, r) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...R(r)
  });
}
var sd = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
function g_(n, r) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...R(r)
  });
}
function y_(n, r) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...R(r)
  });
}
function b_(n, r) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...R(r)
  });
}
function __(n, r) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...R(r)
  });
}
function S_(n, r) {
  return new n({
    type: "number",
    checks: [],
    ...R(r)
  });
}
function $_(n, r) {
  return new n({
    type: "number",
    coerce: !0,
    checks: [],
    ...R(r)
  });
}
function z_(n, r) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...R(r)
  });
}
function w_(n, r) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...R(r)
  });
}
function T_(n, r) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...R(r)
  });
}
function k_(n, r) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...R(r)
  });
}
function E_(n, r) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...R(r)
  });
}
function O_(n, r) {
  return new n({
    type: "boolean",
    ...R(r)
  });
}
function x_(n, r) {
  return new n({
    type: "boolean",
    coerce: !0,
    ...R(r)
  });
}
function U_(n, r) {
  return new n({
    type: "bigint",
    ...R(r)
  });
}
function N_(n, r) {
  return new n({
    type: "bigint",
    coerce: !0,
    ...R(r)
  });
}
function A_(n, r) {
  return new n({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...R(r)
  });
}
function j_(n, r) {
  return new n({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...R(r)
  });
}
function D_(n, r) {
  return new n({
    type: "symbol",
    ...R(r)
  });
}
function Z_(n, r) {
  return new n({
    type: "undefined",
    ...R(r)
  });
}
function C_(n, r) {
  return new n({
    type: "null",
    ...R(r)
  });
}
function M_(n) {
  return new n({ type: "any" });
}
function Ml(n) {
  return new n({ type: "unknown" });
}
function R_(n, r) {
  return new n({
    type: "never",
    ...R(r)
  });
}
function I_(n, r) {
  return new n({
    type: "void",
    ...R(r)
  });
}
function q_(n, r) {
  return new n({
    type: "date",
    ...R(r)
  });
}
function H_(n, r) {
  return new n({
    type: "date",
    coerce: !0,
    ...R(r)
  });
}
function L_(n, r) {
  return new n({
    type: "nan",
    ...R(r)
  });
}
function ui(n, r) {
  return new xf({
    check: "less_than",
    ...R(r),
    value: n,
    inclusive: !1
  });
}
function tn(n, r) {
  return new xf({
    check: "less_than",
    ...R(r),
    value: n,
    inclusive: !0
  });
}
function ci(n, r) {
  return new Uf({
    check: "greater_than",
    ...R(r),
    value: n,
    inclusive: !1
  });
}
function Ut(n, r) {
  return new Uf({
    check: "greater_than",
    ...R(r),
    value: n,
    inclusive: !0
  });
}
function fd(n) {
  return ci(0, n);
}
function dd(n) {
  return ui(0, n);
}
function md(n) {
  return tn(0, n);
}
function pd(n) {
  return Ut(0, n);
}
function xa(n, r) {
  return new Yy({
    check: "multiple_of",
    ...R(r),
    value: n
  });
}
function Br(n, r) {
  return new Jy({
    check: "max_size",
    ...R(r),
    maximum: n
  });
}
function Ua(n, r) {
  return new Xy({
    check: "min_size",
    ...R(r),
    minimum: n
  });
}
function Xl(n, r) {
  return new Py({
    check: "size_equals",
    ...R(r),
    size: n
  });
}
function Gr(n, r) {
  return new Ky({
    check: "max_length",
    ...R(r),
    maximum: n
  });
}
function Di(n, r) {
  return new Wy({
    check: "min_length",
    ...R(r),
    minimum: n
  });
}
function Yr(n, r) {
  return new Fy({
    check: "length_equals",
    ...R(r),
    length: n
  });
}
function Pl(n, r) {
  return new eb({
    check: "string_format",
    format: "regex",
    ...R(r),
    pattern: n
  });
}
function Kl(n) {
  return new tb({
    check: "string_format",
    format: "lowercase",
    ...R(n)
  });
}
function Wl(n) {
  return new nb({
    check: "string_format",
    format: "uppercase",
    ...R(n)
  });
}
function Fl(n, r) {
  return new ib({
    check: "string_format",
    format: "includes",
    ...R(r),
    includes: n
  });
}
function eu(n, r) {
  return new ab({
    check: "string_format",
    format: "starts_with",
    ...R(r),
    prefix: n
  });
}
function tu(n, r) {
  return new rb({
    check: "string_format",
    format: "ends_with",
    ...R(r),
    suffix: n
  });
}
function vd(n, r, l) {
  return new ob({
    check: "property",
    property: n,
    schema: r,
    ...R(l)
  });
}
function nu(n, r) {
  return new lb({
    check: "mime_type",
    mime: n,
    ...R(r)
  });
}
function si(n) {
  return new ub({
    check: "overwrite",
    tx: n
  });
}
function iu(n) {
  return si((r) => r.normalize(n));
}
function au() {
  return si((n) => n.trim());
}
function ru() {
  return si((n) => n.toLowerCase());
}
function ou() {
  return si((n) => n.toUpperCase());
}
function hd(n, r, l) {
  return new n({
    type: "array",
    element: r,
    ...R(l)
  });
}
function iT(n, r, l) {
  return new n({
    type: "union",
    options: r,
    ...R(l)
  });
}
function aT(n, r, l, s) {
  return new n({
    type: "union",
    options: l,
    discriminator: r,
    ...R(s)
  });
}
function rT(n, r, l) {
  return new n({
    type: "intersection",
    left: r,
    right: l
  });
}
function B_(n, r, l, s) {
  const i = l instanceof ae, u = i ? s : l;
  return new n({
    type: "tuple",
    items: r,
    rest: i ? l : null,
    ...R(u)
  });
}
function oT(n, r, l, s) {
  return new n({
    type: "record",
    keyType: r,
    valueType: l,
    ...R(s)
  });
}
function lT(n, r, l, s) {
  return new n({
    type: "map",
    keyType: r,
    valueType: l,
    ...R(s)
  });
}
function uT(n, r, l) {
  return new n({
    type: "set",
    valueType: r,
    ...R(l)
  });
}
function cT(n, r, l) {
  return new n({
    type: "enum",
    entries: Array.isArray(r) ? Object.fromEntries(r.map((s) => [s, s])) : r,
    ...R(l)
  });
}
function sT(n, r, l) {
  return new n({
    type: "enum",
    entries: r,
    ...R(l)
  });
}
function fT(n, r, l) {
  return new n({
    type: "literal",
    values: Array.isArray(r) ? r : [r],
    ...R(l)
  });
}
function G_(n, r) {
  return new n({
    type: "file",
    ...R(r)
  });
}
function dT(n, r) {
  return new n({
    type: "transform",
    transform: r
  });
}
function mT(n, r) {
  return new n({
    type: "optional",
    innerType: r
  });
}
function pT(n, r) {
  return new n({
    type: "nullable",
    innerType: r
  });
}
function vT(n, r, l) {
  return new n({
    type: "default",
    innerType: r,
    get defaultValue() {
      return typeof l == "function" ? l() : l;
    }
  });
}
function hT(n, r, l) {
  return new n({
    type: "nonoptional",
    innerType: r,
    ...R(l)
  });
}
function gT(n, r) {
  return new n({
    type: "success",
    innerType: r
  });
}
function yT(n, r, l) {
  return new n({
    type: "catch",
    innerType: r,
    catchValue: typeof l == "function" ? l : () => l
  });
}
function bT(n, r, l) {
  return new n({
    type: "pipe",
    in: r,
    out: l
  });
}
function _T(n, r) {
  return new n({
    type: "readonly",
    innerType: r
  });
}
function ST(n, r, l) {
  return new n({
    type: "template_literal",
    parts: r,
    ...R(l)
  });
}
function $T(n, r) {
  return new n({
    type: "lazy",
    getter: r
  });
}
function zT(n, r) {
  return new n({
    type: "promise",
    innerType: r
  });
}
function Y_(n, r, l) {
  const s = R(l);
  return s.abort ?? (s.abort = !0), new n({
    type: "custom",
    check: "custom",
    fn: r,
    ...s
  });
}
function Q_(n, r, l) {
  return new n({
    type: "custom",
    check: "custom",
    fn: r,
    ...R(l)
  });
}
function V_(n, r) {
  const l = R(r);
  let s = l.truthy ?? [
    "true",
    "1",
    "yes",
    "on",
    "y",
    "enabled"
  ], i = l.falsy ?? [
    "false",
    "0",
    "no",
    "off",
    "n",
    "disabled"
  ];
  l.case !== "sensitive" && (s = s.map(($) => typeof $ == "string" ? $.toLowerCase() : $), i = i.map(($) => typeof $ == "string" ? $.toLowerCase() : $));
  const u = new Set(s), d = new Set(i), h = n.Pipe ?? Rf, w = n.Boolean ?? jf, v = n.String ?? Lr, b = new (n.Transform ?? Mf)({
    type: "transform",
    transform: ($, y) => {
      let Z = $;
      return l.case !== "sensitive" && (Z = Z.toLowerCase()), u.has(Z) ? !0 : d.has(Z) ? !1 : (y.issues.push({
        code: "invalid_value",
        expected: "stringbool",
        values: [...u, ...d],
        input: y.value,
        inst: b
      }), {});
    },
    error: l.error
  });
  return new h({
    type: "pipe",
    in: new h({
      type: "pipe",
      in: new v({
        type: "string",
        error: l.error
      }),
      out: b,
      error: l.error
    }),
    out: new w({
      type: "boolean",
      error: l.error
    }),
    error: l.error
  });
}
function J_(n, r, l, s = {}) {
  const i = R(s), u = {
    ...R(s),
    check: "string_format",
    type: "string",
    format: r,
    fn: typeof l == "function" ? l : (d) => l.test(d),
    ...i
  };
  return l instanceof RegExp && (u.pattern = l), new n(u);
}
var X_ = class {
  constructor(n) {
    this._def = n, this.def = n;
  }
  implement(n) {
    if (typeof n != "function") throw new Error("implement() must be called with a function");
    const r = ((...l) => {
      const s = this._def.input ? cf(this._def.input, l, void 0, { callee: r }) : l;
      if (!Array.isArray(s)) throw new Error("Invalid arguments schema: not an array or tuple schema.");
      const i = n(...s);
      return this._def.output ? cf(this._def.output, i, void 0, { callee: r }) : i;
    });
    return r;
  }
  implementAsync(n) {
    if (typeof n != "function") throw new Error("implement() must be called with a function");
    const r = (async (...l) => {
      const s = this._def.input ? await sf(this._def.input, l, void 0, { callee: r }) : l;
      if (!Array.isArray(s)) throw new Error("Invalid arguments schema: not an array or tuple schema.");
      const i = await n(...s);
      return this._def.output ? sf(this._def.output, i, void 0, { callee: r }) : i;
    });
    return r;
  }
  input(...n) {
    const r = this.constructor;
    return Array.isArray(n[0]) ? new r({
      type: "function",
      input: new Vl({
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
function gd(n) {
  return new X_({
    type: "function",
    input: Array.isArray(n?.input) ? B_(Vl, n?.input) : n?.input ?? hd(Zf, Ml(Zl)),
    output: n?.output ?? Ml(Zl)
  });
}
var df = class {
  constructor(n) {
    this.counter = 0, this.metadataRegistry = n?.metadata ?? li, this.target = n?.target ?? "draft-2020-12", this.unrepresentable = n?.unrepresentable ?? "throw", this.override = n?.override ?? (() => {
    }), this.io = n?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(n, r = {
    path: [],
    schemaPath: []
  }) {
    var l;
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
    const h = n._zod.toJSONSchema?.();
    if (h) d.schema = h;
    else {
      const v = {
        ...r,
        schemaPath: [...r.schemaPath, n],
        path: r.path
      }, b = n._zod.parent;
      if (b)
        d.ref = b, this.process(b, v), this.seen.get(b).isParent = !0;
      else {
        const $ = d.schema;
        switch (s.type) {
          case "string": {
            const y = $;
            y.type = "string";
            const { minimum: Z, maximum: q, format: W, patterns: te, contentEncoding: ne } = n._zod.bag;
            if (typeof Z == "number" && (y.minLength = Z), typeof q == "number" && (y.maxLength = q), W && (y.format = i[W] ?? W, y.format === "" && delete y.format), ne && (y.contentEncoding = ne), te && te.size > 0) {
              const K = [...te];
              K.length === 1 ? y.pattern = K[0].source : K.length > 1 && (d.schema.allOf = [...K.map((le) => ({
                ...this.target === "draft-7" ? { type: "string" } : {},
                pattern: le.source
              }))]);
            }
            break;
          }
          case "number": {
            const y = $, { minimum: Z, maximum: q, format: W, multipleOf: te, exclusiveMaximum: ne, exclusiveMinimum: K } = n._zod.bag;
            typeof W == "string" && W.includes("int") ? y.type = "integer" : y.type = "number", typeof K == "number" && (y.exclusiveMinimum = K), typeof Z == "number" && (y.minimum = Z, typeof K == "number" && (K >= Z ? delete y.minimum : delete y.exclusiveMinimum)), typeof ne == "number" && (y.exclusiveMaximum = ne), typeof q == "number" && (y.maximum = q, typeof ne == "number" && (ne <= q ? delete y.maximum : delete y.exclusiveMaximum)), typeof te == "number" && (y.multipleOf = te);
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
            const y = $, { minimum: Z, maximum: q } = n._zod.bag;
            typeof Z == "number" && (y.minItems = Z), typeof q == "number" && (y.maxItems = q), y.type = "array", y.items = this.process(s.element, {
              ...v,
              path: [...v.path, "items"]
            });
            break;
          }
          case "object": {
            const y = $;
            y.type = "object", y.properties = {};
            const Z = s.shape;
            for (const te in Z) y.properties[te] = this.process(Z[te], {
              ...v,
              path: [
                ...v.path,
                "properties",
                te
              ]
            });
            const q = new Set(Object.keys(Z)), W = new Set([...q].filter((te) => {
              const ne = s.shape[te]._zod;
              return this.io === "input" ? ne.optin === void 0 : ne.optout === void 0;
            }));
            W.size > 0 && (y.required = Array.from(W)), s.catchall?._zod.def.type === "never" ? y.additionalProperties = !1 : s.catchall ? s.catchall && (y.additionalProperties = this.process(s.catchall, {
              ...v,
              path: [...v.path, "additionalProperties"]
            })) : this.io === "output" && (y.additionalProperties = !1);
            break;
          }
          case "union": {
            const y = $;
            y.anyOf = s.options.map((Z, q) => this.process(Z, {
              ...v,
              path: [
                ...v.path,
                "anyOf",
                q
              ]
            }));
            break;
          }
          case "intersection": {
            const y = $, Z = this.process(s.left, {
              ...v,
              path: [
                ...v.path,
                "allOf",
                0
              ]
            }), q = this.process(s.right, {
              ...v,
              path: [
                ...v.path,
                "allOf",
                1
              ]
            }), W = (te) => "allOf" in te && Object.keys(te).length === 1;
            y.allOf = [...W(Z) ? Z.allOf : [Z], ...W(q) ? q.allOf : [q]];
            break;
          }
          case "tuple": {
            const y = $;
            y.type = "array";
            const Z = s.items.map((te, ne) => this.process(te, {
              ...v,
              path: [
                ...v.path,
                "prefixItems",
                ne
              ]
            }));
            if (this.target === "draft-2020-12" ? y.prefixItems = Z : y.items = Z, s.rest) {
              const te = this.process(s.rest, {
                ...v,
                path: [...v.path, "items"]
              });
              this.target === "draft-2020-12" ? y.items = te : y.additionalItems = te;
            }
            s.rest && (y.items = this.process(s.rest, {
              ...v,
              path: [...v.path, "items"]
            }));
            const { minimum: q, maximum: W } = n._zod.bag;
            typeof q == "number" && (y.minItems = q), typeof W == "number" && (y.maxItems = W);
            break;
          }
          case "record": {
            const y = $;
            y.type = "object", y.propertyNames = this.process(s.keyType, {
              ...v,
              path: [...v.path, "propertyNames"]
            }), y.additionalProperties = this.process(s.valueType, {
              ...v,
              path: [...v.path, "additionalProperties"]
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
            const y = $, Z = gf(s.entries);
            Z.every((q) => typeof q == "number") && (y.type = "number"), Z.every((q) => typeof q == "string") && (y.type = "string"), y.enum = Z;
            break;
          }
          case "literal": {
            const y = $, Z = [];
            for (const q of s.values) if (q === void 0) {
              if (this.unrepresentable === "throw") throw new Error("Literal `undefined` cannot be represented in JSON Schema");
            } else if (typeof q == "bigint") {
              if (this.unrepresentable === "throw") throw new Error("BigInt literals cannot be represented in JSON Schema");
              Z.push(Number(q));
            } else Z.push(q);
            if (Z.length !== 0)
              if (Z.length === 1) {
                const q = Z[0];
                y.type = q === null ? "null" : typeof q, y.const = q;
              } else
                Z.every((q) => typeof q == "number") && (y.type = "number"), Z.every((q) => typeof q == "string") && (y.type = "string"), Z.every((q) => typeof q == "boolean") && (y.type = "string"), Z.every((q) => q === null) && (y.type = "null"), y.enum = Z;
            break;
          }
          case "file": {
            const y = $, Z = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: q, maximum: W, mime: te } = n._zod.bag;
            q !== void 0 && (Z.minLength = q), W !== void 0 && (Z.maxLength = W), te ? te.length === 1 ? (Z.contentMediaType = te[0], Object.assign(y, Z)) : y.anyOf = te.map((ne) => ({
              ...Z,
              contentMediaType: ne
            })) : Object.assign(y, Z);
            break;
          }
          case "transform":
            if (this.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          case "nullable":
            $.anyOf = [this.process(s.innerType, v), { type: "null" }];
            break;
          case "nonoptional":
            this.process(s.innerType, v), d.ref = s.innerType;
            break;
          case "success": {
            const y = $;
            y.type = "boolean";
            break;
          }
          case "default":
            this.process(s.innerType, v), d.ref = s.innerType, $.default = JSON.parse(JSON.stringify(s.defaultValue));
            break;
          case "prefault":
            this.process(s.innerType, v), d.ref = s.innerType, this.io === "input" && ($._prefault = JSON.parse(JSON.stringify(s.defaultValue)));
            break;
          case "catch": {
            this.process(s.innerType, v), d.ref = s.innerType;
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
            const y = $, Z = n._zod.pattern;
            if (!Z) throw new Error("Pattern not found in template literal");
            y.type = "string", y.pattern = Z.source;
            break;
          }
          case "pipe": {
            const y = this.io === "input" ? s.in._zod.def.type === "transform" ? s.out : s.in : s.out;
            this.process(y, v), d.ref = y;
            break;
          }
          case "readonly":
            this.process(s.innerType, v), d.ref = s.innerType, $.readOnly = !0;
            break;
          case "promise":
            this.process(s.innerType, v), d.ref = s.innerType;
            break;
          case "optional":
            this.process(s.innerType, v), d.ref = s.innerType;
            break;
          case "lazy": {
            const y = n._zod.innerType;
            this.process(y, v), d.ref = y;
            break;
          }
          case "custom":
            if (this.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
            break;
          default:
        }
      }
    }
    const w = this.metadataRegistry.get(n);
    return w && Object.assign(d.schema, w), this.io === "input" && ot(n) && (delete d.schema.examples, delete d.schema.default), this.io === "input" && d.schema._prefault && ((l = d.schema).default ?? (l.default = d.schema._prefault)), delete d.schema._prefault, this.seen.get(n).schema;
  }
  emit(n, r) {
    const l = {
      cycles: r?.cycles ?? "ref",
      reused: r?.reused ?? "inline",
      external: r?.external ?? void 0
    }, s = this.seen.get(n);
    if (!s) throw new Error("Unprocessed schema. This is a bug in Zod.");
    const i = (v) => {
      const b = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (l.external) {
        const Z = l.external.registry.get(v[0])?.id, q = l.external.uri ?? ((te) => te);
        if (Z) return { ref: q(Z) };
        const W = v[1].defId ?? v[1].schema.id ?? `schema${this.counter++}`;
        return v[1].defId = W, {
          defId: W,
          ref: `${q("__shared")}#/${b}/${W}`
        };
      }
      if (v[1] === s) return { ref: "#" };
      const $ = `#/${b}/`, y = v[1].schema.id ?? `__schema${this.counter++}`;
      return {
        defId: y,
        ref: $ + y
      };
    }, u = (v) => {
      if (v[1].schema.$ref) return;
      const b = v[1], { ref: $, defId: y } = i(v);
      b.def = { ...b.schema }, y && (b.defId = y);
      const Z = b.schema;
      for (const q in Z) delete Z[q];
      Z.$ref = $;
    };
    if (l.cycles === "throw") for (const v of this.seen.entries()) {
      const b = v[1];
      if (b.cycle) throw new Error(`Cycle detected: #/${b.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
    for (const v of this.seen.entries()) {
      const b = v[1];
      if (n === v[0]) {
        u(v);
        continue;
      }
      if (l.external) {
        const $ = l.external.registry.get(v[0])?.id;
        if (n !== v[0] && $) {
          u(v);
          continue;
        }
      }
      if (this.metadataRegistry.get(v[0])?.id) {
        u(v);
        continue;
      }
      if (b.cycle) {
        u(v);
        continue;
      }
      if (b.count > 1 && l.reused === "ref") {
        u(v);
        continue;
      }
    }
    const d = (v, b) => {
      const $ = this.seen.get(v), y = $.def ?? $.schema, Z = { ...y };
      if ($.ref === null) return;
      const q = $.ref;
      if ($.ref = null, q) {
        d(q, b);
        const W = this.seen.get(q).schema;
        W.$ref && b.target === "draft-7" ? (y.allOf = y.allOf ?? [], y.allOf.push(W)) : (Object.assign(y, W), Object.assign(y, Z));
      }
      $.isParent || this.override({
        zodSchema: v,
        jsonSchema: y,
        path: $.path ?? []
      });
    };
    for (const v of [...this.seen.entries()].reverse()) d(v[0], { target: this.target });
    const h = {};
    if (this.target === "draft-2020-12" ? h.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? h.$schema = "http://json-schema.org/draft-07/schema#" : console.warn(`Invalid target: ${this.target}`), l.external?.uri) {
      const v = l.external.registry.get(n)?.id;
      if (!v) throw new Error("Schema is missing an `id` property");
      h.$id = l.external.uri(v);
    }
    Object.assign(h, s.def);
    const w = l.external?.defs ?? {};
    for (const v of this.seen.entries()) {
      const b = v[1];
      b.def && b.defId && (w[b.defId] = b.def);
    }
    l.external || Object.keys(w).length > 0 && (this.target === "draft-2020-12" ? h.$defs = w : h.definitions = w);
    try {
      return JSON.parse(JSON.stringify(h));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
};
function yd(n, r) {
  if (n instanceof Lf) {
    const s = new df(r), i = {};
    for (const h of n._idmap.entries()) {
      const [w, v] = h;
      s.process(v);
    }
    const u = {}, d = {
      registry: n,
      uri: r?.uri,
      defs: i
    };
    for (const h of n._idmap.entries()) {
      const [w, v] = h;
      u[w] = s.emit(v, {
        ...r,
        external: d
      });
    }
    return Object.keys(i).length > 0 && (u.__shared = { [s.target === "draft-2020-12" ? "$defs" : "definitions"]: i }), { schemas: u };
  }
  const l = new df(r);
  return l.process(n), l.emit(n, r);
}
function ot(n, r) {
  const l = r ?? { seen: /* @__PURE__ */ new Set() };
  if (l.seen.has(n)) return !1;
  l.seen.add(n);
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
      return ot(s.element, l);
    case "object":
      for (const i in s.shape) if (ot(s.shape[i], l)) return !0;
      return !1;
    case "union":
      for (const i of s.options) if (ot(i, l)) return !0;
      return !1;
    case "intersection":
      return ot(s.left, l) || ot(s.right, l);
    case "tuple":
      for (const i of s.items) if (ot(i, l)) return !0;
      return !!(s.rest && ot(s.rest, l));
    case "record":
      return ot(s.keyType, l) || ot(s.valueType, l);
    case "map":
      return ot(s.keyType, l) || ot(s.valueType, l);
    case "set":
      return ot(s.valueType, l);
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return ot(s.innerType, l);
    case "lazy":
      return ot(s.getter(), l);
    case "default":
      return ot(s.innerType, l);
    case "prefault":
      return ot(s.innerType, l);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return ot(s.in, l) || ot(s.out, l);
    case "success":
      return !1;
    case "catch":
      return !1;
    default:
  }
  throw new Error(`Unknown schema type: ${s.type}`);
}
var wT = /* @__PURE__ */ Cn({}), P_ = /* @__PURE__ */ Cn({
  $ZodAny: () => Lb,
  $ZodArray: () => Zf,
  $ZodAsyncError: () => ka,
  $ZodBase64: () => Ub,
  $ZodBase64URL: () => Ab,
  $ZodBigInt: () => Df,
  $ZodBigIntFormat: () => Rb,
  $ZodBoolean: () => jf,
  $ZodCIDRv4: () => Ob,
  $ZodCIDRv6: () => xb,
  $ZodCUID: () => gb,
  $ZodCUID2: () => yb,
  $ZodCatch: () => l_,
  $ZodCheck: () => Pe,
  $ZodCheckBigIntFormat: () => Vy,
  $ZodCheckEndsWith: () => rb,
  $ZodCheckGreaterThan: () => Uf,
  $ZodCheckIncludes: () => ib,
  $ZodCheckLengthEquals: () => Fy,
  $ZodCheckLessThan: () => xf,
  $ZodCheckLowerCase: () => tb,
  $ZodCheckMaxLength: () => Ky,
  $ZodCheckMaxSize: () => Jy,
  $ZodCheckMimeType: () => lb,
  $ZodCheckMinLength: () => Wy,
  $ZodCheckMinSize: () => Xy,
  $ZodCheckMultipleOf: () => Yy,
  $ZodCheckNumberFormat: () => Qy,
  $ZodCheckOverwrite: () => ub,
  $ZodCheckProperty: () => ob,
  $ZodCheckRegex: () => eb,
  $ZodCheckSizeEquals: () => Py,
  $ZodCheckStartsWith: () => ab,
  $ZodCheckStringFormat: () => Hr,
  $ZodCheckUpperCase: () => nb,
  $ZodCustom: () => m_,
  $ZodCustomStringFormat: () => Cb,
  $ZodDate: () => Yb,
  $ZodDefault: () => i_,
  $ZodDiscriminatedUnion: () => Vb,
  $ZodE164: () => jb,
  $ZodEmail: () => mb,
  $ZodEmoji: () => vb,
  $ZodEnum: () => Wb,
  $ZodError: () => bf,
  $ZodFile: () => e_,
  $ZodFunction: () => X_,
  $ZodGUID: () => fb,
  $ZodIPv4: () => kb,
  $ZodIPv6: () => Eb,
  $ZodISODate: () => zb,
  $ZodISODateTime: () => $b,
  $ZodISODuration: () => Tb,
  $ZodISOTime: () => wb,
  $ZodIntersection: () => Jb,
  $ZodJWT: () => Zb,
  $ZodKSUID: () => Sb,
  $ZodLazy: () => d_,
  $ZodLiteral: () => Fb,
  $ZodMap: () => Pb,
  $ZodNaN: () => u_,
  $ZodNanoID: () => hb,
  $ZodNever: () => Bb,
  $ZodNonOptional: () => r_,
  $ZodNull: () => Hb,
  $ZodNullable: () => n_,
  $ZodNumber: () => Af,
  $ZodNumberFormat: () => Mb,
  $ZodObject: () => Qb,
  $ZodOptional: () => t_,
  $ZodPipe: () => Rf,
  $ZodPrefault: () => a_,
  $ZodPromise: () => f_,
  $ZodReadonly: () => c_,
  $ZodRealError: () => qr,
  $ZodRecord: () => Xb,
  $ZodRegistry: () => Lf,
  $ZodSet: () => Kb,
  $ZodString: () => Lr,
  $ZodStringFormat: () => Ie,
  $ZodSuccess: () => o_,
  $ZodSymbol: () => Ib,
  $ZodTemplateLiteral: () => s_,
  $ZodTransform: () => Mf,
  $ZodTuple: () => Vl,
  $ZodType: () => ae,
  $ZodULID: () => bb,
  $ZodURL: () => pb,
  $ZodUUID: () => db,
  $ZodUndefined: () => qb,
  $ZodUnion: () => Cf,
  $ZodUnknown: () => Zl,
  $ZodVoid: () => Gb,
  $ZodXID: () => _b,
  $brand: () => hf,
  $constructor: () => k,
  $input: () => Hf,
  $output: () => qf,
  Doc: () => cb,
  JSONSchema: () => wT,
  JSONSchemaGenerator: () => df,
  NEVER: () => vf,
  TimePrecision: () => sd,
  _any: () => M_,
  _array: () => hd,
  _base64: () => od,
  _base64url: () => ld,
  _bigint: () => U_,
  _boolean: () => O_,
  _catch: () => yT,
  _cidrv4: () => ad,
  _cidrv6: () => rd,
  _coercedBigint: () => N_,
  _coercedBoolean: () => x_,
  _coercedDate: () => H_,
  _coercedNumber: () => $_,
  _coercedString: () => h_,
  _cuid: () => Kf,
  _cuid2: () => Wf,
  _custom: () => Y_,
  _date: () => q_,
  _default: () => vT,
  _discriminatedUnion: () => aT,
  _e164: () => ud,
  _email: () => Bf,
  _emoji: () => Xf,
  _endsWith: () => tu,
  _enum: () => cT,
  _file: () => G_,
  _float32: () => w_,
  _float64: () => T_,
  _gt: () => ci,
  _gte: () => Ut,
  _guid: () => Cl,
  _includes: () => Fl,
  _int: () => z_,
  _int32: () => k_,
  _int64: () => A_,
  _intersection: () => rT,
  _ipv4: () => nd,
  _ipv6: () => id,
  _isoDate: () => y_,
  _isoDateTime: () => g_,
  _isoDuration: () => __,
  _isoTime: () => b_,
  _jwt: () => cd,
  _ksuid: () => td,
  _lazy: () => $T,
  _length: () => Yr,
  _literal: () => fT,
  _lowercase: () => Kl,
  _lt: () => ui,
  _lte: () => tn,
  _map: () => lT,
  _max: () => tn,
  _maxLength: () => Gr,
  _maxSize: () => Br,
  _mime: () => nu,
  _min: () => Ut,
  _minLength: () => Di,
  _minSize: () => Ua,
  _multipleOf: () => xa,
  _nan: () => L_,
  _nanoid: () => Pf,
  _nativeEnum: () => sT,
  _negative: () => dd,
  _never: () => R_,
  _nonnegative: () => pd,
  _nonoptional: () => hT,
  _nonpositive: () => md,
  _normalize: () => iu,
  _null: () => C_,
  _nullable: () => pT,
  _number: () => S_,
  _optional: () => mT,
  _overwrite: () => si,
  _parse: () => $f,
  _parseAsync: () => zf,
  _pipe: () => bT,
  _positive: () => fd,
  _promise: () => zT,
  _property: () => vd,
  _readonly: () => _T,
  _record: () => oT,
  _refine: () => Q_,
  _regex: () => Pl,
  _safeParse: () => wf,
  _safeParseAsync: () => kf,
  _set: () => uT,
  _size: () => Xl,
  _startsWith: () => eu,
  _string: () => v_,
  _stringFormat: () => J_,
  _stringbool: () => V_,
  _success: () => gT,
  _symbol: () => D_,
  _templateLiteral: () => ST,
  _toLowerCase: () => ru,
  _toUpperCase: () => ou,
  _transform: () => dT,
  _trim: () => au,
  _tuple: () => B_,
  _uint32: () => E_,
  _uint64: () => j_,
  _ulid: () => Ff,
  _undefined: () => Z_,
  _union: () => iT,
  _unknown: () => Ml,
  _uppercase: () => Wl,
  _url: () => Jf,
  _uuid: () => Gf,
  _uuidv4: () => Yf,
  _uuidv6: () => Qf,
  _uuidv7: () => Vf,
  _void: () => I_,
  _xid: () => ed,
  clone: () => sn,
  config: () => ht,
  flattenError: () => Yl,
  formatError: () => Ql,
  function: () => gd,
  globalConfig: () => jl,
  globalRegistry: () => li,
  isValidBase64: () => Nf,
  isValidBase64URL: () => Nb,
  isValidJWT: () => Db,
  locales: () => If,
  parse: () => cf,
  parseAsync: () => sf,
  prettifyError: () => Sf,
  regexes: () => Ef,
  registry: () => Jl,
  safeParse: () => Tf,
  safeParseAsync: () => fy,
  toDotPath: () => sy,
  toJSONSchema: () => yd,
  treeifyError: () => _f,
  util: () => uz,
  version: () => sb
});
function bd(n) {
  return !!n._zod;
}
function K_(n, r) {
  return bd(n) ? Tf(n, r) : n.safeParse(r);
}
function TT(n) {
  if (!n) return;
  let r;
  if (bd(n) ? r = n._zod?.def?.shape : r = n.shape, !!r) {
    if (typeof r == "function") try {
      return r();
    } catch {
      return;
    }
    return r;
  }
}
function kT(n) {
  if (bd(n)) {
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
  const l = n.value;
  if (l !== void 0) return l;
}
var W_ = /* @__PURE__ */ Cn({
  ZodISODate: () => uu,
  ZodISODateTime: () => lu,
  ZodISODuration: () => su,
  ZodISOTime: () => cu,
  date: () => F_,
  datetime: () => _d,
  duration: () => tS,
  time: () => eS
}), lu = /* @__PURE__ */ k("ZodISODateTime", (n, r) => {
  $b.init(n, r), qe.init(n, r);
});
function _d(n) {
  return g_(lu, n);
}
var uu = /* @__PURE__ */ k("ZodISODate", (n, r) => {
  zb.init(n, r), qe.init(n, r);
});
function F_(n) {
  return y_(uu, n);
}
var cu = /* @__PURE__ */ k("ZodISOTime", (n, r) => {
  wb.init(n, r), qe.init(n, r);
});
function eS(n) {
  return b_(cu, n);
}
var su = /* @__PURE__ */ k("ZodISODuration", (n, r) => {
  Tb.init(n, r), qe.init(n, r);
});
function tS(n) {
  return __(su, n);
}
var nS = (n, r) => {
  bf.init(n, r), n.name = "ZodError", Object.defineProperties(n, {
    format: { value: (l) => Ql(n, l) },
    flatten: { value: (l) => Yl(n, l) },
    addIssue: { value: (l) => n.issues.push(l) },
    addIssues: { value: (l) => n.issues.push(...l) },
    isEmpty: { get() {
      return n.issues.length === 0;
    } }
  });
}, iS = k("ZodError", nS), Da = k("ZodError", nS, { Parent: Error }), Sd = /* @__PURE__ */ $f(Da), $d = /* @__PURE__ */ zf(Da), zd = /* @__PURE__ */ wf(Da), wd = /* @__PURE__ */ kf(Da), de = /* @__PURE__ */ k("ZodType", (n, r) => (ae.init(n, r), n.def = r, Object.defineProperty(n, "_def", { value: r }), n.check = (...l) => n.clone({
  ...r,
  checks: [...r.checks ?? [], ...l.map((s) => typeof s == "function" ? { _zod: {
    check: s,
    def: { check: "custom" },
    onattach: []
  } } : s)]
}), n.clone = (l, s) => sn(n, l, s), n.brand = () => n, n.register = ((l, s) => (l.add(n, s), n)), n.parse = (l, s) => Sd(n, l, s, { callee: n.parse }), n.safeParse = (l, s) => zd(n, l, s), n.parseAsync = async (l, s) => $d(n, l, s, { callee: n.parseAsync }), n.safeParseAsync = async (l, s) => wd(n, l, s), n.spa = n.safeParseAsync, n.refine = (l, s) => n.check(rm(l, s)), n.superRefine = (l) => n.check(om(l)), n.overwrite = (l) => n.check(si(l)), n.optional = () => Re(n), n.nullable = () => Mr(n), n.nullish = () => Re(Mr(n)), n.nonoptional = (l) => Qd(n, l), n.array = () => ie(n), n.or = (l) => me([n, l]), n.and = (l) => Kr(n, l), n.transform = (l) => Rr(n, Cu(l)), n.default = (l) => Bd(n, l), n.prefault = (l) => Yd(n, l), n.catch = (l) => Xd(n, l), n.pipe = (l) => Rr(n, l), n.readonly = () => Wd(n), n.describe = (l) => {
  const s = n.clone();
  return li.add(s, { description: l }), s;
}, Object.defineProperty(n, "description", {
  get() {
    return li.get(n)?.description;
  },
  configurable: !0
}), n.meta = (...l) => {
  if (l.length === 0) return li.get(n);
  const s = n.clone();
  return li.add(s, l[0]), s;
}, n.isOptional = () => n.safeParse(void 0).success, n.isNullable = () => n.safeParse(null).success, n)), fu = /* @__PURE__ */ k("_ZodString", (n, r) => {
  Lr.init(n, r), de.init(n, r);
  const l = n._zod.bag;
  n.format = l.format ?? null, n.minLength = l.minimum ?? null, n.maxLength = l.maximum ?? null, n.regex = (...s) => n.check(Pl(...s)), n.includes = (...s) => n.check(Fl(...s)), n.startsWith = (...s) => n.check(eu(...s)), n.endsWith = (...s) => n.check(tu(...s)), n.min = (...s) => n.check(Di(...s)), n.max = (...s) => n.check(Gr(...s)), n.length = (...s) => n.check(Yr(...s)), n.nonempty = (...s) => n.check(Di(1, ...s)), n.lowercase = (s) => n.check(Kl(s)), n.uppercase = (s) => n.check(Wl(s)), n.trim = () => n.check(au()), n.normalize = (...s) => n.check(iu(...s)), n.toLowerCase = () => n.check(ru()), n.toUpperCase = () => n.check(ou());
}), Qr = /* @__PURE__ */ k("ZodString", (n, r) => {
  Lr.init(n, r), fu.init(n, r), n.email = (l) => n.check(Bf(du, l)), n.url = (l) => n.check(Jf(mu, l)), n.jwt = (l) => n.check(cd(Ou, l)), n.emoji = (l) => n.check(Xf(pu, l)), n.guid = (l) => n.check(Cl(Zr, l)), n.uuid = (l) => n.check(Gf(vn, l)), n.uuidv4 = (l) => n.check(Yf(vn, l)), n.uuidv6 = (l) => n.check(Qf(vn, l)), n.uuidv7 = (l) => n.check(Vf(vn, l)), n.nanoid = (l) => n.check(Pf(vu, l)), n.guid = (l) => n.check(Cl(Zr, l)), n.cuid = (l) => n.check(Kf(hu, l)), n.cuid2 = (l) => n.check(Wf(gu, l)), n.ulid = (l) => n.check(Ff(yu, l)), n.base64 = (l) => n.check(od(Tu, l)), n.base64url = (l) => n.check(ld(ku, l)), n.xid = (l) => n.check(ed(bu, l)), n.ksuid = (l) => n.check(td(_u, l)), n.ipv4 = (l) => n.check(nd(Su, l)), n.ipv6 = (l) => n.check(id($u, l)), n.cidrv4 = (l) => n.check(ad(zu, l)), n.cidrv6 = (l) => n.check(rd(wu, l)), n.e164 = (l) => n.check(ud(Eu, l)), n.datetime = (l) => n.check(_d(l)), n.date = (l) => n.check(F_(l)), n.time = (l) => n.check(eS(l)), n.duration = (l) => n.check(tS(l));
});
function E(n) {
  return v_(Qr, n);
}
var qe = /* @__PURE__ */ k("ZodStringFormat", (n, r) => {
  Ie.init(n, r), fu.init(n, r);
}), du = /* @__PURE__ */ k("ZodEmail", (n, r) => {
  mb.init(n, r), qe.init(n, r);
});
function aS(n) {
  return Bf(du, n);
}
var Zr = /* @__PURE__ */ k("ZodGUID", (n, r) => {
  fb.init(n, r), qe.init(n, r);
});
function rS(n) {
  return Cl(Zr, n);
}
var vn = /* @__PURE__ */ k("ZodUUID", (n, r) => {
  db.init(n, r), qe.init(n, r);
});
function oS(n) {
  return Gf(vn, n);
}
function lS(n) {
  return Yf(vn, n);
}
function uS(n) {
  return Qf(vn, n);
}
function cS(n) {
  return Vf(vn, n);
}
var mu = /* @__PURE__ */ k("ZodURL", (n, r) => {
  pb.init(n, r), qe.init(n, r);
});
function sS(n) {
  return Jf(mu, n);
}
var pu = /* @__PURE__ */ k("ZodEmoji", (n, r) => {
  vb.init(n, r), qe.init(n, r);
});
function fS(n) {
  return Xf(pu, n);
}
var vu = /* @__PURE__ */ k("ZodNanoID", (n, r) => {
  hb.init(n, r), qe.init(n, r);
});
function dS(n) {
  return Pf(vu, n);
}
var hu = /* @__PURE__ */ k("ZodCUID", (n, r) => {
  gb.init(n, r), qe.init(n, r);
});
function mS(n) {
  return Kf(hu, n);
}
var gu = /* @__PURE__ */ k("ZodCUID2", (n, r) => {
  yb.init(n, r), qe.init(n, r);
});
function pS(n) {
  return Wf(gu, n);
}
var yu = /* @__PURE__ */ k("ZodULID", (n, r) => {
  bb.init(n, r), qe.init(n, r);
});
function vS(n) {
  return Ff(yu, n);
}
var bu = /* @__PURE__ */ k("ZodXID", (n, r) => {
  _b.init(n, r), qe.init(n, r);
});
function hS(n) {
  return ed(bu, n);
}
var _u = /* @__PURE__ */ k("ZodKSUID", (n, r) => {
  Sb.init(n, r), qe.init(n, r);
});
function gS(n) {
  return td(_u, n);
}
var Su = /* @__PURE__ */ k("ZodIPv4", (n, r) => {
  kb.init(n, r), qe.init(n, r);
});
function yS(n) {
  return nd(Su, n);
}
var $u = /* @__PURE__ */ k("ZodIPv6", (n, r) => {
  Eb.init(n, r), qe.init(n, r);
});
function bS(n) {
  return id($u, n);
}
var zu = /* @__PURE__ */ k("ZodCIDRv4", (n, r) => {
  Ob.init(n, r), qe.init(n, r);
});
function _S(n) {
  return ad(zu, n);
}
var wu = /* @__PURE__ */ k("ZodCIDRv6", (n, r) => {
  xb.init(n, r), qe.init(n, r);
});
function SS(n) {
  return rd(wu, n);
}
var Tu = /* @__PURE__ */ k("ZodBase64", (n, r) => {
  Ub.init(n, r), qe.init(n, r);
});
function $S(n) {
  return od(Tu, n);
}
var ku = /* @__PURE__ */ k("ZodBase64URL", (n, r) => {
  Ab.init(n, r), qe.init(n, r);
});
function zS(n) {
  return ld(ku, n);
}
var Eu = /* @__PURE__ */ k("ZodE164", (n, r) => {
  jb.init(n, r), qe.init(n, r);
});
function wS(n) {
  return ud(Eu, n);
}
var Ou = /* @__PURE__ */ k("ZodJWT", (n, r) => {
  Zb.init(n, r), qe.init(n, r);
});
function TS(n) {
  return cd(Ou, n);
}
var Td = /* @__PURE__ */ k("ZodCustomStringFormat", (n, r) => {
  Cb.init(n, r), qe.init(n, r);
});
function kS(n, r, l = {}) {
  return J_(Td, n, r, l);
}
var Vr = /* @__PURE__ */ k("ZodNumber", (n, r) => {
  Af.init(n, r), de.init(n, r), n.gt = (s, i) => n.check(ci(s, i)), n.gte = (s, i) => n.check(Ut(s, i)), n.min = (s, i) => n.check(Ut(s, i)), n.lt = (s, i) => n.check(ui(s, i)), n.lte = (s, i) => n.check(tn(s, i)), n.max = (s, i) => n.check(tn(s, i)), n.int = (s) => n.check(Rl(s)), n.safe = (s) => n.check(Rl(s)), n.positive = (s) => n.check(ci(0, s)), n.nonnegative = (s) => n.check(Ut(0, s)), n.negative = (s) => n.check(ui(0, s)), n.nonpositive = (s) => n.check(tn(0, s)), n.multipleOf = (s, i) => n.check(xa(s, i)), n.step = (s, i) => n.check(xa(s, i)), n.finite = () => n;
  const l = n._zod.bag;
  n.minValue = Math.max(l.minimum ?? Number.NEGATIVE_INFINITY, l.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(l.maximum ?? Number.POSITIVE_INFINITY, l.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (l.format ?? "").includes("int") || Number.isSafeInteger(l.multipleOf ?? 0.5), n.isFinite = !0, n.format = l.format ?? null;
});
function oe(n) {
  return S_(Vr, n);
}
var Ri = /* @__PURE__ */ k("ZodNumberFormat", (n, r) => {
  Mb.init(n, r), Vr.init(n, r);
});
function Rl(n) {
  return z_(Ri, n);
}
function ES(n) {
  return w_(Ri, n);
}
function OS(n) {
  return T_(Ri, n);
}
function xS(n) {
  return k_(Ri, n);
}
function US(n) {
  return E_(Ri, n);
}
var Jr = /* @__PURE__ */ k("ZodBoolean", (n, r) => {
  jf.init(n, r), de.init(n, r);
});
function Ae(n) {
  return O_(Jr, n);
}
var Xr = /* @__PURE__ */ k("ZodBigInt", (n, r) => {
  Df.init(n, r), de.init(n, r), n.gte = (s, i) => n.check(Ut(s, i)), n.min = (s, i) => n.check(Ut(s, i)), n.gt = (s, i) => n.check(ci(s, i)), n.gte = (s, i) => n.check(Ut(s, i)), n.min = (s, i) => n.check(Ut(s, i)), n.lt = (s, i) => n.check(ui(s, i)), n.lte = (s, i) => n.check(tn(s, i)), n.max = (s, i) => n.check(tn(s, i)), n.positive = (s) => n.check(ci(BigInt(0), s)), n.negative = (s) => n.check(ui(BigInt(0), s)), n.nonpositive = (s) => n.check(tn(BigInt(0), s)), n.nonnegative = (s) => n.check(Ut(BigInt(0), s)), n.multipleOf = (s, i) => n.check(xa(s, i));
  const l = n._zod.bag;
  n.minValue = l.minimum ?? null, n.maxValue = l.maximum ?? null, n.format = l.format ?? null;
});
function NS(n) {
  return U_(Xr, n);
}
var xu = /* @__PURE__ */ k("ZodBigIntFormat", (n, r) => {
  Rb.init(n, r), Xr.init(n, r);
});
function AS(n) {
  return A_(xu, n);
}
function jS(n) {
  return j_(xu, n);
}
var kd = /* @__PURE__ */ k("ZodSymbol", (n, r) => {
  Ib.init(n, r), de.init(n, r);
});
function DS(n) {
  return D_(kd, n);
}
var Ed = /* @__PURE__ */ k("ZodUndefined", (n, r) => {
  qb.init(n, r), de.init(n, r);
});
function Cr(n) {
  return Z_(Ed, n);
}
var Od = /* @__PURE__ */ k("ZodNull", (n, r) => {
  Hb.init(n, r), de.init(n, r);
});
function Uu(n) {
  return C_(Od, n);
}
var xd = /* @__PURE__ */ k("ZodAny", (n, r) => {
  Lb.init(n, r), de.init(n, r);
});
function ZS() {
  return M_(xd);
}
var Ud = /* @__PURE__ */ k("ZodUnknown", (n, r) => {
  Zl.init(n, r), de.init(n, r);
});
function je() {
  return Ml(Ud);
}
var Nd = /* @__PURE__ */ k("ZodNever", (n, r) => {
  Bb.init(n, r), de.init(n, r);
});
function Zi(n) {
  return R_(Nd, n);
}
var Ad = /* @__PURE__ */ k("ZodVoid", (n, r) => {
  Gb.init(n, r), de.init(n, r);
});
function CS(n) {
  return I_(Ad, n);
}
var Nu = /* @__PURE__ */ k("ZodDate", (n, r) => {
  Yb.init(n, r), de.init(n, r), n.min = (s, i) => n.check(Ut(s, i)), n.max = (s, i) => n.check(tn(s, i));
  const l = n._zod.bag;
  n.minDate = l.minimum ? new Date(l.minimum) : null, n.maxDate = l.maximum ? new Date(l.maximum) : null;
});
function MS(n) {
  return q_(Nu, n);
}
var jd = /* @__PURE__ */ k("ZodArray", (n, r) => {
  Zf.init(n, r), de.init(n, r), n.element = r.element, n.min = (l, s) => n.check(Di(l, s)), n.nonempty = (l) => n.check(Di(1, l)), n.max = (l, s) => n.check(Gr(l, s)), n.length = (l, s) => n.check(Yr(l, s)), n.unwrap = () => n.element;
});
function ie(n, r) {
  return hd(jd, n, r);
}
function RS(n) {
  const r = n._zod.def.shape;
  return T(Object.keys(r));
}
var Pr = /* @__PURE__ */ k("ZodObject", (n, r) => {
  Qb.init(n, r), de.init(n, r), Ee(n, "shape", () => r.shape), n.keyof = () => $t(Object.keys(n._zod.def.shape)), n.catchall = (l) => n.clone({
    ...n._zod.def,
    catchall: l
  }), n.passthrough = () => n.clone({
    ...n._zod.def,
    catchall: je()
  }), n.loose = () => n.clone({
    ...n._zod.def,
    catchall: je()
  }), n.strict = () => n.clone({
    ...n._zod.def,
    catchall: Zi()
  }), n.strip = () => n.clone({
    ...n._zod.def,
    catchall: void 0
  }), n.extend = (l) => ry(n, l), n.merge = (l) => oy(n, l), n.pick = (l) => iy(n, l), n.omit = (l) => ay(n, l), n.partial = (...l) => ly(Mu, n, l[0]), n.required = (...l) => uy(Ru, n, l[0]);
});
function N(n, r) {
  return new Pr({
    type: "object",
    get shape() {
      return ja(this, "shape", { ...n }), this.shape;
    },
    ...R(r)
  });
}
function IS(n, r) {
  return new Pr({
    type: "object",
    get shape() {
      return ja(this, "shape", { ...n }), this.shape;
    },
    catchall: Zi(),
    ...R(r)
  });
}
function bt(n, r) {
  return new Pr({
    type: "object",
    get shape() {
      return ja(this, "shape", { ...n }), this.shape;
    },
    catchall: je(),
    ...R(r)
  });
}
var Au = /* @__PURE__ */ k("ZodUnion", (n, r) => {
  Cf.init(n, r), de.init(n, r), n.options = r.options;
});
function me(n, r) {
  return new Au({
    type: "union",
    options: n,
    ...R(r)
  });
}
var Dd = /* @__PURE__ */ k("ZodDiscriminatedUnion", (n, r) => {
  Au.init(n, r), Vb.init(n, r);
});
function ju(n, r, l) {
  return new Dd({
    type: "union",
    options: r,
    discriminator: n,
    ...R(l)
  });
}
var Zd = /* @__PURE__ */ k("ZodIntersection", (n, r) => {
  Jb.init(n, r), de.init(n, r);
});
function Kr(n, r) {
  return new Zd({
    type: "intersection",
    left: n,
    right: r
  });
}
var Cd = /* @__PURE__ */ k("ZodTuple", (n, r) => {
  Vl.init(n, r), de.init(n, r), n.rest = (l) => n.clone({
    ...n._zod.def,
    rest: l
  });
});
function qS(n, r, l) {
  const s = r instanceof ae, i = s ? l : r;
  return new Cd({
    type: "tuple",
    items: n,
    rest: s ? r : null,
    ...R(i)
  });
}
var Du = /* @__PURE__ */ k("ZodRecord", (n, r) => {
  Xb.init(n, r), de.init(n, r), n.keyType = r.keyType, n.valueType = r.valueType;
});
function Se(n, r, l) {
  return new Du({
    type: "record",
    keyType: n,
    valueType: r,
    ...R(l)
  });
}
function HS(n, r, l) {
  return new Du({
    type: "record",
    keyType: me([n, Zi()]),
    valueType: r,
    ...R(l)
  });
}
var Md = /* @__PURE__ */ k("ZodMap", (n, r) => {
  Pb.init(n, r), de.init(n, r), n.keyType = r.keyType, n.valueType = r.valueType;
});
function LS(n, r, l) {
  return new Md({
    type: "map",
    keyType: n,
    valueType: r,
    ...R(l)
  });
}
var Rd = /* @__PURE__ */ k("ZodSet", (n, r) => {
  Kb.init(n, r), de.init(n, r), n.min = (...l) => n.check(Ua(...l)), n.nonempty = (l) => n.check(Ua(1, l)), n.max = (...l) => n.check(Br(...l)), n.size = (...l) => n.check(Xl(...l));
});
function BS(n, r) {
  return new Rd({
    type: "set",
    valueType: n,
    ...R(r)
  });
}
var Na = /* @__PURE__ */ k("ZodEnum", (n, r) => {
  Wb.init(n, r), de.init(n, r), n.enum = r.entries, n.options = Object.values(r.entries);
  const l = new Set(Object.keys(r.entries));
  n.extract = (s, i) => {
    const u = {};
    for (const d of s) if (l.has(d)) u[d] = r.entries[d];
    else throw new Error(`Key ${d} not found in enum`);
    return new Na({
      ...r,
      checks: [],
      ...R(i),
      entries: u
    });
  }, n.exclude = (s, i) => {
    const u = { ...r.entries };
    for (const d of s) if (l.has(d)) delete u[d];
    else throw new Error(`Key ${d} not found in enum`);
    return new Na({
      ...r,
      checks: [],
      ...R(i),
      entries: u
    });
  };
});
function $t(n, r) {
  return new Na({
    type: "enum",
    entries: Array.isArray(n) ? Object.fromEntries(n.map((l) => [l, l])) : n,
    ...R(r)
  });
}
function GS(n, r) {
  return new Na({
    type: "enum",
    entries: n,
    ...R(r)
  });
}
var Id = /* @__PURE__ */ k("ZodLiteral", (n, r) => {
  Fb.init(n, r), de.init(n, r), n.values = new Set(r.values), Object.defineProperty(n, "value", { get() {
    if (r.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
    return r.values[0];
  } });
});
function T(n, r) {
  return new Id({
    type: "literal",
    values: Array.isArray(n) ? n : [n],
    ...R(r)
  });
}
var qd = /* @__PURE__ */ k("ZodFile", (n, r) => {
  e_.init(n, r), de.init(n, r), n.min = (l, s) => n.check(Ua(l, s)), n.max = (l, s) => n.check(Br(l, s)), n.mime = (l, s) => n.check(nu(Array.isArray(l) ? l : [l], s));
});
function YS(n) {
  return G_(qd, n);
}
var Zu = /* @__PURE__ */ k("ZodTransform", (n, r) => {
  Mf.init(n, r), de.init(n, r), n._zod.parse = (l, s) => {
    l.addIssue = (u) => {
      if (typeof u == "string") l.issues.push(Ea(u, l.value, r));
      else {
        const d = u;
        d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = l.value), d.inst ?? (d.inst = n), d.continue ?? (d.continue = !0), l.issues.push(Ea(d));
      }
    };
    const i = r.transform(l.value, l);
    return i instanceof Promise ? i.then((u) => (l.value = u, l)) : (l.value = i, l);
  };
});
function Cu(n) {
  return new Zu({
    type: "transform",
    transform: n
  });
}
var Mu = /* @__PURE__ */ k("ZodOptional", (n, r) => {
  t_.init(n, r), de.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Re(n) {
  return new Mu({
    type: "optional",
    innerType: n
  });
}
var Hd = /* @__PURE__ */ k("ZodNullable", (n, r) => {
  n_.init(n, r), de.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Mr(n) {
  return new Hd({
    type: "nullable",
    innerType: n
  });
}
function QS(n) {
  return Re(Mr(n));
}
var Ld = /* @__PURE__ */ k("ZodDefault", (n, r) => {
  i_.init(n, r), de.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function Bd(n, r) {
  return new Ld({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : r;
    }
  });
}
var Gd = /* @__PURE__ */ k("ZodPrefault", (n, r) => {
  a_.init(n, r), de.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Yd(n, r) {
  return new Gd({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof r == "function" ? r() : r;
    }
  });
}
var Ru = /* @__PURE__ */ k("ZodNonOptional", (n, r) => {
  r_.init(n, r), de.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function Qd(n, r) {
  return new Ru({
    type: "nonoptional",
    innerType: n,
    ...R(r)
  });
}
var Vd = /* @__PURE__ */ k("ZodSuccess", (n, r) => {
  o_.init(n, r), de.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function VS(n) {
  return new Vd({
    type: "success",
    innerType: n
  });
}
var Jd = /* @__PURE__ */ k("ZodCatch", (n, r) => {
  l_.init(n, r), de.init(n, r), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function Xd(n, r) {
  return new Jd({
    type: "catch",
    innerType: n,
    catchValue: typeof r == "function" ? r : () => r
  });
}
var Pd = /* @__PURE__ */ k("ZodNaN", (n, r) => {
  u_.init(n, r), de.init(n, r);
});
function JS(n) {
  return L_(Pd, n);
}
var Iu = /* @__PURE__ */ k("ZodPipe", (n, r) => {
  Rf.init(n, r), de.init(n, r), n.in = r.in, n.out = r.out;
});
function Rr(n, r) {
  return new Iu({
    type: "pipe",
    in: n,
    out: r
  });
}
var Kd = /* @__PURE__ */ k("ZodReadonly", (n, r) => {
  c_.init(n, r), de.init(n, r);
});
function Wd(n) {
  return new Kd({
    type: "readonly",
    innerType: n
  });
}
var Fd = /* @__PURE__ */ k("ZodTemplateLiteral", (n, r) => {
  s_.init(n, r), de.init(n, r);
});
function XS(n, r) {
  return new Fd({
    type: "template_literal",
    parts: n,
    ...R(r)
  });
}
var em = /* @__PURE__ */ k("ZodLazy", (n, r) => {
  d_.init(n, r), de.init(n, r), n.unwrap = () => n._zod.def.getter();
});
function tm(n) {
  return new em({
    type: "lazy",
    getter: n
  });
}
var nm = /* @__PURE__ */ k("ZodPromise", (n, r) => {
  f_.init(n, r), de.init(n, r), n.unwrap = () => n._zod.def.innerType;
});
function PS(n) {
  return new nm({
    type: "promise",
    innerType: n
  });
}
var Wr = /* @__PURE__ */ k("ZodCustom", (n, r) => {
  m_.init(n, r), de.init(n, r);
});
function im(n) {
  const r = new Pe({ check: "custom" });
  return r._zod.check = n, r;
}
function am(n, r) {
  return Y_(Wr, n ?? (() => !0), r);
}
function rm(n, r = {}) {
  return Q_(Wr, n, r);
}
function om(n) {
  const r = im((l) => (l.addIssue = (s) => {
    if (typeof s == "string") l.issues.push(Ea(s, l.value, r._zod.def));
    else {
      const i = s;
      i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = l.value), i.inst ?? (i.inst = r), i.continue ?? (i.continue = !r._zod.def.abort), l.issues.push(Ea(i));
    }
  }, n(l.value, l)));
  return r;
}
function KS(n, r = { error: `Input not instance of ${n.name}` }) {
  const l = new Wr({
    type: "custom",
    check: "custom",
    fn: (s) => s instanceof n,
    abort: !0,
    ...R(r)
  });
  return l._zod.bag.Class = n, l;
}
var WS = (...n) => V_({
  Pipe: Iu,
  Boolean: Jr,
  String: Qr,
  Transform: Zu
}, ...n);
function FS(n) {
  const r = tm(() => me([
    E(n),
    oe(),
    Ae(),
    Uu(),
    ie(r),
    Se(E(), r)
  ]));
  return r;
}
function qu(n, r) {
  return Rr(Cu(n), r);
}
var e0 = {
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
function t0(n) {
  ht({ customError: n });
}
function n0() {
  return ht().customError;
}
var i0 = /* @__PURE__ */ Cn({
  bigint: () => UT,
  boolean: () => xT,
  date: () => NT,
  number: () => OT,
  string: () => ET
});
function ET(n) {
  return h_(Qr, n);
}
function OT(n) {
  return $_(Vr, n);
}
function xT(n) {
  return x_(Jr, n);
}
function UT(n) {
  return N_(Xr, n);
}
function NT(n) {
  return H_(Nu, n);
}
var AT = /* @__PURE__ */ Cn({
  $brand: () => hf,
  $input: () => Hf,
  $output: () => qf,
  NEVER: () => vf,
  TimePrecision: () => sd,
  ZodAny: () => xd,
  ZodArray: () => jd,
  ZodBase64: () => Tu,
  ZodBase64URL: () => ku,
  ZodBigInt: () => Xr,
  ZodBigIntFormat: () => xu,
  ZodBoolean: () => Jr,
  ZodCIDRv4: () => zu,
  ZodCIDRv6: () => wu,
  ZodCUID: () => hu,
  ZodCUID2: () => gu,
  ZodCatch: () => Jd,
  ZodCustom: () => Wr,
  ZodCustomStringFormat: () => Td,
  ZodDate: () => Nu,
  ZodDefault: () => Ld,
  ZodDiscriminatedUnion: () => Dd,
  ZodE164: () => Eu,
  ZodEmail: () => du,
  ZodEmoji: () => pu,
  ZodEnum: () => Na,
  ZodError: () => iS,
  ZodFile: () => qd,
  ZodGUID: () => Zr,
  ZodIPv4: () => Su,
  ZodIPv6: () => $u,
  ZodISODate: () => uu,
  ZodISODateTime: () => lu,
  ZodISODuration: () => su,
  ZodISOTime: () => cu,
  ZodIntersection: () => Zd,
  ZodIssueCode: () => e0,
  ZodJWT: () => Ou,
  ZodKSUID: () => _u,
  ZodLazy: () => em,
  ZodLiteral: () => Id,
  ZodMap: () => Md,
  ZodNaN: () => Pd,
  ZodNanoID: () => vu,
  ZodNever: () => Nd,
  ZodNonOptional: () => Ru,
  ZodNull: () => Od,
  ZodNullable: () => Hd,
  ZodNumber: () => Vr,
  ZodNumberFormat: () => Ri,
  ZodObject: () => Pr,
  ZodOptional: () => Mu,
  ZodPipe: () => Iu,
  ZodPrefault: () => Gd,
  ZodPromise: () => nm,
  ZodReadonly: () => Kd,
  ZodRealError: () => Da,
  ZodRecord: () => Du,
  ZodSet: () => Rd,
  ZodString: () => Qr,
  ZodStringFormat: () => qe,
  ZodSuccess: () => Vd,
  ZodSymbol: () => kd,
  ZodTemplateLiteral: () => Fd,
  ZodTransform: () => Zu,
  ZodTuple: () => Cd,
  ZodType: () => de,
  ZodULID: () => yu,
  ZodURL: () => mu,
  ZodUUID: () => vn,
  ZodUndefined: () => Ed,
  ZodUnion: () => Au,
  ZodUnknown: () => Ud,
  ZodVoid: () => Ad,
  ZodXID: () => bu,
  _ZodString: () => fu,
  _default: () => Bd,
  any: () => ZS,
  array: () => ie,
  base64: () => $S,
  base64url: () => zS,
  bigint: () => NS,
  boolean: () => Ae,
  catch: () => Xd,
  check: () => im,
  cidrv4: () => _S,
  cidrv6: () => SS,
  clone: () => sn,
  coerce: () => i0,
  config: () => ht,
  core: () => P_,
  cuid: () => mS,
  cuid2: () => pS,
  custom: () => am,
  date: () => MS,
  discriminatedUnion: () => ju,
  e164: () => wS,
  email: () => aS,
  emoji: () => fS,
  endsWith: () => tu,
  enum: () => $t,
  file: () => YS,
  flattenError: () => Yl,
  float32: () => ES,
  float64: () => OS,
  formatError: () => Ql,
  function: () => gd,
  getErrorMap: () => n0,
  globalRegistry: () => li,
  gt: () => ci,
  gte: () => Ut,
  guid: () => rS,
  includes: () => Fl,
  instanceof: () => KS,
  int: () => Rl,
  int32: () => xS,
  int64: () => AS,
  intersection: () => Kr,
  ipv4: () => yS,
  ipv6: () => bS,
  iso: () => W_,
  json: () => FS,
  jwt: () => TS,
  keyof: () => RS,
  ksuid: () => gS,
  lazy: () => tm,
  length: () => Yr,
  literal: () => T,
  locales: () => If,
  looseObject: () => bt,
  lowercase: () => Kl,
  lt: () => ui,
  lte: () => tn,
  map: () => LS,
  maxLength: () => Gr,
  maxSize: () => Br,
  mime: () => nu,
  minLength: () => Di,
  minSize: () => Ua,
  multipleOf: () => xa,
  nan: () => JS,
  nanoid: () => dS,
  nativeEnum: () => GS,
  negative: () => dd,
  never: () => Zi,
  nonnegative: () => pd,
  nonoptional: () => Qd,
  nonpositive: () => md,
  normalize: () => iu,
  null: () => Uu,
  nullable: () => Mr,
  nullish: () => QS,
  number: () => oe,
  object: () => N,
  optional: () => Re,
  overwrite: () => si,
  parse: () => Sd,
  parseAsync: () => $d,
  partialRecord: () => HS,
  pipe: () => Rr,
  positive: () => fd,
  prefault: () => Yd,
  preprocess: () => qu,
  prettifyError: () => Sf,
  promise: () => PS,
  property: () => vd,
  readonly: () => Wd,
  record: () => Se,
  refine: () => rm,
  regex: () => Pl,
  regexes: () => Ef,
  registry: () => Jl,
  safeParse: () => zd,
  safeParseAsync: () => wd,
  set: () => BS,
  setErrorMap: () => t0,
  size: () => Xl,
  startsWith: () => eu,
  strictObject: () => IS,
  string: () => E,
  stringFormat: () => kS,
  stringbool: () => WS,
  success: () => VS,
  superRefine: () => om,
  symbol: () => DS,
  templateLiteral: () => XS,
  toJSONSchema: () => yd,
  toLowerCase: () => ru,
  toUpperCase: () => ou,
  transform: () => Cu,
  treeifyError: () => _f,
  trim: () => au,
  tuple: () => qS,
  uint32: () => US,
  uint64: () => jS,
  ulid: () => vS,
  undefined: () => Cr,
  union: () => me,
  unknown: () => je,
  uppercase: () => Wl,
  url: () => sS,
  uuid: () => oS,
  uuidv4: () => lS,
  uuidv6: () => uS,
  uuidv7: () => cS,
  void: () => CS,
  xid: () => hS
});
ht(p_());
var jT = /* @__PURE__ */ Cn({
  $brand: () => hf,
  $input: () => Hf,
  $output: () => qf,
  NEVER: () => vf,
  TimePrecision: () => sd,
  ZodAny: () => xd,
  ZodArray: () => jd,
  ZodBase64: () => Tu,
  ZodBase64URL: () => ku,
  ZodBigInt: () => Xr,
  ZodBigIntFormat: () => xu,
  ZodBoolean: () => Jr,
  ZodCIDRv4: () => zu,
  ZodCIDRv6: () => wu,
  ZodCUID: () => hu,
  ZodCUID2: () => gu,
  ZodCatch: () => Jd,
  ZodCustom: () => Wr,
  ZodCustomStringFormat: () => Td,
  ZodDate: () => Nu,
  ZodDefault: () => Ld,
  ZodDiscriminatedUnion: () => Dd,
  ZodE164: () => Eu,
  ZodEmail: () => du,
  ZodEmoji: () => pu,
  ZodEnum: () => Na,
  ZodError: () => iS,
  ZodFile: () => qd,
  ZodGUID: () => Zr,
  ZodIPv4: () => Su,
  ZodIPv6: () => $u,
  ZodISODate: () => uu,
  ZodISODateTime: () => lu,
  ZodISODuration: () => su,
  ZodISOTime: () => cu,
  ZodIntersection: () => Zd,
  ZodIssueCode: () => e0,
  ZodJWT: () => Ou,
  ZodKSUID: () => _u,
  ZodLazy: () => em,
  ZodLiteral: () => Id,
  ZodMap: () => Md,
  ZodNaN: () => Pd,
  ZodNanoID: () => vu,
  ZodNever: () => Nd,
  ZodNonOptional: () => Ru,
  ZodNull: () => Od,
  ZodNullable: () => Hd,
  ZodNumber: () => Vr,
  ZodNumberFormat: () => Ri,
  ZodObject: () => Pr,
  ZodOptional: () => Mu,
  ZodPipe: () => Iu,
  ZodPrefault: () => Gd,
  ZodPromise: () => nm,
  ZodReadonly: () => Kd,
  ZodRealError: () => Da,
  ZodRecord: () => Du,
  ZodSet: () => Rd,
  ZodString: () => Qr,
  ZodStringFormat: () => qe,
  ZodSuccess: () => Vd,
  ZodSymbol: () => kd,
  ZodTemplateLiteral: () => Fd,
  ZodTransform: () => Zu,
  ZodTuple: () => Cd,
  ZodType: () => de,
  ZodULID: () => yu,
  ZodURL: () => mu,
  ZodUUID: () => vn,
  ZodUndefined: () => Ed,
  ZodUnion: () => Au,
  ZodUnknown: () => Ud,
  ZodVoid: () => Ad,
  ZodXID: () => bu,
  _ZodString: () => fu,
  _default: () => Bd,
  any: () => ZS,
  array: () => ie,
  base64: () => $S,
  base64url: () => zS,
  bigint: () => NS,
  boolean: () => Ae,
  catch: () => Xd,
  check: () => im,
  cidrv4: () => _S,
  cidrv6: () => SS,
  clone: () => sn,
  coerce: () => i0,
  config: () => ht,
  core: () => P_,
  cuid: () => mS,
  cuid2: () => pS,
  custom: () => am,
  date: () => MS,
  discriminatedUnion: () => ju,
  e164: () => wS,
  email: () => aS,
  emoji: () => fS,
  endsWith: () => tu,
  enum: () => $t,
  file: () => YS,
  flattenError: () => Yl,
  float32: () => ES,
  float64: () => OS,
  formatError: () => Ql,
  function: () => gd,
  getErrorMap: () => n0,
  globalRegistry: () => li,
  gt: () => ci,
  gte: () => Ut,
  guid: () => rS,
  includes: () => Fl,
  instanceof: () => KS,
  int: () => Rl,
  int32: () => xS,
  int64: () => AS,
  intersection: () => Kr,
  ipv4: () => yS,
  ipv6: () => bS,
  iso: () => W_,
  json: () => FS,
  jwt: () => TS,
  keyof: () => RS,
  ksuid: () => gS,
  lazy: () => tm,
  length: () => Yr,
  literal: () => T,
  locales: () => If,
  looseObject: () => bt,
  lowercase: () => Kl,
  lt: () => ui,
  lte: () => tn,
  map: () => LS,
  maxLength: () => Gr,
  maxSize: () => Br,
  mime: () => nu,
  minLength: () => Di,
  minSize: () => Ua,
  multipleOf: () => xa,
  nan: () => JS,
  nanoid: () => dS,
  nativeEnum: () => GS,
  negative: () => dd,
  never: () => Zi,
  nonnegative: () => pd,
  nonoptional: () => Qd,
  nonpositive: () => md,
  normalize: () => iu,
  null: () => Uu,
  nullable: () => Mr,
  nullish: () => QS,
  number: () => oe,
  object: () => N,
  optional: () => Re,
  overwrite: () => si,
  parse: () => Sd,
  parseAsync: () => $d,
  partialRecord: () => HS,
  pipe: () => Rr,
  positive: () => fd,
  prefault: () => Yd,
  preprocess: () => qu,
  prettifyError: () => Sf,
  promise: () => PS,
  property: () => vd,
  readonly: () => Wd,
  record: () => Se,
  refine: () => rm,
  regex: () => Pl,
  regexes: () => Ef,
  registry: () => Jl,
  safeParse: () => zd,
  safeParseAsync: () => wd,
  set: () => BS,
  setErrorMap: () => t0,
  size: () => Xl,
  startsWith: () => eu,
  strictObject: () => IS,
  string: () => E,
  stringFormat: () => kS,
  stringbool: () => WS,
  success: () => VS,
  superRefine: () => om,
  symbol: () => DS,
  templateLiteral: () => XS,
  toJSONSchema: () => yd,
  toLowerCase: () => ru,
  toUpperCase: () => ou,
  transform: () => Cu,
  treeifyError: () => _f,
  trim: () => au,
  tuple: () => qS,
  uint32: () => US,
  uint64: () => jS,
  ulid: () => vS,
  undefined: () => Cr,
  union: () => me,
  unknown: () => je,
  uppercase: () => Wl,
  url: () => sS,
  uuid: () => oS,
  uuidv4: () => lS,
  uuidv6: () => uS,
  uuidv7: () => cS,
  void: () => CS,
  xid: () => hS,
  z: () => AT
}), ji = "io.modelcontextprotocol/related-task";
var lt = am((n) => n !== null && (typeof n == "object" || typeof n == "function")), a0 = me([E(), oe().int()]), r0 = E(), bk = bt({
  ttl: oe().optional(),
  pollInterval: oe().optional()
}), DT = N({ ttl: oe().optional() }), ZT = N({ taskId: E() }), lm = bt({
  progressToken: a0.optional(),
  [ji]: ZT.optional()
}), Ht = N({ _meta: lm.optional() }), Fr = Ht.extend({ task: DT.optional() }), CT = (n) => Fr.safeParse(n).success, gt = N({
  method: E(),
  params: Ht.loose().optional()
}), nn = N({ _meta: lm.optional() }), an = N({
  method: E(),
  params: nn.loose().optional()
}), yt = bt({ _meta: lm.optional() }), eo = me([E(), oe().int()]), o0 = N({
  jsonrpc: T("2.0"),
  id: eo,
  ...gt.shape
}).strict(), Ig = (n) => o0.safeParse(n).success, l0 = N({
  jsonrpc: T("2.0"),
  ...an.shape
}).strict(), MT = (n) => l0.safeParse(n).success, um = N({
  jsonrpc: T("2.0"),
  id: eo,
  result: yt
}).strict(), Ol = (n) => um.safeParse(n).success, Ne;
(function(n) {
  n[n.ConnectionClosed = -32e3] = "ConnectionClosed", n[n.RequestTimeout = -32001] = "RequestTimeout", n[n.ParseError = -32700] = "ParseError", n[n.InvalidRequest = -32600] = "InvalidRequest", n[n.MethodNotFound = -32601] = "MethodNotFound", n[n.InvalidParams = -32602] = "InvalidParams", n[n.InternalError = -32603] = "InternalError", n[n.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
})(Ne || (Ne = {}));
var cm = N({
  jsonrpc: T("2.0"),
  id: eo.optional(),
  error: N({
    code: oe().int(),
    message: E(),
    data: je().optional()
  })
}).strict(), RT = (n) => cm.safeParse(n).success, IT = me([
  o0,
  l0,
  um,
  cm
]), _k = me([um, cm]), sm = yt.strict(), qT = nn.extend({
  requestId: eo.optional(),
  reason: E().optional()
}), fm = an.extend({
  method: T("notifications/cancelled"),
  params: qT
}), HT = N({
  src: E(),
  mimeType: E().optional(),
  sizes: ie(E()).optional(),
  theme: $t(["light", "dark"]).optional()
}), to = N({ icons: ie(HT).optional() }), Aa = N({
  name: E(),
  title: E().optional()
}), Hu = Aa.extend({
  ...Aa.shape,
  ...to.shape,
  version: E(),
  websiteUrl: E().optional(),
  description: E().optional()
}), LT = Kr(N({ applyDefaults: Ae().optional() }), Se(E(), je())), BT = qu((n) => n && typeof n == "object" && !Array.isArray(n) && Object.keys(n).length === 0 ? { form: {} } : n, Kr(N({
  form: LT.optional(),
  url: lt.optional()
}), Se(E(), je()).optional())), GT = bt({
  list: lt.optional(),
  cancel: lt.optional(),
  requests: bt({
    sampling: bt({ createMessage: lt.optional() }).optional(),
    elicitation: bt({ create: lt.optional() }).optional()
  }).optional()
}), YT = bt({
  list: lt.optional(),
  cancel: lt.optional(),
  requests: bt({ tools: bt({ call: lt.optional() }).optional() }).optional()
}), QT = N({
  experimental: Se(E(), lt).optional(),
  sampling: N({
    context: lt.optional(),
    tools: lt.optional()
  }).optional(),
  elicitation: BT.optional(),
  roots: N({ listChanged: Ae().optional() }).optional(),
  tasks: GT.optional(),
  extensions: Se(E(), lt).optional()
}), VT = Ht.extend({
  protocolVersion: E(),
  capabilities: QT,
  clientInfo: Hu
}), JT = gt.extend({
  method: T("initialize"),
  params: VT
}), XT = N({
  experimental: Se(E(), lt).optional(),
  logging: lt.optional(),
  completions: lt.optional(),
  prompts: N({ listChanged: Ae().optional() }).optional(),
  resources: N({
    subscribe: Ae().optional(),
    listChanged: Ae().optional()
  }).optional(),
  tools: N({ listChanged: Ae().optional() }).optional(),
  tasks: YT.optional(),
  extensions: Se(E(), lt).optional()
}), PT = yt.extend({
  protocolVersion: E(),
  capabilities: XT,
  serverInfo: Hu,
  instructions: E().optional()
}), KT = an.extend({
  method: T("notifications/initialized"),
  params: nn.optional()
}), Lu = gt.extend({
  method: T("ping"),
  params: Ht.optional()
}), WT = N({
  progress: oe(),
  total: Re(oe()),
  message: Re(E())
}), FT = N({
  ...nn.shape,
  ...WT.shape,
  progressToken: a0
}), dm = an.extend({
  method: T("notifications/progress"),
  params: FT
}), e4 = Ht.extend({ cursor: r0.optional() }), no = gt.extend({ params: e4.optional() }), io = yt.extend({ nextCursor: r0.optional() }), t4 = $t([
  "working",
  "input_required",
  "completed",
  "failed",
  "cancelled"
]), ao = N({
  taskId: E(),
  status: t4,
  ttl: me([oe(), Uu()]),
  createdAt: E(),
  lastUpdatedAt: E(),
  pollInterval: Re(oe()),
  statusMessage: Re(E())
}), mm = yt.extend({ task: ao }), n4 = nn.merge(ao), Il = an.extend({
  method: T("notifications/tasks/status"),
  params: n4
}), pm = gt.extend({
  method: T("tasks/get"),
  params: Ht.extend({ taskId: E() })
}), vm = yt.merge(ao), hm = gt.extend({
  method: T("tasks/result"),
  params: Ht.extend({ taskId: E() })
}), Sk = yt.loose(), gm = no.extend({ method: T("tasks/list") }), ym = io.extend({ tasks: ie(ao) }), bm = gt.extend({
  method: T("tasks/cancel"),
  params: Ht.extend({ taskId: E() })
}), i4 = yt.merge(ao), u0 = N({
  uri: E(),
  mimeType: Re(E()),
  _meta: Se(E(), je()).optional()
}), c0 = u0.extend({ text: E() }), _m = E().refine((n) => {
  try {
    return atob(n), !0;
  } catch {
    return !1;
  }
}, { message: "Invalid Base64 string" }), s0 = u0.extend({ blob: _m }), ro = $t(["user", "assistant"]), Za = N({
  audience: ie(ro).optional(),
  priority: oe().min(0).max(1).optional(),
  lastModified: _d({ offset: !0 }).optional()
}), f0 = N({
  ...Aa.shape,
  ...to.shape,
  uri: E(),
  description: Re(E()),
  mimeType: Re(E()),
  size: Re(oe()),
  annotations: Za.optional(),
  _meta: Re(bt({}))
}), a4 = N({
  ...Aa.shape,
  ...to.shape,
  uriTemplate: E(),
  description: Re(E()),
  mimeType: Re(E()),
  annotations: Za.optional(),
  _meta: Re(bt({}))
}), r4 = no.extend({ method: T("resources/list") }), d0 = io.extend({ resources: ie(f0) }), o4 = no.extend({ method: T("resources/templates/list") }), l4 = io.extend({ resourceTemplates: ie(a4) }), Sm = Ht.extend({ uri: E() }), u4 = Sm, c4 = gt.extend({
  method: T("resources/read"),
  params: u4
}), m0 = yt.extend({ contents: ie(me([c0, s0])) }), s4 = an.extend({
  method: T("notifications/resources/list_changed"),
  params: nn.optional()
}), f4 = Sm, d4 = gt.extend({
  method: T("resources/subscribe"),
  params: f4
}), m4 = Sm, p4 = gt.extend({
  method: T("resources/unsubscribe"),
  params: m4
}), v4 = nn.extend({ uri: E() }), h4 = an.extend({
  method: T("notifications/resources/updated"),
  params: v4
}), g4 = N({
  name: E(),
  description: Re(E()),
  required: Re(Ae())
}), y4 = N({
  ...Aa.shape,
  ...to.shape,
  description: Re(E()),
  arguments: Re(ie(g4)),
  _meta: Re(bt({}))
}), b4 = no.extend({ method: T("prompts/list") }), _4 = io.extend({ prompts: ie(y4) }), S4 = Ht.extend({
  name: E(),
  arguments: Se(E(), E()).optional()
}), $4 = gt.extend({
  method: T("prompts/get"),
  params: S4
}), $m = N({
  type: T("text"),
  text: E(),
  annotations: Za.optional(),
  _meta: Se(E(), je()).optional()
}), zm = N({
  type: T("image"),
  data: _m,
  mimeType: E(),
  annotations: Za.optional(),
  _meta: Se(E(), je()).optional()
}), wm = N({
  type: T("audio"),
  data: _m,
  mimeType: E(),
  annotations: Za.optional(),
  _meta: Se(E(), je()).optional()
}), z4 = N({
  type: T("tool_use"),
  name: E(),
  id: E(),
  input: Se(E(), je()),
  _meta: Se(E(), je()).optional()
}), p0 = N({
  type: T("resource"),
  resource: me([c0, s0]),
  annotations: Za.optional(),
  _meta: Se(E(), je()).optional()
}), v0 = f0.extend({ type: T("resource_link") }), oo = me([
  $m,
  zm,
  wm,
  v0,
  p0
]), w4 = N({
  role: ro,
  content: oo
}), T4 = yt.extend({
  description: E().optional(),
  messages: ie(w4)
}), k4 = an.extend({
  method: T("notifications/prompts/list_changed"),
  params: nn.optional()
}), E4 = N({
  title: E().optional(),
  readOnlyHint: Ae().optional(),
  destructiveHint: Ae().optional(),
  idempotentHint: Ae().optional(),
  openWorldHint: Ae().optional()
}), O4 = N({ taskSupport: $t([
  "required",
  "optional",
  "forbidden"
]).optional() }), Tm = N({
  ...Aa.shape,
  ...to.shape,
  description: E().optional(),
  inputSchema: N({
    type: T("object"),
    properties: Se(E(), lt).optional(),
    required: ie(E()).optional()
  }).catchall(je()),
  outputSchema: N({
    type: T("object"),
    properties: Se(E(), lt).optional(),
    required: ie(E()).optional()
  }).catchall(je()).optional(),
  annotations: E4.optional(),
  execution: O4.optional(),
  _meta: Se(E(), je()).optional()
}), h0 = no.extend({ method: T("tools/list") }), x4 = io.extend({ tools: ie(Tm) }), Bu = yt.extend({
  content: ie(oo).default([]),
  structuredContent: Se(E(), je()).optional(),
  isError: Ae().optional()
}), $k = Bu.or(yt.extend({ toolResult: je() })), U4 = Fr.extend({
  name: E(),
  arguments: Se(E(), je()).optional()
}), g0 = gt.extend({
  method: T("tools/call"),
  params: U4
}), N4 = an.extend({
  method: T("notifications/tools/list_changed"),
  params: nn.optional()
}), zk = N({
  autoRefresh: Ae().default(!0),
  debounceMs: oe().int().nonnegative().default(300)
}), y0 = $t([
  "debug",
  "info",
  "notice",
  "warning",
  "error",
  "critical",
  "alert",
  "emergency"
]), A4 = Ht.extend({ level: y0 }), j4 = gt.extend({
  method: T("logging/setLevel"),
  params: A4
}), D4 = nn.extend({
  level: y0,
  logger: E().optional(),
  data: je()
}), Z4 = an.extend({
  method: T("notifications/message"),
  params: D4
}), C4 = N({ name: E().optional() }), M4 = N({
  hints: ie(C4).optional(),
  costPriority: oe().min(0).max(1).optional(),
  speedPriority: oe().min(0).max(1).optional(),
  intelligencePriority: oe().min(0).max(1).optional()
}), R4 = N({ mode: $t([
  "auto",
  "required",
  "none"
]).optional() }), I4 = N({
  type: T("tool_result"),
  toolUseId: E().describe("The unique identifier for the corresponding tool call."),
  content: ie(oo).default([]),
  structuredContent: N({}).loose().optional(),
  isError: Ae().optional(),
  _meta: Se(E(), je()).optional()
}), q4 = ju("type", [
  $m,
  zm,
  wm
]), ql = ju("type", [
  $m,
  zm,
  wm,
  z4,
  I4
]), H4 = N({
  role: ro,
  content: me([ql, ie(ql)]),
  _meta: Se(E(), je()).optional()
}), L4 = Fr.extend({
  messages: ie(H4),
  modelPreferences: M4.optional(),
  systemPrompt: E().optional(),
  includeContext: $t([
    "none",
    "thisServer",
    "allServers"
  ]).optional(),
  temperature: oe().optional(),
  maxTokens: oe().int(),
  stopSequences: ie(E()).optional(),
  metadata: lt.optional(),
  tools: ie(Tm).optional(),
  toolChoice: R4.optional()
}), B4 = gt.extend({
  method: T("sampling/createMessage"),
  params: L4
}), b0 = yt.extend({
  model: E(),
  stopReason: Re($t([
    "endTurn",
    "stopSequence",
    "maxTokens"
  ]).or(E())),
  role: ro,
  content: q4
}), _0 = yt.extend({
  model: E(),
  stopReason: Re($t([
    "endTurn",
    "stopSequence",
    "maxTokens",
    "toolUse"
  ]).or(E())),
  role: ro,
  content: me([ql, ie(ql)])
}), G4 = N({
  type: T("boolean"),
  title: E().optional(),
  description: E().optional(),
  default: Ae().optional()
}), Y4 = N({
  type: T("string"),
  title: E().optional(),
  description: E().optional(),
  minLength: oe().optional(),
  maxLength: oe().optional(),
  format: $t([
    "email",
    "uri",
    "date",
    "date-time"
  ]).optional(),
  default: E().optional()
}), Q4 = N({
  type: $t(["number", "integer"]),
  title: E().optional(),
  description: E().optional(),
  minimum: oe().optional(),
  maximum: oe().optional(),
  default: oe().optional()
}), V4 = N({
  type: T("string"),
  title: E().optional(),
  description: E().optional(),
  enum: ie(E()),
  default: E().optional()
}), J4 = N({
  type: T("string"),
  title: E().optional(),
  description: E().optional(),
  oneOf: ie(N({
    const: E(),
    title: E()
  })),
  default: E().optional()
}), X4 = N({
  type: T("string"),
  title: E().optional(),
  description: E().optional(),
  enum: ie(E()),
  enumNames: ie(E()).optional(),
  default: E().optional()
}), P4 = me([V4, J4]), K4 = N({
  type: T("array"),
  title: E().optional(),
  description: E().optional(),
  minItems: oe().optional(),
  maxItems: oe().optional(),
  items: N({
    type: T("string"),
    enum: ie(E())
  }),
  default: ie(E()).optional()
}), W4 = N({
  type: T("array"),
  title: E().optional(),
  description: E().optional(),
  minItems: oe().optional(),
  maxItems: oe().optional(),
  items: N({ anyOf: ie(N({
    const: E(),
    title: E()
  })) }),
  default: ie(E()).optional()
}), F4 = me([K4, W4]), e6 = me([
  X4,
  P4,
  F4
]), t6 = me([
  e6,
  G4,
  Y4,
  Q4
]), n6 = Fr.extend({
  mode: T("form").optional(),
  message: E(),
  requestedSchema: N({
    type: T("object"),
    properties: Se(E(), t6),
    required: ie(E()).optional()
  })
}), i6 = Fr.extend({
  mode: T("url"),
  message: E(),
  elicitationId: E(),
  url: E().url()
}), a6 = me([n6, i6]), r6 = gt.extend({
  method: T("elicitation/create"),
  params: a6
}), o6 = nn.extend({ elicitationId: E() }), l6 = an.extend({
  method: T("notifications/elicitation/complete"),
  params: o6
}), u6 = yt.extend({
  action: $t([
    "accept",
    "decline",
    "cancel"
  ]),
  content: qu((n) => n === null ? void 0 : n, Se(E(), me([
    E(),
    oe(),
    Ae(),
    ie(E())
  ])).optional())
}), c6 = N({
  type: T("ref/resource"),
  uri: E()
}), s6 = N({
  type: T("ref/prompt"),
  name: E()
}), f6 = Ht.extend({
  ref: me([s6, c6]),
  argument: N({
    name: E(),
    value: E()
  }),
  context: N({ arguments: Se(E(), E()).optional() }).optional()
}), d6 = gt.extend({
  method: T("completion/complete"),
  params: f6
}), m6 = yt.extend({ completion: bt({
  values: ie(E()).max(100),
  total: Re(oe().int()),
  hasMore: Re(Ae())
}) }), p6 = N({
  uri: E().startsWith("file://"),
  name: E().optional(),
  _meta: Se(E(), je()).optional()
}), v6 = gt.extend({
  method: T("roots/list"),
  params: Ht.optional()
}), h6 = yt.extend({ roots: ie(p6) }), g6 = an.extend({
  method: T("notifications/roots/list_changed"),
  params: nn.optional()
}), wk = me([
  Lu,
  JT,
  d6,
  j4,
  $4,
  b4,
  r4,
  o4,
  c4,
  d4,
  p4,
  g0,
  h0,
  pm,
  hm,
  gm,
  bm
]), Tk = me([
  fm,
  dm,
  KT,
  g6,
  Il
]), kk = me([
  sm,
  b0,
  _0,
  u6,
  h6,
  vm,
  ym,
  mm
]), Ek = me([
  Lu,
  B4,
  r6,
  v6,
  pm,
  hm,
  gm,
  bm
]), Ok = me([
  fm,
  dm,
  Z4,
  h4,
  s4,
  N4,
  k4,
  Il,
  l6
]), xk = me([
  sm,
  PT,
  m6,
  T4,
  _4,
  d0,
  l4,
  m0,
  Bu,
  x4,
  vm,
  ym,
  mm
]), ke = class S0 extends Error {
  constructor(r, l, s) {
    super(`MCP error ${r}: ${l}`), this.code = r, this.data = s, this.name = "McpError";
  }
  static fromError(r, l, s) {
    if (r === Ne.UrlElicitationRequired && s) {
      const i = s;
      if (i.elicitations) return new y6(i.elicitations, l);
    }
    return new S0(r, l, s);
  }
}, y6 = class extends ke {
  constructor(n, r = `URL elicitation${n.length > 1 ? "s" : ""} required`) {
    super(Ne.UrlElicitationRequired, r, { elicitations: n });
  }
  get elicitations() {
    return this.data?.elicitations ?? [];
  }
};
function Ai(n) {
  return n === "completed" || n === "failed" || n === "cancelled";
}
function qg(n) {
  const r = TT(n)?.method;
  if (!r) throw new Error("Schema is missing a method literal");
  const l = kT(r);
  if (typeof l != "string") throw new Error("Schema method literal must be a string");
  return l;
}
function Hg(n, r) {
  const l = K_(n, r);
  if (!l.success) throw l.error;
  return l.data;
}
var b6 = class {
  constructor(n) {
    this._options = n, this._requestMessageId = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this._requestHandlerAbortControllers = /* @__PURE__ */ new Map(), this._notificationHandlers = /* @__PURE__ */ new Map(), this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this._timeoutInfo = /* @__PURE__ */ new Map(), this._pendingDebouncedNotifications = /* @__PURE__ */ new Set(), this._taskProgressTokens = /* @__PURE__ */ new Map(), this._requestResolvers = /* @__PURE__ */ new Map(), this.setNotificationHandler(fm, (r) => {
      this._oncancel(r);
    }), this.setNotificationHandler(dm, (r) => {
      this._onprogress(r);
    }), this.setRequestHandler(Lu, (r) => ({})), this._taskStore = n?.taskStore, this._taskMessageQueue = n?.taskMessageQueue, this._taskStore && (this.setRequestHandler(pm, async (r, l) => {
      const s = await this._taskStore.getTask(r.params.taskId, l.sessionId);
      if (!s) throw new ke(Ne.InvalidParams, "Failed to retrieve task: Task not found");
      return { ...s };
    }), this.setRequestHandler(hm, async (r, l) => {
      const s = async () => {
        const i = r.params.taskId;
        if (this._taskMessageQueue) {
          let d;
          for (; d = await this._taskMessageQueue.dequeue(i, l.sessionId); ) {
            if (d.type === "response" || d.type === "error") {
              const h = d.message, w = h.id, v = this._requestResolvers.get(w);
              if (v)
                if (this._requestResolvers.delete(w), d.type === "response") v(h);
                else {
                  const b = h;
                  v(new ke(b.error.code, b.error.message, b.error.data));
                }
              else {
                const b = d.type === "response" ? "Response" : "Error";
                this._onerror(/* @__PURE__ */ new Error(`${b} handler missing for request ${w}`));
              }
              continue;
            }
            await this._transport?.send(d.message, { relatedRequestId: l.requestId });
          }
        }
        const u = await this._taskStore.getTask(i, l.sessionId);
        if (!u) throw new ke(Ne.InvalidParams, `Task not found: ${i}`);
        if (!Ai(u.status))
          return await this._waitForTaskUpdate(i, l.signal), await s();
        if (Ai(u.status)) {
          const d = await this._taskStore.getTaskResult(i, l.sessionId);
          return this._clearTaskQueue(i), {
            ...d,
            _meta: {
              ...d._meta,
              [ji]: { taskId: i }
            }
          };
        }
        return await s();
      };
      return await s();
    }), this.setRequestHandler(gm, async (r, l) => {
      try {
        const { tasks: s, nextCursor: i } = await this._taskStore.listTasks(r.params?.cursor, l.sessionId);
        return {
          tasks: s,
          nextCursor: i,
          _meta: {}
        };
      } catch (s) {
        throw new ke(Ne.InvalidParams, `Failed to list tasks: ${s instanceof Error ? s.message : String(s)}`);
      }
    }), this.setRequestHandler(bm, async (r, l) => {
      try {
        const s = await this._taskStore.getTask(r.params.taskId, l.sessionId);
        if (!s) throw new ke(Ne.InvalidParams, `Task not found: ${r.params.taskId}`);
        if (Ai(s.status)) throw new ke(Ne.InvalidParams, `Cannot cancel task in terminal status: ${s.status}`);
        await this._taskStore.updateTaskStatus(r.params.taskId, "cancelled", "Client cancelled task execution.", l.sessionId), this._clearTaskQueue(r.params.taskId);
        const i = await this._taskStore.getTask(r.params.taskId, l.sessionId);
        if (!i) throw new ke(Ne.InvalidParams, `Task not found after cancellation: ${r.params.taskId}`);
        return {
          _meta: {},
          ...i
        };
      } catch (s) {
        throw s instanceof ke ? s : new ke(Ne.InvalidRequest, `Failed to cancel task: ${s instanceof Error ? s.message : String(s)}`);
      }
    }));
  }
  async _oncancel(n) {
    n.params.requestId && this._requestHandlerAbortControllers.get(n.params.requestId)?.abort(n.params.reason);
  }
  _setupTimeout(n, r, l, s, i = !1) {
    this._timeoutInfo.set(n, {
      timeoutId: setTimeout(s, r),
      startTime: Date.now(),
      timeout: r,
      maxTotalTimeout: l,
      resetTimeoutOnProgress: i,
      onTimeout: s
    });
  }
  _resetTimeout(n) {
    const r = this._timeoutInfo.get(n);
    if (!r) return !1;
    const l = Date.now() - r.startTime;
    if (r.maxTotalTimeout && l >= r.maxTotalTimeout)
      throw this._timeoutInfo.delete(n), ke.fromError(Ne.RequestTimeout, "Maximum total timeout exceeded", {
        maxTotalTimeout: r.maxTotalTimeout,
        totalElapsed: l
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
    const l = this.transport?.onerror;
    this._transport.onerror = (i) => {
      l?.(i), this._onerror(i);
    };
    const s = this._transport?.onmessage;
    this._transport.onmessage = (i, u) => {
      s?.(i, u), Ol(i) || RT(i) ? this._onresponse(i) : Ig(i) ? this._onrequest(i, u) : MT(i) ? this._onnotification(i) : this._onerror(/* @__PURE__ */ new Error(`Unknown message type: ${JSON.stringify(i)}`));
    }, await this._transport.start();
  }
  _onclose() {
    const n = this._responseHandlers;
    this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers.clear(), this._taskProgressTokens.clear(), this._pendingDebouncedNotifications.clear();
    for (const l of this._timeoutInfo.values()) clearTimeout(l.timeoutId);
    this._timeoutInfo.clear();
    for (const l of this._requestHandlerAbortControllers.values()) l.abort();
    this._requestHandlerAbortControllers.clear();
    const r = ke.fromError(Ne.ConnectionClosed, "Connection closed");
    this._transport = void 0, this.onclose?.();
    for (const l of n.values()) l(r);
  }
  _onerror(n) {
    this.onerror?.(n);
  }
  _onnotification(n) {
    const r = this._notificationHandlers.get(n.method) ?? this.fallbackNotificationHandler;
    r !== void 0 && Promise.resolve().then(() => r(n)).catch((l) => this._onerror(/* @__PURE__ */ new Error(`Uncaught error in notification handler: ${l}`)));
  }
  _onrequest(n, r) {
    const l = this._requestHandlers.get(n.method) ?? this.fallbackRequestHandler, s = this._transport, i = n.params?._meta?.[ji]?.taskId;
    if (l === void 0) {
      const v = {
        jsonrpc: "2.0",
        id: n.id,
        error: {
          code: Ne.MethodNotFound,
          message: "Method not found"
        }
      };
      i && this._taskMessageQueue ? this._enqueueTaskMessage(i, {
        type: "error",
        message: v,
        timestamp: Date.now()
      }, s?.sessionId).catch((b) => this._onerror(/* @__PURE__ */ new Error(`Failed to enqueue error response: ${b}`))) : s?.send(v).catch((b) => this._onerror(/* @__PURE__ */ new Error(`Failed to send an error response: ${b}`)));
      return;
    }
    const u = new AbortController();
    this._requestHandlerAbortControllers.set(n.id, u);
    const d = CT(n.params) ? n.params.task : void 0, h = this._taskStore ? this.requestTaskStore(n, s?.sessionId) : void 0, w = {
      signal: u.signal,
      sessionId: s?.sessionId,
      _meta: n.params?._meta,
      sendNotification: async (v) => {
        if (u.signal.aborted) return;
        const b = { relatedRequestId: n.id };
        i && (b.relatedTask = { taskId: i }), await this.notification(v, b);
      },
      sendRequest: async (v, b, $) => {
        if (u.signal.aborted) throw new ke(Ne.ConnectionClosed, "Request was cancelled");
        const y = {
          ...$,
          relatedRequestId: n.id
        };
        i && !y.relatedTask && (y.relatedTask = { taskId: i });
        const Z = y.relatedTask?.taskId ?? i;
        return Z && h && await h.updateTaskStatus(Z, "input_required"), await this.request(v, b, y);
      },
      authInfo: r?.authInfo,
      requestId: n.id,
      requestInfo: r?.requestInfo,
      taskId: i,
      taskStore: h,
      taskRequestedTtl: d?.ttl,
      closeSSEStream: r?.closeSSEStream,
      closeStandaloneSSEStream: r?.closeStandaloneSSEStream
    };
    Promise.resolve().then(() => {
      d && this.assertTaskHandlerCapability(n.method);
    }).then(() => l(n, w)).then(async (v) => {
      if (u.signal.aborted) return;
      const b = {
        result: v,
        jsonrpc: "2.0",
        id: n.id
      };
      i && this._taskMessageQueue ? await this._enqueueTaskMessage(i, {
        type: "response",
        message: b,
        timestamp: Date.now()
      }, s?.sessionId) : await s?.send(b);
    }, async (v) => {
      if (u.signal.aborted) return;
      const b = {
        jsonrpc: "2.0",
        id: n.id,
        error: {
          code: Number.isSafeInteger(v.code) ? v.code : Ne.InternalError,
          message: v.message ?? "Internal error",
          ...v.data !== void 0 && { data: v.data }
        }
      };
      i && this._taskMessageQueue ? await this._enqueueTaskMessage(i, {
        type: "error",
        message: b,
        timestamp: Date.now()
      }, s?.sessionId) : await s?.send(b);
    }).catch((v) => this._onerror(/* @__PURE__ */ new Error(`Failed to send response: ${v}`))).finally(() => {
      this._requestHandlerAbortControllers.get(n.id) === u && this._requestHandlerAbortControllers.delete(n.id);
    });
  }
  _onprogress(n) {
    const { progressToken: r, ...l } = n.params, s = Number(r), i = this._progressHandlers.get(s);
    if (!i) {
      this._onerror(/* @__PURE__ */ new Error(`Received a progress notification for an unknown token: ${JSON.stringify(n)}`));
      return;
    }
    const u = this._responseHandlers.get(s), d = this._timeoutInfo.get(s);
    if (d && u && d.resetTimeoutOnProgress) try {
      this._resetTimeout(s);
    } catch (h) {
      this._responseHandlers.delete(s), this._progressHandlers.delete(s), this._cleanupTimeout(s), u(h);
      return;
    }
    i(l);
  }
  _onresponse(n) {
    const r = Number(n.id), l = this._requestResolvers.get(r);
    if (l) {
      this._requestResolvers.delete(r), Ol(n) ? l(n) : l(new ke(n.error.code, n.error.message, n.error.data));
      return;
    }
    const s = this._responseHandlers.get(r);
    if (s === void 0) {
      this._onerror(/* @__PURE__ */ new Error(`Received a response for an unknown message ID: ${JSON.stringify(n)}`));
      return;
    }
    this._responseHandlers.delete(r), this._cleanupTimeout(r);
    let i = !1;
    if (Ol(n) && n.result && typeof n.result == "object") {
      const u = n.result;
      if (u.task && typeof u.task == "object") {
        const d = u.task;
        typeof d.taskId == "string" && (i = !0, this._taskProgressTokens.set(d.taskId, r));
      }
    }
    i || this._progressHandlers.delete(r), Ol(n) ? s(n) : s(ke.fromError(n.error.code, n.error.message, n.error.data));
  }
  get transport() {
    return this._transport;
  }
  async close() {
    await this._transport?.close();
  }
  async *requestStream(n, r, l) {
    const { task: s } = l ?? {};
    if (!s) {
      try {
        yield {
          type: "result",
          result: await this.request(n, r, l)
        };
      } catch (u) {
        yield {
          type: "error",
          error: u instanceof ke ? u : new ke(Ne.InternalError, String(u))
        };
      }
      return;
    }
    let i;
    try {
      const u = await this.request(n, mm, l);
      if (u.task)
        i = u.task.taskId, yield {
          type: "taskCreated",
          task: u.task
        };
      else throw new ke(Ne.InternalError, "Task creation did not return a task");
      for (; ; ) {
        const d = await this.getTask({ taskId: i }, l);
        if (yield {
          type: "taskStatus",
          task: d
        }, Ai(d.status)) {
          d.status === "completed" ? yield {
            type: "result",
            result: await this.getTaskResult({ taskId: i }, r, l)
          } : d.status === "failed" ? yield {
            type: "error",
            error: new ke(Ne.InternalError, `Task ${i} failed`)
          } : d.status === "cancelled" && (yield {
            type: "error",
            error: new ke(Ne.InternalError, `Task ${i} was cancelled`)
          });
          return;
        }
        if (d.status === "input_required") {
          yield {
            type: "result",
            result: await this.getTaskResult({ taskId: i }, r, l)
          };
          return;
        }
        const h = d.pollInterval ?? this._options?.defaultTaskPollInterval ?? 1e3;
        await new Promise((w) => setTimeout(w, h)), l?.signal?.throwIfAborted();
      }
    } catch (u) {
      yield {
        type: "error",
        error: u instanceof ke ? u : new ke(Ne.InternalError, String(u))
      };
    }
  }
  request(n, r, l) {
    const { relatedRequestId: s, resumptionToken: i, onresumptiontoken: u, task: d, relatedTask: h } = l ?? {};
    return new Promise((w, v) => {
      const b = (ne) => {
        v(ne);
      };
      if (!this._transport) {
        b(/* @__PURE__ */ new Error("Not connected"));
        return;
      }
      if (this._options?.enforceStrictCapabilities === !0) try {
        this.assertCapabilityForMethod(n.method), d && this.assertTaskCapability(n.method);
      } catch (ne) {
        b(ne);
        return;
      }
      l?.signal?.throwIfAborted();
      const $ = this._requestMessageId++, y = {
        ...n,
        jsonrpc: "2.0",
        id: $
      };
      l?.onprogress && (this._progressHandlers.set($, l.onprogress), y.params = {
        ...n.params,
        _meta: {
          ...n.params?._meta || {},
          progressToken: $
        }
      }), d && (y.params = {
        ...y.params,
        task: d
      }), h && (y.params = {
        ...y.params,
        _meta: {
          ...y.params?._meta || {},
          [ji]: h
        }
      });
      const Z = (ne) => {
        this._responseHandlers.delete($), this._progressHandlers.delete($), this._cleanupTimeout($), this._transport?.send({
          jsonrpc: "2.0",
          method: "notifications/cancelled",
          params: {
            requestId: $,
            reason: String(ne)
          }
        }, {
          relatedRequestId: s,
          resumptionToken: i,
          onresumptiontoken: u
        }).catch((K) => this._onerror(/* @__PURE__ */ new Error(`Failed to send cancellation: ${K}`))), v(ne instanceof ke ? ne : new ke(Ne.RequestTimeout, String(ne)));
      };
      this._responseHandlers.set($, (ne) => {
        if (!l?.signal?.aborted) {
          if (ne instanceof Error) return v(ne);
          try {
            const K = K_(r, ne.result);
            K.success ? w(K.data) : v(K.error);
          } catch (K) {
            v(K);
          }
        }
      }), l?.signal?.addEventListener("abort", () => {
        Z(l?.signal?.reason);
      });
      const q = l?.timeout ?? 6e4, W = () => Z(ke.fromError(Ne.RequestTimeout, "Request timed out", { timeout: q }));
      this._setupTimeout($, q, l?.maxTotalTimeout, W, l?.resetTimeoutOnProgress ?? !1);
      const te = h?.taskId;
      if (te) {
        const ne = (K) => {
          const le = this._responseHandlers.get($);
          le ? le(K) : this._onerror(/* @__PURE__ */ new Error(`Response handler missing for side-channeled request ${$}`));
        };
        this._requestResolvers.set($, ne), this._enqueueTaskMessage(te, {
          type: "request",
          message: y,
          timestamp: Date.now()
        }).catch((K) => {
          this._cleanupTimeout($), v(K);
        });
      } else this._transport.send(y, {
        relatedRequestId: s,
        resumptionToken: i,
        onresumptiontoken: u
      }).catch((ne) => {
        this._cleanupTimeout($), v(ne);
      });
    });
  }
  async getTask(n, r) {
    return this.request({
      method: "tasks/get",
      params: n
    }, vm, r);
  }
  async getTaskResult(n, r, l) {
    return this.request({
      method: "tasks/result",
      params: n
    }, r, l);
  }
  async listTasks(n, r) {
    return this.request({
      method: "tasks/list",
      params: n
    }, ym, r);
  }
  async cancelTask(n, r) {
    return this.request({
      method: "tasks/cancel",
      params: n
    }, i4, r);
  }
  async notification(n, r) {
    if (!this._transport) throw new Error("Not connected");
    this.assertNotificationCapability(n.method);
    const l = r?.relatedTask?.taskId;
    if (l) {
      const i = {
        ...n,
        jsonrpc: "2.0",
        params: {
          ...n.params,
          _meta: {
            ...n.params?._meta || {},
            [ji]: r.relatedTask
          }
        }
      };
      await this._enqueueTaskMessage(l, {
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
              [ji]: r.relatedTask
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
          [ji]: r.relatedTask
        }
      }
    }), await this._transport.send(s, r);
  }
  setRequestHandler(n, r) {
    const l = qg(n);
    this.assertRequestHandlerCapability(l), this._requestHandlers.set(l, (s, i) => {
      const u = Hg(n, s);
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
    const l = qg(n);
    this._notificationHandlers.set(l, (s) => {
      const i = Hg(n, s);
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
  async _enqueueTaskMessage(n, r, l) {
    if (!this._taskStore || !this._taskMessageQueue) throw new Error("Cannot enqueue task message: taskStore and taskMessageQueue are not configured");
    const s = this._options?.maxTaskQueueSize;
    await this._taskMessageQueue.enqueue(n, r, l, s);
  }
  async _clearTaskQueue(n, r) {
    if (this._taskMessageQueue) {
      const l = await this._taskMessageQueue.dequeueAll(n, r);
      for (const s of l) if (s.type === "request" && Ig(s.message)) {
        const i = s.message.id, u = this._requestResolvers.get(i);
        u ? (u(new ke(Ne.InternalError, "Task cancelled or completed")), this._requestResolvers.delete(i)) : this._onerror(/* @__PURE__ */ new Error(`Resolver missing for request ${i} during task ${n} cleanup`));
      }
    }
  }
  async _waitForTaskUpdate(n, r) {
    let l = this._options?.defaultTaskPollInterval ?? 1e3;
    try {
      const s = await this._taskStore?.getTask(n);
      s?.pollInterval && (l = s.pollInterval);
    } catch {
    }
    return new Promise((s, i) => {
      if (r.aborted) {
        i(new ke(Ne.InvalidRequest, "Request cancelled"));
        return;
      }
      const u = setTimeout(s, l);
      r.addEventListener("abort", () => {
        clearTimeout(u), i(new ke(Ne.InvalidRequest, "Request cancelled"));
      }, { once: !0 });
    });
  }
  requestTaskStore(n, r) {
    const l = this._taskStore;
    if (!l) throw new Error("No task store configured");
    return {
      createTask: async (s) => {
        if (!n) throw new Error("No request provided");
        return await l.createTask(s, n.id, {
          method: n.method,
          params: n.params
        }, r);
      },
      getTask: async (s) => {
        const i = await l.getTask(s, r);
        if (!i) throw new ke(Ne.InvalidParams, "Failed to retrieve task: Task not found");
        return i;
      },
      storeTaskResult: async (s, i, u) => {
        await l.storeTaskResult(s, i, u, r);
        const d = await l.getTask(s, r);
        if (d) {
          const h = Il.parse({
            method: "notifications/tasks/status",
            params: d
          });
          await this.notification(h), Ai(d.status) && this._cleanupTaskProgressHandler(s);
        }
      },
      getTaskResult: (s) => l.getTaskResult(s, r),
      updateTaskStatus: async (s, i, u) => {
        const d = await l.getTask(s, r);
        if (!d) throw new ke(Ne.InvalidParams, `Task "${s}" not found - it may have been cleaned up`);
        if (Ai(d.status)) throw new ke(Ne.InvalidParams, `Cannot update task "${s}" from terminal status "${d.status}" to "${i}". Terminal states (completed, failed, cancelled) cannot transition to other states.`);
        await l.updateTaskStatus(s, i, u, r);
        const h = await l.getTask(s, r);
        if (h) {
          const w = Il.parse({
            method: "notifications/tasks/status",
            params: h
          });
          await this.notification(w), Ai(h.status) && this._cleanupTaskProgressHandler(s);
        }
      },
      listTasks: (s) => l.listTasks(s, r)
    };
  }
};
function Lg(n) {
  return n !== null && typeof n == "object" && !Array.isArray(n);
}
function _6(n, r) {
  const l = { ...n };
  for (const s in r) {
    const i = s, u = r[i];
    if (u === void 0) continue;
    const d = l[i];
    Lg(d) && Lg(u) ? l[i] = {
      ...d,
      ...u
    } : l[i] = u;
  }
  return l;
}
((n) => typeof za < "u" ? za : typeof Proxy < "u" ? new Proxy(n, { get: (r, l) => (typeof za < "u" ? za : r)[l] }) : n)(function(n) {
  if (typeof za < "u") return za.apply(this, arguments);
  throw Error('Dynamic require of "' + n + '" is not supported');
});
var S6 = class extends b6 {
  _registeredMethods = /* @__PURE__ */ new Set();
  _eventSlots = /* @__PURE__ */ new Map();
  onEventDispatch(n, r) {
  }
  _ensureEventSlot(n) {
    let r = this._eventSlots.get(n);
    if (!r) {
      let l = this.eventSchemas[n];
      if (!l) throw Error(`Unknown event: ${String(n)}`);
      r = { listeners: [] }, this._eventSlots.set(n, r);
      let s = l.shape.method.value;
      this._registeredMethods.add(s);
      let i = r;
      super.setNotificationHandler(l, (u) => {
        let d = u.params;
        this.onEventDispatch(n, d), i.onHandler?.(d);
        for (let h of [...i.listeners]) h(d);
      });
    }
    return r;
  }
  setEventHandler(n, r) {
    let l = this._ensureEventSlot(n);
    l.onHandler && r && console.warn(`[MCP Apps] on${String(n)} handler replaced. Use addEventListener("${String(n)}", …) to add multiple listeners without replacing.`), l.onHandler = r;
  }
  getEventHandler(n) {
    return this._eventSlots.get(n)?.onHandler;
  }
  addEventListener(n, r) {
    this._ensureEventSlot(n).listeners.push(r);
  }
  removeEventListener(n, r) {
    let l = this._eventSlots.get(n);
    if (!l) return;
    let s = l.listeners.indexOf(r);
    s !== -1 && l.listeners.splice(s, 1);
  }
  setRequestHandler = (n, r) => {
    this._assertMethodNotRegistered(n, "setRequestHandler"), super.setRequestHandler(n, r);
  };
  setNotificationHandler = (n, r) => {
    this._assertMethodNotRegistered(n, "setNotificationHandler"), super.setNotificationHandler(n, r);
  };
  warnIfRequestHandlerReplaced(n, r, l) {
    r && l && console.warn(`[MCP Apps] ${n} handler replaced. Previous handler will no longer be called.`);
  }
  replaceRequestHandler = (n, r) => {
    let l = n.shape.method.value;
    this._registeredMethods.add(l), super.setRequestHandler(n, r);
  };
  _assertMethodNotRegistered(n, r) {
    let l = n.shape.method.value;
    if (this._registeredMethods.has(l)) throw Error(`Handler for "${l}" already registered (via ${r}). Use addEventListener() to attach multiple listeners, or the on* setter for replace semantics.`);
    this._registeredMethods.add(l);
  }
}, $6 = "2026-01-26";
var z6 = class {
  eventTarget;
  eventSource;
  messageListener;
  constructor(n = window.parent, r) {
    this.eventTarget = n, this.eventSource = r, this.messageListener = (l) => {
      if (r && l.source !== this.eventSource) {
        console.debug("Ignoring message from unknown source", l);
        return;
      }
      let s = IT.safeParse(l.data);
      s.success ? (console.debug("Parsed message", s.data), this.onmessage?.(s.data)) : l.data?.jsonrpc !== "2.0" ? console.debug("Ignoring non-JSON-RPC message", s.error.message, l) : (console.error("Failed to parse message", s.error.message, l), this.onerror?.(Error("Invalid JSON-RPC message received: " + s.error.message)));
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
}, w6 = me([T("light"), T("dark")]).describe("Color theme preference for the host environment."), Ir = me([
  T("inline"),
  T("fullscreen"),
  T("pip")
]).describe("Display mode for UI presentation."), T6 = me([
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
]).describe("CSS variable keys available to MCP apps for theming."), k6 = Se(T6.describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`), me([E(), Cr()]).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`)).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`), Uk = N({
  method: T("ui/open-link"),
  params: N({ url: E().describe("URL to open in the host's browser") })
}), E6 = N({ isError: Ae().optional().describe("True if the host failed to open the URL (e.g., due to security policy).") }).passthrough(), O6 = N({ isError: Ae().optional().describe("True if the download failed (e.g., user cancelled or host denied).") }).passthrough(), x6 = N({ isError: Ae().optional().describe("True if the host rejected or failed to deliver the message.") }).passthrough(), Nk = N({
  method: T("ui/notifications/sandbox-proxy-ready"),
  params: N({})
}), km = N({
  connectDomains: ie(E()).optional().describe(`Origins for network requests (fetch/XHR/WebSocket).

- Maps to CSP \`connect-src\` directive
- Empty or omitted → no network connections (secure default)`),
  resourceDomains: ie(E()).optional().describe("Origins for static resources (images, scripts, stylesheets, fonts, media).\n\n- Maps to CSP `img-src`, `script-src`, `style-src`, `font-src`, `media-src` directives\n- Wildcard subdomains supported: `https://*.example.com`\n- Empty or omitted → no network resources (secure default)"),
  frameDomains: ie(E()).optional().describe("Origins for nested iframes.\n\n- Maps to CSP `frame-src` directive\n- Empty or omitted → no nested iframes allowed (`frame-src 'none'`)"),
  baseUriDomains: ie(E()).optional().describe("Allowed base URIs for the document.\n\n- Maps to CSP `base-uri` directive\n- Empty or omitted → only same origin allowed (`base-uri 'self'`)")
}), Em = N({
  camera: N({}).optional().describe("Request camera access.\n\nMaps to Permission Policy `camera` feature."),
  microphone: N({}).optional().describe("Request microphone access.\n\nMaps to Permission Policy `microphone` feature."),
  geolocation: N({}).optional().describe("Request geolocation access.\n\nMaps to Permission Policy `geolocation` feature."),
  clipboardWrite: N({}).optional().describe("Request clipboard write access.\n\nMaps to Permission Policy `clipboard-write` feature.")
}), Ak = N({
  method: T("ui/notifications/size-changed"),
  params: N({
    width: oe().optional().describe("New width in pixels."),
    height: oe().optional().describe("New height in pixels.")
  })
}), U6 = N({
  method: T("ui/notifications/tool-input"),
  params: N({ arguments: Se(E(), je().describe("Complete tool call arguments as key-value pairs.")).optional().describe("Complete tool call arguments as key-value pairs.") })
}), N6 = N({
  method: T("ui/notifications/tool-input-partial"),
  params: N({ arguments: Se(E(), je().describe("Partial tool call arguments (incomplete, may change).")).optional().describe("Partial tool call arguments (incomplete, may change).") })
}), A6 = N({
  method: T("ui/notifications/tool-cancelled"),
  params: N({ reason: E().optional().describe('Optional reason for the cancellation (e.g., "user action", "timeout").') })
}), j6 = N({ fonts: E().optional() }), D6 = N({
  variables: k6.optional().describe("CSS variables for theming the app."),
  css: j6.optional().describe("CSS blocks that apps can inject.")
}), Z6 = N({
  method: T("ui/resource-teardown"),
  params: N({})
}), jk = Se(E(), je()), Bg = N({
  text: N({}).optional().describe("Host supports text content blocks."),
  image: N({}).optional().describe("Host supports image content blocks."),
  audio: N({}).optional().describe("Host supports audio content blocks."),
  resource: N({}).optional().describe("Host supports resource content blocks."),
  resourceLink: N({}).optional().describe("Host supports resource link content blocks."),
  structuredContent: N({}).optional().describe("Host supports structured content.")
}), Dk = N({
  method: T("ui/notifications/request-teardown"),
  params: N({}).optional()
}), C6 = N({
  experimental: N({}).optional().describe("Experimental features (structure TBD)."),
  openLinks: N({}).optional().describe("Host supports opening external URLs."),
  downloadFile: N({}).optional().describe("Host supports file downloads via ui/download-file."),
  serverTools: N({ listChanged: Ae().optional().describe("Host supports tools/list_changed notifications.") }).optional().describe("Host can proxy tool calls to the MCP server."),
  serverResources: N({ listChanged: Ae().optional().describe("Host supports resources/list_changed notifications.") }).optional().describe("Host can proxy resource reads to the MCP server."),
  logging: N({}).optional().describe("Host accepts log messages."),
  sandbox: N({
    permissions: Em.optional().describe("Permissions granted by the host (camera, microphone, geolocation)."),
    csp: km.optional().describe("CSP domains approved by the host.")
  }).optional().describe("Sandbox configuration applied by the host."),
  updateModelContext: Bg.optional().describe("Host accepts context updates (ui/update-model-context) to be included in the model's context for future turns."),
  message: Bg.optional().describe("Host supports receiving content messages (ui/message) from the view."),
  sampling: N({ tools: N({}).optional().describe("Host supports tool use via `tools` and `toolChoice` parameters.") }).optional().describe("Host supports LLM sampling (sampling/createMessage) from the view.\nMirrors the MCP `ClientCapabilities.sampling` shape so hosts can pass it through.")
}), M6 = N({
  experimental: N({}).optional().describe("Experimental features (structure TBD)."),
  tools: N({ listChanged: Ae().optional().describe("App supports tools/list_changed notifications.") }).optional().describe("App exposes MCP-style tools that the host can call."),
  availableDisplayModes: ie(Ir).optional().describe("Display modes the app supports.")
}), Zk = N({
  method: T("ui/notifications/initialized"),
  params: N({}).optional()
}), Ck = N({
  csp: km.optional().describe("Content Security Policy configuration for UI resources."),
  permissions: Em.optional().describe("Sandbox permissions requested by the UI resource."),
  domain: E().optional().describe(`Dedicated origin for view sandbox.

Useful when views need stable, dedicated origins for OAuth callbacks, CORS policies, or API key allowlists.

**Host-dependent:** The format and validation rules for this field are determined by each host. Servers MUST consult host-specific documentation for the expected domain format. Common patterns include:
- Hash-based subdomains (e.g., \`{hash}.claudemcpcontent.com\`)
- URL-derived subdomains (e.g., \`www-example-com.oaiusercontent.com\`)

If omitted, host uses default sandbox origin (typically per-conversation).`),
  prefersBorder: Ae().optional().describe(`Visual boundary preference - true if view prefers a visible border.

Boolean requesting whether a visible border and background is provided by the host. Specifying an explicit value for this is recommended because hosts' defaults may vary.

- \`true\`: request visible border + background
- \`false\`: request no visible border + background
- omitted: host decides border`)
}), Mk = N({
  method: T("ui/request-display-mode"),
  params: N({ mode: Ir.describe("The display mode being requested.") })
}), R6 = N({ mode: Ir.describe("The display mode that was actually set. May differ from requested if not supported.") }).passthrough(), I6 = me([T("model"), T("app")]).describe("Tool visibility scope - who can access the tool."), Rk = N({
  resourceUri: E().optional(),
  visibility: ie(I6).optional().describe(`Who can access this tool. Default: ["model", "app"]
- "model": Tool visible to and callable by the agent
- "app": Tool callable by the app from this server only`),
  csp: Zi().optional(),
  permissions: Zi().optional()
});
N({ mimeTypes: ie(E()).optional().describe('Array of supported MIME types for UI resources.\nMust include `"text/html;profile=mcp-app"` for MCP Apps support.') });
var Ik = N({
  method: T("ui/download-file"),
  params: N({ contents: ie(me([p0, v0])).describe("Resource contents to download — embedded (inline data) or linked (host fetches). Uses standard MCP resource types.") })
}), qk = N({
  method: T("ui/message"),
  params: N({
    role: T("user").describe('Message role, currently only "user" is supported.'),
    content: ie(oo).describe("Message content blocks (text, image, etc.).")
  })
}), Hk = N({
  method: T("ui/notifications/sandbox-resource-ready"),
  params: N({
    html: E().describe("HTML content to load into the inner iframe."),
    sandbox: E().optional().describe("Optional override for the inner iframe's sandbox attribute."),
    csp: km.optional().describe("CSP configuration from resource metadata."),
    permissions: Em.optional().describe("Sandbox permissions from resource metadata.")
  })
}), q6 = N({
  method: T("ui/notifications/tool-result"),
  params: Bu.describe("Standard MCP tool execution result.")
}), $0 = N({
  toolInfo: N({
    id: eo.optional().describe("JSON-RPC id of the tools/call request."),
    tool: Tm.describe("Tool definition including name, inputSchema, etc.")
  }).optional().describe("Metadata of the tool call that instantiated this App."),
  theme: w6.optional().describe("Current color theme preference."),
  styles: D6.optional().describe("Style configuration for theming the app."),
  displayMode: Ir.optional().describe("How the UI is currently displayed."),
  availableDisplayModes: ie(Ir).optional().describe("Display modes the host supports."),
  containerDimensions: me([N({ height: oe().describe("Fixed container height in pixels.") }), N({ maxHeight: me([oe(), Cr()]).optional().describe("Maximum container height in pixels.") })]).and(me([N({ width: oe().describe("Fixed container width in pixels.") }), N({ maxWidth: me([oe(), Cr()]).optional().describe("Maximum container width in pixels.") })])).optional().describe(`Container dimensions. Represents the dimensions of the iframe or other
container holding the app. Specify either width or maxWidth, and either height or maxHeight.`),
  locale: E().optional().describe("User's language and region preference in BCP 47 format."),
  timeZone: E().optional().describe("User's timezone in IANA format."),
  userAgent: E().optional().describe("Host application identifier."),
  platform: me([
    T("web"),
    T("desktop"),
    T("mobile")
  ]).optional().describe("Platform type for responsive design decisions."),
  deviceCapabilities: N({
    touch: Ae().optional().describe("Whether the device supports touch input."),
    hover: Ae().optional().describe("Whether the device supports hover interactions.")
  }).optional().describe("Device input capabilities."),
  safeAreaInsets: N({
    top: oe().describe("Top safe area inset in pixels."),
    right: oe().describe("Right safe area inset in pixels."),
    bottom: oe().describe("Bottom safe area inset in pixels."),
    left: oe().describe("Left safe area inset in pixels.")
  }).optional().describe("Mobile safe area boundaries in pixels.")
}).passthrough(), H6 = N({
  method: T("ui/notifications/host-context-changed"),
  params: $0.describe("Partial context update containing only changed fields.")
}), Lk = N({
  method: T("ui/update-model-context"),
  params: N({
    content: ie(oo).optional().describe("Context content blocks (text, image, etc.)."),
    structuredContent: Se(E(), je().describe("Structured content for machine-readable context data.")).optional().describe("Structured content for machine-readable context data.")
  })
}), Bk = N({
  method: T("ui/initialize"),
  params: N({
    appInfo: Hu.describe("App identification (name and version)."),
    appCapabilities: M6.describe("Features and capabilities this app provides."),
    protocolVersion: E().describe("Protocol version this app supports.")
  })
}), L6 = N({
  protocolVersion: E().describe('Negotiated protocol version string (e.g., "2025-11-21").'),
  hostInfo: Hu.describe("Host application identification and version."),
  hostCapabilities: C6.describe("Features and capabilities provided by the host."),
  hostContext: $0.describe("Rich context about the host environment.")
}).passthrough(), B6 = { target: "draft-2020-12" };
async function Gg(n, r) {
  let l = n["~standard"];
  if (l.jsonSchema) return l.jsonSchema[r](B6);
  if (l.vendor === "zod") {
    let { z: s } = await Promise.resolve().then(() => jT);
    return s.toJSONSchema(n, { io: r });
  }
  throw Error(`Schema (vendor: ${l.vendor}) does not implement Standard JSON Schema (~standard.jsonSchema). Use a library that does (zod v4, ArkType, Valibot) or wrap your schema accordingly.`);
}
async function Yg(n, r, l = "") {
  let s = await n["~standard"].validate(r);
  if (s.issues) {
    let i = s.issues.map((u) => {
      let d = u.path?.map((h) => typeof h == "object" ? h.key : h).join(".");
      return d ? `${d}: ${u.message}` : u.message;
    }).join("; ");
    throw Error(l + i);
  }
  return s.value;
}
var G6 = class z0 extends S6 {
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
    let l = `[ext-apps] App.${r}() called before connect() completed the ui/initialize handshake. Await app.connect() before calling this method, or move data loading to an ontoolresult handler.`;
    if (this.options?.strict) throw Error(l);
    console.warn(`${l}. This will throw in a future release.`);
  }
  eventSchemas = {
    toolinput: U6,
    toolinputpartial: N6,
    toolresult: q6,
    toolcancelled: A6,
    hostcontextchanged: H6
  };
  static ONE_SHOT_EVENTS = /* @__PURE__ */ new Set([
    "toolinput",
    "toolinputpartial",
    "toolresult",
    "toolcancelled"
  ]);
  _everHadListener = /* @__PURE__ */ new Set();
  _assertHandlerTiming(r) {
    if (!z0.ONE_SHOT_EVENTS.has(r) || this._everHadListener.has(r) || (this._everHadListener.add(r), !this._initializedSent)) return;
    let l = `[ext-apps] "${String(r)}" handler registered after connect() completed the ui/initialize handshake. The host may have already sent this notification. Register handlers before calling app.connect().`;
    if (this.options?.strict) throw Error(l);
    console.warn(l);
  }
  setEventHandler(r, l) {
    l && this._assertHandlerTiming(r), super.setEventHandler(r, l);
  }
  addEventListener(r, l) {
    this._assertHandlerTiming(r), super.addEventListener(r, l);
  }
  onEventDispatch(r, l) {
    r === "hostcontextchanged" && (this._hostContext = {
      ...this._hostContext,
      ...l
    });
  }
  constructor(r, l = {}, s = { autoResize: !0 }) {
    super(s), this._appInfo = r, this._capabilities = l, this.options = s, s.allowUnsafeEval || ht({ jitless: !0 }), this.setRequestHandler(Lu, (i) => (console.log("Received ping:", i.params), {})), this.setEventHandler("hostcontextchanged", void 0);
  }
  registerCapabilities(r) {
    if (this.transport) throw Error("Cannot register capabilities after transport is established");
    this._capabilities = _6(this._capabilities, r);
  }
  registerTool(r, l, s) {
    if (this._registeredTools[r]) throw Error(`Tool ${r} is already registered`);
    let i = this, u = () => {
      i._initializedSent && i._capabilities.tools?.listChanged && i.sendToolListChanged();
    }, d = l.inputSchema !== void 0, h = {
      title: l.title,
      description: l.description,
      inputSchema: l.inputSchema,
      outputSchema: l.outputSchema,
      annotations: l.annotations,
      _meta: l._meta,
      enabled: !0,
      enable() {
        this.enabled = !0, u();
      },
      disable() {
        this.enabled = !1, u();
      },
      update(w) {
        Object.assign(this, w), u();
      },
      remove() {
        i._registeredTools[r] === h && (delete i._registeredTools[r], u());
      },
      handler: async (w, v) => {
        if (!h.enabled) throw Error(`Tool ${r} is disabled`);
        let b;
        if (d) {
          let $ = h.inputSchema;
          b = await s($ ? await Yg($, w ?? {}, `Invalid input for tool ${r}: `) : w ?? {}, v);
        } else b = await s(v);
        return h.outputSchema && !b.isError && (b.structuredContent = await Yg(h.outputSchema, b.structuredContent, `Invalid output for tool ${r}: `)), b;
      }
    };
    return this._registeredTools[r] = h, !this._capabilities.tools && !this.transport && this.registerCapabilities({ tools: { listChanged: !0 } }), this.ensureToolHandlersInitialized(), u(), h;
  }
  _toolHandlersInitialized = !1;
  ensureToolHandlersInitialized() {
    this._toolHandlersInitialized || (this._toolHandlersInitialized = !0, this.oncalltool = async (r, l) => {
      let s = this._registeredTools[r.name];
      if (!s) throw Error(`Tool ${r.name} not found`);
      return s.handler(r.arguments, l);
    }, this.onlisttools = async (r, l) => ({ tools: await Promise.all(Object.entries(this._registeredTools).filter(([s, i]) => i.enabled).map(async ([s, i]) => {
      let u = {
        name: s,
        title: i.title,
        description: i.description,
        inputSchema: i.inputSchema ? await Gg(i.inputSchema, "input") : {
          type: "object",
          properties: {}
        }
      };
      return i.outputSchema && (u.outputSchema = await Gg(i.outputSchema, "output")), i.annotations && (u.annotations = i.annotations), i._meta && (u._meta = i._meta), u;
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
    this.warnIfRequestHandlerReplaced("onteardown", this._onteardown, r), this._onteardown = r, this.replaceRequestHandler(Z6, (l, s) => {
      if (!this._onteardown) throw Error("No onteardown handler set");
      return this._onteardown(l.params, s);
    });
  }
  _oncalltool;
  get oncalltool() {
    return this._oncalltool;
  }
  set oncalltool(r) {
    this.warnIfRequestHandlerReplaced("oncalltool", this._oncalltool, r), this._oncalltool = r, this.replaceRequestHandler(g0, (l, s) => {
      if (!this._oncalltool) throw Error("No oncalltool handler set");
      return this._oncalltool(l.params, s);
    });
  }
  _onlisttools;
  get onlisttools() {
    return this._onlisttools;
  }
  set onlisttools(r) {
    this.warnIfRequestHandlerReplaced("onlisttools", this._onlisttools, r), this._onlisttools = r, this.replaceRequestHandler(h0, (l, s) => {
      if (!this._onlisttools) throw Error("No onlisttools handler set");
      return this._onlisttools(l.params, s);
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
  async callServerTool(r, l) {
    if (this._assertInitialized("callServerTool"), typeof r == "string") throw Error(`callServerTool() expects an object as its first argument, but received a string ("${r}"). Did you mean: callServerTool({ name: "${r}", arguments: { ... } })?`);
    return await this.request({
      method: "tools/call",
      params: r
    }, Bu, {
      onprogress: () => {
      },
      resetTimeoutOnProgress: !0,
      ...l
    });
  }
  async readServerResource(r, l) {
    return this._assertInitialized("readServerResource"), await this.request({
      method: "resources/read",
      params: r
    }, m0, l);
  }
  async listServerResources(r, l) {
    return this._assertInitialized("listServerResources"), await this.request({
      method: "resources/list",
      params: r
    }, d0, l);
  }
  async createSamplingMessage(r, l) {
    this._assertInitialized("createSamplingMessage");
    let s = r.tools ? _0 : b0;
    return await this.request({
      method: "sampling/createMessage",
      params: r
    }, s, l);
  }
  sendMessage(r, l) {
    return this._assertInitialized("sendMessage"), this.request({
      method: "ui/message",
      params: r
    }, x6, l);
  }
  sendLog(r) {
    return this.notification({
      method: "notifications/message",
      params: r
    });
  }
  updateModelContext(r, l) {
    return this._assertInitialized("updateModelContext"), this.request({
      method: "ui/update-model-context",
      params: r
    }, sm, l);
  }
  openLink(r, l) {
    return this._assertInitialized("openLink"), this.request({
      method: "ui/open-link",
      params: r
    }, E6, l);
  }
  sendOpenLink = this.openLink;
  downloadFile(r, l) {
    return this._assertInitialized("downloadFile"), this.request({
      method: "ui/download-file",
      params: r
    }, O6, l);
  }
  requestTeardown(r = {}) {
    return this.notification({
      method: "ui/notifications/request-teardown",
      params: r
    });
  }
  requestDisplayMode(r, l) {
    return this._assertInitialized("requestDisplayMode"), this.request({
      method: "ui/request-display-mode",
      params: r
    }, R6, l);
  }
  sendSizeChanged(r) {
    return this.notification({
      method: "ui/notifications/size-changed",
      params: r
    });
  }
  setupSizeChangedNotifications() {
    let r = !1, l = 0, s = 0, i = () => {
      r || (r = !0, requestAnimationFrame(() => {
        r = !1;
        let d = document.documentElement, h = d.style.height;
        d.style.height = "max-content";
        let w = Math.ceil(d.getBoundingClientRect().height);
        d.style.height = h;
        let v = Math.ceil(window.innerWidth);
        (v !== l || w !== s) && (l = v, s = w, this.sendSizeChanged({
          width: v,
          height: w
        }));
      }));
    };
    i();
    let u = new ResizeObserver(i);
    return u.observe(document.documentElement), u.observe(document.body), () => u.disconnect();
  }
  async connect(r = new z6(window.parent, window.parent), l) {
    if (this.transport) throw Error("App is already connected. Call close() before connecting again.");
    this._initializedSent = !1, await super.connect(r);
    try {
      let s = await this.request({
        method: "ui/initialize",
        params: {
          appCapabilities: this._capabilities,
          appInfo: this._appInfo,
          protocolVersion: $6
        }
      }, L6, l);
      if (s === void 0) throw Error(`Server sent invalid initialize result: ${s}`);
      this._hostCapabilities = s.hostCapabilities, this._hostInfo = s.hostInfo, this._hostContext = s.hostContext, await this.notification({ method: "ui/notifications/initialized" }), this._initializedSent = !0, this.options?.autoResize && this.setupSizeChangedNotifications();
    } catch (s) {
      throw this.close(), s;
    }
  }
}, Y6 = 15e3, Ar;
function w0(n = {}) {
  const r = n.targetWindow ?? (typeof window < "u" && window.parent !== window ? window.parent : void 0), l = n.targetOrigin ?? "*", s = /* @__PURE__ */ new Map();
  let i = 1;
  function u(h) {
    if (!F6(h.data)) return;
    const w = h.data;
    if ("id" in w && w.id !== void 0 && ("result" in w || "error" in w)) {
      const v = s.get(w.id);
      if (!v) return;
      if (s.delete(w.id), clearTimeout(v.timeout), w.error) {
        v.reject(new Error(w.error.message));
        return;
      }
      v.resolve(w.result ?? null);
      return;
    }
    "method" in w && typeof w.method == "string" && n.onNotification?.(w);
  }
  typeof window < "u" && window.addEventListener("message", u);
  function d(h) {
    r?.postMessage(h, l);
  }
  return {
    initialize(h = null) {
      return this.request("ui/initialize", h);
    },
    callTool(h, w = null) {
      return this.request("tools/call", {
        name: h,
        arguments: w
      });
    },
    request(h, w = null) {
      if (!r) return Promise.reject(/* @__PURE__ */ new Error("No MCP Apps host window is available"));
      const v = `${n.source ?? "micro-app"}-${i++}`, b = setTimeout(() => {
        const y = s.get(v);
        y && (s.delete(v), y.reject(/* @__PURE__ */ new Error(`MCP request timed out: ${h}`)));
      }, n.timeoutMs ?? Y6), $ = new Promise((y, Z) => {
        s.set(v, {
          resolve: y,
          reject: Z,
          timeout: b
        });
      });
      return d({
        jsonrpc: "2.0",
        id: v,
        method: h,
        params: w
      }), $;
    },
    notify(h, w = null) {
      r && d({
        jsonrpc: "2.0",
        method: h,
        params: w
      });
    },
    dispose() {
      typeof window < "u" && window.removeEventListener("message", u);
      for (const h of s.values())
        clearTimeout(h.timeout), h.reject(/* @__PURE__ */ new Error("MCP bridge disposed"));
      s.clear();
    }
  };
}
function Q6(n) {
  return Ar?.dispose(), Ar = w0(n), Ar;
}
function T0() {
  return Ar ??= w0(), Ar;
}
function V6(n, r) {
  T0().notify(n, r);
}
function J6(n, r) {
  return T0().callTool(n, r);
}
async function k0(n) {
  if (typeof window > "u" || window.parent === window) return Qg("standalone");
  typeof window < "u" && (window.__MCP_RUNTIME_CONNECTED__ = !0);
  try {
    const r = new G6({
      name: n.name,
      version: n.version
    }, n.capabilities ?? {}, {
      autoResize: !0,
      strict: !1,
      ...n.appOptions
    });
    return K6(r, n.handlers), await W6(r.connect(), n.timeoutMs ?? 1e4, "MCP Apps host connection timed out"), {
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
      async requestHostCompletion(l, s) {
        return E0((await r.createSamplingMessage({
          messages: [{
            role: "user",
            content: {
              type: "text",
              text: l
            }
          }],
          maxTokens: 320,
          systemPrompt: s
        })).content);
      },
      createSamplingMessage(l) {
        return r.createSamplingMessage(l);
      },
      sendHostMessage(l, s) {
        return r.sendMessage(X6(l, s));
      },
      sendMessage(l) {
        return r.sendMessage(l);
      },
      async sendLog(l, s) {
        await r.sendLog({
          level: l,
          data: s
        });
      },
      updateModelContext(l) {
        return r.updateModelContext(P6(l));
      },
      callServerTool(l, s = {}) {
        return r.callServerTool({
          name: l,
          arguments: s
        });
      },
      callServerToolWithParams(l) {
        return r.callServerTool(l);
      },
      readServerResource(l) {
        return r.readServerResource(typeof l == "string" ? { uri: l } : l);
      },
      listServerResources(l) {
        return r.listServerResources(l);
      },
      openLink(l) {
        return r.openLink(typeof l == "string" ? { url: l } : l);
      },
      downloadFile(l) {
        return r.downloadFile(l);
      },
      requestDisplayMode(l) {
        return r.requestDisplayMode(typeof l == "string" ? { mode: l } : l);
      },
      requestTeardown() {
        return r.requestTeardown();
      },
      sendSizeChanged(l) {
        return r.sendSizeChanged(l);
      },
      async dispose() {
        await r.close?.();
      }
    };
  } catch (r) {
    return Qg("error", r);
  }
}
function Qg(n, r) {
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
function X6(n, r) {
  return {
    role: "user",
    content: [{
      type: "text",
      text: r ? `${r}

${n}` : n
    }]
  };
}
function P6(n) {
  return typeof n != "string" ? n : { content: [{
    type: "text",
    text: n
  }] };
}
function K6(n, r = {}) {
  n.ontoolinput = r.onToolInput, n.ontoolinputpartial = r.onToolInputPartial, n.ontoolresult = r.onToolResult, n.ontoolcancelled = r.onToolCancelled, n.onhostcontextchanged = r.onHostContextChanged, r.onTeardown && (n.onteardown = async () => r.onTeardown?.() ?? {});
}
async function W6(n, r, l) {
  let s;
  try {
    return await Promise.race([n, new Promise((i, u) => {
      s = setTimeout(() => u(new Error(l)), r);
    })]);
  } finally {
    s && clearTimeout(s);
  }
}
function E0(n) {
  return typeof n == "string" ? n : n ? Array.isArray(n) ? n.map((r) => E0(r)).filter(Boolean).join(`
`) : typeof n == "object" && "text" in n && typeof n.text == "string" ? n.text : "" : "";
}
function F6(n) {
  return !!(n && typeof n == "object" && "jsonrpc" in n && n.jsonrpc === "2.0");
}
function ek(n) {
  return n instanceof Error ? {
    name: n.name,
    message: n.message,
    stack: n.stack
  } : { message: typeof n == "string" ? n : "Unknown runtime error" };
}
function Vg({ app: n, error: r, logger: l, source: s = "runtime", metadata: i }) {
  const u = {
    level: "error",
    message: `${n.name} failed in ${s}`,
    appId: n.id,
    source: s,
    error: ek(r),
    metadata: i,
    timestamp: Date.now()
  };
  return Nl.emit(Al.APP_ERROR, n.id, u), l?.log(u), u;
}
function O0(n = x0()) {
  return typeof n?.modelContext?.registerTool == "function";
}
function mf(n, r = {}, l = x0()) {
  if (!O0(l)) return {
    supported: !1,
    unregister: () => {
    }
  };
  const s = r.signal ? void 0 : new AbortController(), i = r.signal ?? s?.signal;
  try {
    return l.modelContext.registerTool(n, {
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
function x0() {
  return typeof document > "u" ? void 0 : document;
}
var tk = /* @__PURE__ */ new Map();
function nk(n, r, l = {}) {
  const s = customElements.get(n);
  if (s) return s;
  class i extends HTMLElement {
    static observedAttributes = l.observedAttributes ?? [];
    cleanup;
    async connectedCallback() {
      const d = this.createContext();
      console.log(`[Platform SDK] connectedCallback triggered for: ${d.app.id}`);
      let h = null;
      const w = (typeof window < "u" ? window.__MICRO_APP_CONTEXT__ : null)?.app?.capabilities?.aiNative === !0, v = n.toLowerCase(), b = tk.get(v);
      if (typeof window < "u" && b && b.mcp && b.tools) for (const [$, y] of Object.entries(b.tools)) try {
        mf({
          name: $,
          description: y.description,
          inputSchema: y.inputSchema,
          execute: y.execute
        });
      } catch (Z) {
        console.warn(`[Platform SDK] Failed to register WebMCP tool ${$}:`, Z);
      }
      typeof window < "u" && window.parent !== window && !w && !window.__MCP_RUNTIME_CONNECTED__ && (!b || b.mcp === !0) && (console.log(`[Platform SDK] Auto-connecting to MCP runtime for: ${d.app.id}...`), h = k0({
        name: b?.name ?? d.app.name,
        version: b?.version ?? d.app.version ?? "1.0.0",
        capabilities: b?.capabilities ?? {
          sampling: {},
          serverTools: {},
          modelContext: {}
        },
        handlers: b?.handlers ?? {
          onToolInput($) {
            console.log("[Platform SDK] MCP Tool input received:", $);
          },
          onToolResult($) {
            console.log("[Platform SDK] MCP Tool result received:", $);
          },
          async onTeardown() {
            return console.log("[Platform SDK] MCP Teardown event received"), { appId: b?.id ?? d.app.id };
          }
        }
      }).then(($) => (console.log(`[Platform SDK] connectOfficialMcpAppRuntime finished for: ${d.app.id}. Status:`, $.status), $)).catch(($) => (console.warn(`[Platform SDK] Auto-connecting to MCP runtime for ${d.app.id} failed:`, $), null)));
      try {
        const $ = await r.mount(this, d);
        this.cleanup = typeof $ == "function" ? $ : void 0, await ik(), h && await h, this.dispatchEvent(new CustomEvent("micro-app:ready", {
          bubbles: !0,
          composed: !0,
          detail: {
            appId: d.app.id,
            tagName: n,
            timestamp: Date.now()
          }
        })), Nl.emit(Al.APP_LOADED, d.app.id, { tagName: n });
      } catch ($) {
        throw Vg({
          app: d.app,
          error: $,
          logger: l.logger,
          source: "micro-app-connected-callback",
          metadata: { tagName: n }
        }), $;
      }
    }
    disconnectedCallback() {
      window.setTimeout(() => {
        try {
          this.cleanup?.(), r.unmount?.(this), Nl.emit(Al.APP_UNLOADED, this.getAttribute("data-app-name") ?? n, { tagName: n });
        } catch (d) {
          Vg({
            app: {
              id: this.getAttribute("data-app-name") ?? n,
              name: this.getAttribute("data-app-name") ?? n
            },
            error: d,
            logger: l.logger,
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
function ik() {
  return new Promise((n) => {
    requestAnimationFrame(() => requestAnimationFrame(() => n()));
  });
}
function xl(n, r, l) {
  const s = Al[n];
  Nl.emit(s, r, l), V6("ui/notification", {
    type: s,
    source: r,
    payload: ak(l),
    timestamp: Date.now()
  });
}
function ak(n) {
  return n === void 0 ? null : JSON.parse(JSON.stringify(n));
}
var rk = /* @__PURE__ */ hn(((n) => {
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(i, u, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), u.key !== void 0 && (h = "" + u.key), "key" in u) {
      d = {};
      for (var w in u) w !== "key" && (d[w] = u[w]);
    } else d = u;
    return u = d.ref, {
      $$typeof: r,
      type: i,
      key: h,
      ref: u !== void 0 ? u : null,
      props: d
    };
  }
  n.jsx = s, n.jsxs = s;
})), ok = /* @__PURE__ */ hn(((n, r) => {
  r.exports = rk();
})), Y = ok(), U0 = [
  {
    app: "Analytics",
    label: "Checkout conversion",
    value: "-2.0%",
    severity: "high",
    detail: "Dip isolated to billing checkout and enterprise renewal cohorts."
  },
  {
    app: "Admin",
    label: "billing-autopay",
    value: "Disabled",
    severity: "high",
    detail: "Feature flag was turned off for the same tenant group seeing the dip."
  },
  {
    app: "Billing",
    label: "Enterprise invoices",
    value: "1 overdue",
    severity: "medium",
    detail: "One strategic account has payment friction and needs owner follow-up."
  },
  {
    app: "Customer",
    label: "Renewal risk",
    value: "2 accounts",
    severity: "medium",
    detail: "Customer health is softening for affected enterprise accounts."
  }
], lk = [
  {
    app: "Analytics",
    action: "Confirm the dip is concentrated in billing checkout, not top-of-funnel traffic.",
    status: "done"
  },
  {
    app: "Admin",
    action: "Re-enable billing-autopay behind a guarded 25% rollout.",
    status: "next"
  },
  {
    app: "Billing",
    action: "Retry or manually review the overdue enterprise invoice.",
    status: "next"
  },
  {
    app: "Customer",
    action: "Notify owners for the two renewal-risk accounts and monitor 24-hour recovery.",
    status: "watch"
  }
], Ur = U0.map((n) => `${n.app}: ${n.label} is ${n.value} (${n.detail})`).join(" "), uf = [
  "Billing conversion dipped because Analytics shows a 2% checkout conversion drop in the billing path while Admin has billing-autopay disabled for the affected tenant group.",
  "Billing adds one overdue enterprise invoice, and Customer adds two renewal-risk accounts, so the main cause is likely autopay friction with some enterprise payment follow-through risk.",
  "Recommended action: re-enable billing-autopay through a guarded 25% rollout, retry or review the overdue invoice, notify account owners, and monitor checkout recovery for 24 hours."
].join(" "), uk = [
  "Why did billing conversion dip?",
  "Create a cross-app recovery plan",
  "What should I check before re-enabling autopay?"
];
function ck({ apiBaseUrl: n } = {}) {
  const [r, l] = (0, vt.useState)([{
    role: "assistant",
    text: "I am watching Analytics, Billing, Admin, and Customer signals together. Ask about the conversion dip or run the recovery plan."
  }]), [s, i] = (0, vt.useState)("Why did billing conversion dip?"), [u, d] = (0, vt.useState)("checking"), [h, w] = (0, vt.useState)("checking"), [v, b] = (0, vt.useState)("checking"), [$, y] = (0, vt.useState)("idle"), [Z, q] = (0, vt.useState)("deterministic-fallback"), [W, te] = (0, vt.useState)(!1), [ne, K] = (0, vt.useState)(!1), le = (0, vt.useRef)(), ue = (0, vt.useRef)(Z);
  (0, vt.useEffect)(() => {
    ue.current = Z;
  }, [Z]), (0, vt.useEffect)(() => {
    const Q = Q6({ source: "ai-assistant" });
    return Q.notify("ui/ready", {
      appId: "ai-assistant",
      tools: [
        "assistant.summarizeCase",
        "assistant.planWorkflow",
        "assistant.invokeTool"
      ]
    }), () => Q.dispose();
  }, []), (0, vt.useEffect)(() => {
    let Q = !1;
    const J = () => {
      Q || b(window.openai?.sendFollowUpMessage ? "connected" : "unavailable");
    }, ce = window.setInterval(J, 250);
    return window.addEventListener("openai:set_globals", J), J(), () => {
      Q = !0, window.clearInterval(ce), window.removeEventListener("openai:set_globals", J);
    };
  }, []), (0, vt.useEffect)(() => {
    let Q = !1;
    return k0({
      name: "AI Assistant App",
      version: "0.8.0",
      capabilities: {
        sampling: {},
        serverTools: {},
        modelContext: {}
      },
      handlers: {
        onToolInput() {
          Q || w("connected");
        },
        onToolInputPartial() {
          Q || w("connected");
        },
        onToolResult(J) {
          if (Q) return;
          w("connected");
          const ce = Nr(J);
          !ce || ce.includes("ready as an MCP App") || (q("ai-native-mcp-tool"), l((at) => [...at, {
            role: "assistant",
            text: oi("AI Native MCP tool", ce),
            runtime: "ai-native-mcp-tool"
          }]));
        },
        onToolCancelled() {
          Q || w("unavailable");
        },
        onHostContextChanged() {
          Q || w("connected");
        },
        onTeardown() {
          return xl("MCP_RESOURCE_REQUESTED", "ai-assistant", {
            lifecycle: "teardown",
            runtime: "mcp-apps"
          }), {
            appId: "ai-assistant",
            latestRuntime: ue.current
          };
        }
      }
    }).then((J) => {
      if (Q) {
        J.dispose();
        return;
      }
      le.current = J, w(J.status === "connected" ? "connected" : J.status === "standalone" ? "standalone" : "unavailable");
    }), () => {
      Q = !0, le.current?.dispose();
    };
  }, []), (0, vt.useEffect)(() => {
    const Q = window.LanguageModel;
    if (!Q) {
      d("unsupported");
      return;
    }
    Q.availability({ languages: ["en"] }).then(d).catch(() => d("unavailable"));
  }, []), (0, vt.useEffect)(() => {
    const Q = mf({
      name: "assistant_summarize_platform_health",
      description: "Summarize the currently visible Open Micro Platform dashboard health signals and suggest the next action.",
      inputSchema: {
        type: "object",
        properties: { question: {
          type: "string",
          description: "The user question or investigation goal from the browser agent."
        } }
      },
      execute: async ({ question: ce }) => ({
        source: "ai-assistant",
        question: ce ?? "Summarize platform health",
        summary: uf,
        resources: [
          "billing.invoice",
          "analytics.funnel",
          "admin.tenant"
        ]
      }),
      readOnlyHint: !0
    }), J = mf({
      name: "assistant_list_mcp_capabilities",
      description: "List the MCP Apps capabilities exposed by the AI Assistant micro app.",
      inputSchema: {
        type: "object",
        properties: { tool: {
          type: "string",
          description: "Optional capability name to inspect."
        } }
      },
      execute: async ({ tool: ce }) => ({
        selected: ce ?? null,
        tools: [
          "assistant.summarizeCase",
          "assistant.planWorkflow",
          "assistant.invokeTool"
        ],
        resources: [
          "knowledge.article",
          "customer.profile",
          "billing.invoice"
        ],
        prompts: ["support-triage", "release-risk-review"]
      }),
      readOnlyHint: !0
    });
    return te(Q.supported || J.supported || O0()), () => {
      Q.unregister(), J.unregister();
    };
  }, []);
  async function it(Q) {
    Q.preventDefault();
    const J = s.trim();
    if (J) {
      K(!0), xl("MCP_TOOL_CALL_REQUESTED", "ai-assistant", {
        tool: "assistant.summarizeCase",
        prompt: J
      }), J6("assistant_summarizeCase", { prompt: J }).catch(() => {
      }), window.openai?.setWidgetState?.({
        lastPrompt: J,
        lastAction: "assistant_summarizeCase",
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
      try {
        const ce = await Ke(J, n);
        q(ce.runtime), l((at) => [
          ...at,
          {
            role: "user",
            text: J
          },
          {
            role: "assistant",
            text: ce.text,
            runtime: ce.runtime
          }
        ]), xl("MCP_TOOL_CALL_COMPLETED", "ai-assistant", {
          tool: "assistant.summarizeCase",
          resources: [
            "billing.invoice",
            "analytics.funnel",
            "admin.tenant"
          ],
          runtime: ce.runtime,
          provider: ce.provider
        }), i("");
      } catch (ce) {
        const at = oi("Deterministic fallback", uf);
        q("deterministic-fallback"), l((Lt) => [
          ...Lt,
          {
            role: "user",
            text: J
          },
          {
            role: "assistant",
            text: at,
            runtime: "deterministic-fallback"
          }
        ]), xl("MCP_TOOL_CALL_FAILED", "ai-assistant", {
          tool: "assistant.summarizeCase",
          error: ce instanceof Error ? ce.message : String(ce)
        });
      } finally {
        K(!1);
      }
    }
  }
  async function Ke(Q, J) {
    const ce = le.current;
    if (ce?.status === "connected") {
      try {
        await ce.updateModelContext(`Open Micro Platform context: ${Ur}`), await ce.sendLog("info", {
          appId: "ai-assistant",
          action: "ask",
          runtime: "ai-native-host-model"
        });
        const We = await ce.requestHostCompletion([
          "Answer this as the Open Micro Platform AI Assistant.",
          "Be concise, operational, and use the known cross-app context.",
          `Known platform context: ${Ur}`,
          `User question: ${Q}`
        ].join(`
`), "You are running inside an MCP Apps widget. Use the AI host model to answer from the provided platform context.");
        if (We.trim()) return {
          text: oi("AI Native host model", We.trim()),
          runtime: "ai-native-host-model"
        };
      } catch {
      }
      try {
        if (await ce.updateModelContext(`Open Micro Platform context: ${Ur}`), !pk(await ce.sendHostMessage([
          "Answer this as the Open Micro Platform AI Assistant.",
          "Use the platform context already shared by the widget.",
          `User question: ${Q}`
        ].join(`
`)))) return {
          text: oi("AI Native host message", "I sent this Ask to the AI-native host conversation with the current platform context. The host model response should appear in the chat thread, and the widget kept the same state for follow-up actions."),
          runtime: "ai-native-host-message"
        };
      } catch {
      }
    }
    const at = await sk(Q);
    if (at) return at;
    if (u === "available" && window.LanguageModel) {
      let We;
      try {
        return We = await window.LanguageModel.create(), {
          text: oi("Chrome Built-in AI", await We.prompt([
            "You are the Open Micro Platform AI Assistant.",
            "Answer as a concise platform operator.",
            `Use this known context: ${Ur}`,
            `User question: ${Q}`
          ].join(`
`))),
          runtime: "chrome-built-in-ai"
        };
      } catch {
      } finally {
        We?.destroy?.();
      }
    }
    y("idle");
    const Lt = await fk(Q, J);
    return Lt ? (y("available"), Lt) : (y("unavailable"), {
      text: oi("Deterministic fallback", uf),
      runtime: "deterministic-fallback"
    });
  }
  return /* @__PURE__ */ (0, Y.jsxs)("section", {
    className: "micro-app-container",
    children: [
      /* @__PURE__ */ (0, Y.jsxs)("header", {
        className: "micro-app-header",
        children: [
          /* @__PURE__ */ (0, Y.jsx)("span", { children: "AI Platform" }),
          /* @__PURE__ */ (0, Y.jsx)("h1", { children: "AI Incident Copilot" }),
          /* @__PURE__ */ (0, Y.jsx)("p", { children: "Cross-platform triage that correlates micro app state and returns an actionable workflow." })
        ]
      }),
      /* @__PURE__ */ (0, Y.jsxs)("div", {
        className: "insights",
        children: [
          /* @__PURE__ */ (0, Y.jsxs)("article", { children: [/* @__PURE__ */ (0, Y.jsx)("strong", { children: "4" }), /* @__PURE__ */ (0, Y.jsx)("span", { children: "Apps correlated" })] }),
          /* @__PURE__ */ (0, Y.jsxs)("article", { children: [/* @__PURE__ */ (0, Y.jsx)("strong", { children: "High" }), /* @__PURE__ */ (0, Y.jsx)("span", { children: "Primary signal" })] }),
          /* @__PURE__ */ (0, Y.jsxs)("article", { children: [/* @__PURE__ */ (0, Y.jsx)("strong", { children: "25%" }), /* @__PURE__ */ (0, Y.jsx)("span", { children: "Safe rollout" })] })
        ]
      }),
      /* @__PURE__ */ (0, Y.jsx)("div", {
        className: "signal-board",
        "aria-label": "Cross-platform signals",
        children: U0.map((Q) => /* @__PURE__ */ (0, Y.jsxs)("article", {
          className: `signal-card ${Q.severity}`,
          children: [
            /* @__PURE__ */ (0, Y.jsxs)("div", { children: [/* @__PURE__ */ (0, Y.jsx)("span", { children: Q.app }), /* @__PURE__ */ (0, Y.jsx)("strong", { children: Q.label })] }),
            /* @__PURE__ */ (0, Y.jsx)("b", { children: Q.value }),
            /* @__PURE__ */ (0, Y.jsx)("p", { children: Q.detail })
          ]
        }, `${Q.app}-${Q.label}`))
      }),
      /* @__PURE__ */ (0, Y.jsxs)("div", {
        className: "workflow-panel",
        "aria-label": "Recommended workflow",
        children: [/* @__PURE__ */ (0, Y.jsxs)("div", { children: [/* @__PURE__ */ (0, Y.jsx)("span", { children: "AI-native workflow" }), /* @__PURE__ */ (0, Y.jsx)("strong", { children: "Conversion Recovery Runbook" })] }), /* @__PURE__ */ (0, Y.jsx)("ol", { children: lk.map((Q) => /* @__PURE__ */ (0, Y.jsxs)("li", {
          className: Q.status,
          children: [/* @__PURE__ */ (0, Y.jsx)("span", { children: Q.app }), Q.action]
        }, `${Q.app}-${Q.action}`)) })]
      }),
      /* @__PURE__ */ (0, Y.jsxs)("div", {
        className: "mcp-panel",
        "aria-label": "MCPApps capabilities",
        children: [
          /* @__PURE__ */ (0, Y.jsx)("span", { children: "MCPApps SDK" }),
          /* @__PURE__ */ (0, Y.jsx)("strong", { children: "assistant.summarizeCase" }),
          /* @__PURE__ */ (0, Y.jsx)("p", { children: "Emits shared events, answers inside the widget, and exposes the same capability as an MCP App tool." })
        ]
      }),
      /* @__PURE__ */ (0, Y.jsxs)("div", {
        className: "ai-runtime-grid",
        "aria-label": "AI runtime capabilities",
        children: [
          /* @__PURE__ */ (0, Y.jsxs)("article", { children: [
            /* @__PURE__ */ (0, Y.jsx)("span", { children: "Legacy ChatGPT bridge" }),
            /* @__PURE__ */ (0, Y.jsx)("strong", { children: vk(v) }),
            /* @__PURE__ */ (0, Y.jsx)("p", { children: "Only used when a host exposes the older `window.openai` message API instead of the MCP Apps `ui/message` runtime." })
          ] }),
          /* @__PURE__ */ (0, Y.jsxs)("article", { children: [
            /* @__PURE__ */ (0, Y.jsx)("span", { children: "MCP host AI" }),
            /* @__PURE__ */ (0, Y.jsx)("strong", { children: hk(h) }),
            /* @__PURE__ */ (0, Y.jsx)("p", { children: "When rendered inside Claude, ChatGPT, or another MCP Apps host, asks the host model or sends a host conversation message before local browser fallback." })
          ] }),
          /* @__PURE__ */ (0, Y.jsxs)("article", { children: [
            /* @__PURE__ */ (0, Y.jsx)("span", { children: "Chrome built-in AI" }),
            /* @__PURE__ */ (0, Y.jsx)("strong", { children: yk(u) }),
            /* @__PURE__ */ (0, Y.jsx)("p", { children: "Uses `LanguageModel` locally when Chrome has Gemini Nano available, then falls back without breaking the shell." })
          ] }),
          /* @__PURE__ */ (0, Y.jsxs)("article", { children: [
            /* @__PURE__ */ (0, Y.jsx)("span", { children: "WebMCP tools" }),
            /* @__PURE__ */ (0, Y.jsx)("strong", { children: W ? "Registered" : "Waiting for browser support" }),
            /* @__PURE__ */ (0, Y.jsx)("p", { children: "Registers tab-bound tools with `document.modelContext` when a browser agent exposes WebMCP." })
          ] }),
          /* @__PURE__ */ (0, Y.jsxs)("article", { children: [
            /* @__PURE__ */ (0, Y.jsx)("span", { children: "MCP Apps portability" }),
            /* @__PURE__ */ (0, Y.jsx)("strong", { children: "HTML resource ready" }),
            /* @__PURE__ */ (0, Y.jsx)("p", { children: "This same micro app can render through `/api/mcp/apps/ai-assistant/resource` in an AI host iframe." })
          ] }),
          /* @__PURE__ */ (0, Y.jsxs)("article", { children: [
            /* @__PURE__ */ (0, Y.jsx)("span", { children: "Server API chat" }),
            /* @__PURE__ */ (0, Y.jsx)("strong", { children: gk($) }),
            /* @__PURE__ */ (0, Y.jsx)("p", { children: "When host and browser AI are unavailable, Ask calls the shell or MCP server chat API and still returns an operational answer." })
          ] }),
          /* @__PURE__ */ (0, Y.jsxs)("article", { children: [
            /* @__PURE__ */ (0, Y.jsx)("span", { children: "Last response" }),
            /* @__PURE__ */ (0, Y.jsx)("strong", { children: Jg(Z) }),
            /* @__PURE__ */ (0, Y.jsx)("p", { children: "Shows which runtime handled the latest user question across AI-native, browser-native, and server paths." })
          ] })
        ]
      }),
      /* @__PURE__ */ (0, Y.jsx)("div", {
        className: "thread",
        children: r.map((Q, J) => /* @__PURE__ */ (0, Y.jsxs)("p", {
          className: Q.role,
          children: [Q.runtime && /* @__PURE__ */ (0, Y.jsx)("span", {
            className: "runtime-badge",
            children: Jg(Q.runtime)
          }), Q.text]
        }, `${Q.role}-${J}`))
      }),
      /* @__PURE__ */ (0, Y.jsx)("div", {
        className: "prompt-strip",
        "aria-label": "Demo prompts",
        children: uk.map((Q) => /* @__PURE__ */ (0, Y.jsx)("button", {
          type: "button",
          onClick: () => i(Q),
          children: Q
        }, Q))
      }),
      /* @__PURE__ */ (0, Y.jsxs)("form", {
        className: "composer",
        onSubmit: it,
        children: [/* @__PURE__ */ (0, Y.jsx)("input", {
          value: s,
          onChange: (Q) => i(Q.target.value),
          "aria-label": "Assistant prompt"
        }), /* @__PURE__ */ (0, Y.jsx)("button", {
          type: "submit",
          disabled: ne,
          children: ne ? "Thinking" : "Ask"
        })]
      })
    ]
  });
}
async function sk(n) {
  const r = await mk();
  if (r?.sendFollowUpMessage)
    try {
      return await r.sendFollowUpMessage({
        prompt: `Answer inside the conversation using the AI Assistant context: ${n}`,
        scrollToBottom: !0
      }), {
        text: oi("Legacy ChatGPT bridge", "I sent this question to the ChatGPT host conversation. The host response will appear in the chat thread."),
        runtime: "ai-native-host-message"
      };
    } catch {
      return;
    }
}
async function fk(n, r) {
  const l = dk(r);
  try {
    const s = await fetch(l, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        prompt: n,
        context: Ur,
        appId: "ai-assistant"
      })
    });
    if (!s.ok) return;
    const i = await s.json();
    return i.text ? {
      text: oi(i.provider ? `Server API chat (${i.provider})` : "Server API chat", i.text),
      runtime: i.runtime ?? "server-api-chat",
      provider: i.provider
    } : void 0;
  } catch {
    return;
  }
}
function dk(n) {
  const r = window.__MICRO_APP_CONTEXT__?.resourceOrigin ?? window.__MICRO_APP_CONTEXT__?.shellOrigin, l = n ?? r ?? window.location.origin;
  return new URL("/api/ai-assistant/chat", l).toString();
}
function oi(n, r) {
  return `[${n}] ${r}`;
}
async function mk(n = 1500) {
  return window.openai?.sendFollowUpMessage ? window.openai : new Promise((r) => {
    const l = Date.now() + n;
    let s, i;
    const u = () => {
      s && window.clearInterval(s), i && window.clearTimeout(i), window.removeEventListener("openai:set_globals", h);
    }, d = () => {
      const w = window.openai?.sendFollowUpMessage ? window.openai : void 0;
      !w && Date.now() < l || (u(), r(w));
    }, h = (w) => {
      const v = w.detail?.openai;
      v?.sendFollowUpMessage && !window.openai && (window.openai = v), d();
    };
    window.addEventListener("openai:set_globals", h), s = window.setInterval(d, 50), i = window.setTimeout(d, n);
  });
}
function Nr(n) {
  if (!n) return;
  if (typeof n == "string") return n;
  if (Array.isArray(n)) return n.map(Nr).filter(Boolean).join(`
`) || void 0;
  if (typeof n != "object") return;
  const r = n;
  if (typeof r.text == "string") return r.text;
  if (typeof r.result == "string") return r.result;
  if (typeof r.structuredContent == "object") {
    const l = r.structuredContent;
    if (typeof l.result == "string") return l.result;
  }
  if (Array.isArray(r.content)) return Nr(r.content);
  if (typeof r.mcp_tool_result == "object") return Nr(r.mcp_tool_result);
  if (typeof r.call_tool_result == "object") return Nr(r.call_tool_result);
}
function pk(n) {
  return !!(n && typeof n == "object" && n.isError === !0);
}
function vk(n) {
  return {
    checking: "Checking",
    connected: "Legacy bridge connected",
    unavailable: "Not exposed"
  }[n];
}
function hk(n) {
  return {
    checking: "Checking",
    connected: "Host model connected",
    standalone: "Standalone mode",
    unavailable: "Host model unavailable"
  }[n];
}
function gk(n) {
  return {
    idle: "Ready on demand",
    available: "API answered",
    unavailable: "Unavailable"
  }[n];
}
function Jg(n) {
  return {
    "ai-native-mcp-tool": "AI Native MCP tool",
    "ai-native-host-model": "AI Native host model",
    "ai-native-host-message": "AI Native host message",
    "chrome-built-in-ai": "Chrome Built-in AI",
    "server-api-chat": "Server API chat",
    "deterministic-fallback": "Deterministic fallback"
  }[n];
}
function yk(n) {
  return {
    available: "Available",
    checking: "Checking",
    downloadable: "Model downloadable",
    downloading: "Model downloading",
    unavailable: "Unavailable",
    unsupported: "Not exposed"
  }[n];
}
var Gk = nk("micro-ai-assistant-app", { mount(n, r) {
  const l = oz.createRoot(n);
  return l.render(/* @__PURE__ */ (0, Y.jsx)(ck, { apiBaseUrl: r.shellOrigin })), () => l.unmount();
} });
export {
  Gk as MicroAiAssistantApp
};
