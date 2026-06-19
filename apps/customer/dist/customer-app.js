var Ad = Object.create, ay = Object.defineProperty, Td = Object.getOwnPropertyDescriptor, _d = Object.getOwnPropertyNames, Od = Object.getPrototypeOf, Md = Object.prototype.hasOwnProperty, Ut = (h, D) => () => (D || (h((D = { exports: {} }).exports, D), h = null), D.exports), Dd = (h, D, j, C) => {
  if (D && typeof D == "object" || typeof D == "function")
    for (var S = _d(D), tl = 0, w = S.length, k; tl < w; tl++)
      k = S[tl], !Md.call(h, k) && k !== j && ay(h, k, {
        get: ((vl) => D[vl]).bind(null, k),
        enumerable: !(C = Td(D, k)) || C.enumerable
      });
  return h;
}, ny = (h, D, j) => (j = h != null ? Ad(Od(h)) : {}, Dd(D || !h || !h.__esModule ? ay(j, "default", {
  value: h,
  enumerable: !0
}) : j, h)), Ud = /* @__PURE__ */ Ut(((h) => {
  var D = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), C = /* @__PURE__ */ Symbol.for("react.fragment"), S = /* @__PURE__ */ Symbol.for("react.strict_mode"), tl = /* @__PURE__ */ Symbol.for("react.profiler"), w = /* @__PURE__ */ Symbol.for("react.consumer"), k = /* @__PURE__ */ Symbol.for("react.context"), vl = /* @__PURE__ */ Symbol.for("react.forward_ref"), q = /* @__PURE__ */ Symbol.for("react.suspense"), T = /* @__PURE__ */ Symbol.for("react.memo"), Q = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), ot = Symbol.iterator;
  function Rl(y) {
    return y === null || typeof y != "object" ? null : (y = ot && y[ot] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var Yl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, xl = Object.assign, wt = {};
  function Jl(y, A, O) {
    this.props = y, this.context = A, this.refs = wt, this.updater = O || Yl;
  }
  Jl.prototype.isReactComponent = {}, Jl.prototype.setState = function(y, A) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, A, "setState");
  }, Jl.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function Wt() {
  }
  Wt.prototype = Jl.prototype;
  function Ol(y, A, O) {
    this.props = y, this.context = A, this.refs = wt, this.updater = O || Yl;
  }
  var gt = Ol.prototype = new Wt();
  gt.constructor = Ol, xl(gt, Jl.prototype), gt.isPureReactComponent = !0;
  var rl = Array.isArray;
  function wl() {
  }
  var W = {
    H: null,
    A: null,
    T: null,
    S: null
  }, jl = Object.prototype.hasOwnProperty;
  function Tt(y, A, O) {
    var N = O.ref;
    return {
      $$typeof: D,
      type: y,
      key: A,
      ref: N !== void 0 ? N : null,
      props: O
    };
  }
  function bu(y, A) {
    return Tt(y.type, A, y.props);
  }
  function Wl(y) {
    return typeof y == "object" && y !== null && y.$$typeof === D;
  }
  function _t(y) {
    var A = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + y.replace(/[=:]/g, function(O) {
      return A[O];
    });
  }
  var Zu = /\/+/g;
  function bt(y, A) {
    return typeof y == "object" && y !== null && y.key != null ? _t("" + y.key) : A.toString(36);
  }
  function U(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(wl, wl) : (y.status = "pending", y.then(function(A) {
          y.status === "pending" && (y.status = "fulfilled", y.value = A);
        }, function(A) {
          y.status === "pending" && (y.status = "rejected", y.reason = A);
        })), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function _(y, A, O, N, Z) {
    var L = typeof y;
    (L === "undefined" || L === "boolean") && (y = null);
    var ll = !1;
    if (y === null) ll = !0;
    else switch (L) {
      case "bigint":
      case "string":
      case "number":
        ll = !0;
        break;
      case "object":
        switch (y.$$typeof) {
          case D:
          case j:
            ll = !0;
            break;
          case Q:
            return ll = y._init, _(ll(y._payload), A, O, N, Z);
        }
    }
    if (ll) return Z = Z(y), ll = N === "" ? "." + bt(y, 0) : N, rl(Z) ? (O = "", ll != null && (O = ll.replace(Zu, "$&/") + "/"), _(Z, A, O, "", function(Oa) {
      return Oa;
    })) : Z != null && (Wl(Z) && (Z = bu(Z, O + (Z.key == null || y && y.key === Z.key ? "" : ("" + Z.key).replace(Zu, "$&/") + "/") + ll)), A.push(Z)), 1;
    ll = 0;
    var ql = N === "" ? "." : N + ":";
    if (rl(y)) for (var ol = 0; ol < y.length; ol++) N = y[ol], L = ql + bt(N, ol), ll += _(N, A, O, L, Z);
    else if (ol = Rl(y), typeof ol == "function") for (y = ol.call(y), ol = 0; !(N = y.next()).done; ) N = N.value, L = ql + bt(N, ol++), ll += _(N, A, O, L, Z);
    else if (L === "object") {
      if (typeof y.then == "function") return _(U(y), A, O, N, Z);
      throw A = String(y), Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.");
    }
    return ll;
  }
  function M(y, A, O) {
    if (y == null) return y;
    var N = [], Z = 0;
    return _(y, N, "", "", function(L) {
      return A.call(O, L, Z++);
    }), N;
  }
  function I(y) {
    if (y._status === -1) {
      var A = y._result;
      A = A(), A.then(function(O) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = O);
      }, function(O) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = O);
      }), y._status === -1 && (y._status = 0, y._result = A);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var yl = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, $l = {
    map: M,
    forEach: function(y, A, O) {
      M(y, function() {
        A.apply(this, arguments);
      }, O);
    },
    count: function(y) {
      var A = 0;
      return M(y, function() {
        A++;
      }), A;
    },
    toArray: function(y) {
      return M(y, function(A) {
        return A;
      }) || [];
    },
    only: function(y) {
      if (!Wl(y)) throw Error("React.Children.only expected to receive a single React element child.");
      return y;
    }
  };
  h.Activity = B, h.Children = $l, h.Component = Jl, h.Fragment = C, h.Profiler = tl, h.PureComponent = Ol, h.StrictMode = S, h.Suspense = q, h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, h.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return W.H.useMemoCache(y);
    }
  }, h.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, h.cacheSignal = function() {
    return null;
  }, h.cloneElement = function(y, A, O) {
    if (y == null) throw Error("The argument must be a React element, but you passed " + y + ".");
    var N = xl({}, y.props), Z = y.key;
    if (A != null) for (L in A.key !== void 0 && (Z = "" + A.key), A) !jl.call(A, L) || L === "key" || L === "__self" || L === "__source" || L === "ref" && A.ref === void 0 || (N[L] = A[L]);
    var L = arguments.length - 2;
    if (L === 1) N.children = O;
    else if (1 < L) {
      for (var ll = Array(L), ql = 0; ql < L; ql++) ll[ql] = arguments[ql + 2];
      N.children = ll;
    }
    return Tt(y.type, Z, N);
  }, h.createContext = function(y) {
    return y = {
      $$typeof: k,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: w,
      _context: y
    }, y;
  }, h.createElement = function(y, A, O) {
    var N, Z = {}, L = null;
    if (A != null) for (N in A.key !== void 0 && (L = "" + A.key), A) jl.call(A, N) && N !== "key" && N !== "__self" && N !== "__source" && (Z[N] = A[N]);
    var ll = arguments.length - 2;
    if (ll === 1) Z.children = O;
    else if (1 < ll) {
      for (var ql = Array(ll), ol = 0; ol < ll; ol++) ql[ol] = arguments[ol + 2];
      Z.children = ql;
    }
    if (y && y.defaultProps) for (N in ll = y.defaultProps, ll) Z[N] === void 0 && (Z[N] = ll[N]);
    return Tt(y, L, Z);
  }, h.createRef = function() {
    return { current: null };
  }, h.forwardRef = function(y) {
    return {
      $$typeof: vl,
      render: y
    };
  }, h.isValidElement = Wl, h.lazy = function(y) {
    return {
      $$typeof: Q,
      _payload: {
        _status: -1,
        _result: y
      },
      _init: I
    };
  }, h.memo = function(y, A) {
    return {
      $$typeof: T,
      type: y,
      compare: A === void 0 ? null : A
    };
  }, h.startTransition = function(y) {
    var A = W.T, O = {};
    W.T = O;
    try {
      var N = y(), Z = W.S;
      Z !== null && Z(O, N), typeof N == "object" && N !== null && typeof N.then == "function" && N.then(wl, yl);
    } catch (L) {
      yl(L);
    } finally {
      A !== null && O.types !== null && (A.types = O.types), W.T = A;
    }
  }, h.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, h.use = function(y) {
    return W.H.use(y);
  }, h.useActionState = function(y, A, O) {
    return W.H.useActionState(y, A, O);
  }, h.useCallback = function(y, A) {
    return W.H.useCallback(y, A);
  }, h.useContext = function(y) {
    return W.H.useContext(y);
  }, h.useDebugValue = function() {
  }, h.useDeferredValue = function(y, A) {
    return W.H.useDeferredValue(y, A);
  }, h.useEffect = function(y, A) {
    return W.H.useEffect(y, A);
  }, h.useEffectEvent = function(y) {
    return W.H.useEffectEvent(y);
  }, h.useId = function() {
    return W.H.useId();
  }, h.useImperativeHandle = function(y, A, O) {
    return W.H.useImperativeHandle(y, A, O);
  }, h.useInsertionEffect = function(y, A) {
    return W.H.useInsertionEffect(y, A);
  }, h.useLayoutEffect = function(y, A) {
    return W.H.useLayoutEffect(y, A);
  }, h.useMemo = function(y, A) {
    return W.H.useMemo(y, A);
  }, h.useOptimistic = function(y, A) {
    return W.H.useOptimistic(y, A);
  }, h.useReducer = function(y, A, O) {
    return W.H.useReducer(y, A, O);
  }, h.useRef = function(y) {
    return W.H.useRef(y);
  }, h.useState = function(y) {
    return W.H.useState(y);
  }, h.useSyncExternalStore = function(y, A, O) {
    return W.H.useSyncExternalStore(y, A, O);
  }, h.useTransition = function() {
    return W.H.useTransition();
  }, h.version = "19.2.7";
})), uf = /* @__PURE__ */ Ut(((h, D) => {
  D.exports = Ud();
})), Hd = /* @__PURE__ */ Ut(((h) => {
  function D(U, _) {
    var M = U.length;
    U.push(_);
    l: for (; 0 < M; ) {
      var I = M - 1 >>> 1, yl = U[I];
      if (0 < S(yl, _)) U[I] = _, U[M] = yl, M = I;
      else break l;
    }
  }
  function j(U) {
    return U.length === 0 ? null : U[0];
  }
  function C(U) {
    if (U.length === 0) return null;
    var _ = U[0], M = U.pop();
    if (M !== _) {
      U[0] = M;
      l: for (var I = 0, yl = U.length, $l = yl >>> 1; I < $l; ) {
        var y = 2 * (I + 1) - 1, A = U[y], O = y + 1, N = U[O];
        if (0 > S(A, M)) O < yl && 0 > S(N, A) ? (U[I] = N, U[O] = M, I = O) : (U[I] = A, U[y] = M, I = y);
        else if (O < yl && 0 > S(N, M)) U[I] = N, U[O] = M, I = O;
        else break l;
      }
    }
    return _;
  }
  function S(U, _) {
    var M = U.sortIndex - _.sortIndex;
    return M !== 0 ? M : U.id - _.id;
  }
  if (h.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var tl = performance;
    h.unstable_now = function() {
      return tl.now();
    };
  } else {
    var w = Date, k = w.now();
    h.unstable_now = function() {
      return w.now() - k;
    };
  }
  var vl = [], q = [], T = 1, Q = null, B = 3, ot = !1, Rl = !1, Yl = !1, xl = !1, wt = typeof setTimeout == "function" ? setTimeout : null, Jl = typeof clearTimeout == "function" ? clearTimeout : null, Wt = typeof setImmediate < "u" ? setImmediate : null;
  function Ol(U) {
    for (var _ = j(q); _ !== null; ) {
      if (_.callback === null) C(q);
      else if (_.startTime <= U) C(q), _.sortIndex = _.expirationTime, D(vl, _);
      else break;
      _ = j(q);
    }
  }
  function gt(U) {
    if (Yl = !1, Ol(U), !Rl) if (j(vl) !== null) Rl = !0, rl || (rl = !0, Wl());
    else {
      var _ = j(q);
      _ !== null && bt(gt, _.startTime - U);
    }
  }
  var rl = !1, wl = -1, W = 5, jl = -1;
  function Tt() {
    return xl ? !0 : !(h.unstable_now() - jl < W);
  }
  function bu() {
    if (xl = !1, rl) {
      var U = h.unstable_now();
      jl = U;
      var _ = !0;
      try {
        l: {
          Rl = !1, Yl && (Yl = !1, Jl(wl), wl = -1), ot = !0;
          var M = B;
          try {
            t: {
              for (Ol(U), Q = j(vl); Q !== null && !(Q.expirationTime > U && Tt()); ) {
                var I = Q.callback;
                if (typeof I == "function") {
                  Q.callback = null, B = Q.priorityLevel;
                  var yl = I(Q.expirationTime <= U);
                  if (U = h.unstable_now(), typeof yl == "function") {
                    Q.callback = yl, Ol(U), _ = !0;
                    break t;
                  }
                  Q === j(vl) && C(vl), Ol(U);
                } else C(vl);
                Q = j(vl);
              }
              if (Q !== null) _ = !0;
              else {
                var $l = j(q);
                $l !== null && bt(gt, $l.startTime - U), _ = !1;
              }
            }
            break l;
          } finally {
            Q = null, B = M, ot = !1;
          }
          _ = void 0;
        }
      } finally {
        _ ? Wl() : rl = !1;
      }
    }
  }
  var Wl;
  if (typeof Wt == "function") Wl = function() {
    Wt(bu);
  };
  else if (typeof MessageChannel < "u") {
    var _t = new MessageChannel(), Zu = _t.port2;
    _t.port1.onmessage = bu, Wl = function() {
      Zu.postMessage(null);
    };
  } else Wl = function() {
    wt(bu, 0);
  };
  function bt(U, _) {
    wl = wt(function() {
      U(h.unstable_now());
    }, _);
  }
  h.unstable_IdlePriority = 5, h.unstable_ImmediatePriority = 1, h.unstable_LowPriority = 4, h.unstable_NormalPriority = 3, h.unstable_Profiling = null, h.unstable_UserBlockingPriority = 2, h.unstable_cancelCallback = function(U) {
    U.callback = null;
  }, h.unstable_forceFrameRate = function(U) {
    0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < U ? Math.floor(1e3 / U) : 5;
  }, h.unstable_getCurrentPriorityLevel = function() {
    return B;
  }, h.unstable_next = function(U) {
    switch (B) {
      case 1:
      case 2:
      case 3:
        var _ = 3;
        break;
      default:
        _ = B;
    }
    var M = B;
    B = _;
    try {
      return U();
    } finally {
      B = M;
    }
  }, h.unstable_requestPaint = function() {
    xl = !0;
  }, h.unstable_runWithPriority = function(U, _) {
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
    var M = B;
    B = U;
    try {
      return _();
    } finally {
      B = M;
    }
  }, h.unstable_scheduleCallback = function(U, _, M) {
    var I = h.unstable_now();
    switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? I + M : I) : M = I, U) {
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
    return yl = M + yl, U = {
      id: T++,
      callback: _,
      priorityLevel: U,
      startTime: M,
      expirationTime: yl,
      sortIndex: -1
    }, M > I ? (U.sortIndex = M, D(q, U), j(vl) === null && U === j(q) && (Yl ? (Jl(wl), wl = -1) : Yl = !0, bt(gt, M - I))) : (U.sortIndex = yl, D(vl, U), Rl || ot || (Rl = !0, rl || (rl = !0, Wl()))), U;
  }, h.unstable_shouldYield = Tt, h.unstable_wrapCallback = function(U) {
    var _ = B;
    return function() {
      var M = B;
      B = _;
      try {
        return U.apply(this, arguments);
      } finally {
        B = M;
      }
    };
  };
})), pd = /* @__PURE__ */ Ut(((h, D) => {
  D.exports = Hd();
})), Nd = /* @__PURE__ */ Ut(((h) => {
  var D = uf();
  function j(q) {
    var T = "https://react.dev/errors/" + q;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Q = 2; Q < arguments.length; Q++) T += "&args[]=" + encodeURIComponent(arguments[Q]);
    }
    return "Minified React error #" + q + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function C() {
  }
  var S = {
    d: {
      f: C,
      r: function() {
        throw Error(j(522));
      },
      D: C,
      C,
      L: C,
      m: C,
      X: C,
      S: C,
      M: C
    },
    p: 0,
    findDOMNode: null
  }, tl = /* @__PURE__ */ Symbol.for("react.portal");
  function w(q, T, Q) {
    var B = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: tl,
      key: B == null ? null : "" + B,
      children: q,
      containerInfo: T,
      implementation: Q
    };
  }
  var k = D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function vl(q, T) {
    if (q === "font") return "";
    if (typeof T == "string") return T === "use-credentials" ? T : "";
  }
  h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S, h.createPortal = function(q, T) {
    var Q = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11) throw Error(j(299));
    return w(q, T, null, Q);
  }, h.flushSync = function(q) {
    var T = k.T, Q = S.p;
    try {
      if (k.T = null, S.p = 2, q) return q();
    } finally {
      k.T = T, S.p = Q, S.d.f();
    }
  }, h.preconnect = function(q, T) {
    typeof q == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, S.d.C(q, T));
  }, h.prefetchDNS = function(q) {
    typeof q == "string" && S.d.D(q);
  }, h.preinit = function(q, T) {
    if (typeof q == "string" && T && typeof T.as == "string") {
      var Q = T.as, B = vl(Q, T.crossOrigin), ot = typeof T.integrity == "string" ? T.integrity : void 0, Rl = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      Q === "style" ? S.d.S(q, typeof T.precedence == "string" ? T.precedence : void 0, {
        crossOrigin: B,
        integrity: ot,
        fetchPriority: Rl
      }) : Q === "script" && S.d.X(q, {
        crossOrigin: B,
        integrity: ot,
        fetchPriority: Rl,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0
      });
    }
  }, h.preinitModule = function(q, T) {
    if (typeof q == "string") if (typeof T == "object" && T !== null) {
      if (T.as == null || T.as === "script") {
        var Q = vl(T.as, T.crossOrigin);
        S.d.M(q, {
          crossOrigin: Q,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0
        });
      }
    } else T ?? S.d.M(q);
  }, h.preload = function(q, T) {
    if (typeof q == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var Q = T.as, B = vl(Q, T.crossOrigin);
      S.d.L(q, Q, {
        crossOrigin: B,
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
  }, h.preloadModule = function(q, T) {
    if (typeof q == "string") if (T) {
      var Q = vl(T.as, T.crossOrigin);
      S.d.m(q, {
        as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
        crossOrigin: Q,
        integrity: typeof T.integrity == "string" ? T.integrity : void 0
      });
    } else S.d.m(q);
  }, h.requestFormReset = function(q) {
    S.d.r(q);
  }, h.unstable_batchedUpdates = function(q, T) {
    return q(T);
  }, h.useFormState = function(q, T, Q) {
    return k.H.useFormState(q, T, Q);
  }, h.useFormStatus = function() {
    return k.H.useHostTransitionStatus();
  }, h.version = "19.2.7";
})), Cd = /* @__PURE__ */ Ut(((h, D) => {
  function j() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j);
      } catch (C) {
        console.error(C);
      }
  }
  j(), D.exports = Nd();
})), Rd = /* @__PURE__ */ Ut(((h) => {
  var D = pd(), j = uf(), C = Cd();
  function S(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++) t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function tl(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function w(l) {
    var t = l, u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (u = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function k(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function vl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function q(l) {
    if (w(l) !== l) throw Error(S(188));
  }
  function T(l) {
    var t = l.alternate;
    if (!t) {
      if (t = w(l), t === null) throw Error(S(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var n = u.return;
      if (n === null) break;
      var e = n.alternate;
      if (e === null) {
        if (a = n.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (n.child === e.child) {
        for (e = n.child; e; ) {
          if (e === u) return q(n), l;
          if (e === a) return q(n), t;
          e = e.sibling;
        }
        throw Error(S(188));
      }
      if (u.return !== a.return) u = n, a = e;
      else {
        for (var i = !1, c = n.child; c; ) {
          if (c === u) {
            i = !0, u = n, a = e;
            break;
          }
          if (c === a) {
            i = !0, a = n, u = e;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = e.child; c; ) {
            if (c === u) {
              i = !0, u = e, a = n;
              break;
            }
            if (c === a) {
              i = !0, a = e, u = n;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(S(189));
        }
      }
      if (u.alternate !== a) throw Error(S(190));
    }
    if (u.tag !== 3) throw Error(S(188));
    return u.stateNode.current === u ? l : t;
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
  var B = Object.assign, ot = /* @__PURE__ */ Symbol.for("react.element"), Rl = /* @__PURE__ */ Symbol.for("react.transitional.element"), Yl = /* @__PURE__ */ Symbol.for("react.portal"), xl = /* @__PURE__ */ Symbol.for("react.fragment"), wt = /* @__PURE__ */ Symbol.for("react.strict_mode"), Jl = /* @__PURE__ */ Symbol.for("react.profiler"), Wt = /* @__PURE__ */ Symbol.for("react.consumer"), Ol = /* @__PURE__ */ Symbol.for("react.context"), gt = /* @__PURE__ */ Symbol.for("react.forward_ref"), rl = /* @__PURE__ */ Symbol.for("react.suspense"), wl = /* @__PURE__ */ Symbol.for("react.suspense_list"), W = /* @__PURE__ */ Symbol.for("react.memo"), jl = /* @__PURE__ */ Symbol.for("react.lazy"), Tt = /* @__PURE__ */ Symbol.for("react.activity"), bu = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Wl = Symbol.iterator;
  function _t(l) {
    return l === null || typeof l != "object" ? null : (l = Wl && l[Wl] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Zu = /* @__PURE__ */ Symbol.for("react.client.reference");
  function bt(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === Zu ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case xl:
        return "Fragment";
      case Jl:
        return "Profiler";
      case wt:
        return "StrictMode";
      case rl:
        return "Suspense";
      case wl:
        return "SuspenseList";
      case Tt:
        return "Activity";
    }
    if (typeof l == "object") switch (l.$$typeof) {
      case Yl:
        return "Portal";
      case Ol:
        return l.displayName || "Context";
      case Wt:
        return (l._context.displayName || "Context") + ".Consumer";
      case gt:
        var t = l.render;
        return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
      case W:
        return t = l.displayName || null, t !== null ? t : bt(l.type) || "Memo";
      case jl:
        t = l._payload, l = l._init;
        try {
          return bt(l(t));
        } catch {
        }
    }
    return null;
  }
  var U = Array.isArray, _ = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = C.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, yl = [], $l = -1;
  function y(l) {
    return { current: l };
  }
  function A(l) {
    0 > $l || (l.current = yl[$l], yl[$l] = null, $l--);
  }
  function O(l, t) {
    $l++, yl[$l] = l.current, l.current = t;
  }
  var N = y(null), Z = y(null), L = y(null), ll = y(null);
  function ql(l, t) {
    switch (O(L, t), O(Z, l), O(N, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Uv(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI) t = Uv(t), l = Hv(t, l);
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
    A(N), O(N, l);
  }
  function ol() {
    A(N), A(Z), A(L);
  }
  function Oa(l) {
    l.memoizedState !== null && O(ll, l);
    var t = N.current, u = Hv(t, l.type);
    t !== u && (O(Z, l), O(N, u));
  }
  function bn(l) {
    Z.current === l && (A(N), A(Z)), ll.current === l && (A(ll), sn._currentValue = I);
  }
  var je, af;
  function zu(l) {
    if (je === void 0) try {
      throw Error();
    } catch (u) {
      var t = u.stack.trim().match(/\n( *(at )?)/);
      je = t && t[1] || "", af = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + je + l + af;
  }
  var Ge = !1;
  function Qe(l, t) {
    if (!l || Ge) return "";
    Ge = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var E = function() {
              throw Error();
            };
            if (Object.defineProperty(E.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(E, []);
              } catch (g) {
                var o = g;
              }
              Reflect.construct(l, [], E);
            } else {
              try {
                E.call();
              } catch (g) {
                o = g;
              }
              l.call(E.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (g) {
              o = g;
            }
            (E = l()) && typeof E.catch == "function" && E.catch(function() {
            });
          }
        } catch (g) {
          if (g && o && typeof g.stack == "string") return [g.stack, o.stack];
        }
        return [null, null];
      } };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
      n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var e = a.DetermineComponentFrameRoot(), i = e[0], c = e[1];
      if (i && c) {
        var f = i.split(`
`), s = c.split(`
`);
        for (n = a = 0; a < f.length && !f[a].includes("DetermineComponentFrameRoot"); ) a++;
        for (; n < s.length && !s[n].includes("DetermineComponentFrameRoot"); ) n++;
        if (a === f.length || n === s.length) for (a = f.length - 1, n = s.length - 1; 1 <= a && 0 <= n && f[a] !== s[n]; ) n--;
        for (; 1 <= a && 0 <= n; a--, n--) if (f[a] !== s[n]) {
          if (a !== 1 || n !== 1) do
            if (a--, n--, 0 > n || f[a] !== s[n]) {
              var b = `
` + f[a].replace(" at new ", " at ");
              return l.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", l.displayName)), b;
            }
          while (1 <= a && 0 <= n);
          break;
        }
      }
    } finally {
      Ge = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? zu(u) : "";
  }
  function ey(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return zu(l.type);
      case 16:
        return zu("Lazy");
      case 13:
        return l.child !== t && t !== null ? zu("Suspense Fallback") : zu("Suspense");
      case 19:
        return zu("SuspenseList");
      case 0:
      case 15:
        return Qe(l.type, !1);
      case 11:
        return Qe(l.type.render, !1);
      case 1:
        return Qe(l.type, !0);
      case 31:
        return zu("Activity");
      default:
        return "";
    }
  }
  function nf(l) {
    try {
      var t = "", u = null;
      do
        t += ey(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Xe = Object.prototype.hasOwnProperty, Ze = D.unstable_scheduleCallback, Le = D.unstable_cancelCallback, iy = D.unstable_shouldYield, cy = D.unstable_requestPaint, Fl = D.unstable_now, fy = D.unstable_getCurrentPriorityLevel, ef = D.unstable_ImmediatePriority, cf = D.unstable_UserBlockingPriority, zn = D.unstable_NormalPriority, vy = D.unstable_LowPriority, ff = D.unstable_IdlePriority, yy = D.log, my = D.unstable_setDisableYieldValue, Ma = null, kl = null;
  function $t(l) {
    if (typeof yy == "function" && my(l), kl && typeof kl.setStrictMode == "function") try {
      kl.setStrictMode(Ma, l);
    } catch {
    }
  }
  var Il = Math.clz32 ? Math.clz32 : sy, dy = Math.log, hy = Math.LN2;
  function sy(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (dy(l) / hy | 0) | 0;
  }
  var En = 256, An = 262144, Tn = 4194304;
  function Eu(l) {
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
  function _n(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var n = 0, e = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~e, a !== 0 ? n = Eu(a) : (i &= c, i !== 0 ? n = Eu(i) : u || (u = c & ~l, u !== 0 && (n = Eu(u))))) : (c = a & ~e, c !== 0 ? n = Eu(c) : i !== 0 ? n = Eu(i) : u || (u = a & ~l, u !== 0 && (n = Eu(u)))), n === 0 ? 0 : t !== 0 && t !== n && (t & e) === 0 && (e = n & -n, u = t & -t, e >= u || e === 32 && (u & 4194048) !== 0) ? t : n;
  }
  function Da(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Sy(l, t) {
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
  function vf() {
    var l = Tn;
    return Tn <<= 1, (Tn & 62914560) === 0 && (Tn = 4194304), l;
  }
  function Ve(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function On(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function oy(l, t, u, a, n, e) {
    var i = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, f = l.expirationTimes, s = l.hiddenUpdates;
    for (u = i & ~u; 0 < u; ) {
      var b = 31 - Il(u), E = 1 << b;
      c[b] = 0, f[b] = -1;
      var o = s[b];
      if (o !== null) for (s[b] = null, b = 0; b < o.length; b++) {
        var g = o[b];
        g !== null && (g.lane &= -536870913);
      }
      u &= ~E;
    }
    a !== 0 && yf(l, a, 0), e !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= e & ~(i & ~t));
  }
  function yf(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - Il(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 261930;
  }
  function mf(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - Il(u), n = 1 << a;
      n & t | l[a] & t && (l[a] |= t), u &= ~n;
    }
  }
  function df(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : hf(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
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
  function Ke(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function sf() {
    var l = M.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : $v(l.type));
  }
  function Sf(l, t) {
    var u = M.p;
    try {
      return M.p = l, t();
    } finally {
      M.p = u;
    }
  }
  var Ft = Math.random().toString(36).slice(2), Ul = "__reactFiber$" + Ft, Gl = "__reactProps$" + Ft, Ua = "__reactContainer$" + Ft, xe = "__reactEvents$" + Ft, gy = "__reactListeners$" + Ft, by = "__reactHandles$" + Ft, of = "__reactResources$" + Ft, Ha = "__reactMarker$" + Ft;
  function Je(l) {
    delete l[Ul], delete l[Gl], delete l[xe], delete l[gy], delete l[by];
  }
  function Lu(l) {
    var t = l[Ul];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Ua] || u[Ul]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null) for (l = Yv(l); l !== null; ) {
          if (u = l[Ul]) return u;
          l = Yv(l);
        }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Vu(l) {
    if (l = l[Ul] || l[Ua]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
    }
    return null;
  }
  function pa(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(S(33));
  }
  function Ku(l) {
    var t = l[of];
    return t || (t = l[of] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), t;
  }
  function Ml(l) {
    l[Ha] = !0;
  }
  var gf = /* @__PURE__ */ new Set(), bf = {};
  function Au(l, t) {
    xu(l, t), xu(l + "Capture", t);
  }
  function xu(l, t) {
    for (bf[l] = t, l = 0; l < t.length; l++) gf.add(t[l]);
  }
  var zy = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), zf = {}, Ef = {};
  function Ey(l) {
    return Xe.call(Ef, l) ? !0 : Xe.call(zf, l) ? !1 : zy.test(l) ? Ef[l] = !0 : (zf[l] = !0, !1);
  }
  function Mn(l, t, u) {
    if (Ey(t)) if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
          l.removeAttribute(t);
          return;
        case "boolean":
          var a = t.toLowerCase().slice(0, 5);
          if (a !== "data-" && a !== "aria-") {
            l.removeAttribute(t);
            return;
          }
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Dn(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Ht(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, "" + a);
    }
  }
  function et(l) {
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
  function Af(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ay(l, t, u) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, e = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          u = "" + i, e.call(this, i);
        }
      }), Object.defineProperty(l, t, { enumerable: a.enumerable }), {
        getValue: function() {
          return u;
        },
        setValue: function(i) {
          u = "" + i;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function re(l) {
    if (!l._valueTracker) {
      var t = Af(l) ? "checked" : "value";
      l._valueTracker = Ay(l, t, "" + l[t]);
    }
  }
  function Tf(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = Af(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  function Un(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Ty = /[\n"\\]/g;
  function it(l) {
    return l.replace(Ty, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function we(l, t, u, a, n, e, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + et(t)) : l.value !== "" + et(t) && (l.value = "" + et(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? We(l, i, et(t)) : u != null ? We(l, i, et(u)) : a != null && l.removeAttribute("value"), n == null && e != null && (l.defaultChecked = !!e), n != null && (l.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + et(c) : l.removeAttribute("name");
  }
  function _f(l, t, u, a, n, e, i, c) {
    if (e != null && typeof e != "function" && typeof e != "symbol" && typeof e != "boolean" && (l.type = e), t != null || u != null) {
      if (!(e !== "submit" && e !== "reset" || t != null)) {
        re(l);
        return;
      }
      u = u != null ? "" + et(u) : "", t = t != null ? "" + et(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), re(l);
  }
  function We(l, t, u) {
    t === "number" && Un(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Ju(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var n = 0; n < u.length; n++) t["$" + u[n]] = !0;
      for (u = 0; u < l.length; u++) n = t.hasOwnProperty("$" + l[u].value), l[u].selected !== n && (l[u].selected = n), n && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + et(u), t = null, n = 0; n < l.length; n++) {
        if (l[n].value === u) {
          l[n].selected = !0, a && (l[n].defaultSelected = !0);
          return;
        }
        t !== null || l[n].disabled || (t = l[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Of(l, t, u) {
    if (t != null && (t = "" + et(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + et(u) : "";
  }
  function Mf(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(S(92));
        if (U(a)) {
          if (1 < a.length) throw Error(S(93));
          a = a[0];
        }
        u = a;
      }
      u ??= "", t = u;
    }
    u = et(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a), re(l);
  }
  function ru(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var _y = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Df(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || _y.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function Uf(l, t, u) {
    if (t != null && typeof t != "object") throw Error(S(62));
    if (l = l.style, u != null) {
      for (var a in u) !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var n in t) a = t[n], t.hasOwnProperty(n) && u[n] !== a && Df(l, n, a);
    } else for (var e in t) t.hasOwnProperty(e) && Df(l, e, t[e]);
  }
  function $e(l) {
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
  var Oy = /* @__PURE__ */ new Map([
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
  ]), My = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Hn(l) {
    return My.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function pt() {
  }
  var Fe = null;
  function ke(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var wu = null, Wu = null;
  function Hf(l) {
    var t = Vu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Gl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (we(l, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll('input[name="' + it("" + t) + '"][type="radio"]'), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var n = a[Gl] || null;
                if (!n) throw Error(S(90));
                we(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
              }
            }
            for (t = 0; t < u.length; t++) a = u[t], a.form === l.form && Tf(a);
          }
          break l;
        case "textarea":
          Of(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && Ju(l, !!u.multiple, t, !1);
      }
    }
  }
  var Ie = !1;
  function pf(l, t, u) {
    if (Ie) return l(t, u);
    Ie = !0;
    try {
      return l(t);
    } finally {
      if (Ie = !1, (wu !== null || Wu !== null) && (Se(), wu && (t = wu, l = Wu, Wu = wu = null, Hf(t), l)))
        for (t = 0; t < l.length; t++) Hf(l[t]);
    }
  }
  function Na(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Gl] || null;
    if (a === null) return null;
    u = a[t];
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
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function") throw Error(S(231, t, typeof u));
    return u;
  }
  var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pe = !1;
  if (Nt) try {
    var Ca = {};
    Object.defineProperty(Ca, "passive", { get: function() {
      Pe = !0;
    } }), window.addEventListener("test", Ca, Ca), window.removeEventListener("test", Ca, Ca);
  } catch {
    Pe = !1;
  }
  var kt = null, li = null, pn = null;
  function Nf() {
    if (pn) return pn;
    var l, t = li, u = t.length, a, n = "value" in kt ? kt.value : kt.textContent, e = n.length;
    for (l = 0; l < u && t[l] === n[l]; l++) ;
    var i = u - l;
    for (a = 1; a <= i && t[u - a] === n[e - a]; a++) ;
    return pn = n.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Nn(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Cn() {
    return !0;
  }
  function Cf() {
    return !1;
  }
  function Ql(l) {
    function t(u, a, n, e, i) {
      this._reactName = u, this._targetInst = n, this.type = a, this.nativeEvent = e, this.target = i, this.currentTarget = null;
      for (var c in l) l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(e) : e[c]);
      return this.isDefaultPrevented = (e.defaultPrevented != null ? e.defaultPrevented : e.returnValue === !1) ? Cn : Cf, this.isPropagationStopped = Cf, this;
    }
    return B(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Cn);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Cn);
      },
      persist: function() {
      },
      isPersistent: Cn
    }), t;
  }
  var Tu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Rn = Ql(Tu), Ra = B({}, Tu, {
    view: 0,
    detail: 0
  }), Dy = Ql(Ra), ti, ui, qa, qn = B({}, Ra, {
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
    getModifierState: ni,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== qa && (qa && l.type === "mousemove" ? (ti = l.screenX - qa.screenX, ui = l.screenY - qa.screenY) : ui = ti = 0, qa = l), ti);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ui;
    }
  }), Rf = Ql(qn), Uy = Ql(B({}, qn, { dataTransfer: 0 })), ai = Ql(B({}, Ra, { relatedTarget: 0 })), Hy = Ql(B({}, Tu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), py = Ql(B({}, Tu, { clipboardData: function(l) {
    return "clipboardData" in l ? l.clipboardData : window.clipboardData;
  } })), qf = Ql(B({}, Tu, { data: 0 })), Ny = {
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
  }, Cy = {
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
  }, Ry = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function qy(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Ry[l]) ? !!t[l] : !1;
  }
  function ni() {
    return qy;
  }
  var By = Ql(B({}, Ra, {
    key: function(l) {
      if (l.key) {
        var t = Ny[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Nn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Cy[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ni,
    charCode: function(l) {
      return l.type === "keypress" ? Nn(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Nn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  })), Bf = Ql(B({}, qn, {
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
  })), Yy = Ql(B({}, Ra, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ni
  })), jy = Ql(B({}, Tu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), Gy = Ql(B({}, qn, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  })), Qy = Ql(B({}, Tu, {
    newState: 0,
    oldState: 0
  })), Xy = [
    9,
    13,
    27,
    32
  ], ei = Nt && "CompositionEvent" in window, Ba = null;
  Nt && "documentMode" in document && (Ba = document.documentMode);
  var Zy = Nt && "TextEvent" in window && !Ba, Yf = Nt && (!ei || Ba && 8 < Ba && 11 >= Ba), jf = " ", Gf = !1;
  function Qf(l, t) {
    switch (l) {
      case "keyup":
        return Xy.indexOf(t.keyCode) !== -1;
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
  function Xf(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var $u = !1;
  function Ly(l, t) {
    switch (l) {
      case "compositionend":
        return Xf(t);
      case "keypress":
        return t.which !== 32 ? null : (Gf = !0, jf);
      case "textInput":
        return l = t.data, l === jf && Gf ? null : l;
      default:
        return null;
    }
  }
  function Vy(l, t) {
    if ($u) return l === "compositionend" || !ei && Qf(l, t) ? (l = Nf(), pn = li = kt = null, $u = !1, l) : null;
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
  var Ky = {
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
  function Zf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Ky[l.type] : t === "textarea";
  }
  function Lf(l, t, u, a) {
    wu ? Wu ? Wu.push(a) : Wu = [a] : wu = a, t = Te(t, "onChange"), 0 < t.length && (u = new Rn("onChange", "change", null, u, a), l.push({
      event: u,
      listeners: t
    }));
  }
  var Ya = null, ja = null;
  function xy(l) {
    Ev(l, 0);
  }
  function Bn(l) {
    if (Tf(pa(l))) return l;
  }
  function Vf(l, t) {
    if (l === "change") return t;
  }
  var Kf = !1;
  if (Nt) {
    var ii;
    if (Nt) {
      var ci = "oninput" in document;
      if (!ci) {
        var xf = document.createElement("div");
        xf.setAttribute("oninput", "return;"), ci = typeof xf.oninput == "function";
      }
      ii = ci;
    } else ii = !1;
    Kf = ii && (!document.documentMode || 9 < document.documentMode);
  }
  function Jf() {
    Ya && (Ya.detachEvent("onpropertychange", rf), ja = Ya = null);
  }
  function rf(l) {
    if (l.propertyName === "value" && Bn(ja)) {
      var t = [];
      Lf(t, ja, l, ke(l)), pf(xy, t);
    }
  }
  function Jy(l, t, u) {
    l === "focusin" ? (Jf(), Ya = t, ja = u, Ya.attachEvent("onpropertychange", rf)) : l === "focusout" && Jf();
  }
  function ry(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return Bn(ja);
  }
  function wy(l, t) {
    if (l === "click") return Bn(t);
  }
  function Wy(l, t) {
    if (l === "input" || l === "change") return Bn(t);
  }
  function $y(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Pl = typeof Object.is == "function" ? Object.is : $y;
  function Ga(l, t) {
    if (Pl(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var n = u[a];
      if (!Xe.call(t, n) || !Pl(l[n], t[n])) return !1;
    }
    return !0;
  }
  function wf(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Wf(l, t) {
    var u = wf(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t) return {
          node: u,
          offset: t - l
        };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = wf(u);
    }
  }
  function $f(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $f(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ff(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Un(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = Un(l.document);
    }
    return t;
  }
  function fi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Fy = Nt && "documentMode" in document && 11 >= document.documentMode, Fu = null, vi = null, Qa = null, yi = !1;
  function kf(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    yi || Fu == null || Fu !== Un(a) || (a = Fu, "selectionStart" in a && fi(a) ? a = {
      start: a.selectionStart,
      end: a.selectionEnd
    } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Qa && Ga(Qa, a) || (Qa = a, a = Te(vi, "onSelect"), 0 < a.length && (t = new Rn("onSelect", "select", null, t, u), l.push({
      event: t,
      listeners: a
    }), t.target = Fu)));
  }
  function _u(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var ku = {
    animationend: _u("Animation", "AnimationEnd"),
    animationiteration: _u("Animation", "AnimationIteration"),
    animationstart: _u("Animation", "AnimationStart"),
    transitionrun: _u("Transition", "TransitionRun"),
    transitionstart: _u("Transition", "TransitionStart"),
    transitioncancel: _u("Transition", "TransitionCancel"),
    transitionend: _u("Transition", "TransitionEnd")
  }, mi = {}, If = {};
  Nt && (If = document.createElement("div").style, "AnimationEvent" in window || (delete ku.animationend.animation, delete ku.animationiteration.animation, delete ku.animationstart.animation), "TransitionEvent" in window || delete ku.transitionend.transition);
  function Ou(l) {
    if (mi[l]) return mi[l];
    if (!ku[l]) return l;
    var t = ku[l], u;
    for (u in t) if (t.hasOwnProperty(u) && u in If) return mi[l] = t[u];
    return l;
  }
  var Pf = Ou("animationend"), l0 = Ou("animationiteration"), t0 = Ou("animationstart"), ky = Ou("transitionrun"), Iy = Ou("transitionstart"), Py = Ou("transitioncancel"), u0 = Ou("transitionend"), a0 = /* @__PURE__ */ new Map(), di = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  di.push("scrollEnd");
  function zt(l, t) {
    a0.set(l, t), Au(t, [l]);
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
  }, ct = [], Iu = 0, hi = 0;
  function jn() {
    for (var l = Iu, t = hi = Iu = 0; t < l; ) {
      var u = ct[t];
      ct[t++] = null;
      var a = ct[t];
      ct[t++] = null;
      var n = ct[t];
      ct[t++] = null;
      var e = ct[t];
      if (ct[t++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      e !== 0 && n0(u, n, e);
    }
  }
  function Gn(l, t, u, a) {
    ct[Iu++] = l, ct[Iu++] = t, ct[Iu++] = u, ct[Iu++] = a, hi |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function si(l, t, u, a) {
    return Gn(l, t, u, a), Qn(l);
  }
  function Mu(l, t) {
    return Gn(l, null, null, t), Qn(l);
  }
  function n0(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var n = !1, e = l.return; e !== null; ) e.childLanes |= u, a = e.alternate, a !== null && (a.childLanes |= u), e.tag === 22 && (l = e.stateNode, l === null || l._visibility & 1 || (n = !0)), l = e, e = e.return;
    return l.tag === 3 ? (e = l.stateNode, n && t !== null && (n = 31 - Il(u), l = e.hiddenUpdates, a = l[n], a === null ? l[n] = [t] : a.push(t), t.lane = u | 536870912), e) : null;
  }
  function Qn(l) {
    if (50 < cn) throw cn = 0, _c = null, Error(S(185));
    for (var t = l.return; t !== null; ) l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Pu = {};
  function lm(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function lt(l, t, u, a) {
    return new lm(l, t, u, a);
  }
  function Si(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Ct(l, t) {
    var u = l.alternate;
    return u === null ? (u = lt(l.tag, t, l.key, l.mode), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function e0(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Xn(l, t, u, a, n, e) {
    var i = 0;
    if (a = l, typeof l == "function") Si(l) && (i = 1);
    else if (typeof l == "string") i = id(l, u, N.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else l: switch (l) {
      case Tt:
        return l = lt(31, u, t, n), l.elementType = Tt, l.lanes = e, l;
      case xl:
        return Du(u.children, n, e, t);
      case wt:
        i = 8, n |= 24;
        break;
      case Jl:
        return l = lt(12, u, t, n | 2), l.elementType = Jl, l.lanes = e, l;
      case rl:
        return l = lt(13, u, t, n), l.elementType = rl, l.lanes = e, l;
      case wl:
        return l = lt(19, u, t, n), l.elementType = wl, l.lanes = e, l;
      default:
        if (typeof l == "object" && l !== null) switch (l.$$typeof) {
          case Ol:
            i = 10;
            break l;
          case Wt:
            i = 9;
            break l;
          case gt:
            i = 11;
            break l;
          case W:
            i = 14;
            break l;
          case jl:
            i = 16, a = null;
            break l;
        }
        i = 29, u = Error(S(130, l === null ? "null" : typeof l, "")), a = null;
    }
    return t = lt(i, u, t, n), t.elementType = l, t.type = a, t.lanes = e, t;
  }
  function Du(l, t, u, a) {
    return l = lt(7, l, a, t), l.lanes = u, l;
  }
  function oi(l, t, u) {
    return l = lt(6, l, null, t), l.lanes = u, l;
  }
  function i0(l) {
    var t = lt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function gi(l, t, u) {
    return t = lt(4, l.children !== null ? l.children : [], l.key, t), t.lanes = u, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var c0 = /* @__PURE__ */ new WeakMap();
  function ft(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = c0.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: nf(t)
      }, c0.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: nf(t)
    };
  }
  var la = [], ta = 0, Zn = null, Xa = 0, vt = [], yt = 0, It = null, Ot = 1, Mt = "";
  function Rt(l, t) {
    la[ta++] = Xa, la[ta++] = Zn, Zn = l, Xa = t;
  }
  function f0(l, t, u) {
    vt[yt++] = Ot, vt[yt++] = Mt, vt[yt++] = It, It = l;
    var a = Ot;
    l = Mt;
    var n = 32 - Il(a) - 1;
    a &= ~(1 << n), u += 1;
    var e = 32 - Il(t) + n;
    if (30 < e) {
      var i = n - n % 5;
      e = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Ot = 1 << 32 - Il(t) + n | u << n | a, Mt = e + l;
    } else Ot = 1 << e | u << n | a, Mt = l;
  }
  function bi(l) {
    l.return !== null && (Rt(l, 1), f0(l, 1, 0));
  }
  function zi(l) {
    for (; l === Zn; ) Zn = la[--ta], la[ta] = null, Xa = la[--ta], la[ta] = null;
    for (; l === It; ) It = vt[--yt], vt[yt] = null, Mt = vt[--yt], vt[yt] = null, Ot = vt[--yt], vt[yt] = null;
  }
  function v0(l, t) {
    vt[yt++] = Ot, vt[yt++] = Mt, vt[yt++] = It, Ot = t.id, Mt = t.overflow, It = l;
  }
  var Hl = null, ml = null, r = !1, Pt = null, mt = !1, Ei = Error(S(519));
  function lu(l) {
    throw Za(ft(Error(S(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), l)), Ei;
  }
  function y0(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Ul] = l, t[Gl] = a, u) {
      case "dialog":
        K("cancel", t), K("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        K("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < vn.length; u++) K(vn[u], t);
        break;
      case "source":
        K("error", t);
        break;
      case "img":
      case "image":
      case "link":
        K("error", t), K("load", t);
        break;
      case "details":
        K("toggle", t);
        break;
      case "input":
        K("invalid", t), _f(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
        break;
      case "select":
        K("invalid", t);
        break;
      case "textarea":
        K("invalid", t), Mf(t, a.value, a.defaultValue, a.children);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || Mv(t.textContent, u) ? (a.popover != null && (K("beforetoggle", t), K("toggle", t)), a.onScroll != null && K("scroll", t), a.onScrollEnd != null && K("scrollend", t), a.onClick != null && (t.onclick = pt), t = !0) : t = !1, t || lu(l, !0);
  }
  function m0(l) {
    for (Hl = l.return; Hl; ) switch (Hl.tag) {
      case 5:
      case 31:
      case 13:
        mt = !1;
        return;
      case 27:
      case 3:
        mt = !0;
        return;
      default:
        Hl = Hl.return;
    }
  }
  function ua(l) {
    if (l !== Hl) return !1;
    if (!r) return m0(l), r = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Gc(l.type, l.memoizedProps)), u = !u), u && ml && lu(l), m0(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(317));
      ml = Bv(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(317));
      ml = Bv(l);
    } else t === 27 ? (t = ml, du(l.type) ? (l = Vc, Vc = null, ml = l) : ml = t) : ml = Hl ? st(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Uu() {
    ml = Hl = null, r = !1;
  }
  function Ai() {
    var l = Pt;
    return l !== null && (Vl === null ? Vl = l : Vl.push.apply(Vl, l), Pt = null), l;
  }
  function Za(l) {
    Pt === null ? Pt = [l] : Pt.push(l);
  }
  var Ti = y(null), Hu = null, qt = null;
  function tu(l, t, u) {
    O(Ti, t._currentValue), t._currentValue = u;
  }
  function Bt(l) {
    l._currentValue = Ti.current, A(Ti);
  }
  function _i(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Oi(l, t, u, a) {
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
            e.lanes |= u, c = e.alternate, c !== null && (c.lanes |= u), _i(e.return, u, l), a || (i = null);
            break l;
          }
          e = c.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(S(341));
        i.lanes |= u, e = i.alternate, e !== null && (e.lanes |= u), _i(i, u, l), i = null;
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
  function aa(l, t, u, a) {
    l = null;
    for (var n = t, e = !1; n !== null; ) {
      if (!e) {
        if ((n.flags & 524288) !== 0) e = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(S(387));
        if (i = i.memoizedProps, i !== null) {
          var c = n.type;
          Pl(n.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (n === ll.current) {
        if (i = n.alternate, i === null) throw Error(S(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (l !== null ? l.push(sn) : l = [sn]);
      }
      n = n.return;
    }
    l !== null && Oi(t, l, u, a), t.flags |= 262144;
  }
  function Ln(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Pl(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function pu(l) {
    Hu = l, qt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function pl(l) {
    return d0(Hu, l);
  }
  function Vn(l, t) {
    return Hu === null && pu(l), d0(l, t);
  }
  function d0(l, t) {
    var u = t._currentValue;
    if (t = {
      context: t,
      memoizedValue: u,
      next: null
    }, qt === null) {
      if (l === null) throw Error(S(308));
      qt = t, l.dependencies = {
        lanes: 0,
        firstContext: t
      }, l.flags |= 524288;
    } else qt = qt.next = t;
    return u;
  }
  var tm = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, um = D.unstable_scheduleCallback, am = D.unstable_NormalPriority, zl = {
    $$typeof: Ol,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Mi() {
    return {
      controller: new tm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function La(l) {
    l.refCount--, l.refCount === 0 && um(am, function() {
      l.controller.abort();
    });
  }
  var Va = null, Di = 0, na = 0, ea = null;
  function nm(l, t) {
    if (Va === null) {
      var u = Va = [];
      Di = 0, na = pc(), ea = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Di++, t.then(h0, h0), t;
  }
  function h0() {
    if (--Di === 0 && Va !== null) {
      ea !== null && (ea.status = "fulfilled");
      var l = Va;
      Va = null, na = 0, ea = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function em(l, t) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        u.push(n);
      }
    };
    return l.then(function() {
      a.status = "fulfilled", a.value = t;
      for (var n = 0; n < u.length; n++) (0, u[n])(t);
    }, function(n) {
      for (a.status = "rejected", a.reason = n, n = 0; n < u.length; n++) (0, u[n])(void 0);
    }), a;
  }
  var s0 = _.S;
  _.S = function(l, t) {
    W1 = Fl(), typeof t == "object" && t !== null && typeof t.then == "function" && nm(l, t), s0 !== null && s0(l, t);
  };
  var Nu = y(null);
  function Ui() {
    var l = Nu.current;
    return l !== null ? l : cl.pooledCache;
  }
  function Kn(l, t) {
    t === null ? O(Nu, Nu.current) : O(Nu, t.pool);
  }
  function S0() {
    var l = Ui();
    return l === null ? null : {
      parent: zl._currentValue,
      pool: l
    };
  }
  var ia = Error(S(460)), Hi = Error(S(474)), xn = Error(S(542)), Jn = { then: function() {
  } };
  function o0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function g0(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(pt, pt), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, z0(l), l;
      default:
        if (typeof t.status == "string") t.then(pt, pt);
        else {
          if (l = cl, l !== null && 100 < l.shellSuspendCounter) throw Error(S(482));
          l = t, l.status = "pending", l.then(function(a) {
            if (t.status === "pending") {
              var n = t;
              n.status = "fulfilled", n.value = a;
            }
          }, function(a) {
            if (t.status === "pending") {
              var n = t;
              n.status = "rejected", n.reason = a;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, z0(l), l;
        }
        throw Ru = t, ia;
    }
  }
  function Cu(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Ru = u, ia) : u;
    }
  }
  var Ru = null;
  function b0() {
    if (Ru === null) throw Error(S(459));
    var l = Ru;
    return Ru = null, l;
  }
  function z0(l) {
    if (l === ia || l === xn) throw Error(S(483));
  }
  var ca = null, Ka = 0;
  function rn(l) {
    var t = Ka;
    return Ka += 1, ca === null && (ca = []), g0(ca, l, t);
  }
  function xa(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function wn(l, t) {
    throw t.$$typeof === ot ? Error(S(525)) : (l = Object.prototype.toString.call(t), Error(S(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
  }
  function E0(l) {
    function t(m, v) {
      if (l) {
        var d = m.deletions;
        d === null ? (m.deletions = [v], m.flags |= 16) : d.push(v);
      }
    }
    function u(m, v) {
      if (!l) return null;
      for (; v !== null; ) t(m, v), v = v.sibling;
      return null;
    }
    function a(m) {
      for (var v = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? v.set(m.key, m) : v.set(m.index, m), m = m.sibling;
      return v;
    }
    function n(m, v) {
      return m = Ct(m, v), m.index = 0, m.sibling = null, m;
    }
    function e(m, v, d) {
      return m.index = d, l ? (d = m.alternate, d !== null ? (d = d.index, d < v ? (m.flags |= 67108866, v) : d) : (m.flags |= 67108866, v)) : (m.flags |= 1048576, v);
    }
    function i(m) {
      return l && m.alternate === null && (m.flags |= 67108866), m;
    }
    function c(m, v, d, z) {
      return v === null || v.tag !== 6 ? (v = oi(d, m.mode, z), v.return = m, v) : (v = n(v, d), v.return = m, v);
    }
    function f(m, v, d, z) {
      var R = d.type;
      return R === xl ? b(m, v, d.props.children, z, d.key) : v !== null && (v.elementType === R || typeof R == "object" && R !== null && R.$$typeof === jl && Cu(R) === v.type) ? (v = n(v, d.props), xa(v, d), v.return = m, v) : (v = Xn(d.type, d.key, d.props, null, m.mode, z), xa(v, d), v.return = m, v);
    }
    function s(m, v, d, z) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== d.containerInfo || v.stateNode.implementation !== d.implementation ? (v = gi(d, m.mode, z), v.return = m, v) : (v = n(v, d.children || []), v.return = m, v);
    }
    function b(m, v, d, z, R) {
      return v === null || v.tag !== 7 ? (v = Du(d, m.mode, z, R), v.return = m, v) : (v = n(v, d), v.return = m, v);
    }
    function E(m, v, d) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return v = oi("" + v, m.mode, d), v.return = m, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Rl:
            return d = Xn(v.type, v.key, v.props, null, m.mode, d), xa(d, v), d.return = m, d;
          case Yl:
            return v = gi(v, m.mode, d), v.return = m, v;
          case jl:
            return v = Cu(v), E(m, v, d);
        }
        if (U(v) || _t(v)) return v = Du(v, m.mode, d, null), v.return = m, v;
        if (typeof v.then == "function") return E(m, rn(v), d);
        if (v.$$typeof === Ol) return E(m, Vn(m, v), d);
        wn(m, v);
      }
      return null;
    }
    function o(m, v, d, z) {
      var R = v !== null ? v.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint") return R !== null ? null : c(m, v, "" + d, z);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Rl:
            return d.key === R ? f(m, v, d, z) : null;
          case Yl:
            return d.key === R ? s(m, v, d, z) : null;
          case jl:
            return d = Cu(d), o(m, v, d, z);
        }
        if (U(d) || _t(d)) return R !== null ? null : b(m, v, d, z, null);
        if (typeof d.then == "function") return o(m, v, rn(d), z);
        if (d.$$typeof === Ol) return o(m, v, Vn(m, d), z);
        wn(m, d);
      }
      return null;
    }
    function g(m, v, d, z, R) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint") return m = m.get(d) || null, c(v, m, "" + z, R);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Rl:
            return m = m.get(z.key === null ? d : z.key) || null, f(v, m, z, R);
          case Yl:
            return m = m.get(z.key === null ? d : z.key) || null, s(v, m, z, R);
          case jl:
            return z = Cu(z), g(m, v, d, z, R);
        }
        if (U(z) || _t(z)) return m = m.get(d) || null, b(v, m, z, R, null);
        if (typeof z.then == "function") return g(m, v, d, rn(z), R);
        if (z.$$typeof === Ol) return g(m, v, d, Vn(v, z), R);
        wn(v, z);
      }
      return null;
    }
    function H(m, v, d, z) {
      for (var R = null, $ = null, p = v, X = v = 0, J = null; p !== null && X < d.length; X++) {
        p.index > X ? (J = p, p = null) : J = p.sibling;
        var F = o(m, p, d[X], z);
        if (F === null) {
          p === null && (p = J);
          break;
        }
        l && p && F.alternate === null && t(m, p), v = e(F, v, X), $ === null ? R = F : $.sibling = F, $ = F, p = J;
      }
      if (X === d.length) return u(m, p), r && Rt(m, X), R;
      if (p === null) {
        for (; X < d.length; X++) p = E(m, d[X], z), p !== null && (v = e(p, v, X), $ === null ? R = p : $.sibling = p, $ = p);
        return r && Rt(m, X), R;
      }
      for (p = a(p); X < d.length; X++) J = g(p, m, X, d[X], z), J !== null && (l && J.alternate !== null && p.delete(J.key === null ? X : J.key), v = e(J, v, X), $ === null ? R = J : $.sibling = J, $ = J);
      return l && p.forEach(function(gu) {
        return t(m, gu);
      }), r && Rt(m, X), R;
    }
    function Y(m, v, d, z) {
      if (d == null) throw Error(S(151));
      for (var R = null, $ = null, p = v, X = v = 0, J = null, F = d.next(); p !== null && !F.done; X++, F = d.next()) {
        p.index > X ? (J = p, p = null) : J = p.sibling;
        var gu = o(m, p, F.value, z);
        if (gu === null) {
          p === null && (p = J);
          break;
        }
        l && p && gu.alternate === null && t(m, p), v = e(gu, v, X), $ === null ? R = gu : $.sibling = gu, $ = gu, p = J;
      }
      if (F.done) return u(m, p), r && Rt(m, X), R;
      if (p === null) {
        for (; !F.done; X++, F = d.next()) F = E(m, F.value, z), F !== null && (v = e(F, v, X), $ === null ? R = F : $.sibling = F, $ = F);
        return r && Rt(m, X), R;
      }
      for (p = a(p); !F.done; X++, F = d.next()) F = g(p, m, X, F.value, z), F !== null && (l && F.alternate !== null && p.delete(F.key === null ? X : F.key), v = e(F, v, X), $ === null ? R = F : $.sibling = F, $ = F);
      return l && p.forEach(function(Ed) {
        return t(m, Ed);
      }), r && Rt(m, X), R;
    }
    function il(m, v, d, z) {
      if (typeof d == "object" && d !== null && d.type === xl && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Rl:
            l: {
              for (var R = d.key; v !== null; ) {
                if (v.key === R) {
                  if (R = d.type, R === xl) {
                    if (v.tag === 7) {
                      u(m, v.sibling), z = n(v, d.props.children), z.return = m, m = z;
                      break l;
                    }
                  } else if (v.elementType === R || typeof R == "object" && R !== null && R.$$typeof === jl && Cu(R) === v.type) {
                    u(m, v.sibling), z = n(v, d.props), xa(z, d), z.return = m, m = z;
                    break l;
                  }
                  u(m, v);
                  break;
                } else t(m, v);
                v = v.sibling;
              }
              d.type === xl ? (z = Du(d.props.children, m.mode, z, d.key), z.return = m, m = z) : (z = Xn(d.type, d.key, d.props, null, m.mode, z), xa(z, d), z.return = m, m = z);
            }
            return i(m);
          case Yl:
            l: {
              for (R = d.key; v !== null; ) {
                if (v.key === R) if (v.tag === 4 && v.stateNode.containerInfo === d.containerInfo && v.stateNode.implementation === d.implementation) {
                  u(m, v.sibling), z = n(v, d.children || []), z.return = m, m = z;
                  break l;
                } else {
                  u(m, v);
                  break;
                }
                else t(m, v);
                v = v.sibling;
              }
              z = gi(d, m.mode, z), z.return = m, m = z;
            }
            return i(m);
          case jl:
            return d = Cu(d), il(m, v, d, z);
        }
        if (U(d)) return H(m, v, d, z);
        if (_t(d)) {
          if (R = _t(d), typeof R != "function") throw Error(S(150));
          return d = R.call(d), Y(m, v, d, z);
        }
        if (typeof d.then == "function") return il(m, v, rn(d), z);
        if (d.$$typeof === Ol) return il(m, v, Vn(m, d), z);
        wn(m, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint" ? (d = "" + d, v !== null && v.tag === 6 ? (u(m, v.sibling), z = n(v, d), z.return = m, m = z) : (u(m, v), z = oi(d, m.mode, z), z.return = m, m = z), i(m)) : u(m, v);
    }
    return function(m, v, d, z) {
      try {
        Ka = 0;
        var R = il(m, v, d, z);
        return ca = null, R;
      } catch (p) {
        if (p === ia || p === xn) throw p;
        var $ = lt(29, p, null, m.mode);
        return $.lanes = z, $.return = m, $;
      }
    };
  }
  var qu = E0(!0), A0 = E0(!1), uu = !1;
  function pi(l) {
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
  function Ni(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Bu(l) {
    return {
      lane: l,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Yu(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (P & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = Qn(l), n0(l, null, u), t;
    }
    return Gn(l, a, t, u), Qn(l);
  }
  function Ja(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, mf(l, u);
    }
  }
  function Ci(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var n = null, e = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var i = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          e === null ? n = e = i : e = e.next = i, u = u.next;
        } while (u !== null);
        e === null ? n = e = t : e = e.next = t;
      } else n = e = t;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: e,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var Ri = !1;
  function ra() {
    if (Ri) {
      var l = ea;
      if (l !== null) throw l;
    }
  }
  function wa(l, t, u, a) {
    Ri = !1;
    var n = l.updateQueue;
    uu = !1;
    var e = n.firstBaseUpdate, i = n.lastBaseUpdate, c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var f = c, s = f.next;
      f.next = null, i === null ? e = s : i.next = s, i = f;
      var b = l.alternate;
      b !== null && (b = b.updateQueue, c = b.lastBaseUpdate, c !== i && (c === null ? b.firstBaseUpdate = s : c.next = s, b.lastBaseUpdate = f));
    }
    if (e !== null) {
      var E = n.baseState;
      i = 0, b = s = f = null, c = e;
      do {
        var o = c.lane & -536870913, g = o !== c.lane;
        if (g ? (x & o) === o : (a & o) === o) {
          o !== 0 && o === na && (Ri = !0), b !== null && (b = b.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var H = l, Y = c;
            o = t;
            var il = u;
            switch (Y.tag) {
              case 1:
                if (H = Y.payload, typeof H == "function") {
                  E = H.call(il, E, o);
                  break l;
                }
                E = H;
                break l;
              case 3:
                H.flags = H.flags & -65537 | 128;
              case 0:
                if (H = Y.payload, o = typeof H == "function" ? H.call(il, E, o) : H, o == null) break l;
                E = B({}, E, o);
                break l;
              case 2:
                uu = !0;
            }
          }
          o = c.callback, o !== null && (l.flags |= 64, g && (l.flags |= 8192), g = n.callbacks, g === null ? n.callbacks = [o] : g.push(o));
        } else g = {
          lane: o,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        }, b === null ? (s = b = g, f = E) : b = b.next = g, i |= o;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null) break;
          g = c, c = g.next, g.next = null, n.lastBaseUpdate = g, n.shared.pending = null;
        }
      } while (!0);
      b === null && (f = E), n.baseState = f, n.firstBaseUpdate = s, n.lastBaseUpdate = b, e === null && (n.shared.lanes = 0), cu |= i, l.lanes = i, l.memoizedState = E;
    }
  }
  function T0(l, t) {
    if (typeof l != "function") throw Error(S(191, l));
    l.call(t);
  }
  function _0(l, t) {
    var u = l.callbacks;
    if (u !== null) for (l.callbacks = null, l = 0; l < u.length; l++) T0(u[l], t);
  }
  var fa = y(null), Wn = y(0);
  function O0(l, t) {
    l = Kt, O(Wn, l), O(fa, t), Kt = l | t.baseLanes;
  }
  function qi() {
    O(Wn, Kt), O(fa, fa.current);
  }
  function Bi() {
    Kt = Wn.current, A(fa), A(Wn);
  }
  var tt = y(null), dt = null;
  function au(l) {
    var t = l.alternate;
    O(gl, gl.current & 1), O(tt, l), dt === null && (t === null || fa.current !== null || t.memoizedState !== null) && (dt = l);
  }
  function Yi(l) {
    O(gl, gl.current), O(tt, l), dt === null && (dt = l);
  }
  function M0(l) {
    l.tag === 22 ? (O(gl, gl.current), O(tt, l), dt === null && (dt = l)) : nu(l);
  }
  function nu() {
    O(gl, gl.current), O(tt, tt.current);
  }
  function ut(l) {
    A(tt), dt === l && (dt = null), A(gl);
  }
  var gl = y(0);
  function $n(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || Zc(u) || Lc(u))) return t;
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
  var Yt = 0, G = null, nl = null, El = null, Fn = !1, va = !1, ju = !1, kn = 0, Wa = 0, ya = null, im = 0;
  function sl() {
    throw Error(S(321));
  }
  function ji(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++) if (!Pl(l[u], t[u])) return !1;
    return !0;
  }
  function Gi(l, t, u, a, n, e) {
    return Yt = e, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _.H = l === null || l.memoizedState === null ? f1 : Ii, ju = !1, e = u(a, n), ju = !1, va && (e = U0(t, u, a, n)), D0(l), e;
  }
  function D0(l) {
    _.H = ka;
    var t = nl !== null && nl.next !== null;
    if (Yt = 0, El = nl = G = null, Fn = !1, Wa = 0, ya = null, t) throw Error(S(300));
    l === null || Al || (l = l.dependencies, l !== null && Ln(l) && (Al = !0));
  }
  function U0(l, t, u, a) {
    G = l;
    var n = 0;
    do {
      if (va && (ya = null), Wa = 0, va = !1, 25 <= n) throw Error(S(301));
      if (n += 1, El = nl = null, l.updateQueue != null) {
        var e = l.updateQueue;
        e.lastEffect = null, e.events = null, e.stores = null, e.memoCache != null && (e.memoCache.index = 0);
      }
      _.H = v1, e = t(u, a);
    } while (va);
    return e;
  }
  function cm() {
    var l = _.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? $a(t) : t, l = l.useState()[0], (nl !== null ? nl.memoizedState : null) !== l && (G.flags |= 1024), t;
  }
  function Qi() {
    var l = kn !== 0;
    return kn = 0, l;
  }
  function Xi(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function Zi(l) {
    if (Fn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Fn = !1;
    }
    Yt = 0, El = nl = G = null, va = !1, Wa = kn = 0, ya = null;
  }
  function Bl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return El === null ? G.memoizedState = El = l : El = El.next = l, El;
  }
  function bl() {
    if (nl === null) {
      var l = G.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = nl.next;
    var t = El === null ? G.memoizedState : El.next;
    if (t !== null) El = t, nl = l;
    else {
      if (l === null)
        throw G.alternate === null ? Error(S(467)) : Error(S(310));
      nl = l, l = {
        memoizedState: nl.memoizedState,
        baseState: nl.baseState,
        baseQueue: nl.baseQueue,
        queue: nl.queue,
        next: null
      }, El === null ? G.memoizedState = El = l : El = El.next = l;
    }
    return El;
  }
  function In() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function $a(l) {
    var t = Wa;
    return Wa += 1, ya === null && (ya = []), l = g0(ya, l, t), t = G, (El === null ? t.memoizedState : El.next) === null && (t = t.alternate, _.H = t === null || t.memoizedState === null ? f1 : Ii), l;
  }
  function Pn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return $a(l);
      if (l.$$typeof === Ol) return pl(l);
    }
    throw Error(S(438, String(l)));
  }
  function Li(l) {
    var t = null, u = G.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = G.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t ??= {
      data: [],
      index: 0
    }, u === null && (u = In(), G.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0) for (u = t.data[t.index] = Array(l), a = 0; a < l; a++) u[a] = bu;
    return t.index++, u;
  }
  function jt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function le(l) {
    return Vi(bl(), nl, l);
  }
  function Vi(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(S(311));
    a.lastRenderedReducer = u;
    var n = l.baseQueue, e = a.pending;
    if (e !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = e.next, e.next = i;
      }
      t.baseQueue = n = e, a.pending = null;
    }
    if (e = l.baseState, n === null) l.memoizedState = e;
    else {
      t = n.next;
      var c = i = null, f = null, s = t, b = !1;
      do {
        var E = s.lane & -536870913;
        if (E !== s.lane ? (x & E) === E : (Yt & E) === E) {
          var o = s.revertLane;
          if (o === 0) f !== null && (f = f.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: s.action,
            hasEagerState: s.hasEagerState,
            eagerState: s.eagerState,
            next: null
          }), E === na && (b = !0);
          else if ((Yt & o) === o) {
            s = s.next, o === na && (b = !0);
            continue;
          } else E = {
            lane: 0,
            revertLane: s.revertLane,
            gesture: null,
            action: s.action,
            hasEagerState: s.hasEagerState,
            eagerState: s.eagerState,
            next: null
          }, f === null ? (c = f = E, i = e) : f = f.next = E, G.lanes |= o, cu |= o;
          E = s.action, ju && u(e, E), e = s.hasEagerState ? s.eagerState : u(e, E);
        } else o = {
          lane: E,
          revertLane: s.revertLane,
          gesture: s.gesture,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        }, f === null ? (c = f = o, i = e) : f = f.next = o, G.lanes |= E, cu |= E;
        s = s.next;
      } while (s !== null && s !== t);
      if (f === null ? i = e : f.next = c, !Pl(e, l.memoizedState) && (Al = !0, b && (u = ea, u !== null))) throw u;
      l.memoizedState = e, l.baseState = i, l.baseQueue = f, a.lastRenderedState = e;
    }
    return n === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Ki(l) {
    var t = bl(), u = t.queue;
    if (u === null) throw Error(S(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, n = u.pending, e = t.memoizedState;
    if (n !== null) {
      u.pending = null;
      var i = n = n.next;
      do
        e = l(e, i.action), i = i.next;
      while (i !== n);
      Pl(e, t.memoizedState) || (Al = !0), t.memoizedState = e, t.baseQueue === null && (t.baseState = e), u.lastRenderedState = e;
    }
    return [e, a];
  }
  function H0(l, t, u) {
    var a = G, n = bl(), e = r;
    if (e) {
      if (u === void 0) throw Error(S(407));
      u = u();
    } else u = t();
    var i = !Pl((nl || n).memoizedState, u);
    if (i && (n.memoizedState = u, Al = !0), n = n.queue, ri(C0.bind(null, a, n, l), [l]), n.getSnapshot !== t || i || El !== null && El.memoizedState.tag & 1) {
      if (a.flags |= 2048, ma(9, { destroy: void 0 }, N0.bind(null, a, n, u, t), null), cl === null) throw Error(S(349));
      e || (Yt & 127) !== 0 || p0(a, t, u);
    }
    return u;
  }
  function p0(l, t, u) {
    l.flags |= 16384, l = {
      getSnapshot: t,
      value: u
    }, t = G.updateQueue, t === null ? (t = In(), G.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function N0(l, t, u, a) {
    t.value = u, t.getSnapshot = a, R0(t) && q0(l);
  }
  function C0(l, t, u) {
    return u(function() {
      R0(t) && q0(l);
    });
  }
  function R0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !Pl(l, u);
    } catch {
      return !0;
    }
  }
  function q0(l) {
    var t = Mu(l, 2);
    t !== null && Kl(t, l, 2);
  }
  function xi(l) {
    var t = Bl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), ju) {
        $t(!0);
        try {
          u();
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
  function B0(l, t, u, a) {
    return l.baseState = u, Vi(l, nl, typeof a == "function" ? a : jt);
  }
  function fm(l, t, u, a, n) {
    if (ae(l)) throw Error(S(485));
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
      _.T !== null ? u(!0) : e.isTransition = !1, a(e), u = t.pending, u === null ? (e.next = t.pending = e, Y0(t, e)) : (e.next = u.next, t.pending = u.next = e);
    }
  }
  function Y0(l, t) {
    var u = t.action, a = t.payload, n = l.state;
    if (t.isTransition) {
      var e = _.T, i = {};
      _.T = i;
      try {
        var c = u(n, a), f = _.S;
        f !== null && f(i, c), j0(l, t, c);
      } catch (s) {
        Ji(l, t, s);
      } finally {
        e !== null && i.types !== null && (e.types = i.types), _.T = e;
      }
    } else try {
      e = u(n, a), j0(l, t, e);
    } catch (s) {
      Ji(l, t, s);
    }
  }
  function j0(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(function(a) {
      G0(l, t, a);
    }, function(a) {
      return Ji(l, t, a);
    }) : G0(l, t, u);
  }
  function G0(l, t, u) {
    t.status = "fulfilled", t.value = u, Q0(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, Y0(l, u)));
  }
  function Ji(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, Q0(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function Q0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function X0(l, t) {
    return t;
  }
  function Z0(l, t) {
    if (r) {
      var u = cl.formState;
      if (u !== null) {
        l: {
          var a = G;
          if (r) {
            if (ml) {
              t: {
                for (var n = ml, e = mt; n.nodeType !== 8; ) {
                  if (!e) {
                    n = null;
                    break t;
                  }
                  if (n = st(n.nextSibling), n === null) {
                    n = null;
                    break t;
                  }
                }
                e = n.data, n = e === "F!" || e === "F" ? n : null;
              }
              if (n) {
                ml = st(n.nextSibling), a = n.data === "F!";
                break l;
              }
            }
            lu(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = Bl(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: X0,
      lastRenderedState: t
    }, u.queue = a, u = e1.bind(null, G, a), a.dispatch = u, a = xi(!1), e = ki.bind(null, G, !1, a.queue), a = Bl(), n = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = n, u = fm.bind(null, G, n, e, u), n.dispatch = u, a.memoizedState = l, [
      t,
      u,
      !1
    ];
  }
  function L0(l) {
    return V0(bl(), nl, l);
  }
  function V0(l, t, u) {
    if (t = Vi(l, t, X0)[0], l = le(jt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var a = $a(t);
    } catch (i) {
      throw i === ia ? xn : i;
    }
    else a = t;
    t = bl();
    var n = t.queue, e = n.dispatch;
    return u !== t.memoizedState && (G.flags |= 2048, ma(9, { destroy: void 0 }, vm.bind(null, n, u), null)), [
      a,
      e,
      l
    ];
  }
  function vm(l, t) {
    l.action = t;
  }
  function K0(l) {
    var t = bl(), u = nl;
    if (u !== null) return V0(t, u, l);
    bl(), t = t.memoizedState, u = bl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [
      t,
      a,
      !1
    ];
  }
  function ma(l, t, u, a) {
    return l = {
      tag: l,
      create: u,
      deps: a,
      inst: t,
      next: null
    }, t = G.updateQueue, t === null && (t = In(), G.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function x0() {
    return bl().memoizedState;
  }
  function te(l, t, u, a) {
    var n = Bl();
    G.flags |= l, n.memoizedState = ma(1 | t, { destroy: void 0 }, u, a === void 0 ? null : a);
  }
  function ue(l, t, u, a) {
    var n = bl();
    a = a === void 0 ? null : a;
    var e = n.memoizedState.inst;
    nl !== null && a !== null && ji(a, nl.memoizedState.deps) ? n.memoizedState = ma(t, e, u, a) : (G.flags |= l, n.memoizedState = ma(1 | t, e, u, a));
  }
  function J0(l, t) {
    te(8390656, 8, l, t);
  }
  function ri(l, t) {
    ue(2048, 8, l, t);
  }
  function ym(l) {
    G.flags |= 4;
    var t = G.updateQueue;
    if (t === null) t = In(), G.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function r0(l) {
    var t = bl().memoizedState;
    return ym({
      ref: t,
      nextImpl: l
    }), function() {
      if ((P & 2) !== 0) throw Error(S(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function w0(l, t) {
    return ue(4, 2, l, t);
  }
  function W0(l, t) {
    return ue(4, 4, l, t);
  }
  function $0(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null) return l = l(), t.current = l, function() {
      t.current = null;
    };
  }
  function F0(l, t, u) {
    u = u != null ? u.concat([l]) : null, ue(4, 4, $0.bind(null, t, l), u);
  }
  function wi() {
  }
  function k0(l, t) {
    var u = bl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && ji(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function I0(l, t) {
    var u = bl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && ji(t, a[1])) return a[0];
    if (a = l(), ju) {
      $t(!0);
      try {
        l();
      } finally {
        $t(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function Wi(l, t, u) {
    return u === void 0 || (Yt & 1073741824) !== 0 && (x & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = F1(), G.lanes |= l, cu |= l, u);
  }
  function P0(l, t, u, a) {
    return Pl(u, t) ? u : fa.current !== null ? (l = Wi(l, u, a), Pl(l, t) || (Al = !0), l) : (Yt & 42) === 0 || (Yt & 1073741824) !== 0 && (x & 261930) === 0 ? (Al = !0, l.memoizedState = u) : (l = F1(), G.lanes |= l, cu |= l, t);
  }
  function l1(l, t, u, a, n) {
    var e = M.p;
    M.p = e !== 0 && 8 > e ? e : 8;
    var i = _.T, c = {};
    _.T = c, ki(l, !1, t, u);
    try {
      var f = n(), s = _.S;
      s !== null && s(c, f), f !== null && typeof f == "object" && typeof f.then == "function" ? Fa(l, t, em(f, a), ht(l)) : Fa(l, t, a, ht(l));
    } catch (b) {
      Fa(l, t, {
        then: function() {
        },
        status: "rejected",
        reason: b
      }, ht());
    } finally {
      M.p = e, i !== null && c.types !== null && (i.types = c.types), _.T = i;
    }
  }
  function mm() {
  }
  function $i(l, t, u, a) {
    if (l.tag !== 5) throw Error(S(476));
    var n = t1(l).queue;
    l1(l, n, t, I, u === null ? mm : function() {
      return u1(l), u(a);
    });
  }
  function t1(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jt,
        lastRenderedState: I
      },
      next: null
    };
    var u = {};
    return t.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jt,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function u1(l) {
    var t = t1(l);
    t.next === null && (t = l.alternate.memoizedState), Fa(l, t.next.queue, {}, ht());
  }
  function Fi() {
    return pl(sn);
  }
  function a1() {
    return bl().memoizedState;
  }
  function n1() {
    return bl().memoizedState;
  }
  function dm(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = ht();
          l = Bu(u);
          var a = Yu(t, l, u);
          a !== null && (Kl(a, t, u), Ja(a, t, u)), t = { cache: Mi() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function hm(l, t, u) {
    var a = ht();
    u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ae(l) ? i1(t, u) : (u = si(l, t, u, a), u !== null && (Kl(u, l, a), c1(u, t, a)));
  }
  function e1(l, t, u) {
    Fa(l, t, u, ht());
  }
  function Fa(l, t, u, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ae(l)) i1(t, n);
    else {
      var e = l.alternate;
      if (l.lanes === 0 && (e === null || e.lanes === 0) && (e = t.lastRenderedReducer, e !== null)) try {
        var i = t.lastRenderedState, c = e(i, u);
        if (n.hasEagerState = !0, n.eagerState = c, Pl(c, i)) return Gn(l, t, n, 0), cl === null && jn(), !1;
      } catch {
      }
      if (u = si(l, t, n, a), u !== null) return Kl(u, l, a), c1(u, t, a), !0;
    }
    return !1;
  }
  function ki(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: pc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ae(l)) {
      if (t) throw Error(S(479));
    } else t = si(l, u, a, 2), t !== null && Kl(t, l, 2);
  }
  function ae(l) {
    var t = l.alternate;
    return l === G || t !== null && t === G;
  }
  function i1(l, t) {
    va = Fn = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function c1(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, mf(l, u);
    }
  }
  var ka = {
    readContext: pl,
    use: Pn,
    useCallback: sl,
    useContext: sl,
    useEffect: sl,
    useImperativeHandle: sl,
    useLayoutEffect: sl,
    useInsertionEffect: sl,
    useMemo: sl,
    useReducer: sl,
    useRef: sl,
    useState: sl,
    useDebugValue: sl,
    useDeferredValue: sl,
    useTransition: sl,
    useSyncExternalStore: sl,
    useId: sl,
    useHostTransitionStatus: sl,
    useFormState: sl,
    useActionState: sl,
    useOptimistic: sl,
    useMemoCache: sl,
    useCacheRefresh: sl
  };
  ka.useEffectEvent = sl;
  var f1 = {
    readContext: pl,
    use: Pn,
    useCallback: function(l, t) {
      return Bl().memoizedState = [l, t === void 0 ? null : t], l;
    },
    useContext: pl,
    useEffect: J0,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, te(4194308, 4, $0.bind(null, t, l), u);
    },
    useLayoutEffect: function(l, t) {
      return te(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      te(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = Bl();
      t = t === void 0 ? null : t;
      var a = l();
      if (ju) {
        $t(!0);
        try {
          l();
        } finally {
          $t(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = Bl();
      if (u !== void 0) {
        var n = u(t);
        if (ju) {
          $t(!0);
          try {
            u(t);
          } finally {
            $t(!1);
          }
        }
      } else n = t;
      return a.memoizedState = a.baseState = n, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: n
      }, a.queue = l, l = l.dispatch = hm.bind(null, G, l), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Bl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = xi(l);
      var t = l.queue, u = e1.bind(null, G, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: wi,
    useDeferredValue: function(l, t) {
      return Wi(Bl(), l, t);
    },
    useTransition: function() {
      var l = xi(!1);
      return l = l1.bind(null, G, l.queue, !0, !1), Bl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = G, n = Bl();
      if (r) {
        if (u === void 0) throw Error(S(407));
        u = u();
      } else {
        if (u = t(), cl === null) throw Error(S(349));
        (x & 127) !== 0 || p0(a, t, u);
      }
      n.memoizedState = u;
      var e = {
        value: u,
        getSnapshot: t
      };
      return n.queue = e, J0(C0.bind(null, a, e, l), [l]), a.flags |= 2048, ma(9, { destroy: void 0 }, N0.bind(null, a, e, u, t), null), u;
    },
    useId: function() {
      var l = Bl(), t = cl.identifierPrefix;
      if (r) {
        var u = Mt, a = Ot;
        u = (a & ~(1 << 32 - Il(a) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = kn++, 0 < u && (t += "H" + u.toString(32)), t += "_";
      } else u = im++, t = "_" + t + "r_" + u.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: Fi,
    useFormState: Z0,
    useActionState: Z0,
    useOptimistic: function(l) {
      var t = Bl();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = ki.bind(null, G, !0, u), u.dispatch = t, [l, t];
    },
    useMemoCache: Li,
    useCacheRefresh: function() {
      return Bl().memoizedState = dm.bind(null, G);
    },
    useEffectEvent: function(l) {
      var t = Bl(), u = { impl: l };
      return t.memoizedState = u, function() {
        if ((P & 2) !== 0) throw Error(S(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Ii = {
    readContext: pl,
    use: Pn,
    useCallback: k0,
    useContext: pl,
    useEffect: ri,
    useImperativeHandle: F0,
    useInsertionEffect: w0,
    useLayoutEffect: W0,
    useMemo: I0,
    useReducer: le,
    useRef: x0,
    useState: function() {
      return le(jt);
    },
    useDebugValue: wi,
    useDeferredValue: function(l, t) {
      return P0(bl(), nl.memoizedState, l, t);
    },
    useTransition: function() {
      var l = le(jt)[0], t = bl().memoizedState;
      return [typeof l == "boolean" ? l : $a(l), t];
    },
    useSyncExternalStore: H0,
    useId: a1,
    useHostTransitionStatus: Fi,
    useFormState: L0,
    useActionState: L0,
    useOptimistic: function(l, t) {
      return B0(bl(), nl, l, t);
    },
    useMemoCache: Li,
    useCacheRefresh: n1
  };
  Ii.useEffectEvent = r0;
  var v1 = {
    readContext: pl,
    use: Pn,
    useCallback: k0,
    useContext: pl,
    useEffect: ri,
    useImperativeHandle: F0,
    useInsertionEffect: w0,
    useLayoutEffect: W0,
    useMemo: I0,
    useReducer: Ki,
    useRef: x0,
    useState: function() {
      return Ki(jt);
    },
    useDebugValue: wi,
    useDeferredValue: function(l, t) {
      var u = bl();
      return nl === null ? Wi(u, l, t) : P0(u, nl.memoizedState, l, t);
    },
    useTransition: function() {
      var l = Ki(jt)[0], t = bl().memoizedState;
      return [typeof l == "boolean" ? l : $a(l), t];
    },
    useSyncExternalStore: H0,
    useId: a1,
    useHostTransitionStatus: Fi,
    useFormState: K0,
    useActionState: K0,
    useOptimistic: function(l, t) {
      var u = bl();
      return nl !== null ? B0(u, nl, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Li,
    useCacheRefresh: n1
  };
  v1.useEffectEvent = r0;
  function Pi(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : B({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var lc = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = ht(), n = Bu(a);
      n.payload = t, u != null && (n.callback = u), t = Yu(l, n, a), t !== null && (Kl(t, l, a), Ja(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = ht(), n = Bu(a);
      n.tag = 1, n.payload = t, u != null && (n.callback = u), t = Yu(l, n, a), t !== null && (Kl(t, l, a), Ja(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = ht(), a = Bu(u);
      a.tag = 2, t != null && (a.callback = t), t = Yu(l, a, u), t !== null && (Kl(t, l, u), Ja(t, l, u));
    }
  };
  function y1(l, t, u, a, n, e, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, e, i) : t.prototype && t.prototype.isPureReactComponent ? !Ga(u, a) || !Ga(n, e) : !0;
  }
  function m1(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && lc.enqueueReplaceState(t, t.state, null);
  }
  function Gu(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t) a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = B({}, u));
      for (var n in l) u[n] === void 0 && (u[n] = l[n]);
    }
    return u;
  }
  function sm(l) {
    Yn(l);
  }
  function Sm(l) {
    console.error(l);
  }
  function om(l) {
    Yn(l);
  }
  function ne(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function d1(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function tc(l, t, u) {
    return u = Bu(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      ne(l, t);
    }, u;
  }
  function h1(l) {
    return l = Bu(l), l.tag = 3, l;
  }
  function s1(l, t, u, a) {
    var n = u.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var e = a.value;
      l.payload = function() {
        return n(e);
      }, l.callback = function() {
        d1(t, u, a);
      };
    }
    var i = u.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      d1(t, u, a), typeof n != "function" && (fu === null ? fu = /* @__PURE__ */ new Set([this]) : fu.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, { componentStack: c !== null ? c : "" });
    });
  }
  function gm(l, t, u, a, n) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && aa(t, u, n, !0), u = tt.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return dt === null ? oe() : u.alternate === null && Sl === 0 && (Sl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = n, a === Jn ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Dc(l, a, n)), !1;
          case 22:
            return u.flags |= 65536, a === Jn ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Dc(l, a, n)), !1;
        }
        throw Error(S(435, u.tag));
      }
      return Dc(l, a, n), oe(), !1;
    }
    if (r) return t = tt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== Ei && (l = Error(S(422), { cause: a }), Za(ft(l, u)))) : (a !== Ei && (t = Error(S(423), { cause: a }), Za(ft(t, u))), l = l.current.alternate, l.flags |= 65536, n &= -n, l.lanes |= n, a = ft(a, u), n = tc(l.stateNode, a, n), Ci(l, n), Sl !== 4 && (Sl = 2)), !1;
    var e = Error(S(520), { cause: a });
    if (e = ft(e, u), en === null ? en = [e] : en.push(e), Sl !== 4 && (Sl = 2), t === null) return !0;
    a = ft(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = n & -n, u.lanes |= l, l = tc(u.stateNode, a, l), Ci(u, l), !1;
        case 1:
          if (t = u.type, e = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || e !== null && typeof e.componentDidCatch == "function" && (fu === null || !fu.has(e)))) return u.flags |= 65536, n &= -n, u.lanes |= n, n = h1(n), s1(n, l, u, a), Ci(u, n), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var uc = Error(S(461)), Al = !1;
  function Nl(l, t, u, a) {
    t.child = l === null ? A0(t, null, u, a) : qu(t, l.child, u, a);
  }
  function S1(l, t, u, a, n) {
    u = u.render;
    var e = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a) c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return pu(t), a = Gi(l, t, u, i, e, n), c = Qi(), l !== null && !Al ? (Xi(l, t, n), Gt(l, t, n)) : (r && c && bi(t), t.flags |= 1, Nl(l, t, a, n), t.child);
  }
  function o1(l, t, u, a, n) {
    if (l === null) {
      var e = u.type;
      return typeof e == "function" && !Si(e) && e.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = e, g1(l, t, e, a, n)) : (l = Xn(u.type, null, a, t, t.mode, n), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (e = l.child, !yc(l, n)) {
      var i = e.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ga, u(i, a) && l.ref === t.ref) return Gt(l, t, n);
    }
    return t.flags |= 1, l = Ct(e, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function g1(l, t, u, a, n) {
    if (l !== null) {
      var e = l.memoizedProps;
      if (Ga(e, a) && l.ref === t.ref) if (Al = !1, t.pendingProps = a = e, yc(l, n)) (l.flags & 131072) !== 0 && (Al = !0);
      else return t.lanes = l.lanes, Gt(l, t, n);
    }
    return ac(l, t, u, a, n);
  }
  function b1(l, t, u, a) {
    var n = a.children, e = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (e = e !== null ? e.baseLanes | u : u, l !== null) {
          for (a = t.child = l.child, n = 0; a !== null; ) n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~e;
        } else a = 0, t.child = null;
        return z1(l, t, e, u, a);
      }
      if ((u & 536870912) !== 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, l !== null && Kn(t, e !== null ? e.cachePool : null), e !== null ? O0(t, e) : qi(), M0(t);
      else return a = t.lanes = 536870912, z1(l, t, e !== null ? e.baseLanes | u : u, u, a);
    } else e !== null ? (Kn(t, e.cachePool), O0(t, e), nu(t), t.memoizedState = null) : (l !== null && Kn(t, null), qi(), nu(t));
    return Nl(l, t, n, u), t.child;
  }
  function Ia(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function z1(l, t, u, a, n) {
    var e = Ui();
    return e = e === null ? null : {
      parent: zl._currentValue,
      pool: e
    }, t.memoizedState = {
      baseLanes: u,
      cachePool: e
    }, l !== null && Kn(t, null), qi(), M0(t), l !== null && aa(l, t, a, !0), t.childLanes = n, null;
  }
  function ee(l, t) {
    return t = ce({
      mode: t.mode,
      children: t.children
    }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function E1(l, t, u) {
    return qu(t, l.child, null, u), l = ee(t, t.pendingProps), l.flags |= 2, ut(t), t.memoizedState = null, l;
  }
  function bm(l, t, u) {
    var a = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (r) {
        if (a.mode === "hidden") return l = ee(t, a), t.lanes = 536870912, Ia(null, l);
        if (Yi(t), (l = ml) ? (l = qv(l, mt), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? {
            id: Ot,
            overflow: Mt
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = i0(l), u.return = t, t.child = u, Hl = t, ml = null)) : l = null, l === null) throw lu(t);
        return t.lanes = 536870912, null;
      }
      return ee(t, a);
    }
    var e = l.memoizedState;
    if (e !== null) {
      var i = e.dehydrated;
      if (Yi(t), n) if (t.flags & 256) t.flags &= -257, t = E1(l, t, u);
      else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
      else throw Error(S(558));
      else if (Al || aa(l, t, u, !1), n = (u & l.childLanes) !== 0, Al || n) {
        if (a = cl, a !== null && (i = df(a, u), i !== 0 && i !== e.retryLane)) throw e.retryLane = i, Mu(l, i), Kl(a, l, i), uc;
        oe(), t = E1(l, t, u);
      } else l = e.treeContext, ml = st(i.nextSibling), Hl = t, r = !0, Pt = null, mt = !1, l !== null && v0(t, l), t = ee(t, a), t.flags |= 4096;
      return t;
    }
    return l = Ct(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function ie(l, t) {
    var u = t.ref;
    if (u === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object") throw Error(S(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function ac(l, t, u, a, n) {
    return pu(t), u = Gi(l, t, u, a, void 0, n), a = Qi(), l !== null && !Al ? (Xi(l, t, n), Gt(l, t, n)) : (r && a && bi(t), t.flags |= 1, Nl(l, t, u, n), t.child);
  }
  function A1(l, t, u, a, n, e) {
    return pu(t), t.updateQueue = null, u = U0(t, a, u, n), D0(l), a = Qi(), l !== null && !Al ? (Xi(l, t, e), Gt(l, t, e)) : (r && a && bi(t), t.flags |= 1, Nl(l, t, u, e), t.child);
  }
  function T1(l, t, u, a, n) {
    if (pu(t), t.stateNode === null) {
      var e = Pu, i = u.contextType;
      typeof i == "object" && i !== null && (e = pl(i)), e = new u(a, e), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = lc, t.stateNode = e, e._reactInternals = t, e = t.stateNode, e.props = a, e.state = t.memoizedState, e.refs = {}, pi(t), i = u.contextType, e.context = typeof i == "object" && i !== null ? pl(i) : Pu, e.state = t.memoizedState, i = u.getDerivedStateFromProps, typeof i == "function" && (Pi(t, u, i, a), e.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof e.getSnapshotBeforeUpdate == "function" || typeof e.UNSAFE_componentWillMount != "function" && typeof e.componentWillMount != "function" || (i = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), i !== e.state && lc.enqueueReplaceState(e, e.state, null), wa(t, a, e, n), ra(), e.state = t.memoizedState), typeof e.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      e = t.stateNode;
      var c = t.memoizedProps, f = Gu(u, c);
      e.props = f;
      var s = e.context, b = u.contextType;
      i = Pu, typeof b == "object" && b !== null && (i = pl(b));
      var E = u.getDerivedStateFromProps;
      b = typeof E == "function" || typeof e.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, b || typeof e.UNSAFE_componentWillReceiveProps != "function" && typeof e.componentWillReceiveProps != "function" || (c || s !== i) && m1(t, e, a, i), uu = !1;
      var o = t.memoizedState;
      e.state = o, wa(t, a, e, n), ra(), s = t.memoizedState, c || o !== s || uu ? (typeof E == "function" && (Pi(t, u, E, a), s = t.memoizedState), (f = uu || y1(t, u, f, a, o, s, i)) ? (b || typeof e.UNSAFE_componentWillMount != "function" && typeof e.componentWillMount != "function" || (typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount()), typeof e.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof e.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = s), e.props = a, e.state = s, e.context = i, a = f) : (typeof e.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      e = t.stateNode, Ni(l, t), i = t.memoizedProps, b = Gu(u, i), e.props = b, E = t.pendingProps, o = e.context, s = u.contextType, f = Pu, typeof s == "object" && s !== null && (f = pl(s)), c = u.getDerivedStateFromProps, (s = typeof c == "function" || typeof e.getSnapshotBeforeUpdate == "function") || typeof e.UNSAFE_componentWillReceiveProps != "function" && typeof e.componentWillReceiveProps != "function" || (i !== E || o !== f) && m1(t, e, a, f), uu = !1, o = t.memoizedState, e.state = o, wa(t, a, e, n), ra();
      var g = t.memoizedState;
      i !== E || o !== g || uu || l !== null && l.dependencies !== null && Ln(l.dependencies) ? (typeof c == "function" && (Pi(t, u, c, a), g = t.memoizedState), (b = uu || y1(t, u, b, a, o, g, f) || l !== null && l.dependencies !== null && Ln(l.dependencies)) ? (s || typeof e.UNSAFE_componentWillUpdate != "function" && typeof e.componentWillUpdate != "function" || (typeof e.componentWillUpdate == "function" && e.componentWillUpdate(a, g, f), typeof e.UNSAFE_componentWillUpdate == "function" && e.UNSAFE_componentWillUpdate(a, g, f)), typeof e.componentDidUpdate == "function" && (t.flags |= 4), typeof e.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof e.componentDidUpdate != "function" || i === l.memoizedProps && o === l.memoizedState || (t.flags |= 4), typeof e.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && o === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = g), e.props = a, e.state = g, e.context = f, a = b) : (typeof e.componentDidUpdate != "function" || i === l.memoizedProps && o === l.memoizedState || (t.flags |= 4), typeof e.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && o === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return e = a, ie(l, t), a = (t.flags & 128) !== 0, e || a ? (e = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : e.render(), t.flags |= 1, l !== null && a ? (t.child = qu(t, l.child, null, n), t.child = qu(t, null, u, n)) : Nl(l, t, u, n), t.memoizedState = e.state, l = t.child) : l = Gt(l, t, n), l;
  }
  function _1(l, t, u, a) {
    return Uu(), t.flags |= 256, Nl(l, t, u, a), t.child;
  }
  var nc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ec(l) {
    return {
      baseLanes: l,
      cachePool: S0()
    };
  }
  function ic(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= nt), l;
  }
  function O1(l, t, u) {
    var a = t.pendingProps, n = !1, e = (t.flags & 128) !== 0, i;
    if ((i = e) || (i = l !== null && l.memoizedState === null ? !1 : (gl.current & 2) !== 0), i && (n = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (r) {
        if (n ? au(t) : nu(t), (l = ml) ? (l = qv(l, mt), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? {
            id: Ot,
            overflow: Mt
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = i0(l), u.return = t, t.child = u, Hl = t, ml = null)) : l = null, l === null) throw lu(t);
        return Lc(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, n ? (nu(t), n = t.mode, c = ce({
        mode: "hidden",
        children: c
      }, n), a = Du(a, n, u, null), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = ec(u), a.childLanes = ic(l, i, u), t.memoizedState = nc, Ia(null, a)) : (au(t), cc(t, c));
    }
    var f = l.memoizedState;
    if (f !== null && (c = f.dehydrated, c !== null)) {
      if (e) t.flags & 256 ? (au(t), t.flags &= -257, t = fc(l, t, u)) : t.memoizedState !== null ? (nu(t), t.child = l.child, t.flags |= 128, t = null) : (nu(t), c = a.fallback, n = t.mode, a = ce({
        mode: "visible",
        children: a.children
      }, n), c = Du(c, n, u, null), c.flags |= 2, a.return = t, c.return = t, a.sibling = c, t.child = a, qu(t, l.child, null, u), a = t.child, a.memoizedState = ec(u), a.childLanes = ic(l, i, u), t.memoizedState = nc, t = Ia(null, a));
      else if (au(t), Lc(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var s = i.dgst;
        i = s, a = Error(S(419)), a.stack = "", a.digest = i, Za({
          value: a,
          source: null,
          stack: null
        }), t = fc(l, t, u);
      } else if (Al || aa(l, t, u, !1), i = (u & l.childLanes) !== 0, Al || i) {
        if (i = cl, i !== null && (a = df(i, u), a !== 0 && a !== f.retryLane)) throw f.retryLane = a, Mu(l, a), Kl(i, l, a), uc;
        Zc(c) || oe(), t = fc(l, t, u);
      } else Zc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, ml = st(c.nextSibling), Hl = t, r = !0, Pt = null, mt = !1, l !== null && v0(t, l), t = cc(t, a.children), t.flags |= 4096);
      return t;
    }
    return n ? (nu(t), c = a.fallback, n = t.mode, f = l.child, s = f.sibling, a = Ct(f, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = f.subtreeFlags & 65011712, s !== null ? c = Ct(s, c) : (c = Du(c, n, u, null), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, Ia(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = ec(u) : (n = c.cachePool, n !== null ? (f = zl._currentValue, n = n.parent !== f ? {
      parent: f,
      pool: f
    } : n) : n = S0(), c = {
      baseLanes: c.baseLanes | u,
      cachePool: n
    }), a.memoizedState = c, a.childLanes = ic(l, i, u), t.memoizedState = nc, Ia(l.child, a)) : (au(t), u = l.child, l = u.sibling, u = Ct(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function cc(l, t) {
    return t = ce({
      mode: "visible",
      children: t
    }, l.mode), t.return = l, l.child = t;
  }
  function ce(l, t) {
    return l = lt(22, l, null, t), l.lanes = 0, l;
  }
  function fc(l, t, u) {
    return qu(t, l.child, null, u), l = cc(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
  }
  function M1(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), _i(l.return, t, u);
  }
  function vc(l, t, u, a, n, e) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: n,
      treeForkCount: e
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = u, i.tailMode = n, i.treeForkCount = e);
  }
  function D1(l, t, u) {
    var a = t.pendingProps, n = a.revealOrder, e = a.tail;
    a = a.children;
    var i = gl.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, O(gl, i), Nl(l, t, a, u), a = r ? Xa : 0, !c && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
      if (l.tag === 13) l.memoizedState !== null && M1(l, u, t);
      else if (l.tag === 19) M1(l, u, t);
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
        for (u = t.child, n = null; u !== null; ) l = u.alternate, l !== null && $n(l) === null && (n = u), u = u.sibling;
        u = n, u === null ? (n = t.child, t.child = null) : (n = u.sibling, u.sibling = null), vc(t, !1, n, u, e, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, n = t.child, t.child = null; n !== null; ) {
          if (l = n.alternate, l !== null && $n(l) === null) {
            t.child = n;
            break;
          }
          l = n.sibling, n.sibling = u, u = n, n = l;
        }
        vc(t, !0, u, null, e, a);
        break;
      case "together":
        vc(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Gt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), cu |= t.lanes, (u & t.childLanes) === 0) if (l !== null) {
      if (aa(l, t, u, !1), (u & t.childLanes) === 0) return null;
    } else return null;
    if (l !== null && t.child !== l.child) throw Error(S(153));
    if (t.child !== null) {
      for (l = t.child, u = Ct(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; ) l = l.sibling, u = u.sibling = Ct(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function yc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ln(l)));
  }
  function zm(l, t, u) {
    switch (t.tag) {
      case 3:
        ql(t, t.stateNode.containerInfo), tu(t, zl, l.memoizedState.cache), Uu();
        break;
      case 27:
      case 5:
        Oa(t);
        break;
      case 4:
        ql(t, t.stateNode.containerInfo);
        break;
      case 10:
        tu(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, Yi(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (au(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? O1(l, t, u) : (au(t), l = Gt(l, t, u), l !== null ? l.sibling : null);
        au(t);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (a = (u & t.childLanes) !== 0, a || (aa(l, t, u, !1), a = (u & t.childLanes) !== 0), n) {
          if (a) return D1(l, t, u);
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), O(gl, gl.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, b1(l, t, u, t.pendingProps);
      case 24:
        tu(t, zl, l.memoizedState.cache);
    }
    return Gt(l, t, u);
  }
  function U1(l, t, u) {
    if (l !== null) if (l.memoizedProps !== t.pendingProps) Al = !0;
    else {
      if (!yc(l, u) && (t.flags & 128) === 0) return Al = !1, zm(l, t, u);
      Al = (l.flags & 131072) !== 0;
    }
    else Al = !1, r && (t.flags & 1048576) !== 0 && f0(t, Xa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = Cu(t.elementType), t.type = l, typeof l == "function") Si(l) ? (a = Gu(l, a), t.tag = 1, t = T1(null, t, l, a, u)) : (t.tag = 0, t = ac(null, t, l, a, u));
          else {
            if (l != null) {
              var n = l.$$typeof;
              if (n === gt) {
                t.tag = 11, t = S1(null, t, l, a, u);
                break l;
              } else if (n === W) {
                t.tag = 14, t = o1(null, t, l, a, u);
                break l;
              }
            }
            throw t = bt(l) || l, Error(S(306, t, ""));
          }
        }
        return t;
      case 0:
        return ac(l, t, t.type, t.pendingProps, u);
      case 1:
        return a = t.type, n = Gu(a, t.pendingProps), T1(l, t, a, n, u);
      case 3:
        l: {
          if (ql(t, t.stateNode.containerInfo), l === null) throw Error(S(387));
          a = t.pendingProps;
          var e = t.memoizedState;
          n = e.element, Ni(l, t), wa(t, a, null, u);
          var i = t.memoizedState;
          if (a = i.cache, tu(t, zl, a), a !== e.cache && Oi(t, [zl], u, !0), ra(), a = i.element, e.isDehydrated) if (e = {
            element: a,
            isDehydrated: !1,
            cache: i.cache
          }, t.updateQueue.baseState = e, t.memoizedState = e, t.flags & 256) {
            t = _1(l, t, a, u);
            break l;
          } else if (a !== n) {
            n = ft(Error(S(424)), t), Za(n), t = _1(l, t, a, u);
            break l;
          } else
            for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, ml = st(l.firstChild), Hl = t, r = !0, Pt = null, mt = !0, u = A0(t, null, a, u), t.child = u; u; ) u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Uu(), a === n) {
              t = Gt(l, t, u);
              break l;
            }
            Nl(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return ie(l, t), l === null ? (u = Xv(t.type, null, t.pendingProps, null)) ? t.memoizedState = u : r || (u = t.type, l = t.pendingProps, a = _e(L.current).createElement(u), a[Ul] = t, a[Gl] = l, Cl(a, u, l), Ml(a), t.stateNode = a) : t.memoizedState = Xv(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
      case 27:
        return Oa(t), l === null && r && (a = t.stateNode = jv(t.type, t.pendingProps, L.current), Hl = t, mt = !0, n = ml, du(t.type) ? (Vc = n, ml = st(a.firstChild)) : ml = n), Nl(l, t, t.pendingProps.children, u), ie(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && r && ((n = a = ml) && (a = wm(a, t.type, t.pendingProps, mt), a !== null ? (t.stateNode = a, Hl = t, ml = st(a.firstChild), mt = !1, n = !0) : n = !1), n || lu(t)), Oa(t), n = t.type, e = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = e.children, Gc(n, e) ? a = null : i !== null && Gc(n, i) && (t.flags |= 32), t.memoizedState !== null && (n = Gi(l, t, cm, null, null, u), sn._currentValue = n), ie(l, t), Nl(l, t, a, u), t.child;
      case 6:
        return l === null && r && ((l = u = ml) && (u = Wm(u, t.pendingProps, mt), u !== null ? (t.stateNode = u, Hl = t, ml = null, l = !0) : l = !1), l || lu(t)), null;
      case 13:
        return O1(l, t, u);
      case 4:
        return ql(t, t.stateNode.containerInfo), a = t.pendingProps, l === null ? t.child = qu(t, null, a, u) : Nl(l, t, a, u), t.child;
      case 11:
        return S1(l, t, t.type, t.pendingProps, u);
      case 7:
        return Nl(l, t, t.pendingProps, u), t.child;
      case 8:
        return Nl(l, t, t.pendingProps.children, u), t.child;
      case 12:
        return Nl(l, t, t.pendingProps.children, u), t.child;
      case 10:
        return a = t.pendingProps, tu(t, t.type, a.value), Nl(l, t, a.children, u), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, pu(t), n = pl(n), a = a(n), t.flags |= 1, Nl(l, t, a, u), t.child;
      case 14:
        return o1(l, t, t.type, t.pendingProps, u);
      case 15:
        return g1(l, t, t.type, t.pendingProps, u);
      case 19:
        return D1(l, t, u);
      case 31:
        return bm(l, t, u);
      case 22:
        return b1(l, t, u, t.pendingProps);
      case 24:
        return pu(t), a = pl(zl), l === null ? (n = Ui(), n === null && (n = cl, e = Mi(), n.pooledCache = e, e.refCount++, e !== null && (n.pooledCacheLanes |= u), n = e), t.memoizedState = {
          parent: a,
          cache: n
        }, pi(t), tu(t, zl, n)) : ((l.lanes & u) !== 0 && (Ni(l, t), wa(t, null, null, u), ra()), n = l.memoizedState, e = t.memoizedState, n.parent !== a ? (n = {
          parent: a,
          cache: a
        }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), tu(t, zl, a)) : (a = e.cache, tu(t, zl, a), a !== n.cache && Oi(t, [zl], u, !0))), Nl(l, t, t.pendingProps.children, u), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(S(156, t.tag));
  }
  function Qt(l) {
    l.flags |= 4;
  }
  function mc(l, t, u, a, n) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (n & 335544128) === n) if (l.stateNode.complete) l.flags |= 8192;
      else if (lv()) l.flags |= 8192;
      else throw Ru = Jn, Hi;
    } else l.flags &= -16777217;
  }
  function H1(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (l.flags |= 16777216, !xv(t)) if (lv()) l.flags |= 8192;
    else throw Ru = Jn, Hi;
  }
  function fe(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? vf() : 536870912, l.lanes |= t, Sa |= t);
  }
  function Pa(l, t) {
    if (!r) switch (l.tailMode) {
      case "hidden":
        t = l.tail;
        for (var u = null; t !== null; ) t.alternate !== null && (u = t), t = t.sibling;
        u === null ? l.tail = null : u.sibling = null;
        break;
      case "collapsed":
        u = l.tail;
        for (var a = null; u !== null; ) u.alternate !== null && (a = u), u = u.sibling;
        a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
    }
  }
  function dl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t) for (var n = l.child; n !== null; ) u |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = l, n = n.sibling;
    else for (n = l.child; n !== null; ) u |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = l, n = n.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function Em(l, t, u) {
    var a = t.pendingProps;
    switch (zi(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return dl(t), null;
      case 1:
        return dl(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Bt(zl), ol(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (ua(t) ? Qt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ai())), dl(t), null;
      case 26:
        var n = t.type, e = t.memoizedState;
        return l === null ? (Qt(t), e !== null ? (dl(t), H1(t, e)) : (dl(t), mc(t, n, null, a, u))) : e ? e !== l.memoizedState ? (Qt(t), dl(t), H1(t, e)) : (dl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Qt(t), dl(t), mc(t, n, l, a, u)), null;
      case 27:
        if (bn(t), u = L.current, n = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Qt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(S(166));
            return dl(t), null;
          }
          l = N.current, ua(t) ? y0(t, l) : (l = jv(n, a, u), t.stateNode = l, Qt(t));
        }
        return dl(t), null;
      case 5:
        if (bn(t), n = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && Qt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(S(166));
            return dl(t), null;
          }
          if (e = N.current, ua(t)) y0(t, e);
          else {
            var i = _e(L.current);
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
                    e = typeof a.is == "string" ? i.createElement("select", { is: a.is }) : i.createElement("select"), a.multiple ? e.multiple = !0 : a.size && (e.size = a.size);
                    break;
                  default:
                    e = typeof a.is == "string" ? i.createElement(n, { is: a.is }) : i.createElement(n);
                }
            }
            e[Ul] = t, e[Gl] = a;
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
            l: switch (Cl(e, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Qt(t);
          }
        }
        return dl(t), mc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, u), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== a && Qt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(S(166));
          if (l = L.current, ua(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, n = Hl, n !== null) switch (n.tag) {
              case 27:
              case 5:
                a = n.memoizedProps;
            }
            l[Ul] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || Mv(l.nodeValue, u)), l || lu(t, !0);
          } else l = _e(l).createTextNode(a), l[Ul] = t, t.stateNode = l;
        }
        return dl(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = ua(t), u !== null) {
            if (l === null) {
              if (!a) throw Error(S(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(S(557));
              l[Ul] = t;
            } else Uu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            dl(t), l = !1;
          } else u = Ai(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return t.flags & 256 ? (ut(t), t) : (ut(t), null);
          if ((t.flags & 128) !== 0) throw Error(S(558));
        }
        return dl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (n = ua(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!n) throw Error(S(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(S(317));
              n[Ul] = t;
            } else Uu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            dl(t), n = !1;
          } else n = Ai(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (ut(t), t) : (ut(t), null);
        }
        return ut(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = a !== null, l = l !== null && l.memoizedState !== null, u && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), e = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (e = a.memoizedState.cachePool.pool), e !== n && (a.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), fe(t, t.updateQueue), dl(t), null);
      case 4:
        return ol(), l === null && Av(t.stateNode.containerInfo), dl(t), null;
      case 10:
        return Bt(t.type), dl(t), null;
      case 19:
        if (A(gl), a = t.memoizedState, a === null) return dl(t), null;
        if (n = (t.flags & 128) !== 0, e = a.rendering, e === null) if (n) Pa(a, !1);
        else {
          if (Sl !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
            if (e = $n(l), e !== null) {
              for (t.flags |= 128, Pa(a, !1), l = e.updateQueue, t.updateQueue = l, fe(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; ) e0(u, l), u = u.sibling;
              return O(gl, gl.current & 1 | 2), r && Rt(t, a.treeForkCount), t.child;
            }
            l = l.sibling;
          }
          a.tail !== null && Fl() > he && (t.flags |= 128, n = !0, Pa(a, !1), t.lanes = 4194304);
        }
        else {
          if (!n) if (l = $n(e), l !== null) {
            if (t.flags |= 128, n = !0, l = l.updateQueue, t.updateQueue = l, fe(t, l), Pa(a, !0), a.tail === null && a.tailMode === "hidden" && !e.alternate && !r) return dl(t), null;
          } else 2 * Fl() - a.renderingStartTime > he && u !== 536870912 && (t.flags |= 128, n = !0, Pa(a, !1), t.lanes = 4194304);
          a.isBackwards ? (e.sibling = t.child, t.child = e) : (l = a.last, l !== null ? l.sibling = e : t.child = e, a.last = e);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = Fl(), l.sibling = null, u = gl.current, O(gl, n ? u & 1 | 2 : u & 1), r && Rt(t, a.treeForkCount), l) : (dl(t), null);
      case 22:
      case 23:
        return ut(t), Bi(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dl(t), u = t.updateQueue, u !== null && fe(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && A(Nu), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Bt(zl), dl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(S(156, t.tag));
  }
  function Am(l, t) {
    switch (zi(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Bt(zl), ol(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return bn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (ut(t), t.alternate === null) throw Error(S(340));
          Uu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (ut(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null) throw Error(S(340));
          Uu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return A(gl), null;
      case 4:
        return ol(), null;
      case 10:
        return Bt(t.type), null;
      case 22:
      case 23:
        return ut(t), Bi(), l !== null && A(Nu), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Bt(zl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function p1(l, t) {
    switch (zi(t), t.tag) {
      case 3:
        Bt(zl), ol();
        break;
      case 26:
      case 27:
      case 5:
        bn(t);
        break;
      case 4:
        ol();
        break;
      case 31:
        t.memoizedState !== null && ut(t);
        break;
      case 13:
        ut(t);
        break;
      case 19:
        A(gl);
        break;
      case 10:
        Bt(t.type);
        break;
      case 22:
      case 23:
        ut(t), Bi(), l !== null && A(Nu);
        break;
      case 24:
        Bt(zl);
    }
  }
  function ln(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var e = u.create, i = u.inst;
            a = e(), i.destroy = a;
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (c) {
      al(t, t.return, c);
    }
  }
  function eu(l, t, u) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var e = n.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, n = t;
              var f = u, s = c;
              try {
                s();
              } catch (b) {
                al(n, f, b);
              }
            }
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (b) {
      al(t, t.return, b);
    }
  }
  function N1(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        _0(t, u);
      } catch (a) {
        al(l, l.return, a);
      }
    }
  }
  function C1(l, t, u) {
    u.props = Gu(l.type, l.memoizedProps), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      al(l, t, a);
    }
  }
  function tn(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (n) {
      al(l, t, n);
    }
  }
  function Dt(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null) if (typeof a == "function") try {
      a();
    } catch (n) {
      al(l, t, n);
    } finally {
      l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
    }
    else if (typeof u == "function") try {
      u(null);
    } catch (n) {
      al(l, t, n);
    }
    else u.current = null;
  }
  function R1(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (n) {
      al(l, l.return, n);
    }
  }
  function dc(l, t, u) {
    try {
      var a = l.stateNode;
      Lm(a, l.type, u, t), a[Gl] = t;
    } catch (n) {
      al(l, l.return, n);
    }
  }
  function q1(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && du(l.type) || l.tag === 4;
  }
  function hc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || q1(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && du(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function sc(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6) l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = pt));
    else if (a !== 4 && (a === 27 && du(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null)) for (sc(l, t, u), l = l.sibling; l !== null; ) sc(l, t, u), l = l.sibling;
  }
  function ve(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6) l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && du(l.type) && (u = l.stateNode), l = l.child, l !== null)) for (ve(l, t, u), l = l.sibling; l !== null; ) ve(l, t, u), l = l.sibling;
  }
  function B1(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
      Cl(t, a, u), t[Ul] = l, t[Gl] = u;
    } catch (e) {
      al(l, l.return, e);
    }
  }
  var Xt = !1, Tl = !1, Sc = !1, Y1 = typeof WeakSet == "function" ? WeakSet : Set, Dl = null;
  function Tm(l, t) {
    if (l = l.containerInfo, Yc = Ne, l = Ff(l), fi(l)) {
      if ("selectionStart" in l) var u = {
        start: l.selectionStart,
        end: l.selectionEnd
      };
      else l: {
        u = (u = l.ownerDocument) && u.defaultView || window;
        var a = u.getSelection && u.getSelection();
        if (a && a.rangeCount !== 0) {
          u = a.anchorNode;
          var n = a.anchorOffset, e = a.focusNode;
          a = a.focusOffset;
          try {
            u.nodeType, e.nodeType;
          } catch {
            u = null;
            break l;
          }
          var i = 0, c = -1, f = -1, s = 0, b = 0, E = l, o = null;
          t: for (; ; ) {
            for (var g; E !== u || n !== 0 && E.nodeType !== 3 || (c = i + n), E !== e || a !== 0 && E.nodeType !== 3 || (f = i + a), E.nodeType === 3 && (i += E.nodeValue.length), (g = E.firstChild) !== null; )
              o = E, E = g;
            for (; ; ) {
              if (E === l) break t;
              if (o === u && ++s === n && (c = i), o === e && ++b === a && (f = i), (g = E.nextSibling) !== null) break;
              E = o, o = E.parentNode;
            }
            E = g;
          }
          u = c === -1 || f === -1 ? null : {
            start: c,
            end: f
          };
        } else u = null;
      }
      u = u || {
        start: 0,
        end: 0
      };
    } else u = null;
    for (jc = {
      focusedElem: l,
      selectionRange: u
    }, Ne = !1, Dl = t; Dl !== null; ) if (t = Dl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null) l.return = t, Dl = l;
    else for (; Dl !== null; ) {
      switch (t = Dl, e = t.alternate, l = t.flags, t.tag) {
        case 0:
          if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null)) for (u = 0; u < l.length; u++) n = l[u], n.ref.impl = n.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((l & 1024) !== 0 && e !== null) {
            l = void 0, u = t, n = e.memoizedProps, e = e.memoizedState, a = u.stateNode;
            try {
              var H = Gu(u.type, n);
              l = a.getSnapshotBeforeUpdate(H, e), a.__reactInternalSnapshotBeforeUpdate = l;
            } catch (Y) {
              al(u, u.return, Y);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (l = t.stateNode.containerInfo, u = l.nodeType, u === 9) Xc(l);
            else if (u === 1) switch (l.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Xc(l);
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
          if ((l & 1024) !== 0) throw Error(S(163));
      }
      if (l = t.sibling, l !== null) {
        l.return = t.return, Dl = l;
        break;
      }
      Dl = t.return;
    }
  }
  function j1(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Lt(l, u), a & 4 && ln(5, u);
        break;
      case 1:
        if (Lt(l, u), a & 4) if (l = u.stateNode, t === null) try {
          l.componentDidMount();
        } catch (i) {
          al(u, u.return, i);
        }
        else {
          var n = Gu(u.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            l.componentDidUpdate(n, t, l.__reactInternalSnapshotBeforeUpdate);
          } catch (i) {
            al(u, u.return, i);
          }
        }
        a & 64 && N1(u), a & 512 && tn(u, u.return);
        break;
      case 3:
        if (Lt(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null) switch (u.child.tag) {
            case 27:
            case 5:
              t = u.child.stateNode;
              break;
            case 1:
              t = u.child.stateNode;
          }
          try {
            _0(l, t);
          } catch (i) {
            al(u, u.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && B1(u);
      case 26:
      case 5:
        Lt(l, u), t === null && a & 4 && R1(u), a & 512 && tn(u, u.return);
        break;
      case 12:
        Lt(l, u);
        break;
      case 31:
        Lt(l, u), a & 4 && X1(l, u);
        break;
      case 13:
        Lt(l, u), a & 4 && Z1(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Cm.bind(null, u), $m(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Xt, !a) {
          t = t !== null && t.memoizedState !== null || Tl, n = Xt;
          var e = Tl;
          Xt = a, (Tl = t) && !e ? Vt(l, u, (u.subtreeFlags & 8772) !== 0) : Lt(l, u), Xt = n, Tl = e;
        }
        break;
      case 30:
        break;
      default:
        Lt(l, u);
    }
  }
  function G1(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, G1(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Je(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var hl = null, Xl = !1;
  function Zt(l, t, u) {
    for (u = u.child; u !== null; ) Q1(l, t, u), u = u.sibling;
  }
  function Q1(l, t, u) {
    if (kl && typeof kl.onCommitFiberUnmount == "function") try {
      kl.onCommitFiberUnmount(Ma, u);
    } catch {
    }
    switch (u.tag) {
      case 26:
        Tl || Dt(u, t), Zt(l, t, u), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Tl || Dt(u, t);
        var a = hl, n = Xl;
        du(u.type) && (hl = u.stateNode, Xl = !1), Zt(l, t, u), mn(u.stateNode), hl = a, Xl = n;
        break;
      case 5:
        Tl || Dt(u, t);
      case 6:
        if (a = hl, n = Xl, hl = null, Zt(l, t, u), hl = a, Xl = n, hl !== null) if (Xl) try {
          (hl.nodeType === 9 ? hl.body : hl.nodeName === "HTML" ? hl.ownerDocument.body : hl).removeChild(u.stateNode);
        } catch (e) {
          al(u, t, e);
        }
        else try {
          hl.removeChild(u.stateNode);
        } catch (e) {
          al(u, t, e);
        }
        break;
      case 18:
        hl !== null && (Xl ? (l = hl, Cv(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, u.stateNode), _a(l)) : Cv(hl, u.stateNode));
        break;
      case 4:
        a = hl, n = Xl, hl = u.stateNode.containerInfo, Xl = !0, Zt(l, t, u), hl = a, Xl = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        eu(2, u, t), Tl || eu(4, u, t), Zt(l, t, u);
        break;
      case 1:
        Tl || (Dt(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && C1(u, t, a)), Zt(l, t, u);
        break;
      case 21:
        Zt(l, t, u);
        break;
      case 22:
        Tl = (a = Tl) || u.memoizedState !== null, Zt(l, t, u), Tl = a;
        break;
      default:
        Zt(l, t, u);
    }
  }
  function X1(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        _a(l);
      } catch (u) {
        al(t, t.return, u);
      }
    }
  }
  function Z1(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
      _a(l);
    } catch (u) {
      al(t, t.return, u);
    }
  }
  function _m(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Y1()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Y1()), t;
      default:
        throw Error(S(435, l.tag));
    }
  }
  function ye(l, t) {
    var u = _m(l);
    t.forEach(function(a) {
      if (!u.has(a)) {
        u.add(a);
        var n = Rm.bind(null, l, a);
        a.then(n, n);
      }
    });
  }
  function Zl(l, t) {
    var u = t.deletions;
    if (u !== null) for (var a = 0; a < u.length; a++) {
      var n = u[a], e = l, i = t, c = i;
      l: for (; c !== null; ) {
        switch (c.tag) {
          case 27:
            if (du(c.type)) {
              hl = c.stateNode, Xl = !1;
              break l;
            }
            break;
          case 5:
            hl = c.stateNode, Xl = !1;
            break l;
          case 3:
          case 4:
            hl = c.stateNode.containerInfo, Xl = !0;
            break l;
        }
        c = c.return;
      }
      if (hl === null) throw Error(S(160));
      Q1(e, i, n), hl = null, Xl = !1, e = n.alternate, e !== null && (e.return = null), n.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) L1(t, l), t = t.sibling;
  }
  var Et = null;
  function L1(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Zl(t, l), Ll(l), a & 4 && (eu(3, l, l.return), ln(3, l), eu(5, l, l.return));
        break;
      case 1:
        Zl(t, l), Ll(l), a & 512 && (Tl || u === null || Dt(u, u.return)), a & 64 && Xt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var n = Et;
        if (Zl(t, l), Ll(l), a & 512 && (Tl || u === null || Dt(u, u.return)), a & 4) {
          var e = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null) if (a === null) if (l.stateNode === null) {
            l: {
              a = l.type, u = l.memoizedProps, n = n.ownerDocument || n;
              t: switch (a) {
                case "title":
                  e = n.getElementsByTagName("title")[0], (!e || e[Ha] || e[Ul] || e.namespaceURI === "http://www.w3.org/2000/svg" || e.hasAttribute("itemprop")) && (e = n.createElement(a), n.head.insertBefore(e, n.querySelector("head > title"))), Cl(e, a, u), e[Ul] = l, Ml(e), a = e;
                  break l;
                case "link":
                  var i = Vv("link", "href", n).get(a + (u.href || ""));
                  if (i) {
                    for (var c = 0; c < i.length; c++) if (e = i[c], e.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && e.getAttribute("rel") === (u.rel == null ? null : u.rel) && e.getAttribute("title") === (u.title == null ? null : u.title) && e.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                      i.splice(c, 1);
                      break t;
                    }
                  }
                  e = n.createElement(a), Cl(e, a, u), n.head.appendChild(e);
                  break;
                case "meta":
                  if (i = Vv("meta", "content", n).get(a + (u.content || ""))) {
                    for (c = 0; c < i.length; c++) if (e = i[c], e.getAttribute("content") === (u.content == null ? null : "" + u.content) && e.getAttribute("name") === (u.name == null ? null : u.name) && e.getAttribute("property") === (u.property == null ? null : u.property) && e.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && e.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                      i.splice(c, 1);
                      break t;
                    }
                  }
                  e = n.createElement(a), Cl(e, a, u), n.head.appendChild(e);
                  break;
                default:
                  throw Error(S(468, a));
              }
              e[Ul] = l, Ml(e), a = e;
            }
            l.stateNode = a;
          } else Kv(n, l.type, l.stateNode);
          else l.stateNode = Lv(n, a, l.memoizedProps);
          else e !== a ? (e === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : e.count--, a === null ? Kv(n, l.type, l.stateNode) : Lv(n, a, l.memoizedProps)) : a === null && l.stateNode !== null && dc(l, l.memoizedProps, u.memoizedProps);
        }
        break;
      case 27:
        Zl(t, l), Ll(l), a & 512 && (Tl || u === null || Dt(u, u.return)), u !== null && a & 4 && dc(l, l.memoizedProps, u.memoizedProps);
        break;
      case 5:
        if (Zl(t, l), Ll(l), a & 512 && (Tl || u === null || Dt(u, u.return)), l.flags & 32) {
          n = l.stateNode;
          try {
            ru(n, "");
          } catch (H) {
            al(l, l.return, H);
          }
        }
        a & 4 && l.stateNode != null && (n = l.memoizedProps, dc(l, n, u !== null ? u.memoizedProps : n)), a & 1024 && (Sc = !0);
        break;
      case 6:
        if (Zl(t, l), Ll(l), a & 4) {
          if (l.stateNode === null) throw Error(S(162));
          a = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = a;
          } catch (H) {
            al(l, l.return, H);
          }
        }
        break;
      case 3:
        if (De = null, n = Et, Et = Oe(t.containerInfo), Zl(t, l), Et = n, Ll(l), a & 4 && u !== null && u.memoizedState.isDehydrated) try {
          _a(t.containerInfo);
        } catch (H) {
          al(l, l.return, H);
        }
        Sc && (Sc = !1, V1(l));
        break;
      case 4:
        a = Et, Et = Oe(l.stateNode.containerInfo), Zl(t, l), Ll(l), Et = a;
        break;
      case 12:
        Zl(t, l), Ll(l);
        break;
      case 31:
        Zl(t, l), Ll(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, ye(l, a)));
        break;
      case 13:
        Zl(t, l), Ll(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (de = Fl()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, ye(l, a)));
        break;
      case 22:
        n = l.memoizedState !== null;
        var f = u !== null && u.memoizedState !== null, s = Xt, b = Tl;
        if (Xt = s || n, Tl = b || f, Zl(t, l), Tl = b, Xt = s, Ll(l), a & 8192) l: for (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (u === null || f || Xt || Tl || Qu(l)), u = null, t = l; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (u === null) {
              f = u = t;
              try {
                if (e = f.stateNode, n) i = e.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                else {
                  c = f.stateNode;
                  var E = f.memoizedProps.style, o = E != null && E.hasOwnProperty("display") ? E.display : null;
                  c.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
                }
              } catch (H) {
                al(f, f.return, H);
              }
            }
          } else if (t.tag === 6) {
            if (u === null) {
              f = t;
              try {
                f.stateNode.nodeValue = n ? "" : f.memoizedProps;
              } catch (H) {
                al(f, f.return, H);
              }
            }
          } else if (t.tag === 18) {
            if (u === null) {
              f = t;
              try {
                var g = f.stateNode;
                n ? Rv(g, !0) : Rv(f.stateNode, !1);
              } catch (H) {
                al(f, f.return, H);
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === l) break l;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) break l;
            u === t && (u = null), t = t.return;
          }
          u === t && (u = null), t.sibling.return = t.return, t = t.sibling;
        }
        a & 4 && (a = l.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, ye(l, u))));
        break;
      case 19:
        Zl(t, l), Ll(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, ye(l, a)));
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
        for (var u, a = l.return; a !== null; ) {
          if (q1(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(S(160));
        switch (u.tag) {
          case 27:
            var n = u.stateNode;
            ve(l, hc(l), n);
            break;
          case 5:
            var e = u.stateNode;
            u.flags & 32 && (ru(e, ""), u.flags &= -33), ve(l, hc(l), e);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo;
            sc(l, hc(l), i);
            break;
          default:
            throw Error(S(161));
        }
      } catch (c) {
        al(l, l.return, c);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function V1(l) {
    if (l.subtreeFlags & 1024) for (l = l.child; l !== null; ) {
      var t = l;
      V1(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
    }
  }
  function Lt(l, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) j1(l, t.alternate, t), t = t.sibling;
  }
  function Qu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          eu(4, t, t.return), Qu(t);
          break;
        case 1:
          Dt(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && C1(t, t.return, u), Qu(t);
          break;
        case 27:
          mn(t.stateNode);
        case 26:
        case 5:
          Dt(t, t.return), Qu(t);
          break;
        case 22:
          t.memoizedState === null && Qu(t);
          break;
        case 30:
          Qu(t);
          break;
        default:
          Qu(t);
      }
      l = l.sibling;
    }
  }
  function Vt(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, n = l, e = t, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Vt(n, e, u), ln(4, e);
          break;
        case 1:
          if (Vt(n, e, u), a = e, n = a.stateNode, typeof n.componentDidMount == "function") try {
            n.componentDidMount();
          } catch (s) {
            al(a, a.return, s);
          }
          if (a = e, n = a.updateQueue, n !== null) {
            var c = a.stateNode;
            try {
              var f = n.shared.hiddenCallbacks;
              if (f !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < f.length; n++) T0(f[n], c);
            } catch (s) {
              al(a, a.return, s);
            }
          }
          u && i & 64 && N1(e), tn(e, e.return);
          break;
        case 27:
          B1(e);
        case 26:
        case 5:
          Vt(n, e, u), u && a === null && i & 4 && R1(e), tn(e, e.return);
          break;
        case 12:
          Vt(n, e, u);
          break;
        case 31:
          Vt(n, e, u), u && i & 4 && X1(n, e);
          break;
        case 13:
          Vt(n, e, u), u && i & 4 && Z1(n, e);
          break;
        case 22:
          e.memoizedState === null && Vt(n, e, u), tn(e, e.return);
          break;
        case 30:
          break;
        default:
          Vt(n, e, u);
      }
      t = t.sibling;
    }
  }
  function oc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && La(u));
  }
  function gc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && La(l));
  }
  function At(l, t, u, a) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) K1(l, t, u, a), t = t.sibling;
  }
  function K1(l, t, u, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        At(l, t, u, a), n & 2048 && ln(9, t);
        break;
      case 1:
        At(l, t, u, a);
        break;
      case 3:
        At(l, t, u, a), n & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && La(l)));
        break;
      case 12:
        if (n & 2048) {
          At(l, t, u, a), l = t.stateNode;
          try {
            var e = t.memoizedProps, i = e.id, c = e.onPostCommit;
            typeof c == "function" && c(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
          } catch (f) {
            al(t, t.return, f);
          }
        } else At(l, t, u, a);
        break;
      case 31:
        At(l, t, u, a);
        break;
      case 13:
        At(l, t, u, a);
        break;
      case 23:
        break;
      case 22:
        e = t.stateNode, i = t.alternate, t.memoizedState !== null ? e._visibility & 2 ? At(l, t, u, a) : un(l, t) : e._visibility & 2 ? At(l, t, u, a) : (e._visibility |= 2, da(l, t, u, a, (t.subtreeFlags & 10256) !== 0 || !1)), n & 2048 && oc(i, t);
        break;
      case 24:
        At(l, t, u, a), n & 2048 && gc(t.alternate, t);
        break;
      default:
        At(l, t, u, a);
    }
  }
  function da(l, t, u, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var e = l, i = t, c = u, f = a, s = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          da(e, i, c, f, n), ln(8, i);
          break;
        case 23:
          break;
        case 22:
          var b = i.stateNode;
          i.memoizedState !== null ? b._visibility & 2 ? da(e, i, c, f, n) : un(e, i) : (b._visibility |= 2, da(e, i, c, f, n)), n && s & 2048 && oc(i.alternate, i);
          break;
        case 24:
          da(e, i, c, f, n), n && s & 2048 && gc(i.alternate, i);
          break;
        default:
          da(e, i, c, f, n);
      }
      t = t.sibling;
    }
  }
  function un(l, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var u = l, a = t, n = a.flags;
      switch (a.tag) {
        case 22:
          un(u, a), n & 2048 && oc(a.alternate, a);
          break;
        case 24:
          un(u, a), n & 2048 && gc(a.alternate, a);
          break;
        default:
          un(u, a);
      }
      t = t.sibling;
    }
  }
  var an = 8192;
  function ha(l, t, u) {
    if (l.subtreeFlags & an) for (l = l.child; l !== null; ) x1(l, t, u), l = l.sibling;
  }
  function x1(l, t, u) {
    switch (l.tag) {
      case 26:
        ha(l, t, u), l.flags & an && l.memoizedState !== null && cd(u, Et, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        ha(l, t, u);
        break;
      case 3:
      case 4:
        var a = Et;
        Et = Oe(l.stateNode.containerInfo), ha(l, t, u), Et = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = an, an = 16777216, ha(l, t, u), an = a) : ha(l, t, u));
        break;
      default:
        ha(l, t, u);
    }
  }
  function J1(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function nn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var u = 0; u < t.length; u++) {
        var a = t[u];
        Dl = a, w1(a, l);
      }
      J1(l);
    }
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) r1(l), l = l.sibling;
  }
  function r1(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        nn(l), l.flags & 2048 && eu(9, l, l.return);
        break;
      case 3:
        nn(l);
        break;
      case 12:
        nn(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, me(l)) : nn(l);
        break;
      default:
        nn(l);
    }
  }
  function me(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var u = 0; u < t.length; u++) {
        var a = t[u];
        Dl = a, w1(a, l);
      }
      J1(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          eu(8, t, t.return), me(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, me(t));
          break;
        default:
          me(t);
      }
      l = l.sibling;
    }
  }
  function w1(l, t) {
    for (; Dl !== null; ) {
      var u = Dl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          eu(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          La(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, Dl = a;
      else l: for (u = l; Dl !== null; ) {
        a = Dl;
        var n = a.sibling, e = a.return;
        if (G1(a), a === u) {
          Dl = null;
          break l;
        }
        if (n !== null) {
          n.return = e, Dl = n;
          break l;
        }
        Dl = e;
      }
    }
  }
  var Om = {
    getCacheForType: function(l) {
      var t = pl(zl), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return pl(zl).controller.signal;
    }
  }, Mm = typeof WeakMap == "function" ? WeakMap : Map, P = 0, cl = null, V = null, x = 0, ul = 0, at = null, iu = !1, sa = !1, bc = !1, Kt = 0, Sl = 0, cu = 0, Xu = 0, zc = 0, nt = 0, Sa = 0, en = null, Vl = null, Ec = !1, de = 0, W1 = 0, he = 1 / 0, se = null, fu = null, _l = 0, vu = null, oa = null, xt = 0, Ac = 0, Tc = null, $1 = null, cn = 0, _c = null;
  function ht() {
    return (P & 2) !== 0 && x !== 0 ? x & -x : _.T !== null ? pc() : sf();
  }
  function F1() {
    if (nt === 0) if ((x & 536870912) === 0 || r) {
      var l = An;
      An <<= 1, (An & 3932160) === 0 && (An = 262144), nt = l;
    } else nt = 536870912;
    return l = tt.current, l !== null && (l.flags |= 32), nt;
  }
  function Kl(l, t, u) {
    (l === cl && (ul === 2 || ul === 9) || l.cancelPendingCommit !== null) && (ga(l, 0), yu(l, x, nt, !1)), On(l, u), ((P & 2) === 0 || l !== cl) && (l === cl && ((P & 2) === 0 && (Xu |= u), Sl === 4 && yu(l, x, nt, !1)), Jt(l));
  }
  function k1(l, t, u) {
    if ((P & 6) !== 0) throw Error(S(327));
    var a = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Da(l, t), n = a ? Hm(l, t) : Mc(l, t, !0), e = a;
    do {
      if (n === 0) {
        sa && !a && yu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, e && !Dm(u)) {
          n = Mc(l, t, !1), e = !1;
          continue;
        }
        if (n === 2) {
          if (e = t, l.errorRecoveryDisabledLanes & e) var i = 0;
          else i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              n = en;
              var f = c.current.memoizedState.isDehydrated;
              if (f && (ga(c, i).flags |= 256), i = Mc(c, i, !1), i !== 2) {
                if (bc && !f) {
                  c.errorRecoveryDisabledLanes |= e, Xu |= e, n = 4;
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
          ga(l, 0), yu(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, e = n, e) {
            case 0:
            case 1:
              throw Error(S(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              yu(a, t, nt, !iu);
              break l;
            case 2:
              Vl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(S(329));
          }
          if ((t & 62914560) === t && (n = de + 300 - Fl(), 10 < n)) {
            if (yu(a, t, nt, !iu), _n(a, 0, !0) !== 0) break l;
            xt = t, a.timeoutHandle = pv(I1.bind(null, a, u, Vl, se, Ec, t, nt, Xu, Sa, iu, e, "Throttled", -0, 0), n);
            break l;
          }
          I1(a, u, Vl, se, Ec, t, nt, Xu, Sa, iu, e, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Jt(l);
  }
  function I1(l, t, u, a, n, e, i, c, f, s, b, E, o, g) {
    if (l.timeoutHandle = -1, E = t.subtreeFlags, E & 8192 || (E & 16785408) === 16785408) {
      E = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: pt
      }, x1(t, e, E);
      var H = (e & 62914560) === e ? de - Fl() : (e & 4194048) === e ? W1 - Fl() : 0;
      if (H = fd(E, H), H !== null) {
        xt = e, l.cancelPendingCommit = H(iv.bind(null, l, t, e, u, a, n, i, c, f, b, E, null, o, g)), yu(l, e, i, !s);
        return;
      }
    }
    iv(l, t, e, u, a, n, i, c, f);
  }
  function Dm(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null))) for (var a = 0; a < u.length; a++) {
        var n = u[a], e = n.getSnapshot;
        n = n.value;
        try {
          if (!Pl(e(), n)) return !1;
        } catch {
          return !1;
        }
      }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null) u.return = t, t = u;
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
  function yu(l, t, u, a) {
    t &= ~zc, t &= ~Xu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var n = t; 0 < n; ) {
      var e = 31 - Il(n), i = 1 << e;
      a[e] = -1, n &= ~i;
    }
    u !== 0 && yf(l, u, t);
  }
  function Se() {
    return (P & 6) === 0 ? (fn(0, !1), !1) : !0;
  }
  function Oc() {
    if (V !== null) {
      if (ul === 0) var l = V.return;
      else l = V, qt = Hu = null, Zi(l), ca = null, Ka = 0, l = V;
      for (; l !== null; ) p1(l.alternate, l), l = l.return;
      V = null;
    }
  }
  function ga(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, xm(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), xt = 0, Oc(), cl = l, V = u = Ct(l.current, null), x = t, ul = 0, at = null, iu = !1, sa = Da(l, t), bc = !1, Sa = nt = zc = Xu = cu = Sl = 0, Vl = en = null, Ec = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0) for (l = l.entanglements, a &= t; 0 < a; ) {
      var n = 31 - Il(a), e = 1 << n;
      t |= l[n], a &= ~e;
    }
    return Kt = t, jn(), u;
  }
  function P1(l, t) {
    G = null, _.H = ka, t === ia || t === xn ? (t = b0(), ul = 3) : t === Hi ? (t = b0(), ul = 4) : ul = t === uc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, at = t, V === null && (Sl = 1, ne(l, ft(t, l.current)));
  }
  function lv() {
    var l = tt.current;
    return l === null ? !0 : (x & 4194048) === x ? dt === null : (x & 62914560) === x || (x & 536870912) !== 0 ? l === dt : !1;
  }
  function tv() {
    var l = _.H;
    return _.H = ka, l === null ? ka : l;
  }
  function uv() {
    var l = _.A;
    return _.A = Om, l;
  }
  function oe() {
    Sl = 4, iu || (x & 4194048) !== x && tt.current !== null || (sa = !0), (cu & 134217727) === 0 && (Xu & 134217727) === 0 || cl === null || yu(cl, x, nt, !1);
  }
  function Mc(l, t, u) {
    var a = P;
    P |= 2;
    var n = tv(), e = uv();
    (cl !== l || x !== t) && (se = null, ga(l, t)), t = !1;
    var i = Sl;
    l: do
      try {
        if (ul !== 0 && V !== null) {
          var c = V, f = at;
          switch (ul) {
            case 8:
              Oc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              tt.current === null && (t = !0);
              var s = ul;
              if (ul = 0, at = null, ba(l, c, f, s), u && sa) {
                i = 0;
                break l;
              }
              break;
            default:
              s = ul, ul = 0, at = null, ba(l, c, f, s);
          }
        }
        Um(), i = Sl;
        break;
      } catch (b) {
        P1(l, b);
      }
    while (!0);
    return t && l.shellSuspendCounter++, qt = Hu = null, P = a, _.H = n, _.A = e, V === null && (cl = null, x = 0, jn()), i;
  }
  function Um() {
    for (; V !== null; ) av(V);
  }
  function Hm(l, t) {
    var u = P;
    P |= 2;
    var a = tv(), n = uv();
    cl !== l || x !== t ? (se = null, he = Fl() + 500, ga(l, t)) : sa = Da(l, t);
    l: do
      try {
        if (ul !== 0 && V !== null) {
          t = V;
          var e = at;
          t: switch (ul) {
            case 1:
              ul = 0, at = null, ba(l, t, e, 1);
              break;
            case 2:
            case 9:
              if (o0(e)) {
                ul = 0, at = null, nv(t);
                break;
              }
              t = function() {
                ul !== 2 && ul !== 9 || cl !== l || (ul = 7), Jt(l);
              }, e.then(t, t);
              break l;
            case 3:
              ul = 7;
              break l;
            case 4:
              ul = 5;
              break l;
            case 7:
              o0(e) ? (ul = 0, at = null, nv(t)) : (ul = 0, at = null, ba(l, t, e, 7));
              break;
            case 5:
              var i = null;
              switch (V.tag) {
                case 26:
                  i = V.memoizedState;
                case 5:
                case 27:
                  var c = V;
                  if (i ? xv(i) : c.stateNode.complete) {
                    ul = 0, at = null;
                    var f = c.sibling;
                    if (f !== null) V = f;
                    else {
                      var s = c.return;
                      s !== null ? (V = s, ge(s)) : V = null;
                    }
                    break t;
                  }
              }
              ul = 0, at = null, ba(l, t, e, 5);
              break;
            case 6:
              ul = 0, at = null, ba(l, t, e, 6);
              break;
            case 8:
              Oc(), Sl = 6;
              break l;
            default:
              throw Error(S(462));
          }
        }
        pm();
        break;
      } catch (b) {
        P1(l, b);
      }
    while (!0);
    return qt = Hu = null, _.H = a, _.A = n, P = u, V !== null ? 0 : (cl = null, x = 0, jn(), Sl);
  }
  function pm() {
    for (; V !== null && !iy(); ) av(V);
  }
  function av(l) {
    var t = U1(l.alternate, l, Kt);
    l.memoizedProps = l.pendingProps, t === null ? ge(l) : V = t;
  }
  function nv(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = A1(u, t, t.pendingProps, t.type, void 0, x);
        break;
      case 11:
        t = A1(u, t, t.pendingProps, t.type.render, t.ref, x);
        break;
      case 5:
        Zi(t);
      default:
        p1(u, t), t = V = e0(t, Kt), t = U1(u, t, Kt);
    }
    l.memoizedProps = l.pendingProps, t === null ? ge(l) : V = t;
  }
  function ba(l, t, u, a) {
    qt = Hu = null, Zi(t), ca = null, Ka = 0;
    var n = t.return;
    try {
      if (gm(l, n, t, u, x)) {
        Sl = 1, ne(l, ft(u, l.current)), V = null;
        return;
      }
    } catch (e) {
      if (n !== null) throw V = n, e;
      Sl = 1, ne(l, ft(u, l.current)), V = null;
      return;
    }
    t.flags & 32768 ? (r || a === 1 ? l = !0 : sa || (x & 536870912) !== 0 ? l = !1 : (iu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = tt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), ev(t, l)) : ge(t);
  }
  function ge(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        ev(t, iu);
        return;
      }
      l = t.return;
      var u = Em(t.alternate, t, Kt);
      if (u !== null) {
        V = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        V = t;
        return;
      }
      V = t = l;
    } while (t !== null);
    Sl === 0 && (Sl = 5);
  }
  function ev(l, t) {
    do {
      var u = Am(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, V = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        V = l;
        return;
      }
      V = l = u;
    } while (l !== null);
    Sl = 6, V = null;
  }
  function iv(l, t, u, a, n, e, i, c, f) {
    l.cancelPendingCommit = null;
    do
      be();
    while (_l !== 0);
    if ((P & 6) !== 0) throw Error(S(327));
    if (t !== null) {
      if (t === l.current) throw Error(S(177));
      if (e = t.lanes | t.childLanes, e |= hi, oy(l, u, e, i, c, f), l === cl && (V = cl = null, x = 0), oa = t, vu = l, xt = u, Ac = e, Tc = n, $1 = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, qm(zn, function() {
        return mv(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = _.T, _.T = null, n = M.p, M.p = 2, i = P, P |= 4;
        try {
          Tm(l, t, u);
        } finally {
          P = i, M.p = n, _.T = a;
        }
      }
      _l = 1, cv(), fv(), vv();
    }
  }
  function cv() {
    if (_l === 1) {
      _l = 0;
      var l = vu, t = oa, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = _.T, _.T = null;
        var a = M.p;
        M.p = 2;
        var n = P;
        P |= 4;
        try {
          L1(t, l);
          var e = jc, i = Ff(l.containerInfo), c = e.focusedElem, f = e.selectionRange;
          if (i !== c && c && c.ownerDocument && $f(c.ownerDocument.documentElement, c)) {
            if (f !== null && fi(c)) {
              var s = f.start, b = f.end;
              if (b === void 0 && (b = s), "selectionStart" in c) c.selectionStart = s, c.selectionEnd = Math.min(b, c.value.length);
              else {
                var E = c.ownerDocument || document, o = E && E.defaultView || window;
                if (o.getSelection) {
                  var g = o.getSelection(), H = c.textContent.length, Y = Math.min(f.start, H), il = f.end === void 0 ? Y : Math.min(f.end, H);
                  !g.extend && Y > il && (i = il, il = Y, Y = i);
                  var m = Wf(c, Y), v = Wf(c, il);
                  if (m && v && (g.rangeCount !== 1 || g.anchorNode !== m.node || g.anchorOffset !== m.offset || g.focusNode !== v.node || g.focusOffset !== v.offset)) {
                    var d = E.createRange();
                    d.setStart(m.node, m.offset), g.removeAllRanges(), Y > il ? (g.addRange(d), g.extend(v.node, v.offset)) : (d.setEnd(v.node, v.offset), g.addRange(d));
                  }
                }
              }
            }
            for (E = [], g = c; g = g.parentNode; ) g.nodeType === 1 && E.push({
              element: g,
              left: g.scrollLeft,
              top: g.scrollTop
            });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < E.length; c++) {
              var z = E[c];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          Ne = !!Yc, jc = Yc = null;
        } finally {
          P = n, M.p = a, _.T = u;
        }
      }
      l.current = t, _l = 2;
    }
  }
  function fv() {
    if (_l === 2) {
      _l = 0;
      var l = vu, t = oa, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = _.T, _.T = null;
        var a = M.p;
        M.p = 2;
        var n = P;
        P |= 4;
        try {
          j1(l, t.alternate, t);
        } finally {
          P = n, M.p = a, _.T = u;
        }
      }
      _l = 3;
    }
  }
  function vv() {
    if (_l === 4 || _l === 3) {
      _l = 0, cy();
      var l = vu, t = oa, u = xt, a = $1;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? _l = 5 : (_l = 0, oa = vu = null, yv(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (n === 0 && (fu = null), Ke(u), t = t.stateNode, kl && typeof kl.onCommitFiberRoot == "function") try {
        kl.onCommitFiberRoot(Ma, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (a !== null) {
        t = _.T, n = M.p, M.p = 2, _.T = null;
        try {
          for (var e = l.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            e(c.value, { componentStack: c.stack });
          }
        } finally {
          _.T = t, M.p = n;
        }
      }
      (xt & 3) !== 0 && be(), Jt(l), n = l.pendingLanes, (u & 261930) !== 0 && (n & 42) !== 0 ? l === _c ? cn++ : (cn = 0, _c = l) : cn = 0, fn(0, !1);
    }
  }
  function yv(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, La(t)));
  }
  function be() {
    return cv(), fv(), vv(), mv();
  }
  function mv() {
    if (_l !== 5) return !1;
    var l = vu, t = Ac;
    Ac = 0;
    var u = Ke(xt), a = _.T, n = M.p;
    try {
      M.p = 32 > u ? 32 : u, _.T = null, u = Tc, Tc = null;
      var e = vu, i = xt;
      if (_l = 0, oa = vu = null, xt = 0, (P & 6) !== 0) throw Error(S(331));
      var c = P;
      if (P |= 4, r1(e.current), K1(e, e.current, i, u), P = c, fn(0, !1), kl && typeof kl.onPostCommitFiberRoot == "function") try {
        kl.onPostCommitFiberRoot(Ma, e);
      } catch {
      }
      return !0;
    } finally {
      M.p = n, _.T = a, yv(l, t);
    }
  }
  function dv(l, t, u) {
    t = ft(u, t), t = tc(l.stateNode, t, 2), l = Yu(l, t, 2), l !== null && (On(l, 2), Jt(l));
  }
  function al(l, t, u) {
    if (l.tag === 3) dv(l, l, u);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        dv(t, l, u);
        break;
      } else if (t.tag === 1) {
        var a = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (fu === null || !fu.has(a))) {
          l = ft(u, l), u = h1(2), a = Yu(t, u, 2), a !== null && (s1(u, a, t, l), On(a, 2), Jt(a));
          break;
        }
      }
      t = t.return;
    }
  }
  function Dc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Mm();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(u) || (bc = !0, n.add(u), l = Nm.bind(null, l, t, u), t.then(l, l));
  }
  function Nm(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, cl === l && (x & u) === u && (Sl === 4 || Sl === 3 && (x & 62914560) === x && 300 > Fl() - de ? (P & 2) === 0 && ga(l, 0) : zc |= u, Sa === x && (Sa = 0)), Jt(l);
  }
  function hv(l, t) {
    t === 0 && (t = vf()), l = Mu(l, t), l !== null && (On(l, t), Jt(l));
  }
  function Cm(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), hv(l, u);
  }
  function Rm(l, t) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, n = l.memoizedState;
        n !== null && (u = n.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(S(314));
    }
    a !== null && a.delete(t), hv(l, u);
  }
  function qm(l, t) {
    return Ze(l, t);
  }
  var ze = null, za = null, Uc = !1, Ee = !1, Hc = !1, mu = 0;
  function Jt(l) {
    l !== za && l.next === null && (za === null ? ze = za = l : za = za.next = l), Ee = !0, Uc || (Uc = !0, Ym());
  }
  function fn(l, t) {
    if (!Hc && Ee) {
      Hc = !0;
      do
        for (var u = !1, a = ze; a !== null; ) {
          if (!t) if (l !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var e = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              e = (1 << 31 - Il(42 | l) + 1) - 1, e &= n & ~(i & ~c), e = e & 201326741 ? e & 201326741 | 1 : e ? e | 2 : 0;
            }
            e !== 0 && (u = !0, gv(a, e));
          } else e = x, e = _n(a, a === cl ? e : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (e & 3) === 0 || Da(a, e) || (u = !0, gv(a, e));
          a = a.next;
        }
      while (u);
      Hc = !1;
    }
  }
  function Bm() {
    sv();
  }
  function sv() {
    Ee = Uc = !1;
    var l = 0;
    mu !== 0 && Km() && (l = mu);
    for (var t = Fl(), u = null, a = ze; a !== null; ) {
      var n = a.next, e = Sv(a, t);
      e === 0 ? (a.next = null, u === null ? ze = n : u.next = n, n === null && (za = u)) : (u = a, (l !== 0 || (e & 3) !== 0) && (Ee = !0)), a = n;
    }
    _l !== 0 && _l !== 5 || fn(l, !1), mu !== 0 && (mu = 0);
  }
  function Sv(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, n = l.expirationTimes, e = l.pendingLanes & -62914561; 0 < e; ) {
      var i = 31 - Il(e), c = 1 << i, f = n[i];
      f === -1 ? ((c & u) === 0 || (c & a) !== 0) && (n[i] = Sy(c, t)) : f <= t && (l.expiredLanes |= c), e &= ~c;
    }
    if (t = cl, u = x, u = _n(l, l === t ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a = l.callbackNode, u === 0 || l === t && (ul === 2 || ul === 9) || l.cancelPendingCommit !== null) return a !== null && a !== null && Le(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Da(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Le(a), Ke(u)) {
        case 2:
        case 8:
          u = cf;
          break;
        case 32:
          u = zn;
          break;
        case 268435456:
          u = ff;
          break;
        default:
          u = zn;
      }
      return a = ov.bind(null, l), u = Ze(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Le(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function ov(l, t) {
    if (_l !== 0 && _l !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (be() && l.callbackNode !== u) return null;
    var a = x;
    return a = _n(l, l === cl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a === 0 ? null : (k1(l, a, t), Sv(l, Fl()), l.callbackNode != null && l.callbackNode === u ? ov.bind(null, l) : null);
  }
  function gv(l, t) {
    if (be()) return null;
    k1(l, t, !0);
  }
  function Ym() {
    Jm(function() {
      (P & 6) !== 0 ? Ze(ef, Bm) : sv();
    });
  }
  function pc() {
    if (mu === 0) {
      var l = na;
      l === 0 && (l = En, En <<= 1, (En & 261888) === 0 && (En = 256)), mu = l;
    }
    return mu;
  }
  function bv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Hn("" + l);
  }
  function zv(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function jm(l, t, u, a, n) {
    if (t === "submit" && u && u.stateNode === n) {
      var e = bv((n[Gl] || null).action), i = a.submitter;
      i && (t = (t = i[Gl] || null) ? bv(t.formAction) : i.getAttribute("formAction"), t !== null && (e = t, i = null));
      var c = new Rn("action", "action", null, a, n);
      l.push({
        event: c,
        listeners: [{
          instance: null,
          listener: function() {
            if (a.defaultPrevented) {
              if (mu !== 0) {
                var f = i ? zv(n, i) : new FormData(n);
                $i(u, {
                  pending: !0,
                  data: f,
                  method: n.method,
                  action: e
                }, null, f);
              }
            } else typeof e == "function" && (c.preventDefault(), f = i ? zv(n, i) : new FormData(n), $i(u, {
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
  for (var Nc = 0; Nc < di.length; Nc++) {
    var Cc = di[Nc];
    zt(Cc.toLowerCase(), "on" + (Cc[0].toUpperCase() + Cc.slice(1)));
  }
  zt(Pf, "onAnimationEnd"), zt(l0, "onAnimationIteration"), zt(t0, "onAnimationStart"), zt("dblclick", "onDoubleClick"), zt("focusin", "onFocus"), zt("focusout", "onBlur"), zt(ky, "onTransitionRun"), zt(Iy, "onTransitionStart"), zt(Py, "onTransitionCancel"), zt(u0, "onTransitionEnd"), xu("onMouseEnter", ["mouseout", "mouseover"]), xu("onMouseLeave", ["mouseout", "mouseover"]), xu("onPointerEnter", ["pointerout", "pointerover"]), xu("onPointerLeave", ["pointerout", "pointerover"]), Au("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Au("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Au("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Au("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Au("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Au("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var vn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Gm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vn));
  function Ev(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], n = a.event;
      a = a.listeners;
      l: {
        var e = void 0;
        if (t) for (var i = a.length - 1; 0 <= i; i--) {
          var c = a[i], f = c.instance, s = c.currentTarget;
          if (c = c.listener, f !== e && n.isPropagationStopped()) break l;
          e = c, n.currentTarget = s;
          try {
            e(n);
          } catch (b) {
            Yn(b);
          }
          n.currentTarget = null, e = f;
        }
        else for (i = 0; i < a.length; i++) {
          if (c = a[i], f = c.instance, s = c.currentTarget, c = c.listener, f !== e && n.isPropagationStopped()) break l;
          e = c, n.currentTarget = s;
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
  function K(l, t) {
    var u = t[xe];
    u === void 0 && (u = t[xe] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (Tv(t, l, 2, !1), u.add(a));
  }
  function Rc(l, t, u) {
    var a = 0;
    t && (a |= 4), Tv(u, l, a, t);
  }
  var Ae = "_reactListening" + Math.random().toString(36).slice(2);
  function Av(l) {
    if (!l[Ae]) {
      l[Ae] = !0, gf.forEach(function(u) {
        u !== "selectionchange" && (Gm.has(u) || Rc(u, !1, l), Rc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Ae] || (t[Ae] = !0, Rc("selectionchange", !1, t));
    }
  }
  function Tv(l, t, u, a) {
    switch ($v(t)) {
      case 2:
        var n = hd;
        break;
      case 8:
        n = sd;
        break;
      default:
        n = wc;
    }
    u = n.bind(null, t, u, l), n = void 0, !Pe || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: n
    }) : l.addEventListener(t, u, !0) : n !== void 0 ? l.addEventListener(t, u, { passive: n }) : l.addEventListener(t, u, !1);
  }
  function qc(l, t, u, a, n) {
    var e = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null) l: for (; ; ) {
      if (a === null) return;
      var i = a.tag;
      if (i === 3 || i === 4) {
        var c = a.stateNode.containerInfo;
        if (c === n) break;
        if (i === 4) for (i = a.return; i !== null; ) {
          var f = i.tag;
          if ((f === 3 || f === 4) && i.stateNode.containerInfo === n) return;
          i = i.return;
        }
        for (; c !== null; ) {
          if (i = Lu(c), i === null) return;
          if (f = i.tag, f === 5 || f === 6 || f === 26 || f === 27) {
            a = e = i;
            continue l;
          }
          c = c.parentNode;
        }
      }
      a = a.return;
    }
    pf(function() {
      var s = e, b = ke(u), E = [];
      l: {
        var o = a0.get(l);
        if (o !== void 0) {
          var g = Rn, H = l;
          switch (l) {
            case "keypress":
              if (Nn(u) === 0) break l;
            case "keydown":
            case "keyup":
              g = By;
              break;
            case "focusin":
              H = "focus", g = ai;
              break;
            case "focusout":
              H = "blur", g = ai;
              break;
            case "beforeblur":
            case "afterblur":
              g = ai;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Rf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Uy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = Yy;
              break;
            case Pf:
            case l0:
            case t0:
              g = Hy;
              break;
            case u0:
              g = jy;
              break;
            case "scroll":
            case "scrollend":
              g = Dy;
              break;
            case "wheel":
              g = Gy;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = py;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Bf;
              break;
            case "toggle":
            case "beforetoggle":
              g = Qy;
          }
          var Y = (t & 4) !== 0, il = !Y && (l === "scroll" || l === "scrollend"), m = Y ? o !== null ? o + "Capture" : null : o;
          Y = [];
          for (var v = s, d; v !== null; ) {
            var z = v;
            if (d = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || d === null || m === null || (z = Na(v, m), z != null && Y.push(yn(v, z, d))), il) break;
            v = v.return;
          }
          0 < Y.length && (o = new g(o, H, null, u, b), E.push({
            event: o,
            listeners: Y
          }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (o = l === "mouseover" || l === "pointerover", g = l === "mouseout" || l === "pointerout", o && u !== Fe && (H = u.relatedTarget || u.fromElement) && (Lu(H) || H[Ua])) break l;
          if ((g || o) && (o = b.window === b ? b : (o = b.ownerDocument) ? o.defaultView || o.parentWindow : window, g ? (H = u.relatedTarget || u.toElement, g = s, H = H ? Lu(H) : null, H !== null && (il = w(H), Y = H.tag, H !== il || Y !== 5 && Y !== 27 && Y !== 6) && (H = null)) : (g = null, H = s), g !== H)) {
            if (Y = Rf, z = "onMouseLeave", m = "onMouseEnter", v = "mouse", (l === "pointerout" || l === "pointerover") && (Y = Bf, z = "onPointerLeave", m = "onPointerEnter", v = "pointer"), il = g == null ? o : pa(g), d = H == null ? o : pa(H), o = new Y(z, v + "leave", g, u, b), o.target = il, o.relatedTarget = d, z = null, Lu(b) === s && (Y = new Y(m, v + "enter", H, u, b), Y.target = d, Y.relatedTarget = il, z = Y), il = z, g && H) t: {
              for (Y = Qm, m = g, v = H, d = 0, z = m; z; z = Y(z)) d++;
              z = 0;
              for (var R = v; R; R = Y(R)) z++;
              for (; 0 < d - z; ) m = Y(m), d--;
              for (; 0 < z - d; ) v = Y(v), z--;
              for (; d--; ) {
                if (m === v || v !== null && m === v.alternate) {
                  Y = m;
                  break t;
                }
                m = Y(m), v = Y(v);
              }
              Y = null;
            }
            else Y = null;
            g !== null && _v(E, o, g, Y, !1), H !== null && il !== null && _v(E, il, H, Y, !0);
          }
        }
        l: {
          if (o = s ? pa(s) : window, g = o.nodeName && o.nodeName.toLowerCase(), g === "select" || g === "input" && o.type === "file") var $ = Vf;
          else if (Zf(o)) if (Kf) $ = Wy;
          else {
            $ = ry;
            var p = Jy;
          }
          else g = o.nodeName, !g || g.toLowerCase() !== "input" || o.type !== "checkbox" && o.type !== "radio" ? s && $e(s.elementType) && ($ = Vf) : $ = wy;
          if ($ && ($ = $(l, s))) {
            Lf(E, $, u, b);
            break l;
          }
          p && p(l, o, s), l === "focusout" && s && o.type === "number" && s.memoizedProps.value != null && We(o, "number", o.value);
        }
        switch (p = s ? pa(s) : window, l) {
          case "focusin":
            (Zf(p) || p.contentEditable === "true") && (Fu = p, vi = s, Qa = null);
            break;
          case "focusout":
            Qa = vi = Fu = null;
            break;
          case "mousedown":
            yi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yi = !1, kf(E, u, b);
            break;
          case "selectionchange":
            if (Fy) break;
          case "keydown":
          case "keyup":
            kf(E, u, b);
        }
        var X;
        if (ei) l: {
          switch (l) {
            case "compositionstart":
              var J = "onCompositionStart";
              break l;
            case "compositionend":
              J = "onCompositionEnd";
              break l;
            case "compositionupdate":
              J = "onCompositionUpdate";
              break l;
          }
          J = void 0;
        }
        else $u ? Qf(l, u) && (J = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (J = "onCompositionStart");
        J && (Yf && u.locale !== "ko" && ($u || J !== "onCompositionStart" ? J === "onCompositionEnd" && $u && (X = Nf()) : (kt = b, li = "value" in kt ? kt.value : kt.textContent, $u = !0)), p = Te(s, J), 0 < p.length && (J = new qf(J, l, null, u, b), E.push({
          event: J,
          listeners: p
        }), X ? J.data = X : (X = Xf(u), X !== null && (J.data = X)))), (X = Zy ? Ly(l, u) : Vy(l, u)) && (J = Te(s, "onBeforeInput"), 0 < J.length && (p = new qf("onBeforeInput", "beforeinput", null, u, b), E.push({
          event: p,
          listeners: J
        }), p.data = X)), jm(E, l, s, u, b);
      }
      Ev(E, t);
    });
  }
  function yn(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function Te(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var n = l, e = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || e === null || (n = Na(l, u), n != null && a.unshift(yn(l, n, e)), n = Na(l, t), n != null && a.push(yn(l, n, e))), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function Qm(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function _v(l, t, u, a, n) {
    for (var e = t._reactName, i = []; u !== null && u !== a; ) {
      var c = u, f = c.alternate, s = c.stateNode;
      if (c = c.tag, f !== null && f === a) break;
      c !== 5 && c !== 26 && c !== 27 || s === null || (f = s, n ? (s = Na(u, e), s != null && i.unshift(yn(u, s, f))) : n || (s = Na(u, e), s != null && i.push(yn(u, s, f)))), u = u.return;
    }
    i.length !== 0 && l.push({
      event: t,
      listeners: i
    });
  }
  var Xm = /\r\n?/g, Zm = /\u0000|\uFFFD/g;
  function Ov(l) {
    return (typeof l == "string" ? l : "" + l).replace(Xm, `
`).replace(Zm, "");
  }
  function Mv(l, t) {
    return t = Ov(t), Ov(l) === t;
  }
  function el(l, t, u, a, n, e) {
    switch (u) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || ru(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ru(l, "" + a);
        break;
      case "className":
        Dn(l, "class", a);
        break;
      case "tabIndex":
        Dn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Dn(l, u, a);
        break;
      case "style":
        Uf(l, a, e);
        break;
      case "data":
        if (t !== "object") {
          Dn(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Hn("" + a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(u, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof e == "function" && (u === "formAction" ? (t !== "input" && el(l, t, "name", n.name, n, null), el(l, t, "formEncType", n.formEncType, n, null), el(l, t, "formMethod", n.formMethod, n, null), el(l, t, "formTarget", n.formTarget, n, null)) : (el(l, t, "encType", n.encType, n, null), el(l, t, "method", n.method, n, null), el(l, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Hn("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = pt);
        break;
      case "onScroll":
        a != null && K("scroll", l);
        break;
      case "onScrollEnd":
        a != null && K("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(S(61));
          if (u = a.__html, u != null) {
            if (n.children != null) throw Error(S(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Hn("" + a), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", u);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "" + a) : l.removeAttribute(u);
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
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        K("beforetoggle", l), K("toggle", l), Mn(l, "popover", a);
        break;
      case "xlinkActuate":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Mn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Oy.get(u) || u, Mn(l, u, a));
    }
  }
  function Bc(l, t, u, a, n, e) {
    switch (u) {
      case "style":
        Uf(l, a, e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(S(61));
          if (u = a.__html, u != null) {
            if (n.children != null) throw Error(S(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ru(l, a) : (typeof a == "number" || typeof a == "bigint") && ru(l, "" + a);
        break;
      case "onScroll":
        a != null && K("scroll", l);
        break;
      case "onScrollEnd":
        a != null && K("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = pt);
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
        if (!bf.hasOwnProperty(u)) l: {
          if (u[0] === "o" && u[1] === "n" && (n = u.endsWith("Capture"), t = u.slice(2, n ? u.length - 7 : void 0), e = l[Gl] || null, e = e != null ? e[u] : null, typeof e == "function" && l.removeEventListener(t, e, n), typeof a == "function")) {
            typeof e != "function" && e !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, n);
            break l;
          }
          u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : Mn(l, u, a);
        }
    }
  }
  function Cl(l, t, u) {
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
        K("error", l), K("load", l);
        var a = !1, n = !1, e;
        for (e in u) if (u.hasOwnProperty(e)) {
          var i = u[e];
          if (i != null) switch (e) {
            case "src":
              a = !0;
              break;
            case "srcSet":
              n = !0;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(S(137, t));
            default:
              el(l, t, e, i, u, null);
          }
        }
        n && el(l, t, "srcSet", u.srcSet, u, null), a && el(l, t, "src", u.src, u, null);
        return;
      case "input":
        K("invalid", l);
        var c = e = i = n = null, f = null, s = null;
        for (a in u) if (u.hasOwnProperty(a)) {
          var b = u[a];
          if (b != null) switch (a) {
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
              s = b;
              break;
            case "value":
              e = b;
              break;
            case "defaultValue":
              c = b;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (b != null) throw Error(S(137, t));
              break;
            default:
              el(l, t, a, b, u, null);
          }
        }
        _f(l, e, c, f, s, i, n, !1);
        return;
      case "select":
        K("invalid", l), a = i = e = null;
        for (n in u) if (u.hasOwnProperty(n) && (c = u[n], c != null)) switch (n) {
          case "value":
            e = c;
            break;
          case "defaultValue":
            i = c;
            break;
          case "multiple":
            a = c;
          default:
            el(l, t, n, c, u, null);
        }
        t = e, u = i, l.multiple = !!a, t != null ? Ju(l, !!a, t, !1) : u != null && Ju(l, !!a, u, !0);
        return;
      case "textarea":
        K("invalid", l), e = n = a = null;
        for (i in u) if (u.hasOwnProperty(i) && (c = u[i], c != null)) switch (i) {
          case "value":
            a = c;
            break;
          case "defaultValue":
            n = c;
            break;
          case "children":
            e = c;
            break;
          case "dangerouslySetInnerHTML":
            if (c != null) throw Error(S(91));
            break;
          default:
            el(l, t, i, c, u, null);
        }
        Mf(l, a, n, e);
        return;
      case "option":
        for (f in u) u.hasOwnProperty(f) && (a = u[f], a != null) && (f === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : el(l, t, f, a, u, null));
        return;
      case "dialog":
        K("beforetoggle", l), K("toggle", l), K("cancel", l), K("close", l);
        break;
      case "iframe":
      case "object":
        K("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < vn.length; a++) K(vn[a], l);
        break;
      case "image":
        K("error", l), K("load", l);
        break;
      case "details":
        K("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        K("error", l), K("load", l);
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
        for (s in u) if (u.hasOwnProperty(s) && (a = u[s], a != null)) switch (s) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(S(137, t));
          default:
            el(l, t, s, a, u, null);
        }
        return;
      default:
        if ($e(t)) {
          for (b in u) u.hasOwnProperty(b) && (a = u[b], a !== void 0 && Bc(l, t, b, a, u, void 0));
          return;
        }
    }
    for (c in u) u.hasOwnProperty(c) && (a = u[c], a != null && el(l, t, c, a, u, null));
  }
  function Lm(l, t, u, a) {
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
        var n = null, e = null, i = null, c = null, f = null, s = null, b = null;
        for (g in u) {
          var E = u[g];
          if (u.hasOwnProperty(g) && E != null) switch (g) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              f = E;
            default:
              a.hasOwnProperty(g) || el(l, t, g, null, a, E);
          }
        }
        for (var o in a) {
          var g = a[o];
          if (E = u[o], a.hasOwnProperty(o) && (g != null || E != null)) switch (o) {
            case "type":
              e = g;
              break;
            case "name":
              n = g;
              break;
            case "checked":
              s = g;
              break;
            case "defaultChecked":
              b = g;
              break;
            case "value":
              i = g;
              break;
            case "defaultValue":
              c = g;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (g != null) throw Error(S(137, t));
              break;
            default:
              g !== E && el(l, t, o, g, a, E);
          }
        }
        we(l, i, c, f, s, b, e, n);
        return;
      case "select":
        g = i = c = o = null;
        for (e in u) if (f = u[e], u.hasOwnProperty(e) && f != null) switch (e) {
          case "value":
            break;
          case "multiple":
            g = f;
          default:
            a.hasOwnProperty(e) || el(l, t, e, null, a, f);
        }
        for (n in a) if (e = a[n], f = u[n], a.hasOwnProperty(n) && (e != null || f != null)) switch (n) {
          case "value":
            o = e;
            break;
          case "defaultValue":
            c = e;
            break;
          case "multiple":
            i = e;
          default:
            e !== f && el(l, t, n, e, a, f);
        }
        t = c, u = i, a = g, o != null ? Ju(l, !!u, o, !1) : !!a != !!u && (t != null ? Ju(l, !!u, t, !0) : Ju(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        g = o = null;
        for (c in u) if (n = u[c], u.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c)) switch (c) {
          case "value":
            break;
          case "children":
            break;
          default:
            el(l, t, c, null, a, n);
        }
        for (i in a) if (n = a[i], e = u[i], a.hasOwnProperty(i) && (n != null || e != null)) switch (i) {
          case "value":
            o = n;
            break;
          case "defaultValue":
            g = n;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (n != null) throw Error(S(91));
            break;
          default:
            n !== e && el(l, t, i, n, a, e);
        }
        Of(l, o, g);
        return;
      case "option":
        for (var H in u) o = u[H], u.hasOwnProperty(H) && o != null && !a.hasOwnProperty(H) && (H === "selected" ? l.selected = !1 : el(l, t, H, null, a, o));
        for (f in a) o = a[f], g = u[f], a.hasOwnProperty(f) && o !== g && (o != null || g != null) && (f === "selected" ? l.selected = o && typeof o != "function" && typeof o != "symbol" : el(l, t, f, o, a, g));
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
        for (var Y in u) o = u[Y], u.hasOwnProperty(Y) && o != null && !a.hasOwnProperty(Y) && el(l, t, Y, null, a, o);
        for (s in a) if (o = a[s], g = u[s], a.hasOwnProperty(s) && o !== g && (o != null || g != null)) switch (s) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (o != null) throw Error(S(137, t));
            break;
          default:
            el(l, t, s, o, a, g);
        }
        return;
      default:
        if ($e(t)) {
          for (var il in u) o = u[il], u.hasOwnProperty(il) && o !== void 0 && !a.hasOwnProperty(il) && Bc(l, t, il, void 0, a, o);
          for (b in a) o = a[b], g = u[b], !a.hasOwnProperty(b) || o === g || o === void 0 && g === void 0 || Bc(l, t, b, o, a, g);
          return;
        }
    }
    for (var m in u) o = u[m], u.hasOwnProperty(m) && o != null && !a.hasOwnProperty(m) && el(l, t, m, null, a, o);
    for (E in a) o = a[E], g = u[E], !a.hasOwnProperty(E) || o === g || o == null && g == null || el(l, t, E, o, a, g);
  }
  function Dv(l) {
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
  function Vm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0; a < u.length; a++) {
        var n = u[a], e = n.transferSize, i = n.initiatorType, c = n.duration;
        if (e && c && Dv(i)) {
          for (i = 0, c = n.responseEnd, a += 1; a < u.length; a++) {
            var f = u[a], s = f.startTime;
            if (s > c) break;
            var b = f.transferSize, E = f.initiatorType;
            b && Dv(E) && (f = f.responseEnd, i += b * (f < c ? 1 : (c - s) / (f - s)));
          }
          if (--a, t += 8 * (e + i) / (n.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Yc = null, jc = null;
  function _e(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Uv(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Hv(l, t) {
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
  function Gc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Qc = null;
  function Km() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Qc ? !1 : (Qc = l, !0) : (Qc = null, !1);
  }
  var pv = typeof setTimeout == "function" ? setTimeout : void 0, xm = typeof clearTimeout == "function" ? clearTimeout : void 0, Nv = typeof Promise == "function" ? Promise : void 0, Jm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nv < "u" ? function(l) {
    return Nv.resolve(null).then(l).catch(rm);
  } : pv;
  function rm(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function du(l) {
    return l === "head";
  }
  function Cv(l, t) {
    var u = t, a = 0;
    do {
      var n = u.nextSibling;
      if (l.removeChild(u), n && n.nodeType === 8) if (u = n.data, u === "/$" || u === "/&") {
        if (a === 0) {
          l.removeChild(n), _a(t);
          return;
        }
        a--;
      } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&") a++;
      else if (u === "html") mn(l.ownerDocument.documentElement);
      else if (u === "head") {
        u = l.ownerDocument.head, mn(u);
        for (var e = u.firstChild; e; ) {
          var i = e.nextSibling, c = e.nodeName;
          e[Ha] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && e.rel.toLowerCase() === "stylesheet" || u.removeChild(e), e = i;
        }
      } else u === "body" && mn(l.ownerDocument.body);
      u = n;
    } while (u);
    _a(t);
  }
  function Rv(l, t) {
    var u = l;
    l = 0;
    do {
      var a = u.nextSibling;
      if (u.nodeType === 1 ? t ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (t ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), a && a.nodeType === 8) if (u = a.data, u === "/$") {
        if (l === 0) break;
        l--;
      } else u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = a;
    } while (u);
  }
  function Xc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xc(u), Je(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function wm(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var n = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[Ha]) switch (t) {
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
      if (l = st(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Wm(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = st(l.nextSibling), l === null)) return null;
    return l;
  }
  function qv(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = st(l.nextSibling), l === null)) return null;
    return l;
  }
  function Zc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Lc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function $m(l, t) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || u.readyState !== "loading") t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function st(l) {
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
  var Vc = null;
  function Bv(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (t === 0) return st(l.nextSibling);
          t--;
        } else u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Yv(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (t === 0) return l;
          t--;
        } else u !== "/$" && u !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function jv(l, t, u) {
    switch (t = _e(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(S(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(S(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(S(454));
        return l;
      default:
        throw Error(S(451));
    }
  }
  function mn(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    Je(l);
  }
  var St = /* @__PURE__ */ new Map(), Gv = /* @__PURE__ */ new Set();
  function Oe(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var rt = M.d;
  M.d = {
    f: Fm,
    r: km,
    D: Im,
    C: Pm,
    L: ld,
    m: td,
    X: ad,
    S: ud,
    M: nd
  };
  function Fm() {
    var l = rt.f(), t = Se();
    return l || t;
  }
  function km(l) {
    var t = Vu(l);
    t !== null && t.tag === 5 && t.type === "form" ? u1(t) : rt.r(l);
  }
  var Ea = typeof document > "u" ? null : document;
  function Qv(l, t, u) {
    var a = Ea;
    if (a && typeof t == "string" && t) {
      var n = it(t);
      n = 'link[rel="' + l + '"][href="' + n + '"]', typeof u == "string" && (n += '[crossorigin="' + u + '"]'), Gv.has(n) || (Gv.add(n), l = {
        rel: l,
        crossOrigin: u,
        href: t
      }, a.querySelector(n) === null && (t = a.createElement("link"), Cl(t, "link", l), Ml(t), a.head.appendChild(t)));
    }
  }
  function Im(l) {
    rt.D(l), Qv("dns-prefetch", l, null);
  }
  function Pm(l, t) {
    rt.C(l, t), Qv("preconnect", l, t);
  }
  function ld(l, t, u) {
    rt.L(l, t, u);
    var a = Ea;
    if (a && l && t) {
      var n = 'link[rel="preload"][as="' + it(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (n += '[imagesrcset="' + it(u.imageSrcSet) + '"]', typeof u.imageSizes == "string" && (n += '[imagesizes="' + it(u.imageSizes) + '"]')) : n += '[href="' + it(l) + '"]';
      var e = n;
      switch (t) {
        case "style":
          e = Aa(l);
          break;
        case "script":
          e = Ta(l);
      }
      St.has(e) || (l = B({
        rel: "preload",
        href: t === "image" && u && u.imageSrcSet ? void 0 : l,
        as: t
      }, u), St.set(e, l), a.querySelector(n) !== null || t === "style" && a.querySelector(dn(e)) || t === "script" && a.querySelector(hn(e)) || (t = a.createElement("link"), Cl(t, "link", l), Ml(t), a.head.appendChild(t)));
    }
  }
  function td(l, t) {
    rt.m(l, t);
    var u = Ea;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + it(a) + '"][href="' + it(l) + '"]', e = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          e = Ta(l);
      }
      if (!St.has(e) && (l = B({
        rel: "modulepreload",
        href: l
      }, t), St.set(e, l), u.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(hn(e))) return;
        }
        a = u.createElement("link"), Cl(a, "link", l), Ml(a), u.head.appendChild(a);
      }
    }
  }
  function ud(l, t, u) {
    rt.S(l, t, u);
    var a = Ea;
    if (a && l) {
      var n = Ku(a).hoistableStyles, e = Aa(l);
      t = t || "default";
      var i = n.get(e);
      if (!i) {
        var c = {
          loading: 0,
          preload: null
        };
        if (i = a.querySelector(dn(e))) c.loading = 5;
        else {
          l = B({
            rel: "stylesheet",
            href: l,
            "data-precedence": t
          }, u), (u = St.get(e)) && Kc(l, u);
          var f = i = a.createElement("link");
          Ml(f), Cl(f, "link", l), f._p = new Promise(function(s, b) {
            f.onload = s, f.onerror = b;
          }), f.addEventListener("load", function() {
            c.loading |= 1;
          }), f.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Me(i, t, a);
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
  function ad(l, t) {
    rt.X(l, t);
    var u = Ea;
    if (u && l) {
      var a = Ku(u).hoistableScripts, n = Ta(l), e = a.get(n);
      e || (e = u.querySelector(hn(n)), e || (l = B({
        src: l,
        async: !0
      }, t), (t = St.get(n)) && xc(l, t), e = u.createElement("script"), Ml(e), Cl(e, "link", l), u.head.appendChild(e)), e = {
        type: "script",
        instance: e,
        count: 1,
        state: null
      }, a.set(n, e));
    }
  }
  function nd(l, t) {
    rt.M(l, t);
    var u = Ea;
    if (u && l) {
      var a = Ku(u).hoistableScripts, n = Ta(l), e = a.get(n);
      e || (e = u.querySelector(hn(n)), e || (l = B({
        src: l,
        async: !0,
        type: "module"
      }, t), (t = St.get(n)) && xc(l, t), e = u.createElement("script"), Ml(e), Cl(e, "link", l), u.head.appendChild(e)), e = {
        type: "script",
        instance: e,
        count: 1,
        state: null
      }, a.set(n, e));
    }
  }
  function Xv(l, t, u, a) {
    var n = (n = L.current) ? Oe(n) : null;
    if (!n) throw Error(S(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (t = Aa(u.href), u = Ku(n).hoistableStyles, a = u.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Aa(u.href);
          var e = Ku(n).hoistableStyles, i = e.get(l);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, e.set(l, i), (e = n.querySelector(dn(l))) && !e._p && (i.instance = e, i.state.loading = 5), St.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, St.set(l, u), e || ed(n, l, u, i.state))), t && a === null) throw Error(S(528, ""));
          return i;
        }
        if (t && a !== null) throw Error(S(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ta(u), u = Ku(n).hoistableScripts, a = u.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(S(444, l));
    }
  }
  function Aa(l) {
    return 'href="' + it(l) + '"';
  }
  function dn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Zv(l) {
    return B({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function ed(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Cl(t, "link", u), Ml(t), l.head.appendChild(t));
  }
  function Ta(l) {
    return '[src="' + it(l) + '"]';
  }
  function hn(l) {
    return "script[async]" + l;
  }
  function Lv(l, t, u) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var a = l.querySelector('style[data-href~="' + it(u.href) + '"]');
        if (a) return t.instance = a, Ml(a), a;
        var n = B({}, u, {
          "data-href": u.href,
          "data-precedence": u.precedence,
          href: null,
          precedence: null
        });
        return a = (l.ownerDocument || l).createElement("style"), Ml(a), Cl(a, "style", n), Me(a, u.precedence, l), t.instance = a;
      case "stylesheet":
        n = Aa(u.href);
        var e = l.querySelector(dn(n));
        if (e) return t.state.loading |= 4, t.instance = e, Ml(e), e;
        a = Zv(u), (n = St.get(n)) && Kc(a, n), e = (l.ownerDocument || l).createElement("link"), Ml(e);
        var i = e;
        return i._p = new Promise(function(c, f) {
          i.onload = c, i.onerror = f;
        }), Cl(e, "link", a), t.state.loading |= 4, Me(e, u.precedence, l), t.instance = e;
      case "script":
        return e = Ta(u.src), (n = l.querySelector(hn(e))) ? (t.instance = n, Ml(n), n) : (a = u, (n = St.get(e)) && (a = B({}, u), xc(a, n)), l = l.ownerDocument || l, n = l.createElement("script"), Ml(n), Cl(n, "link", a), l.head.appendChild(n), t.instance = n);
      case "void":
        return null;
      default:
        throw Error(S(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Me(a, u.precedence, l));
    return t.instance;
  }
  function Me(l, t, u) {
    for (var a = u.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, e = n, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c.dataset.precedence === t) e = c;
      else if (e !== n) break;
    }
    e ? e.parentNode.insertBefore(l, e.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function Kc(l, t) {
    l.crossOrigin ??= t.crossOrigin, l.referrerPolicy ??= t.referrerPolicy, l.title ??= t.title;
  }
  function xc(l, t) {
    l.crossOrigin ??= t.crossOrigin, l.referrerPolicy ??= t.referrerPolicy, l.integrity ??= t.integrity;
  }
  var De = null;
  function Vv(l, t, u) {
    if (De === null) {
      var a = /* @__PURE__ */ new Map(), n = De = /* @__PURE__ */ new Map();
      n.set(u, a);
    } else n = De, a = n.get(u), a || (a = /* @__PURE__ */ new Map(), n.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), n = 0; n < u.length; n++) {
      var e = u[n];
      if (!(e[Ha] || e[Ul] || l === "link" && e.getAttribute("rel") === "stylesheet") && e.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = e.getAttribute(t) || "";
        i = l + i;
        var c = a.get(i);
        c ? c.push(e) : a.set(i, [e]);
      }
    }
    return a;
  }
  function Kv(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(u, t === "title" ? l.querySelector("head > title") : null);
  }
  function id(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
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
  function xv(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function cd(l, t, u, a) {
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var n = Aa(a.href), e = t.querySelector(dn(n));
        if (e) {
          t = e._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Ue.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = e, Ml(e);
          return;
        }
        e = t.ownerDocument || t, a = Zv(a), (n = St.get(n)) && Kc(a, n), e = e.createElement("link"), Ml(e);
        var i = e;
        i._p = new Promise(function(c, f) {
          i.onload = c, i.onerror = f;
        }), Cl(e, "link", a), u.instance = e;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Ue.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var Jc = 0;
  function fd(l, t) {
    return l.stylesheets && l.count === 0 && pe(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && pe(l, l.stylesheets), l.unsuspend) {
          var e = l.unsuspend;
          l.unsuspend = null, e();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Jc === 0 && (Jc = 62500 * Vm());
      var n = setTimeout(function() {
        if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && pe(l, l.stylesheets), l.unsuspend)) {
          var e = l.unsuspend;
          l.unsuspend = null, e();
        }
      }, (l.imgBytes > Jc ? 50 : 800) + t);
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Ue() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) pe(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var He = null;
  function pe(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, He = /* @__PURE__ */ new Map(), t.forEach(vd, l), He = null, Ue.call(l));
  }
  function vd(l, t) {
    if (!(t.state.loading & 4)) {
      var u = He.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), He.set(l, u);
        for (var n = l.querySelectorAll("link[data-precedence],style[data-precedence]"), e = 0; e < n.length; e++) {
          var i = n[e];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (u.set(i.dataset.precedence, i), a = i);
        }
        a && u.set(null, a);
      }
      n = t.instance, i = n.getAttribute("data-precedence"), e = u.get(i) || a, e === a && u.set(null, n), u.set(i, n), this.count++, a = Ue.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), e ? e.parentNode.insertBefore(n, e.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(n, l.firstChild)), t.state.loading |= 4;
    }
  }
  var sn = {
    $$typeof: Ol,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0
  };
  function yd(l, t, u, a, n, e, i, c, f) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ve(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ve(0), this.hiddenUpdates = Ve(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = e, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function md(l, t, u, a, n, e, i, c, f, s, b, E) {
    return l = new yd(l, t, u, i, f, s, b, E, c), t = 1, e === !0 && (t |= 24), e = lt(3, null, null, t), l.current = e, e.stateNode = l, t = Mi(), t.refCount++, l.pooledCache = t, t.refCount++, e.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, pi(e), l;
  }
  function dd(l) {
    return l ? (l = Pu, l) : Pu;
  }
  function Jv(l, t, u, a, n, e) {
    n = dd(n), a.context === null ? a.context = n : a.pendingContext = n, a = Bu(t), a.payload = { element: u }, e = e === void 0 ? null : e, e !== null && (a.callback = e), u = Yu(l, a, t), u !== null && (Kl(u, l, t), Ja(u, l, t));
  }
  function rv(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function rc(l, t) {
    rv(l, t), (l = l.alternate) && rv(l, t);
  }
  function wv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Mu(l, 67108864);
      t !== null && Kl(t, l, 67108864), rc(l, 67108864);
    }
  }
  function Wv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ht();
      t = hf(t);
      var u = Mu(l, t);
      u !== null && Kl(u, l, t), rc(l, t);
    }
  }
  var Ne = !0;
  function hd(l, t, u, a) {
    var n = _.T;
    _.T = null;
    var e = M.p;
    try {
      M.p = 2, wc(l, t, u, a);
    } finally {
      M.p = e, _.T = n;
    }
  }
  function sd(l, t, u, a) {
    var n = _.T;
    _.T = null;
    var e = M.p;
    try {
      M.p = 8, wc(l, t, u, a);
    } finally {
      M.p = e, _.T = n;
    }
  }
  function wc(l, t, u, a) {
    if (Ne) {
      var n = Wc(a);
      if (n === null) qc(l, t, a, Ce, u), Fv(l, a);
      else if (od(n, l, t, u, a)) a.stopPropagation();
      else if (Fv(l, a), t & 4 && -1 < Sd.indexOf(l)) {
        for (; n !== null; ) {
          var e = Vu(n);
          if (e !== null) switch (e.tag) {
            case 3:
              if (e = e.stateNode, e.current.memoizedState.isDehydrated) {
                var i = Eu(e.pendingLanes);
                if (i !== 0) {
                  var c = e;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                    var f = 1 << 31 - Il(i);
                    c.entanglements[1] |= f, i &= ~f;
                  }
                  Jt(e), (P & 6) === 0 && (he = Fl() + 500, fn(0, !1));
                }
              }
              break;
            case 31:
            case 13:
              c = Mu(e, 2), c !== null && Kl(c, e, 2), Se(), rc(e, 2);
          }
          if (e = Wc(a), e === null && qc(l, t, a, Ce, u), e === n) break;
          n = e;
        }
        n !== null && a.stopPropagation();
      } else qc(l, t, a, null, u);
    }
  }
  function Wc(l) {
    return l = ke(l), $c(l);
  }
  var Ce = null;
  function $c(l) {
    if (Ce = null, l = Lu(l), l !== null) {
      var t = w(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = k(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = vl(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Ce = l, null;
  }
  function $v(l) {
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
        switch (fy()) {
          case ef:
            return 2;
          case cf:
            return 8;
          case zn:
          case vy:
            return 32;
          case ff:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Fc = !1, hu = null, su = null, Su = null, Sn = /* @__PURE__ */ new Map(), on = /* @__PURE__ */ new Map(), ou = [], Sd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Fv(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        hu = null;
        break;
      case "dragenter":
      case "dragleave":
        su = null;
        break;
      case "mouseover":
      case "mouseout":
        Su = null;
        break;
      case "pointerover":
      case "pointerout":
        Sn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        on.delete(t.pointerId);
    }
  }
  function gn(l, t, u, a, n, e) {
    return l === null || l.nativeEvent !== e ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: e,
      targetContainers: [n]
    }, t !== null && (t = Vu(t), t !== null && wv(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), l);
  }
  function od(l, t, u, a, n) {
    switch (t) {
      case "focusin":
        return hu = gn(hu, l, t, u, a, n), !0;
      case "dragenter":
        return su = gn(su, l, t, u, a, n), !0;
      case "mouseover":
        return Su = gn(Su, l, t, u, a, n), !0;
      case "pointerover":
        var e = n.pointerId;
        return Sn.set(e, gn(Sn.get(e) || null, l, t, u, a, n)), !0;
      case "gotpointercapture":
        return e = n.pointerId, on.set(e, gn(on.get(e) || null, l, t, u, a, n)), !0;
    }
    return !1;
  }
  function kv(l) {
    var t = Lu(l.target);
    if (t !== null) {
      var u = w(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = k(u), t !== null) {
            l.blockedOn = t, Sf(l.priority, function() {
              Wv(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = vl(u), t !== null) {
            l.blockedOn = t, Sf(l.priority, function() {
              Wv(u);
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Re(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = Wc(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(u.type, u);
        Fe = a, u.target.dispatchEvent(a), Fe = null;
      } else return t = Vu(u), t !== null && wv(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function Iv(l, t, u) {
    Re(l) && u.delete(t);
  }
  function gd() {
    Fc = !1, hu !== null && Re(hu) && (hu = null), su !== null && Re(su) && (su = null), Su !== null && Re(Su) && (Su = null), Sn.forEach(Iv), on.forEach(Iv);
  }
  function qe(l, t) {
    l.blockedOn === t && (l.blockedOn = null, Fc || (Fc = !0, D.unstable_scheduleCallback(D.unstable_NormalPriority, gd)));
  }
  var Be = null;
  function Pv(l) {
    Be !== l && (Be = l, D.unstable_scheduleCallback(D.unstable_NormalPriority, function() {
      Be === l && (Be = null);
      for (var t = 0; t < l.length; t += 3) {
        var u = l[t], a = l[t + 1], n = l[t + 2];
        if (typeof a != "function") {
          if ($c(a || u) === null) continue;
          break;
        }
        var e = Vu(u);
        e !== null && (l.splice(t, 3), t -= 3, $i(e, {
          pending: !0,
          data: n,
          method: u.method,
          action: a
        }, a, n));
      }
    }));
  }
  function _a(l) {
    function t(f) {
      return qe(f, l);
    }
    hu !== null && qe(hu, l), su !== null && qe(su, l), Su !== null && qe(Su, l), Sn.forEach(t), on.forEach(t);
    for (var u = 0; u < ou.length; u++) {
      var a = ou[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < ou.length && (u = ou[0], u.blockedOn === null); ) kv(u), u.blockedOn === null && ou.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null) for (a = 0; a < u.length; a += 3) {
      var n = u[a], e = u[a + 1], i = n[Gl] || null;
      if (typeof e == "function") i || Pv(u);
      else if (i) {
        var c = null;
        if (e && e.hasAttribute("formAction")) {
          if (n = e, i = e[Gl] || null) c = i.formAction;
          else if ($c(n) !== null) continue;
        } else c = i.action;
        typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), Pv(u);
      }
    }
  }
  function bd() {
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
      n !== null && (n(), n = null), a || setTimeout(u, 20);
    }
    function u() {
      if (!a && !navigation.transition) {
        var e = navigation.currentEntry;
        e && e.url != null && navigation.navigate(e.url, {
          state: e.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(u, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
      };
    }
  }
  function kc(l) {
    this._internalRoot = l;
  }
  Ic.prototype.render = kc.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(S(409));
    var u = t.current;
    Jv(u, ht(), l, t, null, null);
  }, Ic.prototype.unmount = kc.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Jv(l.current, 2, null, l, null, null), Se(), t[Ua] = null;
    }
  };
  function Ic(l) {
    this._internalRoot = l;
  }
  Ic.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = sf();
      l = {
        blockedOn: null,
        target: l,
        priority: t
      };
      for (var u = 0; u < ou.length && t !== 0 && t < ou[u].priority; u++) ;
      ou.splice(u, 0, l), u === 0 && kv(l);
    }
  };
  var ly = j.version;
  if (ly !== "19.2.7") throw Error(S(527, ly, "19.2.7"));
  M.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(S(188)) : (l = Object.keys(l).join(","), Error(S(268, l)));
    return l = T(t), l = l !== null ? Q(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var zd = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ye = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ye.isDisabled && Ye.supportsFiber) try {
      Ma = Ye.inject(zd), kl = Ye;
    } catch {
    }
  }
  h.createRoot = function(l, t) {
    if (!tl(l)) throw Error(S(299));
    var u = !1, a = "", n = sm, e = Sm, i = om;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (e = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = md(l, 1, !1, null, null, u, a, null, n, e, i, bd), l[Ua] = t.current, Av(l), new kc(t);
  };
})), qd = /* @__PURE__ */ Ut(((h, D) => {
  function j() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j);
      } catch (C) {
        console.error(C);
      }
  }
  j(), D.exports = Rd();
})), Pc = /* @__PURE__ */ ny(uf(), 1), Bd = /* @__PURE__ */ ny(qd(), 1), Yd = class {
  listeners = /* @__PURE__ */ new Map();
  eventHistory = [];
  maxHistorySize;
  eventTarget;
  constructor(h = {}) {
    this.maxHistorySize = h.maxHistorySize ?? 100, this.eventTarget = h.eventTarget;
  }
  configure(h) {
    this.maxHistorySize = h.maxHistorySize ?? this.maxHistorySize, this.eventTarget = h.eventTarget ?? this.eventTarget;
  }
  on(h, D) {
    return this.listeners.has(h) || this.listeners.set(h, /* @__PURE__ */ new Set()), this.listeners.get(h).add(D), () => {
      this.listeners.get(h)?.delete(D);
    };
  }
  once(h, D) {
    const j = this.on(h, (C) => {
      D(C), j();
    });
    return j;
  }
  emit(h, D, j) {
    const C = {
      type: h,
      source: D,
      payload: j,
      timestamp: Date.now()
    };
    this.eventHistory.push(C), this.eventHistory.length > this.maxHistorySize && this.eventHistory.shift();
    const S = this.listeners.get(h);
    S && S.forEach((w) => {
      try {
        w(C);
      } catch (k) {
        console.error(`[EventBus] Error in listener for ${h}:`, k);
      }
    });
    const tl = this.eventTarget ?? (typeof window < "u" ? window : void 0);
    if (tl && typeof CustomEvent < "u") {
      const w = new CustomEvent("platform-event", {
        detail: C,
        bubbles: !0
      });
      tl.dispatchEvent(w);
    }
  }
  getHistory(h) {
    return h ? this.eventHistory.filter((D) => D.type === h) : [...this.eventHistory];
  }
  clearHistory() {
    this.eventHistory = [];
  }
  off(h) {
    this.listeners.delete(h);
  }
  clear() {
    this.listeners.clear();
  }
}, lf = new Yd(), tf = {
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
};
function jd(h) {
  return h instanceof Error ? {
    name: h.name,
    message: h.message,
    stack: h.stack
  } : { message: typeof h == "string" ? h : "Unknown runtime error" };
}
function ty({ app: h, error: D, logger: j, source: C = "runtime", metadata: S }) {
  const tl = {
    level: "error",
    message: `${h.name} failed in ${C}`,
    appId: h.id,
    source: C,
    error: jd(D),
    metadata: S,
    timestamp: Date.now()
  };
  return lf.emit(tf.APP_ERROR, h.id, tl), j?.log(tl), tl;
}
function Gd(h, D, j = {}) {
  const C = customElements.get(h);
  if (C) return C;
  class S extends HTMLElement {
    static observedAttributes = j.observedAttributes ?? [];
    cleanup;
    async connectedCallback() {
      const w = this.createContext();
      try {
        const k = await D.mount(this, w);
        this.cleanup = typeof k == "function" ? k : void 0, lf.emit(tf.APP_LOADED, w.app.id, { tagName: h });
      } catch (k) {
        throw ty({
          app: w.app,
          error: k,
          logger: j.logger,
          source: "micro-app-connected-callback",
          metadata: { tagName: h }
        }), k;
      }
    }
    disconnectedCallback() {
      window.setTimeout(() => {
        try {
          this.cleanup?.(), D.unmount?.(this), lf.emit(tf.APP_UNLOADED, this.getAttribute("data-app-name") ?? h, { tagName: h });
        } catch (w) {
          ty({
            app: {
              id: this.getAttribute("data-app-name") ?? h,
              name: this.getAttribute("data-app-name") ?? h
            },
            error: w,
            logger: j.logger,
            source: "micro-app-disconnected-callback",
            metadata: { tagName: h }
          });
        }
      }, 0);
    }
    createContext() {
      return {
        app: {
          id: this.getAttribute("data-app-name") ?? h,
          name: this.getAttribute("data-app-name") ?? h,
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
            tagName: h
          },
          version: this.getAttribute("data-version") ?? "0.0.0",
          owner: "",
          permissions: []
        },
        shellOrigin: this.getAttribute("data-shell-origin") ?? window.location.origin
      };
    }
  }
  return customElements.define(h, S), S;
}
var Qd = /* @__PURE__ */ Ut(((h) => {
  var D = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.fragment");
  function C(S, tl, w) {
    var k = null;
    if (w !== void 0 && (k = "" + w), tl.key !== void 0 && (k = "" + tl.key), "key" in tl) {
      w = {};
      for (var vl in tl) vl !== "key" && (w[vl] = tl[vl]);
    } else w = tl;
    return tl = w.ref, {
      $$typeof: D,
      type: S,
      key: k,
      ref: tl !== void 0 ? tl : null,
      props: w
    };
  }
  h.jsx = C, h.jsxs = C;
})), Xd = /* @__PURE__ */ Ut(((h, D) => {
  D.exports = Qd();
})), fl = Xd(), uy = [
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
function Zd() {
  const [h, D] = (0, Pc.useState)("All"), j = (0, Pc.useMemo)(() => uy.filter((C) => h === "All" || C.segment === h), [h]);
  return (0, Pc.useEffect)(() => {
    window.dispatchEvent(new CustomEvent("platform-event", { detail: {
      type: "app:loaded",
      source: "customer",
      payload: { count: uy.length },
      timestamp: Date.now()
    } }));
  }, []), /* @__PURE__ */ (0, fl.jsxs)("section", {
    className: "micro-app-container",
    children: [
      /* @__PURE__ */ (0, fl.jsxs)("header", {
        className: "micro-app-header",
        children: [
          /* @__PURE__ */ (0, fl.jsx)("span", { children: "CRM" }),
          /* @__PURE__ */ (0, fl.jsx)("h1", { children: "Customer Operations" }),
          /* @__PURE__ */ (0, fl.jsx)("p", { children: "Account health, ownership, and lifecycle visibility." })
        ]
      }),
      /* @__PURE__ */ (0, fl.jsx)("div", {
        className: "toolbar",
        children: [
          "All",
          "Enterprise",
          "Growth",
          "Startup"
        ].map((C) => /* @__PURE__ */ (0, fl.jsx)("button", {
          className: h === C ? "chip active" : "chip",
          onClick: () => D(C),
          children: C
        }, C))
      }),
      /* @__PURE__ */ (0, fl.jsxs)("div", {
        className: "stats-grid",
        children: [
          /* @__PURE__ */ (0, fl.jsxs)("div", {
            className: "stat-card",
            children: [/* @__PURE__ */ (0, fl.jsx)("div", {
              className: "stat-label",
              children: "Total MRR"
            }), /* @__PURE__ */ (0, fl.jsxs)("div", {
              className: "stat-value",
              children: ["$", j.reduce((C, S) => C + S.mrr, 0).toLocaleString()]
            })]
          }),
          /* @__PURE__ */ (0, fl.jsxs)("div", {
            className: "stat-card",
            children: [/* @__PURE__ */ (0, fl.jsx)("div", {
              className: "stat-label",
              children: "Avg Health"
            }), /* @__PURE__ */ (0, fl.jsxs)("div", {
              className: "stat-value",
              children: [Math.round(j.reduce((C, S) => C + S.health, 0) / j.length), "%"]
            })]
          }),
          /* @__PURE__ */ (0, fl.jsxs)("div", {
            className: "stat-card",
            children: [/* @__PURE__ */ (0, fl.jsx)("div", {
              className: "stat-label",
              children: "Accounts"
            }), /* @__PURE__ */ (0, fl.jsx)("div", {
              className: "stat-value",
              children: j.length
            })]
          })
        ]
      }),
      /* @__PURE__ */ (0, fl.jsx)("div", {
        className: "list-section",
        children: j.map((C) => /* @__PURE__ */ (0, fl.jsxs)("article", {
          className: "row-card",
          children: [/* @__PURE__ */ (0, fl.jsxs)("div", { children: [/* @__PURE__ */ (0, fl.jsx)("strong", { children: C.name }), /* @__PURE__ */ (0, fl.jsxs)("span", { children: [
            C.id,
            " · ",
            C.segment,
            " · Owner ",
            C.owner
          ] })] }), /* @__PURE__ */ (0, fl.jsxs)("div", {
            className: "health",
            children: [/* @__PURE__ */ (0, fl.jsxs)("span", { children: [C.health, "%"] }), /* @__PURE__ */ (0, fl.jsx)("div", { children: /* @__PURE__ */ (0, fl.jsx)("i", { style: { width: `${C.health}%` } }) })]
          })]
        }, C.id))
      })
    ]
  });
}
var Ld = Gd("micro-customer-app", { mount(h) {
  const D = Bd.createRoot(h);
  return D.render(/* @__PURE__ */ (0, fl.jsx)(Zd, {})), () => D.unmount();
} });
export {
  Ld as MicroCustomerApp
};
