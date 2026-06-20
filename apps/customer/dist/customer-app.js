var nk = Object.create, Ru = Object.defineProperty, ik = Object.getOwnPropertyDescriptor, ak = Object.getOwnPropertyNames, rk = Object.getPrototypeOf, ok = Object.prototype.hasOwnProperty, $n = (n, a) => () => (a || (n((a = { exports: {} }).exports, a), n = null), a.exports), gn = (n, a) => {
  let o = {};
  for (var c in n)
    Ru(o, c, {
      get: n[c],
      enumerable: !0
    });
  return a || Ru(o, Symbol.toStringTag, { value: "Module" }), o;
}, lk = (n, a, o, c) => {
  if (a && typeof a == "object" || typeof a == "function")
    for (var i = ak(a), u = 0, d = i.length, m; u < d; u++)
      m = i[u], !ok.call(n, m) && m !== o && Ru(n, m, {
        get: ((y) => a[y]).bind(null, m),
        enumerable: !(c = ik(a, m)) || c.enumerable
      });
  return n;
}, F_ = (n, a, o) => (o = n != null ? nk(rk(n)) : {}, lk(a || !n || !n.__esModule ? Ru(o, "default", {
  value: n,
  enumerable: !0
}) : o, n)), Ca = /* @__PURE__ */ ((n) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(n, { get: (a, o) => (typeof require < "u" ? require : a)[o] }) : n)(function(n) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Calling `require` for "' + n + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), uk = /* @__PURE__ */ $n(((n) => {
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.fragment"), i = /* @__PURE__ */ Symbol.for("react.strict_mode"), u = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), m = /* @__PURE__ */ Symbol.for("react.context"), y = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), h = /* @__PURE__ */ Symbol.for("react.memo"), U = /* @__PURE__ */ Symbol.for("react.lazy"), w = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
  function W(S) {
    return S === null || typeof S != "object" ? null : (S = q && S[q] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var pe = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Qe = Object.assign, Ae = {};
  function Ie(S, R, H) {
    this.props = S, this.context = R, this.refs = Ae, this.updater = H || pe;
  }
  Ie.prototype.isReactComponent = {}, Ie.prototype.setState = function(S, R) {
    if (typeof S != "object" && typeof S != "function" && S != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, S, R, "setState");
  }, Ie.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function Pe() {
  }
  Pe.prototype = Ie.prototype;
  function ae(S, R, H) {
    this.props = S, this.context = R, this.refs = Ae, this.updater = H || pe;
  }
  var we = ae.prototype = new Pe();
  we.constructor = ae, Qe(we, Ie.prototype), we.isPureReactComponent = !0;
  var ht = Array.isArray;
  function yt() {
  }
  var ge = {
    H: null,
    A: null,
    T: null,
    S: null
  }, kt = Object.prototype.hasOwnProperty;
  function hn(S, R, H) {
    var Y = H.ref;
    return {
      $$typeof: a,
      type: S,
      key: R,
      ref: Y !== void 0 ? Y : null,
      props: H
    };
  }
  function bi(S, R) {
    return hn(S.type, R, S.props);
  }
  function Nt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === a;
  }
  function yn(S) {
    var R = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + S.replace(/[=:]/g, function(H) {
      return R[H];
    });
  }
  var ea = /\/+/g;
  function dn(S, R) {
    return typeof S == "object" && S !== null && S.key != null ? yn("" + S.key) : R.toString(36);
  }
  function J(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(yt, yt) : (S.status = "pending", S.then(function(R) {
          S.status === "pending" && (S.status = "fulfilled", S.value = R);
        }, function(R) {
          S.status === "pending" && (S.status = "rejected", S.reason = R);
        })), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function M(S, R, H, Y, ue) {
    var ce = typeof S;
    (ce === "undefined" || ce === "boolean") && (S = null);
    var ke = !1;
    if (S === null) ke = !0;
    else switch (ce) {
      case "bigint":
      case "string":
      case "number":
        ke = !0;
        break;
      case "object":
        switch (S.$$typeof) {
          case a:
          case o:
            ke = !0;
            break;
          case U:
            return ke = S._init, M(ke(S._payload), R, H, Y, ue);
        }
    }
    if (ke) return ue = ue(S), ke = Y === "" ? "." + dn(S, 0) : Y, ht(ue) ? (H = "", ke != null && (H = ke.replace(ea, "$&/") + "/"), M(ue, R, H, "", function(fr) {
      return fr;
    })) : ue != null && (Nt(ue) && (ue = bi(ue, H + (ue.key == null || S && S.key === ue.key ? "" : ("" + ue.key).replace(ea, "$&/") + "/") + ke)), R.push(ue)), 1;
    ke = 0;
    var bt = Y === "" ? "." : Y + ":";
    if (ht(S)) for (var Xe = 0; Xe < S.length; Xe++) Y = S[Xe], ce = bt + dn(Y, Xe), ke += M(Y, R, H, ce, ue);
    else if (Xe = W(S), typeof Xe == "function") for (S = Xe.call(S), Xe = 0; !(Y = S.next()).done; ) Y = Y.value, ce = bt + dn(Y, Xe++), ke += M(Y, R, H, ce, ue);
    else if (ce === "object") {
      if (typeof S.then == "function") return M(J(S), R, H, Y, ue);
      throw R = String(S), Error("Objects are not valid as a React child (found: " + (R === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : R) + "). If you meant to render a collection of children, use an array instead.");
    }
    return ke;
  }
  function L(S, R, H) {
    if (S == null) return S;
    var Y = [], ue = 0;
    return M(S, Y, "", "", function(ce) {
      return R.call(H, ce, ue++);
    }), Y;
  }
  function Se(S) {
    if (S._status === -1) {
      var R = S._result;
      R = R(), R.then(function(H) {
        (S._status === 0 || S._status === -1) && (S._status = 1, S._result = H);
      }, function(H) {
        (S._status === 0 || S._status === -1) && (S._status = 2, S._result = H);
      }), S._status === -1 && (S._status = 0, S._result = R);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var He = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var R = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(R)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, jt = {
    map: L,
    forEach: function(S, R, H) {
      L(S, function() {
        R.apply(this, arguments);
      }, H);
    },
    count: function(S) {
      var R = 0;
      return L(S, function() {
        R++;
      }), R;
    },
    toArray: function(S) {
      return L(S, function(R) {
        return R;
      }) || [];
    },
    only: function(S) {
      if (!Nt(S)) throw Error("React.Children.only expected to receive a single React element child.");
      return S;
    }
  };
  n.Activity = w, n.Children = jt, n.Component = Ie, n.Fragment = c, n.Profiler = u, n.PureComponent = ae, n.StrictMode = i, n.Suspense = g, n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ge, n.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return ge.H.useMemoCache(S);
    }
  }, n.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, n.cacheSignal = function() {
    return null;
  }, n.cloneElement = function(S, R, H) {
    if (S == null) throw Error("The argument must be a React element, but you passed " + S + ".");
    var Y = Qe({}, S.props), ue = S.key;
    if (R != null) for (ce in R.key !== void 0 && (ue = "" + R.key), R) !kt.call(R, ce) || ce === "key" || ce === "__self" || ce === "__source" || ce === "ref" && R.ref === void 0 || (Y[ce] = R[ce]);
    var ce = arguments.length - 2;
    if (ce === 1) Y.children = H;
    else if (1 < ce) {
      for (var ke = Array(ce), bt = 0; bt < ce; bt++) ke[bt] = arguments[bt + 2];
      Y.children = ke;
    }
    return hn(S.type, ue, Y);
  }, n.createContext = function(S) {
    return S = {
      $$typeof: m,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: d,
      _context: S
    }, S;
  }, n.createElement = function(S, R, H) {
    var Y, ue = {}, ce = null;
    if (R != null) for (Y in R.key !== void 0 && (ce = "" + R.key), R) kt.call(R, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (ue[Y] = R[Y]);
    var ke = arguments.length - 2;
    if (ke === 1) ue.children = H;
    else if (1 < ke) {
      for (var bt = Array(ke), Xe = 0; Xe < ke; Xe++) bt[Xe] = arguments[Xe + 2];
      ue.children = bt;
    }
    if (S && S.defaultProps) for (Y in ke = S.defaultProps, ke) ue[Y] === void 0 && (ue[Y] = ke[Y]);
    return hn(S, ce, ue);
  }, n.createRef = function() {
    return { current: null };
  }, n.forwardRef = function(S) {
    return {
      $$typeof: y,
      render: S
    };
  }, n.isValidElement = Nt, n.lazy = function(S) {
    return {
      $$typeof: U,
      _payload: {
        _status: -1,
        _result: S
      },
      _init: Se
    };
  }, n.memo = function(S, R) {
    return {
      $$typeof: h,
      type: S,
      compare: R === void 0 ? null : R
    };
  }, n.startTransition = function(S) {
    var R = ge.T, H = {};
    ge.T = H;
    try {
      var Y = S(), ue = ge.S;
      ue !== null && ue(H, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(yt, He);
    } catch (ce) {
      He(ce);
    } finally {
      R !== null && H.types !== null && (R.types = H.types), ge.T = R;
    }
  }, n.unstable_useCacheRefresh = function() {
    return ge.H.useCacheRefresh();
  }, n.use = function(S) {
    return ge.H.use(S);
  }, n.useActionState = function(S, R, H) {
    return ge.H.useActionState(S, R, H);
  }, n.useCallback = function(S, R) {
    return ge.H.useCallback(S, R);
  }, n.useContext = function(S) {
    return ge.H.useContext(S);
  }, n.useDebugValue = function() {
  }, n.useDeferredValue = function(S, R) {
    return ge.H.useDeferredValue(S, R);
  }, n.useEffect = function(S, R) {
    return ge.H.useEffect(S, R);
  }, n.useEffectEvent = function(S) {
    return ge.H.useEffectEvent(S);
  }, n.useId = function() {
    return ge.H.useId();
  }, n.useImperativeHandle = function(S, R, H) {
    return ge.H.useImperativeHandle(S, R, H);
  }, n.useInsertionEffect = function(S, R) {
    return ge.H.useInsertionEffect(S, R);
  }, n.useLayoutEffect = function(S, R) {
    return ge.H.useLayoutEffect(S, R);
  }, n.useMemo = function(S, R) {
    return ge.H.useMemo(S, R);
  }, n.useOptimistic = function(S, R) {
    return ge.H.useOptimistic(S, R);
  }, n.useReducer = function(S, R, H) {
    return ge.H.useReducer(S, R, H);
  }, n.useRef = function(S) {
    return ge.H.useRef(S);
  }, n.useState = function(S) {
    return ge.H.useState(S);
  }, n.useSyncExternalStore = function(S, R, H) {
    return ge.H.useSyncExternalStore(S, R, H);
  }, n.useTransition = function() {
    return ge.H.useTransition();
  }, n.version = "19.2.7";
})), Ef = /* @__PURE__ */ $n(((n, a) => {
  a.exports = uk();
})), ck = /* @__PURE__ */ $n(((n) => {
  function a(J, M) {
    var L = J.length;
    J.push(M);
    e: for (; 0 < L; ) {
      var Se = L - 1 >>> 1, He = J[Se];
      if (0 < i(He, M)) J[Se] = M, J[L] = He, L = Se;
      else break e;
    }
  }
  function o(J) {
    return J.length === 0 ? null : J[0];
  }
  function c(J) {
    if (J.length === 0) return null;
    var M = J[0], L = J.pop();
    if (L !== M) {
      J[0] = L;
      e: for (var Se = 0, He = J.length, jt = He >>> 1; Se < jt; ) {
        var S = 2 * (Se + 1) - 1, R = J[S], H = S + 1, Y = J[H];
        if (0 > i(R, L)) H < He && 0 > i(Y, R) ? (J[Se] = Y, J[H] = L, Se = H) : (J[Se] = R, J[S] = L, Se = S);
        else if (H < He && 0 > i(Y, L)) J[Se] = Y, J[H] = L, Se = H;
        else break e;
      }
    }
    return M;
  }
  function i(J, M) {
    var L = J.sortIndex - M.sortIndex;
    return L !== 0 ? L : J.id - M.id;
  }
  if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
    var u = performance;
    n.unstable_now = function() {
      return u.now();
    };
  } else {
    var d = Date, m = d.now();
    n.unstable_now = function() {
      return d.now() - m;
    };
  }
  var y = [], g = [], h = 1, U = null, w = 3, q = !1, W = !1, pe = !1, Qe = !1, Ae = typeof setTimeout == "function" ? setTimeout : null, Ie = typeof clearTimeout == "function" ? clearTimeout : null, Pe = typeof setImmediate < "u" ? setImmediate : null;
  function ae(J) {
    for (var M = o(g); M !== null; ) {
      if (M.callback === null) c(g);
      else if (M.startTime <= J) c(g), M.sortIndex = M.expirationTime, a(y, M);
      else break;
      M = o(g);
    }
  }
  function we(J) {
    if (pe = !1, ae(J), !W) if (o(y) !== null) W = !0, ht || (ht = !0, Nt());
    else {
      var M = o(g);
      M !== null && dn(we, M.startTime - J);
    }
  }
  var ht = !1, yt = -1, ge = 5, kt = -1;
  function hn() {
    return Qe ? !0 : !(n.unstable_now() - kt < ge);
  }
  function bi() {
    if (Qe = !1, ht) {
      var J = n.unstable_now();
      kt = J;
      var M = !0;
      try {
        e: {
          W = !1, pe && (pe = !1, Ie(yt), yt = -1), q = !0;
          var L = w;
          try {
            t: {
              for (ae(J), U = o(y); U !== null && !(U.expirationTime > J && hn()); ) {
                var Se = U.callback;
                if (typeof Se == "function") {
                  U.callback = null, w = U.priorityLevel;
                  var He = Se(U.expirationTime <= J);
                  if (J = n.unstable_now(), typeof He == "function") {
                    U.callback = He, ae(J), M = !0;
                    break t;
                  }
                  U === o(y) && c(y), ae(J);
                } else c(y);
                U = o(y);
              }
              if (U !== null) M = !0;
              else {
                var jt = o(g);
                jt !== null && dn(we, jt.startTime - J), M = !1;
              }
            }
            break e;
          } finally {
            U = null, w = L, q = !1;
          }
          M = void 0;
        }
      } finally {
        M ? Nt() : ht = !1;
      }
    }
  }
  var Nt;
  if (typeof Pe == "function") Nt = function() {
    Pe(bi);
  };
  else if (typeof MessageChannel < "u") {
    var yn = new MessageChannel(), ea = yn.port2;
    yn.port1.onmessage = bi, Nt = function() {
      ea.postMessage(null);
    };
  } else Nt = function() {
    Ae(bi, 0);
  };
  function dn(J, M) {
    yt = Ae(function() {
      J(n.unstable_now());
    }, M);
  }
  n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(J) {
    J.callback = null;
  }, n.unstable_forceFrameRate = function(J) {
    0 > J || 125 < J ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ge = 0 < J ? Math.floor(1e3 / J) : 5;
  }, n.unstable_getCurrentPriorityLevel = function() {
    return w;
  }, n.unstable_next = function(J) {
    switch (w) {
      case 1:
      case 2:
      case 3:
        var M = 3;
        break;
      default:
        M = w;
    }
    var L = w;
    w = M;
    try {
      return J();
    } finally {
      w = L;
    }
  }, n.unstable_requestPaint = function() {
    Qe = !0;
  }, n.unstable_runWithPriority = function(J, M) {
    switch (J) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        J = 3;
    }
    var L = w;
    w = J;
    try {
      return M();
    } finally {
      w = L;
    }
  }, n.unstable_scheduleCallback = function(J, M, L) {
    var Se = n.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? Se + L : Se) : L = Se, J) {
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
    return He = L + He, J = {
      id: h++,
      callback: M,
      priorityLevel: J,
      startTime: L,
      expirationTime: He,
      sortIndex: -1
    }, L > Se ? (J.sortIndex = L, a(g, J), o(y) === null && J === o(g) && (pe ? (Ie(yt), yt = -1) : pe = !0, dn(we, L - Se))) : (J.sortIndex = He, a(y, J), W || q || (W = !0, ht || (ht = !0, Nt()))), J;
  }, n.unstable_shouldYield = hn, n.unstable_wrapCallback = function(J) {
    var M = w;
    return function() {
      var L = w;
      w = M;
      try {
        return J.apply(this, arguments);
      } finally {
        w = L;
      }
    };
  };
})), sk = /* @__PURE__ */ $n(((n, a) => {
  a.exports = ck();
})), dk = /* @__PURE__ */ $n(((n) => {
  var a = Ef();
  function o(g) {
    var h = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var U = 2; U < arguments.length; U++) h += "&args[]=" + encodeURIComponent(arguments[U]);
    }
    return "Minified React error #" + g + "; visit " + h + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c() {
  }
  var i = {
    d: {
      f: c,
      r: function() {
        throw Error(o(522));
      },
      D: c,
      C: c,
      L: c,
      m: c,
      X: c,
      S: c,
      M: c
    },
    p: 0,
    findDOMNode: null
  }, u = /* @__PURE__ */ Symbol.for("react.portal");
  function d(g, h, U) {
    var w = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: w == null ? null : "" + w,
      children: g,
      containerInfo: h,
      implementation: U
    };
  }
  var m = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(g, h) {
    if (g === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, n.createPortal = function(g, h) {
    var U = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!h || h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11) throw Error(o(299));
    return d(g, h, null, U);
  }, n.flushSync = function(g) {
    var h = m.T, U = i.p;
    try {
      if (m.T = null, i.p = 2, g) return g();
    } finally {
      m.T = h, i.p = U, i.d.f();
    }
  }, n.preconnect = function(g, h) {
    typeof g == "string" && (h ? (h = h.crossOrigin, h = typeof h == "string" ? h === "use-credentials" ? h : "" : void 0) : h = null, i.d.C(g, h));
  }, n.prefetchDNS = function(g) {
    typeof g == "string" && i.d.D(g);
  }, n.preinit = function(g, h) {
    if (typeof g == "string" && h && typeof h.as == "string") {
      var U = h.as, w = y(U, h.crossOrigin), q = typeof h.integrity == "string" ? h.integrity : void 0, W = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
      U === "style" ? i.d.S(g, typeof h.precedence == "string" ? h.precedence : void 0, {
        crossOrigin: w,
        integrity: q,
        fetchPriority: W
      }) : U === "script" && i.d.X(g, {
        crossOrigin: w,
        integrity: q,
        fetchPriority: W,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0
      });
    }
  }, n.preinitModule = function(g, h) {
    if (typeof g == "string") if (typeof h == "object" && h !== null) {
      if (h.as == null || h.as === "script") {
        var U = y(h.as, h.crossOrigin);
        i.d.M(g, {
          crossOrigin: U,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0
        });
      }
    } else h ?? i.d.M(g);
  }, n.preload = function(g, h) {
    if (typeof g == "string" && typeof h == "object" && h !== null && typeof h.as == "string") {
      var U = h.as, w = y(U, h.crossOrigin);
      i.d.L(g, U, {
        crossOrigin: w,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0,
        nonce: typeof h.nonce == "string" ? h.nonce : void 0,
        type: typeof h.type == "string" ? h.type : void 0,
        fetchPriority: typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
        referrerPolicy: typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
        imageSrcSet: typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
        imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
        media: typeof h.media == "string" ? h.media : void 0
      });
    }
  }, n.preloadModule = function(g, h) {
    if (typeof g == "string") if (h) {
      var U = y(h.as, h.crossOrigin);
      i.d.m(g, {
        as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
        crossOrigin: U,
        integrity: typeof h.integrity == "string" ? h.integrity : void 0
      });
    } else i.d.m(g);
  }, n.requestFormReset = function(g) {
    i.d.r(g);
  }, n.unstable_batchedUpdates = function(g, h) {
    return g(h);
  }, n.useFormState = function(g, h, U) {
    return m.H.useFormState(g, h, U);
  }, n.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, n.version = "19.2.7";
})), fk = /* @__PURE__ */ $n(((n, a) => {
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (c) {
        console.error(c);
      }
  }
  o(), a.exports = dk();
})), mk = /* @__PURE__ */ $n(((n) => {
  var a = sk(), o = Ef(), c = fk();
  function i(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function d(e) {
    var t = e, r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (r = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function m(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function g(e) {
    if (d(e) !== e) throw Error(i(188));
  }
  function h(e) {
    var t = e.alternate;
    if (!t) {
      if (t = d(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var r = e, l = t; ; ) {
      var s = r.return;
      if (s === null) break;
      var f = s.alternate;
      if (f === null) {
        if (l = s.return, l !== null) {
          r = l;
          continue;
        }
        break;
      }
      if (s.child === f.child) {
        for (f = s.child; f; ) {
          if (f === r) return g(s), e;
          if (f === l) return g(s), t;
          f = f.sibling;
        }
        throw Error(i(188));
      }
      if (r.return !== l.return) r = s, l = f;
      else {
        for (var v = !1, p = s.child; p; ) {
          if (p === r) {
            v = !0, r = s, l = f;
            break;
          }
          if (p === l) {
            v = !0, l = s, r = f;
            break;
          }
          p = p.sibling;
        }
        if (!v) {
          for (p = f.child; p; ) {
            if (p === r) {
              v = !0, r = f, l = s;
              break;
            }
            if (p === l) {
              v = !0, l = f, r = s;
              break;
            }
            p = p.sibling;
          }
          if (!v) throw Error(i(189));
        }
      }
      if (r.alternate !== l) throw Error(i(190));
    }
    if (r.tag !== 3) throw Error(i(188));
    return r.stateNode.current === r ? e : t;
  }
  function U(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = U(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var w = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), W = /* @__PURE__ */ Symbol.for("react.transitional.element"), pe = /* @__PURE__ */ Symbol.for("react.portal"), Qe = /* @__PURE__ */ Symbol.for("react.fragment"), Ae = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ie = /* @__PURE__ */ Symbol.for("react.profiler"), Pe = /* @__PURE__ */ Symbol.for("react.consumer"), ae = /* @__PURE__ */ Symbol.for("react.context"), we = /* @__PURE__ */ Symbol.for("react.forward_ref"), ht = /* @__PURE__ */ Symbol.for("react.suspense"), yt = /* @__PURE__ */ Symbol.for("react.suspense_list"), ge = /* @__PURE__ */ Symbol.for("react.memo"), kt = /* @__PURE__ */ Symbol.for("react.lazy"), hn = /* @__PURE__ */ Symbol.for("react.activity"), bi = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Nt = Symbol.iterator;
  function yn(e) {
    return e === null || typeof e != "object" ? null : (e = Nt && e[Nt] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ea = /* @__PURE__ */ Symbol.for("react.client.reference");
  function dn(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === ea ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Qe:
        return "Fragment";
      case Ie:
        return "Profiler";
      case Ae:
        return "StrictMode";
      case ht:
        return "Suspense";
      case yt:
        return "SuspenseList";
      case hn:
        return "Activity";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case pe:
        return "Portal";
      case ae:
        return e.displayName || "Context";
      case Pe:
        return (e._context.displayName || "Context") + ".Consumer";
      case we:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ge:
        return t = e.displayName || null, t !== null ? t : dn(e.type) || "Memo";
      case kt:
        t = e._payload, e = e._init;
        try {
          return dn(e(t));
        } catch {
        }
    }
    return null;
  }
  var J = Array.isArray, M = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Se = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, He = [], jt = -1;
  function S(e) {
    return { current: e };
  }
  function R(e) {
    0 > jt || (e.current = He[jt], He[jt] = null, jt--);
  }
  function H(e, t) {
    jt++, He[jt] = e.current, e.current = t;
  }
  var Y = S(null), ue = S(null), ce = S(null), ke = S(null);
  function bt(e, t) {
    switch (H(ce, t), H(ue, e), H(Y, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Jy(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI) t = Jy(t), e = Gy(t, e);
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
    R(Y), H(Y, e);
  }
  function Xe() {
    R(Y), R(ue), R(ce);
  }
  function fr(e) {
    e.memoizedState !== null && H(ke, e);
    var t = Y.current, r = Gy(t, e.type);
    t !== r && (H(ue, e), H(Y, r));
  }
  function pl(e) {
    ue.current === e && (R(Y), R(ue)), ke.current === e && (R(ke), to._currentValue = Se);
  }
  var ns, Sp;
  function Si(e) {
    if (ns === void 0) try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      ns = t && t[1] || "", Sp = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + ns + e + Sp;
  }
  var is = !1;
  function as(e, t) {
    if (!e || is) return "";
    is = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = { DetermineComponentFrameRoot: function() {
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
              } catch (Z) {
                var O = Z;
              }
              Reflect.construct(e, [], A);
            } else {
              try {
                A.call();
              } catch (Z) {
                O = Z;
              }
              e.call(A.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Z) {
              O = Z;
            }
            (A = e()) && typeof A.catch == "function" && A.catch(function() {
            });
          }
        } catch (Z) {
          if (Z && O && typeof Z.stack == "string") return [Z.stack, O.stack];
        }
        return [null, null];
      } };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
      s && s.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var f = l.DetermineComponentFrameRoot(), v = f[0], p = f[1];
      if (v && p) {
        var _ = v.split(`
`), E = p.split(`
`);
        for (s = l = 0; l < _.length && !_[l].includes("DetermineComponentFrameRoot"); ) l++;
        for (; s < E.length && !E[s].includes("DetermineComponentFrameRoot"); ) s++;
        if (l === _.length || s === E.length) for (l = _.length - 1, s = E.length - 1; 1 <= l && 0 <= s && _[l] !== E[s]; ) s--;
        for (; 1 <= l && 0 <= s; l--, s--) if (_[l] !== E[s]) {
          if (l !== 1 || s !== 1) do
            if (l--, s--, 0 > s || _[l] !== E[s]) {
              var N = `
` + _[l].replace(" at new ", " at ");
              return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), N;
            }
          while (1 <= l && 0 <= s);
          break;
        }
      }
    } finally {
      is = !1, Error.prepareStackTrace = r;
    }
    return (r = e ? e.displayName || e.name : "") ? Si(r) : "";
  }
  function qz(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Si(e.type);
      case 16:
        return Si("Lazy");
      case 13:
        return e.child !== t && t !== null ? Si("Suspense Fallback") : Si("Suspense");
      case 19:
        return Si("SuspenseList");
      case 0:
      case 15:
        return as(e.type, !1);
      case 11:
        return as(e.type.render, !1);
      case 1:
        return as(e.type, !0);
      case 31:
        return Si("Activity");
      default:
        return "";
    }
  }
  function $p(e) {
    try {
      var t = "", r = null;
      do
        t += qz(e, r), r = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var rs = Object.prototype.hasOwnProperty, os = a.unstable_scheduleCallback, ls = a.unstable_cancelCallback, Hz = a.unstable_shouldYield, Lz = a.unstable_requestPaint, At = a.unstable_now, Bz = a.unstable_getCurrentPriorityLevel, zp = a.unstable_ImmediatePriority, kp = a.unstable_UserBlockingPriority, gl = a.unstable_NormalPriority, Jz = a.unstable_LowPriority, Tp = a.unstable_IdlePriority, Gz = a.log, Pz = a.unstable_setDisableYieldValue, mr = null, It = null;
  function Vn(e) {
    if (typeof Gz == "function" && Pz(e), It && typeof It.setStrictMode == "function") try {
      It.setStrictMode(mr, e);
    } catch {
    }
  }
  var Rt = Math.clz32 ? Math.clz32 : Qz, Yz = Math.log, Vz = Math.LN2;
  function Qz(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Yz(e) / Vz | 0) | 0;
  }
  var hl = 256, yl = 262144, _l = 4194304;
  function $i(e) {
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
  function bl(e, t, r) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var s = 0, f = e.suspendedLanes, v = e.pingedLanes;
    e = e.warmLanes;
    var p = l & 134217727;
    return p !== 0 ? (l = p & ~f, l !== 0 ? s = $i(l) : (v &= p, v !== 0 ? s = $i(v) : r || (r = p & ~e, r !== 0 && (s = $i(r))))) : (p = l & ~f, p !== 0 ? s = $i(p) : v !== 0 ? s = $i(v) : r || (r = l & ~e, r !== 0 && (s = $i(r)))), s === 0 ? 0 : t !== 0 && t !== s && (t & f) === 0 && (f = s & -s, r = t & -t, f >= r || f === 32 && (r & 4194048) !== 0) ? t : s;
  }
  function vr(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Xz(e, t) {
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
  function wp() {
    var e = _l;
    return _l <<= 1, (_l & 62914560) === 0 && (_l = 4194304), e;
  }
  function us(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Sl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Kz(e, t, r, l, s, f) {
    var v = e.pendingLanes;
    e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= r, e.entangledLanes &= r, e.errorRecoveryDisabledLanes &= r, e.shellSuspendCounter = 0;
    var p = e.entanglements, _ = e.expirationTimes, E = e.hiddenUpdates;
    for (r = v & ~r; 0 < r; ) {
      var N = 31 - Rt(r), A = 1 << N;
      p[N] = 0, _[N] = -1;
      var O = E[N];
      if (O !== null) for (E[N] = null, N = 0; N < O.length; N++) {
        var Z = O[N];
        Z !== null && (Z.lane &= -536870913);
      }
      r &= ~A;
    }
    l !== 0 && xp(e, l, 0), f !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(v & ~t));
  }
  function xp(e, t, r) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - Rt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | r & 261930;
  }
  function Ep(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
      var l = 31 - Rt(r), s = 1 << l;
      s & t | e[l] & t && (e[l] |= t), r &= ~s;
    }
  }
  function Up(e, t) {
    var r = t & -t;
    return r = (r & 42) !== 0 ? 1 : Op(r), (r & (e.suspendedLanes | t)) !== 0 ? 0 : r;
  }
  function Op(e) {
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
  function cs(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Dp() {
    var e = L.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : f_(e.type));
  }
  function Zp(e, t) {
    var r = L.p;
    try {
      return L.p = e, t();
    } finally {
      L.p = r;
    }
  }
  var Qn = Math.random().toString(36).slice(2), ut = "__reactFiber$" + Qn, Tt = "__reactProps$" + Qn, pr = "__reactContainer$" + Qn, ss = "__reactEvents$" + Qn, Fz = "__reactListeners$" + Qn, Wz = "__reactHandles$" + Qn, Np = "__reactResources$" + Qn, gr = "__reactMarker$" + Qn;
  function ds(e) {
    delete e[ut], delete e[Tt], delete e[ss], delete e[Fz], delete e[Wz];
  }
  function ta(e) {
    var t = e[ut];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if (t = r[pr] || r[ut]) {
        if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = Fy(e); e !== null; ) {
          if (r = e[ut]) return r;
          e = Fy(e);
        }
        return t;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function na(e) {
    if (e = e[ut] || e[pr]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function hr(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function ia(e) {
    var t = e[Np];
    return t || (t = e[Np] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), t;
  }
  function ot(e) {
    e[gr] = !0;
  }
  var jp = /* @__PURE__ */ new Set(), Ap = {};
  function zi(e, t) {
    aa(e, t), aa(e + "Capture", t);
  }
  function aa(e, t) {
    for (Ap[e] = t, e = 0; e < t.length; e++) jp.add(t[e]);
  }
  var e1 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Ip = {}, Rp = {};
  function t1(e) {
    return rs.call(Rp, e) ? !0 : rs.call(Ip, e) ? !1 : e1.test(e) ? Rp[e] = !0 : (Ip[e] = !0, !1);
  }
  function $l(e, t, r) {
    if (t1(t)) if (r === null) e.removeAttribute(t);
    else {
      switch (typeof r) {
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
      e.setAttribute(t, "" + r);
    }
  }
  function zl(e, t, r) {
    if (r === null) e.removeAttribute(t);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + r);
    }
  }
  function Tn(e, t, r, l) {
    if (l === null) e.removeAttribute(r);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(r);
          return;
      }
      e.setAttributeNS(t, r, "" + l);
    }
  }
  function Xt(e) {
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
  function Cp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function n1(e, t, r) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var s = l.get, f = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(v) {
          r = "" + v, f.call(this, v);
        }
      }), Object.defineProperty(e, t, { enumerable: l.enumerable }), {
        getValue: function() {
          return r;
        },
        setValue: function(v) {
          r = "" + v;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function fs(e) {
    if (!e._valueTracker) {
      var t = Cp(e) ? "checked" : "value";
      e._valueTracker = n1(e, t, "" + e[t]);
    }
  }
  function Mp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(), l = "";
    return e && (l = Cp(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== r ? (t.setValue(e), !0) : !1;
  }
  function kl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var i1 = /[\n"\\]/g;
  function Kt(e) {
    return e.replace(i1, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function ms(e, t, r, l, s, f, v, p) {
    e.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.type = v : e.removeAttribute("type"), t != null ? v === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Xt(t)) : e.value !== "" + Xt(t) && (e.value = "" + Xt(t)) : v !== "submit" && v !== "reset" || e.removeAttribute("value"), t != null ? vs(e, v, Xt(t)) : r != null ? vs(e, v, Xt(r)) : l != null && e.removeAttribute("value"), s == null && f != null && (e.defaultChecked = !!f), s != null && (e.checked = s && typeof s != "function" && typeof s != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.name = "" + Xt(p) : e.removeAttribute("name");
  }
  function qp(e, t, r, l, s, f, v, p) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || r != null) {
      if (!(f !== "submit" && f !== "reset" || t != null)) {
        fs(e);
        return;
      }
      r = r != null ? "" + Xt(r) : "", t = t != null ? "" + Xt(t) : r, p || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? s, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = p ? e.checked : !!l, e.defaultChecked = !!l, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (e.name = v), fs(e);
  }
  function vs(e, t, r) {
    t === "number" && kl(e.ownerDocument) === e || e.defaultValue === "" + r || (e.defaultValue = "" + r);
  }
  function ra(e, t, r, l) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < r.length; s++) t["$" + r[s]] = !0;
      for (r = 0; r < e.length; r++) s = t.hasOwnProperty("$" + e[r].value), e[r].selected !== s && (e[r].selected = s), s && l && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + Xt(r), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === r) {
          e[s].selected = !0, l && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Hp(e, t, r) {
    if (t != null && (t = "" + Xt(t), t !== e.value && (e.value = t), r == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = r != null ? "" + Xt(r) : "";
  }
  function Lp(e, t, r, l) {
    if (t == null) {
      if (l != null) {
        if (r != null) throw Error(i(92));
        if (J(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        r = l;
      }
      r ??= "", t = r;
    }
    r = Xt(t), e.defaultValue = r, l = e.textContent, l === r && l !== "" && l !== null && (e.value = l), fs(e);
  }
  function oa(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var a1 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Bp(e, t, r) {
    var l = t.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, r) : typeof r != "number" || r === 0 || a1.has(t) ? t === "float" ? e.cssFloat = r : e[t] = ("" + r).trim() : e[t] = r + "px";
  }
  function Jp(e, t, r) {
    if (t != null && typeof t != "object") throw Error(i(62));
    if (e = e.style, r != null) {
      for (var l in r) !r.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var s in t) l = t[s], t.hasOwnProperty(s) && r[s] !== l && Bp(e, s, l);
    } else for (var f in t) t.hasOwnProperty(f) && Bp(e, f, t[f]);
  }
  function ps(e) {
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
  var r1 = /* @__PURE__ */ new Map([
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
  ]), o1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Tl(e) {
    return o1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function wn() {
  }
  var gs = null;
  function hs(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var la = null, ua = null;
  function Gp(e) {
    var t = na(e);
    if (t && (e = t.stateNode)) {
      var r = e[Tt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (ms(e, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name), t = r.name, r.type === "radio" && t != null) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (r = r.querySelectorAll('input[name="' + Kt("" + t) + '"][type="radio"]'), t = 0; t < r.length; t++) {
              var l = r[t];
              if (l !== e && l.form === e.form) {
                var s = l[Tt] || null;
                if (!s) throw Error(i(90));
                ms(l, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name);
              }
            }
            for (t = 0; t < r.length; t++) l = r[t], l.form === e.form && Mp(l);
          }
          break e;
        case "textarea":
          Hp(e, r.value, r.defaultValue);
          break e;
        case "select":
          t = r.value, t != null && ra(e, !!r.multiple, t, !1);
      }
    }
  }
  var ys = !1;
  function Pp(e, t, r) {
    if (ys) return e(t, r);
    ys = !0;
    try {
      return e(t);
    } finally {
      if (ys = !1, (la !== null || ua !== null) && (fu(), la && (t = la, e = ua, ua = la = null, Gp(t), e)))
        for (t = 0; t < e.length; t++) Gp(e[t]);
    }
  }
  function yr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var l = r[Tt] || null;
    if (l === null) return null;
    r = l[t];
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
    if (r && typeof r != "function") throw Error(i(231, t, typeof r));
    return r;
  }
  var xn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _s = !1;
  if (xn) try {
    var _r = {};
    Object.defineProperty(_r, "passive", { get: function() {
      _s = !0;
    } }), window.addEventListener("test", _r, _r), window.removeEventListener("test", _r, _r);
  } catch {
    _s = !1;
  }
  var Xn = null, bs = null, wl = null;
  function Yp() {
    if (wl) return wl;
    var e, t = bs, r = t.length, l, s = "value" in Xn ? Xn.value : Xn.textContent, f = s.length;
    for (e = 0; e < r && t[e] === s[e]; e++) ;
    var v = r - e;
    for (l = 1; l <= v && t[r - l] === s[f - l]; l++) ;
    return wl = s.slice(e, 1 < l ? 1 - l : void 0);
  }
  function xl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function El() {
    return !0;
  }
  function Vp() {
    return !1;
  }
  function wt(e) {
    function t(r, l, s, f, v) {
      this._reactName = r, this._targetInst = s, this.type = l, this.nativeEvent = f, this.target = v, this.currentTarget = null;
      for (var p in e) e.hasOwnProperty(p) && (r = e[p], this[p] = r ? r(f) : f[p]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? El : Vp, this.isPropagationStopped = Vp, this;
    }
    return w(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = El);
      },
      stopPropagation: function() {
        var r = this.nativeEvent;
        r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = El);
      },
      persist: function() {
      },
      isPersistent: El
    }), t;
  }
  var ki = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ul = wt(ki), br = w({}, ki, {
    view: 0,
    detail: 0
  }), l1 = wt(br), Ss, $s, Sr, Ol = w({}, br, {
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
    getModifierState: ks,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Sr && (Sr && e.type === "mousemove" ? (Ss = e.screenX - Sr.screenX, $s = e.screenY - Sr.screenY) : $s = Ss = 0, Sr = e), Ss);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : $s;
    }
  }), Qp = wt(Ol), u1 = wt(w({}, Ol, { dataTransfer: 0 })), zs = wt(w({}, br, { relatedTarget: 0 })), c1 = wt(w({}, ki, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), s1 = wt(w({}, ki, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } })), Xp = wt(w({}, ki, { data: 0 })), d1 = {
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
  }, f1 = {
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
  }, m1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function v1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = m1[e]) ? !!t[e] : !1;
  }
  function ks() {
    return v1;
  }
  var p1 = wt(w({}, br, {
    key: function(e) {
      if (e.key) {
        var t = d1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = xl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? f1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ks,
    charCode: function(e) {
      return e.type === "keypress" ? xl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? xl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  })), Kp = wt(w({}, Ol, {
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
  })), g1 = wt(w({}, br, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ks
  })), h1 = wt(w({}, ki, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), y1 = wt(w({}, Ol, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  })), _1 = wt(w({}, ki, {
    newState: 0,
    oldState: 0
  })), b1 = [
    9,
    13,
    27,
    32
  ], Ts = xn && "CompositionEvent" in window, $r = null;
  xn && "documentMode" in document && ($r = document.documentMode);
  var S1 = xn && "TextEvent" in window && !$r, Fp = xn && (!Ts || $r && 8 < $r && 11 >= $r), Wp = " ", eg = !1;
  function tg(e, t) {
    switch (e) {
      case "keyup":
        return b1.indexOf(t.keyCode) !== -1;
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
  function ng(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ca = !1;
  function $1(e, t) {
    switch (e) {
      case "compositionend":
        return ng(t);
      case "keypress":
        return t.which !== 32 ? null : (eg = !0, Wp);
      case "textInput":
        return e = t.data, e === Wp && eg ? null : e;
      default:
        return null;
    }
  }
  function z1(e, t) {
    if (ca) return e === "compositionend" || !Ts && tg(e, t) ? (e = Yp(), wl = bs = Xn = null, ca = !1, e) : null;
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
        return Fp && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var k1 = {
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
  function ig(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!k1[e.type] : t === "textarea";
  }
  function ag(e, t, r, l) {
    la ? ua ? ua.push(l) : ua = [l] : la = l, t = _u(t, "onChange"), 0 < t.length && (r = new Ul("onChange", "change", null, r, l), e.push({
      event: r,
      listeners: t
    }));
  }
  var zr = null, kr = null;
  function T1(e) {
    Ry(e, 0);
  }
  function Dl(e) {
    if (Mp(hr(e))) return e;
  }
  function rg(e, t) {
    if (e === "change") return t;
  }
  var og = !1;
  if (xn) {
    var ws;
    if (xn) {
      var xs = "oninput" in document;
      if (!xs) {
        var lg = document.createElement("div");
        lg.setAttribute("oninput", "return;"), xs = typeof lg.oninput == "function";
      }
      ws = xs;
    } else ws = !1;
    og = ws && (!document.documentMode || 9 < document.documentMode);
  }
  function ug() {
    zr && (zr.detachEvent("onpropertychange", cg), kr = zr = null);
  }
  function cg(e) {
    if (e.propertyName === "value" && Dl(kr)) {
      var t = [];
      ag(t, kr, e, hs(e)), Pp(T1, t);
    }
  }
  function w1(e, t, r) {
    e === "focusin" ? (ug(), zr = t, kr = r, zr.attachEvent("onpropertychange", cg)) : e === "focusout" && ug();
  }
  function x1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Dl(kr);
  }
  function E1(e, t) {
    if (e === "click") return Dl(t);
  }
  function U1(e, t) {
    if (e === "input" || e === "change") return Dl(t);
  }
  function O1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ct = typeof Object.is == "function" ? Object.is : O1;
  function Tr(e, t) {
    if (Ct(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e), l = Object.keys(t);
    if (r.length !== l.length) return !1;
    for (l = 0; l < r.length; l++) {
      var s = r[l];
      if (!rs.call(t, s) || !Ct(e[s], t[s])) return !1;
    }
    return !0;
  }
  function sg(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function dg(e, t) {
    var r = sg(e);
    e = 0;
    for (var l; r; ) {
      if (r.nodeType === 3) {
        if (l = e + r.textContent.length, e <= t && l >= t) return {
          node: r,
          offset: t - e
        };
        e = l;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = sg(r);
    }
  }
  function fg(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? fg(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function mg(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = kl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = kl(e.document);
    }
    return t;
  }
  function Es(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var D1 = xn && "documentMode" in document && 11 >= document.documentMode, sa = null, Us = null, wr = null, Os = !1;
  function vg(e, t, r) {
    var l = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Os || sa == null || sa !== kl(l) || (l = sa, "selectionStart" in l && Es(l) ? l = {
      start: l.selectionStart,
      end: l.selectionEnd
    } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), wr && Tr(wr, l) || (wr = l, l = _u(Us, "onSelect"), 0 < l.length && (t = new Ul("onSelect", "select", null, t, r), e.push({
      event: t,
      listeners: l
    }), t.target = sa)));
  }
  function Ti(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
  }
  var da = {
    animationend: Ti("Animation", "AnimationEnd"),
    animationiteration: Ti("Animation", "AnimationIteration"),
    animationstart: Ti("Animation", "AnimationStart"),
    transitionrun: Ti("Transition", "TransitionRun"),
    transitionstart: Ti("Transition", "TransitionStart"),
    transitioncancel: Ti("Transition", "TransitionCancel"),
    transitionend: Ti("Transition", "TransitionEnd")
  }, Ds = {}, pg = {};
  xn && (pg = document.createElement("div").style, "AnimationEvent" in window || (delete da.animationend.animation, delete da.animationiteration.animation, delete da.animationstart.animation), "TransitionEvent" in window || delete da.transitionend.transition);
  function wi(e) {
    if (Ds[e]) return Ds[e];
    if (!da[e]) return e;
    var t = da[e], r;
    for (r in t) if (t.hasOwnProperty(r) && r in pg) return Ds[e] = t[r];
    return e;
  }
  var gg = wi("animationend"), hg = wi("animationiteration"), yg = wi("animationstart"), Z1 = wi("transitionrun"), N1 = wi("transitionstart"), j1 = wi("transitioncancel"), _g = wi("transitionend"), bg = /* @__PURE__ */ new Map(), Zs = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Zs.push("scrollEnd");
  function fn(e, t) {
    bg.set(e, t), zi(t, [e]);
  }
  var Zl = typeof reportError == "function" ? reportError : function(e) {
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
  }, Ft = [], fa = 0, Ns = 0;
  function Nl() {
    for (var e = fa, t = Ns = fa = 0; t < e; ) {
      var r = Ft[t];
      Ft[t++] = null;
      var l = Ft[t];
      Ft[t++] = null;
      var s = Ft[t];
      Ft[t++] = null;
      var f = Ft[t];
      if (Ft[t++] = null, l !== null && s !== null) {
        var v = l.pending;
        v === null ? s.next = s : (s.next = v.next, v.next = s), l.pending = s;
      }
      f !== 0 && Sg(r, s, f);
    }
  }
  function jl(e, t, r, l) {
    Ft[fa++] = e, Ft[fa++] = t, Ft[fa++] = r, Ft[fa++] = l, Ns |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function js(e, t, r, l) {
    return jl(e, t, r, l), Al(e);
  }
  function xi(e, t) {
    return jl(e, null, null, t), Al(e);
  }
  function Sg(e, t, r) {
    e.lanes |= r;
    var l = e.alternate;
    l !== null && (l.lanes |= r);
    for (var s = !1, f = e.return; f !== null; ) f.childLanes |= r, l = f.alternate, l !== null && (l.childLanes |= r), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (s = !0)), e = f, f = f.return;
    return e.tag === 3 ? (f = e.stateNode, s && t !== null && (s = 31 - Rt(r), e = f.hiddenUpdates, l = e[s], l === null ? e[s] = [t] : l.push(t), t.lane = r | 536870912), f) : null;
  }
  function Al(e) {
    if (50 < Vr) throw Vr = 0, Bd = null, Error(i(185));
    for (var t = e.return; t !== null; ) e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ma = {};
  function A1(e, t, r, l) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Mt(e, t, r, l) {
    return new A1(e, t, r, l);
  }
  function As(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function En(e, t) {
    var r = e.alternate;
    return r === null ? (r = Mt(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 65011712, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.refCleanup = e.refCleanup, r;
  }
  function $g(e, t) {
    e.flags &= 65011714;
    var r = e.alternate;
    return r === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type, t = r.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Il(e, t, r, l, s, f) {
    var v = 0;
    if (l = e, typeof e == "function") As(e) && (v = 1);
    else if (typeof e == "string") v = H4(e, r, Y.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (e) {
      case hn:
        return e = Mt(31, r, t, s), e.elementType = hn, e.lanes = f, e;
      case Qe:
        return Ei(r.children, s, f, t);
      case Ae:
        v = 8, s |= 24;
        break;
      case Ie:
        return e = Mt(12, r, t, s | 2), e.elementType = Ie, e.lanes = f, e;
      case ht:
        return e = Mt(13, r, t, s), e.elementType = ht, e.lanes = f, e;
      case yt:
        return e = Mt(19, r, t, s), e.elementType = yt, e.lanes = f, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ae:
            v = 10;
            break e;
          case Pe:
            v = 9;
            break e;
          case we:
            v = 11;
            break e;
          case ge:
            v = 14;
            break e;
          case kt:
            v = 16, l = null;
            break e;
        }
        v = 29, r = Error(i(130, e === null ? "null" : typeof e, "")), l = null;
    }
    return t = Mt(v, r, t, s), t.elementType = e, t.type = l, t.lanes = f, t;
  }
  function Ei(e, t, r, l) {
    return e = Mt(7, e, l, t), e.lanes = r, e;
  }
  function Is(e, t, r) {
    return e = Mt(6, e, null, t), e.lanes = r, e;
  }
  function zg(e) {
    var t = Mt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Rs(e, t, r) {
    return t = Mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var kg = /* @__PURE__ */ new WeakMap();
  function Wt(e, t) {
    if (typeof e == "object" && e !== null) {
      var r = kg.get(e);
      return r !== void 0 ? r : (t = {
        value: e,
        source: t,
        stack: $p(t)
      }, kg.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: $p(t)
    };
  }
  var va = [], pa = 0, Rl = null, xr = 0, en = [], tn = 0, Kn = null, _n = 1, bn = "";
  function Un(e, t) {
    va[pa++] = xr, va[pa++] = Rl, Rl = e, xr = t;
  }
  function Tg(e, t, r) {
    en[tn++] = _n, en[tn++] = bn, en[tn++] = Kn, Kn = e;
    var l = _n;
    e = bn;
    var s = 32 - Rt(l) - 1;
    l &= ~(1 << s), r += 1;
    var f = 32 - Rt(t) + s;
    if (30 < f) {
      var v = s - s % 5;
      f = (l & (1 << v) - 1).toString(32), l >>= v, s -= v, _n = 1 << 32 - Rt(t) + s | r << s | l, bn = f + e;
    } else _n = 1 << f | r << s | l, bn = e;
  }
  function Cs(e) {
    e.return !== null && (Un(e, 1), Tg(e, 1, 0));
  }
  function Ms(e) {
    for (; e === Rl; ) Rl = va[--pa], va[pa] = null, xr = va[--pa], va[pa] = null;
    for (; e === Kn; ) Kn = en[--tn], en[tn] = null, bn = en[--tn], en[tn] = null, _n = en[--tn], en[tn] = null;
  }
  function wg(e, t) {
    en[tn++] = _n, en[tn++] = bn, en[tn++] = Kn, _n = t.id, bn = t.overflow, Kn = e;
  }
  var ct = null, Le = null, ve = !1, Fn = null, nn = !1, qs = Error(i(519));
  function Wn(e) {
    throw Er(Wt(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), qs;
  }
  function xg(e) {
    var t = e.stateNode, r = e.type, l = e.memoizedProps;
    switch (t[ut] = e, t[Tt] = l, r) {
      case "dialog":
        de("cancel", t), de("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        de("load", t);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Xr.length; r++) de(Xr[r], t);
        break;
      case "source":
        de("error", t);
        break;
      case "img":
      case "image":
      case "link":
        de("error", t), de("load", t);
        break;
      case "details":
        de("toggle", t);
        break;
      case "input":
        de("invalid", t), qp(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
        break;
      case "select":
        de("invalid", t);
        break;
      case "textarea":
        de("invalid", t), Lp(t, l.value, l.defaultValue, l.children);
    }
    r = l.children, typeof r != "string" && typeof r != "number" && typeof r != "bigint" || t.textContent === "" + r || l.suppressHydrationWarning === !0 || Ly(t.textContent, r) ? (l.popover != null && (de("beforetoggle", t), de("toggle", t)), l.onScroll != null && de("scroll", t), l.onScrollEnd != null && de("scrollend", t), l.onClick != null && (t.onclick = wn), t = !0) : t = !1, t || Wn(e, !0);
  }
  function Eg(e) {
    for (ct = e.return; ct; ) switch (ct.tag) {
      case 5:
      case 31:
      case 13:
        nn = !1;
        return;
      case 27:
      case 3:
        nn = !0;
        return;
      default:
        ct = ct.return;
    }
  }
  function ga(e) {
    if (e !== ct) return !1;
    if (!ve) return Eg(e), ve = !0, !1;
    var t = e.tag, r;
    if ((r = t !== 3 && t !== 27) && ((r = t === 5) && (r = e.type, r = !(r !== "form" && r !== "button") || af(e.type, e.memoizedProps)), r = !r), r && Le && Wn(e), Eg(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      Le = Ky(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      Le = Ky(e);
    } else t === 27 ? (t = Le, di(e.type) ? (e = cf, cf = null, Le = e) : Le = t) : Le = ct ? on(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ui() {
    Le = ct = null, ve = !1;
  }
  function Hs() {
    var e = Fn;
    return e !== null && (Ot === null ? Ot = e : Ot.push.apply(Ot, e), Fn = null), e;
  }
  function Er(e) {
    Fn === null ? Fn = [e] : Fn.push(e);
  }
  var Ls = S(null), Oi = null, On = null;
  function ei(e, t, r) {
    H(Ls, t._currentValue), t._currentValue = r;
  }
  function Dn(e) {
    e._currentValue = Ls.current, R(Ls);
  }
  function Bs(e, t, r) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === r) break;
      e = e.return;
    }
  }
  function Js(e, t, r, l) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var f = s.dependencies;
      if (f !== null) {
        var v = s.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var p = f;
          f = s;
          for (var _ = 0; _ < t.length; _++) if (p.context === t[_]) {
            f.lanes |= r, p = f.alternate, p !== null && (p.lanes |= r), Bs(f.return, r, e), l || (v = null);
            break e;
          }
          f = p.next;
        }
      } else if (s.tag === 18) {
        if (v = s.return, v === null) throw Error(i(341));
        v.lanes |= r, f = v.alternate, f !== null && (f.lanes |= r), Bs(v, r, e), v = null;
      } else v = s.child;
      if (v !== null) v.return = s;
      else for (v = s; v !== null; ) {
        if (v === e) {
          v = null;
          break;
        }
        if (s = v.sibling, s !== null) {
          s.return = v.return, v = s;
          break;
        }
        v = v.return;
      }
      s = v;
    }
  }
  function ha(e, t, r, l) {
    e = null;
    for (var s = t, f = !1; s !== null; ) {
      if (!f) {
        if ((s.flags & 524288) !== 0) f = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var v = s.alternate;
        if (v === null) throw Error(i(387));
        if (v = v.memoizedProps, v !== null) {
          var p = s.type;
          Ct(s.pendingProps.value, v.value) || (e !== null ? e.push(p) : e = [p]);
        }
      } else if (s === ke.current) {
        if (v = s.alternate, v === null) throw Error(i(387));
        v.memoizedState.memoizedState !== s.memoizedState.memoizedState && (e !== null ? e.push(to) : e = [to]);
      }
      s = s.return;
    }
    e !== null && Js(t, e, r, l), t.flags |= 262144;
  }
  function Cl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ct(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Di(e) {
    Oi = e, On = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function st(e) {
    return Ug(Oi, e);
  }
  function Ml(e, t) {
    return Oi === null && Di(e), Ug(e, t);
  }
  function Ug(e, t) {
    var r = t._currentValue;
    if (t = {
      context: t,
      memoizedValue: r,
      next: null
    }, On === null) {
      if (e === null) throw Error(i(308));
      On = t, e.dependencies = {
        lanes: 0,
        firstContext: t
      }, e.flags |= 524288;
    } else On = On.next = t;
    return r;
  }
  var I1 = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(r, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(r) {
        return r();
      });
    };
  }, R1 = a.unstable_scheduleCallback, C1 = a.unstable_NormalPriority, We = {
    $$typeof: ae,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Gs() {
    return {
      controller: new I1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ur(e) {
    e.refCount--, e.refCount === 0 && R1(C1, function() {
      e.controller.abort();
    });
  }
  var Or = null, Ps = 0, ya = 0, _a = null;
  function M1(e, t) {
    if (Or === null) {
      var r = Or = [];
      Ps = 0, ya = Qd(), _a = {
        status: "pending",
        value: void 0,
        then: function(l) {
          r.push(l);
        }
      };
    }
    return Ps++, t.then(Og, Og), t;
  }
  function Og() {
    if (--Ps === 0 && Or !== null) {
      _a !== null && (_a.status = "fulfilled");
      var e = Or;
      Or = null, ya = 0, _a = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function q1(e, t) {
    var r = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        r.push(s);
      }
    };
    return e.then(function() {
      l.status = "fulfilled", l.value = t;
      for (var s = 0; s < r.length; s++) (0, r[s])(t);
    }, function(s) {
      for (l.status = "rejected", l.reason = s, s = 0; s < r.length; s++) (0, r[s])(void 0);
    }), l;
  }
  var Dg = M.S;
  M.S = function(e, t) {
    dy = At(), typeof t == "object" && t !== null && typeof t.then == "function" && M1(e, t), Dg !== null && Dg(e, t);
  };
  var Zi = S(null);
  function Ys() {
    var e = Zi.current;
    return e !== null ? e : Re.pooledCache;
  }
  function ql(e, t) {
    t === null ? H(Zi, Zi.current) : H(Zi, t.pool);
  }
  function Zg() {
    var e = Ys();
    return e === null ? null : {
      parent: We._currentValue,
      pool: e
    };
  }
  var ba = Error(i(460)), Vs = Error(i(474)), Hl = Error(i(542)), Ll = { then: function() {
  } };
  function Ng(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function jg(e, t, r) {
    switch (r = e[r], r === void 0 ? e.push(t) : r !== t && (t.then(wn, wn), t = r), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Ig(e), e;
      default:
        if (typeof t.status == "string") t.then(wn, wn);
        else {
          if (e = Re, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
          e = t, e.status = "pending", e.then(function(l) {
            if (t.status === "pending") {
              var s = t;
              s.status = "fulfilled", s.value = l;
            }
          }, function(l) {
            if (t.status === "pending") {
              var s = t;
              s.status = "rejected", s.reason = l;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Ig(e), e;
        }
        throw ji = t, ba;
    }
  }
  function Ni(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (r) {
      throw r !== null && typeof r == "object" && typeof r.then == "function" ? (ji = r, ba) : r;
    }
  }
  var ji = null;
  function Ag() {
    if (ji === null) throw Error(i(459));
    var e = ji;
    return ji = null, e;
  }
  function Ig(e) {
    if (e === ba || e === Hl) throw Error(i(483));
  }
  var Sa = null, Dr = 0;
  function Bl(e) {
    var t = Dr;
    return Dr += 1, Sa === null && (Sa = []), jg(Sa, e, t);
  }
  function Zr(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Jl(e, t) {
    throw t.$$typeof === q ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
  }
  function Rg(e) {
    function t($, b) {
      if (e) {
        var x = $.deletions;
        x === null ? ($.deletions = [b], $.flags |= 16) : x.push(b);
      }
    }
    function r($, b) {
      if (!e) return null;
      for (; b !== null; ) t($, b), b = b.sibling;
      return null;
    }
    function l($) {
      for (var b = /* @__PURE__ */ new Map(); $ !== null; ) $.key !== null ? b.set($.key, $) : b.set($.index, $), $ = $.sibling;
      return b;
    }
    function s($, b) {
      return $ = En($, b), $.index = 0, $.sibling = null, $;
    }
    function f($, b, x) {
      return $.index = x, e ? (x = $.alternate, x !== null ? (x = x.index, x < b ? ($.flags |= 67108866, b) : x) : ($.flags |= 67108866, b)) : ($.flags |= 1048576, b);
    }
    function v($) {
      return e && $.alternate === null && ($.flags |= 67108866), $;
    }
    function p($, b, x, j) {
      return b === null || b.tag !== 6 ? (b = Is(x, $.mode, j), b.return = $, b) : (b = s(b, x), b.return = $, b);
    }
    function _($, b, x, j) {
      var V = x.type;
      return V === Qe ? N($, b, x.props.children, j, x.key) : b !== null && (b.elementType === V || typeof V == "object" && V !== null && V.$$typeof === kt && Ni(V) === b.type) ? (b = s(b, x.props), Zr(b, x), b.return = $, b) : (b = Il(x.type, x.key, x.props, null, $.mode, j), Zr(b, x), b.return = $, b);
    }
    function E($, b, x, j) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== x.containerInfo || b.stateNode.implementation !== x.implementation ? (b = Rs(x, $.mode, j), b.return = $, b) : (b = s(b, x.children || []), b.return = $, b);
    }
    function N($, b, x, j, V) {
      return b === null || b.tag !== 7 ? (b = Ei(x, $.mode, j, V), b.return = $, b) : (b = s(b, x), b.return = $, b);
    }
    function A($, b, x) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint") return b = Is("" + b, $.mode, x), b.return = $, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case W:
            return x = Il(b.type, b.key, b.props, null, $.mode, x), Zr(x, b), x.return = $, x;
          case pe:
            return b = Rs(b, $.mode, x), b.return = $, b;
          case kt:
            return b = Ni(b), A($, b, x);
        }
        if (J(b) || yn(b)) return b = Ei(b, $.mode, x, null), b.return = $, b;
        if (typeof b.then == "function") return A($, Bl(b), x);
        if (b.$$typeof === ae) return A($, Ml($, b), x);
        Jl($, b);
      }
      return null;
    }
    function O($, b, x, j) {
      var V = b !== null ? b.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint") return V !== null ? null : p($, b, "" + x, j);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case W:
            return x.key === V ? _($, b, x, j) : null;
          case pe:
            return x.key === V ? E($, b, x, j) : null;
          case kt:
            return x = Ni(x), O($, b, x, j);
        }
        if (J(x) || yn(x)) return V !== null ? null : N($, b, x, j, null);
        if (typeof x.then == "function") return O($, b, Bl(x), j);
        if (x.$$typeof === ae) return O($, b, Ml($, x), j);
        Jl($, x);
      }
      return null;
    }
    function Z($, b, x, j, V) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint") return $ = $.get(x) || null, p(b, $, "" + j, V);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case W:
            return $ = $.get(j.key === null ? x : j.key) || null, _(b, $, j, V);
          case pe:
            return $ = $.get(j.key === null ? x : j.key) || null, E(b, $, j, V);
          case kt:
            return j = Ni(j), Z($, b, x, j, V);
        }
        if (J(j) || yn(j)) return $ = $.get(x) || null, N(b, $, j, V, null);
        if (typeof j.then == "function") return Z($, b, x, Bl(j), V);
        if (j.$$typeof === ae) return Z($, b, x, Ml(b, j), V);
        Jl(b, j);
      }
      return null;
    }
    function G($, b, x, j) {
      for (var V = null, ye = null, P = b, re = b = 0, me = null; P !== null && re < x.length; re++) {
        P.index > re ? (me = P, P = null) : me = P.sibling;
        var _e = O($, P, x[re], j);
        if (_e === null) {
          P === null && (P = me);
          break;
        }
        e && P && _e.alternate === null && t($, P), b = f(_e, b, re), ye === null ? V = _e : ye.sibling = _e, ye = _e, P = me;
      }
      if (re === x.length) return r($, P), ve && Un($, re), V;
      if (P === null) {
        for (; re < x.length; re++) P = A($, x[re], j), P !== null && (b = f(P, b, re), ye === null ? V = P : ye.sibling = P, ye = P);
        return ve && Un($, re), V;
      }
      for (P = l(P); re < x.length; re++) me = Z(P, $, re, x[re], j), me !== null && (e && me.alternate !== null && P.delete(me.key === null ? re : me.key), b = f(me, b, re), ye === null ? V = me : ye.sibling = me, ye = me);
      return e && P.forEach(function(gi) {
        return t($, gi);
      }), ve && Un($, re), V;
    }
    function X($, b, x, j) {
      if (x == null) throw Error(i(151));
      for (var V = null, ye = null, P = b, re = b = 0, me = null, _e = x.next(); P !== null && !_e.done; re++, _e = x.next()) {
        P.index > re ? (me = P, P = null) : me = P.sibling;
        var gi = O($, P, _e.value, j);
        if (gi === null) {
          P === null && (P = me);
          break;
        }
        e && P && gi.alternate === null && t($, P), b = f(gi, b, re), ye === null ? V = gi : ye.sibling = gi, ye = gi, P = me;
      }
      if (_e.done) return r($, P), ve && Un($, re), V;
      if (P === null) {
        for (; !_e.done; re++, _e = x.next()) _e = A($, _e.value, j), _e !== null && (b = f(_e, b, re), ye === null ? V = _e : ye.sibling = _e, ye = _e);
        return ve && Un($, re), V;
      }
      for (P = l(P); !_e.done; re++, _e = x.next()) _e = Z(P, $, re, _e.value, j), _e !== null && (e && _e.alternate !== null && P.delete(_e.key === null ? re : _e.key), b = f(_e, b, re), ye === null ? V = _e : ye.sibling = _e, ye = _e);
      return e && P.forEach(function(tk) {
        return t($, tk);
      }), ve && Un($, re), V;
    }
    function Ze($, b, x, j) {
      if (typeof x == "object" && x !== null && x.type === Qe && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case W:
            e: {
              for (var V = x.key; b !== null; ) {
                if (b.key === V) {
                  if (V = x.type, V === Qe) {
                    if (b.tag === 7) {
                      r($, b.sibling), j = s(b, x.props.children), j.return = $, $ = j;
                      break e;
                    }
                  } else if (b.elementType === V || typeof V == "object" && V !== null && V.$$typeof === kt && Ni(V) === b.type) {
                    r($, b.sibling), j = s(b, x.props), Zr(j, x), j.return = $, $ = j;
                    break e;
                  }
                  r($, b);
                  break;
                } else t($, b);
                b = b.sibling;
              }
              x.type === Qe ? (j = Ei(x.props.children, $.mode, j, x.key), j.return = $, $ = j) : (j = Il(x.type, x.key, x.props, null, $.mode, j), Zr(j, x), j.return = $, $ = j);
            }
            return v($);
          case pe:
            e: {
              for (V = x.key; b !== null; ) {
                if (b.key === V) if (b.tag === 4 && b.stateNode.containerInfo === x.containerInfo && b.stateNode.implementation === x.implementation) {
                  r($, b.sibling), j = s(b, x.children || []), j.return = $, $ = j;
                  break e;
                } else {
                  r($, b);
                  break;
                }
                else t($, b);
                b = b.sibling;
              }
              j = Rs(x, $.mode, j), j.return = $, $ = j;
            }
            return v($);
          case kt:
            return x = Ni(x), Ze($, b, x, j);
        }
        if (J(x)) return G($, b, x, j);
        if (yn(x)) {
          if (V = yn(x), typeof V != "function") throw Error(i(150));
          return x = V.call(x), X($, b, x, j);
        }
        if (typeof x.then == "function") return Ze($, b, Bl(x), j);
        if (x.$$typeof === ae) return Ze($, b, Ml($, x), j);
        Jl($, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, b !== null && b.tag === 6 ? (r($, b.sibling), j = s(b, x), j.return = $, $ = j) : (r($, b), j = Is(x, $.mode, j), j.return = $, $ = j), v($)) : r($, b);
    }
    return function($, b, x, j) {
      try {
        Dr = 0;
        var V = Ze($, b, x, j);
        return Sa = null, V;
      } catch (P) {
        if (P === ba || P === Hl) throw P;
        var ye = Mt(29, P, null, $.mode);
        return ye.lanes = j, ye.return = $, ye;
      }
    };
  }
  var Ai = Rg(!0), Cg = Rg(!1), ti = !1;
  function Qs(e) {
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
  function Xs(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Ii(e) {
    return {
      lane: e,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Ri(e, t, r) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, ($e & 2) !== 0) {
      var s = l.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, t = Al(e), Sg(e, null, r), t;
    }
    return jl(e, l, t, r), Al(e);
  }
  function Nr(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, r |= l, t.lanes = r, Ep(e, r);
    }
  }
  function Ks(e, t) {
    var r = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, r === l)) {
      var s = null, f = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var v = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          };
          f === null ? s = f = v : f = f.next = v, r = r.next;
        } while (r !== null);
        f === null ? s = f = t : f = f.next = t;
      } else s = f = t;
      r = {
        baseState: l.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: f,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = r;
      return;
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
  }
  var Fs = !1;
  function jr() {
    if (Fs) {
      var e = _a;
      if (e !== null) throw e;
    }
  }
  function Ar(e, t, r, l) {
    Fs = !1;
    var s = e.updateQueue;
    ti = !1;
    var f = s.firstBaseUpdate, v = s.lastBaseUpdate, p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var _ = p, E = _.next;
      _.next = null, v === null ? f = E : v.next = E, v = _;
      var N = e.alternate;
      N !== null && (N = N.updateQueue, p = N.lastBaseUpdate, p !== v && (p === null ? N.firstBaseUpdate = E : p.next = E, N.lastBaseUpdate = _));
    }
    if (f !== null) {
      var A = s.baseState;
      v = 0, N = E = _ = null, p = f;
      do {
        var O = p.lane & -536870913, Z = O !== p.lane;
        if (Z ? (fe & O) === O : (l & O) === O) {
          O !== 0 && O === ya && (Fs = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: null,
            next: null
          });
          e: {
            var G = e, X = p;
            O = t;
            var Ze = r;
            switch (X.tag) {
              case 1:
                if (G = X.payload, typeof G == "function") {
                  A = G.call(Ze, A, O);
                  break e;
                }
                A = G;
                break e;
              case 3:
                G.flags = G.flags & -65537 | 128;
              case 0:
                if (G = X.payload, O = typeof G == "function" ? G.call(Ze, A, O) : G, O == null) break e;
                A = w({}, A, O);
                break e;
              case 2:
                ti = !0;
            }
          }
          O = p.callback, O !== null && (e.flags |= 64, Z && (e.flags |= 8192), Z = s.callbacks, Z === null ? s.callbacks = [O] : Z.push(O));
        } else Z = {
          lane: O,
          tag: p.tag,
          payload: p.payload,
          callback: p.callback,
          next: null
        }, N === null ? (E = N = Z, _ = A) : N = N.next = Z, v |= O;
        if (p = p.next, p === null) {
          if (p = s.shared.pending, p === null) break;
          Z = p, p = Z.next, Z.next = null, s.lastBaseUpdate = Z, s.shared.pending = null;
        }
      } while (!0);
      N === null && (_ = A), s.baseState = _, s.firstBaseUpdate = E, s.lastBaseUpdate = N, f === null && (s.shared.lanes = 0), oi |= v, e.lanes = v, e.memoizedState = A;
    }
  }
  function Mg(e, t) {
    if (typeof e != "function") throw Error(i(191, e));
    e.call(t);
  }
  function qg(e, t) {
    var r = e.callbacks;
    if (r !== null) for (e.callbacks = null, e = 0; e < r.length; e++) Mg(r[e], t);
  }
  var $a = S(null), Gl = S(0);
  function Hg(e, t) {
    e = qn, H(Gl, e), H($a, t), qn = e | t.baseLanes;
  }
  function Ws() {
    H(Gl, qn), H($a, $a.current);
  }
  function ed() {
    qn = Gl.current, R($a), R(Gl);
  }
  var qt = S(null), an = null;
  function ni(e) {
    var t = e.alternate;
    H(Ke, Ke.current & 1), H(qt, e), an === null && (t === null || $a.current !== null || t.memoizedState !== null) && (an = e);
  }
  function td(e) {
    H(Ke, Ke.current), H(qt, e), an === null && (an = e);
  }
  function Lg(e) {
    e.tag === 22 ? (H(Ke, Ke.current), H(qt, e), an === null && (an = e)) : ii(e);
  }
  function ii() {
    H(Ke, Ke.current), H(qt, qt.current);
  }
  function Ht(e) {
    R(qt), an === e && (an = null), R(Ke);
  }
  var Ke = S(0);
  function Pl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || lf(r) || uf(r))) return t;
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
  var Zn = 0, ie = null, Oe = null, et = null, Yl = !1, za = !1, Ci = !1, Vl = 0, Ir = 0, ka = null, H1 = 0;
  function Ye() {
    throw Error(i(321));
  }
  function nd(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!Ct(e[r], t[r])) return !1;
    return !0;
  }
  function id(e, t, r, l, s, f) {
    return Zn = f, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? Th : yd, Ci = !1, f = r(l, s), Ci = !1, za && (f = Jg(t, r, l, s)), Bg(e), f;
  }
  function Bg(e) {
    M.H = Mr;
    var t = Oe !== null && Oe.next !== null;
    if (Zn = 0, et = Oe = ie = null, Yl = !1, Ir = 0, ka = null, t) throw Error(i(300));
    e === null || tt || (e = e.dependencies, e !== null && Cl(e) && (tt = !0));
  }
  function Jg(e, t, r, l) {
    ie = e;
    var s = 0;
    do {
      if (za && (ka = null), Ir = 0, za = !1, 25 <= s) throw Error(i(301));
      if (s += 1, et = Oe = null, e.updateQueue != null) {
        var f = e.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      M.H = wh, f = t(r, l);
    } while (za);
    return f;
  }
  function L1() {
    var e = M.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Rr(t) : t, e = e.useState()[0], (Oe !== null ? Oe.memoizedState : null) !== e && (ie.flags |= 1024), t;
  }
  function ad() {
    var e = Vl !== 0;
    return Vl = 0, e;
  }
  function rd(e, t, r) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~r;
  }
  function od(e) {
    if (Yl) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Yl = !1;
    }
    Zn = 0, et = Oe = ie = null, za = !1, Ir = Vl = 0, ka = null;
  }
  function St() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return et === null ? ie.memoizedState = et = e : et = et.next = e, et;
  }
  function Fe() {
    if (Oe === null) {
      var e = ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Oe.next;
    var t = et === null ? ie.memoizedState : et.next;
    if (t !== null) et = t, Oe = e;
    else {
      if (e === null)
        throw ie.alternate === null ? Error(i(467)) : Error(i(310));
      Oe = e, e = {
        memoizedState: Oe.memoizedState,
        baseState: Oe.baseState,
        baseQueue: Oe.baseQueue,
        queue: Oe.queue,
        next: null
      }, et === null ? ie.memoizedState = et = e : et = et.next = e;
    }
    return et;
  }
  function Ql() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Rr(e) {
    var t = Ir;
    return Ir += 1, ka === null && (ka = []), e = jg(ka, e, t), t = ie, (et === null ? t.memoizedState : et.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? Th : yd), e;
  }
  function Xl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Rr(e);
      if (e.$$typeof === ae) return st(e);
    }
    throw Error(i(438, String(e)));
  }
  function ld(e) {
    var t = null, r = ie.updateQueue;
    if (r !== null && (t = r.memoCache), t == null) {
      var l = ie.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (t ??= {
      data: [],
      index: 0
    }, r === null && (r = Ql(), ie.updateQueue = r), r.memoCache = t, r = t.data[t.index], r === void 0) for (r = t.data[t.index] = Array(e), l = 0; l < e; l++) r[l] = bi;
    return t.index++, r;
  }
  function Nn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Kl(e) {
    return ud(Fe(), Oe, e);
  }
  function ud(e, t, r) {
    var l = e.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = r;
    var s = e.baseQueue, f = l.pending;
    if (f !== null) {
      if (s !== null) {
        var v = s.next;
        s.next = f.next, f.next = v;
      }
      t.baseQueue = s = f, l.pending = null;
    }
    if (f = e.baseState, s === null) e.memoizedState = f;
    else {
      t = s.next;
      var p = v = null, _ = null, E = t, N = !1;
      do {
        var A = E.lane & -536870913;
        if (A !== E.lane ? (fe & A) === A : (Zn & A) === A) {
          var O = E.revertLane;
          if (O === 0) _ !== null && (_ = _.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null
          }), A === ya && (N = !0);
          else if ((Zn & O) === O) {
            E = E.next, O === ya && (N = !0);
            continue;
          } else A = {
            lane: 0,
            revertLane: E.revertLane,
            gesture: null,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null
          }, _ === null ? (p = _ = A, v = f) : _ = _.next = A, ie.lanes |= O, oi |= O;
          A = E.action, Ci && r(f, A), f = E.hasEagerState ? E.eagerState : r(f, A);
        } else O = {
          lane: A,
          revertLane: E.revertLane,
          gesture: E.gesture,
          action: E.action,
          hasEagerState: E.hasEagerState,
          eagerState: E.eagerState,
          next: null
        }, _ === null ? (p = _ = O, v = f) : _ = _.next = O, ie.lanes |= A, oi |= A;
        E = E.next;
      } while (E !== null && E !== t);
      if (_ === null ? v = f : _.next = p, !Ct(f, e.memoizedState) && (tt = !0, N && (r = _a, r !== null))) throw r;
      e.memoizedState = f, e.baseState = v, e.baseQueue = _, l.lastRenderedState = f;
    }
    return s === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function cd(e) {
    var t = Fe(), r = t.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = e;
    var l = r.dispatch, s = r.pending, f = t.memoizedState;
    if (s !== null) {
      r.pending = null;
      var v = s = s.next;
      do
        f = e(f, v.action), v = v.next;
      while (v !== s);
      Ct(f, t.memoizedState) || (tt = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), r.lastRenderedState = f;
    }
    return [f, l];
  }
  function Gg(e, t, r) {
    var l = ie, s = Fe(), f = ve;
    if (f) {
      if (r === void 0) throw Error(i(407));
      r = r();
    } else r = t();
    var v = !Ct((Oe || s).memoizedState, r);
    if (v && (s.memoizedState = r, tt = !0), s = s.queue, fd(Vg.bind(null, l, s, e), [e]), s.getSnapshot !== t || v || et !== null && et.memoizedState.tag & 1) {
      if (l.flags |= 2048, Ta(9, { destroy: void 0 }, Yg.bind(null, l, s, r, t), null), Re === null) throw Error(i(349));
      f || (Zn & 127) !== 0 || Pg(l, t, r);
    }
    return r;
  }
  function Pg(e, t, r) {
    e.flags |= 16384, e = {
      getSnapshot: t,
      value: r
    }, t = ie.updateQueue, t === null ? (t = Ql(), ie.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
  }
  function Yg(e, t, r, l) {
    t.value = r, t.getSnapshot = l, Qg(t) && Xg(e);
  }
  function Vg(e, t, r) {
    return r(function() {
      Qg(t) && Xg(e);
    });
  }
  function Qg(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Ct(e, r);
    } catch {
      return !0;
    }
  }
  function Xg(e) {
    var t = xi(e, 2);
    t !== null && Dt(t, e, 2);
  }
  function sd(e) {
    var t = St();
    if (typeof e == "function") {
      var r = e;
      if (e = r(), Ci) {
        Vn(!0);
        try {
          r();
        } finally {
          Vn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nn,
      lastRenderedState: e
    }, t;
  }
  function Kg(e, t, r, l) {
    return e.baseState = r, ud(e, Oe, typeof l == "function" ? l : Nn);
  }
  function B1(e, t, r, l, s) {
    if (eu(e)) throw Error(i(485));
    if (e = t.action, e !== null) {
      var f = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(v) {
          f.listeners.push(v);
        }
      };
      M.T !== null ? r(!0) : f.isTransition = !1, l(f), r = t.pending, r === null ? (f.next = t.pending = f, Fg(t, f)) : (f.next = r.next, t.pending = r.next = f);
    }
  }
  function Fg(e, t) {
    var r = t.action, l = t.payload, s = e.state;
    if (t.isTransition) {
      var f = M.T, v = {};
      M.T = v;
      try {
        var p = r(s, l), _ = M.S;
        _ !== null && _(v, p), Wg(e, t, p);
      } catch (E) {
        dd(e, t, E);
      } finally {
        f !== null && v.types !== null && (f.types = v.types), M.T = f;
      }
    } else try {
      f = r(s, l), Wg(e, t, f);
    } catch (E) {
      dd(e, t, E);
    }
  }
  function Wg(e, t, r) {
    r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(function(l) {
      eh(e, t, l);
    }, function(l) {
      return dd(e, t, l);
    }) : eh(e, t, r);
  }
  function eh(e, t, r) {
    t.status = "fulfilled", t.value = r, th(t), e.state = r, t = e.pending, t !== null && (r = t.next, r === t ? e.pending = null : (r = r.next, t.next = r, Fg(e, r)));
  }
  function dd(e, t, r) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = r, th(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function th(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function nh(e, t) {
    return t;
  }
  function ih(e, t) {
    if (ve) {
      var r = Re.formState;
      if (r !== null) {
        e: {
          var l = ie;
          if (ve) {
            if (Le) {
              t: {
                for (var s = Le, f = nn; s.nodeType !== 8; ) {
                  if (!f) {
                    s = null;
                    break t;
                  }
                  if (s = on(s.nextSibling), s === null) {
                    s = null;
                    break t;
                  }
                }
                f = s.data, s = f === "F!" || f === "F" ? s : null;
              }
              if (s) {
                Le = on(s.nextSibling), l = s.data === "F!";
                break e;
              }
            }
            Wn(l);
          }
          l = !1;
        }
        l && (t = r[0]);
      }
    }
    return r = St(), r.memoizedState = r.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nh,
      lastRenderedState: t
    }, r.queue = l, r = $h.bind(null, ie, l), l.dispatch = r, l = sd(!1), f = hd.bind(null, ie, !1, l.queue), l = St(), s = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = s, r = B1.bind(null, ie, s, f, r), s.dispatch = r, l.memoizedState = e, [
      t,
      r,
      !1
    ];
  }
  function ah(e) {
    return rh(Fe(), Oe, e);
  }
  function rh(e, t, r) {
    if (t = ud(e, t, nh)[0], e = Kl(Nn)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var l = Rr(t);
    } catch (v) {
      throw v === ba ? Hl : v;
    }
    else l = t;
    t = Fe();
    var s = t.queue, f = s.dispatch;
    return r !== t.memoizedState && (ie.flags |= 2048, Ta(9, { destroy: void 0 }, J1.bind(null, s, r), null)), [
      l,
      f,
      e
    ];
  }
  function J1(e, t) {
    e.action = t;
  }
  function oh(e) {
    var t = Fe(), r = Oe;
    if (r !== null) return rh(t, r, e);
    Fe(), t = t.memoizedState, r = Fe();
    var l = r.queue.dispatch;
    return r.memoizedState = e, [
      t,
      l,
      !1
    ];
  }
  function Ta(e, t, r, l) {
    return e = {
      tag: e,
      create: r,
      deps: l,
      inst: t,
      next: null
    }, t = ie.updateQueue, t === null && (t = Ql(), ie.updateQueue = t), r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (l = r.next, r.next = e, e.next = l, t.lastEffect = e), e;
  }
  function lh() {
    return Fe().memoizedState;
  }
  function Fl(e, t, r, l) {
    var s = St();
    ie.flags |= e, s.memoizedState = Ta(1 | t, { destroy: void 0 }, r, l === void 0 ? null : l);
  }
  function Wl(e, t, r, l) {
    var s = Fe();
    l = l === void 0 ? null : l;
    var f = s.memoizedState.inst;
    Oe !== null && l !== null && nd(l, Oe.memoizedState.deps) ? s.memoizedState = Ta(t, f, r, l) : (ie.flags |= e, s.memoizedState = Ta(1 | t, f, r, l));
  }
  function uh(e, t) {
    Fl(8390656, 8, e, t);
  }
  function fd(e, t) {
    Wl(2048, 8, e, t);
  }
  function G1(e) {
    ie.flags |= 4;
    var t = ie.updateQueue;
    if (t === null) t = Ql(), ie.updateQueue = t, t.events = [e];
    else {
      var r = t.events;
      r === null ? t.events = [e] : r.push(e);
    }
  }
  function ch(e) {
    var t = Fe().memoizedState;
    return G1({
      ref: t,
      nextImpl: e
    }), function() {
      if (($e & 2) !== 0) throw Error(i(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function sh(e, t) {
    return Wl(4, 2, e, t);
  }
  function dh(e, t) {
    return Wl(4, 4, e, t);
  }
  function fh(e, t) {
    if (typeof t == "function") {
      e = e();
      var r = t(e);
      return function() {
        typeof r == "function" ? r() : t(null);
      };
    }
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function mh(e, t, r) {
    r = r != null ? r.concat([e]) : null, Wl(4, 4, fh.bind(null, t, e), r);
  }
  function md() {
  }
  function vh(e, t) {
    var r = Fe();
    t = t === void 0 ? null : t;
    var l = r.memoizedState;
    return t !== null && nd(t, l[1]) ? l[0] : (r.memoizedState = [e, t], e);
  }
  function ph(e, t) {
    var r = Fe();
    t = t === void 0 ? null : t;
    var l = r.memoizedState;
    if (t !== null && nd(t, l[1])) return l[0];
    if (l = e(), Ci) {
      Vn(!0);
      try {
        e();
      } finally {
        Vn(!1);
      }
    }
    return r.memoizedState = [l, t], l;
  }
  function vd(e, t, r) {
    return r === void 0 || (Zn & 1073741824) !== 0 && (fe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = r, e = my(), ie.lanes |= e, oi |= e, r);
  }
  function gh(e, t, r, l) {
    return Ct(r, t) ? r : $a.current !== null ? (e = vd(e, r, l), Ct(e, t) || (tt = !0), e) : (Zn & 42) === 0 || (Zn & 1073741824) !== 0 && (fe & 261930) === 0 ? (tt = !0, e.memoizedState = r) : (e = my(), ie.lanes |= e, oi |= e, t);
  }
  function hh(e, t, r, l, s) {
    var f = L.p;
    L.p = f !== 0 && 8 > f ? f : 8;
    var v = M.T, p = {};
    M.T = p, hd(e, !1, t, r);
    try {
      var _ = s(), E = M.S;
      E !== null && E(p, _), _ !== null && typeof _ == "object" && typeof _.then == "function" ? Cr(e, t, q1(_, l), rn(e)) : Cr(e, t, l, rn(e));
    } catch (N) {
      Cr(e, t, {
        then: function() {
        },
        status: "rejected",
        reason: N
      }, rn());
    } finally {
      L.p = f, v !== null && p.types !== null && (v.types = p.types), M.T = v;
    }
  }
  function P1() {
  }
  function pd(e, t, r, l) {
    if (e.tag !== 5) throw Error(i(476));
    var s = yh(e).queue;
    hh(e, s, t, Se, r === null ? P1 : function() {
      return _h(e), r(l);
    });
  }
  function yh(e) {
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
        lastRenderedReducer: Nn,
        lastRenderedState: Se
      },
      next: null
    };
    var r = {};
    return t.next = {
      memoizedState: r,
      baseState: r,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nn,
        lastRenderedState: r
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function _h(e) {
    var t = yh(e);
    t.next === null && (t = e.alternate.memoizedState), Cr(e, t.next.queue, {}, rn());
  }
  function gd() {
    return st(to);
  }
  function bh() {
    return Fe().memoizedState;
  }
  function Sh() {
    return Fe().memoizedState;
  }
  function Y1(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var r = rn();
          e = Ii(r);
          var l = Ri(t, e, r);
          l !== null && (Dt(l, t, r), Nr(l, t, r)), t = { cache: Gs() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function V1(e, t, r) {
    var l = rn();
    r = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, eu(e) ? zh(t, r) : (r = js(e, t, r, l), r !== null && (Dt(r, e, l), kh(r, t, l)));
  }
  function $h(e, t, r) {
    Cr(e, t, r, rn());
  }
  function Cr(e, t, r, l) {
    var s = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (eu(e)) zh(t, s);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) try {
        var v = t.lastRenderedState, p = f(v, r);
        if (s.hasEagerState = !0, s.eagerState = p, Ct(p, v)) return jl(e, t, s, 0), Re === null && Nl(), !1;
      } catch {
      }
      if (r = js(e, t, s, l), r !== null) return Dt(r, e, l), kh(r, t, l), !0;
    }
    return !1;
  }
  function hd(e, t, r, l) {
    if (l = {
      lane: 2,
      revertLane: Qd(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, eu(e)) {
      if (t) throw Error(i(479));
    } else t = js(e, r, l, 2), t !== null && Dt(t, e, 2);
  }
  function eu(e) {
    var t = e.alternate;
    return e === ie || t !== null && t === ie;
  }
  function zh(e, t) {
    za = Yl = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
  }
  function kh(e, t, r) {
    if ((r & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, r |= l, t.lanes = r, Ep(e, r);
    }
  }
  var Mr = {
    readContext: st,
    use: Xl,
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
  Mr.useEffectEvent = Ye;
  var Th = {
    readContext: st,
    use: Xl,
    useCallback: function(e, t) {
      return St().memoizedState = [e, t === void 0 ? null : t], e;
    },
    useContext: st,
    useEffect: uh,
    useImperativeHandle: function(e, t, r) {
      r = r != null ? r.concat([e]) : null, Fl(4194308, 4, fh.bind(null, t, e), r);
    },
    useLayoutEffect: function(e, t) {
      return Fl(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Fl(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var r = St();
      t = t === void 0 ? null : t;
      var l = e();
      if (Ci) {
        Vn(!0);
        try {
          e();
        } finally {
          Vn(!1);
        }
      }
      return r.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, r) {
      var l = St();
      if (r !== void 0) {
        var s = r(t);
        if (Ci) {
          Vn(!0);
          try {
            r(t);
          } finally {
            Vn(!1);
          }
        }
      } else s = t;
      return l.memoizedState = l.baseState = s, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      }, l.queue = e, e = e.dispatch = V1.bind(null, ie, e), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = St();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = sd(e);
      var t = e.queue, r = $h.bind(null, ie, t);
      return t.dispatch = r, [e.memoizedState, r];
    },
    useDebugValue: md,
    useDeferredValue: function(e, t) {
      return vd(St(), e, t);
    },
    useTransition: function() {
      var e = sd(!1);
      return e = hh.bind(null, ie, e.queue, !0, !1), St().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, r) {
      var l = ie, s = St();
      if (ve) {
        if (r === void 0) throw Error(i(407));
        r = r();
      } else {
        if (r = t(), Re === null) throw Error(i(349));
        (fe & 127) !== 0 || Pg(l, t, r);
      }
      s.memoizedState = r;
      var f = {
        value: r,
        getSnapshot: t
      };
      return s.queue = f, uh(Vg.bind(null, l, f, e), [e]), l.flags |= 2048, Ta(9, { destroy: void 0 }, Yg.bind(null, l, f, r, t), null), r;
    },
    useId: function() {
      var e = St(), t = Re.identifierPrefix;
      if (ve) {
        var r = bn, l = _n;
        r = (l & ~(1 << 32 - Rt(l) - 1)).toString(32) + r, t = "_" + t + "R_" + r, r = Vl++, 0 < r && (t += "H" + r.toString(32)), t += "_";
      } else r = H1++, t = "_" + t + "r_" + r.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: gd,
    useFormState: ih,
    useActionState: ih,
    useOptimistic: function(e) {
      var t = St();
      t.memoizedState = t.baseState = e;
      var r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = r, t = hd.bind(null, ie, !0, r), r.dispatch = t, [e, t];
    },
    useMemoCache: ld,
    useCacheRefresh: function() {
      return St().memoizedState = Y1.bind(null, ie);
    },
    useEffectEvent: function(e) {
      var t = St(), r = { impl: e };
      return t.memoizedState = r, function() {
        if (($e & 2) !== 0) throw Error(i(440));
        return r.impl.apply(void 0, arguments);
      };
    }
  }, yd = {
    readContext: st,
    use: Xl,
    useCallback: vh,
    useContext: st,
    useEffect: fd,
    useImperativeHandle: mh,
    useInsertionEffect: sh,
    useLayoutEffect: dh,
    useMemo: ph,
    useReducer: Kl,
    useRef: lh,
    useState: function() {
      return Kl(Nn);
    },
    useDebugValue: md,
    useDeferredValue: function(e, t) {
      return gh(Fe(), Oe.memoizedState, e, t);
    },
    useTransition: function() {
      var e = Kl(Nn)[0], t = Fe().memoizedState;
      return [typeof e == "boolean" ? e : Rr(e), t];
    },
    useSyncExternalStore: Gg,
    useId: bh,
    useHostTransitionStatus: gd,
    useFormState: ah,
    useActionState: ah,
    useOptimistic: function(e, t) {
      return Kg(Fe(), Oe, e, t);
    },
    useMemoCache: ld,
    useCacheRefresh: Sh
  };
  yd.useEffectEvent = ch;
  var wh = {
    readContext: st,
    use: Xl,
    useCallback: vh,
    useContext: st,
    useEffect: fd,
    useImperativeHandle: mh,
    useInsertionEffect: sh,
    useLayoutEffect: dh,
    useMemo: ph,
    useReducer: cd,
    useRef: lh,
    useState: function() {
      return cd(Nn);
    },
    useDebugValue: md,
    useDeferredValue: function(e, t) {
      var r = Fe();
      return Oe === null ? vd(r, e, t) : gh(r, Oe.memoizedState, e, t);
    },
    useTransition: function() {
      var e = cd(Nn)[0], t = Fe().memoizedState;
      return [typeof e == "boolean" ? e : Rr(e), t];
    },
    useSyncExternalStore: Gg,
    useId: bh,
    useHostTransitionStatus: gd,
    useFormState: oh,
    useActionState: oh,
    useOptimistic: function(e, t) {
      var r = Fe();
      return Oe !== null ? Kg(r, Oe, e, t) : (r.baseState = e, [e, r.queue.dispatch]);
    },
    useMemoCache: ld,
    useCacheRefresh: Sh
  };
  wh.useEffectEvent = ch;
  function _d(e, t, r, l) {
    t = e.memoizedState, r = r(l, t), r = r == null ? t : w({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var bd = {
    enqueueSetState: function(e, t, r) {
      e = e._reactInternals;
      var l = rn(), s = Ii(l);
      s.payload = t, r != null && (s.callback = r), t = Ri(e, s, l), t !== null && (Dt(t, e, l), Nr(t, e, l));
    },
    enqueueReplaceState: function(e, t, r) {
      e = e._reactInternals;
      var l = rn(), s = Ii(l);
      s.tag = 1, s.payload = t, r != null && (s.callback = r), t = Ri(e, s, l), t !== null && (Dt(t, e, l), Nr(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var r = rn(), l = Ii(r);
      l.tag = 2, t != null && (l.callback = t), t = Ri(e, l, r), t !== null && (Dt(t, e, r), Nr(t, e, r));
    }
  };
  function xh(e, t, r, l, s, f, v) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, f, v) : t.prototype && t.prototype.isPureReactComponent ? !Tr(r, l) || !Tr(s, f) : !0;
  }
  function Eh(e, t, r, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, l), t.state !== e && bd.enqueueReplaceState(t, t.state, null);
  }
  function Mi(e, t) {
    var r = t;
    if ("ref" in t) {
      r = {};
      for (var l in t) l !== "ref" && (r[l] = t[l]);
    }
    if (e = e.defaultProps) {
      r === t && (r = w({}, r));
      for (var s in e) r[s] === void 0 && (r[s] = e[s]);
    }
    return r;
  }
  function Q1(e) {
    Zl(e);
  }
  function X1(e) {
    console.error(e);
  }
  function K1(e) {
    Zl(e);
  }
  function tu(e, t) {
    try {
      var r = e.onUncaughtError;
      r(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Uh(e, t, r) {
    try {
      var l = e.onCaughtError;
      l(r.value, {
        componentStack: r.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Sd(e, t, r) {
    return r = Ii(r), r.tag = 3, r.payload = { element: null }, r.callback = function() {
      tu(e, t);
    }, r;
  }
  function Oh(e) {
    return e = Ii(e), e.tag = 3, e;
  }
  function Dh(e, t, r, l) {
    var s = r.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var f = l.value;
      e.payload = function() {
        return s(f);
      }, e.callback = function() {
        Uh(t, r, l);
      };
    }
    var v = r.stateNode;
    v !== null && typeof v.componentDidCatch == "function" && (e.callback = function() {
      Uh(t, r, l), typeof s != "function" && (li === null ? li = /* @__PURE__ */ new Set([this]) : li.add(this));
      var p = l.stack;
      this.componentDidCatch(l.value, { componentStack: p !== null ? p : "" });
    });
  }
  function F1(e, t, r, l, s) {
    if (r.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = r.alternate, t !== null && ha(t, r, s, !0), r = qt.current, r !== null) {
        switch (r.tag) {
          case 31:
          case 13:
            return an === null ? mu() : r.alternate === null && Ve === 0 && (Ve = 3), r.flags &= -257, r.flags |= 65536, r.lanes = s, l === Ll ? r.flags |= 16384 : (t = r.updateQueue, t === null ? r.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Pd(e, l, s)), !1;
          case 22:
            return r.flags |= 65536, l === Ll ? r.flags |= 16384 : (t = r.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, r.updateQueue = t) : (r = t.retryQueue, r === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : r.add(l)), Pd(e, l, s)), !1;
        }
        throw Error(i(435, r.tag));
      }
      return Pd(e, l, s), mu(), !1;
    }
    if (ve) return t = qt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = s, l !== qs && (e = Error(i(422), { cause: l }), Er(Wt(e, r)))) : (l !== qs && (t = Error(i(423), { cause: l }), Er(Wt(t, r))), e = e.current.alternate, e.flags |= 65536, s &= -s, e.lanes |= s, l = Wt(l, r), s = Sd(e.stateNode, l, s), Ks(e, s), Ve !== 4 && (Ve = 2)), !1;
    var f = Error(i(520), { cause: l });
    if (f = Wt(f, r), Yr === null ? Yr = [f] : Yr.push(f), Ve !== 4 && (Ve = 2), t === null) return !0;
    l = Wt(l, r), r = t;
    do {
      switch (r.tag) {
        case 3:
          return r.flags |= 65536, e = s & -s, r.lanes |= e, e = Sd(r.stateNode, l, e), Ks(r, e), !1;
        case 1:
          if (t = r.type, f = r.stateNode, (r.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (li === null || !li.has(f)))) return r.flags |= 65536, s &= -s, r.lanes |= s, s = Oh(s), Dh(s, e, r, l), Ks(r, s), !1;
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var $d = Error(i(461)), tt = !1;
  function dt(e, t, r, l) {
    t.child = e === null ? Cg(t, null, r, l) : Ai(t, e.child, r, l);
  }
  function Zh(e, t, r, l, s) {
    r = r.render;
    var f = t.ref;
    if ("ref" in l) {
      var v = {};
      for (var p in l) p !== "ref" && (v[p] = l[p]);
    } else v = l;
    return Di(t), l = id(e, t, r, v, f, s), p = ad(), e !== null && !tt ? (rd(e, t, s), jn(e, t, s)) : (ve && p && Cs(t), t.flags |= 1, dt(e, t, l, s), t.child);
  }
  function Nh(e, t, r, l, s) {
    if (e === null) {
      var f = r.type;
      return typeof f == "function" && !As(f) && f.defaultProps === void 0 && r.compare === null ? (t.tag = 15, t.type = f, jh(e, t, f, l, s)) : (e = Il(r.type, null, l, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (f = e.child, !Od(e, s)) {
      var v = f.memoizedProps;
      if (r = r.compare, r = r !== null ? r : Tr, r(v, l) && e.ref === t.ref) return jn(e, t, s);
    }
    return t.flags |= 1, e = En(f, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function jh(e, t, r, l, s) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Tr(f, l) && e.ref === t.ref) if (tt = !1, t.pendingProps = l = f, Od(e, s)) (e.flags & 131072) !== 0 && (tt = !0);
      else return t.lanes = e.lanes, jn(e, t, s);
    }
    return zd(e, t, r, l, s);
  }
  function Ah(e, t, r, l) {
    var s = l.children, f = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (f = f !== null ? f.baseLanes | r : r, e !== null) {
          for (l = t.child = e.child, s = 0; l !== null; ) s = s | l.lanes | l.childLanes, l = l.sibling;
          l = s & ~f;
        } else l = 0, t.child = null;
        return Ih(e, t, f, r, l);
      }
      if ((r & 536870912) !== 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, e !== null && ql(t, f !== null ? f.cachePool : null), f !== null ? Hg(t, f) : Ws(), Lg(t);
      else return l = t.lanes = 536870912, Ih(e, t, f !== null ? f.baseLanes | r : r, r, l);
    } else f !== null ? (ql(t, f.cachePool), Hg(t, f), ii(t), t.memoizedState = null) : (e !== null && ql(t, null), Ws(), ii(t));
    return dt(e, t, s, r), t.child;
  }
  function qr(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Ih(e, t, r, l, s) {
    var f = Ys();
    return f = f === null ? null : {
      parent: We._currentValue,
      pool: f
    }, t.memoizedState = {
      baseLanes: r,
      cachePool: f
    }, e !== null && ql(t, null), Ws(), Lg(t), e !== null && ha(e, t, l, !0), t.childLanes = s, null;
  }
  function nu(e, t) {
    return t = au({
      mode: t.mode,
      children: t.children
    }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Rh(e, t, r) {
    return Ai(t, e.child, null, r), e = nu(t, t.pendingProps), e.flags |= 2, Ht(t), t.memoizedState = null, e;
  }
  function W1(e, t, r) {
    var l = t.pendingProps, s = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ve) {
        if (l.mode === "hidden") return e = nu(t, l), t.lanes = 536870912, qr(null, e);
        if (td(t), (e = Le) ? (e = Xy(e, nn), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Kn !== null ? {
            id: _n,
            overflow: bn
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = zg(e), r.return = t, t.child = r, ct = t, Le = null)) : e = null, e === null) throw Wn(t);
        return t.lanes = 536870912, null;
      }
      return nu(t, l);
    }
    var f = e.memoizedState;
    if (f !== null) {
      var v = f.dehydrated;
      if (td(t), s) if (t.flags & 256) t.flags &= -257, t = Rh(e, t, r);
      else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
      else throw Error(i(558));
      else if (tt || ha(e, t, r, !1), s = (r & e.childLanes) !== 0, tt || s) {
        if (l = Re, l !== null && (v = Up(l, r), v !== 0 && v !== f.retryLane)) throw f.retryLane = v, xi(e, v), Dt(l, e, v), $d;
        mu(), t = Rh(e, t, r);
      } else e = f.treeContext, Le = on(v.nextSibling), ct = t, ve = !0, Fn = null, nn = !1, e !== null && wg(t, e), t = nu(t, l), t.flags |= 4096;
      return t;
    }
    return e = En(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function iu(e, t) {
    var r = t.ref;
    if (r === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object") throw Error(i(284));
      (e === null || e.ref !== r) && (t.flags |= 4194816);
    }
  }
  function zd(e, t, r, l, s) {
    return Di(t), r = id(e, t, r, l, void 0, s), l = ad(), e !== null && !tt ? (rd(e, t, s), jn(e, t, s)) : (ve && l && Cs(t), t.flags |= 1, dt(e, t, r, s), t.child);
  }
  function Ch(e, t, r, l, s, f) {
    return Di(t), t.updateQueue = null, r = Jg(t, l, r, s), Bg(e), l = ad(), e !== null && !tt ? (rd(e, t, f), jn(e, t, f)) : (ve && l && Cs(t), t.flags |= 1, dt(e, t, r, f), t.child);
  }
  function Mh(e, t, r, l, s) {
    if (Di(t), t.stateNode === null) {
      var f = ma, v = r.contextType;
      typeof v == "object" && v !== null && (f = st(v)), f = new r(l, f), t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = bd, t.stateNode = f, f._reactInternals = t, f = t.stateNode, f.props = l, f.state = t.memoizedState, f.refs = {}, Qs(t), v = r.contextType, f.context = typeof v == "object" && v !== null ? st(v) : ma, f.state = t.memoizedState, v = r.getDerivedStateFromProps, typeof v == "function" && (_d(t, r, v, l), f.state = t.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (v = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), v !== f.state && bd.enqueueReplaceState(f, f.state, null), Ar(t, l, f, s), jr(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      f = t.stateNode;
      var p = t.memoizedProps, _ = Mi(r, p);
      f.props = _;
      var E = f.context, N = r.contextType;
      v = ma, typeof N == "object" && N !== null && (v = st(N));
      var A = r.getDerivedStateFromProps;
      N = typeof A == "function" || typeof f.getSnapshotBeforeUpdate == "function", p = t.pendingProps !== p, N || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (p || E !== v) && Eh(t, f, l, v), ti = !1;
      var O = t.memoizedState;
      f.state = O, Ar(t, l, f, s), jr(), E = t.memoizedState, p || O !== E || ti ? (typeof A == "function" && (_d(t, r, A, l), E = t.memoizedState), (_ = ti || xh(t, r, _, l, O, E, v)) ? (N || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = E), f.props = l, f.state = E, f.context = v, l = _) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      f = t.stateNode, Xs(e, t), v = t.memoizedProps, N = Mi(r, v), f.props = N, A = t.pendingProps, O = f.context, E = r.contextType, _ = ma, typeof E == "object" && E !== null && (_ = st(E)), p = r.getDerivedStateFromProps, (E = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== A || O !== _) && Eh(t, f, l, _), ti = !1, O = t.memoizedState, f.state = O, Ar(t, l, f, s), jr();
      var Z = t.memoizedState;
      v !== A || O !== Z || ti || e !== null && e.dependencies !== null && Cl(e.dependencies) ? (typeof p == "function" && (_d(t, r, p, l), Z = t.memoizedState), (N = ti || xh(t, r, N, l, O, Z, _) || e !== null && e.dependencies !== null && Cl(e.dependencies)) ? (E || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(l, Z, _), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(l, Z, _)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = Z), f.props = l, f.state = Z, f.context = _, l = N) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return f = l, iu(e, t), l = (t.flags & 128) !== 0, f || l ? (f = t.stateNode, r = l && typeof r.getDerivedStateFromError != "function" ? null : f.render(), t.flags |= 1, e !== null && l ? (t.child = Ai(t, e.child, null, s), t.child = Ai(t, null, r, s)) : dt(e, t, r, s), t.memoizedState = f.state, e = t.child) : e = jn(e, t, s), e;
  }
  function qh(e, t, r, l) {
    return Ui(), t.flags |= 256, dt(e, t, r, l), t.child;
  }
  var kd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Td(e) {
    return {
      baseLanes: e,
      cachePool: Zg()
    };
  }
  function wd(e, t, r) {
    return e = e !== null ? e.childLanes & ~r : 0, t && (e |= Bt), e;
  }
  function Hh(e, t, r) {
    var l = t.pendingProps, s = !1, f = (t.flags & 128) !== 0, v;
    if ((v = f) || (v = e !== null && e.memoizedState === null ? !1 : (Ke.current & 2) !== 0), v && (s = !0, t.flags &= -129), v = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ve) {
        if (s ? ni(t) : ii(t), (e = Le) ? (e = Xy(e, nn), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Kn !== null ? {
            id: _n,
            overflow: bn
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = zg(e), r.return = t, t.child = r, ct = t, Le = null)) : e = null, e === null) throw Wn(t);
        return uf(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var p = l.children;
      return l = l.fallback, s ? (ii(t), s = t.mode, p = au({
        mode: "hidden",
        children: p
      }, s), l = Ei(l, s, r, null), p.return = t, l.return = t, p.sibling = l, t.child = p, l = t.child, l.memoizedState = Td(r), l.childLanes = wd(e, v, r), t.memoizedState = kd, qr(null, l)) : (ni(t), xd(t, p));
    }
    var _ = e.memoizedState;
    if (_ !== null && (p = _.dehydrated, p !== null)) {
      if (f) t.flags & 256 ? (ni(t), t.flags &= -257, t = Ed(e, t, r)) : t.memoizedState !== null ? (ii(t), t.child = e.child, t.flags |= 128, t = null) : (ii(t), p = l.fallback, s = t.mode, l = au({
        mode: "visible",
        children: l.children
      }, s), p = Ei(p, s, r, null), p.flags |= 2, l.return = t, p.return = t, l.sibling = p, t.child = l, Ai(t, e.child, null, r), l = t.child, l.memoizedState = Td(r), l.childLanes = wd(e, v, r), t.memoizedState = kd, t = qr(null, l));
      else if (ni(t), uf(p)) {
        if (v = p.nextSibling && p.nextSibling.dataset, v) var E = v.dgst;
        v = E, l = Error(i(419)), l.stack = "", l.digest = v, Er({
          value: l,
          source: null,
          stack: null
        }), t = Ed(e, t, r);
      } else if (tt || ha(e, t, r, !1), v = (r & e.childLanes) !== 0, tt || v) {
        if (v = Re, v !== null && (l = Up(v, r), l !== 0 && l !== _.retryLane)) throw _.retryLane = l, xi(e, l), Dt(v, e, l), $d;
        lf(p) || mu(), t = Ed(e, t, r);
      } else lf(p) ? (t.flags |= 192, t.child = e.child, t = null) : (e = _.treeContext, Le = on(p.nextSibling), ct = t, ve = !0, Fn = null, nn = !1, e !== null && wg(t, e), t = xd(t, l.children), t.flags |= 4096);
      return t;
    }
    return s ? (ii(t), p = l.fallback, s = t.mode, _ = e.child, E = _.sibling, l = En(_, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = _.subtreeFlags & 65011712, E !== null ? p = En(E, p) : (p = Ei(p, s, r, null), p.flags |= 2), p.return = t, l.return = t, l.sibling = p, t.child = l, qr(null, l), l = t.child, p = e.child.memoizedState, p === null ? p = Td(r) : (s = p.cachePool, s !== null ? (_ = We._currentValue, s = s.parent !== _ ? {
      parent: _,
      pool: _
    } : s) : s = Zg(), p = {
      baseLanes: p.baseLanes | r,
      cachePool: s
    }), l.memoizedState = p, l.childLanes = wd(e, v, r), t.memoizedState = kd, qr(e.child, l)) : (ni(t), r = e.child, e = r.sibling, r = En(r, {
      mode: "visible",
      children: l.children
    }), r.return = t, r.sibling = null, e !== null && (v = t.deletions, v === null ? (t.deletions = [e], t.flags |= 16) : v.push(e)), t.child = r, t.memoizedState = null, r);
  }
  function xd(e, t) {
    return t = au({
      mode: "visible",
      children: t
    }, e.mode), t.return = e, e.child = t;
  }
  function au(e, t) {
    return e = Mt(22, e, null, t), e.lanes = 0, e;
  }
  function Ed(e, t, r) {
    return Ai(t, e.child, null, r), e = xd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Lh(e, t, r) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Bs(e.return, t, r);
  }
  function Ud(e, t, r, l, s, f) {
    var v = e.memoizedState;
    v === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: r,
      tailMode: s,
      treeForkCount: f
    } : (v.isBackwards = t, v.rendering = null, v.renderingStartTime = 0, v.last = l, v.tail = r, v.tailMode = s, v.treeForkCount = f);
  }
  function Bh(e, t, r) {
    var l = t.pendingProps, s = l.revealOrder, f = l.tail;
    l = l.children;
    var v = Ke.current, p = (v & 2) !== 0;
    if (p ? (v = v & 1 | 2, t.flags |= 128) : v &= 1, H(Ke, v), dt(e, t, l, r), l = ve ? xr : 0, !p && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Lh(e, r, t);
      else if (e.tag === 19) Lh(e, r, t);
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
    switch (s) {
      case "forwards":
        for (r = t.child, s = null; r !== null; ) e = r.alternate, e !== null && Pl(e) === null && (s = r), r = r.sibling;
        r = s, r === null ? (s = t.child, t.child = null) : (s = r.sibling, r.sibling = null), Ud(t, !1, s, r, f, l);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (r = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && Pl(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = r, r = s, s = e;
        }
        Ud(t, !0, r, null, f, l);
        break;
      case "together":
        Ud(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function jn(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies), oi |= t.lanes, (r & t.childLanes) === 0) if (e !== null) {
      if (ha(e, t, r, !1), (r & t.childLanes) === 0) return null;
    } else return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, r = En(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = En(e, e.pendingProps), r.return = t;
      r.sibling = null;
    }
    return t.child;
  }
  function Od(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Cl(e)));
  }
  function e4(e, t, r) {
    switch (t.tag) {
      case 3:
        bt(t, t.stateNode.containerInfo), ei(t, We, e.memoizedState.cache), Ui();
        break;
      case 27:
      case 5:
        fr(t);
        break;
      case 4:
        bt(t, t.stateNode.containerInfo);
        break;
      case 10:
        ei(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, td(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (ni(t), t.flags |= 128, null) : (r & t.child.childLanes) !== 0 ? Hh(e, t, r) : (ni(t), e = jn(e, t, r), e !== null ? e.sibling : null);
        ni(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (l = (r & t.childLanes) !== 0, l || (ha(e, t, r, !1), l = (r & t.childLanes) !== 0), s) {
          if (l) return Bh(e, t, r);
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), H(Ke, Ke.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Ah(e, t, r, t.pendingProps);
      case 24:
        ei(t, We, e.memoizedState.cache);
    }
    return jn(e, t, r);
  }
  function Jh(e, t, r) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps) tt = !0;
    else {
      if (!Od(e, r) && (t.flags & 128) === 0) return tt = !1, e4(e, t, r);
      tt = (e.flags & 131072) !== 0;
    }
    else tt = !1, ve && (t.flags & 1048576) !== 0 && Tg(t, xr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = Ni(t.elementType), t.type = e, typeof e == "function") As(e) ? (l = Mi(e, l), t.tag = 1, t = Mh(null, t, e, l, r)) : (t.tag = 0, t = zd(null, t, e, l, r));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === we) {
                t.tag = 11, t = Zh(null, t, e, l, r);
                break e;
              } else if (s === ge) {
                t.tag = 14, t = Nh(null, t, e, l, r);
                break e;
              }
            }
            throw t = dn(e) || e, Error(i(306, t, ""));
          }
        }
        return t;
      case 0:
        return zd(e, t, t.type, t.pendingProps, r);
      case 1:
        return l = t.type, s = Mi(l, t.pendingProps), Mh(e, t, l, s, r);
      case 3:
        e: {
          if (bt(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
          l = t.pendingProps;
          var f = t.memoizedState;
          s = f.element, Xs(e, t), Ar(t, l, null, r);
          var v = t.memoizedState;
          if (l = v.cache, ei(t, We, l), l !== f.cache && Js(t, [We], r, !0), jr(), l = v.element, f.isDehydrated) if (f = {
            element: l,
            isDehydrated: !1,
            cache: v.cache
          }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
            t = qh(e, t, l, r);
            break e;
          } else if (l !== s) {
            s = Wt(Error(i(424)), t), Er(s), t = qh(e, t, l, r);
            break e;
          } else
            for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Le = on(e.firstChild), ct = t, ve = !0, Fn = null, nn = !0, r = Cg(t, null, l, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
          else {
            if (Ui(), l === s) {
              t = jn(e, t, r);
              break e;
            }
            dt(e, t, l, r);
          }
          t = t.child;
        }
        return t;
      case 26:
        return iu(e, t), e === null ? (r = n_(t.type, null, t.pendingProps, null)) ? t.memoizedState = r : ve || (r = t.type, e = t.pendingProps, l = bu(ce.current).createElement(r), l[ut] = t, l[Tt] = e, ft(l, r, e), ot(l), t.stateNode = l) : t.memoizedState = n_(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
      case 27:
        return fr(t), e === null && ve && (l = t.stateNode = Wy(t.type, t.pendingProps, ce.current), ct = t, nn = !0, s = Le, di(t.type) ? (cf = s, Le = on(l.firstChild)) : Le = s), dt(e, t, t.pendingProps.children, r), iu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ve && ((s = l = Le) && (l = E4(l, t.type, t.pendingProps, nn), l !== null ? (t.stateNode = l, ct = t, Le = on(l.firstChild), nn = !1, s = !0) : s = !1), s || Wn(t)), fr(t), s = t.type, f = t.pendingProps, v = e !== null ? e.memoizedProps : null, l = f.children, af(s, f) ? l = null : v !== null && af(s, v) && (t.flags |= 32), t.memoizedState !== null && (s = id(e, t, L1, null, null, r), to._currentValue = s), iu(e, t), dt(e, t, l, r), t.child;
      case 6:
        return e === null && ve && ((e = r = Le) && (r = U4(r, t.pendingProps, nn), r !== null ? (t.stateNode = r, ct = t, Le = null, e = !0) : e = !1), e || Wn(t)), null;
      case 13:
        return Hh(e, t, r);
      case 4:
        return bt(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = Ai(t, null, l, r) : dt(e, t, l, r), t.child;
      case 11:
        return Zh(e, t, t.type, t.pendingProps, r);
      case 7:
        return dt(e, t, t.pendingProps, r), t.child;
      case 8:
        return dt(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return dt(e, t, t.pendingProps.children, r), t.child;
      case 10:
        return l = t.pendingProps, ei(t, t.type, l.value), dt(e, t, l.children, r), t.child;
      case 9:
        return s = t.type._context, l = t.pendingProps.children, Di(t), s = st(s), l = l(s), t.flags |= 1, dt(e, t, l, r), t.child;
      case 14:
        return Nh(e, t, t.type, t.pendingProps, r);
      case 15:
        return jh(e, t, t.type, t.pendingProps, r);
      case 19:
        return Bh(e, t, r);
      case 31:
        return W1(e, t, r);
      case 22:
        return Ah(e, t, r, t.pendingProps);
      case 24:
        return Di(t), l = st(We), e === null ? (s = Ys(), s === null && (s = Re, f = Gs(), s.pooledCache = f, f.refCount++, f !== null && (s.pooledCacheLanes |= r), s = f), t.memoizedState = {
          parent: l,
          cache: s
        }, Qs(t), ei(t, We, s)) : ((e.lanes & r) !== 0 && (Xs(e, t), Ar(t, null, null, r), jr()), s = e.memoizedState, f = t.memoizedState, s.parent !== l ? (s = {
          parent: l,
          cache: l
        }, t.memoizedState = s, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = s), ei(t, We, l)) : (l = f.cache, ei(t, We, l), l !== s.cache && Js(t, [We], r, !0))), dt(e, t, t.pendingProps.children, r), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function An(e) {
    e.flags |= 4;
  }
  function Dd(e, t, r, l, s) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (s & 335544128) === s) if (e.stateNode.complete) e.flags |= 8192;
      else if (hy()) e.flags |= 8192;
      else throw ji = Ll, Vs;
    } else e.flags &= -16777217;
  }
  function Gh(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !l_(t)) if (hy()) e.flags |= 8192;
    else throw ji = Ll, Vs;
  }
  function ru(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? wp() : 536870912, e.lanes |= t, Ua |= t);
  }
  function Hr(e, t) {
    if (!ve) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
        r === null ? e.tail = null : r.sibling = null;
        break;
      case "collapsed":
        r = e.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
    }
  }
  function Be(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, r = 0, l = 0;
    if (t) for (var s = e.child; s !== null; ) r |= s.lanes | s.childLanes, l |= s.subtreeFlags & 65011712, l |= s.flags & 65011712, s.return = e, s = s.sibling;
    else for (s = e.child; s !== null; ) r |= s.lanes | s.childLanes, l |= s.subtreeFlags, l |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= l, e.childLanes = r, t;
  }
  function t4(e, t, r) {
    var l = t.pendingProps;
    switch (Ms(t), t.tag) {
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
        return r = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Dn(We), Xe(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ga(t) ? An(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Hs())), Be(t), null;
      case 26:
        var s = t.type, f = t.memoizedState;
        return e === null ? (An(t), f !== null ? (Be(t), Gh(t, f)) : (Be(t), Dd(t, s, null, l, r))) : f ? f !== e.memoizedState ? (An(t), Be(t), Gh(t, f)) : (Be(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && An(t), Be(t), Dd(t, s, e, l, r)), null;
      case 27:
        if (pl(t), r = ce.current, s = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && An(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return Be(t), null;
          }
          e = Y.current, ga(t) ? xg(t, e) : (e = Wy(s, l, r), t.stateNode = e, An(t));
        }
        return Be(t), null;
      case 5:
        if (pl(t), s = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && An(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return Be(t), null;
          }
          if (f = Y.current, ga(t)) xg(t, f);
          else {
            var v = bu(ce.current);
            switch (f) {
              case 1:
                f = v.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                f = v.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    f = v.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    f = v.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                    break;
                  case "script":
                    f = v.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(f.firstChild);
                    break;
                  case "select":
                    f = typeof l.is == "string" ? v.createElement("select", { is: l.is }) : v.createElement("select"), l.multiple ? f.multiple = !0 : l.size && (f.size = l.size);
                    break;
                  default:
                    f = typeof l.is == "string" ? v.createElement(s, { is: l.is }) : v.createElement(s);
                }
            }
            f[ut] = t, f[Tt] = l;
            e: for (v = t.child; v !== null; ) {
              if (v.tag === 5 || v.tag === 6) f.appendChild(v.stateNode);
              else if (v.tag !== 4 && v.tag !== 27 && v.child !== null) {
                v.child.return = v, v = v.child;
                continue;
              }
              if (v === t) break e;
              for (; v.sibling === null; ) {
                if (v.return === null || v.return === t) break e;
                v = v.return;
              }
              v.sibling.return = v.return, v = v.sibling;
            }
            t.stateNode = f;
            e: switch (ft(f, s, l), s) {
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
            l && An(t);
          }
        }
        return Be(t), Dd(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, r), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && An(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(i(166));
          if (e = ce.current, ga(t)) {
            if (e = t.stateNode, r = t.memoizedProps, l = null, s = ct, s !== null) switch (s.tag) {
              case 27:
              case 5:
                l = s.memoizedProps;
            }
            e[ut] = t, e = !!(e.nodeValue === r || l !== null && l.suppressHydrationWarning === !0 || Ly(e.nodeValue, r)), e || Wn(t, !0);
          } else e = bu(e).createTextNode(l), e[ut] = t, t.stateNode = e;
        }
        return Be(t), null;
      case 31:
        if (r = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = ga(t), r !== null) {
            if (e === null) {
              if (!l) throw Error(i(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(557));
              e[ut] = t;
            } else Ui(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Be(t), e = !1;
          } else r = Hs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), e = !0;
          if (!e)
            return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
          if ((t.flags & 128) !== 0) throw Error(i(558));
        }
        return Be(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (s = ga(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(i(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(i(317));
              s[ut] = t;
            } else Ui(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Be(t), s = !1;
          } else s = Hs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return t.flags & 256 ? (Ht(t), t) : (Ht(t), null);
        }
        return Ht(t), (t.flags & 128) !== 0 ? (t.lanes = r, t) : (r = l !== null, e = e !== null && e.memoizedState !== null, r && (l = t.child, s = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (s = l.alternate.memoizedState.cachePool.pool), f = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (f = l.memoizedState.cachePool.pool), f !== s && (l.flags |= 2048)), r !== e && r && (t.child.flags |= 8192), ru(t, t.updateQueue), Be(t), null);
      case 4:
        return Xe(), e === null && Cy(t.stateNode.containerInfo), Be(t), null;
      case 10:
        return Dn(t.type), Be(t), null;
      case 19:
        if (R(Ke), l = t.memoizedState, l === null) return Be(t), null;
        if (s = (t.flags & 128) !== 0, f = l.rendering, f === null) if (s) Hr(l, !1);
        else {
          if (Ve !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (f = Pl(e), f !== null) {
              for (t.flags |= 128, Hr(l, !1), e = f.updateQueue, t.updateQueue = e, ru(t, e), t.subtreeFlags = 0, e = r, r = t.child; r !== null; ) $g(r, e), r = r.sibling;
              return H(Ke, Ke.current & 1 | 2), ve && Un(t, l.treeForkCount), t.child;
            }
            e = e.sibling;
          }
          l.tail !== null && At() > su && (t.flags |= 128, s = !0, Hr(l, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = Pl(f), e !== null) {
            if (t.flags |= 128, s = !0, e = e.updateQueue, t.updateQueue = e, ru(t, e), Hr(l, !0), l.tail === null && l.tailMode === "hidden" && !f.alternate && !ve) return Be(t), null;
          } else 2 * At() - l.renderingStartTime > su && r !== 536870912 && (t.flags |= 128, s = !0, Hr(l, !1), t.lanes = 4194304);
          l.isBackwards ? (f.sibling = t.child, t.child = f) : (e = l.last, e !== null ? e.sibling = f : t.child = f, l.last = f);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = At(), e.sibling = null, r = Ke.current, H(Ke, s ? r & 1 | 2 : r & 1), ve && Un(t, l.treeForkCount), e) : (Be(t), null);
      case 22:
      case 23:
        return Ht(t), ed(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (r & 536870912) !== 0 && (t.flags & 128) === 0 && (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Be(t), r = t.updateQueue, r !== null && ru(t, r.retryQueue), r = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== r && (t.flags |= 2048), e !== null && R(Zi), null;
      case 24:
        return r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), Dn(We), Be(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function n4(e, t) {
    switch (Ms(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Dn(We), Xe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return pl(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Ht(t), t.alternate === null) throw Error(i(340));
          Ui();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Ht(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          Ui();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return R(Ke), null;
      case 4:
        return Xe(), null;
      case 10:
        return Dn(t.type), null;
      case 22:
      case 23:
        return Ht(t), ed(), e !== null && R(Zi), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Dn(We), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ph(e, t) {
    switch (Ms(t), t.tag) {
      case 3:
        Dn(We), Xe();
        break;
      case 26:
      case 27:
      case 5:
        pl(t);
        break;
      case 4:
        Xe();
        break;
      case 31:
        t.memoizedState !== null && Ht(t);
        break;
      case 13:
        Ht(t);
        break;
      case 19:
        R(Ke);
        break;
      case 10:
        Dn(t.type);
        break;
      case 22:
      case 23:
        Ht(t), ed(), e !== null && R(Zi);
        break;
      case 24:
        Dn(We);
    }
  }
  function Lr(e, t) {
    try {
      var r = t.updateQueue, l = r !== null ? r.lastEffect : null;
      if (l !== null) {
        var s = l.next;
        r = s;
        do {
          if ((r.tag & e) === e) {
            l = void 0;
            var f = r.create, v = r.inst;
            l = f(), v.destroy = l;
          }
          r = r.next;
        } while (r !== s);
      }
    } catch (p) {
      Ee(t, t.return, p);
    }
  }
  function ai(e, t, r) {
    try {
      var l = t.updateQueue, s = l !== null ? l.lastEffect : null;
      if (s !== null) {
        var f = s.next;
        l = f;
        do {
          if ((l.tag & e) === e) {
            var v = l.inst, p = v.destroy;
            if (p !== void 0) {
              v.destroy = void 0, s = t;
              var _ = r, E = p;
              try {
                E();
              } catch (N) {
                Ee(s, _, N);
              }
            }
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (N) {
      Ee(t, t.return, N);
    }
  }
  function Yh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var r = e.stateNode;
      try {
        qg(t, r);
      } catch (l) {
        Ee(e, e.return, l);
      }
    }
  }
  function Vh(e, t, r) {
    r.props = Mi(e.type, e.memoizedProps), r.state = e.memoizedState;
    try {
      r.componentWillUnmount();
    } catch (l) {
      Ee(e, t, l);
    }
  }
  function Br(e, t) {
    try {
      var r = e.ref;
      if (r !== null) {
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
        typeof r == "function" ? e.refCleanup = r(l) : r.current = l;
      }
    } catch (s) {
      Ee(e, t, s);
    }
  }
  function Sn(e, t) {
    var r = e.ref, l = e.refCleanup;
    if (r !== null) if (typeof l == "function") try {
      l();
    } catch (s) {
      Ee(e, t, s);
    } finally {
      e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
    }
    else if (typeof r == "function") try {
      r(null);
    } catch (s) {
      Ee(e, t, s);
    }
    else r.current = null;
  }
  function Qh(e) {
    var t = e.type, r = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          r.autoFocus && l.focus();
          break e;
        case "img":
          r.src ? l.src = r.src : r.srcSet && (l.srcset = r.srcSet);
      }
    } catch (s) {
      Ee(e, e.return, s);
    }
  }
  function Zd(e, t, r) {
    try {
      var l = e.stateNode;
      $4(l, e.type, r, t), l[Tt] = t;
    } catch (s) {
      Ee(e, e.return, s);
    }
  }
  function Xh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && di(e.type) || e.tag === 4;
  }
  function Nd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Xh(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && di(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function jd(e, t, r) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(e, t) : (t = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r, t.appendChild(e), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = wn));
    else if (l !== 4 && (l === 27 && di(e.type) && (r = e.stateNode, t = null), e = e.child, e !== null)) for (jd(e, t, r), e = e.sibling; e !== null; ) jd(e, t, r), e = e.sibling;
  }
  function ou(e, t, r) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (l !== 4 && (l === 27 && di(e.type) && (r = e.stateNode), e = e.child, e !== null)) for (ou(e, t, r), e = e.sibling; e !== null; ) ou(e, t, r), e = e.sibling;
  }
  function Kh(e) {
    var t = e.stateNode, r = e.memoizedProps;
    try {
      for (var l = e.type, s = t.attributes; s.length; ) t.removeAttributeNode(s[0]);
      ft(t, l, r), t[ut] = e, t[Tt] = r;
    } catch (f) {
      Ee(e, e.return, f);
    }
  }
  var In = !1, nt = !1, Ad = !1, Fh = typeof WeakSet == "function" ? WeakSet : Set, lt = null;
  function i4(e, t) {
    if (e = e.containerInfo, tf = xu, e = mg(e), Es(e)) {
      if ("selectionStart" in e) var r = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
      else e: {
        r = (r = e.ownerDocument) && r.defaultView || window;
        var l = r.getSelection && r.getSelection();
        if (l && l.rangeCount !== 0) {
          r = l.anchorNode;
          var s = l.anchorOffset, f = l.focusNode;
          l = l.focusOffset;
          try {
            r.nodeType, f.nodeType;
          } catch {
            r = null;
            break e;
          }
          var v = 0, p = -1, _ = -1, E = 0, N = 0, A = e, O = null;
          t: for (; ; ) {
            for (var Z; A !== r || s !== 0 && A.nodeType !== 3 || (p = v + s), A !== f || l !== 0 && A.nodeType !== 3 || (_ = v + l), A.nodeType === 3 && (v += A.nodeValue.length), (Z = A.firstChild) !== null; )
              O = A, A = Z;
            for (; ; ) {
              if (A === e) break t;
              if (O === r && ++E === s && (p = v), O === f && ++N === l && (_ = v), (Z = A.nextSibling) !== null) break;
              A = O, O = A.parentNode;
            }
            A = Z;
          }
          r = p === -1 || _ === -1 ? null : {
            start: p,
            end: _
          };
        } else r = null;
      }
      r = r || {
        start: 0,
        end: 0
      };
    } else r = null;
    for (nf = {
      focusedElem: e,
      selectionRange: r
    }, xu = !1, lt = t; lt !== null; ) if (t = lt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, lt = e;
    else for (; lt !== null; ) {
      switch (t = lt, f = t.alternate, e = t.flags, t.tag) {
        case 0:
          if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null)) for (r = 0; r < e.length; r++) s = e[r], s.ref.impl = s.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((e & 1024) !== 0 && f !== null) {
            e = void 0, r = t, s = f.memoizedProps, f = f.memoizedState, l = r.stateNode;
            try {
              var G = Mi(r.type, s);
              e = l.getSnapshotBeforeUpdate(G, f), l.__reactInternalSnapshotBeforeUpdate = e;
            } catch (X) {
              Ee(r, r.return, X);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (e = t.stateNode.containerInfo, r = e.nodeType, r === 9) of(e);
            else if (r === 1) switch (e.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                of(e);
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
        e.return = t.return, lt = e;
        break;
      }
      lt = t.return;
    }
  }
  function Wh(e, t, r) {
    var l = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        Cn(e, r), l & 4 && Lr(5, r);
        break;
      case 1:
        if (Cn(e, r), l & 4) if (e = r.stateNode, t === null) try {
          e.componentDidMount();
        } catch (v) {
          Ee(r, r.return, v);
        }
        else {
          var s = Mi(r.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate);
          } catch (v) {
            Ee(r, r.return, v);
          }
        }
        l & 64 && Yh(r), l & 512 && Br(r, r.return);
        break;
      case 3:
        if (Cn(e, r), l & 64 && (e = r.updateQueue, e !== null)) {
          if (t = null, r.child !== null) switch (r.child.tag) {
            case 27:
            case 5:
              t = r.child.stateNode;
              break;
            case 1:
              t = r.child.stateNode;
          }
          try {
            qg(e, t);
          } catch (v) {
            Ee(r, r.return, v);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Kh(r);
      case 26:
      case 5:
        Cn(e, r), t === null && l & 4 && Qh(r), l & 512 && Br(r, r.return);
        break;
      case 12:
        Cn(e, r);
        break;
      case 31:
        Cn(e, r), l & 4 && ny(e, r);
        break;
      case 13:
        Cn(e, r), l & 4 && iy(e, r), l & 64 && (e = r.memoizedState, e !== null && (e = e.dehydrated, e !== null && (r = f4.bind(null, r), O4(e, r))));
        break;
      case 22:
        if (l = r.memoizedState !== null || In, !l) {
          t = t !== null && t.memoizedState !== null || nt, s = In;
          var f = nt;
          In = l, (nt = t) && !f ? Mn(e, r, (r.subtreeFlags & 8772) !== 0) : Cn(e, r), In = s, nt = f;
        }
        break;
      case 30:
        break;
      default:
        Cn(e, r);
    }
  }
  function ey(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ey(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ds(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Je = null, xt = !1;
  function Rn(e, t, r) {
    for (r = r.child; r !== null; ) ty(e, t, r), r = r.sibling;
  }
  function ty(e, t, r) {
    if (It && typeof It.onCommitFiberUnmount == "function") try {
      It.onCommitFiberUnmount(mr, r);
    } catch {
    }
    switch (r.tag) {
      case 26:
        nt || Sn(r, t), Rn(e, t, r), r.memoizedState ? r.memoizedState.count-- : r.stateNode && (r = r.stateNode, r.parentNode.removeChild(r));
        break;
      case 27:
        nt || Sn(r, t);
        var l = Je, s = xt;
        di(r.type) && (Je = r.stateNode, xt = !1), Rn(e, t, r), Fr(r.stateNode), Je = l, xt = s;
        break;
      case 5:
        nt || Sn(r, t);
      case 6:
        if (l = Je, s = xt, Je = null, Rn(e, t, r), Je = l, xt = s, Je !== null) if (xt) try {
          (Je.nodeType === 9 ? Je.body : Je.nodeName === "HTML" ? Je.ownerDocument.body : Je).removeChild(r.stateNode);
        } catch (f) {
          Ee(r, t, f);
        }
        else try {
          Je.removeChild(r.stateNode);
        } catch (f) {
          Ee(r, t, f);
        }
        break;
      case 18:
        Je !== null && (xt ? (e = Je, Vy(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, r.stateNode), Ra(e)) : Vy(Je, r.stateNode));
        break;
      case 4:
        l = Je, s = xt, Je = r.stateNode.containerInfo, xt = !0, Rn(e, t, r), Je = l, xt = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ai(2, r, t), nt || ai(4, r, t), Rn(e, t, r);
        break;
      case 1:
        nt || (Sn(r, t), l = r.stateNode, typeof l.componentWillUnmount == "function" && Vh(r, t, l)), Rn(e, t, r);
        break;
      case 21:
        Rn(e, t, r);
        break;
      case 22:
        nt = (l = nt) || r.memoizedState !== null, Rn(e, t, r), nt = l;
        break;
      default:
        Rn(e, t, r);
    }
  }
  function ny(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Ra(e);
      } catch (r) {
        Ee(t, t.return, r);
      }
    }
  }
  function iy(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      Ra(e);
    } catch (r) {
      Ee(t, t.return, r);
    }
  }
  function a4(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Fh()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Fh()), t;
      default:
        throw Error(i(435, e.tag));
    }
  }
  function lu(e, t) {
    var r = a4(e);
    t.forEach(function(l) {
      if (!r.has(l)) {
        r.add(l);
        var s = m4.bind(null, e, l);
        l.then(s, s);
      }
    });
  }
  function Et(e, t) {
    var r = t.deletions;
    if (r !== null) for (var l = 0; l < r.length; l++) {
      var s = r[l], f = e, v = t, p = v;
      e: for (; p !== null; ) {
        switch (p.tag) {
          case 27:
            if (di(p.type)) {
              Je = p.stateNode, xt = !1;
              break e;
            }
            break;
          case 5:
            Je = p.stateNode, xt = !1;
            break e;
          case 3:
          case 4:
            Je = p.stateNode.containerInfo, xt = !0;
            break e;
        }
        p = p.return;
      }
      if (Je === null) throw Error(i(160));
      ty(f, v, s), Je = null, xt = !1, f = s.alternate, f !== null && (f.return = null), s.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) ay(t, e), t = t.sibling;
  }
  var mn = null;
  function ay(e, t) {
    var r = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Et(t, e), Ut(e), l & 4 && (ai(3, e, e.return), Lr(3, e), ai(5, e, e.return));
        break;
      case 1:
        Et(t, e), Ut(e), l & 512 && (nt || r === null || Sn(r, r.return)), l & 64 && In && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (r = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = r === null ? l : r.concat(l))));
        break;
      case 26:
        var s = mn;
        if (Et(t, e), Ut(e), l & 512 && (nt || r === null || Sn(r, r.return)), l & 4) {
          var f = r !== null ? r.memoizedState : null;
          if (l = e.memoizedState, r === null) if (l === null) if (e.stateNode === null) {
            e: {
              l = e.type, r = e.memoizedProps, s = s.ownerDocument || s;
              t: switch (l) {
                case "title":
                  f = s.getElementsByTagName("title")[0], (!f || f[gr] || f[ut] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = s.createElement(l), s.head.insertBefore(f, s.querySelector("head > title"))), ft(f, l, r), f[ut] = e, ot(f), l = f;
                  break e;
                case "link":
                  var v = r_("link", "href", s).get(l + (r.href || ""));
                  if (v) {
                    for (var p = 0; p < v.length; p++) if (f = v[p], f.getAttribute("href") === (r.href == null || r.href === "" ? null : r.href) && f.getAttribute("rel") === (r.rel == null ? null : r.rel) && f.getAttribute("title") === (r.title == null ? null : r.title) && f.getAttribute("crossorigin") === (r.crossOrigin == null ? null : r.crossOrigin)) {
                      v.splice(p, 1);
                      break t;
                    }
                  }
                  f = s.createElement(l), ft(f, l, r), s.head.appendChild(f);
                  break;
                case "meta":
                  if (v = r_("meta", "content", s).get(l + (r.content || ""))) {
                    for (p = 0; p < v.length; p++) if (f = v[p], f.getAttribute("content") === (r.content == null ? null : "" + r.content) && f.getAttribute("name") === (r.name == null ? null : r.name) && f.getAttribute("property") === (r.property == null ? null : r.property) && f.getAttribute("http-equiv") === (r.httpEquiv == null ? null : r.httpEquiv) && f.getAttribute("charset") === (r.charSet == null ? null : r.charSet)) {
                      v.splice(p, 1);
                      break t;
                    }
                  }
                  f = s.createElement(l), ft(f, l, r), s.head.appendChild(f);
                  break;
                default:
                  throw Error(i(468, l));
              }
              f[ut] = e, ot(f), l = f;
            }
            e.stateNode = l;
          } else o_(s, e.type, e.stateNode);
          else e.stateNode = a_(s, l, e.memoizedProps);
          else f !== l ? (f === null ? r.stateNode !== null && (r = r.stateNode, r.parentNode.removeChild(r)) : f.count--, l === null ? o_(s, e.type, e.stateNode) : a_(s, l, e.memoizedProps)) : l === null && e.stateNode !== null && Zd(e, e.memoizedProps, r.memoizedProps);
        }
        break;
      case 27:
        Et(t, e), Ut(e), l & 512 && (nt || r === null || Sn(r, r.return)), r !== null && l & 4 && Zd(e, e.memoizedProps, r.memoizedProps);
        break;
      case 5:
        if (Et(t, e), Ut(e), l & 512 && (nt || r === null || Sn(r, r.return)), e.flags & 32) {
          s = e.stateNode;
          try {
            oa(s, "");
          } catch (G) {
            Ee(e, e.return, G);
          }
        }
        l & 4 && e.stateNode != null && (s = e.memoizedProps, Zd(e, s, r !== null ? r.memoizedProps : s)), l & 1024 && (Ad = !0);
        break;
      case 6:
        if (Et(t, e), Ut(e), l & 4) {
          if (e.stateNode === null) throw Error(i(162));
          l = e.memoizedProps, r = e.stateNode;
          try {
            r.nodeValue = l;
          } catch (G) {
            Ee(e, e.return, G);
          }
        }
        break;
      case 3:
        if (zu = null, s = mn, mn = Su(t.containerInfo), Et(t, e), mn = s, Ut(e), l & 4 && r !== null && r.memoizedState.isDehydrated) try {
          Ra(t.containerInfo);
        } catch (G) {
          Ee(e, e.return, G);
        }
        Ad && (Ad = !1, ry(e));
        break;
      case 4:
        l = mn, mn = Su(e.stateNode.containerInfo), Et(t, e), Ut(e), mn = l;
        break;
      case 12:
        Et(t, e), Ut(e);
        break;
      case 31:
        Et(t, e), Ut(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, lu(e, l)));
        break;
      case 13:
        Et(t, e), Ut(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (cu = At()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, lu(e, l)));
        break;
      case 22:
        s = e.memoizedState !== null;
        var _ = r !== null && r.memoizedState !== null, E = In, N = nt;
        if (In = E || s, nt = N || _, Et(t, e), nt = N, In = E, Ut(e), l & 8192) e: for (t = e.stateNode, t._visibility = s ? t._visibility & -2 : t._visibility | 1, s && (r === null || _ || In || nt || qi(e)), r = null, t = e; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (r === null) {
              _ = r = t;
              try {
                if (f = _.stateNode, s) v = f.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
                else {
                  p = _.stateNode;
                  var A = _.memoizedProps.style, O = A != null && A.hasOwnProperty("display") ? A.display : null;
                  p.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                }
              } catch (G) {
                Ee(_, _.return, G);
              }
            }
          } else if (t.tag === 6) {
            if (r === null) {
              _ = t;
              try {
                _.stateNode.nodeValue = s ? "" : _.memoizedProps;
              } catch (G) {
                Ee(_, _.return, G);
              }
            }
          } else if (t.tag === 18) {
            if (r === null) {
              _ = t;
              try {
                var Z = _.stateNode;
                s ? Qy(Z, !0) : Qy(_.stateNode, !1);
              } catch (G) {
                Ee(_, _.return, G);
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === e) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break e;
            r === t && (r = null), t = t.return;
          }
          r === t && (r = null), t.sibling.return = t.return, t = t.sibling;
        }
        l & 4 && (l = e.updateQueue, l !== null && (r = l.retryQueue, r !== null && (l.retryQueue = null, lu(e, r))));
        break;
      case 19:
        Et(t, e), Ut(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, lu(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Et(t, e), Ut(e);
    }
  }
  function Ut(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var r, l = e.return; l !== null; ) {
          if (Xh(l)) {
            r = l;
            break;
          }
          l = l.return;
        }
        if (r == null) throw Error(i(160));
        switch (r.tag) {
          case 27:
            var s = r.stateNode;
            ou(e, Nd(e), s);
            break;
          case 5:
            var f = r.stateNode;
            r.flags & 32 && (oa(f, ""), r.flags &= -33), ou(e, Nd(e), f);
            break;
          case 3:
          case 4:
            var v = r.stateNode.containerInfo;
            jd(e, Nd(e), v);
            break;
          default:
            throw Error(i(161));
        }
      } catch (p) {
        Ee(e, e.return, p);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ry(e) {
    if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
      var t = e;
      ry(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
    }
  }
  function Cn(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) Wh(e, t.alternate, t), t = t.sibling;
  }
  function qi(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ai(4, t, t.return), qi(t);
          break;
        case 1:
          Sn(t, t.return);
          var r = t.stateNode;
          typeof r.componentWillUnmount == "function" && Vh(t, t.return, r), qi(t);
          break;
        case 27:
          Fr(t.stateNode);
        case 26:
        case 5:
          Sn(t, t.return), qi(t);
          break;
        case 22:
          t.memoizedState === null && qi(t);
          break;
        case 30:
          qi(t);
          break;
        default:
          qi(t);
      }
      e = e.sibling;
    }
  }
  function Mn(e, t, r) {
    for (r = r && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, s = e, f = t, v = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Mn(s, f, r), Lr(4, f);
          break;
        case 1:
          if (Mn(s, f, r), l = f, s = l.stateNode, typeof s.componentDidMount == "function") try {
            s.componentDidMount();
          } catch (E) {
            Ee(l, l.return, E);
          }
          if (l = f, s = l.updateQueue, s !== null) {
            var p = l.stateNode;
            try {
              var _ = s.shared.hiddenCallbacks;
              if (_ !== null) for (s.shared.hiddenCallbacks = null, s = 0; s < _.length; s++) Mg(_[s], p);
            } catch (E) {
              Ee(l, l.return, E);
            }
          }
          r && v & 64 && Yh(f), Br(f, f.return);
          break;
        case 27:
          Kh(f);
        case 26:
        case 5:
          Mn(s, f, r), r && l === null && v & 4 && Qh(f), Br(f, f.return);
          break;
        case 12:
          Mn(s, f, r);
          break;
        case 31:
          Mn(s, f, r), r && v & 4 && ny(s, f);
          break;
        case 13:
          Mn(s, f, r), r && v & 4 && iy(s, f);
          break;
        case 22:
          f.memoizedState === null && Mn(s, f, r), Br(f, f.return);
          break;
        case 30:
          break;
        default:
          Mn(s, f, r);
      }
      t = t.sibling;
    }
  }
  function Id(e, t) {
    var r = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== r && (e != null && e.refCount++, r != null && Ur(r));
  }
  function Rd(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ur(e));
  }
  function vn(e, t, r, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) oy(e, t, r, l), t = t.sibling;
  }
  function oy(e, t, r, l) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        vn(e, t, r, l), s & 2048 && Lr(9, t);
        break;
      case 1:
        vn(e, t, r, l);
        break;
      case 3:
        vn(e, t, r, l), s & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ur(e)));
        break;
      case 12:
        if (s & 2048) {
          vn(e, t, r, l), e = t.stateNode;
          try {
            var f = t.memoizedProps, v = f.id, p = f.onPostCommit;
            typeof p == "function" && p(v, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (_) {
            Ee(t, t.return, _);
          }
        } else vn(e, t, r, l);
        break;
      case 31:
        vn(e, t, r, l);
        break;
      case 13:
        vn(e, t, r, l);
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, v = t.alternate, t.memoizedState !== null ? f._visibility & 2 ? vn(e, t, r, l) : Jr(e, t) : f._visibility & 2 ? vn(e, t, r, l) : (f._visibility |= 2, wa(e, t, r, l, (t.subtreeFlags & 10256) !== 0 || !1)), s & 2048 && Id(v, t);
        break;
      case 24:
        vn(e, t, r, l), s & 2048 && Rd(t.alternate, t);
        break;
      default:
        vn(e, t, r, l);
    }
  }
  function wa(e, t, r, l, s) {
    for (s = s && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var f = e, v = t, p = r, _ = l, E = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          wa(f, v, p, _, s), Lr(8, v);
          break;
        case 23:
          break;
        case 22:
          var N = v.stateNode;
          v.memoizedState !== null ? N._visibility & 2 ? wa(f, v, p, _, s) : Jr(f, v) : (N._visibility |= 2, wa(f, v, p, _, s)), s && E & 2048 && Id(v.alternate, v);
          break;
        case 24:
          wa(f, v, p, _, s), s && E & 2048 && Rd(v.alternate, v);
          break;
        default:
          wa(f, v, p, _, s);
      }
      t = t.sibling;
    }
  }
  function Jr(e, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var r = e, l = t, s = l.flags;
      switch (l.tag) {
        case 22:
          Jr(r, l), s & 2048 && Id(l.alternate, l);
          break;
        case 24:
          Jr(r, l), s & 2048 && Rd(l.alternate, l);
          break;
        default:
          Jr(r, l);
      }
      t = t.sibling;
    }
  }
  var Gr = 8192;
  function xa(e, t, r) {
    if (e.subtreeFlags & Gr) for (e = e.child; e !== null; ) ly(e, t, r), e = e.sibling;
  }
  function ly(e, t, r) {
    switch (e.tag) {
      case 26:
        xa(e, t, r), e.flags & Gr && e.memoizedState !== null && L4(r, mn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        xa(e, t, r);
        break;
      case 3:
      case 4:
        var l = mn;
        mn = Su(e.stateNode.containerInfo), xa(e, t, r), mn = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Gr, Gr = 16777216, xa(e, t, r), Gr = l) : xa(e, t, r));
        break;
      default:
        xa(e, t, r);
    }
  }
  function uy(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Pr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var r = 0; r < t.length; r++) {
        var l = t[r];
        lt = l, sy(l, e);
      }
      uy(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) cy(e), e = e.sibling;
  }
  function cy(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Pr(e), e.flags & 2048 && ai(9, e, e.return);
        break;
      case 3:
        Pr(e);
        break;
      case 12:
        Pr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, uu(e)) : Pr(e);
        break;
      default:
        Pr(e);
    }
  }
  function uu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var r = 0; r < t.length; r++) {
        var l = t[r];
        lt = l, sy(l, e);
      }
      uy(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          ai(8, t, t.return), uu(t);
          break;
        case 22:
          r = t.stateNode, r._visibility & 2 && (r._visibility &= -3, uu(t));
          break;
        default:
          uu(t);
      }
      e = e.sibling;
    }
  }
  function sy(e, t) {
    for (; lt !== null; ) {
      var r = lt;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          ai(8, r, t);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var l = r.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Ur(r.memoizedState.cache);
      }
      if (l = r.child, l !== null) l.return = r, lt = l;
      else e: for (r = e; lt !== null; ) {
        l = lt;
        var s = l.sibling, f = l.return;
        if (ey(l), l === r) {
          lt = null;
          break e;
        }
        if (s !== null) {
          s.return = f, lt = s;
          break e;
        }
        lt = f;
      }
    }
  }
  var r4 = {
    getCacheForType: function(e) {
      var t = st(We), r = t.data.get(e);
      return r === void 0 && (r = e(), t.data.set(e, r)), r;
    },
    cacheSignal: function() {
      return st(We).controller.signal;
    }
  }, o4 = typeof WeakMap == "function" ? WeakMap : Map, $e = 0, Re = null, se = null, fe = 0, xe = 0, Lt = null, ri = !1, Ea = !1, Cd = !1, qn = 0, Ve = 0, oi = 0, Hi = 0, Md = 0, Bt = 0, Ua = 0, Yr = null, Ot = null, qd = !1, cu = 0, dy = 0, su = 1 / 0, du = null, li = null, it = 0, ui = null, Oa = null, Hn = 0, Hd = 0, Ld = null, fy = null, Vr = 0, Bd = null;
  function rn() {
    return ($e & 2) !== 0 && fe !== 0 ? fe & -fe : M.T !== null ? Qd() : Dp();
  }
  function my() {
    if (Bt === 0) if ((fe & 536870912) === 0 || ve) {
      var e = yl;
      yl <<= 1, (yl & 3932160) === 0 && (yl = 262144), Bt = e;
    } else Bt = 536870912;
    return e = qt.current, e !== null && (e.flags |= 32), Bt;
  }
  function Dt(e, t, r) {
    (e === Re && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) && (Da(e, 0), ci(e, fe, Bt, !1)), Sl(e, r), (($e & 2) === 0 || e !== Re) && (e === Re && (($e & 2) === 0 && (Hi |= r), Ve === 4 && ci(e, fe, Bt, !1)), Ln(e));
  }
  function vy(e, t, r) {
    if (($e & 6) !== 0) throw Error(i(327));
    var l = !r && (t & 127) === 0 && (t & e.expiredLanes) === 0 || vr(e, t), s = l ? c4(e, t) : Gd(e, t, !0), f = l;
    do {
      if (s === 0) {
        Ea && !l && ci(e, t, 0, !1);
        break;
      } else {
        if (r = e.current.alternate, f && !l4(r)) {
          s = Gd(e, t, !1), f = !1;
          continue;
        }
        if (s === 2) {
          if (f = t, e.errorRecoveryDisabledLanes & f) var v = 0;
          else v = e.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
          if (v !== 0) {
            t = v;
            e: {
              var p = e;
              s = Yr;
              var _ = p.current.memoizedState.isDehydrated;
              if (_ && (Da(p, v).flags |= 256), v = Gd(p, v, !1), v !== 2) {
                if (Cd && !_) {
                  p.errorRecoveryDisabledLanes |= f, Hi |= f, s = 4;
                  break e;
                }
                f = Ot, Ot = s, f !== null && (Ot === null ? Ot = f : Ot.push.apply(Ot, f));
              }
              s = v;
            }
            if (f = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Da(e, 0), ci(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, f = s, f) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ci(l, t, Bt, !ri);
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
          if ((t & 62914560) === t && (s = cu + 300 - At(), 10 < s)) {
            if (ci(l, t, Bt, !ri), bl(l, 0, !0) !== 0) break e;
            Hn = t, l.timeoutHandle = Py(py.bind(null, l, r, Ot, du, qd, t, Bt, Hi, Ua, ri, f, "Throttled", -0, 0), s);
            break e;
          }
          py(l, r, Ot, du, qd, t, Bt, Hi, Ua, ri, f, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ln(e);
  }
  function py(e, t, r, l, s, f, v, p, _, E, N, A, O, Z) {
    if (e.timeoutHandle = -1, A = t.subtreeFlags, A & 8192 || (A & 16785408) === 16785408) {
      A = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: wn
      }, ly(t, f, A);
      var G = (f & 62914560) === f ? cu - At() : (f & 4194048) === f ? dy - At() : 0;
      if (G = B4(A, G), G !== null) {
        Hn = f, e.cancelPendingCommit = G(zy.bind(null, e, t, f, r, l, s, v, p, _, N, A, null, O, Z)), ci(e, f, v, !E);
        return;
      }
    }
    zy(e, t, f, r, l, s, v, p, _);
  }
  function l4(e) {
    for (var t = e; ; ) {
      var r = t.tag;
      if ((r === 0 || r === 11 || r === 15) && t.flags & 16384 && (r = t.updateQueue, r !== null && (r = r.stores, r !== null))) for (var l = 0; l < r.length; l++) {
        var s = r[l], f = s.getSnapshot;
        s = s.value;
        try {
          if (!Ct(f(), s)) return !1;
        } catch {
          return !1;
        }
      }
      if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
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
  function ci(e, t, r, l) {
    t &= ~Md, t &= ~Hi, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var s = t; 0 < s; ) {
      var f = 31 - Rt(s), v = 1 << f;
      l[f] = -1, s &= ~v;
    }
    r !== 0 && xp(e, r, t);
  }
  function fu() {
    return ($e & 6) === 0 ? (Qr(0, !1), !1) : !0;
  }
  function Jd() {
    if (se !== null) {
      if (xe === 0) var e = se.return;
      else e = se, On = Oi = null, od(e), Sa = null, Dr = 0, e = se;
      for (; e !== null; ) Ph(e.alternate, e), e = e.return;
      se = null;
    }
  }
  function Da(e, t) {
    var r = e.timeoutHandle;
    r !== -1 && (e.timeoutHandle = -1, T4(r)), r = e.cancelPendingCommit, r !== null && (e.cancelPendingCommit = null, r()), Hn = 0, Jd(), Re = e, se = r = En(e.current, null), fe = t, xe = 0, Lt = null, ri = !1, Ea = vr(e, t), Cd = !1, Ua = Bt = Md = Hi = oi = Ve = 0, Ot = Yr = null, qd = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0) for (e = e.entanglements, l &= t; 0 < l; ) {
      var s = 31 - Rt(l), f = 1 << s;
      t |= e[s], l &= ~f;
    }
    return qn = t, Nl(), r;
  }
  function gy(e, t) {
    ie = null, M.H = Mr, t === ba || t === Hl ? (t = Ag(), xe = 3) : t === Vs ? (t = Ag(), xe = 4) : xe = t === $d ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Lt = t, se === null && (Ve = 1, tu(e, Wt(t, e.current)));
  }
  function hy() {
    var e = qt.current;
    return e === null ? !0 : (fe & 4194048) === fe ? an === null : (fe & 62914560) === fe || (fe & 536870912) !== 0 ? e === an : !1;
  }
  function yy() {
    var e = M.H;
    return M.H = Mr, e === null ? Mr : e;
  }
  function _y() {
    var e = M.A;
    return M.A = r4, e;
  }
  function mu() {
    Ve = 4, ri || (fe & 4194048) !== fe && qt.current !== null || (Ea = !0), (oi & 134217727) === 0 && (Hi & 134217727) === 0 || Re === null || ci(Re, fe, Bt, !1);
  }
  function Gd(e, t, r) {
    var l = $e;
    $e |= 2;
    var s = yy(), f = _y();
    (Re !== e || fe !== t) && (du = null, Da(e, t)), t = !1;
    var v = Ve;
    e: do
      try {
        if (xe !== 0 && se !== null) {
          var p = se, _ = Lt;
          switch (xe) {
            case 8:
              Jd(), v = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              qt.current === null && (t = !0);
              var E = xe;
              if (xe = 0, Lt = null, Za(e, p, _, E), r && Ea) {
                v = 0;
                break e;
              }
              break;
            default:
              E = xe, xe = 0, Lt = null, Za(e, p, _, E);
          }
        }
        u4(), v = Ve;
        break;
      } catch (N) {
        gy(e, N);
      }
    while (!0);
    return t && e.shellSuspendCounter++, On = Oi = null, $e = l, M.H = s, M.A = f, se === null && (Re = null, fe = 0, Nl()), v;
  }
  function u4() {
    for (; se !== null; ) by(se);
  }
  function c4(e, t) {
    var r = $e;
    $e |= 2;
    var l = yy(), s = _y();
    Re !== e || fe !== t ? (du = null, su = At() + 500, Da(e, t)) : Ea = vr(e, t);
    e: do
      try {
        if (xe !== 0 && se !== null) {
          t = se;
          var f = Lt;
          t: switch (xe) {
            case 1:
              xe = 0, Lt = null, Za(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (Ng(f)) {
                xe = 0, Lt = null, Sy(t);
                break;
              }
              t = function() {
                xe !== 2 && xe !== 9 || Re !== e || (xe = 7), Ln(e);
              }, f.then(t, t);
              break e;
            case 3:
              xe = 7;
              break e;
            case 4:
              xe = 5;
              break e;
            case 7:
              Ng(f) ? (xe = 0, Lt = null, Sy(t)) : (xe = 0, Lt = null, Za(e, t, f, 7));
              break;
            case 5:
              var v = null;
              switch (se.tag) {
                case 26:
                  v = se.memoizedState;
                case 5:
                case 27:
                  var p = se;
                  if (v ? l_(v) : p.stateNode.complete) {
                    xe = 0, Lt = null;
                    var _ = p.sibling;
                    if (_ !== null) se = _;
                    else {
                      var E = p.return;
                      E !== null ? (se = E, vu(E)) : se = null;
                    }
                    break t;
                  }
              }
              xe = 0, Lt = null, Za(e, t, f, 5);
              break;
            case 6:
              xe = 0, Lt = null, Za(e, t, f, 6);
              break;
            case 8:
              Jd(), Ve = 6;
              break e;
            default:
              throw Error(i(462));
          }
        }
        s4();
        break;
      } catch (N) {
        gy(e, N);
      }
    while (!0);
    return On = Oi = null, M.H = l, M.A = s, $e = r, se !== null ? 0 : (Re = null, fe = 0, Nl(), Ve);
  }
  function s4() {
    for (; se !== null && !Hz(); ) by(se);
  }
  function by(e) {
    var t = Jh(e.alternate, e, qn);
    e.memoizedProps = e.pendingProps, t === null ? vu(e) : se = t;
  }
  function Sy(e) {
    var t = e, r = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ch(r, t, t.pendingProps, t.type, void 0, fe);
        break;
      case 11:
        t = Ch(r, t, t.pendingProps, t.type.render, t.ref, fe);
        break;
      case 5:
        od(t);
      default:
        Ph(r, t), t = se = $g(t, qn), t = Jh(r, t, qn);
    }
    e.memoizedProps = e.pendingProps, t === null ? vu(e) : se = t;
  }
  function Za(e, t, r, l) {
    On = Oi = null, od(t), Sa = null, Dr = 0;
    var s = t.return;
    try {
      if (F1(e, s, t, r, fe)) {
        Ve = 1, tu(e, Wt(r, e.current)), se = null;
        return;
      }
    } catch (f) {
      if (s !== null) throw se = s, f;
      Ve = 1, tu(e, Wt(r, e.current)), se = null;
      return;
    }
    t.flags & 32768 ? (ve || l === 1 ? e = !0 : Ea || (fe & 536870912) !== 0 ? e = !1 : (ri = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = qt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), $y(t, e)) : vu(t);
  }
  function vu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        $y(t, ri);
        return;
      }
      e = t.return;
      var r = t4(t.alternate, t, qn);
      if (r !== null) {
        se = r;
        return;
      }
      if (t = t.sibling, t !== null) {
        se = t;
        return;
      }
      se = t = e;
    } while (t !== null);
    Ve === 0 && (Ve = 5);
  }
  function $y(e, t) {
    do {
      var r = n4(e.alternate, e);
      if (r !== null) {
        r.flags &= 32767, se = r;
        return;
      }
      if (r = e.return, r !== null && (r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null), !t && (e = e.sibling, e !== null)) {
        se = e;
        return;
      }
      se = e = r;
    } while (e !== null);
    Ve = 6, se = null;
  }
  function zy(e, t, r, l, s, f, v, p, _) {
    e.cancelPendingCommit = null;
    do
      pu();
    while (it !== 0);
    if (($e & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (f = t.lanes | t.childLanes, f |= Ns, Kz(e, r, f, v, p, _), e === Re && (se = Re = null, fe = 0), Oa = t, ui = e, Hn = r, Hd = f, Ld = s, fy = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, v4(gl, function() {
        return Ey(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null, s = L.p, L.p = 2, v = $e, $e |= 4;
        try {
          i4(e, t, r);
        } finally {
          $e = v, L.p = s, M.T = l;
        }
      }
      it = 1, ky(), Ty(), wy();
    }
  }
  function ky() {
    if (it === 1) {
      it = 0;
      var e = ui, t = Oa, r = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || r) {
        r = M.T, M.T = null;
        var l = L.p;
        L.p = 2;
        var s = $e;
        $e |= 4;
        try {
          ay(t, e);
          var f = nf, v = mg(e.containerInfo), p = f.focusedElem, _ = f.selectionRange;
          if (v !== p && p && p.ownerDocument && fg(p.ownerDocument.documentElement, p)) {
            if (_ !== null && Es(p)) {
              var E = _.start, N = _.end;
              if (N === void 0 && (N = E), "selectionStart" in p) p.selectionStart = E, p.selectionEnd = Math.min(N, p.value.length);
              else {
                var A = p.ownerDocument || document, O = A && A.defaultView || window;
                if (O.getSelection) {
                  var Z = O.getSelection(), G = p.textContent.length, X = Math.min(_.start, G), Ze = _.end === void 0 ? X : Math.min(_.end, G);
                  !Z.extend && X > Ze && (v = Ze, Ze = X, X = v);
                  var $ = dg(p, X), b = dg(p, Ze);
                  if ($ && b && (Z.rangeCount !== 1 || Z.anchorNode !== $.node || Z.anchorOffset !== $.offset || Z.focusNode !== b.node || Z.focusOffset !== b.offset)) {
                    var x = A.createRange();
                    x.setStart($.node, $.offset), Z.removeAllRanges(), X > Ze ? (Z.addRange(x), Z.extend(b.node, b.offset)) : (x.setEnd(b.node, b.offset), Z.addRange(x));
                  }
                }
              }
            }
            for (A = [], Z = p; Z = Z.parentNode; ) Z.nodeType === 1 && A.push({
              element: Z,
              left: Z.scrollLeft,
              top: Z.scrollTop
            });
            for (typeof p.focus == "function" && p.focus(), p = 0; p < A.length; p++) {
              var j = A[p];
              j.element.scrollLeft = j.left, j.element.scrollTop = j.top;
            }
          }
          xu = !!tf, nf = tf = null;
        } finally {
          $e = s, L.p = l, M.T = r;
        }
      }
      e.current = t, it = 2;
    }
  }
  function Ty() {
    if (it === 2) {
      it = 0;
      var e = ui, t = Oa, r = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || r) {
        r = M.T, M.T = null;
        var l = L.p;
        L.p = 2;
        var s = $e;
        $e |= 4;
        try {
          Wh(e, t.alternate, t);
        } finally {
          $e = s, L.p = l, M.T = r;
        }
      }
      it = 3;
    }
  }
  function wy() {
    if (it === 4 || it === 3) {
      it = 0, Lz();
      var e = ui, t = Oa, r = Hn, l = fy;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? it = 5 : (it = 0, Oa = ui = null, xy(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (s === 0 && (li = null), cs(r), t = t.stateNode, It && typeof It.onCommitFiberRoot == "function") try {
        It.onCommitFiberRoot(mr, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (l !== null) {
        t = M.T, s = L.p, L.p = 2, M.T = null;
        try {
          for (var f = e.onRecoverableError, v = 0; v < l.length; v++) {
            var p = l[v];
            f(p.value, { componentStack: p.stack });
          }
        } finally {
          M.T = t, L.p = s;
        }
      }
      (Hn & 3) !== 0 && pu(), Ln(e), s = e.pendingLanes, (r & 261930) !== 0 && (s & 42) !== 0 ? e === Bd ? Vr++ : (Vr = 0, Bd = e) : Vr = 0, Qr(0, !1);
    }
  }
  function xy(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ur(t)));
  }
  function pu() {
    return ky(), Ty(), wy(), Ey();
  }
  function Ey() {
    if (it !== 5) return !1;
    var e = ui, t = Hd;
    Hd = 0;
    var r = cs(Hn), l = M.T, s = L.p;
    try {
      L.p = 32 > r ? 32 : r, M.T = null, r = Ld, Ld = null;
      var f = ui, v = Hn;
      if (it = 0, Oa = ui = null, Hn = 0, ($e & 6) !== 0) throw Error(i(331));
      var p = $e;
      if ($e |= 4, cy(f.current), oy(f, f.current, v, r), $e = p, Qr(0, !1), It && typeof It.onPostCommitFiberRoot == "function") try {
        It.onPostCommitFiberRoot(mr, f);
      } catch {
      }
      return !0;
    } finally {
      L.p = s, M.T = l, xy(e, t);
    }
  }
  function Uy(e, t, r) {
    t = Wt(r, t), t = Sd(e.stateNode, t, 2), e = Ri(e, t, 2), e !== null && (Sl(e, 2), Ln(e));
  }
  function Ee(e, t, r) {
    if (e.tag === 3) Uy(e, e, r);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Uy(t, e, r);
        break;
      } else if (t.tag === 1) {
        var l = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (li === null || !li.has(l))) {
          e = Wt(r, e), r = Oh(2), l = Ri(t, r, 2), l !== null && (Dh(r, l, t, e), Sl(l, 2), Ln(l));
          break;
        }
      }
      t = t.return;
    }
  }
  function Pd(e, t, r) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new o4();
      var s = /* @__PURE__ */ new Set();
      l.set(t, s);
    } else s = l.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), l.set(t, s));
    s.has(r) || (Cd = !0, s.add(r), e = d4.bind(null, e, t, r), t.then(e, e));
  }
  function d4(e, t, r) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & r, e.warmLanes &= ~r, Re === e && (fe & r) === r && (Ve === 4 || Ve === 3 && (fe & 62914560) === fe && 300 > At() - cu ? ($e & 2) === 0 && Da(e, 0) : Md |= r, Ua === fe && (Ua = 0)), Ln(e);
  }
  function Oy(e, t) {
    t === 0 && (t = wp()), e = xi(e, t), e !== null && (Sl(e, t), Ln(e));
  }
  function f4(e) {
    var t = e.memoizedState, r = 0;
    t !== null && (r = t.retryLane), Oy(e, r);
  }
  function m4(e, t) {
    var r = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, s = e.memoizedState;
        s !== null && (r = s.retryLane);
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
    l !== null && l.delete(t), Oy(e, r);
  }
  function v4(e, t) {
    return os(e, t);
  }
  var gu = null, Na = null, Yd = !1, hu = !1, Vd = !1, si = 0;
  function Ln(e) {
    e !== Na && e.next === null && (Na === null ? gu = Na = e : Na = Na.next = e), hu = !0, Yd || (Yd = !0, g4());
  }
  function Qr(e, t) {
    if (!Vd && hu) {
      Vd = !0;
      do
        for (var r = !1, l = gu; l !== null; ) {
          if (!t) if (e !== 0) {
            var s = l.pendingLanes;
            if (s === 0) var f = 0;
            else {
              var v = l.suspendedLanes, p = l.pingedLanes;
              f = (1 << 31 - Rt(42 | e) + 1) - 1, f &= s & ~(v & ~p), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (r = !0, jy(l, f));
          } else f = fe, f = bl(l, l === Re ? f : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (f & 3) === 0 || vr(l, f) || (r = !0, jy(l, f));
          l = l.next;
        }
      while (r);
      Vd = !1;
    }
  }
  function p4() {
    Dy();
  }
  function Dy() {
    hu = Yd = !1;
    var e = 0;
    si !== 0 && k4() && (e = si);
    for (var t = At(), r = null, l = gu; l !== null; ) {
      var s = l.next, f = Zy(l, t);
      f === 0 ? (l.next = null, r === null ? gu = s : r.next = s, s === null && (Na = r)) : (r = l, (e !== 0 || (f & 3) !== 0) && (hu = !0)), l = s;
    }
    it !== 0 && it !== 5 || Qr(e, !1), si !== 0 && (si = 0);
  }
  function Zy(e, t) {
    for (var r = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var v = 31 - Rt(f), p = 1 << v, _ = s[v];
      _ === -1 ? ((p & r) === 0 || (p & l) !== 0) && (s[v] = Xz(p, t)) : _ <= t && (e.expiredLanes |= p), f &= ~p;
    }
    if (t = Re, r = fe, r = bl(e, e === t ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l = e.callbackNode, r === 0 || e === t && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) return l !== null && l !== null && ls(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((r & 3) === 0 || vr(e, r)) {
      if (t = r & -r, t === e.callbackPriority) return t;
      switch (l !== null && ls(l), cs(r)) {
        case 2:
        case 8:
          r = kp;
          break;
        case 32:
          r = gl;
          break;
        case 268435456:
          r = Tp;
          break;
        default:
          r = gl;
      }
      return l = Ny.bind(null, e), r = os(r, l), e.callbackPriority = t, e.callbackNode = r, t;
    }
    return l !== null && l !== null && ls(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Ny(e, t) {
    if (it !== 0 && it !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var r = e.callbackNode;
    if (pu() && e.callbackNode !== r) return null;
    var l = fe;
    return l = bl(e, e === Re ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l === 0 ? null : (vy(e, l, t), Zy(e, At()), e.callbackNode != null && e.callbackNode === r ? Ny.bind(null, e) : null);
  }
  function jy(e, t) {
    if (pu()) return null;
    vy(e, t, !0);
  }
  function g4() {
    w4(function() {
      ($e & 6) !== 0 ? os(zp, p4) : Dy();
    });
  }
  function Qd() {
    if (si === 0) {
      var e = ya;
      e === 0 && (e = hl, hl <<= 1, (hl & 261888) === 0 && (hl = 256)), si = e;
    }
    return si;
  }
  function Ay(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Tl("" + e);
  }
  function Iy(e, t) {
    var r = t.ownerDocument.createElement("input");
    return r.name = t.name, r.value = t.value, e.id && r.setAttribute("form", e.id), t.parentNode.insertBefore(r, t), e = new FormData(e), r.parentNode.removeChild(r), e;
  }
  function h4(e, t, r, l, s) {
    if (t === "submit" && r && r.stateNode === s) {
      var f = Ay((s[Tt] || null).action), v = l.submitter;
      v && (t = (t = v[Tt] || null) ? Ay(t.formAction) : v.getAttribute("formAction"), t !== null && (f = t, v = null));
      var p = new Ul("action", "action", null, l, s);
      e.push({
        event: p,
        listeners: [{
          instance: null,
          listener: function() {
            if (l.defaultPrevented) {
              if (si !== 0) {
                var _ = v ? Iy(s, v) : new FormData(s);
                pd(r, {
                  pending: !0,
                  data: _,
                  method: s.method,
                  action: f
                }, null, _);
              }
            } else typeof f == "function" && (p.preventDefault(), _ = v ? Iy(s, v) : new FormData(s), pd(r, {
              pending: !0,
              data: _,
              method: s.method,
              action: f
            }, f, _));
          },
          currentTarget: s
        }]
      });
    }
  }
  for (var Xd = 0; Xd < Zs.length; Xd++) {
    var Kd = Zs[Xd];
    fn(Kd.toLowerCase(), "on" + (Kd[0].toUpperCase() + Kd.slice(1)));
  }
  fn(gg, "onAnimationEnd"), fn(hg, "onAnimationIteration"), fn(yg, "onAnimationStart"), fn("dblclick", "onDoubleClick"), fn("focusin", "onFocus"), fn("focusout", "onBlur"), fn(Z1, "onTransitionRun"), fn(N1, "onTransitionStart"), fn(j1, "onTransitionCancel"), fn(_g, "onTransitionEnd"), aa("onMouseEnter", ["mouseout", "mouseover"]), aa("onMouseLeave", ["mouseout", "mouseover"]), aa("onPointerEnter", ["pointerout", "pointerover"]), aa("onPointerLeave", ["pointerout", "pointerover"]), zi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), zi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), zi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), zi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), zi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), zi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Xr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), y4 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xr));
  function Ry(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var l = e[r], s = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (t) for (var v = l.length - 1; 0 <= v; v--) {
          var p = l[v], _ = p.instance, E = p.currentTarget;
          if (p = p.listener, _ !== f && s.isPropagationStopped()) break e;
          f = p, s.currentTarget = E;
          try {
            f(s);
          } catch (N) {
            Zl(N);
          }
          s.currentTarget = null, f = _;
        }
        else for (v = 0; v < l.length; v++) {
          if (p = l[v], _ = p.instance, E = p.currentTarget, p = p.listener, _ !== f && s.isPropagationStopped()) break e;
          f = p, s.currentTarget = E;
          try {
            f(s);
          } catch (N) {
            Zl(N);
          }
          s.currentTarget = null, f = _;
        }
      }
    }
  }
  function de(e, t) {
    var r = t[ss];
    r === void 0 && (r = t[ss] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    r.has(l) || (My(t, e, 2, !1), r.add(l));
  }
  function Fd(e, t, r) {
    var l = 0;
    t && (l |= 4), My(r, e, l, t);
  }
  var yu = "_reactListening" + Math.random().toString(36).slice(2);
  function Cy(e) {
    if (!e[yu]) {
      e[yu] = !0, jp.forEach(function(r) {
        r !== "selectionchange" && (y4.has(r) || Fd(r, !1, e), Fd(r, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[yu] || (t[yu] = !0, Fd("selectionchange", !1, t));
    }
  }
  function My(e, t, r, l) {
    switch (f_(t)) {
      case 2:
        var s = V4;
        break;
      case 8:
        s = Q4;
        break;
      default:
        s = vf;
    }
    r = s.bind(null, t, r, e), s = void 0, !_s || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), l ? s !== void 0 ? e.addEventListener(t, r, {
      capture: !0,
      passive: s
    }) : e.addEventListener(t, r, !0) : s !== void 0 ? e.addEventListener(t, r, { passive: s }) : e.addEventListener(t, r, !1);
  }
  function Wd(e, t, r, l, s) {
    var f = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null) e: for (; ; ) {
      if (l === null) return;
      var v = l.tag;
      if (v === 3 || v === 4) {
        var p = l.stateNode.containerInfo;
        if (p === s) break;
        if (v === 4) for (v = l.return; v !== null; ) {
          var _ = v.tag;
          if ((_ === 3 || _ === 4) && v.stateNode.containerInfo === s) return;
          v = v.return;
        }
        for (; p !== null; ) {
          if (v = ta(p), v === null) return;
          if (_ = v.tag, _ === 5 || _ === 6 || _ === 26 || _ === 27) {
            l = f = v;
            continue e;
          }
          p = p.parentNode;
        }
      }
      l = l.return;
    }
    Pp(function() {
      var E = f, N = hs(r), A = [];
      e: {
        var O = bg.get(e);
        if (O !== void 0) {
          var Z = Ul, G = e;
          switch (e) {
            case "keypress":
              if (xl(r) === 0) break e;
            case "keydown":
            case "keyup":
              Z = p1;
              break;
            case "focusin":
              G = "focus", Z = zs;
              break;
            case "focusout":
              G = "blur", Z = zs;
              break;
            case "beforeblur":
            case "afterblur":
              Z = zs;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Z = Qp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = u1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = g1;
              break;
            case gg:
            case hg:
            case yg:
              Z = c1;
              break;
            case _g:
              Z = h1;
              break;
            case "scroll":
            case "scrollend":
              Z = l1;
              break;
            case "wheel":
              Z = y1;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = s1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = Kp;
              break;
            case "toggle":
            case "beforetoggle":
              Z = _1;
          }
          var X = (t & 4) !== 0, Ze = !X && (e === "scroll" || e === "scrollend"), $ = X ? O !== null ? O + "Capture" : null : O;
          X = [];
          for (var b = E, x; b !== null; ) {
            var j = b;
            if (x = j.stateNode, j = j.tag, j !== 5 && j !== 26 && j !== 27 || x === null || $ === null || (j = yr(b, $), j != null && X.push(Kr(b, j, x))), Ze) break;
            b = b.return;
          }
          0 < X.length && (O = new Z(O, G, null, r, N), A.push({
            event: O,
            listeners: X
          }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", Z = e === "mouseout" || e === "pointerout", O && r !== gs && (G = r.relatedTarget || r.fromElement) && (ta(G) || G[pr])) break e;
          if ((Z || O) && (O = N.window === N ? N : (O = N.ownerDocument) ? O.defaultView || O.parentWindow : window, Z ? (G = r.relatedTarget || r.toElement, Z = E, G = G ? ta(G) : null, G !== null && (Ze = d(G), X = G.tag, G !== Ze || X !== 5 && X !== 27 && X !== 6) && (G = null)) : (Z = null, G = E), Z !== G)) {
            if (X = Qp, j = "onMouseLeave", $ = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (X = Kp, j = "onPointerLeave", $ = "onPointerEnter", b = "pointer"), Ze = Z == null ? O : hr(Z), x = G == null ? O : hr(G), O = new X(j, b + "leave", Z, r, N), O.target = Ze, O.relatedTarget = x, j = null, ta(N) === E && (X = new X($, b + "enter", G, r, N), X.target = x, X.relatedTarget = Ze, j = X), Ze = j, Z && G) t: {
              for (X = _4, $ = Z, b = G, x = 0, j = $; j; j = X(j)) x++;
              j = 0;
              for (var V = b; V; V = X(V)) j++;
              for (; 0 < x - j; ) $ = X($), x--;
              for (; 0 < j - x; ) b = X(b), j--;
              for (; x--; ) {
                if ($ === b || b !== null && $ === b.alternate) {
                  X = $;
                  break t;
                }
                $ = X($), b = X(b);
              }
              X = null;
            }
            else X = null;
            Z !== null && qy(A, O, Z, X, !1), G !== null && Ze !== null && qy(A, Ze, G, X, !0);
          }
        }
        e: {
          if (O = E ? hr(E) : window, Z = O.nodeName && O.nodeName.toLowerCase(), Z === "select" || Z === "input" && O.type === "file") var ye = rg;
          else if (ig(O)) if (og) ye = U1;
          else {
            ye = x1;
            var P = w1;
          }
          else Z = O.nodeName, !Z || Z.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? E && ps(E.elementType) && (ye = rg) : ye = E1;
          if (ye && (ye = ye(e, E))) {
            ag(A, ye, r, N);
            break e;
          }
          P && P(e, O, E), e === "focusout" && E && O.type === "number" && E.memoizedProps.value != null && vs(O, "number", O.value);
        }
        switch (P = E ? hr(E) : window, e) {
          case "focusin":
            (ig(P) || P.contentEditable === "true") && (sa = P, Us = E, wr = null);
            break;
          case "focusout":
            wr = Us = sa = null;
            break;
          case "mousedown":
            Os = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Os = !1, vg(A, r, N);
            break;
          case "selectionchange":
            if (D1) break;
          case "keydown":
          case "keyup":
            vg(A, r, N);
        }
        var re;
        if (Ts) e: {
          switch (e) {
            case "compositionstart":
              var me = "onCompositionStart";
              break e;
            case "compositionend":
              me = "onCompositionEnd";
              break e;
            case "compositionupdate":
              me = "onCompositionUpdate";
              break e;
          }
          me = void 0;
        }
        else ca ? tg(e, r) && (me = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (me = "onCompositionStart");
        me && (Fp && r.locale !== "ko" && (ca || me !== "onCompositionStart" ? me === "onCompositionEnd" && ca && (re = Yp()) : (Xn = N, bs = "value" in Xn ? Xn.value : Xn.textContent, ca = !0)), P = _u(E, me), 0 < P.length && (me = new Xp(me, e, null, r, N), A.push({
          event: me,
          listeners: P
        }), re ? me.data = re : (re = ng(r), re !== null && (me.data = re)))), (re = S1 ? $1(e, r) : z1(e, r)) && (me = _u(E, "onBeforeInput"), 0 < me.length && (P = new Xp("onBeforeInput", "beforeinput", null, r, N), A.push({
          event: P,
          listeners: me
        }), P.data = re)), h4(A, e, E, r, N);
      }
      Ry(A, t);
    });
  }
  function Kr(e, t, r) {
    return {
      instance: e,
      listener: t,
      currentTarget: r
    };
  }
  function _u(e, t) {
    for (var r = t + "Capture", l = []; e !== null; ) {
      var s = e, f = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || f === null || (s = yr(e, r), s != null && l.unshift(Kr(e, s, f)), s = yr(e, t), s != null && l.push(Kr(e, s, f))), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function _4(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function qy(e, t, r, l, s) {
    for (var f = t._reactName, v = []; r !== null && r !== l; ) {
      var p = r, _ = p.alternate, E = p.stateNode;
      if (p = p.tag, _ !== null && _ === l) break;
      p !== 5 && p !== 26 && p !== 27 || E === null || (_ = E, s ? (E = yr(r, f), E != null && v.unshift(Kr(r, E, _))) : s || (E = yr(r, f), E != null && v.push(Kr(r, E, _)))), r = r.return;
    }
    v.length !== 0 && e.push({
      event: t,
      listeners: v
    });
  }
  var b4 = /\r\n?/g, S4 = /\u0000|\uFFFD/g;
  function Hy(e) {
    return (typeof e == "string" ? e : "" + e).replace(b4, `
`).replace(S4, "");
  }
  function Ly(e, t) {
    return t = Hy(t), Hy(e) === t;
  }
  function De(e, t, r, l, s, f) {
    switch (r) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || oa(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && oa(e, "" + l);
        break;
      case "className":
        zl(e, "class", l);
        break;
      case "tabIndex":
        zl(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        zl(e, r, l);
        break;
      case "style":
        Jp(e, l, f);
        break;
      case "data":
        if (t !== "object") {
          zl(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || r !== "href")) {
          e.removeAttribute(r);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(r);
          break;
        }
        l = Tl("" + l), e.setAttribute(r, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(r, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof f == "function" && (r === "formAction" ? (t !== "input" && De(e, t, "name", s.name, s, null), De(e, t, "formEncType", s.formEncType, s, null), De(e, t, "formMethod", s.formMethod, s, null), De(e, t, "formTarget", s.formTarget, s, null)) : (De(e, t, "encType", s.encType, s, null), De(e, t, "method", s.method, s, null), De(e, t, "target", s.target, s, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(r);
          break;
        }
        l = Tl("" + l), e.setAttribute(r, l);
        break;
      case "onClick":
        l != null && (e.onclick = wn);
        break;
      case "onScroll":
        l != null && de("scroll", e);
        break;
      case "onScrollEnd":
        l != null && de("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (r = l.__html, r != null) {
            if (s.children != null) throw Error(i(60));
            e.innerHTML = r;
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
        r = Tl("" + l), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(r, "" + l) : e.removeAttribute(r);
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
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(r, "") : e.removeAttribute(r);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(r, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(r, l) : e.removeAttribute(r);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(r, l) : e.removeAttribute(r);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(r) : e.setAttribute(r, l);
        break;
      case "popover":
        de("beforetoggle", e), de("toggle", e), $l(e, "popover", l);
        break;
      case "xlinkActuate":
        Tn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Tn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Tn(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Tn(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Tn(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Tn(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Tn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Tn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Tn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        $l(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (r = r1.get(r) || r, $l(e, r, l));
    }
  }
  function ef(e, t, r, l, s, f) {
    switch (r) {
      case "style":
        Jp(e, l, f);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(i(61));
          if (r = l.__html, r != null) {
            if (s.children != null) throw Error(i(60));
            e.innerHTML = r;
          }
        }
        break;
      case "children":
        typeof l == "string" ? oa(e, l) : (typeof l == "number" || typeof l == "bigint") && oa(e, "" + l);
        break;
      case "onScroll":
        l != null && de("scroll", e);
        break;
      case "onScrollEnd":
        l != null && de("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = wn);
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
        if (!Ap.hasOwnProperty(r)) e: {
          if (r[0] === "o" && r[1] === "n" && (s = r.endsWith("Capture"), t = r.slice(2, s ? r.length - 7 : void 0), f = e[Tt] || null, f = f != null ? f[r] : null, typeof f == "function" && e.removeEventListener(t, f, s), typeof l == "function")) {
            typeof f != "function" && f !== null && (r in e ? e[r] = null : e.hasAttribute(r) && e.removeAttribute(r)), e.addEventListener(t, l, s);
            break e;
          }
          r in e ? e[r] = l : l === !0 ? e.setAttribute(r, "") : $l(e, r, l);
        }
    }
  }
  function ft(e, t, r) {
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
        de("error", e), de("load", e);
        var l = !1, s = !1, f;
        for (f in r) if (r.hasOwnProperty(f)) {
          var v = r[f];
          if (v != null) switch (f) {
            case "src":
              l = !0;
              break;
            case "srcSet":
              s = !0;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(i(137, t));
            default:
              De(e, t, f, v, r, null);
          }
        }
        s && De(e, t, "srcSet", r.srcSet, r, null), l && De(e, t, "src", r.src, r, null);
        return;
      case "input":
        de("invalid", e);
        var p = f = v = s = null, _ = null, E = null;
        for (l in r) if (r.hasOwnProperty(l)) {
          var N = r[l];
          if (N != null) switch (l) {
            case "name":
              s = N;
              break;
            case "type":
              v = N;
              break;
            case "checked":
              _ = N;
              break;
            case "defaultChecked":
              E = N;
              break;
            case "value":
              f = N;
              break;
            case "defaultValue":
              p = N;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (N != null) throw Error(i(137, t));
              break;
            default:
              De(e, t, l, N, r, null);
          }
        }
        qp(e, f, p, _, E, v, s, !1);
        return;
      case "select":
        de("invalid", e), l = v = f = null;
        for (s in r) if (r.hasOwnProperty(s) && (p = r[s], p != null)) switch (s) {
          case "value":
            f = p;
            break;
          case "defaultValue":
            v = p;
            break;
          case "multiple":
            l = p;
          default:
            De(e, t, s, p, r, null);
        }
        t = f, r = v, e.multiple = !!l, t != null ? ra(e, !!l, t, !1) : r != null && ra(e, !!l, r, !0);
        return;
      case "textarea":
        de("invalid", e), f = s = l = null;
        for (v in r) if (r.hasOwnProperty(v) && (p = r[v], p != null)) switch (v) {
          case "value":
            l = p;
            break;
          case "defaultValue":
            s = p;
            break;
          case "children":
            f = p;
            break;
          case "dangerouslySetInnerHTML":
            if (p != null) throw Error(i(91));
            break;
          default:
            De(e, t, v, p, r, null);
        }
        Lp(e, l, s, f);
        return;
      case "option":
        for (_ in r) r.hasOwnProperty(_) && (l = r[_], l != null) && (_ === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : De(e, t, _, l, r, null));
        return;
      case "dialog":
        de("beforetoggle", e), de("toggle", e), de("cancel", e), de("close", e);
        break;
      case "iframe":
      case "object":
        de("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Xr.length; l++) de(Xr[l], e);
        break;
      case "image":
        de("error", e), de("load", e);
        break;
      case "details":
        de("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        de("error", e), de("load", e);
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
        for (E in r) if (r.hasOwnProperty(E) && (l = r[E], l != null)) switch (E) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(i(137, t));
          default:
            De(e, t, E, l, r, null);
        }
        return;
      default:
        if (ps(t)) {
          for (N in r) r.hasOwnProperty(N) && (l = r[N], l !== void 0 && ef(e, t, N, l, r, void 0));
          return;
        }
    }
    for (p in r) r.hasOwnProperty(p) && (l = r[p], l != null && De(e, t, p, l, r, null));
  }
  function $4(e, t, r, l) {
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
        var s = null, f = null, v = null, p = null, _ = null, E = null, N = null;
        for (Z in r) {
          var A = r[Z];
          if (r.hasOwnProperty(Z) && A != null) switch (Z) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              _ = A;
            default:
              l.hasOwnProperty(Z) || De(e, t, Z, null, l, A);
          }
        }
        for (var O in l) {
          var Z = l[O];
          if (A = r[O], l.hasOwnProperty(O) && (Z != null || A != null)) switch (O) {
            case "type":
              f = Z;
              break;
            case "name":
              s = Z;
              break;
            case "checked":
              E = Z;
              break;
            case "defaultChecked":
              N = Z;
              break;
            case "value":
              v = Z;
              break;
            case "defaultValue":
              p = Z;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (Z != null) throw Error(i(137, t));
              break;
            default:
              Z !== A && De(e, t, O, Z, l, A);
          }
        }
        ms(e, v, p, _, E, N, f, s);
        return;
      case "select":
        Z = v = p = O = null;
        for (f in r) if (_ = r[f], r.hasOwnProperty(f) && _ != null) switch (f) {
          case "value":
            break;
          case "multiple":
            Z = _;
          default:
            l.hasOwnProperty(f) || De(e, t, f, null, l, _);
        }
        for (s in l) if (f = l[s], _ = r[s], l.hasOwnProperty(s) && (f != null || _ != null)) switch (s) {
          case "value":
            O = f;
            break;
          case "defaultValue":
            p = f;
            break;
          case "multiple":
            v = f;
          default:
            f !== _ && De(e, t, s, f, l, _);
        }
        t = p, r = v, l = Z, O != null ? ra(e, !!r, O, !1) : !!l != !!r && (t != null ? ra(e, !!r, t, !0) : ra(e, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        Z = O = null;
        for (p in r) if (s = r[p], r.hasOwnProperty(p) && s != null && !l.hasOwnProperty(p)) switch (p) {
          case "value":
            break;
          case "children":
            break;
          default:
            De(e, t, p, null, l, s);
        }
        for (v in l) if (s = l[v], f = r[v], l.hasOwnProperty(v) && (s != null || f != null)) switch (v) {
          case "value":
            O = s;
            break;
          case "defaultValue":
            Z = s;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (s != null) throw Error(i(91));
            break;
          default:
            s !== f && De(e, t, v, s, l, f);
        }
        Hp(e, O, Z);
        return;
      case "option":
        for (var G in r) O = r[G], r.hasOwnProperty(G) && O != null && !l.hasOwnProperty(G) && (G === "selected" ? e.selected = !1 : De(e, t, G, null, l, O));
        for (_ in l) O = l[_], Z = r[_], l.hasOwnProperty(_) && O !== Z && (O != null || Z != null) && (_ === "selected" ? e.selected = O && typeof O != "function" && typeof O != "symbol" : De(e, t, _, O, l, Z));
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
        for (var X in r) O = r[X], r.hasOwnProperty(X) && O != null && !l.hasOwnProperty(X) && De(e, t, X, null, l, O);
        for (E in l) if (O = l[E], Z = r[E], l.hasOwnProperty(E) && O !== Z && (O != null || Z != null)) switch (E) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (O != null) throw Error(i(137, t));
            break;
          default:
            De(e, t, E, O, l, Z);
        }
        return;
      default:
        if (ps(t)) {
          for (var Ze in r) O = r[Ze], r.hasOwnProperty(Ze) && O !== void 0 && !l.hasOwnProperty(Ze) && ef(e, t, Ze, void 0, l, O);
          for (N in l) O = l[N], Z = r[N], !l.hasOwnProperty(N) || O === Z || O === void 0 && Z === void 0 || ef(e, t, N, O, l, Z);
          return;
        }
    }
    for (var $ in r) O = r[$], r.hasOwnProperty($) && O != null && !l.hasOwnProperty($) && De(e, t, $, null, l, O);
    for (A in l) O = l[A], Z = r[A], !l.hasOwnProperty(A) || O === Z || O == null && Z == null || De(e, t, A, O, l, Z);
  }
  function By(e) {
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
  function z4() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, r = performance.getEntriesByType("resource"), l = 0; l < r.length; l++) {
        var s = r[l], f = s.transferSize, v = s.initiatorType, p = s.duration;
        if (f && p && By(v)) {
          for (v = 0, p = s.responseEnd, l += 1; l < r.length; l++) {
            var _ = r[l], E = _.startTime;
            if (E > p) break;
            var N = _.transferSize, A = _.initiatorType;
            N && By(A) && (_ = _.responseEnd, v += N * (_ < p ? 1 : (p - E) / (_ - E)));
          }
          if (--l, t += 8 * (f + v) / (s.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var tf = null, nf = null;
  function bu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Jy(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gy(e, t) {
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
  function af(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var rf = null;
  function k4() {
    var e = window.event;
    return e && e.type === "popstate" ? e === rf ? !1 : (rf = e, !0) : (rf = null, !1);
  }
  var Py = typeof setTimeout == "function" ? setTimeout : void 0, T4 = typeof clearTimeout == "function" ? clearTimeout : void 0, Yy = typeof Promise == "function" ? Promise : void 0, w4 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yy < "u" ? function(e) {
    return Yy.resolve(null).then(e).catch(x4);
  } : Py;
  function x4(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function di(e) {
    return e === "head";
  }
  function Vy(e, t) {
    var r = t, l = 0;
    do {
      var s = r.nextSibling;
      if (e.removeChild(r), s && s.nodeType === 8) if (r = s.data, r === "/$" || r === "/&") {
        if (l === 0) {
          e.removeChild(s), Ra(t);
          return;
        }
        l--;
      } else if (r === "$" || r === "$?" || r === "$~" || r === "$!" || r === "&") l++;
      else if (r === "html") Fr(e.ownerDocument.documentElement);
      else if (r === "head") {
        r = e.ownerDocument.head, Fr(r);
        for (var f = r.firstChild; f; ) {
          var v = f.nextSibling, p = f.nodeName;
          f[gr] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && f.rel.toLowerCase() === "stylesheet" || r.removeChild(f), f = v;
        }
      } else r === "body" && Fr(e.ownerDocument.body);
      r = s;
    } while (r);
    Ra(t);
  }
  function Qy(e, t) {
    var r = e;
    e = 0;
    do {
      var l = r.nextSibling;
      if (r.nodeType === 1 ? t ? (r._stashedDisplay = r.style.display, r.style.display = "none") : (r.style.display = r._stashedDisplay || "", r.getAttribute("style") === "" && r.removeAttribute("style")) : r.nodeType === 3 && (t ? (r._stashedText = r.nodeValue, r.nodeValue = "") : r.nodeValue = r._stashedText || ""), l && l.nodeType === 8) if (r = l.data, r === "/$") {
        if (e === 0) break;
        e--;
      } else r !== "$" && r !== "$?" && r !== "$~" && r !== "$!" || e++;
      r = l;
    } while (r);
  }
  function of(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var r = t;
      switch (t = t.nextSibling, r.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          of(r), ds(r);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (r.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(r);
    }
  }
  function E4(e, t, r, l) {
    for (; e.nodeType === 1; ) {
      var s = r;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[gr]) switch (t) {
          case "meta":
            if (!e.hasAttribute("itemprop")) break;
            return e;
          case "link":
            if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence")) break;
            if (f !== s.rel || e.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || e.getAttribute("title") !== (s.title == null ? null : s.title)) break;
            return e;
          case "style":
            if (e.hasAttribute("data-precedence")) break;
            return e;
          case "script":
            if (f = e.getAttribute("src"), (f !== (s.src == null ? null : s.src) || e.getAttribute("type") !== (s.type == null ? null : s.type) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
            return e;
          default:
            return e;
        }
      } else if (t === "input" && e.type === "hidden") {
        var f = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === f) return e;
      } else return e;
      if (e = on(e.nextSibling), e === null) break;
    }
    return null;
  }
  function U4(e, t, r) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !r || (e = on(e.nextSibling), e === null)) return null;
    return e;
  }
  function Xy(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = on(e.nextSibling), e === null)) return null;
    return e;
  }
  function lf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function uf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function O4(e, t) {
    var r = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || r.readyState !== "loading") t();
    else {
      var l = function() {
        t(), r.removeEventListener("DOMContentLoaded", l);
      };
      r.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function on(e) {
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
  var cf = null;
  function Ky(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "/$" || r === "/&") {
          if (t === 0) return on(e.nextSibling);
          t--;
        } else r !== "$" && r !== "$!" && r !== "$?" && r !== "$~" && r !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Fy(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?" || r === "$~" || r === "&") {
          if (t === 0) return e;
          t--;
        } else r !== "/$" && r !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Wy(e, t, r) {
    switch (t = bu(r), e) {
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
  function Fr(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    ds(e);
  }
  var ln = /* @__PURE__ */ new Map(), e_ = /* @__PURE__ */ new Set();
  function Su(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Bn = L.d;
  L.d = {
    f: D4,
    r: Z4,
    D: N4,
    C: j4,
    L: A4,
    m: I4,
    X: C4,
    S: R4,
    M: M4
  };
  function D4() {
    var e = Bn.f(), t = fu();
    return e || t;
  }
  function Z4(e) {
    var t = na(e);
    t !== null && t.tag === 5 && t.type === "form" ? _h(t) : Bn.r(e);
  }
  var ja = typeof document > "u" ? null : document;
  function t_(e, t, r) {
    var l = ja;
    if (l && typeof t == "string" && t) {
      var s = Kt(t);
      s = 'link[rel="' + e + '"][href="' + s + '"]', typeof r == "string" && (s += '[crossorigin="' + r + '"]'), e_.has(s) || (e_.add(s), e = {
        rel: e,
        crossOrigin: r,
        href: t
      }, l.querySelector(s) === null && (t = l.createElement("link"), ft(t, "link", e), ot(t), l.head.appendChild(t)));
    }
  }
  function N4(e) {
    Bn.D(e), t_("dns-prefetch", e, null);
  }
  function j4(e, t) {
    Bn.C(e, t), t_("preconnect", e, t);
  }
  function A4(e, t, r) {
    Bn.L(e, t, r);
    var l = ja;
    if (l && e && t) {
      var s = 'link[rel="preload"][as="' + Kt(t) + '"]';
      t === "image" && r && r.imageSrcSet ? (s += '[imagesrcset="' + Kt(r.imageSrcSet) + '"]', typeof r.imageSizes == "string" && (s += '[imagesizes="' + Kt(r.imageSizes) + '"]')) : s += '[href="' + Kt(e) + '"]';
      var f = s;
      switch (t) {
        case "style":
          f = Aa(e);
          break;
        case "script":
          f = Ia(e);
      }
      ln.has(f) || (e = w({
        rel: "preload",
        href: t === "image" && r && r.imageSrcSet ? void 0 : e,
        as: t
      }, r), ln.set(f, e), l.querySelector(s) !== null || t === "style" && l.querySelector(Wr(f)) || t === "script" && l.querySelector(eo(f)) || (t = l.createElement("link"), ft(t, "link", e), ot(t), l.head.appendChild(t)));
    }
  }
  function I4(e, t) {
    Bn.m(e, t);
    var r = ja;
    if (r && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", s = 'link[rel="modulepreload"][as="' + Kt(l) + '"][href="' + Kt(e) + '"]', f = s;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Ia(e);
      }
      if (!ln.has(f) && (e = w({
        rel: "modulepreload",
        href: e
      }, t), ln.set(f, e), r.querySelector(s) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(eo(f))) return;
        }
        l = r.createElement("link"), ft(l, "link", e), ot(l), r.head.appendChild(l);
      }
    }
  }
  function R4(e, t, r) {
    Bn.S(e, t, r);
    var l = ja;
    if (l && e) {
      var s = ia(l).hoistableStyles, f = Aa(e);
      t = t || "default";
      var v = s.get(f);
      if (!v) {
        var p = {
          loading: 0,
          preload: null
        };
        if (v = l.querySelector(Wr(f))) p.loading = 5;
        else {
          e = w({
            rel: "stylesheet",
            href: e,
            "data-precedence": t
          }, r), (r = ln.get(f)) && sf(e, r);
          var _ = v = l.createElement("link");
          ot(_), ft(_, "link", e), _._p = new Promise(function(E, N) {
            _.onload = E, _.onerror = N;
          }), _.addEventListener("load", function() {
            p.loading |= 1;
          }), _.addEventListener("error", function() {
            p.loading |= 2;
          }), p.loading |= 4, $u(v, t, l);
        }
        v = {
          type: "stylesheet",
          instance: v,
          count: 1,
          state: p
        }, s.set(f, v);
      }
    }
  }
  function C4(e, t) {
    Bn.X(e, t);
    var r = ja;
    if (r && e) {
      var l = ia(r).hoistableScripts, s = Ia(e), f = l.get(s);
      f || (f = r.querySelector(eo(s)), f || (e = w({
        src: e,
        async: !0
      }, t), (t = ln.get(s)) && df(e, t), f = r.createElement("script"), ot(f), ft(f, "link", e), r.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, l.set(s, f));
    }
  }
  function M4(e, t) {
    Bn.M(e, t);
    var r = ja;
    if (r && e) {
      var l = ia(r).hoistableScripts, s = Ia(e), f = l.get(s);
      f || (f = r.querySelector(eo(s)), f || (e = w({
        src: e,
        async: !0,
        type: "module"
      }, t), (t = ln.get(s)) && df(e, t), f = r.createElement("script"), ot(f), ft(f, "link", e), r.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, l.set(s, f));
    }
  }
  function n_(e, t, r, l) {
    var s = (s = ce.current) ? Su(s) : null;
    if (!s) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string" ? (t = Aa(r.href), r = ia(s).hoistableStyles, l = r.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, r.set(t, l)), l) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (r.rel === "stylesheet" && typeof r.href == "string" && typeof r.precedence == "string") {
          e = Aa(r.href);
          var f = ia(s).hoistableStyles, v = f.get(e);
          if (v || (s = s.ownerDocument || s, v = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, f.set(e, v), (f = s.querySelector(Wr(e))) && !f._p && (v.instance = f, v.state.loading = 5), ln.has(e) || (r = {
            rel: "preload",
            as: "style",
            href: r.href,
            crossOrigin: r.crossOrigin,
            integrity: r.integrity,
            media: r.media,
            hrefLang: r.hrefLang,
            referrerPolicy: r.referrerPolicy
          }, ln.set(e, r), f || q4(s, e, r, v.state))), t && l === null) throw Error(i(528, ""));
          return v;
        }
        if (t && l !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return t = r.async, r = r.src, typeof r == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ia(r), r = ia(s).hoistableScripts, l = r.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, r.set(t, l)), l) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      default:
        throw Error(i(444, e));
    }
  }
  function Aa(e) {
    return 'href="' + Kt(e) + '"';
  }
  function Wr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function i_(e) {
    return w({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function q4(e, t, r, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), ft(t, "link", r), ot(t), e.head.appendChild(t));
  }
  function Ia(e) {
    return '[src="' + Kt(e) + '"]';
  }
  function eo(e) {
    return "script[async]" + e;
  }
  function a_(e, t, r) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var l = e.querySelector('style[data-href~="' + Kt(r.href) + '"]');
        if (l) return t.instance = l, ot(l), l;
        var s = w({}, r, {
          "data-href": r.href,
          "data-precedence": r.precedence,
          href: null,
          precedence: null
        });
        return l = (e.ownerDocument || e).createElement("style"), ot(l), ft(l, "style", s), $u(l, r.precedence, e), t.instance = l;
      case "stylesheet":
        s = Aa(r.href);
        var f = e.querySelector(Wr(s));
        if (f) return t.state.loading |= 4, t.instance = f, ot(f), f;
        l = i_(r), (s = ln.get(s)) && sf(l, s), f = (e.ownerDocument || e).createElement("link"), ot(f);
        var v = f;
        return v._p = new Promise(function(p, _) {
          v.onload = p, v.onerror = _;
        }), ft(f, "link", l), t.state.loading |= 4, $u(f, r.precedence, e), t.instance = f;
      case "script":
        return f = Ia(r.src), (s = e.querySelector(eo(f))) ? (t.instance = s, ot(s), s) : (l = r, (s = ln.get(f)) && (l = w({}, r), df(l, s)), e = e.ownerDocument || e, s = e.createElement("script"), ot(s), ft(s, "link", l), e.head.appendChild(s), t.instance = s);
      case "void":
        return null;
      default:
        throw Error(i(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, $u(l, r.precedence, e));
    return t.instance;
  }
  function $u(e, t, r) {
    for (var l = r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = l.length ? l[l.length - 1] : null, f = s, v = 0; v < l.length; v++) {
      var p = l[v];
      if (p.dataset.precedence === t) f = p;
      else if (f !== s) break;
    }
    f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = r.nodeType === 9 ? r.head : r, t.insertBefore(e, t.firstChild));
  }
  function sf(e, t) {
    e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
  }
  function df(e, t) {
    e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
  }
  var zu = null;
  function r_(e, t, r) {
    if (zu === null) {
      var l = /* @__PURE__ */ new Map(), s = zu = /* @__PURE__ */ new Map();
      s.set(r, l);
    } else s = zu, l = s.get(r), l || (l = /* @__PURE__ */ new Map(), s.set(r, l));
    if (l.has(e)) return l;
    for (l.set(e, null), r = r.getElementsByTagName(e), s = 0; s < r.length; s++) {
      var f = r[s];
      if (!(f[gr] || f[ut] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var v = f.getAttribute(t) || "";
        v = e + v;
        var p = l.get(v);
        p ? p.push(f) : l.set(v, [f]);
      }
    }
    return l;
  }
  function o_(e, t, r) {
    e = e.ownerDocument || e, e.head.insertBefore(r, t === "title" ? e.querySelector("head > title") : null);
  }
  function H4(e, t, r) {
    if (r === 1 || t.itemProp != null) return !1;
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
  function l_(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function L4(e, t, r, l) {
    if (r.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (r.state.loading & 4) === 0) {
      if (r.instance === null) {
        var s = Aa(l.href), f = t.querySelector(Wr(s));
        if (f) {
          t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = ku.bind(e), t.then(e, e)), r.state.loading |= 4, r.instance = f, ot(f);
          return;
        }
        f = t.ownerDocument || t, l = i_(l), (s = ln.get(s)) && sf(l, s), f = f.createElement("link"), ot(f);
        var v = f;
        v._p = new Promise(function(p, _) {
          v.onload = p, v.onerror = _;
        }), ft(f, "link", l), r.instance = f;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(r, t), (t = r.state.preload) && (r.state.loading & 3) === 0 && (e.count++, r = ku.bind(e), t.addEventListener("load", r), t.addEventListener("error", r));
    }
  }
  var ff = 0;
  function B4(e, t) {
    return e.stylesheets && e.count === 0 && wu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(r) {
      var l = setTimeout(function() {
        if (e.stylesheets && wu(e, e.stylesheets), e.unsuspend) {
          var f = e.unsuspend;
          e.unsuspend = null, f();
        }
      }, 6e4 + t);
      0 < e.imgBytes && ff === 0 && (ff = 62500 * z4());
      var s = setTimeout(function() {
        if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && wu(e, e.stylesheets), e.unsuspend)) {
          var f = e.unsuspend;
          e.unsuspend = null, f();
        }
      }, (e.imgBytes > ff ? 50 : 800) + t);
      return e.unsuspend = r, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(s);
      };
    } : null;
  }
  function ku() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) wu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Tu = null;
  function wu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Tu = /* @__PURE__ */ new Map(), t.forEach(J4, e), Tu = null, ku.call(e));
  }
  function J4(e, t) {
    if (!(t.state.loading & 4)) {
      var r = Tu.get(e);
      if (r) var l = r.get(null);
      else {
        r = /* @__PURE__ */ new Map(), Tu.set(e, r);
        for (var s = e.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0; f < s.length; f++) {
          var v = s[f];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (r.set(v.dataset.precedence, v), l = v);
        }
        l && r.set(null, l);
      }
      s = t.instance, v = s.getAttribute("data-precedence"), f = r.get(v) || l, f === l && r.set(null, s), r.set(v, s), this.count++, l = ku.bind(this), s.addEventListener("load", l), s.addEventListener("error", l), f ? f.parentNode.insertBefore(s, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(s, e.firstChild)), t.state.loading |= 4;
    }
  }
  var to = {
    $$typeof: ae,
    Provider: null,
    Consumer: null,
    _currentValue: Se,
    _currentValue2: Se,
    _threadCount: 0
  };
  function G4(e, t, r, l, s, f, v, p, _) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = us(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = us(0), this.hiddenUpdates = us(null), this.identifierPrefix = l, this.onUncaughtError = s, this.onCaughtError = f, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = _, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function P4(e, t, r, l, s, f, v, p, _, E, N, A) {
    return e = new G4(e, t, r, v, _, E, N, A, p), t = 1, f === !0 && (t |= 24), f = Mt(3, null, null, t), e.current = f, f.stateNode = e, t = Gs(), t.refCount++, e.pooledCache = t, t.refCount++, f.memoizedState = {
      element: l,
      isDehydrated: r,
      cache: t
    }, Qs(f), e;
  }
  function Y4(e) {
    return e ? (e = ma, e) : ma;
  }
  function u_(e, t, r, l, s, f) {
    s = Y4(s), l.context === null ? l.context = s : l.pendingContext = s, l = Ii(t), l.payload = { element: r }, f = f === void 0 ? null : f, f !== null && (l.callback = f), r = Ri(e, l, t), r !== null && (Dt(r, e, t), Nr(r, e, t));
  }
  function c_(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function mf(e, t) {
    c_(e, t), (e = e.alternate) && c_(e, t);
  }
  function s_(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = xi(e, 67108864);
      t !== null && Dt(t, e, 67108864), mf(e, 67108864);
    }
  }
  function d_(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = rn();
      t = Op(t);
      var r = xi(e, t);
      r !== null && Dt(r, e, t), mf(e, t);
    }
  }
  var xu = !0;
  function V4(e, t, r, l) {
    var s = M.T;
    M.T = null;
    var f = L.p;
    try {
      L.p = 2, vf(e, t, r, l);
    } finally {
      L.p = f, M.T = s;
    }
  }
  function Q4(e, t, r, l) {
    var s = M.T;
    M.T = null;
    var f = L.p;
    try {
      L.p = 8, vf(e, t, r, l);
    } finally {
      L.p = f, M.T = s;
    }
  }
  function vf(e, t, r, l) {
    if (xu) {
      var s = pf(l);
      if (s === null) Wd(e, t, l, Eu, r), m_(e, l);
      else if (K4(s, e, t, r, l)) l.stopPropagation();
      else if (m_(e, l), t & 4 && -1 < X4.indexOf(e)) {
        for (; s !== null; ) {
          var f = na(s);
          if (f !== null) switch (f.tag) {
            case 3:
              if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                var v = $i(f.pendingLanes);
                if (v !== 0) {
                  var p = f;
                  for (p.pendingLanes |= 2, p.entangledLanes |= 2; v; ) {
                    var _ = 1 << 31 - Rt(v);
                    p.entanglements[1] |= _, v &= ~_;
                  }
                  Ln(f), ($e & 6) === 0 && (su = At() + 500, Qr(0, !1));
                }
              }
              break;
            case 31:
            case 13:
              p = xi(f, 2), p !== null && Dt(p, f, 2), fu(), mf(f, 2);
          }
          if (f = pf(l), f === null && Wd(e, t, l, Eu, r), f === s) break;
          s = f;
        }
        s !== null && l.stopPropagation();
      } else Wd(e, t, l, null, r);
    }
  }
  function pf(e) {
    return e = hs(e), gf(e);
  }
  var Eu = null;
  function gf(e) {
    if (Eu = null, e = ta(e), e !== null) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var r = t.tag;
        if (r === 13) {
          if (e = m(t), e !== null) return e;
          e = null;
        } else if (r === 31) {
          if (e = y(t), e !== null) return e;
          e = null;
        } else if (r === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Eu = e, null;
  }
  function f_(e) {
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
        switch (Bz()) {
          case zp:
            return 2;
          case kp:
            return 8;
          case gl:
          case Jz:
            return 32;
          case Tp:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var hf = !1, fi = null, mi = null, vi = null, no = /* @__PURE__ */ new Map(), io = /* @__PURE__ */ new Map(), pi = [], X4 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function m_(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        fi = null;
        break;
      case "dragenter":
      case "dragleave":
        mi = null;
        break;
      case "mouseover":
      case "mouseout":
        vi = null;
        break;
      case "pointerover":
      case "pointerout":
        no.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        io.delete(t.pointerId);
    }
  }
  function ao(e, t, r, l, s, f) {
    return e === null || e.nativeEvent !== f ? (e = {
      blockedOn: t,
      domEventName: r,
      eventSystemFlags: l,
      nativeEvent: f,
      targetContainers: [s]
    }, t !== null && (t = na(t), t !== null && s_(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function K4(e, t, r, l, s) {
    switch (t) {
      case "focusin":
        return fi = ao(fi, e, t, r, l, s), !0;
      case "dragenter":
        return mi = ao(mi, e, t, r, l, s), !0;
      case "mouseover":
        return vi = ao(vi, e, t, r, l, s), !0;
      case "pointerover":
        var f = s.pointerId;
        return no.set(f, ao(no.get(f) || null, e, t, r, l, s)), !0;
      case "gotpointercapture":
        return f = s.pointerId, io.set(f, ao(io.get(f) || null, e, t, r, l, s)), !0;
    }
    return !1;
  }
  function v_(e) {
    var t = ta(e.target);
    if (t !== null) {
      var r = d(t);
      if (r !== null) {
        if (t = r.tag, t === 13) {
          if (t = m(r), t !== null) {
            e.blockedOn = t, Zp(e.priority, function() {
              d_(r);
            });
            return;
          }
        } else if (t === 31) {
          if (t = y(r), t !== null) {
            e.blockedOn = t, Zp(e.priority, function() {
              d_(r);
            });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Uu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = pf(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var l = new r.constructor(r.type, r);
        gs = l, r.target.dispatchEvent(l), gs = null;
      } else return t = na(r), t !== null && s_(t), e.blockedOn = r, !1;
      t.shift();
    }
    return !0;
  }
  function p_(e, t, r) {
    Uu(e) && r.delete(t);
  }
  function F4() {
    hf = !1, fi !== null && Uu(fi) && (fi = null), mi !== null && Uu(mi) && (mi = null), vi !== null && Uu(vi) && (vi = null), no.forEach(p_), io.forEach(p_);
  }
  function Ou(e, t) {
    e.blockedOn === t && (e.blockedOn = null, hf || (hf = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, F4)));
  }
  var Du = null;
  function g_(e) {
    Du !== e && (Du = e, a.unstable_scheduleCallback(a.unstable_NormalPriority, function() {
      Du === e && (Du = null);
      for (var t = 0; t < e.length; t += 3) {
        var r = e[t], l = e[t + 1], s = e[t + 2];
        if (typeof l != "function") {
          if (gf(l || r) === null) continue;
          break;
        }
        var f = na(r);
        f !== null && (e.splice(t, 3), t -= 3, pd(f, {
          pending: !0,
          data: s,
          method: r.method,
          action: l
        }, l, s));
      }
    }));
  }
  function Ra(e) {
    function t(_) {
      return Ou(_, e);
    }
    fi !== null && Ou(fi, e), mi !== null && Ou(mi, e), vi !== null && Ou(vi, e), no.forEach(t), io.forEach(t);
    for (var r = 0; r < pi.length; r++) {
      var l = pi[r];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < pi.length && (r = pi[0], r.blockedOn === null); ) v_(r), r.blockedOn === null && pi.shift();
    if (r = (e.ownerDocument || e).$$reactFormReplay, r != null) for (l = 0; l < r.length; l += 3) {
      var s = r[l], f = r[l + 1], v = s[Tt] || null;
      if (typeof f == "function") v || g_(r);
      else if (v) {
        var p = null;
        if (f && f.hasAttribute("formAction")) {
          if (s = f, v = f[Tt] || null) p = v.formAction;
          else if (gf(s) !== null) continue;
        } else p = v.action;
        typeof p == "function" ? r[l + 1] = p : (r.splice(l, 3), l -= 3), g_(r);
      }
    }
  }
  function W4() {
    function e(f) {
      f.canIntercept && f.info === "react-transition" && f.intercept({
        handler: function() {
          return new Promise(function(v) {
            return s = v;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      s !== null && (s(), s = null), l || setTimeout(r, 20);
    }
    function r() {
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
      var l = !1, s = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(r, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), s !== null && (s(), s = null);
      };
    }
  }
  function yf(e) {
    this._internalRoot = e;
  }
  _f.prototype.render = yf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    var r = t.current;
    u_(r, rn(), e, t, null, null);
  }, _f.prototype.unmount = yf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      u_(e.current, 2, null, e, null, null), fu(), t[pr] = null;
    }
  };
  function _f(e) {
    this._internalRoot = e;
  }
  _f.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Dp();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var r = 0; r < pi.length && t !== 0 && t < pi[r].priority; r++) ;
      pi.splice(r, 0, e), r === 0 && v_(e);
    }
  };
  var h_ = o.version;
  if (h_ !== "19.2.7") throw Error(i(527, h_, "19.2.7"));
  L.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = h(t), e = e !== null ? U(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var ek = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zu.isDisabled && Zu.supportsFiber) try {
      mr = Zu.inject(ek), It = Zu;
    } catch {
    }
  }
  n.createRoot = function(e, t) {
    if (!u(e)) throw Error(i(299));
    var r = !1, l = "", s = Q1, f = X1, v = K1;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (s = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (v = t.onRecoverableError)), t = P4(e, 1, !1, null, null, r, l, null, s, f, v, W4), e[pr] = t.current, Cy(e), new yf(t);
  };
})), vk = /* @__PURE__ */ $n(((n, a) => {
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (c) {
        console.error(c);
      }
  }
  o(), a.exports = mk();
})), bf = /* @__PURE__ */ F_(Ef(), 1), pk = /* @__PURE__ */ F_(vk(), 1), gk = class {
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
  on(n, a) {
    return this.listeners.has(n) || this.listeners.set(n, /* @__PURE__ */ new Set()), this.listeners.get(n).add(a), () => {
      this.listeners.get(n)?.delete(a);
    };
  }
  once(n, a) {
    const o = this.on(n, (c) => {
      a(c), o();
    });
    return o;
  }
  emit(n, a, o) {
    const c = {
      type: n,
      source: a,
      payload: o,
      timestamp: Date.now()
    };
    this.eventHistory.push(c), this.eventHistory.length > this.maxHistorySize && this.eventHistory.shift();
    const i = this.listeners.get(n);
    i && i.forEach((d) => {
      try {
        d(c);
      } catch (m) {
        console.error(`[EventBus] Error in listener for ${n}:`, m);
      }
    });
    const u = this.eventTarget ?? (typeof window < "u" ? window : void 0);
    if (u && typeof CustomEvent < "u") {
      const d = new CustomEvent("platform-event", {
        detail: c,
        bubbles: !0
      });
      u.dispatchEvent(d);
    }
  }
  getHistory(n) {
    return n ? this.eventHistory.filter((a) => a.type === n) : [...this.eventHistory];
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
}, Sf = new gk(), $f = {
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
}, y_, Uf = /* @__PURE__ */ Object.freeze({ status: "aborted" });
function z(n, a, o) {
  function c(m, y) {
    if (m._zod || Object.defineProperty(m, "_zod", {
      value: {
        def: y,
        constr: d,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), m._zod.traits.has(n)) return;
    m._zod.traits.add(n), a(m, y);
    const g = d.prototype, h = Object.keys(g);
    for (let U = 0; U < h.length; U++) {
      const w = h[U];
      w in m || (m[w] = g[w].bind(m));
    }
  }
  const i = o?.Parent ?? Object;
  class u extends i {
  }
  Object.defineProperty(u, "name", { value: n });
  function d(m) {
    var y;
    const g = o?.Parent ? new u() : this;
    c(g, m), (y = g._zod).deferred ?? (y.deferred = []);
    for (const h of g._zod.deferred) h();
    return g;
  }
  return Object.defineProperty(d, "init", { value: c }), Object.defineProperty(d, Symbol.hasInstance, { value: (m) => o?.Parent && m instanceof o.Parent ? !0 : m?._zod?.traits?.has(n) }), Object.defineProperty(d, "name", { value: n }), d;
}
var Of = /* @__PURE__ */ Symbol("zod_brand"), Gi = class extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}, Gu = class extends Error {
  constructor(n) {
    super(`Encountered unidirectional transform during encode: ${n}`), this.name = "ZodEncodeError";
  }
};
(y_ = globalThis).__zod_globalConfig ?? (y_.__zod_globalConfig = {});
var lo = globalThis.__zod_globalConfig;
function rt(n) {
  return n && Object.assign(lo, n), lo;
}
var Df = /* @__PURE__ */ gn({
  BIGINT_FORMAT_RANGES: () => rb,
  Class: () => Ak,
  NUMBER_FORMAT_RANGES: () => ab,
  aborted: () => Ji,
  allowsEval: () => tb,
  assert: () => Sk,
  assertEqual: () => hk,
  assertIs: () => _k,
  assertNever: () => bk,
  assertNotEqual: () => yk,
  assignProp: () => yi,
  base64ToUint8Array: () => vb,
  base64urlToUint8Array: () => Dk,
  cached: () => mo,
  captureStackTrace: () => Nf,
  cleanEnum: () => Ok,
  cleanRegex: () => Pu,
  clone: () => Yt,
  cloneDef: () => zk,
  createTransparentProxy: () => Uk,
  defineLazy: () => oe,
  esc: () => zf,
  escapeRegex: () => Jn,
  explicitlyAborted: () => mb,
  extend: () => ub,
  finalizeIssue: () => Pt,
  floatSafeRemainder: () => W_,
  getElementAtPath: () => kk,
  getEnumValues: () => Zf,
  getLengthableOrigin: () => Qu,
  getParsedType: () => Ek,
  getSizableOrigin: () => Vu,
  hexToUint8Array: () => Nk,
  isObject: () => qa,
  isPlainObject: () => Pi,
  issue: () => Ha,
  joinValues: () => C,
  jsonStringifyReplacer: () => Cu,
  merge: () => sb,
  mergeDefs: () => zn,
  normalizeParams: () => I,
  nullish: () => Ki,
  numKeys: () => xk,
  objectClone: () => $k,
  omit: () => lb,
  optionalKeys: () => ib,
  parsedType: () => K,
  partial: () => db,
  pick: () => ob,
  prefixIssues: () => un,
  primitiveTypes: () => nb,
  promiseAllObject: () => Tk,
  propertyKeyTypes: () => Mu,
  randomString: () => wk,
  required: () => fb,
  safeExtend: () => cb,
  shallowClone: () => Yu,
  slugify: () => eb,
  stringifyPrimitive: () => Q,
  uint8ArrayToBase64: () => pb,
  uint8ArrayToBase64url: () => Zk,
  uint8ArrayToHex: () => jk,
  unwrapMessage: () => oo
});
function hk(n) {
  return n;
}
function yk(n) {
  return n;
}
function _k(n) {
}
function bk(n) {
  throw new Error("Unexpected value in exhaustive check");
}
function Sk(n) {
}
function Zf(n) {
  const a = Object.values(n).filter((o) => typeof o == "number");
  return Object.entries(n).filter(([o, c]) => a.indexOf(+o) === -1).map(([o, c]) => c);
}
function C(n, a = "|") {
  return n.map((o) => Q(o)).join(a);
}
function Cu(n, a) {
  return typeof a == "bigint" ? a.toString() : a;
}
function mo(n) {
  return { get value() {
    {
      const a = n();
      return Object.defineProperty(this, "value", { value: a }), a;
    }
    throw new Error("cached value already set");
  } };
}
function Ki(n) {
  return n == null;
}
function Pu(n) {
  const a = n.startsWith("^") ? 1 : 0, o = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(a, o);
}
function W_(n, a) {
  const o = n / a, c = Math.round(o), i = Number.EPSILON * Math.max(Math.abs(o), 1);
  return Math.abs(o - c) < i ? 0 : o - c;
}
var __ = /* @__PURE__ */ Symbol("evaluating");
function oe(n, a, o) {
  let c;
  Object.defineProperty(n, a, {
    get() {
      if (c !== __)
        return c === void 0 && (c = __, c = o()), c;
    },
    set(i) {
      Object.defineProperty(n, a, { value: i });
    },
    configurable: !0
  });
}
function $k(n) {
  return Object.create(Object.getPrototypeOf(n), Object.getOwnPropertyDescriptors(n));
}
function yi(n, a, o) {
  Object.defineProperty(n, a, {
    value: o,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function zn(...n) {
  const a = {};
  for (const o of n) Object.assign(a, Object.getOwnPropertyDescriptors(o));
  return Object.defineProperties({}, a);
}
function zk(n) {
  return zn(n._zod.def);
}
function kk(n, a) {
  return a ? a.reduce((o, c) => o?.[c], n) : n;
}
function Tk(n) {
  const a = Object.keys(n), o = a.map((c) => n[c]);
  return Promise.all(o).then((c) => {
    const i = {};
    for (let u = 0; u < a.length; u++) i[a[u]] = c[u];
    return i;
  });
}
function wk(n = 10) {
  const a = "abcdefghijklmnopqrstuvwxyz";
  let o = "";
  for (let c = 0; c < n; c++) o += a[Math.floor(Math.random() * 26)];
  return o;
}
function zf(n) {
  return JSON.stringify(n);
}
function eb(n) {
  return n.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var Nf = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function qa(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
var tb = /* @__PURE__ */ mo(() => {
  if (lo.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
});
function Pi(n) {
  if (qa(n) === !1) return !1;
  const a = n.constructor;
  if (a === void 0 || typeof a != "function") return !0;
  const o = a.prototype;
  return !(qa(o) === !1 || Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === !1);
}
function Yu(n) {
  return Pi(n) ? { ...n } : Array.isArray(n) ? [...n] : n instanceof Map ? new Map(n) : n instanceof Set ? new Set(n) : n;
}
function xk(n) {
  let a = 0;
  for (const o in n) Object.prototype.hasOwnProperty.call(n, o) && a++;
  return a;
}
var Ek = (n) => {
  const a = typeof n;
  switch (a) {
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
      throw new Error(`Unknown data type: ${a}`);
  }
}, Mu = /* @__PURE__ */ new Set([
  "string",
  "number",
  "symbol"
]), nb = /* @__PURE__ */ new Set([
  "string",
  "number",
  "bigint",
  "boolean",
  "symbol",
  "undefined"
]);
function Jn(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Yt(n, a, o) {
  const c = new n._zod.constr(a ?? n._zod.def);
  return (!a || o?.parent) && (c._zod.parent = n), c;
}
function I(n) {
  const a = n;
  if (!a) return {};
  if (typeof a == "string") return { error: () => a };
  if (a?.message !== void 0) {
    if (a?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
    a.error = a.message;
  }
  return delete a.message, typeof a.error == "string" ? {
    ...a,
    error: () => a.error
  } : a;
}
function Uk(n) {
  let a;
  return new Proxy({}, {
    get(o, c, i) {
      return a ?? (a = n()), Reflect.get(a, c, i);
    },
    set(o, c, i, u) {
      return a ?? (a = n()), Reflect.set(a, c, i, u);
    },
    has(o, c) {
      return a ?? (a = n()), Reflect.has(a, c);
    },
    deleteProperty(o, c) {
      return a ?? (a = n()), Reflect.deleteProperty(a, c);
    },
    ownKeys(o) {
      return a ?? (a = n()), Reflect.ownKeys(a);
    },
    getOwnPropertyDescriptor(o, c) {
      return a ?? (a = n()), Reflect.getOwnPropertyDescriptor(a, c);
    },
    defineProperty(o, c, i) {
      return a ?? (a = n()), Reflect.defineProperty(a, c, i);
    }
  });
}
function Q(n) {
  return typeof n == "bigint" ? n.toString() + "n" : typeof n == "string" ? `"${n}"` : `${n}`;
}
function ib(n) {
  return Object.keys(n).filter((a) => n[a]._zod.optin === "optional" && n[a]._zod.optout === "optional");
}
var ab = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, rb = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function ob(n, a) {
  const o = n._zod.def, c = o.checks;
  if (c && c.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
  return Yt(n, zn(n._zod.def, {
    get shape() {
      const i = {};
      for (const u in a) {
        if (!(u in o.shape)) throw new Error(`Unrecognized key: "${u}"`);
        a[u] && (i[u] = o.shape[u]);
      }
      return yi(this, "shape", i), i;
    },
    checks: []
  }));
}
function lb(n, a) {
  const o = n._zod.def, c = o.checks;
  if (c && c.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
  return Yt(n, zn(n._zod.def, {
    get shape() {
      const i = { ...n._zod.def.shape };
      for (const u in a) {
        if (!(u in o.shape)) throw new Error(`Unrecognized key: "${u}"`);
        a[u] && delete i[u];
      }
      return yi(this, "shape", i), i;
    },
    checks: []
  }));
}
function ub(n, a) {
  if (!Pi(a)) throw new Error("Invalid input to extend: expected a plain object");
  const o = n._zod.def.checks;
  if (o && o.length > 0) {
    const c = n._zod.def.shape;
    for (const i in a) if (Object.getOwnPropertyDescriptor(c, i) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  return Yt(n, zn(n._zod.def, { get shape() {
    const c = {
      ...n._zod.def.shape,
      ...a
    };
    return yi(this, "shape", c), c;
  } }));
}
function cb(n, a) {
  if (!Pi(a)) throw new Error("Invalid input to safeExtend: expected a plain object");
  return Yt(n, zn(n._zod.def, { get shape() {
    const o = {
      ...n._zod.def.shape,
      ...a
    };
    return yi(this, "shape", o), o;
  } }));
}
function sb(n, a) {
  if (n._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  return Yt(n, zn(n._zod.def, {
    get shape() {
      const o = {
        ...n._zod.def.shape,
        ...a._zod.def.shape
      };
      return yi(this, "shape", o), o;
    },
    get catchall() {
      return a._zod.def.catchall;
    },
    checks: a._zod.def.checks ?? []
  }));
}
function db(n, a, o) {
  const c = a._zod.def.checks;
  if (c && c.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
  return Yt(a, zn(a._zod.def, {
    get shape() {
      const i = a._zod.def.shape, u = { ...i };
      if (o) for (const d in o) {
        if (!(d in i)) throw new Error(`Unrecognized key: "${d}"`);
        o[d] && (u[d] = n ? new n({
          type: "optional",
          innerType: i[d]
        }) : i[d]);
      }
      else for (const d in i) u[d] = n ? new n({
        type: "optional",
        innerType: i[d]
      }) : i[d];
      return yi(this, "shape", u), u;
    },
    checks: []
  }));
}
function fb(n, a, o) {
  return Yt(a, zn(a._zod.def, { get shape() {
    const c = a._zod.def.shape, i = { ...c };
    if (o) for (const u in o) {
      if (!(u in i)) throw new Error(`Unrecognized key: "${u}"`);
      o[u] && (i[u] = new n({
        type: "nonoptional",
        innerType: c[u]
      }));
    }
    else for (const u in c) i[u] = new n({
      type: "nonoptional",
      innerType: c[u]
    });
    return yi(this, "shape", i), i;
  } }));
}
function Ji(n, a = 0) {
  if (n.aborted === !0) return !0;
  for (let o = a; o < n.issues.length; o++) if (n.issues[o]?.continue !== !0) return !0;
  return !1;
}
function mb(n, a = 0) {
  if (n.aborted === !0) return !0;
  for (let o = a; o < n.issues.length; o++) if (n.issues[o]?.continue === !1) return !0;
  return !1;
}
function un(n, a) {
  return a.map((o) => {
    var c;
    return (c = o).path ?? (c.path = []), o.path.unshift(n), o;
  });
}
function oo(n) {
  return typeof n == "string" ? n : n?.message;
}
function Pt(n, a, o) {
  const c = n.message ? n.message : oo(n.inst?._zod.def?.error?.(n)) ?? oo(a?.error?.(n)) ?? oo(o.customError?.(n)) ?? oo(o.localeError?.(n)) ?? "Invalid input", { inst: i, continue: u, input: d, ...m } = n;
  return m.path ?? (m.path = []), m.message = c, a?.reportInput && (m.input = d), m;
}
function Vu(n) {
  return n instanceof Set ? "set" : n instanceof Map ? "map" : n instanceof File ? "file" : "unknown";
}
function Qu(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function K(n) {
  const a = typeof n;
  switch (a) {
    case "number":
      return Number.isNaN(n) ? "nan" : "number";
    case "object": {
      if (n === null) return "null";
      if (Array.isArray(n)) return "array";
      const o = n;
      if (o && Object.getPrototypeOf(o) !== Object.prototype && "constructor" in o && o.constructor) return o.constructor.name;
    }
  }
  return a;
}
function Ha(...n) {
  const [a, o, c] = n;
  return typeof a == "string" ? {
    message: a,
    code: "custom",
    input: o,
    inst: c
  } : { ...a };
}
function Ok(n) {
  return Object.entries(n).filter(([a, o]) => Number.isNaN(Number.parseInt(a, 10))).map((a) => a[1]);
}
function vb(n) {
  const a = atob(n), o = new Uint8Array(a.length);
  for (let c = 0; c < a.length; c++) o[c] = a.charCodeAt(c);
  return o;
}
function pb(n) {
  let a = "";
  for (let o = 0; o < n.length; o++) a += String.fromCharCode(n[o]);
  return btoa(a);
}
function Dk(n) {
  const a = n.replace(/-/g, "+").replace(/_/g, "/");
  return vb(a + "=".repeat((4 - a.length % 4) % 4));
}
function Zk(n) {
  return pb(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function Nk(n) {
  const a = n.replace(/^0x/, "");
  if (a.length % 2 !== 0) throw new Error("Invalid hex string length");
  const o = new Uint8Array(a.length / 2);
  for (let c = 0; c < a.length; c += 2) o[c / 2] = Number.parseInt(a.slice(c, c + 2), 16);
  return o;
}
function jk(n) {
  return Array.from(n).map((a) => a.toString(16).padStart(2, "0")).join("");
}
var Ak = class {
  constructor(...n) {
  }
}, gb = (n, a) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: a,
    enumerable: !1
  }), n.message = JSON.stringify(a, Cu, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, jf = z("$ZodError", gb), Vt = z("$ZodError", gb, { Parent: Error });
function Xu(n, a = (o) => o.message) {
  const o = {}, c = [];
  for (const i of n.issues) i.path.length > 0 ? (o[i.path[0]] = o[i.path[0]] || [], o[i.path[0]].push(a(i))) : c.push(a(i));
  return {
    formErrors: c,
    fieldErrors: o
  };
}
function Ku(n, a = (o) => o.message) {
  const o = { _errors: [] }, c = (i, u = []) => {
    for (const d of i.issues) if (d.code === "invalid_union" && d.errors.length) d.errors.map((m) => c({ issues: m }, [...u, ...d.path]));
    else if (d.code === "invalid_key") c({ issues: d.issues }, [...u, ...d.path]);
    else if (d.code === "invalid_element") c({ issues: d.issues }, [...u, ...d.path]);
    else {
      const m = [...u, ...d.path];
      if (m.length === 0) o._errors.push(a(d));
      else {
        let y = o, g = 0;
        for (; g < m.length; ) {
          const h = m[g];
          g !== m.length - 1 ? y[h] = y[h] || { _errors: [] } : (y[h] = y[h] || { _errors: [] }, y[h]._errors.push(a(d))), y = y[h], g++;
        }
      }
    }
  };
  return c(n), o;
}
function Af(n, a = (o) => o.message) {
  const o = { errors: [] }, c = (i, u = []) => {
    var d, m;
    for (const y of i.issues) if (y.code === "invalid_union" && y.errors.length) y.errors.map((g) => c({ issues: g }, [...u, ...y.path]));
    else if (y.code === "invalid_key") c({ issues: y.issues }, [...u, ...y.path]);
    else if (y.code === "invalid_element") c({ issues: y.issues }, [...u, ...y.path]);
    else {
      const g = [...u, ...y.path];
      if (g.length === 0) {
        o.errors.push(a(y));
        continue;
      }
      let h = o, U = 0;
      for (; U < g.length; ) {
        const w = g[U], q = U === g.length - 1;
        typeof w == "string" ? (h.properties ?? (h.properties = {}), (d = h.properties)[w] ?? (d[w] = { errors: [] }), h = h.properties[w]) : (h.items ?? (h.items = []), (m = h.items)[w] ?? (m[w] = { errors: [] }), h = h.items[w]), q && h.errors.push(a(y)), U++;
      }
    }
  };
  return c(n), o;
}
function hb(n) {
  const a = [], o = n.map((c) => typeof c == "object" ? c.key : c);
  for (const c of o) typeof c == "number" ? a.push(`[${c}]`) : typeof c == "symbol" ? a.push(`[${JSON.stringify(String(c))}]`) : /[^\w$]/.test(c) ? a.push(`[${JSON.stringify(c)}]`) : (a.length && a.push("."), a.push(c));
  return a.join("");
}
function If(n) {
  const a = [], o = [...n.issues].sort((c, i) => (c.path ?? []).length - (i.path ?? []).length);
  for (const c of o)
    a.push(`✖ ${c.message}`), c.path?.length && a.push(`  → at ${hb(c.path)}`);
  return a.join(`
`);
}
var vo = (n) => (a, o, c, i) => {
  const u = c ? {
    ...c,
    async: !1
  } : { async: !1 }, d = a._zod.run({
    value: o,
    issues: []
  }, u);
  if (d instanceof Promise) throw new Gi();
  if (d.issues.length) {
    const m = new (i?.Err ?? n)(d.issues.map((y) => Pt(y, u, rt())));
    throw Nf(m, i?.callee), m;
  }
  return d.value;
}, kf = /* @__PURE__ */ vo(Vt), po = (n) => async (a, o, c, i) => {
  const u = c ? {
    ...c,
    async: !0
  } : { async: !0 };
  let d = a._zod.run({
    value: o,
    issues: []
  }, u);
  if (d instanceof Promise && (d = await d), d.issues.length) {
    const m = new (i?.Err ?? n)(d.issues.map((y) => Pt(y, u, rt())));
    throw Nf(m, i?.callee), m;
  }
  return d.value;
}, Tf = /* @__PURE__ */ po(Vt), go = (n) => (a, o, c) => {
  const i = c ? {
    ...c,
    async: !1
  } : { async: !1 }, u = a._zod.run({
    value: o,
    issues: []
  }, i);
  if (u instanceof Promise) throw new Gi();
  return u.issues.length ? {
    success: !1,
    error: new (n ?? jf)(u.issues.map((d) => Pt(d, i, rt())))
  } : {
    success: !0,
    data: u.value
  };
}, Rf = /* @__PURE__ */ go(Vt), ho = (n) => async (a, o, c) => {
  const i = c ? {
    ...c,
    async: !0
  } : { async: !0 };
  let u = a._zod.run({
    value: o,
    issues: []
  }, i);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new n(u.issues.map((d) => Pt(d, i, rt())))
  } : {
    success: !0,
    data: u.value
  };
}, yb = /* @__PURE__ */ ho(Vt), Cf = (n) => (a, o, c) => {
  const i = c ? {
    ...c,
    direction: "backward"
  } : { direction: "backward" };
  return vo(n)(a, o, i);
}, Ik = /* @__PURE__ */ Cf(Vt), Mf = (n) => (a, o, c) => vo(n)(a, o, c), Rk = /* @__PURE__ */ Mf(Vt), qf = (n) => async (a, o, c) => {
  const i = c ? {
    ...c,
    direction: "backward"
  } : { direction: "backward" };
  return po(n)(a, o, i);
}, Ck = /* @__PURE__ */ qf(Vt), Hf = (n) => async (a, o, c) => po(n)(a, o, c), Mk = /* @__PURE__ */ Hf(Vt), Lf = (n) => (a, o, c) => {
  const i = c ? {
    ...c,
    direction: "backward"
  } : { direction: "backward" };
  return go(n)(a, o, i);
}, qk = /* @__PURE__ */ Lf(Vt), Bf = (n) => (a, o, c) => go(n)(a, o, c), Hk = /* @__PURE__ */ Bf(Vt), Jf = (n) => async (a, o, c) => {
  const i = c ? {
    ...c,
    direction: "backward"
  } : { direction: "backward" };
  return ho(n)(a, o, i);
}, Lk = /* @__PURE__ */ Jf(Vt), Gf = (n) => async (a, o, c) => ho(n)(a, o, c), Bk = /* @__PURE__ */ Gf(Vt), Fu = /* @__PURE__ */ gn({
  base64: () => Ab,
  base64url: () => Pf,
  bigint: () => Gb,
  boolean: () => Yb,
  browserEmail: () => Kk,
  cidrv4: () => Nb,
  cidrv6: () => jb,
  cuid: () => _b,
  cuid2: () => bb,
  date: () => qb,
  datetime: () => Bb,
  domain: () => Rb,
  duration: () => Tb,
  e164: () => Cb,
  email: () => xb,
  emoji: () => Ub,
  extendedDuration: () => Jk,
  guid: () => wb,
  hex: () => Fb,
  hostname: () => Ib,
  html5Email: () => Vk,
  httpProtocol: () => Yf,
  idnEmail: () => Xk,
  integer: () => Pb,
  ipv4: () => Ob,
  ipv6: () => Db,
  ksuid: () => zb,
  lowercase: () => Xb,
  mac: () => Zb,
  md5_base64: () => e6,
  md5_base64url: () => t6,
  md5_hex: () => Wk,
  nanoid: () => kb,
  null: () => Vb,
  number: () => Vf,
  rfc5322Email: () => Qk,
  sha1_base64: () => i6,
  sha1_base64url: () => a6,
  sha1_hex: () => n6,
  sha256_base64: () => o6,
  sha256_base64url: () => l6,
  sha256_hex: () => r6,
  sha384_base64: () => c6,
  sha384_base64url: () => s6,
  sha384_hex: () => u6,
  sha512_base64: () => f6,
  sha512_base64url: () => m6,
  sha512_hex: () => d6,
  string: () => Jb,
  time: () => Lb,
  ulid: () => Sb,
  undefined: () => Qb,
  unicodeEmail: () => Eb,
  uppercase: () => Kb,
  uuid: () => La,
  uuid4: () => Gk,
  uuid6: () => Pk,
  uuid7: () => Yk,
  xid: () => $b
}), _b = /^[cC][0-9a-z]{6,}$/, bb = /^[0-9a-z]+$/, Sb = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, $b = /^[0-9a-vA-V]{20}$/, zb = /^[A-Za-z0-9]{27}$/, kb = /^[a-zA-Z0-9_-]{21}$/, Tb = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Jk = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, wb = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, La = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Gk = /* @__PURE__ */ La(4), Pk = /* @__PURE__ */ La(6), Yk = /* @__PURE__ */ La(7), xb = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Vk = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Qk = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Eb = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, Xk = Eb, Kk = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Fk = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Ub() {
  return new RegExp(Fk, "u");
}
var Ob = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Db = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Zb = (n) => {
  const a = Jn(n ?? ":");
  return new RegExp(`^(?:[0-9A-F]{2}${a}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${a}){5}[0-9a-f]{2}$`);
}, Nb = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, jb = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Ab = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Pf = /^[A-Za-z0-9_-]*$/, Ib = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, Rb = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, Yf = /^https?$/, Cb = /^\+[1-9]\d{6,14}$/, Mb = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", qb = /* @__PURE__ */ new RegExp(`^${Mb}$`);
function Hb(n) {
  const a = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${a}` : n.precision === 0 ? `${a}:[0-5]\\d` : `${a}:[0-5]\\d\\.\\d{${n.precision}}` : `${a}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Lb(n) {
  return new RegExp(`^${Hb(n)}$`);
}
function Bb(n) {
  const a = Hb({ precision: n.precision }), o = ["Z"];
  n.local && o.push(""), n.offset && o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const c = `${a}(?:${o.join("|")})`;
  return new RegExp(`^${Mb}T(?:${c})$`);
}
var Jb = (n) => {
  const a = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${a}$`);
}, Gb = /^-?\d+n?$/, Pb = /^-?\d+$/, Vf = /^-?\d+(?:\.\d+)?$/, Yb = /^(?:true|false)$/i, Vb = /^null$/i, Qb = /^undefined$/i, Xb = /^[^A-Z]*$/, Kb = /^[^a-z]*$/, Fb = /^[0-9a-fA-F]*$/;
function yo(n, a) {
  return new RegExp(`^[A-Za-z0-9+/]{${n}}${a}$`);
}
function _o(n) {
  return new RegExp(`^[A-Za-z0-9_-]{${n}}$`);
}
var Wk = /^[0-9a-fA-F]{32}$/, e6 = /* @__PURE__ */ yo(22, "=="), t6 = /* @__PURE__ */ _o(22), n6 = /^[0-9a-fA-F]{40}$/, i6 = /* @__PURE__ */ yo(27, "="), a6 = /* @__PURE__ */ _o(27), r6 = /^[0-9a-fA-F]{64}$/, o6 = /* @__PURE__ */ yo(43, "="), l6 = /* @__PURE__ */ _o(43), u6 = /^[0-9a-fA-F]{96}$/, c6 = /* @__PURE__ */ yo(64, ""), s6 = /* @__PURE__ */ _o(64), d6 = /^[0-9a-fA-F]{128}$/, f6 = /* @__PURE__ */ yo(86, "=="), m6 = /* @__PURE__ */ _o(86), Ge = /* @__PURE__ */ z("$ZodCheck", (n, a) => {
  var o;
  n._zod ?? (n._zod = {}), n._zod.def = a, (o = n._zod).onattach ?? (o.onattach = []);
}), Wb = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, Qf = /* @__PURE__ */ z("$ZodCheckLessThan", (n, a) => {
  Ge.init(n, a);
  const o = Wb[typeof a.value];
  n._zod.onattach.push((c) => {
    const i = c._zod.bag, u = (a.inclusive ? i.maximum : i.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    a.value < u && (a.inclusive ? i.maximum = a.value : i.exclusiveMaximum = a.value);
  }), n._zod.check = (c) => {
    (a.inclusive ? c.value <= a.value : c.value < a.value) || c.issues.push({
      origin: o,
      code: "too_big",
      maximum: typeof a.value == "object" ? a.value.getTime() : a.value,
      input: c.value,
      inclusive: a.inclusive,
      inst: n,
      continue: !a.abort
    });
  };
}), Xf = /* @__PURE__ */ z("$ZodCheckGreaterThan", (n, a) => {
  Ge.init(n, a);
  const o = Wb[typeof a.value];
  n._zod.onattach.push((c) => {
    const i = c._zod.bag, u = (a.inclusive ? i.minimum : i.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    a.value > u && (a.inclusive ? i.minimum = a.value : i.exclusiveMinimum = a.value);
  }), n._zod.check = (c) => {
    (a.inclusive ? c.value >= a.value : c.value > a.value) || c.issues.push({
      origin: o,
      code: "too_small",
      minimum: typeof a.value == "object" ? a.value.getTime() : a.value,
      input: c.value,
      inclusive: a.inclusive,
      inst: n,
      continue: !a.abort
    });
  };
}), eS = /* @__PURE__ */ z("$ZodCheckMultipleOf", (n, a) => {
  Ge.init(n, a), n._zod.onattach.push((o) => {
    var c;
    (c = o._zod.bag).multipleOf ?? (c.multipleOf = a.value);
  }), n._zod.check = (o) => {
    if (typeof o.value != typeof a.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof o.value == "bigint" ? o.value % a.value === BigInt(0) : W_(o.value, a.value) === 0) || o.issues.push({
      origin: typeof o.value,
      code: "not_multiple_of",
      divisor: a.value,
      input: o.value,
      inst: n,
      continue: !a.abort
    });
  };
}), tS = /* @__PURE__ */ z("$ZodCheckNumberFormat", (n, a) => {
  Ge.init(n, a), a.format = a.format || "float64";
  const o = a.format?.includes("int"), c = o ? "int" : "number", [i, u] = ab[a.format];
  n._zod.onattach.push((d) => {
    const m = d._zod.bag;
    m.format = a.format, m.minimum = i, m.maximum = u, o && (m.pattern = Pb);
  }), n._zod.check = (d) => {
    const m = d.value;
    if (o) {
      if (!Number.isInteger(m)) {
        d.issues.push({
          expected: c,
          format: a.format,
          code: "invalid_type",
          continue: !1,
          input: m,
          inst: n
        });
        return;
      }
      if (!Number.isSafeInteger(m)) {
        m > 0 ? d.issues.push({
          input: m,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: c,
          inclusive: !0,
          continue: !a.abort
        }) : d.issues.push({
          input: m,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: n,
          origin: c,
          inclusive: !0,
          continue: !a.abort
        });
        return;
      }
    }
    m < i && d.issues.push({
      origin: "number",
      input: m,
      code: "too_small",
      minimum: i,
      inclusive: !0,
      inst: n,
      continue: !a.abort
    }), m > u && d.issues.push({
      origin: "number",
      input: m,
      code: "too_big",
      maximum: u,
      inclusive: !0,
      inst: n,
      continue: !a.abort
    });
  };
}), nS = /* @__PURE__ */ z("$ZodCheckBigIntFormat", (n, a) => {
  Ge.init(n, a);
  const [o, c] = rb[a.format];
  n._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.format = a.format, u.minimum = o, u.maximum = c;
  }), n._zod.check = (i) => {
    const u = i.value;
    u < o && i.issues.push({
      origin: "bigint",
      input: u,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: n,
      continue: !a.abort
    }), u > c && i.issues.push({
      origin: "bigint",
      input: u,
      code: "too_big",
      maximum: c,
      inclusive: !0,
      inst: n,
      continue: !a.abort
    });
  };
}), iS = /* @__PURE__ */ z("$ZodCheckMaxSize", (n, a) => {
  var o;
  Ge.init(n, a), (o = n._zod.def).when ?? (o.when = (c) => {
    const i = c.value;
    return !Ki(i) && i.size !== void 0;
  }), n._zod.onattach.push((c) => {
    const i = c._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    a.maximum < i && (c._zod.bag.maximum = a.maximum);
  }), n._zod.check = (c) => {
    const i = c.value;
    i.size <= a.maximum || c.issues.push({
      origin: Vu(i),
      code: "too_big",
      maximum: a.maximum,
      inclusive: !0,
      input: i,
      inst: n,
      continue: !a.abort
    });
  };
}), aS = /* @__PURE__ */ z("$ZodCheckMinSize", (n, a) => {
  var o;
  Ge.init(n, a), (o = n._zod.def).when ?? (o.when = (c) => {
    const i = c.value;
    return !Ki(i) && i.size !== void 0;
  }), n._zod.onattach.push((c) => {
    const i = c._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    a.minimum > i && (c._zod.bag.minimum = a.minimum);
  }), n._zod.check = (c) => {
    const i = c.value;
    i.size >= a.minimum || c.issues.push({
      origin: Vu(i),
      code: "too_small",
      minimum: a.minimum,
      inclusive: !0,
      input: i,
      inst: n,
      continue: !a.abort
    });
  };
}), rS = /* @__PURE__ */ z("$ZodCheckSizeEquals", (n, a) => {
  var o;
  Ge.init(n, a), (o = n._zod.def).when ?? (o.when = (c) => {
    const i = c.value;
    return !Ki(i) && i.size !== void 0;
  }), n._zod.onattach.push((c) => {
    const i = c._zod.bag;
    i.minimum = a.size, i.maximum = a.size, i.size = a.size;
  }), n._zod.check = (c) => {
    const i = c.value, u = i.size;
    if (u === a.size) return;
    const d = u > a.size;
    c.issues.push({
      origin: Vu(i),
      ...d ? {
        code: "too_big",
        maximum: a.size
      } : {
        code: "too_small",
        minimum: a.size
      },
      inclusive: !0,
      exact: !0,
      input: c.value,
      inst: n,
      continue: !a.abort
    });
  };
}), oS = /* @__PURE__ */ z("$ZodCheckMaxLength", (n, a) => {
  var o;
  Ge.init(n, a), (o = n._zod.def).when ?? (o.when = (c) => {
    const i = c.value;
    return !Ki(i) && i.length !== void 0;
  }), n._zod.onattach.push((c) => {
    const i = c._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    a.maximum < i && (c._zod.bag.maximum = a.maximum);
  }), n._zod.check = (c) => {
    const i = c.value;
    if (i.length <= a.maximum) return;
    const u = Qu(i);
    c.issues.push({
      origin: u,
      code: "too_big",
      maximum: a.maximum,
      inclusive: !0,
      input: i,
      inst: n,
      continue: !a.abort
    });
  };
}), lS = /* @__PURE__ */ z("$ZodCheckMinLength", (n, a) => {
  var o;
  Ge.init(n, a), (o = n._zod.def).when ?? (o.when = (c) => {
    const i = c.value;
    return !Ki(i) && i.length !== void 0;
  }), n._zod.onattach.push((c) => {
    const i = c._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    a.minimum > i && (c._zod.bag.minimum = a.minimum);
  }), n._zod.check = (c) => {
    const i = c.value;
    if (i.length >= a.minimum) return;
    const u = Qu(i);
    c.issues.push({
      origin: u,
      code: "too_small",
      minimum: a.minimum,
      inclusive: !0,
      input: i,
      inst: n,
      continue: !a.abort
    });
  };
}), uS = /* @__PURE__ */ z("$ZodCheckLengthEquals", (n, a) => {
  var o;
  Ge.init(n, a), (o = n._zod.def).when ?? (o.when = (c) => {
    const i = c.value;
    return !Ki(i) && i.length !== void 0;
  }), n._zod.onattach.push((c) => {
    const i = c._zod.bag;
    i.minimum = a.length, i.maximum = a.length, i.length = a.length;
  }), n._zod.check = (c) => {
    const i = c.value, u = i.length;
    if (u === a.length) return;
    const d = Qu(i), m = u > a.length;
    c.issues.push({
      origin: d,
      ...m ? {
        code: "too_big",
        maximum: a.length
      } : {
        code: "too_small",
        minimum: a.length
      },
      inclusive: !0,
      exact: !0,
      input: c.value,
      inst: n,
      continue: !a.abort
    });
  };
}), bo = /* @__PURE__ */ z("$ZodCheckStringFormat", (n, a) => {
  var o, c;
  Ge.init(n, a), n._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.format = a.format, a.pattern && (u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(a.pattern));
  }), a.pattern ? (o = n._zod).check ?? (o.check = (i) => {
    a.pattern.lastIndex = 0, !a.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: a.format,
      input: i.value,
      ...a.pattern ? { pattern: a.pattern.toString() } : {},
      inst: n,
      continue: !a.abort
    });
  }) : (c = n._zod).check ?? (c.check = () => {
  });
}), cS = /* @__PURE__ */ z("$ZodCheckRegex", (n, a) => {
  bo.init(n, a), n._zod.check = (o) => {
    a.pattern.lastIndex = 0, !a.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: o.value,
      pattern: a.pattern.toString(),
      inst: n,
      continue: !a.abort
    });
  };
}), sS = /* @__PURE__ */ z("$ZodCheckLowerCase", (n, a) => {
  a.pattern ?? (a.pattern = Xb), bo.init(n, a);
}), dS = /* @__PURE__ */ z("$ZodCheckUpperCase", (n, a) => {
  a.pattern ?? (a.pattern = Kb), bo.init(n, a);
}), fS = /* @__PURE__ */ z("$ZodCheckIncludes", (n, a) => {
  Ge.init(n, a);
  const o = Jn(a.includes), c = new RegExp(typeof a.position == "number" ? `^.{${a.position}}${o}` : o);
  a.pattern = c, n._zod.onattach.push((i) => {
    const u = i._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(c);
  }), n._zod.check = (i) => {
    i.value.includes(a.includes, a.position) || i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: a.includes,
      input: i.value,
      inst: n,
      continue: !a.abort
    });
  };
}), mS = /* @__PURE__ */ z("$ZodCheckStartsWith", (n, a) => {
  Ge.init(n, a);
  const o = new RegExp(`^${Jn(a.prefix)}.*`);
  a.pattern ?? (a.pattern = o), n._zod.onattach.push((c) => {
    const i = c._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(o);
  }), n._zod.check = (c) => {
    c.value.startsWith(a.prefix) || c.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: a.prefix,
      input: c.value,
      inst: n,
      continue: !a.abort
    });
  };
}), vS = /* @__PURE__ */ z("$ZodCheckEndsWith", (n, a) => {
  Ge.init(n, a);
  const o = new RegExp(`.*${Jn(a.suffix)}$`);
  a.pattern ?? (a.pattern = o), n._zod.onattach.push((c) => {
    const i = c._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(o);
  }), n._zod.check = (c) => {
    c.value.endsWith(a.suffix) || c.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: a.suffix,
      input: c.value,
      inst: n,
      continue: !a.abort
    });
  };
});
function b_(n, a, o) {
  n.issues.length && a.issues.push(...un(o, n.issues));
}
var pS = /* @__PURE__ */ z("$ZodCheckProperty", (n, a) => {
  Ge.init(n, a), n._zod.check = (o) => {
    const c = a.schema._zod.run({
      value: o.value[a.property],
      issues: []
    }, {});
    if (c instanceof Promise) return c.then((i) => b_(i, o, a.property));
    b_(c, o, a.property);
  };
}), gS = /* @__PURE__ */ z("$ZodCheckMimeType", (n, a) => {
  Ge.init(n, a);
  const o = new Set(a.mime);
  n._zod.onattach.push((c) => {
    c._zod.bag.mime = a.mime;
  }), n._zod.check = (c) => {
    o.has(c.value.type) || c.issues.push({
      code: "invalid_value",
      values: a.mime,
      input: c.value.type,
      inst: n,
      continue: !a.abort
    });
  };
}), hS = /* @__PURE__ */ z("$ZodCheckOverwrite", (n, a) => {
  Ge.init(n, a), n._zod.check = (o) => {
    o.value = a.tx(o.value);
  };
}), yS = class {
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
    const a = n.split(`
`).filter((i) => i), o = Math.min(...a.map((i) => i.length - i.trimStart().length)), c = a.map((i) => i.slice(o)).map((i) => " ".repeat(this.indent * 2) + i);
    for (const i of c) this.content.push(i);
  }
  compile() {
    const n = Function, a = this?.args, o = [...(this?.content ?? [""]).map((c) => `  ${c}`)];
    return new n(...a, o.join(`
`));
  }
}, _S = {
  major: 4,
  minor: 4,
  patch: 3
}, ee = /* @__PURE__ */ z("$ZodType", (n, a) => {
  var o;
  n ?? (n = {}), n._zod.def = a, n._zod.bag = n._zod.bag || {}, n._zod.version = _S;
  const c = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && c.unshift(n);
  for (const i of c) for (const u of i._zod.onattach) u(n);
  if (c.length === 0)
    (o = n._zod).deferred ?? (o.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const i = (d, m, y) => {
      let g = Ji(d), h;
      for (const U of m) {
        if (U._zod.def.when) {
          if (mb(d) || !U._zod.def.when(d)) continue;
        } else if (g) continue;
        const w = d.issues.length, q = U._zod.check(d);
        if (q instanceof Promise && y?.async === !1) throw new Gi();
        if (h || q instanceof Promise) h = (h ?? Promise.resolve()).then(async () => {
          await q, d.issues.length !== w && (g || (g = Ji(d, w)));
        });
        else {
          if (d.issues.length === w) continue;
          g || (g = Ji(d, w));
        }
      }
      return h ? h.then(() => d) : d;
    }, u = (d, m, y) => {
      if (Ji(d))
        return d.aborted = !0, d;
      const g = i(m, c, y);
      if (g instanceof Promise) {
        if (y.async === !1) throw new Gi();
        return g.then((h) => n._zod.parse(h, y));
      }
      return n._zod.parse(g, y);
    };
    n._zod.run = (d, m) => {
      if (m.skipChecks) return n._zod.parse(d, m);
      if (m.direction === "backward") {
        const g = n._zod.parse({
          value: d.value,
          issues: []
        }, {
          ...m,
          skipChecks: !0
        });
        return g instanceof Promise ? g.then((h) => u(h, d, m)) : u(g, d, m);
      }
      const y = n._zod.parse(d, m);
      if (y instanceof Promise) {
        if (m.async === !1) throw new Gi();
        return y.then((g) => i(g, c, m));
      }
      return i(y, c, m);
    };
  }
  oe(n, "~standard", () => ({
    validate: (i) => {
      try {
        const u = Rf(n, i);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return yb(n, i).then((d) => d.success ? { value: d.data } : { issues: d.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), So = /* @__PURE__ */ z("$ZodString", (n, a) => {
  ee.init(n, a), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? Jb(n._zod.bag), n._zod.parse = (o, c) => {
    if (a.coerce) try {
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
}), qe = /* @__PURE__ */ z("$ZodStringFormat", (n, a) => {
  bo.init(n, a), So.init(n, a);
}), bS = /* @__PURE__ */ z("$ZodGUID", (n, a) => {
  a.pattern ?? (a.pattern = wb), qe.init(n, a);
}), SS = /* @__PURE__ */ z("$ZodUUID", (n, a) => {
  if (a.version) {
    const o = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[a.version];
    if (o === void 0) throw new Error(`Invalid UUID version: "${a.version}"`);
    a.pattern ?? (a.pattern = La(o));
  } else a.pattern ?? (a.pattern = La());
  qe.init(n, a);
}), $S = /* @__PURE__ */ z("$ZodEmail", (n, a) => {
  a.pattern ?? (a.pattern = xb), qe.init(n, a);
}), zS = /* @__PURE__ */ z("$ZodURL", (n, a) => {
  qe.init(n, a), n._zod.check = (o) => {
    try {
      const c = o.value.trim();
      if (!a.normalize && a.protocol?.source === Yf.source && !/^https?:\/\//i.test(c)) {
        o.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: o.value,
          inst: n,
          continue: !a.abort
        });
        return;
      }
      const i = new URL(c);
      a.hostname && (a.hostname.lastIndex = 0, a.hostname.test(i.hostname) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: a.hostname.source,
        input: o.value,
        inst: n,
        continue: !a.abort
      })), a.protocol && (a.protocol.lastIndex = 0, a.protocol.test(i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol) || o.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: a.protocol.source,
        input: o.value,
        inst: n,
        continue: !a.abort
      })), a.normalize ? o.value = i.href : o.value = c;
      return;
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "url",
        input: o.value,
        inst: n,
        continue: !a.abort
      });
    }
  };
}), kS = /* @__PURE__ */ z("$ZodEmoji", (n, a) => {
  a.pattern ?? (a.pattern = Ub()), qe.init(n, a);
}), TS = /* @__PURE__ */ z("$ZodNanoID", (n, a) => {
  a.pattern ?? (a.pattern = kb), qe.init(n, a);
}), wS = /* @__PURE__ */ z("$ZodCUID", (n, a) => {
  a.pattern ?? (a.pattern = _b), qe.init(n, a);
}), xS = /* @__PURE__ */ z("$ZodCUID2", (n, a) => {
  a.pattern ?? (a.pattern = bb), qe.init(n, a);
}), ES = /* @__PURE__ */ z("$ZodULID", (n, a) => {
  a.pattern ?? (a.pattern = Sb), qe.init(n, a);
}), US = /* @__PURE__ */ z("$ZodXID", (n, a) => {
  a.pattern ?? (a.pattern = $b), qe.init(n, a);
}), OS = /* @__PURE__ */ z("$ZodKSUID", (n, a) => {
  a.pattern ?? (a.pattern = zb), qe.init(n, a);
}), DS = /* @__PURE__ */ z("$ZodISODateTime", (n, a) => {
  a.pattern ?? (a.pattern = Bb(a)), qe.init(n, a);
}), ZS = /* @__PURE__ */ z("$ZodISODate", (n, a) => {
  a.pattern ?? (a.pattern = qb), qe.init(n, a);
}), NS = /* @__PURE__ */ z("$ZodISOTime", (n, a) => {
  a.pattern ?? (a.pattern = Lb(a)), qe.init(n, a);
}), jS = /* @__PURE__ */ z("$ZodISODuration", (n, a) => {
  a.pattern ?? (a.pattern = Tb), qe.init(n, a);
}), AS = /* @__PURE__ */ z("$ZodIPv4", (n, a) => {
  a.pattern ?? (a.pattern = Ob), qe.init(n, a), n._zod.bag.format = "ipv4";
}), IS = /* @__PURE__ */ z("$ZodIPv6", (n, a) => {
  a.pattern ?? (a.pattern = Db), qe.init(n, a), n._zod.bag.format = "ipv6", n._zod.check = (o) => {
    try {
      new URL(`http://[${o.value}]`);
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: o.value,
        inst: n,
        continue: !a.abort
      });
    }
  };
}), RS = /* @__PURE__ */ z("$ZodMAC", (n, a) => {
  a.pattern ?? (a.pattern = Zb(a.delimiter)), qe.init(n, a), n._zod.bag.format = "mac";
}), CS = /* @__PURE__ */ z("$ZodCIDRv4", (n, a) => {
  a.pattern ?? (a.pattern = Nb), qe.init(n, a);
}), MS = /* @__PURE__ */ z("$ZodCIDRv6", (n, a) => {
  a.pattern ?? (a.pattern = jb), qe.init(n, a), n._zod.check = (o) => {
    const c = o.value.split("/");
    try {
      if (c.length !== 2) throw new Error();
      const [i, u] = c;
      if (!u) throw new Error();
      const d = Number(u);
      if (`${d}` !== u) throw new Error();
      if (d < 0 || d > 128) throw new Error();
      new URL(`http://[${i}]`);
    } catch {
      o.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: o.value,
        inst: n,
        continue: !a.abort
      });
    }
  };
});
function Kf(n) {
  if (n === "") return !0;
  if (/\s/.test(n) || n.length % 4 !== 0) return !1;
  try {
    return atob(n), !0;
  } catch {
    return !1;
  }
}
var qS = /* @__PURE__ */ z("$ZodBase64", (n, a) => {
  a.pattern ?? (a.pattern = Ab), qe.init(n, a), n._zod.bag.contentEncoding = "base64", n._zod.check = (o) => {
    Kf(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64",
      input: o.value,
      inst: n,
      continue: !a.abort
    });
  };
});
function HS(n) {
  if (!Pf.test(n)) return !1;
  const a = n.replace(/[-_]/g, (o) => o === "-" ? "+" : "/");
  return Kf(a.padEnd(Math.ceil(a.length / 4) * 4, "="));
}
var LS = /* @__PURE__ */ z("$ZodBase64URL", (n, a) => {
  a.pattern ?? (a.pattern = Pf), qe.init(n, a), n._zod.bag.contentEncoding = "base64url", n._zod.check = (o) => {
    HS(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: o.value,
      inst: n,
      continue: !a.abort
    });
  };
}), BS = /* @__PURE__ */ z("$ZodE164", (n, a) => {
  a.pattern ?? (a.pattern = Cb), qe.init(n, a);
});
function JS(n, a = null) {
  try {
    const o = n.split(".");
    if (o.length !== 3) return !1;
    const [c] = o;
    if (!c) return !1;
    const i = JSON.parse(atob(c));
    return !("typ" in i && i?.typ !== "JWT" || !i.alg || a && (!("alg" in i) || i.alg !== a));
  } catch {
    return !1;
  }
}
var GS = /* @__PURE__ */ z("$ZodJWT", (n, a) => {
  qe.init(n, a), n._zod.check = (o) => {
    JS(o.value, a.alg) || o.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: o.value,
      inst: n,
      continue: !a.abort
    });
  };
}), PS = /* @__PURE__ */ z("$ZodCustomStringFormat", (n, a) => {
  qe.init(n, a), n._zod.check = (o) => {
    a.fn(o.value) || o.issues.push({
      code: "invalid_format",
      format: a.format,
      input: o.value,
      inst: n,
      continue: !a.abort
    });
  };
}), Ff = /* @__PURE__ */ z("$ZodNumber", (n, a) => {
  ee.init(n, a), n._zod.pattern = n._zod.bag.pattern ?? Vf, n._zod.parse = (o, c) => {
    if (a.coerce) try {
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
}), YS = /* @__PURE__ */ z("$ZodNumberFormat", (n, a) => {
  tS.init(n, a), Ff.init(n, a);
}), Wf = /* @__PURE__ */ z("$ZodBoolean", (n, a) => {
  ee.init(n, a), n._zod.pattern = Yb, n._zod.parse = (o, c) => {
    if (a.coerce) try {
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
}), em = /* @__PURE__ */ z("$ZodBigInt", (n, a) => {
  ee.init(n, a), n._zod.pattern = Gb, n._zod.parse = (o, c) => {
    if (a.coerce) try {
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
}), VS = /* @__PURE__ */ z("$ZodBigIntFormat", (n, a) => {
  nS.init(n, a), em.init(n, a);
}), QS = /* @__PURE__ */ z("$ZodSymbol", (n, a) => {
  ee.init(n, a), n._zod.parse = (o, c) => {
    const i = o.value;
    return typeof i == "symbol" || o.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input: i,
      inst: n
    }), o;
  };
}), XS = /* @__PURE__ */ z("$ZodUndefined", (n, a) => {
  ee.init(n, a), n._zod.pattern = Qb, n._zod.values = /* @__PURE__ */ new Set([void 0]), n._zod.parse = (o, c) => {
    const i = o.value;
    return typeof i > "u" || o.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input: i,
      inst: n
    }), o;
  };
}), KS = /* @__PURE__ */ z("$ZodNull", (n, a) => {
  ee.init(n, a), n._zod.pattern = Vb, n._zod.values = /* @__PURE__ */ new Set([null]), n._zod.parse = (o, c) => {
    const i = o.value;
    return i === null || o.issues.push({
      expected: "null",
      code: "invalid_type",
      input: i,
      inst: n
    }), o;
  };
}), FS = /* @__PURE__ */ z("$ZodAny", (n, a) => {
  ee.init(n, a), n._zod.parse = (o) => o;
}), WS = /* @__PURE__ */ z("$ZodUnknown", (n, a) => {
  ee.init(n, a), n._zod.parse = (o) => o;
}), e$ = /* @__PURE__ */ z("$ZodNever", (n, a) => {
  ee.init(n, a), n._zod.parse = (o, c) => (o.issues.push({
    expected: "never",
    code: "invalid_type",
    input: o.value,
    inst: n
  }), o);
}), t$ = /* @__PURE__ */ z("$ZodVoid", (n, a) => {
  ee.init(n, a), n._zod.parse = (o, c) => {
    const i = o.value;
    return typeof i > "u" || o.issues.push({
      expected: "void",
      code: "invalid_type",
      input: i,
      inst: n
    }), o;
  };
}), n$ = /* @__PURE__ */ z("$ZodDate", (n, a) => {
  ee.init(n, a), n._zod.parse = (o, c) => {
    if (a.coerce) try {
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
function S_(n, a, o) {
  n.issues.length && a.issues.push(...un(o, n.issues)), a.value[o] = n.value;
}
var i$ = /* @__PURE__ */ z("$ZodArray", (n, a) => {
  ee.init(n, a), n._zod.parse = (o, c) => {
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
      const m = i[d], y = a.element._zod.run({
        value: m,
        issues: []
      }, c);
      y instanceof Promise ? u.push(y.then((g) => S_(g, o, d))) : S_(y, o, d);
    }
    return u.length ? Promise.all(u).then(() => o) : o;
  };
});
function qu(n, a, o, c, i, u) {
  const d = o in c;
  if (n.issues.length) {
    if (i && u && !d) return;
    a.issues.push(...un(o, n.issues));
  }
  if (!d && !i) {
    n.issues.length || a.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: void 0,
      path: [o]
    });
    return;
  }
  n.value === void 0 ? d && (a.value[o] = void 0) : a.value[o] = n.value;
}
function a$(n) {
  const a = Object.keys(n.shape);
  for (const c of a) if (!n.shape?.[c]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${c}": expected a Zod schema`);
  const o = ib(n.shape);
  return {
    ...n,
    keys: a,
    keySet: new Set(a),
    numKeys: a.length,
    optionalKeys: new Set(o)
  };
}
function r$(n, a, o, c, i, u) {
  const d = [], m = i.keySet, y = i.catchall._zod, g = y.def.type, h = y.optin === "optional", U = y.optout === "optional";
  for (const w in a) {
    if (w === "__proto__" || m.has(w)) continue;
    if (g === "never") {
      d.push(w);
      continue;
    }
    const q = y.run({
      value: a[w],
      issues: []
    }, c);
    q instanceof Promise ? n.push(q.then((W) => qu(W, o, w, a, h, U))) : qu(q, o, w, a, h, U);
  }
  return d.length && o.issues.push({
    code: "unrecognized_keys",
    keys: d,
    input: a,
    inst: u
  }), n.length ? Promise.all(n).then(() => o) : o;
}
var o$ = /* @__PURE__ */ z("$ZodObject", (n, a) => {
  if (ee.init(n, a), !Object.getOwnPropertyDescriptor(a, "shape")?.get) {
    const d = a.shape;
    Object.defineProperty(a, "shape", { get: () => {
      const m = { ...d };
      return Object.defineProperty(a, "shape", { value: m }), m;
    } });
  }
  const o = mo(() => a$(a));
  oe(n._zod, "propValues", () => {
    const d = a.shape, m = {};
    for (const y in d) {
      const g = d[y]._zod;
      if (g.values) {
        m[y] ?? (m[y] = /* @__PURE__ */ new Set());
        for (const h of g.values) m[y].add(h);
      }
    }
    return m;
  });
  const c = qa, i = a.catchall;
  let u;
  n._zod.parse = (d, m) => {
    u ?? (u = o.value);
    const y = d.value;
    if (!c(y))
      return d.issues.push({
        expected: "object",
        code: "invalid_type",
        input: y,
        inst: n
      }), d;
    d.value = {};
    const g = [], h = u.shape;
    for (const U of u.keys) {
      const w = h[U], q = w._zod.optin === "optional", W = w._zod.optout === "optional", pe = w._zod.run({
        value: y[U],
        issues: []
      }, m);
      pe instanceof Promise ? g.push(pe.then((Qe) => qu(Qe, d, U, y, q, W))) : qu(pe, d, U, y, q, W);
    }
    return i ? r$(g, y, d, m, o.value, n) : g.length ? Promise.all(g).then(() => d) : d;
  };
}), l$ = /* @__PURE__ */ z("$ZodObjectJIT", (n, a) => {
  o$.init(n, a);
  const o = n._zod.parse, c = mo(() => a$(a)), i = (w) => {
    const q = new yS([
      "shape",
      "payload",
      "ctx"
    ]), W = c.value, pe = (Pe) => {
      const ae = zf(Pe);
      return `shape[${ae}]._zod.run({ value: input[${ae}], issues: [] }, ctx)`;
    };
    q.write("const input = payload.value;");
    const Qe = /* @__PURE__ */ Object.create(null);
    let Ae = 0;
    for (const Pe of W.keys) Qe[Pe] = `key_${Ae++}`;
    q.write("const newResult = {};");
    for (const Pe of W.keys) {
      const ae = Qe[Pe], we = zf(Pe), ht = w[Pe], yt = ht?._zod?.optin === "optional", ge = ht?._zod?.optout === "optional";
      q.write(`const ${ae} = ${pe(Pe)};`), yt && ge ? q.write(`
        if (${ae}.issues.length) {
          if (${we} in input) {
            payload.issues = payload.issues.concat(${ae}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${we}, ...iss.path] : [${we}]
            })));
          }
        }
        
        if (${ae}.value === undefined) {
          if (${we} in input) {
            newResult[${we}] = undefined;
          }
        } else {
          newResult[${we}] = ${ae}.value;
        }
        
      `) : yt ? q.write(`
        if (${ae}.issues.length) {
          payload.issues = payload.issues.concat(${ae}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${we}, ...iss.path] : [${we}]
          })));
        }
        
        if (${ae}.value === undefined) {
          if (${we} in input) {
            newResult[${we}] = undefined;
          }
        } else {
          newResult[${we}] = ${ae}.value;
        }
        
      `) : q.write(`
        const ${ae}_present = ${we} in input;
        if (${ae}.issues.length) {
          payload.issues = payload.issues.concat(${ae}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${we}, ...iss.path] : [${we}]
          })));
        }
        if (!${ae}_present && !${ae}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${we}]
          });
        }

        if (${ae}_present) {
          if (${ae}.value === undefined) {
            newResult[${we}] = undefined;
          } else {
            newResult[${we}] = ${ae}.value;
          }
        }

      `);
    }
    q.write("payload.value = newResult;"), q.write("return payload;");
    const Ie = q.compile();
    return (Pe, ae) => Ie(w, Pe, ae);
  };
  let u;
  const d = qa, m = !lo.jitless, g = m && tb.value, h = a.catchall;
  let U;
  n._zod.parse = (w, q) => {
    U ?? (U = c.value);
    const W = w.value;
    return d(W) ? m && g && q?.async === !1 && q.jitless !== !0 ? (u || (u = i(a.shape)), w = u(w, q), h ? r$([], W, w, q, U, n) : w) : o(w, q) : (w.issues.push({
      expected: "object",
      code: "invalid_type",
      input: W,
      inst: n
    }), w);
  };
});
function $_(n, a, o, c) {
  for (const u of n) if (u.issues.length === 0)
    return a.value = u.value, a;
  const i = n.filter((u) => !Ji(u));
  return i.length === 1 ? (a.value = i[0].value, i[0]) : (a.issues.push({
    code: "invalid_union",
    input: a.value,
    inst: o,
    errors: n.map((u) => u.issues.map((d) => Pt(d, c, rt())))
  }), a);
}
var Wu = /* @__PURE__ */ z("$ZodUnion", (n, a) => {
  ee.init(n, a), oe(n._zod, "optin", () => a.options.some((c) => c._zod.optin === "optional") ? "optional" : void 0), oe(n._zod, "optout", () => a.options.some((c) => c._zod.optout === "optional") ? "optional" : void 0), oe(n._zod, "values", () => {
    if (a.options.every((c) => c._zod.values)) return new Set(a.options.flatMap((c) => Array.from(c._zod.values)));
  }), oe(n._zod, "pattern", () => {
    if (a.options.every((c) => c._zod.pattern)) {
      const c = a.options.map((i) => i._zod.pattern);
      return new RegExp(`^(${c.map((i) => Pu(i.source)).join("|")})$`);
    }
  });
  const o = a.options.length === 1 ? a.options[0]._zod.run : null;
  n._zod.parse = (c, i) => {
    if (o) return o(c, i);
    let u = !1;
    const d = [];
    for (const m of a.options) {
      const y = m._zod.run({
        value: c.value,
        issues: []
      }, i);
      if (y instanceof Promise)
        d.push(y), u = !0;
      else {
        if (y.issues.length === 0) return y;
        d.push(y);
      }
    }
    return u ? Promise.all(d).then((m) => $_(m, c, n, i)) : $_(d, c, n, i);
  };
});
function z_(n, a, o, c) {
  const i = n.filter((u) => u.issues.length === 0);
  return i.length === 1 ? (a.value = i[0].value, a) : (i.length === 0 ? a.issues.push({
    code: "invalid_union",
    input: a.value,
    inst: o,
    errors: n.map((u) => u.issues.map((d) => Pt(d, c, rt())))
  }) : a.issues.push({
    code: "invalid_union",
    input: a.value,
    inst: o,
    errors: [],
    inclusive: !1
  }), a);
}
var u$ = /* @__PURE__ */ z("$ZodXor", (n, a) => {
  Wu.init(n, a), a.inclusive = !1;
  const o = a.options.length === 1 ? a.options[0]._zod.run : null;
  n._zod.parse = (c, i) => {
    if (o) return o(c, i);
    let u = !1;
    const d = [];
    for (const m of a.options) {
      const y = m._zod.run({
        value: c.value,
        issues: []
      }, i);
      y instanceof Promise ? (d.push(y), u = !0) : d.push(y);
    }
    return u ? Promise.all(d).then((m) => z_(m, c, n, i)) : z_(d, c, n, i);
  };
}), c$ = /* @__PURE__ */ z("$ZodDiscriminatedUnion", (n, a) => {
  a.inclusive = !1, Wu.init(n, a);
  const o = n._zod.parse;
  oe(n._zod, "propValues", () => {
    const i = {};
    for (const u of a.options) {
      const d = u._zod.propValues;
      if (!d || Object.keys(d).length === 0) throw new Error(`Invalid discriminated union option at index "${a.options.indexOf(u)}"`);
      for (const [m, y] of Object.entries(d)) {
        i[m] || (i[m] = /* @__PURE__ */ new Set());
        for (const g of y) i[m].add(g);
      }
    }
    return i;
  });
  const c = mo(() => {
    const i = a.options, u = /* @__PURE__ */ new Map();
    for (const d of i) {
      const m = d._zod.propValues?.[a.discriminator];
      if (!m || m.size === 0) throw new Error(`Invalid discriminated union option at index "${a.options.indexOf(d)}"`);
      for (const y of m) {
        if (u.has(y)) throw new Error(`Duplicate discriminator value "${String(y)}"`);
        u.set(y, d);
      }
    }
    return u;
  });
  n._zod.parse = (i, u) => {
    const d = i.value;
    if (!qa(d))
      return i.issues.push({
        code: "invalid_type",
        expected: "object",
        input: d,
        inst: n
      }), i;
    const m = c.value.get(d?.[a.discriminator]);
    return m ? m._zod.run(i, u) : a.unionFallback || u.direction === "backward" ? o(i, u) : (i.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: a.discriminator,
      options: Array.from(c.value.keys()),
      input: d,
      path: [a.discriminator],
      inst: n
    }), i);
  };
}), s$ = /* @__PURE__ */ z("$ZodIntersection", (n, a) => {
  ee.init(n, a), n._zod.parse = (o, c) => {
    const i = o.value, u = a.left._zod.run({
      value: i,
      issues: []
    }, c), d = a.right._zod.run({
      value: i,
      issues: []
    }, c);
    return u instanceof Promise || d instanceof Promise ? Promise.all([u, d]).then(([m, y]) => k_(o, m, y)) : k_(o, u, d);
  };
});
function wf(n, a) {
  if (n === a) return {
    valid: !0,
    data: n
  };
  if (n instanceof Date && a instanceof Date && +n == +a) return {
    valid: !0,
    data: n
  };
  if (Pi(n) && Pi(a)) {
    const o = Object.keys(a), c = Object.keys(n).filter((u) => o.indexOf(u) !== -1), i = {
      ...n,
      ...a
    };
    for (const u of c) {
      const d = wf(n[u], a[u]);
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
  if (Array.isArray(n) && Array.isArray(a)) {
    if (n.length !== a.length) return {
      valid: !1,
      mergeErrorPath: []
    };
    const o = [];
    for (let c = 0; c < n.length; c++) {
      const i = n[c], u = a[c], d = wf(i, u);
      if (!d.valid) return {
        valid: !1,
        mergeErrorPath: [c, ...d.mergeErrorPath]
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
function k_(n, a, o) {
  const c = /* @__PURE__ */ new Map();
  let i;
  for (const m of a.issues) if (m.code === "unrecognized_keys") {
    i ?? (i = m);
    for (const y of m.keys)
      c.has(y) || c.set(y, {}), c.get(y).l = !0;
  } else n.issues.push(m);
  for (const m of o.issues) if (m.code === "unrecognized_keys") for (const y of m.keys)
    c.has(y) || c.set(y, {}), c.get(y).r = !0;
  else n.issues.push(m);
  const u = [...c].filter(([, m]) => m.l && m.r).map(([m]) => m);
  if (u.length && i && n.issues.push({
    ...i,
    keys: u
  }), Ji(n)) return n;
  const d = wf(a.value, o.value);
  if (!d.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(d.mergeErrorPath)}`);
  return n.value = d.data, n;
}
var tm = /* @__PURE__ */ z("$ZodTuple", (n, a) => {
  ee.init(n, a);
  const o = a.items;
  n._zod.parse = (c, i) => {
    const u = c.value;
    if (!Array.isArray(u))
      return c.issues.push({
        input: u,
        inst: n,
        expected: "tuple",
        code: "invalid_type"
      }), c;
    c.value = [];
    const d = [], m = T_(o, "optin"), y = T_(o, "optout");
    if (!a.rest) {
      if (u.length < m)
        return c.issues.push({
          code: "too_small",
          minimum: m,
          inclusive: !0,
          input: u,
          inst: n,
          origin: "array"
        }), c;
      u.length > o.length && c.issues.push({
        code: "too_big",
        maximum: o.length,
        inclusive: !0,
        input: u,
        inst: n,
        origin: "array"
      });
    }
    const g = new Array(o.length);
    for (let h = 0; h < o.length; h++) {
      const U = o[h]._zod.run({
        value: u[h],
        issues: []
      }, i);
      U instanceof Promise ? d.push(U.then((w) => {
        g[h] = w;
      })) : g[h] = U;
    }
    if (a.rest) {
      let h = o.length - 1;
      const U = u.slice(o.length);
      for (const w of U) {
        h++;
        const q = a.rest._zod.run({
          value: w,
          issues: []
        }, i);
        q instanceof Promise ? d.push(q.then((W) => w_(W, c, h))) : w_(q, c, h);
      }
    }
    return d.length ? Promise.all(d).then(() => x_(g, c, o, u, y)) : x_(g, c, o, u, y);
  };
});
function T_(n, a) {
  for (let o = n.length - 1; o >= 0; o--) if (n[o]._zod[a] !== "optional") return o + 1;
  return 0;
}
function w_(n, a, o) {
  n.issues.length && a.issues.push(...un(o, n.issues)), a.value[o] = n.value;
}
function x_(n, a, o, c, i) {
  for (let u = 0; u < o.length; u++) {
    const d = n[u], m = u < c.length;
    if (d.issues.length) {
      if (!m && u >= i) {
        a.value.length = u;
        break;
      }
      a.issues.push(...un(u, d.issues));
    }
    a.value[u] = d.value;
  }
  for (let u = a.value.length - 1; u >= c.length && (o[u]._zod.optout === "optional" && a.value[u] === void 0); u--) a.value.length = u;
  return a;
}
var d$ = /* @__PURE__ */ z("$ZodRecord", (n, a) => {
  ee.init(n, a), n._zod.parse = (o, c) => {
    const i = o.value;
    if (!Pi(i))
      return o.issues.push({
        expected: "record",
        code: "invalid_type",
        input: i,
        inst: n
      }), o;
    const u = [], d = a.keyType._zod.values;
    if (d) {
      o.value = {};
      const m = /* @__PURE__ */ new Set();
      for (const g of d) if (typeof g == "string" || typeof g == "number" || typeof g == "symbol") {
        m.add(typeof g == "number" ? g.toString() : g);
        const h = a.keyType._zod.run({
          value: g,
          issues: []
        }, c);
        if (h instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
        if (h.issues.length) {
          o.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: h.issues.map((q) => Pt(q, c, rt())),
            input: g,
            path: [g],
            inst: n
          });
          continue;
        }
        const U = h.value, w = a.valueType._zod.run({
          value: i[g],
          issues: []
        }, c);
        w instanceof Promise ? u.push(w.then((q) => {
          q.issues.length && o.issues.push(...un(g, q.issues)), o.value[U] = q.value;
        })) : (w.issues.length && o.issues.push(...un(g, w.issues)), o.value[U] = w.value);
      }
      let y;
      for (const g in i) m.has(g) || (y = y ?? [], y.push(g));
      y && y.length > 0 && o.issues.push({
        code: "unrecognized_keys",
        input: i,
        inst: n,
        keys: y
      });
    } else {
      o.value = {};
      for (const m of Reflect.ownKeys(i)) {
        if (m === "__proto__" || !Object.prototype.propertyIsEnumerable.call(i, m)) continue;
        let y = a.keyType._zod.run({
          value: m,
          issues: []
        }, c);
        if (y instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
        if (typeof m == "string" && Vf.test(m) && y.issues.length) {
          const h = a.keyType._zod.run({
            value: Number(m),
            issues: []
          }, c);
          if (h instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
          h.issues.length === 0 && (y = h);
        }
        if (y.issues.length) {
          a.mode === "loose" ? o.value[m] = i[m] : o.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: y.issues.map((h) => Pt(h, c, rt())),
            input: m,
            path: [m],
            inst: n
          });
          continue;
        }
        const g = a.valueType._zod.run({
          value: i[m],
          issues: []
        }, c);
        g instanceof Promise ? u.push(g.then((h) => {
          h.issues.length && o.issues.push(...un(m, h.issues)), o.value[y.value] = h.value;
        })) : (g.issues.length && o.issues.push(...un(m, g.issues)), o.value[y.value] = g.value);
      }
    }
    return u.length ? Promise.all(u).then(() => o) : o;
  };
}), f$ = /* @__PURE__ */ z("$ZodMap", (n, a) => {
  ee.init(n, a), n._zod.parse = (o, c) => {
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
    for (const [d, m] of i) {
      const y = a.keyType._zod.run({
        value: d,
        issues: []
      }, c), g = a.valueType._zod.run({
        value: m,
        issues: []
      }, c);
      y instanceof Promise || g instanceof Promise ? u.push(Promise.all([y, g]).then(([h, U]) => {
        E_(h, U, o, d, i, n, c);
      })) : E_(y, g, o, d, i, n, c);
    }
    return u.length ? Promise.all(u).then(() => o) : o;
  };
});
function E_(n, a, o, c, i, u, d) {
  n.issues.length && (Mu.has(typeof c) ? o.issues.push(...un(c, n.issues)) : o.issues.push({
    code: "invalid_key",
    origin: "map",
    input: i,
    inst: u,
    issues: n.issues.map((m) => Pt(m, d, rt()))
  })), a.issues.length && (Mu.has(typeof c) ? o.issues.push(...un(c, a.issues)) : o.issues.push({
    origin: "map",
    code: "invalid_element",
    input: i,
    inst: u,
    key: c,
    issues: a.issues.map((m) => Pt(m, d, rt()))
  })), o.value.set(n.value, a.value);
}
var m$ = /* @__PURE__ */ z("$ZodSet", (n, a) => {
  ee.init(n, a), n._zod.parse = (o, c) => {
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
      const m = a.valueType._zod.run({
        value: d,
        issues: []
      }, c);
      m instanceof Promise ? u.push(m.then((y) => U_(y, o))) : U_(m, o);
    }
    return u.length ? Promise.all(u).then(() => o) : o;
  };
});
function U_(n, a) {
  n.issues.length && a.issues.push(...n.issues), a.value.add(n.value);
}
var v$ = /* @__PURE__ */ z("$ZodEnum", (n, a) => {
  ee.init(n, a);
  const o = Zf(a.entries), c = new Set(o);
  n._zod.values = c, n._zod.pattern = new RegExp(`^(${o.filter((i) => Mu.has(typeof i)).map((i) => typeof i == "string" ? Jn(i) : i.toString()).join("|")})$`), n._zod.parse = (i, u) => {
    const d = i.value;
    return c.has(d) || i.issues.push({
      code: "invalid_value",
      values: o,
      input: d,
      inst: n
    }), i;
  };
}), p$ = /* @__PURE__ */ z("$ZodLiteral", (n, a) => {
  if (ee.init(n, a), a.values.length === 0) throw new Error("Cannot create literal schema with no valid values");
  const o = new Set(a.values);
  n._zod.values = o, n._zod.pattern = new RegExp(`^(${a.values.map((c) => typeof c == "string" ? Jn(c) : c ? Jn(c.toString()) : String(c)).join("|")})$`), n._zod.parse = (c, i) => {
    const u = c.value;
    return o.has(u) || c.issues.push({
      code: "invalid_value",
      values: a.values,
      input: u,
      inst: n
    }), c;
  };
}), g$ = /* @__PURE__ */ z("$ZodFile", (n, a) => {
  ee.init(n, a), n._zod.parse = (o, c) => {
    const i = o.value;
    return i instanceof File || o.issues.push({
      expected: "file",
      code: "invalid_type",
      input: i,
      inst: n
    }), o;
  };
}), h$ = /* @__PURE__ */ z("$ZodTransform", (n, a) => {
  ee.init(n, a), n._zod.optin = "optional", n._zod.parse = (o, c) => {
    if (c.direction === "backward") throw new Gu(n.constructor.name);
    const i = a.transform(o.value, o);
    if (c.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((u) => (o.value = u, o.fallback = !0, o));
    if (i instanceof Promise) throw new Gi();
    return o.value = i, o.fallback = !0, o;
  };
});
function O_(n, a) {
  return a === void 0 && (n.issues.length || n.fallback) ? {
    issues: [],
    value: void 0
  } : n;
}
var nm = /* @__PURE__ */ z("$ZodOptional", (n, a) => {
  ee.init(n, a), n._zod.optin = "optional", n._zod.optout = "optional", oe(n._zod, "values", () => a.innerType._zod.values ? /* @__PURE__ */ new Set([...a.innerType._zod.values, void 0]) : void 0), oe(n._zod, "pattern", () => {
    const o = a.innerType._zod.pattern;
    return o ? new RegExp(`^(${Pu(o.source)})?$`) : void 0;
  }), n._zod.parse = (o, c) => {
    if (a.innerType._zod.optin === "optional") {
      const i = o.value, u = a.innerType._zod.run(o, c);
      return u instanceof Promise ? u.then((d) => O_(d, i)) : O_(u, i);
    }
    return o.value === void 0 ? o : a.innerType._zod.run(o, c);
  };
}), y$ = /* @__PURE__ */ z("$ZodExactOptional", (n, a) => {
  nm.init(n, a), oe(n._zod, "values", () => a.innerType._zod.values), oe(n._zod, "pattern", () => a.innerType._zod.pattern), n._zod.parse = (o, c) => a.innerType._zod.run(o, c);
}), _$ = /* @__PURE__ */ z("$ZodNullable", (n, a) => {
  ee.init(n, a), oe(n._zod, "optin", () => a.innerType._zod.optin), oe(n._zod, "optout", () => a.innerType._zod.optout), oe(n._zod, "pattern", () => {
    const o = a.innerType._zod.pattern;
    return o ? new RegExp(`^(${Pu(o.source)}|null)$`) : void 0;
  }), oe(n._zod, "values", () => a.innerType._zod.values ? /* @__PURE__ */ new Set([...a.innerType._zod.values, null]) : void 0), n._zod.parse = (o, c) => o.value === null ? o : a.innerType._zod.run(o, c);
}), b$ = /* @__PURE__ */ z("$ZodDefault", (n, a) => {
  ee.init(n, a), n._zod.optin = "optional", oe(n._zod, "values", () => a.innerType._zod.values), n._zod.parse = (o, c) => {
    if (c.direction === "backward") return a.innerType._zod.run(o, c);
    if (o.value === void 0)
      return o.value = a.defaultValue, o;
    const i = a.innerType._zod.run(o, c);
    return i instanceof Promise ? i.then((u) => D_(u, a)) : D_(i, a);
  };
});
function D_(n, a) {
  return n.value === void 0 && (n.value = a.defaultValue), n;
}
var S$ = /* @__PURE__ */ z("$ZodPrefault", (n, a) => {
  ee.init(n, a), n._zod.optin = "optional", oe(n._zod, "values", () => a.innerType._zod.values), n._zod.parse = (o, c) => (c.direction === "backward" || o.value === void 0 && (o.value = a.defaultValue), a.innerType._zod.run(o, c));
}), $$ = /* @__PURE__ */ z("$ZodNonOptional", (n, a) => {
  ee.init(n, a), oe(n._zod, "values", () => {
    const o = a.innerType._zod.values;
    return o ? new Set([...o].filter((c) => c !== void 0)) : void 0;
  }), n._zod.parse = (o, c) => {
    const i = a.innerType._zod.run(o, c);
    return i instanceof Promise ? i.then((u) => Z_(u, n)) : Z_(i, n);
  };
});
function Z_(n, a) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: a
  }), n;
}
var z$ = /* @__PURE__ */ z("$ZodSuccess", (n, a) => {
  ee.init(n, a), n._zod.parse = (o, c) => {
    if (c.direction === "backward") throw new Gu("ZodSuccess");
    const i = a.innerType._zod.run(o, c);
    return i instanceof Promise ? i.then((u) => (o.value = u.issues.length === 0, o)) : (o.value = i.issues.length === 0, o);
  };
}), k$ = /* @__PURE__ */ z("$ZodCatch", (n, a) => {
  ee.init(n, a), n._zod.optin = "optional", oe(n._zod, "optout", () => a.innerType._zod.optout), oe(n._zod, "values", () => a.innerType._zod.values), n._zod.parse = (o, c) => {
    if (c.direction === "backward") return a.innerType._zod.run(o, c);
    const i = a.innerType._zod.run(o, c);
    return i instanceof Promise ? i.then((u) => (o.value = u.value, u.issues.length && (o.value = a.catchValue({
      ...o,
      error: { issues: u.issues.map((d) => Pt(d, c, rt())) },
      input: o.value
    }), o.issues = [], o.fallback = !0), o)) : (o.value = i.value, i.issues.length && (o.value = a.catchValue({
      ...o,
      error: { issues: i.issues.map((u) => Pt(u, c, rt())) },
      input: o.value
    }), o.issues = [], o.fallback = !0), o);
  };
}), T$ = /* @__PURE__ */ z("$ZodNaN", (n, a) => {
  ee.init(n, a), n._zod.parse = (o, c) => ((typeof o.value != "number" || !Number.isNaN(o.value)) && o.issues.push({
    input: o.value,
    inst: n,
    expected: "nan",
    code: "invalid_type"
  }), o);
}), im = /* @__PURE__ */ z("$ZodPipe", (n, a) => {
  ee.init(n, a), oe(n._zod, "values", () => a.in._zod.values), oe(n._zod, "optin", () => a.in._zod.optin), oe(n._zod, "optout", () => a.out._zod.optout), oe(n._zod, "propValues", () => a.in._zod.propValues), n._zod.parse = (o, c) => {
    if (c.direction === "backward") {
      const u = a.out._zod.run(o, c);
      return u instanceof Promise ? u.then((d) => Nu(d, a.in, c)) : Nu(u, a.in, c);
    }
    const i = a.in._zod.run(o, c);
    return i instanceof Promise ? i.then((u) => Nu(u, a.out, c)) : Nu(i, a.out, c);
  };
});
function Nu(n, a, o) {
  return n.issues.length ? (n.aborted = !0, n) : a._zod.run({
    value: n.value,
    issues: n.issues,
    fallback: n.fallback
  }, o);
}
var am = /* @__PURE__ */ z("$ZodCodec", (n, a) => {
  ee.init(n, a), oe(n._zod, "values", () => a.in._zod.values), oe(n._zod, "optin", () => a.in._zod.optin), oe(n._zod, "optout", () => a.out._zod.optout), oe(n._zod, "propValues", () => a.in._zod.propValues), n._zod.parse = (o, c) => {
    if ((c.direction || "forward") === "forward") {
      const i = a.in._zod.run(o, c);
      return i instanceof Promise ? i.then((u) => ju(u, a, c)) : ju(i, a, c);
    } else {
      const i = a.out._zod.run(o, c);
      return i instanceof Promise ? i.then((u) => ju(u, a, c)) : ju(i, a, c);
    }
  };
});
function ju(n, a, o) {
  if (n.issues.length)
    return n.aborted = !0, n;
  if ((o.direction || "forward") === "forward") {
    const c = a.transform(n.value, n);
    return c instanceof Promise ? c.then((i) => Au(n, i, a.out, o)) : Au(n, c, a.out, o);
  } else {
    const c = a.reverseTransform(n.value, n);
    return c instanceof Promise ? c.then((i) => Au(n, i, a.in, o)) : Au(n, c, a.in, o);
  }
}
function Au(n, a, o, c) {
  return n.issues.length ? (n.aborted = !0, n) : o._zod.run({
    value: a,
    issues: n.issues
  }, c);
}
var w$ = /* @__PURE__ */ z("$ZodPreprocess", (n, a) => {
  im.init(n, a);
}), x$ = /* @__PURE__ */ z("$ZodReadonly", (n, a) => {
  ee.init(n, a), oe(n._zod, "propValues", () => a.innerType._zod.propValues), oe(n._zod, "values", () => a.innerType._zod.values), oe(n._zod, "optin", () => a.innerType?._zod?.optin), oe(n._zod, "optout", () => a.innerType?._zod?.optout), n._zod.parse = (o, c) => {
    if (c.direction === "backward") return a.innerType._zod.run(o, c);
    const i = a.innerType._zod.run(o, c);
    return i instanceof Promise ? i.then(N_) : N_(i);
  };
});
function N_(n) {
  return n.value = Object.freeze(n.value), n;
}
var E$ = /* @__PURE__ */ z("$ZodTemplateLiteral", (n, a) => {
  ee.init(n, a);
  const o = [];
  for (const c of a.parts) if (typeof c == "object" && c !== null) {
    if (!c._zod.pattern) throw new Error(`Invalid template literal part, no pattern found: ${[...c._zod.traits].shift()}`);
    const i = c._zod.pattern instanceof RegExp ? c._zod.pattern.source : c._zod.pattern;
    if (!i) throw new Error(`Invalid template literal part: ${c._zod.traits}`);
    const u = i.startsWith("^") ? 1 : 0, d = i.endsWith("$") ? i.length - 1 : i.length;
    o.push(i.slice(u, d));
  } else if (c === null || nb.has(typeof c)) o.push(Jn(`${c}`));
  else throw new Error(`Invalid template literal part: ${c}`);
  n._zod.pattern = new RegExp(`^${o.join("")}$`), n._zod.parse = (c, i) => typeof c.value != "string" ? (c.issues.push({
    input: c.value,
    inst: n,
    expected: "string",
    code: "invalid_type"
  }), c) : (n._zod.pattern.lastIndex = 0, n._zod.pattern.test(c.value) || c.issues.push({
    input: c.value,
    inst: n,
    code: "invalid_format",
    format: a.format ?? "template_literal",
    pattern: n._zod.pattern.source
  }), c);
}), U$ = /* @__PURE__ */ z("$ZodFunction", (n, a) => (ee.init(n, a), n._def = a, n._zod.def = a, n.implement = (o) => {
  if (typeof o != "function") throw new Error("implement() must be called with a function");
  return function(...c) {
    const i = n._def.input ? kf(n._def.input, c) : c, u = Reflect.apply(o, this, i);
    return n._def.output ? kf(n._def.output, u) : u;
  };
}, n.implementAsync = (o) => {
  if (typeof o != "function") throw new Error("implementAsync() must be called with a function");
  return async function(...c) {
    const i = n._def.input ? await Tf(n._def.input, c) : c, u = await Reflect.apply(o, this, i);
    return n._def.output ? await Tf(n._def.output, u) : u;
  };
}, n._zod.parse = (o, c) => typeof o.value != "function" ? (o.issues.push({
  code: "invalid_type",
  expected: "function",
  input: o.value,
  inst: n
}), o) : (n._def.output && n._def.output._zod.def.type === "promise" ? o.value = n.implementAsync(o.value) : o.value = n.implement(o.value), o), n.input = (...o) => {
  const c = n.constructor;
  return Array.isArray(o[0]) ? new c({
    type: "function",
    input: new tm({
      type: "tuple",
      items: o[0],
      rest: o[1]
    }),
    output: n._def.output
  }) : new c({
    type: "function",
    input: o[0],
    output: n._def.output
  });
}, n.output = (o) => {
  const c = n.constructor;
  return new c({
    type: "function",
    input: n._def.input,
    output: o
  });
}, n)), O$ = /* @__PURE__ */ z("$ZodPromise", (n, a) => {
  ee.init(n, a), n._zod.parse = (o, c) => Promise.resolve(o.value).then((i) => a.innerType._zod.run({
    value: i,
    issues: []
  }, c));
}), D$ = /* @__PURE__ */ z("$ZodLazy", (n, a) => {
  ee.init(n, a), oe(n._zod, "innerType", () => {
    const o = a;
    return o._cachedInner || (o._cachedInner = a.getter()), o._cachedInner;
  }), oe(n._zod, "pattern", () => n._zod.innerType?._zod?.pattern), oe(n._zod, "propValues", () => n._zod.innerType?._zod?.propValues), oe(n._zod, "optin", () => n._zod.innerType?._zod?.optin ?? void 0), oe(n._zod, "optout", () => n._zod.innerType?._zod?.optout ?? void 0), n._zod.parse = (o, c) => n._zod.innerType._zod.run(o, c);
}), Z$ = /* @__PURE__ */ z("$ZodCustom", (n, a) => {
  Ge.init(n, a), ee.init(n, a), n._zod.parse = (o, c) => o, n._zod.check = (o) => {
    const c = o.value, i = a.fn(c);
    if (i instanceof Promise) return i.then((u) => j_(u, o, c, n));
    j_(i, o, c, n);
  };
});
function j_(n, a, o, c) {
  if (!n) {
    const i = {
      code: "custom",
      input: o,
      inst: c,
      path: [...c._zod.def.path ?? []],
      continue: !c._zod.def.abort
    };
    c._zod.def.params && (i.params = c._zod.def.params), a.issues.push(Ha(i));
  }
}
var v6 = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = { nan: "NaN" };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `مدخلات غير مقبولة: يفترض إدخال instanceof ${i.expected}، ولكن تم إدخال ${m}` : `مدخلات غير مقبولة: يفترض إدخال ${u}، ولكن تم إدخال ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `مدخلات غير مقبولة: يفترض إدخال ${Q(i.values[0])}` : `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? ` أكبر من اللازم: يفترض أن تكون ${i.origin ?? "القيمة"} ${u} ${i.maximum.toString()} ${d.unit ?? "عنصر"}` : `أكبر من اللازم: يفترض أن تكون ${i.origin ?? "القيمة"} ${u} ${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `أصغر من اللازم: يفترض لـ ${i.origin} أن يكون ${u} ${i.minimum.toString()} ${d.unit}` : `أصغر من اللازم: يفترض لـ ${i.origin} أن يكون ${u} ${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `نَص غير مقبول: يجب أن يبدأ بـ "${i.prefix}"` : u.format === "ends_with" ? `نَص غير مقبول: يجب أن ينتهي بـ "${u.suffix}"` : u.format === "includes" ? `نَص غير مقبول: يجب أن يتضمَّن "${u.includes}"` : u.format === "regex" ? `نَص غير مقبول: يجب أن يطابق النمط ${u.pattern}` : `${o[u.format] ?? i.format} غير مقبول`;
      }
      case "not_multiple_of":
        return `رقم غير مقبول: يجب أن يكون من مضاعفات ${i.divisor}`;
      case "unrecognized_keys":
        return `معرف${i.keys.length > 1 ? "ات" : ""} غريب${i.keys.length > 1 ? "ة" : ""}: ${C(i.keys, "، ")}`;
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
function p6() {
  return { localeError: v6() };
}
var g6 = () => {
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
  function a(i) {
    return n[i] ?? null;
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
  }, c = { nan: "NaN" };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Yanlış dəyər: gözlənilən instanceof ${i.expected}, daxil olan ${m}` : `Yanlış dəyər: gözlənilən ${u}, daxil olan ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Yanlış dəyər: gözlənilən ${Q(i.values[0])}` : `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Çox böyük: gözlənilən ${i.origin ?? "dəyər"} ${u}${i.maximum.toString()} ${d.unit ?? "element"}` : `Çox böyük: gözlənilən ${i.origin ?? "dəyər"} ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Çox kiçik: gözlənilən ${i.origin} ${u}${i.minimum.toString()} ${d.unit}` : `Çox kiçik: gözlənilən ${i.origin} ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Yanlış mətn: "${u.prefix}" ilə başlamalıdır` : u.format === "ends_with" ? `Yanlış mətn: "${u.suffix}" ilə bitməlidir` : u.format === "includes" ? `Yanlış mətn: "${u.includes}" daxil olmalıdır` : u.format === "regex" ? `Yanlış mətn: ${u.pattern} şablonuna uyğun olmalıdır` : `Yanlış ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Yanlış ədəd: ${i.divisor} ilə bölünə bilən olmalıdır`;
      case "unrecognized_keys":
        return `Tanınmayan açar${i.keys.length > 1 ? "lar" : ""}: ${C(i.keys, ", ")}`;
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
function h6() {
  return { localeError: g6() };
}
function A_(n, a, o, c) {
  const i = Math.abs(n), u = i % 10, d = i % 100;
  return d >= 11 && d <= 19 ? c : u === 1 ? a : u >= 2 && u <= 4 ? o : c;
}
var y6 = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "лік",
    array: "масіў"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Няправільны ўвод: чакаўся instanceof ${i.expected}, атрымана ${m}` : `Няправільны ўвод: чакаўся ${u}, атрымана ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Няправільны ўвод: чакалася ${Q(i.values[0])}` : `Няправільны варыянт: чакаўся адзін з ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        if (d) {
          const m = A_(Number(i.maximum), d.unit.one, d.unit.few, d.unit.many);
          return `Занадта вялікі: чакалася, што ${i.origin ?? "значэнне"} павінна ${d.verb} ${u}${i.maximum.toString()} ${m}`;
        }
        return `Занадта вялікі: чакалася, што ${i.origin ?? "значэнне"} павінна быць ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        if (d) {
          const m = A_(Number(i.minimum), d.unit.one, d.unit.few, d.unit.many);
          return `Занадта малы: чакалася, што ${i.origin} павінна ${d.verb} ${u}${i.minimum.toString()} ${m}`;
        }
        return `Занадта малы: чакалася, што ${i.origin} павінна быць ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Няправільны радок: павінен пачынацца з "${u.prefix}"` : u.format === "ends_with" ? `Няправільны радок: павінен заканчвацца на "${u.suffix}"` : u.format === "includes" ? `Няправільны радок: павінен змяшчаць "${u.includes}"` : u.format === "regex" ? `Няправільны радок: павінен адпавядаць шаблону ${u.pattern}` : `Няправільны ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Няправільны лік: павінен быць кратным ${i.divisor}`;
      case "unrecognized_keys":
        return `Нераспазнаны ${i.keys.length > 1 ? "ключы" : "ключ"}: ${C(i.keys, ", ")}`;
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
function _6() {
  return { localeError: y6() };
}
var b6 = () => {
  const n = {
    string: {
      unit: "символа",
      verb: "да съдържа"
    },
    file: {
      unit: "байта",
      verb: "да съдържа"
    },
    array: {
      unit: "елемента",
      verb: "да съдържа"
    },
    set: {
      unit: "елемента",
      verb: "да съдържа"
    }
  };
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
    regex: "вход",
    email: "имейл адрес",
    url: "URL",
    emoji: "емоджи",
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
    datetime: "ISO време",
    date: "ISO дата",
    time: "ISO време",
    duration: "ISO продължителност",
    ipv4: "IPv4 адрес",
    ipv6: "IPv6 адрес",
    cidrv4: "IPv4 диапазон",
    cidrv6: "IPv6 диапазон",
    base64: "base64-кодиран низ",
    base64url: "base64url-кодиран низ",
    json_string: "JSON низ",
    e164: "E.164 номер",
    jwt: "JWT",
    template_literal: "вход"
  }, c = {
    nan: "NaN",
    number: "число",
    array: "масив"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Невалиден вход: очакван instanceof ${i.expected}, получен ${m}` : `Невалиден вход: очакван ${u}, получен ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Невалиден вход: очакван ${Q(i.values[0])}` : `Невалидна опция: очаквано едно от ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Твърде голямо: очаква се ${i.origin ?? "стойност"} да съдържа ${u}${i.maximum.toString()} ${d.unit ?? "елемента"}` : `Твърде голямо: очаква се ${i.origin ?? "стойност"} да бъде ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Твърде малко: очаква се ${i.origin} да съдържа ${u}${i.minimum.toString()} ${d.unit}` : `Твърде малко: очаква се ${i.origin} да бъде ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        if (u.format === "starts_with") return `Невалиден низ: трябва да започва с "${u.prefix}"`;
        if (u.format === "ends_with") return `Невалиден низ: трябва да завършва с "${u.suffix}"`;
        if (u.format === "includes") return `Невалиден низ: трябва да включва "${u.includes}"`;
        if (u.format === "regex") return `Невалиден низ: трябва да съвпада с ${u.pattern}`;
        let d = "Невалиден";
        return u.format === "emoji" && (d = "Невалидно"), u.format === "datetime" && (d = "Невалидно"), u.format === "date" && (d = "Невалидна"), u.format === "time" && (d = "Невалидно"), u.format === "duration" && (d = "Невалидна"), `${d} ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Невалидно число: трябва да бъде кратно на ${i.divisor}`;
      case "unrecognized_keys":
        return `Неразпознат${i.keys.length > 1 ? "и" : ""} ключ${i.keys.length > 1 ? "ове" : ""}: ${C(i.keys, ", ")}`;
      case "invalid_key":
        return `Невалиден ключ в ${i.origin}`;
      case "invalid_union":
        return "Невалиден вход";
      case "invalid_element":
        return `Невалидна стойност в ${i.origin}`;
      default:
        return "Невалиден вход";
    }
  };
};
function S6() {
  return { localeError: b6() };
}
var $6 = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = { nan: "NaN" };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Tipus invàlid: s'esperava instanceof ${i.expected}, s'ha rebut ${m}` : `Tipus invàlid: s'esperava ${u}, s'ha rebut ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Valor invàlid: s'esperava ${Q(i.values[0])}` : `Opció invàlida: s'esperava una de ${C(i.values, " o ")}`;
      case "too_big": {
        const u = i.inclusive ? "com a màxim" : "menys de", d = a(i.origin);
        return d ? `Massa gran: s'esperava que ${i.origin ?? "el valor"} contingués ${u} ${i.maximum.toString()} ${d.unit ?? "elements"}` : `Massa gran: s'esperava que ${i.origin ?? "el valor"} fos ${u} ${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? "com a mínim" : "més de", d = a(i.origin);
        return d ? `Massa petit: s'esperava que ${i.origin} contingués ${u} ${i.minimum.toString()} ${d.unit}` : `Massa petit: s'esperava que ${i.origin} fos ${u} ${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Format invàlid: ha de començar amb "${u.prefix}"` : u.format === "ends_with" ? `Format invàlid: ha d'acabar amb "${u.suffix}"` : u.format === "includes" ? `Format invàlid: ha d'incloure "${u.includes}"` : u.format === "regex" ? `Format invàlid: ha de coincidir amb el patró ${u.pattern}` : `Format invàlid per a ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Número invàlid: ha de ser múltiple de ${i.divisor}`;
      case "unrecognized_keys":
        return `Clau${i.keys.length > 1 ? "s" : ""} no reconeguda${i.keys.length > 1 ? "s" : ""}: ${C(i.keys, ", ")}`;
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
function z6() {
  return { localeError: $6() };
}
var k6 = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "číslo",
    string: "řetězec",
    function: "funkce",
    array: "pole"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Neplatný vstup: očekáváno instanceof ${i.expected}, obdrženo ${m}` : `Neplatný vstup: očekáváno ${u}, obdrženo ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Neplatný vstup: očekáváno ${Q(i.values[0])}` : `Neplatná možnost: očekávána jedna z hodnot ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Hodnota je příliš velká: ${i.origin ?? "hodnota"} musí mít ${u}${i.maximum.toString()} ${d.unit ?? "prvků"}` : `Hodnota je příliš velká: ${i.origin ?? "hodnota"} musí být ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Hodnota je příliš malá: ${i.origin ?? "hodnota"} musí mít ${u}${i.minimum.toString()} ${d.unit ?? "prvků"}` : `Hodnota je příliš malá: ${i.origin ?? "hodnota"} musí být ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Neplatný řetězec: musí začínat na "${u.prefix}"` : u.format === "ends_with" ? `Neplatný řetězec: musí končit na "${u.suffix}"` : u.format === "includes" ? `Neplatný řetězec: musí obsahovat "${u.includes}"` : u.format === "regex" ? `Neplatný řetězec: musí odpovídat vzoru ${u.pattern}` : `Neplatný formát ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Neplatné číslo: musí být násobkem ${i.divisor}`;
      case "unrecognized_keys":
        return `Neznámé klíče: ${C(i.keys, ", ")}`;
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
function T6() {
  return { localeError: k6() };
}
var w6 = () => {
  const n = {
    string: {
      unit: "tegn",
      verb: "havde"
    },
    file: {
      unit: "bytes",
      verb: "havde"
    },
    array: {
      unit: "elementer",
      verb: "indeholdt"
    },
    set: {
      unit: "elementer",
      verb: "indeholdt"
    }
  };
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
    regex: "input",
    email: "e-mailadresse",
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
    datetime: "ISO dato- og klokkeslæt",
    date: "ISO-dato",
    time: "ISO-klokkeslæt",
    duration: "ISO-varighed",
    ipv4: "IPv4-område",
    ipv6: "IPv6-område",
    cidrv4: "IPv4-spektrum",
    cidrv6: "IPv6-spektrum",
    base64: "base64-kodet streng",
    base64url: "base64url-kodet streng",
    json_string: "JSON-streng",
    e164: "E.164-nummer",
    jwt: "JWT",
    template_literal: "input"
  }, c = {
    nan: "NaN",
    string: "streng",
    number: "tal",
    boolean: "boolean",
    array: "liste",
    object: "objekt",
    set: "sæt",
    file: "fil"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Ugyldigt input: forventede instanceof ${i.expected}, fik ${m}` : `Ugyldigt input: forventede ${u}, fik ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Ugyldig værdi: forventede ${Q(i.values[0])}` : `Ugyldigt valg: forventede en af følgende ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin), m = c[i.origin] ?? i.origin;
        return d ? `For stor: forventede ${m ?? "value"} ${d.verb} ${u} ${i.maximum.toString()} ${d.unit ?? "elementer"}` : `For stor: forventede ${m ?? "value"} havde ${u} ${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin), m = c[i.origin] ?? i.origin;
        return d ? `For lille: forventede ${m} ${d.verb} ${u} ${i.minimum.toString()} ${d.unit}` : `For lille: forventede ${m} havde ${u} ${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Ugyldig streng: skal starte med "${u.prefix}"` : u.format === "ends_with" ? `Ugyldig streng: skal ende med "${u.suffix}"` : u.format === "includes" ? `Ugyldig streng: skal indeholde "${u.includes}"` : u.format === "regex" ? `Ugyldig streng: skal matche mønsteret ${u.pattern}` : `Ugyldig ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Ugyldigt tal: skal være deleligt med ${i.divisor}`;
      case "unrecognized_keys":
        return `${i.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${C(i.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig nøgle i ${i.origin}`;
      case "invalid_union":
        return "Ugyldigt input: matcher ingen af de tilladte typer";
      case "invalid_element":
        return `Ugyldig værdi i ${i.origin}`;
      default:
        return "Ugyldigt input";
    }
  };
};
function x6() {
  return { localeError: w6() };
}
var E6 = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "Zahl",
    array: "Array"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Ungültige Eingabe: erwartet instanceof ${i.expected}, erhalten ${m}` : `Ungültige Eingabe: erwartet ${u}, erhalten ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Ungültige Eingabe: erwartet ${Q(i.values[0])}` : `Ungültige Option: erwartet eine von ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Zu groß: erwartet, dass ${i.origin ?? "Wert"} ${u}${i.maximum.toString()} ${d.unit ?? "Elemente"} hat` : `Zu groß: erwartet, dass ${i.origin ?? "Wert"} ${u}${i.maximum.toString()} ist`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Zu klein: erwartet, dass ${i.origin} ${u}${i.minimum.toString()} ${d.unit} hat` : `Zu klein: erwartet, dass ${i.origin} ${u}${i.minimum.toString()} ist`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Ungültiger String: muss mit "${u.prefix}" beginnen` : u.format === "ends_with" ? `Ungültiger String: muss mit "${u.suffix}" enden` : u.format === "includes" ? `Ungültiger String: muss "${u.includes}" enthalten` : u.format === "regex" ? `Ungültiger String: muss dem Muster ${u.pattern} entsprechen` : `Ungültig: ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Ungültige Zahl: muss ein Vielfaches von ${i.divisor} sein`;
      case "unrecognized_keys":
        return `${i.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${C(i.keys, ", ")}`;
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
function U6() {
  return { localeError: E6() };
}
var O6 = () => {
  const n = {
    string: {
      unit: "χαρακτήρες",
      verb: "να έχει"
    },
    file: {
      unit: "bytes",
      verb: "να έχει"
    },
    array: {
      unit: "στοιχεία",
      verb: "να έχει"
    },
    set: {
      unit: "στοιχεία",
      verb: "να έχει"
    },
    map: {
      unit: "καταχωρήσεις",
      verb: "να έχει"
    }
  };
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
    regex: "είσοδος",
    email: "διεύθυνση email",
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
    datetime: "ISO ημερομηνία και ώρα",
    date: "ISO ημερομηνία",
    time: "ISO ώρα",
    duration: "ISO διάρκεια",
    ipv4: "διεύθυνση IPv4",
    ipv6: "διεύθυνση IPv6",
    mac: "διεύθυνση MAC",
    cidrv4: "εύρος IPv4",
    cidrv6: "εύρος IPv6",
    base64: "συμβολοσειρά κωδικοποιημένη σε base64",
    base64url: "συμβολοσειρά κωδικοποιημένη σε base64url",
    json_string: "συμβολοσειρά JSON",
    e164: "αριθμός E.164",
    jwt: "JWT",
    template_literal: "είσοδος"
  }, c = { nan: "NaN" };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return typeof i.expected == "string" && /^[A-Z]/.test(i.expected) ? `Μη έγκυρη είσοδος: αναμενόταν instanceof ${i.expected}, λήφθηκε ${m}` : `Μη έγκυρη είσοδος: αναμενόταν ${u}, λήφθηκε ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Μη έγκυρη είσοδος: αναμενόταν ${Q(i.values[0])}` : `Μη έγκυρη επιλογή: αναμενόταν ένα από ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Πολύ μεγάλο: αναμενόταν ${i.origin ?? "τιμή"} να έχει ${u}${i.maximum.toString()} ${d.unit ?? "στοιχεία"}` : `Πολύ μεγάλο: αναμενόταν ${i.origin ?? "τιμή"} να είναι ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Πολύ μικρό: αναμενόταν ${i.origin} να έχει ${u}${i.minimum.toString()} ${d.unit}` : `Πολύ μικρό: αναμενόταν ${i.origin} να είναι ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Μη έγκυρη συμβολοσειρά: πρέπει να ξεκινά με "${u.prefix}"` : u.format === "ends_with" ? `Μη έγκυρη συμβολοσειρά: πρέπει να τελειώνει με "${u.suffix}"` : u.format === "includes" ? `Μη έγκυρη συμβολοσειρά: πρέπει να περιέχει "${u.includes}"` : u.format === "regex" ? `Μη έγκυρη συμβολοσειρά: πρέπει να ταιριάζει με το μοτίβο ${u.pattern}` : `Μη έγκυρο: ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Μη έγκυρος αριθμός: πρέπει να είναι πολλαπλάσιο του ${i.divisor}`;
      case "unrecognized_keys":
        return `Άγνωστ${i.keys.length > 1 ? "α" : "ο"} κλειδ${i.keys.length > 1 ? "ιά" : "ί"}: ${C(i.keys, ", ")}`;
      case "invalid_key":
        return `Μη έγκυρο κλειδί στο ${i.origin}`;
      case "invalid_union":
        return "Μη έγκυρη είσοδος";
      case "invalid_element":
        return `Μη έγκυρη τιμή στο ${i.origin}`;
      default:
        return "Μη έγκυρη είσοδος";
    }
  };
};
function D6() {
  return { localeError: O6() };
}
var Z6 = () => {
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
    },
    map: {
      unit: "entries",
      verb: "to have"
    }
  };
  function a(i) {
    return n[i] ?? null;
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
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    jwt: "JWT",
    template_literal: "input"
  }, c = { nan: "NaN" };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input);
        return `Invalid input: expected ${u}, received ${c[d] ?? d}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Invalid input: expected ${Q(i.values[0])}` : `Invalid option: expected one of ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Too big: expected ${i.origin ?? "value"} to have ${u}${i.maximum.toString()} ${d.unit ?? "elements"}` : `Too big: expected ${i.origin ?? "value"} to be ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Too small: expected ${i.origin} to have ${u}${i.minimum.toString()} ${d.unit}` : `Too small: expected ${i.origin} to be ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Invalid string: must start with "${u.prefix}"` : u.format === "ends_with" ? `Invalid string: must end with "${u.suffix}"` : u.format === "includes" ? `Invalid string: must include "${u.includes}"` : u.format === "regex" ? `Invalid string: must match pattern ${u.pattern}` : `Invalid ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${i.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${i.keys.length > 1 ? "s" : ""}: ${C(i.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${i.origin}`;
      case "invalid_union":
        return i.options && Array.isArray(i.options) && i.options.length > 0 ? `Invalid discriminator value. Expected ${i.options.map((u) => `'${u}'`).join(" | ")}` : "Invalid input";
      case "invalid_element":
        return `Invalid value in ${i.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function N$() {
  return { localeError: Z6() };
}
var N6 = () => {
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
  function a(i) {
    return n[i] ?? null;
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
  }, c = {
    nan: "NaN",
    number: "nombro",
    array: "tabelo",
    null: "senvalora"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Nevalida enigo: atendiĝis instanceof ${i.expected}, riceviĝis ${m}` : `Nevalida enigo: atendiĝis ${u}, riceviĝis ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Nevalida enigo: atendiĝis ${Q(i.values[0])}` : `Nevalida opcio: atendiĝis unu el ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Tro granda: atendiĝis ke ${i.origin ?? "valoro"} havu ${u}${i.maximum.toString()} ${d.unit ?? "elementojn"}` : `Tro granda: atendiĝis ke ${i.origin ?? "valoro"} havu ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Tro malgranda: atendiĝis ke ${i.origin} havu ${u}${i.minimum.toString()} ${d.unit}` : `Tro malgranda: atendiĝis ke ${i.origin} estu ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Nevalida karaktraro: devas komenciĝi per "${u.prefix}"` : u.format === "ends_with" ? `Nevalida karaktraro: devas finiĝi per "${u.suffix}"` : u.format === "includes" ? `Nevalida karaktraro: devas inkluzivi "${u.includes}"` : u.format === "regex" ? `Nevalida karaktraro: devas kongrui kun la modelo ${u.pattern}` : `Nevalida ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Nevalida nombro: devas esti oblo de ${i.divisor}`;
      case "unrecognized_keys":
        return `Nekonata${i.keys.length > 1 ? "j" : ""} ŝlosilo${i.keys.length > 1 ? "j" : ""}: ${C(i.keys, ", ")}`;
      case "invalid_key":
        return `Nevalida ŝlosilo en ${i.origin}`;
      case "invalid_union":
        return "Nevalida enigo";
      case "invalid_element":
        return `Nevalida valoro en ${i.origin}`;
      default:
        return "Nevalida enigo";
    }
  };
};
function j6() {
  return { localeError: N6() };
}
var A6 = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    string: "texto",
    number: "número",
    boolean: "booleano",
    array: "arreglo",
    object: "objeto",
    set: "conjunto",
    file: "archivo",
    date: "fecha",
    bigint: "número grande",
    symbol: "símbolo",
    undefined: "indefinido",
    null: "nulo",
    function: "función",
    map: "mapa",
    record: "registro",
    tuple: "tupla",
    enum: "enumeración",
    union: "unión",
    literal: "literal",
    promise: "promesa",
    void: "vacío",
    never: "nunca",
    unknown: "desconocido",
    any: "cualquiera"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Entrada inválida: se esperaba instanceof ${i.expected}, recibido ${m}` : `Entrada inválida: se esperaba ${u}, recibido ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Entrada inválida: se esperaba ${Q(i.values[0])}` : `Opción inválida: se esperaba una de ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin), m = c[i.origin] ?? i.origin;
        return d ? `Demasiado grande: se esperaba que ${m ?? "valor"} tuviera ${u}${i.maximum.toString()} ${d.unit ?? "elementos"}` : `Demasiado grande: se esperaba que ${m ?? "valor"} fuera ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin), m = c[i.origin] ?? i.origin;
        return d ? `Demasiado pequeño: se esperaba que ${m} tuviera ${u}${i.minimum.toString()} ${d.unit}` : `Demasiado pequeño: se esperaba que ${m} fuera ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Cadena inválida: debe comenzar con "${u.prefix}"` : u.format === "ends_with" ? `Cadena inválida: debe terminar en "${u.suffix}"` : u.format === "includes" ? `Cadena inválida: debe incluir "${u.includes}"` : u.format === "regex" ? `Cadena inválida: debe coincidir con el patrón ${u.pattern}` : `Inválido ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Número inválido: debe ser múltiplo de ${i.divisor}`;
      case "unrecognized_keys":
        return `Llave${i.keys.length > 1 ? "s" : ""} desconocida${i.keys.length > 1 ? "s" : ""}: ${C(i.keys, ", ")}`;
      case "invalid_key":
        return `Llave inválida en ${c[i.origin] ?? i.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido en ${c[i.origin] ?? i.origin}`;
      default:
        return "Entrada inválida";
    }
  };
};
function I6() {
  return { localeError: A6() };
}
var R6 = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "عدد",
    array: "آرایه"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `ورودی نامعتبر: می‌بایست instanceof ${i.expected} می‌بود، ${m} دریافت شد` : `ورودی نامعتبر: می‌بایست ${u} می‌بود، ${m} دریافت شد`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `ورودی نامعتبر: می‌بایست ${Q(i.values[0])} می‌بود` : `گزینه نامعتبر: می‌بایست یکی از ${C(i.values, "|")} می‌بود`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `خیلی بزرگ: ${i.origin ?? "مقدار"} باید ${u}${i.maximum.toString()} ${d.unit ?? "عنصر"} باشد` : `خیلی بزرگ: ${i.origin ?? "مقدار"} باید ${u}${i.maximum.toString()} باشد`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `خیلی کوچک: ${i.origin} باید ${u}${i.minimum.toString()} ${d.unit} باشد` : `خیلی کوچک: ${i.origin} باید ${u}${i.minimum.toString()} باشد`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `رشته نامعتبر: باید با "${u.prefix}" شروع شود` : u.format === "ends_with" ? `رشته نامعتبر: باید با "${u.suffix}" تمام شود` : u.format === "includes" ? `رشته نامعتبر: باید شامل "${u.includes}" باشد` : u.format === "regex" ? `رشته نامعتبر: باید با الگوی ${u.pattern} مطابقت داشته باشد` : `${o[u.format] ?? i.format} نامعتبر`;
      }
      case "not_multiple_of":
        return `عدد نامعتبر: باید مضرب ${i.divisor} باشد`;
      case "unrecognized_keys":
        return `کلید${i.keys.length > 1 ? "های" : ""} ناشناس: ${C(i.keys, ", ")}`;
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
function C6() {
  return { localeError: R6() };
}
var M6 = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = { nan: "NaN" };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Virheellinen tyyppi: odotettiin instanceof ${i.expected}, oli ${m}` : `Virheellinen tyyppi: odotettiin ${u}, oli ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Virheellinen syöte: täytyy olla ${Q(i.values[0])}` : `Virheellinen valinta: täytyy olla yksi seuraavista: ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Liian suuri: ${d.subject} täytyy olla ${u}${i.maximum.toString()} ${d.unit}`.trim() : `Liian suuri: arvon täytyy olla ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Liian pieni: ${d.subject} täytyy olla ${u}${i.minimum.toString()} ${d.unit}`.trim() : `Liian pieni: arvon täytyy olla ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Virheellinen syöte: täytyy alkaa "${u.prefix}"` : u.format === "ends_with" ? `Virheellinen syöte: täytyy loppua "${u.suffix}"` : u.format === "includes" ? `Virheellinen syöte: täytyy sisältää "${u.includes}"` : u.format === "regex" ? `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${u.pattern}` : `Virheellinen ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: täytyy olla luvun ${i.divisor} monikerta`;
      case "unrecognized_keys":
        return `${i.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${C(i.keys, ", ")}`;
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
function q6() {
  return { localeError: M6() };
}
var H6 = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    string: "chaîne",
    number: "nombre",
    int: "entier",
    boolean: "booléen",
    bigint: "grand entier",
    symbol: "symbole",
    undefined: "indéfini",
    null: "null",
    never: "jamais",
    void: "vide",
    date: "date",
    array: "tableau",
    object: "objet",
    tuple: "tuple",
    record: "enregistrement",
    map: "carte",
    set: "ensemble",
    file: "fichier",
    nonoptional: "non-optionnel",
    nan: "NaN",
    function: "fonction"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Entrée invalide : instanceof ${i.expected} attendu, ${m} reçu` : `Entrée invalide : ${u} attendu, ${m} reçu`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Entrée invalide : ${Q(i.values[0])} attendu` : `Option invalide : une valeur parmi ${C(i.values, "|")} attendue`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Trop grand : ${c[i.origin] ?? "valeur"} doit ${d.verb} ${u}${i.maximum.toString()} ${d.unit ?? "élément(s)"}` : `Trop grand : ${c[i.origin] ?? "valeur"} doit être ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Trop petit : ${c[i.origin] ?? "valeur"} doit ${d.verb} ${u}${i.minimum.toString()} ${d.unit}` : `Trop petit : ${c[i.origin] ?? "valeur"} doit être ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Chaîne invalide : doit commencer par "${u.prefix}"` : u.format === "ends_with" ? `Chaîne invalide : doit se terminer par "${u.suffix}"` : u.format === "includes" ? `Chaîne invalide : doit inclure "${u.includes}"` : u.format === "regex" ? `Chaîne invalide : doit correspondre au modèle ${u.pattern}` : `${o[u.format] ?? i.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${i.divisor}`;
      case "unrecognized_keys":
        return `Clé${i.keys.length > 1 ? "s" : ""} non reconnue${i.keys.length > 1 ? "s" : ""} : ${C(i.keys, ", ")}`;
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
function L6() {
  return { localeError: H6() };
}
var B6 = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = { nan: "NaN" };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Entrée invalide : attendu instanceof ${i.expected}, reçu ${m}` : `Entrée invalide : attendu ${u}, reçu ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Entrée invalide : attendu ${Q(i.values[0])}` : `Option invalide : attendu l'une des valeurs suivantes ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "≤" : "<", d = a(i.origin);
        return d ? `Trop grand : attendu que ${i.origin ?? "la valeur"} ait ${u}${i.maximum.toString()} ${d.unit}` : `Trop grand : attendu que ${i.origin ?? "la valeur"} soit ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? "≥" : ">", d = a(i.origin);
        return d ? `Trop petit : attendu que ${i.origin} ait ${u}${i.minimum.toString()} ${d.unit}` : `Trop petit : attendu que ${i.origin} soit ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Chaîne invalide : doit commencer par "${u.prefix}"` : u.format === "ends_with" ? `Chaîne invalide : doit se terminer par "${u.suffix}"` : u.format === "includes" ? `Chaîne invalide : doit inclure "${u.includes}"` : u.format === "regex" ? `Chaîne invalide : doit correspondre au motif ${u.pattern}` : `${o[u.format] ?? i.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${i.divisor}`;
      case "unrecognized_keys":
        return `Clé${i.keys.length > 1 ? "s" : ""} non reconnue${i.keys.length > 1 ? "s" : ""} : ${C(i.keys, ", ")}`;
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
function J6() {
  return { localeError: B6() };
}
var G6 = () => {
  const n = {
    string: {
      label: "מחרוזת",
      gender: "f"
    },
    number: {
      label: "מספר",
      gender: "m"
    },
    boolean: {
      label: "ערך בוליאני",
      gender: "m"
    },
    bigint: {
      label: "BigInt",
      gender: "m"
    },
    date: {
      label: "תאריך",
      gender: "m"
    },
    array: {
      label: "מערך",
      gender: "m"
    },
    object: {
      label: "אובייקט",
      gender: "m"
    },
    null: {
      label: "ערך ריק (null)",
      gender: "m"
    },
    undefined: {
      label: "ערך לא מוגדר (undefined)",
      gender: "m"
    },
    symbol: {
      label: "סימבול (Symbol)",
      gender: "m"
    },
    function: {
      label: "פונקציה",
      gender: "f"
    },
    map: {
      label: "מפה (Map)",
      gender: "f"
    },
    set: {
      label: "קבוצה (Set)",
      gender: "f"
    },
    file: {
      label: "קובץ",
      gender: "m"
    },
    promise: {
      label: "Promise",
      gender: "m"
    },
    NaN: {
      label: "NaN",
      gender: "m"
    },
    unknown: {
      label: "ערך לא ידוע",
      gender: "m"
    },
    value: {
      label: "ערך",
      gender: "m"
    }
  }, a = {
    string: {
      unit: "תווים",
      shortLabel: "קצר",
      longLabel: "ארוך"
    },
    file: {
      unit: "בייטים",
      shortLabel: "קטן",
      longLabel: "גדול"
    },
    array: {
      unit: "פריטים",
      shortLabel: "קטן",
      longLabel: "גדול"
    },
    set: {
      unit: "פריטים",
      shortLabel: "קטן",
      longLabel: "גדול"
    },
    number: {
      unit: "",
      shortLabel: "קטן",
      longLabel: "גדול"
    }
  }, o = (g) => g ? n[g] : void 0, c = (g) => {
    const h = o(g);
    return h ? h.label : g ?? n.unknown.label;
  }, i = (g) => `ה${c(g)}`, u = (g) => (o(g)?.gender ?? "m") === "f" ? "צריכה להיות" : "צריך להיות", d = (g) => g ? a[g] ?? null : null, m = {
    regex: {
      label: "קלט",
      gender: "m"
    },
    email: {
      label: "כתובת אימייל",
      gender: "f"
    },
    url: {
      label: "כתובת רשת",
      gender: "f"
    },
    emoji: {
      label: "אימוג'י",
      gender: "m"
    },
    uuid: {
      label: "UUID",
      gender: "m"
    },
    nanoid: {
      label: "nanoid",
      gender: "m"
    },
    guid: {
      label: "GUID",
      gender: "m"
    },
    cuid: {
      label: "cuid",
      gender: "m"
    },
    cuid2: {
      label: "cuid2",
      gender: "m"
    },
    ulid: {
      label: "ULID",
      gender: "m"
    },
    xid: {
      label: "XID",
      gender: "m"
    },
    ksuid: {
      label: "KSUID",
      gender: "m"
    },
    datetime: {
      label: "תאריך וזמן ISO",
      gender: "m"
    },
    date: {
      label: "תאריך ISO",
      gender: "m"
    },
    time: {
      label: "זמן ISO",
      gender: "m"
    },
    duration: {
      label: "משך זמן ISO",
      gender: "m"
    },
    ipv4: {
      label: "כתובת IPv4",
      gender: "f"
    },
    ipv6: {
      label: "כתובת IPv6",
      gender: "f"
    },
    cidrv4: {
      label: "טווח IPv4",
      gender: "m"
    },
    cidrv6: {
      label: "טווח IPv6",
      gender: "m"
    },
    base64: {
      label: "מחרוזת בבסיס 64",
      gender: "f"
    },
    base64url: {
      label: "מחרוזת בבסיס 64 לכתובות רשת",
      gender: "f"
    },
    json_string: {
      label: "מחרוזת JSON",
      gender: "f"
    },
    e164: {
      label: "מספר E.164",
      gender: "m"
    },
    jwt: {
      label: "JWT",
      gender: "m"
    },
    ends_with: {
      label: "קלט",
      gender: "m"
    },
    includes: {
      label: "קלט",
      gender: "m"
    },
    lowercase: {
      label: "קלט",
      gender: "m"
    },
    starts_with: {
      label: "קלט",
      gender: "m"
    },
    uppercase: {
      label: "קלט",
      gender: "m"
    }
  }, y = { nan: "NaN" };
  return (g) => {
    switch (g.code) {
      case "invalid_type": {
        const h = g.expected, U = y[h ?? ""] ?? c(h), w = K(g.input), q = y[w] ?? n[w]?.label ?? w;
        return /^[A-Z]/.test(g.expected) ? `קלט לא תקין: צריך להיות instanceof ${g.expected}, התקבל ${q}` : `קלט לא תקין: צריך להיות ${U}, התקבל ${q}`;
      }
      case "invalid_value": {
        if (g.values.length === 1) return `ערך לא תקין: הערך חייב להיות ${Q(g.values[0])}`;
        const h = g.values.map((w) => Q(w));
        if (g.values.length === 2) return `ערך לא תקין: האפשרויות המתאימות הן ${h[0]} או ${h[1]}`;
        const U = h[h.length - 1];
        return `ערך לא תקין: האפשרויות המתאימות הן ${h.slice(0, -1).join(", ")} או ${U}`;
      }
      case "too_big": {
        const h = d(g.origin), U = i(g.origin ?? "value");
        if (g.origin === "string") return `${h?.longLabel ?? "ארוך"} מדי: ${U} צריכה להכיל ${g.maximum.toString()} ${h?.unit ?? ""} ${g.inclusive ? "או פחות" : "לכל היותר"}`.trim();
        if (g.origin === "number") return `גדול מדי: ${U} צריך להיות ${g.inclusive ? `קטן או שווה ל-${g.maximum}` : `קטן מ-${g.maximum}`}`;
        if (g.origin === "array" || g.origin === "set") return `גדול מדי: ${U} ${g.origin === "set" ? "צריכה" : "צריך"} להכיל ${g.inclusive ? `${g.maximum} ${h?.unit ?? ""} או פחות` : `פחות מ-${g.maximum} ${h?.unit ?? ""}`}`.trim();
        const w = g.inclusive ? "<=" : "<", q = u(g.origin ?? "value");
        return h?.unit ? `${h.longLabel} מדי: ${U} ${q} ${w}${g.maximum.toString()} ${h.unit}` : `${h?.longLabel ?? "גדול"} מדי: ${U} ${q} ${w}${g.maximum.toString()}`;
      }
      case "too_small": {
        const h = d(g.origin), U = i(g.origin ?? "value");
        if (g.origin === "string") return `${h?.shortLabel ?? "קצר"} מדי: ${U} צריכה להכיל ${g.minimum.toString()} ${h?.unit ?? ""} ${g.inclusive ? "או יותר" : "לפחות"}`.trim();
        if (g.origin === "number") return `קטן מדי: ${U} צריך להיות ${g.inclusive ? `גדול או שווה ל-${g.minimum}` : `גדול מ-${g.minimum}`}`;
        if (g.origin === "array" || g.origin === "set") {
          const W = g.origin === "set" ? "צריכה" : "צריך";
          return g.minimum === 1 && g.inclusive ? `קטן מדי: ${U} ${W} להכיל ${g.origin === "set", "לפחות פריט אחד"}` : `קטן מדי: ${U} ${W} להכיל ${g.inclusive ? `${g.minimum} ${h?.unit ?? ""} או יותר` : `יותר מ-${g.minimum} ${h?.unit ?? ""}`}`.trim();
        }
        const w = g.inclusive ? ">=" : ">", q = u(g.origin ?? "value");
        return h?.unit ? `${h.shortLabel} מדי: ${U} ${q} ${w}${g.minimum.toString()} ${h.unit}` : `${h?.shortLabel ?? "קטן"} מדי: ${U} ${q} ${w}${g.minimum.toString()}`;
      }
      case "invalid_format": {
        const h = g;
        if (h.format === "starts_with") return `המחרוזת חייבת להתחיל ב "${h.prefix}"`;
        if (h.format === "ends_with") return `המחרוזת חייבת להסתיים ב "${h.suffix}"`;
        if (h.format === "includes") return `המחרוזת חייבת לכלול "${h.includes}"`;
        if (h.format === "regex") return `המחרוזת חייבת להתאים לתבנית ${h.pattern}`;
        const U = m[h.format];
        return `${U?.label ?? h.format} לא ${(U?.gender ?? "m") === "f" ? "תקינה" : "תקין"}`;
      }
      case "not_multiple_of":
        return `מספר לא תקין: חייב להיות מכפלה של ${g.divisor}`;
      case "unrecognized_keys":
        return `מפתח${g.keys.length > 1 ? "ות" : ""} לא מזוה${g.keys.length > 1 ? "ים" : "ה"}: ${C(g.keys, ", ")}`;
      case "invalid_key":
        return "שדה לא תקין באובייקט";
      case "invalid_union":
        return "קלט לא תקין";
      case "invalid_element":
        return `ערך לא תקין ב${i(g.origin ?? "array")}`;
      default:
        return "קלט לא תקין";
    }
  };
};
function P6() {
  return { localeError: G6() };
}
var Y6 = () => {
  const n = {
    string: {
      unit: "znakova",
      verb: "imati"
    },
    file: {
      unit: "bajtova",
      verb: "imati"
    },
    array: {
      unit: "stavki",
      verb: "imati"
    },
    set: {
      unit: "stavki",
      verb: "imati"
    }
  };
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
    regex: "unos",
    email: "email adresa",
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
    datetime: "ISO datum i vrijeme",
    date: "ISO datum",
    time: "ISO vrijeme",
    duration: "ISO trajanje",
    ipv4: "IPv4 adresa",
    ipv6: "IPv6 adresa",
    cidrv4: "IPv4 raspon",
    cidrv6: "IPv6 raspon",
    base64: "base64 kodirani tekst",
    base64url: "base64url kodirani tekst",
    json_string: "JSON tekst",
    e164: "E.164 broj",
    jwt: "JWT",
    template_literal: "unos"
  }, c = {
    nan: "NaN",
    string: "tekst",
    number: "broj",
    boolean: "boolean",
    array: "niz",
    object: "objekt",
    set: "skup",
    file: "datoteka",
    date: "datum",
    bigint: "bigint",
    symbol: "simbol",
    undefined: "undefined",
    null: "null",
    function: "funkcija",
    map: "mapa"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Neispravan unos: očekuje se instanceof ${i.expected}, a primljeno je ${m}` : `Neispravan unos: očekuje se ${u}, a primljeno je ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Neispravna vrijednost: očekivano ${Q(i.values[0])}` : `Neispravna opcija: očekivano jedno od ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin), m = c[i.origin] ?? i.origin;
        return d ? `Preveliko: očekivano da ${m ?? "vrijednost"} ima ${u}${i.maximum.toString()} ${d.unit ?? "elemenata"}` : `Preveliko: očekivano da ${m ?? "vrijednost"} bude ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin), m = c[i.origin] ?? i.origin;
        return d ? `Premalo: očekivano da ${m} ima ${u}${i.minimum.toString()} ${d.unit}` : `Premalo: očekivano da ${m} bude ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Neispravan tekst: mora započinjati s "${u.prefix}"` : u.format === "ends_with" ? `Neispravan tekst: mora završavati s "${u.suffix}"` : u.format === "includes" ? `Neispravan tekst: mora sadržavati "${u.includes}"` : u.format === "regex" ? `Neispravan tekst: mora odgovarati uzorku ${u.pattern}` : `Neispravna ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Neispravan broj: mora biti višekratnik od ${i.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznat${i.keys.length > 1 ? "i ključevi" : " ključ"}: ${C(i.keys, ", ")}`;
      case "invalid_key":
        return `Neispravan ključ u ${c[i.origin] ?? i.origin}`;
      case "invalid_union":
        return "Neispravan unos";
      case "invalid_element":
        return `Neispravna vrijednost u ${c[i.origin] ?? i.origin}`;
      default:
        return "Neispravan unos";
    }
  };
};
function V6() {
  return { localeError: Y6() };
}
var Q6 = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "szám",
    array: "tömb"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Érvénytelen bemenet: a várt érték instanceof ${i.expected}, a kapott érték ${m}` : `Érvénytelen bemenet: a várt érték ${u}, a kapott érték ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Érvénytelen bemenet: a várt érték ${Q(i.values[0])}` : `Érvénytelen opció: valamelyik érték várt ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Túl nagy: ${i.origin ?? "érték"} mérete túl nagy ${u}${i.maximum.toString()} ${d.unit ?? "elem"}` : `Túl nagy: a bemeneti érték ${i.origin ?? "érték"} túl nagy: ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Túl kicsi: a bemeneti érték ${i.origin} mérete túl kicsi ${u}${i.minimum.toString()} ${d.unit}` : `Túl kicsi: a bemeneti érték ${i.origin} túl kicsi ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Érvénytelen string: "${u.prefix}" értékkel kell kezdődnie` : u.format === "ends_with" ? `Érvénytelen string: "${u.suffix}" értékkel kell végződnie` : u.format === "includes" ? `Érvénytelen string: "${u.includes}" értéket kell tartalmaznia` : u.format === "regex" ? `Érvénytelen string: ${u.pattern} mintának kell megfelelnie` : `Érvénytelen ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Érvénytelen szám: ${i.divisor} többszörösének kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${i.keys.length > 1 ? "s" : ""}: ${C(i.keys, ", ")}`;
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
function X6() {
  return { localeError: Q6() };
}
function I_(n, a, o) {
  return Math.abs(n) === 1 ? a : o;
}
function Ma(n) {
  if (!n) return "";
  const a = [
    "ա",
    "ե",
    "ը",
    "ի",
    "ո",
    "ու",
    "օ"
  ], o = n[n.length - 1];
  return n + (a.includes(o) ? "ն" : "ը");
}
var K6 = () => {
  const n = {
    string: {
      unit: {
        one: "նշան",
        many: "նշաններ"
      },
      verb: "ունենալ"
    },
    file: {
      unit: {
        one: "բայթ",
        many: "բայթեր"
      },
      verb: "ունենալ"
    },
    array: {
      unit: {
        one: "տարր",
        many: "տարրեր"
      },
      verb: "ունենալ"
    },
    set: {
      unit: {
        one: "տարր",
        many: "տարրեր"
      },
      verb: "ունենալ"
    }
  };
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
    regex: "մուտք",
    email: "էլ. հասցե",
    url: "URL",
    emoji: "էմոջի",
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
    datetime: "ISO ամսաթիվ և ժամ",
    date: "ISO ամսաթիվ",
    time: "ISO ժամ",
    duration: "ISO տևողություն",
    ipv4: "IPv4 հասցե",
    ipv6: "IPv6 հասցե",
    cidrv4: "IPv4 միջակայք",
    cidrv6: "IPv6 միջակայք",
    base64: "base64 ձևաչափով տող",
    base64url: "base64url ձևաչափով տող",
    json_string: "JSON տող",
    e164: "E.164 համար",
    jwt: "JWT",
    template_literal: "մուտք"
  }, c = {
    nan: "NaN",
    number: "թիվ",
    array: "զանգված"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Սխալ մուտքագրում․ սպասվում էր instanceof ${i.expected}, ստացվել է ${m}` : `Սխալ մուտքագրում․ սպասվում էր ${u}, ստացվել է ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Սխալ մուտքագրում․ սպասվում էր ${Q(i.values[1])}` : `Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        if (d) {
          const m = I_(Number(i.maximum), d.unit.one, d.unit.many);
          return `Չափազանց մեծ արժեք․ սպասվում է, որ ${Ma(i.origin ?? "արժեք")} կունենա ${u}${i.maximum.toString()} ${m}`;
        }
        return `Չափազանց մեծ արժեք․ սպասվում է, որ ${Ma(i.origin ?? "արժեք")} լինի ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        if (d) {
          const m = I_(Number(i.minimum), d.unit.one, d.unit.many);
          return `Չափազանց փոքր արժեք․ սպասվում է, որ ${Ma(i.origin)} կունենա ${u}${i.minimum.toString()} ${m}`;
        }
        return `Չափազանց փոքր արժեք․ սպասվում է, որ ${Ma(i.origin)} լինի ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Սխալ տող․ պետք է սկսվի "${u.prefix}"-ով` : u.format === "ends_with" ? `Սխալ տող․ պետք է ավարտվի "${u.suffix}"-ով` : u.format === "includes" ? `Սխալ տող․ պետք է պարունակի "${u.includes}"` : u.format === "regex" ? `Սխալ տող․ պետք է համապատասխանի ${u.pattern} ձևաչափին` : `Սխալ ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Սխալ թիվ․ պետք է բազմապատիկ լինի ${i.divisor}-ի`;
      case "unrecognized_keys":
        return `Չճանաչված բանալի${i.keys.length > 1 ? "ներ" : ""}. ${C(i.keys, ", ")}`;
      case "invalid_key":
        return `Սխալ բանալի ${Ma(i.origin)}-ում`;
      case "invalid_union":
        return "Սխալ մուտքագրում";
      case "invalid_element":
        return `Սխալ արժեք ${Ma(i.origin)}-ում`;
      default:
        return "Սխալ մուտքագրում";
    }
  };
};
function F6() {
  return { localeError: K6() };
}
var W6 = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = { nan: "NaN" };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Input tidak valid: diharapkan instanceof ${i.expected}, diterima ${m}` : `Input tidak valid: diharapkan ${u}, diterima ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Input tidak valid: diharapkan ${Q(i.values[0])}` : `Pilihan tidak valid: diharapkan salah satu dari ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Terlalu besar: diharapkan ${i.origin ?? "value"} memiliki ${u}${i.maximum.toString()} ${d.unit ?? "elemen"}` : `Terlalu besar: diharapkan ${i.origin ?? "value"} menjadi ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Terlalu kecil: diharapkan ${i.origin} memiliki ${u}${i.minimum.toString()} ${d.unit}` : `Terlalu kecil: diharapkan ${i.origin} menjadi ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `String tidak valid: harus dimulai dengan "${u.prefix}"` : u.format === "ends_with" ? `String tidak valid: harus berakhir dengan "${u.suffix}"` : u.format === "includes" ? `String tidak valid: harus menyertakan "${u.includes}"` : u.format === "regex" ? `String tidak valid: harus sesuai pola ${u.pattern}` : `${o[u.format] ?? i.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${i.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${i.keys.length > 1 ? "s" : ""}: ${C(i.keys, ", ")}`;
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
function eT() {
  return { localeError: W6() };
}
var tT = () => {
  const n = {
    string: {
      unit: "stafi",
      verb: "að hafa"
    },
    file: {
      unit: "bæti",
      verb: "að hafa"
    },
    array: {
      unit: "hluti",
      verb: "að hafa"
    },
    set: {
      unit: "hluti",
      verb: "að hafa"
    }
  };
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
    regex: "gildi",
    email: "netfang",
    url: "vefslóð",
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
    datetime: "ISO dagsetning og tími",
    date: "ISO dagsetning",
    time: "ISO tími",
    duration: "ISO tímalengd",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded strengur",
    base64url: "base64url-encoded strengur",
    json_string: "JSON strengur",
    e164: "E.164 tölugildi",
    jwt: "JWT",
    template_literal: "gildi"
  }, c = {
    nan: "NaN",
    number: "númer",
    array: "fylki"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Rangt gildi: Þú slóst inn ${m} þar sem á að vera instanceof ${i.expected}` : `Rangt gildi: Þú slóst inn ${m} þar sem á að vera ${u}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Rangt gildi: gert ráð fyrir ${Q(i.values[0])}` : `Ógilt val: má vera eitt af eftirfarandi ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Of stórt: gert er ráð fyrir að ${i.origin ?? "gildi"} hafi ${u}${i.maximum.toString()} ${d.unit ?? "hluti"}` : `Of stórt: gert er ráð fyrir að ${i.origin ?? "gildi"} sé ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Of lítið: gert er ráð fyrir að ${i.origin} hafi ${u}${i.minimum.toString()} ${d.unit}` : `Of lítið: gert er ráð fyrir að ${i.origin} sé ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Ógildur strengur: verður að byrja á "${u.prefix}"` : u.format === "ends_with" ? `Ógildur strengur: verður að enda á "${u.suffix}"` : u.format === "includes" ? `Ógildur strengur: verður að innihalda "${u.includes}"` : u.format === "regex" ? `Ógildur strengur: verður að fylgja mynstri ${u.pattern}` : `Rangt ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Röng tala: verður að vera margfeldi af ${i.divisor}`;
      case "unrecognized_keys":
        return `Óþekkt ${i.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${C(i.keys, ", ")}`;
      case "invalid_key":
        return `Rangur lykill í ${i.origin}`;
      case "invalid_union":
        return "Rangt gildi";
      case "invalid_element":
        return `Rangt gildi í ${i.origin}`;
      default:
        return "Rangt gildi";
    }
  };
};
function nT() {
  return { localeError: tT() };
}
var iT = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "numero",
    array: "vettore"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Input non valido: atteso instanceof ${i.expected}, ricevuto ${m}` : `Input non valido: atteso ${u}, ricevuto ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Input non valido: atteso ${Q(i.values[0])}` : `Opzione non valida: atteso uno tra ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Troppo grande: ${i.origin ?? "valore"} deve avere ${u}${i.maximum.toString()} ${d.unit ?? "elementi"}` : `Troppo grande: ${i.origin ?? "valore"} deve essere ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Troppo piccolo: ${i.origin} deve avere ${u}${i.minimum.toString()} ${d.unit}` : `Troppo piccolo: ${i.origin} deve essere ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Stringa non valida: deve iniziare con "${u.prefix}"` : u.format === "ends_with" ? `Stringa non valida: deve terminare con "${u.suffix}"` : u.format === "includes" ? `Stringa non valida: deve includere "${u.includes}"` : u.format === "regex" ? `Stringa non valida: deve corrispondere al pattern ${u.pattern}` : `Input non valido: ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${i.divisor}`;
      case "unrecognized_keys":
        return `Chiav${i.keys.length > 1 ? "i" : "e"} non riconosciut${i.keys.length > 1 ? "e" : "a"}: ${C(i.keys, ", ")}`;
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
function aT() {
  return { localeError: iT() };
}
var rT = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "数値",
    array: "配列"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `無効な入力: instanceof ${i.expected}が期待されましたが、${m}が入力されました` : `無効な入力: ${u}が期待されましたが、${m}が入力されました`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `無効な入力: ${Q(i.values[0])}が期待されました` : `無効な選択: ${C(i.values, "、")}のいずれかである必要があります`;
      case "too_big": {
        const u = i.inclusive ? "以下である" : "より小さい", d = a(i.origin);
        return d ? `大きすぎる値: ${i.origin ?? "値"}は${i.maximum.toString()}${d.unit ?? "要素"}${u}必要があります` : `大きすぎる値: ${i.origin ?? "値"}は${i.maximum.toString()}${u}必要があります`;
      }
      case "too_small": {
        const u = i.inclusive ? "以上である" : "より大きい", d = a(i.origin);
        return d ? `小さすぎる値: ${i.origin}は${i.minimum.toString()}${d.unit}${u}必要があります` : `小さすぎる値: ${i.origin}は${i.minimum.toString()}${u}必要があります`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `無効な文字列: "${u.prefix}"で始まる必要があります` : u.format === "ends_with" ? `無効な文字列: "${u.suffix}"で終わる必要があります` : u.format === "includes" ? `無効な文字列: "${u.includes}"を含む必要があります` : u.format === "regex" ? `無効な文字列: パターン${u.pattern}に一致する必要があります` : `無効な${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `無効な数値: ${i.divisor}の倍数である必要があります`;
      case "unrecognized_keys":
        return `認識されていないキー${i.keys.length > 1 ? "群" : ""}: ${C(i.keys, "、")}`;
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
function oT() {
  return { localeError: rT() };
}
var lT = () => {
  const n = {
    string: {
      unit: "სიმბოლო",
      verb: "უნდა შეიცავდეს"
    },
    file: {
      unit: "ბაიტი",
      verb: "უნდა შეიცავდეს"
    },
    array: {
      unit: "ელემენტი",
      verb: "უნდა შეიცავდეს"
    },
    set: {
      unit: "ელემენტი",
      verb: "უნდა შეიცავდეს"
    }
  };
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
    regex: "შეყვანა",
    email: "ელ-ფოსტის მისამართი",
    url: "URL",
    emoji: "ემოჯი",
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
    datetime: "თარიღი-დრო",
    date: "თარიღი",
    time: "დრო",
    duration: "ხანგრძლივობა",
    ipv4: "IPv4 მისამართი",
    ipv6: "IPv6 მისამართი",
    cidrv4: "IPv4 დიაპაზონი",
    cidrv6: "IPv6 დიაპაზონი",
    base64: "base64-კოდირებული ველი",
    base64url: "base64url-კოდირებული ველი",
    json_string: "JSON ველი",
    e164: "E.164 ნომერი",
    jwt: "JWT",
    template_literal: "შეყვანა"
  }, c = {
    nan: "NaN",
    number: "რიცხვი",
    string: "ველი",
    boolean: "ბულეანი",
    function: "ფუნქცია",
    array: "მასივი"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `არასწორი შეყვანა: მოსალოდნელი instanceof ${i.expected}, მიღებული ${m}` : `არასწორი შეყვანა: მოსალოდნელი ${u}, მიღებული ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `არასწორი შეყვანა: მოსალოდნელი ${Q(i.values[0])}` : `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${C(i.values, "|")}-დან`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `ზედმეტად დიდი: მოსალოდნელი ${i.origin ?? "მნიშვნელობა"} ${d.verb} ${u}${i.maximum.toString()} ${d.unit}` : `ზედმეტად დიდი: მოსალოდნელი ${i.origin ?? "მნიშვნელობა"} იყოს ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `ზედმეტად პატარა: მოსალოდნელი ${i.origin} ${d.verb} ${u}${i.minimum.toString()} ${d.unit}` : `ზედმეტად პატარა: მოსალოდნელი ${i.origin} იყოს ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `არასწორი ველი: უნდა იწყებოდეს "${u.prefix}"-ით` : u.format === "ends_with" ? `არასწორი ველი: უნდა მთავრდებოდეს "${u.suffix}"-ით` : u.format === "includes" ? `არასწორი ველი: უნდა შეიცავდეს "${u.includes}"-ს` : u.format === "regex" ? `არასწორი ველი: უნდა შეესაბამებოდეს შაბლონს ${u.pattern}` : `არასწორი ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `არასწორი რიცხვი: უნდა იყოს ${i.divisor}-ის ჯერადი`;
      case "unrecognized_keys":
        return `უცნობი გასაღებ${i.keys.length > 1 ? "ები" : "ი"}: ${C(i.keys, ", ")}`;
      case "invalid_key":
        return `არასწორი გასაღები ${i.origin}-ში`;
      case "invalid_union":
        return "არასწორი შეყვანა";
      case "invalid_element":
        return `არასწორი მნიშვნელობა ${i.origin}-ში`;
      default:
        return "არასწორი შეყვანა";
    }
  };
};
function uT() {
  return { localeError: lT() };
}
var cT = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "លេខ",
    array: "អារេ (Array)",
    null: "គ្មានតម្លៃ (null)"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${i.expected} ប៉ុន្តែទទួលបាន ${m}` : `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${u} ប៉ុន្តែទទួលបាន ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${Q(i.values[0])}` : `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `ធំពេក៖ ត្រូវការ ${i.origin ?? "តម្លៃ"} ${u} ${i.maximum.toString()} ${d.unit ?? "ធាតុ"}` : `ធំពេក៖ ត្រូវការ ${i.origin ?? "តម្លៃ"} ${u} ${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `តូចពេក៖ ត្រូវការ ${i.origin} ${u} ${i.minimum.toString()} ${d.unit}` : `តូចពេក៖ ត្រូវការ ${i.origin} ${u} ${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${u.prefix}"` : u.format === "ends_with" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${u.suffix}"` : u.format === "includes" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${u.includes}"` : u.format === "regex" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${u.pattern}` : `មិនត្រឹមត្រូវ៖ ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${i.divisor}`;
      case "unrecognized_keys":
        return `រកឃើញសោមិនស្គាល់៖ ${C(i.keys, ", ")}`;
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
function j$() {
  return { localeError: cT() };
}
function sT() {
  return j$();
}
var dT = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = { nan: "NaN" };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `잘못된 입력: 예상 타입은 instanceof ${i.expected}, 받은 타입은 ${m}입니다` : `잘못된 입력: 예상 타입은 ${u}, 받은 타입은 ${m}입니다`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `잘못된 입력: 값은 ${Q(i.values[0])} 이어야 합니다` : `잘못된 옵션: ${C(i.values, "또는 ")} 중 하나여야 합니다`;
      case "too_big": {
        const u = i.inclusive ? "이하" : "미만", d = u === "미만" ? "이어야 합니다" : "여야 합니다", m = a(i.origin), y = m?.unit ?? "요소";
        return m ? `${i.origin ?? "값"}이 너무 큽니다: ${i.maximum.toString()}${y} ${u}${d}` : `${i.origin ?? "값"}이 너무 큽니다: ${i.maximum.toString()} ${u}${d}`;
      }
      case "too_small": {
        const u = i.inclusive ? "이상" : "초과", d = u === "이상" ? "이어야 합니다" : "여야 합니다", m = a(i.origin), y = m?.unit ?? "요소";
        return m ? `${i.origin ?? "값"}이 너무 작습니다: ${i.minimum.toString()}${y} ${u}${d}` : `${i.origin ?? "값"}이 너무 작습니다: ${i.minimum.toString()} ${u}${d}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `잘못된 문자열: "${u.prefix}"(으)로 시작해야 합니다` : u.format === "ends_with" ? `잘못된 문자열: "${u.suffix}"(으)로 끝나야 합니다` : u.format === "includes" ? `잘못된 문자열: "${u.includes}"을(를) 포함해야 합니다` : u.format === "regex" ? `잘못된 문자열: 정규식 ${u.pattern} 패턴과 일치해야 합니다` : `잘못된 ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `잘못된 숫자: ${i.divisor}의 배수여야 합니다`;
      case "unrecognized_keys":
        return `인식할 수 없는 키: ${C(i.keys, ", ")}`;
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
function fT() {
  return { localeError: dT() };
}
var ro = (n) => n.charAt(0).toUpperCase() + n.slice(1);
function R_(n) {
  const a = Math.abs(n), o = a % 10, c = a % 100;
  return c >= 11 && c <= 19 || o === 0 ? "many" : o === 1 ? "one" : "few";
}
var mT = () => {
  const n = {
    string: {
      unit: {
        one: "simbolis",
        few: "simboliai",
        many: "simbolių"
      },
      verb: {
        smaller: {
          inclusive: "turi būti ne ilgesnė kaip",
          notInclusive: "turi būti trumpesnė kaip"
        },
        bigger: {
          inclusive: "turi būti ne trumpesnė kaip",
          notInclusive: "turi būti ilgesnė kaip"
        }
      }
    },
    file: {
      unit: {
        one: "baitas",
        few: "baitai",
        many: "baitų"
      },
      verb: {
        smaller: {
          inclusive: "turi būti ne didesnis kaip",
          notInclusive: "turi būti mažesnis kaip"
        },
        bigger: {
          inclusive: "turi būti ne mažesnis kaip",
          notInclusive: "turi būti didesnis kaip"
        }
      }
    },
    array: {
      unit: {
        one: "elementą",
        few: "elementus",
        many: "elementų"
      },
      verb: {
        smaller: {
          inclusive: "turi turėti ne daugiau kaip",
          notInclusive: "turi turėti mažiau kaip"
        },
        bigger: {
          inclusive: "turi turėti ne mažiau kaip",
          notInclusive: "turi turėti daugiau kaip"
        }
      }
    },
    set: {
      unit: {
        one: "elementą",
        few: "elementus",
        many: "elementų"
      },
      verb: {
        smaller: {
          inclusive: "turi turėti ne daugiau kaip",
          notInclusive: "turi turėti mažiau kaip"
        },
        bigger: {
          inclusive: "turi turėti ne mažiau kaip",
          notInclusive: "turi turėti daugiau kaip"
        }
      }
    }
  };
  function a(i, u, d, m) {
    const y = n[i] ?? null;
    return y === null ? y : {
      unit: y.unit[u],
      verb: y.verb[m][d ? "inclusive" : "notInclusive"]
    };
  }
  const o = {
    regex: "įvestis",
    email: "el. pašto adresas",
    url: "URL",
    emoji: "jaustukas",
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
    datetime: "ISO data ir laikas",
    date: "ISO data",
    time: "ISO laikas",
    duration: "ISO trukmė",
    ipv4: "IPv4 adresas",
    ipv6: "IPv6 adresas",
    cidrv4: "IPv4 tinklo prefiksas (CIDR)",
    cidrv6: "IPv6 tinklo prefiksas (CIDR)",
    base64: "base64 užkoduota eilutė",
    base64url: "base64url užkoduota eilutė",
    json_string: "JSON eilutė",
    e164: "E.164 numeris",
    jwt: "JWT",
    template_literal: "įvestis"
  }, c = {
    nan: "NaN",
    number: "skaičius",
    bigint: "sveikasis skaičius",
    string: "eilutė",
    boolean: "loginė reikšmė",
    undefined: "neapibrėžta reikšmė",
    function: "funkcija",
    symbol: "simbolis",
    array: "masyvas",
    object: "objektas",
    null: "nulinė reikšmė"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Gautas tipas ${m}, o tikėtasi - instanceof ${i.expected}` : `Gautas tipas ${m}, o tikėtasi - ${u}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Privalo būti ${Q(i.values[0])}` : `Privalo būti vienas iš ${C(i.values, "|")} pasirinkimų`;
      case "too_big": {
        const u = c[i.origin] ?? i.origin, d = a(i.origin, R_(Number(i.maximum)), i.inclusive ?? !1, "smaller");
        if (d?.verb) return `${ro(u ?? i.origin ?? "reikšmė")} ${d.verb} ${i.maximum.toString()} ${d.unit ?? "elementų"}`;
        const m = i.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
        return `${ro(u ?? i.origin ?? "reikšmė")} turi būti ${m} ${i.maximum.toString()} ${d?.unit}`;
      }
      case "too_small": {
        const u = c[i.origin] ?? i.origin, d = a(i.origin, R_(Number(i.minimum)), i.inclusive ?? !1, "bigger");
        if (d?.verb) return `${ro(u ?? i.origin ?? "reikšmė")} ${d.verb} ${i.minimum.toString()} ${d.unit ?? "elementų"}`;
        const m = i.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
        return `${ro(u ?? i.origin ?? "reikšmė")} turi būti ${m} ${i.minimum.toString()} ${d?.unit}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Eilutė privalo prasidėti "${u.prefix}"` : u.format === "ends_with" ? `Eilutė privalo pasibaigti "${u.suffix}"` : u.format === "includes" ? `Eilutė privalo įtraukti "${u.includes}"` : u.format === "regex" ? `Eilutė privalo atitikti ${u.pattern}` : `Neteisingas ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Skaičius privalo būti ${i.divisor} kartotinis.`;
      case "unrecognized_keys":
        return `Neatpažint${i.keys.length > 1 ? "i" : "as"} rakt${i.keys.length > 1 ? "ai" : "as"}: ${C(i.keys, ", ")}`;
      case "invalid_key":
        return "Rastas klaidingas raktas";
      case "invalid_union":
        return "Klaidinga įvestis";
      case "invalid_element":
        return `${ro(c[i.origin] ?? i.origin ?? i.origin ?? "reikšmė")} turi klaidingą įvestį`;
      default:
        return "Klaidinga įvestis";
    }
  };
};
function vT() {
  return { localeError: mT() };
}
var pT = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "број",
    array: "низа"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Грешен внес: се очекува instanceof ${i.expected}, примено ${m}` : `Грешен внес: се очекува ${u}, примено ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Invalid input: expected ${Q(i.values[0])}` : `Грешана опција: се очекува една ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Премногу голем: се очекува ${i.origin ?? "вредноста"} да има ${u}${i.maximum.toString()} ${d.unit ?? "елементи"}` : `Премногу голем: се очекува ${i.origin ?? "вредноста"} да биде ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Премногу мал: се очекува ${i.origin} да има ${u}${i.minimum.toString()} ${d.unit}` : `Премногу мал: се очекува ${i.origin} да биде ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Неважечка низа: мора да започнува со "${u.prefix}"` : u.format === "ends_with" ? `Неважечка низа: мора да завршува со "${u.suffix}"` : u.format === "includes" ? `Неважечка низа: мора да вклучува "${u.includes}"` : u.format === "regex" ? `Неважечка низа: мора да одгоара на патернот ${u.pattern}` : `Invalid ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Грешен број: мора да биде делив со ${i.divisor}`;
      case "unrecognized_keys":
        return `${i.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${C(i.keys, ", ")}`;
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
function gT() {
  return { localeError: pT() };
}
var hT = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "nombor"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Input tidak sah: dijangka instanceof ${i.expected}, diterima ${m}` : `Input tidak sah: dijangka ${u}, diterima ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Input tidak sah: dijangka ${Q(i.values[0])}` : `Pilihan tidak sah: dijangka salah satu daripada ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Terlalu besar: dijangka ${i.origin ?? "nilai"} ${d.verb} ${u}${i.maximum.toString()} ${d.unit ?? "elemen"}` : `Terlalu besar: dijangka ${i.origin ?? "nilai"} adalah ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Terlalu kecil: dijangka ${i.origin} ${d.verb} ${u}${i.minimum.toString()} ${d.unit}` : `Terlalu kecil: dijangka ${i.origin} adalah ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `String tidak sah: mesti bermula dengan "${u.prefix}"` : u.format === "ends_with" ? `String tidak sah: mesti berakhir dengan "${u.suffix}"` : u.format === "includes" ? `String tidak sah: mesti mengandungi "${u.includes}"` : u.format === "regex" ? `String tidak sah: mesti sepadan dengan corak ${u.pattern}` : `${o[u.format] ?? i.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${i.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${C(i.keys, ", ")}`;
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
function yT() {
  return { localeError: hT() };
}
var _T = () => {
  const n = {
    string: {
      unit: "tekens",
      verb: "heeft"
    },
    file: {
      unit: "bytes",
      verb: "heeft"
    },
    array: {
      unit: "elementen",
      verb: "heeft"
    },
    set: {
      unit: "elementen",
      verb: "heeft"
    }
  };
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "getal"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Ongeldige invoer: verwacht instanceof ${i.expected}, ontving ${m}` : `Ongeldige invoer: verwacht ${u}, ontving ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Ongeldige invoer: verwacht ${Q(i.values[0])}` : `Ongeldige optie: verwacht één van ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin), m = i.origin === "date" ? "laat" : i.origin === "string" ? "lang" : "groot";
        return d ? `Te ${m}: verwacht dat ${i.origin ?? "waarde"} ${u}${i.maximum.toString()} ${d.unit ?? "elementen"} ${d.verb}` : `Te ${m}: verwacht dat ${i.origin ?? "waarde"} ${u}${i.maximum.toString()} is`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin), m = i.origin === "date" ? "vroeg" : i.origin === "string" ? "kort" : "klein";
        return d ? `Te ${m}: verwacht dat ${i.origin} ${u}${i.minimum.toString()} ${d.unit} ${d.verb}` : `Te ${m}: verwacht dat ${i.origin} ${u}${i.minimum.toString()} is`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Ongeldige tekst: moet met "${u.prefix}" beginnen` : u.format === "ends_with" ? `Ongeldige tekst: moet op "${u.suffix}" eindigen` : u.format === "includes" ? `Ongeldige tekst: moet "${u.includes}" bevatten` : u.format === "regex" ? `Ongeldige tekst: moet overeenkomen met patroon ${u.pattern}` : `Ongeldig: ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${i.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${i.keys.length > 1 ? "s" : ""}: ${C(i.keys, ", ")}`;
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
function bT() {
  return { localeError: _T() };
}
var ST = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "tall",
    array: "liste"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Ugyldig input: forventet instanceof ${i.expected}, fikk ${m}` : `Ugyldig input: forventet ${u}, fikk ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Ugyldig verdi: forventet ${Q(i.values[0])}` : `Ugyldig valg: forventet en av ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `For stor(t): forventet ${i.origin ?? "value"} til å ha ${u}${i.maximum.toString()} ${d.unit ?? "elementer"}` : `For stor(t): forventet ${i.origin ?? "value"} til å ha ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `For lite(n): forventet ${i.origin} til å ha ${u}${i.minimum.toString()} ${d.unit}` : `For lite(n): forventet ${i.origin} til å ha ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Ugyldig streng: må starte med "${u.prefix}"` : u.format === "ends_with" ? `Ugyldig streng: må ende med "${u.suffix}"` : u.format === "includes" ? `Ugyldig streng: må inneholde "${u.includes}"` : u.format === "regex" ? `Ugyldig streng: må matche mønsteret ${u.pattern}` : `Ugyldig ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: må være et multiplum av ${i.divisor}`;
      case "unrecognized_keys":
        return `${i.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${C(i.keys, ", ")}`;
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
function $T() {
  return { localeError: ST() };
}
var zT = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "numara",
    array: "saf",
    null: "gayb"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Fâsit giren: umulan instanceof ${i.expected}, alınan ${m}` : `Fâsit giren: umulan ${u}, alınan ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Fâsit giren: umulan ${Q(i.values[0])}` : `Fâsit tercih: mûteberler ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Fazla büyük: ${i.origin ?? "value"}, ${u}${i.maximum.toString()} ${d.unit ?? "elements"} sahip olmalıydı.` : `Fazla büyük: ${i.origin ?? "value"}, ${u}${i.maximum.toString()} olmalıydı.`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Fazla küçük: ${i.origin}, ${u}${i.minimum.toString()} ${d.unit} sahip olmalıydı.` : `Fazla küçük: ${i.origin}, ${u}${i.minimum.toString()} olmalıydı.`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Fâsit metin: "${u.prefix}" ile başlamalı.` : u.format === "ends_with" ? `Fâsit metin: "${u.suffix}" ile bitmeli.` : u.format === "includes" ? `Fâsit metin: "${u.includes}" ihtivâ etmeli.` : u.format === "regex" ? `Fâsit metin: ${u.pattern} nakşına uymalı.` : `Fâsit ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Fâsit sayı: ${i.divisor} katı olmalıydı.`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar ${i.keys.length > 1 ? "s" : ""}: ${C(i.keys, ", ")}`;
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
function kT() {
  return { localeError: zT() };
}
var TT = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "عدد",
    array: "ارې"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `ناسم ورودي: باید instanceof ${i.expected} وای, مګر ${m} ترلاسه شو` : `ناسم ورودي: باید ${u} وای, مګر ${m} ترلاسه شو`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `ناسم ورودي: باید ${Q(i.values[0])} وای` : `ناسم انتخاب: باید یو له ${C(i.values, "|")} څخه وای`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `ډیر لوی: ${i.origin ?? "ارزښت"} باید ${u}${i.maximum.toString()} ${d.unit ?? "عنصرونه"} ولري` : `ډیر لوی: ${i.origin ?? "ارزښت"} باید ${u}${i.maximum.toString()} وي`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `ډیر کوچنی: ${i.origin} باید ${u}${i.minimum.toString()} ${d.unit} ولري` : `ډیر کوچنی: ${i.origin} باید ${u}${i.minimum.toString()} وي`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `ناسم متن: باید د "${u.prefix}" سره پیل شي` : u.format === "ends_with" ? `ناسم متن: باید د "${u.suffix}" سره پای ته ورسيږي` : u.format === "includes" ? `ناسم متن: باید "${u.includes}" ولري` : u.format === "regex" ? `ناسم متن: باید د ${u.pattern} سره مطابقت ولري` : `${o[u.format] ?? i.format} ناسم دی`;
      }
      case "not_multiple_of":
        return `ناسم عدد: باید د ${i.divisor} مضرب وي`;
      case "unrecognized_keys":
        return `ناسم ${i.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${C(i.keys, ", ")}`;
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
function wT() {
  return { localeError: TT() };
}
var xT = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "liczba",
    array: "tablica"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Nieprawidłowe dane wejściowe: oczekiwano instanceof ${i.expected}, otrzymano ${m}` : `Nieprawidłowe dane wejściowe: oczekiwano ${u}, otrzymano ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Nieprawidłowe dane wejściowe: oczekiwano ${Q(i.values[0])}` : `Nieprawidłowa opcja: oczekiwano jednej z wartości ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Za duża wartość: oczekiwano, że ${i.origin ?? "wartość"} będzie mieć ${u}${i.maximum.toString()} ${d.unit ?? "elementów"}` : `Zbyt duż(y/a/e): oczekiwano, że ${i.origin ?? "wartość"} będzie wynosić ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Za mała wartość: oczekiwano, że ${i.origin ?? "wartość"} będzie mieć ${u}${i.minimum.toString()} ${d.unit ?? "elementów"}` : `Zbyt mał(y/a/e): oczekiwano, że ${i.origin ?? "wartość"} będzie wynosić ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Nieprawidłowy ciąg znaków: musi zaczynać się od "${u.prefix}"` : u.format === "ends_with" ? `Nieprawidłowy ciąg znaków: musi kończyć się na "${u.suffix}"` : u.format === "includes" ? `Nieprawidłowy ciąg znaków: musi zawierać "${u.includes}"` : u.format === "regex" ? `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${u.pattern}` : `Nieprawidłow(y/a/e) ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Nieprawidłowa liczba: musi być wielokrotnością ${i.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${i.keys.length > 1 ? "s" : ""}: ${C(i.keys, ", ")}`;
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
function ET() {
  return { localeError: xT() };
}
var UT = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "número",
    null: "nulo"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Tipo inválido: esperado instanceof ${i.expected}, recebido ${m}` : `Tipo inválido: esperado ${u}, recebido ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Entrada inválida: esperado ${Q(i.values[0])}` : `Opção inválida: esperada uma das ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Muito grande: esperado que ${i.origin ?? "valor"} tivesse ${u}${i.maximum.toString()} ${d.unit ?? "elementos"}` : `Muito grande: esperado que ${i.origin ?? "valor"} fosse ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Muito pequeno: esperado que ${i.origin} tivesse ${u}${i.minimum.toString()} ${d.unit}` : `Muito pequeno: esperado que ${i.origin} fosse ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Texto inválido: deve começar com "${u.prefix}"` : u.format === "ends_with" ? `Texto inválido: deve terminar com "${u.suffix}"` : u.format === "includes" ? `Texto inválido: deve incluir "${u.includes}"` : u.format === "regex" ? `Texto inválido: deve corresponder ao padrão ${u.pattern}` : `${o[u.format] ?? i.format} inválido`;
      }
      case "not_multiple_of":
        return `Número inválido: deve ser múltiplo de ${i.divisor}`;
      case "unrecognized_keys":
        return `Chave${i.keys.length > 1 ? "s" : ""} desconhecida${i.keys.length > 1 ? "s" : ""}: ${C(i.keys, ", ")}`;
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
function OT() {
  return { localeError: UT() };
}
var DT = () => {
  const n = {
    string: {
      unit: "caractere",
      verb: "să aibă"
    },
    file: {
      unit: "octeți",
      verb: "să aibă"
    },
    array: {
      unit: "elemente",
      verb: "să aibă"
    },
    set: {
      unit: "elemente",
      verb: "să aibă"
    },
    map: {
      unit: "intrări",
      verb: "să aibă"
    }
  };
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
    regex: "intrare",
    email: "adresă de email",
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
    datetime: "dată și oră ISO",
    date: "dată ISO",
    time: "oră ISO",
    duration: "durată ISO",
    ipv4: "adresă IPv4",
    ipv6: "adresă IPv6",
    mac: "adresă MAC",
    cidrv4: "interval IPv4",
    cidrv6: "interval IPv6",
    base64: "șir codat base64",
    base64url: "șir codat base64url",
    json_string: "șir JSON",
    e164: "număr E.164",
    jwt: "JWT",
    template_literal: "intrare"
  }, c = {
    nan: "NaN",
    string: "șir",
    number: "număr",
    boolean: "boolean",
    function: "funcție",
    array: "matrice",
    object: "obiect",
    undefined: "nedefinit",
    symbol: "simbol",
    bigint: "număr mare",
    void: "void",
    never: "never",
    map: "hartă",
    set: "set"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input);
        return `Intrare invalidă: așteptat ${u}, primit ${c[d] ?? d}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Intrare invalidă: așteptat ${Q(i.values[0])}` : `Opțiune invalidă: așteptat una dintre ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Prea mare: așteptat ca ${i.origin ?? "valoarea"} ${d.verb} ${u}${i.maximum.toString()} ${d.unit ?? "elemente"}` : `Prea mare: așteptat ca ${i.origin ?? "valoarea"} să fie ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Prea mic: așteptat ca ${i.origin} ${d.verb} ${u}${i.minimum.toString()} ${d.unit}` : `Prea mic: așteptat ca ${i.origin} să fie ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Șir invalid: trebuie să înceapă cu "${u.prefix}"` : u.format === "ends_with" ? `Șir invalid: trebuie să se termine cu "${u.suffix}"` : u.format === "includes" ? `Șir invalid: trebuie să includă "${u.includes}"` : u.format === "regex" ? `Șir invalid: trebuie să se potrivească cu modelul ${u.pattern}` : `Format invalid: ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Număr invalid: trebuie să fie multiplu de ${i.divisor}`;
      case "unrecognized_keys":
        return `Chei nerecunoscute: ${C(i.keys, ", ")}`;
      case "invalid_key":
        return `Cheie invalidă în ${i.origin}`;
      case "invalid_union":
        return "Intrare invalidă";
      case "invalid_element":
        return `Valoare invalidă în ${i.origin}`;
      default:
        return "Intrare invalidă";
    }
  };
};
function ZT() {
  return { localeError: DT() };
}
function C_(n, a, o, c) {
  const i = Math.abs(n), u = i % 10, d = i % 100;
  return d >= 11 && d <= 19 ? c : u === 1 ? a : u >= 2 && u <= 4 ? o : c;
}
var NT = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "число",
    array: "массив"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Неверный ввод: ожидалось instanceof ${i.expected}, получено ${m}` : `Неверный ввод: ожидалось ${u}, получено ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Неверный ввод: ожидалось ${Q(i.values[0])}` : `Неверный вариант: ожидалось одно из ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        if (d) {
          const m = C_(Number(i.maximum), d.unit.one, d.unit.few, d.unit.many);
          return `Слишком большое значение: ожидалось, что ${i.origin ?? "значение"} будет иметь ${u}${i.maximum.toString()} ${m}`;
        }
        return `Слишком большое значение: ожидалось, что ${i.origin ?? "значение"} будет ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        if (d) {
          const m = C_(Number(i.minimum), d.unit.one, d.unit.few, d.unit.many);
          return `Слишком маленькое значение: ожидалось, что ${i.origin} будет иметь ${u}${i.minimum.toString()} ${m}`;
        }
        return `Слишком маленькое значение: ожидалось, что ${i.origin} будет ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Неверная строка: должна начинаться с "${u.prefix}"` : u.format === "ends_with" ? `Неверная строка: должна заканчиваться на "${u.suffix}"` : u.format === "includes" ? `Неверная строка: должна содержать "${u.includes}"` : u.format === "regex" ? `Неверная строка: должна соответствовать шаблону ${u.pattern}` : `Неверный ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Неверное число: должно быть кратным ${i.divisor}`;
      case "unrecognized_keys":
        return `Нераспознанн${i.keys.length > 1 ? "ые" : "ый"} ключ${i.keys.length > 1 ? "и" : ""}: ${C(i.keys, ", ")}`;
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
function jT() {
  return { localeError: NT() };
}
var AT = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "število",
    array: "tabela"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Neveljaven vnos: pričakovano instanceof ${i.expected}, prejeto ${m}` : `Neveljaven vnos: pričakovano ${u}, prejeto ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Neveljaven vnos: pričakovano ${Q(i.values[0])}` : `Neveljavna možnost: pričakovano eno izmed ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Preveliko: pričakovano, da bo ${i.origin ?? "vrednost"} imelo ${u}${i.maximum.toString()} ${d.unit ?? "elementov"}` : `Preveliko: pričakovano, da bo ${i.origin ?? "vrednost"} ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Premajhno: pričakovano, da bo ${i.origin} imelo ${u}${i.minimum.toString()} ${d.unit}` : `Premajhno: pričakovano, da bo ${i.origin} ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Neveljaven niz: mora se začeti z "${u.prefix}"` : u.format === "ends_with" ? `Neveljaven niz: mora se končati z "${u.suffix}"` : u.format === "includes" ? `Neveljaven niz: mora vsebovati "${u.includes}"` : u.format === "regex" ? `Neveljaven niz: mora ustrezati vzorcu ${u.pattern}` : `Neveljaven ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno število: mora biti večkratnik ${i.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${i.keys.length > 1 ? "i ključi" : " ključ"}: ${C(i.keys, ", ")}`;
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
function IT() {
  return { localeError: AT() };
}
var RT = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "antal",
    array: "lista"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Ogiltig inmatning: förväntat instanceof ${i.expected}, fick ${m}` : `Ogiltig inmatning: förväntat ${u}, fick ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Ogiltig inmatning: förväntat ${Q(i.values[0])}` : `Ogiltigt val: förväntade en av ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `För stor(t): förväntade ${i.origin ?? "värdet"} att ha ${u}${i.maximum.toString()} ${d.unit ?? "element"}` : `För stor(t): förväntat ${i.origin ?? "värdet"} att ha ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `För lite(t): förväntade ${i.origin ?? "värdet"} att ha ${u}${i.minimum.toString()} ${d.unit}` : `För lite(t): förväntade ${i.origin ?? "värdet"} att ha ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Ogiltig sträng: måste börja med "${u.prefix}"` : u.format === "ends_with" ? `Ogiltig sträng: måste sluta med "${u.suffix}"` : u.format === "includes" ? `Ogiltig sträng: måste innehålla "${u.includes}"` : u.format === "regex" ? `Ogiltig sträng: måste matcha mönstret "${u.pattern}"` : `Ogiltig(t) ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: måste vara en multipel av ${i.divisor}`;
      case "unrecognized_keys":
        return `${i.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${C(i.keys, ", ")}`;
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
function CT() {
  return { localeError: RT() };
}
var MT = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "எண்",
    array: "அணி",
    null: "வெறுமை"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${i.expected}, பெறப்பட்டது ${m}` : `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${u}, பெறப்பட்டது ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${Q(i.values[0])}` : `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${C(i.values, "|")} இல் ஒன்று`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${i.origin ?? "மதிப்பு"} ${u}${i.maximum.toString()} ${d.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்` : `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${i.origin ?? "மதிப்பு"} ${u}${i.maximum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${i.origin} ${u}${i.minimum.toString()} ${d.unit} ஆக இருக்க வேண்டும்` : `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${i.origin} ${u}${i.minimum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `தவறான சரம்: "${u.prefix}" இல் தொடங்க வேண்டும்` : u.format === "ends_with" ? `தவறான சரம்: "${u.suffix}" இல் முடிவடைய வேண்டும்` : u.format === "includes" ? `தவறான சரம்: "${u.includes}" ஐ உள்ளடக்க வேண்டும்` : u.format === "regex" ? `தவறான சரம்: ${u.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்` : `தவறான ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `தவறான எண்: ${i.divisor} இன் பலமாக இருக்க வேண்டும்`;
      case "unrecognized_keys":
        return `அடையாளம் தெரியாத விசை${i.keys.length > 1 ? "கள்" : ""}: ${C(i.keys, ", ")}`;
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
function qT() {
  return { localeError: MT() };
}
var HT = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "ตัวเลข",
    array: "อาร์เรย์ (Array)",
    null: "ไม่มีค่า (null)"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${i.expected} แต่ได้รับ ${m}` : `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${u} แต่ได้รับ ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `ค่าไม่ถูกต้อง: ควรเป็น ${Q(i.values[0])}` : `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "ไม่เกิน" : "น้อยกว่า", d = a(i.origin);
        return d ? `เกินกำหนด: ${i.origin ?? "ค่า"} ควรมี${u} ${i.maximum.toString()} ${d.unit ?? "รายการ"}` : `เกินกำหนด: ${i.origin ?? "ค่า"} ควรมี${u} ${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? "อย่างน้อย" : "มากกว่า", d = a(i.origin);
        return d ? `น้อยกว่ากำหนด: ${i.origin} ควรมี${u} ${i.minimum.toString()} ${d.unit}` : `น้อยกว่ากำหนด: ${i.origin} ควรมี${u} ${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${u.prefix}"` : u.format === "ends_with" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${u.suffix}"` : u.format === "includes" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${u.includes}" อยู่ในข้อความ` : u.format === "regex" ? `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${u.pattern}` : `รูปแบบไม่ถูกต้อง: ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${i.divisor} ได้ลงตัว`;
      case "unrecognized_keys":
        return `พบคีย์ที่ไม่รู้จัก: ${C(i.keys, ", ")}`;
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
function LT() {
  return { localeError: HT() };
}
var BT = () => {
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
  function a(i) {
    return n[i] ?? null;
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
  }, c = { nan: "NaN" };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Geçersiz değer: beklenen instanceof ${i.expected}, alınan ${m}` : `Geçersiz değer: beklenen ${u}, alınan ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Geçersiz değer: beklenen ${Q(i.values[0])}` : `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Çok büyük: beklenen ${i.origin ?? "değer"} ${u}${i.maximum.toString()} ${d.unit ?? "öğe"}` : `Çok büyük: beklenen ${i.origin ?? "değer"} ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Çok küçük: beklenen ${i.origin} ${u}${i.minimum.toString()} ${d.unit}` : `Çok küçük: beklenen ${i.origin} ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Geçersiz metin: "${u.prefix}" ile başlamalı` : u.format === "ends_with" ? `Geçersiz metin: "${u.suffix}" ile bitmeli` : u.format === "includes" ? `Geçersiz metin: "${u.includes}" içermeli` : u.format === "regex" ? `Geçersiz metin: ${u.pattern} desenine uymalı` : `Geçersiz ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Geçersiz sayı: ${i.divisor} ile tam bölünebilmeli`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar${i.keys.length > 1 ? "lar" : ""}: ${C(i.keys, ", ")}`;
      case "invalid_key":
        return `${i.origin} içinde geçersiz anahtar`;
      case "invalid_union":
        return "Geçersiz değer";
      case "invalid_element":
        return `${i.origin} içinde geçersiz değer`;
      default:
        return "Geçersiz değer";
    }
  };
};
function JT() {
  return { localeError: BT() };
}
var GT = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "число",
    array: "масив"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Неправильні вхідні дані: очікується instanceof ${i.expected}, отримано ${m}` : `Неправильні вхідні дані: очікується ${u}, отримано ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Неправильні вхідні дані: очікується ${Q(i.values[0])}` : `Неправильна опція: очікується одне з ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Занадто велике: очікується, що ${i.origin ?? "значення"} ${d.verb} ${u}${i.maximum.toString()} ${d.unit ?? "елементів"}` : `Занадто велике: очікується, що ${i.origin ?? "значення"} буде ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Занадто мале: очікується, що ${i.origin} ${d.verb} ${u}${i.minimum.toString()} ${d.unit}` : `Занадто мале: очікується, що ${i.origin} буде ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Неправильний рядок: повинен починатися з "${u.prefix}"` : u.format === "ends_with" ? `Неправильний рядок: повинен закінчуватися на "${u.suffix}"` : u.format === "includes" ? `Неправильний рядок: повинен містити "${u.includes}"` : u.format === "regex" ? `Неправильний рядок: повинен відповідати шаблону ${u.pattern}` : `Неправильний ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Неправильне число: повинно бути кратним ${i.divisor}`;
      case "unrecognized_keys":
        return `Нерозпізнаний ключ${i.keys.length > 1 ? "і" : ""}: ${C(i.keys, ", ")}`;
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
function A$() {
  return { localeError: GT() };
}
function PT() {
  return A$();
}
var YT = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "نمبر",
    array: "آرے",
    null: "نل"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `غلط ان پٹ: instanceof ${i.expected} متوقع تھا، ${m} موصول ہوا` : `غلط ان پٹ: ${u} متوقع تھا، ${m} موصول ہوا`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `غلط ان پٹ: ${Q(i.values[0])} متوقع تھا` : `غلط آپشن: ${C(i.values, "|")} میں سے ایک متوقع تھا`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `بہت بڑا: ${i.origin ?? "ویلیو"} کے ${u}${i.maximum.toString()} ${d.unit ?? "عناصر"} ہونے متوقع تھے` : `بہت بڑا: ${i.origin ?? "ویلیو"} کا ${u}${i.maximum.toString()} ہونا متوقع تھا`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `بہت چھوٹا: ${i.origin} کے ${u}${i.minimum.toString()} ${d.unit} ہونے متوقع تھے` : `بہت چھوٹا: ${i.origin} کا ${u}${i.minimum.toString()} ہونا متوقع تھا`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `غلط سٹرنگ: "${u.prefix}" سے شروع ہونا چاہیے` : u.format === "ends_with" ? `غلط سٹرنگ: "${u.suffix}" پر ختم ہونا چاہیے` : u.format === "includes" ? `غلط سٹرنگ: "${u.includes}" شامل ہونا چاہیے` : u.format === "regex" ? `غلط سٹرنگ: پیٹرن ${u.pattern} سے میچ ہونا چاہیے` : `غلط ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `غلط نمبر: ${i.divisor} کا مضاعف ہونا چاہیے`;
      case "unrecognized_keys":
        return `غیر تسلیم شدہ کی${i.keys.length > 1 ? "ز" : ""}: ${C(i.keys, "، ")}`;
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
function VT() {
  return { localeError: YT() };
}
var QT = () => {
  const n = {
    string: {
      unit: "belgi",
      verb: "bo‘lishi kerak"
    },
    file: {
      unit: "bayt",
      verb: "bo‘lishi kerak"
    },
    array: {
      unit: "element",
      verb: "bo‘lishi kerak"
    },
    set: {
      unit: "element",
      verb: "bo‘lishi kerak"
    },
    map: {
      unit: "yozuv",
      verb: "bo‘lishi kerak"
    }
  };
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
    regex: "kirish",
    email: "elektron pochta manzili",
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
    datetime: "ISO sana va vaqti",
    date: "ISO sana",
    time: "ISO vaqt",
    duration: "ISO davomiylik",
    ipv4: "IPv4 manzil",
    ipv6: "IPv6 manzil",
    mac: "MAC manzil",
    cidrv4: "IPv4 diapazon",
    cidrv6: "IPv6 diapazon",
    base64: "base64 kodlangan satr",
    base64url: "base64url kodlangan satr",
    json_string: "JSON satr",
    e164: "E.164 raqam",
    jwt: "JWT",
    template_literal: "kirish"
  }, c = {
    nan: "NaN",
    number: "raqam",
    array: "massiv"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Noto‘g‘ri kirish: kutilgan instanceof ${i.expected}, qabul qilingan ${m}` : `Noto‘g‘ri kirish: kutilgan ${u}, qabul qilingan ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Noto‘g‘ri kirish: kutilgan ${Q(i.values[0])}` : `Noto‘g‘ri variant: quyidagilardan biri kutilgan ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Juda katta: kutilgan ${i.origin ?? "qiymat"} ${u}${i.maximum.toString()} ${d.unit} ${d.verb}` : `Juda katta: kutilgan ${i.origin ?? "qiymat"} ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Juda kichik: kutilgan ${i.origin} ${u}${i.minimum.toString()} ${d.unit} ${d.verb}` : `Juda kichik: kutilgan ${i.origin} ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Noto‘g‘ri satr: "${u.prefix}" bilan boshlanishi kerak` : u.format === "ends_with" ? `Noto‘g‘ri satr: "${u.suffix}" bilan tugashi kerak` : u.format === "includes" ? `Noto‘g‘ri satr: "${u.includes}" ni o‘z ichiga olishi kerak` : u.format === "regex" ? `Noto‘g‘ri satr: ${u.pattern} shabloniga mos kelishi kerak` : `Noto‘g‘ri ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Noto‘g‘ri raqam: ${i.divisor} ning karralisi bo‘lishi kerak`;
      case "unrecognized_keys":
        return `Noma’lum kalit${i.keys.length > 1 ? "lar" : ""}: ${C(i.keys, ", ")}`;
      case "invalid_key":
        return `${i.origin} dagi kalit noto‘g‘ri`;
      case "invalid_union":
        return "Noto‘g‘ri kirish";
      case "invalid_element":
        return `${i.origin} da noto‘g‘ri qiymat`;
      default:
        return "Noto‘g‘ri kirish";
    }
  };
};
function XT() {
  return { localeError: QT() };
}
var KT = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "số",
    array: "mảng"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Đầu vào không hợp lệ: mong đợi instanceof ${i.expected}, nhận được ${m}` : `Đầu vào không hợp lệ: mong đợi ${u}, nhận được ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Đầu vào không hợp lệ: mong đợi ${Q(i.values[0])}` : `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Quá lớn: mong đợi ${i.origin ?? "giá trị"} ${d.verb} ${u}${i.maximum.toString()} ${d.unit ?? "phần tử"}` : `Quá lớn: mong đợi ${i.origin ?? "giá trị"} ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Quá nhỏ: mong đợi ${i.origin} ${d.verb} ${u}${i.minimum.toString()} ${d.unit}` : `Quá nhỏ: mong đợi ${i.origin} ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Chuỗi không hợp lệ: phải bắt đầu bằng "${u.prefix}"` : u.format === "ends_with" ? `Chuỗi không hợp lệ: phải kết thúc bằng "${u.suffix}"` : u.format === "includes" ? `Chuỗi không hợp lệ: phải bao gồm "${u.includes}"` : u.format === "regex" ? `Chuỗi không hợp lệ: phải khớp với mẫu ${u.pattern}` : `${o[u.format] ?? i.format} không hợp lệ`;
      }
      case "not_multiple_of":
        return `Số không hợp lệ: phải là bội số của ${i.divisor}`;
      case "unrecognized_keys":
        return `Khóa không được nhận dạng: ${C(i.keys, ", ")}`;
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
function FT() {
  return { localeError: KT() };
}
var WT = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = {
    nan: "NaN",
    number: "数字",
    array: "数组",
    null: "空值(null)"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `无效输入：期望 instanceof ${i.expected}，实际接收 ${m}` : `无效输入：期望 ${u}，实际接收 ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `无效输入：期望 ${Q(i.values[0])}` : `无效选项：期望以下之一 ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `数值过大：期望 ${i.origin ?? "值"} ${u}${i.maximum.toString()} ${d.unit ?? "个元素"}` : `数值过大：期望 ${i.origin ?? "值"} ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `数值过小：期望 ${i.origin} ${u}${i.minimum.toString()} ${d.unit}` : `数值过小：期望 ${i.origin} ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `无效字符串：必须以 "${u.prefix}" 开头` : u.format === "ends_with" ? `无效字符串：必须以 "${u.suffix}" 结尾` : u.format === "includes" ? `无效字符串：必须包含 "${u.includes}"` : u.format === "regex" ? `无效字符串：必须满足正则表达式 ${u.pattern}` : `无效${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `无效数字：必须是 ${i.divisor} 的倍数`;
      case "unrecognized_keys":
        return `出现未知的键(key): ${C(i.keys, ", ")}`;
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
function ew() {
  return { localeError: WT() };
}
var tw = () => {
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
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
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
  }, c = { nan: "NaN" };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `無效的輸入值：預期為 instanceof ${i.expected}，但收到 ${m}` : `無效的輸入值：預期為 ${u}，但收到 ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `無效的輸入值：預期為 ${Q(i.values[0])}` : `無效的選項：預期為以下其中之一 ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `數值過大：預期 ${i.origin ?? "值"} 應為 ${u}${i.maximum.toString()} ${d.unit ?? "個元素"}` : `數值過大：預期 ${i.origin ?? "值"} 應為 ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `數值過小：預期 ${i.origin} 應為 ${u}${i.minimum.toString()} ${d.unit}` : `數值過小：預期 ${i.origin} 應為 ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `無效的字串：必須以 "${u.prefix}" 開頭` : u.format === "ends_with" ? `無效的字串：必須以 "${u.suffix}" 結尾` : u.format === "includes" ? `無效的字串：必須包含 "${u.includes}"` : u.format === "regex" ? `無效的字串：必須符合格式 ${u.pattern}` : `無效的 ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `無效的數字：必須為 ${i.divisor} 的倍數`;
      case "unrecognized_keys":
        return `無法識別的鍵值${i.keys.length > 1 ? "們" : ""}：${C(i.keys, "、")}`;
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
function nw() {
  return { localeError: tw() };
}
var iw = () => {
  const n = {
    string: {
      unit: "àmi",
      verb: "ní"
    },
    file: {
      unit: "bytes",
      verb: "ní"
    },
    array: {
      unit: "nkan",
      verb: "ní"
    },
    set: {
      unit: "nkan",
      verb: "ní"
    }
  };
  function a(i) {
    return n[i] ?? null;
  }
  const o = {
    regex: "ẹ̀rọ ìbáwọlé",
    email: "àdírẹ́sì ìmẹ́lì",
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
    datetime: "àkókò ISO",
    date: "ọjọ́ ISO",
    time: "àkókò ISO",
    duration: "àkókò tó pé ISO",
    ipv4: "àdírẹ́sì IPv4",
    ipv6: "àdírẹ́sì IPv6",
    cidrv4: "àgbègbè IPv4",
    cidrv6: "àgbègbè IPv6",
    base64: "ọ̀rọ̀ tí a kọ́ ní base64",
    base64url: "ọ̀rọ̀ base64url",
    json_string: "ọ̀rọ̀ JSON",
    e164: "nọ́mbà E.164",
    jwt: "JWT",
    template_literal: "ẹ̀rọ ìbáwọlé"
  }, c = {
    nan: "NaN",
    number: "nọ́mbà",
    array: "akopọ"
  };
  return (i) => {
    switch (i.code) {
      case "invalid_type": {
        const u = c[i.expected] ?? i.expected, d = K(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Ìbáwọlé aṣìṣe: a ní láti fi instanceof ${i.expected}, àmọ̀ a rí ${m}` : `Ìbáwọlé aṣìṣe: a ní láti fi ${u}, àmọ̀ a rí ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Ìbáwọlé aṣìṣe: a ní láti fi ${Q(i.values[0])}` : `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${C(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        return d ? `Tó pọ̀ jù: a ní láti jẹ́ pé ${i.origin ?? "iye"} ${d.verb} ${u}${i.maximum} ${d.unit}` : `Tó pọ̀ jù: a ní láti jẹ́ ${u}${i.maximum}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        return d ? `Kéré ju: a ní láti jẹ́ pé ${i.origin} ${d.verb} ${u}${i.minimum} ${d.unit}` : `Kéré ju: a ní láti jẹ́ ${u}${i.minimum}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${u.prefix}"` : u.format === "ends_with" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${u.suffix}"` : u.format === "includes" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${u.includes}"` : u.format === "regex" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${u.pattern}` : `Aṣìṣe: ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${i.divisor}`;
      case "unrecognized_keys":
        return `Bọtìnì àìmọ̀: ${C(i.keys, ", ")}`;
      case "invalid_key":
        return `Bọtìnì aṣìṣe nínú ${i.origin}`;
      case "invalid_union":
        return "Ìbáwọlé aṣìṣe";
      case "invalid_element":
        return `Iye aṣìṣe nínú ${i.origin}`;
      default:
        return "Ìbáwọlé aṣìṣe";
    }
  };
};
function aw() {
  return { localeError: iw() };
}
var rm = /* @__PURE__ */ gn({
  ar: () => p6,
  az: () => h6,
  be: () => _6,
  bg: () => S6,
  ca: () => z6,
  cs: () => T6,
  da: () => x6,
  de: () => U6,
  el: () => D6,
  en: () => N$,
  eo: () => j6,
  es: () => I6,
  fa: () => C6,
  fi: () => q6,
  fr: () => L6,
  frCA: () => J6,
  he: () => P6,
  hr: () => V6,
  hu: () => X6,
  hy: () => F6,
  id: () => eT,
  is: () => nT,
  it: () => aT,
  ja: () => oT,
  ka: () => uT,
  kh: () => sT,
  km: () => j$,
  ko: () => fT,
  lt: () => vT,
  mk: () => gT,
  ms: () => yT,
  nl: () => bT,
  no: () => $T,
  ota: () => kT,
  pl: () => ET,
  ps: () => wT,
  pt: () => OT,
  ro: () => ZT,
  ru: () => jT,
  sl: () => IT,
  sv: () => CT,
  ta: () => qT,
  th: () => LT,
  tr: () => JT,
  ua: () => PT,
  uk: () => A$,
  ur: () => VT,
  uz: () => XT,
  vi: () => FT,
  yo: () => aw,
  zhCN: () => ew,
  zhTW: () => nw
}), M_, om = /* @__PURE__ */ Symbol("ZodOutput"), lm = /* @__PURE__ */ Symbol("ZodInput"), I$ = class {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(n, ...a) {
    const o = a[0];
    return this._map.set(n, o), o && typeof o == "object" && "id" in o && this._idmap.set(o.id, n), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(n) {
    const a = this._map.get(n);
    return a && typeof a == "object" && "id" in a && this._idmap.delete(a.id), this._map.delete(n), this;
  }
  get(n) {
    const a = n._zod.parent;
    if (a) {
      const o = { ...this.get(a) ?? {} };
      delete o.id;
      const c = {
        ...o,
        ...this._map.get(n)
      };
      return Object.keys(c).length ? c : void 0;
    }
    return this._map.get(n);
  }
  has(n) {
    return this._map.has(n);
  }
};
function ec() {
  return new I$();
}
(M_ = globalThis).__zod_globalRegistry ?? (M_.__zod_globalRegistry = ec());
var Jt = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function R$(n, a) {
  return new n({
    type: "string",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function C$(n, a) {
  return new n({
    type: "string",
    coerce: !0,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function um(n, a) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Hu(n, a) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function cm(n, a) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function sm(n, a) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function dm(n, a) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function fm(n, a) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function tc(n, a) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function mm(n, a) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function vm(n, a) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function pm(n, a) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function gm(n, a) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function hm(n, a) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function ym(n, a) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function _m(n, a) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function bm(n, a) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Sm(n, a) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function M$(n, a) {
  return new n({
    type: "string",
    format: "mac",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function $m(n, a) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function zm(n, a) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function km(n, a) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Tm(n, a) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function wm(n, a) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function xm(n, a) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
var Em = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
// @__NO_SIDE_EFFECTS__
function q$(n, a) {
  return new n({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function H$(n, a) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function L$(n, a) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function B$(n, a) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function J$(n, a) {
  return new n({
    type: "number",
    checks: [],
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function G$(n, a) {
  return new n({
    type: "number",
    coerce: !0,
    checks: [],
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function P$(n, a) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Y$(n, a) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function V$(n, a) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Q$(n, a) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function X$(n, a) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function K$(n, a) {
  return new n({
    type: "boolean",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function F$(n, a) {
  return new n({
    type: "boolean",
    coerce: !0,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function W$(n, a) {
  return new n({
    type: "bigint",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function e0(n, a) {
  return new n({
    type: "bigint",
    coerce: !0,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function t0(n, a) {
  return new n({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function n0(n, a) {
  return new n({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function i0(n, a) {
  return new n({
    type: "symbol",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function a0(n, a) {
  return new n({
    type: "undefined",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function r0(n, a) {
  return new n({
    type: "null",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function o0(n) {
  return new n({ type: "any" });
}
// @__NO_SIDE_EFFECTS__
function l0(n) {
  return new n({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function u0(n, a) {
  return new n({
    type: "never",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function c0(n, a) {
  return new n({
    type: "void",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function s0(n, a) {
  return new n({
    type: "date",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function d0(n, a) {
  return new n({
    type: "date",
    coerce: !0,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function f0(n, a) {
  return new n({
    type: "nan",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Gn(n, a) {
  return new Qf({
    check: "less_than",
    ...I(a),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Gt(n, a) {
  return new Qf({
    check: "less_than",
    ...I(a),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Pn(n, a) {
  return new Xf({
    check: "greater_than",
    ...I(a),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function zt(n, a) {
  return new Xf({
    check: "greater_than",
    ...I(a),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function nc(n) {
  return /* @__PURE__ */ Pn(0, n);
}
// @__NO_SIDE_EFFECTS__
function ic(n) {
  return /* @__PURE__ */ Gn(0, n);
}
// @__NO_SIDE_EFFECTS__
function ac(n) {
  return /* @__PURE__ */ Gt(0, n);
}
// @__NO_SIDE_EFFECTS__
function rc(n) {
  return /* @__PURE__ */ zt(0, n);
}
// @__NO_SIDE_EFFECTS__
function Yi(n, a) {
  return new eS({
    check: "multiple_of",
    ...I(a),
    value: n
  });
}
// @__NO_SIDE_EFFECTS__
function Fi(n, a) {
  return new iS({
    check: "max_size",
    ...I(a),
    maximum: n
  });
}
// @__NO_SIDE_EFFECTS__
function Yn(n, a) {
  return new aS({
    check: "min_size",
    ...I(a),
    minimum: n
  });
}
// @__NO_SIDE_EFFECTS__
function Ka(n, a) {
  return new rS({
    check: "size_equals",
    ...I(a),
    size: n
  });
}
// @__NO_SIDE_EFFECTS__
function Fa(n, a) {
  return new oS({
    check: "max_length",
    ...I(a),
    maximum: n
  });
}
// @__NO_SIDE_EFFECTS__
function hi(n, a) {
  return new lS({
    check: "min_length",
    ...I(a),
    minimum: n
  });
}
// @__NO_SIDE_EFFECTS__
function Wa(n, a) {
  return new uS({
    check: "length_equals",
    ...I(a),
    length: n
  });
}
// @__NO_SIDE_EFFECTS__
function $o(n, a) {
  return new cS({
    check: "string_format",
    format: "regex",
    ...I(a),
    pattern: n
  });
}
// @__NO_SIDE_EFFECTS__
function zo(n) {
  return new sS({
    check: "string_format",
    format: "lowercase",
    ...I(n)
  });
}
// @__NO_SIDE_EFFECTS__
function ko(n) {
  return new dS({
    check: "string_format",
    format: "uppercase",
    ...I(n)
  });
}
// @__NO_SIDE_EFFECTS__
function To(n, a) {
  return new fS({
    check: "string_format",
    format: "includes",
    ...I(a),
    includes: n
  });
}
// @__NO_SIDE_EFFECTS__
function wo(n, a) {
  return new mS({
    check: "string_format",
    format: "starts_with",
    ...I(a),
    prefix: n
  });
}
// @__NO_SIDE_EFFECTS__
function xo(n, a) {
  return new vS({
    check: "string_format",
    format: "ends_with",
    ...I(a),
    suffix: n
  });
}
// @__NO_SIDE_EFFECTS__
function oc(n, a, o) {
  return new pS({
    check: "property",
    property: n,
    schema: a,
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function Eo(n, a) {
  return new gS({
    check: "mime_type",
    mime: n,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function kn(n) {
  return new hS({
    check: "overwrite",
    tx: n
  });
}
// @__NO_SIDE_EFFECTS__
function Uo(n) {
  return /* @__PURE__ */ kn((a) => a.normalize(n));
}
// @__NO_SIDE_EFFECTS__
function Oo() {
  return /* @__PURE__ */ kn((n) => n.trim());
}
// @__NO_SIDE_EFFECTS__
function Do() {
  return /* @__PURE__ */ kn((n) => n.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Zo() {
  return /* @__PURE__ */ kn((n) => n.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function No() {
  return /* @__PURE__ */ kn((n) => eb(n));
}
// @__NO_SIDE_EFFECTS__
function m0(n, a, o) {
  return new n({
    type: "array",
    element: a,
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function rw(n, a, o) {
  return new n({
    type: "union",
    options: a,
    ...I(o)
  });
}
function ow(n, a, o) {
  return new n({
    type: "union",
    options: a,
    inclusive: !1,
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function lw(n, a, o, c) {
  return new n({
    type: "union",
    options: o,
    discriminator: a,
    ...I(c)
  });
}
// @__NO_SIDE_EFFECTS__
function uw(n, a, o) {
  return new n({
    type: "intersection",
    left: a,
    right: o
  });
}
// @__NO_SIDE_EFFECTS__
function cw(n, a, o, c) {
  const i = o instanceof ee, u = i ? c : o;
  return new n({
    type: "tuple",
    items: a,
    rest: i ? o : null,
    ...I(u)
  });
}
// @__NO_SIDE_EFFECTS__
function sw(n, a, o, c) {
  return new n({
    type: "record",
    keyType: a,
    valueType: o,
    ...I(c)
  });
}
// @__NO_SIDE_EFFECTS__
function dw(n, a, o, c) {
  return new n({
    type: "map",
    keyType: a,
    valueType: o,
    ...I(c)
  });
}
// @__NO_SIDE_EFFECTS__
function fw(n, a, o) {
  return new n({
    type: "set",
    valueType: a,
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function mw(n, a, o) {
  return new n({
    type: "enum",
    entries: Array.isArray(a) ? Object.fromEntries(a.map((c) => [c, c])) : a,
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function vw(n, a, o) {
  return new n({
    type: "enum",
    entries: a,
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function pw(n, a, o) {
  return new n({
    type: "literal",
    values: Array.isArray(a) ? a : [a],
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function v0(n, a) {
  return new n({
    type: "file",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function gw(n, a) {
  return new n({
    type: "transform",
    transform: a
  });
}
// @__NO_SIDE_EFFECTS__
function hw(n, a) {
  return new n({
    type: "optional",
    innerType: a
  });
}
// @__NO_SIDE_EFFECTS__
function yw(n, a) {
  return new n({
    type: "nullable",
    innerType: a
  });
}
// @__NO_SIDE_EFFECTS__
function _w(n, a, o) {
  return new n({
    type: "default",
    innerType: a,
    get defaultValue() {
      return typeof o == "function" ? o() : Yu(o);
    }
  });
}
// @__NO_SIDE_EFFECTS__
function bw(n, a, o) {
  return new n({
    type: "nonoptional",
    innerType: a,
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function Sw(n, a) {
  return new n({
    type: "success",
    innerType: a
  });
}
// @__NO_SIDE_EFFECTS__
function $w(n, a, o) {
  return new n({
    type: "catch",
    innerType: a,
    catchValue: typeof o == "function" ? o : () => o
  });
}
// @__NO_SIDE_EFFECTS__
function zw(n, a, o) {
  return new n({
    type: "pipe",
    in: a,
    out: o
  });
}
// @__NO_SIDE_EFFECTS__
function kw(n, a) {
  return new n({
    type: "readonly",
    innerType: a
  });
}
// @__NO_SIDE_EFFECTS__
function Tw(n, a, o) {
  return new n({
    type: "template_literal",
    parts: a,
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function ww(n, a) {
  return new n({
    type: "lazy",
    getter: a
  });
}
// @__NO_SIDE_EFFECTS__
function xw(n, a) {
  return new n({
    type: "promise",
    innerType: a
  });
}
// @__NO_SIDE_EFFECTS__
function p0(n, a, o) {
  const c = I(o);
  return c.abort ?? (c.abort = !0), new n({
    type: "custom",
    check: "custom",
    fn: a,
    ...c
  });
}
// @__NO_SIDE_EFFECTS__
function g0(n, a, o) {
  return new n({
    type: "custom",
    check: "custom",
    fn: a,
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function h0(n, a) {
  const o = /* @__PURE__ */ y0((c) => (c.addIssue = (i) => {
    if (typeof i == "string") c.issues.push(Ha(i, c.value, o._zod.def));
    else {
      const u = i;
      u.fatal && (u.continue = !1), u.code ?? (u.code = "custom"), u.input ?? (u.input = c.value), u.inst ?? (u.inst = o), u.continue ?? (u.continue = !o._zod.def.abort), c.issues.push(Ha(u));
    }
  }, n(c.value, c)), a);
  return o;
}
// @__NO_SIDE_EFFECTS__
function y0(n, a) {
  const o = new Ge({
    check: "custom",
    ...I(a)
  });
  return o._zod.check = n, o;
}
// @__NO_SIDE_EFFECTS__
function _0(n) {
  const a = new Ge({ check: "describe" });
  return a._zod.onattach = [(o) => {
    const c = Jt.get(o) ?? {};
    Jt.add(o, {
      ...c,
      description: n
    });
  }], a._zod.check = () => {
  }, a;
}
// @__NO_SIDE_EFFECTS__
function b0(n) {
  const a = new Ge({ check: "meta" });
  return a._zod.onattach = [(o) => {
    const c = Jt.get(o) ?? {};
    Jt.add(o, {
      ...c,
      ...n
    });
  }], a._zod.check = () => {
  }, a;
}
// @__NO_SIDE_EFFECTS__
function S0(n, a) {
  const o = I(a);
  let c = o.truthy ?? [
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
  o.case !== "sensitive" && (c = c.map((h) => typeof h == "string" ? h.toLowerCase() : h), i = i.map((h) => typeof h == "string" ? h.toLowerCase() : h));
  const u = new Set(c), d = new Set(i), m = n.Codec ?? am, y = n.Boolean ?? Wf, g = new m({
    type: "pipe",
    in: new (n.String ?? So)({
      type: "string",
      error: o.error
    }),
    out: new y({
      type: "boolean",
      error: o.error
    }),
    transform: ((h, U) => {
      let w = h;
      return o.case !== "sensitive" && (w = w.toLowerCase()), u.has(w) ? !0 : d.has(w) ? !1 : (U.issues.push({
        code: "invalid_value",
        expected: "stringbool",
        values: [...u, ...d],
        input: U.value,
        inst: g,
        continue: !1
      }), {});
    }),
    reverseTransform: ((h, U) => h === !0 ? c[0] || "true" : i[0] || "false"),
    error: o.error
  });
  return g;
}
// @__NO_SIDE_EFFECTS__
function jo(n, a, o, c = {}) {
  const i = I(c), u = {
    ...I(c),
    check: "string_format",
    type: "string",
    format: a,
    fn: typeof o == "function" ? o : (d) => o.test(d),
    ...i
  };
  return o instanceof RegExp && (u.pattern = o), new n(u);
}
function Ba(n) {
  let a = n?.target ?? "draft-2020-12";
  return a === "draft-4" && (a = "draft-04"), a === "draft-7" && (a = "draft-07"), {
    processors: n.processors ?? {},
    metadataRegistry: n?.metadata ?? Jt,
    target: a,
    unrepresentable: n?.unrepresentable ?? "throw",
    override: n?.override ?? (() => {
    }),
    io: n?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: n?.cycles ?? "ref",
    reused: n?.reused ?? "inline",
    external: n?.external ?? void 0
  };
}
function Ne(n, a, o = {
  path: [],
  schemaPath: []
}) {
  var c;
  const i = n._zod.def, u = a.seen.get(n);
  if (u)
    return u.count++, o.schemaPath.includes(n) && (u.cycle = o.path), u.schema;
  const d = {
    schema: {},
    count: 1,
    cycle: void 0,
    path: o.path
  };
  a.seen.set(n, d);
  const m = n._zod.toJSONSchema?.();
  if (m) d.schema = m;
  else {
    const g = {
      ...o,
      schemaPath: [...o.schemaPath, n],
      path: o.path
    };
    if (n._zod.processJSONSchema) n._zod.processJSONSchema(a, d.schema, g);
    else {
      const U = d.schema, w = a.processors[i.type];
      if (!w) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
      w(n, a, U, g);
    }
    const h = n._zod.parent;
    h && (d.ref || (d.ref = h), Ne(h, a, g), a.seen.get(h).isParent = !0);
  }
  const y = a.metadataRegistry.get(n);
  return y && Object.assign(d.schema, y), a.io === "input" && $t(n) && (delete d.schema.examples, delete d.schema.default), a.io === "input" && "_prefault" in d.schema && ((c = d.schema).default ?? (c.default = d.schema._prefault)), delete d.schema._prefault, a.seen.get(n).schema;
}
function Ja(n, a) {
  const o = n.seen.get(a);
  if (!o) throw new Error("Unprocessed schema. This is a bug in Zod.");
  const c = /* @__PURE__ */ new Map();
  for (const d of n.seen.entries()) {
    const m = n.metadataRegistry.get(d[0])?.id;
    if (m) {
      const y = c.get(m);
      if (y && y !== d[0]) throw new Error(`Duplicate schema id "${m}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      c.set(m, d[0]);
    }
  }
  const i = (d) => {
    const m = n.target === "draft-2020-12" ? "$defs" : "definitions";
    if (n.external) {
      const h = n.external.registry.get(d[0])?.id, U = n.external.uri ?? ((q) => q);
      if (h) return { ref: U(h) };
      const w = d[1].defId ?? d[1].schema.id ?? `schema${n.counter++}`;
      return d[1].defId = w, {
        defId: w,
        ref: `${U("__shared")}#/${m}/${w}`
      };
    }
    if (d[1] === o) return { ref: "#" };
    const y = `#/${m}/`, g = d[1].schema.id ?? `__schema${n.counter++}`;
    return {
      defId: g,
      ref: y + g
    };
  }, u = (d) => {
    if (d[1].schema.$ref) return;
    const m = d[1], { ref: y, defId: g } = i(d);
    m.def = { ...m.schema }, g && (m.defId = g);
    const h = m.schema;
    for (const U in h) delete h[U];
    h.$ref = y;
  };
  if (n.cycles === "throw") for (const d of n.seen.entries()) {
    const m = d[1];
    if (m.cycle) throw new Error(`Cycle detected: #/${m.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
  }
  for (const d of n.seen.entries()) {
    const m = d[1];
    if (a === d[0]) {
      u(d);
      continue;
    }
    if (n.external) {
      const y = n.external.registry.get(d[0])?.id;
      if (a !== d[0] && y) {
        u(d);
        continue;
      }
    }
    if (n.metadataRegistry.get(d[0])?.id) {
      u(d);
      continue;
    }
    if (m.cycle) {
      u(d);
      continue;
    }
    if (m.count > 1 && n.reused === "ref") {
      u(d);
      continue;
    }
  }
}
function Ga(n, a) {
  const o = n.seen.get(a);
  if (!o) throw new Error("Unprocessed schema. This is a bug in Zod.");
  const c = (m) => {
    const y = n.seen.get(m);
    if (y.ref === null) return;
    const g = y.def ?? y.schema, h = { ...g }, U = y.ref;
    if (y.ref = null, U) {
      c(U);
      const q = n.seen.get(U), W = q.schema;
      if (W.$ref && (n.target === "draft-07" || n.target === "draft-04" || n.target === "openapi-3.0") ? (g.allOf = g.allOf ?? [], g.allOf.push(W)) : Object.assign(g, W), Object.assign(g, h), m._zod.parent === U) for (const pe in g)
        pe === "$ref" || pe === "allOf" || pe in h || delete g[pe];
      if (W.$ref && q.def) for (const pe in g)
        pe === "$ref" || pe === "allOf" || pe in q.def && JSON.stringify(g[pe]) === JSON.stringify(q.def[pe]) && delete g[pe];
    }
    const w = m._zod.parent;
    if (w && w !== U) {
      c(w);
      const q = n.seen.get(w);
      if (q?.schema.$ref && (g.$ref = q.schema.$ref, q.def))
        for (const W in g)
          W === "$ref" || W === "allOf" || W in q.def && JSON.stringify(g[W]) === JSON.stringify(q.def[W]) && delete g[W];
    }
    n.override({
      zodSchema: m,
      jsonSchema: g,
      path: y.path ?? []
    });
  };
  for (const m of [...n.seen.entries()].reverse()) c(m[0]);
  const i = {};
  if (n.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : n.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : n.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : n.target, n.external?.uri) {
    const m = n.external.registry.get(a)?.id;
    if (!m) throw new Error("Schema is missing an `id` property");
    i.$id = n.external.uri(m);
  }
  Object.assign(i, o.def ?? o.schema);
  const u = n.metadataRegistry.get(a)?.id;
  u !== void 0 && i.id === u && delete i.id;
  const d = n.external?.defs ?? {};
  for (const m of n.seen.entries()) {
    const y = m[1];
    y.def && y.defId && (y.def.id === y.defId && delete y.def.id, d[y.defId] = y.def);
  }
  n.external || Object.keys(d).length > 0 && (n.target === "draft-2020-12" ? i.$defs = d : i.definitions = d);
  try {
    const m = JSON.parse(JSON.stringify(i));
    return Object.defineProperty(m, "~standard", {
      value: {
        ...a["~standard"],
        jsonSchema: {
          input: uo(a, "input", n.processors),
          output: uo(a, "output", n.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), m;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function $t(n, a) {
  const o = a ?? { seen: /* @__PURE__ */ new Set() };
  if (o.seen.has(n)) return !1;
  o.seen.add(n);
  const c = n._zod.def;
  if (c.type === "transform") return !0;
  if (c.type === "array") return $t(c.element, o);
  if (c.type === "set") return $t(c.valueType, o);
  if (c.type === "lazy") return $t(c.getter(), o);
  if (c.type === "promise" || c.type === "optional" || c.type === "nonoptional" || c.type === "nullable" || c.type === "readonly" || c.type === "default" || c.type === "prefault") return $t(c.innerType, o);
  if (c.type === "intersection") return $t(c.left, o) || $t(c.right, o);
  if (c.type === "record" || c.type === "map") return $t(c.keyType, o) || $t(c.valueType, o);
  if (c.type === "pipe")
    return n._zod.traits.has("$ZodCodec") ? !0 : $t(c.in, o) || $t(c.out, o);
  if (c.type === "object") {
    for (const i in c.shape) if ($t(c.shape[i], o)) return !0;
    return !1;
  }
  if (c.type === "union") {
    for (const i of c.options) if ($t(i, o)) return !0;
    return !1;
  }
  if (c.type === "tuple") {
    for (const i of c.items) if ($t(i, o)) return !0;
    return !!(c.rest && $t(c.rest, o));
  }
  return !1;
}
var $0 = (n, a = {}) => (o) => {
  const c = Ba({
    ...o,
    processors: a
  });
  return Ne(n, c), Ja(c, n), Ga(c, n);
}, uo = (n, a, o = {}) => (c) => {
  const { libraryOptions: i, target: u } = c ?? {}, d = Ba({
    ...i ?? {},
    target: u,
    io: a,
    processors: o
  });
  return Ne(n, d), Ja(d, n), Ga(d, n);
}, Ew = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
}, z0 = (n, a, o, c) => {
  const i = o;
  i.type = "string";
  const { minimum: u, maximum: d, format: m, patterns: y, contentEncoding: g } = n._zod.bag;
  if (typeof u == "number" && (i.minLength = u), typeof d == "number" && (i.maxLength = d), m && (i.format = Ew[m] ?? m, i.format === "" && delete i.format, m === "time" && delete i.format), g && (i.contentEncoding = g), y && y.size > 0) {
    const h = [...y];
    h.length === 1 ? i.pattern = h[0].source : h.length > 1 && (i.allOf = [...h.map((U) => ({
      ...a.target === "draft-07" || a.target === "draft-04" || a.target === "openapi-3.0" ? { type: "string" } : {},
      pattern: U.source
    }))]);
  }
}, k0 = (n, a, o, c) => {
  const i = o, { minimum: u, maximum: d, format: m, multipleOf: y, exclusiveMaximum: g, exclusiveMinimum: h } = n._zod.bag;
  typeof m == "string" && m.includes("int") ? i.type = "integer" : i.type = "number";
  const U = typeof h == "number" && h >= (u ?? Number.NEGATIVE_INFINITY), w = typeof g == "number" && g <= (d ?? Number.POSITIVE_INFINITY), q = a.target === "draft-04" || a.target === "openapi-3.0";
  U ? q ? (i.minimum = h, i.exclusiveMinimum = !0) : i.exclusiveMinimum = h : typeof u == "number" && (i.minimum = u), w ? q ? (i.maximum = g, i.exclusiveMaximum = !0) : i.exclusiveMaximum = g : typeof d == "number" && (i.maximum = d), typeof y == "number" && (i.multipleOf = y);
}, T0 = (n, a, o, c) => {
  o.type = "boolean";
}, w0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("BigInt cannot be represented in JSON Schema");
}, x0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("Symbols cannot be represented in JSON Schema");
}, E0 = (n, a, o, c) => {
  a.target === "openapi-3.0" ? (o.type = "string", o.nullable = !0, o.enum = [null]) : o.type = "null";
}, U0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("Undefined cannot be represented in JSON Schema");
}, O0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("Void cannot be represented in JSON Schema");
}, D0 = (n, a, o, c) => {
  o.not = {};
}, Z0 = (n, a, o, c) => {
}, N0 = (n, a, o, c) => {
}, j0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("Date cannot be represented in JSON Schema");
}, A0 = (n, a, o, c) => {
  const i = n._zod.def, u = Zf(i.entries);
  u.every((d) => typeof d == "number") && (o.type = "number"), u.every((d) => typeof d == "string") && (o.type = "string"), o.enum = u;
}, I0 = (n, a, o, c) => {
  const i = n._zod.def, u = [];
  for (const d of i.values) if (d === void 0) {
    if (a.unrepresentable === "throw") throw new Error("Literal `undefined` cannot be represented in JSON Schema");
  } else if (typeof d == "bigint") {
    if (a.unrepresentable === "throw") throw new Error("BigInt literals cannot be represented in JSON Schema");
    u.push(Number(d));
  } else u.push(d);
  if (u.length !== 0)
    if (u.length === 1) {
      const d = u[0];
      o.type = d === null ? "null" : typeof d, a.target === "draft-04" || a.target === "openapi-3.0" ? o.enum = [d] : o.const = d;
    } else
      u.every((d) => typeof d == "number") && (o.type = "number"), u.every((d) => typeof d == "string") && (o.type = "string"), u.every((d) => typeof d == "boolean") && (o.type = "boolean"), u.every((d) => d === null) && (o.type = "null"), o.enum = u;
}, R0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("NaN cannot be represented in JSON Schema");
}, C0 = (n, a, o, c) => {
  const i = o, u = n._zod.pattern;
  if (!u) throw new Error("Pattern not found in template literal");
  i.type = "string", i.pattern = u.source;
}, M0 = (n, a, o, c) => {
  const i = o, u = {
    type: "string",
    format: "binary",
    contentEncoding: "binary"
  }, { minimum: d, maximum: m, mime: y } = n._zod.bag;
  d !== void 0 && (u.minLength = d), m !== void 0 && (u.maxLength = m), y ? y.length === 1 ? (u.contentMediaType = y[0], Object.assign(i, u)) : (Object.assign(i, u), i.anyOf = y.map((g) => ({ contentMediaType: g }))) : Object.assign(i, u);
}, q0 = (n, a, o, c) => {
  o.type = "boolean";
}, H0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
}, L0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("Function types cannot be represented in JSON Schema");
}, B0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
}, J0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("Map cannot be represented in JSON Schema");
}, G0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("Set cannot be represented in JSON Schema");
}, P0 = (n, a, o, c) => {
  const i = o, u = n._zod.def, { minimum: d, maximum: m } = n._zod.bag;
  typeof d == "number" && (i.minItems = d), typeof m == "number" && (i.maxItems = m), i.type = "array", i.items = Ne(u.element, a, {
    ...c,
    path: [...c.path, "items"]
  });
}, Y0 = (n, a, o, c) => {
  const i = o, u = n._zod.def;
  i.type = "object", i.properties = {};
  const d = u.shape;
  for (const g in d) i.properties[g] = Ne(d[g], a, {
    ...c,
    path: [
      ...c.path,
      "properties",
      g
    ]
  });
  const m = new Set(Object.keys(d)), y = new Set([...m].filter((g) => {
    const h = u.shape[g]._zod;
    return a.io === "input" ? h.optin === void 0 : h.optout === void 0;
  }));
  y.size > 0 && (i.required = Array.from(y)), u.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : u.catchall ? u.catchall && (i.additionalProperties = Ne(u.catchall, a, {
    ...c,
    path: [...c.path, "additionalProperties"]
  })) : a.io === "output" && (i.additionalProperties = !1);
}, Um = (n, a, o, c) => {
  const i = n._zod.def, u = i.inclusive === !1, d = i.options.map((m, y) => Ne(m, a, {
    ...c,
    path: [
      ...c.path,
      u ? "oneOf" : "anyOf",
      y
    ]
  }));
  u ? o.oneOf = d : o.anyOf = d;
}, V0 = (n, a, o, c) => {
  const i = n._zod.def, u = Ne(i.left, a, {
    ...c,
    path: [
      ...c.path,
      "allOf",
      0
    ]
  }), d = Ne(i.right, a, {
    ...c,
    path: [
      ...c.path,
      "allOf",
      1
    ]
  }), m = (y) => "allOf" in y && Object.keys(y).length === 1;
  o.allOf = [...m(u) ? u.allOf : [u], ...m(d) ? d.allOf : [d]];
}, Q0 = (n, a, o, c) => {
  const i = o, u = n._zod.def;
  i.type = "array";
  const d = a.target === "draft-2020-12" ? "prefixItems" : "items", m = a.target === "draft-2020-12" || a.target === "openapi-3.0" ? "items" : "additionalItems", y = u.items.map((w, q) => Ne(w, a, {
    ...c,
    path: [
      ...c.path,
      d,
      q
    ]
  })), g = u.rest ? Ne(u.rest, a, {
    ...c,
    path: [
      ...c.path,
      m,
      ...a.target === "openapi-3.0" ? [u.items.length] : []
    ]
  }) : null;
  a.target === "draft-2020-12" ? (i.prefixItems = y, g && (i.items = g)) : a.target === "openapi-3.0" ? (i.items = { anyOf: y }, g && i.items.anyOf.push(g), i.minItems = y.length, g || (i.maxItems = y.length)) : (i.items = y, g && (i.additionalItems = g));
  const { minimum: h, maximum: U } = n._zod.bag;
  typeof h == "number" && (i.minItems = h), typeof U == "number" && (i.maxItems = U);
}, X0 = (n, a, o, c) => {
  const i = o, u = n._zod.def;
  i.type = "object";
  const d = u.keyType, m = d._zod.bag?.patterns;
  if (u.mode === "loose" && m && m.size > 0) {
    const g = Ne(u.valueType, a, {
      ...c,
      path: [
        ...c.path,
        "patternProperties",
        "*"
      ]
    });
    i.patternProperties = {};
    for (const h of m) i.patternProperties[h.source] = g;
  } else
    (a.target === "draft-07" || a.target === "draft-2020-12") && (i.propertyNames = Ne(u.keyType, a, {
      ...c,
      path: [...c.path, "propertyNames"]
    })), i.additionalProperties = Ne(u.valueType, a, {
      ...c,
      path: [...c.path, "additionalProperties"]
    });
  const y = d._zod.values;
  if (y) {
    const g = [...y].filter((h) => typeof h == "string" || typeof h == "number");
    g.length > 0 && (i.required = g);
  }
}, K0 = (n, a, o, c) => {
  const i = n._zod.def, u = Ne(i.innerType, a, c), d = a.seen.get(n);
  a.target === "openapi-3.0" ? (d.ref = i.innerType, o.nullable = !0) : o.anyOf = [u, { type: "null" }];
}, F0 = (n, a, o, c) => {
  const i = n._zod.def;
  Ne(i.innerType, a, c);
  const u = a.seen.get(n);
  u.ref = i.innerType;
}, W0 = (n, a, o, c) => {
  const i = n._zod.def;
  Ne(i.innerType, a, c);
  const u = a.seen.get(n);
  u.ref = i.innerType, o.default = JSON.parse(JSON.stringify(i.defaultValue));
}, ez = (n, a, o, c) => {
  const i = n._zod.def;
  Ne(i.innerType, a, c);
  const u = a.seen.get(n);
  u.ref = i.innerType, a.io === "input" && (o._prefault = JSON.parse(JSON.stringify(i.defaultValue)));
}, tz = (n, a, o, c) => {
  const i = n._zod.def;
  Ne(i.innerType, a, c);
  const u = a.seen.get(n);
  u.ref = i.innerType;
  let d;
  try {
    d = i.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  o.default = d;
}, nz = (n, a, o, c) => {
  const i = n._zod.def, u = i.in._zod.traits.has("$ZodTransform"), d = a.io === "input" ? u ? i.out : i.in : i.out;
  Ne(d, a, c);
  const m = a.seen.get(n);
  m.ref = d;
}, iz = (n, a, o, c) => {
  const i = n._zod.def;
  Ne(i.innerType, a, c);
  const u = a.seen.get(n);
  u.ref = i.innerType, o.readOnly = !0;
}, az = (n, a, o, c) => {
  const i = n._zod.def;
  Ne(i.innerType, a, c);
  const u = a.seen.get(n);
  u.ref = i.innerType;
}, Om = (n, a, o, c) => {
  const i = n._zod.def;
  Ne(i.innerType, a, c);
  const u = a.seen.get(n);
  u.ref = i.innerType;
}, rz = (n, a, o, c) => {
  const i = n._zod.innerType;
  Ne(i, a, c);
  const u = a.seen.get(n);
  u.ref = i;
}, xf = {
  string: z0,
  number: k0,
  boolean: T0,
  bigint: w0,
  symbol: x0,
  null: E0,
  undefined: U0,
  void: O0,
  never: D0,
  any: Z0,
  unknown: N0,
  date: j0,
  enum: A0,
  literal: I0,
  nan: R0,
  template_literal: C0,
  file: M0,
  success: q0,
  custom: H0,
  function: L0,
  transform: B0,
  map: J0,
  set: G0,
  array: P0,
  object: Y0,
  union: Um,
  intersection: V0,
  tuple: Q0,
  record: X0,
  nullable: K0,
  nonoptional: F0,
  default: W0,
  prefault: ez,
  catch: tz,
  pipe: nz,
  readonly: iz,
  promise: az,
  optional: Om,
  lazy: rz
};
function Dm(n, a) {
  if ("_idmap" in n) {
    const c = n, i = Ba({
      ...a,
      processors: xf
    }), u = {};
    for (const m of c._idmap.entries()) {
      const [y, g] = m;
      Ne(g, i);
    }
    const d = {};
    i.external = {
      registry: c,
      uri: a?.uri,
      defs: u
    };
    for (const m of c._idmap.entries()) {
      const [y, g] = m;
      Ja(i, g), d[y] = Ga(i, g);
    }
    return Object.keys(u).length > 0 && (d.__shared = { [i.target === "draft-2020-12" ? "$defs" : "definitions"]: u }), { schemas: d };
  }
  const o = Ba({
    ...a,
    processors: xf
  });
  return Ne(n, o), Ja(o, n), Ga(o, n);
}
var Uw = class {
  get metadataRegistry() {
    return this.ctx.metadataRegistry;
  }
  get target() {
    return this.ctx.target;
  }
  get unrepresentable() {
    return this.ctx.unrepresentable;
  }
  get override() {
    return this.ctx.override;
  }
  get io() {
    return this.ctx.io;
  }
  get counter() {
    return this.ctx.counter;
  }
  set counter(n) {
    this.ctx.counter = n;
  }
  get seen() {
    return this.ctx.seen;
  }
  constructor(n) {
    let a = n?.target ?? "draft-2020-12";
    a === "draft-4" && (a = "draft-04"), a === "draft-7" && (a = "draft-07"), this.ctx = Ba({
      processors: xf,
      target: a,
      ...n?.metadata && { metadata: n.metadata },
      ...n?.unrepresentable && { unrepresentable: n.unrepresentable },
      ...n?.override && { override: n.override },
      ...n?.io && { io: n.io }
    });
  }
  process(n, a = {
    path: [],
    schemaPath: []
  }) {
    return Ne(n, this.ctx, a);
  }
  emit(n, a) {
    a && (a.cycles && (this.ctx.cycles = a.cycles), a.reused && (this.ctx.reused = a.reused), a.external && (this.ctx.external = a.external)), Ja(this.ctx, n);
    const { "~standard": o, ...c } = Ga(this.ctx, n);
    return c;
  }
}, Ow = /* @__PURE__ */ gn({}), oz = /* @__PURE__ */ gn({
  $ZodAny: () => FS,
  $ZodArray: () => i$,
  $ZodAsyncError: () => Gi,
  $ZodBase64: () => qS,
  $ZodBase64URL: () => LS,
  $ZodBigInt: () => em,
  $ZodBigIntFormat: () => VS,
  $ZodBoolean: () => Wf,
  $ZodCIDRv4: () => CS,
  $ZodCIDRv6: () => MS,
  $ZodCUID: () => wS,
  $ZodCUID2: () => xS,
  $ZodCatch: () => k$,
  $ZodCheck: () => Ge,
  $ZodCheckBigIntFormat: () => nS,
  $ZodCheckEndsWith: () => vS,
  $ZodCheckGreaterThan: () => Xf,
  $ZodCheckIncludes: () => fS,
  $ZodCheckLengthEquals: () => uS,
  $ZodCheckLessThan: () => Qf,
  $ZodCheckLowerCase: () => sS,
  $ZodCheckMaxLength: () => oS,
  $ZodCheckMaxSize: () => iS,
  $ZodCheckMimeType: () => gS,
  $ZodCheckMinLength: () => lS,
  $ZodCheckMinSize: () => aS,
  $ZodCheckMultipleOf: () => eS,
  $ZodCheckNumberFormat: () => tS,
  $ZodCheckOverwrite: () => hS,
  $ZodCheckProperty: () => pS,
  $ZodCheckRegex: () => cS,
  $ZodCheckSizeEquals: () => rS,
  $ZodCheckStartsWith: () => mS,
  $ZodCheckStringFormat: () => bo,
  $ZodCheckUpperCase: () => dS,
  $ZodCodec: () => am,
  $ZodCustom: () => Z$,
  $ZodCustomStringFormat: () => PS,
  $ZodDate: () => n$,
  $ZodDefault: () => b$,
  $ZodDiscriminatedUnion: () => c$,
  $ZodE164: () => BS,
  $ZodEmail: () => $S,
  $ZodEmoji: () => kS,
  $ZodEncodeError: () => Gu,
  $ZodEnum: () => v$,
  $ZodError: () => jf,
  $ZodExactOptional: () => y$,
  $ZodFile: () => g$,
  $ZodFunction: () => U$,
  $ZodGUID: () => bS,
  $ZodIPv4: () => AS,
  $ZodIPv6: () => IS,
  $ZodISODate: () => ZS,
  $ZodISODateTime: () => DS,
  $ZodISODuration: () => jS,
  $ZodISOTime: () => NS,
  $ZodIntersection: () => s$,
  $ZodJWT: () => GS,
  $ZodKSUID: () => OS,
  $ZodLazy: () => D$,
  $ZodLiteral: () => p$,
  $ZodMAC: () => RS,
  $ZodMap: () => f$,
  $ZodNaN: () => T$,
  $ZodNanoID: () => TS,
  $ZodNever: () => e$,
  $ZodNonOptional: () => $$,
  $ZodNull: () => KS,
  $ZodNullable: () => _$,
  $ZodNumber: () => Ff,
  $ZodNumberFormat: () => YS,
  $ZodObject: () => o$,
  $ZodObjectJIT: () => l$,
  $ZodOptional: () => nm,
  $ZodPipe: () => im,
  $ZodPrefault: () => S$,
  $ZodPreprocess: () => w$,
  $ZodPromise: () => O$,
  $ZodReadonly: () => x$,
  $ZodRealError: () => Vt,
  $ZodRecord: () => d$,
  $ZodRegistry: () => I$,
  $ZodSet: () => m$,
  $ZodString: () => So,
  $ZodStringFormat: () => qe,
  $ZodSuccess: () => z$,
  $ZodSymbol: () => QS,
  $ZodTemplateLiteral: () => E$,
  $ZodTransform: () => h$,
  $ZodTuple: () => tm,
  $ZodType: () => ee,
  $ZodULID: () => ES,
  $ZodURL: () => zS,
  $ZodUUID: () => SS,
  $ZodUndefined: () => XS,
  $ZodUnion: () => Wu,
  $ZodUnknown: () => WS,
  $ZodVoid: () => t$,
  $ZodXID: () => US,
  $ZodXor: () => u$,
  $brand: () => Of,
  $constructor: () => z,
  $input: () => lm,
  $output: () => om,
  Doc: () => yS,
  JSONSchema: () => Ow,
  JSONSchemaGenerator: () => Uw,
  NEVER: () => Uf,
  TimePrecision: () => Em,
  _any: () => o0,
  _array: () => m0,
  _base64: () => km,
  _base64url: () => Tm,
  _bigint: () => W$,
  _boolean: () => K$,
  _catch: () => $w,
  _check: () => y0,
  _cidrv4: () => $m,
  _cidrv6: () => zm,
  _coercedBigint: () => e0,
  _coercedBoolean: () => F$,
  _coercedDate: () => d0,
  _coercedNumber: () => G$,
  _coercedString: () => C$,
  _cuid: () => pm,
  _cuid2: () => gm,
  _custom: () => p0,
  _date: () => s0,
  _decode: () => Mf,
  _decodeAsync: () => Hf,
  _default: () => _w,
  _discriminatedUnion: () => lw,
  _e164: () => wm,
  _email: () => um,
  _emoji: () => mm,
  _encode: () => Cf,
  _encodeAsync: () => qf,
  _endsWith: () => xo,
  _enum: () => mw,
  _file: () => v0,
  _float32: () => Y$,
  _float64: () => V$,
  _gt: () => Pn,
  _gte: () => zt,
  _guid: () => Hu,
  _includes: () => To,
  _int: () => P$,
  _int32: () => Q$,
  _int64: () => t0,
  _intersection: () => uw,
  _ipv4: () => bm,
  _ipv6: () => Sm,
  _isoDate: () => H$,
  _isoDateTime: () => q$,
  _isoDuration: () => B$,
  _isoTime: () => L$,
  _jwt: () => xm,
  _ksuid: () => _m,
  _lazy: () => ww,
  _length: () => Wa,
  _literal: () => pw,
  _lowercase: () => zo,
  _lt: () => Gn,
  _lte: () => Gt,
  _mac: () => M$,
  _map: () => dw,
  _max: () => Gt,
  _maxLength: () => Fa,
  _maxSize: () => Fi,
  _mime: () => Eo,
  _min: () => zt,
  _minLength: () => hi,
  _minSize: () => Yn,
  _multipleOf: () => Yi,
  _nan: () => f0,
  _nanoid: () => vm,
  _nativeEnum: () => vw,
  _negative: () => ic,
  _never: () => u0,
  _nonnegative: () => rc,
  _nonoptional: () => bw,
  _nonpositive: () => ac,
  _normalize: () => Uo,
  _null: () => r0,
  _nullable: () => yw,
  _number: () => J$,
  _optional: () => hw,
  _overwrite: () => kn,
  _parse: () => vo,
  _parseAsync: () => po,
  _pipe: () => zw,
  _positive: () => nc,
  _promise: () => xw,
  _property: () => oc,
  _readonly: () => kw,
  _record: () => sw,
  _refine: () => g0,
  _regex: () => $o,
  _safeDecode: () => Bf,
  _safeDecodeAsync: () => Gf,
  _safeEncode: () => Lf,
  _safeEncodeAsync: () => Jf,
  _safeParse: () => go,
  _safeParseAsync: () => ho,
  _set: () => fw,
  _size: () => Ka,
  _slugify: () => No,
  _startsWith: () => wo,
  _string: () => R$,
  _stringFormat: () => jo,
  _stringbool: () => S0,
  _success: () => Sw,
  _superRefine: () => h0,
  _symbol: () => i0,
  _templateLiteral: () => Tw,
  _toLowerCase: () => Do,
  _toUpperCase: () => Zo,
  _transform: () => gw,
  _trim: () => Oo,
  _tuple: () => cw,
  _uint32: () => X$,
  _uint64: () => n0,
  _ulid: () => hm,
  _undefined: () => a0,
  _union: () => rw,
  _unknown: () => l0,
  _uppercase: () => ko,
  _url: () => tc,
  _uuid: () => cm,
  _uuidv4: () => sm,
  _uuidv6: () => dm,
  _uuidv7: () => fm,
  _void: () => c0,
  _xid: () => ym,
  _xor: () => ow,
  clone: () => Yt,
  config: () => rt,
  createStandardJSONSchemaMethod: () => uo,
  createToJSONSchemaMethod: () => $0,
  decode: () => Rk,
  decodeAsync: () => Mk,
  describe: () => _0,
  encode: () => Ik,
  encodeAsync: () => Ck,
  extractDefs: () => Ja,
  finalize: () => Ga,
  flattenError: () => Xu,
  formatError: () => Ku,
  globalConfig: () => lo,
  globalRegistry: () => Jt,
  initializeContext: () => Ba,
  isValidBase64: () => Kf,
  isValidBase64URL: () => HS,
  isValidJWT: () => JS,
  locales: () => rm,
  meta: () => b0,
  parse: () => kf,
  parseAsync: () => Tf,
  prettifyError: () => If,
  process: () => Ne,
  regexes: () => Fu,
  registry: () => ec,
  safeDecode: () => Hk,
  safeDecodeAsync: () => Bk,
  safeEncode: () => qk,
  safeEncodeAsync: () => Lk,
  safeParse: () => Rf,
  safeParseAsync: () => yb,
  toDotPath: () => hb,
  toJSONSchema: () => Dm,
  treeifyError: () => Af,
  util: () => Df,
  version: () => _S
});
function Zm(n) {
  return !!n._zod;
}
function lz(n, a) {
  return Zm(n) ? Rf(n, a) : n.safeParse(a);
}
function Dw(n) {
  if (!n) return;
  let a;
  if (Zm(n) ? a = n._zod?.def?.shape : a = n.shape, !!a) {
    if (typeof a == "function") try {
      return a();
    } catch {
      return;
    }
    return a;
  }
}
function Zw(n) {
  if (Zm(n)) {
    const c = n._zod?.def;
    if (c) {
      if (c.value !== void 0) return c.value;
      if (Array.isArray(c.values) && c.values.length > 0) return c.values[0];
    }
  }
  const a = n._def;
  if (a) {
    if (a.value !== void 0) return a.value;
    if (Array.isArray(a.values) && a.values.length > 0) return a.values[0];
  }
  const o = n.value;
  if (o !== void 0) return o;
}
var Nw = /* @__PURE__ */ gn({
  endsWith: () => xo,
  gt: () => Pn,
  gte: () => zt,
  includes: () => To,
  length: () => Wa,
  lowercase: () => zo,
  lt: () => Gn,
  lte: () => Gt,
  maxLength: () => Fa,
  maxSize: () => Fi,
  mime: () => Eo,
  minLength: () => hi,
  minSize: () => Yn,
  multipleOf: () => Yi,
  negative: () => ic,
  nonnegative: () => rc,
  nonpositive: () => ac,
  normalize: () => Uo,
  overwrite: () => kn,
  positive: () => nc,
  property: () => oc,
  regex: () => $o,
  size: () => Ka,
  slugify: () => No,
  startsWith: () => wo,
  toLowerCase: () => Do,
  toUpperCase: () => Zo,
  trim: () => Oo,
  uppercase: () => ko
}), Nm = /* @__PURE__ */ gn({
  ZodISODate: () => uc,
  ZodISODateTime: () => lc,
  ZodISODuration: () => sc,
  ZodISOTime: () => cc,
  date: () => uz,
  datetime: () => jm,
  duration: () => sz,
  time: () => cz
}), lc = /* @__PURE__ */ z("ZodISODateTime", (n, a) => {
  DS.init(n, a), je.init(n, a);
});
function jm(n) {
  return /* @__PURE__ */ q$(lc, n);
}
var uc = /* @__PURE__ */ z("ZodISODate", (n, a) => {
  ZS.init(n, a), je.init(n, a);
});
function uz(n) {
  return /* @__PURE__ */ H$(uc, n);
}
var cc = /* @__PURE__ */ z("ZodISOTime", (n, a) => {
  NS.init(n, a), je.init(n, a);
});
function cz(n) {
  return /* @__PURE__ */ L$(cc, n);
}
var sc = /* @__PURE__ */ z("ZodISODuration", (n, a) => {
  jS.init(n, a), je.init(n, a);
});
function sz(n) {
  return /* @__PURE__ */ B$(sc, n);
}
var dz = (n, a) => {
  jf.init(n, a), n.name = "ZodError", Object.defineProperties(n, {
    format: { value: (o) => Ku(n, o) },
    flatten: { value: (o) => Xu(n, o) },
    addIssue: { value: (o) => {
      n.issues.push(o), n.message = JSON.stringify(n.issues, Cu, 2);
    } },
    addIssues: { value: (o) => {
      n.issues.push(...o), n.message = JSON.stringify(n.issues, Cu, 2);
    } },
    isEmpty: { get() {
      return n.issues.length === 0;
    } }
  });
}, fz = /* @__PURE__ */ z("ZodError", dz), Zt = /* @__PURE__ */ z("ZodError", dz, { Parent: Error }), Am = /* @__PURE__ */ vo(Zt), Im = /* @__PURE__ */ po(Zt), Rm = /* @__PURE__ */ go(Zt), Cm = /* @__PURE__ */ ho(Zt), Mm = /* @__PURE__ */ Cf(Zt), qm = /* @__PURE__ */ Mf(Zt), Hm = /* @__PURE__ */ qf(Zt), Lm = /* @__PURE__ */ Hf(Zt), Bm = /* @__PURE__ */ Lf(Zt), Jm = /* @__PURE__ */ Bf(Zt), Gm = /* @__PURE__ */ Jf(Zt), Pm = /* @__PURE__ */ Gf(Zt), jw = /* @__PURE__ */ gn({
  ZodAny: () => pc,
  ZodArray: () => _c,
  ZodBase64: () => Qo,
  ZodBase64URL: () => Xo,
  ZodBigInt: () => ar,
  ZodBigIntFormat: () => Wo,
  ZodBoolean: () => ir,
  ZodCIDRv4: () => Yo,
  ZodCIDRv6: () => Vo,
  ZodCUID: () => qo,
  ZodCUID2: () => Ho,
  ZodCatch: () => Mc,
  ZodCodec: () => cr,
  ZodCustom: () => sr,
  ZodCustomStringFormat: () => Wi,
  ZodDate: () => tl,
  ZodDefault: () => Nc,
  ZodDiscriminatedUnion: () => Sc,
  ZodE164: () => Ko,
  ZodEmail: () => Ro,
  ZodEmoji: () => Co,
  ZodEnum: () => Xi,
  ZodExactOptional: () => Oc,
  ZodFile: () => Ec,
  ZodFunction: () => Qc,
  ZodGUID: () => Pa,
  ZodIPv4: () => Go,
  ZodIPv6: () => Po,
  ZodIntersection: () => $c,
  ZodJWT: () => Fo,
  ZodKSUID: () => Jo,
  ZodLazy: () => Pc,
  ZodLiteral: () => xc,
  ZodMAC: () => dc,
  ZodMap: () => Tc,
  ZodNaN: () => Hc,
  ZodNanoID: () => Mo,
  ZodNever: () => hc,
  ZodNonOptional: () => rl,
  ZodNull: () => vc,
  ZodNullable: () => Zc,
  ZodNumber: () => nr,
  ZodNumberFormat: () => _i,
  ZodObject: () => rr,
  ZodOptional: () => al,
  ZodPipe: () => ur,
  ZodPrefault: () => Ac,
  ZodPreprocess: () => Lc,
  ZodPromise: () => Vc,
  ZodReadonly: () => Bc,
  ZodRecord: () => Qi,
  ZodSet: () => wc,
  ZodString: () => er,
  ZodStringFormat: () => je,
  ZodSuccess: () => Cc,
  ZodSymbol: () => fc,
  ZodTemplateLiteral: () => Gc,
  ZodTransform: () => Uc,
  ZodTuple: () => zc,
  ZodType: () => ne,
  ZodULID: () => Lo,
  ZodURL: () => tr,
  ZodUUID: () => pn,
  ZodUndefined: () => mc,
  ZodUnion: () => or,
  ZodUnknown: () => gc,
  ZodVoid: () => yc,
  ZodXID: () => Bo,
  ZodXor: () => bc,
  _ZodString: () => Io,
  _default: () => jc,
  _function: () => Qa,
  any: () => Uv,
  array: () => F,
  base64: () => mv,
  base64url: () => vv,
  bigint: () => Tv,
  boolean: () => Te,
  catch: () => qc,
  check: () => Vv,
  cidrv4: () => dv,
  cidrv6: () => fv,
  codec: () => Jv,
  cuid: () => iv,
  cuid2: () => av,
  custom: () => Xc,
  date: () => Dv,
  describe: () => Qv,
  discriminatedUnion: () => nl,
  e164: () => pv,
  email: () => Ym,
  emoji: () => tv,
  enum: () => vt,
  exactOptional: () => Dc,
  file: () => qv,
  float32: () => Sv,
  float64: () => $v,
  function: () => Qa,
  guid: () => Vm,
  hash: () => bv,
  hex: () => _v,
  hostname: () => yv,
  httpUrl: () => ev,
  instanceof: () => Kv,
  int: () => co,
  int32: () => zv,
  int64: () => wv,
  intersection: () => lr,
  invertCodec: () => Gv,
  ipv4: () => uv,
  ipv6: () => sv,
  json: () => Wv,
  jwt: () => gv,
  keyof: () => Zv,
  ksuid: () => lv,
  lazy: () => Yc,
  literal: () => k,
  looseObject: () => mt,
  looseRecord: () => Iv,
  mac: () => cv,
  map: () => Rv,
  meta: () => Xv,
  nan: () => Bv,
  nanoid: () => nv,
  nativeEnum: () => Mv,
  never: () => Vi,
  nonoptional: () => Rc,
  null: () => el,
  nullable: () => Va,
  nullish: () => Hv,
  number: () => te,
  object: () => D,
  optional: () => Me,
  partialRecord: () => Av,
  pipe: () => so,
  prefault: () => Ic,
  preprocess: () => ol,
  promise: () => Yv,
  readonly: () => Jc,
  record: () => he,
  refine: () => Kc,
  set: () => Cv,
  strictObject: () => Nv,
  string: () => T,
  stringFormat: () => hv,
  stringbool: () => Fv,
  success: () => Lv,
  superRefine: () => Fc,
  symbol: () => Ev,
  templateLiteral: () => Pv,
  transform: () => il,
  tuple: () => kc,
  uint32: () => kv,
  uint64: () => xv,
  ulid: () => rv,
  undefined: () => Ya,
  union: () => le,
  unknown: () => be,
  url: () => Wm,
  uuid: () => Qm,
  uuidv4: () => Xm,
  uuidv6: () => Km,
  uuidv7: () => Fm,
  void: () => Ov,
  xid: () => ov,
  xor: () => jv
}), q_ = /* @__PURE__ */ new WeakMap();
function Ao(n, a, o) {
  const c = Object.getPrototypeOf(n);
  let i = q_.get(c);
  if (i || (i = /* @__PURE__ */ new Set(), q_.set(c, i)), !i.has(a)) {
    i.add(a);
    for (const u in o) {
      const d = o[u];
      Object.defineProperty(c, u, {
        configurable: !0,
        enumerable: !1,
        get() {
          const m = d.bind(this);
          return Object.defineProperty(this, u, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: m
          }), m;
        },
        set(m) {
          Object.defineProperty(this, u, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: m
          });
        }
      });
    }
  }
}
var ne = /* @__PURE__ */ z("ZodType", (n, a) => (ee.init(n, a), Object.assign(n["~standard"], { jsonSchema: {
  input: uo(n, "input"),
  output: uo(n, "output")
} }), n.toJSONSchema = $0(n, {}), n.def = a, n.type = a.type, Object.defineProperty(n, "_def", { value: a }), n.parse = (o, c) => Am(n, o, c, { callee: n.parse }), n.safeParse = (o, c) => Rm(n, o, c), n.parseAsync = async (o, c) => Im(n, o, c, { callee: n.parseAsync }), n.safeParseAsync = async (o, c) => Cm(n, o, c), n.spa = n.safeParseAsync, n.encode = (o, c) => Mm(n, o, c), n.decode = (o, c) => qm(n, o, c), n.encodeAsync = async (o, c) => Hm(n, o, c), n.decodeAsync = async (o, c) => Lm(n, o, c), n.safeEncode = (o, c) => Bm(n, o, c), n.safeDecode = (o, c) => Jm(n, o, c), n.safeEncodeAsync = async (o, c) => Gm(n, o, c), n.safeDecodeAsync = async (o, c) => Pm(n, o, c), Ao(n, "ZodType", {
  check(...o) {
    const c = this.def;
    return this.clone(zn(c, { checks: [...c.checks ?? [], ...o.map((i) => typeof i == "function" ? { _zod: {
      check: i,
      def: { check: "custom" },
      onattach: []
    } } : i)] }), { parent: !0 });
  },
  with(...o) {
    return this.check(...o);
  },
  clone(o, c) {
    return Yt(this, o, c);
  },
  brand() {
    return this;
  },
  register(o, c) {
    return o.add(this, c), this;
  },
  refine(o, c) {
    return this.check(Kc(o, c));
  },
  superRefine(o, c) {
    return this.check(Fc(o, c));
  },
  overwrite(o) {
    return this.check(/* @__PURE__ */ kn(o));
  },
  optional() {
    return Me(this);
  },
  exactOptional() {
    return Dc(this);
  },
  nullable() {
    return Va(this);
  },
  nullish() {
    return Me(Va(this));
  },
  nonoptional(o) {
    return Rc(this, o);
  },
  array() {
    return F(this);
  },
  or(o) {
    return le([this, o]);
  },
  and(o) {
    return lr(this, o);
  },
  transform(o) {
    return so(this, il(o));
  },
  default(o) {
    return jc(this, o);
  },
  prefault(o) {
    return Ic(this, o);
  },
  catch(o) {
    return qc(this, o);
  },
  pipe(o) {
    return so(this, o);
  },
  readonly() {
    return Jc(this);
  },
  describe(o) {
    const c = this.clone();
    return Jt.add(c, { description: o }), c;
  },
  meta(...o) {
    if (o.length === 0) return Jt.get(this);
    const c = this.clone();
    return Jt.add(c, o[0]), c;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(o) {
    return o(this);
  }
}), Object.defineProperty(n, "description", {
  get() {
    return Jt.get(n)?.description;
  },
  configurable: !0
}), n)), Io = /* @__PURE__ */ z("_ZodString", (n, a) => {
  So.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (c, i, u) => z0(n, c, i, u);
  const o = n._zod.bag;
  n.format = o.format ?? null, n.minLength = o.minimum ?? null, n.maxLength = o.maximum ?? null, Ao(n, "_ZodString", {
    regex(...c) {
      return this.check(/* @__PURE__ */ $o(...c));
    },
    includes(...c) {
      return this.check(/* @__PURE__ */ To(...c));
    },
    startsWith(...c) {
      return this.check(/* @__PURE__ */ wo(...c));
    },
    endsWith(...c) {
      return this.check(/* @__PURE__ */ xo(...c));
    },
    min(...c) {
      return this.check(/* @__PURE__ */ hi(...c));
    },
    max(...c) {
      return this.check(/* @__PURE__ */ Fa(...c));
    },
    length(...c) {
      return this.check(/* @__PURE__ */ Wa(...c));
    },
    nonempty(...c) {
      return this.check(/* @__PURE__ */ hi(1, ...c));
    },
    lowercase(c) {
      return this.check(/* @__PURE__ */ zo(c));
    },
    uppercase(c) {
      return this.check(/* @__PURE__ */ ko(c));
    },
    trim() {
      return this.check(/* @__PURE__ */ Oo());
    },
    normalize(...c) {
      return this.check(/* @__PURE__ */ Uo(...c));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ Do());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ Zo());
    },
    slugify() {
      return this.check(/* @__PURE__ */ No());
    }
  });
}), er = /* @__PURE__ */ z("ZodString", (n, a) => {
  So.init(n, a), Io.init(n, a), n.email = (o) => n.check(/* @__PURE__ */ um(Ro, o)), n.url = (o) => n.check(/* @__PURE__ */ tc(tr, o)), n.jwt = (o) => n.check(/* @__PURE__ */ xm(Fo, o)), n.emoji = (o) => n.check(/* @__PURE__ */ mm(Co, o)), n.guid = (o) => n.check(/* @__PURE__ */ Hu(Pa, o)), n.uuid = (o) => n.check(/* @__PURE__ */ cm(pn, o)), n.uuidv4 = (o) => n.check(/* @__PURE__ */ sm(pn, o)), n.uuidv6 = (o) => n.check(/* @__PURE__ */ dm(pn, o)), n.uuidv7 = (o) => n.check(/* @__PURE__ */ fm(pn, o)), n.nanoid = (o) => n.check(/* @__PURE__ */ vm(Mo, o)), n.guid = (o) => n.check(/* @__PURE__ */ Hu(Pa, o)), n.cuid = (o) => n.check(/* @__PURE__ */ pm(qo, o)), n.cuid2 = (o) => n.check(/* @__PURE__ */ gm(Ho, o)), n.ulid = (o) => n.check(/* @__PURE__ */ hm(Lo, o)), n.base64 = (o) => n.check(/* @__PURE__ */ km(Qo, o)), n.base64url = (o) => n.check(/* @__PURE__ */ Tm(Xo, o)), n.xid = (o) => n.check(/* @__PURE__ */ ym(Bo, o)), n.ksuid = (o) => n.check(/* @__PURE__ */ _m(Jo, o)), n.ipv4 = (o) => n.check(/* @__PURE__ */ bm(Go, o)), n.ipv6 = (o) => n.check(/* @__PURE__ */ Sm(Po, o)), n.cidrv4 = (o) => n.check(/* @__PURE__ */ $m(Yo, o)), n.cidrv6 = (o) => n.check(/* @__PURE__ */ zm(Vo, o)), n.e164 = (o) => n.check(/* @__PURE__ */ wm(Ko, o)), n.datetime = (o) => n.check(jm(o)), n.date = (o) => n.check(uz(o)), n.time = (o) => n.check(cz(o)), n.duration = (o) => n.check(sz(o));
});
function T(n) {
  return /* @__PURE__ */ R$(er, n);
}
var je = /* @__PURE__ */ z("ZodStringFormat", (n, a) => {
  qe.init(n, a), Io.init(n, a);
}), Ro = /* @__PURE__ */ z("ZodEmail", (n, a) => {
  $S.init(n, a), je.init(n, a);
});
function Ym(n) {
  return /* @__PURE__ */ um(Ro, n);
}
var Pa = /* @__PURE__ */ z("ZodGUID", (n, a) => {
  bS.init(n, a), je.init(n, a);
});
function Vm(n) {
  return /* @__PURE__ */ Hu(Pa, n);
}
var pn = /* @__PURE__ */ z("ZodUUID", (n, a) => {
  SS.init(n, a), je.init(n, a);
});
function Qm(n) {
  return /* @__PURE__ */ cm(pn, n);
}
function Xm(n) {
  return /* @__PURE__ */ sm(pn, n);
}
function Km(n) {
  return /* @__PURE__ */ dm(pn, n);
}
function Fm(n) {
  return /* @__PURE__ */ fm(pn, n);
}
var tr = /* @__PURE__ */ z("ZodURL", (n, a) => {
  zS.init(n, a), je.init(n, a);
});
function Wm(n) {
  return /* @__PURE__ */ tc(tr, n);
}
function ev(n) {
  return /* @__PURE__ */ tc(tr, {
    protocol: Yf,
    hostname: Rb,
    ...I(n)
  });
}
var Co = /* @__PURE__ */ z("ZodEmoji", (n, a) => {
  kS.init(n, a), je.init(n, a);
});
function tv(n) {
  return /* @__PURE__ */ mm(Co, n);
}
var Mo = /* @__PURE__ */ z("ZodNanoID", (n, a) => {
  TS.init(n, a), je.init(n, a);
});
function nv(n) {
  return /* @__PURE__ */ vm(Mo, n);
}
var qo = /* @__PURE__ */ z("ZodCUID", (n, a) => {
  wS.init(n, a), je.init(n, a);
});
function iv(n) {
  return /* @__PURE__ */ pm(qo, n);
}
var Ho = /* @__PURE__ */ z("ZodCUID2", (n, a) => {
  xS.init(n, a), je.init(n, a);
});
function av(n) {
  return /* @__PURE__ */ gm(Ho, n);
}
var Lo = /* @__PURE__ */ z("ZodULID", (n, a) => {
  ES.init(n, a), je.init(n, a);
});
function rv(n) {
  return /* @__PURE__ */ hm(Lo, n);
}
var Bo = /* @__PURE__ */ z("ZodXID", (n, a) => {
  US.init(n, a), je.init(n, a);
});
function ov(n) {
  return /* @__PURE__ */ ym(Bo, n);
}
var Jo = /* @__PURE__ */ z("ZodKSUID", (n, a) => {
  OS.init(n, a), je.init(n, a);
});
function lv(n) {
  return /* @__PURE__ */ _m(Jo, n);
}
var Go = /* @__PURE__ */ z("ZodIPv4", (n, a) => {
  AS.init(n, a), je.init(n, a);
});
function uv(n) {
  return /* @__PURE__ */ bm(Go, n);
}
var dc = /* @__PURE__ */ z("ZodMAC", (n, a) => {
  RS.init(n, a), je.init(n, a);
});
function cv(n) {
  return /* @__PURE__ */ M$(dc, n);
}
var Po = /* @__PURE__ */ z("ZodIPv6", (n, a) => {
  IS.init(n, a), je.init(n, a);
});
function sv(n) {
  return /* @__PURE__ */ Sm(Po, n);
}
var Yo = /* @__PURE__ */ z("ZodCIDRv4", (n, a) => {
  CS.init(n, a), je.init(n, a);
});
function dv(n) {
  return /* @__PURE__ */ $m(Yo, n);
}
var Vo = /* @__PURE__ */ z("ZodCIDRv6", (n, a) => {
  MS.init(n, a), je.init(n, a);
});
function fv(n) {
  return /* @__PURE__ */ zm(Vo, n);
}
var Qo = /* @__PURE__ */ z("ZodBase64", (n, a) => {
  qS.init(n, a), je.init(n, a);
});
function mv(n) {
  return /* @__PURE__ */ km(Qo, n);
}
var Xo = /* @__PURE__ */ z("ZodBase64URL", (n, a) => {
  LS.init(n, a), je.init(n, a);
});
function vv(n) {
  return /* @__PURE__ */ Tm(Xo, n);
}
var Ko = /* @__PURE__ */ z("ZodE164", (n, a) => {
  BS.init(n, a), je.init(n, a);
});
function pv(n) {
  return /* @__PURE__ */ wm(Ko, n);
}
var Fo = /* @__PURE__ */ z("ZodJWT", (n, a) => {
  GS.init(n, a), je.init(n, a);
});
function gv(n) {
  return /* @__PURE__ */ xm(Fo, n);
}
var Wi = /* @__PURE__ */ z("ZodCustomStringFormat", (n, a) => {
  PS.init(n, a), je.init(n, a);
});
function hv(n, a, o = {}) {
  return /* @__PURE__ */ jo(Wi, n, a, o);
}
function yv(n) {
  return /* @__PURE__ */ jo(Wi, "hostname", Ib, n);
}
function _v(n) {
  return /* @__PURE__ */ jo(Wi, "hex", Fb, n);
}
function bv(n, a) {
  const o = `${n}_${a?.enc ?? "hex"}`, c = Fu[o];
  if (!c) throw new Error(`Unrecognized hash format: ${o}`);
  return /* @__PURE__ */ jo(Wi, o, c, a);
}
var nr = /* @__PURE__ */ z("ZodNumber", (n, a) => {
  Ff.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (c, i, u) => k0(n, c, i, u), Ao(n, "ZodNumber", {
    gt(c, i) {
      return this.check(/* @__PURE__ */ Pn(c, i));
    },
    gte(c, i) {
      return this.check(/* @__PURE__ */ zt(c, i));
    },
    min(c, i) {
      return this.check(/* @__PURE__ */ zt(c, i));
    },
    lt(c, i) {
      return this.check(/* @__PURE__ */ Gn(c, i));
    },
    lte(c, i) {
      return this.check(/* @__PURE__ */ Gt(c, i));
    },
    max(c, i) {
      return this.check(/* @__PURE__ */ Gt(c, i));
    },
    int(c) {
      return this.check(co(c));
    },
    safe(c) {
      return this.check(co(c));
    },
    positive(c) {
      return this.check(/* @__PURE__ */ Pn(0, c));
    },
    nonnegative(c) {
      return this.check(/* @__PURE__ */ zt(0, c));
    },
    negative(c) {
      return this.check(/* @__PURE__ */ Gn(0, c));
    },
    nonpositive(c) {
      return this.check(/* @__PURE__ */ Gt(0, c));
    },
    multipleOf(c, i) {
      return this.check(/* @__PURE__ */ Yi(c, i));
    },
    step(c, i) {
      return this.check(/* @__PURE__ */ Yi(c, i));
    },
    finite() {
      return this;
    }
  });
  const o = n._zod.bag;
  n.minValue = Math.max(o.minimum ?? Number.NEGATIVE_INFINITY, o.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(o.maximum ?? Number.POSITIVE_INFINITY, o.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (o.format ?? "").includes("int") || Number.isSafeInteger(o.multipleOf ?? 0.5), n.isFinite = !0, n.format = o.format ?? null;
});
function te(n) {
  return /* @__PURE__ */ J$(nr, n);
}
var _i = /* @__PURE__ */ z("ZodNumberFormat", (n, a) => {
  YS.init(n, a), nr.init(n, a);
});
function co(n) {
  return /* @__PURE__ */ P$(_i, n);
}
function Sv(n) {
  return /* @__PURE__ */ Y$(_i, n);
}
function $v(n) {
  return /* @__PURE__ */ V$(_i, n);
}
function zv(n) {
  return /* @__PURE__ */ Q$(_i, n);
}
function kv(n) {
  return /* @__PURE__ */ X$(_i, n);
}
var ir = /* @__PURE__ */ z("ZodBoolean", (n, a) => {
  Wf.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => T0(n, o, c, i);
});
function Te(n) {
  return /* @__PURE__ */ K$(ir, n);
}
var ar = /* @__PURE__ */ z("ZodBigInt", (n, a) => {
  em.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (c, i, u) => w0(n, c, i, u), n.gte = (c, i) => n.check(/* @__PURE__ */ zt(c, i)), n.min = (c, i) => n.check(/* @__PURE__ */ zt(c, i)), n.gt = (c, i) => n.check(/* @__PURE__ */ Pn(c, i)), n.gte = (c, i) => n.check(/* @__PURE__ */ zt(c, i)), n.min = (c, i) => n.check(/* @__PURE__ */ zt(c, i)), n.lt = (c, i) => n.check(/* @__PURE__ */ Gn(c, i)), n.lte = (c, i) => n.check(/* @__PURE__ */ Gt(c, i)), n.max = (c, i) => n.check(/* @__PURE__ */ Gt(c, i)), n.positive = (c) => n.check(/* @__PURE__ */ Pn(BigInt(0), c)), n.negative = (c) => n.check(/* @__PURE__ */ Gn(BigInt(0), c)), n.nonpositive = (c) => n.check(/* @__PURE__ */ Gt(BigInt(0), c)), n.nonnegative = (c) => n.check(/* @__PURE__ */ zt(BigInt(0), c)), n.multipleOf = (c, i) => n.check(/* @__PURE__ */ Yi(c, i));
  const o = n._zod.bag;
  n.minValue = o.minimum ?? null, n.maxValue = o.maximum ?? null, n.format = o.format ?? null;
});
function Tv(n) {
  return /* @__PURE__ */ W$(ar, n);
}
var Wo = /* @__PURE__ */ z("ZodBigIntFormat", (n, a) => {
  VS.init(n, a), ar.init(n, a);
});
function wv(n) {
  return /* @__PURE__ */ t0(Wo, n);
}
function xv(n) {
  return /* @__PURE__ */ n0(Wo, n);
}
var fc = /* @__PURE__ */ z("ZodSymbol", (n, a) => {
  QS.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => x0(n, o, c, i);
});
function Ev(n) {
  return /* @__PURE__ */ i0(fc, n);
}
var mc = /* @__PURE__ */ z("ZodUndefined", (n, a) => {
  XS.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => U0(n, o, c, i);
});
function Ya(n) {
  return /* @__PURE__ */ a0(mc, n);
}
var vc = /* @__PURE__ */ z("ZodNull", (n, a) => {
  KS.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => E0(n, o, c, i);
});
function el(n) {
  return /* @__PURE__ */ r0(vc, n);
}
var pc = /* @__PURE__ */ z("ZodAny", (n, a) => {
  FS.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => Z0(n, o, c, i);
});
function Uv() {
  return /* @__PURE__ */ o0(pc);
}
var gc = /* @__PURE__ */ z("ZodUnknown", (n, a) => {
  WS.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => N0(n, o, c, i);
});
function be() {
  return /* @__PURE__ */ l0(gc);
}
var hc = /* @__PURE__ */ z("ZodNever", (n, a) => {
  e$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => D0(n, o, c, i);
});
function Vi(n) {
  return /* @__PURE__ */ u0(hc, n);
}
var yc = /* @__PURE__ */ z("ZodVoid", (n, a) => {
  t$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => O0(n, o, c, i);
});
function Ov(n) {
  return /* @__PURE__ */ c0(yc, n);
}
var tl = /* @__PURE__ */ z("ZodDate", (n, a) => {
  n$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (c, i, u) => j0(n, c, i, u), n.min = (c, i) => n.check(/* @__PURE__ */ zt(c, i)), n.max = (c, i) => n.check(/* @__PURE__ */ Gt(c, i));
  const o = n._zod.bag;
  n.minDate = o.minimum ? new Date(o.minimum) : null, n.maxDate = o.maximum ? new Date(o.maximum) : null;
});
function Dv(n) {
  return /* @__PURE__ */ s0(tl, n);
}
var _c = /* @__PURE__ */ z("ZodArray", (n, a) => {
  i$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => P0(n, o, c, i), n.element = a.element, Ao(n, "ZodArray", {
    min(o, c) {
      return this.check(/* @__PURE__ */ hi(o, c));
    },
    nonempty(o) {
      return this.check(/* @__PURE__ */ hi(1, o));
    },
    max(o, c) {
      return this.check(/* @__PURE__ */ Fa(o, c));
    },
    length(o, c) {
      return this.check(/* @__PURE__ */ Wa(o, c));
    },
    unwrap() {
      return this.element;
    }
  });
});
function F(n, a) {
  return /* @__PURE__ */ m0(_c, n, a);
}
function Zv(n) {
  const a = n._zod.def.shape;
  return vt(Object.keys(a));
}
var rr = /* @__PURE__ */ z("ZodObject", (n, a) => {
  l$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => Y0(n, o, c, i), oe(n, "shape", () => a.shape), Ao(n, "ZodObject", {
    keyof() {
      return vt(Object.keys(this._zod.def.shape));
    },
    catchall(o) {
      return this.clone({
        ...this._zod.def,
        catchall: o
      });
    },
    passthrough() {
      return this.clone({
        ...this._zod.def,
        catchall: be()
      });
    },
    loose() {
      return this.clone({
        ...this._zod.def,
        catchall: be()
      });
    },
    strict() {
      return this.clone({
        ...this._zod.def,
        catchall: Vi()
      });
    },
    strip() {
      return this.clone({
        ...this._zod.def,
        catchall: void 0
      });
    },
    extend(o) {
      return ub(this, o);
    },
    safeExtend(o) {
      return cb(this, o);
    },
    merge(o) {
      return sb(this, o);
    },
    pick(o) {
      return ob(this, o);
    },
    omit(o) {
      return lb(this, o);
    },
    partial(...o) {
      return db(al, this, o[0]);
    },
    required(...o) {
      return fb(rl, this, o[0]);
    }
  });
});
function D(n, a) {
  return new rr({
    type: "object",
    shape: n ?? {},
    ...I(a)
  });
}
function Nv(n, a) {
  return new rr({
    type: "object",
    shape: n,
    catchall: Vi(),
    ...I(a)
  });
}
function mt(n, a) {
  return new rr({
    type: "object",
    shape: n,
    catchall: be(),
    ...I(a)
  });
}
var or = /* @__PURE__ */ z("ZodUnion", (n, a) => {
  Wu.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => Um(n, o, c, i), n.options = a.options;
});
function le(n, a) {
  return new or({
    type: "union",
    options: n,
    ...I(a)
  });
}
var bc = /* @__PURE__ */ z("ZodXor", (n, a) => {
  or.init(n, a), u$.init(n, a), n._zod.processJSONSchema = (o, c, i) => Um(n, o, c, i), n.options = a.options;
});
function jv(n, a) {
  return new bc({
    type: "union",
    options: n,
    inclusive: !1,
    ...I(a)
  });
}
var Sc = /* @__PURE__ */ z("ZodDiscriminatedUnion", (n, a) => {
  or.init(n, a), c$.init(n, a);
});
function nl(n, a, o) {
  return new Sc({
    type: "union",
    options: a,
    discriminator: n,
    ...I(o)
  });
}
var $c = /* @__PURE__ */ z("ZodIntersection", (n, a) => {
  s$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => V0(n, o, c, i);
});
function lr(n, a) {
  return new $c({
    type: "intersection",
    left: n,
    right: a
  });
}
var zc = /* @__PURE__ */ z("ZodTuple", (n, a) => {
  tm.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => Q0(n, o, c, i), n.rest = (o) => n.clone({
    ...n._zod.def,
    rest: o
  });
});
function kc(n, a, o) {
  const c = a instanceof ee, i = c ? o : a;
  return new zc({
    type: "tuple",
    items: n,
    rest: c ? a : null,
    ...I(i)
  });
}
var Qi = /* @__PURE__ */ z("ZodRecord", (n, a) => {
  d$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => X0(n, o, c, i), n.keyType = a.keyType, n.valueType = a.valueType;
});
function he(n, a, o) {
  return !a || !a._zod ? new Qi({
    type: "record",
    keyType: T(),
    valueType: n,
    ...I(a)
  }) : new Qi({
    type: "record",
    keyType: n,
    valueType: a,
    ...I(o)
  });
}
function Av(n, a, o) {
  const c = Yt(n);
  return c._zod.values = void 0, new Qi({
    type: "record",
    keyType: c,
    valueType: a,
    ...I(o)
  });
}
function Iv(n, a, o) {
  return new Qi({
    type: "record",
    keyType: n,
    valueType: a,
    mode: "loose",
    ...I(o)
  });
}
var Tc = /* @__PURE__ */ z("ZodMap", (n, a) => {
  f$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => J0(n, o, c, i), n.keyType = a.keyType, n.valueType = a.valueType, n.min = (...o) => n.check(/* @__PURE__ */ Yn(...o)), n.nonempty = (o) => n.check(/* @__PURE__ */ Yn(1, o)), n.max = (...o) => n.check(/* @__PURE__ */ Fi(...o)), n.size = (...o) => n.check(/* @__PURE__ */ Ka(...o));
});
function Rv(n, a, o) {
  return new Tc({
    type: "map",
    keyType: n,
    valueType: a,
    ...I(o)
  });
}
var wc = /* @__PURE__ */ z("ZodSet", (n, a) => {
  m$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => G0(n, o, c, i), n.min = (...o) => n.check(/* @__PURE__ */ Yn(...o)), n.nonempty = (o) => n.check(/* @__PURE__ */ Yn(1, o)), n.max = (...o) => n.check(/* @__PURE__ */ Fi(...o)), n.size = (...o) => n.check(/* @__PURE__ */ Ka(...o));
});
function Cv(n, a) {
  return new wc({
    type: "set",
    valueType: n,
    ...I(a)
  });
}
var Xi = /* @__PURE__ */ z("ZodEnum", (n, a) => {
  v$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (c, i, u) => A0(n, c, i, u), n.enum = a.entries, n.options = Object.values(a.entries);
  const o = new Set(Object.keys(a.entries));
  n.extract = (c, i) => {
    const u = {};
    for (const d of c) if (o.has(d)) u[d] = a.entries[d];
    else throw new Error(`Key ${d} not found in enum`);
    return new Xi({
      ...a,
      checks: [],
      ...I(i),
      entries: u
    });
  }, n.exclude = (c, i) => {
    const u = { ...a.entries };
    for (const d of c) if (o.has(d)) delete u[d];
    else throw new Error(`Key ${d} not found in enum`);
    return new Xi({
      ...a,
      checks: [],
      ...I(i),
      entries: u
    });
  };
});
function vt(n, a) {
  return new Xi({
    type: "enum",
    entries: Array.isArray(n) ? Object.fromEntries(n.map((o) => [o, o])) : n,
    ...I(a)
  });
}
function Mv(n, a) {
  return new Xi({
    type: "enum",
    entries: n,
    ...I(a)
  });
}
var xc = /* @__PURE__ */ z("ZodLiteral", (n, a) => {
  p$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => I0(n, o, c, i), n.values = new Set(a.values), Object.defineProperty(n, "value", { get() {
    if (a.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
    return a.values[0];
  } });
});
function k(n, a) {
  return new xc({
    type: "literal",
    values: Array.isArray(n) ? n : [n],
    ...I(a)
  });
}
var Ec = /* @__PURE__ */ z("ZodFile", (n, a) => {
  g$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => M0(n, o, c, i), n.min = (o, c) => n.check(/* @__PURE__ */ Yn(o, c)), n.max = (o, c) => n.check(/* @__PURE__ */ Fi(o, c)), n.mime = (o, c) => n.check(/* @__PURE__ */ Eo(Array.isArray(o) ? o : [o], c));
});
function qv(n) {
  return /* @__PURE__ */ v0(Ec, n);
}
var Uc = /* @__PURE__ */ z("ZodTransform", (n, a) => {
  h$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => B0(n, o, c, i), n._zod.parse = (o, c) => {
    if (c.direction === "backward") throw new Gu(n.constructor.name);
    o.addIssue = (u) => {
      if (typeof u == "string") o.issues.push(Ha(u, o.value, a));
      else {
        const d = u;
        d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = o.value), d.inst ?? (d.inst = n), o.issues.push(Ha(d));
      }
    };
    const i = a.transform(o.value, o);
    return i instanceof Promise ? i.then((u) => (o.value = u, o.fallback = !0, o)) : (o.value = i, o.fallback = !0, o);
  };
});
function il(n) {
  return new Uc({
    type: "transform",
    transform: n
  });
}
var al = /* @__PURE__ */ z("ZodOptional", (n, a) => {
  nm.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => Om(n, o, c, i), n.unwrap = () => n._zod.def.innerType;
});
function Me(n) {
  return new al({
    type: "optional",
    innerType: n
  });
}
var Oc = /* @__PURE__ */ z("ZodExactOptional", (n, a) => {
  y$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => Om(n, o, c, i), n.unwrap = () => n._zod.def.innerType;
});
function Dc(n) {
  return new Oc({
    type: "optional",
    innerType: n
  });
}
var Zc = /* @__PURE__ */ z("ZodNullable", (n, a) => {
  _$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => K0(n, o, c, i), n.unwrap = () => n._zod.def.innerType;
});
function Va(n) {
  return new Zc({
    type: "nullable",
    innerType: n
  });
}
function Hv(n) {
  return Me(Va(n));
}
var Nc = /* @__PURE__ */ z("ZodDefault", (n, a) => {
  b$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => W0(n, o, c, i), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function jc(n, a) {
  return new Nc({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof a == "function" ? a() : Yu(a);
    }
  });
}
var Ac = /* @__PURE__ */ z("ZodPrefault", (n, a) => {
  S$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => ez(n, o, c, i), n.unwrap = () => n._zod.def.innerType;
});
function Ic(n, a) {
  return new Ac({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof a == "function" ? a() : Yu(a);
    }
  });
}
var rl = /* @__PURE__ */ z("ZodNonOptional", (n, a) => {
  $$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => F0(n, o, c, i), n.unwrap = () => n._zod.def.innerType;
});
function Rc(n, a) {
  return new rl({
    type: "nonoptional",
    innerType: n,
    ...I(a)
  });
}
var Cc = /* @__PURE__ */ z("ZodSuccess", (n, a) => {
  z$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => q0(n, o, c, i), n.unwrap = () => n._zod.def.innerType;
});
function Lv(n) {
  return new Cc({
    type: "success",
    innerType: n
  });
}
var Mc = /* @__PURE__ */ z("ZodCatch", (n, a) => {
  k$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => tz(n, o, c, i), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function qc(n, a) {
  return new Mc({
    type: "catch",
    innerType: n,
    catchValue: typeof a == "function" ? a : () => a
  });
}
var Hc = /* @__PURE__ */ z("ZodNaN", (n, a) => {
  T$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => R0(n, o, c, i);
});
function Bv(n) {
  return /* @__PURE__ */ f0(Hc, n);
}
var ur = /* @__PURE__ */ z("ZodPipe", (n, a) => {
  im.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => nz(n, o, c, i), n.in = a.in, n.out = a.out;
});
function so(n, a) {
  return new ur({
    type: "pipe",
    in: n,
    out: a
  });
}
var cr = /* @__PURE__ */ z("ZodCodec", (n, a) => {
  ur.init(n, a), am.init(n, a);
});
function Jv(n, a, o) {
  return new cr({
    type: "pipe",
    in: n,
    out: a,
    transform: o.decode,
    reverseTransform: o.encode
  });
}
function Gv(n) {
  const a = n._zod.def;
  return new cr({
    type: "pipe",
    in: a.out,
    out: a.in,
    transform: a.reverseTransform,
    reverseTransform: a.transform
  });
}
var Lc = /* @__PURE__ */ z("ZodPreprocess", (n, a) => {
  ur.init(n, a), w$.init(n, a);
}), Bc = /* @__PURE__ */ z("ZodReadonly", (n, a) => {
  x$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => iz(n, o, c, i), n.unwrap = () => n._zod.def.innerType;
});
function Jc(n) {
  return new Bc({
    type: "readonly",
    innerType: n
  });
}
var Gc = /* @__PURE__ */ z("ZodTemplateLiteral", (n, a) => {
  E$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => C0(n, o, c, i);
});
function Pv(n, a) {
  return new Gc({
    type: "template_literal",
    parts: n,
    ...I(a)
  });
}
var Pc = /* @__PURE__ */ z("ZodLazy", (n, a) => {
  D$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => rz(n, o, c, i), n.unwrap = () => n._zod.def.getter();
});
function Yc(n) {
  return new Pc({
    type: "lazy",
    getter: n
  });
}
var Vc = /* @__PURE__ */ z("ZodPromise", (n, a) => {
  O$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => az(n, o, c, i), n.unwrap = () => n._zod.def.innerType;
});
function Yv(n) {
  return new Vc({
    type: "promise",
    innerType: n
  });
}
var Qc = /* @__PURE__ */ z("ZodFunction", (n, a) => {
  U$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => L0(n, o, c, i);
});
function Qa(n) {
  return new Qc({
    type: "function",
    input: Array.isArray(n?.input) ? kc(n?.input) : n?.input ?? F(be()),
    output: n?.output ?? be()
  });
}
var sr = /* @__PURE__ */ z("ZodCustom", (n, a) => {
  Z$.init(n, a), ne.init(n, a), n._zod.processJSONSchema = (o, c, i) => H0(n, o, c, i);
});
function Vv(n) {
  const a = new Ge({ check: "custom" });
  return a._zod.check = n, a;
}
function Xc(n, a) {
  return /* @__PURE__ */ p0(sr, n ?? (() => !0), a);
}
function Kc(n, a = {}) {
  return /* @__PURE__ */ g0(sr, n, a);
}
function Fc(n, a) {
  return /* @__PURE__ */ h0(n, a);
}
var Qv = _0, Xv = b0;
function Kv(n, a = {}) {
  const o = new sr({
    type: "custom",
    check: "custom",
    fn: (c) => c instanceof n,
    abort: !0,
    ...I(a)
  });
  return o._zod.bag.Class = n, o._zod.check = (c) => {
    c.value instanceof n || c.issues.push({
      code: "invalid_type",
      expected: n.name,
      input: c.value,
      inst: o,
      path: [...o._zod.def.path ?? []]
    });
  }, o;
}
var Fv = (...n) => /* @__PURE__ */ S0({
  Codec: cr,
  Boolean: ir,
  String: er
}, ...n);
function Wv(n) {
  const a = Yc(() => le([
    T(n),
    te(),
    Te(),
    el(),
    F(a),
    he(T(), a)
  ]));
  return a;
}
function ol(n, a) {
  return new Lc({
    type: "pipe",
    in: il(n),
    out: a
  });
}
var mz = {
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
function vz(n) {
  rt({ customError: n });
}
function pz() {
  return rt().customError;
}
var Lu;
Lu || (Lu = {});
var B = {
  ...jw,
  ...Nw,
  iso: Nm
}, Aw = /* @__PURE__ */ new Set([
  "$schema",
  "$ref",
  "$defs",
  "definitions",
  "$id",
  "id",
  "$comment",
  "$anchor",
  "$vocabulary",
  "$dynamicRef",
  "$dynamicAnchor",
  "type",
  "enum",
  "const",
  "anyOf",
  "oneOf",
  "allOf",
  "not",
  "properties",
  "required",
  "additionalProperties",
  "patternProperties",
  "propertyNames",
  "minProperties",
  "maxProperties",
  "items",
  "prefixItems",
  "additionalItems",
  "minItems",
  "maxItems",
  "uniqueItems",
  "contains",
  "minContains",
  "maxContains",
  "minLength",
  "maxLength",
  "pattern",
  "format",
  "minimum",
  "maximum",
  "exclusiveMinimum",
  "exclusiveMaximum",
  "multipleOf",
  "description",
  "default",
  "contentEncoding",
  "contentMediaType",
  "contentSchema",
  "unevaluatedItems",
  "unevaluatedProperties",
  "if",
  "then",
  "else",
  "dependentSchemas",
  "dependentRequired",
  "nullable",
  "readOnly"
]);
function Iw(n, a) {
  const o = n.$schema;
  return o === "https://json-schema.org/draft/2020-12/schema" ? "draft-2020-12" : o === "http://json-schema.org/draft-07/schema#" ? "draft-7" : o === "http://json-schema.org/draft-04/schema#" ? "draft-4" : a ?? "draft-2020-12";
}
function Rw(n, a) {
  if (!n.startsWith("#")) throw new Error("External $ref is not supported, only local refs (#/...) are allowed");
  const o = n.slice(1).split("/").filter(Boolean);
  if (o.length === 0) return a.rootSchema;
  const c = a.version === "draft-2020-12" ? "$defs" : "definitions";
  if (o[0] === c) {
    const i = o[1];
    if (!i || !a.defs[i]) throw new Error(`Reference not found: ${n}`);
    return a.defs[i];
  }
  throw new Error(`Reference not found: ${n}`);
}
function gz(n, a) {
  if (n.not !== void 0) {
    if (typeof n.not == "object" && Object.keys(n.not).length === 0) return B.never();
    throw new Error("not is not supported in Zod (except { not: {} } for never)");
  }
  if (n.unevaluatedItems !== void 0) throw new Error("unevaluatedItems is not supported");
  if (n.unevaluatedProperties !== void 0) throw new Error("unevaluatedProperties is not supported");
  if (n.if !== void 0 || n.then !== void 0 || n.else !== void 0) throw new Error("Conditional schemas (if/then/else) are not supported");
  if (n.dependentSchemas !== void 0 || n.dependentRequired !== void 0) throw new Error("dependentSchemas and dependentRequired are not supported");
  if (n.$ref) {
    const i = n.$ref;
    if (a.refs.has(i)) return a.refs.get(i);
    if (a.processing.has(i)) return B.lazy(() => {
      if (!a.refs.has(i)) throw new Error(`Circular reference not resolved: ${i}`);
      return a.refs.get(i);
    });
    a.processing.add(i);
    const u = _t(Rw(i, a), a);
    return a.refs.set(i, u), a.processing.delete(i), u;
  }
  if (n.enum !== void 0) {
    const i = n.enum;
    if (a.version === "openapi-3.0" && n.nullable === !0 && i.length === 1 && i[0] === null) return B.null();
    if (i.length === 0) return B.never();
    if (i.length === 1) return B.literal(i[0]);
    if (i.every((d) => typeof d == "string")) return B.enum(i);
    const u = i.map((d) => B.literal(d));
    return u.length < 2 ? u[0] : B.union([
      u[0],
      u[1],
      ...u.slice(2)
    ]);
  }
  if (n.const !== void 0) return B.literal(n.const);
  const o = n.type;
  if (Array.isArray(o)) {
    const i = o.map((u) => gz({
      ...n,
      type: u
    }, a));
    return i.length === 0 ? B.never() : i.length === 1 ? i[0] : B.union(i);
  }
  if (!o) return B.any();
  let c;
  switch (o) {
    case "string": {
      let i = B.string();
      if (n.format) {
        const u = n.format;
        u === "email" ? i = i.check(B.email()) : u === "uri" || u === "uri-reference" ? i = i.check(B.url()) : u === "uuid" || u === "guid" ? i = i.check(B.uuid()) : u === "date-time" ? i = i.check(B.iso.datetime()) : u === "date" ? i = i.check(B.iso.date()) : u === "time" ? i = i.check(B.iso.time()) : u === "duration" ? i = i.check(B.iso.duration()) : u === "ipv4" ? i = i.check(B.ipv4()) : u === "ipv6" ? i = i.check(B.ipv6()) : u === "mac" ? i = i.check(B.mac()) : u === "cidr" ? i = i.check(B.cidrv4()) : u === "cidr-v6" ? i = i.check(B.cidrv6()) : u === "base64" ? i = i.check(B.base64()) : u === "base64url" ? i = i.check(B.base64url()) : u === "e164" ? i = i.check(B.e164()) : u === "jwt" ? i = i.check(B.jwt()) : u === "emoji" ? i = i.check(B.emoji()) : u === "nanoid" ? i = i.check(B.nanoid()) : u === "cuid" ? i = i.check(B.cuid()) : u === "cuid2" ? i = i.check(B.cuid2()) : u === "ulid" ? i = i.check(B.ulid()) : u === "xid" ? i = i.check(B.xid()) : u === "ksuid" && (i = i.check(B.ksuid()));
      }
      typeof n.minLength == "number" && (i = i.min(n.minLength)), typeof n.maxLength == "number" && (i = i.max(n.maxLength)), n.pattern && (i = i.regex(new RegExp(n.pattern))), c = i;
      break;
    }
    case "number":
    case "integer": {
      let i = o === "integer" ? B.number().int() : B.number();
      typeof n.minimum == "number" && (i = i.min(n.minimum)), typeof n.maximum == "number" && (i = i.max(n.maximum)), typeof n.exclusiveMinimum == "number" ? i = i.gt(n.exclusiveMinimum) : n.exclusiveMinimum === !0 && typeof n.minimum == "number" && (i = i.gt(n.minimum)), typeof n.exclusiveMaximum == "number" ? i = i.lt(n.exclusiveMaximum) : n.exclusiveMaximum === !0 && typeof n.maximum == "number" && (i = i.lt(n.maximum)), typeof n.multipleOf == "number" && (i = i.multipleOf(n.multipleOf)), c = i;
      break;
    }
    case "boolean":
      c = B.boolean();
      break;
    case "null":
      c = B.null();
      break;
    case "object": {
      const i = {}, u = n.properties || {}, d = new Set(n.required || []);
      for (const [y, g] of Object.entries(u)) {
        const h = _t(g, a);
        i[y] = d.has(y) ? h : h.optional();
      }
      if (n.propertyNames) {
        const y = _t(n.propertyNames, a), g = n.additionalProperties && typeof n.additionalProperties == "object" ? _t(n.additionalProperties, a) : B.any();
        if (Object.keys(i).length === 0) {
          c = B.record(y, g);
          break;
        }
        const h = B.object(i).passthrough(), U = B.looseRecord(y, g);
        c = B.intersection(h, U);
        break;
      }
      if (n.patternProperties) {
        const y = n.patternProperties, g = Object.keys(y), h = [];
        for (const w of g) {
          const q = _t(y[w], a), W = B.string().regex(new RegExp(w));
          h.push(B.looseRecord(W, q));
        }
        const U = [];
        if (Object.keys(i).length > 0 && U.push(B.object(i).passthrough()), U.push(...h), U.length === 0) c = B.object({}).passthrough();
        else if (U.length === 1) c = U[0];
        else {
          let w = B.intersection(U[0], U[1]);
          for (let q = 2; q < U.length; q++) w = B.intersection(w, U[q]);
          c = w;
        }
        break;
      }
      const m = B.object(i);
      n.additionalProperties === !1 ? c = m.strict() : typeof n.additionalProperties == "object" ? c = m.catchall(_t(n.additionalProperties, a)) : c = m.passthrough();
      break;
    }
    case "array": {
      const i = n.prefixItems, u = n.items;
      if (i && Array.isArray(i)) {
        const d = i.map((y) => _t(y, a)), m = u && typeof u == "object" && !Array.isArray(u) ? _t(u, a) : void 0;
        m ? c = B.tuple(d).rest(m) : c = B.tuple(d), typeof n.minItems == "number" && (c = c.check(B.minLength(n.minItems))), typeof n.maxItems == "number" && (c = c.check(B.maxLength(n.maxItems)));
      } else if (Array.isArray(u)) {
        const d = u.map((y) => _t(y, a)), m = n.additionalItems && typeof n.additionalItems == "object" ? _t(n.additionalItems, a) : void 0;
        m ? c = B.tuple(d).rest(m) : c = B.tuple(d), typeof n.minItems == "number" && (c = c.check(B.minLength(n.minItems))), typeof n.maxItems == "number" && (c = c.check(B.maxLength(n.maxItems)));
      } else if (u !== void 0) {
        const d = _t(u, a);
        let m = B.array(d);
        typeof n.minItems == "number" && (m = m.min(n.minItems)), typeof n.maxItems == "number" && (m = m.max(n.maxItems)), c = m;
      } else c = B.array(B.any());
      break;
    }
    default:
      throw new Error(`Unsupported type: ${o}`);
  }
  return c;
}
function _t(n, a) {
  if (typeof n == "boolean") return n ? B.any() : B.never();
  let o = gz(n, a);
  const c = n.type || n.enum !== void 0 || n.const !== void 0;
  if (n.anyOf && Array.isArray(n.anyOf)) {
    const u = n.anyOf.map((m) => _t(m, a)), d = B.union(u);
    o = c ? B.intersection(o, d) : d;
  }
  if (n.oneOf && Array.isArray(n.oneOf)) {
    const u = n.oneOf.map((m) => _t(m, a)), d = B.xor(u);
    o = c ? B.intersection(o, d) : d;
  }
  if (n.allOf && Array.isArray(n.allOf)) if (n.allOf.length === 0) o = c ? o : B.any();
  else {
    let u = c ? o : _t(n.allOf[0], a);
    const d = c ? 0 : 1;
    for (let m = d; m < n.allOf.length; m++) u = B.intersection(u, _t(n.allOf[m], a));
    o = u;
  }
  n.nullable === !0 && a.version === "openapi-3.0" && (o = B.nullable(o)), n.readOnly === !0 && (o = B.readonly(o)), n.default !== void 0 && (o = o.default(n.default));
  const i = {};
  for (const u of [
    "$id",
    "id",
    "$comment",
    "$anchor",
    "$vocabulary",
    "$dynamicRef",
    "$dynamicAnchor"
  ]) u in n && (i[u] = n[u]);
  for (const u of [
    "contentEncoding",
    "contentMediaType",
    "contentSchema"
  ]) u in n && (i[u] = n[u]);
  for (const u of Object.keys(n)) Aw.has(u) || (i[u] = n[u]);
  return Object.keys(i).length > 0 && a.registry.add(o, i), n.description && (o = o.describe(n.description)), o;
}
function hz(n, a) {
  if (typeof n == "boolean") return n ? B.any() : B.never();
  let o;
  try {
    o = JSON.parse(JSON.stringify(n));
  } catch {
    throw new Error("fromJSONSchema input is not valid JSON (possibly cyclic); use $defs/$ref for recursive schemas");
  }
  const c = {
    version: Iw(o, a?.defaultTarget),
    defs: o.$defs || o.definitions || {},
    refs: /* @__PURE__ */ new Map(),
    processing: /* @__PURE__ */ new Set(),
    rootSchema: o,
    registry: a?.registry ?? Jt
  };
  return _t(o, c);
}
var yz = /* @__PURE__ */ gn({
  bigint: () => Hw,
  boolean: () => qw,
  date: () => Lw,
  number: () => Mw,
  string: () => Cw
});
function Cw(n) {
  return /* @__PURE__ */ C$(er, n);
}
function Mw(n) {
  return /* @__PURE__ */ G$(nr, n);
}
function qw(n) {
  return /* @__PURE__ */ F$(ir, n);
}
function Hw(n) {
  return /* @__PURE__ */ e0(ar, n);
}
function Lw(n) {
  return /* @__PURE__ */ d0(tl, n);
}
var Bw = /* @__PURE__ */ gn({
  $brand: () => Of,
  $input: () => lm,
  $output: () => om,
  NEVER: () => Uf,
  TimePrecision: () => Em,
  ZodAny: () => pc,
  ZodArray: () => _c,
  ZodBase64: () => Qo,
  ZodBase64URL: () => Xo,
  ZodBigInt: () => ar,
  ZodBigIntFormat: () => Wo,
  ZodBoolean: () => ir,
  ZodCIDRv4: () => Yo,
  ZodCIDRv6: () => Vo,
  ZodCUID: () => qo,
  ZodCUID2: () => Ho,
  ZodCatch: () => Mc,
  ZodCodec: () => cr,
  ZodCustom: () => sr,
  ZodCustomStringFormat: () => Wi,
  ZodDate: () => tl,
  ZodDefault: () => Nc,
  ZodDiscriminatedUnion: () => Sc,
  ZodE164: () => Ko,
  ZodEmail: () => Ro,
  ZodEmoji: () => Co,
  ZodEnum: () => Xi,
  ZodError: () => fz,
  ZodExactOptional: () => Oc,
  ZodFile: () => Ec,
  ZodFirstPartyTypeKind: () => Lu,
  ZodFunction: () => Qc,
  ZodGUID: () => Pa,
  ZodIPv4: () => Go,
  ZodIPv6: () => Po,
  ZodISODate: () => uc,
  ZodISODateTime: () => lc,
  ZodISODuration: () => sc,
  ZodISOTime: () => cc,
  ZodIntersection: () => $c,
  ZodIssueCode: () => mz,
  ZodJWT: () => Fo,
  ZodKSUID: () => Jo,
  ZodLazy: () => Pc,
  ZodLiteral: () => xc,
  ZodMAC: () => dc,
  ZodMap: () => Tc,
  ZodNaN: () => Hc,
  ZodNanoID: () => Mo,
  ZodNever: () => hc,
  ZodNonOptional: () => rl,
  ZodNull: () => vc,
  ZodNullable: () => Zc,
  ZodNumber: () => nr,
  ZodNumberFormat: () => _i,
  ZodObject: () => rr,
  ZodOptional: () => al,
  ZodPipe: () => ur,
  ZodPrefault: () => Ac,
  ZodPreprocess: () => Lc,
  ZodPromise: () => Vc,
  ZodReadonly: () => Bc,
  ZodRealError: () => Zt,
  ZodRecord: () => Qi,
  ZodSet: () => wc,
  ZodString: () => er,
  ZodStringFormat: () => je,
  ZodSuccess: () => Cc,
  ZodSymbol: () => fc,
  ZodTemplateLiteral: () => Gc,
  ZodTransform: () => Uc,
  ZodTuple: () => zc,
  ZodType: () => ne,
  ZodULID: () => Lo,
  ZodURL: () => tr,
  ZodUUID: () => pn,
  ZodUndefined: () => mc,
  ZodUnion: () => or,
  ZodUnknown: () => gc,
  ZodVoid: () => yc,
  ZodXID: () => Bo,
  ZodXor: () => bc,
  _ZodString: () => Io,
  _default: () => jc,
  _function: () => Qa,
  any: () => Uv,
  array: () => F,
  base64: () => mv,
  base64url: () => vv,
  bigint: () => Tv,
  boolean: () => Te,
  catch: () => qc,
  check: () => Vv,
  cidrv4: () => dv,
  cidrv6: () => fv,
  clone: () => Yt,
  codec: () => Jv,
  coerce: () => yz,
  config: () => rt,
  core: () => oz,
  cuid: () => iv,
  cuid2: () => av,
  custom: () => Xc,
  date: () => Dv,
  decode: () => qm,
  decodeAsync: () => Lm,
  describe: () => Qv,
  discriminatedUnion: () => nl,
  e164: () => pv,
  email: () => Ym,
  emoji: () => tv,
  encode: () => Mm,
  encodeAsync: () => Hm,
  endsWith: () => xo,
  enum: () => vt,
  exactOptional: () => Dc,
  file: () => qv,
  flattenError: () => Xu,
  float32: () => Sv,
  float64: () => $v,
  formatError: () => Ku,
  fromJSONSchema: () => hz,
  function: () => Qa,
  getErrorMap: () => pz,
  globalRegistry: () => Jt,
  gt: () => Pn,
  gte: () => zt,
  guid: () => Vm,
  hash: () => bv,
  hex: () => _v,
  hostname: () => yv,
  httpUrl: () => ev,
  includes: () => To,
  instanceof: () => Kv,
  int: () => co,
  int32: () => zv,
  int64: () => wv,
  intersection: () => lr,
  invertCodec: () => Gv,
  ipv4: () => uv,
  ipv6: () => sv,
  iso: () => Nm,
  json: () => Wv,
  jwt: () => gv,
  keyof: () => Zv,
  ksuid: () => lv,
  lazy: () => Yc,
  length: () => Wa,
  literal: () => k,
  locales: () => rm,
  looseObject: () => mt,
  looseRecord: () => Iv,
  lowercase: () => zo,
  lt: () => Gn,
  lte: () => Gt,
  mac: () => cv,
  map: () => Rv,
  maxLength: () => Fa,
  maxSize: () => Fi,
  meta: () => Xv,
  mime: () => Eo,
  minLength: () => hi,
  minSize: () => Yn,
  multipleOf: () => Yi,
  nan: () => Bv,
  nanoid: () => nv,
  nativeEnum: () => Mv,
  negative: () => ic,
  never: () => Vi,
  nonnegative: () => rc,
  nonoptional: () => Rc,
  nonpositive: () => ac,
  normalize: () => Uo,
  null: () => el,
  nullable: () => Va,
  nullish: () => Hv,
  number: () => te,
  object: () => D,
  optional: () => Me,
  overwrite: () => kn,
  parse: () => Am,
  parseAsync: () => Im,
  partialRecord: () => Av,
  pipe: () => so,
  positive: () => nc,
  prefault: () => Ic,
  preprocess: () => ol,
  prettifyError: () => If,
  promise: () => Yv,
  property: () => oc,
  readonly: () => Jc,
  record: () => he,
  refine: () => Kc,
  regex: () => $o,
  regexes: () => Fu,
  registry: () => ec,
  safeDecode: () => Jm,
  safeDecodeAsync: () => Pm,
  safeEncode: () => Bm,
  safeEncodeAsync: () => Gm,
  safeParse: () => Rm,
  safeParseAsync: () => Cm,
  set: () => Cv,
  setErrorMap: () => vz,
  size: () => Ka,
  slugify: () => No,
  startsWith: () => wo,
  strictObject: () => Nv,
  string: () => T,
  stringFormat: () => hv,
  stringbool: () => Fv,
  success: () => Lv,
  superRefine: () => Fc,
  symbol: () => Ev,
  templateLiteral: () => Pv,
  toJSONSchema: () => Dm,
  toLowerCase: () => Do,
  toUpperCase: () => Zo,
  transform: () => il,
  treeifyError: () => Af,
  trim: () => Oo,
  tuple: () => kc,
  uint32: () => kv,
  uint64: () => xv,
  ulid: () => rv,
  undefined: () => Ya,
  union: () => le,
  unknown: () => be,
  uppercase: () => ko,
  url: () => Wm,
  util: () => Df,
  uuid: () => Qm,
  uuidv4: () => Xm,
  uuidv6: () => Km,
  uuidv7: () => Fm,
  void: () => Ov,
  xid: () => ov,
  xor: () => jv
});
rt(N$());
var Jw = /* @__PURE__ */ gn({
  $brand: () => Of,
  $input: () => lm,
  $output: () => om,
  NEVER: () => Uf,
  TimePrecision: () => Em,
  ZodAny: () => pc,
  ZodArray: () => _c,
  ZodBase64: () => Qo,
  ZodBase64URL: () => Xo,
  ZodBigInt: () => ar,
  ZodBigIntFormat: () => Wo,
  ZodBoolean: () => ir,
  ZodCIDRv4: () => Yo,
  ZodCIDRv6: () => Vo,
  ZodCUID: () => qo,
  ZodCUID2: () => Ho,
  ZodCatch: () => Mc,
  ZodCodec: () => cr,
  ZodCustom: () => sr,
  ZodCustomStringFormat: () => Wi,
  ZodDate: () => tl,
  ZodDefault: () => Nc,
  ZodDiscriminatedUnion: () => Sc,
  ZodE164: () => Ko,
  ZodEmail: () => Ro,
  ZodEmoji: () => Co,
  ZodEnum: () => Xi,
  ZodError: () => fz,
  ZodExactOptional: () => Oc,
  ZodFile: () => Ec,
  ZodFirstPartyTypeKind: () => Lu,
  ZodFunction: () => Qc,
  ZodGUID: () => Pa,
  ZodIPv4: () => Go,
  ZodIPv6: () => Po,
  ZodISODate: () => uc,
  ZodISODateTime: () => lc,
  ZodISODuration: () => sc,
  ZodISOTime: () => cc,
  ZodIntersection: () => $c,
  ZodIssueCode: () => mz,
  ZodJWT: () => Fo,
  ZodKSUID: () => Jo,
  ZodLazy: () => Pc,
  ZodLiteral: () => xc,
  ZodMAC: () => dc,
  ZodMap: () => Tc,
  ZodNaN: () => Hc,
  ZodNanoID: () => Mo,
  ZodNever: () => hc,
  ZodNonOptional: () => rl,
  ZodNull: () => vc,
  ZodNullable: () => Zc,
  ZodNumber: () => nr,
  ZodNumberFormat: () => _i,
  ZodObject: () => rr,
  ZodOptional: () => al,
  ZodPipe: () => ur,
  ZodPrefault: () => Ac,
  ZodPreprocess: () => Lc,
  ZodPromise: () => Vc,
  ZodReadonly: () => Bc,
  ZodRealError: () => Zt,
  ZodRecord: () => Qi,
  ZodSet: () => wc,
  ZodString: () => er,
  ZodStringFormat: () => je,
  ZodSuccess: () => Cc,
  ZodSymbol: () => fc,
  ZodTemplateLiteral: () => Gc,
  ZodTransform: () => Uc,
  ZodTuple: () => zc,
  ZodType: () => ne,
  ZodULID: () => Lo,
  ZodURL: () => tr,
  ZodUUID: () => pn,
  ZodUndefined: () => mc,
  ZodUnion: () => or,
  ZodUnknown: () => gc,
  ZodVoid: () => yc,
  ZodXID: () => Bo,
  ZodXor: () => bc,
  _ZodString: () => Io,
  _default: () => jc,
  _function: () => Qa,
  any: () => Uv,
  array: () => F,
  base64: () => mv,
  base64url: () => vv,
  bigint: () => Tv,
  boolean: () => Te,
  catch: () => qc,
  check: () => Vv,
  cidrv4: () => dv,
  cidrv6: () => fv,
  clone: () => Yt,
  codec: () => Jv,
  coerce: () => yz,
  config: () => rt,
  core: () => oz,
  cuid: () => iv,
  cuid2: () => av,
  custom: () => Xc,
  date: () => Dv,
  decode: () => qm,
  decodeAsync: () => Lm,
  describe: () => Qv,
  discriminatedUnion: () => nl,
  e164: () => pv,
  email: () => Ym,
  emoji: () => tv,
  encode: () => Mm,
  encodeAsync: () => Hm,
  endsWith: () => xo,
  enum: () => vt,
  exactOptional: () => Dc,
  file: () => qv,
  flattenError: () => Xu,
  float32: () => Sv,
  float64: () => $v,
  formatError: () => Ku,
  fromJSONSchema: () => hz,
  function: () => Qa,
  getErrorMap: () => pz,
  globalRegistry: () => Jt,
  gt: () => Pn,
  gte: () => zt,
  guid: () => Vm,
  hash: () => bv,
  hex: () => _v,
  hostname: () => yv,
  httpUrl: () => ev,
  includes: () => To,
  instanceof: () => Kv,
  int: () => co,
  int32: () => zv,
  int64: () => wv,
  intersection: () => lr,
  invertCodec: () => Gv,
  ipv4: () => uv,
  ipv6: () => sv,
  iso: () => Nm,
  json: () => Wv,
  jwt: () => gv,
  keyof: () => Zv,
  ksuid: () => lv,
  lazy: () => Yc,
  length: () => Wa,
  literal: () => k,
  locales: () => rm,
  looseObject: () => mt,
  looseRecord: () => Iv,
  lowercase: () => zo,
  lt: () => Gn,
  lte: () => Gt,
  mac: () => cv,
  map: () => Rv,
  maxLength: () => Fa,
  maxSize: () => Fi,
  meta: () => Xv,
  mime: () => Eo,
  minLength: () => hi,
  minSize: () => Yn,
  multipleOf: () => Yi,
  nan: () => Bv,
  nanoid: () => nv,
  nativeEnum: () => Mv,
  negative: () => ic,
  never: () => Vi,
  nonnegative: () => rc,
  nonoptional: () => Rc,
  nonpositive: () => ac,
  normalize: () => Uo,
  null: () => el,
  nullable: () => Va,
  nullish: () => Hv,
  number: () => te,
  object: () => D,
  optional: () => Me,
  overwrite: () => kn,
  parse: () => Am,
  parseAsync: () => Im,
  partialRecord: () => Av,
  pipe: () => so,
  positive: () => nc,
  prefault: () => Ic,
  preprocess: () => ol,
  prettifyError: () => If,
  promise: () => Yv,
  property: () => oc,
  readonly: () => Jc,
  record: () => he,
  refine: () => Kc,
  regex: () => $o,
  regexes: () => Fu,
  registry: () => ec,
  safeDecode: () => Jm,
  safeDecodeAsync: () => Pm,
  safeEncode: () => Bm,
  safeEncodeAsync: () => Gm,
  safeParse: () => Rm,
  safeParseAsync: () => Cm,
  set: () => Cv,
  setErrorMap: () => vz,
  size: () => Ka,
  slugify: () => No,
  startsWith: () => wo,
  strictObject: () => Nv,
  string: () => T,
  stringFormat: () => hv,
  stringbool: () => Fv,
  success: () => Lv,
  superRefine: () => Fc,
  symbol: () => Ev,
  templateLiteral: () => Pv,
  toJSONSchema: () => Dm,
  toLowerCase: () => Do,
  toUpperCase: () => Zo,
  transform: () => il,
  treeifyError: () => Af,
  trim: () => Oo,
  tuple: () => kc,
  uint32: () => kv,
  uint64: () => xv,
  ulid: () => rv,
  undefined: () => Ya,
  union: () => le,
  unknown: () => be,
  uppercase: () => ko,
  url: () => Wm,
  util: () => Df,
  uuid: () => Qm,
  uuidv4: () => Xm,
  uuidv6: () => Km,
  uuidv7: () => Fm,
  void: () => Ov,
  xid: () => ov,
  xor: () => jv,
  z: () => Bw
}), Bi = "io.modelcontextprotocol/related-task";
var at = Xc((n) => n !== null && (typeof n == "object" || typeof n == "function")), _z = le([T(), te().int()]), bz = T(), yU = mt({
  ttl: te().optional(),
  pollInterval: te().optional()
}), Gw = D({ ttl: te().optional() }), Pw = D({ taskId: T() }), ep = mt({
  progressToken: _z.optional(),
  [Bi]: Pw.optional()
}), Qt = D({ _meta: ep.optional() }), ll = Qt.extend({ task: Gw.optional() }), Yw = (n) => ll.safeParse(n).success, pt = D({
  method: T(),
  params: Qt.loose().optional()
}), cn = D({ _meta: ep.optional() }), sn = D({
  method: T(),
  params: cn.loose().optional()
}), gt = mt({ _meta: ep.optional() }), ul = le([T(), te().int()]), Sz = D({
  jsonrpc: k("2.0"),
  id: ul,
  ...pt.shape
}).strict(), H_ = (n) => Sz.safeParse(n).success, $z = D({
  jsonrpc: k("2.0"),
  ...sn.shape
}).strict(), Vw = (n) => $z.safeParse(n).success, tp = D({
  jsonrpc: k("2.0"),
  id: ul,
  result: gt
}).strict(), Iu = (n) => tp.safeParse(n).success, Ue;
(function(n) {
  n[n.ConnectionClosed = -32e3] = "ConnectionClosed", n[n.RequestTimeout = -32001] = "RequestTimeout", n[n.ParseError = -32700] = "ParseError", n[n.InvalidRequest = -32600] = "InvalidRequest", n[n.MethodNotFound = -32601] = "MethodNotFound", n[n.InvalidParams = -32602] = "InvalidParams", n[n.InternalError = -32603] = "InternalError", n[n.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
})(Ue || (Ue = {}));
var np = D({
  jsonrpc: k("2.0"),
  id: ul.optional(),
  error: D({
    code: te().int(),
    message: T(),
    data: be().optional()
  })
}).strict(), Qw = (n) => np.safeParse(n).success, Xw = le([
  Sz,
  $z,
  tp,
  np
]), _U = le([tp, np]), ip = gt.strict(), Kw = cn.extend({
  requestId: ul.optional(),
  reason: T().optional()
}), ap = sn.extend({
  method: k("notifications/cancelled"),
  params: Kw
}), Fw = D({
  src: T(),
  mimeType: T().optional(),
  sizes: F(T()).optional(),
  theme: vt(["light", "dark"]).optional()
}), cl = D({ icons: F(Fw).optional() }), Xa = D({
  name: T(),
  title: T().optional()
}), Wc = Xa.extend({
  ...Xa.shape,
  ...cl.shape,
  version: T(),
  websiteUrl: T().optional(),
  description: T().optional()
}), Ww = lr(D({ applyDefaults: Te().optional() }), he(T(), be())), ex = ol((n) => n && typeof n == "object" && !Array.isArray(n) && Object.keys(n).length === 0 ? { form: {} } : n, lr(D({
  form: Ww.optional(),
  url: at.optional()
}), he(T(), be()).optional())), tx = mt({
  list: at.optional(),
  cancel: at.optional(),
  requests: mt({
    sampling: mt({ createMessage: at.optional() }).optional(),
    elicitation: mt({ create: at.optional() }).optional()
  }).optional()
}), nx = mt({
  list: at.optional(),
  cancel: at.optional(),
  requests: mt({ tools: mt({ call: at.optional() }).optional() }).optional()
}), ix = D({
  experimental: he(T(), at).optional(),
  sampling: D({
    context: at.optional(),
    tools: at.optional()
  }).optional(),
  elicitation: ex.optional(),
  roots: D({ listChanged: Te().optional() }).optional(),
  tasks: tx.optional(),
  extensions: he(T(), at).optional()
}), ax = Qt.extend({
  protocolVersion: T(),
  capabilities: ix,
  clientInfo: Wc
}), rx = pt.extend({
  method: k("initialize"),
  params: ax
}), ox = D({
  experimental: he(T(), at).optional(),
  logging: at.optional(),
  completions: at.optional(),
  prompts: D({ listChanged: Te().optional() }).optional(),
  resources: D({
    subscribe: Te().optional(),
    listChanged: Te().optional()
  }).optional(),
  tools: D({ listChanged: Te().optional() }).optional(),
  tasks: nx.optional(),
  extensions: he(T(), at).optional()
}), lx = gt.extend({
  protocolVersion: T(),
  capabilities: ox,
  serverInfo: Wc,
  instructions: T().optional()
}), ux = sn.extend({
  method: k("notifications/initialized"),
  params: cn.optional()
}), es = pt.extend({
  method: k("ping"),
  params: Qt.optional()
}), cx = D({
  progress: te(),
  total: Me(te()),
  message: Me(T())
}), sx = D({
  ...cn.shape,
  ...cx.shape,
  progressToken: _z
}), rp = sn.extend({
  method: k("notifications/progress"),
  params: sx
}), dx = Qt.extend({ cursor: bz.optional() }), sl = pt.extend({ params: dx.optional() }), dl = gt.extend({ nextCursor: bz.optional() }), fx = vt([
  "working",
  "input_required",
  "completed",
  "failed",
  "cancelled"
]), fl = D({
  taskId: T(),
  status: fx,
  ttl: le([te(), el()]),
  createdAt: T(),
  lastUpdatedAt: T(),
  pollInterval: Me(te()),
  statusMessage: Me(T())
}), op = gt.extend({ task: fl }), mx = cn.merge(fl), Bu = sn.extend({
  method: k("notifications/tasks/status"),
  params: mx
}), lp = pt.extend({
  method: k("tasks/get"),
  params: Qt.extend({ taskId: T() })
}), up = gt.merge(fl), cp = pt.extend({
  method: k("tasks/result"),
  params: Qt.extend({ taskId: T() })
}), bU = gt.loose(), sp = sl.extend({ method: k("tasks/list") }), dp = dl.extend({ tasks: F(fl) }), fp = pt.extend({
  method: k("tasks/cancel"),
  params: Qt.extend({ taskId: T() })
}), vx = gt.merge(fl), zz = D({
  uri: T(),
  mimeType: Me(T()),
  _meta: he(T(), be()).optional()
}), kz = zz.extend({ text: T() }), mp = T().refine((n) => {
  try {
    return atob(n), !0;
  } catch {
    return !1;
  }
}, { message: "Invalid Base64 string" }), Tz = zz.extend({ blob: mp }), ml = vt(["user", "assistant"]), dr = D({
  audience: F(ml).optional(),
  priority: te().min(0).max(1).optional(),
  lastModified: jm({ offset: !0 }).optional()
}), wz = D({
  ...Xa.shape,
  ...cl.shape,
  uri: T(),
  description: Me(T()),
  mimeType: Me(T()),
  size: Me(te()),
  annotations: dr.optional(),
  _meta: Me(mt({}))
}), px = D({
  ...Xa.shape,
  ...cl.shape,
  uriTemplate: T(),
  description: Me(T()),
  mimeType: Me(T()),
  annotations: dr.optional(),
  _meta: Me(mt({}))
}), gx = sl.extend({ method: k("resources/list") }), xz = dl.extend({ resources: F(wz) }), hx = sl.extend({ method: k("resources/templates/list") }), yx = dl.extend({ resourceTemplates: F(px) }), vp = Qt.extend({ uri: T() }), _x = vp, bx = pt.extend({
  method: k("resources/read"),
  params: _x
}), Ez = gt.extend({ contents: F(le([kz, Tz])) }), Sx = sn.extend({
  method: k("notifications/resources/list_changed"),
  params: cn.optional()
}), $x = vp, zx = pt.extend({
  method: k("resources/subscribe"),
  params: $x
}), kx = vp, Tx = pt.extend({
  method: k("resources/unsubscribe"),
  params: kx
}), wx = cn.extend({ uri: T() }), xx = sn.extend({
  method: k("notifications/resources/updated"),
  params: wx
}), Ex = D({
  name: T(),
  description: Me(T()),
  required: Me(Te())
}), Ux = D({
  ...Xa.shape,
  ...cl.shape,
  description: Me(T()),
  arguments: Me(F(Ex)),
  _meta: Me(mt({}))
}), Ox = sl.extend({ method: k("prompts/list") }), Dx = dl.extend({ prompts: F(Ux) }), Zx = Qt.extend({
  name: T(),
  arguments: he(T(), T()).optional()
}), Nx = pt.extend({
  method: k("prompts/get"),
  params: Zx
}), pp = D({
  type: k("text"),
  text: T(),
  annotations: dr.optional(),
  _meta: he(T(), be()).optional()
}), gp = D({
  type: k("image"),
  data: mp,
  mimeType: T(),
  annotations: dr.optional(),
  _meta: he(T(), be()).optional()
}), hp = D({
  type: k("audio"),
  data: mp,
  mimeType: T(),
  annotations: dr.optional(),
  _meta: he(T(), be()).optional()
}), jx = D({
  type: k("tool_use"),
  name: T(),
  id: T(),
  input: he(T(), be()),
  _meta: he(T(), be()).optional()
}), Uz = D({
  type: k("resource"),
  resource: le([kz, Tz]),
  annotations: dr.optional(),
  _meta: he(T(), be()).optional()
}), Oz = wz.extend({ type: k("resource_link") }), vl = le([
  pp,
  gp,
  hp,
  Oz,
  Uz
]), Ax = D({
  role: ml,
  content: vl
}), Ix = gt.extend({
  description: T().optional(),
  messages: F(Ax)
}), Rx = sn.extend({
  method: k("notifications/prompts/list_changed"),
  params: cn.optional()
}), Cx = D({
  title: T().optional(),
  readOnlyHint: Te().optional(),
  destructiveHint: Te().optional(),
  idempotentHint: Te().optional(),
  openWorldHint: Te().optional()
}), Mx = D({ taskSupport: vt([
  "required",
  "optional",
  "forbidden"
]).optional() }), yp = D({
  ...Xa.shape,
  ...cl.shape,
  description: T().optional(),
  inputSchema: D({
    type: k("object"),
    properties: he(T(), at).optional(),
    required: F(T()).optional()
  }).catchall(be()),
  outputSchema: D({
    type: k("object"),
    properties: he(T(), at).optional(),
    required: F(T()).optional()
  }).catchall(be()).optional(),
  annotations: Cx.optional(),
  execution: Mx.optional(),
  _meta: he(T(), be()).optional()
}), Dz = sl.extend({ method: k("tools/list") }), qx = dl.extend({ tools: F(yp) }), ts = gt.extend({
  content: F(vl).default([]),
  structuredContent: he(T(), be()).optional(),
  isError: Te().optional()
}), SU = ts.or(gt.extend({ toolResult: be() })), Hx = ll.extend({
  name: T(),
  arguments: he(T(), be()).optional()
}), Zz = pt.extend({
  method: k("tools/call"),
  params: Hx
}), Lx = sn.extend({
  method: k("notifications/tools/list_changed"),
  params: cn.optional()
}), $U = D({
  autoRefresh: Te().default(!0),
  debounceMs: te().int().nonnegative().default(300)
}), Nz = vt([
  "debug",
  "info",
  "notice",
  "warning",
  "error",
  "critical",
  "alert",
  "emergency"
]), Bx = Qt.extend({ level: Nz }), Jx = pt.extend({
  method: k("logging/setLevel"),
  params: Bx
}), Gx = cn.extend({
  level: Nz,
  logger: T().optional(),
  data: be()
}), Px = sn.extend({
  method: k("notifications/message"),
  params: Gx
}), Yx = D({ name: T().optional() }), Vx = D({
  hints: F(Yx).optional(),
  costPriority: te().min(0).max(1).optional(),
  speedPriority: te().min(0).max(1).optional(),
  intelligencePriority: te().min(0).max(1).optional()
}), Qx = D({ mode: vt([
  "auto",
  "required",
  "none"
]).optional() }), Xx = D({
  type: k("tool_result"),
  toolUseId: T().describe("The unique identifier for the corresponding tool call."),
  content: F(vl).default([]),
  structuredContent: D({}).loose().optional(),
  isError: Te().optional(),
  _meta: he(T(), be()).optional()
}), Kx = nl("type", [
  pp,
  gp,
  hp
]), Ju = nl("type", [
  pp,
  gp,
  hp,
  jx,
  Xx
]), Fx = D({
  role: ml,
  content: le([Ju, F(Ju)]),
  _meta: he(T(), be()).optional()
}), Wx = ll.extend({
  messages: F(Fx),
  modelPreferences: Vx.optional(),
  systemPrompt: T().optional(),
  includeContext: vt([
    "none",
    "thisServer",
    "allServers"
  ]).optional(),
  temperature: te().optional(),
  maxTokens: te().int(),
  stopSequences: F(T()).optional(),
  metadata: at.optional(),
  tools: F(yp).optional(),
  toolChoice: Qx.optional()
}), eE = pt.extend({
  method: k("sampling/createMessage"),
  params: Wx
}), jz = gt.extend({
  model: T(),
  stopReason: Me(vt([
    "endTurn",
    "stopSequence",
    "maxTokens"
  ]).or(T())),
  role: ml,
  content: Kx
}), Az = gt.extend({
  model: T(),
  stopReason: Me(vt([
    "endTurn",
    "stopSequence",
    "maxTokens",
    "toolUse"
  ]).or(T())),
  role: ml,
  content: le([Ju, F(Ju)])
}), tE = D({
  type: k("boolean"),
  title: T().optional(),
  description: T().optional(),
  default: Te().optional()
}), nE = D({
  type: k("string"),
  title: T().optional(),
  description: T().optional(),
  minLength: te().optional(),
  maxLength: te().optional(),
  format: vt([
    "email",
    "uri",
    "date",
    "date-time"
  ]).optional(),
  default: T().optional()
}), iE = D({
  type: vt(["number", "integer"]),
  title: T().optional(),
  description: T().optional(),
  minimum: te().optional(),
  maximum: te().optional(),
  default: te().optional()
}), aE = D({
  type: k("string"),
  title: T().optional(),
  description: T().optional(),
  enum: F(T()),
  default: T().optional()
}), rE = D({
  type: k("string"),
  title: T().optional(),
  description: T().optional(),
  oneOf: F(D({
    const: T(),
    title: T()
  })),
  default: T().optional()
}), oE = D({
  type: k("string"),
  title: T().optional(),
  description: T().optional(),
  enum: F(T()),
  enumNames: F(T()).optional(),
  default: T().optional()
}), lE = le([aE, rE]), uE = D({
  type: k("array"),
  title: T().optional(),
  description: T().optional(),
  minItems: te().optional(),
  maxItems: te().optional(),
  items: D({
    type: k("string"),
    enum: F(T())
  }),
  default: F(T()).optional()
}), cE = D({
  type: k("array"),
  title: T().optional(),
  description: T().optional(),
  minItems: te().optional(),
  maxItems: te().optional(),
  items: D({ anyOf: F(D({
    const: T(),
    title: T()
  })) }),
  default: F(T()).optional()
}), sE = le([uE, cE]), dE = le([
  oE,
  lE,
  sE
]), fE = le([
  dE,
  tE,
  nE,
  iE
]), mE = ll.extend({
  mode: k("form").optional(),
  message: T(),
  requestedSchema: D({
    type: k("object"),
    properties: he(T(), fE),
    required: F(T()).optional()
  })
}), vE = ll.extend({
  mode: k("url"),
  message: T(),
  elicitationId: T(),
  url: T().url()
}), pE = le([mE, vE]), gE = pt.extend({
  method: k("elicitation/create"),
  params: pE
}), hE = cn.extend({ elicitationId: T() }), yE = sn.extend({
  method: k("notifications/elicitation/complete"),
  params: hE
}), _E = gt.extend({
  action: vt([
    "accept",
    "decline",
    "cancel"
  ]),
  content: ol((n) => n === null ? void 0 : n, he(T(), le([
    T(),
    te(),
    Te(),
    F(T())
  ])).optional())
}), bE = D({
  type: k("ref/resource"),
  uri: T()
}), SE = D({
  type: k("ref/prompt"),
  name: T()
}), $E = Qt.extend({
  ref: le([SE, bE]),
  argument: D({
    name: T(),
    value: T()
  }),
  context: D({ arguments: he(T(), T()).optional() }).optional()
}), zE = pt.extend({
  method: k("completion/complete"),
  params: $E
}), kE = gt.extend({ completion: mt({
  values: F(T()).max(100),
  total: Me(te().int()),
  hasMore: Me(Te())
}) }), TE = D({
  uri: T().startsWith("file://"),
  name: T().optional(),
  _meta: he(T(), be()).optional()
}), wE = pt.extend({
  method: k("roots/list"),
  params: Qt.optional()
}), xE = gt.extend({ roots: F(TE) }), EE = sn.extend({
  method: k("notifications/roots/list_changed"),
  params: cn.optional()
}), zU = le([
  es,
  rx,
  zE,
  Jx,
  Nx,
  Ox,
  gx,
  hx,
  bx,
  zx,
  Tx,
  Zz,
  Dz,
  lp,
  cp,
  sp,
  fp
]), kU = le([
  ap,
  rp,
  ux,
  EE,
  Bu
]), TU = le([
  ip,
  jz,
  Az,
  _E,
  xE,
  up,
  dp,
  op
]), wU = le([
  es,
  eE,
  gE,
  wE,
  lp,
  cp,
  sp,
  fp
]), xU = le([
  ap,
  rp,
  Px,
  xx,
  Sx,
  Lx,
  Rx,
  Bu,
  yE
]), EU = le([
  ip,
  lx,
  kE,
  Ix,
  Dx,
  xz,
  yx,
  Ez,
  ts,
  qx,
  up,
  dp,
  op
]), ze = class Iz extends Error {
  constructor(a, o, c) {
    super(`MCP error ${a}: ${o}`), this.code = a, this.data = c, this.name = "McpError";
  }
  static fromError(a, o, c) {
    if (a === Ue.UrlElicitationRequired && c) {
      const i = c;
      if (i.elicitations) return new UE(i.elicitations, o);
    }
    return new Iz(a, o, c);
  }
}, UE = class extends ze {
  constructor(n, a = `URL elicitation${n.length > 1 ? "s" : ""} required`) {
    super(Ue.UrlElicitationRequired, a, { elicitations: n });
  }
  get elicitations() {
    return this.data?.elicitations ?? [];
  }
};
function Li(n) {
  return n === "completed" || n === "failed" || n === "cancelled";
}
function L_(n) {
  const a = Dw(n)?.method;
  if (!a) throw new Error("Schema is missing a method literal");
  const o = Zw(a);
  if (typeof o != "string") throw new Error("Schema method literal must be a string");
  return o;
}
function B_(n, a) {
  const o = lz(n, a);
  if (!o.success) throw o.error;
  return o.data;
}
var OE = class {
  constructor(n) {
    this._options = n, this._requestMessageId = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this._requestHandlerAbortControllers = /* @__PURE__ */ new Map(), this._notificationHandlers = /* @__PURE__ */ new Map(), this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this._timeoutInfo = /* @__PURE__ */ new Map(), this._pendingDebouncedNotifications = /* @__PURE__ */ new Set(), this._taskProgressTokens = /* @__PURE__ */ new Map(), this._requestResolvers = /* @__PURE__ */ new Map(), this.setNotificationHandler(ap, (a) => {
      this._oncancel(a);
    }), this.setNotificationHandler(rp, (a) => {
      this._onprogress(a);
    }), this.setRequestHandler(es, (a) => ({})), this._taskStore = n?.taskStore, this._taskMessageQueue = n?.taskMessageQueue, this._taskStore && (this.setRequestHandler(lp, async (a, o) => {
      const c = await this._taskStore.getTask(a.params.taskId, o.sessionId);
      if (!c) throw new ze(Ue.InvalidParams, "Failed to retrieve task: Task not found");
      return { ...c };
    }), this.setRequestHandler(cp, async (a, o) => {
      const c = async () => {
        const i = a.params.taskId;
        if (this._taskMessageQueue) {
          let d;
          for (; d = await this._taskMessageQueue.dequeue(i, o.sessionId); ) {
            if (d.type === "response" || d.type === "error") {
              const m = d.message, y = m.id, g = this._requestResolvers.get(y);
              if (g)
                if (this._requestResolvers.delete(y), d.type === "response") g(m);
                else {
                  const h = m;
                  g(new ze(h.error.code, h.error.message, h.error.data));
                }
              else {
                const h = d.type === "response" ? "Response" : "Error";
                this._onerror(/* @__PURE__ */ new Error(`${h} handler missing for request ${y}`));
              }
              continue;
            }
            await this._transport?.send(d.message, { relatedRequestId: o.requestId });
          }
        }
        const u = await this._taskStore.getTask(i, o.sessionId);
        if (!u) throw new ze(Ue.InvalidParams, `Task not found: ${i}`);
        if (!Li(u.status))
          return await this._waitForTaskUpdate(i, o.signal), await c();
        if (Li(u.status)) {
          const d = await this._taskStore.getTaskResult(i, o.sessionId);
          return this._clearTaskQueue(i), {
            ...d,
            _meta: {
              ...d._meta,
              [Bi]: { taskId: i }
            }
          };
        }
        return await c();
      };
      return await c();
    }), this.setRequestHandler(sp, async (a, o) => {
      try {
        const { tasks: c, nextCursor: i } = await this._taskStore.listTasks(a.params?.cursor, o.sessionId);
        return {
          tasks: c,
          nextCursor: i,
          _meta: {}
        };
      } catch (c) {
        throw new ze(Ue.InvalidParams, `Failed to list tasks: ${c instanceof Error ? c.message : String(c)}`);
      }
    }), this.setRequestHandler(fp, async (a, o) => {
      try {
        const c = await this._taskStore.getTask(a.params.taskId, o.sessionId);
        if (!c) throw new ze(Ue.InvalidParams, `Task not found: ${a.params.taskId}`);
        if (Li(c.status)) throw new ze(Ue.InvalidParams, `Cannot cancel task in terminal status: ${c.status}`);
        await this._taskStore.updateTaskStatus(a.params.taskId, "cancelled", "Client cancelled task execution.", o.sessionId), this._clearTaskQueue(a.params.taskId);
        const i = await this._taskStore.getTask(a.params.taskId, o.sessionId);
        if (!i) throw new ze(Ue.InvalidParams, `Task not found after cancellation: ${a.params.taskId}`);
        return {
          _meta: {},
          ...i
        };
      } catch (c) {
        throw c instanceof ze ? c : new ze(Ue.InvalidRequest, `Failed to cancel task: ${c instanceof Error ? c.message : String(c)}`);
      }
    }));
  }
  async _oncancel(n) {
    n.params.requestId && this._requestHandlerAbortControllers.get(n.params.requestId)?.abort(n.params.reason);
  }
  _setupTimeout(n, a, o, c, i = !1) {
    this._timeoutInfo.set(n, {
      timeoutId: setTimeout(c, a),
      startTime: Date.now(),
      timeout: a,
      maxTotalTimeout: o,
      resetTimeoutOnProgress: i,
      onTimeout: c
    });
  }
  _resetTimeout(n) {
    const a = this._timeoutInfo.get(n);
    if (!a) return !1;
    const o = Date.now() - a.startTime;
    if (a.maxTotalTimeout && o >= a.maxTotalTimeout)
      throw this._timeoutInfo.delete(n), ze.fromError(Ue.RequestTimeout, "Maximum total timeout exceeded", {
        maxTotalTimeout: a.maxTotalTimeout,
        totalElapsed: o
      });
    return clearTimeout(a.timeoutId), a.timeoutId = setTimeout(a.onTimeout, a.timeout), !0;
  }
  _cleanupTimeout(n) {
    const a = this._timeoutInfo.get(n);
    a && (clearTimeout(a.timeoutId), this._timeoutInfo.delete(n));
  }
  async connect(n) {
    if (this._transport) throw new Error("Already connected to a transport. Call close() before connecting to a new transport, or use a separate Protocol instance per connection.");
    this._transport = n;
    const a = this.transport?.onclose;
    this._transport.onclose = () => {
      a?.(), this._onclose();
    };
    const o = this.transport?.onerror;
    this._transport.onerror = (i) => {
      o?.(i), this._onerror(i);
    };
    const c = this._transport?.onmessage;
    this._transport.onmessage = (i, u) => {
      c?.(i, u), Iu(i) || Qw(i) ? this._onresponse(i) : H_(i) ? this._onrequest(i, u) : Vw(i) ? this._onnotification(i) : this._onerror(/* @__PURE__ */ new Error(`Unknown message type: ${JSON.stringify(i)}`));
    }, await this._transport.start();
  }
  _onclose() {
    const n = this._responseHandlers;
    this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers.clear(), this._taskProgressTokens.clear(), this._pendingDebouncedNotifications.clear();
    for (const o of this._timeoutInfo.values()) clearTimeout(o.timeoutId);
    this._timeoutInfo.clear();
    for (const o of this._requestHandlerAbortControllers.values()) o.abort();
    this._requestHandlerAbortControllers.clear();
    const a = ze.fromError(Ue.ConnectionClosed, "Connection closed");
    this._transport = void 0, this.onclose?.();
    for (const o of n.values()) o(a);
  }
  _onerror(n) {
    this.onerror?.(n);
  }
  _onnotification(n) {
    const a = this._notificationHandlers.get(n.method) ?? this.fallbackNotificationHandler;
    a !== void 0 && Promise.resolve().then(() => a(n)).catch((o) => this._onerror(/* @__PURE__ */ new Error(`Uncaught error in notification handler: ${o}`)));
  }
  _onrequest(n, a) {
    const o = this._requestHandlers.get(n.method) ?? this.fallbackRequestHandler, c = this._transport, i = n.params?._meta?.[Bi]?.taskId;
    if (o === void 0) {
      const g = {
        jsonrpc: "2.0",
        id: n.id,
        error: {
          code: Ue.MethodNotFound,
          message: "Method not found"
        }
      };
      i && this._taskMessageQueue ? this._enqueueTaskMessage(i, {
        type: "error",
        message: g,
        timestamp: Date.now()
      }, c?.sessionId).catch((h) => this._onerror(/* @__PURE__ */ new Error(`Failed to enqueue error response: ${h}`))) : c?.send(g).catch((h) => this._onerror(/* @__PURE__ */ new Error(`Failed to send an error response: ${h}`)));
      return;
    }
    const u = new AbortController();
    this._requestHandlerAbortControllers.set(n.id, u);
    const d = Yw(n.params) ? n.params.task : void 0, m = this._taskStore ? this.requestTaskStore(n, c?.sessionId) : void 0, y = {
      signal: u.signal,
      sessionId: c?.sessionId,
      _meta: n.params?._meta,
      sendNotification: async (g) => {
        if (u.signal.aborted) return;
        const h = { relatedRequestId: n.id };
        i && (h.relatedTask = { taskId: i }), await this.notification(g, h);
      },
      sendRequest: async (g, h, U) => {
        if (u.signal.aborted) throw new ze(Ue.ConnectionClosed, "Request was cancelled");
        const w = {
          ...U,
          relatedRequestId: n.id
        };
        i && !w.relatedTask && (w.relatedTask = { taskId: i });
        const q = w.relatedTask?.taskId ?? i;
        return q && m && await m.updateTaskStatus(q, "input_required"), await this.request(g, h, w);
      },
      authInfo: a?.authInfo,
      requestId: n.id,
      requestInfo: a?.requestInfo,
      taskId: i,
      taskStore: m,
      taskRequestedTtl: d?.ttl,
      closeSSEStream: a?.closeSSEStream,
      closeStandaloneSSEStream: a?.closeStandaloneSSEStream
    };
    Promise.resolve().then(() => {
      d && this.assertTaskHandlerCapability(n.method);
    }).then(() => o(n, y)).then(async (g) => {
      if (u.signal.aborted) return;
      const h = {
        result: g,
        jsonrpc: "2.0",
        id: n.id
      };
      i && this._taskMessageQueue ? await this._enqueueTaskMessage(i, {
        type: "response",
        message: h,
        timestamp: Date.now()
      }, c?.sessionId) : await c?.send(h);
    }, async (g) => {
      if (u.signal.aborted) return;
      const h = {
        jsonrpc: "2.0",
        id: n.id,
        error: {
          code: Number.isSafeInteger(g.code) ? g.code : Ue.InternalError,
          message: g.message ?? "Internal error",
          ...g.data !== void 0 && { data: g.data }
        }
      };
      i && this._taskMessageQueue ? await this._enqueueTaskMessage(i, {
        type: "error",
        message: h,
        timestamp: Date.now()
      }, c?.sessionId) : await c?.send(h);
    }).catch((g) => this._onerror(/* @__PURE__ */ new Error(`Failed to send response: ${g}`))).finally(() => {
      this._requestHandlerAbortControllers.get(n.id) === u && this._requestHandlerAbortControllers.delete(n.id);
    });
  }
  _onprogress(n) {
    const { progressToken: a, ...o } = n.params, c = Number(a), i = this._progressHandlers.get(c);
    if (!i) {
      this._onerror(/* @__PURE__ */ new Error(`Received a progress notification for an unknown token: ${JSON.stringify(n)}`));
      return;
    }
    const u = this._responseHandlers.get(c), d = this._timeoutInfo.get(c);
    if (d && u && d.resetTimeoutOnProgress) try {
      this._resetTimeout(c);
    } catch (m) {
      this._responseHandlers.delete(c), this._progressHandlers.delete(c), this._cleanupTimeout(c), u(m);
      return;
    }
    i(o);
  }
  _onresponse(n) {
    const a = Number(n.id), o = this._requestResolvers.get(a);
    if (o) {
      this._requestResolvers.delete(a), Iu(n) ? o(n) : o(new ze(n.error.code, n.error.message, n.error.data));
      return;
    }
    const c = this._responseHandlers.get(a);
    if (c === void 0) {
      this._onerror(/* @__PURE__ */ new Error(`Received a response for an unknown message ID: ${JSON.stringify(n)}`));
      return;
    }
    this._responseHandlers.delete(a), this._cleanupTimeout(a);
    let i = !1;
    if (Iu(n) && n.result && typeof n.result == "object") {
      const u = n.result;
      if (u.task && typeof u.task == "object") {
        const d = u.task;
        typeof d.taskId == "string" && (i = !0, this._taskProgressTokens.set(d.taskId, a));
      }
    }
    i || this._progressHandlers.delete(a), Iu(n) ? c(n) : c(ze.fromError(n.error.code, n.error.message, n.error.data));
  }
  get transport() {
    return this._transport;
  }
  async close() {
    await this._transport?.close();
  }
  async *requestStream(n, a, o) {
    const { task: c } = o ?? {};
    if (!c) {
      try {
        yield {
          type: "result",
          result: await this.request(n, a, o)
        };
      } catch (u) {
        yield {
          type: "error",
          error: u instanceof ze ? u : new ze(Ue.InternalError, String(u))
        };
      }
      return;
    }
    let i;
    try {
      const u = await this.request(n, op, o);
      if (u.task)
        i = u.task.taskId, yield {
          type: "taskCreated",
          task: u.task
        };
      else throw new ze(Ue.InternalError, "Task creation did not return a task");
      for (; ; ) {
        const d = await this.getTask({ taskId: i }, o);
        if (yield {
          type: "taskStatus",
          task: d
        }, Li(d.status)) {
          d.status === "completed" ? yield {
            type: "result",
            result: await this.getTaskResult({ taskId: i }, a, o)
          } : d.status === "failed" ? yield {
            type: "error",
            error: new ze(Ue.InternalError, `Task ${i} failed`)
          } : d.status === "cancelled" && (yield {
            type: "error",
            error: new ze(Ue.InternalError, `Task ${i} was cancelled`)
          });
          return;
        }
        if (d.status === "input_required") {
          yield {
            type: "result",
            result: await this.getTaskResult({ taskId: i }, a, o)
          };
          return;
        }
        const m = d.pollInterval ?? this._options?.defaultTaskPollInterval ?? 1e3;
        await new Promise((y) => setTimeout(y, m)), o?.signal?.throwIfAborted();
      }
    } catch (u) {
      yield {
        type: "error",
        error: u instanceof ze ? u : new ze(Ue.InternalError, String(u))
      };
    }
  }
  request(n, a, o) {
    const { relatedRequestId: c, resumptionToken: i, onresumptiontoken: u, task: d, relatedTask: m } = o ?? {};
    return new Promise((y, g) => {
      const h = (Ae) => {
        g(Ae);
      };
      if (!this._transport) {
        h(/* @__PURE__ */ new Error("Not connected"));
        return;
      }
      if (this._options?.enforceStrictCapabilities === !0) try {
        this.assertCapabilityForMethod(n.method), d && this.assertTaskCapability(n.method);
      } catch (Ae) {
        h(Ae);
        return;
      }
      o?.signal?.throwIfAborted();
      const U = this._requestMessageId++, w = {
        ...n,
        jsonrpc: "2.0",
        id: U
      };
      o?.onprogress && (this._progressHandlers.set(U, o.onprogress), w.params = {
        ...n.params,
        _meta: {
          ...n.params?._meta || {},
          progressToken: U
        }
      }), d && (w.params = {
        ...w.params,
        task: d
      }), m && (w.params = {
        ...w.params,
        _meta: {
          ...w.params?._meta || {},
          [Bi]: m
        }
      });
      const q = (Ae) => {
        this._responseHandlers.delete(U), this._progressHandlers.delete(U), this._cleanupTimeout(U), this._transport?.send({
          jsonrpc: "2.0",
          method: "notifications/cancelled",
          params: {
            requestId: U,
            reason: String(Ae)
          }
        }, {
          relatedRequestId: c,
          resumptionToken: i,
          onresumptiontoken: u
        }).catch((Ie) => this._onerror(/* @__PURE__ */ new Error(`Failed to send cancellation: ${Ie}`))), g(Ae instanceof ze ? Ae : new ze(Ue.RequestTimeout, String(Ae)));
      };
      this._responseHandlers.set(U, (Ae) => {
        if (!o?.signal?.aborted) {
          if (Ae instanceof Error) return g(Ae);
          try {
            const Ie = lz(a, Ae.result);
            Ie.success ? y(Ie.data) : g(Ie.error);
          } catch (Ie) {
            g(Ie);
          }
        }
      }), o?.signal?.addEventListener("abort", () => {
        q(o?.signal?.reason);
      });
      const W = o?.timeout ?? 6e4, pe = () => q(ze.fromError(Ue.RequestTimeout, "Request timed out", { timeout: W }));
      this._setupTimeout(U, W, o?.maxTotalTimeout, pe, o?.resetTimeoutOnProgress ?? !1);
      const Qe = m?.taskId;
      if (Qe) {
        const Ae = (Ie) => {
          const Pe = this._responseHandlers.get(U);
          Pe ? Pe(Ie) : this._onerror(/* @__PURE__ */ new Error(`Response handler missing for side-channeled request ${U}`));
        };
        this._requestResolvers.set(U, Ae), this._enqueueTaskMessage(Qe, {
          type: "request",
          message: w,
          timestamp: Date.now()
        }).catch((Ie) => {
          this._cleanupTimeout(U), g(Ie);
        });
      } else this._transport.send(w, {
        relatedRequestId: c,
        resumptionToken: i,
        onresumptiontoken: u
      }).catch((Ae) => {
        this._cleanupTimeout(U), g(Ae);
      });
    });
  }
  async getTask(n, a) {
    return this.request({
      method: "tasks/get",
      params: n
    }, up, a);
  }
  async getTaskResult(n, a, o) {
    return this.request({
      method: "tasks/result",
      params: n
    }, a, o);
  }
  async listTasks(n, a) {
    return this.request({
      method: "tasks/list",
      params: n
    }, dp, a);
  }
  async cancelTask(n, a) {
    return this.request({
      method: "tasks/cancel",
      params: n
    }, vx, a);
  }
  async notification(n, a) {
    if (!this._transport) throw new Error("Not connected");
    this.assertNotificationCapability(n.method);
    const o = a?.relatedTask?.taskId;
    if (o) {
      const i = {
        ...n,
        jsonrpc: "2.0",
        params: {
          ...n.params,
          _meta: {
            ...n.params?._meta || {},
            [Bi]: a.relatedTask
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
    if ((this._options?.debouncedNotificationMethods ?? []).includes(n.method) && !n.params && !a?.relatedRequestId && !a?.relatedTask) {
      if (this._pendingDebouncedNotifications.has(n.method)) return;
      this._pendingDebouncedNotifications.add(n.method), Promise.resolve().then(() => {
        if (this._pendingDebouncedNotifications.delete(n.method), !this._transport) return;
        let i = {
          ...n,
          jsonrpc: "2.0"
        };
        a?.relatedTask && (i = {
          ...i,
          params: {
            ...i.params,
            _meta: {
              ...i.params?._meta || {},
              [Bi]: a.relatedTask
            }
          }
        }), this._transport?.send(i, a).catch((u) => this._onerror(u));
      });
      return;
    }
    let c = {
      ...n,
      jsonrpc: "2.0"
    };
    a?.relatedTask && (c = {
      ...c,
      params: {
        ...c.params,
        _meta: {
          ...c.params?._meta || {},
          [Bi]: a.relatedTask
        }
      }
    }), await this._transport.send(c, a);
  }
  setRequestHandler(n, a) {
    const o = L_(n);
    this.assertRequestHandlerCapability(o), this._requestHandlers.set(o, (c, i) => {
      const u = B_(n, c);
      return Promise.resolve(a(u, i));
    });
  }
  removeRequestHandler(n) {
    this._requestHandlers.delete(n);
  }
  assertCanSetRequestHandler(n) {
    if (this._requestHandlers.has(n)) throw new Error(`A request handler for ${n} already exists, which would be overridden`);
  }
  setNotificationHandler(n, a) {
    const o = L_(n);
    this._notificationHandlers.set(o, (c) => {
      const i = B_(n, c);
      return Promise.resolve(a(i));
    });
  }
  removeNotificationHandler(n) {
    this._notificationHandlers.delete(n);
  }
  _cleanupTaskProgressHandler(n) {
    const a = this._taskProgressTokens.get(n);
    a !== void 0 && (this._progressHandlers.delete(a), this._taskProgressTokens.delete(n));
  }
  async _enqueueTaskMessage(n, a, o) {
    if (!this._taskStore || !this._taskMessageQueue) throw new Error("Cannot enqueue task message: taskStore and taskMessageQueue are not configured");
    const c = this._options?.maxTaskQueueSize;
    await this._taskMessageQueue.enqueue(n, a, o, c);
  }
  async _clearTaskQueue(n, a) {
    if (this._taskMessageQueue) {
      const o = await this._taskMessageQueue.dequeueAll(n, a);
      for (const c of o) if (c.type === "request" && H_(c.message)) {
        const i = c.message.id, u = this._requestResolvers.get(i);
        u ? (u(new ze(Ue.InternalError, "Task cancelled or completed")), this._requestResolvers.delete(i)) : this._onerror(/* @__PURE__ */ new Error(`Resolver missing for request ${i} during task ${n} cleanup`));
      }
    }
  }
  async _waitForTaskUpdate(n, a) {
    let o = this._options?.defaultTaskPollInterval ?? 1e3;
    try {
      const c = await this._taskStore?.getTask(n);
      c?.pollInterval && (o = c.pollInterval);
    } catch {
    }
    return new Promise((c, i) => {
      if (a.aborted) {
        i(new ze(Ue.InvalidRequest, "Request cancelled"));
        return;
      }
      const u = setTimeout(c, o);
      a.addEventListener("abort", () => {
        clearTimeout(u), i(new ze(Ue.InvalidRequest, "Request cancelled"));
      }, { once: !0 });
    });
  }
  requestTaskStore(n, a) {
    const o = this._taskStore;
    if (!o) throw new Error("No task store configured");
    return {
      createTask: async (c) => {
        if (!n) throw new Error("No request provided");
        return await o.createTask(c, n.id, {
          method: n.method,
          params: n.params
        }, a);
      },
      getTask: async (c) => {
        const i = await o.getTask(c, a);
        if (!i) throw new ze(Ue.InvalidParams, "Failed to retrieve task: Task not found");
        return i;
      },
      storeTaskResult: async (c, i, u) => {
        await o.storeTaskResult(c, i, u, a);
        const d = await o.getTask(c, a);
        if (d) {
          const m = Bu.parse({
            method: "notifications/tasks/status",
            params: d
          });
          await this.notification(m), Li(d.status) && this._cleanupTaskProgressHandler(c);
        }
      },
      getTaskResult: (c) => o.getTaskResult(c, a),
      updateTaskStatus: async (c, i, u) => {
        const d = await o.getTask(c, a);
        if (!d) throw new ze(Ue.InvalidParams, `Task "${c}" not found - it may have been cleaned up`);
        if (Li(d.status)) throw new ze(Ue.InvalidParams, `Cannot update task "${c}" from terminal status "${d.status}" to "${i}". Terminal states (completed, failed, cancelled) cannot transition to other states.`);
        await o.updateTaskStatus(c, i, u, a);
        const m = await o.getTask(c, a);
        if (m) {
          const y = Bu.parse({
            method: "notifications/tasks/status",
            params: m
          });
          await this.notification(y), Li(m.status) && this._cleanupTaskProgressHandler(c);
        }
      },
      listTasks: (c) => o.listTasks(c, a)
    };
  }
};
function J_(n) {
  return n !== null && typeof n == "object" && !Array.isArray(n);
}
function DE(n, a) {
  const o = { ...n };
  for (const c in a) {
    const i = c, u = a[i];
    if (u === void 0) continue;
    const d = o[i];
    J_(d) && J_(u) ? o[i] = {
      ...d,
      ...u
    } : o[i] = u;
  }
  return o;
}
((n) => typeof Ca < "u" ? Ca : typeof Proxy < "u" ? new Proxy(n, { get: (a, o) => (typeof Ca < "u" ? Ca : a)[o] }) : n)(function(n) {
  if (typeof Ca < "u") return Ca.apply(this, arguments);
  throw Error('Dynamic require of "' + n + '" is not supported');
});
var ZE = class extends OE {
  _registeredMethods = /* @__PURE__ */ new Set();
  _eventSlots = /* @__PURE__ */ new Map();
  onEventDispatch(n, a) {
  }
  _ensureEventSlot(n) {
    let a = this._eventSlots.get(n);
    if (!a) {
      let o = this.eventSchemas[n];
      if (!o) throw Error(`Unknown event: ${String(n)}`);
      a = { listeners: [] }, this._eventSlots.set(n, a);
      let c = o.shape.method.value;
      this._registeredMethods.add(c);
      let i = a;
      super.setNotificationHandler(o, (u) => {
        let d = u.params;
        this.onEventDispatch(n, d), i.onHandler?.(d);
        for (let m of [...i.listeners]) m(d);
      });
    }
    return a;
  }
  setEventHandler(n, a) {
    let o = this._ensureEventSlot(n);
    o.onHandler && a && console.warn(`[MCP Apps] on${String(n)} handler replaced. Use addEventListener("${String(n)}", …) to add multiple listeners without replacing.`), o.onHandler = a;
  }
  getEventHandler(n) {
    return this._eventSlots.get(n)?.onHandler;
  }
  addEventListener(n, a) {
    this._ensureEventSlot(n).listeners.push(a);
  }
  removeEventListener(n, a) {
    let o = this._eventSlots.get(n);
    if (!o) return;
    let c = o.listeners.indexOf(a);
    c !== -1 && o.listeners.splice(c, 1);
  }
  setRequestHandler = (n, a) => {
    this._assertMethodNotRegistered(n, "setRequestHandler"), super.setRequestHandler(n, a);
  };
  setNotificationHandler = (n, a) => {
    this._assertMethodNotRegistered(n, "setNotificationHandler"), super.setNotificationHandler(n, a);
  };
  warnIfRequestHandlerReplaced(n, a, o) {
    a && o && console.warn(`[MCP Apps] ${n} handler replaced. Previous handler will no longer be called.`);
  }
  replaceRequestHandler = (n, a) => {
    let o = n.shape.method.value;
    this._registeredMethods.add(o), super.setRequestHandler(n, a);
  };
  _assertMethodNotRegistered(n, a) {
    let o = n.shape.method.value;
    if (this._registeredMethods.has(o)) throw Error(`Handler for "${o}" already registered (via ${a}). Use addEventListener() to attach multiple listeners, or the on* setter for replace semantics.`);
    this._registeredMethods.add(o);
  }
}, NE = "2026-01-26";
var jE = class {
  eventTarget;
  eventSource;
  messageListener;
  constructor(n = window.parent, a) {
    this.eventTarget = n, this.eventSource = a, this.messageListener = (o) => {
      if (a && o.source !== this.eventSource) {
        console.debug("Ignoring message from unknown source", o);
        return;
      }
      let c = Xw.safeParse(o.data);
      c.success ? (console.debug("Parsed message", c.data), this.onmessage?.(c.data)) : o.data?.jsonrpc !== "2.0" ? console.debug("Ignoring non-JSON-RPC message", c.error.message, o) : (console.error("Failed to parse message", c.error.message, o), this.onerror?.(Error("Invalid JSON-RPC message received: " + c.error.message)));
    };
  }
  async start() {
    window.addEventListener("message", this.messageListener);
  }
  async send(n, a) {
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
}, AE = le([k("light"), k("dark")]).describe("Color theme preference for the host environment."), fo = le([
  k("inline"),
  k("fullscreen"),
  k("pip")
]).describe("Display mode for UI presentation."), IE = le([
  k("--color-background-primary"),
  k("--color-background-secondary"),
  k("--color-background-tertiary"),
  k("--color-background-inverse"),
  k("--color-background-ghost"),
  k("--color-background-info"),
  k("--color-background-danger"),
  k("--color-background-success"),
  k("--color-background-warning"),
  k("--color-background-disabled"),
  k("--color-text-primary"),
  k("--color-text-secondary"),
  k("--color-text-tertiary"),
  k("--color-text-inverse"),
  k("--color-text-ghost"),
  k("--color-text-info"),
  k("--color-text-danger"),
  k("--color-text-success"),
  k("--color-text-warning"),
  k("--color-text-disabled"),
  k("--color-border-primary"),
  k("--color-border-secondary"),
  k("--color-border-tertiary"),
  k("--color-border-inverse"),
  k("--color-border-ghost"),
  k("--color-border-info"),
  k("--color-border-danger"),
  k("--color-border-success"),
  k("--color-border-warning"),
  k("--color-border-disabled"),
  k("--color-ring-primary"),
  k("--color-ring-secondary"),
  k("--color-ring-inverse"),
  k("--color-ring-info"),
  k("--color-ring-danger"),
  k("--color-ring-success"),
  k("--color-ring-warning"),
  k("--font-sans"),
  k("--font-mono"),
  k("--font-weight-normal"),
  k("--font-weight-medium"),
  k("--font-weight-semibold"),
  k("--font-weight-bold"),
  k("--font-text-xs-size"),
  k("--font-text-sm-size"),
  k("--font-text-md-size"),
  k("--font-text-lg-size"),
  k("--font-heading-xs-size"),
  k("--font-heading-sm-size"),
  k("--font-heading-md-size"),
  k("--font-heading-lg-size"),
  k("--font-heading-xl-size"),
  k("--font-heading-2xl-size"),
  k("--font-heading-3xl-size"),
  k("--font-text-xs-line-height"),
  k("--font-text-sm-line-height"),
  k("--font-text-md-line-height"),
  k("--font-text-lg-line-height"),
  k("--font-heading-xs-line-height"),
  k("--font-heading-sm-line-height"),
  k("--font-heading-md-line-height"),
  k("--font-heading-lg-line-height"),
  k("--font-heading-xl-line-height"),
  k("--font-heading-2xl-line-height"),
  k("--font-heading-3xl-line-height"),
  k("--border-radius-xs"),
  k("--border-radius-sm"),
  k("--border-radius-md"),
  k("--border-radius-lg"),
  k("--border-radius-xl"),
  k("--border-radius-full"),
  k("--border-width-regular"),
  k("--shadow-hairline"),
  k("--shadow-sm"),
  k("--shadow-md"),
  k("--shadow-lg")
]).describe("CSS variable keys available to MCP apps for theming."), RE = he(IE.describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`), le([T(), Ya()]).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`)).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`), UU = D({
  method: k("ui/open-link"),
  params: D({ url: T().describe("URL to open in the host's browser") })
}), CE = D({ isError: Te().optional().describe("True if the host failed to open the URL (e.g., due to security policy).") }).passthrough(), ME = D({ isError: Te().optional().describe("True if the download failed (e.g., user cancelled or host denied).") }).passthrough(), qE = D({ isError: Te().optional().describe("True if the host rejected or failed to deliver the message.") }).passthrough(), OU = D({
  method: k("ui/notifications/sandbox-proxy-ready"),
  params: D({})
}), _p = D({
  connectDomains: F(T()).optional().describe(`Origins for network requests (fetch/XHR/WebSocket).

- Maps to CSP \`connect-src\` directive
- Empty or omitted → no network connections (secure default)`),
  resourceDomains: F(T()).optional().describe("Origins for static resources (images, scripts, stylesheets, fonts, media).\n\n- Maps to CSP `img-src`, `script-src`, `style-src`, `font-src`, `media-src` directives\n- Wildcard subdomains supported: `https://*.example.com`\n- Empty or omitted → no network resources (secure default)"),
  frameDomains: F(T()).optional().describe("Origins for nested iframes.\n\n- Maps to CSP `frame-src` directive\n- Empty or omitted → no nested iframes allowed (`frame-src 'none'`)"),
  baseUriDomains: F(T()).optional().describe("Allowed base URIs for the document.\n\n- Maps to CSP `base-uri` directive\n- Empty or omitted → only same origin allowed (`base-uri 'self'`)")
}), bp = D({
  camera: D({}).optional().describe("Request camera access.\n\nMaps to Permission Policy `camera` feature."),
  microphone: D({}).optional().describe("Request microphone access.\n\nMaps to Permission Policy `microphone` feature."),
  geolocation: D({}).optional().describe("Request geolocation access.\n\nMaps to Permission Policy `geolocation` feature."),
  clipboardWrite: D({}).optional().describe("Request clipboard write access.\n\nMaps to Permission Policy `clipboard-write` feature.")
}), DU = D({
  method: k("ui/notifications/size-changed"),
  params: D({
    width: te().optional().describe("New width in pixels."),
    height: te().optional().describe("New height in pixels.")
  })
}), HE = D({
  method: k("ui/notifications/tool-input"),
  params: D({ arguments: he(T(), be().describe("Complete tool call arguments as key-value pairs.")).optional().describe("Complete tool call arguments as key-value pairs.") })
}), LE = D({
  method: k("ui/notifications/tool-input-partial"),
  params: D({ arguments: he(T(), be().describe("Partial tool call arguments (incomplete, may change).")).optional().describe("Partial tool call arguments (incomplete, may change).") })
}), BE = D({
  method: k("ui/notifications/tool-cancelled"),
  params: D({ reason: T().optional().describe('Optional reason for the cancellation (e.g., "user action", "timeout").') })
}), JE = D({ fonts: T().optional() }), GE = D({
  variables: RE.optional().describe("CSS variables for theming the app."),
  css: JE.optional().describe("CSS blocks that apps can inject.")
}), PE = D({
  method: k("ui/resource-teardown"),
  params: D({})
}), ZU = he(T(), be()), G_ = D({
  text: D({}).optional().describe("Host supports text content blocks."),
  image: D({}).optional().describe("Host supports image content blocks."),
  audio: D({}).optional().describe("Host supports audio content blocks."),
  resource: D({}).optional().describe("Host supports resource content blocks."),
  resourceLink: D({}).optional().describe("Host supports resource link content blocks."),
  structuredContent: D({}).optional().describe("Host supports structured content.")
}), NU = D({
  method: k("ui/notifications/request-teardown"),
  params: D({}).optional()
}), YE = D({
  experimental: D({}).optional().describe("Experimental features (structure TBD)."),
  openLinks: D({}).optional().describe("Host supports opening external URLs."),
  downloadFile: D({}).optional().describe("Host supports file downloads via ui/download-file."),
  serverTools: D({ listChanged: Te().optional().describe("Host supports tools/list_changed notifications.") }).optional().describe("Host can proxy tool calls to the MCP server."),
  serverResources: D({ listChanged: Te().optional().describe("Host supports resources/list_changed notifications.") }).optional().describe("Host can proxy resource reads to the MCP server."),
  logging: D({}).optional().describe("Host accepts log messages."),
  sandbox: D({
    permissions: bp.optional().describe("Permissions granted by the host (camera, microphone, geolocation)."),
    csp: _p.optional().describe("CSP domains approved by the host.")
  }).optional().describe("Sandbox configuration applied by the host."),
  updateModelContext: G_.optional().describe("Host accepts context updates (ui/update-model-context) to be included in the model's context for future turns."),
  message: G_.optional().describe("Host supports receiving content messages (ui/message) from the view."),
  sampling: D({ tools: D({}).optional().describe("Host supports tool use via `tools` and `toolChoice` parameters.") }).optional().describe("Host supports LLM sampling (sampling/createMessage) from the view.\nMirrors the MCP `ClientCapabilities.sampling` shape so hosts can pass it through.")
}), VE = D({
  experimental: D({}).optional().describe("Experimental features (structure TBD)."),
  tools: D({ listChanged: Te().optional().describe("App supports tools/list_changed notifications.") }).optional().describe("App exposes MCP-style tools that the host can call."),
  availableDisplayModes: F(fo).optional().describe("Display modes the app supports.")
}), jU = D({
  method: k("ui/notifications/initialized"),
  params: D({}).optional()
}), AU = D({
  csp: _p.optional().describe("Content Security Policy configuration for UI resources."),
  permissions: bp.optional().describe("Sandbox permissions requested by the UI resource."),
  domain: T().optional().describe(`Dedicated origin for view sandbox.

Useful when views need stable, dedicated origins for OAuth callbacks, CORS policies, or API key allowlists.

**Host-dependent:** The format and validation rules for this field are determined by each host. Servers MUST consult host-specific documentation for the expected domain format. Common patterns include:
- Hash-based subdomains (e.g., \`{hash}.claudemcpcontent.com\`)
- URL-derived subdomains (e.g., \`www-example-com.oaiusercontent.com\`)

If omitted, host uses default sandbox origin (typically per-conversation).`),
  prefersBorder: Te().optional().describe(`Visual boundary preference - true if view prefers a visible border.

Boolean requesting whether a visible border and background is provided by the host. Specifying an explicit value for this is recommended because hosts' defaults may vary.

- \`true\`: request visible border + background
- \`false\`: request no visible border + background
- omitted: host decides border`)
}), IU = D({
  method: k("ui/request-display-mode"),
  params: D({ mode: fo.describe("The display mode being requested.") })
}), QE = D({ mode: fo.describe("The display mode that was actually set. May differ from requested if not supported.") }).passthrough(), XE = le([k("model"), k("app")]).describe("Tool visibility scope - who can access the tool."), RU = D({
  resourceUri: T().optional(),
  visibility: F(XE).optional().describe(`Who can access this tool. Default: ["model", "app"]
- "model": Tool visible to and callable by the agent
- "app": Tool callable by the app from this server only`),
  csp: Vi().optional(),
  permissions: Vi().optional()
});
D({ mimeTypes: F(T()).optional().describe('Array of supported MIME types for UI resources.\nMust include `"text/html;profile=mcp-app"` for MCP Apps support.') });
var CU = D({
  method: k("ui/download-file"),
  params: D({ contents: F(le([Uz, Oz])).describe("Resource contents to download — embedded (inline data) or linked (host fetches). Uses standard MCP resource types.") })
}), MU = D({
  method: k("ui/message"),
  params: D({
    role: k("user").describe('Message role, currently only "user" is supported.'),
    content: F(vl).describe("Message content blocks (text, image, etc.).")
  })
}), qU = D({
  method: k("ui/notifications/sandbox-resource-ready"),
  params: D({
    html: T().describe("HTML content to load into the inner iframe."),
    sandbox: T().optional().describe("Optional override for the inner iframe's sandbox attribute."),
    csp: _p.optional().describe("CSP configuration from resource metadata."),
    permissions: bp.optional().describe("Sandbox permissions from resource metadata.")
  })
}), KE = D({
  method: k("ui/notifications/tool-result"),
  params: ts.describe("Standard MCP tool execution result.")
}), Rz = D({
  toolInfo: D({
    id: ul.optional().describe("JSON-RPC id of the tools/call request."),
    tool: yp.describe("Tool definition including name, inputSchema, etc.")
  }).optional().describe("Metadata of the tool call that instantiated this App."),
  theme: AE.optional().describe("Current color theme preference."),
  styles: GE.optional().describe("Style configuration for theming the app."),
  displayMode: fo.optional().describe("How the UI is currently displayed."),
  availableDisplayModes: F(fo).optional().describe("Display modes the host supports."),
  containerDimensions: le([D({ height: te().describe("Fixed container height in pixels.") }), D({ maxHeight: le([te(), Ya()]).optional().describe("Maximum container height in pixels.") })]).and(le([D({ width: te().describe("Fixed container width in pixels.") }), D({ maxWidth: le([te(), Ya()]).optional().describe("Maximum container width in pixels.") })])).optional().describe(`Container dimensions. Represents the dimensions of the iframe or other
container holding the app. Specify either width or maxWidth, and either height or maxHeight.`),
  locale: T().optional().describe("User's language and region preference in BCP 47 format."),
  timeZone: T().optional().describe("User's timezone in IANA format."),
  userAgent: T().optional().describe("Host application identifier."),
  platform: le([
    k("web"),
    k("desktop"),
    k("mobile")
  ]).optional().describe("Platform type for responsive design decisions."),
  deviceCapabilities: D({
    touch: Te().optional().describe("Whether the device supports touch input."),
    hover: Te().optional().describe("Whether the device supports hover interactions.")
  }).optional().describe("Device input capabilities."),
  safeAreaInsets: D({
    top: te().describe("Top safe area inset in pixels."),
    right: te().describe("Right safe area inset in pixels."),
    bottom: te().describe("Bottom safe area inset in pixels."),
    left: te().describe("Left safe area inset in pixels.")
  }).optional().describe("Mobile safe area boundaries in pixels.")
}).passthrough(), FE = D({
  method: k("ui/notifications/host-context-changed"),
  params: Rz.describe("Partial context update containing only changed fields.")
}), HU = D({
  method: k("ui/update-model-context"),
  params: D({
    content: F(vl).optional().describe("Context content blocks (text, image, etc.)."),
    structuredContent: he(T(), be().describe("Structured content for machine-readable context data.")).optional().describe("Structured content for machine-readable context data.")
  })
}), LU = D({
  method: k("ui/initialize"),
  params: D({
    appInfo: Wc.describe("App identification (name and version)."),
    appCapabilities: VE.describe("Features and capabilities this app provides."),
    protocolVersion: T().describe("Protocol version this app supports.")
  })
}), WE = D({
  protocolVersion: T().describe('Negotiated protocol version string (e.g., "2025-11-21").'),
  hostInfo: Wc.describe("Host application identification and version."),
  hostCapabilities: YE.describe("Features and capabilities provided by the host."),
  hostContext: Rz.describe("Rich context about the host environment.")
}).passthrough(), eU = { target: "draft-2020-12" };
async function P_(n, a) {
  let o = n["~standard"];
  if (o.jsonSchema) return o.jsonSchema[a](eU);
  if (o.vendor === "zod") {
    let { z: c } = await Promise.resolve().then(() => Jw);
    return c.toJSONSchema(n, { io: a });
  }
  throw Error(`Schema (vendor: ${o.vendor}) does not implement Standard JSON Schema (~standard.jsonSchema). Use a library that does (zod v4, ArkType, Valibot) or wrap your schema accordingly.`);
}
async function Y_(n, a, o = "") {
  let c = await n["~standard"].validate(a);
  if (c.issues) {
    let i = c.issues.map((u) => {
      let d = u.path?.map((m) => typeof m == "object" ? m.key : m).join(".");
      return d ? `${d}: ${u.message}` : u.message;
    }).join("; ");
    throw Error(o + i);
  }
  return c.value;
}
var tU = class Cz extends ZE {
  _appInfo;
  _capabilities;
  options;
  _hostCapabilities;
  _hostInfo;
  _hostContext;
  _registeredTools = {};
  _initializedSent = !1;
  _assertInitialized(a) {
    if (this._initializedSent) return;
    let o = `[ext-apps] App.${a}() called before connect() completed the ui/initialize handshake. Await app.connect() before calling this method, or move data loading to an ontoolresult handler.`;
    if (this.options?.strict) throw Error(o);
    console.warn(`${o}. This will throw in a future release.`);
  }
  eventSchemas = {
    toolinput: HE,
    toolinputpartial: LE,
    toolresult: KE,
    toolcancelled: BE,
    hostcontextchanged: FE
  };
  static ONE_SHOT_EVENTS = /* @__PURE__ */ new Set([
    "toolinput",
    "toolinputpartial",
    "toolresult",
    "toolcancelled"
  ]);
  _everHadListener = /* @__PURE__ */ new Set();
  _assertHandlerTiming(a) {
    if (!Cz.ONE_SHOT_EVENTS.has(a) || this._everHadListener.has(a) || (this._everHadListener.add(a), !this._initializedSent)) return;
    let o = `[ext-apps] "${String(a)}" handler registered after connect() completed the ui/initialize handshake. The host may have already sent this notification. Register handlers before calling app.connect().`;
    if (this.options?.strict) throw Error(o);
    console.warn(o);
  }
  setEventHandler(a, o) {
    o && this._assertHandlerTiming(a), super.setEventHandler(a, o);
  }
  addEventListener(a, o) {
    this._assertHandlerTiming(a), super.addEventListener(a, o);
  }
  onEventDispatch(a, o) {
    a === "hostcontextchanged" && (this._hostContext = {
      ...this._hostContext,
      ...o
    });
  }
  constructor(a, o = {}, c = { autoResize: !0 }) {
    super(c), this._appInfo = a, this._capabilities = o, this.options = c, c.allowUnsafeEval || rt({ jitless: !0 }), this.setRequestHandler(es, (i) => (console.log("Received ping:", i.params), {})), this.setEventHandler("hostcontextchanged", void 0);
  }
  registerCapabilities(a) {
    if (this.transport) throw Error("Cannot register capabilities after transport is established");
    this._capabilities = DE(this._capabilities, a);
  }
  registerTool(a, o, c) {
    if (this._registeredTools[a]) throw Error(`Tool ${a} is already registered`);
    let i = this, u = () => {
      i._initializedSent && i._capabilities.tools?.listChanged && i.sendToolListChanged();
    }, d = o.inputSchema !== void 0, m = {
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
      update(y) {
        Object.assign(this, y), u();
      },
      remove() {
        i._registeredTools[a] === m && (delete i._registeredTools[a], u());
      },
      handler: async (y, g) => {
        if (!m.enabled) throw Error(`Tool ${a} is disabled`);
        let h;
        if (d) {
          let U = m.inputSchema;
          h = await c(U ? await Y_(U, y ?? {}, `Invalid input for tool ${a}: `) : y ?? {}, g);
        } else h = await c(g);
        return m.outputSchema && !h.isError && (h.structuredContent = await Y_(m.outputSchema, h.structuredContent, `Invalid output for tool ${a}: `)), h;
      }
    };
    return this._registeredTools[a] = m, !this._capabilities.tools && !this.transport && this.registerCapabilities({ tools: { listChanged: !0 } }), this.ensureToolHandlersInitialized(), u(), m;
  }
  _toolHandlersInitialized = !1;
  ensureToolHandlersInitialized() {
    this._toolHandlersInitialized || (this._toolHandlersInitialized = !0, this.oncalltool = async (a, o) => {
      let c = this._registeredTools[a.name];
      if (!c) throw Error(`Tool ${a.name} not found`);
      return c.handler(a.arguments, o);
    }, this.onlisttools = async (a, o) => ({ tools: await Promise.all(Object.entries(this._registeredTools).filter(([c, i]) => i.enabled).map(async ([c, i]) => {
      let u = {
        name: c,
        title: i.title,
        description: i.description,
        inputSchema: i.inputSchema ? await P_(i.inputSchema, "input") : {
          type: "object",
          properties: {}
        }
      };
      return i.outputSchema && (u.outputSchema = await P_(i.outputSchema, "output")), i.annotations && (u.annotations = i.annotations), i._meta && (u._meta = i._meta), u;
    })) }));
  }
  async sendToolListChanged(a = {}) {
    this._assertInitialized("sendToolListChanged"), await this.notification({
      method: "notifications/tools/list_changed",
      params: a
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
  set ontoolinput(a) {
    this.setEventHandler("toolinput", a);
  }
  get ontoolinputpartial() {
    return this.getEventHandler("toolinputpartial");
  }
  set ontoolinputpartial(a) {
    this.setEventHandler("toolinputpartial", a);
  }
  get ontoolresult() {
    return this.getEventHandler("toolresult");
  }
  set ontoolresult(a) {
    this.setEventHandler("toolresult", a);
  }
  get ontoolcancelled() {
    return this.getEventHandler("toolcancelled");
  }
  set ontoolcancelled(a) {
    this.setEventHandler("toolcancelled", a);
  }
  get onhostcontextchanged() {
    return this.getEventHandler("hostcontextchanged");
  }
  set onhostcontextchanged(a) {
    this.setEventHandler("hostcontextchanged", a);
  }
  _onteardown;
  get onteardown() {
    return this._onteardown;
  }
  set onteardown(a) {
    this.warnIfRequestHandlerReplaced("onteardown", this._onteardown, a), this._onteardown = a, this.replaceRequestHandler(PE, (o, c) => {
      if (!this._onteardown) throw Error("No onteardown handler set");
      return this._onteardown(o.params, c);
    });
  }
  _oncalltool;
  get oncalltool() {
    return this._oncalltool;
  }
  set oncalltool(a) {
    this.warnIfRequestHandlerReplaced("oncalltool", this._oncalltool, a), this._oncalltool = a, this.replaceRequestHandler(Zz, (o, c) => {
      if (!this._oncalltool) throw Error("No oncalltool handler set");
      return this._oncalltool(o.params, c);
    });
  }
  _onlisttools;
  get onlisttools() {
    return this._onlisttools;
  }
  set onlisttools(a) {
    this.warnIfRequestHandlerReplaced("onlisttools", this._onlisttools, a), this._onlisttools = a, this.replaceRequestHandler(Dz, (o, c) => {
      if (!this._onlisttools) throw Error("No onlisttools handler set");
      return this._onlisttools(o.params, c);
    });
  }
  assertCapabilityForMethod(a) {
    switch (a) {
      case "sampling/createMessage":
        if (!this._hostCapabilities?.sampling) throw Error(`Host does not support sampling (required for ${a})`);
        break;
    }
  }
  assertRequestHandlerCapability(a) {
    switch (a) {
      case "tools/call":
      case "tools/list":
        if (!this._capabilities.tools) throw Error(`Client does not support tool capability (required for ${a})`);
        return;
      case "ping":
      case "ui/resource-teardown":
        return;
      default:
        throw Error(`No handler for method ${a} registered`);
    }
  }
  assertNotificationCapability(a) {
  }
  assertTaskCapability(a) {
    throw Error("Tasks are not supported in MCP Apps");
  }
  assertTaskHandlerCapability(a) {
    throw Error("Task handlers are not supported in MCP Apps");
  }
  async callServerTool(a, o) {
    if (this._assertInitialized("callServerTool"), typeof a == "string") throw Error(`callServerTool() expects an object as its first argument, but received a string ("${a}"). Did you mean: callServerTool({ name: "${a}", arguments: { ... } })?`);
    return await this.request({
      method: "tools/call",
      params: a
    }, ts, {
      onprogress: () => {
      },
      resetTimeoutOnProgress: !0,
      ...o
    });
  }
  async readServerResource(a, o) {
    return this._assertInitialized("readServerResource"), await this.request({
      method: "resources/read",
      params: a
    }, Ez, o);
  }
  async listServerResources(a, o) {
    return this._assertInitialized("listServerResources"), await this.request({
      method: "resources/list",
      params: a
    }, xz, o);
  }
  async createSamplingMessage(a, o) {
    this._assertInitialized("createSamplingMessage");
    let c = a.tools ? Az : jz;
    return await this.request({
      method: "sampling/createMessage",
      params: a
    }, c, o);
  }
  sendMessage(a, o) {
    return this._assertInitialized("sendMessage"), this.request({
      method: "ui/message",
      params: a
    }, qE, o);
  }
  sendLog(a) {
    return this.notification({
      method: "notifications/message",
      params: a
    });
  }
  updateModelContext(a, o) {
    return this._assertInitialized("updateModelContext"), this.request({
      method: "ui/update-model-context",
      params: a
    }, ip, o);
  }
  openLink(a, o) {
    return this._assertInitialized("openLink"), this.request({
      method: "ui/open-link",
      params: a
    }, CE, o);
  }
  sendOpenLink = this.openLink;
  downloadFile(a, o) {
    return this._assertInitialized("downloadFile"), this.request({
      method: "ui/download-file",
      params: a
    }, ME, o);
  }
  requestTeardown(a = {}) {
    return this.notification({
      method: "ui/notifications/request-teardown",
      params: a
    });
  }
  requestDisplayMode(a, o) {
    return this._assertInitialized("requestDisplayMode"), this.request({
      method: "ui/request-display-mode",
      params: a
    }, QE, o);
  }
  sendSizeChanged(a) {
    return this.notification({
      method: "ui/notifications/size-changed",
      params: a
    });
  }
  setupSizeChangedNotifications() {
    let a = !1, o = 0, c = 0, i = () => {
      a || (a = !0, requestAnimationFrame(() => {
        a = !1;
        let d = document.documentElement, m = d.style.height;
        d.style.height = "max-content";
        let y = Math.ceil(d.getBoundingClientRect().height);
        d.style.height = m;
        let g = Math.ceil(window.innerWidth);
        (g !== o || y !== c) && (o = g, c = y, this.sendSizeChanged({
          width: g,
          height: y
        }));
      }));
    };
    i();
    let u = new ResizeObserver(i);
    return u.observe(document.documentElement), u.observe(document.body), () => u.disconnect();
  }
  async connect(a = new jE(window.parent, window.parent), o) {
    if (this.transport) throw Error("App is already connected. Call close() before connecting again.");
    this._initializedSent = !1, await super.connect(a);
    try {
      let c = await this.request({
        method: "ui/initialize",
        params: {
          appCapabilities: this._capabilities,
          appInfo: this._appInfo,
          protocolVersion: NE
        }
      }, WE, o);
      if (c === void 0) throw Error(`Server sent invalid initialize result: ${c}`);
      this._hostCapabilities = c.hostCapabilities, this._hostInfo = c.hostInfo, this._hostContext = c.hostContext, await this.notification({ method: "ui/notifications/initialized" }), this._initializedSent = !0, this.options?.autoResize && this.setupSizeChangedNotifications();
    } catch (c) {
      throw this.close(), c;
    }
  }
}, nU = 15e3, V_;
function iU(n = {}) {
  const a = n.targetWindow ?? (typeof window < "u" && window.parent !== window ? window.parent : void 0), o = n.targetOrigin ?? "*", c = /* @__PURE__ */ new Map();
  let i = 1;
  function u(m) {
    if (!dU(m.data)) return;
    const y = m.data;
    if ("id" in y && y.id !== void 0 && ("result" in y || "error" in y)) {
      const g = c.get(y.id);
      if (!g) return;
      if (c.delete(y.id), clearTimeout(g.timeout), y.error) {
        g.reject(new Error(y.error.message));
        return;
      }
      g.resolve(y.result ?? null);
      return;
    }
    "method" in y && typeof y.method == "string" && n.onNotification?.(y);
  }
  typeof window < "u" && window.addEventListener("message", u);
  function d(m) {
    a?.postMessage(m, o);
  }
  return {
    initialize(m = null) {
      return this.request("ui/initialize", m);
    },
    callTool(m, y = null) {
      return this.request("tools/call", {
        name: m,
        arguments: y
      });
    },
    request(m, y = null) {
      if (!a) return Promise.reject(/* @__PURE__ */ new Error("No MCP Apps host window is available"));
      const g = `${n.source ?? "micro-app"}-${i++}`, h = setTimeout(() => {
        const w = c.get(g);
        w && (c.delete(g), w.reject(/* @__PURE__ */ new Error(`MCP request timed out: ${m}`)));
      }, n.timeoutMs ?? nU), U = new Promise((w, q) => {
        c.set(g, {
          resolve: w,
          reject: q,
          timeout: h
        });
      });
      return d({
        jsonrpc: "2.0",
        id: g,
        method: m,
        params: y
      }), U;
    },
    notify(m, y = null) {
      a && d({
        jsonrpc: "2.0",
        method: m,
        params: y
      });
    },
    dispose() {
      typeof window < "u" && window.removeEventListener("message", u);
      for (const m of c.values())
        clearTimeout(m.timeout), m.reject(/* @__PURE__ */ new Error("MCP bridge disposed"));
      c.clear();
    }
  };
}
function aU() {
  return V_ ??= iU(), V_;
}
function rU(n, a) {
  aU().notify(n, a);
}
async function oU(n) {
  if (typeof window > "u" || window.parent === window) return Q_("standalone");
  typeof window < "u" && (window.__MCP_RUNTIME_CONNECTED__ = !0);
  try {
    const a = new tU({
      name: n.name,
      version: n.version
    }, n.capabilities ?? {}, {
      autoResize: !0,
      strict: !1,
      ...n.appOptions
    });
    return cU(a, n.handlers), await sU(a.connect(), n.timeoutMs ?? 1e4, "MCP Apps host connection timed out"), {
      status: "connected",
      app: a,
      getHostContext() {
        return a.getHostContext();
      },
      getHostCapabilities() {
        return a.getHostCapabilities();
      },
      getHostInfo() {
        return a.getHostVersion();
      },
      async requestHostCompletion(o, c) {
        return Mz((await a.createSamplingMessage({
          messages: [{
            role: "user",
            content: {
              type: "text",
              text: o
            }
          }],
          maxTokens: 320,
          systemPrompt: c
        })).content);
      },
      createSamplingMessage(o) {
        return a.createSamplingMessage(o);
      },
      sendHostMessage(o, c) {
        return a.sendMessage(lU(o, c));
      },
      sendMessage(o) {
        return a.sendMessage(o);
      },
      async sendLog(o, c) {
        await a.sendLog({
          level: o,
          data: c
        });
      },
      updateModelContext(o) {
        return a.updateModelContext(uU(o));
      },
      callServerTool(o, c = {}) {
        return a.callServerTool({
          name: o,
          arguments: c
        });
      },
      callServerToolWithParams(o) {
        return a.callServerTool(o);
      },
      readServerResource(o) {
        return a.readServerResource(typeof o == "string" ? { uri: o } : o);
      },
      listServerResources(o) {
        return a.listServerResources(o);
      },
      openLink(o) {
        return a.openLink(typeof o == "string" ? { url: o } : o);
      },
      downloadFile(o) {
        return a.downloadFile(o);
      },
      requestDisplayMode(o) {
        return a.requestDisplayMode(typeof o == "string" ? { mode: o } : o);
      },
      requestTeardown() {
        return a.requestTeardown();
      },
      sendSizeChanged(o) {
        return a.sendSizeChanged(o);
      },
      async dispose() {
        await a.close?.();
      }
    };
  } catch (a) {
    return Q_("error", a);
  }
}
function Q_(n, a) {
  return {
    status: n,
    error: a instanceof Error ? a : a ? new Error(String(a)) : void 0,
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
function lU(n, a) {
  return {
    role: "user",
    content: [{
      type: "text",
      text: a ? `${a}

${n}` : n
    }]
  };
}
function uU(n) {
  return typeof n != "string" ? n : { content: [{
    type: "text",
    text: n
  }] };
}
function cU(n, a = {}) {
  n.ontoolinput = a.onToolInput, n.ontoolinputpartial = a.onToolInputPartial, n.ontoolresult = a.onToolResult, n.ontoolcancelled = a.onToolCancelled, n.onhostcontextchanged = a.onHostContextChanged, a.onTeardown && (n.onteardown = async () => a.onTeardown?.() ?? {});
}
async function sU(n, a, o) {
  let c;
  try {
    return await Promise.race([n, new Promise((i, u) => {
      c = setTimeout(() => u(new Error(o)), a);
    })]);
  } finally {
    c && clearTimeout(c);
  }
}
function Mz(n) {
  return typeof n == "string" ? n : n ? Array.isArray(n) ? n.map((a) => Mz(a)).filter(Boolean).join(`
`) : typeof n == "object" && "text" in n && typeof n.text == "string" ? n.text : "" : "";
}
function dU(n) {
  return !!(n && typeof n == "object" && "jsonrpc" in n && n.jsonrpc === "2.0");
}
function fU(n) {
  return n instanceof Error ? {
    name: n.name,
    message: n.message,
    stack: n.stack
  } : { message: typeof n == "string" ? n : "Unknown runtime error" };
}
function X_({ app: n, error: a, logger: o, source: c = "runtime", metadata: i }) {
  const u = {
    level: "error",
    message: `${n.name} failed in ${c}`,
    appId: n.id,
    source: c,
    error: fU(a),
    metadata: i,
    timestamp: Date.now()
  };
  return Sf.emit($f.APP_ERROR, n.id, u), o?.log(u), u;
}
function mU(n, a, o = {}) {
  const c = customElements.get(n);
  if (c) return c;
  class i extends HTMLElement {
    static observedAttributes = o.observedAttributes ?? [];
    cleanup;
    async connectedCallback() {
      const d = this.createContext();
      console.log(`[Platform SDK] connectedCallback triggered for: ${d.app.id}`);
      let m = null;
      typeof window < "u" && window.parent !== window && !window.__MCP_RUNTIME_CONNECTED__ && (console.log(`[Platform SDK] Auto-connecting to MCP runtime for: ${d.app.id}...`), m = oU({
        name: d.app.name,
        version: d.app.version ?? "1.0.0",
        capabilities: {
          sampling: {},
          serverTools: {},
          modelContext: {}
        }
      }).then((y) => {
        console.log(`[Platform SDK] connectOfficialMcpAppRuntime finished for: ${d.app.id}. Status:`, y.status);
        const g = window.__MICRO_APP_CONTEXT__?.app?.capabilities?.mcpApps;
        return console.log(`[Platform SDK] Notifying ui/ready for: ${d.app.id} with tools:`, g?.tools, "resources:", g?.resources), rU("ui/ready", {
          appId: d.app.id,
          tools: g?.tools ?? [],
          resources: g?.resources ?? [],
          prompts: g?.prompts ?? []
        }), y;
      }).catch((y) => (console.warn(`[Platform SDK] Auto-connecting to MCP runtime for ${d.app.id} failed:`, y), null)));
      try {
        const y = await a.mount(this, d);
        this.cleanup = typeof y == "function" ? y : void 0, await vU(), m && await m, this.dispatchEvent(new CustomEvent("micro-app:ready", {
          bubbles: !0,
          composed: !0,
          detail: {
            appId: d.app.id,
            tagName: n,
            timestamp: Date.now()
          }
        })), Sf.emit($f.APP_LOADED, d.app.id, { tagName: n });
      } catch (y) {
        throw X_({
          app: d.app,
          error: y,
          logger: o.logger,
          source: "micro-app-connected-callback",
          metadata: { tagName: n }
        }), y;
      }
    }
    disconnectedCallback() {
      window.setTimeout(() => {
        try {
          this.cleanup?.(), a.unmount?.(this), Sf.emit($f.APP_UNLOADED, this.getAttribute("data-app-name") ?? n, { tagName: n });
        } catch (d) {
          X_({
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
function vU() {
  return new Promise((n) => {
    requestAnimationFrame(() => requestAnimationFrame(() => n()));
  });
}
var pU = /* @__PURE__ */ $n(((n) => {
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(i, u, d) {
    var m = null;
    if (d !== void 0 && (m = "" + d), u.key !== void 0 && (m = "" + u.key), "key" in u) {
      d = {};
      for (var y in u) y !== "key" && (d[y] = u[y]);
    } else d = u;
    return u = d.ref, {
      $$typeof: a,
      type: i,
      key: m,
      ref: u !== void 0 ? u : null,
      props: d
    };
  }
  n.jsx = c, n.jsxs = c;
})), gU = /* @__PURE__ */ $n(((n, a) => {
  a.exports = pU();
})), Ce = gU(), K_ = [
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
function hU() {
  const [n, a] = (0, bf.useState)("All"), o = (0, bf.useMemo)(() => K_.filter((c) => n === "All" || c.segment === n), [n]);
  return (0, bf.useEffect)(() => {
    window.dispatchEvent(new CustomEvent("platform-event", { detail: {
      type: "app:loaded",
      source: "customer",
      payload: { count: K_.length },
      timestamp: Date.now()
    } }));
  }, []), /* @__PURE__ */ (0, Ce.jsxs)("section", {
    className: "micro-app-container",
    children: [
      /* @__PURE__ */ (0, Ce.jsxs)("header", {
        className: "micro-app-header",
        children: [
          /* @__PURE__ */ (0, Ce.jsx)("span", { children: "CRM" }),
          /* @__PURE__ */ (0, Ce.jsx)("h1", { children: "Customer Operations" }),
          /* @__PURE__ */ (0, Ce.jsx)("p", { children: "Account health, ownership, and lifecycle visibility." })
        ]
      }),
      /* @__PURE__ */ (0, Ce.jsx)("div", {
        className: "toolbar",
        children: [
          "All",
          "Enterprise",
          "Growth",
          "Startup"
        ].map((c) => /* @__PURE__ */ (0, Ce.jsx)("button", {
          className: n === c ? "chip active" : "chip",
          onClick: () => a(c),
          children: c
        }, c))
      }),
      /* @__PURE__ */ (0, Ce.jsxs)("div", {
        className: "stats-grid",
        children: [
          /* @__PURE__ */ (0, Ce.jsxs)("div", {
            className: "stat-card",
            children: [/* @__PURE__ */ (0, Ce.jsx)("div", {
              className: "stat-label",
              children: "Total MRR"
            }), /* @__PURE__ */ (0, Ce.jsxs)("div", {
              className: "stat-value",
              children: ["$", o.reduce((c, i) => c + i.mrr, 0).toLocaleString()]
            })]
          }),
          /* @__PURE__ */ (0, Ce.jsxs)("div", {
            className: "stat-card",
            children: [/* @__PURE__ */ (0, Ce.jsx)("div", {
              className: "stat-label",
              children: "Avg Health"
            }), /* @__PURE__ */ (0, Ce.jsxs)("div", {
              className: "stat-value",
              children: [Math.round(o.reduce((c, i) => c + i.health, 0) / o.length), "%"]
            })]
          }),
          /* @__PURE__ */ (0, Ce.jsxs)("div", {
            className: "stat-card",
            children: [/* @__PURE__ */ (0, Ce.jsx)("div", {
              className: "stat-label",
              children: "Accounts"
            }), /* @__PURE__ */ (0, Ce.jsx)("div", {
              className: "stat-value",
              children: o.length
            })]
          })
        ]
      }),
      /* @__PURE__ */ (0, Ce.jsx)("div", {
        className: "list-section",
        children: o.map((c) => /* @__PURE__ */ (0, Ce.jsxs)("article", {
          className: "row-card",
          children: [/* @__PURE__ */ (0, Ce.jsxs)("div", { children: [/* @__PURE__ */ (0, Ce.jsx)("strong", { children: c.name }), /* @__PURE__ */ (0, Ce.jsxs)("span", { children: [
            c.id,
            " · ",
            c.segment,
            " · Owner ",
            c.owner
          ] })] }), /* @__PURE__ */ (0, Ce.jsxs)("div", {
            className: "health",
            children: [/* @__PURE__ */ (0, Ce.jsxs)("span", { children: [c.health, "%"] }), /* @__PURE__ */ (0, Ce.jsx)("div", { children: /* @__PURE__ */ (0, Ce.jsx)("i", { style: { width: `${c.health}%` } }) })]
          })]
        }, c.id))
      })
    ]
  });
}
var BU = mU("micro-customer-app", { mount(n) {
  const a = pk.createRoot(n);
  return a.render(/* @__PURE__ */ (0, Ce.jsx)(hU, {})), () => a.unmount();
} });
export {
  BU as MicroCustomerApp
};
