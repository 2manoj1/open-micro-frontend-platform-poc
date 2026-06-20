var p4 = Object.create, Bu = Object.defineProperty, h4 = Object.getOwnPropertyDescriptor, g4 = Object.getOwnPropertyNames, y4 = Object.getPrototypeOf, _4 = Object.prototype.hasOwnProperty, kn = (n, a) => () => (a || (n((a = { exports: {} }).exports, a), n = null), a.exports), _n = (n, a) => {
  let o = {};
  for (var c in n)
    Bu(o, c, {
      get: n[c],
      enumerable: !0
    });
  return a || Bu(o, Symbol.toStringTag, { value: "Module" }), o;
}, b4 = (n, a, o, c) => {
  if (a && typeof a == "object" || typeof a == "function")
    for (var i = g4(a), u = 0, d = i.length, m; u < d; u++)
      m = i[u], !_4.call(n, m) && m !== o && Bu(n, m, {
        get: ((y) => a[y]).bind(null, m),
        enumerable: !(c = h4(a, m)) || c.enumerable
      });
  return n;
}, ab = (n, a, o) => (o = n != null ? p4(y4(n)) : {}, b4(a || !n || !n.__esModule ? Bu(o, "default", {
  value: n,
  enumerable: !0
}) : o, n)), qa = /* @__PURE__ */ ((n) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(n, { get: (a, o) => (typeof require < "u" ? require : a)[o] }) : n)(function(n) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Calling `require` for "' + n + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), S4 = /* @__PURE__ */ kn(((n) => {
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.fragment"), i = /* @__PURE__ */ Symbol.for("react.strict_mode"), u = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), m = /* @__PURE__ */ Symbol.for("react.context"), y = /* @__PURE__ */ Symbol.for("react.forward_ref"), h = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), E = /* @__PURE__ */ Symbol.for("react.lazy"), k = /* @__PURE__ */ Symbol.for("react.activity"), M = Symbol.iterator;
  function F(S) {
    return S === null || typeof S != "object" ? null : (S = M && S[M] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var he = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Qe = Object.assign, Ee = {};
  function Oe(S, C, H) {
    this.props = S, this.context = C, this.refs = Ee, this.updater = H || he;
  }
  Oe.prototype.isReactComponent = {}, Oe.prototype.setState = function(S, C) {
    if (typeof S != "object" && typeof S != "function" && S != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, S, C, "setState");
  }, Oe.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function Be() {
  }
  Be.prototype = Oe.prototype;
  function ie(S, C, H) {
    this.props = S, this.context = C, this.refs = Ee, this.updater = H || he;
  }
  var ke = ie.prototype = new Be();
  ke.constructor = ie, Qe(ke, Oe.prototype), ke.isPureReactComponent = !0;
  var st = Array.isArray;
  function G() {
  }
  var V = {
    H: null,
    A: null,
    T: null,
    S: null
  }, ue = Object.prototype.hasOwnProperty;
  function ot(S, C, H) {
    var X = H.ref;
    return {
      $$typeof: a,
      type: S,
      key: C,
      ref: X !== void 0 ? X : null,
      props: H
    };
  }
  function Ft(S, C) {
    return ot(S.type, C, S.props);
  }
  function tt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === a;
  }
  function bn(S) {
    var C = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + S.replace(/[=:]/g, function(H) {
      return C[H];
    });
  }
  var na = /\/+/g;
  function vn(S, C) {
    return typeof S == "object" && S !== null && S.key != null ? bn("" + S.key) : C.toString(36);
  }
  function P(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(G, G) : (S.status = "pending", S.then(function(C) {
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
  function q(S, C, H, X, fe) {
    var me = typeof S;
    (me === "undefined" || me === "boolean") && (S = null);
    var Ue = !1;
    if (S === null) Ue = !0;
    else switch (me) {
      case "bigint":
      case "string":
      case "number":
        Ue = !0;
        break;
      case "object":
        switch (S.$$typeof) {
          case a:
          case o:
            Ue = !0;
            break;
          case E:
            return Ue = S._init, q(Ue(S._payload), C, H, X, fe);
        }
    }
    if (Ue) return fe = fe(S), Ue = X === "" ? "." + vn(S, 0) : X, st(fe) ? (H = "", Ue != null && (H = Ue.replace(na, "$&/") + "/"), q(fe, C, H, "", function(vr) {
      return vr;
    })) : fe != null && (tt(fe) && (fe = Ft(fe, H + (fe.key == null || S && S.key === fe.key ? "" : ("" + fe.key).replace(na, "$&/") + "/") + Ue)), C.push(fe)), 1;
    Ue = 0;
    var kt = X === "" ? "." : X + ":";
    if (st(S)) for (var Fe = 0; Fe < S.length; Fe++) X = S[Fe], me = kt + vn(X, Fe), Ue += q(X, C, H, me, fe);
    else if (Fe = F(S), typeof Fe == "function") for (S = Fe.call(S), Fe = 0; !(X = S.next()).done; ) X = X.value, me = kt + vn(X, Fe++), Ue += q(X, C, H, me, fe);
    else if (me === "object") {
      if (typeof S.then == "function") return q(P(S), C, H, X, fe);
      throw C = String(S), Error("Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead.");
    }
    return Ue;
  }
  function L(S, C, H) {
    if (S == null) return S;
    var X = [], fe = 0;
    return q(S, X, "", "", function(me) {
      return C.call(H, me, fe++);
    }), X;
  }
  function we(S) {
    if (S._status === -1) {
      var C = S._result;
      C = C(), C.then(function(H) {
        (S._status === 0 || S._status === -1) && (S._status = 1, S._result = H);
      }, function(H) {
        (S._status === 0 || S._status === -1) && (S._status = 2, S._result = H);
      }), S._status === -1 && (S._status = 0, S._result = C);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var Pe = typeof reportError == "function" ? reportError : function(S) {
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
  }, It = {
    map: L,
    forEach: function(S, C, H) {
      L(S, function() {
        C.apply(this, arguments);
      }, H);
    },
    count: function(S) {
      var C = 0;
      return L(S, function() {
        C++;
      }), C;
    },
    toArray: function(S) {
      return L(S, function(C) {
        return C;
      }) || [];
    },
    only: function(S) {
      if (!tt(S)) throw Error("React.Children.only expected to receive a single React element child.");
      return S;
    }
  };
  n.Activity = k, n.Children = It, n.Component = Oe, n.Fragment = c, n.Profiler = u, n.PureComponent = ie, n.StrictMode = i, n.Suspense = h, n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, n.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return V.H.useMemoCache(S);
    }
  }, n.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, n.cacheSignal = function() {
    return null;
  }, n.cloneElement = function(S, C, H) {
    if (S == null) throw Error("The argument must be a React element, but you passed " + S + ".");
    var X = Qe({}, S.props), fe = S.key;
    if (C != null) for (me in C.key !== void 0 && (fe = "" + C.key), C) !ue.call(C, me) || me === "key" || me === "__self" || me === "__source" || me === "ref" && C.ref === void 0 || (X[me] = C[me]);
    var me = arguments.length - 2;
    if (me === 1) X.children = H;
    else if (1 < me) {
      for (var Ue = Array(me), kt = 0; kt < me; kt++) Ue[kt] = arguments[kt + 2];
      X.children = Ue;
    }
    return ot(S.type, fe, X);
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
  }, n.createElement = function(S, C, H) {
    var X, fe = {}, me = null;
    if (C != null) for (X in C.key !== void 0 && (me = "" + C.key), C) ue.call(C, X) && X !== "key" && X !== "__self" && X !== "__source" && (fe[X] = C[X]);
    var Ue = arguments.length - 2;
    if (Ue === 1) fe.children = H;
    else if (1 < Ue) {
      for (var kt = Array(Ue), Fe = 0; Fe < Ue; Fe++) kt[Fe] = arguments[Fe + 2];
      fe.children = kt;
    }
    if (S && S.defaultProps) for (X in Ue = S.defaultProps, Ue) fe[X] === void 0 && (fe[X] = Ue[X]);
    return ot(S, me, fe);
  }, n.createRef = function() {
    return { current: null };
  }, n.forwardRef = function(S) {
    return {
      $$typeof: y,
      render: S
    };
  }, n.isValidElement = tt, n.lazy = function(S) {
    return {
      $$typeof: E,
      _payload: {
        _status: -1,
        _result: S
      },
      _init: we
    };
  }, n.memo = function(S, C) {
    return {
      $$typeof: g,
      type: S,
      compare: C === void 0 ? null : C
    };
  }, n.startTransition = function(S) {
    var C = V.T, H = {};
    V.T = H;
    try {
      var X = S(), fe = V.S;
      fe !== null && fe(H, X), typeof X == "object" && X !== null && typeof X.then == "function" && X.then(G, Pe);
    } catch (me) {
      Pe(me);
    } finally {
      C !== null && H.types !== null && (C.types = H.types), V.T = C;
    }
  }, n.unstable_useCacheRefresh = function() {
    return V.H.useCacheRefresh();
  }, n.use = function(S) {
    return V.H.use(S);
  }, n.useActionState = function(S, C, H) {
    return V.H.useActionState(S, C, H);
  }, n.useCallback = function(S, C) {
    return V.H.useCallback(S, C);
  }, n.useContext = function(S) {
    return V.H.useContext(S);
  }, n.useDebugValue = function() {
  }, n.useDeferredValue = function(S, C) {
    return V.H.useDeferredValue(S, C);
  }, n.useEffect = function(S, C) {
    return V.H.useEffect(S, C);
  }, n.useEffectEvent = function(S) {
    return V.H.useEffectEvent(S);
  }, n.useId = function() {
    return V.H.useId();
  }, n.useImperativeHandle = function(S, C, H) {
    return V.H.useImperativeHandle(S, C, H);
  }, n.useInsertionEffect = function(S, C) {
    return V.H.useInsertionEffect(S, C);
  }, n.useLayoutEffect = function(S, C) {
    return V.H.useLayoutEffect(S, C);
  }, n.useMemo = function(S, C) {
    return V.H.useMemo(S, C);
  }, n.useOptimistic = function(S, C) {
    return V.H.useOptimistic(S, C);
  }, n.useReducer = function(S, C, H) {
    return V.H.useReducer(S, C, H);
  }, n.useRef = function(S) {
    return V.H.useRef(S);
  }, n.useState = function(S) {
    return V.H.useState(S);
  }, n.useSyncExternalStore = function(S, C, H) {
    return V.H.useSyncExternalStore(S, C, H);
  }, n.useTransition = function() {
    return V.H.useTransition();
  }, n.version = "19.2.7";
})), Zf = /* @__PURE__ */ kn(((n, a) => {
  a.exports = S4();
})), $4 = /* @__PURE__ */ kn(((n) => {
  function a(P, q) {
    var L = P.length;
    P.push(q);
    e: for (; 0 < L; ) {
      var we = L - 1 >>> 1, Pe = P[we];
      if (0 < i(Pe, q)) P[we] = q, P[L] = Pe, L = we;
      else break e;
    }
  }
  function o(P) {
    return P.length === 0 ? null : P[0];
  }
  function c(P) {
    if (P.length === 0) return null;
    var q = P[0], L = P.pop();
    if (L !== q) {
      P[0] = L;
      e: for (var we = 0, Pe = P.length, It = Pe >>> 1; we < It; ) {
        var S = 2 * (we + 1) - 1, C = P[S], H = S + 1, X = P[H];
        if (0 > i(C, L)) H < Pe && 0 > i(X, C) ? (P[we] = X, P[H] = L, we = H) : (P[we] = C, P[S] = L, we = S);
        else if (H < Pe && 0 > i(X, L)) P[we] = X, P[H] = L, we = H;
        else break e;
      }
    }
    return q;
  }
  function i(P, q) {
    var L = P.sortIndex - q.sortIndex;
    return L !== 0 ? L : P.id - q.id;
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
  var y = [], h = [], g = 1, E = null, k = 3, M = !1, F = !1, he = !1, Qe = !1, Ee = typeof setTimeout == "function" ? setTimeout : null, Oe = typeof clearTimeout == "function" ? clearTimeout : null, Be = typeof setImmediate < "u" ? setImmediate : null;
  function ie(P) {
    for (var q = o(h); q !== null; ) {
      if (q.callback === null) c(h);
      else if (q.startTime <= P) c(h), q.sortIndex = q.expirationTime, a(y, q);
      else break;
      q = o(h);
    }
  }
  function ke(P) {
    if (he = !1, ie(P), !F) if (o(y) !== null) F = !0, st || (st = !0, tt());
    else {
      var q = o(h);
      q !== null && vn(ke, q.startTime - P);
    }
  }
  var st = !1, G = -1, V = 5, ue = -1;
  function ot() {
    return Qe ? !0 : !(n.unstable_now() - ue < V);
  }
  function Ft() {
    if (Qe = !1, st) {
      var P = n.unstable_now();
      ue = P;
      var q = !0;
      try {
        e: {
          F = !1, he && (he = !1, Oe(G), G = -1), M = !0;
          var L = k;
          try {
            t: {
              for (ie(P), E = o(y); E !== null && !(E.expirationTime > P && ot()); ) {
                var we = E.callback;
                if (typeof we == "function") {
                  E.callback = null, k = E.priorityLevel;
                  var Pe = we(E.expirationTime <= P);
                  if (P = n.unstable_now(), typeof Pe == "function") {
                    E.callback = Pe, ie(P), q = !0;
                    break t;
                  }
                  E === o(y) && c(y), ie(P);
                } else c(y);
                E = o(y);
              }
              if (E !== null) q = !0;
              else {
                var It = o(h);
                It !== null && vn(ke, It.startTime - P), q = !1;
              }
            }
            break e;
          } finally {
            E = null, k = L, M = !1;
          }
          q = void 0;
        }
      } finally {
        q ? tt() : st = !1;
      }
    }
  }
  var tt;
  if (typeof Be == "function") tt = function() {
    Be(Ft);
  };
  else if (typeof MessageChannel < "u") {
    var bn = new MessageChannel(), na = bn.port2;
    bn.port1.onmessage = Ft, tt = function() {
      na.postMessage(null);
    };
  } else tt = function() {
    Ee(Ft, 0);
  };
  function vn(P, q) {
    G = Ee(function() {
      P(n.unstable_now());
    }, q);
  }
  n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, n.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < P ? Math.floor(1e3 / P) : 5;
  }, n.unstable_getCurrentPriorityLevel = function() {
    return k;
  }, n.unstable_next = function(P) {
    switch (k) {
      case 1:
      case 2:
      case 3:
        var q = 3;
        break;
      default:
        q = k;
    }
    var L = k;
    k = q;
    try {
      return P();
    } finally {
      k = L;
    }
  }, n.unstable_requestPaint = function() {
    Qe = !0;
  }, n.unstable_runWithPriority = function(P, q) {
    switch (P) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        P = 3;
    }
    var L = k;
    k = P;
    try {
      return q();
    } finally {
      k = L;
    }
  }, n.unstable_scheduleCallback = function(P, q, L) {
    var we = n.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? we + L : we) : L = we, P) {
      case 1:
        var Pe = -1;
        break;
      case 2:
        Pe = 250;
        break;
      case 5:
        Pe = 1073741823;
        break;
      case 4:
        Pe = 1e4;
        break;
      default:
        Pe = 5e3;
    }
    return Pe = L + Pe, P = {
      id: g++,
      callback: q,
      priorityLevel: P,
      startTime: L,
      expirationTime: Pe,
      sortIndex: -1
    }, L > we ? (P.sortIndex = L, a(h, P), o(y) === null && P === o(h) && (he ? (Oe(G), G = -1) : he = !0, vn(ke, L - we))) : (P.sortIndex = Pe, a(y, P), F || M || (F = !0, st || (st = !0, tt()))), P;
  }, n.unstable_shouldYield = ot, n.unstable_wrapCallback = function(P) {
    var q = k;
    return function() {
      var L = k;
      k = q;
      try {
        return P.apply(this, arguments);
      } finally {
        k = L;
      }
    };
  };
})), z4 = /* @__PURE__ */ kn(((n, a) => {
  a.exports = $4();
})), k4 = /* @__PURE__ */ kn(((n) => {
  var a = Zf();
  function o(h) {
    var g = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var E = 2; E < arguments.length; E++) g += "&args[]=" + encodeURIComponent(arguments[E]);
    }
    return "Minified React error #" + h + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function d(h, g, E) {
    var k = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: k == null ? null : "" + k,
      children: h,
      containerInfo: g,
      implementation: E
    };
  }
  var m = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(h, g) {
    if (h === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, n.createPortal = function(h, g) {
    var E = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11) throw Error(o(299));
    return d(h, g, null, E);
  }, n.flushSync = function(h) {
    var g = m.T, E = i.p;
    try {
      if (m.T = null, i.p = 2, h) return h();
    } finally {
      m.T = g, i.p = E, i.d.f();
    }
  }, n.preconnect = function(h, g) {
    typeof h == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, i.d.C(h, g));
  }, n.prefetchDNS = function(h) {
    typeof h == "string" && i.d.D(h);
  }, n.preinit = function(h, g) {
    if (typeof h == "string" && g && typeof g.as == "string") {
      var E = g.as, k = y(E, g.crossOrigin), M = typeof g.integrity == "string" ? g.integrity : void 0, F = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      E === "style" ? i.d.S(h, typeof g.precedence == "string" ? g.precedence : void 0, {
        crossOrigin: k,
        integrity: M,
        fetchPriority: F
      }) : E === "script" && i.d.X(h, {
        crossOrigin: k,
        integrity: M,
        fetchPriority: F,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, n.preinitModule = function(h, g) {
    if (typeof h == "string") if (typeof g == "object" && g !== null) {
      if (g.as == null || g.as === "script") {
        var E = y(g.as, g.crossOrigin);
        i.d.M(h, {
          crossOrigin: E,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0
        });
      }
    } else g ?? i.d.M(h);
  }, n.preload = function(h, g) {
    if (typeof h == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var E = g.as, k = y(E, g.crossOrigin);
      i.d.L(h, E, {
        crossOrigin: k,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, n.preloadModule = function(h, g) {
    if (typeof h == "string") if (g) {
      var E = y(g.as, g.crossOrigin);
      i.d.m(h, {
        as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
        crossOrigin: E,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0
      });
    } else i.d.m(h);
  }, n.requestFormReset = function(h) {
    i.d.r(h);
  }, n.unstable_batchedUpdates = function(h, g) {
    return h(g);
  }, n.useFormState = function(h, g, E) {
    return m.H.useFormState(h, g, E);
  }, n.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, n.version = "19.2.7";
})), w4 = /* @__PURE__ */ kn(((n, a) => {
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (c) {
        console.error(c);
      }
  }
  o(), a.exports = k4();
})), T4 = /* @__PURE__ */ kn(((n) => {
  var a = z4(), o = Zf(), c = w4();
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
  function h(e) {
    if (d(e) !== e) throw Error(i(188));
  }
  function g(e) {
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
          if (f === r) return h(s), e;
          if (f === l) return h(s), t;
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
  function E(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = E(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var k = Object.assign, M = /* @__PURE__ */ Symbol.for("react.element"), F = /* @__PURE__ */ Symbol.for("react.transitional.element"), he = /* @__PURE__ */ Symbol.for("react.portal"), Qe = /* @__PURE__ */ Symbol.for("react.fragment"), Ee = /* @__PURE__ */ Symbol.for("react.strict_mode"), Oe = /* @__PURE__ */ Symbol.for("react.profiler"), Be = /* @__PURE__ */ Symbol.for("react.consumer"), ie = /* @__PURE__ */ Symbol.for("react.context"), ke = /* @__PURE__ */ Symbol.for("react.forward_ref"), st = /* @__PURE__ */ Symbol.for("react.suspense"), G = /* @__PURE__ */ Symbol.for("react.suspense_list"), V = /* @__PURE__ */ Symbol.for("react.memo"), ue = /* @__PURE__ */ Symbol.for("react.lazy"), ot = /* @__PURE__ */ Symbol.for("react.activity"), Ft = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), tt = Symbol.iterator;
  function bn(e) {
    return e === null || typeof e != "object" ? null : (e = tt && e[tt] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var na = /* @__PURE__ */ Symbol.for("react.client.reference");
  function vn(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.$$typeof === na ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Qe:
        return "Fragment";
      case Oe:
        return "Profiler";
      case Ee:
        return "StrictMode";
      case st:
        return "Suspense";
      case G:
        return "SuspenseList";
      case ot:
        return "Activity";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case he:
        return "Portal";
      case ie:
        return e.displayName || "Context";
      case Be:
        return (e._context.displayName || "Context") + ".Consumer";
      case ke:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case V:
        return t = e.displayName || null, t !== null ? t : vn(e.type) || "Memo";
      case ue:
        t = e._payload, e = e._init;
        try {
          return vn(e(t));
        } catch {
        }
    }
    return null;
  }
  var P = Array.isArray, q = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, we = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Pe = [], It = -1;
  function S(e) {
    return { current: e };
  }
  function C(e) {
    0 > It || (e.current = Pe[It], Pe[It] = null, It--);
  }
  function H(e, t) {
    It++, Pe[It] = e.current, e.current = t;
  }
  var X = S(null), fe = S(null), me = S(null), Ue = S(null);
  function kt(e, t) {
    switch (H(me, t), H(fe, e), H(X, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Xy(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI) t = Xy(t), e = Ky(t, e);
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
    C(X), H(X, e);
  }
  function Fe() {
    C(X), C(fe), C(me);
  }
  function vr(e) {
    e.memoizedState !== null && H(Ue, e);
    var t = X.current, r = Ky(t, e.type);
    t !== r && (H(fe, e), H(X, r));
  }
  function bl(e) {
    fe.current === e && (C(X), C(fe)), Ue.current === e && (C(Ue), io._currentValue = we);
  }
  var ss, xp;
  function zi(e) {
    if (ss === void 0) try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      ss = t && t[1] || "", xp = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + ss + e + xp;
  }
  var ds = !1;
  function fs(e, t) {
    if (!e || ds) return "";
    ds = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var N = function() {
              throw Error();
            };
            if (Object.defineProperty(N.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(N, []);
              } catch (A) {
                var U = A;
              }
              Reflect.construct(e, [], N);
            } else {
              try {
                N.call();
              } catch (A) {
                U = A;
              }
              e.call(N.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (A) {
              U = A;
            }
            (N = e()) && typeof N.catch == "function" && N.catch(function() {
            });
          }
        } catch (A) {
          if (A && U && typeof A.stack == "string") return [A.stack, U.stack];
        }
        return [null, null];
      } };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
      s && s.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var f = l.DetermineComponentFrameRoot(), v = f[0], p = f[1];
      if (v && p) {
        var _ = v.split(`
`), O = p.split(`
`);
        for (s = l = 0; l < _.length && !_[l].includes("DetermineComponentFrameRoot"); ) l++;
        for (; s < O.length && !O[s].includes("DetermineComponentFrameRoot"); ) s++;
        if (l === _.length || s === O.length) for (l = _.length - 1, s = O.length - 1; 1 <= l && 0 <= s && _[l] !== O[s]; ) s--;
        for (; 1 <= l && 0 <= s; l--, s--) if (_[l] !== O[s]) {
          if (l !== 1 || s !== 1) do
            if (l--, s--, 0 > s || _[l] !== O[s]) {
              var j = `
` + _[l].replace(" at new ", " at ");
              return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), j;
            }
          while (1 <= l && 0 <= s);
          break;
        }
      }
    } finally {
      ds = !1, Error.prepareStackTrace = r;
    }
    return (r = e ? e.displayName || e.name : "") ? zi(r) : "";
  }
  function Wz(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return zi(e.type);
      case 16:
        return zi("Lazy");
      case 13:
        return e.child !== t && t !== null ? zi("Suspense Fallback") : zi("Suspense");
      case 19:
        return zi("SuspenseList");
      case 0:
      case 15:
        return fs(e.type, !1);
      case 11:
        return fs(e.type.render, !1);
      case 1:
        return fs(e.type, !0);
      case 31:
        return zi("Activity");
      default:
        return "";
    }
  }
  function Ep(e) {
    try {
      var t = "", r = null;
      do
        t += Wz(e, r), r = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var ms = Object.prototype.hasOwnProperty, vs = a.unstable_scheduleCallback, ps = a.unstable_cancelCallback, e1 = a.unstable_shouldYield, t1 = a.unstable_requestPaint, Ct = a.unstable_now, n1 = a.unstable_getCurrentPriorityLevel, Op = a.unstable_ImmediatePriority, Up = a.unstable_UserBlockingPriority, Sl = a.unstable_NormalPriority, i1 = a.unstable_LowPriority, Dp = a.unstable_IdlePriority, a1 = a.log, r1 = a.unstable_setDisableYieldValue, pr = null, Rt = null;
  function Xn(e) {
    if (typeof a1 == "function" && r1(e), Rt && typeof Rt.setStrictMode == "function") try {
      Rt.setStrictMode(pr, e);
    } catch {
    }
  }
  var Mt = Math.clz32 ? Math.clz32 : u1, o1 = Math.log, l1 = Math.LN2;
  function u1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (o1(e) / l1 | 0) | 0;
  }
  var $l = 256, zl = 262144, kl = 4194304;
  function ki(e) {
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
  function wl(e, t, r) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var s = 0, f = e.suspendedLanes, v = e.pingedLanes;
    e = e.warmLanes;
    var p = l & 134217727;
    return p !== 0 ? (l = p & ~f, l !== 0 ? s = ki(l) : (v &= p, v !== 0 ? s = ki(v) : r || (r = p & ~e, r !== 0 && (s = ki(r))))) : (p = l & ~f, p !== 0 ? s = ki(p) : v !== 0 ? s = ki(v) : r || (r = l & ~e, r !== 0 && (s = ki(r)))), s === 0 ? 0 : t !== 0 && t !== s && (t & f) === 0 && (f = s & -s, r = t & -t, f >= r || f === 32 && (r & 4194048) !== 0) ? t : s;
  }
  function hr(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function c1(e, t) {
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
  function Ap() {
    var e = kl;
    return kl <<= 1, (kl & 62914560) === 0 && (kl = 4194304), e;
  }
  function hs(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Tl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function s1(e, t, r, l, s, f) {
    var v = e.pendingLanes;
    e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= r, e.entangledLanes &= r, e.errorRecoveryDisabledLanes &= r, e.shellSuspendCounter = 0;
    var p = e.entanglements, _ = e.expirationTimes, O = e.hiddenUpdates;
    for (r = v & ~r; 0 < r; ) {
      var j = 31 - Mt(r), N = 1 << j;
      p[j] = 0, _[j] = -1;
      var U = O[j];
      if (U !== null) for (O[j] = null, j = 0; j < U.length; j++) {
        var A = U[j];
        A !== null && (A.lane &= -536870913);
      }
      r &= ~N;
    }
    l !== 0 && jp(e, l, 0), f !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(v & ~t));
  }
  function jp(e, t, r) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - Mt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | r & 261930;
  }
  function Zp(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
      var l = 31 - Mt(r), s = 1 << l;
      s & t | e[l] & t && (e[l] |= t), r &= ~s;
    }
  }
  function Np(e, t) {
    var r = t & -t;
    return r = (r & 42) !== 0 ? 1 : Ip(r), (r & (e.suspendedLanes | t)) !== 0 ? 0 : r;
  }
  function Ip(e) {
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
  function gs(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Cp() {
    var e = L.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : y_(e.type));
  }
  function Rp(e, t) {
    var r = L.p;
    try {
      return L.p = e, t();
    } finally {
      L.p = r;
    }
  }
  var Kn = Math.random().toString(36).slice(2), mt = "__reactFiber$" + Kn, Et = "__reactProps$" + Kn, gr = "__reactContainer$" + Kn, ys = "__reactEvents$" + Kn, d1 = "__reactListeners$" + Kn, f1 = "__reactHandles$" + Kn, Mp = "__reactResources$" + Kn, yr = "__reactMarker$" + Kn;
  function _s(e) {
    delete e[mt], delete e[Et], delete e[ys], delete e[d1], delete e[f1];
  }
  function ia(e) {
    var t = e[mt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if (t = r[gr] || r[mt]) {
        if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = a_(e); e !== null; ) {
          if (r = e[mt]) return r;
          e = a_(e);
        }
        return t;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function aa(e) {
    if (e = e[mt] || e[gr]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function _r(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function ra(e) {
    var t = e[Mp];
    return t || (t = e[Mp] = {
      hoistableStyles: /* @__PURE__ */ new Map(),
      hoistableScripts: /* @__PURE__ */ new Map()
    }), t;
  }
  function dt(e) {
    e[yr] = !0;
  }
  var qp = /* @__PURE__ */ new Set(), Hp = {};
  function wi(e, t) {
    oa(e, t), oa(e + "Capture", t);
  }
  function oa(e, t) {
    for (Hp[e] = t, e = 0; e < t.length; e++) qp.add(t[e]);
  }
  var m1 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Lp = {}, Bp = {};
  function v1(e) {
    return ms.call(Bp, e) ? !0 : ms.call(Lp, e) ? !1 : m1.test(e) ? Bp[e] = !0 : (Lp[e] = !0, !1);
  }
  function xl(e, t, r) {
    if (v1(t)) if (r === null) e.removeAttribute(t);
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
  function El(e, t, r) {
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
  function xn(e, t, r, l) {
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
  function Wt(e) {
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
  function Pp(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function p1(e, t, r) {
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
  function bs(e) {
    if (!e._valueTracker) {
      var t = Pp(e) ? "checked" : "value";
      e._valueTracker = p1(e, t, "" + e[t]);
    }
  }
  function Jp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(), l = "";
    return e && (l = Pp(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== r ? (t.setValue(e), !0) : !1;
  }
  function Ol(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var h1 = /[\n"\\]/g;
  function en(e) {
    return e.replace(h1, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ss(e, t, r, l, s, f, v, p) {
    e.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.type = v : e.removeAttribute("type"), t != null ? v === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Wt(t)) : e.value !== "" + Wt(t) && (e.value = "" + Wt(t)) : v !== "submit" && v !== "reset" || e.removeAttribute("value"), t != null ? $s(e, v, Wt(t)) : r != null ? $s(e, v, Wt(r)) : l != null && e.removeAttribute("value"), s == null && f != null && (e.defaultChecked = !!f), s != null && (e.checked = s && typeof s != "function" && typeof s != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.name = "" + Wt(p) : e.removeAttribute("name");
  }
  function Gp(e, t, r, l, s, f, v, p) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || r != null) {
      if (!(f !== "submit" && f !== "reset" || t != null)) {
        bs(e);
        return;
      }
      r = r != null ? "" + Wt(r) : "", t = t != null ? "" + Wt(t) : r, p || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? s, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = p ? e.checked : !!l, e.defaultChecked = !!l, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (e.name = v), bs(e);
  }
  function $s(e, t, r) {
    t === "number" && Ol(e.ownerDocument) === e || e.defaultValue === "" + r || (e.defaultValue = "" + r);
  }
  function la(e, t, r, l) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < r.length; s++) t["$" + r[s]] = !0;
      for (r = 0; r < e.length; r++) s = t.hasOwnProperty("$" + e[r].value), e[r].selected !== s && (e[r].selected = s), s && l && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + Wt(r), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === r) {
          e[s].selected = !0, l && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Yp(e, t, r) {
    if (t != null && (t = "" + Wt(t), t !== e.value && (e.value = t), r == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = r != null ? "" + Wt(r) : "";
  }
  function Vp(e, t, r, l) {
    if (t == null) {
      if (l != null) {
        if (r != null) throw Error(i(92));
        if (P(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        r = l;
      }
      r ??= "", t = r;
    }
    r = Wt(t), e.defaultValue = r, l = e.textContent, l === r && l !== "" && l !== null && (e.value = l), bs(e);
  }
  function ua(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var g1 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Qp(e, t, r) {
    var l = t.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, r) : typeof r != "number" || r === 0 || g1.has(t) ? t === "float" ? e.cssFloat = r : e[t] = ("" + r).trim() : e[t] = r + "px";
  }
  function Xp(e, t, r) {
    if (t != null && typeof t != "object") throw Error(i(62));
    if (e = e.style, r != null) {
      for (var l in r) !r.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var s in t) l = t[s], t.hasOwnProperty(s) && r[s] !== l && Qp(e, s, l);
    } else for (var f in t) t.hasOwnProperty(f) && Qp(e, f, t[f]);
  }
  function zs(e) {
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
  var y1 = /* @__PURE__ */ new Map([
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
  ]), _1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ul(e) {
    return _1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function En() {
  }
  var ks = null;
  function ws(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ca = null, sa = null;
  function Kp(e) {
    var t = aa(e);
    if (t && (e = t.stateNode)) {
      var r = e[Et] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Ss(e, r.value, r.defaultValue, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name), t = r.name, r.type === "radio" && t != null) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (r = r.querySelectorAll('input[name="' + en("" + t) + '"][type="radio"]'), t = 0; t < r.length; t++) {
              var l = r[t];
              if (l !== e && l.form === e.form) {
                var s = l[Et] || null;
                if (!s) throw Error(i(90));
                Ss(l, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name);
              }
            }
            for (t = 0; t < r.length; t++) l = r[t], l.form === e.form && Jp(l);
          }
          break e;
        case "textarea":
          Yp(e, r.value, r.defaultValue);
          break e;
        case "select":
          t = r.value, t != null && la(e, !!r.multiple, t, !1);
      }
    }
  }
  var Ts = !1;
  function Fp(e, t, r) {
    if (Ts) return e(t, r);
    Ts = !0;
    try {
      return e(t);
    } finally {
      if (Ts = !1, (ca !== null || sa !== null) && (gu(), ca && (t = ca, e = sa, sa = ca = null, Kp(t), e)))
        for (t = 0; t < e.length; t++) Kp(e[t]);
    }
  }
  function br(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var l = r[Et] || null;
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
  var On = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), xs = !1;
  if (On) try {
    var Sr = {};
    Object.defineProperty(Sr, "passive", { get: function() {
      xs = !0;
    } }), window.addEventListener("test", Sr, Sr), window.removeEventListener("test", Sr, Sr);
  } catch {
    xs = !1;
  }
  var Fn = null, Es = null, Dl = null;
  function Wp() {
    if (Dl) return Dl;
    var e, t = Es, r = t.length, l, s = "value" in Fn ? Fn.value : Fn.textContent, f = s.length;
    for (e = 0; e < r && t[e] === s[e]; e++) ;
    var v = r - e;
    for (l = 1; l <= v && t[r - l] === s[f - l]; l++) ;
    return Dl = s.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Al(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function jl() {
    return !0;
  }
  function eh() {
    return !1;
  }
  function Ot(e) {
    function t(r, l, s, f, v) {
      this._reactName = r, this._targetInst = s, this.type = l, this.nativeEvent = f, this.target = v, this.currentTarget = null;
      for (var p in e) e.hasOwnProperty(p) && (r = e[p], this[p] = r ? r(f) : f[p]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? jl : eh, this.isPropagationStopped = eh, this;
    }
    return k(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = jl);
      },
      stopPropagation: function() {
        var r = this.nativeEvent;
        r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = jl);
      },
      persist: function() {
      },
      isPersistent: jl
    }), t;
  }
  var Ti = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Zl = Ot(Ti), $r = k({}, Ti, {
    view: 0,
    detail: 0
  }), b1 = Ot($r), Os, Us, zr, Nl = k({}, $r, {
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
    getModifierState: As,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== zr && (zr && e.type === "mousemove" ? (Os = e.screenX - zr.screenX, Us = e.screenY - zr.screenY) : Us = Os = 0, zr = e), Os);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Us;
    }
  }), th = Ot(Nl), S1 = Ot(k({}, Nl, { dataTransfer: 0 })), Ds = Ot(k({}, $r, { relatedTarget: 0 })), $1 = Ot(k({}, Ti, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), z1 = Ot(k({}, Ti, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } })), nh = Ot(k({}, Ti, { data: 0 })), k1 = {
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
  }, w1 = {
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
  }, T1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function x1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = T1[e]) ? !!t[e] : !1;
  }
  function As() {
    return x1;
  }
  var E1 = Ot(k({}, $r, {
    key: function(e) {
      if (e.key) {
        var t = k1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Al(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? w1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: As,
    charCode: function(e) {
      return e.type === "keypress" ? Al(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Al(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  })), ih = Ot(k({}, Nl, {
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
  })), O1 = Ot(k({}, $r, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: As
  })), U1 = Ot(k({}, Ti, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  })), D1 = Ot(k({}, Nl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  })), A1 = Ot(k({}, Ti, {
    newState: 0,
    oldState: 0
  })), j1 = [
    9,
    13,
    27,
    32
  ], js = On && "CompositionEvent" in window, kr = null;
  On && "documentMode" in document && (kr = document.documentMode);
  var Z1 = On && "TextEvent" in window && !kr, ah = On && (!js || kr && 8 < kr && 11 >= kr), rh = " ", oh = !1;
  function lh(e, t) {
    switch (e) {
      case "keyup":
        return j1.indexOf(t.keyCode) !== -1;
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
  function uh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var da = !1;
  function N1(e, t) {
    switch (e) {
      case "compositionend":
        return uh(t);
      case "keypress":
        return t.which !== 32 ? null : (oh = !0, rh);
      case "textInput":
        return e = t.data, e === rh && oh ? null : e;
      default:
        return null;
    }
  }
  function I1(e, t) {
    if (da) return e === "compositionend" || !js && lh(e, t) ? (e = Wp(), Dl = Es = Fn = null, da = !1, e) : null;
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
        return ah && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var C1 = {
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
  function ch(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!C1[e.type] : t === "textarea";
  }
  function sh(e, t, r, l) {
    ca ? sa ? sa.push(l) : sa = [l] : ca = l, t = ku(t, "onChange"), 0 < t.length && (r = new Zl("onChange", "change", null, r, l), e.push({
      event: r,
      listeners: t
    }));
  }
  var wr = null, Tr = null;
  function R1(e) {
    By(e, 0);
  }
  function Il(e) {
    if (Jp(_r(e))) return e;
  }
  function dh(e, t) {
    if (e === "change") return t;
  }
  var fh = !1;
  if (On) {
    var Zs;
    if (On) {
      var Ns = "oninput" in document;
      if (!Ns) {
        var mh = document.createElement("div");
        mh.setAttribute("oninput", "return;"), Ns = typeof mh.oninput == "function";
      }
      Zs = Ns;
    } else Zs = !1;
    fh = Zs && (!document.documentMode || 9 < document.documentMode);
  }
  function vh() {
    wr && (wr.detachEvent("onpropertychange", ph), Tr = wr = null);
  }
  function ph(e) {
    if (e.propertyName === "value" && Il(Tr)) {
      var t = [];
      sh(t, Tr, e, ws(e)), Fp(R1, t);
    }
  }
  function M1(e, t, r) {
    e === "focusin" ? (vh(), wr = t, Tr = r, wr.attachEvent("onpropertychange", ph)) : e === "focusout" && vh();
  }
  function q1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Il(Tr);
  }
  function H1(e, t) {
    if (e === "click") return Il(t);
  }
  function L1(e, t) {
    if (e === "input" || e === "change") return Il(t);
  }
  function B1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var qt = typeof Object.is == "function" ? Object.is : B1;
  function xr(e, t) {
    if (qt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e), l = Object.keys(t);
    if (r.length !== l.length) return !1;
    for (l = 0; l < r.length; l++) {
      var s = r[l];
      if (!ms.call(t, s) || !qt(e[s], t[s])) return !1;
    }
    return !0;
  }
  function hh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function gh(e, t) {
    var r = hh(e);
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
      r = hh(r);
    }
  }
  function yh(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? yh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function _h(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Ol(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Ol(e.document);
    }
    return t;
  }
  function Is(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var P1 = On && "documentMode" in document && 11 >= document.documentMode, fa = null, Cs = null, Er = null, Rs = !1;
  function bh(e, t, r) {
    var l = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Rs || fa == null || fa !== Ol(l) || (l = fa, "selectionStart" in l && Is(l) ? l = {
      start: l.selectionStart,
      end: l.selectionEnd
    } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Er && xr(Er, l) || (Er = l, l = ku(Cs, "onSelect"), 0 < l.length && (t = new Zl("onSelect", "select", null, t, r), e.push({
      event: t,
      listeners: l
    }), t.target = fa)));
  }
  function xi(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
  }
  var ma = {
    animationend: xi("Animation", "AnimationEnd"),
    animationiteration: xi("Animation", "AnimationIteration"),
    animationstart: xi("Animation", "AnimationStart"),
    transitionrun: xi("Transition", "TransitionRun"),
    transitionstart: xi("Transition", "TransitionStart"),
    transitioncancel: xi("Transition", "TransitionCancel"),
    transitionend: xi("Transition", "TransitionEnd")
  }, Ms = {}, Sh = {};
  On && (Sh = document.createElement("div").style, "AnimationEvent" in window || (delete ma.animationend.animation, delete ma.animationiteration.animation, delete ma.animationstart.animation), "TransitionEvent" in window || delete ma.transitionend.transition);
  function Ei(e) {
    if (Ms[e]) return Ms[e];
    if (!ma[e]) return e;
    var t = ma[e], r;
    for (r in t) if (t.hasOwnProperty(r) && r in Sh) return Ms[e] = t[r];
    return e;
  }
  var $h = Ei("animationend"), zh = Ei("animationiteration"), kh = Ei("animationstart"), J1 = Ei("transitionrun"), G1 = Ei("transitionstart"), Y1 = Ei("transitioncancel"), wh = Ei("transitionend"), Th = /* @__PURE__ */ new Map(), qs = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  qs.push("scrollEnd");
  function pn(e, t) {
    Th.set(e, t), wi(t, [e]);
  }
  var Cl = typeof reportError == "function" ? reportError : function(e) {
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
  }, tn = [], va = 0, Hs = 0;
  function Rl() {
    for (var e = va, t = Hs = va = 0; t < e; ) {
      var r = tn[t];
      tn[t++] = null;
      var l = tn[t];
      tn[t++] = null;
      var s = tn[t];
      tn[t++] = null;
      var f = tn[t];
      if (tn[t++] = null, l !== null && s !== null) {
        var v = l.pending;
        v === null ? s.next = s : (s.next = v.next, v.next = s), l.pending = s;
      }
      f !== 0 && xh(r, s, f);
    }
  }
  function Ml(e, t, r, l) {
    tn[va++] = e, tn[va++] = t, tn[va++] = r, tn[va++] = l, Hs |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function Ls(e, t, r, l) {
    return Ml(e, t, r, l), ql(e);
  }
  function Oi(e, t) {
    return Ml(e, null, null, t), ql(e);
  }
  function xh(e, t, r) {
    e.lanes |= r;
    var l = e.alternate;
    l !== null && (l.lanes |= r);
    for (var s = !1, f = e.return; f !== null; ) f.childLanes |= r, l = f.alternate, l !== null && (l.childLanes |= r), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (s = !0)), e = f, f = f.return;
    return e.tag === 3 ? (f = e.stateNode, s && t !== null && (s = 31 - Mt(r), e = f.hiddenUpdates, l = e[s], l === null ? e[s] = [t] : l.push(t), t.lane = r | 536870912), f) : null;
  }
  function ql(e) {
    if (50 < Xr) throw Xr = 0, Kd = null, Error(i(185));
    for (var t = e.return; t !== null; ) e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var pa = {};
  function V1(e, t, r, l) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ht(e, t, r, l) {
    return new V1(e, t, r, l);
  }
  function Bs(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Un(e, t) {
    var r = e.alternate;
    return r === null ? (r = Ht(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 65011712, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.refCleanup = e.refCleanup, r;
  }
  function Eh(e, t) {
    e.flags &= 65011714;
    var r = e.alternate;
    return r === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type, t = r.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Hl(e, t, r, l, s, f) {
    var v = 0;
    if (l = e, typeof e == "function") Bs(e) && (v = 1);
    else if (typeof e == "string") v = e4(e, r, X.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else e: switch (e) {
      case ot:
        return e = Ht(31, r, t, s), e.elementType = ot, e.lanes = f, e;
      case Qe:
        return Ui(r.children, s, f, t);
      case Ee:
        v = 8, s |= 24;
        break;
      case Oe:
        return e = Ht(12, r, t, s | 2), e.elementType = Oe, e.lanes = f, e;
      case st:
        return e = Ht(13, r, t, s), e.elementType = st, e.lanes = f, e;
      case G:
        return e = Ht(19, r, t, s), e.elementType = G, e.lanes = f, e;
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ie:
            v = 10;
            break e;
          case Be:
            v = 9;
            break e;
          case ke:
            v = 11;
            break e;
          case V:
            v = 14;
            break e;
          case ue:
            v = 16, l = null;
            break e;
        }
        v = 29, r = Error(i(130, e === null ? "null" : typeof e, "")), l = null;
    }
    return t = Ht(v, r, t, s), t.elementType = e, t.type = l, t.lanes = f, t;
  }
  function Ui(e, t, r, l) {
    return e = Ht(7, e, l, t), e.lanes = r, e;
  }
  function Ps(e, t, r) {
    return e = Ht(6, e, null, t), e.lanes = r, e;
  }
  function Oh(e) {
    var t = Ht(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Js(e, t, r) {
    return t = Ht(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Uh = /* @__PURE__ */ new WeakMap();
  function nn(e, t) {
    if (typeof e == "object" && e !== null) {
      var r = Uh.get(e);
      return r !== void 0 ? r : (t = {
        value: e,
        source: t,
        stack: Ep(t)
      }, Uh.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Ep(t)
    };
  }
  var ha = [], ga = 0, Ll = null, Or = 0, an = [], rn = 0, Wn = null, Sn = 1, $n = "";
  function Dn(e, t) {
    ha[ga++] = Or, ha[ga++] = Ll, Ll = e, Or = t;
  }
  function Dh(e, t, r) {
    an[rn++] = Sn, an[rn++] = $n, an[rn++] = Wn, Wn = e;
    var l = Sn;
    e = $n;
    var s = 32 - Mt(l) - 1;
    l &= ~(1 << s), r += 1;
    var f = 32 - Mt(t) + s;
    if (30 < f) {
      var v = s - s % 5;
      f = (l & (1 << v) - 1).toString(32), l >>= v, s -= v, Sn = 1 << 32 - Mt(t) + s | r << s | l, $n = f + e;
    } else Sn = 1 << f | r << s | l, $n = e;
  }
  function Gs(e) {
    e.return !== null && (Dn(e, 1), Dh(e, 1, 0));
  }
  function Ys(e) {
    for (; e === Ll; ) Ll = ha[--ga], ha[ga] = null, Or = ha[--ga], ha[ga] = null;
    for (; e === Wn; ) Wn = an[--rn], an[rn] = null, $n = an[--rn], an[rn] = null, Sn = an[--rn], an[rn] = null;
  }
  function Ah(e, t) {
    an[rn++] = Sn, an[rn++] = $n, an[rn++] = Wn, Sn = t.id, $n = t.overflow, Wn = e;
  }
  var vt = null, Je = null, _e = !1, ei = null, on = !1, Vs = Error(i(519));
  function ti(e) {
    throw Ur(nn(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), Vs;
  }
  function jh(e) {
    var t = e.stateNode, r = e.type, l = e.memoizedProps;
    switch (t[mt] = e, t[Et] = l, r) {
      case "dialog":
        pe("cancel", t), pe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        pe("load", t);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Fr.length; r++) pe(Fr[r], t);
        break;
      case "source":
        pe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        pe("error", t), pe("load", t);
        break;
      case "details":
        pe("toggle", t);
        break;
      case "input":
        pe("invalid", t), Gp(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
        break;
      case "select":
        pe("invalid", t);
        break;
      case "textarea":
        pe("invalid", t), Vp(t, l.value, l.defaultValue, l.children);
    }
    r = l.children, typeof r != "string" && typeof r != "number" && typeof r != "bigint" || t.textContent === "" + r || l.suppressHydrationWarning === !0 || Vy(t.textContent, r) ? (l.popover != null && (pe("beforetoggle", t), pe("toggle", t)), l.onScroll != null && pe("scroll", t), l.onScrollEnd != null && pe("scrollend", t), l.onClick != null && (t.onclick = En), t = !0) : t = !1, t || ti(e, !0);
  }
  function Zh(e) {
    for (vt = e.return; vt; ) switch (vt.tag) {
      case 5:
      case 31:
      case 13:
        on = !1;
        return;
      case 27:
      case 3:
        on = !0;
        return;
      default:
        vt = vt.return;
    }
  }
  function ya(e) {
    if (e !== vt) return !1;
    if (!_e) return Zh(e), _e = !0, !1;
    var t = e.tag, r;
    if ((r = t !== 3 && t !== 27) && ((r = t === 5) && (r = e.type, r = !(r !== "form" && r !== "button") || ff(e.type, e.memoizedProps)), r = !r), r && Je && ti(e), Zh(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      Je = i_(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      Je = i_(e);
    } else t === 27 ? (t = Je, mi(e.type) ? (e = gf, gf = null, Je = e) : Je = t) : Je = vt ? cn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Di() {
    Je = vt = null, _e = !1;
  }
  function Qs() {
    var e = ei;
    return e !== null && (jt === null ? jt = e : jt.push.apply(jt, e), ei = null), e;
  }
  function Ur(e) {
    ei === null ? ei = [e] : ei.push(e);
  }
  var Xs = S(null), Ai = null, An = null;
  function ni(e, t, r) {
    H(Xs, t._currentValue), t._currentValue = r;
  }
  function jn(e) {
    e._currentValue = Xs.current, C(Xs);
  }
  function Ks(e, t, r) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === r) break;
      e = e.return;
    }
  }
  function Fs(e, t, r, l) {
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
            f.lanes |= r, p = f.alternate, p !== null && (p.lanes |= r), Ks(f.return, r, e), l || (v = null);
            break e;
          }
          f = p.next;
        }
      } else if (s.tag === 18) {
        if (v = s.return, v === null) throw Error(i(341));
        v.lanes |= r, f = v.alternate, f !== null && (f.lanes |= r), Ks(v, r, e), v = null;
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
  function _a(e, t, r, l) {
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
          qt(s.pendingProps.value, v.value) || (e !== null ? e.push(p) : e = [p]);
        }
      } else if (s === Ue.current) {
        if (v = s.alternate, v === null) throw Error(i(387));
        v.memoizedState.memoizedState !== s.memoizedState.memoizedState && (e !== null ? e.push(io) : e = [io]);
      }
      s = s.return;
    }
    e !== null && Fs(t, e, r, l), t.flags |= 262144;
  }
  function Bl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!qt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function ji(e) {
    Ai = e, An = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function pt(e) {
    return Nh(Ai, e);
  }
  function Pl(e, t) {
    return Ai === null && ji(e), Nh(e, t);
  }
  function Nh(e, t) {
    var r = t._currentValue;
    if (t = {
      context: t,
      memoizedValue: r,
      next: null
    }, An === null) {
      if (e === null) throw Error(i(308));
      An = t, e.dependencies = {
        lanes: 0,
        firstContext: t
      }, e.flags |= 524288;
    } else An = An.next = t;
    return r;
  }
  var Q1 = typeof AbortController < "u" ? AbortController : function() {
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
  }, X1 = a.unstable_scheduleCallback, K1 = a.unstable_NormalPriority, nt = {
    $$typeof: ie,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ws() {
    return {
      controller: new Q1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Dr(e) {
    e.refCount--, e.refCount === 0 && X1(K1, function() {
      e.controller.abort();
    });
  }
  var Ar = null, ed = 0, ba = 0, Sa = null;
  function F1(e, t) {
    if (Ar === null) {
      var r = Ar = [];
      ed = 0, ba = af(), Sa = {
        status: "pending",
        value: void 0,
        then: function(l) {
          r.push(l);
        }
      };
    }
    return ed++, t.then(Ih, Ih), t;
  }
  function Ih() {
    if (--ed === 0 && Ar !== null) {
      Sa !== null && (Sa.status = "fulfilled");
      var e = Ar;
      Ar = null, ba = 0, Sa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function W1(e, t) {
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
  var Ch = q.S;
  q.S = function(e, t) {
    gy = Ct(), typeof t == "object" && t !== null && typeof t.then == "function" && F1(e, t), Ch !== null && Ch(e, t);
  };
  var Zi = S(null);
  function td() {
    var e = Zi.current;
    return e !== null ? e : qe.pooledCache;
  }
  function Jl(e, t) {
    t === null ? H(Zi, Zi.current) : H(Zi, t.pool);
  }
  function Rh() {
    var e = td();
    return e === null ? null : {
      parent: nt._currentValue,
      pool: e
    };
  }
  var $a = Error(i(460)), nd = Error(i(474)), Gl = Error(i(542)), Yl = { then: function() {
  } };
  function Mh(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function qh(e, t, r) {
    switch (r = e[r], r === void 0 ? e.push(t) : r !== t && (t.then(En, En), t = r), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Lh(e), e;
      default:
        if (typeof t.status == "string") t.then(En, En);
        else {
          if (e = qe, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
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
            throw e = t.reason, Lh(e), e;
        }
        throw Ii = t, $a;
    }
  }
  function Ni(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (r) {
      throw r !== null && typeof r == "object" && typeof r.then == "function" ? (Ii = r, $a) : r;
    }
  }
  var Ii = null;
  function Hh() {
    if (Ii === null) throw Error(i(459));
    var e = Ii;
    return Ii = null, e;
  }
  function Lh(e) {
    if (e === $a || e === Gl) throw Error(i(483));
  }
  var za = null, jr = 0;
  function Vl(e) {
    var t = jr;
    return jr += 1, za === null && (za = []), qh(za, e, t);
  }
  function Zr(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Ql(e, t) {
    throw t.$$typeof === M ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
  }
  function Bh(e) {
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
      return $ = Un($, b), $.index = 0, $.sibling = null, $;
    }
    function f($, b, x) {
      return $.index = x, e ? (x = $.alternate, x !== null ? (x = x.index, x < b ? ($.flags |= 67108866, b) : x) : ($.flags |= 67108866, b)) : ($.flags |= 1048576, b);
    }
    function v($) {
      return e && $.alternate === null && ($.flags |= 67108866), $;
    }
    function p($, b, x, Z) {
      return b === null || b.tag !== 6 ? (b = Ps(x, $.mode, Z), b.return = $, b) : (b = s(b, x), b.return = $, b);
    }
    function _($, b, x, Z) {
      var K = x.type;
      return K === Qe ? j($, b, x.props.children, Z, x.key) : b !== null && (b.elementType === K || typeof K == "object" && K !== null && K.$$typeof === ue && Ni(K) === b.type) ? (b = s(b, x.props), Zr(b, x), b.return = $, b) : (b = Hl(x.type, x.key, x.props, null, $.mode, Z), Zr(b, x), b.return = $, b);
    }
    function O($, b, x, Z) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== x.containerInfo || b.stateNode.implementation !== x.implementation ? (b = Js(x, $.mode, Z), b.return = $, b) : (b = s(b, x.children || []), b.return = $, b);
    }
    function j($, b, x, Z, K) {
      return b === null || b.tag !== 7 ? (b = Ui(x, $.mode, Z, K), b.return = $, b) : (b = s(b, x), b.return = $, b);
    }
    function N($, b, x) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint") return b = Ps("" + b, $.mode, x), b.return = $, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case F:
            return x = Hl(b.type, b.key, b.props, null, $.mode, x), Zr(x, b), x.return = $, x;
          case he:
            return b = Js(b, $.mode, x), b.return = $, b;
          case ue:
            return b = Ni(b), N($, b, x);
        }
        if (P(b) || bn(b)) return b = Ui(b, $.mode, x, null), b.return = $, b;
        if (typeof b.then == "function") return N($, Vl(b), x);
        if (b.$$typeof === ie) return N($, Pl($, b), x);
        Ql($, b);
      }
      return null;
    }
    function U($, b, x, Z) {
      var K = b !== null ? b.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint") return K !== null ? null : p($, b, "" + x, Z);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case F:
            return x.key === K ? _($, b, x, Z) : null;
          case he:
            return x.key === K ? O($, b, x, Z) : null;
          case ue:
            return x = Ni(x), U($, b, x, Z);
        }
        if (P(x) || bn(x)) return K !== null ? null : j($, b, x, Z, null);
        if (typeof x.then == "function") return U($, b, Vl(x), Z);
        if (x.$$typeof === ie) return U($, b, Pl($, x), Z);
        Ql($, x);
      }
      return null;
    }
    function A($, b, x, Z, K) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint") return $ = $.get(x) || null, p(b, $, "" + Z, K);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case F:
            return $ = $.get(Z.key === null ? x : Z.key) || null, _(b, $, Z, K);
          case he:
            return $ = $.get(Z.key === null ? x : Z.key) || null, O(b, $, Z, K);
          case ue:
            return Z = Ni(Z), A($, b, x, Z, K);
        }
        if (P(Z) || bn(Z)) return $ = $.get(x) || null, j(b, $, Z, K, null);
        if (typeof Z.then == "function") return A($, b, x, Vl(Z), K);
        if (Z.$$typeof === ie) return A($, b, x, Pl(b, Z), K);
        Ql(b, Z);
      }
      return null;
    }
    function Y($, b, x, Z) {
      for (var K = null, Se = null, Q = b, ce = b = 0, ye = null; Q !== null && ce < x.length; ce++) {
        Q.index > ce ? (ye = Q, Q = null) : ye = Q.sibling;
        var $e = U($, Q, x[ce], Z);
        if ($e === null) {
          Q === null && (Q = ye);
          break;
        }
        e && Q && $e.alternate === null && t($, Q), b = f($e, b, ce), Se === null ? K = $e : Se.sibling = $e, Se = $e, Q = ye;
      }
      if (ce === x.length) return r($, Q), _e && Dn($, ce), K;
      if (Q === null) {
        for (; ce < x.length; ce++) Q = N($, x[ce], Z), Q !== null && (b = f(Q, b, ce), Se === null ? K = Q : Se.sibling = Q, Se = Q);
        return _e && Dn($, ce), K;
      }
      for (Q = l(Q); ce < x.length; ce++) ye = A(Q, $, ce, x[ce], Z), ye !== null && (e && ye.alternate !== null && Q.delete(ye.key === null ? ce : ye.key), b = f(ye, b, ce), Se === null ? K = ye : Se.sibling = ye, Se = ye);
      return e && Q.forEach(function(yi) {
        return t($, yi);
      }), _e && Dn($, ce), K;
    }
    function ee($, b, x, Z) {
      if (x == null) throw Error(i(151));
      for (var K = null, Se = null, Q = b, ce = b = 0, ye = null, $e = x.next(); Q !== null && !$e.done; ce++, $e = x.next()) {
        Q.index > ce ? (ye = Q, Q = null) : ye = Q.sibling;
        var yi = U($, Q, $e.value, Z);
        if (yi === null) {
          Q === null && (Q = ye);
          break;
        }
        e && Q && yi.alternate === null && t($, Q), b = f(yi, b, ce), Se === null ? K = yi : Se.sibling = yi, Se = yi, Q = ye;
      }
      if ($e.done) return r($, Q), _e && Dn($, ce), K;
      if (Q === null) {
        for (; !$e.done; ce++, $e = x.next()) $e = N($, $e.value, Z), $e !== null && (b = f($e, b, ce), Se === null ? K = $e : Se.sibling = $e, Se = $e);
        return _e && Dn($, ce), K;
      }
      for (Q = l(Q); !$e.done; ce++, $e = x.next()) $e = A(Q, $, ce, $e.value, Z), $e !== null && (e && $e.alternate !== null && Q.delete($e.key === null ? ce : $e.key), b = f($e, b, ce), Se === null ? K = $e : Se.sibling = $e, Se = $e);
      return e && Q.forEach(function(v4) {
        return t($, v4);
      }), _e && Dn($, ce), K;
    }
    function Ce($, b, x, Z) {
      if (typeof x == "object" && x !== null && x.type === Qe && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case F:
            e: {
              for (var K = x.key; b !== null; ) {
                if (b.key === K) {
                  if (K = x.type, K === Qe) {
                    if (b.tag === 7) {
                      r($, b.sibling), Z = s(b, x.props.children), Z.return = $, $ = Z;
                      break e;
                    }
                  } else if (b.elementType === K || typeof K == "object" && K !== null && K.$$typeof === ue && Ni(K) === b.type) {
                    r($, b.sibling), Z = s(b, x.props), Zr(Z, x), Z.return = $, $ = Z;
                    break e;
                  }
                  r($, b);
                  break;
                } else t($, b);
                b = b.sibling;
              }
              x.type === Qe ? (Z = Ui(x.props.children, $.mode, Z, x.key), Z.return = $, $ = Z) : (Z = Hl(x.type, x.key, x.props, null, $.mode, Z), Zr(Z, x), Z.return = $, $ = Z);
            }
            return v($);
          case he:
            e: {
              for (K = x.key; b !== null; ) {
                if (b.key === K) if (b.tag === 4 && b.stateNode.containerInfo === x.containerInfo && b.stateNode.implementation === x.implementation) {
                  r($, b.sibling), Z = s(b, x.children || []), Z.return = $, $ = Z;
                  break e;
                } else {
                  r($, b);
                  break;
                }
                else t($, b);
                b = b.sibling;
              }
              Z = Js(x, $.mode, Z), Z.return = $, $ = Z;
            }
            return v($);
          case ue:
            return x = Ni(x), Ce($, b, x, Z);
        }
        if (P(x)) return Y($, b, x, Z);
        if (bn(x)) {
          if (K = bn(x), typeof K != "function") throw Error(i(150));
          return x = K.call(x), ee($, b, x, Z);
        }
        if (typeof x.then == "function") return Ce($, b, Vl(x), Z);
        if (x.$$typeof === ie) return Ce($, b, Pl($, x), Z);
        Ql($, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, b !== null && b.tag === 6 ? (r($, b.sibling), Z = s(b, x), Z.return = $, $ = Z) : (r($, b), Z = Ps(x, $.mode, Z), Z.return = $, $ = Z), v($)) : r($, b);
    }
    return function($, b, x, Z) {
      try {
        jr = 0;
        var K = Ce($, b, x, Z);
        return za = null, K;
      } catch (Q) {
        if (Q === $a || Q === Gl) throw Q;
        var Se = Ht(29, Q, null, $.mode);
        return Se.lanes = Z, Se.return = $, Se;
      }
    };
  }
  var Ci = Bh(!0), Ph = Bh(!1), ii = !1;
  function id(e) {
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
  function ad(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Ri(e) {
    return {
      lane: e,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Mi(e, t, r) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Te & 2) !== 0) {
      var s = l.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, t = ql(e), xh(e, null, r), t;
    }
    return Ml(e, l, t, r), ql(e);
  }
  function Nr(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, r |= l, t.lanes = r, Zp(e, r);
    }
  }
  function rd(e, t) {
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
  var od = !1;
  function Ir() {
    if (od) {
      var e = Sa;
      if (e !== null) throw e;
    }
  }
  function Cr(e, t, r, l) {
    od = !1;
    var s = e.updateQueue;
    ii = !1;
    var f = s.firstBaseUpdate, v = s.lastBaseUpdate, p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var _ = p, O = _.next;
      _.next = null, v === null ? f = O : v.next = O, v = _;
      var j = e.alternate;
      j !== null && (j = j.updateQueue, p = j.lastBaseUpdate, p !== v && (p === null ? j.firstBaseUpdate = O : p.next = O, j.lastBaseUpdate = _));
    }
    if (f !== null) {
      var N = s.baseState;
      v = 0, j = O = _ = null, p = f;
      do {
        var U = p.lane & -536870913, A = U !== p.lane;
        if (A ? (ge & U) === U : (l & U) === U) {
          U !== 0 && U === ba && (od = !0), j !== null && (j = j.next = {
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: null,
            next: null
          });
          e: {
            var Y = e, ee = p;
            U = t;
            var Ce = r;
            switch (ee.tag) {
              case 1:
                if (Y = ee.payload, typeof Y == "function") {
                  N = Y.call(Ce, N, U);
                  break e;
                }
                N = Y;
                break e;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = ee.payload, U = typeof Y == "function" ? Y.call(Ce, N, U) : Y, U == null) break e;
                N = k({}, N, U);
                break e;
              case 2:
                ii = !0;
            }
          }
          U = p.callback, U !== null && (e.flags |= 64, A && (e.flags |= 8192), A = s.callbacks, A === null ? s.callbacks = [U] : A.push(U));
        } else A = {
          lane: U,
          tag: p.tag,
          payload: p.payload,
          callback: p.callback,
          next: null
        }, j === null ? (O = j = A, _ = N) : j = j.next = A, v |= U;
        if (p = p.next, p === null) {
          if (p = s.shared.pending, p === null) break;
          A = p, p = A.next, A.next = null, s.lastBaseUpdate = A, s.shared.pending = null;
        }
      } while (!0);
      j === null && (_ = N), s.baseState = _, s.firstBaseUpdate = O, s.lastBaseUpdate = j, f === null && (s.shared.lanes = 0), ui |= v, e.lanes = v, e.memoizedState = N;
    }
  }
  function Jh(e, t) {
    if (typeof e != "function") throw Error(i(191, e));
    e.call(t);
  }
  function Gh(e, t) {
    var r = e.callbacks;
    if (r !== null) for (e.callbacks = null, e = 0; e < r.length; e++) Jh(r[e], t);
  }
  var ka = S(null), Xl = S(0);
  function Yh(e, t) {
    e = Ln, H(Xl, e), H(ka, t), Ln = e | t.baseLanes;
  }
  function ld() {
    H(Xl, Ln), H(ka, ka.current);
  }
  function ud() {
    Ln = Xl.current, C(ka), C(Xl);
  }
  var Lt = S(null), ln = null;
  function ai(e) {
    var t = e.alternate;
    H(We, We.current & 1), H(Lt, e), ln === null && (t === null || ka.current !== null || t.memoizedState !== null) && (ln = e);
  }
  function cd(e) {
    H(We, We.current), H(Lt, e), ln === null && (ln = e);
  }
  function Vh(e) {
    e.tag === 22 ? (H(We, We.current), H(Lt, e), ln === null && (ln = e)) : ri(e);
  }
  function ri() {
    H(We, We.current), H(Lt, Lt.current);
  }
  function Bt(e) {
    C(Lt), ln === e && (ln = null), C(We);
  }
  var We = S(0);
  function Kl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || pf(r) || hf(r))) return t;
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
  var Zn = 0, le = null, Ne = null, it = null, Fl = !1, wa = !1, qi = !1, Wl = 0, Rr = 0, Ta = null, ek = 0;
  function Xe() {
    throw Error(i(321));
  }
  function sd(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!qt(e[r], t[r])) return !1;
    return !0;
  }
  function dd(e, t, r, l, s, f) {
    return Zn = f, le = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, q.H = e === null || e.memoizedState === null ? Dg : Td, qi = !1, f = r(l, s), qi = !1, wa && (f = Xh(t, r, l, s)), Qh(e), f;
  }
  function Qh(e) {
    q.H = Hr;
    var t = Ne !== null && Ne.next !== null;
    if (Zn = 0, it = Ne = le = null, Fl = !1, Rr = 0, Ta = null, t) throw Error(i(300));
    e === null || at || (e = e.dependencies, e !== null && Bl(e) && (at = !0));
  }
  function Xh(e, t, r, l) {
    le = e;
    var s = 0;
    do {
      if (wa && (Ta = null), Rr = 0, wa = !1, 25 <= s) throw Error(i(301));
      if (s += 1, it = Ne = null, e.updateQueue != null) {
        var f = e.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      q.H = Ag, f = t(r, l);
    } while (wa);
    return f;
  }
  function tk() {
    var e = q.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Mr(t) : t, e = e.useState()[0], (Ne !== null ? Ne.memoizedState : null) !== e && (le.flags |= 1024), t;
  }
  function fd() {
    var e = Wl !== 0;
    return Wl = 0, e;
  }
  function md(e, t, r) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~r;
  }
  function vd(e) {
    if (Fl) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Fl = !1;
    }
    Zn = 0, it = Ne = le = null, wa = !1, Rr = Wl = 0, Ta = null;
  }
  function wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return it === null ? le.memoizedState = it = e : it = it.next = e, it;
  }
  function et() {
    if (Ne === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = it === null ? le.memoizedState : it.next;
    if (t !== null) it = t, Ne = e;
    else {
      if (e === null)
        throw le.alternate === null ? Error(i(467)) : Error(i(310));
      Ne = e, e = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
        next: null
      }, it === null ? le.memoizedState = it = e : it = it.next = e;
    }
    return it;
  }
  function eu() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function Mr(e) {
    var t = Rr;
    return Rr += 1, Ta === null && (Ta = []), e = qh(Ta, e, t), t = le, (it === null ? t.memoizedState : it.next) === null && (t = t.alternate, q.H = t === null || t.memoizedState === null ? Dg : Td), e;
  }
  function tu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Mr(e);
      if (e.$$typeof === ie) return pt(e);
    }
    throw Error(i(438, String(e)));
  }
  function pd(e) {
    var t = null, r = le.updateQueue;
    if (r !== null && (t = r.memoCache), t == null) {
      var l = le.alternate;
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
    }, r === null && (r = eu(), le.updateQueue = r), r.memoCache = t, r = t.data[t.index], r === void 0) for (r = t.data[t.index] = Array(e), l = 0; l < e; l++) r[l] = Ft;
    return t.index++, r;
  }
  function Nn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function nu(e) {
    return hd(et(), Ne, e);
  }
  function hd(e, t, r) {
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
      var p = v = null, _ = null, O = t, j = !1;
      do {
        var N = O.lane & -536870913;
        if (N !== O.lane ? (ge & N) === N : (Zn & N) === N) {
          var U = O.revertLane;
          if (U === 0) _ !== null && (_ = _.next = {
            lane: 0,
            revertLane: 0,
            gesture: null,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          }), N === ba && (j = !0);
          else if ((Zn & U) === U) {
            O = O.next, U === ba && (j = !0);
            continue;
          } else N = {
            lane: 0,
            revertLane: O.revertLane,
            gesture: null,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          }, _ === null ? (p = _ = N, v = f) : _ = _.next = N, le.lanes |= U, ui |= U;
          N = O.action, qi && r(f, N), f = O.hasEagerState ? O.eagerState : r(f, N);
        } else U = {
          lane: N,
          revertLane: O.revertLane,
          gesture: O.gesture,
          action: O.action,
          hasEagerState: O.hasEagerState,
          eagerState: O.eagerState,
          next: null
        }, _ === null ? (p = _ = U, v = f) : _ = _.next = U, le.lanes |= N, ui |= N;
        O = O.next;
      } while (O !== null && O !== t);
      if (_ === null ? v = f : _.next = p, !qt(f, e.memoizedState) && (at = !0, j && (r = Sa, r !== null))) throw r;
      e.memoizedState = f, e.baseState = v, e.baseQueue = _, l.lastRenderedState = f;
    }
    return s === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function gd(e) {
    var t = et(), r = t.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = e;
    var l = r.dispatch, s = r.pending, f = t.memoizedState;
    if (s !== null) {
      r.pending = null;
      var v = s = s.next;
      do
        f = e(f, v.action), v = v.next;
      while (v !== s);
      qt(f, t.memoizedState) || (at = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), r.lastRenderedState = f;
    }
    return [f, l];
  }
  function Kh(e, t, r) {
    var l = le, s = et(), f = _e;
    if (f) {
      if (r === void 0) throw Error(i(407));
      r = r();
    } else r = t();
    var v = !qt((Ne || s).memoizedState, r);
    if (v && (s.memoizedState = r, at = !0), s = s.queue, bd(eg.bind(null, l, s, e), [e]), s.getSnapshot !== t || v || it !== null && it.memoizedState.tag & 1) {
      if (l.flags |= 2048, xa(9, { destroy: void 0 }, Wh.bind(null, l, s, r, t), null), qe === null) throw Error(i(349));
      f || (Zn & 127) !== 0 || Fh(l, t, r);
    }
    return r;
  }
  function Fh(e, t, r) {
    e.flags |= 16384, e = {
      getSnapshot: t,
      value: r
    }, t = le.updateQueue, t === null ? (t = eu(), le.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
  }
  function Wh(e, t, r, l) {
    t.value = r, t.getSnapshot = l, tg(t) && ng(e);
  }
  function eg(e, t, r) {
    return r(function() {
      tg(t) && ng(e);
    });
  }
  function tg(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !qt(e, r);
    } catch {
      return !0;
    }
  }
  function ng(e) {
    var t = Oi(e, 2);
    t !== null && Zt(t, e, 2);
  }
  function yd(e) {
    var t = wt();
    if (typeof e == "function") {
      var r = e;
      if (e = r(), qi) {
        Xn(!0);
        try {
          r();
        } finally {
          Xn(!1);
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
  function ig(e, t, r, l) {
    return e.baseState = r, hd(e, Ne, typeof l == "function" ? l : Nn);
  }
  function nk(e, t, r, l, s) {
    if (ru(e)) throw Error(i(485));
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
      q.T !== null ? r(!0) : f.isTransition = !1, l(f), r = t.pending, r === null ? (f.next = t.pending = f, ag(t, f)) : (f.next = r.next, t.pending = r.next = f);
    }
  }
  function ag(e, t) {
    var r = t.action, l = t.payload, s = e.state;
    if (t.isTransition) {
      var f = q.T, v = {};
      q.T = v;
      try {
        var p = r(s, l), _ = q.S;
        _ !== null && _(v, p), rg(e, t, p);
      } catch (O) {
        _d(e, t, O);
      } finally {
        f !== null && v.types !== null && (f.types = v.types), q.T = f;
      }
    } else try {
      f = r(s, l), rg(e, t, f);
    } catch (O) {
      _d(e, t, O);
    }
  }
  function rg(e, t, r) {
    r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(function(l) {
      og(e, t, l);
    }, function(l) {
      return _d(e, t, l);
    }) : og(e, t, r);
  }
  function og(e, t, r) {
    t.status = "fulfilled", t.value = r, lg(t), e.state = r, t = e.pending, t !== null && (r = t.next, r === t ? e.pending = null : (r = r.next, t.next = r, ag(e, r)));
  }
  function _d(e, t, r) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = r, lg(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function lg(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function ug(e, t) {
    return t;
  }
  function cg(e, t) {
    if (_e) {
      var r = qe.formState;
      if (r !== null) {
        e: {
          var l = le;
          if (_e) {
            if (Je) {
              t: {
                for (var s = Je, f = on; s.nodeType !== 8; ) {
                  if (!f) {
                    s = null;
                    break t;
                  }
                  if (s = cn(s.nextSibling), s === null) {
                    s = null;
                    break t;
                  }
                }
                f = s.data, s = f === "F!" || f === "F" ? s : null;
              }
              if (s) {
                Je = cn(s.nextSibling), l = s.data === "F!";
                break e;
              }
            }
            ti(l);
          }
          l = !1;
        }
        l && (t = r[0]);
      }
    }
    return r = wt(), r.memoizedState = r.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ug,
      lastRenderedState: t
    }, r.queue = l, r = Eg.bind(null, le, l), l.dispatch = r, l = yd(!1), f = wd.bind(null, le, !1, l.queue), l = wt(), s = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = s, r = nk.bind(null, le, s, f, r), s.dispatch = r, l.memoizedState = e, [
      t,
      r,
      !1
    ];
  }
  function sg(e) {
    return dg(et(), Ne, e);
  }
  function dg(e, t, r) {
    if (t = hd(e, t, ug)[0], e = nu(Nn)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var l = Mr(t);
    } catch (v) {
      throw v === $a ? Gl : v;
    }
    else l = t;
    t = et();
    var s = t.queue, f = s.dispatch;
    return r !== t.memoizedState && (le.flags |= 2048, xa(9, { destroy: void 0 }, ik.bind(null, s, r), null)), [
      l,
      f,
      e
    ];
  }
  function ik(e, t) {
    e.action = t;
  }
  function fg(e) {
    var t = et(), r = Ne;
    if (r !== null) return dg(t, r, e);
    et(), t = t.memoizedState, r = et();
    var l = r.queue.dispatch;
    return r.memoizedState = e, [
      t,
      l,
      !1
    ];
  }
  function xa(e, t, r, l) {
    return e = {
      tag: e,
      create: r,
      deps: l,
      inst: t,
      next: null
    }, t = le.updateQueue, t === null && (t = eu(), le.updateQueue = t), r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (l = r.next, r.next = e, e.next = l, t.lastEffect = e), e;
  }
  function mg() {
    return et().memoizedState;
  }
  function iu(e, t, r, l) {
    var s = wt();
    le.flags |= e, s.memoizedState = xa(1 | t, { destroy: void 0 }, r, l === void 0 ? null : l);
  }
  function au(e, t, r, l) {
    var s = et();
    l = l === void 0 ? null : l;
    var f = s.memoizedState.inst;
    Ne !== null && l !== null && sd(l, Ne.memoizedState.deps) ? s.memoizedState = xa(t, f, r, l) : (le.flags |= e, s.memoizedState = xa(1 | t, f, r, l));
  }
  function vg(e, t) {
    iu(8390656, 8, e, t);
  }
  function bd(e, t) {
    au(2048, 8, e, t);
  }
  function ak(e) {
    le.flags |= 4;
    var t = le.updateQueue;
    if (t === null) t = eu(), le.updateQueue = t, t.events = [e];
    else {
      var r = t.events;
      r === null ? t.events = [e] : r.push(e);
    }
  }
  function pg(e) {
    var t = et().memoizedState;
    return ak({
      ref: t,
      nextImpl: e
    }), function() {
      if ((Te & 2) !== 0) throw Error(i(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function hg(e, t) {
    return au(4, 2, e, t);
  }
  function gg(e, t) {
    return au(4, 4, e, t);
  }
  function yg(e, t) {
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
  function _g(e, t, r) {
    r = r != null ? r.concat([e]) : null, au(4, 4, yg.bind(null, t, e), r);
  }
  function Sd() {
  }
  function bg(e, t) {
    var r = et();
    t = t === void 0 ? null : t;
    var l = r.memoizedState;
    return t !== null && sd(t, l[1]) ? l[0] : (r.memoizedState = [e, t], e);
  }
  function Sg(e, t) {
    var r = et();
    t = t === void 0 ? null : t;
    var l = r.memoizedState;
    if (t !== null && sd(t, l[1])) return l[0];
    if (l = e(), qi) {
      Xn(!0);
      try {
        e();
      } finally {
        Xn(!1);
      }
    }
    return r.memoizedState = [l, t], l;
  }
  function $d(e, t, r) {
    return r === void 0 || (Zn & 1073741824) !== 0 && (ge & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = r, e = _y(), le.lanes |= e, ui |= e, r);
  }
  function $g(e, t, r, l) {
    return qt(r, t) ? r : ka.current !== null ? (e = $d(e, r, l), qt(e, t) || (at = !0), e) : (Zn & 42) === 0 || (Zn & 1073741824) !== 0 && (ge & 261930) === 0 ? (at = !0, e.memoizedState = r) : (e = _y(), le.lanes |= e, ui |= e, t);
  }
  function zg(e, t, r, l, s) {
    var f = L.p;
    L.p = f !== 0 && 8 > f ? f : 8;
    var v = q.T, p = {};
    q.T = p, wd(e, !1, t, r);
    try {
      var _ = s(), O = q.S;
      O !== null && O(p, _), _ !== null && typeof _ == "object" && typeof _.then == "function" ? qr(e, t, W1(_, l), un(e)) : qr(e, t, l, un(e));
    } catch (j) {
      qr(e, t, {
        then: function() {
        },
        status: "rejected",
        reason: j
      }, un());
    } finally {
      L.p = f, v !== null && p.types !== null && (v.types = p.types), q.T = v;
    }
  }
  function rk() {
  }
  function zd(e, t, r, l) {
    if (e.tag !== 5) throw Error(i(476));
    var s = kg(e).queue;
    zg(e, s, t, we, r === null ? rk : function() {
      return wg(e), r(l);
    });
  }
  function kg(e) {
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
        lastRenderedReducer: Nn,
        lastRenderedState: we
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
  function wg(e) {
    var t = kg(e);
    t.next === null && (t = e.alternate.memoizedState), qr(e, t.next.queue, {}, un());
  }
  function kd() {
    return pt(io);
  }
  function Tg() {
    return et().memoizedState;
  }
  function xg() {
    return et().memoizedState;
  }
  function ok(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var r = un();
          e = Ri(r);
          var l = Mi(t, e, r);
          l !== null && (Zt(l, t, r), Nr(l, t, r)), t = { cache: Ws() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function lk(e, t, r) {
    var l = un();
    r = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ru(e) ? Og(t, r) : (r = Ls(e, t, r, l), r !== null && (Zt(r, e, l), Ug(r, t, l)));
  }
  function Eg(e, t, r) {
    qr(e, t, r, un());
  }
  function qr(e, t, r, l) {
    var s = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ru(e)) Og(t, s);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) try {
        var v = t.lastRenderedState, p = f(v, r);
        if (s.hasEagerState = !0, s.eagerState = p, qt(p, v)) return Ml(e, t, s, 0), qe === null && Rl(), !1;
      } catch {
      }
      if (r = Ls(e, t, s, l), r !== null) return Zt(r, e, l), Ug(r, t, l), !0;
    }
    return !1;
  }
  function wd(e, t, r, l) {
    if (l = {
      lane: 2,
      revertLane: af(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ru(e)) {
      if (t) throw Error(i(479));
    } else t = Ls(e, r, l, 2), t !== null && Zt(t, e, 2);
  }
  function ru(e) {
    var t = e.alternate;
    return e === le || t !== null && t === le;
  }
  function Og(e, t) {
    wa = Fl = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
  }
  function Ug(e, t, r) {
    if ((r & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, r |= l, t.lanes = r, Zp(e, r);
    }
  }
  var Hr = {
    readContext: pt,
    use: tu,
    useCallback: Xe,
    useContext: Xe,
    useEffect: Xe,
    useImperativeHandle: Xe,
    useLayoutEffect: Xe,
    useInsertionEffect: Xe,
    useMemo: Xe,
    useReducer: Xe,
    useRef: Xe,
    useState: Xe,
    useDebugValue: Xe,
    useDeferredValue: Xe,
    useTransition: Xe,
    useSyncExternalStore: Xe,
    useId: Xe,
    useHostTransitionStatus: Xe,
    useFormState: Xe,
    useActionState: Xe,
    useOptimistic: Xe,
    useMemoCache: Xe,
    useCacheRefresh: Xe
  };
  Hr.useEffectEvent = Xe;
  var Dg = {
    readContext: pt,
    use: tu,
    useCallback: function(e, t) {
      return wt().memoizedState = [e, t === void 0 ? null : t], e;
    },
    useContext: pt,
    useEffect: vg,
    useImperativeHandle: function(e, t, r) {
      r = r != null ? r.concat([e]) : null, iu(4194308, 4, yg.bind(null, t, e), r);
    },
    useLayoutEffect: function(e, t) {
      return iu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      iu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var r = wt();
      t = t === void 0 ? null : t;
      var l = e();
      if (qi) {
        Xn(!0);
        try {
          e();
        } finally {
          Xn(!1);
        }
      }
      return r.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, r) {
      var l = wt();
      if (r !== void 0) {
        var s = r(t);
        if (qi) {
          Xn(!0);
          try {
            r(t);
          } finally {
            Xn(!1);
          }
        }
      } else s = t;
      return l.memoizedState = l.baseState = s, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      }, l.queue = e, e = e.dispatch = lk.bind(null, le, e), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = wt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = yd(e);
      var t = e.queue, r = Eg.bind(null, le, t);
      return t.dispatch = r, [e.memoizedState, r];
    },
    useDebugValue: Sd,
    useDeferredValue: function(e, t) {
      return $d(wt(), e, t);
    },
    useTransition: function() {
      var e = yd(!1);
      return e = zg.bind(null, le, e.queue, !0, !1), wt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, r) {
      var l = le, s = wt();
      if (_e) {
        if (r === void 0) throw Error(i(407));
        r = r();
      } else {
        if (r = t(), qe === null) throw Error(i(349));
        (ge & 127) !== 0 || Fh(l, t, r);
      }
      s.memoizedState = r;
      var f = {
        value: r,
        getSnapshot: t
      };
      return s.queue = f, vg(eg.bind(null, l, f, e), [e]), l.flags |= 2048, xa(9, { destroy: void 0 }, Wh.bind(null, l, f, r, t), null), r;
    },
    useId: function() {
      var e = wt(), t = qe.identifierPrefix;
      if (_e) {
        var r = $n, l = Sn;
        r = (l & ~(1 << 32 - Mt(l) - 1)).toString(32) + r, t = "_" + t + "R_" + r, r = Wl++, 0 < r && (t += "H" + r.toString(32)), t += "_";
      } else r = ek++, t = "_" + t + "r_" + r.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: kd,
    useFormState: cg,
    useActionState: cg,
    useOptimistic: function(e) {
      var t = wt();
      t.memoizedState = t.baseState = e;
      var r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = r, t = wd.bind(null, le, !0, r), r.dispatch = t, [e, t];
    },
    useMemoCache: pd,
    useCacheRefresh: function() {
      return wt().memoizedState = ok.bind(null, le);
    },
    useEffectEvent: function(e) {
      var t = wt(), r = { impl: e };
      return t.memoizedState = r, function() {
        if ((Te & 2) !== 0) throw Error(i(440));
        return r.impl.apply(void 0, arguments);
      };
    }
  }, Td = {
    readContext: pt,
    use: tu,
    useCallback: bg,
    useContext: pt,
    useEffect: bd,
    useImperativeHandle: _g,
    useInsertionEffect: hg,
    useLayoutEffect: gg,
    useMemo: Sg,
    useReducer: nu,
    useRef: mg,
    useState: function() {
      return nu(Nn);
    },
    useDebugValue: Sd,
    useDeferredValue: function(e, t) {
      return $g(et(), Ne.memoizedState, e, t);
    },
    useTransition: function() {
      var e = nu(Nn)[0], t = et().memoizedState;
      return [typeof e == "boolean" ? e : Mr(e), t];
    },
    useSyncExternalStore: Kh,
    useId: Tg,
    useHostTransitionStatus: kd,
    useFormState: sg,
    useActionState: sg,
    useOptimistic: function(e, t) {
      return ig(et(), Ne, e, t);
    },
    useMemoCache: pd,
    useCacheRefresh: xg
  };
  Td.useEffectEvent = pg;
  var Ag = {
    readContext: pt,
    use: tu,
    useCallback: bg,
    useContext: pt,
    useEffect: bd,
    useImperativeHandle: _g,
    useInsertionEffect: hg,
    useLayoutEffect: gg,
    useMemo: Sg,
    useReducer: gd,
    useRef: mg,
    useState: function() {
      return gd(Nn);
    },
    useDebugValue: Sd,
    useDeferredValue: function(e, t) {
      var r = et();
      return Ne === null ? $d(r, e, t) : $g(r, Ne.memoizedState, e, t);
    },
    useTransition: function() {
      var e = gd(Nn)[0], t = et().memoizedState;
      return [typeof e == "boolean" ? e : Mr(e), t];
    },
    useSyncExternalStore: Kh,
    useId: Tg,
    useHostTransitionStatus: kd,
    useFormState: fg,
    useActionState: fg,
    useOptimistic: function(e, t) {
      var r = et();
      return Ne !== null ? ig(r, Ne, e, t) : (r.baseState = e, [e, r.queue.dispatch]);
    },
    useMemoCache: pd,
    useCacheRefresh: xg
  };
  Ag.useEffectEvent = pg;
  function xd(e, t, r, l) {
    t = e.memoizedState, r = r(l, t), r = r == null ? t : k({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Ed = {
    enqueueSetState: function(e, t, r) {
      e = e._reactInternals;
      var l = un(), s = Ri(l);
      s.payload = t, r != null && (s.callback = r), t = Mi(e, s, l), t !== null && (Zt(t, e, l), Nr(t, e, l));
    },
    enqueueReplaceState: function(e, t, r) {
      e = e._reactInternals;
      var l = un(), s = Ri(l);
      s.tag = 1, s.payload = t, r != null && (s.callback = r), t = Mi(e, s, l), t !== null && (Zt(t, e, l), Nr(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var r = un(), l = Ri(r);
      l.tag = 2, t != null && (l.callback = t), t = Mi(e, l, r), t !== null && (Zt(t, e, r), Nr(t, e, r));
    }
  };
  function jg(e, t, r, l, s, f, v) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, f, v) : t.prototype && t.prototype.isPureReactComponent ? !xr(r, l) || !xr(s, f) : !0;
  }
  function Zg(e, t, r, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, l), t.state !== e && Ed.enqueueReplaceState(t, t.state, null);
  }
  function Hi(e, t) {
    var r = t;
    if ("ref" in t) {
      r = {};
      for (var l in t) l !== "ref" && (r[l] = t[l]);
    }
    if (e = e.defaultProps) {
      r === t && (r = k({}, r));
      for (var s in e) r[s] === void 0 && (r[s] = e[s]);
    }
    return r;
  }
  function uk(e) {
    Cl(e);
  }
  function ck(e) {
    console.error(e);
  }
  function sk(e) {
    Cl(e);
  }
  function ou(e, t) {
    try {
      var r = e.onUncaughtError;
      r(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Ng(e, t, r) {
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
  function Od(e, t, r) {
    return r = Ri(r), r.tag = 3, r.payload = { element: null }, r.callback = function() {
      ou(e, t);
    }, r;
  }
  function Ig(e) {
    return e = Ri(e), e.tag = 3, e;
  }
  function Cg(e, t, r, l) {
    var s = r.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var f = l.value;
      e.payload = function() {
        return s(f);
      }, e.callback = function() {
        Ng(t, r, l);
      };
    }
    var v = r.stateNode;
    v !== null && typeof v.componentDidCatch == "function" && (e.callback = function() {
      Ng(t, r, l), typeof s != "function" && (ci === null ? ci = /* @__PURE__ */ new Set([this]) : ci.add(this));
      var p = l.stack;
      this.componentDidCatch(l.value, { componentStack: p !== null ? p : "" });
    });
  }
  function dk(e, t, r, l, s) {
    if (r.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = r.alternate, t !== null && _a(t, r, s, !0), r = Lt.current, r !== null) {
        switch (r.tag) {
          case 31:
          case 13:
            return ln === null ? yu() : r.alternate === null && Ke === 0 && (Ke = 3), r.flags &= -257, r.flags |= 65536, r.lanes = s, l === Yl ? r.flags |= 16384 : (t = r.updateQueue, t === null ? r.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), ef(e, l, s)), !1;
          case 22:
            return r.flags |= 65536, l === Yl ? r.flags |= 16384 : (t = r.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, r.updateQueue = t) : (r = t.retryQueue, r === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : r.add(l)), ef(e, l, s)), !1;
        }
        throw Error(i(435, r.tag));
      }
      return ef(e, l, s), yu(), !1;
    }
    if (_e) return t = Lt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = s, l !== Vs && (e = Error(i(422), { cause: l }), Ur(nn(e, r)))) : (l !== Vs && (t = Error(i(423), { cause: l }), Ur(nn(t, r))), e = e.current.alternate, e.flags |= 65536, s &= -s, e.lanes |= s, l = nn(l, r), s = Od(e.stateNode, l, s), rd(e, s), Ke !== 4 && (Ke = 2)), !1;
    var f = Error(i(520), { cause: l });
    if (f = nn(f, r), Qr === null ? Qr = [f] : Qr.push(f), Ke !== 4 && (Ke = 2), t === null) return !0;
    l = nn(l, r), r = t;
    do {
      switch (r.tag) {
        case 3:
          return r.flags |= 65536, e = s & -s, r.lanes |= e, e = Od(r.stateNode, l, e), rd(r, e), !1;
        case 1:
          if (t = r.type, f = r.stateNode, (r.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (ci === null || !ci.has(f)))) return r.flags |= 65536, s &= -s, r.lanes |= s, s = Ig(s), Cg(s, e, r, l), rd(r, s), !1;
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var Ud = Error(i(461)), at = !1;
  function ht(e, t, r, l) {
    t.child = e === null ? Ph(t, null, r, l) : Ci(t, e.child, r, l);
  }
  function Rg(e, t, r, l, s) {
    r = r.render;
    var f = t.ref;
    if ("ref" in l) {
      var v = {};
      for (var p in l) p !== "ref" && (v[p] = l[p]);
    } else v = l;
    return ji(t), l = dd(e, t, r, v, f, s), p = fd(), e !== null && !at ? (md(e, t, s), In(e, t, s)) : (_e && p && Gs(t), t.flags |= 1, ht(e, t, l, s), t.child);
  }
  function Mg(e, t, r, l, s) {
    if (e === null) {
      var f = r.type;
      return typeof f == "function" && !Bs(f) && f.defaultProps === void 0 && r.compare === null ? (t.tag = 15, t.type = f, qg(e, t, f, l, s)) : (e = Hl(r.type, null, l, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (f = e.child, !Rd(e, s)) {
      var v = f.memoizedProps;
      if (r = r.compare, r = r !== null ? r : xr, r(v, l) && e.ref === t.ref) return In(e, t, s);
    }
    return t.flags |= 1, e = Un(f, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function qg(e, t, r, l, s) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (xr(f, l) && e.ref === t.ref) if (at = !1, t.pendingProps = l = f, Rd(e, s)) (e.flags & 131072) !== 0 && (at = !0);
      else return t.lanes = e.lanes, In(e, t, s);
    }
    return Dd(e, t, r, l, s);
  }
  function Hg(e, t, r, l) {
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
        return Lg(e, t, f, r, l);
      }
      if ((r & 536870912) !== 0) t.memoizedState = {
        baseLanes: 0,
        cachePool: null
      }, e !== null && Jl(t, f !== null ? f.cachePool : null), f !== null ? Yh(t, f) : ld(), Vh(t);
      else return l = t.lanes = 536870912, Lg(e, t, f !== null ? f.baseLanes | r : r, r, l);
    } else f !== null ? (Jl(t, f.cachePool), Yh(t, f), ri(t), t.memoizedState = null) : (e !== null && Jl(t, null), ld(), ri(t));
    return ht(e, t, s, r), t.child;
  }
  function Lr(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Lg(e, t, r, l, s) {
    var f = td();
    return f = f === null ? null : {
      parent: nt._currentValue,
      pool: f
    }, t.memoizedState = {
      baseLanes: r,
      cachePool: f
    }, e !== null && Jl(t, null), ld(), Vh(t), e !== null && _a(e, t, l, !0), t.childLanes = s, null;
  }
  function lu(e, t) {
    return t = cu({
      mode: t.mode,
      children: t.children
    }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Bg(e, t, r) {
    return Ci(t, e.child, null, r), e = lu(t, t.pendingProps), e.flags |= 2, Bt(t), t.memoizedState = null, e;
  }
  function fk(e, t, r) {
    var l = t.pendingProps, s = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (_e) {
        if (l.mode === "hidden") return e = lu(t, l), t.lanes = 536870912, Lr(null, e);
        if (cd(t), (e = Je) ? (e = n_(e, on), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Wn !== null ? {
            id: Sn,
            overflow: $n
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = Oh(e), r.return = t, t.child = r, vt = t, Je = null)) : e = null, e === null) throw ti(t);
        return t.lanes = 536870912, null;
      }
      return lu(t, l);
    }
    var f = e.memoizedState;
    if (f !== null) {
      var v = f.dehydrated;
      if (cd(t), s) if (t.flags & 256) t.flags &= -257, t = Bg(e, t, r);
      else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
      else throw Error(i(558));
      else if (at || _a(e, t, r, !1), s = (r & e.childLanes) !== 0, at || s) {
        if (l = qe, l !== null && (v = Np(l, r), v !== 0 && v !== f.retryLane)) throw f.retryLane = v, Oi(e, v), Zt(l, e, v), Ud;
        yu(), t = Bg(e, t, r);
      } else e = f.treeContext, Je = cn(v.nextSibling), vt = t, _e = !0, ei = null, on = !1, e !== null && Ah(t, e), t = lu(t, l), t.flags |= 4096;
      return t;
    }
    return e = Un(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function uu(e, t) {
    var r = t.ref;
    if (r === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object") throw Error(i(284));
      (e === null || e.ref !== r) && (t.flags |= 4194816);
    }
  }
  function Dd(e, t, r, l, s) {
    return ji(t), r = dd(e, t, r, l, void 0, s), l = fd(), e !== null && !at ? (md(e, t, s), In(e, t, s)) : (_e && l && Gs(t), t.flags |= 1, ht(e, t, r, s), t.child);
  }
  function Pg(e, t, r, l, s, f) {
    return ji(t), t.updateQueue = null, r = Xh(t, l, r, s), Qh(e), l = fd(), e !== null && !at ? (md(e, t, f), In(e, t, f)) : (_e && l && Gs(t), t.flags |= 1, ht(e, t, r, f), t.child);
  }
  function Jg(e, t, r, l, s) {
    if (ji(t), t.stateNode === null) {
      var f = pa, v = r.contextType;
      typeof v == "object" && v !== null && (f = pt(v)), f = new r(l, f), t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Ed, t.stateNode = f, f._reactInternals = t, f = t.stateNode, f.props = l, f.state = t.memoizedState, f.refs = {}, id(t), v = r.contextType, f.context = typeof v == "object" && v !== null ? pt(v) : pa, f.state = t.memoizedState, v = r.getDerivedStateFromProps, typeof v == "function" && (xd(t, r, v, l), f.state = t.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (v = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), v !== f.state && Ed.enqueueReplaceState(f, f.state, null), Cr(t, l, f, s), Ir(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      f = t.stateNode;
      var p = t.memoizedProps, _ = Hi(r, p);
      f.props = _;
      var O = f.context, j = r.contextType;
      v = pa, typeof j == "object" && j !== null && (v = pt(j));
      var N = r.getDerivedStateFromProps;
      j = typeof N == "function" || typeof f.getSnapshotBeforeUpdate == "function", p = t.pendingProps !== p, j || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (p || O !== v) && Zg(t, f, l, v), ii = !1;
      var U = t.memoizedState;
      f.state = U, Cr(t, l, f, s), Ir(), O = t.memoizedState, p || U !== O || ii ? (typeof N == "function" && (xd(t, r, N, l), O = t.memoizedState), (_ = ii || jg(t, r, _, l, U, O, v)) ? (j || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = O), f.props = l, f.state = O, f.context = v, l = _) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      f = t.stateNode, ad(e, t), v = t.memoizedProps, j = Hi(r, v), f.props = j, N = t.pendingProps, U = f.context, O = r.contextType, _ = pa, typeof O == "object" && O !== null && (_ = pt(O)), p = r.getDerivedStateFromProps, (O = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (v !== N || U !== _) && Zg(t, f, l, _), ii = !1, U = t.memoizedState, f.state = U, Cr(t, l, f, s), Ir();
      var A = t.memoizedState;
      v !== N || U !== A || ii || e !== null && e.dependencies !== null && Bl(e.dependencies) ? (typeof p == "function" && (xd(t, r, p, l), A = t.memoizedState), (j = ii || jg(t, r, j, l, U, A, _) || e !== null && e.dependencies !== null && Bl(e.dependencies)) ? (O || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(l, A, _), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(l, A, _)), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = A), f.props = l, f.state = A, f.context = _, l = j) : (typeof f.componentDidUpdate != "function" || v === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return f = l, uu(e, t), l = (t.flags & 128) !== 0, f || l ? (f = t.stateNode, r = l && typeof r.getDerivedStateFromError != "function" ? null : f.render(), t.flags |= 1, e !== null && l ? (t.child = Ci(t, e.child, null, s), t.child = Ci(t, null, r, s)) : ht(e, t, r, s), t.memoizedState = f.state, e = t.child) : e = In(e, t, s), e;
  }
  function Gg(e, t, r, l) {
    return Di(), t.flags |= 256, ht(e, t, r, l), t.child;
  }
  var Ad = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function jd(e) {
    return {
      baseLanes: e,
      cachePool: Rh()
    };
  }
  function Zd(e, t, r) {
    return e = e !== null ? e.childLanes & ~r : 0, t && (e |= Jt), e;
  }
  function Yg(e, t, r) {
    var l = t.pendingProps, s = !1, f = (t.flags & 128) !== 0, v;
    if ((v = f) || (v = e !== null && e.memoizedState === null ? !1 : (We.current & 2) !== 0), v && (s = !0, t.flags &= -129), v = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (_e) {
        if (s ? ai(t) : ri(t), (e = Je) ? (e = n_(e, on), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Wn !== null ? {
            id: Sn,
            overflow: $n
          } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = Oh(e), r.return = t, t.child = r, vt = t, Je = null)) : e = null, e === null) throw ti(t);
        return hf(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var p = l.children;
      return l = l.fallback, s ? (ri(t), s = t.mode, p = cu({
        mode: "hidden",
        children: p
      }, s), l = Ui(l, s, r, null), p.return = t, l.return = t, p.sibling = l, t.child = p, l = t.child, l.memoizedState = jd(r), l.childLanes = Zd(e, v, r), t.memoizedState = Ad, Lr(null, l)) : (ai(t), Nd(t, p));
    }
    var _ = e.memoizedState;
    if (_ !== null && (p = _.dehydrated, p !== null)) {
      if (f) t.flags & 256 ? (ai(t), t.flags &= -257, t = Id(e, t, r)) : t.memoizedState !== null ? (ri(t), t.child = e.child, t.flags |= 128, t = null) : (ri(t), p = l.fallback, s = t.mode, l = cu({
        mode: "visible",
        children: l.children
      }, s), p = Ui(p, s, r, null), p.flags |= 2, l.return = t, p.return = t, l.sibling = p, t.child = l, Ci(t, e.child, null, r), l = t.child, l.memoizedState = jd(r), l.childLanes = Zd(e, v, r), t.memoizedState = Ad, t = Lr(null, l));
      else if (ai(t), hf(p)) {
        if (v = p.nextSibling && p.nextSibling.dataset, v) var O = v.dgst;
        v = O, l = Error(i(419)), l.stack = "", l.digest = v, Ur({
          value: l,
          source: null,
          stack: null
        }), t = Id(e, t, r);
      } else if (at || _a(e, t, r, !1), v = (r & e.childLanes) !== 0, at || v) {
        if (v = qe, v !== null && (l = Np(v, r), l !== 0 && l !== _.retryLane)) throw _.retryLane = l, Oi(e, l), Zt(v, e, l), Ud;
        pf(p) || yu(), t = Id(e, t, r);
      } else pf(p) ? (t.flags |= 192, t.child = e.child, t = null) : (e = _.treeContext, Je = cn(p.nextSibling), vt = t, _e = !0, ei = null, on = !1, e !== null && Ah(t, e), t = Nd(t, l.children), t.flags |= 4096);
      return t;
    }
    return s ? (ri(t), p = l.fallback, s = t.mode, _ = e.child, O = _.sibling, l = Un(_, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = _.subtreeFlags & 65011712, O !== null ? p = Un(O, p) : (p = Ui(p, s, r, null), p.flags |= 2), p.return = t, l.return = t, l.sibling = p, t.child = l, Lr(null, l), l = t.child, p = e.child.memoizedState, p === null ? p = jd(r) : (s = p.cachePool, s !== null ? (_ = nt._currentValue, s = s.parent !== _ ? {
      parent: _,
      pool: _
    } : s) : s = Rh(), p = {
      baseLanes: p.baseLanes | r,
      cachePool: s
    }), l.memoizedState = p, l.childLanes = Zd(e, v, r), t.memoizedState = Ad, Lr(e.child, l)) : (ai(t), r = e.child, e = r.sibling, r = Un(r, {
      mode: "visible",
      children: l.children
    }), r.return = t, r.sibling = null, e !== null && (v = t.deletions, v === null ? (t.deletions = [e], t.flags |= 16) : v.push(e)), t.child = r, t.memoizedState = null, r);
  }
  function Nd(e, t) {
    return t = cu({
      mode: "visible",
      children: t
    }, e.mode), t.return = e, e.child = t;
  }
  function cu(e, t) {
    return e = Ht(22, e, null, t), e.lanes = 0, e;
  }
  function Id(e, t, r) {
    return Ci(t, e.child, null, r), e = Nd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Vg(e, t, r) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Ks(e.return, t, r);
  }
  function Cd(e, t, r, l, s, f) {
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
  function Qg(e, t, r) {
    var l = t.pendingProps, s = l.revealOrder, f = l.tail;
    l = l.children;
    var v = We.current, p = (v & 2) !== 0;
    if (p ? (v = v & 1 | 2, t.flags |= 128) : v &= 1, H(We, v), ht(e, t, l, r), l = _e ? Or : 0, !p && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Vg(e, r, t);
      else if (e.tag === 19) Vg(e, r, t);
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
        for (r = t.child, s = null; r !== null; ) e = r.alternate, e !== null && Kl(e) === null && (s = r), r = r.sibling;
        r = s, r === null ? (s = t.child, t.child = null) : (s = r.sibling, r.sibling = null), Cd(t, !1, s, r, f, l);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (r = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && Kl(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = r, r = s, s = e;
        }
        Cd(t, !0, r, null, f, l);
        break;
      case "together":
        Cd(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function In(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies), ui |= t.lanes, (r & t.childLanes) === 0) if (e !== null) {
      if (_a(e, t, r, !1), (r & t.childLanes) === 0) return null;
    } else return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, r = Un(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = Un(e, e.pendingProps), r.return = t;
      r.sibling = null;
    }
    return t.child;
  }
  function Rd(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Bl(e)));
  }
  function mk(e, t, r) {
    switch (t.tag) {
      case 3:
        kt(t, t.stateNode.containerInfo), ni(t, nt, e.memoizedState.cache), Di();
        break;
      case 27:
      case 5:
        vr(t);
        break;
      case 4:
        kt(t, t.stateNode.containerInfo);
        break;
      case 10:
        ni(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, cd(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (ai(t), t.flags |= 128, null) : (r & t.child.childLanes) !== 0 ? Yg(e, t, r) : (ai(t), e = In(e, t, r), e !== null ? e.sibling : null);
        ai(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (l = (r & t.childLanes) !== 0, l || (_a(e, t, r, !1), l = (r & t.childLanes) !== 0), s) {
          if (l) return Qg(e, t, r);
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), H(We, We.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, Hg(e, t, r, t.pendingProps);
      case 24:
        ni(t, nt, e.memoizedState.cache);
    }
    return In(e, t, r);
  }
  function Xg(e, t, r) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps) at = !0;
    else {
      if (!Rd(e, r) && (t.flags & 128) === 0) return at = !1, mk(e, t, r);
      at = (e.flags & 131072) !== 0;
    }
    else at = !1, _e && (t.flags & 1048576) !== 0 && Dh(t, Or, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = Ni(t.elementType), t.type = e, typeof e == "function") Bs(e) ? (l = Hi(e, l), t.tag = 1, t = Jg(null, t, e, l, r)) : (t.tag = 0, t = Dd(null, t, e, l, r));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === ke) {
                t.tag = 11, t = Rg(null, t, e, l, r);
                break e;
              } else if (s === V) {
                t.tag = 14, t = Mg(null, t, e, l, r);
                break e;
              }
            }
            throw t = vn(e) || e, Error(i(306, t, ""));
          }
        }
        return t;
      case 0:
        return Dd(e, t, t.type, t.pendingProps, r);
      case 1:
        return l = t.type, s = Hi(l, t.pendingProps), Jg(e, t, l, s, r);
      case 3:
        e: {
          if (kt(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
          l = t.pendingProps;
          var f = t.memoizedState;
          s = f.element, ad(e, t), Cr(t, l, null, r);
          var v = t.memoizedState;
          if (l = v.cache, ni(t, nt, l), l !== f.cache && Fs(t, [nt], r, !0), Ir(), l = v.element, f.isDehydrated) if (f = {
            element: l,
            isDehydrated: !1,
            cache: v.cache
          }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
            t = Gg(e, t, l, r);
            break e;
          } else if (l !== s) {
            s = nn(Error(i(424)), t), Ur(s), t = Gg(e, t, l, r);
            break e;
          } else
            for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Je = cn(e.firstChild), vt = t, _e = !0, ei = null, on = !0, r = Ph(t, null, l, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
          else {
            if (Di(), l === s) {
              t = In(e, t, r);
              break e;
            }
            ht(e, t, l, r);
          }
          t = t.child;
        }
        return t;
      case 26:
        return uu(e, t), e === null ? (r = u_(t.type, null, t.pendingProps, null)) ? t.memoizedState = r : _e || (r = t.type, e = t.pendingProps, l = wu(me.current).createElement(r), l[mt] = t, l[Et] = e, gt(l, r, e), dt(l), t.stateNode = l) : t.memoizedState = u_(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
      case 27:
        return vr(t), e === null && _e && (l = t.stateNode = r_(t.type, t.pendingProps, me.current), vt = t, on = !0, s = Je, mi(t.type) ? (gf = s, Je = cn(l.firstChild)) : Je = s), ht(e, t, t.pendingProps.children, r), uu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && _e && ((s = l = Je) && (l = Hk(l, t.type, t.pendingProps, on), l !== null ? (t.stateNode = l, vt = t, Je = cn(l.firstChild), on = !1, s = !0) : s = !1), s || ti(t)), vr(t), s = t.type, f = t.pendingProps, v = e !== null ? e.memoizedProps : null, l = f.children, ff(s, f) ? l = null : v !== null && ff(s, v) && (t.flags |= 32), t.memoizedState !== null && (s = dd(e, t, tk, null, null, r), io._currentValue = s), uu(e, t), ht(e, t, l, r), t.child;
      case 6:
        return e === null && _e && ((e = r = Je) && (r = Lk(r, t.pendingProps, on), r !== null ? (t.stateNode = r, vt = t, Je = null, e = !0) : e = !1), e || ti(t)), null;
      case 13:
        return Yg(e, t, r);
      case 4:
        return kt(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = Ci(t, null, l, r) : ht(e, t, l, r), t.child;
      case 11:
        return Rg(e, t, t.type, t.pendingProps, r);
      case 7:
        return ht(e, t, t.pendingProps, r), t.child;
      case 8:
        return ht(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return ht(e, t, t.pendingProps.children, r), t.child;
      case 10:
        return l = t.pendingProps, ni(t, t.type, l.value), ht(e, t, l.children, r), t.child;
      case 9:
        return s = t.type._context, l = t.pendingProps.children, ji(t), s = pt(s), l = l(s), t.flags |= 1, ht(e, t, l, r), t.child;
      case 14:
        return Mg(e, t, t.type, t.pendingProps, r);
      case 15:
        return qg(e, t, t.type, t.pendingProps, r);
      case 19:
        return Qg(e, t, r);
      case 31:
        return fk(e, t, r);
      case 22:
        return Hg(e, t, r, t.pendingProps);
      case 24:
        return ji(t), l = pt(nt), e === null ? (s = td(), s === null && (s = qe, f = Ws(), s.pooledCache = f, f.refCount++, f !== null && (s.pooledCacheLanes |= r), s = f), t.memoizedState = {
          parent: l,
          cache: s
        }, id(t), ni(t, nt, s)) : ((e.lanes & r) !== 0 && (ad(e, t), Cr(t, null, null, r), Ir()), s = e.memoizedState, f = t.memoizedState, s.parent !== l ? (s = {
          parent: l,
          cache: l
        }, t.memoizedState = s, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = s), ni(t, nt, l)) : (l = f.cache, ni(t, nt, l), l !== s.cache && Fs(t, [nt], r, !0))), ht(e, t, t.pendingProps.children, r), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function Cn(e) {
    e.flags |= 4;
  }
  function Md(e, t, r, l, s) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (s & 335544128) === s) if (e.stateNode.complete) e.flags |= 8192;
      else if (zy()) e.flags |= 8192;
      else throw Ii = Yl, nd;
    } else e.flags &= -16777217;
  }
  function Kg(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
    else if (e.flags |= 16777216, !m_(t)) if (zy()) e.flags |= 8192;
    else throw Ii = Yl, nd;
  }
  function su(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ap() : 536870912, e.lanes |= t, Da |= t);
  }
  function Br(e, t) {
    if (!_e) switch (e.tailMode) {
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
  function Ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, r = 0, l = 0;
    if (t) for (var s = e.child; s !== null; ) r |= s.lanes | s.childLanes, l |= s.subtreeFlags & 65011712, l |= s.flags & 65011712, s.return = e, s = s.sibling;
    else for (s = e.child; s !== null; ) r |= s.lanes | s.childLanes, l |= s.subtreeFlags, l |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= l, e.childLanes = r, t;
  }
  function vk(e, t, r) {
    var l = t.pendingProps;
    switch (Ys(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ge(t), null;
      case 1:
        return Ge(t), null;
      case 3:
        return r = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), jn(nt), Fe(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ya(t) ? Cn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Qs())), Ge(t), null;
      case 26:
        var s = t.type, f = t.memoizedState;
        return e === null ? (Cn(t), f !== null ? (Ge(t), Kg(t, f)) : (Ge(t), Md(t, s, null, l, r))) : f ? f !== e.memoizedState ? (Cn(t), Ge(t), Kg(t, f)) : (Ge(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Cn(t), Ge(t), Md(t, s, e, l, r)), null;
      case 27:
        if (bl(t), r = me.current, s = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && Cn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return Ge(t), null;
          }
          e = X.current, ya(t) ? jh(t, e) : (e = r_(s, l, r), t.stateNode = e, Cn(t));
        }
        return Ge(t), null;
      case 5:
        if (bl(t), s = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && Cn(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(i(166));
            return Ge(t), null;
          }
          if (f = X.current, ya(t)) jh(t, f);
          else {
            var v = wu(me.current);
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
            f[mt] = t, f[Et] = l;
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
            e: switch (gt(f, s, l), s) {
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
            l && Cn(t);
          }
        }
        return Ge(t), Md(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, r), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && Cn(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(i(166));
          if (e = me.current, ya(t)) {
            if (e = t.stateNode, r = t.memoizedProps, l = null, s = vt, s !== null) switch (s.tag) {
              case 27:
              case 5:
                l = s.memoizedProps;
            }
            e[mt] = t, e = !!(e.nodeValue === r || l !== null && l.suppressHydrationWarning === !0 || Vy(e.nodeValue, r)), e || ti(t, !0);
          } else e = wu(e).createTextNode(l), e[mt] = t, t.stateNode = e;
        }
        return Ge(t), null;
      case 31:
        if (r = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = ya(t), r !== null) {
            if (e === null) {
              if (!l) throw Error(i(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(557));
              e[mt] = t;
            } else Di(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ge(t), e = !1;
          } else r = Qs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), e = !0;
          if (!e)
            return t.flags & 256 ? (Bt(t), t) : (Bt(t), null);
          if ((t.flags & 128) !== 0) throw Error(i(558));
        }
        return Ge(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (s = ya(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(i(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(i(317));
              s[mt] = t;
            } else Di(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ge(t), s = !1;
          } else s = Qs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return t.flags & 256 ? (Bt(t), t) : (Bt(t), null);
        }
        return Bt(t), (t.flags & 128) !== 0 ? (t.lanes = r, t) : (r = l !== null, e = e !== null && e.memoizedState !== null, r && (l = t.child, s = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (s = l.alternate.memoizedState.cachePool.pool), f = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (f = l.memoizedState.cachePool.pool), f !== s && (l.flags |= 2048)), r !== e && r && (t.child.flags |= 8192), su(t, t.updateQueue), Ge(t), null);
      case 4:
        return Fe(), e === null && Py(t.stateNode.containerInfo), Ge(t), null;
      case 10:
        return jn(t.type), Ge(t), null;
      case 19:
        if (C(We), l = t.memoizedState, l === null) return Ge(t), null;
        if (s = (t.flags & 128) !== 0, f = l.rendering, f === null) if (s) Br(l, !1);
        else {
          if (Ke !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (f = Kl(e), f !== null) {
              for (t.flags |= 128, Br(l, !1), e = f.updateQueue, t.updateQueue = e, su(t, e), t.subtreeFlags = 0, e = r, r = t.child; r !== null; ) Eh(r, e), r = r.sibling;
              return H(We, We.current & 1 | 2), _e && Dn(t, l.treeForkCount), t.child;
            }
            e = e.sibling;
          }
          l.tail !== null && Ct() > pu && (t.flags |= 128, s = !0, Br(l, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = Kl(f), e !== null) {
            if (t.flags |= 128, s = !0, e = e.updateQueue, t.updateQueue = e, su(t, e), Br(l, !0), l.tail === null && l.tailMode === "hidden" && !f.alternate && !_e) return Ge(t), null;
          } else 2 * Ct() - l.renderingStartTime > pu && r !== 536870912 && (t.flags |= 128, s = !0, Br(l, !1), t.lanes = 4194304);
          l.isBackwards ? (f.sibling = t.child, t.child = f) : (e = l.last, e !== null ? e.sibling = f : t.child = f, l.last = f);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Ct(), e.sibling = null, r = We.current, H(We, s ? r & 1 | 2 : r & 1), _e && Dn(t, l.treeForkCount), e) : (Ge(t), null);
      case 22:
      case 23:
        return Bt(t), ud(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (r & 536870912) !== 0 && (t.flags & 128) === 0 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ge(t), r = t.updateQueue, r !== null && su(t, r.retryQueue), r = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== r && (t.flags |= 2048), e !== null && C(Zi), null;
      case 24:
        return r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), jn(nt), Ge(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function pk(e, t) {
    switch (Ys(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return jn(nt), Fe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return bl(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Bt(t), t.alternate === null) throw Error(i(340));
          Di();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Bt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(i(340));
          Di();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return C(We), null;
      case 4:
        return Fe(), null;
      case 10:
        return jn(t.type), null;
      case 22:
      case 23:
        return Bt(t), ud(), e !== null && C(Zi), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return jn(nt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fg(e, t) {
    switch (Ys(t), t.tag) {
      case 3:
        jn(nt), Fe();
        break;
      case 26:
      case 27:
      case 5:
        bl(t);
        break;
      case 4:
        Fe();
        break;
      case 31:
        t.memoizedState !== null && Bt(t);
        break;
      case 13:
        Bt(t);
        break;
      case 19:
        C(We);
        break;
      case 10:
        jn(t.type);
        break;
      case 22:
      case 23:
        Bt(t), ud(), e !== null && C(Zi);
        break;
      case 24:
        jn(nt);
    }
  }
  function Pr(e, t) {
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
      je(t, t.return, p);
    }
  }
  function oi(e, t, r) {
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
              var _ = r, O = p;
              try {
                O();
              } catch (j) {
                je(s, _, j);
              }
            }
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (j) {
      je(t, t.return, j);
    }
  }
  function Wg(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var r = e.stateNode;
      try {
        Gh(t, r);
      } catch (l) {
        je(e, e.return, l);
      }
    }
  }
  function ey(e, t, r) {
    r.props = Hi(e.type, e.memoizedProps), r.state = e.memoizedState;
    try {
      r.componentWillUnmount();
    } catch (l) {
      je(e, t, l);
    }
  }
  function Jr(e, t) {
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
      je(e, t, s);
    }
  }
  function zn(e, t) {
    var r = e.ref, l = e.refCleanup;
    if (r !== null) if (typeof l == "function") try {
      l();
    } catch (s) {
      je(e, t, s);
    } finally {
      e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
    }
    else if (typeof r == "function") try {
      r(null);
    } catch (s) {
      je(e, t, s);
    }
    else r.current = null;
  }
  function ty(e) {
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
      je(e, e.return, s);
    }
  }
  function qd(e, t, r) {
    try {
      var l = e.stateNode;
      Nk(l, e.type, r, t), l[Et] = t;
    } catch (s) {
      je(e, e.return, s);
    }
  }
  function ny(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && mi(e.type) || e.tag === 4;
  }
  function Hd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ny(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && mi(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ld(e, t, r) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(e, t) : (t = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r, t.appendChild(e), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = En));
    else if (l !== 4 && (l === 27 && mi(e.type) && (r = e.stateNode, t = null), e = e.child, e !== null)) for (Ld(e, t, r), e = e.sibling; e !== null; ) Ld(e, t, r), e = e.sibling;
  }
  function du(e, t, r) {
    var l = e.tag;
    if (l === 5 || l === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (l !== 4 && (l === 27 && mi(e.type) && (r = e.stateNode), e = e.child, e !== null)) for (du(e, t, r), e = e.sibling; e !== null; ) du(e, t, r), e = e.sibling;
  }
  function iy(e) {
    var t = e.stateNode, r = e.memoizedProps;
    try {
      for (var l = e.type, s = t.attributes; s.length; ) t.removeAttributeNode(s[0]);
      gt(t, l, r), t[mt] = e, t[Et] = r;
    } catch (f) {
      je(e, e.return, f);
    }
  }
  var Rn = !1, rt = !1, Bd = !1, ay = typeof WeakSet == "function" ? WeakSet : Set, ft = null;
  function hk(e, t) {
    if (e = e.containerInfo, sf = Au, e = _h(e), Is(e)) {
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
          var v = 0, p = -1, _ = -1, O = 0, j = 0, N = e, U = null;
          t: for (; ; ) {
            for (var A; N !== r || s !== 0 && N.nodeType !== 3 || (p = v + s), N !== f || l !== 0 && N.nodeType !== 3 || (_ = v + l), N.nodeType === 3 && (v += N.nodeValue.length), (A = N.firstChild) !== null; )
              U = N, N = A;
            for (; ; ) {
              if (N === e) break t;
              if (U === r && ++O === s && (p = v), U === f && ++j === l && (_ = v), (A = N.nextSibling) !== null) break;
              N = U, U = N.parentNode;
            }
            N = A;
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
    for (df = {
      focusedElem: e,
      selectionRange: r
    }, Au = !1, ft = t; ft !== null; ) if (t = ft, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ft = e;
    else for (; ft !== null; ) {
      switch (t = ft, f = t.alternate, e = t.flags, t.tag) {
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
              var Y = Hi(r.type, s);
              e = l.getSnapshotBeforeUpdate(Y, f), l.__reactInternalSnapshotBeforeUpdate = e;
            } catch (ee) {
              je(r, r.return, ee);
            }
          }
          break;
        case 3:
          if ((e & 1024) !== 0) {
            if (e = t.stateNode.containerInfo, r = e.nodeType, r === 9) vf(e);
            else if (r === 1) switch (e.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                vf(e);
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
        e.return = t.return, ft = e;
        break;
      }
      ft = t.return;
    }
  }
  function ry(e, t, r) {
    var l = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        qn(e, r), l & 4 && Pr(5, r);
        break;
      case 1:
        if (qn(e, r), l & 4) if (e = r.stateNode, t === null) try {
          e.componentDidMount();
        } catch (v) {
          je(r, r.return, v);
        }
        else {
          var s = Hi(r.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate);
          } catch (v) {
            je(r, r.return, v);
          }
        }
        l & 64 && Wg(r), l & 512 && Jr(r, r.return);
        break;
      case 3:
        if (qn(e, r), l & 64 && (e = r.updateQueue, e !== null)) {
          if (t = null, r.child !== null) switch (r.child.tag) {
            case 27:
            case 5:
              t = r.child.stateNode;
              break;
            case 1:
              t = r.child.stateNode;
          }
          try {
            Gh(e, t);
          } catch (v) {
            je(r, r.return, v);
          }
        }
        break;
      case 27:
        t === null && l & 4 && iy(r);
      case 26:
      case 5:
        qn(e, r), t === null && l & 4 && ty(r), l & 512 && Jr(r, r.return);
        break;
      case 12:
        qn(e, r);
        break;
      case 31:
        qn(e, r), l & 4 && uy(e, r);
        break;
      case 13:
        qn(e, r), l & 4 && cy(e, r), l & 64 && (e = r.memoizedState, e !== null && (e = e.dehydrated, e !== null && (r = wk.bind(null, r), Bk(e, r))));
        break;
      case 22:
        if (l = r.memoizedState !== null || Rn, !l) {
          t = t !== null && t.memoizedState !== null || rt, s = Rn;
          var f = rt;
          Rn = l, (rt = t) && !f ? Hn(e, r, (r.subtreeFlags & 8772) !== 0) : qn(e, r), Rn = s, rt = f;
        }
        break;
      case 30:
        break;
      default:
        qn(e, r);
    }
  }
  function oy(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, oy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && _s(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ye = null, Ut = !1;
  function Mn(e, t, r) {
    for (r = r.child; r !== null; ) ly(e, t, r), r = r.sibling;
  }
  function ly(e, t, r) {
    if (Rt && typeof Rt.onCommitFiberUnmount == "function") try {
      Rt.onCommitFiberUnmount(pr, r);
    } catch {
    }
    switch (r.tag) {
      case 26:
        rt || zn(r, t), Mn(e, t, r), r.memoizedState ? r.memoizedState.count-- : r.stateNode && (r = r.stateNode, r.parentNode.removeChild(r));
        break;
      case 27:
        rt || zn(r, t);
        var l = Ye, s = Ut;
        mi(r.type) && (Ye = r.stateNode, Ut = !1), Mn(e, t, r), eo(r.stateNode), Ye = l, Ut = s;
        break;
      case 5:
        rt || zn(r, t);
      case 6:
        if (l = Ye, s = Ut, Ye = null, Mn(e, t, r), Ye = l, Ut = s, Ye !== null) if (Ut) try {
          (Ye.nodeType === 9 ? Ye.body : Ye.nodeName === "HTML" ? Ye.ownerDocument.body : Ye).removeChild(r.stateNode);
        } catch (f) {
          je(r, t, f);
        }
        else try {
          Ye.removeChild(r.stateNode);
        } catch (f) {
          je(r, t, f);
        }
        break;
      case 18:
        Ye !== null && (Ut ? (e = Ye, e_(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, r.stateNode), Ma(e)) : e_(Ye, r.stateNode));
        break;
      case 4:
        l = Ye, s = Ut, Ye = r.stateNode.containerInfo, Ut = !0, Mn(e, t, r), Ye = l, Ut = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        oi(2, r, t), rt || oi(4, r, t), Mn(e, t, r);
        break;
      case 1:
        rt || (zn(r, t), l = r.stateNode, typeof l.componentWillUnmount == "function" && ey(r, t, l)), Mn(e, t, r);
        break;
      case 21:
        Mn(e, t, r);
        break;
      case 22:
        rt = (l = rt) || r.memoizedState !== null, Mn(e, t, r), rt = l;
        break;
      default:
        Mn(e, t, r);
    }
  }
  function uy(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Ma(e);
      } catch (r) {
        je(t, t.return, r);
      }
    }
  }
  function cy(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
      Ma(e);
    } catch (r) {
      je(t, t.return, r);
    }
  }
  function gk(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new ay()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new ay()), t;
      default:
        throw Error(i(435, e.tag));
    }
  }
  function fu(e, t) {
    var r = gk(e);
    t.forEach(function(l) {
      if (!r.has(l)) {
        r.add(l);
        var s = Tk.bind(null, e, l);
        l.then(s, s);
      }
    });
  }
  function Dt(e, t) {
    var r = t.deletions;
    if (r !== null) for (var l = 0; l < r.length; l++) {
      var s = r[l], f = e, v = t, p = v;
      e: for (; p !== null; ) {
        switch (p.tag) {
          case 27:
            if (mi(p.type)) {
              Ye = p.stateNode, Ut = !1;
              break e;
            }
            break;
          case 5:
            Ye = p.stateNode, Ut = !1;
            break e;
          case 3:
          case 4:
            Ye = p.stateNode.containerInfo, Ut = !0;
            break e;
        }
        p = p.return;
      }
      if (Ye === null) throw Error(i(160));
      ly(f, v, s), Ye = null, Ut = !1, f = s.alternate, f !== null && (f.return = null), s.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) sy(t, e), t = t.sibling;
  }
  var hn = null;
  function sy(e, t) {
    var r = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Dt(t, e), At(e), l & 4 && (oi(3, e, e.return), Pr(3, e), oi(5, e, e.return));
        break;
      case 1:
        Dt(t, e), At(e), l & 512 && (rt || r === null || zn(r, r.return)), l & 64 && Rn && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (r = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = r === null ? l : r.concat(l))));
        break;
      case 26:
        var s = hn;
        if (Dt(t, e), At(e), l & 512 && (rt || r === null || zn(r, r.return)), l & 4) {
          var f = r !== null ? r.memoizedState : null;
          if (l = e.memoizedState, r === null) if (l === null) if (e.stateNode === null) {
            e: {
              l = e.type, r = e.memoizedProps, s = s.ownerDocument || s;
              t: switch (l) {
                case "title":
                  f = s.getElementsByTagName("title")[0], (!f || f[yr] || f[mt] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = s.createElement(l), s.head.insertBefore(f, s.querySelector("head > title"))), gt(f, l, r), f[mt] = e, dt(f), l = f;
                  break e;
                case "link":
                  var v = d_("link", "href", s).get(l + (r.href || ""));
                  if (v) {
                    for (var p = 0; p < v.length; p++) if (f = v[p], f.getAttribute("href") === (r.href == null || r.href === "" ? null : r.href) && f.getAttribute("rel") === (r.rel == null ? null : r.rel) && f.getAttribute("title") === (r.title == null ? null : r.title) && f.getAttribute("crossorigin") === (r.crossOrigin == null ? null : r.crossOrigin)) {
                      v.splice(p, 1);
                      break t;
                    }
                  }
                  f = s.createElement(l), gt(f, l, r), s.head.appendChild(f);
                  break;
                case "meta":
                  if (v = d_("meta", "content", s).get(l + (r.content || ""))) {
                    for (p = 0; p < v.length; p++) if (f = v[p], f.getAttribute("content") === (r.content == null ? null : "" + r.content) && f.getAttribute("name") === (r.name == null ? null : r.name) && f.getAttribute("property") === (r.property == null ? null : r.property) && f.getAttribute("http-equiv") === (r.httpEquiv == null ? null : r.httpEquiv) && f.getAttribute("charset") === (r.charSet == null ? null : r.charSet)) {
                      v.splice(p, 1);
                      break t;
                    }
                  }
                  f = s.createElement(l), gt(f, l, r), s.head.appendChild(f);
                  break;
                default:
                  throw Error(i(468, l));
              }
              f[mt] = e, dt(f), l = f;
            }
            e.stateNode = l;
          } else f_(s, e.type, e.stateNode);
          else e.stateNode = s_(s, l, e.memoizedProps);
          else f !== l ? (f === null ? r.stateNode !== null && (r = r.stateNode, r.parentNode.removeChild(r)) : f.count--, l === null ? f_(s, e.type, e.stateNode) : s_(s, l, e.memoizedProps)) : l === null && e.stateNode !== null && qd(e, e.memoizedProps, r.memoizedProps);
        }
        break;
      case 27:
        Dt(t, e), At(e), l & 512 && (rt || r === null || zn(r, r.return)), r !== null && l & 4 && qd(e, e.memoizedProps, r.memoizedProps);
        break;
      case 5:
        if (Dt(t, e), At(e), l & 512 && (rt || r === null || zn(r, r.return)), e.flags & 32) {
          s = e.stateNode;
          try {
            ua(s, "");
          } catch (Y) {
            je(e, e.return, Y);
          }
        }
        l & 4 && e.stateNode != null && (s = e.memoizedProps, qd(e, s, r !== null ? r.memoizedProps : s)), l & 1024 && (Bd = !0);
        break;
      case 6:
        if (Dt(t, e), At(e), l & 4) {
          if (e.stateNode === null) throw Error(i(162));
          l = e.memoizedProps, r = e.stateNode;
          try {
            r.nodeValue = l;
          } catch (Y) {
            je(e, e.return, Y);
          }
        }
        break;
      case 3:
        if (Eu = null, s = hn, hn = Tu(t.containerInfo), Dt(t, e), hn = s, At(e), l & 4 && r !== null && r.memoizedState.isDehydrated) try {
          Ma(t.containerInfo);
        } catch (Y) {
          je(e, e.return, Y);
        }
        Bd && (Bd = !1, dy(e));
        break;
      case 4:
        l = hn, hn = Tu(e.stateNode.containerInfo), Dt(t, e), At(e), hn = l;
        break;
      case 12:
        Dt(t, e), At(e);
        break;
      case 31:
        Dt(t, e), At(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, fu(e, l)));
        break;
      case 13:
        Dt(t, e), At(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (vu = Ct()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, fu(e, l)));
        break;
      case 22:
        s = e.memoizedState !== null;
        var _ = r !== null && r.memoizedState !== null, O = Rn, j = rt;
        if (Rn = O || s, rt = j || _, Dt(t, e), rt = j, Rn = O, At(e), l & 8192) e: for (t = e.stateNode, t._visibility = s ? t._visibility & -2 : t._visibility | 1, s && (r === null || _ || Rn || rt || Li(e)), r = null, t = e; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (r === null) {
              _ = r = t;
              try {
                if (f = _.stateNode, s) v = f.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
                else {
                  p = _.stateNode;
                  var N = _.memoizedProps.style, U = N != null && N.hasOwnProperty("display") ? N.display : null;
                  p.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                }
              } catch (Y) {
                je(_, _.return, Y);
              }
            }
          } else if (t.tag === 6) {
            if (r === null) {
              _ = t;
              try {
                _.stateNode.nodeValue = s ? "" : _.memoizedProps;
              } catch (Y) {
                je(_, _.return, Y);
              }
            }
          } else if (t.tag === 18) {
            if (r === null) {
              _ = t;
              try {
                var A = _.stateNode;
                s ? t_(A, !0) : t_(_.stateNode, !1);
              } catch (Y) {
                je(_, _.return, Y);
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
        l & 4 && (l = e.updateQueue, l !== null && (r = l.retryQueue, r !== null && (l.retryQueue = null, fu(e, r))));
        break;
      case 19:
        Dt(t, e), At(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, fu(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Dt(t, e), At(e);
    }
  }
  function At(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var r, l = e.return; l !== null; ) {
          if (ny(l)) {
            r = l;
            break;
          }
          l = l.return;
        }
        if (r == null) throw Error(i(160));
        switch (r.tag) {
          case 27:
            var s = r.stateNode;
            du(e, Hd(e), s);
            break;
          case 5:
            var f = r.stateNode;
            r.flags & 32 && (ua(f, ""), r.flags &= -33), du(e, Hd(e), f);
            break;
          case 3:
          case 4:
            var v = r.stateNode.containerInfo;
            Ld(e, Hd(e), v);
            break;
          default:
            throw Error(i(161));
        }
      } catch (p) {
        je(e, e.return, p);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function dy(e) {
    if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
      var t = e;
      dy(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
    }
  }
  function qn(e, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) ry(e, t.alternate, t), t = t.sibling;
  }
  function Li(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          oi(4, t, t.return), Li(t);
          break;
        case 1:
          zn(t, t.return);
          var r = t.stateNode;
          typeof r.componentWillUnmount == "function" && ey(t, t.return, r), Li(t);
          break;
        case 27:
          eo(t.stateNode);
        case 26:
        case 5:
          zn(t, t.return), Li(t);
          break;
        case 22:
          t.memoizedState === null && Li(t);
          break;
        case 30:
          Li(t);
          break;
        default:
          Li(t);
      }
      e = e.sibling;
    }
  }
  function Hn(e, t, r) {
    for (r = r && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, s = e, f = t, v = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Hn(s, f, r), Pr(4, f);
          break;
        case 1:
          if (Hn(s, f, r), l = f, s = l.stateNode, typeof s.componentDidMount == "function") try {
            s.componentDidMount();
          } catch (O) {
            je(l, l.return, O);
          }
          if (l = f, s = l.updateQueue, s !== null) {
            var p = l.stateNode;
            try {
              var _ = s.shared.hiddenCallbacks;
              if (_ !== null) for (s.shared.hiddenCallbacks = null, s = 0; s < _.length; s++) Jh(_[s], p);
            } catch (O) {
              je(l, l.return, O);
            }
          }
          r && v & 64 && Wg(f), Jr(f, f.return);
          break;
        case 27:
          iy(f);
        case 26:
        case 5:
          Hn(s, f, r), r && l === null && v & 4 && ty(f), Jr(f, f.return);
          break;
        case 12:
          Hn(s, f, r);
          break;
        case 31:
          Hn(s, f, r), r && v & 4 && uy(s, f);
          break;
        case 13:
          Hn(s, f, r), r && v & 4 && cy(s, f);
          break;
        case 22:
          f.memoizedState === null && Hn(s, f, r), Jr(f, f.return);
          break;
        case 30:
          break;
        default:
          Hn(s, f, r);
      }
      t = t.sibling;
    }
  }
  function Pd(e, t) {
    var r = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== r && (e != null && e.refCount++, r != null && Dr(r));
  }
  function Jd(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Dr(e));
  }
  function gn(e, t, r, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) fy(e, t, r, l), t = t.sibling;
  }
  function fy(e, t, r, l) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        gn(e, t, r, l), s & 2048 && Pr(9, t);
        break;
      case 1:
        gn(e, t, r, l);
        break;
      case 3:
        gn(e, t, r, l), s & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Dr(e)));
        break;
      case 12:
        if (s & 2048) {
          gn(e, t, r, l), e = t.stateNode;
          try {
            var f = t.memoizedProps, v = f.id, p = f.onPostCommit;
            typeof p == "function" && p(v, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
          } catch (_) {
            je(t, t.return, _);
          }
        } else gn(e, t, r, l);
        break;
      case 31:
        gn(e, t, r, l);
        break;
      case 13:
        gn(e, t, r, l);
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, v = t.alternate, t.memoizedState !== null ? f._visibility & 2 ? gn(e, t, r, l) : Gr(e, t) : f._visibility & 2 ? gn(e, t, r, l) : (f._visibility |= 2, Ea(e, t, r, l, (t.subtreeFlags & 10256) !== 0 || !1)), s & 2048 && Pd(v, t);
        break;
      case 24:
        gn(e, t, r, l), s & 2048 && Jd(t.alternate, t);
        break;
      default:
        gn(e, t, r, l);
    }
  }
  function Ea(e, t, r, l, s) {
    for (s = s && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var f = e, v = t, p = r, _ = l, O = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          Ea(f, v, p, _, s), Pr(8, v);
          break;
        case 23:
          break;
        case 22:
          var j = v.stateNode;
          v.memoizedState !== null ? j._visibility & 2 ? Ea(f, v, p, _, s) : Gr(f, v) : (j._visibility |= 2, Ea(f, v, p, _, s)), s && O & 2048 && Pd(v.alternate, v);
          break;
        case 24:
          Ea(f, v, p, _, s), s && O & 2048 && Jd(v.alternate, v);
          break;
        default:
          Ea(f, v, p, _, s);
      }
      t = t.sibling;
    }
  }
  function Gr(e, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var r = e, l = t, s = l.flags;
      switch (l.tag) {
        case 22:
          Gr(r, l), s & 2048 && Pd(l.alternate, l);
          break;
        case 24:
          Gr(r, l), s & 2048 && Jd(l.alternate, l);
          break;
        default:
          Gr(r, l);
      }
      t = t.sibling;
    }
  }
  var Yr = 8192;
  function Oa(e, t, r) {
    if (e.subtreeFlags & Yr) for (e = e.child; e !== null; ) my(e, t, r), e = e.sibling;
  }
  function my(e, t, r) {
    switch (e.tag) {
      case 26:
        Oa(e, t, r), e.flags & Yr && e.memoizedState !== null && t4(r, hn, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Oa(e, t, r);
        break;
      case 3:
      case 4:
        var l = hn;
        hn = Tu(e.stateNode.containerInfo), Oa(e, t, r), hn = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Yr, Yr = 16777216, Oa(e, t, r), Yr = l) : Oa(e, t, r));
        break;
      default:
        Oa(e, t, r);
    }
  }
  function vy(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Vr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var r = 0; r < t.length; r++) {
        var l = t[r];
        ft = l, hy(l, e);
      }
      vy(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) py(e), e = e.sibling;
  }
  function py(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Vr(e), e.flags & 2048 && oi(9, e, e.return);
        break;
      case 3:
        Vr(e);
        break;
      case 12:
        Vr(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, mu(e)) : Vr(e);
        break;
      default:
        Vr(e);
    }
  }
  function mu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null) for (var r = 0; r < t.length; r++) {
        var l = t[r];
        ft = l, hy(l, e);
      }
      vy(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          oi(8, t, t.return), mu(t);
          break;
        case 22:
          r = t.stateNode, r._visibility & 2 && (r._visibility &= -3, mu(t));
          break;
        default:
          mu(t);
      }
      e = e.sibling;
    }
  }
  function hy(e, t) {
    for (; ft !== null; ) {
      var r = ft;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          oi(8, r, t);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var l = r.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Dr(r.memoizedState.cache);
      }
      if (l = r.child, l !== null) l.return = r, ft = l;
      else e: for (r = e; ft !== null; ) {
        l = ft;
        var s = l.sibling, f = l.return;
        if (oy(l), l === r) {
          ft = null;
          break e;
        }
        if (s !== null) {
          s.return = f, ft = s;
          break e;
        }
        ft = f;
      }
    }
  }
  var yk = {
    getCacheForType: function(e) {
      var t = pt(nt), r = t.data.get(e);
      return r === void 0 && (r = e(), t.data.set(e, r)), r;
    },
    cacheSignal: function() {
      return pt(nt).controller.signal;
    }
  }, _k = typeof WeakMap == "function" ? WeakMap : Map, Te = 0, qe = null, ve = null, ge = 0, Ae = 0, Pt = null, li = !1, Ua = !1, Gd = !1, Ln = 0, Ke = 0, ui = 0, Bi = 0, Yd = 0, Jt = 0, Da = 0, Qr = null, jt = null, Vd = !1, vu = 0, gy = 0, pu = 1 / 0, hu = null, ci = null, lt = 0, si = null, Aa = null, Bn = 0, Qd = 0, Xd = null, yy = null, Xr = 0, Kd = null;
  function un() {
    return (Te & 2) !== 0 && ge !== 0 ? ge & -ge : q.T !== null ? af() : Cp();
  }
  function _y() {
    if (Jt === 0) if ((ge & 536870912) === 0 || _e) {
      var e = zl;
      zl <<= 1, (zl & 3932160) === 0 && (zl = 262144), Jt = e;
    } else Jt = 536870912;
    return e = Lt.current, e !== null && (e.flags |= 32), Jt;
  }
  function Zt(e, t, r) {
    (e === qe && (Ae === 2 || Ae === 9) || e.cancelPendingCommit !== null) && (ja(e, 0), di(e, ge, Jt, !1)), Tl(e, r), ((Te & 2) === 0 || e !== qe) && (e === qe && ((Te & 2) === 0 && (Bi |= r), Ke === 4 && di(e, ge, Jt, !1)), Pn(e));
  }
  function by(e, t, r) {
    if ((Te & 6) !== 0) throw Error(i(327));
    var l = !r && (t & 127) === 0 && (t & e.expiredLanes) === 0 || hr(e, t), s = l ? $k(e, t) : Wd(e, t, !0), f = l;
    do {
      if (s === 0) {
        Ua && !l && di(e, t, 0, !1);
        break;
      } else {
        if (r = e.current.alternate, f && !bk(r)) {
          s = Wd(e, t, !1), f = !1;
          continue;
        }
        if (s === 2) {
          if (f = t, e.errorRecoveryDisabledLanes & f) var v = 0;
          else v = e.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
          if (v !== 0) {
            t = v;
            e: {
              var p = e;
              s = Qr;
              var _ = p.current.memoizedState.isDehydrated;
              if (_ && (ja(p, v).flags |= 256), v = Wd(p, v, !1), v !== 2) {
                if (Gd && !_) {
                  p.errorRecoveryDisabledLanes |= f, Bi |= f, s = 4;
                  break e;
                }
                f = jt, jt = s, f !== null && (jt === null ? jt = f : jt.push.apply(jt, f));
              }
              s = v;
            }
            if (f = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          ja(e, 0), di(e, t, 0, !0);
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
              di(l, t, Jt, !li);
              break e;
            case 2:
              jt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && (s = vu + 300 - Ct(), 10 < s)) {
            if (di(l, t, Jt, !li), wl(l, 0, !0) !== 0) break e;
            Bn = t, l.timeoutHandle = Fy(Sy.bind(null, l, r, jt, hu, Vd, t, Jt, Bi, Da, li, f, "Throttled", -0, 0), s);
            break e;
          }
          Sy(l, r, jt, hu, Vd, t, Jt, Bi, Da, li, f, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Pn(e);
  }
  function Sy(e, t, r, l, s, f, v, p, _, O, j, N, U, A) {
    if (e.timeoutHandle = -1, N = t.subtreeFlags, N & 8192 || (N & 16785408) === 16785408) {
      N = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: En
      }, my(t, f, N);
      var Y = (f & 62914560) === f ? vu - Ct() : (f & 4194048) === f ? gy - Ct() : 0;
      if (Y = n4(N, Y), Y !== null) {
        Bn = f, e.cancelPendingCommit = Y(Oy.bind(null, e, t, f, r, l, s, v, p, _, j, N, null, U, A)), di(e, f, v, !O);
        return;
      }
    }
    Oy(e, t, f, r, l, s, v, p, _);
  }
  function bk(e) {
    for (var t = e; ; ) {
      var r = t.tag;
      if ((r === 0 || r === 11 || r === 15) && t.flags & 16384 && (r = t.updateQueue, r !== null && (r = r.stores, r !== null))) for (var l = 0; l < r.length; l++) {
        var s = r[l], f = s.getSnapshot;
        s = s.value;
        try {
          if (!qt(f(), s)) return !1;
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
  function di(e, t, r, l) {
    t &= ~Yd, t &= ~Bi, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var s = t; 0 < s; ) {
      var f = 31 - Mt(s), v = 1 << f;
      l[f] = -1, s &= ~v;
    }
    r !== 0 && jp(e, r, t);
  }
  function gu() {
    return (Te & 6) === 0 ? (Kr(0, !1), !1) : !0;
  }
  function Fd() {
    if (ve !== null) {
      if (Ae === 0) var e = ve.return;
      else e = ve, An = Ai = null, vd(e), za = null, jr = 0, e = ve;
      for (; e !== null; ) Fg(e.alternate, e), e = e.return;
      ve = null;
    }
  }
  function ja(e, t) {
    var r = e.timeoutHandle;
    r !== -1 && (e.timeoutHandle = -1, Rk(r)), r = e.cancelPendingCommit, r !== null && (e.cancelPendingCommit = null, r()), Bn = 0, Fd(), qe = e, ve = r = Un(e.current, null), ge = t, Ae = 0, Pt = null, li = !1, Ua = hr(e, t), Gd = !1, Da = Jt = Yd = Bi = ui = Ke = 0, jt = Qr = null, Vd = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0) for (e = e.entanglements, l &= t; 0 < l; ) {
      var s = 31 - Mt(l), f = 1 << s;
      t |= e[s], l &= ~f;
    }
    return Ln = t, Rl(), r;
  }
  function $y(e, t) {
    le = null, q.H = Hr, t === $a || t === Gl ? (t = Hh(), Ae = 3) : t === nd ? (t = Hh(), Ae = 4) : Ae = t === Ud ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Pt = t, ve === null && (Ke = 1, ou(e, nn(t, e.current)));
  }
  function zy() {
    var e = Lt.current;
    return e === null ? !0 : (ge & 4194048) === ge ? ln === null : (ge & 62914560) === ge || (ge & 536870912) !== 0 ? e === ln : !1;
  }
  function ky() {
    var e = q.H;
    return q.H = Hr, e === null ? Hr : e;
  }
  function wy() {
    var e = q.A;
    return q.A = yk, e;
  }
  function yu() {
    Ke = 4, li || (ge & 4194048) !== ge && Lt.current !== null || (Ua = !0), (ui & 134217727) === 0 && (Bi & 134217727) === 0 || qe === null || di(qe, ge, Jt, !1);
  }
  function Wd(e, t, r) {
    var l = Te;
    Te |= 2;
    var s = ky(), f = wy();
    (qe !== e || ge !== t) && (hu = null, ja(e, t)), t = !1;
    var v = Ke;
    e: do
      try {
        if (Ae !== 0 && ve !== null) {
          var p = ve, _ = Pt;
          switch (Ae) {
            case 8:
              Fd(), v = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Lt.current === null && (t = !0);
              var O = Ae;
              if (Ae = 0, Pt = null, Za(e, p, _, O), r && Ua) {
                v = 0;
                break e;
              }
              break;
            default:
              O = Ae, Ae = 0, Pt = null, Za(e, p, _, O);
          }
        }
        Sk(), v = Ke;
        break;
      } catch (j) {
        $y(e, j);
      }
    while (!0);
    return t && e.shellSuspendCounter++, An = Ai = null, Te = l, q.H = s, q.A = f, ve === null && (qe = null, ge = 0, Rl()), v;
  }
  function Sk() {
    for (; ve !== null; ) Ty(ve);
  }
  function $k(e, t) {
    var r = Te;
    Te |= 2;
    var l = ky(), s = wy();
    qe !== e || ge !== t ? (hu = null, pu = Ct() + 500, ja(e, t)) : Ua = hr(e, t);
    e: do
      try {
        if (Ae !== 0 && ve !== null) {
          t = ve;
          var f = Pt;
          t: switch (Ae) {
            case 1:
              Ae = 0, Pt = null, Za(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (Mh(f)) {
                Ae = 0, Pt = null, xy(t);
                break;
              }
              t = function() {
                Ae !== 2 && Ae !== 9 || qe !== e || (Ae = 7), Pn(e);
              }, f.then(t, t);
              break e;
            case 3:
              Ae = 7;
              break e;
            case 4:
              Ae = 5;
              break e;
            case 7:
              Mh(f) ? (Ae = 0, Pt = null, xy(t)) : (Ae = 0, Pt = null, Za(e, t, f, 7));
              break;
            case 5:
              var v = null;
              switch (ve.tag) {
                case 26:
                  v = ve.memoizedState;
                case 5:
                case 27:
                  var p = ve;
                  if (v ? m_(v) : p.stateNode.complete) {
                    Ae = 0, Pt = null;
                    var _ = p.sibling;
                    if (_ !== null) ve = _;
                    else {
                      var O = p.return;
                      O !== null ? (ve = O, _u(O)) : ve = null;
                    }
                    break t;
                  }
              }
              Ae = 0, Pt = null, Za(e, t, f, 5);
              break;
            case 6:
              Ae = 0, Pt = null, Za(e, t, f, 6);
              break;
            case 8:
              Fd(), Ke = 6;
              break e;
            default:
              throw Error(i(462));
          }
        }
        zk();
        break;
      } catch (j) {
        $y(e, j);
      }
    while (!0);
    return An = Ai = null, q.H = l, q.A = s, Te = r, ve !== null ? 0 : (qe = null, ge = 0, Rl(), Ke);
  }
  function zk() {
    for (; ve !== null && !e1(); ) Ty(ve);
  }
  function Ty(e) {
    var t = Xg(e.alternate, e, Ln);
    e.memoizedProps = e.pendingProps, t === null ? _u(e) : ve = t;
  }
  function xy(e) {
    var t = e, r = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Pg(r, t, t.pendingProps, t.type, void 0, ge);
        break;
      case 11:
        t = Pg(r, t, t.pendingProps, t.type.render, t.ref, ge);
        break;
      case 5:
        vd(t);
      default:
        Fg(r, t), t = ve = Eh(t, Ln), t = Xg(r, t, Ln);
    }
    e.memoizedProps = e.pendingProps, t === null ? _u(e) : ve = t;
  }
  function Za(e, t, r, l) {
    An = Ai = null, vd(t), za = null, jr = 0;
    var s = t.return;
    try {
      if (dk(e, s, t, r, ge)) {
        Ke = 1, ou(e, nn(r, e.current)), ve = null;
        return;
      }
    } catch (f) {
      if (s !== null) throw ve = s, f;
      Ke = 1, ou(e, nn(r, e.current)), ve = null;
      return;
    }
    t.flags & 32768 ? (_e || l === 1 ? e = !0 : Ua || (ge & 536870912) !== 0 ? e = !1 : (li = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Lt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Ey(t, e)) : _u(t);
  }
  function _u(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Ey(t, li);
        return;
      }
      e = t.return;
      var r = vk(t.alternate, t, Ln);
      if (r !== null) {
        ve = r;
        return;
      }
      if (t = t.sibling, t !== null) {
        ve = t;
        return;
      }
      ve = t = e;
    } while (t !== null);
    Ke === 0 && (Ke = 5);
  }
  function Ey(e, t) {
    do {
      var r = pk(e.alternate, e);
      if (r !== null) {
        r.flags &= 32767, ve = r;
        return;
      }
      if (r = e.return, r !== null && (r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null), !t && (e = e.sibling, e !== null)) {
        ve = e;
        return;
      }
      ve = e = r;
    } while (e !== null);
    Ke = 6, ve = null;
  }
  function Oy(e, t, r, l, s, f, v, p, _) {
    e.cancelPendingCommit = null;
    do
      bu();
    while (lt !== 0);
    if ((Te & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (f = t.lanes | t.childLanes, f |= Hs, s1(e, r, f, v, p, _), e === qe && (ve = qe = null, ge = 0), Aa = t, si = e, Bn = r, Qd = f, Xd = s, yy = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, xk(Sl, function() {
        return Zy(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = q.T, q.T = null, s = L.p, L.p = 2, v = Te, Te |= 4;
        try {
          hk(e, t, r);
        } finally {
          Te = v, L.p = s, q.T = l;
        }
      }
      lt = 1, Uy(), Dy(), Ay();
    }
  }
  function Uy() {
    if (lt === 1) {
      lt = 0;
      var e = si, t = Aa, r = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || r) {
        r = q.T, q.T = null;
        var l = L.p;
        L.p = 2;
        var s = Te;
        Te |= 4;
        try {
          sy(t, e);
          var f = df, v = _h(e.containerInfo), p = f.focusedElem, _ = f.selectionRange;
          if (v !== p && p && p.ownerDocument && yh(p.ownerDocument.documentElement, p)) {
            if (_ !== null && Is(p)) {
              var O = _.start, j = _.end;
              if (j === void 0 && (j = O), "selectionStart" in p) p.selectionStart = O, p.selectionEnd = Math.min(j, p.value.length);
              else {
                var N = p.ownerDocument || document, U = N && N.defaultView || window;
                if (U.getSelection) {
                  var A = U.getSelection(), Y = p.textContent.length, ee = Math.min(_.start, Y), Ce = _.end === void 0 ? ee : Math.min(_.end, Y);
                  !A.extend && ee > Ce && (v = Ce, Ce = ee, ee = v);
                  var $ = gh(p, ee), b = gh(p, Ce);
                  if ($ && b && (A.rangeCount !== 1 || A.anchorNode !== $.node || A.anchorOffset !== $.offset || A.focusNode !== b.node || A.focusOffset !== b.offset)) {
                    var x = N.createRange();
                    x.setStart($.node, $.offset), A.removeAllRanges(), ee > Ce ? (A.addRange(x), A.extend(b.node, b.offset)) : (x.setEnd(b.node, b.offset), A.addRange(x));
                  }
                }
              }
            }
            for (N = [], A = p; A = A.parentNode; ) A.nodeType === 1 && N.push({
              element: A,
              left: A.scrollLeft,
              top: A.scrollTop
            });
            for (typeof p.focus == "function" && p.focus(), p = 0; p < N.length; p++) {
              var Z = N[p];
              Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
            }
          }
          Au = !!sf, df = sf = null;
        } finally {
          Te = s, L.p = l, q.T = r;
        }
      }
      e.current = t, lt = 2;
    }
  }
  function Dy() {
    if (lt === 2) {
      lt = 0;
      var e = si, t = Aa, r = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || r) {
        r = q.T, q.T = null;
        var l = L.p;
        L.p = 2;
        var s = Te;
        Te |= 4;
        try {
          ry(e, t.alternate, t);
        } finally {
          Te = s, L.p = l, q.T = r;
        }
      }
      lt = 3;
    }
  }
  function Ay() {
    if (lt === 4 || lt === 3) {
      lt = 0, t1();
      var e = si, t = Aa, r = Bn, l = yy;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? lt = 5 : (lt = 0, Aa = si = null, jy(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (s === 0 && (ci = null), gs(r), t = t.stateNode, Rt && typeof Rt.onCommitFiberRoot == "function") try {
        Rt.onCommitFiberRoot(pr, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (l !== null) {
        t = q.T, s = L.p, L.p = 2, q.T = null;
        try {
          for (var f = e.onRecoverableError, v = 0; v < l.length; v++) {
            var p = l[v];
            f(p.value, { componentStack: p.stack });
          }
        } finally {
          q.T = t, L.p = s;
        }
      }
      (Bn & 3) !== 0 && bu(), Pn(e), s = e.pendingLanes, (r & 261930) !== 0 && (s & 42) !== 0 ? e === Kd ? Xr++ : (Xr = 0, Kd = e) : Xr = 0, Kr(0, !1);
    }
  }
  function jy(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Dr(t)));
  }
  function bu() {
    return Uy(), Dy(), Ay(), Zy();
  }
  function Zy() {
    if (lt !== 5) return !1;
    var e = si, t = Qd;
    Qd = 0;
    var r = gs(Bn), l = q.T, s = L.p;
    try {
      L.p = 32 > r ? 32 : r, q.T = null, r = Xd, Xd = null;
      var f = si, v = Bn;
      if (lt = 0, Aa = si = null, Bn = 0, (Te & 6) !== 0) throw Error(i(331));
      var p = Te;
      if (Te |= 4, py(f.current), fy(f, f.current, v, r), Te = p, Kr(0, !1), Rt && typeof Rt.onPostCommitFiberRoot == "function") try {
        Rt.onPostCommitFiberRoot(pr, f);
      } catch {
      }
      return !0;
    } finally {
      L.p = s, q.T = l, jy(e, t);
    }
  }
  function Ny(e, t, r) {
    t = nn(r, t), t = Od(e.stateNode, t, 2), e = Mi(e, t, 2), e !== null && (Tl(e, 2), Pn(e));
  }
  function je(e, t, r) {
    if (e.tag === 3) Ny(e, e, r);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ny(t, e, r);
        break;
      } else if (t.tag === 1) {
        var l = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ci === null || !ci.has(l))) {
          e = nn(r, e), r = Ig(2), l = Mi(t, r, 2), l !== null && (Cg(r, l, t, e), Tl(l, 2), Pn(l));
          break;
        }
      }
      t = t.return;
    }
  }
  function ef(e, t, r) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new _k();
      var s = /* @__PURE__ */ new Set();
      l.set(t, s);
    } else s = l.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), l.set(t, s));
    s.has(r) || (Gd = !0, s.add(r), e = kk.bind(null, e, t, r), t.then(e, e));
  }
  function kk(e, t, r) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & r, e.warmLanes &= ~r, qe === e && (ge & r) === r && (Ke === 4 || Ke === 3 && (ge & 62914560) === ge && 300 > Ct() - vu ? (Te & 2) === 0 && ja(e, 0) : Yd |= r, Da === ge && (Da = 0)), Pn(e);
  }
  function Iy(e, t) {
    t === 0 && (t = Ap()), e = Oi(e, t), e !== null && (Tl(e, t), Pn(e));
  }
  function wk(e) {
    var t = e.memoizedState, r = 0;
    t !== null && (r = t.retryLane), Iy(e, r);
  }
  function Tk(e, t) {
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
    l !== null && l.delete(t), Iy(e, r);
  }
  function xk(e, t) {
    return vs(e, t);
  }
  var Su = null, Na = null, tf = !1, $u = !1, nf = !1, fi = 0;
  function Pn(e) {
    e !== Na && e.next === null && (Na === null ? Su = Na = e : Na = Na.next = e), $u = !0, tf || (tf = !0, Ok());
  }
  function Kr(e, t) {
    if (!nf && $u) {
      nf = !0;
      do
        for (var r = !1, l = Su; l !== null; ) {
          if (!t) if (e !== 0) {
            var s = l.pendingLanes;
            if (s === 0) var f = 0;
            else {
              var v = l.suspendedLanes, p = l.pingedLanes;
              f = (1 << 31 - Mt(42 | e) + 1) - 1, f &= s & ~(v & ~p), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (r = !0, qy(l, f));
          } else f = ge, f = wl(l, l === qe ? f : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (f & 3) === 0 || hr(l, f) || (r = !0, qy(l, f));
          l = l.next;
        }
      while (r);
      nf = !1;
    }
  }
  function Ek() {
    Cy();
  }
  function Cy() {
    $u = tf = !1;
    var e = 0;
    fi !== 0 && Ck() && (e = fi);
    for (var t = Ct(), r = null, l = Su; l !== null; ) {
      var s = l.next, f = Ry(l, t);
      f === 0 ? (l.next = null, r === null ? Su = s : r.next = s, s === null && (Na = r)) : (r = l, (e !== 0 || (f & 3) !== 0) && ($u = !0)), l = s;
    }
    lt !== 0 && lt !== 5 || Kr(e, !1), fi !== 0 && (fi = 0);
  }
  function Ry(e, t) {
    for (var r = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var v = 31 - Mt(f), p = 1 << v, _ = s[v];
      _ === -1 ? ((p & r) === 0 || (p & l) !== 0) && (s[v] = c1(p, t)) : _ <= t && (e.expiredLanes |= p), f &= ~p;
    }
    if (t = qe, r = ge, r = wl(e, e === t ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l = e.callbackNode, r === 0 || e === t && (Ae === 2 || Ae === 9) || e.cancelPendingCommit !== null) return l !== null && l !== null && ps(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((r & 3) === 0 || hr(e, r)) {
      if (t = r & -r, t === e.callbackPriority) return t;
      switch (l !== null && ps(l), gs(r)) {
        case 2:
        case 8:
          r = Up;
          break;
        case 32:
          r = Sl;
          break;
        case 268435456:
          r = Dp;
          break;
        default:
          r = Sl;
      }
      return l = My.bind(null, e), r = vs(r, l), e.callbackPriority = t, e.callbackNode = r, t;
    }
    return l !== null && l !== null && ps(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function My(e, t) {
    if (lt !== 0 && lt !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
    var r = e.callbackNode;
    if (bu() && e.callbackNode !== r) return null;
    var l = ge;
    return l = wl(e, e === qe ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l === 0 ? null : (by(e, l, t), Ry(e, Ct()), e.callbackNode != null && e.callbackNode === r ? My.bind(null, e) : null);
  }
  function qy(e, t) {
    if (bu()) return null;
    by(e, t, !0);
  }
  function Ok() {
    Mk(function() {
      (Te & 6) !== 0 ? vs(Op, Ek) : Cy();
    });
  }
  function af() {
    if (fi === 0) {
      var e = ba;
      e === 0 && (e = $l, $l <<= 1, ($l & 261888) === 0 && ($l = 256)), fi = e;
    }
    return fi;
  }
  function Hy(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ul("" + e);
  }
  function Ly(e, t) {
    var r = t.ownerDocument.createElement("input");
    return r.name = t.name, r.value = t.value, e.id && r.setAttribute("form", e.id), t.parentNode.insertBefore(r, t), e = new FormData(e), r.parentNode.removeChild(r), e;
  }
  function Uk(e, t, r, l, s) {
    if (t === "submit" && r && r.stateNode === s) {
      var f = Hy((s[Et] || null).action), v = l.submitter;
      v && (t = (t = v[Et] || null) ? Hy(t.formAction) : v.getAttribute("formAction"), t !== null && (f = t, v = null));
      var p = new Zl("action", "action", null, l, s);
      e.push({
        event: p,
        listeners: [{
          instance: null,
          listener: function() {
            if (l.defaultPrevented) {
              if (fi !== 0) {
                var _ = v ? Ly(s, v) : new FormData(s);
                zd(r, {
                  pending: !0,
                  data: _,
                  method: s.method,
                  action: f
                }, null, _);
              }
            } else typeof f == "function" && (p.preventDefault(), _ = v ? Ly(s, v) : new FormData(s), zd(r, {
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
  for (var rf = 0; rf < qs.length; rf++) {
    var of = qs[rf];
    pn(of.toLowerCase(), "on" + (of[0].toUpperCase() + of.slice(1)));
  }
  pn($h, "onAnimationEnd"), pn(zh, "onAnimationIteration"), pn(kh, "onAnimationStart"), pn("dblclick", "onDoubleClick"), pn("focusin", "onFocus"), pn("focusout", "onBlur"), pn(J1, "onTransitionRun"), pn(G1, "onTransitionStart"), pn(Y1, "onTransitionCancel"), pn(wh, "onTransitionEnd"), oa("onMouseEnter", ["mouseout", "mouseover"]), oa("onMouseLeave", ["mouseout", "mouseover"]), oa("onPointerEnter", ["pointerout", "pointerover"]), oa("onPointerLeave", ["pointerout", "pointerover"]), wi("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), wi("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), wi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), wi("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), wi("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), wi("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Dk = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fr));
  function By(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var l = e[r], s = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (t) for (var v = l.length - 1; 0 <= v; v--) {
          var p = l[v], _ = p.instance, O = p.currentTarget;
          if (p = p.listener, _ !== f && s.isPropagationStopped()) break e;
          f = p, s.currentTarget = O;
          try {
            f(s);
          } catch (j) {
            Cl(j);
          }
          s.currentTarget = null, f = _;
        }
        else for (v = 0; v < l.length; v++) {
          if (p = l[v], _ = p.instance, O = p.currentTarget, p = p.listener, _ !== f && s.isPropagationStopped()) break e;
          f = p, s.currentTarget = O;
          try {
            f(s);
          } catch (j) {
            Cl(j);
          }
          s.currentTarget = null, f = _;
        }
      }
    }
  }
  function pe(e, t) {
    var r = t[ys];
    r === void 0 && (r = t[ys] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    r.has(l) || (Jy(t, e, 2, !1), r.add(l));
  }
  function lf(e, t, r) {
    var l = 0;
    t && (l |= 4), Jy(r, e, l, t);
  }
  var zu = "_reactListening" + Math.random().toString(36).slice(2);
  function Py(e) {
    if (!e[zu]) {
      e[zu] = !0, qp.forEach(function(r) {
        r !== "selectionchange" && (Dk.has(r) || lf(r, !1, e), lf(r, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[zu] || (t[zu] = !0, lf("selectionchange", !1, t));
    }
  }
  function Jy(e, t, r, l) {
    switch (y_(t)) {
      case 2:
        var s = l4;
        break;
      case 8:
        s = u4;
        break;
      default:
        s = $f;
    }
    r = s.bind(null, t, r, e), s = void 0, !xs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), l ? s !== void 0 ? e.addEventListener(t, r, {
      capture: !0,
      passive: s
    }) : e.addEventListener(t, r, !0) : s !== void 0 ? e.addEventListener(t, r, { passive: s }) : e.addEventListener(t, r, !1);
  }
  function uf(e, t, r, l, s) {
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
          if (v = ia(p), v === null) return;
          if (_ = v.tag, _ === 5 || _ === 6 || _ === 26 || _ === 27) {
            l = f = v;
            continue e;
          }
          p = p.parentNode;
        }
      }
      l = l.return;
    }
    Fp(function() {
      var O = f, j = ws(r), N = [];
      e: {
        var U = Th.get(e);
        if (U !== void 0) {
          var A = Zl, Y = e;
          switch (e) {
            case "keypress":
              if (Al(r) === 0) break e;
            case "keydown":
            case "keyup":
              A = E1;
              break;
            case "focusin":
              Y = "focus", A = Ds;
              break;
            case "focusout":
              Y = "blur", A = Ds;
              break;
            case "beforeblur":
            case "afterblur":
              A = Ds;
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
              A = th;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = S1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = O1;
              break;
            case $h:
            case zh:
            case kh:
              A = $1;
              break;
            case wh:
              A = U1;
              break;
            case "scroll":
            case "scrollend":
              A = b1;
              break;
            case "wheel":
              A = D1;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = z1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = ih;
              break;
            case "toggle":
            case "beforetoggle":
              A = A1;
          }
          var ee = (t & 4) !== 0, Ce = !ee && (e === "scroll" || e === "scrollend"), $ = ee ? U !== null ? U + "Capture" : null : U;
          ee = [];
          for (var b = O, x; b !== null; ) {
            var Z = b;
            if (x = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || x === null || $ === null || (Z = br(b, $), Z != null && ee.push(Wr(b, Z, x))), Ce) break;
            b = b.return;
          }
          0 < ee.length && (U = new A(U, Y, null, r, j), N.push({
            event: U,
            listeners: ee
          }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (U = e === "mouseover" || e === "pointerover", A = e === "mouseout" || e === "pointerout", U && r !== ks && (Y = r.relatedTarget || r.fromElement) && (ia(Y) || Y[gr])) break e;
          if ((A || U) && (U = j.window === j ? j : (U = j.ownerDocument) ? U.defaultView || U.parentWindow : window, A ? (Y = r.relatedTarget || r.toElement, A = O, Y = Y ? ia(Y) : null, Y !== null && (Ce = d(Y), ee = Y.tag, Y !== Ce || ee !== 5 && ee !== 27 && ee !== 6) && (Y = null)) : (A = null, Y = O), A !== Y)) {
            if (ee = th, Z = "onMouseLeave", $ = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (ee = ih, Z = "onPointerLeave", $ = "onPointerEnter", b = "pointer"), Ce = A == null ? U : _r(A), x = Y == null ? U : _r(Y), U = new ee(Z, b + "leave", A, r, j), U.target = Ce, U.relatedTarget = x, Z = null, ia(j) === O && (ee = new ee($, b + "enter", Y, r, j), ee.target = x, ee.relatedTarget = Ce, Z = ee), Ce = Z, A && Y) t: {
              for (ee = Ak, $ = A, b = Y, x = 0, Z = $; Z; Z = ee(Z)) x++;
              Z = 0;
              for (var K = b; K; K = ee(K)) Z++;
              for (; 0 < x - Z; ) $ = ee($), x--;
              for (; 0 < Z - x; ) b = ee(b), Z--;
              for (; x--; ) {
                if ($ === b || b !== null && $ === b.alternate) {
                  ee = $;
                  break t;
                }
                $ = ee($), b = ee(b);
              }
              ee = null;
            }
            else ee = null;
            A !== null && Gy(N, U, A, ee, !1), Y !== null && Ce !== null && Gy(N, Ce, Y, ee, !0);
          }
        }
        e: {
          if (U = O ? _r(O) : window, A = U.nodeName && U.nodeName.toLowerCase(), A === "select" || A === "input" && U.type === "file") var Se = dh;
          else if (ch(U)) if (fh) Se = L1;
          else {
            Se = q1;
            var Q = M1;
          }
          else A = U.nodeName, !A || A.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? O && zs(O.elementType) && (Se = dh) : Se = H1;
          if (Se && (Se = Se(e, O))) {
            sh(N, Se, r, j);
            break e;
          }
          Q && Q(e, U, O), e === "focusout" && O && U.type === "number" && O.memoizedProps.value != null && $s(U, "number", U.value);
        }
        switch (Q = O ? _r(O) : window, e) {
          case "focusin":
            (ch(Q) || Q.contentEditable === "true") && (fa = Q, Cs = O, Er = null);
            break;
          case "focusout":
            Er = Cs = fa = null;
            break;
          case "mousedown":
            Rs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rs = !1, bh(N, r, j);
            break;
          case "selectionchange":
            if (P1) break;
          case "keydown":
          case "keyup":
            bh(N, r, j);
        }
        var ce;
        if (js) e: {
          switch (e) {
            case "compositionstart":
              var ye = "onCompositionStart";
              break e;
            case "compositionend":
              ye = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ye = "onCompositionUpdate";
              break e;
          }
          ye = void 0;
        }
        else da ? lh(e, r) && (ye = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (ye = "onCompositionStart");
        ye && (ah && r.locale !== "ko" && (da || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && da && (ce = Wp()) : (Fn = j, Es = "value" in Fn ? Fn.value : Fn.textContent, da = !0)), Q = ku(O, ye), 0 < Q.length && (ye = new nh(ye, e, null, r, j), N.push({
          event: ye,
          listeners: Q
        }), ce ? ye.data = ce : (ce = uh(r), ce !== null && (ye.data = ce)))), (ce = Z1 ? N1(e, r) : I1(e, r)) && (ye = ku(O, "onBeforeInput"), 0 < ye.length && (Q = new nh("onBeforeInput", "beforeinput", null, r, j), N.push({
          event: Q,
          listeners: ye
        }), Q.data = ce)), Uk(N, e, O, r, j);
      }
      By(N, t);
    });
  }
  function Wr(e, t, r) {
    return {
      instance: e,
      listener: t,
      currentTarget: r
    };
  }
  function ku(e, t) {
    for (var r = t + "Capture", l = []; e !== null; ) {
      var s = e, f = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || f === null || (s = br(e, r), s != null && l.unshift(Wr(e, s, f)), s = br(e, t), s != null && l.push(Wr(e, s, f))), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function Ak(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Gy(e, t, r, l, s) {
    for (var f = t._reactName, v = []; r !== null && r !== l; ) {
      var p = r, _ = p.alternate, O = p.stateNode;
      if (p = p.tag, _ !== null && _ === l) break;
      p !== 5 && p !== 26 && p !== 27 || O === null || (_ = O, s ? (O = br(r, f), O != null && v.unshift(Wr(r, O, _))) : s || (O = br(r, f), O != null && v.push(Wr(r, O, _)))), r = r.return;
    }
    v.length !== 0 && e.push({
      event: t,
      listeners: v
    });
  }
  var jk = /\r\n?/g, Zk = /\u0000|\uFFFD/g;
  function Yy(e) {
    return (typeof e == "string" ? e : "" + e).replace(jk, `
`).replace(Zk, "");
  }
  function Vy(e, t) {
    return t = Yy(t), Yy(e) === t;
  }
  function Ie(e, t, r, l, s, f) {
    switch (r) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || ua(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && ua(e, "" + l);
        break;
      case "className":
        El(e, "class", l);
        break;
      case "tabIndex":
        El(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        El(e, r, l);
        break;
      case "style":
        Xp(e, l, f);
        break;
      case "data":
        if (t !== "object") {
          El(e, "data", l);
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
        l = Ul("" + l), e.setAttribute(r, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(r, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof f == "function" && (r === "formAction" ? (t !== "input" && Ie(e, t, "name", s.name, s, null), Ie(e, t, "formEncType", s.formEncType, s, null), Ie(e, t, "formMethod", s.formMethod, s, null), Ie(e, t, "formTarget", s.formTarget, s, null)) : (Ie(e, t, "encType", s.encType, s, null), Ie(e, t, "method", s.method, s, null), Ie(e, t, "target", s.target, s, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(r);
          break;
        }
        l = Ul("" + l), e.setAttribute(r, l);
        break;
      case "onClick":
        l != null && (e.onclick = En);
        break;
      case "onScroll":
        l != null && pe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && pe("scrollend", e);
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
        r = Ul("" + l), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r);
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
        pe("beforetoggle", e), pe("toggle", e), xl(e, "popover", l);
        break;
      case "xlinkActuate":
        xn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        xn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        xn(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        xn(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        xn(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        xn(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        xn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        xn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        xn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        xl(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (r = y1.get(r) || r, xl(e, r, l));
    }
  }
  function cf(e, t, r, l, s, f) {
    switch (r) {
      case "style":
        Xp(e, l, f);
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
        typeof l == "string" ? ua(e, l) : (typeof l == "number" || typeof l == "bigint") && ua(e, "" + l);
        break;
      case "onScroll":
        l != null && pe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && pe("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = En);
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
        if (!Hp.hasOwnProperty(r)) e: {
          if (r[0] === "o" && r[1] === "n" && (s = r.endsWith("Capture"), t = r.slice(2, s ? r.length - 7 : void 0), f = e[Et] || null, f = f != null ? f[r] : null, typeof f == "function" && e.removeEventListener(t, f, s), typeof l == "function")) {
            typeof f != "function" && f !== null && (r in e ? e[r] = null : e.hasAttribute(r) && e.removeAttribute(r)), e.addEventListener(t, l, s);
            break e;
          }
          r in e ? e[r] = l : l === !0 ? e.setAttribute(r, "") : xl(e, r, l);
        }
    }
  }
  function gt(e, t, r) {
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
        pe("error", e), pe("load", e);
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
              Ie(e, t, f, v, r, null);
          }
        }
        s && Ie(e, t, "srcSet", r.srcSet, r, null), l && Ie(e, t, "src", r.src, r, null);
        return;
      case "input":
        pe("invalid", e);
        var p = f = v = s = null, _ = null, O = null;
        for (l in r) if (r.hasOwnProperty(l)) {
          var j = r[l];
          if (j != null) switch (l) {
            case "name":
              s = j;
              break;
            case "type":
              v = j;
              break;
            case "checked":
              _ = j;
              break;
            case "defaultChecked":
              O = j;
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
              Ie(e, t, l, j, r, null);
          }
        }
        Gp(e, f, p, _, O, v, s, !1);
        return;
      case "select":
        pe("invalid", e), l = v = f = null;
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
            Ie(e, t, s, p, r, null);
        }
        t = f, r = v, e.multiple = !!l, t != null ? la(e, !!l, t, !1) : r != null && la(e, !!l, r, !0);
        return;
      case "textarea":
        pe("invalid", e), f = s = l = null;
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
            Ie(e, t, v, p, r, null);
        }
        Vp(e, l, s, f);
        return;
      case "option":
        for (_ in r) r.hasOwnProperty(_) && (l = r[_], l != null) && (_ === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : Ie(e, t, _, l, r, null));
        return;
      case "dialog":
        pe("beforetoggle", e), pe("toggle", e), pe("cancel", e), pe("close", e);
        break;
      case "iframe":
      case "object":
        pe("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Fr.length; l++) pe(Fr[l], e);
        break;
      case "image":
        pe("error", e), pe("load", e);
        break;
      case "details":
        pe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        pe("error", e), pe("load", e);
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
        for (O in r) if (r.hasOwnProperty(O) && (l = r[O], l != null)) switch (O) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(i(137, t));
          default:
            Ie(e, t, O, l, r, null);
        }
        return;
      default:
        if (zs(t)) {
          for (j in r) r.hasOwnProperty(j) && (l = r[j], l !== void 0 && cf(e, t, j, l, r, void 0));
          return;
        }
    }
    for (p in r) r.hasOwnProperty(p) && (l = r[p], l != null && Ie(e, t, p, l, r, null));
  }
  function Nk(e, t, r, l) {
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
        var s = null, f = null, v = null, p = null, _ = null, O = null, j = null;
        for (A in r) {
          var N = r[A];
          if (r.hasOwnProperty(A) && N != null) switch (A) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              _ = N;
            default:
              l.hasOwnProperty(A) || Ie(e, t, A, null, l, N);
          }
        }
        for (var U in l) {
          var A = l[U];
          if (N = r[U], l.hasOwnProperty(U) && (A != null || N != null)) switch (U) {
            case "type":
              f = A;
              break;
            case "name":
              s = A;
              break;
            case "checked":
              O = A;
              break;
            case "defaultChecked":
              j = A;
              break;
            case "value":
              v = A;
              break;
            case "defaultValue":
              p = A;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (A != null) throw Error(i(137, t));
              break;
            default:
              A !== N && Ie(e, t, U, A, l, N);
          }
        }
        Ss(e, v, p, _, O, j, f, s);
        return;
      case "select":
        A = v = p = U = null;
        for (f in r) if (_ = r[f], r.hasOwnProperty(f) && _ != null) switch (f) {
          case "value":
            break;
          case "multiple":
            A = _;
          default:
            l.hasOwnProperty(f) || Ie(e, t, f, null, l, _);
        }
        for (s in l) if (f = l[s], _ = r[s], l.hasOwnProperty(s) && (f != null || _ != null)) switch (s) {
          case "value":
            U = f;
            break;
          case "defaultValue":
            p = f;
            break;
          case "multiple":
            v = f;
          default:
            f !== _ && Ie(e, t, s, f, l, _);
        }
        t = p, r = v, l = A, U != null ? la(e, !!r, U, !1) : !!l != !!r && (t != null ? la(e, !!r, t, !0) : la(e, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        A = U = null;
        for (p in r) if (s = r[p], r.hasOwnProperty(p) && s != null && !l.hasOwnProperty(p)) switch (p) {
          case "value":
            break;
          case "children":
            break;
          default:
            Ie(e, t, p, null, l, s);
        }
        for (v in l) if (s = l[v], f = r[v], l.hasOwnProperty(v) && (s != null || f != null)) switch (v) {
          case "value":
            U = s;
            break;
          case "defaultValue":
            A = s;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (s != null) throw Error(i(91));
            break;
          default:
            s !== f && Ie(e, t, v, s, l, f);
        }
        Yp(e, U, A);
        return;
      case "option":
        for (var Y in r) U = r[Y], r.hasOwnProperty(Y) && U != null && !l.hasOwnProperty(Y) && (Y === "selected" ? e.selected = !1 : Ie(e, t, Y, null, l, U));
        for (_ in l) U = l[_], A = r[_], l.hasOwnProperty(_) && U !== A && (U != null || A != null) && (_ === "selected" ? e.selected = U && typeof U != "function" && typeof U != "symbol" : Ie(e, t, _, U, l, A));
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
        for (var ee in r) U = r[ee], r.hasOwnProperty(ee) && U != null && !l.hasOwnProperty(ee) && Ie(e, t, ee, null, l, U);
        for (O in l) if (U = l[O], A = r[O], l.hasOwnProperty(O) && U !== A && (U != null || A != null)) switch (O) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (U != null) throw Error(i(137, t));
            break;
          default:
            Ie(e, t, O, U, l, A);
        }
        return;
      default:
        if (zs(t)) {
          for (var Ce in r) U = r[Ce], r.hasOwnProperty(Ce) && U !== void 0 && !l.hasOwnProperty(Ce) && cf(e, t, Ce, void 0, l, U);
          for (j in l) U = l[j], A = r[j], !l.hasOwnProperty(j) || U === A || U === void 0 && A === void 0 || cf(e, t, j, U, l, A);
          return;
        }
    }
    for (var $ in r) U = r[$], r.hasOwnProperty($) && U != null && !l.hasOwnProperty($) && Ie(e, t, $, null, l, U);
    for (N in l) U = l[N], A = r[N], !l.hasOwnProperty(N) || U === A || U == null && A == null || Ie(e, t, N, U, l, A);
  }
  function Qy(e) {
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
  function Ik() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, r = performance.getEntriesByType("resource"), l = 0; l < r.length; l++) {
        var s = r[l], f = s.transferSize, v = s.initiatorType, p = s.duration;
        if (f && p && Qy(v)) {
          for (v = 0, p = s.responseEnd, l += 1; l < r.length; l++) {
            var _ = r[l], O = _.startTime;
            if (O > p) break;
            var j = _.transferSize, N = _.initiatorType;
            j && Qy(N) && (_ = _.responseEnd, v += j * (_ < p ? 1 : (p - O) / (_ - O)));
          }
          if (--l, t += 8 * (f + v) / (s.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var sf = null, df = null;
  function wu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Xy(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ky(e, t) {
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
  function ff(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var mf = null;
  function Ck() {
    var e = window.event;
    return e && e.type === "popstate" ? e === mf ? !1 : (mf = e, !0) : (mf = null, !1);
  }
  var Fy = typeof setTimeout == "function" ? setTimeout : void 0, Rk = typeof clearTimeout == "function" ? clearTimeout : void 0, Wy = typeof Promise == "function" ? Promise : void 0, Mk = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wy < "u" ? function(e) {
    return Wy.resolve(null).then(e).catch(qk);
  } : Fy;
  function qk(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function mi(e) {
    return e === "head";
  }
  function e_(e, t) {
    var r = t, l = 0;
    do {
      var s = r.nextSibling;
      if (e.removeChild(r), s && s.nodeType === 8) if (r = s.data, r === "/$" || r === "/&") {
        if (l === 0) {
          e.removeChild(s), Ma(t);
          return;
        }
        l--;
      } else if (r === "$" || r === "$?" || r === "$~" || r === "$!" || r === "&") l++;
      else if (r === "html") eo(e.ownerDocument.documentElement);
      else if (r === "head") {
        r = e.ownerDocument.head, eo(r);
        for (var f = r.firstChild; f; ) {
          var v = f.nextSibling, p = f.nodeName;
          f[yr] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && f.rel.toLowerCase() === "stylesheet" || r.removeChild(f), f = v;
        }
      } else r === "body" && eo(e.ownerDocument.body);
      r = s;
    } while (r);
    Ma(t);
  }
  function t_(e, t) {
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
  function vf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var r = t;
      switch (t = t.nextSibling, r.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          vf(r), _s(r);
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
  function Hk(e, t, r, l) {
    for (; e.nodeType === 1; ) {
      var s = r;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[yr]) switch (t) {
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
      if (e = cn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Lk(e, t, r) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !r || (e = cn(e.nextSibling), e === null)) return null;
    return e;
  }
  function n_(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = cn(e.nextSibling), e === null)) return null;
    return e;
  }
  function pf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function hf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Bk(e, t) {
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
  function cn(e) {
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
  var gf = null;
  function i_(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "/$" || r === "/&") {
          if (t === 0) return cn(e.nextSibling);
          t--;
        } else r !== "$" && r !== "$!" && r !== "$?" && r !== "$~" && r !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function a_(e) {
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
  function r_(e, t, r) {
    switch (t = wu(r), e) {
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
  function eo(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    _s(e);
  }
  var sn = /* @__PURE__ */ new Map(), o_ = /* @__PURE__ */ new Set();
  function Tu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Jn = L.d;
  L.d = {
    f: Pk,
    r: Jk,
    D: Gk,
    C: Yk,
    L: Vk,
    m: Qk,
    X: Kk,
    S: Xk,
    M: Fk
  };
  function Pk() {
    var e = Jn.f(), t = gu();
    return e || t;
  }
  function Jk(e) {
    var t = aa(e);
    t !== null && t.tag === 5 && t.type === "form" ? wg(t) : Jn.r(e);
  }
  var Ia = typeof document > "u" ? null : document;
  function l_(e, t, r) {
    var l = Ia;
    if (l && typeof t == "string" && t) {
      var s = en(t);
      s = 'link[rel="' + e + '"][href="' + s + '"]', typeof r == "string" && (s += '[crossorigin="' + r + '"]'), o_.has(s) || (o_.add(s), e = {
        rel: e,
        crossOrigin: r,
        href: t
      }, l.querySelector(s) === null && (t = l.createElement("link"), gt(t, "link", e), dt(t), l.head.appendChild(t)));
    }
  }
  function Gk(e) {
    Jn.D(e), l_("dns-prefetch", e, null);
  }
  function Yk(e, t) {
    Jn.C(e, t), l_("preconnect", e, t);
  }
  function Vk(e, t, r) {
    Jn.L(e, t, r);
    var l = Ia;
    if (l && e && t) {
      var s = 'link[rel="preload"][as="' + en(t) + '"]';
      t === "image" && r && r.imageSrcSet ? (s += '[imagesrcset="' + en(r.imageSrcSet) + '"]', typeof r.imageSizes == "string" && (s += '[imagesizes="' + en(r.imageSizes) + '"]')) : s += '[href="' + en(e) + '"]';
      var f = s;
      switch (t) {
        case "style":
          f = Ca(e);
          break;
        case "script":
          f = Ra(e);
      }
      sn.has(f) || (e = k({
        rel: "preload",
        href: t === "image" && r && r.imageSrcSet ? void 0 : e,
        as: t
      }, r), sn.set(f, e), l.querySelector(s) !== null || t === "style" && l.querySelector(to(f)) || t === "script" && l.querySelector(no(f)) || (t = l.createElement("link"), gt(t, "link", e), dt(t), l.head.appendChild(t)));
    }
  }
  function Qk(e, t) {
    Jn.m(e, t);
    var r = Ia;
    if (r && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", s = 'link[rel="modulepreload"][as="' + en(l) + '"][href="' + en(e) + '"]', f = s;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Ra(e);
      }
      if (!sn.has(f) && (e = k({
        rel: "modulepreload",
        href: e
      }, t), sn.set(f, e), r.querySelector(s) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(no(f))) return;
        }
        l = r.createElement("link"), gt(l, "link", e), dt(l), r.head.appendChild(l);
      }
    }
  }
  function Xk(e, t, r) {
    Jn.S(e, t, r);
    var l = Ia;
    if (l && e) {
      var s = ra(l).hoistableStyles, f = Ca(e);
      t = t || "default";
      var v = s.get(f);
      if (!v) {
        var p = {
          loading: 0,
          preload: null
        };
        if (v = l.querySelector(to(f))) p.loading = 5;
        else {
          e = k({
            rel: "stylesheet",
            href: e,
            "data-precedence": t
          }, r), (r = sn.get(f)) && yf(e, r);
          var _ = v = l.createElement("link");
          dt(_), gt(_, "link", e), _._p = new Promise(function(O, j) {
            _.onload = O, _.onerror = j;
          }), _.addEventListener("load", function() {
            p.loading |= 1;
          }), _.addEventListener("error", function() {
            p.loading |= 2;
          }), p.loading |= 4, xu(v, t, l);
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
  function Kk(e, t) {
    Jn.X(e, t);
    var r = Ia;
    if (r && e) {
      var l = ra(r).hoistableScripts, s = Ra(e), f = l.get(s);
      f || (f = r.querySelector(no(s)), f || (e = k({
        src: e,
        async: !0
      }, t), (t = sn.get(s)) && _f(e, t), f = r.createElement("script"), dt(f), gt(f, "link", e), r.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, l.set(s, f));
    }
  }
  function Fk(e, t) {
    Jn.M(e, t);
    var r = Ia;
    if (r && e) {
      var l = ra(r).hoistableScripts, s = Ra(e), f = l.get(s);
      f || (f = r.querySelector(no(s)), f || (e = k({
        src: e,
        async: !0,
        type: "module"
      }, t), (t = sn.get(s)) && _f(e, t), f = r.createElement("script"), dt(f), gt(f, "link", e), r.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, l.set(s, f));
    }
  }
  function u_(e, t, r, l) {
    var s = (s = me.current) ? Tu(s) : null;
    if (!s) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string" ? (t = Ca(r.href), r = ra(s).hoistableStyles, l = r.get(t), l || (l = {
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
          e = Ca(r.href);
          var f = ra(s).hoistableStyles, v = f.get(e);
          if (v || (s = s.ownerDocument || s, v = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: {
              loading: 0,
              preload: null
            }
          }, f.set(e, v), (f = s.querySelector(to(e))) && !f._p && (v.instance = f, v.state.loading = 5), sn.has(e) || (r = {
            rel: "preload",
            as: "style",
            href: r.href,
            crossOrigin: r.crossOrigin,
            integrity: r.integrity,
            media: r.media,
            hrefLang: r.hrefLang,
            referrerPolicy: r.referrerPolicy
          }, sn.set(e, r), f || Wk(s, e, r, v.state))), t && l === null) throw Error(i(528, ""));
          return v;
        }
        if (t && l !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return t = r.async, r = r.src, typeof r == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ra(r), r = ra(s).hoistableScripts, l = r.get(t), l || (l = {
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
  function Ca(e) {
    return 'href="' + en(e) + '"';
  }
  function to(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function c_(e) {
    return k({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Wk(e, t, r, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), gt(t, "link", r), dt(t), e.head.appendChild(t));
  }
  function Ra(e) {
    return '[src="' + en(e) + '"]';
  }
  function no(e) {
    return "script[async]" + e;
  }
  function s_(e, t, r) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var l = e.querySelector('style[data-href~="' + en(r.href) + '"]');
        if (l) return t.instance = l, dt(l), l;
        var s = k({}, r, {
          "data-href": r.href,
          "data-precedence": r.precedence,
          href: null,
          precedence: null
        });
        return l = (e.ownerDocument || e).createElement("style"), dt(l), gt(l, "style", s), xu(l, r.precedence, e), t.instance = l;
      case "stylesheet":
        s = Ca(r.href);
        var f = e.querySelector(to(s));
        if (f) return t.state.loading |= 4, t.instance = f, dt(f), f;
        l = c_(r), (s = sn.get(s)) && yf(l, s), f = (e.ownerDocument || e).createElement("link"), dt(f);
        var v = f;
        return v._p = new Promise(function(p, _) {
          v.onload = p, v.onerror = _;
        }), gt(f, "link", l), t.state.loading |= 4, xu(f, r.precedence, e), t.instance = f;
      case "script":
        return f = Ra(r.src), (s = e.querySelector(no(f))) ? (t.instance = s, dt(s), s) : (l = r, (s = sn.get(f)) && (l = k({}, r), _f(l, s)), e = e.ownerDocument || e, s = e.createElement("script"), dt(s), gt(s, "link", l), e.head.appendChild(s), t.instance = s);
      case "void":
        return null;
      default:
        throw Error(i(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, xu(l, r.precedence, e));
    return t.instance;
  }
  function xu(e, t, r) {
    for (var l = r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = l.length ? l[l.length - 1] : null, f = s, v = 0; v < l.length; v++) {
      var p = l[v];
      if (p.dataset.precedence === t) f = p;
      else if (f !== s) break;
    }
    f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = r.nodeType === 9 ? r.head : r, t.insertBefore(e, t.firstChild));
  }
  function yf(e, t) {
    e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
  }
  function _f(e, t) {
    e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
  }
  var Eu = null;
  function d_(e, t, r) {
    if (Eu === null) {
      var l = /* @__PURE__ */ new Map(), s = Eu = /* @__PURE__ */ new Map();
      s.set(r, l);
    } else s = Eu, l = s.get(r), l || (l = /* @__PURE__ */ new Map(), s.set(r, l));
    if (l.has(e)) return l;
    for (l.set(e, null), r = r.getElementsByTagName(e), s = 0; s < r.length; s++) {
      var f = r[s];
      if (!(f[yr] || f[mt] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var v = f.getAttribute(t) || "";
        v = e + v;
        var p = l.get(v);
        p ? p.push(f) : l.set(v, [f]);
      }
    }
    return l;
  }
  function f_(e, t, r) {
    e = e.ownerDocument || e, e.head.insertBefore(r, t === "title" ? e.querySelector("head > title") : null);
  }
  function e4(e, t, r) {
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
  function m_(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function t4(e, t, r, l) {
    if (r.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (r.state.loading & 4) === 0) {
      if (r.instance === null) {
        var s = Ca(l.href), f = t.querySelector(to(s));
        if (f) {
          t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ou.bind(e), t.then(e, e)), r.state.loading |= 4, r.instance = f, dt(f);
          return;
        }
        f = t.ownerDocument || t, l = c_(l), (s = sn.get(s)) && yf(l, s), f = f.createElement("link"), dt(f);
        var v = f;
        v._p = new Promise(function(p, _) {
          v.onload = p, v.onerror = _;
        }), gt(f, "link", l), r.instance = f;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(r, t), (t = r.state.preload) && (r.state.loading & 3) === 0 && (e.count++, r = Ou.bind(e), t.addEventListener("load", r), t.addEventListener("error", r));
    }
  }
  var bf = 0;
  function n4(e, t) {
    return e.stylesheets && e.count === 0 && Du(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(r) {
      var l = setTimeout(function() {
        if (e.stylesheets && Du(e, e.stylesheets), e.unsuspend) {
          var f = e.unsuspend;
          e.unsuspend = null, f();
        }
      }, 6e4 + t);
      0 < e.imgBytes && bf === 0 && (bf = 62500 * Ik());
      var s = setTimeout(function() {
        if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Du(e, e.stylesheets), e.unsuspend)) {
          var f = e.unsuspend;
          e.unsuspend = null, f();
        }
      }, (e.imgBytes > bf ? 50 : 800) + t);
      return e.unsuspend = r, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(s);
      };
    } : null;
  }
  function Ou() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Du(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Uu = null;
  function Du(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Uu = /* @__PURE__ */ new Map(), t.forEach(i4, e), Uu = null, Ou.call(e));
  }
  function i4(e, t) {
    if (!(t.state.loading & 4)) {
      var r = Uu.get(e);
      if (r) var l = r.get(null);
      else {
        r = /* @__PURE__ */ new Map(), Uu.set(e, r);
        for (var s = e.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0; f < s.length; f++) {
          var v = s[f];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (r.set(v.dataset.precedence, v), l = v);
        }
        l && r.set(null, l);
      }
      s = t.instance, v = s.getAttribute("data-precedence"), f = r.get(v) || l, f === l && r.set(null, s), r.set(v, s), this.count++, l = Ou.bind(this), s.addEventListener("load", l), s.addEventListener("error", l), f ? f.parentNode.insertBefore(s, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(s, e.firstChild)), t.state.loading |= 4;
    }
  }
  var io = {
    $$typeof: ie,
    Provider: null,
    Consumer: null,
    _currentValue: we,
    _currentValue2: we,
    _threadCount: 0
  };
  function a4(e, t, r, l, s, f, v, p, _) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = hs(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = hs(0), this.hiddenUpdates = hs(null), this.identifierPrefix = l, this.onUncaughtError = s, this.onCaughtError = f, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = _, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function r4(e, t, r, l, s, f, v, p, _, O, j, N) {
    return e = new a4(e, t, r, v, _, O, j, N, p), t = 1, f === !0 && (t |= 24), f = Ht(3, null, null, t), e.current = f, f.stateNode = e, t = Ws(), t.refCount++, e.pooledCache = t, t.refCount++, f.memoizedState = {
      element: l,
      isDehydrated: r,
      cache: t
    }, id(f), e;
  }
  function o4(e) {
    return e ? (e = pa, e) : pa;
  }
  function v_(e, t, r, l, s, f) {
    s = o4(s), l.context === null ? l.context = s : l.pendingContext = s, l = Ri(t), l.payload = { element: r }, f = f === void 0 ? null : f, f !== null && (l.callback = f), r = Mi(e, l, t), r !== null && (Zt(r, e, t), Nr(r, e, t));
  }
  function p_(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Sf(e, t) {
    p_(e, t), (e = e.alternate) && p_(e, t);
  }
  function h_(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Oi(e, 67108864);
      t !== null && Zt(t, e, 67108864), Sf(e, 67108864);
    }
  }
  function g_(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = un();
      t = Ip(t);
      var r = Oi(e, t);
      r !== null && Zt(r, e, t), Sf(e, t);
    }
  }
  var Au = !0;
  function l4(e, t, r, l) {
    var s = q.T;
    q.T = null;
    var f = L.p;
    try {
      L.p = 2, $f(e, t, r, l);
    } finally {
      L.p = f, q.T = s;
    }
  }
  function u4(e, t, r, l) {
    var s = q.T;
    q.T = null;
    var f = L.p;
    try {
      L.p = 8, $f(e, t, r, l);
    } finally {
      L.p = f, q.T = s;
    }
  }
  function $f(e, t, r, l) {
    if (Au) {
      var s = zf(l);
      if (s === null) uf(e, t, l, ju, r), __(e, l);
      else if (s4(s, e, t, r, l)) l.stopPropagation();
      else if (__(e, l), t & 4 && -1 < c4.indexOf(e)) {
        for (; s !== null; ) {
          var f = aa(s);
          if (f !== null) switch (f.tag) {
            case 3:
              if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                var v = ki(f.pendingLanes);
                if (v !== 0) {
                  var p = f;
                  for (p.pendingLanes |= 2, p.entangledLanes |= 2; v; ) {
                    var _ = 1 << 31 - Mt(v);
                    p.entanglements[1] |= _, v &= ~_;
                  }
                  Pn(f), (Te & 6) === 0 && (pu = Ct() + 500, Kr(0, !1));
                }
              }
              break;
            case 31:
            case 13:
              p = Oi(f, 2), p !== null && Zt(p, f, 2), gu(), Sf(f, 2);
          }
          if (f = zf(l), f === null && uf(e, t, l, ju, r), f === s) break;
          s = f;
        }
        s !== null && l.stopPropagation();
      } else uf(e, t, l, null, r);
    }
  }
  function zf(e) {
    return e = ws(e), kf(e);
  }
  var ju = null;
  function kf(e) {
    if (ju = null, e = ia(e), e !== null) {
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
    return ju = e, null;
  }
  function y_(e) {
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
        switch (n1()) {
          case Op:
            return 2;
          case Up:
            return 8;
          case Sl:
          case i1:
            return 32;
          case Dp:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var wf = !1, vi = null, pi = null, hi = null, ao = /* @__PURE__ */ new Map(), ro = /* @__PURE__ */ new Map(), gi = [], c4 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function __(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        vi = null;
        break;
      case "dragenter":
      case "dragleave":
        pi = null;
        break;
      case "mouseover":
      case "mouseout":
        hi = null;
        break;
      case "pointerover":
      case "pointerout":
        ao.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ro.delete(t.pointerId);
    }
  }
  function oo(e, t, r, l, s, f) {
    return e === null || e.nativeEvent !== f ? (e = {
      blockedOn: t,
      domEventName: r,
      eventSystemFlags: l,
      nativeEvent: f,
      targetContainers: [s]
    }, t !== null && (t = aa(t), t !== null && h_(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function s4(e, t, r, l, s) {
    switch (t) {
      case "focusin":
        return vi = oo(vi, e, t, r, l, s), !0;
      case "dragenter":
        return pi = oo(pi, e, t, r, l, s), !0;
      case "mouseover":
        return hi = oo(hi, e, t, r, l, s), !0;
      case "pointerover":
        var f = s.pointerId;
        return ao.set(f, oo(ao.get(f) || null, e, t, r, l, s)), !0;
      case "gotpointercapture":
        return f = s.pointerId, ro.set(f, oo(ro.get(f) || null, e, t, r, l, s)), !0;
    }
    return !1;
  }
  function b_(e) {
    var t = ia(e.target);
    if (t !== null) {
      var r = d(t);
      if (r !== null) {
        if (t = r.tag, t === 13) {
          if (t = m(r), t !== null) {
            e.blockedOn = t, Rp(e.priority, function() {
              g_(r);
            });
            return;
          }
        } else if (t === 31) {
          if (t = y(r), t !== null) {
            e.blockedOn = t, Rp(e.priority, function() {
              g_(r);
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
  function Zu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = zf(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var l = new r.constructor(r.type, r);
        ks = l, r.target.dispatchEvent(l), ks = null;
      } else return t = aa(r), t !== null && h_(t), e.blockedOn = r, !1;
      t.shift();
    }
    return !0;
  }
  function S_(e, t, r) {
    Zu(e) && r.delete(t);
  }
  function d4() {
    wf = !1, vi !== null && Zu(vi) && (vi = null), pi !== null && Zu(pi) && (pi = null), hi !== null && Zu(hi) && (hi = null), ao.forEach(S_), ro.forEach(S_);
  }
  function Nu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, wf || (wf = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, d4)));
  }
  var Iu = null;
  function $_(e) {
    Iu !== e && (Iu = e, a.unstable_scheduleCallback(a.unstable_NormalPriority, function() {
      Iu === e && (Iu = null);
      for (var t = 0; t < e.length; t += 3) {
        var r = e[t], l = e[t + 1], s = e[t + 2];
        if (typeof l != "function") {
          if (kf(l || r) === null) continue;
          break;
        }
        var f = aa(r);
        f !== null && (e.splice(t, 3), t -= 3, zd(f, {
          pending: !0,
          data: s,
          method: r.method,
          action: l
        }, l, s));
      }
    }));
  }
  function Ma(e) {
    function t(_) {
      return Nu(_, e);
    }
    vi !== null && Nu(vi, e), pi !== null && Nu(pi, e), hi !== null && Nu(hi, e), ao.forEach(t), ro.forEach(t);
    for (var r = 0; r < gi.length; r++) {
      var l = gi[r];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < gi.length && (r = gi[0], r.blockedOn === null); ) b_(r), r.blockedOn === null && gi.shift();
    if (r = (e.ownerDocument || e).$$reactFormReplay, r != null) for (l = 0; l < r.length; l += 3) {
      var s = r[l], f = r[l + 1], v = s[Et] || null;
      if (typeof f == "function") v || $_(r);
      else if (v) {
        var p = null;
        if (f && f.hasAttribute("formAction")) {
          if (s = f, v = f[Et] || null) p = v.formAction;
          else if (kf(s) !== null) continue;
        } else p = v.action;
        typeof p == "function" ? r[l + 1] = p : (r.splice(l, 3), l -= 3), $_(r);
      }
    }
  }
  function f4() {
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
  function Tf(e) {
    this._internalRoot = e;
  }
  xf.prototype.render = Tf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    var r = t.current;
    v_(r, un(), e, t, null, null);
  }, xf.prototype.unmount = Tf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      v_(e.current, 2, null, e, null, null), gu(), t[gr] = null;
    }
  };
  function xf(e) {
    this._internalRoot = e;
  }
  xf.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Cp();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var r = 0; r < gi.length && t !== 0 && t < gi[r].priority; r++) ;
      gi.splice(r, 0, e), r === 0 && b_(e);
    }
  };
  var z_ = o.version;
  if (z_ !== "19.2.7") throw Error(i(527, z_, "19.2.7"));
  L.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = g(t), e = e !== null ? E(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var m4 = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: q,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cu.isDisabled && Cu.supportsFiber) try {
      pr = Cu.inject(m4), Rt = Cu;
    } catch {
    }
  }
  n.createRoot = function(e, t) {
    if (!u(e)) throw Error(i(299));
    var r = !1, l = "", s = uk, f = ck, v = sk;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (s = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (v = t.onRecoverableError)), t = r4(e, 1, !1, null, null, r, l, null, s, f, v, f4), e[gr] = t.current, Py(e), new Tf(t);
  };
})), x4 = /* @__PURE__ */ kn(((n, a) => {
  function o() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (c) {
        console.error(c);
      }
  }
  o(), a.exports = T4();
})), yt = /* @__PURE__ */ ab(Zf(), 1), E4 = /* @__PURE__ */ ab(x4(), 1), O4 = class {
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
}, Pu = new O4(), Ju = {
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
}, k_, Nf = /* @__PURE__ */ Object.freeze({ status: "aborted" });
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
    const h = d.prototype, g = Object.keys(h);
    for (let E = 0; E < g.length; E++) {
      const k = g[E];
      k in m || (m[k] = h[k].bind(m));
    }
  }
  const i = o?.Parent ?? Object;
  class u extends i {
  }
  Object.defineProperty(u, "name", { value: n });
  function d(m) {
    var y;
    const h = o?.Parent ? new u() : this;
    c(h, m), (y = h._zod).deferred ?? (y.deferred = []);
    for (const g of h._zod.deferred) g();
    return h;
  }
  return Object.defineProperty(d, "init", { value: c }), Object.defineProperty(d, Symbol.hasInstance, { value: (m) => o?.Parent && m instanceof o.Parent ? !0 : m?._zod?.traits?.has(n) }), Object.defineProperty(d, "name", { value: n }), d;
}
var If = /* @__PURE__ */ Symbol("zod_brand"), Yi = class extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}, Wu = class extends Error {
  constructor(n) {
    super(`Encountered unidirectional transform during encode: ${n}`), this.name = "ZodEncodeError";
  }
};
(k_ = globalThis).__zod_globalConfig ?? (k_.__zod_globalConfig = {});
var mo = globalThis.__zod_globalConfig;
function ct(n) {
  return n && Object.assign(mo, n), mo;
}
var Cf = /* @__PURE__ */ _n({
  BIGINT_FORMAT_RANGES: () => db,
  Class: () => V4,
  NUMBER_FORMAT_RANGES: () => sb,
  aborted: () => Gi,
  allowsEval: () => lb,
  assert: () => Z4,
  assertEqual: () => U4,
  assertIs: () => A4,
  assertNever: () => j4,
  assertNotEqual: () => D4,
  assignProp: () => Si,
  base64ToUint8Array: () => bb,
  base64urlToUint8Array: () => P4,
  cached: () => yo,
  captureStackTrace: () => Mf,
  cleanEnum: () => B4,
  cleanRegex: () => ec,
  clone: () => Qt,
  cloneDef: () => I4,
  createTransparentProxy: () => L4,
  defineLazy: () => se,
  esc: () => Of,
  escapeRegex: () => Gn,
  explicitlyAborted: () => _b,
  extend: () => vb,
  finalizeIssue: () => Vt,
  floatSafeRemainder: () => rb,
  getElementAtPath: () => C4,
  getEnumValues: () => Rf,
  getLengthableOrigin: () => ic,
  getParsedType: () => H4,
  getSizableOrigin: () => nc,
  hexToUint8Array: () => G4,
  isObject: () => La,
  isPlainObject: () => Vi,
  issue: () => Ba,
  joinValues: () => R,
  jsonStringifyReplacer: () => Gu,
  merge: () => hb,
  mergeDefs: () => wn,
  normalizeParams: () => I,
  nullish: () => Wi,
  numKeys: () => q4,
  objectClone: () => N4,
  omit: () => mb,
  optionalKeys: () => cb,
  parsedType: () => te,
  partial: () => gb,
  pick: () => fb,
  prefixIssues: () => dn,
  primitiveTypes: () => ub,
  promiseAllObject: () => R4,
  propertyKeyTypes: () => Yu,
  randomString: () => M4,
  required: () => yb,
  safeExtend: () => pb,
  shallowClone: () => tc,
  slugify: () => ob,
  stringifyPrimitive: () => W,
  uint8ArrayToBase64: () => Sb,
  uint8ArrayToBase64url: () => J4,
  uint8ArrayToHex: () => Y4,
  unwrapMessage: () => uo
});
function U4(n) {
  return n;
}
function D4(n) {
  return n;
}
function A4(n) {
}
function j4(n) {
  throw new Error("Unexpected value in exhaustive check");
}
function Z4(n) {
}
function Rf(n) {
  const a = Object.values(n).filter((o) => typeof o == "number");
  return Object.entries(n).filter(([o, c]) => a.indexOf(+o) === -1).map(([o, c]) => c);
}
function R(n, a = "|") {
  return n.map((o) => W(o)).join(a);
}
function Gu(n, a) {
  return typeof a == "bigint" ? a.toString() : a;
}
function yo(n) {
  return { get value() {
    {
      const a = n();
      return Object.defineProperty(this, "value", { value: a }), a;
    }
    throw new Error("cached value already set");
  } };
}
function Wi(n) {
  return n == null;
}
function ec(n) {
  const a = n.startsWith("^") ? 1 : 0, o = n.endsWith("$") ? n.length - 1 : n.length;
  return n.slice(a, o);
}
function rb(n, a) {
  const o = n / a, c = Math.round(o), i = Number.EPSILON * Math.max(Math.abs(o), 1);
  return Math.abs(o - c) < i ? 0 : o - c;
}
var w_ = /* @__PURE__ */ Symbol("evaluating");
function se(n, a, o) {
  let c;
  Object.defineProperty(n, a, {
    get() {
      if (c !== w_)
        return c === void 0 && (c = w_, c = o()), c;
    },
    set(i) {
      Object.defineProperty(n, a, { value: i });
    },
    configurable: !0
  });
}
function N4(n) {
  return Object.create(Object.getPrototypeOf(n), Object.getOwnPropertyDescriptors(n));
}
function Si(n, a, o) {
  Object.defineProperty(n, a, {
    value: o,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function wn(...n) {
  const a = {};
  for (const o of n) Object.assign(a, Object.getOwnPropertyDescriptors(o));
  return Object.defineProperties({}, a);
}
function I4(n) {
  return wn(n._zod.def);
}
function C4(n, a) {
  return a ? a.reduce((o, c) => o?.[c], n) : n;
}
function R4(n) {
  const a = Object.keys(n), o = a.map((c) => n[c]);
  return Promise.all(o).then((c) => {
    const i = {};
    for (let u = 0; u < a.length; u++) i[a[u]] = c[u];
    return i;
  });
}
function M4(n = 10) {
  const a = "abcdefghijklmnopqrstuvwxyz";
  let o = "";
  for (let c = 0; c < n; c++) o += a[Math.floor(Math.random() * 26)];
  return o;
}
function Of(n) {
  return JSON.stringify(n);
}
function ob(n) {
  return n.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var Mf = "captureStackTrace" in Error ? Error.captureStackTrace : (...n) => {
};
function La(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
var lb = /* @__PURE__ */ yo(() => {
  if (mo.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
});
function Vi(n) {
  if (La(n) === !1) return !1;
  const a = n.constructor;
  if (a === void 0 || typeof a != "function") return !0;
  const o = a.prototype;
  return !(La(o) === !1 || Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === !1);
}
function tc(n) {
  return Vi(n) ? { ...n } : Array.isArray(n) ? [...n] : n instanceof Map ? new Map(n) : n instanceof Set ? new Set(n) : n;
}
function q4(n) {
  let a = 0;
  for (const o in n) Object.prototype.hasOwnProperty.call(n, o) && a++;
  return a;
}
var H4 = (n) => {
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
}, Yu = /* @__PURE__ */ new Set([
  "string",
  "number",
  "symbol"
]), ub = /* @__PURE__ */ new Set([
  "string",
  "number",
  "bigint",
  "boolean",
  "symbol",
  "undefined"
]);
function Gn(n) {
  return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Qt(n, a, o) {
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
function L4(n) {
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
function W(n) {
  return typeof n == "bigint" ? n.toString() + "n" : typeof n == "string" ? `"${n}"` : `${n}`;
}
function cb(n) {
  return Object.keys(n).filter((a) => n[a]._zod.optin === "optional" && n[a]._zod.optout === "optional");
}
var sb = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, db = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function fb(n, a) {
  const o = n._zod.def, c = o.checks;
  if (c && c.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
  return Qt(n, wn(n._zod.def, {
    get shape() {
      const i = {};
      for (const u in a) {
        if (!(u in o.shape)) throw new Error(`Unrecognized key: "${u}"`);
        a[u] && (i[u] = o.shape[u]);
      }
      return Si(this, "shape", i), i;
    },
    checks: []
  }));
}
function mb(n, a) {
  const o = n._zod.def, c = o.checks;
  if (c && c.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
  return Qt(n, wn(n._zod.def, {
    get shape() {
      const i = { ...n._zod.def.shape };
      for (const u in a) {
        if (!(u in o.shape)) throw new Error(`Unrecognized key: "${u}"`);
        a[u] && delete i[u];
      }
      return Si(this, "shape", i), i;
    },
    checks: []
  }));
}
function vb(n, a) {
  if (!Vi(a)) throw new Error("Invalid input to extend: expected a plain object");
  const o = n._zod.def.checks;
  if (o && o.length > 0) {
    const c = n._zod.def.shape;
    for (const i in a) if (Object.getOwnPropertyDescriptor(c, i) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  return Qt(n, wn(n._zod.def, { get shape() {
    const c = {
      ...n._zod.def.shape,
      ...a
    };
    return Si(this, "shape", c), c;
  } }));
}
function pb(n, a) {
  if (!Vi(a)) throw new Error("Invalid input to safeExtend: expected a plain object");
  return Qt(n, wn(n._zod.def, { get shape() {
    const o = {
      ...n._zod.def.shape,
      ...a
    };
    return Si(this, "shape", o), o;
  } }));
}
function hb(n, a) {
  if (n._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  return Qt(n, wn(n._zod.def, {
    get shape() {
      const o = {
        ...n._zod.def.shape,
        ...a._zod.def.shape
      };
      return Si(this, "shape", o), o;
    },
    get catchall() {
      return a._zod.def.catchall;
    },
    checks: a._zod.def.checks ?? []
  }));
}
function gb(n, a, o) {
  const c = a._zod.def.checks;
  if (c && c.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
  return Qt(a, wn(a._zod.def, {
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
      return Si(this, "shape", u), u;
    },
    checks: []
  }));
}
function yb(n, a, o) {
  return Qt(a, wn(a._zod.def, { get shape() {
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
    return Si(this, "shape", i), i;
  } }));
}
function Gi(n, a = 0) {
  if (n.aborted === !0) return !0;
  for (let o = a; o < n.issues.length; o++) if (n.issues[o]?.continue !== !0) return !0;
  return !1;
}
function _b(n, a = 0) {
  if (n.aborted === !0) return !0;
  for (let o = a; o < n.issues.length; o++) if (n.issues[o]?.continue === !1) return !0;
  return !1;
}
function dn(n, a) {
  return a.map((o) => {
    var c;
    return (c = o).path ?? (c.path = []), o.path.unshift(n), o;
  });
}
function uo(n) {
  return typeof n == "string" ? n : n?.message;
}
function Vt(n, a, o) {
  const c = n.message ? n.message : uo(n.inst?._zod.def?.error?.(n)) ?? uo(a?.error?.(n)) ?? uo(o.customError?.(n)) ?? uo(o.localeError?.(n)) ?? "Invalid input", { inst: i, continue: u, input: d, ...m } = n;
  return m.path ?? (m.path = []), m.message = c, a?.reportInput && (m.input = d), m;
}
function nc(n) {
  return n instanceof Set ? "set" : n instanceof Map ? "map" : n instanceof File ? "file" : "unknown";
}
function ic(n) {
  return Array.isArray(n) ? "array" : typeof n == "string" ? "string" : "unknown";
}
function te(n) {
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
function Ba(...n) {
  const [a, o, c] = n;
  return typeof a == "string" ? {
    message: a,
    code: "custom",
    input: o,
    inst: c
  } : { ...a };
}
function B4(n) {
  return Object.entries(n).filter(([a, o]) => Number.isNaN(Number.parseInt(a, 10))).map((a) => a[1]);
}
function bb(n) {
  const a = atob(n), o = new Uint8Array(a.length);
  for (let c = 0; c < a.length; c++) o[c] = a.charCodeAt(c);
  return o;
}
function Sb(n) {
  let a = "";
  for (let o = 0; o < n.length; o++) a += String.fromCharCode(n[o]);
  return btoa(a);
}
function P4(n) {
  const a = n.replace(/-/g, "+").replace(/_/g, "/");
  return bb(a + "=".repeat((4 - a.length % 4) % 4));
}
function J4(n) {
  return Sb(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function G4(n) {
  const a = n.replace(/^0x/, "");
  if (a.length % 2 !== 0) throw new Error("Invalid hex string length");
  const o = new Uint8Array(a.length / 2);
  for (let c = 0; c < a.length; c += 2) o[c / 2] = Number.parseInt(a.slice(c, c + 2), 16);
  return o;
}
function Y4(n) {
  return Array.from(n).map((a) => a.toString(16).padStart(2, "0")).join("");
}
var V4 = class {
  constructor(...n) {
  }
}, $b = (n, a) => {
  n.name = "$ZodError", Object.defineProperty(n, "_zod", {
    value: n._zod,
    enumerable: !1
  }), Object.defineProperty(n, "issues", {
    value: a,
    enumerable: !1
  }), n.message = JSON.stringify(a, Gu, 2), Object.defineProperty(n, "toString", {
    value: () => n.message,
    enumerable: !1
  });
}, qf = z("$ZodError", $b), Xt = z("$ZodError", $b, { Parent: Error });
function ac(n, a = (o) => o.message) {
  const o = {}, c = [];
  for (const i of n.issues) i.path.length > 0 ? (o[i.path[0]] = o[i.path[0]] || [], o[i.path[0]].push(a(i))) : c.push(a(i));
  return {
    formErrors: c,
    fieldErrors: o
  };
}
function rc(n, a = (o) => o.message) {
  const o = { _errors: [] }, c = (i, u = []) => {
    for (const d of i.issues) if (d.code === "invalid_union" && d.errors.length) d.errors.map((m) => c({ issues: m }, [...u, ...d.path]));
    else if (d.code === "invalid_key") c({ issues: d.issues }, [...u, ...d.path]);
    else if (d.code === "invalid_element") c({ issues: d.issues }, [...u, ...d.path]);
    else {
      const m = [...u, ...d.path];
      if (m.length === 0) o._errors.push(a(d));
      else {
        let y = o, h = 0;
        for (; h < m.length; ) {
          const g = m[h];
          h !== m.length - 1 ? y[g] = y[g] || { _errors: [] } : (y[g] = y[g] || { _errors: [] }, y[g]._errors.push(a(d))), y = y[g], h++;
        }
      }
    }
  };
  return c(n), o;
}
function Hf(n, a = (o) => o.message) {
  const o = { errors: [] }, c = (i, u = []) => {
    var d, m;
    for (const y of i.issues) if (y.code === "invalid_union" && y.errors.length) y.errors.map((h) => c({ issues: h }, [...u, ...y.path]));
    else if (y.code === "invalid_key") c({ issues: y.issues }, [...u, ...y.path]);
    else if (y.code === "invalid_element") c({ issues: y.issues }, [...u, ...y.path]);
    else {
      const h = [...u, ...y.path];
      if (h.length === 0) {
        o.errors.push(a(y));
        continue;
      }
      let g = o, E = 0;
      for (; E < h.length; ) {
        const k = h[E], M = E === h.length - 1;
        typeof k == "string" ? (g.properties ?? (g.properties = {}), (d = g.properties)[k] ?? (d[k] = { errors: [] }), g = g.properties[k]) : (g.items ?? (g.items = []), (m = g.items)[k] ?? (m[k] = { errors: [] }), g = g.items[k]), M && g.errors.push(a(y)), E++;
      }
    }
  };
  return c(n), o;
}
function zb(n) {
  const a = [], o = n.map((c) => typeof c == "object" ? c.key : c);
  for (const c of o) typeof c == "number" ? a.push(`[${c}]`) : typeof c == "symbol" ? a.push(`[${JSON.stringify(String(c))}]`) : /[^\w$]/.test(c) ? a.push(`[${JSON.stringify(c)}]`) : (a.length && a.push("."), a.push(c));
  return a.join("");
}
function Lf(n) {
  const a = [], o = [...n.issues].sort((c, i) => (c.path ?? []).length - (i.path ?? []).length);
  for (const c of o)
    a.push(`✖ ${c.message}`), c.path?.length && a.push(`  → at ${zb(c.path)}`);
  return a.join(`
`);
}
var _o = (n) => (a, o, c, i) => {
  const u = c ? {
    ...c,
    async: !1
  } : { async: !1 }, d = a._zod.run({
    value: o,
    issues: []
  }, u);
  if (d instanceof Promise) throw new Yi();
  if (d.issues.length) {
    const m = new (i?.Err ?? n)(d.issues.map((y) => Vt(y, u, ct())));
    throw Mf(m, i?.callee), m;
  }
  return d.value;
}, Uf = /* @__PURE__ */ _o(Xt), bo = (n) => async (a, o, c, i) => {
  const u = c ? {
    ...c,
    async: !0
  } : { async: !0 };
  let d = a._zod.run({
    value: o,
    issues: []
  }, u);
  if (d instanceof Promise && (d = await d), d.issues.length) {
    const m = new (i?.Err ?? n)(d.issues.map((y) => Vt(y, u, ct())));
    throw Mf(m, i?.callee), m;
  }
  return d.value;
}, Df = /* @__PURE__ */ bo(Xt), So = (n) => (a, o, c) => {
  const i = c ? {
    ...c,
    async: !1
  } : { async: !1 }, u = a._zod.run({
    value: o,
    issues: []
  }, i);
  if (u instanceof Promise) throw new Yi();
  return u.issues.length ? {
    success: !1,
    error: new (n ?? qf)(u.issues.map((d) => Vt(d, i, ct())))
  } : {
    success: !0,
    data: u.value
  };
}, Bf = /* @__PURE__ */ So(Xt), $o = (n) => async (a, o, c) => {
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
    error: new n(u.issues.map((d) => Vt(d, i, ct())))
  } : {
    success: !0,
    data: u.value
  };
}, kb = /* @__PURE__ */ $o(Xt), Pf = (n) => (a, o, c) => {
  const i = c ? {
    ...c,
    direction: "backward"
  } : { direction: "backward" };
  return _o(n)(a, o, i);
}, Q4 = /* @__PURE__ */ Pf(Xt), Jf = (n) => (a, o, c) => _o(n)(a, o, c), X4 = /* @__PURE__ */ Jf(Xt), Gf = (n) => async (a, o, c) => {
  const i = c ? {
    ...c,
    direction: "backward"
  } : { direction: "backward" };
  return bo(n)(a, o, i);
}, K4 = /* @__PURE__ */ Gf(Xt), Yf = (n) => async (a, o, c) => bo(n)(a, o, c), F4 = /* @__PURE__ */ Yf(Xt), Vf = (n) => (a, o, c) => {
  const i = c ? {
    ...c,
    direction: "backward"
  } : { direction: "backward" };
  return So(n)(a, o, i);
}, W4 = /* @__PURE__ */ Vf(Xt), Qf = (n) => (a, o, c) => So(n)(a, o, c), ew = /* @__PURE__ */ Qf(Xt), Xf = (n) => async (a, o, c) => {
  const i = c ? {
    ...c,
    direction: "backward"
  } : { direction: "backward" };
  return $o(n)(a, o, i);
}, tw = /* @__PURE__ */ Xf(Xt), Kf = (n) => async (a, o, c) => $o(n)(a, o, c), nw = /* @__PURE__ */ Kf(Xt), oc = /* @__PURE__ */ _n({
  base64: () => Hb,
  base64url: () => Ff,
  bigint: () => Kb,
  boolean: () => Wb,
  browserEmail: () => sw,
  cidrv4: () => Mb,
  cidrv6: () => qb,
  cuid: () => wb,
  cuid2: () => Tb,
  date: () => Gb,
  datetime: () => Qb,
  domain: () => Bb,
  duration: () => Db,
  e164: () => Pb,
  email: () => jb,
  emoji: () => Nb,
  extendedDuration: () => iw,
  guid: () => Ab,
  hex: () => aS,
  hostname: () => Lb,
  html5Email: () => lw,
  httpProtocol: () => Wf,
  idnEmail: () => cw,
  integer: () => Fb,
  ipv4: () => Ib,
  ipv6: () => Cb,
  ksuid: () => Ob,
  lowercase: () => nS,
  mac: () => Rb,
  md5_base64: () => mw,
  md5_base64url: () => vw,
  md5_hex: () => fw,
  nanoid: () => Ub,
  null: () => eS,
  number: () => em,
  rfc5322Email: () => uw,
  sha1_base64: () => hw,
  sha1_base64url: () => gw,
  sha1_hex: () => pw,
  sha256_base64: () => _w,
  sha256_base64url: () => bw,
  sha256_hex: () => yw,
  sha384_base64: () => $w,
  sha384_base64url: () => zw,
  sha384_hex: () => Sw,
  sha512_base64: () => ww,
  sha512_base64url: () => Tw,
  sha512_hex: () => kw,
  string: () => Xb,
  time: () => Vb,
  ulid: () => xb,
  undefined: () => tS,
  unicodeEmail: () => Zb,
  uppercase: () => iS,
  uuid: () => Pa,
  uuid4: () => aw,
  uuid6: () => rw,
  uuid7: () => ow,
  xid: () => Eb
}), wb = /^[cC][0-9a-z]{6,}$/, Tb = /^[0-9a-z]+$/, xb = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Eb = /^[0-9a-vA-V]{20}$/, Ob = /^[A-Za-z0-9]{27}$/, Ub = /^[a-zA-Z0-9_-]{21}$/, Db = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, iw = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Ab = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Pa = (n) => n ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${n}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, aw = /* @__PURE__ */ Pa(4), rw = /* @__PURE__ */ Pa(6), ow = /* @__PURE__ */ Pa(7), jb = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, lw = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, uw = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Zb = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, cw = Zb, sw = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, dw = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Nb() {
  return new RegExp(dw, "u");
}
var Ib = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Cb = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Rb = (n) => {
  const a = Gn(n ?? ":");
  return new RegExp(`^(?:[0-9A-F]{2}${a}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${a}){5}[0-9a-f]{2}$`);
}, Mb = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, qb = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Hb = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Ff = /^[A-Za-z0-9_-]*$/, Lb = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, Bb = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, Wf = /^https?$/, Pb = /^\+[1-9]\d{6,14}$/, Jb = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Gb = /* @__PURE__ */ new RegExp(`^${Jb}$`);
function Yb(n) {
  const a = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof n.precision == "number" ? n.precision === -1 ? `${a}` : n.precision === 0 ? `${a}:[0-5]\\d` : `${a}:[0-5]\\d\\.\\d{${n.precision}}` : `${a}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Vb(n) {
  return new RegExp(`^${Yb(n)}$`);
}
function Qb(n) {
  const a = Yb({ precision: n.precision }), o = ["Z"];
  n.local && o.push(""), n.offset && o.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const c = `${a}(?:${o.join("|")})`;
  return new RegExp(`^${Jb}T(?:${c})$`);
}
var Xb = (n) => {
  const a = n ? `[\\s\\S]{${n?.minimum ?? 0},${n?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${a}$`);
}, Kb = /^-?\d+n?$/, Fb = /^-?\d+$/, em = /^-?\d+(?:\.\d+)?$/, Wb = /^(?:true|false)$/i, eS = /^null$/i, tS = /^undefined$/i, nS = /^[^A-Z]*$/, iS = /^[^a-z]*$/, aS = /^[0-9a-fA-F]*$/;
function zo(n, a) {
  return new RegExp(`^[A-Za-z0-9+/]{${n}}${a}$`);
}
function ko(n) {
  return new RegExp(`^[A-Za-z0-9_-]{${n}}$`);
}
var fw = /^[0-9a-fA-F]{32}$/, mw = /* @__PURE__ */ zo(22, "=="), vw = /* @__PURE__ */ ko(22), pw = /^[0-9a-fA-F]{40}$/, hw = /* @__PURE__ */ zo(27, "="), gw = /* @__PURE__ */ ko(27), yw = /^[0-9a-fA-F]{64}$/, _w = /* @__PURE__ */ zo(43, "="), bw = /* @__PURE__ */ ko(43), Sw = /^[0-9a-fA-F]{96}$/, $w = /* @__PURE__ */ zo(64, ""), zw = /* @__PURE__ */ ko(64), kw = /^[0-9a-fA-F]{128}$/, ww = /* @__PURE__ */ zo(86, "=="), Tw = /* @__PURE__ */ ko(86), Ve = /* @__PURE__ */ z("$ZodCheck", (n, a) => {
  var o;
  n._zod ?? (n._zod = {}), n._zod.def = a, (o = n._zod).onattach ?? (o.onattach = []);
}), rS = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, tm = /* @__PURE__ */ z("$ZodCheckLessThan", (n, a) => {
  Ve.init(n, a);
  const o = rS[typeof a.value];
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
}), nm = /* @__PURE__ */ z("$ZodCheckGreaterThan", (n, a) => {
  Ve.init(n, a);
  const o = rS[typeof a.value];
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
}), oS = /* @__PURE__ */ z("$ZodCheckMultipleOf", (n, a) => {
  Ve.init(n, a), n._zod.onattach.push((o) => {
    var c;
    (c = o._zod.bag).multipleOf ?? (c.multipleOf = a.value);
  }), n._zod.check = (o) => {
    if (typeof o.value != typeof a.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof o.value == "bigint" ? o.value % a.value === BigInt(0) : rb(o.value, a.value) === 0) || o.issues.push({
      origin: typeof o.value,
      code: "not_multiple_of",
      divisor: a.value,
      input: o.value,
      inst: n,
      continue: !a.abort
    });
  };
}), lS = /* @__PURE__ */ z("$ZodCheckNumberFormat", (n, a) => {
  Ve.init(n, a), a.format = a.format || "float64";
  const o = a.format?.includes("int"), c = o ? "int" : "number", [i, u] = sb[a.format];
  n._zod.onattach.push((d) => {
    const m = d._zod.bag;
    m.format = a.format, m.minimum = i, m.maximum = u, o && (m.pattern = Fb);
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
}), uS = /* @__PURE__ */ z("$ZodCheckBigIntFormat", (n, a) => {
  Ve.init(n, a);
  const [o, c] = db[a.format];
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
}), cS = /* @__PURE__ */ z("$ZodCheckMaxSize", (n, a) => {
  var o;
  Ve.init(n, a), (o = n._zod.def).when ?? (o.when = (c) => {
    const i = c.value;
    return !Wi(i) && i.size !== void 0;
  }), n._zod.onattach.push((c) => {
    const i = c._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    a.maximum < i && (c._zod.bag.maximum = a.maximum);
  }), n._zod.check = (c) => {
    const i = c.value;
    i.size <= a.maximum || c.issues.push({
      origin: nc(i),
      code: "too_big",
      maximum: a.maximum,
      inclusive: !0,
      input: i,
      inst: n,
      continue: !a.abort
    });
  };
}), sS = /* @__PURE__ */ z("$ZodCheckMinSize", (n, a) => {
  var o;
  Ve.init(n, a), (o = n._zod.def).when ?? (o.when = (c) => {
    const i = c.value;
    return !Wi(i) && i.size !== void 0;
  }), n._zod.onattach.push((c) => {
    const i = c._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    a.minimum > i && (c._zod.bag.minimum = a.minimum);
  }), n._zod.check = (c) => {
    const i = c.value;
    i.size >= a.minimum || c.issues.push({
      origin: nc(i),
      code: "too_small",
      minimum: a.minimum,
      inclusive: !0,
      input: i,
      inst: n,
      continue: !a.abort
    });
  };
}), dS = /* @__PURE__ */ z("$ZodCheckSizeEquals", (n, a) => {
  var o;
  Ve.init(n, a), (o = n._zod.def).when ?? (o.when = (c) => {
    const i = c.value;
    return !Wi(i) && i.size !== void 0;
  }), n._zod.onattach.push((c) => {
    const i = c._zod.bag;
    i.minimum = a.size, i.maximum = a.size, i.size = a.size;
  }), n._zod.check = (c) => {
    const i = c.value, u = i.size;
    if (u === a.size) return;
    const d = u > a.size;
    c.issues.push({
      origin: nc(i),
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
}), fS = /* @__PURE__ */ z("$ZodCheckMaxLength", (n, a) => {
  var o;
  Ve.init(n, a), (o = n._zod.def).when ?? (o.when = (c) => {
    const i = c.value;
    return !Wi(i) && i.length !== void 0;
  }), n._zod.onattach.push((c) => {
    const i = c._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    a.maximum < i && (c._zod.bag.maximum = a.maximum);
  }), n._zod.check = (c) => {
    const i = c.value;
    if (i.length <= a.maximum) return;
    const u = ic(i);
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
}), mS = /* @__PURE__ */ z("$ZodCheckMinLength", (n, a) => {
  var o;
  Ve.init(n, a), (o = n._zod.def).when ?? (o.when = (c) => {
    const i = c.value;
    return !Wi(i) && i.length !== void 0;
  }), n._zod.onattach.push((c) => {
    const i = c._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    a.minimum > i && (c._zod.bag.minimum = a.minimum);
  }), n._zod.check = (c) => {
    const i = c.value;
    if (i.length >= a.minimum) return;
    const u = ic(i);
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
}), vS = /* @__PURE__ */ z("$ZodCheckLengthEquals", (n, a) => {
  var o;
  Ve.init(n, a), (o = n._zod.def).when ?? (o.when = (c) => {
    const i = c.value;
    return !Wi(i) && i.length !== void 0;
  }), n._zod.onattach.push((c) => {
    const i = c._zod.bag;
    i.minimum = a.length, i.maximum = a.length, i.length = a.length;
  }), n._zod.check = (c) => {
    const i = c.value, u = i.length;
    if (u === a.length) return;
    const d = ic(i), m = u > a.length;
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
}), wo = /* @__PURE__ */ z("$ZodCheckStringFormat", (n, a) => {
  var o, c;
  Ve.init(n, a), n._zod.onattach.push((i) => {
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
}), pS = /* @__PURE__ */ z("$ZodCheckRegex", (n, a) => {
  wo.init(n, a), n._zod.check = (o) => {
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
}), hS = /* @__PURE__ */ z("$ZodCheckLowerCase", (n, a) => {
  a.pattern ?? (a.pattern = nS), wo.init(n, a);
}), gS = /* @__PURE__ */ z("$ZodCheckUpperCase", (n, a) => {
  a.pattern ?? (a.pattern = iS), wo.init(n, a);
}), yS = /* @__PURE__ */ z("$ZodCheckIncludes", (n, a) => {
  Ve.init(n, a);
  const o = Gn(a.includes), c = new RegExp(typeof a.position == "number" ? `^.{${a.position}}${o}` : o);
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
}), _S = /* @__PURE__ */ z("$ZodCheckStartsWith", (n, a) => {
  Ve.init(n, a);
  const o = new RegExp(`^${Gn(a.prefix)}.*`);
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
}), bS = /* @__PURE__ */ z("$ZodCheckEndsWith", (n, a) => {
  Ve.init(n, a);
  const o = new RegExp(`.*${Gn(a.suffix)}$`);
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
function T_(n, a, o) {
  n.issues.length && a.issues.push(...dn(o, n.issues));
}
var SS = /* @__PURE__ */ z("$ZodCheckProperty", (n, a) => {
  Ve.init(n, a), n._zod.check = (o) => {
    const c = a.schema._zod.run({
      value: o.value[a.property],
      issues: []
    }, {});
    if (c instanceof Promise) return c.then((i) => T_(i, o, a.property));
    T_(c, o, a.property);
  };
}), $S = /* @__PURE__ */ z("$ZodCheckMimeType", (n, a) => {
  Ve.init(n, a);
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
}), zS = /* @__PURE__ */ z("$ZodCheckOverwrite", (n, a) => {
  Ve.init(n, a), n._zod.check = (o) => {
    o.value = a.tx(o.value);
  };
}), kS = class {
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
}, wS = {
  major: 4,
  minor: 4,
  patch: 3
}, ae = /* @__PURE__ */ z("$ZodType", (n, a) => {
  var o;
  n ?? (n = {}), n._zod.def = a, n._zod.bag = n._zod.bag || {}, n._zod.version = wS;
  const c = [...n._zod.def.checks ?? []];
  n._zod.traits.has("$ZodCheck") && c.unshift(n);
  for (const i of c) for (const u of i._zod.onattach) u(n);
  if (c.length === 0)
    (o = n._zod).deferred ?? (o.deferred = []), n._zod.deferred?.push(() => {
      n._zod.run = n._zod.parse;
    });
  else {
    const i = (d, m, y) => {
      let h = Gi(d), g;
      for (const E of m) {
        if (E._zod.def.when) {
          if (_b(d) || !E._zod.def.when(d)) continue;
        } else if (h) continue;
        const k = d.issues.length, M = E._zod.check(d);
        if (M instanceof Promise && y?.async === !1) throw new Yi();
        if (g || M instanceof Promise) g = (g ?? Promise.resolve()).then(async () => {
          await M, d.issues.length !== k && (h || (h = Gi(d, k)));
        });
        else {
          if (d.issues.length === k) continue;
          h || (h = Gi(d, k));
        }
      }
      return g ? g.then(() => d) : d;
    }, u = (d, m, y) => {
      if (Gi(d))
        return d.aborted = !0, d;
      const h = i(m, c, y);
      if (h instanceof Promise) {
        if (y.async === !1) throw new Yi();
        return h.then((g) => n._zod.parse(g, y));
      }
      return n._zod.parse(h, y);
    };
    n._zod.run = (d, m) => {
      if (m.skipChecks) return n._zod.parse(d, m);
      if (m.direction === "backward") {
        const h = n._zod.parse({
          value: d.value,
          issues: []
        }, {
          ...m,
          skipChecks: !0
        });
        return h instanceof Promise ? h.then((g) => u(g, d, m)) : u(h, d, m);
      }
      const y = n._zod.parse(d, m);
      if (y instanceof Promise) {
        if (m.async === !1) throw new Yi();
        return y.then((h) => i(h, c, m));
      }
      return i(y, c, m);
    };
  }
  se(n, "~standard", () => ({
    validate: (i) => {
      try {
        const u = Bf(n, i);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return kb(n, i).then((d) => d.success ? { value: d.data } : { issues: d.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), To = /* @__PURE__ */ z("$ZodString", (n, a) => {
  ae.init(n, a), n._zod.pattern = [...n?._zod.bag?.patterns ?? []].pop() ?? Xb(n._zod.bag), n._zod.parse = (o, c) => {
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
}), Le = /* @__PURE__ */ z("$ZodStringFormat", (n, a) => {
  wo.init(n, a), To.init(n, a);
}), TS = /* @__PURE__ */ z("$ZodGUID", (n, a) => {
  a.pattern ?? (a.pattern = Ab), Le.init(n, a);
}), xS = /* @__PURE__ */ z("$ZodUUID", (n, a) => {
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
    a.pattern ?? (a.pattern = Pa(o));
  } else a.pattern ?? (a.pattern = Pa());
  Le.init(n, a);
}), ES = /* @__PURE__ */ z("$ZodEmail", (n, a) => {
  a.pattern ?? (a.pattern = jb), Le.init(n, a);
}), OS = /* @__PURE__ */ z("$ZodURL", (n, a) => {
  Le.init(n, a), n._zod.check = (o) => {
    try {
      const c = o.value.trim();
      if (!a.normalize && a.protocol?.source === Wf.source && !/^https?:\/\//i.test(c)) {
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
}), US = /* @__PURE__ */ z("$ZodEmoji", (n, a) => {
  a.pattern ?? (a.pattern = Nb()), Le.init(n, a);
}), DS = /* @__PURE__ */ z("$ZodNanoID", (n, a) => {
  a.pattern ?? (a.pattern = Ub), Le.init(n, a);
}), AS = /* @__PURE__ */ z("$ZodCUID", (n, a) => {
  a.pattern ?? (a.pattern = wb), Le.init(n, a);
}), jS = /* @__PURE__ */ z("$ZodCUID2", (n, a) => {
  a.pattern ?? (a.pattern = Tb), Le.init(n, a);
}), ZS = /* @__PURE__ */ z("$ZodULID", (n, a) => {
  a.pattern ?? (a.pattern = xb), Le.init(n, a);
}), NS = /* @__PURE__ */ z("$ZodXID", (n, a) => {
  a.pattern ?? (a.pattern = Eb), Le.init(n, a);
}), IS = /* @__PURE__ */ z("$ZodKSUID", (n, a) => {
  a.pattern ?? (a.pattern = Ob), Le.init(n, a);
}), CS = /* @__PURE__ */ z("$ZodISODateTime", (n, a) => {
  a.pattern ?? (a.pattern = Qb(a)), Le.init(n, a);
}), RS = /* @__PURE__ */ z("$ZodISODate", (n, a) => {
  a.pattern ?? (a.pattern = Gb), Le.init(n, a);
}), MS = /* @__PURE__ */ z("$ZodISOTime", (n, a) => {
  a.pattern ?? (a.pattern = Vb(a)), Le.init(n, a);
}), qS = /* @__PURE__ */ z("$ZodISODuration", (n, a) => {
  a.pattern ?? (a.pattern = Db), Le.init(n, a);
}), HS = /* @__PURE__ */ z("$ZodIPv4", (n, a) => {
  a.pattern ?? (a.pattern = Ib), Le.init(n, a), n._zod.bag.format = "ipv4";
}), LS = /* @__PURE__ */ z("$ZodIPv6", (n, a) => {
  a.pattern ?? (a.pattern = Cb), Le.init(n, a), n._zod.bag.format = "ipv6", n._zod.check = (o) => {
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
}), BS = /* @__PURE__ */ z("$ZodMAC", (n, a) => {
  a.pattern ?? (a.pattern = Rb(a.delimiter)), Le.init(n, a), n._zod.bag.format = "mac";
}), PS = /* @__PURE__ */ z("$ZodCIDRv4", (n, a) => {
  a.pattern ?? (a.pattern = Mb), Le.init(n, a);
}), JS = /* @__PURE__ */ z("$ZodCIDRv6", (n, a) => {
  a.pattern ?? (a.pattern = qb), Le.init(n, a), n._zod.check = (o) => {
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
function im(n) {
  if (n === "") return !0;
  if (/\s/.test(n) || n.length % 4 !== 0) return !1;
  try {
    return atob(n), !0;
  } catch {
    return !1;
  }
}
var GS = /* @__PURE__ */ z("$ZodBase64", (n, a) => {
  a.pattern ?? (a.pattern = Hb), Le.init(n, a), n._zod.bag.contentEncoding = "base64", n._zod.check = (o) => {
    im(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64",
      input: o.value,
      inst: n,
      continue: !a.abort
    });
  };
});
function YS(n) {
  if (!Ff.test(n)) return !1;
  const a = n.replace(/[-_]/g, (o) => o === "-" ? "+" : "/");
  return im(a.padEnd(Math.ceil(a.length / 4) * 4, "="));
}
var VS = /* @__PURE__ */ z("$ZodBase64URL", (n, a) => {
  a.pattern ?? (a.pattern = Ff), Le.init(n, a), n._zod.bag.contentEncoding = "base64url", n._zod.check = (o) => {
    YS(o.value) || o.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: o.value,
      inst: n,
      continue: !a.abort
    });
  };
}), QS = /* @__PURE__ */ z("$ZodE164", (n, a) => {
  a.pattern ?? (a.pattern = Pb), Le.init(n, a);
});
function XS(n, a = null) {
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
var KS = /* @__PURE__ */ z("$ZodJWT", (n, a) => {
  Le.init(n, a), n._zod.check = (o) => {
    XS(o.value, a.alg) || o.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: o.value,
      inst: n,
      continue: !a.abort
    });
  };
}), FS = /* @__PURE__ */ z("$ZodCustomStringFormat", (n, a) => {
  Le.init(n, a), n._zod.check = (o) => {
    a.fn(o.value) || o.issues.push({
      code: "invalid_format",
      format: a.format,
      input: o.value,
      inst: n,
      continue: !a.abort
    });
  };
}), am = /* @__PURE__ */ z("$ZodNumber", (n, a) => {
  ae.init(n, a), n._zod.pattern = n._zod.bag.pattern ?? em, n._zod.parse = (o, c) => {
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
}), WS = /* @__PURE__ */ z("$ZodNumberFormat", (n, a) => {
  lS.init(n, a), am.init(n, a);
}), rm = /* @__PURE__ */ z("$ZodBoolean", (n, a) => {
  ae.init(n, a), n._zod.pattern = Wb, n._zod.parse = (o, c) => {
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
}), om = /* @__PURE__ */ z("$ZodBigInt", (n, a) => {
  ae.init(n, a), n._zod.pattern = Kb, n._zod.parse = (o, c) => {
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
}), e$ = /* @__PURE__ */ z("$ZodBigIntFormat", (n, a) => {
  uS.init(n, a), om.init(n, a);
}), t$ = /* @__PURE__ */ z("$ZodSymbol", (n, a) => {
  ae.init(n, a), n._zod.parse = (o, c) => {
    const i = o.value;
    return typeof i == "symbol" || o.issues.push({
      expected: "symbol",
      code: "invalid_type",
      input: i,
      inst: n
    }), o;
  };
}), n$ = /* @__PURE__ */ z("$ZodUndefined", (n, a) => {
  ae.init(n, a), n._zod.pattern = tS, n._zod.values = /* @__PURE__ */ new Set([void 0]), n._zod.parse = (o, c) => {
    const i = o.value;
    return typeof i > "u" || o.issues.push({
      expected: "undefined",
      code: "invalid_type",
      input: i,
      inst: n
    }), o;
  };
}), i$ = /* @__PURE__ */ z("$ZodNull", (n, a) => {
  ae.init(n, a), n._zod.pattern = eS, n._zod.values = /* @__PURE__ */ new Set([null]), n._zod.parse = (o, c) => {
    const i = o.value;
    return i === null || o.issues.push({
      expected: "null",
      code: "invalid_type",
      input: i,
      inst: n
    }), o;
  };
}), a$ = /* @__PURE__ */ z("$ZodAny", (n, a) => {
  ae.init(n, a), n._zod.parse = (o) => o;
}), r$ = /* @__PURE__ */ z("$ZodUnknown", (n, a) => {
  ae.init(n, a), n._zod.parse = (o) => o;
}), o$ = /* @__PURE__ */ z("$ZodNever", (n, a) => {
  ae.init(n, a), n._zod.parse = (o, c) => (o.issues.push({
    expected: "never",
    code: "invalid_type",
    input: o.value,
    inst: n
  }), o);
}), l$ = /* @__PURE__ */ z("$ZodVoid", (n, a) => {
  ae.init(n, a), n._zod.parse = (o, c) => {
    const i = o.value;
    return typeof i > "u" || o.issues.push({
      expected: "void",
      code: "invalid_type",
      input: i,
      inst: n
    }), o;
  };
}), u$ = /* @__PURE__ */ z("$ZodDate", (n, a) => {
  ae.init(n, a), n._zod.parse = (o, c) => {
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
function x_(n, a, o) {
  n.issues.length && a.issues.push(...dn(o, n.issues)), a.value[o] = n.value;
}
var c$ = /* @__PURE__ */ z("$ZodArray", (n, a) => {
  ae.init(n, a), n._zod.parse = (o, c) => {
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
      y instanceof Promise ? u.push(y.then((h) => x_(h, o, d))) : x_(y, o, d);
    }
    return u.length ? Promise.all(u).then(() => o) : o;
  };
});
function Vu(n, a, o, c, i, u) {
  const d = o in c;
  if (n.issues.length) {
    if (i && u && !d) return;
    a.issues.push(...dn(o, n.issues));
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
function s$(n) {
  const a = Object.keys(n.shape);
  for (const c of a) if (!n.shape?.[c]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${c}": expected a Zod schema`);
  const o = cb(n.shape);
  return {
    ...n,
    keys: a,
    keySet: new Set(a),
    numKeys: a.length,
    optionalKeys: new Set(o)
  };
}
function d$(n, a, o, c, i, u) {
  const d = [], m = i.keySet, y = i.catchall._zod, h = y.def.type, g = y.optin === "optional", E = y.optout === "optional";
  for (const k in a) {
    if (k === "__proto__" || m.has(k)) continue;
    if (h === "never") {
      d.push(k);
      continue;
    }
    const M = y.run({
      value: a[k],
      issues: []
    }, c);
    M instanceof Promise ? n.push(M.then((F) => Vu(F, o, k, a, g, E))) : Vu(M, o, k, a, g, E);
  }
  return d.length && o.issues.push({
    code: "unrecognized_keys",
    keys: d,
    input: a,
    inst: u
  }), n.length ? Promise.all(n).then(() => o) : o;
}
var f$ = /* @__PURE__ */ z("$ZodObject", (n, a) => {
  if (ae.init(n, a), !Object.getOwnPropertyDescriptor(a, "shape")?.get) {
    const d = a.shape;
    Object.defineProperty(a, "shape", { get: () => {
      const m = { ...d };
      return Object.defineProperty(a, "shape", { value: m }), m;
    } });
  }
  const o = yo(() => s$(a));
  se(n._zod, "propValues", () => {
    const d = a.shape, m = {};
    for (const y in d) {
      const h = d[y]._zod;
      if (h.values) {
        m[y] ?? (m[y] = /* @__PURE__ */ new Set());
        for (const g of h.values) m[y].add(g);
      }
    }
    return m;
  });
  const c = La, i = a.catchall;
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
    const h = [], g = u.shape;
    for (const E of u.keys) {
      const k = g[E], M = k._zod.optin === "optional", F = k._zod.optout === "optional", he = k._zod.run({
        value: y[E],
        issues: []
      }, m);
      he instanceof Promise ? h.push(he.then((Qe) => Vu(Qe, d, E, y, M, F))) : Vu(he, d, E, y, M, F);
    }
    return i ? d$(h, y, d, m, o.value, n) : h.length ? Promise.all(h).then(() => d) : d;
  };
}), m$ = /* @__PURE__ */ z("$ZodObjectJIT", (n, a) => {
  f$.init(n, a);
  const o = n._zod.parse, c = yo(() => s$(a)), i = (k) => {
    const M = new kS([
      "shape",
      "payload",
      "ctx"
    ]), F = c.value, he = (Be) => {
      const ie = Of(Be);
      return `shape[${ie}]._zod.run({ value: input[${ie}], issues: [] }, ctx)`;
    };
    M.write("const input = payload.value;");
    const Qe = /* @__PURE__ */ Object.create(null);
    let Ee = 0;
    for (const Be of F.keys) Qe[Be] = `key_${Ee++}`;
    M.write("const newResult = {};");
    for (const Be of F.keys) {
      const ie = Qe[Be], ke = Of(Be), st = k[Be], G = st?._zod?.optin === "optional", V = st?._zod?.optout === "optional";
      M.write(`const ${ie} = ${he(Be)};`), G && V ? M.write(`
        if (${ie}.issues.length) {
          if (${ke} in input) {
            payload.issues = payload.issues.concat(${ie}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${ke}, ...iss.path] : [${ke}]
            })));
          }
        }
        
        if (${ie}.value === undefined) {
          if (${ke} in input) {
            newResult[${ke}] = undefined;
          }
        } else {
          newResult[${ke}] = ${ie}.value;
        }
        
      `) : G ? M.write(`
        if (${ie}.issues.length) {
          payload.issues = payload.issues.concat(${ie}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${ke}, ...iss.path] : [${ke}]
          })));
        }
        
        if (${ie}.value === undefined) {
          if (${ke} in input) {
            newResult[${ke}] = undefined;
          }
        } else {
          newResult[${ke}] = ${ie}.value;
        }
        
      `) : M.write(`
        const ${ie}_present = ${ke} in input;
        if (${ie}.issues.length) {
          payload.issues = payload.issues.concat(${ie}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${ke}, ...iss.path] : [${ke}]
          })));
        }
        if (!${ie}_present && !${ie}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${ke}]
          });
        }

        if (${ie}_present) {
          if (${ie}.value === undefined) {
            newResult[${ke}] = undefined;
          } else {
            newResult[${ke}] = ${ie}.value;
          }
        }

      `);
    }
    M.write("payload.value = newResult;"), M.write("return payload;");
    const Oe = M.compile();
    return (Be, ie) => Oe(k, Be, ie);
  };
  let u;
  const d = La, m = !mo.jitless, h = m && lb.value, g = a.catchall;
  let E;
  n._zod.parse = (k, M) => {
    E ?? (E = c.value);
    const F = k.value;
    return d(F) ? m && h && M?.async === !1 && M.jitless !== !0 ? (u || (u = i(a.shape)), k = u(k, M), g ? d$([], F, k, M, E, n) : k) : o(k, M) : (k.issues.push({
      expected: "object",
      code: "invalid_type",
      input: F,
      inst: n
    }), k);
  };
});
function E_(n, a, o, c) {
  for (const u of n) if (u.issues.length === 0)
    return a.value = u.value, a;
  const i = n.filter((u) => !Gi(u));
  return i.length === 1 ? (a.value = i[0].value, i[0]) : (a.issues.push({
    code: "invalid_union",
    input: a.value,
    inst: o,
    errors: n.map((u) => u.issues.map((d) => Vt(d, c, ct())))
  }), a);
}
var lc = /* @__PURE__ */ z("$ZodUnion", (n, a) => {
  ae.init(n, a), se(n._zod, "optin", () => a.options.some((c) => c._zod.optin === "optional") ? "optional" : void 0), se(n._zod, "optout", () => a.options.some((c) => c._zod.optout === "optional") ? "optional" : void 0), se(n._zod, "values", () => {
    if (a.options.every((c) => c._zod.values)) return new Set(a.options.flatMap((c) => Array.from(c._zod.values)));
  }), se(n._zod, "pattern", () => {
    if (a.options.every((c) => c._zod.pattern)) {
      const c = a.options.map((i) => i._zod.pattern);
      return new RegExp(`^(${c.map((i) => ec(i.source)).join("|")})$`);
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
    return u ? Promise.all(d).then((m) => E_(m, c, n, i)) : E_(d, c, n, i);
  };
});
function O_(n, a, o, c) {
  const i = n.filter((u) => u.issues.length === 0);
  return i.length === 1 ? (a.value = i[0].value, a) : (i.length === 0 ? a.issues.push({
    code: "invalid_union",
    input: a.value,
    inst: o,
    errors: n.map((u) => u.issues.map((d) => Vt(d, c, ct())))
  }) : a.issues.push({
    code: "invalid_union",
    input: a.value,
    inst: o,
    errors: [],
    inclusive: !1
  }), a);
}
var v$ = /* @__PURE__ */ z("$ZodXor", (n, a) => {
  lc.init(n, a), a.inclusive = !1;
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
    return u ? Promise.all(d).then((m) => O_(m, c, n, i)) : O_(d, c, n, i);
  };
}), p$ = /* @__PURE__ */ z("$ZodDiscriminatedUnion", (n, a) => {
  a.inclusive = !1, lc.init(n, a);
  const o = n._zod.parse;
  se(n._zod, "propValues", () => {
    const i = {};
    for (const u of a.options) {
      const d = u._zod.propValues;
      if (!d || Object.keys(d).length === 0) throw new Error(`Invalid discriminated union option at index "${a.options.indexOf(u)}"`);
      for (const [m, y] of Object.entries(d)) {
        i[m] || (i[m] = /* @__PURE__ */ new Set());
        for (const h of y) i[m].add(h);
      }
    }
    return i;
  });
  const c = yo(() => {
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
    if (!La(d))
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
}), h$ = /* @__PURE__ */ z("$ZodIntersection", (n, a) => {
  ae.init(n, a), n._zod.parse = (o, c) => {
    const i = o.value, u = a.left._zod.run({
      value: i,
      issues: []
    }, c), d = a.right._zod.run({
      value: i,
      issues: []
    }, c);
    return u instanceof Promise || d instanceof Promise ? Promise.all([u, d]).then(([m, y]) => U_(o, m, y)) : U_(o, u, d);
  };
});
function Af(n, a) {
  if (n === a) return {
    valid: !0,
    data: n
  };
  if (n instanceof Date && a instanceof Date && +n == +a) return {
    valid: !0,
    data: n
  };
  if (Vi(n) && Vi(a)) {
    const o = Object.keys(a), c = Object.keys(n).filter((u) => o.indexOf(u) !== -1), i = {
      ...n,
      ...a
    };
    for (const u of c) {
      const d = Af(n[u], a[u]);
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
      const i = n[c], u = a[c], d = Af(i, u);
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
function U_(n, a, o) {
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
  }), Gi(n)) return n;
  const d = Af(a.value, o.value);
  if (!d.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(d.mergeErrorPath)}`);
  return n.value = d.data, n;
}
var lm = /* @__PURE__ */ z("$ZodTuple", (n, a) => {
  ae.init(n, a);
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
    const d = [], m = D_(o, "optin"), y = D_(o, "optout");
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
    const h = new Array(o.length);
    for (let g = 0; g < o.length; g++) {
      const E = o[g]._zod.run({
        value: u[g],
        issues: []
      }, i);
      E instanceof Promise ? d.push(E.then((k) => {
        h[g] = k;
      })) : h[g] = E;
    }
    if (a.rest) {
      let g = o.length - 1;
      const E = u.slice(o.length);
      for (const k of E) {
        g++;
        const M = a.rest._zod.run({
          value: k,
          issues: []
        }, i);
        M instanceof Promise ? d.push(M.then((F) => A_(F, c, g))) : A_(M, c, g);
      }
    }
    return d.length ? Promise.all(d).then(() => j_(h, c, o, u, y)) : j_(h, c, o, u, y);
  };
});
function D_(n, a) {
  for (let o = n.length - 1; o >= 0; o--) if (n[o]._zod[a] !== "optional") return o + 1;
  return 0;
}
function A_(n, a, o) {
  n.issues.length && a.issues.push(...dn(o, n.issues)), a.value[o] = n.value;
}
function j_(n, a, o, c, i) {
  for (let u = 0; u < o.length; u++) {
    const d = n[u], m = u < c.length;
    if (d.issues.length) {
      if (!m && u >= i) {
        a.value.length = u;
        break;
      }
      a.issues.push(...dn(u, d.issues));
    }
    a.value[u] = d.value;
  }
  for (let u = a.value.length - 1; u >= c.length && (o[u]._zod.optout === "optional" && a.value[u] === void 0); u--) a.value.length = u;
  return a;
}
var g$ = /* @__PURE__ */ z("$ZodRecord", (n, a) => {
  ae.init(n, a), n._zod.parse = (o, c) => {
    const i = o.value;
    if (!Vi(i))
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
      for (const h of d) if (typeof h == "string" || typeof h == "number" || typeof h == "symbol") {
        m.add(typeof h == "number" ? h.toString() : h);
        const g = a.keyType._zod.run({
          value: h,
          issues: []
        }, c);
        if (g instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
        if (g.issues.length) {
          o.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: g.issues.map((M) => Vt(M, c, ct())),
            input: h,
            path: [h],
            inst: n
          });
          continue;
        }
        const E = g.value, k = a.valueType._zod.run({
          value: i[h],
          issues: []
        }, c);
        k instanceof Promise ? u.push(k.then((M) => {
          M.issues.length && o.issues.push(...dn(h, M.issues)), o.value[E] = M.value;
        })) : (k.issues.length && o.issues.push(...dn(h, k.issues)), o.value[E] = k.value);
      }
      let y;
      for (const h in i) m.has(h) || (y = y ?? [], y.push(h));
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
        if (typeof m == "string" && em.test(m) && y.issues.length) {
          const g = a.keyType._zod.run({
            value: Number(m),
            issues: []
          }, c);
          if (g instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
          g.issues.length === 0 && (y = g);
        }
        if (y.issues.length) {
          a.mode === "loose" ? o.value[m] = i[m] : o.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: y.issues.map((g) => Vt(g, c, ct())),
            input: m,
            path: [m],
            inst: n
          });
          continue;
        }
        const h = a.valueType._zod.run({
          value: i[m],
          issues: []
        }, c);
        h instanceof Promise ? u.push(h.then((g) => {
          g.issues.length && o.issues.push(...dn(m, g.issues)), o.value[y.value] = g.value;
        })) : (h.issues.length && o.issues.push(...dn(m, h.issues)), o.value[y.value] = h.value);
      }
    }
    return u.length ? Promise.all(u).then(() => o) : o;
  };
}), y$ = /* @__PURE__ */ z("$ZodMap", (n, a) => {
  ae.init(n, a), n._zod.parse = (o, c) => {
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
      }, c), h = a.valueType._zod.run({
        value: m,
        issues: []
      }, c);
      y instanceof Promise || h instanceof Promise ? u.push(Promise.all([y, h]).then(([g, E]) => {
        Z_(g, E, o, d, i, n, c);
      })) : Z_(y, h, o, d, i, n, c);
    }
    return u.length ? Promise.all(u).then(() => o) : o;
  };
});
function Z_(n, a, o, c, i, u, d) {
  n.issues.length && (Yu.has(typeof c) ? o.issues.push(...dn(c, n.issues)) : o.issues.push({
    code: "invalid_key",
    origin: "map",
    input: i,
    inst: u,
    issues: n.issues.map((m) => Vt(m, d, ct()))
  })), a.issues.length && (Yu.has(typeof c) ? o.issues.push(...dn(c, a.issues)) : o.issues.push({
    origin: "map",
    code: "invalid_element",
    input: i,
    inst: u,
    key: c,
    issues: a.issues.map((m) => Vt(m, d, ct()))
  })), o.value.set(n.value, a.value);
}
var _$ = /* @__PURE__ */ z("$ZodSet", (n, a) => {
  ae.init(n, a), n._zod.parse = (o, c) => {
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
      m instanceof Promise ? u.push(m.then((y) => N_(y, o))) : N_(m, o);
    }
    return u.length ? Promise.all(u).then(() => o) : o;
  };
});
function N_(n, a) {
  n.issues.length && a.issues.push(...n.issues), a.value.add(n.value);
}
var b$ = /* @__PURE__ */ z("$ZodEnum", (n, a) => {
  ae.init(n, a);
  const o = Rf(a.entries), c = new Set(o);
  n._zod.values = c, n._zod.pattern = new RegExp(`^(${o.filter((i) => Yu.has(typeof i)).map((i) => typeof i == "string" ? Gn(i) : i.toString()).join("|")})$`), n._zod.parse = (i, u) => {
    const d = i.value;
    return c.has(d) || i.issues.push({
      code: "invalid_value",
      values: o,
      input: d,
      inst: n
    }), i;
  };
}), S$ = /* @__PURE__ */ z("$ZodLiteral", (n, a) => {
  if (ae.init(n, a), a.values.length === 0) throw new Error("Cannot create literal schema with no valid values");
  const o = new Set(a.values);
  n._zod.values = o, n._zod.pattern = new RegExp(`^(${a.values.map((c) => typeof c == "string" ? Gn(c) : c ? Gn(c.toString()) : String(c)).join("|")})$`), n._zod.parse = (c, i) => {
    const u = c.value;
    return o.has(u) || c.issues.push({
      code: "invalid_value",
      values: a.values,
      input: u,
      inst: n
    }), c;
  };
}), $$ = /* @__PURE__ */ z("$ZodFile", (n, a) => {
  ae.init(n, a), n._zod.parse = (o, c) => {
    const i = o.value;
    return i instanceof File || o.issues.push({
      expected: "file",
      code: "invalid_type",
      input: i,
      inst: n
    }), o;
  };
}), z$ = /* @__PURE__ */ z("$ZodTransform", (n, a) => {
  ae.init(n, a), n._zod.optin = "optional", n._zod.parse = (o, c) => {
    if (c.direction === "backward") throw new Wu(n.constructor.name);
    const i = a.transform(o.value, o);
    if (c.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((u) => (o.value = u, o.fallback = !0, o));
    if (i instanceof Promise) throw new Yi();
    return o.value = i, o.fallback = !0, o;
  };
});
function I_(n, a) {
  return a === void 0 && (n.issues.length || n.fallback) ? {
    issues: [],
    value: void 0
  } : n;
}
var um = /* @__PURE__ */ z("$ZodOptional", (n, a) => {
  ae.init(n, a), n._zod.optin = "optional", n._zod.optout = "optional", se(n._zod, "values", () => a.innerType._zod.values ? /* @__PURE__ */ new Set([...a.innerType._zod.values, void 0]) : void 0), se(n._zod, "pattern", () => {
    const o = a.innerType._zod.pattern;
    return o ? new RegExp(`^(${ec(o.source)})?$`) : void 0;
  }), n._zod.parse = (o, c) => {
    if (a.innerType._zod.optin === "optional") {
      const i = o.value, u = a.innerType._zod.run(o, c);
      return u instanceof Promise ? u.then((d) => I_(d, i)) : I_(u, i);
    }
    return o.value === void 0 ? o : a.innerType._zod.run(o, c);
  };
}), k$ = /* @__PURE__ */ z("$ZodExactOptional", (n, a) => {
  um.init(n, a), se(n._zod, "values", () => a.innerType._zod.values), se(n._zod, "pattern", () => a.innerType._zod.pattern), n._zod.parse = (o, c) => a.innerType._zod.run(o, c);
}), w$ = /* @__PURE__ */ z("$ZodNullable", (n, a) => {
  ae.init(n, a), se(n._zod, "optin", () => a.innerType._zod.optin), se(n._zod, "optout", () => a.innerType._zod.optout), se(n._zod, "pattern", () => {
    const o = a.innerType._zod.pattern;
    return o ? new RegExp(`^(${ec(o.source)}|null)$`) : void 0;
  }), se(n._zod, "values", () => a.innerType._zod.values ? /* @__PURE__ */ new Set([...a.innerType._zod.values, null]) : void 0), n._zod.parse = (o, c) => o.value === null ? o : a.innerType._zod.run(o, c);
}), T$ = /* @__PURE__ */ z("$ZodDefault", (n, a) => {
  ae.init(n, a), n._zod.optin = "optional", se(n._zod, "values", () => a.innerType._zod.values), n._zod.parse = (o, c) => {
    if (c.direction === "backward") return a.innerType._zod.run(o, c);
    if (o.value === void 0)
      return o.value = a.defaultValue, o;
    const i = a.innerType._zod.run(o, c);
    return i instanceof Promise ? i.then((u) => C_(u, a)) : C_(i, a);
  };
});
function C_(n, a) {
  return n.value === void 0 && (n.value = a.defaultValue), n;
}
var x$ = /* @__PURE__ */ z("$ZodPrefault", (n, a) => {
  ae.init(n, a), n._zod.optin = "optional", se(n._zod, "values", () => a.innerType._zod.values), n._zod.parse = (o, c) => (c.direction === "backward" || o.value === void 0 && (o.value = a.defaultValue), a.innerType._zod.run(o, c));
}), E$ = /* @__PURE__ */ z("$ZodNonOptional", (n, a) => {
  ae.init(n, a), se(n._zod, "values", () => {
    const o = a.innerType._zod.values;
    return o ? new Set([...o].filter((c) => c !== void 0)) : void 0;
  }), n._zod.parse = (o, c) => {
    const i = a.innerType._zod.run(o, c);
    return i instanceof Promise ? i.then((u) => R_(u, n)) : R_(i, n);
  };
});
function R_(n, a) {
  return !n.issues.length && n.value === void 0 && n.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: n.value,
    inst: a
  }), n;
}
var O$ = /* @__PURE__ */ z("$ZodSuccess", (n, a) => {
  ae.init(n, a), n._zod.parse = (o, c) => {
    if (c.direction === "backward") throw new Wu("ZodSuccess");
    const i = a.innerType._zod.run(o, c);
    return i instanceof Promise ? i.then((u) => (o.value = u.issues.length === 0, o)) : (o.value = i.issues.length === 0, o);
  };
}), U$ = /* @__PURE__ */ z("$ZodCatch", (n, a) => {
  ae.init(n, a), n._zod.optin = "optional", se(n._zod, "optout", () => a.innerType._zod.optout), se(n._zod, "values", () => a.innerType._zod.values), n._zod.parse = (o, c) => {
    if (c.direction === "backward") return a.innerType._zod.run(o, c);
    const i = a.innerType._zod.run(o, c);
    return i instanceof Promise ? i.then((u) => (o.value = u.value, u.issues.length && (o.value = a.catchValue({
      ...o,
      error: { issues: u.issues.map((d) => Vt(d, c, ct())) },
      input: o.value
    }), o.issues = [], o.fallback = !0), o)) : (o.value = i.value, i.issues.length && (o.value = a.catchValue({
      ...o,
      error: { issues: i.issues.map((u) => Vt(u, c, ct())) },
      input: o.value
    }), o.issues = [], o.fallback = !0), o);
  };
}), D$ = /* @__PURE__ */ z("$ZodNaN", (n, a) => {
  ae.init(n, a), n._zod.parse = (o, c) => ((typeof o.value != "number" || !Number.isNaN(o.value)) && o.issues.push({
    input: o.value,
    inst: n,
    expected: "nan",
    code: "invalid_type"
  }), o);
}), cm = /* @__PURE__ */ z("$ZodPipe", (n, a) => {
  ae.init(n, a), se(n._zod, "values", () => a.in._zod.values), se(n._zod, "optin", () => a.in._zod.optin), se(n._zod, "optout", () => a.out._zod.optout), se(n._zod, "propValues", () => a.in._zod.propValues), n._zod.parse = (o, c) => {
    if (c.direction === "backward") {
      const u = a.out._zod.run(o, c);
      return u instanceof Promise ? u.then((d) => Ru(d, a.in, c)) : Ru(u, a.in, c);
    }
    const i = a.in._zod.run(o, c);
    return i instanceof Promise ? i.then((u) => Ru(u, a.out, c)) : Ru(i, a.out, c);
  };
});
function Ru(n, a, o) {
  return n.issues.length ? (n.aborted = !0, n) : a._zod.run({
    value: n.value,
    issues: n.issues,
    fallback: n.fallback
  }, o);
}
var sm = /* @__PURE__ */ z("$ZodCodec", (n, a) => {
  ae.init(n, a), se(n._zod, "values", () => a.in._zod.values), se(n._zod, "optin", () => a.in._zod.optin), se(n._zod, "optout", () => a.out._zod.optout), se(n._zod, "propValues", () => a.in._zod.propValues), n._zod.parse = (o, c) => {
    if ((c.direction || "forward") === "forward") {
      const i = a.in._zod.run(o, c);
      return i instanceof Promise ? i.then((u) => Mu(u, a, c)) : Mu(i, a, c);
    } else {
      const i = a.out._zod.run(o, c);
      return i instanceof Promise ? i.then((u) => Mu(u, a, c)) : Mu(i, a, c);
    }
  };
});
function Mu(n, a, o) {
  if (n.issues.length)
    return n.aborted = !0, n;
  if ((o.direction || "forward") === "forward") {
    const c = a.transform(n.value, n);
    return c instanceof Promise ? c.then((i) => qu(n, i, a.out, o)) : qu(n, c, a.out, o);
  } else {
    const c = a.reverseTransform(n.value, n);
    return c instanceof Promise ? c.then((i) => qu(n, i, a.in, o)) : qu(n, c, a.in, o);
  }
}
function qu(n, a, o, c) {
  return n.issues.length ? (n.aborted = !0, n) : o._zod.run({
    value: a,
    issues: n.issues
  }, c);
}
var A$ = /* @__PURE__ */ z("$ZodPreprocess", (n, a) => {
  cm.init(n, a);
}), j$ = /* @__PURE__ */ z("$ZodReadonly", (n, a) => {
  ae.init(n, a), se(n._zod, "propValues", () => a.innerType._zod.propValues), se(n._zod, "values", () => a.innerType._zod.values), se(n._zod, "optin", () => a.innerType?._zod?.optin), se(n._zod, "optout", () => a.innerType?._zod?.optout), n._zod.parse = (o, c) => {
    if (c.direction === "backward") return a.innerType._zod.run(o, c);
    const i = a.innerType._zod.run(o, c);
    return i instanceof Promise ? i.then(M_) : M_(i);
  };
});
function M_(n) {
  return n.value = Object.freeze(n.value), n;
}
var Z$ = /* @__PURE__ */ z("$ZodTemplateLiteral", (n, a) => {
  ae.init(n, a);
  const o = [];
  for (const c of a.parts) if (typeof c == "object" && c !== null) {
    if (!c._zod.pattern) throw new Error(`Invalid template literal part, no pattern found: ${[...c._zod.traits].shift()}`);
    const i = c._zod.pattern instanceof RegExp ? c._zod.pattern.source : c._zod.pattern;
    if (!i) throw new Error(`Invalid template literal part: ${c._zod.traits}`);
    const u = i.startsWith("^") ? 1 : 0, d = i.endsWith("$") ? i.length - 1 : i.length;
    o.push(i.slice(u, d));
  } else if (c === null || ub.has(typeof c)) o.push(Gn(`${c}`));
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
}), N$ = /* @__PURE__ */ z("$ZodFunction", (n, a) => (ae.init(n, a), n._def = a, n._zod.def = a, n.implement = (o) => {
  if (typeof o != "function") throw new Error("implement() must be called with a function");
  return function(...c) {
    const i = n._def.input ? Uf(n._def.input, c) : c, u = Reflect.apply(o, this, i);
    return n._def.output ? Uf(n._def.output, u) : u;
  };
}, n.implementAsync = (o) => {
  if (typeof o != "function") throw new Error("implementAsync() must be called with a function");
  return async function(...c) {
    const i = n._def.input ? await Df(n._def.input, c) : c, u = await Reflect.apply(o, this, i);
    return n._def.output ? await Df(n._def.output, u) : u;
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
    input: new lm({
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
}, n)), I$ = /* @__PURE__ */ z("$ZodPromise", (n, a) => {
  ae.init(n, a), n._zod.parse = (o, c) => Promise.resolve(o.value).then((i) => a.innerType._zod.run({
    value: i,
    issues: []
  }, c));
}), C$ = /* @__PURE__ */ z("$ZodLazy", (n, a) => {
  ae.init(n, a), se(n._zod, "innerType", () => {
    const o = a;
    return o._cachedInner || (o._cachedInner = a.getter()), o._cachedInner;
  }), se(n._zod, "pattern", () => n._zod.innerType?._zod?.pattern), se(n._zod, "propValues", () => n._zod.innerType?._zod?.propValues), se(n._zod, "optin", () => n._zod.innerType?._zod?.optin ?? void 0), se(n._zod, "optout", () => n._zod.innerType?._zod?.optout ?? void 0), n._zod.parse = (o, c) => n._zod.innerType._zod.run(o, c);
}), R$ = /* @__PURE__ */ z("$ZodCustom", (n, a) => {
  Ve.init(n, a), ae.init(n, a), n._zod.parse = (o, c) => o, n._zod.check = (o) => {
    const c = o.value, i = a.fn(c);
    if (i instanceof Promise) return i.then((u) => q_(u, o, c, n));
    q_(i, o, c, n);
  };
});
function q_(n, a, o, c) {
  if (!n) {
    const i = {
      code: "custom",
      input: o,
      inst: c,
      path: [...c._zod.def.path ?? []],
      continue: !c._zod.def.abort
    };
    c._zod.def.params && (i.params = c._zod.def.params), a.issues.push(Ba(i));
  }
}
var xw = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `مدخلات غير مقبولة: يفترض إدخال instanceof ${i.expected}، ولكن تم إدخال ${m}` : `مدخلات غير مقبولة: يفترض إدخال ${u}، ولكن تم إدخال ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `مدخلات غير مقبولة: يفترض إدخال ${W(i.values[0])}` : `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${R(i.values, "|")}`;
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
        return `معرف${i.keys.length > 1 ? "ات" : ""} غريب${i.keys.length > 1 ? "ة" : ""}: ${R(i.keys, "، ")}`;
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
function Ew() {
  return { localeError: xw() };
}
var Ow = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Yanlış dəyər: gözlənilən instanceof ${i.expected}, daxil olan ${m}` : `Yanlış dəyər: gözlənilən ${u}, daxil olan ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Yanlış dəyər: gözlənilən ${W(i.values[0])}` : `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${R(i.values, "|")}`;
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
        return `Tanınmayan açar${i.keys.length > 1 ? "lar" : ""}: ${R(i.keys, ", ")}`;
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
function Uw() {
  return { localeError: Ow() };
}
function H_(n, a, o, c) {
  const i = Math.abs(n), u = i % 10, d = i % 100;
  return d >= 11 && d <= 19 ? c : u === 1 ? a : u >= 2 && u <= 4 ? o : c;
}
var Dw = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Няправільны ўвод: чакаўся instanceof ${i.expected}, атрымана ${m}` : `Няправільны ўвод: чакаўся ${u}, атрымана ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Няправільны ўвод: чакалася ${W(i.values[0])}` : `Няправільны варыянт: чакаўся адзін з ${R(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        if (d) {
          const m = H_(Number(i.maximum), d.unit.one, d.unit.few, d.unit.many);
          return `Занадта вялікі: чакалася, што ${i.origin ?? "значэнне"} павінна ${d.verb} ${u}${i.maximum.toString()} ${m}`;
        }
        return `Занадта вялікі: чакалася, што ${i.origin ?? "значэнне"} павінна быць ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        if (d) {
          const m = H_(Number(i.minimum), d.unit.one, d.unit.few, d.unit.many);
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
        return `Нераспазнаны ${i.keys.length > 1 ? "ключы" : "ключ"}: ${R(i.keys, ", ")}`;
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
function Aw() {
  return { localeError: Dw() };
}
var jw = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Невалиден вход: очакван instanceof ${i.expected}, получен ${m}` : `Невалиден вход: очакван ${u}, получен ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Невалиден вход: очакван ${W(i.values[0])}` : `Невалидна опция: очаквано едно от ${R(i.values, "|")}`;
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
        return `Неразпознат${i.keys.length > 1 ? "и" : ""} ключ${i.keys.length > 1 ? "ове" : ""}: ${R(i.keys, ", ")}`;
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
function Zw() {
  return { localeError: jw() };
}
var Nw = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Tipus invàlid: s'esperava instanceof ${i.expected}, s'ha rebut ${m}` : `Tipus invàlid: s'esperava ${u}, s'ha rebut ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Valor invàlid: s'esperava ${W(i.values[0])}` : `Opció invàlida: s'esperava una de ${R(i.values, " o ")}`;
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
        return `Clau${i.keys.length > 1 ? "s" : ""} no reconeguda${i.keys.length > 1 ? "s" : ""}: ${R(i.keys, ", ")}`;
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
function Iw() {
  return { localeError: Nw() };
}
var Cw = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Neplatný vstup: očekáváno instanceof ${i.expected}, obdrženo ${m}` : `Neplatný vstup: očekáváno ${u}, obdrženo ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Neplatný vstup: očekáváno ${W(i.values[0])}` : `Neplatná možnost: očekávána jedna z hodnot ${R(i.values, "|")}`;
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
        return `Neznámé klíče: ${R(i.keys, ", ")}`;
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
function Rw() {
  return { localeError: Cw() };
}
var Mw = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Ugyldigt input: forventede instanceof ${i.expected}, fik ${m}` : `Ugyldigt input: forventede ${u}, fik ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Ugyldig værdi: forventede ${W(i.values[0])}` : `Ugyldigt valg: forventede en af følgende ${R(i.values, "|")}`;
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
        return `${i.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${R(i.keys, ", ")}`;
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
function qw() {
  return { localeError: Mw() };
}
var Hw = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Ungültige Eingabe: erwartet instanceof ${i.expected}, erhalten ${m}` : `Ungültige Eingabe: erwartet ${u}, erhalten ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Ungültige Eingabe: erwartet ${W(i.values[0])}` : `Ungültige Option: erwartet eine von ${R(i.values, "|")}`;
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
        return `${i.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${R(i.keys, ", ")}`;
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
function Lw() {
  return { localeError: Hw() };
}
var Bw = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return typeof i.expected == "string" && /^[A-Z]/.test(i.expected) ? `Μη έγκυρη είσοδος: αναμενόταν instanceof ${i.expected}, λήφθηκε ${m}` : `Μη έγκυρη είσοδος: αναμενόταν ${u}, λήφθηκε ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Μη έγκυρη είσοδος: αναμενόταν ${W(i.values[0])}` : `Μη έγκυρη επιλογή: αναμενόταν ένα από ${R(i.values, "|")}`;
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
        return `Άγνωστ${i.keys.length > 1 ? "α" : "ο"} κλειδ${i.keys.length > 1 ? "ιά" : "ί"}: ${R(i.keys, ", ")}`;
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
function Pw() {
  return { localeError: Bw() };
}
var Jw = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input);
        return `Invalid input: expected ${u}, received ${c[d] ?? d}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Invalid input: expected ${W(i.values[0])}` : `Invalid option: expected one of ${R(i.values, "|")}`;
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
        return `Unrecognized key${i.keys.length > 1 ? "s" : ""}: ${R(i.keys, ", ")}`;
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
function M$() {
  return { localeError: Jw() };
}
var Gw = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Nevalida enigo: atendiĝis instanceof ${i.expected}, riceviĝis ${m}` : `Nevalida enigo: atendiĝis ${u}, riceviĝis ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Nevalida enigo: atendiĝis ${W(i.values[0])}` : `Nevalida opcio: atendiĝis unu el ${R(i.values, "|")}`;
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
        return `Nekonata${i.keys.length > 1 ? "j" : ""} ŝlosilo${i.keys.length > 1 ? "j" : ""}: ${R(i.keys, ", ")}`;
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
function Yw() {
  return { localeError: Gw() };
}
var Vw = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Entrada inválida: se esperaba instanceof ${i.expected}, recibido ${m}` : `Entrada inválida: se esperaba ${u}, recibido ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Entrada inválida: se esperaba ${W(i.values[0])}` : `Opción inválida: se esperaba una de ${R(i.values, "|")}`;
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
        return `Llave${i.keys.length > 1 ? "s" : ""} desconocida${i.keys.length > 1 ? "s" : ""}: ${R(i.keys, ", ")}`;
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
function Qw() {
  return { localeError: Vw() };
}
var Xw = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `ورودی نامعتبر: می‌بایست instanceof ${i.expected} می‌بود، ${m} دریافت شد` : `ورودی نامعتبر: می‌بایست ${u} می‌بود، ${m} دریافت شد`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `ورودی نامعتبر: می‌بایست ${W(i.values[0])} می‌بود` : `گزینه نامعتبر: می‌بایست یکی از ${R(i.values, "|")} می‌بود`;
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
        return `کلید${i.keys.length > 1 ? "های" : ""} ناشناس: ${R(i.keys, ", ")}`;
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
function Kw() {
  return { localeError: Xw() };
}
var Fw = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Virheellinen tyyppi: odotettiin instanceof ${i.expected}, oli ${m}` : `Virheellinen tyyppi: odotettiin ${u}, oli ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Virheellinen syöte: täytyy olla ${W(i.values[0])}` : `Virheellinen valinta: täytyy olla yksi seuraavista: ${R(i.values, "|")}`;
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
        return `${i.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${R(i.keys, ", ")}`;
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
function Ww() {
  return { localeError: Fw() };
}
var e6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Entrée invalide : instanceof ${i.expected} attendu, ${m} reçu` : `Entrée invalide : ${u} attendu, ${m} reçu`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Entrée invalide : ${W(i.values[0])} attendu` : `Option invalide : une valeur parmi ${R(i.values, "|")} attendue`;
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
        return `Clé${i.keys.length > 1 ? "s" : ""} non reconnue${i.keys.length > 1 ? "s" : ""} : ${R(i.keys, ", ")}`;
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
function t6() {
  return { localeError: e6() };
}
var n6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Entrée invalide : attendu instanceof ${i.expected}, reçu ${m}` : `Entrée invalide : attendu ${u}, reçu ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Entrée invalide : attendu ${W(i.values[0])}` : `Option invalide : attendu l'une des valeurs suivantes ${R(i.values, "|")}`;
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
        return `Clé${i.keys.length > 1 ? "s" : ""} non reconnue${i.keys.length > 1 ? "s" : ""} : ${R(i.keys, ", ")}`;
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
function i6() {
  return { localeError: n6() };
}
var a6 = () => {
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
  }, o = (h) => h ? n[h] : void 0, c = (h) => {
    const g = o(h);
    return g ? g.label : h ?? n.unknown.label;
  }, i = (h) => `ה${c(h)}`, u = (h) => (o(h)?.gender ?? "m") === "f" ? "צריכה להיות" : "צריך להיות", d = (h) => h ? a[h] ?? null : null, m = {
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
  return (h) => {
    switch (h.code) {
      case "invalid_type": {
        const g = h.expected, E = y[g ?? ""] ?? c(g), k = te(h.input), M = y[k] ?? n[k]?.label ?? k;
        return /^[A-Z]/.test(h.expected) ? `קלט לא תקין: צריך להיות instanceof ${h.expected}, התקבל ${M}` : `קלט לא תקין: צריך להיות ${E}, התקבל ${M}`;
      }
      case "invalid_value": {
        if (h.values.length === 1) return `ערך לא תקין: הערך חייב להיות ${W(h.values[0])}`;
        const g = h.values.map((k) => W(k));
        if (h.values.length === 2) return `ערך לא תקין: האפשרויות המתאימות הן ${g[0]} או ${g[1]}`;
        const E = g[g.length - 1];
        return `ערך לא תקין: האפשרויות המתאימות הן ${g.slice(0, -1).join(", ")} או ${E}`;
      }
      case "too_big": {
        const g = d(h.origin), E = i(h.origin ?? "value");
        if (h.origin === "string") return `${g?.longLabel ?? "ארוך"} מדי: ${E} צריכה להכיל ${h.maximum.toString()} ${g?.unit ?? ""} ${h.inclusive ? "או פחות" : "לכל היותר"}`.trim();
        if (h.origin === "number") return `גדול מדי: ${E} צריך להיות ${h.inclusive ? `קטן או שווה ל-${h.maximum}` : `קטן מ-${h.maximum}`}`;
        if (h.origin === "array" || h.origin === "set") return `גדול מדי: ${E} ${h.origin === "set" ? "צריכה" : "צריך"} להכיל ${h.inclusive ? `${h.maximum} ${g?.unit ?? ""} או פחות` : `פחות מ-${h.maximum} ${g?.unit ?? ""}`}`.trim();
        const k = h.inclusive ? "<=" : "<", M = u(h.origin ?? "value");
        return g?.unit ? `${g.longLabel} מדי: ${E} ${M} ${k}${h.maximum.toString()} ${g.unit}` : `${g?.longLabel ?? "גדול"} מדי: ${E} ${M} ${k}${h.maximum.toString()}`;
      }
      case "too_small": {
        const g = d(h.origin), E = i(h.origin ?? "value");
        if (h.origin === "string") return `${g?.shortLabel ?? "קצר"} מדי: ${E} צריכה להכיל ${h.minimum.toString()} ${g?.unit ?? ""} ${h.inclusive ? "או יותר" : "לפחות"}`.trim();
        if (h.origin === "number") return `קטן מדי: ${E} צריך להיות ${h.inclusive ? `גדול או שווה ל-${h.minimum}` : `גדול מ-${h.minimum}`}`;
        if (h.origin === "array" || h.origin === "set") {
          const F = h.origin === "set" ? "צריכה" : "צריך";
          return h.minimum === 1 && h.inclusive ? `קטן מדי: ${E} ${F} להכיל ${h.origin === "set", "לפחות פריט אחד"}` : `קטן מדי: ${E} ${F} להכיל ${h.inclusive ? `${h.minimum} ${g?.unit ?? ""} או יותר` : `יותר מ-${h.minimum} ${g?.unit ?? ""}`}`.trim();
        }
        const k = h.inclusive ? ">=" : ">", M = u(h.origin ?? "value");
        return g?.unit ? `${g.shortLabel} מדי: ${E} ${M} ${k}${h.minimum.toString()} ${g.unit}` : `${g?.shortLabel ?? "קטן"} מדי: ${E} ${M} ${k}${h.minimum.toString()}`;
      }
      case "invalid_format": {
        const g = h;
        if (g.format === "starts_with") return `המחרוזת חייבת להתחיל ב "${g.prefix}"`;
        if (g.format === "ends_with") return `המחרוזת חייבת להסתיים ב "${g.suffix}"`;
        if (g.format === "includes") return `המחרוזת חייבת לכלול "${g.includes}"`;
        if (g.format === "regex") return `המחרוזת חייבת להתאים לתבנית ${g.pattern}`;
        const E = m[g.format];
        return `${E?.label ?? g.format} לא ${(E?.gender ?? "m") === "f" ? "תקינה" : "תקין"}`;
      }
      case "not_multiple_of":
        return `מספר לא תקין: חייב להיות מכפלה של ${h.divisor}`;
      case "unrecognized_keys":
        return `מפתח${h.keys.length > 1 ? "ות" : ""} לא מזוה${h.keys.length > 1 ? "ים" : "ה"}: ${R(h.keys, ", ")}`;
      case "invalid_key":
        return "שדה לא תקין באובייקט";
      case "invalid_union":
        return "קלט לא תקין";
      case "invalid_element":
        return `ערך לא תקין ב${i(h.origin ?? "array")}`;
      default:
        return "קלט לא תקין";
    }
  };
};
function r6() {
  return { localeError: a6() };
}
var o6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Neispravan unos: očekuje se instanceof ${i.expected}, a primljeno je ${m}` : `Neispravan unos: očekuje se ${u}, a primljeno je ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Neispravna vrijednost: očekivano ${W(i.values[0])}` : `Neispravna opcija: očekivano jedno od ${R(i.values, "|")}`;
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
        return `Neprepoznat${i.keys.length > 1 ? "i ključevi" : " ključ"}: ${R(i.keys, ", ")}`;
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
function l6() {
  return { localeError: o6() };
}
var u6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Érvénytelen bemenet: a várt érték instanceof ${i.expected}, a kapott érték ${m}` : `Érvénytelen bemenet: a várt érték ${u}, a kapott érték ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Érvénytelen bemenet: a várt érték ${W(i.values[0])}` : `Érvénytelen opció: valamelyik érték várt ${R(i.values, "|")}`;
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
        return `Ismeretlen kulcs${i.keys.length > 1 ? "s" : ""}: ${R(i.keys, ", ")}`;
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
function c6() {
  return { localeError: u6() };
}
function L_(n, a, o) {
  return Math.abs(n) === 1 ? a : o;
}
function Ha(n) {
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
var s6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Սխալ մուտքագրում․ սպասվում էր instanceof ${i.expected}, ստացվել է ${m}` : `Սխալ մուտքագրում․ սպասվում էր ${u}, ստացվել է ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Սխալ մուտքագրում․ սպասվում էր ${W(i.values[1])}` : `Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${R(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        if (d) {
          const m = L_(Number(i.maximum), d.unit.one, d.unit.many);
          return `Չափազանց մեծ արժեք․ սպասվում է, որ ${Ha(i.origin ?? "արժեք")} կունենա ${u}${i.maximum.toString()} ${m}`;
        }
        return `Չափազանց մեծ արժեք․ սպասվում է, որ ${Ha(i.origin ?? "արժեք")} լինի ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        if (d) {
          const m = L_(Number(i.minimum), d.unit.one, d.unit.many);
          return `Չափազանց փոքր արժեք․ սպասվում է, որ ${Ha(i.origin)} կունենա ${u}${i.minimum.toString()} ${m}`;
        }
        return `Չափազանց փոքր արժեք․ սպասվում է, որ ${Ha(i.origin)} լինի ${u}${i.minimum.toString()}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Սխալ տող․ պետք է սկսվի "${u.prefix}"-ով` : u.format === "ends_with" ? `Սխալ տող․ պետք է ավարտվի "${u.suffix}"-ով` : u.format === "includes" ? `Սխալ տող․ պետք է պարունակի "${u.includes}"` : u.format === "regex" ? `Սխալ տող․ պետք է համապատասխանի ${u.pattern} ձևաչափին` : `Սխալ ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Սխալ թիվ․ պետք է բազմապատիկ լինի ${i.divisor}-ի`;
      case "unrecognized_keys":
        return `Չճանաչված բանալի${i.keys.length > 1 ? "ներ" : ""}. ${R(i.keys, ", ")}`;
      case "invalid_key":
        return `Սխալ բանալի ${Ha(i.origin)}-ում`;
      case "invalid_union":
        return "Սխալ մուտքագրում";
      case "invalid_element":
        return `Սխալ արժեք ${Ha(i.origin)}-ում`;
      default:
        return "Սխալ մուտքագրում";
    }
  };
};
function d6() {
  return { localeError: s6() };
}
var f6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Input tidak valid: diharapkan instanceof ${i.expected}, diterima ${m}` : `Input tidak valid: diharapkan ${u}, diterima ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Input tidak valid: diharapkan ${W(i.values[0])}` : `Pilihan tidak valid: diharapkan salah satu dari ${R(i.values, "|")}`;
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
        return `Kunci tidak dikenali ${i.keys.length > 1 ? "s" : ""}: ${R(i.keys, ", ")}`;
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
function m6() {
  return { localeError: f6() };
}
var v6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Rangt gildi: Þú slóst inn ${m} þar sem á að vera instanceof ${i.expected}` : `Rangt gildi: Þú slóst inn ${m} þar sem á að vera ${u}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Rangt gildi: gert ráð fyrir ${W(i.values[0])}` : `Ógilt val: má vera eitt af eftirfarandi ${R(i.values, "|")}`;
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
        return `Óþekkt ${i.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${R(i.keys, ", ")}`;
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
function p6() {
  return { localeError: v6() };
}
var h6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Input non valido: atteso instanceof ${i.expected}, ricevuto ${m}` : `Input non valido: atteso ${u}, ricevuto ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Input non valido: atteso ${W(i.values[0])}` : `Opzione non valida: atteso uno tra ${R(i.values, "|")}`;
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
        return `Chiav${i.keys.length > 1 ? "i" : "e"} non riconosciut${i.keys.length > 1 ? "e" : "a"}: ${R(i.keys, ", ")}`;
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
function g6() {
  return { localeError: h6() };
}
var y6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `無効な入力: instanceof ${i.expected}が期待されましたが、${m}が入力されました` : `無効な入力: ${u}が期待されましたが、${m}が入力されました`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `無効な入力: ${W(i.values[0])}が期待されました` : `無効な選択: ${R(i.values, "、")}のいずれかである必要があります`;
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
        return `認識されていないキー${i.keys.length > 1 ? "群" : ""}: ${R(i.keys, "、")}`;
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
function _6() {
  return { localeError: y6() };
}
var b6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `არასწორი შეყვანა: მოსალოდნელი instanceof ${i.expected}, მიღებული ${m}` : `არასწორი შეყვანა: მოსალოდნელი ${u}, მიღებული ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `არასწორი შეყვანა: მოსალოდნელი ${W(i.values[0])}` : `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${R(i.values, "|")}-დან`;
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
        return `უცნობი გასაღებ${i.keys.length > 1 ? "ები" : "ი"}: ${R(i.keys, ", ")}`;
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
function S6() {
  return { localeError: b6() };
}
var $6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${i.expected} ប៉ុន្តែទទួលបាន ${m}` : `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${u} ប៉ុន្តែទទួលបាន ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${W(i.values[0])}` : `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${R(i.values, "|")}`;
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
        return `រកឃើញសោមិនស្គាល់៖ ${R(i.keys, ", ")}`;
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
function q$() {
  return { localeError: $6() };
}
function z6() {
  return q$();
}
var k6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `잘못된 입력: 예상 타입은 instanceof ${i.expected}, 받은 타입은 ${m}입니다` : `잘못된 입력: 예상 타입은 ${u}, 받은 타입은 ${m}입니다`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `잘못된 입력: 값은 ${W(i.values[0])} 이어야 합니다` : `잘못된 옵션: ${R(i.values, "또는 ")} 중 하나여야 합니다`;
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
        return `인식할 수 없는 키: ${R(i.keys, ", ")}`;
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
function w6() {
  return { localeError: k6() };
}
var lo = (n) => n.charAt(0).toUpperCase() + n.slice(1);
function B_(n) {
  const a = Math.abs(n), o = a % 10, c = a % 100;
  return c >= 11 && c <= 19 || o === 0 ? "many" : o === 1 ? "one" : "few";
}
var T6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Gautas tipas ${m}, o tikėtasi - instanceof ${i.expected}` : `Gautas tipas ${m}, o tikėtasi - ${u}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Privalo būti ${W(i.values[0])}` : `Privalo būti vienas iš ${R(i.values, "|")} pasirinkimų`;
      case "too_big": {
        const u = c[i.origin] ?? i.origin, d = a(i.origin, B_(Number(i.maximum)), i.inclusive ?? !1, "smaller");
        if (d?.verb) return `${lo(u ?? i.origin ?? "reikšmė")} ${d.verb} ${i.maximum.toString()} ${d.unit ?? "elementų"}`;
        const m = i.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
        return `${lo(u ?? i.origin ?? "reikšmė")} turi būti ${m} ${i.maximum.toString()} ${d?.unit}`;
      }
      case "too_small": {
        const u = c[i.origin] ?? i.origin, d = a(i.origin, B_(Number(i.minimum)), i.inclusive ?? !1, "bigger");
        if (d?.verb) return `${lo(u ?? i.origin ?? "reikšmė")} ${d.verb} ${i.minimum.toString()} ${d.unit ?? "elementų"}`;
        const m = i.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
        return `${lo(u ?? i.origin ?? "reikšmė")} turi būti ${m} ${i.minimum.toString()} ${d?.unit}`;
      }
      case "invalid_format": {
        const u = i;
        return u.format === "starts_with" ? `Eilutė privalo prasidėti "${u.prefix}"` : u.format === "ends_with" ? `Eilutė privalo pasibaigti "${u.suffix}"` : u.format === "includes" ? `Eilutė privalo įtraukti "${u.includes}"` : u.format === "regex" ? `Eilutė privalo atitikti ${u.pattern}` : `Neteisingas ${o[u.format] ?? i.format}`;
      }
      case "not_multiple_of":
        return `Skaičius privalo būti ${i.divisor} kartotinis.`;
      case "unrecognized_keys":
        return `Neatpažint${i.keys.length > 1 ? "i" : "as"} rakt${i.keys.length > 1 ? "ai" : "as"}: ${R(i.keys, ", ")}`;
      case "invalid_key":
        return "Rastas klaidingas raktas";
      case "invalid_union":
        return "Klaidinga įvestis";
      case "invalid_element":
        return `${lo(c[i.origin] ?? i.origin ?? i.origin ?? "reikšmė")} turi klaidingą įvestį`;
      default:
        return "Klaidinga įvestis";
    }
  };
};
function x6() {
  return { localeError: T6() };
}
var E6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Грешен внес: се очекува instanceof ${i.expected}, примено ${m}` : `Грешен внес: се очекува ${u}, примено ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Invalid input: expected ${W(i.values[0])}` : `Грешана опција: се очекува една ${R(i.values, "|")}`;
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
        return `${i.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${R(i.keys, ", ")}`;
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
function O6() {
  return { localeError: E6() };
}
var U6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Input tidak sah: dijangka instanceof ${i.expected}, diterima ${m}` : `Input tidak sah: dijangka ${u}, diterima ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Input tidak sah: dijangka ${W(i.values[0])}` : `Pilihan tidak sah: dijangka salah satu daripada ${R(i.values, "|")}`;
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
        return `Kunci tidak dikenali: ${R(i.keys, ", ")}`;
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
function D6() {
  return { localeError: U6() };
}
var A6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Ongeldige invoer: verwacht instanceof ${i.expected}, ontving ${m}` : `Ongeldige invoer: verwacht ${u}, ontving ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Ongeldige invoer: verwacht ${W(i.values[0])}` : `Ongeldige optie: verwacht één van ${R(i.values, "|")}`;
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
        return `Onbekende key${i.keys.length > 1 ? "s" : ""}: ${R(i.keys, ", ")}`;
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
function j6() {
  return { localeError: A6() };
}
var Z6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Ugyldig input: forventet instanceof ${i.expected}, fikk ${m}` : `Ugyldig input: forventet ${u}, fikk ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Ugyldig verdi: forventet ${W(i.values[0])}` : `Ugyldig valg: forventet en av ${R(i.values, "|")}`;
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
        return `${i.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${R(i.keys, ", ")}`;
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
function N6() {
  return { localeError: Z6() };
}
var I6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Fâsit giren: umulan instanceof ${i.expected}, alınan ${m}` : `Fâsit giren: umulan ${u}, alınan ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Fâsit giren: umulan ${W(i.values[0])}` : `Fâsit tercih: mûteberler ${R(i.values, "|")}`;
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
        return `Tanınmayan anahtar ${i.keys.length > 1 ? "s" : ""}: ${R(i.keys, ", ")}`;
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
function C6() {
  return { localeError: I6() };
}
var R6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `ناسم ورودي: باید instanceof ${i.expected} وای, مګر ${m} ترلاسه شو` : `ناسم ورودي: باید ${u} وای, مګر ${m} ترلاسه شو`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `ناسم ورودي: باید ${W(i.values[0])} وای` : `ناسم انتخاب: باید یو له ${R(i.values, "|")} څخه وای`;
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
        return `ناسم ${i.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${R(i.keys, ", ")}`;
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
function M6() {
  return { localeError: R6() };
}
var q6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Nieprawidłowe dane wejściowe: oczekiwano instanceof ${i.expected}, otrzymano ${m}` : `Nieprawidłowe dane wejściowe: oczekiwano ${u}, otrzymano ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Nieprawidłowe dane wejściowe: oczekiwano ${W(i.values[0])}` : `Nieprawidłowa opcja: oczekiwano jednej z wartości ${R(i.values, "|")}`;
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
        return `Nierozpoznane klucze${i.keys.length > 1 ? "s" : ""}: ${R(i.keys, ", ")}`;
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
function H6() {
  return { localeError: q6() };
}
var L6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Tipo inválido: esperado instanceof ${i.expected}, recebido ${m}` : `Tipo inválido: esperado ${u}, recebido ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Entrada inválida: esperado ${W(i.values[0])}` : `Opção inválida: esperada uma das ${R(i.values, "|")}`;
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
        return `Chave${i.keys.length > 1 ? "s" : ""} desconhecida${i.keys.length > 1 ? "s" : ""}: ${R(i.keys, ", ")}`;
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
function B6() {
  return { localeError: L6() };
}
var P6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input);
        return `Intrare invalidă: așteptat ${u}, primit ${c[d] ?? d}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Intrare invalidă: așteptat ${W(i.values[0])}` : `Opțiune invalidă: așteptat una dintre ${R(i.values, "|")}`;
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
        return `Chei nerecunoscute: ${R(i.keys, ", ")}`;
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
function J6() {
  return { localeError: P6() };
}
function P_(n, a, o, c) {
  const i = Math.abs(n), u = i % 10, d = i % 100;
  return d >= 11 && d <= 19 ? c : u === 1 ? a : u >= 2 && u <= 4 ? o : c;
}
var G6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Неверный ввод: ожидалось instanceof ${i.expected}, получено ${m}` : `Неверный ввод: ожидалось ${u}, получено ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Неверный ввод: ожидалось ${W(i.values[0])}` : `Неверный вариант: ожидалось одно из ${R(i.values, "|")}`;
      case "too_big": {
        const u = i.inclusive ? "<=" : "<", d = a(i.origin);
        if (d) {
          const m = P_(Number(i.maximum), d.unit.one, d.unit.few, d.unit.many);
          return `Слишком большое значение: ожидалось, что ${i.origin ?? "значение"} будет иметь ${u}${i.maximum.toString()} ${m}`;
        }
        return `Слишком большое значение: ожидалось, что ${i.origin ?? "значение"} будет ${u}${i.maximum.toString()}`;
      }
      case "too_small": {
        const u = i.inclusive ? ">=" : ">", d = a(i.origin);
        if (d) {
          const m = P_(Number(i.minimum), d.unit.one, d.unit.few, d.unit.many);
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
        return `Нераспознанн${i.keys.length > 1 ? "ые" : "ый"} ключ${i.keys.length > 1 ? "и" : ""}: ${R(i.keys, ", ")}`;
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
function Y6() {
  return { localeError: G6() };
}
var V6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Neveljaven vnos: pričakovano instanceof ${i.expected}, prejeto ${m}` : `Neveljaven vnos: pričakovano ${u}, prejeto ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Neveljaven vnos: pričakovano ${W(i.values[0])}` : `Neveljavna možnost: pričakovano eno izmed ${R(i.values, "|")}`;
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
        return `Neprepoznan${i.keys.length > 1 ? "i ključi" : " ključ"}: ${R(i.keys, ", ")}`;
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
function Q6() {
  return { localeError: V6() };
}
var X6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Ogiltig inmatning: förväntat instanceof ${i.expected}, fick ${m}` : `Ogiltig inmatning: förväntat ${u}, fick ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Ogiltig inmatning: förväntat ${W(i.values[0])}` : `Ogiltigt val: förväntade en av ${R(i.values, "|")}`;
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
        return `${i.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${R(i.keys, ", ")}`;
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
function K6() {
  return { localeError: X6() };
}
var F6 = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${i.expected}, பெறப்பட்டது ${m}` : `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${u}, பெறப்பட்டது ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${W(i.values[0])}` : `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${R(i.values, "|")} இல் ஒன்று`;
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
        return `அடையாளம் தெரியாத விசை${i.keys.length > 1 ? "கள்" : ""}: ${R(i.keys, ", ")}`;
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
function W6() {
  return { localeError: F6() };
}
var eT = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${i.expected} แต่ได้รับ ${m}` : `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${u} แต่ได้รับ ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `ค่าไม่ถูกต้อง: ควรเป็น ${W(i.values[0])}` : `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${R(i.values, "|")}`;
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
        return `พบคีย์ที่ไม่รู้จัก: ${R(i.keys, ", ")}`;
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
function tT() {
  return { localeError: eT() };
}
var nT = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Geçersiz değer: beklenen instanceof ${i.expected}, alınan ${m}` : `Geçersiz değer: beklenen ${u}, alınan ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Geçersiz değer: beklenen ${W(i.values[0])}` : `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${R(i.values, "|")}`;
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
        return `Tanınmayan anahtar${i.keys.length > 1 ? "lar" : ""}: ${R(i.keys, ", ")}`;
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
function iT() {
  return { localeError: nT() };
}
var aT = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Неправильні вхідні дані: очікується instanceof ${i.expected}, отримано ${m}` : `Неправильні вхідні дані: очікується ${u}, отримано ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Неправильні вхідні дані: очікується ${W(i.values[0])}` : `Неправильна опція: очікується одне з ${R(i.values, "|")}`;
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
        return `Нерозпізнаний ключ${i.keys.length > 1 ? "і" : ""}: ${R(i.keys, ", ")}`;
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
function H$() {
  return { localeError: aT() };
}
function rT() {
  return H$();
}
var oT = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `غلط ان پٹ: instanceof ${i.expected} متوقع تھا، ${m} موصول ہوا` : `غلط ان پٹ: ${u} متوقع تھا، ${m} موصول ہوا`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `غلط ان پٹ: ${W(i.values[0])} متوقع تھا` : `غلط آپشن: ${R(i.values, "|")} میں سے ایک متوقع تھا`;
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
        return `غیر تسلیم شدہ کی${i.keys.length > 1 ? "ز" : ""}: ${R(i.keys, "، ")}`;
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
function lT() {
  return { localeError: oT() };
}
var uT = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Noto‘g‘ri kirish: kutilgan instanceof ${i.expected}, qabul qilingan ${m}` : `Noto‘g‘ri kirish: kutilgan ${u}, qabul qilingan ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Noto‘g‘ri kirish: kutilgan ${W(i.values[0])}` : `Noto‘g‘ri variant: quyidagilardan biri kutilgan ${R(i.values, "|")}`;
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
        return `Noma’lum kalit${i.keys.length > 1 ? "lar" : ""}: ${R(i.keys, ", ")}`;
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
function cT() {
  return { localeError: uT() };
}
var sT = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Đầu vào không hợp lệ: mong đợi instanceof ${i.expected}, nhận được ${m}` : `Đầu vào không hợp lệ: mong đợi ${u}, nhận được ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Đầu vào không hợp lệ: mong đợi ${W(i.values[0])}` : `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${R(i.values, "|")}`;
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
        return `Khóa không được nhận dạng: ${R(i.keys, ", ")}`;
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
function dT() {
  return { localeError: sT() };
}
var fT = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `无效输入：期望 instanceof ${i.expected}，实际接收 ${m}` : `无效输入：期望 ${u}，实际接收 ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `无效输入：期望 ${W(i.values[0])}` : `无效选项：期望以下之一 ${R(i.values, "|")}`;
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
        return `出现未知的键(key): ${R(i.keys, ", ")}`;
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
function mT() {
  return { localeError: fT() };
}
var vT = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `無效的輸入值：預期為 instanceof ${i.expected}，但收到 ${m}` : `無效的輸入值：預期為 ${u}，但收到 ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `無效的輸入值：預期為 ${W(i.values[0])}` : `無效的選項：預期為以下其中之一 ${R(i.values, "|")}`;
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
        return `無法識別的鍵值${i.keys.length > 1 ? "們" : ""}：${R(i.keys, "、")}`;
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
function pT() {
  return { localeError: vT() };
}
var hT = () => {
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
        const u = c[i.expected] ?? i.expected, d = te(i.input), m = c[d] ?? d;
        return /^[A-Z]/.test(i.expected) ? `Ìbáwọlé aṣìṣe: a ní láti fi instanceof ${i.expected}, àmọ̀ a rí ${m}` : `Ìbáwọlé aṣìṣe: a ní láti fi ${u}, àmọ̀ a rí ${m}`;
      }
      case "invalid_value":
        return i.values.length === 1 ? `Ìbáwọlé aṣìṣe: a ní láti fi ${W(i.values[0])}` : `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${R(i.values, "|")}`;
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
        return `Bọtìnì àìmọ̀: ${R(i.keys, ", ")}`;
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
function gT() {
  return { localeError: hT() };
}
var dm = /* @__PURE__ */ _n({
  ar: () => Ew,
  az: () => Uw,
  be: () => Aw,
  bg: () => Zw,
  ca: () => Iw,
  cs: () => Rw,
  da: () => qw,
  de: () => Lw,
  el: () => Pw,
  en: () => M$,
  eo: () => Yw,
  es: () => Qw,
  fa: () => Kw,
  fi: () => Ww,
  fr: () => t6,
  frCA: () => i6,
  he: () => r6,
  hr: () => l6,
  hu: () => c6,
  hy: () => d6,
  id: () => m6,
  is: () => p6,
  it: () => g6,
  ja: () => _6,
  ka: () => S6,
  kh: () => z6,
  km: () => q$,
  ko: () => w6,
  lt: () => x6,
  mk: () => O6,
  ms: () => D6,
  nl: () => j6,
  no: () => N6,
  ota: () => C6,
  pl: () => H6,
  ps: () => M6,
  pt: () => B6,
  ro: () => J6,
  ru: () => Y6,
  sl: () => Q6,
  sv: () => K6,
  ta: () => W6,
  th: () => tT,
  tr: () => iT,
  ua: () => rT,
  uk: () => H$,
  ur: () => lT,
  uz: () => cT,
  vi: () => dT,
  yo: () => gT,
  zhCN: () => mT,
  zhTW: () => pT
}), J_, fm = /* @__PURE__ */ Symbol("ZodOutput"), mm = /* @__PURE__ */ Symbol("ZodInput"), L$ = class {
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
function uc() {
  return new L$();
}
(J_ = globalThis).__zod_globalRegistry ?? (J_.__zod_globalRegistry = uc());
var Gt = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function B$(n, a) {
  return new n({
    type: "string",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function P$(n, a) {
  return new n({
    type: "string",
    coerce: !0,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function vm(n, a) {
  return new n({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Qu(n, a) {
  return new n({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function pm(n, a) {
  return new n({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function hm(n, a) {
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
function gm(n, a) {
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
function ym(n, a) {
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
function cc(n, a) {
  return new n({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function _m(n, a) {
  return new n({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function bm(n, a) {
  return new n({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Sm(n, a) {
  return new n({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function $m(n, a) {
  return new n({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function zm(n, a) {
  return new n({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function km(n, a) {
  return new n({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function wm(n, a) {
  return new n({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Tm(n, a) {
  return new n({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function xm(n, a) {
  return new n({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function J$(n, a) {
  return new n({
    type: "string",
    format: "mac",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Em(n, a) {
  return new n({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Om(n, a) {
  return new n({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Um(n, a) {
  return new n({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Dm(n, a) {
  return new n({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Am(n, a) {
  return new n({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function jm(n, a) {
  return new n({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...I(a)
  });
}
var Zm = {
  Any: null,
  Minute: -1,
  Second: 0,
  Millisecond: 3,
  Microsecond: 6
};
// @__NO_SIDE_EFFECTS__
function G$(n, a) {
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
function Y$(n, a) {
  return new n({
    type: "string",
    format: "date",
    check: "string_format",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function V$(n, a) {
  return new n({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Q$(n, a) {
  return new n({
    type: "string",
    format: "duration",
    check: "string_format",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function X$(n, a) {
  return new n({
    type: "number",
    checks: [],
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function K$(n, a) {
  return new n({
    type: "number",
    coerce: !0,
    checks: [],
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function F$(n, a) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function W$(n, a) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float32",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function e0(n, a) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "float64",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function t0(n, a) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "int32",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function n0(n, a) {
  return new n({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "uint32",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function i0(n, a) {
  return new n({
    type: "boolean",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function a0(n, a) {
  return new n({
    type: "boolean",
    coerce: !0,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function r0(n, a) {
  return new n({
    type: "bigint",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function o0(n, a) {
  return new n({
    type: "bigint",
    coerce: !0,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function l0(n, a) {
  return new n({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "int64",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function u0(n, a) {
  return new n({
    type: "bigint",
    check: "bigint_format",
    abort: !1,
    format: "uint64",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function c0(n, a) {
  return new n({
    type: "symbol",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function s0(n, a) {
  return new n({
    type: "undefined",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function d0(n, a) {
  return new n({
    type: "null",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function f0(n) {
  return new n({ type: "any" });
}
// @__NO_SIDE_EFFECTS__
function m0(n) {
  return new n({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function v0(n, a) {
  return new n({
    type: "never",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function p0(n, a) {
  return new n({
    type: "void",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function h0(n, a) {
  return new n({
    type: "date",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function g0(n, a) {
  return new n({
    type: "date",
    coerce: !0,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function y0(n, a) {
  return new n({
    type: "nan",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Yn(n, a) {
  return new tm({
    check: "less_than",
    ...I(a),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Yt(n, a) {
  return new tm({
    check: "less_than",
    ...I(a),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Vn(n, a) {
  return new nm({
    check: "greater_than",
    ...I(a),
    value: n,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function xt(n, a) {
  return new nm({
    check: "greater_than",
    ...I(a),
    value: n,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function sc(n) {
  return /* @__PURE__ */ Vn(0, n);
}
// @__NO_SIDE_EFFECTS__
function dc(n) {
  return /* @__PURE__ */ Yn(0, n);
}
// @__NO_SIDE_EFFECTS__
function fc(n) {
  return /* @__PURE__ */ Yt(0, n);
}
// @__NO_SIDE_EFFECTS__
function mc(n) {
  return /* @__PURE__ */ xt(0, n);
}
// @__NO_SIDE_EFFECTS__
function Qi(n, a) {
  return new oS({
    check: "multiple_of",
    ...I(a),
    value: n
  });
}
// @__NO_SIDE_EFFECTS__
function ea(n, a) {
  return new cS({
    check: "max_size",
    ...I(a),
    maximum: n
  });
}
// @__NO_SIDE_EFFECTS__
function Qn(n, a) {
  return new sS({
    check: "min_size",
    ...I(a),
    minimum: n
  });
}
// @__NO_SIDE_EFFECTS__
function Wa(n, a) {
  return new dS({
    check: "size_equals",
    ...I(a),
    size: n
  });
}
// @__NO_SIDE_EFFECTS__
function er(n, a) {
  return new fS({
    check: "max_length",
    ...I(a),
    maximum: n
  });
}
// @__NO_SIDE_EFFECTS__
function bi(n, a) {
  return new mS({
    check: "min_length",
    ...I(a),
    minimum: n
  });
}
// @__NO_SIDE_EFFECTS__
function tr(n, a) {
  return new vS({
    check: "length_equals",
    ...I(a),
    length: n
  });
}
// @__NO_SIDE_EFFECTS__
function xo(n, a) {
  return new pS({
    check: "string_format",
    format: "regex",
    ...I(a),
    pattern: n
  });
}
// @__NO_SIDE_EFFECTS__
function Eo(n) {
  return new hS({
    check: "string_format",
    format: "lowercase",
    ...I(n)
  });
}
// @__NO_SIDE_EFFECTS__
function Oo(n) {
  return new gS({
    check: "string_format",
    format: "uppercase",
    ...I(n)
  });
}
// @__NO_SIDE_EFFECTS__
function Uo(n, a) {
  return new yS({
    check: "string_format",
    format: "includes",
    ...I(a),
    includes: n
  });
}
// @__NO_SIDE_EFFECTS__
function Do(n, a) {
  return new _S({
    check: "string_format",
    format: "starts_with",
    ...I(a),
    prefix: n
  });
}
// @__NO_SIDE_EFFECTS__
function Ao(n, a) {
  return new bS({
    check: "string_format",
    format: "ends_with",
    ...I(a),
    suffix: n
  });
}
// @__NO_SIDE_EFFECTS__
function vc(n, a, o) {
  return new SS({
    check: "property",
    property: n,
    schema: a,
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function jo(n, a) {
  return new $S({
    check: "mime_type",
    mime: n,
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Tn(n) {
  return new zS({
    check: "overwrite",
    tx: n
  });
}
// @__NO_SIDE_EFFECTS__
function Zo(n) {
  return /* @__PURE__ */ Tn((a) => a.normalize(n));
}
// @__NO_SIDE_EFFECTS__
function No() {
  return /* @__PURE__ */ Tn((n) => n.trim());
}
// @__NO_SIDE_EFFECTS__
function Io() {
  return /* @__PURE__ */ Tn((n) => n.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Co() {
  return /* @__PURE__ */ Tn((n) => n.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Ro() {
  return /* @__PURE__ */ Tn((n) => ob(n));
}
// @__NO_SIDE_EFFECTS__
function _0(n, a, o) {
  return new n({
    type: "array",
    element: a,
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function yT(n, a, o) {
  return new n({
    type: "union",
    options: a,
    ...I(o)
  });
}
function _T(n, a, o) {
  return new n({
    type: "union",
    options: a,
    inclusive: !1,
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function bT(n, a, o, c) {
  return new n({
    type: "union",
    options: o,
    discriminator: a,
    ...I(c)
  });
}
// @__NO_SIDE_EFFECTS__
function ST(n, a, o) {
  return new n({
    type: "intersection",
    left: a,
    right: o
  });
}
// @__NO_SIDE_EFFECTS__
function $T(n, a, o, c) {
  const i = o instanceof ae, u = i ? c : o;
  return new n({
    type: "tuple",
    items: a,
    rest: i ? o : null,
    ...I(u)
  });
}
// @__NO_SIDE_EFFECTS__
function zT(n, a, o, c) {
  return new n({
    type: "record",
    keyType: a,
    valueType: o,
    ...I(c)
  });
}
// @__NO_SIDE_EFFECTS__
function kT(n, a, o, c) {
  return new n({
    type: "map",
    keyType: a,
    valueType: o,
    ...I(c)
  });
}
// @__NO_SIDE_EFFECTS__
function wT(n, a, o) {
  return new n({
    type: "set",
    valueType: a,
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function TT(n, a, o) {
  return new n({
    type: "enum",
    entries: Array.isArray(a) ? Object.fromEntries(a.map((c) => [c, c])) : a,
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function xT(n, a, o) {
  return new n({
    type: "enum",
    entries: a,
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function ET(n, a, o) {
  return new n({
    type: "literal",
    values: Array.isArray(a) ? a : [a],
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function b0(n, a) {
  return new n({
    type: "file",
    ...I(a)
  });
}
// @__NO_SIDE_EFFECTS__
function OT(n, a) {
  return new n({
    type: "transform",
    transform: a
  });
}
// @__NO_SIDE_EFFECTS__
function UT(n, a) {
  return new n({
    type: "optional",
    innerType: a
  });
}
// @__NO_SIDE_EFFECTS__
function DT(n, a) {
  return new n({
    type: "nullable",
    innerType: a
  });
}
// @__NO_SIDE_EFFECTS__
function AT(n, a, o) {
  return new n({
    type: "default",
    innerType: a,
    get defaultValue() {
      return typeof o == "function" ? o() : tc(o);
    }
  });
}
// @__NO_SIDE_EFFECTS__
function jT(n, a, o) {
  return new n({
    type: "nonoptional",
    innerType: a,
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function ZT(n, a) {
  return new n({
    type: "success",
    innerType: a
  });
}
// @__NO_SIDE_EFFECTS__
function NT(n, a, o) {
  return new n({
    type: "catch",
    innerType: a,
    catchValue: typeof o == "function" ? o : () => o
  });
}
// @__NO_SIDE_EFFECTS__
function IT(n, a, o) {
  return new n({
    type: "pipe",
    in: a,
    out: o
  });
}
// @__NO_SIDE_EFFECTS__
function CT(n, a) {
  return new n({
    type: "readonly",
    innerType: a
  });
}
// @__NO_SIDE_EFFECTS__
function RT(n, a, o) {
  return new n({
    type: "template_literal",
    parts: a,
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function MT(n, a) {
  return new n({
    type: "lazy",
    getter: a
  });
}
// @__NO_SIDE_EFFECTS__
function qT(n, a) {
  return new n({
    type: "promise",
    innerType: a
  });
}
// @__NO_SIDE_EFFECTS__
function S0(n, a, o) {
  const c = I(o);
  return c.abort ?? (c.abort = !0), new n({
    type: "custom",
    check: "custom",
    fn: a,
    ...c
  });
}
// @__NO_SIDE_EFFECTS__
function $0(n, a, o) {
  return new n({
    type: "custom",
    check: "custom",
    fn: a,
    ...I(o)
  });
}
// @__NO_SIDE_EFFECTS__
function z0(n, a) {
  const o = /* @__PURE__ */ k0((c) => (c.addIssue = (i) => {
    if (typeof i == "string") c.issues.push(Ba(i, c.value, o._zod.def));
    else {
      const u = i;
      u.fatal && (u.continue = !1), u.code ?? (u.code = "custom"), u.input ?? (u.input = c.value), u.inst ?? (u.inst = o), u.continue ?? (u.continue = !o._zod.def.abort), c.issues.push(Ba(u));
    }
  }, n(c.value, c)), a);
  return o;
}
// @__NO_SIDE_EFFECTS__
function k0(n, a) {
  const o = new Ve({
    check: "custom",
    ...I(a)
  });
  return o._zod.check = n, o;
}
// @__NO_SIDE_EFFECTS__
function w0(n) {
  const a = new Ve({ check: "describe" });
  return a._zod.onattach = [(o) => {
    const c = Gt.get(o) ?? {};
    Gt.add(o, {
      ...c,
      description: n
    });
  }], a._zod.check = () => {
  }, a;
}
// @__NO_SIDE_EFFECTS__
function T0(n) {
  const a = new Ve({ check: "meta" });
  return a._zod.onattach = [(o) => {
    const c = Gt.get(o) ?? {};
    Gt.add(o, {
      ...c,
      ...n
    });
  }], a._zod.check = () => {
  }, a;
}
// @__NO_SIDE_EFFECTS__
function x0(n, a) {
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
  o.case !== "sensitive" && (c = c.map((g) => typeof g == "string" ? g.toLowerCase() : g), i = i.map((g) => typeof g == "string" ? g.toLowerCase() : g));
  const u = new Set(c), d = new Set(i), m = n.Codec ?? sm, y = n.Boolean ?? rm, h = new m({
    type: "pipe",
    in: new (n.String ?? To)({
      type: "string",
      error: o.error
    }),
    out: new y({
      type: "boolean",
      error: o.error
    }),
    transform: ((g, E) => {
      let k = g;
      return o.case !== "sensitive" && (k = k.toLowerCase()), u.has(k) ? !0 : d.has(k) ? !1 : (E.issues.push({
        code: "invalid_value",
        expected: "stringbool",
        values: [...u, ...d],
        input: E.value,
        inst: h,
        continue: !1
      }), {});
    }),
    reverseTransform: ((g, E) => g === !0 ? c[0] || "true" : i[0] || "false"),
    error: o.error
  });
  return h;
}
// @__NO_SIDE_EFFECTS__
function Mo(n, a, o, c = {}) {
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
function Ja(n) {
  let a = n?.target ?? "draft-2020-12";
  return a === "draft-4" && (a = "draft-04"), a === "draft-7" && (a = "draft-07"), {
    processors: n.processors ?? {},
    metadataRegistry: n?.metadata ?? Gt,
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
function Re(n, a, o = {
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
    const h = {
      ...o,
      schemaPath: [...o.schemaPath, n],
      path: o.path
    };
    if (n._zod.processJSONSchema) n._zod.processJSONSchema(a, d.schema, h);
    else {
      const E = d.schema, k = a.processors[i.type];
      if (!k) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
      k(n, a, E, h);
    }
    const g = n._zod.parent;
    g && (d.ref || (d.ref = g), Re(g, a, h), a.seen.get(g).isParent = !0);
  }
  const y = a.metadataRegistry.get(n);
  return y && Object.assign(d.schema, y), a.io === "input" && Tt(n) && (delete d.schema.examples, delete d.schema.default), a.io === "input" && "_prefault" in d.schema && ((c = d.schema).default ?? (c.default = d.schema._prefault)), delete d.schema._prefault, a.seen.get(n).schema;
}
function Ga(n, a) {
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
      const g = n.external.registry.get(d[0])?.id, E = n.external.uri ?? ((M) => M);
      if (g) return { ref: E(g) };
      const k = d[1].defId ?? d[1].schema.id ?? `schema${n.counter++}`;
      return d[1].defId = k, {
        defId: k,
        ref: `${E("__shared")}#/${m}/${k}`
      };
    }
    if (d[1] === o) return { ref: "#" };
    const y = `#/${m}/`, h = d[1].schema.id ?? `__schema${n.counter++}`;
    return {
      defId: h,
      ref: y + h
    };
  }, u = (d) => {
    if (d[1].schema.$ref) return;
    const m = d[1], { ref: y, defId: h } = i(d);
    m.def = { ...m.schema }, h && (m.defId = h);
    const g = m.schema;
    for (const E in g) delete g[E];
    g.$ref = y;
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
function Ya(n, a) {
  const o = n.seen.get(a);
  if (!o) throw new Error("Unprocessed schema. This is a bug in Zod.");
  const c = (m) => {
    const y = n.seen.get(m);
    if (y.ref === null) return;
    const h = y.def ?? y.schema, g = { ...h }, E = y.ref;
    if (y.ref = null, E) {
      c(E);
      const M = n.seen.get(E), F = M.schema;
      if (F.$ref && (n.target === "draft-07" || n.target === "draft-04" || n.target === "openapi-3.0") ? (h.allOf = h.allOf ?? [], h.allOf.push(F)) : Object.assign(h, F), Object.assign(h, g), m._zod.parent === E) for (const he in h)
        he === "$ref" || he === "allOf" || he in g || delete h[he];
      if (F.$ref && M.def) for (const he in h)
        he === "$ref" || he === "allOf" || he in M.def && JSON.stringify(h[he]) === JSON.stringify(M.def[he]) && delete h[he];
    }
    const k = m._zod.parent;
    if (k && k !== E) {
      c(k);
      const M = n.seen.get(k);
      if (M?.schema.$ref && (h.$ref = M.schema.$ref, M.def))
        for (const F in h)
          F === "$ref" || F === "allOf" || F in M.def && JSON.stringify(h[F]) === JSON.stringify(M.def[F]) && delete h[F];
    }
    n.override({
      zodSchema: m,
      jsonSchema: h,
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
          input: vo(a, "input", n.processors),
          output: vo(a, "output", n.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), m;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function Tt(n, a) {
  const o = a ?? { seen: /* @__PURE__ */ new Set() };
  if (o.seen.has(n)) return !1;
  o.seen.add(n);
  const c = n._zod.def;
  if (c.type === "transform") return !0;
  if (c.type === "array") return Tt(c.element, o);
  if (c.type === "set") return Tt(c.valueType, o);
  if (c.type === "lazy") return Tt(c.getter(), o);
  if (c.type === "promise" || c.type === "optional" || c.type === "nonoptional" || c.type === "nullable" || c.type === "readonly" || c.type === "default" || c.type === "prefault") return Tt(c.innerType, o);
  if (c.type === "intersection") return Tt(c.left, o) || Tt(c.right, o);
  if (c.type === "record" || c.type === "map") return Tt(c.keyType, o) || Tt(c.valueType, o);
  if (c.type === "pipe")
    return n._zod.traits.has("$ZodCodec") ? !0 : Tt(c.in, o) || Tt(c.out, o);
  if (c.type === "object") {
    for (const i in c.shape) if (Tt(c.shape[i], o)) return !0;
    return !1;
  }
  if (c.type === "union") {
    for (const i of c.options) if (Tt(i, o)) return !0;
    return !1;
  }
  if (c.type === "tuple") {
    for (const i of c.items) if (Tt(i, o)) return !0;
    return !!(c.rest && Tt(c.rest, o));
  }
  return !1;
}
var E0 = (n, a = {}) => (o) => {
  const c = Ja({
    ...o,
    processors: a
  });
  return Re(n, c), Ga(c, n), Ya(c, n);
}, vo = (n, a, o = {}) => (c) => {
  const { libraryOptions: i, target: u } = c ?? {}, d = Ja({
    ...i ?? {},
    target: u,
    io: a,
    processors: o
  });
  return Re(n, d), Ga(d, n), Ya(d, n);
}, HT = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
}, O0 = (n, a, o, c) => {
  const i = o;
  i.type = "string";
  const { minimum: u, maximum: d, format: m, patterns: y, contentEncoding: h } = n._zod.bag;
  if (typeof u == "number" && (i.minLength = u), typeof d == "number" && (i.maxLength = d), m && (i.format = HT[m] ?? m, i.format === "" && delete i.format, m === "time" && delete i.format), h && (i.contentEncoding = h), y && y.size > 0) {
    const g = [...y];
    g.length === 1 ? i.pattern = g[0].source : g.length > 1 && (i.allOf = [...g.map((E) => ({
      ...a.target === "draft-07" || a.target === "draft-04" || a.target === "openapi-3.0" ? { type: "string" } : {},
      pattern: E.source
    }))]);
  }
}, U0 = (n, a, o, c) => {
  const i = o, { minimum: u, maximum: d, format: m, multipleOf: y, exclusiveMaximum: h, exclusiveMinimum: g } = n._zod.bag;
  typeof m == "string" && m.includes("int") ? i.type = "integer" : i.type = "number";
  const E = typeof g == "number" && g >= (u ?? Number.NEGATIVE_INFINITY), k = typeof h == "number" && h <= (d ?? Number.POSITIVE_INFINITY), M = a.target === "draft-04" || a.target === "openapi-3.0";
  E ? M ? (i.minimum = g, i.exclusiveMinimum = !0) : i.exclusiveMinimum = g : typeof u == "number" && (i.minimum = u), k ? M ? (i.maximum = h, i.exclusiveMaximum = !0) : i.exclusiveMaximum = h : typeof d == "number" && (i.maximum = d), typeof y == "number" && (i.multipleOf = y);
}, D0 = (n, a, o, c) => {
  o.type = "boolean";
}, A0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("BigInt cannot be represented in JSON Schema");
}, j0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("Symbols cannot be represented in JSON Schema");
}, Z0 = (n, a, o, c) => {
  a.target === "openapi-3.0" ? (o.type = "string", o.nullable = !0, o.enum = [null]) : o.type = "null";
}, N0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("Undefined cannot be represented in JSON Schema");
}, I0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("Void cannot be represented in JSON Schema");
}, C0 = (n, a, o, c) => {
  o.not = {};
}, R0 = (n, a, o, c) => {
}, M0 = (n, a, o, c) => {
}, q0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("Date cannot be represented in JSON Schema");
}, H0 = (n, a, o, c) => {
  const i = n._zod.def, u = Rf(i.entries);
  u.every((d) => typeof d == "number") && (o.type = "number"), u.every((d) => typeof d == "string") && (o.type = "string"), o.enum = u;
}, L0 = (n, a, o, c) => {
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
}, B0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("NaN cannot be represented in JSON Schema");
}, P0 = (n, a, o, c) => {
  const i = o, u = n._zod.pattern;
  if (!u) throw new Error("Pattern not found in template literal");
  i.type = "string", i.pattern = u.source;
}, J0 = (n, a, o, c) => {
  const i = o, u = {
    type: "string",
    format: "binary",
    contentEncoding: "binary"
  }, { minimum: d, maximum: m, mime: y } = n._zod.bag;
  d !== void 0 && (u.minLength = d), m !== void 0 && (u.maxLength = m), y ? y.length === 1 ? (u.contentMediaType = y[0], Object.assign(i, u)) : (Object.assign(i, u), i.anyOf = y.map((h) => ({ contentMediaType: h }))) : Object.assign(i, u);
}, G0 = (n, a, o, c) => {
  o.type = "boolean";
}, Y0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
}, V0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("Function types cannot be represented in JSON Schema");
}, Q0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
}, X0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("Map cannot be represented in JSON Schema");
}, K0 = (n, a, o, c) => {
  if (a.unrepresentable === "throw") throw new Error("Set cannot be represented in JSON Schema");
}, F0 = (n, a, o, c) => {
  const i = o, u = n._zod.def, { minimum: d, maximum: m } = n._zod.bag;
  typeof d == "number" && (i.minItems = d), typeof m == "number" && (i.maxItems = m), i.type = "array", i.items = Re(u.element, a, {
    ...c,
    path: [...c.path, "items"]
  });
}, W0 = (n, a, o, c) => {
  const i = o, u = n._zod.def;
  i.type = "object", i.properties = {};
  const d = u.shape;
  for (const h in d) i.properties[h] = Re(d[h], a, {
    ...c,
    path: [
      ...c.path,
      "properties",
      h
    ]
  });
  const m = new Set(Object.keys(d)), y = new Set([...m].filter((h) => {
    const g = u.shape[h]._zod;
    return a.io === "input" ? g.optin === void 0 : g.optout === void 0;
  }));
  y.size > 0 && (i.required = Array.from(y)), u.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : u.catchall ? u.catchall && (i.additionalProperties = Re(u.catchall, a, {
    ...c,
    path: [...c.path, "additionalProperties"]
  })) : a.io === "output" && (i.additionalProperties = !1);
}, Nm = (n, a, o, c) => {
  const i = n._zod.def, u = i.inclusive === !1, d = i.options.map((m, y) => Re(m, a, {
    ...c,
    path: [
      ...c.path,
      u ? "oneOf" : "anyOf",
      y
    ]
  }));
  u ? o.oneOf = d : o.anyOf = d;
}, ez = (n, a, o, c) => {
  const i = n._zod.def, u = Re(i.left, a, {
    ...c,
    path: [
      ...c.path,
      "allOf",
      0
    ]
  }), d = Re(i.right, a, {
    ...c,
    path: [
      ...c.path,
      "allOf",
      1
    ]
  }), m = (y) => "allOf" in y && Object.keys(y).length === 1;
  o.allOf = [...m(u) ? u.allOf : [u], ...m(d) ? d.allOf : [d]];
}, tz = (n, a, o, c) => {
  const i = o, u = n._zod.def;
  i.type = "array";
  const d = a.target === "draft-2020-12" ? "prefixItems" : "items", m = a.target === "draft-2020-12" || a.target === "openapi-3.0" ? "items" : "additionalItems", y = u.items.map((k, M) => Re(k, a, {
    ...c,
    path: [
      ...c.path,
      d,
      M
    ]
  })), h = u.rest ? Re(u.rest, a, {
    ...c,
    path: [
      ...c.path,
      m,
      ...a.target === "openapi-3.0" ? [u.items.length] : []
    ]
  }) : null;
  a.target === "draft-2020-12" ? (i.prefixItems = y, h && (i.items = h)) : a.target === "openapi-3.0" ? (i.items = { anyOf: y }, h && i.items.anyOf.push(h), i.minItems = y.length, h || (i.maxItems = y.length)) : (i.items = y, h && (i.additionalItems = h));
  const { minimum: g, maximum: E } = n._zod.bag;
  typeof g == "number" && (i.minItems = g), typeof E == "number" && (i.maxItems = E);
}, nz = (n, a, o, c) => {
  const i = o, u = n._zod.def;
  i.type = "object";
  const d = u.keyType, m = d._zod.bag?.patterns;
  if (u.mode === "loose" && m && m.size > 0) {
    const h = Re(u.valueType, a, {
      ...c,
      path: [
        ...c.path,
        "patternProperties",
        "*"
      ]
    });
    i.patternProperties = {};
    for (const g of m) i.patternProperties[g.source] = h;
  } else
    (a.target === "draft-07" || a.target === "draft-2020-12") && (i.propertyNames = Re(u.keyType, a, {
      ...c,
      path: [...c.path, "propertyNames"]
    })), i.additionalProperties = Re(u.valueType, a, {
      ...c,
      path: [...c.path, "additionalProperties"]
    });
  const y = d._zod.values;
  if (y) {
    const h = [...y].filter((g) => typeof g == "string" || typeof g == "number");
    h.length > 0 && (i.required = h);
  }
}, iz = (n, a, o, c) => {
  const i = n._zod.def, u = Re(i.innerType, a, c), d = a.seen.get(n);
  a.target === "openapi-3.0" ? (d.ref = i.innerType, o.nullable = !0) : o.anyOf = [u, { type: "null" }];
}, az = (n, a, o, c) => {
  const i = n._zod.def;
  Re(i.innerType, a, c);
  const u = a.seen.get(n);
  u.ref = i.innerType;
}, rz = (n, a, o, c) => {
  const i = n._zod.def;
  Re(i.innerType, a, c);
  const u = a.seen.get(n);
  u.ref = i.innerType, o.default = JSON.parse(JSON.stringify(i.defaultValue));
}, oz = (n, a, o, c) => {
  const i = n._zod.def;
  Re(i.innerType, a, c);
  const u = a.seen.get(n);
  u.ref = i.innerType, a.io === "input" && (o._prefault = JSON.parse(JSON.stringify(i.defaultValue)));
}, lz = (n, a, o, c) => {
  const i = n._zod.def;
  Re(i.innerType, a, c);
  const u = a.seen.get(n);
  u.ref = i.innerType;
  let d;
  try {
    d = i.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  o.default = d;
}, uz = (n, a, o, c) => {
  const i = n._zod.def, u = i.in._zod.traits.has("$ZodTransform"), d = a.io === "input" ? u ? i.out : i.in : i.out;
  Re(d, a, c);
  const m = a.seen.get(n);
  m.ref = d;
}, cz = (n, a, o, c) => {
  const i = n._zod.def;
  Re(i.innerType, a, c);
  const u = a.seen.get(n);
  u.ref = i.innerType, o.readOnly = !0;
}, sz = (n, a, o, c) => {
  const i = n._zod.def;
  Re(i.innerType, a, c);
  const u = a.seen.get(n);
  u.ref = i.innerType;
}, Im = (n, a, o, c) => {
  const i = n._zod.def;
  Re(i.innerType, a, c);
  const u = a.seen.get(n);
  u.ref = i.innerType;
}, dz = (n, a, o, c) => {
  const i = n._zod.innerType;
  Re(i, a, c);
  const u = a.seen.get(n);
  u.ref = i;
}, jf = {
  string: O0,
  number: U0,
  boolean: D0,
  bigint: A0,
  symbol: j0,
  null: Z0,
  undefined: N0,
  void: I0,
  never: C0,
  any: R0,
  unknown: M0,
  date: q0,
  enum: H0,
  literal: L0,
  nan: B0,
  template_literal: P0,
  file: J0,
  success: G0,
  custom: Y0,
  function: V0,
  transform: Q0,
  map: X0,
  set: K0,
  array: F0,
  object: W0,
  union: Nm,
  intersection: ez,
  tuple: tz,
  record: nz,
  nullable: iz,
  nonoptional: az,
  default: rz,
  prefault: oz,
  catch: lz,
  pipe: uz,
  readonly: cz,
  promise: sz,
  optional: Im,
  lazy: dz
};
function Cm(n, a) {
  if ("_idmap" in n) {
    const c = n, i = Ja({
      ...a,
      processors: jf
    }), u = {};
    for (const m of c._idmap.entries()) {
      const [y, h] = m;
      Re(h, i);
    }
    const d = {};
    i.external = {
      registry: c,
      uri: a?.uri,
      defs: u
    };
    for (const m of c._idmap.entries()) {
      const [y, h] = m;
      Ga(i, h), d[y] = Ya(i, h);
    }
    return Object.keys(u).length > 0 && (d.__shared = { [i.target === "draft-2020-12" ? "$defs" : "definitions"]: u }), { schemas: d };
  }
  const o = Ja({
    ...a,
    processors: jf
  });
  return Re(n, o), Ga(o, n), Ya(o, n);
}
var LT = class {
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
    a === "draft-4" && (a = "draft-04"), a === "draft-7" && (a = "draft-07"), this.ctx = Ja({
      processors: jf,
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
    return Re(n, this.ctx, a);
  }
  emit(n, a) {
    a && (a.cycles && (this.ctx.cycles = a.cycles), a.reused && (this.ctx.reused = a.reused), a.external && (this.ctx.external = a.external)), Ga(this.ctx, n);
    const { "~standard": o, ...c } = Ya(this.ctx, n);
    return c;
  }
}, BT = /* @__PURE__ */ _n({}), fz = /* @__PURE__ */ _n({
  $ZodAny: () => a$,
  $ZodArray: () => c$,
  $ZodAsyncError: () => Yi,
  $ZodBase64: () => GS,
  $ZodBase64URL: () => VS,
  $ZodBigInt: () => om,
  $ZodBigIntFormat: () => e$,
  $ZodBoolean: () => rm,
  $ZodCIDRv4: () => PS,
  $ZodCIDRv6: () => JS,
  $ZodCUID: () => AS,
  $ZodCUID2: () => jS,
  $ZodCatch: () => U$,
  $ZodCheck: () => Ve,
  $ZodCheckBigIntFormat: () => uS,
  $ZodCheckEndsWith: () => bS,
  $ZodCheckGreaterThan: () => nm,
  $ZodCheckIncludes: () => yS,
  $ZodCheckLengthEquals: () => vS,
  $ZodCheckLessThan: () => tm,
  $ZodCheckLowerCase: () => hS,
  $ZodCheckMaxLength: () => fS,
  $ZodCheckMaxSize: () => cS,
  $ZodCheckMimeType: () => $S,
  $ZodCheckMinLength: () => mS,
  $ZodCheckMinSize: () => sS,
  $ZodCheckMultipleOf: () => oS,
  $ZodCheckNumberFormat: () => lS,
  $ZodCheckOverwrite: () => zS,
  $ZodCheckProperty: () => SS,
  $ZodCheckRegex: () => pS,
  $ZodCheckSizeEquals: () => dS,
  $ZodCheckStartsWith: () => _S,
  $ZodCheckStringFormat: () => wo,
  $ZodCheckUpperCase: () => gS,
  $ZodCodec: () => sm,
  $ZodCustom: () => R$,
  $ZodCustomStringFormat: () => FS,
  $ZodDate: () => u$,
  $ZodDefault: () => T$,
  $ZodDiscriminatedUnion: () => p$,
  $ZodE164: () => QS,
  $ZodEmail: () => ES,
  $ZodEmoji: () => US,
  $ZodEncodeError: () => Wu,
  $ZodEnum: () => b$,
  $ZodError: () => qf,
  $ZodExactOptional: () => k$,
  $ZodFile: () => $$,
  $ZodFunction: () => N$,
  $ZodGUID: () => TS,
  $ZodIPv4: () => HS,
  $ZodIPv6: () => LS,
  $ZodISODate: () => RS,
  $ZodISODateTime: () => CS,
  $ZodISODuration: () => qS,
  $ZodISOTime: () => MS,
  $ZodIntersection: () => h$,
  $ZodJWT: () => KS,
  $ZodKSUID: () => IS,
  $ZodLazy: () => C$,
  $ZodLiteral: () => S$,
  $ZodMAC: () => BS,
  $ZodMap: () => y$,
  $ZodNaN: () => D$,
  $ZodNanoID: () => DS,
  $ZodNever: () => o$,
  $ZodNonOptional: () => E$,
  $ZodNull: () => i$,
  $ZodNullable: () => w$,
  $ZodNumber: () => am,
  $ZodNumberFormat: () => WS,
  $ZodObject: () => f$,
  $ZodObjectJIT: () => m$,
  $ZodOptional: () => um,
  $ZodPipe: () => cm,
  $ZodPrefault: () => x$,
  $ZodPreprocess: () => A$,
  $ZodPromise: () => I$,
  $ZodReadonly: () => j$,
  $ZodRealError: () => Xt,
  $ZodRecord: () => g$,
  $ZodRegistry: () => L$,
  $ZodSet: () => _$,
  $ZodString: () => To,
  $ZodStringFormat: () => Le,
  $ZodSuccess: () => O$,
  $ZodSymbol: () => t$,
  $ZodTemplateLiteral: () => Z$,
  $ZodTransform: () => z$,
  $ZodTuple: () => lm,
  $ZodType: () => ae,
  $ZodULID: () => ZS,
  $ZodURL: () => OS,
  $ZodUUID: () => xS,
  $ZodUndefined: () => n$,
  $ZodUnion: () => lc,
  $ZodUnknown: () => r$,
  $ZodVoid: () => l$,
  $ZodXID: () => NS,
  $ZodXor: () => v$,
  $brand: () => If,
  $constructor: () => z,
  $input: () => mm,
  $output: () => fm,
  Doc: () => kS,
  JSONSchema: () => BT,
  JSONSchemaGenerator: () => LT,
  NEVER: () => Nf,
  TimePrecision: () => Zm,
  _any: () => f0,
  _array: () => _0,
  _base64: () => Um,
  _base64url: () => Dm,
  _bigint: () => r0,
  _boolean: () => i0,
  _catch: () => NT,
  _check: () => k0,
  _cidrv4: () => Em,
  _cidrv6: () => Om,
  _coercedBigint: () => o0,
  _coercedBoolean: () => a0,
  _coercedDate: () => g0,
  _coercedNumber: () => K$,
  _coercedString: () => P$,
  _cuid: () => Sm,
  _cuid2: () => $m,
  _custom: () => S0,
  _date: () => h0,
  _decode: () => Jf,
  _decodeAsync: () => Yf,
  _default: () => AT,
  _discriminatedUnion: () => bT,
  _e164: () => Am,
  _email: () => vm,
  _emoji: () => _m,
  _encode: () => Pf,
  _encodeAsync: () => Gf,
  _endsWith: () => Ao,
  _enum: () => TT,
  _file: () => b0,
  _float32: () => W$,
  _float64: () => e0,
  _gt: () => Vn,
  _gte: () => xt,
  _guid: () => Qu,
  _includes: () => Uo,
  _int: () => F$,
  _int32: () => t0,
  _int64: () => l0,
  _intersection: () => ST,
  _ipv4: () => Tm,
  _ipv6: () => xm,
  _isoDate: () => Y$,
  _isoDateTime: () => G$,
  _isoDuration: () => Q$,
  _isoTime: () => V$,
  _jwt: () => jm,
  _ksuid: () => wm,
  _lazy: () => MT,
  _length: () => tr,
  _literal: () => ET,
  _lowercase: () => Eo,
  _lt: () => Yn,
  _lte: () => Yt,
  _mac: () => J$,
  _map: () => kT,
  _max: () => Yt,
  _maxLength: () => er,
  _maxSize: () => ea,
  _mime: () => jo,
  _min: () => xt,
  _minLength: () => bi,
  _minSize: () => Qn,
  _multipleOf: () => Qi,
  _nan: () => y0,
  _nanoid: () => bm,
  _nativeEnum: () => xT,
  _negative: () => dc,
  _never: () => v0,
  _nonnegative: () => mc,
  _nonoptional: () => jT,
  _nonpositive: () => fc,
  _normalize: () => Zo,
  _null: () => d0,
  _nullable: () => DT,
  _number: () => X$,
  _optional: () => UT,
  _overwrite: () => Tn,
  _parse: () => _o,
  _parseAsync: () => bo,
  _pipe: () => IT,
  _positive: () => sc,
  _promise: () => qT,
  _property: () => vc,
  _readonly: () => CT,
  _record: () => zT,
  _refine: () => $0,
  _regex: () => xo,
  _safeDecode: () => Qf,
  _safeDecodeAsync: () => Kf,
  _safeEncode: () => Vf,
  _safeEncodeAsync: () => Xf,
  _safeParse: () => So,
  _safeParseAsync: () => $o,
  _set: () => wT,
  _size: () => Wa,
  _slugify: () => Ro,
  _startsWith: () => Do,
  _string: () => B$,
  _stringFormat: () => Mo,
  _stringbool: () => x0,
  _success: () => ZT,
  _superRefine: () => z0,
  _symbol: () => c0,
  _templateLiteral: () => RT,
  _toLowerCase: () => Io,
  _toUpperCase: () => Co,
  _transform: () => OT,
  _trim: () => No,
  _tuple: () => $T,
  _uint32: () => n0,
  _uint64: () => u0,
  _ulid: () => zm,
  _undefined: () => s0,
  _union: () => yT,
  _unknown: () => m0,
  _uppercase: () => Oo,
  _url: () => cc,
  _uuid: () => pm,
  _uuidv4: () => hm,
  _uuidv6: () => gm,
  _uuidv7: () => ym,
  _void: () => p0,
  _xid: () => km,
  _xor: () => _T,
  clone: () => Qt,
  config: () => ct,
  createStandardJSONSchemaMethod: () => vo,
  createToJSONSchemaMethod: () => E0,
  decode: () => X4,
  decodeAsync: () => F4,
  describe: () => w0,
  encode: () => Q4,
  encodeAsync: () => K4,
  extractDefs: () => Ga,
  finalize: () => Ya,
  flattenError: () => ac,
  formatError: () => rc,
  globalConfig: () => mo,
  globalRegistry: () => Gt,
  initializeContext: () => Ja,
  isValidBase64: () => im,
  isValidBase64URL: () => YS,
  isValidJWT: () => XS,
  locales: () => dm,
  meta: () => T0,
  parse: () => Uf,
  parseAsync: () => Df,
  prettifyError: () => Lf,
  process: () => Re,
  regexes: () => oc,
  registry: () => uc,
  safeDecode: () => ew,
  safeDecodeAsync: () => nw,
  safeEncode: () => W4,
  safeEncodeAsync: () => tw,
  safeParse: () => Bf,
  safeParseAsync: () => kb,
  toDotPath: () => zb,
  toJSONSchema: () => Cm,
  treeifyError: () => Hf,
  util: () => Cf,
  version: () => wS
});
function Rm(n) {
  return !!n._zod;
}
function mz(n, a) {
  return Rm(n) ? Bf(n, a) : n.safeParse(a);
}
function PT(n) {
  if (!n) return;
  let a;
  if (Rm(n) ? a = n._zod?.def?.shape : a = n.shape, !!a) {
    if (typeof a == "function") try {
      return a();
    } catch {
      return;
    }
    return a;
  }
}
function JT(n) {
  if (Rm(n)) {
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
var GT = /* @__PURE__ */ _n({
  endsWith: () => Ao,
  gt: () => Vn,
  gte: () => xt,
  includes: () => Uo,
  length: () => tr,
  lowercase: () => Eo,
  lt: () => Yn,
  lte: () => Yt,
  maxLength: () => er,
  maxSize: () => ea,
  mime: () => jo,
  minLength: () => bi,
  minSize: () => Qn,
  multipleOf: () => Qi,
  negative: () => dc,
  nonnegative: () => mc,
  nonpositive: () => fc,
  normalize: () => Zo,
  overwrite: () => Tn,
  positive: () => sc,
  property: () => vc,
  regex: () => xo,
  size: () => Wa,
  slugify: () => Ro,
  startsWith: () => Do,
  toLowerCase: () => Io,
  toUpperCase: () => Co,
  trim: () => No,
  uppercase: () => Oo
}), Mm = /* @__PURE__ */ _n({
  ZodISODate: () => hc,
  ZodISODateTime: () => pc,
  ZodISODuration: () => yc,
  ZodISOTime: () => gc,
  date: () => vz,
  datetime: () => qm,
  duration: () => hz,
  time: () => pz
}), pc = /* @__PURE__ */ z("ZodISODateTime", (n, a) => {
  CS.init(n, a), Me.init(n, a);
});
function qm(n) {
  return /* @__PURE__ */ G$(pc, n);
}
var hc = /* @__PURE__ */ z("ZodISODate", (n, a) => {
  RS.init(n, a), Me.init(n, a);
});
function vz(n) {
  return /* @__PURE__ */ Y$(hc, n);
}
var gc = /* @__PURE__ */ z("ZodISOTime", (n, a) => {
  MS.init(n, a), Me.init(n, a);
});
function pz(n) {
  return /* @__PURE__ */ V$(gc, n);
}
var yc = /* @__PURE__ */ z("ZodISODuration", (n, a) => {
  qS.init(n, a), Me.init(n, a);
});
function hz(n) {
  return /* @__PURE__ */ Q$(yc, n);
}
var gz = (n, a) => {
  qf.init(n, a), n.name = "ZodError", Object.defineProperties(n, {
    format: { value: (o) => rc(n, o) },
    flatten: { value: (o) => ac(n, o) },
    addIssue: { value: (o) => {
      n.issues.push(o), n.message = JSON.stringify(n.issues, Gu, 2);
    } },
    addIssues: { value: (o) => {
      n.issues.push(...o), n.message = JSON.stringify(n.issues, Gu, 2);
    } },
    isEmpty: { get() {
      return n.issues.length === 0;
    } }
  });
}, yz = /* @__PURE__ */ z("ZodError", gz), Nt = /* @__PURE__ */ z("ZodError", gz, { Parent: Error }), Hm = /* @__PURE__ */ _o(Nt), Lm = /* @__PURE__ */ bo(Nt), Bm = /* @__PURE__ */ So(Nt), Pm = /* @__PURE__ */ $o(Nt), Jm = /* @__PURE__ */ Pf(Nt), Gm = /* @__PURE__ */ Jf(Nt), Ym = /* @__PURE__ */ Gf(Nt), Vm = /* @__PURE__ */ Yf(Nt), Qm = /* @__PURE__ */ Vf(Nt), Xm = /* @__PURE__ */ Qf(Nt), Km = /* @__PURE__ */ Xf(Nt), Fm = /* @__PURE__ */ Kf(Nt), YT = /* @__PURE__ */ _n({
  ZodAny: () => zc,
  ZodArray: () => xc,
  ZodBase64: () => el,
  ZodBase64URL: () => tl,
  ZodBigInt: () => or,
  ZodBigIntFormat: () => al,
  ZodBoolean: () => rr,
  ZodCIDRv4: () => Fo,
  ZodCIDRv6: () => Wo,
  ZodCUID: () => Jo,
  ZodCUID2: () => Go,
  ZodCatch: () => Yc,
  ZodCodec: () => dr,
  ZodCustom: () => fr,
  ZodCustomStringFormat: () => ta,
  ZodDate: () => ol,
  ZodDefault: () => Hc,
  ZodDiscriminatedUnion: () => Oc,
  ZodE164: () => nl,
  ZodEmail: () => Lo,
  ZodEmoji: () => Bo,
  ZodEnum: () => Fi,
  ZodExactOptional: () => Rc,
  ZodFile: () => Ic,
  ZodFunction: () => is,
  ZodGUID: () => Va,
  ZodIPv4: () => Xo,
  ZodIPv6: () => Ko,
  ZodIntersection: () => Uc,
  ZodJWT: () => il,
  ZodKSUID: () => Qo,
  ZodLazy: () => es,
  ZodLiteral: () => Nc,
  ZodMAC: () => _c,
  ZodMap: () => jc,
  ZodNaN: () => Qc,
  ZodNanoID: () => Po,
  ZodNever: () => wc,
  ZodNonOptional: () => sl,
  ZodNull: () => $c,
  ZodNullable: () => qc,
  ZodNumber: () => ar,
  ZodNumberFormat: () => $i,
  ZodObject: () => lr,
  ZodOptional: () => cl,
  ZodPipe: () => sr,
  ZodPrefault: () => Bc,
  ZodPreprocess: () => Xc,
  ZodPromise: () => ns,
  ZodReadonly: () => Kc,
  ZodRecord: () => Ki,
  ZodSet: () => Zc,
  ZodString: () => nr,
  ZodStringFormat: () => Me,
  ZodSuccess: () => Gc,
  ZodSymbol: () => bc,
  ZodTemplateLiteral: () => Wc,
  ZodTransform: () => Cc,
  ZodTuple: () => Dc,
  ZodType: () => oe,
  ZodULID: () => Yo,
  ZodURL: () => ir,
  ZodUUID: () => yn,
  ZodUndefined: () => Sc,
  ZodUnion: () => ur,
  ZodUnknown: () => kc,
  ZodVoid: () => Tc,
  ZodXID: () => Vo,
  ZodXor: () => Ec,
  _ZodString: () => Ho,
  _default: () => Lc,
  _function: () => Ka,
  any: () => Nv,
  array: () => ne,
  base64: () => _v,
  base64url: () => bv,
  bigint: () => Dv,
  boolean: () => De,
  catch: () => Vc,
  check: () => ep,
  cidrv4: () => gv,
  cidrv6: () => yv,
  codec: () => Xv,
  cuid: () => cv,
  cuid2: () => sv,
  custom: () => as,
  date: () => Cv,
  describe: () => tp,
  discriminatedUnion: () => ll,
  e164: () => Sv,
  email: () => Wm,
  emoji: () => lv,
  enum: () => bt,
  exactOptional: () => Mc,
  file: () => Gv,
  float32: () => xv,
  float64: () => Ev,
  function: () => Ka,
  guid: () => ev,
  hash: () => Tv,
  hex: () => wv,
  hostname: () => kv,
  httpUrl: () => ov,
  instanceof: () => ip,
  int: () => po,
  int32: () => Ov,
  int64: () => Av,
  intersection: () => cr,
  invertCodec: () => Kv,
  ipv4: () => vv,
  ipv6: () => hv,
  json: () => rp,
  jwt: () => $v,
  keyof: () => Rv,
  ksuid: () => mv,
  lazy: () => ts,
  literal: () => w,
  looseObject: () => _t,
  looseRecord: () => Lv,
  mac: () => pv,
  map: () => Bv,
  meta: () => np,
  nan: () => Qv,
  nanoid: () => uv,
  nativeEnum: () => Jv,
  never: () => Xi,
  nonoptional: () => Jc,
  null: () => rl,
  nullable: () => Xa,
  nullish: () => Yv,
  number: () => re,
  object: () => D,
  optional: () => He,
  partialRecord: () => Hv,
  pipe: () => ho,
  prefault: () => Pc,
  preprocess: () => dl,
  promise: () => Wv,
  readonly: () => Fc,
  record: () => be,
  refine: () => rs,
  set: () => Pv,
  strictObject: () => Mv,
  string: () => T,
  stringFormat: () => zv,
  stringbool: () => ap,
  success: () => Vv,
  superRefine: () => os,
  symbol: () => Zv,
  templateLiteral: () => Fv,
  transform: () => ul,
  tuple: () => Ac,
  uint32: () => Uv,
  uint64: () => jv,
  ulid: () => dv,
  undefined: () => Qa,
  union: () => de,
  unknown: () => ze,
  url: () => rv,
  uuid: () => tv,
  uuidv4: () => nv,
  uuidv6: () => iv,
  uuidv7: () => av,
  void: () => Iv,
  xid: () => fv,
  xor: () => qv
}), G_ = /* @__PURE__ */ new WeakMap();
function qo(n, a, o) {
  const c = Object.getPrototypeOf(n);
  let i = G_.get(c);
  if (i || (i = /* @__PURE__ */ new Set(), G_.set(c, i)), !i.has(a)) {
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
var oe = /* @__PURE__ */ z("ZodType", (n, a) => (ae.init(n, a), Object.assign(n["~standard"], { jsonSchema: {
  input: vo(n, "input"),
  output: vo(n, "output")
} }), n.toJSONSchema = E0(n, {}), n.def = a, n.type = a.type, Object.defineProperty(n, "_def", { value: a }), n.parse = (o, c) => Hm(n, o, c, { callee: n.parse }), n.safeParse = (o, c) => Bm(n, o, c), n.parseAsync = async (o, c) => Lm(n, o, c, { callee: n.parseAsync }), n.safeParseAsync = async (o, c) => Pm(n, o, c), n.spa = n.safeParseAsync, n.encode = (o, c) => Jm(n, o, c), n.decode = (o, c) => Gm(n, o, c), n.encodeAsync = async (o, c) => Ym(n, o, c), n.decodeAsync = async (o, c) => Vm(n, o, c), n.safeEncode = (o, c) => Qm(n, o, c), n.safeDecode = (o, c) => Xm(n, o, c), n.safeEncodeAsync = async (o, c) => Km(n, o, c), n.safeDecodeAsync = async (o, c) => Fm(n, o, c), qo(n, "ZodType", {
  check(...o) {
    const c = this.def;
    return this.clone(wn(c, { checks: [...c.checks ?? [], ...o.map((i) => typeof i == "function" ? { _zod: {
      check: i,
      def: { check: "custom" },
      onattach: []
    } } : i)] }), { parent: !0 });
  },
  with(...o) {
    return this.check(...o);
  },
  clone(o, c) {
    return Qt(this, o, c);
  },
  brand() {
    return this;
  },
  register(o, c) {
    return o.add(this, c), this;
  },
  refine(o, c) {
    return this.check(rs(o, c));
  },
  superRefine(o, c) {
    return this.check(os(o, c));
  },
  overwrite(o) {
    return this.check(/* @__PURE__ */ Tn(o));
  },
  optional() {
    return He(this);
  },
  exactOptional() {
    return Mc(this);
  },
  nullable() {
    return Xa(this);
  },
  nullish() {
    return He(Xa(this));
  },
  nonoptional(o) {
    return Jc(this, o);
  },
  array() {
    return ne(this);
  },
  or(o) {
    return de([this, o]);
  },
  and(o) {
    return cr(this, o);
  },
  transform(o) {
    return ho(this, ul(o));
  },
  default(o) {
    return Lc(this, o);
  },
  prefault(o) {
    return Pc(this, o);
  },
  catch(o) {
    return Vc(this, o);
  },
  pipe(o) {
    return ho(this, o);
  },
  readonly() {
    return Fc(this);
  },
  describe(o) {
    const c = this.clone();
    return Gt.add(c, { description: o }), c;
  },
  meta(...o) {
    if (o.length === 0) return Gt.get(this);
    const c = this.clone();
    return Gt.add(c, o[0]), c;
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
    return Gt.get(n)?.description;
  },
  configurable: !0
}), n)), Ho = /* @__PURE__ */ z("_ZodString", (n, a) => {
  To.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (c, i, u) => O0(n, c, i, u);
  const o = n._zod.bag;
  n.format = o.format ?? null, n.minLength = o.minimum ?? null, n.maxLength = o.maximum ?? null, qo(n, "_ZodString", {
    regex(...c) {
      return this.check(/* @__PURE__ */ xo(...c));
    },
    includes(...c) {
      return this.check(/* @__PURE__ */ Uo(...c));
    },
    startsWith(...c) {
      return this.check(/* @__PURE__ */ Do(...c));
    },
    endsWith(...c) {
      return this.check(/* @__PURE__ */ Ao(...c));
    },
    min(...c) {
      return this.check(/* @__PURE__ */ bi(...c));
    },
    max(...c) {
      return this.check(/* @__PURE__ */ er(...c));
    },
    length(...c) {
      return this.check(/* @__PURE__ */ tr(...c));
    },
    nonempty(...c) {
      return this.check(/* @__PURE__ */ bi(1, ...c));
    },
    lowercase(c) {
      return this.check(/* @__PURE__ */ Eo(c));
    },
    uppercase(c) {
      return this.check(/* @__PURE__ */ Oo(c));
    },
    trim() {
      return this.check(/* @__PURE__ */ No());
    },
    normalize(...c) {
      return this.check(/* @__PURE__ */ Zo(...c));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ Io());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ Co());
    },
    slugify() {
      return this.check(/* @__PURE__ */ Ro());
    }
  });
}), nr = /* @__PURE__ */ z("ZodString", (n, a) => {
  To.init(n, a), Ho.init(n, a), n.email = (o) => n.check(/* @__PURE__ */ vm(Lo, o)), n.url = (o) => n.check(/* @__PURE__ */ cc(ir, o)), n.jwt = (o) => n.check(/* @__PURE__ */ jm(il, o)), n.emoji = (o) => n.check(/* @__PURE__ */ _m(Bo, o)), n.guid = (o) => n.check(/* @__PURE__ */ Qu(Va, o)), n.uuid = (o) => n.check(/* @__PURE__ */ pm(yn, o)), n.uuidv4 = (o) => n.check(/* @__PURE__ */ hm(yn, o)), n.uuidv6 = (o) => n.check(/* @__PURE__ */ gm(yn, o)), n.uuidv7 = (o) => n.check(/* @__PURE__ */ ym(yn, o)), n.nanoid = (o) => n.check(/* @__PURE__ */ bm(Po, o)), n.guid = (o) => n.check(/* @__PURE__ */ Qu(Va, o)), n.cuid = (o) => n.check(/* @__PURE__ */ Sm(Jo, o)), n.cuid2 = (o) => n.check(/* @__PURE__ */ $m(Go, o)), n.ulid = (o) => n.check(/* @__PURE__ */ zm(Yo, o)), n.base64 = (o) => n.check(/* @__PURE__ */ Um(el, o)), n.base64url = (o) => n.check(/* @__PURE__ */ Dm(tl, o)), n.xid = (o) => n.check(/* @__PURE__ */ km(Vo, o)), n.ksuid = (o) => n.check(/* @__PURE__ */ wm(Qo, o)), n.ipv4 = (o) => n.check(/* @__PURE__ */ Tm(Xo, o)), n.ipv6 = (o) => n.check(/* @__PURE__ */ xm(Ko, o)), n.cidrv4 = (o) => n.check(/* @__PURE__ */ Em(Fo, o)), n.cidrv6 = (o) => n.check(/* @__PURE__ */ Om(Wo, o)), n.e164 = (o) => n.check(/* @__PURE__ */ Am(nl, o)), n.datetime = (o) => n.check(qm(o)), n.date = (o) => n.check(vz(o)), n.time = (o) => n.check(pz(o)), n.duration = (o) => n.check(hz(o));
});
function T(n) {
  return /* @__PURE__ */ B$(nr, n);
}
var Me = /* @__PURE__ */ z("ZodStringFormat", (n, a) => {
  Le.init(n, a), Ho.init(n, a);
}), Lo = /* @__PURE__ */ z("ZodEmail", (n, a) => {
  ES.init(n, a), Me.init(n, a);
});
function Wm(n) {
  return /* @__PURE__ */ vm(Lo, n);
}
var Va = /* @__PURE__ */ z("ZodGUID", (n, a) => {
  TS.init(n, a), Me.init(n, a);
});
function ev(n) {
  return /* @__PURE__ */ Qu(Va, n);
}
var yn = /* @__PURE__ */ z("ZodUUID", (n, a) => {
  xS.init(n, a), Me.init(n, a);
});
function tv(n) {
  return /* @__PURE__ */ pm(yn, n);
}
function nv(n) {
  return /* @__PURE__ */ hm(yn, n);
}
function iv(n) {
  return /* @__PURE__ */ gm(yn, n);
}
function av(n) {
  return /* @__PURE__ */ ym(yn, n);
}
var ir = /* @__PURE__ */ z("ZodURL", (n, a) => {
  OS.init(n, a), Me.init(n, a);
});
function rv(n) {
  return /* @__PURE__ */ cc(ir, n);
}
function ov(n) {
  return /* @__PURE__ */ cc(ir, {
    protocol: Wf,
    hostname: Bb,
    ...I(n)
  });
}
var Bo = /* @__PURE__ */ z("ZodEmoji", (n, a) => {
  US.init(n, a), Me.init(n, a);
});
function lv(n) {
  return /* @__PURE__ */ _m(Bo, n);
}
var Po = /* @__PURE__ */ z("ZodNanoID", (n, a) => {
  DS.init(n, a), Me.init(n, a);
});
function uv(n) {
  return /* @__PURE__ */ bm(Po, n);
}
var Jo = /* @__PURE__ */ z("ZodCUID", (n, a) => {
  AS.init(n, a), Me.init(n, a);
});
function cv(n) {
  return /* @__PURE__ */ Sm(Jo, n);
}
var Go = /* @__PURE__ */ z("ZodCUID2", (n, a) => {
  jS.init(n, a), Me.init(n, a);
});
function sv(n) {
  return /* @__PURE__ */ $m(Go, n);
}
var Yo = /* @__PURE__ */ z("ZodULID", (n, a) => {
  ZS.init(n, a), Me.init(n, a);
});
function dv(n) {
  return /* @__PURE__ */ zm(Yo, n);
}
var Vo = /* @__PURE__ */ z("ZodXID", (n, a) => {
  NS.init(n, a), Me.init(n, a);
});
function fv(n) {
  return /* @__PURE__ */ km(Vo, n);
}
var Qo = /* @__PURE__ */ z("ZodKSUID", (n, a) => {
  IS.init(n, a), Me.init(n, a);
});
function mv(n) {
  return /* @__PURE__ */ wm(Qo, n);
}
var Xo = /* @__PURE__ */ z("ZodIPv4", (n, a) => {
  HS.init(n, a), Me.init(n, a);
});
function vv(n) {
  return /* @__PURE__ */ Tm(Xo, n);
}
var _c = /* @__PURE__ */ z("ZodMAC", (n, a) => {
  BS.init(n, a), Me.init(n, a);
});
function pv(n) {
  return /* @__PURE__ */ J$(_c, n);
}
var Ko = /* @__PURE__ */ z("ZodIPv6", (n, a) => {
  LS.init(n, a), Me.init(n, a);
});
function hv(n) {
  return /* @__PURE__ */ xm(Ko, n);
}
var Fo = /* @__PURE__ */ z("ZodCIDRv4", (n, a) => {
  PS.init(n, a), Me.init(n, a);
});
function gv(n) {
  return /* @__PURE__ */ Em(Fo, n);
}
var Wo = /* @__PURE__ */ z("ZodCIDRv6", (n, a) => {
  JS.init(n, a), Me.init(n, a);
});
function yv(n) {
  return /* @__PURE__ */ Om(Wo, n);
}
var el = /* @__PURE__ */ z("ZodBase64", (n, a) => {
  GS.init(n, a), Me.init(n, a);
});
function _v(n) {
  return /* @__PURE__ */ Um(el, n);
}
var tl = /* @__PURE__ */ z("ZodBase64URL", (n, a) => {
  VS.init(n, a), Me.init(n, a);
});
function bv(n) {
  return /* @__PURE__ */ Dm(tl, n);
}
var nl = /* @__PURE__ */ z("ZodE164", (n, a) => {
  QS.init(n, a), Me.init(n, a);
});
function Sv(n) {
  return /* @__PURE__ */ Am(nl, n);
}
var il = /* @__PURE__ */ z("ZodJWT", (n, a) => {
  KS.init(n, a), Me.init(n, a);
});
function $v(n) {
  return /* @__PURE__ */ jm(il, n);
}
var ta = /* @__PURE__ */ z("ZodCustomStringFormat", (n, a) => {
  FS.init(n, a), Me.init(n, a);
});
function zv(n, a, o = {}) {
  return /* @__PURE__ */ Mo(ta, n, a, o);
}
function kv(n) {
  return /* @__PURE__ */ Mo(ta, "hostname", Lb, n);
}
function wv(n) {
  return /* @__PURE__ */ Mo(ta, "hex", aS, n);
}
function Tv(n, a) {
  const o = `${n}_${a?.enc ?? "hex"}`, c = oc[o];
  if (!c) throw new Error(`Unrecognized hash format: ${o}`);
  return /* @__PURE__ */ Mo(ta, o, c, a);
}
var ar = /* @__PURE__ */ z("ZodNumber", (n, a) => {
  am.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (c, i, u) => U0(n, c, i, u), qo(n, "ZodNumber", {
    gt(c, i) {
      return this.check(/* @__PURE__ */ Vn(c, i));
    },
    gte(c, i) {
      return this.check(/* @__PURE__ */ xt(c, i));
    },
    min(c, i) {
      return this.check(/* @__PURE__ */ xt(c, i));
    },
    lt(c, i) {
      return this.check(/* @__PURE__ */ Yn(c, i));
    },
    lte(c, i) {
      return this.check(/* @__PURE__ */ Yt(c, i));
    },
    max(c, i) {
      return this.check(/* @__PURE__ */ Yt(c, i));
    },
    int(c) {
      return this.check(po(c));
    },
    safe(c) {
      return this.check(po(c));
    },
    positive(c) {
      return this.check(/* @__PURE__ */ Vn(0, c));
    },
    nonnegative(c) {
      return this.check(/* @__PURE__ */ xt(0, c));
    },
    negative(c) {
      return this.check(/* @__PURE__ */ Yn(0, c));
    },
    nonpositive(c) {
      return this.check(/* @__PURE__ */ Yt(0, c));
    },
    multipleOf(c, i) {
      return this.check(/* @__PURE__ */ Qi(c, i));
    },
    step(c, i) {
      return this.check(/* @__PURE__ */ Qi(c, i));
    },
    finite() {
      return this;
    }
  });
  const o = n._zod.bag;
  n.minValue = Math.max(o.minimum ?? Number.NEGATIVE_INFINITY, o.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, n.maxValue = Math.min(o.maximum ?? Number.POSITIVE_INFINITY, o.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, n.isInt = (o.format ?? "").includes("int") || Number.isSafeInteger(o.multipleOf ?? 0.5), n.isFinite = !0, n.format = o.format ?? null;
});
function re(n) {
  return /* @__PURE__ */ X$(ar, n);
}
var $i = /* @__PURE__ */ z("ZodNumberFormat", (n, a) => {
  WS.init(n, a), ar.init(n, a);
});
function po(n) {
  return /* @__PURE__ */ F$($i, n);
}
function xv(n) {
  return /* @__PURE__ */ W$($i, n);
}
function Ev(n) {
  return /* @__PURE__ */ e0($i, n);
}
function Ov(n) {
  return /* @__PURE__ */ t0($i, n);
}
function Uv(n) {
  return /* @__PURE__ */ n0($i, n);
}
var rr = /* @__PURE__ */ z("ZodBoolean", (n, a) => {
  rm.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => D0(n, o, c, i);
});
function De(n) {
  return /* @__PURE__ */ i0(rr, n);
}
var or = /* @__PURE__ */ z("ZodBigInt", (n, a) => {
  om.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (c, i, u) => A0(n, c, i, u), n.gte = (c, i) => n.check(/* @__PURE__ */ xt(c, i)), n.min = (c, i) => n.check(/* @__PURE__ */ xt(c, i)), n.gt = (c, i) => n.check(/* @__PURE__ */ Vn(c, i)), n.gte = (c, i) => n.check(/* @__PURE__ */ xt(c, i)), n.min = (c, i) => n.check(/* @__PURE__ */ xt(c, i)), n.lt = (c, i) => n.check(/* @__PURE__ */ Yn(c, i)), n.lte = (c, i) => n.check(/* @__PURE__ */ Yt(c, i)), n.max = (c, i) => n.check(/* @__PURE__ */ Yt(c, i)), n.positive = (c) => n.check(/* @__PURE__ */ Vn(BigInt(0), c)), n.negative = (c) => n.check(/* @__PURE__ */ Yn(BigInt(0), c)), n.nonpositive = (c) => n.check(/* @__PURE__ */ Yt(BigInt(0), c)), n.nonnegative = (c) => n.check(/* @__PURE__ */ xt(BigInt(0), c)), n.multipleOf = (c, i) => n.check(/* @__PURE__ */ Qi(c, i));
  const o = n._zod.bag;
  n.minValue = o.minimum ?? null, n.maxValue = o.maximum ?? null, n.format = o.format ?? null;
});
function Dv(n) {
  return /* @__PURE__ */ r0(or, n);
}
var al = /* @__PURE__ */ z("ZodBigIntFormat", (n, a) => {
  e$.init(n, a), or.init(n, a);
});
function Av(n) {
  return /* @__PURE__ */ l0(al, n);
}
function jv(n) {
  return /* @__PURE__ */ u0(al, n);
}
var bc = /* @__PURE__ */ z("ZodSymbol", (n, a) => {
  t$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => j0(n, o, c, i);
});
function Zv(n) {
  return /* @__PURE__ */ c0(bc, n);
}
var Sc = /* @__PURE__ */ z("ZodUndefined", (n, a) => {
  n$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => N0(n, o, c, i);
});
function Qa(n) {
  return /* @__PURE__ */ s0(Sc, n);
}
var $c = /* @__PURE__ */ z("ZodNull", (n, a) => {
  i$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => Z0(n, o, c, i);
});
function rl(n) {
  return /* @__PURE__ */ d0($c, n);
}
var zc = /* @__PURE__ */ z("ZodAny", (n, a) => {
  a$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => R0(n, o, c, i);
});
function Nv() {
  return /* @__PURE__ */ f0(zc);
}
var kc = /* @__PURE__ */ z("ZodUnknown", (n, a) => {
  r$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => M0(n, o, c, i);
});
function ze() {
  return /* @__PURE__ */ m0(kc);
}
var wc = /* @__PURE__ */ z("ZodNever", (n, a) => {
  o$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => C0(n, o, c, i);
});
function Xi(n) {
  return /* @__PURE__ */ v0(wc, n);
}
var Tc = /* @__PURE__ */ z("ZodVoid", (n, a) => {
  l$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => I0(n, o, c, i);
});
function Iv(n) {
  return /* @__PURE__ */ p0(Tc, n);
}
var ol = /* @__PURE__ */ z("ZodDate", (n, a) => {
  u$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (c, i, u) => q0(n, c, i, u), n.min = (c, i) => n.check(/* @__PURE__ */ xt(c, i)), n.max = (c, i) => n.check(/* @__PURE__ */ Yt(c, i));
  const o = n._zod.bag;
  n.minDate = o.minimum ? new Date(o.minimum) : null, n.maxDate = o.maximum ? new Date(o.maximum) : null;
});
function Cv(n) {
  return /* @__PURE__ */ h0(ol, n);
}
var xc = /* @__PURE__ */ z("ZodArray", (n, a) => {
  c$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => F0(n, o, c, i), n.element = a.element, qo(n, "ZodArray", {
    min(o, c) {
      return this.check(/* @__PURE__ */ bi(o, c));
    },
    nonempty(o) {
      return this.check(/* @__PURE__ */ bi(1, o));
    },
    max(o, c) {
      return this.check(/* @__PURE__ */ er(o, c));
    },
    length(o, c) {
      return this.check(/* @__PURE__ */ tr(o, c));
    },
    unwrap() {
      return this.element;
    }
  });
});
function ne(n, a) {
  return /* @__PURE__ */ _0(xc, n, a);
}
function Rv(n) {
  const a = n._zod.def.shape;
  return bt(Object.keys(a));
}
var lr = /* @__PURE__ */ z("ZodObject", (n, a) => {
  m$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => W0(n, o, c, i), se(n, "shape", () => a.shape), qo(n, "ZodObject", {
    keyof() {
      return bt(Object.keys(this._zod.def.shape));
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
        catchall: ze()
      });
    },
    loose() {
      return this.clone({
        ...this._zod.def,
        catchall: ze()
      });
    },
    strict() {
      return this.clone({
        ...this._zod.def,
        catchall: Xi()
      });
    },
    strip() {
      return this.clone({
        ...this._zod.def,
        catchall: void 0
      });
    },
    extend(o) {
      return vb(this, o);
    },
    safeExtend(o) {
      return pb(this, o);
    },
    merge(o) {
      return hb(this, o);
    },
    pick(o) {
      return fb(this, o);
    },
    omit(o) {
      return mb(this, o);
    },
    partial(...o) {
      return gb(cl, this, o[0]);
    },
    required(...o) {
      return yb(sl, this, o[0]);
    }
  });
});
function D(n, a) {
  return new lr({
    type: "object",
    shape: n ?? {},
    ...I(a)
  });
}
function Mv(n, a) {
  return new lr({
    type: "object",
    shape: n,
    catchall: Xi(),
    ...I(a)
  });
}
function _t(n, a) {
  return new lr({
    type: "object",
    shape: n,
    catchall: ze(),
    ...I(a)
  });
}
var ur = /* @__PURE__ */ z("ZodUnion", (n, a) => {
  lc.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => Nm(n, o, c, i), n.options = a.options;
});
function de(n, a) {
  return new ur({
    type: "union",
    options: n,
    ...I(a)
  });
}
var Ec = /* @__PURE__ */ z("ZodXor", (n, a) => {
  ur.init(n, a), v$.init(n, a), n._zod.processJSONSchema = (o, c, i) => Nm(n, o, c, i), n.options = a.options;
});
function qv(n, a) {
  return new Ec({
    type: "union",
    options: n,
    inclusive: !1,
    ...I(a)
  });
}
var Oc = /* @__PURE__ */ z("ZodDiscriminatedUnion", (n, a) => {
  ur.init(n, a), p$.init(n, a);
});
function ll(n, a, o) {
  return new Oc({
    type: "union",
    options: a,
    discriminator: n,
    ...I(o)
  });
}
var Uc = /* @__PURE__ */ z("ZodIntersection", (n, a) => {
  h$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => ez(n, o, c, i);
});
function cr(n, a) {
  return new Uc({
    type: "intersection",
    left: n,
    right: a
  });
}
var Dc = /* @__PURE__ */ z("ZodTuple", (n, a) => {
  lm.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => tz(n, o, c, i), n.rest = (o) => n.clone({
    ...n._zod.def,
    rest: o
  });
});
function Ac(n, a, o) {
  const c = a instanceof ae, i = c ? o : a;
  return new Dc({
    type: "tuple",
    items: n,
    rest: c ? a : null,
    ...I(i)
  });
}
var Ki = /* @__PURE__ */ z("ZodRecord", (n, a) => {
  g$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => nz(n, o, c, i), n.keyType = a.keyType, n.valueType = a.valueType;
});
function be(n, a, o) {
  return !a || !a._zod ? new Ki({
    type: "record",
    keyType: T(),
    valueType: n,
    ...I(a)
  }) : new Ki({
    type: "record",
    keyType: n,
    valueType: a,
    ...I(o)
  });
}
function Hv(n, a, o) {
  const c = Qt(n);
  return c._zod.values = void 0, new Ki({
    type: "record",
    keyType: c,
    valueType: a,
    ...I(o)
  });
}
function Lv(n, a, o) {
  return new Ki({
    type: "record",
    keyType: n,
    valueType: a,
    mode: "loose",
    ...I(o)
  });
}
var jc = /* @__PURE__ */ z("ZodMap", (n, a) => {
  y$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => X0(n, o, c, i), n.keyType = a.keyType, n.valueType = a.valueType, n.min = (...o) => n.check(/* @__PURE__ */ Qn(...o)), n.nonempty = (o) => n.check(/* @__PURE__ */ Qn(1, o)), n.max = (...o) => n.check(/* @__PURE__ */ ea(...o)), n.size = (...o) => n.check(/* @__PURE__ */ Wa(...o));
});
function Bv(n, a, o) {
  return new jc({
    type: "map",
    keyType: n,
    valueType: a,
    ...I(o)
  });
}
var Zc = /* @__PURE__ */ z("ZodSet", (n, a) => {
  _$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => K0(n, o, c, i), n.min = (...o) => n.check(/* @__PURE__ */ Qn(...o)), n.nonempty = (o) => n.check(/* @__PURE__ */ Qn(1, o)), n.max = (...o) => n.check(/* @__PURE__ */ ea(...o)), n.size = (...o) => n.check(/* @__PURE__ */ Wa(...o));
});
function Pv(n, a) {
  return new Zc({
    type: "set",
    valueType: n,
    ...I(a)
  });
}
var Fi = /* @__PURE__ */ z("ZodEnum", (n, a) => {
  b$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (c, i, u) => H0(n, c, i, u), n.enum = a.entries, n.options = Object.values(a.entries);
  const o = new Set(Object.keys(a.entries));
  n.extract = (c, i) => {
    const u = {};
    for (const d of c) if (o.has(d)) u[d] = a.entries[d];
    else throw new Error(`Key ${d} not found in enum`);
    return new Fi({
      ...a,
      checks: [],
      ...I(i),
      entries: u
    });
  }, n.exclude = (c, i) => {
    const u = { ...a.entries };
    for (const d of c) if (o.has(d)) delete u[d];
    else throw new Error(`Key ${d} not found in enum`);
    return new Fi({
      ...a,
      checks: [],
      ...I(i),
      entries: u
    });
  };
});
function bt(n, a) {
  return new Fi({
    type: "enum",
    entries: Array.isArray(n) ? Object.fromEntries(n.map((o) => [o, o])) : n,
    ...I(a)
  });
}
function Jv(n, a) {
  return new Fi({
    type: "enum",
    entries: n,
    ...I(a)
  });
}
var Nc = /* @__PURE__ */ z("ZodLiteral", (n, a) => {
  S$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => L0(n, o, c, i), n.values = new Set(a.values), Object.defineProperty(n, "value", { get() {
    if (a.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
    return a.values[0];
  } });
});
function w(n, a) {
  return new Nc({
    type: "literal",
    values: Array.isArray(n) ? n : [n],
    ...I(a)
  });
}
var Ic = /* @__PURE__ */ z("ZodFile", (n, a) => {
  $$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => J0(n, o, c, i), n.min = (o, c) => n.check(/* @__PURE__ */ Qn(o, c)), n.max = (o, c) => n.check(/* @__PURE__ */ ea(o, c)), n.mime = (o, c) => n.check(/* @__PURE__ */ jo(Array.isArray(o) ? o : [o], c));
});
function Gv(n) {
  return /* @__PURE__ */ b0(Ic, n);
}
var Cc = /* @__PURE__ */ z("ZodTransform", (n, a) => {
  z$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => Q0(n, o, c, i), n._zod.parse = (o, c) => {
    if (c.direction === "backward") throw new Wu(n.constructor.name);
    o.addIssue = (u) => {
      if (typeof u == "string") o.issues.push(Ba(u, o.value, a));
      else {
        const d = u;
        d.fatal && (d.continue = !1), d.code ?? (d.code = "custom"), d.input ?? (d.input = o.value), d.inst ?? (d.inst = n), o.issues.push(Ba(d));
      }
    };
    const i = a.transform(o.value, o);
    return i instanceof Promise ? i.then((u) => (o.value = u, o.fallback = !0, o)) : (o.value = i, o.fallback = !0, o);
  };
});
function ul(n) {
  return new Cc({
    type: "transform",
    transform: n
  });
}
var cl = /* @__PURE__ */ z("ZodOptional", (n, a) => {
  um.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => Im(n, o, c, i), n.unwrap = () => n._zod.def.innerType;
});
function He(n) {
  return new cl({
    type: "optional",
    innerType: n
  });
}
var Rc = /* @__PURE__ */ z("ZodExactOptional", (n, a) => {
  k$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => Im(n, o, c, i), n.unwrap = () => n._zod.def.innerType;
});
function Mc(n) {
  return new Rc({
    type: "optional",
    innerType: n
  });
}
var qc = /* @__PURE__ */ z("ZodNullable", (n, a) => {
  w$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => iz(n, o, c, i), n.unwrap = () => n._zod.def.innerType;
});
function Xa(n) {
  return new qc({
    type: "nullable",
    innerType: n
  });
}
function Yv(n) {
  return He(Xa(n));
}
var Hc = /* @__PURE__ */ z("ZodDefault", (n, a) => {
  T$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => rz(n, o, c, i), n.unwrap = () => n._zod.def.innerType, n.removeDefault = n.unwrap;
});
function Lc(n, a) {
  return new Hc({
    type: "default",
    innerType: n,
    get defaultValue() {
      return typeof a == "function" ? a() : tc(a);
    }
  });
}
var Bc = /* @__PURE__ */ z("ZodPrefault", (n, a) => {
  x$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => oz(n, o, c, i), n.unwrap = () => n._zod.def.innerType;
});
function Pc(n, a) {
  return new Bc({
    type: "prefault",
    innerType: n,
    get defaultValue() {
      return typeof a == "function" ? a() : tc(a);
    }
  });
}
var sl = /* @__PURE__ */ z("ZodNonOptional", (n, a) => {
  E$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => az(n, o, c, i), n.unwrap = () => n._zod.def.innerType;
});
function Jc(n, a) {
  return new sl({
    type: "nonoptional",
    innerType: n,
    ...I(a)
  });
}
var Gc = /* @__PURE__ */ z("ZodSuccess", (n, a) => {
  O$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => G0(n, o, c, i), n.unwrap = () => n._zod.def.innerType;
});
function Vv(n) {
  return new Gc({
    type: "success",
    innerType: n
  });
}
var Yc = /* @__PURE__ */ z("ZodCatch", (n, a) => {
  U$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => lz(n, o, c, i), n.unwrap = () => n._zod.def.innerType, n.removeCatch = n.unwrap;
});
function Vc(n, a) {
  return new Yc({
    type: "catch",
    innerType: n,
    catchValue: typeof a == "function" ? a : () => a
  });
}
var Qc = /* @__PURE__ */ z("ZodNaN", (n, a) => {
  D$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => B0(n, o, c, i);
});
function Qv(n) {
  return /* @__PURE__ */ y0(Qc, n);
}
var sr = /* @__PURE__ */ z("ZodPipe", (n, a) => {
  cm.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => uz(n, o, c, i), n.in = a.in, n.out = a.out;
});
function ho(n, a) {
  return new sr({
    type: "pipe",
    in: n,
    out: a
  });
}
var dr = /* @__PURE__ */ z("ZodCodec", (n, a) => {
  sr.init(n, a), sm.init(n, a);
});
function Xv(n, a, o) {
  return new dr({
    type: "pipe",
    in: n,
    out: a,
    transform: o.decode,
    reverseTransform: o.encode
  });
}
function Kv(n) {
  const a = n._zod.def;
  return new dr({
    type: "pipe",
    in: a.out,
    out: a.in,
    transform: a.reverseTransform,
    reverseTransform: a.transform
  });
}
var Xc = /* @__PURE__ */ z("ZodPreprocess", (n, a) => {
  sr.init(n, a), A$.init(n, a);
}), Kc = /* @__PURE__ */ z("ZodReadonly", (n, a) => {
  j$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => cz(n, o, c, i), n.unwrap = () => n._zod.def.innerType;
});
function Fc(n) {
  return new Kc({
    type: "readonly",
    innerType: n
  });
}
var Wc = /* @__PURE__ */ z("ZodTemplateLiteral", (n, a) => {
  Z$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => P0(n, o, c, i);
});
function Fv(n, a) {
  return new Wc({
    type: "template_literal",
    parts: n,
    ...I(a)
  });
}
var es = /* @__PURE__ */ z("ZodLazy", (n, a) => {
  C$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => dz(n, o, c, i), n.unwrap = () => n._zod.def.getter();
});
function ts(n) {
  return new es({
    type: "lazy",
    getter: n
  });
}
var ns = /* @__PURE__ */ z("ZodPromise", (n, a) => {
  I$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => sz(n, o, c, i), n.unwrap = () => n._zod.def.innerType;
});
function Wv(n) {
  return new ns({
    type: "promise",
    innerType: n
  });
}
var is = /* @__PURE__ */ z("ZodFunction", (n, a) => {
  N$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => V0(n, o, c, i);
});
function Ka(n) {
  return new is({
    type: "function",
    input: Array.isArray(n?.input) ? Ac(n?.input) : n?.input ?? ne(ze()),
    output: n?.output ?? ze()
  });
}
var fr = /* @__PURE__ */ z("ZodCustom", (n, a) => {
  R$.init(n, a), oe.init(n, a), n._zod.processJSONSchema = (o, c, i) => Y0(n, o, c, i);
});
function ep(n) {
  const a = new Ve({ check: "custom" });
  return a._zod.check = n, a;
}
function as(n, a) {
  return /* @__PURE__ */ S0(fr, n ?? (() => !0), a);
}
function rs(n, a = {}) {
  return /* @__PURE__ */ $0(fr, n, a);
}
function os(n, a) {
  return /* @__PURE__ */ z0(n, a);
}
var tp = w0, np = T0;
function ip(n, a = {}) {
  const o = new fr({
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
var ap = (...n) => /* @__PURE__ */ x0({
  Codec: dr,
  Boolean: rr,
  String: nr
}, ...n);
function rp(n) {
  const a = ts(() => de([
    T(n),
    re(),
    De(),
    rl(),
    ne(a),
    be(T(), a)
  ]));
  return a;
}
function dl(n, a) {
  return new Xc({
    type: "pipe",
    in: ul(n),
    out: a
  });
}
var _z = {
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
function bz(n) {
  ct({ customError: n });
}
function Sz() {
  return ct().customError;
}
var Xu;
Xu || (Xu = {});
var B = {
  ...YT,
  ...GT,
  iso: Mm
}, VT = /* @__PURE__ */ new Set([
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
function QT(n, a) {
  const o = n.$schema;
  return o === "https://json-schema.org/draft/2020-12/schema" ? "draft-2020-12" : o === "http://json-schema.org/draft-07/schema#" ? "draft-7" : o === "http://json-schema.org/draft-04/schema#" ? "draft-4" : a ?? "draft-2020-12";
}
function XT(n, a) {
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
function $z(n, a) {
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
    const u = zt(XT(i, a), a);
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
    const i = o.map((u) => $z({
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
      for (const [y, h] of Object.entries(u)) {
        const g = zt(h, a);
        i[y] = d.has(y) ? g : g.optional();
      }
      if (n.propertyNames) {
        const y = zt(n.propertyNames, a), h = n.additionalProperties && typeof n.additionalProperties == "object" ? zt(n.additionalProperties, a) : B.any();
        if (Object.keys(i).length === 0) {
          c = B.record(y, h);
          break;
        }
        const g = B.object(i).passthrough(), E = B.looseRecord(y, h);
        c = B.intersection(g, E);
        break;
      }
      if (n.patternProperties) {
        const y = n.patternProperties, h = Object.keys(y), g = [];
        for (const k of h) {
          const M = zt(y[k], a), F = B.string().regex(new RegExp(k));
          g.push(B.looseRecord(F, M));
        }
        const E = [];
        if (Object.keys(i).length > 0 && E.push(B.object(i).passthrough()), E.push(...g), E.length === 0) c = B.object({}).passthrough();
        else if (E.length === 1) c = E[0];
        else {
          let k = B.intersection(E[0], E[1]);
          for (let M = 2; M < E.length; M++) k = B.intersection(k, E[M]);
          c = k;
        }
        break;
      }
      const m = B.object(i);
      n.additionalProperties === !1 ? c = m.strict() : typeof n.additionalProperties == "object" ? c = m.catchall(zt(n.additionalProperties, a)) : c = m.passthrough();
      break;
    }
    case "array": {
      const i = n.prefixItems, u = n.items;
      if (i && Array.isArray(i)) {
        const d = i.map((y) => zt(y, a)), m = u && typeof u == "object" && !Array.isArray(u) ? zt(u, a) : void 0;
        m ? c = B.tuple(d).rest(m) : c = B.tuple(d), typeof n.minItems == "number" && (c = c.check(B.minLength(n.minItems))), typeof n.maxItems == "number" && (c = c.check(B.maxLength(n.maxItems)));
      } else if (Array.isArray(u)) {
        const d = u.map((y) => zt(y, a)), m = n.additionalItems && typeof n.additionalItems == "object" ? zt(n.additionalItems, a) : void 0;
        m ? c = B.tuple(d).rest(m) : c = B.tuple(d), typeof n.minItems == "number" && (c = c.check(B.minLength(n.minItems))), typeof n.maxItems == "number" && (c = c.check(B.maxLength(n.maxItems)));
      } else if (u !== void 0) {
        const d = zt(u, a);
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
function zt(n, a) {
  if (typeof n == "boolean") return n ? B.any() : B.never();
  let o = $z(n, a);
  const c = n.type || n.enum !== void 0 || n.const !== void 0;
  if (n.anyOf && Array.isArray(n.anyOf)) {
    const u = n.anyOf.map((m) => zt(m, a)), d = B.union(u);
    o = c ? B.intersection(o, d) : d;
  }
  if (n.oneOf && Array.isArray(n.oneOf)) {
    const u = n.oneOf.map((m) => zt(m, a)), d = B.xor(u);
    o = c ? B.intersection(o, d) : d;
  }
  if (n.allOf && Array.isArray(n.allOf)) if (n.allOf.length === 0) o = c ? o : B.any();
  else {
    let u = c ? o : zt(n.allOf[0], a);
    const d = c ? 0 : 1;
    for (let m = d; m < n.allOf.length; m++) u = B.intersection(u, zt(n.allOf[m], a));
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
  for (const u of Object.keys(n)) VT.has(u) || (i[u] = n[u]);
  return Object.keys(i).length > 0 && a.registry.add(o, i), n.description && (o = o.describe(n.description)), o;
}
function zz(n, a) {
  if (typeof n == "boolean") return n ? B.any() : B.never();
  let o;
  try {
    o = JSON.parse(JSON.stringify(n));
  } catch {
    throw new Error("fromJSONSchema input is not valid JSON (possibly cyclic); use $defs/$ref for recursive schemas");
  }
  const c = {
    version: QT(o, a?.defaultTarget),
    defs: o.$defs || o.definitions || {},
    refs: /* @__PURE__ */ new Map(),
    processing: /* @__PURE__ */ new Set(),
    rootSchema: o,
    registry: a?.registry ?? Gt
  };
  return zt(o, c);
}
var kz = /* @__PURE__ */ _n({
  bigint: () => ex,
  boolean: () => WT,
  date: () => tx,
  number: () => FT,
  string: () => KT
});
function KT(n) {
  return /* @__PURE__ */ P$(nr, n);
}
function FT(n) {
  return /* @__PURE__ */ K$(ar, n);
}
function WT(n) {
  return /* @__PURE__ */ a0(rr, n);
}
function ex(n) {
  return /* @__PURE__ */ o0(or, n);
}
function tx(n) {
  return /* @__PURE__ */ g0(ol, n);
}
var nx = /* @__PURE__ */ _n({
  $brand: () => If,
  $input: () => mm,
  $output: () => fm,
  NEVER: () => Nf,
  TimePrecision: () => Zm,
  ZodAny: () => zc,
  ZodArray: () => xc,
  ZodBase64: () => el,
  ZodBase64URL: () => tl,
  ZodBigInt: () => or,
  ZodBigIntFormat: () => al,
  ZodBoolean: () => rr,
  ZodCIDRv4: () => Fo,
  ZodCIDRv6: () => Wo,
  ZodCUID: () => Jo,
  ZodCUID2: () => Go,
  ZodCatch: () => Yc,
  ZodCodec: () => dr,
  ZodCustom: () => fr,
  ZodCustomStringFormat: () => ta,
  ZodDate: () => ol,
  ZodDefault: () => Hc,
  ZodDiscriminatedUnion: () => Oc,
  ZodE164: () => nl,
  ZodEmail: () => Lo,
  ZodEmoji: () => Bo,
  ZodEnum: () => Fi,
  ZodError: () => yz,
  ZodExactOptional: () => Rc,
  ZodFile: () => Ic,
  ZodFirstPartyTypeKind: () => Xu,
  ZodFunction: () => is,
  ZodGUID: () => Va,
  ZodIPv4: () => Xo,
  ZodIPv6: () => Ko,
  ZodISODate: () => hc,
  ZodISODateTime: () => pc,
  ZodISODuration: () => yc,
  ZodISOTime: () => gc,
  ZodIntersection: () => Uc,
  ZodIssueCode: () => _z,
  ZodJWT: () => il,
  ZodKSUID: () => Qo,
  ZodLazy: () => es,
  ZodLiteral: () => Nc,
  ZodMAC: () => _c,
  ZodMap: () => jc,
  ZodNaN: () => Qc,
  ZodNanoID: () => Po,
  ZodNever: () => wc,
  ZodNonOptional: () => sl,
  ZodNull: () => $c,
  ZodNullable: () => qc,
  ZodNumber: () => ar,
  ZodNumberFormat: () => $i,
  ZodObject: () => lr,
  ZodOptional: () => cl,
  ZodPipe: () => sr,
  ZodPrefault: () => Bc,
  ZodPreprocess: () => Xc,
  ZodPromise: () => ns,
  ZodReadonly: () => Kc,
  ZodRealError: () => Nt,
  ZodRecord: () => Ki,
  ZodSet: () => Zc,
  ZodString: () => nr,
  ZodStringFormat: () => Me,
  ZodSuccess: () => Gc,
  ZodSymbol: () => bc,
  ZodTemplateLiteral: () => Wc,
  ZodTransform: () => Cc,
  ZodTuple: () => Dc,
  ZodType: () => oe,
  ZodULID: () => Yo,
  ZodURL: () => ir,
  ZodUUID: () => yn,
  ZodUndefined: () => Sc,
  ZodUnion: () => ur,
  ZodUnknown: () => kc,
  ZodVoid: () => Tc,
  ZodXID: () => Vo,
  ZodXor: () => Ec,
  _ZodString: () => Ho,
  _default: () => Lc,
  _function: () => Ka,
  any: () => Nv,
  array: () => ne,
  base64: () => _v,
  base64url: () => bv,
  bigint: () => Dv,
  boolean: () => De,
  catch: () => Vc,
  check: () => ep,
  cidrv4: () => gv,
  cidrv6: () => yv,
  clone: () => Qt,
  codec: () => Xv,
  coerce: () => kz,
  config: () => ct,
  core: () => fz,
  cuid: () => cv,
  cuid2: () => sv,
  custom: () => as,
  date: () => Cv,
  decode: () => Gm,
  decodeAsync: () => Vm,
  describe: () => tp,
  discriminatedUnion: () => ll,
  e164: () => Sv,
  email: () => Wm,
  emoji: () => lv,
  encode: () => Jm,
  encodeAsync: () => Ym,
  endsWith: () => Ao,
  enum: () => bt,
  exactOptional: () => Mc,
  file: () => Gv,
  flattenError: () => ac,
  float32: () => xv,
  float64: () => Ev,
  formatError: () => rc,
  fromJSONSchema: () => zz,
  function: () => Ka,
  getErrorMap: () => Sz,
  globalRegistry: () => Gt,
  gt: () => Vn,
  gte: () => xt,
  guid: () => ev,
  hash: () => Tv,
  hex: () => wv,
  hostname: () => kv,
  httpUrl: () => ov,
  includes: () => Uo,
  instanceof: () => ip,
  int: () => po,
  int32: () => Ov,
  int64: () => Av,
  intersection: () => cr,
  invertCodec: () => Kv,
  ipv4: () => vv,
  ipv6: () => hv,
  iso: () => Mm,
  json: () => rp,
  jwt: () => $v,
  keyof: () => Rv,
  ksuid: () => mv,
  lazy: () => ts,
  length: () => tr,
  literal: () => w,
  locales: () => dm,
  looseObject: () => _t,
  looseRecord: () => Lv,
  lowercase: () => Eo,
  lt: () => Yn,
  lte: () => Yt,
  mac: () => pv,
  map: () => Bv,
  maxLength: () => er,
  maxSize: () => ea,
  meta: () => np,
  mime: () => jo,
  minLength: () => bi,
  minSize: () => Qn,
  multipleOf: () => Qi,
  nan: () => Qv,
  nanoid: () => uv,
  nativeEnum: () => Jv,
  negative: () => dc,
  never: () => Xi,
  nonnegative: () => mc,
  nonoptional: () => Jc,
  nonpositive: () => fc,
  normalize: () => Zo,
  null: () => rl,
  nullable: () => Xa,
  nullish: () => Yv,
  number: () => re,
  object: () => D,
  optional: () => He,
  overwrite: () => Tn,
  parse: () => Hm,
  parseAsync: () => Lm,
  partialRecord: () => Hv,
  pipe: () => ho,
  positive: () => sc,
  prefault: () => Pc,
  preprocess: () => dl,
  prettifyError: () => Lf,
  promise: () => Wv,
  property: () => vc,
  readonly: () => Fc,
  record: () => be,
  refine: () => rs,
  regex: () => xo,
  regexes: () => oc,
  registry: () => uc,
  safeDecode: () => Xm,
  safeDecodeAsync: () => Fm,
  safeEncode: () => Qm,
  safeEncodeAsync: () => Km,
  safeParse: () => Bm,
  safeParseAsync: () => Pm,
  set: () => Pv,
  setErrorMap: () => bz,
  size: () => Wa,
  slugify: () => Ro,
  startsWith: () => Do,
  strictObject: () => Mv,
  string: () => T,
  stringFormat: () => zv,
  stringbool: () => ap,
  success: () => Vv,
  superRefine: () => os,
  symbol: () => Zv,
  templateLiteral: () => Fv,
  toJSONSchema: () => Cm,
  toLowerCase: () => Io,
  toUpperCase: () => Co,
  transform: () => ul,
  treeifyError: () => Hf,
  trim: () => No,
  tuple: () => Ac,
  uint32: () => Uv,
  uint64: () => jv,
  ulid: () => dv,
  undefined: () => Qa,
  union: () => de,
  unknown: () => ze,
  uppercase: () => Oo,
  url: () => rv,
  util: () => Cf,
  uuid: () => tv,
  uuidv4: () => nv,
  uuidv6: () => iv,
  uuidv7: () => av,
  void: () => Iv,
  xid: () => fv,
  xor: () => qv
});
ct(M$());
var ix = /* @__PURE__ */ _n({
  $brand: () => If,
  $input: () => mm,
  $output: () => fm,
  NEVER: () => Nf,
  TimePrecision: () => Zm,
  ZodAny: () => zc,
  ZodArray: () => xc,
  ZodBase64: () => el,
  ZodBase64URL: () => tl,
  ZodBigInt: () => or,
  ZodBigIntFormat: () => al,
  ZodBoolean: () => rr,
  ZodCIDRv4: () => Fo,
  ZodCIDRv6: () => Wo,
  ZodCUID: () => Jo,
  ZodCUID2: () => Go,
  ZodCatch: () => Yc,
  ZodCodec: () => dr,
  ZodCustom: () => fr,
  ZodCustomStringFormat: () => ta,
  ZodDate: () => ol,
  ZodDefault: () => Hc,
  ZodDiscriminatedUnion: () => Oc,
  ZodE164: () => nl,
  ZodEmail: () => Lo,
  ZodEmoji: () => Bo,
  ZodEnum: () => Fi,
  ZodError: () => yz,
  ZodExactOptional: () => Rc,
  ZodFile: () => Ic,
  ZodFirstPartyTypeKind: () => Xu,
  ZodFunction: () => is,
  ZodGUID: () => Va,
  ZodIPv4: () => Xo,
  ZodIPv6: () => Ko,
  ZodISODate: () => hc,
  ZodISODateTime: () => pc,
  ZodISODuration: () => yc,
  ZodISOTime: () => gc,
  ZodIntersection: () => Uc,
  ZodIssueCode: () => _z,
  ZodJWT: () => il,
  ZodKSUID: () => Qo,
  ZodLazy: () => es,
  ZodLiteral: () => Nc,
  ZodMAC: () => _c,
  ZodMap: () => jc,
  ZodNaN: () => Qc,
  ZodNanoID: () => Po,
  ZodNever: () => wc,
  ZodNonOptional: () => sl,
  ZodNull: () => $c,
  ZodNullable: () => qc,
  ZodNumber: () => ar,
  ZodNumberFormat: () => $i,
  ZodObject: () => lr,
  ZodOptional: () => cl,
  ZodPipe: () => sr,
  ZodPrefault: () => Bc,
  ZodPreprocess: () => Xc,
  ZodPromise: () => ns,
  ZodReadonly: () => Kc,
  ZodRealError: () => Nt,
  ZodRecord: () => Ki,
  ZodSet: () => Zc,
  ZodString: () => nr,
  ZodStringFormat: () => Me,
  ZodSuccess: () => Gc,
  ZodSymbol: () => bc,
  ZodTemplateLiteral: () => Wc,
  ZodTransform: () => Cc,
  ZodTuple: () => Dc,
  ZodType: () => oe,
  ZodULID: () => Yo,
  ZodURL: () => ir,
  ZodUUID: () => yn,
  ZodUndefined: () => Sc,
  ZodUnion: () => ur,
  ZodUnknown: () => kc,
  ZodVoid: () => Tc,
  ZodXID: () => Vo,
  ZodXor: () => Ec,
  _ZodString: () => Ho,
  _default: () => Lc,
  _function: () => Ka,
  any: () => Nv,
  array: () => ne,
  base64: () => _v,
  base64url: () => bv,
  bigint: () => Dv,
  boolean: () => De,
  catch: () => Vc,
  check: () => ep,
  cidrv4: () => gv,
  cidrv6: () => yv,
  clone: () => Qt,
  codec: () => Xv,
  coerce: () => kz,
  config: () => ct,
  core: () => fz,
  cuid: () => cv,
  cuid2: () => sv,
  custom: () => as,
  date: () => Cv,
  decode: () => Gm,
  decodeAsync: () => Vm,
  describe: () => tp,
  discriminatedUnion: () => ll,
  e164: () => Sv,
  email: () => Wm,
  emoji: () => lv,
  encode: () => Jm,
  encodeAsync: () => Ym,
  endsWith: () => Ao,
  enum: () => bt,
  exactOptional: () => Mc,
  file: () => Gv,
  flattenError: () => ac,
  float32: () => xv,
  float64: () => Ev,
  formatError: () => rc,
  fromJSONSchema: () => zz,
  function: () => Ka,
  getErrorMap: () => Sz,
  globalRegistry: () => Gt,
  gt: () => Vn,
  gte: () => xt,
  guid: () => ev,
  hash: () => Tv,
  hex: () => wv,
  hostname: () => kv,
  httpUrl: () => ov,
  includes: () => Uo,
  instanceof: () => ip,
  int: () => po,
  int32: () => Ov,
  int64: () => Av,
  intersection: () => cr,
  invertCodec: () => Kv,
  ipv4: () => vv,
  ipv6: () => hv,
  iso: () => Mm,
  json: () => rp,
  jwt: () => $v,
  keyof: () => Rv,
  ksuid: () => mv,
  lazy: () => ts,
  length: () => tr,
  literal: () => w,
  locales: () => dm,
  looseObject: () => _t,
  looseRecord: () => Lv,
  lowercase: () => Eo,
  lt: () => Yn,
  lte: () => Yt,
  mac: () => pv,
  map: () => Bv,
  maxLength: () => er,
  maxSize: () => ea,
  meta: () => np,
  mime: () => jo,
  minLength: () => bi,
  minSize: () => Qn,
  multipleOf: () => Qi,
  nan: () => Qv,
  nanoid: () => uv,
  nativeEnum: () => Jv,
  negative: () => dc,
  never: () => Xi,
  nonnegative: () => mc,
  nonoptional: () => Jc,
  nonpositive: () => fc,
  normalize: () => Zo,
  null: () => rl,
  nullable: () => Xa,
  nullish: () => Yv,
  number: () => re,
  object: () => D,
  optional: () => He,
  overwrite: () => Tn,
  parse: () => Hm,
  parseAsync: () => Lm,
  partialRecord: () => Hv,
  pipe: () => ho,
  positive: () => sc,
  prefault: () => Pc,
  preprocess: () => dl,
  prettifyError: () => Lf,
  promise: () => Wv,
  property: () => vc,
  readonly: () => Fc,
  record: () => be,
  refine: () => rs,
  regex: () => xo,
  regexes: () => oc,
  registry: () => uc,
  safeDecode: () => Xm,
  safeDecodeAsync: () => Fm,
  safeEncode: () => Qm,
  safeEncodeAsync: () => Km,
  safeParse: () => Bm,
  safeParseAsync: () => Pm,
  set: () => Pv,
  setErrorMap: () => bz,
  size: () => Wa,
  slugify: () => Ro,
  startsWith: () => Do,
  strictObject: () => Mv,
  string: () => T,
  stringFormat: () => zv,
  stringbool: () => ap,
  success: () => Vv,
  superRefine: () => os,
  symbol: () => Zv,
  templateLiteral: () => Fv,
  toJSONSchema: () => Cm,
  toLowerCase: () => Io,
  toUpperCase: () => Co,
  transform: () => ul,
  treeifyError: () => Hf,
  trim: () => No,
  tuple: () => Ac,
  uint32: () => Uv,
  uint64: () => jv,
  ulid: () => dv,
  undefined: () => Qa,
  union: () => de,
  unknown: () => ze,
  uppercase: () => Oo,
  url: () => rv,
  util: () => Cf,
  uuid: () => tv,
  uuidv4: () => nv,
  uuidv6: () => iv,
  uuidv7: () => av,
  void: () => Iv,
  xid: () => fv,
  xor: () => qv,
  z: () => nx
}), Ji = "io.modelcontextprotocol/related-task";
var ut = as((n) => n !== null && (typeof n == "object" || typeof n == "function")), wz = de([T(), re().int()]), Tz = T(), HO = _t({
  ttl: re().optional(),
  pollInterval: re().optional()
}), ax = D({ ttl: re().optional() }), rx = D({ taskId: T() }), op = _t({
  progressToken: wz.optional(),
  [Ji]: rx.optional()
}), Kt = D({ _meta: op.optional() }), fl = Kt.extend({ task: ax.optional() }), ox = (n) => fl.safeParse(n).success, St = D({
  method: T(),
  params: Kt.loose().optional()
}), fn = D({ _meta: op.optional() }), mn = D({
  method: T(),
  params: fn.loose().optional()
}), $t = _t({ _meta: op.optional() }), ml = de([T(), re().int()]), xz = D({
  jsonrpc: w("2.0"),
  id: ml,
  ...St.shape
}).strict(), Y_ = (n) => xz.safeParse(n).success, Ez = D({
  jsonrpc: w("2.0"),
  ...mn.shape
}).strict(), lx = (n) => Ez.safeParse(n).success, lp = D({
  jsonrpc: w("2.0"),
  id: ml,
  result: $t
}).strict(), Hu = (n) => lp.safeParse(n).success, Ze;
(function(n) {
  n[n.ConnectionClosed = -32e3] = "ConnectionClosed", n[n.RequestTimeout = -32001] = "RequestTimeout", n[n.ParseError = -32700] = "ParseError", n[n.InvalidRequest = -32600] = "InvalidRequest", n[n.MethodNotFound = -32601] = "MethodNotFound", n[n.InvalidParams = -32602] = "InvalidParams", n[n.InternalError = -32603] = "InternalError", n[n.UrlElicitationRequired = -32042] = "UrlElicitationRequired";
})(Ze || (Ze = {}));
var up = D({
  jsonrpc: w("2.0"),
  id: ml.optional(),
  error: D({
    code: re().int(),
    message: T(),
    data: ze().optional()
  })
}).strict(), ux = (n) => up.safeParse(n).success, cx = de([
  xz,
  Ez,
  lp,
  up
]), LO = de([lp, up]), cp = $t.strict(), sx = fn.extend({
  requestId: ml.optional(),
  reason: T().optional()
}), sp = mn.extend({
  method: w("notifications/cancelled"),
  params: sx
}), dx = D({
  src: T(),
  mimeType: T().optional(),
  sizes: ne(T()).optional(),
  theme: bt(["light", "dark"]).optional()
}), vl = D({ icons: ne(dx).optional() }), Fa = D({
  name: T(),
  title: T().optional()
}), ls = Fa.extend({
  ...Fa.shape,
  ...vl.shape,
  version: T(),
  websiteUrl: T().optional(),
  description: T().optional()
}), fx = cr(D({ applyDefaults: De().optional() }), be(T(), ze())), mx = dl((n) => n && typeof n == "object" && !Array.isArray(n) && Object.keys(n).length === 0 ? { form: {} } : n, cr(D({
  form: fx.optional(),
  url: ut.optional()
}), be(T(), ze()).optional())), vx = _t({
  list: ut.optional(),
  cancel: ut.optional(),
  requests: _t({
    sampling: _t({ createMessage: ut.optional() }).optional(),
    elicitation: _t({ create: ut.optional() }).optional()
  }).optional()
}), px = _t({
  list: ut.optional(),
  cancel: ut.optional(),
  requests: _t({ tools: _t({ call: ut.optional() }).optional() }).optional()
}), hx = D({
  experimental: be(T(), ut).optional(),
  sampling: D({
    context: ut.optional(),
    tools: ut.optional()
  }).optional(),
  elicitation: mx.optional(),
  roots: D({ listChanged: De().optional() }).optional(),
  tasks: vx.optional(),
  extensions: be(T(), ut).optional()
}), gx = Kt.extend({
  protocolVersion: T(),
  capabilities: hx,
  clientInfo: ls
}), yx = St.extend({
  method: w("initialize"),
  params: gx
}), _x = D({
  experimental: be(T(), ut).optional(),
  logging: ut.optional(),
  completions: ut.optional(),
  prompts: D({ listChanged: De().optional() }).optional(),
  resources: D({
    subscribe: De().optional(),
    listChanged: De().optional()
  }).optional(),
  tools: D({ listChanged: De().optional() }).optional(),
  tasks: px.optional(),
  extensions: be(T(), ut).optional()
}), bx = $t.extend({
  protocolVersion: T(),
  capabilities: _x,
  serverInfo: ls,
  instructions: T().optional()
}), Sx = mn.extend({
  method: w("notifications/initialized"),
  params: fn.optional()
}), us = St.extend({
  method: w("ping"),
  params: Kt.optional()
}), $x = D({
  progress: re(),
  total: He(re()),
  message: He(T())
}), zx = D({
  ...fn.shape,
  ...$x.shape,
  progressToken: wz
}), dp = mn.extend({
  method: w("notifications/progress"),
  params: zx
}), kx = Kt.extend({ cursor: Tz.optional() }), pl = St.extend({ params: kx.optional() }), hl = $t.extend({ nextCursor: Tz.optional() }), wx = bt([
  "working",
  "input_required",
  "completed",
  "failed",
  "cancelled"
]), gl = D({
  taskId: T(),
  status: wx,
  ttl: de([re(), rl()]),
  createdAt: T(),
  lastUpdatedAt: T(),
  pollInterval: He(re()),
  statusMessage: He(T())
}), fp = $t.extend({ task: gl }), Tx = fn.merge(gl), Ku = mn.extend({
  method: w("notifications/tasks/status"),
  params: Tx
}), mp = St.extend({
  method: w("tasks/get"),
  params: Kt.extend({ taskId: T() })
}), vp = $t.merge(gl), pp = St.extend({
  method: w("tasks/result"),
  params: Kt.extend({ taskId: T() })
}), BO = $t.loose(), hp = pl.extend({ method: w("tasks/list") }), gp = hl.extend({ tasks: ne(gl) }), yp = St.extend({
  method: w("tasks/cancel"),
  params: Kt.extend({ taskId: T() })
}), xx = $t.merge(gl), Oz = D({
  uri: T(),
  mimeType: He(T()),
  _meta: be(T(), ze()).optional()
}), Uz = Oz.extend({ text: T() }), _p = T().refine((n) => {
  try {
    return atob(n), !0;
  } catch {
    return !1;
  }
}, { message: "Invalid Base64 string" }), Dz = Oz.extend({ blob: _p }), yl = bt(["user", "assistant"]), mr = D({
  audience: ne(yl).optional(),
  priority: re().min(0).max(1).optional(),
  lastModified: qm({ offset: !0 }).optional()
}), Az = D({
  ...Fa.shape,
  ...vl.shape,
  uri: T(),
  description: He(T()),
  mimeType: He(T()),
  size: He(re()),
  annotations: mr.optional(),
  _meta: He(_t({}))
}), Ex = D({
  ...Fa.shape,
  ...vl.shape,
  uriTemplate: T(),
  description: He(T()),
  mimeType: He(T()),
  annotations: mr.optional(),
  _meta: He(_t({}))
}), Ox = pl.extend({ method: w("resources/list") }), jz = hl.extend({ resources: ne(Az) }), Ux = pl.extend({ method: w("resources/templates/list") }), Dx = hl.extend({ resourceTemplates: ne(Ex) }), bp = Kt.extend({ uri: T() }), Ax = bp, jx = St.extend({
  method: w("resources/read"),
  params: Ax
}), Zz = $t.extend({ contents: ne(de([Uz, Dz])) }), Zx = mn.extend({
  method: w("notifications/resources/list_changed"),
  params: fn.optional()
}), Nx = bp, Ix = St.extend({
  method: w("resources/subscribe"),
  params: Nx
}), Cx = bp, Rx = St.extend({
  method: w("resources/unsubscribe"),
  params: Cx
}), Mx = fn.extend({ uri: T() }), qx = mn.extend({
  method: w("notifications/resources/updated"),
  params: Mx
}), Hx = D({
  name: T(),
  description: He(T()),
  required: He(De())
}), Lx = D({
  ...Fa.shape,
  ...vl.shape,
  description: He(T()),
  arguments: He(ne(Hx)),
  _meta: He(_t({}))
}), Bx = pl.extend({ method: w("prompts/list") }), Px = hl.extend({ prompts: ne(Lx) }), Jx = Kt.extend({
  name: T(),
  arguments: be(T(), T()).optional()
}), Gx = St.extend({
  method: w("prompts/get"),
  params: Jx
}), Sp = D({
  type: w("text"),
  text: T(),
  annotations: mr.optional(),
  _meta: be(T(), ze()).optional()
}), $p = D({
  type: w("image"),
  data: _p,
  mimeType: T(),
  annotations: mr.optional(),
  _meta: be(T(), ze()).optional()
}), zp = D({
  type: w("audio"),
  data: _p,
  mimeType: T(),
  annotations: mr.optional(),
  _meta: be(T(), ze()).optional()
}), Yx = D({
  type: w("tool_use"),
  name: T(),
  id: T(),
  input: be(T(), ze()),
  _meta: be(T(), ze()).optional()
}), Nz = D({
  type: w("resource"),
  resource: de([Uz, Dz]),
  annotations: mr.optional(),
  _meta: be(T(), ze()).optional()
}), Iz = Az.extend({ type: w("resource_link") }), _l = de([
  Sp,
  $p,
  zp,
  Iz,
  Nz
]), Vx = D({
  role: yl,
  content: _l
}), Qx = $t.extend({
  description: T().optional(),
  messages: ne(Vx)
}), Xx = mn.extend({
  method: w("notifications/prompts/list_changed"),
  params: fn.optional()
}), Kx = D({
  title: T().optional(),
  readOnlyHint: De().optional(),
  destructiveHint: De().optional(),
  idempotentHint: De().optional(),
  openWorldHint: De().optional()
}), Fx = D({ taskSupport: bt([
  "required",
  "optional",
  "forbidden"
]).optional() }), kp = D({
  ...Fa.shape,
  ...vl.shape,
  description: T().optional(),
  inputSchema: D({
    type: w("object"),
    properties: be(T(), ut).optional(),
    required: ne(T()).optional()
  }).catchall(ze()),
  outputSchema: D({
    type: w("object"),
    properties: be(T(), ut).optional(),
    required: ne(T()).optional()
  }).catchall(ze()).optional(),
  annotations: Kx.optional(),
  execution: Fx.optional(),
  _meta: be(T(), ze()).optional()
}), Cz = pl.extend({ method: w("tools/list") }), Wx = hl.extend({ tools: ne(kp) }), cs = $t.extend({
  content: ne(_l).default([]),
  structuredContent: be(T(), ze()).optional(),
  isError: De().optional()
}), PO = cs.or($t.extend({ toolResult: ze() })), eE = fl.extend({
  name: T(),
  arguments: be(T(), ze()).optional()
}), Rz = St.extend({
  method: w("tools/call"),
  params: eE
}), tE = mn.extend({
  method: w("notifications/tools/list_changed"),
  params: fn.optional()
}), JO = D({
  autoRefresh: De().default(!0),
  debounceMs: re().int().nonnegative().default(300)
}), Mz = bt([
  "debug",
  "info",
  "notice",
  "warning",
  "error",
  "critical",
  "alert",
  "emergency"
]), nE = Kt.extend({ level: Mz }), iE = St.extend({
  method: w("logging/setLevel"),
  params: nE
}), aE = fn.extend({
  level: Mz,
  logger: T().optional(),
  data: ze()
}), rE = mn.extend({
  method: w("notifications/message"),
  params: aE
}), oE = D({ name: T().optional() }), lE = D({
  hints: ne(oE).optional(),
  costPriority: re().min(0).max(1).optional(),
  speedPriority: re().min(0).max(1).optional(),
  intelligencePriority: re().min(0).max(1).optional()
}), uE = D({ mode: bt([
  "auto",
  "required",
  "none"
]).optional() }), cE = D({
  type: w("tool_result"),
  toolUseId: T().describe("The unique identifier for the corresponding tool call."),
  content: ne(_l).default([]),
  structuredContent: D({}).loose().optional(),
  isError: De().optional(),
  _meta: be(T(), ze()).optional()
}), sE = ll("type", [
  Sp,
  $p,
  zp
]), Fu = ll("type", [
  Sp,
  $p,
  zp,
  Yx,
  cE
]), dE = D({
  role: yl,
  content: de([Fu, ne(Fu)]),
  _meta: be(T(), ze()).optional()
}), fE = fl.extend({
  messages: ne(dE),
  modelPreferences: lE.optional(),
  systemPrompt: T().optional(),
  includeContext: bt([
    "none",
    "thisServer",
    "allServers"
  ]).optional(),
  temperature: re().optional(),
  maxTokens: re().int(),
  stopSequences: ne(T()).optional(),
  metadata: ut.optional(),
  tools: ne(kp).optional(),
  toolChoice: uE.optional()
}), mE = St.extend({
  method: w("sampling/createMessage"),
  params: fE
}), qz = $t.extend({
  model: T(),
  stopReason: He(bt([
    "endTurn",
    "stopSequence",
    "maxTokens"
  ]).or(T())),
  role: yl,
  content: sE
}), Hz = $t.extend({
  model: T(),
  stopReason: He(bt([
    "endTurn",
    "stopSequence",
    "maxTokens",
    "toolUse"
  ]).or(T())),
  role: yl,
  content: de([Fu, ne(Fu)])
}), vE = D({
  type: w("boolean"),
  title: T().optional(),
  description: T().optional(),
  default: De().optional()
}), pE = D({
  type: w("string"),
  title: T().optional(),
  description: T().optional(),
  minLength: re().optional(),
  maxLength: re().optional(),
  format: bt([
    "email",
    "uri",
    "date",
    "date-time"
  ]).optional(),
  default: T().optional()
}), hE = D({
  type: bt(["number", "integer"]),
  title: T().optional(),
  description: T().optional(),
  minimum: re().optional(),
  maximum: re().optional(),
  default: re().optional()
}), gE = D({
  type: w("string"),
  title: T().optional(),
  description: T().optional(),
  enum: ne(T()),
  default: T().optional()
}), yE = D({
  type: w("string"),
  title: T().optional(),
  description: T().optional(),
  oneOf: ne(D({
    const: T(),
    title: T()
  })),
  default: T().optional()
}), _E = D({
  type: w("string"),
  title: T().optional(),
  description: T().optional(),
  enum: ne(T()),
  enumNames: ne(T()).optional(),
  default: T().optional()
}), bE = de([gE, yE]), SE = D({
  type: w("array"),
  title: T().optional(),
  description: T().optional(),
  minItems: re().optional(),
  maxItems: re().optional(),
  items: D({
    type: w("string"),
    enum: ne(T())
  }),
  default: ne(T()).optional()
}), $E = D({
  type: w("array"),
  title: T().optional(),
  description: T().optional(),
  minItems: re().optional(),
  maxItems: re().optional(),
  items: D({ anyOf: ne(D({
    const: T(),
    title: T()
  })) }),
  default: ne(T()).optional()
}), zE = de([SE, $E]), kE = de([
  _E,
  bE,
  zE
]), wE = de([
  kE,
  vE,
  pE,
  hE
]), TE = fl.extend({
  mode: w("form").optional(),
  message: T(),
  requestedSchema: D({
    type: w("object"),
    properties: be(T(), wE),
    required: ne(T()).optional()
  })
}), xE = fl.extend({
  mode: w("url"),
  message: T(),
  elicitationId: T(),
  url: T().url()
}), EE = de([TE, xE]), OE = St.extend({
  method: w("elicitation/create"),
  params: EE
}), UE = fn.extend({ elicitationId: T() }), DE = mn.extend({
  method: w("notifications/elicitation/complete"),
  params: UE
}), AE = $t.extend({
  action: bt([
    "accept",
    "decline",
    "cancel"
  ]),
  content: dl((n) => n === null ? void 0 : n, be(T(), de([
    T(),
    re(),
    De(),
    ne(T())
  ])).optional())
}), jE = D({
  type: w("ref/resource"),
  uri: T()
}), ZE = D({
  type: w("ref/prompt"),
  name: T()
}), NE = Kt.extend({
  ref: de([ZE, jE]),
  argument: D({
    name: T(),
    value: T()
  }),
  context: D({ arguments: be(T(), T()).optional() }).optional()
}), IE = St.extend({
  method: w("completion/complete"),
  params: NE
}), CE = $t.extend({ completion: _t({
  values: ne(T()).max(100),
  total: He(re().int()),
  hasMore: He(De())
}) }), RE = D({
  uri: T().startsWith("file://"),
  name: T().optional(),
  _meta: be(T(), ze()).optional()
}), ME = St.extend({
  method: w("roots/list"),
  params: Kt.optional()
}), qE = $t.extend({ roots: ne(RE) }), HE = mn.extend({
  method: w("notifications/roots/list_changed"),
  params: fn.optional()
}), GO = de([
  us,
  yx,
  IE,
  iE,
  Gx,
  Bx,
  Ox,
  Ux,
  jx,
  Ix,
  Rx,
  Rz,
  Cz,
  mp,
  pp,
  hp,
  yp
]), YO = de([
  sp,
  dp,
  Sx,
  HE,
  Ku
]), VO = de([
  cp,
  qz,
  Hz,
  AE,
  qE,
  vp,
  gp,
  fp
]), QO = de([
  us,
  mE,
  OE,
  ME,
  mp,
  pp,
  hp,
  yp
]), XO = de([
  sp,
  dp,
  rE,
  qx,
  Zx,
  tE,
  Xx,
  Ku,
  DE
]), KO = de([
  cp,
  bx,
  CE,
  Qx,
  Px,
  jz,
  Dx,
  Zz,
  cs,
  Wx,
  vp,
  gp,
  fp
]), xe = class Lz extends Error {
  constructor(a, o, c) {
    super(`MCP error ${a}: ${o}`), this.code = a, this.data = c, this.name = "McpError";
  }
  static fromError(a, o, c) {
    if (a === Ze.UrlElicitationRequired && c) {
      const i = c;
      if (i.elicitations) return new LE(i.elicitations, o);
    }
    return new Lz(a, o, c);
  }
}, LE = class extends xe {
  constructor(n, a = `URL elicitation${n.length > 1 ? "s" : ""} required`) {
    super(Ze.UrlElicitationRequired, a, { elicitations: n });
  }
  get elicitations() {
    return this.data?.elicitations ?? [];
  }
};
function Pi(n) {
  return n === "completed" || n === "failed" || n === "cancelled";
}
function V_(n) {
  const a = PT(n)?.method;
  if (!a) throw new Error("Schema is missing a method literal");
  const o = JT(a);
  if (typeof o != "string") throw new Error("Schema method literal must be a string");
  return o;
}
function Q_(n, a) {
  const o = mz(n, a);
  if (!o.success) throw o.error;
  return o.data;
}
var BE = class {
  constructor(n) {
    this._options = n, this._requestMessageId = 0, this._requestHandlers = /* @__PURE__ */ new Map(), this._requestHandlerAbortControllers = /* @__PURE__ */ new Map(), this._notificationHandlers = /* @__PURE__ */ new Map(), this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers = /* @__PURE__ */ new Map(), this._timeoutInfo = /* @__PURE__ */ new Map(), this._pendingDebouncedNotifications = /* @__PURE__ */ new Set(), this._taskProgressTokens = /* @__PURE__ */ new Map(), this._requestResolvers = /* @__PURE__ */ new Map(), this.setNotificationHandler(sp, (a) => {
      this._oncancel(a);
    }), this.setNotificationHandler(dp, (a) => {
      this._onprogress(a);
    }), this.setRequestHandler(us, (a) => ({})), this._taskStore = n?.taskStore, this._taskMessageQueue = n?.taskMessageQueue, this._taskStore && (this.setRequestHandler(mp, async (a, o) => {
      const c = await this._taskStore.getTask(a.params.taskId, o.sessionId);
      if (!c) throw new xe(Ze.InvalidParams, "Failed to retrieve task: Task not found");
      return { ...c };
    }), this.setRequestHandler(pp, async (a, o) => {
      const c = async () => {
        const i = a.params.taskId;
        if (this._taskMessageQueue) {
          let d;
          for (; d = await this._taskMessageQueue.dequeue(i, o.sessionId); ) {
            if (d.type === "response" || d.type === "error") {
              const m = d.message, y = m.id, h = this._requestResolvers.get(y);
              if (h)
                if (this._requestResolvers.delete(y), d.type === "response") h(m);
                else {
                  const g = m;
                  h(new xe(g.error.code, g.error.message, g.error.data));
                }
              else {
                const g = d.type === "response" ? "Response" : "Error";
                this._onerror(/* @__PURE__ */ new Error(`${g} handler missing for request ${y}`));
              }
              continue;
            }
            await this._transport?.send(d.message, { relatedRequestId: o.requestId });
          }
        }
        const u = await this._taskStore.getTask(i, o.sessionId);
        if (!u) throw new xe(Ze.InvalidParams, `Task not found: ${i}`);
        if (!Pi(u.status))
          return await this._waitForTaskUpdate(i, o.signal), await c();
        if (Pi(u.status)) {
          const d = await this._taskStore.getTaskResult(i, o.sessionId);
          return this._clearTaskQueue(i), {
            ...d,
            _meta: {
              ...d._meta,
              [Ji]: { taskId: i }
            }
          };
        }
        return await c();
      };
      return await c();
    }), this.setRequestHandler(hp, async (a, o) => {
      try {
        const { tasks: c, nextCursor: i } = await this._taskStore.listTasks(a.params?.cursor, o.sessionId);
        return {
          tasks: c,
          nextCursor: i,
          _meta: {}
        };
      } catch (c) {
        throw new xe(Ze.InvalidParams, `Failed to list tasks: ${c instanceof Error ? c.message : String(c)}`);
      }
    }), this.setRequestHandler(yp, async (a, o) => {
      try {
        const c = await this._taskStore.getTask(a.params.taskId, o.sessionId);
        if (!c) throw new xe(Ze.InvalidParams, `Task not found: ${a.params.taskId}`);
        if (Pi(c.status)) throw new xe(Ze.InvalidParams, `Cannot cancel task in terminal status: ${c.status}`);
        await this._taskStore.updateTaskStatus(a.params.taskId, "cancelled", "Client cancelled task execution.", o.sessionId), this._clearTaskQueue(a.params.taskId);
        const i = await this._taskStore.getTask(a.params.taskId, o.sessionId);
        if (!i) throw new xe(Ze.InvalidParams, `Task not found after cancellation: ${a.params.taskId}`);
        return {
          _meta: {},
          ...i
        };
      } catch (c) {
        throw c instanceof xe ? c : new xe(Ze.InvalidRequest, `Failed to cancel task: ${c instanceof Error ? c.message : String(c)}`);
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
      throw this._timeoutInfo.delete(n), xe.fromError(Ze.RequestTimeout, "Maximum total timeout exceeded", {
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
      c?.(i, u), Hu(i) || ux(i) ? this._onresponse(i) : Y_(i) ? this._onrequest(i, u) : lx(i) ? this._onnotification(i) : this._onerror(/* @__PURE__ */ new Error(`Unknown message type: ${JSON.stringify(i)}`));
    }, await this._transport.start();
  }
  _onclose() {
    const n = this._responseHandlers;
    this._responseHandlers = /* @__PURE__ */ new Map(), this._progressHandlers.clear(), this._taskProgressTokens.clear(), this._pendingDebouncedNotifications.clear();
    for (const o of this._timeoutInfo.values()) clearTimeout(o.timeoutId);
    this._timeoutInfo.clear();
    for (const o of this._requestHandlerAbortControllers.values()) o.abort();
    this._requestHandlerAbortControllers.clear();
    const a = xe.fromError(Ze.ConnectionClosed, "Connection closed");
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
    const o = this._requestHandlers.get(n.method) ?? this.fallbackRequestHandler, c = this._transport, i = n.params?._meta?.[Ji]?.taskId;
    if (o === void 0) {
      const h = {
        jsonrpc: "2.0",
        id: n.id,
        error: {
          code: Ze.MethodNotFound,
          message: "Method not found"
        }
      };
      i && this._taskMessageQueue ? this._enqueueTaskMessage(i, {
        type: "error",
        message: h,
        timestamp: Date.now()
      }, c?.sessionId).catch((g) => this._onerror(/* @__PURE__ */ new Error(`Failed to enqueue error response: ${g}`))) : c?.send(h).catch((g) => this._onerror(/* @__PURE__ */ new Error(`Failed to send an error response: ${g}`)));
      return;
    }
    const u = new AbortController();
    this._requestHandlerAbortControllers.set(n.id, u);
    const d = ox(n.params) ? n.params.task : void 0, m = this._taskStore ? this.requestTaskStore(n, c?.sessionId) : void 0, y = {
      signal: u.signal,
      sessionId: c?.sessionId,
      _meta: n.params?._meta,
      sendNotification: async (h) => {
        if (u.signal.aborted) return;
        const g = { relatedRequestId: n.id };
        i && (g.relatedTask = { taskId: i }), await this.notification(h, g);
      },
      sendRequest: async (h, g, E) => {
        if (u.signal.aborted) throw new xe(Ze.ConnectionClosed, "Request was cancelled");
        const k = {
          ...E,
          relatedRequestId: n.id
        };
        i && !k.relatedTask && (k.relatedTask = { taskId: i });
        const M = k.relatedTask?.taskId ?? i;
        return M && m && await m.updateTaskStatus(M, "input_required"), await this.request(h, g, k);
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
    }).then(() => o(n, y)).then(async (h) => {
      if (u.signal.aborted) return;
      const g = {
        result: h,
        jsonrpc: "2.0",
        id: n.id
      };
      i && this._taskMessageQueue ? await this._enqueueTaskMessage(i, {
        type: "response",
        message: g,
        timestamp: Date.now()
      }, c?.sessionId) : await c?.send(g);
    }, async (h) => {
      if (u.signal.aborted) return;
      const g = {
        jsonrpc: "2.0",
        id: n.id,
        error: {
          code: Number.isSafeInteger(h.code) ? h.code : Ze.InternalError,
          message: h.message ?? "Internal error",
          ...h.data !== void 0 && { data: h.data }
        }
      };
      i && this._taskMessageQueue ? await this._enqueueTaskMessage(i, {
        type: "error",
        message: g,
        timestamp: Date.now()
      }, c?.sessionId) : await c?.send(g);
    }).catch((h) => this._onerror(/* @__PURE__ */ new Error(`Failed to send response: ${h}`))).finally(() => {
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
      this._requestResolvers.delete(a), Hu(n) ? o(n) : o(new xe(n.error.code, n.error.message, n.error.data));
      return;
    }
    const c = this._responseHandlers.get(a);
    if (c === void 0) {
      this._onerror(/* @__PURE__ */ new Error(`Received a response for an unknown message ID: ${JSON.stringify(n)}`));
      return;
    }
    this._responseHandlers.delete(a), this._cleanupTimeout(a);
    let i = !1;
    if (Hu(n) && n.result && typeof n.result == "object") {
      const u = n.result;
      if (u.task && typeof u.task == "object") {
        const d = u.task;
        typeof d.taskId == "string" && (i = !0, this._taskProgressTokens.set(d.taskId, a));
      }
    }
    i || this._progressHandlers.delete(a), Hu(n) ? c(n) : c(xe.fromError(n.error.code, n.error.message, n.error.data));
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
          error: u instanceof xe ? u : new xe(Ze.InternalError, String(u))
        };
      }
      return;
    }
    let i;
    try {
      const u = await this.request(n, fp, o);
      if (u.task)
        i = u.task.taskId, yield {
          type: "taskCreated",
          task: u.task
        };
      else throw new xe(Ze.InternalError, "Task creation did not return a task");
      for (; ; ) {
        const d = await this.getTask({ taskId: i }, o);
        if (yield {
          type: "taskStatus",
          task: d
        }, Pi(d.status)) {
          d.status === "completed" ? yield {
            type: "result",
            result: await this.getTaskResult({ taskId: i }, a, o)
          } : d.status === "failed" ? yield {
            type: "error",
            error: new xe(Ze.InternalError, `Task ${i} failed`)
          } : d.status === "cancelled" && (yield {
            type: "error",
            error: new xe(Ze.InternalError, `Task ${i} was cancelled`)
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
        error: u instanceof xe ? u : new xe(Ze.InternalError, String(u))
      };
    }
  }
  request(n, a, o) {
    const { relatedRequestId: c, resumptionToken: i, onresumptiontoken: u, task: d, relatedTask: m } = o ?? {};
    return new Promise((y, h) => {
      const g = (Ee) => {
        h(Ee);
      };
      if (!this._transport) {
        g(/* @__PURE__ */ new Error("Not connected"));
        return;
      }
      if (this._options?.enforceStrictCapabilities === !0) try {
        this.assertCapabilityForMethod(n.method), d && this.assertTaskCapability(n.method);
      } catch (Ee) {
        g(Ee);
        return;
      }
      o?.signal?.throwIfAborted();
      const E = this._requestMessageId++, k = {
        ...n,
        jsonrpc: "2.0",
        id: E
      };
      o?.onprogress && (this._progressHandlers.set(E, o.onprogress), k.params = {
        ...n.params,
        _meta: {
          ...n.params?._meta || {},
          progressToken: E
        }
      }), d && (k.params = {
        ...k.params,
        task: d
      }), m && (k.params = {
        ...k.params,
        _meta: {
          ...k.params?._meta || {},
          [Ji]: m
        }
      });
      const M = (Ee) => {
        this._responseHandlers.delete(E), this._progressHandlers.delete(E), this._cleanupTimeout(E), this._transport?.send({
          jsonrpc: "2.0",
          method: "notifications/cancelled",
          params: {
            requestId: E,
            reason: String(Ee)
          }
        }, {
          relatedRequestId: c,
          resumptionToken: i,
          onresumptiontoken: u
        }).catch((Oe) => this._onerror(/* @__PURE__ */ new Error(`Failed to send cancellation: ${Oe}`))), h(Ee instanceof xe ? Ee : new xe(Ze.RequestTimeout, String(Ee)));
      };
      this._responseHandlers.set(E, (Ee) => {
        if (!o?.signal?.aborted) {
          if (Ee instanceof Error) return h(Ee);
          try {
            const Oe = mz(a, Ee.result);
            Oe.success ? y(Oe.data) : h(Oe.error);
          } catch (Oe) {
            h(Oe);
          }
        }
      }), o?.signal?.addEventListener("abort", () => {
        M(o?.signal?.reason);
      });
      const F = o?.timeout ?? 6e4, he = () => M(xe.fromError(Ze.RequestTimeout, "Request timed out", { timeout: F }));
      this._setupTimeout(E, F, o?.maxTotalTimeout, he, o?.resetTimeoutOnProgress ?? !1);
      const Qe = m?.taskId;
      if (Qe) {
        const Ee = (Oe) => {
          const Be = this._responseHandlers.get(E);
          Be ? Be(Oe) : this._onerror(/* @__PURE__ */ new Error(`Response handler missing for side-channeled request ${E}`));
        };
        this._requestResolvers.set(E, Ee), this._enqueueTaskMessage(Qe, {
          type: "request",
          message: k,
          timestamp: Date.now()
        }).catch((Oe) => {
          this._cleanupTimeout(E), h(Oe);
        });
      } else this._transport.send(k, {
        relatedRequestId: c,
        resumptionToken: i,
        onresumptiontoken: u
      }).catch((Ee) => {
        this._cleanupTimeout(E), h(Ee);
      });
    });
  }
  async getTask(n, a) {
    return this.request({
      method: "tasks/get",
      params: n
    }, vp, a);
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
    }, gp, a);
  }
  async cancelTask(n, a) {
    return this.request({
      method: "tasks/cancel",
      params: n
    }, xx, a);
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
            [Ji]: a.relatedTask
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
              [Ji]: a.relatedTask
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
          [Ji]: a.relatedTask
        }
      }
    }), await this._transport.send(c, a);
  }
  setRequestHandler(n, a) {
    const o = V_(n);
    this.assertRequestHandlerCapability(o), this._requestHandlers.set(o, (c, i) => {
      const u = Q_(n, c);
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
    const o = V_(n);
    this._notificationHandlers.set(o, (c) => {
      const i = Q_(n, c);
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
      for (const c of o) if (c.type === "request" && Y_(c.message)) {
        const i = c.message.id, u = this._requestResolvers.get(i);
        u ? (u(new xe(Ze.InternalError, "Task cancelled or completed")), this._requestResolvers.delete(i)) : this._onerror(/* @__PURE__ */ new Error(`Resolver missing for request ${i} during task ${n} cleanup`));
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
        i(new xe(Ze.InvalidRequest, "Request cancelled"));
        return;
      }
      const u = setTimeout(c, o);
      a.addEventListener("abort", () => {
        clearTimeout(u), i(new xe(Ze.InvalidRequest, "Request cancelled"));
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
        if (!i) throw new xe(Ze.InvalidParams, "Failed to retrieve task: Task not found");
        return i;
      },
      storeTaskResult: async (c, i, u) => {
        await o.storeTaskResult(c, i, u, a);
        const d = await o.getTask(c, a);
        if (d) {
          const m = Ku.parse({
            method: "notifications/tasks/status",
            params: d
          });
          await this.notification(m), Pi(d.status) && this._cleanupTaskProgressHandler(c);
        }
      },
      getTaskResult: (c) => o.getTaskResult(c, a),
      updateTaskStatus: async (c, i, u) => {
        const d = await o.getTask(c, a);
        if (!d) throw new xe(Ze.InvalidParams, `Task "${c}" not found - it may have been cleaned up`);
        if (Pi(d.status)) throw new xe(Ze.InvalidParams, `Cannot update task "${c}" from terminal status "${d.status}" to "${i}". Terminal states (completed, failed, cancelled) cannot transition to other states.`);
        await o.updateTaskStatus(c, i, u, a);
        const m = await o.getTask(c, a);
        if (m) {
          const y = Ku.parse({
            method: "notifications/tasks/status",
            params: m
          });
          await this.notification(y), Pi(m.status) && this._cleanupTaskProgressHandler(c);
        }
      },
      listTasks: (c) => o.listTasks(c, a)
    };
  }
};
function X_(n) {
  return n !== null && typeof n == "object" && !Array.isArray(n);
}
function PE(n, a) {
  const o = { ...n };
  for (const c in a) {
    const i = c, u = a[i];
    if (u === void 0) continue;
    const d = o[i];
    X_(d) && X_(u) ? o[i] = {
      ...d,
      ...u
    } : o[i] = u;
  }
  return o;
}
((n) => typeof qa < "u" ? qa : typeof Proxy < "u" ? new Proxy(n, { get: (a, o) => (typeof qa < "u" ? qa : a)[o] }) : n)(function(n) {
  if (typeof qa < "u") return qa.apply(this, arguments);
  throw Error('Dynamic require of "' + n + '" is not supported');
});
var JE = class extends BE {
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
}, GE = "2026-01-26";
var YE = class {
  eventTarget;
  eventSource;
  messageListener;
  constructor(n = window.parent, a) {
    this.eventTarget = n, this.eventSource = a, this.messageListener = (o) => {
      if (a && o.source !== this.eventSource) {
        console.debug("Ignoring message from unknown source", o);
        return;
      }
      let c = cx.safeParse(o.data);
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
}, VE = de([w("light"), w("dark")]).describe("Color theme preference for the host environment."), go = de([
  w("inline"),
  w("fullscreen"),
  w("pip")
]).describe("Display mode for UI presentation."), QE = de([
  w("--color-background-primary"),
  w("--color-background-secondary"),
  w("--color-background-tertiary"),
  w("--color-background-inverse"),
  w("--color-background-ghost"),
  w("--color-background-info"),
  w("--color-background-danger"),
  w("--color-background-success"),
  w("--color-background-warning"),
  w("--color-background-disabled"),
  w("--color-text-primary"),
  w("--color-text-secondary"),
  w("--color-text-tertiary"),
  w("--color-text-inverse"),
  w("--color-text-ghost"),
  w("--color-text-info"),
  w("--color-text-danger"),
  w("--color-text-success"),
  w("--color-text-warning"),
  w("--color-text-disabled"),
  w("--color-border-primary"),
  w("--color-border-secondary"),
  w("--color-border-tertiary"),
  w("--color-border-inverse"),
  w("--color-border-ghost"),
  w("--color-border-info"),
  w("--color-border-danger"),
  w("--color-border-success"),
  w("--color-border-warning"),
  w("--color-border-disabled"),
  w("--color-ring-primary"),
  w("--color-ring-secondary"),
  w("--color-ring-inverse"),
  w("--color-ring-info"),
  w("--color-ring-danger"),
  w("--color-ring-success"),
  w("--color-ring-warning"),
  w("--font-sans"),
  w("--font-mono"),
  w("--font-weight-normal"),
  w("--font-weight-medium"),
  w("--font-weight-semibold"),
  w("--font-weight-bold"),
  w("--font-text-xs-size"),
  w("--font-text-sm-size"),
  w("--font-text-md-size"),
  w("--font-text-lg-size"),
  w("--font-heading-xs-size"),
  w("--font-heading-sm-size"),
  w("--font-heading-md-size"),
  w("--font-heading-lg-size"),
  w("--font-heading-xl-size"),
  w("--font-heading-2xl-size"),
  w("--font-heading-3xl-size"),
  w("--font-text-xs-line-height"),
  w("--font-text-sm-line-height"),
  w("--font-text-md-line-height"),
  w("--font-text-lg-line-height"),
  w("--font-heading-xs-line-height"),
  w("--font-heading-sm-line-height"),
  w("--font-heading-md-line-height"),
  w("--font-heading-lg-line-height"),
  w("--font-heading-xl-line-height"),
  w("--font-heading-2xl-line-height"),
  w("--font-heading-3xl-line-height"),
  w("--border-radius-xs"),
  w("--border-radius-sm"),
  w("--border-radius-md"),
  w("--border-radius-lg"),
  w("--border-radius-xl"),
  w("--border-radius-full"),
  w("--border-width-regular"),
  w("--shadow-hairline"),
  w("--shadow-sm"),
  w("--shadow-md"),
  w("--shadow-lg")
]).describe("CSS variable keys available to MCP apps for theming."), XE = be(QE.describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`), de([T(), Qa()]).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`)).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`), FO = D({
  method: w("ui/open-link"),
  params: D({ url: T().describe("URL to open in the host's browser") })
}), KE = D({ isError: De().optional().describe("True if the host failed to open the URL (e.g., due to security policy).") }).passthrough(), FE = D({ isError: De().optional().describe("True if the download failed (e.g., user cancelled or host denied).") }).passthrough(), WE = D({ isError: De().optional().describe("True if the host rejected or failed to deliver the message.") }).passthrough(), WO = D({
  method: w("ui/notifications/sandbox-proxy-ready"),
  params: D({})
}), wp = D({
  connectDomains: ne(T()).optional().describe(`Origins for network requests (fetch/XHR/WebSocket).

- Maps to CSP \`connect-src\` directive
- Empty or omitted → no network connections (secure default)`),
  resourceDomains: ne(T()).optional().describe("Origins for static resources (images, scripts, stylesheets, fonts, media).\n\n- Maps to CSP `img-src`, `script-src`, `style-src`, `font-src`, `media-src` directives\n- Wildcard subdomains supported: `https://*.example.com`\n- Empty or omitted → no network resources (secure default)"),
  frameDomains: ne(T()).optional().describe("Origins for nested iframes.\n\n- Maps to CSP `frame-src` directive\n- Empty or omitted → no nested iframes allowed (`frame-src 'none'`)"),
  baseUriDomains: ne(T()).optional().describe("Allowed base URIs for the document.\n\n- Maps to CSP `base-uri` directive\n- Empty or omitted → only same origin allowed (`base-uri 'self'`)")
}), Tp = D({
  camera: D({}).optional().describe("Request camera access.\n\nMaps to Permission Policy `camera` feature."),
  microphone: D({}).optional().describe("Request microphone access.\n\nMaps to Permission Policy `microphone` feature."),
  geolocation: D({}).optional().describe("Request geolocation access.\n\nMaps to Permission Policy `geolocation` feature."),
  clipboardWrite: D({}).optional().describe("Request clipboard write access.\n\nMaps to Permission Policy `clipboard-write` feature.")
}), eU = D({
  method: w("ui/notifications/size-changed"),
  params: D({
    width: re().optional().describe("New width in pixels."),
    height: re().optional().describe("New height in pixels.")
  })
}), eO = D({
  method: w("ui/notifications/tool-input"),
  params: D({ arguments: be(T(), ze().describe("Complete tool call arguments as key-value pairs.")).optional().describe("Complete tool call arguments as key-value pairs.") })
}), tO = D({
  method: w("ui/notifications/tool-input-partial"),
  params: D({ arguments: be(T(), ze().describe("Partial tool call arguments (incomplete, may change).")).optional().describe("Partial tool call arguments (incomplete, may change).") })
}), nO = D({
  method: w("ui/notifications/tool-cancelled"),
  params: D({ reason: T().optional().describe('Optional reason for the cancellation (e.g., "user action", "timeout").') })
}), iO = D({ fonts: T().optional() }), aO = D({
  variables: XE.optional().describe("CSS variables for theming the app."),
  css: iO.optional().describe("CSS blocks that apps can inject.")
}), rO = D({
  method: w("ui/resource-teardown"),
  params: D({})
}), tU = be(T(), ze()), K_ = D({
  text: D({}).optional().describe("Host supports text content blocks."),
  image: D({}).optional().describe("Host supports image content blocks."),
  audio: D({}).optional().describe("Host supports audio content blocks."),
  resource: D({}).optional().describe("Host supports resource content blocks."),
  resourceLink: D({}).optional().describe("Host supports resource link content blocks."),
  structuredContent: D({}).optional().describe("Host supports structured content.")
}), nU = D({
  method: w("ui/notifications/request-teardown"),
  params: D({}).optional()
}), oO = D({
  experimental: D({}).optional().describe("Experimental features (structure TBD)."),
  openLinks: D({}).optional().describe("Host supports opening external URLs."),
  downloadFile: D({}).optional().describe("Host supports file downloads via ui/download-file."),
  serverTools: D({ listChanged: De().optional().describe("Host supports tools/list_changed notifications.") }).optional().describe("Host can proxy tool calls to the MCP server."),
  serverResources: D({ listChanged: De().optional().describe("Host supports resources/list_changed notifications.") }).optional().describe("Host can proxy resource reads to the MCP server."),
  logging: D({}).optional().describe("Host accepts log messages."),
  sandbox: D({
    permissions: Tp.optional().describe("Permissions granted by the host (camera, microphone, geolocation)."),
    csp: wp.optional().describe("CSP domains approved by the host.")
  }).optional().describe("Sandbox configuration applied by the host."),
  updateModelContext: K_.optional().describe("Host accepts context updates (ui/update-model-context) to be included in the model's context for future turns."),
  message: K_.optional().describe("Host supports receiving content messages (ui/message) from the view."),
  sampling: D({ tools: D({}).optional().describe("Host supports tool use via `tools` and `toolChoice` parameters.") }).optional().describe("Host supports LLM sampling (sampling/createMessage) from the view.\nMirrors the MCP `ClientCapabilities.sampling` shape so hosts can pass it through.")
}), lO = D({
  experimental: D({}).optional().describe("Experimental features (structure TBD)."),
  tools: D({ listChanged: De().optional().describe("App supports tools/list_changed notifications.") }).optional().describe("App exposes MCP-style tools that the host can call."),
  availableDisplayModes: ne(go).optional().describe("Display modes the app supports.")
}), iU = D({
  method: w("ui/notifications/initialized"),
  params: D({}).optional()
}), aU = D({
  csp: wp.optional().describe("Content Security Policy configuration for UI resources."),
  permissions: Tp.optional().describe("Sandbox permissions requested by the UI resource."),
  domain: T().optional().describe(`Dedicated origin for view sandbox.

Useful when views need stable, dedicated origins for OAuth callbacks, CORS policies, or API key allowlists.

**Host-dependent:** The format and validation rules for this field are determined by each host. Servers MUST consult host-specific documentation for the expected domain format. Common patterns include:
- Hash-based subdomains (e.g., \`{hash}.claudemcpcontent.com\`)
- URL-derived subdomains (e.g., \`www-example-com.oaiusercontent.com\`)

If omitted, host uses default sandbox origin (typically per-conversation).`),
  prefersBorder: De().optional().describe(`Visual boundary preference - true if view prefers a visible border.

Boolean requesting whether a visible border and background is provided by the host. Specifying an explicit value for this is recommended because hosts' defaults may vary.

- \`true\`: request visible border + background
- \`false\`: request no visible border + background
- omitted: host decides border`)
}), rU = D({
  method: w("ui/request-display-mode"),
  params: D({ mode: go.describe("The display mode being requested.") })
}), uO = D({ mode: go.describe("The display mode that was actually set. May differ from requested if not supported.") }).passthrough(), cO = de([w("model"), w("app")]).describe("Tool visibility scope - who can access the tool."), oU = D({
  resourceUri: T().optional(),
  visibility: ne(cO).optional().describe(`Who can access this tool. Default: ["model", "app"]
- "model": Tool visible to and callable by the agent
- "app": Tool callable by the app from this server only`),
  csp: Xi().optional(),
  permissions: Xi().optional()
});
D({ mimeTypes: ne(T()).optional().describe('Array of supported MIME types for UI resources.\nMust include `"text/html;profile=mcp-app"` for MCP Apps support.') });
var lU = D({
  method: w("ui/download-file"),
  params: D({ contents: ne(de([Nz, Iz])).describe("Resource contents to download — embedded (inline data) or linked (host fetches). Uses standard MCP resource types.") })
}), uU = D({
  method: w("ui/message"),
  params: D({
    role: w("user").describe('Message role, currently only "user" is supported.'),
    content: ne(_l).describe("Message content blocks (text, image, etc.).")
  })
}), cU = D({
  method: w("ui/notifications/sandbox-resource-ready"),
  params: D({
    html: T().describe("HTML content to load into the inner iframe."),
    sandbox: T().optional().describe("Optional override for the inner iframe's sandbox attribute."),
    csp: wp.optional().describe("CSP configuration from resource metadata."),
    permissions: Tp.optional().describe("Sandbox permissions from resource metadata.")
  })
}), sO = D({
  method: w("ui/notifications/tool-result"),
  params: cs.describe("Standard MCP tool execution result.")
}), Bz = D({
  toolInfo: D({
    id: ml.optional().describe("JSON-RPC id of the tools/call request."),
    tool: kp.describe("Tool definition including name, inputSchema, etc.")
  }).optional().describe("Metadata of the tool call that instantiated this App."),
  theme: VE.optional().describe("Current color theme preference."),
  styles: aO.optional().describe("Style configuration for theming the app."),
  displayMode: go.optional().describe("How the UI is currently displayed."),
  availableDisplayModes: ne(go).optional().describe("Display modes the host supports."),
  containerDimensions: de([D({ height: re().describe("Fixed container height in pixels.") }), D({ maxHeight: de([re(), Qa()]).optional().describe("Maximum container height in pixels.") })]).and(de([D({ width: re().describe("Fixed container width in pixels.") }), D({ maxWidth: de([re(), Qa()]).optional().describe("Maximum container width in pixels.") })])).optional().describe(`Container dimensions. Represents the dimensions of the iframe or other
container holding the app. Specify either width or maxWidth, and either height or maxHeight.`),
  locale: T().optional().describe("User's language and region preference in BCP 47 format."),
  timeZone: T().optional().describe("User's timezone in IANA format."),
  userAgent: T().optional().describe("Host application identifier."),
  platform: de([
    w("web"),
    w("desktop"),
    w("mobile")
  ]).optional().describe("Platform type for responsive design decisions."),
  deviceCapabilities: D({
    touch: De().optional().describe("Whether the device supports touch input."),
    hover: De().optional().describe("Whether the device supports hover interactions.")
  }).optional().describe("Device input capabilities."),
  safeAreaInsets: D({
    top: re().describe("Top safe area inset in pixels."),
    right: re().describe("Right safe area inset in pixels."),
    bottom: re().describe("Bottom safe area inset in pixels."),
    left: re().describe("Left safe area inset in pixels.")
  }).optional().describe("Mobile safe area boundaries in pixels.")
}).passthrough(), dO = D({
  method: w("ui/notifications/host-context-changed"),
  params: Bz.describe("Partial context update containing only changed fields.")
}), sU = D({
  method: w("ui/update-model-context"),
  params: D({
    content: ne(_l).optional().describe("Context content blocks (text, image, etc.)."),
    structuredContent: be(T(), ze().describe("Structured content for machine-readable context data.")).optional().describe("Structured content for machine-readable context data.")
  })
}), dU = D({
  method: w("ui/initialize"),
  params: D({
    appInfo: ls.describe("App identification (name and version)."),
    appCapabilities: lO.describe("Features and capabilities this app provides."),
    protocolVersion: T().describe("Protocol version this app supports.")
  })
}), fO = D({
  protocolVersion: T().describe('Negotiated protocol version string (e.g., "2025-11-21").'),
  hostInfo: ls.describe("Host application identification and version."),
  hostCapabilities: oO.describe("Features and capabilities provided by the host."),
  hostContext: Bz.describe("Rich context about the host environment.")
}).passthrough(), mO = { target: "draft-2020-12" };
async function F_(n, a) {
  let o = n["~standard"];
  if (o.jsonSchema) return o.jsonSchema[a](mO);
  if (o.vendor === "zod") {
    let { z: c } = await Promise.resolve().then(() => ix);
    return c.toJSONSchema(n, { io: a });
  }
  throw Error(`Schema (vendor: ${o.vendor}) does not implement Standard JSON Schema (~standard.jsonSchema). Use a library that does (zod v4, ArkType, Valibot) or wrap your schema accordingly.`);
}
async function W_(n, a, o = "") {
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
var vO = class Pz extends JE {
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
    toolinput: eO,
    toolinputpartial: tO,
    toolresult: sO,
    toolcancelled: nO,
    hostcontextchanged: dO
  };
  static ONE_SHOT_EVENTS = /* @__PURE__ */ new Set([
    "toolinput",
    "toolinputpartial",
    "toolresult",
    "toolcancelled"
  ]);
  _everHadListener = /* @__PURE__ */ new Set();
  _assertHandlerTiming(a) {
    if (!Pz.ONE_SHOT_EVENTS.has(a) || this._everHadListener.has(a) || (this._everHadListener.add(a), !this._initializedSent)) return;
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
    super(c), this._appInfo = a, this._capabilities = o, this.options = c, c.allowUnsafeEval || ct({ jitless: !0 }), this.setRequestHandler(us, (i) => (console.log("Received ping:", i.params), {})), this.setEventHandler("hostcontextchanged", void 0);
  }
  registerCapabilities(a) {
    if (this.transport) throw Error("Cannot register capabilities after transport is established");
    this._capabilities = PE(this._capabilities, a);
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
      handler: async (y, h) => {
        if (!m.enabled) throw Error(`Tool ${a} is disabled`);
        let g;
        if (d) {
          let E = m.inputSchema;
          g = await c(E ? await W_(E, y ?? {}, `Invalid input for tool ${a}: `) : y ?? {}, h);
        } else g = await c(h);
        return m.outputSchema && !g.isError && (g.structuredContent = await W_(m.outputSchema, g.structuredContent, `Invalid output for tool ${a}: `)), g;
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
        inputSchema: i.inputSchema ? await F_(i.inputSchema, "input") : {
          type: "object",
          properties: {}
        }
      };
      return i.outputSchema && (u.outputSchema = await F_(i.outputSchema, "output")), i.annotations && (u.annotations = i.annotations), i._meta && (u._meta = i._meta), u;
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
    this.warnIfRequestHandlerReplaced("onteardown", this._onteardown, a), this._onteardown = a, this.replaceRequestHandler(rO, (o, c) => {
      if (!this._onteardown) throw Error("No onteardown handler set");
      return this._onteardown(o.params, c);
    });
  }
  _oncalltool;
  get oncalltool() {
    return this._oncalltool;
  }
  set oncalltool(a) {
    this.warnIfRequestHandlerReplaced("oncalltool", this._oncalltool, a), this._oncalltool = a, this.replaceRequestHandler(Rz, (o, c) => {
      if (!this._oncalltool) throw Error("No oncalltool handler set");
      return this._oncalltool(o.params, c);
    });
  }
  _onlisttools;
  get onlisttools() {
    return this._onlisttools;
  }
  set onlisttools(a) {
    this.warnIfRequestHandlerReplaced("onlisttools", this._onlisttools, a), this._onlisttools = a, this.replaceRequestHandler(Cz, (o, c) => {
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
    }, cs, {
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
    }, Zz, o);
  }
  async listServerResources(a, o) {
    return this._assertInitialized("listServerResources"), await this.request({
      method: "resources/list",
      params: a
    }, jz, o);
  }
  async createSamplingMessage(a, o) {
    this._assertInitialized("createSamplingMessage");
    let c = a.tools ? Hz : qz;
    return await this.request({
      method: "sampling/createMessage",
      params: a
    }, c, o);
  }
  sendMessage(a, o) {
    return this._assertInitialized("sendMessage"), this.request({
      method: "ui/message",
      params: a
    }, WE, o);
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
    }, cp, o);
  }
  openLink(a, o) {
    return this._assertInitialized("openLink"), this.request({
      method: "ui/open-link",
      params: a
    }, KE, o);
  }
  sendOpenLink = this.openLink;
  downloadFile(a, o) {
    return this._assertInitialized("downloadFile"), this.request({
      method: "ui/download-file",
      params: a
    }, FE, o);
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
    }, uO, o);
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
        let h = Math.ceil(window.innerWidth);
        (h !== o || y !== c) && (o = h, c = y, this.sendSizeChanged({
          width: h,
          height: y
        }));
      }));
    };
    i();
    let u = new ResizeObserver(i);
    return u.observe(document.documentElement), u.observe(document.body), () => u.disconnect();
  }
  async connect(a = new YE(window.parent, window.parent), o) {
    if (this.transport) throw Error("App is already connected. Call close() before connecting again.");
    this._initializedSent = !1, await super.connect(a);
    try {
      let c = await this.request({
        method: "ui/initialize",
        params: {
          appCapabilities: this._capabilities,
          appInfo: this._appInfo,
          protocolVersion: GE
        }
      }, fO, o);
      if (c === void 0) throw Error(`Server sent invalid initialize result: ${c}`);
      this._hostCapabilities = c.hostCapabilities, this._hostInfo = c.hostInfo, this._hostContext = c.hostContext, await this.notification({ method: "ui/notifications/initialized" }), this._initializedSent = !0, this.options?.autoResize && this.setupSizeChangedNotifications();
    } catch (c) {
      throw this.close(), c;
    }
  }
}, pO = 15e3, fo;
function Jz(n = {}) {
  const a = n.targetWindow ?? (typeof window < "u" && window.parent !== window ? window.parent : void 0), o = n.targetOrigin ?? "*", c = /* @__PURE__ */ new Map();
  let i = 1;
  function u(m) {
    if (!$O(m.data)) return;
    const y = m.data;
    if ("id" in y && y.id !== void 0 && ("result" in y || "error" in y)) {
      const h = c.get(y.id);
      if (!h) return;
      if (c.delete(y.id), clearTimeout(h.timeout), y.error) {
        h.reject(new Error(y.error.message));
        return;
      }
      h.resolve(y.result ?? null);
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
      const h = `${n.source ?? "micro-app"}-${i++}`, g = setTimeout(() => {
        const k = c.get(h);
        k && (c.delete(h), k.reject(/* @__PURE__ */ new Error(`MCP request timed out: ${m}`)));
      }, n.timeoutMs ?? pO), E = new Promise((k, M) => {
        c.set(h, {
          resolve: k,
          reject: M,
          timeout: g
        });
      });
      return d({
        jsonrpc: "2.0",
        id: h,
        method: m,
        params: y
      }), E;
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
function hO(n) {
  return fo?.dispose(), fo = Jz(n), fo;
}
function Gz() {
  return fo ??= Jz(), fo;
}
function Yz(n, a) {
  Gz().notify(n, a);
}
function gO(n, a) {
  return Gz().callTool(n, a);
}
async function Vz(n) {
  if (typeof window > "u" || window.parent === window) return eb("standalone");
  typeof window < "u" && (window.__MCP_RUNTIME_CONNECTED__ = !0);
  try {
    const a = new vO({
      name: n.name,
      version: n.version
    }, n.capabilities ?? {}, {
      autoResize: !0,
      strict: !1,
      ...n.appOptions
    });
    return bO(a, n.handlers), await SO(a.connect(), n.timeoutMs ?? 1e4, "MCP Apps host connection timed out"), {
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
        return Qz((await a.createSamplingMessage({
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
        return a.sendMessage(yO(o, c));
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
        return a.updateModelContext(_O(o));
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
    return eb("error", a);
  }
}
function eb(n, a) {
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
function yO(n, a) {
  return {
    role: "user",
    content: [{
      type: "text",
      text: a ? `${a}

${n}` : n
    }]
  };
}
function _O(n) {
  return typeof n != "string" ? n : { content: [{
    type: "text",
    text: n
  }] };
}
function bO(n, a = {}) {
  n.ontoolinput = a.onToolInput, n.ontoolinputpartial = a.onToolInputPartial, n.ontoolresult = a.onToolResult, n.ontoolcancelled = a.onToolCancelled, n.onhostcontextchanged = a.onHostContextChanged, a.onTeardown && (n.onteardown = async () => a.onTeardown?.() ?? {});
}
async function SO(n, a, o) {
  let c;
  try {
    return await Promise.race([n, new Promise((i, u) => {
      c = setTimeout(() => u(new Error(o)), a);
    })]);
  } finally {
    c && clearTimeout(c);
  }
}
function Qz(n) {
  return typeof n == "string" ? n : n ? Array.isArray(n) ? n.map((a) => Qz(a)).filter(Boolean).join(`
`) : typeof n == "object" && "text" in n && typeof n.text == "string" ? n.text : "" : "";
}
function $O(n) {
  return !!(n && typeof n == "object" && "jsonrpc" in n && n.jsonrpc === "2.0");
}
function zO(n) {
  return n instanceof Error ? {
    name: n.name,
    message: n.message,
    stack: n.stack
  } : { message: typeof n == "string" ? n : "Unknown runtime error" };
}
function tb({ app: n, error: a, logger: o, source: c = "runtime", metadata: i }) {
  const u = {
    level: "error",
    message: `${n.name} failed in ${c}`,
    appId: n.id,
    source: c,
    error: zO(a),
    metadata: i,
    timestamp: Date.now()
  };
  return Pu.emit(Ju.APP_ERROR, n.id, u), o?.log(u), u;
}
function Xz(n = Kz()) {
  return typeof n?.modelContext?.registerTool == "function";
}
function nb(n, a = {}, o = Kz()) {
  if (!Xz(o)) return {
    supported: !1,
    unregister: () => {
    }
  };
  const c = a.signal ? void 0 : new AbortController(), i = a.signal ?? c?.signal;
  return o.modelContext.registerTool(n, {
    ...a,
    signal: i
  }), {
    supported: !0,
    unregister: () => c?.abort()
  };
}
function Kz() {
  return typeof document > "u" ? void 0 : document;
}
function kO(n, a, o = {}) {
  const c = customElements.get(n);
  if (c) return c;
  class i extends HTMLElement {
    static observedAttributes = o.observedAttributes ?? [];
    cleanup;
    async connectedCallback() {
      const d = this.createContext();
      console.log(`[Platform SDK] connectedCallback triggered for: ${d.app.id}`);
      let m = null;
      typeof window < "u" && window.parent !== window && !window.__MCP_RUNTIME_CONNECTED__ && (console.log(`[Platform SDK] Auto-connecting to MCP runtime for: ${d.app.id}...`), m = Vz({
        name: d.app.name,
        version: d.app.version ?? "1.0.0",
        capabilities: {
          sampling: {},
          serverTools: {},
          modelContext: {}
        }
      }).then((y) => {
        console.log(`[Platform SDK] connectOfficialMcpAppRuntime finished for: ${d.app.id}. Status:`, y.status);
        const h = window.__MICRO_APP_CONTEXT__?.app?.capabilities?.mcpApps;
        return console.log(`[Platform SDK] Notifying ui/ready for: ${d.app.id} with tools:`, h?.tools, "resources:", h?.resources), Yz("ui/ready", {
          appId: d.app.id,
          tools: h?.tools ?? [],
          resources: h?.resources ?? [],
          prompts: h?.prompts ?? []
        }), y;
      }).catch((y) => (console.warn(`[Platform SDK] Auto-connecting to MCP runtime for ${d.app.id} failed:`, y), null)));
      try {
        const y = await a.mount(this, d);
        this.cleanup = typeof y == "function" ? y : void 0, await wO(), m && await m, this.dispatchEvent(new CustomEvent("micro-app:ready", {
          bubbles: !0,
          composed: !0,
          detail: {
            appId: d.app.id,
            tagName: n,
            timestamp: Date.now()
          }
        })), Pu.emit(Ju.APP_LOADED, d.app.id, { tagName: n });
      } catch (y) {
        throw tb({
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
          this.cleanup?.(), a.unmount?.(this), Pu.emit(Ju.APP_UNLOADED, this.getAttribute("data-app-name") ?? n, { tagName: n });
        } catch (d) {
          tb({
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
function wO() {
  return new Promise((n) => {
    requestAnimationFrame(() => requestAnimationFrame(() => n()));
  });
}
function Lu(n, a, o) {
  const c = Ju[n];
  Pu.emit(c, a, o), Yz("ui/notification", {
    type: c,
    source: a,
    payload: TO(o),
    timestamp: Date.now()
  });
}
function TO(n) {
  return n === void 0 ? null : JSON.parse(JSON.stringify(n));
}
var xO = /* @__PURE__ */ kn(((n) => {
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
})), EO = /* @__PURE__ */ kn(((n, a) => {
  a.exports = xO();
})), J = EO(), Fz = [
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
], OO = [
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
], co = Fz.map((n) => `${n.app}: ${n.label} is ${n.value} (${n.detail})`).join(" "), Ef = [
  "Billing conversion dipped because Analytics shows a 2% checkout conversion drop in the billing path while Admin has billing-autopay disabled for the affected tenant group.",
  "Billing adds one overdue enterprise invoice, and Customer adds two renewal-risk accounts, so the main cause is likely autopay friction with some enterprise payment follow-through risk.",
  "Recommended action: re-enable billing-autopay through a guarded 25% rollout, retry or review the overdue invoice, notify account owners, and monitor checkout recovery for 24 hours."
].join(" "), UO = [
  "Why did billing conversion dip?",
  "Create a cross-app recovery plan",
  "What should I check before re-enabling autopay?"
];
function DO({ apiBaseUrl: n } = {}) {
  const [a, o] = (0, yt.useState)([{
    role: "assistant",
    text: "I am watching Analytics, Billing, Admin, and Customer signals together. Ask about the conversion dip or run the recovery plan."
  }]), [c, i] = (0, yt.useState)("Why did billing conversion dip?"), [u, d] = (0, yt.useState)("checking"), [m, y] = (0, yt.useState)("checking"), [h, g] = (0, yt.useState)("checking"), [E, k] = (0, yt.useState)("idle"), [M, F] = (0, yt.useState)("deterministic-fallback"), [he, Qe] = (0, yt.useState)(!1), [Ee, Oe] = (0, yt.useState)(!1), Be = (0, yt.useRef)(), ie = (0, yt.useRef)(M);
  (0, yt.useEffect)(() => {
    ie.current = M;
  }, [M]), (0, yt.useEffect)(() => {
    const G = hO({ source: "ai-assistant" });
    return G.notify("ui/ready", {
      appId: "ai-assistant",
      tools: [
        "assistant.summarizeCase",
        "assistant.planWorkflow",
        "assistant.invokeTool"
      ]
    }), () => G.dispose();
  }, []), (0, yt.useEffect)(() => {
    let G = !1;
    const V = () => {
      G || g(window.openai?.sendFollowUpMessage ? "connected" : "unavailable");
    }, ue = window.setInterval(V, 250);
    return window.addEventListener("openai:set_globals", V), V(), () => {
      G = !0, window.clearInterval(ue), window.removeEventListener("openai:set_globals", V);
    };
  }, []), (0, yt.useEffect)(() => {
    let G = !1;
    return Vz({
      name: "AI Assistant App",
      version: "0.8.0",
      capabilities: {
        sampling: {},
        serverTools: {},
        modelContext: {}
      },
      handlers: {
        onToolInput() {
          G || y("connected");
        },
        onToolInputPartial() {
          G || y("connected");
        },
        onToolResult(V) {
          if (G) return;
          y("connected");
          const ue = so(V);
          !ue || ue.includes("ready as an MCP App") || (F("ai-native-mcp-tool"), o((ot) => [...ot, {
            role: "assistant",
            text: _i("AI Native MCP tool", ue),
            runtime: "ai-native-mcp-tool"
          }]));
        },
        onToolCancelled() {
          G || y("unavailable");
        },
        onHostContextChanged() {
          G || y("connected");
        },
        onTeardown() {
          return Lu("MCP_RESOURCE_REQUESTED", "ai-assistant", {
            lifecycle: "teardown",
            runtime: "mcp-apps"
          }), {
            appId: "ai-assistant",
            latestRuntime: ie.current
          };
        }
      }
    }).then((V) => {
      if (G) {
        V.dispose();
        return;
      }
      Be.current = V, y(V.status === "connected" ? "connected" : V.status === "standalone" ? "standalone" : "unavailable");
    }), () => {
      G = !0, Be.current?.dispose();
    };
  }, []), (0, yt.useEffect)(() => {
    const G = window.LanguageModel;
    if (!G) {
      d("unsupported");
      return;
    }
    G.availability({ languages: ["en"] }).then(d).catch(() => d("unavailable"));
  }, []), (0, yt.useEffect)(() => {
    const G = nb({
      name: "assistant_summarize_platform_health",
      description: "Summarize the currently visible Open Micro Platform dashboard health signals and suggest the next action.",
      inputSchema: {
        type: "object",
        properties: { question: {
          type: "string",
          description: "The user question or investigation goal from the browser agent."
        } }
      },
      execute: async ({ question: ue }) => ({
        source: "ai-assistant",
        question: ue ?? "Summarize platform health",
        summary: Ef,
        resources: [
          "billing.invoice",
          "analytics.funnel",
          "admin.tenant"
        ]
      }),
      readOnlyHint: !0
    }), V = nb({
      name: "assistant_list_mcp_capabilities",
      description: "List the MCP Apps capabilities exposed by the AI Assistant micro app.",
      inputSchema: {
        type: "object",
        properties: { tool: {
          type: "string",
          description: "Optional capability name to inspect."
        } }
      },
      execute: async ({ tool: ue }) => ({
        selected: ue ?? null,
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
    return Qe(G.supported || V.supported || Xz()), () => {
      G.unregister(), V.unregister();
    };
  }, []);
  async function ke(G) {
    G.preventDefault();
    const V = c.trim();
    if (V) {
      Oe(!0), Lu("MCP_TOOL_CALL_REQUESTED", "ai-assistant", {
        tool: "assistant.summarizeCase",
        prompt: V
      }), gO("assistant_summarizeCase", { prompt: V }).catch(() => {
      }), window.openai?.setWidgetState?.({
        lastPrompt: V,
        lastAction: "assistant_summarizeCase",
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
      try {
        const ue = await st(V, n);
        F(ue.runtime), o((ot) => [
          ...ot,
          {
            role: "user",
            text: V
          },
          {
            role: "assistant",
            text: ue.text,
            runtime: ue.runtime
          }
        ]), Lu("MCP_TOOL_CALL_COMPLETED", "ai-assistant", {
          tool: "assistant.summarizeCase",
          resources: [
            "billing.invoice",
            "analytics.funnel",
            "admin.tenant"
          ],
          runtime: ue.runtime,
          provider: ue.provider
        }), i("");
      } catch (ue) {
        const ot = _i("Deterministic fallback", Ef);
        F("deterministic-fallback"), o((Ft) => [
          ...Ft,
          {
            role: "user",
            text: V
          },
          {
            role: "assistant",
            text: ot,
            runtime: "deterministic-fallback"
          }
        ]), Lu("MCP_TOOL_CALL_FAILED", "ai-assistant", {
          tool: "assistant.summarizeCase",
          error: ue instanceof Error ? ue.message : String(ue)
        });
      } finally {
        Oe(!1);
      }
    }
  }
  async function st(G, V) {
    const ue = Be.current;
    if (ue?.status === "connected") {
      try {
        await ue.updateModelContext(`Open Micro Platform context: ${co}`), await ue.sendLog("info", {
          appId: "ai-assistant",
          action: "ask",
          runtime: "ai-native-host-model"
        });
        const tt = await ue.requestHostCompletion([
          "Answer this as the Open Micro Platform AI Assistant.",
          "Be concise, operational, and use the known cross-app context.",
          `Known platform context: ${co}`,
          `User question: ${G}`
        ].join(`
`), "You are running inside an MCP Apps widget. Use the AI host model to answer from the provided platform context.");
        if (tt.trim()) return {
          text: _i("AI Native host model", tt.trim()),
          runtime: "ai-native-host-model"
        };
      } catch {
      }
      try {
        if (await ue.updateModelContext(`Open Micro Platform context: ${co}`), !IO(await ue.sendHostMessage([
          "Answer this as the Open Micro Platform AI Assistant.",
          "Use the platform context already shared by the widget.",
          `User question: ${G}`
        ].join(`
`)))) return {
          text: _i("AI Native host message", "I sent this Ask to the AI-native host conversation with the current platform context. The host model response should appear in the chat thread, and the widget kept the same state for follow-up actions."),
          runtime: "ai-native-host-message"
        };
      } catch {
      }
    }
    const ot = await AO(G);
    if (ot) return ot;
    if (u === "available" && window.LanguageModel) {
      let tt;
      try {
        return tt = await window.LanguageModel.create(), {
          text: _i("Chrome Built-in AI", await tt.prompt([
            "You are the Open Micro Platform AI Assistant.",
            "Answer as a concise platform operator.",
            `Use this known context: ${co}`,
            `User question: ${G}`
          ].join(`
`))),
          runtime: "chrome-built-in-ai"
        };
      } catch {
      } finally {
        tt?.destroy?.();
      }
    }
    k("idle");
    const Ft = await jO(G, V);
    return Ft ? (k("available"), Ft) : (k("unavailable"), {
      text: _i("Deterministic fallback", Ef),
      runtime: "deterministic-fallback"
    });
  }
  return /* @__PURE__ */ (0, J.jsxs)("section", {
    className: "micro-app-container",
    children: [
      /* @__PURE__ */ (0, J.jsxs)("header", {
        className: "micro-app-header",
        children: [
          /* @__PURE__ */ (0, J.jsx)("span", { children: "AI Platform" }),
          /* @__PURE__ */ (0, J.jsx)("h1", { children: "AI Incident Copilot" }),
          /* @__PURE__ */ (0, J.jsx)("p", { children: "Cross-platform triage that correlates micro app state and returns an actionable workflow." })
        ]
      }),
      /* @__PURE__ */ (0, J.jsxs)("div", {
        className: "insights",
        children: [
          /* @__PURE__ */ (0, J.jsxs)("article", { children: [/* @__PURE__ */ (0, J.jsx)("strong", { children: "4" }), /* @__PURE__ */ (0, J.jsx)("span", { children: "Apps correlated" })] }),
          /* @__PURE__ */ (0, J.jsxs)("article", { children: [/* @__PURE__ */ (0, J.jsx)("strong", { children: "High" }), /* @__PURE__ */ (0, J.jsx)("span", { children: "Primary signal" })] }),
          /* @__PURE__ */ (0, J.jsxs)("article", { children: [/* @__PURE__ */ (0, J.jsx)("strong", { children: "25%" }), /* @__PURE__ */ (0, J.jsx)("span", { children: "Safe rollout" })] })
        ]
      }),
      /* @__PURE__ */ (0, J.jsx)("div", {
        className: "signal-board",
        "aria-label": "Cross-platform signals",
        children: Fz.map((G) => /* @__PURE__ */ (0, J.jsxs)("article", {
          className: `signal-card ${G.severity}`,
          children: [
            /* @__PURE__ */ (0, J.jsxs)("div", { children: [/* @__PURE__ */ (0, J.jsx)("span", { children: G.app }), /* @__PURE__ */ (0, J.jsx)("strong", { children: G.label })] }),
            /* @__PURE__ */ (0, J.jsx)("b", { children: G.value }),
            /* @__PURE__ */ (0, J.jsx)("p", { children: G.detail })
          ]
        }, `${G.app}-${G.label}`))
      }),
      /* @__PURE__ */ (0, J.jsxs)("div", {
        className: "workflow-panel",
        "aria-label": "Recommended workflow",
        children: [/* @__PURE__ */ (0, J.jsxs)("div", { children: [/* @__PURE__ */ (0, J.jsx)("span", { children: "AI-native workflow" }), /* @__PURE__ */ (0, J.jsx)("strong", { children: "Conversion Recovery Runbook" })] }), /* @__PURE__ */ (0, J.jsx)("ol", { children: OO.map((G) => /* @__PURE__ */ (0, J.jsxs)("li", {
          className: G.status,
          children: [/* @__PURE__ */ (0, J.jsx)("span", { children: G.app }), G.action]
        }, `${G.app}-${G.action}`)) })]
      }),
      /* @__PURE__ */ (0, J.jsxs)("div", {
        className: "mcp-panel",
        "aria-label": "MCPApps capabilities",
        children: [
          /* @__PURE__ */ (0, J.jsx)("span", { children: "MCPApps SDK" }),
          /* @__PURE__ */ (0, J.jsx)("strong", { children: "assistant.summarizeCase" }),
          /* @__PURE__ */ (0, J.jsx)("p", { children: "Emits shared events, answers inside the widget, and exposes the same capability as an MCP App tool." })
        ]
      }),
      /* @__PURE__ */ (0, J.jsxs)("div", {
        className: "ai-runtime-grid",
        "aria-label": "AI runtime capabilities",
        children: [
          /* @__PURE__ */ (0, J.jsxs)("article", { children: [
            /* @__PURE__ */ (0, J.jsx)("span", { children: "Legacy ChatGPT bridge" }),
            /* @__PURE__ */ (0, J.jsx)("strong", { children: CO(h) }),
            /* @__PURE__ */ (0, J.jsx)("p", { children: "Only used when a host exposes the older `window.openai` message API instead of the MCP Apps `ui/message` runtime." })
          ] }),
          /* @__PURE__ */ (0, J.jsxs)("article", { children: [
            /* @__PURE__ */ (0, J.jsx)("span", { children: "MCP host AI" }),
            /* @__PURE__ */ (0, J.jsx)("strong", { children: RO(m) }),
            /* @__PURE__ */ (0, J.jsx)("p", { children: "When rendered inside Claude, ChatGPT, or another MCP Apps host, asks the host model or sends a host conversation message before local browser fallback." })
          ] }),
          /* @__PURE__ */ (0, J.jsxs)("article", { children: [
            /* @__PURE__ */ (0, J.jsx)("span", { children: "Chrome built-in AI" }),
            /* @__PURE__ */ (0, J.jsx)("strong", { children: qO(u) }),
            /* @__PURE__ */ (0, J.jsx)("p", { children: "Uses `LanguageModel` locally when Chrome has Gemini Nano available, then falls back without breaking the shell." })
          ] }),
          /* @__PURE__ */ (0, J.jsxs)("article", { children: [
            /* @__PURE__ */ (0, J.jsx)("span", { children: "WebMCP tools" }),
            /* @__PURE__ */ (0, J.jsx)("strong", { children: he ? "Registered" : "Waiting for browser support" }),
            /* @__PURE__ */ (0, J.jsx)("p", { children: "Registers tab-bound tools with `document.modelContext` when a browser agent exposes WebMCP." })
          ] }),
          /* @__PURE__ */ (0, J.jsxs)("article", { children: [
            /* @__PURE__ */ (0, J.jsx)("span", { children: "MCP Apps portability" }),
            /* @__PURE__ */ (0, J.jsx)("strong", { children: "HTML resource ready" }),
            /* @__PURE__ */ (0, J.jsx)("p", { children: "This same micro app can render through `/api/mcp/apps/ai-assistant/resource` in an AI host iframe." })
          ] }),
          /* @__PURE__ */ (0, J.jsxs)("article", { children: [
            /* @__PURE__ */ (0, J.jsx)("span", { children: "Server API chat" }),
            /* @__PURE__ */ (0, J.jsx)("strong", { children: MO(E) }),
            /* @__PURE__ */ (0, J.jsx)("p", { children: "When host and browser AI are unavailable, Ask calls the shell or MCP server chat API and still returns an operational answer." })
          ] }),
          /* @__PURE__ */ (0, J.jsxs)("article", { children: [
            /* @__PURE__ */ (0, J.jsx)("span", { children: "Last response" }),
            /* @__PURE__ */ (0, J.jsx)("strong", { children: ib(M) }),
            /* @__PURE__ */ (0, J.jsx)("p", { children: "Shows which runtime handled the latest user question across AI-native, browser-native, and server paths." })
          ] })
        ]
      }),
      /* @__PURE__ */ (0, J.jsx)("div", {
        className: "thread",
        children: a.map((G, V) => /* @__PURE__ */ (0, J.jsxs)("p", {
          className: G.role,
          children: [G.runtime && /* @__PURE__ */ (0, J.jsx)("span", {
            className: "runtime-badge",
            children: ib(G.runtime)
          }), G.text]
        }, `${G.role}-${V}`))
      }),
      /* @__PURE__ */ (0, J.jsx)("div", {
        className: "prompt-strip",
        "aria-label": "Demo prompts",
        children: UO.map((G) => /* @__PURE__ */ (0, J.jsx)("button", {
          type: "button",
          onClick: () => i(G),
          children: G
        }, G))
      }),
      /* @__PURE__ */ (0, J.jsxs)("form", {
        className: "composer",
        onSubmit: ke,
        children: [/* @__PURE__ */ (0, J.jsx)("input", {
          value: c,
          onChange: (G) => i(G.target.value),
          "aria-label": "Assistant prompt"
        }), /* @__PURE__ */ (0, J.jsx)("button", {
          type: "submit",
          disabled: Ee,
          children: Ee ? "Thinking" : "Ask"
        })]
      })
    ]
  });
}
async function AO(n) {
  const a = await NO();
  if (a?.sendFollowUpMessage)
    try {
      return await a.sendFollowUpMessage({
        prompt: `Answer inside the conversation using the AI Assistant context: ${n}`,
        scrollToBottom: !0
      }), {
        text: _i("Legacy ChatGPT bridge", "I sent this question to the ChatGPT host conversation. The host response will appear in the chat thread."),
        runtime: "ai-native-host-message"
      };
    } catch {
      return;
    }
}
async function jO(n, a) {
  const o = ZO(a);
  try {
    const c = await fetch(o, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        prompt: n,
        context: co,
        appId: "ai-assistant"
      })
    });
    if (!c.ok) return;
    const i = await c.json();
    return i.text ? {
      text: _i(i.provider ? `Server API chat (${i.provider})` : "Server API chat", i.text),
      runtime: i.runtime ?? "server-api-chat",
      provider: i.provider
    } : void 0;
  } catch {
    return;
  }
}
function ZO(n) {
  const a = window.__MICRO_APP_CONTEXT__?.resourceOrigin ?? window.__MICRO_APP_CONTEXT__?.shellOrigin, o = n ?? a ?? window.location.origin;
  return new URL("/api/ai-assistant/chat", o).toString();
}
function _i(n, a) {
  return `[${n}] ${a}`;
}
async function NO(n = 1500) {
  return window.openai?.sendFollowUpMessage ? window.openai : new Promise((a) => {
    const o = Date.now() + n;
    let c, i;
    const u = () => {
      c && window.clearInterval(c), i && window.clearTimeout(i), window.removeEventListener("openai:set_globals", m);
    }, d = () => {
      const y = window.openai?.sendFollowUpMessage ? window.openai : void 0;
      !y && Date.now() < o || (u(), a(y));
    }, m = (y) => {
      const h = y.detail?.openai;
      h?.sendFollowUpMessage && !window.openai && (window.openai = h), d();
    };
    window.addEventListener("openai:set_globals", m), c = window.setInterval(d, 50), i = window.setTimeout(d, n);
  });
}
function so(n) {
  if (!n) return;
  if (typeof n == "string") return n;
  if (Array.isArray(n)) return n.map(so).filter(Boolean).join(`
`) || void 0;
  if (typeof n != "object") return;
  const a = n;
  if (typeof a.text == "string") return a.text;
  if (typeof a.result == "string") return a.result;
  if (typeof a.structuredContent == "object") {
    const o = a.structuredContent;
    if (typeof o.result == "string") return o.result;
  }
  if (Array.isArray(a.content)) return so(a.content);
  if (typeof a.mcp_tool_result == "object") return so(a.mcp_tool_result);
  if (typeof a.call_tool_result == "object") return so(a.call_tool_result);
}
function IO(n) {
  return !!(n && typeof n == "object" && n.isError === !0);
}
function CO(n) {
  return {
    checking: "Checking",
    connected: "Legacy bridge connected",
    unavailable: "Not exposed"
  }[n];
}
function RO(n) {
  return {
    checking: "Checking",
    connected: "Host model connected",
    standalone: "Standalone mode",
    unavailable: "Host model unavailable"
  }[n];
}
function MO(n) {
  return {
    idle: "Ready on demand",
    available: "API answered",
    unavailable: "Unavailable"
  }[n];
}
function ib(n) {
  return {
    "ai-native-mcp-tool": "AI Native MCP tool",
    "ai-native-host-model": "AI Native host model",
    "ai-native-host-message": "AI Native host message",
    "chrome-built-in-ai": "Chrome Built-in AI",
    "server-api-chat": "Server API chat",
    "deterministic-fallback": "Deterministic fallback"
  }[n];
}
function qO(n) {
  return {
    available: "Available",
    checking: "Checking",
    downloadable: "Model downloadable",
    downloading: "Model downloading",
    unavailable: "Unavailable",
    unsupported: "Not exposed"
  }[n];
}
var fU = kO("micro-ai-assistant-app", { mount(n, a) {
  const o = E4.createRoot(n);
  return o.render(/* @__PURE__ */ (0, J.jsx)(DO, { apiBaseUrl: a.shellOrigin })), () => o.unmount();
} });
export {
  fU as MicroAiAssistantApp
};
