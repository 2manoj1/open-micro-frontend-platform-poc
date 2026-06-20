var q1 = Object.create, Ln = Object.defineProperty, B1 = Object.getOwnPropertyDescriptor, Y1 = Object.getOwnPropertyNames, G1 = Object.getPrototypeOf, Q1 = Object.prototype.hasOwnProperty, Hl = (f, g) => () => (g || (f((g = { exports: {} }).exports, g), f = null), g.exports), Ty = (f, g) => {
  let _ = {};
  for (var E in f)
    Ln(_, E, {
      get: f[E],
      enumerable: !0
    });
  return g || Ln(_, Symbol.toStringTag, { value: "Module" }), _;
}, X1 = (f, g, _, E) => {
  if (g && typeof g == "object" || typeof g == "function")
    for (var y = Y1(g), J = 0, Z = y.length, Q; J < Z; J++)
      Q = y[J], !Q1.call(f, Q) && Q !== _ && Ln(f, Q, {
        get: ((B) => g[B]).bind(null, Q),
        enumerable: !(E = B1(g, Q)) || E.enumerable
      });
  return f;
}, yd = (f, g, _) => (_ = f != null ? q1(G1(f)) : {}, X1(g || !f || !f.__esModule ? Ln(_, "default", {
  value: f,
  enumerable: !0
}) : _, f)), Ey = /* @__PURE__ */ ((f) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(f, { get: (g, _) => (typeof require < "u" ? require : g)[_] }) : f)(function(f) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Calling `require` for "' + f + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), x1 = /* @__PURE__ */ Hl(((f) => {
  var g = /* @__PURE__ */ Symbol.for("react.transitional.element"), _ = /* @__PURE__ */ Symbol.for("react.portal"), E = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), J = /* @__PURE__ */ Symbol.for("react.profiler"), Z = /* @__PURE__ */ Symbol.for("react.consumer"), Q = /* @__PURE__ */ Symbol.for("react.context"), B = /* @__PURE__ */ Symbol.for("react.forward_ref"), C = /* @__PURE__ */ Symbol.for("react.suspense"), z = /* @__PURE__ */ Symbol.for("react.memo"), L = /* @__PURE__ */ Symbol.for("react.lazy"), N = /* @__PURE__ */ Symbol.for("react.activity"), Ut = Symbol.iterator;
  function Ot(d) {
    return d === null || typeof d != "object" ? null : (d = Ut && d[Ut] || d["@@iterator"], typeof d == "function" ? d : null);
  }
  var Qt = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, xt = Object.assign, Tl = {};
  function Xt(d, T, O) {
    this.props = d, this.context = T, this.refs = Tl, this.updater = O || Qt;
  }
  Xt.prototype.isReactComponent = {}, Xt.prototype.setState = function(d, T) {
    if (typeof d != "object" && typeof d != "function" && d != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, d, T, "setState");
  }, Xt.prototype.forceUpdate = function(d) {
    this.updater.enqueueForceUpdate(this, d, "forceUpdate");
  };
  function sl() {
  }
  sl.prototype = Xt.prototype;
  function St(d, T, O) {
    this.props = d, this.context = T, this.refs = Tl, this.updater = O || Qt;
  }
  var It = St.prototype = new sl();
  It.constructor = St, xt(It, Xt.prototype), It.isPureReactComponent = !0;
  var Lt = Array.isArray;
  function x() {
  }
  var j = {
    H: null,
    A: null,
    T: null,
    S: null
  }, w = Object.prototype.hasOwnProperty;
  function Nt(d, T, O) {
    var q = O.ref;
    return {
      $$typeof: g,
      type: d,
      key: T,
      ref: q !== void 0 ? q : null,
      props: O
    };
  }
  function ol(d, T) {
    return Nt(d.type, T, d.props);
  }
  function Tt(d) {
    return typeof d == "object" && d !== null && d.$$typeof === g;
  }
  function Ol(d) {
    var T = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + d.replace(/[=:]/g, function(O) {
      return T[O];
    });
  }
  var La = /\/+/g;
  function El(d, T) {
    return typeof d == "object" && d !== null && d.key != null ? Ol("" + d.key) : T.toString(36);
  }
  function U(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (typeof d.status == "string" ? d.then(x, x) : (d.status = "pending", d.then(function(T) {
          d.status === "pending" && (d.status = "fulfilled", d.value = T);
        }, function(T) {
          d.status === "pending" && (d.status = "rejected", d.reason = T);
        })), d.status) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function M(d, T, O, q, W) {
    var $ = typeof d;
    ($ === "undefined" || $ === "boolean") && (d = null);
    var nt = !1;
    if (d === null) nt = !0;
    else switch ($) {
      case "bigint":
      case "string":
      case "number":
        nt = !0;
        break;
      case "object":
        switch (d.$$typeof) {
          case g:
          case _:
            nt = !0;
            break;
          case L:
            return nt = d._init, M(nt(d._payload), T, O, q, W);
        }
    }
    if (nt) return W = W(d), nt = q === "" ? "." + El(d, 0) : q, Lt(W) ? (O = "", nt != null && (O = nt.replace(La, "$&/") + "/"), M(W, T, O, "", function(Me) {
      return Me;
    })) : W != null && (Tt(W) && (W = ol(W, O + (W.key == null || d && d.key === W.key ? "" : ("" + W.key).replace(La, "$&/") + "/") + nt)), T.push(W)), 1;
    nt = 0;
    var Zt = q === "" ? "." : q + ":";
    if (Lt(d)) for (var bt = 0; bt < d.length; bt++) q = d[bt], $ = Zt + El(q, bt), nt += M(q, T, O, $, W);
    else if (bt = Ot(d), typeof bt == "function") for (d = bt.call(d), bt = 0; !(q = d.next()).done; ) q = q.value, $ = Zt + El(q, bt++), nt += M(q, T, O, $, W);
    else if ($ === "object") {
      if (typeof d.then == "function") return M(U(d), T, O, q, W);
      throw T = String(d), Error("Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead.");
    }
    return nt;
  }
  function D(d, T, O) {
    if (d == null) return d;
    var q = [], W = 0;
    return M(d, q, "", "", function($) {
      return T.call(O, $, W++);
    }), q;
  }
  function et(d) {
    if (d._status === -1) {
      var T = d._result;
      T = T(), T.then(function(O) {
        (d._status === 0 || d._status === -1) && (d._status = 1, d._result = O);
      }, function(O) {
        (d._status === 0 || d._status === -1) && (d._status = 2, d._result = O);
      }), d._status === -1 && (d._status = 0, d._result = T);
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var mt = typeof reportError == "function" ? reportError : function(d) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var T = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
        error: d
      });
      if (!window.dispatchEvent(T)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", d);
      return;
    }
    console.error(d);
  }, Pt = {
    map: D,
    forEach: function(d, T, O) {
      D(d, function() {
        T.apply(this, arguments);
      }, O);
    },
    count: function(d) {
      var T = 0;
      return D(d, function() {
        T++;
      }), T;
    },
    toArray: function(d) {
      return D(d, function(T) {
        return T;
      }) || [];
    },
    only: function(d) {
      if (!Tt(d)) throw Error("React.Children.only expected to receive a single React element child.");
      return d;
    }
  };
  f.Activity = N, f.Children = Pt, f.Component = Xt, f.Fragment = E, f.Profiler = J, f.PureComponent = St, f.StrictMode = y, f.Suspense = C, f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j, f.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(d) {
      return j.H.useMemoCache(d);
    }
  }, f.cache = function(d) {
    return function() {
      return d.apply(null, arguments);
    };
  }, f.cacheSignal = function() {
    return null;
  }, f.cloneElement = function(d, T, O) {
    if (d == null) throw Error("The argument must be a React element, but you passed " + d + ".");
    var q = xt({}, d.props), W = d.key;
    if (T != null) for ($ in T.key !== void 0 && (W = "" + T.key), T) !w.call(T, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && T.ref === void 0 || (q[$] = T[$]);
    var $ = arguments.length - 2;
    if ($ === 1) q.children = O;
    else if (1 < $) {
      for (var nt = Array($), Zt = 0; Zt < $; Zt++) nt[Zt] = arguments[Zt + 2];
      q.children = nt;
    }
    return Nt(d.type, W, q);
  }, f.createContext = function(d) {
    return d = {
      $$typeof: Q,
      _currentValue: d,
      _currentValue2: d,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, d.Provider = d, d.Consumer = {
      $$typeof: Z,
      _context: d
    }, d;
  }, f.createElement = function(d, T, O) {
    var q, W = {}, $ = null;
    if (T != null) for (q in T.key !== void 0 && ($ = "" + T.key), T) w.call(T, q) && q !== "key" && q !== "__self" && q !== "__source" && (W[q] = T[q]);
    var nt = arguments.length - 2;
    if (nt === 1) W.children = O;
    else if (1 < nt) {
      for (var Zt = Array(nt), bt = 0; bt < nt; bt++) Zt[bt] = arguments[bt + 2];
      W.children = Zt;
    }
    if (d && d.defaultProps) for (q in nt = d.defaultProps, nt) W[q] === void 0 && (W[q] = nt[q]);
    return Nt(d, $, W);
  }, f.createRef = function() {
    return { current: null };
  }, f.forwardRef = function(d) {
    return {
      $$typeof: B,
      render: d
    };
  }, f.isValidElement = Tt, f.lazy = function(d) {
    return {
      $$typeof: L,
      _payload: {
        _status: -1,
        _result: d
      },
      _init: et
    };
  }, f.memo = function(d, T) {
    return {
      $$typeof: z,
      type: d,
      compare: T === void 0 ? null : T
    };
  }, f.startTransition = function(d) {
    var T = j.T, O = {};
    j.T = O;
    try {
      var q = d(), W = j.S;
      W !== null && W(O, q), typeof q == "object" && q !== null && typeof q.then == "function" && q.then(x, mt);
    } catch ($) {
      mt($);
    } finally {
      T !== null && O.types !== null && (T.types = O.types), j.T = T;
    }
  }, f.unstable_useCacheRefresh = function() {
    return j.H.useCacheRefresh();
  }, f.use = function(d) {
    return j.H.use(d);
  }, f.useActionState = function(d, T, O) {
    return j.H.useActionState(d, T, O);
  }, f.useCallback = function(d, T) {
    return j.H.useCallback(d, T);
  }, f.useContext = function(d) {
    return j.H.useContext(d);
  }, f.useDebugValue = function() {
  }, f.useDeferredValue = function(d, T) {
    return j.H.useDeferredValue(d, T);
  }, f.useEffect = function(d, T) {
    return j.H.useEffect(d, T);
  }, f.useEffectEvent = function(d) {
    return j.H.useEffectEvent(d);
  }, f.useId = function() {
    return j.H.useId();
  }, f.useImperativeHandle = function(d, T, O) {
    return j.H.useImperativeHandle(d, T, O);
  }, f.useInsertionEffect = function(d, T) {
    return j.H.useInsertionEffect(d, T);
  }, f.useLayoutEffect = function(d, T) {
    return j.H.useLayoutEffect(d, T);
  }, f.useMemo = function(d, T) {
    return j.H.useMemo(d, T);
  }, f.useOptimistic = function(d, T) {
    return j.H.useOptimistic(d, T);
  }, f.useReducer = function(d, T, O) {
    return j.H.useReducer(d, T, O);
  }, f.useRef = function(d) {
    return j.H.useRef(d);
  }, f.useState = function(d) {
    return j.H.useState(d);
  }, f.useSyncExternalStore = function(d, T, O) {
    return j.H.useSyncExternalStore(d, T, O);
  }, f.useTransition = function() {
    return j.H.useTransition();
  }, f.version = "19.2.7";
})), of = /* @__PURE__ */ Hl(((f, g) => {
  g.exports = x1();
})), L1 = /* @__PURE__ */ Hl(((f) => {
  function g(U, M) {
    var D = U.length;
    U.push(M);
    t: for (; 0 < D; ) {
      var et = D - 1 >>> 1, mt = U[et];
      if (0 < y(mt, M)) U[et] = M, U[D] = mt, D = et;
      else break t;
    }
  }
  function _(U) {
    return U.length === 0 ? null : U[0];
  }
  function E(U) {
    if (U.length === 0) return null;
    var M = U[0], D = U.pop();
    if (D !== M) {
      U[0] = D;
      t: for (var et = 0, mt = U.length, Pt = mt >>> 1; et < Pt; ) {
        var d = 2 * (et + 1) - 1, T = U[d], O = d + 1, q = U[O];
        if (0 > y(T, D)) O < mt && 0 > y(q, T) ? (U[et] = q, U[O] = D, et = O) : (U[et] = T, U[d] = D, et = d);
        else if (O < mt && 0 > y(q, D)) U[et] = q, U[O] = D, et = O;
        else break t;
      }
    }
    return M;
  }
  function y(U, M) {
    var D = U.sortIndex - M.sortIndex;
    return D !== 0 ? D : U.id - M.id;
  }
  if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var J = performance;
    f.unstable_now = function() {
      return J.now();
    };
  } else {
    var Z = Date, Q = Z.now();
    f.unstable_now = function() {
      return Z.now() - Q;
    };
  }
  var B = [], C = [], z = 1, L = null, N = 3, Ut = !1, Ot = !1, Qt = !1, xt = !1, Tl = typeof setTimeout == "function" ? setTimeout : null, Xt = typeof clearTimeout == "function" ? clearTimeout : null, sl = typeof setImmediate < "u" ? setImmediate : null;
  function St(U) {
    for (var M = _(C); M !== null; ) {
      if (M.callback === null) E(C);
      else if (M.startTime <= U) E(C), M.sortIndex = M.expirationTime, g(B, M);
      else break;
      M = _(C);
    }
  }
  function It(U) {
    if (Qt = !1, St(U), !Ot) if (_(B) !== null) Ot = !0, Lt || (Lt = !0, Tt());
    else {
      var M = _(C);
      M !== null && El(It, M.startTime - U);
    }
  }
  var Lt = !1, x = -1, j = 5, w = -1;
  function Nt() {
    return xt ? !0 : !(f.unstable_now() - w < j);
  }
  function ol() {
    if (xt = !1, Lt) {
      var U = f.unstable_now();
      w = U;
      var M = !0;
      try {
        t: {
          Ot = !1, Qt && (Qt = !1, Xt(x), x = -1), Ut = !0;
          var D = N;
          try {
            l: {
              for (St(U), L = _(B); L !== null && !(L.expirationTime > U && Nt()); ) {
                var et = L.callback;
                if (typeof et == "function") {
                  L.callback = null, N = L.priorityLevel;
                  var mt = et(L.expirationTime <= U);
                  if (U = f.unstable_now(), typeof mt == "function") {
                    L.callback = mt, St(U), M = !0;
                    break l;
                  }
                  L === _(B) && E(B), St(U);
                } else E(B);
                L = _(B);
              }
              if (L !== null) M = !0;
              else {
                var Pt = _(C);
                Pt !== null && El(It, Pt.startTime - U), M = !1;
              }
            }
            break t;
          } finally {
            L = null, N = D, Ut = !1;
          }
          M = void 0;
        }
      } finally {
        M ? Tt() : Lt = !1;
      }
    }
  }
  var Tt;
  if (typeof sl == "function") Tt = function() {
    sl(ol);
  };
  else if (typeof MessageChannel < "u") {
    var Ol = new MessageChannel(), La = Ol.port2;
    Ol.port1.onmessage = ol, Tt = function() {
      La.postMessage(null);
    };
  } else Tt = function() {
    Tl(ol, 0);
  };
  function El(U, M) {
    x = Tl(function() {
      U(f.unstable_now());
    }, M);
  }
  f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(U) {
    U.callback = null;
  }, f.unstable_forceFrameRate = function(U) {
    0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < U ? Math.floor(1e3 / U) : 5;
  }, f.unstable_getCurrentPriorityLevel = function() {
    return N;
  }, f.unstable_next = function(U) {
    switch (N) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = N;
    }
    var D = N;
    N = M;
    try {
      return U();
    } finally {
      N = D;
    }
  }, f.unstable_requestPaint = function() {
    xt = !0;
  }, f.unstable_runWithPriority = function(U, M) {
    switch (U) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        U = 3;
    }
    var D = N;
    N = U;
    try {
      return M();
    } finally {
      N = D;
    }
  }, f.unstable_scheduleCallback = function(U, M, D) {
    var et = f.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? et + D : et) : D = et, U) {
      case 1:
        var mt = -1;
        break;
      case 2:
        mt = 250;
        break;
      case 5:
        mt = 1073741823;
        break;
      case 4:
        mt = 1e4;
        break;
      default:
        mt = 5e3;
    }
    return mt = D + mt, U = {
      id: z++,
      callback: M,
      priorityLevel: U,
      startTime: D,
      expirationTime: mt,
      sortIndex: -1
    }, D > et ? (U.sortIndex = D, g(C, U), _(B) === null && U === _(C) && (Qt ? (Xt(x), x = -1) : Qt = !0, El(It, D - et))) : (U.sortIndex = mt, g(B, U), Ot || Ut || (Ot = !0, Lt || (Lt = !0, Tt()))), U;
  }, f.unstable_shouldYield = Nt, f.unstable_wrapCallback = function(U) {
    var M = N;
    return function() {
      var D = N;
      N = M;
      try {
        return U.apply(this, arguments);
      } finally {
        N = D;
      }
    };
  };
})), Z1 = /* @__PURE__ */ Hl(((f, g) => {
  g.exports = L1();
})), V1 = /* @__PURE__ */ Hl(((f) => {
  var g = of();
  function _(C) {
    var z = "https://react.dev/errors/" + C;
    if (1 < arguments.length) {
      z += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var L = 2; L < arguments.length; L++) z += "&args[]=" + encodeURIComponent(arguments[L]);
    }
    return "Minified React error #" + C + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function E() {
  }
  var y = {
    d: {
      f: E,
      r: function() {
        throw Error(_(522));
      },
      D: E,
      C: E,
      L: E,
      m: E,
      X: E,
      S: E,
      M: E
    },
    p: 0,
    findDOMNode: null
  }, J = /* @__PURE__ */ Symbol.for("react.portal");
  function Z(C, z, L) {
    var N = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: J,
      key: N == null ? null : "" + N,
      children: C,
      containerInfo: z,
      implementation: L
    };
  }
  var Q = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function B(C, z) {
    if (C === "font") return "";
    if (typeof z == "string") return z === "use-credentials" ? z : "";
  }
  f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = y, f.createPortal = function(C, z) {
    var L = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11) throw Error(_(299));
    return Z(C, z, null, L);
  }, f.flushSync = function(C) {
    var z = Q.T, L = y.p;
    try {
      if (Q.T = null, y.p = 2, C) return C();
    } finally {
      Q.T = z, y.p = L, y.d.f();
    }
  }, f.preconnect = function(C, z) {
    typeof C == "string" && (z ? (z = z.crossOrigin, z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null, y.d.C(C, z));
  }, f.prefetchDNS = function(C) {
    typeof C == "string" && y.d.D(C);
  }, f.preinit = function(C, z) {
    if (typeof C == "string" && z && typeof z.as == "string") {
      var L = z.as, N = B(L, z.crossOrigin), Ut = typeof z.integrity == "string" ? z.integrity : void 0, Ot = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
      L === "style" ? y.d.S(C, typeof z.precedence == "string" ? z.precedence : void 0, {
        crossOrigin: N,
        integrity: Ut,
        fetchPriority: Ot
      }) : L === "script" && y.d.X(C, {
        crossOrigin: N,
        integrity: Ut,
        fetchPriority: Ot,
        nonce: typeof z.nonce == "string" ? z.nonce : void 0
      });
    }
  }, f.preinitModule = function(C, z) {
    if (typeof C == "string") if (typeof z == "object" && z !== null) {
      if (z.as == null || z.as === "script") {
        var L = B(z.as, z.crossOrigin);
        y.d.M(C, {
          crossOrigin: L,
          integrity: typeof z.integrity == "string" ? z.integrity : void 0,
          nonce: typeof z.nonce == "string" ? z.nonce : void 0
        });
      }
    } else z ?? y.d.M(C);
  }, f.preload = function(C, z) {
    if (typeof C == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
      var L = z.as, N = B(L, z.crossOrigin);
      y.d.L(C, L, {
        crossOrigin: N,
        integrity: typeof z.integrity == "string" ? z.integrity : void 0,
        nonce: typeof z.nonce == "string" ? z.nonce : void 0,
        type: typeof z.type == "string" ? z.type : void 0,
        fetchPriority: typeof z.fetchPriority == "string" ? z.fetchPriority : void 0,
        referrerPolicy: typeof z.referrerPolicy == "string" ? z.referrerPolicy : void 0,
        imageSrcSet: typeof z.imageSrcSet == "string" ? z.imageSrcSet : void 0,
        imageSizes: typeof z.imageSizes == "string" ? z.imageSizes : void 0,
        media: typeof z.media == "string" ? z.media : void 0
      });
    }
  }, f.preloadModule = function(C, z) {
    if (typeof C == "string") if (z) {
      var L = B(z.as, z.crossOrigin);
      y.d.m(C, {
        as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0,
        crossOrigin: L,
        integrity: typeof z.integrity == "string" ? z.integrity : void 0
      });
    } else y.d.m(C);
  }, f.requestFormReset = function(C) {
    y.d.r(C);
  }, f.unstable_batchedUpdates = function(C, z) {
    return C(z);
  }, f.useFormState = function(C, z, L) {
    return Q.H.useFormState(C, z, L);
  }, f.useFormStatus = function() {
    return Q.H.useHostTransitionStatus();
  }, f.version = "19.2.7";
})), K1 = /* @__PURE__ */ Hl(((f, g) => {
  function _() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch (E) {
        console.error(E);
      }
  }
  _(), g.exports = V1();
})), w1 = /* @__PURE__ */ Hl(((f) => {
  var g = Z1(), _ = of(), E = K1();
  function y(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) l += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function J(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function Z(t) {
    var l = t, a = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do
        l = t, (l.flags & 4098) !== 0 && (a = l.return), t = l.return;
      while (t);
    }
    return l.tag === 3 ? a : null;
  }
  function Q(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function B(t) {
    if (t.tag === 31) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function C(t) {
    if (Z(t) !== t) throw Error(y(188));
  }
  function z(t) {
    var l = t.alternate;
    if (!l) {
      if (l = Z(t), l === null) throw Error(y(188));
      return l !== t ? null : t;
    }
    for (var a = t, e = l; ; ) {
      var u = a.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (e = u.return, e !== null) {
          a = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === a) return C(u), t;
          if (n === e) return C(u), l;
          n = n.sibling;
        }
        throw Error(y(188));
      }
      if (a.return !== e.return) a = u, e = n;
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === a) {
            i = !0, a = u, e = n;
            break;
          }
          if (c === e) {
            i = !0, e = u, a = n;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === a) {
              i = !0, a = n, e = u;
              break;
            }
            if (c === e) {
              i = !0, e = n, a = u;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(y(189));
        }
      }
      if (a.alternate !== e) throw Error(y(190));
    }
    if (a.tag !== 3) throw Error(y(188));
    return a.stateNode.current === a ? t : l;
  }
  function L(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = L(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  var N = Object.assign, Ut = /* @__PURE__ */ Symbol.for("react.element"), Ot = /* @__PURE__ */ Symbol.for("react.transitional.element"), Qt = /* @__PURE__ */ Symbol.for("react.portal"), xt = /* @__PURE__ */ Symbol.for("react.fragment"), Tl = /* @__PURE__ */ Symbol.for("react.strict_mode"), Xt = /* @__PURE__ */ Symbol.for("react.profiler"), sl = /* @__PURE__ */ Symbol.for("react.consumer"), St = /* @__PURE__ */ Symbol.for("react.context"), It = /* @__PURE__ */ Symbol.for("react.forward_ref"), Lt = /* @__PURE__ */ Symbol.for("react.suspense"), x = /* @__PURE__ */ Symbol.for("react.suspense_list"), j = /* @__PURE__ */ Symbol.for("react.memo"), w = /* @__PURE__ */ Symbol.for("react.lazy"), Nt = /* @__PURE__ */ Symbol.for("react.activity"), ol = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Tt = Symbol.iterator;
  function Ol(t) {
    return t === null || typeof t != "object" ? null : (t = Tt && t[Tt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var La = /* @__PURE__ */ Symbol.for("react.client.reference");
  function El(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.$$typeof === La ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case xt:
        return "Fragment";
      case Xt:
        return "Profiler";
      case Tl:
        return "StrictMode";
      case Lt:
        return "Suspense";
      case x:
        return "SuspenseList";
      case Nt:
        return "Activity";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case Qt:
        return "Portal";
      case St:
        return t.displayName || "Context";
      case sl:
        return (t._context.displayName || "Context") + ".Consumer";
      case It:
        var l = t.render;
        return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case j:
        return l = t.displayName || null, l !== null ? l : El(t.type) || "Memo";
      case w:
        l = t._payload, t = t._init;
        try {
          return El(t(l));
        } catch {
        }
    }
    return null;
  }
  var U = Array.isArray, M = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = E.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, et = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, mt = [], Pt = -1;
  function d(t) {
    return { current: t };
  }
  function T(t) {
    0 > Pt || (t.current = mt[Pt], mt[Pt] = null, Pt--);
  }
  function O(t, l) {
    Pt++, mt[Pt] = t.current, t.current = l;
  }
  var q = d(null), W = d(null), $ = d(null), nt = d(null);
  function Zt(t, l) {
    switch (O($, l), O(W, t), O(q, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? q0(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI) l = q0(l), t = B0(l, t);
        else switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0;
        }
    }
    T(q), O(q, t);
  }
  function bt() {
    T(q), T(W), T($);
  }
  function Me(t) {
    t.memoizedState !== null && O(nt, t);
    var l = q.current, a = B0(l, t.type);
    l !== a && (O(W, t), O(q, a));
  }
  function Tu(t) {
    W.current === t && (T(q), T(W)), nt.current === t && (T(nt), hu._currentValue = et);
  }
  var Kn, df;
  function pa(t) {
    if (Kn === void 0) try {
      throw Error();
    } catch (a) {
      var l = a.stack.trim().match(/\n( *(at )?)/);
      Kn = l && l[1] || "", df = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Kn + t + df;
  }
  var wn = !1;
  function Jn(t, l) {
    if (!t || wn) return "";
    wn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = { DetermineComponentFrameRoot: function() {
        try {
          if (l) {
            var A = function() {
              throw Error();
            };
            if (Object.defineProperty(A.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(A, []);
              } catch (S) {
                var r = S;
              }
              Reflect.construct(t, [], A);
            } else {
              try {
                A.call();
              } catch (S) {
                r = S;
              }
              t.call(A.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (S) {
              r = S;
            }
            (A = t()) && typeof A.catch == "function" && A.catch(function() {
            });
          }
        } catch (S) {
          if (S && r && typeof S.stack == "string") return [S.stack, r.stack];
        }
        return [null, null];
      } };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot, "name");
      u && u.configurable && Object.defineProperty(e.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var n = e.DetermineComponentFrameRoot(), i = n[0], c = n[1];
      if (i && c) {
        var s = i.split(`
`), h = c.split(`
`);
        for (u = e = 0; e < s.length && !s[e].includes("DetermineComponentFrameRoot"); ) e++;
        for (; u < h.length && !h[u].includes("DetermineComponentFrameRoot"); ) u++;
        if (e === s.length || u === h.length) for (e = s.length - 1, u = h.length - 1; 1 <= e && 0 <= u && s[e] !== h[u]; ) u--;
        for (; 1 <= e && 0 <= u; e--, u--) if (s[e] !== h[u]) {
          if (e !== 1 || u !== 1) do
            if (e--, u--, 0 > u || s[e] !== h[u]) {
              var b = `
` + s[e].replace(" at new ", " at ");
              return t.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", t.displayName)), b;
            }
          while (1 <= e && 0 <= u);
          break;
        }
      }
    } finally {
      wn = !1, Error.prepareStackTrace = a;
    }
    return (a = t ? t.displayName || t.name : "") ? pa(a) : "";
  }
  function bd(t, l) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return pa(t.type);
      case 16:
        return pa("Lazy");
      case 13:
        return t.child !== l && l !== null ? pa("Suspense Fallback") : pa("Suspense");
      case 19:
        return pa("SuspenseList");
      case 0:
      case 15:
        return Jn(t.type, !1);
      case 11:
        return Jn(t.type.render, !1);
      case 1:
        return Jn(t.type, !0);
      case 31:
        return pa("Activity");
      default:
        return "";
    }
  }
  function mf(t) {
    try {
      var l = "", a = null;
      do
        l += bd(t, a), a = t, t = t.return;
      while (t);
      return l;
    } catch (e) {
      return `
Error generating stack: ` + e.message + `
` + e.stack;
    }
  }
  var Wn = Object.prototype.hasOwnProperty, $n = g.unstable_scheduleCallback, Fn = g.unstable_cancelCallback, pd = g.unstable_shouldYield, Ad = g.unstable_requestPaint, tl = g.unstable_now, Td = g.unstable_getCurrentPriorityLevel, yf = g.unstable_ImmediatePriority, vf = g.unstable_UserBlockingPriority, Eu = g.unstable_NormalPriority, Ed = g.unstable_LowPriority, hf = g.unstable_IdlePriority, zd = g.log, _d = g.unstable_setDisableYieldValue, Oe = null, ll = null;
  function kl(t) {
    if (typeof zd == "function" && _d(t), ll && typeof ll.setStrictMode == "function") try {
      ll.setStrictMode(Oe, t);
    } catch {
    }
  }
  var al = Math.clz32 ? Math.clz32 : Dd, Md = Math.log, Od = Math.LN2;
  function Dd(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Md(t) / Od | 0) | 0;
  }
  var zu = 256, _u = 262144, Mu = 4194304;
  function Aa(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function Ou(t, l, a) {
    var e = t.pendingLanes;
    if (e === 0) return 0;
    var u = 0, n = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var c = e & 134217727;
    return c !== 0 ? (e = c & ~n, e !== 0 ? u = Aa(e) : (i &= c, i !== 0 ? u = Aa(i) : a || (a = c & ~t, a !== 0 && (u = Aa(a))))) : (c = e & ~n, c !== 0 ? u = Aa(c) : i !== 0 ? u = Aa(i) : a || (a = e & ~t, a !== 0 && (u = Aa(a)))), u === 0 ? 0 : l !== 0 && l !== u && (l & n) === 0 && (n = u & -u, a = l & -l, n >= a || n === 32 && (a & 4194048) !== 0) ? l : u;
  }
  function De(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function Ud(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
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
        return l + 5e3;
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
  function rf() {
    var t = Mu;
    return Mu <<= 1, (Mu & 62914560) === 0 && (Mu = 4194304), t;
  }
  function kn(t) {
    for (var l = [], a = 0; 31 > a; a++) l.push(t);
    return l;
  }
  function Du(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Cd(t, l, a, e, u, n) {
    var i = t.pendingLanes;
    t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
    var c = t.entanglements, s = t.expirationTimes, h = t.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var b = 31 - al(a), A = 1 << b;
      c[b] = 0, s[b] = -1;
      var r = h[b];
      if (r !== null) for (h[b] = null, b = 0; b < r.length; b++) {
        var S = r[b];
        S !== null && (S.lane &= -536870913);
      }
      a &= ~A;
    }
    e !== 0 && gf(t, e, 0), n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l));
  }
  function gf(t, l, a) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var e = 31 - al(l);
    t.entangledLanes |= l, t.entanglements[e] = t.entanglements[e] | 1073741824 | a & 261930;
  }
  function Sf(t, l) {
    var a = t.entangledLanes |= l;
    for (t = t.entanglements; a; ) {
      var e = 31 - al(a), u = 1 << e;
      u & l | t[e] & l && (t[e] |= l), a &= ~u;
    }
  }
  function bf(t, l) {
    var a = l & -l;
    return a = (a & 42) !== 0 ? 1 : pf(a), (a & (t.suspendedLanes | l)) !== 0 ? 0 : a;
  }
  function pf(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function In(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Af() {
    var t = D.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : ed(t.type));
  }
  function Tf(t, l) {
    var a = D.p;
    try {
      return D.p = t, l();
    } finally {
      D.p = a;
    }
  }
  var Il = Math.random().toString(36).slice(2), Rt = "__reactFiber$" + Il, Kt = "__reactProps$" + Il, Ue = "__reactContainer$" + Il, Pn = "__reactEvents$" + Il, Hd = "__reactListeners$" + Il, Nd = "__reactHandles$" + Il, Ef = "__reactResources$" + Il, Ce = "__reactMarker$" + Il;
  function ti(t) {
    delete t[Rt], delete t[Kt], delete t[Pn], delete t[Hd], delete t[Nd];
  }
  function Za(t) {
    var l = t[Rt];
    if (l) return l;
    for (var a = t.parentNode; a; ) {
      if (l = a[Ue] || a[Rt]) {
        if (a = l.alternate, l.child !== null || a !== null && a.child !== null) for (t = Z0(t); t !== null; ) {
          if (a = t[Rt]) return a;
          t = Z0(t);
        }
        return l;
      }
      t = a, a = t.parentNode;
    }
    return null;
  }
  function Va(t) {
    if (t = t[Rt] || t[Ue]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3) return t;
    }
    return null;
  }
  function He(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(y(33));
  }
  function Ka(t) {
    var l = t[Ef];
    return l || (l = t[Ef] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), l;
  }
  function Ct(t) {
    t[Ce] = !0;
  }
  var zf = /* @__PURE__ */ new Set(), _f = {};
  function Ta(t, l) {
    wa(t, l), wa(t + "Capture", l);
  }
  function wa(t, l) {
    for (_f[t] = l, t = 0; t < l.length; t++) zf.add(l[t]);
  }
  var Rd = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Mf = {}, Of = {};
  function jd(t) {
    return Wn.call(Of, t) ? !0 : Wn.call(Mf, t) ? !1 : Rd.test(t) ? Of[t] = !0 : (Mf[t] = !0, !1);
  }
  function Uu(t, l, a) {
    if (jd(l)) if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(l);
          return;
        case "boolean":
          var e = l.toLowerCase().slice(0, 5);
          if (e !== "data-" && e !== "aria-") {
            t.removeAttribute(l);
            return;
          }
      }
      t.setAttribute(l, "" + a);
    }
  }
  function Cu(t, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + a);
    }
  }
  function Nl(t, l, a, e) {
    if (e === null) t.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(l, a, "" + e);
    }
  }
  function dl(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Df(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function qd(t, l, a) {
    var e = Object.getOwnPropertyDescriptor(t.constructor.prototype, l);
    if (!t.hasOwnProperty(l) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
      var u = e.get, n = e.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(i) {
          a = "" + i, n.call(this, i);
        }
      }), Object.defineProperty(t, l, { enumerable: e.enumerable }), {
        getValue: function() {
          return a;
        },
        setValue: function(i) {
          a = "" + i;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[l];
        }
      };
    }
  }
  function li(t) {
    if (!t._valueTracker) {
      var l = Df(t) ? "checked" : "value";
      t._valueTracker = qd(t, l, "" + t[l]);
    }
  }
  function Uf(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var a = l.getValue(), e = "";
    return t && (e = Df(t) ? t.checked ? "true" : "false" : t.value), t = e, t !== a ? (l.setValue(t), !0) : !1;
  }
  function Hu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Bd = /[\n"\\]/g;
  function ml(t) {
    return t.replace(Bd, function(l) {
      return "\\" + l.charCodeAt(0).toString(16) + " ";
    });
  }
  function ai(t, l, a, e, u, n, i, c) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), l != null ? i === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + dl(l)) : t.value !== "" + dl(l) && (t.value = "" + dl(l)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), l != null ? ei(t, i, dl(l)) : a != null ? ei(t, i, dl(a)) : e != null && t.removeAttribute("value"), u == null && n != null && (t.defaultChecked = !!n), u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + dl(c) : t.removeAttribute("name");
  }
  function Cf(t, l, a, e, u, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n), l != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || l != null)) {
        li(t);
        return;
      }
      a = a != null ? "" + dl(a) : "", l = l != null ? "" + dl(l) : a, c || l === t.value || (t.value = l), t.defaultValue = l;
    }
    e = e ?? u, e = typeof e != "function" && typeof e != "symbol" && !!e, t.checked = c ? t.checked : !!e, t.defaultChecked = !!e, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), li(t);
  }
  function ei(t, l, a) {
    l === "number" && Hu(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
  }
  function Ja(t, l, a, e) {
    if (t = t.options, l) {
      l = {};
      for (var u = 0; u < a.length; u++) l["$" + a[u]] = !0;
      for (a = 0; a < t.length; a++) u = l.hasOwnProperty("$" + t[a].value), t[a].selected !== u && (t[a].selected = u), u && e && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + dl(a), l = null, u = 0; u < t.length; u++) {
        if (t[u].value === a) {
          t[u].selected = !0, e && (t[u].defaultSelected = !0);
          return;
        }
        l !== null || t[u].disabled || (l = t[u]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Hf(t, l, a) {
    if (l != null && (l = "" + dl(l), l !== t.value && (t.value = l), a == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = a != null ? "" + dl(a) : "";
  }
  function Nf(t, l, a, e) {
    if (l == null) {
      if (e != null) {
        if (a != null) throw Error(y(92));
        if (U(e)) {
          if (1 < e.length) throw Error(y(93));
          e = e[0];
        }
        a = e;
      }
      a ??= "", l = a;
    }
    a = dl(l), t.defaultValue = a, e = t.textContent, e === a && e !== "" && e !== null && (t.value = e), li(t);
  }
  function Wa(t, l) {
    if (l) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var Yd = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Rf(t, l, a) {
    var e = l.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? e ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : e ? t.setProperty(l, a) : typeof a != "number" || a === 0 || Yd.has(l) ? l === "float" ? t.cssFloat = a : t[l] = ("" + a).trim() : t[l] = a + "px";
  }
  function jf(t, l, a) {
    if (l != null && typeof l != "object") throw Error(y(62));
    if (t = t.style, a != null) {
      for (var e in a) !a.hasOwnProperty(e) || l != null && l.hasOwnProperty(e) || (e.indexOf("--") === 0 ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "");
      for (var u in l) e = l[u], l.hasOwnProperty(u) && a[u] !== e && Rf(t, u, e);
    } else for (var n in l) l.hasOwnProperty(n) && Rf(t, n, l[n]);
  }
  function ui(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var Gd = /* @__PURE__ */ new Map([
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
  ]), Qd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Nu(t) {
    return Qd.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Rl() {
  }
  var ni = null;
  function ii(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var $a = null, Fa = null;
  function qf(t) {
    var l = Va(t);
    if (l && (t = l.stateNode)) {
      var a = t[Kt] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (ai(t, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), l = a.name, a.type === "radio" && l != null) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll('input[name="' + ml("" + l) + '"][type="radio"]'), l = 0; l < a.length; l++) {
              var e = a[l];
              if (e !== t && e.form === t.form) {
                var u = e[Kt] || null;
                if (!u) throw Error(y(90));
                ai(e, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
              }
            }
            for (l = 0; l < a.length; l++) e = a[l], e.form === t.form && Uf(e);
          }
          break t;
        case "textarea":
          Hf(t, a.value, a.defaultValue);
          break t;
        case "select":
          l = a.value, l != null && Ja(t, !!a.multiple, l, !1);
      }
    }
  }
  var ci = !1;
  function Bf(t, l, a) {
    if (ci) return t(l, a);
    ci = !0;
    try {
      return t(l);
    } finally {
      if (ci = !1, ($a !== null || Fa !== null) && (pn(), $a && (l = $a, t = Fa, Fa = $a = null, qf(l), t)))
        for (l = 0; l < t.length; l++) qf(t[l]);
    }
  }
  function Ne(t, l) {
    var a = t.stateNode;
    if (a === null) return null;
    var e = a[Kt] || null;
    if (e === null) return null;
    a = e[l];
    t: switch (l) {
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
        (e = !e.disabled) || (t = t.type, e = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !e;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function") throw Error(y(231, l, typeof a));
    return a;
  }
  var jl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fi = !1;
  if (jl) try {
    var Re = {};
    Object.defineProperty(Re, "passive", { get: function() {
      fi = !0;
    } }), window.addEventListener("test", Re, Re), window.removeEventListener("test", Re, Re);
  } catch {
    fi = !1;
  }
  var Pl = null, si = null, Ru = null;
  function Yf() {
    if (Ru) return Ru;
    var t, l = si, a = l.length, e, u = "value" in Pl ? Pl.value : Pl.textContent, n = u.length;
    for (t = 0; t < a && l[t] === u[t]; t++) ;
    var i = a - t;
    for (e = 1; e <= i && l[a - e] === u[n - e]; e++) ;
    return Ru = u.slice(t, 1 < e ? 1 - e : void 0);
  }
  function ju(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function qu() {
    return !0;
  }
  function Gf() {
    return !1;
  }
  function wt(t) {
    function l(a, e, u, n, i) {
      this._reactName = a, this._targetInst = u, this.type = e, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in t) t.hasOwnProperty(c) && (a = t[c], this[c] = a ? a(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? qu : Gf, this.isPropagationStopped = Gf, this;
    }
    return N(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = qu);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = qu);
      },
      persist: function() {
      },
      isPersistent: qu
    }), l;
  }
  var Ea = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Bu = wt(Ea), je = N({}, Ea, {
    view: 0,
    detail: 0
  }), Xd = wt(je), oi, di, qe, Yu = N({}, je, {
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
    getModifierState: yi,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== qe && (qe && t.type === "mousemove" ? (oi = t.screenX - qe.screenX, di = t.screenY - qe.screenY) : di = oi = 0, qe = t), oi);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : di;
    }
  }), Qf = wt(Yu), xd = wt(N({}, Yu, { dataTransfer: 0 })), mi = wt(N({}, je, { relatedTarget: 0 })), Ld = wt(N({}, Ea, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), Zd = wt(N({}, Ea, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } })), Xf = wt(N({}, Ea, { data: 0 })), Vd = {
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
  }, Kd = {
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
  }, wd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Jd(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = wd[t]) ? !!l[t] : !1;
  }
  function yi() {
    return Jd;
  }
  var Wd = wt(N({}, je, {
    key: function(t) {
      if (t.key) {
        var l = Vd[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = ju(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Kd[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: yi,
    charCode: function(t) {
      return t.type === "keypress" ? ju(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? ju(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  })), xf = wt(N({}, Yu, {
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
  })), $d = wt(N({}, je, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: yi
  })), Fd = wt(N({}, Ea, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), kd = wt(N({}, Yu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  })), Id = wt(N({}, Ea, {
    newState: 0,
    oldState: 0
  })), Pd = [
    9,
    13,
    27,
    32
  ], vi = jl && "CompositionEvent" in window, Be = null;
  jl && "documentMode" in document && (Be = document.documentMode);
  var tm = jl && "TextEvent" in window && !Be, Lf = jl && (!vi || Be && 8 < Be && 11 >= Be), Zf = " ", Vf = !1;
  function Kf(t, l) {
    switch (t) {
      case "keyup":
        return Pd.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function wf(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ka = !1;
  function lm(t, l) {
    switch (t) {
      case "compositionend":
        return wf(l);
      case "keypress":
        return l.which !== 32 ? null : (Vf = !0, Zf);
      case "textInput":
        return t = l.data, t === Zf && Vf ? null : t;
      default:
        return null;
    }
  }
  function am(t, l) {
    if (ka) return t === "compositionend" || !vi && Kf(t, l) ? (t = Yf(), Ru = si = Pl = null, ka = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length) return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return Lf && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var em = {
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
  function Jf(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!em[t.type] : l === "textarea";
  }
  function Wf(t, l, a, e) {
    $a ? Fa ? Fa.push(e) : Fa = [e] : $a = e, l = On(l, "onChange"), 0 < l.length && (a = new Bu("onChange", "change", null, a, e), t.push({
      event: a,
      listeners: l
    }));
  }
  var Ye = null, Ge = null;
  function um(t) {
    D0(t, 0);
  }
  function Gu(t) {
    if (Uf(He(t))) return t;
  }
  function $f(t, l) {
    if (t === "change") return l;
  }
  var Ff = !1;
  if (jl) {
    var hi;
    if (jl) {
      var ri = "oninput" in document;
      if (!ri) {
        var kf = document.createElement("div");
        kf.setAttribute("oninput", "return;"), ri = typeof kf.oninput == "function";
      }
      hi = ri;
    } else hi = !1;
    Ff = hi && (!document.documentMode || 9 < document.documentMode);
  }
  function If() {
    Ye && (Ye.detachEvent("onpropertychange", Pf), Ge = Ye = null);
  }
  function Pf(t) {
    if (t.propertyName === "value" && Gu(Ge)) {
      var l = [];
      Wf(l, Ge, t, ii(t)), Bf(um, l);
    }
  }
  function nm(t, l, a) {
    t === "focusin" ? (If(), Ye = l, Ge = a, Ye.attachEvent("onpropertychange", Pf)) : t === "focusout" && If();
  }
  function im(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Gu(Ge);
  }
  function cm(t, l) {
    if (t === "click") return Gu(l);
  }
  function fm(t, l) {
    if (t === "input" || t === "change") return Gu(l);
  }
  function sm(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var el = typeof Object.is == "function" ? Object.is : sm;
  function Qe(t, l) {
    if (el(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null) return !1;
    var a = Object.keys(t), e = Object.keys(l);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!Wn.call(l, u) || !el(t[u], l[u])) return !1;
    }
    return !0;
  }
  function ts(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ls(t, l) {
    var a = ts(t);
    t = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (e = t + a.textContent.length, t <= l && e >= l) return {
          node: a,
          offset: l - t
        };
        t = e;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = ts(a);
    }
  }
  function as(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? as(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function es(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = Hu(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof l.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = l.contentWindow;
      else break;
      l = Hu(t.document);
    }
    return l;
  }
  function gi(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var om = jl && "documentMode" in document && 11 >= document.documentMode, Ia = null, Si = null, Xe = null, bi = !1;
  function us(t, l, a) {
    var e = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    bi || Ia == null || Ia !== Hu(e) || (e = Ia, "selectionStart" in e && gi(e) ? e = {
      start: e.selectionStart,
      end: e.selectionEnd
    } : (e = (e.ownerDocument && e.ownerDocument.defaultView || window).getSelection(), e = {
      anchorNode: e.anchorNode,
      anchorOffset: e.anchorOffset,
      focusNode: e.focusNode,
      focusOffset: e.focusOffset
    }), Xe && Qe(Xe, e) || (Xe = e, e = On(Si, "onSelect"), 0 < e.length && (l = new Bu("onSelect", "select", null, l, a), t.push({
      event: l,
      listeners: e
    }), l.target = Ia)));
  }
  function za(t, l) {
    var a = {};
    return a[t.toLowerCase()] = l.toLowerCase(), a["Webkit" + t] = "webkit" + l, a["Moz" + t] = "moz" + l, a;
  }
  var Pa = {
    animationend: za("Animation", "AnimationEnd"),
    animationiteration: za("Animation", "AnimationIteration"),
    animationstart: za("Animation", "AnimationStart"),
    transitionrun: za("Transition", "TransitionRun"),
    transitionstart: za("Transition", "TransitionStart"),
    transitioncancel: za("Transition", "TransitionCancel"),
    transitionend: za("Transition", "TransitionEnd")
  }, pi = {}, ns = {};
  jl && (ns = document.createElement("div").style, "AnimationEvent" in window || (delete Pa.animationend.animation, delete Pa.animationiteration.animation, delete Pa.animationstart.animation), "TransitionEvent" in window || delete Pa.transitionend.transition);
  function _a(t) {
    if (pi[t]) return pi[t];
    if (!Pa[t]) return t;
    var l = Pa[t], a;
    for (a in l) if (l.hasOwnProperty(a) && a in ns) return pi[t] = l[a];
    return t;
  }
  var is = _a("animationend"), cs = _a("animationiteration"), fs = _a("animationstart"), dm = _a("transitionrun"), mm = _a("transitionstart"), ym = _a("transitioncancel"), ss = _a("transitionend"), os = /* @__PURE__ */ new Map(), Ai = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Ai.push("scrollEnd");
  function zl(t, l) {
    os.set(t, l), Ta(l, [t]);
  }
  var Qu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, yl = [], te = 0, Ti = 0;
  function Xu() {
    for (var t = te, l = Ti = te = 0; l < t; ) {
      var a = yl[l];
      yl[l++] = null;
      var e = yl[l];
      yl[l++] = null;
      var u = yl[l];
      yl[l++] = null;
      var n = yl[l];
      if (yl[l++] = null, e !== null && u !== null) {
        var i = e.pending;
        i === null ? u.next = u : (u.next = i.next, i.next = u), e.pending = u;
      }
      n !== 0 && ds(a, u, n);
    }
  }
  function xu(t, l, a, e) {
    yl[te++] = t, yl[te++] = l, yl[te++] = a, yl[te++] = e, Ti |= e, t.lanes |= e, t = t.alternate, t !== null && (t.lanes |= e);
  }
  function Ei(t, l, a, e) {
    return xu(t, l, a, e), Lu(t);
  }
  function Ma(t, l) {
    return xu(t, null, null, l), Lu(t);
  }
  function ds(t, l, a) {
    t.lanes |= a;
    var e = t.alternate;
    e !== null && (e.lanes |= a);
    for (var u = !1, n = t.return; n !== null; ) n.childLanes |= a, e = n.alternate, e !== null && (e.childLanes |= a), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (u = !0)), t = n, n = n.return;
    return t.tag === 3 ? (n = t.stateNode, u && l !== null && (u = 31 - al(a), t = n.hiddenUpdates, e = t[u], e === null ? t[u] = [l] : e.push(l), l.lane = a | 536870912), n) : null;
  }
  function Lu(t) {
    if (50 < fu) throw fu = 0, Nc = null, Error(y(185));
    for (var l = t.return; l !== null; ) t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var le = {};
  function vm(t, l, a, e) {
    this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = e, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ul(t, l, a, e) {
    return new vm(t, l, a, e);
  }
  function zi(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function ql(t, l) {
    var a = t.alternate;
    return a === null ? (a = ul(t.tag, l, t.key, t.mode), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = l, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, l = t.dependencies, a.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
  }
  function ms(t, l) {
    t.flags &= 65011714;
    var a = t.alternate;
    return a === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, l = a.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function Zu(t, l, a, e, u, n) {
    var i = 0;
    if (e = t, typeof t == "function") zi(t) && (i = 1);
    else if (typeof t == "string") i = p1(t, a, q.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else t: switch (t) {
      case Nt:
        return t = ul(31, a, l, u), t.elementType = Nt, t.lanes = n, t;
      case xt:
        return Oa(a.children, u, n, l);
      case Tl:
        i = 8, u |= 24;
        break;
      case Xt:
        return t = ul(12, a, l, u | 2), t.elementType = Xt, t.lanes = n, t;
      case Lt:
        return t = ul(13, a, l, u), t.elementType = Lt, t.lanes = n, t;
      case x:
        return t = ul(19, a, l, u), t.elementType = x, t.lanes = n, t;
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case St:
            i = 10;
            break t;
          case sl:
            i = 9;
            break t;
          case It:
            i = 11;
            break t;
          case j:
            i = 14;
            break t;
          case w:
            i = 16, e = null;
            break t;
        }
        i = 29, a = Error(y(130, t === null ? "null" : typeof t, "")), e = null;
    }
    return l = ul(i, a, l, u), l.elementType = t, l.type = e, l.lanes = n, l;
  }
  function Oa(t, l, a, e) {
    return t = ul(7, t, e, l), t.lanes = a, t;
  }
  function _i(t, l, a) {
    return t = ul(6, t, null, l), t.lanes = a, t;
  }
  function ys(t) {
    var l = ul(18, null, null, 0);
    return l.stateNode = t, l;
  }
  function Mi(t, l, a) {
    return l = ul(4, t.children !== null ? t.children : [], t.key, l), l.lanes = a, l.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, l;
  }
  var vs = /* @__PURE__ */ new WeakMap();
  function vl(t, l) {
    if (typeof t == "object" && t !== null) {
      var a = vs.get(t);
      return a !== void 0 ? a : (l = {
        value: t,
        source: l,
        stack: mf(l)
      }, vs.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: mf(l)
    };
  }
  var ae = [], ee = 0, Vu = null, xe = 0, hl = [], rl = 0, ta = null, Dl = 1, Ul = "";
  function Bl(t, l) {
    ae[ee++] = xe, ae[ee++] = Vu, Vu = t, xe = l;
  }
  function hs(t, l, a) {
    hl[rl++] = Dl, hl[rl++] = Ul, hl[rl++] = ta, ta = t;
    var e = Dl;
    t = Ul;
    var u = 32 - al(e) - 1;
    e &= ~(1 << u), a += 1;
    var n = 32 - al(l) + u;
    if (30 < n) {
      var i = u - u % 5;
      n = (e & (1 << i) - 1).toString(32), e >>= i, u -= i, Dl = 1 << 32 - al(l) + u | a << u | e, Ul = n + t;
    } else Dl = 1 << n | a << u | e, Ul = t;
  }
  function Oi(t) {
    t.return !== null && (Bl(t, 1), hs(t, 1, 0));
  }
  function Di(t) {
    for (; t === Vu; ) Vu = ae[--ee], ae[ee] = null, xe = ae[--ee], ae[ee] = null;
    for (; t === ta; ) ta = hl[--rl], hl[rl] = null, Ul = hl[--rl], hl[rl] = null, Dl = hl[--rl], hl[rl] = null;
  }
  function rs(t, l) {
    hl[rl++] = Dl, hl[rl++] = Ul, hl[rl++] = ta, Dl = l.id, Ul = l.overflow, ta = t;
  }
  var jt = null, yt = null, tt = !1, la = null, gl = !1, Ui = Error(y(519));
  function aa(t) {
    throw Le(vl(Error(y(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), t)), Ui;
  }
  function gs(t) {
    var l = t.stateNode, a = t.type, e = t.memoizedProps;
    switch (l[Rt] = t, l[Kt] = e, a) {
      case "dialog":
        k("cancel", l), k("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        k("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ou.length; a++) k(ou[a], l);
        break;
      case "source":
        k("error", l);
        break;
      case "img":
      case "image":
      case "link":
        k("error", l), k("load", l);
        break;
      case "details":
        k("toggle", l);
        break;
      case "input":
        k("invalid", l), Cf(l, e.value, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name, !0);
        break;
      case "select":
        k("invalid", l);
        break;
      case "textarea":
        k("invalid", l), Nf(l, e.value, e.defaultValue, e.children);
    }
    a = e.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || l.textContent === "" + a || e.suppressHydrationWarning === !0 || R0(l.textContent, a) ? (e.popover != null && (k("beforetoggle", l), k("toggle", l)), e.onScroll != null && k("scroll", l), e.onScrollEnd != null && k("scrollend", l), e.onClick != null && (l.onclick = Rl), l = !0) : l = !1, l || aa(t, !0);
  }
  function Ss(t) {
    for (jt = t.return; jt; ) switch (jt.tag) {
      case 5:
      case 31:
      case 13:
        gl = !1;
        return;
      case 27:
      case 3:
        gl = !0;
        return;
      default:
        jt = jt.return;
    }
  }
  function ue(t) {
    if (t !== jt) return !1;
    if (!tt) return Ss(t), tt = !0, !1;
    var l = t.tag, a;
    if ((a = l !== 3 && l !== 27) && ((a = l === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || wc(t.type, t.memoizedProps)), a = !a), a && yt && aa(t), Ss(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(y(317));
      yt = L0(t);
    } else if (l === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(y(317));
      yt = L0(t);
    } else l === 27 ? (l = yt, va(t.type) ? (t = kc, kc = null, yt = t) : yt = l) : yt = jt ? pl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Da() {
    yt = jt = null, tt = !1;
  }
  function Ci() {
    var t = la;
    return t !== null && (Ft === null ? Ft = t : Ft.push.apply(Ft, t), la = null), t;
  }
  function Le(t) {
    la === null ? la = [t] : la.push(t);
  }
  var Hi = d(null), Ua = null, Yl = null;
  function ea(t, l, a) {
    O(Hi, l._currentValue), l._currentValue = a;
  }
  function Gl(t) {
    t._currentValue = Hi.current, T(Hi);
  }
  function Ni(t, l, a) {
    for (; t !== null; ) {
      var e = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, e !== null && (e.childLanes |= l)) : e !== null && (e.childLanes & l) !== l && (e.childLanes |= l), t === a) break;
      t = t.return;
    }
  }
  function Ri(t, l, a, e) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var s = 0; s < l.length; s++) if (c.context === l[s]) {
            n.lanes |= a, c = n.alternate, c !== null && (c.lanes |= a), Ni(n.return, a, t), e || (i = null);
            break t;
          }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (i = u.return, i === null) throw Error(y(341));
        i.lanes |= a, n = i.alternate, n !== null && (n.lanes |= a), Ni(i, a, t), i = null;
      } else i = u.child;
      if (i !== null) i.return = u;
      else for (i = u; i !== null; ) {
        if (i === t) {
          i = null;
          break;
        }
        if (u = i.sibling, u !== null) {
          u.return = i.return, i = u;
          break;
        }
        i = i.return;
      }
      u = i;
    }
  }
  function ne(t, l, a, e) {
    t = null;
    for (var u = l, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(y(387));
        if (i = i.memoizedProps, i !== null) {
          var c = u.type;
          el(u.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [c]);
        }
      } else if (u === nt.current) {
        if (i = u.alternate, i === null) throw Error(y(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(hu) : t = [hu]);
      }
      u = u.return;
    }
    t !== null && Ri(l, t, a, e), l.flags |= 262144;
  }
  function Ku(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!el(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ca(t) {
    Ua = t, Yl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function qt(t) {
    return bs(Ua, t);
  }
  function wu(t, l) {
    return Ua === null && Ca(t), bs(t, l);
  }
  function bs(t, l) {
    var a = l._currentValue;
    if (l = {
      context: l,
      memoizedValue: a,
      next: null
    }, Yl === null) {
      if (t === null) throw Error(y(308));
      Yl = l, t.dependencies = {
        lanes: 0,
        firstContext: l
      }, t.flags |= 524288;
    } else Yl = Yl.next = l;
    return a;
  }
  var hm = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(a, e) {
        t.push(e);
      }
    };
    this.abort = function() {
      l.aborted = !0, t.forEach(function(a) {
        return a();
      });
    };
  }, rm = g.unstable_scheduleCallback, gm = g.unstable_NormalPriority, Et = {
    $$typeof: St,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ji() {
    return {
      controller: new hm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ze(t) {
    t.refCount--, t.refCount === 0 && rm(gm, function() {
      t.controller.abort();
    });
  }
  var Ve = null, qi = 0, ie = 0, ce = null;
  function Sm(t, l) {
    if (Ve === null) {
      var a = Ve = [];
      qi = 0, ie = Gc(), ce = {
        status: "pending",
        value: void 0,
        then: function(e) {
          a.push(e);
        }
      };
    }
    return qi++, l.then(ps, ps), l;
  }
  function ps() {
    if (--qi === 0 && Ve !== null) {
      ce !== null && (ce.status = "fulfilled");
      var t = Ve;
      Ve = null, ie = 0, ce = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function bm(t, l) {
    var a = [], e = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        a.push(u);
      }
    };
    return t.then(function() {
      e.status = "fulfilled", e.value = l;
      for (var u = 0; u < a.length; u++) (0, a[u])(l);
    }, function(u) {
      for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++) (0, a[u])(void 0);
    }), e;
  }
  var As = M.S;
  M.S = function(t, l) {
    a0 = tl(), typeof l == "object" && l !== null && typeof l.then == "function" && Sm(t, l), As !== null && As(t, l);
  };
  var Ha = d(null);
  function Bi() {
    var t = Ha.current;
    return t !== null ? t : dt.pooledCache;
  }
  function Ju(t, l) {
    l === null ? O(Ha, Ha.current) : O(Ha, l.pool);
  }
  function Ts() {
    var t = Bi();
    return t === null ? null : {
      parent: Et._currentValue,
      pool: t
    };
  }
  var fe = Error(y(460)), Yi = Error(y(474)), Wu = Error(y(542)), $u = { then: function() {
  } };
  function Es(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function zs(t, l, a) {
    switch (a = t[a], a === void 0 ? t.push(l) : a !== l && (l.then(Rl, Rl), l = a), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, Ms(t), t;
      default:
        if (typeof l.status == "string") l.then(Rl, Rl);
        else {
          if (t = dt, t !== null && 100 < t.shellSuspendCounter) throw Error(y(482));
          t = l, t.status = "pending", t.then(function(e) {
            if (l.status === "pending") {
              var u = l;
              u.status = "fulfilled", u.value = e;
            }
          }, function(e) {
            if (l.status === "pending") {
              var u = l;
              u.status = "rejected", u.reason = e;
            }
          });
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, Ms(t), t;
        }
        throw Ra = l, fe;
    }
  }
  function Na(t) {
    try {
      var l = t._init;
      return l(t._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ra = a, fe) : a;
    }
  }
  var Ra = null;
  function _s() {
    if (Ra === null) throw Error(y(459));
    var t = Ra;
    return Ra = null, t;
  }
  function Ms(t) {
    if (t === fe || t === Wu) throw Error(y(483));
  }
  var se = null, Ke = 0;
  function Fu(t) {
    var l = Ke;
    return Ke += 1, se === null && (se = []), zs(se, t, l);
  }
  function we(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function ku(t, l) {
    throw l.$$typeof === Ut ? Error(y(525)) : (t = Object.prototype.toString.call(l), Error(y(31, t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t)));
  }
  function Os(t) {
    function l(m, o) {
      if (t) {
        var v = m.deletions;
        v === null ? (m.deletions = [o], m.flags |= 16) : v.push(o);
      }
    }
    function a(m, o) {
      if (!t) return null;
      for (; o !== null; ) l(m, o), o = o.sibling;
      return null;
    }
    function e(m) {
      for (var o = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? o.set(m.key, m) : o.set(m.index, m), m = m.sibling;
      return o;
    }
    function u(m, o) {
      return m = ql(m, o), m.index = 0, m.sibling = null, m;
    }
    function n(m, o, v) {
      return m.index = v, t ? (v = m.alternate, v !== null ? (v = v.index, v < o ? (m.flags |= 67108866, o) : v) : (m.flags |= 67108866, o)) : (m.flags |= 1048576, o);
    }
    function i(m) {
      return t && m.alternate === null && (m.flags |= 67108866), m;
    }
    function c(m, o, v, p) {
      return o === null || o.tag !== 6 ? (o = _i(v, m.mode, p), o.return = m, o) : (o = u(o, v), o.return = m, o);
    }
    function s(m, o, v, p) {
      var Y = v.type;
      return Y === xt ? b(m, o, v.props.children, p, v.key) : o !== null && (o.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === w && Na(Y) === o.type) ? (o = u(o, v.props), we(o, v), o.return = m, o) : (o = Zu(v.type, v.key, v.props, null, m.mode, p), we(o, v), o.return = m, o);
    }
    function h(m, o, v, p) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== v.containerInfo || o.stateNode.implementation !== v.implementation ? (o = Mi(v, m.mode, p), o.return = m, o) : (o = u(o, v.children || []), o.return = m, o);
    }
    function b(m, o, v, p, Y) {
      return o === null || o.tag !== 7 ? (o = Oa(v, m.mode, p, Y), o.return = m, o) : (o = u(o, v), o.return = m, o);
    }
    function A(m, o, v) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint") return o = _i("" + o, m.mode, v), o.return = m, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Ot:
            return v = Zu(o.type, o.key, o.props, null, m.mode, v), we(v, o), v.return = m, v;
          case Qt:
            return o = Mi(o, m.mode, v), o.return = m, o;
          case w:
            return o = Na(o), A(m, o, v);
        }
        if (U(o) || Ol(o)) return o = Oa(o, m.mode, v, null), o.return = m, o;
        if (typeof o.then == "function") return A(m, Fu(o), v);
        if (o.$$typeof === St) return A(m, wu(m, o), v);
        ku(m, o);
      }
      return null;
    }
    function r(m, o, v, p) {
      var Y = o !== null ? o.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return Y !== null ? null : c(m, o, "" + v, p);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Ot:
            return v.key === Y ? s(m, o, v, p) : null;
          case Qt:
            return v.key === Y ? h(m, o, v, p) : null;
          case w:
            return v = Na(v), r(m, o, v, p);
        }
        if (U(v) || Ol(v)) return Y !== null ? null : b(m, o, v, p, null);
        if (typeof v.then == "function") return r(m, o, Fu(v), p);
        if (v.$$typeof === St) return r(m, o, wu(m, v), p);
        ku(m, v);
      }
      return null;
    }
    function S(m, o, v, p, Y) {
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint") return m = m.get(v) || null, c(o, m, "" + p, Y);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case Ot:
            return m = m.get(p.key === null ? v : p.key) || null, s(o, m, p, Y);
          case Qt:
            return m = m.get(p.key === null ? v : p.key) || null, h(o, m, p, Y);
          case w:
            return p = Na(p), S(m, o, v, p, Y);
        }
        if (U(p) || Ol(p)) return m = m.get(v) || null, b(o, m, p, Y, null);
        if (typeof p.then == "function") return S(m, o, v, Fu(p), Y);
        if (p.$$typeof === St) return S(m, o, v, wu(o, p), Y);
        ku(o, p);
      }
      return null;
    }
    function H(m, o, v, p) {
      for (var Y = null, lt = null, R = o, K = o = 0, P = null; R !== null && K < v.length; K++) {
        R.index > K ? (P = R, R = null) : P = R.sibling;
        var at = r(m, R, v[K], p);
        if (at === null) {
          R === null && (R = P);
          break;
        }
        t && R && at.alternate === null && l(m, R), o = n(at, o, K), lt === null ? Y = at : lt.sibling = at, lt = at, R = P;
      }
      if (K === v.length) return a(m, R), tt && Bl(m, K), Y;
      if (R === null) {
        for (; K < v.length; K++) R = A(m, v[K], p), R !== null && (o = n(R, o, K), lt === null ? Y = R : lt.sibling = R, lt = R);
        return tt && Bl(m, K), Y;
      }
      for (R = e(R); K < v.length; K++) P = S(R, m, K, v[K], p), P !== null && (t && P.alternate !== null && R.delete(P.key === null ? K : P.key), o = n(P, o, K), lt === null ? Y = P : lt.sibling = P, lt = P);
      return t && R.forEach(function(ba) {
        return l(m, ba);
      }), tt && Bl(m, K), Y;
    }
    function X(m, o, v, p) {
      if (v == null) throw Error(y(151));
      for (var Y = null, lt = null, R = o, K = o = 0, P = null, at = v.next(); R !== null && !at.done; K++, at = v.next()) {
        R.index > K ? (P = R, R = null) : P = R.sibling;
        var ba = r(m, R, at.value, p);
        if (ba === null) {
          R === null && (R = P);
          break;
        }
        t && R && ba.alternate === null && l(m, R), o = n(ba, o, K), lt === null ? Y = ba : lt.sibling = ba, lt = ba, R = P;
      }
      if (at.done) return a(m, R), tt && Bl(m, K), Y;
      if (R === null) {
        for (; !at.done; K++, at = v.next()) at = A(m, at.value, p), at !== null && (o = n(at, o, K), lt === null ? Y = at : lt.sibling = at, lt = at);
        return tt && Bl(m, K), Y;
      }
      for (R = e(R); !at.done; K++, at = v.next()) at = S(R, m, K, at.value, p), at !== null && (t && at.alternate !== null && R.delete(at.key === null ? K : at.key), o = n(at, o, K), lt === null ? Y = at : lt.sibling = at, lt = at);
      return t && R.forEach(function(j1) {
        return l(m, j1);
      }), tt && Bl(m, K), Y;
    }
    function ot(m, o, v, p) {
      if (typeof v == "object" && v !== null && v.type === xt && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Ot:
            t: {
              for (var Y = v.key; o !== null; ) {
                if (o.key === Y) {
                  if (Y = v.type, Y === xt) {
                    if (o.tag === 7) {
                      a(m, o.sibling), p = u(o, v.props.children), p.return = m, m = p;
                      break t;
                    }
                  } else if (o.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === w && Na(Y) === o.type) {
                    a(m, o.sibling), p = u(o, v.props), we(p, v), p.return = m, m = p;
                    break t;
                  }
                  a(m, o);
                  break;
                } else l(m, o);
                o = o.sibling;
              }
              v.type === xt ? (p = Oa(v.props.children, m.mode, p, v.key), p.return = m, m = p) : (p = Zu(v.type, v.key, v.props, null, m.mode, p), we(p, v), p.return = m, m = p);
            }
            return i(m);
          case Qt:
            t: {
              for (Y = v.key; o !== null; ) {
                if (o.key === Y) if (o.tag === 4 && o.stateNode.containerInfo === v.containerInfo && o.stateNode.implementation === v.implementation) {
                  a(m, o.sibling), p = u(o, v.children || []), p.return = m, m = p;
                  break t;
                } else {
                  a(m, o);
                  break;
                }
                else l(m, o);
                o = o.sibling;
              }
              p = Mi(v, m.mode, p), p.return = m, m = p;
            }
            return i(m);
          case w:
            return v = Na(v), ot(m, o, v, p);
        }
        if (U(v)) return H(m, o, v, p);
        if (Ol(v)) {
          if (Y = Ol(v), typeof Y != "function") throw Error(y(150));
          return v = Y.call(v), X(m, o, v, p);
        }
        if (typeof v.then == "function") return ot(m, o, Fu(v), p);
        if (v.$$typeof === St) return ot(m, o, wu(m, v), p);
        ku(m, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, o !== null && o.tag === 6 ? (a(m, o.sibling), p = u(o, v), p.return = m, m = p) : (a(m, o), p = _i(v, m.mode, p), p.return = m, m = p), i(m)) : a(m, o);
    }
    return function(m, o, v, p) {
      try {
        Ke = 0;
        var Y = ot(m, o, v, p);
        return se = null, Y;
      } catch (R) {
        if (R === fe || R === Wu) throw R;
        var lt = ul(29, R, null, m.mode);
        return lt.lanes = p, lt.return = m, lt;
      }
    };
  }
  var ja = Os(!0), Ds = Os(!1), ua = !1;
  function Gi(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
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
  function Qi(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function qa(t) {
    return {
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Ba(t, l, a) {
    var e = t.updateQueue;
    if (e === null) return null;
    if (e = e.shared, (ut & 2) !== 0) {
      var u = e.pending;
      return u === null ? l.next = l : (l.next = u.next, u.next = l), e.pending = l, l = Lu(t), ds(t, null, a), l;
    }
    return xu(t, e, l, a), Lu(t);
  }
  function Je(t, l, a) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (a & 4194048) !== 0)) {
      var e = l.lanes;
      e &= t.pendingLanes, a |= e, l.lanes = a, Sf(t, a);
    }
  }
  function Xi(t, l) {
    var a = t.updateQueue, e = t.alternate;
    if (e !== null && (e = e.updateQueue, a === e)) {
      var u = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          n === null ? u = n = i : n = n.next = i, a = a.next;
        } while (a !== null);
        n === null ? u = n = l : n = n.next = l;
      } else u = n = l;
      a = {
        baseState: e.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks
      }, t.updateQueue = a;
      return;
    }
    t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = l : t.next = l, a.lastBaseUpdate = l;
  }
  var xi = !1;
  function We() {
    if (xi) {
      var t = ce;
      if (t !== null) throw t;
    }
  }
  function $e(t, l, a, e) {
    xi = !1;
    var u = t.updateQueue;
    ua = !1;
    var n = u.firstBaseUpdate, i = u.lastBaseUpdate, c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var s = c, h = s.next;
      s.next = null, i === null ? n = h : i.next = h, i = s;
      var b = t.alternate;
      b !== null && (b = b.updateQueue, c = b.lastBaseUpdate, c !== i && (c === null ? b.firstBaseUpdate = h : c.next = h, b.lastBaseUpdate = s));
    }
    if (n !== null) {
      var A = u.baseState;
      i = 0, b = h = s = null, c = n;
      do {
        var r = c.lane & -536870913, S = r !== c.lane;
        if (S ? (I & r) === r : (e & r) === r) {
          r !== 0 && r === ie && (xi = !0), b !== null && (b = b.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          t: {
            var H = t, X = c;
            r = l;
            var ot = a;
            switch (X.tag) {
              case 1:
                if (H = X.payload, typeof H == "function") {
                  A = H.call(ot, A, r);
                  break t;
                }
                A = H;
                break t;
              case 3:
                H.flags = H.flags & -65537 | 128;
              case 0:
                if (H = X.payload, r = typeof H == "function" ? H.call(ot, A, r) : H, r == null) break t;
                A = N({}, A, r);
                break t;
              case 2:
                ua = !0;
            }
          }
          r = c.callback, r !== null && (t.flags |= 64, S && (t.flags |= 8192), S = u.callbacks, S === null ? u.callbacks = [r] : S.push(r));
        } else S = {
          lane: r,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        }, b === null ? (h = b = S, s = A) : b = b.next = S, i |= r;
        if (c = c.next, c === null) {
          if (c = u.shared.pending, c === null) break;
          S = c, c = S.next, S.next = null, u.lastBaseUpdate = S, u.shared.pending = null;
        }
      } while (!0);
      b === null && (s = A), u.baseState = s, u.firstBaseUpdate = h, u.lastBaseUpdate = b, n === null && (u.shared.lanes = 0), sa |= i, t.lanes = i, t.memoizedState = A;
    }
  }
  function Us(t, l) {
    if (typeof t != "function") throw Error(y(191, t));
    t.call(l);
  }
  function Cs(t, l) {
    var a = t.callbacks;
    if (a !== null) for (t.callbacks = null, t = 0; t < a.length; t++) Us(a[t], l);
  }
  var oe = d(null), Iu = d(0);
  function Hs(t, l) {
    t = Jl, O(Iu, t), O(oe, l), Jl = t | l.baseLanes;
  }
  function Li() {
    O(Iu, Jl), O(oe, oe.current);
  }
  function Zi() {
    Jl = Iu.current, T(oe), T(Iu);
  }
  var nl = d(null), Sl = null;
  function na(t) {
    var l = t.alternate;
    O(pt, pt.current & 1), O(nl, t), Sl === null && (l === null || oe.current !== null || l.memoizedState !== null) && (Sl = t);
  }
  function Vi(t) {
    O(pt, pt.current), O(nl, t), Sl === null && (Sl = t);
  }
  function Ns(t) {
    t.tag === 22 ? (O(pt, pt.current), O(nl, t), Sl === null && (Sl = t)) : ia(t);
  }
  function ia() {
    O(pt, pt.current), O(nl, nl.current);
  }
  function il(t) {
    T(nl), Sl === t && (Sl = null), T(pt);
  }
  var pt = d(0);
  function Pu(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var a = l.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || $c(a) || Fc(a))) return l;
      } else if (l.tag === 19 && (l.memoizedProps.revealOrder === "forwards" || l.memoizedProps.revealOrder === "backwards" || l.memoizedProps.revealOrder === "unstable_legacy-backwards" || l.memoizedProps.revealOrder === "together")) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  var Ql = 0, V = null, ft = null, zt = null, tn = !1, de = !1, Ya = !1, ln = 0, Fe = 0, me = null, pm = 0;
  function rt() {
    throw Error(y(321));
  }
  function Ki(t, l) {
    if (l === null) return !1;
    for (var a = 0; a < l.length && a < t.length; a++) if (!el(t[a], l[a])) return !1;
    return !0;
  }
  function wi(t, l, a, e, u, n) {
    return Ql = n, V = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, M.H = t === null || t.memoizedState === null ? ro : cc, Ya = !1, n = a(e, u), Ya = !1, de && (n = js(l, a, e, u)), Rs(t), n;
  }
  function Rs(t) {
    M.H = Pe;
    var l = ft !== null && ft.next !== null;
    if (Ql = 0, zt = ft = V = null, tn = !1, Fe = 0, me = null, l) throw Error(y(300));
    t === null || _t || (t = t.dependencies, t !== null && Ku(t) && (_t = !0));
  }
  function js(t, l, a, e) {
    V = t;
    var u = 0;
    do {
      if (de && (me = null), Fe = 0, de = !1, 25 <= u) throw Error(y(301));
      if (u += 1, zt = ft = null, t.updateQueue != null) {
        var n = t.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      M.H = go, n = l(a, e);
    } while (de);
    return n;
  }
  function Am() {
    var t = M.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? ke(l) : l, t = t.useState()[0], (ft !== null ? ft.memoizedState : null) !== t && (V.flags |= 1024), l;
  }
  function Ji() {
    var t = ln !== 0;
    return ln = 0, t;
  }
  function Wi(t, l, a) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~a;
  }
  function $i(t) {
    if (tn) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      tn = !1;
    }
    Ql = 0, zt = ft = V = null, de = !1, Fe = ln = 0, me = null;
  }
  function Vt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return zt === null ? V.memoizedState = zt = t : zt = zt.next = t, zt;
  }
  function At() {
    if (ft === null) {
      var t = V.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = ft.next;
    var l = zt === null ? V.memoizedState : zt.next;
    if (l !== null) zt = l, ft = t;
    else {
      if (t === null)
        throw V.alternate === null ? Error(y(467)) : Error(y(310));
      ft = t, t = {
        memoizedState: ft.memoizedState,
        baseState: ft.baseState,
        baseQueue: ft.baseQueue,
        queue: ft.queue,
        next: null
      }, zt === null ? V.memoizedState = zt = t : zt = zt.next = t;
    }
    return zt;
  }
  function an() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function ke(t) {
    var l = Fe;
    return Fe += 1, me === null && (me = []), t = zs(me, t, l), l = V, (zt === null ? l.memoizedState : zt.next) === null && (l = l.alternate, M.H = l === null || l.memoizedState === null ? ro : cc), t;
  }
  function en(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ke(t);
      if (t.$$typeof === St) return qt(t);
    }
    throw Error(y(438, String(t)));
  }
  function Fi(t) {
    var l = null, a = V.updateQueue;
    if (a !== null && (l = a.memoCache), l == null) {
      var e = V.alternate;
      e !== null && (e = e.updateQueue, e !== null && (e = e.memoCache, e != null && (l = {
        data: e.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (l ??= {
      data: [],
      index: 0
    }, a === null && (a = an(), V.updateQueue = a), a.memoCache = l, a = l.data[l.index], a === void 0) for (a = l.data[l.index] = Array(t), e = 0; e < t; e++) a[e] = ol;
    return l.index++, a;
  }
  function Xl(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function un(t) {
    return ki(At(), ft, t);
  }
  function ki(t, l, a) {
    var e = t.queue;
    if (e === null) throw Error(y(311));
    e.lastRenderedReducer = a;
    var u = t.baseQueue, n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        u.next = n.next, n.next = i;
      }
      l.baseQueue = u = n, e.pending = null;
    }
    if (n = t.baseState, u === null) t.memoizedState = n;
    else {
      l = u.next;
      var c = i = null, s = null, h = l, b = !1;
      do {
        var A = h.lane & -536870913;
        if (A !== h.lane ? (I & A) === A : (Ql & A) === A) {
          var r = h.revertLane;
          if (r === 0) s !== null && (s = s.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          }), A === ie && (b = !0);
          else if ((Ql & r) === r) {
            h = h.next, r === ie && (b = !0);
            continue;
          } else A = {
            lane: 0,
            revertLane: h.revertLane,
            gesture: null,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          }, s === null ? (c = s = A, i = n) : s = s.next = A, V.lanes |= r, sa |= r;
          A = h.action, Ya && a(n, A), n = h.hasEagerState ? h.eagerState : a(n, A);
        } else r = {
          lane: A,
          revertLane: h.revertLane,
          gesture: h.gesture,
          action: h.action,
          hasEagerState: h.hasEagerState,
          eagerState: h.eagerState,
          next: null
        }, s === null ? (c = s = r, i = n) : s = s.next = r, V.lanes |= A, sa |= A;
        h = h.next;
      } while (h !== null && h !== l);
      if (s === null ? i = n : s.next = c, !el(n, t.memoizedState) && (_t = !0, b && (a = ce, a !== null))) throw a;
      t.memoizedState = n, t.baseState = i, t.baseQueue = s, e.lastRenderedState = n;
    }
    return u === null && (e.lanes = 0), [t.memoizedState, e.dispatch];
  }
  function Ii(t) {
    var l = At(), a = l.queue;
    if (a === null) throw Error(y(311));
    a.lastRenderedReducer = t;
    var e = a.dispatch, u = a.pending, n = l.memoizedState;
    if (u !== null) {
      a.pending = null;
      var i = u = u.next;
      do
        n = t(n, i.action), i = i.next;
      while (i !== u);
      el(n, l.memoizedState) || (_t = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), a.lastRenderedState = n;
    }
    return [n, e];
  }
  function qs(t, l, a) {
    var e = V, u = At(), n = tt;
    if (n) {
      if (a === void 0) throw Error(y(407));
      a = a();
    } else a = l();
    var i = !el((ft || u).memoizedState, a);
    if (i && (u.memoizedState = a, _t = !0), u = u.queue, lc(Gs.bind(null, e, u, t), [t]), u.getSnapshot !== l || i || zt !== null && zt.memoizedState.tag & 1) {
      if (e.flags |= 2048, ye(9, { destroy: void 0 }, Ys.bind(null, e, u, a, l), null), dt === null) throw Error(y(349));
      n || (Ql & 127) !== 0 || Bs(e, l, a);
    }
    return a;
  }
  function Bs(t, l, a) {
    t.flags |= 16384, t = {
      getSnapshot: l,
      value: a
    }, l = V.updateQueue, l === null ? (l = an(), V.updateQueue = l, l.stores = [t]) : (a = l.stores, a === null ? l.stores = [t] : a.push(t));
  }
  function Ys(t, l, a, e) {
    l.value = a, l.getSnapshot = e, Qs(l) && Xs(t);
  }
  function Gs(t, l, a) {
    return a(function() {
      Qs(l) && Xs(t);
    });
  }
  function Qs(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var a = l();
      return !el(t, a);
    } catch {
      return !0;
    }
  }
  function Xs(t) {
    var l = Ma(t, 2);
    l !== null && kt(l, t, 2);
  }
  function Pi(t) {
    var l = Vt();
    if (typeof t == "function") {
      var a = t;
      if (t = a(), Ya) {
        kl(!0);
        try {
          a();
        } finally {
          kl(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xl,
      lastRenderedState: t
    }, l;
  }
  function xs(t, l, a, e) {
    return t.baseState = a, ki(t, ft, typeof e == "function" ? e : Xl);
  }
  function Tm(t, l, a, e, u) {
    if (fn(t)) throw Error(y(485));
    if (t = l.action, t !== null) {
      var n = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          n.listeners.push(i);
        }
      };
      M.T !== null ? a(!0) : n.isTransition = !1, e(n), a = l.pending, a === null ? (n.next = l.pending = n, Ls(l, n)) : (n.next = a.next, l.pending = a.next = n);
    }
  }
  function Ls(t, l) {
    var a = l.action, e = l.payload, u = t.state;
    if (l.isTransition) {
      var n = M.T, i = {};
      M.T = i;
      try {
        var c = a(u, e), s = M.S;
        s !== null && s(i, c), Zs(t, l, c);
      } catch (h) {
        tc(t, l, h);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), M.T = n;
      }
    } else try {
      n = a(u, e), Zs(t, l, n);
    } catch (h) {
      tc(t, l, h);
    }
  }
  function Zs(t, l, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(e) {
      Vs(t, l, e);
    }, function(e) {
      return tc(t, l, e);
    }) : Vs(t, l, a);
  }
  function Vs(t, l, a) {
    l.status = "fulfilled", l.value = a, Ks(l), t.state = a, l = t.pending, l !== null && (a = l.next, a === l ? t.pending = null : (a = a.next, l.next = a, Ls(t, a)));
  }
  function tc(t, l, a) {
    var e = t.pending;
    if (t.pending = null, e !== null) {
      e = e.next;
      do
        l.status = "rejected", l.reason = a, Ks(l), l = l.next;
      while (l !== e);
    }
    t.action = null;
  }
  function Ks(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function ws(t, l) {
    return l;
  }
  function Js(t, l) {
    if (tt) {
      var a = dt.formState;
      if (a !== null) {
        t: {
          var e = V;
          if (tt) {
            if (yt) {
              l: {
                for (var u = yt, n = gl; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break l;
                  }
                  if (u = pl(u.nextSibling), u === null) {
                    u = null;
                    break l;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                yt = pl(u.nextSibling), e = u.data === "F!";
                break t;
              }
            }
            aa(e);
          }
          e = !1;
        }
        e && (l = a[0]);
      }
    }
    return a = Vt(), a.memoizedState = a.baseState = l, e = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ws,
      lastRenderedState: l
    }, a.queue = e, a = yo.bind(null, V, e), e.dispatch = a, e = Pi(!1), n = ic.bind(null, V, !1, e.queue), e = Vt(), u = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, e.queue = u, a = Tm.bind(null, V, u, n, a), u.dispatch = a, e.memoizedState = t, [
      l,
      a,
      !1
    ];
  }
  function Ws(t) {
    return $s(At(), ft, t);
  }
  function $s(t, l, a) {
    if (l = ki(t, l, ws)[0], t = un(Xl)[0], typeof l == "object" && l !== null && typeof l.then == "function") try {
      var e = ke(l);
    } catch (i) {
      throw i === fe ? Wu : i;
    }
    else e = l;
    l = At();
    var u = l.queue, n = u.dispatch;
    return a !== l.memoizedState && (V.flags |= 2048, ye(9, { destroy: void 0 }, Em.bind(null, u, a), null)), [
      e,
      n,
      t
    ];
  }
  function Em(t, l) {
    t.action = l;
  }
  function Fs(t) {
    var l = At(), a = ft;
    if (a !== null) return $s(l, a, t);
    At(), l = l.memoizedState, a = At();
    var e = a.queue.dispatch;
    return a.memoizedState = t, [
      l,
      e,
      !1
    ];
  }
  function ye(t, l, a, e) {
    return t = {
      tag: t,
      create: a,
      deps: e,
      inst: l,
      next: null
    }, l = V.updateQueue, l === null && (l = an(), V.updateQueue = l), a = l.lastEffect, a === null ? l.lastEffect = t.next = t : (e = a.next, a.next = t, t.next = e, l.lastEffect = t), t;
  }
  function ks() {
    return At().memoizedState;
  }
  function nn(t, l, a, e) {
    var u = Vt();
    V.flags |= t, u.memoizedState = ye(1 | l, { destroy: void 0 }, a, e === void 0 ? null : e);
  }
  function cn(t, l, a, e) {
    var u = At();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    ft !== null && e !== null && Ki(e, ft.memoizedState.deps) ? u.memoizedState = ye(l, n, a, e) : (V.flags |= t, u.memoizedState = ye(1 | l, n, a, e));
  }
  function Is(t, l) {
    nn(8390656, 8, t, l);
  }
  function lc(t, l) {
    cn(2048, 8, t, l);
  }
  function zm(t) {
    V.flags |= 4;
    var l = V.updateQueue;
    if (l === null) l = an(), V.updateQueue = l, l.events = [t];
    else {
      var a = l.events;
      a === null ? l.events = [t] : a.push(t);
    }
  }
  function Ps(t) {
    var l = At().memoizedState;
    return zm({
      ref: l,
      nextImpl: t
    }), function() {
      if ((ut & 2) !== 0) throw Error(y(440));
      return l.impl.apply(void 0, arguments);
    };
  }
  function to(t, l) {
    return cn(4, 2, t, l);
  }
  function lo(t, l) {
    return cn(4, 4, t, l);
  }
  function ao(t, l) {
    if (typeof l == "function") {
      t = t();
      var a = l(t);
      return function() {
        typeof a == "function" ? a() : l(null);
      };
    }
    if (l != null) return t = t(), l.current = t, function() {
      l.current = null;
    };
  }
  function eo(t, l, a) {
    a = a != null ? a.concat([t]) : null, cn(4, 4, ao.bind(null, l, t), a);
  }
  function ac() {
  }
  function uo(t, l) {
    var a = At();
    l = l === void 0 ? null : l;
    var e = a.memoizedState;
    return l !== null && Ki(l, e[1]) ? e[0] : (a.memoizedState = [t, l], t);
  }
  function no(t, l) {
    var a = At();
    l = l === void 0 ? null : l;
    var e = a.memoizedState;
    if (l !== null && Ki(l, e[1])) return e[0];
    if (e = t(), Ya) {
      kl(!0);
      try {
        t();
      } finally {
        kl(!1);
      }
    }
    return a.memoizedState = [e, l], e;
  }
  function ec(t, l, a) {
    return a === void 0 || (Ql & 1073741824) !== 0 && (I & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = a, t = u0(), V.lanes |= t, sa |= t, a);
  }
  function io(t, l, a, e) {
    return el(a, l) ? a : oe.current !== null ? (t = ec(t, a, e), el(t, l) || (_t = !0), t) : (Ql & 42) === 0 || (Ql & 1073741824) !== 0 && (I & 261930) === 0 ? (_t = !0, t.memoizedState = a) : (t = u0(), V.lanes |= t, sa |= t, l);
  }
  function co(t, l, a, e, u) {
    var n = D.p;
    D.p = n !== 0 && 8 > n ? n : 8;
    var i = M.T, c = {};
    M.T = c, ic(t, !1, l, a);
    try {
      var s = u(), h = M.S;
      h !== null && h(c, s), s !== null && typeof s == "object" && typeof s.then == "function" ? Ie(t, l, bm(s, e), bl(t)) : Ie(t, l, e, bl(t));
    } catch (b) {
      Ie(t, l, {
        then: function() {
        },
        status: "rejected",
        reason: b
      }, bl());
    } finally {
      D.p = n, i !== null && c.types !== null && (i.types = c.types), M.T = i;
    }
  }
  function _m() {
  }
  function uc(t, l, a, e) {
    if (t.tag !== 5) throw Error(y(476));
    var u = fo(t).queue;
    co(t, u, l, et, a === null ? _m : function() {
      return so(t), a(e);
    });
  }
  function fo(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: et,
      baseState: et,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xl,
        lastRenderedState: et
      },
      next: null
    };
    var a = {};
    return l.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xl,
        lastRenderedState: a
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function so(t) {
    var l = fo(t);
    l.next === null && (l = t.alternate.memoizedState), Ie(t, l.next.queue, {}, bl());
  }
  function nc() {
    return qt(hu);
  }
  function oo() {
    return At().memoizedState;
  }
  function mo() {
    return At().memoizedState;
  }
  function Mm(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var a = bl();
          t = qa(a);
          var e = Ba(l, t, a);
          e !== null && (kt(e, l, a), Je(e, l, a)), l = { cache: ji() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function Om(t, l, a) {
    var e = bl();
    a = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, fn(t) ? vo(l, a) : (a = Ei(t, l, a, e), a !== null && (kt(a, t, e), ho(a, l, e)));
  }
  function yo(t, l, a) {
    Ie(t, l, a, bl());
  }
  function Ie(t, l, a, e) {
    var u = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (fn(t)) vo(l, u);
    else {
      var n = t.alternate;
      if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null)) try {
        var i = l.lastRenderedState, c = n(i, a);
        if (u.hasEagerState = !0, u.eagerState = c, el(c, i)) return xu(t, l, u, 0), dt === null && Xu(), !1;
      } catch {
      }
      if (a = Ei(t, l, u, e), a !== null) return kt(a, t, e), ho(a, l, e), !0;
    }
    return !1;
  }
  function ic(t, l, a, e) {
    if (e = {
      lane: 2,
      revertLane: Gc(),
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, fn(t)) {
      if (l) throw Error(y(479));
    } else l = Ei(t, a, e, 2), l !== null && kt(l, t, 2);
  }
  function fn(t) {
    var l = t.alternate;
    return t === V || l !== null && l === V;
  }
  function vo(t, l) {
    de = tn = !0;
    var a = t.pending;
    a === null ? l.next = l : (l.next = a.next, a.next = l), t.pending = l;
  }
  function ho(t, l, a) {
    if ((a & 4194048) !== 0) {
      var e = l.lanes;
      e &= t.pendingLanes, a |= e, l.lanes = a, Sf(t, a);
    }
  }
  var Pe = {
    readContext: qt,
    use: en,
    useCallback: rt,
    useContext: rt,
    useEffect: rt,
    useImperativeHandle: rt,
    useLayoutEffect: rt,
    useInsertionEffect: rt,
    useMemo: rt,
    useReducer: rt,
    useRef: rt,
    useState: rt,
    useDebugValue: rt,
    useDeferredValue: rt,
    useTransition: rt,
    useSyncExternalStore: rt,
    useId: rt,
    useHostTransitionStatus: rt,
    useFormState: rt,
    useActionState: rt,
    useOptimistic: rt,
    useMemoCache: rt,
    useCacheRefresh: rt
  };
  Pe.useEffectEvent = rt;
  var ro = {
    readContext: qt,
    use: en,
    useCallback: function(t, l) {
      return Vt().memoizedState = [t, l === void 0 ? null : l], t;
    },
    useContext: qt,
    useEffect: Is,
    useImperativeHandle: function(t, l, a) {
      a = a != null ? a.concat([t]) : null, nn(4194308, 4, ao.bind(null, l, t), a);
    },
    useLayoutEffect: function(t, l) {
      return nn(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      nn(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var a = Vt();
      l = l === void 0 ? null : l;
      var e = t();
      if (Ya) {
        kl(!0);
        try {
          t();
        } finally {
          kl(!1);
        }
      }
      return a.memoizedState = [e, l], e;
    },
    useReducer: function(t, l, a) {
      var e = Vt();
      if (a !== void 0) {
        var u = a(l);
        if (Ya) {
          kl(!0);
          try {
            a(l);
          } finally {
            kl(!1);
          }
        }
      } else u = l;
      return e.memoizedState = e.baseState = u, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: u
      }, e.queue = t, t = t.dispatch = Om.bind(null, V, t), [e.memoizedState, t];
    },
    useRef: function(t) {
      var l = Vt();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = Pi(t);
      var l = t.queue, a = yo.bind(null, V, l);
      return l.dispatch = a, [t.memoizedState, a];
    },
    useDebugValue: ac,
    useDeferredValue: function(t, l) {
      return ec(Vt(), t, l);
    },
    useTransition: function() {
      var t = Pi(!1);
      return t = co.bind(null, V, t.queue, !0, !1), Vt().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, a) {
      var e = V, u = Vt();
      if (tt) {
        if (a === void 0) throw Error(y(407));
        a = a();
      } else {
        if (a = l(), dt === null) throw Error(y(349));
        (I & 127) !== 0 || Bs(e, l, a);
      }
      u.memoizedState = a;
      var n = {
        value: a,
        getSnapshot: l
      };
      return u.queue = n, Is(Gs.bind(null, e, n, t), [t]), e.flags |= 2048, ye(9, { destroy: void 0 }, Ys.bind(null, e, n, a, l), null), a;
    },
    useId: function() {
      var t = Vt(), l = dt.identifierPrefix;
      if (tt) {
        var a = Ul, e = Dl;
        a = (e & ~(1 << 32 - al(e) - 1)).toString(32) + a, l = "_" + l + "R_" + a, a = ln++, 0 < a && (l += "H" + a.toString(32)), l += "_";
      } else a = pm++, l = "_" + l + "r_" + a.toString(32) + "_";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: nc,
    useFormState: Js,
    useActionState: Js,
    useOptimistic: function(t) {
      var l = Vt();
      l.memoizedState = l.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = a, l = ic.bind(null, V, !0, a), a.dispatch = l, [t, l];
    },
    useMemoCache: Fi,
    useCacheRefresh: function() {
      return Vt().memoizedState = Mm.bind(null, V);
    },
    useEffectEvent: function(t) {
      var l = Vt(), a = { impl: t };
      return l.memoizedState = a, function() {
        if ((ut & 2) !== 0) throw Error(y(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, cc = {
    readContext: qt,
    use: en,
    useCallback: uo,
    useContext: qt,
    useEffect: lc,
    useImperativeHandle: eo,
    useInsertionEffect: to,
    useLayoutEffect: lo,
    useMemo: no,
    useReducer: un,
    useRef: ks,
    useState: function() {
      return un(Xl);
    },
    useDebugValue: ac,
    useDeferredValue: function(t, l) {
      return io(At(), ft.memoizedState, t, l);
    },
    useTransition: function() {
      var t = un(Xl)[0], l = At().memoizedState;
      return [typeof t == "boolean" ? t : ke(t), l];
    },
    useSyncExternalStore: qs,
    useId: oo,
    useHostTransitionStatus: nc,
    useFormState: Ws,
    useActionState: Ws,
    useOptimistic: function(t, l) {
      return xs(At(), ft, t, l);
    },
    useMemoCache: Fi,
    useCacheRefresh: mo
  };
  cc.useEffectEvent = Ps;
  var go = {
    readContext: qt,
    use: en,
    useCallback: uo,
    useContext: qt,
    useEffect: lc,
    useImperativeHandle: eo,
    useInsertionEffect: to,
    useLayoutEffect: lo,
    useMemo: no,
    useReducer: Ii,
    useRef: ks,
    useState: function() {
      return Ii(Xl);
    },
    useDebugValue: ac,
    useDeferredValue: function(t, l) {
      var a = At();
      return ft === null ? ec(a, t, l) : io(a, ft.memoizedState, t, l);
    },
    useTransition: function() {
      var t = Ii(Xl)[0], l = At().memoizedState;
      return [typeof t == "boolean" ? t : ke(t), l];
    },
    useSyncExternalStore: qs,
    useId: oo,
    useHostTransitionStatus: nc,
    useFormState: Fs,
    useActionState: Fs,
    useOptimistic: function(t, l) {
      var a = At();
      return ft !== null ? xs(a, ft, t, l) : (a.baseState = t, [t, a.queue.dispatch]);
    },
    useMemoCache: Fi,
    useCacheRefresh: mo
  };
  go.useEffectEvent = Ps;
  function fc(t, l, a, e) {
    l = t.memoizedState, a = a(e, l), a = a == null ? l : N({}, l, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var sc = {
    enqueueSetState: function(t, l, a) {
      t = t._reactInternals;
      var e = bl(), u = qa(e);
      u.payload = l, a != null && (u.callback = a), l = Ba(t, u, e), l !== null && (kt(l, t, e), Je(l, t, e));
    },
    enqueueReplaceState: function(t, l, a) {
      t = t._reactInternals;
      var e = bl(), u = qa(e);
      u.tag = 1, u.payload = l, a != null && (u.callback = a), l = Ba(t, u, e), l !== null && (kt(l, t, e), Je(l, t, e));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var a = bl(), e = qa(a);
      e.tag = 2, l != null && (e.callback = l), l = Ba(t, e, a), l !== null && (kt(l, t, a), Je(l, t, a));
    }
  };
  function So(t, l, a, e, u, n, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(e, n, i) : l.prototype && l.prototype.isPureReactComponent ? !Qe(a, e) || !Qe(u, n) : !0;
  }
  function bo(t, l, a, e) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(a, e), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(a, e), l.state !== t && sc.enqueueReplaceState(l, l.state, null);
  }
  function Ga(t, l) {
    var a = l;
    if ("ref" in l) {
      a = {};
      for (var e in l) e !== "ref" && (a[e] = l[e]);
    }
    if (t = t.defaultProps) {
      a === l && (a = N({}, a));
      for (var u in t) a[u] === void 0 && (a[u] = t[u]);
    }
    return a;
  }
  function Dm(t) {
    Qu(t);
  }
  function Um(t) {
    console.error(t);
  }
  function Cm(t) {
    Qu(t);
  }
  function sn(t, l) {
    try {
      var a = t.onUncaughtError;
      a(l.value, { componentStack: l.stack });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function po(t, l, a) {
    try {
      var e = t.onCaughtError;
      e(a.value, {
        componentStack: a.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function oc(t, l, a) {
    return a = qa(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      sn(t, l);
    }, a;
  }
  function Ao(t) {
    return t = qa(t), t.tag = 3, t;
  }
  function To(t, l, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      t.payload = function() {
        return u(n);
      }, t.callback = function() {
        po(l, a, e);
      };
    }
    var i = a.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      po(l, a, e), typeof u != "function" && (oa === null ? oa = /* @__PURE__ */ new Set([this]) : oa.add(this));
      var c = e.stack;
      this.componentDidCatch(e.value, { componentStack: c !== null ? c : "" });
    });
  }
  function Hm(t, l, a, e, u) {
    if (a.flags |= 32768, e !== null && typeof e == "object" && typeof e.then == "function") {
      if (l = a.alternate, l !== null && ne(l, a, u, !0), a = nl.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Sl === null ? An() : a.alternate === null && gt === 0 && (gt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, e === $u ? a.flags |= 16384 : (l = a.updateQueue, l === null ? a.updateQueue = /* @__PURE__ */ new Set([e]) : l.add(e), qc(t, e, u)), !1;
          case 22:
            return a.flags |= 65536, e === $u ? a.flags |= 16384 : (l = a.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([e])
            }, a.updateQueue = l) : (a = l.retryQueue, a === null ? l.retryQueue = /* @__PURE__ */ new Set([e]) : a.add(e)), qc(t, e, u)), !1;
        }
        throw Error(y(435, a.tag));
      }
      return qc(t, e, u), An(), !1;
    }
    if (tt) return l = nl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = u, e !== Ui && (t = Error(y(422), { cause: e }), Le(vl(t, a)))) : (e !== Ui && (l = Error(y(423), { cause: e }), Le(vl(l, a))), t = t.current.alternate, t.flags |= 65536, u &= -u, t.lanes |= u, e = vl(e, a), u = oc(t.stateNode, e, u), Xi(t, u), gt !== 4 && (gt = 2)), !1;
    var n = Error(y(520), { cause: e });
    if (n = vl(n, a), cu === null ? cu = [n] : cu.push(n), gt !== 4 && (gt = 2), l === null) return !0;
    e = vl(e, a), a = l;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, t = u & -u, a.lanes |= t, t = oc(a.stateNode, e, t), Xi(a, t), !1;
        case 1:
          if (l = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (oa === null || !oa.has(n)))) return a.flags |= 65536, u &= -u, a.lanes |= u, u = Ao(u), To(u, t, a, e), Xi(a, u), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var dc = Error(y(461)), _t = !1;
  function Bt(t, l, a, e) {
    l.child = t === null ? Ds(l, null, a, e) : ja(l, t.child, a, e);
  }
  function Eo(t, l, a, e, u) {
    a = a.render;
    var n = l.ref;
    if ("ref" in e) {
      var i = {};
      for (var c in e) c !== "ref" && (i[c] = e[c]);
    } else i = e;
    return Ca(l), e = wi(t, l, a, i, n, u), c = Ji(), t !== null && !_t ? (Wi(t, l, u), xl(t, l, u)) : (tt && c && Oi(l), l.flags |= 1, Bt(t, l, e, u), l.child);
  }
  function zo(t, l, a, e, u) {
    if (t === null) {
      var n = a.type;
      return typeof n == "function" && !zi(n) && n.defaultProps === void 0 && a.compare === null ? (l.tag = 15, l.type = n, _o(t, l, n, e, u)) : (t = Zu(a.type, null, e, l, l.mode, u), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (n = t.child, !bc(t, u)) {
      var i = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Qe, a(i, e) && t.ref === l.ref) return xl(t, l, u);
    }
    return l.flags |= 1, t = ql(n, e), t.ref = l.ref, t.return = l, l.child = t;
  }
  function _o(t, l, a, e, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Qe(n, e) && t.ref === l.ref) if (_t = !1, l.pendingProps = e = n, bc(t, u)) (t.flags & 131072) !== 0 && (_t = !0);
      else return l.lanes = t.lanes, xl(t, l, u);
    }
    return mc(t, l, a, e, u);
  }
  function Mo(t, l, a, e) {
    var u = e.children, n = t !== null ? t.memoizedState : null;
    if (t === null && l.stateNode === null && (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | a : a, t !== null) {
          for (e = l.child = t.child, u = 0; e !== null; ) u = u | e.lanes | e.childLanes, e = e.sibling;
          e = u & ~n;
        } else e = 0, l.child = null;
        return Oo(t, l, n, a, e);
      }
      if ((a & 536870912) !== 0) l.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, t !== null && Ju(l, n !== null ? n.cachePool : null), n !== null ? Hs(l, n) : Li(), Ns(l);
      else return e = l.lanes = 536870912, Oo(t, l, n !== null ? n.baseLanes | a : a, a, e);
    } else n !== null ? (Ju(l, n.cachePool), Hs(l, n), ia(l), l.memoizedState = null) : (t !== null && Ju(l, null), Li(), ia(l));
    return Bt(t, l, u, a), l.child;
  }
  function tu(t, l) {
    return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.sibling;
  }
  function Oo(t, l, a, e, u) {
    var n = Bi();
    return n = n === null ? null : {
      parent: Et._currentValue,
      pool: n
    }, l.memoizedState = {
      baseLanes: a,
      cachePool: n
    }, t !== null && Ju(l, null), Li(), Ns(l), t !== null && ne(t, l, e, !0), l.childLanes = u, null;
  }
  function on(t, l) {
    return l = mn({
      mode: l.mode,
      children: l.children
    }, t.mode), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Do(t, l, a) {
    return ja(l, t.child, null, a), t = on(l, l.pendingProps), t.flags |= 2, il(l), l.memoizedState = null, t;
  }
  function Nm(t, l, a) {
    var e = l.pendingProps, u = (l.flags & 128) !== 0;
    if (l.flags &= -129, t === null) {
      if (tt) {
        if (e.mode === "hidden") return t = on(l, e), l.lanes = 536870912, tu(null, t);
        if (Vi(l), (t = yt) ? (t = x0(t, gl), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: ta !== null ? {
            id: Dl,
            overflow: Ul
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = ys(t), a.return = l, l.child = a, jt = l, yt = null)) : t = null, t === null) throw aa(l);
        return l.lanes = 536870912, null;
      }
      return on(l, e);
    }
    var n = t.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (Vi(l), u) if (l.flags & 256) l.flags &= -257, l = Do(t, l, a);
      else if (l.memoizedState !== null) l.child = t.child, l.flags |= 128, l = null;
      else throw Error(y(558));
      else if (_t || ne(t, l, a, !1), u = (a & t.childLanes) !== 0, _t || u) {
        if (e = dt, e !== null && (i = bf(e, a), i !== 0 && i !== n.retryLane)) throw n.retryLane = i, Ma(t, i), kt(e, t, i), dc;
        An(), l = Do(t, l, a);
      } else t = n.treeContext, yt = pl(i.nextSibling), jt = l, tt = !0, la = null, gl = !1, t !== null && rs(l, t), l = on(l, e), l.flags |= 4096;
      return l;
    }
    return t = ql(t.child, {
      mode: e.mode,
      children: e.children
    }), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function dn(t, l) {
    var a = l.ref;
    if (a === null) t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(y(284));
      (t === null || t.ref !== a) && (l.flags |= 4194816);
    }
  }
  function mc(t, l, a, e, u) {
    return Ca(l), a = wi(t, l, a, e, void 0, u), e = Ji(), t !== null && !_t ? (Wi(t, l, u), xl(t, l, u)) : (tt && e && Oi(l), l.flags |= 1, Bt(t, l, a, u), l.child);
  }
  function Uo(t, l, a, e, u, n) {
    return Ca(l), l.updateQueue = null, a = js(l, e, a, u), Rs(t), e = Ji(), t !== null && !_t ? (Wi(t, l, n), xl(t, l, n)) : (tt && e && Oi(l), l.flags |= 1, Bt(t, l, a, n), l.child);
  }
  function Co(t, l, a, e, u) {
    if (Ca(l), l.stateNode === null) {
      var n = le, i = a.contextType;
      typeof i == "object" && i !== null && (n = qt(i)), n = new a(e, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = sc, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = e, n.state = l.memoizedState, n.refs = {}, Gi(l), i = a.contextType, n.context = typeof i == "object" && i !== null ? qt(i) : le, n.state = l.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (fc(l, a, i, e), n.state = l.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && sc.enqueueReplaceState(n, n.state, null), $e(l, e, n, u), We(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), e = !0;
    } else if (t === null) {
      n = l.stateNode;
      var c = l.memoizedProps, s = Ga(a, c);
      n.props = s;
      var h = n.context, b = a.contextType;
      i = le, typeof b == "object" && b !== null && (i = qt(b));
      var A = a.getDerivedStateFromProps;
      b = typeof A == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = l.pendingProps !== c, b || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || h !== i) && bo(l, n, e, i), ua = !1;
      var r = l.memoizedState;
      n.state = r, $e(l, e, n, u), We(), h = l.memoizedState, c || r !== h || ua ? (typeof A == "function" && (fc(l, a, A, e), h = l.memoizedState), (s = ua || So(l, a, s, e, r, h, i)) ? (b || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = e, l.memoizedState = h), n.props = e, n.state = h, n.context = i, e = s) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), e = !1);
    } else {
      n = l.stateNode, Qi(t, l), i = l.memoizedProps, b = Ga(a, i), n.props = b, A = l.pendingProps, r = n.context, h = a.contextType, s = le, typeof h == "object" && h !== null && (s = qt(h)), c = a.getDerivedStateFromProps, (h = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== A || r !== s) && bo(l, n, e, s), ua = !1, r = l.memoizedState, n.state = r, $e(l, e, n, u), We();
      var S = l.memoizedState;
      i !== A || r !== S || ua || t !== null && t.dependencies !== null && Ku(t.dependencies) ? (typeof c == "function" && (fc(l, a, c, e), S = l.memoizedState), (b = ua || So(l, a, b, e, r, S, s) || t !== null && t.dependencies !== null && Ku(t.dependencies)) ? (h || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(e, S, s), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(e, S, s)), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && r === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && r === t.memoizedState || (l.flags |= 1024), l.memoizedProps = e, l.memoizedState = S), n.props = e, n.state = S, n.context = s, e = b) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && r === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && r === t.memoizedState || (l.flags |= 1024), e = !1);
    }
    return n = e, dn(t, l), e = (l.flags & 128) !== 0, n || e ? (n = l.stateNode, a = e && typeof a.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && e ? (l.child = ja(l, t.child, null, u), l.child = ja(l, null, a, u)) : Bt(t, l, a, u), l.memoizedState = n.state, t = l.child) : t = xl(t, l, u), t;
  }
  function Ho(t, l, a, e) {
    return Da(), l.flags |= 256, Bt(t, l, a, e), l.child;
  }
  var yc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function vc(t) {
    return {
      baseLanes: t,
      cachePool: Ts()
    };
  }
  function hc(t, l, a) {
    return t = t !== null ? t.childLanes & ~a : 0, l && (t |= fl), t;
  }
  function No(t, l, a) {
    var e = l.pendingProps, u = !1, n = (l.flags & 128) !== 0, i;
    if ((i = n) || (i = t !== null && t.memoizedState === null ? !1 : (pt.current & 2) !== 0), i && (u = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (tt) {
        if (u ? na(l) : ia(l), (t = yt) ? (t = x0(t, gl), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
          dehydrated: t,
          treeContext: ta !== null ? {
            id: Dl,
            overflow: Ul
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = ys(t), a.return = l, l.child = a, jt = l, yt = null)) : t = null, t === null) throw aa(l);
        return Fc(t) ? l.lanes = 32 : l.lanes = 536870912, null;
      }
      var c = e.children;
      return e = e.fallback, u ? (ia(l), u = l.mode, c = mn({
        mode: "hidden",
        children: c
      }, u), e = Oa(e, u, a, null), c.return = l, e.return = l, c.sibling = e, l.child = c, e = l.child, e.memoizedState = vc(a), e.childLanes = hc(t, i, a), l.memoizedState = yc, tu(null, e)) : (na(l), rc(l, c));
    }
    var s = t.memoizedState;
    if (s !== null && (c = s.dehydrated, c !== null)) {
      if (n) l.flags & 256 ? (na(l), l.flags &= -257, l = gc(t, l, a)) : l.memoizedState !== null ? (ia(l), l.child = t.child, l.flags |= 128, l = null) : (ia(l), c = e.fallback, u = l.mode, e = mn({
        mode: "visible",
        children: e.children
      }, u), c = Oa(c, u, a, null), c.flags |= 2, e.return = l, c.return = l, e.sibling = c, l.child = e, ja(l, t.child, null, a), e = l.child, e.memoizedState = vc(a), e.childLanes = hc(t, i, a), l.memoizedState = yc, l = tu(null, e));
      else if (na(l), Fc(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var h = i.dgst;
        i = h, e = Error(y(419)), e.stack = "", e.digest = i, Le({
          value: e,
          source: null,
          stack: null
        }), l = gc(t, l, a);
      } else if (_t || ne(t, l, a, !1), i = (a & t.childLanes) !== 0, _t || i) {
        if (i = dt, i !== null && (e = bf(i, a), e !== 0 && e !== s.retryLane)) throw s.retryLane = e, Ma(t, e), kt(i, t, e), dc;
        $c(c) || An(), l = gc(t, l, a);
      } else $c(c) ? (l.flags |= 192, l.child = t.child, l = null) : (t = s.treeContext, yt = pl(c.nextSibling), jt = l, tt = !0, la = null, gl = !1, t !== null && rs(l, t), l = rc(l, e.children), l.flags |= 4096);
      return l;
    }
    return u ? (ia(l), c = e.fallback, u = l.mode, s = t.child, h = s.sibling, e = ql(s, {
      mode: "hidden",
      children: e.children
    }), e.subtreeFlags = s.subtreeFlags & 65011712, h !== null ? c = ql(h, c) : (c = Oa(c, u, a, null), c.flags |= 2), c.return = l, e.return = l, e.sibling = c, l.child = e, tu(null, e), e = l.child, c = t.child.memoizedState, c === null ? c = vc(a) : (u = c.cachePool, u !== null ? (s = Et._currentValue, u = u.parent !== s ? {
      parent: s,
      pool: s
    } : u) : u = Ts(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: u
    }), e.memoizedState = c, e.childLanes = hc(t, i, a), l.memoizedState = yc, tu(t.child, e)) : (na(l), a = t.child, t = a.sibling, a = ql(a, {
      mode: "visible",
      children: e.children
    }), a.return = l, a.sibling = null, t !== null && (i = l.deletions, i === null ? (l.deletions = [t], l.flags |= 16) : i.push(t)), l.child = a, l.memoizedState = null, a);
  }
  function rc(t, l) {
    return l = mn({
      mode: "visible",
      children: l
    }, t.mode), l.return = t, t.child = l;
  }
  function mn(t, l) {
    return t = ul(22, t, null, l), t.lanes = 0, t;
  }
  function gc(t, l, a) {
    return ja(l, t.child, null, a), t = rc(l, l.pendingProps.children), t.flags |= 2, l.memoizedState = null, t;
  }
  function Ro(t, l, a) {
    t.lanes |= l;
    var e = t.alternate;
    e !== null && (e.lanes |= l), Ni(t.return, l, a);
  }
  function Sc(t, l, a, e, u, n) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: e,
      tail: a,
      tailMode: u,
      treeForkCount: n
    } : (i.isBackwards = l, i.rendering = null, i.renderingStartTime = 0, i.last = e, i.tail = a, i.tailMode = u, i.treeForkCount = n);
  }
  function jo(t, l, a) {
    var e = l.pendingProps, u = e.revealOrder, n = e.tail;
    e = e.children;
    var i = pt.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, l.flags |= 128) : i &= 1, O(pt, i), Bt(t, l, e, a), e = tt ? xe : 0, !c && t !== null && (t.flags & 128) !== 0) t: for (t = l.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && Ro(t, a, l);
      else if (t.tag === 19) Ro(t, a, l);
      else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break t;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) break t;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    switch (u) {
      case "forwards":
        for (a = l.child, u = null; a !== null; ) t = a.alternate, t !== null && Pu(t) === null && (u = a), a = a.sibling;
        a = u, a === null ? (u = l.child, l.child = null) : (u = a.sibling, a.sibling = null), Sc(l, !1, u, a, n, e);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = l.child, l.child = null; u !== null; ) {
          if (t = u.alternate, t !== null && Pu(t) === null) {
            l.child = u;
            break;
          }
          t = u.sibling, u.sibling = a, a = u, u = t;
        }
        Sc(l, !0, a, null, n, e);
        break;
      case "together":
        Sc(l, !1, null, null, void 0, e);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function xl(t, l, a) {
    if (t !== null && (l.dependencies = t.dependencies), sa |= l.lanes, (a & l.childLanes) === 0) if (t !== null) {
      if (ne(t, l, a, !1), (a & l.childLanes) === 0) return null;
    } else return null;
    if (t !== null && l.child !== t.child) throw Error(y(153));
    if (l.child !== null) {
      for (t = l.child, a = ql(t, t.pendingProps), l.child = a, a.return = l; t.sibling !== null; ) t = t.sibling, a = a.sibling = ql(t, t.pendingProps), a.return = l;
      a.sibling = null;
    }
    return l.child;
  }
  function bc(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Ku(t)));
  }
  function Rm(t, l, a) {
    switch (l.tag) {
      case 3:
        Zt(l, l.stateNode.containerInfo), ea(l, Et, t.memoizedState.cache), Da();
        break;
      case 27:
      case 5:
        Me(l);
        break;
      case 4:
        Zt(l, l.stateNode.containerInfo);
        break;
      case 10:
        ea(l, l.type, l.memoizedProps.value);
        break;
      case 31:
        if (l.memoizedState !== null) return l.flags |= 128, Vi(l), null;
        break;
      case 13:
        var e = l.memoizedState;
        if (e !== null)
          return e.dehydrated !== null ? (na(l), l.flags |= 128, null) : (a & l.child.childLanes) !== 0 ? No(t, l, a) : (na(l), t = xl(t, l, a), t !== null ? t.sibling : null);
        na(l);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (e = (a & l.childLanes) !== 0, e || (ne(t, l, a, !1), e = (a & l.childLanes) !== 0), u) {
          if (e) return jo(t, l, a);
          l.flags |= 128;
        }
        if (u = l.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), O(pt, pt.current), e) break;
        return null;
      case 22:
        return l.lanes = 0, Mo(t, l, a, l.pendingProps);
      case 24:
        ea(l, Et, t.memoizedState.cache);
    }
    return xl(t, l, a);
  }
  function qo(t, l, a) {
    if (t !== null) if (t.memoizedProps !== l.pendingProps) _t = !0;
    else {
      if (!bc(t, a) && (l.flags & 128) === 0) return _t = !1, Rm(t, l, a);
      _t = (t.flags & 131072) !== 0;
    }
    else _t = !1, tt && (l.flags & 1048576) !== 0 && hs(l, xe, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          var e = l.pendingProps;
          if (t = Na(l.elementType), l.type = t, typeof t == "function") zi(t) ? (e = Ga(t, e), l.tag = 1, l = Co(null, l, t, e, a)) : (l.tag = 0, l = mc(null, l, t, e, a));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === It) {
                l.tag = 11, l = Eo(null, l, t, e, a);
                break t;
              } else if (u === j) {
                l.tag = 14, l = zo(null, l, t, e, a);
                break t;
              }
            }
            throw l = El(t) || t, Error(y(306, l, ""));
          }
        }
        return l;
      case 0:
        return mc(t, l, l.type, l.pendingProps, a);
      case 1:
        return e = l.type, u = Ga(e, l.pendingProps), Co(t, l, e, u, a);
      case 3:
        t: {
          if (Zt(l, l.stateNode.containerInfo), t === null) throw Error(y(387));
          e = l.pendingProps;
          var n = l.memoizedState;
          u = n.element, Qi(t, l), $e(l, e, null, a);
          var i = l.memoizedState;
          if (e = i.cache, ea(l, Et, e), e !== n.cache && Ri(l, [Et], a, !0), We(), e = i.element, n.isDehydrated) if (n = {
            element: e,
            isDehydrated: !1,
            cache: i.cache
          }, l.updateQueue.baseState = n, l.memoizedState = n, l.flags & 256) {
            l = Ho(t, l, e, a);
            break t;
          } else if (e !== u) {
            u = vl(Error(y(424)), l), Le(u), l = Ho(t, l, e, a);
            break t;
          } else
            for (t = l.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, yt = pl(t.firstChild), jt = l, tt = !0, la = null, gl = !0, a = Ds(l, null, e, a), l.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (Da(), e === u) {
              l = xl(t, l, a);
              break t;
            }
            Bt(t, l, e, a);
          }
          l = l.child;
        }
        return l;
      case 26:
        return dn(t, l), t === null ? (a = J0(l.type, null, l.pendingProps, null)) ? l.memoizedState = a : tt || (a = l.type, t = l.pendingProps, e = Dn($.current).createElement(a), e[Rt] = l, e[Kt] = t, Yt(e, a, t), Ct(e), l.stateNode = e) : l.memoizedState = J0(l.type, t.memoizedProps, l.pendingProps, t.memoizedState), null;
      case 27:
        return Me(l), t === null && tt && (e = l.stateNode = V0(l.type, l.pendingProps, $.current), jt = l, gl = !0, u = yt, va(l.type) ? (kc = u, yt = pl(e.firstChild)) : yt = u), Bt(t, l, l.pendingProps.children, a), dn(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && tt && ((u = e = yt) && (e = c1(e, l.type, l.pendingProps, gl), e !== null ? (l.stateNode = e, jt = l, yt = pl(e.firstChild), gl = !1, u = !0) : u = !1), u || aa(l)), Me(l), u = l.type, n = l.pendingProps, i = t !== null ? t.memoizedProps : null, e = n.children, wc(u, n) ? e = null : i !== null && wc(u, i) && (l.flags |= 32), l.memoizedState !== null && (u = wi(t, l, Am, null, null, a), hu._currentValue = u), dn(t, l), Bt(t, l, e, a), l.child;
      case 6:
        return t === null && tt && ((t = a = yt) && (a = f1(a, l.pendingProps, gl), a !== null ? (l.stateNode = a, jt = l, yt = null, t = !0) : t = !1), t || aa(l)), null;
      case 13:
        return No(t, l, a);
      case 4:
        return Zt(l, l.stateNode.containerInfo), e = l.pendingProps, t === null ? l.child = ja(l, null, e, a) : Bt(t, l, e, a), l.child;
      case 11:
        return Eo(t, l, l.type, l.pendingProps, a);
      case 7:
        return Bt(t, l, l.pendingProps, a), l.child;
      case 8:
        return Bt(t, l, l.pendingProps.children, a), l.child;
      case 12:
        return Bt(t, l, l.pendingProps.children, a), l.child;
      case 10:
        return e = l.pendingProps, ea(l, l.type, e.value), Bt(t, l, e.children, a), l.child;
      case 9:
        return u = l.type._context, e = l.pendingProps.children, Ca(l), u = qt(u), e = e(u), l.flags |= 1, Bt(t, l, e, a), l.child;
      case 14:
        return zo(t, l, l.type, l.pendingProps, a);
      case 15:
        return _o(t, l, l.type, l.pendingProps, a);
      case 19:
        return jo(t, l, a);
      case 31:
        return Nm(t, l, a);
      case 22:
        return Mo(t, l, a, l.pendingProps);
      case 24:
        return Ca(l), e = qt(Et), t === null ? (u = Bi(), u === null && (u = dt, n = ji(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= a), u = n), l.memoizedState = {
          parent: e,
          cache: u
        }, Gi(l), ea(l, Et, u)) : ((t.lanes & a) !== 0 && (Qi(t, l), $e(l, null, null, a), We()), u = t.memoizedState, n = l.memoizedState, u.parent !== e ? (u = {
          parent: e,
          cache: e
        }, l.memoizedState = u, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = u), ea(l, Et, e)) : (e = n.cache, ea(l, Et, e), e !== u.cache && Ri(l, [Et], a, !0))), Bt(t, l, l.pendingProps.children, a), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(y(156, l.tag));
  }
  function Ll(t) {
    t.flags |= 4;
  }
  function pc(t, l, a, e, u) {
    if ((l = (t.mode & 32) !== 0) && (l = !1), l) {
      if (t.flags |= 16777216, (u & 335544128) === u) if (t.stateNode.complete) t.flags |= 8192;
      else if (f0()) t.flags |= 8192;
      else throw Ra = $u, Yi;
    } else t.flags &= -16777217;
  }
  function Bo(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0) t.flags &= -16777217;
    else if (t.flags |= 16777216, !I0(l)) if (f0()) t.flags |= 8192;
    else throw Ra = $u, Yi;
  }
  function yn(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? rf() : 536870912, t.lanes |= l, ge |= l);
  }
  function lu(t, l) {
    if (!tt) switch (t.tailMode) {
      case "hidden":
        l = t.tail;
        for (var a = null; l !== null; ) l.alternate !== null && (a = l), l = l.sibling;
        a === null ? t.tail = null : a.sibling = null;
        break;
      case "collapsed":
        a = t.tail;
        for (var e = null; a !== null; ) a.alternate !== null && (e = a), a = a.sibling;
        e === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : e.sibling = null;
    }
  }
  function vt(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, a = 0, e = 0;
    if (l) for (var u = t.child; u !== null; ) a |= u.lanes | u.childLanes, e |= u.subtreeFlags & 65011712, e |= u.flags & 65011712, u.return = t, u = u.sibling;
    else for (u = t.child; u !== null; ) a |= u.lanes | u.childLanes, e |= u.subtreeFlags, e |= u.flags, u.return = t, u = u.sibling;
    return t.subtreeFlags |= e, t.childLanes = a, l;
  }
  function jm(t, l, a) {
    var e = l.pendingProps;
    switch (Di(l), l.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return vt(l), null;
      case 1:
        return vt(l), null;
      case 3:
        return a = l.stateNode, e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Gl(Et), bt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (ue(l) ? Ll(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Ci())), vt(l), null;
      case 26:
        var u = l.type, n = l.memoizedState;
        return t === null ? (Ll(l), n !== null ? (vt(l), Bo(l, n)) : (vt(l), pc(l, u, null, e, a))) : n ? n !== t.memoizedState ? (Ll(l), vt(l), Bo(l, n)) : (vt(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== e && Ll(l), vt(l), pc(l, u, t, e, a)), null;
      case 27:
        if (Tu(l), a = $.current, u = l.type, t !== null && l.stateNode != null) t.memoizedProps !== e && Ll(l);
        else {
          if (!e) {
            if (l.stateNode === null) throw Error(y(166));
            return vt(l), null;
          }
          t = q.current, ue(l) ? gs(l, t) : (t = V0(u, e, a), l.stateNode = t, Ll(l));
        }
        return vt(l), null;
      case 5:
        if (Tu(l), u = l.type, t !== null && l.stateNode != null) t.memoizedProps !== e && Ll(l);
        else {
          if (!e) {
            if (l.stateNode === null) throw Error(y(166));
            return vt(l), null;
          }
          if (n = q.current, ue(l)) gs(l, n);
          else {
            var i = Dn($.current);
            switch (n) {
              case 1:
                n = i.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                    break;
                  case "script":
                    n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                    break;
                  case "select":
                    n = typeof e.is == "string" ? i.createElement("select", { is: e.is }) : i.createElement("select"), e.multiple ? n.multiple = !0 : e.size && (n.size = e.size);
                    break;
                  default:
                    n = typeof e.is == "string" ? i.createElement(u, { is: e.is }) : i.createElement(u);
                }
            }
            n[Rt] = l, n[Kt] = e;
            t: for (i = l.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === l) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === l) break t;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            l.stateNode = n;
            t: switch (Yt(n, u, e), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!e.autoFocus;
                break t;
              case "img":
                e = !0;
                break t;
              default:
                e = !1;
            }
            e && Ll(l);
          }
        }
        return vt(l), pc(l, l.type, t === null ? null : t.memoizedProps, l.pendingProps, a), null;
      case 6:
        if (t && l.stateNode != null) t.memoizedProps !== e && Ll(l);
        else {
          if (typeof e != "string" && l.stateNode === null) throw Error(y(166));
          if (t = $.current, ue(l)) {
            if (t = l.stateNode, a = l.memoizedProps, e = null, u = jt, u !== null) switch (u.tag) {
              case 27:
              case 5:
                e = u.memoizedProps;
            }
            t[Rt] = l, t = !!(t.nodeValue === a || e !== null && e.suppressHydrationWarning === !0 || R0(t.nodeValue, a)), t || aa(l, !0);
          } else t = Dn(t).createTextNode(e), t[Rt] = l, l.stateNode = t;
        }
        return vt(l), null;
      case 31:
        if (a = l.memoizedState, t === null || t.memoizedState !== null) {
          if (e = ue(l), a !== null) {
            if (t === null) {
              if (!e) throw Error(y(318));
              if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(y(557));
              t[Rt] = l;
            } else Da(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            vt(l), t = !1;
          } else a = Ci(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
          if (!t)
            return l.flags & 256 ? (il(l), l) : (il(l), null);
          if ((l.flags & 128) !== 0) throw Error(y(558));
        }
        return vt(l), null;
      case 13:
        if (e = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = ue(l), e !== null && e.dehydrated !== null) {
            if (t === null) {
              if (!u) throw Error(y(318));
              if (u = l.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(y(317));
              u[Rt] = l;
            } else Da(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            vt(l), u = !1;
          } else u = Ci(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return l.flags & 256 ? (il(l), l) : (il(l), null);
        }
        return il(l), (l.flags & 128) !== 0 ? (l.lanes = a, l) : (a = e !== null, t = t !== null && t.memoizedState !== null, a && (e = l.child, u = null, e.alternate !== null && e.alternate.memoizedState !== null && e.alternate.memoizedState.cachePool !== null && (u = e.alternate.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== u && (e.flags |= 2048)), a !== t && a && (l.child.flags |= 8192), yn(l, l.updateQueue), vt(l), null);
      case 4:
        return bt(), t === null && U0(l.stateNode.containerInfo), vt(l), null;
      case 10:
        return Gl(l.type), vt(l), null;
      case 19:
        if (T(pt), e = l.memoizedState, e === null) return vt(l), null;
        if (u = (l.flags & 128) !== 0, n = e.rendering, n === null) if (u) lu(e, !1);
        else {
          if (gt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = l.child; t !== null; ) {
            if (n = Pu(t), n !== null) {
              for (l.flags |= 128, lu(e, !1), t = n.updateQueue, l.updateQueue = t, yn(l, t), l.subtreeFlags = 0, t = a, a = l.child; a !== null; ) ms(a, t), a = a.sibling;
              return O(pt, pt.current & 1 | 2), tt && Bl(l, e.treeForkCount), l.child;
            }
            t = t.sibling;
          }
          e.tail !== null && tl() > Sn && (l.flags |= 128, u = !0, lu(e, !1), l.lanes = 4194304);
        }
        else {
          if (!u) if (t = Pu(n), t !== null) {
            if (l.flags |= 128, u = !0, t = t.updateQueue, l.updateQueue = t, yn(l, t), lu(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !tt) return vt(l), null;
          } else 2 * tl() - e.renderingStartTime > Sn && a !== 536870912 && (l.flags |= 128, u = !0, lu(e, !1), l.lanes = 4194304);
          e.isBackwards ? (n.sibling = l.child, l.child = n) : (t = e.last, t !== null ? t.sibling = n : l.child = n, e.last = n);
        }
        return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = tl(), t.sibling = null, a = pt.current, O(pt, u ? a & 1 | 2 : a & 1), tt && Bl(l, e.treeForkCount), t) : (vt(l), null);
      case 22:
      case 23:
        return il(l), Zi(), e = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== e && (l.flags |= 8192) : e && (l.flags |= 8192), e ? (a & 536870912) !== 0 && (l.flags & 128) === 0 && (vt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : vt(l), a = l.updateQueue, a !== null && yn(l, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), e = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), e !== a && (l.flags |= 2048), t !== null && T(Ha), null;
      case 24:
        return a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Gl(Et), vt(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(y(156, l.tag));
  }
  function qm(t, l) {
    switch (Di(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return Gl(Et), bt(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return Tu(l), null;
      case 31:
        if (l.memoizedState !== null) {
          if (il(l), l.alternate === null) throw Error(y(340));
          Da();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 13:
        if (il(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null) throw Error(y(340));
          Da();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return T(pt), null;
      case 4:
        return bt(), null;
      case 10:
        return Gl(l.type), null;
      case 22:
      case 23:
        return il(l), Zi(), t !== null && T(Ha), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return Gl(Et), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Yo(t, l) {
    switch (Di(l), l.tag) {
      case 3:
        Gl(Et), bt();
        break;
      case 26:
      case 27:
      case 5:
        Tu(l);
        break;
      case 4:
        bt();
        break;
      case 31:
        l.memoizedState !== null && il(l);
        break;
      case 13:
        il(l);
        break;
      case 19:
        T(pt);
        break;
      case 10:
        Gl(l.type);
        break;
      case 22:
      case 23:
        il(l), Zi(), t !== null && T(Ha);
        break;
      case 24:
        Gl(Et);
    }
  }
  function au(t, l) {
    try {
      var a = l.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            e = void 0;
            var n = a.create, i = a.inst;
            e = n(), i.destroy = e;
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (c) {
      ct(l, l.return, c);
    }
  }
  function ca(t, l, a) {
    try {
      var e = l.updateQueue, u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & t) === t) {
            var i = e.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, u = l;
              var s = a, h = c;
              try {
                h();
              } catch (b) {
                ct(u, s, b);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (b) {
      ct(l, l.return, b);
    }
  }
  function Go(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var a = t.stateNode;
      try {
        Cs(l, a);
      } catch (e) {
        ct(t, t.return, e);
      }
    }
  }
  function Qo(t, l, a) {
    a.props = Ga(t.type, t.memoizedProps), a.state = t.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (e) {
      ct(t, l, e);
    }
  }
  function eu(t, l) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var e = t.stateNode;
            break;
          case 30:
            e = t.stateNode;
            break;
          default:
            e = t.stateNode;
        }
        typeof a == "function" ? t.refCleanup = a(e) : a.current = e;
      }
    } catch (u) {
      ct(t, l, u);
    }
  }
  function Cl(t, l) {
    var a = t.ref, e = t.refCleanup;
    if (a !== null) if (typeof e == "function") try {
      e();
    } catch (u) {
      ct(t, l, u);
    } finally {
      t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
    }
    else if (typeof a == "function") try {
      a(null);
    } catch (u) {
      ct(t, l, u);
    }
    else a.current = null;
  }
  function Xo(t) {
    var l = t.type, a = t.memoizedProps, e = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break t;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (u) {
      ct(t, t.return, u);
    }
  }
  function Ac(t, l, a) {
    try {
      var e = t.stateNode;
      l1(e, t.type, a, l), e[Kt] = l;
    } catch (u) {
      ct(t, t.return, u);
    }
  }
  function xo(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && va(t.type) || t.tag === 4;
  }
  function Tc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || xo(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && va(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Ec(t, l, a) {
    var e = t.tag;
    if (e === 5 || e === 6) t = t.stateNode, l ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, l) : (l = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, l.appendChild(t), a = a._reactRootContainer, a != null || l.onclick !== null || (l.onclick = Rl));
    else if (e !== 4 && (e === 27 && va(t.type) && (a = t.stateNode, l = null), t = t.child, t !== null)) for (Ec(t, l, a), t = t.sibling; t !== null; ) Ec(t, l, a), t = t.sibling;
  }
  function vn(t, l, a) {
    var e = t.tag;
    if (e === 5 || e === 6) t = t.stateNode, l ? a.insertBefore(t, l) : a.appendChild(t);
    else if (e !== 4 && (e === 27 && va(t.type) && (a = t.stateNode), t = t.child, t !== null)) for (vn(t, l, a), t = t.sibling; t !== null; ) vn(t, l, a), t = t.sibling;
  }
  function Lo(t) {
    var l = t.stateNode, a = t.memoizedProps;
    try {
      for (var e = t.type, u = l.attributes; u.length; ) l.removeAttributeNode(u[0]);
      Yt(l, e, a), l[Rt] = t, l[Kt] = a;
    } catch (n) {
      ct(t, t.return, n);
    }
  }
  var Zl = !1, Mt = !1, zc = !1, Zo = typeof WeakSet == "function" ? WeakSet : Set, Ht = null;
  function Bm(t, l) {
    if (t = t.containerInfo, Vc = qn, t = es(t), gi(t)) {
      if ("selectionStart" in t) var a = {
        start: t.selectionStart,
        end: t.selectionEnd
      };
      else t: {
        a = (a = t.ownerDocument) && a.defaultView || window;
        var e = a.getSelection && a.getSelection();
        if (e && e.rangeCount !== 0) {
          a = e.anchorNode;
          var u = e.anchorOffset, n = e.focusNode;
          e = e.focusOffset;
          try {
            a.nodeType, n.nodeType;
          } catch {
            a = null;
            break t;
          }
          var i = 0, c = -1, s = -1, h = 0, b = 0, A = t, r = null;
          l: for (; ; ) {
            for (var S; A !== a || u !== 0 && A.nodeType !== 3 || (c = i + u), A !== n || e !== 0 && A.nodeType !== 3 || (s = i + e), A.nodeType === 3 && (i += A.nodeValue.length), (S = A.firstChild) !== null; )
              r = A, A = S;
            for (; ; ) {
              if (A === t) break l;
              if (r === a && ++h === u && (c = i), r === n && ++b === e && (s = i), (S = A.nextSibling) !== null) break;
              A = r, r = A.parentNode;
            }
            A = S;
          }
          a = c === -1 || s === -1 ? null : {
            start: c,
            end: s
          };
        } else a = null;
      }
      a = a || {
        start: 0,
        end: 0
      };
    } else a = null;
    for (Kc = {
      focusedElem: t,
      selectionRange: a
    }, qn = !1, Ht = l; Ht !== null; ) if (l = Ht, t = l.child, (l.subtreeFlags & 1028) !== 0 && t !== null) t.return = l, Ht = t;
    else for (; Ht !== null; ) {
      switch (l = Ht, n = l.alternate, t = l.flags, l.tag) {
        case 0:
          if ((t & 4) !== 0 && (t = l.updateQueue, t = t !== null ? t.events : null, t !== null)) for (a = 0; a < t.length; a++) u = t[a], u.ref.impl = u.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((t & 1024) !== 0 && n !== null) {
            t = void 0, a = l, u = n.memoizedProps, n = n.memoizedState, e = a.stateNode;
            try {
              var H = Ga(a.type, u);
              t = e.getSnapshotBeforeUpdate(H, n), e.__reactInternalSnapshotBeforeUpdate = t;
            } catch (X) {
              ct(a, a.return, X);
            }
          }
          break;
        case 3:
          if ((t & 1024) !== 0) {
            if (t = l.stateNode.containerInfo, a = t.nodeType, a === 9) Wc(t);
            else if (a === 1) switch (t.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Wc(t);
                break;
              default:
                t.textContent = "";
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
          if ((t & 1024) !== 0) throw Error(y(163));
      }
      if (t = l.sibling, t !== null) {
        t.return = l.return, Ht = t;
        break;
      }
      Ht = l.return;
    }
  }
  function Vo(t, l, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Kl(t, a), e & 4 && au(5, a);
        break;
      case 1:
        if (Kl(t, a), e & 4) if (t = a.stateNode, l === null) try {
          t.componentDidMount();
        } catch (i) {
          ct(a, a.return, i);
        }
        else {
          var u = Ga(a.type, l.memoizedProps);
          l = l.memoizedState;
          try {
            t.componentDidUpdate(u, l, t.__reactInternalSnapshotBeforeUpdate);
          } catch (i) {
            ct(a, a.return, i);
          }
        }
        e & 64 && Go(a), e & 512 && eu(a, a.return);
        break;
      case 3:
        if (Kl(t, a), e & 64 && (t = a.updateQueue, t !== null)) {
          if (l = null, a.child !== null) switch (a.child.tag) {
            case 27:
            case 5:
              l = a.child.stateNode;
              break;
            case 1:
              l = a.child.stateNode;
          }
          try {
            Cs(t, l);
          } catch (i) {
            ct(a, a.return, i);
          }
        }
        break;
      case 27:
        l === null && e & 4 && Lo(a);
      case 26:
      case 5:
        Kl(t, a), l === null && e & 4 && Xo(a), e & 512 && eu(a, a.return);
        break;
      case 12:
        Kl(t, a);
        break;
      case 31:
        Kl(t, a), e & 4 && Jo(t, a);
        break;
      case 13:
        Kl(t, a), e & 4 && Wo(t, a), e & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = Km.bind(null, a), s1(t, a))));
        break;
      case 22:
        if (e = a.memoizedState !== null || Zl, !e) {
          l = l !== null && l.memoizedState !== null || Mt, u = Zl;
          var n = Mt;
          Zl = e, (Mt = l) && !n ? wl(t, a, (a.subtreeFlags & 8772) !== 0) : Kl(t, a), Zl = u, Mt = n;
        }
        break;
      case 30:
        break;
      default:
        Kl(t, a);
    }
  }
  function Ko(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, Ko(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && ti(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var ht = null, Jt = !1;
  function Vl(t, l, a) {
    for (a = a.child; a !== null; ) wo(t, l, a), a = a.sibling;
  }
  function wo(t, l, a) {
    if (ll && typeof ll.onCommitFiberUnmount == "function") try {
      ll.onCommitFiberUnmount(Oe, a);
    } catch {
    }
    switch (a.tag) {
      case 26:
        Mt || Cl(a, l), Vl(t, l, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Mt || Cl(a, l);
        var e = ht, u = Jt;
        va(a.type) && (ht = a.stateNode, Jt = !1), Vl(t, l, a), mu(a.stateNode), ht = e, Jt = u;
        break;
      case 5:
        Mt || Cl(a, l);
      case 6:
        if (e = ht, u = Jt, ht = null, Vl(t, l, a), ht = e, Jt = u, ht !== null) if (Jt) try {
          (ht.nodeType === 9 ? ht.body : ht.nodeName === "HTML" ? ht.ownerDocument.body : ht).removeChild(a.stateNode);
        } catch (n) {
          ct(a, l, n);
        }
        else try {
          ht.removeChild(a.stateNode);
        } catch (n) {
          ct(a, l, n);
        }
        break;
      case 18:
        ht !== null && (Jt ? (t = ht, Q0(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, a.stateNode), _e(t)) : Q0(ht, a.stateNode));
        break;
      case 4:
        e = ht, u = Jt, ht = a.stateNode.containerInfo, Jt = !0, Vl(t, l, a), ht = e, Jt = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ca(2, a, l), Mt || ca(4, a, l), Vl(t, l, a);
        break;
      case 1:
        Mt || (Cl(a, l), e = a.stateNode, typeof e.componentWillUnmount == "function" && Qo(a, l, e)), Vl(t, l, a);
        break;
      case 21:
        Vl(t, l, a);
        break;
      case 22:
        Mt = (e = Mt) || a.memoizedState !== null, Vl(t, l, a), Mt = e;
        break;
      default:
        Vl(t, l, a);
    }
  }
  function Jo(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        _e(t);
      } catch (a) {
        ct(l, l.return, a);
      }
    }
  }
  function Wo(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
      _e(t);
    } catch (a) {
      ct(l, l.return, a);
    }
  }
  function Ym(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new Zo()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new Zo()), l;
      default:
        throw Error(y(435, t.tag));
    }
  }
  function hn(t, l) {
    var a = Ym(t);
    l.forEach(function(e) {
      if (!a.has(e)) {
        a.add(e);
        var u = wm.bind(null, t, e);
        e.then(u, u);
      }
    });
  }
  function Wt(t, l) {
    var a = l.deletions;
    if (a !== null) for (var e = 0; e < a.length; e++) {
      var u = a[e], n = t, i = l, c = i;
      t: for (; c !== null; ) {
        switch (c.tag) {
          case 27:
            if (va(c.type)) {
              ht = c.stateNode, Jt = !1;
              break t;
            }
            break;
          case 5:
            ht = c.stateNode, Jt = !1;
            break t;
          case 3:
          case 4:
            ht = c.stateNode.containerInfo, Jt = !0;
            break t;
        }
        c = c.return;
      }
      if (ht === null) throw Error(y(160));
      wo(n, i, u), ht = null, Jt = !1, n = u.alternate, n !== null && (n.return = null), u.return = null;
    }
    if (l.subtreeFlags & 13886) for (l = l.child; l !== null; ) $o(l, t), l = l.sibling;
  }
  var _l = null;
  function $o(t, l) {
    var a = t.alternate, e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Wt(l, t), $t(t), e & 4 && (ca(3, t, t.return), au(3, t), ca(5, t, t.return));
        break;
      case 1:
        Wt(l, t), $t(t), e & 512 && (Mt || a === null || Cl(a, a.return)), e & 64 && Zl && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? e : a.concat(e))));
        break;
      case 26:
        var u = _l;
        if (Wt(l, t), $t(t), e & 512 && (Mt || a === null || Cl(a, a.return)), e & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (e = t.memoizedState, a === null) if (e === null) if (t.stateNode === null) {
            t: {
              e = t.type, a = t.memoizedProps, u = u.ownerDocument || u;
              l: switch (e) {
                case "title":
                  n = u.getElementsByTagName("title")[0], (!n || n[Ce] || n[Rt] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(e), u.head.insertBefore(n, u.querySelector("head > title"))), Yt(n, e, a), n[Rt] = t, Ct(n), e = n;
                  break t;
                case "link":
                  var i = F0("link", "href", u).get(e + (a.href || ""));
                  if (i) {
                    for (var c = 0; c < i.length; c++) if (n = i[c], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                      i.splice(c, 1);
                      break l;
                    }
                  }
                  n = u.createElement(e), Yt(n, e, a), u.head.appendChild(n);
                  break;
                case "meta":
                  if (i = F0("meta", "content", u).get(e + (a.content || ""))) {
                    for (c = 0; c < i.length; c++) if (n = i[c], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                      i.splice(c, 1);
                      break l;
                    }
                  }
                  n = u.createElement(e), Yt(n, e, a), u.head.appendChild(n);
                  break;
                default:
                  throw Error(y(468, e));
              }
              n[Rt] = t, Ct(n), e = n;
            }
            t.stateNode = e;
          } else k0(u, t.type, t.stateNode);
          else t.stateNode = $0(u, e, t.memoizedProps);
          else n !== e ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, e === null ? k0(u, t.type, t.stateNode) : $0(u, e, t.memoizedProps)) : e === null && t.stateNode !== null && Ac(t, t.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        Wt(l, t), $t(t), e & 512 && (Mt || a === null || Cl(a, a.return)), a !== null && e & 4 && Ac(t, t.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (Wt(l, t), $t(t), e & 512 && (Mt || a === null || Cl(a, a.return)), t.flags & 32) {
          u = t.stateNode;
          try {
            Wa(u, "");
          } catch (H) {
            ct(t, t.return, H);
          }
        }
        e & 4 && t.stateNode != null && (u = t.memoizedProps, Ac(t, u, a !== null ? a.memoizedProps : u)), e & 1024 && (zc = !0);
        break;
      case 6:
        if (Wt(l, t), $t(t), e & 4) {
          if (t.stateNode === null) throw Error(y(162));
          e = t.memoizedProps, a = t.stateNode;
          try {
            a.nodeValue = e;
          } catch (H) {
            ct(t, t.return, H);
          }
        }
        break;
      case 3:
        if (Hn = null, u = _l, _l = Un(l.containerInfo), Wt(l, t), _l = u, $t(t), e & 4 && a !== null && a.memoizedState.isDehydrated) try {
          _e(l.containerInfo);
        } catch (H) {
          ct(t, t.return, H);
        }
        zc && (zc = !1, Fo(t));
        break;
      case 4:
        e = _l, _l = Un(t.stateNode.containerInfo), Wt(l, t), $t(t), _l = e;
        break;
      case 12:
        Wt(l, t), $t(t);
        break;
      case 31:
        Wt(l, t), $t(t), e & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, hn(t, e)));
        break;
      case 13:
        Wt(l, t), $t(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (gn = tl()), e & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, hn(t, e)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var s = a !== null && a.memoizedState !== null, h = Zl, b = Mt;
        if (Zl = h || u, Mt = b || s, Wt(l, t), Mt = b, Zl = h, $t(t), e & 8192) t: for (l = t.stateNode, l._visibility = u ? l._visibility & -2 : l._visibility | 1, u && (a === null || s || Zl || Mt || Qa(t)), a = null, l = t; ; ) {
          if (l.tag === 5 || l.tag === 26) {
            if (a === null) {
              s = a = l;
              try {
                if (n = s.stateNode, u) i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                else {
                  c = s.stateNode;
                  var A = s.memoizedProps.style, r = A != null && A.hasOwnProperty("display") ? A.display : null;
                  c.style.display = r == null || typeof r == "boolean" ? "" : ("" + r).trim();
                }
              } catch (H) {
                ct(s, s.return, H);
              }
            }
          } else if (l.tag === 6) {
            if (a === null) {
              s = l;
              try {
                s.stateNode.nodeValue = u ? "" : s.memoizedProps;
              } catch (H) {
                ct(s, s.return, H);
              }
            }
          } else if (l.tag === 18) {
            if (a === null) {
              s = l;
              try {
                var S = s.stateNode;
                u ? X0(S, !0) : X0(s.stateNode, !1);
              } catch (H) {
                ct(s, s.return, H);
              }
            }
          } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === t) break t;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break t;
            a === l && (a = null), l = l.return;
          }
          a === l && (a = null), l.sibling.return = l.return, l = l.sibling;
        }
        e & 4 && (e = t.updateQueue, e !== null && (a = e.retryQueue, a !== null && (e.retryQueue = null, hn(t, a))));
        break;
      case 19:
        Wt(l, t), $t(t), e & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, hn(t, e)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Wt(l, t), $t(t);
    }
  }
  function $t(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var a, e = t.return; e !== null; ) {
          if (xo(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(y(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode;
            vn(t, Tc(t), u);
            break;
          case 5:
            var n = a.stateNode;
            a.flags & 32 && (Wa(n, ""), a.flags &= -33), vn(t, Tc(t), n);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo;
            Ec(t, Tc(t), i);
            break;
          default:
            throw Error(y(161));
        }
      } catch (c) {
        ct(t, t.return, c);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function Fo(t) {
    if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
      var l = t;
      Fo(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling;
    }
  }
  function Kl(t, l) {
    if (l.subtreeFlags & 8772) for (l = l.child; l !== null; ) Vo(t, l.alternate, l), l = l.sibling;
  }
  function Qa(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ca(4, l, l.return), Qa(l);
          break;
        case 1:
          Cl(l, l.return);
          var a = l.stateNode;
          typeof a.componentWillUnmount == "function" && Qo(l, l.return, a), Qa(l);
          break;
        case 27:
          mu(l.stateNode);
        case 26:
        case 5:
          Cl(l, l.return), Qa(l);
          break;
        case 22:
          l.memoizedState === null && Qa(l);
          break;
        case 30:
          Qa(l);
          break;
        default:
          Qa(l);
      }
      t = t.sibling;
    }
  }
  function wl(t, l, a) {
    for (a = a && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var e = l.alternate, u = t, n = l, i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          wl(u, n, a), au(4, n);
          break;
        case 1:
          if (wl(u, n, a), e = n, u = e.stateNode, typeof u.componentDidMount == "function") try {
            u.componentDidMount();
          } catch (h) {
            ct(e, e.return, h);
          }
          if (e = n, u = e.updateQueue, u !== null) {
            var c = e.stateNode;
            try {
              var s = u.shared.hiddenCallbacks;
              if (s !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < s.length; u++) Us(s[u], c);
            } catch (h) {
              ct(e, e.return, h);
            }
          }
          a && i & 64 && Go(n), eu(n, n.return);
          break;
        case 27:
          Lo(n);
        case 26:
        case 5:
          wl(u, n, a), a && e === null && i & 4 && Xo(n), eu(n, n.return);
          break;
        case 12:
          wl(u, n, a);
          break;
        case 31:
          wl(u, n, a), a && i & 4 && Jo(u, n);
          break;
        case 13:
          wl(u, n, a), a && i & 4 && Wo(u, n);
          break;
        case 22:
          n.memoizedState === null && wl(u, n, a), eu(n, n.return);
          break;
        case 30:
          break;
        default:
          wl(u, n, a);
      }
      l = l.sibling;
    }
  }
  function _c(t, l) {
    var a = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && Ze(a));
  }
  function Mc(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Ze(t));
  }
  function Ml(t, l, a, e) {
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) ko(t, l, a, e), l = l.sibling;
  }
  function ko(t, l, a, e) {
    var u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ml(t, l, a, e), u & 2048 && au(9, l);
        break;
      case 1:
        Ml(t, l, a, e);
        break;
      case 3:
        Ml(t, l, a, e), u & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Ze(t)));
        break;
      case 12:
        if (u & 2048) {
          Ml(t, l, a, e), t = l.stateNode;
          try {
            var n = l.memoizedProps, i = n.id, c = n.onPostCommit;
            typeof c == "function" && c(i, l.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
          } catch (s) {
            ct(l, l.return, s);
          }
        } else Ml(t, l, a, e);
        break;
      case 31:
        Ml(t, l, a, e);
        break;
      case 13:
        Ml(t, l, a, e);
        break;
      case 23:
        break;
      case 22:
        n = l.stateNode, i = l.alternate, l.memoizedState !== null ? n._visibility & 2 ? Ml(t, l, a, e) : uu(t, l) : n._visibility & 2 ? Ml(t, l, a, e) : (n._visibility |= 2, ve(t, l, a, e, (l.subtreeFlags & 10256) !== 0 || !1)), u & 2048 && _c(i, l);
        break;
      case 24:
        Ml(t, l, a, e), u & 2048 && Mc(l.alternate, l);
        break;
      default:
        Ml(t, l, a, e);
    }
  }
  function ve(t, l, a, e, u) {
    for (u = u && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child; l !== null; ) {
      var n = t, i = l, c = a, s = e, h = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ve(n, i, c, s, u), au(8, i);
          break;
        case 23:
          break;
        case 22:
          var b = i.stateNode;
          i.memoizedState !== null ? b._visibility & 2 ? ve(n, i, c, s, u) : uu(n, i) : (b._visibility |= 2, ve(n, i, c, s, u)), u && h & 2048 && _c(i.alternate, i);
          break;
        case 24:
          ve(n, i, c, s, u), u && h & 2048 && Mc(i.alternate, i);
          break;
        default:
          ve(n, i, c, s, u);
      }
      l = l.sibling;
    }
  }
  function uu(t, l) {
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) {
      var a = t, e = l, u = e.flags;
      switch (e.tag) {
        case 22:
          uu(a, e), u & 2048 && _c(e.alternate, e);
          break;
        case 24:
          uu(a, e), u & 2048 && Mc(e.alternate, e);
          break;
        default:
          uu(a, e);
      }
      l = l.sibling;
    }
  }
  var nu = 8192;
  function he(t, l, a) {
    if (t.subtreeFlags & nu) for (t = t.child; t !== null; ) Io(t, l, a), t = t.sibling;
  }
  function Io(t, l, a) {
    switch (t.tag) {
      case 26:
        he(t, l, a), t.flags & nu && t.memoizedState !== null && A1(a, _l, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        he(t, l, a);
        break;
      case 3:
      case 4:
        var e = _l;
        _l = Un(t.stateNode.containerInfo), he(t, l, a), _l = e;
        break;
      case 22:
        t.memoizedState === null && (e = t.alternate, e !== null && e.memoizedState !== null ? (e = nu, nu = 16777216, he(t, l, a), nu = e) : he(t, l, a));
        break;
      default:
        he(t, l, a);
    }
  }
  function Po(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function iu(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null) for (var a = 0; a < l.length; a++) {
        var e = l[a];
        Ht = e, l0(e, t);
      }
      Po(t);
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) t0(t), t = t.sibling;
  }
  function t0(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        iu(t), t.flags & 2048 && ca(9, t, t.return);
        break;
      case 3:
        iu(t);
        break;
      case 12:
        iu(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, rn(t)) : iu(t);
        break;
      default:
        iu(t);
    }
  }
  function rn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null) for (var a = 0; a < l.length; a++) {
        var e = l[a];
        Ht = e, l0(e, t);
      }
      Po(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, l, l.return), rn(l);
          break;
        case 22:
          a = l.stateNode, a._visibility & 2 && (a._visibility &= -3, rn(l));
          break;
        default:
          rn(l);
      }
      t = t.sibling;
    }
  }
  function l0(t, l) {
    for (; Ht !== null; ) {
      var a = Ht;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, a, l);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          Ze(a.memoizedState.cache);
      }
      if (e = a.child, e !== null) e.return = a, Ht = e;
      else t: for (a = t; Ht !== null; ) {
        e = Ht;
        var u = e.sibling, n = e.return;
        if (Ko(e), e === a) {
          Ht = null;
          break t;
        }
        if (u !== null) {
          u.return = n, Ht = u;
          break t;
        }
        Ht = n;
      }
    }
  }
  var Gm = {
    getCacheForType: function(t) {
      var l = qt(Et), a = l.data.get(t);
      return a === void 0 && (a = t(), l.data.set(t, a)), a;
    },
    cacheSignal: function() {
      return qt(Et).controller.signal;
    }
  }, Qm = typeof WeakMap == "function" ? WeakMap : Map, ut = 0, dt = null, F = null, I = 0, it = 0, cl = null, fa = !1, re = !1, Oc = !1, Jl = 0, gt = 0, sa = 0, Xa = 0, Dc = 0, fl = 0, ge = 0, cu = null, Ft = null, Uc = !1, gn = 0, a0 = 0, Sn = 1 / 0, bn = null, oa = null, Dt = 0, da = null, Se = null, Wl = 0, Cc = 0, Hc = null, e0 = null, fu = 0, Nc = null;
  function bl() {
    return (ut & 2) !== 0 && I !== 0 ? I & -I : M.T !== null ? Gc() : Af();
  }
  function u0() {
    if (fl === 0) if ((I & 536870912) === 0 || tt) {
      var t = _u;
      _u <<= 1, (_u & 3932160) === 0 && (_u = 262144), fl = t;
    } else fl = 536870912;
    return t = nl.current, t !== null && (t.flags |= 32), fl;
  }
  function kt(t, l, a) {
    (t === dt && (it === 2 || it === 9) || t.cancelPendingCommit !== null) && (be(t, 0), ma(t, I, fl, !1)), Du(t, a), ((ut & 2) === 0 || t !== dt) && (t === dt && ((ut & 2) === 0 && (Xa |= a), gt === 4 && ma(t, I, fl, !1)), $l(t));
  }
  function n0(t, l, a) {
    if ((ut & 6) !== 0) throw Error(y(327));
    var e = !a && (l & 127) === 0 && (l & t.expiredLanes) === 0 || De(t, l), u = e ? Lm(t, l) : jc(t, l, !0), n = e;
    do {
      if (u === 0) {
        re && !e && ma(t, l, 0, !1);
        break;
      } else {
        if (a = t.current.alternate, n && !Xm(a)) {
          u = jc(t, l, !1), n = !1;
          continue;
        }
        if (u === 2) {
          if (n = l, t.errorRecoveryDisabledLanes & n) var i = 0;
          else i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            l = i;
            t: {
              var c = t;
              u = cu;
              var s = c.current.memoizedState.isDehydrated;
              if (s && (be(c, i).flags |= 256), i = jc(c, i, !1), i !== 2) {
                if (Oc && !s) {
                  c.errorRecoveryDisabledLanes |= n, Xa |= n, u = 4;
                  break t;
                }
                n = Ft, Ft = u, n !== null && (Ft === null ? Ft = n : Ft.push.apply(Ft, n));
              }
              u = i;
            }
            if (n = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          be(t, 0), ma(t, l, 0, !0);
          break;
        }
        t: {
          switch (e = t, n = u, n) {
            case 0:
            case 1:
              throw Error(y(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              ma(e, l, fl, !fa);
              break t;
            case 2:
              Ft = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(y(329));
          }
          if ((l & 62914560) === l && (u = gn + 300 - tl(), 10 < u)) {
            if (ma(e, l, fl, !fa), Ou(e, 0, !0) !== 0) break t;
            Wl = l, e.timeoutHandle = Y0(i0.bind(null, e, a, Ft, bn, Uc, l, fl, Xa, ge, fa, n, "Throttled", -0, 0), u);
            break t;
          }
          i0(e, a, Ft, bn, Uc, l, fl, Xa, ge, fa, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    $l(t);
  }
  function i0(t, l, a, e, u, n, i, c, s, h, b, A, r, S) {
    if (t.timeoutHandle = -1, A = l.subtreeFlags, A & 8192 || (A & 16785408) === 16785408) {
      A = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Rl
      }, Io(l, n, A);
      var H = (n & 62914560) === n ? gn - tl() : (n & 4194048) === n ? a0 - tl() : 0;
      if (H = T1(A, H), H !== null) {
        Wl = n, t.cancelPendingCommit = H(v0.bind(null, t, l, n, a, e, u, i, c, s, b, A, null, r, S)), ma(t, n, i, !h);
        return;
      }
    }
    v0(t, l, n, a, e, u, i, c, s);
  }
  function Xm(t) {
    for (var l = t; ; ) {
      var a = l.tag;
      if ((a === 0 || a === 11 || a === 15) && l.flags & 16384 && (a = l.updateQueue, a !== null && (a = a.stores, a !== null))) for (var e = 0; e < a.length; e++) {
        var u = a[e], n = u.getSnapshot;
        u = u.value;
        try {
          if (!el(n(), u)) return !1;
        } catch {
          return !1;
        }
      }
      if (a = l.child, l.subtreeFlags & 16384 && a !== null) a.return = l, l = a;
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function ma(t, l, a, e) {
    l &= ~Dc, l &= ~Xa, t.suspendedLanes |= l, t.pingedLanes &= ~l, e && (t.warmLanes |= l), e = t.expirationTimes;
    for (var u = l; 0 < u; ) {
      var n = 31 - al(u), i = 1 << n;
      e[n] = -1, u &= ~i;
    }
    a !== 0 && gf(t, a, l);
  }
  function pn() {
    return (ut & 6) === 0 ? (su(0, !1), !1) : !0;
  }
  function Rc() {
    if (F !== null) {
      if (it === 0) var t = F.return;
      else t = F, Yl = Ua = null, $i(t), se = null, Ke = 0, t = F;
      for (; t !== null; ) Yo(t.alternate, t), t = t.return;
      F = null;
    }
  }
  function be(t, l) {
    var a = t.timeoutHandle;
    a !== -1 && (t.timeoutHandle = -1, u1(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), Wl = 0, Rc(), dt = t, F = a = ql(t.current, null), I = l, it = 0, cl = null, fa = !1, re = De(t, l), Oc = !1, ge = fl = Dc = Xa = sa = gt = 0, Ft = cu = null, Uc = !1, (l & 8) !== 0 && (l |= l & 32);
    var e = t.entangledLanes;
    if (e !== 0) for (t = t.entanglements, e &= l; 0 < e; ) {
      var u = 31 - al(e), n = 1 << u;
      l |= t[u], e &= ~n;
    }
    return Jl = l, Xu(), a;
  }
  function c0(t, l) {
    V = null, M.H = Pe, l === fe || l === Wu ? (l = _s(), it = 3) : l === Yi ? (l = _s(), it = 4) : it = l === dc ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, cl = l, F === null && (gt = 1, sn(t, vl(l, t.current)));
  }
  function f0() {
    var t = nl.current;
    return t === null ? !0 : (I & 4194048) === I ? Sl === null : (I & 62914560) === I || (I & 536870912) !== 0 ? t === Sl : !1;
  }
  function s0() {
    var t = M.H;
    return M.H = Pe, t === null ? Pe : t;
  }
  function o0() {
    var t = M.A;
    return M.A = Gm, t;
  }
  function An() {
    gt = 4, fa || (I & 4194048) !== I && nl.current !== null || (re = !0), (sa & 134217727) === 0 && (Xa & 134217727) === 0 || dt === null || ma(dt, I, fl, !1);
  }
  function jc(t, l, a) {
    var e = ut;
    ut |= 2;
    var u = s0(), n = o0();
    (dt !== t || I !== l) && (bn = null, be(t, l)), l = !1;
    var i = gt;
    t: do
      try {
        if (it !== 0 && F !== null) {
          var c = F, s = cl;
          switch (it) {
            case 8:
              Rc(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              nl.current === null && (l = !0);
              var h = it;
              if (it = 0, cl = null, pe(t, c, s, h), a && re) {
                i = 0;
                break t;
              }
              break;
            default:
              h = it, it = 0, cl = null, pe(t, c, s, h);
          }
        }
        xm(), i = gt;
        break;
      } catch (b) {
        c0(t, b);
      }
    while (!0);
    return l && t.shellSuspendCounter++, Yl = Ua = null, ut = e, M.H = u, M.A = n, F === null && (dt = null, I = 0, Xu()), i;
  }
  function xm() {
    for (; F !== null; ) d0(F);
  }
  function Lm(t, l) {
    var a = ut;
    ut |= 2;
    var e = s0(), u = o0();
    dt !== t || I !== l ? (bn = null, Sn = tl() + 500, be(t, l)) : re = De(t, l);
    t: do
      try {
        if (it !== 0 && F !== null) {
          l = F;
          var n = cl;
          l: switch (it) {
            case 1:
              it = 0, cl = null, pe(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (Es(n)) {
                it = 0, cl = null, m0(l);
                break;
              }
              l = function() {
                it !== 2 && it !== 9 || dt !== t || (it = 7), $l(t);
              }, n.then(l, l);
              break t;
            case 3:
              it = 7;
              break t;
            case 4:
              it = 5;
              break t;
            case 7:
              Es(n) ? (it = 0, cl = null, m0(l)) : (it = 0, cl = null, pe(t, l, n, 7));
              break;
            case 5:
              var i = null;
              switch (F.tag) {
                case 26:
                  i = F.memoizedState;
                case 5:
                case 27:
                  var c = F;
                  if (i ? I0(i) : c.stateNode.complete) {
                    it = 0, cl = null;
                    var s = c.sibling;
                    if (s !== null) F = s;
                    else {
                      var h = c.return;
                      h !== null ? (F = h, Tn(h)) : F = null;
                    }
                    break l;
                  }
              }
              it = 0, cl = null, pe(t, l, n, 5);
              break;
            case 6:
              it = 0, cl = null, pe(t, l, n, 6);
              break;
            case 8:
              Rc(), gt = 6;
              break t;
            default:
              throw Error(y(462));
          }
        }
        Zm();
        break;
      } catch (b) {
        c0(t, b);
      }
    while (!0);
    return Yl = Ua = null, M.H = e, M.A = u, ut = a, F !== null ? 0 : (dt = null, I = 0, Xu(), gt);
  }
  function Zm() {
    for (; F !== null && !pd(); ) d0(F);
  }
  function d0(t) {
    var l = qo(t.alternate, t, Jl);
    t.memoizedProps = t.pendingProps, l === null ? Tn(t) : F = l;
  }
  function m0(t) {
    var l = t, a = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = Uo(a, l, l.pendingProps, l.type, void 0, I);
        break;
      case 11:
        l = Uo(a, l, l.pendingProps, l.type.render, l.ref, I);
        break;
      case 5:
        $i(l);
      default:
        Yo(a, l), l = F = ms(l, Jl), l = qo(a, l, Jl);
    }
    t.memoizedProps = t.pendingProps, l === null ? Tn(t) : F = l;
  }
  function pe(t, l, a, e) {
    Yl = Ua = null, $i(l), se = null, Ke = 0;
    var u = l.return;
    try {
      if (Hm(t, u, l, a, I)) {
        gt = 1, sn(t, vl(a, t.current)), F = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw F = u, n;
      gt = 1, sn(t, vl(a, t.current)), F = null;
      return;
    }
    l.flags & 32768 ? (tt || e === 1 ? t = !0 : re || (I & 536870912) !== 0 ? t = !1 : (fa = t = !0, (e === 2 || e === 9 || e === 3 || e === 6) && (e = nl.current, e !== null && e.tag === 13 && (e.flags |= 16384))), y0(l, t)) : Tn(l);
  }
  function Tn(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        y0(l, fa);
        return;
      }
      t = l.return;
      var a = jm(l.alternate, l, Jl);
      if (a !== null) {
        F = a;
        return;
      }
      if (l = l.sibling, l !== null) {
        F = l;
        return;
      }
      F = l = t;
    } while (l !== null);
    gt === 0 && (gt = 5);
  }
  function y0(t, l) {
    do {
      var a = qm(t.alternate, t);
      if (a !== null) {
        a.flags &= 32767, F = a;
        return;
      }
      if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !l && (t = t.sibling, t !== null)) {
        F = t;
        return;
      }
      F = t = a;
    } while (t !== null);
    gt = 6, F = null;
  }
  function v0(t, l, a, e, u, n, i, c, s) {
    t.cancelPendingCommit = null;
    do
      En();
    while (Dt !== 0);
    if ((ut & 6) !== 0) throw Error(y(327));
    if (l !== null) {
      if (l === t.current) throw Error(y(177));
      if (n = l.lanes | l.childLanes, n |= Ti, Cd(t, a, n, i, c, s), t === dt && (F = dt = null, I = 0), Se = l, da = t, Wl = a, Cc = n, Hc = u, e0 = e, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Jm(Eu, function() {
        return b0(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), e = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || e) {
        e = M.T, M.T = null, u = D.p, D.p = 2, i = ut, ut |= 4;
        try {
          Bm(t, l, a);
        } finally {
          ut = i, D.p = u, M.T = e;
        }
      }
      Dt = 1, h0(), r0(), g0();
    }
  }
  function h0() {
    if (Dt === 1) {
      Dt = 0;
      var t = da, l = Se, a = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || a) {
        a = M.T, M.T = null;
        var e = D.p;
        D.p = 2;
        var u = ut;
        ut |= 4;
        try {
          $o(l, t);
          var n = Kc, i = es(t.containerInfo), c = n.focusedElem, s = n.selectionRange;
          if (i !== c && c && c.ownerDocument && as(c.ownerDocument.documentElement, c)) {
            if (s !== null && gi(c)) {
              var h = s.start, b = s.end;
              if (b === void 0 && (b = h), "selectionStart" in c) c.selectionStart = h, c.selectionEnd = Math.min(b, c.value.length);
              else {
                var A = c.ownerDocument || document, r = A && A.defaultView || window;
                if (r.getSelection) {
                  var S = r.getSelection(), H = c.textContent.length, X = Math.min(s.start, H), ot = s.end === void 0 ? X : Math.min(s.end, H);
                  !S.extend && X > ot && (i = ot, ot = X, X = i);
                  var m = ls(c, X), o = ls(c, ot);
                  if (m && o && (S.rangeCount !== 1 || S.anchorNode !== m.node || S.anchorOffset !== m.offset || S.focusNode !== o.node || S.focusOffset !== o.offset)) {
                    var v = A.createRange();
                    v.setStart(m.node, m.offset), S.removeAllRanges(), X > ot ? (S.addRange(v), S.extend(o.node, o.offset)) : (v.setEnd(o.node, o.offset), S.addRange(v));
                  }
                }
              }
            }
            for (A = [], S = c; S = S.parentNode; ) S.nodeType === 1 && A.push({
              element: S,
              left: S.scrollLeft,
              top: S.scrollTop
            });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < A.length; c++) {
              var p = A[c];
              p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
            }
          }
          qn = !!Vc, Kc = Vc = null;
        } finally {
          ut = u, D.p = e, M.T = a;
        }
      }
      t.current = l, Dt = 2;
    }
  }
  function r0() {
    if (Dt === 2) {
      Dt = 0;
      var t = da, l = Se, a = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || a) {
        a = M.T, M.T = null;
        var e = D.p;
        D.p = 2;
        var u = ut;
        ut |= 4;
        try {
          Vo(t, l.alternate, l);
        } finally {
          ut = u, D.p = e, M.T = a;
        }
      }
      Dt = 3;
    }
  }
  function g0() {
    if (Dt === 4 || Dt === 3) {
      Dt = 0, Ad();
      var t = da, l = Se, a = Wl, e = e0;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Dt = 5 : (Dt = 0, Se = da = null, S0(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (oa = null), In(a), l = l.stateNode, ll && typeof ll.onCommitFiberRoot == "function") try {
        ll.onCommitFiberRoot(Oe, l, void 0, (l.current.flags & 128) === 128);
      } catch {
      }
      if (e !== null) {
        l = M.T, u = D.p, D.p = 2, M.T = null;
        try {
          for (var n = t.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          M.T = l, D.p = u;
        }
      }
      (Wl & 3) !== 0 && En(), $l(t), u = t.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? t === Nc ? fu++ : (fu = 0, Nc = t) : fu = 0, su(0, !1);
    }
  }
  function S0(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, Ze(l)));
  }
  function En() {
    return h0(), r0(), g0(), b0();
  }
  function b0() {
    if (Dt !== 5) return !1;
    var t = da, l = Cc;
    Cc = 0;
    var a = In(Wl), e = M.T, u = D.p;
    try {
      D.p = 32 > a ? 32 : a, M.T = null, a = Hc, Hc = null;
      var n = da, i = Wl;
      if (Dt = 0, Se = da = null, Wl = 0, (ut & 6) !== 0) throw Error(y(331));
      var c = ut;
      if (ut |= 4, t0(n.current), ko(n, n.current, i, a), ut = c, su(0, !1), ll && typeof ll.onPostCommitFiberRoot == "function") try {
        ll.onPostCommitFiberRoot(Oe, n);
      } catch {
      }
      return !0;
    } finally {
      D.p = u, M.T = e, S0(t, l);
    }
  }
  function p0(t, l, a) {
    l = vl(a, l), l = oc(t.stateNode, l, 2), t = Ba(t, l, 2), t !== null && (Du(t, 2), $l(t));
  }
  function ct(t, l, a) {
    if (t.tag === 3) p0(t, t, a);
    else for (; l !== null; ) {
      if (l.tag === 3) {
        p0(l, t, a);
        break;
      } else if (l.tag === 1) {
        var e = l.stateNode;
        if (typeof l.type.getDerivedStateFromError == "function" || typeof e.componentDidCatch == "function" && (oa === null || !oa.has(e))) {
          t = vl(a, t), a = Ao(2), e = Ba(l, a, 2), e !== null && (To(a, e, l, t), Du(e, 2), $l(e));
          break;
        }
      }
      l = l.return;
    }
  }
  function qc(t, l, a) {
    var e = t.pingCache;
    if (e === null) {
      e = t.pingCache = new Qm();
      var u = /* @__PURE__ */ new Set();
      e.set(l, u);
    } else u = e.get(l), u === void 0 && (u = /* @__PURE__ */ new Set(), e.set(l, u));
    u.has(a) || (Oc = !0, u.add(a), t = Vm.bind(null, t, l, a), l.then(t, t));
  }
  function Vm(t, l, a) {
    var e = t.pingCache;
    e !== null && e.delete(l), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, dt === t && (I & a) === a && (gt === 4 || gt === 3 && (I & 62914560) === I && 300 > tl() - gn ? (ut & 2) === 0 && be(t, 0) : Dc |= a, ge === I && (ge = 0)), $l(t);
  }
  function A0(t, l) {
    l === 0 && (l = rf()), t = Ma(t, l), t !== null && (Du(t, l), $l(t));
  }
  function Km(t) {
    var l = t.memoizedState, a = 0;
    l !== null && (a = l.retryLane), A0(t, a);
  }
  function wm(t, l) {
    var a = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var e = t.stateNode, u = t.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        e = t.stateNode;
        break;
      case 22:
        e = t.stateNode._retryCache;
        break;
      default:
        throw Error(y(314));
    }
    e !== null && e.delete(l), A0(t, a);
  }
  function Jm(t, l) {
    return $n(t, l);
  }
  var zn = null, Ae = null, Bc = !1, _n = !1, Yc = !1, ya = 0;
  function $l(t) {
    t !== Ae && t.next === null && (Ae === null ? zn = Ae = t : Ae = Ae.next = t), _n = !0, Bc || (Bc = !0, $m());
  }
  function su(t, l) {
    if (!Yc && _n) {
      Yc = !0;
      do
        for (var a = !1, e = zn; e !== null; ) {
          if (!l) if (t !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = e.suspendedLanes, c = e.pingedLanes;
              n = (1 << 31 - al(42 | t) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, _0(e, n));
          } else n = I, n = Ou(e, e === dt ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), (n & 3) === 0 || De(e, n) || (a = !0, _0(e, n));
          e = e.next;
        }
      while (a);
      Yc = !1;
    }
  }
  function Wm() {
    T0();
  }
  function T0() {
    _n = Bc = !1;
    var t = 0;
    ya !== 0 && e1() && (t = ya);
    for (var l = tl(), a = null, e = zn; e !== null; ) {
      var u = e.next, n = E0(e, l);
      n === 0 ? (e.next = null, a === null ? zn = u : a.next = u, u === null && (Ae = a)) : (a = e, (t !== 0 || (n & 3) !== 0) && (_n = !0)), e = u;
    }
    Dt !== 0 && Dt !== 5 || su(t, !1), ya !== 0 && (ya = 0);
  }
  function E0(t, l) {
    for (var a = t.suspendedLanes, e = t.pingedLanes, u = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - al(n), c = 1 << i, s = u[i];
      s === -1 ? ((c & a) === 0 || (c & e) !== 0) && (u[i] = Ud(c, l)) : s <= l && (t.expiredLanes |= c), n &= ~c;
    }
    if (l = dt, a = I, a = Ou(t, t === l ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), e = t.callbackNode, a === 0 || t === l && (it === 2 || it === 9) || t.cancelPendingCommit !== null) return e !== null && e !== null && Fn(e), t.callbackNode = null, t.callbackPriority = 0;
    if ((a & 3) === 0 || De(t, a)) {
      if (l = a & -a, l === t.callbackPriority) return l;
      switch (e !== null && Fn(e), In(a)) {
        case 2:
        case 8:
          a = vf;
          break;
        case 32:
          a = Eu;
          break;
        case 268435456:
          a = hf;
          break;
        default:
          a = Eu;
      }
      return e = z0.bind(null, t), a = $n(a, e), t.callbackPriority = l, t.callbackNode = a, l;
    }
    return e !== null && e !== null && Fn(e), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function z0(t, l) {
    if (Dt !== 0 && Dt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
    var a = t.callbackNode;
    if (En() && t.callbackNode !== a) return null;
    var e = I;
    return e = Ou(t, t === dt ? e : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), e === 0 ? null : (n0(t, e, l), E0(t, tl()), t.callbackNode != null && t.callbackNode === a ? z0.bind(null, t) : null);
  }
  function _0(t, l) {
    if (En()) return null;
    n0(t, l, !0);
  }
  function $m() {
    n1(function() {
      (ut & 6) !== 0 ? $n(yf, Wm) : T0();
    });
  }
  function Gc() {
    if (ya === 0) {
      var t = ie;
      t === 0 && (t = zu, zu <<= 1, (zu & 261888) === 0 && (zu = 256)), ya = t;
    }
    return ya;
  }
  function M0(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Nu("" + t);
  }
  function O0(t, l) {
    var a = l.ownerDocument.createElement("input");
    return a.name = l.name, a.value = l.value, t.id && a.setAttribute("form", t.id), l.parentNode.insertBefore(a, l), t = new FormData(t), a.parentNode.removeChild(a), t;
  }
  function Fm(t, l, a, e, u) {
    if (l === "submit" && a && a.stateNode === u) {
      var n = M0((u[Kt] || null).action), i = e.submitter;
      i && (l = (l = i[Kt] || null) ? M0(l.formAction) : i.getAttribute("formAction"), l !== null && (n = l, i = null));
      var c = new Bu("action", "action", null, e, u);
      t.push({
        event: c,
        listeners: [{
          instance: null,
          listener: function() {
            if (e.defaultPrevented) {
              if (ya !== 0) {
                var s = i ? O0(u, i) : new FormData(u);
                uc(a, {
                  pending: !0,
                  data: s,
                  method: u.method,
                  action: n
                }, null, s);
              }
            } else typeof n == "function" && (c.preventDefault(), s = i ? O0(u, i) : new FormData(u), uc(a, {
              pending: !0,
              data: s,
              method: u.method,
              action: n
            }, n, s));
          },
          currentTarget: u
        }]
      });
    }
  }
  for (var Qc = 0; Qc < Ai.length; Qc++) {
    var Xc = Ai[Qc];
    zl(Xc.toLowerCase(), "on" + (Xc[0].toUpperCase() + Xc.slice(1)));
  }
  zl(is, "onAnimationEnd"), zl(cs, "onAnimationIteration"), zl(fs, "onAnimationStart"), zl("dblclick", "onDoubleClick"), zl("focusin", "onFocus"), zl("focusout", "onBlur"), zl(dm, "onTransitionRun"), zl(mm, "onTransitionStart"), zl(ym, "onTransitionCancel"), zl(ss, "onTransitionEnd"), wa("onMouseEnter", ["mouseout", "mouseover"]), wa("onMouseLeave", ["mouseout", "mouseover"]), wa("onPointerEnter", ["pointerout", "pointerover"]), wa("onPointerLeave", ["pointerout", "pointerover"]), Ta("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ta("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ta("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ta("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ta("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ta("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ou = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), km = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ou));
  function D0(t, l) {
    l = (l & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var e = t[a], u = e.event;
      e = e.listeners;
      t: {
        var n = void 0;
        if (l) for (var i = e.length - 1; 0 <= i; i--) {
          var c = e[i], s = c.instance, h = c.currentTarget;
          if (c = c.listener, s !== n && u.isPropagationStopped()) break t;
          n = c, u.currentTarget = h;
          try {
            n(u);
          } catch (b) {
            Qu(b);
          }
          u.currentTarget = null, n = s;
        }
        else for (i = 0; i < e.length; i++) {
          if (c = e[i], s = c.instance, h = c.currentTarget, c = c.listener, s !== n && u.isPropagationStopped()) break t;
          n = c, u.currentTarget = h;
          try {
            n(u);
          } catch (b) {
            Qu(b);
          }
          u.currentTarget = null, n = s;
        }
      }
    }
  }
  function k(t, l) {
    var a = l[Pn];
    a === void 0 && (a = l[Pn] = /* @__PURE__ */ new Set());
    var e = t + "__bubble";
    a.has(e) || (C0(l, t, 2, !1), a.add(e));
  }
  function xc(t, l, a) {
    var e = 0;
    l && (e |= 4), C0(a, t, e, l);
  }
  var Mn = "_reactListening" + Math.random().toString(36).slice(2);
  function U0(t) {
    if (!t[Mn]) {
      t[Mn] = !0, zf.forEach(function(a) {
        a !== "selectionchange" && (km.has(a) || xc(a, !1, t), xc(a, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[Mn] || (l[Mn] = !0, xc("selectionchange", !1, l));
    }
  }
  function C0(t, l, a, e) {
    switch (ed(l)) {
      case 2:
        var u = O1;
        break;
      case 8:
        u = D1;
        break;
      default:
        u = af;
    }
    a = u.bind(null, l, a, t), u = void 0, !fi || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (u = !0), e ? u !== void 0 ? t.addEventListener(l, a, {
      capture: !0,
      passive: u
    }) : t.addEventListener(l, a, !0) : u !== void 0 ? t.addEventListener(l, a, { passive: u }) : t.addEventListener(l, a, !1);
  }
  function Lc(t, l, a, e, u) {
    var n = e;
    if ((l & 1) === 0 && (l & 2) === 0 && e !== null) t: for (; ; ) {
      if (e === null) return;
      var i = e.tag;
      if (i === 3 || i === 4) {
        var c = e.stateNode.containerInfo;
        if (c === u) break;
        if (i === 4) for (i = e.return; i !== null; ) {
          var s = i.tag;
          if ((s === 3 || s === 4) && i.stateNode.containerInfo === u) return;
          i = i.return;
        }
        for (; c !== null; ) {
          if (i = Za(c), i === null) return;
          if (s = i.tag, s === 5 || s === 6 || s === 26 || s === 27) {
            e = n = i;
            continue t;
          }
          c = c.parentNode;
        }
      }
      e = e.return;
    }
    Bf(function() {
      var h = n, b = ii(a), A = [];
      t: {
        var r = os.get(t);
        if (r !== void 0) {
          var S = Bu, H = t;
          switch (t) {
            case "keypress":
              if (ju(a) === 0) break t;
            case "keydown":
            case "keyup":
              S = Wd;
              break;
            case "focusin":
              H = "focus", S = mi;
              break;
            case "focusout":
              H = "blur", S = mi;
              break;
            case "beforeblur":
            case "afterblur":
              S = mi;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = Qf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = xd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = $d;
              break;
            case is:
            case cs:
            case fs:
              S = Ld;
              break;
            case ss:
              S = Fd;
              break;
            case "scroll":
            case "scrollend":
              S = Xd;
              break;
            case "wheel":
              S = kd;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = Zd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = xf;
              break;
            case "toggle":
            case "beforetoggle":
              S = Id;
          }
          var X = (l & 4) !== 0, ot = !X && (t === "scroll" || t === "scrollend"), m = X ? r !== null ? r + "Capture" : null : r;
          X = [];
          for (var o = h, v; o !== null; ) {
            var p = o;
            if (v = p.stateNode, p = p.tag, p !== 5 && p !== 26 && p !== 27 || v === null || m === null || (p = Ne(o, m), p != null && X.push(du(o, p, v))), ot) break;
            o = o.return;
          }
          0 < X.length && (r = new S(r, H, null, a, b), A.push({
            event: r,
            listeners: X
          }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (r = t === "mouseover" || t === "pointerover", S = t === "mouseout" || t === "pointerout", r && a !== ni && (H = a.relatedTarget || a.fromElement) && (Za(H) || H[Ue])) break t;
          if ((S || r) && (r = b.window === b ? b : (r = b.ownerDocument) ? r.defaultView || r.parentWindow : window, S ? (H = a.relatedTarget || a.toElement, S = h, H = H ? Za(H) : null, H !== null && (ot = Z(H), X = H.tag, H !== ot || X !== 5 && X !== 27 && X !== 6) && (H = null)) : (S = null, H = h), S !== H)) {
            if (X = Qf, p = "onMouseLeave", m = "onMouseEnter", o = "mouse", (t === "pointerout" || t === "pointerover") && (X = xf, p = "onPointerLeave", m = "onPointerEnter", o = "pointer"), ot = S == null ? r : He(S), v = H == null ? r : He(H), r = new X(p, o + "leave", S, a, b), r.target = ot, r.relatedTarget = v, p = null, Za(b) === h && (X = new X(m, o + "enter", H, a, b), X.target = v, X.relatedTarget = ot, p = X), ot = p, S && H) l: {
              for (X = Im, m = S, o = H, v = 0, p = m; p; p = X(p)) v++;
              p = 0;
              for (var Y = o; Y; Y = X(Y)) p++;
              for (; 0 < v - p; ) m = X(m), v--;
              for (; 0 < p - v; ) o = X(o), p--;
              for (; v--; ) {
                if (m === o || o !== null && m === o.alternate) {
                  X = m;
                  break l;
                }
                m = X(m), o = X(o);
              }
              X = null;
            }
            else X = null;
            S !== null && H0(A, r, S, X, !1), H !== null && ot !== null && H0(A, ot, H, X, !0);
          }
        }
        t: {
          if (r = h ? He(h) : window, S = r.nodeName && r.nodeName.toLowerCase(), S === "select" || S === "input" && r.type === "file") var lt = $f;
          else if (Jf(r)) if (Ff) lt = fm;
          else {
            lt = im;
            var R = nm;
          }
          else S = r.nodeName, !S || S.toLowerCase() !== "input" || r.type !== "checkbox" && r.type !== "radio" ? h && ui(h.elementType) && (lt = $f) : lt = cm;
          if (lt && (lt = lt(t, h))) {
            Wf(A, lt, a, b);
            break t;
          }
          R && R(t, r, h), t === "focusout" && h && r.type === "number" && h.memoizedProps.value != null && ei(r, "number", r.value);
        }
        switch (R = h ? He(h) : window, t) {
          case "focusin":
            (Jf(R) || R.contentEditable === "true") && (Ia = R, Si = h, Xe = null);
            break;
          case "focusout":
            Xe = Si = Ia = null;
            break;
          case "mousedown":
            bi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            bi = !1, us(A, a, b);
            break;
          case "selectionchange":
            if (om) break;
          case "keydown":
          case "keyup":
            us(A, a, b);
        }
        var K;
        if (vi) t: {
          switch (t) {
            case "compositionstart":
              var P = "onCompositionStart";
              break t;
            case "compositionend":
              P = "onCompositionEnd";
              break t;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break t;
          }
          P = void 0;
        }
        else ka ? Kf(t, a) && (P = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (P = "onCompositionStart");
        P && (Lf && a.locale !== "ko" && (ka || P !== "onCompositionStart" ? P === "onCompositionEnd" && ka && (K = Yf()) : (Pl = b, si = "value" in Pl ? Pl.value : Pl.textContent, ka = !0)), R = On(h, P), 0 < R.length && (P = new Xf(P, t, null, a, b), A.push({
          event: P,
          listeners: R
        }), K ? P.data = K : (K = wf(a), K !== null && (P.data = K)))), (K = tm ? lm(t, a) : am(t, a)) && (P = On(h, "onBeforeInput"), 0 < P.length && (R = new Xf("onBeforeInput", "beforeinput", null, a, b), A.push({
          event: R,
          listeners: P
        }), R.data = K)), Fm(A, t, h, a, b);
      }
      D0(A, l);
    });
  }
  function du(t, l, a) {
    return {
      instance: t,
      listener: l,
      currentTarget: a
    };
  }
  function On(t, l) {
    for (var a = l + "Capture", e = []; t !== null; ) {
      var u = t, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Ne(t, a), u != null && e.unshift(du(t, u, n)), u = Ne(t, l), u != null && e.push(du(t, u, n))), t.tag === 3) return e;
      t = t.return;
    }
    return [];
  }
  function Im(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function H0(t, l, a, e, u) {
    for (var n = l._reactName, i = []; a !== null && a !== e; ) {
      var c = a, s = c.alternate, h = c.stateNode;
      if (c = c.tag, s !== null && s === e) break;
      c !== 5 && c !== 26 && c !== 27 || h === null || (s = h, u ? (h = Ne(a, n), h != null && i.unshift(du(a, h, s))) : u || (h = Ne(a, n), h != null && i.push(du(a, h, s)))), a = a.return;
    }
    i.length !== 0 && t.push({
      event: l,
      listeners: i
    });
  }
  var Pm = /\r\n?/g, t1 = /\u0000|\uFFFD/g;
  function N0(t) {
    return (typeof t == "string" ? t : "" + t).replace(Pm, `
`).replace(t1, "");
  }
  function R0(t, l) {
    return l = N0(l), N0(t) === l;
  }
  function st(t, l, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string" ? l === "body" || l === "textarea" && e === "" || Wa(t, e) : (typeof e == "number" || typeof e == "bigint") && l !== "body" && Wa(t, "" + e);
        break;
      case "className":
        Cu(t, "class", e);
        break;
      case "tabIndex":
        Cu(t, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Cu(t, a, e);
        break;
      case "style":
        jf(t, e, n);
        break;
      case "data":
        if (l !== "object") {
          Cu(t, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (l !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (e == null || typeof e == "function" || typeof e == "symbol" || typeof e == "boolean") {
          t.removeAttribute(a);
          break;
        }
        e = Nu("" + e), t.setAttribute(a, e);
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          t.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof n == "function" && (a === "formAction" ? (l !== "input" && st(t, l, "name", u.name, u, null), st(t, l, "formEncType", u.formEncType, u, null), st(t, l, "formMethod", u.formMethod, u, null), st(t, l, "formTarget", u.formTarget, u, null)) : (st(t, l, "encType", u.encType, u, null), st(t, l, "method", u.method, u, null), st(t, l, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          t.removeAttribute(a);
          break;
        }
        e = Nu("" + e), t.setAttribute(a, e);
        break;
      case "onClick":
        e != null && (t.onclick = Rl);
        break;
      case "onScroll":
        e != null && k("scroll", t);
        break;
      case "onScrollEnd":
        e != null && k("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(y(61));
          if (a = e.__html, a != null) {
            if (u.children != null) throw Error(y(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        t.muted = e && typeof e != "function" && typeof e != "symbol";
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
        if (e == null || typeof e == "function" || typeof e == "boolean" || typeof e == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        a = Nu("" + e), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol" ? t.setAttribute(a, "" + e) : t.removeAttribute(a);
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
        e && typeof e != "function" && typeof e != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === !0 ? t.setAttribute(a, "") : e !== !1 && e != null && typeof e != "function" && typeof e != "symbol" ? t.setAttribute(a, e) : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null && typeof e != "function" && typeof e != "symbol" && !isNaN(e) && 1 <= e ? t.setAttribute(a, e) : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e) ? t.removeAttribute(a) : t.setAttribute(a, e);
        break;
      case "popover":
        k("beforetoggle", t), k("toggle", t), Uu(t, "popover", e);
        break;
      case "xlinkActuate":
        Nl(t, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        Nl(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        Nl(t, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        Nl(t, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        Nl(t, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        Nl(t, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        Nl(t, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        Nl(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        Nl(t, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
        break;
      case "is":
        Uu(t, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Gd.get(a) || a, Uu(t, a, e));
    }
  }
  function Zc(t, l, a, e, u, n) {
    switch (a) {
      case "style":
        jf(t, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(y(61));
          if (a = e.__html, a != null) {
            if (u.children != null) throw Error(y(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string" ? Wa(t, e) : (typeof e == "number" || typeof e == "bigint") && Wa(t, "" + e);
        break;
      case "onScroll":
        e != null && k("scroll", t);
        break;
      case "onScrollEnd":
        e != null && k("scrollend", t);
        break;
      case "onClick":
        e != null && (t.onclick = Rl);
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
        if (!_f.hasOwnProperty(a)) t: {
          if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), l = a.slice(2, u ? a.length - 7 : void 0), n = t[Kt] || null, n = n != null ? n[a] : null, typeof n == "function" && t.removeEventListener(l, n, u), typeof e == "function")) {
            typeof n != "function" && n !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(l, e, u);
            break t;
          }
          a in t ? t[a] = e : e === !0 ? t.setAttribute(a, "") : Uu(t, a, e);
        }
    }
  }
  function Yt(t, l, a) {
    switch (l) {
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
        k("error", t), k("load", t);
        var e = !1, u = !1, n;
        for (n in a) if (a.hasOwnProperty(n)) {
          var i = a[n];
          if (i != null) switch (n) {
            case "src":
              e = !0;
              break;
            case "srcSet":
              u = !0;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(y(137, l));
            default:
              st(t, l, n, i, a, null);
          }
        }
        u && st(t, l, "srcSet", a.srcSet, a, null), e && st(t, l, "src", a.src, a, null);
        return;
      case "input":
        k("invalid", t);
        var c = n = i = u = null, s = null, h = null;
        for (e in a) if (a.hasOwnProperty(e)) {
          var b = a[e];
          if (b != null) switch (e) {
            case "name":
              u = b;
              break;
            case "type":
              i = b;
              break;
            case "checked":
              s = b;
              break;
            case "defaultChecked":
              h = b;
              break;
            case "value":
              n = b;
              break;
            case "defaultValue":
              c = b;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (b != null) throw Error(y(137, l));
              break;
            default:
              st(t, l, e, b, a, null);
          }
        }
        Cf(t, n, c, s, h, i, u, !1);
        return;
      case "select":
        k("invalid", t), e = i = n = null;
        for (u in a) if (a.hasOwnProperty(u) && (c = a[u], c != null)) switch (u) {
          case "value":
            n = c;
            break;
          case "defaultValue":
            i = c;
            break;
          case "multiple":
            e = c;
          default:
            st(t, l, u, c, a, null);
        }
        l = n, a = i, t.multiple = !!e, l != null ? Ja(t, !!e, l, !1) : a != null && Ja(t, !!e, a, !0);
        return;
      case "textarea":
        k("invalid", t), n = u = e = null;
        for (i in a) if (a.hasOwnProperty(i) && (c = a[i], c != null)) switch (i) {
          case "value":
            e = c;
            break;
          case "defaultValue":
            u = c;
            break;
          case "children":
            n = c;
            break;
          case "dangerouslySetInnerHTML":
            if (c != null) throw Error(y(91));
            break;
          default:
            st(t, l, i, c, a, null);
        }
        Nf(t, e, u, n);
        return;
      case "option":
        for (s in a) a.hasOwnProperty(s) && (e = a[s], e != null) && (s === "selected" ? t.selected = e && typeof e != "function" && typeof e != "symbol" : st(t, l, s, e, a, null));
        return;
      case "dialog":
        k("beforetoggle", t), k("toggle", t), k("cancel", t), k("close", t);
        break;
      case "iframe":
      case "object":
        k("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < ou.length; e++) k(ou[e], t);
        break;
      case "image":
        k("error", t), k("load", t);
        break;
      case "details":
        k("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        k("error", t), k("load", t);
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
        for (h in a) if (a.hasOwnProperty(h) && (e = a[h], e != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(y(137, l));
          default:
            st(t, l, h, e, a, null);
        }
        return;
      default:
        if (ui(l)) {
          for (b in a) a.hasOwnProperty(b) && (e = a[b], e !== void 0 && Zc(t, l, b, e, a, void 0));
          return;
        }
    }
    for (c in a) a.hasOwnProperty(c) && (e = a[c], e != null && st(t, l, c, e, a, null));
  }
  function l1(t, l, a, e) {
    switch (l) {
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
        var u = null, n = null, i = null, c = null, s = null, h = null, b = null;
        for (S in a) {
          var A = a[S];
          if (a.hasOwnProperty(S) && A != null) switch (S) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              s = A;
            default:
              e.hasOwnProperty(S) || st(t, l, S, null, e, A);
          }
        }
        for (var r in e) {
          var S = e[r];
          if (A = a[r], e.hasOwnProperty(r) && (S != null || A != null)) switch (r) {
            case "type":
              n = S;
              break;
            case "name":
              u = S;
              break;
            case "checked":
              h = S;
              break;
            case "defaultChecked":
              b = S;
              break;
            case "value":
              i = S;
              break;
            case "defaultValue":
              c = S;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (S != null) throw Error(y(137, l));
              break;
            default:
              S !== A && st(t, l, r, S, e, A);
          }
        }
        ai(t, i, c, s, h, b, n, u);
        return;
      case "select":
        S = i = c = r = null;
        for (n in a) if (s = a[n], a.hasOwnProperty(n) && s != null) switch (n) {
          case "value":
            break;
          case "multiple":
            S = s;
          default:
            e.hasOwnProperty(n) || st(t, l, n, null, e, s);
        }
        for (u in e) if (n = e[u], s = a[u], e.hasOwnProperty(u) && (n != null || s != null)) switch (u) {
          case "value":
            r = n;
            break;
          case "defaultValue":
            c = n;
            break;
          case "multiple":
            i = n;
          default:
            n !== s && st(t, l, u, n, e, s);
        }
        l = c, a = i, e = S, r != null ? Ja(t, !!a, r, !1) : !!e != !!a && (l != null ? Ja(t, !!a, l, !0) : Ja(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        S = r = null;
        for (c in a) if (u = a[c], a.hasOwnProperty(c) && u != null && !e.hasOwnProperty(c)) switch (c) {
          case "value":
            break;
          case "children":
            break;
          default:
            st(t, l, c, null, e, u);
        }
        for (i in e) if (u = e[i], n = a[i], e.hasOwnProperty(i) && (u != null || n != null)) switch (i) {
          case "value":
            r = u;
            break;
          case "defaultValue":
            S = u;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (u != null) throw Error(y(91));
            break;
          default:
            u !== n && st(t, l, i, u, e, n);
        }
        Hf(t, r, S);
        return;
      case "option":
        for (var H in a) r = a[H], a.hasOwnProperty(H) && r != null && !e.hasOwnProperty(H) && (H === "selected" ? t.selected = !1 : st(t, l, H, null, e, r));
        for (s in e) r = e[s], S = a[s], e.hasOwnProperty(s) && r !== S && (r != null || S != null) && (s === "selected" ? t.selected = r && typeof r != "function" && typeof r != "symbol" : st(t, l, s, r, e, S));
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
        for (var X in a) r = a[X], a.hasOwnProperty(X) && r != null && !e.hasOwnProperty(X) && st(t, l, X, null, e, r);
        for (h in e) if (r = e[h], S = a[h], e.hasOwnProperty(h) && r !== S && (r != null || S != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (r != null) throw Error(y(137, l));
            break;
          default:
            st(t, l, h, r, e, S);
        }
        return;
      default:
        if (ui(l)) {
          for (var ot in a) r = a[ot], a.hasOwnProperty(ot) && r !== void 0 && !e.hasOwnProperty(ot) && Zc(t, l, ot, void 0, e, r);
          for (b in e) r = e[b], S = a[b], !e.hasOwnProperty(b) || r === S || r === void 0 && S === void 0 || Zc(t, l, b, r, e, S);
          return;
        }
    }
    for (var m in a) r = a[m], a.hasOwnProperty(m) && r != null && !e.hasOwnProperty(m) && st(t, l, m, null, e, r);
    for (A in e) r = e[A], S = a[A], !e.hasOwnProperty(A) || r === S || r == null && S == null || st(t, l, A, r, e, S);
  }
  function j0(t) {
    switch (t) {
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
  function a1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, l = 0, a = performance.getEntriesByType("resource"), e = 0; e < a.length; e++) {
        var u = a[e], n = u.transferSize, i = u.initiatorType, c = u.duration;
        if (n && c && j0(i)) {
          for (i = 0, c = u.responseEnd, e += 1; e < a.length; e++) {
            var s = a[e], h = s.startTime;
            if (h > c) break;
            var b = s.transferSize, A = s.initiatorType;
            b && j0(A) && (s = s.responseEnd, i += b * (s < c ? 1 : (c - h) / (s - h)));
          }
          if (--e, l += 8 * (n + i) / (u.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return l / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Vc = null, Kc = null;
  function Dn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function q0(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function B0(t, l) {
    if (t === 0) switch (l) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function wc(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var Jc = null;
  function e1() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Jc ? !1 : (Jc = t, !0) : (Jc = null, !1);
  }
  var Y0 = typeof setTimeout == "function" ? setTimeout : void 0, u1 = typeof clearTimeout == "function" ? clearTimeout : void 0, G0 = typeof Promise == "function" ? Promise : void 0, n1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof G0 < "u" ? function(t) {
    return G0.resolve(null).then(t).catch(i1);
  } : Y0;
  function i1(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function va(t) {
    return t === "head";
  }
  function Q0(t, l) {
    var a = l, e = 0;
    do {
      var u = a.nextSibling;
      if (t.removeChild(a), u && u.nodeType === 8) if (a = u.data, a === "/$" || a === "/&") {
        if (e === 0) {
          t.removeChild(u), _e(l);
          return;
        }
        e--;
      } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") e++;
      else if (a === "html") mu(t.ownerDocument.documentElement);
      else if (a === "head") {
        a = t.ownerDocument.head, mu(a);
        for (var n = a.firstChild; n; ) {
          var i = n.nextSibling, c = n.nodeName;
          n[Ce] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = i;
        }
      } else a === "body" && mu(t.ownerDocument.body);
      a = u;
    } while (a);
    _e(l);
  }
  function X0(t, l) {
    var a = t;
    t = 0;
    do {
      var e = a.nextSibling;
      if (a.nodeType === 1 ? l ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (l ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), e && e.nodeType === 8) if (a = e.data, a === "/$") {
        if (t === 0) break;
        t--;
      } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || t++;
      a = e;
    } while (a);
  }
  function Wc(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var a = l;
      switch (l = l.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Wc(a), ti(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function c1(t, l, a, e) {
    for (; t.nodeType === 1; ) {
      var u = a;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!e && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (e) {
        if (!t[Ce]) switch (l) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (n = t.getAttribute("rel"), n === "stylesheet" && t.hasAttribute("data-precedence")) break;
            if (n !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title)) break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (n = t.getAttribute("src"), (n !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
            return t;
          default:
            return t;
        }
      } else if (l === "input" && t.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === n) return t;
      } else return t;
      if (t = pl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function f1(t, l, a) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = pl(t.nextSibling), t === null)) return null;
    return t;
  }
  function x0(t, l) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = pl(t.nextSibling), t === null)) return null;
    return t;
  }
  function $c(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Fc(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function s1(t, l) {
    var a = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = l;
    else if (t.data !== "$?" || a.readyState !== "loading") l();
    else {
      var e = function() {
        l(), a.removeEventListener("DOMContentLoaded", e);
      };
      a.addEventListener("DOMContentLoaded", e), t._reactRetry = e;
    }
  }
  function pl(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&" || l === "F!" || l === "F") break;
        if (l === "/$" || l === "/&") return null;
      }
    }
    return t;
  }
  var kc = null;
  function L0(t) {
    t = t.nextSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "/$" || a === "/&") {
          if (l === 0) return pl(t.nextSibling);
          l--;
        } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || l++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Z0(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (l === 0) return t;
          l--;
        } else a !== "/$" && a !== "/&" || l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function V0(t, l, a) {
    switch (l = Dn(a), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(y(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(y(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(y(454));
        return t;
      default:
        throw Error(y(451));
    }
  }
  function mu(t) {
    for (var l = t.attributes; l.length; ) t.removeAttributeNode(l[0]);
    ti(t);
  }
  var Al = /* @__PURE__ */ new Map(), K0 = /* @__PURE__ */ new Set();
  function Un(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Fl = D.d;
  D.d = {
    f: o1,
    r: d1,
    D: m1,
    C: y1,
    L: v1,
    m: h1,
    X: g1,
    S: r1,
    M: S1
  };
  function o1() {
    var t = Fl.f(), l = pn();
    return t || l;
  }
  function d1(t) {
    var l = Va(t);
    l !== null && l.tag === 5 && l.type === "form" ? so(l) : Fl.r(t);
  }
  var Te = typeof document > "u" ? null : document;
  function w0(t, l, a) {
    var e = Te;
    if (e && typeof l == "string" && l) {
      var u = ml(l);
      u = 'link[rel="' + t + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), K0.has(u) || (K0.add(u), t = {
        rel: t,
        crossOrigin: a,
        href: l
      }, e.querySelector(u) === null && (l = e.createElement("link"), Yt(l, "link", t), Ct(l), e.head.appendChild(l)));
    }
  }
  function m1(t) {
    Fl.D(t), w0("dns-prefetch", t, null);
  }
  function y1(t, l) {
    Fl.C(t, l), w0("preconnect", t, l);
  }
  function v1(t, l, a) {
    Fl.L(t, l, a);
    var e = Te;
    if (e && t && l) {
      var u = 'link[rel="preload"][as="' + ml(l) + '"]';
      l === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + ml(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (u += '[imagesizes="' + ml(a.imageSizes) + '"]')) : u += '[href="' + ml(t) + '"]';
      var n = u;
      switch (l) {
        case "style":
          n = Ee(t);
          break;
        case "script":
          n = ze(t);
      }
      Al.has(n) || (t = N({
        rel: "preload",
        href: l === "image" && a && a.imageSrcSet ? void 0 : t,
        as: l
      }, a), Al.set(n, t), e.querySelector(u) !== null || l === "style" && e.querySelector(yu(n)) || l === "script" && e.querySelector(vu(n)) || (l = e.createElement("link"), Yt(l, "link", t), Ct(l), e.head.appendChild(l)));
    }
  }
  function h1(t, l) {
    Fl.m(t, l);
    var a = Te;
    if (a && t) {
      var e = l && typeof l.as == "string" ? l.as : "script", u = 'link[rel="modulepreload"][as="' + ml(e) + '"][href="' + ml(t) + '"]', n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = ze(t);
      }
      if (!Al.has(n) && (t = N({
        rel: "modulepreload",
        href: t
      }, l), Al.set(n, t), a.querySelector(u) === null)) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(vu(n))) return;
        }
        e = a.createElement("link"), Yt(e, "link", t), Ct(e), a.head.appendChild(e);
      }
    }
  }
  function r1(t, l, a) {
    Fl.S(t, l, a);
    var e = Te;
    if (e && t) {
      var u = Ka(e).hoistableStyles, n = Ee(t);
      l = l || "default";
      var i = u.get(n);
      if (!i) {
        var c = {
          loading: 0,
          preload: null
        };
        if (i = e.querySelector(yu(n))) c.loading = 5;
        else {
          t = N({
            rel: "stylesheet",
            href: t,
            "data-precedence": l
          }, a), (a = Al.get(n)) && Ic(t, a);
          var s = i = e.createElement("link");
          Ct(s), Yt(s, "link", t), s._p = new Promise(function(h, b) {
            s.onload = h, s.onerror = b;
          }), s.addEventListener("load", function() {
            c.loading |= 1;
          }), s.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Cn(i, l, e);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, u.set(n, i);
      }
    }
  }
  function g1(t, l) {
    Fl.X(t, l);
    var a = Te;
    if (a && t) {
      var e = Ka(a).hoistableScripts, u = ze(t), n = e.get(u);
      n || (n = a.querySelector(vu(u)), n || (t = N({
        src: t,
        async: !0
      }, l), (l = Al.get(u)) && Pc(t, l), n = a.createElement("script"), Ct(n), Yt(n, "link", t), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(u, n));
    }
  }
  function S1(t, l) {
    Fl.M(t, l);
    var a = Te;
    if (a && t) {
      var e = Ka(a).hoistableScripts, u = ze(t), n = e.get(u);
      n || (n = a.querySelector(vu(u)), n || (t = N({
        src: t,
        async: !0,
        type: "module"
      }, l), (l = Al.get(u)) && Pc(t, l), n = a.createElement("script"), Ct(n), Yt(n, "link", t), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(u, n));
    }
  }
  function J0(t, l, a, e) {
    var u = (u = $.current) ? Un(u) : null;
    if (!u) throw Error(y(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (l = Ee(a.href), a = Ka(u).hoistableStyles, e = a.get(l), e || (e = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(l, e)), e) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          t = Ee(a.href);
          var n = Ka(u).hoistableStyles, i = n.get(t);
          if (i || (u = u.ownerDocument || u, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, n.set(t, i), (n = u.querySelector(yu(t))) && !n._p && (i.instance = n, i.state.loading = 5), Al.has(t) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Al.set(t, a), n || b1(u, t, a, i.state))), l && e === null) throw Error(y(528, ""));
          return i;
        }
        if (l && e !== null) throw Error(y(529, ""));
        return null;
      case "script":
        return l = a.async, a = a.src, typeof a == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = ze(a), a = Ka(u).hoistableScripts, e = a.get(l), e || (e = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(l, e)), e) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(y(444, t));
    }
  }
  function Ee(t) {
    return 'href="' + ml(t) + '"';
  }
  function yu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function W0(t) {
    return N({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function b1(t, l, a, e) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? e.loading = 1 : (l = t.createElement("link"), e.preload = l, l.addEventListener("load", function() {
      return e.loading |= 1;
    }), l.addEventListener("error", function() {
      return e.loading |= 2;
    }), Yt(l, "link", a), Ct(l), t.head.appendChild(l));
  }
  function ze(t) {
    return '[src="' + ml(t) + '"]';
  }
  function vu(t) {
    return "script[async]" + t;
  }
  function $0(t, l, a) {
    if (l.count++, l.instance === null) switch (l.type) {
      case "style":
        var e = t.querySelector('style[data-href~="' + ml(a.href) + '"]');
        if (e) return l.instance = e, Ct(e), e;
        var u = N({}, a, {
          "data-href": a.href,
          "data-precedence": a.precedence,
          href: null,
          precedence: null
        });
        return e = (t.ownerDocument || t).createElement("style"), Ct(e), Yt(e, "style", u), Cn(e, a.precedence, t), l.instance = e;
      case "stylesheet":
        u = Ee(a.href);
        var n = t.querySelector(yu(u));
        if (n) return l.state.loading |= 4, l.instance = n, Ct(n), n;
        e = W0(a), (u = Al.get(u)) && Ic(e, u), n = (t.ownerDocument || t).createElement("link"), Ct(n);
        var i = n;
        return i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), Yt(n, "link", e), l.state.loading |= 4, Cn(n, a.precedence, t), l.instance = n;
      case "script":
        return n = ze(a.src), (u = t.querySelector(vu(n))) ? (l.instance = u, Ct(u), u) : (e = a, (u = Al.get(n)) && (e = N({}, a), Pc(e, u)), t = t.ownerDocument || t, u = t.createElement("script"), Ct(u), Yt(u, "link", e), t.head.appendChild(u), l.instance = u);
      case "void":
        return null;
      default:
        throw Error(y(443, l.type));
    }
    else l.type === "stylesheet" && (l.state.loading & 4) === 0 && (e = l.instance, l.state.loading |= 4, Cn(e, a.precedence, t));
    return l.instance;
  }
  function Cn(t, l, a) {
    for (var e = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = e.length ? e[e.length - 1] : null, n = u, i = 0; i < e.length; i++) {
      var c = e[i];
      if (c.dataset.precedence === l) n = c;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(t, n.nextSibling) : (l = a.nodeType === 9 ? a.head : a, l.insertBefore(t, l.firstChild));
  }
  function Ic(t, l) {
    t.crossOrigin ??= l.crossOrigin, t.referrerPolicy ??= l.referrerPolicy, t.title ??= l.title;
  }
  function Pc(t, l) {
    t.crossOrigin ??= l.crossOrigin, t.referrerPolicy ??= l.referrerPolicy, t.integrity ??= l.integrity;
  }
  var Hn = null;
  function F0(t, l, a) {
    if (Hn === null) {
      var e = /* @__PURE__ */ new Map(), u = Hn = /* @__PURE__ */ new Map();
      u.set(a, e);
    } else u = Hn, e = u.get(a), e || (e = /* @__PURE__ */ new Map(), u.set(a, e));
    if (e.has(t)) return e;
    for (e.set(t, null), a = a.getElementsByTagName(t), u = 0; u < a.length; u++) {
      var n = a[u];
      if (!(n[Ce] || n[Rt] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(l) || "";
        i = t + i;
        var c = e.get(i);
        c ? c.push(n) : e.set(i, [n]);
      }
    }
    return e;
  }
  function k0(t, l, a) {
    t = t.ownerDocument || t, t.head.insertBefore(a, l === "title" ? t.querySelector("head > title") : null);
  }
  function p1(t, l, a) {
    if (a === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "") break;
        return !0;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError) break;
        return l.rel === "stylesheet" ? (t = l.disabled, typeof l.precedence == "string" && t == null) : !0;
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string") return !0;
    }
    return !1;
  }
  function I0(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function A1(t, l, a, e) {
    if (a.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var u = Ee(e.href), n = l.querySelector(yu(u));
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = Nn.bind(t), l.then(t, t)), a.state.loading |= 4, a.instance = n, Ct(n);
          return;
        }
        n = l.ownerDocument || l, e = W0(e), (u = Al.get(u)) && Ic(e, u), n = n.createElement("link"), Ct(n);
        var i = n;
        i._p = new Promise(function(c, s) {
          i.onload = c, i.onerror = s;
        }), Yt(n, "link", e), a.instance = n;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, l), (l = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++, a = Nn.bind(t), l.addEventListener("load", a), l.addEventListener("error", a));
    }
  }
  var tf = 0;
  function T1(t, l) {
    return t.stylesheets && t.count === 0 && jn(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
      var e = setTimeout(function() {
        if (t.stylesheets && jn(t, t.stylesheets), t.unsuspend) {
          var n = t.unsuspend;
          t.unsuspend = null, n();
        }
      }, 6e4 + l);
      0 < t.imgBytes && tf === 0 && (tf = 62500 * a1());
      var u = setTimeout(function() {
        if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && jn(t, t.stylesheets), t.unsuspend)) {
          var n = t.unsuspend;
          t.unsuspend = null, n();
        }
      }, (t.imgBytes > tf ? 50 : 800) + l);
      return t.unsuspend = a, function() {
        t.unsuspend = null, clearTimeout(e), clearTimeout(u);
      };
    } : null;
  }
  function Nn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) jn(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Rn = null;
  function jn(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Rn = /* @__PURE__ */ new Map(), l.forEach(E1, t), Rn = null, Nn.call(t));
  }
  function E1(t, l) {
    if (!(l.state.loading & 4)) {
      var a = Rn.get(t);
      if (a) var e = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Rn.set(t, a);
        for (var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), e = i);
        }
        e && a.set(null, e);
      }
      u = l.instance, i = u.getAttribute("data-precedence"), n = a.get(i) || e, n === e && a.set(null, u), a.set(i, u), this.count++, e = Nn.bind(this), u.addEventListener("load", e), u.addEventListener("error", e), n ? n.parentNode.insertBefore(u, n.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(u, t.firstChild)), l.state.loading |= 4;
    }
  }
  var hu = {
    $$typeof: St,
    Provider: null,
    Consumer: null,
    _currentValue: et,
    _currentValue2: et,
    _threadCount: 0
  };
  function z1(t, l, a, e, u, n, i, c, s) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = kn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kn(0), this.hiddenUpdates = kn(null), this.identifierPrefix = e, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = s, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function _1(t, l, a, e, u, n, i, c, s, h, b, A) {
    return t = new z1(t, l, a, i, s, h, b, A, c), l = 1, n === !0 && (l |= 24), n = ul(3, null, null, l), t.current = n, n.stateNode = t, l = ji(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
      element: e,
      isDehydrated: a,
      cache: l
    }, Gi(n), t;
  }
  function M1(t) {
    return t ? (t = le, t) : le;
  }
  function P0(t, l, a, e, u, n) {
    u = M1(u), e.context === null ? e.context = u : e.pendingContext = u, e = qa(l), e.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (e.callback = n), a = Ba(t, e, l), a !== null && (kt(a, t, l), Je(a, t, l));
  }
  function td(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < l ? a : l;
    }
  }
  function lf(t, l) {
    td(t, l), (t = t.alternate) && td(t, l);
  }
  function ld(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = Ma(t, 67108864);
      l !== null && kt(l, t, 67108864), lf(t, 67108864);
    }
  }
  function ad(t) {
    if (t.tag === 13 || t.tag === 31) {
      var l = bl();
      l = pf(l);
      var a = Ma(t, l);
      a !== null && kt(a, t, l), lf(t, l);
    }
  }
  var qn = !0;
  function O1(t, l, a, e) {
    var u = M.T;
    M.T = null;
    var n = D.p;
    try {
      D.p = 2, af(t, l, a, e);
    } finally {
      D.p = n, M.T = u;
    }
  }
  function D1(t, l, a, e) {
    var u = M.T;
    M.T = null;
    var n = D.p;
    try {
      D.p = 8, af(t, l, a, e);
    } finally {
      D.p = n, M.T = u;
    }
  }
  function af(t, l, a, e) {
    if (qn) {
      var u = ef(e);
      if (u === null) Lc(t, l, e, Bn, a), ud(t, e);
      else if (C1(u, t, l, a, e)) e.stopPropagation();
      else if (ud(t, e), l & 4 && -1 < U1.indexOf(t)) {
        for (; u !== null; ) {
          var n = Va(u);
          if (n !== null) switch (n.tag) {
            case 3:
              if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                var i = Aa(n.pendingLanes);
                if (i !== 0) {
                  var c = n;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                    var s = 1 << 31 - al(i);
                    c.entanglements[1] |= s, i &= ~s;
                  }
                  $l(n), (ut & 6) === 0 && (Sn = tl() + 500, su(0, !1));
                }
              }
              break;
            case 31:
            case 13:
              c = Ma(n, 2), c !== null && kt(c, n, 2), pn(), lf(n, 2);
          }
          if (n = ef(e), n === null && Lc(t, l, e, Bn, a), n === u) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else Lc(t, l, e, null, a);
    }
  }
  function ef(t) {
    return t = ii(t), uf(t);
  }
  var Bn = null;
  function uf(t) {
    if (Bn = null, t = Za(t), t !== null) {
      var l = Z(t);
      if (l === null) t = null;
      else {
        var a = l.tag;
        if (a === 13) {
          if (t = Q(l), t !== null) return t;
          t = null;
        } else if (a === 31) {
          if (t = B(l), t !== null) return t;
          t = null;
        } else if (a === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated) return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return Bn = t, null;
  }
  function ed(t) {
    switch (t) {
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
        switch (Td()) {
          case yf:
            return 2;
          case vf:
            return 8;
          case Eu:
          case Ed:
            return 32;
          case hf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var nf = !1, ha = null, ra = null, ga = null, ru = /* @__PURE__ */ new Map(), gu = /* @__PURE__ */ new Map(), Sa = [], U1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function ud(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        ha = null;
        break;
      case "dragenter":
      case "dragleave":
        ra = null;
        break;
      case "mouseover":
      case "mouseout":
        ga = null;
        break;
      case "pointerover":
      case "pointerout":
        ru.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gu.delete(l.pointerId);
    }
  }
  function Su(t, l, a, e, u, n) {
    return t === null || t.nativeEvent !== n ? (t = {
      blockedOn: l,
      domEventName: a,
      eventSystemFlags: e,
      nativeEvent: n,
      targetContainers: [u]
    }, l !== null && (l = Va(l), l !== null && ld(l)), t) : (t.eventSystemFlags |= e, l = t.targetContainers, u !== null && l.indexOf(u) === -1 && l.push(u), t);
  }
  function C1(t, l, a, e, u) {
    switch (l) {
      case "focusin":
        return ha = Su(ha, t, l, a, e, u), !0;
      case "dragenter":
        return ra = Su(ra, t, l, a, e, u), !0;
      case "mouseover":
        return ga = Su(ga, t, l, a, e, u), !0;
      case "pointerover":
        var n = u.pointerId;
        return ru.set(n, Su(ru.get(n) || null, t, l, a, e, u)), !0;
      case "gotpointercapture":
        return n = u.pointerId, gu.set(n, Su(gu.get(n) || null, t, l, a, e, u)), !0;
    }
    return !1;
  }
  function nd(t) {
    var l = Za(t.target);
    if (l !== null) {
      var a = Z(l);
      if (a !== null) {
        if (l = a.tag, l === 13) {
          if (l = Q(a), l !== null) {
            t.blockedOn = l, Tf(t.priority, function() {
              ad(a);
            });
            return;
          }
        } else if (l === 31) {
          if (l = B(a), l !== null) {
            t.blockedOn = l, Tf(t.priority, function() {
              ad(a);
            });
            return;
          }
        } else if (l === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Yn(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var a = ef(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var e = new a.constructor(a.type, a);
        ni = e, a.target.dispatchEvent(e), ni = null;
      } else return l = Va(a), l !== null && ld(l), t.blockedOn = a, !1;
      l.shift();
    }
    return !0;
  }
  function id(t, l, a) {
    Yn(t) && a.delete(l);
  }
  function H1() {
    nf = !1, ha !== null && Yn(ha) && (ha = null), ra !== null && Yn(ra) && (ra = null), ga !== null && Yn(ga) && (ga = null), ru.forEach(id), gu.forEach(id);
  }
  function Gn(t, l) {
    t.blockedOn === l && (t.blockedOn = null, nf || (nf = !0, g.unstable_scheduleCallback(g.unstable_NormalPriority, H1)));
  }
  var Qn = null;
  function cd(t) {
    Qn !== t && (Qn = t, g.unstable_scheduleCallback(g.unstable_NormalPriority, function() {
      Qn === t && (Qn = null);
      for (var l = 0; l < t.length; l += 3) {
        var a = t[l], e = t[l + 1], u = t[l + 2];
        if (typeof e != "function") {
          if (uf(e || a) === null) continue;
          break;
        }
        var n = Va(a);
        n !== null && (t.splice(l, 3), l -= 3, uc(n, {
          pending: !0,
          data: u,
          method: a.method,
          action: e
        }, e, u));
      }
    }));
  }
  function _e(t) {
    function l(s) {
      return Gn(s, t);
    }
    ha !== null && Gn(ha, t), ra !== null && Gn(ra, t), ga !== null && Gn(ga, t), ru.forEach(l), gu.forEach(l);
    for (var a = 0; a < Sa.length; a++) {
      var e = Sa[a];
      e.blockedOn === t && (e.blockedOn = null);
    }
    for (; 0 < Sa.length && (a = Sa[0], a.blockedOn === null); ) nd(a), a.blockedOn === null && Sa.shift();
    if (a = (t.ownerDocument || t).$$reactFormReplay, a != null) for (e = 0; e < a.length; e += 3) {
      var u = a[e], n = a[e + 1], i = u[Kt] || null;
      if (typeof n == "function") i || cd(a);
      else if (i) {
        var c = null;
        if (n && n.hasAttribute("formAction")) {
          if (u = n, i = n[Kt] || null) c = i.formAction;
          else if (uf(u) !== null) continue;
        } else c = i.action;
        typeof c == "function" ? a[e + 1] = c : (a.splice(e, 3), e -= 3), cd(a);
      }
    }
  }
  function N1() {
    function t(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(i) {
            return u = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function l() {
      u !== null && (u(), u = null), e || setTimeout(a, 20);
    }
    function a() {
      if (!e && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var e = !1, u = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(a, 100), function() {
        e = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), u !== null && (u(), u = null);
      };
    }
  }
  function cf(t) {
    this._internalRoot = t;
  }
  ff.prototype.render = cf.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(y(409));
    var a = l.current;
    P0(a, bl(), t, l, null, null);
  }, ff.prototype.unmount = cf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      P0(t.current, 2, null, t, null, null), pn(), l[Ue] = null;
    }
  };
  function ff(t) {
    this._internalRoot = t;
  }
  ff.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = Af();
      t = {
        blockedOn: null,
        target: t,
        priority: l
      };
      for (var a = 0; a < Sa.length && l !== 0 && l < Sa[a].priority; a++) ;
      Sa.splice(a, 0, t), a === 0 && nd(t);
    }
  };
  var fd = _.version;
  if (fd !== "19.2.7") throw Error(y(527, fd, "19.2.7"));
  D.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(y(188)) : (t = Object.keys(t).join(","), Error(y(268, t)));
    return t = z(l), t = t !== null ? L(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var R1 = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xn.isDisabled && Xn.supportsFiber) try {
      Oe = Xn.inject(R1), ll = Xn;
    } catch {
    }
  }
  f.createRoot = function(t, l) {
    if (!J(t)) throw Error(y(299));
    var a = !1, e = "", u = Dm, n = Um, i = Cm;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (e = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError)), l = _1(t, 1, !1, null, null, a, e, null, u, n, i, N1), t[Ue] = l.current, U0(t), new cf(l);
  };
})), J1 = /* @__PURE__ */ Hl(((f, g) => {
  function _() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch (E) {
        console.error(E);
      }
  }
  _(), g.exports = w1();
})), Gt = /* @__PURE__ */ yd(of(), 1), W1 = /* @__PURE__ */ yd(J1(), 1), $1 = class {
  listeners = /* @__PURE__ */ new Map();
  eventHistory = [];
  maxHistorySize;
  eventTarget;
  constructor(f = {}) {
    this.maxHistorySize = f.maxHistorySize ?? 100, this.eventTarget = f.eventTarget;
  }
  configure(f) {
    this.maxHistorySize = f.maxHistorySize ?? this.maxHistorySize, this.eventTarget = f.eventTarget ?? this.eventTarget;
  }
  on(f, g) {
    return this.listeners.has(f) || this.listeners.set(f, /* @__PURE__ */ new Set()), this.listeners.get(f).add(g), () => {
      this.listeners.get(f)?.delete(g);
    };
  }
  once(f, g) {
    const _ = this.on(f, (E) => {
      g(E), _();
    });
    return _;
  }
  emit(f, g, _) {
    const E = {
      type: f,
      source: g,
      payload: _,
      timestamp: Date.now()
    };
    this.eventHistory.push(E), this.eventHistory.length > this.maxHistorySize && this.eventHistory.shift();
    const y = this.listeners.get(f);
    y && y.forEach((Z) => {
      try {
        Z(E);
      } catch (Q) {
        console.error(`[EventBus] Error in listener for ${f}:`, Q);
      }
    });
    const J = this.eventTarget ?? (typeof window < "u" ? window : void 0);
    if (J && typeof CustomEvent < "u") {
      const Z = new CustomEvent("platform-event", {
        detail: E,
        bubbles: !0
      });
      J.dispatchEvent(Z);
    }
  }
  getHistory(f) {
    return f ? this.eventHistory.filter((g) => g.type === f) : [...this.eventHistory];
  }
  clearHistory() {
    this.eventHistory = [];
  }
  off(f) {
    this.listeners.delete(f);
  }
  clear() {
    this.listeners.clear();
  }
}, Zn = new $1(), Vn = {
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
}, F1 = 15e3, Au;
function vd(f = {}) {
  const g = f.targetWindow ?? (typeof window < "u" && window.parent !== window ? window.parent : void 0), _ = f.targetOrigin ?? "*", E = /* @__PURE__ */ new Map();
  let y = 1;
  function J(Q) {
    if (!ny(Q.data)) return;
    const B = Q.data;
    if ("id" in B && B.id !== void 0 && ("result" in B || "error" in B)) {
      const C = E.get(B.id);
      if (!C) return;
      if (E.delete(B.id), clearTimeout(C.timeout), B.error) {
        C.reject(new Error(B.error.message));
        return;
      }
      C.resolve(B.result ?? null);
      return;
    }
    "method" in B && typeof B.method == "string" && f.onNotification?.(B);
  }
  typeof window < "u" && window.addEventListener("message", J);
  function Z(Q) {
    g?.postMessage(Q, _);
  }
  return {
    initialize(Q = null) {
      return this.request("ui/initialize", Q);
    },
    callTool(Q, B = null) {
      return this.request("tools/call", {
        name: Q,
        arguments: B
      });
    },
    request(Q, B = null) {
      if (!g) return Promise.reject(/* @__PURE__ */ new Error("No MCP Apps host window is available"));
      const C = `${f.source ?? "micro-app"}-${y++}`, z = setTimeout(() => {
        const N = E.get(C);
        N && (E.delete(C), N.reject(/* @__PURE__ */ new Error(`MCP request timed out: ${Q}`)));
      }, f.timeoutMs ?? F1), L = new Promise((N, Ut) => {
        E.set(C, {
          resolve: N,
          reject: Ut,
          timeout: z
        });
      });
      return Z({
        jsonrpc: "2.0",
        id: C,
        method: Q,
        params: B
      }), L;
    },
    notify(Q, B = null) {
      g && Z({
        jsonrpc: "2.0",
        method: Q,
        params: B
      });
    },
    dispose() {
      typeof window < "u" && window.removeEventListener("message", J);
      for (const Q of E.values())
        clearTimeout(Q.timeout), Q.reject(/* @__PURE__ */ new Error("MCP bridge disposed"));
      E.clear();
    }
  };
}
function k1(f) {
  return Au?.dispose(), Au = vd(f), Au;
}
function hd() {
  return Au ??= vd(), Au;
}
function I1(f, g) {
  hd().notify(f, g);
}
function P1(f, g) {
  return hd().callTool(f, g);
}
async function ty(f) {
  if (typeof window > "u" || window.parent === window) return sd("standalone");
  try {
    const { App: g } = await import("./app-B92woykI.js"), _ = new g({
      name: f.name,
      version: f.version
    }, f.capabilities ?? {}, {
      autoResize: !0,
      strict: !1,
      ...f.appOptions
    });
    return ey(_, f.handlers), await uy(_.connect(), f.timeoutMs ?? 2500, "MCP Apps host connection timed out"), {
      status: "connected",
      app: _,
      getHostContext() {
        return _.getHostContext();
      },
      getHostCapabilities() {
        return _.getHostCapabilities();
      },
      getHostInfo() {
        return _.getHostVersion();
      },
      async requestHostCompletion(E, y) {
        return rd((await _.createSamplingMessage({
          messages: [{
            role: "user",
            content: {
              type: "text",
              text: E
            }
          }],
          maxTokens: 320,
          systemPrompt: y
        })).content);
      },
      createSamplingMessage(E) {
        return _.createSamplingMessage(E);
      },
      sendHostMessage(E, y) {
        return _.sendMessage(ly(E, y));
      },
      sendMessage(E) {
        return _.sendMessage(E);
      },
      async sendLog(E, y) {
        await _.sendLog({
          level: E,
          data: y
        });
      },
      updateModelContext(E) {
        return _.updateModelContext(ay(E));
      },
      callServerTool(E, y = {}) {
        return _.callServerTool({
          name: E,
          arguments: y
        });
      },
      callServerToolWithParams(E) {
        return _.callServerTool(E);
      },
      readServerResource(E) {
        return _.readServerResource(typeof E == "string" ? { uri: E } : E);
      },
      listServerResources(E) {
        return _.listServerResources(E);
      },
      openLink(E) {
        return _.openLink(typeof E == "string" ? { url: E } : E);
      },
      downloadFile(E) {
        return _.downloadFile(E);
      },
      requestDisplayMode(E) {
        return _.requestDisplayMode(typeof E == "string" ? { mode: E } : E);
      },
      requestTeardown() {
        return _.requestTeardown();
      },
      sendSizeChanged(E) {
        return _.sendSizeChanged(E);
      },
      async dispose() {
        await _.close?.();
      }
    };
  } catch (g) {
    return sd("error", g);
  }
}
function sd(f, g) {
  return {
    status: f,
    error: g instanceof Error ? g : g ? new Error(String(g)) : void 0,
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
function ly(f, g) {
  return {
    role: "user",
    content: [{
      type: "text",
      text: g ? `${g}

${f}` : f
    }]
  };
}
function ay(f) {
  return typeof f != "string" ? f : { content: [{
    type: "text",
    text: f
  }] };
}
function ey(f, g = {}) {
  f.ontoolinput = g.onToolInput, f.ontoolinputpartial = g.onToolInputPartial, f.ontoolresult = g.onToolResult, f.ontoolcancelled = g.onToolCancelled, f.onhostcontextchanged = g.onHostContextChanged, g.onTeardown && (f.onteardown = async () => g.onTeardown?.() ?? {});
}
async function uy(f, g, _) {
  let E;
  try {
    return await Promise.race([f, new Promise((y, J) => {
      E = setTimeout(() => J(new Error(_)), g);
    })]);
  } finally {
    E && clearTimeout(E);
  }
}
function rd(f) {
  return typeof f == "string" ? f : f ? Array.isArray(f) ? f.map((g) => rd(g)).filter(Boolean).join(`
`) : typeof f == "object" && "text" in f && typeof f.text == "string" ? f.text : "" : "";
}
function ny(f) {
  return !!(f && typeof f == "object" && "jsonrpc" in f && f.jsonrpc === "2.0");
}
function iy(f) {
  return f instanceof Error ? {
    name: f.name,
    message: f.message,
    stack: f.stack
  } : { message: typeof f == "string" ? f : "Unknown runtime error" };
}
function od({ app: f, error: g, logger: _, source: E = "runtime", metadata: y }) {
  const J = {
    level: "error",
    message: `${f.name} failed in ${E}`,
    appId: f.id,
    source: E,
    error: iy(g),
    metadata: y,
    timestamp: Date.now()
  };
  return Zn.emit(Vn.APP_ERROR, f.id, J), _?.log(J), J;
}
function gd(f = Sd()) {
  return typeof f?.modelContext?.registerTool == "function";
}
function dd(f, g = {}, _ = Sd()) {
  if (!gd(_)) return {
    supported: !1,
    unregister: () => {
    }
  };
  const E = g.signal ? void 0 : new AbortController(), y = g.signal ?? E?.signal;
  return _.modelContext.registerTool(f, {
    ...g,
    signal: y
  }), {
    supported: !0,
    unregister: () => E?.abort()
  };
}
function Sd() {
  return typeof document > "u" ? void 0 : document;
}
function cy(f, g, _ = {}) {
  const E = customElements.get(f);
  if (E) return E;
  class y extends HTMLElement {
    static observedAttributes = _.observedAttributes ?? [];
    cleanup;
    async connectedCallback() {
      const Z = this.createContext();
      try {
        const Q = await g.mount(this, Z);
        this.cleanup = typeof Q == "function" ? Q : void 0, await fy(), this.dispatchEvent(new CustomEvent("micro-app:ready", {
          bubbles: !0,
          composed: !0,
          detail: {
            appId: Z.app.id,
            tagName: f,
            timestamp: Date.now()
          }
        })), Zn.emit(Vn.APP_LOADED, Z.app.id, { tagName: f });
      } catch (Q) {
        throw od({
          app: Z.app,
          error: Q,
          logger: _.logger,
          source: "micro-app-connected-callback",
          metadata: { tagName: f }
        }), Q;
      }
    }
    disconnectedCallback() {
      window.setTimeout(() => {
        try {
          this.cleanup?.(), g.unmount?.(this), Zn.emit(Vn.APP_UNLOADED, this.getAttribute("data-app-name") ?? f, { tagName: f });
        } catch (Z) {
          od({
            app: {
              id: this.getAttribute("data-app-name") ?? f,
              name: this.getAttribute("data-app-name") ?? f
            },
            error: Z,
            logger: _.logger,
            source: "micro-app-disconnected-callback",
            metadata: { tagName: f }
          });
        }
      }, 0);
    }
    createContext() {
      return {
        app: {
          id: this.getAttribute("data-app-name") ?? f,
          name: this.getAttribute("data-app-name") ?? f,
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
            tagName: f
          },
          version: this.getAttribute("data-version") ?? "0.0.0",
          owner: "",
          permissions: []
        },
        shellOrigin: this.getAttribute("data-shell-origin") ?? window.location.origin
      };
    }
  }
  return customElements.define(f, y), y;
}
function fy() {
  return new Promise((f) => {
    requestAnimationFrame(() => requestAnimationFrame(() => f()));
  });
}
function xn(f, g, _) {
  const E = Vn[f];
  Zn.emit(E, g, _), I1("ui/notification", {
    type: E,
    source: g,
    payload: sy(_),
    timestamp: Date.now()
  });
}
function sy(f) {
  return f === void 0 ? null : JSON.parse(JSON.stringify(f));
}
var oy = /* @__PURE__ */ Hl(((f) => {
  var g = /* @__PURE__ */ Symbol.for("react.transitional.element"), _ = /* @__PURE__ */ Symbol.for("react.fragment");
  function E(y, J, Z) {
    var Q = null;
    if (Z !== void 0 && (Q = "" + Z), J.key !== void 0 && (Q = "" + J.key), "key" in J) {
      Z = {};
      for (var B in J) B !== "key" && (Z[B] = J[B]);
    } else Z = J;
    return J = Z.ref, {
      $$typeof: g,
      type: y,
      key: Q,
      ref: J !== void 0 ? J : null,
      props: Z
    };
  }
  f.jsx = E, f.jsxs = E;
})), dy = /* @__PURE__ */ Hl(((f, g) => {
  g.exports = oy();
})), G = dy(), bu = "Billing has 1 overdue enterprise invoice, analytics reports a 2% conversion dip, admin has billing-autopay disabled, and customer health shows two enterprise accounts at renewal risk.", sf = ["Cross-app analysis: billing has 1 overdue enterprise invoice, analytics reports a 2% conversion dip, and the admin flag billing-autopay is disabled.", "Recommended action: enable a guarded 25% rollout for billing-autopay, notify account owners, and ask analytics to watch checkout recovery for 24 hours."].join(" ");
function my({ apiBaseUrl: f } = {}) {
  const [g, _] = (0, Gt.useState)([{
    role: "assistant",
    text: "I can summarize app health, explain events, and suggest next actions across the platform."
  }]), [E, y] = (0, Gt.useState)("Why did billing conversion dip?"), [J, Z] = (0, Gt.useState)("checking"), [Q, B] = (0, Gt.useState)("checking"), [C, z] = (0, Gt.useState)("checking"), [L, N] = (0, Gt.useState)("idle"), [Ut, Ot] = (0, Gt.useState)("deterministic-fallback"), [Qt, xt] = (0, Gt.useState)(!1), [Tl, Xt] = (0, Gt.useState)(!1), sl = (0, Gt.useRef)(), St = (0, Gt.useRef)(Ut);
  (0, Gt.useEffect)(() => {
    St.current = Ut;
  }, [Ut]), (0, Gt.useEffect)(() => {
    const x = k1({ source: "ai-assistant" });
    return x.notify("ui/ready", {
      appId: "ai-assistant",
      tools: [
        "assistant.summarizeCase",
        "assistant.planWorkflow",
        "assistant.invokeTool"
      ]
    }), () => x.dispose();
  }, []), (0, Gt.useEffect)(() => {
    let x = !1;
    const j = () => {
      x || z(window.openai?.sendFollowUpMessage ? "connected" : "unavailable");
    }, w = window.setInterval(j, 250);
    return window.addEventListener("openai:set_globals", j), j(), () => {
      x = !0, window.clearInterval(w), window.removeEventListener("openai:set_globals", j);
    };
  }, []), (0, Gt.useEffect)(() => {
    let x = !1;
    return ty({
      name: "AI Assistant App",
      version: "0.8.0",
      capabilities: {
        sampling: {},
        serverTools: {},
        modelContext: {}
      },
      handlers: {
        onToolInput() {
          x || B("connected");
        },
        onToolInputPartial() {
          x || B("connected");
        },
        onToolResult(j) {
          if (x) return;
          B("connected");
          const w = pu(j);
          !w || w.includes("ready as an MCP App") || Ot("ai-native-mcp-tool");
        },
        onToolCancelled() {
          x || B("unavailable");
        },
        onHostContextChanged() {
          x || B("connected");
        },
        onTeardown() {
          return xn("MCP_RESOURCE_REQUESTED", "ai-assistant", {
            lifecycle: "teardown",
            runtime: "mcp-apps"
          }), {
            appId: "ai-assistant",
            latestRuntime: St.current
          };
        }
      }
    }).then((j) => {
      if (x) {
        j.dispose();
        return;
      }
      sl.current = j, B(j.status === "connected" ? "connected" : j.status === "standalone" ? "standalone" : "unavailable");
    }), () => {
      x = !0, sl.current?.dispose();
    };
  }, []), (0, Gt.useEffect)(() => {
    const x = window.LanguageModel;
    if (!x) {
      Z("unsupported");
      return;
    }
    x.availability({ languages: ["en"] }).then(Z).catch(() => Z("unavailable"));
  }, []), (0, Gt.useEffect)(() => {
    const x = dd({
      name: "assistant_summarize_platform_health",
      description: "Summarize the currently visible Open Micro Platform dashboard health signals and suggest the next action.",
      inputSchema: {
        type: "object",
        properties: { question: {
          type: "string",
          description: "The user question or investigation goal from the browser agent."
        } }
      },
      execute: async ({ question: w }) => ({
        source: "ai-assistant",
        question: w ?? "Summarize platform health",
        summary: sf,
        resources: [
          "billing.invoice",
          "analytics.funnel",
          "admin.tenant"
        ]
      }),
      readOnlyHint: !0
    }), j = dd({
      name: "assistant_list_mcp_capabilities",
      description: "List the MCP Apps capabilities exposed by the AI Assistant micro app.",
      inputSchema: {
        type: "object",
        properties: { tool: {
          type: "string",
          description: "Optional capability name to inspect."
        } }
      },
      execute: async ({ tool: w }) => ({
        selected: w ?? null,
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
    return xt(x.supported || j.supported || gd()), () => {
      x.unregister(), j.unregister();
    };
  }, []);
  async function It(x) {
    x.preventDefault();
    const j = E.trim();
    if (j) {
      Xt(!0), xn("MCP_TOOL_CALL_REQUESTED", "ai-assistant", {
        tool: "assistant.summarizeCase",
        prompt: j
      }), P1("assistant_summarizeCase", { prompt: j }).catch(() => {
      }), window.openai?.setWidgetState?.({
        lastPrompt: j,
        lastAction: "assistant_summarizeCase",
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
      try {
        const w = await Lt(j, f);
        Ot(w.runtime), _((Nt) => [
          ...Nt,
          {
            role: "user",
            text: j
          },
          {
            role: "assistant",
            text: w.text,
            runtime: w.runtime
          }
        ]), xn("MCP_TOOL_CALL_COMPLETED", "ai-assistant", {
          tool: "assistant.summarizeCase",
          resources: [
            "billing.invoice",
            "analytics.funnel",
            "admin.tenant"
          ],
          runtime: w.runtime,
          provider: w.provider
        }), y("");
      } catch (w) {
        const Nt = xa("Deterministic fallback", sf);
        Ot("deterministic-fallback"), _((ol) => [
          ...ol,
          {
            role: "user",
            text: j
          },
          {
            role: "assistant",
            text: Nt,
            runtime: "deterministic-fallback"
          }
        ]), xn("MCP_TOOL_CALL_FAILED", "ai-assistant", {
          tool: "assistant.summarizeCase",
          error: w instanceof Error ? w.message : String(w)
        });
      } finally {
        Xt(!1);
      }
    }
  }
  async function Lt(x, j) {
    const w = sl.current;
    if (w?.status === "connected") {
      try {
        await w.updateModelContext(`Open Micro Platform context: ${bu}`), await w.sendLog("info", {
          appId: "ai-assistant",
          action: "ask",
          runtime: "ai-native-host-model"
        });
        const Tt = await w.requestHostCompletion([
          "Answer this as the Open Micro Platform AI Assistant.",
          "Be concise, operational, and use the known cross-app context.",
          `Known platform context: ${bu}`,
          `User question: ${x}`
        ].join(`
`), "You are running inside an MCP Apps widget. Use the AI host model to answer from the provided platform context.");
        if (Tt.trim()) return {
          text: xa("AI Native host model", Tt.trim()),
          runtime: "ai-native-host-model"
        };
      } catch {
      }
      try {
        if (await w.updateModelContext(`Open Micro Platform context: ${bu}`), !gy(await w.sendHostMessage([
          "Answer this as the Open Micro Platform AI Assistant.",
          "Use the platform context already shared by the widget.",
          `User question: ${x}`
        ].join(`
`)))) return {
          text: xa("AI Native host message", "I sent this Ask to the AI-native host conversation with the current platform context. The host model response should appear in the chat thread, and the widget kept the same state for follow-up actions."),
          runtime: "ai-native-host-message"
        };
      } catch {
      }
    }
    const Nt = await yy(x);
    if (Nt) return Nt;
    if (J === "available" && window.LanguageModel) {
      let Tt;
      try {
        return Tt = await window.LanguageModel.create(), {
          text: xa("Chrome Built-in AI", await Tt.prompt([
            "You are the Open Micro Platform AI Assistant.",
            "Answer as a concise platform operator.",
            `Use this known context: ${bu}`,
            `User question: ${x}`
          ].join(`
`))),
          runtime: "chrome-built-in-ai"
        };
      } catch {
      } finally {
        Tt?.destroy?.();
      }
    }
    N("idle");
    const ol = await vy(x, j);
    return ol ? (N("available"), ol) : (N("unavailable"), {
      text: xa("Deterministic fallback", sf),
      runtime: "deterministic-fallback"
    });
  }
  return /* @__PURE__ */ (0, G.jsxs)("section", {
    className: "micro-app-container",
    children: [
      /* @__PURE__ */ (0, G.jsxs)("header", {
        className: "micro-app-header",
        children: [
          /* @__PURE__ */ (0, G.jsx)("span", { children: "AI Platform" }),
          /* @__PURE__ */ (0, G.jsx)("h1", { children: "Assistant Workspace" }),
          /* @__PURE__ */ (0, G.jsx)("p", { children: "Local POC assistant flow for platform triage and cross-app context." })
        ]
      }),
      /* @__PURE__ */ (0, G.jsxs)("div", {
        className: "insights",
        children: [
          /* @__PURE__ */ (0, G.jsxs)("article", { children: [/* @__PURE__ */ (0, G.jsx)("strong", { children: "3" }), /* @__PURE__ */ (0, G.jsx)("span", { children: "Signals correlated" })] }),
          /* @__PURE__ */ (0, G.jsxs)("article", { children: [/* @__PURE__ */ (0, G.jsx)("strong", { children: "Low" }), /* @__PURE__ */ (0, G.jsx)("span", { children: "Risk level" })] }),
          /* @__PURE__ */ (0, G.jsxs)("article", { children: [/* @__PURE__ */ (0, G.jsx)("strong", { children: "0 ms" }), /* @__PURE__ */ (0, G.jsx)("span", { children: "External API latency" })] })
        ]
      }),
      /* @__PURE__ */ (0, G.jsxs)("div", {
        className: "mcp-panel",
        "aria-label": "MCPApps capabilities",
        children: [
          /* @__PURE__ */ (0, G.jsx)("span", { children: "MCPApps SDK" }),
          /* @__PURE__ */ (0, G.jsx)("strong", { children: "assistant.summarizeCase" }),
          /* @__PURE__ */ (0, G.jsx)("p", { children: "Emits `mcp:tool-call-requested` and `mcp:tool-call-completed` on the shared event bus." })
        ]
      }),
      /* @__PURE__ */ (0, G.jsxs)("div", {
        className: "ai-runtime-grid",
        "aria-label": "AI runtime capabilities",
        children: [
          /* @__PURE__ */ (0, G.jsxs)("article", { children: [
            /* @__PURE__ */ (0, G.jsx)("span", { children: "Legacy ChatGPT bridge" }),
            /* @__PURE__ */ (0, G.jsx)("strong", { children: Sy(C) }),
            /* @__PURE__ */ (0, G.jsx)("p", { children: "Only used when a host exposes the older `window.openai` message API instead of the MCP Apps `ui/message` runtime." })
          ] }),
          /* @__PURE__ */ (0, G.jsxs)("article", { children: [
            /* @__PURE__ */ (0, G.jsx)("span", { children: "MCP host AI" }),
            /* @__PURE__ */ (0, G.jsx)("strong", { children: by(Q) }),
            /* @__PURE__ */ (0, G.jsx)("p", { children: "When rendered inside Claude, ChatGPT, or another MCP Apps host, asks the host model or sends a host conversation message before local browser fallback." })
          ] }),
          /* @__PURE__ */ (0, G.jsxs)("article", { children: [
            /* @__PURE__ */ (0, G.jsx)("span", { children: "Chrome built-in AI" }),
            /* @__PURE__ */ (0, G.jsx)("strong", { children: Ay(J) }),
            /* @__PURE__ */ (0, G.jsx)("p", { children: "Uses `LanguageModel` locally when Chrome has Gemini Nano available, then falls back without breaking the shell." })
          ] }),
          /* @__PURE__ */ (0, G.jsxs)("article", { children: [
            /* @__PURE__ */ (0, G.jsx)("span", { children: "WebMCP tools" }),
            /* @__PURE__ */ (0, G.jsx)("strong", { children: Qt ? "Registered" : "Waiting for browser support" }),
            /* @__PURE__ */ (0, G.jsx)("p", { children: "Registers tab-bound tools with `document.modelContext` when a browser agent exposes WebMCP." })
          ] }),
          /* @__PURE__ */ (0, G.jsxs)("article", { children: [
            /* @__PURE__ */ (0, G.jsx)("span", { children: "MCP Apps portability" }),
            /* @__PURE__ */ (0, G.jsx)("strong", { children: "HTML resource ready" }),
            /* @__PURE__ */ (0, G.jsx)("p", { children: "This same micro app can render through `/api/mcp/apps/ai-assistant/resource` in an AI host iframe." })
          ] }),
          /* @__PURE__ */ (0, G.jsxs)("article", { children: [
            /* @__PURE__ */ (0, G.jsx)("span", { children: "Server API chat" }),
            /* @__PURE__ */ (0, G.jsx)("strong", { children: py(L) }),
            /* @__PURE__ */ (0, G.jsx)("p", { children: "When host and browser AI are unavailable, Ask calls the shell or MCP server chat API and still returns an operational answer." })
          ] }),
          /* @__PURE__ */ (0, G.jsxs)("article", { children: [
            /* @__PURE__ */ (0, G.jsx)("span", { children: "Last response" }),
            /* @__PURE__ */ (0, G.jsx)("strong", { children: md(Ut) }),
            /* @__PURE__ */ (0, G.jsx)("p", { children: "Shows which runtime handled the latest user question across AI-native, browser-native, and server paths." })
          ] })
        ]
      }),
      /* @__PURE__ */ (0, G.jsx)("div", {
        className: "thread",
        children: g.map((x, j) => /* @__PURE__ */ (0, G.jsxs)("p", {
          className: x.role,
          children: [x.runtime && /* @__PURE__ */ (0, G.jsx)("span", {
            className: "runtime-badge",
            children: md(x.runtime)
          }), x.text]
        }, `${x.role}-${j}`))
      }),
      /* @__PURE__ */ (0, G.jsxs)("form", {
        className: "composer",
        onSubmit: It,
        children: [/* @__PURE__ */ (0, G.jsx)("input", {
          value: E,
          onChange: (x) => y(x.target.value),
          "aria-label": "Assistant prompt"
        }), /* @__PURE__ */ (0, G.jsx)("button", {
          type: "submit",
          disabled: Tl,
          children: Tl ? "Thinking" : "Ask"
        })]
      })
    ]
  });
}
async function yy(f) {
  const g = await ry();
  if (g?.sendFollowUpMessage)
    try {
      return await g.sendFollowUpMessage({
        prompt: `Answer inside the conversation using the AI Assistant context: ${f}`,
        scrollToBottom: !0
      }), {
        text: xa("Legacy ChatGPT bridge", "I sent this question to the ChatGPT host conversation. The host response will appear in the chat thread."),
        runtime: "ai-native-host-message"
      };
    } catch {
      return;
    }
}
async function vy(f, g) {
  const _ = hy(g);
  try {
    const E = await fetch(_, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        prompt: f,
        context: bu,
        appId: "ai-assistant"
      })
    });
    if (!E.ok) return;
    const y = await E.json();
    return y.text ? {
      text: xa(y.provider ? `Server API chat (${y.provider})` : "Server API chat", y.text),
      runtime: y.runtime ?? "server-api-chat",
      provider: y.provider
    } : void 0;
  } catch {
    return;
  }
}
function hy(f) {
  const g = window.__MICRO_APP_CONTEXT__?.resourceOrigin ?? window.__MICRO_APP_CONTEXT__?.shellOrigin, _ = f ?? g ?? window.location.origin;
  return new URL("/api/ai-assistant/chat", _).toString();
}
function xa(f, g) {
  return `[${f}] ${g}`;
}
async function ry(f = 1500) {
  return window.openai?.sendFollowUpMessage ? window.openai : new Promise((g) => {
    const _ = Date.now() + f;
    let E, y;
    const J = () => {
      E && window.clearInterval(E), y && window.clearTimeout(y), window.removeEventListener("openai:set_globals", Q);
    }, Z = () => {
      const B = window.openai?.sendFollowUpMessage ? window.openai : void 0;
      !B && Date.now() < _ || (J(), g(B));
    }, Q = (B) => {
      const C = B.detail?.openai;
      C?.sendFollowUpMessage && !window.openai && (window.openai = C), Z();
    };
    window.addEventListener("openai:set_globals", Q), E = window.setInterval(Z, 50), y = window.setTimeout(Z, f);
  });
}
function pu(f) {
  if (!f) return;
  if (typeof f == "string") return f;
  if (Array.isArray(f)) return f.map(pu).filter(Boolean).join(`
`) || void 0;
  if (typeof f != "object") return;
  const g = f;
  if (typeof g.text == "string") return g.text;
  if (typeof g.result == "string") return g.result;
  if (typeof g.structuredContent == "object") {
    const _ = g.structuredContent;
    if (typeof _.result == "string") return _.result;
  }
  if (Array.isArray(g.content)) return pu(g.content);
  if (typeof g.mcp_tool_result == "object") return pu(g.mcp_tool_result);
  if (typeof g.call_tool_result == "object") return pu(g.call_tool_result);
}
function gy(f) {
  return !!(f && typeof f == "object" && f.isError === !0);
}
function Sy(f) {
  return {
    checking: "Checking",
    connected: "Legacy bridge connected",
    unavailable: "Not exposed"
  }[f];
}
function by(f) {
  return {
    checking: "Checking",
    connected: "Host model connected",
    standalone: "Standalone mode",
    unavailable: "Host model unavailable"
  }[f];
}
function py(f) {
  return {
    idle: "Ready on demand",
    available: "API answered",
    unavailable: "Unavailable"
  }[f];
}
function md(f) {
  return {
    "ai-native-mcp-tool": "AI Native MCP tool",
    "ai-native-host-model": "AI Native host model",
    "ai-native-host-message": "AI Native host message",
    "chrome-built-in-ai": "Chrome Built-in AI",
    "server-api-chat": "Server API chat",
    "deterministic-fallback": "Deterministic fallback"
  }[f];
}
function Ay(f) {
  return {
    available: "Available",
    checking: "Checking",
    downloadable: "Model downloadable",
    downloading: "Model downloading",
    unavailable: "Unavailable",
    unsupported: "Not exposed"
  }[f];
}
var zy = cy("micro-ai-assistant-app", { mount(f, g) {
  const _ = W1.createRoot(f);
  return _.render(/* @__PURE__ */ (0, G.jsx)(my, { apiBaseUrl: g.shellOrigin })), () => _.unmount();
} });
export {
  zy as MicroAiAssistantApp,
  Ey as n,
  Ty as t
};
