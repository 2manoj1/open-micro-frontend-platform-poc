var Ed = Object.create, ay = Object.defineProperty, Ad = Object.getOwnPropertyDescriptor, Td = Object.getOwnPropertyNames, _d = Object.getPrototypeOf, Od = Object.prototype.hasOwnProperty, Ut = (s, O) => () => (O || (s((O = { exports: {} }).exports, O), s = null), O.exports), Md = (s, O, Y, Z) => {
  if (O && typeof O == "object" || typeof O == "function")
    for (var o = Td(O), al = 0, W = o.length, I; al < W; al++)
      I = o[al], !Od.call(s, I) && I !== Y && ay(s, I, {
        get: ((vl) => O[vl]).bind(null, I),
        enumerable: !(Z = Ad(O, I)) || Z.enumerable
      });
  return s;
}, uy = (s, O, Y) => (Y = s != null ? Ed(_d(s)) : {}, Md(O || !s || !s.__esModule ? ay(Y, "default", {
  value: s,
  enumerable: !0
}) : Y, s)), Dd = /* @__PURE__ */ Ut(((s) => {
  var O = /* @__PURE__ */ Symbol.for("react.transitional.element"), Y = /* @__PURE__ */ Symbol.for("react.portal"), Z = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), al = /* @__PURE__ */ Symbol.for("react.profiler"), W = /* @__PURE__ */ Symbol.for("react.consumer"), I = /* @__PURE__ */ Symbol.for("react.context"), vl = /* @__PURE__ */ Symbol.for("react.forward_ref"), C = /* @__PURE__ */ Symbol.for("react.suspense"), T = /* @__PURE__ */ Symbol.for("react.memo"), Q = /* @__PURE__ */ Symbol.for("react.lazy"), j = /* @__PURE__ */ Symbol.for("react.activity"), ot = Symbol.iterator;
  function Cl(y) {
    return y === null || typeof y != "object" ? null : (y = ot && y[ot] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var Bl = {
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
  function rl(y, A, M) {
    this.props = y, this.context = A, this.refs = wt, this.updater = M || Bl;
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
  function Ol(y, A, M) {
    this.props = y, this.context = A, this.refs = wt, this.updater = M || Bl;
  }
  var gt = Ol.prototype = new Wt();
  gt.constructor = Ol, Kl(gt, rl.prototype), gt.isPureReactComponent = !0;
  var Jl = Array.isArray;
  function wl() {
  }
  var $ = {
    H: null,
    A: null,
    T: null,
    S: null
  }, Yl = Object.prototype.hasOwnProperty;
  function Tt(y, A, M) {
    var H = M.ref;
    return {
      $$typeof: O,
      type: y,
      key: A,
      ref: H !== void 0 ? H : null,
      props: M
    };
  }
  function ba(y, A) {
    return Tt(y.type, A, y.props);
  }
  function Wl(y) {
    return typeof y == "object" && y !== null && y.$$typeof === O;
  }
  function _t(y) {
    var A = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + y.replace(/[=:]/g, function(M) {
      return A[M];
    });
  }
  var Za = /\/+/g;
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
  function _(y, A, M, H, L) {
    var V = typeof y;
    (V === "undefined" || V === "boolean") && (y = null);
    var tl = !1;
    if (y === null) tl = !0;
    else switch (V) {
      case "bigint":
      case "string":
      case "number":
        tl = !0;
        break;
      case "object":
        switch (y.$$typeof) {
          case O:
          case Y:
            tl = !0;
            break;
          case Q:
            return tl = y._init, _(tl(y._payload), A, M, H, L);
        }
    }
    if (tl) return L = L(y), tl = H === "" ? "." + bt(y, 0) : H, Jl(L) ? (M = "", tl != null && (M = tl.replace(Za, "$&/") + "/"), _(L, A, M, "", function(Ou) {
      return Ou;
    })) : L != null && (Wl(L) && (L = ba(L, M + (L.key == null || y && y.key === L.key ? "" : ("" + L.key).replace(Za, "$&/") + "/") + tl)), A.push(L)), 1;
    tl = 0;
    var jl = H === "" ? "." : H + ":";
    if (Jl(y)) for (var ol = 0; ol < y.length; ol++) H = y[ol], V = jl + bt(H, ol), tl += _(H, A, M, V, L);
    else if (ol = Cl(y), typeof ol == "function") for (y = ol.call(y), ol = 0; !(H = y.next()).done; ) H = H.value, V = jl + bt(H, ol++), tl += _(H, A, M, V, L);
    else if (V === "object") {
      if (typeof y.then == "function") return _(U(y), A, M, H, L);
      throw A = String(y), Error("Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead.");
    }
    return tl;
  }
  function D(y, A, M) {
    if (y == null) return y;
    var H = [], L = 0;
    return _(y, H, "", "", function(V) {
      return A.call(M, V, L++);
    }), H;
  }
  function P(y) {
    if (y._status === -1) {
      var A = y._result;
      A = A(), A.then(function(M) {
        (y._status === 0 || y._status === -1) && (y._status = 1, y._result = M);
      }, function(M) {
        (y._status === 0 || y._status === -1) && (y._status = 2, y._result = M);
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
    map: D,
    forEach: function(y, A, M) {
      D(y, function() {
        A.apply(this, arguments);
      }, M);
    },
    count: function(y) {
      var A = 0;
      return D(y, function() {
        A++;
      }), A;
    },
    toArray: function(y) {
      return D(y, function(A) {
        return A;
      }) || [];
    },
    only: function(y) {
      if (!Wl(y)) throw Error("React.Children.only expected to receive a single React element child.");
      return y;
    }
  };
  s.Activity = j, s.Children = $l, s.Component = rl, s.Fragment = Z, s.Profiler = al, s.PureComponent = Ol, s.StrictMode = o, s.Suspense = C, s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, s.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return $.H.useMemoCache(y);
    }
  }, s.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, s.cacheSignal = function() {
    return null;
  }, s.cloneElement = function(y, A, M) {
    if (y == null) throw Error("The argument must be a React element, but you passed " + y + ".");
    var H = Kl({}, y.props), L = y.key;
    if (A != null) for (V in A.key !== void 0 && (L = "" + A.key), A) !Yl.call(A, V) || V === "key" || V === "__self" || V === "__source" || V === "ref" && A.ref === void 0 || (H[V] = A[V]);
    var V = arguments.length - 2;
    if (V === 1) H.children = M;
    else if (1 < V) {
      for (var tl = Array(V), jl = 0; jl < V; jl++) tl[jl] = arguments[jl + 2];
      H.children = tl;
    }
    return Tt(y.type, L, H);
  }, s.createContext = function(y) {
    return y = {
      $$typeof: I,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: W,
      _context: y
    }, y;
  }, s.createElement = function(y, A, M) {
    var H, L = {}, V = null;
    if (A != null) for (H in A.key !== void 0 && (V = "" + A.key), A) Yl.call(A, H) && H !== "key" && H !== "__self" && H !== "__source" && (L[H] = A[H]);
    var tl = arguments.length - 2;
    if (tl === 1) L.children = M;
    else if (1 < tl) {
      for (var jl = Array(tl), ol = 0; ol < tl; ol++) jl[ol] = arguments[ol + 2];
      L.children = jl;
    }
    if (y && y.defaultProps) for (H in tl = y.defaultProps, tl) L[H] === void 0 && (L[H] = tl[H]);
    return Tt(y, V, L);
  }, s.createRef = function() {
    return { current: null };
  }, s.forwardRef = function(y) {
    return {
      $$typeof: vl,
      render: y
    };
  }, s.isValidElement = Wl, s.lazy = function(y) {
    return {
      $$typeof: Q,
      _payload: {
        _status: -1,
        _result: y
      },
      _init: P
    };
  }, s.memo = function(y, A) {
    return {
      $$typeof: T,
      type: y,
      compare: A === void 0 ? null : A
    };
  }, s.startTransition = function(y) {
    var A = $.T, M = {};
    $.T = M;
    try {
      var H = y(), L = $.S;
      L !== null && L(M, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(wl, yl);
    } catch (V) {
      yl(V);
    } finally {
      A !== null && M.types !== null && (A.types = M.types), $.T = A;
    }
  }, s.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, s.use = function(y) {
    return $.H.use(y);
  }, s.useActionState = function(y, A, M) {
    return $.H.useActionState(y, A, M);
  }, s.useCallback = function(y, A) {
    return $.H.useCallback(y, A);
  }, s.useContext = function(y) {
    return $.H.useContext(y);
  }, s.useDebugValue = function() {
  }, s.useDeferredValue = function(y, A) {
    return $.H.useDeferredValue(y, A);
  }, s.useEffect = function(y, A) {
    return $.H.useEffect(y, A);
  }, s.useEffectEvent = function(y) {
    return $.H.useEffectEvent(y);
  }, s.useId = function() {
    return $.H.useId();
  }, s.useImperativeHandle = function(y, A, M) {
    return $.H.useImperativeHandle(y, A, M);
  }, s.useInsertionEffect = function(y, A) {
    return $.H.useInsertionEffect(y, A);
  }, s.useLayoutEffect = function(y, A) {
    return $.H.useLayoutEffect(y, A);
  }, s.useMemo = function(y, A) {
    return $.H.useMemo(y, A);
  }, s.useOptimistic = function(y, A) {
    return $.H.useOptimistic(y, A);
  }, s.useReducer = function(y, A, M) {
    return $.H.useReducer(y, A, M);
  }, s.useRef = function(y) {
    return $.H.useRef(y);
  }, s.useState = function(y) {
    return $.H.useState(y);
  }, s.useSyncExternalStore = function(y, A, M) {
    return $.H.useSyncExternalStore(y, A, M);
  }, s.useTransition = function() {
    return $.H.useTransition();
  }, s.version = "19.2.7";
})), tf = /* @__PURE__ */ Ut(((s, O) => {
  O.exports = Dd();
})), Ud = /* @__PURE__ */ Ut(((s) => {
  function O(U, _) {
    var D = U.length;
    U.push(_);
    l: for (; 0 < D; ) {
      var P = D - 1 >>> 1, yl = U[P];
      if (0 < o(yl, _)) U[P] = _, U[D] = yl, D = P;
      else break l;
    }
  }
  function Y(U) {
    return U.length === 0 ? null : U[0];
  }
  function Z(U) {
    if (U.length === 0) return null;
    var _ = U[0], D = U.pop();
    if (D !== _) {
      U[0] = D;
      l: for (var P = 0, yl = U.length, $l = yl >>> 1; P < $l; ) {
        var y = 2 * (P + 1) - 1, A = U[y], M = y + 1, H = U[M];
        if (0 > o(A, D)) M < yl && 0 > o(H, A) ? (U[P] = H, U[M] = D, P = M) : (U[P] = A, U[y] = D, P = y);
        else if (M < yl && 0 > o(H, D)) U[P] = H, U[M] = D, P = M;
        else break l;
      }
    }
    return _;
  }
  function o(U, _) {
    var D = U.sortIndex - _.sortIndex;
    return D !== 0 ? D : U.id - _.id;
  }
  if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var al = performance;
    s.unstable_now = function() {
      return al.now();
    };
  } else {
    var W = Date, I = W.now();
    s.unstable_now = function() {
      return W.now() - I;
    };
  }
  var vl = [], C = [], T = 1, Q = null, j = 3, ot = !1, Cl = !1, Bl = !1, Kl = !1, wt = typeof setTimeout == "function" ? setTimeout : null, rl = typeof clearTimeout == "function" ? clearTimeout : null, Wt = typeof setImmediate < "u" ? setImmediate : null;
  function Ol(U) {
    for (var _ = Y(C); _ !== null; ) {
      if (_.callback === null) Z(C);
      else if (_.startTime <= U) Z(C), _.sortIndex = _.expirationTime, O(vl, _);
      else break;
      _ = Y(C);
    }
  }
  function gt(U) {
    if (Bl = !1, Ol(U), !Cl) if (Y(vl) !== null) Cl = !0, Jl || (Jl = !0, Wl());
    else {
      var _ = Y(C);
      _ !== null && bt(gt, _.startTime - U);
    }
  }
  var Jl = !1, wl = -1, $ = 5, Yl = -1;
  function Tt() {
    return Kl ? !0 : !(s.unstable_now() - Yl < $);
  }
  function ba() {
    if (Kl = !1, Jl) {
      var U = s.unstable_now();
      Yl = U;
      var _ = !0;
      try {
        l: {
          Cl = !1, Bl && (Bl = !1, rl(wl), wl = -1), ot = !0;
          var D = j;
          try {
            t: {
              for (Ol(U), Q = Y(vl); Q !== null && !(Q.expirationTime > U && Tt()); ) {
                var P = Q.callback;
                if (typeof P == "function") {
                  Q.callback = null, j = Q.priorityLevel;
                  var yl = P(Q.expirationTime <= U);
                  if (U = s.unstable_now(), typeof yl == "function") {
                    Q.callback = yl, Ol(U), _ = !0;
                    break t;
                  }
                  Q === Y(vl) && Z(vl), Ol(U);
                } else Z(vl);
                Q = Y(vl);
              }
              if (Q !== null) _ = !0;
              else {
                var $l = Y(C);
                $l !== null && bt(gt, $l.startTime - U), _ = !1;
              }
            }
            break l;
          } finally {
            Q = null, j = D, ot = !1;
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
  function bt(U, _) {
    wl = wt(function() {
      U(s.unstable_now());
    }, _);
  }
  s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(U) {
    U.callback = null;
  }, s.unstable_forceFrameRate = function(U) {
    0 > U || 125 < U ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $ = 0 < U ? Math.floor(1e3 / U) : 5;
  }, s.unstable_getCurrentPriorityLevel = function() {
    return j;
  }, s.unstable_next = function(U) {
    switch (j) {
      case 1:
      case 2:
      case 3:
        var _ = 3;
        break;
      default:
        _ = j;
    }
    var D = j;
    j = _;
    try {
      return U();
    } finally {
      j = D;
    }
  }, s.unstable_requestPaint = function() {
    Kl = !0;
  }, s.unstable_runWithPriority = function(U, _) {
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
    var D = j;
    j = U;
    try {
      return _();
    } finally {
      j = D;
    }
  }, s.unstable_scheduleCallback = function(U, _, D) {
    var P = s.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? P + D : P) : D = P, U) {
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
    }, D > P ? (U.sortIndex = D, O(C, U), Y(vl) === null && U === Y(C) && (Bl ? (rl(wl), wl = -1) : Bl = !0, bt(gt, D - P))) : (U.sortIndex = yl, O(vl, U), Cl || ot || (Cl = !0, Jl || (Jl = !0, Wl()))), U;
  }, s.unstable_shouldYield = Tt, s.unstable_wrapCallback = function(U) {
    var _ = j;
    return function() {
      var D = j;
      j = _;
      try {
        return U.apply(this, arguments);
      } finally {
        j = D;
      }
    };
  };
})), Nd = /* @__PURE__ */ Ut(((s, O) => {
  O.exports = Ud();
})), pd = /* @__PURE__ */ Ut(((s) => {
  var O = tf();
  function Y(C) {
    var T = "https://react.dev/errors/" + C;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Q = 2; Q < arguments.length; Q++) T += "&args[]=" + encodeURIComponent(arguments[Q]);
    }
    return "Minified React error #" + C + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Z() {
  }
  var o = {
    d: {
      f: Z,
      r: function() {
        throw Error(Y(522));
      },
      D: Z,
      C: Z,
      L: Z,
      m: Z,
      X: Z,
      S: Z,
      M: Z
    },
    p: 0,
    findDOMNode: null
  }, al = /* @__PURE__ */ Symbol.for("react.portal");
  function W(C, T, Q) {
    var j = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: al,
      key: j == null ? null : "" + j,
      children: C,
      containerInfo: T,
      implementation: Q
    };
  }
  var I = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function vl(C, T) {
    if (C === "font") return "";
    if (typeof T == "string") return T === "use-credentials" ? T : "";
  }
  s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, s.createPortal = function(C, T) {
    var Q = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11) throw Error(Y(299));
    return W(C, T, null, Q);
  }, s.flushSync = function(C) {
    var T = I.T, Q = o.p;
    try {
      if (I.T = null, o.p = 2, C) return C();
    } finally {
      I.T = T, o.p = Q, o.d.f();
    }
  }, s.preconnect = function(C, T) {
    typeof C == "string" && (T ? (T = T.crossOrigin, T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null, o.d.C(C, T));
  }, s.prefetchDNS = function(C) {
    typeof C == "string" && o.d.D(C);
  }, s.preinit = function(C, T) {
    if (typeof C == "string" && T && typeof T.as == "string") {
      var Q = T.as, j = vl(Q, T.crossOrigin), ot = typeof T.integrity == "string" ? T.integrity : void 0, Cl = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
      Q === "style" ? o.d.S(C, typeof T.precedence == "string" ? T.precedence : void 0, {
        crossOrigin: j,
        integrity: ot,
        fetchPriority: Cl
      }) : Q === "script" && o.d.X(C, {
        crossOrigin: j,
        integrity: ot,
        fetchPriority: Cl,
        nonce: typeof T.nonce == "string" ? T.nonce : void 0
      });
    }
  }, s.preinitModule = function(C, T) {
    if (typeof C == "string") if (typeof T == "object" && T !== null) {
      if (T.as == null || T.as === "script") {
        var Q = vl(T.as, T.crossOrigin);
        o.d.M(C, {
          crossOrigin: Q,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0
        });
      }
    } else T ?? o.d.M(C);
  }, s.preload = function(C, T) {
    if (typeof C == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
      var Q = T.as, j = vl(Q, T.crossOrigin);
      o.d.L(C, Q, {
        crossOrigin: j,
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
  }, s.preloadModule = function(C, T) {
    if (typeof C == "string") if (T) {
      var Q = vl(T.as, T.crossOrigin);
      o.d.m(C, {
        as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
        crossOrigin: Q,
        integrity: typeof T.integrity == "string" ? T.integrity : void 0
      });
    } else o.d.m(C);
  }, s.requestFormReset = function(C) {
    o.d.r(C);
  }, s.unstable_batchedUpdates = function(C, T) {
    return C(T);
  }, s.useFormState = function(C, T, Q) {
    return I.H.useFormState(C, T, Q);
  }, s.useFormStatus = function() {
    return I.H.useHostTransitionStatus();
  }, s.version = "19.2.7";
})), Hd = /* @__PURE__ */ Ut(((s, O) => {
  function Y() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y);
      } catch (Z) {
        console.error(Z);
      }
  }
  Y(), O.exports = pd();
})), Rd = /* @__PURE__ */ Ut(((s) => {
  var O = Nd(), Y = tf(), Z = Hd();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function al(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function W(l) {
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
  function I(l) {
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
  function C(l) {
    if (W(l) !== l) throw Error(o(188));
  }
  function T(l) {
    var t = l.alternate;
    if (!t) {
      if (t = W(l), t === null) throw Error(o(188));
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
          if (e === a) return C(n), l;
          if (e === u) return C(n), t;
          e = e.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== u.return) a = n, u = e;
      else {
        for (var c = !1, i = n.child; i; ) {
          if (i === a) {
            c = !0, a = n, u = e;
            break;
          }
          if (i === u) {
            c = !0, u = n, a = e;
            break;
          }
          i = i.sibling;
        }
        if (!c) {
          for (i = e.child; i; ) {
            if (i === a) {
              c = !0, a = e, u = n;
              break;
            }
            if (i === u) {
              c = !0, u = e, a = n;
              break;
            }
            i = i.sibling;
          }
          if (!c) throw Error(o(189));
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
  var j = Object.assign, ot = /* @__PURE__ */ Symbol.for("react.element"), Cl = /* @__PURE__ */ Symbol.for("react.transitional.element"), Bl = /* @__PURE__ */ Symbol.for("react.portal"), Kl = /* @__PURE__ */ Symbol.for("react.fragment"), wt = /* @__PURE__ */ Symbol.for("react.strict_mode"), rl = /* @__PURE__ */ Symbol.for("react.profiler"), Wt = /* @__PURE__ */ Symbol.for("react.consumer"), Ol = /* @__PURE__ */ Symbol.for("react.context"), gt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Jl = /* @__PURE__ */ Symbol.for("react.suspense"), wl = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), Yl = /* @__PURE__ */ Symbol.for("react.lazy"), Tt = /* @__PURE__ */ Symbol.for("react.activity"), ba = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Wl = Symbol.iterator;
  function _t(l) {
    return l === null || typeof l != "object" ? null : (l = Wl && l[Wl] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Za = /* @__PURE__ */ Symbol.for("react.client.reference");
  function bt(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === Za ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Kl:
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
      case Bl:
        return "Portal";
      case Ol:
        return l.displayName || "Context";
      case Wt:
        return (l._context.displayName || "Context") + ".Consumer";
      case gt:
        var t = l.render;
        return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
      case $:
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
  var U = Array.isArray, _ = Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Z.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
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
  function M(l, t) {
    $l++, yl[$l] = l.current, l.current = t;
  }
  var H = y(null), L = y(null), V = y(null), tl = y(null);
  function jl(l, t) {
    switch (M(V, t), M(L, l), M(H, null), t.nodeType) {
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
    A(H), M(H, l);
  }
  function ol() {
    A(H), A(L), A(V);
  }
  function Ou(l) {
    l.memoizedState !== null && M(tl, l);
    var t = H.current, a = Uv(t, l.type);
    t !== a && (M(L, l), M(H, a));
  }
  function bn(l) {
    L.current === l && (A(H), A(L)), tl.current === l && (A(tl), sn._currentValue = P);
  }
  var Ye, af;
  function za(l) {
    if (Ye === void 0) try {
      throw Error();
    } catch (a) {
      var t = a.stack.trim().match(/\n( *(at )?)/);
      Ye = t && t[1] || "", af = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Ye + l + af;
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
      var e = u.DetermineComponentFrameRoot(), c = e[0], i = e[1];
      if (c && i) {
        var f = c.split(`
`), h = i.split(`
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
  var Xe = Object.prototype.hasOwnProperty, Ze = O.unstable_scheduleCallback, Le = O.unstable_cancelCallback, ey = O.unstable_shouldYield, cy = O.unstable_requestPaint, Fl = O.unstable_now, iy = O.unstable_getCurrentPriorityLevel, nf = O.unstable_ImmediatePriority, ef = O.unstable_UserBlockingPriority, zn = O.unstable_NormalPriority, fy = O.unstable_LowPriority, cf = O.unstable_IdlePriority, vy = O.log, yy = O.unstable_setDisableYieldValue, Mu = null, kl = null;
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
    var n = 0, e = l.suspendedLanes, c = l.pingedLanes;
    l = l.warmLanes;
    var i = u & 134217727;
    return i !== 0 ? (u = i & ~e, u !== 0 ? n = Ea(u) : (c &= i, c !== 0 ? n = Ea(c) : a || (a = i & ~l, a !== 0 && (n = Ea(a))))) : (i = u & ~e, i !== 0 ? n = Ea(i) : c !== 0 ? n = Ea(c) : a || (a = u & ~l, a !== 0 && (n = Ea(a)))), n === 0 ? 0 : t !== 0 && t !== n && (t & e) === 0 && (e = n & -n, a = t & -t, e >= a || e === 32 && (a & 4194048) !== 0) ? t : n;
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
  function Sy(l, t, a, u, n, e) {
    var c = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var i = l.entanglements, f = l.expirationTimes, h = l.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var b = 31 - Il(a), E = 1 << b;
      i[b] = 0, f[b] = -1;
      var S = h[b];
      if (S !== null) for (h[b] = null, b = 0; b < S.length; b++) {
        var g = S[b];
        g !== null && (g.lane &= -536870913);
      }
      a &= ~E;
    }
    u !== 0 && vf(l, u, 0), e !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= e & ~(c & ~t));
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
  function xe(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function hf() {
    var l = D.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Wv(l.type));
  }
  function sf(l, t) {
    var a = D.p;
    try {
      return D.p = l, t();
    } finally {
      D.p = a;
    }
  }
  var Ft = Math.random().toString(36).slice(2), Ul = "__reactFiber$" + Ft, Gl = "__reactProps$" + Ft, Uu = "__reactContainer$" + Ft, Ke = "__reactEvents$" + Ft, oy = "__reactListeners$" + Ft, gy = "__reactHandles$" + Ft, Sf = "__reactResources$" + Ft, Nu = "__reactMarker$" + Ft;
  function re(l) {
    delete l[Ul], delete l[Gl], delete l[Ke], delete l[oy], delete l[gy];
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
  function pu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function xa(l) {
    var t = l[Sf];
    return t || (t = l[Sf] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), t;
  }
  function Ml(l) {
    l[Nu] = !0;
  }
  var of = /* @__PURE__ */ new Set(), gf = {};
  function Aa(l, t) {
    Ka(l, t), Ka(l + "Capture", t);
  }
  function Ka(l, t) {
    for (gf[l] = t, l = 0; l < t.length; l++) of.add(t[l]);
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
  function Nt(l, t, a, u) {
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
        set: function(c) {
          a = "" + c, e.call(this, c);
        }
      }), Object.defineProperty(l, t, { enumerable: u.enumerable }), {
        getValue: function() {
          return a;
        },
        setValue: function(c) {
          a = "" + c;
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
  function ct(l) {
    return l.replace(Ay, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function we(l, t, a, u, n, e, c, i) {
    l.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + et(t)) : l.value !== "" + et(t) && (l.value = "" + et(t)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"), t != null ? We(l, c, et(t)) : a != null ? We(l, c, et(a)) : u != null && l.removeAttribute("value"), n == null && e != null && (l.defaultChecked = !!e), n != null && (l.checked = n && typeof n != "function" && typeof n != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + et(i) : l.removeAttribute("name");
  }
  function Tf(l, t, a, u, n, e, c, i) {
    if (e != null && typeof e != "function" && typeof e != "symbol" && typeof e != "boolean" && (l.type = e), t != null || a != null) {
      if (!(e !== "submit" && e !== "reset" || t != null)) {
        Je(l);
        return;
      }
      a = a != null ? "" + et(a) : "", t = t != null ? "" + et(t) : a, i || t === l.value || (l.value = t), l.defaultValue = t;
    }
    u = u ?? n, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = i ? l.checked : !!u, l.defaultChecked = !!u, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c), Je(l);
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
        if (U(u)) {
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
  function Nn(l) {
    return Oy.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function pt() {
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
            for (a = a.querySelectorAll('input[name="' + ct("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
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
  function Nf(l, t, a) {
    if (Ie) return l(t, a);
    Ie = !0;
    try {
      return l(t);
    } finally {
      if (Ie = !1, (wa !== null || Wa !== null) && (Se(), wa && (t = wa, l = Wa, Wa = wa = null, Uf(t), l)))
        for (t = 0; t < l.length; t++) Uf(l[t]);
    }
  }
  function Hu(l, t) {
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
  var Ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pe = !1;
  if (Ht) try {
    var Ru = {};
    Object.defineProperty(Ru, "passive", { get: function() {
      Pe = !0;
    } }), window.addEventListener("test", Ru, Ru), window.removeEventListener("test", Ru, Ru);
  } catch {
    Pe = !1;
  }
  var kt = null, lc = null, pn = null;
  function pf() {
    if (pn) return pn;
    var l, t = lc, a = t.length, u, n = "value" in kt ? kt.value : kt.textContent, e = n.length;
    for (l = 0; l < a && t[l] === n[l]; l++) ;
    var c = a - l;
    for (u = 1; u <= c && t[a - u] === n[e - u]; u++) ;
    return pn = n.slice(l, 1 < u ? 1 - u : void 0);
  }
  function Hn(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Rn() {
    return !0;
  }
  function Hf() {
    return !1;
  }
  function Ql(l) {
    function t(a, u, n, e, c) {
      this._reactName = a, this._targetInst = n, this.type = u, this.nativeEvent = e, this.target = c, this.currentTarget = null;
      for (var i in l) l.hasOwnProperty(i) && (a = l[i], this[i] = a ? a(e) : e[i]);
      return this.isDefaultPrevented = (e.defaultPrevented != null ? e.defaultPrevented : e.returnValue === !1) ? Rn : Hf, this.isPropagationStopped = Hf, this;
    }
    return j(t.prototype, {
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
  var Ta = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Cn = Ql(Ta), Cu = j({}, Ta, {
    view: 0,
    detail: 0
  }), My = Ql(Cu), tc, ac, ju, jn = j({}, Cu, {
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
    getModifierState: nc,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== ju && (ju && l.type === "mousemove" ? (tc = l.screenX - ju.screenX, ac = l.screenY - ju.screenY) : ac = tc = 0, ju = l), tc);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ac;
    }
  }), Rf = Ql(jn), Dy = Ql(j({}, jn, { dataTransfer: 0 })), uc = Ql(j({}, Cu, { relatedTarget: 0 })), Uy = Ql(j({}, Ta, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), Ny = Ql(j({}, Ta, { clipboardData: function(l) {
    return "clipboardData" in l ? l.clipboardData : window.clipboardData;
  } })), Cf = Ql(j({}, Ta, { data: 0 })), py = {
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
  }, Hy = {
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
  function Cy(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Ry[l]) ? !!t[l] : !1;
  }
  function nc() {
    return Cy;
  }
  var jy = Ql(j({}, Cu, {
    key: function(l) {
      if (l.key) {
        var t = py[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Hn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Hy[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nc,
    charCode: function(l) {
      return l.type === "keypress" ? Hn(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Hn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  })), jf = Ql(j({}, jn, {
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
  })), qy = Ql(j({}, Cu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nc
  })), By = Ql(j({}, Ta, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), Yy = Ql(j({}, jn, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  })), Gy = Ql(j({}, Ta, {
    newState: 0,
    oldState: 0
  })), Qy = [
    9,
    13,
    27,
    32
  ], ec = Ht && "CompositionEvent" in window, qu = null;
  Ht && "documentMode" in document && (qu = document.documentMode);
  var Xy = Ht && "TextEvent" in window && !qu, qf = Ht && (!ec || qu && 8 < qu && 11 >= qu), Bf = " ", Yf = !1;
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
        return t.which !== 32 ? null : (Yf = !0, Bf);
      case "textInput":
        return l = t.data, l === Bf && Yf ? null : l;
      default:
        return null;
    }
  }
  function Ly(l, t) {
    if ($a) return l === "compositionend" || !ec && Gf(l, t) ? (l = pf(), pn = lc = kt = null, $a = !1, l) : null;
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
    wa ? Wa ? Wa.push(u) : Wa = [u] : wa = u, t = Te(t, "onChange"), 0 < t.length && (a = new Cn("onChange", "change", null, a, u), l.push({
      event: a,
      listeners: t
    }));
  }
  var Bu = null, Yu = null;
  function xy(l) {
    zv(l, 0);
  }
  function qn(l) {
    if (Af(pu(l))) return l;
  }
  function Lf(l, t) {
    if (l === "change") return t;
  }
  var Vf = !1;
  if (Ht) {
    var cc;
    if (Ht) {
      var ic = "oninput" in document;
      if (!ic) {
        var xf = document.createElement("div");
        xf.setAttribute("oninput", "return;"), ic = typeof xf.oninput == "function";
      }
      cc = ic;
    } else cc = !1;
    Vf = cc && (!document.documentMode || 9 < document.documentMode);
  }
  function Kf() {
    Bu && (Bu.detachEvent("onpropertychange", rf), Yu = Bu = null);
  }
  function rf(l) {
    if (l.propertyName === "value" && qn(Yu)) {
      var t = [];
      Zf(t, Yu, l, ke(l)), Nf(xy, t);
    }
  }
  function Ky(l, t, a) {
    l === "focusin" ? (Kf(), Bu = t, Yu = a, Bu.attachEvent("onpropertychange", rf)) : l === "focusout" && Kf();
  }
  function ry(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return qn(Yu);
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
  function fc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var $y = Ht && "documentMode" in document && 11 >= document.documentMode, Fa = null, vc = null, Qu = null, yc = !1;
  function Ff(l, t, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    yc || Fa == null || Fa !== Un(u) || (u = Fa, "selectionStart" in u && fc(u) ? u = {
      start: u.selectionStart,
      end: u.selectionEnd
    } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Qu && Gu(Qu, u) || (Qu = u, u = Te(vc, "onSelect"), 0 < u.length && (t = new Cn("onSelect", "select", null, t, a), l.push({
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
  }, mc = {}, kf = {};
  Ht && (kf = document.createElement("div").style, "AnimationEvent" in window || (delete ka.animationend.animation, delete ka.animationiteration.animation, delete ka.animationstart.animation), "TransitionEvent" in window || delete ka.transitionend.transition);
  function Oa(l) {
    if (mc[l]) return mc[l];
    if (!ka[l]) return l;
    var t = ka[l], a;
    for (a in t) if (t.hasOwnProperty(a) && a in kf) return mc[l] = t[a];
    return l;
  }
  var If = Oa("animationend"), Pf = Oa("animationiteration"), l0 = Oa("animationstart"), Fy = Oa("transitionrun"), ky = Oa("transitionstart"), Iy = Oa("transitioncancel"), t0 = Oa("transitionend"), a0 = /* @__PURE__ */ new Map(), dc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  dc.push("scrollEnd");
  function zt(l, t) {
    a0.set(l, t), Aa(t, [l]);
  }
  var Bn = typeof reportError == "function" ? reportError : function(l) {
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
  }, it = [], Ia = 0, hc = 0;
  function Yn() {
    for (var l = Ia, t = hc = Ia = 0; t < l; ) {
      var a = it[t];
      it[t++] = null;
      var u = it[t];
      it[t++] = null;
      var n = it[t];
      it[t++] = null;
      var e = it[t];
      if (it[t++] = null, u !== null && n !== null) {
        var c = u.pending;
        c === null ? n.next = n : (n.next = c.next, c.next = n), u.pending = n;
      }
      e !== 0 && u0(a, n, e);
    }
  }
  function Gn(l, t, a, u) {
    it[Ia++] = l, it[Ia++] = t, it[Ia++] = a, it[Ia++] = u, hc |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
  }
  function sc(l, t, a, u) {
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
    if (50 < cn) throw cn = 0, _i = null, Error(o(185));
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
  function Sc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Rt(l, t) {
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
    var c = 0;
    if (u = l, typeof l == "function") Sc(l) && (c = 1);
    else if (typeof l == "string") c = ed(l, a, H.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else l: switch (l) {
      case Tt:
        return l = lt(31, a, t, n), l.elementType = Tt, l.lanes = e, l;
      case Kl:
        return Da(a.children, n, e, t);
      case wt:
        c = 8, n |= 24;
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
            c = 10;
            break l;
          case Wt:
            c = 9;
            break l;
          case gt:
            c = 11;
            break l;
          case $:
            c = 14;
            break l;
          case Yl:
            c = 16, u = null;
            break l;
        }
        c = 29, a = Error(o(130, l === null ? "null" : typeof l, "")), u = null;
    }
    return t = lt(c, a, t, n), t.elementType = l, t.type = u, t.lanes = e, t;
  }
  function Da(l, t, a, u) {
    return l = lt(7, l, u, t), l.lanes = a, l;
  }
  function oc(l, t, a) {
    return l = lt(6, l, null, t), l.lanes = a, l;
  }
  function e0(l) {
    var t = lt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function gc(l, t, a) {
    return t = lt(4, l.children !== null ? l.children : [], l.key, t), t.lanes = a, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var c0 = /* @__PURE__ */ new WeakMap();
  function ft(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = c0.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: uf(t)
      }, c0.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: uf(t)
    };
  }
  var lu = [], tu = 0, Zn = null, Xu = 0, vt = [], yt = 0, It = null, Ot = 1, Mt = "";
  function Ct(l, t) {
    lu[tu++] = Xu, lu[tu++] = Zn, Zn = l, Xu = t;
  }
  function i0(l, t, a) {
    vt[yt++] = Ot, vt[yt++] = Mt, vt[yt++] = It, It = l;
    var u = Ot;
    l = Mt;
    var n = 32 - Il(u) - 1;
    u &= ~(1 << n), a += 1;
    var e = 32 - Il(t) + n;
    if (30 < e) {
      var c = n - n % 5;
      e = (u & (1 << c) - 1).toString(32), u >>= c, n -= c, Ot = 1 << 32 - Il(t) + n | a << n | u, Mt = e + l;
    } else Ot = 1 << e | a << n | u, Mt = l;
  }
  function bc(l) {
    l.return !== null && (Ct(l, 1), i0(l, 1, 0));
  }
  function zc(l) {
    for (; l === Zn; ) Zn = lu[--tu], lu[tu] = null, Xu = lu[--tu], lu[tu] = null;
    for (; l === It; ) It = vt[--yt], vt[yt] = null, Mt = vt[--yt], vt[yt] = null, Ot = vt[--yt], vt[yt] = null;
  }
  function f0(l, t) {
    vt[yt++] = Ot, vt[yt++] = Mt, vt[yt++] = It, Ot = t.id, Mt = t.overflow, It = l;
  }
  var Nl = null, ml = null, w = !1, Pt = null, mt = !1, Ec = Error(o(519));
  function la(l) {
    throw Zu(ft(Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), l)), Ec;
  }
  function v0(l) {
    var t = l.stateNode, a = l.type, u = l.memoizedProps;
    switch (t[Ul] = l, t[Gl] = u, a) {
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
        for (a = 0; a < vn.length; a++) K(vn[a], t);
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
        K("invalid", t), Tf(t, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, !0);
        break;
      case "select":
        K("invalid", t);
        break;
      case "textarea":
        K("invalid", t), Of(t, u.value, u.defaultValue, u.children);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === !0 || Ov(t.textContent, a) ? (u.popover != null && (K("beforetoggle", t), K("toggle", t)), u.onScroll != null && K("scroll", t), u.onScrollEnd != null && K("scrollend", t), u.onClick != null && (t.onclick = pt), t = !0) : t = !1, t || la(l, !0);
  }
  function y0(l) {
    for (Nl = l.return; Nl; ) switch (Nl.tag) {
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
        Nl = Nl.return;
    }
  }
  function au(l) {
    if (l !== Nl) return !1;
    if (!w) return y0(l), w = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Gi(l.type, l.memoizedProps)), a = !a), a && ml && la(l), y0(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      ml = jv(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      ml = jv(l);
    } else t === 27 ? (t = ml, da(l.type) ? (l = Vi, Vi = null, ml = l) : ml = t) : ml = Nl ? st(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ua() {
    ml = Nl = null, w = !1;
  }
  function Ac() {
    var l = Pt;
    return l !== null && (Vl === null ? Vl = l : Vl.push.apply(Vl, l), Pt = null), l;
  }
  function Zu(l) {
    Pt === null ? Pt = [l] : Pt.push(l);
  }
  var Tc = y(null), Na = null, jt = null;
  function ta(l, t, a) {
    M(Tc, t._currentValue), t._currentValue = a;
  }
  function qt(l) {
    l._currentValue = Tc.current, A(Tc);
  }
  function _c(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function Oc(l, t, a, u) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null; ) {
      var e = n.dependencies;
      if (e !== null) {
        var c = n.child;
        e = e.firstContext;
        l: for (; e !== null; ) {
          var i = e;
          e = n;
          for (var f = 0; f < t.length; f++) if (i.context === t[f]) {
            e.lanes |= a, i = e.alternate, i !== null && (i.lanes |= a), _c(e.return, a, l), u || (c = null);
            break l;
          }
          e = i.next;
        }
      } else if (n.tag === 18) {
        if (c = n.return, c === null) throw Error(o(341));
        c.lanes |= a, e = c.alternate, e !== null && (e.lanes |= a), _c(c, a, l), c = null;
      } else c = n.child;
      if (c !== null) c.return = n;
      else for (c = n; c !== null; ) {
        if (c === l) {
          c = null;
          break;
        }
        if (n = c.sibling, n !== null) {
          n.return = c.return, c = n;
          break;
        }
        c = c.return;
      }
      n = c;
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
        var c = n.alternate;
        if (c === null) throw Error(o(387));
        if (c = c.memoizedProps, c !== null) {
          var i = n.type;
          Pl(n.pendingProps.value, c.value) || (l !== null ? l.push(i) : l = [i]);
        }
      } else if (n === tl.current) {
        if (c = n.alternate, c === null) throw Error(o(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (l !== null ? l.push(sn) : l = [sn]);
      }
      n = n.return;
    }
    l !== null && Oc(t, l, a, u), t.flags |= 262144;
  }
  function Ln(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Pl(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function pa(l) {
    Na = l, jt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function pl(l) {
    return m0(Na, l);
  }
  function Vn(l, t) {
    return Na === null && pa(l), m0(l, t);
  }
  function m0(l, t) {
    var a = t._currentValue;
    if (t = {
      context: t,
      memoizedValue: a,
      next: null
    }, jt === null) {
      if (l === null) throw Error(o(308));
      jt = t, l.dependencies = {
        lanes: 0,
        firstContext: t
      }, l.flags |= 524288;
    } else jt = jt.next = t;
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
  }, tm = O.unstable_scheduleCallback, am = O.unstable_NormalPriority, zl = {
    $$typeof: Ol,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Mc() {
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
  var Vu = null, Dc = 0, nu = 0, eu = null;
  function um(l, t) {
    if (Vu === null) {
      var a = Vu = [];
      Dc = 0, nu = pi(), eu = {
        status: "pending",
        value: void 0,
        then: function(u) {
          a.push(u);
        }
      };
    }
    return Dc++, t.then(d0, d0), t;
  }
  function d0() {
    if (--Dc === 0 && Vu !== null) {
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
  var Ha = y(null);
  function Uc() {
    var l = Ha.current;
    return l !== null ? l : fl.pooledCache;
  }
  function xn(l, t) {
    t === null ? M(Ha, Ha.current) : M(Ha, t.pool);
  }
  function s0() {
    var l = Uc();
    return l === null ? null : {
      parent: zl._currentValue,
      pool: l
    };
  }
  var cu = Error(o(460)), Nc = Error(o(474)), Kn = Error(o(542)), rn = { then: function() {
  } };
  function S0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function o0(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(pt, pt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, b0(l), l;
      default:
        if (typeof t.status == "string") t.then(pt, pt);
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
        throw Ca = t, cu;
    }
  }
  function Ra(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ca = a, cu) : a;
    }
  }
  var Ca = null;
  function g0() {
    if (Ca === null) throw Error(o(459));
    var l = Ca;
    return Ca = null, l;
  }
  function b0(l) {
    if (l === cu || l === Kn) throw Error(o(483));
  }
  var iu = null, xu = 0;
  function Jn(l) {
    var t = xu;
    return xu += 1, iu === null && (iu = []), o0(iu, l, t);
  }
  function Ku(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function wn(l, t) {
    throw t.$$typeof === ot ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(o(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
  }
  function z0(l) {
    function t(m, v) {
      if (l) {
        var d = m.deletions;
        d === null ? (m.deletions = [v], m.flags |= 16) : d.push(v);
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
      return m = Rt(m, v), m.index = 0, m.sibling = null, m;
    }
    function e(m, v, d) {
      return m.index = d, l ? (d = m.alternate, d !== null ? (d = d.index, d < v ? (m.flags |= 67108866, v) : d) : (m.flags |= 67108866, v)) : (m.flags |= 1048576, v);
    }
    function c(m) {
      return l && m.alternate === null && (m.flags |= 67108866), m;
    }
    function i(m, v, d, z) {
      return v === null || v.tag !== 6 ? (v = oc(d, m.mode, z), v.return = m, v) : (v = n(v, d), v.return = m, v);
    }
    function f(m, v, d, z) {
      var R = d.type;
      return R === Kl ? b(m, v, d.props.children, z, d.key) : v !== null && (v.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Yl && Ra(R) === v.type) ? (v = n(v, d.props), Ku(v, d), v.return = m, v) : (v = Xn(d.type, d.key, d.props, null, m.mode, z), Ku(v, d), v.return = m, v);
    }
    function h(m, v, d, z) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== d.containerInfo || v.stateNode.implementation !== d.implementation ? (v = gc(d, m.mode, z), v.return = m, v) : (v = n(v, d.children || []), v.return = m, v);
    }
    function b(m, v, d, z, R) {
      return v === null || v.tag !== 7 ? (v = Da(d, m.mode, z, R), v.return = m, v) : (v = n(v, d), v.return = m, v);
    }
    function E(m, v, d) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return v = oc("" + v, m.mode, d), v.return = m, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Cl:
            return d = Xn(v.type, v.key, v.props, null, m.mode, d), Ku(d, v), d.return = m, d;
          case Bl:
            return v = gc(v, m.mode, d), v.return = m, v;
          case Yl:
            return v = Ra(v), E(m, v, d);
        }
        if (U(v) || _t(v)) return v = Da(v, m.mode, d, null), v.return = m, v;
        if (typeof v.then == "function") return E(m, Jn(v), d);
        if (v.$$typeof === Ol) return E(m, Vn(m, v), d);
        wn(m, v);
      }
      return null;
    }
    function S(m, v, d, z) {
      var R = v !== null ? v.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint") return R !== null ? null : i(m, v, "" + d, z);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Cl:
            return d.key === R ? f(m, v, d, z) : null;
          case Bl:
            return d.key === R ? h(m, v, d, z) : null;
          case Yl:
            return d = Ra(d), S(m, v, d, z);
        }
        if (U(d) || _t(d)) return R !== null ? null : b(m, v, d, z, null);
        if (typeof d.then == "function") return S(m, v, Jn(d), z);
        if (d.$$typeof === Ol) return S(m, v, Vn(m, d), z);
        wn(m, d);
      }
      return null;
    }
    function g(m, v, d, z, R) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint") return m = m.get(d) || null, i(v, m, "" + z, R);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Cl:
            return m = m.get(z.key === null ? d : z.key) || null, f(v, m, z, R);
          case Bl:
            return m = m.get(z.key === null ? d : z.key) || null, h(v, m, z, R);
          case Yl:
            return z = Ra(z), g(m, v, d, z, R);
        }
        if (U(z) || _t(z)) return m = m.get(d) || null, b(v, m, z, R, null);
        if (typeof z.then == "function") return g(m, v, d, Jn(z), R);
        if (z.$$typeof === Ol) return g(m, v, d, Vn(v, z), R);
        wn(v, z);
      }
      return null;
    }
    function N(m, v, d, z) {
      for (var R = null, F = null, p = v, X = v = 0, J = null; p !== null && X < d.length; X++) {
        p.index > X ? (J = p, p = null) : J = p.sibling;
        var k = S(m, p, d[X], z);
        if (k === null) {
          p === null && (p = J);
          break;
        }
        l && p && k.alternate === null && t(m, p), v = e(k, v, X), F === null ? R = k : F.sibling = k, F = k, p = J;
      }
      if (X === d.length) return a(m, p), w && Ct(m, X), R;
      if (p === null) {
        for (; X < d.length; X++) p = E(m, d[X], z), p !== null && (v = e(p, v, X), F === null ? R = p : F.sibling = p, F = p);
        return w && Ct(m, X), R;
      }
      for (p = u(p); X < d.length; X++) J = g(p, m, X, d[X], z), J !== null && (l && J.alternate !== null && p.delete(J.key === null ? X : J.key), v = e(J, v, X), F === null ? R = J : F.sibling = J, F = J);
      return l && p.forEach(function(ga) {
        return t(m, ga);
      }), w && Ct(m, X), R;
    }
    function q(m, v, d, z) {
      if (d == null) throw Error(o(151));
      for (var R = null, F = null, p = v, X = v = 0, J = null, k = d.next(); p !== null && !k.done; X++, k = d.next()) {
        p.index > X ? (J = p, p = null) : J = p.sibling;
        var ga = S(m, p, k.value, z);
        if (ga === null) {
          p === null && (p = J);
          break;
        }
        l && p && ga.alternate === null && t(m, p), v = e(ga, v, X), F === null ? R = ga : F.sibling = ga, F = ga, p = J;
      }
      if (k.done) return a(m, p), w && Ct(m, X), R;
      if (p === null) {
        for (; !k.done; X++, k = d.next()) k = E(m, k.value, z), k !== null && (v = e(k, v, X), F === null ? R = k : F.sibling = k, F = k);
        return w && Ct(m, X), R;
      }
      for (p = u(p); !k.done; X++, k = d.next()) k = g(p, m, X, k.value, z), k !== null && (l && k.alternate !== null && p.delete(k.key === null ? X : k.key), v = e(k, v, X), F === null ? R = k : F.sibling = k, F = k);
      return l && p.forEach(function(zd) {
        return t(m, zd);
      }), w && Ct(m, X), R;
    }
    function il(m, v, d, z) {
      if (typeof d == "object" && d !== null && d.type === Kl && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Cl:
            l: {
              for (var R = d.key; v !== null; ) {
                if (v.key === R) {
                  if (R = d.type, R === Kl) {
                    if (v.tag === 7) {
                      a(m, v.sibling), z = n(v, d.props.children), z.return = m, m = z;
                      break l;
                    }
                  } else if (v.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Yl && Ra(R) === v.type) {
                    a(m, v.sibling), z = n(v, d.props), Ku(z, d), z.return = m, m = z;
                    break l;
                  }
                  a(m, v);
                  break;
                } else t(m, v);
                v = v.sibling;
              }
              d.type === Kl ? (z = Da(d.props.children, m.mode, z, d.key), z.return = m, m = z) : (z = Xn(d.type, d.key, d.props, null, m.mode, z), Ku(z, d), z.return = m, m = z);
            }
            return c(m);
          case Bl:
            l: {
              for (R = d.key; v !== null; ) {
                if (v.key === R) if (v.tag === 4 && v.stateNode.containerInfo === d.containerInfo && v.stateNode.implementation === d.implementation) {
                  a(m, v.sibling), z = n(v, d.children || []), z.return = m, m = z;
                  break l;
                } else {
                  a(m, v);
                  break;
                }
                else t(m, v);
                v = v.sibling;
              }
              z = gc(d, m.mode, z), z.return = m, m = z;
            }
            return c(m);
          case Yl:
            return d = Ra(d), il(m, v, d, z);
        }
        if (U(d)) return N(m, v, d, z);
        if (_t(d)) {
          if (R = _t(d), typeof R != "function") throw Error(o(150));
          return d = R.call(d), q(m, v, d, z);
        }
        if (typeof d.then == "function") return il(m, v, Jn(d), z);
        if (d.$$typeof === Ol) return il(m, v, Vn(m, d), z);
        wn(m, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint" ? (d = "" + d, v !== null && v.tag === 6 ? (a(m, v.sibling), z = n(v, d), z.return = m, m = z) : (a(m, v), z = oc(d, m.mode, z), z.return = m, m = z), c(m)) : a(m, v);
    }
    return function(m, v, d, z) {
      try {
        xu = 0;
        var R = il(m, v, d, z);
        return iu = null, R;
      } catch (p) {
        if (p === cu || p === Kn) throw p;
        var F = lt(29, p, null, m.mode);
        return F.lanes = z, F.return = m, F;
      }
    };
  }
  var ja = z0(!0), E0 = z0(!1), aa = !1;
  function pc(l) {
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
  function Hc(l, t) {
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
  function Ba(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (ll & 2) !== 0) {
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
  function Rc(l, t) {
    var a = l.updateQueue, u = l.alternate;
    if (u !== null && (u = u.updateQueue, a === u)) {
      var n = null, e = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          e === null ? n = e = c : e = e.next = c, a = a.next;
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
  var Cc = !1;
  function Ju() {
    if (Cc) {
      var l = eu;
      if (l !== null) throw l;
    }
  }
  function wu(l, t, a, u) {
    Cc = !1;
    var n = l.updateQueue;
    aa = !1;
    var e = n.firstBaseUpdate, c = n.lastBaseUpdate, i = n.shared.pending;
    if (i !== null) {
      n.shared.pending = null;
      var f = i, h = f.next;
      f.next = null, c === null ? e = h : c.next = h, c = f;
      var b = l.alternate;
      b !== null && (b = b.updateQueue, i = b.lastBaseUpdate, i !== c && (i === null ? b.firstBaseUpdate = h : i.next = h, b.lastBaseUpdate = f));
    }
    if (e !== null) {
      var E = n.baseState;
      c = 0, b = h = f = null, i = e;
      do {
        var S = i.lane & -536870913, g = S !== i.lane;
        if (g ? (r & S) === S : (u & S) === S) {
          S !== 0 && S === nu && (Cc = !0), b !== null && (b = b.next = {
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          });
          l: {
            var N = l, q = i;
            S = t;
            var il = a;
            switch (q.tag) {
              case 1:
                if (N = q.payload, typeof N == "function") {
                  E = N.call(il, E, S);
                  break l;
                }
                E = N;
                break l;
              case 3:
                N.flags = N.flags & -65537 | 128;
              case 0:
                if (N = q.payload, S = typeof N == "function" ? N.call(il, E, S) : N, S == null) break l;
                E = j({}, E, S);
                break l;
              case 2:
                aa = !0;
            }
          }
          S = i.callback, S !== null && (l.flags |= 64, g && (l.flags |= 8192), g = n.callbacks, g === null ? n.callbacks = [S] : g.push(S));
        } else g = {
          lane: S,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        }, b === null ? (h = b = g, f = E) : b = b.next = g, c |= S;
        if (i = i.next, i === null) {
          if (i = n.shared.pending, i === null) break;
          g = i, i = g.next, g.next = null, n.lastBaseUpdate = g, n.shared.pending = null;
        }
      } while (!0);
      b === null && (f = E), n.baseState = f, n.firstBaseUpdate = h, n.lastBaseUpdate = b, e === null && (n.shared.lanes = 0), ia |= c, l.lanes = c, l.memoizedState = E;
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
    l = xt, M(Wn, l), M(fu, t), xt = l | t.baseLanes;
  }
  function jc() {
    M(Wn, xt), M(fu, fu.current);
  }
  function qc() {
    xt = Wn.current, A(fu), A(Wn);
  }
  var tt = y(null), dt = null;
  function ua(l) {
    var t = l.alternate;
    M(gl, gl.current & 1), M(tt, l), dt === null && (t === null || fu.current !== null || t.memoizedState !== null) && (dt = l);
  }
  function Bc(l) {
    M(gl, gl.current), M(tt, l), dt === null && (dt = l);
  }
  function O0(l) {
    l.tag === 22 ? (M(gl, gl.current), M(tt, l), dt === null && (dt = l)) : na(l);
  }
  function na() {
    M(gl, gl.current), M(tt, tt.current);
  }
  function at(l) {
    A(tt), dt === l && (dt = null), A(gl);
  }
  var gl = y(0);
  function $n(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Zi(a) || Li(a))) return t;
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
  var Bt = 0, G = null, el = null, El = null, Fn = !1, vu = !1, Ya = !1, kn = 0, Wu = 0, yu = null, em = 0;
  function sl() {
    throw Error(o(321));
  }
  function Yc(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++) if (!Pl(l[a], t[a])) return !1;
    return !0;
  }
  function Gc(l, t, a, u, n, e) {
    return Bt = e, G = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _.H = l === null || l.memoizedState === null ? i1 : Ic, Ya = !1, e = a(u, n), Ya = !1, vu && (e = D0(t, a, u, n)), M0(l), e;
  }
  function M0(l) {
    _.H = ku;
    var t = el !== null && el.next !== null;
    if (Bt = 0, El = el = G = null, Fn = !1, Wu = 0, yu = null, t) throw Error(o(300));
    l === null || Al || (l = l.dependencies, l !== null && Ln(l) && (Al = !0));
  }
  function D0(l, t, a, u) {
    G = l;
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
  function cm() {
    var l = _.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? $u(t) : t, l = l.useState()[0], (el !== null ? el.memoizedState : null) !== l && (G.flags |= 1024), t;
  }
  function Qc() {
    var l = kn !== 0;
    return kn = 0, l;
  }
  function Xc(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function Zc(l) {
    if (Fn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Fn = !1;
    }
    Bt = 0, El = el = G = null, vu = !1, Wu = kn = 0, yu = null;
  }
  function ql() {
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
    if (el === null) {
      var l = G.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = el.next;
    var t = El === null ? G.memoizedState : El.next;
    if (t !== null) El = t, el = l;
    else {
      if (l === null)
        throw G.alternate === null ? Error(o(467)) : Error(o(310));
      el = l, l = {
        memoizedState: el.memoizedState,
        baseState: el.baseState,
        baseQueue: el.baseQueue,
        queue: el.queue,
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
  function $u(l) {
    var t = Wu;
    return Wu += 1, yu === null && (yu = []), l = o0(yu, l, t), t = G, (El === null ? t.memoizedState : El.next) === null && (t = t.alternate, _.H = t === null || t.memoizedState === null ? i1 : Ic), l;
  }
  function Pn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return $u(l);
      if (l.$$typeof === Ol) return pl(l);
    }
    throw Error(o(438, String(l)));
  }
  function Lc(l) {
    var t = null, a = G.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var u = G.alternate;
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
    }, a === null && (a = In(), G.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0) for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = ba;
    return t.index++, a;
  }
  function Yt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function le(l) {
    return Vc(bl(), el, l);
  }
  function Vc(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(o(311));
    u.lastRenderedReducer = a;
    var n = l.baseQueue, e = u.pending;
    if (e !== null) {
      if (n !== null) {
        var c = n.next;
        n.next = e.next, e.next = c;
      }
      t.baseQueue = n = e, u.pending = null;
    }
    if (e = l.baseState, n === null) l.memoizedState = e;
    else {
      t = n.next;
      var i = c = null, f = null, h = t, b = !1;
      do {
        var E = h.lane & -536870913;
        if (E !== h.lane ? (r & E) === E : (Bt & E) === E) {
          var S = h.revertLane;
          if (S === 0) f !== null && (f = f.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          }), E === nu && (b = !0);
          else if ((Bt & S) === S) {
            h = h.next, S === nu && (b = !0);
            continue;
          } else E = {
            lane: 0,
            revertLane: h.revertLane,
            gesture: null,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          }, f === null ? (i = f = E, c = e) : f = f.next = E, G.lanes |= S, ia |= S;
          E = h.action, Ya && a(e, E), e = h.hasEagerState ? h.eagerState : a(e, E);
        } else S = {
          lane: E,
          revertLane: h.revertLane,
          gesture: h.gesture,
          action: h.action,
          hasEagerState: h.hasEagerState,
          eagerState: h.eagerState,
          next: null
        }, f === null ? (i = f = S, c = e) : f = f.next = S, G.lanes |= E, ia |= E;
        h = h.next;
      } while (h !== null && h !== t);
      if (f === null ? c = e : f.next = i, !Pl(e, l.memoizedState) && (Al = !0, b && (a = eu, a !== null))) throw a;
      l.memoizedState = e, l.baseState = c, l.baseQueue = f, u.lastRenderedState = e;
    }
    return n === null && (u.lanes = 0), [l.memoizedState, u.dispatch];
  }
  function xc(l) {
    var t = bl(), a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch, n = a.pending, e = t.memoizedState;
    if (n !== null) {
      a.pending = null;
      var c = n = n.next;
      do
        e = l(e, c.action), c = c.next;
      while (c !== n);
      Pl(e, t.memoizedState) || (Al = !0), t.memoizedState = e, t.baseQueue === null && (t.baseState = e), a.lastRenderedState = e;
    }
    return [e, u];
  }
  function U0(l, t, a) {
    var u = G, n = bl(), e = w;
    if (e) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var c = !Pl((el || n).memoizedState, a);
    if (c && (n.memoizedState = a, Al = !0), n = n.queue, Jc(H0.bind(null, u, n, l), [l]), n.getSnapshot !== t || c || El !== null && El.memoizedState.tag & 1) {
      if (u.flags |= 2048, mu(9, { destroy: void 0 }, p0.bind(null, u, n, a, t), null), fl === null) throw Error(o(349));
      e || (Bt & 127) !== 0 || N0(u, t, a);
    }
    return a;
  }
  function N0(l, t, a) {
    l.flags |= 16384, l = {
      getSnapshot: t,
      value: a
    }, t = G.updateQueue, t === null ? (t = In(), G.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function p0(l, t, a, u) {
    t.value = a, t.getSnapshot = u, R0(t) && C0(l);
  }
  function H0(l, t, a) {
    return a(function() {
      R0(t) && C0(l);
    });
  }
  function R0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Pl(l, a);
    } catch {
      return !0;
    }
  }
  function C0(l) {
    var t = Ma(l, 2);
    t !== null && xl(t, l, 2);
  }
  function Kc(l) {
    var t = ql();
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
      lastRenderedReducer: Yt,
      lastRenderedState: l
    }, t;
  }
  function j0(l, t, a, u) {
    return l.baseState = a, Vc(l, el, typeof u == "function" ? u : Yt);
  }
  function im(l, t, a, u, n) {
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
        then: function(c) {
          e.listeners.push(c);
        }
      };
      _.T !== null ? a(!0) : e.isTransition = !1, u(e), a = t.pending, a === null ? (e.next = t.pending = e, q0(t, e)) : (e.next = a.next, t.pending = a.next = e);
    }
  }
  function q0(l, t) {
    var a = t.action, u = t.payload, n = l.state;
    if (t.isTransition) {
      var e = _.T, c = {};
      _.T = c;
      try {
        var i = a(n, u), f = _.S;
        f !== null && f(c, i), B0(l, t, i);
      } catch (h) {
        rc(l, t, h);
      } finally {
        e !== null && c.types !== null && (e.types = c.types), _.T = e;
      }
    } else try {
      e = a(n, u), B0(l, t, e);
    } catch (h) {
      rc(l, t, h);
    }
  }
  function B0(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(u) {
      Y0(l, t, u);
    }, function(u) {
      return rc(l, t, u);
    }) : Y0(l, t, a);
  }
  function Y0(l, t, a) {
    t.status = "fulfilled", t.value = a, G0(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, q0(l, a)));
  }
  function rc(l, t, a) {
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
    if (w) {
      var a = fl.formState;
      if (a !== null) {
        l: {
          var u = G;
          if (w) {
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
    }, a.queue = u, a = n1.bind(null, G, u), u.dispatch = a, u = Kc(!1), e = kc.bind(null, G, !1, u.queue), u = ql(), n = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, u.queue = n, a = im.bind(null, G, n, e, a), n.dispatch = a, u.memoizedState = l, [
      t,
      a,
      !1
    ];
  }
  function Z0(l) {
    return L0(bl(), el, l);
  }
  function L0(l, t, a) {
    if (t = Vc(l, t, Q0)[0], l = le(Yt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var u = $u(t);
    } catch (c) {
      throw c === cu ? Kn : c;
    }
    else u = t;
    t = bl();
    var n = t.queue, e = n.dispatch;
    return a !== t.memoizedState && (G.flags |= 2048, mu(9, { destroy: void 0 }, fm.bind(null, n, a), null)), [
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
    }, t = G.updateQueue, t === null && (t = In(), G.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
  }
  function x0() {
    return bl().memoizedState;
  }
  function te(l, t, a, u) {
    var n = ql();
    G.flags |= l, n.memoizedState = mu(1 | t, { destroy: void 0 }, a, u === void 0 ? null : u);
  }
  function ae(l, t, a, u) {
    var n = bl();
    u = u === void 0 ? null : u;
    var e = n.memoizedState.inst;
    el !== null && u !== null && Yc(u, el.memoizedState.deps) ? n.memoizedState = mu(t, e, a, u) : (G.flags |= l, n.memoizedState = mu(1 | t, e, a, u));
  }
  function K0(l, t) {
    te(8390656, 8, l, t);
  }
  function Jc(l, t) {
    ae(2048, 8, l, t);
  }
  function vm(l) {
    G.flags |= 4;
    var t = G.updateQueue;
    if (t === null) t = In(), G.updateQueue = t, t.events = [l];
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
      if ((ll & 2) !== 0) throw Error(o(440));
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
  function wc() {
  }
  function F0(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Yc(t, u[1]) ? u[0] : (a.memoizedState = [l, t], l);
  }
  function k0(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Yc(t, u[1])) return u[0];
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
  function Wc(l, t, a) {
    return a === void 0 || (Bt & 1073741824) !== 0 && (r & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = $1(), G.lanes |= l, ia |= l, a);
  }
  function I0(l, t, a, u) {
    return Pl(a, t) ? a : fu.current !== null ? (l = Wc(l, a, u), Pl(l, t) || (Al = !0), l) : (Bt & 42) === 0 || (Bt & 1073741824) !== 0 && (r & 261930) === 0 ? (Al = !0, l.memoizedState = a) : (l = $1(), G.lanes |= l, ia |= l, t);
  }
  function P0(l, t, a, u, n) {
    var e = D.p;
    D.p = e !== 0 && 8 > e ? e : 8;
    var c = _.T, i = {};
    _.T = i, kc(l, !1, t, a);
    try {
      var f = n(), h = _.S;
      h !== null && h(i, f), f !== null && typeof f == "object" && typeof f.then == "function" ? Fu(l, t, nm(f, u), ht(l)) : Fu(l, t, u, ht(l));
    } catch (b) {
      Fu(l, t, {
        then: function() {
        },
        status: "rejected",
        reason: b
      }, ht());
    } finally {
      D.p = e, c !== null && i.types !== null && (c.types = i.types), _.T = c;
    }
  }
  function ym() {
  }
  function $c(l, t, a, u) {
    if (l.tag !== 5) throw Error(o(476));
    var n = l1(l).queue;
    P0(l, n, t, P, a === null ? ym : function() {
      return t1(l), a(u);
    });
  }
  function l1(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: P
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
        lastRenderedReducer: Yt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function t1(l) {
    var t = l1(l);
    t.next === null && (t = l.alternate.memoizedState), Fu(l, t.next.queue, {}, ht());
  }
  function Fc() {
    return pl(sn);
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
          var u = Ba(t, l, a);
          u !== null && (xl(u, t, a), ru(u, t, a)), t = { cache: Mc() }, l.payload = t;
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
    }, ue(l) ? e1(t, a) : (a = sc(l, t, a, u), a !== null && (xl(a, l, u), c1(a, t, u)));
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
        var c = t.lastRenderedState, i = e(c, a);
        if (n.hasEagerState = !0, n.eagerState = i, Pl(i, c)) return Gn(l, t, n, 0), fl === null && Yn(), !1;
      } catch {
      }
      if (a = sc(l, t, n, u), a !== null) return xl(a, l, u), c1(a, t, u), !0;
    }
    return !1;
  }
  function kc(l, t, a, u) {
    if (u = {
      lane: 2,
      revertLane: pi(),
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ue(l)) {
      if (t) throw Error(o(479));
    } else t = sc(l, a, u, 2), t !== null && xl(t, l, 2);
  }
  function ue(l) {
    var t = l.alternate;
    return l === G || t !== null && t === G;
  }
  function e1(l, t) {
    vu = Fn = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function c1(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      u &= l.pendingLanes, a |= u, t.lanes = a, yf(l, a);
    }
  }
  var ku = {
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
  ku.useEffectEvent = sl;
  var i1 = {
    readContext: pl,
    use: Pn,
    useCallback: function(l, t) {
      return ql().memoizedState = [l, t === void 0 ? null : t], l;
    },
    useContext: pl,
    useEffect: K0,
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
      var u = ql();
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
      }, u.queue = l, l = l.dispatch = dm.bind(null, G, l), [u.memoizedState, l];
    },
    useRef: function(l) {
      var t = ql();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Kc(l);
      var t = l.queue, a = n1.bind(null, G, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: wc,
    useDeferredValue: function(l, t) {
      return Wc(ql(), l, t);
    },
    useTransition: function() {
      var l = Kc(!1);
      return l = P0.bind(null, G, l.queue, !0, !1), ql().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var u = G, n = ql();
      if (w) {
        if (a === void 0) throw Error(o(407));
        a = a();
      } else {
        if (a = t(), fl === null) throw Error(o(349));
        (r & 127) !== 0 || N0(u, t, a);
      }
      n.memoizedState = a;
      var e = {
        value: a,
        getSnapshot: t
      };
      return n.queue = e, K0(H0.bind(null, u, e, l), [l]), u.flags |= 2048, mu(9, { destroy: void 0 }, p0.bind(null, u, e, a, t), null), a;
    },
    useId: function() {
      var l = ql(), t = fl.identifierPrefix;
      if (w) {
        var a = Mt, u = Ot;
        a = (u & ~(1 << 32 - Il(u) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = kn++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else a = em++, t = "_" + t + "r_" + a.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: Fc,
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
      return t.queue = a, t = kc.bind(null, G, !0, a), a.dispatch = t, [l, t];
    },
    useMemoCache: Lc,
    useCacheRefresh: function() {
      return ql().memoizedState = mm.bind(null, G);
    },
    useEffectEvent: function(l) {
      var t = ql(), a = { impl: l };
      return t.memoizedState = a, function() {
        if ((ll & 2) !== 0) throw Error(o(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Ic = {
    readContext: pl,
    use: Pn,
    useCallback: F0,
    useContext: pl,
    useEffect: Jc,
    useImperativeHandle: $0,
    useInsertionEffect: J0,
    useLayoutEffect: w0,
    useMemo: k0,
    useReducer: le,
    useRef: x0,
    useState: function() {
      return le(Yt);
    },
    useDebugValue: wc,
    useDeferredValue: function(l, t) {
      return I0(bl(), el.memoizedState, l, t);
    },
    useTransition: function() {
      var l = le(Yt)[0], t = bl().memoizedState;
      return [typeof l == "boolean" ? l : $u(l), t];
    },
    useSyncExternalStore: U0,
    useId: a1,
    useHostTransitionStatus: Fc,
    useFormState: Z0,
    useActionState: Z0,
    useOptimistic: function(l, t) {
      return j0(bl(), el, l, t);
    },
    useMemoCache: Lc,
    useCacheRefresh: u1
  };
  Ic.useEffectEvent = r0;
  var f1 = {
    readContext: pl,
    use: Pn,
    useCallback: F0,
    useContext: pl,
    useEffect: Jc,
    useImperativeHandle: $0,
    useInsertionEffect: J0,
    useLayoutEffect: w0,
    useMemo: k0,
    useReducer: xc,
    useRef: x0,
    useState: function() {
      return xc(Yt);
    },
    useDebugValue: wc,
    useDeferredValue: function(l, t) {
      var a = bl();
      return el === null ? Wc(a, l, t) : I0(a, el.memoizedState, l, t);
    },
    useTransition: function() {
      var l = xc(Yt)[0], t = bl().memoizedState;
      return [typeof l == "boolean" ? l : $u(l), t];
    },
    useSyncExternalStore: U0,
    useId: a1,
    useHostTransitionStatus: Fc,
    useFormState: V0,
    useActionState: V0,
    useOptimistic: function(l, t) {
      var a = bl();
      return el !== null ? j0(a, el, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: Lc,
    useCacheRefresh: u1
  };
  f1.useEffectEvent = r0;
  function Pc(l, t, a, u) {
    t = l.memoizedState, a = a(u, t), a = a == null ? t : j({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var li = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var u = ht(), n = qa(u);
      n.payload = t, a != null && (n.callback = a), t = Ba(l, n, u), t !== null && (xl(t, l, u), ru(t, l, u));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var u = ht(), n = qa(u);
      n.tag = 1, n.payload = t, a != null && (n.callback = a), t = Ba(l, n, u), t !== null && (xl(t, l, u), ru(t, l, u));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = ht(), u = qa(a);
      u.tag = 2, t != null && (u.callback = t), t = Ba(l, u, a), t !== null && (xl(t, l, a), ru(t, l, a));
    }
  };
  function v1(l, t, a, u, n, e, c) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, e, c) : t.prototype && t.prototype.isPureReactComponent ? !Gu(a, u) || !Gu(n, e) : !0;
  }
  function y1(l, t, a, u) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && li.enqueueReplaceState(t, t.state, null);
  }
  function Ga(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if (l = l.defaultProps) {
      a === t && (a = j({}, a));
      for (var n in l) a[n] === void 0 && (a[n] = l[n]);
    }
    return a;
  }
  function hm(l) {
    Bn(l);
  }
  function sm(l) {
    console.error(l);
  }
  function Sm(l) {
    Bn(l);
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
  function ti(l, t, a) {
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
    var c = a.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
      m1(t, a, u), typeof n != "function" && (fa === null ? fa = /* @__PURE__ */ new Set([this]) : fa.add(this));
      var i = u.stack;
      this.componentDidCatch(u.value, { componentStack: i !== null ? i : "" });
    });
  }
  function om(l, t, a, u, n) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (t = a.alternate, t !== null && uu(t, a, n, !0), a = tt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return dt === null ? oe() : a.alternate === null && Sl === 0 && (Sl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, u === rn ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : t.add(u), Di(l, u, n)), !1;
          case 22:
            return a.flags |= 65536, u === rn ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), Di(l, u, n)), !1;
        }
        throw Error(o(435, a.tag));
      }
      return Di(l, u, n), oe(), !1;
    }
    if (w) return t = tt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, u !== Ec && (l = Error(o(422), { cause: u }), Zu(ft(l, a)))) : (u !== Ec && (t = Error(o(423), { cause: u }), Zu(ft(t, a))), l = l.current.alternate, l.flags |= 65536, n &= -n, l.lanes |= n, u = ft(u, a), n = ti(l.stateNode, u, n), Rc(l, n), Sl !== 4 && (Sl = 2)), !1;
    var e = Error(o(520), { cause: u });
    if (e = ft(e, a), en === null ? en = [e] : en.push(e), Sl !== 4 && (Sl = 2), t === null) return !0;
    u = ft(u, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = n & -n, a.lanes |= l, l = ti(a.stateNode, u, l), Rc(a, l), !1;
        case 1:
          if (t = a.type, e = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || e !== null && typeof e.componentDidCatch == "function" && (fa === null || !fa.has(e)))) return a.flags |= 65536, n &= -n, a.lanes |= n, n = d1(n), h1(n, l, a, u), Rc(a, n), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var ai = Error(o(461)), Al = !1;
  function Hl(l, t, a, u) {
    t.child = l === null ? E0(t, null, a, u) : ja(t, l.child, a, u);
  }
  function s1(l, t, a, u, n) {
    a = a.render;
    var e = t.ref;
    if ("ref" in u) {
      var c = {};
      for (var i in u) i !== "ref" && (c[i] = u[i]);
    } else c = u;
    return pa(t), u = Gc(l, t, a, c, e, n), i = Qc(), l !== null && !Al ? (Xc(l, t, n), Gt(l, t, n)) : (w && i && bc(t), t.flags |= 1, Hl(l, t, u, n), t.child);
  }
  function S1(l, t, a, u, n) {
    if (l === null) {
      var e = a.type;
      return typeof e == "function" && !Sc(e) && e.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = e, o1(l, t, e, u, n)) : (l = Xn(a.type, null, u, t, t.mode, n), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (e = l.child, !yi(l, n)) {
      var c = e.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Gu, a(c, u) && l.ref === t.ref) return Gt(l, t, n);
    }
    return t.flags |= 1, l = Rt(e, u), l.ref = t.ref, l.return = t, t.child = l;
  }
  function o1(l, t, a, u, n) {
    if (l !== null) {
      var e = l.memoizedProps;
      if (Gu(e, u) && l.ref === t.ref) if (Al = !1, t.pendingProps = u = e, yi(l, n)) (l.flags & 131072) !== 0 && (Al = !0);
      else return t.lanes = l.lanes, Gt(l, t, n);
    }
    return ui(l, t, a, u, n);
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
      }, l !== null && xn(t, e !== null ? e.cachePool : null), e !== null ? _0(t, e) : jc(), O0(t);
      else return u = t.lanes = 536870912, b1(l, t, e !== null ? e.baseLanes | a : a, a, u);
    } else e !== null ? (xn(t, e.cachePool), _0(t, e), na(t), t.memoizedState = null) : (l !== null && xn(t, null), jc(), na(t));
    return Hl(l, t, n, a), t.child;
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
    var e = Uc();
    return e = e === null ? null : {
      parent: zl._currentValue,
      pool: e
    }, t.memoizedState = {
      baseLanes: a,
      cachePool: e
    }, l !== null && xn(t, null), jc(), O0(t), l !== null && uu(l, t, u, !0), t.childLanes = n, null;
  }
  function ee(l, t) {
    return t = ie({
      mode: t.mode,
      children: t.children
    }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function z1(l, t, a) {
    return ja(t, l.child, null, a), l = ee(t, t.pendingProps), l.flags |= 2, at(t), t.memoizedState = null, l;
  }
  function gm(l, t, a) {
    var u = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (w) {
        if (u.mode === "hidden") return l = ee(t, u), t.lanes = 536870912, Iu(null, l);
        if (Bc(t), (l = ml) ? (l = Cv(l, mt), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? {
            id: Ot,
            overflow: Mt
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = e0(l), a.return = t, t.child = a, Nl = t, ml = null)) : l = null, l === null) throw la(t);
        return t.lanes = 536870912, null;
      }
      return ee(t, u);
    }
    var e = l.memoizedState;
    if (e !== null) {
      var c = e.dehydrated;
      if (Bc(t), n) if (t.flags & 256) t.flags &= -257, t = z1(l, t, a);
      else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
      else throw Error(o(558));
      else if (Al || uu(l, t, a, !1), n = (a & l.childLanes) !== 0, Al || n) {
        if (u = fl, u !== null && (c = mf(u, a), c !== 0 && c !== e.retryLane)) throw e.retryLane = c, Ma(l, c), xl(u, l, c), ai;
        oe(), t = z1(l, t, a);
      } else l = e.treeContext, ml = st(c.nextSibling), Nl = t, w = !0, Pt = null, mt = !1, l !== null && f0(t, l), t = ee(t, u), t.flags |= 4096;
      return t;
    }
    return l = Rt(l.child, {
      mode: u.mode,
      children: u.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function ce(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(o(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function ui(l, t, a, u, n) {
    return pa(t), a = Gc(l, t, a, u, void 0, n), u = Qc(), l !== null && !Al ? (Xc(l, t, n), Gt(l, t, n)) : (w && u && bc(t), t.flags |= 1, Hl(l, t, a, n), t.child);
  }
  function E1(l, t, a, u, n, e) {
    return pa(t), t.updateQueue = null, a = D0(t, u, a, n), M0(l), u = Qc(), l !== null && !Al ? (Xc(l, t, e), Gt(l, t, e)) : (w && u && bc(t), t.flags |= 1, Hl(l, t, a, e), t.child);
  }
  function A1(l, t, a, u, n) {
    if (pa(t), t.stateNode === null) {
      var e = Pa, c = a.contextType;
      typeof c == "object" && c !== null && (e = pl(c)), e = new a(u, e), t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null, e.updater = li, t.stateNode = e, e._reactInternals = t, e = t.stateNode, e.props = u, e.state = t.memoizedState, e.refs = {}, pc(t), c = a.contextType, e.context = typeof c == "object" && c !== null ? pl(c) : Pa, e.state = t.memoizedState, c = a.getDerivedStateFromProps, typeof c == "function" && (Pc(t, a, c, u), e.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof e.getSnapshotBeforeUpdate == "function" || typeof e.UNSAFE_componentWillMount != "function" && typeof e.componentWillMount != "function" || (c = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), c !== e.state && li.enqueueReplaceState(e, e.state, null), wu(t, u, e, n), Ju(), e.state = t.memoizedState), typeof e.componentDidMount == "function" && (t.flags |= 4194308), u = !0;
    } else if (l === null) {
      e = t.stateNode;
      var i = t.memoizedProps, f = Ga(a, i);
      e.props = f;
      var h = e.context, b = a.contextType;
      c = Pa, typeof b == "object" && b !== null && (c = pl(b));
      var E = a.getDerivedStateFromProps;
      b = typeof E == "function" || typeof e.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, b || typeof e.UNSAFE_componentWillReceiveProps != "function" && typeof e.componentWillReceiveProps != "function" || (i || h !== c) && y1(t, e, u, c), aa = !1;
      var S = t.memoizedState;
      e.state = S, wu(t, u, e, n), Ju(), h = t.memoizedState, i || S !== h || aa ? (typeof E == "function" && (Pc(t, a, E, u), h = t.memoizedState), (f = aa || v1(t, a, f, u, S, h, c)) ? (b || typeof e.UNSAFE_componentWillMount != "function" && typeof e.componentWillMount != "function" || (typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount()), typeof e.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof e.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = h), e.props = u, e.state = h, e.context = c, u = f) : (typeof e.componentDidMount == "function" && (t.flags |= 4194308), u = !1);
    } else {
      e = t.stateNode, Hc(l, t), c = t.memoizedProps, b = Ga(a, c), e.props = b, E = t.pendingProps, S = e.context, h = a.contextType, f = Pa, typeof h == "object" && h !== null && (f = pl(h)), i = a.getDerivedStateFromProps, (h = typeof i == "function" || typeof e.getSnapshotBeforeUpdate == "function") || typeof e.UNSAFE_componentWillReceiveProps != "function" && typeof e.componentWillReceiveProps != "function" || (c !== E || S !== f) && y1(t, e, u, f), aa = !1, S = t.memoizedState, e.state = S, wu(t, u, e, n), Ju();
      var g = t.memoizedState;
      c !== E || S !== g || aa || l !== null && l.dependencies !== null && Ln(l.dependencies) ? (typeof i == "function" && (Pc(t, a, i, u), g = t.memoizedState), (b = aa || v1(t, a, b, u, S, g, f) || l !== null && l.dependencies !== null && Ln(l.dependencies)) ? (h || typeof e.UNSAFE_componentWillUpdate != "function" && typeof e.componentWillUpdate != "function" || (typeof e.componentWillUpdate == "function" && e.componentWillUpdate(u, g, f), typeof e.UNSAFE_componentWillUpdate == "function" && e.UNSAFE_componentWillUpdate(u, g, f)), typeof e.componentDidUpdate == "function" && (t.flags |= 4), typeof e.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof e.componentDidUpdate != "function" || c === l.memoizedProps && S === l.memoizedState || (t.flags |= 4), typeof e.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && S === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = g), e.props = u, e.state = g, e.context = f, u = b) : (typeof e.componentDidUpdate != "function" || c === l.memoizedProps && S === l.memoizedState || (t.flags |= 4), typeof e.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && S === l.memoizedState || (t.flags |= 1024), u = !1);
    }
    return e = u, ce(l, t), u = (t.flags & 128) !== 0, e || u ? (e = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : e.render(), t.flags |= 1, l !== null && u ? (t.child = ja(t, l.child, null, n), t.child = ja(t, null, a, n)) : Hl(l, t, a, n), t.memoizedState = e.state, l = t.child) : l = Gt(l, t, n), l;
  }
  function T1(l, t, a, u) {
    return Ua(), t.flags |= 256, Hl(l, t, a, u), t.child;
  }
  var ni = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ei(l) {
    return {
      baseLanes: l,
      cachePool: s0()
    };
  }
  function ci(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= nt), l;
  }
  function _1(l, t, a) {
    var u = t.pendingProps, n = !1, e = (t.flags & 128) !== 0, c;
    if ((c = e) || (c = l !== null && l.memoizedState === null ? !1 : (gl.current & 2) !== 0), c && (n = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (w) {
        if (n ? ua(t) : na(t), (l = ml) ? (l = Cv(l, mt), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? {
            id: Ot,
            overflow: Mt
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = e0(l), a.return = t, t.child = a, Nl = t, ml = null)) : l = null, l === null) throw la(t);
        return Li(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var i = u.children;
      return u = u.fallback, n ? (na(t), n = t.mode, i = ie({
        mode: "hidden",
        children: i
      }, n), u = Da(u, n, a, null), i.return = t, u.return = t, i.sibling = u, t.child = i, u = t.child, u.memoizedState = ei(a), u.childLanes = ci(l, c, a), t.memoizedState = ni, Iu(null, u)) : (ua(t), ii(t, i));
    }
    var f = l.memoizedState;
    if (f !== null && (i = f.dehydrated, i !== null)) {
      if (e) t.flags & 256 ? (ua(t), t.flags &= -257, t = fi(l, t, a)) : t.memoizedState !== null ? (na(t), t.child = l.child, t.flags |= 128, t = null) : (na(t), i = u.fallback, n = t.mode, u = ie({
        mode: "visible",
        children: u.children
      }, n), i = Da(i, n, a, null), i.flags |= 2, u.return = t, i.return = t, u.sibling = i, t.child = u, ja(t, l.child, null, a), u = t.child, u.memoizedState = ei(a), u.childLanes = ci(l, c, a), t.memoizedState = ni, t = Iu(null, u));
      else if (ua(t), Li(i)) {
        if (c = i.nextSibling && i.nextSibling.dataset, c) var h = c.dgst;
        c = h, u = Error(o(419)), u.stack = "", u.digest = c, Zu({
          value: u,
          source: null,
          stack: null
        }), t = fi(l, t, a);
      } else if (Al || uu(l, t, a, !1), c = (a & l.childLanes) !== 0, Al || c) {
        if (c = fl, c !== null && (u = mf(c, a), u !== 0 && u !== f.retryLane)) throw f.retryLane = u, Ma(l, u), xl(c, l, u), ai;
        Zi(i) || oe(), t = fi(l, t, a);
      } else Zi(i) ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, ml = st(i.nextSibling), Nl = t, w = !0, Pt = null, mt = !1, l !== null && f0(t, l), t = ii(t, u.children), t.flags |= 4096);
      return t;
    }
    return n ? (na(t), i = u.fallback, n = t.mode, f = l.child, h = f.sibling, u = Rt(f, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = f.subtreeFlags & 65011712, h !== null ? i = Rt(h, i) : (i = Da(i, n, a, null), i.flags |= 2), i.return = t, u.return = t, u.sibling = i, t.child = u, Iu(null, u), u = t.child, i = l.child.memoizedState, i === null ? i = ei(a) : (n = i.cachePool, n !== null ? (f = zl._currentValue, n = n.parent !== f ? {
      parent: f,
      pool: f
    } : n) : n = s0(), i = {
      baseLanes: i.baseLanes | a,
      cachePool: n
    }), u.memoizedState = i, u.childLanes = ci(l, c, a), t.memoizedState = ni, Iu(l.child, u)) : (ua(t), a = l.child, l = a.sibling, a = Rt(a, {
      mode: "visible",
      children: u.children
    }), a.return = t, a.sibling = null, l !== null && (c = t.deletions, c === null ? (t.deletions = [l], t.flags |= 16) : c.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function ii(l, t) {
    return t = ie({
      mode: "visible",
      children: t
    }, l.mode), t.return = l, l.child = t;
  }
  function ie(l, t) {
    return l = lt(22, l, null, t), l.lanes = 0, l;
  }
  function fi(l, t, a) {
    return ja(t, l.child, null, a), l = ii(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
  }
  function O1(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    u !== null && (u.lanes |= t), _c(l.return, t, a);
  }
  function vi(l, t, a, u, n, e) {
    var c = l.memoizedState;
    c === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: a,
      tailMode: n,
      treeForkCount: e
    } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = u, c.tail = a, c.tailMode = n, c.treeForkCount = e);
  }
  function M1(l, t, a) {
    var u = t.pendingProps, n = u.revealOrder, e = u.tail;
    u = u.children;
    var c = gl.current, i = (c & 2) !== 0;
    if (i ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, M(gl, c), Hl(l, t, u, a), u = w ? Xu : 0, !i && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
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
        a = n, a === null ? (n = t.child, t.child = null) : (n = a.sibling, a.sibling = null), vi(t, !1, n, a, e, u);
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
        vi(t, !0, a, null, e, u);
        break;
      case "together":
        vi(t, !1, null, null, void 0, u);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Gt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), ia |= t.lanes, (a & t.childLanes) === 0) if (l !== null) {
      if (uu(l, t, a, !1), (a & t.childLanes) === 0) return null;
    } else return null;
    if (l !== null && t.child !== l.child) throw Error(o(153));
    if (t.child !== null) {
      for (l = t.child, a = Rt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; ) l = l.sibling, a = a.sibling = Rt(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function yi(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ln(l)));
  }
  function bm(l, t, a) {
    switch (t.tag) {
      case 3:
        jl(t, t.stateNode.containerInfo), ta(t, zl, l.memoizedState.cache), Ua();
        break;
      case 27:
      case 5:
        Ou(t);
        break;
      case 4:
        jl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ta(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, Bc(t), null;
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
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), M(gl, gl.current), u) break;
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
      if (!yi(l, a) && (t.flags & 128) === 0) return Al = !1, bm(l, t, a);
      Al = (l.flags & 131072) !== 0;
    }
    else Al = !1, w && (t.flags & 1048576) !== 0 && i0(t, Xu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (l = Ra(t.elementType), t.type = l, typeof l == "function") Sc(l) ? (u = Ga(l, u), t.tag = 1, t = A1(null, t, l, u, a)) : (t.tag = 0, t = ui(null, t, l, u, a));
          else {
            if (l != null) {
              var n = l.$$typeof;
              if (n === gt) {
                t.tag = 11, t = s1(null, t, l, u, a);
                break l;
              } else if (n === $) {
                t.tag = 14, t = S1(null, t, l, u, a);
                break l;
              }
            }
            throw t = bt(l) || l, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return ui(l, t, t.type, t.pendingProps, a);
      case 1:
        return u = t.type, n = Ga(u, t.pendingProps), A1(l, t, u, n, a);
      case 3:
        l: {
          if (jl(t, t.stateNode.containerInfo), l === null) throw Error(o(387));
          u = t.pendingProps;
          var e = t.memoizedState;
          n = e.element, Hc(l, t), wu(t, u, null, a);
          var c = t.memoizedState;
          if (u = c.cache, ta(t, zl, u), u !== e.cache && Oc(t, [zl], a, !0), Ju(), u = c.element, e.isDehydrated) if (e = {
            element: u,
            isDehydrated: !1,
            cache: c.cache
          }, t.updateQueue.baseState = e, t.memoizedState = e, t.flags & 256) {
            t = T1(l, t, u, a);
            break l;
          } else if (u !== n) {
            n = ft(Error(o(424)), t), Zu(n), t = T1(l, t, u, a);
            break l;
          } else
            for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, ml = st(l.firstChild), Nl = t, w = !0, Pt = null, mt = !0, a = E0(t, null, u, a), t.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (Ua(), u === n) {
              t = Gt(l, t, a);
              break l;
            }
            Hl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return ce(l, t), l === null ? (a = Qv(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : w || (a = t.type, l = t.pendingProps, u = _e(V.current).createElement(a), u[Ul] = t, u[Gl] = l, Rl(u, a, l), Ml(u), t.stateNode = u) : t.memoizedState = Qv(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
      case 27:
        return Ou(t), l === null && w && (u = t.stateNode = Bv(t.type, t.pendingProps, V.current), Nl = t, mt = !0, n = ml, da(t.type) ? (Vi = n, ml = st(u.firstChild)) : ml = n), Hl(l, t, t.pendingProps.children, a), ce(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && w && ((n = u = ml) && (u = Jm(u, t.type, t.pendingProps, mt), u !== null ? (t.stateNode = u, Nl = t, ml = st(u.firstChild), mt = !1, n = !0) : n = !1), n || la(t)), Ou(t), n = t.type, e = t.pendingProps, c = l !== null ? l.memoizedProps : null, u = e.children, Gi(n, e) ? u = null : c !== null && Gi(n, c) && (t.flags |= 32), t.memoizedState !== null && (n = Gc(l, t, cm, null, null, a), sn._currentValue = n), ce(l, t), Hl(l, t, u, a), t.child;
      case 6:
        return l === null && w && ((l = a = ml) && (a = wm(a, t.pendingProps, mt), a !== null ? (t.stateNode = a, Nl = t, ml = null, l = !0) : l = !1), l || la(t)), null;
      case 13:
        return _1(l, t, a);
      case 4:
        return jl(t, t.stateNode.containerInfo), u = t.pendingProps, l === null ? t.child = ja(t, null, u, a) : Hl(l, t, u, a), t.child;
      case 11:
        return s1(l, t, t.type, t.pendingProps, a);
      case 7:
        return Hl(l, t, t.pendingProps, a), t.child;
      case 8:
        return Hl(l, t, t.pendingProps.children, a), t.child;
      case 12:
        return Hl(l, t, t.pendingProps.children, a), t.child;
      case 10:
        return u = t.pendingProps, ta(t, t.type, u.value), Hl(l, t, u.children, a), t.child;
      case 9:
        return n = t.type._context, u = t.pendingProps.children, pa(t), n = pl(n), u = u(n), t.flags |= 1, Hl(l, t, u, a), t.child;
      case 14:
        return S1(l, t, t.type, t.pendingProps, a);
      case 15:
        return o1(l, t, t.type, t.pendingProps, a);
      case 19:
        return M1(l, t, a);
      case 31:
        return gm(l, t, a);
      case 22:
        return g1(l, t, a, t.pendingProps);
      case 24:
        return pa(t), u = pl(zl), l === null ? (n = Uc(), n === null && (n = fl, e = Mc(), n.pooledCache = e, e.refCount++, e !== null && (n.pooledCacheLanes |= a), n = e), t.memoizedState = {
          parent: u,
          cache: n
        }, pc(t), ta(t, zl, n)) : ((l.lanes & a) !== 0 && (Hc(l, t), wu(t, null, null, a), Ju()), n = l.memoizedState, e = t.memoizedState, n.parent !== u ? (n = {
          parent: u,
          cache: u
        }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), ta(t, zl, u)) : (u = e.cache, ta(t, zl, u), u !== n.cache && Oc(t, [zl], a, !0))), Hl(l, t, t.pendingProps.children, a), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Qt(l) {
    l.flags |= 4;
  }
  function mi(l, t, a, u, n) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (n & 335544128) === n) if (l.stateNode.complete) l.flags |= 8192;
      else if (P1()) l.flags |= 8192;
      else throw Ca = rn, Nc;
    } else l.flags &= -16777217;
  }
  function U1(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (l.flags |= 16777216, !xv(t)) if (P1()) l.flags |= 8192;
    else throw Ca = rn, Nc;
  }
  function fe(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? ff() : 536870912, l.lanes |= t, Su |= t);
  }
  function Pu(l, t) {
    if (!w) switch (l.tailMode) {
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
    switch (zc(t), t.tag) {
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
        return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), qt(zl), ol(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (au(t) ? Qt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ac())), dl(t), null;
      case 26:
        var n = t.type, e = t.memoizedState;
        return l === null ? (Qt(t), e !== null ? (dl(t), U1(t, e)) : (dl(t), mi(t, n, null, u, a))) : e ? e !== l.memoizedState ? (Qt(t), dl(t), U1(t, e)) : (dl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== u && Qt(t), dl(t), mi(t, n, l, u, a)), null;
      case 27:
        if (bn(t), a = V.current, n = t.type, l !== null && t.stateNode != null) l.memoizedProps !== u && Qt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(o(166));
            return dl(t), null;
          }
          l = H.current, au(t) ? v0(t, l) : (l = Bv(n, u, a), t.stateNode = l, Qt(t));
        }
        return dl(t), null;
      case 5:
        if (bn(t), n = t.type, l !== null && t.stateNode != null) l.memoizedProps !== u && Qt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(o(166));
            return dl(t), null;
          }
          if (e = H.current, au(t)) v0(t, e);
          else {
            var c = _e(V.current);
            switch (e) {
              case 1:
                e = c.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                e = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    e = c.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    e = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                    break;
                  case "script":
                    e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof u.is == "string" ? c.createElement("select", { is: u.is }) : c.createElement("select"), u.multiple ? e.multiple = !0 : u.size && (e.size = u.size);
                    break;
                  default:
                    e = typeof u.is == "string" ? c.createElement(n, { is: u.is }) : c.createElement(n);
                }
            }
            e[Ul] = t, e[Gl] = u;
            l: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) e.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === t) break l;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t) break l;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
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
            u && Qt(t);
          }
        }
        return dl(t), mi(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Qt(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(o(166));
          if (l = V.current, au(t)) {
            if (l = t.stateNode, a = t.memoizedProps, u = null, n = Nl, n !== null) switch (n.tag) {
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
          } else a = Ac(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = !0;
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
          } else n = Ac(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (at(t), t) : (at(t), null);
        }
        return at(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = u !== null, l = l !== null && l.memoizedState !== null, a && (u = t.child, n = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (n = u.alternate.memoizedState.cachePool.pool), e = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (e = u.memoizedState.cachePool.pool), e !== n && (u.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), fe(t, t.updateQueue), dl(t), null);
      case 4:
        return ol(), l === null && Ev(t.stateNode.containerInfo), dl(t), null;
      case 10:
        return qt(t.type), dl(t), null;
      case 19:
        if (A(gl), u = t.memoizedState, u === null) return dl(t), null;
        if (n = (t.flags & 128) !== 0, e = u.rendering, e === null) if (n) Pu(u, !1);
        else {
          if (Sl !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
            if (e = $n(l), e !== null) {
              for (t.flags |= 128, Pu(u, !1), l = e.updateQueue, t.updateQueue = l, fe(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; ) n0(a, l), a = a.sibling;
              return M(gl, gl.current & 1 | 2), w && Ct(t, u.treeForkCount), t.child;
            }
            l = l.sibling;
          }
          u.tail !== null && Fl() > he && (t.flags |= 128, n = !0, Pu(u, !1), t.lanes = 4194304);
        }
        else {
          if (!n) if (l = $n(e), l !== null) {
            if (t.flags |= 128, n = !0, l = l.updateQueue, t.updateQueue = l, fe(t, l), Pu(u, !0), u.tail === null && u.tailMode === "hidden" && !e.alternate && !w) return dl(t), null;
          } else 2 * Fl() - u.renderingStartTime > he && a !== 536870912 && (t.flags |= 128, n = !0, Pu(u, !1), t.lanes = 4194304);
          u.isBackwards ? (e.sibling = t.child, t.child = e) : (l = u.last, l !== null ? l.sibling = e : t.child = e, u.last = e);
        }
        return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = Fl(), l.sibling = null, a = gl.current, M(gl, n ? a & 1 | 2 : a & 1), w && Ct(t, u.treeForkCount), l) : (dl(t), null);
      case 22:
      case 23:
        return at(t), qc(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dl(t), a = t.updateQueue, a !== null && fe(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && A(Ha), null;
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
    switch (zc(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return qt(zl), ol(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
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
        return ol(), null;
      case 10:
        return qt(t.type), null;
      case 22:
      case 23:
        return at(t), qc(), l !== null && A(Ha), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return qt(zl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function N1(l, t) {
    switch (zc(t), t.tag) {
      case 3:
        qt(zl), ol();
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
        at(t), qc(), l !== null && A(Ha);
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
            var e = a.create, c = a.inst;
            u = e(), c.destroy = u;
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (i) {
      nl(t, t.return, i);
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
            var c = u.inst, i = c.destroy;
            if (i !== void 0) {
              c.destroy = void 0, n = t;
              var f = a, h = i;
              try {
                h();
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
  function p1(l) {
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
  function H1(l, t, a) {
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
  function R1(l) {
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
  function di(l, t, a) {
    try {
      var u = l.stateNode;
      Zm(u, l.type, a, t), u[Gl] = t;
    } catch (n) {
      nl(l, l.return, n);
    }
  }
  function C1(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && da(l.type) || l.tag === 4;
  }
  function hi(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || C1(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && da(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function si(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6) l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = pt));
    else if (u !== 4 && (u === 27 && da(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null)) for (si(l, t, a), l = l.sibling; l !== null; ) si(l, t, a), l = l.sibling;
  }
  function ve(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6) l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (u !== 4 && (u === 27 && da(l.type) && (a = l.stateNode), l = l.child, l !== null)) for (ve(l, t, a), l = l.sibling; l !== null; ) ve(l, t, a), l = l.sibling;
  }
  function j1(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var u = l.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
      Rl(t, u, a), t[Ul] = l, t[Gl] = a;
    } catch (e) {
      nl(l, l.return, e);
    }
  }
  var Xt = !1, Tl = !1, Si = !1, q1 = typeof WeakSet == "function" ? WeakSet : Set, Dl = null;
  function Am(l, t) {
    if (l = l.containerInfo, Bi = He, l = $f(l), fc(l)) {
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
          var c = 0, i = -1, f = -1, h = 0, b = 0, E = l, S = null;
          t: for (; ; ) {
            for (var g; E !== a || n !== 0 && E.nodeType !== 3 || (i = c + n), E !== e || u !== 0 && E.nodeType !== 3 || (f = c + u), E.nodeType === 3 && (c += E.nodeValue.length), (g = E.firstChild) !== null; )
              S = E, E = g;
            for (; ; ) {
              if (E === l) break t;
              if (S === a && ++h === n && (i = c), S === e && ++b === u && (f = c), (g = E.nextSibling) !== null) break;
              E = S, S = E.parentNode;
            }
            E = g;
          }
          a = i === -1 || f === -1 ? null : {
            start: i,
            end: f
          };
        } else a = null;
      }
      a = a || {
        start: 0,
        end: 0
      };
    } else a = null;
    for (Yi = {
      focusedElem: l,
      selectionRange: a
    }, He = !1, Dl = t; Dl !== null; ) if (t = Dl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null) l.return = t, Dl = l;
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
              var N = Ga(a.type, n);
              l = u.getSnapshotBeforeUpdate(N, e), u.__reactInternalSnapshotBeforeUpdate = l;
            } catch (q) {
              nl(a, a.return, q);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9) Xi(l);
            else if (a === 1) switch (l.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                Xi(l);
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
  function B1(l, t, a) {
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
        } catch (c) {
          nl(a, a.return, c);
        }
        else {
          var n = Ga(a.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            l.componentDidUpdate(n, t, l.__reactInternalSnapshotBeforeUpdate);
          } catch (c) {
            nl(a, a.return, c);
          }
        }
        u & 64 && p1(a), u & 512 && tn(a, a.return);
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
          } catch (c) {
            nl(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && u & 4 && j1(a);
      case 26:
      case 5:
        Lt(l, a), t === null && u & 4 && R1(a), u & 512 && tn(a, a.return);
        break;
      case 12:
        Lt(l, a);
        break;
      case 31:
        Lt(l, a), u & 4 && Q1(l, a);
        break;
      case 13:
        Lt(l, a), u & 4 && X1(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = Hm.bind(null, a), Wm(l, a))));
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
  function Y1(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Y1(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && re(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
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
        hl !== null && (Xl ? (l = hl, Hv(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, a.stateNode), _u(l)) : Hv(hl, a.stateNode));
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
        Tl || (Dt(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && H1(a, t, u)), Zt(l, t, a);
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
        var n = Rm.bind(null, l, u);
        u.then(n, n);
      }
    });
  }
  function Zl(l, t) {
    var a = t.deletions;
    if (a !== null) for (var u = 0; u < a.length; u++) {
      var n = a[u], e = l, c = t, i = c;
      l: for (; i !== null; ) {
        switch (i.tag) {
          case 27:
            if (da(i.type)) {
              hl = i.stateNode, Xl = !1;
              break l;
            }
            break;
          case 5:
            hl = i.stateNode, Xl = !1;
            break l;
          case 3:
          case 4:
            hl = i.stateNode.containerInfo, Xl = !0;
            break l;
        }
        i = i.return;
      }
      if (hl === null) throw Error(o(160));
      G1(e, c, n), hl = null, Xl = !1, e = n.alternate, e !== null && (e.return = null), n.return = null;
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
                  e = n.getElementsByTagName("title")[0], (!e || e[Nu] || e[Ul] || e.namespaceURI === "http://www.w3.org/2000/svg" || e.hasAttribute("itemprop")) && (e = n.createElement(u), n.head.insertBefore(e, n.querySelector("head > title"))), Rl(e, u, a), e[Ul] = l, Ml(e), u = e;
                  break l;
                case "link":
                  var c = Lv("link", "href", n).get(u + (a.href || ""));
                  if (c) {
                    for (var i = 0; i < c.length; i++) if (e = c[i], e.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && e.getAttribute("rel") === (a.rel == null ? null : a.rel) && e.getAttribute("title") === (a.title == null ? null : a.title) && e.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                      c.splice(i, 1);
                      break t;
                    }
                  }
                  e = n.createElement(u), Rl(e, u, a), n.head.appendChild(e);
                  break;
                case "meta":
                  if (c = Lv("meta", "content", n).get(u + (a.content || ""))) {
                    for (i = 0; i < c.length; i++) if (e = c[i], e.getAttribute("content") === (a.content == null ? null : "" + a.content) && e.getAttribute("name") === (a.name == null ? null : a.name) && e.getAttribute("property") === (a.property == null ? null : a.property) && e.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && e.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                      c.splice(i, 1);
                      break t;
                    }
                  }
                  e = n.createElement(u), Rl(e, u, a), n.head.appendChild(e);
                  break;
                default:
                  throw Error(o(468, u));
              }
              e[Ul] = l, Ml(e), u = e;
            }
            l.stateNode = u;
          } else Vv(n, l.type, l.stateNode);
          else l.stateNode = Zv(n, u, l.memoizedProps);
          else e !== u ? (e === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : e.count--, u === null ? Vv(n, l.type, l.stateNode) : Zv(n, u, l.memoizedProps)) : u === null && l.stateNode !== null && di(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        Zl(t, l), Ll(l), u & 512 && (Tl || a === null || Dt(a, a.return)), a !== null && u & 4 && di(l, l.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (Zl(t, l), Ll(l), u & 512 && (Tl || a === null || Dt(a, a.return)), l.flags & 32) {
          n = l.stateNode;
          try {
            Ja(n, "");
          } catch (N) {
            nl(l, l.return, N);
          }
        }
        u & 4 && l.stateNode != null && (n = l.memoizedProps, di(l, n, a !== null ? a.memoizedProps : n)), u & 1024 && (Si = !0);
        break;
      case 6:
        if (Zl(t, l), Ll(l), u & 4) {
          if (l.stateNode === null) throw Error(o(162));
          u = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = u;
          } catch (N) {
            nl(l, l.return, N);
          }
        }
        break;
      case 3:
        if (De = null, n = Et, Et = Oe(t.containerInfo), Zl(t, l), Et = n, Ll(l), u & 4 && a !== null && a.memoizedState.isDehydrated) try {
          _u(t.containerInfo);
        } catch (N) {
          nl(l, l.return, N);
        }
        Si && (Si = !1, L1(l));
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
        var f = a !== null && a.memoizedState !== null, h = Xt, b = Tl;
        if (Xt = h || n, Tl = b || f, Zl(t, l), Tl = b, Xt = h, Ll(l), u & 8192) l: for (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (a === null || f || Xt || Tl || Qa(l)), a = null, t = l; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (a === null) {
              f = a = t;
              try {
                if (e = f.stateNode, n) c = e.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                else {
                  i = f.stateNode;
                  var E = f.memoizedProps.style, S = E != null && E.hasOwnProperty("display") ? E.display : null;
                  i.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                }
              } catch (N) {
                nl(f, f.return, N);
              }
            }
          } else if (t.tag === 6) {
            if (a === null) {
              f = t;
              try {
                f.stateNode.nodeValue = n ? "" : f.memoizedProps;
              } catch (N) {
                nl(f, f.return, N);
              }
            }
          } else if (t.tag === 18) {
            if (a === null) {
              f = t;
              try {
                var g = f.stateNode;
                n ? Rv(g, !0) : Rv(f.stateNode, !1);
              } catch (N) {
                nl(f, f.return, N);
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
          if (C1(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode;
            ve(l, hi(l), n);
            break;
          case 5:
            var e = a.stateNode;
            a.flags & 32 && (Ja(e, ""), a.flags &= -33), ve(l, hi(l), e);
            break;
          case 3:
          case 4:
            var c = a.stateNode.containerInfo;
            si(l, hi(l), c);
            break;
          default:
            throw Error(o(161));
        }
      } catch (i) {
        nl(l, l.return, i);
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
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) B1(l, t.alternate, t), t = t.sibling;
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
          typeof a.componentWillUnmount == "function" && H1(t, t.return, a), Qa(t);
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
      var u = t.alternate, n = l, e = t, c = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Vt(n, e, a), ln(4, e);
          break;
        case 1:
          if (Vt(n, e, a), u = e, n = u.stateNode, typeof n.componentDidMount == "function") try {
            n.componentDidMount();
          } catch (h) {
            nl(u, u.return, h);
          }
          if (u = e, n = u.updateQueue, n !== null) {
            var i = u.stateNode;
            try {
              var f = n.shared.hiddenCallbacks;
              if (f !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < f.length; n++) A0(f[n], i);
            } catch (h) {
              nl(u, u.return, h);
            }
          }
          a && c & 64 && p1(e), tn(e, e.return);
          break;
        case 27:
          j1(e);
        case 26:
        case 5:
          Vt(n, e, a), a && u === null && c & 4 && R1(e), tn(e, e.return);
          break;
        case 12:
          Vt(n, e, a);
          break;
        case 31:
          Vt(n, e, a), a && c & 4 && Q1(n, e);
          break;
        case 13:
          Vt(n, e, a), a && c & 4 && X1(n, e);
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
  function oi(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Lu(a));
  }
  function gi(l, t) {
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
            var e = t.memoizedProps, c = e.id, i = e.onPostCommit;
            typeof i == "function" && i(c, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
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
        e = t.stateNode, c = t.alternate, t.memoizedState !== null ? e._visibility & 2 ? At(l, t, a, u) : an(l, t) : e._visibility & 2 ? At(l, t, a, u) : (e._visibility |= 2, du(l, t, a, u, (t.subtreeFlags & 10256) !== 0 || !1)), n & 2048 && oi(c, t);
        break;
      case 24:
        At(l, t, a, u), n & 2048 && gi(t.alternate, t);
        break;
      default:
        At(l, t, a, u);
    }
  }
  function du(l, t, a, u, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var e = l, c = t, i = a, f = u, h = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          du(e, c, i, f, n), ln(8, c);
          break;
        case 23:
          break;
        case 22:
          var b = c.stateNode;
          c.memoizedState !== null ? b._visibility & 2 ? du(e, c, i, f, n) : an(e, c) : (b._visibility |= 2, du(e, c, i, f, n)), n && h & 2048 && oi(c.alternate, c);
          break;
        case 24:
          du(e, c, i, f, n), n && h & 2048 && gi(c.alternate, c);
          break;
        default:
          du(e, c, i, f, n);
      }
      t = t.sibling;
    }
  }
  function an(l, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var a = l, u = t, n = u.flags;
      switch (u.tag) {
        case 22:
          an(a, u), n & 2048 && oi(u.alternate, u);
          break;
        case 24:
          an(a, u), n & 2048 && gi(u.alternate, u);
          break;
        default:
          an(a, u);
      }
      t = t.sibling;
    }
  }
  var un = 8192;
  function hu(l, t, a) {
    if (l.subtreeFlags & un) for (l = l.child; l !== null; ) x1(l, t, a), l = l.sibling;
  }
  function x1(l, t, a) {
    switch (l.tag) {
      case 26:
        hu(l, t, a), l.flags & un && l.memoizedState !== null && cd(a, Et, l.memoizedState, l.memoizedProps);
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
  function K1(l) {
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
      K1(l);
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
      K1(l);
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
        if (Y1(u), u === a) {
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
      var t = pl(zl), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    },
    cacheSignal: function() {
      return pl(zl).controller.signal;
    }
  }, Om = typeof WeakMap == "function" ? WeakMap : Map, ll = 0, fl = null, x = null, r = 0, ul = 0, ut = null, ca = !1, su = !1, bi = !1, xt = 0, Sl = 0, ia = 0, Xa = 0, zi = 0, nt = 0, Su = 0, en = null, Vl = null, Ei = !1, de = 0, w1 = 0, he = 1 / 0, se = null, fa = null, _l = 0, va = null, ou = null, Kt = 0, Ai = 0, Ti = null, W1 = null, cn = 0, _i = null;
  function ht() {
    return (ll & 2) !== 0 && r !== 0 ? r & -r : _.T !== null ? pi() : hf();
  }
  function $1() {
    if (nt === 0) if ((r & 536870912) === 0 || w) {
      var l = An;
      An <<= 1, (An & 3932160) === 0 && (An = 262144), nt = l;
    } else nt = 536870912;
    return l = tt.current, l !== null && (l.flags |= 32), nt;
  }
  function xl(l, t, a) {
    (l === fl && (ul === 2 || ul === 9) || l.cancelPendingCommit !== null) && (gu(l, 0), ya(l, r, nt, !1)), On(l, a), ((ll & 2) === 0 || l !== fl) && (l === fl && ((ll & 2) === 0 && (Xa |= a), Sl === 4 && ya(l, r, nt, !1)), rt(l));
  }
  function F1(l, t, a) {
    if ((ll & 6) !== 0) throw Error(o(327));
    var u = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Du(l, t), n = u ? Um(l, t) : Mi(l, t, !0), e = u;
    do {
      if (n === 0) {
        su && !u && ya(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, e && !Mm(a)) {
          n = Mi(l, t, !1), e = !1;
          continue;
        }
        if (n === 2) {
          if (e = t, l.errorRecoveryDisabledLanes & e) var c = 0;
          else c = l.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            t = c;
            l: {
              var i = l;
              n = en;
              var f = i.current.memoizedState.isDehydrated;
              if (f && (gu(i, c).flags |= 256), c = Mi(i, c, !1), c !== 2) {
                if (bi && !f) {
                  i.errorRecoveryDisabledLanes |= e, Xa |= e, n = 4;
                  break l;
                }
                e = Vl, Vl = n, e !== null && (Vl === null ? Vl = e : Vl.push.apply(Vl, e));
              }
              n = c;
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
              ya(u, t, nt, !ca);
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
            if (ya(u, t, nt, !ca), _n(u, 0, !0) !== 0) break l;
            Kt = t, u.timeoutHandle = Nv(k1.bind(null, u, a, Vl, se, Ei, t, nt, Xa, Su, ca, e, "Throttled", -0, 0), n);
            break l;
          }
          k1(u, a, Vl, se, Ei, t, nt, Xa, Su, ca, e, null, -0, 0);
        }
      }
      break;
    } while (!0);
    rt(l);
  }
  function k1(l, t, a, u, n, e, c, i, f, h, b, E, S, g) {
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
      var N = (e & 62914560) === e ? de - Fl() : (e & 4194048) === e ? w1 - Fl() : 0;
      if (N = id(E, N), N !== null) {
        Kt = e, l.cancelPendingCommit = N(ev.bind(null, l, t, e, a, u, n, c, i, f, b, E, null, S, g)), ya(l, e, c, !h);
        return;
      }
    }
    ev(l, t, e, a, u, n, c, i, f);
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
    t &= ~zi, t &= ~Xa, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
    for (var n = t; 0 < n; ) {
      var e = 31 - Il(n), c = 1 << e;
      u[e] = -1, n &= ~c;
    }
    a !== 0 && vf(l, a, t);
  }
  function Se() {
    return (ll & 6) === 0 ? (fn(0, !1), !1) : !0;
  }
  function Oi() {
    if (x !== null) {
      if (ul === 0) var l = x.return;
      else l = x, jt = Na = null, Zc(l), iu = null, xu = 0, l = x;
      for (; l !== null; ) N1(l.alternate, l), l = l.return;
      x = null;
    }
  }
  function gu(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, xm(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), Kt = 0, Oi(), fl = l, x = a = Rt(l.current, null), r = t, ul = 0, ut = null, ca = !1, su = Du(l, t), bi = !1, Su = nt = zi = Xa = ia = Sl = 0, Vl = en = null, Ei = !1, (t & 8) !== 0 && (t |= t & 32);
    var u = l.entangledLanes;
    if (u !== 0) for (l = l.entanglements, u &= t; 0 < u; ) {
      var n = 31 - Il(u), e = 1 << n;
      t |= l[n], u &= ~e;
    }
    return xt = t, Yn(), a;
  }
  function I1(l, t) {
    G = null, _.H = ku, t === cu || t === Kn ? (t = g0(), ul = 3) : t === Nc ? (t = g0(), ul = 4) : ul = t === ai ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ut = t, x === null && (Sl = 1, ne(l, ft(t, l.current)));
  }
  function P1() {
    var l = tt.current;
    return l === null ? !0 : (r & 4194048) === r ? dt === null : (r & 62914560) === r || (r & 536870912) !== 0 ? l === dt : !1;
  }
  function lv() {
    var l = _.H;
    return _.H = ku, l === null ? ku : l;
  }
  function tv() {
    var l = _.A;
    return _.A = _m, l;
  }
  function oe() {
    Sl = 4, ca || (r & 4194048) !== r && tt.current !== null || (su = !0), (ia & 134217727) === 0 && (Xa & 134217727) === 0 || fl === null || ya(fl, r, nt, !1);
  }
  function Mi(l, t, a) {
    var u = ll;
    ll |= 2;
    var n = lv(), e = tv();
    (fl !== l || r !== t) && (se = null, gu(l, t)), t = !1;
    var c = Sl;
    l: do
      try {
        if (ul !== 0 && x !== null) {
          var i = x, f = ut;
          switch (ul) {
            case 8:
              Oi(), c = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              tt.current === null && (t = !0);
              var h = ul;
              if (ul = 0, ut = null, bu(l, i, f, h), a && su) {
                c = 0;
                break l;
              }
              break;
            default:
              h = ul, ul = 0, ut = null, bu(l, i, f, h);
          }
        }
        Dm(), c = Sl;
        break;
      } catch (b) {
        I1(l, b);
      }
    while (!0);
    return t && l.shellSuspendCounter++, jt = Na = null, ll = u, _.H = n, _.A = e, x === null && (fl = null, r = 0, Yn()), c;
  }
  function Dm() {
    for (; x !== null; ) av(x);
  }
  function Um(l, t) {
    var a = ll;
    ll |= 2;
    var u = lv(), n = tv();
    fl !== l || r !== t ? (se = null, he = Fl() + 500, gu(l, t)) : su = Du(l, t);
    l: do
      try {
        if (ul !== 0 && x !== null) {
          t = x;
          var e = ut;
          t: switch (ul) {
            case 1:
              ul = 0, ut = null, bu(l, t, e, 1);
              break;
            case 2:
            case 9:
              if (S0(e)) {
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
              S0(e) ? (ul = 0, ut = null, uv(t)) : (ul = 0, ut = null, bu(l, t, e, 7));
              break;
            case 5:
              var c = null;
              switch (x.tag) {
                case 26:
                  c = x.memoizedState;
                case 5:
                case 27:
                  var i = x;
                  if (c ? xv(c) : i.stateNode.complete) {
                    ul = 0, ut = null;
                    var f = i.sibling;
                    if (f !== null) x = f;
                    else {
                      var h = i.return;
                      h !== null ? (x = h, ge(h)) : x = null;
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
              Oi(), Sl = 6;
              break l;
            default:
              throw Error(o(462));
          }
        }
        Nm();
        break;
      } catch (b) {
        I1(l, b);
      }
    while (!0);
    return jt = Na = null, _.H = u, _.A = n, ll = a, x !== null ? 0 : (fl = null, r = 0, Yn(), Sl);
  }
  function Nm() {
    for (; x !== null && !ey(); ) av(x);
  }
  function av(l) {
    var t = D1(l.alternate, l, xt);
    l.memoizedProps = l.pendingProps, t === null ? ge(l) : x = t;
  }
  function uv(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = E1(a, t, t.pendingProps, t.type, void 0, r);
        break;
      case 11:
        t = E1(a, t, t.pendingProps, t.type.render, t.ref, r);
        break;
      case 5:
        Zc(t);
      default:
        N1(a, t), t = x = n0(t, xt), t = D1(a, t, xt);
    }
    l.memoizedProps = l.pendingProps, t === null ? ge(l) : x = t;
  }
  function bu(l, t, a, u) {
    jt = Na = null, Zc(t), iu = null, xu = 0;
    var n = t.return;
    try {
      if (om(l, n, t, a, r)) {
        Sl = 1, ne(l, ft(a, l.current)), x = null;
        return;
      }
    } catch (e) {
      if (n !== null) throw x = n, e;
      Sl = 1, ne(l, ft(a, l.current)), x = null;
      return;
    }
    t.flags & 32768 ? (w || u === 1 ? l = !0 : su || (r & 536870912) !== 0 ? l = !1 : (ca = l = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = tt.current, u !== null && u.tag === 13 && (u.flags |= 16384))), nv(t, l)) : ge(t);
  }
  function ge(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        nv(t, ca);
        return;
      }
      l = t.return;
      var a = zm(t.alternate, t, xt);
      if (a !== null) {
        x = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        x = t;
        return;
      }
      x = t = l;
    } while (t !== null);
    Sl === 0 && (Sl = 5);
  }
  function nv(l, t) {
    do {
      var a = Em(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, x = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        x = l;
        return;
      }
      x = l = a;
    } while (l !== null);
    Sl = 6, x = null;
  }
  function ev(l, t, a, u, n, e, c, i, f) {
    l.cancelPendingCommit = null;
    do
      be();
    while (_l !== 0);
    if ((ll & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (e = t.lanes | t.childLanes, e |= hc, Sy(l, a, e, c, i, f), l === fl && (x = fl = null, r = 0), ou = t, va = l, Kt = a, Ai = e, Ti = n, W1 = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Cm(zn, function() {
        return yv(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
        u = _.T, _.T = null, n = D.p, D.p = 2, c = ll, ll |= 4;
        try {
          Am(l, t, a);
        } finally {
          ll = c, D.p = n, _.T = u;
        }
      }
      _l = 1, cv(), iv(), fv();
    }
  }
  function cv() {
    if (_l === 1) {
      _l = 0;
      var l = va, t = ou, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = _.T, _.T = null;
        var u = D.p;
        D.p = 2;
        var n = ll;
        ll |= 4;
        try {
          Z1(t, l);
          var e = Yi, c = $f(l.containerInfo), i = e.focusedElem, f = e.selectionRange;
          if (c !== i && i && i.ownerDocument && Wf(i.ownerDocument.documentElement, i)) {
            if (f !== null && fc(i)) {
              var h = f.start, b = f.end;
              if (b === void 0 && (b = h), "selectionStart" in i) i.selectionStart = h, i.selectionEnd = Math.min(b, i.value.length);
              else {
                var E = i.ownerDocument || document, S = E && E.defaultView || window;
                if (S.getSelection) {
                  var g = S.getSelection(), N = i.textContent.length, q = Math.min(f.start, N), il = f.end === void 0 ? q : Math.min(f.end, N);
                  !g.extend && q > il && (c = il, il = q, q = c);
                  var m = wf(i, q), v = wf(i, il);
                  if (m && v && (g.rangeCount !== 1 || g.anchorNode !== m.node || g.anchorOffset !== m.offset || g.focusNode !== v.node || g.focusOffset !== v.offset)) {
                    var d = E.createRange();
                    d.setStart(m.node, m.offset), g.removeAllRanges(), q > il ? (g.addRange(d), g.extend(v.node, v.offset)) : (d.setEnd(v.node, v.offset), g.addRange(d));
                  }
                }
              }
            }
            for (E = [], g = i; g = g.parentNode; ) g.nodeType === 1 && E.push({
              element: g,
              left: g.scrollLeft,
              top: g.scrollTop
            });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < E.length; i++) {
              var z = E[i];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          He = !!Bi, Yi = Bi = null;
        } finally {
          ll = n, D.p = u, _.T = a;
        }
      }
      l.current = t, _l = 2;
    }
  }
  function iv() {
    if (_l === 2) {
      _l = 0;
      var l = va, t = ou, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = _.T, _.T = null;
        var u = D.p;
        D.p = 2;
        var n = ll;
        ll |= 4;
        try {
          B1(l, t.alternate, t);
        } finally {
          ll = n, D.p = u, _.T = a;
        }
      }
      _l = 3;
    }
  }
  function fv() {
    if (_l === 4 || _l === 3) {
      _l = 0, cy();
      var l = va, t = ou, a = Kt, u = W1;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? _l = 5 : (_l = 0, ou = va = null, vv(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (n === 0 && (fa = null), xe(a), t = t.stateNode, kl && typeof kl.onCommitFiberRoot == "function") try {
        kl.onCommitFiberRoot(Mu, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (u !== null) {
        t = _.T, n = D.p, D.p = 2, _.T = null;
        try {
          for (var e = l.onRecoverableError, c = 0; c < u.length; c++) {
            var i = u[c];
            e(i.value, { componentStack: i.stack });
          }
        } finally {
          _.T = t, D.p = n;
        }
      }
      (Kt & 3) !== 0 && be(), rt(l), n = l.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? l === _i ? cn++ : (cn = 0, _i = l) : cn = 0, fn(0, !1);
    }
  }
  function vv(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Lu(t)));
  }
  function be() {
    return cv(), iv(), fv(), yv();
  }
  function yv() {
    if (_l !== 5) return !1;
    var l = va, t = Ai;
    Ai = 0;
    var a = xe(Kt), u = _.T, n = D.p;
    try {
      D.p = 32 > a ? 32 : a, _.T = null, a = Ti, Ti = null;
      var e = va, c = Kt;
      if (_l = 0, ou = va = null, Kt = 0, (ll & 6) !== 0) throw Error(o(331));
      var i = ll;
      if (ll |= 4, r1(e.current), V1(e, e.current, c, a), ll = i, fn(0, !1), kl && typeof kl.onPostCommitFiberRoot == "function") try {
        kl.onPostCommitFiberRoot(Mu, e);
      } catch {
      }
      return !0;
    } finally {
      D.p = n, _.T = u, vv(l, t);
    }
  }
  function mv(l, t, a) {
    t = ft(a, t), t = ti(l.stateNode, t, 2), l = Ba(l, t, 2), l !== null && (On(l, 2), rt(l));
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
          l = ft(a, l), a = d1(2), u = Ba(t, a, 2), u !== null && (h1(a, u, t, l), On(u, 2), rt(u));
          break;
        }
      }
      t = t.return;
    }
  }
  function Di(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new Om();
      var n = /* @__PURE__ */ new Set();
      u.set(t, n);
    } else n = u.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), u.set(t, n));
    n.has(a) || (bi = !0, n.add(a), l = pm.bind(null, l, t, a), t.then(l, l));
  }
  function pm(l, t, a) {
    var u = l.pingCache;
    u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, fl === l && (r & a) === a && (Sl === 4 || Sl === 3 && (r & 62914560) === r && 300 > Fl() - de ? (ll & 2) === 0 && gu(l, 0) : zi |= a, Su === r && (Su = 0)), rt(l);
  }
  function dv(l, t) {
    t === 0 && (t = ff()), l = Ma(l, t), l !== null && (On(l, t), rt(l));
  }
  function Hm(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), dv(l, a);
  }
  function Rm(l, t) {
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
  function Cm(l, t) {
    return Ze(l, t);
  }
  var ze = null, zu = null, Ui = !1, Ee = !1, Ni = !1, ma = 0;
  function rt(l) {
    l !== zu && l.next === null && (zu === null ? ze = zu = l : zu = zu.next = l), Ee = !0, Ui || (Ui = !0, qm());
  }
  function fn(l, t) {
    if (!Ni && Ee) {
      Ni = !0;
      do
        for (var a = !1, u = ze; u !== null; ) {
          if (!t) if (l !== 0) {
            var n = u.pendingLanes;
            if (n === 0) var e = 0;
            else {
              var c = u.suspendedLanes, i = u.pingedLanes;
              e = (1 << 31 - Il(42 | l) + 1) - 1, e &= n & ~(c & ~i), e = e & 201326741 ? e & 201326741 | 1 : e ? e | 2 : 0;
            }
            e !== 0 && (a = !0, ov(u, e));
          } else e = r, e = _n(u, u === fl ? e : 0, u.cancelPendingCommit !== null || u.timeoutHandle !== -1), (e & 3) === 0 || Du(u, e) || (a = !0, ov(u, e));
          u = u.next;
        }
      while (a);
      Ni = !1;
    }
  }
  function jm() {
    hv();
  }
  function hv() {
    Ee = Ui = !1;
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
      var c = 31 - Il(e), i = 1 << c, f = n[c];
      f === -1 ? ((i & a) === 0 || (i & u) !== 0) && (n[c] = sy(i, t)) : f <= t && (l.expiredLanes |= i), e &= ~i;
    }
    if (t = fl, a = r, a = _n(l, l === t ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u = l.callbackNode, a === 0 || l === t && (ul === 2 || ul === 9) || l.cancelPendingCommit !== null) return u !== null && u !== null && Le(u), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Du(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (u !== null && Le(u), xe(a)) {
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
      return u = Sv.bind(null, l), a = Ze(a, u), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return u !== null && u !== null && Le(u), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Sv(l, t) {
    if (_l !== 0 && _l !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (be() && l.callbackNode !== a) return null;
    var u = r;
    return u = _n(l, l === fl ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u === 0 ? null : (F1(l, u, t), sv(l, Fl()), l.callbackNode != null && l.callbackNode === a ? Sv.bind(null, l) : null);
  }
  function ov(l, t) {
    if (be()) return null;
    F1(l, t, !0);
  }
  function qm() {
    Km(function() {
      (ll & 6) !== 0 ? Ze(nf, jm) : hv();
    });
  }
  function pi() {
    if (ma === 0) {
      var l = nu;
      l === 0 && (l = En, En <<= 1, (En & 261888) === 0 && (En = 256)), ma = l;
    }
    return ma;
  }
  function gv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Nn("" + l);
  }
  function bv(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function Bm(l, t, a, u, n) {
    if (t === "submit" && a && a.stateNode === n) {
      var e = gv((n[Gl] || null).action), c = u.submitter;
      c && (t = (t = c[Gl] || null) ? gv(t.formAction) : c.getAttribute("formAction"), t !== null && (e = t, c = null));
      var i = new Cn("action", "action", null, u, n);
      l.push({
        event: i,
        listeners: [{
          instance: null,
          listener: function() {
            if (u.defaultPrevented) {
              if (ma !== 0) {
                var f = c ? bv(n, c) : new FormData(n);
                $c(a, {
                  pending: !0,
                  data: f,
                  method: n.method,
                  action: e
                }, null, f);
              }
            } else typeof e == "function" && (i.preventDefault(), f = c ? bv(n, c) : new FormData(n), $c(a, {
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
  for (var Hi = 0; Hi < dc.length; Hi++) {
    var Ri = dc[Hi];
    zt(Ri.toLowerCase(), "on" + (Ri[0].toUpperCase() + Ri.slice(1)));
  }
  zt(If, "onAnimationEnd"), zt(Pf, "onAnimationIteration"), zt(l0, "onAnimationStart"), zt("dblclick", "onDoubleClick"), zt("focusin", "onFocus"), zt("focusout", "onBlur"), zt(Fy, "onTransitionRun"), zt(ky, "onTransitionStart"), zt(Iy, "onTransitionCancel"), zt(t0, "onTransitionEnd"), Ka("onMouseEnter", ["mouseout", "mouseover"]), Ka("onMouseLeave", ["mouseout", "mouseover"]), Ka("onPointerEnter", ["pointerout", "pointerover"]), Ka("onPointerLeave", ["pointerout", "pointerover"]), Aa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Aa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Aa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Aa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Aa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Aa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var vn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ym = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vn));
  function zv(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a], n = u.event;
      u = u.listeners;
      l: {
        var e = void 0;
        if (t) for (var c = u.length - 1; 0 <= c; c--) {
          var i = u[c], f = i.instance, h = i.currentTarget;
          if (i = i.listener, f !== e && n.isPropagationStopped()) break l;
          e = i, n.currentTarget = h;
          try {
            e(n);
          } catch (b) {
            Bn(b);
          }
          n.currentTarget = null, e = f;
        }
        else for (c = 0; c < u.length; c++) {
          if (i = u[c], f = i.instance, h = i.currentTarget, i = i.listener, f !== e && n.isPropagationStopped()) break l;
          e = i, n.currentTarget = h;
          try {
            e(n);
          } catch (b) {
            Bn(b);
          }
          n.currentTarget = null, e = f;
        }
      }
    }
  }
  function K(l, t) {
    var a = t[Ke];
    a === void 0 && (a = t[Ke] = /* @__PURE__ */ new Set());
    var u = l + "__bubble";
    a.has(u) || (Av(t, l, 2, !1), a.add(u));
  }
  function Ci(l, t, a) {
    var u = 0;
    t && (u |= 4), Av(a, l, u, t);
  }
  var Ae = "_reactListening" + Math.random().toString(36).slice(2);
  function Ev(l) {
    if (!l[Ae]) {
      l[Ae] = !0, of.forEach(function(a) {
        a !== "selectionchange" && (Ym.has(a) || Ci(a, !1, l), Ci(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Ae] || (t[Ae] = !0, Ci("selectionchange", !1, t));
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
        n = wi;
    }
    a = n.bind(null, t, a, l), n = void 0, !Pe || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), u ? n !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: n
    }) : l.addEventListener(t, a, !0) : n !== void 0 ? l.addEventListener(t, a, { passive: n }) : l.addEventListener(t, a, !1);
  }
  function ji(l, t, a, u, n) {
    var e = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null) l: for (; ; ) {
      if (u === null) return;
      var c = u.tag;
      if (c === 3 || c === 4) {
        var i = u.stateNode.containerInfo;
        if (i === n) break;
        if (c === 4) for (c = u.return; c !== null; ) {
          var f = c.tag;
          if ((f === 3 || f === 4) && c.stateNode.containerInfo === n) return;
          c = c.return;
        }
        for (; i !== null; ) {
          if (c = La(i), c === null) return;
          if (f = c.tag, f === 5 || f === 6 || f === 26 || f === 27) {
            u = e = c;
            continue l;
          }
          i = i.parentNode;
        }
      }
      u = u.return;
    }
    Nf(function() {
      var h = e, b = ke(a), E = [];
      l: {
        var S = a0.get(l);
        if (S !== void 0) {
          var g = Cn, N = l;
          switch (l) {
            case "keypress":
              if (Hn(a) === 0) break l;
            case "keydown":
            case "keyup":
              g = jy;
              break;
            case "focusin":
              N = "focus", g = uc;
              break;
            case "focusout":
              N = "blur", g = uc;
              break;
            case "beforeblur":
            case "afterblur":
              g = uc;
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
              g = By;
              break;
            case "scroll":
            case "scrollend":
              g = My;
              break;
            case "wheel":
              g = Yy;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = Ny;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = jf;
              break;
            case "toggle":
            case "beforetoggle":
              g = Gy;
          }
          var q = (t & 4) !== 0, il = !q && (l === "scroll" || l === "scrollend"), m = q ? S !== null ? S + "Capture" : null : S;
          q = [];
          for (var v = h, d; v !== null; ) {
            var z = v;
            if (d = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || d === null || m === null || (z = Hu(v, m), z != null && q.push(yn(v, z, d))), il) break;
            v = v.return;
          }
          0 < q.length && (S = new g(S, N, null, a, b), E.push({
            event: S,
            listeners: q
          }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (S = l === "mouseover" || l === "pointerover", g = l === "mouseout" || l === "pointerout", S && a !== Fe && (N = a.relatedTarget || a.fromElement) && (La(N) || N[Uu])) break l;
          if ((g || S) && (S = b.window === b ? b : (S = b.ownerDocument) ? S.defaultView || S.parentWindow : window, g ? (N = a.relatedTarget || a.toElement, g = h, N = N ? La(N) : null, N !== null && (il = W(N), q = N.tag, N !== il || q !== 5 && q !== 27 && q !== 6) && (N = null)) : (g = null, N = h), g !== N)) {
            if (q = Rf, z = "onMouseLeave", m = "onMouseEnter", v = "mouse", (l === "pointerout" || l === "pointerover") && (q = jf, z = "onPointerLeave", m = "onPointerEnter", v = "pointer"), il = g == null ? S : pu(g), d = N == null ? S : pu(N), S = new q(z, v + "leave", g, a, b), S.target = il, S.relatedTarget = d, z = null, La(b) === h && (q = new q(m, v + "enter", N, a, b), q.target = d, q.relatedTarget = il, z = q), il = z, g && N) t: {
              for (q = Gm, m = g, v = N, d = 0, z = m; z; z = q(z)) d++;
              z = 0;
              for (var R = v; R; R = q(R)) z++;
              for (; 0 < d - z; ) m = q(m), d--;
              for (; 0 < z - d; ) v = q(v), z--;
              for (; d--; ) {
                if (m === v || v !== null && m === v.alternate) {
                  q = m;
                  break t;
                }
                m = q(m), v = q(v);
              }
              q = null;
            }
            else q = null;
            g !== null && Tv(E, S, g, q, !1), N !== null && il !== null && Tv(E, il, N, q, !0);
          }
        }
        l: {
          if (S = h ? pu(h) : window, g = S.nodeName && S.nodeName.toLowerCase(), g === "select" || g === "input" && S.type === "file") var F = Lf;
          else if (Xf(S)) if (Vf) F = wy;
          else {
            F = ry;
            var p = Ky;
          }
          else g = S.nodeName, !g || g.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? h && $e(h.elementType) && (F = Lf) : F = Jy;
          if (F && (F = F(l, h))) {
            Zf(E, F, a, b);
            break l;
          }
          p && p(l, S, h), l === "focusout" && h && S.type === "number" && h.memoizedProps.value != null && We(S, "number", S.value);
        }
        switch (p = h ? pu(h) : window, l) {
          case "focusin":
            (Xf(p) || p.contentEditable === "true") && (Fa = p, vc = h, Qu = null);
            break;
          case "focusout":
            Qu = vc = Fa = null;
            break;
          case "mousedown":
            yc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yc = !1, Ff(E, a, b);
            break;
          case "selectionchange":
            if ($y) break;
          case "keydown":
          case "keyup":
            Ff(E, a, b);
        }
        var X;
        if (ec) l: {
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
        else $a ? Gf(l, a) && (J = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (J = "onCompositionStart");
        J && (qf && a.locale !== "ko" && ($a || J !== "onCompositionStart" ? J === "onCompositionEnd" && $a && (X = pf()) : (kt = b, lc = "value" in kt ? kt.value : kt.textContent, $a = !0)), p = Te(h, J), 0 < p.length && (J = new Cf(J, l, null, a, b), E.push({
          event: J,
          listeners: p
        }), X ? J.data = X : (X = Qf(a), X !== null && (J.data = X)))), (X = Xy ? Zy(l, a) : Ly(l, a)) && (J = Te(h, "onBeforeInput"), 0 < J.length && (p = new Cf("onBeforeInput", "beforeinput", null, a, b), E.push({
          event: p,
          listeners: J
        }), p.data = X)), Bm(E, l, h, a, b);
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
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || e === null || (n = Hu(l, a), n != null && u.unshift(yn(l, n, e)), n = Hu(l, t), n != null && u.push(yn(l, n, e))), l.tag === 3) return u;
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
    for (var e = t._reactName, c = []; a !== null && a !== u; ) {
      var i = a, f = i.alternate, h = i.stateNode;
      if (i = i.tag, f !== null && f === u) break;
      i !== 5 && i !== 26 && i !== 27 || h === null || (f = h, n ? (h = Hu(a, e), h != null && c.unshift(yn(a, h, f))) : n || (h = Hu(a, e), h != null && c.push(yn(a, h, f)))), a = a.return;
    }
    c.length !== 0 && l.push({
      event: t,
      listeners: c
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
  function cl(l, t, a, u, n, e) {
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
        u = Nn("" + u), l.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof e == "function" && (a === "formAction" ? (t !== "input" && cl(l, t, "name", n.name, n, null), cl(l, t, "formEncType", n.formEncType, n, null), cl(l, t, "formMethod", n.formMethod, n, null), cl(l, t, "formTarget", n.formTarget, n, null)) : (cl(l, t, "encType", n.encType, n, null), cl(l, t, "method", n.method, n, null), cl(l, t, "target", n.target, n, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        u = Nn("" + u), l.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (l.onclick = pt);
        break;
      case "onScroll":
        u != null && K("scroll", l);
        break;
      case "onScrollEnd":
        u != null && K("scrollend", l);
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
        a = Nn("" + u), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
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
        K("beforetoggle", l), K("toggle", l), Mn(l, "popover", u);
        break;
      case "xlinkActuate":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        Nt(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        Nt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        Nt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        Nt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
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
  function qi(l, t, a, u, n, e) {
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
        u != null && K("scroll", l);
        break;
      case "onScrollEnd":
        u != null && K("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = pt);
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
        K("error", l), K("load", l);
        var u = !1, n = !1, e;
        for (e in a) if (a.hasOwnProperty(e)) {
          var c = a[e];
          if (c != null) switch (e) {
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
              cl(l, t, e, c, a, null);
          }
        }
        n && cl(l, t, "srcSet", a.srcSet, a, null), u && cl(l, t, "src", a.src, a, null);
        return;
      case "input":
        K("invalid", l);
        var i = e = c = n = null, f = null, h = null;
        for (u in a) if (a.hasOwnProperty(u)) {
          var b = a[u];
          if (b != null) switch (u) {
            case "name":
              n = b;
              break;
            case "type":
              c = b;
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
              i = b;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (b != null) throw Error(o(137, t));
              break;
            default:
              cl(l, t, u, b, a, null);
          }
        }
        Tf(l, e, i, f, h, c, n, !1);
        return;
      case "select":
        K("invalid", l), u = c = e = null;
        for (n in a) if (a.hasOwnProperty(n) && (i = a[n], i != null)) switch (n) {
          case "value":
            e = i;
            break;
          case "defaultValue":
            c = i;
            break;
          case "multiple":
            u = i;
          default:
            cl(l, t, n, i, a, null);
        }
        t = e, a = c, l.multiple = !!u, t != null ? ra(l, !!u, t, !1) : a != null && ra(l, !!u, a, !0);
        return;
      case "textarea":
        K("invalid", l), e = n = u = null;
        for (c in a) if (a.hasOwnProperty(c) && (i = a[c], i != null)) switch (c) {
          case "value":
            u = i;
            break;
          case "defaultValue":
            n = i;
            break;
          case "children":
            e = i;
            break;
          case "dangerouslySetInnerHTML":
            if (i != null) throw Error(o(91));
            break;
          default:
            cl(l, t, c, i, a, null);
        }
        Of(l, u, n, e);
        return;
      case "option":
        for (f in a) a.hasOwnProperty(f) && (u = a[f], u != null) && (f === "selected" ? l.selected = u && typeof u != "function" && typeof u != "symbol" : cl(l, t, f, u, a, null));
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
        for (u = 0; u < vn.length; u++) K(vn[u], l);
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
        for (h in a) if (a.hasOwnProperty(h) && (u = a[h], u != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(o(137, t));
          default:
            cl(l, t, h, u, a, null);
        }
        return;
      default:
        if ($e(t)) {
          for (b in a) a.hasOwnProperty(b) && (u = a[b], u !== void 0 && qi(l, t, b, u, a, void 0));
          return;
        }
    }
    for (i in a) a.hasOwnProperty(i) && (u = a[i], u != null && cl(l, t, i, u, a, null));
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
        var n = null, e = null, c = null, i = null, f = null, h = null, b = null;
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
              u.hasOwnProperty(g) || cl(l, t, g, null, u, E);
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
              h = g;
              break;
            case "defaultChecked":
              b = g;
              break;
            case "value":
              c = g;
              break;
            case "defaultValue":
              i = g;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (g != null) throw Error(o(137, t));
              break;
            default:
              g !== E && cl(l, t, S, g, u, E);
          }
        }
        we(l, c, i, f, h, b, e, n);
        return;
      case "select":
        g = c = i = S = null;
        for (e in a) if (f = a[e], a.hasOwnProperty(e) && f != null) switch (e) {
          case "value":
            break;
          case "multiple":
            g = f;
          default:
            u.hasOwnProperty(e) || cl(l, t, e, null, u, f);
        }
        for (n in u) if (e = u[n], f = a[n], u.hasOwnProperty(n) && (e != null || f != null)) switch (n) {
          case "value":
            S = e;
            break;
          case "defaultValue":
            i = e;
            break;
          case "multiple":
            c = e;
          default:
            e !== f && cl(l, t, n, e, u, f);
        }
        t = i, a = c, u = g, S != null ? ra(l, !!a, S, !1) : !!u != !!a && (t != null ? ra(l, !!a, t, !0) : ra(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        g = S = null;
        for (i in a) if (n = a[i], a.hasOwnProperty(i) && n != null && !u.hasOwnProperty(i)) switch (i) {
          case "value":
            break;
          case "children":
            break;
          default:
            cl(l, t, i, null, u, n);
        }
        for (c in u) if (n = u[c], e = a[c], u.hasOwnProperty(c) && (n != null || e != null)) switch (c) {
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
            n !== e && cl(l, t, c, n, u, e);
        }
        _f(l, S, g);
        return;
      case "option":
        for (var N in a) S = a[N], a.hasOwnProperty(N) && S != null && !u.hasOwnProperty(N) && (N === "selected" ? l.selected = !1 : cl(l, t, N, null, u, S));
        for (f in u) S = u[f], g = a[f], u.hasOwnProperty(f) && S !== g && (S != null || g != null) && (f === "selected" ? l.selected = S && typeof S != "function" && typeof S != "symbol" : cl(l, t, f, S, u, g));
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
        for (var q in a) S = a[q], a.hasOwnProperty(q) && S != null && !u.hasOwnProperty(q) && cl(l, t, q, null, u, S);
        for (h in u) if (S = u[h], g = a[h], u.hasOwnProperty(h) && S !== g && (S != null || g != null)) switch (h) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (S != null) throw Error(o(137, t));
            break;
          default:
            cl(l, t, h, S, u, g);
        }
        return;
      default:
        if ($e(t)) {
          for (var il in a) S = a[il], a.hasOwnProperty(il) && S !== void 0 && !u.hasOwnProperty(il) && qi(l, t, il, void 0, u, S);
          for (b in u) S = u[b], g = a[b], !u.hasOwnProperty(b) || S === g || S === void 0 && g === void 0 || qi(l, t, b, S, u, g);
          return;
        }
    }
    for (var m in a) S = a[m], a.hasOwnProperty(m) && S != null && !u.hasOwnProperty(m) && cl(l, t, m, null, u, S);
    for (E in u) S = u[E], g = a[E], !u.hasOwnProperty(E) || S === g || S == null && g == null || cl(l, t, E, S, u, g);
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
        var n = a[u], e = n.transferSize, c = n.initiatorType, i = n.duration;
        if (e && i && Mv(c)) {
          for (c = 0, i = n.responseEnd, u += 1; u < a.length; u++) {
            var f = a[u], h = f.startTime;
            if (h > i) break;
            var b = f.transferSize, E = f.initiatorType;
            b && Mv(E) && (f = f.responseEnd, c += b * (f < i ? 1 : (i - h) / (f - h)));
          }
          if (--u, t += 8 * (e + c) / (n.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Bi = null, Yi = null;
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
  function Gi(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Qi = null;
  function Vm() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Qi ? !1 : (Qi = l, !0) : (Qi = null, !1);
  }
  var Nv = typeof setTimeout == "function" ? setTimeout : void 0, xm = typeof clearTimeout == "function" ? clearTimeout : void 0, pv = typeof Promise == "function" ? Promise : void 0, Km = typeof queueMicrotask == "function" ? queueMicrotask : typeof pv < "u" ? function(l) {
    return pv.resolve(null).then(l).catch(rm);
  } : Nv;
  function rm(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function da(l) {
    return l === "head";
  }
  function Hv(l, t) {
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
          var c = e.nextSibling, i = e.nodeName;
          e[Nu] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && e.rel.toLowerCase() === "stylesheet" || a.removeChild(e), e = c;
        }
      } else a === "body" && mn(l.ownerDocument.body);
      a = n;
    } while (a);
    _u(t);
  }
  function Rv(l, t) {
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
  function Xi(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xi(a), re(a);
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
        if (!l[Nu]) switch (t) {
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
  function Cv(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = st(l.nextSibling), l === null)) return null;
    return l;
  }
  function Zi(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Li(l) {
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
  var Vi = null;
  function jv(l) {
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
  function Bv(l, t, a) {
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
  var St = /* @__PURE__ */ new Map(), Yv = /* @__PURE__ */ new Set();
  function Oe(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Jt = D.d;
  D.d = {
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
    var l = Jt.f(), t = Se();
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
      var n = ct(t);
      n = 'link[rel="' + l + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), Yv.has(n) || (Yv.add(n), l = {
        rel: l,
        crossOrigin: a,
        href: t
      }, u.querySelector(n) === null && (t = u.createElement("link"), Rl(t, "link", l), Ml(t), u.head.appendChild(t)));
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
      var n = 'link[rel="preload"][as="' + ct(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + ct(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + ct(a.imageSizes) + '"]')) : n += '[href="' + ct(l) + '"]';
      var e = n;
      switch (t) {
        case "style":
          e = Au(l);
          break;
        case "script":
          e = Tu(l);
      }
      St.has(e) || (l = j({
        rel: "preload",
        href: t === "image" && a && a.imageSrcSet ? void 0 : l,
        as: t
      }, a), St.set(e, l), u.querySelector(n) !== null || t === "style" && u.querySelector(dn(e)) || t === "script" && u.querySelector(hn(e)) || (t = u.createElement("link"), Rl(t, "link", l), Ml(t), u.head.appendChild(t)));
    }
  }
  function ld(l, t) {
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
          e = Tu(l);
      }
      if (!St.has(e) && (l = j({
        rel: "modulepreload",
        href: l
      }, t), St.set(e, l), a.querySelector(n) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(hn(e))) return;
        }
        u = a.createElement("link"), Rl(u, "link", l), Ml(u), a.head.appendChild(u);
      }
    }
  }
  function td(l, t, a) {
    Jt.S(l, t, a);
    var u = Eu;
    if (u && l) {
      var n = xa(u).hoistableStyles, e = Au(l);
      t = t || "default";
      var c = n.get(e);
      if (!c) {
        var i = {
          loading: 0,
          preload: null
        };
        if (c = u.querySelector(dn(e))) i.loading = 5;
        else {
          l = j({
            rel: "stylesheet",
            href: l,
            "data-precedence": t
          }, a), (a = St.get(e)) && xi(l, a);
          var f = c = u.createElement("link");
          Ml(f), Rl(f, "link", l), f._p = new Promise(function(h, b) {
            f.onload = h, f.onerror = b;
          }), f.addEventListener("load", function() {
            i.loading |= 1;
          }), f.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, Me(c, t, u);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: i
        }, n.set(e, c);
      }
    }
  }
  function ad(l, t) {
    Jt.X(l, t);
    var a = Eu;
    if (a && l) {
      var u = xa(a).hoistableScripts, n = Tu(l), e = u.get(n);
      e || (e = a.querySelector(hn(n)), e || (l = j({
        src: l,
        async: !0
      }, t), (t = St.get(n)) && Ki(l, t), e = a.createElement("script"), Ml(e), Rl(e, "link", l), a.head.appendChild(e)), e = {
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
      var u = xa(a).hoistableScripts, n = Tu(l), e = u.get(n);
      e || (e = a.querySelector(hn(n)), e || (l = j({
        src: l,
        async: !0,
        type: "module"
      }, t), (t = St.get(n)) && Ki(l, t), e = a.createElement("script"), Ml(e), Rl(e, "link", l), a.head.appendChild(e)), e = {
        type: "script",
        instance: e,
        count: 1,
        state: null
      }, u.set(n, e));
    }
  }
  function Qv(l, t, a, u) {
    var n = (n = V.current) ? Oe(n) : null;
    if (!n) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Au(a.href), a = xa(n).hoistableStyles, u = a.get(t), u || (u = {
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
          var e = xa(n).hoistableStyles, c = e.get(l);
          if (c || (n = n.ownerDocument || n, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, e.set(l, c), (e = n.querySelector(dn(l))) && !e._p && (c.instance = e, c.state.loading = 5), St.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, St.set(l, a), e || nd(n, l, a, c.state))), t && u === null) throw Error(o(528, ""));
          return c;
        }
        if (t && u !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Tu(a), a = xa(n).hoistableScripts, u = a.get(t), u || (u = {
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
    return 'href="' + ct(l) + '"';
  }
  function dn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Xv(l) {
    return j({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function nd(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
      return u.loading |= 1;
    }), t.addEventListener("error", function() {
      return u.loading |= 2;
    }), Rl(t, "link", a), Ml(t), l.head.appendChild(t));
  }
  function Tu(l) {
    return '[src="' + ct(l) + '"]';
  }
  function hn(l) {
    return "script[async]" + l;
  }
  function Zv(l, t, a) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var u = l.querySelector('style[data-href~="' + ct(a.href) + '"]');
        if (u) return t.instance = u, Ml(u), u;
        var n = j({}, a, {
          "data-href": a.href,
          "data-precedence": a.precedence,
          href: null,
          precedence: null
        });
        return u = (l.ownerDocument || l).createElement("style"), Ml(u), Rl(u, "style", n), Me(u, a.precedence, l), t.instance = u;
      case "stylesheet":
        n = Au(a.href);
        var e = l.querySelector(dn(n));
        if (e) return t.state.loading |= 4, t.instance = e, Ml(e), e;
        u = Xv(a), (n = St.get(n)) && xi(u, n), e = (l.ownerDocument || l).createElement("link"), Ml(e);
        var c = e;
        return c._p = new Promise(function(i, f) {
          c.onload = i, c.onerror = f;
        }), Rl(e, "link", u), t.state.loading |= 4, Me(e, a.precedence, l), t.instance = e;
      case "script":
        return e = Tu(a.src), (n = l.querySelector(hn(e))) ? (t.instance = n, Ml(n), n) : (u = a, (n = St.get(e)) && (u = j({}, a), Ki(u, n)), l = l.ownerDocument || l, n = l.createElement("script"), Ml(n), Rl(n, "link", u), l.head.appendChild(n), t.instance = n);
      case "void":
        return null;
      default:
        throw Error(o(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, Me(u, a.precedence, l));
    return t.instance;
  }
  function Me(l, t, a) {
    for (var u = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = u.length ? u[u.length - 1] : null, e = n, c = 0; c < u.length; c++) {
      var i = u[c];
      if (i.dataset.precedence === t) e = i;
      else if (e !== n) break;
    }
    e ? e.parentNode.insertBefore(l, e.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function xi(l, t) {
    l.crossOrigin ??= t.crossOrigin, l.referrerPolicy ??= t.referrerPolicy, l.title ??= t.title;
  }
  function Ki(l, t) {
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
      if (!(e[Nu] || e[Ul] || l === "link" && e.getAttribute("rel") === "stylesheet") && e.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = e.getAttribute(t) || "";
        c = l + c;
        var i = u.get(c);
        i ? i.push(e) : u.set(c, [e]);
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
  function xv(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function cd(l, t, a, u) {
    if (a.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var n = Au(u.href), e = t.querySelector(dn(n));
        if (e) {
          t = e._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Ue.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = e, Ml(e);
          return;
        }
        e = t.ownerDocument || t, u = Xv(u), (n = St.get(n)) && xi(u, n), e = e.createElement("link"), Ml(e);
        var c = e;
        c._p = new Promise(function(i, f) {
          c.onload = i, c.onerror = f;
        }), Rl(e, "link", u), a.instance = e;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Ue.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var ri = 0;
  function id(l, t) {
    return l.stylesheets && l.count === 0 && pe(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var u = setTimeout(function() {
        if (l.stylesheets && pe(l, l.stylesheets), l.unsuspend) {
          var e = l.unsuspend;
          l.unsuspend = null, e();
        }
      }, 6e4 + t);
      0 < l.imgBytes && ri === 0 && (ri = 62500 * Lm());
      var n = setTimeout(function() {
        if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && pe(l, l.stylesheets), l.unsuspend)) {
          var e = l.unsuspend;
          l.unsuspend = null, e();
        }
      }, (l.imgBytes > ri ? 50 : 800) + t);
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(u), clearTimeout(n);
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
  var Ne = null;
  function pe(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Ne = /* @__PURE__ */ new Map(), t.forEach(fd, l), Ne = null, Ue.call(l));
  }
  function fd(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Ne.get(l);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Ne.set(l, a);
        for (var n = l.querySelectorAll("link[data-precedence],style[data-precedence]"), e = 0; e < n.length; e++) {
          var c = n[e];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (a.set(c.dataset.precedence, c), u = c);
        }
        u && a.set(null, u);
      }
      n = t.instance, c = n.getAttribute("data-precedence"), e = a.get(c) || u, e === u && a.set(null, n), a.set(c, n), this.count++, u = Ue.bind(this), n.addEventListener("load", u), n.addEventListener("error", u), e ? e.parentNode.insertBefore(n, e.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(n, l.firstChild)), t.state.loading |= 4;
    }
  }
  var sn = {
    $$typeof: Ol,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0
  };
  function vd(l, t, a, u, n, e, c, i, f) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ve(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ve(0), this.hiddenUpdates = Ve(null), this.identifierPrefix = u, this.onUncaughtError = n, this.onCaughtError = e, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function yd(l, t, a, u, n, e, c, i, f, h, b, E) {
    return l = new vd(l, t, a, c, f, h, b, E, i), t = 1, e === !0 && (t |= 24), e = lt(3, null, null, t), l.current = e, e.stateNode = l, t = Mc(), t.refCount++, l.pooledCache = t, t.refCount++, e.memoizedState = {
      element: u,
      isDehydrated: a,
      cache: t
    }, pc(e), l;
  }
  function md(l) {
    return l ? (l = Pa, l) : Pa;
  }
  function Kv(l, t, a, u, n, e) {
    n = md(n), u.context === null ? u.context = n : u.pendingContext = n, u = qa(t), u.payload = { element: a }, e = e === void 0 ? null : e, e !== null && (u.callback = e), a = Ba(l, u, t), a !== null && (xl(a, l, t), ru(a, l, t));
  }
  function rv(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Ji(l, t) {
    rv(l, t), (l = l.alternate) && rv(l, t);
  }
  function Jv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ma(l, 67108864);
      t !== null && xl(t, l, 67108864), Ji(l, 67108864);
    }
  }
  function wv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ht();
      t = df(t);
      var a = Ma(l, t);
      a !== null && xl(a, l, t), Ji(l, t);
    }
  }
  var He = !0;
  function dd(l, t, a, u) {
    var n = _.T;
    _.T = null;
    var e = D.p;
    try {
      D.p = 2, wi(l, t, a, u);
    } finally {
      D.p = e, _.T = n;
    }
  }
  function hd(l, t, a, u) {
    var n = _.T;
    _.T = null;
    var e = D.p;
    try {
      D.p = 8, wi(l, t, a, u);
    } finally {
      D.p = e, _.T = n;
    }
  }
  function wi(l, t, a, u) {
    if (He) {
      var n = Wi(u);
      if (n === null) ji(l, t, u, Re, a), $v(l, u);
      else if (Sd(n, l, t, a, u)) u.stopPropagation();
      else if ($v(l, u), t & 4 && -1 < sd.indexOf(l)) {
        for (; n !== null; ) {
          var e = Va(n);
          if (e !== null) switch (e.tag) {
            case 3:
              if (e = e.stateNode, e.current.memoizedState.isDehydrated) {
                var c = Ea(e.pendingLanes);
                if (c !== 0) {
                  var i = e;
                  for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                    var f = 1 << 31 - Il(c);
                    i.entanglements[1] |= f, c &= ~f;
                  }
                  rt(e), (ll & 6) === 0 && (he = Fl() + 500, fn(0, !1));
                }
              }
              break;
            case 31:
            case 13:
              i = Ma(e, 2), i !== null && xl(i, e, 2), Se(), Ji(e, 2);
          }
          if (e = Wi(u), e === null && ji(l, t, u, Re, a), e === n) break;
          n = e;
        }
        n !== null && u.stopPropagation();
      } else ji(l, t, u, null, a);
    }
  }
  function Wi(l) {
    return l = ke(l), $i(l);
  }
  var Re = null;
  function $i(l) {
    if (Re = null, l = La(l), l !== null) {
      var t = W(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = I(t), l !== null) return l;
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
    return Re = l, null;
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
        switch (iy()) {
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
  var Fi = !1, ha = null, sa = null, Sa = null, Sn = /* @__PURE__ */ new Map(), on = /* @__PURE__ */ new Map(), oa = [], sd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
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
        Sa = null;
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
  function gn(l, t, a, u, n, e) {
    return l === null || l.nativeEvent !== e ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: u,
      nativeEvent: e,
      targetContainers: [n]
    }, t !== null && (t = Va(t), t !== null && Jv(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), l);
  }
  function Sd(l, t, a, u, n) {
    switch (t) {
      case "focusin":
        return ha = gn(ha, l, t, a, u, n), !0;
      case "dragenter":
        return sa = gn(sa, l, t, a, u, n), !0;
      case "mouseover":
        return Sa = gn(Sa, l, t, a, u, n), !0;
      case "pointerover":
        var e = n.pointerId;
        return Sn.set(e, gn(Sn.get(e) || null, l, t, a, u, n)), !0;
      case "gotpointercapture":
        return e = n.pointerId, on.set(e, gn(on.get(e) || null, l, t, a, u, n)), !0;
    }
    return !1;
  }
  function Fv(l) {
    var t = La(l.target);
    if (t !== null) {
      var a = W(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = I(a), t !== null) {
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
  function Ce(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = Wi(l.nativeEvent);
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
    Ce(l) && a.delete(t);
  }
  function od() {
    Fi = !1, ha !== null && Ce(ha) && (ha = null), sa !== null && Ce(sa) && (sa = null), Sa !== null && Ce(Sa) && (Sa = null), Sn.forEach(kv), on.forEach(kv);
  }
  function je(l, t) {
    l.blockedOn === t && (l.blockedOn = null, Fi || (Fi = !0, O.unstable_scheduleCallback(O.unstable_NormalPriority, od)));
  }
  var qe = null;
  function Iv(l) {
    qe !== l && (qe = l, O.unstable_scheduleCallback(O.unstable_NormalPriority, function() {
      qe === l && (qe = null);
      for (var t = 0; t < l.length; t += 3) {
        var a = l[t], u = l[t + 1], n = l[t + 2];
        if (typeof u != "function") {
          if ($i(u || a) === null) continue;
          break;
        }
        var e = Va(a);
        e !== null && (l.splice(t, 3), t -= 3, $c(e, {
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
      return je(f, l);
    }
    ha !== null && je(ha, l), sa !== null && je(sa, l), Sa !== null && je(Sa, l), Sn.forEach(t), on.forEach(t);
    for (var a = 0; a < oa.length; a++) {
      var u = oa[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < oa.length && (a = oa[0], a.blockedOn === null); ) Fv(a), a.blockedOn === null && oa.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null) for (u = 0; u < a.length; u += 3) {
      var n = a[u], e = a[u + 1], c = n[Gl] || null;
      if (typeof e == "function") c || Iv(a);
      else if (c) {
        var i = null;
        if (e && e.hasAttribute("formAction")) {
          if (n = e, c = e[Gl] || null) i = c.formAction;
          else if ($i(n) !== null) continue;
        } else i = c.action;
        typeof i == "function" ? a[u + 1] = i : (a.splice(u, 3), u -= 3), Iv(a);
      }
    }
  }
  function gd() {
    function l(e) {
      e.canIntercept && e.info === "react-transition" && e.intercept({
        handler: function() {
          return new Promise(function(c) {
            return n = c;
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
  function ki(l) {
    this._internalRoot = l;
  }
  Ii.prototype.render = ki.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var a = t.current;
    Kv(a, ht(), l, t, null, null);
  }, Ii.prototype.unmount = ki.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Kv(l.current, 2, null, l, null, null), Se(), t[Uu] = null;
    }
  };
  function Ii(l) {
    this._internalRoot = l;
  }
  Ii.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = hf();
      l = {
        blockedOn: null,
        target: l,
        priority: t
      };
      for (var a = 0; a < oa.length && t !== 0 && t < oa[a].priority; a++) ;
      oa.splice(a, 0, l), a === 0 && Fv(l);
    }
  };
  var Pv = Y.version;
  if (Pv !== "19.2.7") throw Error(o(527, Pv, "19.2.7"));
  D.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
    return l = T(t), l = l !== null ? Q(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var bd = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Be = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Be.isDisabled && Be.supportsFiber) try {
      Mu = Be.inject(bd), kl = Be;
    } catch {
    }
  }
  s.createRoot = function(l, t) {
    if (!al(l)) throw Error(o(299));
    var a = !1, u = "", n = hm, e = sm, c = Sm;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (e = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = yd(l, 1, !1, null, null, a, u, null, n, e, c, gd), l[Uu] = t.current, Ev(l), new ki(t);
  };
})), Cd = /* @__PURE__ */ Ut(((s, O) => {
  function Y() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y);
      } catch (Z) {
        console.error(Z);
      }
  }
  Y(), O.exports = Rd();
})), ly = /* @__PURE__ */ uy(tf(), 1), jd = /* @__PURE__ */ uy(Cd(), 1), qd = class {
  listeners = /* @__PURE__ */ new Map();
  eventHistory = [];
  maxHistorySize;
  eventTarget;
  constructor(s = {}) {
    this.maxHistorySize = s.maxHistorySize ?? 100, this.eventTarget = s.eventTarget;
  }
  configure(s) {
    this.maxHistorySize = s.maxHistorySize ?? this.maxHistorySize, this.eventTarget = s.eventTarget ?? this.eventTarget;
  }
  on(s, O) {
    return this.listeners.has(s) || this.listeners.set(s, /* @__PURE__ */ new Set()), this.listeners.get(s).add(O), () => {
      this.listeners.get(s)?.delete(O);
    };
  }
  once(s, O) {
    const Y = this.on(s, (Z) => {
      O(Z), Y();
    });
    return Y;
  }
  emit(s, O, Y) {
    const Z = {
      type: s,
      source: O,
      payload: Y,
      timestamp: Date.now()
    };
    this.eventHistory.push(Z), this.eventHistory.length > this.maxHistorySize && this.eventHistory.shift();
    const o = this.listeners.get(s);
    o && o.forEach((W) => {
      try {
        W(Z);
      } catch (I) {
        console.error(`[EventBus] Error in listener for ${s}:`, I);
      }
    });
    const al = this.eventTarget ?? (typeof window < "u" ? window : void 0);
    if (al && typeof CustomEvent < "u") {
      const W = new CustomEvent("platform-event", {
        detail: Z,
        bubbles: !0
      });
      al.dispatchEvent(W);
    }
  }
  getHistory(s) {
    return s ? this.eventHistory.filter((O) => O.type === s) : [...this.eventHistory];
  }
  clearHistory() {
    this.eventHistory = [];
  }
  off(s) {
    this.listeners.delete(s);
  }
  clear() {
    this.listeners.clear();
  }
}, Pi = new qd(), lf = {
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
function Bd(s) {
  return s instanceof Error ? {
    name: s.name,
    message: s.message,
    stack: s.stack
  } : { message: typeof s == "string" ? s : "Unknown runtime error" };
}
function ty({ app: s, error: O, logger: Y, source: Z = "runtime", metadata: o }) {
  const al = {
    level: "error",
    message: `${s.name} failed in ${Z}`,
    appId: s.id,
    source: Z,
    error: Bd(O),
    metadata: o,
    timestamp: Date.now()
  };
  return Pi.emit(lf.APP_ERROR, s.id, al), Y?.log(al), al;
}
function Yd(s, O, Y = {}) {
  const Z = customElements.get(s);
  if (Z) return Z;
  class o extends HTMLElement {
    static observedAttributes = Y.observedAttributes ?? [];
    cleanup;
    async connectedCallback() {
      const W = this.createContext();
      try {
        const I = await O.mount(this, W);
        this.cleanup = typeof I == "function" ? I : void 0, Pi.emit(lf.APP_LOADED, W.app.id, { tagName: s });
      } catch (I) {
        throw ty({
          app: W.app,
          error: I,
          logger: Y.logger,
          source: "micro-app-connected-callback",
          metadata: { tagName: s }
        }), I;
      }
    }
    disconnectedCallback() {
      window.setTimeout(() => {
        try {
          this.cleanup?.(), O.unmount?.(this), Pi.emit(lf.APP_UNLOADED, this.getAttribute("data-app-name") ?? s, { tagName: s });
        } catch (W) {
          ty({
            app: {
              id: this.getAttribute("data-app-name") ?? s,
              name: this.getAttribute("data-app-name") ?? s
            },
            error: W,
            logger: Y.logger,
            source: "micro-app-disconnected-callback",
            metadata: { tagName: s }
          });
        }
      }, 0);
    }
    createContext() {
      return {
        app: {
          id: this.getAttribute("data-app-name") ?? s,
          name: this.getAttribute("data-app-name") ?? s,
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
            tagName: s
          },
          version: this.getAttribute("data-version") ?? "0.0.0",
          owner: "",
          permissions: []
        },
        shellOrigin: this.getAttribute("data-shell-origin") ?? window.location.origin
      };
    }
  }
  return customElements.define(s, o), o;
}
var Gd = /* @__PURE__ */ Ut(((s) => {
  var O = /* @__PURE__ */ Symbol.for("react.transitional.element"), Y = /* @__PURE__ */ Symbol.for("react.fragment");
  function Z(o, al, W) {
    var I = null;
    if (W !== void 0 && (I = "" + W), al.key !== void 0 && (I = "" + al.key), "key" in al) {
      W = {};
      for (var vl in al) vl !== "key" && (W[vl] = al[vl]);
    } else W = al;
    return al = W.ref, {
      $$typeof: O,
      type: o,
      key: I,
      ref: al !== void 0 ? al : null,
      props: W
    };
  }
  s.jsx = Z, s.jsxs = Z;
})), Qd = /* @__PURE__ */ Ut(((s, O) => {
  O.exports = Gd();
})), B = Qd();
function Xd() {
  const [s] = (0, ly.useState)([
    {
      label: "Total Users",
      value: "12,543",
      change: 15,
      trend: "up"
    },
    {
      label: "Sessions",
      value: "45,230",
      change: 8,
      trend: "up"
    },
    {
      label: "Conversion Rate",
      value: "3.2%",
      change: -2,
      trend: "down"
    },
    {
      label: "Avg. Session Duration",
      value: "4m 32s",
      change: 12,
      trend: "up"
    }
  ]);
  return (0, ly.useEffect)(() => {
    console.log("[AnalyticsApp] Micro app loaded");
    const O = (Y) => {
      console.log("[AnalyticsApp] Event received:", Y.detail);
    };
    return window.addEventListener("platform-event", O), () => window.removeEventListener("platform-event", O);
  }, []), /* @__PURE__ */ (0, B.jsxs)("div", {
    className: "micro-app-container",
    children: [
      /* @__PURE__ */ (0, B.jsxs)("div", {
        className: "micro-app-header",
        children: [/* @__PURE__ */ (0, B.jsx)("h1", { children: "📊 Analytics Dashboard" }), /* @__PURE__ */ (0, B.jsx)("p", { children: "Real-time insights and performance metrics" })]
      }),
      /* @__PURE__ */ (0, B.jsx)("div", {
        className: "metrics-grid",
        children: s.map((O, Y) => /* @__PURE__ */ (0, B.jsxs)("div", {
          className: "metric-card",
          children: [
            /* @__PURE__ */ (0, B.jsx)("div", {
              className: "metric-label",
              children: O.label
            }),
            /* @__PURE__ */ (0, B.jsx)("div", {
              className: "metric-value",
              children: O.value
            }),
            /* @__PURE__ */ (0, B.jsxs)("div", {
              className: `metric-change trend-${O.trend}`,
              children: [/* @__PURE__ */ (0, B.jsx)("span", {
                className: "trend-icon",
                children: O.trend === "up" ? "↑" : O.trend === "down" ? "↓" : "→"
              }), /* @__PURE__ */ (0, B.jsxs)("span", { children: [
                Math.abs(O.change),
                "% ",
                O.trend === "neutral" ? "stable" : O.trend === "up" ? "increase" : "decrease"
              ] })]
            })
          ]
        }, Y))
      }),
      /* @__PURE__ */ (0, B.jsxs)("div", {
        className: "charts-section",
        children: [/* @__PURE__ */ (0, B.jsx)("h2", { children: "Traffic Overview" }), /* @__PURE__ */ (0, B.jsxs)("div", {
          className: "chart-placeholder",
          children: [/* @__PURE__ */ (0, B.jsxs)("div", {
            className: "chart-mock",
            children: [
              /* @__PURE__ */ (0, B.jsx)("div", {
                className: "bar",
                style: { height: "60%" }
              }),
              /* @__PURE__ */ (0, B.jsx)("div", {
                className: "bar",
                style: { height: "75%" }
              }),
              /* @__PURE__ */ (0, B.jsx)("div", {
                className: "bar",
                style: { height: "85%" }
              }),
              /* @__PURE__ */ (0, B.jsx)("div", {
                className: "bar",
                style: { height: "70%" }
              }),
              /* @__PURE__ */ (0, B.jsx)("div", {
                className: "bar",
                style: { height: "80%" }
              }),
              /* @__PURE__ */ (0, B.jsx)("div", {
                className: "bar",
                style: { height: "90%" }
              }),
              /* @__PURE__ */ (0, B.jsx)("div", {
                className: "bar",
                style: { height: "95%" }
              })
            ]
          }), /* @__PURE__ */ (0, B.jsx)("p", {
            className: "chart-label",
            children: "Last 7 days"
          })]
        })]
      }),
      /* @__PURE__ */ (0, B.jsxs)("div", {
        className: "events-section",
        children: [/* @__PURE__ */ (0, B.jsx)("h2", { children: "Recent Events" }), /* @__PURE__ */ (0, B.jsxs)("div", {
          className: "events-list",
          children: [
            /* @__PURE__ */ (0, B.jsxs)("div", {
              className: "event-item",
              children: [/* @__PURE__ */ (0, B.jsx)("div", {
                className: "event-icon",
                children: "🚀"
              }), /* @__PURE__ */ (0, B.jsxs)("div", {
                className: "event-content",
                children: [/* @__PURE__ */ (0, B.jsx)("div", {
                  className: "event-title",
                  children: "New User Signup"
                }), /* @__PURE__ */ (0, B.jsx)("div", {
                  className: "event-time",
                  children: "2 minutes ago"
                })]
              })]
            }),
            /* @__PURE__ */ (0, B.jsxs)("div", {
              className: "event-item",
              children: [/* @__PURE__ */ (0, B.jsx)("div", {
                className: "event-icon",
                children: "💰"
              }), /* @__PURE__ */ (0, B.jsxs)("div", {
                className: "event-content",
                children: [/* @__PURE__ */ (0, B.jsx)("div", {
                  className: "event-title",
                  children: "Purchase Completed"
                }), /* @__PURE__ */ (0, B.jsx)("div", {
                  className: "event-time",
                  children: "15 minutes ago"
                })]
              })]
            }),
            /* @__PURE__ */ (0, B.jsxs)("div", {
              className: "event-item",
              children: [/* @__PURE__ */ (0, B.jsx)("div", {
                className: "event-icon",
                children: "⚠️"
              }), /* @__PURE__ */ (0, B.jsxs)("div", {
                className: "event-content",
                children: [/* @__PURE__ */ (0, B.jsx)("div", {
                  className: "event-title",
                  children: "High API Latency Detected"
                }), /* @__PURE__ */ (0, B.jsx)("div", {
                  className: "event-time",
                  children: "1 hour ago"
                })]
              })]
            }),
            /* @__PURE__ */ (0, B.jsxs)("div", {
              className: "event-item",
              children: [/* @__PURE__ */ (0, B.jsx)("div", {
                className: "event-icon",
                children: "✅"
              }), /* @__PURE__ */ (0, B.jsxs)("div", {
                className: "event-content",
                children: [/* @__PURE__ */ (0, B.jsx)("div", {
                  className: "event-title",
                  children: "Deployment Successful"
                }), /* @__PURE__ */ (0, B.jsx)("div", {
                  className: "event-time",
                  children: "3 hours ago"
                })]
              })]
            })
          ]
        })]
      }),
      /* @__PURE__ */ (0, B.jsxs)("div", {
        className: "actions",
        children: [/* @__PURE__ */ (0, B.jsx)("button", {
          className: "btn btn-primary",
          children: "Export Report"
        }), /* @__PURE__ */ (0, B.jsx)("button", {
          className: "btn btn-secondary",
          children: "View Detailed Analytics"
        })]
      })
    ]
  });
}
var Zd = Yd("micro-analytics-app", { mount(s) {
  const O = jd.createRoot(s);
  return O.render(/* @__PURE__ */ (0, B.jsx)(Xd, {})), () => O.unmount();
} });
export {
  Zd as MicroAnalyticsApp
};
