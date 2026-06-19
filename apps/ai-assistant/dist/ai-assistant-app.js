var Ud = Object.create, im = Object.defineProperty, rd = Object.getOwnPropertyDescriptor, Hd = Object.getOwnPropertyNames, Nd = Object.getPrototypeOf, Cd = Object.prototype.hasOwnProperty, Dt = (y, p) => () => (p || (y((p = { exports: {} }).exports, p), y = null), p.exports), Rd = (y, p, B, R) => {
  if (p && typeof p == "object" || typeof p == "function")
    for (var o = Hd(p), W = 0, V = o.length, Y; W < V; W++)
      Y = o[W], !Cd.call(y, Y) && Y !== B && im(y, Y, {
        get: ((G) => p[G]).bind(null, Y),
        enumerable: !(R = rd(p, Y)) || R.enumerable
      });
  return y;
}, cm = (y, p, B) => (B = y != null ? Ud(Nd(y)) : {}, Rd(p || !y || !y.__esModule ? im(B, "default", {
  value: y,
  enumerable: !0
}) : B, y)), qd = /* @__PURE__ */ Dt(((y) => {
  var p = /* @__PURE__ */ Symbol.for("react.transitional.element"), B = /* @__PURE__ */ Symbol.for("react.portal"), R = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), W = /* @__PURE__ */ Symbol.for("react.profiler"), V = /* @__PURE__ */ Symbol.for("react.consumer"), Y = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), r = /* @__PURE__ */ Symbol.for("react.suspense"), T = /* @__PURE__ */ Symbol.for("react.memo"), Q = /* @__PURE__ */ Symbol.for("react.lazy"), O = /* @__PURE__ */ Symbol.for("react.activity"), il = Symbol.iterator;
  function Sl(m) {
    return m === null || typeof m != "object" ? null : (m = il && m[il] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var ql = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Kl = Object.assign, wt = {};
  function Jl(m, E, M) {
    this.props = m, this.context = E, this.refs = wt, this.updater = M || ql;
  }
  Jl.prototype.isReactComponent = {}, Jl.prototype.setState = function(m, E) {
    if (typeof m != "object" && typeof m != "function" && m != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, m, E, "setState");
  }, Jl.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function Wt() {
  }
  Wt.prototype = Jl.prototype;
  function Ol(m, E, M) {
    this.props = m, this.context = E, this.refs = wt, this.updater = M || ql;
  }
  var St = Ol.prototype = new Wt();
  St.constructor = Ol, Kl(St, Jl.prototype), St.isPureReactComponent = !0;
  var wl = Array.isArray;
  function Wl() {
  }
  var I = {
    H: null,
    A: null,
    T: null,
    S: null
  }, Yl = Object.prototype.hasOwnProperty;
  function Tt(m, E, M) {
    var C = M.ref;
    return {
      $$typeof: p,
      type: m,
      key: E,
      ref: C !== void 0 ? C : null,
      props: M
    };
  }
  function za(m, E) {
    return Tt(m.type, E, m.props);
  }
  function $l(m) {
    return typeof m == "object" && m !== null && m.$$typeof === p;
  }
  function _t(m) {
    var E = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + m.replace(/[=:]/g, function(M) {
      return E[M];
    });
  }
  var Za = /\/+/g;
  function bt(m, E) {
    return typeof m == "object" && m !== null && m.key != null ? _t("" + m.key) : E.toString(36);
  }
  function U(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (typeof m.status == "string" ? m.then(Wl, Wl) : (m.status = "pending", m.then(function(E) {
          m.status === "pending" && (m.status = "fulfilled", m.value = E);
        }, function(E) {
          m.status === "pending" && (m.status = "rejected", m.reason = E);
        })), m.status) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function _(m, E, M, C, x) {
    var K = typeof m;
    (K === "undefined" || K === "boolean") && (m = null);
    var ul = !1;
    if (m === null) ul = !0;
    else switch (K) {
      case "bigint":
      case "string":
      case "number":
        ul = !0;
        break;
      case "object":
        switch (m.$$typeof) {
          case p:
          case B:
            ul = !0;
            break;
          case Q:
            return ul = m._init, _(ul(m._payload), E, M, C, x);
        }
    }
    if (ul) return x = x(m), ul = C === "" ? "." + bt(m, 0) : C, wl(x) ? (M = "", ul != null && (M = ul.replace(Za, "$&/") + "/"), _(x, E, M, "", function(Mu) {
      return Mu;
    })) : x != null && ($l(x) && (x = za(x, M + (x.key == null || m && m.key === x.key ? "" : ("" + x.key).replace(Za, "$&/") + "/") + ul)), E.push(x)), 1;
    ul = 0;
    var Bl = C === "" ? "." : C + ":";
    if (wl(m)) for (var bl = 0; bl < m.length; bl++) C = m[bl], K = Bl + bt(C, bl), ul += _(C, E, M, K, x);
    else if (bl = Sl(m), typeof bl == "function") for (m = bl.call(m), bl = 0; !(C = m.next()).done; ) C = C.value, K = Bl + bt(C, bl++), ul += _(C, E, M, K, x);
    else if (K === "object") {
      if (typeof m.then == "function") return _(U(m), E, M, C, x);
      throw E = String(m), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
    }
    return ul;
  }
  function D(m, E, M) {
    if (m == null) return m;
    var C = [], x = 0;
    return _(m, C, "", "", function(K) {
      return E.call(M, K, x++);
    }), C;
  }
  function tl(m) {
    if (m._status === -1) {
      var E = m._result;
      E = E(), E.then(function(M) {
        (m._status === 0 || m._status === -1) && (m._status = 1, m._result = M);
      }, function(M) {
        (m._status === 0 || m._status === -1) && (m._status = 2, m._result = M);
      }), m._status === -1 && (m._status = 0, m._result = E);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var yl = typeof reportError == "function" ? reportError : function(m) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var E = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
        error: m
      });
      if (!window.dispatchEvent(E)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", m);
      return;
    }
    console.error(m);
  }, Fl = {
    map: D,
    forEach: function(m, E, M) {
      D(m, function() {
        E.apply(this, arguments);
      }, M);
    },
    count: function(m) {
      var E = 0;
      return D(m, function() {
        E++;
      }), E;
    },
    toArray: function(m) {
      return D(m, function(E) {
        return E;
      }) || [];
    },
    only: function(m) {
      if (!$l(m)) throw Error("React.Children.only expected to receive a single React element child.");
      return m;
    }
  };
  y.Activity = O, y.Children = Fl, y.Component = Jl, y.Fragment = R, y.Profiler = W, y.PureComponent = Ol, y.StrictMode = o, y.Suspense = r, y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, y.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(m) {
      return I.H.useMemoCache(m);
    }
  }, y.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, y.cacheSignal = function() {
    return null;
  }, y.cloneElement = function(m, E, M) {
    if (m == null) throw Error("The argument must be a React element, but you passed " + m + ".");
    var C = Kl({}, m.props), x = m.key;
    if (E != null) for (K in E.key !== void 0 && (x = "" + E.key), E) !Yl.call(E, K) || K === "key" || K === "__self" || K === "__source" || K === "ref" && E.ref === void 0 || (C[K] = E[K]);
    var K = arguments.length - 2;
    if (K === 1) C.children = M;
    else if (1 < K) {
      for (var ul = Array(K), Bl = 0; Bl < K; Bl++) ul[Bl] = arguments[Bl + 2];
      C.children = ul;
    }
    return Tt(m.type, x, C);
  }, y.createContext = function(m) {
    return m = {
      $$typeof: Y,
      _currentValue: m,
      _currentValue2: m,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, m.Provider = m, m.Consumer = {
      $$typeof: V,
      _context: m
    }, m;
  }, y.createElement = function(m, E, M) {
    var C, x = {}, K = null;
    if (E != null) for (C in E.key !== void 0 && (K = "" + E.key), E) Yl.call(E, C) && C !== "key" && C !== "__self" && C !== "__source" && (x[C] = E[C]);
    var ul = arguments.length - 2;
    if (ul === 1) x.children = M;
    else if (1 < ul) {
      for (var Bl = Array(ul), bl = 0; bl < ul; bl++) Bl[bl] = arguments[bl + 2];
      x.children = Bl;
    }
    if (m && m.defaultProps) for (C in ul = m.defaultProps, ul) x[C] === void 0 && (x[C] = ul[C]);
    return Tt(m, K, x);
  }, y.createRef = function() {
    return { current: null };
  }, y.forwardRef = function(m) {
    return {
      $$typeof: G,
      render: m
    };
  }, y.isValidElement = $l, y.lazy = function(m) {
    return {
      $$typeof: Q,
      _payload: {
        _status: -1,
        _result: m
      },
      _init: tl
    };
  }, y.memo = function(m, E) {
    return {
      $$typeof: T,
      type: m,
      compare: E === void 0 ? null : E
    };
  }, y.startTransition = function(m) {
    var E = I.T, M = {};
    I.T = M;
    try {
      var C = m(), x = I.S;
      x !== null && x(M, C), typeof C == "object" && C !== null && typeof C.then == "function" && C.then(Wl, yl);
    } catch (K) {
      yl(K);
    } finally {
      E !== null && M.types !== null && (E.types = M.types), I.T = E;
    }
  }, y.unstable_useCacheRefresh = function() {
    return I.H.useCacheRefresh();
  }, y.use = function(m) {
    return I.H.use(m);
  }, y.useActionState = function(m, E, M) {
    return I.H.useActionState(m, E, M);
  }, y.useCallback = function(m, E) {
    return I.H.useCallback(m, E);
  }, y.useContext = function(m) {
    return I.H.useContext(m);
  }, y.useDebugValue = function() {
  }, y.useDeferredValue = function(m, E) {
    return I.H.useDeferredValue(m, E);
  }, y.useEffect = function(m, E) {
    return I.H.useEffect(m, E);
  }, y.useEffectEvent = function(m) {
    return I.H.useEffectEvent(m);
  }, y.useId = function() {
    return I.H.useId();
  }, y.useImperativeHandle = function(m, E, M) {
    return I.H.useImperativeHandle(m, E, M);
  }, y.useInsertionEffect = function(m, E) {
    return I.H.useInsertionEffect(m, E);
  }, y.useLayoutEffect = function(m, E) {
    return I.H.useLayoutEffect(m, E);
  }, y.useMemo = function(m, E) {
    return I.H.useMemo(m, E);
  }, y.useOptimistic = function(m, E) {
    return I.H.useOptimistic(m, E);
  }, y.useReducer = function(m, E, M) {
    return I.H.useReducer(m, E, M);
  }, y.useRef = function(m) {
    return I.H.useRef(m);
  }, y.useState = function(m) {
    return I.H.useState(m);
  }, y.useSyncExternalStore = function(m, E, M) {
    return I.H.useSyncExternalStore(m, E, M);
  }, y.useTransition = function() {
    return I.H.useTransition();
  }, y.version = "19.2.7";
})), nf = /* @__PURE__ */ Dt(((y, p) => {
  p.exports = qd();
})), Bd = /* @__PURE__ */ Dt(((y) => {
  function p(U, _) {
    var D = U.length;
    U.push(_);
    l: for (; 0 < D; ) {
      var tl = D - 1 >>> 1, yl = U[tl];
      if (0 < o(yl, _)) U[tl] = _, U[D] = yl, D = tl;
      else break l;
    }
  }
  function B(U) {
    return U.length === 0 ? null : U[0];
  }
  function R(U) {
    if (U.length === 0) return null;
    var _ = U[0], D = U.pop();
    if (D !== _) {
      U[0] = D;
      l: for (var tl = 0, yl = U.length, Fl = yl >>> 1; tl < Fl; ) {
        var m = 2 * (tl + 1) - 1, E = U[m], M = m + 1, C = U[M];
        if (0 > o(E, D)) M < yl && 0 > o(C, E) ? (U[tl] = C, U[M] = D, tl = M) : (U[tl] = E, U[m] = D, tl = m);
        else if (M < yl && 0 > o(C, D)) U[tl] = C, U[M] = D, tl = M;
        else break l;
      }
    }
    return _;
  }
  function o(U, _) {
    var D = U.sortIndex - _.sortIndex;
    return D !== 0 ? D : U.id - _.id;
  }
  if (y.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var W = performance;
    y.unstable_now = function() {
      return W.now();
    };
  } else {
    var V = Date, Y = V.now();
    y.unstable_now = function() {
      return V.now() - Y;
    };
  }
  var G = [], r = [], T = 1, Q = null, O = 3, il = !1, Sl = !1, ql = !1, Kl = !1, wt = typeof setTimeout == "function" ? setTimeout : null, Jl = typeof clearTimeout == "function" ? clearTimeout : null, Wt = typeof setImmediate < "u" ? setImmediate : null;
  function Ol(U) {
    for (var _ = B(r); _ !== null; ) {
      if (_.callback === null) R(r);
      else if (_.startTime <= U) R(r), _.sortIndex = _.expirationTime, p(G, _);
      else break;
      _ = B(r);
    }
  }
  function St(U) {
    if (ql = !1, Ol(U), !Sl) if (B(G) !== null) Sl = !0, wl || (wl = !0, $l());
    else {
      var _ = B(r);
      _ !== null && bt(St, _.startTime - U);
    }
  }
  var wl = !1, Wl = -1, I = 5, Yl = -1;
  function Tt() {
    return Kl ? !0 : !(y.unstable_now() - Yl < I);
  }
  function za() {
    if (Kl = !1, wl) {
      var U = y.unstable_now();
      Yl = U;
      var _ = !0;
      try {
        l: {
          Sl = !1, ql && (ql = !1, Jl(Wl), Wl = -1), il = !0;
          var D = O;
          try {
            t: {
              for (Ol(U), Q = B(G); Q !== null && !(Q.expirationTime > U && Tt()); ) {
                var tl = Q.callback;
                if (typeof tl == "function") {
                  Q.callback = null, O = Q.priorityLevel;
                  var yl = tl(Q.expirationTime <= U);
                  if (U = y.unstable_now(), typeof yl == "function") {
                    Q.callback = yl, Ol(U), _ = !0;
                    break t;
                  }
                  Q === B(G) && R(G), Ol(U);
                } else R(G);
                Q = B(G);
              }
              if (Q !== null) _ = !0;
              else {
                var Fl = B(r);
                Fl !== null && bt(St, Fl.startTime - U), _ = !1;
              }
            }
            break l;
          } finally {
            Q = null, O = D, il = !1;
          }
          _ = void 0;
        }
      } finally {
        _ ? $l() : wl = !1;
      }
    }
  }
  var $l;
  if (typeof Wt == "function") $l = function() {
    Wt(za);
  };
  else if (typeof MessageChannel < "u") {
    var _t = new MessageChannel(), Za = _t.port2;
    _t.port1.onmessage = za, $l = function() {
      Za.postMessage(null);
    };
  } else $l = function() {
    wt(za, 0);
  };
  function bt(U, _) {
    Wl = wt(function() {
      U(y.unstable_now());
    }, _);
  }
  y.unstable_IdlePriority = 5, y.unstable_ImmediatePriority = 1, y.unstable_LowPriority = 4, y.unstable_NormalPriority = 3, y.unstable_Profiling = null, y.unstable_UserBlockingPriority = 2, y.unstable_cancelCallback = function(U) {
    U.callback = null;
  }, y.unstable_forceFrameRate = function(U) {
    0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < U ? Math.floor(1e3 / U) : 5;
  }, y.unstable_getCurrentPriorityLevel = function() {
    return O;
  }, y.unstable_next = function(U) {
    switch (O) {
      case 1:
      case 2:
      case 3:
        var _ = 3;
        break;
      default:
        _ = O;
    }
    var D = O;
    O = _;
    try {
      return U();
    } finally {
      O = D;
    }
  }, y.unstable_requestPaint = function() {
    Kl = !0;
  }, y.unstable_runWithPriority = function(U, _) {
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
    var D = O;
    O = U;
    try {
      return _();
    } finally {
      O = D;
    }
  }, y.unstable_scheduleCallback = function(U, _, D) {
    var tl = y.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? tl + D : tl) : D = tl, U) {
      case 1:
        var yl = -1;
        break;
      case 2:
        yl = 250;
        break;
      case 5:
        yl = 1073741823;
        break;
      case 4:
        yl = 1e4;
        break;
      default:
        yl = 5e3;
    }
    return yl = D + yl, U = {
      id: T++,
      callback: _,
      priorityLevel: U,
      startTime: D,
      expirationTime: yl,
      sortIndex: -1
    }, D > tl ? (U.sortIndex = D, p(r, U), B(G) === null && U === B(r) && (ql ? (Jl(Wl), Wl = -1) : ql = !0, bt(St, D - tl))) : (U.sortIndex = yl, p(G, U), Sl || il || (Sl = !0, wl || (wl = !0, $l()))), U;
  }, y.unstable_shouldYield = Tt, y.unstable_wrapCallback = function(U) {
    var _ = O;
    return function() {
      var D = O;
      O = _;
      try {
        return U.apply(this, arguments);
      } finally {
        O = D;
      }
    };
  };
})), jd = /* @__PURE__ */ Dt(((y, p) => {
  p.exports = Bd();
})), Yd = /* @__PURE__ */ Dt(((y) => {
  var p = nf();
  function B(r) {
    var T = "https://react.dev/errors/" + r;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Q = 2; Q < arguments.length; Q++) T += "&args[]=" + encodeURIComponent(arguments[Q]);
    }
    return "Minified React error #" + r + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function R() {
  }
  var o = {
    d: {
      f: R,
      r: function() {
        throw Error(B(522));
      },
      D: R,
      C: R,
      L: R,
      m: R,
      X: R,
      S: R,
      M: R
    },
    p: 0,
    findDOMNode: null
  }, W = /* @__PURE__ */ Symbol.for("react.portal");
  function V(r, T, Q) {
    var O = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: W,
      key: O == null ? null : "" + O,
      children: r,
      containerInfo: T,
      implementation: Q
    };
  }
  var Y = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function G(r, T) {
    if (r === "font") return "";
    if (typeof T == "string") return T === "use-credentials" ? T : "";
  }
  y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, y.createPortal = function(r, T) {
    var Q = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11) throw Error(B(299));
    return V(r, T, null, Q);
  }, y.flushSync = function(r) {
    var T = Y.T, Q = o.p;
    try {
      if (Y.T = null, o.p = 2, r) return r();
    } finally {
      Y.T = T, o.p = Q, o.d.f();
    }
  }, y.preconnect = function(r, T) {
    typeof r == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, o.d.C(r, T));
  }, y.prefetchDNS = function(r) {
    typeof r == "string" && o.d.D(r);
  }, y.preinit = function(r, T) {
    if (typeof r == "string" && T && typeof T.as == "string") {
      var Q = T.as, O = G(Q, T.crossOrigin), il = typeof T.integrity == "string" ? T.integrity : void 0, Sl = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      Q === "style" ? o.d.S(r, typeof T.precedence == "string" ? T.precedence : void 0, {
        crossOrigin: O,
        integrity: il,
        fetchPriority: Sl
      }) : Q === "script" && o.d.X(r, {
        crossOrigin: O,
        integrity: il,
        fetchPriority: Sl,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0
      });
    }
  }, y.preinitModule = function(r, T) {
    if (typeof r == "string") if (typeof T == "object" && T !== null) {
      if (T.as == null || T.as === "script") {
        var Q = G(T.as, T.crossOrigin);
        o.d.M(r, {
          crossOrigin: Q,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0
        });
      }
    } else T ?? o.d.M(r);
  }, y.preload = function(r, T) {
    if (typeof r == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var Q = T.as, O = G(Q, T.crossOrigin);
      o.d.L(r, Q, {
        crossOrigin: O,
        integrity: typeof T.integrity == "string" ? T.integrity : void 0,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0,
        type: typeof T.type == "string" ? T.type : void 0,
        fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
        referrerPolicy: typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
        imageSrcSet: typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
        imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
        media: typeof T.media == "string" ? T.media : void 0
      });
    }
  }, y.preloadModule = function(r, T) {
    if (typeof r == "string") if (T) {
      var Q = G(T.as, T.crossOrigin);
      o.d.m(r, {
        as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
        crossOrigin: Q,
        integrity: typeof T.integrity == "string" ? T.integrity : void 0
      });
    } else o.d.m(r);
  }, y.requestFormReset = function(r) {
    o.d.r(r);
  }, y.unstable_batchedUpdates = function(r, T) {
    return r(T);
  }, y.useFormState = function(r, T, Q) {
    return Y.H.useFormState(r, T, Q);
  }, y.useFormStatus = function() {
    return Y.H.useHostTransitionStatus();
  }, y.version = "19.2.7";
})), Gd = /* @__PURE__ */ Dt(((y, p) => {
  function B() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B);
      } catch (R) {
        console.error(R);
      }
  }
  B(), p.exports = Yd();
})), Qd = /* @__PURE__ */ Dt(((y) => {
  var p = jd(), B = nf(), R = Gd();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function W(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function V(l) {
    var t = l, a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function Y(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function G(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function r(l) {
    if (V(l) !== l) throw Error(o(188));
  }
  function T(l) {
    var t = l.alternate;
    if (!t) {
      if (t = V(l), t === null) throw Error(o(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var n = a.return;
      if (n === null) break;
      var e = n.alternate;
      if (e === null) {
        if (u = n.return, u !== null) {
          a = u;
          continue;
        }
        break;
      }
      if (n.child === e.child) {
        for (e = n.child; e; ) {
          if (e === a) return r(n), l;
          if (e === u) return r(n), t;
          e = e.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== u.return) a = n, u = e;
      else {
        for (var i = !1, c = n.child; c; ) {
          if (c === a) {
            i = !0, a = n, u = e;
            break;
          }
          if (c === u) {
            i = !0, u = n, a = e;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = e.child; c; ) {
            if (c === a) {
              i = !0, a = e, u = n;
              break;
            }
            if (c === u) {
              i = !0, u = e, a = n;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(o(189));
        }
      }
      if (a.alternate !== u) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? l : t;
  }
  function Q(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = Q(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var O = Object.assign, il = /* @__PURE__ */ Symbol.for("react.element"), Sl = /* @__PURE__ */ Symbol.for("react.transitional.element"), ql = /* @__PURE__ */ Symbol.for("react.portal"), Kl = /* @__PURE__ */ Symbol.for("react.fragment"), wt = /* @__PURE__ */ Symbol.for("react.strict_mode"), Jl = /* @__PURE__ */ Symbol.for("react.profiler"), Wt = /* @__PURE__ */ Symbol.for("react.consumer"), Ol = /* @__PURE__ */ Symbol.for("react.context"), St = /* @__PURE__ */ Symbol.for("react.forward_ref"), wl = /* @__PURE__ */ Symbol.for("react.suspense"), Wl = /* @__PURE__ */ Symbol.for("react.suspense_list"), I = /* @__PURE__ */ Symbol.for("react.memo"), Yl = /* @__PURE__ */ Symbol.for("react.lazy"), Tt = /* @__PURE__ */ Symbol.for("react.activity"), za = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), $l = Symbol.iterator;
  function _t(l) {
    return l === null || typeof l != "object" ? null : (l = $l && l[$l] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Za = /* @__PURE__ */ Symbol.for("react.client.reference");
  function bt(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === Za ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Kl:
        return "Fragment";
      case Jl:
        return "Profiler";
      case wt:
        return "StrictMode";
      case wl:
        return "Suspense";
      case Wl:
        return "SuspenseList";
      case Tt:
        return "Activity";
    }
    if (typeof l == "object") switch (l.$$typeof) {
      case ql:
        return "Portal";
      case Ol:
        return l.displayName || "Context";
      case Wt:
        return (l._context.displayName || "Context") + ".Consumer";
      case St:
        var t = l.render;
        return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
      case I:
        return t = l.displayName || null, t !== null ? t : bt(l.type) || "Memo";
      case Yl:
        t = l._payload, l = l._init;
        try {
          return bt(l(t));
        } catch {
        }
    }
    return null;
  }
  var U = Array.isArray, _ = B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = R.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, tl = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, yl = [], Fl = -1;
  function m(l) {
    return { current: l };
  }
  function E(l) {
    0 > Fl || (l.current = yl[Fl], yl[Fl] = null, Fl--);
  }
  function M(l, t) {
    Fl++, yl[Fl] = l.current, l.current = t;
  }
  var C = m(null), x = m(null), K = m(null), ul = m(null);
  function Bl(l, t) {
    switch (M(K, t), M(x, l), M(C, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? rs(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI) t = rs(t), l = Hs(t, l);
        else switch (l) {
          case "svg":
            l = 1;
            break;
          case "math":
            l = 2;
            break;
          default:
            l = 0;
        }
    }
    E(C), M(C, l);
  }
  function bl() {
    E(C), E(x), E(K);
  }
  function Mu(l) {
    l.memoizedState !== null && M(ul, l);
    var t = C.current, a = Hs(t, l.type);
    t !== a && (M(x, l), M(C, a));
  }
  function An(l) {
    x.current === l && (E(C), E(x)), ul.current === l && (E(ul), hn._currentValue = tl);
  }
  var Xe, ef;
  function Aa(l) {
    if (Xe === void 0) try {
      throw Error();
    } catch (a) {
      var t = a.stack.trim().match(/\n( *(at )?)/);
      Xe = t && t[1] || "", ef = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Xe + l + ef;
  }
  var Ze = !1;
  function Le(l, t) {
    if (!l || Ze) return "";
    Ze = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var A = function() {
              throw Error();
            };
            if (Object.defineProperty(A.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(A, []);
              } catch (S) {
                var g = S;
              }
              Reflect.construct(l, [], A);
            } else {
              try {
                A.call();
              } catch (S) {
                g = S;
              }
              l.call(A.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (S) {
              g = S;
            }
            (A = l()) && typeof A.catch == "function" && A.catch(function() {
            });
          }
        } catch (S) {
          if (S && g && typeof S.stack == "string") return [S.stack, g.stack];
        }
        return [null, null];
      } };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot, "name");
      n && n.configurable && Object.defineProperty(u.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var e = u.DetermineComponentFrameRoot(), i = e[0], c = e[1];
      if (i && c) {
        var f = i.split(`
`), h = c.split(`
`);
        for (n = u = 0; u < f.length && !f[u].includes("DetermineComponentFrameRoot"); ) u++;
        for (; n < h.length && !h[n].includes("DetermineComponentFrameRoot"); ) n++;
        if (u === f.length || n === h.length) for (u = f.length - 1, n = h.length - 1; 1 <= u && 0 <= n && f[u] !== h[n]; ) n--;
        for (; 1 <= u && 0 <= n; u--, n--) if (f[u] !== h[n]) {
          if (u !== 1 || n !== 1) do
            if (u--, n--, 0 > n || f[u] !== h[n]) {
              var b = `
` + f[u].replace(" at new ", " at ");
              return l.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", l.displayName)), b;
            }
          while (1 <= u && 0 <= n);
          break;
        }
      }
    } finally {
      Ze = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? Aa(a) : "";
  }
  function dm(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Aa(l.type);
      case 16:
        return Aa("Lazy");
      case 13:
        return l.child !== t && t !== null ? Aa("Suspense Fallback") : Aa("Suspense");
      case 19:
        return Aa("SuspenseList");
      case 0:
      case 15:
        return Le(l.type, !1);
      case 11:
        return Le(l.type.render, !1);
      case 1:
        return Le(l.type, !0);
      case 31:
        return Aa("Activity");
      default:
        return "";
    }
  }
  function cf(l) {
    try {
      var t = "", a = null;
      do
        t += dm(l, a), a = l, l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  var Ve = Object.prototype.hasOwnProperty, xe = p.unstable_scheduleCallback, Ke = p.unstable_cancelCallback, vm = p.unstable_shouldYield, om = p.unstable_requestPaint, kl = p.unstable_now, hm = p.unstable_getCurrentPriorityLevel, ff = p.unstable_ImmediatePriority, sf = p.unstable_UserBlockingPriority, En = p.unstable_NormalPriority, gm = p.unstable_LowPriority, mf = p.unstable_IdlePriority, Sm = p.log, bm = p.unstable_setDisableYieldValue, Ou = null, Il = null;
  function $t(l) {
    if (typeof Sm == "function" && bm(l), Il && typeof Il.setStrictMode == "function") try {
      Il.setStrictMode(Ou, l);
    } catch {
    }
  }
  var Pl = Math.clz32 ? Math.clz32 : Em, zm = Math.log, Am = Math.LN2;
  function Em(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (zm(l) / Am | 0) | 0;
  }
  var Tn = 256, _n = 262144, pn = 4194304;
  function Ea(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
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
        return l;
    }
  }
  function Mn(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var n = 0, e = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var c = u & 134217727;
    return c !== 0 ? (u = c & ~e, u !== 0 ? n = Ea(u) : (i &= c, i !== 0 ? n = Ea(i) : a || (a = c & ~l, a !== 0 && (n = Ea(a))))) : (c = u & ~e, c !== 0 ? n = Ea(c) : i !== 0 ? n = Ea(i) : a || (a = u & ~l, a !== 0 && (n = Ea(a)))), n === 0 ? 0 : t !== 0 && t !== n && (t & e) === 0 && (e = n & -n, a = t & -t, e >= a || e === 32 && (a & 4194048) !== 0) ? t : n;
  }
  function Du(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Tm(l, t) {
    switch (l) {
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
  function yf() {
    var l = pn;
    return pn <<= 1, (pn & 62914560) === 0 && (pn = 4194304), l;
  }
  function Je(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function On(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function _m(l, t, a, u, n, e) {
    var i = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var c = l.entanglements, f = l.expirationTimes, h = l.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var b = 31 - Pl(a), A = 1 << b;
      c[b] = 0, f[b] = -1;
      var g = h[b];
      if (g !== null) for (h[b] = null, b = 0; b < g.length; b++) {
        var S = g[b];
        S !== null && (S.lane &= -536870913);
      }
      a &= ~A;
    }
    u !== 0 && df(l, u, 0), e !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= e & ~(i & ~t));
  }
  function df(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var u = 31 - Pl(t);
    l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 261930;
  }
  function vf(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var u = 31 - Pl(a), n = 1 << u;
      n & t | l[u] & t && (l[u] |= t), a &= ~n;
    }
  }
  function of(l, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : hf(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function hf(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function we(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function gf() {
    var l = D.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : ks(l.type));
  }
  function Sf(l, t) {
    var a = D.p;
    try {
      return D.p = l, t();
    } finally {
      D.p = a;
    }
  }
  var Ft = Math.random().toString(36).slice(2), rl = "__reactFiber$" + Ft, Gl = "__reactProps$" + Ft, Uu = "__reactContainer$" + Ft, We = "__reactEvents$" + Ft, pm = "__reactListeners$" + Ft, Mm = "__reactHandles$" + Ft, bf = "__reactResources$" + Ft, ru = "__reactMarker$" + Ft;
  function $e(l) {
    delete l[rl], delete l[Gl], delete l[We], delete l[pm], delete l[Mm];
  }
  function La(l) {
    var t = l[rl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[Uu] || a[rl]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null) for (l = Ys(l); l !== null; ) {
          if (a = l[rl]) return a;
          l = Ys(l);
        }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function Va(l) {
    if (l = l[rl] || l[Uu]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
    }
    return null;
  }
  function Hu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function xa(l) {
    var t = l[bf];
    return t || (t = l[bf] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), t;
  }
  function Dl(l) {
    l[ru] = !0;
  }
  var zf = /* @__PURE__ */ new Set(), Af = {};
  function Ta(l, t) {
    Ka(l, t), Ka(l + "Capture", t);
  }
  function Ka(l, t) {
    for (Af[l] = t, l = 0; l < t.length; l++) zf.add(t[l]);
  }
  var Om = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ef = {}, Tf = {};
  function Dm(l) {
    return Ve.call(Tf, l) ? !0 : Ve.call(Ef, l) ? !1 : Om.test(l) ? Tf[l] = !0 : (Ef[l] = !0, !1);
  }
  function Dn(l, t, a) {
    if (Dm(t)) if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
          l.removeAttribute(t);
          return;
        case "boolean":
          var u = t.toLowerCase().slice(0, 5);
          if (u !== "data-" && u !== "aria-") {
            l.removeAttribute(t);
            return;
          }
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Un(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Ut(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  function it(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function _f(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Um(l, t, a) {
    var u = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var n = u.get, e = u.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          a = "" + i, e.call(this, i);
        }
      }), Object.defineProperty(l, t, { enumerable: u.enumerable }), {
        getValue: function() {
          return a;
        },
        setValue: function(i) {
          a = "" + i;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Fe(l) {
    if (!l._valueTracker) {
      var t = _f(l) ? "checked" : "value";
      l._valueTracker = Um(l, t, "" + l[t]);
    }
  }
  function pf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), u = "";
    return l && (u = _f(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), !0) : !1;
  }
  function rn(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var rm = /[\n"\\]/g;
  function ct(l) {
    return l.replace(rm, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function ke(l, t, a, u, n, e, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + it(t)) : l.value !== "" + it(t) && (l.value = "" + it(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? Ie(l, i, it(t)) : a != null ? Ie(l, i, it(a)) : u != null && l.removeAttribute("value"), n == null && e != null && (l.defaultChecked = !!e), n != null && (l.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + it(c) : l.removeAttribute("name");
  }
  function Mf(l, t, a, u, n, e, i, c) {
    if (e != null && typeof e != "function" && typeof e != "symbol" && typeof e != "boolean" && (l.type = e), t != null || a != null) {
      if (!(e !== "submit" && e !== "reset" || t != null)) {
        Fe(l);
        return;
      }
      a = a != null ? "" + it(a) : "", t = t != null ? "" + it(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    u = u ?? n, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = c ? l.checked : !!u, l.defaultChecked = !!u, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), Fe(l);
  }
  function Ie(l, t, a) {
    t === "number" && rn(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function Ja(l, t, a, u) {
    if (l = l.options, t) {
      t = {};
      for (var n = 0; n < a.length; n++) t["$" + a[n]] = !0;
      for (a = 0; a < l.length; a++) n = t.hasOwnProperty("$" + l[a].value), l[a].selected !== n && (l[a].selected = n), n && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + it(a), t = null, n = 0; n < l.length; n++) {
        if (l[n].value === a) {
          l[n].selected = !0, u && (l[n].defaultSelected = !0);
          return;
        }
        t !== null || l[n].disabled || (t = l[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Of(l, t, a) {
    if (t != null && (t = "" + it(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + it(a) : "";
  }
  function Df(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(o(92));
        if (U(u)) {
          if (1 < u.length) throw Error(o(93));
          u = u[0];
        }
        a = u;
      }
      a ??= "", t = a;
    }
    a = it(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u), Fe(l);
  }
  function wa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Hm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Uf(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || Hm.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function rf(l, t, a) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (l = l.style, a != null) {
      for (var u in a) !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
      for (var n in t) u = t[n], t.hasOwnProperty(n) && a[n] !== u && Uf(l, n, u);
    } else for (var e in t) t.hasOwnProperty(e) && Uf(l, e, t[e]);
  }
  function Pe(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var Nm = /* @__PURE__ */ new Map([
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
  ]), Cm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Hn(l) {
    return Cm.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function rt() {
  }
  var li = null;
  function ti(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Wa = null, $a = null;
  function Hf(l) {
    var t = Va(l);
    if (t && (l = t.stateNode)) {
      var a = l[Gl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (ke(l, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll('input[name="' + ct("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var n = u[Gl] || null;
                if (!n) throw Error(o(90));
                ke(u, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
              }
            }
            for (t = 0; t < a.length; t++) u = a[t], u.form === l.form && pf(u);
          }
          break l;
        case "textarea":
          Of(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && Ja(l, !!a.multiple, t, !1);
      }
    }
  }
  var ai = !1;
  function Nf(l, t, a) {
    if (ai) return l(t, a);
    ai = !0;
    try {
      return l(t);
    } finally {
      if (ai = !1, (Wa !== null || $a !== null) && (Se(), Wa && (t = Wa, l = $a, $a = Wa = null, Hf(t), l)))
        for (t = 0; t < l.length; t++) Hf(l[t]);
    }
  }
  function Nu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Gl] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
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
        (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !u;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(o(231, t, typeof a));
    return a;
  }
  var Ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ui = !1;
  if (Ht) try {
    var Cu = {};
    Object.defineProperty(Cu, "passive", { get: function() {
      ui = !0;
    } }), window.addEventListener("test", Cu, Cu), window.removeEventListener("test", Cu, Cu);
  } catch {
    ui = !1;
  }
  var kt = null, ni = null, Nn = null;
  function Cf() {
    if (Nn) return Nn;
    var l, t = ni, a = t.length, u, n = "value" in kt ? kt.value : kt.textContent, e = n.length;
    for (l = 0; l < a && t[l] === n[l]; l++) ;
    var i = a - l;
    for (u = 1; u <= i && t[a - u] === n[e - u]; u++) ;
    return Nn = n.slice(l, 1 < u ? 1 - u : void 0);
  }
  function Cn(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Rn() {
    return !0;
  }
  function Rf() {
    return !1;
  }
  function Ql(l) {
    function t(a, u, n, e, i) {
      this._reactName = a, this._targetInst = n, this.type = u, this.nativeEvent = e, this.target = i, this.currentTarget = null;
      for (var c in l) l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(e) : e[c]);
      return this.isDefaultPrevented = (e.defaultPrevented != null ? e.defaultPrevented : e.returnValue === !1) ? Rn : Rf, this.isPropagationStopped = Rf, this;
    }
    return O(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Rn);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Rn);
      },
      persist: function() {
      },
      isPersistent: Rn
    }), t;
  }
  var _a = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, qn = Ql(_a), Ru = O({}, _a, {
    view: 0,
    detail: 0
  }), Rm = Ql(Ru), ei, ii, qu, Bn = O({}, Ru, {
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
    getModifierState: fi,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== qu && (qu && l.type === "mousemove" ? (ei = l.screenX - qu.screenX, ii = l.screenY - qu.screenY) : ii = ei = 0, qu = l), ei);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ii;
    }
  }), qf = Ql(Bn), qm = Ql(O({}, Bn, { dataTransfer: 0 })), ci = Ql(O({}, Ru, { relatedTarget: 0 })), Bm = Ql(O({}, _a, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), jm = Ql(O({}, _a, { clipboardData: function(l) {
    return "clipboardData" in l ? l.clipboardData : window.clipboardData;
  } })), Bf = Ql(O({}, _a, { data: 0 })), Ym = {
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
  }, Gm = {
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
  }, Qm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Xm(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Qm[l]) ? !!t[l] : !1;
  }
  function fi() {
    return Xm;
  }
  var Zm = Ql(O({}, Ru, {
    key: function(l) {
      if (l.key) {
        var t = Ym[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Cn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Gm[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fi,
    charCode: function(l) {
      return l.type === "keypress" ? Cn(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Cn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  })), jf = Ql(O({}, Bn, {
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
  })), Lm = Ql(O({}, Ru, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fi
  })), Vm = Ql(O({}, _a, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), xm = Ql(O({}, Bn, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  })), Km = Ql(O({}, _a, {
    newState: 0,
    oldState: 0
  })), Jm = [
    9,
    13,
    27,
    32
  ], si = Ht && "CompositionEvent" in window, Bu = null;
  Ht && "documentMode" in document && (Bu = document.documentMode);
  var wm = Ht && "TextEvent" in window && !Bu, Yf = Ht && (!si || Bu && 8 < Bu && 11 >= Bu), Gf = " ", Qf = !1;
  function Xf(l, t) {
    switch (l) {
      case "keyup":
        return Jm.indexOf(t.keyCode) !== -1;
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
  function Zf(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Fa = !1;
  function Wm(l, t) {
    switch (l) {
      case "compositionend":
        return Zf(t);
      case "keypress":
        return t.which !== 32 ? null : (Qf = !0, Gf);
      case "textInput":
        return l = t.data, l === Gf && Qf ? null : l;
      default:
        return null;
    }
  }
  function $m(l, t) {
    if (Fa) return l === "compositionend" || !si && Xf(l, t) ? (l = Cf(), Nn = ni = kt = null, Fa = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Yf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Fm = {
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
  function Lf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Fm[l.type] : t === "textarea";
  }
  function Vf(l, t, a, u) {
    Wa ? $a ? $a.push(u) : $a = [u] : Wa = u, t = pe(t, "onChange"), 0 < t.length && (a = new qn("onChange", "change", null, a, u), l.push({
      event: a,
      listeners: t
    }));
  }
  var ju = null, Yu = null;
  function km(l) {
    Ts(l, 0);
  }
  function jn(l) {
    if (pf(Hu(l))) return l;
  }
  function xf(l, t) {
    if (l === "change") return t;
  }
  var Kf = !1;
  if (Ht) {
    var mi;
    if (Ht) {
      var yi = "oninput" in document;
      if (!yi) {
        var Jf = document.createElement("div");
        Jf.setAttribute("oninput", "return;"), yi = typeof Jf.oninput == "function";
      }
      mi = yi;
    } else mi = !1;
    Kf = mi && (!document.documentMode || 9 < document.documentMode);
  }
  function wf() {
    ju && (ju.detachEvent("onpropertychange", Wf), Yu = ju = null);
  }
  function Wf(l) {
    if (l.propertyName === "value" && jn(Yu)) {
      var t = [];
      Vf(t, Yu, l, ti(l)), Nf(km, t);
    }
  }
  function Im(l, t, a) {
    l === "focusin" ? (wf(), ju = t, Yu = a, ju.attachEvent("onpropertychange", Wf)) : l === "focusout" && wf();
  }
  function Pm(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return jn(Yu);
  }
  function ly(l, t) {
    if (l === "click") return jn(t);
  }
  function ty(l, t) {
    if (l === "input" || l === "change") return jn(t);
  }
  function ay(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var lt = typeof Object.is == "function" ? Object.is : ay;
  function Gu(l, t) {
    if (lt(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
    var a = Object.keys(l), u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var n = a[u];
      if (!Ve.call(t, n) || !lt(l[n], t[n])) return !1;
    }
    return !0;
  }
  function $f(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Ff(l, t) {
    var a = $f(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (u = l + a.textContent.length, l <= t && u >= t) return {
          node: a,
          offset: t - l
        };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = $f(a);
    }
  }
  function kf(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? kf(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function If(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = rn(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = rn(l.document);
    }
    return t;
  }
  function di(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var uy = Ht && "documentMode" in document && 11 >= document.documentMode, ka = null, vi = null, Qu = null, oi = !1;
  function Pf(l, t, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    oi || ka == null || ka !== rn(u) || (u = ka, "selectionStart" in u && di(u) ? u = {
      start: u.selectionStart,
      end: u.selectionEnd
    } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Qu && Gu(Qu, u) || (Qu = u, u = pe(vi, "onSelect"), 0 < u.length && (t = new qn("onSelect", "select", null, t, a), l.push({
      event: t,
      listeners: u
    }), t.target = ka)));
  }
  function pa(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var Ia = {
    animationend: pa("Animation", "AnimationEnd"),
    animationiteration: pa("Animation", "AnimationIteration"),
    animationstart: pa("Animation", "AnimationStart"),
    transitionrun: pa("Transition", "TransitionRun"),
    transitionstart: pa("Transition", "TransitionStart"),
    transitioncancel: pa("Transition", "TransitionCancel"),
    transitionend: pa("Transition", "TransitionEnd")
  }, hi = {}, l0 = {};
  Ht && (l0 = document.createElement("div").style, "AnimationEvent" in window || (delete Ia.animationend.animation, delete Ia.animationiteration.animation, delete Ia.animationstart.animation), "TransitionEvent" in window || delete Ia.transitionend.transition);
  function Ma(l) {
    if (hi[l]) return hi[l];
    if (!Ia[l]) return l;
    var t = Ia[l], a;
    for (a in t) if (t.hasOwnProperty(a) && a in l0) return hi[l] = t[a];
    return l;
  }
  var t0 = Ma("animationend"), a0 = Ma("animationiteration"), u0 = Ma("animationstart"), ny = Ma("transitionrun"), ey = Ma("transitionstart"), iy = Ma("transitioncancel"), n0 = Ma("transitionend"), e0 = /* @__PURE__ */ new Map(), gi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  gi.push("scrollEnd");
  function zt(l, t) {
    e0.set(l, t), Ta(t, [l]);
  }
  var Yn = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, ft = [], Pa = 0, Si = 0;
  function Gn() {
    for (var l = Pa, t = Si = Pa = 0; t < l; ) {
      var a = ft[t];
      ft[t++] = null;
      var u = ft[t];
      ft[t++] = null;
      var n = ft[t];
      ft[t++] = null;
      var e = ft[t];
      if (ft[t++] = null, u !== null && n !== null) {
        var i = u.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), u.pending = n;
      }
      e !== 0 && i0(a, n, e);
    }
  }
  function Qn(l, t, a, u) {
    ft[Pa++] = l, ft[Pa++] = t, ft[Pa++] = a, ft[Pa++] = u, Si |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
  }
  function bi(l, t, a, u) {
    return Qn(l, t, a, u), Xn(l);
  }
  function Oa(l, t) {
    return Qn(l, null, null, t), Xn(l);
  }
  function i0(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var n = !1, e = l.return; e !== null; ) e.childLanes |= a, u = e.alternate, u !== null && (u.childLanes |= a), e.tag === 22 && (l = e.stateNode, l === null || l._visibility & 1 || (n = !0)), l = e, e = e.return;
    return l.tag === 3 ? (e = l.stateNode, n && t !== null && (n = 31 - Pl(a), l = e.hiddenUpdates, u = l[n], u === null ? l[n] = [t] : u.push(t), t.lane = a | 536870912), e) : null;
  }
  function Xn(l) {
    if (50 < fn) throw fn = 0, Dc = null, Error(o(185));
    for (var t = l.return; t !== null; ) l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var lu = {};
  function cy(l, t, a, u) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function tt(l, t, a, u) {
    return new cy(l, t, a, u);
  }
  function zi(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Nt(l, t) {
    var a = l.alternate;
    return a === null ? (a = tt(l.tag, t, l.key, l.mode), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function c0(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Zn(l, t, a, u, n, e) {
    var i = 0;
    if (u = l, typeof l == "function") zi(l) && (i = 1);
    else if (typeof l == "string") i = vd(l, a, C.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else l: switch (l) {
      case Tt:
        return l = tt(31, a, t, n), l.elementType = Tt, l.lanes = e, l;
      case Kl:
        return Da(a.children, n, e, t);
      case wt:
        i = 8, n |= 24;
        break;
      case Jl:
        return l = tt(12, a, t, n | 2), l.elementType = Jl, l.lanes = e, l;
      case wl:
        return l = tt(13, a, t, n), l.elementType = wl, l.lanes = e, l;
      case Wl:
        return l = tt(19, a, t, n), l.elementType = Wl, l.lanes = e, l;
      default:
        if (typeof l == "object" && l !== null) switch (l.$$typeof) {
          case Ol:
            i = 10;
            break l;
          case Wt:
            i = 9;
            break l;
          case St:
            i = 11;
            break l;
          case I:
            i = 14;
            break l;
          case Yl:
            i = 16, u = null;
            break l;
        }
        i = 29, a = Error(o(130, l === null ? "null" : typeof l, "")), u = null;
    }
    return t = tt(i, a, t, n), t.elementType = l, t.type = u, t.lanes = e, t;
  }
  function Da(l, t, a, u) {
    return l = tt(7, l, u, t), l.lanes = a, l;
  }
  function Ai(l, t, a) {
    return l = tt(6, l, null, t), l.lanes = a, l;
  }
  function f0(l) {
    var t = tt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Ei(l, t, a) {
    return t = tt(4, l.children !== null ? l.children : [], l.key, t), t.lanes = a, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var s0 = /* @__PURE__ */ new WeakMap();
  function st(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = s0.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: cf(t)
      }, s0.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: cf(t)
    };
  }
  var tu = [], au = 0, Ln = null, Xu = 0, mt = [], yt = 0, It = null, pt = 1, Mt = "";
  function Ct(l, t) {
    tu[au++] = Xu, tu[au++] = Ln, Ln = l, Xu = t;
  }
  function m0(l, t, a) {
    mt[yt++] = pt, mt[yt++] = Mt, mt[yt++] = It, It = l;
    var u = pt;
    l = Mt;
    var n = 32 - Pl(u) - 1;
    u &= ~(1 << n), a += 1;
    var e = 32 - Pl(t) + n;
    if (30 < e) {
      var i = n - n % 5;
      e = (u & (1 << i) - 1).toString(32), u >>= i, n -= i, pt = 1 << 32 - Pl(t) + n | a << n | u, Mt = e + l;
    } else pt = 1 << e | a << n | u, Mt = l;
  }
  function Ti(l) {
    l.return !== null && (Ct(l, 1), m0(l, 1, 0));
  }
  function _i(l) {
    for (; l === Ln; ) Ln = tu[--au], tu[au] = null, Xu = tu[--au], tu[au] = null;
    for (; l === It; ) It = mt[--yt], mt[yt] = null, Mt = mt[--yt], mt[yt] = null, pt = mt[--yt], mt[yt] = null;
  }
  function y0(l, t) {
    mt[yt++] = pt, mt[yt++] = Mt, mt[yt++] = It, pt = t.id, Mt = t.overflow, It = l;
  }
  var Hl = null, dl = null, k = !1, Pt = null, dt = !1, pi = Error(o(519));
  function la(l) {
    throw Zu(st(Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), l)), pi;
  }
  function d0(l) {
    var t = l.stateNode, a = l.type, u = l.memoizedProps;
    switch (t[rl] = l, t[Gl] = u, a) {
      case "dialog":
        w("cancel", t), w("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        w("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < mn.length; a++) w(mn[a], t);
        break;
      case "source":
        w("error", t);
        break;
      case "img":
      case "image":
      case "link":
        w("error", t), w("load", t);
        break;
      case "details":
        w("toggle", t);
        break;
      case "input":
        w("invalid", t), Mf(t, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, !0);
        break;
      case "select":
        w("invalid", t);
        break;
      case "textarea":
        w("invalid", t), Df(t, u.value, u.defaultValue, u.children);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || Ds(t.textContent, a) ? (u.popover != null && (w("beforetoggle", t), w("toggle", t)), u.onScroll != null && w("scroll", t), u.onScrollEnd != null && w("scrollend", t), u.onClick != null && (t.onclick = rt), t = !0) : t = !1, t || la(l, !0);
  }
  function v0(l) {
    for (Hl = l.return; Hl; ) switch (Hl.tag) {
      case 5:
      case 31:
      case 13:
        dt = !1;
        return;
      case 27:
      case 3:
        dt = !0;
        return;
      default:
        Hl = Hl.return;
    }
  }
  function uu(l) {
    if (l !== Hl) return !1;
    if (!k) return v0(l), k = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Zc(l.type, l.memoizedProps)), a = !a), a && dl && la(l), v0(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      dl = js(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      dl = js(l);
    } else t === 27 ? (t = dl, da(l.type) ? (l = Jc, Jc = null, dl = l) : dl = t) : dl = Hl ? ht(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ua() {
    dl = Hl = null, k = !1;
  }
  function Mi() {
    var l = Pt;
    return l !== null && (Vl === null ? Vl = l : Vl.push.apply(Vl, l), Pt = null), l;
  }
  function Zu(l) {
    Pt === null ? Pt = [l] : Pt.push(l);
  }
  var Oi = m(null), ra = null, Rt = null;
  function ta(l, t, a) {
    M(Oi, t._currentValue), t._currentValue = a;
  }
  function qt(l) {
    l._currentValue = Oi.current, E(Oi);
  }
  function Di(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function Ui(l, t, a, u) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null; ) {
      var e = n.dependencies;
      if (e !== null) {
        var i = n.child;
        e = e.firstContext;
        l: for (; e !== null; ) {
          var c = e;
          e = n;
          for (var f = 0; f < t.length; f++) if (c.context === t[f]) {
            e.lanes |= a, c = e.alternate, c !== null && (c.lanes |= a), Di(e.return, a, l), u || (i = null);
            break l;
          }
          e = c.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(o(341));
        i.lanes |= a, e = i.alternate, e !== null && (e.lanes |= a), Di(i, a, l), i = null;
      } else i = n.child;
      if (i !== null) i.return = n;
      else for (i = n; i !== null; ) {
        if (i === l) {
          i = null;
          break;
        }
        if (n = i.sibling, n !== null) {
          n.return = i.return, i = n;
          break;
        }
        i = i.return;
      }
      n = i;
    }
  }
  function nu(l, t, a, u) {
    l = null;
    for (var n = t, e = !1; n !== null; ) {
      if (!e) {
        if ((n.flags & 524288) !== 0) e = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(o(387));
        if (i = i.memoizedProps, i !== null) {
          var c = n.type;
          lt(n.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (n === ul.current) {
        if (i = n.alternate, i === null) throw Error(o(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (l !== null ? l.push(hn) : l = [hn]);
      }
      n = n.return;
    }
    l !== null && Ui(t, l, a, u), t.flags |= 262144;
  }
  function Vn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!lt(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ha(l) {
    ra = l, Rt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Nl(l) {
    return o0(ra, l);
  }
  function xn(l, t) {
    return ra === null && Ha(l), o0(l, t);
  }
  function o0(l, t) {
    var a = t._currentValue;
    if (t = {
      context: t,
      memoizedValue: a,
      next: null
    }, Rt === null) {
      if (l === null) throw Error(o(308));
      Rt = t, l.dependencies = {
        lanes: 0,
        firstContext: t
      }, l.flags |= 524288;
    } else Rt = Rt.next = t;
    return a;
  }
  var fy = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, u) {
        l.push(u);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(a) {
        return a();
      });
    };
  }, sy = p.unstable_scheduleCallback, my = p.unstable_NormalPriority, El = {
    $$typeof: Ol,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ri() {
    return {
      controller: new fy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Lu(l) {
    l.refCount--, l.refCount === 0 && sy(my, function() {
      l.controller.abort();
    });
  }
  var Vu = null, Hi = 0, eu = 0, iu = null;
  function yy(l, t) {
    if (Vu === null) {
      var a = Vu = [];
      Hi = 0, eu = Rc(), iu = {
        status: "pending",
        value: void 0,
        then: function(u) {
          a.push(u);
        }
      };
    }
    return Hi++, t.then(h0, h0), t;
  }
  function h0() {
    if (--Hi === 0 && Vu !== null) {
      iu !== null && (iu.status = "fulfilled");
      var l = Vu;
      Vu = null, eu = 0, iu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function dy(l, t) {
    var a = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        a.push(n);
      }
    };
    return l.then(function() {
      u.status = "fulfilled", u.value = t;
      for (var n = 0; n < a.length; n++) (0, a[n])(t);
    }, function(n) {
      for (u.status = "rejected", u.reason = n, n = 0; n < a.length; n++) (0, a[n])(void 0);
    }), u;
  }
  var g0 = _.S;
  _.S = function(l, t) {
    F1 = kl(), typeof t == "object" && t !== null && typeof t.then == "function" && yy(l, t), g0 !== null && g0(l, t);
  };
  var Na = m(null);
  function Ni() {
    var l = Na.current;
    return l !== null ? l : ml.pooledCache;
  }
  function Kn(l, t) {
    t === null ? M(Na, Na.current) : M(Na, t.pool);
  }
  function S0() {
    var l = Ni();
    return l === null ? null : {
      parent: El._currentValue,
      pool: l
    };
  }
  var cu = Error(o(460)), Ci = Error(o(474)), Jn = Error(o(542)), wn = { then: function() {
  } };
  function b0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function z0(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(rt, rt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, E0(l), l;
      default:
        if (typeof t.status == "string") t.then(rt, rt);
        else {
          if (l = ml, l !== null && 100 < l.shellSuspendCounter) throw Error(o(482));
          l = t, l.status = "pending", l.then(function(u) {
            if (t.status === "pending") {
              var n = t;
              n.status = "fulfilled", n.value = u;
            }
          }, function(u) {
            if (t.status === "pending") {
              var n = t;
              n.status = "rejected", n.reason = u;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, E0(l), l;
        }
        throw Ra = t, cu;
    }
  }
  function Ca(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ra = a, cu) : a;
    }
  }
  var Ra = null;
  function A0() {
    if (Ra === null) throw Error(o(459));
    var l = Ra;
    return Ra = null, l;
  }
  function E0(l) {
    if (l === cu || l === Jn) throw Error(o(483));
  }
  var fu = null, xu = 0;
  function Wn(l) {
    var t = xu;
    return xu += 1, fu === null && (fu = []), z0(fu, l, t);
  }
  function Ku(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function $n(l, t) {
    throw t.$$typeof === il ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(o(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
  }
  function T0(l) {
    function t(d, s) {
      if (l) {
        var v = d.deletions;
        v === null ? (d.deletions = [s], d.flags |= 16) : v.push(s);
      }
    }
    function a(d, s) {
      if (!l) return null;
      for (; s !== null; ) t(d, s), s = s.sibling;
      return null;
    }
    function u(d) {
      for (var s = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? s.set(d.key, d) : s.set(d.index, d), d = d.sibling;
      return s;
    }
    function n(d, s) {
      return d = Nt(d, s), d.index = 0, d.sibling = null, d;
    }
    function e(d, s, v) {
      return d.index = v, l ? (v = d.alternate, v !== null ? (v = v.index, v < s ? (d.flags |= 67108866, s) : v) : (d.flags |= 67108866, s)) : (d.flags |= 1048576, s);
    }
    function i(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function c(d, s, v, z) {
      return s === null || s.tag !== 6 ? (s = Ai(v, d.mode, z), s.return = d, s) : (s = n(s, v), s.return = d, s);
    }
    function f(d, s, v, z) {
      var q = v.type;
      return q === Kl ? b(d, s, v.props.children, z, v.key) : s !== null && (s.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Yl && Ca(q) === s.type) ? (s = n(s, v.props), Ku(s, v), s.return = d, s) : (s = Zn(v.type, v.key, v.props, null, d.mode, z), Ku(s, v), s.return = d, s);
    }
    function h(d, s, v, z) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== v.containerInfo || s.stateNode.implementation !== v.implementation ? (s = Ei(v, d.mode, z), s.return = d, s) : (s = n(s, v.children || []), s.return = d, s);
    }
    function b(d, s, v, z, q) {
      return s === null || s.tag !== 7 ? (s = Da(v, d.mode, z, q), s.return = d, s) : (s = n(s, v), s.return = d, s);
    }
    function A(d, s, v) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint") return s = Ai("" + s, d.mode, v), s.return = d, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Sl:
            return v = Zn(s.type, s.key, s.props, null, d.mode, v), Ku(v, s), v.return = d, v;
          case ql:
            return s = Ei(s, d.mode, v), s.return = d, s;
          case Yl:
            return s = Ca(s), A(d, s, v);
        }
        if (U(s) || _t(s)) return s = Da(s, d.mode, v, null), s.return = d, s;
        if (typeof s.then == "function") return A(d, Wn(s), v);
        if (s.$$typeof === Ol) return A(d, xn(d, s), v);
        $n(d, s);
      }
      return null;
    }
    function g(d, s, v, z) {
      var q = s !== null ? s.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return q !== null ? null : c(d, s, "" + v, z);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Sl:
            return v.key === q ? f(d, s, v, z) : null;
          case ql:
            return v.key === q ? h(d, s, v, z) : null;
          case Yl:
            return v = Ca(v), g(d, s, v, z);
        }
        if (U(v) || _t(v)) return q !== null ? null : b(d, s, v, z, null);
        if (typeof v.then == "function") return g(d, s, Wn(v), z);
        if (v.$$typeof === Ol) return g(d, s, xn(d, v), z);
        $n(d, v);
      }
      return null;
    }
    function S(d, s, v, z, q) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint") return d = d.get(v) || null, c(s, d, "" + z, q);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Sl:
            return d = d.get(z.key === null ? v : z.key) || null, f(s, d, z, q);
          case ql:
            return d = d.get(z.key === null ? v : z.key) || null, h(s, d, z, q);
          case Yl:
            return z = Ca(z), S(d, s, v, z, q);
        }
        if (U(z) || _t(z)) return d = d.get(v) || null, b(s, d, z, q, null);
        if (typeof z.then == "function") return S(d, s, v, Wn(z), q);
        if (z.$$typeof === Ol) return S(d, s, v, xn(s, z), q);
        $n(s, z);
      }
      return null;
    }
    function H(d, s, v, z) {
      for (var q = null, P = null, N = s, Z = s = 0, F = null; N !== null && Z < v.length; Z++) {
        N.index > Z ? (F = N, N = null) : F = N.sibling;
        var ll = g(d, N, v[Z], z);
        if (ll === null) {
          N === null && (N = F);
          break;
        }
        l && N && ll.alternate === null && t(d, N), s = e(ll, s, Z), P === null ? q = ll : P.sibling = ll, P = ll, N = F;
      }
      if (Z === v.length) return a(d, N), k && Ct(d, Z), q;
      if (N === null) {
        for (; Z < v.length; Z++) N = A(d, v[Z], z), N !== null && (s = e(N, s, Z), P === null ? q = N : P.sibling = N, P = N);
        return k && Ct(d, Z), q;
      }
      for (N = u(N); Z < v.length; Z++) F = S(N, d, Z, v[Z], z), F !== null && (l && F.alternate !== null && N.delete(F.key === null ? Z : F.key), s = e(F, s, Z), P === null ? q = F : P.sibling = F, P = F);
      return l && N.forEach(function(Sa) {
        return t(d, Sa);
      }), k && Ct(d, Z), q;
    }
    function j(d, s, v, z) {
      if (v == null) throw Error(o(151));
      for (var q = null, P = null, N = s, Z = s = 0, F = null, ll = v.next(); N !== null && !ll.done; Z++, ll = v.next()) {
        N.index > Z ? (F = N, N = null) : F = N.sibling;
        var Sa = g(d, N, ll.value, z);
        if (Sa === null) {
          N === null && (N = F);
          break;
        }
        l && N && Sa.alternate === null && t(d, N), s = e(Sa, s, Z), P === null ? q = Sa : P.sibling = Sa, P = Sa, N = F;
      }
      if (ll.done) return a(d, N), k && Ct(d, Z), q;
      if (N === null) {
        for (; !ll.done; Z++, ll = v.next()) ll = A(d, ll.value, z), ll !== null && (s = e(ll, s, Z), P === null ? q = ll : P.sibling = ll, P = ll);
        return k && Ct(d, Z), q;
      }
      for (N = u(N); !ll.done; Z++, ll = v.next()) ll = S(N, d, Z, ll.value, z), ll !== null && (l && ll.alternate !== null && N.delete(ll.key === null ? Z : ll.key), s = e(ll, s, Z), P === null ? q = ll : P.sibling = ll, P = ll);
      return l && N.forEach(function(Dd) {
        return t(d, Dd);
      }), k && Ct(d, Z), q;
    }
    function sl(d, s, v, z) {
      if (typeof v == "object" && v !== null && v.type === Kl && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Sl:
            l: {
              for (var q = v.key; s !== null; ) {
                if (s.key === q) {
                  if (q = v.type, q === Kl) {
                    if (s.tag === 7) {
                      a(d, s.sibling), z = n(s, v.props.children), z.return = d, d = z;
                      break l;
                    }
                  } else if (s.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Yl && Ca(q) === s.type) {
                    a(d, s.sibling), z = n(s, v.props), Ku(z, v), z.return = d, d = z;
                    break l;
                  }
                  a(d, s);
                  break;
                } else t(d, s);
                s = s.sibling;
              }
              v.type === Kl ? (z = Da(v.props.children, d.mode, z, v.key), z.return = d, d = z) : (z = Zn(v.type, v.key, v.props, null, d.mode, z), Ku(z, v), z.return = d, d = z);
            }
            return i(d);
          case ql:
            l: {
              for (q = v.key; s !== null; ) {
                if (s.key === q) if (s.tag === 4 && s.stateNode.containerInfo === v.containerInfo && s.stateNode.implementation === v.implementation) {
                  a(d, s.sibling), z = n(s, v.children || []), z.return = d, d = z;
                  break l;
                } else {
                  a(d, s);
                  break;
                }
                else t(d, s);
                s = s.sibling;
              }
              z = Ei(v, d.mode, z), z.return = d, d = z;
            }
            return i(d);
          case Yl:
            return v = Ca(v), sl(d, s, v, z);
        }
        if (U(v)) return H(d, s, v, z);
        if (_t(v)) {
          if (q = _t(v), typeof q != "function") throw Error(o(150));
          return v = q.call(v), j(d, s, v, z);
        }
        if (typeof v.then == "function") return sl(d, s, Wn(v), z);
        if (v.$$typeof === Ol) return sl(d, s, xn(d, v), z);
        $n(d, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, s !== null && s.tag === 6 ? (a(d, s.sibling), z = n(s, v), z.return = d, d = z) : (a(d, s), z = Ai(v, d.mode, z), z.return = d, d = z), i(d)) : a(d, s);
    }
    return function(d, s, v, z) {
      try {
        xu = 0;
        var q = sl(d, s, v, z);
        return fu = null, q;
      } catch (N) {
        if (N === cu || N === Jn) throw N;
        var P = tt(29, N, null, d.mode);
        return P.lanes = z, P.return = d, P;
      }
    };
  }
  var qa = T0(!0), _0 = T0(!1), aa = !1;
  function Ri(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
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
  function qi(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Ba(l) {
    return {
      lane: l,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function ja(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (al & 2) !== 0) {
      var n = u.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), u.pending = t, t = Xn(l), i0(l, null, a), t;
    }
    return Qn(l, u, t, a), Xn(l);
  }
  function Ju(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, vf(l, a);
    }
  }
  function Bi(l, t) {
    var a = l.updateQueue, u = l.alternate;
    if (u !== null && (u = u.updateQueue, a === u)) {
      var n = null, e = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          e === null ? n = e = i : e = e.next = i, a = a.next;
        } while (a !== null);
        e === null ? n = e = t : e = e.next = t;
      } else n = e = t;
      a = {
        baseState: u.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: e,
        shared: u.shared,
        callbacks: u.callbacks
      }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var ji = !1;
  function wu() {
    if (ji) {
      var l = iu;
      if (l !== null) throw l;
    }
  }
  function Wu(l, t, a, u) {
    ji = !1;
    var n = l.updateQueue;
    aa = !1;
    var e = n.firstBaseUpdate, i = n.lastBaseUpdate, c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var f = c, h = f.next;
      f.next = null, i === null ? e = h : i.next = h, i = f;
      var b = l.alternate;
      b !== null && (b = b.updateQueue, c = b.lastBaseUpdate, c !== i && (c === null ? b.firstBaseUpdate = h : c.next = h, b.lastBaseUpdate = f));
    }
    if (e !== null) {
      var A = n.baseState;
      i = 0, b = h = f = null, c = e;
      do {
        var g = c.lane & -536870913, S = g !== c.lane;
        if (S ? ($ & g) === g : (u & g) === g) {
          g !== 0 && g === eu && (ji = !0), b !== null && (b = b.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var H = l, j = c;
            g = t;
            var sl = a;
            switch (j.tag) {
              case 1:
                if (H = j.payload, typeof H == "function") {
                  A = H.call(sl, A, g);
                  break l;
                }
                A = H;
                break l;
              case 3:
                H.flags = H.flags & -65537 | 128;
              case 0:
                if (H = j.payload, g = typeof H == "function" ? H.call(sl, A, g) : H, g == null) break l;
                A = O({}, A, g);
                break l;
              case 2:
                aa = !0;
            }
          }
          g = c.callback, g !== null && (l.flags |= 64, S && (l.flags |= 8192), S = n.callbacks, S === null ? n.callbacks = [g] : S.push(g));
        } else S = {
          lane: g,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        }, b === null ? (h = b = S, f = A) : b = b.next = S, i |= g;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null) break;
          S = c, c = S.next, S.next = null, n.lastBaseUpdate = S, n.shared.pending = null;
        }
      } while (!0);
      b === null && (f = A), n.baseState = f, n.firstBaseUpdate = h, n.lastBaseUpdate = b, e === null && (n.shared.lanes = 0), ca |= i, l.lanes = i, l.memoizedState = A;
    }
  }
  function p0(l, t) {
    if (typeof l != "function") throw Error(o(191, l));
    l.call(t);
  }
  function M0(l, t) {
    var a = l.callbacks;
    if (a !== null) for (l.callbacks = null, l = 0; l < a.length; l++) p0(a[l], t);
  }
  var su = m(null), Fn = m(0);
  function O0(l, t) {
    l = Vt, M(Fn, l), M(su, t), Vt = l | t.baseLanes;
  }
  function Yi() {
    M(Fn, Vt), M(su, su.current);
  }
  function Gi() {
    Vt = Fn.current, E(su), E(Fn);
  }
  var at = m(null), vt = null;
  function ua(l) {
    var t = l.alternate;
    M(zl, zl.current & 1), M(at, l), vt === null && (t === null || su.current !== null || t.memoizedState !== null) && (vt = l);
  }
  function Qi(l) {
    M(zl, zl.current), M(at, l), vt === null && (vt = l);
  }
  function D0(l) {
    l.tag === 22 ? (M(zl, zl.current), M(at, l), vt === null && (vt = l)) : na(l);
  }
  function na() {
    M(zl, zl.current), M(at, at.current);
  }
  function ut(l) {
    E(at), vt === l && (vt = null), E(zl);
  }
  var zl = m(0);
  function kn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || xc(a) || Kc(a))) return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Bt = 0, X = null, cl = null, Tl = null, In = !1, mu = !1, Ya = !1, Pn = 0, $u = 0, yu = null, vy = 0;
  function hl() {
    throw Error(o(321));
  }
  function Xi(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++) if (!lt(l[a], t[a])) return !1;
    return !0;
  }
  function Zi(l, t, a, u, n, e) {
    return Bt = e, X = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _.H = l === null || l.memoizedState === null ? m1 : ac, Ya = !1, e = a(u, n), Ya = !1, mu && (e = r0(t, a, u, n)), U0(l), e;
  }
  function U0(l) {
    _.H = Iu;
    var t = cl !== null && cl.next !== null;
    if (Bt = 0, Tl = cl = X = null, In = !1, $u = 0, yu = null, t) throw Error(o(300));
    l === null || _l || (l = l.dependencies, l !== null && Vn(l) && (_l = !0));
  }
  function r0(l, t, a, u) {
    X = l;
    var n = 0;
    do {
      if (mu && (yu = null), $u = 0, mu = !1, 25 <= n) throw Error(o(301));
      if (n += 1, Tl = cl = null, l.updateQueue != null) {
        var e = l.updateQueue;
        e.lastEffect = null, e.events = null, e.stores = null, e.memoCache != null && (e.memoCache.index = 0);
      }
      _.H = y1, e = t(a, u);
    } while (mu);
    return e;
  }
  function oy() {
    var l = _.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Fu(t) : t, l = l.useState()[0], (cl !== null ? cl.memoizedState : null) !== l && (X.flags |= 1024), t;
  }
  function Li() {
    var l = Pn !== 0;
    return Pn = 0, l;
  }
  function Vi(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function xi(l) {
    if (In) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      In = !1;
    }
    Bt = 0, Tl = cl = X = null, mu = !1, $u = Pn = 0, yu = null;
  }
  function jl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Tl === null ? X.memoizedState = Tl = l : Tl = Tl.next = l, Tl;
  }
  function Al() {
    if (cl === null) {
      var l = X.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = cl.next;
    var t = Tl === null ? X.memoizedState : Tl.next;
    if (t !== null) Tl = t, cl = l;
    else {
      if (l === null)
        throw X.alternate === null ? Error(o(467)) : Error(o(310));
      cl = l, l = {
        memoizedState: cl.memoizedState,
        baseState: cl.baseState,
        baseQueue: cl.baseQueue,
        queue: cl.queue,
        next: null
      }, Tl === null ? X.memoizedState = Tl = l : Tl = Tl.next = l;
    }
    return Tl;
  }
  function le() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Fu(l) {
    var t = $u;
    return $u += 1, yu === null && (yu = []), l = z0(yu, l, t), t = X, (Tl === null ? t.memoizedState : Tl.next) === null && (t = t.alternate, _.H = t === null || t.memoizedState === null ? m1 : ac), l;
  }
  function te(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Fu(l);
      if (l.$$typeof === Ol) return Nl(l);
    }
    throw Error(o(438, String(l)));
  }
  function Ki(l) {
    var t = null, a = X.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var u = X.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
        data: u.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t ??= {
      data: [],
      index: 0
    }, a === null && (a = le(), X.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0) for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = za;
    return t.index++, a;
  }
  function jt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function ae(l) {
    return Ji(Al(), cl, l);
  }
  function Ji(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(o(311));
    u.lastRenderedReducer = a;
    var n = l.baseQueue, e = u.pending;
    if (e !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = e.next, e.next = i;
      }
      t.baseQueue = n = e, u.pending = null;
    }
    if (e = l.baseState, n === null) l.memoizedState = e;
    else {
      t = n.next;
      var c = i = null, f = null, h = t, b = !1;
      do {
        var A = h.lane & -536870913;
        if (A !== h.lane ? ($ & A) === A : (Bt & A) === A) {
          var g = h.revertLane;
          if (g === 0) f !== null && (f = f.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          }), A === eu && (b = !0);
          else if ((Bt & g) === g) {
            h = h.next, g === eu && (b = !0);
            continue;
          } else A = {
            lane: 0,
            revertLane: h.revertLane,
            gesture: null,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          }, f === null ? (c = f = A, i = e) : f = f.next = A, X.lanes |= g, ca |= g;
          A = h.action, Ya && a(e, A), e = h.hasEagerState ? h.eagerState : a(e, A);
        } else g = {
          lane: A,
          revertLane: h.revertLane,
          gesture: h.gesture,
          action: h.action,
          hasEagerState: h.hasEagerState,
          eagerState: h.eagerState,
          next: null
        }, f === null ? (c = f = g, i = e) : f = f.next = g, X.lanes |= A, ca |= A;
        h = h.next;
      } while (h !== null && h !== t);
      if (f === null ? i = e : f.next = c, !lt(e, l.memoizedState) && (_l = !0, b && (a = iu, a !== null))) throw a;
      l.memoizedState = e, l.baseState = i, l.baseQueue = f, u.lastRenderedState = e;
    }
    return n === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function wi(l) {
    var t = Al(), a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch, n = a.pending, e = t.memoizedState;
    if (n !== null) {
      a.pending = null;
      var i = n = n.next;
      do
        e = l(e, i.action), i = i.next;
      while (i !== n);
      lt(e, t.memoizedState) || (_l = !0), t.memoizedState = e, t.baseQueue === null && (t.baseState = e), a.lastRenderedState = e;
    }
    return [e, u];
  }
  function H0(l, t, a) {
    var u = X, n = Al(), e = k;
    if (e) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var i = !lt((cl || n).memoizedState, a);
    if (i && (n.memoizedState = a, _l = !0), n = n.queue, Fi(R0.bind(null, u, n, l), [l]), n.getSnapshot !== t || i || Tl !== null && Tl.memoizedState.tag & 1) {
      if (u.flags |= 2048, du(9, { destroy: void 0 }, C0.bind(null, u, n, a, t), null), ml === null) throw Error(o(349));
      e || (Bt & 127) !== 0 || N0(u, t, a);
    }
    return a;
  }
  function N0(l, t, a) {
    l.flags |= 16384, l = {
      getSnapshot: t,
      value: a
    }, t = X.updateQueue, t === null ? (t = le(), X.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function C0(l, t, a, u) {
    t.value = a, t.getSnapshot = u, q0(t) && B0(l);
  }
  function R0(l, t, a) {
    return a(function() {
      q0(t) && B0(l);
    });
  }
  function q0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !lt(l, a);
    } catch {
      return !0;
    }
  }
  function B0(l) {
    var t = Oa(l, 2);
    t !== null && xl(t, l, 2);
  }
  function Wi(l) {
    var t = jl();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), Ya) {
        $t(!0);
        try {
          a();
        } finally {
          $t(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: jt,
      lastRenderedState: l
    }, t;
  }
  function j0(l, t, a, u) {
    return l.baseState = a, Ji(l, cl, typeof u == "function" ? u : jt);
  }
  function hy(l, t, a, u, n) {
    if (ee(l)) throw Error(o(485));
    if (l = t.action, l !== null) {
      var e = {
        payload: n,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          e.listeners.push(i);
        }
      };
      _.T !== null ? a(!0) : e.isTransition = !1, u(e), a = t.pending, a === null ? (e.next = t.pending = e, Y0(t, e)) : (e.next = a.next, t.pending = a.next = e);
    }
  }
  function Y0(l, t) {
    var a = t.action, u = t.payload, n = l.state;
    if (t.isTransition) {
      var e = _.T, i = {};
      _.T = i;
      try {
        var c = a(n, u), f = _.S;
        f !== null && f(i, c), G0(l, t, c);
      } catch (h) {
        $i(l, t, h);
      } finally {
        e !== null && i.types !== null && (e.types = i.types), _.T = e;
      }
    } else try {
      e = a(n, u), G0(l, t, e);
    } catch (h) {
      $i(l, t, h);
    }
  }
  function G0(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(u) {
      Q0(l, t, u);
    }, function(u) {
      return $i(l, t, u);
    }) : Q0(l, t, a);
  }
  function Q0(l, t, a) {
    t.status = "fulfilled", t.value = a, X0(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, Y0(l, a)));
  }
  function $i(l, t, a) {
    var u = l.pending;
    if (l.pending = null, u !== null) {
      u = u.next;
      do
        t.status = "rejected", t.reason = a, X0(t), t = t.next;
      while (t !== u);
    }
    l.action = null;
  }
  function X0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Z0(l, t) {
    return t;
  }
  function L0(l, t) {
    if (k) {
      var a = ml.formState;
      if (a !== null) {
        l: {
          var u = X;
          if (k) {
            if (dl) {
              t: {
                for (var n = dl, e = dt; n.nodeType !== 8; ) {
                  if (!e) {
                    n = null;
                    break t;
                  }
                  if (n = ht(n.nextSibling), n === null) {
                    n = null;
                    break t;
                  }
                }
                e = n.data, n = e === "F!" || e === "F" ? n : null;
              }
              if (n) {
                dl = ht(n.nextSibling), u = n.data === "F!";
                break l;
              }
            }
            la(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return a = jl(), a.memoizedState = a.baseState = t, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Z0,
      lastRenderedState: t
    }, a.queue = u, a = c1.bind(null, X, u), u.dispatch = a, u = Wi(!1), e = tc.bind(null, X, !1, u.queue), u = jl(), n = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, u.queue = n, a = hy.bind(null, X, n, e, a), n.dispatch = a, u.memoizedState = l, [
      t,
      a,
      !1
    ];
  }
  function V0(l) {
    return x0(Al(), cl, l);
  }
  function x0(l, t, a) {
    if (t = Ji(l, t, Z0)[0], l = ae(jt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var u = Fu(t);
    } catch (i) {
      throw i === cu ? Jn : i;
    }
    else u = t;
    t = Al();
    var n = t.queue, e = n.dispatch;
    return a !== t.memoizedState && (X.flags |= 2048, du(9, { destroy: void 0 }, gy.bind(null, n, a), null)), [
      u,
      e,
      l
    ];
  }
  function gy(l, t) {
    l.action = t;
  }
  function K0(l) {
    var t = Al(), a = cl;
    if (a !== null) return x0(t, a, l);
    Al(), t = t.memoizedState, a = Al();
    var u = a.queue.dispatch;
    return a.memoizedState = l, [
      t,
      u,
      !1
    ];
  }
  function du(l, t, a, u) {
    return l = {
      tag: l,
      create: a,
      deps: u,
      inst: t,
      next: null
    }, t = X.updateQueue, t === null && (t = le(), X.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
  }
  function J0() {
    return Al().memoizedState;
  }
  function ue(l, t, a, u) {
    var n = jl();
    X.flags |= l, n.memoizedState = du(1 | t, { destroy: void 0 }, a, u === void 0 ? null : u);
  }
  function ne(l, t, a, u) {
    var n = Al();
    u = u === void 0 ? null : u;
    var e = n.memoizedState.inst;
    cl !== null && u !== null && Xi(u, cl.memoizedState.deps) ? n.memoizedState = du(t, e, a, u) : (X.flags |= l, n.memoizedState = du(1 | t, e, a, u));
  }
  function w0(l, t) {
    ue(8390656, 8, l, t);
  }
  function Fi(l, t) {
    ne(2048, 8, l, t);
  }
  function Sy(l) {
    X.flags |= 4;
    var t = X.updateQueue;
    if (t === null) t = le(), X.updateQueue = t, t.events = [l];
    else {
      var a = t.events;
      a === null ? t.events = [l] : a.push(l);
    }
  }
  function W0(l) {
    var t = Al().memoizedState;
    return Sy({
      ref: t,
      nextImpl: l
    }), function() {
      if ((al & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function $0(l, t) {
    return ne(4, 2, l, t);
  }
  function F0(l, t) {
    return ne(4, 4, l, t);
  }
  function k0(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null) return l = l(), t.current = l, function() {
      t.current = null;
    };
  }
  function I0(l, t, a) {
    a = a != null ? a.concat([l]) : null, ne(4, 4, k0.bind(null, t, l), a);
  }
  function ki() {
  }
  function P0(l, t) {
    var a = Al();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Xi(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l);
  }
  function l1(l, t) {
    var a = Al();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Xi(t, u[1])) return u[0];
    if (u = l(), Ya) {
      $t(!0);
      try {
        l();
      } finally {
        $t(!1);
      }
    }
    return a.memoizedState = [u, t], u;
  }
  function Ii(l, t, a) {
    return a === void 0 || (Bt & 1073741824) !== 0 && ($ & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = I1(), X.lanes |= l, ca |= l, a);
  }
  function t1(l, t, a, u) {
    return lt(a, t) ? a : su.current !== null ? (l = Ii(l, a, u), lt(l, t) || (_l = !0), l) : (Bt & 42) === 0 || (Bt & 1073741824) !== 0 && ($ & 261930) === 0 ? (_l = !0, l.memoizedState = a) : (l = I1(), X.lanes |= l, ca |= l, t);
  }
  function a1(l, t, a, u, n) {
    var e = D.p;
    D.p = e !== 0 && 8 > e ? e : 8;
    var i = _.T, c = {};
    _.T = c, tc(l, !1, t, a);
    try {
      var f = n(), h = _.S;
      h !== null && h(c, f), f !== null && typeof f == "object" && typeof f.then == "function" ? ku(l, t, dy(f, u), ot(l)) : ku(l, t, u, ot(l));
    } catch (b) {
      ku(l, t, {
        then: function() {
        },
        status: "rejected",
        reason: b
      }, ot());
    } finally {
      D.p = e, i !== null && c.types !== null && (i.types = c.types), _.T = i;
    }
  }
  function by() {
  }
  function Pi(l, t, a, u) {
    if (l.tag !== 5) throw Error(o(476));
    var n = u1(l).queue;
    a1(l, n, t, tl, a === null ? by : function() {
      return n1(l), a(u);
    });
  }
  function u1(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: tl,
      baseState: tl,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jt,
        lastRenderedState: tl
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
        lastRenderedReducer: jt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function n1(l) {
    var t = u1(l);
    t.next === null && (t = l.alternate.memoizedState), ku(l, t.next.queue, {}, ot());
  }
  function lc() {
    return Nl(hn);
  }
  function e1() {
    return Al().memoizedState;
  }
  function i1() {
    return Al().memoizedState;
  }
  function zy(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = ot();
          l = Ba(a);
          var u = ja(t, l, a);
          u !== null && (xl(u, t, a), Ju(u, t, a)), t = { cache: ri() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ay(l, t, a) {
    var u = ot();
    a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ee(l) ? f1(t, a) : (a = bi(l, t, a, u), a !== null && (xl(a, l, u), s1(a, t, u)));
  }
  function c1(l, t, a) {
    ku(l, t, a, ot());
  }
  function ku(l, t, a, u) {
    var n = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ee(l)) f1(t, n);
    else {
      var e = l.alternate;
      if (l.lanes === 0 && (e === null || e.lanes === 0) && (e = t.lastRenderedReducer, e !== null)) try {
        var i = t.lastRenderedState, c = e(i, a);
        if (n.hasEagerState = !0, n.eagerState = c, lt(c, i)) return Qn(l, t, n, 0), ml === null && Gn(), !1;
      } catch {
      }
      if (a = bi(l, t, n, u), a !== null) return xl(a, l, u), s1(a, t, u), !0;
    }
    return !1;
  }
  function tc(l, t, a, u) {
    if (u = {
      lane: 2,
      revertLane: Rc(),
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ee(l)) {
      if (t) throw Error(o(479));
    } else t = bi(l, a, u, 2), t !== null && xl(t, l, 2);
  }
  function ee(l) {
    var t = l.alternate;
    return l === X || t !== null && t === X;
  }
  function f1(l, t) {
    mu = In = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function s1(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, vf(l, a);
    }
  }
  var Iu = {
    readContext: Nl,
    use: te,
    useCallback: hl,
    useContext: hl,
    useEffect: hl,
    useImperativeHandle: hl,
    useLayoutEffect: hl,
    useInsertionEffect: hl,
    useMemo: hl,
    useReducer: hl,
    useRef: hl,
    useState: hl,
    useDebugValue: hl,
    useDeferredValue: hl,
    useTransition: hl,
    useSyncExternalStore: hl,
    useId: hl,
    useHostTransitionStatus: hl,
    useFormState: hl,
    useActionState: hl,
    useOptimistic: hl,
    useMemoCache: hl,
    useCacheRefresh: hl
  };
  Iu.useEffectEvent = hl;
  var m1 = {
    readContext: Nl,
    use: te,
    useCallback: function(l, t) {
      return jl().memoizedState = [l, t === void 0 ? null : t], l;
    },
    useContext: Nl,
    useEffect: w0,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, ue(4194308, 4, k0.bind(null, t, l), a);
    },
    useLayoutEffect: function(l, t) {
      return ue(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      ue(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var a = jl();
      t = t === void 0 ? null : t;
      var u = l();
      if (Ya) {
        $t(!0);
        try {
          l();
        } finally {
          $t(!1);
        }
      }
      return a.memoizedState = [u, t], u;
    },
    useReducer: function(l, t, a) {
      var u = jl();
      if (a !== void 0) {
        var n = a(t);
        if (Ya) {
          $t(!0);
          try {
            a(t);
          } finally {
            $t(!1);
          }
        }
      } else n = t;
      return u.memoizedState = u.baseState = n, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: n
      }, u.queue = l, l = l.dispatch = Ay.bind(null, X, l), [u.memoizedState, l];
    },
    useRef: function(l) {
      var t = jl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Wi(l);
      var t = l.queue, a = c1.bind(null, X, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: ki,
    useDeferredValue: function(l, t) {
      return Ii(jl(), l, t);
    },
    useTransition: function() {
      var l = Wi(!1);
      return l = a1.bind(null, X, l.queue, !0, !1), jl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var u = X, n = jl();
      if (k) {
        if (a === void 0) throw Error(o(407));
        a = a();
      } else {
        if (a = t(), ml === null) throw Error(o(349));
        ($ & 127) !== 0 || N0(u, t, a);
      }
      n.memoizedState = a;
      var e = {
        value: a,
        getSnapshot: t
      };
      return n.queue = e, w0(R0.bind(null, u, e, l), [l]), u.flags |= 2048, du(9, { destroy: void 0 }, C0.bind(null, u, e, a, t), null), a;
    },
    useId: function() {
      var l = jl(), t = ml.identifierPrefix;
      if (k) {
        var a = Mt, u = pt;
        a = (u & ~(1 << 32 - Pl(u) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Pn++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else a = vy++, t = "_" + t + "r_" + a.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: lc,
    useFormState: L0,
    useActionState: L0,
    useOptimistic: function(l) {
      var t = jl();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = tc.bind(null, X, !0, a), a.dispatch = t, [l, t];
    },
    useMemoCache: Ki,
    useCacheRefresh: function() {
      return jl().memoizedState = zy.bind(null, X);
    },
    useEffectEvent: function(l) {
      var t = jl(), a = { impl: l };
      return t.memoizedState = a, function() {
        if ((al & 2) !== 0) throw Error(o(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, ac = {
    readContext: Nl,
    use: te,
    useCallback: P0,
    useContext: Nl,
    useEffect: Fi,
    useImperativeHandle: I0,
    useInsertionEffect: $0,
    useLayoutEffect: F0,
    useMemo: l1,
    useReducer: ae,
    useRef: J0,
    useState: function() {
      return ae(jt);
    },
    useDebugValue: ki,
    useDeferredValue: function(l, t) {
      return t1(Al(), cl.memoizedState, l, t);
    },
    useTransition: function() {
      var l = ae(jt)[0], t = Al().memoizedState;
      return [typeof l == "boolean" ? l : Fu(l), t];
    },
    useSyncExternalStore: H0,
    useId: e1,
    useHostTransitionStatus: lc,
    useFormState: V0,
    useActionState: V0,
    useOptimistic: function(l, t) {
      return j0(Al(), cl, l, t);
    },
    useMemoCache: Ki,
    useCacheRefresh: i1
  };
  ac.useEffectEvent = W0;
  var y1 = {
    readContext: Nl,
    use: te,
    useCallback: P0,
    useContext: Nl,
    useEffect: Fi,
    useImperativeHandle: I0,
    useInsertionEffect: $0,
    useLayoutEffect: F0,
    useMemo: l1,
    useReducer: wi,
    useRef: J0,
    useState: function() {
      return wi(jt);
    },
    useDebugValue: ki,
    useDeferredValue: function(l, t) {
      var a = Al();
      return cl === null ? Ii(a, l, t) : t1(a, cl.memoizedState, l, t);
    },
    useTransition: function() {
      var l = wi(jt)[0], t = Al().memoizedState;
      return [typeof l == "boolean" ? l : Fu(l), t];
    },
    useSyncExternalStore: H0,
    useId: e1,
    useHostTransitionStatus: lc,
    useFormState: K0,
    useActionState: K0,
    useOptimistic: function(l, t) {
      var a = Al();
      return cl !== null ? j0(a, cl, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: Ki,
    useCacheRefresh: i1
  };
  y1.useEffectEvent = W0;
  function uc(l, t, a, u) {
    t = l.memoizedState, a = a(u, t), a = a == null ? t : O({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var nc = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var u = ot(), n = Ba(u);
      n.payload = t, a != null && (n.callback = a), t = ja(l, n, u), t !== null && (xl(t, l, u), Ju(t, l, u));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var u = ot(), n = Ba(u);
      n.tag = 1, n.payload = t, a != null && (n.callback = a), t = ja(l, n, u), t !== null && (xl(t, l, u), Ju(t, l, u));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = ot(), u = Ba(a);
      u.tag = 2, t != null && (u.callback = t), t = ja(l, u, a), t !== null && (xl(t, l, a), Ju(t, l, a));
    }
  };
  function d1(l, t, a, u, n, e, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, e, i) : t.prototype && t.prototype.isPureReactComponent ? !Gu(a, u) || !Gu(n, e) : !0;
  }
  function v1(l, t, a, u) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && nc.enqueueReplaceState(t, t.state, null);
  }
  function Ga(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if (l = l.defaultProps) {
      a === t && (a = O({}, a));
      for (var n in l) a[n] === void 0 && (a[n] = l[n]);
    }
    return a;
  }
  function Ey(l) {
    Yn(l);
  }
  function Ty(l) {
    console.error(l);
  }
  function _y(l) {
    Yn(l);
  }
  function ie(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function o1(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function ec(l, t, a) {
    return a = Ba(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      ie(l, t);
    }, a;
  }
  function h1(l) {
    return l = Ba(l), l.tag = 3, l;
  }
  function g1(l, t, a, u) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var e = u.value;
      l.payload = function() {
        return n(e);
      }, l.callback = function() {
        o1(t, a, u);
      };
    }
    var i = a.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      o1(t, a, u), typeof n != "function" && (fa === null ? fa = /* @__PURE__ */ new Set([this]) : fa.add(this));
      var c = u.stack;
      this.componentDidCatch(u.value, { componentStack: c !== null ? c : "" });
    });
  }
  function py(l, t, a, u, n) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (t = a.alternate, t !== null && nu(t, a, n, !0), a = at.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return vt === null ? be() : a.alternate === null && gl === 0 && (gl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, u === wn ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), Hc(l, u, n)), !1;
          case 22:
            return a.flags |= 65536, u === wn ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), Hc(l, u, n)), !1;
        }
        throw Error(o(435, a.tag));
      }
      return Hc(l, u, n), be(), !1;
    }
    if (k) return t = at.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, u !== pi && (l = Error(o(422), { cause: u }), Zu(st(l, a)))) : (u !== pi && (t = Error(o(423), { cause: u }), Zu(st(t, a))), l = l.current.alternate, l.flags |= 65536, n &= -n, l.lanes |= n, u = st(u, a), n = ec(l.stateNode, u, n), Bi(l, n), gl !== 4 && (gl = 2)), !1;
    var e = Error(o(520), { cause: u });
    if (e = st(e, a), cn === null ? cn = [e] : cn.push(e), gl !== 4 && (gl = 2), t === null) return !0;
    u = st(u, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = n & -n, a.lanes |= l, l = ec(a.stateNode, u, l), Bi(a, l), !1;
        case 1:
          if (t = a.type, e = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || e !== null && typeof e.componentDidCatch == "function" && (fa === null || !fa.has(e)))) return a.flags |= 65536, n &= -n, a.lanes |= n, n = h1(n), g1(n, l, a, u), Bi(a, n), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var ic = Error(o(461)), _l = !1;
  function Cl(l, t, a, u) {
    t.child = l === null ? _0(t, null, a, u) : qa(t, l.child, a, u);
  }
  function S1(l, t, a, u, n) {
    a = a.render;
    var e = t.ref;
    if ("ref" in u) {
      var i = {};
      for (var c in u) c !== "ref" && (i[c] = u[c]);
    } else i = u;
    return Ha(t), u = Zi(l, t, a, i, e, n), c = Li(), l !== null && !_l ? (Vi(l, t, n), Yt(l, t, n)) : (k && c && Ti(t), t.flags |= 1, Cl(l, t, u, n), t.child);
  }
  function b1(l, t, a, u, n) {
    if (l === null) {
      var e = a.type;
      return typeof e == "function" && !zi(e) && e.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = e, z1(l, t, e, u, n)) : (l = Zn(a.type, null, u, t, t.mode, n), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (e = l.child, !oc(l, n)) {
      var i = e.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Gu, a(i, u) && l.ref === t.ref) return Yt(l, t, n);
    }
    return t.flags |= 1, l = Nt(e, u), l.ref = t.ref, l.return = t, t.child = l;
  }
  function z1(l, t, a, u, n) {
    if (l !== null) {
      var e = l.memoizedProps;
      if (Gu(e, u) && l.ref === t.ref) if (_l = !1, t.pendingProps = u = e, oc(l, n)) (l.flags & 131072) !== 0 && (_l = !0);
      else return t.lanes = l.lanes, Yt(l, t, n);
    }
    return cc(l, t, a, u, n);
  }
  function A1(l, t, a, u) {
    var n = u.children, e = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), u.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (e = e !== null ? e.baseLanes | a : a, l !== null) {
          for (u = t.child = l.child, n = 0; u !== null; ) n = n | u.lanes | u.childLanes, u = u.sibling;
          u = n & ~e;
        } else u = 0, t.child = null;
        return E1(l, t, e, a, u);
      }
      if ((a & 536870912) !== 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, l !== null && Kn(t, e !== null ? e.cachePool : null), e !== null ? O0(t, e) : Yi(), D0(t);
      else return u = t.lanes = 536870912, E1(l, t, e !== null ? e.baseLanes | a : a, a, u);
    } else e !== null ? (Kn(t, e.cachePool), O0(t, e), na(t), t.memoizedState = null) : (l !== null && Kn(t, null), Yi(), na(t));
    return Cl(l, t, n, a), t.child;
  }
  function Pu(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function E1(l, t, a, u, n) {
    var e = Ni();
    return e = e === null ? null : {
      parent: El._currentValue,
      pool: e
    }, t.memoizedState = {
      baseLanes: a,
      cachePool: e
    }, l !== null && Kn(t, null), Yi(), D0(t), l !== null && nu(l, t, u, !0), t.childLanes = n, null;
  }
  function ce(l, t) {
    return t = se({
      mode: t.mode,
      children: t.children
    }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function T1(l, t, a) {
    return qa(t, l.child, null, a), l = ce(t, t.pendingProps), l.flags |= 2, ut(t), t.memoizedState = null, l;
  }
  function My(l, t, a) {
    var u = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (k) {
        if (u.mode === "hidden") return l = ce(t, u), t.lanes = 536870912, Pu(null, l);
        if (Qi(t), (l = dl) ? (l = Bs(l, dt), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? {
            id: pt,
            overflow: Mt
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = f0(l), a.return = t, t.child = a, Hl = t, dl = null)) : l = null, l === null) throw la(t);
        return t.lanes = 536870912, null;
      }
      return ce(t, u);
    }
    var e = l.memoizedState;
    if (e !== null) {
      var i = e.dehydrated;
      if (Qi(t), n) if (t.flags & 256) t.flags &= -257, t = T1(l, t, a);
      else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
      else throw Error(o(558));
      else if (_l || nu(l, t, a, !1), n = (a & l.childLanes) !== 0, _l || n) {
        if (u = ml, u !== null && (i = of(u, a), i !== 0 && i !== e.retryLane)) throw e.retryLane = i, Oa(l, i), xl(u, l, i), ic;
        be(), t = T1(l, t, a);
      } else l = e.treeContext, dl = ht(i.nextSibling), Hl = t, k = !0, Pt = null, dt = !1, l !== null && y0(t, l), t = ce(t, u), t.flags |= 4096;
      return t;
    }
    return l = Nt(l.child, {
      mode: u.mode,
      children: u.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function fe(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(o(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function cc(l, t, a, u, n) {
    return Ha(t), a = Zi(l, t, a, u, void 0, n), u = Li(), l !== null && !_l ? (Vi(l, t, n), Yt(l, t, n)) : (k && u && Ti(t), t.flags |= 1, Cl(l, t, a, n), t.child);
  }
  function _1(l, t, a, u, n, e) {
    return Ha(t), t.updateQueue = null, a = r0(t, u, a, n), U0(l), u = Li(), l !== null && !_l ? (Vi(l, t, e), Yt(l, t, e)) : (k && u && Ti(t), t.flags |= 1, Cl(l, t, a, e), t.child);
  }
  function p1(l, t, a, u, n) {
    if (Ha(t), t.stateNode === null) {
      var e = lu, i = a.contextType;
      typeof i == "object" && i !== null && (e = Nl(i)), e = new a(u, e), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = nc, t.stateNode = e, e._reactInternals = t, e = t.stateNode, e.props = u, e.state = t.memoizedState, e.refs = {}, Ri(t), i = a.contextType, e.context = typeof i == "object" && i !== null ? Nl(i) : lu, e.state = t.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (uc(t, a, i, u), e.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof e.getSnapshotBeforeUpdate == "function" || typeof e.UNSAFE_componentWillMount != "function" && typeof e.componentWillMount != "function" || (i = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), i !== e.state && nc.enqueueReplaceState(e, e.state, null), Wu(t, u, e, n), wu(), e.state = t.memoizedState), typeof e.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
    } else if (l === null) {
      e = t.stateNode;
      var c = t.memoizedProps, f = Ga(a, c);
      e.props = f;
      var h = e.context, b = a.contextType;
      i = lu, typeof b == "object" && b !== null && (i = Nl(b));
      var A = a.getDerivedStateFromProps;
      b = typeof A == "function" || typeof e.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, b || typeof e.UNSAFE_componentWillReceiveProps != "function" && typeof e.componentWillReceiveProps != "function" || (c || h !== i) && v1(t, e, u, i), aa = !1;
      var g = t.memoizedState;
      e.state = g, Wu(t, u, e, n), wu(), h = t.memoizedState, c || g !== h || aa ? (typeof A == "function" && (uc(t, a, A, u), h = t.memoizedState), (f = aa || d1(t, a, f, u, g, h, i)) ? (b || typeof e.UNSAFE_componentWillMount != "function" && typeof e.componentWillMount != "function" || (typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount()), typeof e.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof e.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = h), e.props = u, e.state = h, e.context = i, u = f) : (typeof e.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
    } else {
      e = t.stateNode, qi(l, t), i = t.memoizedProps, b = Ga(a, i), e.props = b, A = t.pendingProps, g = e.context, h = a.contextType, f = lu, typeof h == "object" && h !== null && (f = Nl(h)), c = a.getDerivedStateFromProps, (h = typeof c == "function" || typeof e.getSnapshotBeforeUpdate == "function") || typeof e.UNSAFE_componentWillReceiveProps != "function" && typeof e.componentWillReceiveProps != "function" || (i !== A || g !== f) && v1(t, e, u, f), aa = !1, g = t.memoizedState, e.state = g, Wu(t, u, e, n), wu();
      var S = t.memoizedState;
      i !== A || g !== S || aa || l !== null && l.dependencies !== null && Vn(l.dependencies) ? (typeof c == "function" && (uc(t, a, c, u), S = t.memoizedState), (b = aa || d1(t, a, b, u, g, S, f) || l !== null && l.dependencies !== null && Vn(l.dependencies)) ? (h || typeof e.UNSAFE_componentWillUpdate != "function" && typeof e.componentWillUpdate != "function" || (typeof e.componentWillUpdate == "function" && e.componentWillUpdate(u, S, f), typeof e.UNSAFE_componentWillUpdate == "function" && e.UNSAFE_componentWillUpdate(u, S, f)), typeof e.componentDidUpdate == "function" && (t.flags |= 4), typeof e.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof e.componentDidUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof e.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = S), e.props = u, e.state = S, e.context = f, u = b) : (typeof e.componentDidUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof e.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), u = !1);
    }
    return e = u, fe(l, t), u = (t.flags & 128) !== 0, e || u ? (e = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : e.render(), t.flags |= 1, l !== null && u ? (t.child = qa(t, l.child, null, n), t.child = qa(t, null, a, n)) : Cl(l, t, a, n), t.memoizedState = e.state, l = t.child) : l = Yt(l, t, n), l;
  }
  function M1(l, t, a, u) {
    return Ua(), t.flags |= 256, Cl(l, t, a, u), t.child;
  }
  var fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function sc(l) {
    return {
      baseLanes: l,
      cachePool: S0()
    };
  }
  function mc(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= et), l;
  }
  function O1(l, t, a) {
    var u = t.pendingProps, n = !1, e = (t.flags & 128) !== 0, i;
    if ((i = e) || (i = l !== null && l.memoizedState === null ? !1 : (zl.current & 2) !== 0), i && (n = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (k) {
        if (n ? ua(t) : na(t), (l = dl) ? (l = Bs(l, dt), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? {
            id: pt,
            overflow: Mt
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = f0(l), a.return = t, t.child = a, Hl = t, dl = null)) : l = null, l === null) throw la(t);
        return Kc(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = u.children;
      return u = u.fallback, n ? (na(t), n = t.mode, c = se({
        mode: "hidden",
        children: c
      }, n), u = Da(u, n, a, null), c.return = t, u.return = t, c.sibling = u, t.child = c, u = t.child, u.memoizedState = sc(a), u.childLanes = mc(l, i, a), t.memoizedState = fc, Pu(null, u)) : (ua(t), yc(t, c));
    }
    var f = l.memoizedState;
    if (f !== null && (c = f.dehydrated, c !== null)) {
      if (e) t.flags & 256 ? (ua(t), t.flags &= -257, t = dc(l, t, a)) : t.memoizedState !== null ? (na(t), t.child = l.child, t.flags |= 128, t = null) : (na(t), c = u.fallback, n = t.mode, u = se({
        mode: "visible",
        children: u.children
      }, n), c = Da(c, n, a, null), c.flags |= 2, u.return = t, c.return = t, u.sibling = c, t.child = u, qa(t, l.child, null, a), u = t.child, u.memoizedState = sc(a), u.childLanes = mc(l, i, a), t.memoizedState = fc, t = Pu(null, u));
      else if (ua(t), Kc(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var h = i.dgst;
        i = h, u = Error(o(419)), u.stack = "", u.digest = i, Zu({
          value: u,
          source: null,
          stack: null
        }), t = dc(l, t, a);
      } else if (_l || nu(l, t, a, !1), i = (a & l.childLanes) !== 0, _l || i) {
        if (i = ml, i !== null && (u = of(i, a), u !== 0 && u !== f.retryLane)) throw f.retryLane = u, Oa(l, u), xl(i, l, u), ic;
        xc(c) || be(), t = dc(l, t, a);
      } else xc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, dl = ht(c.nextSibling), Hl = t, k = !0, Pt = null, dt = !1, l !== null && y0(t, l), t = yc(t, u.children), t.flags |= 4096);
      return t;
    }
    return n ? (na(t), c = u.fallback, n = t.mode, f = l.child, h = f.sibling, u = Nt(f, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = f.subtreeFlags & 65011712, h !== null ? c = Nt(h, c) : (c = Da(c, n, a, null), c.flags |= 2), c.return = t, u.return = t, u.sibling = c, t.child = u, Pu(null, u), u = t.child, c = l.child.memoizedState, c === null ? c = sc(a) : (n = c.cachePool, n !== null ? (f = El._currentValue, n = n.parent !== f ? {
      parent: f,
      pool: f
    } : n) : n = S0(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: n
    }), u.memoizedState = c, u.childLanes = mc(l, i, a), t.memoizedState = fc, Pu(l.child, u)) : (ua(t), a = l.child, l = a.sibling, a = Nt(a, {
      mode: "visible",
      children: u.children
    }), a.return = t, a.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function yc(l, t) {
    return t = se({
      mode: "visible",
      children: t
    }, l.mode), t.return = l, l.child = t;
  }
  function se(l, t) {
    return l = tt(22, l, null, t), l.lanes = 0, l;
  }
  function dc(l, t, a) {
    return qa(t, l.child, null, a), l = yc(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
  }
  function D1(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), Di(l.return, t, a);
  }
  function vc(l, t, a, u, n, e) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: a,
      tailMode: n,
      treeForkCount: e
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = u, i.tail = a, i.tailMode = n, i.treeForkCount = e);
  }
  function U1(l, t, a) {
    var u = t.pendingProps, n = u.revealOrder, e = u.tail;
    u = u.children;
    var i = zl.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, M(zl, i), Cl(l, t, u, a), u = k ? Xu : 0, !c && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
      if (l.tag === 13) l.memoizedState !== null && D1(l, a, t);
      else if (l.tag === 19) D1(l, a, t);
      else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break l;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) break l;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    switch (n) {
      case "forwards":
        for (a = t.child, n = null; a !== null; ) l = a.alternate, l !== null && kn(l) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = t.child, t.child = null) : (n = a.sibling, a.sibling = null), vc(t, !1, n, a, e, u);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, n = t.child, t.child = null; n !== null; ) {
          if (l = n.alternate, l !== null && kn(l) === null) {
            t.child = n;
            break;
          }
          l = n.sibling, n.sibling = a, a = n, n = l;
        }
        vc(t, !0, a, null, e, u);
        break;
      case "together":
        vc(t, !1, null, null, void 0, u);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Yt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), ca |= t.lanes, (a & t.childLanes) === 0) if (l !== null) {
      if (nu(l, t, a, !1), (a & t.childLanes) === 0) return null;
    } else return null;
    if (l !== null && t.child !== l.child) throw Error(o(153));
    if (t.child !== null) {
      for (l = t.child, a = Nt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; ) l = l.sibling, a = a.sibling = Nt(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function oc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Vn(l)));
  }
  function Oy(l, t, a) {
    switch (t.tag) {
      case 3:
        Bl(t, t.stateNode.containerInfo), ta(t, El, l.memoizedState.cache), Ua();
        break;
      case 27:
      case 5:
        Mu(t);
        break;
      case 4:
        Bl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ta(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, Qi(t), null;
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (ua(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? O1(l, t, a) : (ua(t), l = Yt(l, t, a), l !== null ? l.sibling : null);
        ua(t);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (u = (a & t.childLanes) !== 0, u || (nu(l, t, a, !1), u = (a & t.childLanes) !== 0), n) {
          if (u) return U1(l, t, a);
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), M(zl, zl.current), u) break;
        return null;
      case 22:
        return t.lanes = 0, A1(l, t, a, t.pendingProps);
      case 24:
        ta(t, El, l.memoizedState.cache);
    }
    return Yt(l, t, a);
  }
  function r1(l, t, a) {
    if (l !== null) if (l.memoizedProps !== t.pendingProps) _l = !0;
    else {
      if (!oc(l, a) && (t.flags & 128) === 0) return _l = !1, Oy(l, t, a);
      _l = (l.flags & 131072) !== 0;
    }
    else _l = !1, k && (t.flags & 1048576) !== 0 && m0(t, Xu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (l = Ca(t.elementType), t.type = l, typeof l == "function") zi(l) ? (u = Ga(l, u), t.tag = 1, t = p1(null, t, l, u, a)) : (t.tag = 0, t = cc(null, t, l, u, a));
          else {
            if (l != null) {
              var n = l.$$typeof;
              if (n === St) {
                t.tag = 11, t = S1(null, t, l, u, a);
                break l;
              } else if (n === I) {
                t.tag = 14, t = b1(null, t, l, u, a);
                break l;
              }
            }
            throw t = bt(l) || l, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return cc(l, t, t.type, t.pendingProps, a);
      case 1:
        return u = t.type, n = Ga(u, t.pendingProps), p1(l, t, u, n, a);
      case 3:
        l: {
          if (Bl(t, t.stateNode.containerInfo), l === null) throw Error(o(387));
          u = t.pendingProps;
          var e = t.memoizedState;
          n = e.element, qi(l, t), Wu(t, u, null, a);
          var i = t.memoizedState;
          if (u = i.cache, ta(t, El, u), u !== e.cache && Ui(t, [El], a, !0), wu(), u = i.element, e.isDehydrated) if (e = {
            element: u,
            isDehydrated: !1,
            cache: i.cache
          }, t.updateQueue.baseState = e, t.memoizedState = e, t.flags & 256) {
            t = M1(l, t, u, a);
            break l;
          } else if (u !== n) {
            n = st(Error(o(424)), t), Zu(n), t = M1(l, t, u, a);
            break l;
          } else
            for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, dl = ht(l.firstChild), Hl = t, k = !0, Pt = null, dt = !0, a = _0(t, null, u, a), t.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (Ua(), u === n) {
              t = Yt(l, t, a);
              break l;
            }
            Cl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return fe(l, t), l === null ? (a = Zs(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : k || (a = t.type, l = t.pendingProps, u = Me(K.current).createElement(a), u[rl] = t, u[Gl] = l, Rl(u, a, l), Dl(u), t.stateNode = u) : t.memoizedState = Zs(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
      case 27:
        return Mu(t), l === null && k && (u = t.stateNode = Gs(t.type, t.pendingProps, K.current), Hl = t, dt = !0, n = dl, da(t.type) ? (Jc = n, dl = ht(u.firstChild)) : dl = n), Cl(l, t, t.pendingProps.children, a), fe(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && k && ((n = u = dl) && (u = ld(u, t.type, t.pendingProps, dt), u !== null ? (t.stateNode = u, Hl = t, dl = ht(u.firstChild), dt = !1, n = !0) : n = !1), n || la(t)), Mu(t), n = t.type, e = t.pendingProps, i = l !== null ? l.memoizedProps : null, u = e.children, Zc(n, e) ? u = null : i !== null && Zc(n, i) && (t.flags |= 32), t.memoizedState !== null && (n = Zi(l, t, oy, null, null, a), hn._currentValue = n), fe(l, t), Cl(l, t, u, a), t.child;
      case 6:
        return l === null && k && ((l = a = dl) && (a = td(a, t.pendingProps, dt), a !== null ? (t.stateNode = a, Hl = t, dl = null, l = !0) : l = !1), l || la(t)), null;
      case 13:
        return O1(l, t, a);
      case 4:
        return Bl(t, t.stateNode.containerInfo), u = t.pendingProps, l === null ? t.child = qa(t, null, u, a) : Cl(l, t, u, a), t.child;
      case 11:
        return S1(l, t, t.type, t.pendingProps, a);
      case 7:
        return Cl(l, t, t.pendingProps, a), t.child;
      case 8:
        return Cl(l, t, t.pendingProps.children, a), t.child;
      case 12:
        return Cl(l, t, t.pendingProps.children, a), t.child;
      case 10:
        return u = t.pendingProps, ta(t, t.type, u.value), Cl(l, t, u.children, a), t.child;
      case 9:
        return n = t.type._context, u = t.pendingProps.children, Ha(t), n = Nl(n), u = u(n), t.flags |= 1, Cl(l, t, u, a), t.child;
      case 14:
        return b1(l, t, t.type, t.pendingProps, a);
      case 15:
        return z1(l, t, t.type, t.pendingProps, a);
      case 19:
        return U1(l, t, a);
      case 31:
        return My(l, t, a);
      case 22:
        return A1(l, t, a, t.pendingProps);
      case 24:
        return Ha(t), u = Nl(El), l === null ? (n = Ni(), n === null && (n = ml, e = ri(), n.pooledCache = e, e.refCount++, e !== null && (n.pooledCacheLanes |= a), n = e), t.memoizedState = {
          parent: u,
          cache: n
        }, Ri(t), ta(t, El, n)) : ((l.lanes & a) !== 0 && (qi(l, t), Wu(t, null, null, a), wu()), n = l.memoizedState, e = t.memoizedState, n.parent !== u ? (n = {
          parent: u,
          cache: u
        }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), ta(t, El, u)) : (u = e.cache, ta(t, El, u), u !== n.cache && Ui(t, [El], a, !0))), Cl(l, t, t.pendingProps.children, a), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Gt(l) {
    l.flags |= 4;
  }
  function hc(l, t, a, u, n) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (n & 335544128) === n) if (l.stateNode.complete) l.flags |= 8192;
      else if (as()) l.flags |= 8192;
      else throw Ra = wn, Ci;
    } else l.flags &= -16777217;
  }
  function H1(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (l.flags |= 16777216, !Js(t)) if (as()) l.flags |= 8192;
    else throw Ra = wn, Ci;
  }
  function me(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? yf() : 536870912, l.lanes |= t, gu |= t);
  }
  function ln(l, t) {
    if (!k) switch (l.tailMode) {
      case "hidden":
        t = l.tail;
        for (var a = null; t !== null; ) t.alternate !== null && (a = t), t = t.sibling;
        a === null ? l.tail = null : a.sibling = null;
        break;
      case "collapsed":
        a = l.tail;
        for (var u = null; a !== null; ) a.alternate !== null && (u = a), a = a.sibling;
        u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null;
    }
  }
  function vl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, u = 0;
    if (t) for (var n = l.child; n !== null; ) a |= n.lanes | n.childLanes, u |= n.subtreeFlags & 65011712, u |= n.flags & 65011712, n.return = l, n = n.sibling;
    else for (n = l.child; n !== null; ) a |= n.lanes | n.childLanes, u |= n.subtreeFlags, u |= n.flags, n.return = l, n = n.sibling;
    return l.subtreeFlags |= u, l.childLanes = a, t;
  }
  function Dy(l, t, a) {
    var u = t.pendingProps;
    switch (_i(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return vl(t), null;
      case 1:
        return vl(t), null;
      case 3:
        return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), qt(El), bl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (uu(t) ? Gt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Mi())), vl(t), null;
      case 26:
        var n = t.type, e = t.memoizedState;
        return l === null ? (Gt(t), e !== null ? (vl(t), H1(t, e)) : (vl(t), hc(t, n, null, u, a))) : e ? e !== l.memoizedState ? (Gt(t), vl(t), H1(t, e)) : (vl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== u && Gt(t), vl(t), hc(t, n, l, u, a)), null;
      case 27:
        if (An(t), a = K.current, n = t.type, l !== null && t.stateNode != null) l.memoizedProps !== u && Gt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(o(166));
            return vl(t), null;
          }
          l = C.current, uu(t) ? d0(t, l) : (l = Gs(n, u, a), t.stateNode = l, Gt(t));
        }
        return vl(t), null;
      case 5:
        if (An(t), n = t.type, l !== null && t.stateNode != null) l.memoizedProps !== u && Gt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(o(166));
            return vl(t), null;
          }
          if (e = C.current, uu(t)) d0(t, e);
          else {
            var i = Me(K.current);
            switch (e) {
              case 1:
                e = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                e = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    e = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    e = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                    break;
                  case "script":
                    e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof u.is == "string" ? i.createElement("select", { is: u.is }) : i.createElement("select"), u.multiple ? e.multiple = !0 : u.size && (e.size = u.size);
                    break;
                  default:
                    e = typeof u.is == "string" ? i.createElement(n, { is: u.is }) : i.createElement(n);
                }
            }
            e[rl] = t, e[Gl] = u;
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break l;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            t.stateNode = e;
            l: switch (Rl(e, n, u), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break l;
              case "img":
                u = !0;
                break l;
              default:
                u = !1;
            }
            u && Gt(t);
          }
        }
        return vl(t), hc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Gt(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(o(166));
          if (l = K.current, uu(t)) {
            if (l = t.stateNode, a = t.memoizedProps, u = null, n = Hl, n !== null) switch (n.tag) {
              case 27:
              case 5:
                u = n.memoizedProps;
            }
            l[rl] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || Ds(l.nodeValue, a)), l || la(t, !0);
          } else l = Me(l).createTextNode(u), l[rl] = t, t.stateNode = l;
        }
        return vl(t), null;
      case 31:
        if (a = t.memoizedState, l === null || l.memoizedState !== null) {
          if (u = uu(t), a !== null) {
            if (l === null) {
              if (!u) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
              l[rl] = t;
            } else Ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            vl(t), l = !1;
          } else a = Mi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = !0;
          if (!l)
            return t.flags & 256 ? (ut(t), t) : (ut(t), null);
          if ((t.flags & 128) !== 0) throw Error(o(558));
        }
        return vl(t), null;
      case 13:
        if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (n = uu(t), u !== null && u.dehydrated !== null) {
            if (l === null) {
              if (!n) throw Error(o(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(o(317));
              n[rl] = t;
            } else Ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            vl(t), n = !1;
          } else n = Mi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (ut(t), t) : (ut(t), null);
        }
        return ut(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = u !== null, l = l !== null && l.memoizedState !== null, a && (u = t.child, n = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (n = u.alternate.memoizedState.cachePool.pool), e = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (e = u.memoizedState.cachePool.pool), e !== n && (u.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), me(t, t.updateQueue), vl(t), null);
      case 4:
        return bl(), l === null && _s(t.stateNode.containerInfo), vl(t), null;
      case 10:
        return qt(t.type), vl(t), null;
      case 19:
        if (E(zl), u = t.memoizedState, u === null) return vl(t), null;
        if (n = (t.flags & 128) !== 0, e = u.rendering, e === null) if (n) ln(u, !1);
        else {
          if (gl !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
            if (e = kn(l), e !== null) {
              for (t.flags |= 128, ln(u, !1), l = e.updateQueue, t.updateQueue = l, me(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; ) c0(a, l), a = a.sibling;
              return M(zl, zl.current & 1 | 2), k && Ct(t, u.treeForkCount), t.child;
            }
            l = l.sibling;
          }
          u.tail !== null && kl() > he && (t.flags |= 128, n = !0, ln(u, !1), t.lanes = 4194304);
        }
        else {
          if (!n) if (l = kn(e), l !== null) {
            if (t.flags |= 128, n = !0, l = l.updateQueue, t.updateQueue = l, me(t, l), ln(u, !0), u.tail === null && u.tailMode === "hidden" && !e.alternate && !k) return vl(t), null;
          } else 2 * kl() - u.renderingStartTime > he && a !== 536870912 && (t.flags |= 128, n = !0, ln(u, !1), t.lanes = 4194304);
          u.isBackwards ? (e.sibling = t.child, t.child = e) : (l = u.last, l !== null ? l.sibling = e : t.child = e, u.last = e);
        }
        return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = kl(), l.sibling = null, a = zl.current, M(zl, n ? a & 1 | 2 : a & 1), k && Ct(t, u.treeForkCount), l) : (vl(t), null);
      case 22:
      case 23:
        return ut(t), Gi(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (vl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : vl(t), a = t.updateQueue, a !== null && me(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && E(Na), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), qt(El), vl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Uy(l, t) {
    switch (_i(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return qt(El), bl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return An(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (ut(t), t.alternate === null) throw Error(o(340));
          Ua();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (ut(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          Ua();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return E(zl), null;
      case 4:
        return bl(), null;
      case 10:
        return qt(t.type), null;
      case 22:
      case 23:
        return ut(t), Gi(), l !== null && E(Na), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return qt(El), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function N1(l, t) {
    switch (_i(t), t.tag) {
      case 3:
        qt(El), bl();
        break;
      case 26:
      case 27:
      case 5:
        An(t);
        break;
      case 4:
        bl();
        break;
      case 31:
        t.memoizedState !== null && ut(t);
        break;
      case 13:
        ut(t);
        break;
      case 19:
        E(zl);
        break;
      case 10:
        qt(t.type);
        break;
      case 22:
      case 23:
        ut(t), Gi(), l !== null && E(Na);
        break;
      case 24:
        qt(El);
    }
  }
  function tn(l, t) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var e = a.create, i = a.inst;
            u = e(), i.destroy = u;
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (c) {
      el(t, t.return, c);
    }
  }
  function ea(l, t, a) {
    try {
      var u = t.updateQueue, n = u !== null ? u.lastEffect : null;
      if (n !== null) {
        var e = n.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            var i = u.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, n = t;
              var f = a, h = c;
              try {
                h();
              } catch (b) {
                el(n, f, b);
              }
            }
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (b) {
      el(t, t.return, b);
    }
  }
  function C1(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        M0(t, a);
      } catch (u) {
        el(l, l.return, u);
      }
    }
  }
  function R1(l, t, a) {
    a.props = Ga(l.type, l.memoizedProps), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (u) {
      el(l, t, u);
    }
  }
  function an(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(u) : a.current = u;
      }
    } catch (n) {
      el(l, t, n);
    }
  }
  function Ot(l, t) {
    var a = l.ref, u = l.refCleanup;
    if (a !== null) if (typeof u == "function") try {
      u();
    } catch (n) {
      el(l, t, n);
    } finally {
      l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
    }
    else if (typeof a == "function") try {
      a(null);
    } catch (n) {
      el(l, t, n);
    }
    else a.current = null;
  }
  function q1(l) {
    var t = l.type, a = l.memoizedProps, u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (n) {
      el(l, l.return, n);
    }
  }
  function gc(l, t, a) {
    try {
      var u = l.stateNode;
      Wy(u, l.type, a, t), u[Gl] = t;
    } catch (n) {
      el(l, l.return, n);
    }
  }
  function B1(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && da(l.type) || l.tag === 4;
  }
  function Sc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || B1(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && da(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function bc(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6) l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = rt));
    else if (u !== 4 && (u === 27 && da(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null)) for (bc(l, t, a), l = l.sibling; l !== null; ) bc(l, t, a), l = l.sibling;
  }
  function ye(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6) l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && (u === 27 && da(l.type) && (a = l.stateNode), l = l.child, l !== null)) for (ye(l, t, a), l = l.sibling; l !== null; ) ye(l, t, a), l = l.sibling;
  }
  function j1(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var u = l.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
      Rl(t, u, a), t[rl] = l, t[Gl] = a;
    } catch (e) {
      el(l, l.return, e);
    }
  }
  var Qt = !1, pl = !1, zc = !1, Y1 = typeof WeakSet == "function" ? WeakSet : Set, Ul = null;
  function ry(l, t) {
    if (l = l.containerInfo, Qc = Ce, l = If(l), di(l)) {
      if ("selectionStart" in l) var a = {
        start: l.selectionStart,
        end: l.selectionEnd
      };
      else l: {
        a = (a = l.ownerDocument) && a.defaultView || window;
        var u = a.getSelection && a.getSelection();
        if (u && u.rangeCount !== 0) {
          a = u.anchorNode;
          var n = u.anchorOffset, e = u.focusNode;
          u = u.focusOffset;
          try {
            a.nodeType, e.nodeType;
          } catch {
            a = null;
            break l;
          }
          var i = 0, c = -1, f = -1, h = 0, b = 0, A = l, g = null;
          t: for (; ; ) {
            for (var S; A !== a || n !== 0 && A.nodeType !== 3 || (c = i + n), A !== e || u !== 0 && A.nodeType !== 3 || (f = i + u), A.nodeType === 3 && (i += A.nodeValue.length), (S = A.firstChild) !== null; )
              g = A, A = S;
            for (; ; ) {
              if (A === l) break t;
              if (g === a && ++h === n && (c = i), g === e && ++b === u && (f = i), (S = A.nextSibling) !== null) break;
              A = g, g = A.parentNode;
            }
            A = S;
          }
          a = c === -1 || f === -1 ? null : {
            start: c,
            end: f
          };
        } else a = null;
      }
      a = a || {
        start: 0,
        end: 0
      };
    } else a = null;
    for (Xc = {
      focusedElem: l,
      selectionRange: a
    }, Ce = !1, Ul = t; Ul !== null; ) if (t = Ul, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null) l.return = t, Ul = l;
    else for (; Ul !== null; ) {
      switch (t = Ul, e = t.alternate, l = t.flags, t.tag) {
        case 0:
          if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null)) for (a = 0; a < l.length; a++) n = l[a], n.ref.impl = n.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((l & 1024) !== 0 && e !== null) {
            l = void 0, a = t, n = e.memoizedProps, e = e.memoizedState, u = a.stateNode;
            try {
              var H = Ga(a.type, n);
              l = u.getSnapshotBeforeUpdate(H, e), u.__reactInternalSnapshotBeforeUpdate = l;
            } catch (j) {
              el(a, a.return, j);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9) Vc(l);
            else if (a === 1) switch (l.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Vc(l);
                break;
              default:
                l.textContent = "";
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
          if ((l & 1024) !== 0) throw Error(o(163));
      }
      if (l = t.sibling, l !== null) {
        l.return = t.return, Ul = l;
        break;
      }
      Ul = t.return;
    }
  }
  function G1(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Zt(l, a), u & 4 && tn(5, a);
        break;
      case 1:
        if (Zt(l, a), u & 4) if (l = a.stateNode, t === null) try {
          l.componentDidMount();
        } catch (i) {
          el(a, a.return, i);
        }
        else {
          var n = Ga(a.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            l.componentDidUpdate(n, t, l.__reactInternalSnapshotBeforeUpdate);
          } catch (i) {
            el(a, a.return, i);
          }
        }
        u & 64 && C1(a), u & 512 && an(a, a.return);
        break;
      case 3:
        if (Zt(l, a), u & 64 && (l = a.updateQueue, l !== null)) {
          if (t = null, a.child !== null) switch (a.child.tag) {
            case 27:
            case 5:
              t = a.child.stateNode;
              break;
            case 1:
              t = a.child.stateNode;
          }
          try {
            M0(l, t);
          } catch (i) {
            el(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && u & 4 && j1(a);
      case 26:
      case 5:
        Zt(l, a), t === null && u & 4 && q1(a), u & 512 && an(a, a.return);
        break;
      case 12:
        Zt(l, a);
        break;
      case 31:
        Zt(l, a), u & 4 && Z1(l, a);
        break;
      case 13:
        Zt(l, a), u & 4 && L1(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = Gy.bind(null, a), ad(l, a))));
        break;
      case 22:
        if (u = a.memoizedState !== null || Qt, !u) {
          t = t !== null && t.memoizedState !== null || pl, n = Qt;
          var e = pl;
          Qt = u, (pl = t) && !e ? Lt(l, a, (a.subtreeFlags & 8772) !== 0) : Zt(l, a), Qt = n, pl = e;
        }
        break;
      case 30:
        break;
      default:
        Zt(l, a);
    }
  }
  function Q1(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Q1(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && $e(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var ol = null, Xl = !1;
  function Xt(l, t, a) {
    for (a = a.child; a !== null; ) X1(l, t, a), a = a.sibling;
  }
  function X1(l, t, a) {
    if (Il && typeof Il.onCommitFiberUnmount == "function") try {
      Il.onCommitFiberUnmount(Ou, a);
    } catch {
    }
    switch (a.tag) {
      case 26:
        pl || Ot(a, t), Xt(l, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        pl || Ot(a, t);
        var u = ol, n = Xl;
        da(a.type) && (ol = a.stateNode, Xl = !1), Xt(l, t, a), dn(a.stateNode), ol = u, Xl = n;
        break;
      case 5:
        pl || Ot(a, t);
      case 6:
        if (u = ol, n = Xl, ol = null, Xt(l, t, a), ol = u, Xl = n, ol !== null) if (Xl) try {
          (ol.nodeType === 9 ? ol.body : ol.nodeName === "HTML" ? ol.ownerDocument.body : ol).removeChild(a.stateNode);
        } catch (e) {
          el(a, t, e);
        }
        else try {
          ol.removeChild(a.stateNode);
        } catch (e) {
          el(a, t, e);
        }
        break;
      case 18:
        ol !== null && (Xl ? (l = ol, Rs(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, a.stateNode), pu(l)) : Rs(ol, a.stateNode));
        break;
      case 4:
        u = ol, n = Xl, ol = a.stateNode.containerInfo, Xl = !0, Xt(l, t, a), ol = u, Xl = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ea(2, a, t), pl || ea(4, a, t), Xt(l, t, a);
        break;
      case 1:
        pl || (Ot(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && R1(a, t, u)), Xt(l, t, a);
        break;
      case 21:
        Xt(l, t, a);
        break;
      case 22:
        pl = (u = pl) || a.memoizedState !== null, Xt(l, t, a), pl = u;
        break;
      default:
        Xt(l, t, a);
    }
  }
  function Z1(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        pu(l);
      } catch (a) {
        el(t, t.return, a);
      }
    }
  }
  function L1(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
      pu(l);
    } catch (a) {
      el(t, t.return, a);
    }
  }
  function Hy(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Y1()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Y1()), t;
      default:
        throw Error(o(435, l.tag));
    }
  }
  function de(l, t) {
    var a = Hy(l);
    t.forEach(function(u) {
      if (!a.has(u)) {
        a.add(u);
        var n = Qy.bind(null, l, u);
        u.then(n, n);
      }
    });
  }
  function Zl(l, t) {
    var a = t.deletions;
    if (a !== null) for (var u = 0; u < a.length; u++) {
      var n = a[u], e = l, i = t, c = i;
      l: for (; c !== null; ) {
        switch (c.tag) {
          case 27:
            if (da(c.type)) {
              ol = c.stateNode, Xl = !1;
              break l;
            }
            break;
          case 5:
            ol = c.stateNode, Xl = !1;
            break l;
          case 3:
          case 4:
            ol = c.stateNode.containerInfo, Xl = !0;
            break l;
        }
        c = c.return;
      }
      if (ol === null) throw Error(o(160));
      X1(e, i, n), ol = null, Xl = !1, e = n.alternate, e !== null && (e.return = null), n.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) V1(t, l), t = t.sibling;
  }
  var At = null;
  function V1(l, t) {
    var a = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Zl(t, l), Ll(l), u & 4 && (ea(3, l, l.return), tn(3, l), ea(5, l, l.return));
        break;
      case 1:
        Zl(t, l), Ll(l), u & 512 && (pl || a === null || Ot(a, a.return)), u & 64 && Qt && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
        break;
      case 26:
        var n = At;
        if (Zl(t, l), Ll(l), u & 512 && (pl || a === null || Ot(a, a.return)), u & 4) {
          var e = a !== null ? a.memoizedState : null;
          if (u = l.memoizedState, a === null) if (u === null) if (l.stateNode === null) {
            l: {
              u = l.type, a = l.memoizedProps, n = n.ownerDocument || n;
              t: switch (u) {
                case "title":
                  e = n.getElementsByTagName("title")[0], (!e || e[ru] || e[rl] || e.namespaceURI === "http://www.w3.org/2000/svg" || e.hasAttribute("itemprop")) && (e = n.createElement(u), n.head.insertBefore(e, n.querySelector("head > title"))), Rl(e, u, a), e[rl] = l, Dl(e), u = e;
                  break l;
                case "link":
                  var i = xs("link", "href", n).get(u + (a.href || ""));
                  if (i) {
                    for (var c = 0; c < i.length; c++) if (e = i[c], e.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && e.getAttribute("rel") === (a.rel == null ? null : a.rel) && e.getAttribute("title") === (a.title == null ? null : a.title) && e.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                      i.splice(c, 1);
                      break t;
                    }
                  }
                  e = n.createElement(u), Rl(e, u, a), n.head.appendChild(e);
                  break;
                case "meta":
                  if (i = xs("meta", "content", n).get(u + (a.content || ""))) {
                    for (c = 0; c < i.length; c++) if (e = i[c], e.getAttribute("content") === (a.content == null ? null : "" + a.content) && e.getAttribute("name") === (a.name == null ? null : a.name) && e.getAttribute("property") === (a.property == null ? null : a.property) && e.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && e.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                      i.splice(c, 1);
                      break t;
                    }
                  }
                  e = n.createElement(u), Rl(e, u, a), n.head.appendChild(e);
                  break;
                default:
                  throw Error(o(468, u));
              }
              e[rl] = l, Dl(e), u = e;
            }
            l.stateNode = u;
          } else Ks(n, l.type, l.stateNode);
          else l.stateNode = Vs(n, u, l.memoizedProps);
          else e !== u ? (e === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : e.count--, u === null ? Ks(n, l.type, l.stateNode) : Vs(n, u, l.memoizedProps)) : u === null && l.stateNode !== null && gc(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        Zl(t, l), Ll(l), u & 512 && (pl || a === null || Ot(a, a.return)), a !== null && u & 4 && gc(l, l.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (Zl(t, l), Ll(l), u & 512 && (pl || a === null || Ot(a, a.return)), l.flags & 32) {
          n = l.stateNode;
          try {
            wa(n, "");
          } catch (H) {
            el(l, l.return, H);
          }
        }
        u & 4 && l.stateNode != null && (n = l.memoizedProps, gc(l, n, a !== null ? a.memoizedProps : n)), u & 1024 && (zc = !0);
        break;
      case 6:
        if (Zl(t, l), Ll(l), u & 4) {
          if (l.stateNode === null) throw Error(o(162));
          u = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = u;
          } catch (H) {
            el(l, l.return, H);
          }
        }
        break;
      case 3:
        if (Ue = null, n = At, At = Oe(t.containerInfo), Zl(t, l), At = n, Ll(l), u & 4 && a !== null && a.memoizedState.isDehydrated) try {
          pu(t.containerInfo);
        } catch (H) {
          el(l, l.return, H);
        }
        zc && (zc = !1, x1(l));
        break;
      case 4:
        u = At, At = Oe(l.stateNode.containerInfo), Zl(t, l), Ll(l), At = u;
        break;
      case 12:
        Zl(t, l), Ll(l);
        break;
      case 31:
        Zl(t, l), Ll(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, de(l, u)));
        break;
      case 13:
        Zl(t, l), Ll(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (oe = kl()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, de(l, u)));
        break;
      case 22:
        n = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null, h = Qt, b = pl;
        if (Qt = h || n, pl = b || f, Zl(t, l), pl = b, Qt = h, Ll(l), u & 8192) l: for (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (a === null || f || Qt || pl || Qa(l)), a = null, t = l; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (a === null) {
              f = a = t;
              try {
                if (e = f.stateNode, n) i = e.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                else {
                  c = f.stateNode;
                  var A = f.memoizedProps.style, g = A != null && A.hasOwnProperty("display") ? A.display : null;
                  c.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                }
              } catch (H) {
                el(f, f.return, H);
              }
            }
          } else if (t.tag === 6) {
            if (a === null) {
              f = t;
              try {
                f.stateNode.nodeValue = n ? "" : f.memoizedProps;
              } catch (H) {
                el(f, f.return, H);
              }
            }
          } else if (t.tag === 18) {
            if (a === null) {
              f = t;
              try {
                var S = f.stateNode;
                n ? qs(S, !0) : qs(f.stateNode, !1);
              } catch (H) {
                el(f, f.return, H);
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === l) break l;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) break l;
            a === t && (a = null), t = t.return;
          }
          a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
        }
        u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, de(l, a))));
        break;
      case 19:
        Zl(t, l), Ll(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, de(l, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Zl(t, l), Ll(l);
    }
  }
  function Ll(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (B1(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode;
            ye(l, Sc(l), n);
            break;
          case 5:
            var e = a.stateNode;
            a.flags & 32 && (wa(e, ""), a.flags &= -33), ye(l, Sc(l), e);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo;
            bc(l, Sc(l), i);
            break;
          default:
            throw Error(o(161));
        }
      } catch (c) {
        el(l, l.return, c);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function x1(l) {
    if (l.subtreeFlags & 1024) for (l = l.child; l !== null; ) {
      var t = l;
      x1(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
    }
  }
  function Zt(l, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) G1(l, t.alternate, t), t = t.sibling;
  }
  function Qa(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ea(4, t, t.return), Qa(t);
          break;
        case 1:
          Ot(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && R1(t, t.return, a), Qa(t);
          break;
        case 27:
          dn(t.stateNode);
        case 26:
        case 5:
          Ot(t, t.return), Qa(t);
          break;
        case 22:
          t.memoizedState === null && Qa(t);
          break;
        case 30:
          Qa(t);
          break;
        default:
          Qa(t);
      }
      l = l.sibling;
    }
  }
  function Lt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate, n = l, e = t, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Lt(n, e, a), tn(4, e);
          break;
        case 1:
          if (Lt(n, e, a), u = e, n = u.stateNode, typeof n.componentDidMount == "function") try {
            n.componentDidMount();
          } catch (h) {
            el(u, u.return, h);
          }
          if (u = e, n = u.updateQueue, n !== null) {
            var c = u.stateNode;
            try {
              var f = n.shared.hiddenCallbacks;
              if (f !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < f.length; n++) p0(f[n], c);
            } catch (h) {
              el(u, u.return, h);
            }
          }
          a && i & 64 && C1(e), an(e, e.return);
          break;
        case 27:
          j1(e);
        case 26:
        case 5:
          Lt(n, e, a), a && u === null && i & 4 && q1(e), an(e, e.return);
          break;
        case 12:
          Lt(n, e, a);
          break;
        case 31:
          Lt(n, e, a), a && i & 4 && Z1(n, e);
          break;
        case 13:
          Lt(n, e, a), a && i & 4 && L1(n, e);
          break;
        case 22:
          e.memoizedState === null && Lt(n, e, a), an(e, e.return);
          break;
        case 30:
          break;
        default:
          Lt(n, e, a);
      }
      t = t.sibling;
    }
  }
  function Ac(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Lu(a));
  }
  function Ec(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Lu(l));
  }
  function Et(l, t, a, u) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) K1(l, t, a, u), t = t.sibling;
  }
  function K1(l, t, a, u) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Et(l, t, a, u), n & 2048 && tn(9, t);
        break;
      case 1:
        Et(l, t, a, u);
        break;
      case 3:
        Et(l, t, a, u), n & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Lu(l)));
        break;
      case 12:
        if (n & 2048) {
          Et(l, t, a, u), l = t.stateNode;
          try {
            var e = t.memoizedProps, i = e.id, c = e.onPostCommit;
            typeof c == "function" && c(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
          } catch (f) {
            el(t, t.return, f);
          }
        } else Et(l, t, a, u);
        break;
      case 31:
        Et(l, t, a, u);
        break;
      case 13:
        Et(l, t, a, u);
        break;
      case 23:
        break;
      case 22:
        e = t.stateNode, i = t.alternate, t.memoizedState !== null ? e._visibility & 2 ? Et(l, t, a, u) : un(l, t) : e._visibility & 2 ? Et(l, t, a, u) : (e._visibility |= 2, vu(l, t, a, u, (t.subtreeFlags & 10256) !== 0 || !1)), n & 2048 && Ac(i, t);
        break;
      case 24:
        Et(l, t, a, u), n & 2048 && Ec(t.alternate, t);
        break;
      default:
        Et(l, t, a, u);
    }
  }
  function vu(l, t, a, u, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var e = l, i = t, c = a, f = u, h = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          vu(e, i, c, f, n), tn(8, i);
          break;
        case 23:
          break;
        case 22:
          var b = i.stateNode;
          i.memoizedState !== null ? b._visibility & 2 ? vu(e, i, c, f, n) : un(e, i) : (b._visibility |= 2, vu(e, i, c, f, n)), n && h & 2048 && Ac(i.alternate, i);
          break;
        case 24:
          vu(e, i, c, f, n), n && h & 2048 && Ec(i.alternate, i);
          break;
        default:
          vu(e, i, c, f, n);
      }
      t = t.sibling;
    }
  }
  function un(l, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var a = l, u = t, n = u.flags;
      switch (u.tag) {
        case 22:
          un(a, u), n & 2048 && Ac(u.alternate, u);
          break;
        case 24:
          un(a, u), n & 2048 && Ec(u.alternate, u);
          break;
        default:
          un(a, u);
      }
      t = t.sibling;
    }
  }
  var nn = 8192;
  function ou(l, t, a) {
    if (l.subtreeFlags & nn) for (l = l.child; l !== null; ) J1(l, t, a), l = l.sibling;
  }
  function J1(l, t, a) {
    switch (l.tag) {
      case 26:
        ou(l, t, a), l.flags & nn && l.memoizedState !== null && od(a, At, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        ou(l, t, a);
        break;
      case 3:
      case 4:
        var u = At;
        At = Oe(l.stateNode.containerInfo), ou(l, t, a), At = u;
        break;
      case 22:
        l.memoizedState === null && (u = l.alternate, u !== null && u.memoizedState !== null ? (u = nn, nn = 16777216, ou(l, t, a), nn = u) : ou(l, t, a));
        break;
      default:
        ou(l, t, a);
    }
  }
  function w1(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function en(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var u = t[a];
        Ul = u, $1(u, l);
      }
      w1(l);
    }
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) W1(l), l = l.sibling;
  }
  function W1(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        en(l), l.flags & 2048 && ea(9, l, l.return);
        break;
      case 3:
        en(l);
        break;
      case 12:
        en(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, ve(l)) : en(l);
        break;
      default:
        en(l);
    }
  }
  function ve(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var u = t[a];
        Ul = u, $1(u, l);
      }
      w1(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ea(8, t, t.return), ve(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, ve(t));
          break;
        default:
          ve(t);
      }
      l = l.sibling;
    }
  }
  function $1(l, t) {
    for (; Ul !== null; ) {
      var a = Ul;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ea(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Lu(a.memoizedState.cache);
      }
      if (u = a.child, u !== null) u.return = a, Ul = u;
      else l: for (a = l; Ul !== null; ) {
        u = Ul;
        var n = u.sibling, e = u.return;
        if (Q1(u), u === a) {
          Ul = null;
          break l;
        }
        if (n !== null) {
          n.return = e, Ul = n;
          break l;
        }
        Ul = e;
      }
    }
  }
  var Ny = {
    getCacheForType: function(l) {
      var t = Nl(El), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    },
    cacheSignal: function() {
      return Nl(El).controller.signal;
    }
  }, Cy = typeof WeakMap == "function" ? WeakMap : Map, al = 0, ml = null, J = null, $ = 0, nl = 0, nt = null, ia = !1, hu = !1, Tc = !1, Vt = 0, gl = 0, ca = 0, Xa = 0, _c = 0, et = 0, gu = 0, cn = null, Vl = null, pc = !1, oe = 0, F1 = 0, he = 1 / 0, ge = null, fa = null, Ml = 0, sa = null, Su = null, xt = 0, Mc = 0, Oc = null, k1 = null, fn = 0, Dc = null;
  function ot() {
    return (al & 2) !== 0 && $ !== 0 ? $ & -$ : _.T !== null ? Rc() : gf();
  }
  function I1() {
    if (et === 0) if (($ & 536870912) === 0 || k) {
      var l = _n;
      _n <<= 1, (_n & 3932160) === 0 && (_n = 262144), et = l;
    } else et = 536870912;
    return l = at.current, l !== null && (l.flags |= 32), et;
  }
  function xl(l, t, a) {
    (l === ml && (nl === 2 || nl === 9) || l.cancelPendingCommit !== null) && (bu(l, 0), ma(l, $, et, !1)), On(l, a), ((al & 2) === 0 || l !== ml) && (l === ml && ((al & 2) === 0 && (Xa |= a), gl === 4 && ma(l, $, et, !1)), Kt(l));
  }
  function P1(l, t, a) {
    if ((al & 6) !== 0) throw Error(o(327));
    var u = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Du(l, t), n = u ? By(l, t) : rc(l, t, !0), e = u;
    do {
      if (n === 0) {
        hu && !u && ma(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, e && !Ry(a)) {
          n = rc(l, t, !1), e = !1;
          continue;
        }
        if (n === 2) {
          if (e = t, l.errorRecoveryDisabledLanes & e) var i = 0;
          else i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              n = cn;
              var f = c.current.memoizedState.isDehydrated;
              if (f && (bu(c, i).flags |= 256), i = rc(c, i, !1), i !== 2) {
                if (Tc && !f) {
                  c.errorRecoveryDisabledLanes |= e, Xa |= e, n = 4;
                  break l;
                }
                e = Vl, Vl = n, e !== null && (Vl === null ? Vl = e : Vl.push.apply(Vl, e));
              }
              n = i;
            }
            if (e = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          bu(l, 0), ma(l, t, 0, !0);
          break;
        }
        l: {
          switch (u = l, e = n, e) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ma(u, t, et, !ia);
              break l;
            case 2:
              Vl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (n = oe + 300 - kl(), 10 < n)) {
            if (ma(u, t, et, !ia), Mn(u, 0, !0) !== 0) break l;
            xt = t, u.timeoutHandle = Ns(ls.bind(null, u, a, Vl, ge, pc, t, et, Xa, gu, ia, e, "Throttled", -0, 0), n);
            break l;
          }
          ls(u, a, Vl, ge, pc, t, et, Xa, gu, ia, e, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Kt(l);
  }
  function ls(l, t, a, u, n, e, i, c, f, h, b, A, g, S) {
    if (l.timeoutHandle = -1, A = t.subtreeFlags, A & 8192 || (A & 16785408) === 16785408) {
      A = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: rt
      }, J1(t, e, A);
      var H = (e & 62914560) === e ? oe - kl() : (e & 4194048) === e ? F1 - kl() : 0;
      if (H = hd(A, H), H !== null) {
        xt = e, l.cancelPendingCommit = H(fs.bind(null, l, t, e, a, u, n, i, c, f, b, A, null, g, S)), ma(l, e, i, !h);
        return;
      }
    }
    fs(l, t, e, a, u, n, i, c, f);
  }
  function Ry(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null))) for (var u = 0; u < a.length; u++) {
        var n = a[u], e = n.getSnapshot;
        n = n.value;
        try {
          if (!lt(e(), n)) return !1;
        } catch {
          return !1;
        }
      }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null) a.return = t, t = a;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function ma(l, t, a, u) {
    t &= ~_c, t &= ~Xa, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
    for (var n = t; 0 < n; ) {
      var e = 31 - Pl(n), i = 1 << e;
      u[e] = -1, n &= ~i;
    }
    a !== 0 && df(l, a, t);
  }
  function Se() {
    return (al & 6) === 0 ? (sn(0, !1), !1) : !0;
  }
  function Uc() {
    if (J !== null) {
      if (nl === 0) var l = J.return;
      else l = J, Rt = ra = null, xi(l), fu = null, xu = 0, l = J;
      for (; l !== null; ) N1(l.alternate, l), l = l.return;
      J = null;
    }
  }
  function bu(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, ky(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), xt = 0, Uc(), ml = l, J = a = Nt(l.current, null), $ = t, nl = 0, nt = null, ia = !1, hu = Du(l, t), Tc = !1, gu = et = _c = Xa = ca = gl = 0, Vl = cn = null, pc = !1, (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0) for (l = l.entanglements, u &= t; 0 < u; ) {
      var n = 31 - Pl(u), e = 1 << n;
      t |= l[n], u &= ~e;
    }
    return Vt = t, Gn(), a;
  }
  function ts(l, t) {
    X = null, _.H = Iu, t === cu || t === Jn ? (t = A0(), nl = 3) : t === Ci ? (t = A0(), nl = 4) : nl = t === ic ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, nt = t, J === null && (gl = 1, ie(l, st(t, l.current)));
  }
  function as() {
    var l = at.current;
    return l === null ? !0 : ($ & 4194048) === $ ? vt === null : ($ & 62914560) === $ || ($ & 536870912) !== 0 ? l === vt : !1;
  }
  function us() {
    var l = _.H;
    return _.H = Iu, l === null ? Iu : l;
  }
  function ns() {
    var l = _.A;
    return _.A = Ny, l;
  }
  function be() {
    gl = 4, ia || ($ & 4194048) !== $ && at.current !== null || (hu = !0), (ca & 134217727) === 0 && (Xa & 134217727) === 0 || ml === null || ma(ml, $, et, !1);
  }
  function rc(l, t, a) {
    var u = al;
    al |= 2;
    var n = us(), e = ns();
    (ml !== l || $ !== t) && (ge = null, bu(l, t)), t = !1;
    var i = gl;
    l: do
      try {
        if (nl !== 0 && J !== null) {
          var c = J, f = nt;
          switch (nl) {
            case 8:
              Uc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              at.current === null && (t = !0);
              var h = nl;
              if (nl = 0, nt = null, zu(l, c, f, h), a && hu) {
                i = 0;
                break l;
              }
              break;
            default:
              h = nl, nl = 0, nt = null, zu(l, c, f, h);
          }
        }
        qy(), i = gl;
        break;
      } catch (b) {
        ts(l, b);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Rt = ra = null, al = u, _.H = n, _.A = e, J === null && (ml = null, $ = 0, Gn()), i;
  }
  function qy() {
    for (; J !== null; ) es(J);
  }
  function By(l, t) {
    var a = al;
    al |= 2;
    var u = us(), n = ns();
    ml !== l || $ !== t ? (ge = null, he = kl() + 500, bu(l, t)) : hu = Du(l, t);
    l: do
      try {
        if (nl !== 0 && J !== null) {
          t = J;
          var e = nt;
          t: switch (nl) {
            case 1:
              nl = 0, nt = null, zu(l, t, e, 1);
              break;
            case 2:
            case 9:
              if (b0(e)) {
                nl = 0, nt = null, is(t);
                break;
              }
              t = function() {
                nl !== 2 && nl !== 9 || ml !== l || (nl = 7), Kt(l);
              }, e.then(t, t);
              break l;
            case 3:
              nl = 7;
              break l;
            case 4:
              nl = 5;
              break l;
            case 7:
              b0(e) ? (nl = 0, nt = null, is(t)) : (nl = 0, nt = null, zu(l, t, e, 7));
              break;
            case 5:
              var i = null;
              switch (J.tag) {
                case 26:
                  i = J.memoizedState;
                case 5:
                case 27:
                  var c = J;
                  if (i ? Js(i) : c.stateNode.complete) {
                    nl = 0, nt = null;
                    var f = c.sibling;
                    if (f !== null) J = f;
                    else {
                      var h = c.return;
                      h !== null ? (J = h, ze(h)) : J = null;
                    }
                    break t;
                  }
              }
              nl = 0, nt = null, zu(l, t, e, 5);
              break;
            case 6:
              nl = 0, nt = null, zu(l, t, e, 6);
              break;
            case 8:
              Uc(), gl = 6;
              break l;
            default:
              throw Error(o(462));
          }
        }
        jy();
        break;
      } catch (b) {
        ts(l, b);
      }
    while (!0);
    return Rt = ra = null, _.H = u, _.A = n, al = a, J !== null ? 0 : (ml = null, $ = 0, Gn(), gl);
  }
  function jy() {
    for (; J !== null && !vm(); ) es(J);
  }
  function es(l) {
    var t = r1(l.alternate, l, Vt);
    l.memoizedProps = l.pendingProps, t === null ? ze(l) : J = t;
  }
  function is(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = _1(a, t, t.pendingProps, t.type, void 0, $);
        break;
      case 11:
        t = _1(a, t, t.pendingProps, t.type.render, t.ref, $);
        break;
      case 5:
        xi(t);
      default:
        N1(a, t), t = J = c0(t, Vt), t = r1(a, t, Vt);
    }
    l.memoizedProps = l.pendingProps, t === null ? ze(l) : J = t;
  }
  function zu(l, t, a, u) {
    Rt = ra = null, xi(t), fu = null, xu = 0;
    var n = t.return;
    try {
      if (py(l, n, t, a, $)) {
        gl = 1, ie(l, st(a, l.current)), J = null;
        return;
      }
    } catch (e) {
      if (n !== null) throw J = n, e;
      gl = 1, ie(l, st(a, l.current)), J = null;
      return;
    }
    t.flags & 32768 ? (k || u === 1 ? l = !0 : hu || ($ & 536870912) !== 0 ? l = !1 : (ia = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = at.current, u !== null && u.tag === 13 && (u.flags |= 16384))), cs(t, l)) : ze(t);
  }
  function ze(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        cs(t, ia);
        return;
      }
      l = t.return;
      var a = Dy(t.alternate, t, Vt);
      if (a !== null) {
        J = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        J = t;
        return;
      }
      J = t = l;
    } while (t !== null);
    gl === 0 && (gl = 5);
  }
  function cs(l, t) {
    do {
      var a = Uy(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, J = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        J = l;
        return;
      }
      J = l = a;
    } while (l !== null);
    gl = 6, J = null;
  }
  function fs(l, t, a, u, n, e, i, c, f) {
    l.cancelPendingCommit = null;
    do
      Ae();
    while (Ml !== 0);
    if ((al & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (e = t.lanes | t.childLanes, e |= Si, _m(l, a, e, i, c, f), l === ml && (J = ml = null, $ = 0), Su = t, sa = l, xt = a, Mc = e, Oc = n, k1 = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Xy(En, function() {
        return vs(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
        u = _.T, _.T = null, n = D.p, D.p = 2, i = al, al |= 4;
        try {
          ry(l, t, a);
        } finally {
          al = i, D.p = n, _.T = u;
        }
      }
      Ml = 1, ss(), ms(), ys();
    }
  }
  function ss() {
    if (Ml === 1) {
      Ml = 0;
      var l = sa, t = Su, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = _.T, _.T = null;
        var u = D.p;
        D.p = 2;
        var n = al;
        al |= 4;
        try {
          V1(t, l);
          var e = Xc, i = If(l.containerInfo), c = e.focusedElem, f = e.selectionRange;
          if (i !== c && c && c.ownerDocument && kf(c.ownerDocument.documentElement, c)) {
            if (f !== null && di(c)) {
              var h = f.start, b = f.end;
              if (b === void 0 && (b = h), "selectionStart" in c) c.selectionStart = h, c.selectionEnd = Math.min(b, c.value.length);
              else {
                var A = c.ownerDocument || document, g = A && A.defaultView || window;
                if (g.getSelection) {
                  var S = g.getSelection(), H = c.textContent.length, j = Math.min(f.start, H), sl = f.end === void 0 ? j : Math.min(f.end, H);
                  !S.extend && j > sl && (i = sl, sl = j, j = i);
                  var d = Ff(c, j), s = Ff(c, sl);
                  if (d && s && (S.rangeCount !== 1 || S.anchorNode !== d.node || S.anchorOffset !== d.offset || S.focusNode !== s.node || S.focusOffset !== s.offset)) {
                    var v = A.createRange();
                    v.setStart(d.node, d.offset), S.removeAllRanges(), j > sl ? (S.addRange(v), S.extend(s.node, s.offset)) : (v.setEnd(s.node, s.offset), S.addRange(v));
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
              var z = A[c];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          Ce = !!Qc, Xc = Qc = null;
        } finally {
          al = n, D.p = u, _.T = a;
        }
      }
      l.current = t, Ml = 2;
    }
  }
  function ms() {
    if (Ml === 2) {
      Ml = 0;
      var l = sa, t = Su, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = _.T, _.T = null;
        var u = D.p;
        D.p = 2;
        var n = al;
        al |= 4;
        try {
          G1(l, t.alternate, t);
        } finally {
          al = n, D.p = u, _.T = a;
        }
      }
      Ml = 3;
    }
  }
  function ys() {
    if (Ml === 4 || Ml === 3) {
      Ml = 0, om();
      var l = sa, t = Su, a = xt, u = k1;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ml = 5 : (Ml = 0, Su = sa = null, ds(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (n === 0 && (fa = null), we(a), t = t.stateNode, Il && typeof Il.onCommitFiberRoot == "function") try {
        Il.onCommitFiberRoot(Ou, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (u !== null) {
        t = _.T, n = D.p, D.p = 2, _.T = null;
        try {
          for (var e = l.onRecoverableError, i = 0; i < u.length; i++) {
            var c = u[i];
            e(c.value, { componentStack: c.stack });
          }
        } finally {
          _.T = t, D.p = n;
        }
      }
      (xt & 3) !== 0 && Ae(), Kt(l), n = l.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? l === Dc ? fn++ : (fn = 0, Dc = l) : fn = 0, sn(0, !1);
    }
  }
  function ds(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Lu(t)));
  }
  function Ae() {
    return ss(), ms(), ys(), vs();
  }
  function vs() {
    if (Ml !== 5) return !1;
    var l = sa, t = Mc;
    Mc = 0;
    var a = we(xt), u = _.T, n = D.p;
    try {
      D.p = 32 > a ? 32 : a, _.T = null, a = Oc, Oc = null;
      var e = sa, i = xt;
      if (Ml = 0, Su = sa = null, xt = 0, (al & 6) !== 0) throw Error(o(331));
      var c = al;
      if (al |= 4, W1(e.current), K1(e, e.current, i, a), al = c, sn(0, !1), Il && typeof Il.onPostCommitFiberRoot == "function") try {
        Il.onPostCommitFiberRoot(Ou, e);
      } catch {
      }
      return !0;
    } finally {
      D.p = n, _.T = u, ds(l, t);
    }
  }
  function os(l, t, a) {
    t = st(a, t), t = ec(l.stateNode, t, 2), l = ja(l, t, 2), l !== null && (On(l, 2), Kt(l));
  }
  function el(l, t, a) {
    if (l.tag === 3) os(l, l, a);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        os(t, l, a);
        break;
      } else if (t.tag === 1) {
        var u = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (fa === null || !fa.has(u))) {
          l = st(a, l), a = h1(2), u = ja(t, a, 2), u !== null && (g1(a, u, t, l), On(u, 2), Kt(u));
          break;
        }
      }
      t = t.return;
    }
  }
  function Hc(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new Cy();
      var n = /* @__PURE__ */ new Set();
      u.set(t, n);
    } else n = u.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), u.set(t, n));
    n.has(a) || (Tc = !0, n.add(a), l = Yy.bind(null, l, t, a), t.then(l, l));
  }
  function Yy(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, ml === l && ($ & a) === a && (gl === 4 || gl === 3 && ($ & 62914560) === $ && 300 > kl() - oe ? (al & 2) === 0 && bu(l, 0) : _c |= a, gu === $ && (gu = 0)), Kt(l);
  }
  function hs(l, t) {
    t === 0 && (t = yf()), l = Oa(l, t), l !== null && (On(l, t), Kt(l));
  }
  function Gy(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), hs(l, a);
  }
  function Qy(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode, n = l.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    u !== null && u.delete(t), hs(l, a);
  }
  function Xy(l, t) {
    return xe(l, t);
  }
  var Ee = null, Au = null, Nc = !1, Te = !1, Cc = !1, ya = 0;
  function Kt(l) {
    l !== Au && l.next === null && (Au === null ? Ee = Au = l : Au = Au.next = l), Te = !0, Nc || (Nc = !0, Ly());
  }
  function sn(l, t) {
    if (!Cc && Te) {
      Cc = !0;
      do
        for (var a = !1, u = Ee; u !== null; ) {
          if (!t) if (l !== 0) {
            var n = u.pendingLanes;
            if (n === 0) var e = 0;
            else {
              var i = u.suspendedLanes, c = u.pingedLanes;
              e = (1 << 31 - Pl(42 | l) + 1) - 1, e &= n & ~(i & ~c), e = e & 201326741 ? e & 201326741 | 1 : e ? e | 2 : 0;
            }
            e !== 0 && (a = !0, zs(u, e));
          } else e = $, e = Mn(u, u === ml ? e : 0, u.cancelPendingCommit !== null || u.timeoutHandle !== -1), (e & 3) === 0 || Du(u, e) || (a = !0, zs(u, e));
          u = u.next;
        }
      while (a);
      Cc = !1;
    }
  }
  function Zy() {
    gs();
  }
  function gs() {
    Te = Nc = !1;
    var l = 0;
    ya !== 0 && Fy() && (l = ya);
    for (var t = kl(), a = null, u = Ee; u !== null; ) {
      var n = u.next, e = Ss(u, t);
      e === 0 ? (u.next = null, a === null ? Ee = n : a.next = n, n === null && (Au = a)) : (a = u, (l !== 0 || (e & 3) !== 0) && (Te = !0)), u = n;
    }
    Ml !== 0 && Ml !== 5 || sn(l, !1), ya !== 0 && (ya = 0);
  }
  function Ss(l, t) {
    for (var a = l.suspendedLanes, u = l.pingedLanes, n = l.expirationTimes, e = l.pendingLanes & -62914561; 0 < e; ) {
      var i = 31 - Pl(e), c = 1 << i, f = n[i];
      f === -1 ? ((c & a) === 0 || (c & u) !== 0) && (n[i] = Tm(c, t)) : f <= t && (l.expiredLanes |= c), e &= ~c;
    }
    if (t = ml, a = $, a = Mn(l, l === t ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u = l.callbackNode, a === 0 || l === t && (nl === 2 || nl === 9) || l.cancelPendingCommit !== null) return u !== null && u !== null && Ke(u), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Du(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (u !== null && Ke(u), we(a)) {
        case 2:
        case 8:
          a = sf;
          break;
        case 32:
          a = En;
          break;
        case 268435456:
          a = mf;
          break;
        default:
          a = En;
      }
      return u = bs.bind(null, l), a = xe(a, u), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return u !== null && u !== null && Ke(u), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function bs(l, t) {
    if (Ml !== 0 && Ml !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (Ae() && l.callbackNode !== a) return null;
    var u = $;
    return u = Mn(l, l === ml ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u === 0 ? null : (P1(l, u, t), Ss(l, kl()), l.callbackNode != null && l.callbackNode === a ? bs.bind(null, l) : null);
  }
  function zs(l, t) {
    if (Ae()) return null;
    P1(l, t, !0);
  }
  function Ly() {
    Iy(function() {
      (al & 6) !== 0 ? xe(ff, Zy) : gs();
    });
  }
  function Rc() {
    if (ya === 0) {
      var l = eu;
      l === 0 && (l = Tn, Tn <<= 1, (Tn & 261888) === 0 && (Tn = 256)), ya = l;
    }
    return ya;
  }
  function As(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Hn("" + l);
  }
  function Es(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function Vy(l, t, a, u, n) {
    if (t === "submit" && a && a.stateNode === n) {
      var e = As((n[Gl] || null).action), i = u.submitter;
      i && (t = (t = i[Gl] || null) ? As(t.formAction) : i.getAttribute("formAction"), t !== null && (e = t, i = null));
      var c = new qn("action", "action", null, u, n);
      l.push({
        event: c,
        listeners: [{
          instance: null,
          listener: function() {
            if (u.defaultPrevented) {
              if (ya !== 0) {
                var f = i ? Es(n, i) : new FormData(n);
                Pi(a, {
                  pending: !0,
                  data: f,
                  method: n.method,
                  action: e
                }, null, f);
              }
            } else typeof e == "function" && (c.preventDefault(), f = i ? Es(n, i) : new FormData(n), Pi(a, {
              pending: !0,
              data: f,
              method: n.method,
              action: e
            }, e, f));
          },
          currentTarget: n
        }]
      });
    }
  }
  for (var qc = 0; qc < gi.length; qc++) {
    var Bc = gi[qc];
    zt(Bc.toLowerCase(), "on" + (Bc[0].toUpperCase() + Bc.slice(1)));
  }
  zt(t0, "onAnimationEnd"), zt(a0, "onAnimationIteration"), zt(u0, "onAnimationStart"), zt("dblclick", "onDoubleClick"), zt("focusin", "onFocus"), zt("focusout", "onBlur"), zt(ny, "onTransitionRun"), zt(ey, "onTransitionStart"), zt(iy, "onTransitionCancel"), zt(n0, "onTransitionEnd"), Ka("onMouseEnter", ["mouseout", "mouseover"]), Ka("onMouseLeave", ["mouseout", "mouseover"]), Ka("onPointerEnter", ["pointerout", "pointerover"]), Ka("onPointerLeave", ["pointerout", "pointerover"]), Ta("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ta("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ta("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ta("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ta("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ta("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var mn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xy = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));
  function Ts(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a], n = u.event;
      u = u.listeners;
      l: {
        var e = void 0;
        if (t) for (var i = u.length - 1; 0 <= i; i--) {
          var c = u[i], f = c.instance, h = c.currentTarget;
          if (c = c.listener, f !== e && n.isPropagationStopped()) break l;
          e = c, n.currentTarget = h;
          try {
            e(n);
          } catch (b) {
            Yn(b);
          }
          n.currentTarget = null, e = f;
        }
        else for (i = 0; i < u.length; i++) {
          if (c = u[i], f = c.instance, h = c.currentTarget, c = c.listener, f !== e && n.isPropagationStopped()) break l;
          e = c, n.currentTarget = h;
          try {
            e(n);
          } catch (b) {
            Yn(b);
          }
          n.currentTarget = null, e = f;
        }
      }
    }
  }
  function w(l, t) {
    var a = t[We];
    a === void 0 && (a = t[We] = /* @__PURE__ */ new Set());
    var u = l + "__bubble";
    a.has(u) || (ps(t, l, 2, !1), a.add(u));
  }
  function jc(l, t, a) {
    var u = 0;
    t && (u |= 4), ps(a, l, u, t);
  }
  var _e = "_reactListening" + Math.random().toString(36).slice(2);
  function _s(l) {
    if (!l[_e]) {
      l[_e] = !0, zf.forEach(function(a) {
        a !== "selectionchange" && (xy.has(a) || jc(a, !1, l), jc(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[_e] || (t[_e] = !0, jc("selectionchange", !1, t));
    }
  }
  function ps(l, t, a, u) {
    switch (ks(t)) {
      case 2:
        var n = Ad;
        break;
      case 8:
        n = Ed;
        break;
      default:
        n = kc;
    }
    a = n.bind(null, t, a, l), n = void 0, !ui || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), u ? n !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: n
    }) : l.addEventListener(t, a, !0) : n !== void 0 ? l.addEventListener(t, a, { passive: n }) : l.addEventListener(t, a, !1);
  }
  function Yc(l, t, a, u, n) {
    var e = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null) l: for (; ; ) {
      if (u === null) return;
      var i = u.tag;
      if (i === 3 || i === 4) {
        var c = u.stateNode.containerInfo;
        if (c === n) break;
        if (i === 4) for (i = u.return; i !== null; ) {
          var f = i.tag;
          if ((f === 3 || f === 4) && i.stateNode.containerInfo === n) return;
          i = i.return;
        }
        for (; c !== null; ) {
          if (i = La(c), i === null) return;
          if (f = i.tag, f === 5 || f === 6 || f === 26 || f === 27) {
            u = e = i;
            continue l;
          }
          c = c.parentNode;
        }
      }
      u = u.return;
    }
    Nf(function() {
      var h = e, b = ti(a), A = [];
      l: {
        var g = e0.get(l);
        if (g !== void 0) {
          var S = qn, H = l;
          switch (l) {
            case "keypress":
              if (Cn(a) === 0) break l;
            case "keydown":
            case "keyup":
              S = Zm;
              break;
            case "focusin":
              H = "focus", S = ci;
              break;
            case "focusout":
              H = "blur", S = ci;
              break;
            case "beforeblur":
            case "afterblur":
              S = ci;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = qf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = qm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = Lm;
              break;
            case t0:
            case a0:
            case u0:
              S = Bm;
              break;
            case n0:
              S = Vm;
              break;
            case "scroll":
            case "scrollend":
              S = Rm;
              break;
            case "wheel":
              S = xm;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = jm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = jf;
              break;
            case "toggle":
            case "beforetoggle":
              S = Km;
          }
          var j = (t & 4) !== 0, sl = !j && (l === "scroll" || l === "scrollend"), d = j ? g !== null ? g + "Capture" : null : g;
          j = [];
          for (var s = h, v; s !== null; ) {
            var z = s;
            if (v = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || v === null || d === null || (z = Nu(s, d), z != null && j.push(yn(s, z, v))), sl) break;
            s = s.return;
          }
          0 < j.length && (g = new S(g, H, null, a, b), A.push({
            event: g,
            listeners: j
          }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (g = l === "mouseover" || l === "pointerover", S = l === "mouseout" || l === "pointerout", g && a !== li && (H = a.relatedTarget || a.fromElement) && (La(H) || H[Uu])) break l;
          if ((S || g) && (g = b.window === b ? b : (g = b.ownerDocument) ? g.defaultView || g.parentWindow : window, S ? (H = a.relatedTarget || a.toElement, S = h, H = H ? La(H) : null, H !== null && (sl = V(H), j = H.tag, H !== sl || j !== 5 && j !== 27 && j !== 6) && (H = null)) : (S = null, H = h), S !== H)) {
            if (j = qf, z = "onMouseLeave", d = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (j = jf, z = "onPointerLeave", d = "onPointerEnter", s = "pointer"), sl = S == null ? g : Hu(S), v = H == null ? g : Hu(H), g = new j(z, s + "leave", S, a, b), g.target = sl, g.relatedTarget = v, z = null, La(b) === h && (j = new j(d, s + "enter", H, a, b), j.target = v, j.relatedTarget = sl, z = j), sl = z, S && H) t: {
              for (j = Ky, d = S, s = H, v = 0, z = d; z; z = j(z)) v++;
              z = 0;
              for (var q = s; q; q = j(q)) z++;
              for (; 0 < v - z; ) d = j(d), v--;
              for (; 0 < z - v; ) s = j(s), z--;
              for (; v--; ) {
                if (d === s || s !== null && d === s.alternate) {
                  j = d;
                  break t;
                }
                d = j(d), s = j(s);
              }
              j = null;
            }
            else j = null;
            S !== null && Ms(A, g, S, j, !1), H !== null && sl !== null && Ms(A, sl, H, j, !0);
          }
        }
        l: {
          if (g = h ? Hu(h) : window, S = g.nodeName && g.nodeName.toLowerCase(), S === "select" || S === "input" && g.type === "file") var P = xf;
          else if (Lf(g)) if (Kf) P = ty;
          else {
            P = Pm;
            var N = Im;
          }
          else S = g.nodeName, !S || S.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? h && Pe(h.elementType) && (P = xf) : P = ly;
          if (P && (P = P(l, h))) {
            Vf(A, P, a, b);
            break l;
          }
          N && N(l, g, h), l === "focusout" && h && g.type === "number" && h.memoizedProps.value != null && Ie(g, "number", g.value);
        }
        switch (N = h ? Hu(h) : window, l) {
          case "focusin":
            (Lf(N) || N.contentEditable === "true") && (ka = N, vi = h, Qu = null);
            break;
          case "focusout":
            Qu = vi = ka = null;
            break;
          case "mousedown":
            oi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            oi = !1, Pf(A, a, b);
            break;
          case "selectionchange":
            if (uy) break;
          case "keydown":
          case "keyup":
            Pf(A, a, b);
        }
        var Z;
        if (si) l: {
          switch (l) {
            case "compositionstart":
              var F = "onCompositionStart";
              break l;
            case "compositionend":
              F = "onCompositionEnd";
              break l;
            case "compositionupdate":
              F = "onCompositionUpdate";
              break l;
          }
          F = void 0;
        }
        else Fa ? Xf(l, a) && (F = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (F = "onCompositionStart");
        F && (Yf && a.locale !== "ko" && (Fa || F !== "onCompositionStart" ? F === "onCompositionEnd" && Fa && (Z = Cf()) : (kt = b, ni = "value" in kt ? kt.value : kt.textContent, Fa = !0)), N = pe(h, F), 0 < N.length && (F = new Bf(F, l, null, a, b), A.push({
          event: F,
          listeners: N
        }), Z ? F.data = Z : (Z = Zf(a), Z !== null && (F.data = Z)))), (Z = wm ? Wm(l, a) : $m(l, a)) && (F = pe(h, "onBeforeInput"), 0 < F.length && (N = new Bf("onBeforeInput", "beforeinput", null, a, b), A.push({
          event: N,
          listeners: F
        }), N.data = Z)), Vy(A, l, h, a, b);
      }
      Ts(A, t);
    });
  }
  function yn(l, t, a) {
    return {
      instance: l,
      listener: t,
      currentTarget: a
    };
  }
  function pe(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var n = l, e = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || e === null || (n = Nu(l, a), n != null && u.unshift(yn(l, n, e)), n = Nu(l, t), n != null && u.push(yn(l, n, e))), l.tag === 3) return u;
      l = l.return;
    }
    return [];
  }
  function Ky(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Ms(l, t, a, u, n) {
    for (var e = t._reactName, i = []; a !== null && a !== u; ) {
      var c = a, f = c.alternate, h = c.stateNode;
      if (c = c.tag, f !== null && f === u) break;
      c !== 5 && c !== 26 && c !== 27 || h === null || (f = h, n ? (h = Nu(a, e), h != null && i.unshift(yn(a, h, f))) : n || (h = Nu(a, e), h != null && i.push(yn(a, h, f)))), a = a.return;
    }
    i.length !== 0 && l.push({
      event: t,
      listeners: i
    });
  }
  var Jy = /\r\n?/g, wy = /\u0000|\uFFFD/g;
  function Os(l) {
    return (typeof l == "string" ? l : "" + l).replace(Jy, `
`).replace(wy, "");
  }
  function Ds(l, t) {
    return t = Os(t), Os(l) === t;
  }
  function fl(l, t, a, u, n, e) {
    switch (a) {
      case "children":
        typeof u == "string" ? t === "body" || t === "textarea" && u === "" || wa(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && wa(l, "" + u);
        break;
      case "className":
        Un(l, "class", u);
        break;
      case "tabIndex":
        Un(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Un(l, a, u);
        break;
      case "style":
        rf(l, u, e);
        break;
      case "data":
        if (t !== "object") {
          Un(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = Hn("" + u), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof e == "function" && (a === "formAction" ? (t !== "input" && fl(l, t, "name", n.name, n, null), fl(l, t, "formEncType", n.formEncType, n, null), fl(l, t, "formMethod", n.formMethod, n, null), fl(l, t, "formTarget", n.formTarget, n, null)) : (fl(l, t, "encType", n.encType, n, null), fl(l, t, "method", n.method, n, null), fl(l, t, "target", n.target, n, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = Hn("" + u), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = rt);
        break;
      case "onScroll":
        u != null && w("scroll", l);
        break;
      case "onScrollEnd":
        u != null && w("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(o(61));
          if (a = u.__html, a != null) {
            if (n.children != null) throw Error(o(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
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
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = Hn("" + u), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "" + u) : l.removeAttribute(a);
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
        u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0 ? l.setAttribute(a, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(a, u) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(a) : l.setAttribute(a, u);
        break;
      case "popover":
        w("beforetoggle", l), w("toggle", l), Dn(l, "popover", u);
        break;
      case "xlinkActuate":
        Ut(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Ut(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Ut(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Ut(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Ut(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Ut(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Ut(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Ut(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Ut(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        Dn(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Nm.get(a) || a, Dn(l, a, u));
    }
  }
  function Gc(l, t, a, u, n, e) {
    switch (a) {
      case "style":
        rf(l, u, e);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(o(61));
          if (a = u.__html, a != null) {
            if (n.children != null) throw Error(o(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string" ? wa(l, u) : (typeof u == "number" || typeof u == "bigint") && wa(l, "" + u);
        break;
      case "onScroll":
        u != null && w("scroll", l);
        break;
      case "onScrollEnd":
        u != null && w("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = rt);
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
        if (!Af.hasOwnProperty(a)) l: {
          if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), t = a.slice(2, n ? a.length - 7 : void 0), e = l[Gl] || null, e = e != null ? e[a] : null, typeof e == "function" && l.removeEventListener(t, e, n), typeof u == "function")) {
            typeof e != "function" && e !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, n);
            break l;
          }
          a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : Dn(l, a, u);
        }
    }
  }
  function Rl(l, t, a) {
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
        w("error", l), w("load", l);
        var u = !1, n = !1, e;
        for (e in a) if (a.hasOwnProperty(e)) {
          var i = a[e];
          if (i != null) switch (e) {
            case "src":
              u = !0;
              break;
            case "srcSet":
              n = !0;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(o(137, t));
            default:
              fl(l, t, e, i, a, null);
          }
        }
        n && fl(l, t, "srcSet", a.srcSet, a, null), u && fl(l, t, "src", a.src, a, null);
        return;
      case "input":
        w("invalid", l);
        var c = e = i = n = null, f = null, h = null;
        for (u in a) if (a.hasOwnProperty(u)) {
          var b = a[u];
          if (b != null) switch (u) {
            case "name":
              n = b;
              break;
            case "type":
              i = b;
              break;
            case "checked":
              f = b;
              break;
            case "defaultChecked":
              h = b;
              break;
            case "value":
              e = b;
              break;
            case "defaultValue":
              c = b;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (b != null) throw Error(o(137, t));
              break;
            default:
              fl(l, t, u, b, a, null);
          }
        }
        Mf(l, e, c, f, h, i, n, !1);
        return;
      case "select":
        w("invalid", l), u = i = e = null;
        for (n in a) if (a.hasOwnProperty(n) && (c = a[n], c != null)) switch (n) {
          case "value":
            e = c;
            break;
          case "defaultValue":
            i = c;
            break;
          case "multiple":
            u = c;
          default:
            fl(l, t, n, c, a, null);
        }
        t = e, a = i, l.multiple = !!u, t != null ? Ja(l, !!u, t, !1) : a != null && Ja(l, !!u, a, !0);
        return;
      case "textarea":
        w("invalid", l), e = n = u = null;
        for (i in a) if (a.hasOwnProperty(i) && (c = a[i], c != null)) switch (i) {
          case "value":
            u = c;
            break;
          case "defaultValue":
            n = c;
            break;
          case "children":
            e = c;
            break;
          case "dangerouslySetInnerHTML":
            if (c != null) throw Error(o(91));
            break;
          default:
            fl(l, t, i, c, a, null);
        }
        Df(l, u, n, e);
        return;
      case "option":
        for (f in a) a.hasOwnProperty(f) && (u = a[f], u != null) && (f === "selected" ? l.selected = u && typeof u != "function" && typeof u != "symbol" : fl(l, t, f, u, a, null));
        return;
      case "dialog":
        w("beforetoggle", l), w("toggle", l), w("cancel", l), w("close", l);
        break;
      case "iframe":
      case "object":
        w("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < mn.length; u++) w(mn[u], l);
        break;
      case "image":
        w("error", l), w("load", l);
        break;
      case "details":
        w("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        w("error", l), w("load", l);
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
        for (h in a) if (a.hasOwnProperty(h) && (u = a[h], u != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(o(137, t));
          default:
            fl(l, t, h, u, a, null);
        }
        return;
      default:
        if (Pe(t)) {
          for (b in a) a.hasOwnProperty(b) && (u = a[b], u !== void 0 && Gc(l, t, b, u, a, void 0));
          return;
        }
    }
    for (c in a) a.hasOwnProperty(c) && (u = a[c], u != null && fl(l, t, c, u, a, null));
  }
  function Wy(l, t, a, u) {
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
        var n = null, e = null, i = null, c = null, f = null, h = null, b = null;
        for (S in a) {
          var A = a[S];
          if (a.hasOwnProperty(S) && A != null) switch (S) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              f = A;
            default:
              u.hasOwnProperty(S) || fl(l, t, S, null, u, A);
          }
        }
        for (var g in u) {
          var S = u[g];
          if (A = a[g], u.hasOwnProperty(g) && (S != null || A != null)) switch (g) {
            case "type":
              e = S;
              break;
            case "name":
              n = S;
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
              if (S != null) throw Error(o(137, t));
              break;
            default:
              S !== A && fl(l, t, g, S, u, A);
          }
        }
        ke(l, i, c, f, h, b, e, n);
        return;
      case "select":
        S = i = c = g = null;
        for (e in a) if (f = a[e], a.hasOwnProperty(e) && f != null) switch (e) {
          case "value":
            break;
          case "multiple":
            S = f;
          default:
            u.hasOwnProperty(e) || fl(l, t, e, null, u, f);
        }
        for (n in u) if (e = u[n], f = a[n], u.hasOwnProperty(n) && (e != null || f != null)) switch (n) {
          case "value":
            g = e;
            break;
          case "defaultValue":
            c = e;
            break;
          case "multiple":
            i = e;
          default:
            e !== f && fl(l, t, n, e, u, f);
        }
        t = c, a = i, u = S, g != null ? Ja(l, !!a, g, !1) : !!u != !!a && (t != null ? Ja(l, !!a, t, !0) : Ja(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        S = g = null;
        for (c in a) if (n = a[c], a.hasOwnProperty(c) && n != null && !u.hasOwnProperty(c)) switch (c) {
          case "value":
            break;
          case "children":
            break;
          default:
            fl(l, t, c, null, u, n);
        }
        for (i in u) if (n = u[i], e = a[i], u.hasOwnProperty(i) && (n != null || e != null)) switch (i) {
          case "value":
            g = n;
            break;
          case "defaultValue":
            S = n;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (n != null) throw Error(o(91));
            break;
          default:
            n !== e && fl(l, t, i, n, u, e);
        }
        Of(l, g, S);
        return;
      case "option":
        for (var H in a) g = a[H], a.hasOwnProperty(H) && g != null && !u.hasOwnProperty(H) && (H === "selected" ? l.selected = !1 : fl(l, t, H, null, u, g));
        for (f in u) g = u[f], S = a[f], u.hasOwnProperty(f) && g !== S && (g != null || S != null) && (f === "selected" ? l.selected = g && typeof g != "function" && typeof g != "symbol" : fl(l, t, f, g, u, S));
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
        for (var j in a) g = a[j], a.hasOwnProperty(j) && g != null && !u.hasOwnProperty(j) && fl(l, t, j, null, u, g);
        for (h in u) if (g = u[h], S = a[h], u.hasOwnProperty(h) && g !== S && (g != null || S != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (g != null) throw Error(o(137, t));
            break;
          default:
            fl(l, t, h, g, u, S);
        }
        return;
      default:
        if (Pe(t)) {
          for (var sl in a) g = a[sl], a.hasOwnProperty(sl) && g !== void 0 && !u.hasOwnProperty(sl) && Gc(l, t, sl, void 0, u, g);
          for (b in u) g = u[b], S = a[b], !u.hasOwnProperty(b) || g === S || g === void 0 && S === void 0 || Gc(l, t, b, g, u, S);
          return;
        }
    }
    for (var d in a) g = a[d], a.hasOwnProperty(d) && g != null && !u.hasOwnProperty(d) && fl(l, t, d, null, u, g);
    for (A in u) g = u[A], S = a[A], !u.hasOwnProperty(A) || g === S || g == null && S == null || fl(l, t, A, g, u, S);
  }
  function Us(l) {
    switch (l) {
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
  function $y() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0; u < a.length; u++) {
        var n = a[u], e = n.transferSize, i = n.initiatorType, c = n.duration;
        if (e && c && Us(i)) {
          for (i = 0, c = n.responseEnd, u += 1; u < a.length; u++) {
            var f = a[u], h = f.startTime;
            if (h > c) break;
            var b = f.transferSize, A = f.initiatorType;
            b && Us(A) && (f = f.responseEnd, i += b * (f < c ? 1 : (c - h) / (f - h)));
          }
          if (--u, t += 8 * (e + i) / (n.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Qc = null, Xc = null;
  function Me(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function rs(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Hs(l, t) {
    if (l === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Zc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Lc = null;
  function Fy() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Lc ? !1 : (Lc = l, !0) : (Lc = null, !1);
  }
  var Ns = typeof setTimeout == "function" ? setTimeout : void 0, ky = typeof clearTimeout == "function" ? clearTimeout : void 0, Cs = typeof Promise == "function" ? Promise : void 0, Iy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cs < "u" ? function(l) {
    return Cs.resolve(null).then(l).catch(Py);
  } : Ns;
  function Py(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function da(l) {
    return l === "head";
  }
  function Rs(l, t) {
    var a = t, u = 0;
    do {
      var n = a.nextSibling;
      if (l.removeChild(a), n && n.nodeType === 8) if (a = n.data, a === "/$" || a === "/&") {
        if (u === 0) {
          l.removeChild(n), pu(t);
          return;
        }
        u--;
      } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") u++;
      else if (a === "html") dn(l.ownerDocument.documentElement);
      else if (a === "head") {
        a = l.ownerDocument.head, dn(a);
        for (var e = a.firstChild; e; ) {
          var i = e.nextSibling, c = e.nodeName;
          e[ru] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && e.rel.toLowerCase() === "stylesheet" || a.removeChild(e), e = i;
        }
      } else a === "body" && dn(l.ownerDocument.body);
      a = n;
    } while (a);
    pu(t);
  }
  function qs(l, t) {
    var a = l;
    l = 0;
    do {
      var u = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), u && u.nodeType === 8) if (a = u.data, a === "/$") {
        if (l === 0) break;
        l--;
      } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
      a = u;
    } while (a);
  }
  function Vc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Vc(a), $e(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function ld(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var n = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[ru]) switch (t) {
          case "meta":
            if (!l.hasAttribute("itemprop")) break;
            return l;
          case "link":
            if (e = l.getAttribute("rel"), e === "stylesheet" && l.hasAttribute("data-precedence")) break;
            if (e !== n.rel || l.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || l.getAttribute("title") !== (n.title == null ? null : n.title)) break;
            return l;
          case "style":
            if (l.hasAttribute("data-precedence")) break;
            return l;
          case "script":
            if (e = l.getAttribute("src"), (e !== (n.src == null ? null : n.src) || l.getAttribute("type") !== (n.type == null ? null : n.type) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && e && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
            return l;
          default:
            return l;
        }
      } else if (t === "input" && l.type === "hidden") {
        var e = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && l.getAttribute("name") === e) return l;
      } else return l;
      if (l = ht(l.nextSibling), l === null) break;
    }
    return null;
  }
  function td(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = ht(l.nextSibling), l === null)) return null;
    return l;
  }
  function Bs(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = ht(l.nextSibling), l === null)) return null;
    return l;
  }
  function xc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Kc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function ad(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var u = function() {
        t(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), l._reactRetry = u;
    }
  }
  function ht(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var Jc = null;
  function js(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return ht(l.nextSibling);
          t--;
        } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Ys(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Gs(l, t, a) {
    switch (t = Me(a), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(o(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(o(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(o(454));
        return l;
      default:
        throw Error(o(451));
    }
  }
  function dn(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    $e(l);
  }
  var gt = /* @__PURE__ */ new Map(), Qs = /* @__PURE__ */ new Set();
  function Oe(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Jt = D.d;
  D.d = {
    f: ud,
    r: nd,
    D: ed,
    C: id,
    L: cd,
    m: fd,
    X: md,
    S: sd,
    M: yd
  };
  function ud() {
    var l = Jt.f(), t = Se();
    return l || t;
  }
  function nd(l) {
    var t = Va(l);
    t !== null && t.tag === 5 && t.type === "form" ? n1(t) : Jt.r(l);
  }
  var Eu = typeof document > "u" ? null : document;
  function Xs(l, t, a) {
    var u = Eu;
    if (u && typeof t == "string" && t) {
      var n = ct(t);
      n = 'link[rel="' + l + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), Qs.has(n) || (Qs.add(n), l = {
        rel: l,
        crossOrigin: a,
        href: t
      }, u.querySelector(n) === null && (t = u.createElement("link"), Rl(t, "link", l), Dl(t), u.head.appendChild(t)));
    }
  }
  function ed(l) {
    Jt.D(l), Xs("dns-prefetch", l, null);
  }
  function id(l, t) {
    Jt.C(l, t), Xs("preconnect", l, t);
  }
  function cd(l, t, a) {
    Jt.L(l, t, a);
    var u = Eu;
    if (u && l && t) {
      var n = 'link[rel="preload"][as="' + ct(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + ct(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + ct(a.imageSizes) + '"]')) : n += '[href="' + ct(l) + '"]';
      var e = n;
      switch (t) {
        case "style":
          e = Tu(l);
          break;
        case "script":
          e = _u(l);
      }
      gt.has(e) || (l = O({
        rel: "preload",
        href: t === "image" && a && a.imageSrcSet ? void 0 : l,
        as: t
      }, a), gt.set(e, l), u.querySelector(n) !== null || t === "style" && u.querySelector(vn(e)) || t === "script" && u.querySelector(on(e)) || (t = u.createElement("link"), Rl(t, "link", l), Dl(t), u.head.appendChild(t)));
    }
  }
  function fd(l, t) {
    Jt.m(l, t);
    var a = Eu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + ct(u) + '"][href="' + ct(l) + '"]', e = n;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          e = _u(l);
      }
      if (!gt.has(e) && (l = O({
        rel: "modulepreload",
        href: l
      }, t), gt.set(e, l), a.querySelector(n) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(on(e))) return;
        }
        u = a.createElement("link"), Rl(u, "link", l), Dl(u), a.head.appendChild(u);
      }
    }
  }
  function sd(l, t, a) {
    Jt.S(l, t, a);
    var u = Eu;
    if (u && l) {
      var n = xa(u).hoistableStyles, e = Tu(l);
      t = t || "default";
      var i = n.get(e);
      if (!i) {
        var c = {
          loading: 0,
          preload: null
        };
        if (i = u.querySelector(vn(e))) c.loading = 5;
        else {
          l = O({
            rel: "stylesheet",
            href: l,
            "data-precedence": t
          }, a), (a = gt.get(e)) && wc(l, a);
          var f = i = u.createElement("link");
          Dl(f), Rl(f, "link", l), f._p = new Promise(function(h, b) {
            f.onload = h, f.onerror = b;
          }), f.addEventListener("load", function() {
            c.loading |= 1;
          }), f.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, De(i, t, u);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, n.set(e, i);
      }
    }
  }
  function md(l, t) {
    Jt.X(l, t);
    var a = Eu;
    if (a && l) {
      var u = xa(a).hoistableScripts, n = _u(l), e = u.get(n);
      e || (e = a.querySelector(on(n)), e || (l = O({
        src: l,
        async: !0
      }, t), (t = gt.get(n)) && Wc(l, t), e = a.createElement("script"), Dl(e), Rl(e, "link", l), a.head.appendChild(e)), e = {
        type: "script",
        instance: e,
        count: 1,
        state: null
      }, u.set(n, e));
    }
  }
  function yd(l, t) {
    Jt.M(l, t);
    var a = Eu;
    if (a && l) {
      var u = xa(a).hoistableScripts, n = _u(l), e = u.get(n);
      e || (e = a.querySelector(on(n)), e || (l = O({
        src: l,
        async: !0,
        type: "module"
      }, t), (t = gt.get(n)) && Wc(l, t), e = a.createElement("script"), Dl(e), Rl(e, "link", l), a.head.appendChild(e)), e = {
        type: "script",
        instance: e,
        count: 1,
        state: null
      }, u.set(n, e));
    }
  }
  function Zs(l, t, a, u) {
    var n = (n = K.current) ? Oe(n) : null;
    if (!n) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Tu(a.href), a = xa(n).hoistableStyles, u = a.get(t), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = Tu(a.href);
          var e = xa(n).hoistableStyles, i = e.get(l);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, e.set(l, i), (e = n.querySelector(vn(l))) && !e._p && (i.instance = e, i.state.loading = 5), gt.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, gt.set(l, a), e || dd(n, l, a, i.state))), t && u === null) throw Error(o(528, ""));
          return i;
        }
        if (t && u !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = _u(a), a = xa(n).hoistableScripts, u = a.get(t), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, u)), u) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(o(444, l));
    }
  }
  function Tu(l) {
    return 'href="' + ct(l) + '"';
  }
  function vn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Ls(l) {
    return O({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function dd(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
      return u.loading |= 1;
    }), t.addEventListener("error", function() {
      return u.loading |= 2;
    }), Rl(t, "link", a), Dl(t), l.head.appendChild(t));
  }
  function _u(l) {
    return '[src="' + ct(l) + '"]';
  }
  function on(l) {
    return "script[async]" + l;
  }
  function Vs(l, t, a) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var u = l.querySelector('style[data-href~="' + ct(a.href) + '"]');
        if (u) return t.instance = u, Dl(u), u;
        var n = O({}, a, {
          "data-href": a.href,
          "data-precedence": a.precedence,
          href: null,
          precedence: null
        });
        return u = (l.ownerDocument || l).createElement("style"), Dl(u), Rl(u, "style", n), De(u, a.precedence, l), t.instance = u;
      case "stylesheet":
        n = Tu(a.href);
        var e = l.querySelector(vn(n));
        if (e) return t.state.loading |= 4, t.instance = e, Dl(e), e;
        u = Ls(a), (n = gt.get(n)) && wc(u, n), e = (l.ownerDocument || l).createElement("link"), Dl(e);
        var i = e;
        return i._p = new Promise(function(c, f) {
          i.onload = c, i.onerror = f;
        }), Rl(e, "link", u), t.state.loading |= 4, De(e, a.precedence, l), t.instance = e;
      case "script":
        return e = _u(a.src), (n = l.querySelector(on(e))) ? (t.instance = n, Dl(n), n) : (u = a, (n = gt.get(e)) && (u = O({}, a), Wc(u, n)), l = l.ownerDocument || l, n = l.createElement("script"), Dl(n), Rl(n, "link", u), l.head.appendChild(n), t.instance = n);
      case "void":
        return null;
      default:
        throw Error(o(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, De(u, a.precedence, l));
    return t.instance;
  }
  function De(l, t, a) {
    for (var u = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = u.length ? u[u.length - 1] : null, e = n, i = 0; i < u.length; i++) {
      var c = u[i];
      if (c.dataset.precedence === t) e = c;
      else if (e !== n) break;
    }
    e ? e.parentNode.insertBefore(l, e.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function wc(l, t) {
    l.crossOrigin ??= t.crossOrigin, l.referrerPolicy ??= t.referrerPolicy, l.title ??= t.title;
  }
  function Wc(l, t) {
    l.crossOrigin ??= t.crossOrigin, l.referrerPolicy ??= t.referrerPolicy, l.integrity ??= t.integrity;
  }
  var Ue = null;
  function xs(l, t, a) {
    if (Ue === null) {
      var u = /* @__PURE__ */ new Map(), n = Ue = /* @__PURE__ */ new Map();
      n.set(a, u);
    } else n = Ue, u = n.get(a), u || (u = /* @__PURE__ */ new Map(), n.set(a, u));
    if (u.has(l)) return u;
    for (u.set(l, null), a = a.getElementsByTagName(l), n = 0; n < a.length; n++) {
      var e = a[n];
      if (!(e[ru] || e[rl] || l === "link" && e.getAttribute("rel") === "stylesheet") && e.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = e.getAttribute(t) || "";
        i = l + i;
        var c = u.get(i);
        c ? c.push(e) : u.set(i, [e]);
      }
    }
    return u;
  }
  function Ks(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(a, t === "title" ? l.querySelector("head > title") : null);
  }
  function vd(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
    }
    return !1;
  }
  function Js(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function od(l, t, a, u) {
    if (a.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var n = Tu(u.href), e = t.querySelector(vn(n));
        if (e) {
          t = e._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = re.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = e, Dl(e);
          return;
        }
        e = t.ownerDocument || t, u = Ls(u), (n = gt.get(n)) && wc(u, n), e = e.createElement("link"), Dl(e);
        var i = e;
        i._p = new Promise(function(c, f) {
          i.onload = c, i.onerror = f;
        }), Rl(e, "link", u), a.instance = e;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = re.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var $c = 0;
  function hd(l, t) {
    return l.stylesheets && l.count === 0 && Ne(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var u = setTimeout(function() {
        if (l.stylesheets && Ne(l, l.stylesheets), l.unsuspend) {
          var e = l.unsuspend;
          l.unsuspend = null, e();
        }
      }, 6e4 + t);
      0 < l.imgBytes && $c === 0 && ($c = 62500 * $y());
      var n = setTimeout(function() {
        if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Ne(l, l.stylesheets), l.unsuspend)) {
          var e = l.unsuspend;
          l.unsuspend = null, e();
        }
      }, (l.imgBytes > $c ? 50 : 800) + t);
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(u), clearTimeout(n);
      };
    } : null;
  }
  function re() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ne(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var He = null;
  function Ne(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, He = /* @__PURE__ */ new Map(), t.forEach(gd, l), He = null, re.call(l));
  }
  function gd(l, t) {
    if (!(t.state.loading & 4)) {
      var a = He.get(l);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), He.set(l, a);
        for (var n = l.querySelectorAll("link[data-precedence],style[data-precedence]"), e = 0; e < n.length; e++) {
          var i = n[e];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), u = i);
        }
        u && a.set(null, u);
      }
      n = t.instance, i = n.getAttribute("data-precedence"), e = a.get(i) || u, e === u && a.set(null, n), a.set(i, n), this.count++, u = re.bind(this), n.addEventListener("load", u), n.addEventListener("error", u), e ? e.parentNode.insertBefore(n, e.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(n, l.firstChild)), t.state.loading |= 4;
    }
  }
  var hn = {
    $$typeof: Ol,
    Provider: null,
    Consumer: null,
    _currentValue: tl,
    _currentValue2: tl,
    _threadCount: 0
  };
  function Sd(l, t, a, u, n, e, i, c, f) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Je(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Je(0), this.hiddenUpdates = Je(null), this.identifierPrefix = u, this.onUncaughtError = n, this.onCaughtError = e, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function bd(l, t, a, u, n, e, i, c, f, h, b, A) {
    return l = new Sd(l, t, a, i, f, h, b, A, c), t = 1, e === !0 && (t |= 24), e = tt(3, null, null, t), l.current = e, e.stateNode = l, t = ri(), t.refCount++, l.pooledCache = t, t.refCount++, e.memoizedState = {
      element: u,
      isDehydrated: a,
      cache: t
    }, Ri(e), l;
  }
  function zd(l) {
    return l ? (l = lu, l) : lu;
  }
  function ws(l, t, a, u, n, e) {
    n = zd(n), u.context === null ? u.context = n : u.pendingContext = n, u = Ba(t), u.payload = { element: a }, e = e === void 0 ? null : e, e !== null && (u.callback = e), a = ja(l, u, t), a !== null && (xl(a, l, t), Ju(a, l, t));
  }
  function Ws(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Fc(l, t) {
    Ws(l, t), (l = l.alternate) && Ws(l, t);
  }
  function $s(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Oa(l, 67108864);
      t !== null && xl(t, l, 67108864), Fc(l, 67108864);
    }
  }
  function Fs(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ot();
      t = hf(t);
      var a = Oa(l, t);
      a !== null && xl(a, l, t), Fc(l, t);
    }
  }
  var Ce = !0;
  function Ad(l, t, a, u) {
    var n = _.T;
    _.T = null;
    var e = D.p;
    try {
      D.p = 2, kc(l, t, a, u);
    } finally {
      D.p = e, _.T = n;
    }
  }
  function Ed(l, t, a, u) {
    var n = _.T;
    _.T = null;
    var e = D.p;
    try {
      D.p = 8, kc(l, t, a, u);
    } finally {
      D.p = e, _.T = n;
    }
  }
  function kc(l, t, a, u) {
    if (Ce) {
      var n = Ic(u);
      if (n === null) Yc(l, t, u, Re, a), Is(l, u);
      else if (_d(n, l, t, a, u)) u.stopPropagation();
      else if (Is(l, u), t & 4 && -1 < Td.indexOf(l)) {
        for (; n !== null; ) {
          var e = Va(n);
          if (e !== null) switch (e.tag) {
            case 3:
              if (e = e.stateNode, e.current.memoizedState.isDehydrated) {
                var i = Ea(e.pendingLanes);
                if (i !== 0) {
                  var c = e;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                    var f = 1 << 31 - Pl(i);
                    c.entanglements[1] |= f, i &= ~f;
                  }
                  Kt(e), (al & 6) === 0 && (he = kl() + 500, sn(0, !1));
                }
              }
              break;
            case 31:
            case 13:
              c = Oa(e, 2), c !== null && xl(c, e, 2), Se(), Fc(e, 2);
          }
          if (e = Ic(u), e === null && Yc(l, t, u, Re, a), e === n) break;
          n = e;
        }
        n !== null && u.stopPropagation();
      } else Yc(l, t, u, null, a);
    }
  }
  function Ic(l) {
    return l = ti(l), Pc(l);
  }
  var Re = null;
  function Pc(l) {
    if (Re = null, l = La(l), l !== null) {
      var t = V(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = Y(t), l !== null) return l;
          l = null;
        } else if (a === 31) {
          if (l = G(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Re = l, null;
  }
  function ks(l) {
    switch (l) {
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
        switch (hm()) {
          case ff:
            return 2;
          case sf:
            return 8;
          case En:
          case gm:
            return 32;
          case mf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var lf = !1, va = null, oa = null, ha = null, gn = /* @__PURE__ */ new Map(), Sn = /* @__PURE__ */ new Map(), ga = [], Td = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Is(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        va = null;
        break;
      case "dragenter":
      case "dragleave":
        oa = null;
        break;
      case "mouseover":
      case "mouseout":
        ha = null;
        break;
      case "pointerover":
      case "pointerout":
        gn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Sn.delete(t.pointerId);
    }
  }
  function bn(l, t, a, u, n, e) {
    return l === null || l.nativeEvent !== e ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: u,
      nativeEvent: e,
      targetContainers: [n]
    }, t !== null && (t = Va(t), t !== null && $s(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), l);
  }
  function _d(l, t, a, u, n) {
    switch (t) {
      case "focusin":
        return va = bn(va, l, t, a, u, n), !0;
      case "dragenter":
        return oa = bn(oa, l, t, a, u, n), !0;
      case "mouseover":
        return ha = bn(ha, l, t, a, u, n), !0;
      case "pointerover":
        var e = n.pointerId;
        return gn.set(e, bn(gn.get(e) || null, l, t, a, u, n)), !0;
      case "gotpointercapture":
        return e = n.pointerId, Sn.set(e, bn(Sn.get(e) || null, l, t, a, u, n)), !0;
    }
    return !1;
  }
  function Ps(l) {
    var t = La(l.target);
    if (t !== null) {
      var a = V(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = Y(a), t !== null) {
            l.blockedOn = t, Sf(l.priority, function() {
              Fs(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = G(a), t !== null) {
            l.blockedOn = t, Sf(l.priority, function() {
              Fs(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function qe(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = Ic(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        li = u, a.target.dispatchEvent(u), li = null;
      } else return t = Va(a), t !== null && $s(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function lm(l, t, a) {
    qe(l) && a.delete(t);
  }
  function pd() {
    lf = !1, va !== null && qe(va) && (va = null), oa !== null && qe(oa) && (oa = null), ha !== null && qe(ha) && (ha = null), gn.forEach(lm), Sn.forEach(lm);
  }
  function Be(l, t) {
    l.blockedOn === t && (l.blockedOn = null, lf || (lf = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, pd)));
  }
  var je = null;
  function tm(l) {
    je !== l && (je = l, p.unstable_scheduleCallback(p.unstable_NormalPriority, function() {
      je === l && (je = null);
      for (var t = 0; t < l.length; t += 3) {
        var a = l[t], u = l[t + 1], n = l[t + 2];
        if (typeof u != "function") {
          if (Pc(u || a) === null) continue;
          break;
        }
        var e = Va(a);
        e !== null && (l.splice(t, 3), t -= 3, Pi(e, {
          pending: !0,
          data: n,
          method: a.method,
          action: u
        }, u, n));
      }
    }));
  }
  function pu(l) {
    function t(f) {
      return Be(f, l);
    }
    va !== null && Be(va, l), oa !== null && Be(oa, l), ha !== null && Be(ha, l), gn.forEach(t), Sn.forEach(t);
    for (var a = 0; a < ga.length; a++) {
      var u = ga[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < ga.length && (a = ga[0], a.blockedOn === null); ) Ps(a), a.blockedOn === null && ga.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null) for (u = 0; u < a.length; u += 3) {
      var n = a[u], e = a[u + 1], i = n[Gl] || null;
      if (typeof e == "function") i || tm(a);
      else if (i) {
        var c = null;
        if (e && e.hasAttribute("formAction")) {
          if (n = e, i = e[Gl] || null) c = i.formAction;
          else if (Pc(n) !== null) continue;
        } else c = i.action;
        typeof c == "function" ? a[u + 1] = c : (a.splice(u, 3), u -= 3), tm(a);
      }
    }
  }
  function Md() {
    function l(e) {
      e.canIntercept && e.info === "react-transition" && e.intercept({
        handler: function() {
          return new Promise(function(i) {
            return n = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      n !== null && (n(), n = null), u || setTimeout(a, 20);
    }
    function a() {
      if (!u && !navigation.transition) {
        var e = navigation.currentEntry;
        e && e.url != null && navigation.navigate(e.url, {
          state: e.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var u = !1, n = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        u = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
      };
    }
  }
  function tf(l) {
    this._internalRoot = l;
  }
  af.prototype.render = tf.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var a = t.current;
    ws(a, ot(), l, t, null, null);
  }, af.prototype.unmount = tf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      ws(l.current, 2, null, l, null, null), Se(), t[Uu] = null;
    }
  };
  function af(l) {
    this._internalRoot = l;
  }
  af.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = gf();
      l = {
        blockedOn: null,
        target: l,
        priority: t
      };
      for (var a = 0; a < ga.length && t !== 0 && t < ga[a].priority; a++) ;
      ga.splice(a, 0, l), a === 0 && Ps(l);
    }
  };
  var am = B.version;
  if (am !== "19.2.7") throw Error(o(527, am, "19.2.7"));
  D.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
    return l = T(t), l = l !== null ? Q(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Od = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ye = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ye.isDisabled && Ye.supportsFiber) try {
      Ou = Ye.inject(Od), Il = Ye;
    } catch {
    }
  }
  y.createRoot = function(l, t) {
    if (!W(l)) throw Error(o(299));
    var a = !1, u = "", n = Ey, e = Ty, i = _y;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (e = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = bd(l, 1, !1, null, null, a, u, null, n, e, i, Md), l[Uu] = t.current, _s(l), new tf(t);
  };
})), Xd = /* @__PURE__ */ Dt(((y, p) => {
  function B() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B);
      } catch (R) {
        console.error(R);
      }
  }
  B(), p.exports = Qd();
})), ba = /* @__PURE__ */ cm(nf(), 1), Zd = /* @__PURE__ */ cm(Xd(), 1), Ld = class {
  listeners = /* @__PURE__ */ new Map();
  eventHistory = [];
  maxHistorySize;
  eventTarget;
  constructor(y = {}) {
    this.maxHistorySize = y.maxHistorySize ?? 100, this.eventTarget = y.eventTarget;
  }
  configure(y) {
    this.maxHistorySize = y.maxHistorySize ?? this.maxHistorySize, this.eventTarget = y.eventTarget ?? this.eventTarget;
  }
  on(y, p) {
    return this.listeners.has(y) || this.listeners.set(y, /* @__PURE__ */ new Set()), this.listeners.get(y).add(p), () => {
      this.listeners.get(y)?.delete(p);
    };
  }
  once(y, p) {
    const B = this.on(y, (R) => {
      p(R), B();
    });
    return B;
  }
  emit(y, p, B) {
    const R = {
      type: y,
      source: p,
      payload: B,
      timestamp: Date.now()
    };
    this.eventHistory.push(R), this.eventHistory.length > this.maxHistorySize && this.eventHistory.shift();
    const o = this.listeners.get(y);
    o && o.forEach((V) => {
      try {
        V(R);
      } catch (Y) {
        console.error(`[EventBus] Error in listener for ${y}:`, Y);
      }
    });
    const W = this.eventTarget ?? (typeof window < "u" ? window : void 0);
    if (W && typeof CustomEvent < "u") {
      const V = new CustomEvent("platform-event", {
        detail: R,
        bubbles: !0
      });
      W.dispatchEvent(V);
    }
  }
  getHistory(y) {
    return y ? this.eventHistory.filter((p) => p.type === y) : [...this.eventHistory];
  }
  clearHistory() {
    this.eventHistory = [];
  }
  off(y) {
    this.listeners.delete(y);
  }
  clear() {
    this.listeners.clear();
  }
}, Ge = new Ld(), Qe = {
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
}, Vd = 15e3, zn;
function fm(y = {}) {
  const p = y.targetWindow ?? (typeof window < "u" && window.parent !== window ? window.parent : void 0), B = y.targetOrigin ?? "*", R = /* @__PURE__ */ new Map();
  let o = 1;
  function W(Y) {
    if (!wd(Y.data)) return;
    const G = Y.data;
    if ("id" in G && G.id !== void 0 && ("result" in G || "error" in G)) {
      const r = R.get(G.id);
      if (!r) return;
      if (R.delete(G.id), clearTimeout(r.timeout), G.error) {
        r.reject(new Error(G.error.message));
        return;
      }
      r.resolve(G.result ?? null);
      return;
    }
    "method" in G && typeof G.method == "string" && y.onNotification?.(G);
  }
  typeof window < "u" && window.addEventListener("message", W);
  function V(Y) {
    p?.postMessage(Y, B);
  }
  return {
    initialize(Y = null) {
      return this.request("ui/initialize", Y);
    },
    callTool(Y, G = null) {
      return this.request("tools/call", {
        name: Y,
        arguments: G
      });
    },
    request(Y, G = null) {
      if (!p) return Promise.reject(/* @__PURE__ */ new Error("No MCP Apps host window is available"));
      const r = `${y.source ?? "micro-app"}-${o++}`, T = setTimeout(() => {
        const O = R.get(r);
        O && (R.delete(r), O.reject(/* @__PURE__ */ new Error(`MCP request timed out: ${Y}`)));
      }, y.timeoutMs ?? Vd), Q = new Promise((O, il) => {
        R.set(r, {
          resolve: O,
          reject: il,
          timeout: T
        });
      });
      return V({
        jsonrpc: "2.0",
        id: r,
        method: Y,
        params: G
      }), Q;
    },
    notify(Y, G = null) {
      p && V({
        jsonrpc: "2.0",
        method: Y,
        params: G
      });
    },
    dispose() {
      typeof window < "u" && window.removeEventListener("message", W);
      for (const Y of R.values())
        clearTimeout(Y.timeout), Y.reject(/* @__PURE__ */ new Error("MCP bridge disposed"));
      R.clear();
    }
  };
}
function xd(y) {
  return zn?.dispose(), zn = fm(y), zn;
}
function sm() {
  return zn ??= fm(), zn;
}
function Kd(y, p) {
  sm().notify(y, p);
}
function Jd(y, p) {
  return sm().callTool(y, p);
}
function wd(y) {
  return !!(y && typeof y == "object" && "jsonrpc" in y && y.jsonrpc === "2.0");
}
function Wd(y) {
  return y instanceof Error ? {
    name: y.name,
    message: y.message,
    stack: y.stack
  } : { message: typeof y == "string" ? y : "Unknown runtime error" };
}
function um({ app: y, error: p, logger: B, source: R = "runtime", metadata: o }) {
  const W = {
    level: "error",
    message: `${y.name} failed in ${R}`,
    appId: y.id,
    source: R,
    error: Wd(p),
    metadata: o,
    timestamp: Date.now()
  };
  return Ge.emit(Qe.APP_ERROR, y.id, W), B?.log(W), W;
}
function mm(y = ym()) {
  return typeof y?.modelContext?.registerTool == "function";
}
function nm(y, p = {}, B = ym()) {
  if (!mm(B)) return {
    supported: !1,
    unregister: () => {
    }
  };
  const R = p.signal ? void 0 : new AbortController(), o = p.signal ?? R?.signal;
  return B.modelContext.registerTool(y, {
    ...p,
    signal: o
  }), {
    supported: !0,
    unregister: () => R?.abort()
  };
}
function ym() {
  return typeof document > "u" ? void 0 : document;
}
function $d(y, p, B = {}) {
  const R = customElements.get(y);
  if (R) return R;
  class o extends HTMLElement {
    static observedAttributes = B.observedAttributes ?? [];
    cleanup;
    async connectedCallback() {
      const V = this.createContext();
      try {
        const Y = await p.mount(this, V);
        this.cleanup = typeof Y == "function" ? Y : void 0, Ge.emit(Qe.APP_LOADED, V.app.id, { tagName: y });
      } catch (Y) {
        throw um({
          app: V.app,
          error: Y,
          logger: B.logger,
          source: "micro-app-connected-callback",
          metadata: { tagName: y }
        }), Y;
      }
    }
    disconnectedCallback() {
      window.setTimeout(() => {
        try {
          this.cleanup?.(), p.unmount?.(this), Ge.emit(Qe.APP_UNLOADED, this.getAttribute("data-app-name") ?? y, { tagName: y });
        } catch (V) {
          um({
            app: {
              id: this.getAttribute("data-app-name") ?? y,
              name: this.getAttribute("data-app-name") ?? y
            },
            error: V,
            logger: B.logger,
            source: "micro-app-disconnected-callback",
            metadata: { tagName: y }
          });
        }
      }, 0);
    }
    createContext() {
      return {
        app: {
          id: this.getAttribute("data-app-name") ?? y,
          name: this.getAttribute("data-app-name") ?? y,
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
            tagName: y
          },
          version: this.getAttribute("data-version") ?? "0.0.0",
          owner: "",
          permissions: []
        },
        shellOrigin: this.getAttribute("data-shell-origin") ?? window.location.origin
      };
    }
  }
  return customElements.define(y, o), o;
}
function em(y, p, B) {
  const R = Qe[y];
  Ge.emit(R, p, B), Kd("ui/notification", {
    type: R,
    source: p,
    payload: Fd(B),
    timestamp: Date.now()
  });
}
function Fd(y) {
  return y === void 0 ? null : JSON.parse(JSON.stringify(y));
}
var kd = /* @__PURE__ */ Dt(((y) => {
  var p = /* @__PURE__ */ Symbol.for("react.transitional.element"), B = /* @__PURE__ */ Symbol.for("react.fragment");
  function R(o, W, V) {
    var Y = null;
    if (V !== void 0 && (Y = "" + V), W.key !== void 0 && (Y = "" + W.key), "key" in W) {
      V = {};
      for (var G in W) G !== "key" && (V[G] = W[G]);
    } else V = W;
    return W = V.ref, {
      $$typeof: p,
      type: o,
      key: Y,
      ref: W !== void 0 ? W : null,
      props: V
    };
  }
  y.jsx = R, y.jsxs = R;
})), Id = /* @__PURE__ */ Dt(((y, p) => {
  p.exports = kd();
})), L = Id(), uf = "Draft analysis: billing has 1 overdue enterprise invoice, analytics reports a 2% conversion dip, and the admin flag billing-autopay is disabled. Recommended action: enable a 25% rollout and notify account owners.";
function Pd() {
  const [y, p] = (0, ba.useState)([{
    role: "assistant",
    text: "I can summarize app health, explain events, and suggest next actions across the platform."
  }]), [B, R] = (0, ba.useState)("Why did billing conversion dip?"), [o, W] = (0, ba.useState)("checking"), [V, Y] = (0, ba.useState)(!1), [G, r] = (0, ba.useState)(!1);
  (0, ba.useEffect)(() => {
    const O = xd({ source: "ai-assistant" });
    return O.notify("ui/ready", {
      appId: "ai-assistant",
      tools: [
        "assistant.summarizeCase",
        "assistant.planWorkflow",
        "assistant.invokeTool"
      ]
    }), () => O.dispose();
  }, []), (0, ba.useEffect)(() => {
    const O = window.LanguageModel;
    if (!O) {
      W("unsupported");
      return;
    }
    O.availability({ languages: ["en"] }).then(W).catch(() => W("unavailable"));
  }, []), (0, ba.useEffect)(() => {
    const O = nm({
      name: "assistant_summarize_platform_health",
      description: "Summarize the currently visible Open Micro Platform dashboard health signals and suggest the next action.",
      inputSchema: {
        type: "object",
        properties: { question: {
          type: "string",
          description: "The user question or investigation goal from the browser agent."
        } }
      },
      execute: async ({ question: Sl }) => ({
        source: "ai-assistant",
        question: Sl ?? "Summarize platform health",
        summary: uf,
        resources: [
          "billing.invoice",
          "analytics.funnel",
          "admin.tenant"
        ]
      }),
      readOnlyHint: !0
    }), il = nm({
      name: "assistant_list_mcp_capabilities",
      description: "List the MCP Apps capabilities exposed by the AI Assistant micro app.",
      inputSchema: {
        type: "object",
        properties: { tool: {
          type: "string",
          description: "Optional capability name to inspect."
        } }
      },
      execute: async ({ tool: Sl }) => ({
        selected: Sl ?? null,
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
    return Y(O.supported || il.supported || mm()), () => {
      O.unregister(), il.unregister();
    };
  }, []);
  async function T(O) {
    O.preventDefault();
    const il = B.trim();
    if (!il) return;
    r(!0), em("MCP_TOOL_CALL_REQUESTED", "ai-assistant", {
      tool: "assistant.summarizeCase",
      prompt: il
    }), Jd("assistant.summarizeCase", { prompt: il }).catch(() => {
    });
    const Sl = await Q(il);
    p((ql) => [
      ...ql,
      {
        role: "user",
        text: il
      },
      {
        role: "assistant",
        text: Sl
      }
    ]), em("MCP_TOOL_CALL_COMPLETED", "ai-assistant", {
      tool: "assistant.summarizeCase",
      resources: [
        "billing.invoice",
        "analytics.funnel",
        "admin.tenant"
      ],
      runtime: o === "available" ? "chrome-built-in-ai" : "deterministic-fallback"
    }), R(""), r(!1);
  }
  async function Q(O) {
    if (o !== "available" || !window.LanguageModel) return uf;
    let il;
    try {
      return il = await window.LanguageModel.create(), await il.prompt([
        "You are the Open Micro Platform AI Assistant.",
        "Answer as a concise platform operator.",
        "Use this known context: Billing has one overdue enterprise invoice, analytics reports a 2% conversion dip, and the admin flag billing-autopay is disabled.",
        `User question: ${O}`
      ].join(`
`));
    } catch {
      return uf;
    } finally {
      il?.destroy?.();
    }
  }
  return /* @__PURE__ */ (0, L.jsxs)("section", {
    className: "micro-app-container",
    children: [
      /* @__PURE__ */ (0, L.jsxs)("header", {
        className: "micro-app-header",
        children: [
          /* @__PURE__ */ (0, L.jsx)("span", { children: "AI Platform" }),
          /* @__PURE__ */ (0, L.jsx)("h1", { children: "Assistant Workspace" }),
          /* @__PURE__ */ (0, L.jsx)("p", { children: "Local POC assistant flow for platform triage and cross-app context." })
        ]
      }),
      /* @__PURE__ */ (0, L.jsxs)("div", {
        className: "insights",
        children: [
          /* @__PURE__ */ (0, L.jsxs)("article", { children: [/* @__PURE__ */ (0, L.jsx)("strong", { children: "3" }), /* @__PURE__ */ (0, L.jsx)("span", { children: "Signals correlated" })] }),
          /* @__PURE__ */ (0, L.jsxs)("article", { children: [/* @__PURE__ */ (0, L.jsx)("strong", { children: "Low" }), /* @__PURE__ */ (0, L.jsx)("span", { children: "Risk level" })] }),
          /* @__PURE__ */ (0, L.jsxs)("article", { children: [/* @__PURE__ */ (0, L.jsx)("strong", { children: "0 ms" }), /* @__PURE__ */ (0, L.jsx)("span", { children: "External API latency" })] })
        ]
      }),
      /* @__PURE__ */ (0, L.jsxs)("div", {
        className: "mcp-panel",
        "aria-label": "MCPApps capabilities",
        children: [
          /* @__PURE__ */ (0, L.jsx)("span", { children: "MCPApps SDK" }),
          /* @__PURE__ */ (0, L.jsx)("strong", { children: "assistant.summarizeCase" }),
          /* @__PURE__ */ (0, L.jsx)("p", { children: "Emits `mcp:tool-call-requested` and `mcp:tool-call-completed` on the shared event bus." })
        ]
      }),
      /* @__PURE__ */ (0, L.jsxs)("div", {
        className: "ai-runtime-grid",
        "aria-label": "AI runtime capabilities",
        children: [
          /* @__PURE__ */ (0, L.jsxs)("article", { children: [
            /* @__PURE__ */ (0, L.jsx)("span", { children: "Chrome built-in AI" }),
            /* @__PURE__ */ (0, L.jsx)("strong", { children: lv(o) }),
            /* @__PURE__ */ (0, L.jsx)("p", { children: "Uses `LanguageModel` locally when Chrome has Gemini Nano available, then falls back without breaking the shell." })
          ] }),
          /* @__PURE__ */ (0, L.jsxs)("article", { children: [
            /* @__PURE__ */ (0, L.jsx)("span", { children: "WebMCP tools" }),
            /* @__PURE__ */ (0, L.jsx)("strong", { children: V ? "Registered" : "Waiting for browser support" }),
            /* @__PURE__ */ (0, L.jsx)("p", { children: "Registers tab-bound tools with `document.modelContext` when a browser agent exposes WebMCP." })
          ] }),
          /* @__PURE__ */ (0, L.jsxs)("article", { children: [
            /* @__PURE__ */ (0, L.jsx)("span", { children: "MCP Apps portability" }),
            /* @__PURE__ */ (0, L.jsx)("strong", { children: "HTML resource ready" }),
            /* @__PURE__ */ (0, L.jsx)("p", { children: "This same micro app can render through `/api/mcp/apps/ai-assistant/resource` in an AI host iframe." })
          ] })
        ]
      }),
      /* @__PURE__ */ (0, L.jsx)("div", {
        className: "thread",
        children: y.map((O, il) => /* @__PURE__ */ (0, L.jsx)("p", {
          className: O.role,
          children: O.text
        }, `${O.role}-${il}`))
      }),
      /* @__PURE__ */ (0, L.jsxs)("form", {
        className: "composer",
        onSubmit: T,
        children: [/* @__PURE__ */ (0, L.jsx)("input", {
          value: B,
          onChange: (O) => R(O.target.value),
          "aria-label": "Assistant prompt"
        }), /* @__PURE__ */ (0, L.jsx)("button", {
          type: "submit",
          disabled: G,
          children: G ? "Thinking" : "Ask"
        })]
      })
    ]
  });
}
function lv(y) {
  return {
    available: "Available",
    checking: "Checking",
    downloadable: "Model downloadable",
    downloading: "Model downloading",
    unavailable: "Unavailable",
    unsupported: "Not exposed"
  }[y];
}
var tv = $d("micro-ai-assistant-app", { mount(y) {
  const p = Zd.createRoot(y);
  return p.render(/* @__PURE__ */ (0, L.jsx)(Pd, {})), () => p.unmount();
} });
export {
  tv as MicroAiAssistantApp
};
