var Ed = Object.create, ay = Object.defineProperty, Ad = Object.getOwnPropertyDescriptor, Td = Object.getOwnPropertyNames, _d = Object.getPrototypeOf, Od = Object.prototype.hasOwnProperty, Ut = (d, U) => () => (U || (d((U = { exports: {} }).exports, U), d = null), U.exports), Md = (d, U, j, X) => {
  if (U && typeof U == "object" || typeof U == "function")
    for (var o = Td(U), C = 0, G = o.length, P; C < G; C++)
      P = o[C], !Od.call(d, P) && P !== j && ay(d, P, {
        get: ((vl) => U[vl]).bind(null, P),
        enumerable: !(X = Ad(U, P)) || X.enumerable
      });
  return d;
}, uy = (d, U, j) => (j = d != null ? Ed(_d(d)) : {}, Md(U || !d || !d.__esModule ? ay(j, "default", {
  value: d,
  enumerable: !0
}) : j, d)), Dd = /* @__PURE__ */ Ut(((d) => {
  var U = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), X = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), C = /* @__PURE__ */ Symbol.for("react.profiler"), G = /* @__PURE__ */ Symbol.for("react.consumer"), P = /* @__PURE__ */ Symbol.for("react.context"), vl = /* @__PURE__ */ Symbol.for("react.forward_ref"), B = /* @__PURE__ */ Symbol.for("react.suspense"), T = /* @__PURE__ */ Symbol.for("react.memo"), Z = /* @__PURE__ */ Symbol.for("react.lazy"), q = /* @__PURE__ */ Symbol.for("react.activity"), St = Symbol.iterator;
  function Rl(y) {
    return y === null || typeof y != "object" ? null : (y = St && y[St] || y["@@iterator"], typeof y == "function" ? y : null);
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
  function rl(y, A, O) {
    this.props = y, this.context = A, this.refs = wt, this.updater = O || Yl;
  }
  rl.prototype.isReactComponent = {}, rl.prototype.setState = function(y, A) {
    if (typeof y != "object" && typeof y != "function" && y != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, y, A, "setState");
  }, rl.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function Wt() {
  }
  Wt.prototype = rl.prototype;
  function Ol(y, A, O) {
    this.props = y, this.context = A, this.refs = wt, this.updater = O || Yl;
  }
  var gt = Ol.prototype = new Wt();
  gt.constructor = Ol, xl(gt, rl.prototype), gt.isPureReactComponent = !0;
  var Jl = Array.isArray;
  function wl() {
  }
  var F = {
    H: null,
    A: null,
    T: null,
    S: null
  }, jl = Object.prototype.hasOwnProperty;
  function Tt(y, A, O) {
    var N = O.ref;
    return {
      $$typeof: U,
      type: y,
      key: A,
      ref: N !== void 0 ? N : null,
      props: O
    };
  }
  function ba(y, A) {
    return Tt(y.type, A, y.props);
  }
  function Wl(y) {
    return typeof y == "object" && y !== null && y.$$typeof === U;
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
  var Za = /\/+/g;
  function bt(y, A) {
    return typeof y == "object" && y !== null && y.key != null ? _t("" + y.key) : A.toString(36);
  }
  function D(y) {
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
  function _(y, A, O, N, K) {
    var x = typeof y;
    (x === "undefined" || x === "boolean") && (y = null);
    var al = !1;
    if (y === null) al = !0;
    else switch (x) {
      case "bigint":
      case "string":
      case "number":
        al = !0;
        break;
      case "object":
        switch (y.$$typeof) {
          case U:
          case j:
            al = !0;
            break;
          case Z:
            return al = y._init, _(al(y._payload), A, O, N, K);
        }
    }
    if (al) return K = K(y), al = N === "" ? "." + bt(y, 0) : N, Jl(K) ? (O = "", al != null && (O = al.replace(Za, "$&/") + "/"), _(K, A, O, "", function(Ou) {
      return Ou;
    })) : K != null && (Wl(K) && (K = ba(K, O + (K.key == null || y && y.key === K.key ? "" : ("" + K.key).replace(Za, "$&/") + "/") + al)), A.push(K)), 1;
    al = 0;
    var Bl = N === "" ? "." : N + ":";
    if (Jl(y)) for (var Sl = 0; Sl < y.length; Sl++) N = y[Sl], x = Bl + bt(N, Sl), al += _(N, A, O, x, K);
    else if (Sl = Rl(y), typeof Sl == "function") for (y = Sl.call(y), Sl = 0; !(N = y.next()).done; ) N = N.value, x = Bl + bt(N, Sl++), al += _(N, A, O, x, K);
    else if (x === "object") {
      if (typeof y.then == "function") return _(D(y), A, O, N, K);
      throw A = String(y), Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.");
    }
    return al;
  }
  function M(y, A, O) {
    if (y == null) return y;
    var N = [], K = 0;
    return _(y, N, "", "", function(x) {
      return A.call(O, x, K++);
    }), N;
  }
  function ll(y) {
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
  d.Activity = q, d.Children = $l, d.Component = rl, d.Fragment = X, d.Profiler = C, d.PureComponent = Ol, d.StrictMode = o, d.Suspense = B, d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, d.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return F.H.useMemoCache(y);
    }
  }, d.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, d.cacheSignal = function() {
    return null;
  }, d.cloneElement = function(y, A, O) {
    if (y == null) throw Error("The argument must be a React element, but you passed " + y + ".");
    var N = xl({}, y.props), K = y.key;
    if (A != null) for (x in A.key !== void 0 && (K = "" + A.key), A) !jl.call(A, x) || x === "key" || x === "__self" || x === "__source" || x === "ref" && A.ref === void 0 || (N[x] = A[x]);
    var x = arguments.length - 2;
    if (x === 1) N.children = O;
    else if (1 < x) {
      for (var al = Array(x), Bl = 0; Bl < x; Bl++) al[Bl] = arguments[Bl + 2];
      N.children = al;
    }
    return Tt(y.type, K, N);
  }, d.createContext = function(y) {
    return y = {
      $$typeof: P,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: G,
      _context: y
    }, y;
  }, d.createElement = function(y, A, O) {
    var N, K = {}, x = null;
    if (A != null) for (N in A.key !== void 0 && (x = "" + A.key), A) jl.call(A, N) && N !== "key" && N !== "__self" && N !== "__source" && (K[N] = A[N]);
    var al = arguments.length - 2;
    if (al === 1) K.children = O;
    else if (1 < al) {
      for (var Bl = Array(al), Sl = 0; Sl < al; Sl++) Bl[Sl] = arguments[Sl + 2];
      K.children = Bl;
    }
    if (y && y.defaultProps) for (N in al = y.defaultProps, al) K[N] === void 0 && (K[N] = al[N]);
    return Tt(y, x, K);
  }, d.createRef = function() {
    return { current: null };
  }, d.forwardRef = function(y) {
    return {
      $$typeof: vl,
      render: y
    };
  }, d.isValidElement = Wl, d.lazy = function(y) {
    return {
      $$typeof: Z,
      _payload: {
        _status: -1,
        _result: y
      },
      _init: ll
    };
  }, d.memo = function(y, A) {
    return {
      $$typeof: T,
      type: y,
      compare: A === void 0 ? null : A
    };
  }, d.startTransition = function(y) {
    var A = F.T, O = {};
    F.T = O;
    try {
      var N = y(), K = F.S;
      K !== null && K(O, N), typeof N == "object" && N !== null && typeof N.then == "function" && N.then(wl, yl);
    } catch (x) {
      yl(x);
    } finally {
      A !== null && O.types !== null && (A.types = O.types), F.T = A;
    }
  }, d.unstable_useCacheRefresh = function() {
    return F.H.useCacheRefresh();
  }, d.use = function(y) {
    return F.H.use(y);
  }, d.useActionState = function(y, A, O) {
    return F.H.useActionState(y, A, O);
  }, d.useCallback = function(y, A) {
    return F.H.useCallback(y, A);
  }, d.useContext = function(y) {
    return F.H.useContext(y);
  }, d.useDebugValue = function() {
  }, d.useDeferredValue = function(y, A) {
    return F.H.useDeferredValue(y, A);
  }, d.useEffect = function(y, A) {
    return F.H.useEffect(y, A);
  }, d.useEffectEvent = function(y) {
    return F.H.useEffectEvent(y);
  }, d.useId = function() {
    return F.H.useId();
  }, d.useImperativeHandle = function(y, A, O) {
    return F.H.useImperativeHandle(y, A, O);
  }, d.useInsertionEffect = function(y, A) {
    return F.H.useInsertionEffect(y, A);
  }, d.useLayoutEffect = function(y, A) {
    return F.H.useLayoutEffect(y, A);
  }, d.useMemo = function(y, A) {
    return F.H.useMemo(y, A);
  }, d.useOptimistic = function(y, A) {
    return F.H.useOptimistic(y, A);
  }, d.useReducer = function(y, A, O) {
    return F.H.useReducer(y, A, O);
  }, d.useRef = function(y) {
    return F.H.useRef(y);
  }, d.useState = function(y) {
    return F.H.useState(y);
  }, d.useSyncExternalStore = function(y, A, O) {
    return F.H.useSyncExternalStore(y, A, O);
  }, d.useTransition = function() {
    return F.H.useTransition();
  }, d.version = "19.2.7";
})), tf = /* @__PURE__ */ Ut(((d, U) => {
  U.exports = Dd();
})), Ud = /* @__PURE__ */ Ut(((d) => {
  function U(D, _) {
    var M = D.length;
    D.push(_);
    l: for (; 0 < M; ) {
      var ll = M - 1 >>> 1, yl = D[ll];
      if (0 < o(yl, _)) D[ll] = _, D[M] = yl, M = ll;
      else break l;
    }
  }
  function j(D) {
    return D.length === 0 ? null : D[0];
  }
  function X(D) {
    if (D.length === 0) return null;
    var _ = D[0], M = D.pop();
    if (M !== _) {
      D[0] = M;
      l: for (var ll = 0, yl = D.length, $l = yl >>> 1; ll < $l; ) {
        var y = 2 * (ll + 1) - 1, A = D[y], O = y + 1, N = D[O];
        if (0 > o(A, M)) O < yl && 0 > o(N, A) ? (D[ll] = N, D[O] = M, ll = O) : (D[ll] = A, D[y] = M, ll = y);
        else if (O < yl && 0 > o(N, M)) D[ll] = N, D[O] = M, ll = O;
        else break l;
      }
    }
    return _;
  }
  function o(D, _) {
    var M = D.sortIndex - _.sortIndex;
    return M !== 0 ? M : D.id - _.id;
  }
  if (d.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var C = performance;
    d.unstable_now = function() {
      return C.now();
    };
  } else {
    var G = Date, P = G.now();
    d.unstable_now = function() {
      return G.now() - P;
    };
  }
  var vl = [], B = [], T = 1, Z = null, q = 3, St = !1, Rl = !1, Yl = !1, xl = !1, wt = typeof setTimeout == "function" ? setTimeout : null, rl = typeof clearTimeout == "function" ? clearTimeout : null, Wt = typeof setImmediate < "u" ? setImmediate : null;
  function Ol(D) {
    for (var _ = j(B); _ !== null; ) {
      if (_.callback === null) X(B);
      else if (_.startTime <= D) X(B), _.sortIndex = _.expirationTime, U(vl, _);
      else break;
      _ = j(B);
    }
  }
  function gt(D) {
    if (Yl = !1, Ol(D), !Rl) if (j(vl) !== null) Rl = !0, Jl || (Jl = !0, Wl());
    else {
      var _ = j(B);
      _ !== null && bt(gt, _.startTime - D);
    }
  }
  var Jl = !1, wl = -1, F = 5, jl = -1;
  function Tt() {
    return xl ? !0 : !(d.unstable_now() - jl < F);
  }
  function ba() {
    if (xl = !1, Jl) {
      var D = d.unstable_now();
      jl = D;
      var _ = !0;
      try {
        l: {
          Rl = !1, Yl && (Yl = !1, rl(wl), wl = -1), St = !0;
          var M = q;
          try {
            t: {
              for (Ol(D), Z = j(vl); Z !== null && !(Z.expirationTime > D && Tt()); ) {
                var ll = Z.callback;
                if (typeof ll == "function") {
                  Z.callback = null, q = Z.priorityLevel;
                  var yl = ll(Z.expirationTime <= D);
                  if (D = d.unstable_now(), typeof yl == "function") {
                    Z.callback = yl, Ol(D), _ = !0;
                    break t;
                  }
                  Z === j(vl) && X(vl), Ol(D);
                } else X(vl);
                Z = j(vl);
              }
              if (Z !== null) _ = !0;
              else {
                var $l = j(B);
                $l !== null && bt(gt, $l.startTime - D), _ = !1;
              }
            }
            break l;
          } finally {
            Z = null, q = M, St = !1;
          }
          _ = void 0;
        }
      } finally {
        _ ? Wl() : Jl = !1;
      }
    }
  }
  var Wl;
  if (typeof Wt == "function") Wl = function() {
    Wt(ba);
  };
  else if (typeof MessageChannel < "u") {
    var _t = new MessageChannel(), Za = _t.port2;
    _t.port1.onmessage = ba, Wl = function() {
      Za.postMessage(null);
    };
  } else Wl = function() {
    wt(ba, 0);
  };
  function bt(D, _) {
    wl = wt(function() {
      D(d.unstable_now());
    }, _);
  }
  d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(D) {
    D.callback = null;
  }, d.unstable_forceFrameRate = function(D) {
    0 > D || 125 < D ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < D ? Math.floor(1e3 / D) : 5;
  }, d.unstable_getCurrentPriorityLevel = function() {
    return q;
  }, d.unstable_next = function(D) {
    switch (q) {
      case 1:
      case 2:
      case 3:
        var _ = 3;
        break;
      default:
        _ = q;
    }
    var M = q;
    q = _;
    try {
      return D();
    } finally {
      q = M;
    }
  }, d.unstable_requestPaint = function() {
    xl = !0;
  }, d.unstable_runWithPriority = function(D, _) {
    switch (D) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        D = 3;
    }
    var M = q;
    q = D;
    try {
      return _();
    } finally {
      q = M;
    }
  }, d.unstable_scheduleCallback = function(D, _, M) {
    var ll = d.unstable_now();
    switch (typeof M == "object" && M !== null ? (M = M.delay, M = typeof M == "number" && 0 < M ? ll + M : ll) : M = ll, D) {
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
    return yl = M + yl, D = {
      id: T++,
      callback: _,
      priorityLevel: D,
      startTime: M,
      expirationTime: yl,
      sortIndex: -1
    }, M > ll ? (D.sortIndex = M, U(B, D), j(vl) === null && D === j(B) && (Yl ? (rl(wl), wl = -1) : Yl = !0, bt(gt, M - ll))) : (D.sortIndex = yl, U(vl, D), Rl || St || (Rl = !0, Jl || (Jl = !0, Wl()))), D;
  }, d.unstable_shouldYield = Tt, d.unstable_wrapCallback = function(D) {
    var _ = q;
    return function() {
      var M = q;
      q = _;
      try {
        return D.apply(this, arguments);
      } finally {
        q = M;
      }
    };
  };
})), pd = /* @__PURE__ */ Ut(((d, U) => {
  U.exports = Ud();
})), Hd = /* @__PURE__ */ Ut(((d) => {
  var U = tf();
  function j(B) {
    var T = "https://react.dev/errors/" + B;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Z = 2; Z < arguments.length; Z++) T += "&args[]=" + encodeURIComponent(arguments[Z]);
    }
    return "Minified React error #" + B + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function X() {
  }
  var o = {
    d: {
      f: X,
      r: function() {
        throw Error(j(522));
      },
      D: X,
      C: X,
      L: X,
      m: X,
      X,
      S: X,
      M: X
    },
    p: 0,
    findDOMNode: null
  }, C = /* @__PURE__ */ Symbol.for("react.portal");
  function G(B, T, Z) {
    var q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: C,
      key: q == null ? null : "" + q,
      children: B,
      containerInfo: T,
      implementation: Z
    };
  }
  var P = U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function vl(B, T) {
    if (B === "font") return "";
    if (typeof T == "string") return T === "use-credentials" ? T : "";
  }
  d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, d.createPortal = function(B, T) {
    var Z = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11) throw Error(j(299));
    return G(B, T, null, Z);
  }, d.flushSync = function(B) {
    var T = P.T, Z = o.p;
    try {
      if (P.T = null, o.p = 2, B) return B();
    } finally {
      P.T = T, o.p = Z, o.d.f();
    }
  }, d.preconnect = function(B, T) {
    typeof B == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, o.d.C(B, T));
  }, d.prefetchDNS = function(B) {
    typeof B == "string" && o.d.D(B);
  }, d.preinit = function(B, T) {
    if (typeof B == "string" && T && typeof T.as == "string") {
      var Z = T.as, q = vl(Z, T.crossOrigin), St = typeof T.integrity == "string" ? T.integrity : void 0, Rl = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      Z === "style" ? o.d.S(B, typeof T.precedence == "string" ? T.precedence : void 0, {
        crossOrigin: q,
        integrity: St,
        fetchPriority: Rl
      }) : Z === "script" && o.d.X(B, {
        crossOrigin: q,
        integrity: St,
        fetchPriority: Rl,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0
      });
    }
  }, d.preinitModule = function(B, T) {
    if (typeof B == "string") if (typeof T == "object" && T !== null) {
      if (T.as == null || T.as === "script") {
        var Z = vl(T.as, T.crossOrigin);
        o.d.M(B, {
          crossOrigin: Z,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0
        });
      }
    } else T ?? o.d.M(B);
  }, d.preload = function(B, T) {
    if (typeof B == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var Z = T.as, q = vl(Z, T.crossOrigin);
      o.d.L(B, Z, {
        crossOrigin: q,
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
  }, d.preloadModule = function(B, T) {
    if (typeof B == "string") if (T) {
      var Z = vl(T.as, T.crossOrigin);
      o.d.m(B, {
        as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
        crossOrigin: Z,
        integrity: typeof T.integrity == "string" ? T.integrity : void 0
      });
    } else o.d.m(B);
  }, d.requestFormReset = function(B) {
    o.d.r(B);
  }, d.unstable_batchedUpdates = function(B, T) {
    return B(T);
  }, d.useFormState = function(B, T, Z) {
    return P.H.useFormState(B, T, Z);
  }, d.useFormStatus = function() {
    return P.H.useHostTransitionStatus();
  }, d.version = "19.2.7";
})), Nd = /* @__PURE__ */ Ut(((d, U) => {
  function j() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j);
      } catch (X) {
        console.error(X);
      }
  }
  j(), U.exports = Hd();
})), Cd = /* @__PURE__ */ Ut(((d) => {
  var U = pd(), j = tf(), X = Nd();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function C(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function G(l) {
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
  function P(l) {
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
  function B(l) {
    if (G(l) !== l) throw Error(o(188));
  }
  function T(l) {
    var t = l.alternate;
    if (!t) {
      if (t = G(l), t === null) throw Error(o(188));
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
          if (e === a) return B(n), l;
          if (e === u) return B(n), t;
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
  function Z(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = Z(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var q = Object.assign, St = /* @__PURE__ */ Symbol.for("react.element"), Rl = /* @__PURE__ */ Symbol.for("react.transitional.element"), Yl = /* @__PURE__ */ Symbol.for("react.portal"), xl = /* @__PURE__ */ Symbol.for("react.fragment"), wt = /* @__PURE__ */ Symbol.for("react.strict_mode"), rl = /* @__PURE__ */ Symbol.for("react.profiler"), Wt = /* @__PURE__ */ Symbol.for("react.consumer"), Ol = /* @__PURE__ */ Symbol.for("react.context"), gt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Jl = /* @__PURE__ */ Symbol.for("react.suspense"), wl = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), jl = /* @__PURE__ */ Symbol.for("react.lazy"), Tt = /* @__PURE__ */ Symbol.for("react.activity"), ba = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Wl = Symbol.iterator;
  function _t(l) {
    return l === null || typeof l != "object" ? null : (l = Wl && l[Wl] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Za = /* @__PURE__ */ Symbol.for("react.client.reference");
  function bt(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === Za ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case xl:
        return "Fragment";
      case rl:
        return "Profiler";
      case wt:
        return "StrictMode";
      case Jl:
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
      case F:
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
  var D = Array.isArray, _ = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = X.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ll = {
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
  var N = y(null), K = y(null), x = y(null), al = y(null);
  function Bl(l, t) {
    switch (O(x, t), O(K, l), O(N, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Dv(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI) t = Dv(t), l = Uv(t, l);
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
  function Sl() {
    A(N), A(K), A(x);
  }
  function Ou(l) {
    l.memoizedState !== null && O(al, l);
    var t = N.current, a = Uv(t, l.type);
    t !== a && (O(K, l), O(N, a));
  }
  function bn(l) {
    K.current === l && (A(N), A(K)), al.current === l && (A(al), sn._currentValue = ll);
  }
  var je, af;
  function za(l) {
    if (je === void 0) try {
      throw Error();
    } catch (a) {
      var t = a.stack.trim().match(/\n( *(at )?)/);
      je = t && t[1] || "", af = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + je + l + af;
  }
  var Ge = !1;
  function Qe(l, t) {
    if (!l || Ge) return "";
    Ge = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = { DetermineComponentFrameRoot: function() {
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
                var S = g;
              }
              Reflect.construct(l, [], E);
            } else {
              try {
                E.call();
              } catch (g) {
                S = g;
              }
              l.call(E.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (g) {
              S = g;
            }
            (E = l()) && typeof E.catch == "function" && E.catch(function() {
            });
          }
        } catch (g) {
          if (g && S && typeof g.stack == "string") return [g.stack, S.stack];
        }
        return [null, null];
      } };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot, "name");
      n && n.configurable && Object.defineProperty(u.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var e = u.DetermineComponentFrameRoot(), i = e[0], c = e[1];
      if (i && c) {
        var f = i.split(`
`), s = c.split(`
`);
        for (n = u = 0; u < f.length && !f[u].includes("DetermineComponentFrameRoot"); ) u++;
        for (; n < s.length && !s[n].includes("DetermineComponentFrameRoot"); ) n++;
        if (u === f.length || n === s.length) for (u = f.length - 1, n = s.length - 1; 1 <= u && 0 <= n && f[u] !== s[n]; ) n--;
        for (; 1 <= u && 0 <= n; u--, n--) if (f[u] !== s[n]) {
          if (u !== 1 || n !== 1) do
            if (u--, n--, 0 > n || f[u] !== s[n]) {
              var b = `
` + f[u].replace(" at new ", " at ");
              return l.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", l.displayName)), b;
            }
          while (1 <= u && 0 <= n);
          break;
        }
      }
    } finally {
      Ge = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? za(a) : "";
  }
  function ny(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return za(l.type);
      case 16:
        return za("Lazy");
      case 13:
        return l.child !== t && t !== null ? za("Suspense Fallback") : za("Suspense");
      case 19:
        return za("SuspenseList");
      case 0:
      case 15:
        return Qe(l.type, !1);
      case 11:
        return Qe(l.type.render, !1);
      case 1:
        return Qe(l.type, !0);
      case 31:
        return za("Activity");
      default:
        return "";
    }
  }
  function uf(l) {
    try {
      var t = "", a = null;
      do
        t += ny(l, a), a = l, l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  var Xe = Object.prototype.hasOwnProperty, Ze = U.unstable_scheduleCallback, Le = U.unstable_cancelCallback, ey = U.unstable_shouldYield, iy = U.unstable_requestPaint, Fl = U.unstable_now, cy = U.unstable_getCurrentPriorityLevel, nf = U.unstable_ImmediatePriority, ef = U.unstable_UserBlockingPriority, zn = U.unstable_NormalPriority, fy = U.unstable_LowPriority, cf = U.unstable_IdlePriority, vy = U.log, yy = U.unstable_setDisableYieldValue, Mu = null, kl = null;
  function $t(l) {
    if (typeof vy == "function" && yy(l), kl && typeof kl.setStrictMode == "function") try {
      kl.setStrictMode(Mu, l);
    } catch {
    }
  }
  var Il = Math.clz32 ? Math.clz32 : hy, my = Math.log, dy = Math.LN2;
  function hy(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (my(l) / dy | 0) | 0;
  }
  var En = 256, An = 262144, Tn = 4194304;
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
  function _n(l, t, a) {
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
  function sy(l, t) {
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
  function ff() {
    var l = Tn;
    return Tn <<= 1, (Tn & 62914560) === 0 && (Tn = 4194304), l;
  }
  function Ve(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function On(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function oy(l, t, a, u, n, e) {
    var i = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var c = l.entanglements, f = l.expirationTimes, s = l.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var b = 31 - Il(a), E = 1 << b;
      c[b] = 0, f[b] = -1;
      var S = s[b];
      if (S !== null) for (s[b] = null, b = 0; b < S.length; b++) {
        var g = S[b];
        g !== null && (g.lane &= -536870913);
      }
      a &= ~E;
    }
    u !== 0 && vf(l, u, 0), e !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= e & ~(i & ~t));
  }
  function vf(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var u = 31 - Il(t);
    l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 261930;
  }
  function yf(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var u = 31 - Il(a), n = 1 << u;
      n & t | l[u] & t && (l[u] |= t), a &= ~n;
    }
  }
  function mf(l, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : df(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function df(l) {
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
  function hf() {
    var l = M.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Wv(l.type));
  }
  function sf(l, t) {
    var a = M.p;
    try {
      return M.p = l, t();
    } finally {
      M.p = a;
    }
  }
  var Ft = Math.random().toString(36).slice(2), Ul = "__reactFiber$" + Ft, Gl = "__reactProps$" + Ft, Uu = "__reactContainer$" + Ft, xe = "__reactEvents$" + Ft, Sy = "__reactListeners$" + Ft, gy = "__reactHandles$" + Ft, of = "__reactResources$" + Ft, pu = "__reactMarker$" + Ft;
  function re(l) {
    delete l[Ul], delete l[Gl], delete l[xe], delete l[Sy], delete l[gy];
  }
  function La(l) {
    var t = l[Ul];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[Uu] || a[Ul]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null) for (l = qv(l); l !== null; ) {
          if (a = l[Ul]) return a;
          l = qv(l);
        }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function Va(l) {
    if (l = l[Ul] || l[Uu]) {
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
  function Ka(l) {
    var t = l[of];
    return t || (t = l[of] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), t;
  }
  function Ml(l) {
    l[pu] = !0;
  }
  var Sf = /* @__PURE__ */ new Set(), gf = {};
  function Aa(l, t) {
    xa(l, t), xa(l + "Capture", t);
  }
  function xa(l, t) {
    for (gf[l] = t, l = 0; l < t.length; l++) Sf.add(t[l]);
  }
  var by = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), bf = {}, zf = {};
  function zy(l) {
    return Xe.call(zf, l) ? !0 : Xe.call(bf, l) ? !1 : by.test(l) ? zf[l] = !0 : (bf[l] = !0, !1);
  }
  function Mn(l, t, a) {
    if (zy(t)) if (a === null) l.removeAttribute(t);
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
  function Dn(l, t, a) {
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
  function pt(l, t, a, u) {
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
  function Ef(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ey(l, t, a) {
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
  function Je(l) {
    if (!l._valueTracker) {
      var t = Ef(l) ? "checked" : "value";
      l._valueTracker = Ey(l, t, "" + l[t]);
    }
  }
  function Af(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), u = "";
    return l && (u = Ef(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), !0) : !1;
  }
  function Un(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Ay = /[\n"\\]/g;
  function it(l) {
    return l.replace(Ay, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function we(l, t, a, u, n, e, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + et(t)) : l.value !== "" + et(t) && (l.value = "" + et(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? We(l, i, et(t)) : a != null ? We(l, i, et(a)) : u != null && l.removeAttribute("value"), n == null && e != null && (l.defaultChecked = !!e), n != null && (l.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + et(c) : l.removeAttribute("name");
  }
  function Tf(l, t, a, u, n, e, i, c) {
    if (e != null && typeof e != "function" && typeof e != "symbol" && typeof e != "boolean" && (l.type = e), t != null || a != null) {
      if (!(e !== "submit" && e !== "reset" || t != null)) {
        Je(l);
        return;
      }
      a = a != null ? "" + et(a) : "", t = t != null ? "" + et(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    u = u ?? n, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = c ? l.checked : !!u, l.defaultChecked = !!u, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), Je(l);
  }
  function We(l, t, a) {
    t === "number" && Un(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function ra(l, t, a, u) {
    if (l = l.options, t) {
      t = {};
      for (var n = 0; n < a.length; n++) t["$" + a[n]] = !0;
      for (a = 0; a < l.length; a++) n = t.hasOwnProperty("$" + l[a].value), l[a].selected !== n && (l[a].selected = n), n && u && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + et(a), t = null, n = 0; n < l.length; n++) {
        if (l[n].value === a) {
          l[n].selected = !0, u && (l[n].defaultSelected = !0);
          return;
        }
        t !== null || l[n].disabled || (t = l[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function _f(l, t, a) {
    if (t != null && (t = "" + et(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + et(a) : "";
  }
  function Of(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(o(92));
        if (D(u)) {
          if (1 < u.length) throw Error(o(93));
          u = u[0];
        }
        a = u;
      }
      a ??= "", t = a;
    }
    a = et(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u), Je(l);
  }
  function Ja(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Ty = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Mf(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || Ty.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function Df(l, t, a) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (l = l.style, a != null) {
      for (var u in a) !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
      for (var n in t) u = t[n], t.hasOwnProperty(n) && a[n] !== u && Mf(l, n, u);
    } else for (var e in t) t.hasOwnProperty(e) && Mf(l, e, t[e]);
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
  var _y = /* @__PURE__ */ new Map([
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
  ]), Oy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function pn(l) {
    return Oy.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Ht() {
  }
  var Fe = null;
  function ke(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var wa = null, Wa = null;
  function Uf(l) {
    var t = Va(l);
    if (t && (l = t.stateNode)) {
      var a = l[Gl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (we(l, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll('input[name="' + it("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var n = u[Gl] || null;
                if (!n) throw Error(o(90));
                we(u, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
              }
            }
            for (t = 0; t < a.length; t++) u = a[t], u.form === l.form && Af(u);
          }
          break l;
        case "textarea":
          _f(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && ra(l, !!a.multiple, t, !1);
      }
    }
  }
  var Ie = !1;
  function pf(l, t, a) {
    if (Ie) return l(t, a);
    Ie = !0;
    try {
      return l(t);
    } finally {
      if (Ie = !1, (wa !== null || Wa !== null) && (oe(), wa && (t = wa, l = Wa, Wa = wa = null, Uf(t), l)))
        for (t = 0; t < l.length; t++) Uf(l[t]);
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
  var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pe = !1;
  if (Nt) try {
    var Cu = {};
    Object.defineProperty(Cu, "passive", { get: function() {
      Pe = !0;
    } }), window.addEventListener("test", Cu, Cu), window.removeEventListener("test", Cu, Cu);
  } catch {
    Pe = !1;
  }
  var kt = null, li = null, Hn = null;
  function Hf() {
    if (Hn) return Hn;
    var l, t = li, a = t.length, u, n = "value" in kt ? kt.value : kt.textContent, e = n.length;
    for (l = 0; l < a && t[l] === n[l]; l++) ;
    var i = a - l;
    for (u = 1; u <= i && t[a - u] === n[e - u]; u++) ;
    return Hn = n.slice(l, 1 < u ? 1 - u : void 0);
  }
  function Nn(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Cn() {
    return !0;
  }
  function Nf() {
    return !1;
  }
  function Ql(l) {
    function t(a, u, n, e, i) {
      this._reactName = a, this._targetInst = n, this.type = u, this.nativeEvent = e, this.target = i, this.currentTarget = null;
      for (var c in l) l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(e) : e[c]);
      return this.isDefaultPrevented = (e.defaultPrevented != null ? e.defaultPrevented : e.returnValue === !1) ? Cn : Nf, this.isPropagationStopped = Nf, this;
    }
    return q(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Cn);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Cn);
      },
      persist: function() {
      },
      isPersistent: Cn
    }), t;
  }
  var Ta = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Rn = Ql(Ta), Ru = q({}, Ta, {
    view: 0,
    detail: 0
  }), My = Ql(Ru), ti, ai, Bu, Bn = q({}, Ru, {
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
      return "movementX" in l ? l.movementX : (l !== Bu && (Bu && l.type === "mousemove" ? (ti = l.screenX - Bu.screenX, ai = l.screenY - Bu.screenY) : ai = ti = 0, Bu = l), ti);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ai;
    }
  }), Cf = Ql(Bn), Dy = Ql(q({}, Bn, { dataTransfer: 0 })), ui = Ql(q({}, Ru, { relatedTarget: 0 })), Uy = Ql(q({}, Ta, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), py = Ql(q({}, Ta, { clipboardData: function(l) {
    return "clipboardData" in l ? l.clipboardData : window.clipboardData;
  } })), Rf = Ql(q({}, Ta, { data: 0 })), Hy = {
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
  }, Ny = {
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
  }, Cy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Ry(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Cy[l]) ? !!t[l] : !1;
  }
  function ni() {
    return Ry;
  }
  var By = Ql(q({}, Ru, {
    key: function(l) {
      if (l.key) {
        var t = Hy[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Nn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Ny[l.keyCode] || "Unidentified" : "";
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
  })), Bf = Ql(q({}, Bn, {
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
  })), qy = Ql(q({}, Ru, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ni
  })), Yy = Ql(q({}, Ta, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), jy = Ql(q({}, Bn, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  })), Gy = Ql(q({}, Ta, {
    newState: 0,
    oldState: 0
  })), Qy = [
    9,
    13,
    27,
    32
  ], ei = Nt && "CompositionEvent" in window, qu = null;
  Nt && "documentMode" in document && (qu = document.documentMode);
  var Xy = Nt && "TextEvent" in window && !qu, qf = Nt && (!ei || qu && 8 < qu && 11 >= qu), Yf = " ", jf = !1;
  function Gf(l, t) {
    switch (l) {
      case "keyup":
        return Qy.indexOf(t.keyCode) !== -1;
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
  function Qf(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var $a = !1;
  function Zy(l, t) {
    switch (l) {
      case "compositionend":
        return Qf(t);
      case "keypress":
        return t.which !== 32 ? null : (jf = !0, Yf);
      case "textInput":
        return l = t.data, l === Yf && jf ? null : l;
      default:
        return null;
    }
  }
  function Ly(l, t) {
    if ($a) return l === "compositionend" || !ei && Gf(l, t) ? (l = Hf(), Hn = li = kt = null, $a = !1, l) : null;
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
        return qf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Vy = {
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
  function Xf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Vy[l.type] : t === "textarea";
  }
  function Zf(l, t, a, u) {
    wa ? Wa ? Wa.push(u) : Wa = [u] : wa = u, t = Te(t, "onChange"), 0 < t.length && (a = new Rn("onChange", "change", null, a, u), l.push({
      event: a,
      listeners: t
    }));
  }
  var Yu = null, ju = null;
  function Ky(l) {
    zv(l, 0);
  }
  function qn(l) {
    if (Af(Hu(l))) return l;
  }
  function Lf(l, t) {
    if (l === "change") return t;
  }
  var Vf = !1;
  if (Nt) {
    var ii;
    if (Nt) {
      var ci = "oninput" in document;
      if (!ci) {
        var Kf = document.createElement("div");
        Kf.setAttribute("oninput", "return;"), ci = typeof Kf.oninput == "function";
      }
      ii = ci;
    } else ii = !1;
    Vf = ii && (!document.documentMode || 9 < document.documentMode);
  }
  function xf() {
    Yu && (Yu.detachEvent("onpropertychange", rf), ju = Yu = null);
  }
  function rf(l) {
    if (l.propertyName === "value" && qn(ju)) {
      var t = [];
      Zf(t, ju, l, ke(l)), pf(Ky, t);
    }
  }
  function xy(l, t, a) {
    l === "focusin" ? (xf(), Yu = t, ju = a, Yu.attachEvent("onpropertychange", rf)) : l === "focusout" && xf();
  }
  function ry(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return qn(ju);
  }
  function Jy(l, t) {
    if (l === "click") return qn(t);
  }
  function wy(l, t) {
    if (l === "input" || l === "change") return qn(t);
  }
  function Wy(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Pl = typeof Object.is == "function" ? Object.is : Wy;
  function Gu(l, t) {
    if (Pl(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
    var a = Object.keys(l), u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var n = a[u];
      if (!Xe.call(t, n) || !Pl(l[n], t[n])) return !1;
    }
    return !0;
  }
  function Jf(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function wf(l, t) {
    var a = Jf(l);
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
      a = Jf(a);
    }
  }
  function Wf(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Wf(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function $f(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Un(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Un(l.document);
    }
    return t;
  }
  function fi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var $y = Nt && "documentMode" in document && 11 >= document.documentMode, Fa = null, vi = null, Qu = null, yi = !1;
  function Ff(l, t, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    yi || Fa == null || Fa !== Un(u) || (u = Fa, "selectionStart" in u && fi(u) ? u = {
      start: u.selectionStart,
      end: u.selectionEnd
    } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Qu && Gu(Qu, u) || (Qu = u, u = Te(vi, "onSelect"), 0 < u.length && (t = new Rn("onSelect", "select", null, t, a), l.push({
      event: t,
      listeners: u
    }), t.target = Fa)));
  }
  function _a(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var ka = {
    animationend: _a("Animation", "AnimationEnd"),
    animationiteration: _a("Animation", "AnimationIteration"),
    animationstart: _a("Animation", "AnimationStart"),
    transitionrun: _a("Transition", "TransitionRun"),
    transitionstart: _a("Transition", "TransitionStart"),
    transitioncancel: _a("Transition", "TransitionCancel"),
    transitionend: _a("Transition", "TransitionEnd")
  }, mi = {}, kf = {};
  Nt && (kf = document.createElement("div").style, "AnimationEvent" in window || (delete ka.animationend.animation, delete ka.animationiteration.animation, delete ka.animationstart.animation), "TransitionEvent" in window || delete ka.transitionend.transition);
  function Oa(l) {
    if (mi[l]) return mi[l];
    if (!ka[l]) return l;
    var t = ka[l], a;
    for (a in t) if (t.hasOwnProperty(a) && a in kf) return mi[l] = t[a];
    return l;
  }
  var If = Oa("animationend"), Pf = Oa("animationiteration"), l0 = Oa("animationstart"), Fy = Oa("transitionrun"), ky = Oa("transitionstart"), Iy = Oa("transitioncancel"), t0 = Oa("transitionend"), a0 = /* @__PURE__ */ new Map(), di = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  di.push("scrollEnd");
  function zt(l, t) {
    a0.set(l, t), Aa(t, [l]);
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
  }, ct = [], Ia = 0, hi = 0;
  function jn() {
    for (var l = Ia, t = hi = Ia = 0; t < l; ) {
      var a = ct[t];
      ct[t++] = null;
      var u = ct[t];
      ct[t++] = null;
      var n = ct[t];
      ct[t++] = null;
      var e = ct[t];
      if (ct[t++] = null, u !== null && n !== null) {
        var i = u.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), u.pending = n;
      }
      e !== 0 && u0(a, n, e);
    }
  }
  function Gn(l, t, a, u) {
    ct[Ia++] = l, ct[Ia++] = t, ct[Ia++] = a, ct[Ia++] = u, hi |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
  }
  function si(l, t, a, u) {
    return Gn(l, t, a, u), Qn(l);
  }
  function Ma(l, t) {
    return Gn(l, null, null, t), Qn(l);
  }
  function u0(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var n = !1, e = l.return; e !== null; ) e.childLanes |= a, u = e.alternate, u !== null && (u.childLanes |= a), e.tag === 22 && (l = e.stateNode, l === null || l._visibility & 1 || (n = !0)), l = e, e = e.return;
    return l.tag === 3 ? (e = l.stateNode, n && t !== null && (n = 31 - Il(a), l = e.hiddenUpdates, u = l[n], u === null ? l[n] = [t] : u.push(t), t.lane = a | 536870912), e) : null;
  }
  function Qn(l) {
    if (50 < cn) throw cn = 0, _c = null, Error(o(185));
    for (var t = l.return; t !== null; ) l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Pa = {};
  function Py(l, t, a, u) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function lt(l, t, a, u) {
    return new Py(l, t, a, u);
  }
  function oi(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Ct(l, t) {
    var a = l.alternate;
    return a === null ? (a = lt(l.tag, t, l.key, l.mode), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function n0(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Xn(l, t, a, u, n, e) {
    var i = 0;
    if (u = l, typeof l == "function") oi(l) && (i = 1);
    else if (typeof l == "string") i = ed(l, a, N.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else l: switch (l) {
      case Tt:
        return l = lt(31, a, t, n), l.elementType = Tt, l.lanes = e, l;
      case xl:
        return Da(a.children, n, e, t);
      case wt:
        i = 8, n |= 24;
        break;
      case rl:
        return l = lt(12, a, t, n | 2), l.elementType = rl, l.lanes = e, l;
      case Jl:
        return l = lt(13, a, t, n), l.elementType = Jl, l.lanes = e, l;
      case wl:
        return l = lt(19, a, t, n), l.elementType = wl, l.lanes = e, l;
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
          case F:
            i = 14;
            break l;
          case jl:
            i = 16, u = null;
            break l;
        }
        i = 29, a = Error(o(130, l === null ? "null" : typeof l, "")), u = null;
    }
    return t = lt(i, a, t, n), t.elementType = l, t.type = u, t.lanes = e, t;
  }
  function Da(l, t, a, u) {
    return l = lt(7, l, u, t), l.lanes = a, l;
  }
  function Si(l, t, a) {
    return l = lt(6, l, null, t), l.lanes = a, l;
  }
  function e0(l) {
    var t = lt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function gi(l, t, a) {
    return t = lt(4, l.children !== null ? l.children : [], l.key, t), t.lanes = a, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var i0 = /* @__PURE__ */ new WeakMap();
  function ft(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = i0.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: uf(t)
      }, i0.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: uf(t)
    };
  }
  var lu = [], tu = 0, Zn = null, Xu = 0, vt = [], yt = 0, It = null, Ot = 1, Mt = "";
  function Rt(l, t) {
    lu[tu++] = Xu, lu[tu++] = Zn, Zn = l, Xu = t;
  }
  function c0(l, t, a) {
    vt[yt++] = Ot, vt[yt++] = Mt, vt[yt++] = It, It = l;
    var u = Ot;
    l = Mt;
    var n = 32 - Il(u) - 1;
    u &= ~(1 << n), a += 1;
    var e = 32 - Il(t) + n;
    if (30 < e) {
      var i = n - n % 5;
      e = (u & (1 << i) - 1).toString(32), u >>= i, n -= i, Ot = 1 << 32 - Il(t) + n | a << n | u, Mt = e + l;
    } else Ot = 1 << e | a << n | u, Mt = l;
  }
  function bi(l) {
    l.return !== null && (Rt(l, 1), c0(l, 1, 0));
  }
  function zi(l) {
    for (; l === Zn; ) Zn = lu[--tu], lu[tu] = null, Xu = lu[--tu], lu[tu] = null;
    for (; l === It; ) It = vt[--yt], vt[yt] = null, Mt = vt[--yt], vt[yt] = null, Ot = vt[--yt], vt[yt] = null;
  }
  function f0(l, t) {
    vt[yt++] = Ot, vt[yt++] = Mt, vt[yt++] = It, Ot = t.id, Mt = t.overflow, It = l;
  }
  var pl = null, ml = null, $ = !1, Pt = null, mt = !1, Ei = Error(o(519));
  function la(l) {
    throw Zu(ft(Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), l)), Ei;
  }
  function v0(l) {
    var t = l.stateNode, a = l.type, u = l.memoizedProps;
    switch (t[Ul] = l, t[Gl] = u, a) {
      case "dialog":
        J("cancel", t), J("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        J("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < vn.length; a++) J(vn[a], t);
        break;
      case "source":
        J("error", t);
        break;
      case "img":
      case "image":
      case "link":
        J("error", t), J("load", t);
        break;
      case "details":
        J("toggle", t);
        break;
      case "input":
        J("invalid", t), Tf(t, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, !0);
        break;
      case "select":
        J("invalid", t);
        break;
      case "textarea":
        J("invalid", t), Of(t, u.value, u.defaultValue, u.children);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || Ov(t.textContent, a) ? (u.popover != null && (J("beforetoggle", t), J("toggle", t)), u.onScroll != null && J("scroll", t), u.onScrollEnd != null && J("scrollend", t), u.onClick != null && (t.onclick = Ht), t = !0) : t = !1, t || la(l, !0);
  }
  function y0(l) {
    for (pl = l.return; pl; ) switch (pl.tag) {
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
        pl = pl.return;
    }
  }
  function au(l) {
    if (l !== pl) return !1;
    if (!$) return y0(l), $ = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Gc(l.type, l.memoizedProps)), a = !a), a && ml && la(l), y0(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      ml = Bv(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      ml = Bv(l);
    } else t === 27 ? (t = ml, da(l.type) ? (l = Vc, Vc = null, ml = l) : ml = t) : ml = pl ? st(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ua() {
    ml = pl = null, $ = !1;
  }
  function Ai() {
    var l = Pt;
    return l !== null && (Vl === null ? Vl = l : Vl.push.apply(Vl, l), Pt = null), l;
  }
  function Zu(l) {
    Pt === null ? Pt = [l] : Pt.push(l);
  }
  var Ti = y(null), pa = null, Bt = null;
  function ta(l, t, a) {
    O(Ti, t._currentValue), t._currentValue = a;
  }
  function qt(l) {
    l._currentValue = Ti.current, A(Ti);
  }
  function _i(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function Oi(l, t, a, u) {
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
            e.lanes |= a, c = e.alternate, c !== null && (c.lanes |= a), _i(e.return, a, l), u || (i = null);
            break l;
          }
          e = c.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(o(341));
        i.lanes |= a, e = i.alternate, e !== null && (e.lanes |= a), _i(i, a, l), i = null;
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
  function uu(l, t, a, u) {
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
          Pl(n.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (n === al.current) {
        if (i = n.alternate, i === null) throw Error(o(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (l !== null ? l.push(sn) : l = [sn]);
      }
      n = n.return;
    }
    l !== null && Oi(t, l, a, u), t.flags |= 262144;
  }
  function Ln(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Pl(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ha(l) {
    pa = l, Bt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Hl(l) {
    return m0(pa, l);
  }
  function Vn(l, t) {
    return pa === null && Ha(l), m0(l, t);
  }
  function m0(l, t) {
    var a = t._currentValue;
    if (t = {
      context: t,
      memoizedValue: a,
      next: null
    }, Bt === null) {
      if (l === null) throw Error(o(308));
      Bt = t, l.dependencies = {
        lanes: 0,
        firstContext: t
      }, l.flags |= 524288;
    } else Bt = Bt.next = t;
    return a;
  }
  var lm = typeof AbortController < "u" ? AbortController : function() {
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
  }, tm = U.unstable_scheduleCallback, am = U.unstable_NormalPriority, zl = {
    $$typeof: Ol,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Mi() {
    return {
      controller: new lm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Lu(l) {
    l.refCount--, l.refCount === 0 && tm(am, function() {
      l.controller.abort();
    });
  }
  var Vu = null, Di = 0, nu = 0, eu = null;
  function um(l, t) {
    if (Vu === null) {
      var a = Vu = [];
      Di = 0, nu = Hc(), eu = {
        status: "pending",
        value: void 0,
        then: function(u) {
          a.push(u);
        }
      };
    }
    return Di++, t.then(d0, d0), t;
  }
  function d0() {
    if (--Di === 0 && Vu !== null) {
      eu !== null && (eu.status = "fulfilled");
      var l = Vu;
      Vu = null, nu = 0, eu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function nm(l, t) {
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
  var h0 = _.S;
  _.S = function(l, t) {
    w1 = Fl(), typeof t == "object" && t !== null && typeof t.then == "function" && um(l, t), h0 !== null && h0(l, t);
  };
  var Na = y(null);
  function Ui() {
    var l = Na.current;
    return l !== null ? l : fl.pooledCache;
  }
  function Kn(l, t) {
    t === null ? O(Na, Na.current) : O(Na, t.pool);
  }
  function s0() {
    var l = Ui();
    return l === null ? null : {
      parent: zl._currentValue,
      pool: l
    };
  }
  var iu = Error(o(460)), pi = Error(o(474)), xn = Error(o(542)), rn = { then: function() {
  } };
  function o0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function S0(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Ht, Ht), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, b0(l), l;
      default:
        if (typeof t.status == "string") t.then(Ht, Ht);
        else {
          if (l = fl, l !== null && 100 < l.shellSuspendCounter) throw Error(o(482));
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
            throw l = t.reason, b0(l), l;
        }
        throw Ra = t, iu;
    }
  }
  function Ca(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ra = a, iu) : a;
    }
  }
  var Ra = null;
  function g0() {
    if (Ra === null) throw Error(o(459));
    var l = Ra;
    return Ra = null, l;
  }
  function b0(l) {
    if (l === iu || l === xn) throw Error(o(483));
  }
  var cu = null, Ku = 0;
  function Jn(l) {
    var t = Ku;
    return Ku += 1, cu === null && (cu = []), S0(cu, l, t);
  }
  function xu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function wn(l, t) {
    throw t.$$typeof === St ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(o(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
  }
  function z0(l) {
    function t(m, v) {
      if (l) {
        var h = m.deletions;
        h === null ? (m.deletions = [v], m.flags |= 16) : h.push(v);
      }
    }
    function a(m, v) {
      if (!l) return null;
      for (; v !== null; ) t(m, v), v = v.sibling;
      return null;
    }
    function u(m) {
      for (var v = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? v.set(m.key, m) : v.set(m.index, m), m = m.sibling;
      return v;
    }
    function n(m, v) {
      return m = Ct(m, v), m.index = 0, m.sibling = null, m;
    }
    function e(m, v, h) {
      return m.index = h, l ? (h = m.alternate, h !== null ? (h = h.index, h < v ? (m.flags |= 67108866, v) : h) : (m.flags |= 67108866, v)) : (m.flags |= 1048576, v);
    }
    function i(m) {
      return l && m.alternate === null && (m.flags |= 67108866), m;
    }
    function c(m, v, h, z) {
      return v === null || v.tag !== 6 ? (v = Si(h, m.mode, z), v.return = m, v) : (v = n(v, h), v.return = m, v);
    }
    function f(m, v, h, z) {
      var R = h.type;
      return R === xl ? b(m, v, h.props.children, z, h.key) : v !== null && (v.elementType === R || typeof R == "object" && R !== null && R.$$typeof === jl && Ca(R) === v.type) ? (v = n(v, h.props), xu(v, h), v.return = m, v) : (v = Xn(h.type, h.key, h.props, null, m.mode, z), xu(v, h), v.return = m, v);
    }
    function s(m, v, h, z) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== h.containerInfo || v.stateNode.implementation !== h.implementation ? (v = gi(h, m.mode, z), v.return = m, v) : (v = n(v, h.children || []), v.return = m, v);
    }
    function b(m, v, h, z, R) {
      return v === null || v.tag !== 7 ? (v = Da(h, m.mode, z, R), v.return = m, v) : (v = n(v, h), v.return = m, v);
    }
    function E(m, v, h) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return v = Si("" + v, m.mode, h), v.return = m, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Rl:
            return h = Xn(v.type, v.key, v.props, null, m.mode, h), xu(h, v), h.return = m, h;
          case Yl:
            return v = gi(v, m.mode, h), v.return = m, v;
          case jl:
            return v = Ca(v), E(m, v, h);
        }
        if (D(v) || _t(v)) return v = Da(v, m.mode, h, null), v.return = m, v;
        if (typeof v.then == "function") return E(m, Jn(v), h);
        if (v.$$typeof === Ol) return E(m, Vn(m, v), h);
        wn(m, v);
      }
      return null;
    }
    function S(m, v, h, z) {
      var R = v !== null ? v.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint") return R !== null ? null : c(m, v, "" + h, z);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Rl:
            return h.key === R ? f(m, v, h, z) : null;
          case Yl:
            return h.key === R ? s(m, v, h, z) : null;
          case jl:
            return h = Ca(h), S(m, v, h, z);
        }
        if (D(h) || _t(h)) return R !== null ? null : b(m, v, h, z, null);
        if (typeof h.then == "function") return S(m, v, Jn(h), z);
        if (h.$$typeof === Ol) return S(m, v, Vn(m, h), z);
        wn(m, h);
      }
      return null;
    }
    function g(m, v, h, z, R) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint") return m = m.get(h) || null, c(v, m, "" + z, R);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Rl:
            return m = m.get(z.key === null ? h : z.key) || null, f(v, m, z, R);
          case Yl:
            return m = m.get(z.key === null ? h : z.key) || null, s(v, m, z, R);
          case jl:
            return z = Ca(z), g(m, v, h, z, R);
        }
        if (D(z) || _t(z)) return m = m.get(h) || null, b(v, m, z, R, null);
        if (typeof z.then == "function") return g(m, v, h, Jn(z), R);
        if (z.$$typeof === Ol) return g(m, v, h, Vn(v, z), R);
        wn(v, z);
      }
      return null;
    }
    function p(m, v, h, z) {
      for (var R = null, k = null, H = v, L = v = 0, W = null; H !== null && L < h.length; L++) {
        H.index > L ? (W = H, H = null) : W = H.sibling;
        var I = S(m, H, h[L], z);
        if (I === null) {
          H === null && (H = W);
          break;
        }
        l && H && I.alternate === null && t(m, H), v = e(I, v, L), k === null ? R = I : k.sibling = I, k = I, H = W;
      }
      if (L === h.length) return a(m, H), $ && Rt(m, L), R;
      if (H === null) {
        for (; L < h.length; L++) H = E(m, h[L], z), H !== null && (v = e(H, v, L), k === null ? R = H : k.sibling = H, k = H);
        return $ && Rt(m, L), R;
      }
      for (H = u(H); L < h.length; L++) W = g(H, m, L, h[L], z), W !== null && (l && W.alternate !== null && H.delete(W.key === null ? L : W.key), v = e(W, v, L), k === null ? R = W : k.sibling = W, k = W);
      return l && H.forEach(function(ga) {
        return t(m, ga);
      }), $ && Rt(m, L), R;
    }
    function Y(m, v, h, z) {
      if (h == null) throw Error(o(151));
      for (var R = null, k = null, H = v, L = v = 0, W = null, I = h.next(); H !== null && !I.done; L++, I = h.next()) {
        H.index > L ? (W = H, H = null) : W = H.sibling;
        var ga = S(m, H, I.value, z);
        if (ga === null) {
          H === null && (H = W);
          break;
        }
        l && H && ga.alternate === null && t(m, H), v = e(ga, v, L), k === null ? R = ga : k.sibling = ga, k = ga, H = W;
      }
      if (I.done) return a(m, H), $ && Rt(m, L), R;
      if (H === null) {
        for (; !I.done; L++, I = h.next()) I = E(m, I.value, z), I !== null && (v = e(I, v, L), k === null ? R = I : k.sibling = I, k = I);
        return $ && Rt(m, L), R;
      }
      for (H = u(H); !I.done; L++, I = h.next()) I = g(H, m, L, I.value, z), I !== null && (l && I.alternate !== null && H.delete(I.key === null ? L : I.key), v = e(I, v, L), k === null ? R = I : k.sibling = I, k = I);
      return l && H.forEach(function(zd) {
        return t(m, zd);
      }), $ && Rt(m, L), R;
    }
    function cl(m, v, h, z) {
      if (typeof h == "object" && h !== null && h.type === xl && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Rl:
            l: {
              for (var R = h.key; v !== null; ) {
                if (v.key === R) {
                  if (R = h.type, R === xl) {
                    if (v.tag === 7) {
                      a(m, v.sibling), z = n(v, h.props.children), z.return = m, m = z;
                      break l;
                    }
                  } else if (v.elementType === R || typeof R == "object" && R !== null && R.$$typeof === jl && Ca(R) === v.type) {
                    a(m, v.sibling), z = n(v, h.props), xu(z, h), z.return = m, m = z;
                    break l;
                  }
                  a(m, v);
                  break;
                } else t(m, v);
                v = v.sibling;
              }
              h.type === xl ? (z = Da(h.props.children, m.mode, z, h.key), z.return = m, m = z) : (z = Xn(h.type, h.key, h.props, null, m.mode, z), xu(z, h), z.return = m, m = z);
            }
            return i(m);
          case Yl:
            l: {
              for (R = h.key; v !== null; ) {
                if (v.key === R) if (v.tag === 4 && v.stateNode.containerInfo === h.containerInfo && v.stateNode.implementation === h.implementation) {
                  a(m, v.sibling), z = n(v, h.children || []), z.return = m, m = z;
                  break l;
                } else {
                  a(m, v);
                  break;
                }
                else t(m, v);
                v = v.sibling;
              }
              z = gi(h, m.mode, z), z.return = m, m = z;
            }
            return i(m);
          case jl:
            return h = Ca(h), cl(m, v, h, z);
        }
        if (D(h)) return p(m, v, h, z);
        if (_t(h)) {
          if (R = _t(h), typeof R != "function") throw Error(o(150));
          return h = R.call(h), Y(m, v, h, z);
        }
        if (typeof h.then == "function") return cl(m, v, Jn(h), z);
        if (h.$$typeof === Ol) return cl(m, v, Vn(m, h), z);
        wn(m, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, v !== null && v.tag === 6 ? (a(m, v.sibling), z = n(v, h), z.return = m, m = z) : (a(m, v), z = Si(h, m.mode, z), z.return = m, m = z), i(m)) : a(m, v);
    }
    return function(m, v, h, z) {
      try {
        Ku = 0;
        var R = cl(m, v, h, z);
        return cu = null, R;
      } catch (H) {
        if (H === iu || H === xn) throw H;
        var k = lt(29, H, null, m.mode);
        return k.lanes = z, k.return = m, k;
      }
    };
  }
  var Ba = z0(!0), E0 = z0(!1), aa = !1;
  function Hi(l) {
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
  function qa(l) {
    return {
      lane: l,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Ya(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (tl & 2) !== 0) {
      var n = u.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), u.pending = t, t = Qn(l), u0(l, null, a), t;
    }
    return Gn(l, u, t, a), Qn(l);
  }
  function ru(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, yf(l, a);
    }
  }
  function Ci(l, t) {
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
  var Ri = !1;
  function Ju() {
    if (Ri) {
      var l = eu;
      if (l !== null) throw l;
    }
  }
  function wu(l, t, a, u) {
    Ri = !1;
    var n = l.updateQueue;
    aa = !1;
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
        var S = c.lane & -536870913, g = S !== c.lane;
        if (g ? (w & S) === S : (u & S) === S) {
          S !== 0 && S === nu && (Ri = !0), b !== null && (b = b.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var p = l, Y = c;
            S = t;
            var cl = a;
            switch (Y.tag) {
              case 1:
                if (p = Y.payload, typeof p == "function") {
                  E = p.call(cl, E, S);
                  break l;
                }
                E = p;
                break l;
              case 3:
                p.flags = p.flags & -65537 | 128;
              case 0:
                if (p = Y.payload, S = typeof p == "function" ? p.call(cl, E, S) : p, S == null) break l;
                E = q({}, E, S);
                break l;
              case 2:
                aa = !0;
            }
          }
          S = c.callback, S !== null && (l.flags |= 64, g && (l.flags |= 8192), g = n.callbacks, g === null ? n.callbacks = [S] : g.push(S));
        } else g = {
          lane: S,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null
        }, b === null ? (s = b = g, f = E) : b = b.next = g, i |= S;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null) break;
          g = c, c = g.next, g.next = null, n.lastBaseUpdate = g, n.shared.pending = null;
        }
      } while (!0);
      b === null && (f = E), n.baseState = f, n.firstBaseUpdate = s, n.lastBaseUpdate = b, e === null && (n.shared.lanes = 0), ca |= i, l.lanes = i, l.memoizedState = E;
    }
  }
  function A0(l, t) {
    if (typeof l != "function") throw Error(o(191, l));
    l.call(t);
  }
  function T0(l, t) {
    var a = l.callbacks;
    if (a !== null) for (l.callbacks = null, l = 0; l < a.length; l++) A0(a[l], t);
  }
  var fu = y(null), Wn = y(0);
  function _0(l, t) {
    l = Kt, O(Wn, l), O(fu, t), Kt = l | t.baseLanes;
  }
  function Bi() {
    O(Wn, Kt), O(fu, fu.current);
  }
  function qi() {
    Kt = Wn.current, A(fu), A(Wn);
  }
  var tt = y(null), dt = null;
  function ua(l) {
    var t = l.alternate;
    O(gl, gl.current & 1), O(tt, l), dt === null && (t === null || fu.current !== null || t.memoizedState !== null) && (dt = l);
  }
  function Yi(l) {
    O(gl, gl.current), O(tt, l), dt === null && (dt = l);
  }
  function O0(l) {
    l.tag === 22 ? (O(gl, gl.current), O(tt, l), dt === null && (dt = l)) : na(l);
  }
  function na() {
    O(gl, gl.current), O(tt, tt.current);
  }
  function at(l) {
    A(tt), dt === l && (dt = null), A(gl);
  }
  var gl = y(0);
  function $n(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Zc(a) || Lc(a))) return t;
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
  var Yt = 0, Q = null, el = null, El = null, Fn = !1, vu = !1, ja = !1, kn = 0, Wu = 0, yu = null, em = 0;
  function sl() {
    throw Error(o(321));
  }
  function ji(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++) if (!Pl(l[a], t[a])) return !1;
    return !0;
  }
  function Gi(l, t, a, u, n, e) {
    return Yt = e, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _.H = l === null || l.memoizedState === null ? c1 : Ii, ja = !1, e = a(u, n), ja = !1, vu && (e = D0(t, a, u, n)), M0(l), e;
  }
  function M0(l) {
    _.H = ku;
    var t = el !== null && el.next !== null;
    if (Yt = 0, El = el = Q = null, Fn = !1, Wu = 0, yu = null, t) throw Error(o(300));
    l === null || Al || (l = l.dependencies, l !== null && Ln(l) && (Al = !0));
  }
  function D0(l, t, a, u) {
    Q = l;
    var n = 0;
    do {
      if (vu && (yu = null), Wu = 0, vu = !1, 25 <= n) throw Error(o(301));
      if (n += 1, El = el = null, l.updateQueue != null) {
        var e = l.updateQueue;
        e.lastEffect = null, e.events = null, e.stores = null, e.memoCache != null && (e.memoCache.index = 0);
      }
      _.H = f1, e = t(a, u);
    } while (vu);
    return e;
  }
  function im() {
    var l = _.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? $u(t) : t, l = l.useState()[0], (el !== null ? el.memoizedState : null) !== l && (Q.flags |= 1024), t;
  }
  function Qi() {
    var l = kn !== 0;
    return kn = 0, l;
  }
  function Xi(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function Zi(l) {
    if (Fn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Fn = !1;
    }
    Yt = 0, El = el = Q = null, vu = !1, Wu = kn = 0, yu = null;
  }
  function ql() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return El === null ? Q.memoizedState = El = l : El = El.next = l, El;
  }
  function bl() {
    if (el === null) {
      var l = Q.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = el.next;
    var t = El === null ? Q.memoizedState : El.next;
    if (t !== null) El = t, el = l;
    else {
      if (l === null)
        throw Q.alternate === null ? Error(o(467)) : Error(o(310));
      el = l, l = {
        memoizedState: el.memoizedState,
        baseState: el.baseState,
        baseQueue: el.baseQueue,
        queue: el.queue,
        next: null
      }, El === null ? Q.memoizedState = El = l : El = El.next = l;
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
  function $u(l) {
    var t = Wu;
    return Wu += 1, yu === null && (yu = []), l = S0(yu, l, t), t = Q, (El === null ? t.memoizedState : El.next) === null && (t = t.alternate, _.H = t === null || t.memoizedState === null ? c1 : Ii), l;
  }
  function Pn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return $u(l);
      if (l.$$typeof === Ol) return Hl(l);
    }
    throw Error(o(438, String(l)));
  }
  function Li(l) {
    var t = null, a = Q.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var u = Q.alternate;
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
    }, a === null && (a = In(), Q.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0) for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = ba;
    return t.index++, a;
  }
  function jt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function le(l) {
    return Vi(bl(), el, l);
  }
  function Vi(l, t, a) {
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
      var c = i = null, f = null, s = t, b = !1;
      do {
        var E = s.lane & -536870913;
        if (E !== s.lane ? (w & E) === E : (Yt & E) === E) {
          var S = s.revertLane;
          if (S === 0) f !== null && (f = f.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: s.action,
            hasEagerState: s.hasEagerState,
            eagerState: s.eagerState,
            next: null
          }), E === nu && (b = !0);
          else if ((Yt & S) === S) {
            s = s.next, S === nu && (b = !0);
            continue;
          } else E = {
            lane: 0,
            revertLane: s.revertLane,
            gesture: null,
            action: s.action,
            hasEagerState: s.hasEagerState,
            eagerState: s.eagerState,
            next: null
          }, f === null ? (c = f = E, i = e) : f = f.next = E, Q.lanes |= S, ca |= S;
          E = s.action, ja && a(e, E), e = s.hasEagerState ? s.eagerState : a(e, E);
        } else S = {
          lane: E,
          revertLane: s.revertLane,
          gesture: s.gesture,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        }, f === null ? (c = f = S, i = e) : f = f.next = S, Q.lanes |= E, ca |= E;
        s = s.next;
      } while (s !== null && s !== t);
      if (f === null ? i = e : f.next = c, !Pl(e, l.memoizedState) && (Al = !0, b && (a = eu, a !== null))) throw a;
      l.memoizedState = e, l.baseState = i, l.baseQueue = f, u.lastRenderedState = e;
    }
    return n === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function Ki(l) {
    var t = bl(), a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch, n = a.pending, e = t.memoizedState;
    if (n !== null) {
      a.pending = null;
      var i = n = n.next;
      do
        e = l(e, i.action), i = i.next;
      while (i !== n);
      Pl(e, t.memoizedState) || (Al = !0), t.memoizedState = e, t.baseQueue === null && (t.baseState = e), a.lastRenderedState = e;
    }
    return [e, u];
  }
  function U0(l, t, a) {
    var u = Q, n = bl(), e = $;
    if (e) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var i = !Pl((el || n).memoizedState, a);
    if (i && (n.memoizedState = a, Al = !0), n = n.queue, Ji(N0.bind(null, u, n, l), [l]), n.getSnapshot !== t || i || El !== null && El.memoizedState.tag & 1) {
      if (u.flags |= 2048, mu(9, { destroy: void 0 }, H0.bind(null, u, n, a, t), null), fl === null) throw Error(o(349));
      e || (Yt & 127) !== 0 || p0(u, t, a);
    }
    return a;
  }
  function p0(l, t, a) {
    l.flags |= 16384, l = {
      getSnapshot: t,
      value: a
    }, t = Q.updateQueue, t === null ? (t = In(), Q.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function H0(l, t, a, u) {
    t.value = a, t.getSnapshot = u, C0(t) && R0(l);
  }
  function N0(l, t, a) {
    return a(function() {
      C0(t) && R0(l);
    });
  }
  function C0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Pl(l, a);
    } catch {
      return !0;
    }
  }
  function R0(l) {
    var t = Ma(l, 2);
    t !== null && Kl(t, l, 2);
  }
  function xi(l) {
    var t = ql();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), ja) {
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
  function B0(l, t, a, u) {
    return l.baseState = a, Vi(l, el, typeof u == "function" ? u : jt);
  }
  function cm(l, t, a, u, n) {
    if (ue(l)) throw Error(o(485));
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
      _.T !== null ? a(!0) : e.isTransition = !1, u(e), a = t.pending, a === null ? (e.next = t.pending = e, q0(t, e)) : (e.next = a.next, t.pending = a.next = e);
    }
  }
  function q0(l, t) {
    var a = t.action, u = t.payload, n = l.state;
    if (t.isTransition) {
      var e = _.T, i = {};
      _.T = i;
      try {
        var c = a(n, u), f = _.S;
        f !== null && f(i, c), Y0(l, t, c);
      } catch (s) {
        ri(l, t, s);
      } finally {
        e !== null && i.types !== null && (e.types = i.types), _.T = e;
      }
    } else try {
      e = a(n, u), Y0(l, t, e);
    } catch (s) {
      ri(l, t, s);
    }
  }
  function Y0(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(u) {
      j0(l, t, u);
    }, function(u) {
      return ri(l, t, u);
    }) : j0(l, t, a);
  }
  function j0(l, t, a) {
    t.status = "fulfilled", t.value = a, G0(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, q0(l, a)));
  }
  function ri(l, t, a) {
    var u = l.pending;
    if (l.pending = null, u !== null) {
      u = u.next;
      do
        t.status = "rejected", t.reason = a, G0(t), t = t.next;
      while (t !== u);
    }
    l.action = null;
  }
  function G0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Q0(l, t) {
    return t;
  }
  function X0(l, t) {
    if ($) {
      var a = fl.formState;
      if (a !== null) {
        l: {
          var u = Q;
          if ($) {
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
                ml = st(n.nextSibling), u = n.data === "F!";
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
    return a = ql(), a.memoizedState = a.baseState = t, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Q0,
      lastRenderedState: t
    }, a.queue = u, a = n1.bind(null, Q, u), u.dispatch = a, u = xi(!1), e = ki.bind(null, Q, !1, u.queue), u = ql(), n = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, u.queue = n, a = cm.bind(null, Q, n, e, a), n.dispatch = a, u.memoizedState = l, [
      t,
      a,
      !1
    ];
  }
  function Z0(l) {
    return L0(bl(), el, l);
  }
  function L0(l, t, a) {
    if (t = Vi(l, t, Q0)[0], l = le(jt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var u = $u(t);
    } catch (i) {
      throw i === iu ? xn : i;
    }
    else u = t;
    t = bl();
    var n = t.queue, e = n.dispatch;
    return a !== t.memoizedState && (Q.flags |= 2048, mu(9, { destroy: void 0 }, fm.bind(null, n, a), null)), [
      u,
      e,
      l
    ];
  }
  function fm(l, t) {
    l.action = t;
  }
  function V0(l) {
    var t = bl(), a = el;
    if (a !== null) return L0(t, a, l);
    bl(), t = t.memoizedState, a = bl();
    var u = a.queue.dispatch;
    return a.memoizedState = l, [
      t,
      u,
      !1
    ];
  }
  function mu(l, t, a, u) {
    return l = {
      tag: l,
      create: a,
      deps: u,
      inst: t,
      next: null
    }, t = Q.updateQueue, t === null && (t = In(), Q.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
  }
  function K0() {
    return bl().memoizedState;
  }
  function te(l, t, a, u) {
    var n = ql();
    Q.flags |= l, n.memoizedState = mu(1 | t, { destroy: void 0 }, a, u === void 0 ? null : u);
  }
  function ae(l, t, a, u) {
    var n = bl();
    u = u === void 0 ? null : u;
    var e = n.memoizedState.inst;
    el !== null && u !== null && ji(u, el.memoizedState.deps) ? n.memoizedState = mu(t, e, a, u) : (Q.flags |= l, n.memoizedState = mu(1 | t, e, a, u));
  }
  function x0(l, t) {
    te(8390656, 8, l, t);
  }
  function Ji(l, t) {
    ae(2048, 8, l, t);
  }
  function vm(l) {
    Q.flags |= 4;
    var t = Q.updateQueue;
    if (t === null) t = In(), Q.updateQueue = t, t.events = [l];
    else {
      var a = t.events;
      a === null ? t.events = [l] : a.push(l);
    }
  }
  function r0(l) {
    var t = bl().memoizedState;
    return vm({
      ref: t,
      nextImpl: l
    }), function() {
      if ((tl & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function J0(l, t) {
    return ae(4, 2, l, t);
  }
  function w0(l, t) {
    return ae(4, 4, l, t);
  }
  function W0(l, t) {
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
  function $0(l, t, a) {
    a = a != null ? a.concat([l]) : null, ae(4, 4, W0.bind(null, t, l), a);
  }
  function wi() {
  }
  function F0(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && ji(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l);
  }
  function k0(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && ji(t, u[1])) return u[0];
    if (u = l(), ja) {
      $t(!0);
      try {
        l();
      } finally {
        $t(!1);
      }
    }
    return a.memoizedState = [u, t], u;
  }
  function Wi(l, t, a) {
    return a === void 0 || (Yt & 1073741824) !== 0 && (w & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = $1(), Q.lanes |= l, ca |= l, a);
  }
  function I0(l, t, a, u) {
    return Pl(a, t) ? a : fu.current !== null ? (l = Wi(l, a, u), Pl(l, t) || (Al = !0), l) : (Yt & 42) === 0 || (Yt & 1073741824) !== 0 && (w & 261930) === 0 ? (Al = !0, l.memoizedState = a) : (l = $1(), Q.lanes |= l, ca |= l, t);
  }
  function P0(l, t, a, u, n) {
    var e = M.p;
    M.p = e !== 0 && 8 > e ? e : 8;
    var i = _.T, c = {};
    _.T = c, ki(l, !1, t, a);
    try {
      var f = n(), s = _.S;
      s !== null && s(c, f), f !== null && typeof f == "object" && typeof f.then == "function" ? Fu(l, t, nm(f, u), ht(l)) : Fu(l, t, u, ht(l));
    } catch (b) {
      Fu(l, t, {
        then: function() {
        },
        status: "rejected",
        reason: b
      }, ht());
    } finally {
      M.p = e, i !== null && c.types !== null && (i.types = c.types), _.T = i;
    }
  }
  function ym() {
  }
  function $i(l, t, a, u) {
    if (l.tag !== 5) throw Error(o(476));
    var n = l1(l).queue;
    P0(l, n, t, ll, a === null ? ym : function() {
      return t1(l), a(u);
    });
  }
  function l1(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ll,
      baseState: ll,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jt,
        lastRenderedState: ll
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
  function t1(l) {
    var t = l1(l);
    t.next === null && (t = l.alternate.memoizedState), Fu(l, t.next.queue, {}, ht());
  }
  function Fi() {
    return Hl(sn);
  }
  function a1() {
    return bl().memoizedState;
  }
  function u1() {
    return bl().memoizedState;
  }
  function mm(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = ht();
          l = qa(a);
          var u = Ya(t, l, a);
          u !== null && (Kl(u, t, a), ru(u, t, a)), t = { cache: Mi() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function dm(l, t, a) {
    var u = ht();
    a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ue(l) ? e1(t, a) : (a = si(l, t, a, u), a !== null && (Kl(a, l, u), i1(a, t, u)));
  }
  function n1(l, t, a) {
    Fu(l, t, a, ht());
  }
  function Fu(l, t, a, u) {
    var n = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ue(l)) e1(t, n);
    else {
      var e = l.alternate;
      if (l.lanes === 0 && (e === null || e.lanes === 0) && (e = t.lastRenderedReducer, e !== null)) try {
        var i = t.lastRenderedState, c = e(i, a);
        if (n.hasEagerState = !0, n.eagerState = c, Pl(c, i)) return Gn(l, t, n, 0), fl === null && jn(), !1;
      } catch {
      }
      if (a = si(l, t, n, u), a !== null) return Kl(a, l, u), i1(a, t, u), !0;
    }
    return !1;
  }
  function ki(l, t, a, u) {
    if (u = {
      lane: 2,
      revertLane: Hc(),
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ue(l)) {
      if (t) throw Error(o(479));
    } else t = si(l, a, u, 2), t !== null && Kl(t, l, 2);
  }
  function ue(l) {
    var t = l.alternate;
    return l === Q || t !== null && t === Q;
  }
  function e1(l, t) {
    vu = Fn = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function i1(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, yf(l, a);
    }
  }
  var ku = {
    readContext: Hl,
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
  ku.useEffectEvent = sl;
  var c1 = {
    readContext: Hl,
    use: Pn,
    useCallback: function(l, t) {
      return ql().memoizedState = [l, t === void 0 ? null : t], l;
    },
    useContext: Hl,
    useEffect: x0,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, te(4194308, 4, W0.bind(null, t, l), a);
    },
    useLayoutEffect: function(l, t) {
      return te(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      te(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var a = ql();
      t = t === void 0 ? null : t;
      var u = l();
      if (ja) {
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
      var u = ql();
      if (a !== void 0) {
        var n = a(t);
        if (ja) {
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
      }, u.queue = l, l = l.dispatch = dm.bind(null, Q, l), [u.memoizedState, l];
    },
    useRef: function(l) {
      var t = ql();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = xi(l);
      var t = l.queue, a = n1.bind(null, Q, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: wi,
    useDeferredValue: function(l, t) {
      return Wi(ql(), l, t);
    },
    useTransition: function() {
      var l = xi(!1);
      return l = P0.bind(null, Q, l.queue, !0, !1), ql().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var u = Q, n = ql();
      if ($) {
        if (a === void 0) throw Error(o(407));
        a = a();
      } else {
        if (a = t(), fl === null) throw Error(o(349));
        (w & 127) !== 0 || p0(u, t, a);
      }
      n.memoizedState = a;
      var e = {
        value: a,
        getSnapshot: t
      };
      return n.queue = e, x0(N0.bind(null, u, e, l), [l]), u.flags |= 2048, mu(9, { destroy: void 0 }, H0.bind(null, u, e, a, t), null), a;
    },
    useId: function() {
      var l = ql(), t = fl.identifierPrefix;
      if ($) {
        var a = Mt, u = Ot;
        a = (u & ~(1 << 32 - Il(u) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = kn++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else a = em++, t = "_" + t + "r_" + a.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: Fi,
    useFormState: X0,
    useActionState: X0,
    useOptimistic: function(l) {
      var t = ql();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = ki.bind(null, Q, !0, a), a.dispatch = t, [l, t];
    },
    useMemoCache: Li,
    useCacheRefresh: function() {
      return ql().memoizedState = mm.bind(null, Q);
    },
    useEffectEvent: function(l) {
      var t = ql(), a = { impl: l };
      return t.memoizedState = a, function() {
        if ((tl & 2) !== 0) throw Error(o(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Ii = {
    readContext: Hl,
    use: Pn,
    useCallback: F0,
    useContext: Hl,
    useEffect: Ji,
    useImperativeHandle: $0,
    useInsertionEffect: J0,
    useLayoutEffect: w0,
    useMemo: k0,
    useReducer: le,
    useRef: K0,
    useState: function() {
      return le(jt);
    },
    useDebugValue: wi,
    useDeferredValue: function(l, t) {
      return I0(bl(), el.memoizedState, l, t);
    },
    useTransition: function() {
      var l = le(jt)[0], t = bl().memoizedState;
      return [typeof l == "boolean" ? l : $u(l), t];
    },
    useSyncExternalStore: U0,
    useId: a1,
    useHostTransitionStatus: Fi,
    useFormState: Z0,
    useActionState: Z0,
    useOptimistic: function(l, t) {
      return B0(bl(), el, l, t);
    },
    useMemoCache: Li,
    useCacheRefresh: u1
  };
  Ii.useEffectEvent = r0;
  var f1 = {
    readContext: Hl,
    use: Pn,
    useCallback: F0,
    useContext: Hl,
    useEffect: Ji,
    useImperativeHandle: $0,
    useInsertionEffect: J0,
    useLayoutEffect: w0,
    useMemo: k0,
    useReducer: Ki,
    useRef: K0,
    useState: function() {
      return Ki(jt);
    },
    useDebugValue: wi,
    useDeferredValue: function(l, t) {
      var a = bl();
      return el === null ? Wi(a, l, t) : I0(a, el.memoizedState, l, t);
    },
    useTransition: function() {
      var l = Ki(jt)[0], t = bl().memoizedState;
      return [typeof l == "boolean" ? l : $u(l), t];
    },
    useSyncExternalStore: U0,
    useId: a1,
    useHostTransitionStatus: Fi,
    useFormState: V0,
    useActionState: V0,
    useOptimistic: function(l, t) {
      var a = bl();
      return el !== null ? B0(a, el, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: Li,
    useCacheRefresh: u1
  };
  f1.useEffectEvent = r0;
  function Pi(l, t, a, u) {
    t = l.memoizedState, a = a(u, t), a = a == null ? t : q({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var lc = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var u = ht(), n = qa(u);
      n.payload = t, a != null && (n.callback = a), t = Ya(l, n, u), t !== null && (Kl(t, l, u), ru(t, l, u));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var u = ht(), n = qa(u);
      n.tag = 1, n.payload = t, a != null && (n.callback = a), t = Ya(l, n, u), t !== null && (Kl(t, l, u), ru(t, l, u));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = ht(), u = qa(a);
      u.tag = 2, t != null && (u.callback = t), t = Ya(l, u, a), t !== null && (Kl(t, l, a), ru(t, l, a));
    }
  };
  function v1(l, t, a, u, n, e, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, e, i) : t.prototype && t.prototype.isPureReactComponent ? !Gu(a, u) || !Gu(n, e) : !0;
  }
  function y1(l, t, a, u) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && lc.enqueueReplaceState(t, t.state, null);
  }
  function Ga(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if (l = l.defaultProps) {
      a === t && (a = q({}, a));
      for (var n in l) a[n] === void 0 && (a[n] = l[n]);
    }
    return a;
  }
  function hm(l) {
    Yn(l);
  }
  function sm(l) {
    console.error(l);
  }
  function om(l) {
    Yn(l);
  }
  function ne(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function m1(l, t, a) {
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
  function tc(l, t, a) {
    return a = qa(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      ne(l, t);
    }, a;
  }
  function d1(l) {
    return l = qa(l), l.tag = 3, l;
  }
  function h1(l, t, a, u) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var e = u.value;
      l.payload = function() {
        return n(e);
      }, l.callback = function() {
        m1(t, a, u);
      };
    }
    var i = a.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      m1(t, a, u), typeof n != "function" && (fa === null ? fa = /* @__PURE__ */ new Set([this]) : fa.add(this));
      var c = u.stack;
      this.componentDidCatch(u.value, { componentStack: c !== null ? c : "" });
    });
  }
  function Sm(l, t, a, u, n) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (t = a.alternate, t !== null && uu(t, a, n, !0), a = tt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return dt === null ? Se() : a.alternate === null && ol === 0 && (ol = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, u === rn ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), Dc(l, u, n)), !1;
          case 22:
            return a.flags |= 65536, u === rn ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), Dc(l, u, n)), !1;
        }
        throw Error(o(435, a.tag));
      }
      return Dc(l, u, n), Se(), !1;
    }
    if ($) return t = tt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, u !== Ei && (l = Error(o(422), { cause: u }), Zu(ft(l, a)))) : (u !== Ei && (t = Error(o(423), { cause: u }), Zu(ft(t, a))), l = l.current.alternate, l.flags |= 65536, n &= -n, l.lanes |= n, u = ft(u, a), n = tc(l.stateNode, u, n), Ci(l, n), ol !== 4 && (ol = 2)), !1;
    var e = Error(o(520), { cause: u });
    if (e = ft(e, a), en === null ? en = [e] : en.push(e), ol !== 4 && (ol = 2), t === null) return !0;
    u = ft(u, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = n & -n, a.lanes |= l, l = tc(a.stateNode, u, l), Ci(a, l), !1;
        case 1:
          if (t = a.type, e = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || e !== null && typeof e.componentDidCatch == "function" && (fa === null || !fa.has(e)))) return a.flags |= 65536, n &= -n, a.lanes |= n, n = d1(n), h1(n, l, a, u), Ci(a, n), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var ac = Error(o(461)), Al = !1;
  function Nl(l, t, a, u) {
    t.child = l === null ? E0(t, null, a, u) : Ba(t, l.child, a, u);
  }
  function s1(l, t, a, u, n) {
    a = a.render;
    var e = t.ref;
    if ("ref" in u) {
      var i = {};
      for (var c in u) c !== "ref" && (i[c] = u[c]);
    } else i = u;
    return Ha(t), u = Gi(l, t, a, i, e, n), c = Qi(), l !== null && !Al ? (Xi(l, t, n), Gt(l, t, n)) : ($ && c && bi(t), t.flags |= 1, Nl(l, t, u, n), t.child);
  }
  function o1(l, t, a, u, n) {
    if (l === null) {
      var e = a.type;
      return typeof e == "function" && !oi(e) && e.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = e, S1(l, t, e, u, n)) : (l = Xn(a.type, null, u, t, t.mode, n), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (e = l.child, !yc(l, n)) {
      var i = e.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Gu, a(i, u) && l.ref === t.ref) return Gt(l, t, n);
    }
    return t.flags |= 1, l = Ct(e, u), l.ref = t.ref, l.return = t, t.child = l;
  }
  function S1(l, t, a, u, n) {
    if (l !== null) {
      var e = l.memoizedProps;
      if (Gu(e, u) && l.ref === t.ref) if (Al = !1, t.pendingProps = u = e, yc(l, n)) (l.flags & 131072) !== 0 && (Al = !0);
      else return t.lanes = l.lanes, Gt(l, t, n);
    }
    return uc(l, t, a, u, n);
  }
  function g1(l, t, a, u) {
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
        return b1(l, t, e, a, u);
      }
      if ((a & 536870912) !== 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, l !== null && Kn(t, e !== null ? e.cachePool : null), e !== null ? _0(t, e) : Bi(), O0(t);
      else return u = t.lanes = 536870912, b1(l, t, e !== null ? e.baseLanes | a : a, a, u);
    } else e !== null ? (Kn(t, e.cachePool), _0(t, e), na(t), t.memoizedState = null) : (l !== null && Kn(t, null), Bi(), na(t));
    return Nl(l, t, n, a), t.child;
  }
  function Iu(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function b1(l, t, a, u, n) {
    var e = Ui();
    return e = e === null ? null : {
      parent: zl._currentValue,
      pool: e
    }, t.memoizedState = {
      baseLanes: a,
      cachePool: e
    }, l !== null && Kn(t, null), Bi(), O0(t), l !== null && uu(l, t, u, !0), t.childLanes = n, null;
  }
  function ee(l, t) {
    return t = ce({
      mode: t.mode,
      children: t.children
    }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function z1(l, t, a) {
    return Ba(t, l.child, null, a), l = ee(t, t.pendingProps), l.flags |= 2, at(t), t.memoizedState = null, l;
  }
  function gm(l, t, a) {
    var u = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if ($) {
        if (u.mode === "hidden") return l = ee(t, u), t.lanes = 536870912, Iu(null, l);
        if (Yi(t), (l = ml) ? (l = Rv(l, mt), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? {
            id: Ot,
            overflow: Mt
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = e0(l), a.return = t, t.child = a, pl = t, ml = null)) : l = null, l === null) throw la(t);
        return t.lanes = 536870912, null;
      }
      return ee(t, u);
    }
    var e = l.memoizedState;
    if (e !== null) {
      var i = e.dehydrated;
      if (Yi(t), n) if (t.flags & 256) t.flags &= -257, t = z1(l, t, a);
      else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
      else throw Error(o(558));
      else if (Al || uu(l, t, a, !1), n = (a & l.childLanes) !== 0, Al || n) {
        if (u = fl, u !== null && (i = mf(u, a), i !== 0 && i !== e.retryLane)) throw e.retryLane = i, Ma(l, i), Kl(u, l, i), ac;
        Se(), t = z1(l, t, a);
      } else l = e.treeContext, ml = st(i.nextSibling), pl = t, $ = !0, Pt = null, mt = !1, l !== null && f0(t, l), t = ee(t, u), t.flags |= 4096;
      return t;
    }
    return l = Ct(l.child, {
      mode: u.mode,
      children: u.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function ie(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(o(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function uc(l, t, a, u, n) {
    return Ha(t), a = Gi(l, t, a, u, void 0, n), u = Qi(), l !== null && !Al ? (Xi(l, t, n), Gt(l, t, n)) : ($ && u && bi(t), t.flags |= 1, Nl(l, t, a, n), t.child);
  }
  function E1(l, t, a, u, n, e) {
    return Ha(t), t.updateQueue = null, a = D0(t, u, a, n), M0(l), u = Qi(), l !== null && !Al ? (Xi(l, t, e), Gt(l, t, e)) : ($ && u && bi(t), t.flags |= 1, Nl(l, t, a, e), t.child);
  }
  function A1(l, t, a, u, n) {
    if (Ha(t), t.stateNode === null) {
      var e = Pa, i = a.contextType;
      typeof i == "object" && i !== null && (e = Hl(i)), e = new a(u, e), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = lc, t.stateNode = e, e._reactInternals = t, e = t.stateNode, e.props = u, e.state = t.memoizedState, e.refs = {}, Hi(t), i = a.contextType, e.context = typeof i == "object" && i !== null ? Hl(i) : Pa, e.state = t.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (Pi(t, a, i, u), e.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof e.getSnapshotBeforeUpdate == "function" || typeof e.UNSAFE_componentWillMount != "function" && typeof e.componentWillMount != "function" || (i = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), i !== e.state && lc.enqueueReplaceState(e, e.state, null), wu(t, u, e, n), Ju(), e.state = t.memoizedState), typeof e.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
    } else if (l === null) {
      e = t.stateNode;
      var c = t.memoizedProps, f = Ga(a, c);
      e.props = f;
      var s = e.context, b = a.contextType;
      i = Pa, typeof b == "object" && b !== null && (i = Hl(b));
      var E = a.getDerivedStateFromProps;
      b = typeof E == "function" || typeof e.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, b || typeof e.UNSAFE_componentWillReceiveProps != "function" && typeof e.componentWillReceiveProps != "function" || (c || s !== i) && y1(t, e, u, i), aa = !1;
      var S = t.memoizedState;
      e.state = S, wu(t, u, e, n), Ju(), s = t.memoizedState, c || S !== s || aa ? (typeof E == "function" && (Pi(t, a, E, u), s = t.memoizedState), (f = aa || v1(t, a, f, u, S, s, i)) ? (b || typeof e.UNSAFE_componentWillMount != "function" && typeof e.componentWillMount != "function" || (typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount()), typeof e.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof e.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = s), e.props = u, e.state = s, e.context = i, u = f) : (typeof e.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
    } else {
      e = t.stateNode, Ni(l, t), i = t.memoizedProps, b = Ga(a, i), e.props = b, E = t.pendingProps, S = e.context, s = a.contextType, f = Pa, typeof s == "object" && s !== null && (f = Hl(s)), c = a.getDerivedStateFromProps, (s = typeof c == "function" || typeof e.getSnapshotBeforeUpdate == "function") || typeof e.UNSAFE_componentWillReceiveProps != "function" && typeof e.componentWillReceiveProps != "function" || (i !== E || S !== f) && y1(t, e, u, f), aa = !1, S = t.memoizedState, e.state = S, wu(t, u, e, n), Ju();
      var g = t.memoizedState;
      i !== E || S !== g || aa || l !== null && l.dependencies !== null && Ln(l.dependencies) ? (typeof c == "function" && (Pi(t, a, c, u), g = t.memoizedState), (b = aa || v1(t, a, b, u, S, g, f) || l !== null && l.dependencies !== null && Ln(l.dependencies)) ? (s || typeof e.UNSAFE_componentWillUpdate != "function" && typeof e.componentWillUpdate != "function" || (typeof e.componentWillUpdate == "function" && e.componentWillUpdate(u, g, f), typeof e.UNSAFE_componentWillUpdate == "function" && e.UNSAFE_componentWillUpdate(u, g, f)), typeof e.componentDidUpdate == "function" && (t.flags |= 4), typeof e.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof e.componentDidUpdate != "function" || i === l.memoizedProps && S === l.memoizedState || (t.flags |= 4), typeof e.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && S === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = g), e.props = u, e.state = g, e.context = f, u = b) : (typeof e.componentDidUpdate != "function" || i === l.memoizedProps && S === l.memoizedState || (t.flags |= 4), typeof e.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && S === l.memoizedState || (t.flags |= 1024), u = !1);
    }
    return e = u, ie(l, t), u = (t.flags & 128) !== 0, e || u ? (e = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : e.render(), t.flags |= 1, l !== null && u ? (t.child = Ba(t, l.child, null, n), t.child = Ba(t, null, a, n)) : Nl(l, t, a, n), t.memoizedState = e.state, l = t.child) : l = Gt(l, t, n), l;
  }
  function T1(l, t, a, u) {
    return Ua(), t.flags |= 256, Nl(l, t, a, u), t.child;
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
      cachePool: s0()
    };
  }
  function ic(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= nt), l;
  }
  function _1(l, t, a) {
    var u = t.pendingProps, n = !1, e = (t.flags & 128) !== 0, i;
    if ((i = e) || (i = l !== null && l.memoizedState === null ? !1 : (gl.current & 2) !== 0), i && (n = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if ($) {
        if (n ? ua(t) : na(t), (l = ml) ? (l = Rv(l, mt), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? {
            id: Ot,
            overflow: Mt
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = e0(l), a.return = t, t.child = a, pl = t, ml = null)) : l = null, l === null) throw la(t);
        return Lc(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = u.children;
      return u = u.fallback, n ? (na(t), n = t.mode, c = ce({
        mode: "hidden",
        children: c
      }, n), u = Da(u, n, a, null), c.return = t, u.return = t, c.sibling = u, t.child = c, u = t.child, u.memoizedState = ec(a), u.childLanes = ic(l, i, a), t.memoizedState = nc, Iu(null, u)) : (ua(t), cc(t, c));
    }
    var f = l.memoizedState;
    if (f !== null && (c = f.dehydrated, c !== null)) {
      if (e) t.flags & 256 ? (ua(t), t.flags &= -257, t = fc(l, t, a)) : t.memoizedState !== null ? (na(t), t.child = l.child, t.flags |= 128, t = null) : (na(t), c = u.fallback, n = t.mode, u = ce({
        mode: "visible",
        children: u.children
      }, n), c = Da(c, n, a, null), c.flags |= 2, u.return = t, c.return = t, u.sibling = c, t.child = u, Ba(t, l.child, null, a), u = t.child, u.memoizedState = ec(a), u.childLanes = ic(l, i, a), t.memoizedState = nc, t = Iu(null, u));
      else if (ua(t), Lc(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var s = i.dgst;
        i = s, u = Error(o(419)), u.stack = "", u.digest = i, Zu({
          value: u,
          source: null,
          stack: null
        }), t = fc(l, t, a);
      } else if (Al || uu(l, t, a, !1), i = (a & l.childLanes) !== 0, Al || i) {
        if (i = fl, i !== null && (u = mf(i, a), u !== 0 && u !== f.retryLane)) throw f.retryLane = u, Ma(l, u), Kl(i, l, u), ac;
        Zc(c) || Se(), t = fc(l, t, a);
      } else Zc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, ml = st(c.nextSibling), pl = t, $ = !0, Pt = null, mt = !1, l !== null && f0(t, l), t = cc(t, u.children), t.flags |= 4096);
      return t;
    }
    return n ? (na(t), c = u.fallback, n = t.mode, f = l.child, s = f.sibling, u = Ct(f, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = f.subtreeFlags & 65011712, s !== null ? c = Ct(s, c) : (c = Da(c, n, a, null), c.flags |= 2), c.return = t, u.return = t, u.sibling = c, t.child = u, Iu(null, u), u = t.child, c = l.child.memoizedState, c === null ? c = ec(a) : (n = c.cachePool, n !== null ? (f = zl._currentValue, n = n.parent !== f ? {
      parent: f,
      pool: f
    } : n) : n = s0(), c = {
      baseLanes: c.baseLanes | a,
      cachePool: n
    }), u.memoizedState = c, u.childLanes = ic(l, i, a), t.memoizedState = nc, Iu(l.child, u)) : (ua(t), a = l.child, l = a.sibling, a = Ct(a, {
      mode: "visible",
      children: u.children
    }), a.return = t, a.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = a, t.memoizedState = null, a);
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
  function fc(l, t, a) {
    return Ba(t, l.child, null, a), l = cc(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
  }
  function O1(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), _i(l.return, t, a);
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
  function M1(l, t, a) {
    var u = t.pendingProps, n = u.revealOrder, e = u.tail;
    u = u.children;
    var i = gl.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, O(gl, i), Nl(l, t, u, a), u = $ ? Xu : 0, !c && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
      if (l.tag === 13) l.memoizedState !== null && O1(l, a, t);
      else if (l.tag === 19) O1(l, a, t);
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
        for (a = t.child, n = null; a !== null; ) l = a.alternate, l !== null && $n(l) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = t.child, t.child = null) : (n = a.sibling, a.sibling = null), vc(t, !1, n, a, e, u);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, n = t.child, t.child = null; n !== null; ) {
          if (l = n.alternate, l !== null && $n(l) === null) {
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
  function Gt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), ca |= t.lanes, (a & t.childLanes) === 0) if (l !== null) {
      if (uu(l, t, a, !1), (a & t.childLanes) === 0) return null;
    } else return null;
    if (l !== null && t.child !== l.child) throw Error(o(153));
    if (t.child !== null) {
      for (l = t.child, a = Ct(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; ) l = l.sibling, a = a.sibling = Ct(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function yc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ln(l)));
  }
  function bm(l, t, a) {
    switch (t.tag) {
      case 3:
        Bl(t, t.stateNode.containerInfo), ta(t, zl, l.memoizedState.cache), Ua();
        break;
      case 27:
      case 5:
        Ou(t);
        break;
      case 4:
        Bl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ta(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, Yi(t), null;
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (ua(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? _1(l, t, a) : (ua(t), l = Gt(l, t, a), l !== null ? l.sibling : null);
        ua(t);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (u = (a & t.childLanes) !== 0, u || (uu(l, t, a, !1), u = (a & t.childLanes) !== 0), n) {
          if (u) return M1(l, t, a);
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), O(gl, gl.current), u) break;
        return null;
      case 22:
        return t.lanes = 0, g1(l, t, a, t.pendingProps);
      case 24:
        ta(t, zl, l.memoizedState.cache);
    }
    return Gt(l, t, a);
  }
  function D1(l, t, a) {
    if (l !== null) if (l.memoizedProps !== t.pendingProps) Al = !0;
    else {
      if (!yc(l, a) && (t.flags & 128) === 0) return Al = !1, bm(l, t, a);
      Al = (l.flags & 131072) !== 0;
    }
    else Al = !1, $ && (t.flags & 1048576) !== 0 && c0(t, Xu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (l = Ca(t.elementType), t.type = l, typeof l == "function") oi(l) ? (u = Ga(l, u), t.tag = 1, t = A1(null, t, l, u, a)) : (t.tag = 0, t = uc(null, t, l, u, a));
          else {
            if (l != null) {
              var n = l.$$typeof;
              if (n === gt) {
                t.tag = 11, t = s1(null, t, l, u, a);
                break l;
              } else if (n === F) {
                t.tag = 14, t = o1(null, t, l, u, a);
                break l;
              }
            }
            throw t = bt(l) || l, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return uc(l, t, t.type, t.pendingProps, a);
      case 1:
        return u = t.type, n = Ga(u, t.pendingProps), A1(l, t, u, n, a);
      case 3:
        l: {
          if (Bl(t, t.stateNode.containerInfo), l === null) throw Error(o(387));
          u = t.pendingProps;
          var e = t.memoizedState;
          n = e.element, Ni(l, t), wu(t, u, null, a);
          var i = t.memoizedState;
          if (u = i.cache, ta(t, zl, u), u !== e.cache && Oi(t, [zl], a, !0), Ju(), u = i.element, e.isDehydrated) if (e = {
            element: u,
            isDehydrated: !1,
            cache: i.cache
          }, t.updateQueue.baseState = e, t.memoizedState = e, t.flags & 256) {
            t = T1(l, t, u, a);
            break l;
          } else if (u !== n) {
            n = ft(Error(o(424)), t), Zu(n), t = T1(l, t, u, a);
            break l;
          } else
            for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, ml = st(l.firstChild), pl = t, $ = !0, Pt = null, mt = !0, a = E0(t, null, u, a), t.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (Ua(), u === n) {
              t = Gt(l, t, a);
              break l;
            }
            Nl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return ie(l, t), l === null ? (a = Qv(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : $ || (a = t.type, l = t.pendingProps, u = _e(x.current).createElement(a), u[Ul] = t, u[Gl] = l, Cl(u, a, l), Ml(u), t.stateNode = u) : t.memoizedState = Qv(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
      case 27:
        return Ou(t), l === null && $ && (u = t.stateNode = Yv(t.type, t.pendingProps, x.current), pl = t, mt = !0, n = ml, da(t.type) ? (Vc = n, ml = st(u.firstChild)) : ml = n), Nl(l, t, t.pendingProps.children, a), ie(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && $ && ((n = u = ml) && (u = Jm(u, t.type, t.pendingProps, mt), u !== null ? (t.stateNode = u, pl = t, ml = st(u.firstChild), mt = !1, n = !0) : n = !1), n || la(t)), Ou(t), n = t.type, e = t.pendingProps, i = l !== null ? l.memoizedProps : null, u = e.children, Gc(n, e) ? u = null : i !== null && Gc(n, i) && (t.flags |= 32), t.memoizedState !== null && (n = Gi(l, t, im, null, null, a), sn._currentValue = n), ie(l, t), Nl(l, t, u, a), t.child;
      case 6:
        return l === null && $ && ((l = a = ml) && (a = wm(a, t.pendingProps, mt), a !== null ? (t.stateNode = a, pl = t, ml = null, l = !0) : l = !1), l || la(t)), null;
      case 13:
        return _1(l, t, a);
      case 4:
        return Bl(t, t.stateNode.containerInfo), u = t.pendingProps, l === null ? t.child = Ba(t, null, u, a) : Nl(l, t, u, a), t.child;
      case 11:
        return s1(l, t, t.type, t.pendingProps, a);
      case 7:
        return Nl(l, t, t.pendingProps, a), t.child;
      case 8:
        return Nl(l, t, t.pendingProps.children, a), t.child;
      case 12:
        return Nl(l, t, t.pendingProps.children, a), t.child;
      case 10:
        return u = t.pendingProps, ta(t, t.type, u.value), Nl(l, t, u.children, a), t.child;
      case 9:
        return n = t.type._context, u = t.pendingProps.children, Ha(t), n = Hl(n), u = u(n), t.flags |= 1, Nl(l, t, u, a), t.child;
      case 14:
        return o1(l, t, t.type, t.pendingProps, a);
      case 15:
        return S1(l, t, t.type, t.pendingProps, a);
      case 19:
        return M1(l, t, a);
      case 31:
        return gm(l, t, a);
      case 22:
        return g1(l, t, a, t.pendingProps);
      case 24:
        return Ha(t), u = Hl(zl), l === null ? (n = Ui(), n === null && (n = fl, e = Mi(), n.pooledCache = e, e.refCount++, e !== null && (n.pooledCacheLanes |= a), n = e), t.memoizedState = {
          parent: u,
          cache: n
        }, Hi(t), ta(t, zl, n)) : ((l.lanes & a) !== 0 && (Ni(l, t), wu(t, null, null, a), Ju()), n = l.memoizedState, e = t.memoizedState, n.parent !== u ? (n = {
          parent: u,
          cache: u
        }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), ta(t, zl, u)) : (u = e.cache, ta(t, zl, u), u !== n.cache && Oi(t, [zl], a, !0))), Nl(l, t, t.pendingProps.children, a), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Qt(l) {
    l.flags |= 4;
  }
  function mc(l, t, a, u, n) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (n & 335544128) === n) if (l.stateNode.complete) l.flags |= 8192;
      else if (P1()) l.flags |= 8192;
      else throw Ra = rn, pi;
    } else l.flags &= -16777217;
  }
  function U1(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (l.flags |= 16777216, !Kv(t)) if (P1()) l.flags |= 8192;
    else throw Ra = rn, pi;
  }
  function fe(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? ff() : 536870912, l.lanes |= t, ou |= t);
  }
  function Pu(l, t) {
    if (!$) switch (l.tailMode) {
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
  function dl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, u = 0;
    if (t) for (var n = l.child; n !== null; ) a |= n.lanes | n.childLanes, u |= n.subtreeFlags & 65011712, u |= n.flags & 65011712, n.return = l, n = n.sibling;
    else for (n = l.child; n !== null; ) a |= n.lanes | n.childLanes, u |= n.subtreeFlags, u |= n.flags, n.return = l, n = n.sibling;
    return l.subtreeFlags |= u, l.childLanes = a, t;
  }
  function zm(l, t, a) {
    var u = t.pendingProps;
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
        return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), qt(zl), Sl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (au(t) ? Qt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ai())), dl(t), null;
      case 26:
        var n = t.type, e = t.memoizedState;
        return l === null ? (Qt(t), e !== null ? (dl(t), U1(t, e)) : (dl(t), mc(t, n, null, u, a))) : e ? e !== l.memoizedState ? (Qt(t), dl(t), U1(t, e)) : (dl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== u && Qt(t), dl(t), mc(t, n, l, u, a)), null;
      case 27:
        if (bn(t), a = x.current, n = t.type, l !== null && t.stateNode != null) l.memoizedProps !== u && Qt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(o(166));
            return dl(t), null;
          }
          l = N.current, au(t) ? v0(t, l) : (l = Yv(n, u, a), t.stateNode = l, Qt(t));
        }
        return dl(t), null;
      case 5:
        if (bn(t), n = t.type, l !== null && t.stateNode != null) l.memoizedProps !== u && Qt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(o(166));
            return dl(t), null;
          }
          if (e = N.current, au(t)) v0(t, e);
          else {
            var i = _e(x.current);
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
            e[Ul] = t, e[Gl] = u;
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
            l: switch (Cl(e, n, u), n) {
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
            u && Qt(t);
          }
        }
        return dl(t), mc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Qt(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(o(166));
          if (l = x.current, au(t)) {
            if (l = t.stateNode, a = t.memoizedProps, u = null, n = pl, n !== null) switch (n.tag) {
              case 27:
              case 5:
                u = n.memoizedProps;
            }
            l[Ul] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || Ov(l.nodeValue, a)), l || la(t, !0);
          } else l = _e(l).createTextNode(u), l[Ul] = t, t.stateNode = l;
        }
        return dl(t), null;
      case 31:
        if (a = t.memoizedState, l === null || l.memoizedState !== null) {
          if (u = au(t), a !== null) {
            if (l === null) {
              if (!u) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
              l[Ul] = t;
            } else Ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            dl(t), l = !1;
          } else a = Ai(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = !0;
          if (!l)
            return t.flags & 256 ? (at(t), t) : (at(t), null);
          if ((t.flags & 128) !== 0) throw Error(o(558));
        }
        return dl(t), null;
      case 13:
        if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (n = au(t), u !== null && u.dehydrated !== null) {
            if (l === null) {
              if (!n) throw Error(o(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(o(317));
              n[Ul] = t;
            } else Ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            dl(t), n = !1;
          } else n = Ai(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (at(t), t) : (at(t), null);
        }
        return at(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = u !== null, l = l !== null && l.memoizedState !== null, a && (u = t.child, n = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (n = u.alternate.memoizedState.cachePool.pool), e = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (e = u.memoizedState.cachePool.pool), e !== n && (u.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), fe(t, t.updateQueue), dl(t), null);
      case 4:
        return Sl(), l === null && Ev(t.stateNode.containerInfo), dl(t), null;
      case 10:
        return qt(t.type), dl(t), null;
      case 19:
        if (A(gl), u = t.memoizedState, u === null) return dl(t), null;
        if (n = (t.flags & 128) !== 0, e = u.rendering, e === null) if (n) Pu(u, !1);
        else {
          if (ol !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
            if (e = $n(l), e !== null) {
              for (t.flags |= 128, Pu(u, !1), l = e.updateQueue, t.updateQueue = l, fe(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; ) n0(a, l), a = a.sibling;
              return O(gl, gl.current & 1 | 2), $ && Rt(t, u.treeForkCount), t.child;
            }
            l = l.sibling;
          }
          u.tail !== null && Fl() > he && (t.flags |= 128, n = !0, Pu(u, !1), t.lanes = 4194304);
        }
        else {
          if (!n) if (l = $n(e), l !== null) {
            if (t.flags |= 128, n = !0, l = l.updateQueue, t.updateQueue = l, fe(t, l), Pu(u, !0), u.tail === null && u.tailMode === "hidden" && !e.alternate && !$) return dl(t), null;
          } else 2 * Fl() - u.renderingStartTime > he && a !== 536870912 && (t.flags |= 128, n = !0, Pu(u, !1), t.lanes = 4194304);
          u.isBackwards ? (e.sibling = t.child, t.child = e) : (l = u.last, l !== null ? l.sibling = e : t.child = e, u.last = e);
        }
        return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = Fl(), l.sibling = null, a = gl.current, O(gl, n ? a & 1 | 2 : a & 1), $ && Rt(t, u.treeForkCount), l) : (dl(t), null);
      case 22:
      case 23:
        return at(t), qi(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dl(t), a = t.updateQueue, a !== null && fe(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && A(Na), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), qt(zl), dl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Em(l, t) {
    switch (zi(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return qt(zl), Sl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return bn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (at(t), t.alternate === null) throw Error(o(340));
          Ua();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (at(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          Ua();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return A(gl), null;
      case 4:
        return Sl(), null;
      case 10:
        return qt(t.type), null;
      case 22:
      case 23:
        return at(t), qi(), l !== null && A(Na), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return qt(zl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function p1(l, t) {
    switch (zi(t), t.tag) {
      case 3:
        qt(zl), Sl();
        break;
      case 26:
      case 27:
      case 5:
        bn(t);
        break;
      case 4:
        Sl();
        break;
      case 31:
        t.memoizedState !== null && at(t);
        break;
      case 13:
        at(t);
        break;
      case 19:
        A(gl);
        break;
      case 10:
        qt(t.type);
        break;
      case 22:
      case 23:
        at(t), qi(), l !== null && A(Na);
        break;
      case 24:
        qt(zl);
    }
  }
  function ln(l, t) {
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
      nl(t, t.return, c);
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
              var f = a, s = c;
              try {
                s();
              } catch (b) {
                nl(n, f, b);
              }
            }
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (b) {
      nl(t, t.return, b);
    }
  }
  function H1(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        T0(t, a);
      } catch (u) {
        nl(l, l.return, u);
      }
    }
  }
  function N1(l, t, a) {
    a.props = Ga(l.type, l.memoizedProps), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (u) {
      nl(l, t, u);
    }
  }
  function tn(l, t) {
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
      nl(l, t, n);
    }
  }
  function Dt(l, t) {
    var a = l.ref, u = l.refCleanup;
    if (a !== null) if (typeof u == "function") try {
      u();
    } catch (n) {
      nl(l, t, n);
    } finally {
      l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
    }
    else if (typeof a == "function") try {
      a(null);
    } catch (n) {
      nl(l, t, n);
    }
    else a.current = null;
  }
  function C1(l) {
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
      nl(l, l.return, n);
    }
  }
  function dc(l, t, a) {
    try {
      var u = l.stateNode;
      Zm(u, l.type, a, t), u[Gl] = t;
    } catch (n) {
      nl(l, l.return, n);
    }
  }
  function R1(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && da(l.type) || l.tag === 4;
  }
  function hc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || R1(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && da(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function sc(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6) l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Ht));
    else if (u !== 4 && (u === 27 && da(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null)) for (sc(l, t, a), l = l.sibling; l !== null; ) sc(l, t, a), l = l.sibling;
  }
  function ve(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6) l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && (u === 27 && da(l.type) && (a = l.stateNode), l = l.child, l !== null)) for (ve(l, t, a), l = l.sibling; l !== null; ) ve(l, t, a), l = l.sibling;
  }
  function B1(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var u = l.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
      Cl(t, u, a), t[Ul] = l, t[Gl] = a;
    } catch (e) {
      nl(l, l.return, e);
    }
  }
  var Xt = !1, Tl = !1, oc = !1, q1 = typeof WeakSet == "function" ? WeakSet : Set, Dl = null;
  function Am(l, t) {
    if (l = l.containerInfo, Yc = Ne, l = $f(l), fi(l)) {
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
          var i = 0, c = -1, f = -1, s = 0, b = 0, E = l, S = null;
          t: for (; ; ) {
            for (var g; E !== a || n !== 0 && E.nodeType !== 3 || (c = i + n), E !== e || u !== 0 && E.nodeType !== 3 || (f = i + u), E.nodeType === 3 && (i += E.nodeValue.length), (g = E.firstChild) !== null; )
              S = E, E = g;
            for (; ; ) {
              if (E === l) break t;
              if (S === a && ++s === n && (c = i), S === e && ++b === u && (f = i), (g = E.nextSibling) !== null) break;
              E = S, S = E.parentNode;
            }
            E = g;
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
    for (jc = {
      focusedElem: l,
      selectionRange: a
    }, Ne = !1, Dl = t; Dl !== null; ) if (t = Dl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null) l.return = t, Dl = l;
    else for (; Dl !== null; ) {
      switch (t = Dl, e = t.alternate, l = t.flags, t.tag) {
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
              var p = Ga(a.type, n);
              l = u.getSnapshotBeforeUpdate(p, e), u.__reactInternalSnapshotBeforeUpdate = l;
            } catch (Y) {
              nl(a, a.return, Y);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9) Xc(l);
            else if (a === 1) switch (l.nodeName) {
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
          if ((l & 1024) !== 0) throw Error(o(163));
      }
      if (l = t.sibling, l !== null) {
        l.return = t.return, Dl = l;
        break;
      }
      Dl = t.return;
    }
  }
  function Y1(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Lt(l, a), u & 4 && ln(5, a);
        break;
      case 1:
        if (Lt(l, a), u & 4) if (l = a.stateNode, t === null) try {
          l.componentDidMount();
        } catch (i) {
          nl(a, a.return, i);
        }
        else {
          var n = Ga(a.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            l.componentDidUpdate(n, t, l.__reactInternalSnapshotBeforeUpdate);
          } catch (i) {
            nl(a, a.return, i);
          }
        }
        u & 64 && H1(a), u & 512 && tn(a, a.return);
        break;
      case 3:
        if (Lt(l, a), u & 64 && (l = a.updateQueue, l !== null)) {
          if (t = null, a.child !== null) switch (a.child.tag) {
            case 27:
            case 5:
              t = a.child.stateNode;
              break;
            case 1:
              t = a.child.stateNode;
          }
          try {
            T0(l, t);
          } catch (i) {
            nl(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && u & 4 && B1(a);
      case 26:
      case 5:
        Lt(l, a), t === null && u & 4 && C1(a), u & 512 && tn(a, a.return);
        break;
      case 12:
        Lt(l, a);
        break;
      case 31:
        Lt(l, a), u & 4 && Q1(l, a);
        break;
      case 13:
        Lt(l, a), u & 4 && X1(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = Nm.bind(null, a), Wm(l, a))));
        break;
      case 22:
        if (u = a.memoizedState !== null || Xt, !u) {
          t = t !== null && t.memoizedState !== null || Tl, n = Xt;
          var e = Tl;
          Xt = u, (Tl = t) && !e ? Vt(l, a, (a.subtreeFlags & 8772) !== 0) : Lt(l, a), Xt = n, Tl = e;
        }
        break;
      case 30:
        break;
      default:
        Lt(l, a);
    }
  }
  function j1(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, j1(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && re(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var hl = null, Xl = !1;
  function Zt(l, t, a) {
    for (a = a.child; a !== null; ) G1(l, t, a), a = a.sibling;
  }
  function G1(l, t, a) {
    if (kl && typeof kl.onCommitFiberUnmount == "function") try {
      kl.onCommitFiberUnmount(Mu, a);
    } catch {
    }
    switch (a.tag) {
      case 26:
        Tl || Dt(a, t), Zt(l, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Tl || Dt(a, t);
        var u = hl, n = Xl;
        da(a.type) && (hl = a.stateNode, Xl = !1), Zt(l, t, a), mn(a.stateNode), hl = u, Xl = n;
        break;
      case 5:
        Tl || Dt(a, t);
      case 6:
        if (u = hl, n = Xl, hl = null, Zt(l, t, a), hl = u, Xl = n, hl !== null) if (Xl) try {
          (hl.nodeType === 9 ? hl.body : hl.nodeName === "HTML" ? hl.ownerDocument.body : hl).removeChild(a.stateNode);
        } catch (e) {
          nl(a, t, e);
        }
        else try {
          hl.removeChild(a.stateNode);
        } catch (e) {
          nl(a, t, e);
        }
        break;
      case 18:
        hl !== null && (Xl ? (l = hl, Nv(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, a.stateNode), _u(l)) : Nv(hl, a.stateNode));
        break;
      case 4:
        u = hl, n = Xl, hl = a.stateNode.containerInfo, Xl = !0, Zt(l, t, a), hl = u, Xl = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ea(2, a, t), Tl || ea(4, a, t), Zt(l, t, a);
        break;
      case 1:
        Tl || (Dt(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && N1(a, t, u)), Zt(l, t, a);
        break;
      case 21:
        Zt(l, t, a);
        break;
      case 22:
        Tl = (u = Tl) || a.memoizedState !== null, Zt(l, t, a), Tl = u;
        break;
      default:
        Zt(l, t, a);
    }
  }
  function Q1(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        _u(l);
      } catch (a) {
        nl(t, t.return, a);
      }
    }
  }
  function X1(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
      _u(l);
    } catch (a) {
      nl(t, t.return, a);
    }
  }
  function Tm(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new q1()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new q1()), t;
      default:
        throw Error(o(435, l.tag));
    }
  }
  function ye(l, t) {
    var a = Tm(l);
    t.forEach(function(u) {
      if (!a.has(u)) {
        a.add(u);
        var n = Cm.bind(null, l, u);
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
      if (hl === null) throw Error(o(160));
      G1(e, i, n), hl = null, Xl = !1, e = n.alternate, e !== null && (e.return = null), n.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) Z1(t, l), t = t.sibling;
  }
  var Et = null;
  function Z1(l, t) {
    var a = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Zl(t, l), Ll(l), u & 4 && (ea(3, l, l.return), ln(3, l), ea(5, l, l.return));
        break;
      case 1:
        Zl(t, l), Ll(l), u & 512 && (Tl || a === null || Dt(a, a.return)), u & 64 && Xt && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
        break;
      case 26:
        var n = Et;
        if (Zl(t, l), Ll(l), u & 512 && (Tl || a === null || Dt(a, a.return)), u & 4) {
          var e = a !== null ? a.memoizedState : null;
          if (u = l.memoizedState, a === null) if (u === null) if (l.stateNode === null) {
            l: {
              u = l.type, a = l.memoizedProps, n = n.ownerDocument || n;
              t: switch (u) {
                case "title":
                  e = n.getElementsByTagName("title")[0], (!e || e[pu] || e[Ul] || e.namespaceURI === "http://www.w3.org/2000/svg" || e.hasAttribute("itemprop")) && (e = n.createElement(u), n.head.insertBefore(e, n.querySelector("head > title"))), Cl(e, u, a), e[Ul] = l, Ml(e), u = e;
                  break l;
                case "link":
                  var i = Lv("link", "href", n).get(u + (a.href || ""));
                  if (i) {
                    for (var c = 0; c < i.length; c++) if (e = i[c], e.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && e.getAttribute("rel") === (a.rel == null ? null : a.rel) && e.getAttribute("title") === (a.title == null ? null : a.title) && e.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                      i.splice(c, 1);
                      break t;
                    }
                  }
                  e = n.createElement(u), Cl(e, u, a), n.head.appendChild(e);
                  break;
                case "meta":
                  if (i = Lv("meta", "content", n).get(u + (a.content || ""))) {
                    for (c = 0; c < i.length; c++) if (e = i[c], e.getAttribute("content") === (a.content == null ? null : "" + a.content) && e.getAttribute("name") === (a.name == null ? null : a.name) && e.getAttribute("property") === (a.property == null ? null : a.property) && e.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && e.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                      i.splice(c, 1);
                      break t;
                    }
                  }
                  e = n.createElement(u), Cl(e, u, a), n.head.appendChild(e);
                  break;
                default:
                  throw Error(o(468, u));
              }
              e[Ul] = l, Ml(e), u = e;
            }
            l.stateNode = u;
          } else Vv(n, l.type, l.stateNode);
          else l.stateNode = Zv(n, u, l.memoizedProps);
          else e !== u ? (e === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : e.count--, u === null ? Vv(n, l.type, l.stateNode) : Zv(n, u, l.memoizedProps)) : u === null && l.stateNode !== null && dc(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        Zl(t, l), Ll(l), u & 512 && (Tl || a === null || Dt(a, a.return)), a !== null && u & 4 && dc(l, l.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (Zl(t, l), Ll(l), u & 512 && (Tl || a === null || Dt(a, a.return)), l.flags & 32) {
          n = l.stateNode;
          try {
            Ja(n, "");
          } catch (p) {
            nl(l, l.return, p);
          }
        }
        u & 4 && l.stateNode != null && (n = l.memoizedProps, dc(l, n, a !== null ? a.memoizedProps : n)), u & 1024 && (oc = !0);
        break;
      case 6:
        if (Zl(t, l), Ll(l), u & 4) {
          if (l.stateNode === null) throw Error(o(162));
          u = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = u;
          } catch (p) {
            nl(l, l.return, p);
          }
        }
        break;
      case 3:
        if (De = null, n = Et, Et = Oe(t.containerInfo), Zl(t, l), Et = n, Ll(l), u & 4 && a !== null && a.memoizedState.isDehydrated) try {
          _u(t.containerInfo);
        } catch (p) {
          nl(l, l.return, p);
        }
        oc && (oc = !1, L1(l));
        break;
      case 4:
        u = Et, Et = Oe(l.stateNode.containerInfo), Zl(t, l), Ll(l), Et = u;
        break;
      case 12:
        Zl(t, l), Ll(l);
        break;
      case 31:
        Zl(t, l), Ll(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, ye(l, u)));
        break;
      case 13:
        Zl(t, l), Ll(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (de = Fl()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, ye(l, u)));
        break;
      case 22:
        n = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null, s = Xt, b = Tl;
        if (Xt = s || n, Tl = b || f, Zl(t, l), Tl = b, Xt = s, Ll(l), u & 8192) l: for (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (a === null || f || Xt || Tl || Qa(l)), a = null, t = l; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (a === null) {
              f = a = t;
              try {
                if (e = f.stateNode, n) i = e.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                else {
                  c = f.stateNode;
                  var E = f.memoizedProps.style, S = E != null && E.hasOwnProperty("display") ? E.display : null;
                  c.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                }
              } catch (p) {
                nl(f, f.return, p);
              }
            }
          } else if (t.tag === 6) {
            if (a === null) {
              f = t;
              try {
                f.stateNode.nodeValue = n ? "" : f.memoizedProps;
              } catch (p) {
                nl(f, f.return, p);
              }
            }
          } else if (t.tag === 18) {
            if (a === null) {
              f = t;
              try {
                var g = f.stateNode;
                n ? Cv(g, !0) : Cv(f.stateNode, !1);
              } catch (p) {
                nl(f, f.return, p);
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
        u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, ye(l, a))));
        break;
      case 19:
        Zl(t, l), Ll(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, ye(l, u)));
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
          if (R1(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode;
            ve(l, hc(l), n);
            break;
          case 5:
            var e = a.stateNode;
            a.flags & 32 && (Ja(e, ""), a.flags &= -33), ve(l, hc(l), e);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo;
            sc(l, hc(l), i);
            break;
          default:
            throw Error(o(161));
        }
      } catch (c) {
        nl(l, l.return, c);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function L1(l) {
    if (l.subtreeFlags & 1024) for (l = l.child; l !== null; ) {
      var t = l;
      L1(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
    }
  }
  function Lt(l, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) Y1(l, t.alternate, t), t = t.sibling;
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
          Dt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && N1(t, t.return, a), Qa(t);
          break;
        case 27:
          mn(t.stateNode);
        case 26:
        case 5:
          Dt(t, t.return), Qa(t);
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
  function Vt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate, n = l, e = t, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Vt(n, e, a), ln(4, e);
          break;
        case 1:
          if (Vt(n, e, a), u = e, n = u.stateNode, typeof n.componentDidMount == "function") try {
            n.componentDidMount();
          } catch (s) {
            nl(u, u.return, s);
          }
          if (u = e, n = u.updateQueue, n !== null) {
            var c = u.stateNode;
            try {
              var f = n.shared.hiddenCallbacks;
              if (f !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < f.length; n++) A0(f[n], c);
            } catch (s) {
              nl(u, u.return, s);
            }
          }
          a && i & 64 && H1(e), tn(e, e.return);
          break;
        case 27:
          B1(e);
        case 26:
        case 5:
          Vt(n, e, a), a && u === null && i & 4 && C1(e), tn(e, e.return);
          break;
        case 12:
          Vt(n, e, a);
          break;
        case 31:
          Vt(n, e, a), a && i & 4 && Q1(n, e);
          break;
        case 13:
          Vt(n, e, a), a && i & 4 && X1(n, e);
          break;
        case 22:
          e.memoizedState === null && Vt(n, e, a), tn(e, e.return);
          break;
        case 30:
          break;
        default:
          Vt(n, e, a);
      }
      t = t.sibling;
    }
  }
  function Sc(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Lu(a));
  }
  function gc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Lu(l));
  }
  function At(l, t, a, u) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) V1(l, t, a, u), t = t.sibling;
  }
  function V1(l, t, a, u) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        At(l, t, a, u), n & 2048 && ln(9, t);
        break;
      case 1:
        At(l, t, a, u);
        break;
      case 3:
        At(l, t, a, u), n & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Lu(l)));
        break;
      case 12:
        if (n & 2048) {
          At(l, t, a, u), l = t.stateNode;
          try {
            var e = t.memoizedProps, i = e.id, c = e.onPostCommit;
            typeof c == "function" && c(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
          } catch (f) {
            nl(t, t.return, f);
          }
        } else At(l, t, a, u);
        break;
      case 31:
        At(l, t, a, u);
        break;
      case 13:
        At(l, t, a, u);
        break;
      case 23:
        break;
      case 22:
        e = t.stateNode, i = t.alternate, t.memoizedState !== null ? e._visibility & 2 ? At(l, t, a, u) : an(l, t) : e._visibility & 2 ? At(l, t, a, u) : (e._visibility |= 2, du(l, t, a, u, (t.subtreeFlags & 10256) !== 0 || !1)), n & 2048 && Sc(i, t);
        break;
      case 24:
        At(l, t, a, u), n & 2048 && gc(t.alternate, t);
        break;
      default:
        At(l, t, a, u);
    }
  }
  function du(l, t, a, u, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var e = l, i = t, c = a, f = u, s = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          du(e, i, c, f, n), ln(8, i);
          break;
        case 23:
          break;
        case 22:
          var b = i.stateNode;
          i.memoizedState !== null ? b._visibility & 2 ? du(e, i, c, f, n) : an(e, i) : (b._visibility |= 2, du(e, i, c, f, n)), n && s & 2048 && Sc(i.alternate, i);
          break;
        case 24:
          du(e, i, c, f, n), n && s & 2048 && gc(i.alternate, i);
          break;
        default:
          du(e, i, c, f, n);
      }
      t = t.sibling;
    }
  }
  function an(l, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var a = l, u = t, n = u.flags;
      switch (u.tag) {
        case 22:
          an(a, u), n & 2048 && Sc(u.alternate, u);
          break;
        case 24:
          an(a, u), n & 2048 && gc(u.alternate, u);
          break;
        default:
          an(a, u);
      }
      t = t.sibling;
    }
  }
  var un = 8192;
  function hu(l, t, a) {
    if (l.subtreeFlags & un) for (l = l.child; l !== null; ) K1(l, t, a), l = l.sibling;
  }
  function K1(l, t, a) {
    switch (l.tag) {
      case 26:
        hu(l, t, a), l.flags & un && l.memoizedState !== null && id(a, Et, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        hu(l, t, a);
        break;
      case 3:
      case 4:
        var u = Et;
        Et = Oe(l.stateNode.containerInfo), hu(l, t, a), Et = u;
        break;
      case 22:
        l.memoizedState === null && (u = l.alternate, u !== null && u.memoizedState !== null ? (u = un, un = 16777216, hu(l, t, a), un = u) : hu(l, t, a));
        break;
      default:
        hu(l, t, a);
    }
  }
  function x1(l) {
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
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var u = t[a];
        Dl = u, J1(u, l);
      }
      x1(l);
    }
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) r1(l), l = l.sibling;
  }
  function r1(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        nn(l), l.flags & 2048 && ea(9, l, l.return);
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
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var u = t[a];
        Dl = u, J1(u, l);
      }
      x1(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ea(8, t, t.return), me(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, me(t));
          break;
        default:
          me(t);
      }
      l = l.sibling;
    }
  }
  function J1(l, t) {
    for (; Dl !== null; ) {
      var a = Dl;
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
      if (u = a.child, u !== null) u.return = a, Dl = u;
      else l: for (a = l; Dl !== null; ) {
        u = Dl;
        var n = u.sibling, e = u.return;
        if (j1(u), u === a) {
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
  var _m = {
    getCacheForType: function(l) {
      var t = Hl(zl), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    },
    cacheSignal: function() {
      return Hl(zl).controller.signal;
    }
  }, Om = typeof WeakMap == "function" ? WeakMap : Map, tl = 0, fl = null, r = null, w = 0, ul = 0, ut = null, ia = !1, su = !1, bc = !1, Kt = 0, ol = 0, ca = 0, Xa = 0, zc = 0, nt = 0, ou = 0, en = null, Vl = null, Ec = !1, de = 0, w1 = 0, he = 1 / 0, se = null, fa = null, _l = 0, va = null, Su = null, xt = 0, Ac = 0, Tc = null, W1 = null, cn = 0, _c = null;
  function ht() {
    return (tl & 2) !== 0 && w !== 0 ? w & -w : _.T !== null ? Hc() : hf();
  }
  function $1() {
    if (nt === 0) if ((w & 536870912) === 0 || $) {
      var l = An;
      An <<= 1, (An & 3932160) === 0 && (An = 262144), nt = l;
    } else nt = 536870912;
    return l = tt.current, l !== null && (l.flags |= 32), nt;
  }
  function Kl(l, t, a) {
    (l === fl && (ul === 2 || ul === 9) || l.cancelPendingCommit !== null) && (gu(l, 0), ya(l, w, nt, !1)), On(l, a), ((tl & 2) === 0 || l !== fl) && (l === fl && ((tl & 2) === 0 && (Xa |= a), ol === 4 && ya(l, w, nt, !1)), rt(l));
  }
  function F1(l, t, a) {
    if ((tl & 6) !== 0) throw Error(o(327));
    var u = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Du(l, t), n = u ? Um(l, t) : Mc(l, t, !0), e = u;
    do {
      if (n === 0) {
        su && !u && ya(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, e && !Mm(a)) {
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
              if (f && (gu(c, i).flags |= 256), i = Mc(c, i, !1), i !== 2) {
                if (bc && !f) {
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
          gu(l, 0), ya(l, t, 0, !0);
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
              ya(u, t, nt, !ia);
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
          if ((t & 62914560) === t && (n = de + 300 - Fl(), 10 < n)) {
            if (ya(u, t, nt, !ia), _n(u, 0, !0) !== 0) break l;
            xt = t, u.timeoutHandle = pv(k1.bind(null, u, a, Vl, se, Ec, t, nt, Xa, ou, ia, e, "Throttled", -0, 0), n);
            break l;
          }
          k1(u, a, Vl, se, Ec, t, nt, Xa, ou, ia, e, null, -0, 0);
        }
      }
      break;
    } while (!0);
    rt(l);
  }
  function k1(l, t, a, u, n, e, i, c, f, s, b, E, S, g) {
    if (l.timeoutHandle = -1, E = t.subtreeFlags, E & 8192 || (E & 16785408) === 16785408) {
      E = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ht
      }, K1(t, e, E);
      var p = (e & 62914560) === e ? de - Fl() : (e & 4194048) === e ? w1 - Fl() : 0;
      if (p = cd(E, p), p !== null) {
        xt = e, l.cancelPendingCommit = p(ev.bind(null, l, t, e, a, u, n, i, c, f, b, E, null, S, g)), ya(l, e, i, !s);
        return;
      }
    }
    ev(l, t, e, a, u, n, i, c, f);
  }
  function Mm(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null))) for (var u = 0; u < a.length; u++) {
        var n = a[u], e = n.getSnapshot;
        n = n.value;
        try {
          if (!Pl(e(), n)) return !1;
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
  function ya(l, t, a, u) {
    t &= ~zc, t &= ~Xa, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
    for (var n = t; 0 < n; ) {
      var e = 31 - Il(n), i = 1 << e;
      u[e] = -1, n &= ~i;
    }
    a !== 0 && vf(l, a, t);
  }
  function oe() {
    return (tl & 6) === 0 ? (fn(0, !1), !1) : !0;
  }
  function Oc() {
    if (r !== null) {
      if (ul === 0) var l = r.return;
      else l = r, Bt = pa = null, Zi(l), cu = null, Ku = 0, l = r;
      for (; l !== null; ) p1(l.alternate, l), l = l.return;
      r = null;
    }
  }
  function gu(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, Km(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), xt = 0, Oc(), fl = l, r = a = Ct(l.current, null), w = t, ul = 0, ut = null, ia = !1, su = Du(l, t), bc = !1, ou = nt = zc = Xa = ca = ol = 0, Vl = en = null, Ec = !1, (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0) for (l = l.entanglements, u &= t; 0 < u; ) {
      var n = 31 - Il(u), e = 1 << n;
      t |= l[n], u &= ~e;
    }
    return Kt = t, jn(), a;
  }
  function I1(l, t) {
    Q = null, _.H = ku, t === iu || t === xn ? (t = g0(), ul = 3) : t === pi ? (t = g0(), ul = 4) : ul = t === ac ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ut = t, r === null && (ol = 1, ne(l, ft(t, l.current)));
  }
  function P1() {
    var l = tt.current;
    return l === null ? !0 : (w & 4194048) === w ? dt === null : (w & 62914560) === w || (w & 536870912) !== 0 ? l === dt : !1;
  }
  function lv() {
    var l = _.H;
    return _.H = ku, l === null ? ku : l;
  }
  function tv() {
    var l = _.A;
    return _.A = _m, l;
  }
  function Se() {
    ol = 4, ia || (w & 4194048) !== w && tt.current !== null || (su = !0), (ca & 134217727) === 0 && (Xa & 134217727) === 0 || fl === null || ya(fl, w, nt, !1);
  }
  function Mc(l, t, a) {
    var u = tl;
    tl |= 2;
    var n = lv(), e = tv();
    (fl !== l || w !== t) && (se = null, gu(l, t)), t = !1;
    var i = ol;
    l: do
      try {
        if (ul !== 0 && r !== null) {
          var c = r, f = ut;
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
              if (ul = 0, ut = null, bu(l, c, f, s), a && su) {
                i = 0;
                break l;
              }
              break;
            default:
              s = ul, ul = 0, ut = null, bu(l, c, f, s);
          }
        }
        Dm(), i = ol;
        break;
      } catch (b) {
        I1(l, b);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Bt = pa = null, tl = u, _.H = n, _.A = e, r === null && (fl = null, w = 0, jn()), i;
  }
  function Dm() {
    for (; r !== null; ) av(r);
  }
  function Um(l, t) {
    var a = tl;
    tl |= 2;
    var u = lv(), n = tv();
    fl !== l || w !== t ? (se = null, he = Fl() + 500, gu(l, t)) : su = Du(l, t);
    l: do
      try {
        if (ul !== 0 && r !== null) {
          t = r;
          var e = ut;
          t: switch (ul) {
            case 1:
              ul = 0, ut = null, bu(l, t, e, 1);
              break;
            case 2:
            case 9:
              if (o0(e)) {
                ul = 0, ut = null, uv(t);
                break;
              }
              t = function() {
                ul !== 2 && ul !== 9 || fl !== l || (ul = 7), rt(l);
              }, e.then(t, t);
              break l;
            case 3:
              ul = 7;
              break l;
            case 4:
              ul = 5;
              break l;
            case 7:
              o0(e) ? (ul = 0, ut = null, uv(t)) : (ul = 0, ut = null, bu(l, t, e, 7));
              break;
            case 5:
              var i = null;
              switch (r.tag) {
                case 26:
                  i = r.memoizedState;
                case 5:
                case 27:
                  var c = r;
                  if (i ? Kv(i) : c.stateNode.complete) {
                    ul = 0, ut = null;
                    var f = c.sibling;
                    if (f !== null) r = f;
                    else {
                      var s = c.return;
                      s !== null ? (r = s, ge(s)) : r = null;
                    }
                    break t;
                  }
              }
              ul = 0, ut = null, bu(l, t, e, 5);
              break;
            case 6:
              ul = 0, ut = null, bu(l, t, e, 6);
              break;
            case 8:
              Oc(), ol = 6;
              break l;
            default:
              throw Error(o(462));
          }
        }
        pm();
        break;
      } catch (b) {
        I1(l, b);
      }
    while (!0);
    return Bt = pa = null, _.H = u, _.A = n, tl = a, r !== null ? 0 : (fl = null, w = 0, jn(), ol);
  }
  function pm() {
    for (; r !== null && !ey(); ) av(r);
  }
  function av(l) {
    var t = D1(l.alternate, l, Kt);
    l.memoizedProps = l.pendingProps, t === null ? ge(l) : r = t;
  }
  function uv(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = E1(a, t, t.pendingProps, t.type, void 0, w);
        break;
      case 11:
        t = E1(a, t, t.pendingProps, t.type.render, t.ref, w);
        break;
      case 5:
        Zi(t);
      default:
        p1(a, t), t = r = n0(t, Kt), t = D1(a, t, Kt);
    }
    l.memoizedProps = l.pendingProps, t === null ? ge(l) : r = t;
  }
  function bu(l, t, a, u) {
    Bt = pa = null, Zi(t), cu = null, Ku = 0;
    var n = t.return;
    try {
      if (Sm(l, n, t, a, w)) {
        ol = 1, ne(l, ft(a, l.current)), r = null;
        return;
      }
    } catch (e) {
      if (n !== null) throw r = n, e;
      ol = 1, ne(l, ft(a, l.current)), r = null;
      return;
    }
    t.flags & 32768 ? ($ || u === 1 ? l = !0 : su || (w & 536870912) !== 0 ? l = !1 : (ia = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = tt.current, u !== null && u.tag === 13 && (u.flags |= 16384))), nv(t, l)) : ge(t);
  }
  function ge(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        nv(t, ia);
        return;
      }
      l = t.return;
      var a = zm(t.alternate, t, Kt);
      if (a !== null) {
        r = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        r = t;
        return;
      }
      r = t = l;
    } while (t !== null);
    ol === 0 && (ol = 5);
  }
  function nv(l, t) {
    do {
      var a = Em(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, r = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        r = l;
        return;
      }
      r = l = a;
    } while (l !== null);
    ol = 6, r = null;
  }
  function ev(l, t, a, u, n, e, i, c, f) {
    l.cancelPendingCommit = null;
    do
      be();
    while (_l !== 0);
    if ((tl & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (e = t.lanes | t.childLanes, e |= hi, oy(l, a, e, i, c, f), l === fl && (r = fl = null, w = 0), Su = t, va = l, xt = a, Ac = e, Tc = n, W1 = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Rm(zn, function() {
        return yv(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
        u = _.T, _.T = null, n = M.p, M.p = 2, i = tl, tl |= 4;
        try {
          Am(l, t, a);
        } finally {
          tl = i, M.p = n, _.T = u;
        }
      }
      _l = 1, iv(), cv(), fv();
    }
  }
  function iv() {
    if (_l === 1) {
      _l = 0;
      var l = va, t = Su, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = _.T, _.T = null;
        var u = M.p;
        M.p = 2;
        var n = tl;
        tl |= 4;
        try {
          Z1(t, l);
          var e = jc, i = $f(l.containerInfo), c = e.focusedElem, f = e.selectionRange;
          if (i !== c && c && c.ownerDocument && Wf(c.ownerDocument.documentElement, c)) {
            if (f !== null && fi(c)) {
              var s = f.start, b = f.end;
              if (b === void 0 && (b = s), "selectionStart" in c) c.selectionStart = s, c.selectionEnd = Math.min(b, c.value.length);
              else {
                var E = c.ownerDocument || document, S = E && E.defaultView || window;
                if (S.getSelection) {
                  var g = S.getSelection(), p = c.textContent.length, Y = Math.min(f.start, p), cl = f.end === void 0 ? Y : Math.min(f.end, p);
                  !g.extend && Y > cl && (i = cl, cl = Y, Y = i);
                  var m = wf(c, Y), v = wf(c, cl);
                  if (m && v && (g.rangeCount !== 1 || g.anchorNode !== m.node || g.anchorOffset !== m.offset || g.focusNode !== v.node || g.focusOffset !== v.offset)) {
                    var h = E.createRange();
                    h.setStart(m.node, m.offset), g.removeAllRanges(), Y > cl ? (g.addRange(h), g.extend(v.node, v.offset)) : (h.setEnd(v.node, v.offset), g.addRange(h));
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
          tl = n, M.p = u, _.T = a;
        }
      }
      l.current = t, _l = 2;
    }
  }
  function cv() {
    if (_l === 2) {
      _l = 0;
      var l = va, t = Su, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = _.T, _.T = null;
        var u = M.p;
        M.p = 2;
        var n = tl;
        tl |= 4;
        try {
          Y1(l, t.alternate, t);
        } finally {
          tl = n, M.p = u, _.T = a;
        }
      }
      _l = 3;
    }
  }
  function fv() {
    if (_l === 4 || _l === 3) {
      _l = 0, iy();
      var l = va, t = Su, a = xt, u = W1;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? _l = 5 : (_l = 0, Su = va = null, vv(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (n === 0 && (fa = null), Ke(a), t = t.stateNode, kl && typeof kl.onCommitFiberRoot == "function") try {
        kl.onCommitFiberRoot(Mu, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (u !== null) {
        t = _.T, n = M.p, M.p = 2, _.T = null;
        try {
          for (var e = l.onRecoverableError, i = 0; i < u.length; i++) {
            var c = u[i];
            e(c.value, { componentStack: c.stack });
          }
        } finally {
          _.T = t, M.p = n;
        }
      }
      (xt & 3) !== 0 && be(), rt(l), n = l.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? l === _c ? cn++ : (cn = 0, _c = l) : cn = 0, fn(0, !1);
    }
  }
  function vv(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Lu(t)));
  }
  function be() {
    return iv(), cv(), fv(), yv();
  }
  function yv() {
    if (_l !== 5) return !1;
    var l = va, t = Ac;
    Ac = 0;
    var a = Ke(xt), u = _.T, n = M.p;
    try {
      M.p = 32 > a ? 32 : a, _.T = null, a = Tc, Tc = null;
      var e = va, i = xt;
      if (_l = 0, Su = va = null, xt = 0, (tl & 6) !== 0) throw Error(o(331));
      var c = tl;
      if (tl |= 4, r1(e.current), V1(e, e.current, i, a), tl = c, fn(0, !1), kl && typeof kl.onPostCommitFiberRoot == "function") try {
        kl.onPostCommitFiberRoot(Mu, e);
      } catch {
      }
      return !0;
    } finally {
      M.p = n, _.T = u, vv(l, t);
    }
  }
  function mv(l, t, a) {
    t = ft(a, t), t = tc(l.stateNode, t, 2), l = Ya(l, t, 2), l !== null && (On(l, 2), rt(l));
  }
  function nl(l, t, a) {
    if (l.tag === 3) mv(l, l, a);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        mv(t, l, a);
        break;
      } else if (t.tag === 1) {
        var u = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (fa === null || !fa.has(u))) {
          l = ft(a, l), a = d1(2), u = Ya(t, a, 2), u !== null && (h1(a, u, t, l), On(u, 2), rt(u));
          break;
        }
      }
      t = t.return;
    }
  }
  function Dc(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new Om();
      var n = /* @__PURE__ */ new Set();
      u.set(t, n);
    } else n = u.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), u.set(t, n));
    n.has(a) || (bc = !0, n.add(a), l = Hm.bind(null, l, t, a), t.then(l, l));
  }
  function Hm(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, fl === l && (w & a) === a && (ol === 4 || ol === 3 && (w & 62914560) === w && 300 > Fl() - de ? (tl & 2) === 0 && gu(l, 0) : zc |= a, ou === w && (ou = 0)), rt(l);
  }
  function dv(l, t) {
    t === 0 && (t = ff()), l = Ma(l, t), l !== null && (On(l, t), rt(l));
  }
  function Nm(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), dv(l, a);
  }
  function Cm(l, t) {
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
    u !== null && u.delete(t), dv(l, a);
  }
  function Rm(l, t) {
    return Ze(l, t);
  }
  var ze = null, zu = null, Uc = !1, Ee = !1, pc = !1, ma = 0;
  function rt(l) {
    l !== zu && l.next === null && (zu === null ? ze = zu = l : zu = zu.next = l), Ee = !0, Uc || (Uc = !0, qm());
  }
  function fn(l, t) {
    if (!pc && Ee) {
      pc = !0;
      do
        for (var a = !1, u = ze; u !== null; ) {
          if (!t) if (l !== 0) {
            var n = u.pendingLanes;
            if (n === 0) var e = 0;
            else {
              var i = u.suspendedLanes, c = u.pingedLanes;
              e = (1 << 31 - Il(42 | l) + 1) - 1, e &= n & ~(i & ~c), e = e & 201326741 ? e & 201326741 | 1 : e ? e | 2 : 0;
            }
            e !== 0 && (a = !0, Sv(u, e));
          } else e = w, e = _n(u, u === fl ? e : 0, u.cancelPendingCommit !== null || u.timeoutHandle !== -1), (e & 3) === 0 || Du(u, e) || (a = !0, Sv(u, e));
          u = u.next;
        }
      while (a);
      pc = !1;
    }
  }
  function Bm() {
    hv();
  }
  function hv() {
    Ee = Uc = !1;
    var l = 0;
    ma !== 0 && Vm() && (l = ma);
    for (var t = Fl(), a = null, u = ze; u !== null; ) {
      var n = u.next, e = sv(u, t);
      e === 0 ? (u.next = null, a === null ? ze = n : a.next = n, n === null && (zu = a)) : (a = u, (l !== 0 || (e & 3) !== 0) && (Ee = !0)), u = n;
    }
    _l !== 0 && _l !== 5 || fn(l, !1), ma !== 0 && (ma = 0);
  }
  function sv(l, t) {
    for (var a = l.suspendedLanes, u = l.pingedLanes, n = l.expirationTimes, e = l.pendingLanes & -62914561; 0 < e; ) {
      var i = 31 - Il(e), c = 1 << i, f = n[i];
      f === -1 ? ((c & a) === 0 || (c & u) !== 0) && (n[i] = sy(c, t)) : f <= t && (l.expiredLanes |= c), e &= ~c;
    }
    if (t = fl, a = w, a = _n(l, l === t ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u = l.callbackNode, a === 0 || l === t && (ul === 2 || ul === 9) || l.cancelPendingCommit !== null) return u !== null && u !== null && Le(u), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Du(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (u !== null && Le(u), Ke(a)) {
        case 2:
        case 8:
          a = ef;
          break;
        case 32:
          a = zn;
          break;
        case 268435456:
          a = cf;
          break;
        default:
          a = zn;
      }
      return u = ov.bind(null, l), a = Ze(a, u), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return u !== null && u !== null && Le(u), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function ov(l, t) {
    if (_l !== 0 && _l !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (be() && l.callbackNode !== a) return null;
    var u = w;
    return u = _n(l, l === fl ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u === 0 ? null : (F1(l, u, t), sv(l, Fl()), l.callbackNode != null && l.callbackNode === a ? ov.bind(null, l) : null);
  }
  function Sv(l, t) {
    if (be()) return null;
    F1(l, t, !0);
  }
  function qm() {
    xm(function() {
      (tl & 6) !== 0 ? Ze(nf, Bm) : hv();
    });
  }
  function Hc() {
    if (ma === 0) {
      var l = nu;
      l === 0 && (l = En, En <<= 1, (En & 261888) === 0 && (En = 256)), ma = l;
    }
    return ma;
  }
  function gv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : pn("" + l);
  }
  function bv(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function Ym(l, t, a, u, n) {
    if (t === "submit" && a && a.stateNode === n) {
      var e = gv((n[Gl] || null).action), i = u.submitter;
      i && (t = (t = i[Gl] || null) ? gv(t.formAction) : i.getAttribute("formAction"), t !== null && (e = t, i = null));
      var c = new Rn("action", "action", null, u, n);
      l.push({
        event: c,
        listeners: [{
          instance: null,
          listener: function() {
            if (u.defaultPrevented) {
              if (ma !== 0) {
                var f = i ? bv(n, i) : new FormData(n);
                $i(a, {
                  pending: !0,
                  data: f,
                  method: n.method,
                  action: e
                }, null, f);
              }
            } else typeof e == "function" && (c.preventDefault(), f = i ? bv(n, i) : new FormData(n), $i(a, {
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
  zt(If, "onAnimationEnd"), zt(Pf, "onAnimationIteration"), zt(l0, "onAnimationStart"), zt("dblclick", "onDoubleClick"), zt("focusin", "onFocus"), zt("focusout", "onBlur"), zt(Fy, "onTransitionRun"), zt(ky, "onTransitionStart"), zt(Iy, "onTransitionCancel"), zt(t0, "onTransitionEnd"), xa("onMouseEnter", ["mouseout", "mouseover"]), xa("onMouseLeave", ["mouseout", "mouseover"]), xa("onPointerEnter", ["pointerout", "pointerover"]), xa("onPointerLeave", ["pointerout", "pointerover"]), Aa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Aa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Aa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Aa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Aa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Aa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var vn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), jm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vn));
  function zv(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a], n = u.event;
      u = u.listeners;
      l: {
        var e = void 0;
        if (t) for (var i = u.length - 1; 0 <= i; i--) {
          var c = u[i], f = c.instance, s = c.currentTarget;
          if (c = c.listener, f !== e && n.isPropagationStopped()) break l;
          e = c, n.currentTarget = s;
          try {
            e(n);
          } catch (b) {
            Yn(b);
          }
          n.currentTarget = null, e = f;
        }
        else for (i = 0; i < u.length; i++) {
          if (c = u[i], f = c.instance, s = c.currentTarget, c = c.listener, f !== e && n.isPropagationStopped()) break l;
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
  function J(l, t) {
    var a = t[xe];
    a === void 0 && (a = t[xe] = /* @__PURE__ */ new Set());
    var u = l + "__bubble";
    a.has(u) || (Av(t, l, 2, !1), a.add(u));
  }
  function Rc(l, t, a) {
    var u = 0;
    t && (u |= 4), Av(a, l, u, t);
  }
  var Ae = "_reactListening" + Math.random().toString(36).slice(2);
  function Ev(l) {
    if (!l[Ae]) {
      l[Ae] = !0, Sf.forEach(function(a) {
        a !== "selectionchange" && (jm.has(a) || Rc(a, !1, l), Rc(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Ae] || (t[Ae] = !0, Rc("selectionchange", !1, t));
    }
  }
  function Av(l, t, a, u) {
    switch (Wv(t)) {
      case 2:
        var n = dd;
        break;
      case 8:
        n = hd;
        break;
      default:
        n = wc;
    }
    a = n.bind(null, t, a, l), n = void 0, !Pe || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), u ? n !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: n
    }) : l.addEventListener(t, a, !0) : n !== void 0 ? l.addEventListener(t, a, { passive: n }) : l.addEventListener(t, a, !1);
  }
  function Bc(l, t, a, u, n) {
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
    pf(function() {
      var s = e, b = ke(a), E = [];
      l: {
        var S = a0.get(l);
        if (S !== void 0) {
          var g = Rn, p = l;
          switch (l) {
            case "keypress":
              if (Nn(a) === 0) break l;
            case "keydown":
            case "keyup":
              g = By;
              break;
            case "focusin":
              p = "focus", g = ui;
              break;
            case "focusout":
              p = "blur", g = ui;
              break;
            case "beforeblur":
            case "afterblur":
              g = ui;
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
              g = Cf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Dy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = qy;
              break;
            case If:
            case Pf:
            case l0:
              g = Uy;
              break;
            case t0:
              g = Yy;
              break;
            case "scroll":
            case "scrollend":
              g = My;
              break;
            case "wheel":
              g = jy;
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
              g = Gy;
          }
          var Y = (t & 4) !== 0, cl = !Y && (l === "scroll" || l === "scrollend"), m = Y ? S !== null ? S + "Capture" : null : S;
          Y = [];
          for (var v = s, h; v !== null; ) {
            var z = v;
            if (h = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || h === null || m === null || (z = Nu(v, m), z != null && Y.push(yn(v, z, h))), cl) break;
            v = v.return;
          }
          0 < Y.length && (S = new g(S, p, null, a, b), E.push({
            event: S,
            listeners: Y
          }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (S = l === "mouseover" || l === "pointerover", g = l === "mouseout" || l === "pointerout", S && a !== Fe && (p = a.relatedTarget || a.fromElement) && (La(p) || p[Uu])) break l;
          if ((g || S) && (S = b.window === b ? b : (S = b.ownerDocument) ? S.defaultView || S.parentWindow : window, g ? (p = a.relatedTarget || a.toElement, g = s, p = p ? La(p) : null, p !== null && (cl = G(p), Y = p.tag, p !== cl || Y !== 5 && Y !== 27 && Y !== 6) && (p = null)) : (g = null, p = s), g !== p)) {
            if (Y = Cf, z = "onMouseLeave", m = "onMouseEnter", v = "mouse", (l === "pointerout" || l === "pointerover") && (Y = Bf, z = "onPointerLeave", m = "onPointerEnter", v = "pointer"), cl = g == null ? S : Hu(g), h = p == null ? S : Hu(p), S = new Y(z, v + "leave", g, a, b), S.target = cl, S.relatedTarget = h, z = null, La(b) === s && (Y = new Y(m, v + "enter", p, a, b), Y.target = h, Y.relatedTarget = cl, z = Y), cl = z, g && p) t: {
              for (Y = Gm, m = g, v = p, h = 0, z = m; z; z = Y(z)) h++;
              z = 0;
              for (var R = v; R; R = Y(R)) z++;
              for (; 0 < h - z; ) m = Y(m), h--;
              for (; 0 < z - h; ) v = Y(v), z--;
              for (; h--; ) {
                if (m === v || v !== null && m === v.alternate) {
                  Y = m;
                  break t;
                }
                m = Y(m), v = Y(v);
              }
              Y = null;
            }
            else Y = null;
            g !== null && Tv(E, S, g, Y, !1), p !== null && cl !== null && Tv(E, cl, p, Y, !0);
          }
        }
        l: {
          if (S = s ? Hu(s) : window, g = S.nodeName && S.nodeName.toLowerCase(), g === "select" || g === "input" && S.type === "file") var k = Lf;
          else if (Xf(S)) if (Vf) k = wy;
          else {
            k = ry;
            var H = xy;
          }
          else g = S.nodeName, !g || g.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? s && $e(s.elementType) && (k = Lf) : k = Jy;
          if (k && (k = k(l, s))) {
            Zf(E, k, a, b);
            break l;
          }
          H && H(l, S, s), l === "focusout" && s && S.type === "number" && s.memoizedProps.value != null && We(S, "number", S.value);
        }
        switch (H = s ? Hu(s) : window, l) {
          case "focusin":
            (Xf(H) || H.contentEditable === "true") && (Fa = H, vi = s, Qu = null);
            break;
          case "focusout":
            Qu = vi = Fa = null;
            break;
          case "mousedown":
            yi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yi = !1, Ff(E, a, b);
            break;
          case "selectionchange":
            if ($y) break;
          case "keydown":
          case "keyup":
            Ff(E, a, b);
        }
        var L;
        if (ei) l: {
          switch (l) {
            case "compositionstart":
              var W = "onCompositionStart";
              break l;
            case "compositionend":
              W = "onCompositionEnd";
              break l;
            case "compositionupdate":
              W = "onCompositionUpdate";
              break l;
          }
          W = void 0;
        }
        else $a ? Gf(l, a) && (W = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (W = "onCompositionStart");
        W && (qf && a.locale !== "ko" && ($a || W !== "onCompositionStart" ? W === "onCompositionEnd" && $a && (L = Hf()) : (kt = b, li = "value" in kt ? kt.value : kt.textContent, $a = !0)), H = Te(s, W), 0 < H.length && (W = new Rf(W, l, null, a, b), E.push({
          event: W,
          listeners: H
        }), L ? W.data = L : (L = Qf(a), L !== null && (W.data = L)))), (L = Xy ? Zy(l, a) : Ly(l, a)) && (W = Te(s, "onBeforeInput"), 0 < W.length && (H = new Rf("onBeforeInput", "beforeinput", null, a, b), E.push({
          event: H,
          listeners: W
        }), H.data = L)), Ym(E, l, s, a, b);
      }
      zv(E, t);
    });
  }
  function yn(l, t, a) {
    return {
      instance: l,
      listener: t,
      currentTarget: a
    };
  }
  function Te(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var n = l, e = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || e === null || (n = Nu(l, a), n != null && u.unshift(yn(l, n, e)), n = Nu(l, t), n != null && u.push(yn(l, n, e))), l.tag === 3) return u;
      l = l.return;
    }
    return [];
  }
  function Gm(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Tv(l, t, a, u, n) {
    for (var e = t._reactName, i = []; a !== null && a !== u; ) {
      var c = a, f = c.alternate, s = c.stateNode;
      if (c = c.tag, f !== null && f === u) break;
      c !== 5 && c !== 26 && c !== 27 || s === null || (f = s, n ? (s = Nu(a, e), s != null && i.unshift(yn(a, s, f))) : n || (s = Nu(a, e), s != null && i.push(yn(a, s, f)))), a = a.return;
    }
    i.length !== 0 && l.push({
      event: t,
      listeners: i
    });
  }
  var Qm = /\r\n?/g, Xm = /\u0000|\uFFFD/g;
  function _v(l) {
    return (typeof l == "string" ? l : "" + l).replace(Qm, `
`).replace(Xm, "");
  }
  function Ov(l, t) {
    return t = _v(t), _v(l) === t;
  }
  function il(l, t, a, u, n, e) {
    switch (a) {
      case "children":
        typeof u == "string" ? t === "body" || t === "textarea" && u === "" || Ja(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && Ja(l, "" + u);
        break;
      case "className":
        Dn(l, "class", u);
        break;
      case "tabIndex":
        Dn(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Dn(l, a, u);
        break;
      case "style":
        Df(l, u, e);
        break;
      case "data":
        if (t !== "object") {
          Dn(l, "data", u);
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
        u = pn("" + u), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof e == "function" && (a === "formAction" ? (t !== "input" && il(l, t, "name", n.name, n, null), il(l, t, "formEncType", n.formEncType, n, null), il(l, t, "formMethod", n.formMethod, n, null), il(l, t, "formTarget", n.formTarget, n, null)) : (il(l, t, "encType", n.encType, n, null), il(l, t, "method", n.method, n, null), il(l, t, "target", n.target, n, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = pn("" + u), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = Ht);
        break;
      case "onScroll":
        u != null && J("scroll", l);
        break;
      case "onScrollEnd":
        u != null && J("scrollend", l);
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
        a = pn("" + u), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
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
        J("beforetoggle", l), J("toggle", l), Mn(l, "popover", u);
        break;
      case "xlinkActuate":
        pt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        pt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        pt(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        pt(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        pt(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        pt(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        pt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        pt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        pt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        Mn(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = _y.get(a) || a, Mn(l, a, u));
    }
  }
  function qc(l, t, a, u, n, e) {
    switch (a) {
      case "style":
        Df(l, u, e);
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
        typeof u == "string" ? Ja(l, u) : (typeof u == "number" || typeof u == "bigint") && Ja(l, "" + u);
        break;
      case "onScroll":
        u != null && J("scroll", l);
        break;
      case "onScrollEnd":
        u != null && J("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = Ht);
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
        if (!gf.hasOwnProperty(a)) l: {
          if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), t = a.slice(2, n ? a.length - 7 : void 0), e = l[Gl] || null, e = e != null ? e[a] : null, typeof e == "function" && l.removeEventListener(t, e, n), typeof u == "function")) {
            typeof e != "function" && e !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, n);
            break l;
          }
          a in l ? l[a] = u : u === !0 ? l.setAttribute(a, "") : Mn(l, a, u);
        }
    }
  }
  function Cl(l, t, a) {
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
        J("error", l), J("load", l);
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
              il(l, t, e, i, a, null);
          }
        }
        n && il(l, t, "srcSet", a.srcSet, a, null), u && il(l, t, "src", a.src, a, null);
        return;
      case "input":
        J("invalid", l);
        var c = e = i = n = null, f = null, s = null;
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
              if (b != null) throw Error(o(137, t));
              break;
            default:
              il(l, t, u, b, a, null);
          }
        }
        Tf(l, e, c, f, s, i, n, !1);
        return;
      case "select":
        J("invalid", l), u = i = e = null;
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
            il(l, t, n, c, a, null);
        }
        t = e, a = i, l.multiple = !!u, t != null ? ra(l, !!u, t, !1) : a != null && ra(l, !!u, a, !0);
        return;
      case "textarea":
        J("invalid", l), e = n = u = null;
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
            il(l, t, i, c, a, null);
        }
        Of(l, u, n, e);
        return;
      case "option":
        for (f in a) a.hasOwnProperty(f) && (u = a[f], u != null) && (f === "selected" ? l.selected = u && typeof u != "function" && typeof u != "symbol" : il(l, t, f, u, a, null));
        return;
      case "dialog":
        J("beforetoggle", l), J("toggle", l), J("cancel", l), J("close", l);
        break;
      case "iframe":
      case "object":
        J("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < vn.length; u++) J(vn[u], l);
        break;
      case "image":
        J("error", l), J("load", l);
        break;
      case "details":
        J("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        J("error", l), J("load", l);
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
        for (s in a) if (a.hasOwnProperty(s) && (u = a[s], u != null)) switch (s) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(o(137, t));
          default:
            il(l, t, s, u, a, null);
        }
        return;
      default:
        if ($e(t)) {
          for (b in a) a.hasOwnProperty(b) && (u = a[b], u !== void 0 && qc(l, t, b, u, a, void 0));
          return;
        }
    }
    for (c in a) a.hasOwnProperty(c) && (u = a[c], u != null && il(l, t, c, u, a, null));
  }
  function Zm(l, t, a, u) {
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
        for (g in a) {
          var E = a[g];
          if (a.hasOwnProperty(g) && E != null) switch (g) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              f = E;
            default:
              u.hasOwnProperty(g) || il(l, t, g, null, u, E);
          }
        }
        for (var S in u) {
          var g = u[S];
          if (E = a[S], u.hasOwnProperty(S) && (g != null || E != null)) switch (S) {
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
              if (g != null) throw Error(o(137, t));
              break;
            default:
              g !== E && il(l, t, S, g, u, E);
          }
        }
        we(l, i, c, f, s, b, e, n);
        return;
      case "select":
        g = i = c = S = null;
        for (e in a) if (f = a[e], a.hasOwnProperty(e) && f != null) switch (e) {
          case "value":
            break;
          case "multiple":
            g = f;
          default:
            u.hasOwnProperty(e) || il(l, t, e, null, u, f);
        }
        for (n in u) if (e = u[n], f = a[n], u.hasOwnProperty(n) && (e != null || f != null)) switch (n) {
          case "value":
            S = e;
            break;
          case "defaultValue":
            c = e;
            break;
          case "multiple":
            i = e;
          default:
            e !== f && il(l, t, n, e, u, f);
        }
        t = c, a = i, u = g, S != null ? ra(l, !!a, S, !1) : !!u != !!a && (t != null ? ra(l, !!a, t, !0) : ra(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        g = S = null;
        for (c in a) if (n = a[c], a.hasOwnProperty(c) && n != null && !u.hasOwnProperty(c)) switch (c) {
          case "value":
            break;
          case "children":
            break;
          default:
            il(l, t, c, null, u, n);
        }
        for (i in u) if (n = u[i], e = a[i], u.hasOwnProperty(i) && (n != null || e != null)) switch (i) {
          case "value":
            S = n;
            break;
          case "defaultValue":
            g = n;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (n != null) throw Error(o(91));
            break;
          default:
            n !== e && il(l, t, i, n, u, e);
        }
        _f(l, S, g);
        return;
      case "option":
        for (var p in a) S = a[p], a.hasOwnProperty(p) && S != null && !u.hasOwnProperty(p) && (p === "selected" ? l.selected = !1 : il(l, t, p, null, u, S));
        for (f in u) S = u[f], g = a[f], u.hasOwnProperty(f) && S !== g && (S != null || g != null) && (f === "selected" ? l.selected = S && typeof S != "function" && typeof S != "symbol" : il(l, t, f, S, u, g));
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
        for (var Y in a) S = a[Y], a.hasOwnProperty(Y) && S != null && !u.hasOwnProperty(Y) && il(l, t, Y, null, u, S);
        for (s in u) if (S = u[s], g = a[s], u.hasOwnProperty(s) && S !== g && (S != null || g != null)) switch (s) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (S != null) throw Error(o(137, t));
            break;
          default:
            il(l, t, s, S, u, g);
        }
        return;
      default:
        if ($e(t)) {
          for (var cl in a) S = a[cl], a.hasOwnProperty(cl) && S !== void 0 && !u.hasOwnProperty(cl) && qc(l, t, cl, void 0, u, S);
          for (b in u) S = u[b], g = a[b], !u.hasOwnProperty(b) || S === g || S === void 0 && g === void 0 || qc(l, t, b, S, u, g);
          return;
        }
    }
    for (var m in a) S = a[m], a.hasOwnProperty(m) && S != null && !u.hasOwnProperty(m) && il(l, t, m, null, u, S);
    for (E in u) S = u[E], g = a[E], !u.hasOwnProperty(E) || S === g || S == null && g == null || il(l, t, E, S, u, g);
  }
  function Mv(l) {
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
  function Lm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0; u < a.length; u++) {
        var n = a[u], e = n.transferSize, i = n.initiatorType, c = n.duration;
        if (e && c && Mv(i)) {
          for (i = 0, c = n.responseEnd, u += 1; u < a.length; u++) {
            var f = a[u], s = f.startTime;
            if (s > c) break;
            var b = f.transferSize, E = f.initiatorType;
            b && Mv(E) && (f = f.responseEnd, i += b * (f < c ? 1 : (c - s) / (f - s)));
          }
          if (--u, t += 8 * (e + i) / (n.duration / 1e3), l++, 10 < l) break;
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
  function Dv(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Uv(l, t) {
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
  function Vm() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Qc ? !1 : (Qc = l, !0) : (Qc = null, !1);
  }
  var pv = typeof setTimeout == "function" ? setTimeout : void 0, Km = typeof clearTimeout == "function" ? clearTimeout : void 0, Hv = typeof Promise == "function" ? Promise : void 0, xm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hv < "u" ? function(l) {
    return Hv.resolve(null).then(l).catch(rm);
  } : pv;
  function rm(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function da(l) {
    return l === "head";
  }
  function Nv(l, t) {
    var a = t, u = 0;
    do {
      var n = a.nextSibling;
      if (l.removeChild(a), n && n.nodeType === 8) if (a = n.data, a === "/$" || a === "/&") {
        if (u === 0) {
          l.removeChild(n), _u(t);
          return;
        }
        u--;
      } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") u++;
      else if (a === "html") mn(l.ownerDocument.documentElement);
      else if (a === "head") {
        a = l.ownerDocument.head, mn(a);
        for (var e = a.firstChild; e; ) {
          var i = e.nextSibling, c = e.nodeName;
          e[pu] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && e.rel.toLowerCase() === "stylesheet" || a.removeChild(e), e = i;
        }
      } else a === "body" && mn(l.ownerDocument.body);
      a = n;
    } while (a);
    _u(t);
  }
  function Cv(l, t) {
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
  function Xc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xc(a), re(a);
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
  function Jm(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var n = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[pu]) switch (t) {
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
  function wm(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = st(l.nextSibling), l === null)) return null;
    return l;
  }
  function Rv(l, t) {
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
  function Wm(l, t) {
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
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return st(l.nextSibling);
          t--;
        } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function qv(l) {
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
  function Yv(l, t, a) {
    switch (t = _e(a), l) {
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
  function mn(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    re(l);
  }
  var ot = /* @__PURE__ */ new Map(), jv = /* @__PURE__ */ new Set();
  function Oe(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Jt = M.d;
  M.d = {
    f: $m,
    r: Fm,
    D: km,
    C: Im,
    L: Pm,
    m: ld,
    X: ad,
    S: td,
    M: ud
  };
  function $m() {
    var l = Jt.f(), t = oe();
    return l || t;
  }
  function Fm(l) {
    var t = Va(l);
    t !== null && t.tag === 5 && t.type === "form" ? t1(t) : Jt.r(l);
  }
  var Eu = typeof document > "u" ? null : document;
  function Gv(l, t, a) {
    var u = Eu;
    if (u && typeof t == "string" && t) {
      var n = it(t);
      n = 'link[rel="' + l + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), jv.has(n) || (jv.add(n), l = {
        rel: l,
        crossOrigin: a,
        href: t
      }, u.querySelector(n) === null && (t = u.createElement("link"), Cl(t, "link", l), Ml(t), u.head.appendChild(t)));
    }
  }
  function km(l) {
    Jt.D(l), Gv("dns-prefetch", l, null);
  }
  function Im(l, t) {
    Jt.C(l, t), Gv("preconnect", l, t);
  }
  function Pm(l, t, a) {
    Jt.L(l, t, a);
    var u = Eu;
    if (u && l && t) {
      var n = 'link[rel="preload"][as="' + it(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + it(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + it(a.imageSizes) + '"]')) : n += '[href="' + it(l) + '"]';
      var e = n;
      switch (t) {
        case "style":
          e = Au(l);
          break;
        case "script":
          e = Tu(l);
      }
      ot.has(e) || (l = q({
        rel: "preload",
        href: t === "image" && a && a.imageSrcSet ? void 0 : l,
        as: t
      }, a), ot.set(e, l), u.querySelector(n) !== null || t === "style" && u.querySelector(dn(e)) || t === "script" && u.querySelector(hn(e)) || (t = u.createElement("link"), Cl(t, "link", l), Ml(t), u.head.appendChild(t)));
    }
  }
  function ld(l, t) {
    Jt.m(l, t);
    var a = Eu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + it(u) + '"][href="' + it(l) + '"]', e = n;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          e = Tu(l);
      }
      if (!ot.has(e) && (l = q({
        rel: "modulepreload",
        href: l
      }, t), ot.set(e, l), a.querySelector(n) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(hn(e))) return;
        }
        u = a.createElement("link"), Cl(u, "link", l), Ml(u), a.head.appendChild(u);
      }
    }
  }
  function td(l, t, a) {
    Jt.S(l, t, a);
    var u = Eu;
    if (u && l) {
      var n = Ka(u).hoistableStyles, e = Au(l);
      t = t || "default";
      var i = n.get(e);
      if (!i) {
        var c = {
          loading: 0,
          preload: null
        };
        if (i = u.querySelector(dn(e))) c.loading = 5;
        else {
          l = q({
            rel: "stylesheet",
            href: l,
            "data-precedence": t
          }, a), (a = ot.get(e)) && Kc(l, a);
          var f = i = u.createElement("link");
          Ml(f), Cl(f, "link", l), f._p = new Promise(function(s, b) {
            f.onload = s, f.onerror = b;
          }), f.addEventListener("load", function() {
            c.loading |= 1;
          }), f.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Me(i, t, u);
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
    Jt.X(l, t);
    var a = Eu;
    if (a && l) {
      var u = Ka(a).hoistableScripts, n = Tu(l), e = u.get(n);
      e || (e = a.querySelector(hn(n)), e || (l = q({
        src: l,
        async: !0
      }, t), (t = ot.get(n)) && xc(l, t), e = a.createElement("script"), Ml(e), Cl(e, "link", l), a.head.appendChild(e)), e = {
        type: "script",
        instance: e,
        count: 1,
        state: null
      }, u.set(n, e));
    }
  }
  function ud(l, t) {
    Jt.M(l, t);
    var a = Eu;
    if (a && l) {
      var u = Ka(a).hoistableScripts, n = Tu(l), e = u.get(n);
      e || (e = a.querySelector(hn(n)), e || (l = q({
        src: l,
        async: !0,
        type: "module"
      }, t), (t = ot.get(n)) && xc(l, t), e = a.createElement("script"), Ml(e), Cl(e, "link", l), a.head.appendChild(e)), e = {
        type: "script",
        instance: e,
        count: 1,
        state: null
      }, u.set(n, e));
    }
  }
  function Qv(l, t, a, u) {
    var n = (n = x.current) ? Oe(n) : null;
    if (!n) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Au(a.href), a = Ka(n).hoistableStyles, u = a.get(t), u || (u = {
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
          l = Au(a.href);
          var e = Ka(n).hoistableStyles, i = e.get(l);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, e.set(l, i), (e = n.querySelector(dn(l))) && !e._p && (i.instance = e, i.state.loading = 5), ot.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, ot.set(l, a), e || nd(n, l, a, i.state))), t && u === null) throw Error(o(528, ""));
          return i;
        }
        if (t && u !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Tu(a), a = Ka(n).hoistableScripts, u = a.get(t), u || (u = {
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
  function Au(l) {
    return 'href="' + it(l) + '"';
  }
  function dn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Xv(l) {
    return q({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function nd(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
      return u.loading |= 1;
    }), t.addEventListener("error", function() {
      return u.loading |= 2;
    }), Cl(t, "link", a), Ml(t), l.head.appendChild(t));
  }
  function Tu(l) {
    return '[src="' + it(l) + '"]';
  }
  function hn(l) {
    return "script[async]" + l;
  }
  function Zv(l, t, a) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var u = l.querySelector('style[data-href~="' + it(a.href) + '"]');
        if (u) return t.instance = u, Ml(u), u;
        var n = q({}, a, {
          "data-href": a.href,
          "data-precedence": a.precedence,
          href: null,
          precedence: null
        });
        return u = (l.ownerDocument || l).createElement("style"), Ml(u), Cl(u, "style", n), Me(u, a.precedence, l), t.instance = u;
      case "stylesheet":
        n = Au(a.href);
        var e = l.querySelector(dn(n));
        if (e) return t.state.loading |= 4, t.instance = e, Ml(e), e;
        u = Xv(a), (n = ot.get(n)) && Kc(u, n), e = (l.ownerDocument || l).createElement("link"), Ml(e);
        var i = e;
        return i._p = new Promise(function(c, f) {
          i.onload = c, i.onerror = f;
        }), Cl(e, "link", u), t.state.loading |= 4, Me(e, a.precedence, l), t.instance = e;
      case "script":
        return e = Tu(a.src), (n = l.querySelector(hn(e))) ? (t.instance = n, Ml(n), n) : (u = a, (n = ot.get(e)) && (u = q({}, a), xc(u, n)), l = l.ownerDocument || l, n = l.createElement("script"), Ml(n), Cl(n, "link", u), l.head.appendChild(n), t.instance = n);
      case "void":
        return null;
      default:
        throw Error(o(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, Me(u, a.precedence, l));
    return t.instance;
  }
  function Me(l, t, a) {
    for (var u = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = u.length ? u[u.length - 1] : null, e = n, i = 0; i < u.length; i++) {
      var c = u[i];
      if (c.dataset.precedence === t) e = c;
      else if (e !== n) break;
    }
    e ? e.parentNode.insertBefore(l, e.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function Kc(l, t) {
    l.crossOrigin ??= t.crossOrigin, l.referrerPolicy ??= t.referrerPolicy, l.title ??= t.title;
  }
  function xc(l, t) {
    l.crossOrigin ??= t.crossOrigin, l.referrerPolicy ??= t.referrerPolicy, l.integrity ??= t.integrity;
  }
  var De = null;
  function Lv(l, t, a) {
    if (De === null) {
      var u = /* @__PURE__ */ new Map(), n = De = /* @__PURE__ */ new Map();
      n.set(a, u);
    } else n = De, u = n.get(a), u || (u = /* @__PURE__ */ new Map(), n.set(a, u));
    if (u.has(l)) return u;
    for (u.set(l, null), a = a.getElementsByTagName(l), n = 0; n < a.length; n++) {
      var e = a[n];
      if (!(e[pu] || e[Ul] || l === "link" && e.getAttribute("rel") === "stylesheet") && e.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = e.getAttribute(t) || "";
        i = l + i;
        var c = u.get(i);
        c ? c.push(e) : u.set(i, [e]);
      }
    }
    return u;
  }
  function Vv(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(a, t === "title" ? l.querySelector("head > title") : null);
  }
  function ed(l, t, a) {
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
  function Kv(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function id(l, t, a, u) {
    if (a.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var n = Au(u.href), e = t.querySelector(dn(n));
        if (e) {
          t = e._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Ue.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = e, Ml(e);
          return;
        }
        e = t.ownerDocument || t, u = Xv(u), (n = ot.get(n)) && Kc(u, n), e = e.createElement("link"), Ml(e);
        var i = e;
        i._p = new Promise(function(c, f) {
          i.onload = c, i.onerror = f;
        }), Cl(e, "link", u), a.instance = e;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Ue.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var rc = 0;
  function cd(l, t) {
    return l.stylesheets && l.count === 0 && He(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var u = setTimeout(function() {
        if (l.stylesheets && He(l, l.stylesheets), l.unsuspend) {
          var e = l.unsuspend;
          l.unsuspend = null, e();
        }
      }, 6e4 + t);
      0 < l.imgBytes && rc === 0 && (rc = 62500 * Lm());
      var n = setTimeout(function() {
        if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && He(l, l.stylesheets), l.unsuspend)) {
          var e = l.unsuspend;
          l.unsuspend = null, e();
        }
      }, (l.imgBytes > rc ? 50 : 800) + t);
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(u), clearTimeout(n);
      };
    } : null;
  }
  function Ue() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) He(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var pe = null;
  function He(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, pe = /* @__PURE__ */ new Map(), t.forEach(fd, l), pe = null, Ue.call(l));
  }
  function fd(l, t) {
    if (!(t.state.loading & 4)) {
      var a = pe.get(l);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), pe.set(l, a);
        for (var n = l.querySelectorAll("link[data-precedence],style[data-precedence]"), e = 0; e < n.length; e++) {
          var i = n[e];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), u = i);
        }
        u && a.set(null, u);
      }
      n = t.instance, i = n.getAttribute("data-precedence"), e = a.get(i) || u, e === u && a.set(null, n), a.set(i, n), this.count++, u = Ue.bind(this), n.addEventListener("load", u), n.addEventListener("error", u), e ? e.parentNode.insertBefore(n, e.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(n, l.firstChild)), t.state.loading |= 4;
    }
  }
  var sn = {
    $$typeof: Ol,
    Provider: null,
    Consumer: null,
    _currentValue: ll,
    _currentValue2: ll,
    _threadCount: 0
  };
  function vd(l, t, a, u, n, e, i, c, f) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ve(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ve(0), this.hiddenUpdates = Ve(null), this.identifierPrefix = u, this.onUncaughtError = n, this.onCaughtError = e, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function yd(l, t, a, u, n, e, i, c, f, s, b, E) {
    return l = new vd(l, t, a, i, f, s, b, E, c), t = 1, e === !0 && (t |= 24), e = lt(3, null, null, t), l.current = e, e.stateNode = l, t = Mi(), t.refCount++, l.pooledCache = t, t.refCount++, e.memoizedState = {
      element: u,
      isDehydrated: a,
      cache: t
    }, Hi(e), l;
  }
  function md(l) {
    return l ? (l = Pa, l) : Pa;
  }
  function xv(l, t, a, u, n, e) {
    n = md(n), u.context === null ? u.context = n : u.pendingContext = n, u = qa(t), u.payload = { element: a }, e = e === void 0 ? null : e, e !== null && (u.callback = e), a = Ya(l, u, t), a !== null && (Kl(a, l, t), ru(a, l, t));
  }
  function rv(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Jc(l, t) {
    rv(l, t), (l = l.alternate) && rv(l, t);
  }
  function Jv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ma(l, 67108864);
      t !== null && Kl(t, l, 67108864), Jc(l, 67108864);
    }
  }
  function wv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ht();
      t = df(t);
      var a = Ma(l, t);
      a !== null && Kl(a, l, t), Jc(l, t);
    }
  }
  var Ne = !0;
  function dd(l, t, a, u) {
    var n = _.T;
    _.T = null;
    var e = M.p;
    try {
      M.p = 2, wc(l, t, a, u);
    } finally {
      M.p = e, _.T = n;
    }
  }
  function hd(l, t, a, u) {
    var n = _.T;
    _.T = null;
    var e = M.p;
    try {
      M.p = 8, wc(l, t, a, u);
    } finally {
      M.p = e, _.T = n;
    }
  }
  function wc(l, t, a, u) {
    if (Ne) {
      var n = Wc(u);
      if (n === null) Bc(l, t, u, Ce, a), $v(l, u);
      else if (od(n, l, t, a, u)) u.stopPropagation();
      else if ($v(l, u), t & 4 && -1 < sd.indexOf(l)) {
        for (; n !== null; ) {
          var e = Va(n);
          if (e !== null) switch (e.tag) {
            case 3:
              if (e = e.stateNode, e.current.memoizedState.isDehydrated) {
                var i = Ea(e.pendingLanes);
                if (i !== 0) {
                  var c = e;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                    var f = 1 << 31 - Il(i);
                    c.entanglements[1] |= f, i &= ~f;
                  }
                  rt(e), (tl & 6) === 0 && (he = Fl() + 500, fn(0, !1));
                }
              }
              break;
            case 31:
            case 13:
              c = Ma(e, 2), c !== null && Kl(c, e, 2), oe(), Jc(e, 2);
          }
          if (e = Wc(u), e === null && Bc(l, t, u, Ce, a), e === n) break;
          n = e;
        }
        n !== null && u.stopPropagation();
      } else Bc(l, t, u, null, a);
    }
  }
  function Wc(l) {
    return l = ke(l), $c(l);
  }
  var Ce = null;
  function $c(l) {
    if (Ce = null, l = La(l), l !== null) {
      var t = G(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = P(t), l !== null) return l;
          l = null;
        } else if (a === 31) {
          if (l = vl(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Ce = l, null;
  }
  function Wv(l) {
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
        switch (cy()) {
          case nf:
            return 2;
          case ef:
            return 8;
          case zn:
          case fy:
            return 32;
          case cf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Fc = !1, ha = null, sa = null, oa = null, on = /* @__PURE__ */ new Map(), Sn = /* @__PURE__ */ new Map(), Sa = [], sd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function $v(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ha = null;
        break;
      case "dragenter":
      case "dragleave":
        sa = null;
        break;
      case "mouseover":
      case "mouseout":
        oa = null;
        break;
      case "pointerover":
      case "pointerout":
        on.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Sn.delete(t.pointerId);
    }
  }
  function gn(l, t, a, u, n, e) {
    return l === null || l.nativeEvent !== e ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: u,
      nativeEvent: e,
      targetContainers: [n]
    }, t !== null && (t = Va(t), t !== null && Jv(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), l);
  }
  function od(l, t, a, u, n) {
    switch (t) {
      case "focusin":
        return ha = gn(ha, l, t, a, u, n), !0;
      case "dragenter":
        return sa = gn(sa, l, t, a, u, n), !0;
      case "mouseover":
        return oa = gn(oa, l, t, a, u, n), !0;
      case "pointerover":
        var e = n.pointerId;
        return on.set(e, gn(on.get(e) || null, l, t, a, u, n)), !0;
      case "gotpointercapture":
        return e = n.pointerId, Sn.set(e, gn(Sn.get(e) || null, l, t, a, u, n)), !0;
    }
    return !1;
  }
  function Fv(l) {
    var t = La(l.target);
    if (t !== null) {
      var a = G(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = P(a), t !== null) {
            l.blockedOn = t, sf(l.priority, function() {
              wv(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = vl(a), t !== null) {
            l.blockedOn = t, sf(l.priority, function() {
              wv(a);
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
  function Re(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = Wc(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        Fe = u, a.target.dispatchEvent(u), Fe = null;
      } else return t = Va(a), t !== null && Jv(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function kv(l, t, a) {
    Re(l) && a.delete(t);
  }
  function Sd() {
    Fc = !1, ha !== null && Re(ha) && (ha = null), sa !== null && Re(sa) && (sa = null), oa !== null && Re(oa) && (oa = null), on.forEach(kv), Sn.forEach(kv);
  }
  function Be(l, t) {
    l.blockedOn === t && (l.blockedOn = null, Fc || (Fc = !0, U.unstable_scheduleCallback(U.unstable_NormalPriority, Sd)));
  }
  var qe = null;
  function Iv(l) {
    qe !== l && (qe = l, U.unstable_scheduleCallback(U.unstable_NormalPriority, function() {
      qe === l && (qe = null);
      for (var t = 0; t < l.length; t += 3) {
        var a = l[t], u = l[t + 1], n = l[t + 2];
        if (typeof u != "function") {
          if ($c(u || a) === null) continue;
          break;
        }
        var e = Va(a);
        e !== null && (l.splice(t, 3), t -= 3, $i(e, {
          pending: !0,
          data: n,
          method: a.method,
          action: u
        }, u, n));
      }
    }));
  }
  function _u(l) {
    function t(f) {
      return Be(f, l);
    }
    ha !== null && Be(ha, l), sa !== null && Be(sa, l), oa !== null && Be(oa, l), on.forEach(t), Sn.forEach(t);
    for (var a = 0; a < Sa.length; a++) {
      var u = Sa[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < Sa.length && (a = Sa[0], a.blockedOn === null); ) Fv(a), a.blockedOn === null && Sa.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null) for (u = 0; u < a.length; u += 3) {
      var n = a[u], e = a[u + 1], i = n[Gl] || null;
      if (typeof e == "function") i || Iv(a);
      else if (i) {
        var c = null;
        if (e && e.hasAttribute("formAction")) {
          if (n = e, i = e[Gl] || null) c = i.formAction;
          else if ($c(n) !== null) continue;
        } else c = i.action;
        typeof c == "function" ? a[u + 1] = c : (a.splice(u, 3), u -= 3), Iv(a);
      }
    }
  }
  function gd() {
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
  function kc(l) {
    this._internalRoot = l;
  }
  Ic.prototype.render = kc.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var a = t.current;
    xv(a, ht(), l, t, null, null);
  }, Ic.prototype.unmount = kc.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      xv(l.current, 2, null, l, null, null), oe(), t[Uu] = null;
    }
  };
  function Ic(l) {
    this._internalRoot = l;
  }
  Ic.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = hf();
      l = {
        blockedOn: null,
        target: l,
        priority: t
      };
      for (var a = 0; a < Sa.length && t !== 0 && t < Sa[a].priority; a++) ;
      Sa.splice(a, 0, l), a === 0 && Fv(l);
    }
  };
  var Pv = j.version;
  if (Pv !== "19.2.7") throw Error(o(527, Pv, "19.2.7"));
  M.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
    return l = T(t), l = l !== null ? Z(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var bd = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ye = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ye.isDisabled && Ye.supportsFiber) try {
      Mu = Ye.inject(bd), kl = Ye;
    } catch {
    }
  }
  d.createRoot = function(l, t) {
    if (!C(l)) throw Error(o(299));
    var a = !1, u = "", n = hm, e = sm, i = om;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (e = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = yd(l, 1, !1, null, null, a, u, null, n, e, i, gd), l[Uu] = t.current, Ev(l), new kc(t);
  };
})), Rd = /* @__PURE__ */ Ut(((d, U) => {
  function j() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j);
      } catch (X) {
        console.error(X);
      }
  }
  j(), U.exports = Cd();
})), ly = /* @__PURE__ */ uy(tf(), 1), Bd = /* @__PURE__ */ uy(Rd(), 1), qd = class {
  listeners = /* @__PURE__ */ new Map();
  eventHistory = [];
  maxHistorySize;
  eventTarget;
  constructor(d = {}) {
    this.maxHistorySize = d.maxHistorySize ?? 100, this.eventTarget = d.eventTarget;
  }
  configure(d) {
    this.maxHistorySize = d.maxHistorySize ?? this.maxHistorySize, this.eventTarget = d.eventTarget ?? this.eventTarget;
  }
  on(d, U) {
    return this.listeners.has(d) || this.listeners.set(d, /* @__PURE__ */ new Set()), this.listeners.get(d).add(U), () => {
      this.listeners.get(d)?.delete(U);
    };
  }
  once(d, U) {
    const j = this.on(d, (X) => {
      U(X), j();
    });
    return j;
  }
  emit(d, U, j) {
    const X = {
      type: d,
      source: U,
      payload: j,
      timestamp: Date.now()
    };
    this.eventHistory.push(X), this.eventHistory.length > this.maxHistorySize && this.eventHistory.shift();
    const o = this.listeners.get(d);
    o && o.forEach((G) => {
      try {
        G(X);
      } catch (P) {
        console.error(`[EventBus] Error in listener for ${d}:`, P);
      }
    });
    const C = this.eventTarget ?? (typeof window < "u" ? window : void 0);
    if (C && typeof CustomEvent < "u") {
      const G = new CustomEvent("platform-event", {
        detail: X,
        bubbles: !0
      });
      C.dispatchEvent(G);
    }
  }
  getHistory(d) {
    return d ? this.eventHistory.filter((U) => U.type === d) : [...this.eventHistory];
  }
  clearHistory() {
    this.eventHistory = [];
  }
  off(d) {
    this.listeners.delete(d);
  }
  clear() {
    this.listeners.clear();
  }
}, Pc = new qd(), lf = {
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
function Yd(d) {
  return d instanceof Error ? {
    name: d.name,
    message: d.message,
    stack: d.stack
  } : { message: typeof d == "string" ? d : "Unknown runtime error" };
}
function ty({ app: d, error: U, logger: j, source: X = "runtime", metadata: o }) {
  const C = {
    level: "error",
    message: `${d.name} failed in ${X}`,
    appId: d.id,
    source: X,
    error: Yd(U),
    metadata: o,
    timestamp: Date.now()
  };
  return Pc.emit(lf.APP_ERROR, d.id, C), j?.log(C), C;
}
function jd(d, U, j = {}) {
  const X = customElements.get(d);
  if (X) return X;
  class o extends HTMLElement {
    static observedAttributes = j.observedAttributes ?? [];
    cleanup;
    async connectedCallback() {
      const G = this.createContext();
      try {
        const P = await U.mount(this, G);
        this.cleanup = typeof P == "function" ? P : void 0, Pc.emit(lf.APP_LOADED, G.app.id, { tagName: d });
      } catch (P) {
        throw ty({
          app: G.app,
          error: P,
          logger: j.logger,
          source: "micro-app-connected-callback",
          metadata: { tagName: d }
        }), P;
      }
    }
    disconnectedCallback() {
      window.setTimeout(() => {
        try {
          this.cleanup?.(), U.unmount?.(this), Pc.emit(lf.APP_UNLOADED, this.getAttribute("data-app-name") ?? d, { tagName: d });
        } catch (G) {
          ty({
            app: {
              id: this.getAttribute("data-app-name") ?? d,
              name: this.getAttribute("data-app-name") ?? d
            },
            error: G,
            logger: j.logger,
            source: "micro-app-disconnected-callback",
            metadata: { tagName: d }
          });
        }
      }, 0);
    }
    createContext() {
      return {
        app: {
          id: this.getAttribute("data-app-name") ?? d,
          name: this.getAttribute("data-app-name") ?? d,
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
            tagName: d
          },
          version: this.getAttribute("data-version") ?? "0.0.0",
          owner: "",
          permissions: []
        },
        shellOrigin: this.getAttribute("data-shell-origin") ?? window.location.origin
      };
    }
  }
  return customElements.define(d, o), o;
}
var Gd = /* @__PURE__ */ Ut(((d) => {
  var U = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.fragment");
  function X(o, C, G) {
    var P = null;
    if (G !== void 0 && (P = "" + G), C.key !== void 0 && (P = "" + C.key), "key" in C) {
      G = {};
      for (var vl in C) vl !== "key" && (G[vl] = C[vl]);
    } else G = C;
    return C = G.ref, {
      $$typeof: U,
      type: o,
      key: P,
      ref: C !== void 0 ? C : null,
      props: G
    };
  }
  d.jsx = X, d.jsxs = X;
})), Qd = /* @__PURE__ */ Ut(((d, U) => {
  U.exports = Gd();
})), V = Qd();
function Xd() {
  const [d, U] = (0, ly.useState)([
    {
      id: "INV-001",
      amount: 2500,
      date: "2024-06-01",
      status: "paid",
      description: "Platform Subscription - June"
    },
    {
      id: "INV-002",
      amount: 500,
      date: "2024-06-15",
      status: "pending",
      description: "Additional Services"
    },
    {
      id: "INV-003",
      amount: 1200,
      date: "2024-05-01",
      status: "overdue",
      description: "Platform Subscription - May"
    }
  ]);
  (0, ly.useEffect)(() => {
    console.log("[BillingApp] Micro app loaded");
    const C = (G) => {
      console.log("[BillingApp] Event received:", G.detail);
    };
    return window.addEventListener("platform-event", C), () => window.removeEventListener("platform-event", C);
  }, []);
  const j = d.reduce((C, G) => C + G.amount, 0), X = d.filter((C) => C.status === "paid").reduce((C, G) => C + G.amount, 0), o = d.filter((C) => C.status === "pending").reduce((C, G) => C + G.amount, 0);
  return /* @__PURE__ */ (0, V.jsxs)("div", {
    className: "micro-app-container",
    style: { fontFamily: "system-ui, -apple-system, sans-serif" },
    children: [
      /* @__PURE__ */ (0, V.jsxs)("div", {
        className: "micro-app-header",
        children: [/* @__PURE__ */ (0, V.jsx)("h1", { children: "💳 Billing Management" }), /* @__PURE__ */ (0, V.jsx)("p", { children: "Invoice and payment tracking for your account" })]
      }),
      /* @__PURE__ */ (0, V.jsxs)("div", {
        className: "stats-grid",
        children: [
          /* @__PURE__ */ (0, V.jsxs)("div", {
            className: "stat-card",
            children: [/* @__PURE__ */ (0, V.jsx)("div", {
              className: "stat-label",
              children: "Total Invoices"
            }), /* @__PURE__ */ (0, V.jsxs)("div", {
              className: "stat-value",
              children: ["$", j.toLocaleString()]
            })]
          }),
          /* @__PURE__ */ (0, V.jsxs)("div", {
            className: "stat-card",
            children: [/* @__PURE__ */ (0, V.jsx)("div", {
              className: "stat-label",
              children: "Paid"
            }), /* @__PURE__ */ (0, V.jsxs)("div", {
              className: "stat-value paid",
              children: ["$", X.toLocaleString()]
            })]
          }),
          /* @__PURE__ */ (0, V.jsxs)("div", {
            className: "stat-card",
            children: [/* @__PURE__ */ (0, V.jsx)("div", {
              className: "stat-label",
              children: "Pending"
            }), /* @__PURE__ */ (0, V.jsxs)("div", {
              className: "stat-value pending",
              children: ["$", o.toLocaleString()]
            })]
          }),
          /* @__PURE__ */ (0, V.jsxs)("div", {
            className: "stat-card",
            children: [/* @__PURE__ */ (0, V.jsx)("div", {
              className: "stat-label",
              children: "Overdue"
            }), /* @__PURE__ */ (0, V.jsxs)("div", {
              className: "stat-value overdue",
              children: ["$", d.filter((C) => C.status === "overdue").reduce((C, G) => C + G.amount, 0).toLocaleString()]
            })]
          })
        ]
      }),
      /* @__PURE__ */ (0, V.jsxs)("div", {
        className: "invoices-section",
        children: [/* @__PURE__ */ (0, V.jsx)("h2", { children: "Recent Invoices" }), /* @__PURE__ */ (0, V.jsxs)("table", {
          className: "invoices-table",
          children: [/* @__PURE__ */ (0, V.jsx)("thead", { children: /* @__PURE__ */ (0, V.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, V.jsx)("th", { children: "Invoice ID" }),
            /* @__PURE__ */ (0, V.jsx)("th", { children: "Date" }),
            /* @__PURE__ */ (0, V.jsx)("th", { children: "Description" }),
            /* @__PURE__ */ (0, V.jsx)("th", { children: "Amount" }),
            /* @__PURE__ */ (0, V.jsx)("th", { children: "Status" })
          ] }) }), /* @__PURE__ */ (0, V.jsx)("tbody", { children: d.map((C) => /* @__PURE__ */ (0, V.jsxs)("tr", { children: [
            /* @__PURE__ */ (0, V.jsx)("td", {
              className: "invoice-id",
              children: C.id
            }),
            /* @__PURE__ */ (0, V.jsx)("td", { children: C.date }),
            /* @__PURE__ */ (0, V.jsx)("td", { children: C.description }),
            /* @__PURE__ */ (0, V.jsxs)("td", {
              className: "amount",
              children: ["$", C.amount.toLocaleString()]
            }),
            /* @__PURE__ */ (0, V.jsx)("td", { children: /* @__PURE__ */ (0, V.jsx)("span", {
              className: `status-badge status-${C.status}`,
              children: C.status.charAt(0).toUpperCase() + C.status.slice(1)
            }) })
          ] }, C.id)) })]
        })]
      }),
      /* @__PURE__ */ (0, V.jsxs)("div", {
        className: "actions",
        children: [/* @__PURE__ */ (0, V.jsx)("button", {
          className: "btn btn-primary",
          children: "Download Invoice"
        }), /* @__PURE__ */ (0, V.jsx)("button", {
          className: "btn btn-secondary",
          children: "Pay Now"
        })]
      })
    ]
  });
}
var Zd = jd("micro-billing-app", { mount(d) {
  const U = Bd.createRoot(d);
  return U.render(/* @__PURE__ */ (0, V.jsx)(Xd, {})), () => U.unmount();
} });
export {
  Zd as MicroBillingApp
};
